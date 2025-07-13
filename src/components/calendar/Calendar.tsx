// src/features/calendar/components/Calendar.tsx
import React from 'react';
import { useCalendarData } from '@/hooks/useCalendarData';
import CalendarDayCell from './CalendarDayCell';
import clsx from 'clsx';

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
         <h3 className="flex items-end justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-blue-900">{month}</span>
            <span className="text-base font-medium text-black uppercase tracking-wide">
              {new Date(year, month - 1).toLocaleString('en-US', { month: 'long' })}
            </span>
            <span className="text-base text-gray-500 font-medium">{year}</span>
        </h3>
        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day, i) => (
    <div
      key={i}
      className={clsx(
        'h-12 flex items-center justify-center rounded-md shadow-md',
        'bg-gradient-to-b from-blue-100 to-gray-50 dark:from-gray-800 dark:to-gray-700',
        'text-sm font-semibold tracking-wide',
        i === 0
          ? 'text-red-500'
          : i === 6
          ? 'text-blue-500'
          : 'text-gray-800 dark:text-white'
      )}
    >
      {day}
    </div>
  ))}
    </div>

      {/* 날짜 셀 */}
      <div className="grid grid-cols-7 gap-1">
        {padding.map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {calendarData.map((day) => {
          const dateObj = new Date(day.date);
          const weekday = dateObj.getDay();

          const today = new Date();
          const isToday =
          today.getFullYear() === dateObj.getFullYear() &&
          today.getMonth() === dateObj.getMonth() &&
          today.getDate() === dateObj.getDate();

          return (
            <CalendarDayCell
              key={day.date}
              date={day.date.split('-')[2].replace(/^0/, '')}
              emotion={day.emotionEmoji}
              hasSummary={day.hasSummary}
              weekday={weekday}
              isToday={isToday}
            />
          );
      })}

      </div>
    </div>
  );
};

export default Calendar;
