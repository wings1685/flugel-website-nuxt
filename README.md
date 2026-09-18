# flugel.biz Nuxt.js Version

稼働している自分自身の SolidStart 製屋号サイトを、Nuxt.js へリプレイスした実験リポジトリです。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- Nuxt 4.5.2 (SSG)
- Vue 3.5.42
- TypeScript
- Sass
- ky
- Valibot
- Shiki

## Replaced Features

- SolidStart から Nuxt.js への翻訳（JSX → Vue テンプレート、Signal → Ref）
- Meta 情報用共通コンポーネントを共通関数へ変更
- Shiki コードの色付け実行を useAsyncData() でビルド時に生成、クライアント時の実行なし

## Replaced Festival Repositories

- [SolidStart 版](https://github.com/wings1685/flugel-website)
- [SvelteKit 版](https://github.com/wings1685/flugel-website-sveltekit)
- [Qwik 版](https://github.com/wings1685/flugel-website-qwik)
- [Next.js 版](https://github.com/wings1685/flugel-website-next)

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)

## Folder Map

```
app/
├─ _global/
│ ├─ lib/
│ ├─ piquo/
│ ├─ styles/
│ ├─ types/
├─ components/
│ ├─ features/
│ │ ├─ Highlight/
│ │ │ ├─ _models/
│ ├─ routes/
│ │ ├─ _models/
│ │ ├─ _parts/
│ │ ├─ archives/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ │ ├─ types/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ ├─ shared/
│ │ ├─ Sections/
│ │ ├─ Typography/
│ │ ├─ Utils/
├─ layouts/
├─ pages/
│ ├─ archives/
│ ├─ types/
```
