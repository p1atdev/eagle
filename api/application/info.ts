import { RequestParameter } from "../request.ts"

export type InfoPayload = undefined

export interface Info {
    version: string
    prereleaseVersion: string | null
    buildVersion: string
    execPath: string
    platform: "darwin" | "win32"
}

export const InfoRequest: RequestParameter = {
    method: "GET",
    path: "/api/application/info",
}
