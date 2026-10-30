# DESIGN.md — SUBARU（スバル）

> SUBARU（https://www.subaru.jp/）のデザイン仕様書。
> 自動車メーカー（SUV・セダン・スポーツカー）のオフィシャルサイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **SUBARU Blue `#00205b`** をシンボルに、**ヒラギノ角ゴ Pro のウェイト 300（Light）** で統一した繊細で上質なタイポグラフィと、ダークブルー `#27455c` のセクション背景で構成されたプレミアム自動車ブランドサイト
- **密度**: 本文 line-height 1.5、大型ビジュアルカードと余白の広いレイアウト。車両写真を主役にしたゆったりとした構成
- **キーワード**: SUBARU Blue、Light ウェイト、プレミアム、安全性、アウトドア
- **特徴**:
  - **ウェイト 300（Light）を body の基本ウェイトに採用**。日本の自動車メーカーサイトでは珍しいアプローチで、軽やかさと上質感を同時に実現
  - **SUBARU Blue `#00205b`** はヘッダーのアイコン背景に使用。濃いネイビーブルーでブランドを表現
  - 日付やニュース日時に **Neue Haas Grotesk + YakuHanJPs** という専用フォントスタックを使用。欧文の品質にこだわるプレミアム志向
  - タブのアクティブ状態に `#014e98`（SUBARU ブルーの明るいバリエーション）を使用
  - セクション背景に `#27455c`（ダークブルーグレー）、`#dde2e6`（ライトブルーグレー）を使い、ブルー系で全体のトーンを統一
  - ラインアップセクションでは車種カテゴリ「SUV」等を 12px / weight 300 で控えめに表示し、車名を 24px / weight 300 で大きく見せる
  - cookie バナーに `#1371c3`（ブライトブルー）のCTAを使用
  - 「来店予約」ボタンに `#014e98` を使用（フォレスターページ実測）
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — SUBARU Blue

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| SUBARU Blue | `#00205b` | (0, 32, 91) | ブランドカラー。ヘッダーアイコン背景 |
| Blue Active | `#014e98` | (1, 78, 152) | タブのアクティブ状態、「来店予約」CTA |
| Blue Bright | `#1371c3` | (19, 113, 195) | cookie バナーの「すべて許可する」CTA |
| Blue Accent | `#0e4bef` | (14, 75, 239) | 動画プレーヤーのプログレスバー |

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 本文テキスト・見出し |
| Mid Gray | `#666666` | (102, 102, 102) | 注釈マーク「＊」 |
| Light Gray BG | `#f0f3f5` | (240, 243, 245) | セクション背景（AWD 等） |
| Border Gray | `#e5e5e5` | (229, 229, 229) | 区切り線、カード枠線 |
| Surface | `#fafafa` | (250, 250, 250) | カード面（フォレスターページ） |
| White | `#ffffff` | (255, 255, 255) | メイン背景・ボタン面 |

### Dark Section

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Blue Gray | `#27455c` | (39, 69, 92) | ダークセクション背景 |
| Blue Gray Light | `#dde2e6` | (221, 226, 230) | パンくずリスト背景 |
| Dark BG | `#151b17` | (21, 27, 23) | 動画プレーヤー背景 |

### Accent

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Green | `#468254` | (70, 130, 84) | アクセントカラー（車種カテゴリ等） |

### CTA / Buttons

- **Tab Active**: 背景 `#ffffff` / 文字 `#014e98` / border なし / radius `0px` / 20px / weight 600 / padding `11px 0px 12px`
- **Tab Default**: 背景 `#ffffff` / 文字 `#000000` / weight 300
- **CTA（来店予約）**: 背景 `#014e98` / 文字 `#ffffff` / radius 0px（推定）
- **Cookie Accept**: 背景 `#1371c3` / 文字 白 / radius 推定 4px
- **Search**: 背景 `#ffffff` / radius `8px`
- **Carousel**: 背景 `rgba(0,0,0,0.42)` / radius `0px 32px 32px 0px`（半 pill、右側のみ）

### Semantic（実測未確認・推奨値）

- **Danger**: `#cc0000`
- **Success**: `#468254`（Green を流用）
- **Warning**: `#cc7700`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ Pro（**Pro であり ProN ではない**）。ウェイト **300（Light）** が基本
- **フォールバック**: メイリオ → sans-serif
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **Neue Haas Grotesk**: 日付・ニュースの日時表示に使用。Helvetica の原型となった書体で、プレミアム感を演出
- **YakuHanJPs**: 約物（「」、。等）を半角幅にする Web フォント。Neue Haas Grotesk と組み合わせて使用

### 3.3 font-family 指定

```css
/* 基本（body, 見出し, 本文, ナビ等） */
font-family: "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;

/* 日付・数値（ニュース日付等） */
font-family: "Neue Haas Grotesk", YakuHanJPs, sans-serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ **Pro**（ProN ではない）を最優先。macOS 標準搭載
- メイリオは Windows 用フォールバック
- 日付には専用の欧文書体 Neue Haas Grotesk を指定し、数字の品質を高めている
- YakuHanJPs で約物幅を調整し、日付表記のリズムを整えている

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・フォレスターページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 (Section) | ヒラギノ角ゴ Pro | 40px | **300** | 56px (×1.4) | normal | `#000000` | 「ラインアップ」等。Light ウェイト |
| H3 (Sub Section) | ヒラギノ角ゴ Pro | 32px | **300** | 44px (×1.375) | normal | `#000000` | 「ニュース」等 |
| P (Car Name) | ヒラギノ角ゴ Pro | 24px | **300** | 36px (×1.5) | normal | `#000000` | 車名「トレイルシーカー」等 |
| Nav (Main) | ヒラギノ角ゴ Pro | 20px | **300** | 30px (×1.5) | normal | `#000000` | メインナビ「ラインアップ」 |
| Tab Button | ヒラギノ角ゴ Pro | 20px | 600 | normal | normal | `#014e98` | タブ active「乗用車」 |
| Tab Default | ヒラギノ角ゴ Pro | 20px | **300** | normal | normal | `#000000` | タブ default |
| Nav (Sub) | ヒラギノ角ゴ Pro | 18px | **300** | 27px (×1.5) | normal | `#000000` | サブナビゲーション |
| Cookie Title | ヒラギノ角ゴ Pro | 18px | 700 | 21.6px (×1.2) | normal | `#000000` | cookie バナー見出し |
| P (Body) | ヒラギノ角ゴ Pro | 16px | **300** | 24px (×1.5) | normal | `#000000` | 本文 |
| Cookie Notice | ヒラギノ角ゴ Pro | 16px | 600 | 20.8px (×1.3) | normal | `#000000` | cookie 説明 |
| Date | Neue Haas Grotesk | 16px | 600 | 24px (×1.5) | normal | `#000000` | ニュース日付「2026.4.9」 |
| Breadcrumb | ヒラギノ角ゴ Pro | 14px | **300** | 20px (×1.43) | normal | `#000000` | パンくずリスト |
| Cookie Header | ヒラギノ角ゴ Pro | 14.08px | 600 | 21.12px (×1.5) | normal | `#000000` | cookie カテゴリ見出し |
| P (Category) | ヒラギノ角ゴ Pro | 12px | **300** | 15.6px (×1.3) | normal | `#000000` | 車種カテゴリ「SUV」 |
| Span (Note) | ヒラギノ角ゴ Pro | 12px | **300** | 18px (×1.5) | normal | `#666666` | 注釈「＊」 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5
- **見出しの行間**: 1.375〜1.4（大見出し）
- **ナビゲーションの行間**: 1.5
- **本文の字間 (letter-spacing)**: normal（0）
- **見出しの字間**: normal（0）

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` ともに未使用
- ウェイト 300 のヒラギノ角ゴ Pro はデフォルトメトリクスで十分な字間が確保される

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Tab Active**
- Background: `#ffffff`
- Text: `#014e98`
- Border: none（下線で active 表現）
- Padding: 11px 0px 12px
- Border Radius: 0px
- Font Size: 20px
- Font Weight: 600

**Tab Default**
- Background: `#ffffff`
- Text: `#000000`
- Font Weight: 300

**CTA（来店予約）**
- Background: `#014e98`
- Text: `#ffffff`
- Border Radius: 0px
- Font Weight: 600（推定）

**Cookie Accept**
- Background: `#1371c3`
- Text: `#ffffff`
- Border Radius: 4px（推定）

**Search**
- Background: `#ffffff`
- Border Radius: 8px

**Carousel Arrow**
- Background: `rgba(0,0,0,0.42)`
- Border Radius: 0px 32px 32px 0px（右矢印）/ 32px 0px 0px 32px（左矢印）

### Inputs

- Background: `#ffffff`（推定）
- Border: 1px solid `#cccccc`（推定）
- Border Radius: 8px（検索ボタンの radius から推定）
- Font Size: 16px

### Cards

- Background: `#ffffff` または `#fafafa`
- Border: none（ボーダーレス）
- Border Radius: 0px
- Shadow: none
- 大型ビジュアルカード。車両画像 + カテゴリ + 車名の縦積みレイアウト

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 12px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 1280px（推定）
- Padding (horizontal): 16px〜40px

### Grid

- Columns: 可変（車種カードは 3〜4 カラム）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素 |

フラットデザインが基本。車両画像の存在感で視覚的な奥行きを表現。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文ウェイトは 300（Light）を使い、軽やかで上質な印象を維持する
- SUBARU Blue `#00205b` はアイコン・ロゴなどブランド要素に限定して使用する
- CTA には `#014e98` を使い、ブルー系で統一する
- 日付には Neue Haas Grotesk + YakuHanJPs の専用スタックを使用する
- セクション背景のダークブルーグレー `#27455c` で落ち着いたコントラストを作る
- 車種カテゴリ（SUV 等）は 12px の小さいテキストで控えめに、車名は 24px で大きく表示する

### Don't（禁止）

- ウェイト 400 以上を本文のデフォルトにしない（300 がブランドの基本ウェイト）
- ヒラギノ角ゴ **ProN** を指定しない（SUBARU は **Pro** を使用）
- SUBARU Blue `#00205b` を広い面の背景に使わない（ダークセクションは `#27455c` を使用）
- ボタンに pill 型（radius 9999px）を使わない（0px か 8px が基本）
- 日付に游ゴシック・メイリオを使わない（Neue Haas Grotesk 指定）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ハンバーガーメニュー |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | フルデスクトップ |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルではセクション見出しを縮小（40px → 24px 程度）
- ナビゲーションはハンバーガーメニューに収納

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #00205b (SUBARU Blue)
CTA Color: #014e98 (Blue Active)
Text Color: #000000
Background: #ffffff
Dark Section BG: #27455c
Light Section BG: #f0f3f5
Font (Main): "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
Font (Date): "Neue Haas Grotesk", YakuHanJPs, sans-serif
Body Size: 16px
Body Weight: 300
Line Height: 1.5
Tab Active Color: #014e98
```

### プロンプト例

```
SUBARU のデザインシステムに従って、車種一覧ページを作成してください。
- フォントはヒラギノ角ゴ Pro 優先、ウェイト 300 を基本にする
- テキスト色は #000000、背景は #ffffff
- セクション見出しは 40px / weight 300（Light ウェイト）
- CTA は #014e98 背景 + 白テキスト
- 車種カテゴリは 12px / 300 で小さく、車名は 24px / 300 で大きく表示
- 日付には Neue Haas Grotesk / weight 600 を使用
- ダークセクションは #27455c 背景
```
