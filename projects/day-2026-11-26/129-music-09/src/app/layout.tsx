import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 라이딩 음악 모음",
  description: "라이딩할 때 듣는 음악을 공유하고, 음악 파일을 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
