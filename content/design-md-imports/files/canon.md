# DESIGN.md — Canon（キヤノン）

> Canon（https://canon.jp/）のデザイン仕様書。
> カメラ・プリンター・複合機を中心とした総合イメージングメーカーのコーポレートサイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Canon Red `#cc0000`** をブランドアクセントに、**Noto Sans JP 統一**の端正なタイポグラフィと **pill 型ボタン（radius 40px）** で構成されたモダンコーポレートデザイン
- **密度**: 本文 line-height 1.5（24px / 16px）で標準的。大きな見出し（38px）とゆったりしたカードレイアウトで、プレミアム感を演出
- **キーワード**: Canon Red、Noto Sans JP 統一、pill ボタン、モダンコーポレート、プレミアム感
- **特徴**:
  - 和文フォントに **Noto Sans JP** のみを使用。環境を問わず統一的な表示
  - **Canon Red `#cc0000`** は「個人のお客さま」「法人のお客さま」カードの背景に使用。テキストは白 `#ffffff` で、大胆な面使いが特徴
  - CTA は **pill 型（border-radius: 40px）のゴーストボタン**。border `1px solid #222222` のダーク枠線で、ホバー時に赤背景に変化するクラス（`of-hover-bg-red`）が存在
  - キービジュアルのCTAには **box-shadow 付きの角丸ボタン**（radius 6px, shadow `3px 3px 10px rgba(0,0,0,0.1)`）
  - テキスト色は `#222222`（near-black）が基本。`#141414` をヘッダーロゴ・サイト名に使用
  - ニュースカード背景に `#ffebeb`（ライトピンク）を使い、赤のブランドカラーを柔らかく展開
  - フッターは **ダーク背景**（`#f4f4f4` ライトグレー面 + 白テキスト `#ffffff`）
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — Canon Red

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Canon Red | `#cc0000` | (204, 0, 0) | ブランドカラー。顧客カード背景、ホバーアクセント |
| Canon Dark Red | `#771f1f` | (119, 31, 31) | スキップリンク背景。ダークアクセント |

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Near Black | `#222222` | (34, 34, 34) | 本文テキスト・見出し・ボタン文字色 |
| Header Black | `#141414` | (20, 20, 20) | ヘッダーロゴ・サイト名 |
| Input Gray | `#727272` | (114, 114, 114) | 入力プレースホルダー |
| Border | `#dbdbdb` | (219, 219, 219) | ボタン枠線、区切り線 |
| Border Light | `#e6e6e6` | (230, 230, 230) | 入力欄の枠線 |
| Divider | `#c3c3c3` | (195, 195, 195) | 補助区切り線 |
| White | `#ffffff` | (255, 255, 255) | メイン背景・ボタン面・カード面 |

### Surface / Background

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| White | `#ffffff` | (255, 255, 255) | メイン背景 |
| Near White | `#fafafa` | (250, 250, 250) | 入力欄背景 |
| Light Pink | `#ffebeb` | (255, 235, 235) | ニュースカード背景。Canon Red の柔らかい展開 |
| Light Gray | `#f4f4f4` | (244, 244, 244) | フッター背景、セクション背景 |
| Section BG | `#f8f8f8` | (248, 248, 248) | 製品情報プルダウン背景 |
| Overlay | `rgba(0,0,0,0.4)` | — | モーダルオーバーレイ |

### CTA / Buttons

- **Pill CTA（Primary）**: 背景 `#ffffff` / 文字 `#222222` / border `1px solid #222222` / radius `40px` / padding `18px` / 15px / weight 700
- **Pill CTA（on Red）**: 背景 `#ffffff` / 文字 `#222222` / border `1px solid #ffffff` / radius `40px` — 赤背景上で白ボーダー。クラス `of-hover-bg-red` でホバー時に赤に変化
- **KV Button**: 背景 `#ffffff` / 文字 `#222222` / border `1px solid #dbdbdb` / radius `6px` / padding `18px 12px` / shadow `3px 3px 10px rgba(0,0,0,0.1)` / 16px bold
- **404 Navigation Button**: 背景 `#ffffff` / 文字 `#222222` / border `1px solid #dbdbdb` / radius `6px` / shadow `3px 3px 10px rgba(0,0,0,0.1)` / padding `14px 18px` / 16px bold

### Semantic（実測未確認・推奨値）

- **Danger**: `#cc0000`（Canon Red を流用）
- **Success**: `#00875a`
- **Warning**: `#cc7700`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** のみ。Google Fonts で配信
- **明朝体**: 使用しない

### 3.2 欧文フォント

- Noto Sans JP 内蔵の欧文グリフを使用
- 専用の欧文書体指定なし

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h3, p, a, span, button, input, nav, header, footer） */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP 1書体のみのシンプルなスタック
- Google Fonts で確実に配信されるため、フォールバック不要
- 環境を問わず統一的な表示が保証される

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・404ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display | Noto Sans JP | 44px | 700 | 57.2px (×1.3) | normal | `#222222` | 404ページのメイン見出し |
| H2 (Section) | Noto Sans JP | 38px | 700 | 45.6px (×1.2) | normal | `#222222` | セクション大見出し「企業情報」 |
| H2 (White) | Noto Sans JP | 38px | 700 | 45.6px (×1.2) | normal | `#ffffff` | 赤背景上の見出し |
| H3 (Large) | Noto Sans JP | 36px | 700 | 43.2px (×1.2) | normal | `#222222` | 企業名見出し |
| H3 (Card) | Noto Sans JP | 30px | 700 | 48px (×1.6) | normal | `#ffffff` | 「個人のお客さま」等 |
| H3 (Support) | Noto Sans JP | 30px | 700 | 44.1px (×1.47) | normal | `#222222` | 「サポート」 |
| H1 (Page) | Noto Sans JP | 28px | 700 | 36.4px (×1.3) | normal | `#222222` | 下層ページタイトル |
| P (Card Desc) | Noto Sans JP | 22px | 700 | 39.6px (×1.8) | 0.66px (0.03em) | `#ffffff` | カード説明文 |
| H1 (Header) | Noto Sans JP | 18px | 400 | 27px (×1.5) | normal | `#222222` | 「総合トップ」等 |
| P (Sub Title) | Noto Sans JP | 18px | 400 | 26.28px (×1.46) | normal | `#222222` | 企業名サブタイトル |
| P (Body) | Noto Sans JP | 16px | 400 | 26.4px (×1.65) | normal | `#222222` | 本文 |
| P (Body Alt) | Noto Sans JP | 16px | 400 | 24px (×1.5) | normal | `#222222` | 標準本文 |
| P (Nav Title) | Noto Sans JP | 14px | 700 | 21px (×1.5) | normal | `#222222` | ナビメニュータイトル |
| P (Nav) | Noto Sans JP | 14px | 400 | 21px (×1.5) | normal | `#222222` | ナビメニュー項目 |
| Span (Site Name) | Noto Sans JP | 15px | 400 | 21px (×1.4) | normal | `#141414` | サイト名 |
| P (Copyright) | Noto Sans JP | 15px | 400 | 24px (×1.6) | normal | `#222222` | コピーライト |
| Span (Icon Label) | Noto Sans JP | 10px | 400 | 15px (×1.5) | normal | `#222222` | モバイルメニューアイコン |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5〜1.65
- **見出しの行間**: 1.2〜1.3（大見出しはタイトに）
- **カード説明文の行間**: 1.8（ゆったり）
- **本文の字間 (letter-spacing)**: normal（0）
- **カード説明文**: 0.03em（唯一 letter-spacing が指定されている要素）

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` ともに未使用。Noto Sans JP のデフォルトメトリクスをそのまま使用

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Pill Primary**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#222222`
- Padding: 18px
- Border Radius: 40px
- Font Size: 15px
- Font Weight: 700

**Pill on Red Background**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#ffffff`
- Padding: 18px
- Border Radius: 40px
- Font Size: 15px
- Font Weight: 700
- Hover: 背景が Canon Red `#cc0000` に変化

**KV Button（キービジュアル）**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#dbdbdb`
- Padding: 18px 12px
- Border Radius: 6px
- Font Size: 16px
- Font Weight: 700
- Shadow: 3px 3px 10px rgba(0,0,0,0.1)

### Inputs

- Background: `#fafafa`
- Border: 1px solid `#e6e6e6`
- Border Radius: 0px
- Padding: 8px 64px 8px 20px（デスクトップ）/ 8px 48px 8px 10px（ドロワー）
- Font Size: 16px
- Color: `#727272`（プレースホルダー）

### Cards

- Background: `#ffffff` または `#ffebeb`（ライトピンク）
- Border: none
- Border Radius: 0px
- Shadow: none
- 大きなビジュアルカードレイアウト。テキストオーバーレイまたは下部配置

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 10px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 16px〜40px

### Grid

- Columns: 可変（カードグリッド、2〜4カラム）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準要素 |
| 1 | `3px 3px 10px rgba(0,0,0,0.1)` | KV ボタン、404ナビゲーションカード |

基本はフラット。KV ボタンや重要なナビゲーション要素にのみ影を適用。

---

## 7. Do's and Don'ts

### Do（推奨）

- Canon Red `#cc0000` は面（カード背景）で使い、白テキストとのコントラストを確保する
- CTA は pill 型（radius 40px）のゴーストボタンを基本にする
- 大見出しは 38px bold で存在感を出す
- Noto Sans JP のみのシンプルなフォントスタックを維持する
- ニュース・お知らせ領域は `#ffebeb`（ライトピンク）背景で赤を柔らかく展開する
- KV ボタンには `box-shadow` を付けて重要度を示す

### Don't（禁止）

- Canon Red `#cc0000` を小さなテキストの色に使わない（可読性低下）
- `#000000` 純黒をテキスト色に使わない（実測値は `#222222`）
- ボタンに小さな radius（3px〜5px）を使わない（pill 40px か角丸 6px）
- Noto Sans JP 以外のフォントを追加しない
- `letter-spacing` を広げすぎない（ほぼ normal で運用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ハンバーガーメニュー表示 |
| Desktop | > 767px | デスクトップレイアウト。フルナビ表示 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは見出しを縮小（38px → 24px 程度）
- pill ボタンの padding を縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #cc0000 (Canon Red)
Text Color: #222222
Header Text: #141414
Background: #ffffff
Light Pink BG: #ffebeb
Light Gray BG: #f4f4f4
Font: "Noto Sans JP", sans-serif
Body Size: 16px
Line Height: 1.5
Button: pill (radius 40px) or rounded (radius 6px)
```

### プロンプト例

```
Canon のデザインシステムに従って、製品一覧ページを作成してください。
- フォントは "Noto Sans JP" のみ使用
- テキスト色は #222222、背景は #ffffff
- セクション見出しは 38px bold
- CTA は pill 型ボタン（radius: 40px, border: 1px solid #222222, padding: 18px, font-weight: 700）
- 重要なカードには Canon Red #cc0000 背景 + 白テキストを使用
- ニュースカードは #ffebeb 背景
```
