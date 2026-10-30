# DESIGN.md — 1LDK

> 1LDK 公式サイト（https://1ldkshop.com/）のデザイン仕様書。
> 2008 年中目黒で創業したファッションセレクトショップ。"Life in one room" をコンセプトに、国内外の洋服・雑貨・食品を「一部屋に収まる暮らし」の視点でキュレーション。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウルトラミニマル。装飾を限界まで削ぎ落とし、タイポグラフィと余白だけで構成する
- **密度**: 極めて低い。ファッションエディトリアル的な「引き」のレイアウト。大きなスライドヒーロー、限られた要素数
- **キーワード**: ミニマル、モノクローム、欧文主導、エディトリアル、セレクトショップ
- **特徴**: 欧文フォント **Montserrat** がサイト全体を支配。和文は Noto Sans JP / ヒラギノ角ゴ ProN をフォールバックとして使用するが、見出し・ナビ・ラベルのほとんどが英語表記。色付きの CTA ボタンは存在せず、テキストリンクとモノクロのタイポグラフィだけでナビゲーションを構成する。ファッション誌のような静謐さ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — 徹底的なモノクローム）

- **Black** (`#000000`): テキスト・見出し・ナビリンクの主色。純黒をそのまま使う
- **White** (`#ffffff`): ページ背景・反転テキスト

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文、見出し、ナビリンク
- **Text Secondary** (`#969696`): 日付、フッターリンク、価格の補助情報
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#ffffff`): カード等の面（背景と同一、区切り線で区別）
- **Border** (`#e0e0e0`): メニュー展開時の区切り線（実測推定）

### Semantic（意味的な色 — 推奨値）

- **Danger** (`#b00020`): エラー、削除操作（実サイトでの使用は未確認、推奨値）
- **Warning** (`#d97a00`): 警告表示（推奨値）
- **Success** (`#2e7d4f`): 成功表示（推奨値）

### Interactive — ONLINE STORE リンク

- **Online Store Link BG** (`#000000`): グローバルナビの「ONLINE STORE」バナー背景
- **Online Store Link Text** (`#ffffff`): 白抜きテキスト

> **Note**: 1LDK の UI には**色相が存在しない**。黒・白・グレー (#969696) の 3 色だけで全体を構成する。ブランドアイデンティティは色ではなく、Montserrat の書体選択と余白の取り方で表現される。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（和文フォールバック）**:
- Noto Sans JP（Google Fonts / Web フォント）
- ヒラギノ角ゴ ProN W6 / Hiragino Kaku Gothic ProN（macOS）
- ヒラギノ角ゴ Pro / Hiragino Kaku Gothic Pro

> 1LDK は和文フォントを独立で使うことがほぼなく、Montserrat のフォールバックとして日本語文字が必要な場合にのみ描画される。

### 3.2 欧文フォント

- **Montserrat**（Google Fonts）: サイト全体の主書体。見出し・本文・ナビ・価格すべてに使用
- body 宣言は `Montserrat, serif` だが、実質的にはサンセリフとしての運用

### 3.3 font-family 指定

```css
/* body 宣言（実測値） */
font-family: Montserrat, serif;

/* 和文を含むテキスト（スライドコピー、ブログタイトル等） */
font-family: Montserrat, "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ ProN W6", sans-serif;

/* 和文フォールバック（軽量、ブログタイトル等） */
font-family: Montserrat, "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ ProN W3", sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**: Montserrat を最優先に置く。サイトの見出し・ナビ・ラベルは英語が大半
- 和文は Noto Sans JP → ヒラギノ角ゴ ProN の順でフォールバック
- ヒラギノは **ProN** を採用（JIS2004 字形）
- body 宣言の `serif` フォールバックは実際には serif 書体が使われる場面がなく、形式的な指定

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo | Montserrat | 24px | 400 | 1.0 | 0.05em | h1 ロゴ「1LDK」 |
| Hero Copy | Montserrat + Noto Sans JP | 24px | 700 | 42px (1.75) | 0.05em | スライドのキャッチコピー（和欧混植） |
| Section H2 | Montserrat | 21px | 700 | 1.2 | 0.05em | 「BLOG」等のセクション見出し |
| Nav Link | Montserrat | 18px | 700 | 1.2 | 0.05em | 「ONLINE SHOP」等のナビリンク |
| Nav Sub | Montserrat | 16px | 700 | 1.2 | 0.05em | グローバルナビの「ONLINE STORE」リンク |
| Body | Montserrat | 12px | 400 | 12px (1.0) | 0.6px (0.05em) | サイト全般の本文ベース |
| Product Name | Montserrat | 12px | 700 | 22.2px (1.85) | 0.05em | 商品名 |
| Price | Montserrat | 12px | 400 | 1.0 | 0.05em | 価格表示 |
| Category Label | Montserrat | 10px | 400 | 1.2 | 0.05em | 「FEATURE」等のカテゴリラベル |
| Date | Montserrat | 10px | 400 | 1.2 | 0.05em | 日付表示 (`color: #969696`) |
| Blog Title | Montserrat + Noto Sans JP | 12px | 400 | 1.5 | 0.05em | ブログ記事タイトル（和欧混植） |
| Footer | Montserrat | 12px | 400 | 1.0 | 0.05em | フッターリンク (`color: #969696`) |

### 3.5 行間・字間

- **本文の行間**: **1.0**（body 宣言）。欧文ファッションサイトとして極めてタイトな line-height
- **和欧混植コピーの行間**: **1.75**（hero copy 42px / 24px）。和文を含む場合は広めに確保
- **商品名の行間**: **1.85**（22.2px / 12px）。小さい文字に対して余裕を持たせる
- **字間 (letter-spacing)**: **0.6px**（12px 基準で **0.05em**）。サイト全体でグローバルに適用
  - すべてのテキスト要素で一律 0.05em の字間が入る
  - 和文本文にも同じ値が適用される（palt は使わない）

**ガイドライン**:
- 本文の line-height が 1.0 と極端にタイトだが、これは body 宣言の値。実際の可読なテキストブロック（コピー・商品名）では 1.5〜1.85 に引き上げられている
- `letter-spacing: 0.05em` がサイト全体の「空気感」を作る重要な要素。Montserrat の字間を僅かに広げることで、ファッション誌的な上品さを演出
- 和文テキストでも同じ 0.05em を適用。palt は不使用

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
word-break: normal;
```

- テキスト量が少ないため、禁則処理が問題になる場面はほぼない
- 商品名・ブログタイトルは改行しない前提の短いテキスト

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使わない**
- **kern も明示指定なし**
- Montserrat のデフォルトメトリクスをそのまま使う

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons — テキストリンク主導の UI

1LDK は従来的なボタン（色付き背景 + テキスト）をほぼ使わない。ナビゲーションはすべてテキストリンクで構成される。

**ONLINE STORE リンク（唯一の強調 CTA）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 16px 24px
- Border Radius: 0px
- Font: Montserrat 16px / Weight 700
- Letter Spacing: 0.05em
- 全幅バナー形式（グローバルナビ直下）

**Text Link（標準ナビゲーション）**
- Background: `transparent`
- Text: `#000000`
- Border: なし
- Font: Montserrat 12–18px / Weight 400–700
- Letter Spacing: 0.05em
- Text Decoration: none（ホバーで underline）
- 例: 「BLOG」「NEWS」「SHOP LIST」

**Footer Text Link**
- Background: `transparent`
- Text: `#969696`
- Font: Montserrat 12px / Weight 400
- Letter Spacing: 0.05em

**Carousel Pager Dot**
- Background: `rgba(255, 255, 255, 0.35)`（非アクティブ）
- Background (active): `#ffffff`
- Size: 10px × 10px
- Border Radius: 5px（円形）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#000000`
- Border Radius: 0px
- Padding: 12px 16px
- Font: Montserrat 12px / Weight 400
- Letter Spacing: 0.05em

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 画像 + テキストを縦に積む最小構成

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 微小間隔 |
| S | 8px | カード内の価格〜ブランド名間 |
| M | 16px | カード間ガッター |
| L | 24px | セクション内ブロック間 |
| XL | 40px | セクション間 |
| XXL | 80px | ヒーロー領域の上下余白 |

### Container

- Max Width: 約 1100px（コンテンツ領域）
- Padding (horizontal): 20–40px
- ヒーローは画面幅いっぱい（フルブリード）

### Grid

- 商品グリッド: 4 カラム（PC）/ 2 カラム（SP）
- ブログ: 3 カラム（PC）
- ガッターは 16–24px
- 全体的に余白を大きく取り、要素間の「間」を重視

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全要素（フラット運用が原則） |

> 1LDK は box-shadow を一切使わない。階層は存在しない——すべてが同じ白い平面の上に、タイポグラフィだけが置かれている。

---

## 7. Do's and Don'ts

### Do（推奨）

- Montserrat を font-family の先頭に置く（欧文優先）
- `letter-spacing: 0.05em` をサイト全体に適用する（ブランドの空気感の源泉）
- 配色は `#000000` / `#969696` / `#ffffff` の 3 色に絞る
- 見出し・ラベル・ナビは英語表記を基本とする（BLOG, NEWS, SHOP LIST, ONLINE STORE 等）
- 和文を含む場合は Noto Sans JP → ヒラギノ角ゴ ProN のフォールバックチェーンを指定する
- カード・入力欄は `border-radius: 0px`（角張り）
- ナビゲーションはテキストリンクで構成する（色付きボタンを使わない）
- 商品カードは画像 + 商品名 + 価格の最小構成にする
- ヒーロー領域は大きなビジュアルで「引き」の構図を作る

### Don't（禁止）

- カラフルな色を使わない（1LDK は完全なモノクローム）
- 色付きの CTA ボタン（青・赤・緑等の背景色）を使わない
- box-shadow / drop-shadow を使わない
- `border-radius` で角丸を使わない（カルーセルドットの円形を除く）
- 装飾的なアイコンやイラストを多用しない
- テキストを詰め込まない（ファッション誌的な「間」が必須）
- `font-feature-settings: "palt"` を使わない
- 和文フォントを font-family の先頭に置かない（Montserrat が先）
- `letter-spacing` を 0 にしない（0.05em の字間がブランドの一部）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | シングルカラム、ハンバーガーメニュー |
| Tablet | 768–1023px | 2 カラムグリッド |
| Desktop | ≥ 1024px | 3–4 カラムグリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px（テキストリンクの場合はパディングで確保）

### フォントサイズの調整

- モバイルでもフォントサイズの変化は最小限。12px のベースサイズを維持
- ヒーローコピーはモバイルで 18–20px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000000
Text Color: #000000
Text Secondary: #969696
Background: #ffffff
Font (Primary): Montserrat, serif
Font (JP fallback): Montserrat, "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ ProN W6", sans-serif
Body Size: 12px / Weight 400 / line-height 1.0 / letter-spacing 0.05em
Hero Copy: 24px / Weight 700 / line-height 1.75 / letter-spacing 0.05em
Section Heading: 21px / Weight 700
Nav Link: 16-18px / Weight 700
Product Name: 12px / Weight 700 / line-height 1.85
Category Label: 10px / Weight 400
Border Radius: 0px (全要素)
Shadow: なし
font-feature-settings: normal (palt 不使用)
letter-spacing: 0.05em (グローバル)
```

### プロンプト例

```
1LDK のデザインシステムに従って、商品一覧ページを作成してください。
- 背景: #ffffff、テキスト: #000000、補助テキスト: #969696
- フォント: Montserrat を先頭に、和文フォールバックに "Noto Sans JP", "Hiragino Kaku Gothic ProN" を指定
- letter-spacing: 0.05em をサイト全体に適用
- 見出しは英語表記（例: "NEW ARRIVALS", "BLOG", "SHOP LIST"）
- 商品カードは画像 + 商品名 (12px Bold) + 価格 (12px Regular) の最小構成
- 商品名の line-height は 1.85
- ナビゲーションはテキストリンクのみ（色付きボタンなし）
- 唯一の強調 CTA は「ONLINE STORE」: bg #000 / text #fff / radius 0
- 配色は #000000 / #969696 / #ffffff の 3 色のみ
- box-shadow は一切使わない
- border-radius は一切使わない
- palt / kern は使わない
```
