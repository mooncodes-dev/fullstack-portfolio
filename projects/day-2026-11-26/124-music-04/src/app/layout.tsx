import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 브런치 음악 추천",
  description: "주말 브런치에 어울리는 음악을 추천하고, 음악을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
