import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "샐러드 드레싱 레시피 사이트",
  description: "집에서 만드는 샐러드 드레싱을 모으고, 드레싱 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
