// src/App.tsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import ToastTestPage from '@/pages/ToastTestPage';

import { EmotionToastProvider } from '@/components/EmotionToast/EmotionToastProvider';
import { EmotionToastContainer } from '@/components/EmotionToast/EmotionToastContainer';


const App = () => {

  const [theme, setTheme] = useState('light');

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

  return (
    <EmotionToastProvider>
      <EmotionToastContainer />
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      {/* 나중에 추가될 페이지도 여기에 추가하면 됨 */}
      <Route path="/toast-test" element={<ToastTestPage />} />
    </Routes>
     </EmotionToastProvider>
  );
   
};



export default App;
