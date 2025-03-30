'use client'
import Link from "next/link";
import {useState} from "react";
import {GithubIcon, MailIcon} from "./icons/icon-basket";

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
                    <Link href="/">
                        <p className="font-bold text-gray-50 text-xl mx-4">Home</p>
                    </Link>
                    <Link href="/blogs">
                        <p className="font-bold text-gray-50 text-xl mx-4">Step</p>
                    </Link>
                    <Link href="/">
                        <p className="font-bold text-gray-50 text-xl mx-4">Clip</p>
                    </Link>
                    <Link href="/">
                        <p className="font-bold text-gray-50 text-xl mx-4">Info</p>
                    </Link>
                </div>
                <div className="options h-full w-80 flex justify-end items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox"
                               checked={isDarkMode}
                               className="sr-only peer"
                               onChange={toggleDarkMode}
                        />
                        <div className="relative w-11 h-6 rounded-full
                        bg-background dark:bg-dark-background
                        peer-focus:ring-0 peer-focus:ring-primary dark:peer-focus:ring-dark-primary
                        peer-checked:after:translate-x-full
                        rtl:peer-checked:after:-translate-x-full
                        peer-checked:bg-primary dark:peer-checked:bg-dark-primary
                        peer-checked:after:border-white
                        after:content-[''] after:absolute after:top-0.5 after:start-[2px]
                        after:bg-background
                        after:border-gray-300 after:border
                        after:rounded-full after:h-5 after:w-5
                        after:transition-all dark:border-gray-600 ">
                        </div>
                    </label>

                    <a className="ml-5 cursor-pointer" title="cybermarmot1024@gmail.com">
                        <MailIcon className="w-6"></MailIcon>
                    </a>
                    <a className="ml-5" href="https://github.com/Arcticmarmot" title="https://github.com/Arcticmarmot">
                        <GithubIcon className="w-6"></GithubIcon>
                    </a>
                </div>
            </div>
        </div>
    )
}