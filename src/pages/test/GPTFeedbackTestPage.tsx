// src/pages/test/GPTFeedbackTestPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GPTFeedbackModal from '@/components/feedback/GPTFeedbackModal';
import { FeedbackType } from '@/types/feedbackTypes';

const GPTFeedbackTestPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('정말 멋진 하루를 보냈군요! 💪');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('default');
  const navigate = useNavigate();

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 px-4 py-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">GPT 피드백 모달 테스트</h1>

      <div className="mb-4 w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">피드백 메시지</label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">피드백 스타일</label>
          <select
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
          >
            <option value="default">기본</option>
            <option value="encourage">격려 🧸</option>
            <option value="scold">갈굼 🔥</option>
            <option value="roast">혼냄 😅</option>
            <option value="random">랜덤 ✨</option>
          </select>
        </div>

        <button
          onClick={handleShow}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md shadow"
        >
          피드백 모달 보기
        </button>
      </div>

      {showModal && (
        <GPTFeedbackModal
          message={message}
          type={feedbackType}
          onClose={() => {
            setShowModal(false);
            navigate('/calendar');
          }}
          duration={3000}
        />
      )}
    </div>
  );
};

export default GPTFeedbackTestPage;
