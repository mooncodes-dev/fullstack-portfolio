import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "실내 사이클 트레이닝 기록 페이지",
  description: "실내 자전거로 운동한 거리와 시간을 기록하고, 훈련 기록을 파일로 업로드해 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
