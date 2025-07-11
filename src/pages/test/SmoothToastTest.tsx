// src/pages/SmoothToastTest.tsx
import React, { useState } from 'react';
import SmoothToast from './SmoothToast';
import { v4 as uuidv4 } from 'uuid';

const SmoothToastTest = () => {
  const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);

  const showToast = () => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { id, message: `토스트 메시지 ${prev.length + 1}` }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="p-6">
      <button
        onClick={showToast}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow"
      >
        토스트 생성
      </button>

      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <SmoothToast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            onRemove={removeToast}
          />
        ))}
      </div>
    </div>
  );
};

export default SmoothToastTest;
