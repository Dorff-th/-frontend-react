// src/components/diary/DiaryListForDateModal.tsx
import { useState } from 'react';
import { emotionEmojiMap, EmotionLevel  } from '@/types/emotionMap';
import { X } from 'lucide-react';

import { diaryMockByDate, DiaryEntry } from '@/mocks/diaryMockByDate';

interface DiaryListForDateModalProps {
  date: string; // 'YYYY-MM-DD'
  onClose: () => void;
}

//const emotionEmojiMap = ['😭', '😢', '😐', '😊', '😄'];

const DiaryListForDateModal = ({ date, onClose }: DiaryListForDateModalProps) => {
  const [openEntryId, setOpenEntryId] = useState<string | null>(null);
  const diaryList = diaryMockByDate[date].entries || [];

  // 최신순 정렬
  const sortedList = [...diaryList].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">📅 {date}</h2>

        {sortedList.map((entry, idx) => (
          <div key={entry.id} className="mb-4 border rounded-md p-3">
            <button
              className="w-full text-left font-semibold text-blue-900 hover:underline"
              onClick={() => setOpenEntryId(openEntryId === entry.id ? null : entry.id)}
            >
              Diary Entry {sortedList.length - idx}
            </button>

            {openEntryId === entry.id && (
              <div className="mt-3 space-y-2 text-sm text-gray-800">
                <div>😊 감정 상태: <span className="text-xl">{emotionEmojiMap[entry.emotionScore as EmotionLevel]}</span></div>
                <div>✅ 오늘의 습관: {entry.habits.join(', ') || '없음'}</div>
                <div>💬 오늘의 기분 한마디: {entry.feelingKor} / <i>{entry.feelingEng}</i></div>
                <div>📝 회고: {entry.content}</div>
                <div>🤖 GPT 피드백: {entry.gptFeedback}</div>
              </div>
            )}
          </div>
        ))}

        {sortedList.length === 0 && (
          <p className="text-center text-gray-500">해당 날짜에 작성된 회고가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default DiaryListForDateModal;
