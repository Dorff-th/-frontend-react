import { useEffect, useState } from 'react';
import { fetchDiaryList, DiaryItemType } from '@/api/diaryApi';
import DiaryItem from '@/components/diary/DiaryItem';
import Pagination from '@/components/diary/Pagination';

export default function DiaryListPage() {
  const [page, setPage] = useState(1);
  const [diaries, setDiaries] = useState<DiaryItemType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchDiaryList(page);
      //console.log('Diary List Data\'s dtoLIst:', data.dtoList); // Debugging log
      setDiaries(data.dtoList);
      setTotalPages(data.totalPages);
    };
    load();
  }, [page]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">📋 나의 회고 목록</h2>
      <div className="space-y-4">
        {diaries.map((diary) => (
          console.log('Rendering DiaryItem for:', diary), // Debug
          <DiaryItem
            key={diary.id}
            diary={diary}
            isOpen={openId === diary.id}
            onToggle={() => setOpenId(openId === diary.id ? null : diary.id)}
          />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
