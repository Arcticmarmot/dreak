export interface MdxMetadata {
    title: string,
    filename: string,
    category: string,
    createTime: string,
}

export interface MetadataGroup {
    name: string,
    list: MdxMetadata[],
}