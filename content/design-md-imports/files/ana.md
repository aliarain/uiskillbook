# DESIGN.md — ANA（全日本空輸）

> ANA（https://www.ana.co.jp/）のデザイン仕様書。
> 日本最大の航空会社。国内線・国際線の予約、マイレージ、ツアー商品を提供する総合エアラインサイト。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ANA ブルー `#073190`** を軸にした、信頼と清潔感のある航空ブランド UI。白ヘッダーに青いピル CTA を配し、ライトグレー `#f1f1f1` の背景で情報密度の高い予約フォーム・プロモカードを整理する
- **密度**: 予約フォーム（出発地・目的地・搭乗日・人数）、タブ切替、お知らせバナー、プロモカードが並ぶ情報密度の高い構成。line-height 1.5 と余白で可読性を確保
- **キーワード**: ANA ブルー、ピル CTA、白ヘッダー、ヒラギノ角ゴシック、航空ブランドの信頼感
- **特徴**:
  - ヘッダーは **白 `#ffffff`** ベースで、ブランドロゴとブルーの CTA が映える。JAL のブラックヘッダーとは対照的な明るいトーン
  - ブランドカラーは **`#073190`（ANA ブルー）**。プライマリ CTA、リンク、ブランドページ背景に使用
  - ダークネイビー **`#00146e`** はアコーディオン見出し・リンクテキストに使用。`#073190` より深い色
  - 淡いブルー **`#ccd4ea`** はお知らせバナー・非アクティブタブの背景に使用
  - ゴールド **`#d4c493`** は SFC（スーパーフライヤーズカード）等のプレミアムステータス要素に限定使用
  - ページ背景は `#f1f1f1`（ライトグレー）で、白い `#ffffff` のカード・フォームとの階層を作る
  - 本文テキストは `#333333` を一貫して使用
  - **ヒラギノ角ゴシック**を最優先とする長いプラットフォーム依存フォントスタック
  - `font-feature-settings: normal` — palt は使わず、ベタ組みで統一
  - letter-spacing は `normal` — 字間調整なし
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **ANA Blue** (`#073190`): メインのブランドカラー。プライマリ CTA ボタン背景、ブランドページ全面背景
- **ANA Dark Navy** (`#00146e`): アコーディオン見出し、テキストリンク。`#073190` より深いトーン
- **ANA Gold** (`#d4c493`): SFC・プレミアムステータス用。ゴールドカードボタン背景
- **ANA Yellow** (`#ffca00`): ブランドページのアクセント。ロゴやブランド要素に限定使用
- **Notice Blue** (`#ccd4ea`): お知らせバナー背景、非アクティブタブ背景。ANA ブルーの淡いトーン

### CTA / Buttons

- **Primary CTA**: 背景 `#073190` / 文字 `#ffffff` / radius `50px`（pill）/ padding `12px 45px` / 16px / weight 600
- **Primary CTA (Large)**: 背景 `#073190` / 文字 `#ffffff` / radius `50px`（pill）/ padding `16px 50px` / 14px / weight 600
- **Secondary (Outline Pill)**: 背景 `transparent` / 文字 `#333333` / border `1px solid #333333` / radius `50px` / 14px / weight 600
- **Gold (SFC)**: 背景 `#d4c493` / 文字 `#333333` / radius `50px` / 12px / weight 400
- **Text Link**: 文字 `#073190` / with arrow icon / 14px / weight 400

### Tabs

- **Tab Active**: 背景 `#ffffff` / 文字 `#333333` / radius `10px` / weight 600
- **Tab Inactive**: 背景 `#ccd4ea` / 文字 `#333333` / radius `10px` / weight 600

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#333333` | (51, 51, 51) | 本文テキスト・見出し |
| Text White | `#ffffff` | (255, 255, 255) | ダーク面上のテキスト |
| Dark Section | `#333333` | (51, 51, 51) | ダークセクション・カード背景 |
| Border | `#c7c7c7` | (199, 199, 199) | 入力欄の枠、区切り線 |
| Background | `#f1f1f1` | (241, 241, 241) | ページ全体の背景色 |
| Surface | `#ffffff` | (255, 255, 255) | カード・フォーム・ヘッダー面 |

### Semantic

- **Danger / Alert**: ブランドページ文脈ではレッド系を使用
- **Info Surface**: `#ccd4ea`（ノーティスブルー面）

### Header / Footer

- **Header BG**: `#ffffff`（白）with gray underline
- **Footer BG**: `#333333`（ダーク）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴシック（Hiragino Sans）** を最優先。macOS / iOS のシステムフォント
- **フォールバック**: Hiragino Kaku Gothic ProN → Hiragino Kaku Gothic Pro → Noto Sans JP → Noto Sans CJK JP → メイリオ → Meiryo
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**ヒラギノ角ゴシックの欧文グリフ**を優先
- フォールバックに Roboto → Droid Sans → Osaka → MS PGothic

### 3.3 font-family 指定

```css
/* 全要素共通（body, h2〜h5, p, a, span, button, nav, header, footer） */
font-family: ヒラギノ角ゴシック, "Hiragino Sans", "Hiragino Kaku Gothic ProN",
  HiraKakuProN-W3, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro",
  HiraKakuPro-W3, "ヒラギノ角ゴ Pro W3", "Noto Sans JP", "Noto Sans CJK JP",
  メイリオ, Meiryo, Roboto, "Droid Sans", Osaka, "ＭＳ Ｐゴシック",
  "MS PGothic", "sans-serif";
```

**フォールバックの考え方**:
- 和文（ヒラギノ）を最優先し、Apple 系デバイスでの表示品質を最重視
- ProN と Pro の両方を指定して互換性を確保
- Windows 環境では Noto Sans JP → メイリオの順でフォールバック
- Roboto / Droid Sans は Android 環境用
- 欧文専用フォントを先頭に置かない、和文優先のスタック

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H2 | Hiragino Sans | 44px | 600 | 66px (×1.5) | normal | `#ffffff` | ヒーローエリア見出し |
| Section H2 | Hiragino Sans | 28px | 600 | 36.4px (×1.3) | normal | `#333333` | セクション見出し |
| Accordion H2 | Hiragino Sans | 18px | 700 | — | normal | `#00146e` | アコーディオン見出し |
| H3 | Hiragino Sans | 24px | 600 | 31.2px (×1.3) | normal | `#333333` | サブ見出し |
| Form Label H5 | Hiragino Sans | 16px | 600 | 24px (×1.5) | normal | `#333333` | フォームラベル |
| Body | Hiragino Sans | 14px | 400 | 21px (×1.5) | normal | `#333333` | 本文（body デフォルト） |
| Form Annotation | Hiragino Sans | 10px | 600 | — | normal | `#333333` | フォーム内注釈 |
| CTA Label | Hiragino Sans | 16px | 600 | — | normal | `#ffffff` | ピル CTA 文字 |
| CTA Label (Large) | Hiragino Sans | 14px | 600 | — | normal | `#ffffff` | 大型ピル CTA 文字 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（14px → 21px）
- **見出しの行間**: 1.3〜1.5
- **本文の字間 (letter-spacing)**: normal — 字間調整なし
- **見出しの字間**: normal

**ガイドライン**:
- letter-spacing は全要素で `normal`。JAL（0.02em グローバル）との明確な違い
- 見出しもトラッキングなし。ヒラギノのデフォルトメトリクスに依存
- 本文 14px は航空予約サイトとしてはやや小さめ。情報密度を優先した設計

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使用しない**。全要素で `normal`（ベタ組み）
- ヒラギノ角ゴシックのデフォルトメトリクスをそのまま使用

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary (Pill)**
- Background: `#073190`
- Text: `#ffffff`
- Padding: 12px 45px
- Border Radius: 50px（pill）
- Font Size: 16px
- Font Weight: 600
- Border: none

**Primary Large (Pill)**
- Background: `#073190`
- Text: `#ffffff`
- Padding: 16px 50px
- Border Radius: 50px（pill）
- Font Size: 14px
- Font Weight: 600

**Secondary (Outline Pill)**
- Background: `transparent`
- Text: `#333333`
- Border: 1px solid `#333333`
- Padding: 12px 40px
- Border Radius: 50px（pill）
- Font Size: 14px
- Font Weight: 600

**Gold (SFC / Premium)**
- Background: `#d4c493`
- Text: `#333333`
- Padding: 10px 24px
- Border Radius: 50px（pill）
- Font Size: 12px
- Font Weight: 400

**Text Link**
- Text: `#073190`
- Font Size: 14px
- Font Weight: 400
- Decoration: none（矢印アイコン付き）

### Tabs

**Active**
- Background: `#ffffff`
- Text: `#333333`
- Border Radius: 10px
- Font Size: 14px
- Font Weight: 600

**Inactive**
- Background: `#ccd4ea`
- Text: `#333333`
- Border Radius: 10px
- Font Size: 14px
- Font Weight: 600

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#c7c7c7`
- Border (focus): 1px solid `#073190`
- Border Radius: 6px
- Padding: 12px
- Font Size: 16px
- Height: 48px（line-height ベース）

### Select Dropdown

- Background: `#ffffff`
- Border: 1px solid `#c7c7c7`
- Border Radius: 6px
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 8px
- Padding: 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`（カード基本）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 1200px
- Padding (horizontal): 16px

### Grid

- Columns: 12
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素 |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カード、ドロップダウン |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | モーダル、ポップオーバー |
| 3 | `0 8px 24px rgba(0,0,0,0.15)` | ダイアログ、フローティング要素 |

ANA のサイトはカードに軽い shadow を使い、JAL（フラット基調）よりわずかに立体感がある。

---

## 7. Do's and Don'ts

### Do（推奨）

- ヘッダーは白 `#ffffff` ベースにし、ANA ブルー `#073190` のピル CTA を配置する
- 本文テキストは `#333333`、背景は `#f1f1f1` で統一する
- CTA ボタンは radius 50px のピル形状で統一する
- タブ切替は radius 10px の角丸で、アクティブ: 白、非アクティブ: `#ccd4ea` を使う
- ゴールド `#d4c493` はプレミアム/SFC ステータス要素にのみ使う
- letter-spacing は `normal` を維持する

### Don't（禁止）

- ANA ブルー `#073190` を本文テキスト色に使わない（CTA とブランドページ専用）
- ダークネイビー `#00146e` を CTA 背景に使わない（見出し・リンクテキスト専用）
- ゴールド `#d4c493` を一般的な CTA に使わない（SFC 等のプレミアム要素専用）
- ノーティスブルー `#ccd4ea` をプライマリ CTA に使わない（バナー・非アクティブタブ専用）
- font-feature-settings: palt を追加しない（ベタ組みで統一されている）
- 角丸 CTA（8px 等）を使わない（ピル形状 50px で統一）
- letter-spacing を追加しない（normal で統一されている）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 14px を維持、見出しはデスクトップの 70–80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #073190 (ANA Blue)
Dark Navy: #00146e
Gold (SFC): #d4c493
Notice Blue: #ccd4ea
Text Color: #333333
Background: #f1f1f1
Surface: #ffffff
Header BG: #ffffff
Font: ヒラギノ角ゴシック, "Hiragino Sans", ... sans-serif
  (preview: "Noto Sans JP" で代替)
Body Size: 14px
Line Height: 1.5
Letter Spacing: normal
CTA Radius: 50px (pill)
Tab Radius: 10px
```

### プロンプト例

```
ANA のデザインシステムに従って、フライト予約フォームを作成してください。
- ブランドカラー: #073190（CTAボタンのみ）
- フォント: ヒラギノ角ゴシック, "Hiragino Sans", "Noto Sans JP", メイリオ, sans-serif
- 行間: 本文は line-height: 1.5、letter-spacing: normal
- カード背景: #ffffff、ページ背景: #f1f1f1
- ボタン: #073190 背景、白文字、border-radius: 50px のピル形状
- テキスト色: #333333
- タブ: アクティブ 白、非アクティブ #ccd4ea、radius 10px
- 入力欄: border 1px solid #c7c7c7、radius 6px
```
