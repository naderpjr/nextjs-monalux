import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageFrameGrid from "@/components/PageFrame";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monalux Studio",
  description: "Creative Web developement agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {/* <PageFrameGrid /> */}
        {children}
      </body>
    </html>
  );
}
