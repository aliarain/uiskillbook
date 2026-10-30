# DESIGN.md — 淡交社（TANKOSHA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-30 / 対象: `https://www.tankosha.co.jp/`, `/about/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **明朝体 1 本・ウェイト 1 段だけで組む。** 茶道の月刊誌『淡交』を出す京都の出版社。太字も、ゴシックも、影も、角丸も使わない。字の大小と字間と行間の 3 つだけで階層をつくる
- **密度**: 低い。新刊書影を大きく並べ、余白を多く取る。本文の行間は 2.00、リード文は 2.75 まで開く
- **キーワード**: 明朝一本、weight 400 のみ、0.2em の見出し、縦組み、抹茶色

**このサイトの核心は 4 つある。**

1. **サイト全体が `font-weight: 400` だけでできている。** 実測でトップ **321 要素中 321 要素**、会社案内 **159 要素中 159 要素**がすべて 400。**700 は 1 要素も無い**。`@font-face` には Noto Serif JP の 700 が宣言されているが、`document.fonts` 上では**全サブセットが `unloaded`**（ダウンロードすらされていない）。**太字を書くと、このサイトではなくなる**
2. **書体は Noto Serif JP ただ 1 本。** 実測 302 / 321 要素（残り 19 要素は `<input>` の UA 既定 Arial）。ゴシックは 1 文字も使わない
3. **字間は 2 段しかない。** 本文は body に `letter-spacing: .06em` を 1 回だけ書いて**継承**させる（実測 0.96px が 279 要素）。見出しと英字ラベルには **`.2em` を個別に当てる**（32px→6.4px / 40px→8px / 30px→6px / 24px→4.8px / 13px→2.6px、すべて厳密に 0.2）。**この 2 段以外の字間は存在しない**
4. **縦組みが CSS で実装されている**（画像ではない）。トップの `h2.home-intro__head` が `writing-mode: vertical-rl`、事業 3 枠のラベル「読む」「使う」「体験する」が `vertical-lr`。実測 4 要素

**`font-feature-settings: "palt"` は 1 要素も使っていない**（実測 0 件。CSS 全文でも 0 回）。フォントスタックに `YakuHanMP` の類も入っていないので、**約物は詰まらないまま出る**。CSS Custom Properties は**自社トークン 0 個**（検出された 49 個はすべて WordPress / Gutenberg の既定変数）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **抹茶色（ブランド）** | **`#667938`** | トップで**面 12 要素・文字 8 要素**、会社案内で**文字 19 要素・面 5 要素**。検索ボタンの面、お知らせの見出しリンク、会社案内の部署名 |
| **抹茶色（淡）** | **`#7e9d47`** | 会社案内の**部署ブロック見出しの面 3 要素**（`出版事業局` `営業局` `総務局`）。`#667938` より明るい |

> **緑は 2 段。** `#667938` がブランド色、`#7e9d47` は下位見出しの面専用。**新規実装では `#667938` を既定にし、面を階層化したいときだけ `#7e9d47` を使う。**

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・見出し・ナビ。**トップ 269 要素 / 会社案内 124 要素**。**純黒は使わない**
- **Text on Dark** (`#ffffff`): 写真の上のラベル、面の上の文字（トップ 20 要素 / 会社案内 12 要素）
- **Text Muted** (`#7a7a7a`): 書影キャプション、コピーライト（5 要素）
- **Text Muted Light** (`#909090`): 社是のルビ的な添え文 `-君子の交わりは、淡きこと水の若し-`（1 要素）
- **Surface Gray** (`#ededed`): グローバルナビの子メニューの面（トップ 11 要素 / 会社案内 10 要素）
- **Dot Inactive** (`rgba(51, 51, 51, 0.15)`): カルーセルの非選択ドット（5 要素）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample (3/3)`。`html` / `body` ともに塗り指定なしで UA 既定の白）

> **会社案内の下層ページはヒーロー帯 `.l-sub-img` が `#667938` で塗られている**（面積 259,200px²）が、**コンテンツの地色は白**。`viewportTopByArea` の先頭の緑を地色と取り違えないこと。

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（唯一の書体）**: **Noto Serif JP**（Google Fonts 配信）。**`weight: 400` のみが `loaded`**
- フォールバックは **游明朝 → ヒラギノ明朝 ProN W3 → HG明朝E → ＭＳ 明朝**。Web フォントが落ちても明朝のまま出る
- **ゴシック体は使わない。** ナビもボタンも脚注も明朝

### 3.2 欧文フォント

- **専用の欧文フォントを持たない。** `tankosha` `books & magazines` `credo` `policy` `origin` といった英字ラベルも **Noto Serif JP の欧文グリフ**で組む
- 例外は `<input type="search">` の 19 要素で、これは UA 既定の `Arial`。**意図した指定ではないので、新規実装では入力欄にも明朝を当てる**

### 3.3 font-family 指定

```css
/* サイト全体で 1 つだけ */
font-family: "Noto Serif JP", 游明朝, YuMincho,
             "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN",
             HG明朝E, "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
```

**フォールバックの考え方**:
- **Web フォント → OS 明朝の一本道。** 途中でゴシックに逃げる分岐が無い
- 游明朝には Windows の Medium 問題（游ゴシックで起きるようなウェイト取り違え）は無いため、**別名 `@font-face` の細工は不要**
- **`@font-face` は Google Fonts の Noto Serif JP 400 と 700 が宣言されているが、700 は全サブセットが `unloaded`。** 700 を当てても**ブラウザの合成太字**になる（下記 3.4 参照）

### 3.4 文字サイズ・ウェイト階層

**ウェイトは 400 の 1 段だけ。** 下表の Weight 列がすべて 400 なのは誤記ではなく実測値。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| **Hero Heading（縦組み）** | **32px** | 400 | **2.18** (69.76px) | **0.2em** (6.4px) | `writing-mode: vertical-rl`。「茶道を中心とした、日本文化を伝える。」 |
| **Section Heading** | 32px | 400 | 1.50 | **0.2em** (6.4px) | `新刊案内` `社是` `企業方針` `社名の由来` |
| **Business Label（縦組み）** | **40px** | 400 | **1.00** | **0.2em** (8px) | `読む` `使う` `体験する`。`writing-mode: vertical-lr` |
| Page Title | 40px | 400 | 1.50 | 0.15em (6px) | 会社案内の `淡交社について` |
| Category Heading | 30px | 400 | 1.50 | **0.2em** (6px) | `本` `茶道具・和装` `カルチャー教室・ツアー` |
| News Heading | 26px | 400 | 1.50 | 0.2em | `お知らせ` |
| Sub Heading | 24px | 400 | 1.50 | **0.2em** (4.8px) | 会社案内の `君子之交淡若水` |
| **Book Title** | **18px** | 400 | **1.80** | 0.06em（継承） | **新刊の書名。トップで 102 要素** |
| **Body** | **16px** | 400 | **1.50** (24px) | **0.06em**（継承） | ナビ・既定。会社案内の本文で 87 要素 |
| Long Body | 16px | 400 | **2.00** | 0.06em（継承） | 会社概要の説明文（12 / 21 要素） |
| **Lead** | 16px | 400 | **2.75** | 0.06em（継承） | 会社案内の導入文 2 要素。**最も広い行間** |
| Sub Nav | 15px | 400 | 1.50 | 0.06em（継承） | `淡交社の本` `定期購読について` |
| Tagline | 14px | 400 | 1.00 | **0.25em** (3.5px) | ロゴ脇の `茶道美術図書出版` |
| Caption | 14px | 400 | 1.80 | 0.06em（継承） | 著者名・発売日 |
| **English Label** | **13px** | 400 | 1.30〜1.50 | **0.2em** (2.6px) | `business` `books&magazines` `credo` `policy` |
| Note | 12px | 400 | 1.50 | 0.06em（継承） | `新着情報` バッジ・コピーライト |
| Logo Sub | 10px | 400 | 1.00 | **0.84em** (8.4px) | `tankosha`。**最も開いた字間** |

> **`html { font-size: 10px }`。** `rem` を使うときは 10 倍で読むこと（`1.6rem` = 16px）。**本文の `16px` は `body` に直接書かれている。**

### 3.5 行間・字間

**行間は「文章の長さ」で 4 段に切り替える。**

| 行間 | 実測 | 用途 |
|------|------|------|
| **1.50** | **トップ 181 要素 / 会社案内 131 要素（最多）** | ナビ・UI・見出し・既定 |
| **1.80** | 98 要素 | 新刊の書名と著者・発売日のメタ |
| **2.00** | 12 / 21 要素 | 会社概要の説明文 |
| **2.75** | 2 要素 | 会社案内の導入文（最も広い） |
| 2.18 | 1 要素 | 縦組みヒーロー見出し（69.76px / 32px） |
| 1.00 | 7 要素 | ロゴ・縦組みラベル（1 文字送り） |

**字間は 2 段しかない。**

- **本文（継承）**: `body { letter-spacing: .06em }` を **1 回だけ**書く。実測 1440px で 0.96px、375px で 0.84px。**サイズが変わっても 0.06 の比率が保たれている**（＝ px ではなく em 宣言）
- **見出し・英字ラベル（個別）**: `letter-spacing: .2em` を要素ごとに当てる。32px→6.4px、40px→8px、30px→6px、24px→4.8px、13px→2.6px。**どれも厳密に 0.2**
- 例外は 2 つだけ: ロゴ脇のタグライン `0.25em`、ロゴの英字 `0.84em`

**ガイドライン**:
- **`0.96px` と書かない。`0.06em` と書く。** モバイルで body が 14px に落ちるため、px 固定にすると字間だけ取り残される
- **本文に `.2em` を当てない。** 0.2em は見出しと英字ラベルの語彙
- **中間の字間（0.08em、0.1em など）を作らない。** このサイトは 0.06 と 0.2 の 2 段で階層をつけている

### 3.6 禁則処理・改行ルール

```css
body {
  word-break: break-all;   /* 実サイトの指定。下記の注意を読むこと */
}
```

- **実サイトは `body` に `word-break: break-all` を当てている**（1440 / 1200 / 834 / 375px の 4 幅すべてで実測）
- **これは欧文にとっては望ましくない挙動。** `break-all` は英単語を途中で割る。実サイトには `tankosha` `books & magazines` のような短い英字しか無いため表面化していないが、**長い英文を入れると単語の途中で折れる**
- **新規実装では `overflow-wrap: anywhere` か `word-break: normal` を使い、和文の折り返しはブラウザ既定に任せることを推奨する**（和文は既定で任意の文字位置で折り返せる）
- `word-break: keep-all` も CSS に存在するが、これは英字ラベル用の局所指定

### 3.7 OpenType 機能

**このサイトは `font-feature-settings` を一切使っていない**（実測 0 要素 / CSS 全文でも 0 回）。

- **`palt` を足さないこと。** Noto Serif JP の既定の字送りに `.06em` を足す、というのがこのサイトの組み方。`palt` を入れると約物が詰まって字間の設計が崩れる
- フォントスタックに `YakuHanJP` / `YakuHanMP` の類も入っていない。**約物は詰まらないまま出るのが正しい状態**
- 数字は書影のキャプション（`発売日：2025年11月4日`）に出るが、`tnum` などの指定は無い

### 3.8 縦書き

**CSS で実装されている**（画像に焼き込んだ文字ではない）。実測 4 要素。

```css
/* ヒーローの見出し */
.home-intro__head {
  writing-mode: vertical-rl;
  font-size: 32px;
  line-height: 2.18;        /* 69.76px */
  letter-spacing: .2em;     /* 6.4px */
}

/* 事業 3 枠のラベル */
.home-business__list-item-copy {
  writing-mode: vertical-lr;
  font-size: 40px;
  line-height: 1;           /* 40px = 1 文字送り */
  letter-spacing: .2em;     /* 8px */
  color: #ffffff;           /* 写真の上に置く */
}
```

- **縦組みでも行間の考え方は横組みと変わらない。** 見出しは 2.18、1 行のラベルは 1.00
- **縦組みにも `.2em` の字間をそのまま当てている**（横組みの見出しと同じ値）
- `vertical-rl`（右から左）と `vertical-lr`（左から右）を**使い分けている**。複数行の見出しは `rl`、1 列のラベルは `lr`

---

## 4. Component Stylings

**`border-radius` はサイト全体で `0px`。** 実測で 0 以外だったのは**カルーセルのドット（`50%`）14 要素だけ**。

### Buttons

**Outline（既定の CTA）**
- Background: `transparent`
- Text: `#333333`
- Border: **`1px solid #333333`**
- Padding: **`19px 20px 18px`**（上下が非対称。明朝のベースラインに合わせた調整）
- Border Radius: **`0px`**
- Font: 16px / **weight 400** / letter-spacing 0.06em
- 例: `淡交社について` `編集の現場から一覧`

**Solid（検索）**
- Background: **`#667938`**
- Text: `#ffffff`
- Border: なし
- Padding: `1px 6px`
- Border Radius: `0px`

**Carousel Dot**
- Size: 円形（**唯一の `border-radius`**）
- 選択: `#333333` / 非選択: `rgba(51, 51, 51, 0.15)`

### Badges

**News Badge（`新着情報`）**
- Background: `#667938` / Text: `#ffffff`
- Padding: `1px 5px 2px`
- Font: 12px / weight 400
- Border Radius: `0px`

**Department Heading（会社案内）**
- Background: **`#7e9d47`** / Text: `#ffffff`
- Font: 18px / weight 400
- Border Radius: `0px`

### Inputs

- Border Radius: `0px`
- Padding: `1px 6px`
- **UA 既定の `Arial` が当たっている**（実測 19 要素）。**新規実装では明朝を明示すること**
- 右に `#667938` の検索ボタンを並べる

### Cards（新刊書影）

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`
- Shadow: **なし**
- 書影画像の下に 書名 18px / lh 1.80 → 著者・発売日 14px / lh 1.80 を積む

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 1–2px | バッジ内側の上下 |
| S | 5–6px | バッジ・入力欄の左右 |
| M | 12px | 見出しの上アキ |
| L | 20px | ボタン内側の左右 |
| XL | 125px | `body` 上部（固定ヘッダーの逃げ） |

### Container

- **Max Width: 1120px**（実測トップ 8 要素 / 会社案内 10 要素で最多。**両ページで一貫**）
- 968px: 本文カラム
- 1280px / 1920px: ヒーローカルーセルの全幅ブロック

### Grid

- トップ: ヒーローカルーセル（全幅）→ 縦組みリード → 事業 3 枠（写真＋縦組みラベル）→ 新刊 4 カラム → お知らせ
- 会社案内: 帯（`#667938`）→ 社是 / 企業方針 / 社名の由来 を 32px 見出し＋ 2.00 の本文で縦に積む

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。実測で影のある可視要素は 0 件** |

> **影を一切使わないサイト。** CSS 全文には `box-shadow` が 8 回、`text-shadow` が 2 回宣言されているが、**実測した 2 ページの可視要素では 1 つも使われていない**。`filter: drop-shadow()` も CSS 全文で 0 回。
>
> **写真の上の白文字（「読む」「使う」「体験する」）にも影を付けていない。** 写真側を暗く選ぶことで可読性を取っている。**新規実装で `text-shadow` を足さないこと。**

階層は**罫線（`1px solid #333333`）と面（`#ededed` / `#667938`）だけ**で作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`font-weight: 400` だけで組む。** サイズと字間と行間で階層をつくる
- **書体は Noto Serif JP 1 本。** フォールバックも明朝で揃える（游明朝 → ヒラギノ明朝 ProN W3 → ＭＳ 明朝）
- **`body { letter-spacing: .06em }` を 1 回書いて継承させる**
- **見出しと英字ラベルには `letter-spacing: .2em` を個別に当てる**
- **行間を文章の長さで切り替える**: UI 1.50 → 書誌メタ 1.80 → 本文 2.00 → リード 2.75
- **`border-radius: 0` を貫く**（円形のカルーセルドットだけ例外）
- 本文色は **`#333333`**、ブランド色は **`#667938`**
- 縦組みは `writing-mode` で実装する。複数行は `vertical-rl`、1 列ラベルは `vertical-lr`

### Don't（禁止）

- **`font-weight: 700` を当てない。** Noto Serif JP の 700 は宣言されているが `unloaded` で、**ブラウザの合成太字**になる。実サイトには太字が 1 要素も無い
- **ゴシック体を混ぜない。** ナビもボタンも入力欄も明朝
- **`font-feature-settings: "palt"` を足さない**（実サイトは 0 要素）
- **字間を `0.96px` のような px 値で書かない。** モバイルで body が 14px に落ちるため比率が崩れる
- **0.06em と 0.2em の中間の字間を作らない**
- **`box-shadow` / `text-shadow` / `filter: drop-shadow()` を足さない**（可視要素で 0 件）
- **`border-radius` を 4px や 8px にしない**
- 本文色を純黒 `#000000` にしない（実サイトは `#333333`）
- **`word-break: break-all` を欧文の多い画面にそのまま持ち込まない**（3.6 参照）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 実測 |
|------|-------|------|
| **Desktop** | **≥ 600px** | `(min-width: 600px)` が **CSS 全文で 152 回**（最多） |
| **Mobile** | **≤ 599px** | `(max-width: 599px)` 14 回 |
| Small Mobile | ≤ 340px | 4 回 |
| Wide | ≥ 1440px | 2 回 |

- **分岐点が 600px と低い。** タブレットを独立して扱わず、**600px を境に 2 面だけ**で設計している

### タッチターゲット

- Outline ボタンは `19px 20px 18px` のパディング＋ 16px の文字で**約 58px 高**。44px を満たす
- 検索ボタン（`1px 6px`）と `新着情報` バッジ（`1px 5px 2px`）は下回る。**モバイルでは高さを確保すること**

### フォントサイズの調整

**`body` の font-size が SP で落ちる。`html` は 10px で固定。**

| Viewport | `html` | `body` font-size | `body` line-height | `body` letter-spacing |
|----------|--------|------------------|--------------------|------------------------|
| 1440px | 10px | **16px** | 24px（1.50） | 0.96px（= .06em） |
| 1200px | 10px | 16px | 24px（1.50） | 0.96px |
| 834px | 10px | 16px | 24px（1.50） | 0.96px |
| **375px** | 10px | **14px** | **21px（1.50）** | **0.84px（= .06em）** |

- **比率（1.50）と字間（.06em）は保たれ、基準サイズだけが 16px → 14px に落ちる。** `line-height` と `letter-spacing` を比率・em で書いているから成立している
- **px で書き写すとモバイルで崩れる。** `line-height: 1.5` / `letter-spacing: .06em` と書くこと

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green:   #667938
Green Light:   #7e9d47
Text Color:    #333333
Muted:         #7a7a7a
Surface:       #ededed
Background:    #ffffff
Font (JP): "Noto Serif JP", 游明朝, YuMincho, "Hiragino Mincho ProN W3", HG明朝E, "ＭＳ 明朝", serif
Font Weight:   400 のみ（700 を使わない）
html font-size: 10px
Body Size:     16px（SP 14px）
Line Height:   1.50（UI） / 1.80（書誌） / 2.00（本文） / 2.75（リード）
Letter Spacing: .06em（body に 1 回・継承） / .2em（見出し・英字ラベル）
Border Radius: 0px
Box Shadow:    none
Container:     1120px
Breakpoint:    600px
```

### プロンプト例

```
淡交社のデザインシステムに従って、書籍一覧ページを作成してください。
- font-family は "Noto Serif JP", 游明朝, YuMincho, "Hiragino Mincho ProN W3", "ＭＳ 明朝", serif の 1 本だけ
- font-weight は 400 のみ。太字は一切使わない（700 は合成太字になるため禁止）
- body に letter-spacing: .06em と line-height: 1.5 を書いて継承させる
- セクション見出しは 32px / weight 400 / letter-spacing .2em
- 英字ラベル（books & magazines）は 13px / letter-spacing .2em
- 書名は 18px / line-height 1.8、本文は 16px / line-height 2.0、導入文は line-height 2.75
- CTA は transparent 背景 + 1px solid #333333 + padding 19px 20px 18px + border-radius 0
- 検索ボタンだけ背景 #667938 / 白文字
- border-radius はすべて 0px（カルーセルのドットのみ 50%）
- box-shadow と text-shadow は使わない。写真の上の白文字にも影を付けない
- font-feature-settings: "palt" は使わない
- コンテナは 1120px、ブレークポイントは 600px
- SP（375px）では body を 14px に落とす。line-height と letter-spacing は比率・em のままにする
```
