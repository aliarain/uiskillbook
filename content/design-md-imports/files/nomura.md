# DESIGN.md — 野村證券（NOMURA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-27 / 対象: `https://www.nomura.co.jp/`, `https://www.nomura.co.jp/solution/inheritance/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウェルス・マネジメントのコーポレートサイト。見出しとリードを **Noto Serif JP の明朝**、本文と表を **Noto Sans JP のゴシック**、飾りの英字を **Marcellus** で組む三層構成。角丸は 1 つも使わない
- **密度**: 低〜中。本文 18px / 行間 1.8 で広く取り、表組みは 16px / 1.8 で詰める
- **キーワード**: `rem` を 100px にする、角丸ゼロ、明朝の見出し、可変フォントの 400–600、字間ゼロ

**このサイトの核心は5つある。**

1. **`html { font-size: 100px }`。** `rem` がピクセルの 100 倍になるので、CSS には `font-size: 0.16rem`（= 16px）、`1.6rem`（= 160px）、`1.92rem`（= 192px）と書かれる。**小数点を 2 つずらすだけで px が読める**という設計。8 幅（1440 / 1280 / 1200 / 1024 / 834 / 768 / 767 / 375px）すべてで固定
2. **`body { line-height: 1 }`。** 無単位の 1 が全子孫に降りる。比率 1.00 が可視 43 要素（トップ）/ 14 要素（下層）に出ており、**自分で宣言し直した要素だけが読める行になる**（最多は 1.80 の 168 / 514 要素）
3. **太字が 700 では出ない。** Google Fonts の可変軸が **`Noto Sans JP: 400 600` / `Noto Serif JP: 400 500`**。`font-weight: 700` を指定すると軸の上限で止まり、**600 と同じ字幅になる**
4. **角丸が 1 つも無い。** `border-radius` の実測は 2 ページとも **0 種**。ボタン・バッジ・カード・表、すべて直角
5. **ヒーローの明朝コピーはテキストではない。** 「変化を読み、あなたの未来を共に創る。」は `innerText` に存在せず、`img._img-liquid`（`img_main.webp` 1440×744px）の `alt` にだけある。**字空けした明朝に見えるが画像**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **NOMURA Red** | **`#CA2420`** | 文字 3 要素（トップ）/ **134 要素（下層）**・面 2 要素。**強調語・チェックマーク・数値の訴求、ヘッダーの `ログイン` ボタン** |
| **Login Red** | `#E00000` | 面 1 要素。サイドの `ログイン` ボタンだけ。**上の赤とは別の値** |
| **Deep Navy** | `#002C78` | 面 2 要素。`ノムラFX ログイン` ボタン |
| **Darkest Navy** | `#001338` | 面 7 要素（下層）。手順ステップの番号面 |

> **赤が 2 つある。** `#CA2420`（可視が圧倒的に多い本来のブランド赤）と `#E00000`（ログインボタン 1 個だけ）。**新規実装では `#CA2420`** を使う。

### Neutral（ニュートラル）

- **Text Primary** (`#222222`): 本文・表のセル。**可視 58 要素（トップ）/ 334 要素（下層）で最多**
- **Text UI Navy** (`#42425A`): **ナビ・パンくず・ボタンの文字・見出しの既定色**。可視 165 要素（トップ）/ 78 要素（下層）。純黒でも純紺でもない紫みの濃紺で、このサイトの「文字の顔」
- **Text Muted** (`#666666`): 注記・免責（可視 18 要素）
- **Link** (`#013399`): スキップリンクとテキストリンク（可視 1〜3 要素）
- **Text on Dark** (`#FFFFFF`): 紺面・赤面・表ヘッダの上（可視 58〜63 要素）
- **Divider / Tag** (`#E3E3E3`): 罫線と `IPO` / `債券` などのタグ面（面 39 要素でトップ最多）
- **Table Head** (`#777C90`): 表のヘッダ面（可視 16 要素）。**`#42425A` より明るい別の紺**
- **Label Gray** (`#595959`): 人物ラベルの面
- **Surface** (`#F8F8F8`): セクション帯 / **`#F4F4F4`**: 表の偶数セル（面 144 要素で下層最多） / **`#F4F6F8`**: 表の見出しセル / **`#F0F0F0`**: フッター上のリンク面
- **Surface Tint** (`#E4EAF4`): 紹介ブロックの面 / **`#FFF2E6`**: 減額を示すセルの面
- **Footer** (`#1C1C1C`): フッターの面（可視 3 要素）
- **Background** (`#FFFFFF`): ページ背景（`body` 由来。トップは `heroCovered: true` でヒーロー画像が全面を覆うが、**コンテンツの地色は白**）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・UI・表）**: **Noto Sans JP**（Google Fonts の可変フォント、軸 **`400 600`**）。実測 265 要素（トップ）/ 584 要素（下層）
- **明朝体（見出し・リード）**: **Noto Serif JP**（可変フォント、軸 **`400 500`**）。実測 13 要素（トップ）/ 39 要素（下層）。`h1` / `h2` / `h3` / `h4` とリード文がすべてこちら

### 3.2 欧文フォント

- **Marcellus**（400・Google Fonts）: 飾りの英字だけ。実測 6 要素（トップ）/ 7 要素（下層）
  - **大（160px / weight 500 / 白）**: `WEALTH MANAGEMENT`。濃い面の上にしか置かれない
  - **中（50px / 400 / 白 / `letter-spacing: 3px`）**: `Solutions`、`関連記事`（28px）
  - **小（20px / 500 / `#222222`）**: `News` / `New Products` のセクションラベル
  - `View more` は 17px / 400 / 白
- 本文中の英数字は Noto Sans JP の欧文グリフ

### 3.3 font-family 指定

```css
/* 本文・UI（body に 1 回） */
body {
  font-family: "Noto Sans JP", CompatilLetterLTCERegular, Arial, メイリオ, Meiryo,
               "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック",
               Helvetica, Verdana, sans-serif;
  line-height: 1;        /* ★無単位。全子孫に降りる */
  font-size: 0.16rem;    /* ★= 16px（html が 100px） */
}

/* 見出し・リード */
h1, h2, h3, h4, .lead { font-family: "Noto Serif JP", serif; }

/* 飾りの英字 */
.en-label { font-family: Marcellus; }
```

**スタックの 2 番目 `CompatilLetterLTCERegular` は死んだ名前。** CSS 全文の `@font-face` は `swiper-icons` と `ns-icon-font`（どちらもアイコン）の **2 件だけ**で、この名前の宣言もフォント要求も無い。OS にも入っていないので必ず外れる。**実サイトはこう書いているが、新規実装では省いてよい。**

### 3.4 文字サイズ・ウェイト階層

**`html { font-size: 100px }` → `rem` × 100 = px。** 8 幅すべてで固定。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| Decorative EN (大) | Marcellus | **160px**（`1.6rem`） | 500 | 160px (1.0) | normal | `WEALTH MANAGEMENT`。**白文字・濃い面の上**。下層は **192px**（`1.92rem`） |
| Decorative EN (中) | Marcellus | 50px | 400 | 50px (1.0) | **3px** | `Solutions`。白文字。`関連記事` は 28px / 字間 3px |
| Section Label (EN) | Marcellus | 20px | 500 | 32.8px (1.64) | normal | `News` / `New Products`。**`#222222`** |
| Page Title (h1) | Noto Serif JP | 50px | 500 | 90px (**1.8**) | normal | 下層の `h1` |
| Section (h2) | Noto Serif JP | 40px / 32px | 500 | 1.32 / 1.8 | normal | `新商品情報 New Products` ほか |
| Heading (h3) | Noto Serif JP | 25px / 22px | 500 | 45px (1.8) | normal | 商品名・コラム見出し |
| Heading (h4) | Noto Serif JP | 22px | 500 | 39.6px (1.8) | normal | `家族信託` ほか |
| Lead | Noto Serif JP | 22px / 20px | 400 | 1.8 | normal | ヒーロー下のリード |
| Body | Noto Sans JP | **18px** | 400 | 32.4px (**1.8**) | normal | 下層本文 42 要素 |
| Body / Table | Noto Sans JP | **16px** | 400 / 600 | 28.8px (**1.8**) | normal | **可視 180 / 510 要素で最多** |
| Card Title | Noto Sans JP | 26px | 600 | 1.49 | normal | バナーカードの見出し（21 要素） |
| Caption / Tag | Noto Sans JP | 14px | 400 / 600 | 25.2px (1.8) | normal | パンくず・タグ |
| Small | Noto Sans JP | 12px | 600 | 1.8 | normal | 人物ラベル |

**ウェイトは 400 / 500 / 600 の 3 段。** 実測（隠し div の字幅）:

| 指定 | 字幅 | 出る面 |
|------|------|--------|
| 100 / 200 / 300 / **400** | **576.53px** | Regular |
| **500** | **581.69px** | 中太（軸の中間） |
| **600** / 700 / 800 / 900 | **585.03px** | 軸の上限（600） |

→ **`font-weight: 700` は 600 で出る。** 可変軸が `400 600` なので、それ以上を指定しても上限で止まり、合成太字も起きない。分布も 400（216 / 497）・600（60 / 104）・500（10 / 29）の 3 つだけ。

> **明朝（Noto Serif JP）の軸は `400 500`。** 見出しはすべて 500 で、**600 以上は存在しない**。

### 3.5 行間・字間

- **`body { line-height: 1 }` は無単位。** 絶対値 px なら大きな見出しの比率が 1 未満になるが、実測に 1 未満は 1 件も無く、比率 1.00 が 43 / 14 要素に出る
- **行間の実測分布**

| 比率 | トップ | 下層 | どこ |
|------|--------|------|------|
| **1.80** | 168 | **514** | **本文・表・見出しのほぼ全部** |
| 1.00 | 43 | 14 | `body` からの継承がそのまま出ている要素 |
| 1.60 | 27 | 35 | ヘッダーのメニュー |
| 1.71 / 1.91 / 2.00 | 10 / 5 / 5 | 48 / — / — | 表の一部・日付 |
| 1.49 | 21 | — | カード見出し |

- **字間はゼロ。** 可視 281/284 要素（トップ）・629/630 要素（下層）が `normal`。CSS 全文の `letter-spacing` 宣言も **6 種類しかない**（`0px` / `1px` / `3px` / `0.1em` / `-0.4em` / `normal`）
  - `3px`（トップ）と `19.2px`（下層・`0.192rem`）は **`Solutions` の英字ラベル**
  - `1px` は外部チャットウィジェット
  - **`-0.4em` は `inline-block` の隙間潰しのハック**で、組版の字間ではない

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの宣言 */
word-break: break-all;             /* 既定 */
word-break: break-all !important;  /* 上書き用 */
word-break: keep-all !important;   /* 熟語を割らせたくない箇所 */
word-break: normal !important;     /* 戻す */
```

`break-all` を既定にして、割られたくない箇所を `keep-all !important` で戻す運用。**日本語では `break-all` と `normal` の見た目はほぼ変わらない**（CJK は既定でどこでも折れる）ので、差が出るのは欧文の単語が行末に掛かったときだけ。

### 3.7 OpenType 機能

**`font-feature-settings` の宣言は CSS 全文で 0 件。可視要素も 0。約物は詰めない。**

実測では Noto Sans JP に `palt` を当てると 700px → **561.64px**（−19.8%）になるので、**書体は対応しているが使っていない**。再現するときも足さないこと。

### 3.8 縦書き

**使っていない。**

`writing-mode: vertical-rl` が 2 要素出るが、**どちらも外部チャットウィジェット**（`お困りですか？` / `お困りですか？チャットでご案内します`、20px / 18px、`letter-spacing: 1px`）。サイト本体の組版ではないので、**縦組みを実装しないこと**。

---

## 4. Component Stylings

### Buttons

**すべて `border-radius: 0`。** 角丸は 2 ページを通して 1 つも無い。

**Primary（赤・ヘッダー）**
- Background: `#CA2420` / Text: `#FFFFFF`
- Font: 16px / weight 400
- Padding: `0 10px` / Radius: `0`

**Primary（紺）** — `ノムラFX ログイン`
- Background: `#002C78` / Text: `#FFFFFF`
- Font: 18px / weight 400 / line-height 28.8px
- Padding: `10px` / Radius: `0` / Border: `1px solid transparent`
- Shadow: `rgba(0,0,0,0.1) 0 2px 8px`

**Secondary（白・枠線）** — `よくあるご質問` / `お手続き` / `口座開設` / `取扱商品`
- Background: `#FFFFFF` / Text: `#42425A`
- Border: `1px solid #42425A` / Radius: `0`
- Font: 16px / weight 400 / Padding: `10px`
- Shadow: `rgba(0,0,0,0.1) 0 2px 8px`

**Search**
- Background: `#42425A` / Text: `#FFFFFF` / 14px / Padding `0` / Radius `0`

### Tags / Labels

- **グレータグ**（`IPO` / `債券`）: 面 `#E3E3E3` / 文字 `#42425A` / 14px / weight 600 / Padding `10px 15px` / Radius `0`
- **人物ラベル**: 面 `#595959` / 白文字 / 12px / weight 600 / Padding `3px 10px`

### Tables（下層の主役）

- ヘッダ: 面 `#777C90` / 白文字 / 16〜18px / weight 600 / Padding `15px 20px`
- 見出しセル: 面 `#F4F6F8` / 文字 `#222222` / weight 600 / Padding `10px`
- データセル: 面 `#F4F4F4`（144 要素）/ 文字 `#222222` / Padding `10px`
- Border: **`1px solid #E3E3E3`**（全セル）
- 強調数値は `#CA2420`

### Cards

- Background: `#FFFFFF` / Radius: `0`
- Shadow: `rgba(0,0,0,0.08) 0 3px 20px`（バナーカード）
- 枠線のカードは `box-shadow: inset 0 0 0 1px #E3E3E3`（**`border` ではなく inset の影で枠を描く**）

---

## 5. Layout Principles

### Spacing Scale

`rem` を 100 倍で読む都合で、余白も `0.Nrem` 表記になる。px に直して使う。

| Token | Value |
|-------|-------|
| XS | `10px`（`0.1rem`） |
| S | `15px`（`0.15rem`） |
| M | `20px`（`0.2rem`） |
| L | `40px`（`0.4rem`） |
| XL | `80px`（`0.8rem`） |

### Container

| Max Width | 用途 |
|-----------|------|
| **`1220px`** | 本文コンテナ（6 要素）。**これが基準** |
| `1260px` | ヘッダー／フッターの外枠（5 要素） |

### Grid

- トップの CTA は 4 列（`よくあるご質問` / `お手続き` / `口座開設` / `取扱商品`）
- ヒーローは `img._img-liquid` 1440×744px がビューポートを覆う

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | 表・タグ・テキストリンク | — |
| 1 | `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px` | **ボタン**（Secondary / 紺） | 14 要素 / 24 要素 |
| 2 | `rgba(0, 0, 0, 0.08) 0px 3px 20px 0px` | **バナーカード・特集カード** | 21 要素 / 7 要素 |
| 枠 | `rgb(227, 227, 227) 0px 0px 0px 1px inset` | 枠線だけのカード | 5 要素 / 1 要素 |

> **影は 2 段だけ。** ボタンが浅く（`2px 8px` / α0.1）、カードが深い（`3px 20px` / α0.08）。**深いほうが薄い**のがこのサイトの特徴で、α を揃えないこと。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html { font-size: 100px }` を前提に読む。** `0.16rem` = 16px、`1.6rem` = 160px。CSS をそのまま写すときは必ずこの換算を通す
- **本文ブロックには必ず `line-height` を宣言する**（`body` の無単位 1 が降りて行が潰れる）。既定は **1.8**
- 見出し・リードは **Noto Serif JP の 500**、本文・表は **Noto Sans JP の 400 / 600**
- 飾りの英字だけ Marcellus
- **`border-radius: 0`。** ボタンも表もタグもカードも直角
- 文字色は本文 `#222222`、ナビ・ボタン・見出しの既定 `#42425A`、強調 `#CA2420`
- 表は `1px solid #E3E3E3`、ヘッダ面 `#777C90`、データ面 `#F4F4F4`
- 枠線だけのカードは `box-shadow: inset 0 0 0 1px #E3E3E3` で描く

### Don't（禁止）

- **`font-weight: 700` を使わない。** 可変軸が `400 600` なので 600 で出る。明朝は `400 500` なので 500 が上限
- **`letter-spacing` を足さない。** 可視要素のほぼ 100% が `normal`。`-0.4em` を組版の字間と読み違えない（`inline-block` の隙間潰し）
- **`font-feature-settings: "palt"` を足さない**
- **縦組みを実装しない。** `vertical-rl` の 2 要素は外部チャットウィジェット
- **ヒーローの明朝コピーを Web フォントで組み直さない。** 実サイトは画像（`img_main.webp`）
- `border-radius` を足さない
- `CompatilLetterLTCERegular` をスタックに書かない（`@font-face` もフォント要求も無い死んだ名前）
- 影の α を揃えない（ボタン 0.1 / カード 0.08）

---

## 8. Responsive Behavior

### Breakpoints

**崖は 767/768px の 1 箇所。** `html` は 8 幅すべてで 100px、`body` は 16px のまま動かない。

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 飾りの英字 160px → **44px**。本文・行間は変わらない |
| Desktop | ≥ 768px | 1220px コンテナ |

- `body { min-width: 320px }`。375px でも横スクロールは出ない
- 1024 / 834 / 768px のいずれもデスクトップ値のまま

### フォントサイズの調整

- ルートが固定なので **流体もクランプも無い**。モバイルで変わるのは飾りの英字だけで、**本文 16px / 行間 1.8 は全幅で共通**

### タッチターゲット

- Secondary ボタンの実高は `10px + 28.8px + 10px` ＝ 48.8px。44px 基準を満たす

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary (red):      #CA2420
Text Color:         #222222
Text UI Navy:       #42425A
Link:               #013399
Background:         #FFFFFF
Surface:            #F8F8F8 / #F4F4F4 / #F4F6F8
Divider / Tag:      #E3E3E3
Table Head:         #777C90
Footer:             #1C1C1C
Font (body):    "Noto Sans JP", Arial, メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3",
                "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック", Helvetica, Verdana, sans-serif
Font (heading): "Noto Serif JP", serif
Font (EN):      Marcellus
Root:  html { font-size: 100px }   ← rem × 100 = px
Body Size:   16px（記事本文 18px）
Line Height: 1.8（本文）/ 1（body 既定・無単位）
Weights:     400 / 500 / 600 のみ（700 は 600 で出る）
Letter Spacing: normal
font-feature-settings: 指定しない
Radius: 0（例外なし）
Shadow: ボタン rgba(0,0,0,.1) 0 2px 8px / カード rgba(0,0,0,.08) 0 3px 20px
Container: 1220px
Breakpoint: 767px
```

### プロンプト例

```
野村證券のデザインシステムに従って、相続税の試算テーブルを作成してください。
- html に font-size: 100px を置き、サイズは 0.16rem（=16px）形式で書く
- body に line-height: 1 を置き、表とセクションで line-height: 1.8 に上書きする
- 見出しは "Noto Serif JP" / weight 500、本文と表は "Noto Sans JP" / weight 400・600
- font-weight: 700 は使わない（可変軸が 400 600 なので 600 で出る）
- letter-spacing と font-feature-settings は書かない
- 表ヘッダは面 #777C90 / 白文字 / 16px / weight 600 / padding 15px 20px
- 見出しセルは #F4F6F8、データセルは #F4F4F4、全セルに 1px solid #E3E3E3
- 強調する数値は #CA2420、通常の文字は #222222
- border-radius は 0。カードは rgba(0,0,0,.08) 0 3px 20px の影
- コンテナは max-width 1220px
```
