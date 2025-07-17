import axios from 'axios';
import { getLoadingControl } from '@/context/LoadingControl';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 3000,
});

// ✅ 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 🔐 토큰 첨부
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // ✅ 👇 전역 로딩 제외 조건 추가
    const skipGlobalLoading = (config as any).meta?.skipGlobalLoading;
    if (!skipGlobalLoading) {
      getLoadingControl().showLoading();
    }

    return config;
  },
  (error) => {
    getLoadingControl().hideLoading();
    return Promise.reject(error);
  }
);

// ✅ 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    const skipGlobalLoading = (response.config as any).meta?.skipGlobalLoading;
    if (!skipGlobalLoading) {
      getLoadingControl().hideLoading();
    }
    return response;
  },
  (error) => {
    const skipGlobalLoading = (error.config as any)?.meta?.skipGlobalLoading;
    if (!skipGlobalLoading) {
      getLoadingControl().hideLoading();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
