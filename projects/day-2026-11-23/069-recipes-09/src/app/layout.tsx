import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "술안주 레시피 사이트",
  description: "술과 어울리는 안주 레시피를 소개하고, 주종별로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
