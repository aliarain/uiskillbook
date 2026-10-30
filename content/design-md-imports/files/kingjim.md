# DESIGN.md — KING JIM（キングジム）

> KING JIM（https://www.kingjim.co.jp/）のデザイン仕様書。
> 「ファイル」と「テプラ」で知られるオフィス・文具メーカー。ラベルライター、デジタル文具、ファイリング用品、デスク周辺用品、防災用品など幅広い事務用品を展開。
> 実サイトの computed style 実測（2026-06-20 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調としたクリーンなコーポレートサイト。**ブルー `#3381d0` のリンク／アクセント**と **`#333333` のテキスト**で、老舗事務用品メーカーらしい堅実さと信頼感を表現。装飾を抑えた情報整理型のレイアウト
- **密度**: 本文の line-height は 1.75 とゆったりめ。見出しは weight 700〜900 で太く立てる。カテゴリナビは情報密度高め、コンテンツ部分はゆとりのある構成
- **キーワード**: コーポレートブルー、堅実、システムフォント、情報整理、日本の老舗メーカー
- **特徴**:
  - 和文フォントは **ヒラギノ角ゴ Pro W3** を最優先とするシステムフォントスタック。Webフォントは使用しない
  - ナビ／見出し部分では **Noto Sans + Noto Sans JP** が追加されたフォントスタックに切り替わる
  - ブランドカラーは **`#418fde`（明るいブルー）** と **`#3381d0`（やや暗いブルー）** の2段階。CTA・リンク・検索ボタンに使用
  - テキストカラーは `#333333`（near-black）で統一。純黒 `#000000` はナビの一部のみ
  - サーフェスに `#f0f5f9`（ブルーティントのライトグレー）を使い、商品カテゴリ一覧の背景で階層を作る
  - ボタンは角張った直角デザイン（border-radius: 0px）。ピル型は使わない
  - メガドロップダウンナビで商品カテゴリを大分類（ラベルライター、デジタル文具、ファイル、ステーショナリー等）に整理
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Blue** (`#418fde`): メインのブランドカラー。「取扱店検索」「キングジムストア」のボタンボーダー・文字色、検索ボタン背景、カルーセルドット（アクティブ）に使用
- **Brand Blue Dark** (`#3381d0`): リンクテキストの色。ヘッダーリンク、パンくずリスト、テキストリンクで使用
- **Product Surface Blue** (`#f0f5f9`): 商品カテゴリ一覧の背景面。ブルーを帯びたライトグレーで、白とのコントラストで階層を作る
- **Light Blue Surface** (`#f2f7fb`): 「お近くのキングジム商品取扱店」セクション等の背景面

### CTA / Buttons

- **Search Submit**: 背景 `#418fde` / border なし / radius `0px`
- **Nav CTA（ブルーボーダー）**: 背景 `#ffffff` / 文字 `#418fde` / border `2px solid #418fde` / radius `0px` / padding `13px 15px 11px 32px` / 16px / weight 700 — "取扱店検索"、"キングジムストア"
- **Nav CTA（グレーボーダー）**: 背景 `#ffffff` / 文字 `#333333` / border `2px solid #cccccc` / radius `0px` / padding `13px 15px 11px 32px` / 16px / weight 700 — "法人のお客様向けサービス"
- **Header Button**: 背景 `#ffffff` / 文字 `#333333` / border `2px solid #333333` / radius `0px` — "メニュー"、"検索"

### Neutral — Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Near Black | `#333333` | (51, 51, 51) | 本文・見出しテキスト |
| Black | `#000000` | (0, 0, 0) | ナビ一部のテキスト |
| Gray Border | `#cccccc` | (204, 204, 204) | セカンダリボタンのボーダー、カルーセルドット |
| Light Gray | `#efefef` | (239, 239, 239) | カルーセル矢印の背景 |
| Surface Gray | `#f2f3f5` | (242, 243, 245) | お問い合わせセクション背景 |
| Surface Blue | `#f0f5f9` | (240, 245, 249) | 商品カテゴリ背景（brand-banner-layout） |
| Nav BG | `#f6f6f6` | (246, 246, 246) | メガドロップダウン背景 |
| Divider | `#dddddd` | (221, 221, 221) | ナビカテゴリ区切り線 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ヘッダー・カード |

### Semantic（推奨補完値）

実サイトにはエラー／成功色の露出が確認されなかった。コーポレートサイト向けの推奨値:

- **Danger**: `#c41e3a` 程度のレッド
- **Success**: `#2e8b57` 程度のグリーン
- **Warning**: `#d4a017` 程度のイエロー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ Pro W3** を最優先。OS 標準のシステムフォントに依存
- **フォールバック**: Hiragino Kaku Gothic Pro（旧名表記）→ メイリオ / Meiryo（Windows）→ Osaka（レガシー macOS）→ ＭＳ Ｐゴシック / MS PGothic（古い Windows）→ sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- **ナビ／見出し用追加フォント**: 一部の見出し・ナビ要素で **Noto Sans + Noto Sans JP** がスタック先頭に追加される

### 3.2 欧文フォント

- 専用の欧文書体は持たない
- **ヒラギノ角ゴ Pro W3 の欧文グリフ**を優先。英数字はヒラギノ内蔵の欧文グリフで表示
- ナビの一部で Noto Sans の欧文グリフ

### 3.3 font-family 指定

```css
/* 本文・フッター・ヘッダーのデフォルト */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* ナビ・見出し・セクションタイトル */
font-family: "Noto Sans", "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ Pro W3 を最優先し、macOS / iOS でネイティブな表示品質を確保
- Windows 環境ではメイリオにフォールバック
- ナビ・見出しでは Noto Sans / Noto Sans JP が先頭に来ることで、クロスプラットフォームでの統一を図る
- Helvetica Neue / Arial 等の欧文専用書体は含まない

> **代替フォント注記**: ヒラギノ角ゴ Pro W3 は macOS / iOS 標準フォントであり、Windows 環境では表示されない。デザインプレビューや社外資料では **Noto Sans JP**（weight 400 / 700）を使用すると、字面の整い方で近い印象が出る（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／商品情報ページ、2026-06-20 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page Title H1 | Noto Sans JP | 38px | **900** | 57px (x1.5) | normal | `#333333` | "商品情報"（商品ページ） |
| Section H2 | Noto Sans JP | 36px | **900** | 54px (x1.5) | normal | `#333333` | "商品を探す"（トップ） |
| Mega Nav Title | Noto Sans JP | 27px | **900** | 40.5px (x1.5) | normal | `#333333` | メガドロップダウンのカテゴリ見出し |
| Category H3 | Noto Sans JP | 24px | 700 | 36px (x1.5) | normal | `#333333` | "ラベルライター・ラベルプリンター" |
| Sub Heading H3 | Noto Sans JP | 20px | 700 | 35px (x1.75) | normal | `#333333` | "カテゴリから探す" |
| Mega Nav Label | Noto Sans JP | 19px | 700 | 23.75px (x1.25) | normal | `#333333` | メガナビのカテゴリラベル |
| Nav Link | Noto Sans JP | 17px | 400 | 29.75px (x1.75) | normal | `#333333` / `#000000` | グローバルナビ |
| Nav Sub Link | Noto Sans JP | 17px | 700 | 21.25px (x1.25) | normal | `#333333` | メガナビ内リンク |
| News H2 | Noto Sans JP | 16px | 700 | 24px (x1.5) | normal | `#333333` | "重要なお知らせ" |
| Body / Default | Hiragino | 16px | 400 | 28px (x1.75) | normal | `#333333` | 本文 |
| H4 Index | Noto Sans JP | 16px | 400 | 20.8px (x1.3) | normal | `#333333` | カテゴリインデックス |
| News Title H3 | Hiragino | 15px | 700 | 26.25px (x1.75) | normal | `#333333` | お知らせ記事タイトル |
| Link | Hiragino | 16px | 400 | 28px (x1.75) | normal | `#3381d0` | テキストリンク |
| Utility Label | Hiragino | 10px | 700 | 12px (x1.2) | normal | `#333333` | "SEARCH", "GLOBAL" 等の英字ラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.75`（28px / 16px）— 日本語の可読性を確保した広めの行間
- **見出し (36〜38px)**: `1.5`（54px / 36px, 57px / 38px）— 見出しも比較的ゆったり
- **サブ見出し (20px)**: `1.75`（35px / 20px）
- **ナビ (17px)**: `1.75`（29.75px / 17px）
- **メガナビラベル (19px)**: `1.25`（23.75px / 19px）— ややタイト
- **ユーティリティ (10px)**: `1.2`（12px / 10px）— 最小テキスト

**字間 (letter-spacing)** — 実測:
- **全要素**: `normal`（letter-spacing の明示的な指定なし）
- 日本語テキストの字間調整はブラウザのデフォルトに委ねている

**ガイドライン**:
- キングジムは **letter-spacing を一切指定しない**方針。line-height で可読性を担保する
- 見出し・本文ともに `normal` で統一。palt も不使用
- line-height は概ね 1.5〜1.75 の範囲で、コーポレートサイトとしては標準的な設定

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- 改行はブラウザの標準禁則処理に従う
- 見出しの手動改行（`<br>`）は最小限

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- システムフォントのデフォルトメトリクスをそのまま使用する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Search Submit（ブルー直角）**
- Background: `#418fde`
- Text: `#ffffff`（推定）
- Padding: `1px 6px`
- Border Radius: `0px`（直角）
- Border: none
- Font: Hiragino, 16px, weight 400

**Nav CTA Blue Border（ブルー枠直角）** — "取扱店検索"、"キングジムストア"
- Background: `#ffffff`
- Text: `#418fde`
- Border: `2px solid #418fde`
- Padding: `13px 15px 11px 32px`
- Border Radius: `0px`（直角）
- Font: Noto Sans JP, 16px, weight 700

**Nav CTA Gray Border（グレー枠直角）** — "法人のお客様向けサービス"、"よくあるご質問"
- Background: `#ffffff`
- Text: `#333333`
- Border: `2px solid #cccccc`
- Padding: `13px 15px 11px 32px` / `12px 10px 12px 30px`
- Border Radius: `0px`（直角）
- Font: Noto Sans JP, 16px〜17px, weight 700

**Header Button（黒枠直角）** — "メニュー"、"検索"
- Background: `#ffffff`
- Text: `#333333`
- Border: `2px solid #333333`
- Padding: `0px`
- Border Radius: `0px`（直角）
- Font: Hiragino, 16px, weight 400

**Text Link** — 本文中のリンク
- Background: transparent
- Text: `#3381d0`
- Font: Hiragino, 16px, weight 400
- Text Decoration: none（ホバー時 underline）

### Inputs

- Background: `#ffffff`
- Border: ブラウザデフォルト
- Border Radius: `0px`（直角）
- Padding: `9px 13px`
- Font: Hiragino, 16px, weight 400

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f0f5f9`（商品カテゴリ面）/ `#f2f3f5`（お問い合わせ面）
- Border: なし、または `1px solid #dddddd`
- Border Radius: `0px`（直角が基本）
- Shadow: `none`（基本フラット）

### Header

- Background: `#ffffff`（白ベタ）
- Border Bottom: なし
- Shadow: なし
- ユーティリティバー + メインナビの2段構成

### Mega Dropdown Nav

- Background: `#ffffff`（白）
- Border: なし
- Shadow: 軽い影（推定）
- カテゴリラベル: 19px / weight 700 / `#333333`
- カテゴリリンク: 17px / weight 400 / `#333333`

### Footer

- Background: transparent（白）
- Text: `#333333`
- Font: Hiragino, 16px, weight 400
- カテゴリリンクを縦列で整理

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | ナビリンク内余白 |
| S | 10px | セレクトボックス内余白 |
| M | 15px | ボタン内横余白 |
| L | 20px | メガナビカテゴリラベルの上余白 |
| XL | 40px | 見出しの左パディング、メガナビタイトル |
| XXL | 44px | メガナビタイトルの左パディング |

### Container

- Max Width: `1200px`（推定）
- Padding (horizontal): mobile `15px` / desktop `40px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Default | 0px | 全要素（直角が基本） |

キングジムのサイトは **全要素 border-radius: 0px**。角丸は一切使用しない、直角デザインで統一。

### Grid

- 商品カテゴリは複数カラムのグリッドレイアウト
- Gutter: 推定 20〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | メガドロップダウン（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ボーダー**（`2px solid #333333` / `2px solid #cccccc` / `2px solid #418fde`）と **サーフェスカラー**（`#f0f5f9`）で表現
- コーポレートサイトらしいフラットで堅実なデザイン

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **ヒラギノ角ゴ Pro W3 を最優先**、フォールバックは Hiragino Kaku Gothic Pro → メイリオ → Osaka → ＭＳ Ｐゴシック
- 見出し・ナビには **Noto Sans / Noto Sans JP** を先頭に追加したスタックを使う
- 本文の line-height は **1.75** を基本にする（28px / 16px）
- letter-spacing は **normal**（指定なし）で統一する
- テキストカラーは **`#333333`** で統一する（ほぼ黒だが純黒ではない）
- リンクは **`#3381d0`**（コーポレートブルー）で統一する
- ボタンは **直角（border-radius: 0px）**、太めのボーダー（2px solid）で存在感を出す
- CTA のアクセントには **`#418fde`**（明るいブルー）のボーダーを使う
- サーフェスの階層は **`#f0f5f9`**（ブルーティントのライトグレー）で作る
- 見出しは **weight 700〜900** と太くし、本文 400 との明確なコントラストを作る

### Don't（禁止）

- **border-radius を使わない** — キングジムは全要素直角。ピル型（9999px）や角丸（4〜8px）は使わない
- リンクに **黒（`#333333`）を使わない** — リンクは必ず `#3381d0` で区別する
- **letter-spacing を指定しない** — 全要素 `normal` で統一。`0.04em` 等の字間調整を加えない
- **palt を適用しない** — `font-feature-settings: normal` を維持する
- **サーフェスに暖色系グレーを使わない** — キングジムのサーフェスは `#f0f5f9` のブルーティント系。`#f2f2f0`（ウォーム）や `#fafafa`（ニュートラル）は使わない
- **影で階層を作らない** — キングジムはボーダーとサーフェスカラーで階層を表現する。box-shadow は基本 none
- 見出しの weight を **400 にしない** — 見出しは 700〜900 で太く。軽い見出しという概念がない
- **Webフォントを追加しない** — システムフォントスタックで統一するのがキングジムの方針

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- ページタイトル H1: 38px → 24〜28px
- セクション H2: 36px → 20〜24px
- ナビはハンバーガーメニューに切り替わり、メガドロップダウンはアコーディオン形式に
- 本文サイズは 16px を維持（line-height も 1.75 維持）

### タッチターゲット

- ナビ CTA ボタン: 高さ 44px 以上（padding `13px 15px 11px 32px` で十分な高さ）
- ヘッダーボタン: タッチターゲットとして最低 44px を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue (CTA Border): #418fde
Brand Blue Dark (Link): #3381d0
Text Primary: #333333
Gray Border: #cccccc
Surface Blue: #f0f5f9
Surface Gray: #f2f3f5
White: #ffffff

Font (Default): "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Font (Nav/Heading): "Noto Sans", "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
（システムフォント環境の代替提案: Noto Sans JP）

Body Size: 16px / line-height 1.75 / weight 400 / letter-spacing normal
Heading Size: 36-38px / line-height 1.5 / weight 900 / letter-spacing normal
Sub Heading: 20-24px / line-height 1.5-1.75 / weight 700
Nav: 17px / line-height 1.75 / weight 400

Border Radius: 0px（全要素直角）
Shadow: 基本 none。階層はボーダーとサーフェスカラーで表現
```

### プロンプト例

```
キングジムのデザインに従って、オフィス用品の商品カテゴリ一覧ページを作成してください。
- フォント（本文）: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- フォント（見出し）: "Noto Sans", "Noto Sans JP" を先頭に追加
- ページタイトル: 38px / weight 900 / line-height 1.5 / color #333333
- カテゴリ見出し: 24px / weight 700 / line-height 1.5 / color #333333
- 本文: 16px / weight 400 / line-height 1.75 / letter-spacing normal / color #333333
- リンク: color #3381d0 / hover時に underline
- CTA ボタン（ブルー枠）: 背景 白 / 文字 #418fde / border 2px solid #418fde / radius 0px / padding 13px 15px / weight 700
- CTA ボタン（グレー枠）: 背景 白 / 文字 #333333 / border 2px solid #cccccc / radius 0px / weight 700
- カテゴリ背景: #f0f5f9（ブルーティントのライトグレー）
- ボーダー: #cccccc または #dddddd
- box-shadow は none。立体感はボーダーとサーフェスカラーで表現
- border-radius は全て 0px（角丸不使用）
- letter-spacing は全て normal（字間調整不使用）
- font-feature-settings は normal（palt 不使用）
```
