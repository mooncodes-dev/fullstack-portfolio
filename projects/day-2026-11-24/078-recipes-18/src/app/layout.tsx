import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "밀키트 리뷰 레시피 사이트",
  description: "먹어본 밀키트의 후기와 조리 팁을 정리하고, 밀키트 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
