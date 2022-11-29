import { EagleClient } from "../client.ts"
import { assertExists } from "../deps.ts"

Deno.test("GET /api/application/info", async () => {
    const client = new EagleClient()

    const info = await client.application.info()

    assertExists(info.version)
})
