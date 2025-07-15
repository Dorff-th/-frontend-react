import { motion, AnimatePresence } from 'framer-motion';
import { DiaryItemType } from '@/api/diaryApi';
import DiaryDetail from './DiaryDetail';
import { emotionEmojiMap, EmotionLevel } from '@/types/emotionMap';

interface DiaryItemProps {
  diary: DiaryItemType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DiaryItem({ diary, isOpen, onToggle }: DiaryItemProps) {
  
  //const emotionEmoji = emotionEmojiMap[diary.emotion as EmotionLevel]

  const emotionValue = Number(diary.emotion);
  const emotionEmoji = emotionEmojiMap[emotionValue as EmotionLevel] ?? '😶';

  return (
    <div
      className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md border p-4 cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">{diary.diaryDate}</p>
          <p className="text-sm text-gray-700 line-clamp-2">{diary.content}</p>
        </div>
        <div className="text-2xl">{emotionEmoji}</div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DiaryDetail diary={diary} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
