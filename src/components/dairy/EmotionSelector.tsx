import React from 'react';
import clsx from 'clsx';

interface EmotionSelectorProps {
  selected: number;
  onChange: (value: number) => void;
}

const emotionList = [
  { value: 1, emoji: '😢', label: '슬픔' },
  { value: 2, emoji: '😐', label: '무덤덤' },
  { value: 3, emoji: '🙂', label: '보통' },
  { value: 4, emoji: '😄', label: '좋음' },
  { value: 5, emoji: '🤩', label: '최고' },
];

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ selected, onChange }) => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-lg transition-colors duration-500 rounded-2xl p-4 mb-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2">오늘 감정은 어땠나요?</h3>
      <div className="flex justify-between gap-4">
        {emotionList.map((item) => (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={clsx(
              'text-3xl transition-transform duration-200',
              selected === item.value ? 'scale-125 border-2 border-blue-400 rounded-full' : 'opacity-70'
            )}
            title={item.label}
          >
            {item.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmotionSelector;
