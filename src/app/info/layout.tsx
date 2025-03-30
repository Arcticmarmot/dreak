import React from "react";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode}>) {
    return (
        <div className="w-full h-full bg-background dark:bg-dark-background
            flex flex-col items-center overflow-y-auto no-scrollbar">
            {children}
        </div>
    );
}
