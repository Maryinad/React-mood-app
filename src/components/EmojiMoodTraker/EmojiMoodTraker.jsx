import React, { useRef, useState } from 'react';

const emojiLibrary = [
  '😀',
  '😢',
  '😍',
  '😎',
  '😠',
  '🤩',
  '😴',
  '🥳',
  '🤯',
  '🙃',
];

const EmojiMoodTracker = () => {
  const [selectedDate, setSelectedDate] = useState({
    date: null,
    time: null,
  });

  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);
  const clearForm = () => {
    setSelectedDate({
      date: null,
      time: null,
    });
    setSelectedEmoji('');

    dateInputRef.current.value = '';
    timeInputRef.current.value = '';
  };
  const saveMood = () => {
    if (!selectedDate.date || !selectedEmoji) {
      alert('Fill the form!');
      return;
    }
    const repeatedMood = moodHistory.find(
      mood => mood.date === selectedDate.date && mood.time === selectedDate.time
    );
    if (repeatedMood) {
      alert('You already saved that date and time');
      return;
    }
    setMoodHistory([
      ...moodHistory,
      {
        date: selectedDate.date,
        time: selectedDate.time,
        emoji: selectedEmoji,
      },
    ]);
    clearForm();
  };
  return (
    <div>
      <h2>Emoji Mood Tracker</h2>

      <div>
        <h3>How are you?</h3>

        <input
          ref={dateInputRef}
          type="date"
          onChange={e => {
            setSelectedDate({ ...selectedDate, date: e.target.value });
          }}
        />
        <input
          ref={timeInputRef}
          type="time"
          onChange={e =>
            setSelectedDate({ ...selectedDate, time: e.target.value })
          }
        />

        <div className="emoji-panel">
          {emojiLibrary.map(emoji => {
            return (
              <span
                className={emoji === selectedEmoji ? 'emoji-selected' : 'emoji'}
                key={emoji}
                onClick={() => {
                  setSelectedEmoji(emoji);
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
        <button onClick={saveMood}>Send</button>
      </div>

      <div>
        <h3>Mood History</h3>
        {moodHistory.map(mood => {
          return (
            <div key={mood.date + mood.time + mood.emoji}>
              {mood.date} {mood.time} - {mood.emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EmojiMoodTracker;
