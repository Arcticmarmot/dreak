import "./globals.css";
import React from "react";
import TopBar from "../components/top-bar";
import FooterBar from "../components/footer-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className='dark'>
      <head>
          <title>dreak</title>
          <link rel="icon" href="/imgs/favicon.svg"></link>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2459468019271799"
                  crossOrigin="anonymous"></script>
      </head>
      <body className="max-w-screen max-h-screen">
      <header>
          <TopBar/>
      </header>
      <main>
          {children}
      </main>
      <footer>
          <FooterBar/>
      </footer>
      </body>
      </html>
  );
}
