# DESIGN.md — GU (gu-global.com/jp/ja)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 株式会社ジーユー（ファーストリテイリング傘下）日本公式 EC サイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: UNIQLO の姉妹ブランドだが、独自の **GUNext** カスタムフォント（Light / Regular）でより軽やかな印象を持つファッション EC。font-weight 300 が支配的で、全体を通して「空気感のある」タイポグラフィが特徴。商品写真と **赤い価格表示 `#ee0000`** を主役にするミニマルな構成
- **密度**: 商品グリッド中心の EC レイアウト。見出し・本文ともに weight 300 で統一されているため、UNIQLO よりさらに軽やかでカジュアルな印象
- **キーワード**: Light Weight, Airy, Price-Focused, Minimal Palette, Affordable Fashion
- **特徴**:
  - **GUNextLight**（weight 300）と **GUNextRegular**（weight 700）の2種の独自ブランドフォントを Web フォントとして配信。GUNextLight が見出し・本文の主役、GUNextRegular は価格表示専用
  - UNIQLO（UniqloProLight / Regular / Bold）と同じ設計思想だが、ウェイトバリエーションは Light / Regular の2種に絞られ、よりシンプル
  - **letter-spacing `0.48px`（0.015em）が全要素に均一適用** される独特の設計。UNIQLO が letter-spacing: normal を基本とするのと対照的
  - `font-feature-settings: palt / kern` は一切使用しない。ベタ組（等幅送り）で統一
  - カラーパレットは極めて抑制的: 黒・白・ライトグレー `#f4f4f4` の3色が基調。アクセントは価格の赤 `#ee0000` のみ
  - ユーティリティクラスシステム `ito-font-*` を使用しており、体系的なデザイントークンアプローチを取っている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Red** (`#ee0000`): 価格表示・SALE テキスト・プロモーション。UNIQLO と同一の赤。GU では CTA ボタンには使わず、**価格と販促テキスト専用**
- **Dark Blue/Teal** (`#274558`): サイト内で限定的に使用されるセカンダリブランドカラー。ダークで落ち着いたトーン

### Semantic（意味的な色）

- **Danger / Sale** (`#ee0000`): エラー表示・セール価格（ブランドレッドと兼用）
- **Success / Eco** (`#468254`): サステナビリティ・エコ関連のコンテンツに使用
- **Cookie Toggle Blue** (`#3860be`): Cookie 設定 UI のトグルスイッチ

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 主要テキスト。純黒を採用
- **Text Dark** (`#1b1b1b`): 一部の本文テキスト。純黒よりわずかに柔らかい
- **Text Secondary** (`#696969`): Cookie UI 等の補助テキスト
- **Border** (`#dadada`): アプリダウンロードボタンの枠線等
- **Background Primary** (`#ffffff`): ページ背景
- **Background Secondary** (`#f4f4f4`): セクション背景・カード背景。185 箇所で使用されるサイト内最頻出の面色

### 役割サマリ

- **Primary CTA**: `#000000`（黒ボタン）
- **Brand Red**: `#ee0000`（価格・SALE 専用）
- **Body Text**: `#000000`（純黒）
- **Sub Text**: `#696969`（グレー）
- **Border / Divider**: `#dadada`
- **Surface**: `#f4f4f4`（ライトグレー背景）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ Pro**（Hiragino Kaku Gothic Pro）が和文フォールバックの最優先。UNIQLO と同じく **ProN ではなく Pro** を指定
- **フォールバック**: `Hiragino Sans` → `Meiryo` → `MS PGothic` → `BIZ UDGothic` → `BIZ UDPGothic` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

GU は **GUNextLight / GUNextRegular** の2種の独自ブランドフォントを Web フォントで配信している。

- **GUNextLight**: weight 300。見出し・本文・説明文の大半で使用
- **GUNextRegular**: weight 700（Bold 相当）。価格表示専用
- **欧文フォールバック**: `Helvetica Neue` → `Helvetica` → `Arial` → `-apple-system` → `system-ui` → `sans-serif`

### 3.3 font-family 指定

```css
/* 本文・見出し（GUNextLight） */
font-family:
  "Twemoji Country Flags",
  GUNextLight,
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

/* 価格表示（GUNextRegular） */
font-family:
  "Twemoji Country Flags",
  GUNextRegular,
  "Segoe UI",
  "Helvetica Neue",
  Helvetica,
  Arial,
  -apple-system,
  system-ui,
  sans-serif;

/* 和文本文（GUNext 未適用時のフォールバック） */
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
- **Twemoji Country Flags** を最先頭に置く理由は UNIQLO と同じ: 国旗絵文字を全プラットフォームで統一表示
- GUNextLight / GUNextRegular は独自 Web フォント。未読み込み時は **ヒラギノ角ゴ Pro** → **Meiryo** の順にフォールバック
- 価格表示用の GUNextRegular スタックでは **Segoe UI**（Windows）が挿入されている点が本文スタックと異なる
- **BIZ UDGothic / BIZ UDPGothic** が含まれるのは UNIQLO にはない特徴。UD（ユニバーサルデザイン）フォントへのフォールバックを確保

> **代替フォント注記**: GUNextLight / GUNextRegular は独自 Web フォントのため、デザインのプレビューでは使用できない。代替として **Inter**（weight 300 / 700）を推奨。GUNext のジオメトリックでクリーンな字形に近い印象が出る。和文部分は **Noto Sans JP**（weight 300 / 700）を使用する。

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero / Feature Title | GUNextLight | 32px | 300 | 1.4 | 0.015em (0.48px) | ヒーローバナーの大見出し |
| Section Heading (H3) | GUNextLight | 24px | 300 | 1.4 | 0.015em (0.48px) | セクション見出し |
| Body / Description | GUNextLight | 17px | 300 | 1.5 | 0.015em (0.48px) | 商品説明・本文 |
| Cookie H2 | Hiragino Pro | 16px | 700 | 1.5 | — | Cookie 設定ダイアログ |
| Sale / Promo Text | GUNextLight | 13px | 300 | 1.5 | 0.015em (0.48px) | セール期間等。color `#ee0000` |
| Price Display | GUNextRegular | 30px | 700 | 1.2 | 0.015em (0.48px) | 価格。color `#ee0000` |
| H1 (hidden) | — | 32px | 700 | — | — | スクリーンリーダー専用 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（GUNextLight 17px 基準）
- **見出しの行間**: 1.4（32px / 24px 見出し）
- **価格の行間**: 1.2（GUNextRegular。数字は密着させるため低め）
- **全要素共通の字間 (letter-spacing)**: **0.015em（0.48px）**。見出し・本文・価格のすべてに均一適用される極めて特徴的な設計
- **font-weight 300 が支配的**: 見出し・本文・説明文すべて weight 300。太字は価格表示（700）と Cookie UI（700）のみ

**GU のタイポグラフィの特異性**:
- UNIQLO と同じく **見出しが weight 300（Light）** という珍しい設計だが、GU はさらに徹底しており、本文まで含めて weight 300 で統一
- UNIQLO が letter-spacing: normal を基本とするのに対し、GU は **0.015em を全要素にグローバル適用**。この微小なトラッキングが「空気感」を生んでいる
- 価格フォント（GUNextRegular）の weight は 700 と表示されるが、フォント名に "Regular" を冠する独自仕様

### 3.6 禁則処理・改行ルール

```css
/* 特殊な指定は観測されず */
word-break: normal;
overflow-wrap: normal;
line-break: auto;
```

### 3.7 OpenType 機能

```css
/* font-feature-settings の明示指定なし */
font-feature-settings: normal;
```

- `palt`（プロポーショナル字詰め）は使用しない。**ベタ組（等幅送り）** で統一
- `kern` も指定なし
- 代わりに `letter-spacing: 0.48px` のグローバル適用で全体の文字間を調整するアプローチ

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

GU のボタンは **border-radius: 2px**（ほぼ直角）が基本。UNIQLO の radius: 0 とは異なり、わずかな丸みを持つ。

**Primary CTA（黒）**
- Background: `#000000`
- Color: `#ffffff`
- Border: `1px solid #000000`
- Border Radius: `2px`
- Font Weight: 700
- Font Size: 14px
- Letter Spacing: 0.015em

**App Download Pill**
- Background: `rgba(255, 255, 255, 0.9)`（半透明白）
- Color: `#000000`
- Border: `1px solid #dadada`
- Border Radius: `999px`（pill）
- Font Size: 14px

**Cookie Toggle**
- Background (ON): `#3860be`
- Background (OFF): `#dadada`
- Border Radius: `17px`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dadada`
- Border (focus): 実測なし
- Border Radius: `2px`
- Font Size: 16px
- Font Family: GUNextLight フォールバックスタック

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（ボーダーレス）
- Border Radius: `0`
- Shadow: なし
- 価格は `#ee0000`（GUNextRegular, 30px, weight 700）で表示
- セール期間テキストは `#ee0000`（13px, weight 300）

---

## 5. Layout Principles

### Spacing Scale

GU の `ito-font-*` ユーティリティクラスシステムに基づく。明示的なスペーシングトークンは公開されていないが、実測から推定:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |

### Container

- Max Width: 1440px（推定）
- Padding (horizontal): 16px（モバイル）/ 24px（デスクトップ）

### Grid

- Columns: 商品グリッドは2列（モバイル）/ 4列（デスクトップ）
- Gutter: 8px〜16px

---

## 6. Depth & Elevation

GU はフラットデザインを基調としており、影の使用は極めて控えめ。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 商品カード、ボタン等ほぼすべての要素 |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.1)` | ヘッダー固定時のドロップシャドウ |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.15)` | モーダル、ドロワーメニュー |

---

## 7. Do's and Don'ts

### Do（推奨）

- font-weight は **300（Light）を基本**にする。GU のアイデンティティである軽やかさを維持する
- letter-spacing は **0.015em を全テキスト要素に均一適用**する。この微小なトラッキングが GU らしい空気感を生む
- 価格表示は必ず **`#ee0000`（赤）** で、他のテキストより大きいサイズ（30px）にする
- 背景色は **`#ffffff`（白）** と **`#f4f4f4`（ライトグレー）** の2色でセクションを交互に構成する
- ボタンは **border-radius: 2px** のほぼ直角スタイルを使う
- フォントスタックに **Twemoji Country Flags** を最先頭に置く

### Don't（禁止）

- 見出しに font-weight: 700 以上を使わない（価格と Cookie UI を除く）。GU の見出しは常に weight 300
- letter-spacing: 0 や letter-spacing: normal を使わない。GU は全要素に 0.015em を適用する設計
- `palt` や `kern` の font-feature-settings を追加しない。GU はベタ組で統一
- 価格の赤 `#ee0000` を CTA ボタンの背景色に使わない。CTA は黒 `#000000` が基本
- border-radius に大きな値を使わない（pill ボタンはアプリダウンロード等の特殊用途のみ）
- ダークモードを前提とした配色にしない（実サイトはライトモードのみ）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト。商品グリッド2列 |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト。商品グリッド4列 |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルではヒーロー見出しが 24px 程度に縮小（デスクトップ 32px の 75%）
- 本文サイズは 15〜17px を維持
- 価格表示は 24〜30px の範囲で可変

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red (Price):  #ee0000
CTA Background:     #000000
Text Primary:       #000000
Text Secondary:     #696969
Background:         #ffffff
Surface:            #f4f4f4
Border:             #dadada

Font (body):     "Twemoji Country Flags", GUNextLight, "Hiragino Kaku Gothic Pro", "Hiragino Sans", Meiryo, "MS PGothic", "BIZ UDGothic", "BIZ UDPGothic", "Helvetica Neue", Helvetica, Arial, -apple-system, system-ui, sans-serif
Font (price):    "Twemoji Country Flags", GUNextRegular, "Segoe UI", "Helvetica Neue", Helvetica, Arial, -apple-system, system-ui, sans-serif
Font (fallback): Inter (weight 300/700) + Noto Sans JP (weight 300/700)

Body Size:       17px
Body Weight:     300
Line Height:     1.5
Letter Spacing:  0.015em (0.48px) — 全要素共通
Price Size:      30px
Price Weight:    700
Price Color:     #ee0000
Button Radius:   2px
```

### プロンプト例

```
GU のデザインシステムに従って、商品一覧ページを作成してください。
- フォント: GUNextLight（フォールバック: Inter 300 + Noto Sans JP 300）
- 文字色: #000000（本文）、#ee0000（価格）
- 背景: #ffffff と #f4f4f4 を交互に使用
- 行間: 本文は line-height: 1.5、見出しは 1.4
- 字間: letter-spacing: 0.015em を全テキストに適用
- 見出し: font-weight: 300（Light）で軽やかに
- CTA ボタン: 背景 #000000、テキスト白、border-radius: 2px
- 商品カード: ボーダーなし、影なし、フラットデザイン
- 価格: GUNextRegular / 30px / weight 700 / #ee0000
```

### UNIQLO との違い（エージェント向けメモ）

GU と UNIQLO は同じファーストリテイリング傘下で設計思想が共通するが、以下の点で異なる:

| 項目 | GU | UNIQLO |
|------|-----|--------|
| ブランドフォント | GUNextLight / GUNextRegular（2種） | UniqloProLight / Regular / Bold（3種） |
| 見出し weight | 300（一貫して Light） | 300（見出し）/ 400（本文）/ 700（モーダル） |
| letter-spacing | 0.015em **全要素に均一適用** | normal（基本）/ 0.01em（価格のみ） |
| ボタン radius | 2px（微小な丸み） | 0（完全な直角） |
| CJK / Latin 別スケール | なし（統一） | あり（CJK は Latin の 0.9375 倍） |
| Type Scale トークン | `ito-font-*` ユーティリティクラス | `--type-scale-*` CSS 変数（979 トークン） |
| 全体の印象 | よりカジュアルで軽やか | よりシステマティックで堅実 |
