# DESIGN.md — プラチナ万年筆（PLATINUM PEN）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-29 / 対象: `https://www.platinum-pen.co.jp/`, `/brands/izumo/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **黒の面に蒔絵の写真を置き、文字は小さく空けて添える。** 画面の主役は常に製品写真で、テキストは 10〜13px に抑えて字間だけ空ける。角丸も影も使わない
- **密度**: 低い。1画面に1つの主題。商品一覧ですら 10px のラベルを並べる
- **キーワード**: Adobe Fonts 3書体、palt 全面適用、Medium 基調、黒2種、角丸ゼロ

**このサイトの核心は3つある。**

1. **`font-feature-settings: "palt"` を `body` に1回だけ書いて全体に継承させている**（CSS 全文で **1 件**、実測 **560〜564 要素**に効いている）。**要素ごとに書かない。** 1行で全ページの約物が詰まる
2. **書体は Adobe Fonts（Typekit）から3本。** 欧文 `myriad-pro`、和文 `kozuka-gothic-pr6n`（小塚ゴシック Pr6N）、ラベル用に `urw-din`。**`body` のスタックは欧文が先頭の和欧二層**で、英数字だけ Myriad Pro、かなと漢字は小塚ゴシックに落ちる
3. **`font-weight: 700` が 1 要素も無い。** 実測は **500 が 161 要素**で最多、次いで 400（28）・600（9）。CSS 全文でも `font-weight: 500` が **83 回**で圧倒的。**太字を書かない設計**で、強調はサイズと字間でつける

**ルートの `font-size` は `10px`、`body` は `15px`**。`rem` は 1rem = 10px で換算する。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

**彩度を持つブランドカラーが無い。** 黒・白・グレーだけで組み、色は製品写真が担う。

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Ink Black（本文・見出し）** | **`#040000`** | **可視 137 要素**（下層）/ 33 要素（トップ）。CSS 全文で 9 回。**純黒ではなく、わずかに赤みを含む** |
| **Charcoal（ナビ・ラベル）** | **`#131312`** | 可視 18 要素。CSS 全文で 5 回。`rgba(19,19,18,0.5)` として半透明でも使う |
| **Black（面）** | **`#000000`** | ヒーロー・ヘッダー・ボタンの塗り面（トップの viewport 最大面積 **1,134,720 px²**） |

> **黒が2つある（`#040000` と `#131312`）のは実装の実態。** どちらも「ほぼ黒」だが値が違う。**テキストには `#040000`、ナビ・カテゴリラベルには `#131312`** と使い分けられている。**`#000000` に丸めないこと**（面の黒とテキストの黒を区別している設計が消える）。

### Neutral（ニュートラル）

- **Text on Dark** (`#ffffff`): 黒面の上のテキスト。**可視 53 / 42 要素**
- **Gray（ページャ・補助面）** (`#666666`): カルーセルのインジケータ（可視 26 要素）
- **Gray Light** (`#9e9e9e`): インジケータの非選択（可視 4 要素）
- **Surface** (`#f7f7f7`): セクションの面（可視 2 要素。CSS 全文で 4 回）
- **Overlay**: `rgba(0, 0, 0, 0.4)` / `rgba(255, 255, 255, 0.75)`（各 2 要素）。写真の上に文字を置くときの調整
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`）

> **`pageBackground.resolved` は `#ffffff` だが、トップの viewport 最上部を面積で見ると `#000000` が 1,134,720 px² を占める**（`heroCovered` は `false`）。**ヒーローが黒、その下のコンテンツが白**、という2層構造。**「このサイトは黒地」とも「白地」とも書かないこと。**

### リンクの例外

- `#359bf5`（可視 1 要素）は **Cookie バナー内の「プライバシーポリシー」リンク**。**サイトのリンク色ではない**ので採用しない

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **小塚ゴシック Pr6N**（`kozuka-gothic-pr6n`）。Adobe Fonts 配信。**可視 156 要素**（下層）で最多
- **明朝体**: 使用しない（CSS に `"游明朝", "YuMincho Medium", "Hiragino Mincho ProN", …, serif` の宣言が1回あるが、実測で **0 要素**）

### 3.2 欧文フォント

- **サンセリフ（本文の英数字）**: **Myriad Pro**（`myriad-pro`）。Adobe Fonts 配信。`body` のスタック先頭
- **ラベル・見出しの英字**: **URW DIN**（`urw-din`）。**可視 27 / 12 要素**（`SEARCH` `LANGUAGE` `GIFT` `VIEW MORE`）。CSS 全文で `font-family: urw-din, sans-serif` が **31 回**

> **`dnp-shuei-4go-std`（DNP 秀英4号）の宣言が CSS に 1 回あるが、実測で 0 要素。** 読み込まれていない書体なので、**「秀英4号を使っているサイト」と書かないこと。**

### 3.3 font-family 指定

**`body` の実装をそのまま**（`!important` も実サイトのまま）:

```css
body {
  margin: 0;
  font-family: "myriad-pro", "kozuka-gothic-pr6n", "YuGothic",
               "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ",
               sans-serif !important;
  font-feature-settings: "palt";        /* ← ここ1行で全体が詰まる */
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
```

- **欧文（Myriad Pro）が先頭、和文（小塚ゴシック Pr6N）が2番目**の和欧二層。英数字は Myriad Pro の字形で出て、かな・漢字は小塚ゴシックに落ちる
- **Adobe Fonts が落ちたときの受け皿が `YuGothic` → `Hiragino Kaku Gothic ProN` → `Meiryo`** と、**Windows と macOS の両方**を押さえている
- **`!important` は WordPress テーマの上書き対策。** 新規実装では不要

**セクションごとの指定**:

```css
/* 和文の見出し・本文（CSS 全文で 50 回） */
font-family: "kozuka-gothic-pr6n", sans-serif;

/* 英字ラベル・VIEW MORE（CSS 全文で 31 回） */
font-family: urw-din, sans-serif;
```

> **Adobe Fonts（Typekit）の kit は `ezj0xos`**、`https://p.typekit.net/p.css?s=1&k=ezj0xos&ht=tk&f=26879.26880` で2書体を配信している。
>
> **Adobe Fonts はドメインライセンスなので、別ドメインでは表示されない。** ローカル検証や別サイトで近似させるなら:
> - `kozuka-gothic-pr6n` → **Noto Sans JP**（小塚より少し太いが骨格が近い）
> - `myriad-pro` → **Source Sans 3**（Adobe 自身の後継。字形がほぼ同系）
> - `urw-din` → **Archivo** / **Oswald**（DIN 系の縦長サンセリフ）
>
> **`@font-face` は `document.fonts` に載らない。** 実測の `fontFaces` に出るのは `Script` / `nautica` の3件だけで、**全部 `unloaded`**。Typekit が動的に CSS を注入するため、`document.fonts` の一覧では Adobe Fonts の実体を確認できない。**「@font-face が空＝Web フォントを使っていない」と読み違えないこと。**

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| **ページ見出し（h1）** | 小塚ゴシック | 30px | 500 | `normal` | `normal` | 各ページ 1 要素 |
| **主題（h2・ブランドの惹句）** | 小塚ゴシック | **25px** | **500** | 37.5px (**1.50**) | 1.25px (**0.05em**) | 「急がず淀みなく精緻な技巧を紡ぎ出す」 |
| **セクション見出し（英字）** | URW DIN | 18px | 500 | — | 1.08px (**0.06em**) | 5〜7 要素（`IZUMO'S LINEUP` `PRODUCTS`） |
| **セクション見出し（和文の添え）** | 小塚ゴシック | **10px** | 500 | 10px (1.00) | 1px (**0.1em**) | 英字の下に小さく添える。5〜11 要素 |
| **ナビゲーション** | 小塚ゴシック | 12px | **600** | `normal` | 1.44px (**0.12em**) | 18〜20 要素 |
| **商品名** | 小塚ゴシック | 13px | 500 | 16.9px (**1.30**) | 1.3px (**0.1em**) | 下層 45〜46 要素 |
| **カテゴリ・一覧ラベル** | 小塚ゴシック | **10px** | 500 | 13px (1.30) | 0.4px (**0.04em**) | 下層 **107 要素**で最多 |
| **本文（`body` 既定）** | 小塚ゴシック | 15px | 400 | `normal` | `normal` | — |
| **UI ラベル（英字）** | URW DIN | 11px | 500 | 11px (1.00) | 0.66px (**0.06em**) | `SEARCH` `LANGUAGE` |
| **VIEW MORE** | URW DIN | 11.232px | 500 | 1.00 | 1.34784px (**0.12em**) | 9 要素 |
| **日付** | 小塚ゴシック | 12px | 500 | — | 0.72px (**0.06em**) | 5 要素 |

> **最も多いサイズが 10px と 12px。** 下層ページは **10px が 107 要素 / 12px が 93 要素**。**このサイトは文字を小さく組む。** 本文既定の 15px はほとんど使われていない。

### 3.5 行間・字間

**字間は `em` を各要素に当てる。** CSS 全文での宣言は **`0.06em` が 45 回で最多**、次いで `0.1em`（10回）、`0.12em`（9回）、`0.02em`（5回）、`0.04em`（3回）。`px` 直書きは `1.8px`（2回）と `5px`（1回）の例外だけ。

- **`normal` は 29〜53 要素**。**空けないのは、グローバルナビの一部とページャの数字だけ**
- **行間は `normal` が最多**（トップ 61 要素）。**折り返す本文には 1.30 が当たる**（下層 **125 要素**）
- **惹句だけ 1.50、ブランドの説明文は 2.00**（下層 1 要素：「日本の神々が年に一度集まり、太古より祀られる場所」）

```css
/* 商品名・一覧ラベル */
letter-spacing: .1em;
line-height: 1.3;

/* ナビゲーション */
letter-spacing: .12em;

/* 英字ラベル（URW DIN） */
letter-spacing: .06em;

/* ブランドの惹句 */
font-size: 25px;
font-weight: 500;
line-height: 1.5;
letter-spacing: .05em;
```

### 3.6 禁則処理・改行ルール

- `word-break` / `line-break` / `overflow-wrap` の宣言は**無い**（ブラウザ既定）
- 商品名は `『八雲白檀』` のように二重鉤括弧を含む。**`palt` が全体に効いているので、鉤括弧の前後は自動的に詰まる**

### 3.7 OpenType 機能

```css
/* body に1回だけ。子要素では書かない */
body {
  font-feature-settings: "palt";
}
```

- **CSS 全文で `font-feature-settings` の宣言は 1 件のみ**。それが **実測 560〜564 要素**に継承されている
- **値は `"palt"`（`1` を付けない書き方）**。実サイトのまま
- **要素ごとに書き足さない。** 継承で足りる

### 3.8 縦書き

使用しない（実測 `writing-mode: vertical-rl` の要素 **0 件**）。

> **ブランドページのヒーローに縦組みの「出雲」が見えるが、これは画像に焼き込まれた文字**（蒔絵の写真に重ねたロゴ）。**CSS で縦組みを実装しない。**

### 3.9 ウェイトの落とし穴

- **`font-weight: 700` が実測 0 要素。** CSS 全文でも `font-weight: 500` が 83 回に対し `700` は 3 回、`bold` が 13 回
- **小塚ゴシック Pr6N は EL / L / R / M / B / H の6ウェイトを持つ**が、Typekit の kit が配信しているのは **`fvd=n4`（Regular）と `fvd=n7`（Bold）の2本**
- **つまり CSS が当てている 500 / 600 は、配信されている 400 と 700 の間で最近傍に寄る**。意図した「Medium」「DemiBold」の太さでは出ない可能性がある

> **新規実装での扱い**: **400 と 500 の2段で組む。** 700 は使わない（このサイトの静けさが壊れる）。強調はサイズ（10px ↔ 25px）と字間（`.04em` ↔ `.12em`）でつける。

---

## 4. Component Stylings

### Buttons

**Primary（黒の面）**
- Background: `#000000`
- Text: `#ffffff`
- Border Radius: **`0px`**
- Padding: `0px 10px`
- Font Size: 12px / Weight: 400 / Letter Spacing: `1.2px`（= `.1em`）

**Outlined（VIEW MORE）**
- Background: `transparent`
- Text: `#ffffff`
- Border: **`2px solid #ffffff`**（1px ではない）
- Border Radius: **`0px`**
- Font: URW DIN 11.232px / 500 / `letter-spacing: .12em`

**List（新着情報一覧）**
- Background: `#000000` / Border: **`2px solid #000000`**
- Border Radius: `0px`
- Font Size: 10px / Weight: 500 / Letter Spacing: `1.2px`

### Carousel Indicator

- Background: `#666666`（非選択）/ `#ffffff`（選択）/ `#9e9e9e`
- Border Radius: **`50%`**（実測 16 要素）
- **このサイトで角丸が付く唯一の要素**

### Cards

- Background: `#ffffff` / `#f7f7f7`
- Border Radius: `0px`（例外として `9px` が 3 要素、`66px` が 2 要素）
- Shadow: **なし**
- 商品名は 13px / 500 / `line-height: 1.3` / `letter-spacing: .1em`

### Inputs

- CSS Custom Properties が**フォーム用にだけ 6 個**ある（下記）。**色やタイポグラフィのトークンは存在しない**

```css
:root {
  --input-rect-height: 40px;
  --cb-radio-size: 20px;
  --form-row-gap: 50px;
  --dt-label-color: #999;          /* = #999999。実サイトは 3 桁で書いている */
  --dt-label-text: "任意";
  --inner-text-color: #999999;     /* 同じ色を 6 桁でも書いている */
}
```

> **同じ `#999999` が 3 桁（`--dt-label-color`）と 6 桁（`--inner-text-color`）で二重に宣言されている。** 値は同一なので、新規実装ではどちらかに寄せてよい。

> **`--dt-label-text: "任意"` は CSS 変数に日本語の文言を入れている例**（`::after { content: var(--dt-label-text) }` で使う）。**この6個を「デザイントークン」と読み違えないこと。** 問い合わせフォームのためだけの変数で、サイト全体の設計は hex 直書き。

---

## 5. Layout Principles

### Container

- **Max Width: `1014px`**（実測 5〜6 要素で最多）。**半端な値だが、これがこのサイトの本文幅**
- 補助的に `1200px`（2 要素）/ `1260px`（1 要素）/ `100%`（フルブリード）

### Grid

- `gap` はほぼ使わない（実測 `0px` が 3 回、`80px` / `20px` が各 1 回）
- ヒーロー・ブランドページは全幅（`100%`）の写真セクションを縦に積む

### Spacing

- トークン化された余白スケールは無い
- フォームの行間隔だけ `--form-row-gap: 50px` で変数化されている

---

## 6. Depth & Elevation

**影を一切使わない。** 実測で `box-shadow` を持つ要素は **両ページとも 0 種 / 0 要素**。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **すべての要素** |

> **面の区別は黒（`#000000`）と白（`#ffffff`）と `#f7f7f7` の差だけでつける。** 影を足すと、写真主体の静けさが壊れる。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`font-feature-settings: "palt"` を `body` に1回だけ書く。** 子要素で繰り返さない
- **`body` のスタックは欧文先頭**（`"myriad-pro", "kozuka-gothic-pr6n", …`）。英数字を Myriad Pro の字形で出す意図
- **フォールバックに `YuGothic` と `Hiragino Kaku Gothic ProN` の両方を入れる**（Adobe Fonts が落ちたときの受け皿）
- **英字ラベルは `urw-din`** で `letter-spacing: .06em` 〜 `.12em`
- **文字は小さく組む**（一覧ラベル 10px / 商品名 13px / ナビ 12px）
- **字間は `em`**（`.06em` を基準に、`.02em` 〜 `.12em`）
- **テキストの黒は `#040000`、ナビの黒は `#131312`**
- **角丸は `0px`**（カルーセルのインジケータだけ `50%`）

### Don't（禁止）

- **`font-weight: 700` を使わない**（実測 0 要素。このサイトは太字を書かない）
- **`#000000` をテキスト色に使わない**（`#040000` / `#131312` の2種を区別している）
- **影を足さない**（実測 0 種）
- **`--input-rect-height` 等の6個を色・タイポのトークンとして拡張しない**（フォーム専用）
- **`document.fonts` が空なのを「Web フォント未使用」と解釈しない**（Adobe Fonts は載らない）
- **`dnp-shuei-4go-std` を使わない**（宣言はあるが実測 0 要素）
- **縦組みを CSS で実装しない**（ヒーローの縦書きは画像）

---

## 8. Responsive Behavior

### Breakpoints

**境界は 768px の1本だけ。** CSS 全文での出現回数が桁違いに多い。

| Name | Query | 実測（CSS 全文の出現） |
|------|-------|------|
| Mobile | `screen and (max-width: 767px)` | **524 回** |
| Desktop | `screen and (min-width: 768px)` | **219 回** |
| 補助 | `(min-width: 600px)` | 4 回 |
| モーション | `(prefers-reduced-motion: reduce)` | 4 回 |

- **2分岐だけで組む。** タブレット専用のレイアウトを持たない
- **`prefers-reduced-motion` に対応している**（カルーセルのアニメーションを止める）

> **実サイトに `screen and (min-width: 768px) and (max-width: 767px)` という、絶対にマッチしない条件が 2 件ある。** 下限が上限を上回っているため、この中の宣言は**どの画面幅でも適用されない**。**複製したコードの書き換え漏れとみられる。真似しないこと。**

### タッチターゲット

- ナビゲーションは 12px / `line-height: normal` と小さい。**モバイルでは `padding` で 44px を確保する**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color:    #040000（本文）/ #131312（ナビ・ラベル）
Background:    #ffffff（コンテンツ）/ #000000（ヒーロー・ヘッダー）
Surface:       #f7f7f7
Font (body):   "myriad-pro", "kozuka-gothic-pr6n", "YuGothic",
               "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ", sans-serif
Font (和文):   "kozuka-gothic-pr6n", sans-serif
Font (英字):   urw-din, sans-serif
Root Size:     10px  (1rem = 10px)
Body Size:     15px（ただし実装の主役は 10px / 12px / 13px）
Line Height:   1.3（本文）/ 1.5（惹句）/ 2.0（ブランド説明）
Letter Spacing: .06em を基準（.02em 〜 .12em）
Weights:       400 / 500 / 600  ← 700 は使わない
Container:     1014px
Radius:        0（カルーセルのドットのみ 50%）
Shadow:        なし
palt:          body に1回だけ
```

### プロンプト例

```
プラチナ万年筆のデザインシステムに従って、商品一覧セクションを作成してください。

- body に font-feature-settings: "palt" を1回だけ書き、子要素では繰り返さない
- font-family は "myriad-pro", "kozuka-gothic-pr6n", "YuGothic",
  "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ", sans-serif（欧文が先頭）
  ※ Adobe Fonts が使えない環境では kozuka-gothic-pr6n → Noto Sans JP、
    myriad-pro → Source Sans 3、urw-din → Archivo で近似する
- セクション見出しは英字を urw-din 18px / 500 / letter-spacing: .06em、
  その下に和文を 10px / 500 / letter-spacing: .1em で小さく添える
- 商品名は 13px / font-weight: 500 / line-height: 1.3 / letter-spacing: .1em
- カテゴリラベルは 10px / 500 / letter-spacing: .04em
- テキストの色は #040000、ナビ・ラベルは #131312（#000000 は面にだけ使う）
- VIEW MORE ボタンは透明地に 2px solid #ffffff、border-radius: 0、
  urw-din 11px / 500 / letter-spacing: .12em
- font-weight: 700 は使わない。角丸と影も使わない
- コンテナは max-width: 1014px、ブレークポイントは 768px の1本
```
