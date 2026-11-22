import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이미지 갤러리 포트폴리오",
  description: "프로젝트 스크린샷을 여러 장 업로드할 수 있는 포트폴리오입니다. 이미지는 서버에 저장하고 순서까지 DB에 기록해 슬라이드로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
