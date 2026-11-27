import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아이와 듣는 동요 공유",
  description: "아이와 함께 듣는 동요를 공유하고, 동요 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
