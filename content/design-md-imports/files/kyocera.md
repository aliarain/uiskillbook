# DESIGN.md — Kyocera (京セラ)

> 京セラ株式会社（https://www.kyocera.co.jp/）のデザイン仕様書。
> 実サイトのCSS computed style に基づく。CSS Custom Properties は使用されていない。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 堅実で信頼感のあるコーポレートサイト。装飾を抑え、情報整理と可読性を重視した控えめなデザイン
- **密度**: 標準的な情報密度。セクションごとに適度な余白をとり、製品情報と企業情報を体系的に配置
- **キーワード**: 堅実、信頼、ニュートラル、コーポレート、控えめ
- **特徴**: ブランドカラーを前面に出さず、グレースケールを基調にした無彩色デザイン。CTA にも強い色を使わず、タグボタンは `#f9f9f9` 背景 + `#dddddd` ボーダーの控えめなスタイル。ナビゲーションはダークグレー（`#4f4f4f` / `#616161`）で統一

---

## 2. Color Palette & Roles

### Neutral（ニュートラル — サイト全体の基調）

京セラのサイトはブランドカラーを前面に出さず、グレースケールで構成されている。

- **Text Primary** (`#333333`): 本文テキスト（body）
- **Text Heading** (`#000000`): 見出しテキスト（h2, h3, p 内見出し）
- **Text Secondary** (`#666666`): 補足テキスト、バナー説明文
- **Text Light** (`#999999`): ページネーション等の薄いテキスト
- **Border** (`#dddddd`): 入力欄・タグ・カードの枠線
- **Background** (`#ffffff`): ページ背景
- **Surface Light** (`#f7f7f7`): ナビゲーション背景、セクション背景（最多使用）
- **Surface Tag** (`#f9f9f9`): タグボタン背景
- **Surface Divider** (`#ededed`): ナビゲーション項目背景
- **Surface Footer** (`#f0f0f0`): フッター背景

### Navigation（ナビゲーションのダークグレー系）

- **Nav Primary** (`#4f4f4f`): メインナビゲーション背景
- **Nav Secondary** (`#616161`): サブナビゲーション背景
- **Nav Highlight** (`#747474`): ナビゲーションTOP項目背景
- **Nav Header** (`#313131`): ナビゲーションヘッダー背景
- **Nav Text** (`#ffffff`): ナビゲーションテキスト（白）

### Search Button

- **Search Button BG** (`#666666`): 検索ボタン背景
- **Search Button Border** (`#666666`): 検索ボタンボーダー

### Pagination

- **Pagination Active** (`#999999`): 現在ページのボタン背景
- **Pagination Text** (`#ffffff`): 現在ページのテキスト

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- 游ゴシック体 / YuGothic（macOS）
- 游ゴシック Medium / Yu Gothic Medium（Windows）
- 游ゴシック / Yu Gothic（Windows フォールバック）
- ヒラギノ角ゴ Pro（macOS フォールバック）
- メイリオ（Windows 追加フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans（欧文専用の一部要素で使用）
- **generic**: sans-serif

### 3.3 font-family 指定

```css
/* メインスタック（body, 見出し, 本文すべて共通） */
font-family: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
  "Noto Sans", メイリオ, meiryo, sans-serif;

/* 欧文専用（Global Site リンク等、一部要素のみ） */
font-family: "Noto Sans";
```

**フォールバックの考え方**:
- 和文フォント（游ゴシック体）を先頭に配置し、日本語表示を最優先
- macOS 向けの YuGothic → Windows 向けの Yu Gothic Medium → Yu Gothic の順
- ヒラギノ角ゴ Pro（ProN ではなく Pro を使用）を macOS フォールバックに配置
- Noto Sans を和欧混植のフォールバックに配置
- 最後にメイリオと generic sans-serif

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

**トップページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Title (h2) | 22.5px | 700 | 22.5px (x1.0) | normal | セクション見出し「Pick up」等 |
| Sub Title (h3) | 24px | 700 | 33px (x1.375) | normal | サブ見出し「最新ニュース」等 |
| Banner Title (h3) | 18px | 700 | 25px (x1.389) | normal | バナー見出し |
| Card Title (p) | 16px | 700 | 26px (x1.625) | normal | ピックアップカードテキスト |
| Feature Title (p) | 20px | 700 | 28px (x1.4) | normal | 特集記事見出し |
| Article Title (p) | 18px | 700 | 26px (x1.444) | normal | 記事見出し |
| Body (p) | 16px | 400 | 26px (x1.625) | normal | ニュース本文 |
| Banner Text (p) | 14px | 400 | 22px (x1.571) | normal | バナー説明文 |
| Caption (p) | 12px | 400 | 17px (x1.417) | normal | カテゴリラベル等 |

**企業情報ページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Title (h2) | 19px | 500 | 30.4px (x1.6) | normal | 「ご挨拶」等。border-bottom つき |
| Body (p) | 16px | 400 | 32px (x2.0) | normal | 企業紹介本文。line-height が高い |

**共通**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Body (body) | 16px | 400 | 25.6px (x1.6) | normal | グローバルベース |
| Nav Link | 13px | 500 | 24px (x1.846) | normal | ヘッダーナビゲーション |
| Nav Sub Link | 15px | 500 | 22.5px (x1.5) | normal | サブナビゲーション |
| Nav Mega Link | 15px | 500 | 20px (x1.333) | normal | メガメニュー製品リスト |
| Nav Section (a) | 18px | 700 | 27px (x1.5) | normal | メガメニュー大カテゴリ |
| Tag Button | 13px | 500 | 13px (x1.0) | normal | 製品タグ |
| Label | 14px | 500 | 22.4px (x1.6) | normal | 検索ラベル |
| Input | 18px | 400 | — | normal | 検索入力欄 |
| Small (span) | 12px | 500 | 18px (x1.5) | normal | グループ会社名等 |
| XSmall (span) | 11px | 500 | 18px (x1.636) | normal | 長い会社名 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `25.6px` (16px x 1.6)
- トップページ本文: `26px` (16px x 1.625)
- 企業情報本文: `32px` (16px x **2.0**) — 読み物コンテンツのため広い行間
- セクション見出し (h2): `22.5px` (22.5px x 1.0) — 見出しは行間を詰めている
- サブ見出し (h3): `33px` (24px x 1.375)

**字間 (letter-spacing)** — 実測値:
- すべての要素で `normal` — letter-spacing は一切指定されていない

**ガイドライン**:
- `letter-spacing` はサイト全体で `normal`。意図的に字間を空ける設計ではない
- 企業情報の本文は `line-height: 2.0` と広く、読みやすさを確保している
- トップページの本文は `line-height: 1.625` で標準的

### 3.6 禁則処理・改行ルール

```css
/* 明示的な禁則設定は確認されなかった */
/* ブラウザデフォルトの禁則処理に依存 */
```

### 3.7 OpenType 機能

```css
/* すべての要素で font-feature-settings: normal */
/* palt, kern いずれも適用されていない */
font-feature-settings: normal;
```

- **palt**: 未使用。和文のプロポーショナル字詰めは行われていない
- **kern**: 未使用
- コーポレートサイトとして、標準的な字詰めで安定した表示を優先している

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Tag Button（製品タグ — 最も多用されるインタラクティブ要素）**
- Background: `#f9f9f9`
- Text: `#000000`
- Border: 1px solid `#dddddd`
- Padding: 9px 10px
- Border Radius: 6px
- Font Size: 13px
- Font Weight: 500

**Navigation Link Button（ナビゲーション内リンク）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#dddddd`
- Padding: 16px
- Border Radius: 0px
- Font Size: 13px
- Font Weight: 700

**Search Button（検索ボタン）**
- Background: `#666666`
- Text: `#333333`
- Border: 1px solid `#666666`
- Padding: 1px 6px
- Border Radius: 0px
- Font Size: 16px
- Font Weight: 400

**Mega Menu Item（メガメニュー項目）**
- Background: `#f7f7f7`
- Text: `#000000`
- Border: none
- Padding: 10px 34px 10px 50px
- Border Radius: 0px
- Font Size: 15px
- Font Weight: 500

**Navigation CTA（企業情報ナビ）**
- Background: `#4f4f4f`
- Text: `#ffffff`
- Border: none
- Padding: 18px 16px
- Border Radius: 0px
- Font Size: 16px
- Font Weight: 500

**Pagination Button（ページネーション — アクティブ）**
- Background: `#999999`
- Text: `#ffffff`
- Border: 1px solid `#999999`
- Padding: 1px 6px
- Border Radius: 100%
- Font Size: 15px

### Inputs

- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Border Radius: 0px
- Padding: 12px 14px（ヘッダー検索）/ 14px（サイト内検索）
- Font Size: 18px
- Font Weight: 400

### Cards

- Background: `#ffffff`
- Border: none（画像ベースのカード）
- Border Radius: 0px
- Shadow: none（フラットデザイン）

---

## 5. Layout Principles

### Container

- Max Width: 1440px（推定。ヒーロー画像領域）
- Content Width: 標準的なコーポレートサイト幅

### Spacing

- 基本的に px ベースの固定値スペーシング
- セクション間: 大きな余白
- カード間: 均等配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての基本要素（フラットデザイン） |

- 京セラのサイトは **完全にフラットなデザイン** で、`box-shadow` は一切使用されていない
- 要素の区別はボーダー（`#dddddd`）と背景色の差（`#ffffff` vs `#f7f7f7` vs `#f9f9f9`）で表現
- ナビゲーションのダークグレー背景（`#4f4f4f`〜`#616161`）が唯一の視覚的深度

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#333333` を使い、見出しには `#000000` を使う
- タグやボタンは控えめなスタイル（`#f9f9f9` 背景 + `#dddddd` ボーダー）にする
- ナビゲーションはダークグレー（`#4f4f4f`〜`#616161`）で構成する
- 背景色は白 (`#ffffff`) とライトグレー (`#f7f7f7`) の2段階で使い分ける
- フォントは游ゴシックを先頭にした統一スタックを使う
- 企業情報の本文は `line-height: 2.0` で組む
- `font-feature-settings` は `normal` のまま（palt を使わない）
- border-radius は控えめに（タグボタンの 6px のみ。他は 0px）

### Don't（禁止）

- 派手なブランドカラーやアクセントカラーを使わない（グレースケール基調）
- `box-shadow` でカードに影を付けない（フラットデザイン）
- `letter-spacing` を追加しない（サイト全体で `normal`）
- `palt` や `kern` を有効にしない
- 丸い pill ボタン（`border-radius: 99px`）を使わない
- ナビゲーション以外の要素にダークグレー背景を使わない
- 游ゴシック以外のフォントをメインに使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | < 768px | モバイルレイアウト |
| Desktop | >= 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（ナビゲーション項目で padding: 18px 16px を確保）

### フォントサイズの調整

- モバイルでは本文 14-16px、見出しはデスクトップの 70-80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #333333
Text Heading: #000000
Text Secondary: #666666
Background: #ffffff
Surface Light: #f7f7f7
Surface Tag: #f9f9f9
Border: #dddddd
Nav Primary: #4f4f4f
Nav Secondary: #616161
Search Button: #666666

Font: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
  "Noto Sans", メイリオ, meiryo, sans-serif

Body Size: 16px / line-height: 1.6 / letter-spacing: normal
palt: なし（全要素で normal）
box-shadow: なし（完全フラットデザイン）
Tag Button: bg #f9f9f9, border #dddddd, radius 6px
```

### プロンプト例

```
京セラのデザインに従って、製品一覧ページを作成してください。
- フォント: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans", メイリオ, meiryo, sans-serif
- テキスト色: #333333、見出し: #000000
- 補足テキスト: #666666
- 背景: #ffffff、セクション背景: #f7f7f7
- ボーダー: #dddddd
- タグボタン: bg #f9f9f9, border 1px solid #dddddd, radius 6px, font 13px/500
- ナビゲーション: bg #4f4f4f, text #ffffff
- box-shadow は使わない（フラットデザイン）
- letter-spacing: normal, palt: なし
```
