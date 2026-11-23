import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 동행 일정 조율 사이트",
  description: "회원가입과 로그인을 하면 동행자와 여행 일정을 조율하는 사이트이다. 일정표 파일을 파일 업로드로 공유하고 일정을 등록하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
