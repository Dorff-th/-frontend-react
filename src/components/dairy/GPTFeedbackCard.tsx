import React from 'react';
import clsx from 'clsx';
import { FeedbackType } from './FeedbackTypeSelect';

interface GPTFeedbackCardProps {
  message: string;
  feedbackType: FeedbackType;
}

const typeStyleMap: Record<FeedbackType, string> = {
  위로: 'bg-blue-100 border-blue-400 text-blue-900',
  칭찬: 'bg-green-100 border-green-400 text-green-900',
  갈굼: 'bg-red-100 border-red-400 text-red-900',
  비웃음: 'bg-yellow-100 border-yellow-400 text-yellow-900',
  랜덤: 'bg-gray-100 border-gray-400 text-gray-800',
};

const typeEmojiMap: Record<FeedbackType, string> = {
  위로: '🧸',
  칭찬: '🎉',
  갈굼: '🔥',
  비웃음: '😏',
  랜덤: '🎲',
};

const GPTFeedbackCard: React.FC<GPTFeedbackCardProps> = ({ message, feedbackType }) => {
  return (
    <div
      className={clsx(
        'mt-8 p-4 border rounded-lg shadow-md transition-all',
        typeStyleMap[feedbackType]
      )}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">{typeEmojiMap[feedbackType]}</div>
        <div className="text-base leading-relaxed">{message}</div>
      </div>
    </div>
  );
};

export default GPTFeedbackCard;
