// src/App.tsx

import React, { useEffect, useState } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import AppRouter from '@/routes/AppRouter';
import { EmotionToastProvider } from '@/components/toast/EmotionToastProvider';
import { EmotionToastContainer } from '@/components/toast/EmotionToastContainer';
import { LoadingProvider } from '@/context/LoadingContext';
import LoadingOverlay from '@/components/overlay/LoadingOverlay';
import { ThemeProvider } from './context/ThemeContext';

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
    
    <ThemeProvider>
    <EmotionToastProvider>
      <LoadingProvider>
      <LoadingOverlay />
      <EmotionToastContainer />
        <AuthProvider>
          <AppRouter />
      </AuthProvider>
      </LoadingProvider>
    </EmotionToastProvider>
    </ThemeProvider>
  );
   
};



export default App;
