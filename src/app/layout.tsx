import type { Metadata } from "next";

import "./globals.css";

import { bebasNeueFont, varelaFont } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Jung",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeueFont.variable} ${varelaFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
