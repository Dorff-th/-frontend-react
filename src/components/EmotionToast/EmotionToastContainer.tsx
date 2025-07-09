import { createPortal } from 'react-dom';
import { useEmotionToast } from '@/components/EmotionToast/useEmotionToast';
import EmotionToastItem from '@/components/EmotionToast/EmotionToastItem';

export const EmotionToastContainer = () => {
  const { toasts, removeToast } = useEmotionToast();

  return createPortal(
    <div className="fixed top-4 right-4 flex flex-col gap-2 z-[9999]">
      {toasts.map((toast) => (
        <EmotionToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>,
    document.body
  );
};
