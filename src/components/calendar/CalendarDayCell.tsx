import React from 'react';
import clsx from 'clsx';

interface CalendarDayCellProps {
  date: string;
  emotion?: string;
  hasSummary?: boolean;
  weekday: number; // 0: 일요일, 6: 토요일
  isToday?: boolean;
}

const CalendarDayCell = ({ date, emotion, hasSummary, weekday, isToday }: CalendarDayCellProps) => {
  const dayColor =
    weekday === 0
      ? 'text-red-500'
      : weekday === 6
      ? 'text-blue-500'
      : 'text-black dark:text-white';

  const highlightStyle = isToday
    ? 'ring-2 ring-yellow-400 bg-yellow-100 dark:bg-yellow-900/30'
    : '';

  return (
    <div
      className={clsx(
        'h-20 w-full rounded-xl p-2 relative group cursor-pointer transition-all duration-200',
        'bg-white dark:bg-gray-800 shadow-md hover:shadow-xl',
        'hover:-translate-y-1 hover:bg-neutral-50 dark:hover:bg-gray-700',
        highlightStyle
      )}
    >
      <div className={`text-lg font-bold absolute top-1 left-2 ${dayColor}`}>{date}</div>
      <div className="text-2xl mx-auto mt-5">{emotion || ''}</div>
      {hasSummary && (
        <div className="text-green-500 text-xs mx-auto mt-1 group-hover:scale-105 transition-transform">
          GPT✅
        </div>
      )}
    </div>
  );

};




export default CalendarDayCell;
