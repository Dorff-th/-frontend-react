// src/hooks/useCalendarData.ts
import { useState, useEffect } from 'react';
import { CalendarDayData } from '../types/calendar.types';
import { getDaysInMonth } from '../utils/calendarUtils';

export const useCalendarData = (year: number, month: number) => {
  const [data, setData] = useState<CalendarDayData[]>([]);

  useEffect(() => {
    const days = getDaysInMonth(year, month);

    const initialData: CalendarDayData[] = days.map((date) => ({
      date,
      emotionScore: undefined,
      emotionEmoji: undefined,
      hasSummary: false, // 요약 없음으로 초기화
    }));

    setData(initialData);
  }, [year, month]);

  return {
    calendarData: data,
  };
};
