# DESIGN.md — D-BROS（ディーブロス）

> D-BROS（https://www.d-bros.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: デザインオフィス DRAFT のプロダクトブランド。**単一フォントスタック（Inter + Yu Gothic）** と **ビビッドマゼンタ（#fc00d5）のアクセント** が特徴。全体を weight 300 の超軽量タイポグラフィで統一し、プロダクトの造形美をコンテンツに語らせるミニマルな設計。Tailwind CSS ベースのユーティリティ構成で、装飾を排したグラフィックデザイナー的美意識が貫かれている
- **密度**: ゆったりとしたプロダクトショーケース型。マガジンセクションとプロダクト一覧を大きなビジュアルで展開。テキスト量を絞り、画像で語るアプローチ
- **キーワード**: Inter × Yu Gothic、マゼンタアクセント、weight 300 統一、Tailwind CSS、デザイナーズプロダクト
- **特徴**: **ビビッドマゼンタ `#fc00d5`** が唯一のアクセントカラー。"MORE" リンクやアイコンにのみ使用され、全体のモノトーン基調に強烈なコントラストを生む。ボタンは `#333333` の角丸 5px で統一。全テキストが weight 300 という徹底した軽さが、DRAFT のデザイン哲学を体現

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

D-BROS のカラーパレットはモノトーン＋単一アクセントの二極構成。

- **Brand Black** (`#1a1a1a`): 本文テキスト・見出し（rgb 26, 26, 26）
- **Vivid Magenta** (`#fc00d5`): アクセントカラー。"MORE" リンク・矢印アイコンに使用（rgb 252, 0, 213）

### Text & Neutral

- **Text Primary** (`#1a1a1a`): 本文テキスト（rgb 26, 26, 26）
- **Text Secondary** (`#666666`): フッター補足テキスト（rgb 102, 102, 102）
- **Text Muted** (`#333333`): ナビゲーション（モバイル）（rgb 51, 51, 51）
- **Text on Dark** (`#ffffff`): ボタン上・ダークセクション
- **Date Muted**: opacity 40%（`#1a1a1a` に opacity-40 → 実効 rgba(26,26,26,0.4)）

### Surface

- **Surface White** (`#ffffff`): 標準背景
- **Surface Dark** (`#333333`): CTA ボタン・カートボタン背景
- **Surface Light** (`#e5e5e5`): 区切り線・ボーダー（rgb 229, 229, 229）

### Semantic

- 明示的な Success/Warning/Error カラーは抽出されていない。ECプラットフォーム（Shopify）のデフォルトに準拠と推定

---

## 3. Typography Rules

### 3.1 和文フォント

D-BROS は**全テキストに Inter + Yu Gothic の単一フォントスタック**を使用。

- **Yu Gothic**: YuGothic, "Yu Gothic Medium", "Yu Gothic" — Windows 環境では Medium 指定あり
- Inter が先頭に来るため、欧文グリフは Inter で表示される

### 3.2 欧文フォント

- **Inter**: 全テキスト共通。欧文部分をカバーし、Yu Gothic の和文グリフと組み合わせ

### 3.3 font-family 指定

```css
/* 全テキスト共通 */
font-family: Inter, YuGothic, "Yu Gothic Medium", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- Inter を先頭に配置し、欧文の統一感を確保
- Yu Gothic は Medium ウェイトを明示指定（Windows の細字問題対策）
- Tailwind CSS のデフォルト設定をカスタマイズした構成

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 (hero) | Inter + YuGothic | 28px | 300 | 1.5 (42px) | 0.025em | "MAGAZINE" 等 / text-xl |
| Heading 2 (section) | Inter + YuGothic | 22px | 300 | 1.5 (33px) | 0.025em | text-lg |
| Heading 3 (card) | Inter + YuGothic | 14px | 300 | 1.625 (23px) | 0.025em | text-sm |
| Body | Inter + YuGothic | 16px | 300 | 1.75 (28px) | 0.025em | 本文 |
| Caption / Date | Inter + YuGothic | 12px | 300 | 1.625 (19.5px) | 0.025em | text-xs |
| Section Label | Inter + YuGothic | 12px | 300 | 1.625 | 0.025em | "NEWS" 等 / opacity-60 |
| Nav | Inter + YuGothic | 16px | 400 | 1.75 | 0.05em | tracking-wider |
| Nav (mobile) | Inter + YuGothic | 16px | 300 | 1.75 | 0.05em | tracking-wider |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.75（16px / 28px）— Tailwind の leading-relaxed 相当
- **見出しの行間**: 1.5
- **グローバル字間 (letter-spacing)**: 0.025em（0.4px at 16px）— 全テキストに均一適用
- **ナビゲーション字間**: 0.05em（tracking-wider）

**ガイドライン**:
- letter-spacing 0.025em がグローバルに適用されており、要素ごとの変化は最小限
- weight 300 と広めの line-height 1.75 の組み合わせで、軽やかで読みやすいテキスト
- 日付やラベルには opacity で視覚的階層を作る（opacity-40, opacity-60）

### 3.6 禁則処理・改行ルール

```css
/* Tailwind CSS デフォルト */
word-break: normal;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

- `font-feature-settings: normal` — palt・kern は未使用

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（ダークグレー）**
- Background: `#333333`
- Text: `#ffffff`
- Padding: `8px 16px`
- Border Radius: `5px`
- Border: `1px solid transparent`
- Font Size: 14px
- Font Weight: 300

**Ghost（テキストリンク）**
- Background: `transparent`
- Text: `#1a1a1a`
- Decoration: underline (hover)
- underline-offset: 4px

### "MORE" Links

- Color: `#fc00d5`（ビビッドマゼンタ）
- Font Size: 16px
- Font Weight: 300
- 矢印アイコンも同色

### Inputs

- Border: `0px solid #e5e5e5`
- Background: transparent
- Font Size: 16px
- Font Weight: 300

### Cards（プロダクト / マガジン）

- Background: `#ffffff`
- Border: なし
- Border Radius: なし
- Shadow: なし
- テキストは画像の下にフラットに配置

---

## 5. Layout Principles

### Spacing Scale

Tailwind CSS のデフォルトスケールに準拠。

| Token | Value |
|-------|-------|
| 1 | 4px |
| 2 | 8px |
| 4 | 16px |
| 6 | 24px |
| 8 | 32px |
| 12 | 48px |
| 16 | 64px |

### Container

- Max Width: 約 1280px
- Padding (horizontal): 16px（モバイル）〜 64px（デスクトップ）

### Grid

- Columns: 1〜4（レスポンシブ）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

D-BROS は完全なフラットデザイン。影・グラデーションは一切使用しない。

---

## 7. Do's and Don'ts

### Do（推奨）

- 全テキストの font-weight を 300 に統一する
- アクセントカラー `#fc00d5` は "MORE" リンクや矢印アイコンにのみ使用する
- letter-spacing 0.025em をグローバルに適用する
- ナビゲーションには tracking-wider（0.05em）を使用する
- 日付やラベルには opacity（40%〜60%）で視覚的階層を作る
- ボタンの角丸は 5px を統一する

### Don't（禁止）

- font-weight 400 以上を本文に使用しない（ナビゲーションの 400 は例外）
- マゼンタ `#fc00d5` をボタン背景やテキスト全体に使わない（アクセントとしてのみ）
- box-shadow を追加しない
- 追加のフォントファミリーを導入しない（Inter + Yu Gothic の単一スタックを維持）
- border-radius を 5px 以外に変更しない（ボタン以外は 0px）
- テキストカラーに純黒 `#000000` を使用しない（`#1a1a1a` を使用）

---

## 8. Responsive Behavior

### Breakpoints

Tailwind CSS デフォルトブレークポイントに準拠。

| Name | Width | 説明 |
|------|-------|------|
| sm | ≥ 640px | 小画面 |
| md | ≥ 768px | タブレット |
| lg | ≥ 1024px | デスクトップ |
| xl | ≥ 1280px | 大画面 |

### タッチターゲット

- ナビゲーション: padding 16px で十分なタッチ領域を確保

### フォントサイズの調整

- 見出しサイズは Tailwind のレスポンシブユーティリティで段階的に縮小
- 本文 16px はすべての画面サイズで維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color: #1a1a1a
Accent: #fc00d5 (vivid magenta)
Button BG: #333333
Background: #ffffff
Border: #e5e5e5
Font: Inter, YuGothic, "Yu Gothic Medium", "Yu Gothic", sans-serif
Body Size: 16px / Weight 300
Line Height: 1.75
Letter Spacing: 0.025em (global)
Border Radius: 5px (buttons only)
```

### プロンプト例

```
D-BROS のデザインシステムに従って、プロダクト一覧ページを作成してください。
- フォント: Inter, YuGothic, "Yu Gothic Medium", "Yu Gothic", sans-serif
- 全テキスト weight 300、letter-spacing 0.025em
- 本文 16px、line-height 1.75
- ボタン: #333333 背景、白テキスト、角丸 5px、padding 8px 16px
- "MORE" リンクはマゼンタ #fc00d5
- 日付は opacity-40 で薄く表示
- 影なし、完全フラットデザイン
```
