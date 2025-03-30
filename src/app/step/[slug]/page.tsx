import MdxLayout from "../../../components/mdx-layout";
import {StepMetadataList} from "../../../constants/metadata/step-metadata";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post} = await import(`../../../../content/step/${slug}.mdx`)
    return <MdxLayout><Post/></MdxLayout>
}


export function generateStaticParams() {
    return StepMetadataList.map(stepMetadata => { return {slug: stepMetadata.filename}})
}

export const dynamicParams = false