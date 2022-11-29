# Eagle API Client for Deno

[![deno module](https://shield.deno.dev/x/eagle)](https://deno.land/x/eagle])
![deno compatibility](https://shield.deno.dev/deno/^1.28)
[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)

>❗This module is under development. Expect breaking changes.

```ts
import { EagleClient } from "https://deno.land/x/eagle@[version]/mod.ts"

const client = new EagleClient()

const info = await client.application.info()

console.log(info.version)
// 3.0.0
```


# Supported endpoints
Official documents
https://api.eagle.cool/

- [x] Application
  - [x] Info
- [ ] Folder
  - [ ] Create
  - [ ] Rename
  - [ ] Update
  - [x] List
  - [x] ListRecent
- [ ] Item
  - [ ] AddFromURL
  - [ ] AddFromURLs
  - [ ] AddFromPath
  - [ ] AddFromPaths
  - [ ] AddBookmark
  - [x] Info
  - [ ] Thumbnail
  - [x] List
  - [ ] MoveToTrash
  - [ ] RefreshPalette
  - [ ] RefreshThumbnail
  - [ ] Update
- [ ] Library
  - [ ] Info
  - [ ] History
  - [ ] Switch

