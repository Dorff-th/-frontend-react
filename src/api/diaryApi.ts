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

export interface DiaryListResponse {
  //content: DiaryItemType[];
  dtoList: DiaryItemType[];
  totalPages: number;
  page: number;
}

export const fetchDiaryList = async (page: number, size = 10) => {
  const response = await axiosInstance.get<DiaryListResponse>(
    `/user/diary-list?page=${page}&size=${size}`
  );

  return response.data;
};
