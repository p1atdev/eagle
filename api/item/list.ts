import { Item } from "../../type.ts"
import { RequestParameter } from "../request.ts"

export interface ListPayload {
    /**
     * The number of items to be displayed. the default number is 200.
     */
    limit?: number

    /**
     * Offset a collection of results from the api. Start with 0.
     */
    offset?: number

    /**
     * The sorting order.Add a minus sign for descending order.
     */
    orderBy?: "CREATEDATE" | "FILESIZE" | "NAME" | "RESOLUTION" | "-CREATEDATE" | "-FILESIZE" | "-NAME" | "-RESOLUTION"

    /**
     * Filter by the keyword
     */
    keyword?: string

    /**
     * Filter by the extension type, e.g.: jpg ,  png
     */
    ext?: string

    /**
     * Filter by tags.
     */
    tags?: string[]

    /**
     * Filter by Folders.
     */
    folders?: string[]
}

export type List = Item[]

export const ListRequest: RequestParameter = {
    method: "GET",
    path: "/api/item/list",
}
