import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "3D 모델러 포트폴리오",
  description: "만든 3D 모델과 렌더링 이미지를 소개하고, 모델 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
