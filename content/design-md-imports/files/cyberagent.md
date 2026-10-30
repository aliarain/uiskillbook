# DESIGN.md — CyberAgent（サイバーエージェント）

> CyberAgent（https://www.cyberagent.co.jp/）のデザイン仕様書。
> インターネット広告・メディア・ゲーム事業を展開する総合インターネット企業。ABEMA、Cygames 等の親会社。
> 実サイトの computed style 実測（2026-05-15 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ウォームグレー `#f0f0ee` の背景**に、**ブランドグリーン `#82be28`** のアクセントを効かせた落ち着いたコーポレートデザイン。トップのフルスクリーンダークヒーロー（黒背景）から、スクロールでウォームグレーのコンテンツエリアに遷移する構成
- **密度**: 本文 16px・line-height 1.8 と日本語として標準的な余裕のある組み。セクション間は大きな余白で区切る
- **キーワード**: ウォームグレー、グリーンアクセント、ダークヒーロー、YuGothic、コーポレート
- **特徴**:
  - フォントは **YuGothic（游ゴシック）** をプライマリに、ヒラギノ角ゴ → Lucida Grande → メイリオのフォールバック。一部ナビに自社書体 **CA Sans** を使用
  - **ブランドカラーは `#82be28`（ライムグリーン）**。フィルタータブのアクティブ状態、テキストリンク、CTA ボタンのテキスト色に使用
  - **ダークグリーン `#2d8c3c`** を CTA ボタン背景（"CyberAgent Way"、"プレスリリース"）に使用
  - **ダークネイビー `#27455c`** をフッター・暗色セクション背景に使用
  - body 背景は純白ではなく **`#f0f0ee`（ウォームグレー）** で、紙のような温かみ
  - ボタンは **pill（radius 50px）** で、白背景＋グリーン文字 or グリーン背景＋白文字の2パターン
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Green** (`#82be28`): メインのブランドカラー。フィルタータブ active 背景、テキストリンク色、CTA テキスト色
- **CTA Green** (`#2d8c3c`): CTA ボタンの背景色。"CyberAgent Way"、"プレスリリース" 等のセクションリンクボタン
- **Accent Blue** (`#3860be`): フィルターアイコンの背景

### CTA / Buttons

- **Primary CTA**: 背景 `#ffffff` / 文字 `#82be28` / radius `50px` / padding 内包 / 18px
- **Secondary CTA (Dark Green)**: 背景 `#2d8c3c` / 文字 `#ffffff` / radius（pill 推定）
- **Language Toggle**: 背景 `#000000` / 文字 `#ffffff` / radius `30px`（"English" ボタン）
- **Filter Tab Active**: 背景 `#82be28` / 文字 `#82be28` / radius `50%`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 見出しテキスト、ヒーロー背景 |
| Dark Navy | `#27455c` | (39, 69, 92) | フッター・暗色セクション背景 |
| Dark Gray | `#878787` | (135, 135, 135) | ドロワーメニュー補助テキスト背景 |
| Mid Gray | `#d0d0d0` | (208, 208, 208) | ドロワーメニュー区切り背景 |
| Surface | `#f2f1f1` | (242, 241, 241) | カード面・セクション背景 |
| Background | `#f0f0ee` | (240, 240, 238) | ページ背景（**ウォームグレー**、R=G>B） |
| Surface Light | `#f4f4f4` | (244, 244, 244) | 一部セクション背景 |
| White | `#ffffff` | (255, 255, 255) | カード面・ボタン背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#dc2626`
- **Success**: `#2d8c3c`（CTA Green を流用可）
- **Warning**: `#d97706`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **YuGothic（游ゴシック）** をプライマリに使用
- **フォールバック**: `ヒラギノ角ゴ ProN W3` → `Lucida Grande` → `Hiragino Kaku Gothic ProN` → `メイリオ` → `Meiryo` → `Verdana` → `ＭＳ Ｐゴシック` → `sans-serif`
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **CA Sans**: CyberAgent 自社書体。ナビゲーションの "Menu" テキスト（27px）等に使用。font-family 先頭に指定
- 欧文本文は YuGothic の欧文グリフを使用

### 3.3 font-family 指定

```css
/* 本文・見出し */
font-family: YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, "ＭＳ Ｐゴシック", sans-serif;

/* ナビゲーション（CA Sans 優先） */
font-family: "CA Sans", YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- YuGothic を先頭に置く和文優先のスタック。macOS / Windows 両対応
- Lucida Grande がフォールバック中間に入っているのは古い macOS 対策
- CA Sans はナビ限定で、本文には使用しない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Nav Menu (EN) | CA Sans | 27px | 400 | 1.0 | normal | ハンバーガーメニューの "Menu" |
| Heading 2 | YuGothic | 18px | 700 | — | normal | セクション見出し「トピックス」 |
| Body | YuGothic | 16px | 400 | 1.8 | normal | 本文 |
| Nav Label | YuGothic | 16px | 400 | 1.6 | normal | ナビゲーションの「メニュー」 |
| CTA Text | — | 18px | — | — | normal | "ニュース一覧" 等のボタン |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（28.8px / 16px）。日本語として読みやすい広めの設定
- **見出しの行間**: — （単行見出しが中心）
- **本文の字間 (letter-spacing)**: normal（0）。字間調整なし
- **見出しの字間**: normal（0）

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

**Primary（Pill White + Green Text）**
- Background: `#ffffff`
- Text: `#82be28`
- Padding: 内包
- Border Radius: 50px
- Font Size: 18px

**Secondary（Pill Dark Green）**
- Background: `#2d8c3c`
- Text: `#ffffff`
- Border Radius: pill（推定 50px）

**Language Toggle**
- Background: `#000000`
- Text: `#ffffff`
- Border Radius: 30px

**Filter Tab**
- Active: 背景 `#82be28`
- Inactive: 背景 `#ffffff`
- Border Radius: 50%（円形）
- Font Size: 24px（数字）/ 0px（非表示テキスト）

### Cards

- Background: `#ffffff`
- Border: なし
- Shadow: なし（フラットデザイン）

### Navigation

- **ハンバーガーメニュー**: "Menu" テキスト（CA Sans / 27px）+ 「メニュー」（YuGothic / 16px）
- **ドロワー背景**: `#f0f0ee`（ページ背景と同色）
- **ドロワーディレクトリ**: カテゴリ別にグレースケール背景で階層化（`#d0d0d0` → `#878787`）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| S | 8px |
| M | 16px |
| L | 32px |
| XL | 64px |

### Container

- Max Width: フルスクリーンヒーロー（1440px+）
- Content Width: 中央寄せ（推定 1080px 程度）

### Grid

- ニュースリストは単カラム
- フルスクリーンダークヒーロー → ウォームグレーのコンテンツ → ダークネイビーのフッターという 3 層構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素（フラットデザイン） |

- CyberAgent コーポレートサイトはシャドウを使用しない。背景色の切り替えで階層を表現

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景は `#f0f0ee`（ウォームグレー）を使い、純白にしない
- アクセントカラーは `#82be28`（ライムグリーン）を一貫して使用する
- ボタンは pill 形状で統一する
- ヒーローセクションはダーク（黒背景）で大きなビジュアルを使う
- フォントは YuGothic ベースで、ナビのみ CA Sans を使う

### Don't（禁止）

- ページ背景を純白 `#ffffff` にしない。ZOZO と異なり CyberAgent はウォームグレー基調
- グリーン以外のアクセントカラーを増やさない
- ナビ以外に CA Sans を使わない。本文は YuGothic 統一
- 角丸のないスクエアボタンを使わない（pill が基本）
- body の line-height を 1.5 以下にしない（1.8 が基準）

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

- モバイルでは本文 14–16px を維持。見出しはデスクトップの 80% 程度に

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Green): #82be28
CTA Color (Dark Green): #2d8c3c
Text Color: #000000
Background: #f0f0ee
Surface: #f2f1f1
Dark Section: #27455c
Font: YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, "ＭＳ Ｐゴシック", sans-serif
Body Size: 16px
Line Height: 1.8
```

### プロンプト例

```
CyberAgentのデザインシステムに従って、ニュース一覧ページを作成してください。
- ページ背景は #f0f0ee（ウォームグレー）
- フィルタータブは pill 形状で、active は #82be28
- ボタンは白背景 + #82be28 テキスト（pill radius 50px）
- フォントは YuGothic 16px / line-height 1.8
- ヒーロー部分はダーク背景
```
