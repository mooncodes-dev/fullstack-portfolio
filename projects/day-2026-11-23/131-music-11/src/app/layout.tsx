import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 페스티벌 후기 플랫폼",
  description: "다녀온 음악 페스티벌 후기를 남기는 플랫폼이다. 후기에 댓글을 달아 페스티벌 정보를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
