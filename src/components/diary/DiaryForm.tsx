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

const DiaryForm: React.FC = () => {
  // 상태 선언
  const [emotion, setEmotion] = useState<number>(0);
  const [habits, setHabits] = useState<string[]>([]);
  const [feelingText, setFeelingText] = useState('');
  const [feelingEnglish, setFeelingEnglish] = useState('');
  const [diary, setDiary] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('random'); // 기본값은 랜덤


  //GTP 피드백 모달 상태
  const [showModal, setShowModal] = useState(false);

  // GTP 피드백 메시지 상태
  const [gptMessage, setGptMessage] = useState('');

  // 저장 상태
  const [isSaving, setIsSaving] = useState(false);
  //const [gptFeedback, setGptFeedback] = useState('');

  // 네비게이션 훅
   const navigate = useNavigate();
   

  // 저장 버튼 클릭 처리
  const handleSubmit = async () => {
    if (!emotion || !diary.trim()) {
      alert('감정과 회고 일기를 작성해주세요!');
      return;
    }

    // ✅ 임시 GPT 메시지 (API 연결 전)
    setGptMessage('괜찮아요, 오늘도 애썼어요. 🐰');
    setShowModal(true);
    

   try {
      // ✅ 실제 DB 저장 API 호출
      await fakeSaveDiary();
    } catch (e) {
      // TODO: 에러 처리 (toast 등)
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

      {/* GPT 피드백 카드 표시 */}
      {showModal && (
        <GPTFeedbackModal
          message={gptMessage}
          type={feedbackType}
          onClose={() => {
            setShowModal(false);
            navigate('/calendar');
          }}
          duration={3000}
        />
      )}
    </div>
  );
};

export default DiaryForm;

// 💡 임시 저장 API 함수
const fakeSaveDiary = async () => {
  await new Promise((res) => setTimeout(res, 1000));
};