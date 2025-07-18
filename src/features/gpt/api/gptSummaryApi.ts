import axiosInstance from "@/lib/axios/axiosInstance";

export const generateGptSummary = async (date: string): Promise<string> => {
  const response = await axiosInstance.post('/user/gpt-summary/generate', {
    date
  });
  return response.data.summary;
};
