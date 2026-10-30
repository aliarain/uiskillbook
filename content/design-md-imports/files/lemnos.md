# DESIGN.md — Lemnos（タカタレムノス）

> Lemnos 公式サイト（https://www.lemnos.jp/）のデザイン仕様書。
> 富山のプロダクトデザイン時計ブランド「タカタレムノス」。nendo、渡辺力、深澤直人など著名デザイナーとのコラボレーションで知られる。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 時計そのものが主役。写真と余白で「静寂の中の美」を表現するギャラリー型レイアウト。テキストは最小限にとどめ、プロダクトの佇まいで語る
- **密度**: 非常にゆったり。1画面1プロダクトの展示型構成。ヒーローは全幅のカルーセル（Swiper）で時計を大きく見せる
- **キーワード**: 静謐、モノクローム、余白、プロダクトギャラリー、デュアルフォント、デザイナーズクロック
- **特徴**: **和文は DNP 秀英ゴシック金（dnp-shuei-gothic-kin-std）、欧文は bilo** というデュアルフォント構成。どちらも Adobe Fonts のため、上品で柔らかな印象を保つ。色はほぼモノクロームで、`#333333` のウォームグレーを基調に、赤 `#bb4c4c` はお知らせ専用の唯一の有彩色。ボタン類は控えめで、サイドパネル式の `border-radius: 10px` が基本

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Lemnos は有彩色のブランドカラーを持たない。**ウォームグレーのグラデーション**でトーンを構成し、プロダクト写真の色が唯一の彩りとなる設計。

- **Dark Gray** (`#333333`): テキスト・アクティブ状態の背景色。ブランドのトーンを決める最重要色
- **Footer Dark** (`#545454`): フッター背景。`#333333` より一段明るいグレー
- **Footer Nav** (`#444444`): フッターナビゲーション背景。`#333333` と `#545454` の中間

### Semantic（意味的な色）

- **Alert Red** (`#bb4c4c`): 「重要なお知らせ」専用。サイト内で唯一の有彩色

### Neutral

- **Text Primary** (`#333333`): 本文・見出しの基本色。純黒は使わない
- **Text Secondary** (`#828282`): 補足テキスト、キャプション
- **Text Light** (`#b5b5b5`): 最も薄いテキスト。非アクティブ要素
- **Border** (`#d9d9d9`): 区切り線、サイドパネルの枠
- **Background** (`#ffffff`): ページ背景
- **Surface Footer** (`#545454`): フッターメイン背景
- **Surface Footer Nav** (`#444444`): フッターナビ背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **DNP 秀英ゴシック金** (`dnp-shuei-gothic-kin-std`): Adobe Fonts 提供。タカタレムノスの和文メインフォント。秀英体の骨格を持つモダンゴシックで、伝統的な活字の品位とゴシックの可読性を兼ね備える
- **游ゴシック** (`YuGothic`, `Yu Gothic Medium`, `Yu Gothic`): macOS / Windows フォールバック
- **メイリオ** (`Meiryo`): Windows フォールバック
- **Verdana**: レガシーフォールバック

> **preview.html の代替フォント**: `dnp-shuei-gothic-kin-std` は Adobe Fonts のドメインライセンスのため外部では使用不可。Google Fonts の **Zen Kaku Gothic New**（Morisawa 系で字形が近い）を代替として推奨

### 3.2 欧文フォント

- **bilo** (`bilo, sans-serif`): Adobe Fonts 提供。ジオメトリックサンセリフ。ナビラベル、日付、英語見出しに使用。数字の美しさに特徴がある
- **Roboto** / **Segoe UI** / **Helvetica Neue**: システムフォールバック

> **preview.html の代替フォント**: `bilo` も Adobe Fonts のため外部使用不可。Google Fonts の **Josefin Sans** または **Raleway** を推奨（ジオメトリックサンセリフの雰囲気が近い）

### 3.3 font-family 指定

```css
/* 本文（和文メイン） */
font-family: "dnp-shuei-gothic-kin-std", -apple-system, "system-ui",
  Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue,
  YuGothic, "Yu Gothic Medium", "Yu Gothic",
  Verdana, Meiryo, sans-serif;

/* 英語ディスプレイ（ナビラベル、日付、英語見出し） */
font-family: "bilo", sans-serif;
```

**フォールバックの考え方**:
- 和文フォント `dnp-shuei-gothic-kin-std` が先頭。Adobe Fonts が読み込めない環境では system-ui → 游ゴシック → メイリオの順にフォールバック
- 欧文ディスプレイ `bilo` は単独指定。英語のみのラベル・日付に限定して使用

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Copy | 秀英ゴシック金 | 32px | 700 | 1.0 | 0.15em | 「時を刻み、空間をつくる」等 |
| Section Heading | 秀英ゴシック金 | 30px | 700 | 1.5 | 0.1em | `.heading-sec` セクション見出し |
| Sub Heading (JP) | 秀英ゴシック金 | 22px | 700 | 1.5 | 0.1em | 小見出し |
| Sub Heading (EN) | bilo | 26–30px | 700 | 1.5 | 0.1em | 英語セクション見出し |
| Sub Title | 秀英ゴシック金 | 20px | 700 | 1.8 | 0.03em | `.sub-tit` |
| Body | 秀英ゴシック金 | 16px | 400 | 2.0 | 0.03em | 本文 |
| Detail | 秀英ゴシック金 | 14px | 400 | 1.857 | 0.03em | `.txt` 詳細テキスト |
| Nav Label | bilo | 18px | 700 | 1.6 | — | ナビゲーションラベル |
| Date | bilo | 12px | 700 | 1.35 | — | 日付表示 |
| Lang Switcher | bilo | 12px | 700 | — | — | 言語切替ボタン |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- **本文**: `2.0`（16px × 2.0 = 32px）— 日本語本文として広めの行間。読みやすさとゆとりを両立
- **ヒーローコピー**: `1.0`（32px × 1.0 = 32px）— 大きな文字はタイトに
- **セクション見出し**: `1.5`（30px × 1.5 = 45px）
- **サブタイトル**: `1.8`（20px × 1.8 = 36px）
- **ディテール**: `1.857`（14px × 1.857 = 26px）

**字間 (letter-spacing)** — 実測値:
- **body グローバル**: `0.03em`（16px × 0.03 = 0.48px）— 全体に微小な字送りを適用
- **ヒーローコピー**: `0.15em`（32px × 0.15 = 4.8px）— 大きくゆったりと字間を開ける
- **セクション見出し**: `0.1em`（30px × 0.1 = 3px）— 見出しにも余裕を持たせる
- **本文・ディテール**: `0.03em` — body の値を継承

**ガイドライン**:
- Lemnos は **正の letter-spacing** を一貫して使う（文字を開ける方向）
- 見出しほど大きく開け（0.1–0.15em）、本文は控えめに（0.03em）
- この字間の広がりが「静けさ」「余白」のブランドトーンを文字レベルで表現している

### 3.6 禁則処理・改行ルール

- 明示的な `word-break` / `line-break` の指定なし
- ブラウザデフォルトの禁則処理に依存

### 3.7 OpenType 機能

```css
/* 全要素 */
font-feature-settings: normal;
```

- **palt は使用していない**: letter-spacing の手動指定で字間を制御
- **kern も明示指定なし**: ブラウザデフォルト（通常は有効）に依存

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Lang Switcher（言語切替ピル）**
- Background: `#333333`
- Text: `#ffffff`
- Font: bilo, 12px, weight 700
- Border Radius: 10px
- Padding: 小型のピル型

**Side Panel Button（サイドメニュー）**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#d9d9d9`
- Border Radius: 10px（左側のみ）
- Padding: 5px 30px 5px 50px

**Menu Button（ハンバーガー）**
- Background: `#ffffff`
- Border: 1px solid `#d9d9d9`
- Border Radius: 50%（円形）

**Footer Link**
- Background: `#444444`
- Text: `#ffffff`
- Font: bilo, 18px, weight 700
- Border Radius: なし

### Navigation

- **ヘッダー**: 透過白背景。ロゴ左 + メニューボタン右の最小構成
- **サイドパネル**: 右からスライドイン。`border-radius: 10px`（左辺のみ）
- **フッターナビ**: `#444444` 背景に bilo フォントで英語ラベル

### Cards

- 製品カードは装飾なし。写真 + テキストのフラットな構成
- Background: `#ffffff`
- Border: なし
- Shadow: なし
- 余白で区切り、線や影に頼らないデザイン

---

## 5. Layout Principles

### Spacing Scale

サイト全体で一貫した余白システムは定義されていないが、実測から以下の傾向が読み取れる：

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | ボタン内パディング（小） |
| S | 10px | 要素間の最小マージン |
| M | 20px | セクション内のテキスト間隔 |
| L | 30–50px | ボタン内パディング（大）、セクション間 |
| XL | 80–100px | セクション間の大きな余白 |
| XXL | 120–160px | ヒーロー周辺の余白 |

### Container

- Max Width: コンテンツは中央寄せだが、ヒーローカルーセルは全幅
- 製品一覧は CSS Grid でレスポンシブに配置

### Grid

- 製品一覧: 2–4 カラムのグリッド（ビューポートに応じて可変）
- ヒーロー: 全幅 Swiper カルーセル

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインが基本 |

- **Lemnos はシャドウをほぼ使わない**。フラットな面と余白でレイヤーを表現する
- カード、ボタン、ナビゲーションいずれもシャドウなし
- 奥行きは写真の被写界深度（プロダクト撮影のボケ）で表現される

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は `dnp-shuei-gothic-kin-std` を最優先で指定する（代替: Zen Kaku Gothic New）
- 英語ラベル・日付・ナビには `bilo` を使い分ける（代替: Josefin Sans / Raleway）
- テキスト色は `#333333` を使う。純黒 `#000000` は使わない
- 本文の line-height は `2.0` を維持する（日本語の品位ある行間）
- letter-spacing は正の値を使う（body: 0.03em、見出し: 0.1–0.15em）
- 余白を惜しまない。1画面に詰め込まず、展示のように配置する
- ボタンの角丸は `10px` を基本とする（ピルでも矩形でもない中間）
- 色はモノクロームに留める。有彩色はプロダクト写真に任せる
- フッターの多段グレー（`#545454` → `#444444`）を正確に再現する

### Don't（禁止）

- 純黒 `#000000` をテキストに使わない。常に `#333333`
- 派手なアクセントカラーを追加しない。有彩色は `#bb4c4c`（お知らせ赤）のみ
- `palt` を適用しない。Lemnos は letter-spacing で字間を制御する
- ドロップシャドウを多用しない。フラットな面と余白で構成する
- bilo（欧文ディスプレイ）を日本語テキストに使わない。和英フォントは厳密に使い分ける
- 見出しの letter-spacing を `0` にしない。開けた字間がブランドのトーンを作る
- 装飾的なボーダーやアクセントラインを追加しない。ミニマルを保つ

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。カラム1列、ハンバーガーメニュー |
| Tablet | 768px–1023px | タブレット。グリッド2列 |
| Desktop | ≥ 1024px | デスクトップ。フルレイアウト |

### タッチターゲット

- メニューボタン: 円形（`border-radius: 50%`）で十分なタップ領域を確保
- サイドパネルの操作ボタン: パディングを広めに取って操作性を確保

### フォントサイズの調整

- モバイルではヒーローコピーが縮小（32px → 24px 程度）
- 本文 16px は維持。14px のディテールテキストも変更なし
- セクション見出しは 30px → 22–24px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #333333
Text Secondary: #828282
Text Light: #b5b5b5
Background: #ffffff
Footer: #545454
Footer Nav: #444444
Alert: #bb4c4c
Border: #d9d9d9

JP Font: "dnp-shuei-gothic-kin-std", -apple-system, "system-ui",
  Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue,
  YuGothic, "Yu Gothic Medium", "Yu Gothic",
  Verdana, Meiryo, sans-serif
EN Font: "bilo", sans-serif
Alt JP Font: "Zen Kaku Gothic New", sans-serif
Alt EN Font: "Josefin Sans", sans-serif

Body: 16px / weight 400 / line-height: 2.0 / letter-spacing: 0.03em
Section Heading: 30px / weight 700 / line-height: 1.5 / letter-spacing: 0.1em
Hero Copy: 32px / weight 700 / line-height: 1.0 / letter-spacing: 0.15em
Button Radius: 10px
palt: 不使用
Shadow: 不使用（フラット）
```

### プロンプト例

```
Lemnos（タカタレムノス）のデザインに従って、時計の製品一覧ページを作成してください。
- 和文フォント: "dnp-shuei-gothic-kin-std"（代替: "Zen Kaku Gothic New"）
- 欧文フォント: "bilo"（代替: "Josefin Sans"）
- テキスト色: #333333（純黒は使わない）
- 補助テキスト: #828282
- 背景: 白 #ffffff、フッター #545454
- 本文: 16px, line-height: 2.0, letter-spacing: 0.03em
- 見出し: 30px, weight 700, line-height: 1.5, letter-spacing: 0.1em
- ボタン: border-radius 10px、ボーダー #d9d9d9
- シャドウは使わない（完全フラット）
- palt は使わない（letter-spacing で字間を制御）
- 色はモノクローム。有彩色はプロダクト写真のみ
- 余白をたっぷり取り、展示型のレイアウトにする
```
