import React from 'react';
import EmojiMoodTraker from './EmojiMoodTraker/EmojiMoodTraker';
import SimpleEmojiMoodTraker from './SimpleEmojiMoodTraker/SimpleEmojiMoodTraker';
import './App.css';

export const App = () => {
  return (
    <div>
      <EmojiMoodTraker />
      <SimpleEmojiMoodTraker />
    </div>
  );
};
