import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "FASHION TECH - ファッション×テクノロジーで業界の未来を創る",
  description: "アパレル業界に特化したデジタルソリューションで、ファッションビジネスの変革と成長をサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`scroll-smooth ${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
