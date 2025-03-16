'use client'
import Link from "next/link";
import {useState} from "react";

export default function TopBar(){
    const [isDarkMode, setIsDarkMode] = useState(true);
    function toggleDarkMode(){
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    }
    return (
        <div id="top-bar" className="h-top-bar max-w-screen bg-primary dark:bg-dark-primary flex justify-center">
            <div className="max-w-main-width flex justify-between">
                <Link href="/" className="logo h-full w-80 flex items-center cursor-pointer">
                    <p className="font-bold text-gray-50 font-playwrite text-2xl ml-6">dreak;</p>
                </Link>
                <div className="routes h-full w-96 flex items-center justify-center">
                    <Link href="/"><p className="font-bold text-gray-50 text-xl mx-4">主页</p></Link>
                    <Link href="/blogs"><p className="font-bold text-gray-50 text-xl mx-4">博客</p></Link>
                    <Link href="/"><p className="font-bold text-gray-50 text-xl mx-4">阶梯</p></Link>
                    <Link href="/"><p className="font-bold text-gray-50 text-xl mx-4">碎片</p></Link>
                </div>
                <div className="options h-full w-80 flex justify-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox"
                               checked={isDarkMode}
                               className="sr-only peer"
                               onChange={toggleDarkMode}
                        />
                        <div className="relative w-11 h-6 bg-background rounded-full
                        peer peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-dark-primary
                        dark:bg-dark-background peer-checked:after:translate-x-full
                        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                        after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                        after:transition-all dark:border-gray-600 peer-checked:bg-secondary dark:peer-checked:bg-dark-secondary">
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}