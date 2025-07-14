import { useState } from 'react';
import DiaryListForDateModal from '@/components/diary/DiaryListForDateModal';

const CalModalTestPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <DiaryListForDateModal
          date="2025-07-13"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default CalModalTestPage;