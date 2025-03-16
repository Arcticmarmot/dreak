import React from "react";
import Link from "next/link";

export default function Blogs() {
    return (
        <div className="h-main-height">
            <div className="routes h-full w-full">
                <Link href="/blogs/demo1"><p className="font-bold text-black text-xl mx-4">打家劫舍</p></Link>
                <Link href="/blogs/demo2"><p className="font-bold text-black text-xl mx-4">一个还在爬山的人</p></Link>
            </div>
        </div>
    );
}
