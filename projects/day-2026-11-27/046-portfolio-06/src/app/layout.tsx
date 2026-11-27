import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "건축 설계 포트폴리오",
  description: "설계한 건축물을 도면과 함께 보여주고, 건축물 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
