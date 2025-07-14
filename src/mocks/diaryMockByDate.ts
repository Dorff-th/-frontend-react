// src/mock/diaryMockByDate.ts

export type EmotionLevel = 1 | 2 | 3 | 4 | 5;

export type DiaryEntry = {
  id: string;
  date: string;
  emotionScore: EmotionLevel;
  habits: string[];
  feelingKor: string;
  feelingEng: string;
  content: string;
  gptFeedback: string;
};

export type DailyDiaryData = {
  date: string;
  entries: DiaryEntry[];
  gptSummary?: string;
};

export const diaryMockByDate: Record<string, DailyDiaryData> = {
  '2025-07-13': {
    date: '2025-07-13',
    gptSummary: '오늘은 감정 기복이 있었지만 결국 평온함을 찾았어요. 고생했어요 🌿',
    entries: [
      {
        id: '1',
        date: '2025-07-13',
        emotionScore: 2,
        habits: ['운동', '명상'],
        feelingKor: '조금 우울했음',
        feelingEng: 'I felt a bit down today',
        content: '그래도 하루를 버텼다. 내일은 조금 더 나아질 거라 믿는다.',
        gptFeedback: '힘들었지만 잘 견뎠어요. 내일은 더 괜찮을 거예요!',
      },
      {
        id: '2',
        date: '2025-07-13',
        emotionScore: 4,
        habits: ['기상시간 지키기'],
        feelingKor: '산책하면서 기분이 나아졌음',
        feelingEng: 'A walk really lifted my mood',
        content: '아침에 우울했지만 산책하고 나서 기분 전환에 성공했다.',
        gptFeedback: '좋은 선택이었어요! 자연은 최고의 치유사죠 🍃',
      },
    ],
  },

  '2025-07-14': {
    date: '2025-07-14',
    gptSummary: '기분 좋은 하루를 잘 보내셨어요! 자신을 칭찬해 주세요 ☀️',
    entries: [
      {
        id: '3',
        date: '2025-07-14',
        emotionScore: 5,
        habits: ['운동', '물마시기', '기상시간 지키기'],
        feelingKor: '하루 종일 상쾌하고 가벼운 기분이었다',
        feelingEng: 'Felt light and refreshed all day',
        content: '일도 잘 풀렸고, 기분 좋은 하루였다. 이런 날이 자주 있었으면!',
        gptFeedback: '오늘 같은 날은 저장해두세요. 스스로에게 큰 선물이죠 ☀️',
      },
    ],
  },

  '2025-07-15': {
    date: '2025-07-15',
    entries: [], // 회고는 아직 없음
    // gptSummary 없음 → 생성 버튼 노출 등으로 판단 가능
  },
  '2025-07-16': {
    date: '2025-07-16',
    entries: [
      {
        id: '3',
        date: '2025-07-16',
        emotionScore: 3,
        habits: ['독서'],
        feelingKor: '그럭저럭',
        feelingEng: 'So-so day',
        content: '평범한 하루였고 큰 감정 변화는 없었다.',
        gptFeedback: '꾸준함도 중요한 미덕이에요. 잘하고 있어요 📚',
      },
    ],
  },

  // ⛔ GPT 요약 없음 + entry만 존재
  '2025-07-17': {
    date: '2025-07-17',
    entries: [
      {
        id: '4',
        date: '2025-07-17',
        emotionScore: 1,
        habits: [],
        feelingKor: '짜증남',
        feelingEng: 'Felt annoyed',
        content: '별 일은 없었는데 그냥 짜증이 나는 하루였다.',
        gptFeedback: '그런 날도 있어요. 감정을 표현한 것만으로도 멋져요 💙',
      },
    ],
  },
};
