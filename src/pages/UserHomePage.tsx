import Header from '@/components/Header';
import { useTheme } from '@/context/ThemeContext';
import clsx from 'clsx';

const UserHomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={clsx(
        'min-h-screen transition-colors duration-500',
        isDarkMode
          ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white'
          : 'bg-gradient-to-b from-blue-100 to-white text-black'
      )}
    >
      <Header />

      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">여기는 사용자 페이지 🎯</h2>
          <p>회고 입력폼 등 앞으로 들어올 콘텐츠 영역입니다.</p>
        </div>
      </main>
    </div>
  );
};

export default UserHomePage;
