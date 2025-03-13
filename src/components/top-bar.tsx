'use client'
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function TopBar(){
    const router = useRouter()
    return (
        <div id="top-bar" className="h-16 max-w-screen bg-white dark:bg-black flex justify-between">
            <div className="logo h-full w-80 flex items-center cursor-pointer" onClick={() => router.push("/")}>
                <p className="font-bold text-gray-50 font-playwrite text-2xl ml-6">dreak;</p>
            </div>

            <div className="routes h-full w-96 flex items-center justify-center">
                <Link href="/"><p className="font-bold text-gray-50 font-zhi-mang-xing text-2xl mx-4">主页</p></Link>
                <Link href="/blogs"><p className="font-bold text-gray-50 font-zhi-mang-xing text-2xl mx-4">博客</p></Link>
                <Link href="/"><p className="font-bold text-gray-50 font-zhi-mang-xing text-2xl mx-4">阶梯</p></Link>
                <Link href="/"><p className="font-bold text-gray-50 font-zhi-mang-xing text-2xl mx-4">碎片</p></Link>
            </div>

            <div className="options h-full w-80 flex items-center">

            </div>
        </div>
    )
}