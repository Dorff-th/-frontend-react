// src/components/EmotionToast/EmotionToastProvider.tsx
import React from 'react';
import { ToastContext, useEmotionToastState } from '@/components/toast/useEmotionToast';

type Props = {
  children: React.ReactNode;
};

export const EmotionToastProvider = ({ children }: Props) => {
  const state = useEmotionToastState();

  return (
    <ToastContext.Provider value={state}>
      {children}
    </ToastContext.Provider>
  );
};
