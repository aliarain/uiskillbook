# DESIGN.md — Yakult（ヤクルト）

> Yakult（https://www.yakult.co.jp/）のデザイン仕様書。
> 乳酸菌飲料「ヤクルト」を中心に、食品・飲料・化粧品を展開する健康企業。
> 実サイトの computed style 実測（2026-05-31 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景を基調に、**ヤクルトレッド `#e60039` のピル CTA** と **ウォームクリーム `#fbf6ec`・ウォームピンク `#fff2f5` のカテゴリ面**で、健康・安心・親しみやすさを表現
- **密度**: 本文の line-height は 1.5 で均一。セクション間にゆとりを持たせ、コーポレートサイトらしい落ち着いた余白感
- **キーワード**: ヤクルトレッド、ウォームクリーム、ウォームピンク、システムフォント Medium 体、健康ブランドの信頼感
- **特徴**:
  - 和文フォントは**システムフォントスタック**。`-apple-system` から始まる標準的な構成で、特定の Web フォントに依存しない
  - **ブランドカラーは `#e60039`（ヤクルトレッド）**。CTA ボタン・セクション見出し・ラベルバッジなど全面的に使用
  - 本文の weight は **500（Medium）** を採用。通常の 400 より一段太く、画面上での可読性を重視
  - サーフェスに **`#fbf6ec`（ウォームクリーム）** と **`#fff2f5`（ウォームピンク）** を使い分け、食品/飲料と化粧品のカテゴリを視覚的に区別
  - ニュートラルサーフェス `#f2f2f2` はタグ・フィルター等の汎用面に使用
  - セクション見出し（h2）に直接ブランドレッドを適用し、色で構造を伝える
  - h3 には左ボーダーアクセントを付け、サブセクションの階層を強調
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Yakult Red** (`#e60039`): メインのブランドカラー。主要 CTA 背景、セクション見出し（h2）の文字色、ラベルバッジ背景
- **Blue Accent** (`#3f7ac3`): 補助的なアクセント色。リンクやインフォメーション要素で使用

### CTA / Buttons

- **Primary CTA（レッドピル）**: 背景 `#e60039` / 文字 `#ffffff` / radius `20px〜50px`（pill）/ weight 700
- **Ghost CTA（アウトライン）**: 背景 transparent / 文字 `#e60039` / border `2px solid #e60039` / radius `40px`（pill）
- **Tag / Category**: 背景 `#f2f2f2` / 文字 `#333333` / radius `4px` / weight 700

### Category Surfaces

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Warm Cream | `#fbf6ec` | (251, 246, 236) | 食品・飲料カテゴリのカード背景 |
| Warm Pink | `#fff2f5` | (255, 242, 245) | 化粧品カテゴリのカード背景 |

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Primary Text | `#323232` | (50, 50, 50) | 本文・主要テキスト |
| Secondary Text | `#6e6e6e` | (110, 110, 110) | ナビ・補助テキスト |
| Tertiary Text | `#333333` | (51, 51, 51) | 日付・タグ文字 |
| Black | `#000000` | (0, 0, 0) | h3 サブタイトル |
| Neutral Surface | `#f2f2f2` | (242, 242, 242) | タグ・フィルター背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード背景 |

### Semantic（推奨補完値）

実サイトには明確なエラー／成功色は表面化していない。コーポレートサイト向けに推奨する補完値:

- **Danger**: `#cc0033` 程度のレッド（ブランドレッドに近い色相で統一）
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

### Overlay

- **Dark Overlay**: `rgba(0, 0, 0, 0.8)`（モーダル・メガメニュー背景）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: システムフォントスタックを使用。macOS では YuGothic / Yu Gothic Medium、Windows では Yu Gothic / Meiryo
- **フォールバック**: `-apple-system` → `system-ui` → `Roboto` → `Segoe UI` → `Helvetica Neue` → `YuGothic` → `Yu Gothic Medium` → `Yu Gothic` → `Verdana` → `Meiryo` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- システムフォントスタックに含まれる `-apple-system`（San Francisco）/ `Roboto` / `Segoe UI` / `Helvetica Neue` がそのまま欧文グリフを担当
- 専用の欧文書体は持たない

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: -apple-system, "system-ui", Roboto, "Segoe UI",
  "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium",
  "Yu Gothic", Verdana, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- `-apple-system` / `system-ui` でプラットフォームネイティブのフォントを最優先
- 欧文フォント（Roboto / Segoe UI / Helvetica Neue）を和文フォントより先に配置し、欧文部分はシステムサンセリフで統一
- 和文は YuGothic → Yu Gothic Medium → Yu Gothic → Meiryo の順で、macOS / Windows 両対応

> **代替フォント注記**: システムフォントスタックのため、全環境で表示可能。preview.html では表示の一貫性のために Noto Sans JP を Google Fonts から読み込み、フォールバックに追加している。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-31 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Section H2 | 36px | **700** | 54px (x1.5) | normal | `#e60039` | ブランドレッドで強調 |
| Sub H3 | 24px | **700** | 36px (x1.5) | normal | `#000000` | 左ボーダーアクセント付き |
| Nav Mega | 19px | **700** | 30px (x1.58) | -1.28px (-0.067em) | `#6e6e6e` | メガメニューカテゴリ名 |
| Body | 16px | **500** | 24px (x1.5) | normal | `#323232` | Medium ウェイト |
| CTA Large | 24px | **700** | 36px (x1.5) | normal | `#ffffff` | "お問い合わせはこちら" |
| CTA Standard | 15px | **700** | 22.5px (x1.5) | normal | `#ffffff` | "企業情報" 等のナビ CTA |
| Tag | 16px | **700** | 24px (x1.5) | normal | `#333333` | カテゴリタグ |
| Nav | 14px | **700** | 30px (x2.14) | normal | `#6e6e6e` | グローバルナビ |
| Date | 14px | **500** | 21px (x1.5) | normal | `#333333` | 日付表示 |
| Label Badge | 13px | **600** | 30px (x2.3) | normal | `#ffffff` | bg `#e60039` / radius 4px 4px 0 0 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (16px)**: `1.5`（24px / 16px）-- 日本語コーポレートサイトの標準的な値
- **見出し (24〜36px)**: `1.5`（一貫して統一）
- **ナビ (14px)**: `2.14`（30px / 14px）-- タッチターゲット確保のため広め
- **ラベルバッジ (13px)**: `2.3`（30px / 13px）-- 同上

**字間 (letter-spacing)** -- 実測:
- **全体**: `normal`（明示的な letter-spacing 設定なし）
- **メガメニューのみ**: `-1.28px`（-0.067em）。カテゴリ名の密度を上げる例外的なケース

**ガイドライン**:
- ヤクルトは **line-height 1.5 / letter-spacing normal** を全面的に採用する簡潔な方針
- STORES のような本文とテキストでのトラッキング差分は設けない
- weight の使い分け（500 vs 700）で階層を表現する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: anywhere;
line-break: strict;
```

- CTA ラベルは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` の明示的有効化は確認されなかった
- システムフォントのデフォルトメトリクスに従う方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（レッドピル）** -- "お問い合わせはこちら"
- Background: `#e60039`
- Text: `#ffffff`
- Padding: `12px 32px`
- Border Radius: `50px`（ピル）
- Font: system font, 24px, weight 700
- Border: none

**Primary CTA Small（レッドピル小）** -- "企業情報"
- Background: `#e60039`
- Text: `#ffffff`
- Padding: `8px 20px`
- Border Radius: `20px`（ピル）
- Font: system font, 15px, weight 700
- Border: none

**Ghost CTA（アウトラインピル）** -- "ブランドサイトはこちら"
- Background: `transparent`
- Text: `#e60039`
- Border: `2px solid #e60039`
- Padding: `10px 28px`
- Border Radius: `40px`（ピル）
- Font: system font, 16px, weight 700

**Tag / Category** -- "乳製品" "飲料"
- Background: `#f2f2f2`
- Text: `#333333`
- Padding: `6px 16px`
- Border Radius: `4px`
- Font: system font, 16px, weight 700

**Label Badge** -- セクションラベル
- Background: `#e60039`
- Text: `#ffffff`
- Padding: `4px 12px`
- Border Radius: `4px 4px 0 0`（上角丸のみ）
- Font: system font, 13px, weight 600

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `2px solid #e60039`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: system font, 16px, weight 500
- Height: `44px`

### Cards / Surfaces

- **白カード**: Background `#ffffff` / border `1px solid #e0e0e0` / radius `8px`
- **クリーム面（食品）**: Background `#fbf6ec` / radius `8px`
- **ピンク面（化粧品）**: Background `#fff2f5` / radius `8px`
- **ニュートラル面**: Background `#f2f2f2` / radius `4px`

### Section Heading（h2）

- Font Size: `36px`
- Font Weight: `700`
- Color: `#e60039`（ブランドレッド）
- Line Height: `1.5`
- 装飾: なし（色だけで目立たせる）

### Sub Heading（h3）

- Font Size: `24px`
- Font Weight: `700`
- Color: `#000000`
- Line Height: `1.5`
- 装飾: `border-left: 4px solid #e60039; padding-left: 12px`

### Footer

- Background: `#ffffff`
- Border Top: `1px solid #e0e0e0`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ラベルバッジ内の縦余白 |
| M | 16px | カード内の段落間・タグの横余白 |
| L | 24px | カードの内側余白・セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1100px`
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | タグ・入力欄・ラベルバッジ |
| Medium | 8px | カード・カテゴリ面 |
| CTA Small | 20px | ナビ内の小ピル CTA |
| CTA Medium | 40px | ゴースト CTA |
| CTA Large | 50px | 主要 CTA の大ピル |

### Grid

- 記事一覧は 3〜4 カラムグリッド（CSS Grid または Flexbox）
- Gutter: 24px
- カテゴリカードは 2 カラム（PC）/ 1 カラム（SP）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウン・メガメニュー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル・オーバーレイ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ウォームサーフェス**（`#fbf6ec` / `#fff2f5`）のカテゴリ色分けと**ボーダー**で表現
- 影を使う場合も控えめに

---

## 7. Do's and Don'ts

### Do（推奨）

- セクション見出し（h2）は **`#e60039` のブランドレッド**で着色する
- h3 には **左ボーダー `4px solid #e60039`** を付けてサブセクションを明示する
- 本文の weight は **500（Medium）** を使う（400 ではない）
- 見出し・CTA の weight は **700（Bold）** を使う
- 主要 CTA は **`#e60039` のレッドピル**（radius 20〜50px）
- 食品カテゴリには **`#fbf6ec`（ウォームクリーム）** 面を使う
- 化粧品カテゴリには **`#fff2f5`（ウォームピンク）** 面を使う
- line-height は **1.5 で統一** する
- letter-spacing は **normal**（明示的な値を設けない）
- ゴーストボタンには `border: 2px solid #e60039` + `color: #e60039` を使う

### Don't（禁止）

- 主要 CTA に **ブルーやグリーン**を使わない -- ヤクルトのアクションカラーは赤
- 本文に **weight 400** を使わない（ヤクルトは全体的に太めの 500 / 700）
- セクション見出しを **黒で書かない** -- ブランドレッド `#e60039` が基本
- **冷たいグレー**（`#9ca3af`、`#6b7280`）を使わない -- ニュートラルの `#323232` / `#6e6e6e` / `#333333` を使う
- 食品カードに **ピンク面**、化粧品カードに **クリーム面** を使わない（用途が逆）
- CTA に **角張った直角ボタン**（border-radius 0）を使わない -- ピル形状が基本
- **letter-spacing を明示的に設定しない**（メガメニュー以外）-- システムフォントのデフォルトメトリクスに従う
- ラベルバッジの角丸を **全角丸にしない** -- 上だけ丸（`4px 4px 0 0`）がヤクルトのパターン

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- Section H2: 36px -> 24px
- Sub H3: 24px -> 20px
- 本文サイズは 16px を維持（line-height も 1.5 維持）
- カテゴリカードグリッドは 1 カラムにスタック
- CTA のピル radius は維持

### タッチターゲット

- 主要 CTA: 高さ 44px 以上
- ナビリンク: line-height 30px でタッチ領域を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Yakult Red (CTA / H2): #e60039
Blue Accent: #3f7ac3
Primary Text: #323232
Secondary Text: #6e6e6e
Tertiary Text: #333333
Black (H3): #000000
Neutral Surface: #f2f2f2
Warm Cream (Food): #fbf6ec
Warm Pink (Cosmetics): #fff2f5
White: #ffffff
Overlay: rgba(0, 0, 0, 0.8)

Font: -apple-system, "system-ui", Roboto, "Segoe UI", "Helvetica Neue",
      HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana,
      Meiryo, sans-serif

Body Size: 16px / line-height 1.5 / weight 500 / letter-spacing normal
H2: 36px / line-height 1.5 / weight 700 / color #e60039
H3: 24px / line-height 1.5 / weight 700 / color #000 / left border #e60039
CTA: weight 700 / radius 20-50px (pill)
Tag: 16px / weight 700 / bg #f2f2f2 / radius 4px

Border Radius: 4px (tag) / 8px (card) / 20-50px (CTA pill)
Shadow: 基本 none。階層はウォームサーフェスとボーダーで表現
```

### プロンプト例

```
ヤクルトのデザインに従って、健康飲料の商品紹介セクションを作成してください。
- フォント: -apple-system, "system-ui", Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif
- セクション見出し: 36px / weight 700 / line-height 1.5 / color #e60039（ブランドレッド）
- サブ見出し: 24px / weight 700 / line-height 1.5 / color #000 / border-left 4px solid #e60039
- 本文: 16px / weight 500 / line-height 1.5 / letter-spacing normal / color #323232
- 補助テキスト: 14px / weight 500 / color #6e6e6e
- 主要 CTA: 背景 #e60039（ヤクルトレッド）/ 白文字 / border-radius 50px / weight 700
- ゴースト CTA: 背景 transparent / 文字 #e60039 / border 2px solid #e60039 / radius 40px
- タグ: 背景 #f2f2f2 / 文字 #333 / radius 4px / weight 700
- 食品カード背景: #fbf6ec（ウォームクリーム）
- 化粧品カード背景: #fff2f5（ウォームピンク）
- box-shadow は基本 none
- 純黒 #000 は h3 のみ、本文は #323232
- CTA には必ずピル形状（radius 20〜50px）を使う
- letter-spacing は normal（メガメニュー以外）
```
