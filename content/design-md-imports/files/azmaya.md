# DESIGN.md — 東屋 (Azmaya)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://www.azmaya.co.jp/
> 東屋は「日本の生活道具」を作り続けるプロダクトブランド（1997年設立）。
> 陶磁器・木工・金属など職人と協業した日用品を扱う。実測はトップおよび会社案内ページに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極限までそぎ落とした静謐なエディトリアル。黒背景に置いた製品写真が主役で、UI は明朝体のテキストと罫線のみ
- **密度**: 超低密度。ファーストビューはロゴ・数語のナビ・1枚の大判写真だけ
- **キーワード**: 静謐 / 端正 / 明朝 / モノクローム / 余白
- **形状言語**: 装飾を持たない。角丸・影・塗りボタンを使わず、細い罫線（`border-bottom`）とテキストだけで構成する
- **書体の性格**: 和文に **ヒラギノ明朝（明朝体）** を採用。ナビは字間を大きく開いて配置し、書と余白のような静けさを作る。欧文は幾何学サンセリフ Avenir

---

## 2. Color Palette & Roles

<!-- 実サイトの computed style 実測に基づく。ブランドは徹底したモノクローム -->

### Base（下地）

- **Background** (`#ffffff`): ページ全体の下地（純白）
- **Ink Panel** (`#f3f4f4`): フッター（サイトマップ）などの薄いパネル面（rgb(243,244,244)）
- **Photo Ground** (`#000000` / 近似): 製品写真の背景は深い黒。写真そのものが画面の"黒面"を担う

### Text（文字色）

- **Text Primary** (`#333333`): 見出し・本文（rgb(51,51,51)）。純黒ではないダークグレー
- **Text Secondary** (`#666666`): リンク・補足テキスト（rgb(102,102,102)）
- **Text Tertiary** (`#808080`): さらに弱い注釈（rgb(128,128,128)）
- **Text on Dark** (`#ffffff`): 黒い写真面に重ねる文字

### Grays（面・状態）

- **Slate** (`#555555`): 濃いグレー面・ホバー（rgb(85,85,85)）
- **Warm Charcoal** (`#3d3939`): 画像オーバーレイ・濃色面（rgb(61,57,57)）

### 色に関する設計思想

- **色を持たない**のが東屋の意匠。ブランドカラーは実質「黒（写真）」と「白（余白）」、その間のグレー階調（`#333` / `#666` / `#808080`）のみ
- 差し色・彩度のある色は一切使わない。製品そのものの色が唯一の色情報になる
- ※ CMS（WordPress）由来の Gutenberg 標準カラー（vivid-red 等）が CSS 変数に残るが、ブランドとしては未使用。使わないこと

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（主役）**: ヒラギノ明朝（`"Hiragino Mincho W3 JIS2004"` / `"ヒラギノ明朝 Pro W3"` / `"Hiragino Mincho ProN"`）。W3（細ウェイト）を基調に、静かで端正な佇まいを作る
- **ゴシック体**: 使用しない（明朝で統一）

### 3.2 欧文フォント

- **サンセリフ（幾何学）**: Avenir → Open Sans → Helvetica Neue → Helvetica → Arial。本文の欧文・数字とロゴ周りに使う
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: ヒラギノ明朝は Apple 環境の標準フォントで、Windows・preview.html では表示できない。
> - ヒラギノ明朝（W3）→ **Shippori Mincho**（しっぽり明朝 / Google Fonts、字形が近く上品）または Noto Serif JP（Light〜Regular）
> - Avenir → **Jost** または **Montserrat**（Google Fonts の幾何学サンセリフ）

### 3.3 font-family 指定

```css
/* 和文見出し・本文（明朝優先） */
font-family: "Hiragino Mincho W3 JIS2004", "ヒラギノ明朝 Pro W3",
             "Hiragino Mincho ProN", "Hiragino Mincho Pro",
             "游明朝", "YuMincho", serif;

/* 欧文・数字（幾何学サンセリフ） */
font-family: Avenir, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- **和文（明朝）優先**。ヒラギノ明朝を先頭に置き、無い環境では游明朝 → generic `serif` へ
- 欧文専用要素（ロゴ・数字・英語見出し）のみ Avenir 系の幾何学サンセリフに切り替える
- 明朝×幾何学サンセリフの対比が東屋のトーンを決める

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Nav | ヒラギノ明朝 | 16px | 400 | 1.5 | 0.2em〜 | グローバルナビ。字間を大きく開く |
| Heading | ヒラギノ明朝 | 16–20px | 700 | 1.6 | 0.1em | 見出し (`#333333`) |
| Body | ヒラギノ明朝 | 16px | 400 | 1.8 | 0.05em | 本文 (`#333333`) |
| Link | ヒラギノ明朝 | 16px | 400/700 | 1.6 | 0.05em | リンク (`#666666`) |
| Latin / 数字 | Avenir | 13–16px | 400 | 1.6 | 0.02em | 欧文・価格・年号 |
| Caption | ヒラギノ明朝 | 13px | 400 | 1.7 | 0.05em | 注釈 |

> 実測では単一行のナビ・見出しで `line-height` が 1.0 相当に見えるが、これはリスト項目の詰め表示による。段落本文には日本語として `1.8` を適用すること。

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.8`（明朝の本文は広めに取り、線の細さを活かす）
- **見出し・ナビの行間**: `1.5〜1.6`
- **本文の字間 (letter-spacing)**: `0.05em` 程度
- **ナビ・見出しの字間**: **`0.1〜0.2em`** と大きく開き、余白の中に文字を"置く"ように配置する

**ガイドライン**:
- 明朝体は線が細いため、`#000000` を避け `#333333` で組むと上品に見える
- ナビゲーションは字間を大きく取り、項目間もゆったり空ける

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測では `font-feature-settings: normal`。字間は `letter-spacing` で明示制御する
- 明朝の本文には `palt` を掛けない方が、字面のリズムが整い可読性が高い

### 3.8 縦書き

該当なし（横書きのみ）。ただし明朝主体のため、縦書き見出しとも相性がよい。使う場合:

```css
writing-mode: vertical-rl;
text-orientation: mixed;
```

---

## 4. Component Stylings

### Links（主要なインタラクション要素）

東屋の UI はほぼテキストリンクと罫線のみで成り立つ。

- Text: `#666666`（既定）／ホバーで `#333333`
- Decoration: なし、またはホバー時に `border-bottom: 1px solid #333333`
- Font: ヒラギノ明朝 / `letter-spacing: 0.05em`
- ナビ項目は下線を持たず、字間と余白で区切る

### Buttons

塗りボタンは基本的に使わない。使う場合も罫線ベースにする。

**Outline（罫線ボタン）**
- Background: `transparent`
- Text: `#333333`
- Border: `1px solid #333333`（または `border-bottom` のみ）
- Padding: `10px 24px`
- Border Radius: `0`
- Font: ヒラギノ明朝 / `letter-spacing: 0.1em`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #d9d9d9`（または下線 1 本）
- Border (focus): `1px solid #333333`
- Border Radius: `0`
- Padding: `8px 0`
- Font Size: 13–16px（Avenir 系）

### Cards

- Background: `#ffffff`
- Border: なし（余白と写真で区切る）
- Border Radius: `0`
- Shadow: なし
- 製品カードは黒背景の写真＋明朝のキャプションのみ。装飾を足さない

---

## 5. Layout Principles

### Spacing Philosophy

余白＝主役。要素は詰めず、写真とテキストの間に大きな"間（ま）"を取る。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 32px |
| L | 64px |
| XL | 96px |
| XXL | 160px |

### Container

- Max Width: 1080–1200px（写真は中央に幅を絞って配置）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（製品一覧は 2〜3 カラム、余白を広く）
- Gutter: 32–48px
- トップは「ロゴ＋ナビ → 1枚の大判写真 → 余白」というギャラリー的構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。全ての面はフラット |

- 影は使わない。奥行きは「白い余白」と「黒い写真面」のコントラストだけで表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は必ずヒラギノ明朝（代替: Shippori Mincho / Noto Serif JP）で組む
- 文字色は `#333333`、リンクは `#666666`。純黒は使わない
- ナビ・見出しは `letter-spacing: 0.1〜0.2em` と大きく開く
- 本文は `line-height: 1.8` で明朝の細線を活かす
- 余白を大きく取り、写真を主役にする（黒背景の製品写真）

### Don't（禁止）

- 明朝をゴシックに置き換えない（ブランドの根幹）
- 角丸・ドロップシャドウ・塗りボタンを使わない
- 彩度のある色を足さない（Gutenberg 標準カラーは未使用）
- ナビの字間を詰めない（`0.1em` 未満にしない）
- 本文の line-height を 1.5 未満にしない

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 1〜2 カラム |
| Desktop | > 1024px | 2〜3 カラム＋大判写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px（字間の広いテキストリンクは領域を十分に確保）

### フォントサイズの調整

- モバイルでもナビの `letter-spacing` は 0.15em 程度を保つ
- 本文は 15–16px を維持し、余白の"間"を崩さない

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary:  #333333
Text Secondary:#666666
Background:    #ffffff
Panel:         #f3f4f4
Wafumi Font:   "Hiragino Mincho W3 JIS2004", "ヒラギノ明朝 Pro W3", "游明朝", serif
Latin Font:    Avenir, "Open Sans", "Helvetica Neue", sans-serif
Body Size:     16px
Line Height:   1.8
Nav tracking:  letter-spacing 0.2em
Radius/Shadow: 0 / none（角丸・影なし）
```

### プロンプト例

```
東屋のデザインシステムに従って、製品紹介ページを作成してください。
- 和文はヒラギノ明朝（代替: Shippori Mincho）、欧文・数字は Avenir（代替: Jost）
- 文字色 #333333、リンク #666666、背景 #ffffff、色は足さない
- ナビ・見出しは letter-spacing 0.2em、本文は line-height 1.8
- 角丸・影・塗りボタンを使わず、罫線とテキストのみで構成
- 製品写真は黒背景で大きく見せ、余白を主役にする
```

### ヒラギノ明朝が使えない環境での代替指針

- 和文明朝 → **Shippori Mincho**（しっぽり明朝）／ Noto Serif JP（Light〜Regular）
- 欧文 Avenir → **Jost** ／ Montserrat
- どの代替でも「明朝・モノクローム・広い字間・大きな余白・装飾ゼロ」を守れば東屋の静けさは再現できる
