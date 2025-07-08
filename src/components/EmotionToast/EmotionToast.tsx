// src/components/EmotionToast.tsx
import React from 'react';
import { motion } from 'framer-motion';


export const toastImageMap: Record<string, string> = {
  success: '/assets/toast/toast_char_1.png',
  error: '/assets/toast/toast_char_2.png',
  warning: '/assets/toast/toast_char_3.png',
  info: '/assets/toast/toast_char_4.png',
  sleep: '/assets/toast/toast_char_5.png',
  dull: '/assets/toast/toast_char_6.png',
};

interface EmotionToastProps {
  type: 'success' | 'error' | 'warning' | 'info' | 'sleep' | 'dull';
  message: string;
  subMessage?: string;
}

const EmotionToast: React.FC<EmotionToastProps> = ({ type, message, subMessage }) => {
  const imageSrc = toastImageMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 right-6 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 shadow-lg rounded-xl px-6 py-4 z-50 w-80"
    >
      <div className="flex items-start gap-3">
        <img src={imageSrc} alt="emotion" className="w-10 h-10" />
        <div className="flex-1">
          <div className="text-base font-semibold text-gray-900 dark:text-white">{message}</div>
          {subMessage && (
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{subMessage}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EmotionToast;
