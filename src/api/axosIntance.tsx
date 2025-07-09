// src/api/axiosInstance.ts
import axios from 'axios';
import { getLoadingControl } from '@/context/LoadingControl';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 3000,
});

// ✅ 요청 인터셉터: 토큰 첨부 + 전역 로딩 시작
axiosInstance.interceptors.request.use(
  (config) => {
    // 🔐 토큰 첨부
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // ⏳ 로딩 시작
    getLoadingControl().showLoading();

    // ✅ 강제 딜레이 추가 (개발용)
    // ✅ 강제 딜레이: async 대신 Promise 직접 리턴
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(config);
      }, 2000); // 1.5초 지연
    });

    return config;
  },
  (error) => {
    getLoadingControl().hideLoading();
    return Promise.reject(error);
  }
);

// ✅ 응답 인터셉터: 전역 로딩 종료
axiosInstance.interceptors.response.use(
  (response) => {
    getLoadingControl().hideLoading();
    return response;
  },
  (error) => {
    getLoadingControl().hideLoading();
    return Promise.reject(error);
  }
);

export default axiosInstance;
