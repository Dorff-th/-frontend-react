// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import UserHomePage from '@/pages/UserHomePage';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (

    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* 루트에 접근했을 때 토큰 여부에 따라 분기 */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <UserHomePage />
          </PrivateRoute>
        }
      />
      {/* fallback route (optional): 정의되지 않은 경로 → 로그인 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

);

export default AppRouter;
