# DESIGN.md — cowcamo（カウカモ）

> cowcamo（https://cowcamo.jp/）のデザイン仕様書。
> リノベーション済みマンションに特化した不動産マーケットプレイス。物件検索・詳細閲覧と、暮らしにまつわる読み物（マガジン）の二軸で構成される。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: クールグレーの背景 `#f3f7f8` に**ティール `#00cbd6` の CTA** を載せた、清潔感のある不動産マーケットプレイス。物件写真を主役にするため装飾は控えめで、ボタンの角丸も `2〜4px` と小さく角張った印象を保つ
- **密度**: 物件一覧は情報密度が高い（価格・面積・最寄り駅・築年数を小さな面積に集約）。マガジン側は editorial な余白でゆったり
- **キーワード**: クールグレー、ティールアクセント、フラット、物件写真ファースト、二面性（マーケットプレイス × マガジン）
- **特徴**:
  - **フォントが二系統ある**: 物件検索側は `Helvetica, sans-serif`（システムフォント依存）、マガジン側は `YuGothic, "Yu Gothic", 游ゴシック` を明示指定。同一ドメインでフォント方針が分かれる珍しい構成
  - **ブランドカラーは `#00cbd6`（ティール／シアン）**。検索ボタン・アプリDL CTA に使用。彩度が高く、クールグレーの背景との対比で目を引く
  - **アクセントピンク `#ff2c4f`** はマガジンセクションのカテゴリヘッダーやリンクに使用。物件側には登場しない
  - サーフェスに `#f3f7f8`（青みを帯びた極薄グレー）を使い、物件カードの白 `#ffffff` との明度差で階層を作る
  - テキストは `#414141` が基本。純黒 `#000000` ではなくソフトブラックを採用
  - ボタンは `2〜4px` radius の**角張ったスタイル**。pill ボタンは使わない
  - ボーダーは `#dbe2e4`（青みグレー）で統一。ウォーム系ではなくクール系
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Teal** (`#00cbd6`): メインのブランドカラー。検索ボタン・「アプリを使う」CTA の背景色
- **Magazine Pink** (`#ff2c4f`): マガジンセクション専用のアクセント色。カテゴリ見出し・記事リンクに使用。物件検索側では使わない

### CTA / Buttons

- **Primary CTA**: 背景 `#00cbd6` / 文字 `#ffffff` / radius `2px` / フォーム内の検索ボタン・アプリ訴求
- **Filter Button**: 背景 `#ffffff` / 文字 `#414141` / radius `4px` / 物件絞り込み
- **Login / Register**: 背景 `#ffffff` / 文字 `#414141` / radius `2px` / ヘッダー内

### Social

- **Facebook Share** (`#1877f2`): ソーシャル共有ボタン

### Neutral — Cool Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Soft Black | `#414141` | (65, 65, 65) | 本文テキスト・主要テキスト |
| Dark Gray | `#333333` | (51, 51, 51) | カード内の補強テキスト・価格 |
| Border | `#dbe2e4` | (219, 226, 228) | 区切り線・カード枠線（**クール傾向**: B>R） |
| Cool Surface | `#f3f7f8` | (243, 247, 248) | ページ背景（**クール傾向**: B>R） |
| White | `#ffffff` | (255, 255, 255) | カード背景・ヘッダー |

### Overlay

- **Dark Overlay**: `rgba(0, 0, 0, 0.8)` — モーダル・画像オーバーレイ
- **Price Overlay**: 物件サムネイル上の価格表示は白文字 `#ffffff` + 暗い半透明背景

### Semantic（実測未確認・推奨値）

実サイトの物件検索 UI にはエラー・成功色が表面化していない。推奨補完値:

- **Danger**: `#e53e3e` 程度の赤（フォームバリデーション用）
- **Success**: `#38a169` 程度の緑
- **Warning**: `#d69e2e` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **マーケットプレイス側**: 和文フォントの明示指定なし。`Helvetica, sans-serif` のみ → OS の和文システムフォント（macOS: Hiragino Kaku Gothic ProN / Windows: Yu Gothic / Meiryo）にフォールバック
- **マガジン側**: **游ゴシック**を最優先に指定。`YuGothic, "Yu Gothic", 游ゴシック, 游ゴシック体`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **マーケットプレイス側**: Helvetica を明示指定。Helvetica 不在時は sans-serif generic
- **マガジン側の英語見出し**: `Avenir, sans-serif`（"WHAT'S NEW" 等のセクションラベル）および `Helvetica, Roboto, sans-serif`（その他の欧文見出し）
- **マガジン側の英語見出し letter-spacing**: `1.2px` — 欧文大文字のトラッキングを広げてエディトリアルな印象を出す

### 3.3 font-family 指定

```css
/* マーケットプレイス側（トップページ・物件検索・物件詳細） */
font-family: Helvetica, sans-serif;

/* マガジン側（cowcamo MAGAZINE） */
font-family: YuGothic, "Yu Gothic", "游ゴシック", "游ゴシック体",
  "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", sans-serif;

/* マガジン内の英語見出し（"WHAT'S NEW", "EDITOR'S PICKS" 等） */
font-family: Avenir, sans-serif;

/* マガジン内のその他英語見出し */
font-family: Helvetica, Roboto, sans-serif;
```

**フォールバックの考え方**:
- マーケットプレイス側は Helvetica + generic sans-serif のみの軽量指定。和文は完全に OS 任せ
- マガジン側は YuGothic を最優先し、Windows の Yu Gothic → メイリオ → Hiragino（macOS）→ generic の順でフォールバック
- **二系統を混在させないこと**: マーケットプレイス系コンポーネントにはマーケットプレイス側の指定を、マガジン系にはマガジン側の指定を使う

> **代替フォント注記**: マガジン側の游ゴシックは Windows 環境で細く見える問題がある。preview.html では **Noto Sans JP** をフォールバック先に追加し、游ゴシック不在環境でも近い印象を確保する。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・マガジンページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H3 (Top) | Helvetica | 24–30px | 600–700 | 36–45px (x1.5) | normal | `#414141` | "新着物件"・エリア名等 |
| Magazine Section Label | Avenir | 14–16px | 600 | 21–24px (x1.5) | 1.2px (0.075em) | `#414141` | "WHAT'S NEW"・"EDITOR'S PICKS" |
| H2 | Helvetica | 14–16px | 600 | 21–24px (x1.5) | 0.1px | `#414141` | サブセクション見出し |
| Body (Top) | Helvetica | 14px | 400 | 21px (x**1.5**) | normal | `#414141` | 物件検索側の本文 |
| Body (Magazine) | YuGothic | 16px | 400 | 24px (x**1.5**) | normal | `#414141` | マガジン記事の本文 |
| Caption / Meta | Helvetica | 12px | 400 | 18px (x1.5) | 0.1px | `#414141` | 物件メタ情報（面積・築年数等） |
| Price | Helvetica | 16px | 400 | normal | normal | `#ffffff` | オーバーレイ上の価格表示 |
| H1 (Logo) | Helvetica | 14px | 700 | normal | normal | `#414141` | ロゴ／サイト名エリア |
| Nav Link | Helvetica | 14px | 400 | 21px (x1.5) | normal | `#414141` | ヘッダーナビ |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px / Top)**: `1.5`（21px / 14px）
- **本文 (16px / Magazine)**: `1.5`（24px / 16px）
- **補助テキスト (12px)**: `1.5`（18px / 12px）
- **見出し (24–30px)**: `1.5`（36–45px）— 見出しも本文と同じ比率
- **ナビ**: `1.5`

**字間 (letter-spacing)** — 実測:
- **本文・ナビ**: `normal`（明示指定なし）
- **見出し・メタ**: `0.1px` 程度（微量）
- **マガジン英語見出し**: `1.2px`（約 0.075em）— 大文字トラッキングで editorial 感

**ガイドライン**:
- cowcamo は全体的に `line-height: 1.5` で統一。STORES (1.75) や note (2.0) より控えめ
- letter-spacing は原則 `normal`。情報密度を優先し、詰めも広げもしない
- マガジン英語見出しだけ例外的にトラッキングを広げる（`1.2px`）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;         /* 物件情報の長い住所・駅名の折り返し */
overflow-wrap: break-word;     /* 長い URL の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- 物件カード内は狭いスペースに情報を詰めるため `break-all` が実用的
- マガジン記事本文は `word-break: normal` でも可

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- マーケットプレイス側は Helvetica ベースで和文グリフを持たないため `palt` は不要
- マガジン側の游ゴシックも `palt` 未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ティール）** — 検索ボタン・「アプリを使う」
- Background: `#00cbd6`
- Text: `#ffffff`
- Padding: フォーム内に収まるサイズ（`8px 16px` 程度）
- Border Radius: `2px`
- Font: Helvetica, 14px, weight 600
- Border: none

**Filter Button（白）** — 物件絞り込みフィルター
- Background: `#ffffff`
- Text: `#414141`
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: Helvetica, 14px, weight 400
- Border: `1px solid #dbe2e4`

**Login / Register（白）** — ヘッダー内
- Background: `#ffffff`
- Text: `#414141`
- Padding: `6px 12px`
- Border Radius: `2px`
- Font: Helvetica, 14px, weight 400
- Border: `1px solid #dbe2e4`

**Magazine Link（ピンク）** — マガジン内のカテゴリリンク
- Background: transparent
- Text: `#ff2c4f`
- Font: YuGothic, 14px, weight 600
- Border: none
- Text Decoration: none（ホバー時 underline）

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dbe2e4`
- Border (focus): `1px solid #00cbd6`（推奨。ブランドカラーでフォーカス表示）
- Border Radius: `2px`
- Padding: `8px 12px`
- Font: Helvetica, 16px, weight 400（iOS のズーム防止のため 16px）
- Height: `40px`

### Cards

**物件カード**
- Background: `#ffffff`
- Border: `1px solid #dbe2e4` または border なし
- Border Radius: `0px`（角なし。写真を矩形に切り取る不動産慣習）
- Shadow: なし（フラット）
- 画像比率: 横長（約 3:2）
- 価格表示: 画像オーバーレイ上に白文字

**マガジン記事カード**
- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`
- Shadow: なし
- 画像比率: 横長（約 16:9）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #dbe2e4`
- Position: `fixed` or `sticky`

### Footer

- Background: `#ffffff` または `#f3f7f8`
- Border Top: `1px solid #dbe2e4`
- Padding: `40px 16px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間・メタ情報の区切り |
| S | 8px | カード内の要素間・ボタン内パディング |
| M | 16px | カード内のセクション間・リスト項目間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 40px | セクション間の縦余白 |
| XXL | 64px | ページセクション間の大きな区切り |

### Container

- Max Width: `1040–1200px` 程度（物件一覧グリッドの幅）
- Padding (horizontal): mobile `16px` / desktop `24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0px | 物件カード・画像 |
| Small | 2px | ボタン・入力欄 |
| Medium | 4px | フィルターボタン・タグ |

### Grid

- 物件一覧: 2〜3カラムグリッド（レスポンシブ）
- マガジン: 2〜3カラムグリッド
- Gutter: 16–24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.08)` | ドロップダウン・検索サジェスト |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.15)` | モーダル・画像ライトボックス |

- 実測ではほぼ全要素 `box-shadow: none`
- **フラットデザイン**が基本。物件写真がビジュアルの主役のため、UIパーツは控えめ
- 立体感は `#f3f7f8` と `#ffffff` の明度差、およびボーダー `#dbe2e4` で表現
- モーダルオーバーレイは `rgba(0, 0, 0, 0.8)` と暗め

---

## 7. Do's and Don'ts

### Do（推奨）

- **マーケットプレイス側**と**マガジン側**でフォント指定を使い分ける。混在させない
- 本文の line-height は **1.5** を基本にする
- テキスト色は **`#414141`**（ソフトブラック）。純黒 `#000000` は使わない
- 主要 CTA は **`#00cbd6`（ティール）** の背景に白文字。小さな角丸 `2px`
- ページ背景は **`#f3f7f8`（クールグレー）** を使い、カードは白 `#ffffff` で浮かせる
- ボーダーは **`#dbe2e4`（クールグレー）** で統一
- 物件カードの画像は **角丸なし**（矩形のまま。不動産写真の真実味を保つ）
- マガジン英語見出し（"WHAT'S NEW" 等）は **letter-spacing 1.2px** で広げる
- **`#ff2c4f`（ピンク）はマガジン側でのみ使う**。物件検索側には登場させない

### Don't（禁止）

- **pill ボタン（radius 9999px）を使わない** — cowcamo は `2〜4px` のシャープな角丸が基本
- 物件カードに **box-shadow を常時付けない**（フラットが基本）
- マーケットプレイス側に **YuGothic を指定しない**（Helvetica + system sans-serif のみ）
- マガジン側に **Helvetica 単体で指定しない**（YuGothic ベースのフォールバックチェーンを使う）
- **ウォームグレー**（`#f2f2f0`、`#737368` 等の R=G>B 系）を使わない。cowcamo はクールグレー（B>R）
- テキスト色に **純黒 `#000000` を使わない**（`#414141` のソフトブラックが基本）
- **`#ff2c4f`（ピンク）を物件検索側で使わない** — マガジン専用のアクセント色
- line-height を **1.5 より大きくしない**（情報密度を保つ設計意図を壊す）
- letter-spacing を **広くトラッキングしない**（マガジン英語見出し以外は normal が基本）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。物件カードは1カラム |
| Tablet | 768–1023px | タブレット。物件カードは2カラム |
| Desktop | ≥ 1024px | デスクトップ。物件カードは3カラム、サイドバーフィルター表示 |

### モバイル時の調整

- 物件一覧: 3カラム → 2カラム → 1カラム
- セクション見出し: 24–30px → 20–24px
- 本文サイズは 14px を維持
- マガジン本文は 16px を維持
- 検索バーはヘッダー内に統合またはハンバーガーメニュー内

### タッチターゲット

- 主要 CTA: 高さ 40px 以上
- フィルターボタン: 高さ 36px 以上
- 物件カード全体がタップ領域

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Teal (CTA): #00cbd6
Magazine Pink (Magazine only): #ff2c4f
Soft Black (Text): #414141
Dark Gray (Card text): #333333
Border: #dbe2e4
Cool Surface (BG): #f3f7f8
White (Card): #ffffff
Dark Overlay: rgba(0, 0, 0, 0.8)

Font (Marketplace): Helvetica, sans-serif
Font (Magazine): YuGothic, "Yu Gothic", "游ゴシック", "游ゴシック体",
  "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", sans-serif
Font (Magazine English Headings): Avenir, sans-serif

Body Size (Top): 14px / line-height 1.5 / weight 400
Body Size (Magazine): 16px / line-height 1.5 / weight 400
Section Heading: 24-30px / line-height 1.5 / weight 600-700
Caption: 12px / line-height 1.5 / letter-spacing 0.1px

Border Radius: 2px（ボタン）/ 4px（フィルター）/ 0px（カード画像）
Shadow: 基本 none。階層は #f3f7f8 と #ffffff の明度差で表現
```

### プロンプト例

```
cowcamo のデザインに従って、リノベーション物件の検索結果一覧を作成してください。
- フォント (物件側): Helvetica, sans-serif
- セクション見出し: 24px / weight 700 / line-height 1.5 / color #414141
- 本文: 14px / weight 400 / line-height 1.5 / color #414141
- 補助テキスト: 12px / weight 400 / line-height 1.5 / letter-spacing 0.1px / color #414141
- 主要 CTA: 背景 #00cbd6（ティール）/ 白文字 / border-radius 2px / 14px / weight 600
- フィルターボタン: 背景 白 / 文字 #414141 / border 1px solid #dbe2e4 / radius 4px
- 物件カード: 背景 白 #ffffff / border なしまたは 1px solid #dbe2e4 / radius 0px / shadow none
- ページ背景: #f3f7f8（クールグレー）
- ボーダー: #dbe2e4
- 価格表示: 物件画像上にオーバーレイで白文字
- テキスト色は #414141。純黒 #000000 は使わない
- pill ボタンは使わない。角丸は 2-4px のシャープなスタイル
- box-shadow は基本 none。フラットデザイン
```

```
cowcamo MAGAZINE のデザインに従って、リノベーション暮らしの記事一覧を作成してください。
- フォント (マガジン側): YuGothic, "Yu Gothic", "游ゴシック", "游ゴシック体", "メイリオ", Meiryo, sans-serif
- 英語セクションラベル: Avenir, sans-serif / 14px / weight 600 / letter-spacing 1.2px / 全大文字
- 記事本文: 16px / weight 400 / line-height 1.5 / color #414141
- カテゴリリンク: #ff2c4f（ピンク）/ weight 600
- 記事カード: 背景 白 / radius 0px / shadow none
- ページ背景: #f3f7f8
- ピンク #ff2c4f はマガジン内でのみ使う。物件検索側には使わない
```
