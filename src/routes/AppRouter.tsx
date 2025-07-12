// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import UserHomePage from '@/pages/UserHomePage';
import PrivateRoute from './PrivateRoute';
import DiaryInputPage from '@/pages/DiaryInputPage';
import GPTFeedbackTestPage from '@/pages/test/GPTFeedbackTestPage';

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
       <Route path="/diary" element={<PrivateRoute><DiaryInputPage /></PrivateRoute>} /> {/* 추가 */}

       
      <Route path="/test/feedback" element={<GPTFeedbackTestPage />} />
       {/* 404 page*/}
       <Route path="*" element={<NotFoundPage />} />
    </Routes>

);

export default AppRouter;
