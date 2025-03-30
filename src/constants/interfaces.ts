export interface MdxMetadata {
    title: string,
    filename: string,
    category: "algo" | "tutorial",
    createTime: string,
}

export interface MetadataGroup {
    name: string,
    list: MdxMetadata[],
}