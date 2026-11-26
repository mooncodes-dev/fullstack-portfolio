import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "텃밭 나눔 질문 포럼",
  description: "텃밭 나눔과 질문을 나누고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
