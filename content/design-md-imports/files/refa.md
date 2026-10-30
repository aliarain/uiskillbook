# DESIGN.md — ReFa

> ReFa（https://refa.net/）のデザイン仕様書。MTGが展開するプレミアム美容デバイスブランド。
> 実サイトのCSS computed style に基づく。取得日: 2026-05-09

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 上質なビューティーテックブランド。高級感・洗練・クリーンを徹底し、製品写真とタイポグラフィで世界観を構築する。装飾的な色彩に頼らず、文字の大きさと字間のコントラストで表現力を生み出す
- **密度**: 余白を大きく取ったエディトリアル型。ヒーローは全幅スライダー、セクションは余裕のある構成
- **キーワード**: プレミアム、洗練、清潔感、エディトリアル、ラグジュアリー
- **特徴**: 純粋な黒（`#000000`）ではなく、ダークチョコレートブラウン `#231815` をテキスト色として採用し、温かみのある高級感を演出。アクセントカラーは持たず、タイポグラフィと製品写真がブランドを語る

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Brand Dark** (`#231815`): テキストのプライマリカラー。純黒でなくダークチョコレートブラウンを使用し、柔らかな高級感を生む
- **On-dark Text** (`#ffffff`): 暗い背景・スライダー上のテキスト

### Neutral（ニュートラル）

- **Text Primary** (`#231815`): 本文・見出し。サイト全体で一貫して使用
- **Surface Light** (`#ebeef0`): カード背景・スライド背景（rgb 235, 238, 240）— わずかにブルーがかったライトグレー
- **Background** (`#ffffff`): ページ背景

### Border & UI

- **Border Outline CTA** (`#ffffff` / `transparent`): アウトラインボタンの枠線。暗い背景上では白、明るい背景上では半透明

### Semantic

- このブランドは赤（エラー）・緑（成功）等のセマンティックカラーをUIで強調していない。ECフローの必要箇所のみシステムデフォルトを使用する

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（プライマリ）**: Noto Sans JP — Google Font。全体のベースに使用
- **約物処理（Yakuhanjp）**: Yakuhanjp — 日本語の約物（読点・句点・括弧等）前後のスペースを除去し、詰まった美しい組版を実現

### 3.2 欧文フォント

- **サンセリフ（セクション見出し）**: Figtree — Google Font。幾何学的サンセリフ。セクション見出し・英語ラベルに使用
- **汎用フォールバック**: sans-serif

### 3.3 font-family 指定

```css
/* 英語見出し（セクションヘッダー・英語ラベル） */
font-family: Yakuhanjp, Figtree, sans-serif;

/* 日本語本文・小見出し */
font-family: Yakuhanjp, "Noto Sans JP", sans-serif;

/* body 要素（ブラウザデフォルトフォールバック） */
font-family: "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- Yakuhanjp を常に先頭に置き、約物の字詰めをすべての要素で有効にする
- 英語見出しには Figtree（幾何学的サンセリフ）、日本語テキストには Noto Sans JP の順
- 欧文フォントを先に置くことで、英数字の表示品質を Noto Sans JP の欧文グリフより優先する

### 3.4 文字サイズ・ウェイト階層

> DevTools computed style による実測値（2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Slider Label | Noto Sans JP | 12px | 700 | 20px (×1.67) | 1.2px (0.1em) | ヒーロースライダー見出し |
| Section Heading EN | Figtree | 50px | 400 | 50px (×1.0) | 5px (0.1em) | セクション英語見出し |
| Sub Heading EN | Figtree | 30px | 400 | 30px (×1.0) | 3px (0.1em) | サブセクション英語見出し |
| Brand Name JP | Noto Sans JP | 24px | 400 | 44.64px (×1.86) | 2.4px (0.1em) | ブランド名・日本語見出し |
| Category Label | Noto Sans JP | 14px | 400 | 26px (×1.86) | 1.4px (0.1em) | カテゴリラベル |
| Product Name | Noto Sans JP | 12px | 700 | 12px (×1.0) | 1.2px (0.1em) | 製品名（タイト） |
| Body | Noto Sans JP | 14px | 400 | 26px (×1.86) | 1.4px (0.1em) | 本文・説明文 |
| Nav Label JP | Noto Sans JP | 14px | 400 | 26px (×1.86) | 1.4px (0.1em) | ナビゲーション日本語 |
| Nav Label EN | Figtree | 12px | 400 | 22.32px (×1.86) | 1.2px (0.1em) | ナビゲーション英語 |
| Small / Legal | Noto Sans JP | 10px | 400 | 16px (×1.6) | 2px (0.2em) | 注釈・法的テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 英語大見出し (50px/30px Figtree): `1.0` — タイトな行間で劇的な視覚インパクト
- 日本語見出し・本文 (14px/24px): `1.86`（= 26px/14px）— 標準的な日本語読み物の行間
- 製品名 (12px bold): `1.0` — タイトな行間で凝縮感を出す
- 小テキスト (10px): `1.6` — 注釈類は読みやすさを確保

**字間 (letter-spacing)** — 実測値:
- **全要素共通ベース**: `0.1em` — これがReFaの最大の特徴。通常サイトの2〜3倍の字間をすべてに適用し、高級感と空気感を演出
- 小テキスト (10px): `0.2em` — 最小サイズには字間をさらに広げて可読性を確保
- 英語大見出し (50px): `5px` = `0.1em` — 大きなサイズでも比率を維持

**ガイドライン**:
- `letter-spacing: 0.1em` がサイト全体のユニバーサルベース。例外なく適用する
- 英語大見出しは `line-height: 1.0` のタイト設定と `0.1em` の字間の組み合わせがブランドの核
- 日本語テキストは `line-height: 1.86` で可読性とゆとりを両立

### 3.6 禁則処理・改行ルール

```css
/* 標準的な設定 */
word-break: break-word;
overflow-wrap: break-word;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- Yakuhanjp が約物の前後スペースを自動除去するため、手動での `word-spacing` 調整は不要
- フォントスムージングを有効にし、macOS・Retina ディスプレイでの表示品質を確保

### 3.7 OpenType 機能

```css
/* すべての要素にグローバル適用 — 実測確認済 */
* {
  font-feature-settings: "palt";
}
```

- **palt（プロポーショナル字詰め）**: Yakuhanjp と組み合わせ、全要素に適用。本文・見出し・ナビゲーション・ボタンすべてで有効
- これはnote（見出し専用）とは異なるアプローチ。ReFa では palt のグローバル適用がブランドの組版ルール
- Yakuhanjp + palt のダブル適用で、日本語の約物周りをより美しく詰める

### 3.8 縦書き

- 該当なし。ReFa は横書きのみ

---

## 4. Component Stylings

### Buttons

**Outline CTA（プライマリ）**
- Background: `transparent`
- Text: `#ffffff`（暗い背景上）
- Border: `1px solid #ffffff`
- Border Radius: `30px`（pill形状）
- Font: Figtree, 12px, weight 400
- Letter Spacing: `0.1em`
- 用途: ヒーロースライダー上の「ONLINE SHOP」等の主要CTA

**Outline CTA（製品ページ）**
- Background: `transparent`
- Border: `1px solid currentColor`
- Border Radius: `50px`（よりフルなpill）
- Letter Spacing: `0.1em`
- 用途: 製品詳細ページのアクション

**デザイン方針**: ReFa には塗りつぶしボタン（filled button）がない。アウトラインのpillボタンがブランドのCTAスタイル。色で主張するのではなく、形とタイポグラフィで存在感を示す

### Cards

- Background: `#ebeef0`（Surface Light）またはプロダクト写真
- Border: なし（シャドウも基本なし）
- Border Radius: 控えめな角丸（明確な値は文脈依存）
- Padding: 余裕のあるインナー余白

### Navigation

- Background: `#ffffff`（または半透明）
- Text: `#231815`
- Nav Link JP: 14px, Noto Sans JP, letter-spacing 1.4px (0.1em)
- Nav Link EN: 12px, Figtree, letter-spacing 1.2px (0.1em)

### Product Slider / Gallery

- Background: `#ebeef0`
- テキストオーバーレイ: `#231815` on light / `#ffffff` on dark
- スライダーコントロール: シンプルなドット or 矢印

---

## 5. Layout Principles

### Spacing Scale

ReFa は明示的なデザイントークンのスペーシングスケールを公開していないが、実測から以下が推定される:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | インラインの内側余白 |
| S | 16px | コンポーネント内の余白 |
| M | 32px | セクション内の余白 |
| L | 64px | セクション間の余白 |
| XL | 96px | 大セクションの余白 |
| XXL | 120px〜 | ヒーロー・フルスクリーンセクション |

### Container

- Max Width: `1440px`（フルワイドビジュアル）— 製品写真を最大限に活かす設計
- Padding (horizontal): `40〜60px`（デスクトップ）

### Grid

- 製品一覧: 2〜4カラムグリッド（viewport幅に応じて変化）
- ヒーロー: フルワイド（100vw）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード・フラット要素（基本はシャドウなし） |
| 1 | `0 2px 8px rgba(35,24,21,0.08)` | ホバー時のカード等（推定） |

- ReFa は基本的にフラットデザイン。エレベーションよりも背景色（`#ebeef0`）の面で要素を区切る
- ドロップシャドウを多用せず、製品写真の立体感で奥行きを表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#231815`（ダークチョコレートブラウン）を使い、純粋な `#000000` を避ける
- `letter-spacing: 0.1em` をすべてのテキストに適用する（ReFa のブランド字間）
- `font-feature-settings: "palt"` をグローバルに適用する（Yakuhanjp と組み合わせて使う）
- 英語見出しには Figtree を使い、日本語テキストには Noto Sans JP を使う
- CTAボタンはpill形状（border-radius 30px〜50px）のアウトラインスタイルに統一する
- 大見出し（英語）は `line-height: 1.0` + `letter-spacing: 0.1em` のタイト組みで表現力を出す
- 日本語本文は `line-height: 1.86` で余裕のある行間を確保する
- font-family は必ず Yakuhanjp を先頭に置き、約物の字詰めを有効にする

### Don't（禁止）

- 純粋な `#000000` をテキストに使わない（ブランドの暖かみが失われる）
- 塗りつぶしボタン（solid/filled button）を作らない（ReFa のCTAはアウトライン一択）
- `letter-spacing: 0` または `letter-spacing: normal` にしない（高級感が消える）
- `palt` を見出しだけに絞らない（ReFa はグローバル適用がルール）
- Figtree と Noto Sans JP を混在させる場合、font-family チェーンの順序を崩さない
- 10px 未満のフォントサイズを使わない（最小は `10px`）
- `line-height: 1.0` を日本語本文に適用しない（英語大見出し専用の設定）
- アクセントカラー（赤・青・オレンジ等）を装飾目的で追加しない（モノクロームなカラー設計を守る）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。1カラム |
| Tablet | ≤ 1024px | タブレット。2カラムに移行 |
| Desktop | > 1024px | デスクトップ。フルワイドビジュアル |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- Pillボタンは高さ 44px 以上を確保する

### フォントサイズの調整

- 英語大見出し (50px): モバイルでは 28〜36px 程度に縮小
- 日本語見出し (24px): モバイルでは 18〜20px に調整
- 本文 (14px) とNav (12px〜14px): 変更なし
- `letter-spacing: 0.1em` の比率は viewport に関係なく維持する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #231815（ダークチョコレートブラウン — 純黒は使わない）
On-dark Text: #ffffff
Surface Light: #ebeef0
Background: #ffffff

Font EN (見出し): Yakuhanjp, Figtree, sans-serif
Font JP (本文・ラベル): Yakuhanjp, "Noto Sans JP", sans-serif

Body Size: 14px
Body Line Height: 1.86
Universal Letter Spacing: 0.1em（全要素共通）
Small Label Letter Spacing: 0.2em（10px以下のテキスト）

Section Heading EN: 50px, weight 400, line-height 1.0, letter-spacing 0.1em, Figtree
Sub Heading EN: 30px, weight 400, line-height 1.0, letter-spacing 0.1em, Figtree
Brand Name JP: 24px, weight 400, line-height 1.86, letter-spacing 0.1em, Noto Sans JP

CTA Button: pill (border-radius 30〜50px), outline only, transparent bg
palt: グローバル適用（全要素）
```

### プロンプト例

```
ReFa のデザインシステムに従って、製品カード一覧を作成してください。
- テキスト色: #231815（ダークチョコレートブラウン。#000000 は使わない）
- カード背景: #ebeef0、ページ背景: #ffffff
- フォント（英語見出し）: Yakuhanjp, Figtree, sans-serif
- フォント（日本語）: Yakuhanjp, "Noto Sans JP", sans-serif
- font-feature-settings: "palt" をすべての要素に適用
- letter-spacing: 0.1em をすべてのテキストに適用
- 本文 line-height: 1.86、英語大見出し line-height: 1.0
- CTAボタン: border-radius 30px のアウトラインpill。塗りつぶし不可
- shadow なし。フラットデザイン
```
