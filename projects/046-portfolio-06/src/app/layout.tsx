import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이력서 다운로드 포트폴리오",
  description: "이력서 파일을 업로드해두고 방문자가 내려받을 수 있게 하세요. 다운로드 횟수를 DB에 기록하고, 파일 교체는 로그인한 본인만 할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
