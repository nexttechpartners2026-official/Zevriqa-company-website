  import type { Metadata } from "next";
import { Lora, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zevriqa Solutions | Scalable Solutions",
  description: "Scalable Solutions For Modern Business",
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: '/site.webmanifest',
};

import FloatingWidgets from '@/app/components/FloatingWidgets/FloatingWidgets';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
