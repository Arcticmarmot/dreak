import React from "react";
import Link from "next/link";

export default function Blogs() {
    return (
        <div className="w-full h-full bg-background dark:bg-dark-background">
            <div className="h-main-height flex flex-col items-center pt-10">
                <p className="text-2xl font-bold">目录</p>
                <Link href="/blogs/demo1"><p className="text-xl mx-4">打家劫舍</p></Link>
                <Link href="/blogs/demo2"><p className="text-xl mx-4">一个还在爬山的人</p></Link>
                <Link href="/blogs/demo3"><p className="text-xl mx-4">物联网安全</p></Link>
            </div>
        </div>
    );
}
