export interface EagleRes {
    readonly status: "success" | "error"
    readonly data: Record<string, any>
}

export interface EagleErrorRes extends Omit<EagleRes, "data"> {
    readonly status: "error"
    readonly code: number
    readonly message: string
}
