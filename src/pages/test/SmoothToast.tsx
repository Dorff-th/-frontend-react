// src/components/SmoothToast.tsx
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface ToastProps {
  id: string;
  message: string;
  onRemove: (id: string) => void;
}

const SmoothToast: React.FC<ToastProps> = ({ id, message, onRemove }) => {
  const [animateOut, setAnimateOut] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setAnimateOut(true); // 1. 애니메이션 트리거

      setTimeout(() => {
        onRemove(id); // 2. 0.2초 후 진짜 제거
      }, 200);
    }, 3000); // 3초 후 사라지기 시작

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current); // 안전하게 정리
    };
  }, [id, onRemove]);

  return (
    <div
      className={clsx(
        'transition-opacity duration-200 p-4 rounded bg-gray-800 text-white shadow',
        animateOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      {message}
    </div>
  );
};

export default SmoothToast;
