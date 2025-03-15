import Link from "next/link";

export default function TopBar(){
    return (
        <div id="top-bar" className="h-top-bar max-w-screen bg-primary dark:bg-dark-primary flex justify-between">
            <Link href="/" className="logo h-full w-80 flex items-center cursor-pointer">
                <p className="font-bold text-gray-50 font-playwrite text-2xl ml-6">dreak;</p>
            </Link>
            <div className="routes h-full w-96 flex items-center justify-center">
                <Link href="/"><p className="font-bold text-gray-50 text-xl mx-4">主页</p></Link>
                <Link href="/blogs"><p className="font-bold text-gray-50 text-xl mx-4">博客</p></Link>
                <Link href="/"><p className="font-bold text-gray-50 text-xl mx-4">阶梯</p></Link>
                <Link href="/"><p className="font-bold text-gray-50 text-xl mx-4">碎片</p></Link>
            </div>

            <div className="options h-full w-80 flex items-center">

            </div>
        </div>
    )
}