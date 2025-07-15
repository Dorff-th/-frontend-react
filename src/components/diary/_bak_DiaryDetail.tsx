import { DiaryItemType } from '@/api/diaryApi';
import { emotionEmojiMap, emotionLabelMap, EmotionLevel } from '@/types/emotionMap';

export default function DiaryDetail({ diary }: { diary: DiaryItemType }) {

  const emotionValue = Number(diary.emotion);
  const emotionEmoji = emotionEmojiMap[emotionValue as EmotionLevel] ?? '😶';
  //const emotionLabel = emotionLabelMap[emotionValue as EmotionLevel] ?? '';

  return (
    <div className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800">
      <div className="mb-4">
        <div className="text-sm text-gray-500">오늘의 감정</div>
        <div className="text-2xl"> <span className="text-base text-gray-500 ml-2">{emotionEmoji}</span></div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
      <div>
        <div className="text-gray-500">완료한 습관</div>
        <div className="font-medium">{diary.habitTags.join(', ')}</div>
      </div>
      <div>
        <div className="text-gray-500">기분 (KO)</div>
        <div className="font-medium">{diary.feelingKo}</div>
      </div>
      <div>
        <div className="text-gray-500">기분 (EN)</div>
        <div className="font-medium">{diary.feelingEn}</div>
      </div>
    </div>
    <div className="mb-4">
      <div className="text-gray-500 text-sm">회고 본문</div>
      <div className="text-sm mt-1 text-gray-800 dark:text-gray-100">{diary.content}</div>
    </div>

    <div>
      <div className="text-gray-500 text-sm">GPT 피드백</div>
      <div className="text-sm italic text-gray-600 dark:text-gray-300 mt-1">{diary.gptFeedback ?? '아직 GPT 피드백이 없습니다.'}</div>
    </div>
  </div>

  );
}
