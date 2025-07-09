// src/pages/ToastTestPage.tsx
import React from 'react';
import { useToastHelper } from '@/components/EmotionToast/toastHelper';

const ToastTestPage = () => {
  const {
  showSuccessToast,
  showErrorToast,
  showWarningToast,
  showInfoToast,
  showGPTToast,
  showCustomToast,
} = useToastHelper();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-2xl font-bold">Emotion Toast 테스트 페이지</h1>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => showInfoToast('정보 메시지입니다!')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Info Toast
        </button>
        <button
          onClick={() => showSuccessToast('성공했습니다!')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Success Toast
        </button>

        <button
          onClick={() => showErrorToast('에러발생!')}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          error Toast
        </button>

        <button
          onClick={() => showWarningToast('경고! 위험!')}
          className="px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Warn Toast
        </button>
        <button
          onClick={() => showGPTToast('GPT 캐릭터 등장 😴')}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          GPT Toast
        </button>
        <button
          onClick={() => showCustomToast('커스텀 메시지!')}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Custom Toast
        </button>
      </div>
    </div>
  );
};

export default ToastTestPage;
