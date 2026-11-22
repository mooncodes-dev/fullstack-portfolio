import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "멘션 알림 포럼",
  description: "댓글에서 @닉네임으로 다른 회원을 부르면 그 회원에게 알림이 가는 포럼입니다. 알림은 DB에 저장되고 알림 목록에서 확인할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
