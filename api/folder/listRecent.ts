import { RequestParameter } from "../request.ts"

export type ListRecentPayload = undefined

export type ListRecent = {
    id: string
    name: string
    children: ListRecent[]
    modificationTime: number
    tags: string[]
    isExpand: boolean
    size: number
    vstype: string
    styles: ListRecentStyles
    isVisible: boolean
    index: number
    $$hashKey: string
    newFolderName: string
    parent: string
    imagesMappings: ListRecentImagesMappings
    images: any[]
    imageCount: number
    descendantImageCount: number
    pinyin: string
    extendTags: string[]
    covers: string[]
    editable: boolean
}[]

export interface ListRecentImagesMappings {}

export interface ListRecentStyles {
    depth: number
    first: boolean
    last: boolean
}

export const ListRecentRequest: RequestParameter = {
    method: "GET",
    path: "/api/folder/listRecent",
}
