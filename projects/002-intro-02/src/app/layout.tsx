import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아요 버튼이 있는 프로필 페이지",
  description: "프로필 페이지에 하트 버튼을 만들고, 누른 횟수를 DB에 저장해 새로고침해도 숫자가 유지되게 하세요. 같은 사람이 반복해서 누르는 것을 쿠키나 세션으로 막아보는 것도 좋습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
