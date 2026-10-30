# DESIGN.md — 高橋工芸（Takahashikougei）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-05 / 対象: `https://www.takahashikougei.com/`, `/pages/about`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **和文フォントを 1 文字も指定しない。** `font-family` に書いてあるのは欧文セリフだけ（`"New York", "Iowan Old Style", … , serif`）で、**日本語は末尾の `serif` に落ちて OS の明朝で出る**。読み込む Web フォントは欧文の **Halant 1 本だけ**（実測: フォントファイルのリクエスト **1 件**）
- **密度**: 低い。`border-radius: 0` / `box-shadow` **0 種**。画面を縦に割って「色面」と「写真」を並べる
- **キーワード**: 明朝フォールバック、Halant、角丸ゼロ・影ゼロ、ミントグリーン、オリーブグレー

**このサイトの核心は4つある。**

1. **和文書体を指定しない設計。** `--font-stack-body` は `"New York", Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, …` ——**和文グリフを持つ書体が 1 つも入っていない**。日本語は `serif`（macOS ではヒラギノ明朝、Windows では MS P明朝 / 游明朝）で描画される。**Web フォントを使わないことで和文を明朝にしている**
2. **見出しの `Halant` も和文グリフを持たない。** Halant は Google Fonts の Devanagari / Latin セリフで、**「手仕事が生む木のうつわ」は宣言上 Halant だが実際は `serif` で出ている**（実測: `document.fonts` は `Halant|600|loaded` の **1 件だけ**）。欧文（`Made in Asahikawa, Japan`）だけが Halant で組まれる
3. **見出しの行間が全階層で `1.1`。** `--base-headings-line: 1.1` が 60 / 40 / 30 / 20px のすべてに効いている（66/60、44/40、33/30、22/20）。**日本語の見出しとしてはかなり詰めている**
4. **`body` のフォントサイズが幅で切り替わる。** `html` は 16px 固定だが、`body` は **1440・1200px → 16px / 834px → 15px / 375px → 14px**。`line-height` も 25.6 / 24 / 22.4px と**比率 1.6 を保ったまま**追従する

**CSS Custom Properties は 53 個あるが、`--main-text` / `--header-*` / `--footer-*` / `--box-*-padding` / `--button-size` という Shopify テーマの語彙。** 値はブランドに合わせて設定されているが、**自社で設計したトークン体系ではない**（DOM にも `/cdn/shop/t/3/assets/theme.css` が並ぶ）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Olive Gray** | **`#635f4e`** | **本文・ナビ・ボタンの面。可視テキスト 31〜33 要素 ＋ 面 26 要素**。`--main-text` の値。**このサイトの地の色** |
| **Mint** | **`#34e2ac`** | コレクション名（`Enn` `Kami` `Cara` `Kakudo`）の文字色（可視 4 要素）と、**ヒーロー左半分の面**（8 要素）。**唯一の高彩度** |

> **オリーブグレーがテキスト色でありながら面色でもある。** `#635f4e` は本文色（`--main-text`）であると同時に、ボタンと footer の塗りでもある。**黒を使わずにこの 1 色でコントラストを作る設計。**

### Neutral（ニュートラル）

- **Text on Fill** (`#ffffff`): 色面・写真の上（可視 15〜48 要素）
- **Heading Dark** (`#262627`): ヒーローの大見出し（可視 3 要素）。**本文の `#635f4e` より暗い別色**
- **Surface Dark** (`#313739`): フッター・言語切替の面（3 要素）
- **Announce Bar** (`#1c1c1c`): 最上部の送料無料バー（1 要素）。文字は `#d2d2d2`
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`。`heroCovered: false`）

### 透明度で作る階調（`--main-text` の alpha 違い）

| 変数 | 値 | 用途 |
|------|----|------|
| `--main-text-hover` | `rgba(99, 95, 78, 0.82)` | リンクのホバー |
| `--main-background-secondary` | `rgba(99, 95, 78, 0.18)` | 二次面（選択状態・淡い塗り） |
| `--main-background-third` | `rgba(99, 95, 78, 0.03)` | 最も淡い面 |
| `--main-borders` | `rgba(99, 95, 78, 0.08)` | 罫線 |
| `--grid-borders` | `rgba(99, 95, 78, 0.10)` | グリッドの罫線 |
| `--alternate-opacity` | `.58` | 補助テキストの不透明度 |

> **グレーを別の色として持たず、`#635f4e` の alpha だけで階調を作っている**（`.03 / .08 / .10 / .18 / .58 / .82`）。**新規実装でもグレーを足さず、この alpha スケールを使う。**

> **`--footer-text` `--footer-background` `--footer-borders` は空文字**（値が入っていない）。テーマの設定画面で未入力のまま。**継承で `--main-*` が効くので実害はないが、変数を当てにしないこと。**

---

## 3. Typography Rules

### 3.1 和文フォント

**和文の指定は存在しない。**

- 本文・商品名は `serif`（generic family）に落ちる → **macOS: ヒラギノ明朝 ProN / Windows: 游明朝 または MS P明朝**
- 見出しの `Halant, serif` も和文グリフを持たないので、**日本語部分は同じく `serif`**
- **Web フォントは Halant 600 の 1 本のみ**（実測: `document.fonts` = `Halant|600|loaded` の 1 件、フォントファイルのリクエストも 1 件）

> **実サイトはこうだが、再現するならこう。** 明朝で出したいことは明確なので、意図を保ったまま環境差を潰すには和文明朝を明示する:
>
> ```css
> font-family: "New York", "Iowan Old Style", Baskerville, "Times New Roman",
>              "Hiragino Mincho ProN", "ヒラギノ明朝 ProN W3",
>              "Yu Mincho", 游明朝, YuMincho, "MS PMincho", serif;
> ```

### 3.2 欧文フォント

- **セリフ（見出し）**: **Halant**（Google Fonts / Shopify CDN 配信、`weight: 600` のみ）。`--font-stack-headings: Halant, serif`
- **セリフ（本文）**: `"New York"`（macOS 11 以降のシステムセリフ）→ `"Iowan Old Style"` → `"Apple Garamond"` → `Baskerville` → `"Times New Roman"` → `"Droid Serif"` → `Times` → `"Source Serif Pro"` → `serif`。**すべて OS ローカル**
- サンセリフ・等幅は使わない

### 3.3 font-family 指定

```css
/* 本文（--font-stack-body） */
font-family: "New York", "Iowan Old Style", "Apple Garamond", Baskerville,
             "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif,
             "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

/* 見出し（--font-stack-headings） */
font-family: Halant, serif;
```

**フォールバックの考え方**:
- **欧文だけを列挙し、和文は generic の `serif` に委ねる。** 「和文 Web フォントを読み込まない」こと自体が設計（ページの重さを増やさない選択）
- **`serif` の後ろに絵文字フォントが並んでいるが、`serif` で打ち止めになるため到達しない。** 絵文字を使うなら `serif` より前に出すこと
- Halant を使うのは**欧文の見出しだけ**と割り切る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Display (h1)** | Halant / serif | **60px** | **600** | **1.10** (66px) | normal | ヒーロー見出し。`--base-headings-size: 60` |
| **Heading 2** | Halant / serif | **40px** | 600 | **1.10** (44px) | normal | `お知らせ` `History` |
| Heading 3 | Halant / serif | 30px | 600 | **1.10** (33px) | normal | `Kamiシリーズ` |
| Heading 4 | Halant / serif | 20px | 600 | **1.10** (22px) | normal | コレクション名（`#34e2ac`） |
| **Product Title** | body stack | **24px** | **700** | **1.30** (31.2px) | normal | **Halant ではなく本文スタック。和文は合成太字** |
| **Body** | body stack | **16px** | 400 | **1.60** (25.6px) | normal | `--base-body-size: 16` / `--base-body-line: 1.6` |
| Nav | body stack | 14px | 400 | **1.00** (14px) | normal | padding `15px 20px` → 高さ 44px |
| Price | body stack | 16px | 700 | 1.20 | normal | `¥11,000` |
| Button | body stack | **13px** | **700** | **4.00** (52px) | normal | **行間でボタンの高さを作っている** |
| Announce Bar | body stack | 12px | 400 | 1.10 | normal | `10,000円以上購入で送料無料！`（`#d2d2d2`） |
| Cart Count | body stack | 10px | 700 | 1.60 | normal | カート内点数 |

> **商品名（24px / weight 700）は Halant ではなく本文スタック。** `serif` に落ちた和文に `700` を当てるので、**ヒラギノ明朝 W3 のブラウザ合成太字**になる。意図した太さではないが、サイト全体でそう組まれている。**明朝で太字を使う箇所がここだけ**という事実を押さえておくこと。

### 3.5 行間・字間

- **本文の行間**: **1.60**（`--base-body-line`）。幅が変わっても比率は維持される（16/25.6、15/24、14/22.4）
- **見出しの行間**: **1.10**（`--base-headings-line`）。**60px / 40px / 30px / 20px のすべてに同じ比率**
- **商品名の行間**: 1.30 / **価格**: 1.20
- **ボタンの行間**: **4.00**（13px / 52px）。**padding ではなく `line-height` でボタンの高さを作る**
- **字間**: **`normal` のみ。実測 90/90 要素（トップ）、51/51 要素（About）。例外ゼロ**

**ガイドライン**:
- **`letter-spacing` を一切足さない。** 明朝の素の字送りをそのまま使う設計
- **見出しは 1.1 と強く詰め、本文は 1.6 と開ける。** この落差が紙面の印象を作っている
- **ボタンの高さは `line-height` で決める**（`--button-size: 54px` に対し `line-height: 52px` ＋ `border: 2px` で実測 54px ちょうど）

### 3.6 禁則処理・改行ルール

```css
word-break: normal;        /* 実測値 */
overflow-wrap: normal;
line-break: auto;
```

- `word-break: auto-phrase` は使っていない
- **`line-height: 1.1` の 60px 見出しは 2 行までを想定**（「手仕事が生む木のうつわ」が 2 行で折り返す）。3 行以上になる文言は入れない

### 3.7 OpenType 機能

**このサイトは `font-feature-settings` を一切使っていない**（実測 0 要素）。

- **`palt` を足さないこと。** 和文が `serif` フォールバックで出る以上、環境ごとに約物の詰まり方が変わる。詰め機能を足すと差が広がる

### 3.8 縦書き

該当なし（実測 `writing-mode: vertical-*` は 0 要素）。ロゴの「高 橋 工 芸」は字間の空いた横組み。

---

## 4. Component Stylings

**`border-radius` はサイト全体で `0px`**（`--buttons-radius: 0px`。実測 radius **0 種**）。
**`box-shadow` も 0 種。** 影を 1 つも使わない。

### Buttons

**Solid（主要 CTA）**
- Background: **`#635f4e`** / Text: `#ffffff`
- Border: **`2px solid transparent`**
- Padding: **`0 30px`**（`--button-padding: 30px`）
- Border Radius: **`0px`**
- Font: **13px / weight 700 / line-height 52px**
- Size: 高さ **54px**（`--button-size: 54px`）
- 例: `もっと見る` `決済` `閲覧を続ける`

**Outline（白地・写真の上）**
- Background: `transparent` / Text: `#ffffff`
- Border: **`2px solid #ffffff`**
- 他は Solid と同一（`0 30px` / `0px` / 13px / 700 / 52px / 54px）
- 例: `対談を読む` `詳しく見る`

**Outline（通常面）**
- Background: `transparent` / Text: **`#635f4e`**
- Border: **`2px solid #635f4e`**
- 例: `カートの表示`

> **ボタンは「塗り」と「枠」の 2 種類だけ。** 枠線は常に **2px**、角丸は常に **0**、文字は常に **13px / weight 700**。

### Navigation

- Link: 14px / weight 400 / **line-height 14px** / padding `15px 20px` → 高さ **44px**
- 色: `#635f4e`
- ホバーは下線アニメーション（`.underline-animation`）。**色は変えない**

### Collection Link（コレクション名）

- Text: **`#34e2ac`** / Font: 20px / **weight 600** / line-height 1.10（Halant）
- 下線アニメーション付き / padding-bottom 3px

### Language Switch

- Background: **`#313739`** / Text: `#ffffff`
- Padding: `11px 12px 9px` / Border Radius: `0px`
- Font: 14px / weight 400〜700

### Announce Bar（最上部）

- Background: **`#1c1c1c`** / Text: **`#d2d2d2`**
- Font: 12px / weight 400 / line-height 1.10

### Cards / Grid

- Background: `#ffffff`
- Border: **`1px solid rgba(99, 95, 78, 0.10)`**（`--grid-borders`）
- Border Radius: `0px` / Shadow: **なし**
- 画像の余白: `--grid-image-padding: 0%`（**画像を枠いっぱいに出す**）

---

## 5. Layout Principles

### Spacing Scale

テーマ変数がそのまま余白スケールになっている。

| Token | 変数 | Value |
|-------|------|-------|
| S | `--box-small-padding` | **40px** |
| S | `--site-horizontal-padding` | **40px** |
| S | `--sidebar-padding` | 40px |
| M | `--text-spacing` | **30px**（本文ブロック間） |
| M | `--button-padding` | 30px |
| L | `--box-smaller-padding` | **80px** |
| XL | `--box-big-padding` | **9vw**（**唯一の可変余白**） |
| — | `--box-auto-top` | 150px |

### Container

- **固定のコンテナ幅を持たない。** 画面を縦に 2 分割（色面 / 写真）するフルブリード構成
- 左右の最小余白: **40px**（`--site-horizontal-padding`）
- ブロックの最小高: `clamp(250px, 30vh, 500px)`（`--box-min-height`）

### Header

- 高さ: **85px**（`--header-size`）
- 内側余白: **20px**（`--header-padding`）
- ロゴ高: **40px**（`--header-logo`）

### Grid

- ヒーローは **50% / 50%** の 2 分割（左＝ミントの色面＋見出し、右＝商品写真）
- 商品一覧は 4 カラム（`Enn` `Kami` `Cara` `Kakudo`）
- サイドバーのスライド量: `--sidebar-movement: 480px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | **`none`** | **全要素。実測 box-shadow 0 種** |

> **影を 1 つも使わないサイト。** 階層は **`rgba(99,95,78,0.08〜0.18)` の罫線と面**、および**色面と写真の対比**で作る。
> `filter: drop-shadow()` も使っていない（ヒーローの白文字は、ミントの色面の上に置くことでコントラストを確保している）。

---

## 7. Do's and Don'ts

### Do（推奨）

- **和文を明朝で出す。** `serif` に委ねるのが実装だが、再現するときは `"Hiragino Mincho ProN"` / `"Yu Mincho"` / `游明朝` を明示して環境差を潰す
- **見出しの行間は全階層 `1.1`、本文は `1.6`** に固定する
- **`letter-spacing: normal` を既定にし、どの要素でも触らない**
- **`border-radius: 0` と `box-shadow: none` を貫く**
- **ボタンは 13px / weight 700 / `line-height: 52px` / `padding: 0 30px` / `border: 2px`**（高さ 54px）
- **グレーを別の色として足さず、`#635f4e` の alpha（`.03 / .08 / .10 / .18 / .58 / .82`）で階調を作る**
- **ミント `#34e2ac` はコレクション名とヒーローの色面だけ**に使う
- 左右の余白は **40px**、本文ブロック間は **30px**
- **`body` のフォントサイズを幅で切り替える**（16 / 15 / 14px。`line-height` は比率 1.6 を保つ）

### Don't（禁止）

- **和文 Web フォントを足さない。** Noto Serif JP を足すと「OS の明朝で軽く出す」という設計が消える
- **Halant で日本語を組もうとしない**（和文グリフを持たない。必ず `serif` に落ちる）
- **`font-feature-settings: "palt"` を足さない**（実測 0 要素）
- **`letter-spacing` を足さない**（実測 90/90 が `normal`）
- **`border-radius` を足さない**（`--buttons-radius: 0px` が明示されている）
- **`box-shadow` を足さない**（実測 0 種）
- **本文色に黒（`#000000` / `#333333`）を使わない。** 地の色は `#635f4e`
- **ボタンの高さを `padding` で作らない**（`line-height` で作る設計）
- **`--footer-*` 変数を実装値として読まない**（空文字）
- **53 個の CSS 変数を「自社設計のトークン」として引用しない**（Shopify テーマの語彙）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| **Mobile / Tablet 縦** | `screen and (max-width: 768px), screen and (max-width: 1024px) and (orientation: portrait)` | **実測 35 件で最多。向きも見る** |
| Small Mobile | `screen and (max-width: 480px)` | 19 件 |
| Tablet | `screen and (max-width: 1024px)` | 17 件 |
| Desktop | `screen and (min-width: 1025px)` | 11 件 |
| Desktop / Tablet 横 | `screen and (min-width: 1025px), screen and (min-width: 769px) and (orientation: landscape)` | 7 件 |
| Wide | `screen and (min-width: 1367px)` | 5 件 |

- **`orientation` を併用して「タブレット縦＝モバイル扱い／タブレット横＝デスクトップ扱い」と振り分けている**

### ルートとフォントサイズ

- **`html` は 16px 固定。`body` が幅で切り替わる**（シロカと同じ型）:

| Viewport | `html` | `body` | `line-height` | 比率 |
|----------|--------|--------|---------------|------|
| 1440px | 16px | **16px** | 25.6px | 1.60 |
| 1200px | 16px | **16px** | 25.6px | 1.60 |
| 834px | 16px | **15px** | 24px | 1.60 |
| 375px | 16px | **14px** | 22.4px | 1.60 |

- **`rem` を使うときは 1rem = 16px（`html` 基準）**。`body` の 15 / 14px は `em` 継承にだけ効く
- **`--base-body-size` を書き換える実装**なので、`line-height` の比率 1.6 は保たれる

### タッチターゲット

- ボタン 54px、ナビ 44px、言語切替（実測 高さ約 42px）
- **言語切替は 44px をわずかに下回る。** モバイルでは高さを足すこと

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Olive Gray (本文・面): #635f4e
Mint (アクセント):     #34e2ac
Heading Dark:          #262627
Surface Dark:          #313739
Announce Bar:          #1c1c1c / 文字 #d2d2d2
Background:            #ffffff
階調: rgba(99,95,78, .03 / .08 / .10 / .18 / .58 / .82)

Font (本文): "New York", "Iowan Old Style", Baskerville, "Times New Roman",
             "Hiragino Mincho ProN", "Yu Mincho", 游明朝, serif   ← 和文明朝を明示して再現
Font (見出し): Halant, serif   ※ 欧文のみ。和文は serif に落ちる

Root:           html 16px 固定 / body 16→15→14px（834px・375px で切替）
Body Size:      16px / line-height 1.60
Heading Line:   1.10（60 / 40 / 30 / 20px すべて）
Letter Spacing: normal（例外なし）
Weights:        400 / 600（Halant） / 700
Radius:         0px
Shadow:         なし
Button:         13px / 700 / line-height 52px / padding 0 30px / border 2px / 高さ 54px
Spacing:        40px（左右） / 30px（本文間） / 80px / 9vw
Header:         85px
```

### プロンプト例

```
高橋工芸のデザインシステムに従って、商品コレクションのセクションを作成してください。
- 本文は明朝。font-family に "Hiragino Mincho ProN", "Yu Mincho", 游明朝, serif を明示する
- letter-spacing は normal（絶対に足さない）。font-feature-settings も使わない
- 見出しは 40px / weight 600 / line-height 1.1、本文は 16px / line-height 1.6
- 文字色は #635f4e、見出しだけ #262627、コレクション名は #34e2ac / 20px / weight 600
- border-radius は 0、box-shadow は使わない。罫線は rgba(99,95,78,0.10)
- CTA は背景 #635f4e / 文字 #ffffff / 13px / weight 700 / line-height 52px / padding 0 30px /
  border 2px solid transparent / radius 0（高さ 54px）
- 左右の余白 40px、ブロック間 30px
- 834px 以下で body を 15px、375px では 14px に落とす（line-height の比率 1.6 は維持）
```
