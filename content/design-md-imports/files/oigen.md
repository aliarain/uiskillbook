# DESIGN.md — 及源鋳造（OIGEN）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-27 / 対象: `https://oigen.jp/`, `/pages/quality`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **見出しは明朝（Zen Old Mincho 600）、本文はゴシック（Zen Kaku Gothic New 400）。** 本文を **13px** まで落とし、字間 `0.02em` を body から px で継承させる。南部鉄器の道具屋
- **密度**: 高い。EC の商品グリッドだが、`--text-base: 0.8125rem`（13px）と小さく、余白は `--spacing-*` スケールで大きく取る
- **キーワード**: 明朝見出し、13px 本文、ピル型 CTA、影ゼロ、鉄のグレー `#4b4b4b`

**このサイトの核心は5つある。**

1. **和文2書体の役割分担。** 見出し＝**Zen Old Mincho 600**（実測 120 要素 / 2 ページ）、本文・UI＝**Zen Kaku Gothic New 400・700**（実測 275 要素）。**明朝は「商品名と見出し」、ゴシックは「読ませる文と操作」**という切り分けが全ページで一貫している
2. **本文が 13px。** `--text-base: 0.8125rem`。実測でも 13px が 249 要素（2 ページ合計）で最多。**16px 前提で実装すると別サイトになる**
3. **字間は body に 1 回だけ（`0.02em`）。子は px を継承する。** 実測 `0.26px` が 262 要素。見出しは `--heading-letter-spacing: 0.015em` を別に持つ（17.6px で `0.264px`）
4. **`--shadow-*` は 4 つ宣言されているが、すべて alpha `0.0`。** 実装上は**影が存在しない**。輪郭は `box-shadow: 0 0 0 1px` / `0 0 0 2px inset` の**リング**で描く
5. **角丸は 0。ただしボタンだけ `60px` のピル。** `--rounded` 系は `0.0rem` だが `--rounded-button: 3.75rem`（60px）。**面は直角、押せるものだけ丸い**

> **CSS 変数 124 個は Shopify テーマ（Impact 系）の語彙で、値が及源の選択。** `--spacing-*` / `--text-h0..h6` / `--rounded-*` という命名はテーマ由来なので、**「自社設計のトークン」とは書かない**。一方で色・書体・radius・shadow の**値**は管理画面で設定されたもので、そのまま仕様として使える。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 変数 | 実装値 | 実測 |
|------|------|--------|------|
| **Iron Gray** | `--accent` / `--text-primary` / `--button-background-primary` | **`#4b4b4b`** | **文字 208 要素 / 面 101 要素**。本文・見出し・CTA の面・アイコンすべて。**このサイトは黒を使わず、鉄の色でまとめる** |
| **Footer Black** | `--footer-background` | **`#1a1a1a`** | 面 11 要素。フッターと告知バー |
| **Sale Red** | `--on-sale-text` / `--on-sale-badge-background` / `--error-text` | **`#aa2826`** | 文字 2 要素 / 面 1 要素。セール価格と「10%オフ」バッジ |
| **Badge Amber** | `--primary-badge-background` / `--star-color` | **`#ffb74a`** | おすすめバッジとレビュー星 |

### Semantic（意味的な色）

| 役割 | 変数 | 面 | 文字 |
|------|------|----|----|
| Success | `--success-*` | `#f7f7f7` | `#bebdb9` |
| Warning | `--warning-*` | `#f3efea` | `#9f7b4c` |
| Error / On Sale | `--error-*` | `#f5e5e5` | `#aa2826` |
| Sold Out | `--sold-out-badge-*` | `#bebdb9` | `#000000` |

### Neutral（ニュートラル）

- **Text Primary** (`#4b4b4b`): 本文・見出し。`--text-primary: 75 75 75`
- **Text Muted** (`rgba(75,75,75,.7)`): 価格の取り消し線、補足（可視 34 要素）
- **Text on Dark** (`#f2f2f2`): フッター見出し。`--footer-text`
- **Text on Dark Muted** (`rgba(242,242,242,.7)`): フッターのリンク（可視 52 要素）
- **Border** (`rgba(75,75,75,.12)`): `--border-color`。**枠は必ずこの 12% グレー**
- **Surface Subtle** (`rgba(75,75,75,.05)`): 「新商品」バッジ、記事カードの面
- **Surface Hover** (`rgba(75,75,75,.1)`): 「+ 追加」ボタンの面
- **Surface Gray** (`#f2f2f2`): WEB 会員セクションの面
- **Background** (`#ffffff`): ページ背景。`--background-primary: 255 255 255`（根拠 `body`）
- **Newsletter Gradient**: `linear-gradient(0deg, #7b684f, #1a1a1a 100%)` — メルマガ登録帯のみ。**唯一のグラデーション**

> **色は `R G B` の3数値で持ち、`rgb(var(--x) / α)` で使う形式。** hex に直して書いても見た目は同じだが、実サイトの変数を引き写すときはこの形式であることを前提にする。

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（見出し）**: **Zen Old Mincho** / weight **600**。`--heading-font-family`
- **ゴシック体（本文・UI）**: **Zen Kaku Gothic New** / weight **400**（太字 700）。`--text-font-family`

### 3.2 欧文フォント

- **専用の欧文フォントを持たない。** `news` `features products` `learn more` といった英字見出しも **Zen Old Mincho / Zen Kaku Gothic New の欧文グリフ**をそのまま使う
- 価格の数字も同様（`セール価格¥9,350` は 17px / Zen Kaku Gothic New）

### 3.3 font-family 指定

```css
/* 見出し */
font-family: "Zen Old Mincho", serif;
font-weight: 600;
letter-spacing: 0.015em;

/* 本文・UI */
font-family: "Zen Kaku Gothic New", sans-serif;
font-weight: 400;
letter-spacing: 0.02em;
```

**フォールバックの考え方**:
- **generic family（`serif` / `sans-serif`）しか後ろに置かない。** ローカルの和文書体名を並べない割り切り
- Web フォントが落ちた場合は OS の既定明朝／既定ゴシックに落ちる。**再現実装でも `"Hiragino Mincho ProN"` 等を足さない**（実サイトと違う見えになる）

### 3.4 Web フォントの実際

Shopify Fonts（`oigen.jp/cdn/fonts/`）から **3 ファイルだけ**配信している。

| ファミリー | 配信ファイル | `document.fonts` |
|---|---|---|
| Zen Old Mincho | `zenoldmincho_n6.woff2` | **600 `loaded`** |
| Zen Kaku Gothic New | `zenkakugothicnew_n4.woff2` | **400 `loaded`** |
| Zen Kaku Gothic New | `zenkakugothicnew_n7.woff2` | **700 `loaded`** |

> **`font-weight: 900` を当てている要素が 3 つあるが、900 の実体は配信されていない。** トップの `食材にこだわるなら、道具にもこだわりを` など。**これは合成太字（フェイクボールド）で出ている**。再現実装では 700 に寄せるか、そもそも 900 を使わない。
> 同様に **500・800 も実体が無い**。使えるのは **400 / 600（明朝のみ）/ 700** の3つだけ。

### 3.5 文字サイズ・ウェイト階層

| Role | 変数 | 宣言 | 実測 | Font | Weight | Line Height | Letter Spacing |
|------|------|------|------|------|--------|-------------|----------------|
| Hero / H0 | `--text-h0` | `2.6rem` | 41.6px | Zen Old Mincho | 600 | 1.0 | 0.624px（0.015em） |
| H1 | `--text-h1` | `2.3rem` | 36.8px | Zen Old Mincho | 600 | 1.1 | 0.552px |
| H2 | `--text-h2` | `1.9rem` | 30.4px | Zen Old Mincho | 600 | 1.1 | 0.456px |
| H3 | `--text-h3` | `1.6rem` | 25.6px | Zen Old Mincho | 600 | 1.2 | 0.384px |
| H4 | `--text-h4` | `1.3rem` | 20.8px | Zen Old Mincho | 600 | 1.3 | 0.312px |
| H5 | `--text-h5` | `1.1rem` | 17.6px | Zen Old Mincho | 600 | 1.4 | 0.264px |
| H6 | `--text-h6` | `0.7rem` | 11.2px | Zen Kaku Gothic New | 700 | 1.6 | 0.168px |
| Large | `--text-lg` | `1.0625rem` | 17px | Zen Kaku Gothic New | 400/700 | 1.6 | 0.34px |
| **Body** | `--text-base` | **`0.8125rem`** | **13px** | Zen Kaku Gothic New | 400 | **1.6** | **0.26px** |
| Small | `--text-sm` | `0.75rem` | 12px | Zen Kaku Gothic New | 400 | 1.6 | 0.24px |
| XSmall | `--text-xs` | `0.6875rem` | 11px | Zen Kaku Gothic New | 700 | 1.6 | 0.22px |

- ルートは `html { font-size: 16px }`（既定）。**`body` が 13px** に落ちているのがこのサイトの骨格
- 実測の最頻サイズ: **13px 249 要素** / 17.6px 72 要素 / 30.4px 17 要素

### 3.6 行間・字間

- **本文の行間**: **1.6**（実測 257 要素で圧倒的多数。13px × 1.6 = 20.8px）
- **見出しの行間**: **1.0〜1.4**（H0 が 1.0、H5 が 1.4）。**サイズが大きいほど詰める**
- **本文の字間**: **`0.02em`**。**body に 1 回だけ書き、子は `0.26px` を継承する**（実測 262 要素）
- **見出しの字間**: **`0.015em`**。こちらも px として継承される（17.6px → `0.264px`）

**ガイドライン**:
- **子要素で `letter-spacing` を em で再宣言しない。** body の px が継承されている前提で組まれているので、見出しに `0.02em` を書き足すと**サイズに比例して広がり、実サイトと別物になる**
- 見出しの行間を 1.6 にしない。**明朝の大きい見出しは `line-height: 1.0〜1.2` で詰める**のがこのサイトの見え

### 3.7 OpenType 機能

```css
/* このサイトは font-feature-settings を 1 要素も使っていない */
```

- **`palt` は 0 件**。約物の詰めもサブセットフォントも使わない
- 約物が空くのを嫌う場合でも、**このサイトの再現では `palt` を足さない**（見出しの明朝は `0.015em` の字間込みで設計されている）

### 3.8 縦書き

```css
/* CSS の writing-mode は 2 ページで 0 要素 */
```

> **トップのヒーローに見える大きな縦組み（`十一年後も、その先も、この鉄フライパンで。`）は CSS の縦組みではなく、JPG に焼き込まれた文字。** ヒーローは Shopify の `x-slideshow` で、スライドは `top_main_2026fryingpan_pc.jpg` などの 1600px 幅ビットマップ 4 枚。
> **「このサイトは縦組みを使っている」と実装指示に書いてはいけない。** 縦組みの見えが必要なら画像として用意するのが実サイトの方法。

---

## 4. Component Stylings

### Buttons

**すべて `border-radius: 60px` のピル型。** 面色は `#4b4b4b`（黒ではない）。

**Primary / XL**
- Background: `#4b4b4b`
- Text: `#ffffff`
- Padding: `17.2px 40px`
- Border Radius: **`60px`**
- Font Size: `13px` / Weight: **700**

**Primary / LG**
- Background: `#4b4b4b`
- Text: `#ffffff`
- Padding: `14px 32px`
- Border Radius: `60px`
- Font Size: `13px` / Weight: 700

**Outline**
- Background: `transparent`
- Text: `#4b4b4b`（暗い面の上では `#ffffff`）
- **枠は `border` ではなく `box-shadow: 0 0 0 2px inset`**
- Padding: `17.2px 40px`（XL）/ `14px 32px`（LG）
- Border Radius: `60px`

**Subdued / SM**
- Background: `rgba(75,75,75,.1)`
- Text: `#4b4b4b`
- Padding: `8px 20px`
- Font Size: `11px` / Weight: 700

**Inverse（暗い面の上）**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Padding: `17.2px 40px`

### Badges

- Border Radius: **`60px`**（ボタンと同じピル）
- Padding: `2px 8px`
- Font Size: `11px` / Weight: **700**

| 種別 | 面 | 文字 |
|------|----|----|
| On Sale | `#aa2826` | `#ffffff` |
| New | `rgba(75,75,75,.05)` | `#4b4b4b` |
| Sold Out | `#bebdb9` | `#000000` |
| Primary | `#ffb74a` | `#000000` |

### Circle Buttons（ズーム・カルーセル操作）

- Border Radius: `9999px`（`--rounded-full`）
- Fill: `#ffffff` / Text: `#4b4b4b`
- Ring: `box-shadow: rgba(75,75,75,.12) 0 0 0 1px`

### Inputs

- Border Radius: **`10px`**（`--rounded-input: 0.625rem`。**ボタンとは別の値**）
- Height: `3.125rem`（50px。`--input-height`）
- Padding (inline): `1.25rem`（20px。`--input-padding-inline`）
- Gap: `1rem`（`--input-gap`）
- Border: `1px solid rgba(75,75,75,.12)`

### Cards

- Background: `#ffffff`（`--product-card-background` は `0 0 0` だが**実際の商品カードは面を持たない**）
- Text: `#4b4b4b`
- Border Radius: **`0`**
- Shadow: **none**
- 記事カードの面は `rgba(75,75,75,.05)`

### Links

- 下線なし。`reversed-link` クラスでホバー時に下線が**右から左へ**引かれる
- 色は本文と同じ `#4b4b4b`（**リンク色を持たない**）

---

## 5. Layout Principles

### Spacing Scale

`--spacing-0-5` 〜 `--spacing-96` の **40 段**。`0.25rem`（4px）刻みで、`12` 以降は飛び飛びになる。

| Token | Value | px |
|-------|-------|-----|
| `--spacing-1` | `0.25rem` | 4 |
| `--spacing-2` | `0.5rem` | 8 |
| `--spacing-4` | `1rem` | 16 |
| `--spacing-6` | `1.5rem` | 24 |
| `--spacing-8` | `2rem` | 32 |
| `--spacing-12` | `3rem` | 48 |
| `--spacing-16` | `4rem` | 64 |
| `--spacing-20` | `5rem` | 80 |
| `--spacing-28` | `7rem` | 112 |
| `--spacing-96` | `24rem` | 384 |

### Container

| 変数 | 値 |
|------|-----|
| `--container-max-width` | **`1300px`** |
| `--container-narrow-max-width` | `1050px` |
| `--container-gutter` | `3rem`（48px） |

実測の本文カラム幅は **650px / 780px**（読み物）、商品グリッドは 1300px。

### Section Spacing

| 変数 | 値 |
|------|-----|
| `--section-outer-spacing-block` | `7rem`（112px） |
| `--section-inner-max-spacing-block` | `5rem`（80px） |
| `--section-inner-spacing-inline` | `5rem` |
| `--section-stack-spacing-block` | `3rem`（48px） |

### Grid / Gap

| 変数 | 値 |
|------|-----|
| `--grid-gutter` | `1.5rem`（24px） |
| `--product-list-row-gap` | `3rem`（48px） |
| `--product-list-column-gap` | `1.5rem`（24px） |

実測の `gap` 最頻値: **24px**（35 要素）/ 48px（18）/ 16px（23）/ `48px 80px`（14）/ 32px（9）。

---

## 6. Depth & Elevation

| 変数 | 宣言値 | 実装上の見え |
|------|--------|------------|
| `--shadow-sm` | `0 2px 8px rgb(75 75 75 / 0.0)` | **透明。見えない** |
| `--shadow` | `0 5px 15px rgb(75 75 75 / 0.0)` | **透明。見えない** |
| `--shadow-md` | `0 5px 30px rgb(75 75 75 / 0.0)` | **透明。見えない** |
| `--shadow-block` | `0px 0px 0px rgb(75 75 75 / 0.0)` | **透明。見えない** |

> **影は「宣言されているが alpha が 0」。** テーマが影を提供しているのに、及源は全部 0 にしている。**このサイトに影は存在しない**と読むのが正しい。

実測で `box-shadow` として現れるのは、**影ではなくリング（枠線の代用）**の 3 種類だけ。

| 実測値 | 出現 | 用途 |
|--------|------|------|
| `rgba(75,75,75,.12) 0 0 0 1px` | 7 | 円形ボタンの枠 |
| `rgb(255,255,255) 0 0 0 2px inset` | 3 | 暗い面の上のアウトラインボタン |
| `rgb(75,75,75) 0 0 0 2px inset` | 1 | 明るい面の上のアウトラインボタン |

- **奥行きは影ではなく、`rgba(75,75,75,.12)` の 1px リングと `rgba(75,75,75,.05)` の淡い面で作る**

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは **Zen Old Mincho 600**、本文は **Zen Kaku Gothic New 400** に分ける
- **本文は 13px**（`--text-base: 0.8125rem`）
- `letter-spacing` は **body に `0.02em` を 1 回だけ**書き、子には継承させる
- 見出しの `line-height` は **1.0〜1.4**（サイズが大きいほど詰める）
- **ボタンは `border-radius: 60px` のピル**。それ以外の面は `0`
- 入力欄だけ `border-radius: 10px`
- 枠は `rgba(75,75,75,.12)` で引く
- 文字色は `#4b4b4b`

### Don't（禁止）

- **`#000000` を本文に使わない**（`#4b4b4b` が本文色。`#1a1a1a` はフッター面だけ）
- **`box-shadow` で浮かせない。** 影は全部 alpha 0 で宣言されている
- **`font-weight: 900` / `800` / `500` を使わない**（実体が配信されておらず合成太字になる）
- **`font-family` にローカルの和文書体名を足さない**（実サイトは generic のみ）
- **縦組み（`writing-mode: vertical-rl`）を実装しない。** ヒーローの縦組みは画像
- 子要素で `letter-spacing` を em 単位で再宣言しない
- 本文を 16px に上げない（このサイトの密度が崩れる）
- `palt` を足さない
- 商品カードに `border-radius` を付けない

---

## 8. Responsive Behavior

### Breakpoints

実装は **min-width 主体（モバイルファースト）**。段数が多い。

| Query | 出現回数 | 説明 |
|-------|---------|------|
| `screen and (min-width: 700px)` | **123** | タブレット。主要な切り替え点 |
| `screen and (min-width: 1150px)` | 47 | 小型デスクトップ |
| `screen and (min-width: 1000px)` | 37 | ナビの展開 |
| `screen and (min-width: 1400px)` | 33 | ワイド |
| `screen and (min-width: 1600px)` | 11 | 超ワイド |
| `screen and (min-width: 1800px)` | 5 | 最大 |
| `screen and (max-width: 699px)` | 10 | モバイル専用の打ち消し |
| `screen and (pointer: fine)` | 21 | **ホバー演出はマウス環境だけ** |
| `(prefers-reduced-motion: no-preference)` | 4 | アニメーションの出し分け |

> **`pointer: fine` で 21 件も分岐している。** `reversed-link` の下線アニメーションやカスタムカーソルは**タッチ環境では出さない**設計。再現実装でもホバー演出は `@media (pointer: fine)` で囲む。

### スティッキー

- `--sticky-announcement-bar-enabled: 1` / `--sticky-header-enabled: 1`
- `--sticky-area-height: calc(1 * 49px + 1 * 73px)` = **122px**（告知バー 49px ＋ ヘッダー 73px）

### タッチターゲット

- ボタンの padding は `14px 32px` 以上。`--input-height: 50px`

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Iron Gray:     #4b4b4b   （本文・見出し・CTA の面。黒は使わない）
Footer Black:  #1a1a1a
Sale Red:      #aa2826
Badge Amber:   #ffb74a
Border:        rgba(75,75,75,.12)
Surface:       rgba(75,75,75,.05)
Text on Dark:  #f2f2f2 / rgba(242,242,242,.7)
Background:    #ffffff

Font (見出し): "Zen Old Mincho", serif / 600 / letter-spacing .015em
Font (本文):   "Zen Kaku Gothic New", sans-serif / 400 / letter-spacing .02em

Body Size:   13px (0.8125rem)   Line Height: 1.6
Heading LH:  1.0〜1.4（大きいほど詰める）
Radius: ボタン 60px / 入力欄 10px / それ以外 0
Shadow: none（宣言はあるが alpha 0）
Container: 1300px（読み物 650〜780px）
Weights: 400 / 600（明朝のみ）/ 700
```

### プロンプト例

```
及源鋳造（OIGEN）のデザインシステムに従って、商品一覧ページを作成してください。

- 商品名と見出しは "Zen Old Mincho", serif / weight 600 / letter-spacing .015em
- 本文・価格・UI は "Zen Kaku Gothic New", sans-serif / weight 400
- body に font-size: 13px / line-height: 1.6 / letter-spacing: .02em を書き、
  子要素では letter-spacing を再宣言しない
- 見出しの line-height は 1.1（30.4px）まで詰める
- CTA は background #4b4b4b / color #ffffff / padding 14px 32px / border-radius 60px /
  font-size 13px / font-weight 700
- アウトラインボタンは border ではなく box-shadow: 0 0 0 2px inset で描く
- 商品カードは border-radius 0、box-shadow なし
- セールバッジは面 #aa2826 / 文字 #ffffff / 11px / 700 / radius 60px
- 枠線は rgba(75,75,75,.12)、淡い面は rgba(75,75,75,.05)
- コンテナは max-width 1300px、グリッドの gap は 24px
- font-weight 900 は使わない（実体が無く合成太字になる）
```
