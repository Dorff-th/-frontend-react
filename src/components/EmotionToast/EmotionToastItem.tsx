// src/components/EmotionToast/EmotionToastItem.tsx
import React from 'react';
import { EmotionToast } from './useEmotionToast';
import clsx from 'clsx';

interface Props {
  toast: EmotionToast;
  onRemove: (id: string) => void; 
}

export const toastImageMap: Record<string, string> = {
  success: '/assets/toast/toast_char_1.png',
  error: '/assets/toast/toast_char_2.png',
  warn: '/assets/toast/toast_char_3.png',
  info: '/assets/toast/toast_char_4.png',
  gpt: '/assets/toast/toast_char_5.png',
  custom: '/assets/toast/toast_char_6.png',
};


const EmotionToastItem = ({ toast }: Props) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 px-4 py-2 rounded-lg shadow-md mb-2 transition-all',
        'text-white',
        {
          'bg-green-500': toast.type === 'success',
          'bg-red-500': toast.type === 'error',
          'bg-blue-500': toast.type === 'info',
          'bg-yellow-500': toast.type === 'warn',
          'bg-purple-500': toast.type === 'gpt',
          'bg-gray-700': toast.type === 'custom',
          [`dark:bg-opacity-80`]: true,
        }
      )}
    >
      <img
        src={toastImageMap[toast.type]}
        alt="toast character"
        className="w-8 h-8"
      />
      <span>{toast.message}</span>
    </div>
  );
};

export default EmotionToastItem;
