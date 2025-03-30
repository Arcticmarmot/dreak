import MdxLayout from "../../../components/mdx-layout";
import * as fs from "node:fs";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post, metadata} = await import(`../../../../content/step/${slug}.mdx`)
    console.log(metadata)
    return <MdxLayout><Post/></MdxLayout>
}


export function generateStaticParams() {
    const slugs: { slug: string; }[] = [];
    fs.readdirSync('content/step').forEach(file => {
        file = file.split('.')[0];
        slugs.push({slug: file});
    })
    return slugs;
}

export const dynamicParams = false