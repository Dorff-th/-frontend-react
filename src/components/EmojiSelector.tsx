import React from 'react';

const emojiOptions = ['😎', '😭', '😡', '🤔', '😴', '🤯'];

const EmojiSelector = ({ onSelect }: { onSelect: (emoji: string) => void }) => {
  return (
    <div className="flex space-x-2 mt-4">
      {emojiOptions.map((emoji) => (
        <button
          key={emoji}
          className="text-3xl hover:scale-110 transition"
          onClick={() => onSelect(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiSelector;
