# DESIGN.md — aeru

> aeru 公式サイト（https://a-eru.co.jp/）のデザイン仕様書。
> 「日本の伝統を次世代につなぐ」をミッションに掲げる和える。日本最年少の女性社長が創業し、全国の職人と共に子どもから大人まで使える伝統工芸品を企画・販売する。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 伝統と現代をつなぐ、温かく凛としたデザイン。朱色（vermillion）をブランドカラーに据え、和紙のような温かみのあるオフホワイト面で日本の手仕事の質感を表現
- **密度**: ゆったり。余白を贅沢に取り、一つひとつの工芸品を丁寧に見せるギャラリー的構成
- **キーワード**: 朱色、伝統工芸、温かみ、和モダン、バイリンガル、pill CTA、palt
- **特徴**: 英語セクションラベル（Roboto、朱色）+ 日本語見出しの**バイリンガルヘッダーパターン**が全セクションで使われる。CTAは全て**pill型**（border-radius 9999px）。見出し・CTAには `font-feature-settings: "palt"` を適用。本文は Helvetica Neue 先頭の欧文優先フォントスタック

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Vermillion / 朱色** (`#c73120`): ブランドの核。CTAボタン背景、英語セクションラベル、スクロールインジケータ、タグ枠線に使用。日本の伝統色「朱」に由来
- **Vermillion Dark** (`#a52819`): ホバー・プレス時（推定 15% 暗め）

### Semantic（意味的な色）

- **Danger** (`#c73120`): エラー表示（ブランドカラーと兼用）
- **Warning** (`#d97a00`): 警告
- **Success** (`#2e7d4f`): 成功

### Neutral（ニュートラル）

- **Text Primary** (`#262626`): 本文テキスト（純黒ではなく僅かに柔らかい墨色）
- **Text Secondary** (`#666666`): 補足テキスト・キャプション
- **Border** (`#dddddd`): 区切り線、入力欄の枠
- **Background** (`#ffffff`): ページ背景

### Surface（面色 — 和紙のような温度感）

- **Surface Warm** (`#fbf9f7`): 最も明るい温かみオフホワイト。セクション背景に多用
- **Surface Footer** (`#faf7f4`): フッター背景
- **Surface Deep** (`#f7f2ed`): より深い温かみのあるセクション背景

> **Note**: aeru の面色は全て**暖色系のオフホワイト**。純白 `#ffffff` と微妙に異なるクリーム調で、自然素材・手仕事の温もりを演出している。中川政七商店（無彩色グレー）とは対照的。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・UI全般）**:
- ヒラギノ角ゴ ProN / Hiragino Kaku Gothic ProN（macOS）
- ヒラギノ角ゴ Pro / Hiragino Sans（macOS）
- メイリオ / Meiryo（Windows）

### 3.2 欧文フォント

- **サンセリフ（本文）**: Helvetica Neue, Arial（フォントスタック先頭に配置、欧文優先）
- **サンセリフ（英語見出し）**: Roboto（Google Fonts、英語セクションラベル専用）

### 3.3 font-family 指定

```css
/* 本文・UI全般 */
font-family:
  "Helvetica Neue", Arial,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  Meiryo, sans-serif;

/* 英語セクションラベル（PHILOSOPHY, Follow us 等） */
font-family: Roboto, sans-serif;
```

**フォールバックの考え方**:
- **欧文フォントを先頭に配置**（Helvetica Neue → Arial）。和文フォント内蔵の欧文グリフではなく、Helvetica の欧文を優先する設計
- ヒラギノは **ProN（JIS2004字形）** を採用
- Roboto は英語のセクションラベル・UIテキスト（PHILOSOPHY, Scroll Down, Follow us, EN 等）専用

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| English Section Label | Roboto | 14.688px | 500 | 1.5 | 0.1em | 朱色 `#c73120`、セクション上部 |
| H2 Section Heading | body stack | 25.056px | 700 | 1.5 | 0.15em | `font-feature-settings: "palt"`、日本語見出し |
| Body Lead | body stack | 14.688px | 400 | 2.2 | 0.05em | リード文 |
| Body | body stack | 12.96px | 400 | 1.9 | 0.05em | 本文 |
| Card Title | body stack | 14.688px | 700 | 1.7 | 0.05em | カードタイトル |
| Sub Item | body stack | 12.96px | 400 | 1.5 | 0.05em | サブアイテム |
| CTA Button | body stack | 12.96px | 700 | — | 0.1em | `font-feature-settings: "palt"`、pill |
| Follow us | Roboto | 15.552px | 700 | — | 0.05em | SNSセクション見出し |
| Scroll Down | Roboto | 10.368px | 400 | — | 0.1em | スクロールインジケータ、白文字 |
| Nav Menu Item | body stack | 12.96px | 400 | — | 0.05em | ナビゲーションメニュー |
| Shop Menu Title | body stack | 13.824px | 700 | — | 0.05em | オンラインショップメニュー見出し |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.9**。日本語サイトとしてはゆったりめ（工芸品の静謐な空気感を演出）
- **リード文の行間**: **2.2**。さらに広い行間で、読み手にゆとりを与える
- **見出しの行間**: **1.5**
- **本文の字間 (letter-spacing)**: **0.05em**（全体に薄く字間を開けている）
- **見出しの字間**: **0.15em**（見出しはさらに広く）
- **英語ラベル・CTA**: **0.1em**

**ガイドライン**:
- aeru は本文にも `letter-spacing: 0.05em` を掛けている（ベタ組みではない）
- 見出しは 0.15em と広めに開け、日本語の一文字一文字を丁寧に見せる
- 英語ラベル・CTA は 0.1em で統一

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
word-break: normal;
line-break: strict;
```

- 工芸品名（例: 「愛媛県の砥部焼のそばちょこ」）は意味の切れ目で折り返す
- 価格・型番は折り返さない

### 3.7 OpenType 機能

```css
/* 見出し・CTA */
font-feature-settings: "palt" 1;

/* 本文 */
font-feature-settings: normal;
```

- **palt**: 見出し（h2、25px / letter-spacing 0.15em）とCTAボタンに適用。広い字間と組み合わせて、一文字ずつの存在感を出す
- **本文には palt を適用しない**（0.05em の均一な字間で可読性を保つ）

### 3.8 縦書き

- 該当なし（横書き運用）

---

## 4. Component Stylings

### Buttons

**Primary CTA（朱色 pill）**
- Background: `#c73120`
- Text: `#ffffff`
- Padding: `13.824px 51.84px 17.28px`（Medium） / `10.368px 47.52px 12.96px`（Normal）
- Border Radius: `9999px`（pill）
- Font Size: 12.96px / Weight 700 / letter-spacing 0.1em
- `font-feature-settings: "palt"`
- 例: 「オンラインショップ」「詳しくはこちら」

**Outlined Tag / Badge（朱色枠 pill）**
- Background: `transparent`
- Text: `#c73120`
- Border: 1px solid `#c73120`
- Border Radius: `9999px`（pill）
- Font Size: 12.96px / Weight 400
- 例: カテゴリタグ、フィルター

**Nav Button（透過 pill）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `rgba(255, 255, 255, 0.4)`
- Border Radius: `9999px`（pill）
- Padding: `7.776px 27.648px 8.64px 17.28px`
- 例: ナビバーの「Buy」ボタン

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Border (focus): 1px solid `#c73120`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font Size: 12.96px / Weight 400 / line-height 1.9

### Cards

- Background: `#ffffff` or `#fbf9f7`
- Border: なし（画像と余白で区切る）
- Border Radius: `0px`
- Padding: 画像直下にテキスト
- Shadow: なし

### Tags / Category Labels

- 朱色枠 pill: border 1px solid `#c73120` / text `#c73120` / bg transparent / radius 9999px
- 使用例: 「愛媛県」「徳島県」等の産地タグ

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | カード内の細かい間 |
| M | 16px | 要素間の基本間隔 |
| L | 24px | セクション内ブロック間 |
| XL | 48px | セクション間 |
| XXL | 80px | メジャー余白（ヒーロー上下等） |

### Container

- Max Width: 約 1100px
- Padding (horizontal): 24px

### Grid

- 商品カード: 3-4 カラム（PC） / 2 カラム（タブレット） / 1 カラム（SP）
- ガッターは 24px。ゆったりとした間隔

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラット運用が原則） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時のカード、ドロップダウン |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.1)` | モーダル、ダイアログ |

> aeru は中川政七商店と同様にフラットなデザインが基本。ただし面色の差（`#fff` / `#fbf9f7` / `#faf7f4` / `#f7f2ed`）が温かみのあるグラデーションとして機能し、暗いグレーではなくクリーム系で階層を作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- CTAボタンは全て `border-radius: 9999px` の **pill型** にする
- ブランドカラー朱色 `#c73120` はCTA・英語ラベル・タグ枠に使う
- 英語セクションラベル（Roboto 500）を朱色で上に、日本語見出しをその下に配置する **バイリンガルヘッダーパターン** を守る
- 面色は温かみのあるオフホワイト（`#fbf9f7` / `#faf7f4` / `#f7f2ed`）を使う
- 見出し・CTAには `font-feature-settings: "palt"` を適用する
- 見出しの `letter-spacing` は `0.15em` と広めに取る
- 本文の `letter-spacing` は `0.05em` を維持する
- 本文の `line-height` は `1.9` を守る（ゆったりとした組版）
- テキスト色は `#262626`（僅かに柔らかい墨色）を使う
- フォントスタックは Helvetica Neue を先頭に、欧文優先で組む

### Don't（禁止）

- ボタンに角張りの border-radius（0px や 4px）を使わない（aeru は全て pill）
- 朱色 `#c73120` 以外のアクセント色を追加しない（ブランドカラーは朱一色）
- 純黒 `#000000` をテキスト色に使わない（`#262626` を使う）
- 無彩色のグレー面（`#f5f5f5` 等）を使わない（温かみのあるクリーム系 `#fbf9f7` 等を使う）
- 英語セクションラベルなしに日本語見出しだけを配置しない（バイリンガルヘッダーパターンを守る）
- 本文に `palt` を適用しない（見出しとCTAのみ）
- 本文の `line-height` を 1.5 以下にしない（aeru のゆとりある組版に反する）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル（1カラム） |
| Tablet | 768-1023px | タブレット（2カラム） |
| Desktop | ≥ 1024px | デスクトップ（3-4カラム） |

### タッチターゲット

- 最小サイズ: 44px x 44px（pill CTA はパディングで確保）

### フォントサイズの調整

- モバイル本文は 12-14px を維持
- h2 25px はモバイルで 20-22px に縮小
- 英語ラベルサイズは据え置き

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (朱色): #c73120
Text Primary: #262626
Text Secondary: #666666
Background: #ffffff
Surface Warm: #fbf9f7
Surface Footer: #faf7f4
Surface Deep: #f7f2ed
Border: #dddddd
Font (Body): "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
Font (English Label): Roboto, sans-serif
Body Size: 12.96px / Weight 400 / line-height 1.9 / letter-spacing 0.05em
H2 Heading: 25px / Weight 700 / line-height 1.5 / letter-spacing 0.15em / palt
English Label: Roboto 14.7px / Weight 500 / letter-spacing 0.1em / color #c73120
CTA: bg #c73120 / text #fff / radius 9999px / Weight 700 / letter-spacing 0.1em / palt
Tag: border 1px solid #c73120 / text #c73120 / radius 9999px
font-feature-settings: "palt" (見出し・CTAのみ)
```

### プロンプト例

```
aeru のデザインシステムに従って、伝統工芸品紹介ページを作成してください。
- 背景: #ffffff、テキスト: #262626
- 本文フォント: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
- 英語セクションラベルは Roboto 500 / 14.7px / letter-spacing 0.1em / color #c73120 で見出し上部に配置
- 日本語見出しは 25px / Bold / letter-spacing 0.15em / font-feature-settings: "palt"
- 本文は 13px / line-height 1.9 / letter-spacing 0.05em
- リード文は 14.7px / line-height 2.2 / letter-spacing 0.05em
- CTAボタンは bg #c73120 / text #fff / border-radius 9999px (pill) / weight 700 / letter-spacing 0.1em / palt
- タグは border 1px solid #c73120 / text #c73120 / bg transparent / radius 9999px
- 面色はオフホワイト系: セクション背景 #fbf9f7、フッター #faf7f4、深い面 #f7f2ed
- 無彩色のグレー面（#f5f5f5等）は使わない
- 英語ラベル（PHILOSOPHY, PRODUCTS 等）+ 日本語見出しのバイリンガルヘッダーパターンを全セクションで使う
- box-shadow は使わず、温かみのある面色の差で階層を作る
```
