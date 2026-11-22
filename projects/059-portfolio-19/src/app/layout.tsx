import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다중 사용자 포트폴리오 플랫폼",
  description: "회원가입한 누구나 자기 포트폴리오 페이지를 갖는 서비스로 만드세요. 사용자별 주소(예: /users/이름)를 갖고, 프로젝트 CRUD 권한이 본인에게만 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
