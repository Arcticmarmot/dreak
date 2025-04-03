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
        // <div id="top-bar" className="h-top-bar w-screen bg-primary dark:bg-dark-primary flex justify-center">
        <div id="top-bar" className="h-top-bar w-screen bg-background dark:bg-dark-background flex justify-center">
            <div className="max-w-main-width w-main-width flex justify-between text-dark-background dark:text-background">
                <Link href="/" className="h-full w-80 flex items-center cursor-pointer">
                    <p className="font-bold font-playwrite text-2xl ml-6">dreak;</p>
                </Link>
                <div className="h-full w-96 flex items-center justify-center">
                    <Link href="/" className="">
                        <p className=" text-xl mx-4">Home</p>
                    </Link>
                    <Link href="/step" className="">
                        <p className=" text-xl mx-4">Step</p>
                    </Link>
                    <Link href="/clip" className="">
                        <p className=" text-xl mx-4">Clip</p>
                    </Link>
                    <Link href="/info" className="">
                        <p className=" text-xl mx-4">Info</p>
                    </Link>
                </div>
                <div className="options h-full w-80 flex justify-end items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox"
                               checked={isDarkMode}
                               className="sr-only peer"
                               onChange={toggleDarkMode}
                        />
                        <div className="relative w-11 h-7 rounded-full
                            bg-primary dark:bg-background
                            peer-focus:ring-0 peer-focus:ring-dark-background dark:peer-focus:ring-background
                            peer-checked:after:translate-x-4
                            rtl:peer-checked:after:-translate-x-4
                            after:content-[url('/icons/sun.svg')]
                            peer-checked:after:content-[url('/icons/moon.svg')]
                            after:absolute after:top-0.5 after:start-[2px]
                            after:bg-background dark:after:bg-dark-primary
                            after:rounded-full after:h-6 after:w-6
                            after:transition-all
                            {/*peer-checked:bg-background dark:peer-checked:bg-background*/}
                            ">
                        </div>
                    </label>

                    <a className="ml-5 cursor-pointer" title="cybermarmot1024@gmail.com">
                        <MailIcon className="w-icon-size"></MailIcon>
                    </a>
                    <a className="ml-5" href="https://github.com/Arcticmarmot" title="https://github.com/Arcticmarmot">
                        <GithubIcon className="w-icon-size"></GithubIcon>
                    </a>
                </div>
            </div>
        </div>
    )
}