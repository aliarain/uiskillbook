# DESIGN.md — クラレ（KURARAY）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-25 / 対象: `https://www.kuraray.com/jp-ja/`, `/jp-ja/company/president/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **濃紺 1 色と丸ピル。** 文字も CTA の面も `#000f3c` の濃紺ひとつで通し、ボタンは `border-radius: 30px` の完全なピル。影を一切使わず、カードは 8px の角丸と淡い面色で分ける
- **密度**: 中。本文 16px / 行間 1.75 とゆったり組み、コンテンツ幅 1280px・左右 44px
- **キーワード**: Noto Sans CJK JP 単一、濃紺 #000f3c、ピルボタン、字間ゼロ、影ゼロ

**このサイトの核心は4つある。**

1. **書体は `noto-sans-cjk-jp` 1 ファミリーだけ。和文も欧文もこれで組む。** 実測で**可視テキストの 100%**（トップ 139/139 要素・下層 96/96 要素）がこのスタック。配信は **Adobe Fonts（Typekit・キット ID `bvs7xqv`）**で、`p.typekit.net/p.gif?…&f=43111.43112.43113` が示すとおり**読み込んでいるのは 3 書体**＝ウェイト 400 / 500 / 700。すべて `loaded`
2. **`letter-spacing` を一切いじらない。** 実測 **`normal` が 136/139 要素**。残り 3 件は Cookie バナー由来。詰めも空けもせず、Noto Sans CJK JP の素の字送りで組む
3. **ルートもサイズも完全固定。流体を 1 つも使っていない。** `html` 16px / `body` 16px が **1920 / 1440 / 1200 / 1024 / 834 / 768 / 767 / 375 / 374px の 9 幅すべてで不変**。CSS 全文に `clamp()` 0 件、`font-size: …vw` 0 件。見出しだけメディアクエリで 2 段に切り替える
4. **CSS Custom Properties が 1 つも無い。** 自社トークン 0・プラットフォーム由来 0。AEM（Adobe Experience Manager）＋ Scene7 の構成で、**値はすべて CSS に直書き**

**ヒーローの斜めカットは CSS ではなく画像。** 全走査で `clip-path` 0 件・skew 変形 0 件。
Scene7 から `…:21-9` のクロップ指定で配信される 1280×549 の JPEG に、斜めの切り口ごと焼き込まれている。
**`clip-path` や `transform: skew()` で再現しようとしない。**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Kuraray Navy** | **`#000f3c`** | **このサイトの全部。** 本文の文字色として**可視 124/139 要素**、同時に CTA の塗り面・ボタンの 2px ボーダー。**文字色とブランド色が同じ 1 色** |
| **White** | `#ffffff` | 濃紺面の上の文字（可視 9 要素）、アウトラインボタンの地 |

> **アクセントカラーが無い。** 濃紺・白・淡いグレーの 3 つだけで、赤や緑のような差し色を持たない。
> **CTA に別の色を足さない。**

### Neutral（ニュートラル）

- **Text Primary** (`#000f3c`): 本文・見出し・リンク。**可視 124 要素**。純黒は使わない
- **Text Muted** (`#666f8a`): パンくず（可視 2 要素）
- **Surface Gray** (`#f2f3f5`): タブの帯、ニュースのフィルタ行（可視 8 要素）
- **Surface Warm** (`#f7f6f3`): ニュースカードの面（可視 5 要素）
- **Surface Beige** (`#e6e4dc`): `Pickup` の帯（可視 7 要素）
- **Border** (`#000000`): カードの 1px 罫（可視 6 要素）
- **Input Border** (`#b2b7c4`): 検索欄の枠
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample (3/3)`）

> **`#ffc845`（黄）は Cookie バナー（OneTrust）専用。** `すべて拒否する` `すべての Cookie を受け入れる` にしか出ず、
> サイト本体には 1 要素も無い。**ブランドカラーとして採用しない。**
> 同様に `#27455c` `#468254` `#3860be` `#007ab8` はアイコン SVG と動画プレイヤーの色で、テキストを持たない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans CJK JP**。Adobe Fonts 配信のため、CSS 上の名前は **`noto-sans-cjk-jp`**（ハイフン区切りの小文字＝Typekit の命名）
- ウェイトは **400 / 500 / 700 の 3 本**。`document.fonts` で 3 本とも `loaded`
- **明朝体は使わない**（可視 0 要素）

### 3.2 欧文フォント

- **専用の欧文書体を持たない。** 欧文も `noto-sans-cjk-jp` の欧文グリフ（＝Noto Sans）で組む
- CSS には **`RationalText` 400/500/600** と **`SourceHanSansSC` 400/500/700** の `@font-face` もあるが、
  **両ページとも `unloaded`・可視 0 要素**。これは**多言語サイトの他ロケール用**（グローバル英語版・中国語版）の用意で、
  日本語ページでは 1 バイトも読まれない。**日本語 UI に書き写さない**

### 3.3 font-family 指定

```css
/* 本文・見出し・ボタン すべて共通。これ 1 行だけ */
font-family: noto-sans-cjk-jp, sans-serif;
```

**フォールバックの考え方**:
- **和文と欧文を分けない。** 1 ファミリーで両方まかなう
- Adobe Fonts が落ちたときの受け皿は generic の `sans-serif` だけ
- **Google Fonts で代替するなら `"Noto Sans JP"`**（同じ書体のサブセット版）。字形は一致する

### 3.4 文字サイズ・ウェイト階層

`html` / `body` ともに **16px 固定**。`rem` と `px` が混在するが、ルートが動かないので換算は常に 1rem = 16px。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Hero Heading | **38px** | `500` | 57.008px (**1.5**) | `normal` | トップのヒーロー見出し |
| Heading 1（下層） | **32px** | `500` | 48px (1.5) | `normal` | `ごあいさつ` |
| Heading 2 | **26px** | `500` | 39.008px (1.5) | `normal` | `ニュース` `製品情報` |
| Lead | 18px | `700` | 1.78 | `normal` | 社長メッセージの惹句 |
| Body | **16px** | `400` | **28px (1.75)** | `normal` | **可視 96 要素で最多** |
| Caption | 14px | `400` | 1.5〜1.71 | `normal` | 日付・言語切替 |
| Small | 12px | `400` | — | `normal` | カテゴリチップ |

> **ウェイトは 400 / 500 / 700 の 3 段。** 見出しは **500（Medium）**で、700 は
> グローバルナビの大項目と惹句だけ（可視 7〜8 要素）。**見出しに 700 を使わない。**

### 3.5 行間・字間

- **本文の行間**: **1.75**（16px → 28px）。**可視 76〜87 要素で最多**
- **見出しの行間**: **1.5**（38px → 57.008px / 32px → 48px / 26px → 39.008px）
- **本文の字間**: **`normal`**。**可視 136/139 要素**
- **見出しの字間**: **`normal`**

```css
body { letter-spacing: normal; }   /* 字間は一切いじらない */
.text    { font-size: 16px; line-height: 1.75; }
.heading { font-size: 38px; line-height: 1.5; font-weight: 500; }
```

> **`letter-spacing` を足さない。** 日本語サイトでは 0.03〜0.08em を当てる例が多いが、
> このサイトは**意図的に素のまま**。足すと別のサイトになる。
> `line-height` の `57.008px` のような端数は 38px × 1.5002 相当の丸め。**比率 1.5 として書いてよい。**

### 3.6 禁則処理・改行ルール

```css
body { word-break: normal; }   /* 実測。9 幅すべてで normal */
```

`word-break` は **`normal`**。日本語の標準的な禁則処理に任せる。`break-all` も `auto-phrase` も使っていない。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;   /* 実測 0 要素 */
```

- **`palt` / `halt` は CSS 全文で 0 件、実測も 0 要素。** 字詰めはしない
- 字間が `normal` なのと合わせて、**約物の処理に一切手を入れない**方針

### 3.8 縦書き

実測 `writing-mode: vertical-rl` は **0 要素**。縦組みは使わない。

---

## 4. Component Stylings

### Buttons

**Primary（塗り）**
- Background: `#000f3c`
- Text: `#ffffff`
- Border: **`2px solid #000f3c`**（塗りにも同色の 2px 枠を持たせる）
- Padding: `11px 24px`
- Border Radius: **`30px`**（完全なピル）
- Font Size: `16px`
- Font Weight: `500`
- Letter Spacing: `normal`

**Secondary（アウトライン）**
- Background: `#ffffff`
- Text: `#000f3c`
- Border: **`2px solid #000f3c`**
- Padding: `11px 24px`
- Border Radius: **`30px`**
- Font Size / Weight: Primary と同じ

> **塗りと線で枠の太さ・余白・角丸が完全に同じ。** ホバーで塗りと線を入れ替えても寸法が 1px も動かない作り。

**Tertiary（`全て見る`）**
- Background: `#ffffff` / Text: `#000f3c` / Border: `2px solid #000f3c`
- Padding: `0 30px` / Border Radius: **`20px`**

### Cards

- Background: `#f7f6f3`（ニュース）/ `#ffffff`
- Border: `1px solid #000000`（一部）
- Border Radius: **`8px`**
- Shadow: **なし**

### Chips / Tabs

- カテゴリチップ: Border Radius `4px` / Font Size `12px`
- タブの帯: Background `#f2f3f5` / Border Radius `16px`（左端だけ `16px 0 0 16px`）

### Inputs

- Background: `transparent`
- Border: `1px solid #b2b7c4`
- Border Radius: **`20px`**
- Padding: `10px 17px 10px 44px`（左 44px は検索アイコン分）
- Font Size: `16px`

**Select**
- Background: `#ffffff` / Border: `1px solid #333333` / Border Radius: `4px` / Padding: `6px 24px 4px 8px`

> **角丸は役割ごとに違う。** ボタン 30px（ピル）／`全て見る` 20px ／検索欄 20px ／カード 8px ／タブ 16px ／チップ 4px ／
> カルーセルのドット 50%。**1 つの値に統一しない。**

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実測 |
|-------|-------|------|
| XS | **8px** | gap 最多（7 箇所） |
| S | **12px** | |
| M | **15px / 16px** | |
| L | **32px** | セクション内（6 箇所） |
| XL | **34px** | |
| XXL | **44px** | コンテンツ左右余白（8 箇所） |

### Container

- Max Width: **1280px**（10 箇所で最多）。記事本文は **900px**
- Padding (horizontal): **44px**

### Grid

- Columns: 3〜4（ニュースカード・セクション導線）
- Gutter: **32px**（セクション間）/ **16px**（カード間）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **サイト本体のすべて** |

> **影はサイト本体に 1 つも無い。** 計測に出る `rgba(0,0,0,0.2) 0 0 18px` は Cookie バナー由来。
> 面の区別は**角丸（8px）と淡い面色**（`#f7f6f3` / `#f2f3f5` / `#e6e4dc`）でつける。**`box-shadow` を足さない。**

---

## 7. Do's and Don'ts

### Do（推奨）

- `font-family: noto-sans-cjk-jp, sans-serif;` の 1 行で通す（代替は `"Noto Sans JP"`）
- `font-weight` は **400 / 500 / 700** の 3 段。見出しは **500**
- 本文の `line-height` は **1.75**、見出しは **1.5**
- `letter-spacing` は **`normal` のまま**にする
- ボタンは **`border-radius: 30px` のピル**。塗りと線で寸法を揃える（`2px solid` / `padding: 11px 24px`）
- カードは **8px の角丸と淡い面色**で分ける
- コンテナは **max-width 1280px / 左右 44px**

### Don't（禁止）

- **`letter-spacing` を足さない。** このサイトは字間を一切いじらない
- **`font-feature-settings: "palt"` を足さない**（実測 0 件）
- **`box-shadow` を足さない。** サイト本体の影はゼロ
- **アクセントカラーを増やさない。** `#000f3c` と白とグレーだけ
- **`#ffc845`（黄）をブランド色として使わない。** Cookie バナー専用
- **`RationalText` / `SourceHanSansSC` を日本語ページに書かない。** 他ロケール用の宣言で、日本語では読まれない
- **ヒーローの斜めカットを `clip-path` / `transform: skew()` で作らない。** 画像に焼き込まれている
- **`clamp()` や `vw` でサイズを流体にしない。** このサイトは 9 幅すべてで完全固定
- **角丸を 1 つの値に統一しない。** ボタン 30px / カード 8px / チップ 4px は別物

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile / Tablet | ≤ 1023px | 見出しを 1 段落とす |
| Desktop | ≥ 1024px | 基準サイズ |

**ルートは一切動かない。** `html` 16px / `body` 16px が 1920 / 1440 / 1200 / 1024 / 834 / 768 / 767 / 375 / 374px の
**9 幅すべてで同じ**。`clamp()` も `vw` も使わない、メディアクエリによる階段だけの設計。

実測（下層ページ）:

| 幅 | html | body | h1 | h2 | p |
|---|---|---|---|---|---|
| 1920〜1024px | 16px | 16px | **32px** / 48px | **26px** / 39.008px | 16px / 28px |
| 834〜374px | 16px | 16px | **26px** / 39.008px | **22px** / 33.008px | 16px / 28px |

トップページの h2（ヒーロー見出し）は 1024px 以上 **38px**、834px 以下 **32px**。

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）。実サイトのボタンは `padding: 11px 24px` + 16px 文字 + 2px 枠で約 46px

### フォントサイズの調整

- **本文は 16px のまま落とさない**（モバイルでも 16px / 行間 28px）
- 見出しのみ 1 段落とす（32px → 26px、26px → 22px、38px → 32px）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000f3c（文字色と CTA の面が同じ）
Text Color:    #000f3c
Surface:       #f7f6f3 / #f2f3f5 / #e6e4dc
Background:    #ffffff
Font: noto-sans-cjk-jp, sans-serif（代替: "Noto Sans JP"）
Weights: 400 / 500 / 700
Body Size: 16px
Line Height: 1.75（本文）/ 1.5（見出し）
Letter Spacing: normal（一切いじらない）
Button Radius: 30px（ピル）／ Card Radius: 8px
Shadow: なし
```

### プロンプト例

```
クラレのデザインシステムに従って、ニュース一覧ページを作成してください。
- フォント: noto-sans-cjk-jp, sans-serif（無ければ "Noto Sans JP"）。和文も欧文もこれ 1 つ
- letter-spacing は normal のまま。足さない
- 本文 16px / line-height 1.75、見出し 26px / weight 500 / line-height 1.5
- 文字色は #000f3c。純黒は使わない
- CTA は border-radius 30px のピル。塗りは背景 #000f3c・白文字・2px solid #000f3c・padding 11px 24px
  アウトラインは地を白、文字を #000f3c にして枠と余白は塗りと完全に同じ
- カードは border-radius 8px、面は #f7f6f3。box-shadow は使わない
- コンテナは max-width 1280px、左右 padding 44px
- サイズは固定。clamp() や vw を使わず、1024px 未満で見出しを 1 段落とすだけにする
```
