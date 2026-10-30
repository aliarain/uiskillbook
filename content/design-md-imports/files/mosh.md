# DESIGN.md — MOSH

> MOSH（https://mosh.jp/）のデザイン仕様書。
> クリエイター向けサービス販売プラットフォーム。
> 実サイトの computed style と CSS Custom Properties（Tailwind CSS v4 + shadcn 系トークン）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: コーラルレッドのブランドアクセント＋ニュートラルなグレースケールで、温かさと現代的な明るさを両立。情熱（"情熱がめぐる経済をつくる"）をテーマにしたクリエイターエコノミー文脈
- **密度**: ゆとりのあるヒーロー領域。本文・ナビは Tailwind 標準スケール（16px / line-height 1.5）でコンパクト
- **キーワード**: 温かい、軽やか、IBM Plex JP の整った字面、コーラルレッドのアクセント、SaaS らしいクリーンさ
- **特徴**:
  - 大数字（`90,000`、ステータス表示）に欧文ディスプレイ書体 **degular** を `font-weight: 100〜200`（hairline / extralight）で使い、軽やかで未来的な印象
  - 見出しに `font-weight: 400`（regular）を使うことが多く、太字ベタ塗りの強い見出しは避ける
  - CTA は黒に近いグレー（`gray-900` ≒ `#111827`）の primaryButton。コーラルは"装飾としての色"として使い、押しは黒
  - ダークモード非対応（実測時点では `prefers-color-scheme: dark` の切替なし）

---

## 2. Color Palette & Roles

> CSS Custom Properties（`--token-*`, `--hue-*`）実測値。oklch は近似 hex を併記。

### Primary（ブランドカラー）

- **Brand 400** (`#fa6f78`): メインのコーラルレッド。`--hue-brand-400` / `--token-text-brand` / `--token-bg-brand` / `--token-border-brand`
- **Brand Deep** (`#f2414c`): ヒーロー H2/H3 で使われる強めのレッド。`text-[#F2414C]` として直接指定（"集客の流れをつくる", "AI搭載のオールインワンプロダクト"）

### CTA（プライマリボタンは黒系）

- **Primary Button** (`#111827` ≒ `oklch(21% .034 264.665)` = `gray-900`): `--token-bg-primaryButton` / `--token-bg-button-enabled`
- **Primary Button Hover** (`#374151` ≒ `gray-700`): `--token-bg-primaryButton-hover`
- **Secondary Button** (`#ffffff`): `--token-bg-secondaryButton`
- **Secondary Button Hover** (`#f3f4f6` ≒ `gray-100`): `--token-bg-secondaryButton-hover`

### Link

- **Link Default** (`#2559eb`): `--hue-link-blue-600` / `--token-text-link`
- **Link Hover** (`#6088fa`): `--hue-link-blue-400` / `--token-text-link-hover`

### Semantic（意味的な色）

- **Info** (`#0369a1`): `--hue-info-blue-700` / `--token-text-info`
- **Success** (`#15803d`): `--hue-success-green-700` / `--token-text-success`
- **Warning** (`#ae4f0f`): `--hue-warning-yellow-700` / `--token-text-warning`
- **Danger** (`#d92500`): `--hue-danger-orange-700` / `--token-text-danger`

### Neutral — Gray Scale（Tailwind v4 `gray-*`）

| Token | oklch | 近似 hex | 役割 |
|-------|-------|----------|------|
| gray-100 | `oklch(96.7% .003 264.542)` | `#f3f4f6` | 薄い面 |
| gray-200 | `oklch(92.8% .006 264.531)` | `#e5e7eb` | `--token-border-default` |
| gray-300 | `oklch(87.2% .01 258.338)` | `#d1d5db` | `--token-text-disabled` |
| gray-400 | `oklch(70.7% .022 261.325)` | `#9ca3af` | `--token-text-placeholder` |
| gray-600 | `oklch(44.6% .03 256.802)` | `#4b5563` | `--token-text-helper` |
| gray-700 | `oklch(37.3% .034 259.733)` | `#374151` | primaryButton-hover |
| gray-900 | `oklch(21% .034 264.665)` | `#111827` | `--token-text-primary` / `--token-border-focused` / primaryButton |

### Text

- **Text Primary** (`#111827` = gray-900): 本文・見出しのデフォルト
- **Body Text** (`#09090b` = zinc-950): `<p>` などで実測される濃いグレー（Tailwind の `text-foreground` 既定相当）
- **Text Helper** (`#4b5563`): 補足テキスト
- **Text Placeholder** (`#9ca3af`): プレースホルダー
- **Text Disabled** (`#d1d5db`): 無効状態
- **Text Invert** (`#ffffff`): 暗背景上の白テキスト
- **Text Brand** (`#fa6f78`): コーラル文字

### Surface & Borders

- **BG UI** (`#ffffff`): `--token-bg-ui`、ページ／ヘッダ／カード背景
- **BG Surface** (`#1118270a`): `--token-bg-surface` = `gray-900` の 4% 透過。チップやサーフェス用の薄いグレー面
- **BG Brand** (`#fa6f78`): コーラル面（バッジ、強調帯）
- **Border Default** (`#e5e7eb`): 標準ボーダー
- **Border Brand** (`#fa6f78`): ブランド色ボーダー
- **Border Focused** (`#111827`): フォーカスリング（黒に近いグレー）

---

## 3. Typography Rules

### 3.1 和文フォント

- **本文・見出し**: **IBM Plex Sans JP**（Web フォント、`<h1>〜<h3>`, `<p>`, `<span>`, `<a>` などコンテンツ要素のほぼすべてに適用）
- **UI 要素**: 和文フォントを明示せず、`ui-sans-serif, system-ui, sans-serif` のシステムフォントスタックに任せる（`<body>`, `<header>`, `<nav>`, `<footer>`, `<button>`）

### 3.2 欧文フォント

- **サンセリフ（コンテンツ）**: IBM Plex Sans JP の欧文グリフ → `ui-sans-serif` → `system-ui` → `sans-serif` の順
- **サンセリフ（UI）**: `ui-sans-serif`, `system-ui`, `sans-serif`（OS デフォルト）
- **ディスプレイ（大数字専用）**: **degular**（Webフォント）— `90,000` のような統計数字に hairline / extralight で使用
- **絵文字**: `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`

### 3.3 font-family 指定

```css
/* コンテンツ（見出し・本文・リンクなど） */
font-family: "IBM Plex Sans JP", ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

/* UI シェル（ヘッダ・ナビ・ボタン・フッタ） */
font-family: ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

/* ディスプレイ（大数字） */
font-family: degular, ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**フォールバックの考え方**:
- 和文フォント（IBM Plex Sans JP）を先頭に置き、和文・欧文ともに同フォントの欧文グリフを優先
- システムサンセリフ（ui-sans-serif / system-ui）は IBM Plex 未ロード時のフォールバック
- UI シェルは敢えて Web フォントを当てず、軽さと速度を優先
- 統計数字は degular で軽い印象を強調（degular 未ロード時はシステムサンセリフに落ちる）

### 3.4 文字サイズ・ウェイト階層

> 実測値（2026-05-01 取得）

**トップページ（mosh.jp/）**

| Role | Font | Size | Weight | Line Height | Color | 備考 |
|------|------|------|--------|-------------|-------|------|
| Hero H3 | IBM Plex Sans JP | 60px | 400 | 82.5px (×1.375) | `#f2414c` | "集客の流れをつくる" |
| Hero Big Number | degular | 72px | **100** (thin) | 72px (×1.0) | `#ffffff` | "90,000" |
| H3 Section | IBM Plex Sans JP | 32px | 400 | 44px (×1.375) | `#f2414c` | 大セクション見出し |
| H2 Sub | IBM Plex Sans JP | 24px | 400 | 33px (×1.375) | `#f2414c` | サブ見出し |
| Lead (span) | IBM Plex Sans JP | 16px | 500 | 32px (×2.0) | `#fa6f78` | letter-spacing 1.6px |
| Body (p) | IBM Plex Sans JP | 16px | 400 | 24px (×1.5) | `#ffffff` / `#09090b` | 本文 |
| Caption (p) | IBM Plex Sans JP | 14px | 700 | 20px (×1.43) | `#09090b` | 強調キャプション |
| Small (p) | IBM Plex Sans JP | 12px | 500 | 19.5px (×1.625) | gray-900 | 注釈 |
| Nav / Button | ui-sans-serif | 14px | 500 | 20px (×1.43) | `#09090b` / `#fff` | UI |

**About ページ（mosh.jp/about）**

| Role | Font | Size | Weight | Line Height | Color | 備考 |
|------|------|------|--------|-------------|-------|------|
| H1 | IBM Plex Sans JP | 48px | **400** | 48px (×1.0) | `#ffffff` | "情熱がめぐる経済をつくる" |
| H2 Brand | IBM Plex Sans JP | 48px | 400 | 48px (×1.0) | `#fa6f78` | "主なデータ" |
| H2 Origin | IBM Plex Sans JP | 36px | 700 | 40px (×1.111) | `#fa6f78` | "私たちの原点" |
| Stat Big Number | degular | 48px | **200** (extralight) | 48px (×1.0) | `#fa6f78` | "90,000" 等 |
| Stat Unit | IBM Plex Sans JP | 20px | 200 | 28px (×1.4) | `#fa6f78` | "人以上" 等 |
| Body (p) | IBM Plex Sans JP | 16px | 400-500 | 24-25.6px (×1.5-1.6) | gray-700 / `#fff` | 本文 |
| Caption | IBM Plex Sans JP | 14px | 400 | 22.75px (×1.625) | gray-600 | 補足 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- UI / ボタン / ナビ: `1.5`（24px / 16px）または `1.43`（20px / 14px）
- 見出し系: `1.0〜1.375`（48px / 48px の hero、82.5px / 60px の H3）
- 本文 (p): `1.5`（24px / 16px）が基本
- リード文（強調本文）: `1.6〜2.0`（25.6px / 16px、32px / 16px）
- 大数字 (degular): `1.0`（72px / 72px）

**字間 (letter-spacing)** — 実測値:
- 本文・見出しのほとんど: `normal`
- リード／プロモ系 span (`tracking-widest` = `0.1em`): `1.6px`（16px サイズ時）= `0.1em`
- 小タグ (`tracking-wide` = `0.025em`): `0.35px`（14px サイズ時）= `0.025em`

**ガイドライン**:
- 見出しは **weight 400 を基本** にして、太字で押すのではなくサイズと色で階層を作る
- 大数字は degular の **weight 100〜200**（hairline/extralight）でスマートな印象を出す
- "原点" のような感情を込める段見出しは weight 700 を例外的に使う
- 和文本文の line-height は note ほど開けず（1.5）、SaaS らしいコンパクトな組み

### 3.6 禁則処理・改行ルール

```css
/* Tailwind の break-all を多用 */
word-break: break-all;

/* リード文・キャッチでの改行制御 */
white-space: pre-line;     /* \n を反映 */
white-space: nowrap;       /* バッジ・ピル */
```

- ヒーローや見出しに `whitespace-pre-line` で改行位置を手動指定（"AI搭載の\nオールインワンプロダクト"）
- バッジ系は `whitespace-nowrap` で折り返し禁止

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt`/`kern` の明示的な有効化は確認されなかった
- IBM Plex Sans JP のデフォルトメトリクスに任せている

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（黒CTA）** — "アカウント登録"・"もっと詳しく見る"
- Background: `#111827`（gray-900 = `oklch(21% .034 264.665)`）
- Text: `#ffffff`
- Padding: `8px 16px`
- Border Radius: `6px`（`rounded-md`）
- Font: ui-sans-serif, 14px, weight 500
- Border: none

**Secondary（白＋枠）** — "プロフィールリンク" 等
- Background: `#ffffff`
- Text: `#09090b`
- Border: `1px solid #e5e7eb`
- Padding: `8px 16px`
- Border Radius: `6px`

**Ghost / Nav Link** — ヘッダのナビリンク
- Background: transparent
- Text: `#09090b`
- Padding: `8px 16px`
- Border Radius: `6px`

**Brand Pill / Badge** — コーラル小ボタン・タグ
- Background: `#fa6f78`
- Text: `#ffffff`
- Padding: `8px 14px`〜`10px 16px`
- Border Radius: `8px`（`rounded-lg`）
- Font: IBM Plex Sans JP, 12〜14px, weight 700

**Outlined Brand CTA**（about ページ "創業の物語のすべてを読む"）
- Background: `#111827`
- Text: `#ffffff`
- Border: `2px solid #111827`
- Padding: `16px 48px`
- Border Radius: `8px`
- Font: IBM Plex Sans JP, 14px, **weight 200**（extralight）— 上品で軽い印象

**Surface Pill**（カテゴリチップ "フィットネス・健康" など）
- Background: `#1118270a`（`--token-bg-surface`、gray-900 の 4% 透過）
- Text: `#09090b`
- Padding: `10px 16px`
- Border Radius: `20px`（`rounded-[1.25rem]`）
- Font: IBM Plex Sans JP, 14px, weight 700

### Cards

- Background: `#ffffff`
- Border: `1px solid #e5e7eb` または border なし
- Border Radius: 8〜20px（用途で可変。チップ系は 20px、カード系は 8〜12px）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`（`bg-ui`）または `backdrop-blur-lg` 半透明
- Border Bottom: `1px solid #e5e7eb`（`border-default`）
- Position: fixed top
- z-index: 10

### Footer

- Background: `bg-canvas`（白系キャンバス）
- Border Top: `1px solid #e5e7eb`
- Padding: `20px 36px`
- min-height: 65px

---

## 5. Layout Principles

### Spacing Scale

Tailwind CSS v4 のデフォルトスペーシング（4px ベース）。よく使われる値:

| Token | Value | Tailwind |
|-------|-------|----------|
| 1 | 4px | `gap-1` |
| 2 | 8px | `p-2` |
| 3 | 12px | `p-3` |
| 4 | 16px | `px-4` |
| 5 | 20px | `py-5`（footer） |
| 6 | 24px | `mb-6` |
| 8 | 32px | `gap-8`（nav） |
| 9 | 36px | `px-9`（footer） |
| 10 | 40px | `px-10` |
| 12 | 48px | `mb-12` |
| 20 | 80px | `lg:mb-20` |

### Container

- Max Width: 画面幅いっぱい（`w-full max-w-screen`）— 固定の中央寄せコンテナは持たず、各セクションごとに padding で制御
- Footer Padding: `20px 36px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| `rounded-md` | 6px | ボタン・小UI |
| `rounded-lg` | 8px | バッジ・ピル・CTA枠 |
| `rounded-[1.25rem]` | 20px | カテゴリチップ |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（ほぼ全要素） |
| 1（推測） | `0 1px 2px rgba(0,0,0,0.05)` | 必要時のドロップダウン |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **Tailwind v4 の半透明オーバーレイ**（`bg-surface` = `#1118270a`）と細い `1px` ボーダーで表現
- ヘッダの `backdrop-blur-lg` で半透明・奥行きを演出

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは **weight 400（regular）を基本** にし、サイズと色（コーラル `#fa6f78` / `#f2414c`）で階層を作る
- 大数字（統計・KPI）は **degular の weight 100〜200**（hairline/extralight）で軽やかに見せる
- 本文は **IBM Plex Sans JP**、UIシェル（ヘッダ・ボタン）は **system-ui** と明確に使い分ける
- CTA は黒系 `#111827`（gray-900）を主役にし、コーラルはアクセント・タグで使う
- 面の階層は**半透明の薄いグレー**（`#1118270a`）と**1px ボーダー**（`#e5e7eb`）で作る
- リード文・プロモ文には `letter-spacing: 0.1em`（`tracking-widest`）でゆとりを出す

### Don't（禁止）

- 見出しを `font-weight: 700` で強く押さない（"私たちの原点" のような特別な箇所のみ例外）
- ブランドコーラル `#fa6f78` を **CTA の背景** に多用しない（実サイトの押しは黒）
- 純粋な `#000000` を本文に使わない（`#09090b`〜`#111827` の範囲を使う）
- 大数字に regular/bold を当てない（degular は thin / extralight が前提）
- `box-shadow` を多用して立体感を出さない（ほぼフラットが基本）
- 和文フォントを `<button>` や `<header>` に明示しない（system-ui に任せて速度を稼ぐ実装）

---

## 8. Responsive Behavior

### Breakpoints（Tailwind CSS v4 既定）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ（about ページで多用：`lg:text-5xl`、`lg:mb-20` 等） |
| `xl` | 1280px | 広いデスクトップ |
| `2xl` | 1536px | 大画面 |

### モバイル／デスクトップ可変例

- About H1: モバイル `text-2xl` (24px) → `lg:text-5xl` (48px)
- About H2: モバイル `text-3xl` (30px) → `lg:text-5xl` (48px)
- Stat Number: モバイル `text-5xl` (48px) → デスクトップでは更に大きく
- "Origin" 本文: モバイル `text-sm` → `lg:text-sm` だが leading だけ可変

### タッチターゲット

- 主要ボタンは `padding: 8px 16px` で 36px 程度の高さ。タッチ用 CTA は `padding: 16px 48px`（"創業の物語" 等）で 56px 確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: #fa6f78（コーラルレッド、アクセント・タグ用）
Brand Deep: #f2414c（ヒーロー見出しの強調レッド）
CTA Background: #111827（gray-900、押しは黒）
CTA Hover: #374151（gray-700）
Text Primary: #111827 / 本文 p は #09090b
Text Helper: #4b5563
Text Placeholder: #9ca3af
Background: #ffffff
Surface: #1118270a（gray-900 の 4% 透過）
Border: #e5e7eb
Focus Ring: #111827
Link: #2559eb / Hover: #6088fa

Content Font: "IBM Plex Sans JP", ui-sans-serif, system-ui, sans-serif
UI Font: ui-sans-serif, system-ui, sans-serif
Display Font: degular, ui-sans-serif, system-ui, sans-serif

Body Size: 16px / line-height: 1.5 / weight 400
Heading Weight: 400（regular）を基本／例外的に 700
Big Number Weight: 100〜200（hairline / extralight）
Letter Spacing: normal が基本／リードに 0.1em
Border Radius: 6px（ボタン）／8px（バッジ・大CTA）／20px（チップ）
```

### プロンプト例

```
MOSH のデザインに従って、クリエイター向けランディングセクションを作成してください。
- コンテンツフォント: "IBM Plex Sans JP", ui-sans-serif, system-ui, sans-serif
- UIフォント（ボタン・ナビ）: ui-sans-serif, system-ui, sans-serif
- ヒーロー見出し: 60px / weight 400 / color #f2414c / line-height 1.375
- 大数字（KPI）: degular / 72px / weight 100 / color #fa6f78
- 本文: 16px / weight 400 / line-height 1.5 / color #09090b
- CTAボタン: 黒（#111827）/ 白文字 / padding 8px 16px / radius 6px
- ブランドピル: 背景 #fa6f78 / 白文字 / radius 8px / weight 700
- カテゴリチップ: 背景 #1118270a / 文字 #09090b / radius 20px / weight 700
- 純黒（#000000）は使わない。本文は #09090b、見出しの強い箇所のみ #111827
- box-shadow は使わない。階層は半透明グレー面と 1px ボーダーで表現
```
