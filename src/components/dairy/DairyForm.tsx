import React, { useState } from 'react';
import EmotionSelector from './EmotionSelector';
import HabitChecklist from './HabitChecklist';
import FeelingInput from './FeelingInput';
import DiaryTextarea from './DiaryTextarea';
import FeedbackTypeSelect, { FeedbackType } from './FeedbackTypeSelect';
import SubmitButton from './SubmitButton';
import GPTFeedbackCard from './GPTFeedbackCard';

const DiaryForm: React.FC = () => {
  // 상태 선언
  const [emotion, setEmotion] = useState<number>(0);
  const [habits, setHabits] = useState<string[]>([]);
  const [feelingText, setFeelingText] = useState('');
  const [feelingEnglish, setFeelingEnglish] = useState('');
  const [diary, setDiary] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('랜덤');

  // 저장 상태
  const [isSaving, setIsSaving] = useState(false);
  const [gptFeedback, setGptFeedback] = useState('');

  // 저장 버튼 클릭 처리
  const handleSubmit = async () => {
    if (!emotion || !diary.trim()) {
      alert('감정과 회고 일기를 작성해주세요!');
      return;
    }

    setIsSaving(true);

    try {
      // ✅ 실제 저장 API는 나중에 추가 예정
      console.log('📝 저장할 데이터:', {
        emotion,
        habits,
        feelingText,
        feelingEnglish,
        diary,
        feedbackType,
      });

      // 🎭 GPT 피드백 모킹
      const mockGPTFeedback = {
        위로: '괜찮아요, 오늘도 애썼어요. 🐰',
        칭찬: '정말 멋진 하루를 보냈군요! 💪',
        갈굼: '이래서 되겠어? 내일부터 다시 시작이야. 💢',
        비웃음: '그래서… 오늘 이게 다라고? 😏',
        랜덤: '무슨 말이 필요해? 그냥 당신 최고야. 🎯',
      };

      const selectedType = feedbackType === '랜덤'
        ? (['위로', '칭찬', '갈굼', '비웃음'][
            Math.floor(Math.random() * 4)
          ] as FeedbackType)
        : feedbackType;

      setTimeout(() => {
        setGptFeedback(mockGPTFeedback[selectedType]);
        setIsSaving(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      alert('저장 중 오류 발생');
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

      {/* GPT 피드백 카드 표시 */}
      {gptFeedback && (
        <GPTFeedbackCard message={gptFeedback} feedbackType={feedbackType} />
      )}
    </div>
  );
};

export default DiaryForm;
