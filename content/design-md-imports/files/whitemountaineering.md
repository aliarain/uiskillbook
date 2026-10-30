# DESIGN.md — White Mountaineering

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://whitemountaineering.com/
> White Mountaineering はデザイナー相澤陽介による日本のファッションブランド。
> テクニカルとトラディショナルを融合したアウトドア・ファッションを展開する。実測は公式 EC（Shopify）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロームで硬質なファッション EC。黒・白・グレーだけで構成し、商品写真と山線のロゴを引き立てる
- **密度**: 中〜低密度。ヒーローは全画面ビジュアル、ナビ・商品グリッドは整然と等間隔
- **キーワード**: モノクローム / 硬質 / グリッド / ミニマル / モード
- **形状言語**: 角丸を一切使わない（`border-radius: 0`）。ボタン・入力・カードすべて直角。細い罫線で領域を仕切る
- **書体の性格**: Helvetica を主役に据え、ナビ・ボタン・ラベルの英字は **大文字（uppercase）＋広めのトラッキング**で組む。和文はヒラギノ角ゴ ProN で欧文に馴染ませる

---

## 2. Color Palette & Roles

<!-- CSS Custom Properties（--background 等）と computed style の実測に基づく。純粋なモノクローム設計 -->

### Base（下地）

- **Background** (`#ffffff`): ページ全体の下地（`--background`）。純白
- **Header (hero) Background** (`#000000`): トップのヒーロー／ヘッダー領域は黒地。ナビ文字は白で乗る
- **Border** (`#eaeaea`): 区切り線・グリッドの罫（`--border-color`）
- **Footer Border** (`#d9d9d9`): フッターの罫（`--footer-border-color`）

### Text（文字色）

- **Text Primary / Heading** (`#000000`): 見出し・本文（`--text-color` / `--heading-color`）。純黒
- **Text Light** (`#9a9a9a`): 補足テキスト・非活性ラベル（`--text-color-light`）
- **Link** (`#6a6a6a`): テキストリンクのグレー（`--link-color`）
- **Text on Dark** (`#ffffff`): 黒地のヒーロー・ヘッダー・ボタン上の文字

### Button（ボタン）

- **Button Background** (`#000000`): 塗りボタンの下地（`--button-background`）
- **Button Text** (`#ffffff`): 塗りボタンの文字（`--button-text-color`）

### 色に関する設計思想

- 色は**黒・白・グレー階調のみ**。ブランドカラーとしての彩度色を一切持たない
- 商品ページに現れる色（ネイビー・キャメル等）はプロダクトのカラースウォッチであり、UI の色ではない
- 純黒 `#000000`・純白 `#ffffff` をためらいなく使うのがモード系 EC らしい潔さ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴシック ProN（`"Hiragino Kaku Gothic ProN"`）→ メイリオ（`Meiryo`）。和文専用フォントは指定せず、欧文フォントの後ろでシステムフォントに委ねる
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ（主役）**: Helvetica → Helvetica Neue。ニュートラルなグロテスクを先頭に置き、英字表記の品質を最優先する
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: Helvetica はライセンス上 Web フォント配信されず、環境依存でシステムの Helvetica / Arial にフォールバックする。
> - Helvetica → **Helvetica Neue**（Mac ネイティブ）／ Web では **Arial** もしくは **Inter**（ニュートラルなグロテスク）で代替
> - ヒラギノ角ゴ ProN → 環境に無ければ **Noto Sans JP**

### 3.3 font-family 指定

```css
/* 見出し・本文とも共通（--heading-font-family / --text-font-family） */
font-family: Helvetica, "Helvetica Neue",
             "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先の並び**。Helvetica を先頭に置き、英字の見た目を最優先する
- 和文グリフは後段のヒラギノ角ゴ ProN → メイリオが拾う
- 見出しと本文で同じ font-family を使い、ウェイトとサイズだけで階層を作る（`--heading-font-weight: 400`）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Heading (h2) | Helvetica | 20px | 600 | 1.0 | 0 | セクション見出し |
| Body | Helvetica | 14px | 400 | 1.65 | 0 | 本文（`--base-text-font-size: 14px`） |
| Nav / Menu | Helvetica | 11px | 400 | 1.65 | 0.127em | グローバルナビ（uppercase） |
| Footer Heading | Helvetica | 10px | 600 | 1.5 | 0.14em | フッター小見出し（uppercase） |
| Caption | Helvetica | 11px | 400 | 1.65〜2.0 | 0〜0.055em | 注釈・日付 |
| Input | Helvetica | 13px | 400 | normal | 0 | 入力欄 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.65`（14px 本文で 23.1px）。欧文主体のため和文サイトよりやや締まっている
- **見出しの行間**: `1.0`（20px セクション見出し）
- **本文の字間 (letter-spacing)**: 基本 `0`。ただしナビ・ラベル・フッター等の**小さい uppercase テキストは `0.1〜0.14em` と広く取る**
- **見出しの字間**: `0`

**ガイドライン**:
- 英字のナビ・ボタン・ラベルは **`text-transform: uppercase`** で組み、トラッキングを広げる
- 見出しウェイトは 400（`--heading-font-weight`）が基本。セクション見出しのみ 600 で強める

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は使用しない */
```

- 欧文主体のため和文の `palt` は使わない（`font-feature-settings: normal`）
- 字間は `letter-spacing` で明示的にコントロールする

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

角丸ゼロ。塗り（黒）とアウトライン（黒罫）の 2 種を使い分ける。

**Primary（塗り）**
- Background: `#000000`（`--button-background`）
- Text: `#ffffff`（`--button-text-color`）
- Border: なし
- Padding: `17px 28px`
- Border Radius: `0`
- Font: 12px / weight 400 / `letter-spacing: 0.1em` / `text-transform: uppercase`

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `17px 28px`
- Border Radius: `0`
- Font: 12px / weight 400 / `letter-spacing: 0.1em` / `text-transform: uppercase`
- 例: 「View all products」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #eaeaea`
- Border (focus): `1px solid #000000`
- Border Radius: `0`
- Padding: `12px 14px`
- Font Size: 13px

### Cards

- Background: `#ffffff`
- Border: なし（罫 `1px solid #eaeaea` で区切る場合あり）
- Border Radius: `0`
- Shadow: なし（フラット）
- 商品カードは画像＋英字商品名（uppercase）＋価格の最小構成

---

## 5. Layout Principles

### Spacing Philosophy

整然としたグリッド。要素は等間隔に並べ、罫線で領域を仕切る。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 64px |
| XXL | 96px |

### Container

- Max Width: 1440px（ヒーロー・商品ビジュアルはフルブリード）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（商品一覧は 3〜4 カラム）
- Gutter: 16–24px
- ヒーローは全画面、商品はグリッドで等間隔配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。全面フラット |
| 1 | `0 1px 2px rgba(0,0,0,0.08)` | ドロップダウン・カートドロワーの最小限の浮き |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・ニュースレターポップアップ |

- 影は極力使わない。領域の区切りは罫線（`#eaeaea`）で行う

---

## 7. Do's and Don'ts

### Do（推奨）

- 色は黒・白・グレー階調のみに絞る（純黒・純白を使ってよい）
- 英字のナビ・ボタン・ラベルは `text-transform: uppercase` ＋広めの `letter-spacing`（0.1em〜）で組む
- ボタン・入力・カードは `border-radius: 0` の直角にする
- 見出しウェイトは 400 基準、セクション見出しのみ 600
- 和文はヒラギノ角ゴ ProN（代替: Noto Sans JP）で欧文に馴染ませる

### Don't（禁止）

- 彩度の高いブランドカラーを UI に持ち込まない（色はプロダクトのみ）
- `border-radius` を付けない（角丸はモードの世界観に反する）
- ナビ・ラベルを小文字のまま置かない（英字は uppercase が基本）
- 和文の `palt` を効かせない（`font-feature-settings: normal`）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1〜2 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2〜3 カラム |
| Desktop | > 1024px | 3〜4 カラム＋フルブリードヒーロー |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルではセクション見出し（20px）を 16–18px に、本文は 14px を維持
- uppercase ナビの字間はモバイルでも広めを保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:    #ffffff
Hero/Header:   #000000（文字は #ffffff）
Text Primary:  #000000
Text Light:    #9a9a9a
Link:          #6a6a6a
Border:        #eaeaea
Button:        #000000 bg / #ffffff text / radius 0 / uppercase / ls 0.1em
Font:          Helvetica, "Helvetica Neue", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Body Size:     14px
Line Height:   1.65
```

### プロンプト例

```
White Mountaineering のデザインシステムに従って、商品一覧グリッドを作成してください。
- 下地: #ffffff、文字: #000000、補足: #9a9a9a、罫線: #eaeaea
- フォント: Helvetica, "Helvetica Neue", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
- ナビ・ボタン・ラベルの英字は uppercase ＋ letter-spacing: 0.1em
- ボタンは黒塗り（#000 / 文字 #fff）または黒罫アウトライン、border-radius: 0
- 本文 line-height: 1.65、色はモノクロームのみ（彩度色を使わない）
- 影は使わず罫線で区切る
```

### 環境依存フォントの代替指針

- 欧文 Helvetica → **Helvetica Neue**（Mac）／ **Arial** / **Inter**（Web）
- 和文 ヒラギノ角ゴ ProN → **Noto Sans JP**
- どの代替でも「モノクローム・uppercase・角丸ゼロ・広めのトラッキング」を守れば世界観は再現できる
