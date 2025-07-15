import { DiaryItemType } from '@/api/diaryApi';
import { emotionEmojiMap, EmotionLevel } from '@/types/emotionMap';

export default function DiaryDetail({ diary }: { diary: DiaryItemType }) {

  const emotionValue = Number(diary.emotion);
  const emotionEmoji = emotionEmojiMap[emotionValue as EmotionLevel] ?? '😶';

  return (
    <div className="mt-4 px-2 py-2 border-t border-gray-300 text-sm text-gray-800 space-y-1">
      <p><strong>오늘의 감정:</strong> {emotionEmoji}</p>
      <p><strong>완료한 습관:</strong> {diary.habitTags.join(', ')}</p>
      <p><strong>기분 (KO):</strong> {diary.feelingKo}</p>
      <p><strong>기분 (EN):</strong> {diary.feelingEn}</p>
      <p><strong>회고 본문:</strong> {diary.content}</p>
      <p><strong>GPT 피드백:</strong> {diary.gptFeedback}</p>
    </div>
  );
}
