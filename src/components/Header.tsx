// src/components/Header.tsx
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToastHelper } from '@/components/EmotionToast/toastHelper';

const Header = () => {
  const { logout } = useAuth();
  const { showInfo } = useToastHelper();

  const handleLogout = () => {
    logout();
    showInfo('로그아웃 완료 👋');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <div className="text-lg font-bold">감정&회고 앱</div>
      <button onClick={handleLogout} className="text-sm text-red-500">
        로그아웃
      </button>
    </header>
  );
};

export default Header;
