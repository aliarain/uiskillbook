# DESIGN.md — MOONSTAR

> MOONSTAR（https://www.moonstar.co.jp/）のデザイン仕様書。
> 1873年創業、福岡県久留米市の老舗シューズブランド。実サイトの computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 老舗ブランドの矜持を感じさせるストイックでクリーンなデザイン。装飾を排し、靴そのものの存在感を際立たせるギャラリー型レイアウト
- **密度**: ゆったりとしたカードグリッド。商品ビジュアルを大きく見せ、テキスト情報は最小限
- **キーワード**: ストイック、クール、モノトーン、ヘリテージ、ギャラリー
- **特徴**: Open Sans を欧文優先で配置する、日本ブランドとしては珍しいタイポグラフィ設計。ブランドカラー（ブルー `#003b90`）はロゴ以外に露出させず、UIはモノトーンのグレースケールで統一。CTA は角丸なしの直線的なスタイル

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **MOONSTAR Blue** (`#003b90`): ロゴ専用。UIやCTAには使用しない
- **CTA Black** (`#262626`): 実質的なアクションカラー。ボタン背景、アクティブ状態に使用

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Secondary** (`#262626`): リンク、ナビゲーション項目
- **Text Muted** (`#565656`): 大きめのブランド名ナビ
- **Text Tertiary** (`#a2a2a2`): ブランドサブタイトル、補足テキスト
- **Background Main** (`#f2f4f5`): メインコンテンツ背景（クールライトグレー）
- **Background Footer** (`#f0f0f0`): フッター背景
- **Surface White** (`#ffffff`): ヘッダー背景
- **Surface Card** (`#eeeeee`): カード背景・サムネイル背景（19箇所で使用）
- **Pagination Dot** (`#d5d5d5`): スライダードット（非アクティブ）
- **Border** (`#262626`): CTAボタンのボーダー
- **Carousel Arrow** (`rgba(255,255,255,0.6)`): スライダー矢印の半透明白

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（フォールバック）**:
- メイリオ（Windows）
- ヒラギノ角ゴ Pro W3（macOS）
- MS P ゴシック（レガシー Windows）

### 3.2 欧文フォント

- **サンセリフ（主要）**: Open Sans — Google Fonts。見出し・本文すべてに適用
- **フォールバック**: sans-serif

### 3.3 font-family 指定

```css
/* グローバル（body） — 欧文優先 */
font-family: "Open Sans", "メイリオ", "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- Open Sans（欧文）を先頭に配置し、欧文の表示品質を最優先
- 日本語ブランドとしては珍しい欧文優先の構成。靴ブランドとしてのインターナショナルな印象を意図
- メイリオ → ヒラギノ角ゴ → MS P ゴシックの順で和文フォールバック
- ヒラギノは「Pro W3」（ProN ではない）

### 3.4 文字サイズ・ウェイト階層

> 以下は実サイトの computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Display (h1) | 40px | 700 | 40px (1.0) | normal | ページタイトル |
| Section Header (h2) | 18px | 600 | 18px (1.0) | normal | 「BRANDS」等 |
| Nav Header (h3) | 16px | 600 | 16px (1.0) | 0.32px (0.02em) | セクションヘッダー |
| Nav Item (h3) | 14px | 400 | 21px (1.5) | 0.7px (0.05em) | ナビゲーション項目 |
| Body (p) | 14px | 400 | 28px (2.0) | normal | 記事本文 |
| Brand Label | 12px | 400 | 20px (1.67) | normal | ブランドラベル |
| Brand Nav Name | 34.56px | 400 | 57.6px (1.67) | normal | サブブランドナビ |
| Category Header | 14px | 600 | 14px (1.0) | normal | カテゴリ名 |
| Small | 11px | 400 | 20px (1.82) | normal | 注釈・補足 |
| Copyright | 9px | 400 | 13.5px (1.5) | 0.18px (0.02em) | フッターコピーライト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `18.4px` (16px x 1.15) — 非常にタイト
- 記事本文 (p): `28px` (14px x **2.0**) — 記事コンテンツ向けのゆったりした行間
- 見出し (h1): `40px` (40px x **1.0**) — タイト。インパクト重視
- セクション見出し (h2): `18px` (18px x **1.0**) — タイト
- ナビゲーション: `21px` (14px x 1.5)

**字間 (letter-spacing)** — 実測値:
- 本文: `normal`（追加の字間なし）
- セクションヘッダー (h3): `0.32px` (= 0.02em)
- ナビゲーション項目: `0.7px` (= 0.05em) — わずかにトラッキングを広げてスキャンしやすく
- コピーライト: `0.18px` (= 0.02em)

**ガイドライン**:
- 見出しは `line-height: 1.0` の非常にタイトな行間。1行で収まることを前提とした設計
- 記事本文は `line-height: 2.0` で大きなコントラスト。見出しのタイトさと本文のゆとりの差が特徴的
- `letter-spacing` は控えめ。最大でも `0.05em`（ナビ項目）

### 3.6 禁則処理・改行ルール

```css
/* 特別な指定なし（ブラウザデフォルト） */
word-wrap: break-word;
```

- グローバルな禁則処理の追加設定は見られない
- フォントレンダリングの特別な指定もなし

### 3.7 OpenType 機能

```css
/* palt / kern の明示的な適用なし */
font-feature-settings: normal;
```

- Open Sans は欧文フォントのため、和文向けの `palt` は適用されていない
- 和文フォールバック（メイリオ、ヒラギノ角ゴ）時もデフォルトのまま

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（Online Store 等）**
- Background: `transparent`
- Text: `#262626`
- Border: `1px solid #262626`
- Padding: 目測 12px 24px
- Border Radius: `0px`（角丸なし — 直線的でストイック）
- Font Size: 14px
- Font Weight: 600

**Filled CTA（404ページ等）**
- Background: `#262626`
- Text: `#ffffff`
- Border: none
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 600

**Pagination Active**
- Background: `#262626`
- Text: `#ffffff`
- Border Radius: 小さい角丸

### Search Input

- Background: `#f2f2f2`
- Border: none
- Border Radius: `20px`（ピル型 — サイト内で唯一の丸みを持つ要素）
- Font Size: 14px

### Slider Arrows

- Background: `rgba(255,255,255,0.6)`
- Border Radius: `50%`（円形）

### Cards

- Background: `#eeeeee`
- Border: none
- Border Radius: `0px`（角丸なし）
- Padding: 目測 16px
- Shadow: none（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 32px |
| XL | 48px |
| XXL | 64px |

### Container

- Max Width: 目測 1200px
- Padding (horizontal): 32px

### Grid

- 商品カード: 3〜4カラムグリッド
- ブランドナビ: フルワイドの1カラム
- Gutter: 目測 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインを徹底 |
| 1 | `rgba(255,255,255,0.6)` 背景 | スライダー矢印の半透明オーバーレイ |

- MOONSTAR はシャドウをほぼ使わないフラットデザイン
- 奥行きは背景色の濃淡（`#ffffff` → `#f2f4f5` → `#eeeeee` → `#f0f0f0`）で表現
- 要素の区別はグレーの階調で行い、影に頼らない

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は Open Sans を先頭に置く（欧文優先の構成を維持）
- CTAボタンは `border-radius: 0` の直線的なスタイルを守る
- 背景色はクールグレー `#f2f4f5` を基調にする（純白ではない）
- 見出しは `line-height: 1.0` のタイトな行間で、1行に収まるよう簡潔に
- 記事本文は `line-height: 2.0` のゆったりした行間で可読性を確保
- カラーパレットはモノトーン（黒・グレー・白）に徹する
- ブランドブルー `#003b90` はロゴ専用として扱う

### Don't（禁止）

- CTAに丸みを付けない（`border-radius: 0` が鉄則。検索バーのピル型は例外）
- ブランドブルー `#003b90` をUI要素（ボタン、リンク等）に使わない
- 鮮やかな色をアクセントとして追加しない（モノトーンの統一感を崩す）
- 見出しに `line-height: 1.5` 以上を設定しない（タイトな行間がブランドの表情）
- Open Sans 以外の欧文フォントを主要フォントにしない
- カードにドロップシャドウを付けない（フラットデザインの原則に反する）
- 背景を純白 `#ffffff` にしない（ヘッダー以外はクールグレー `#f2f4f5` が基調）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 768px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイルでは見出し h1 を 24〜28px 程度に縮小
- 本文は 14px を維持（モバイルでも同じ）
- グリッドカラムを 2 → 1 に切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue (logo only): #003b90
CTA Background: transparent (outline) or #262626 (filled)
CTA Border: 1px solid #262626
CTA Radius: 0px
Text Primary: #000000
Text Secondary: #262626
Text Muted: #565656
Text Tertiary: #a2a2a2
Background Main: #f2f4f5
Background Footer: #f0f0f0
Surface Card: #eeeeee
Surface White: #ffffff

Font: "Open Sans", "メイリオ", "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", sans-serif

Body Size: 14px / line-height: 2.0 / letter-spacing: normal
Heading h1: 40px / weight: 700 / line-height: 1.0
Section h2: 18px / weight: 600 / line-height: 1.0
Nav h3: 14px / weight: 400 / line-height: 1.5 / letter-spacing: 0.05em
palt: 未使用
```

### プロンプト例

```
MOONSTAR のデザインに従って、商品一覧ページを作成してください。
- フォント: "Open Sans", "メイリオ", "ヒラギノ角ゴ Pro W3",
    "ＭＳ Ｐゴシック", sans-serif（Open Sans が主要フォント）
- テキスト色: #000000（見出し）、#262626（リンク・ナビ）
- 背景: #f2f4f5（クールグレー。純白ではない）
- カード背景: #eeeeee
- CTAボタン: border 1px solid #262626, radius 0px（角丸なし）
- 見出し: line-height: 1.0（タイト）
- 本文: 14px, line-height: 2.0（ゆったり）
- 装飾: シャドウなし、フラットデザイン
- ブランドブルー #003b90 はロゴ以外に使わない
```
