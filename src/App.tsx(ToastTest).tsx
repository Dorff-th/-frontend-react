// src/App.tsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import { useEmotionToastState } from './components/EmotionToast/useEmotionToast';
import EmotionToastContainer from './components/EmotionToast/EmotionToastContainer';


const App = () => {

  const [theme, setTheme] = useState('light');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      const hour = new Date().getHours();
      const isDark = hour >= 18 || hour < 6;
      const autoTheme = isDark ? 'dark' : 'light';
      setTheme(autoTheme);
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', autoTheme);
    } else {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    }
  }, []);

  // return (
  //   <Routes>
  //     <Route path="/" element={<Navigate to="/login" />} />
  //     <Route path="/login" element={<LoginPage />} />
  //     {/* 나중에 추가될 페이지도 여기에 추가하면 됨 */}
  //   </Routes>
  // );

  const { toasts, addToast } = useEmotionToastState();

return (
     <>
      <div className="p-8 flex flex-col gap-2">
        <button
          onClick={() => addToast('로그인 성공!', 'success')}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Success Toast
        </button>

        <button
          onClick={() => addToast('에러 발생!', 'error')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Error Toast
        </button>

        <button
          onClick={() => addToast('정보입니다 💡', 'info')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Info Toast
        </button>

        <button
          onClick={() => addToast('GPT가 조용히 말하길... 😴', 'gpt')}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          GPT Toast
        </button>

        <button
          onClick={() => addToast('주의! 이건 좀 위험해 ⚠️', 'warn')}
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Warn Toast
        </button>

        <button
          onClick={() => addToast('이건 너만을 위한 메시지 💌', 'custom')}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Custom Toast
        </button>
      </div>

      <EmotionToastContainer toasts={toasts} />
    </>
  );

   
};



export default App;
