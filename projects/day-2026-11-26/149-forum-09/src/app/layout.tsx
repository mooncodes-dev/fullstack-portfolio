import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈트레이닝 후기 포럼",
  description: "홈트레이닝 후기와 질문을 공유하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
