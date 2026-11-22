import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "듀엣 파트너 매칭 플랫폼",
  description: "함께 부르고 싶은 곡과 음역대를 등록하면 비슷한 사람을 찾아주는 플랫폼입니다. 프로필 정보는 DB에 저장하고 매칭 요청을 보낼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
