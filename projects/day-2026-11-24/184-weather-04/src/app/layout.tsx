import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "태풍 경로 안내 사이트",
  description: "태풍의 이동 경로와 영향 지역을 알려주는 사이트이다. 회원가입과 로그인을 하면 관심 태풍의 경로를 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
