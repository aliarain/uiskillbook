# DESIGN.md — FABRIC TOKYO（ファブリックトーキョー）

> FABRIC TOKYO（https://fabric-tokyo.com/）のデザイン仕様書。
> D2C カスタムオーダースーツブランド。オンライン採寸 + 店舗フィッティングで "スーツをもっと自由に" を掲げるメンズ／ウィメンズ向けオーダーウェア。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロームで抑制されたラグジュアリー。`#333333` のダークグレーを主色に、白と淡いグレーの面で構成し、**色を足さないことで素材と仕立ての品質を語る** D2C ファッションブランドの美学
- **密度**: 本文の line-height は 1.5、見出しのセクションタイトルは 1.2 と詰める。プロダクトカードは大きな角丸（24px）と淡いグレー面で余裕を持たせ、ファッション EC としての空気感を確保
- **キーワード**: モノクローム、Lato ファースト、ワイドトラッキング、ピル CTA、D2C テイラードの洗練
- **特徴**:
  - 欧文書体 **Lato** を font-family の先頭に置く**欧文優先**の混植戦略。英語のセクション名（"PICKUP"、"NEWS"、"ABOUT US"）が Lato の幾何学的なプロポーションで映え、和文はヒラギノ角ゴシック Pro / メイリオにフォールバック
  - **全サイトにわたるワイドトラッキング**が最大の特徴。本文でも `letter-spacing: 0.05em`、セクション見出しは `0.1em` まで広げる。テイラードブランドとしての "余裕" を字間で表現
  - **ブランドカラーは `#333333`**（ダークグレー）。純黒 `#000000` ではなくわずかに柔らかい灰を主色にすることで、スーツ生地のチャコールのような奥行きを出す
  - CTA はすべて**ピル型（radius 9999px）**。`#333333` 背景の黒ピル、`transparent` 背景のアウトラインピル、フィルタータグの `#333333` / `#9ca3af` ピルと統一
  - プロダクトカテゴリカードは **radius 24px** の大きな角丸 + `#edf0f2` のクールグレー面。ファッション EC らしい柔らかさ
  - `font-feature-settings: "palt"` はヒーローオーバーレイテキストのみに限定適用。本文・見出しには使わず、letter-spacing で統一管理
  - フッターは **`#000000` 純黒背景 + 白文字**。サイト全体のモノクロームを締める
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Dark** (`#333333`): メインのブランドカラー。主要テキスト、主要 CTA 背景、アクティブフィルタータグ背景。スーツのチャコールグレーを想起させる
- **Brand Black** (`#000000`): フッター背景。サイト内では面色としてのみ使用し、テキストには `#333333` を充てる

### CTA / Buttons

- **Primary CTA**: 背景 `#333333` / 文字 `#ffffff` / radius `9999px`（pill） — "同意してログイン"
- **Outline CTA**: 背景 `transparent` / 文字 `#333333` / border `1px solid #333333` / radius `150px`（pill） — "はじめてのお客さまへ"
- **Filter Tag (Active)**: 背景 `#333333` / 文字 `#ffffff` / radius `9999px`
- **Filter Tag (Inactive)**: 背景 `#9ca3af` / 文字 `#ffffff` / radius `9999px`
- **LINE Login**: 背景 `#00c300` / 文字 `#ffffff` / radius `9999px`
- **Facebook Login**: 背景 `#3e6eaf` / 文字 `#ffffff` / radius `9999px`
- **Disabled/Reset**: 背景 `#eeeeee` / 文字 `#333333` / radius `9999px`

### Neutral — Cool Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Brand Dark | `#333333` | (51, 51, 51) | 主要テキスト・CTA 背景 |
| Secondary Gray | `#9ca3af` | (156, 163, 175) | 非アクティブタグ背景・補助テキスト |
| Border | `#d1d5db` | (209, 213, 219) | 区切り線・入力欄ボーダー |
| Surface | `#edf0f2` | (237, 240, 242) | プロダクトカード背景（**クール傾向**: B>R） |
| Disabled | `#eeeeee` | (238, 238, 238) | 無効状態の入力欄・ボタン背景 |
| Info Surface | `#eff6ff` | (239, 246, 255) | お知らせ・案内パネル背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ナビ背景 |
| Black | `#000000` | (0, 0, 0) | フッター背景のみ |

### Overlay

- **Hero Overlay**: `rgba(0, 0, 0, 0.5)` — ヒーロー画像上のテキスト可読性を確保する半透明黒

### Semantic（実測未確認・推奨値）

実サイトにはエラー・成功の色がフォーム以外に表面化していない。D2C EC 向けに推奨する補完値:

- **Danger**: `#dc2626` 程度の赤
- **Success**: `#16a34a` 程度の緑
- **Warning**: `#d97706` 程度のオレンジ

### Third Party

- **LINE Green** (`#00c300`): LINE ログインボタン
- **Facebook Blue** (`#3e6eaf`): Facebook ログインボタン

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴシック Pro（Hiragino Kaku Gothic Pro）** を優先。Apple 環境で最も安定した和文ゴシック
- **フォールバック**: `メイリオ`（Meiryo、Windows）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Lato** を最優先。幾何学的でクリーンなプロポーション。Google Fonts で配信
- **セクション見出し用**: Lato, sans-serif（"PICKUP"、"NEWS"、"ABOUT US" 等の英語見出し）
- **数字・ページネーション**: din-2014, sans-serif（スワイパーページネーション等）

### 3.3 font-family 指定

```css
/* 本文・ナビ・大部分の要素（欧文優先の混植） */
font-family: Lato, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, sans-serif;

/* 英語セクション見出し（"PICKUP" 等） */
font-family: Lato, sans-serif;

/* ページネーション・数字 */
font-family: din-2014, sans-serif;
```

**フォールバックの考え方**:
- **Lato を先頭に置く欧文優先戦略**。ブランド名 "FABRIC TOKYO" や英語セクション名が多く、Lato の幾何学的なプロポーションでブランドの洗練を表現
- 和文は Lato に含まれないため、自動的にヒラギノ角ゴシック Pro → メイリオにフォールバック
- ヒラギノは **Pro**（ProN ではない）を指定。Apple JP の流れを汲む

> **代替フォント注記**: din-2014 は Adobe Fonts のフォント。数字表示で代替が必要な場合は **DIN Alternate**（Apple 内蔵）か **Oswald / Barlow Condensed**（Google Fonts）で近い印象が出る。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Main Copy | Lato + HiraginoKakuGo | 20px | 400 | 40px (x2.0) | 1.5px (0.075em) | `#333333` | ヒーロー下の誘導テキスト |
| H2 Section Title | Lato | 18.75px | **700** | 22.5px (x1.2) | 1.875px (**0.1em**) | `#333333` | "PICKUP"、"NEWS" 等の英語見出し |
| H2 Subsection | Lato + HiraginoKakuGo | 15px | 700 | 20px (x1.33) | 0.7-1.5px (0.047-0.1em) | `#333333` | カテゴリ内見出し |
| H3 Product | Lato + HiraginoKakuGo | 15px | 400 | 22.5px (x1.5) | 0.7px (0.047em) | `#333333` | 商品名 |
| H3 Section | Lato | 12.5px | 700 | — | 0.625px (0.05em) | `#333333` | "MEN" 等のカテゴリラベル |
| Body | Lato + HiraginoKakuGo | 14px | 400 | 21px (x**1.5**) | 0.7px (**0.05em**) | `#333333` | 本文 |
| H4 / Small | Lato + HiraginoKakuGo | 12px | 400 | — | 0.7px (0.058em) | `#333333` | 商品バリエーション名 |
| Nav Link | Lato | 12.5px | **500** | — | 1.25px (**0.1em**) | `#333333` | グローバルナビ "MEN"、"WOMEN" |
| Footer | Lato | 11px | 400 | — | 0.7px (0.064em) | `#ffffff` | フッターリンク（黒背景上） |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (14px)**: `1.5`（21px / 14px）-- 標準的な日本語本文の行間
- **メインコピー (20px)**: `2.0`（40px / 20px）-- ゆったりとしたリードテキスト
- **セクション見出し (18.75px)**: `1.2`（22.5px / 18.75px）-- タイト
- **商品名 (15px)**: `1.5`（22.5px / 15px）

**字間 (letter-spacing)** -- 実測:
- **本文 (14px)**: `0.05em`（0.7px / 14px）-- **一般的な日本語サイトより広い**
- **セクション見出し**: `0.1em`（1.875px / 18.75px）-- **非常に広い。ファッションブランドの余裕感**
- **ナビリンク**: `0.1em`（1.25px / 12.5px）-- Tailwind の `tracking-widest` 相当
- **メインコピー**: `0.075em`（1.5px / 20px）-- 見出しとナビの中間
- **商品名・本文**: `0.047em〜0.05em` -- 広め基調を維持
- **フッター (11px)**: `0.064em`（0.7px / 11px）

**ガイドライン**:
- FABRIC TOKYO の最大の特徴は**全要素にわたるワイドトラッキング**。本文でも 0.05em、英語見出し・ナビでは 0.1em まで広げる
- テイラードブランドとして "余裕・品位・丁寧さ" を字間で体現。トラッキングを詰めるとブランドイメージが壊れる
- line-height は 1.5 が基本。リードコピーのみ 2.0 でゆったりと
- weight は 400（本文・商品名）と 700（セクション見出し）の2階層。500 はナビリンクのみ

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ヒーローのオーバーレイテキストは画像上に手動配置
- ナビリンク・フィルタータグは `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* ヒーローオーバーレイテキストのみ */
font-feature-settings: "palt";
```

- `palt`（プロポーショナル字詰め）はヒーローセクションのオーバーレイテキストにのみ適用
- 本文・セクション見出し・ナビには **`palt` を使わない**。字間は letter-spacing で統一管理
- ヒーロー以外で `palt` を入れると、ワイドトラッキングとの干渉で意図しない字詰めが発生する

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ダークグレーピル）** -- "同意してログイン"
- Background: `#333333`
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `9999px`（完全ピル）
- Font: Lato + HiraginoKakuGo, 14px, weight 400-700
- Border: none

**Outline CTA（透明ピル）** -- "はじめてのお客さまへ"
- Background: `transparent`
- Text: `#333333`
- Border: `1px solid #333333`
- Padding: `12px 24px`
- Border Radius: `150px`（実質ピル）
- Font: Lato + HiraginoKakuGo, 14px, weight 400
- Letter Spacing: `0.05em`

**Filter Tag (Active)** -- 選択中のフィルター
- Background: `#333333`
- Text: `#ffffff`
- Padding: `6px 16px`
- Border Radius: `9999px`
- Font: Lato + HiraginoKakuGo, 12-14px, weight 400

**Filter Tag (Inactive)** -- 未選択のフィルター
- Background: `#9ca3af`
- Text: `#ffffff`
- Padding: `6px 16px`
- Border Radius: `9999px`
- Font: Lato + HiraginoKakuGo, 12-14px, weight 400

**LINE Login CTA**
- Background: `#00c300`
- Text: `#ffffff`
- Border Radius: `9999px`
- Font: Lato, 14px

**Facebook Login CTA**
- Background: `#3e6eaf`
- Text: `#ffffff`
- Border Radius: `9999px`
- Font: Lato, 14px

**Disabled / Password Reset CTA**
- Background: `#eeeeee`
- Text: `#333333`
- Border Radius: `9999px`

### Inputs

- Background: `#ffffff`（通常）/ `#eeeeee`（disabled）
- Border: `1px solid #d1d5db`
- Border (focus): `1px solid #333333`（推奨）
- Border Radius: `8px`
- Padding: `12px 16px`
- Font: Lato + HiraginoKakuGo, 14px, weight 400
- Letter Spacing: `0.05em`

### Cards

**Product Category Card** -- "SUIT"、"SHIRT" 等
- Background: `#edf0f2`（クールグレー面）
- Border: none
- Border Radius: `24px`（大きな角丸）
- Padding: `24px`
- Shadow: none
- 内部にプロダクト画像 + テキスト

**Info Panel** -- お知らせ・案内
- Background: `#eff6ff`（淡いブルー面）
- Border: none
- Border Radius: `8px`
- Padding: `16px 24px`

### Header / Navigation

- Background: `#ffffff`
- Position: `sticky top: 0` / `fixed`
- Border Bottom: `1px solid #d1d5db`（推奨）
- Nav Font: Lato, 12.5px, weight 500, letter-spacing 0.1em
- z-index: 50 程度

### Footer

- Background: `#000000`（純黒）
- Text: `#ffffff`
- Font: Lato, sans-serif, 11px, weight 400
- Letter Spacing: `0.7px`（0.064em）
- Padding: `48px 24px`

### Hero Section

- フルブリード画像 + 半透明オーバーレイ `rgba(0, 0, 0, 0.5)`
- テキストは白 `#ffffff`、オーバーレイ上に配置
- `font-feature-settings: "palt"` をここだけで使用
- CTA はオーバーレイ上のアウトラインピル

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | フィルタータグの内側余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カード内側余白・セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24-32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 8px | 入力欄・インフォパネル |
| Large | 24px | プロダクトカテゴリカード |
| Pill | 9999px | CTA ボタン・フィルタータグ |
| Hero Pill | 150px | ヒーローのアウトライン CTA |

### Grid

- Flexbox / CSS Grid ベース
- プロダクトカード: 2-4 カラム（レスポンシブ）
- Gutter: 16-24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **`#edf0f2` のクールグレー面**と **`#000000` フッター面** のコントラストで表現
- ヒーローの深度は **半透明オーバーレイ `rgba(0, 0, 0, 0.5)`** で作る
- 影を使う場合も **彩度の低い黒**（`rgba(0, 0, 0, 0.06-0.10)`）で控えめに
- フラットでストイックな印象がブランドの核心。影の多用は避ける

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は **Lato を先頭**に置き、和文はヒラギノ角ゴシック Pro → メイリオにフォールバック
- 本文の letter-spacing は **0.05em**、英語見出し・ナビは **0.1em** のワイドトラッキングを維持する
- 主要 CTA は **`#333333` のダークグレーピル**。アウトライン CTA は `#333333` ボーダーの透明ピル
- プロダクトカテゴリカードは **`#edf0f2` 面 + radius 24px** の大きな角丸
- フィルタータグはアクティブ `#333333`、非アクティブ `#9ca3af` で状態を区別
- テキスト色は **`#333333` に統一**（純黒 `#000000` はフッター背景のみ）
- フッターは **`#000000` 背景 + `#ffffff` テキスト** でサイトを締める
- `palt` はヒーローオーバーレイのみ。他は letter-spacing で管理
- weight は 400（本文）/ 700（見出し）の2値を基本にする

### Don't（禁止）

- **letter-spacing を詰めない**（0 や負値は厳禁）。ワイドトラッキングが FABRIC TOKYO の最大のアイデンティティ
- **彩度の高いカラーを CTA に使わない**（ブルー、レッド等）。ブランドカラーはあくまで `#333333` のモノクローム。色付き CTA は SNS ログイン（LINE / Facebook）等の外部サービスに限定
- テキスト色に **純黒 `#000000`** を使わない（面色としては可、テキストは `#333333`）
- フォントスタックの先頭を **和文フォントにしない**。Lato が先頭であることがブランドの欧文表現を支えている
- **角張った直角ボタン**（border-radius 0）や **小角丸（4-8px）の CTA** を使わない。CTA は必ずピル型
- `#edf0f2` のカード面にさらに **ボーダーを加えない**。面色だけで十分に区別されている
- **太いフォントウェイト（800, 900）を使わない**。最大 700 まで。D2C ファッションの抑制を保つ
- ヒーロー以外で **`font-feature-settings: "palt"` を使わない**。letter-spacing との干渉で字間が崩れる
- **ウォーム系グレー**（`#f2f2f0`、`#737368` 等）を使わない。FABRIC TOKYO はクール寄りのニュートラル

---

## 8. Responsive Behavior

### Breakpoints（推奨）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | - | ~767px。モバイルレイアウト |
| Tablet | 768px | タブレット。2カラムグリッド |
| Desktop | 1024px | デスクトップ。フルナビ表示 |
| Wide | 1280px | 広いデスクトップ |

### モバイル時の調整

- セクション見出し: 18.75px → 16px
- メインコピー: 20px → 16-18px
- 本文サイズは 14px を維持（line-height も 1.5 維持）
- letter-spacing は 0.05em を維持（モバイルでも詰めない）
- ナビはハンバーガー化、プロダクトカードは 1-2 カラム
- ヒーロー画像はフルブリード維持、オーバーレイテキストのサイズを縮小

### タッチターゲット

- 主要 CTA: 高さ 44px 以上（padding `12px 24px` + フォントで確保）
- フィルタータグ: 高さ 36px 程度
- ナビリンク: 44px のタッチ領域を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Dark (CTA / Text): #333333
Surface (Card BG): #edf0f2
Secondary Gray (Inactive): #9ca3af
Border: #d1d5db
Info Surface: #eff6ff
Disabled: #eeeeee
Footer BG: #000000
White: #ffffff
Overlay: rgba(0, 0, 0, 0.5)
LINE Green: #00c300
Facebook Blue: #3e6eaf

Font (Body): Lato, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
Font (English Heading): Lato, sans-serif
Font (Numbers): din-2014, sans-serif

Body: 14px / weight 400 / line-height 1.5 / letter-spacing 0.05em / color #333333
Section Title: 18.75px / weight 700 / line-height 1.2 / letter-spacing 0.1em
Main Copy: 20px / weight 400 / line-height 2.0 / letter-spacing 0.075em
Product Name: 15px / weight 400 / line-height 1.5 / letter-spacing 0.047em
Nav Link: 12.5px / weight 500 / letter-spacing 0.1em
Footer: 11px / weight 400 / letter-spacing 0.064em / color #ffffff

Border Radius: 8px (input) / 24px (product card) / 9999px (CTA / tag)
Shadow: 基本 none。立体感は #edf0f2 面と #000000 フッター面で表現
palt: ヒーローオーバーレイのみ。他は letter-spacing で管理
```

### プロンプト例

```
FABRIC TOKYO のデザインに従って、D2C カスタムオーダースーツの商品一覧ページを作成してください。
- フォント: Lato, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
- セクション見出し: 18.75px / weight 700 / letter-spacing 0.1em / color #333333（英語表記 "SUITS" 等）
- 商品名: 15px / weight 400 / line-height 1.5 / letter-spacing 0.047em / color #333333
- 本文: 14px / weight 400 / line-height 1.5 / letter-spacing 0.05em / color #333333
- 主要 CTA: 背景 #333333 / 白文字 / border-radius 9999px / padding 12px 24px
- アウトライン CTA: 背景 transparent / 文字 #333333 / border 1px solid #333333 / radius 9999px
- フィルタータグ（アクティブ）: 背景 #333333 / 白文字 / radius 9999px
- フィルタータグ（非アクティブ）: 背景 #9ca3af / 白文字 / radius 9999px
- プロダクトカード: 背景 #edf0f2 / radius 24px / shadow none
- ページ背景: 白 #ffffff
- フッター: 背景 #000000 / テキスト #ffffff / Lato 11px
- letter-spacing は全要素で正の値（0.05em-0.1em）。絶対に詰めない
- 彩度のある色は使わない（モノクローム基調）
- box-shadow は基本 none。フラットに
- palt はヒーローのオーバーレイテキストのみ
```
