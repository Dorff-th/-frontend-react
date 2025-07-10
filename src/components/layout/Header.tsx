// src/components/Header.tsx
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToastHelper } from '@/components/toast/toastHelper';
import ThemeToggle from '@/components/common/ThemeToggle';
import bunnyIcon from '@/assets/characters/loading_bunny_gpt.png';

const Header = () => {
  const { logout } = useAuth();
  const { showInfo } = useToastHelper();

  const handleLogout = () => {

    showInfo('로그아웃 완료 👋');
    //setTimeout(() => {
      logout();
    //}, 2200);

  };
  
   return (
    <>
    <header className="bg-sky-100 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
  {/* 왼쪽: 로고 + 아이콘 */}
  <div className="flex items-center gap-2">
    {/* GTP 프로필 (추후 클릭 시 MyPage 이동) */}
        <button
           className="w-12 h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-pink-300 transition"
          onClick={() => console.log('MyPage 이동 예정')}
        >
        
    <img
      src={bunnyIcon} 
      alt="프로필"
      className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 shadow"
    />
    </button>
    <span className="text-xl font-bold text-gray-800 dark:text-white">
      감정 & 회고
    </span>
  </div>

  {/* 오른쪽: 다크모드 전환 + 로그아웃 */}
  <div className="flex items-center gap-4">
    <ThemeToggle />
     <button onClick={handleLogout}
      className="px-4 py-1 rounded-lg shadow-md text-white text-sm font-semibold
                 bg-gradient-to-r from-pink-400 to-orange-300
                 dark:from-pink-500 dark:to-orange-400
                 hover:scale-105 transition-all"
    >
      로그아웃
    </button>
  </div>
</header>

{/* Header/Body 구분선 */}
<div className="border-b border-blue-200 dark:border-gray-600 shadow-sm" />
</>
  );
};

export default Header;
