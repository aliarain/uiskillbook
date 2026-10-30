# DESIGN.md — シロカ（siroca）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-29 / 対象: `https://www.siroca.co.jp/`, `/product/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **灰色の地に白い面を浮かべ、日本語を大きく空けて置く。** ページ背景が `#ffffff` ではなく **`#e4e4e4`** で、カードだけが白く抜ける。文字は細く（300）、字間は広く（0.1〜0.2em）
- **密度**: 低い。製品写真を大きく見せ、ラベルは 10〜14px に抑える
- **キーワード**: 灰色の地、字空け 0.2em、Light 基調、水色のアクセント、896px の1本境界

**このサイトの核心は3つある。**

1. **日本語を詰めずに空ける。** `font-feature-settings` の宣言は CSS 全文で **0 件**（`palt` を使わない）。約物サブセット（YakuHanJP 等）も入れていない。代わりに **`letter-spacing` を `0.1em` と `0.2em` の2段階でほぼ全要素に当てる**（CSS 全文で `0.1em` が **95 回**、`0.2em` が **50 回**）。**`letter-spacing: normal` の要素はトップで 6 / 96、下層で 4 / 174 しかなく、その中身は `Previous` `Next` `Launguage` `English` といった英語ラベルだけ**。「**日本語は必ず空ける、英語は触らない**」という明確なルール
2. **ページの地色が `#e4e4e4`。** `body` に直接書かれており、実測で **289 要素**がこの色の上に乗る。白地のサイトとして実装すると別物になる
3. **`Noto Serif JP` を4ウェイト読み込んでいるのに、1文字も使っていない。** CSS 全文に `font-family: 'Noto Serif JP'` が **496 回**（`@font-face` のサブセット定義）あるが、`document.fonts` では **400 / 500 / 600 / 700 のすべてが `unloaded`**、実測の可視要素も **0**。**明朝のサイトではない**

**ルートは `10px`（`html { font-size: 62.5% }` 相当）で全幅固定。** ただし **`body` は 896px を境に `16px` → `10px` に切り替わる**（8章参照）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **siroca Blue** | **`#11ade6`** | **可視 5 要素**（「プレスリリース」バッジ、パンくず、カテゴリのリンク）。CSS 全文で **26 回**。このサイトの主アクセント |
| **siroca Blue Dark** | **`#0098d5`** | ヘッダーの「オンラインストア」「法人様向けページ」ボタンの面（可視 2 要素）。CSS 全文で **10 回** |
| **Indicator Blue** | `#0faee8` | カルーセルの選択中インジケータ（可視 2 要素） |

> **水色が3つある。** `#11ade6`（リンク・バッジ）、`#0098d5`（ボタンの面）、`#0faee8`（インジケータ）。**どれも「siroca の水色」だが値が違う。** 新規実装では `#11ade6` を基準にしてよいが、**既存ページと並べるときは3つあることを前提にする**（`#0098d5` に丸めるとヘッダーのボタンだけ浮く）。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し・ナビ。**可視 87 / 163 要素**。**このサイトは本文に純黒を使う**
- **Text on Dark** (`#ffffff`): 水色の面・写真の上のテキスト（可視 2 / 4 要素）
- **Text Muted** (`#a5a5a5`): 日付（可視 1 要素）
- **Text Secondary** (`#707070`): 補足文（可視 1 要素）
- **Background** (`#e4e4e4`): **ページ背景**。`body` 直指定。実測 **289 要素**。CSS 全文で 15 回
- **Surface（カード）** (`#ffffff`): 白いカード。**地色との差で面を作る**
- **Surface（ヘッダー）** (`#f2f2f2`): お知らせ帯・ヘッダー（可視 2 要素。CSS 全文で 7 回）
- **Surface（カテゴリチップ）** (`#eef2f3`): 製品カテゴリのチップ（可視 4 要素）
- **Indicator（非選択）** (`#cccccc`): カルーセルのドット（可視 15 要素）

> **`body` の CSS は `color: #40464d`（濃い灰青）と書いてあるが、実測の本文色は `#000000`。** CSS 全文で `#40464d` は **1 回**しか出てこず、各要素が黒で上書きしている。**`#40464d` を本文色として採用しないこと。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**。**可視 87 / 173 要素**。self-host（`@font-face` を `unicode-range` で **1017 件**に分割したサブセット配信）。**300 / 400 / 500 / 700 の4本すべてが `loaded`**
- **明朝体（宣言のみ・実質未使用）**: `"ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", 游明朝, YuMincho, HG明朝E, "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif` が **可視 1 要素**（トップの「毎日がちょっと特別に。」28px）。**OS ローカルの明朝で、Web フォントではない**
- **読み込んでいるが使っていない**: **`Noto Serif JP`**（400 / 500 / 600 / 700 の4本。`document.fonts` で **全部 `unloaded`**、可視 **0 要素**）

### 3.2 欧文フォント

- **サンセリフ（日付・年号）**: **Montserrat**。可視 6 要素。**`@font-face` は 300 / 400 / 500 / 600 / 700 を宣言しているが、`loaded` は 300 のみ**
- 本文中の英数字は `Noto Sans JP` の欧文グリフで出る

### 3.3 font-family 指定

```css
/* 本文・見出し・ナビ すべて共通 */
font-family: "Noto Sans JP", sans-serif;

/* 日付・年号 */
font-family: "Montserrat", sans-serif;

/* トップの惹句 1 箇所のみ（OS ローカルの明朝） */
font-family: "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", 游明朝,
             YuMincho, HG明朝E, "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
```

- **`Noto Sans JP` の後ろに OS フォントを積まない。** `sans-serif` に直接落とす割り切った書き方
- **明朝は Web フォントを使わず OS ローカルに頼る。** `Noto Serif JP` を読み込んでいるのに、惹句にはヒラギノ明朝を当てている（**宣言と実装がすれ違っている**）

> **新規実装での扱い**: **`Noto Serif JP` の `@font-face` は削ってよい**（1文字も描画に使われておらず、読み込みが無駄になっている）。明朝を使うなら、**OS ローカルのヒラギノ明朝スタックをそのまま使う**のがこのサイトの流儀。

### 3.4 文字サイズ・ウェイト階層

**以下はデスクトップ（1440px / 1200px）の実測値。** 896px 以下では別の値に切り替わる（8章参照）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| **ページタイトル（下層 h2）** | Noto Sans JP | **36.5px** | **300** | 54.75px (**1.50**) | 7.3px (**0.2em**) | `/product/` の「製品情報」1 要素。**Light で大きく、最大限に空ける** |
| **ヒーロー見出し（h2）** | Noto Sans JP | 29px | 700 | 43.5px (1.50) | 2.9px (**0.1em**) | トップ |
| **惹句** | ヒラギノ明朝 | 28px | — | 54.6px (**1.95**) | — | トップ 1 要素「毎日がちょっと特別に。」 |
| **セクション見出し（h2 / h3）** | Noto Sans JP | 20px | 700 | 30px (1.50) | 4px (**0.2em**) | 5〜8 要素（「ピックアップ」「製品を探す」） |
| **サブ見出し（h4）** | Noto Sans JP | 16px | 700 | 24px (1.50) | `normal` | 「炊飯器」 |
| **本文（`body` 既定）** | Noto Sans JP | 16px | 400 | 24px (**1.50**) | `normal` | 1 要素（リード文は 1.95） |
| **グローバルナビ** | Noto Sans JP | 14px | 700 | 21px (1.50) | 2.8px (**0.2em**) | **23〜38 要素** |
| **製品カテゴリ（h2 の下）** | Noto Sans JP | 14px | 700 | 21px (1.50) | 2.8px (**0.2em**) | 「キッチン家電」 |
| **製品名・一覧ラベル** | Noto Sans JP | **10px** | 400 | 16px (**1.60**) | 1px (**0.1em**) | 下層 **107 要素で最多** |
| **カテゴリのチップ** | Noto Sans JP | 12.2px | 700 | — | 1.22px (**0.1em**) | 5 要素 |
| **お知らせ・リンク** | Noto Sans JP | 12px | 400 | 18px (1.50) | 1.2px (**0.1em**) | 10〜13 要素 |
| **パンくず・企業情報** | Noto Sans JP | 12px | 500 | 18px (1.50) | 2.4px (**0.2em**) | 4 要素 |
| **日付** | Montserrat | 12px | **300** | 18px (1.50) | 1.22〜2.44px | 5〜6 要素。色 `#a5a5a5` |

> **最も多いウェイトは 300（Light）**（トップ 44 要素 / 下層 40 要素）。次いで 700（31 / 54）、400（20 / 79）。**500 は 1 要素だけ。** 300 と 700 の対比で組む。

### 3.5 行間・字間

**字間は `em` を各要素に当てる。2段階しかない。**

- **`0.1em`**: CSS 全文で **95 回**。製品名・お知らせ・チップ・日付など、**小さい文字**
- **`0.2em`**: CSS 全文で **50 回**。ナビ・セクション見出し・ページタイトルなど、**見せる文字**
- 例外: `0.14em`（8回）、`0.06em` / `0.05em`（各 2回）、`0.15em` / `0.075em` / `0.01em`（各 1回）
- **`letter-spacing: normal` は英語ラベルだけ**（`Previous` `Next` `Launguage` `English` `Chinese (Simplified)`）。実測でトップ 6 / 96 要素、下層 4 / 174 要素

**行間は `1.50` が支配的**（実測 87 / 103 要素）。`body { line-height: 24px }`（= 16px × 1.5）が絶対値として降りる。

- 製品一覧の行間は **1.60**（下層 70 要素）
- リード文だけ **1.95**（1 要素）

```css
/* body */
font-family: "Noto Sans JP", sans-serif;
font-size: 1.6rem;       /* = 16px（ルート 10px） */
line-height: 24px;       /* = 1.5 */
letter-spacing: normal;  /* 子要素で個別に当てる */
background: #e4e4e4;

/* グローバルナビ・セクション見出し */
letter-spacing: .2em;
line-height: 1.5;

/* 製品名・一覧ラベル */
font-size: 1rem;         /* = 10px */
letter-spacing: .1em;
line-height: 1.6;
```

> **`body` の `line-height` は `24px` という絶対値で書かれている。** 子要素で `font-size` を変えても行間は 24px のまま降りるので、**小さいラベル（10px）には個別に `line-height: 1.6` を当て直している**。**単位なしの `1.5` に書き換えると別物になる。**

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;     /* CSS 全文で 3 回 */
word-break: break-word;    /* 4 回 */
word-break: normal;        /* 2 回 */
```

- **`word-break: auto-phrase` は使っていない**
- 製品名は HTML 側で改行を入れている（`コーン式全自動コーヒーメーカー` など長い名前がそのまま折り返す）

### 3.7 OpenType 機能

```css
/* このサイトは font-feature-settings を一切書かない */
```

- **`palt` を使わない**（CSS 全文で `font-feature-settings` の宣言 **0 件** / 実測 0 要素）
- **約物サブセットフォント（YakuHanJP 等）も入れていない**
- **つまり約物は詰まらない。** 鉤括弧や中黒の前後には全角分の空きがそのまま残る。**この「詰めない」状態の上に `letter-spacing: .2em` を重ねるのが、このサイトの字面の作り方**

> **`palt` を足さないこと。** 足すと約物が詰まり、`0.2em` の字空けと喧嘩して字面がちぐはぐになる。

### 3.8 縦書き

使用しない（実測 `writing-mode: vertical-rl` の要素 **0 件**）。

### 3.9 ウェイトの落とし穴

- **`@font-face` は 300 / 400 / 500 / 700 の4本**（Noto Sans JP、すべて `loaded`）
- **CTA の1つに `font-weight: 900` が当たっている**（ヘッダーの「法人様向けページ」16px / `letter-spacing: 3.2px`）。**900 の `@font-face` は無いので、ブラウザの合成太字で出る**
- **Montserrat は 300 だけが `loaded`。** CSS が 400 / 500 / 600 / 700 を当てても、実体が無いので合成になる

> **新規実装での扱い**: **300 / 400 / 700 の3段で組む。** 900 は使わない（合成太字で字形が崩れる）。Montserrat は 300 だけを前提にする。

---

## 4. Component Stylings

### Buttons

**Primary（ヘッダーの水色ボタン）**
- Background: `#0098d5`
- Text: `#ffffff`
- Border Radius: **`0px`**
- Padding: `15px 10px 17px 43px`（**左にアイコン分の 43px**）
- Font Size: 12px / Weight: 700 / Letter Spacing: `1.2px`（= `.1em`）

**Primary（強調・角丸）**
- Background: `#11ade6`
- Text: `#ffffff`
- Border Radius: **`8px`**
- Padding: `32px 10px 34px 58px`
- Font Size: 16px / Weight: **900**（合成太字）/ Letter Spacing: `3.2px`（= `.2em`）

**Outlined（バッジ）**
- Background: `transparent`
- Text / Border: `1px solid #11ade6`
- Border Radius: **`10px`**
- Padding: `8px`
- Font Size: 12.2px / Weight: 700 / Letter Spacing: `1.22px`（= `.1em`）

### Chips（製品カテゴリ）

- Background: `#eef2f3`
- Text: `#11ade6`
- Border Radius: `8px`
- Padding: `9px 9px 12px`
- Font Size: 12.2px / Weight: 700 / Letter Spacing: `.1em`

### Cards

- Background: `#ffffff`（地色 `#e4e4e4` との差で浮かせる）
- Border: なし
- Border Radius: **`8px`**
- Shadow: **なし**
- Padding: `20px 15px 20px 20px`
- 見出しは 18px / 400 / `letter-spacing: 3.6px`（= `.2em`）

### Carousel Indicator

- Background: `#cccccc`（非選択）/ `#0faee8`（選択）
- Border Radius: `50%`

---

## 5. Layout Principles

### Container

- **Max Width: `1200px`**（実測 5〜8 要素で最多）
- 補助的に `1320px`（1 要素）/ `600px`（1 要素）

### Grid

- **`gap` を使っていない**（実測 `gaps: []`）。`margin` で組む
- 製品一覧は写真 ＋ 10px のラベルを格子に並べる

### Spacing

- トークン化された余白スケールは無い（**自社の CSS Custom Properties は 0 個**。実測で検出された 3 個は WordPress admin bar 由来）
- ボタンの `padding` は左右非対称（`15px 10px 17px 43px`）。**アイコンの分を左に確保する書き方**

---

## 6. Depth & Elevation

**影を一切使わない。** 実測で `box-shadow` を持つ要素は **両ページとも 0 種 / 0 要素**。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **すべての要素** |

> **面の区別は地色 `#e4e4e4` とカードの `#ffffff` の差でつける。** これがこのサイトが地色を白にしなかった理由で、**影を足すと設計の意図が二重になる。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **ページ背景は `#e4e4e4`、カードは `#ffffff`。** 影ではなく明度差で面を立てる
- **`letter-spacing` は `.1em`（小さい文字）と `.2em`（見せる文字）の2段階**で当てる
- **英語ラベルには `letter-spacing` を当てない**（`normal` のまま）
- **`font-family: "Noto Sans JP", sans-serif`。** OS フォントを後ろに積まない
- **ウェイトは 300 / 400 / 700 の3段。** Light（300）を主役に使う
- **行間は 1.5。** 小さいラベルには `1.6` を当て直す
- **角丸は `8px`**（バッジ `10px`、インジケータ `50%`、ヘッダーのボタンは `0px`）
- 明朝を使うなら **OS ローカルのヒラギノ明朝スタック**

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない**（実測 0 件。字空けと喧嘩する）
- **約物サブセットフォント（YakuHanJP 等）を足さない**
- **`Noto Serif JP` を使わない**（4ウェイト読み込んでいるが実測 0 要素。**むしろ `@font-face` を削るべき**）
- **`font-weight: 900` を当てない**（`@font-face` が無く合成太字になる）
- **`body` の `color: #40464d` を本文色として採用しない**（実測の本文は `#000000`）
- **影を足さない**（実測 0 種）
- **`body` の `line-height: 24px` を単位なしの `1.5` に書き換えない**（絶対値として子へ降りる設計）
- CSS Custom Properties を前提にしない（**自社トークン 0 個**）

### 実サイトの誤記

- **言語切替のラベルが `Launguage`**（`<p class="country_select-text">Launguage</p>`）。正しくは `Language`。**サイト自身のマークアップにある誤記**なので、複製するときは直すこと

---

## 8. Responsive Behavior

### Breakpoints

**境界は 896px の1本が主。**

| Name | Query | 実測（CSS 全文の出現） |
|------|-------|------|
| Mobile / Tablet | `(max-width: 896px)` | **57〜58 回** |
| Desktop | `(min-width: 897px) and (max-width: 1280px)` | 4〜5 回 |
| 補助 | `(max-width: 374px)` | 3 回 |
| WordPress | `(min-width: 782px)` / `(min-width: 600px)` | 4 / 3 回 |
| モーション | `(prefers-reduced-motion: reduce)` | 2 回 |

### 896px を境に `body` ごと切り替わる（重要）

**ルート（`html`）は全幅 `10px` で固定だが、`body` の `font-size` と `line-height` が 896px で切り替わる。** 見出しやナビは**サイズだけでなくウェイトも変わる**。

| 画面幅 | `html` | `body` | グローバルナビ | h2 |
|---|---|---|---|---|
| 1440px | 10px | **16px / lh 24px** | 12px / **400** / ls 1.2px | **29px** / 700 / ls 2.9px |
| 1200px | 10px | **16px / lh 24px** | 12px / **400** / ls 1.2px | **29px** / 700 / ls 2.9px |
| 834px | 10px | **10px / lh 15px** | 10px / **300** / ls 1px | **15px** / 700 / ls 1.5px |
| 375px | 10px | **10px / lh 15px** | 10px / **300** / ls 1px | **15px** / 700 / ls 1.5px |

- **字間は `em` 宣言なので比率で追従する**（ナビの `1.2px` → `1px` はどちらも `.1em`、h2 の `2.9px` → `1.5px` はどちらも `.1em`）。**字間を `px` に読み替えて固定するとモバイルで崩れる**
- **ナビのウェイトが 400 → 300 に落ちる。** モバイルでより細くなる
- **1回の計測を「このサイトの文字サイズ」と書かないこと**

### タッチターゲット

- モバイルのナビは 10px / `line-height: 15px` と小さい。**`padding` で 44px を確保する**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color:    #000000
Background:    #e4e4e4  ← 白ではない
Surface:       #ffffff（カード）/ #f2f2f2（ヘッダー）/ #eef2f3（チップ）
Primary:       #11ade6（リンク・バッジ）/ #0098d5（ボタンの面）
Font:          "Noto Sans JP", sans-serif
Font (日付):   "Montserrat", sans-serif（300 のみ）
Root Size:     10px（全幅固定）
Body Size:     16px / lh 24px（>896px）→ 10px / lh 15px（≤896px）
Line Height:   1.5（本文）/ 1.6（小さいラベル）
Letter Spacing: .1em（小さい文字）/ .2em（見せる文字）/ normal（英語ラベル）
Weights:       300 / 400 / 700  ← 900 は使わない
Container:     1200px
Radius:        8px（カード）/ 10px（バッジ）/ 0px（ヘッダーのボタン）
Shadow:        なし
palt:          使わない
```

### プロンプト例

```
siroca のデザインシステムに従って、製品一覧セクションを作成してください。

- ページ背景は #e4e4e4（白ではない）、カードは #ffffff / border-radius: 8px / 影なし
- font-family は "Noto Sans JP", sans-serif のみ（OS フォントを後ろに積まない）
- font-feature-settings: "palt" は書かない。約物サブセットも入れない
- letter-spacing は 2段階だけ:
    見せる文字（ナビ・セクション見出し・ページタイトル）→ .2em
    小さい文字（製品名・お知らせ・チップ・日付）      → .1em
    英語ラベル（Previous / Next / English）           → normal
- セクション見出しは 20px / font-weight: 700 / line-height: 1.5 / letter-spacing: .2em
- ページタイトルは 36.5px / font-weight: 300（Light）/ line-height: 1.5 / letter-spacing: .2em
- 製品名は 10px / font-weight: 400 / line-height: 1.6 / letter-spacing: .1em
- カテゴリのチップは #eef2f3 の面に #11ade6 の文字、border-radius: 8px、
  12.2px / 700 / letter-spacing: .1em
- 本文の色は #000000（body の CSS にある #40464d は使わない）
- font-weight は 300 / 400 / 700 のみ（900 は合成太字になるので使わない）
- コンテナは max-width: 1200px、ブレークポイントは 896px
  896px 以下では body が 10px / line-height: 15px に切り替わる
```
