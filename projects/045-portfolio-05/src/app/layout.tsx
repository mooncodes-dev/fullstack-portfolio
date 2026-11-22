import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "채용 담당자 문의 포트폴리오",
  description: "포트폴리오를 본 사람이 연락처와 메시지를 남기는 문의 폼을 붙이세요. 문의는 DB에 저장되고, 본인만 관리자 페이지에서 확인할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
