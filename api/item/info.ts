import { Item } from "../../type.ts"
import { RequestParameter } from "../request.ts"

export interface InfoPayload {
    /**
     * ID of the file
     */
    id: string
}

export type Info = Item

export const InfoRequest: RequestParameter = {
    method: "GET",
    path: "/api/item/info",
}
