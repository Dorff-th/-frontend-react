// src/components/EmotionToast/useEmotionToast.ts
import { useState } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warn' | 'gpt' | 'custom';

export interface EmotionToast {
  id: string;
  message: string;
  type: ToastType;
}

export const useEmotionToastState = () => {
  const [toasts, setToasts] = useState<EmotionToast[]>([]);

  const addToast = (message: string, type: ToastType = 'info') => {
    const id = Date.now().toString();
    const newToast: EmotionToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return {
    toasts,
    addToast,
  };
};
