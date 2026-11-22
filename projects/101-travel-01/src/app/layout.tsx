import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기본 여행 일지 사이트",
  description: "여행지, 날짜, 후기를 글과 사진으로 남기는 사이트입니다. 일지는 DB에 저장되고 사진은 서버에 업로드됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
