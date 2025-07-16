import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmotionSelector from './EmotionSelector';
import HabitChecklist from './HabitChecklist';
import FeelingInput from './FeelingInput';
import DiaryTextarea from './DiaryTextarea';
import FeedbackTypeSelect from './FeedbackTypeSelect';
import SubmitButton from './SubmitButton';
import GPTFeedbackModal from '@/components/feedback/GPTFeedbackModal';
import { FeedbackType } from '@/types/feedbackTypes';
import axiosInstance from '@/api/axiosInstance';
import { format } from 'date-fns';

const DiaryForm: React.FC = () => {
  // 상태 선언
  const [emotion, setEmotion] = useState<number>(0);
  const [habits, setHabits] = useState<string[]>([]);
  const [feelingText, setFeelingText] = useState('');
  const [feelingEnglish, setFeelingEnglish] = useState('');
  const [diary, setDiary] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('random');

  // GTP 피드백 모달 상태
  const [showModal, setShowModal] = useState(false);
  const [gptMessage, setGptMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();

  const fetchGptFeedback = async (content: string, feedbackType: FeedbackType): Promise<string> => {
    try {
      const response = await axiosInstance.post('/gpt/diary-feedback', {
        content,
        feedbackType,
      });
      return response.data.feedback;
    } catch (error) {
      console.error('GPT 피드백 실패:', error);
      return '오늘도 수고했어요. 내일은 더 잘할 수 있을 거예요!'; // fallback
    }
  };

  // 저장 버튼 클릭 처리
  const handleSubmit = async () => {
    if (!emotion || !diary.trim()) {
      alert('감정과 회고 일기를 작성해주세요!');
      return;
    }

    setIsSaving(true);
    setShowModal(true); // 모달 먼저 열고

    try {
      // 1. GPT 피드백 생성
      const gptFeedback = await fetchGptFeedback(diary, feedbackType);
      //const gptFeedback = ' gptFeedBack 테스트.   '; // Mock 데이터로 대체
      console.log('GPT 피드백:', gptFeedback);
      setGptMessage(gptFeedback); // 모달에 바로 표시됨

      // 2. 회고 저장 요청
      const payload = {
        diaryDate: format(new Date(), 'yyyy-MM-dd'),
        emotionScore: emotion,
        habitTags: habits,
        feelingKo: feelingText,
        feelingEn: feelingEnglish,
        content: diary,
        feedback: gptFeedback,
      };

      await axiosInstance.post('/user/diary', payload);
    } catch (e) {
      console.error('저장 중 오류 발생:', e);
      setGptMessage('저장에 실패했어요. 다시 시도해주세요. 😢');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h2 className="text-2xl font-bold mb-2">오늘의 감정 & 회고</h2>

      <EmotionSelector selected={emotion} onChange={setEmotion} />
      <HabitChecklist selectedHabits={habits} onChange={setHabits} />
      <FeelingInput
        value={feelingText}
        onChange={setFeelingText}
        selectedEnglish={feelingEnglish}
        onEnglishSelect={setFeelingEnglish}
      />
      <DiaryTextarea value={diary} onChange={setDiary} />
      <FeedbackTypeSelect value={feedbackType} onChange={setFeedbackType} />
      <SubmitButton isLoading={isSaving} onClick={handleSubmit} />

      {showModal && (
        <GPTFeedbackModal
          message={gptMessage}
          type={feedbackType}
          onClose={() => {
            setShowModal(false);
            navigate('/user/calendar');
          }}
          duration={3000}
        />
      )}
    </div>
  );
};

export default DiaryForm;
