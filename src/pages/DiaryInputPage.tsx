import React from 'react';
import Header from '@/components/layout/Header';
import { useTheme } from '@/context/ThemeContext';
import clsx from 'clsx';
import DiaryForm from '@/components/diary/DiaryForm';

const DiaryInputPage: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={clsx(
        'min-h-screen transition-colors duration-500 bg-gradient-to-b',
        isDarkMode
          ? 'from-gray-900 to-gray-800'
          : 'from-blue-100 to-white'
      )}
    >
      <Header />

      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-8">
          {/* <h2 className="text-2xl font-semibold mb-6">오늘의 감정 & 회고 입력 ✍️</h2> */}
          <DiaryForm />
        </div>
      </main>
    </div>
  );
};

export default DiaryInputPage;
