// src/components/FooterMessage.tsx

import React, { useEffect, useState } from 'react';
import { useEmoji } from '@/context/EmojiContext';

const emojiMessageMap: Record<string, string> = {
  '😎': '오늘도 멋지게 시작해볼까요?',
  '😭': '울고 싶을 땐 울어도 괜찮아요.',
  '😡': '화를 쏟기보단, 회고로 정리해봐요.',
  '🤔': '고민 많은 하루? 천천히 생각해봐요.',
  '😴': '피곤한가요? 오늘은 가볍게 시작해봐요.',
  '🫠': '현타 올 땐 잠시 쉬어가도 좋아요.',
  '🤯': '머리 터질 것 같을 땐 잠시 멈춰도 괜찮아요.',
};

const FooterMessage = () => {
  //const [message, setMessage] = useState('오늘 하루도 무사하길!'); // 기본 문구
  //const [emoji, setEmoji] = useState('😎');

  const { emoji } = useEmoji();
  const message = emojiMessageMap[emoji] || '오늘도 화이팅!';

  // useEffect(() => {
  //   const saved = localStorage.getItem('emoji');
  //   if (saved) {
  //     setEmoji(saved);
  //   }
  // }, []);

  // const message = emojiMessageMap[emoji] || '오늘도 화이팅이에요!';

  return (
     <p className="text-sm text-gray-600 mt-6">
      {message}
    </p>
  );
};

export default FooterMessage;
