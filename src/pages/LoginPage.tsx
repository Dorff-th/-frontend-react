// src/pages/LoginPage.tsx

import React from 'react';
import { EmojiProvider } from '@/context/EmojiContext';
import EmojiDisplay from '@/components/EmojiDisplay';
import LoginForm from '@/components/LoginForm';
import FooterMessage from '@/components/FooterMessage';
import ThemeToggle from '@/components/common/ThemeToggle';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center 
                    bg-gradient-to-b from-blue-100 to-white 
                    dark:from-gray-800 dark:to-gray-900 
                    text-black dark:text-white 
                    transition-colors duration-300 px-4">
      <EmojiProvider>
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-sm text-center relative">
          
          {/* ✅ 카드 내부로 이동 */}
          <ThemeToggle />

          <EmojiDisplay />
          <h2 className="text-2xl font-semibold mt-4 mb-6">오늘 하루 어땠나요?</h2>
          <LoginForm />
          <FooterMessage />
        </div>
      </EmojiProvider>
    </div>
  );
};

export default LoginPage;
