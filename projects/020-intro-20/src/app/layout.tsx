import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "미니 SNS형 프로필 페이지",
  description: "회원가입을 하면 각자 자기 프로필 페이지를 갖는 서비스로 확장해보세요. 사용자는 프로필 사진 업로드, 한줄 소개 수정이 가능하고, 다른 사람의 프로필에 팔로우와 방명록을 남길 수 ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
