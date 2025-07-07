// src/pages/LoginPage.tsx

import React from 'react'
import { EmojiProvider } from '@/context/EmojiContext';
import EmojiDisplay from '@/components/EmojiDisplay'
import EmojiSelector from '@/components/EmojiSelector';
import LoginForm from '@/components/LoginForm'
import FooterMessage from '@/components/FooterMessage'

const LoginPage = () => {

  //  const handleEmojiSelect = (emoji: string) => {
  //   localStorage.setItem('emoji', emoji);
  //   window.location.reload(); // 또는 상태 업데이트 방식으로 반영
  // };

  return (
      <EmojiProvider>
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 px-4">
      <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <EmojiDisplay />
         
        <h2 className="text-2xl font-semibold mt-4 mb-6">오늘 하루 어땠나요?</h2>
        <LoginForm />
        <FooterMessage />
      </div>
    </div>
    </EmojiProvider>
  );
};

export default LoginPage
