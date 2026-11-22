import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "임시저장 블로그",
  description: "글을 바로 발행하지 않고 임시저장할 수 있게 하세요. DB에 발행 상태를 저장해, 본인만 임시 글을 볼 수 있고 나중에 발행으로 바꿀 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
