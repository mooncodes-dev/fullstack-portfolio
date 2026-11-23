import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "한 그릇 요리 레시피 사이트",
  description: "밥·면·국을 한 그릇에 담은 요리를 소개하고, 방문자가 레시피에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
