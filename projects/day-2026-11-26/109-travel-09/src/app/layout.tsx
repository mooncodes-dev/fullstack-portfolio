import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "경주 벚꽃 여행 기록",
  description: "경주의 벚꽃 명소를 기록하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
