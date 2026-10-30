# DESIGN.md — SEGA

> SEGA Corporation（https://www.sega.co.jp/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。ニュース・コーポレート情報を中心とした企業サイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: クリーンで信頼感のあるコーポレートサイト。ニュース配信とIR情報が中心。SEGA ブルーを軸とした強い色彩アイデンティティ
- **密度**: ゆったりとした余白。本文 line-height: 2.0 で可読性重視
- **キーワード**: コーポレート、クリーン、ブルーアイデンティティ、ニュースメディア、信頼
- **特徴**: 複数のブルーシェードを使い分け、用途ごとに明確な色の役割を持たせている。欧文ディスプレイに Oswald、和文に Noto Sans JP という二軸フォント構成

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **SEGA Blue** (`#1627cc`): メインブランドカラー。フッター背景、ナビセクション見出しに使用。深い青
- **SEGA Bright Blue** (`#0086ff`): ヘッダーロゴテキスト、EN ボタン背景、リンク CTA
- **SEGA Sky Blue** (`#019fff`): 「お知らせ一覧へ」CTA 背景、セクション見出し色、サブアクセント

### Secondary（カテゴリ・バッジ）

- **Category Blue** (`#49acde`): 「製品・サービス」カテゴリバッジ背景
- **Corporate Blue** (`#4a68de`): 「企業」カテゴリバッジ背景
- **Link Blue** (`#397ee5`): ニュースリンクテキスト

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Nav** (`#595757`): ナビゲーションテキスト
- **Text Date** (`#adadad`): 日付テキスト
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f9f8f4`): セクション背景（暖色系オフホワイト）
- **Surface Button** (`#eeeeee`): ページトップボタン背景
- **Search Border** (`#0060ff`): 検索入力ボーダー

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts）

### 3.2 欧文フォント

- **ディスプレイ**: Oswald（Google Fonts、見出し・ナビゲーション用）
- **サンセリフ**: sans-serif（フォールバック）

### 3.3 font-family 指定

```css
/* 本文（和文） */
font-family: "Noto Sans JP", sans-serif;

/* 欧文ディスプレイ（見出し・ナビ） */
font-family: "Oswald", sans-serif;
```

**フォールバックの考え方**:
- 和文は Noto Sans JP 単独指定。Google Fonts で Web フォントとして読み込み
- 欧文ディスプレイは Oswald。NEWS セクション見出しやコーポレートロゴテキストに使用
- Oswald は 700（Bold）のみ使用

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title (h3) | Noto Sans JP | 30px | 700 | — | normal | セクション見出し、色 #019fff |
| Page Title (h2) | Noto Sans JP | 26px | 700 | — | normal | ページタイトル、白文字 |
| Body (p) | Noto Sans JP | 14px | 400 | 28px (x2.0) | normal | 本文テキスト、色 #333333 |
| EN Display | Oswald | — | 700 | — | normal | NEWS 等の英語セクション見出し |
| Date | Noto Sans JP | 13px | 400 | — | normal | 日付テキスト、色 #adadad |
| Footer | Noto Sans JP | 12px | 400 | 21.6px (x1.8) | normal | フッター、白文字 on #1627cc |
| Category Badge | Noto Sans JP | 12px | 700 | — | normal | カテゴリバッジ、白文字 |
| EN Button | Noto Sans JP | 14px | — | — | normal | EN ボタン |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (p): `28px` (14px x **2.0**) — 非常にゆったりした行間
- フッター: `21.6px` (12px x **1.8**)
- 見出し: ブラウザデフォルト

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal`（letter-spacing の明示的な指定なし）

**ガイドライン**:
- 本文の line-height: 2.0 はニュース記事の可読性を重視した設定
- letter-spacing はサイト全体で normal。字詰めは行わない

### 3.6 禁則処理・改行ルール

```css
/* 標準的な設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で palt / kern は適用されていない */
font-feature-settings: normal;
```

- palt: 未使用。本文・見出し共に normal
- kern: 未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**EN Button**
- Background: `#0086ff`
- Text: `#ffffff`
- Padding: 5px 8px
- Border Radius: 5px
- Font Size: 14px

**CTA Link（お知らせ一覧へ）**
- Background: `#019fff`
- Text: `#ffffff`
- Border Radius: 5px
- Font Size: 14px

### Inputs

**Search Input（検索）**
- Background: `#ffffff`
- Border: 4px solid `#0060ff`
- Border Radius: 40px（ピル型）
- Padding: 10px 20px
- Font Size: 14px

### Cards

- Background: `#ffffff`
- Border: なし（リストベースのニュースレイアウト）
- 区切り: ボーダーラインで分離

### Category Badge

- Background: カテゴリ別（`#49acde` 製品・サービス / `#4a68de` 企業）
- Text: `#ffffff`
- Font Size: 12px
- Font Weight: 700
- Border Radius: 5px
- Padding: 3.5px 5px

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 960px（推定）
- Padding (horizontal): 20px

### Grid

- Columns: 1（ニュース一覧は単一カラム）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（基本がフラットデザイン） |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | カードホバー時 |
| 2 | `0 4px 8px rgba(0,0,0,0.12)` | ドロップダウンメニュー |

- サイト全体がフラットデザイン寄り。シャドウの使用は控えめ
- フッターは `#1627cc` のベタ塗りで奥行きを表現

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文ディスプレイ（NEWS、SEGA CORPORATION 等）には Oswald 700 を使う
- 和文テキストは全て Noto Sans JP で統一する
- ブルーの使い分けを守る: ディープブルー `#1627cc` はフッター/背景面、ブライトブルー `#0086ff` は CTA、スカイブルー `#019fff` はセクション見出し
- カテゴリバッジは背景色で種類を区別し、文字は白 700
- 検索入力はピル型（40px radius）で太いブルーボーダー（4px solid `#0060ff`）
- 本文は 14px / line-height: 2.0 のゆったりした行間を維持する
- テキスト色は `#333333`。純粋な `#000000` は使わない

### Don't（禁止）

- Oswald を和文テキストに使わない（欧文ディスプレイ専用）
- 複数のブルーを混同しない（各ブルーには明確な役割がある）
- 検索入力のボーダーを 1px に薄くしない（4px の太さがデザインの特徴）
- カテゴリバッジの角丸を丸くしすぎない（5px であって pill ではない）
- `#333333` 以外の色を本文テキストに使わない
- フッター背景に `#0086ff` 等の明るいブルーを使わない（`#1627cc` の深いブルーを使う）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 14px を維持、見出しはデスクトップの 70-80% に縮小
- ナビゲーションはハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue (Deep): #1627cc（フッター・背景面）
Brand Blue (Bright): #0086ff（CTA・ロゴ）
Brand Blue (Sky): #019fff（セクション見出し・サブ CTA）
Search Border: #0060ff
Category Blue: #49acde（製品・サービス）
Corporate Blue: #4a68de（企業）
Link Blue: #397ee5

Text Primary: #333333
Text Nav: #595757
Text Date: #adadad
Background: #ffffff
Surface: #f9f8f4

JP Font: "Noto Sans JP", sans-serif
EN Display Font: "Oswald", sans-serif

Body Size: 14px / line-height: 2.0 / letter-spacing: normal
Section Title: 30px / 700 / color: #019fff
Category Badge: 12px / 700 / white on colored bg / radius: 5px
Search Input: radius: 40px / border: 4px solid #0060ff
palt: なし
```

### プロンプト例

```
SEGA コーポレートサイトのデザインに従って、ニュース一覧ページを作成してください。
- 和文フォント: "Noto Sans JP", sans-serif
- 欧文見出しフォント: "Oswald", sans-serif（700、NEWS 等のセクション名に使用）
- テキスト色: #333333
- セクション見出し: 30px, 700, color: #019fff
- カテゴリバッジ: 12px, 700, white, radius 5px, bg は #49acde（製品）/ #4a68de（企業）
- CTA ボタン: bg #019fff, white, radius 5px
- 検索入力: border 4px solid #0060ff, radius 40px
- フッター: bg #1627cc, 白文字, 12px
- 本文: 14px, line-height: 2.0, letter-spacing: normal
- palt / kern は使わない
```
