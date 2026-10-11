// Đường dẫn: src/app/layout.tsx
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; // Nhập component GA
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Lấy mã Tracking ID từ biến môi trường (.env)
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${beVietnamPro.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
      {/* Tự động nhúng Google Analytics mà không gây block luồng render chính */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
