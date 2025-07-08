// src/components/LoginForm.tsx

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 처리
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md
                 text-black dark:text-white transition-colors duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">로그인</h2>

      <label className="block mb-2">
        {/* <span className="block mb-1">아이디</span> */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-md 
                     bg-gray-100 dark:bg-gray-700 
                     text-black dark:text-white 
                     border-gray-300 dark:border-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
        />
      </label>

      <label className="block mb-4 mt-4">
        {/* <span className="block mb-1">비밀번호</span> */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md 
                     bg-gray-100 dark:bg-gray-700 
                     text-black dark:text-white 
                     border-gray-300 dark:border-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 hover:bg-blue-600 
                   dark:bg-blue-600 dark:hover:bg-blue-700 
                   text-white rounded-md font-semibold transition"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
