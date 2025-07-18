import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '@/lib/axios/axiosInstance';
import Header from '@/features/layout/components/Header';

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
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [results, setResults] = useState([]);

  const effectiveFields = selectedFields.length > 0 ? selectedFields : defaultFields;

  const fetchResults = async () => {
    try {
      const response = await axiosInstance.post('/user/diary-search', {
        query,
        fields: effectiveFields,
      });
      setResults(response.data);
    } catch (error) {
      console.error('검색 실패:', error);
    }
  };

  useEffect(() => {
    if (query) fetchResults();
  }, [query, selectedFields]);

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

      <div className="flex gap-3 flex-wrap mb-4">
        {defaultFields.map((field) => (
          <label key={field} className="flex items-center gap-1 text-sm">
            <input
              type="checkbox"
              checked={selectedFields.includes(field)}
              onChange={() => toggleField(field)}
            />
            {fieldLabels[field]}
          </label>
        ))}
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
