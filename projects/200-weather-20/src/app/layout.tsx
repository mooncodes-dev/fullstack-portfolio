import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 커뮤니티 사이트",
  description: "날씨 조회, 동네 게시판, 옷차림 추천을 하나로 합친 종합 사이트입니다. 회원가입·로그인, 즐겨찾기 도시, 게시글 CRUD를 모두 구현하는 졸업 작품으로 도전해보세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
