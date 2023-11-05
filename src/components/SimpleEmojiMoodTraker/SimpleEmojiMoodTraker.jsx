import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
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

const SimpleEmojiMoodTraker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  const saveMood = () => {
    const id = nanoid();
    setMoodHistory([...moodHistory, { emoji: selectedEmoji, id: id }]);
    setSelectedEmoji('');
  };

  const deleteSelectedEmoji = id => {
    const updateMoodHistory = moodHistory.filter(mood => mood.id !== id);
    setMoodHistory(updateMoodHistory);
  };

  const filteredEmoji = emojiLibrary.filter(emoji => emoji === '🤩');

  return (
    <div>
      <h1>Emoji Mood Tracker</h1>
      <h2>How are you</h2>
      <div>
        {emojiLibrary.map((emoji, id) => {
          return (
            <span
              key={id}
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
      <h2>Mood history</h2>
      {moodHistory.map(mood => {
        return (
          <div key={mood.id}>
            {mood.emoji}
            <button onClick={() => deleteSelectedEmoji(mood.id)}>Delete</button>
          </div>
        );
      })}
      <h2>Filter</h2>
      {filteredEmoji.map((emoji, index) => {
        return <span key={index}>{emoji}</span>;
      })}
    </div>
  );
};

export default SimpleEmojiMoodTraker;
