import { EagleClient } from "../client.ts"
import { assertExists } from "../deps.ts"

Deno.test("GET /api/folder/list", async () => {
    const client = new EagleClient()

    const list = await client.folder.list()

    list.forEach((folder) => {
        assertExists(folder.id)
    })

    // console.log(list[0])
})

Deno.test("GET /api/folder/listRecent", async () => {
    const client = new EagleClient()

    const list = await client.folder.listRecent()

    list.forEach((folder) => {
        assertExists(folder.id)
    })

    // console.log(list[5])
})
