import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '@/lib/axios/axiosInstance';
import Header from '@/features/layout/components/Header';
import EmotionRangeSlider from '@/features/ui/components/EmotionRangeSlider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ko } from 'date-fns/locale';

const defaultFields = ['feelingKo', 'feelingEn', 'content', 'feedback'];

const fieldLabels: Record<string, string> = {
  feelingKo: '감정 한마디 (한글)',
  feelingEn: '감정 한마디 (영문)',
  content: '회고 본문',
  feedback: 'GPT 피드백',
};

const highlightKeyword = (text: string, keyword: string) => {
  if (!keyword) return text;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 정규식 이스케이프
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};


const SearchResultPage = () => {

  const [emotionRange, setEmotionRange] = useState<[number, number]>([1, 5]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [results, setResults] = useState([]);

  const effectiveFields = selectedFields.length > 0 ? selectedFields : defaultFields;

  const handleSearchClick = async () => {
    try {
      const response = await axiosInstance.post('/user/diary-search', {
        query,
        fields: effectiveFields,
        emotionMap: {
          min: emotionRange[0],
          max: emotionRange[1]
        },
        diaryDateMap:
          startDate && endDate
          ? {
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
          }
          : undefined,
        });
      setResults(response.data);
    } catch (error) {
      console.error('검색 실패:', error);
    }
  };


  const toggleField = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">🔍 ‘{query}’ 검색 결과</h2>
      {query && (
        <p className="text-sm text-gray-500 mb-4">
          총 <strong>{results.length}</strong>건의 결과가 검색되었습니다.
        </p>
      )}

      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border border-blue-200 mb-8">
  {/* 체크박스 영역 */}
  <div className="flex gap-3 flex-wrap mb-4">
    {defaultFields.map((field) => (
      <label
        key={field}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        <input
          type="checkbox"
          checked={selectedFields.includes(field)}
          onChange={() => toggleField(field)}
          className="accent-blue-600 w-4 h-4"
        />
        {fieldLabels[field]}
      </label>
    ))}
  </div>

  {/* 감정 슬라이더 */}
  <div className="w-full max-w-[400px] px-4 mb-6">
    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
      감정 점수 (범위 설정)
    </p>
    <EmotionRangeSlider value={emotionRange} onChange={setEmotionRange} />
  </div>

  {/* 날짜 선택 */}
  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
    <div className="flex flex-wrap items-center gap-4 mb-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-inner border border-gray-200 dark:border-gray-700">
      <DatePicker
        label="시작일"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
      />
      <span className="text-gray-500">~</span>
      <DatePicker
        label="종료일"
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
      />
    </div>
  </LocalizationProvider>

  {/* 검색 버튼 */}
  <div className="flex justify-end">
    <button
      onClick={handleSearchClick}
      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition duration-200"
    >
      🔍 검색
    </button>
  </div>
</div>


      <ul className="space-y-4">
        {results.map((entry: any) => (
          <li
            key={entry.id}
            className="p-4 rounded-xl shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="text-sm text-gray-500">📅 {entry.diaryDate}</div>
            <div
              className="text-xl mt-1"
              dangerouslySetInnerHTML={{ __html: highlightKeyword(entry.content, query) }}
            />
            <div
              className="mt-1 text-sm text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: highlightKeyword(
                `감정: ${entry.feelingKo} / ${entry.feelingEn} | 😶 감정 점수: ${entry.emotion}`,
                query
            ),
      }}
/>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default SearchResultPage;
