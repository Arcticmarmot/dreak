import React from "react";
import Link from "next/link";

export default function Blogs() {
    return (
        <div className="h-[calc(100vh-var(--spacing)*24)] bg-gray-100">
            <div className="routes h-80 w-full">
                <Link href="/blogs/demo1"><p className="font-bold text-black font-zhi-mang-xing text-2xl mx-4">打家劫舍</p></Link>
                <Link href="/blogs/demo2"><p className="font-bold text-black font-zhi-mang-xing text-2xl mx-4">使用说明</p></Link>
            </div>
        </div>
    );
}
