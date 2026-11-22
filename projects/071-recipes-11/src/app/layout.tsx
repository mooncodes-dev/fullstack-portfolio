import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "냉장고 재료 관리 사이트",
  description: "내 냉장고 재료와 유통기한을 등록하면, 유통기한 임박 재료를 알려주고 그 재료로 만들 수 있는 레시피를 추천하는 사이트를 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
