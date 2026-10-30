# DESIGN.md — JR East (JR東日本)

> JR東日本（https://www.jreast.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。Noto Sans JP をベースフォントとし、ブランドグリーン `#008803` を軸に、自然を想起させる多層のグリーンパレットで構成されている。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 鉄道・交通インフラとしての機能性と信頼感を最優先にした、実用本位のデザイン。自然・緑をモチーフとしたブランドカラーシステムで、安心感と親しみやすさを両立
- **密度**: 中〜高密度。運行情報・路線検索・エリア選択など、多くの情報を効率的に配置。カード型UIで整理
- **キーワード**: 信頼、機能的、自然、グリーン、インフラ
- **特徴**: 純粋な黒（`#000000`）ではなく `#202020` を使用。ブランドグリーン `#008803` から派生した5段階以上のグリーンパレットが最大の特徴。pill 型（`radius: 100px`）のCTAボタンと、角丸（`radius: 10px`）のカードリンクを使い分ける

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **JR East Green** (`#008803`): コーポレートグリーン。CTAボタン背景、ナビゲーションバッジ、アクセントに使用
- **JR East Green Dark** (`#007903`): 見出し・リンクテキスト用のグリーン（h3, h4の色）

### Green Palette（グリーン階層）

JR東日本のデザインの核心。自然を想起させる多層グリーンシステム：

- **Green Dark** (`#1b301b`): フッター背景、最も深いグリーン
- **Green Brand** (`#008803`): ブランドカラー。CTA背景
- **Green Muted** (`#93a594`): 控えめなグリーン。装飾ライン、薄いボーダー
- **Green Surface Mid** (`#bfd8bd`): 中間トーンのグリーン面。エリアタブ背景等
- **Green Surface Light** (`#dde7c7`): 薄いグリーン面。セクション背景（19要素で使用）
- **Green Surface Accent** (`#e9f1e8`): 運行情報セクション等のアクセント背景
- **Green Tint** (`#e4fbea`): 検索セクション背景（section::before 疑似要素）
- **Green Tint Light** (`#eefdf1`): 薄いグリーンティント
- **Green Surface Pale** (`#f9fbf9`): ほぼ白に近いグリーン。フォーム背景、カード背景

### Neutral（ニュートラル）

- **Text Primary** (`#202020`): 本文テキスト
- **Text Secondary** (`#333333`): 補助テキスト（駅検索ページ等）
- **Border** (`#dddddd`): 標準ボーダー
- **Border Strong** (`#e8e8e8`): 更新ボタン等のボーダー
- **Border Card** (`#dddddd`): カードリンクのボーダー（2px solid）
- **Border Light** (`#eeeeee`): 薄いボーダー
- **Background** (`#fafafa`): メインページ背景（ul::before 疑似要素経由）
- **Background Station** (`#f8f8f8`): 駅検索ページ背景
- **Surface** (`#ffffff`): カード面、ヘッダー
- **Surface Gray** (`#f7f7f7`): ニュートラルセクション背景

### Footer

- **Footer Background** (`#1b301b`): 深いグリーンの背景
- **Footer Surface** (`#202020`): コピーライト背景
- **Footer Text** (`#ffffff`): フッター内テキスト

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts、メインフォント）
- メイリオ / Meiryo（Windows フォールバック）
- ヒラギノ角ゴ ProN W3（macOS フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP 内蔵の欧文グリフを使用（欧文専用フォント未指定）
- **駅検索ページ**: Arial が一部要素（ズームコントロール等）で使用

### 3.3 font-family 指定

```css
/* トップページ・メインサイト */
font-family: "Noto Sans JP", メイリオ, Meiryo,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;

/* 駅検索ページ（レガシー） */
font-family: メイリオ, Meiryo,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP を先頭に指定（トップページ）。Google Fonts で提供されるため環境差が少ない
- 駅検索ページはレガシー構成で Noto Sans JP が未指定、メイリオが先頭
- 欧文フォントを先に置くパターンは採用していない（和文フォント優先）

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

**トップページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Display (h2) | 42px | 600 | 54.6px (×1.3) | normal | 「目的から探す」等の大見出し |
| Heading 2 | 22px | 600 | 28.6px (×1.3) | normal | 「現在の運行情報」等 |
| Heading 2 (sub) | 18px | 700 | 28.8px (×1.6) | normal | 「きっぷの払いもどし」等 |
| Heading 3 | 20px | 600 | 32px (×1.6) | normal | 「列車を検索」等（色: #007903） |
| Heading 4 | 20px | 600 | 32px (×1.6) | normal | カテゴリ見出し（色: #007903） |
| Body | 16px | 400 | 25.6px (×1.6) | normal | 本文テキスト |
| Nav (main) | 16px | 600 | 19.2px (×1.2) | normal | メインナビゲーション |
| Nav (sub) | 14px | 500 | 14px (×1.0) | normal | 「サービス一覧」ヘッダーリンク |
| Label | 14px | 600 | 22.4px (×1.6) | normal | フォームラベル「路線」等 |
| Label (small) | 13px | 600 | 20.8px (×1.6) | normal | フォームラベル「月」等 |

**駅検索ページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Heading 1 | 41px | 700 | 61.5px (×1.5) | normal | 「駅を検索」 |
| Heading 2 | 36px | 700 | 54px (×1.5) | normal | 「路線図から検索」 |
| Body | 14px | 400 | 21px (×1.5) | normal | レガシーページ本文 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body（トップ）: `25.6px` (16px × **1.6**)
- body（駅検索）: `21px` (14px × **1.5**)
- Display h2: `54.6px` (42px × **1.3**)
- Heading 2: `28.6px` (22px × **1.3**)
- Heading 3/4: `32px` (20px × **1.6**)
- ナビゲーション: `19.2px` (16px × **1.2**)

**字間 (letter-spacing)** — 実測値:
- すべての要素: `normal`（letter-spacing は一切適用されていない）

**ガイドライン**:
- JR東日本は `letter-spacing` を使用しない。すべてのテキストが `normal`
- `line-height` は要素によって 1.0〜1.6 の範囲で変動。本文は 1.6

### 3.6 禁則処理・改行ルール

```css
/* グローバル設定（body） */
word-wrap: break-word;
```

- 特別な禁則処理のCSS指定は検出されなかった
- ブラウザデフォルトの禁則処理に依存

### 3.7 OpenType 機能

```css
/* すべての要素で normal（palt 未使用） */
font-feature-settings: normal;
```

- **palt**: 未使用。どの要素にも適用されていない
- JR東日本のデザインは、字詰めに頼らず等幅配置でシンプルに保つ方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill 型）**
- Background: `#008803`
- Text: `#ffffff`
- Border: 1px solid `#008803`
- Border Radius: 100px（pill）
- Font Size: 18px
- Font Weight: 600
- 例: 「「えきねっと」で検索」

**Secondary CTA（pill outline）**
- Background: `#ffffff`
- Text: `#007903`
- Border: 1px solid `#008803`
- Border Radius: 100px（pill）
- Font Size: 18px
- Font Weight: 600
- 例: 「鉄道・きっぷトップ」

**Header Link（pill）**
- Background: `transparent`
- Text: `#202020`
- Border: 1px solid `#dddddd`
- Border Radius: 100px（pill）
- Font Size: 16px
- Font Weight: 400
- Padding: 8px 44px 8px 24px
- 例: 「サービス一覧」

**Area Tab（角丸タブ）**
- Background: `#ffffff`
- Text: `#333333`
- Border: none
- Border Radius: 6px
- Font Size: 18px
- Font Weight: 700
- Padding: 16px 5px
- 例: 「関東エリア」「東北エリア」「新幹線」

**Update Button（角丸 small）**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#e8e8e8`
- Border Radius: 12px
- Font Size: 15px
- Font Weight: 600
- 例: 「更新」

### Cards（カードリンク）

**Image Link Card**
- Background: `#ffffff`
- Border: 2px solid `#dddddd`
- Border Radius: 10px
- Padding: 24px 8px
- Font Size: 16px
- Font Weight: 400
- 例: 「駅を探す」「路線図」「きっぷの予約」

**Logo Link Card（大型）**
- Background: `#ffffff`
- Border: 2px solid `#dddddd`
- Border Radius: 10px
- Padding: 32px 24px 32px 32px
- 例: 旅行サービス紹介カード

### Select（ドロップダウン）

- Background: `#f9fbf9`（グリーンペール）
- Text: `#202020`
- Border: 1px solid `#dddddd`
- Border Radius: 3px
- Font Size: 16px（トップ）/ 15px（駅検索）
- Padding: 8px 24px 8px 16px

### Navigation

- Background: `transparent`（白いヘッダー上）
- メインナビ: 16px / 600 / ボタン型（padding 下 27px にアクティブインジケーター用余白）
- ヘッダー高さ: 白背景、ロゴ + ナビゲーション + 言語切替 + サービス一覧ボタン

---

## 5. Layout Principles

### Container

- メインコンテンツは画面幅に応じたレスポンシブ構成
- カードグリッド: 横スクロール型（Swiper）とグリッド型を併用

### Spacing

- パディングのベース単位は 8px（8, 16, 24, 32, 44, 72px が頻出）
- カード内パディング: 24px 8px（標準）/ 32px 24px（大型）

### Grid

- トップページ: セクションごとにカードグリッドを切り替え
- エリアタブ: 横並びタブ + コンテンツ切り替え
- 「目的から探す」セクション: 4列×2行のアイコンカードグリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほとんどの要素。フラットデザインが基本 |
| 1 | ボーダーのみ（2px solid #ddd） | カードリンク |

- JR東日本はシャドウをほぼ使用しない、フラットなデザイン
- カードの区切りはボーダー（1px or 2px solid）で表現
- ホバー時のシャドウ追加などの動的エレベーションも確認されなかった

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#202020` を使い、純粋な `#000000` を避ける
- CTAボタンは `border-radius: 100px` のpill型にする
- ブランドグリーン `#008803` はCTAボタンとアクセントに使い、テキストには `#007903` を使う
- カードリンクには `border: 2px solid #dddddd` + `border-radius: 10px` を適用する
- 複数のグリーン階調を使い分け、面の奥行きを色で表現する（シャドウではなく色で階層を表す）
- フォームの背景には `#f9fbf9`（グリーンペール）を使う
- フッターは `#1b301b`（深いグリーン）で締める

### Don't（禁止）

- `letter-spacing` や `font-feature-settings: "palt"` を適用しない（実サイトではすべて `normal`）
- シャドウ（`box-shadow`）を多用しない（フラットデザインが基本方針）
- ブランドグリーン `#008803` をテキスト色に直接使わない（見出しには `#007903` を使う）
- カードにシャドウを付けない（ボーダーで区切る）
- 角丸を 10px と 100px 以外のサイズで使わない（タブの 6px、セレクトの 3px、更新ボタンの 12px を除く）
- ダークモードを実装しない（JR東日本はライトモードのみ）

---

## 8. Responsive Behavior

### Breakpoints

- 実サイトの具体的なブレークポイント値は抽出データから特定できなかったが、トップページはレスポンシブ対応

### タッチターゲット

- 最小サイズ: Swiper ナビゲーションサイズ `44px`（`--swiper-navigation-size: 44px`）
- エリアタブ: padding 16px で十分なタッチ領域を確保

### フォントサイズの調整

- トップページ: 本文 16px をベースに、見出しは 18〜42px まで幅広く使い分け
- 駅検索ページ: レガシー構成で本文 14px ベース

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #008803（JR East Green）
Brand Text: #007903（見出しのグリーンテキスト）
Text Primary: #202020
Text Secondary: #333333
Background: #fafafa
Surface: #ffffff
Border: #dddddd
Footer: #1b301b

Font: "Noto Sans JP", メイリオ, Meiryo,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif

Body Size: 16px / line-height: 1.6 / letter-spacing: normal
palt: 未使用（全要素 normal）
CTA: pill 型 radius 100px, bg #008803
Card: border 2px solid #ddd, radius 10px
```

### プロンプト例

```
JR東日本のデザインに従って、列車検索結果ページを作成してください。
- フォント: "Noto Sans JP", メイリオ, Meiryo,
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif
- テキスト色: #202020（純粋な黒は使わない）
- ブランドグリーン: #008803（CTAボタン背景）
- 見出しのグリーン: #007903
- 背景: #fafafa、セクション背景: グリーン階調を使い分け
- ボーダー: #dddddd
- CTAボタン: pill 型 border-radius: 100px、背景 #008803、文字 #fff
- カード: border: 2px solid #ddd、border-radius: 10px
- letter-spacing: normal（palt は使わない）
- シャドウは使わず、ボーダーとグリーン階調で奥行きを表現
```
