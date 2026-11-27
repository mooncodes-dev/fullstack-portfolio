import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "패션 스타일리스트 포트폴리오",
  description: "스타일링한 코디와 화보를 보여주고, 코디 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
