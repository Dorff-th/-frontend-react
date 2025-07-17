// src/routes/AppRouter.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import UserHomePage from '@/pages/UserHomePage';
import PrivateRoute from './PrivateRoute';
import DiaryInputPage from '@/pages/DiaryInputPage';
import CalendarPage from '@/components/calendar/CalendarPage';
import DiaryListPage from '@/pages/DiaryListPage';
import DiaryInsightsPage from '@/pages/EmotionStatsPage';

//test page
import GPTFeedbackTestPage from '@/pages/test/GPTFeedbackTestPage';
import CalModalTestPage from '@/pages/test/CalModalTestPage';

const AppRouter = () => (

    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* 루트에 접근했을 때 토큰 여부에 따라 분기 */}
      <Route
        path="/"
        element={
          <PrivateRoute>
             <Navigate to="/user/home" replace />
          </PrivateRoute>
        }
      />
      <Route path="/user/home" element={<PrivateRoute><UserHomePage /></PrivateRoute>} /> {/* 추가 */}
      <Route path="/user/diary-form" element={<PrivateRoute><DiaryInputPage /></PrivateRoute>} /> {/* 추가 */}

      { /* 캘린더 페이지 */}
      <Route path="/user/calendar" element={<PrivateRoute><CalendarPage /></PrivateRoute>} />

      { /* 다이어리 목록 페이지 */}
      <Route path="/user/diary-list" element={<PrivateRoute><DiaryListPage /></PrivateRoute>} />

      { /* 감정 통계 페이지 */}
      <Route path="/user/diary-insights" element={<PrivateRoute><DiaryInsightsPage /></PrivateRoute>} />

      {/* 404 page*/}
       <Route path="*" element={<NotFoundPage />} />

      { /* 테스트 페이지 */}
      <Route path="/test/feedback" element={<GPTFeedbackTestPage />} />
      <Route path="/test/cal-modal" element={<CalModalTestPage />} />  
       
    </Routes>

);

export default AppRouter;

