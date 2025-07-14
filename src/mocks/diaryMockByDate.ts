export type DiaryEntry = {
  id: string;
  date: string; // YYYY-MM-DD
  emotionScore: number; // 1~5
  habits: string[];
  feelingKor: string;
  feelingEng: string;
  content: string;
  gptFeedback: string;
};

export const diaryMockByDate: Record<string, DiaryEntry[]> = {
  '2025-07-13': [
    {
      id: '1',
      date: '2025-07-13',
      emotionScore: 2,
      habits: ['운동', '명상'],
      feelingKor: '조금 우울했음',
      feelingEng: "I felt a bit down today",
      content: '그래도 하루를 버텼다. 내일은 조금 더 나아질 거라 믿는다.',
      gptFeedback: '힘들었지만 잘 견뎠어요. 내일은 더 괜찮을 거예요!',
    },
    {
      id: '2',
      date: '2025-07-13',
      emotionScore: 4,
      habits: ['기상시간 지키기'],
      feelingKor: '산책하면서 기분이 나아졌음',
      feelingEng: "A walk really lifted my mood",
      content: '아침에 우울했지만 산책하고 나서 기분 전환에 성공했다.',
      gptFeedback: '좋은 선택이었어요! 자연은 최고의 치유사죠 🍃',
    },
  ],

  '2025-07-14': [
    {
      id: '3',
      date: '2025-07-14',
      emotionScore: 5,
      habits: ['운동', '물마시기', '기상시간 지키기'],
      feelingKor: '하루 종일 상쾌하고 가벼운 기분이었다',
      feelingEng: "Felt light and refreshed all day",
      content: '일도 잘 풀렸고, 기분 좋은 하루였다. 이런 날이 자주 있었으면!',
      gptFeedback: '오늘 같은 날은 저장해두세요. 스스로에게 큰 선물이죠 ☀️',
    },
  ],
};
