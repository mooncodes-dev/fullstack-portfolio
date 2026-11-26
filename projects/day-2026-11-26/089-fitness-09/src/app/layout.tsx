import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상체 근력 기록",
  description: "상체 근력 운동의 기록을 정리하고, 운동 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
