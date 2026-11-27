import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "겨울 스키장 날씨 페이지",
  description: "스키장 날씨와 적설량을 제공하고, 스키장 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
