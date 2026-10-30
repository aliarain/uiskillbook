# DESIGN.md -- COEDO Brewery (コエドブルワリー)

> COEDO Brewery 公式オンラインストア (https://coedobrewery.com/) のデザイン仕様書。
> 埼玉県川越発のクラフトビールブランド。「瑠璃」「伽羅」「紅赤」「白」「漆黒」「毬花」の定番6銘柄で知られる。
> セリフ書体を全面採用した珍しい日本語ECサイト。実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: セリフ書体を全面採用し、クラフトビールの「手仕事」「伝統」「格式」を視覚的に表現。日本語ECサイトとしてはきわめて珍しいセリフファーストの構成
- **密度**: 余白を十分にとったプロダクトショーケース型。商品画像を整列させたグリッドレイアウトで、情報密度は中程度
- **キーワード**: セリフ、クラフト、ヘリテージ、ゴールドアクセント、角丸ゼロ
- **特徴**: **システムセリフスタック (`"New York"`, `"Iowan Old Style"`, `"Apple Garamond"`, `Baskerville`, `"Times New Roman"`) を使い、Web フォントに依存しない軽量設計**。`border-radius: 0px` を全コンポーネントに徹底し、直線的でシャープな印象を通す。ゴールド `#ab8c52` をセカンダリCTAに使い、クラフトビールのプレミアム感を演出。ボタン・ラベル類は一律 `letter-spacing: 0.1em` で広めにトラッキングし、ゆとりのある佇まいを作る

---

## 2. Color Palette & Roles

### Primary (ブランドカラー)

- **Primary** (`#212121`): CSS Custom Property `--COLOR-PRIMARY`。CTA ボタン背景、テキスト主色を兼ねるダークグレー
- **Primary Hover** (`#000000`): `--COLOR-PRIMARY-HOVER`。ホバー時に純黒へ
- **Primary Light** (`#855656`): `--COLOR-PRIMARY-LIGHT`。赤みのあるブラウン。セール文言やアクセントに使用
- **Gold** (`#ab8c52`): セカンダリCTAの背景色。カートボタン、限定ラベルなどプレミアム感を出す要素に使用

### Semantic (意味的な色)

- **Sale** (`#d20000`): `--COLOR-SALE`。セール価格・値引き表示
- **Error** (`#721c24`): `--COLOR-ERROR`。フォームエラーテキスト
- **Error Background** (`#f8d7da`): `--COLOR-ERROR-BG`。エラーメッセージの背景
- **Cart Badge** (`#f50057`): カートアイコンのバッジ（ピンク寄りの赤）

### Neutral (ニュートラル)

- **Text Primary** (`#212121`): `--COLOR-TEXT`。本文テキスト
- **Text Light** (`#646464`): `--COLOR-TEXT-LIGHT`。補足テキスト、商品説明
- **Text Dark** (`#000000`): `--COLOR-TEXT-DARK`。最も強い強調テキスト
- **Border** (`#f0f0f0`): `--COLOR-BORDER`。カード・セクション間の区切り
- **Border Dark** (`#bdbdbd`): `--COLOR-BORDER-DARK`。フォーム入力欄の枠線
- **Background** (`#ffffff`): `--COLOR-BG`。ページ背景
- **Background Secondary** (`#f7f9fa`): `--COLOR-BG-SECONDARY`。商品セクション・カードの面色。**最頻出の面色（54要素）**
- **Background Brighter** (`#f2f2f2`): `--COLOR-BG-BRIGHTER`。フッター・補助セクション
- **Notification Bar** (`#8b8888`): 通知バーの背景。グレー寄りのニュートラル

> **Note**: COEDO の配色は **モノトーン + ゴールド** の2軸。ブランドカラーは `#212121` のダークグレーで、鮮やかな原色は使わない。ゴールド `#ab8c52` だけがアクセントとして差し色になり、クラフトの格調を支える。

---

## 3. Typography Rules

### 3.1 和文フォント

**セリフ体（メイン）**: システムセリフスタックのフォールバックに含まれる和文セリフ書体で表示される。明示的な和文フォント指定はなく、OS のシステムセリフに委ねる設計

### 3.2 欧文フォント

- **セリフ（本文・見出し共通）**: New York, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro

### 3.3 font-family 指定

```css
/* 全体 — セリフスタック一本で統一 */
font-family: "New York", "Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif;
```

**フォールバックの考え方**:
- Apple デバイスでは New York / Iowan Old Style が優先され、エレガントなセリフで描画
- Android では Droid Serif、Linux では Source Serif Pro が対応
- 和文グリフは OS のセリフ総称ファミリに委ねる（macOS ではヒラギノ明朝系）
- **明示的な和文フォント名は指定していない** — 軽量さとクロスプラットフォーム対応のためのシステムフォント戦略

**Google Fonts 代替（preview.html 等での再現用）**:
- 欧文: EB Garamond（クラシカルなオールドスタイル・セリフ）
- 和文: Noto Serif JP（明朝体のフォールバック）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H2 Section | Serif stack | 27px | 400 | 1.2 | normal | セクション見出し。**太字ではなく Regular** |
| H3 Subsection | Serif stack | 22px | 400 | 1.2 | 0.1em | サブセクション。広めのトラッキング |
| Body | Serif stack | 13.6px | 400 | normal | normal | 本文。やや小さめ |
| Button | Serif stack | 13px | 400 | 1.375 | 0.1em | CTA テキスト。0.1em の字間が特徴 |
| Product Title | Serif stack | 14px | 400 | 1.375 | 0.1em | 商品名 |
| Price | Serif stack | 14px | 400 | 1.375 | 0.02em | 価格表示 |
| Footer Link | Serif stack | 12px | 400 | 1.375 | 0.1em | フッターナビ |
| Badge | Serif stack | 10px | 400 | 1.36 | 0.1em | セール・限定バッジ |

> **Note**: 全階層で **weight 400（Regular）のみ** を使用。太字は一切使わない。セリフ書体の持つ自然な字形コントラストと、サイズ・字間の違いだけで情報の階層を表現する。

### 3.5 行間・字間

- **本文の行間 (line-height)**: normal（ブラウザデフォルト、約 1.2）
- **見出しの行間**: 1.2
- **本文の字間 (letter-spacing)**: normal
- **ボタン・ラベルの字間**: 0.1em — 全ボタン・商品名・フッターリンクに一律適用

**ガイドライン**:
- 見出しと本文で字間の設定が大きく異なる。見出しは normal、ラベル系は 0.1em
- 行間は欧文サイト寄りのタイトな設定（日本語サイトとしてはかなり詰まっている）
- セリフ書体の字形自体が視覚的なリズムを作るため、過度な行間拡張を避けている

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

明示的な `font-feature-settings` の指定なし。システムセリフのデフォルト設定に依存。

- **palt**: 未使用。セリフ書体の字間を自然なまま保つ方針
- **kern**: ブラウザデフォルトの `auto` に依存

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

**Primary Solid**
- Background: `#212121`
- Text: `#ffffff`
- Padding: 10px 18px
- Border Radius: 0px
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 0.1em
- Hover: background `#000000`

**Secondary Solid (Gold)**
- Background: `#ab8c52`
- Text: `#ffffff`
- Padding: 7px 12px
- Border Radius: 0px
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 0.1em
- Hover: opacity 0.85

**Outline**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Padding: 7px 12px
- Border Radius: 0px
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 0.1em

**Text Button**
- Background: transparent
- Text: `#212121`
- Border: none
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 0.1em
- Text Decoration: underline on hover

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#bdbdbd`
- Border (focus): 1px solid `#212121`
- Border Radius: 0px
- Padding: 8px 12px
- Font Size: 13.6px
- Font Family: セリフスタック（本文と同一）

### Cards

- Background: `#ffffff`
- Border: 1px solid `#f0f0f0`
- Border Radius: 0px
- Padding: 0（画像が直接カード上端に配置）
- Shadow: `0px 2px 6px rgba(0,0,0,0.04), 0px 2px 2px rgba(0,0,0,0.02)`（カルーセル内のみ）

### Badges

- Background: `#212121`
- Text: `#ffffff`
- Padding: 4px 8px
- Font Size: 10px
- Letter Spacing: 0.1em
- Border Radius: 0px

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 64px |

### Container

- Max Width: 1200px
- Padding (horizontal): 20px

### Grid

- Product Grid: 4 columns（デスクトップ）/ 2 columns（モバイル）
- Gutter: 16px
- 商品画像はアスペクト比 1:1 で統一

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準状態のカード・ボタン。**フラットが基本** |
| 1 | `0px 2px 6px rgba(0,0,0,0.04), 0px 2px 2px rgba(0,0,0,0.02)` | Flickity カルーセルのナビゲーションボタン |
| 2 | `0px 4px 12px rgba(0,0,0,0.08)` | ドロップダウンメニュー・ポップオーバー |

> **Note**: COEDO のデザインは **フラット指向**。影はカルーセルのナビボタン程度にしか使わず、カード自体はボーダーまたは背景色の切り替えで区切る。`border-radius: 0px` と合わせて、直線的でシャープな世界観を徹底。

---

## 7. Do's and Don'ts

### Do (推奨)

- セリフ書体を一貫して使用する — ゴシック体を混在させない
- ボタン・ラベル類は `letter-spacing: 0.1em` を必ず設定する
- `border-radius: 0px` を徹底する — pill やソフトな角丸は使わない
- ゴールド `#ab8c52` はセカンダリCTAや限定要素にのみ使い、プレミアム感を保つ
- `font-weight: 400` のみで階層を表現する — サイズと字間で差をつける
- 商品画像は 1:1 のスクエアで統一する

### Don't (禁止)

- ゴシック体・サンセリフ体を使わない — ブランドのセリフ・ヘリテージ感を壊す
- `font-weight: 700` や bold を使わない — 全体が weight 400 で統一されている
- `border-radius` を 1px 以上にしない — 角丸は世界観を壊す
- ゴールド `#ab8c52` を本文テキストや大面積の背景に使わない — アクセントに留める
- 純黒 `#000000` を本文テキストに多用しない — 基本は `#212121`
- 過度な影（`box-shadow`）を使わない — フラットなデザインが基本

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 749px | 1 カラム、ハンバーガーメニュー |
| Tablet | <= 989px | 2 カラムグリッド |
| Desktop | > 989px | 4 カラムグリッド、フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px x 44px (WCAG 基準)

### フォントサイズの調整

- モバイルでは本文 13.6px を維持（既に小さめのため縮小しない）
- 見出し H2 は 27px -> 22px 程度に縮小
- 商品グリッドは 4 列 -> 2 列に変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #212121
Gold Accent: #ab8c52
Text Color: #212121
Text Light: #646464
Background: #ffffff
Background Secondary: #f7f9fa
Border: #f0f0f0
Font: "New York", "Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif
Body Size: 13.6px
Font Weight: 400 (all elements)
Line Height: normal (body), 1.2 (headings)
Letter Spacing: 0.1em (buttons, labels), normal (body)
Border Radius: 0px (all elements)
```

### プロンプト例

```
COEDO Brewery のデザインシステムに従って、商品一覧ページを作成してください。
- フォント: "New York", "Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", serif
- font-weight は全要素 400 のみ
- プライマリカラー: #212121
- ゴールドアクセント: #ab8c52 (セカンダリ CTA のみ)
- 背景: #ffffff (メイン), #f7f9fa (商品セクション)
- border-radius: 0px を徹底
- ボタンの letter-spacing: 0.1em
- 商品画像: 1:1 スクエア
- グリッド: 4 列 (デスクトップ), 2 列 (モバイル)
```
