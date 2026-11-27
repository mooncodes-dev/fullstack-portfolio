import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "부산 바다 여행 페이지",
  description: "부산의 해변과 바다 풍경을 기록하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
