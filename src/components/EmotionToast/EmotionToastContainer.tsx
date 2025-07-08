// src/components/EmotionToast/EmotionToastContainer.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import EmotionToastItem from './EmotionToastItem';
import { EmotionToast } from './useEmotionToast';

interface Props {
  toasts: EmotionToast[];
}

const EmotionToastContainer = ({ toasts }: Props) => {
  const container = document.getElementById('toast-root');
  if (!container) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-4 right-4 z-50">
      {toasts.map((toast) => (
        <EmotionToastItem key={toast.id} toast={toast} />
      ))}
    </div>,
    container
  );
};

export default EmotionToastContainer;
