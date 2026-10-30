# DESIGN.md — Seiko

> Seiko（https://www.seikowatches.com/）のデザイン仕様書。
> 実サイトの computed style に基づく。Bootstrap ベースのCSS構成。意味的な CSS Custom Properties はなく、Bootstrap デフォルト（`--bs-white`, `--bs-body-bg` 等）のみ使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プレミアム・高精度。時計メーカーとしての信頼と精緻さを視覚で伝える。装飾を削ぎ落とし、写真と余白で上質さを表現するクリーンラグジュアリー
- **密度**: ゆったりとした余白。大きなヒーロー画像とワイドなカードレイアウトで、製品の美しさを際立たせる
- **キーワード**: 精緻、上質、シャープ、信頼、クリーン
- **特徴**: ボタン・CTAに一切の角丸を使わない（`border-radius: 0px`）。直線的でシャープなエッジが、精密機器メーカーとしての矜持を表現。深いネイビーブルー `#193c72` がブランドカラー

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary Navy** (`#193c72`): メインのブランドカラー。CTAボタン、ナビゲーションリンク、Seiko ID・Online Store ボタンに使用
- **Primary Navy Dark** (`#213662`): より暗いネイビー。クッキー同意バー等に使用

### Accent

- **Filter Blue** (`#3860be`): フィルターアイコン、アクセント要素

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト（純粋な黒）
- **Text Secondary** (`#696969`): 補足テキスト、クッキーテキスト
- **Text Mid** (`#4d4d4d`): 「セイコーを知る」セクション等の中間グレー
- **Border** (`#b3b3b3`): 区切り線、入力欄の枠
- **Background** (`#ffffff`): ページ背景
- **Background Secondary** (`#f9f9f9`): 製品カテゴリカード、レコメンドセクション背景
- **Background Tertiary** (`#f0f0f0`): 薄いグレー背景
- **Surface** (`#ffffff`): カード、モーダル等の面
- **Footer** (`#1a1a1a`): フッター背景（ほぼ黒）

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts / Webフォント単独で使用）

### 3.2 欧文フォント

- **サンセリフ**: -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial
- **絵文字**: Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji

### 3.3 font-family 指定

```css
/* 本文 — 全要素共通 */
font-family: "Noto Sans JP", -apple-system, "system-ui", "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**フォールバックの考え方**:
- Noto Sans JP を先頭に指定し、和文表示を最優先
- system-ui / -apple-system でOS標準の欧文フォントにフォールバック
- Bootstrap デフォルトに近いシステムフォントスタックを採用
- 絵文字フォントも含む完全なチェーン

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | palt | 備考 |
|------|------|--------|-------------|----------------|------|------|
| Heading 2 (h2) | 24px | 700 | 36px (x1.5) | 0.35px (0.025em) | なし | セクション見出し |
| Heading 3 (h3) | 16px | 700 | — | 0.35px (0.025em) | なし | サブ見出し |
| Heading 4 (h4) | 14px | 700 | — | 0.35px (0.025em) | なし | 小見出し |
| Body (p) | 14px | 400 | 28px (x2.0) | 0.35px (0.025em) | なし | 本文 |
| Body Bold (p) | 14px | 700 | 28px (x2.0) | 0.35px (0.025em) | なし | 検索ラベル等 |
| Brand Link (a) | 20px | 700 | — | 0.35px (0.025em) | なし | 「ブランド一覧を見る」等 |
| Section Link (a) | 16px | 700 | — | 0.35px (0.025em) | なし | セクション遷移リンク |
| Nav Link (a) | 12px | 500 | — | 0.35px (0.025em) | なし | ナビゲーション |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (p): `28px` (14px x **2.0**) — 日本語の可読性を重視した広い行間
- 見出し (h2): `36px` (24px x 1.5)

**字間 (letter-spacing)** — 実測値:
- **全要素共通: `0.35px`**（body に一律適用）
- 14px 基準で `0.025em` 相当
- 見出し・本文・ナビゲーションすべてに同じ値が適用されている

**ガイドライン**:
- `letter-spacing: 0.35px` は body レベルで全体に適用。要素ごとの使い分けはない
- `palt` は使用されていない。均等な字間で読みやすさを確保
- 本文 `line-height: 2.0` は note と同様に日本語読み物コンテンツの標準的な値

### 3.6 禁則処理・改行ルール

```css
/* フォントレンダリング */
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- Bootstrap デフォルトの改行ルールに準拠

### 3.7 OpenType 機能

```css
/* palt は使用されていない */
font-feature-settings: normal;
```

- Seiko のサイトでは `palt` を含む OpenType 機能は確認されなかった
- `letter-spacing: 0.35px` の一律適用で字間を制御している

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（CTA）**
- Background: `#193c72`（深いネイビーブルー）
- Text: `#ffffff`
- Padding: 適度な内部余白
- Border Radius: **0px（シャープエッジ）**
- Border: なし
- Font Weight: 700

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: 1px solid `#000000`
- Border Radius: **0px（シャープエッジ）**
- Font Weight: 700

**Product Category Card**
- Background: `#f9f9f9`
- Text: `#000000`
- Border Radius: **0px（シャープエッジ）**

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#b3b3b3`
- Border Radius: 0px
- Font Size: 14px

### Cards

- Background: `#ffffff` / `#f9f9f9`
- Border: なし、または `1px solid #b3b3b3`
- Border Radius: **0px（シャープエッジ）**

---

## 5. Layout Principles

### Spacing Scale

- Bootstrap デフォルトのスペーシング（4px ベース）に準拠

### Container

- Max Width: 1140px（Bootstrap lg コンテナ）
- Padding (horizontal): 15px

### Grid

- Columns: 12（Bootstrap グリッド）
- Gutter: 30px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | `0 1px 3px rgba(0,0,0,0.12)` | カードホバー |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | ドロップダウンメニュー |

- Seiko のデザインは基本的にフラット。影は控えめに使用
- シャープなエッジ（角丸なし）とフラットな面で精密感を演出

---

## 7. Do's and Don'ts

### Do（推奨）

- ボタン・カード・入力欄はすべて `border-radius: 0px` のシャープエッジで統一する
- ブランドカラー `#193c72` をCTAとリンクの主要色として使用する
- `letter-spacing: 0.35px` を全テキストに一律適用する（body レベルで設定）
- 本文は `font-size: 14px` + `line-height: 2.0` で組む
- フォントは `"Noto Sans JP"` を先頭にしたシステムフォントスタックを使用する
- 製品画像を大きく扱い、余白で上質感を演出する
- フッターは `#1a1a1a` のダークトーンで締める

### Don't（禁止）

- ボタンやカードに角丸（`border-radius` > 0）を適用しない — シャープエッジがブランドアイデンティティ
- pill 型ボタン（`border-radius: 9999px`）を使用しない
- `palt` を適用しない（実サイトで使用されていない）
- ブランドネイビー `#193c72` を本文テキストに使わない（リンク・CTAとの区別がつかなくなる）
- 過度な装飾（グラデーション、ドロップシャドウの多用）を避ける — フラットでクリーンな印象を保つ
- `letter-spacing` を要素ごとに変えない（全体で `0.35px` に統一）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| SM | ≤ 576px | モバイル |
| MD | ≤ 768px | タブレット |
| LG | ≤ 992px | 小さいデスクトップ |
| XL | ≤ 1200px | デスクトップ |

- Bootstrap 4/5 標準のブレークポイントに準拠

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 14px を維持
- 見出しはデスクトップの 80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #193c72（深いネイビーブルー）
CTA Background: #193c72
CTA Border Radius: 0px（シャープエッジ必須）
Text Primary: #000000
Text Secondary: #696969
Background: #ffffff
Background Secondary: #f9f9f9
Footer Background: #1a1a1a
Border: #b3b3b3

Font: "Noto Sans JP", -apple-system, "system-ui", "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"

Body Size: 14px / line-height: 2.0 / letter-spacing: 0.35px
Heading 2: 24px / weight: 700 / line-height: 1.5
palt: なし（全要素で未使用）
Border Radius: 0px（全コンポーネント共通）
```

### プロンプト例

```
Seiko のデザインに従って、製品一覧ページを作成してください。
- フォント: "Noto Sans JP", -apple-system, "system-ui", "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- テキスト色: #000000
- セカンダリテキスト: #696969
- 背景: #ffffff、セクション背景: #f9f9f9
- ブランドカラー: #193c72（CTA・リンク）
- ボーダー: #b3b3b3
- ボタン: border-radius: 0px（シャープエッジ必須）
- 本文: 14px, line-height: 2.0, letter-spacing: 0.35px
- palt は使用しない
- フッター: 背景 #1a1a1a
```
