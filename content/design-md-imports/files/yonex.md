# DESIGN.md — Yonex (ヨネックス)

> Yonex（https://www.yonex.co.jp/）のデザイン仕様書。
> 実サイトの CSS computed style および CSS Custom Properties に基づく。
> デュアルフォントシステム（Oswald + BIZ UDGothic）と黒基調のヒーロー、角形 CTA で「アスリートブランド」の力強さと精密さを表現している。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: アスレチック・プレシジョン。スポーツギアメーカーとしての力強さと、用具の精密さを両立したデザイン
- **密度**: ゆったりとした余白と大きなビジュアル。バドミントン・テニス・ゴルフの製品写真を際立たせるヒーロー型レイアウト
- **キーワード**: 力強い、黒基調、デュアルフォント、フラット、バイリンガル
- **特徴**:
  - **デュアルフォントシステム**: 英語見出しに Oswald（コンデンスド・サンセリフ）、日本語に line-only + BIZ UDGothic のバイリンガル書体設計。和欧の対比がブランドの国際性を演出
  - **"line-only" カスタム Web フォント**: Yonex 独自のブランドフォントと推定される。BIZ UDGothic（UD = ユニバーサルデザイン）をフォールバックに指定し、可読性を担保
  - **Oswald で英語セクションタイトル**: `letter-spacing: 0.1em` の劇的なトラッキングで、スポーツブランドらしい迫力を表現
  - **角形 CTA（radius 0px）とピル型検索（radius 30px）の二重構造**: 主要 CTA はシャープな角形、検索系はソフトなピル型と、用途で形状を使い分け
  - **CTA ラベルは英語**: 日本語サイトでありながら CTA テキストは "All News", "Learn More", "All Products" 等すべて英語。グローバルブランドの姿勢を反映
  - **font-feature-settings: "normal"（palt なし）** — プロポーショナル字詰めを使わない。BIZ UDGothic の均等な字面を活かしたデザイン
  - **73 色の CSS Custom Properties** を持つ充実したデザイントークンシステム

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Yonex Blue** (`#0061b1`): メインのブランドカラー。検索ボタン、アクセント要素に使用。CSS Custom Property `--color-main`
- **Yonex Blue 10〜90**: `--color-main-10: #f1f4f9` 〜 `--color-main-90: #000012` の 10 段階トーンスケール

### Sub Accent（サブアクセント）

- **Green 50** (`#036a03`): サブアクセントのグリーン。`--color-sub-50`
- **Green 10〜40**: `--color-sub-10: #ecfff1` から段階的に濃くなるグリーン系トーンスケール

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト。`--color-type` / `--color-black`
- **Dark Charcoal** (`#1f2427`): CTA 背景、英語ナビアクティブ、h2 テキスト。実質的な「ブランドダーク」として多用
- **Breadcrumb BG** (`#444444`): パンくずリストの背景
- **Nav Inactive** (`#b5b5b5`): 非アクティブなナビゲーションリンク、フッターアコーディオン
- **White** (`#ffffff`): ライト背景上のテキスト反転、検索ピルの背景

### Surface & Background

- **Hero Black** (`#000000`): ヒーローセクションの背景。ページ上部を支配する色
- **Page Background** (`transparent` / `#ffffff`): html/body は transparent。コンテンツ領域は白
- **Section Gray** (`#f6f6f6`): セクション交互の背景色（バドミントンページで 7 回出現）

### Border

- **Tag Badge Border** (`#e8e8e8`): タグバッジの枠線
- **Search Input Border** (`#b5b5b5`): 検索入力欄のボーダー
- **CTA Border** (`#1f2427`): 角形 CTA の 2px ボーダー

---

## 3. Typography Rules

### 3.1 和文フォント

**カスタム Web フォント — line-only**:
- Yonex 独自のブランドフォントと推定される。サイト上で和文本文に使用
- ドメインライセンスのため公式サイト以外では表示されない

**フォールバック — BIZ UDGothic**:
- BIZ UD ゴシック。ユニバーサルデザイン（UD）書体で、視認性・可読性に優れたゴシック体
- Google Fonts で無料配信されているため、プレビューやプロトタイプでもそのまま使える
- Yonex がフォールバックに UD 書体を選んでいるのは、スポーツ用品メーカーとしてのアクセシビリティ意識の表れ

### 3.2 欧文フォント

**Oswald（Google Fonts）**:
- コンデンスド・サンセリフ。セクション見出し、ナビゲーションラベル、フッターアコーディオンに使用
- Weight 400（見出し）/ 500（フッター）/ 700（ナビ）の 3 ウェイトを使い分け
- 縦長の字形がスポーツブランドの力強さを演出

### 3.3 font-family 指定

```css
/* 和文本文 */
font-family: line-only, "BIZ UDGothic", sans-serif;

/* 英語見出し・ナビゲーション */
font-family: Oswald, sans-serif;
```

**フォールバックの考え方**:
- 和文は line-only（カスタム）→ BIZ UDGothic（Google Fonts）→ sans-serif の 3 段構え
- 英語見出しは Oswald 単独指定。Google Fonts 経由のため読み込み失敗時は sans-serif にフォールバック
- 和欧で完全にフォントファミリーを分けるデュアルフォント設計。CSSの `font-family` を要素ごとに切り替えて実現

> **プレビュー用代替**: line-only が利用できない環境では BIZ UDGothic をそのまま使用する。Oswald は Google Fonts から直接読み込めるため代替不要。

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H2 Section (EN) | Oswald | 56px | 400 | 84px (x1.5) | 5.6px (0.1em) | 英語セクションタイトル |
| H2 Sub (EN) | Oswald | 24px | 400 | — | — | バドミントンページ等 |
| H1 (Logo) | — | 36px | 700 | 43.2px (x1.2) | — | ロゴ領域 |
| Nav (EN) | Oswald | 16px | 700 | 22.4px (x1.4) | — | 英語ナビリンク |
| Nav (JP) | line-only / BIZ UDGothic | 16px | 700 | 22.4px (x1.4) | — | 日本語ナビ子要素 |
| Body | line-only / BIZ UDGothic | 16px | 400 | 25.6px (x1.6) | normal | 本文テキスト |
| Nav Item | — | 15px | 400 | 21px (x1.4) | — | ナビリストアイテム |
| CTA Button | — | 14px | 700 | — | — | 角形 CTA ボタン |
| Tag Badge | — | 12px | 400 | 19.2px (x1.6) | — | タグラベル |
| Hamburger | — | 11px | 700 | — | — | ハンバーガーメニュー |
| Footer Accordion | Oswald | 18px | 500 | — | — | フッターの開閉ヘッダー |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `25.6px` (16px x **1.6**) — 日本語サイトとして標準的。BIZ UDGothic の広い字面と相性が良い
- 英語セクション見出し (h2): `84px` (56px x **1.5**) — Oswald のコンデンスド字形に対して余裕のある行間
- ナビゲーション: `22.4px` (16px x **1.4**)
- タグバッジ: `19.2px` (12px x **1.6**)

**字間 (letter-spacing)** — 実測値:
- 英語セクション見出し (h2 Oswald): `5.6px` (**0.1em**) — 極めて広いトラッキング。Oswald のコンデンスド字形を劇的に広げてスポーツブランドの迫力を演出
- 本文テキスト: `normal`
- ナビゲーション: `normal`

**ガイドライン**:
- Oswald の `letter-spacing: 0.1em` は英語セクションタイトル専用。日本語テキストや本文には適用しない
- body の `line-height: 1.6` は BIZ UDGothic の字面を考慮した値。これより詰めると可読性が低下する
- 日本語本文の `letter-spacing` は `normal`（ベタ組み）。palt を使わない設計と一貫

### 3.6 禁則処理・改行ルール

```css
/* Yonex サイトのデフォルト設定 */
word-break: normal;
overflow-wrap: break-word;
```

- ブラウザデフォルトの禁則処理に委ねている
- 長い URL や英単語の折り返しは `overflow-wrap: break-word` で対応

### 3.7 OpenType 機能

```css
/* Yonex の設定 */
font-feature-settings: normal;
```

- **palt 未使用** — プロポーショナル字詰めを適用していない
- BIZ UDGothic のデフォルトの等幅字面をそのまま活用する設計
- UD（ユニバーサルデザイン）書体の特性として、等幅配置の方が可読性が高いという判断と推定

### 3.8 縦書き

- 該当なし。Yonex は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（角形 — メインのアクション）** — 実測値:
- Background: `#1f2427`
- Text: `#ffffff`
- Border: `2px solid #1f2427`
- Border Radius: **`0px`**（完全角形）
- Padding: `16px`
- Font Size: `14px`
- Font Weight: `700`
- 用途: "All News", "Learn More", "All Products", "View All" 等。ラベルはすべて英語

**Search Pill（ピル型 — 検索送信）**
- Background: `#0061b1`（Yonex Blue）
- Text: `#ffffff`
- Border Radius: **`30px`**（ピル型）
- Font Size: `16px`
- Font Weight: `400`

**Search Input Pill（ピル型 — 検索入力欄）**
- Background: `#ffffff`
- Border: `1px solid #b5b5b5`
- Border Radius: **`30px`**（ピル型）
- Font Size: `16px`
- Font Weight: `500`
- Padding: `0 38px`

**Hamburger Menu**
- Background: `#000000`
- Text: `#ffffff`
- Font Size: `11px`
- Font Weight: `700`

**Page Top（トップへ戻る）**
- Background: `#ffffff`
- Border Radius: **`50%`**（円形）

> **重要**: Yonex は CTA とユーティリティで形状を明確に使い分ける。主要アクション CTA は角形（radius 0px）、検索系はピル型（radius 30px）、ページトップは円形（radius 50%）。この三段階の使い分けがデザインの特徴。

### Cards

**Tag Badge（タグラベル）**
- Background: `#ffffff`
- Border: `1px solid #e8e8e8`
- Padding: `0 8px`
- Font Size: `12px`
- Color: `#1f2427`

### Navigation

- **Desktop Header**: 白背景。英語ラベル（Oswald, 700）と日本語子要素（line-only / BIZ UDGothic, 700）の二層構造
- **Nav Inactive**: テキスト色 `#b5b5b5`（非アクティブ時）→ `#1f2427`（アクティブ時）
- **Hamburger**: 黒背景 `#000000`、11px / 700 のコンパクトなラベル

### Inputs

- Background: `#ffffff`
- Border: `1px solid #b5b5b5`
- Border Radius: **`30px`**（ピル型 — 検索フォーム）
- Font Size: `16px`
- Font Weight: `500`
- Padding: `0 38px`

---

## 5. Layout Principles

### Spacing Scale

Yonex はコンテンツに応じた余白設計を採用。スポーツ製品の大型ビジュアルに十分な呼吸を与えるヒーロー型レイアウト。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン周り |
| S | 8px | タグバッジ内パディング |
| M | 16px | CTA パディング、カード内余白 |
| L | 24px | セクション内余白 |
| XL | 40px | セクション間余白 |
| XXL | 80px | ヒーロー・セクション間 |

### Container

- Max Width: 全幅レイアウト（コンテンツ部分は約 1200px 内に収まる）
- Padding (horizontal): `16px`〜`40px`

### Grid

- 製品一覧: 2〜4 カラムのグリッド
- ニュース・記事: 1〜3 カラム
- ヒーロー: フル幅の画像・動画

---

## 6. Depth & Elevation

Yonex のデザインはフラットを基調とし、box-shadow の使用は検出されていない。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | デフォルト。ほぼすべての要素 |
| Hero | 背景色 `#000000` | ヒーローセクションの黒背景で奥行きを表現 |
| Breadcrumb | 背景色 `#444444` | パンくずリストのダーク帯 |
| Overlay | 背景色の透過 | ヒーロー上のテキストオーバーレイ |

> Yonex は影ではなく、背景色の切り替え（黒 → 白 → グレー → 黒）でセクション間の奥行きを表現する。フラットデザインの徹底。

---

## 7. Do's and Don'ts

### Do（推奨）

- 英語見出しには Oswald を使い、`letter-spacing: 0.1em` で広いトラッキングを適用する
- 日本語本文には line-only / BIZ UDGothic を使い、`letter-spacing: normal` のベタ組みにする
- CTA ボタンのラベルは英語にする（"Learn More", "All Products" 等）
- 主要 CTA は `border-radius: 0px` の角形、背景色 `#1f2427` にする
- 検索系 UI は `border-radius: 30px` のピル型にする
- ヒーローセクションは黒背景 `#000000` で製品ビジュアルを際立たせる
- Yonex Blue `#0061b1` はアクセント（検索ボタン等）に限定して使う
- ダーク背景上のテキストは `#ffffff` を使用する
- セクション交互色には `#f6f6f6` を使う

### Don't（禁止）

- 主要 CTA に角丸を付けない — `border-radius: 4px` や `8px` は Yonex の CTA デザインに反する
- 日本語テキストに Oswald を適用しない — Oswald は英語専用
- 英語見出しに BIZ UDGothic を使わない — 欧文は Oswald で統一
- `font-feature-settings: "palt"` を適用しない — Yonex は palt を使わない設計
- Yonex Blue `#0061b1` を大面積の背景色に使わない — アクセント用途に限定
- CTA ラベルを日本語にしない — Yonex の CTA は英語表記で統一されている
- 装飾的な影やグラデーションを多用しない — Yonex はフラットデザインを徹底している
- `#1f2427` と `#000000` を混同しない — CTA・テキスト要素は `#1f2427`、ヒーロー背景は `#000000` と使い分ける

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタンは padding: 16px で十分なタッチ領域を確保
- ハンバーガーメニューはモバイル時の主要ナビゲーション手段

### フォントサイズの調整

- モバイルでは本文 14-16px
- Oswald の英語見出しは 56px → 24-32px 程度に縮小
- デュアルフォントシステム（Oswald + BIZ UDGothic）はモバイルでも維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Accent): #0061b1 (Yonex Blue — 検索ボタン等のアクセント)
CTA Dark: #1f2427 (主要 CTA 背景・テキスト)
Text Primary: #000000
Nav Inactive: #b5b5b5
Hero Background: #000000
Page Background: #ffffff
Section Alt Background: #f6f6f6
Tag Badge Border: #e8e8e8
CTA Border: #1f2427 (2px solid)

Font (JP Body): line-only, "BIZ UDGothic", sans-serif
Font (EN Heading): Oswald, sans-serif

Body: 16px / line-height: 1.6 / letter-spacing: normal
EN Heading: Oswald, 56px / line-height: 1.5 / letter-spacing: 0.1em
CTA: 14px / weight: 700 / radius: 0px
Search Pill: radius: 30px / bg: #0061b1
OpenType: font-feature-settings: normal (palt なし)
```

### プロンプト例

```
Yonex のデザインに従って、製品一覧ページを作成してください。
- 和文フォント: "BIZ UDGothic", sans-serif
  (line-only が使えない環境では BIZ UDGothic をプライマリに)
- 英語見出しフォント: Oswald, sans-serif (Google Fonts)
- 本文色: #000000、CTA テキスト・背景: #1f2427
- ヒーロー背景: #000000、セクション交互色: #f6f6f6
- Yonex Blue #0061b1 は検索ボタン等のアクセントに限定
- CTA: border-radius: 0px の角形、border: 2px solid #1f2427
  padding: 16px、14px weight 700、ラベルは英語
- 検索: border-radius: 30px のピル型
- 英語見出し: Oswald, letter-spacing: 0.1em
- 本文: 16px, line-height: 1.6, letter-spacing: normal
- font-feature-settings: normal (palt を使わない)
```
