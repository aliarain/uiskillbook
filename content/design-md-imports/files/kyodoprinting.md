# DESIGN.md — 共同印刷 / TOMOWEL（Kyodo Printing）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-07 / 対象: `https://www.kyodoprinting.co.jp/`, `/company-profile/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **234 個の CSS 変数で組まれた本格的なデザインシステム。** 色は 9 段スケール、余白は Tailwind 風の `--space-*`、文字サイズは全段が `clamp()` の流体。値を直書きしないことが前提になっている
- **密度**: 中。角丸 10px の白いカードを `rgba(0,0,0,0.12) 0 4px 24px` の柔らかい影で浮かせ、ベージュ `#f8f6f1` の地に並べる
- **キーワード**: 234 トークン、全段 clamp、字間ゼロ、既定ウェイト 500、マゼンタ `#df003a`

**このサイトの核心は4つある。**

1. **`letter-spacing` を一切触らない。** 実測で可視 173 要素中 **170 要素が `normal`**（下層は 55/55 ＝ 全部）。CSS 全文でも `letter-spacing` の宣言は `0.1em` / `0.2em` / `0.01em` / `0.4em` の 4 つしかなく、**本文には 1 つも当たっていない**。例外は部門名の 3 要素（24px に `0.1em` ＝ `2.4px`）だけ
2. **本文の既定ウェイトが `500`（Medium）。** `body { font-weight: var(--font-medium) }` で、実測 **可視 133 要素が 500**。400 はフッターのリンク 6 要素だけ。**Noto Sans JP の 400 / 500 / 700 を Google Fonts から読み込んでいる**ので、500 は合成ではなく実体
3. **文字サイズが全段 `clamp()` の流体。** `html` は 16px 固定だが **`body` 自体が `--text-md: clamp(0.875rem, 0.818rem + 0.24vw, 1rem)`**。4 幅で測ると `1440px → 16px` / `1200px → 15.968px` / `834px → 15.0896px` / `375px → 14px` と連続的に動く。**px で書き写すとブレークポイント間で別物になる**
4. **書体は和文・欧文・数字の 3 本立て。** `--font-sans-serif`（Noto Sans JP・160 要素）/ `--font-en`（Lato・7 要素）/ `--font-num`（Roboto・6 要素）。**数字専用に Roboto を持っている**のが珍しく、業績ハイライトの `99.9` `100.0` `27.3` が 54px の Roboto で組まれる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **TOMOWEL Magenta** | **`#df003a`** (`--color-main` / `--color-main-50` / `--color-link`) | **可視 21 要素（トップ）/ 10 要素（下層）**。ロゴ、タブの選択状態、リンク、カルーセルの矢印、ナビの現在地 |
| Magenta Dark | `#b2002e` (`--color-main-60` / `--color-danger`) | ホバー・危険表示 |
| Magenta Pale | `#f9e9e9` (`--color-bg-service`) | ナビの `製品・サービス` ボタンの面 |

**色はすべて 9 段スケール（`-10` が最淡 → `-90` が最濃）で定義されている。**

```
--color-main-10 #ffeaef / -20 #fbcfda / -30 #f494ac / -40 #f1547d / -50 #df003a（= --color-main）
--color-main-60 #b2002e / -70 #8e0025 / -80 #580017 / -90 #37000e
```

### Semantic（意味的な色）

- **Danger** (`#b00000`, `--color-danger`) / **Danger Light** (`#f4d7d7`)
- **Link** (`#df003a`, `--color-link`) — **リンク色＝ブランド色**

### ESG セクションの 3 色

サステナビリティの E / S / G を色で分ける。**テキスト色は `-80`、地色は `-10` を使う**。

| 区分 | テキスト | 地色 | トークン |
|------|----------|------|----------|
| **Environment** | `#57730a` | `#f3f9e4` | `--color-green-80` / `--color-green-10` |
| **Social** | `#af4783` | `#fceef6` | `--color-pink-70` / `--color-pink-10` |
| **Governance** | `#1a6394` | `#d8e9f5` | `--color-blue-80` / `--color-blue-10` |

### 事業部門の色

| 部門 | 実装値 | トークン |
|------|--------|----------|
| 情報コミュニケーション | `#dc81b6` | `--color-information_communication-pink` |
| 情報セキュリティ | `#5da9dd` | `--color-information_security-blue` |
| 生活・産業資材（LANDI） | `#a7ce38` | `--color-landi-green` |
| その他 | `#f9a51b` | `--color-others-yellow` |

### Neutral（ニュートラル）

| 役割 | 実装値 | トークン | 実測 |
|------|--------|----------|------|
| **Text Primary** | **`#333333`** | `--color-type` / `--color-gray-90` | **可視 97 要素** |
| **Tag BG** | `#4d4d4d` | `--color-gray-80` | **可視 41 要素の面**。ニュースのカテゴリタグ |
| **Gray** | `#595757` | `--color-gray` / `--color-border-dark` | 補助テキスト（2 要素） |
| **Border** | `#d9d9d9` | `--color-border` / `--color-gray-20` | ボタン・タブの枠（可視 7 要素） |
| **Background** | `#f6f6f6` | `--color-bg` / `--color-gray-10` | **下層のページ背景**（根拠 `viewportTopBySample 3/6`） |
| **News Cream** | **`#f8f6f1`** | `--color-bg-news` / `--color-sub-cream-20` | **トップのページ背景**（根拠 `viewportTopBySample 3/5`）。ニュース帯の地 |

> **トップと下層で地色が違う。** トップは **`#f8f6f1`**（クリーム）、下層は **`#f6f6f6`**（グレー）。どちらもトークン化されている。

### 宣言はあるが使われていない色

**`--color-sub-red` / `--color-sub-cream` / `--color-sub-blue` / `--color-sub-yellow` の 4 系統（各 10 段・計 40 個）は、`-20` のクリームを除いて可視 0 要素。** 「サブカラーが 4 色ある」と読まず、**実装に出ているのはマゼンタと ESG・部門色だけ**と理解すること。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**（Google Fonts・**400 / 500 / 700 の 3 ウェイトが `loaded`**）。実測 可視 160 要素
- **明朝体**: `--font-serif` に游明朝のスタックが宣言されているが、**DOM 全走査で可視 0 要素**

```css
/* 宣言はあるが、実測で 1 要素も使われていない */
--font-serif: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", serif;
```

### 3.2 欧文フォント

- **サンセリフ**: **Lato**（400 / 700 が `loaded`・可視 7 要素）。セクションの欧文見出し（`News Release` `Topics` `Business Introduction`）とコピーライト
- **数字**: **Roboto**（500 が `loaded`・可視 6 要素）。**業績ハイライトの数値専用**（54px）

> **`koharu` という `@font-face` が 1 件宣言されているが `unloaded` で、可視 0 要素。** 使われていない。

### 3.3 font-family 指定

```css
--font-sans-serif: "Noto Sans JP", sans-serif;   /* 既定。可視 160 要素 */
--font-en:         "Lato", sans-serif;            /* 欧文見出し。可視 7 要素 */
--font-num:        "Roboto", sans-serif;          /* 数値。可視 6 要素 */
--font-serif:      "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", serif;  /* 可視 0 */

body { font-family: var(--font-sans-serif); }
```

**フォールバックの考え方**:
- **Web フォント ＋ generic family の最小チェーン。** OS ローカル書体の書き分けはしない
- `--font-serif` だけが OS ローカル書体のチェーンを持つが、**実装では使われていない**

### 3.4 文字サイズ・ウェイト階層

**サイズはすべて `clamp()` のトークン。** 4 幅での実測値を併記する（**px 直書きではなくトークンを使うこと**）。

| Token | clamp 式 | 1440px | 1200px | 834px | 375px |
|-------|----------|--------|--------|-------|-------|
| `--text-2xs` | `clamp(0.625rem, 0.568rem + 0.24vw, 0.75rem)` | 12px | 11.97px | 11.09px | **10px** |
| `--text-xs` | `clamp(0.75rem, 0.693rem + 0.24vw, 0.875rem)` | 14px | 13.97px | 13.09px | **12px** |
| `--text-sm` | `clamp(0.813rem, 0.756rem + 0.24vw, 0.938rem)` | 15.01px | 14.98px | 14.10px | **13.01px** |
| **`--text-md`** | `clamp(0.875rem, 0.818rem + 0.24vw, 1rem)` | **16px** | **15.97px** | **15.09px** | **14px** |
| `--text-lg` | `clamp(1rem, 0.943rem + 0.24vw, 1.125rem)` | 18px | 17.97px | 17.09px | 16px |
| `--text-xl` | `clamp(1.063rem, 0.977rem + 0.36vw, 1.25rem)` | 20px | 19.95px | 18.63px | 17.01px |
| `--text-2xl` | `clamp(1.125rem, 0.955rem + 0.73vw, 1.5rem)` | 24px | 24px | 21.37px | 18.02px |
| `--text-3xl` | `clamp(1.25rem, 0.966rem + 1.21vw, 1.875rem)` | **30px** | 29.98px | 25.55px | 20px |
| `--text-4xl` | `clamp(1.375rem, 0.977rem + 1.7vw, 2.25rem)` | 36px | 36px | 29.81px | 22.01px |
| `--text-5xl` | `clamp(1.625rem, 1.17rem + 1.94vw, 2.625rem)` | 42px | 42px | 34.90px | 26px |

| Role | Token | 1440px 実測 | Weight | Line Height | Letter Spacing |
|------|-------|-------------|--------|-------------|----------------|
| **Section Heading** | `--text-3xl` | **30px** | **700** | **48px（1.60）** | `normal` |
| Page Title（下層） | `--text-4xl` | 42px | 700 | — | `normal` |
| **Stat Number** | — | **54px** | 500 | 64.8px（1.20） | `normal` / **Roboto** |
| **Department Name** | — | **24px** | 500 | — | **2.4px = 0.1em** |
| Sub Heading | `--text-lg` | 18px | 500〜700 | 28.8px（1.60） | `normal` |
| **Body** | **`--text-md`** | **16px** | **500** | **25.6px（1.60）** | **`normal`** |
| Card Title | `--text-md` | 16px | 700 | 25.6px（1.60） | `normal` |
| UI / Nav | `--text-xs` | 14px | 500 | 19.6px（1.40） | `normal` |
| **Tag** | `--text-2xs` | **12px** | 500 | — | `normal` |

> **ウェイトは 400 / 500 / 700 の 3 段**（トークンは `--font-normal: 400` / `--font-medium: 500` / `--font-bold: 700`）。実測は 500 が 133 要素、700 が 33、400 が 6。**600 は存在しない**。

### 3.5 行間・字間

**行間もトークン化されている。**

```css
--line-height-xs: 1.4;   /* ナビ・UI。実測 28 要素 */
--line-height-sm: 1.5;   /* カードのタイトル。実測 16 要素 */
--line-height-md: 1.6;   /* 既定。本文・セクション見出し。実測 56 要素（最多） */
--line-height-lg: 1.8;   /* 読み物の本文。実測 40 要素 */
--line-height-xl: 2.2;   /* 宣言のみ・実測 0 要素 */
```

- **本文の行間は `1.6`**（`--line-height-md`）。**読み物のリード・説明文は `1.8`**（`--line-height-lg`）
- **セクション見出しも `1.6`**。見出しだけ詰める設計ではない
- **字間は `normal` が既定**（可視 170/173 要素）。**日本語本文に `letter-spacing` を足さない**

**ガイドライン**:
- **`letter-spacing` を書かない。** このサイトは Noto Sans JP の素の字送りをそのまま使う
- **字間を空けるのは「部門名」のような見出しラベルだけ**（24px に `0.1em`）
- **行間は 5 段のトークンから選ぶ。** 1.4（UI）/ 1.5（カード）/ 1.6（本文・見出し）/ 1.8（読み物）
- **`--line-height-xl: 2.2` は実装で使われていない。** 「このサイトは行間 2.2 を使う」と読まないこと

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの宣言 */
word-break: break-all;    /* 一部のブロック */
word-break: break-word;
word-break: keep-all;
html { line-break: normal; text-rendering: optimizelegibility; }
body { text-rendering: optimizespeed; }
```

- **`html` に `text-rendering: optimizelegibility`、`body` に `optimizespeed` を重ねて書いている**（後勝ちで `body` の `optimizespeed` が効く）。**実サイトはこうだが、意図としては `optimizeLegibility` を残したかったはず**
- `html { text-underline-offset: 0.07em }` — **下線をベースラインからわずかに離す**。日本語の下付き文字にかからないようにする配慮

### 3.7 OpenType 機能

**`font-feature-settings` は 1 要素も使っていない**（実測 0 件・CSS 全文でも宣言なし）。

- **`palt` を足さないこと。** 字間を `normal` に保つのと同じ思想で、Noto Sans JP の既定の字送りで組む

### 3.8 縦書き

**該当なし**（`writing-mode: vertical-*` は 0 要素）。

---

## 4. Component Stylings

### Buttons

**Main（白＋枠＋ピル・最も多い CTA）**
- Background: `#ffffff`
- Text: `#333333`
- Border: **`1px solid #d9d9d9`**
- Padding: **`14px 20px`**
- Border Radius: **`40px`**
- Font: `--text-md`（16px）/ **weight 500** / letter-spacing `normal`
- Shadow: **`rgba(0,0,0,0.16) 0 0 8px`**（`--shadow-m` ＝ `u-shadow-m` を付けたときだけ）

**Tab（選択 / 非選択）**

| 状態 | 背景 | 文字 | 枠 | Radius | Padding |
|------|------|------|----|--------|---------|
| **選択** | **`#df003a`** | `#ffffff` | `1px solid #df003a` | **`60px`** | `7px 18px` |
| 非選択 | `#ffffff` | **`#df003a`** | `1px solid #d9d9d9` | `60px` | `7px 18px` |

Font: `--text-xs`（14px）/ weight 500

**Nav Pill（`製品・サービス`）**
- Background: **`#f9e9e9`** / Text: **`#df003a`**
- Border: **`2px solid #f9e9e9`**（地色と同色の 2px 枠）
- Padding: `4px 14px` / Border Radius: **`40px`**
- Font: 14px / weight 500

**Carousel Arrow**
- Background: `transparent` / Text: `#df003a`
- Border: **`2px solid #df003a`** / Border Radius: **`50%`**

**Contact（ヘッダー右上）**
- Background: **`#f8f6f1`** / Text: `#333333`
- Border Radius: **`0 0 10px`**（左下だけ角丸を落とした変則）
- Padding: `0 17px` / Font: 16px / weight 500

**Page Top**
- Background: `#333333` / Text: `#ffffff` / Border Radius: `50%`
- Shadow: `rgba(0,0,0,0.12) 0 0 6px`（`--shadow-s`）

### Tags

- Background: **`#4d4d4d`**（`--color-gray-80`）/ Text: `#ffffff`
- Font: `--text-2xs`（12px）/ weight 500 / letter-spacing `normal`
- Padding: `2px`（カード内）/ `3px 8px`（単体）
- Border Radius: **`3px`**（`--r-s`）

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: **`10px`**（`--r-l`。実測 34 要素で最多）
- Padding: `30px 53px 30px 35px`（企業情報カード）
- Shadow: **`rgba(0,0,0,0.12) 0 4px 24px`**（`--shadow-l`・11 要素）

### Radius トークン

```css
--r-s: 3px;    /* タグ */
--r-m: 6px;    /* 宣言のみ・実測 0 */
--r-l: 10px;   /* カード（34 要素） */
```

**ピル（`40px` / `60px`）と円（`50%`）はトークン外の直書き。**

---

## 5. Layout Principles

### Spacing Scale

**Tailwind 風の `--space-*` が 34 段**（`--space-1` = 4px の 4px グリッド）。

| Token | Value | | Token | Value |
|-------|-------|---|-------|-------|
| `--space-px` | 1px | | `--space-8` | 32px |
| `--space-0.5` | 2px | | `--space-10` | 40px |
| `--space-1` | 4px | | `--space-12` | 48px |
| `--space-2` | 8px | | `--space-16` | 64px |
| `--space-3` | 12px | | `--space-20` | 80px |
| `--space-4` | 16px | | `--space-24` | 96px |
| `--space-5` | 20px | | `--space-32` | 128px |
| `--space-6` | 24px | | `--space-48` | 192px |

（以降 `--space-96` = 384px まで。**値は常に「トークン番号 × 4px」**）

**px の別名トークンも 22 段ある**（`--10px: 0.625rem` 〜 `--60px: 3.75rem`）。**`rem` を px の名前で引けるようにしたもの**で、`html` は 16px 固定なので `--16px` = `1rem` = 16px。

### Container

- **Max Width: 1200px**（実測 3 要素で最多）
- サブの幅: **1280px**（全幅寄りのブロック）、**782px**（本文カラム）、**412px**（カード）

### Grid

- `gap: 40px`（`--space-10`）
- トップのニュースは 3 カラムのカード、企業情報は 2 カラム

### レイアウト用の計算トークン

```css
--header-height: 80px;
--contentfull-margin:  calc((100vw - 100% - 0px) / 2 * -1);  /* 全幅ブロックの負マージン */
--contentfull-padding: calc((100vw - 100% - 0px) / 2);
--ease: cubic-bezier(0.215, 0.61, 0.355, 1);
--opacity: 0.75;   /* ホバー時 */
--scale: 1.03;     /* ホバー時の拡大 */
--move: 4px;       /* ホバー時の移動量 */
```

---

## 6. Depth & Elevation

| Level | Token | Shadow | 用途 | 実測 |
|-------|-------|--------|------|------|
| 1 | `--shadow-s` | `0 0 6px rgba(0,0,0,.12)` | ページトップボタン | 1 要素 |
| 2 | `--shadow-m` | `0 0 8px rgba(0,0,0,.16)` | CTA ボタン | 1 要素 |
| 3 | **`--shadow-l`** | **`0 4px 24px rgba(0,0,0,.12)`** | **カード** | **11 要素** |

> **影は 3 段のトークンで管理されている。** `--shadow-s` と `--shadow-m` は **y オフセット 0 の全方向の影**、`--shadow-l` だけ **y に 4px 落ちる**。カードを浮かせるのが `--shadow-l`、ボタンの縁取りが `--shadow-s` / `--shadow-m`、という使い分け。
> 検出される 4 つ目の `rgba(0,0,0,0.15) 0 0 2px, rgba(0,0,0,0.3) 0 2px 10px` は **Cookie 同意バー（trust360）**のもの。

---

## 7. Do's and Don'ts

### Do（推奨）

- **値を直書きせず 234 個のトークンを使う。** 色は 9 段（`-10`〜`-90`）、余白は `--space-*`、サイズは `--text-*`、行間は `--line-height-*`、角丸は `--r-*`、影は `--shadow-*`
- **文字サイズは `clamp()` のトークンで書く。** `font-size: 16px` ではなく `font-size: var(--text-md)`
- **`letter-spacing` を書かない**（既定は `normal`）。空けるのは部門名のような見出しラベルだけ（`0.1em`）
- **本文の既定ウェイトは `500`**（`--font-medium`）。400 ではない
- **行間は 1.6（本文・見出し）/ 1.8（読み物）/ 1.4（UI）/ 1.5（カード）**
- 書体は **Noto Sans JP（和文・既定）/ Lato（欧文見出し）/ Roboto（数値）**の 3 本立て
- **数値の強調は Roboto**（業績ハイライトの 54px）
- ブランド色は **`#df003a`**、本文色は **`#333333`**
- カードは **radius 10px ＋ `--shadow-l`**、CTA は **radius 40px のピル**、タブは **60px**
- ESG は **テキスト `-80` ／ 地色 `-10`** の組で色分けする
- 地色はトップが **`#f8f6f1`**、下層が **`#f6f6f6`**

### Don't（禁止）

- **`font-size` を px で直書きしない。** 全段が `clamp()` なので、834px 幅では 16px が **15.09px** になる。px に固定すると他の要素と段差が出る
- **`font-feature-settings: "palt"` を足さない**（実サイトは 0 要素）
- **本文に `letter-spacing` を足さない**（可視 170/173 要素が `normal`）
- **`font-weight: 400` を本文の既定にしない**（実サイトは 500）。**600 は使わない**（トークンに無い）
- **`--line-height-xl: 2.2` を使わない**（宣言のみ・実装 0 要素）
- **游明朝（`--font-serif`）を前提に組まない**（宣言はあるが可視 0 要素）
- **`koharu` を参照しない**（`unloaded`・可視 0 要素）
- **サブカラー（`--color-sub-red` / `-blue` / `-yellow`）を使わない**（クリームの `-20` 以外は可視 0 要素）
- **`--r-m: 6px` を使わない**（実測 0 要素。角丸は 3px / 10px / 40px / 60px / 50%）
- 本文色を `#000000` にしない（実サイトは `#333333`）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル |
| Small | ≥ 576px | 小型タブレット |
| Tablet | ≥ 768px / ≤ 1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |
| Desktop Narrow | 1024px〜1199px | コンテナ 1200px に満たない幅 |

- **`only screen and ...` を明示する記法**

### 文字サイズは全段が流体

- **`html` は 16px 固定だが `body` が `--text-md` の `clamp()`**。4 幅の実測は `1440px → 16px` / `1200px → 15.968px` / `834px → 15.0896px` / `375px → 14px`
- **ブレークポイントで段階的に切り替わるのではなく、`vw` で連続的に動く**。メディアクエリで `font-size` を上書きする必要がない
- 行間は `--line-height-*` の比率なので、サイズに追従して自動で広がる

### タッチターゲット

- Main ボタン（`padding: 14px 20px` ＋ 16px / lh 1.6）で高さ 約 54px — 44px を満たす
- **タブ（`padding: 7px 18px` ＋ 14px / lh 1.4）は高さ 約 34px** で下回る。モバイルでは上下の padding を増やすこと

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand:       #df003a（--color-main / --color-link）
Text:        #333333（--color-type）
Tag BG:      #4d4d4d（--color-gray-80）
Border:      #d9d9d9（--color-border）
Background:  #f8f6f1（トップ）/ #f6f6f6（下層）
Font (JP):  var(--font-sans-serif) = "Noto Sans JP", sans-serif
Font (EN):  var(--font-en)         = "Lato", sans-serif
Font (Num): var(--font-num)        = "Roboto", sans-serif
Body: font-size: var(--text-md)  /* clamp(0.875rem, 0.818rem + 0.24vw, 1rem) = 14〜16px */
      font-weight: var(--font-medium)  /* 500 */
      line-height: var(--line-height-md)  /* 1.6 */
Letter Spacing: normal（本文には書かない）
font-feature-settings: 使わない
Radius: --r-s 3px（タグ）/ --r-l 10px（カード）/ 40px・60px（ピル）
Shadow: --shadow-l 0 4px 24px rgba(0,0,0,.12)（カード）
Space:  --space-N = N × 4px
Container: 1200px / 本文カラム 782px
```

### プロンプト例

```
共同印刷（TOMOWEL）のデザインシステムに従って、ニュース一覧ページを作成してください。
- :root に下記のトークンを定義し、値を直書きしない
  --font-sans-serif: "Noto Sans JP", sans-serif / --font-en: "Lato", sans-serif /
  --font-num: "Roboto", sans-serif
  --text-md: clamp(0.875rem, 0.818rem + 0.24vw, 1rem)
  --text-3xl: clamp(1.25rem, 0.966rem + 1.21vw, 1.875rem)
  --line-height-xs: 1.4 / --line-height-sm: 1.5 / --line-height-md: 1.6 / --line-height-lg: 1.8
  --color-main: #df003a / --color-type: #333333 / --color-gray-80: #4d4d4d /
  --color-border: #d9d9d9 / --color-bg-news: #f8f6f1
  --r-s: 3px / --r-l: 10px / --shadow-l: 0 4px 24px rgba(0,0,0,.12) / --space-N は N×4px
- body { font-family: var(--font-sans-serif); font-size: var(--text-md);
         font-weight: var(--font-medium); line-height: var(--line-height-md); color: var(--color-type) }
- letter-spacing は書かない。font-feature-settings も使わない
- セクション見出しは font-size: var(--text-3xl) / weight 700 / line-height 1.6。
  欧文の見出し（News Release など）だけ var(--font-en)
- 数値の強調は var(--font-num) / 54px / weight 500 / line-height 1.2
- カードは background #ffffff / border-radius var(--r-l) / box-shadow var(--shadow-l) / 枠線なし
- タグは background var(--color-gray-80) / 白文字 / 12px / border-radius var(--r-s)
- タブの選択状態は background var(--color-main) / 白文字 / border-radius 60px / padding 7px 18px、
  非選択は白地 / 文字 var(--color-main) / 1px solid var(--color-border)
- CTA は白地 / 1px solid var(--color-border) / border-radius 40px / padding 14px 20px
- ページ背景は var(--color-bg-news)、コンテナ幅は 1200px、グリッドの gap は 40px
```
