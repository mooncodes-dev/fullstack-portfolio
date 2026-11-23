import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 사진 기록 사이트",
  description: "날씨 사진을 파일 업로드로 올려 기록하는 사이트이다. 사진과 함께 날씨를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
