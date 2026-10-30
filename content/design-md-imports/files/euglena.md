# DESIGN.md — ユーグレナ（euglena）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-07 / 対象: `https://euglena.jp/`, `/companyinfo/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Web フォントを 1 本も読み込まない。** OS に入っている游ゴシックとシステム書体だけで組み、画になる部分（ヒーローの欧文ロゴタイプ・波形のマスク）は画像に逃がす
- **密度**: 中。波形で切り抜いた写真を敷き詰めるビジュアル先行の構成。文字は補足に徹していて、本文の塊は少ない
- **キーワード**: Web フォント 0 本、游ゴシック、ターコイズ＋ピンク、`line-height: 1`、角丸 24px のピル

**このサイトの核心は4つある。**

1. **Web フォントを一切使わない。** 実測で **フォントファイルの要求が 0 件**。`document.fonts` に載っているのは下層の `swiper-icons`（`unloaded`）だけで、トップは **`@font-face` が 1 つも無い**。游ゴシック／ヒラギノ／Segoe UI といった OS ローカル書体で組むこと自体が設計
2. **Windows の游ゴシック問題を「スタック順」だけで解いている。** `@font-face` による別名定義も上書きもせず、**`游ゴシック体, YuGothic` の次に `"游ゴシック Medium", "Yu Gothic Medium"` を置く**。macOS は 1〜2 番目（Regular）、Windows は 3〜4 番目（Medium）が当たる
3. **`body` の `line-height` が `1`。** 行間はブロックごとに明示的に与える設計で、本文 `1.75`、カード見出し `1.42`、リード `1.8` と使い分ける。**「何も指定しない要素は行間ゼロ詰め」**という前提で組まれている
4. **ウェイトは 400 と 700 の2段だけ。** 実測で `font-weight` は 400（97 要素）と 700（85 要素）しか出ない。500 や 600 は存在しない

**CSS Custom Properties は実質ゼロ**（トップ 0 個、下層 2 個は Swiper の既定値）。**デザイントークンという層を持たない**サイト。

> **ヒーローの `Sustainability First` は画像。** スクリーンショットに写っている Didone 系の大きな欧文セリフは、DOM 上にテキストとして存在しない（`distributions.fontFamily` にセリフ体が 1 要素も出ない）。`.sbtimg` クラスの要素が画像置換の代替テキストを持っているだけ。**実装するときにセリフ体を Web フォントで足さないこと。**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Euglena Green** | **`#009E8A`** | **可視 34 要素（トップ）/ 16 要素（下層）**。リンク文字、`お問い合わせ` ボタンの面、見出し、枠線ピルの枠と文字 |
| **Euglena Pink** | **`#EE8AAA`** | `公式通販` ボタンの面、ヘッダー最上部の帯（`header::before`）、`公式オンラインショップへ` の枠線ピル |
| **Consent Green** | `#009279` | Cookie 同意バーの `同意する` のみ。`#009E8A` よりわずかに暗い |

> **ターコイズとピンクの 2 色構成。** ピンクは **通販（EC）導線にだけ**使われ、コーポレート側の導線はすべてターコイズ。**役割で色を分けている**ので、ピンクを汎用のアクセントに流用しないこと。

### Neutral（ニュートラル）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Text Primary** | **`#000000`** | **可視 143 要素**。**このサイトは本文に純黒を使う** |
| **Text on Dark** | `#FFFFFF` | 面の上の文字（3〜4 要素） |
| **Text Muted** | `#929292` | パンくずの `TOP`（下層・2 要素） |
| **CMP Text** | `#333333` | Cookie 同意バーのみ。サイト本体の語彙ではない |
| **Background** | **`#FFFFFF`** | ページ背景（`pageBackground.resolved` / 根拠 `body`） |

### ヒーローの面色

- `rgb(188, 218, 210)` — ヒーローの最大面積（794,453 px²）。**波形マスクを通した写真の上に乗る半透明のターコイズ**で、トークン化された色ではない

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック体**（macOS）/ **游ゴシック Medium**（Windows）/ **ヒラギノ角ゴ**（`-apple-system` 経由）
- **明朝体**: 使用しない
- **Web フォント**: **なし**（フォントファイル要求 0 件）

### 3.2 欧文フォント

- **OS のシステム書体**をそのまま使う。macOS は SF Pro、Windows は Segoe UI、Android は Roboto
- 見出しの装飾的な欧文（`Sustainability First` など）は**画像**

### 3.3 font-family 指定

実サイトの CSS 宣言をそのまま記す。**2 本のスタックを使い分けている**。

```css
/* ① 既定（body）— 欧文を OS システム書体に寄せる */
font-family: -apple-system, BlinkMacSystemFont, Roboto,
             游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
             游ゴシック, "Yu Gothic",
             "Noto Sans CJK", "Hiragino Sans", "Segoe UI", sans-serif;

/* ② 和文優先（.def-jpfont など）— 欧文も游ゴシックのグリフで統一する */
font-family: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
             游ゴシック, "Yu Gothic",
             "Noto Sans CJK", "Hiragino Sans", sans-serif;
```

**フォールバックの考え方**:
- **Windows の游ゴシック問題を `@font-face` ではなくスタック順で解く。** Windows には `游ゴシック体` も `YuGothic`（スペース無し）も存在しないので、**3〜4 番目の `"游ゴシック Medium"` / `"Yu Gothic Medium"` が当たる**。macOS は 1 番目の `游ゴシック体`（Regular）
- **副作用として macOS は Regular、Windows は Medium になり、太さが揃わない。** 厳密に揃えたい案件では `@font-face` の別名方式（`src: local("Yu Gothic Medium")`）を使うこと
- **① の `-apple-system` / `BlinkMacSystemFont` は欧文にしか効かない。** 和文グリフを持たないのでフォールバックは文字単位で後続に落ち、和文は游ゴシックが当たる。**和文の指定が死んでいるわけではない**
- **`"Noto Sans CJK"` は実在しないファミリー名。** 正しくは `"Noto Sans CJK JP"` / `"Noto Sans JP"`。実サイトはこう書いているが、**新規実装では正しい名前にすること**

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| **Hero Lockup** | — | — | — | — | **画像**（`Sustainability First`） |
| Section Label | **46px** | 400 | — | 0.48px | `Business` `Euglena Project` `GENKI Report`。欧文のセクション名 |
| Section Heading | **28px** | **700** | **28px（1.00）** | 0.48px | `Sustainability First サステナビリティ・ファースト`。色 `#009E8A` |
| Index Heading | 30px | 400 | 30px（1.00） | 0.48px | メガメニューの `事業` `研究` `企業` |
| Sub Heading | 22px | 700 | 35.2px（1.60） | 0.48px | 下層の `ユーグレナが描く未来予想図` |
| Brand Label | 18.72px | **700** | 18.72px（1.00） | 0.48px | `ヘルスケア商品ブランド`。色 `#009E8A` |
| Card Title | 18px | 400 | 27px（**1.50**） | 0.48px | `ヘルスケア事業` 等のカード見出し |
| **Body** | **16px** | **400** | **28px（1.75）** | **0.48px** | **読み物の本文。行間を明示的に与える** |
| Lead | 16px | 400 | 32px（**2.00**） | 0.48px | `Euglena Philosophy` 周辺 |
| **UI / Nav** | **14px** | **700** | **14px（1.00）** | **0.48px** | グローバルナビ・ボタン文字。**最多（83 要素）** |
| Caption | 14px | 700 | 21px（1.50） | 0.48px | ニュースのキャプション |
| Social | 13px | 400 | 26px（2.00） | 0.48px | `X` `Facebook` `Youtube` |
| Copyright | 12px | 400 | — | 0.48px | フッター |

> **`font-weight` は 400 と 700 の 2 段だけ**（実測 400 が 97 要素 / 700 が 85 要素）。游ゴシックは Regular と Bold の 2 本なので、**500 や 600 を指定すると Windows で合成太字になる**。使わないこと。

### 3.5 行間・字間

- **`body` の `line-height` は `1`。** 行間は要素ごとに与える
- **使われている行間**: `1.00`（85 要素・最多）/ `1.42`（46）/ `1.75`（23）/ `1.50`（9）/ `1.60`（8）/ `2.00`（7）/ `1.80`（3）
- **本文の行間は `1.75`**。カード見出しは `1.42`、リードは `2.00`
- **字間は `letter-spacing: 0.03em` を `body` に 1 回だけ。** `body` が 16px なので **`0.48px`** という px 値になり、**可視 170 要素中 170 要素（下層は 107/109）にそのまま降りる**
- 字間を打ち消しているのは枠線ピル（`企業情報をみる` など）の `normal` だけ

**ガイドライン**:
- **`letter-spacing: 0.03em` は `body` に 1 回。** 子要素で `em` を再宣言しない（px 継承前提）
- **`line-height: 1` を `body` に書いたら、テキストを持つブロックには必ず行間を与える。** 与え忘れると行が密着する
- **日本語本文は `1.75` 以上**。`1.00` はナビ・ボタンのような 1 行の要素にだけ使う

### 3.6 禁則処理・改行ルール

**このサイトは `word-break` / `line-break` / `overflow-wrap` を一切宣言していない**（CSS 全文で 0 件）。ブラウザ既定のまま。

```css
/* 新規実装で足すなら */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

**`font-feature-settings` は 1 要素も使っていない**（実測 0 件）。

- **`palt` を足さないこと。** 游ゴシックの素の字送りに `letter-spacing: 0.03em` を足すだけ、というのがこのサイトの字詰め

### 3.8 縦書き

**該当なし**（`writing-mode: vertical-*` は 0 要素）。

---

## 4. Component Stylings

### Buttons

**Solid（ヘッダーの導線・2 種）**

| 種類 | 背景 | 文字 | Size / Weight | Padding | Radius |
|------|------|------|---------------|---------|--------|
| **公式通販（EC）** | **`#EE8AAA`** | `#FFFFFF` | 16px / 700 | `12px 34px 12px 10px` | **`6px`** |
| **お問い合わせ** | **`#009E8A`** | `#FFFFFF` | 14px / 700 | `12px 7.3px` | **`6px`** |

> **右側のアキが広い（34px）のはアイコン分。** 用途で色を分けている（EC＝ピンク / 問い合わせ＝ターコイズ）。

**Outline Pill（本文中の CTA・最も多い）**
- Background: `transparent`
- Text / Border: **`#009E8A`**（コーポレート導線）または **`#EE8AAA`**（EC 導線）
- Border: `1px solid`
- Border Radius: **`24px`**（ピル）
- Font: 16px / **weight 700** / **letter-spacing `normal`**
- Padding: `0`（幅と高さで形を決める）

**Carousel Dot**
- Border: `1px solid #009E8A` / Border Radius: `100%`
- 選択時のみ `background: #009E8A`
- Font: 13.3333px / Arial（**ここだけ Arial 直指定**）

### Cards

- Background: `#FFFFFF`
- Border: なし
- **Border Radius: `10px`（24 要素）/ `20px`（18 要素）/ `13px`（下層 14 要素）**
- Shadow: **`rgba(0,0,0,0.1) 1px 3px 6px`**（33 要素）

> **角丸の値が揃っていない**（10 / 13 / 20 / 24 / 100%）。トークンを持たないサイトなので、**新規実装では 10px（カード）と 24px（ピル）の 2 段に整理してよい**。

### Header

- Background: `rgba(255, 255, 255, 0.95)`（半透明の白）
- 最上部に **`#EE8AAA` の帯**（`header::before`）
- Shadow: `rgba(0,0,0,0.1) 0 3px 6px`

---

## 5. Layout Principles

### Spacing Scale

**宣言されたスケールを持たない。** 実測で繰り返し出るのは `gap: 0px 2.645%`（**％指定のカラム間**）のみ。余白は `%` と `rem`（`html` が 62.5% ＝ 10px 基準）で個別に書かれている。

### Container

- **Max Width: 1140px**（実測 8 要素。サイト全体でこの 1 値のみ）

### ルート font-size

```css
html { font-size: 62.5%; }   /* = 10px。1rem = 10px で計算する */
body { font-size: 1.6rem; }  /* = 16px */
```

- **1440 / 1200 / 834 / 375px の 4 幅で測って `html` 10px / `body` 16px は不変。** 流体タイポグラフィ（`vw` / `clamp`）は使っていない
- **`rem` の数値は「px の 1/10」として読む**（`2.8rem` = 28px）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ボタン・ピル（**CTA に影を落とさない**） |
| 1 | **`rgba(0,0,0,0.1) 1px 3px 6px`** | **カード（33 要素）。x 方向に 1px ずれる** |
| 2 | `rgba(0,0,0,0.1) 0 3px 6px` | ヘッダー（x ずれなし） |

> **影は 1 種類とヘッダー用の 1 種類だけ。** カードの `1px 3px 6px` は **x に 1px オフセットがある**のが特徴で、これを `0 3px 6px` に丸めると印象が変わる。
> 3 つ目に検出される `rgba(0,0,0,0.3) 0 -4px 10px` は **Cookie 同意バー（CMP）**のもの。

---

## 7. Do's and Don'ts

### Do（推奨）

- **Web フォントを読み込まない。** OS ローカル書体で組むのがこのサイトの設計
- **游ゴシックのスタックに `"游ゴシック Medium"` / `"Yu Gothic Medium"` を `游ゴシック体, YuGothic` の直後に置く**（Windows で Medium を当てる）
- **`letter-spacing: 0.03em` を `body` に 1 回だけ**書く（`0.48px` として px 継承される）
- **`body` に `line-height: 1` を置き、テキストブロックには必ず行間を与える**（本文 1.75 / カード見出し 1.42 / リード 2.00）
- **ウェイトは 400 と 700 の 2 段だけ**
- ターコイズ **`#009E8A`** をコーポレート導線、ピンク **`#EE8AAA`** を EC 導線に使い分ける
- 本文色は **`#000000`**（純黒）
- CTA は **`border-radius: 24px` のピル**、カードは **10px**
- カードの影は **`rgba(0,0,0,0.1) 1px 3px 6px`**（x に 1px）

### Don't（禁止）

- **ヒーローの `Sustainability First` をセリフ体の Web フォントで実装しない。** 実サイトは画像
- **`font-weight: 500` / `600` を使わない**（游ゴシックは 2 本しかなく合成太字になる）
- **`font-feature-settings: "palt"` を足さない**（実サイトは 0 要素）
- **`"Noto Sans CJK"` をそのまま書かない。** 実在しないファミリー名なので `"Noto Sans JP"` に直す
- **`line-height` を省略しない。** `body` が `1` なので、指定を忘れた要素は行が詰まる
- **ピンクをコーポレート側の CTA に使わない**（EC 導線専用）
- CSS 変数を前提にしない（サイトは実質 0 個）
- `rem` を 16px 基準で換算しない（**`html` が 62.5% なので 1rem = 10px**）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル（CSS 全文で最多・4 箇所） |
| Small Mobile | ≤ 390px | iPhone 幅の微調整 |
| Tablet | 768px〜1024px | タブレット（`min-width: 768px and max-width: 1024px`） |
| Container | ≤ 1140px | コンテナ幅で切り替える指定（2 箇所） |
| Wide | ≤ 1400px | 大画面側の調整（3 箇所） |

- **`screen and ...` を明示する古典的な記法**。ホバー判定に `(hover: hover)` を 3 箇所で使っている

### 文字サイズは固定

- 4 幅（1440 / 1200 / 834 / 375px）で測って **`html` 10px / `body` 16px / `letter-spacing` 0.48px はすべて不変**
- サイズの出し分けはメディアクエリ内の個別指定で行う

### タッチターゲット

- `公式通販`（`padding: 12px ...` ＋ 16px）で高さ 約 45px — 44px を満たす
- **`お問い合わせ` は左右の padding が `7.3px` と狭い**。モバイルでは幅を確保すること

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green: #009E8A（コーポレート導線）
Brand Pink:  #EE8AAA（EC 導線）
Text:        #000000
Background:  #FFFFFF
Font (既定): -apple-system, BlinkMacSystemFont, Roboto, 游ゴシック体, YuGothic,
             "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic",
             "Noto Sans JP", "Hiragino Sans", "Segoe UI", sans-serif
Font (和文優先): 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
                 游ゴシック, "Yu Gothic", "Noto Sans JP", "Hiragino Sans", sans-serif
html: 62.5%（1rem = 10px） / body: 1.6rem（16px）
Line Height: body は 1。本文 1.75 / カード見出し 1.42 / リード 2.00
Letter Spacing: 0.03em（body に 1 回・0.48px として px 継承）
Font Weight: 400 と 700 のみ
Border Radius: 24px（CTA ピル）/ 10px（カード）/ 6px（ヘッダーの solid ボタン）
Shadow: rgba(0,0,0,0.1) 1px 3px 6px（カード）
Container: 1140px
Web フォント: 使わない
```

### プロンプト例

```
ユーグレナのデザインシステムに従って、事業紹介ページを作成してください。
- Web フォントは読み込まない。html { font-size: 62.5% } / body { font-size: 1.6rem }
- body の font-family は -apple-system, BlinkMacSystemFont, Roboto, 游ゴシック体, YuGothic,
  "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", "Noto Sans JP",
  "Hiragino Sans", "Segoe UI", sans-serif
- body に line-height: 1 と letter-spacing: 0.03em を書き、本文には line-height: 1.75、
  カード見出しには 1.42、リードには 2.00 を明示的に与える
- font-weight は 400 と 700 だけ。500 / 600 は使わない
- font-feature-settings は使わない
- セクション見出しは 28px / weight 700 / line-height 1.00 / color #009E8A
- 本文中の CTA は transparent / 1px solid #009E8A / border-radius 24px / 16px weight 700 /
  letter-spacing normal。EC への導線だけ #EE8AAA にする
- ヘッダーの solid ボタンは #EE8AAA（通販）と #009E8A（問い合わせ）/ radius 6px
- カードは radius 10px / box-shadow rgba(0,0,0,0.1) 1px 3px 6px
- 本文色は #000000、コンテナ幅は 1140px
- 装飾的な欧文の大見出しはテキストではなく画像として扱う
```
