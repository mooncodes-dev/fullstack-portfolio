import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "퇴근 후 산책 블로그",
  description: "퇴근 후 산책하며 찍은 사진을 정리하고, 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
