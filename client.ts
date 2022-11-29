import * as api from "./api/mod.ts"

export interface EagleClientOptions {
    server?: string
}

const clientDefaultOptions: Required<EagleClientOptions> = {
    server: "http://localhost:41595",
}

export interface Application {
    info: () => Promise<api.Application.Info>
}

export interface Folder {
    list: (payload?: api.Folder.ListPayload) => Promise<api.Folder.List>
    listRecent: () => Promise<api.Folder.ListRecent>
}

export interface Item {
    info: (payload: api.Item.InfoPayload) => Promise<api.Item.Info>
    list: (payload?: api.Item.ListPayload) => Promise<api.Item.List>
}

export class EagleClient {
    readonly server: string

    constructor(readonly options?: EagleClient) {
        const { server } = { ...clientDefaultOptions, ...options }
        this.server = server
    }

    application: Application = {
        info: async () => {
            const request = api.Application.InfoRequest
            const res = await fetch(this.server + request.path)
            return await this.parseRes(res)
        },
    }

    folder: Folder = {
        list: async (payload) => {
            const request = api.Folder.ListRequest
            const url = new URL(this.server + request.path)
            if (payload?.id) {
                url.searchParams.set("id", payload.id)
            }
            const res = await fetch(url)
            return await this.parseRes(res)
        },
        listRecent: async () => {
            const request = api.Folder.ListRecentRequest
            const url = new URL(this.server + request.path)
            const res = await fetch(url)
            return await this.parseRes(res)
        },
    }

    item: Item = {
        info: async (payload) => {
            const request = api.Item.InfoRequest
            const url = new URL(this.server + request.path)
            url.searchParams.set("id", payload.id)
            const res = await fetch(url)
            return await this.parseRes(res)
        },
        list: async (payload) => {
            const request = api.Item.ListRequest
            const url = new URL(this.server + request.path)
            if (payload) {
                Object.entries(payload).forEach(([key, value]) => {
                    switch (key) {
                        case "tags":
                        case "folders": {
                            url.searchParams.set(key, value.join(","))
                            break
                        }
                        default: {
                            url.searchParams.set(key, value)
                            break
                        }
                    }
                })
            }
            const res = await fetch(url)
            return await this.parseRes(res)
        },
    }

    private parseRes = async <T>(res: Response) => {
        try {
            const payload = await res.json()
            if (payload.status === "error") {
                const error = payload as api.EagleErrorRes
                throw new Error(`Error code ${error.code}: ${error.message}`)
            } else {
                return payload.data as T
            }
        } catch (error) {
            throw new Error("Error: " + error)
        }
    }
}
