# DESIGN.md — ZENB（ゼンブ）

> ZENB（https://zenb.jp/）のデザイン仕様書。
> ミツカングループの D2C ブランド。「おいしい と カラダにいい は ひとつになれる」をコンセプトに、黄えんどう豆を主原料とした植物由来の新主食を展開。
> 実サイトの computed style 実測（2026-05-24 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ディープグリーン `#004727`** と **サンフラワーイエロー `#fed14a`** の2色を軸に、自然・植物由来のブランド世界観を構築。ピル型 CTA、palt 見出し、Montserrat の英語ラベルで D2C のモダンさも兼ね備える
- **密度**: 見出し line-height 1.4、本文 2.0 と広めの行間。写真を大きく使い、余白豊かなレイアウト
- **キーワード**: ナチュラルグリーン、サンフラワーイエロー、ピル CTA、palt 見出し、D2C、植物由来
- **特徴**:
  - **ブランドカラーはディープグリーン `#004727`**（CSS変数 `--color-green`）。ヘッダー、見出し色、フッター背景に使用
  - **CTA アクセントはサンフラワーイエロー `#fed14a`**（CSS変数 `--color-yellow`）。主要 CTA「オトクにはじめる」「商品を見る」の背景
  - すべての CTA が **`border-radius: 100px`（ピル型）**
  - 見出しに **`font-feature-settings: "palt"`** を全面適用
  - CSS Custom Properties が体系的に整備されている（`--color-*`, `--gutter-*`, `--tag-*-bg-color`）
  - タグバッジの色分け: `--tag-new-bg-color: #004727`（緑）、`--tag-sale-bg-color: #cc3044`（マルーン）
  - サブカラーに **シーグリーン `#4c7e68`**、**パウダーグリーン `#99b5a9`**、**クリーム `#fffdfa`** を持つ豊かなグリーンパレット
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの CSS Custom Properties 実測値。すべて hex 表記。

### Brand

- **Deep Green** (`#004727`): メインのブランドカラー。見出し色、ヘッダー、フッター背景、セカンダリ CTA 背景（`--color-green`）
- **Sunflower Yellow** (`#fed14a`): プライマリ CTA の背景色（`--color-yellow`）。「オトクにはじめる」「商品を見る」等
- **Sunflower Yellow (variant)** (`#fed141`): CTA 背景のバリエーション

### Sub Colors

- **Sea Green** (`#4c7e68`): 中間トーンのグリーン。見出しのアクセント等（`--color-seagreen`）
- **Powder Green** (`#99b5a9`): 薄いグリーン。背景面やアクセント（`--color-powdergreen`）
- **Powder Green Surface** (`rgba(197, 222, 210, 0.4)`): 半透明のグリーン面
- **Orange** (`#ec9a0a`): アクセントオレンジ（`--color-orange`）
- **Khaki** (`#e6b768`): ゴールド系アクセント（`--color-khaki`）
- **Maroon** (`#cc3044`): セール・キャンペーンバッジ、割引表示（`--color-maroon` / `--discount-color`）

### CTA / Buttons

- **Primary CTA**: 背景 `#fed14a` / テキスト `#1a1a1a` / radius `100px`（pill）/ padding は要素により可変
- **Secondary CTA**: 背景 `#004727` / テキスト `#ffffff` / radius `100px`（pill）/ padding `15px 115px`
- **Tertiary CTA**: 背景 `#ffffff` / テキスト `#004727` / radius `100px`（pill）/ padding `0px 40px`

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#1a1a1a` | 本文テキスト（`--color-black`） |
| White | `#ffffff` | ページ背景（`--color-white`） |
| Cream | `#fffdfa` | ウォーム系の白（`--color-cream`） |
| Light Gray | `#f4f5f5` | カード背景・セクション背景（`--color-lightgrey`） |
| Gray | `#e5e5e5` | ボーダー・区切り線（`--color-grey`） |
| Dark Gray | `#c7cdca` | 無効状態・プレースホルダー（`--color-darkgrey`） |
| Surface | `#f3f5f4` | ヒーローエリア背景 |
| Section BG | `#f7f7f7` | セクション背景 |

### Tag Badges

| Tag | Background | 用途 |
|-----|-----------|------|
| NEW | `#004727` | 新着商品 |
| FREE | `#cc3044` | 送料無料等 |
| SALE | `#cc3044` | セール |
| SUB | `#cc3044` | 定期便 |
| RECOMMEND | `#004727` | おすすめ |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ ProN** を最優先。システムフォント中心の構成
- **フォールバック**: `Hiragino Sans` → `Noto Sans JP` → `Meiryo` → `sans-serif`
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: **Montserrat**（weight 500）— 英語セクションラベル（ABOUT ZENB 等）で使用
- 和文フォントの欧文グリフが基本。Montserrat は英語見出し専用

### 3.3 font-family 指定

```css
/* 和文全般（body, 見出し, 本文） */
font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  "Noto Sans JP", Meiryo, sans-serif;

/* 英語セクションラベル */
font-family: Montserrat, "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  "Noto Sans JP", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 和文はヒラギノ角ゴ ProN を最優先（macOS / iOS 環境重視）
- Hiragino Sans は macOS の新しい名称
- Windows 環境では Meiryo にフォールバック
- Montserrat は英語見出し用で、和文フォントチェーンの前に配置

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 (hidden) | Hiragino Kaku Gothic ProN | 102.4px | 400 | 1.0 | normal | visually-hidden |
| H2 Main | Hiragino Kaku Gothic ProN | 34px | 600 | 1.4 | normal | メインセクション見出し |
| H2 EN Label | Montserrat | 16px | 500 | 1.375 | normal | ABOUT ZENB 等 |
| H3 | Hiragino Kaku Gothic ProN | 18–20px | 600 | 1.7–1.9 | normal | サブ見出し |
| Body | Hiragino Kaku Gothic ProN | 13–16px | 400–500 | 2.0 | normal | 本文 |
| Caption | Hiragino Kaku Gothic ProN | 13px | 400 | 2.0 | normal | 補足テキスト |
| Small | Hiragino Kaku Gothic ProN | 11px | 400 | 1.8 | normal | 注釈 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.0（13px テキストに 26px のラインハイト）
- **見出しの行間**: 1.4（34px 見出しに 47.6px）
- **本文の字間 (letter-spacing)**: normal
- **見出しの字間**: normal

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* 見出し（h1, h2, h3）に適用 */
font-feature-settings: "palt";
```

- **見出しに `palt` を全面適用**: h1, h2, h3 すべてで `font-feature-settings: "palt"` が確認された
- 本文（p タグ）では `font-feature-settings: normal`（palt 未適用）
- 見出しはプロポーショナル字詰めで引き締め、本文は等幅で可読性を確保する方針

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（イエロー pill）**
- Background: `#fed14a`
- Text: `#1a1a1a`
- Padding: 可変（コンテキスト依存）
- Border Radius: `100px`（pill）
- Font Size: 16px
- Font Weight: 600

**Secondary CTA（グリーン pill）**
- Background: `#004727`
- Text: `#ffffff`
- Padding: `15px 115px`
- Border Radius: `100px`（pill）
- Font Size: 16px
- Font Weight: 600

**Tertiary CTA（ホワイト pill）**
- Background: `#ffffff`
- Text: `#004727`
- Padding: `0px 40px`
- Border Radius: `100px`（pill）
- Font Size: 16px
- Font Weight: 600

### Tag Badges

- Background: `#004727`（NEW / RECOMMEND）または `#cc3044`（SALE / FREE）
- Text: `#ffffff`
- Border Radius: 4px
- Font Size: 11px
- Font Weight: 600
- Padding: 2px 8px

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: 8px（推定）
- Shadow: なし

### Inputs

- 実測データから明確なフォーム要素なし

---

## 5. Layout Principles

### Spacing Scale（CSS Custom Properties）

| Token | Value |
|-------|-------|
| 5 | 5px (`--gutter-5`) |
| 10 | 10px (`--gutter-10`) |
| 15 | 15px (`--gutter-15`) |
| 20 | 20px (`--gutter-20`) |
| 25 | 25px (`--gutter-25`) |
| 30 | 30px (`--gutter-30`) |
| 40 | 40px (`--gutter-40`) |
| 60 | 60px (`--gutter-60`) |
| 120 | 120px (`--gutter-120`) |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 20px

### Grid

- 商品カードは 2〜4 カラムグリッド
- ガター: 20–30px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード — フラットデザインが基本 |

ZENB のサイトはシャドウを使用せず、色面（グリーン/イエロー/ホワイト）の切り替えで階層を表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA は必ずピル型（`border-radius: 100px`）にする
- 見出しには `font-feature-settings: "palt"` を適用する
- ブランドグリーン `#004727` を見出し色・フッターに使う
- イエロー `#fed14a` はプライマリ CTA に限定して使用する
- タグバッジは NEW/RECOMMEND=グリーン、SALE/FREE=マルーンで色分けする

### Don't（禁止）

- イエロー `#fed14a` を背景の広い面に使わない（CTA やアクセントに限定）
- 本文に `palt` を適用しない（見出し専用）
- ブランドグリーン以外の濃色をテキスト色にしない（`#1a1a1a` または `#004727`）
- 角丸のないボタンを使わない（すべてピル型が原則）
- マルーン `#cc3044` を CTA に使わない（タグバッジ・割引表示専用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | シングルカラム、ハンバーガーメニュー |
| Tablet | ≤ 1024px | 2カラムグリッド |
| Desktop | > 1024px | 4カラムグリッド、フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px × 44px
- ピル CTA の padding で十分なタップ領域を確保

### フォントサイズの調整

- モバイルでは H2 を 24px に縮小（デスクトップ 34px）
- 本文 13–14px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #004727
Accent Color: #fed14a
Text Color: #1a1a1a
Background: #ffffff
Font JP: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif
Font EN: Montserrat (headings only)
Body Size: 13–16px
Line Height: 2.0
Heading palt: on
CTA Shape: pill (border-radius: 100px)
```

### プロンプト例

```
ZENB のデザインシステムに従って、商品一覧ページを作成してください。
- 見出し色: #004727 / font-feature-settings: "palt"
- 本文色: #1a1a1a / line-height: 2.0
- Primary CTA: 背景 #fed14a / テキスト #1a1a1a / border-radius: 100px
- Secondary CTA: 背景 #004727 / テキスト #ffffff / border-radius: 100px
- 商品タグ: NEW=#004727, SALE=#cc3044
- フォント: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif
```
