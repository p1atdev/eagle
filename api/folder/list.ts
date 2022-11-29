import { Folder } from "../../type.ts"
import { RequestParameter } from "../request.ts"

export type ListPayload = {
    id?: string
}

export type List = Folder[]

export const ListRequest: RequestParameter = {
    method: "GET",
    path: "/api/folder/list",
}
