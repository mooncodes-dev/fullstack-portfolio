import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 날씨 메모 사이트",
  description: "여행 일지에 다녀온 날의 날씨를 외부 날씨 API로 불러와 함께 저장하는 사이트입니다. 날씨 값은 일지와 함께 DB에 기록합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
