import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const font = Nunito({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ильдар Сервис",
  description: "Мобильная версия",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
