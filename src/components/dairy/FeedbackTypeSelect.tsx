import React from 'react';

interface FeedbackTypeSelectProps {
  value: FeedbackType;
  onChange: (val: FeedbackType) => void;
}

export type FeedbackType = '위로' | '칭찬' | '갈굼' | '비웃음' | '랜덤';

const options: FeedbackType[] = ['위로', '칭찬', '갈굼', '비웃음', '랜덤'];

const FeedbackTypeSelect: React.FC<FeedbackTypeSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">GPT 피드백 스타일 선택</h3>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as FeedbackType)}
        className="border border-gray-300 px-4 py-2 rounded w-full"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FeedbackTypeSelect;
