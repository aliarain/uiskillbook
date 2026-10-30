# DESIGN.md — LUMINE（ルミネ）

> LUMINE（https://www.lumine.ne.jp/）のデザイン仕様書。
> JR東日本グループの駅ビル型ファッションビル。"わたしらしくをあたらしく"をコンセプトに、都市生活者のライフスタイルを提案する商業施設。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロームを基調に、余白と細い線で構成されたエディトリアルデザイン。ファッション誌のような洗練された静謐さ
- **密度**: コンパクトな行間（body line-height 1.15）と統一的な字間（0.05em）で、テキストを詰め気味に組む。情報密度は高いが、余白のバランスで窮屈にならない
- **キーワード**: モノクローム、エディトリアル、洗練、静謐、ファッション
- **特徴**:
  - **Inter（欧文）+ Noto Sans JP（和文）**の組み合わせ。font-family は**欧文優先**で Inter を先頭に置く
  - **palt をグローバル有効化**。body レベルで `font-feature-settings: "palt"` を適用
  - テキスト色は**純黒 `#000000`**。フッターは黒背景 `#000000` に白文字 `#ffffff` の反転レイアウト
  - CTA は**グレー `#777777`**。ブランドカラーによる主張を排し、プロダクトとビジュアルが主役になる設計
  - タグ・ピルは `#f7f7f7`（ライトグレー）背景に `8px` radius で柔らかい角丸
  - インフォメーションパネルに `#d9e7f1`（淡いブルー）を使用。色味のある要素はここだけ
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Black** (`#000000`): テキスト・見出し・フッター背景。ブランドの基調色
- **Gray CTA** (`#777777`): 主要 CTA "ショップ検索" / "READ MORE" / "MORE" の背景
- **Info Blue** (`#d9e7f1`): インフォメーションパネルの背景。唯一の色味あるアクセント

### CTA / Buttons

- **Primary CTA**: 背景 `#777777` / 文字 `#ffffff` / radius `8px` / 14px / weight 400
- **Tag Button**: 背景 `#f7f7f7` / 文字 `#000000` / radius `8px` / 14px / weight 400
- **Header Button**: 背景 `#f7f7f7` / 文字 `#000000` / radius `4px` / padding `0 16px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 見出し・本文テキスト・フッター背景 |
| Gray CTA | `#777777` | (119, 119, 119) | CTA ボタン背景 |
| Light Gray | `#f7f7f7` | (247, 247, 247) | タグ・ボタン・サーフェス背景 |
| Separator | `#d9d9d9` | (217, 217, 217) | 区切り線 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Accent

- **Info Blue** (`#d9e7f1`): インフォメーションパネル。shadow `rgba(0,0,0,0.16) 0 1px 3px 0` 付き
- **Overlay** (`rgba(0,0,0,0.6)`): スライダーオーバーレイ

### Semantic（実測未確認・推奨値）

- **Danger**: `#d32f2f`
- **Success**: `#388e3c`
- **Warning**: `#f57c00`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を使用
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ**: **Inter** を最優先。欧文部分は Inter で描画される
- Noto Sans JP の欧文グリフは Inter 不在時のフォールバック

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: Inter, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**で Inter を先頭に置く。欧文部分は Inter の洗練されたグリフで描画し、和文は Noto Sans JP にフォールバック
- フォールバックチェーンが非常に短い（3要素のみ）。Inter + Noto Sans JP + generic で完結する潔い構成
- Inter / Noto Sans JP ともに Google Fonts で配信

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 (en) | Inter | 28px | **500** | 36.4px (×1.3) | 1.4px (0.05em) | `#000000` | "LUMINE Instagram" 等の英字見出し |
| Body | Inter + Noto Sans JP | 16px | 400 | 18.4px (×1.15) | 0.8px (0.05em) | `#000000` | 本文 |
| Nav Link | Inter + Noto Sans JP | 15px | 400 | 24px (×1.6) | 0.36px (0.024em) | `#000000` | グローバルナビ |
| Tag | Inter + Noto Sans JP | 14px | 400 | 16.8px (×1.2) | 0.7px (0.05em) | `#000000` | 店舗名タグ |
| CTA | Inter + Noto Sans JP | 14px | 400 | 21px (×1.5) | 0.7px (0.05em) | `#ffffff` | "ショップ検索" 等 |
| H2 (ja) | Inter + Noto Sans JP | 12px | 400 | 18px (×1.5) | 0.6px (0.05em) | `#000000` | "店舗一覧" 等 |
| Caption | Inter + Noto Sans JP | 12px | 400 | 12px (×1.0) | 0.6px (0.05em) | `#000000` | 補足テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.15`（18.4px / 16px）— **日本語としては非常にタイト**。エディトリアルレイアウト
- **英字見出し (28px)**: `1.3`
- **ナビリンク (15px)**: `1.6`
- **タグ (14px)**: `1.2`
- **CTA (14px)**: `1.5`

**字間 (letter-spacing)** — 実測:
- **ほぼ全要素で `0.05em`**。統一的なトラッキング
- ナビリンクのみ `0.024em` とやや狭い

**ガイドライン**:
- body line-height 1.15 はファッション誌のような詰め組みの印象を作る
- letter-spacing 0.05em の統一が静謐さを生む
- weight は 400 が基本。見出しでも最大 500。bold 700 は使わない

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **palt をグローバル有効化**。body レベルで全要素に継承

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（グレー角丸）** — "ショップ検索" / "READ MORE"
- Background: `#777777`
- Text: `#ffffff`
- Border Radius: `8px`
- Font: 14px, weight 400, letter-spacing 0.05em

**Tag Button** — "新宿" / "有楽町" 等
- Background: `#f7f7f7`
- Text: `#000000`
- Border Radius: `8px`
- Font: 14px, weight 400

**Info Panel** — "INFORMATION"
- Background: `#d9e7f1`
- Text: `#000000`
- Padding: `16px`
- Border Radius: `0 3px 3px 0`
- Shadow: `rgba(0,0,0,0.16) 0 1px 3px 0`

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #d9d9d9`
- Border (focus): `1px solid #000000`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: 16px, weight 400
- Height: `44px`

### Cards

- Background: `#ffffff`
- Border: なし、または `1px solid #f7f7f7`
- Border Radius: `8px`
- Shadow: `none`

### Footer

- Background: `#000000`
- Text: `#ffffff`
- Padding: `80px 67px 160px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン間 |
| S | 8px | タグ間 |
| M | 16px | カード内余白 |
| L | 24px | セクション内余白 |
| XL | 48px | セクション間余白 |
| XXL | 80px | フッター上余白 |

### Container

- Max Width: `1200px`
- Padding: mobile `16px` / desktop `40px`

### Grid

- Columns: 12
- Gutter: `24px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ほぼ全要素 |
| 1 | `0 1px 3px rgba(0,0,0,0.16)` | インフォパネル |
| 2 | `0 4px 12px rgba(0,0,0,0.08)` | ドロップダウン（推奨） |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル（推奨） |

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Inter → Noto Sans JP → sans-serif** の順（欧文優先）
- `font-feature-settings: "palt"` を body に設定
- letter-spacing は **0.05em** で統一
- CTA は **`#777777` グレー + `8px` radius**
- タグは **`#f7f7f7` + `8px` radius**
- モノクローム基調。色味は `#d9e7f1` のインフォパネルのみ
- weight は 400 基本、最大 500

### Don't（禁止）

- font-family で和文フォントを欧文より前に置かない
- bold（700）を使わない
- CTA に彩度の高い色を使わない — グレー CTA が基本
- line-height を 1.5 以上にしない（1.15 がエディトリアル感の源泉）
- pill（radius 9999px）を使わない。8px が上限
- box-shadow を多用しない
- palt を外さない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル |
| Tablet | ≤ 1023px | タブレット |
| Desktop | > 1024px | デスクトップ |

### タッチターゲット

- CTA: 高さ 42px 以上
- タグ: 高さ 36px 以上

### ダークモード

- 該当なし

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Black: #000000
Gray CTA: #777777
Light Gray: #f7f7f7
Info Blue: #d9e7f1
Separator: #d9d9d9
White: #ffffff

Font: Inter, "Noto Sans JP", sans-serif
font-feature-settings: "palt"

Body: 16px / line-height 1.15 / weight 400 / letter-spacing 0.05em
H2 (en): 28px / line-height 1.3 / weight 500
Tag/CTA: 14px / line-height 1.2-1.5 / weight 400
Caption: 12px / line-height 1.0-1.5

Border Radius: 4px（header）/ 8px（CTA・タグ）
Shadow: 基本 none
```

### プロンプト例

```
LUMINE のデザインに従って、店舗一覧ページを作成してください。
- フォント: Inter, "Noto Sans JP", sans-serif / font-feature-settings: "palt"
- 英字見出し: 28px / weight 500 / line-height 1.3 / letter-spacing 0.05em
- 本文: 16px / weight 400 / line-height 1.15 / letter-spacing 0.05em / color #000
- CTA: 背景 #777777 / 白文字 / radius 8px / 14px
- タグ: 背景 #f7f7f7 / 黒文字 / radius 8px / 14px
- フッター: 背景 #000 / 文字 #fff
- bold は使わない（最大 weight 500）
- box-shadow は基本 none
```
