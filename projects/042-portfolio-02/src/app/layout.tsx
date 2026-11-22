import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기술 스택 필터 포트폴리오",
  description: "프로젝트를 사용 기술(Python, React 등)로 필터링해서 볼 수 있게 하세요. 기술 정보는 DB에 저장하고, 필터는 서버 조회로 처리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
