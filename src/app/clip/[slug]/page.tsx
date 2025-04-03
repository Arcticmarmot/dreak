import MdxLayout from "../../../components/mdx-layout";
import {ClipMetadataList} from "../../../constants/metadata/clip-metadata";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post} = await import(`../../../../content/clip/${slug}.mdx`)
    return <MdxLayout><Post/></MdxLayout>
}


export function generateStaticParams() {
    return ClipMetadataList.map(clipMetadata => { return {slug: clipMetadata.filename}})
}

export const dynamicParams = false