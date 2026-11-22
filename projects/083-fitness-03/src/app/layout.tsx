import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 루틴 만들기 페이지",
  description: "운동을 골라 나만의 루틴을 조합하고 저장하세요. 루틴과 운동의 순서 정보를 DB에 저장하고, 루틴을 수정·삭제할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
