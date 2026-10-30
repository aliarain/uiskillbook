# DESIGN.md — 南海電気鉄道（NANKAI）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-02 / 対象: `https://www.nankai.co.jp/`, `/company/about_us/index.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **色を「分類の道具」として大量に持つ。** 自社の CSS Custom Properties **89 個**のうち 40 個以上が色で、路線 6 色・ラベル 7 色・装飾 5 色・前置き（淡色）7 色が名前付きで並ぶ
- **密度**: 高い。運行情報・時刻表・路線図・沿線情報を 1 画面に積む公共交通のポータル。可視テキスト 262 要素
- **キーワード**: 南海オレンジ、路線カラー、10px ルート、字間を触らない、`pkna`

**このサイトの核心は 4 つある。**

1. **`:root { font-size: 0.625rem }` でルートを 10px にしている。** `62.5%` ではなく `rem` で書いてあるが、初期値 16px に対して解決されるので結果は 10px。**すべての `rem` が「px の 1/10」になる**（`1.4rem` = 14px / `.4rem` = 4px / `.3rem .9rem` = 3px 9px）。4 幅（1440 / 1200 / 834 / 375px）すべてで 10px 固定
2. **路線ごとの色を CSS 変数で持っている。** `--nankai-line: #0077ce` / `--kouya-line: #04873e` / `--airport-line: #594bac` / `--semboku-line: #b1bc3a` / `--kada-line: #727878` / `--gran-tenku: #96191e`。**路線を色で指すのが前提の情報設計**
3. **`letter-spacing` を一切触らない。** 可視 262 要素中 **258 要素が `normal`**（下層も 59 要素中 57）。CSS 全文で `letter-spacing` の宣言は **5 回、すべて `0%`**。残る 2 件は CMP 由来
4. **`font-feature-settings: "pkna"` を `:root` に 1 回だけ書いて全体に継承させている**（可視 **1765 要素**／下層 518 要素）。`palt` ではない。**約物も欧文も触らず、かなだけをプロポーショナルにする**

CSS Custom Properties は **自社 89 個 / プラットフォーム由来 1 個**（Swiper の `--swiper-theme-color`）。`--z-*` の 17 個で z-index を、`--contents-width*` でコンテナ幅を、`--padding-contents-wrapper--*` で余白を管理している。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 変数 | 実装値 | 実測 |
|------|------|--------|------|
| **南海オレンジ** | `--primary-color` | **`#e94e00`** | **塗り面 52 要素**。`まちとつながる` ボタン、`南海アプリ`、`運賃検索`、見出しの強調文字（文字色 4 要素） |
| **Primary Hover** | `--primary-color-hover` | `#ff691d` | ホバー時 |
| **アクセント（黄）** | `--accent-color` | **`#ffb700`** | `電車に乗る` ボタン |
| **Accent Hover** | `--accent-color-hover` | `#fad697` | ホバー時 |
| **オレンジのグラデーション** | `--gr-color--orange` | `linear-gradient(135deg, #f3b238 0%, #e66c33 100%)` | 帯・カード見出し |

### 路線カラー（Line Colors）

| 路線 | 変数 | 実装値 |
|------|------|--------|
| 南海本線 | `--nankai-line` | **`#0077ce`** |
| 高野線 | `--kouya-line` | **`#04873e`** |
| 空港線 | `--airport-line` | **`#594bac`** |
| 泉北線 | `--semboku-line` | **`#b1bc3a`** |
| 加太線 | `--kada-line` | **`#727878`** |
| 天空（観光列車） | `--gran-tenku` | **`#96191e`** |

> **路線カラーは変数名で意味が確定している。** 路線名と色を自前で決め直さず、必ずこの 6 個を使うこと。

### ラベルカラー（Label Colors）— 沿線情報のタグ

| 変数 | 実装値 | 実測 |
|------|--------|------|
| `--label-color--purple` | `#b178ff` | **`カルチャー` タグ 8 要素** |
| `--label-color--green` | `#5cbb28` | **`ハイキング` タグ 5 要素** |
| `--label-color--blue` | `#5286ff` | **`海` タグ 3 要素** |
| `--label-color--yellow` | `#fcc100` | `寺社仏閣` タグ |
| `--label-color--orange` | `#ed5d00` | `グルメ` タグ |
| `--label-color--light-blue` | `#1cb7ff` | — |
| `--label-color--red` | `#ea3f70` | — |

### Semantic（意味的な色）

- **Danger / NEW** (`--txt-color--red` `#dd0000` / `--decoration-color--red` `#ff3838`): `NEW` バッジは `#ff3838` の面（可視 6 要素）
- **Success** (`--txt-color--green` `#1fa45d` / `--decoration-color--green` `#04873e`): `お知らせ` の見出し色（可視 2 要素）
- **Warning** (`--txt-color--orange` `#e8761e`)
- **IR** (`#594bac`): `IRニュース` の文字色（空港線と同色）

### Neutral（ニュートラル）

- **Text Primary** (`--txt-color--default` `#333333`): 本文・見出し。**可視 135 要素**。`body` に変数で指定
- **Text Black** (`#000000`): カードの見出し・ナビの第一階層（可視 66 要素）。**本文には使わない**
- **Text on Dark** (`#ffffff`): 面の上のテキスト（可視 51 要素）
- **Text Dark Gray** (`--txt-color--dark-gray` `#757575`)
- **Text Light Gray** (`--txt-color--light-gray` `#989898`) / **Lighter** (`#b9b9b9`) / **Placeholder** (`#c5c5c5`)
- **Border** (`--border-color--gray` `#dadce0`) / **Light** (`--border-color-light-gray` `#e1e1e1`)
- **Surface** (`#f9f9f9`): カードの面。**可視 155 要素でサイト最多**
- **Surface Gray** (`--bg-color--gray` `#ececec`): 運行情報・検索ブロックの帯（**可視 65 要素**）
- **Section Tints**: `--bg-color--section-yellow` `#fff8e5` / `--section-orange` `#fef6f2` / `--section-red` `#fef2f2`
- **Background** (`#ffffff`): ページ背景

> **トップページの `pageBackground.resolved` は `#ececec`（根拠 `viewportTopBySample (9/12)`）だが、これは運行情報帯の面色。** 下層ページの `resolved` は `#ffffff`（根拠 `viewportTopBySample (4/4)`）。**地色は白、`#ececec` はセクション帯**と読む。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**。Google Fonts 配信、`wght@400;500;700` の 3 ウェイト。**可視 261 要素**（下層は 59 要素すべて）
- **明朝体**: 使用しない

### 3.2 欧文フォント

- 欧文専用のフォントは指定していない。**Noto Sans JP の欧文グリフをそのまま使う**
- フォールバックは `sans-serif` のみ

### 3.3 font-family 指定

```css
:root {
  --font-family: "Noto Sans JP", sans-serif;
  --line-height--root: 1.5;

  font-family: var(--font-family);
  font-size: 0.625rem;              /* 初期値 16px に対して 10px */
  font-feature-settings: "pkna";    /* 可視 1765 要素へ継承 */
  line-height: var(--line-height--root);
  -webkit-text-size-adjust: 100%;
}

body {
  font-size: 1.4rem;                /* = 14px */
  color: var(--txt-color--default); /* #333333 */
  line-height: inherit;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 320px;
}
```

**フォールバックの考え方**:
- 和文 Web フォント 1 本 + 総称ファミリという最小構成。**OS 書体へのフォールバックを書いていない**ので、Noto Sans JP の取得に失敗すると各 OS の `sans-serif` 既定に落ちる
- 新規実装でローカル書体を足す場合は `"Noto Sans JP", "Hiragino Sans", "Yu Gothic Medium", sans-serif` のように挟むとよい（**実サイトはそうしていない**）

### 3.4 文字サイズ・ウェイト階層

`rem` 基準が 10px なので、**宣言値 × 10 = px**。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Page Title (h1) | 28px (`2.8rem`) | 700 | 1.5 (42px) | normal | 下層ページの見出し |
| Section (h2) | 32px | 700 | 1.5 | normal | トップの `最新情報` `まちとつながる`（4 要素） |
| Section Small (h2) | 24px / 21px / 18px | 700 | 1.5 | normal | 階層に応じて 3 段 |
| Sub (h3) | 18px / 16px / 14px | 500〜700 | 1.5 | normal | `運行情報` は 16px / 700 |
| Body | **14px** (`1.4rem`) | 400 | 1.5 (21px) | normal | **可視 126 要素でサイト最多** |
| Lead | 16px | 400〜500 | 1.5 | normal | 可視 58 要素 |
| Caption | 12px | 400 | 1.5 | normal | 日時・`NEW`・タグ（可視 34 要素） |
| Icon Label | 10px | 400 | 1.5 (15px) | normal | `検索` `更新` |

**ウェイトは 400 / 500 / 700 の 3 段だけ。**

- `@font-face` は `wght@400;500;700` の 3 本のみで、実測の分布も 400（154）/ 700（71）/ 500（35）。**600 の 2 件は CMP 由来**
- **600 や 300 を当てないこと。** Google Fonts の URL に無いウェイトは合成になる

### 3.5 行間・字間

- **行間は 1.5 一本。** `:root` の `--line-height--root: 1.5` を `body { line-height: inherit }` で受け、**可視 255 要素**（下層 55 要素）が 1.5。見出しも本文も同じ
- **例外**: ロゴ下のタグライン（1.0）、CMP（1.4）だけ
- **字間は `normal`。** 可視 258 要素。CSS 全文の `letter-spacing` 宣言は 5 回ですべて `0%`

**ガイドライン**:
- **行間を見出しで詰めない。** このサイトは `1.5` を一律で通す。見出しの詰まりは `font-size` と余白で作る
- **字間を足さない。** 代わりに `pkna`（3.7 参照）でかなの間隔を調整している

### 3.6 禁則処理・改行ルール

```css
body {
  overflow-wrap: break-word;
  word-wrap: break-word;   /* 旧仕様。実サイトは両方書いている */
}
```

- `word-break` は宣言していない（既定の `normal`）
- `word-break: auto-phrase` は未使用
- 駅名・路線名は `<br>` と `<wbr>` を使わず、**コンテナ幅（1080px）内で自然に折り返させる**

### 3.7 OpenType 機能

```css
:root { font-feature-settings: "pkna"; }   /* 可視 1765 要素 */
```

- **`palt` ではなく `pkna`。** `pkna` は**かな（ひらがな・カタカナ）だけ**をプロポーショナル字形にする機能。約物（`、` `。` `「` `」`）と漢字・欧文の幅は動かない
- `palt` に比べて詰まり方が穏やかで、**公共交通の案内文のように読み違いが許されない文章に向く**選択
- CTA・バッジにも同じ `"pkna"` が降りている（`interactive` の全要素で確認）

### 3.8 縦書き

該当なし（`writing-mode` の実装は 0 件）。

---

## 4. Component Stylings

`rem` は 10px 基準。以下は px に直した実測値。

### Buttons

**Primary（南海オレンジ）** — `南海アプリ` `運賃検索` `まちとつながる`

- Background: `#e94e00`（`--primary-color`）
- Text: `#ffffff`
- Font: 16px / weight 700 / line-height 1.5
- Padding: `4px`（コンテンツ側で高さを作る）
- Border Radius: `4px`（`.4rem`）
- Box Shadow: `0 3px 9px rgba(0,0,0,.2)`（`0 .3rem .9rem`）
- Hover: `#ff691d`

**Accent（黄）** — `電車に乗る`

- Background: `#ffb700`（`--accent-color`）
- Text: `#ffffff` / 14px / weight 700
- Border Radius: `4px`
- Hover: `#fad697`

**Outlined（検索・運行情報）** — `運行状況詳細` `遅延証明`

- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid` グレー
- Border Radius: `2px`（`.2rem`）
- Box Shadow: `0 2px 2px rgba(0,0,0,.24)`

**Blue Filter** — 絞り込みボタン

- Background: `#3860be` / Border: `1px solid #bbbbbb` / Border Radius: `17px`

### Badges / Tags

**沿線情報のタグ**（ラベルカラーのピル）

- Background: ラベルカラー（`#5286ff` / `#5cbb28` / `#b178ff` / `#fcc100` / `#ed5d00`）
- Text: `#ffffff`
- Font: 12px / weight 400
- Padding: `5px 16px`
- Border Radius: `16px`（`1.6rem`）
- Box Shadow: `none`

**NEW バッジ**

- Background: `#ff3838`（`--decoration-color--red`）/ 文字 `#ffffff` / 12px

### Cards

- Background: `#f9f9f9`（**可視 155 要素**。白ではなく淡いグレー）
- Border: なし
- Border Radius: `4px`
- Shadow: `0 3px 6px rgba(0,0,0,.16)`（**可視 65 要素でサイト最多**）

### Inputs

- Background: `--bg-color--input-text` `#f7fafc`
- Border: `1px solid` `--border-color--input-gray` `#cbd5e0`
- Error: 背景 `--bg-color--input-error` `#ffcccc`
- Placeholder: `--txt-color--placeholder` `#c5c5c5`
- Font: 14px（モバイル拡大を避けるため一部 16px）

---

## 5. Layout Principles

### Spacing Scale（CSS 変数）

| Token | 変数 | 値 |
|-------|------|-----|
| コンテンツ上余白 | `--padding-contents-wrapper--t` | `3rem` = **30px** |
| コンテンツ下余白 | `--padding-contents-wrapper--b` | `6rem` = **60px** |
| 左右余白 | `--padding-contents-wrapper--lr` | `1.8rem` = **18px** |

実測で多い `gap`: **6px**（32 件）/ 18px（5 件）/ 8px（3 件）/ 48px / 20px

### Container

| 用途 | 変数 | 値 |
|------|------|-----|
| 標準 | `--contents-width` | **1080px**（**可視 26 要素／下層 31 要素**） |
| 狭い | `--contents-width--narrow` | **812px** |
| 広い | `--contents-width--wide` | **1280px** |
| 余白込み | `--contents-width-include-padding` | `calc(1080px + 1.8rem * 2)` = **1116px** |

### z-index（CSS 変数で 17 段）

```css
--z-init: 0;  --z-layer: 1 … --z-layer5: 5;  --z-popup: 6;
--z-anchor-list-fixed: 7;  --z-site-header-global-nav: 8;
--z-site-header-search: 9;  --z-search-nav-trigger: 10;
--z-search-nav-region: 11;  --z-search-nav-floating-btn: 12;
--z-page-to-top: 13;  --z-site-header: 14;
--z-site-header-fixed-menu: 15;  --z-modal: 16;
```

> **重なり順を数値ではなく名前で管理している。** 新しい重なりを足すときは生の数値を書かず、変数を追加すること。

---

## 6. Depth & Elevation

| Level | Shadow（実装） | rem 宣言 | 用途 |
|-------|----------------|----------|------|
| 0 | `none` | — | 面で区切る要素 |
| 1 | `0 1px 3px rgba(0,0,0,.2)` | `0 .1rem .3rem` | 小さな浮き（CSS 12 回） |
| 2 | **`0 3px 6px rgba(0,0,0,.16)`** | `0 .3rem .6rem` | **カードの既定。可視 65 要素** |
| 3 | **`0 3px 9px rgba(0,0,0,.2)`** | `0 .3rem .9rem` | **ボタン・CTA。可視 19 要素** |
| 4 | `0 2px 2px rgba(0,0,0,.24)` | `0 .2rem .2rem` | ヘッダー・ドロップダウン（下層 3 要素） |

- **影は黒のアルファのみ。** 色付きの影は使わない
- 濃さは `.16` → `.2` → `.24` の 3 段で、**強いものほどぼかしが小さい**（ヘッダー 2px / カード 6px / CTA 9px）

### Border Radius

| 値 | rem 宣言 | 用途 | 実測 |
|----|----------|------|------|
| `2px` | `.2rem` | アウトライン系ボタン | 可視 17 要素 / CSS 15 回 |
| **`4px`** | **`.4rem`** | **既定（カード・CTA・セレクト）** | **可視 20 要素 / CSS 37 回** |
| `16px` | `1.6rem` | タグのピル | 可視 21 要素 / CSS 5 回 |
| `50%` | — | アイコンの円 | 可視 44 要素 / CSS 29 回 |

---

## 7. Do's and Don'ts

### Do（推奨）

- **ルートを 10px にする**（`:root { font-size: 0.625rem }`）。以降の寸法はすべて `rem` で「px の 1/10」として書く
- 色は**変数名で指す**。路線色は 6 個、タグ色は 7 個、どちらも名前が意味を持つ
- `line-height: 1.5` を `:root` に 1 回だけ書いて全体へ継承させる
- `font-feature-settings: "pkna"` を `:root` に 1 回だけ書く
- ウェイトは 400 / 500 / 700 の 3 段
- カードは `#f9f9f9` の面 + `0 3px 6px rgba(0,0,0,.16)`、CTA は `0 3px 9px rgba(0,0,0,.2)`
- z-index は変数で管理する

### Don't（禁止）

- **`letter-spacing` を足さない。** このサイトは `normal` が設計（可視 258 要素）
- **`palt` を使わない。** かなだけ詰める `pkna` が意図
- **600 / 300 のウェイトを当てない**（`@font-face` に無く、合成になる）
- 見出しの `line-height` を 1.2 などに詰めない（全体 1.5 で揃えている）
- 路線色・タグ色を自前の色に置き換えない
- 本文の文字色に `#000000` を使わない（`#333333` が既定。黒はカード見出しだけ）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 568px | `min-width: 569px` の裏返し（CSS 3 回） |
| Tablet | ≤ 768px | **`min-width: 769px` が CSS 内で最多（7 回）** |
| Laptop | ≤ 1024px | `min-width: 1025px`（5 回） |
| Desktop | ≥ 1281px | `min-width: 1281px` |
| Wide | ≥ 1600px | 最大幅の調整 |

- `@media print, screen and (min-width: 769px)` の形が多く、**印刷にもデスクトップレイアウトを当てている**
- `@media (prefers-reduced-motion: reduce)` を実装済み

### フォントサイズの調整

- **`html` は 4 幅（1440 / 1200 / 834 / 375px）すべてで 10px 固定。** `body` も 14px / line-height 21px / letter-spacing normal のまま動かない
- 変えるのは見出しサイズとレイアウト。本文のタイポグラフィはブレークポイントをまたいで同一

### タッチターゲット

- `電車に乗る` / `まちとつながる`（高さ約 54px）、`運行状況詳細`（約 42px）
- **アイコンボタン（`検索` 10px ラベル）は 44px を下回る。** モバイルでは当たり判定を広げること
- `body { min-width: 320px }`

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary:        #e94e00  (hover #ff691d)
Accent:         #ffb700  (hover #fad697)
Line 南海本線:   #0077ce
Line 高野線:     #04873e
Line 空港線:     #594bac
Line 泉北線:     #b1bc3a
Line 加太線:     #727878
Line 天空:       #96191e
Text:           #333333
Text Black:     #000000  (カード見出しのみ)
Surface:        #f9f9f9
Surface Band:   #ececec
Border:         #dadce0
Background:     #ffffff

Root Font Size: 10px （:root { font-size: 0.625rem }）← rem は px の 1/10
Font:           "Noto Sans JP", sans-serif
Weights:        400 / 500 / 700 のみ
Body Size:      14px (1.4rem)
Line Height:    1.5（サイト全体で一律）
Letter Spacing: normal（触らない）
font-feature:   "pkna"（palt ではない。:root に 1 回）
Border Radius:  4px（既定） / 2px（outlined） / 16px（タグ） / 50%（アイコン）
Shadow (card):  0 3px 6px rgba(0,0,0,.16)
Shadow (CTA):   0 3px 9px rgba(0,0,0,.2)
Container:      1080px（狭 812px / 広 1280px）
Padding:        30px / 60px / 左右 18px
```

### プロンプト例

```
南海電鉄のデザインシステムに従って、沿線情報の一覧ページを作成してください。
- :root に font-size: 0.625rem（= 10px）/ font-family: "Noto Sans JP", sans-serif /
  line-height: 1.5 / font-feature-settings: "pkna" を書き、body は font-size: 1.4rem / color: #333333
- letter-spacing は一切宣言しない（normal のまま）
- font-weight は 400 / 500 / 700 だけを使う（600 や 300 は使わない）
- コンテナは 1080px、左右パディング 1.8rem、上 3rem / 下 6rem
- カードは背景 #f9f9f9 / border-radius .4rem / box-shadow 0 .3rem .6rem rgba(0,0,0,.16)
- CTA は #e94e00 / 白文字 / 16px weight 700 / radius .4rem / box-shadow 0 .3rem .9rem rgba(0,0,0,.2)
- 記事のタグは 12px weight 400 / padding 5px 16px / radius 1.6rem で、
  海 #5286ff・ハイキング #5cbb28・カルチャー #b178ff・寺社仏閣 #fcc100・グルメ #ed5d00 を使い分ける
- 路線名を色で示すときは南海本線 #0077ce / 高野線 #04873e / 空港線 #594bac /
  泉北線 #b1bc3a / 加太線 #727878 / 天空 #96191e
- z-index は直書きせず --z-* 変数で管理する
- ブレークポイントは min-width: 769px を主軸に、569 / 1025 / 1281px
```

---

## 補足: 計測で分かった実装の実態

- **`:root` の `font-size: 0.625rem` は自己参照に見えるが正しく動く。** `rem` は「ルート要素の font-size」を参照するが、`:root` 自身に指定する場合は**継承前の初期値（16px）**に対して解決されるため 10px になる。`62.5%` と等価
- **CSS 変数 89 個のうち色が 40 個以上。** 接頭辞は `--primary-` `--accent-` `--txt-color--` `--label-color--` `--decoration-color--` `--prefix-color--` `--border-color--` `--bg-color--` と役割別に揃っており、**ライブラリ由来ではなく自社設計のトークン**。プラットフォーム由来は Swiper の 1 個だけ
- **`--prefix-color--*` 7 個（`#ffccd3` `#ffedcc` `#fffacc` `#ffccee` `#eeccff` `#b3ffb1` `#cce2ff`）は淡色のマーカー。** `uniqueBackgrounds` には出てこなかったので、このページでは使われていない。宣言はあるが未使用の色として扱うこと
- **影と角丸は CSS 上すべて `rem` で書かれている。** `0 .3rem .9rem` を「0 0.3rem 0.9rem」と読んで 1 桁間違えないこと（10px 基準なので 3px 9px）
- **`body` に `word-wrap: break-word` と `overflow-wrap: break-word` の両方が書いてある。** 前者は旧仕様のエイリアスで、新規実装では `overflow-wrap` だけでよい
