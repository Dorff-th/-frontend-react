// src/features/calendar/components/Calendar.tsx
import React from 'react';
import { useCalendarData } from '@/hooks/useCalendarData';
import CalendarDayCell from './CalendarDayCell';
import clsx from 'clsx';
import { useState } from 'react';
import CalendarSelector from './CalendarSelector';
import DiaryListForDateModal from '@/components/diary/DiaryListForDateModal';

//mock data
import { diaryMockByDate } from '@/mocks/diaryMockByDate';
const hasDiaryForDate = (fullDate: string): boolean => {
  return diaryMockByDate[fullDate]?.length > 0;
};


const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    if (hasDiaryForDate(date)) {
      setSelectedDate(date);
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());  

  const year = currentDate.getFullYear();  // ← 수정!
  const month = currentDate.getMonth() + 1;  // ← 수정!

  const { calendarData } = useCalendarData(year, month);  // ← OK!

  // 시작 요일 맞추기
  const firstDay = new Date(`${year}-${String(month).padStart(2, '0')}-01`).getDay();
  const padding = Array(firstDay).fill(null);



  //월 이동 버튼 클릭 함수
  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

 return (
  <div className="w-full">
    {/* 월 이동 헤더 */}
    <div className="flex items-center justify-between mb-4 px-2">
      <button
        onClick={handlePrevMonth}
        className="text-sm sm:text-base text-gray-500 font-medium"
      >
        ◀ Prev
      </button>
      
        <CalendarSelector currentDate={currentDate} setCurrentDate={setCurrentDate} />

      <button
        onClick={handleNextMonth}
        className="text-sm sm:text-base text-gray-500 font-medium"
      >
        Next ▶
      </button>
    </div>

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
            hasSummary={day.hasSummary}
            weekday={weekday}
            isToday={isToday}
            year={dateObj.getFullYear()}
            month={dateObj.getMonth() + 1} // 월은 0부터 시작하므로 +1
            onClick={handleDateClick} // 👈 이렇게 넘김
          />
        );
      })}

      {selectedDate && (
  <DiaryListForDateModal
    date={selectedDate}
    onClose={() => setSelectedDate(null)}
  />
)}

    </div>
  </div>
);

};

export default Calendar;
