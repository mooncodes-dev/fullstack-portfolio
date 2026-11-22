import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "장보기 목록 생성 사이트",
  description: "스크랩한 레시피들의 재료를 합쳐 장보기 목록을 자동으로 만들고, 산 재료는 체크할 수 있게 하세요. 목록과 체크 상태는 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
