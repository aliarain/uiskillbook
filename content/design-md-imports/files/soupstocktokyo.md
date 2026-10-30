# DESIGN.md — Soup Stock Tokyo（スープストックトーキョー）

> Soup Stock Tokyo 公式サイト（https://www.soup-stock-tokyo.com/）のデザイン仕様書。
> 1999年創業の食べるスープ専門店。「世の中の体温をあげる」をコンセプトに掲げ、温かみのあるミニマルなデザインで知られる。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 明朝体を主役にした上品で静謐なミニマリズム。装飾を排し、文字の美しさと余白で温かみを表現する
- **密度**: 情報密度は低め。大きな余白とゆったりとした行間で「間」を大切にするギャラリー型レイアウト
- **キーワード**: 明朝体、静謐、温かみ、広い字間、ミニマル
- **特徴**: **Ryumin（リュウミン）明朝体がサイト全体を支配**する。見出しからナビゲーション、本文まで明朝体で統一し、ゴシック体は補助的な役割にとどまる。**letter-spacing: 0.15em** という広めの字間がブランドの特徴的なリズムを生む。カラーパレットは `#333333` テキストと `#ffffff` 背景の二極構造で、色彩は極限まで抑えられている。**CTA ボタンはほぼ存在せず、テキストリンク＋矢印（ReadMore）が主要なインタラクション**。日付表記には Times New Roman を使用し、欧文セリフと和文明朝の調和を意識している

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Soup Stock Tokyo は特定のブランドカラーを持たず、**テキストのダークチャコール `#333333` と白 `#ffffff` のモノトーン二極構造**がブランドのビジュアルアイデンティティ。

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・見出しの基本色。**純黒 `#000000` は使わない**
- **Text Secondary** (`#999999`): 補足テキスト、カテゴリー名、日付の区切り線代わり
- **Pagination Active** (`#666666`): ページネーションのアクティブ状態、中間色テキスト
- **Background** (`#ffffff`): ページ背景
- **Surface Light** (`#f8f8f8`): セクション背景のライトグレー面。採用情報やソーシャルセクション等に使用
- **Border** (`#cccccc`): ボタンやフォームの枠線
- **Footer Background** (`#333333`): フッター背景。ダークチャコールで本体と対比
- **Footer Text** (`#ffffff`): フッター上のテキスト。白で反転表示

### Overlay

- **Muted Line** (`#e0e0e0`): コンテンツ間の区切り線
- **Card Border** (`#eeeeee`): カード間の微細な境界

> **Note**: Soup Stock Tokyo のカラーパレットは**極限までモノクロームに抑えられている**。`#333333`（ダーク）と `#ffffff`（ライト）の対比が根幹で、`#f8f8f8` の微かなグレー面でセクションを分ける。原色・アクセントカラーは一切使わない。食の温かみは色ではなく、明朝体の書体と広い字間で表現する。

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（主要書体）**: **a-otf-ryumin-pr6n**（Adobe Fonts のリュウミン）。見出し、ナビゲーション、本文、フッターまで全体を通して使用するブランドの基幹書体
  - Adobe Fonts のドメインライセンスのため、preview.html では **Shippori Mincho**（Google Fonts）で代替。Morisawa 系列で字形の印象が近い

### 3.2 欧文フォント

- **セリフ（日付・数字専用）**: **"Times New Roman"**, Times, serif — 日付表記（2024.01.15 等）に限定使用
- **サンセリフ（補助）**: generic `sans-serif` — カテゴリーラベル等の UI 要素

### 3.3 font-family 指定

```css
/* 見出し・ナビ・本文（Ryumin） */
font-family: a-otf-ryumin-pr6n, "Yu Mincho", YuMincho, serif;

/* 日付・数字 */
font-family: "Times New Roman", Times, serif;

/* UI 補助（カテゴリ・ラベル等） */
font-family: sans-serif;
```

**フォールバックの考え方**:
- a-otf-ryumin-pr6n は Adobe Fonts のカスタム Web フォント。ローカル環境では游明朝（Yu Mincho）にフォールバック
- 日付の Times New Roman は OS 標準搭載のため追加読み込み不要
- ローカル再現には **Shippori Mincho**（Google Fonts）が Morisawa 系で最も印象が近い代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h1) | Ryumin | 40px | 400 | 1.5 | 0.15em | ヒーロー見出し。palt あり |
| Heading 2 | Ryumin | 24px | 400 | 1.5 | 0.15em | セクション見出し。palt あり |
| Heading 3 (Card) | Ryumin | 18px | 400 | 1.5 | 0.05em | カードタイトル |
| Heading 3 (News) | Ryumin | 14px | 400 | 1.8 | 0.05em | ニュース一覧の見出し |
| Body (Ryumin) | Ryumin | 16px | 400 | 1.8 | 0.15em | 明朝体の本文テキスト |
| Body (sans) | sans-serif | 16px | 400 | 1.5 | normal | ゴシック体の本文テキスト |
| Lede | sans-serif | 16px | 400 | 2.5 | 0.15em | リード文。特に広い行間 |
| Category | sans-serif | 12px | 400 | 1.5 | 0.15em | カテゴリーラベル |
| Nav Link | Ryumin | 10.48px | 400 | 1.5 | 0.15em | グローバルナビゲーション |
| Date | Times New Roman | 14px | 400 | 1.5 | normal | 日付表記 |
| ReadMore | Ryumin | 14px | 400 | 1.5 | normal | 「もっと読む」リンク |

### 3.5 行間・字間

- **本文の行間 (line-height)**: Ryumin 本文は **1.8**。ゴシック体は **1.5**。リード文は **2.5** と極めて広い
- **見出しの行間**: **1.5**（Display / Heading 2 共通）
- **ニュース見出しの行間**: **1.8**（本文と同じくゆったり）
- **letter-spacing**: **0.15em がブランドの基準字間**。見出し・本文・ナビゲーションで広く適用。カードタイトルやニュース見出しは **0.05em** と控えめ
- **字間の設計思想**: 0.15em という広い字間は、明朝体の横線と余白が織りなす「呼吸するようなリズム」を生み出す。ゴシック体・欧文には適用しない

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

テキスト量を最小限に抑える方針のため、長文の禁則処理が問題になるケースは少ない。

### 3.7 OpenType 機能

```css
/* 見出し（Ryumin）に適用 */
font-feature-settings: "palt" 1;
```

- **palt**: Ryumin の見出し（h1, h2）とナビゲーションに適用。プロポーショナル字詰めで文字間を自然に詰める
- 本文には palt を適用しない（letter-spacing: 0.15em と palt の併用は可読性を損なうため）
- kern は不使用

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — ボタンは極力使わない設計

Soup Stock Tokyo は**明示的な CTA ボタンをほぼ持たない**。インタラクションはテキストリンク＋矢印（→）で誘導する。存在するボタンは UI 補助的なもの。

**Accessibility Button（文字サイズ切替等）**
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #cccccc`
- Border Radius: `4px`
- Padding: `8px 16px`
- Font Size: `14px`
- Font Weight: `400`

**Footer Outline Button**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Border Radius: `4px`
- Padding: `8px 16px`
- Font Size: `14px`

**ReadMore（テキストリンク）**
- Font Family: Ryumin
- Font Size: `14px`
- Color: `#333333`
- Text Decoration: `none`
- 矢印（→）を末尾に添えるパターン

> **Don't**: 大きな pill ボタンや派手な CTA は Soup Stock Tokyo の世界観にそぐわない。テキストリンクと微かな矢印で十分な誘導力を持たせる。

### Inputs

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border Radius: `4px`
- Padding: `8px 12px`
- Font Family: sans-serif
- Font Size: `14px`

### Cards（メニュー・ニュースカード）

- Background: `#ffffff`
- Border: なし（または `1px solid #eeeeee`）
- Border Radius: `0px`
- Shadow: なし
- 画像＋テキストのシンプルな縦積み構成
- タイトル: Ryumin 18px / `#333333`
- カテゴリ: sans-serif 12px / `#999999`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | テキスト間の微細な間隔 |
| S | 8px | カテゴリとタイトルの間 |
| M | 16px | カード内の要素間 |
| L | 32px | セクション内の要素間 |
| XL | 64px | セクション間（小） |
| XXL | 120px+ | セクション間（大）、ヒーローの上下余白 |

### Container

- Max Width: 約 1000px
- Padding (horizontal): 20-32px
- フルブリードのセクション（`#f8f8f8` 背景）あり

### Grid

- ヒーロー: 1 カラム（フルブリード画像 + テキスト）
- メニューカード: 3-4 カラムグリッド（デスクトップ）
- ニュース一覧: 1 カラムリスト
- フッター: 複数カラム（ナビリンクグループ）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。Soup Stock Tokyo は影をほとんど使わない |
| 1 | なし（色の切り替えで区切る） | 白背景とライトグレー (`#f8f8f8`) の切り替えでセクション分割 |

> **特徴**: Soup Stock Tokyo は**ドロップシャドウを使わない**。深度の表現は白 `#ffffff` とライトグレー `#f8f8f8` の面色切り替えと、`#e0e0e0` の細い区切り線でセクションを分ける。フッターは `#333333` のダーク面で対比させる。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストは**明朝体（Ryumin / Shippori Mincho）**を基本書体として使う。ゴシック体は補助的な UI 要素のみ
- letter-spacing は **0.15em** を標準とする。広い字間がブランドのリズム
- 本文の line-height は **1.8** 以上を確保する。明朝体の横線が呼吸するような余裕を持たせる
- テキスト色は **`#333333`** を基本とし、純黒 `#000000` は使わない
- 日付は **Times New Roman** で表記し、和文明朝体と欧文セリフの調和を保つ
- CTA は**テキストリンク＋矢印（→）**パターンで。ボタンは最小限に
- フッターでは `#333333` 背景 + `#ffffff` テキストの反転パターンを使う
- palt は**見出しにのみ**適用する。本文には適用しない
- weight は **400（Regular）のみ**使う。bold は使わない

### Don't（禁止）

- **ゴシック体を主要書体として使わない**（明朝体がブランドの根幹）
- **純黒 `#000000` をテキストに使わない**（`#333333` を使う）
- **派手な CTA ボタンや pill ボタンを作らない**（テキストリンクで誘導）
- **原色・ブランドカラー・アクセントカラーを使わない**（モノクロームが基本）
- **letter-spacing を normal（0）にしない**（0.15em の字間がブランド）
- **bold (700) や semi-bold (600) を使わない**（400 のみ。明朝体の繊細さを壊さない）
- **ドロップシャドウを使わない**（フラットな面色切り替えで深度を出す）
- **line-height を 1.5 未満にしない**（明朝体の日本語には広い行間が必要）
- **装飾的な角丸を多用しない**（4px のわずかな角丸が最大）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ハンバーガーナビ |
| Tablet | ≤ 1024px | メニューグリッド 2 カラム |
| Desktop | > 1024px | 3-4 カラムグリッド |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイルでは Display 40px → 24-28px 程度に縮小
- Heading 2 の 24px → 20px 程度に縮小
- 本文 16px は据え置き（line-height も維持）
- letter-spacing 0.15em は維持（モバイルでも広い字間がブランドの特徴）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary:       #333333
Text Secondary:     #999999
Background:         #ffffff
Surface Light:      #f8f8f8
Footer BG:          #333333
Footer Text:        #ffffff
Border:             #cccccc

Primary Font:       a-otf-ryumin-pr6n, "Yu Mincho", YuMincho, serif
  (Google Fonts 代替: "Shippori Mincho", serif)
Date Font:          "Times New Roman", Times, serif
UI Font:            sans-serif

Body Size:          16px
Line Height:        1.8 (Ryumin本文) / 1.5 (ゴシック) / 2.5 (リード文)
Letter Spacing:     0.15em (ブランド標準)
Font Weight:        400 のみ (bold 不使用)
OpenType:           palt — 見出しのみ
CTA Style:          テキストリンク + 矢印(→), ボタン最小限
```

### プロンプト例

```
Soup Stock Tokyo のデザインシステムに従って、メニュー一覧ページを作成してください。

- 背景: #ffffff
- 本文: "Shippori Mincho", serif / 16px / line-height 1.8 / letter-spacing 0.15em / color #333333
- 見出し: "Shippori Mincho", serif / 24px / weight 400 / letter-spacing 0.15em / font-feature-settings "palt"
- カードタイトル: "Shippori Mincho", serif / 18px / letter-spacing 0.05em / color #333333
- カテゴリ: sans-serif / 12px / letter-spacing 0.15em / color #999999
- 日付: "Times New Roman", serif / 14px / color #333333
- セクション背景: #f8f8f8（ライトグレー面で区切り）
- フッター: bg #333333 / text #ffffff
- CTA: テキストリンク + 矢印(→) / 14px / color #333333
- bold は使わない（weight 400 のみ）
- ドロップシャドウ・pill ボタン・アクセントカラーは使わない
```
