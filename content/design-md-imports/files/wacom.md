# DESIGN.md — Wacom（ワコム）

> Wacom（https://www.wacom.com/ja-jp）のデザイン仕様書。
> ペンタブレット・液晶ペンタブレットの世界的リーダー。クリエイター向けデジタルツールを提供する日本発テクノロジー企業。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ホワイトベース**のクリーンなプロダクトサイト。見出しに weight 300（Light）を一貫して使用し、軽やかでモダンなテクノロジー感を演出。プロダクト写真が主役となるミニマルなレイアウト
- **密度**: ヒーローカルーセルを起点にセクションが縦に連なる構成。プロダクトカテゴリページは余裕のあるスペーシングで製品画像を大きく見せる
- **キーワード**: クリーンホワイト、Roboto Light、シアンアクセント、プロダクト中心、クリエイティブツール
- **特徴**:
  - 見出しに **Roboto**（weight 300）、本文に **Arial** + MS PGothic のフォールバック構成
  - リンクカラーに `#0097d4`（Wacom シアン）を使用。ブランドの一貫したアクセント
  - 一部見出しに `#0013c8`（Wacom ブルー）を使用。高彩度なブランドカラー
  - ストアリンクに `#96be0f`（Wacom グリーン）を使用。購入導線を色で分ける
  - CSS Custom Properties 不使用。値はハードコード
  - ナビゲーションのテキストに `letter-spacing: 1.2px`（0.08em）のワイドトラッキング
  - font-feature-settings は全体的に `normal`（palt 不使用）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Wacom Cyan** (`#0097d4`): テキストリンク、見出しリンク。サイト全体の主要アクセントカラー（rgb(0, 151, 212)）
- **Wacom Blue** (`#0013c8`): 一部セクション見出し（h2/h3）に使用される高彩度ブランドブルー（rgb(0, 19, 200)）
- **Wacom Green** (`#96be0f`): ストアリンク・購入導線に使用（rgb(150, 190, 15)）
- **Wacom Light Green** (`#84bd00`): Cookie 同意「すべて承諾」ボタン（rgb(132, 189, 0)）

### CTA / Buttons

- **Cookie Accept**: 背景 `#84bd00` / 文字 `#ffffff` / radius `0px` / padding `5px 10px` / 14px / weight 400
- **Cookie Detail**: 背景 `#00a3e0` / 文字 `#ffffff` / radius `0px` / padding `5px 10px` / 14px / weight 400
- **Default Button**: 背景 `#adafb4` / 文字 `#ffffff` / radius `0px` / padding `6px 12px` / 15px / weight 400
- **Support Button**: 背景 `#1f73b7` / 文字 `#ffffff`（フッター内サポートチャット）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 本文テキスト、見出し |
| Nav Text | `#383c42` | (56, 60, 66) | ナビゲーション項目 |
| Dark Gray | `#333333` | (51, 51, 51) | アイコン・UI要素背景 |
| Sub Gray | `#808285` | (128, 130, 133) | サブヘッダー（"Explore" 等） |
| Footer Text | `#4b4d50` | (75, 77, 80) | フッターリンク |
| Copyright Gray | `#828b99` | (130, 139, 153) | コピーライト |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |
| Surface Gray | `#f3f6f7` | (243, 246, 247) | セクション交互背景、フッター背景 |
| Light Surface | `#e4e5e9` | (228, 229, 233) | 言語選択リスト背景 |
| Alt Surface | `#e9eced` | (233, 236, 237) | アクティブ選択背景 |
| Promo Pink | `#ffe3e5` | (255, 227, 229) | プロモセクション背景（One by Wacom） |
| Promo Yellow | `#ffdb00` | (255, 219, 0) | プロモセクション背景（Wacom One） |
| Promo Green | `#b5dfad` | (181, 223, 173) | プロモセクション背景（See where it takes you） |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **MS PGothic**（body 系のフォールバック）。Wacom サイトはシステムフォントに依存しており、Web フォントは使用していない
- **明朝体**: 使用しない（サイト全体ゴシック系）
- **フォールバック**: MS PMincho が最終 fallback に入っているが、実際にはゴシック系で表示

### 3.2 欧文フォント

- **サンセリフ（見出し）**: **Roboto**（Google Fonts）— weight 300 を一貫して使用
- **サンセリフ（本文）**: **Arial** — システムフォントで可用性が高い

### 3.3 font-family 指定

```css
/* 見出し（h1〜h4） */
font-family: Roboto, "MS PGothic", Arial, "MS PMincho", sans-serif;

/* 本文・UI（body, p, a, span, li, button） */
font-family: Arial, "MS PGothic", "MS PMincho", sans-serif;

/* ナビ・モーダル等（一部簡略化） */
font-family: Roboto, sans-serif;

/* Cookie バナー */
font-family: Arial, sans-serif;
```

**フォールバックの考え方**:
- 見出しは Roboto（Google Fonts）を優先し、和文は MS PGothic にフォールバック
- 本文は Arial 先頭のシステムフォント構成。和文の Web フォントは読み込まない
- MS PGothic は Windows 向け。Mac では sans-serif generic が Hiragino に解決される
- MS PMincho がフォールバック末尾に入っているのは Wacom サイト特有の構成

> **代替フォント注記**: MS PGothic は Windows 専用フォントのため、クロスプラットフォームで再現する場合は **Noto Sans JP**（weight 300 / 400）+ **Roboto**（weight 300 / 400）の組み合わせを推奨。preview.html はこの代替を使用。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／ペンタブレットページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page H1 | Roboto | 45px | **300** | 58.5px (x1.3) | normal | `#000000` | "ワコムのペンタブレット" |
| Section H2 | Roboto | 35px | **300** | 42px (x1.2) | normal | `#000000` | セクション見出し |
| Section H2 (blue) | Roboto | 35px | **300** | 42px (x1.2) | normal | `#0013c8` | ブランドカラー見出し |
| Sub H2 | Roboto | 30px | **300** | 41px (x1.37) | normal | `#000000` | サブセクション見出し |
| H3 | Roboto | 26-28px | **300** | x1.3 | normal | `#000000` | 製品名・キャッチコピー |
| H3 (blue) | Roboto | 26px | **300** | 33.8px (x1.3) | normal | `#0013c8` | ブランドカラー小見出し |
| H3 (white) | Roboto | 24-28px | **300** | x1.3 | normal | `#ffffff` | ダーク背景セクション |
| H4 Product | Roboto | 19.5-20.8px | **300** | x1.3 | normal | `#000000` | 製品モデル名 |
| Body | Arial | 18px | 400 | 30.6px (x1.7) | normal | `#000000` | 本文（メイン） |
| Body (product) | Arial | 16px | 400 | 25-27.2px (x1.56-1.7) | normal | `#000000` | 製品説明文 |
| Nav Item | Arial | 15px | 400 | 20px (x1.33) | 1.2px (0.08em) | `#383c42` | ナビゲーション |
| Footer Link | Arial | 11.2px | 400 | 16px (x1.43) | normal | `#4b4d50` | フッターリンク |
| Copyright | Arial | 13.5px | 400 | 22.95px (x1.7) | normal | `#828b99` | コピーライト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.7（`30.6px` / `18px`）
- **製品説明の行間**: 1.56〜1.7（`25px` / `16px` 〜 `27.2px` / `16px`）
- **見出しの行間**: 1.2〜1.37（H1: 1.3、H2: 1.2、H3: 1.3）
- **本文の字間 (letter-spacing)**: normal（0）
- **ナビゲーションの字間**: 0.08em（`1.2px` / `15px`）

**ガイドライン**:
- 見出しは一貫して weight 300 + 狭い行間（1.2〜1.3）で、軽やかなモダン感を演出
- 本文の 1.7 は日本語としてやや標準的。欧文混在を想定した設定
- ナビゲーションのみ letter-spacing を適用。本文・見出しは normal

### 3.6 禁則処理・改行ルール

```css
/* 実測値では特別な設定なし。ブラウザデフォルトに依存 */
word-break: normal;
overflow-wrap: normal;
```

### 3.7 OpenType 機能

```css
/* 全体的に normal（未設定） */
font-feature-settings: normal;
```

- **palt**: 使用しない。Wacom サイトはプロポーショナル字詰めを適用していない
- **kern**: 使用しない
- Roboto 見出し + Arial 本文というシンプルな構成のため、OpenType 機能に依存しないデザイン

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary (CTA)**
- Background: `#00a3e0`
- Text: `#ffffff`
- Padding: 5px 10px
- Border Radius: 0px（角丸なし、シャープ）
- Font Size: 14px
- Font Weight: 400

**Accept / Green**
- Background: `#84bd00`
- Text: `#ffffff`
- Padding: 5px 10px
- Border Radius: 0px
- Font Size: 14px
- Font Weight: 400

**Default / Gray**
- Background: `#adafb4`
- Text: `#ffffff`
- Padding: 6px 12px
- Border Radius: 0px
- Font Size: 15px
- Font Weight: 400

**Carousel Arrow**
- Background: `rgba(255, 255, 255, 0.75)`
- Text: `#333333`
- Border Radius: 50%（円形）
- Shadow: none

### Inputs

- Background: `rgba(0, 0, 0, 0)`（透明）
- Border: 0px（入力フィールドは cookie チェックボックスのみ検出）
- Font Size: 15px
- Font Weight: 400

### Cards

- Background: `#ffffff`（通常セクション）/ `#f3f6f7`（交互背景セクション）
- Border: none
- Border Radius: 0px（角丸なし）
- Shadow: none（フラットデザイン）

### Product Tabs（製品一覧フィルタ）

- Background (default): `#e5e5e5`
- Background (active): `#f3f6f7`
- Border Radius: 10px（pill 型）
- Shadow: `rgba(0, 0, 0, 0.2) 0 0 1px 0`

### Text Links

- Color: `#0097d4`（Wacom シアン）
- Color (store): `#96be0f`（Wacom グリーン）
- Color (product detail): `#00aae5`（やや明るいシアン）
- Text Decoration: none（下線なし）

### Navigation

- Background: `#ffffff`
- Height: 70px（padding-top: 70px が body に設定）
- Position: fixed top
- Nav Link Color: `#383c42`
- Nav Link Letter Spacing: 1.2px（0.08em）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 備考 |
|-------|-------|------|
| XS | 5px | ボタン内パディング（垂直） |
| S | 10px | ボタン内パディング（水平） |
| M | 16px | セクション内テキスト間隔 |
| L | 20px | ヘッダー内パディング |
| XL | 25px | ナビリンクパディング |
| XXL | 30px | フッターボトムパディング |

### Container

- Max Width: 約1440px（実測ベース）
- Content Padding: 可変（セクションによる）

### Grid

- ヒーローカルーセル: フルワイド
- 製品カード: 2〜3カラム
- フッター: マルチカラムリンクリスト

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラットデザイン） |
| 1 | `rgba(0, 0, 0, 0.2) 0 0 1px 0` | 製品フィルタタブ（pill） |

- Wacom サイトは極めてフラットなデザイン。box-shadow の使用は最小限
- 奥行きはセクション背景色の交互配置（`#ffffff` / `#f3f6f7`）で表現
- カルーセルの矢印ボタンが唯一の半透明背景要素（`rgba(255, 255, 255, 0.75)`）

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは一貫して **Roboto weight 300** を使う。Wacom の軽やかなモダンスタイルの核心
- ページ背景は `#ffffff`、交互セクションに `#f3f6f7` を使う
- テキストリンクには `#0097d4`（Wacom シアン）を使う
- 購入・ストア導線には `#96be0f`（Wacom グリーン）で視覚的に区別する
- ボタンは角丸なし（radius: 0px）のシャープなスタイルを維持する
- プロモセクションにはパステルカラー背景（`#ffe3e5`, `#ffdb00`, `#b5dfad`）を使い、製品の雰囲気を演出する
- ナビゲーションテキストには `letter-spacing: 0.08em` を適用する

### Don't（禁止）

- 見出しに weight 400 以上を使わない（weight 300 が Wacom のトーン）
- ボタンに大きな角丸（pill 型、radius > 4px）を使わない（製品フィルタタブは例外）
- 本文に palt を適用しない（Wacom サイトは font-feature-settings: normal）
- ダーク背景をページ全体に使わない（Wacom はホワイトベースのクリーンデザイン）
- リンクカラーを青（`#0000ff`）にしない。Wacom シアン `#0097d4` を使う
- 和文フォントに明朝体を混ぜない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- ナビゲーションリンクのパディングは `25px 10px` で十分なタッチ領域を確保

### フォントサイズの調整

- モバイルでは H1 を 30px 程度に縮小（デスクトップ 45px の約 67%）
- 本文サイズはデバイスに関わらず 16px 以上を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff
Surface: #f3f6f7
Text Color: #000000
Link Color: #0097d4
Brand Blue: #0013c8
Store Green: #96be0f
Heading Font: Roboto, "Noto Sans JP", sans-serif
Body Font: Arial, "Noto Sans JP", sans-serif
Heading Weight: 300
Body Size: 16-18px / Weight 400
Line Height: 1.7 (body), 1.2-1.3 (headings)
Button Radius: 0px
```

### プロンプト例

```
Wacom のデザインシステムに従って、ペンタブレット製品一覧ページを作成してください。
- 背景: #ffffff（ホワイト）、交互セクションに #f3f6f7
- テキスト: #000000
- 見出しフォント: Roboto, "Noto Sans JP", sans-serif（weight 300）
- 本文フォント: Arial, "Noto Sans JP", sans-serif（weight 400）
- リンク: #0097d4（シアン）
- ストア・購入リンク: #96be0f（グリーン）
- ボタン: 角丸なし（radius: 0px）
- 製品フィルタタブ: radius 10px の pill 型
- 行間: 本文 1.7、見出し 1.2-1.3
```
