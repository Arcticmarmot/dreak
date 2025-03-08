export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="max-w-screen flex justify-center bg-white dark:bg-black">
            <div className="max-w-screen w-2/3  prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
                {children}
            </div>
        </div>
    )
}