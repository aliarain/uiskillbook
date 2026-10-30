# DESIGN.md — POLA

> POLA 公式サイト（https://www.pola.co.jp/）のデザイン仕様書。
> 1929 年創業の日本を代表する高級化粧品ブランド。「Science. Art. Love.」を掲げ、研究・芸術・愛をブランドの3軸とする。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 高級化粧品ブランドにふさわしい、**徹底したミニマリズムとモノクローム**。プロダクトと写真の主役性を最大化するため、UI 自体を限りなく薄くする
- **密度**: 余白優先のメディア的レイアウト。商品を 1 枚絵のように見せる雑誌的構成
- **キーワード**: ミニマル、モノクローム、Yu Gothic、palt、エディトリアル、余白、ラグジュアリー
- **特徴**: 全要素に **`font-feature-settings: "palt" 1`** が適用され（**body にも palt**）、商品ラベルから本文まで一貫して詰め組み。本文行間は **1.75（28px / 16px）** とゆとりを持たせ、見出しは **40px / 24px = 1.67** とエディトリアル仕様。**カラフルな色相を一切使わず、純黒 + 純白 + 微小なグレーのみ**で構成。CTA は黒ベタ塗りの角張りボタン

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — 純黒運用）

- **POLA Black** (`#000000`): 本文・見出し・CTA 背景すべて純黒。ブランド識別色
- **POLA White** (`#ffffff`): 背景・反転テキスト

### Surface（面色）

- **Background** (`#ffffff`): ページ背景
- **Surface Gray** (`#f5f5f5`): 最頻出の面色（出現 39 回）。製品カテゴリ「ローション / ミルク / クリーム」エリア・商品カード背景
- **Surface Mid** (`#d8d8d8`): 中位面色（プレースホルダー画像等）
- **Surface Cookie** (`#f4f4f4`): Cookie 同意ダイアログ背景
- **Surface Cookie Border** (`#f8f8f8`): Cookie テーブル背景
- **Border Pale** (`#e5e5e5`): セクション境界線・入力欄ボーダー

### Text

- **Text Primary** (`#000000`): 本文・見出し・リンクすべて純黒
- **Text Inverse** (`#ffffff`): 黒地ボタン上のテキスト

### Accent（ごく稀 — システム由来）

- **Status Blue** (`#003da5` / `#3860be`): Cookie 同意ダイアログの OneTrust 由来（POLA ブランドの色ではない）

> **Note**: POLA の UI に色相は存在しない。**完全モノクローム**。商品写真の色彩を引き立たせるための徹底した白黒設計。アクセント色を必要としないのが POLA らしさ。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- 游ゴシック体 / YuGothic
- 游ゴシック / "Yu Gothic"
- ヒラギノ角ゴ Pro W3 / "Hiragino Kaku Gothic Pro W3"（**ProN ではなく Pro**）
- ヒラギノ角ゴ Pro / "Hiragino Kaku Gothic Pro"

明朝体は使用しない（ロゴ画像等を除く）。

### 3.2 欧文フォント

POLA は和文フォント内蔵の欧文グリフをそのまま使用。独立した欧文フォント指定はなし。

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family:
  游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3",
  "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
  sans-serif;

/* 全要素に palt 適用 */
font-feature-settings: "palt" 1;
```

**フォールバックの考え方**:
- 游ゴシック体を最優先（POLA は YuGothic を中核に据える）
- ヒラギノは **Pro（旧 JIS 字形）** を採用（**ProN ではない**点に注意 — 中川政七商店等が ProN なのと異なる）
- フォールバックチェーンは 4 段階のみと簡潔
- メイリオ・MS Pゴシック等の Windows レガシーは含めない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h1) | 游ゴシック体 | 28px | 400 | 48px (1.71) | normal | ページタイトル（ブランドページ等） |
| Section (h2) | 游ゴシック体 | 24px | 400 | 40px (1.67) | normal | メジャーセクション見出し |
| Sub Section (h2 alt) | 游ゴシック体 | 21.92px | 600 | 26.3px (1.2) | normal | 中位見出し |
| Card (h3) | 游ゴシック体 | 16px | 700 | 20.8px (1.3) | normal | カード見出し |
| Card Compact (h3) | 游ゴシック体 | 14px | 700 | 19.6px (1.4) | normal | 小見出し |
| Card Sub (h4) | 游ゴシック体 | 14px | 700 | 18.2px (1.3) | normal | サブ見出し |
| Body | 游ゴシック体 | 16px | 400 | 28px (1.75) | normal | サイト全般の本文 |
| Body Lead | 游ゴシック体 | 18px | 400 | 32px (1.78) | normal | 大きめの本文・リードコピー |
| Caption | 游ゴシック体 | 13px | 400 | 20px (1.54) | normal | キャプション・補足 |

### 3.5 行間・字間

- **本文の行間**: **1.75**（16px / 28px）。日本語サイトとしてはゆとりのある値。エディトリアル・雑誌的読み心地
- **見出しの行間**: 1.2–1.78。h1（28px / 48px = 1.71）・h2（24px / 40px = 1.67）はゆったり、h3 系は 1.2–1.4 で詰める
- **letter-spacing**: 全要素で `normal`（POLA は字間を開けない）
- **本文の字間**: `letter-spacing: normal`（ただし palt が効いているのでベタ組みではなくプロポーショナル詰め）

**ガイドライン**:
- 本文は 16px / line-height 1.75 がベース。雑誌的なゆとりを確保
- 見出しは line-height 1.67 程度でゆったりと組む
- letter-spacing は使わず、**palt の自動字詰めで美しさを保つ**

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
word-break: normal;
line-break: strict;
```

- 商品名は折り返し可、価格・型番は折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: "palt" 1;
```

- **palt は全要素に適用**（POLA の特徴。本文・h1〜h4・p・a・span・button・nav・footer すべてに `"palt"` が効いている）
- これは見出し限定でなく **body 継承で全面適用** されている
- 結果として、和欧混植・カタカナ商品名（「リンクル ショット メディカル セラム N」等）が美しく詰まって表示される

### 3.8 縦書き

- 該当なし（横書き運用）

---

## 4. Component Stylings

### Buttons

**Primary CTA（黒ベタ塗り）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `9px`（実測）/ 推奨 `12px 24px`
- Border: `1px solid #000000`
- Border Radius: `0px`（角張り）
- Font Size: 16px / Weight 400 / line-height 1.75
- font-feature-settings: `"palt" 1`

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: 1px solid `#e5e5e5` / `#000000`
- Padding: `0 30px 0 0`（リスト内）
- Border Radius: `0px`
- Font Size: 18px / Weight 400

**Tag / Status Badge（システム由来）**
- Background: `#003da5`
- Text: `#ffffff`
- Border Radius: `8px`
- Font Size: 13px / Weight 400 / line-height 20px
- ※ ブランドカラーではなく Cookie バナーのシステム色。POLA 自身のバッジは原則使わない

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Border Radius: `0px`
- Padding: `8px 12px`
- Font Size: 16px / Weight 400 / line-height 1.75
- font-feature-settings: `"palt" 1`

### Cards

- Background: `#ffffff` / `#f5f5f5`（カテゴリカード）
- Border: なし
- Border Radius: `0px`（カードに角丸を一切使わない）
- Padding: ゆとりのある余白（24–48px）
- Shadow: なし（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | カード内の細かい間 |
| M | 16px | 段落間 |
| L | 24px | セクション内ブロック間 |
| XL | 40–60px | セクション間 |
| XXL | 80–120px | メジャーセクション間 |

### Container

- Max Width: 約 1200–1280px
- Padding (horizontal): 16〜40px
- Header 高さ: `--header-h: 60px`（カスタムプロパティ）

### Grid

- 商品カード: 4 カラム（PC）/ 2 カラム（SP）
- カテゴリカード（ローション / ミルク / クリーム）: 3〜4 カラム
- ガッターは広め（24–40px）。エディトリアル感を保つ

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラット運用が原則） |
| 1 | `0 1px 3px rgba(0, 0, 0, 0.06)` | スティッキーヘッダーのみ |

> POLA はシャドウを実質使わない。階層は **色面（`#fff` / `#f5f5f5`）の差** だけで作る。商品写真の主役性を奪わないための設計。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文は `游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", sans-serif` の 4 段フォールバックで指定
- **すべての要素に `font-feature-settings: "palt" 1` を適用**（POLA の最重要特徴）
- 配色は **`#000000` / `#ffffff` / `#f5f5f5` / `#e5e5e5`** の 4 色を基本とする
- テキストは **純黒（#000000）** を使う（POLA は数少ない純黒運用ブランド）
- 本文は 16px / line-height 1.75（28px）と**ゆとりのある行間**で組む（雑誌的）
- 見出しは line-height 1.67（24px / 40px）程度でゆったりと組む
- すべての CTA・カード・入力欄は **`border-radius: 0px`**（角張り）
- ヒラギノは **Pro（ProN ではない）** を指定する（POLA の特徴）
- メイリオ・MS Pゴシックなどの Windows レガシーフォントはフォールバックに含めない
- box-shadow は使わず、面色（#fff / #f5f5f5）の差で階層を表現

### Don't（禁止）

- カラフルな色を使わない（POLA は完全モノクローム。Cookie バナーの青 #003da5 は OneTrust 由来でブランド色ではない）
- ヒラギノ ProN を指定しない（POLA は Pro）
- 角丸を使わない（pill / rounded card は POLA のデザインに反する）
- 本文の line-height を 1.5 以下にしない（雑誌的なゆとりが失われる）
- 文字サイズを詰め込まない（情報密度より余白優先）
- `letter-spacing` を明示的に開けない（palt が効いているのでベタ組みより自然な詰め組みになる）
- 大きな box-shadow / drop-shadow を使わない（フラット原則）
- 明朝体を本文に使わない（POLA は徹底ゴシック運用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル（1〜2 カラム） |
| Tablet | 768–1023px | 2〜3 カラム |
| Desktop | ≥ 1024px | 3〜4 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px（Header 高さ 60px がベース）

### フォントサイズの調整

- モバイル本文は 14–16px を維持
- h1（28px）はモバイルで 22–24px に縮小、line-height 1.67 を保つ
- h2（24px）はモバイルで 20–22px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Black: #000000 (純黒。本文・見出し・CTA すべて)
Background: #ffffff
Surface Gray: #f5f5f5 (最頻出のカテゴリ面色)
Surface Mid: #d8d8d8
Border Pale: #e5e5e5
Font: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", sans-serif
Body Size: 16px / Weight 400 / line-height 28px (1.75) / letter-spacing normal
Display H1: 28px / Weight 400 / line-height 48px (1.71)
Section H2: 24px / Weight 400 / line-height 40px (1.67)
Card H3: 16px / Weight 700 / line-height 20.8px (1.3)
font-feature-settings: "palt" 1 (全要素に適用!)
Border Radius: 0px (すべて角張り)
Shadow: なし (フラット原則)
CTA: bg #000000 / text #ffffff / border 1px solid #000 / radius 0 / padding 9px (16px / weight 400)
```

### プロンプト例

```
POLA のデザインシステムに従って、化粧品ブランドサイトを作成してください。
- 背景: #ffffff、テキスト: #000000（純黒を使用）
- 本文フォント: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", sans-serif
- 全要素に font-feature-settings: "palt" 1 を適用（POLA の最重要特徴。body 継承で全面適用）
- 本文は 16px / line-height 28px (1.75) / letter-spacing normal（雑誌的なゆとり）
- h1 は 28px / Weight 400 / line-height 48px (1.71)
- h2 は 24px / Weight 400 / line-height 40px (1.67)
- カード見出し h3 は 16px / Weight 700 / line-height 20.8px (1.3)
- すべての CTA・カード・入力欄は border-radius: 0px（角張り）
- 配色は #000 / #ffffff / #f5f5f5 / #e5e5e5 の 4 色のみ（カラフルな色は使わない）
- 商品カードのカテゴリ面色は #f5f5f5（最頻出）
- CTA は bg #000000 / text #ffffff / border 1px solid #000 / radius 0 / padding 9px
- ヒラギノは Pro（ProN ではない）を指定
- メイリオ・MS Pゴシック等の Windows レガシーフォントはフォールバックに含めない
- box-shadow は使わず、面色（#fff / #f5f5f5）の差だけで階層を表現
- 明朝体は使わない（徹底ゴシック運用）
- letter-spacing は明示的に開けない（palt が美しく詰めるのでベタ組みより自然）
```
