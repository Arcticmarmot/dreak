export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="w-full h-full bg-background dark:bg-dark-background flex justify-center">
            <div className="min-w-main-width overflow-y-auto no-scrollbar max-w-main-width w-main-width h-main-height
                prose
                prose-headings:mt-8
                prose-h1:text-center
                prose-h1:text-4xl
                prose-h2:text-3xl
                prose-h3:text-2xl
                prose-h4:text-xl
                prose-h5:text-lg
                prose-h6:text-sm
                dark:prose-invert">
                {children}
            </div>
        </div>
    )
}