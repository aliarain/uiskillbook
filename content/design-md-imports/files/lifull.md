# DESIGN.md — LIFULL（ライフル）

> LIFULL（https://lifull.com/）のデザイン仕様書。
> 「LIFULL HOME'S」等を運営する不動産・住宅テック企業。社名は LIFE + FULL の造語。
> 実サイトの computed style 実測（2026-05-15 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白基調**に **ブランドオレンジ `#ed6103`** を CTA・アクセントに効かせた温かみのあるコーポレートデザイン。自社書体 **LIFULL フォント** でブランドの統一感を出す
- **密度**: 本文 16px・line-height 2.0 と非常に広い行間。ゆったりとした読み心地でコーポレートサイトにふさわしい余裕のある組み
- **キーワード**: オレンジ、ウォーム、LIFULL フォント、pill CTA、不動産テック、ゆったり行間
- **特徴**:
  - 自社書体 **LIFULL** を font-family 先頭に配置。游ゴシック → ヒラギノ角ゴ Pro W3 → メイリオのフォールバック
  - **ブランドカラーは `#ed6103`（ビビッドオレンジ）**。CTA ボタンのテキスト色、ニュースリンク等に使用
  - **ライトオレンジ `#fef3eb`** をアクセントサーフェスに使用（PDF ダウンロードリンク等）
  - サーフェスに `#f4f4f4`（CSS 変数 `--bgGray`）を使い、セクション区切り
  - CTA ボタンは **pill（radius 34px）** で **白背景＋オレンジテキスト** の ghost 形式
  - 本文の font-weight が **500（Medium）** で、游ゴシックのデフォルト 400 より太い。視認性を重視
  - テキスト色は `#1f1f1f`（近黒だが純黒ではない）
  - ダークモード非対応（実測時点）
  - WordPress ベース（`--wp--preset--*` CSS 変数が存在）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Orange** (`#ed6103`): メインのブランドカラー。CTA ボタンテキスト、セクションリンク、ナビゲーションアクセント
- **Light Orange Surface** (`#fef3eb`): オレンジの淡い面。PDF ダウンロードリンクの背景、プロモセクション

### CTA / Buttons

- **Primary CTA（Ghost Pill）**: 背景 `#ffffff` / 文字 `#ed6103` / radius `34px` / 16px / ホバーで色反転（推定）
- **Secondary CTA（Outline Pill）**: 背景 `transparent` / 文字 `#ed6103` / border（推定）/ radius `9999px`（完全 pill）
- **Tertiary（Text + Pill）**: 背景 `#ffffff` / 文字 `#1f1f1f` / radius `9999px`（"〜を見る" リンク）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#1f1f1f` | (31, 31, 31) | 本文テキスト（**近黒**、純黒ではない） |
| Black | `#000000` | (0, 0, 0) | ヒーロー背景・動画オーバーレイ |
| Border Gray | `#d9d9d9` | (217, 217, 217) | 区切り線、セパレーター |
| Surface (--bgGray) | `#f4f4f4` | (244, 244, 244) | セクション背景（CSS 変数 `--bgGray`） |
| Background | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#cf2e2e`（WP preset `--wp--preset--color--vivid-red` に近い値）
- **Success**: `#00d084`（WP preset `--wp--preset--color--vivid-green-cyan`）
- **Warning**: `#fcb900`（WP preset `--wp--preset--color--luminous-vivid-amber`）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **LIFULL**（自社コーポレートフォント）をプライマリに使用
- **フォールバック**: `游ゴシック` → `YuGothic` → `ヒラギノ角ゴ Pro W3` → `Hiragino Kaku Gothic Pro` → `メイリオ` → `Meiryo` → `Osaka` → `ＭＳ Ｐゴシック` → `MS PGothic` → `sans-serif`
- **明朝体**: 使用しない

### 3.2 欧文フォント

- LIFULL フォントの欧文グリフを使用（専用欧文書体なし）
- フォールバック中に欧文専用指定なし。游ゴシックの欧文グリフがフォールバック

### 3.3 font-family 指定

```css
/* 全ページ共通 */
font-family: LIFULL, 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- LIFULL 自社フォントを先頭に。このフォントが利用できない環境では游ゴシックにフォールバック
- ヒラギノの指定は **Pro W3**（ProN ではない）
- Osaka は古い macOS 対策
- font-family は全要素で統一。ウェイト別に family を分けない（ZOZO と異なる）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | LIFULL | 40px | 700 | — | 0.04em | サービスセクション見出し |
| Heading 2 | LIFULL | 32px | 700 | 1.6 | normal | About ページセクション見出し |
| Heading 3 | LIFULL | 24px | 700 | — | normal | サブセクション見出し |
| Heading 4 | LIFULL | 21px | — | 2.0 | 0.04em | コーポレートメッセージ本文（大） |
| Body Large | LIFULL | 20px | — | 2.0 | normal | 導入文（ナビドロワー内） |
| Body | LIFULL | 16px | 500 | 2.0 | normal | 本文 |
| Body + Tracking | LIFULL | 16px | 500 | 1.75 | 0.04em | サービス説明文 |
| Small | LIFULL | 16px | — | 1.5 | normal | 日付・ニュースリスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.0（32px / 16px）。日本語としてかなり広い設定で、ゆったりとした読み心地
- **見出しの行間**: 1.6（Heading 2）。見出しも比較的広め
- **本文の字間 (letter-spacing)**: normal（0）が基本。一部セクションで `0.04em`（0.64px / 16px）
- **見出しの字間**: 0.04em（40px 見出しで 1.6px）

### 3.6 禁則処理・改行ルール

```css
/* 実測ではデフォルト設定 */
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` は使用していない

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（Ghost Pill）**
- Background: `#ffffff`
- Text: `#ed6103`
- Padding: 内包
- Border Radius: 34px
- Font Size: 16px

**Secondary CTA（Outline Pill）**
- Background: `transparent`
- Text: `#ed6103`
- Border Radius: 9999px（完全 pill）
- Font Size: 16px

**Tertiary（Text Pill）**
- Background: `#ffffff`
- Text: `#1f1f1f`
- Border Radius: 9999px
- Font Size: 16px
- 用途: "〜を見る" リンクボタン

**Scroll-to-top**
- Background: `#ffffff`
- Text: `#1f1f1f`
- Border Radius: 100%（円形）

### Cards

- Background: `#ffffff`
- Border: なし（推定）
- Shadow: なし（推定・フラットデザイン）

### Navigation

- **ヒーロー背景**: `#000000`（ダーク。動画背景）
- **ドロワー背景**: `#f4f4f4`
- **ナビリンク色**: `#1f1f1f`
- **アクセントリンク色**: `#ed6103`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 32px |
| XL | 64px |
| XXL | 96px |

### Container

- Max Width: フルスクリーンヒーロー + コンテンツエリア中央寄せ
- Content Padding: 左右余白あり

### Grid

- サービスセクションはカードグリッド
- ニュースは単カラムリスト
- セクション区切りは `#f4f4f4` 背景で

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素 |

- WordPress preset として shadow トークンが定義されている（`--wp--preset--shadow--natural` = `6px 6px 9px rgba(0,0,0,0.2)` 等）が、コーポレートサイト本体ではシャドウをほぼ使用していない

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文の font-weight は **500**（Medium）を使う。游ゴシックの 400 より太く、視認性が高い
- line-height は **2.0** を基準に。LIFULL はゆったりとした行間が特徴
- アクセントカラーは `#ed6103`（オレンジ）に統一する
- テキスト色は `#1f1f1f`（近黒）を使い、純黒 `#000000` は避ける
- ボタンは pill 形状で ghost（白背景＋オレンジテキスト）が基本
- セクション背景に `#f4f4f4` を使って区切りをつける

### Don't（禁止）

- font-weight 400（Regular）を本文に使わない。LIFULL は 500（Medium）が基本
- 本文の line-height を 1.6 以下にしない（2.0 が基準）
- テキスト色に純黒 `#000000` を使わない（`#1f1f1f` が正しい）
- オレンジ以外のアクセントカラーを追加しない
- ヒラギノの指定を `ProN` にしない（LIFULL は `Pro` を使用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（推奨）

### フォントサイズの調整

- モバイルでは本文 14–16px を維持。見出しはデスクトップの 70–80% 程度に

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Orange): #ed6103
Light Orange Surface: #fef3eb
Text Color: #1f1f1f
Background: #ffffff
Surface: #f4f4f4
Font: LIFULL, 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Body Size: 16px
Body Weight: 500
Line Height: 2.0
```

### プロンプト例

```
LIFULLのデザインシステムに従って、サービス一覧ページを作成してください。
- ページ背景は #ffffff、セクション背景に #f4f4f4 を交互に使用
- CTA ボタンは pill 形状（radius 34px）で白背景 + #ed6103 テキスト
- フォントは LIFULL + 游ゴシックスタック、16px / weight 500 / line-height 2.0
- テキスト色は #1f1f1f（近黒）
- 見出しは 32–40px / weight 700
```
