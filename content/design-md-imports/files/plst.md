# DESIGN.md — PLST (plst.com/jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> PLST（プラステ）はファーストリテイリング傘下のファッションブランド。
> UNIQLO と同じ FR プラットフォーム（979 の CSS Custom Properties）を共有するが、
> よりライトウェイトで洗練された大人向けの意匠に仕上げている。
> 実サイトの computed style 実測値に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: UNIQLO と共通の FR デザインシステムをベースに、**font-weight: 300** を全面的に採用したライトウェイトなタイポグラフィで「上品・軽やか・大人」を表現。商品写真を主役にする EC レイアウト
- **密度**: UNIQLO 同様に商品グリッド主体だが、本文テキストの color が `#333`（UNIQLO は `#000`）で柔らかく、プロモーショナル赤も `#c93141`（UNIQLO の `#ee0000` より抑制）と全体的にトーンダウンしている
- **キーワード**: Light Weight, Refined, Soft Contrast, Minimal, Grown-up Fashion
- **特徴**:
  - **weight 300 の支配**: 見出し（h2）も本文（p）も weight 300。太字は h3 以下やモーダル見出し（700）に限定。繊細で空気感のある印象
  - **テキスト色 `#333`**: 純黒ではなくダークグレーを採用。UNIQLO の `#000` よりソフトなコントラスト
  - **プロモーショナル赤 `#c93141`**: SALE 等のプロモ表示に使う赤。UNIQLO の `#ee0000` より落ち着いたワインレッド寄り
  - **CTA は角型 radius 2px**: UNIQLO の radius 0 よりわずかに角を丸めた設計
  - **検索バーは pill 型 radius 999px**: UNIQLO と共通
  - **letter-spacing / palt は未使用**: ベタ組で構成
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> FR デザインシステムの CSS Custom Properties に基づく。UNIQLO と同じトークン名だが、PLST 独自の値を持つものがある。

### Primary（ブランドカラー）

- **Primary Black** (`#000`): Primary CTA の背景色。「すべて許可する」「Apply」等の主要ボタン（`--backgroundPrimaryDefault`）
- **Primary Hover** (`#2a2a2a`): ホバー時（`--backgroundPrimaryHover`）
- **Primary Pressed** (`#3e3e3e`): プレス時（`--backgroundPrimaryPressed`）

### Accent

- **Accent Blue** (`#005db5`): リンク・通知・フォーカスリング（`--backgroundAccentDefault`）
- **Cookie Badge Blue** (`#3860be`): Cookie フィルターバッジの背景

### Promotional

- **Promotional Red** (`#c93141`): PLST 独自のプロモーショナル赤。SALE・キャンペーン表示（`--body-emphasized-color-promotional`）。UNIQLO の `#ee0000` より彩度を抑えたワインレッド
- **Attention Red** (`#e00`): エラー・注意喚起（`--backgroundAttentionDefault`、`--body-standard-color-error`）

### Seasonal

- **Seasonal Green** (`#468254`): シーズナルバッジの背景
- **Dark Blue-Gray** (`#27455c`): ナビ・フッター等のダークアクセント

### Background & Surface

```css
--backgroundNeutralDefault:   #fff;     /* ページ背景 */
--backgroundTertiaryDefault:  #f4f4f4;  /* 薄いグレー面（最頻出 surface） */
--backgroundPrimaryDefault:   #000;     /* Primary CTA 背景 */
--backgroundSecondaryDefault: #6a6a6a;  /* Secondary CTA 背景 */
--backgroundInactiveDefault:  #dadada;  /* 無効状態の背景 */
--backgroundPositiveDefault:  #00ab0f;  /* Success 緑 */
```

### Text

```css
--body-emphasized-color-primary-dark: #333;     /* PLST 本文テキスト（UNIQLO の #000 より柔らかい） */
--body-standard-color-secondary:     #6a6a6a;  /* サブテキスト */
--body-standard-color-disabled:      #ababab;  /* 無効テキスト */
--body-standard-color-placeholder:   #767676;  /* プレースホルダー */
--body-standard-color-error:         #e00;     /* エラーテキスト */
--body-emphasized-color-promotional: #c93141;  /* プロモーショナル赤（PLST 独自） */
```

### Border

```css
--border-lines-color:              #dadada;  /* 区切り線 */
--border-focus-color:              #005db5;  /* フォーカスリング */
--border-error-color:              #e00;     /* エラーボーダー */
```

### 役割サマリ

- **CTA**: `#000`（黒・主要ボタン）
- **Promo**: `#c93141`（PLST 独自の赤）
- **Accent**: `#005db5`（リンク・フォーカス）
- **Body Text**: `#333`（ダークグレー）
- **Sub Text**: `#6a6a6a`
- **Surface**: `#f4f4f4`（薄いグレー）
- **Background**: `#fff`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ヒラギノ角ゴ Pro** が最優先。ProN ではなく **Pro** を使用（UNIQLO と同じ、JIS78 字形を優先する方針）
- **Hiragino Sans**: macOS 10.11 以降のフォールバック
- **MS PGothic / BIZ UDGothic / BIZ UDPGothic**: Windows 向けフォールバック
- 明朝体は使用していない

### 3.2 欧文フォント

- **Helvetica Neue / Helvetica / Arial**: 欧文フォールバック。UNIQLO の独自 UniqloPro フォントは PLST では使わない
- **Twemoji Country Flags**: 国旗絵文字の統一表示用（UNIQLO と共通、フォントスタック先頭）
- **system-ui, -apple-system**: システムフォントフォールバック

### 3.3 font-family 指定

```css
/* PLST 本文 */
font-family:
  "Twemoji Country Flags",
  "Hiragino Kaku Gothic Pro",
  "Hiragino Sans",
  Meiryo,
  "MS PGothic",
  "BIZ UDGothic",
  "BIZ UDPGothic",
  "Helvetica Neue",
  Helvetica,
  Arial,
  -apple-system,
  system-ui,
  sans-serif;
```

**フォールバックの考え方**:
- **Twemoji Country Flags** を先頭に配置（国旗絵文字の統一表示）
- **和文優先**: Hiragino Kaku Gothic Pro を Helvetica Neue より前に配置
- Windows 向けに **Meiryo → MS PGothic → BIZ UDGothic** の 3 段階フォールバック
- UNIQLO が独自 Web フォント（UniqloPro）を使う一方、PLST はシステムフォントのみで構成

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 (hidden) | Hiragino Pro | 32px | 700 | normal | normal | "PLST"（visually hidden、SR 専用） |
| H2 (section) | Hiragino Pro | 24px | **300** | 1.4 | normal | 「お得な情報」 |
| H2 (nav) | Hiragino Pro | 20px | **300** | 1.4 | normal | 「カテゴリから探す」 |
| H3 | Hiragino Pro | 16px | 700 | 1.3 | normal | 小見出し |
| H4 | Hiragino Pro | 14px | 700 | 1.5 | normal | Cookie ダイアログ見出し |
| P (hero) | Hiragino Pro | 32px | **300** | 1.4 | normal | 商品名オーバーレイ（白テキスト） |
| P (sub) | Hiragino Pro | 17px | **300** | 1.5 | normal | 補足テキスト |
| P (body) | Hiragino Pro | 14px | **300** | 1.5 | normal | 一般本文 |
| Span (nav) | Hiragino Pro | 17px | 400 | 1.2 | normal | ナビゲーション |
| A (link) | Hiragino Pro | 16px | 400 | normal | normal | リンクテキスト |
| Body default | Hiragino Pro | 16px | 400 | — | normal | body 要素のデフォルト |

### 3.5 行間・字間

- **見出しの font-weight が 300（Light）**: UNIQLO と共通の設計思想だが、PLST ではより徹底的に 300 を使う。h2 セクション見出し・ヒーローテキスト・サブテキストすべてが 300
- **letter-spacing**: 全要素で normal（0）。palt も未使用。完全なベタ組
- **line-height**: 見出し 1.3〜1.4、本文 1.5。UNIQLO と同程度の設定

### 3.6 禁則処理・改行ルール

```css
/* 特別な指定なし（デフォルト動作） */
word-break: normal;
overflow-wrap: normal;
line-break: auto;
```

### 3.7 OpenType 機能

- `font-feature-settings` の明示指定なし（normal）
- `palt` は使用していない（ベタ組）
- `kern` の明示指定もなし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（黒）**
- Background: `#000`（hover `#2a2a2a` / pressed `#3e3e3e`）
- Color: `#fff`
- Border Radius: **2px**（UNIQLO の 0 より微妙に丸い）
- Font Weight: 700
- Font Size: 14px〜16px
- Padding: 適宜

**Secondary（アウトライン）**
- Background: transparent
- Color: `#000` / Border: `#dadada`
- Border Radius: 2px
- Hover: bg `#f4f4f4`

**Search Pill**
- Background: `rgba(255,255,255,0.95)`
- Color: `#767676`（プレースホルダー）
- Border Radius: **999px**（完全な pill）

**Category Pill**
- Background: `#fff`
- Color: `#000`
- Border Radius: **999px**

**Cookie Filter Badge**
- Background: `#3860be`
- Border Radius: 17px

### Inputs

- Background: `#fff`
- Border: 1px solid `#dadada`
- Border (focus): 1px solid `#005db5`
- Border (error): 1px solid `#e00`
- Border Radius: 2px
- Font Size: 14px
- Font Family: 本文と同じスタック

### Cards

- Background: `#fff`
- Border: 1px solid `#dadada`
- Border Radius: 2px
- Padding: 16px
- Shadow: なし（フラットデザイン基調）
- Hover: 微細なシャドウ追加

---

## 5. Layout Principles

### Spacing Scale

FR デザインシステム共通のスペーシングスケール:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |
| XXXL | 64px |

### Container

- Max Width: 1200px（商品グリッド）
- Padding (horizontal): 16px（モバイル）〜32px（デスクトップ）

### Grid

- 商品グリッド: 2〜4 カラム（レスポンシブ）
- Gutter: 8px〜16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（基本状態） |
| 1 | `0 1px 3px rgba(0,0,0,0.1)` | カードホバー |
| 2 | `0 4px 8px rgba(0,0,0,0.1)` | ドロップダウン |
| 3 | `0 8px 24px rgba(0,0,0,0.15)` | モーダル・ダイアログ |

PLST はフラットデザインが基調で、shadow の使用は最小限。

---

## 7. Do's and Don'ts

### Do（推奨）

- font-weight: 300 を見出し・本文に積極的に使う。PLST の「軽やかさ」の核心
- テキスト色は `#333` を使う。純黒 `#000` は CTA ボタン背景のみ
- プロモ赤は `#c93141` を使う。`#ee0000`（UNIQLO）は使わない
- CTA ボタンは radius 2px の角型。pill 型は検索バーとカテゴリボタンのみ
- フォントスタックは Twemoji Country Flags → Hiragino Kaku Gothic Pro の順序を守る

### Don't（禁止）

- 見出しに font-weight: 700 を多用しない（h3/h4/モーダル以外は 300）
- テキストに `#000` を使わない（ボタン背景・ボーダー以外）
- CTA ボタンに radius 999px（pill）を使わない（検索バー・カテゴリを除く）
- letter-spacing や palt を適用しない（ベタ組を維持）
- UNIQLO の UniqloPro フォントを PLST に適用しない

---

## 8. Responsive Behavior

### Breakpoints

FR デザインシステム共通:

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1〜2 カラムグリッド） |
| Tablet | ≤ 1023px | タブレットレイアウト（2〜3 カラムグリッド） |
| Desktop | > 1024px | デスクトップレイアウト（3〜4 カラムグリッド） |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは hero テキストを 24px 程度に縮小（デスクトップ 32px の 75%）
- 本文は 14px を維持
- 見出しはデスクトップの 70〜80% に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary CTA:    bg #000, text #fff, radius 2px
Promo Red:      #c93141
Accent Blue:    #005db5
Text Primary:   #333
Text Secondary: #6a6a6a
Background:     #fff
Surface:        #f4f4f4
Font:           "Twemoji Country Flags", "Hiragino Kaku Gothic Pro", "Hiragino Sans", Meiryo, "MS PGothic", "BIZ UDGothic", "BIZ UDPGothic", "Helvetica Neue", Helvetica, Arial, -apple-system, system-ui, sans-serif
Body Size:      14-16px
Body Weight:    300
Line Height:    1.5
```

### プロンプト例

```
PLST のデザインシステムに従って、商品一覧ページを作成してください。
- 本文テキスト色: #333（純黒は使わない）
- フォント: 上記 font-family を使用
- 見出し・本文の weight は 300（Light）を基本とする
- CTA ボタン: bg #000, text #fff, radius 2px
- SALE 表示: #c93141（UNIQLO の #ee0000 ではなく PLST 独自の赤）
- サーフェス背景: #f4f4f4
- letter-spacing / palt は適用しない
```

### UNIQLO との主な差分

| 項目 | PLST | UNIQLO |
|------|------|--------|
| テキスト色 | `#333` | `#000` |
| プロモ赤 | `#c93141` | `#ee0000` |
| CTA radius | 2px | 0 |
| 欧文フォント | Helvetica Neue（システム） | UniqloPro（Web フォント） |
| 全体の印象 | 軽やか・上品 | ミニマル・ストレート |
