import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "발효 음식 레시피 사이트",
  description: "김치·된장·식초 같은 발효 음식을 소개하고, 숙성 과정을 사진으로 기록할 수 있다. 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
