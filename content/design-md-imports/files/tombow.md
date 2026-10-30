# DESIGN.md — TOMBOW（トンボ鉛筆）

> トンボ鉛筆（https://www.tombow.com/）のデザイン仕様書。
> 1913年創業の総合文具メーカー。MONO消しゴム、ABTデュアルブラシペン、PiTのり等で知られる。
> 実サイトの computed style 実測（2026-06-20 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調にしたクリーンなコーポレートサイト。**ディープクリムゾン `#b70031` のブランドカラー**がロゴ・CTA・リンクに一貫して使われ、老舗文具メーカーの品格と信頼感を表現。欧文セクション見出し（"NEWS"、"BRAND"）を weight 300 + 広い letter-spacing で大きく配置し、エディトリアルな印象を作る
- **密度**: 本文の line-height は 1.68 とやや広め。body 全体に `letter-spacing: 1px` を指定し、日本語の読みやすさを確保。セクション見出しはさらに `letter-spacing: 4px` と大きく空ける
- **キーワード**: ディープクリムゾン、クリーン白基調、Barlow ジオメトリック欧文、YakuHanJP 約物詰め、エディトリアル見出し、老舗の品格
- **特徴**:
  - **YakuHanJP**（約物半角専用フォント）を font-family の先頭に配置。括弧・句読点の余白を詰め、日本語組版の密度を上げる独自のアプローチ
  - **Barlow**（Google Fonts のジオメトリック・サンセリフ）を和文フォントの前に配置。欧文テキストは Barlow の均整な字形で表示される
  - 欧文セクション見出し（"NEWS"、"BRAND"、"PRODUCTS"）は **weight 300**（Light）で上品に、日本語の説明見出しは **weight 400〜700** で読みやすさを確保
  - ブランドカラー `#b70031` は CTA ボタン・テキストリンク・ロゴに限定使用。面で大きく塗ることは少なく、白い画面にポイントで効かせる
  - セクション背景の切り替えに `#f6f7f9`（クールライトグレー）を使用
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Crimson** (`#b70031`): メインのブランドカラー。ロゴアイコン、CTA ボタン背景、テキストリンク色。`rgb(183, 0, 49)` の深い赤
- **Accent Teal** (`#44c1bb`): "楽しむ" カテゴリのアクセント色。ブランドページ等で使用
- **Accent Red** (`#ee4540`): "見る" カテゴリのアクセント色。動画系コンテンツで使用
- **Accent Purple** (`#5e2c47`): "知る" カテゴリのアクセント色。読み物系コンテンツで使用

### CTA / Buttons

- **Primary CTA**: 背景 `#b70031` / 文字 `#ffffff` / radius `24px` / border `1px solid #b70031` / 14px / weight 600
- **Round Button（Ghost）**: 背景 transparent / 文字 `#000000` / border `1px solid #cccccc` / radius `16px` / 10px / weight 600
- **Footer Round Button**: 背景 transparent / 文字 `#000000` / border `1px solid #b6b9b9` / radius `16px` / 14px / weight 600

### Tag / Badge

- **Press Release Tag** (`#355e7e`): プレスリリースのカテゴリタグ背景。文字 `#ffffff` / radius `4px` / 10px / weight 600

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Near Black | `#0e1618` | (14, 22, 24) | 本文テキスト・見出し（**青寄り**: B > R） |
| Black | `#000000` | (0, 0, 0) | ハンバーガーメニューライン・一部テキスト |
| Gray Border | `#cccccc` | (204, 204, 204) | ボタンボーダー・区切り線 |
| Gray Border (Footer) | `#b6b9b9` | (182, 185, 185) | フッターのボタンボーダー |
| Surface | `#f6f7f9` | (246, 247, 249) | セクション背景（**クール傾向**: B > R = G） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ヘッダー |

### Semantic（実測未確認・推奨値）

実サイトにはフォーム系のエラー／成功色は表面化していない。コーポレートサイト向け推奨値:

- **Danger**: `#cc0000` — ブランドレッドと近すぎないよう注意
- **Success**: `#1e7b65` — 穏やかなグリーン
- **Warning**: `#d97706` — オレンジ

### Header

- **Header BG**: `#ffffff`
- **Header Shadow**: `rgba(128, 130, 131, 0.2) 0px 5px 10px 0px`
- **Position**: 固定（スクロール追従）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を本命に、游ゴシック系をフォールバック
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- **特殊**: **YakuHanJP** を font-family の先頭に配置。約物（括弧・句読点）のみを持つ特殊フォントで、約物の前後の余白を詰める

### 3.2 欧文フォント

- **Barlow**: ジオメトリック・サンセリフ。Google Fonts 提供。欧文テキスト（セクション見出し "NEWS"、"BRAND" 等）の表示に使用
- font-family 内で Noto Sans JP の**前に**配置されているため、ASCII 文字は Barlow が優先される

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h3, p, a, span, nav, header, footer） */
font-family: YakuHanJP, Barlow, "Noto Sans JP", YuGothic,
  "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic",
  メイリオ, sans-serif;
```

**フォールバックの考え方**:
- YakuHanJP が先頭: 約物（「」、。等）だけこのフォントが処理し、半角幅で詰まった印象を作る。約物以外の文字はグリフを持たないので次のフォントにフォールバックする
- Barlow が2番目: ASCII 欧文はここで処理される。セクション見出しの "NEWS"、"BRAND" 等でジオメトリックな字形が出る
- Noto Sans JP 以降: 日本語の漢字・ひらがな・カタカナを処理
- 游ゴシック系は Windows 向けフォールバック。Medium 指定を挟むのは Windows での細字問題対策
- メイリオは古い Windows 向け最終フォールバック

> **代替フォント注記**: YakuHanJP は CDN（jsdelivr）から読み込み可能。Barlow は Google Fonts 提供。preview.html ではそのまま使用できる。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／商品情報ページ、2026-06-20 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 (EN) | Barlow | 36px | **300** | 36px (×1.0) | 4px (0.111em) | `#0e1618` | "NEWS"、"BRAND" — 欧文大文字のセクション見出し |
| Section H2 (EN, sub) | Barlow | 32px | 300 | 32px (×1.0) | 4px (0.125em) | `#0e1618` | "PRODUCTS"、"CATALOG" |
| Section H2 (JP) | Noto Sans JP | 30px | 400 | 49.8px (×1.66) | 4px (0.133em) | `#ffffff` | 「トンボ」の名のもとに…（暗い背景上） |
| H1 (Logo) | — | 28px | 700 | — | 1px | `#0e1618` | ロゴ領域（テキスト非表示） |
| H3 (Article) | Noto Sans JP | 14px | 500 | 23.52px (×1.68) | 1px (0.071em) | `#0e1618` | ニュース記事タイトル |
| H3 (Corporate) | Noto Sans JP | 16.38px | 700 | 27.52px (×1.68) | 1px (0.061em) | `#ffffff` / `#000000` | "ABOUT US 会社情報" 等の見出し |
| Page Title (sub) | Noto Sans JP | 18px | 400 | 30.24px (×1.68) | 1px (0.056em) | `#0e1618` | 商品情報ページの「商品情報」テキスト |
| Body | Noto Sans JP | 14px | 400 | 23.52px (×**1.68**) | 1px (0.071em) | `#0e1618` | 本文テキスト |
| Nav Link | Noto Sans JP | 12px | 600 | 20.16px (×1.68) | 1px (0.083em) | `#0e1618` | グローバルナビ「商品情報」等 |
| Breadcrumb | Noto Sans JP | 11px | 400 / 700 | 18.48px (×1.68) | 1px (0.091em) | `#0e1618` | パンくずリスト（現在地は weight 700） |
| Tag Label | Noto Sans JP | 10px | 600 | 10px (×1.0) | — | `#ffffff` | プレスリリースタグ |
| Round Btn Label | Noto Sans JP | 10px | 600 | 16.8px (×1.68) | 1px (0.1em) | `#000000` | "お知らせ一覧" 等 |
| Language Toggle | Noto Sans JP | 10px | 400 | 16.8px (×1.68) | 1px (0.1em) | `#0e1618` | "ENGLISH" |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.68`（23.52px / 14px）— body に設定された基準値。全要素に継承
- **欧文セクション見出し (36px)**: `1.0`（36px / 36px）— 欧文大文字のみなのでタイトでよい
- **日本語セクション見出し (30px)**: `1.66`（49.8px / 30px）— 本文と近い余裕のある行間
- **ナビ (12px)**: `1.68`（20.16px / 12px）— 全体一貫
- **タグラベル**: `1.0`（一行高さ）

**字間 (letter-spacing)** — 実測:
- **全体**: **`1px` が body に設定され、ほぼ全要素に継承**。これがトンボ鉛筆サイトの最大の特徴。14px 基準で約 `0.071em`
- **セクション見出し (h2)**: `4px`（36px 基準で約 `0.111em`）。欧文大文字をゆったり配置
- **ボタン/タグの一部**: `letter-spacing: normal`（letter-spacing を解除する要素もある）

**ガイドライン**:
- body レベルで `letter-spacing: 1px` を指定するのがトンボ鉛筆流。全要素に一貫した広い字間を与え、品のある印象を作る
- セクション見出しの欧文大文字はさらに広い `4px`
- ボタンラベルや一部の UI 要素は `letter-spacing: normal` で解除することもある

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- サイト全体でシンプルな禁則設定
- YakuHanJP により約物幅が自動的に詰まるため、`palt` 等の追加処理は不要

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- **YakuHanJP が約物詰めを担っている**ため、`font-feature-settings: "palt"` は不要。YakuHanJP 自体が約物だけを半角幅で持つフォントなので、字詰めは CSS ではなくフォントのグリフ設計で解決している
- Barlow はデフォルトのカーニングで十分

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（クリムゾンピル）** — "トンボのブランドラインナップ"
- Background: `#b70031`
- Text: `#ffffff`
- Padding: 推定 `8px 24px`
- Border: `1px solid #b70031`
- Border Radius: `24px`（大きな角丸、ピルに近い）
- Font: 14px, weight 600, letter-spacing 1px

**Round Button（ゴーストボタン）** — "お知らせ一覧"、"プレスリリース一覧"
- Background: `transparent`
- Text: `#000000`
- Padding: 推定 `4px 16px`
- Border: `1px solid #cccccc`
- Border Radius: `16px`
- Font: 10px, weight 600, letter-spacing 1px

**Footer Round Button** — "お問合せ"、"総合カタログ"
- Background: `transparent`
- Text: `#000000`
- Padding: 推定 `8px 24px`
- Border: `1px solid #b6b9b9`
- Border Radius: `16px`
- Font: 14px, weight 600, letter-spacing 1px

**Brand Link Tile** — "さらに詳しく" テキスト
- Background: `#ffffff`（カード面）
- Text: `#0e1618`
- Font: 12px, weight 500, letter-spacing 1px
- 矢印アイコン付き

**Tag Badge** — "プレスリリース"
- Background: `#355e7e`
- Text: `#ffffff`
- Padding: `0px 10px`
- Border Radius: `4px`
- Font: 10px, weight 600

### Inputs

- Background: transparent（rgba(0,0,0,0)）
- Border: `0px none`（ヘッダー検索の実測値。フォーム全体の定義なし）
- Font: 14px, weight 400
- 実サイトに目立つフォーム UI は少ない（コーポレートサイトのため）

**推奨実装（フォーム追加時）**:
- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #b70031`（ブランド色をフォーカスに）
- Border Radius: `4px`
- Padding: `10px 14px`
- Font: 14px, weight 400
- Height: `44px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f6f7f9`（セクション切り替え用サーフェス）
- Border: なし（カード間は余白で分離）
- Border Radius: なし（角丸なし。シンプルなフラットカード）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`
- Shadow: `rgba(128, 130, 131, 0.2) 0px 5px 10px 0px`
- Position: 固定（sticky/fixed）
- ロゴ色: `#b70031`

### Footer

- Background: `#ffffff`
- Padding: 余裕のある上下パディング
- テキスト色: `#0e1618`
- ボタン: ゴーストラウンドボタン `1px solid #b6b9b9`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間 |
| S | 8px | タグ内の余白 |
| M | 16px | カード内の段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーローセクションの上下余白 |

### Container

- Max Width: `1200px` 程度（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | タグバッジ |
| Medium | 16px | ゴーストラウンドボタン |
| Large | 24px | プライマリ CTA |
| Circle | 50% | スライダーのドットインジケーター |

### Grid

- 12 カラムグリッドが実装上自然
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・フッター（基本フラット） |
| 1 | `rgba(128, 130, 131, 0.2) 0px 5px 10px 0px` | ヘッダー（実測値） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウンメニュー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではヘッダー以外のほぼ全要素が `box-shadow: none`
- 立体感は最小限。白い面と `#f6f7f9` サーフェスの切り替えで階層を表現
- ヘッダーの影は暖色寄りのグレー `rgb(128, 130, 131)` でニュートラルな印象

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は **YakuHanJP → Barlow → Noto Sans JP → 游ゴシック系 → メイリオ** の順で指定する。YakuHanJP を先頭に置くのがトンボ鉛筆の特徴
- 本文の letter-spacing は **1px（≒ 0.071em）を body 全体**に設定する（要素ごとにバラバラにしない）
- 本文の line-height は **1.68** を基本にする
- 欧文セクション見出し（"NEWS"、"BRAND" 等）は **weight 300 + letter-spacing 4px** でエディトリアルに
- 主要 CTA は **`#b70031` のブランドクリムゾン背景 + radius 24px**
- ゴーストボタンは **border 1px solid + radius 16px** のラウンドスタイル
- セクション背景の切り替えには **`#f6f7f9`（クールライトグレー）** を使う
- テキスト色は **`#0e1618`（青寄りの near-black）** を一貫して使う
- タグバッジは **`#355e7e`（ミューテッドブルー）** 背景で控えめに

### Don't（禁止）

- YakuHanJP を font-family から**省略しない**（約物詰めが崩れる）
- letter-spacing を **要素ごとにバラバラに設定しない**（body の 1px から継承させるのが基本）
- 欧文セクション見出しに **weight 700**（Bold）を使わない（Light の上品さが失われる）
- CTA ボタンに **角丸なし（radius 0）や小さい角丸（4px）** を使わない（24px の大角丸がブランドスタイル）
- テキスト色に **純粋な `#000000`** を広く使わない（`#0e1618` の青みがかった near-black がブランドトーン）
- ブランドカラー `#b70031` を **広い面積の背景に多用しない**（白基調にポイントで効かせるのが基本）
- `font-feature-settings: "palt"` を **追加しない**（約物詰めは YakuHanJP が担う。palt を重ねると二重に詰まる）
- ウォームグレー（`#f2f2f0` 等の黄寄り）を使わない（トンボ鉛筆はクールトーンの `#f6f7f9`）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- セクション H2 (EN): 36px → 24〜28px
- セクション H2 (JP): 30px → 20〜24px
- 本文サイズは 14px を維持（line-height 1.68 も維持）
- ナビはハンバーガーメニュー化

### タッチターゲット

- Primary CTA: 高さ 44px 以上
- Round Button: 高さ 36px 以上
- タグバッジ: 装飾的（タッチ用ではない）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Crimson (CTA/Logo): #b70031
Accent Teal: #44c1bb
Accent Red: #ee4540
Accent Purple: #5e2c47
Tag Badge Blue: #355e7e
Near Black (Text): #0e1618
Gray Border: #cccccc
Surface: #f6f7f9
White: #ffffff
Header Shadow: rgba(128, 130, 131, 0.2) 0px 5px 10px 0px

Font: YakuHanJP, Barlow, "Noto Sans JP", YuGothic,
  "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic",
  メイリオ, sans-serif

Body Size: 14px / line-height 1.68 / weight 400 / letter-spacing 1px (≒0.071em)
Section H2 (EN): 36px / weight 300 / line-height 1.0 / letter-spacing 4px
Section H2 (JP): 30px / weight 400 / line-height 1.66 / letter-spacing 4px
Nav: 12px / weight 600 / letter-spacing 1px

Border Radius: 4px（タグ）/ 16px（ゴーストボタン）/ 24px（CTA）/ 50%（ドット）
Shadow: 基本 none。ヘッダーのみ rgba(128,130,131,0.2) 0px 5px 10px 0px
```

### プロンプト例

```
トンボ鉛筆のデザインに従って、文具製品の一覧ページを作成してください。
- フォント: YakuHanJP, Barlow, "Noto Sans JP", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", メイリオ, sans-serif
- letter-spacing: body 全体に 1px を設定（全要素に継承させる）
- セクション見出し（欧文）: 36px / weight 300 / letter-spacing 4px / color #0e1618 / 大文字
- セクション見出し（和文）: 30px / weight 400 / line-height 1.66 / letter-spacing 4px
- 本文: 14px / weight 400 / line-height 1.68 / color #0e1618
- 主要 CTA: 背景 #b70031（ブランドクリムゾン）/ 白文字 / border-radius 24px / 14px / weight 600
- ゴーストボタン: 背景 transparent / 文字 #000 / border 1px solid #cccccc / radius 16px / 10px / weight 600
- タグバッジ: 背景 #355e7e / 白文字 / radius 4px / 10px / weight 600
- サーフェス: #f6f7f9（クールライトグレー、セクション切り替え）
- ヘッダー影: rgba(128, 130, 131, 0.2) 0px 5px 10px 0px
- 約物詰め: YakuHanJP が自動処理（palt は不要）
- テキスト色は #0e1618（青寄り near-black）。純黒 #000000 は避ける
```
