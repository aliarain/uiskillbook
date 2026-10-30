# DESIGN.md — NANGA（ナンガ）

> NANGA（https://nanga.jp/）のデザイン仕様書。
> 滋賀県米原発、高品質な寝袋とダウンウェアを中心としたアウトドアブランド。
> 実サイトの computed style 実測（2026-06-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **黒ベースのフルブリード写真 + Roboto / Noto Sans JP のモダンサンセリフ**。ブランドサイトはファーストビュー全面が黒背景のキービジュアルで、白抜き文字とピル型 CTA で構成する「アウトドアギア × ストリートファッション」のハイブリッドデザイン
- **密度**: 本文 16px / line-height 1.5 / letter-spacing normal。画像を大きく、テキストは最小限。余白はゆったり取り、プロダクトの質感を写真に語らせる構成
- **キーワード**: モノトーン、黒主体、ピル CTA、Roboto、Noto Sans JP、アウトドア、ストリート、タフネス
- **特徴**:
  - **font-feature-settings は normal**。palt 不使用。文字は素のまま
  - **ブランドサイト（nanga.jp）は Tailwind CSS + WordPress**。`tw-` プレフィックスで管理
  - **オンラインストア（store.nanga.jp）は Shopify**。Roboto Condensed を見出しに使用
  - **キーカラーは深紅 `#b32e36`** と **サブカラーのオレンジレッド `#e75534`**。CTA の "VIEW ALL" ボタン背景に使用
  - **ピル型ボタン（radius 9999px）** がメイン CTA。直角ボタンは使わない
  - **ヘッダー・フッター・キービジュアルすべて黒**。白はコンテンツ面・テキスト色として使う

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。CSS Custom Properties（`--main-*`）に基づく。

### Brand

- **Key Red** (`#b32e36`): ブランドキーカラー。CSS 変数 `--main-key-color`。アクセントテキストに使用
- **Sub Orange** (`#e75534`): サブカラー。CSS 変数 `--main-sub-color`。"VIEW ALL" CTA 背景・ホバー色
- **Black** (`#000000`): メイン背景色。ヘッダー・フッター・キービジュアル・ドロワーナビの基調
- **White** (`#ffffff`): コンテンツ面背景。白抜きテキスト色

### CTA / Buttons

- **Primary CTA（白ピル・黒地用）**: 背景 `#ffffff` / 文字 `#000000` / **radius `9999px`** / padding `8px 16px` / 13.6px / weight 400 / "READ MORE"
- **Primary CTA（黒ピル・白地用）**: 背景 `#000000` / 文字 `#ffffff` / radius `9999px` / padding `8px 16px` / 13.6px / weight 400 / "READ MORE"
- **Accent CTA（オレンジピル）**: 背景 `#e75534` / 文字 `#222222` / radius `9999px` / padding `8px 16px` / 13.6px / weight 400 / "VIEW ALL"
- **Mono CTA（ダークグレーピル）**: 背景 `#222222` / 文字 `#ffffff` / radius `9999px` / padding `8px 16px` / 13.6px / weight 400 / "VIEW ALL"
- **Outline Tag（グレー枠ピル）**: 背景 transparent / 文字 `#b0b0b0` / border `1px solid #b0b0b0` / radius `9999px` / padding `4px 12px` / 12px / weight 400 / "続きを読む"

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | ヘッダー・フッター・キービジュアル背景 |
| Near Black | `#1a1d1c` | (26, 29, 28) | セクション面色（About 等） |
| Dark Text | `#222222` | (34, 34, 34) | CSS 変数 `--main-text-color`。白地上の本文 |
| Gray | `#b0b0b0` | (176, 176, 176) | アウトラインタグのテキスト・ボーダー |
| Light Border | `#e5e7eb` | (229, 231, 235) | Tailwind のデフォルトボーダー |
| White | `#ffffff` | (255, 255, 255) | コンテンツ面・白抜きテキスト |

### Semantic（推奨値）

実サイトには明確なエラー／成功色は表面化していない。アウトドアブランド向け推奨値:

- **Danger**: `#b32e36`（キーカラーと統一）
- **Warning**: `#e75534`（サブカラーと統一）
- **Success**: `#3d7a4a`（アウトドアグリーン）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**（Google Fonts）—— ブランドサイトの和文すべて
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: **Roboto**（Google Fonts）—— ブランドサイトのメイン欧文
- **コンデンスド**: **Roboto Condensed**（Google Fonts）—— オンラインストアの見出し
- **ストア本文**: **Open Sans**（Google Fonts）—— オンラインストアの本文

### 3.3 font-family 指定

```css
/* ブランドサイト（nanga.jp） */
font-family: Roboto, "Noto Sans JP", sans-serif;

/* オンラインストア 見出し（store.nanga.jp） */
font-family: "Roboto Condensed", sans-serif;

/* オンラインストア 本文 */
font-family: "Open Sans", sans-serif;

/* オンラインストア 和文見出し */
font-family: Roboto, Roboto, "Yu Gothic Medium", "游ゴシック Medium",
  "Yu Gothic", 游ゴシック, "Hiragino Kaku Gothic Pro",
  "ヒラギノ角ゴ Pro", sans-serif;
```

**フォールバックの考え方**:
- ブランドサイトは **欧文（Roboto）優先 → 和文（Noto Sans JP）** の構成
- ストアの和文見出しは **OS 系フォント（游ゴシック → ヒラギノ角ゴ）** に段階フォールバック

> **代替フォント注記**: Roboto・Noto Sans JP・Roboto Condensed・Open Sans はすべて Google Fonts で直接利用可能。追加代替は不要。

### 3.4 文字サイズ・ウェイト階層

> 実測値（nanga.jp + store.nanga.jp、2026-06-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display | Roboto | 36px | 900 | 45px (x1.25) | 3.6px (0.1em) | `#ffffff` | "MEMBER SHIP" |
| Heading 1 (Brand) | Roboto | 28px | 600 | 42px (x1.5) | normal | `#222222` | "FEATURE" |
| Heading 2 (Brand) | Roboto | 20px | 900 | 25px (x1.25) | normal | `#b32e36` | キーカラー見出し |
| Heading 2 (Store) | Roboto | 28px | 700 | 42px (x1.5) | normal | `#ffffff` | "NANGA MEMBERSHIP" |
| Heading 3 (Store) | Roboto Condensed | 32px | 700 | 38.4px (x1.2) | 0.96px (0.03em) | `#ffffff` | セクション大見出し |
| Subheading | Roboto | 20px | 600 | 30px (x1.5) | normal | `#ffffff` | "メンバーシップ プログラム" |
| Nav | Roboto | 18px | 400 | 27px (x1.5) | normal | `#ffffff` | "PRODUCT製品について" |
| Nav Sub | Roboto | 14px | 400 | 28px (x2.0) | normal | `#ffffff` | "SLEEPING BAG" |
| Body | Roboto | 16px | 400 | 24px (x1.5) | normal | `#222222` | 本文 |
| CTA | Roboto | 13.6px | 400 | 20.4px (x1.5) | normal | — | ピルボタンラベル |
| Caption | Roboto | 12px | 400 | 18px (x1.5) | normal | `#b0b0b0` | タグ・補足 |
| Small | Roboto | 10px | 400 | 15px (x1.5) | normal | `#ffffff` | ナビ日本語サブラベル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（16px / 24px）
- **見出しの行間**: 1.25〜1.5（サイズに応じて）
- **本文の字間 (letter-spacing)**: normal（0）
- **Display の字間**: 0.1em（大きな英文タイトルのみ広く取る）

### 3.6 禁則処理・改行ルール

```css
/* Tailwind CSS デフォルト */
word-break: normal;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 不使用 */
```

- palt・kern ともに適用なし。Roboto + Noto Sans JP のデフォルト字詰めのまま

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（白ピル）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 8px 16px
- Border Radius: 9999px
- Font Size: 13.6px
- Font Weight: 400

**Primary Inverted（黒ピル）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 8px 16px
- Border Radius: 9999px

**Accent（オレンジピル）**
- Background: `#e75534`
- Text: `#222222`
- Padding: 8px 16px
- Border Radius: 9999px

**Outline（グレー枠ピル）**
- Background: `transparent`
- Text: `#b0b0b0`
- Border: 1px solid `#b0b0b0`
- Padding: 4px 12px
- Border Radius: 9999px
- Font Size: 12px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e5e7eb`
- Border (focus): 1px solid `#000000`
- Border Radius: 0px
- Padding: 8px 12px
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px
- Padding: 0px
- Shadow: none（フラット）

---

## 5. Layout Principles

### Spacing Scale

Tailwind CSS デフォルトスケールに準拠:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 48px |
| XXL | 64px |

### Container

- Max Width: 1440px（ブランドサイト）
- Padding (horizontal): 20px

### Grid

- Columns: 可変（フレキシブル）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットデザイン） |
| 1 | `6px 6px 9px rgba(0,0,0,0.2)` | WordPress preset shadow（利用は限定的） |
| 2 | `12px 12px 50px rgba(0,0,0,0.4)` | WordPress preset deep shadow |

---

## 7. Do's and Don'ts

### Do（推奨）

- ボタンは常に **ピル型（radius 9999px）** にする
- 黒地には白テキスト・白ピル、白地には黒テキスト・黒ピルの反転パターンを守る
- 英文は Roboto、和文は Noto Sans JP を一貫して使う
- 写真を大きく使い、テキストは最小限にする
- CSS 変数 `--main-key-color`（`#b32e36`）と `--main-sub-color`（`#e75534`）をアクセントに使う

### Don't（禁止）

- 角丸ボタン（4px〜16px 程度の中途半端な radius）を使わない
- 明朝体やセリフ体を使わない（ブランドの方向性に反する）
- テキストに `#000000` 純黒を白地の上で多用しない（`#222222` を使う）
- palt を適用しない（このブランドでは不使用）
- 派手な色（赤・黄・青など彩度の高い色）を大面積で使わない

---

## 8. Responsive Behavior

### Breakpoints

Tailwind CSS のデフォルト:

| Name | Width | 説明 |
|------|-------|------|
| sm | ≥ 640px | スモールスクリーン |
| md | ≥ 768px | タブレット |
| lg | ≥ 1024px | デスクトップ |
| xl | ≥ 1280px | ワイドスクリーン |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイル: 本文 16px 維持、見出しは `tw-text-xl`（20px）→ デスクトップ `md:tw-text-3xl`（30px）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #b32e36 (key), #e75534 (sub)
Text Color: #222222 (白地), #ffffff (黒地)
Background: #000000 (メイン), #ffffff (コンテンツ)
Font: Roboto, "Noto Sans JP", sans-serif
Body Size: 16px
Line Height: 1.5
Button Radius: 9999px (pill)
```

### プロンプト例

```
NANGAのデザインシステムに従って、商品一覧ページを作成してください。
- 背景: #000000（メイン）、商品カード部分は #ffffff
- フォント: Roboto, "Noto Sans JP", sans-serif
- 行間: line-height: 1.5
- ボタン: 全てピル型（border-radius: 9999px）
- CTA: 白ピル（#ffffff bg / #000000 text）またはオレンジピル（#e75534 bg）
- テキスト色: 白地上は #222222、黒地上は #ffffff
```
