import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adalet Hukuk Bürosu - Profesyonel Hukuki Danışmanlık",
  description: "25 yıllık deneyimimizle bireysel ve kurumsal müvekkillerimize en kaliteli hukuki hizmetleri sunuyoruz. Uzman kadromuz ve güvenilir yaklaşımımızla haklarınızı koruyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
