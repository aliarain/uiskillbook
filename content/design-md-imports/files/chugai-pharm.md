# DESIGN.md — 中外製薬（Chugai Pharmaceutical）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-11 / 対象: `https://www.chugai-pharm.co.jp/`, `/profile/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **書体を1本に絞り、字詰めと字間で階層を作る。** Noto Sans JP 以外の書体を1要素も使わない（可視 296 / 253 要素すべて）。色面も青1色＋生成りのベージュで、形ではなく文字の組み方でトーンを出している
- **密度**: 中〜高。製薬企業の情報量（IR・研究開発・サステナビリティ）を 16px カードで並べるが、行間 1.8 と字間 0.05em で詰めずに読ませる
- **キーワード**: Noto Sans JP 単一書体、palt 全面、0.05em を全要素に、角丸 16px のカード、影ゼロ

**このサイトの核心は4つある。**

1. **`font-feature-settings: "palt"` を実質すべての要素に当てている**（実測 **1073 要素**／下層 882 要素）。和文の約物・仮名が詰まった状態が既定で、「詰めない」要素の方が例外
2. **`letter-spacing: .05em` を CSS 全文で 454 回宣言している。** body からの継承ではなく、**要素ごとに 0.05em を書いている**。だから 12px→0.6px / 14px→0.7px / 16px→0.8px / 20px→1px / 42px→2.1px とサイズに比例して px が変わる（鹿島建設型）。**ただし 68px・82px の大きな数字だけ 0.03em に落としている**（2.04px / 2.46px）
3. **ウェイトは 300 / 400 / 600 の3段しかなく、600 が既定。** 可視 296 要素中 **600 が 210 要素**、400 が 85 要素。Google Fonts の URL も `wght@300;400;600` で、**700 は配信されていない**（実測で 700 が付くのは Cookie 同意バナーの1要素だけ）。**700 を当てると合成太字になる**
4. **自前の影を1つも持たない。** `box-shadow` の実測は Cookie 同意バナーの1件のみ（`rgba(0,0,0,.2) 0 0 18px`）。カードは **角丸 16px と地色 `#f5f5f0` だけ**で浮かせる

**CSS Custom Properties は 20 個すべて自社トークン**（`--ist-*`。プラットフォーム由来 0）。ただし後述のとおり **2 個は実装から参照されていない**。

---

## 2. Color Palette & Roles

実サイトの `:root` にある `--ist-*` 20 個をそのまま写し、**`var()` での参照回数と可視要素数**を併記する。

### Primary（ブランドカラー）

| トークン | 実装値 | 実測 |
|---|---|---|
| **`--ist-main`** | **`#0b41cd`** | **このサイトの中心。** CSS 全文で `var()` 参照 **240 回**。可視テキスト 93 要素（リンク・見出し）、塗り面 14 要素（CTA） |
| `--ist-base` | `#f5f5f0` | 生成りのベージュ。`var()` 42 回／塗り面 **52 要素**。カードとタグの地色。**白ではなくこの色が「面」** |
| `--ist-blue` | `#197dfa` | 明るい青。`var()` 14 回。**単独では使わず、`linear-gradient(135deg, #197dfa, #0b41cd)` の片端**として数字の文字グラデに出る（可視 8 要素） |

> **`#0b41cd` と `#0b41cc` が混在する。** 面とテキストは `--ist-main` = `#0b41cd` だが、
> グラデーション宣言だけ `linear-gradient(90deg, #f5f5f0, #0b41cc 62%)` と **1 低い値を直書き**している。
> **新規実装では `#0b41cd` に統一してよい。**

### Semantic（意味的な色）

| トークン | 実装値 | 実測 |
|---|---|---|
| `--ist-red` | `#e62300` | `var()` 10 回。注意・必須表記 |
| `--ist-red02` | `#ff2800` | `var()` 4 回。警告の強い方 |
| `--ist-green` | `#00be8c` | `var()` 3 回。**塗り面 3 要素**（グラフの凡例） |
| `--ist-orange` | `#ffa532` | `var()` 9 回。**面としては `rgba(255,165,50,.05)` のグラデ片端でしか出てこない** |
| `--ist-purple` | `#910faf` | `var()` 9 回。可視 0 要素（カテゴリ色。該当記事が無いページでは出ない） |
| `--ist-cyan` | `#64d2ff` | `var()` 2 回。可視 0 要素 |

### Neutral（ニュートラル）

| トークン | 実装値 | 実測 |
|---|---|---|
| **Text Primary** `--ist-black` | **`#222222`** | **可視 103 / 95 要素**。本文・見出しの既定 |
| **Text Default** `--ist-defaultText` | **`#1f1f1f`** | **可視 56 / 71 要素**。`body` の `color`。`#222222` とほぼ同じ濃さの黒が**2つ併存している** |
| Text Muted `--ist-dgray` | `#767676` | 可視 29 / 21 要素。日付・注記 |
| Border `--ist-linegrey` | `#dfdfdf` | `var()` 15 回。罫線 |
| Surface `--ist-base` | `#f5f5f0` | 上述 |
| Surface Tint `--ist-submin` | `#f3f5fc` | 塗り面 4 要素（IR の数値ボックス）。**`var()` 参照は 0 回**で、使う場所では hex を直書きしている |
| Background `--ist-white` | `#ffffff` | ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`） |
| （未使用） `--ist-lgray` | `#c8c8c8` | **`var()` 参照 0 回・可視 0 要素。宣言だけの死に変数** |

### レイアウト用トークン（色ではない）

`--ist-headerHeight: 155.7969px`（JS が実測値を書き込む）／`--ist-headerHeightSp: 0px`／`--ist-headerMegaMenuHeader: 73px`。
**`--ist-headerHeight` は固定値ではなく実行時に更新される。ハードコードしない。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP のみ**。可視テキスト **296 / 253 要素すべて**がこれ。明朝も、サブの和文書体も存在しない
- **明朝体**: 使わない

### 3.2 欧文フォント

- **専用の欧文書体を持たない。** 英数字も Noto Sans JP の欧文グリフで組む（`Our Stories` `INNOVATION` などの欧文見出しを含む）
- フォールバックは `sans-serif` のみ

### 3.3 font-family 指定

```css
/* 実装：CSS 全文で font-family の宣言はこの 1 種類だけ */
font-family: "Noto Sans JP", sans-serif;
```

**ただし実サイトの `body` は2つのページで違う値を返す。**

```css
/* 旧 common/css/style.css（2世代前のスタイルシートが今も読み込まれている） */
body {
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, arial, helvetica, sans-serif;
  line-height: 1.8;          /* ★この行間は今も生きている */
  color: #222;                /* = #222222 */
  min-width: 1000px; max-width: 1600px;
}
```

- **トップページの `body`** は新しい `assets/styles/ist/*.css` に上書きされて `"Noto Sans JP", sans-serif`
- **`/profile/` の `body`** は旧シートのヒラギノ／メイリオのまま（4 幅すべてで同じ）
- **どちらでも描画結果は変わらない。** `ist` 側が `body` の子孫すべてに `Noto Sans JP` を当てているため、**可視 253 要素は 1 つ残らず Noto Sans JP** で出る
- **新規実装では旧スタックを引き写さない。** `font-family: "Noto Sans JP", sans-serif` だけ書けばよい

**Web フォントの配信**: Google Fonts。`wght@300;400;600` の 3 ウェイトを **unicode-range で分割配信**（`fonts.gstatic.com` へのフォント要求 **46 件**／`document.fonts` は各ウェイト 248 サブセット＝ loaded 92・unloaded 156）。
**`unloaded` が多いのは異常ではなく、そのページに出てこない文字のサブセットを読んでいないだけ。**

### 3.4 文字サイズ・ウェイト階層

`html` は **4 幅（1440 / 1200 / 834 / 375px）すべてで 16px 固定**。`body` も 16px / `line-height: 28.8px`（＝1.8）で動かない。**流体ルートではない**ので rem→px の換算は素直に 16 倍でよい。

| Role | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|--------|-------------|----------------|------|
| Page Title (下層 h1) | 64px | 400 | 76.8px (1.20) | 3.2px (**0.05em**) | 下層のページ見出し |
| Statement | 50px | 400 | 70px (1.40) | 2.5px (**0.05em**) | 5 要素。企業理念の一文 |
| Big Number | 82px / 68px | 400 | 1.00 | 2.46px / 2.04px (**0.03em**) | IR の数値。**ここだけ 0.03em** |
| Section Heading | 42px | 400 | 58.8px (1.40) | 2.1px (**0.05em**) | 5 要素 |
| Heading L | 34px | 400 | 47.6px (1.40) | 1.7px (**0.05em**) | |
| Heading M | 28px | 400 | 39.2px (1.40) | 1.4px (**0.05em**) | |
| Heading S | 24px | **600** | 33.6px (1.40) | 1.2px (**0.05em**) | **太くするのはここから下** |
| Lead | 20px | **600** | 28px (1.40) | 1px (**0.05em**) | 53 要素。カード見出し |
| Sub | 18px | **600** | 25.2px (1.40) | 0.9px (**0.05em**) | |
| **Body** | **16px** | **400** | **28.8px (1.80)** | **0.8px (0.05em)** | **48 / 47 要素** |
| Body Strong | 16px | **600** | 22.4px (1.40) | 0.8px (0.05em) | ナビ・リンク |
| UI | 14px | 400 / 600 | 22.4px (1.60) | 0.7px (0.05em) | 46 要素 |
| Tag | 13px | 600 | 21.97px (1.69) | 0.65px (0.05em) | 51 要素。`#患者中心` などのハッシュタグ |
| Caption | 12px | 400 | 1.40 | 0.6px (0.05em) | 60 要素。日付・注記 |
| Footnote | 11px | 400 | 1.40 | 0.55px (0.05em) | 8 要素 |
| Micro | 10px | 600 | 18px (1.80) | 0.5px (0.05em) | 5 要素 |

**ウェイトは 300 / 400 / 600 の 3 段しかない。**

- `300` … メガメニューの第2階層リンクのみ（16px / `line-height: 22.4px`）
- `400` … 本文と**大きな見出し全部**（42px・50px・64px は 400 のまま）
- `600` … 24px 以下の見出し・ナビ・カード見出し。**最多の 210 要素**
- `700` は Google Fonts に無い。当てると合成太字になる

> **大見出しほど細い。** 64px / 50px / 42px は 400、24px 以下が 600。
> **「見出し＝太字」で実装すると別物になる。**

### 3.5 行間・字間

- **本文の行間**: **1.80**（`body { line-height: 28.8px }` ＝ 16×1.8）。実測でも 1.80 が 47 / 35 要素
- **見出し・カードの行間**: **1.40**（最多 103 / 85 要素）。読み物の段落は **1.60**（71 / 65 要素）
- **字間**: **0.05em を要素ごとに宣言する**（CSS 全文 454 回）。`body` 側に 1 回書いて継承させる作りではない
- **例外は 0.03em（68px・82px の数字）と `normal`（パンくず・CMP）だけ**

```css
/* 実装の型：サイズと一緒に字間も書く */
.heading { font-size: 42px; line-height: 1.4; letter-spacing: .05em; }
.body    { font-size: 16px; line-height: 1.8; letter-spacing: .05em; }
.bignum  { font-size: 82px; line-height: 1;   letter-spacing: .03em; }  /* ★数字だけ詰める */
```

> **`line-height` は比率で書いてよい**（`body` の 28.8px も `1.8` 由来）。
> **`letter-spacing` を body に 1 回だけ書いて継承させるのは、このサイトの設計ではない。**

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの指定はこれだけ。word-break / line-break は書いていない */
overflow-wrap: break-word;   /* CSS 全文で 1 箇所 */
word-break: break-all;       /* CSS 全文で 1 箇所 */
```

- `word-break: auto-phrase` は**使っていない**。改行位置はブラウザ既定の禁則処理に任せている
- 見出しの改行は `<br>` で手で入れている（`私たちは病気より先に未来へ行く` など）

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";   /* ★実測 1073 要素（トップ）/ 882 要素（下層） */
```

- **`palt` が既定。** `normal` のまま残っているのは OneTrust の Cookie バナーなど外部ウィジェットだけ
- **`palt` と `letter-spacing: .05em` を同時に使う**。詰めてから一律に開く、という組み方
- `tnum` などの数字用フィーチャーは使っていない

### 3.8 縦書き

`writing-mode` が `horizontal-tb` でない要素は **0 件**。縦組みは使わない。

---

## 4. Component Stylings

### Buttons

**Primary（塗り）** — 実測 3 要素

- Background: `#0b41cd`
- Text: `#ffffff`
- Padding: **`4px 52px 4px 20px`**（右だけ 52px。矢印アイコンのぶん）
- Border Radius: **`3px`**
- Font Size: 16px / Weight: **400** / Letter Spacing: `0.8px`（0.05em）
- Border: なし

**Secondary（白地・線）** — 実測 2 要素

- Background: `#ffffff`
- Text: `#0b41cd`
- Border: `1px solid #0b41cd`
- Padding: `4px 52px 4px 20px`（Primary と同じ）
- Border Radius: `3px`
- Font Size: 16px / Weight: 400

> **ボタンの文字は太らせない（400）。** 角丸も 3px だけ。
> **`border-radius: 3px` は「ボタン・タグ」専用、`16px` は「カード」専用**で用途が分かれている。

### Tags / Badges

- Background: `#f5f5f0` / Text: `#222222`
- Border Radius: `3px` / Padding: `0 10px`
- Font Size: 12px / Weight: **600** / Letter Spacing: `0.6px`

ハッシュタグ（`#患者中心` など）は面を持たず、13px / 600 / `#0b41cd` の文字だけ（51 要素）。

### Cards

- Background: `#ffffff`（画像部）＋ `#f5f5f0`（本文部）
- Border: なし
- **Border Radius: `16px`**。ただし実装は上下を分けて指定している
  - 画像部 `border-radius: 16px 16px 0 0`（56 / 26 要素）
  - 本文部 `border-radius: 0 0 16px 16px`（40 / 18 要素）
- Shadow: **なし**（§6 参照）
- カード幅: `351px`（実測コンテナ 44 件）

### Inputs

- サイト内検索のみ。Font Size 16px / `line-height: 24px` / Letter Spacing `0.8px`
- 枠線・角丸は持たず、下線とアイコンで構成

---

## 5. Layout Principles

### Container

- **Max Width: `1366px`**（実測 15 / 12 要素）。読み物の段落だけ `872px` / `830px` に絞る
- 旧シート由来の `body { min-width: 1000px; max-width: 1600px }` が残っている

### Grid / Gap

| 値 | 実測 | 用途 |
|---|---|---|
| **`16px`** | **45 / 12 件（最多）** | カードグリッドの既定 |
| `0 12px` | 8 件 | 横並びリンク |
| `24px` / `32px` | 2 / 1 件 | セクション内 |
| `40px 42px` / `24px 40px` | 下層のみ | 下層の2カラム |

### Spacing Scale

明示的なスペーシングトークンは持たない。実測から読み取れるのは **16 / 24 / 32 / 40 の 8px 刻み**。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| **0** | **`none`** | **このサイトのすべての要素** |

**自前の `box-shadow` は 1 つも無い。** 実測された唯一の影 `rgba(0,0,0,.2) 0 0 18px 0` は OneTrust の Cookie バナーのもので、サイトの設計ではない。

浮きは影ではなく **角丸 16px ＋ 地色 `#f5f5f0`** で作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- `font-family: "Noto Sans JP", sans-serif` だけを書く。**他の書体を混ぜない**
- **すべてのテキスト要素に `letter-spacing: .05em` を書く**（body 継承に頼らない）
- **`font-feature-settings: "palt"` を全体に当てる**
- ウェイトは **300 / 400 / 600 の 3 段**に収める。24px 以上の見出しは **400 のまま**にする
- 本文 `line-height: 1.8`、見出し・カード `1.4`、読み物の段落 `1.6`
- ボタンは `border-radius: 3px`、カードは `16px`。**使い分ける**
- 面は `#ffffff` と `#f5f5f0` の2枚だけで作る

### Don't（禁止）

- **`font-weight: 700` を当てない。** Google Fonts から 700 を配信していないので合成太字になる
- **大見出しを太字にしない。** 42px / 50px / 64px は 400
- 影を足さない（`box-shadow` は設計に存在しない）
- `letter-spacing` を `0.05em` 以外にしない。**例外は 68px・82px の数字（0.03em）だけ**
- 旧 `body` のヒラギノ／メイリオのスタックを引き写さない（**実際には 1 要素も描画されていない**）
- `--ist-lgray` (`#c8c8c8`) を使わない。**実装から 1 度も参照されていない**
- `--ist-headerHeight` を固定値としてハードコードしない（JS が実行時に書き換える）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 実測（宣言回数） |
|------|-------|------|
| **Mobile** | ≤ 767px | `screen and (max-width: 767px)` **144 回** |
| **Tablet** | ≤ 960px | `screen and (max-width: 960px)` **466 / 468 回（最多）** |
| Wide | ≤ 1024px / ≤ 1366px | 16 回 / 30 回 |
| Narrow Phone | ≤ 374px | 45 回 |

**主役は 960px。** `767px` はその下の微調整。

### フォントサイズの調整

- **`html` も `body` も流体ではない**（4 幅すべて 16px / 28.8px）。縮小はブレークポイントごとの個別指定で行う
- `(prefers-reduced-motion: reduce)` を **133 / 134 回**宣言している。アニメーションは必ず止められるようにする

### タッチターゲット

最小 44px × 44px を確保する。

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0b41cd
Surface:       #f5f5f0
Text Color:    #1f1f1f（body）/ #222222（見出し・本文）
Muted:         #767676
Border:        #dfdfdf
Background:    #ffffff
Font:          "Noto Sans JP", sans-serif
Weights:       300 / 400 / 600（700 は無い）
Body Size:     16px
Line Height:   1.8（本文）/ 1.4（見出し・カード）/ 1.6（読み物）
Letter Spacing: .05em（全要素に明示）
Feature:       font-feature-settings: "palt"
Radius:        3px（ボタン・タグ）/ 16px（カード）
Shadow:        なし
Container:     1366px
```

### プロンプト例

```
中外製薬のデザインシステムに従って、IRニュースの一覧カードを作成してください。
- 書体は "Noto Sans JP", sans-serif のみ。他の書体を混ぜない
- すべてのテキストに letter-spacing: .05em と font-feature-settings: "palt" を当てる
- カードは border-radius: 16px（画像部 16px 16px 0 0 / 本文部 0 0 16px 16px）、
  地色は #f5f5f0、box-shadow は使わない
- カード見出しは 20px / weight 600 / line-height 1.4 / color #0b41cd
- 日付は 12px / weight 400 / color #767676
- 「詳しく見る」ボタンは背景 #0b41cd / 文字 #ffffff / weight 400 /
  border-radius 3px / padding 4px 52px 4px 20px
- font-weight に 700 を使わない（配信されていないウェイト）
- グリッドの gap は 16px、コンテナ幅は 1366px
```
