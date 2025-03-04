import FooterBar from "./components/footer-bar";
import TopBar from "./components/top-bar";
import React from "react";

export default function Home({ children }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div id="app" className="min-h-screen min-w-screen bg-white">
        <header>
            <TopBar/>
        </header>
        <section>
            {children}
        </section>
        <footer>
            <FooterBar/>
        </footer>
    </div>
  );
}
