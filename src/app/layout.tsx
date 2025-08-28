import type { Metadata } from "next";
import I18nProvider from "@/components/I18nProvider";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S&F Global SAS",
  description: "S&F enterprise dedicated worldwide shipping courrier",
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
        <I18nProvider >

          <Navbar />
          {children}

        </I18nProvider>
      </body>
    </html>
  );
}
