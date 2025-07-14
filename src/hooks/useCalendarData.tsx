// src/hooks/useCalendarData.ts
import { useState, useEffect } from 'react';
import { CalendarDayData } from '../types/calendar.types';
import { getDaysInMonth } from '../utils/calendarUtils';
import { diaryMockByDate } from '@/mocks/diaryMockByDate';
import { emotionEmojiMap, EmotionLevel } from '@/types/emotionMap';

export const useCalendarData = (year: number, month: number) => {
  const [data, setData] = useState<CalendarDayData[]>([]);

  useEffect(() => {
    const days = getDaysInMonth(year, month);

    const enrichedData: CalendarDayData[] = days.map((dateStr) => {
      const dayData = diaryMockByDate[dateStr];
      const entries = dayData?.entries ?? [];
      const hasDiary = entries.length > 0;

      let averageScore: number | undefined = undefined;
      let emoji: string | undefined = undefined;

      if (hasDiary) {
        const avg = Math.round(
          entries.reduce((sum, entry) => sum + entry.emotionScore, 0) / entries.length
        );
        averageScore = Math.min(5, Math.max(1, avg));
        emoji = emotionEmojiMap[averageScore as EmotionLevel];
      }

      return {
        date: dateStr,
        emotionScore: averageScore,
        emotionEmoji: emoji,
        hasSummary: !!dayData?.gptSummary,
      };
    });

    setData(enrichedData);
  }, [year, month]);

  return {
    calendarData: data,
  };
};
