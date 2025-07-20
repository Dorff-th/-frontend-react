import React from 'react';
import { useState } from 'react';
import { useSummaryData } from '../hooks/useSummaryData';
import { EmotionLevel } from '@/features/diary/types/emotionMap';
import TodayEmotionCard from '../components/TodayEmotionCard';
import TodayHabitCard from '../components/TodayHabitCard';
import SummaryCard from '../components/SummaryCard';
import FeedbackCard from '../components/FeedbackCard';

const SummaryPage = () => {

    const { summary, loading } = useSummaryData();

    if (loading) return <div className="text-center">불러오는 중...</div>;
    if (!summary) return <div className="text-center">오늘 회고가 없습니다.</div>;
    
    const [gptSummary, setGptSummary] = useState(summary.summary ?? '');
    const [gptFeedback, setGptFeedback] = useState(summary.feedback ?? '');
    

    return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold">오늘의 감정 요약</h2>
      <TodayEmotionCard
        emotion={summary.emotion as EmotionLevel}
        feelingKo={summary.feelingKo}
        feelingEn={summary.feelingEn}
      />
      {/* 👉 다음에 습관카드, 요약카드, 피드백카드 넣을 수 있음 */}
      <TodayHabitCard habits={summary.habitTags} />
      <FeedbackCard
        feedback={gptFeedback}
        onFeedbackUpdated={(newFeedback) => setGptFeedback(newFeedback)}
        />
    </div>
  );
};

export default SummaryPage;
