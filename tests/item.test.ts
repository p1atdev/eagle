import { EagleClient } from "../client.ts"
import { assertExists } from "../deps.ts"

const testItemId = "LB1LYG2G6EN1P"

Deno.test("GET /api/item/info", async () => {
    const client = new EagleClient()

    const info = await client.item.info({ id: testItemId })

    assertExists(info)

    // console.log(info)
})

Deno.test("GET /api/item/list", async () => {
    const client = new EagleClient()

    const list = await client.item.list()

    list.forEach((item) => {
        assertExists(item.id)
    })

    // console.log(list)
})
