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
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path
                                d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </a>
                    <a className="ml-5" href="https://github.com/Arcticmarmot" title="https://github.com/Arcticmarmot">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    )
}