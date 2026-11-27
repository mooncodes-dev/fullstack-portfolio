import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "야경 여행 일지",
  description: "여행지 야경 명소를 소개하고, 야경 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
