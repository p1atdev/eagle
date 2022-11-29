export interface Palette {
    color: number[]
    ratio: number
}

export interface Item {
    id: string
    name: string
    size: number
    btime: number
    mtime: number
    ext: string
    tags: string[]
    folders: string[]
    isDeleted: boolean
    url: string
    annotation: string
    modificationTime: number
    height: number
    width: number
    noThumbnail: boolean
    palettes: Palette[]
}

export interface Folder {
    id: string
    name: string
    description: string
    children: Folder[]
    modificationTime: string
    tags: string[]
    imageCount: number
    descendantImageCount: number
    pinyin: string
    extendTags: string[]
}
