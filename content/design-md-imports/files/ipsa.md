# DESIGN.md — IPSA（イプサ）

> IPSA（https://www.ipsa.co.jp/）のデザイン仕様書。
> 資生堂グループのパーソナライズドスキンケアブランド。肌診断に基づく "ME" ローションのカスタマイズシステムで知られる。
> ブランド哲学: 「人の美しさは、生命力がつくりだすもの」。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウォームミニマル。**クリーム `#fffef8`** と **ウォームイエロー `#fffae7`** のサーフェスで暖色系の上品さを表現し、ニア・ブラック `#181818` の抑えた文字色で静謐さを保つ。科学的アプローチを訴求しつつも温かみのあるビューティーブランド
- **密度**: ゆったり。ヒーロー画像を大きく使い、テキストは控えめなサイズで余白を活かす構成
- **キーワード**: ウォームミニマル、パーソナライズ、科学的ビューティー、静謐、クリーム色調
- **特徴**:
  - 和文フォントに **MFW-HiraKakuProN（ヒラギノ角ゴ ProN の Web Font 版）** を使用。W3 / W4 / W5 / W6 の4ウェイトを使い分ける
  - `font-feature-settings: "kern"` を採用。ビューティーブランドとしては珍しく **palt ではなく kern** を使う
  - テキスト色は `#181818`（ニア・ブラック）。純黒 `#000` を避け、やわらかさを出している
  - **レター・スペーシングはほぼ全要素 normal**。字間調整をしない潔いタイポグラフィ
  - フッターは `#323232` ダークグレーに `#fffcf4` ウォームオフホワイト。黒ではなくグレーを使い、温度感を保つ
  - UIフレームワークに **Chakra UI** を使用（`chakra-heading`, `chakra-button` 等のクラス名）
  - タグ・バッジは `2px` radius のほぼ矩形。ピル型ではない

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — Warm Palette

- **Cream** (`#fffef8`): ウォームホワイトのサーフェス。ページ全体のベーストーンを暖色に傾ける
- **Warm Yellow** (`#fffae7`): 検索ハイライト・プロモーション面。クリームよりやや黄味が強い
- **Warm Off-White** (`#fffcf4`): フッターテキスト色。ダーク面上のテキストに温かみを持たせる

### Text

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#181818` | (24, 24, 24) | 本文テキスト。ニア・ブラック |
| Text Secondary | `#323232` | (50, 50, 50) | 補助テキスト、ヒーロー、キャプション |
| Text Muted | `#969696` | (150, 150, 150) | フッターサブメニュー、非活性ラベル |

### Surface

| Token | hex | 役割 |
|-------|-----|------|
| Background | `#ffffff` | メインページ背景 |
| Cream Surface | `#fffef8` | ウォームサーフェス |
| Warm Yellow Surface | `#fffae7` | ハイライト面 |
| Light Gray Surface | `#f9f9f9` | タブ非活性状態 |
| Footer Dark | `#323232` | フッター背景 |
| Dark Hero | `#090f27` | アバウトセクション背景（ネイビー） |
| Search Overlay | `rgba(239,237,234,0.5)` | 検索時の半透明オーバーレイ |
| Dark Overlay | `rgba(50,50,50,0.5)` | メニューオーバーレイ |

### Border

- **Border Primary** (`#c9c9c9`): フォーム入力欄の枠線
- **Border Secondary** (`#d6d6d6`): セレクトボックスの枠線
- **Separator** (`#dcdcdc`): セクション区切り線

### CTA / Tags

- **Tag Dark** (`#323232`): タグピルの背景
- **Tag Text** (`#fffcf4`): タグピルのテキスト

---

## 3. Typography Rules

### 3.1 和文フォント

- **MFW-HiraKakuProN**: ヒラギノ角ゴ ProN の Web Font 版。IPSA 独自の配信。4ウェイトを使い分ける:
  - **W3** (400): 本文、サブメニュー
  - **W4** (400): ヒーローテキスト（W3 よりやや太い印象）
  - **W5** (500-700): ナビリンク、セクションタイトル、キャプション
  - **W6** (700): 見出し、フッタータイトル

### 3.2 欧文フォント

- **システムフォントスタック**: 一部の要素で `-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif` を使用（h1 等）
- 基本的に MFW-HiraKakuProN の内蔵欧文グリフに依存

### 3.3 font-family 指定

```css
/* 本文（W3） */
font-family: "MFW-HiraKakuProN-W3", sans-serif;

/* ナビ・セクションタイトル（W5） */
font-family: "MFW-HiraKakuProN-W5", sans-serif;

/* 見出し（W6） */
font-family: "MFW-HiraKakuProN-W6", sans-serif;

/* ヒーロー（W4） */
font-family: "MFW-HiraKakuProN-W4", sans-serif;

/* h1 等（システムフォントスタック） */
font-family: -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- ウェイト別に異なるフォントファミリー名を使用するのが IPSA の特徴
- W3〜W6 を `font-weight` ではなく**フォントファミリー名で切り替える**設計
- システムフォントスタックは h1 等の限定的な場所でのみ使用

> **preview.html での代替**: MFW-HiraKakuProN はドメインライセンスの Web Font のため、プレビューでは **Noto Sans JP**（Google Fonts）で代替。ウェイト 300 / 400 / 500 / 700 でヒラギノの W3 / W4 / W5 / W6 に対応させている

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Display | W4 | 49px | 400 | 73px (×1.5) | normal | トップヒーロー |
| H1 | system-ui | 28px | 700 | 33.6px (×1.2) | normal | ページタイトル |
| Section Title | W5 | 20px | 400 | 30px (×1.5) | normal | セクション見出し |
| Body | W3 | 16px | 400 | 24px (×1.5) | normal | 本文 |
| News Body | W3 | 15px | 400 | 28px (×1.87) | normal | ニュース記事本文 |
| H2 Footer | W6 | 14px | 700 | 21px (×1.5) | 0.5px (0.036em) | フッタータイトル |
| Nav Link | W5 | 12px | 700 | 18px (×1.5) | normal | グローバルナビ |
| H2 Search | W6 | 12px | 700 | 20px (×1.67) | normal | 検索セクション |
| News Topic | W5 | 11px | 400 | 17px (×1.55) | normal | トピックラベル |
| Caption | W5 | 10px | 700 | 15px (×1.5) | normal | 小見出し |
| Small Link | W5 | 10px | 700 | 12px (×1.2) | -0.5px (-0.05em) | 小テキストリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文: `24px` (16px × 1.5) — 標準的な日本語行間
- ニュース本文: `28px` (15px × 1.87) — 読みやすさ重視のゆったり行間
- ヒーロー: `73px` (49px × 1.5)
- 見出し h1: `33.6px` (28px × 1.2) — タイトな見出し行間
- ナビ / キャプション: `×1.5`

**字間 (letter-spacing)** — 実測値:
- **ほぼ全要素が `normal`**。これが IPSA のタイポグラフィの大きな特徴
- 例外1: フッタータイトル `0.5px` (0.036em) — フッターのみわずかに字間を開ける
- 例外2: 小テキストリンク `-0.5px` (-0.05em) — 10px の極小テキストのみ負の字間

**ガイドライン**:
- 日本語テキストに letter-spacing を追加しないのが IPSA のルール
- 字間調整なしでも成立するのは、ヒラギノ角ゴ ProN のメトリクスが優れているため

### 3.6 禁則処理・改行ルール

- ブラウザデフォルトの禁則処理に依存
- Chakra UI のデフォルト設定を踏襲

### 3.7 OpenType 機能

```css
font-feature-settings: "kern";
```

- **kern を使用**: 欧文のカーニングを有効化。ビューティーブランドとしては珍しい選択
- **palt は不使用**: 日本語のプロポーショナル字詰めはしない
- kern と palt の違い: kern は欧文のペアカーニング、palt は和文の字幅をプロポーショナルにする機能

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons / Tags

**Tag Pill（"化粧水"、"ギフト"、"ME" 等）**
- Background: `#323232`
- Text: `#fffcf4`
- Border Radius: 2px（ほぼ矩形）
- Padding: 5px 11px
- Font Size: 11px
- Font Weight: 600

**Search Button**
- Background: transparent → hover: `#323232`
- Text: `#323232` → hover: `#fffcf4`
- Border Radius: 0px（完全に角ばったボタン）
- Font Size: 16px

**General Button（Chakra UI デフォルト）**
- Border Radius: 4px
- Padding: Chakra 標準

**Tab（Active / Inactive）**
- Active Background: `#ffffff`
- Inactive Background: `#f9f9f9`
- Border: なし（背景色の切り替えで状態を表現）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#c9c9c9`
- Border (focus): 1px solid `#323232`
- Border Radius: 4px
- Padding: 8px 12px
- Font Size: 16px
- Font Family: MFW-HiraKakuProN-W3

### Select

- Background: `#ffffff`
- Border: 1px solid `#d6d6d6`
- Border Radius: 4px
- Padding: 8px 12px
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#dcdcdc`
- Border Radius: 4px
- Padding: 16px–24px
- Shadow: なし（フラット）

---

## 5. Layout Principles

### Spacing Scale

Chakra UI ベースのスペーシングシステム:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 16px–32px

### Grid

- 商品一覧: 2–4 カラム
- コンテンツ: 1 カラム中央寄せ

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットが基本） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・ポップオーバー |
| 2 | `0 4px 12px rgba(0,0,0,0.1)` | モーダル |
| Overlay | `rgba(50,50,50,0.5)` | メニューオーバーレイ |
| Search Overlay | `rgba(239,237,234,0.5)` | 検索オーバーレイ（ウォーム） |

- **基本方針はフラット**。影はほぼ使わない
- オーバーレイはウォームカラー `rgba(239,237,234,0.5)` を使い、冷たいグレーを避ける

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#181818` を使う（`#000` ではない）
- サーフェスに `#fffef8`（クリーム）や `#fffae7`（ウォームイエロー）を使って暖色トーンを保つ
- `font-feature-settings: "kern"` を指定する
- タグ・バッジは `2px` radius のほぼ矩形にする
- ウェイトの切り替えはフォントファミリー名（W3 / W5 / W6）で行う
- フッター背景は `#323232`、テキストは `#fffcf4` を使う
- letter-spacing は基本 `normal` のまま
- ボーダーは `#c9c9c9` / `#d6d6d6` / `#dcdcdc` のニュートラルグレーを使う

### Don't（禁止）

- `palt` を使わない。IPSA は `kern` のみ
- 純黒 `#000000` をテキスト色に使わない。`#181818` を使う
- ピル型ボタン（`border-radius: 9999px`）を使わない。IPSA はほぼ矩形〜4px radius
- 冷たいグレー（青みがかったグレー）をサーフェスに使わない。IPSA は常にウォーム系
- letter-spacing を広げない。IPSA のタイポグラフィは字間調整をしない設計
- フッターに純黒 `#000` を使わない。`#323232` を使う

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 480px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

Chakra UI の標準ブレークポイントに準拠。

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）
- タグピルは小さめ（padding 5px 11px）だが、タッチ領域は 44px を確保

### フォントサイズの調整

- モバイルでは Hero テキストを 28–32px 程度に縮小
- 本文 16px はモバイルでも維持
- ナビリンクの 12px はモバイルでハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #181818
Text Secondary: #323232
Text Muted: #969696
Background: #ffffff
Cream Surface: #fffef8
Warm Yellow: #fffae7
Footer Dark: #323232
Footer Text: #fffcf4
Border: #c9c9c9
Separator: #dcdcdc

Body Font: "MFW-HiraKakuProN-W3", sans-serif
Heading Font: "MFW-HiraKakuProN-W6", sans-serif
Nav Font: "MFW-HiraKakuProN-W5", sans-serif

Body Size: 16px
Line Height: 1.5
Letter Spacing: normal
font-feature-settings: "kern"
Tag Radius: 2px
Button Radius: 4px
```

### プロンプト例

```
IPSA のデザインシステムに従って、商品一覧ページを作成してください。
- テキスト色: #181818（ニア・ブラック）
- フォント: MFW-HiraKakuProN-W3（本文）、W5（ナビ・ラベル）、W6（見出し）
- 行間: 本文は line-height: 1.5
- 字間: letter-spacing: normal（ほぼ全要素）
- 背景: #ffffff、アクセント面は #fffef8（クリーム）
- カード: border 1px solid #dcdcdc、radius 4px、影なし
- タグ: bg #323232、text #fffcf4、radius 2px
- font-feature-settings: "kern"（palt ではない）
```
