import axiosInstance from '@/lib/axios/axiosInstance';
import { SummaryData } from '@/features/summary/types/SummaryTypes';

export const fetchTodaySummary = async (): Promise<SummaryData> => {
  const res = await axiosInstance.get<SummaryData>('/user/summary/today');
  return res.data;
};

export const createGptSummary = async (): Promise<{ summary: string }> => {
  const res = await axiosInstance.post('/user/gpt/summary');
  return res.data;
};

//추후 수정 필요!
export const createGptFeedback = async (): Promise<{ feedback: string }> => {
  const res = await axiosInstance.post('/gpt/feedback');
  return res.data;
};


