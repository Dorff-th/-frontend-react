import React from 'react';
import loadingBunny from '@/assets/characters/loading_bunny_gpt.png'; // ← 위에서 만든 이미지 저장 경로

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 dark:bg-black/70 backdrop-blur-sm">
      <img
        src={loadingBunny}
        alt="로딩 중..."
        className="w-32 h-32 animate-bounce"
      />
      <p className="mt-4 text-base font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
        GPT 토끼가 열심히 준비 중이에요...
      </p>
    </div>
  );
};

export default GlobalLoading;
