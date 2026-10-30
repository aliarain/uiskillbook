# DESIGN.md — 大倉陶園（OKURA ART CHINA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-27 / 対象: `https://www.okuratouen.co.jp/`, `/technique/white/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **明朝1書体・1ウェイト。太字を一切使わない。** 紺（`#24315a`）と金（`#af8c55`）の2色だけで格を出す。1919 年創業の高級洋食器メーカー
- **密度**: 低い。白地に写真と細い罫だけを置き、`line-height: 1.73` でゆったり組む
- **キーワード**: Noto Serif JP 単一、weight 400 のみ、オークラの紺、字空けはヒーロー1行だけ、4px ずらした二重罫

**このサイトの核心は5つある。**

1. **`font-weight` は 400 だけ。実測 2 ページ・142 要素すべてが 400。** 500・700 は 1 要素も無い。**このサイトで「太字」を書いてはいけない**（そもそも Web フォントに 500 の実体が来ていない。後述）
2. **書体は Noto Serif JP 1 本。実測 136/142 要素。** 残り 6 要素は Google 翻訳ウィジェットの `arial` と `icon` フォント。**明朝だけでナビもボタンも組む**
3. **`letter-spacing` はヒーローの1行にしか効いていない。** 実測 `normal` が 124 要素、`4px`（= 40px に対して `0.1em`）が **たった 1 要素** — `良きが上にも良きものを`。あとは欧文の小見出しに `0.7px`（`0.05em`）が 11 要素
4. **CSS Custom Properties は 0 個。** 変数を持たず、`#24315a` を CSS 全文に 30 回、`#af8c55` を 4 回、ベタ書きしている。**実装値そのものが仕様**
5. **影を `box-shadow` で作らない。** ボタンは `::after` に **右下 4px ずらした L 字の罫**（`border-width: 0 1px 1px 0`）を置き、ヒーローのコピーだけ `filter: drop-shadow(5px 5px 5px rgba(0,0,0,.6))` で浮かせる。実測の `box-shadow` は **0 種類**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Okura Navy** | **`#24315a`** | **文字 67 要素 / 面 10 要素**。CSS 全文で **30 回**。見出し・本文リンク・ナビ・ボタンの枠と文字・ニュースラベル・カートボタンの面 |
| **Okura Gold** | **`#af8c55`** | **文字 17 要素 / 面 1 要素**。CSS 全文で 4 回。**和文見出しの下に置く欧文サブタイトル**と、店舗系ニュースラベルの面 |
| **Navy Hover** | **`#656e8b`** | CSS 全文で **15 回**。カートボタンのホバー、雑誌掲載ラベルの面。**紺を薄めた中間色** |

> **紺と金の役割が固定されている。** 和文＝紺、その下の欧文サブタイトル＝金。`.c-section__title span { color:#24315a; font-size:1.875em }` ＋ `small { color:#af8c55; font-size:.875em; letter-spacing:.05em }` が全セクション共通の見出しの型。

### News ラベルの色分け

| クラス | 面 | 用途 |
|--------|----|----|
| `.c-news__label`（既定） | `#24315a` | お知らせ・イベント・ペインティングスクール |
| `.label-factory` / `.label-imperialhotel` / `.label-karuizawa` | `#af8c55` | 店舗（本社店・帝国ホテル店・軽井沢店） |
| `.label-magazine` | `#656e8b` | 雑誌掲載 |

- 文字はすべて `#ffffff` / `font-size: .8125em`（13px）/ `line-height: 2` / **幅 `7.6154em` 固定**（文字数が違っても同じ幅で揃う）

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文（`.l-page` に指定）。**見出しは `#24315a` なので、黒に近い色が出るのは本文だけ**
- **Text Muted** (`#666666`): 日付（可視 3 要素）
- **Border** (`#dedede`): ニュース項目の区切り線
- **Border Light** (`#dbdbdb`): CSS 全文で 10 回。表・区切り
- **Surface Breadcrumb** (`#f2f3f5`): パンくず帯
- **Surface Input** (`#eeeeee`): 入力欄の面。フォーカスで `#eaedf4`（紺寄りの淡色）
- **Error** (`#e74f4f`): フォームのエラー
- **Background** (`#ffffff`): ページ背景（根拠 `body`）

> **`#f1f4f9` の面と `arial` の文字は Google 翻訳ウィジェット（`goog-te-gadget-simple`）。** 大倉陶園のパレットではないので、再現実装に取り込まない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（唯一）**: **Noto Serif JP** / weight **400 のみ**
- ゴシック体は使わない

### 3.2 欧文フォント

- **専用の欧文フォントを持たない。** `News` `About` `Factory Shop` `Official Online Shop` などの欧文見出しも **Noto Serif JP の欧文グリフ**（セリフ）で組む
- `arial` が 3 要素あるが、すべて Google 翻訳ウィジェット

### 3.3 font-family 指定

```css
/* サイト全体。body ではなく .l-page（ページのラッパ）に書いている */
.l-page {
  color: #333;
  font-family: "Noto Serif JP", serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.73;
}

/* フォーム要素にも同じ書体を明示（継承が切れるため） */
.c-form input,
.c-form textarea {
  font-family: "Noto Serif JP", serif;
}
```

> **`body` には `font-family` を書いていない。** `getComputedStyle(document.body).fontFamily` は `"Hiragino Kaku Gothic ProN"` を返すが、これは **ブラウザの日本語既定フォント**であって、大倉陶園の指定ではない。**書体はラッパ要素 `.l-page` にだけ書かれている**。

### 3.4 Web フォントの実際

```html
<!-- JS で後から差し込まれる。素の HTML には <link> が無い -->
https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500&display=swap
```

| ファミリー | リクエスト | `document.fonts` | 実測の使用 |
|---|---|---|---|
| **Noto Serif JP** | `wght@400;500` | **400 `loaded` / 500 `unloaded`** | **400 のみ 136 要素** |
| `icon`（自前のアイコンフォント） | `assets/font/icon.woff2` | `loaded` | 矢印・カートアイコン（`\e800`〜`\e802`） |

> **`wght@400;500` と 500 を取りに行っているが、500 を当てている要素は 1 つも無い。** `document.fonts` でも `unloaded`。**500 を書いても描画されない**ので、再現実装では 400 だけを前提にする。
> アイコンは Web フォントの私用領域（`content: "\e801"` など）で実装されている。SVG に置き換えて再現してよい。

### 3.5 文字サイズ・ウェイト階層

**サイズは `em` で書かれ、`.l-page` の 16px を基準に積み上がる。**

| Role | 宣言 | 実測 | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Hero Copy | `2.5em` | **40px** | 400 | 1.73 | **`0.1em` = 4px** |
| Page Title | `2.125em` | 34px | 400 | 1.73 | normal |
| Section Title（和文） | `1.875em` | **30px** | 400 | **1**（`line-height: 1`） | normal |
| Section Sub（欧文・金） | `0.875em` | 14px | 400 | 1 | **`0.05em` = 0.7px** |
| Contents H2 | `1.625em` | 26px | 400 | 1.73 | normal |
| Directory Title | `1.25em` / `1.5em` | 20px / 24px | 400 | 1.73 | normal |
| **Body** | `1em` | **16px** | 400 | **1.73** | normal |
| Nav / List | `0.875em` | **14px** | 400 | 1.73 | normal |
| News Label | `0.8125em` | 13px | 400 | **2** | normal |
| Breadcrumb | — | 13px | 400 | 1 | normal |
| Shop Sub（金） | `0.6em` | 12px | 400 | 1 | `0.05em` = 0.6px |
| Scroll | `0.625em` | 10px | 400 | 1.73 | `0.1em` = 1px |

- 実測の最頻サイズ: **14px 62 要素** / 20px 23 / 16px 16 / 30px 12

### 3.6 行間・字間

- **本文・既定の行間**: **`1.73`**。`.l-page` に 1 回だけ書いて全体に継承させている（実測 103 要素）
- **見出しの行間**: **`1`**（セクション見出しと欧文サブタイトル。実測 36 要素）
- **ニュース一覧の行間**: `2`（日付とラベルの行）
- **本文の字間**: **`normal`。書かない**（実測 142 要素中 124 要素）
- **字空けを使うのは3箇所だけ**:
  - ヒーローのコピー `0.1em`（40px → 4px）— **サイト全体で 1 要素**
  - 欧文サブタイトル `0.05em`（14px → 0.7px / 12px → 0.6px）
  - `SCROLL` の文字 `0.1em`（10px → 1px）

**ガイドライン**:
- **`1.73` は 1.7 や 1.75 に丸めない。** サイト全体がこの値で組まれている
- **本文に字間を足さない。** このサイトの「間」は `line-height: 1.73` と余白が作っている
- **見出しの `line-height: 1` を忘れない。** 30px の和文見出しと 14px の金の欧文を密着させ、2行で1つの塊に見せるための値

### 3.7 OpenType 機能

```css
/* このサイトは font-feature-settings を 1 要素も使っていない */
```

- **`palt` は 0 件**。約物は Noto Serif JP の等幅のまま
- **明朝・weight 400・`palt` なし**の組み合わせが、このサイトの落ち着いた見えを作っている。`palt` を足すと印象が変わる

### 3.8 縦書き

```css
/* 該当なし。writing-mode は 2 ページで 0 要素 */
```

---

## 4. Component Stylings

### Buttons

**CTA は 1 種類だけ。面で塗らず、白地に紺の 1px 枠で囲む。**

```css
.c-button {
  align-items: center;
  background-color: #fff;
  border: 1px solid #24315a;
  display: flex;
  height: 3em;              /* 48px */
  justify-content: center;
  margin: 0 auto;
  max-width: 16.75em;       /* 268px */
  position: relative;
  width: 100%;
}
/* ★右下に 4px ずらした L 字の罫。これが影の代わり */
.c-button::after {
  border: solid #24315a;
  border-width: 0 1px 1px 0;
  bottom: -4px;
  right: -4px;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
.c-button span {
  color: #24315a;
  font-size: .875em;        /* 14px */
  transition: all .4s ease-in-out;
}
/* ★ホバーは左から紺が満ちてきて、文字が白へ反転する */
.c-button::before {
  background-color: rgba(36,49,90,0);
  content: "";
  height: 100%; left: 0; top: 0; width: 0;
  position: absolute;
  transition: all .4s ease-in-out;
}
.c-button:hover::before { background-color: rgba(36,49,90,1); width: 100%; }
.c-button:hover span    { color: #fff; }
```

- **Border Radius: `0`**
- 写真の上に置くときだけ `border` と `::after` を `#ffffff` にする
- 矢印は `span::after { content: "\e801"; font-family: "icon"; font-size: 1.25rem; right: 1em }`
- 外部リンクは `.c-link__ext` で矢印を `\e802` に差し替え、`position: static` でテキストの直後に置く

### Badges（ニュースラベル）

```css
.c-news__label {
  background-color: #24315a;
  color: #fff;
  display: inline-block;
  font-size: .8125em;      /* 13px */
  line-height: 2;
  text-align: center;
  width: 7.6154em;         /* ★文字数に関係なく固定幅 */
}
```

- Border Radius: `0`
- 店舗系は `#af8c55`、雑誌掲載は `#656e8b`

### Header

```css
.l-header       { background-color: #fff; display: flex; justify-content: space-between; width: 100%; }
.l-header__nav  { align-items: center; display: flex; padding: 0 1.5em; width: calc(100% - 70px); }
.l-header__cart a { background-color: #24315a; height: 70px; width: 100px;
                    display: flex; align-items: center; justify-content: center;
                    transition: background-color .4s ease; }
.l-header__cart a:hover { background-color: #656e8b; }
```

- **ヘッダー高さ 70px。右端の Online Shop ボタンだけが紺の面**（サイト内で面塗りの操作要素はこれだけ）

### Inputs

- Background: `#eeeeee` / Focus: `#eaedf4`
- Border: **none**（`border: none; outline: none`）
- Padding: `.6em 1em`
- Font: `"Noto Serif JP", serif`（**明示しないと継承が切れる**）
- Error: `color: #e74f4f`

### Section Title（全セクション共通の型）

```css
.c-section__title       { margin-bottom: 2.375em; }
.c-section__title span  { color: #24315a; font-size: 1.875em; line-height: 1; white-space: nowrap; }
.c-section__title small { color: #af8c55; display: block; font-size: .875em;
                          letter-spacing: .05em; line-height: 1; margin-top: .6em; }
```

### Title Line（見出しの横に引く罫）

```css
.c-contents .c-title__line::after {
  background-color: #24315a;
  content: ""; display: inline-block;
  height: 1px; position: absolute; right: 0; top: 50%; width: 98%;
}
.c-contents .c-title__line span { background-color: #fff; padding-right: 1.5em; position: relative; z-index: 1; }
```

- **見出しの背後に 1px の線を全幅で引き、文字の後ろだけ白で抜く**。罫線見出しの実装パターン

---

## 5. Layout Principles

### Container

```css
.c-inner { margin: 0 auto; max-width: 1236px; position: relative; width: 100%; }
```

- **Max Width: `1236px`**（実測 12 要素すべてこの値）
- ヘッダーの左右 padding: `1.5em`（24px）
- パンくずの padding: `0 1.5em`

### Spacing

**余白はすべて `em`。** px の固定値をほとんど使わない。

| 箇所 | 値 |
|------|-----|
| セクション見出しの下 | `2.375em`（38px）/ モバイル `2em` |
| ボタンブロックの上 | `3.125em`（50px） |
| ボタン同士の間隔 | `2em`（32px） |
| ニュース項目の下 | `1.75em`（28px） |
| 記事タイトルの下 | `2em` |
| 本文 h2 の前後 | `.5em 0 1em` / ページ内は `margin-top: 2.5em` |
| 店舗カードのボタン | `padding: 2.25em 0` |

### Grid

- `display: flex` 主体。`gap` は使っていない（実測 0 件）。**間隔は `margin` で取る**
- 店舗一覧は `width: 50%` / `max-width: 500px` の2カラム

---

## 6. Depth & Elevation

| Level | 実装 | 用途 |
|-------|------|------|
| 0 | **`none`** | **ほぼすべての要素**（実測の `box-shadow` は 0 種類） |
| 1 | `::after` の **右下 4px ずらした L 字罫**（`border-width: 0 1px 1px 0` / `#24315a`） | ボタン |
| 2 | `filter: drop-shadow(5px 5px 5px rgba(0,0,0,.6))` | **ヒーローのコピー 1 要素のみ** |
| — | `box-shadow: 0 0 .5em .25em #d4d7df inset` | CSS 全文で 1 件（内側の陰） |

> **`box-shadow` の分布が 0 種類でも、このサイトに「影」はある。** ヒーローの白いコピーは `filter: drop-shadow` で写真から浮かせている（`box-shadow` とは別プロパティなので分布に現れない）。**白文字を写真に載せるときは `filter: drop-shadow(5px 5px 5px rgba(0,0,0,.6))` を使う**のがこのサイトの方法。

### ヒーローのフェード

```css
.c-mv::after {
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 96%);
  bottom: 0; height: 6.25em; left: 0; position: absolute; width: 100%;
}
```

- **ヒーロー写真の下端 100px を白へフェードさせ、次のセクションへ地続きにする**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`font-family: "Noto Serif JP", serif` を `.l-page` 相当のラッパに 1 回だけ**書く
- **`font-weight` は 400 だけ**使う
- **`line-height: 1.73` を既定**にする
- **セクション見出しは `line-height: 1`**、和文 30px（`#24315a`）＋ 欧文 14px（`#af8c55` / `letter-spacing: .05em`）の2段
- CTA は**白地 + 1px solid `#24315a` + 右下 4px の L 字罫**。ホバーで左から紺が満ちる
- ラベルは **`width: 7.6154em` の固定幅**で揃える
- `border-radius: 0` を明示する
- 写真上の白文字は `filter: drop-shadow(5px 5px 5px rgba(0,0,0,.6))`
- コンテナは `max-width: 1236px`
- 余白は `em` で持つ

### Don't（禁止）

- **`font-weight: 500` / `700` を書かない。** 500 は `unloaded` で描画されず、700 は合成太字になる。**このサイトに太字は存在しない**
- **本文に `letter-spacing` を足さない**（142 要素中 124 要素が `normal`）
- **`line-height: 1.73` を 1.7 / 1.75 に丸めない**
- **`box-shadow` で要素を浮かせない**（奥行きは 4px ずらした罫で作る）
- **`border-radius` を足さない**（CSS 全文で `50%` と `.25em` が各 1 件だけ）
- ゴシック体を混ぜない（サイト全体が明朝1本）
- `palt` を足さない
- `#000000` を本文に使わない（`#333333`）
- `#24315a` を本文の文字色にしない（**見出し・リンク・操作要素の色**）
- CSS 変数を前提にしない（**このサイトに変数は 0 個**）
- Google 翻訳ウィジェットの `arial` / `#f1f4f9` をパレットに含めない

---

## 8. Responsive Behavior

### Breakpoints

**メディアクエリは 4 つだけ。** 非常に少ない。

| Query | 説明 |
|-------|------|
| `screen and (max-width: 768px)` | モバイル |
| `screen and (min-width: 769px)` | タブレット以上 |
| `screen and (min-width: 769px) and (max-width: 1236px)` | **コンテナ幅未満のデスクトップ**（左右に余白を足す） |
| `screen and (min-width: 1600px)` | ワイド |

> **`1236px` がコンテナ幅とブレークポイントの両方を兼ねている。** コンテナに収まりきらない幅のときだけ padding を足す設計。

### モバイルでのサイズ調整

- `.c-directory__title` が `1.25em` → `1.5em` に**大きくなる**（モバイルで見出しを強める）
- `.c-section__title` の下余白が `2.375em` → `2em` に縮む
- `.c-page__title { line-height: 1 }` に切り替わる

### タッチターゲット

- `.c-button { height: 3em }` = 48px。`max-width: 16.75em`（268px）で中央寄せ
- ヘッダーのカートボタンは 100 × 70px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Okura Navy:  #24315a   （見出し・リンク・ボタンの枠と文字・ラベルの面）
Okura Gold:  #af8c55   （欧文サブタイトル・店舗ラベル）
Navy Hover:  #656e8b
Text:        #333333
Text Muted:  #666666
Border:      #dedede / #dbdbdb
Surface:     #f2f3f5（パンくず）/ #eeeeee（入力欄）
Background:  #ffffff

Font: "Noto Serif JP", serif   ← ラッパ要素に 1 回だけ書く
Weight: 400 のみ（500・700 は使わない）
Body Size: 16px   Line Height: 1.73
Section Title: 30px / #24315a / line-height 1
  + 欧文 14px / #af8c55 / letter-spacing .05em / line-height 1
Letter Spacing: normal（ヒーロー 0.1em と欧文小見出し 0.05em だけ例外）
Border Radius: 0   Box Shadow: none
Container: 1236px
CSS Custom Properties: 0 個
```

### プロンプト例

```
大倉陶園のデザインシステムに従って、製品紹介ページを作成してください。

- ラッパ要素に font-family: "Noto Serif JP", serif / font-size: 16px /
  line-height: 1.73 / color: #333333 を 1 回だけ書く
- font-weight は 400 だけ。太字は一切使わない
- セクション見出しは 30px / #24315a / line-height 1、その下に
  14px / #af8c55 / letter-spacing .05em / line-height 1 の欧文を置く
- 本文に letter-spacing を書かない
- CTA は background #ffffff / border 1px solid #24315a / height 3em /
  max-width 16.75em / border-radius 0、文字は 14px #24315a。
  ::after で right:-4px; bottom:-4px; border-width: 0 1px 1px 0 の L 字罫を重ねる
- ホバーは ::before の幅を 0 → 100% にして #24315a で満たし、文字を白へ反転
- ラベルは #24315a / #ffffff / 13px / line-height 2 / width 7.6154em の固定幅
- box-shadow と border-radius は使わない
- コンテナは max-width 1236px、余白は em で持つ
- ブレークポイントは 768px / 769px / 1236px / 1600px の 4 つだけ
```
