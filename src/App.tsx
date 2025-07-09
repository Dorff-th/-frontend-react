// src/App.tsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import AppRouter from '@/routes/AppRouter';

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
        <AuthProvider>
          <AppRouter />
      </AuthProvider>
    </EmotionToastProvider>
  );
   
};



export default App;
