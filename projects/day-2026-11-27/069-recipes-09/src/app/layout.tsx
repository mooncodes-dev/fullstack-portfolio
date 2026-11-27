import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음료 레시피 공유",
  description: "집에서 만드는 음료 레시피를 공유하고, 음료 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
