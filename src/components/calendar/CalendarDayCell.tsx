import React from 'react';

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
      className={`h-20 border rounded flex flex-col items-start p-1 relative group hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition ${highlightStyle}`}
    >
      <div className={`text-lg font-bold absolute top-1 left-1 ${dayColor}`}>{date}</div>
      <div className="text-2xl mx-auto mt-5">{emotion || ''}</div>
      {hasSummary && <div className="text-green-500 text-xs mx-auto">GPT✅</div>}
    </div>
  );
};




export default CalendarDayCell;
