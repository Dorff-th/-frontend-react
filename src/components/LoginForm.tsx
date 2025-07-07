// src/components/LoginForm.tsx

import React, { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('로그인 시도:', username, password)
    // TODO: 로그인 API 연동
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/70 placeholder-gray-500"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/70 placeholder-gray-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
      >
        로그인
      </button>
    </form>
  )
}

export default LoginForm
