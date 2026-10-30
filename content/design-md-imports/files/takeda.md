# DESIGN.md — 武田薬品工業（Takeda）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-29 / 対象: `https://www.takeda.com/jp/`, `/jp/who-we-are/company-information/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **見出しほど細い逆ウェイト階層。** 36px の見出しを weight 300（Light）で組み、16px の小見出しを 700 で組む。角丸 30px の大きなボタンと、タケダレッド `#BD120A` 1 色で面を作る
- **密度**: 低い。本文 16px / 行間 1.5、`#edf2f4` の淡い面で区切り、白地に大きく余白をとる
- **キーワード**: タケダレッド、Light な大見出し、角丸 30px、字間ゼロ、Desktop/Mobile 2 本立てのトークン

**このサイトの核心は4つある。**

1. **宣言した Gotham が 1 要素も描画されていない。** `@font-face` に `gotham` 200 / 300 / 400 / 500 / 700 / 800 の 6 ウェイト（＋`gotham Fallback`）があり、`html` にも `font-family: var(--font-gotham), ui-sans-serif, …` と書かれているが、**`document.fonts` で 7 本とも `unloaded`**。`body` 以下が `"Noto Sans JP", …` で上書きするため、**2 ページとも可視 0 要素**
2. **実際に描画されるウェイトは 400 と 700 の 2 本だけ。** 隠し div の幅実測で欧文が `300 = 400 = 500 → 540.06px` / `700 = 800 → 570.92px`。CSS が `300` や `500` を当てても **400 で出る**
3. **`font-weight: 325` という非整数ウェイトが 11 要素**（ナビとフッターのリンク 16px / 14px）。Noto Sans JP は 400 / 700 の 2 本しか読んでいないので、**325 も 400 で描画される**
4. **ウェイトの階層が逆転している。** `--h1-fontWeight: 300` / `--h2-fontWeight: 300` / `--h3-fontWeight: 500` / `--h4-fontWeight: 500` / **`--h5-fontWeight: 700`**。実測でも H2 36px → weight 300、H3 24px → weight 500。**大きい見出しほど細い**

`html` に **`font-feature-settings: normal`** を明示的に書いて約物の詰めを打ち消している。`letter-spacing` も可視 130/134・90/90 要素が `normal`。**詰めも空けもしない。**

CSS Custom Properties は **93 個が自社トークン**（＋Swiper 2）。すべてのタイポグラフィ値に `…Mobile` の対が用意された **Desktop / Mobile 2 本立て**のシステム。Next.js（`_next/static`）＋ next/font ＋ Tailwind で組まれており、フォントは **41 件すべて自社ドメイン `www.takeda.com` からセルフホスト**。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **タケダレッド** | **`#BD120A`** | **面 13 要素 / 文字 7 要素 / 罫線 20 要素**（2 ページ合計）。`--colorPrimary` / `--buttonPrimary-backgroundColor`。CTA の塗りと枠、見出しのアクセント |
| Primary Active | `#891515` | `--colorPrimaryActive` / `--colorSecondary` / `--buttonPrimary-hoverBackgroundColor`。**2 ページとも可視 0 要素**（ホバー時のみ現れるため静的計測では出ない） |

> **CMP の赤 `#FF0000` をブランド赤と混同しない。** OneTrust の `Apply` / `Cancel` ボタンが `rgb(255, 0, 0)` で、`Filter Icon` の `rgb(56, 96, 190)` も OneTrust 由来。**サイト本体の赤は `#BD120A` だけ。**

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): `--colorDarkGrey` / `--textColor`。**可視 732 要素（2 ページ合計）で圧倒的最多**。このサイトは本文に純黒を使わない
- **Text on Dark** (`#ffffff`): 赤面・写真の上（可視 38 要素）
- **Text Muted** (`#a1a4ac`): `--colorMediumGrey`。文字 4 要素 / 罫線 3 要素
- **Surface Light** (`#edf2f4`): `--colorLightGrey`。**面 18 要素 / 罫線 8 要素**。「私たちのストーリー」などセクションの地
- **Hover Grey** (`#DCE6E9`): `--colorHoverGrey`。**2 ページとも可視 0 要素**
- **Deep Navy** (`#27455c`): 面 8 要素。トークン化されていない直書きの色
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255, 255, 255)` / 根拠 `body`）

### Gradient

```css
/* ヒーローの帯 */
linear-gradient(to right, rgb(189, 18, 10), rgb(161, 177, 196));

/* 写真の上に文字を載せるための覆い */
linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
```

> 赤 `#BD120A` から青灰 `#A1B1C4` へ横に流すグラデーションが**ヒーローの地**。角度・停止位置を丸めずそのまま使う。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**。自社ドメインからセルフホスト（next/font）。**読み込んでいるのは 400 と 700 の 2 本だけ**
- `Noto Sans JP Fallback` は next/font が生成する**メトリクス整合用のフォールバック**（`size-adjust` 付き・`local()` ベース）。`loaded` と出るがフォントファイルは要求されない。**これを書体として数えない**
- 明朝体は使わない

### 3.2 欧文フォント

- **宣言**: **Gotham**（200 / 300 / 400 / 500 / 700 / 800 の 6 ウェイト）。`--font-gotham` 経由で `html` に指定
- **実装**: **描画されていない。** `document.fonts` で 6 本とも `unloaded`。`body` 以下の `font-family` が `"Noto Sans JP", "Noto Sans JP Fallback", ui-sans-serif, …` で上書きするため、**可視要素は 2 ページとも 0**
- **実際に欧文を組んでいるのは Noto Sans JP のラテングリフ**

> **実サイトはこうだが、正しくはこう。** Gotham を使いたいなら `body` 側のスタック先頭に入れる必要がある。現状の実装は `html` にだけ当てているため、`body` の宣言に負けて一度も当たらない。

### 3.3 font-family 指定

```css
/* html（宣言されているが body に上書きされて効かない） */
html {
  font-family: var(--font-gotham), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", …;
  font-feature-settings: normal;
}

/* body 以下（実際に描画されるのはこちら・可視 134 要素 / 89 要素） */
font-family: "Noto Sans JP", "Noto Sans JP Fallback", ui-sans-serif, system-ui, -apple-system,
             "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
             "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**フォールバックの考え方**:
- 和文を先頭に置き、欧文も同じ書体で受ける**単一書体構成**
- 2 番目の `"Noto Sans JP Fallback"` は next/font の `size-adjust` 付きローカル代替。**Web フォント到着前後でレイアウトがずれないための仕掛け**で、書体の選択肢ではない
- 3 番目以降は Tailwind の `font-sans` 既定スタックがそのまま残っている
- **スタック途中に generic の `sans-serif` が入っているため、それ以降の絵文字フォントには到達しない**（実害は無いが、意図した指定ではない）

### 3.4 文字サイズ・ウェイト階層

`html { font-size: 16px }` 固定（7 幅で確認）。トークンはすべて `rem`。

| Role | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | トークン |
|------|----------------|---------------|--------|-------------|----------------|----------|
| Hero Lead | 38.1818px | 27.2727px | **300** | 41.8182px (1.10) | normal | （直書き。白文字） |
| Heading 1 | **42px** (2.625rem) | 30px (1.875rem) | **300** | 46px (2.875rem) | normal | `--h1-*` |
| Heading 2 | **36px** (2.25rem) | 24px (1.5rem) | **300** | 43px (2.6875rem) / 32px | normal | `--h2-*` |
| Heading 3 | **24px** (1.5rem) | 20px (1.25rem) | **500** | 32px (2rem) / 28px | normal | `--h3-*` |
| Heading 4 | 20px (1.25rem) | 18px (1.125rem) | **500** | 28px (1.75rem) | normal | `--h4-*` |
| Heading 5 | 16px (1rem) | 16px | **700** | 28px (1.75rem) | normal | `--h5-*` |
| Body | **16px** (1rem) | 16px | 400 | 26px (1.625rem) | normal | `--bodyBlock-*` |
| CTA | 16px (1rem) | 16px | **300** | 26px (1.625rem) | normal | `--cta-*` |
| Quote | — | — | 400 | 44px (2.75rem) / 26px | normal | `--quote-*` |
| Caption | 14px | 14px | 400 / 325 | 1.5 | normal | — |
| Small | 12.8px | 12.8px | 400 | 1.5 | normal | — |

- **ウェイトの実測分布**: 400（127 要素）／ 700（37）／ **325（22）**／ 300（19）／ 500（12）／ 600（7）
- **`font-weight: 325` はナビとフッターのリンク専用**（`各拠点のウェブサイト` `お問い合わせ` `採用情報` `財務ハイライト` など）。Noto Sans JP は 400 / 700 しか読んでいないので**実際は 400 で描画される**
- **600 の 7 要素は OneTrust の CMP**（`Cookie 設定` `すべて拒否する` 等、13.008px / 0.13008px）

### 3.5 行間・字間

- **本文の行間**: **1.50**（可視 113 要素で最多）。`body` は `line-height: 24px`（16px × 1.5）
- **本文ブロックの行間**: 1.625rem = 26px（`--bodyBlock-fontLineHeight`）
- **見出しの行間**: H1 46/42 = **1.10**、H2 43/36 = **1.19**、H3 32/24 = **1.33**。**大きい見出しほど行間が詰まる**
- **字間**: **`normal`。** 可視 130/134（トップ）・90/90（下層）
- 端数の `0.13008px` / `0.144px` / `0.96px` は**すべて OneTrust 由来**。サイト本体の字間ではない

**ガイドライン**:
- **`letter-spacing` を足さない**
- `line-height` は**トークンの `rem` 値をそのまま使う**（`--h1-fontLineHeight: 2.875rem` = 46px）。比率に直すと Mobile 側の値（`--h2-fontLineHeightMobile: 2rem`）と噛み合わなくなる
- 見出しは 1.1〜1.33、本文は 1.5〜1.625 の二層

### 3.6 禁則処理・改行ルール

```css
/* body */
word-break: break-word;
```

- **`word-break: break-word`** を `body` に当てている（7 幅で確認）
- `html` に **`font-feature-settings: normal`** / `text-size-adjust: 100%` を明示
- `line-break` / `auto-phrase` の指定は無い

### 3.7 OpenType 機能

```css
html {
  font-feature-settings: normal;   /* 明示的に打ち消している */
}
```

- **`palt` も `halt` も使わない。** `html` で `normal` と書いて既定を固定している
- 実測では効く（40px の `「東京」、（映画）。・` が `normal` 360px → `"palt"` 300px）が、**使わないと決めている**
- `tnum`（等幅数字）も未使用

### 3.8 縦書き

```css
/* 該当なし */
```

- **`writing-mode: vertical-rl` は 2 ページとも 0 要素**

---

## 4. Component Stylings

### Buttons

**Primary（塗り）**
- Background: `#BD120A`（`--buttonPrimary-backgroundColor`）
- Background (hover): `#891515`（`--buttonPrimary-hoverBackgroundColor`）
- Text: `#ffffff`（`--buttonPrimary-textColor`）
- Padding: 14px 40px
- Border Radius: **1.875rem = 30px**（四隅それぞれに個別トークン）
- Border: 1px solid `#BD120A`
- Font Size: 16px（`--cta-fontSize`）
- Font Weight: **300**（`--cta-fontWeight`）

> **CTA のウェイトが 300（Light）**。ボタンの文字を太くしない。

**Secondary（枠線）**
- Background: `transparent`
- Text: `#333333`（`--buttonSecondary-textColor`）
- Border: 1px solid `#BD120A`
- Padding: 12px 32px
- Border Radius: **30px**
- Font Size: 16px / Weight **300**

**Pill（アイコンボタン）**
- Border Radius: `9999px`（Tailwind の `rounded-full`。可視 11 要素）
- 例: `Calendar` / `Arrow right` のアイコン円

### Inputs

- Border Radius: 2px（CMP 由来の 2px とは別に、サイト本体の入力欄は 4px）
- Focus: `rgb(189, 18, 10) 0px 0px 0px 1px inset`（**赤の内側リング**。可視 2 要素）

### Cards

- Background: `#ffffff` / セクション地は `#edf2f4`
- Border Radius: **30px**、または上下だけの `30px 30px 0px 0px` / `0px 0px 30px 30px`（可視 8 要素）
- Shadow: `rgba(0, 0, 0, 0.05) 0px 1px 2px` ／ `rgba(0, 0, 0, 0.1) 0px 10px 15px`（Depth 参照）

### Media

- 画像の角丸も `--globalMedia-borderRadiusTopLeft` 〜 `BottomRight` の **4 隅個別トークンで 1.875rem = 30px**
- **四隅を個別に持つのがこのサイトの設計**。片側だけ落とした形（カードの上半分だけ丸い等）を作れるようになっている

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実装値 |
|-------|-------|--------|
| `--spacings-paddingBottomMobile` | 0rem | 0px |
| `--spacings-marginTopFirstComponent` | 3.125rem | **50px** |
| `--spacings-marginTopFirstComponentMobile` | 2.5rem | **40px** |

### Container

- ヒーローの帯: 1200 × 380px
- `html` / `body` ともに 16px 固定なので、`rem` はそのまま 16 倍で px に直せる

### Grid

- Tailwind のユーティリティで組まれており、固定のカラムトークンは持たない
- 角丸は `1.875rem`（30px）と `9999px`（full）の 2 種が語彙

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 既定 |
| 1 | `rgba(0, 0, 0, 0.05) 0px 1px 2px` | カードの軽い浮き（可視 3 要素）。Tailwind の `shadow-sm` |
| 2 | `rgba(0, 0, 0, 0.1) 0px 10px 15px` | ドロップダウン・オーバーレイ（可視 2 要素）。Tailwind の `shadow-lg` |
| 3 | `rgba(0, 0, 0, 0.2) 0px 4px 8px` | 下層ページのカード（可視 2 要素） |
| Focus | `rgb(189, 18, 10) 0px 0px 0px 1px inset` | **フォーカスリングは赤の内側 1px**（可視 2 要素） |

> **影は Tailwind の既定値をそのまま使っている**（`0 0 transparent` を含む 3 連の形で出る）。独自の影トークンは持たない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **font-family は `"Noto Sans JP", "Noto Sans JP Fallback", ui-sans-serif, system-ui, …` を使う**（Gotham を前提にしない）
- **ウェイトは 400 と 700 の 2 段で考える**。300 / 325 / 500 を書いても 400 で出る
- **見出しほど細くする。** H1 / H2 = 300、H3 / H4 = 500、H5 = 700、本文 = 400、CTA = 300
- **`letter-spacing: normal` を貫く**
- **`font-feature-settings: normal` を `html` に書く**（既定の揺れを止める）
- **行間はトークンの `rem` 値をそのまま使う。** H1 2.875rem / H2 2.6875rem / H3 2rem / 本文 1.625rem
- **すべてのタイポグラフィ値に Mobile の対を用意する**（`--h1-fontSize` / `--h1-fontSizeMobile`）
- 角丸は **30px**（`1.875rem`）と **9999px** の 2 種
- 本文色は **`#333333`**、面は `#ffffff` / `#edf2f4`
- CTA は `#BD120A` 塗り / 白文字 / radius 30px / 16px weight **300** / padding 14px 40px

### Don't（禁止）

- **Gotham を前提に組まない**（`@font-face` は 6 ウェイトあるが 2 ページとも可視 0 要素）
- **`font-weight: 325` を書かない**（400 で出る。非整数ウェイトは読み込んだ 2 本では再現されない）
- **`font-weight: 500` や `300` で太さが変わると期待しない**（欧文実測で 300 = 400 = 500）
- **`letter-spacing` を足さない**
- **`font-feature-settings: "palt"` を足さない**（`html` で明示的に `normal` にしている設計を壊す）
- **本文色を `#000000` にしない**（実サイトは `#333333` が 732 要素）
- **`#FF0000` を使わない**（OneTrust の色。ブランド赤は `#BD120A`）
- **`#891515` / `#DCE6E9` を静的な面に使わない**（ホバー専用・可視 0 要素）
- 角丸を 4px や 8px にしない（語彙は 30px と full）
- **13.008px / 14.4px / 0.13008px といった端数を真似しない**（すべて CMP 由来）

---

## 8. Responsive Behavior

### Breakpoints

7 幅（1440 / 1200 / 1024 / 834 / 768 / 767 / 375px）で実測した結果、**ルートは完全固定**。切り替えはトークンの `…Mobile` 対とメディアクエリで行う。

| Width | `html` | `body` | `body` line-height | h1 | ヒーロー副文 |
|-------|--------|--------|--------------------|----|-------------|
| 1440 / 1200 / 1024 / 834 / 768 / 767px | **16px** | **16px** | 24px | 42px | 38.1818px |
| 375px | **16px** | **16px** | 24px | **30px** | **27.2727px** |

- **`html` も `body` も 7 幅すべてで 16px / 24px から 1 度も動かない。** 流体（`vw`）も `clamp()` も使っていない
- **崖は 767px より下**。834px でも 768px でも 767px でも Desktop の値が出る
- Mobile の値はトークン側に `--h1-fontSizeMobile: 1.875rem`（30px）として用意されている

### Desktop / Mobile のトークン対応

| Role | Desktop | Mobile | 変化 |
|------|---------|--------|------|
| H1 | 2.625rem (42px) | 1.875rem (30px) | 0.71 倍 |
| H2 | 2.25rem (36px) | 1.5rem (24px) | 0.67 倍 |
| H3 | 1.5rem (24px) | 1.25rem (20px) | 0.83 倍 |
| H4 | 1.25rem (20px) | 1.125rem (18px) | 0.90 倍 |
| H5 / Body / CTA | 1rem (16px) | 1rem (16px) | **変えない** |

> **16px 以下は一切変えない。** 縮むのは H1〜H4 だけで、しかも**大きい見出しほど大きく縮む**。

### タッチターゲット

- Primary ボタン: padding `14px 40px` + 16px → 高さ約 54px（満たす）
- Secondary ボタン: padding `12px 32px` + 16px → 高さ約 50px（満たす）
- ナビリンク: 16px / 行高 24px → **高さ 24px。モバイルでは縦の当たり判定を確保すること**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Takeda Red:   #BD120A   （hover: #891515）
Text Color:   #333333
Text on Dark: #ffffff
Muted:        #a1a4ac
Surface:      #edf2f4
Background:   #ffffff

Font: "Noto Sans JP", "Noto Sans JP Fallback", ui-sans-serif, system-ui, -apple-system, …
  （Gotham は宣言のみで描画されない。実在ウェイトは 400 / 700 の 2 本）
Root: html 16px 固定 / body 16px（7 幅とも不変）
Body Size: 16px / line-height 1.625rem (26px)
Weight: H1=300 H2=300 H3=500 H4=500 H5=700 Body=400 CTA=300  ← 見出しほど細い
Letter Spacing: normal（例外なし）
font-feature-settings: normal（html に明示）
Border Radius: 1.875rem (30px) / 9999px
Focus Ring: #BD120A 0 0 0 1px inset
```

### プロンプト例

```
武田薬品のデザインシステムに従って、企業情報ページを作成してください。
- font-family は "Noto Sans JP", "Noto Sans JP Fallback", ui-sans-serif, system-ui, -apple-system
  （Gotham は使わない。実在するウェイトは 400 と 700 だけ）
- 見出しほど細くする: h1 42px/300、h2 36px/300、h3 24px/500、h4 20px/500、h5 16px/700
- 本文 16px/400、line-height 1.625rem(26px)。見出しの行間は h1 2.875rem / h2 2.6875rem / h3 2rem
- letter-spacing は全要素 normal、html に font-feature-settings: normal を書く
- 本文色 #333333、セクション地 #edf2f4、ページ背景 #ffffff
- CTA は #BD120A 塗り / 白文字 / border-radius 30px / 16px weight 300 / padding 14px 40px
- 枠線 CTA は transparent / #333333 / 1px solid #BD120A / radius 30px / weight 300
- 画像・カードの角丸は四隅それぞれ 1.875rem(30px) のトークンで持つ
- フォーカスは #BD120A の inset 1px リング
- モバイル（767px 以下）では h1 30px / h2 24px / h3 20px / h4 18px に落とし、16px 以下は変えない
```
