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
          <title>Dreak</title>
          <link rel="icon" href="/imgs/favicon.svg"></link>
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
