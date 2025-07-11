import React from 'react';

interface DiaryTextareaProps {
  value: string;
  onChange: (val: string) => void;
}

const DiaryTextarea: React.FC<DiaryTextareaProps> = ({ value, onChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 mb-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2">오늘의 회고</h3>
      <textarea
        placeholder="하루를 되돌아보며 자유롭게 적어보세요..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 border border-gray-300 rounded px-3 py-2 resize-none"
      />
    </div>
  );
};

export default DiaryTextarea;
