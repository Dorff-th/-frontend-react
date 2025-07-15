import axiosInstance from './axiosInstance';

export interface DiaryItemType {
  id: number;
  diaryDate: string;
  summary: string;
  emotion: string;
  habitTags: string[];
  feelingKo: string;
  feelingEn: string;
  content: string;
  gptFeedback: string;
  feedback: string;
}

// export interface DiaryListResponse {
//   //content: DiaryItemType[];
//   dtoList: DiaryItemType[];
//   totalPages: number;
//   page: number;
// }

export type DiaryListResponse = DiaryGroup[]; // 그냥 배열로 반환됨

//new interfcace (2025.07.15 14:40 by GPT)
export interface DiaryEntry {
  id: number;
  content: string;
  emotion: number;
  feedback: string;
  feelingKo: string;
  feelingEn: string;
  habitTags: string[];
  createdAt: string;
}

export interface DiaryGroup {
  date: string;
  summary: string | null;
  entries: DiaryEntry[];
}


export const fetchDiaryList = async (page: number, size = 10) => {
  const response = await axiosInstance.get<DiaryListResponse>(
    `/user/diary-list?page=${page}&size=${size}`
  );

  return response.data;
};


