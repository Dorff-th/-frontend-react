// src/features/calendar/components/Calendar.tsx
import React from 'react';
import { useCalendarData } from '@/hooks/useCalendarData';
import CalendarDayCell from './CalendarDayCell';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const { calendarData } = useCalendarData(year, month);

  // 시작 요일 맞추기
  const firstDay = new Date(`${year}-${String(month).padStart(2, '0')}-01`).getDay();
  const padding = Array(firstDay).fill(null);

  return (
    <div className="w-full">
         <h3 className="text-xl font-semibold text-center mb-2">
            {year}년 {month}월
        </h3>
        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 mb-2 text-center font-semibold">
        {DAYS.map((day, i) => (
          <div key={i} className={`py-1 ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : ''}`}>
            {day}
          </div>
        ))}
    </div>

      {/* 날짜 셀 */}
      <div className="grid grid-cols-7 gap-1">
        {padding.map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {calendarData.map((day) => (
          <CalendarDayCell
            key={day.date}
            date={day.date.split('-')[2].replace(/^0/, '')} // 일(day)만 표시 (앞자리 0 제거  )
            emotion={day.emotionEmoji}
            hasSummary={day.hasSummary}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
