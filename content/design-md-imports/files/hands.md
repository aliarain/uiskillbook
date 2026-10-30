# DESIGN.md — Hands (hands.net)

> ハンズ（https://hands.net/、旧 東急ハンズ）のデザイン仕様書。
> 創造的な暮らしを支えるライフスタイルストア。DIY・文具・コスメ・アウトドアなど幅広い品揃え。
> 実サイトの computed style 実測（2026-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ダークグリーンのヘッダーと白背景のコントラストで「信頼と実用性」を表現。装飾を抑え、商品情報へのアクセスを最優先にした実直なリテール UI
- **密度**: 本文 12px という小さめのベースサイズで高密度な情報表示。line-height 1.5 を全体で統一し、コンパクトだが読みにくくはならない
- **キーワード**: ダークグリーン、高密度リテール、実用的、システムフォント、フラットボタン
- **特徴**:
  - ブランドカラーは **ダークグリーン `#004022`〜`#006b30`**。ヘッダー・ナビ・CTA すべてグリーン系で統一
  - Web フォントを使わず、**ヒラギノ角ゴ ProN + 游ゴシック** のシステムフォントスタックで運用。ローカル環境でもそのまま再現できる
  - ボタンは **角張ったフラットデザイン**（radius 0〜4px）。ピル型は使わない
  - CTA の多くは **白背景 + グリーン文字** のアウトラインスタイル。グリーン背景のソリッドボタンはヘッダー・検索に限定
  - タグ・バッジ類に **オレンジ `#c84d06`** や **ピンク `#d2234e`** のアクセントを使い、商品の状態（新着・キャンペーン等）を色で分類
  - CSS Custom Properties は使わない伝統的な CSS 設計
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — Green Scale

| Token | hex | 役割 |
|-------|-----|------|
| Green Dark | `#004022` | ヘッダー背景、ナビボタン背景、検索ボタン背景 |
| Green Primary | `#006b30` | メインブランドカラー。本文リンク、CTA 文字色、カートアイコン |
| Green Bright | `#007236` | 一部リンクのバリエーション（やや明るい緑） |
| Green Light | `#51c05c` | 明るいグリーンアクセント |
| Green Pale | `#d9f1dd` | 優先リンクバーの背景（非常に薄い緑） |

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#000000` | セクション見出し（h2） |
| Text Primary | `#333333` | 本文テキスト、フッター見出し |
| Text Secondary | `#4d4d4d` | 記事タイトル、日付 |
| Text Muted | `#707070` | 控えめな補助テキスト |
| Border / Divider | `#e0e0e0` | 区切り線、フィーチャーページ背景 |
| Surface | `#f5f5f5` | セクション背景（薄いグレー） |
| White | `#ffffff` | ページ背景、CTA 背景 |

### Accent

| Token | hex | 役割 |
|-------|-----|------|
| Orange Tag | `#c84d06` | タグ・カテゴリラベル |
| Pink Campaign | `#d2234e` | キャンペーンバッジ・セール表示 |

### Semantic（推奨値）

実サイトにはエラー／成功色は明示的に表面化していない。リテール EC 向けに推奨する補完値:

- **Danger**: `#cc0000`（赤。在庫切れ・エラー）
- **Success**: `#006b30`（ブランドグリーンを流用）
- **Warning**: `#c84d06`（オレンジタグ色を流用）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ ProN**（macOS / iOS）を最優先。次いで **游ゴシック Medium**（Windows / macOS）
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- 注意: 「ProN」であって「Pro」ではない。JIS X 0213:2004 字形を使用

### 3.2 欧文フォント

- 専用の欧文フォントは持たない
- ヒラギノ角ゴ ProN / 游ゴシックに含まれる欧文グリフをそのまま使用
- Helvetica Neue / Arial 等の欧文書体は font-family に含まれない

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: "Hiragino Kaku Gothic ProN", "游ゴシック Medium",
  "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ ProN（macOS）を最優先
- 游ゴシックは Medium ウェイトを明示指定してから通常名を置く（Windows での細字化対策）
- 欧文専用書体は挟まない。和文フォントの欧文グリフで統一
- 最後に `sans-serif` で generic family

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／特集ページ、2026-06 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Section H2 | 22px | 700 | 33px (x1.5) | normal | `#000000` | セクション見出し |
| Footer H2 | 16px | 700 | 24px (x1.5) | normal | `#333333` | フッター見出し |
| Nav Link | 16px | 700 | 24px (x1.5) | normal | `#ffffff` | グローバルナビ（白文字 on 緑背景） |
| Article Title | 16px | 700 | 24px (x1.5) | normal | `#4d4d4d` | 記事・商品タイトル |
| Body Link | 16px | 400 | 24px (x1.5) | normal | `#006b30` | 本文リンク（緑） |
| Button | 16px | 700 | — | normal | `#ffffff` | 検索ボタン等 |
| Tag (span) | 14px | 700 | 21px (x1.5) | normal | `#ffffff` | ヘッダー内スパン |
| Tag (orange) | 14px | 400 | 14px (x1.0) | normal | `#c84d06` | オレンジタグ |
| Body | 12px | 400 | 18px (x1.5) | normal | `#333333` | 本文テキスト |
| Date | 12px | 400 | 18px (x1.5) | normal | `#4d4d4d` | 日付・補助情報 |
| Campaign Tag | 12px | 400 | 12px (x1.0) | normal | `#d2234e` | キャンペーンバッジ |
| Small H2 | 12px | 700 | 18px (x1.5) | normal | `#333333` | 小見出し |
| Header Link | 12px | 400 | 28px (x2.33) | normal | `#ffffff` | ヘッダー上部リンク |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (12px)**: `1.5`（18px / 12px）
- **見出し (22px)**: `1.5`（33px / 22px）
- **ナビ・タイトル (16px)**: `1.5`（24px / 16px）
- **タグ (14px)**: `1.0`（14px / 14px）-- 一行高さ
- **ヘッダー上部 (12px)**: `2.33`（28px / 12px）-- タッチターゲット確保

**字間 (letter-spacing)** -- 実測:
- **全要素**: `normal`（0）。明示的な letter-spacing の指定なし

**ガイドライン**:
- line-height は一貫して **1.5** で統一されている（タグ除く）
- letter-spacing の調整は行わない方針。字詰めは和文フォントのメトリクスに委ねる
- 12px の小さい本文でも line-height 1.5 で最低限の可読性を確保

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名やカテゴリ名は折り返し発生を前提とした横幅設計
- 長い URL やプロモコードは `overflow-wrap: break-word` で折り返す

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` の明示的な有効化はなし
- システムフォントの既定メトリクスに任せ、字間調整を行わない方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（グリーンソリッド）** -- ヘッダーナビ・検索ボタン
- Background: `#004022`
- Text: `#ffffff`
- Padding: `8px 16px`
- Border Radius: `0px`（角張ったフラット）
- Font: 16px, weight 700
- Border: none

**Secondary CTA（白アウトライン + グリーン文字）** -- "投稿をすべて見る"・"イチ押し商品一覧へ"
- Background: `#ffffff`
- Text: `#006b30`
- Border: `1px solid #e0e0e0`
- Padding: `8px 16px`
- Border Radius: `2px`
- Font: 14px, weight 400

**Tertiary（白 + ダークテキスト）** -- "一覧を見る"
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #e0e0e0`
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: 14px, weight 400

**Tab Button** -- カテゴリ切替タブ
- Background: `transparent`
- Text: `#4d4d4d`
- Border: `1px solid #e0e0e0`
- Padding: `6px 12px`
- Border Radius: `2px`
- Font: 12px, weight 400

**Category Link（特集ページ）**
- Background: `#ffffff`
- Text: `#006600`
- Border: none
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: 14px, weight 400

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e0e0e0`
- Border (focus): `1px solid #006b30`（推奨: ブランドグリーン）
- Border Radius: `0px`（ヘッダー検索は角型）
- Padding: `8px 12px`
- Font: 12px, weight 400
- Height: `36px`

### Cards

- Background: `#ffffff`
- Border: `1px solid #e0e0e0`
- Border Radius: `0px`（角型）または `4px`（わずかな丸み）
- Padding: `16px`
- Shadow: なし（フラットデザイン）

### Header

- Background: `#004022`（ダークグリーン、不透明）
- Position: fixed / sticky
- Height: 約 90px（上部リンクバー + メインナビの2段構成）
- 上部リンクバー: `#d9f1dd`（薄緑）背景に 12px テキスト

### Footer

- Background: `#004022`（ヘッダーと同じダークグリーン）
- Text: `#ffffff`
- h2: 16px / 700 / `#333333`（白背景セクション内）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | テキストとアイコンの間 |
| S | 8px | タグ内の余白、リスト項目の間 |
| M | 16px | カード内余白、段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 32px | セクション間の区切り |
| XXL | 48px | ヒーローやメインビジュアル周り |

### Container

- Max Width: `1040px` 程度（実測: 中央寄せコンテンツ領域）
- Padding (horizontal): mobile `12px` / desktop `16〜24px`

### Grid

- 商品一覧: 4〜5 カラム（デスクトップ）、2 カラム（モバイル）
- 特集・記事: 3 カラム（デスクトップ）
- Gutter: `16px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 1px 4px rgba(0, 0, 0, 0.08)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼすべて `box-shadow: none` のフラットデザイン
- 階層感は **背景色の切り替え**（`#ffffff` → `#f5f5f5` → `#e0e0e0`）と **ボーダー**（`1px solid #e0e0e0`）で表現
- ヘッダーは `#004022` のソリッドカラーで区切り、影は使わない

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **ヒラギノ角ゴ ProN を最優先**、フォールバックは 游ゴシック Medium → Yu Gothic → sans-serif
- 本文の line-height は **1.5** を全体で統一する
- ブランドカラーのグリーンは **`#004022`（暗）と `#006b30`（中）の2段階**で使い分ける。ヘッダー・ナビには暗め、リンク・CTA テキストには中間を使う
- ボタンは **角張ったフラットスタイル**（radius 0〜4px）で統一する
- テキストリンクは **`#006b30`（グリーン）** にする
- タグ・バッジは **オレンジ `#c84d06`**（定常カテゴリ）と **ピンク `#d2234e`**（キャンペーン）を目的で使い分ける
- 情報密度は高めに。本文 12px で多くの情報を一覧表示する

### Don't（禁止）

- 主要 CTA に **ピル型（radius 9999px）を使わない** -- ハンズのボタンは角張ったフラット
- リンクに **青 `#0000ff`** や **Tailwind のブルー系** を使わない。リンク色は `#006b30`（グリーン）
- **Web フォント（Noto Sans JP 等）を読み込まない** -- システムフォントだけで動くのがハンズの方針
- ヘッダー・フッターに **白背景や薄いグレーを使わない** -- `#004022` のダークグリーンが必須
- 本文に **line-height 1.2 以下** を使わない（12px の小さいテキストでは特に可読性が低下する）
- **letter-spacing を明示指定しない** -- ハンズの CSS は字間を一切触らない方針
- `font-family` に **ヒラギノ角ゴ Pro（ProN なし）** を使わない -- ProN（JIS2004 字形）が正しい

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト。ハンバーガーメニュー |
| Tablet | <= 1023px | タブレット。2〜3 カラムグリッド |
| Desktop | >= 1024px | デスクトップ。4〜5 カラムグリッド |

### モバイル時の調整

- セクション H2: 22px → 18px
- 本文サイズ: 12px を維持（モバイルでも高密度方針）
- 商品グリッド: 4〜5列 → 2列
- ヘッダー: 2段構成 → 1段 + ハンバーガー
- 上部リンクバー（`#d9f1dd`）: 非表示

### タッチターゲット

- ヘッダーリンク: line-height 28px で最低限のタップ領域を確保
- 主要ボタン: 高さ 36px 以上（padding `8px 16px` + 16px font）
- 商品カード: カード全体がタップ領域

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Green Dark (Header/Nav): #004022
Green Primary (Links/CTA text): #006b30
Green Bright: #007236
Green Pale (Link Bar BG): #d9f1dd
Orange Tag: #c84d06
Pink Campaign: #d2234e
Text Primary: #333333
Text Secondary: #4d4d4d
Black (Headings): #000000
Border: #e0e0e0
Surface: #f5f5f5
White: #ffffff

Font: "Hiragino Kaku Gothic ProN", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif

Body Size: 12px / line-height 1.5 / weight 400 / letter-spacing normal
Heading H2: 22px / line-height 1.5 / weight 700
Nav / Title: 16px / line-height 1.5 / weight 700
Tag: 14px / weight 400-700

Border Radius: 0px（ヘッダー）/ 2px（アウトライン CTA）/ 4px（カテゴリリンク）
Shadow: 基本 none。階層はボーダーと背景色で表現
```

### プロンプト例

```
ハンズのデザインに従って、商品一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic ProN", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif
- ヘッダー: 背景 #004022（ダークグリーン）/ 白文字
- セクション見出し: 22px / weight 700 / color #000000
- 商品タイトル: 16px / weight 700 / color #4d4d4d
- 本文: 12px / weight 400 / line-height 1.5 / color #333333
- テキストリンク: color #006b30
- 主要 CTA（ソリッド）: 背景 #004022 / 白文字 / border-radius 0px / padding 8px 16px
- セカンダリ CTA: 背景 白 / 文字 #006b30 / border 1px solid #e0e0e0 / radius 2px
- タグ: 14px / color #c84d06（オレンジ）
- キャンペーンバッジ: 12px / color #d2234e（ピンク）
- カード: 白背景 / border 1px solid #e0e0e0 / radius 0-4px / shadow none
- 商品グリッド: デスクトップ 4-5列、モバイル 2列
- letter-spacing は指定しない（normal）
- ピル型ボタンは使わない。角張ったフラットデザイン
```
