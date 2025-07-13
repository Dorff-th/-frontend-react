// src/hooks/useCalendarData.ts
import { useState, useEffect } from 'react';
import { CalendarDayData } from '../types/calendar.types';
import { getDaysInMonth } from '../utils/calendarUtils';

export const useCalendarData = (year: number, month: number) => {
  const [data, setData] = useState<CalendarDayData[]>([]);

  useEffect(() => {
    const days = getDaysInMonth(year, month);

    // 🎲 mock 감정 점수 및 요약 여부
    const mockData = days.map((date, idx) => ({
      date,
      emotionScore: Math.random() > 0.5 ? Math.floor(Math.random() * 5) + 1 : undefined,
      emotionEmoji: ['😊', '😐', '😢', '😡', '🥱'][Math.floor(Math.random() * 5)],
      hasSummary: Math.random() > 0.7,
    }));

    setData(mockData);
  }, [year, month]);

  return {
    calendarData: data,
  };
};
