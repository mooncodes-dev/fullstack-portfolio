import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일지 관리자 승인 사이트",
  description: "관리자가 여행 일지를 검토하고 승인하는 사이트이다. 회원가입과 로그인을 한 뒤 일지를 등록하면 관리자가 내용을 확인하고 공개 여부를 결정한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
