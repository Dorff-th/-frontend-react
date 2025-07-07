// src/components/EmojiDisplay.tsx

import React from 'react';
import { useEmoji } from '@/context/EmojiContext';

const emojiList = ['😎', '😭', '😡', '🤔', '😴', '🤯'];

const EmojiDisplay = () => {
  const { emoji, setEmoji } = useEmoji();

  return (
    <>
    <div className="text-6xl relative -top-1 mb-4">{emoji}</div>
    <div className="flex gap-2">
      {emojiList.map((e) => (
         <button
            key={e}
            className={`text-4xl transition-transform duration-150 ${
              e === emoji ? 'ring-2 ring-blue-400 scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            onClick={() => setEmoji(e)}
          >
          {e}
        </button>
      ))}
    </div>
    </>
  );
};

export default EmojiDisplay;
