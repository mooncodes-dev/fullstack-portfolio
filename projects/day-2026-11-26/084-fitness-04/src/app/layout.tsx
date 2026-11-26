import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "팔 운동 가이드",
  description: "팔 근력을 키우는 운동을 사진과 함께 소개하고, 동작 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
