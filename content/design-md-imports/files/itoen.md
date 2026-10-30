# DESIGN.md — 伊藤園（ITO EN）

> 伊藤園（https://www.itoen.co.jp/ ＋ https://www.itoen.co.jp/products/）のデザイン仕様書。
> 日本最大の茶飲料メーカー。企業情報サイトと商品情報サイトの2系統を持つ。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ナチュラル・日本の茶文化を反映した温かみのある企業サイト。**グリーンの緑茶ブランドカラー `#00a040`** と **暖色系グレー（`#f6f6f3`, `#edede3`）** の組み合わせで、自然・健康・伝統を表現
- **密度**: 企業情報サイトは余白が広く、落ち着いたペース。商品サイトは本文 line-height 1.75 でゆったりとした読みやすさ
- **キーワード**: ナチュラル、暖色グレー、角張った直方体ボタン、伝統と信頼、茶の緑
- **特徴**:
  - **2つのサイト系統**を持つ: 企業情報（`itoen.co.jp/`、Noto Sans JP のみ、黒テキスト）と商品情報（`itoen.co.jp/products/`、拡張フォールバック、`#131314` テキスト、weight 900 の太い見出し）
  - **ブランドカラーは `#00a040`**（お茶の緑）。スライダーのアクティブドット、Cookie バナーボタン、商品サイトのリンク色に使用。派手な CTA には使わず控えめに配色
  - **CTA ボタンは角張ったボーダースタイル**: `1px solid #000` + 透明背景 + 左パディング（矢印アイコン用）。radius 0px。ピル型ではない
  - **背景の色温度**: `#f6f6f3`（企業）/ `#fbfcfc`（商品）と、純白ではなく**わずかにウォームまたはグリーン寄りの白**
  - **フッター背景 `#edede3`**: 暖色系のベージュグレーで、ページ本体から一段暗くなる
  - 欧文アクセントに **Barlow**（weight 600, letter-spacing 0.05em）を使用。コピーライト等で登場
  - **font-feature-settings は normal**（palt 不使用）、**letter-spacing も normal**（特別なトラッキングなし）
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Green** (`#00a040`): ブランドカラー。スライダーアクティブドット、Cookie バナーの「閉じる」ボタン背景、商品サイトのリンクテキスト色。茶の自然さを表現
- **Copyright Gray** (`#c9c9ba`): コピーライトの文字色。暖色系の薄いグレーベージュ

### CTA / Buttons

- **Border CTA**: 背景 `transparent` / 文字 `#000000` / border `1px solid #000000` / radius `0px`（角張り）/ padding `0 0 0 27px`（左に矢印アイコン用の余白）/ 14.4px / weight 700
- **Search Button**: 背景 `#131314` / 文字 `#ffffff` / radius `0px` / padding `1px 6px` / 14.4px / weight 700
- **Cookie Button**: 背景 `#00a040` / 文字 `#ffffff` / radius `0px` / padding `4.5px 13.5px` / 12.6px / weight 400
- **Tab Button（商品サイト）**: 背景 `#efefef` / 文字 `#131314` / radius `0px` / padding `0 72px` / 18px / weight 900

### Neutral — Warm Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 企業サイトの見出し・本文テキスト |
| Near Black | `#131314` | (19, 19, 20) | 商品サイトの本文・見出し、検索ボタン背景、ページトップボタン |
| Muted Gray | `#8e9294` | (142, 146, 148) | スライダーナビの非アクティブドット、ボーダー |
| Light Muted | `#879297` | (135, 146, 151) | 商品サイトのパンくず・プレースホルダー色 |
| Inactive Nav | `#97938e` | (151, 147, 142) | 企業サイトのナビカテゴリトップリンク色（ウォーム寄り） |
| Warm Surface | `#f6f6f3` | (246, 246, 243) | 企業サイトのページ背景（**グリーン寄りのウォーム白**） |
| Product Surface | `#fbfcfc` | (251, 252, 252) | 商品サイトのページ背景 |
| Footer | `#edede3` | (237, 237, 235) | フッター背景（**暖色ベージュグレー**） |
| Input BG | `#dbdbd7` | (219, 219, 215) | 企業サイトの検索入力背景 |
| Nav Green BG | `#f1f5f0` | (241, 245, 240) | 商品サイトのメガメニュー面背景（グリーン寄り） |
| Tab BG | `#f6f6f6` | (246, 246, 246) | 商品サイトのリンクボタン・検索エリア背景 |
| White | `#ffffff` | (255, 255, 255) | カード面・コンテンツ背景 |

### Semantic（推奨補完値）

実サイトには明確なエラー／成功色は表面化していない。企業サイト向けに推奨:

- **Danger**: `#c62828` 程度の落ち着いたレッド
- **Success**: `#00a040`（ブランドグリーン兼用）
- **Warning**: `#e6a700` 程度のアンバー

### Overlay

- **Cookie Overlay BG**: `rgba(0, 0, 0, 0.7)`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先。Google Fonts からの配信
- **企業サイト**: `"Noto Sans JP", sans-serif`（シンプルなフォールバック）
- **商品サイト**: 拡張フォールバック付き — Hiragino Kaku Gothic ProN → Hiragino Sans → メイリオ → ＭＳ Ｐゴシック
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **Barlow**: コピーライト・英字アクセント用。weight 600、letter-spacing 0.05em
- フォールバック: sans-serif
- 本文の欧文は Noto Sans JP の欧文グリフに依存

### 3.3 font-family 指定

```css
/* 企業サイト（itoen.co.jp/） */
font-family: "Noto Sans JP", sans-serif;

/* 商品サイト（itoen.co.jp/products/） */
font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;

/* 英字アクセント・コピーライト */
font-family: Barlow, sans-serif;
```

**フォールバックの考え方**:
- 企業サイトは Noto Sans JP 単独 + generic。Webフォント前提のシンプルな構成
- 商品サイトは Hiragino Kaku Gothic ProN → Hiragino Sans → メイリオ の伝統的な日本語フォールバック。環境を選ばない確実な表示
- Barlow はコピーライト等の英字装飾専用。和文との混植には使わない

### 3.4 文字サイズ・ウェイト階層

> 実測値（企業トップページ ＋ 商品情報ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page Title (Product) | Noto Sans JP | 30.6px | **900** | 36.1px (x1.18) | normal | `#131314` | "商品情報" |
| Section H2 (Corporate) | Noto Sans JP | 30.6px | 700 | 39.6px (x1.29) | normal | `#000000` | "企業情報" |
| Section H2 (Product) | Noto Sans JP | 23.4px | **900** | 36px (x1.54) | normal | `#131314` | "ピックアップ" |
| Section H2 (Corporate) | Noto Sans JP | 19.8px | 700 | 29.7px (x1.5) | normal | `#000000` | "お知らせ" |
| Nav Mega Title | Noto Sans JP | 19.8px | **900** | 29.7〜30.5px (x1.5) | normal | `#131314` | "商品情報トップ" |
| H3 / Card | Noto Sans JP | 16.2px | 700 | 24.3px (x1.5) | normal | `#000000` | ニュース見出し |
| Nav Primary | Noto Sans JP | 16.2px | 700 | 36px (x2.22) | normal | `#000000` | "健康価値の創造" |
| Body | Noto Sans JP | 14.4px | 400 | 25.2px (x**1.75**) | normal | `#131314` | 商品サイト本文 |
| Body (Corporate) | Noto Sans JP | 14.4px | 400 | 32.4px (x**2.25**) | normal | `#000000` | 企業説明文（広い行間） |
| Nav Link | Noto Sans JP | 14.4px | 700 | 21.6px (x1.5) | normal | `#000000` / `#97938e` | ナビカテゴリリンク |
| Caption | Noto Sans JP | 12.6px | 400 | 18.9px (x1.5) | normal | `#000000` | サブナビ・補足 |
| Caption Bold (Product) | Noto Sans JP | 12.6px | **900** | 18.9px (x1.5) | normal | `#131314` | フッターナビ・検索 |
| Small | Noto Sans JP | 9px | 400 | 13.5px (x1.5) | normal | `#000000` | 最小テキスト |
| Copyright | Barlow | 9px | 600 | 13.5〜15.8px | 0.45px (0.05em) | `#c9c9ba` | "Copyright (C) ..." |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **商品サイト本文 (14.4px)**: `1.75`（25.2px / 14.4px）
- **企業サイト説明文 (14.4px)**: `2.25`（32.4px / 14.4px）— 非常にゆったり
- **見出し (19.8〜30.6px)**: `1.18〜1.54`
- **カード見出し (16.2px)**: `1.5`（24.3px / 16.2px）
- **補助テキスト (12.6px)**: `1.5`（18.9px / 12.6px）
- **ナビプライマリ (16.2px)**: `2.22`（36px / 16.2px）— タッチ領域確保用

**字間 (letter-spacing)** — 実測:
- **全要素**: `normal`（特別なトラッキングは適用されていない）
- **例外**: Barlow（コピーライト）のみ `0.45px`（≈ 0.05em）

**ガイドライン**:
- 伊藤園は letter-spacing を一切調整しない素朴なアプローチ。Noto Sans JP のデフォルトメトリクスに委ねる
- 本文の line-height は `1.75`（商品サイト）が基準。企業説明文は `2.25` とさらに広い
- 見出しの weight は企業サイト `700`、商品サイト `900` と系統が異なる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 特別な禁則設定は確認されなかった
- ナビゲーションは `white-space: nowrap` 相当

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Noto Sans JP のデフォルトメトリクスに依存する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Border CTA（角張り矢印ボタン）** — "取り組みを知る"・"活動を知る"
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `0px 0px 0px 27px`（左に矢印アイコン分の余白）
- Border Radius: `0px`（**完全な直角**）
- Font: Noto Sans JP, 14.4px, weight 700
- 矢印アイコンを左に配置するデザイン

**Search Button** — "検索"
- Background: `#131314`
- Text: `#ffffff`
- Padding: `1px 6px`
- Border Radius: `0px`
- Font: Noto Sans JP, 14.4px, weight 700
- Border: none

**Cookie Consent Button** — "閉じる"
- Background: `#00a040`（ブランドグリーン）
- Text: `#ffffff`
- Padding: `4.5px 13.5px`
- Border Radius: `0px`
- Font: Noto Sans JP, 12.6px, weight 400

**Tab Button（商品サイト）** — "ブランドから探す"
- Background: `#efefef`（アクティブ時）
- Text: `#131314`
- Padding: `0px 72px`（大きな横余白）
- Border Radius: `0px`
- Font: Noto Sans JP, 18px, weight 900

**Link Button（商品サイト）** — "取扱店舗検索"
- Background: `#f6f6f6`
- Text: `#131314`
- Padding: `0px 45px`
- Border Radius: `0px`
- Font: Noto Sans JP, 16.2px, weight 900

### Inputs

**Search Input（企業サイト）**
- Background: `#dbdbd7`（ウォームグレー）
- Border: `1px solid transparent`
- Border Radius: `0px`
- Padding: `34.2px 36px`（大きめ）
- Font: Noto Sans JP, 14.4px, weight 400

**Search Input（商品サイト）**
- Background: `transparent`
- Border: none
- Border Radius: `0px`
- Padding: `0px 0px 0px 27px`
- Font: Noto Sans JP, 12.6〜14.4px, weight 900
- Placeholder Color: `#879297`

### Cards / Surfaces

- Background: `#ffffff`
- Border: なし（画像カード中心のレイアウト）
- Border Radius: `0px`（**角張り基調**）
- Shadow: `none`（基本フラット）
- ナビメガメニュー面: `#f1f5f0`（グリーン寄りの薄い面）

### Header

- Background: `#f6f6f3`（企業）/ `#fbfcfc`（商品）
- Position: sticky / fixed
- 企業サイト: 左に 90px のロゴ領域パディング

### Footer

- Background: `#edede3`（暖色ベージュグレー）
- Padding: `99px 0px 90px`（上下に大きな余白）
- 検索バー、サイトマップ、コピーライトを含む

---

## 5. Layout Principles

### Spacing Scale（推奨 9px ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4.5px | Cookie ボタンの縦余白 |
| S | 8.1px | ナビボタンの縦余白 |
| M | 18px | ナビリンクの横余白 |
| L | 27px | 矢印ボタンの左パディング |
| XL | 45px | 商品サイトリンクボタンの横余白 |
| XXL | 90〜99px | フッター上下の大余白、ヘッダーのロゴ領域 |

### Container

- Max Width: `1200px` 程度（推奨値）
- Padding (horizontal): mobile `16px` / desktop `24〜36px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | ボタン、入力欄、カード（**基本すべて角張り**） |
| Small | 4.5px | 商品サイトのナビリスト枠線 |
| Circle | 50% | スライダーのドットインジケーター |

### Grid

- カラムベースのレイアウト（CSS Grid / Flexbox）
- 商品サイトはカード型のグリッド配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **全要素**（基本フラット） |

- 実測ではすべての要素で `box-shadow: none`
- 立体感は**面の色の切り替え**で表現: `#f6f6f3` → `#edede3` → `#131314`
- フッターの `#edede3` とヘッダーの `#f6f6f3` で上下の段差を作る
- Cookie バナーのオーバーレイ `rgba(0, 0, 0, 0.7)` のみが影的な表現
- ホバー時にもシャドウは使わない（推奨: `opacity` や `background-color` の変化でホバーを表現）

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **Noto Sans JP** を使い、商品サイトでは Hiragino Kaku Gothic ProN → Hiragino Sans → メイリオ のフォールバックを付ける
- 本文の line-height は **1.75** を基本にする（商品サイト準拠）
- CTA ボタンは **border-radius: 0px の角張りデザイン** + ボーダースタイルで統一する
- 背景は **ウォーム系のオフホワイト**（`#f6f6f3` / `#fbfcfc`）を使い、純白 `#ffffff` はカード面に限定する
- ブランドグリーン `#00a040` は**アクセント的に控えめに使う**（スライダードット、Cookie ボタン、リンク色）
- フッターは **`#edede3`** のベージュグレーで本体と明確に区切る
- 英字の装飾要素には **Barlow** weight 600 を使う
- letter-spacing は `normal` を維持する（特別なトラッキング不要）
- 商品サイトの見出しは weight **900**、企業サイトは weight **700** と使い分ける

### Don't（禁止）

- **ピル型ボタン（border-radius: 9999px）を使わない** — 伊藤園は完全な直角デザイン
- **letter-spacing を調整しない** — Noto Sans JP のデフォルトメトリクスで組む
- **font-feature-settings: "palt" を使わない** — 実サイトでは適用されていない
- **冷たいグレー**（`#f3f4f6`、`#e5e7eb`）を背景に使わない — ウォーム寄りの `#f6f6f3` / `#edede3` を使う
- ブランドグリーン `#00a040` を **大きな面やヒーロー背景に使わない** — あくまでポイント使い
- **box-shadow で立体感を出さない** — 面の色で階層を作る
- 純黒 `#000000` と近黒 `#131314` を **混在させない** — 企業サイトは `#000000`、商品サイトは `#131314` で統一
- **Barlow を和文混じりの本文に使わない** — コピーライト等の英字アクセント専用

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- Page Title: 30.6px → 24px 程度に縮小
- Section H2: 23.4px → 19.8px 程度に縮小
- 本文サイズは 14.4px を維持（line-height 1.75 も維持）
- 企業サイトのナビはハンバーガーメニュー化

### タッチターゲット

- ナビプライマリリンク: 高さ 36px のラインハイト（タッチ領域として十分）
- ボーダーCTA: padding の左 27px + テキストで最低 44px 幅を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green: #00a040
Black (Corporate): #000000
Near Black (Product): #131314
Muted Gray: #8e9294
Inactive Nav: #97938e
Breadcrumb Gray: #879297
Copyright: #c9c9ba
Warm Surface (Corporate): #f6f6f3
Product Surface: #fbfcfc
Footer: #edede3
Input BG: #dbdbd7
Nav Green BG: #f1f5f0
Tab BG: #f6f6f6
White: #ffffff
Cookie Overlay: rgba(0, 0, 0, 0.7)

Font (Corporate): "Noto Sans JP", sans-serif
Font (Product): "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
Font (English accent): Barlow, sans-serif

Body Size: 14.4px / line-height 1.75 / weight 400 / letter-spacing normal
Heading (Corporate): weight 700
Heading (Product): weight 900
Caption: 12.6px / line-height 1.5
Copyright: Barlow / 9px / weight 600 / letter-spacing 0.05em

Border Radius: 0px（すべて角張り）
Shadow: none（基本フラット）
CTA Style: transparent + 1px solid #000 + radius 0px（ボーダースタイル）
```

### プロンプト例

```
伊藤園のデザインに従って、お茶の商品一覧セクションを作成してください。
- フォント: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
- セクション見出し: 23.4px / weight 900 / line-height 1.54 / color #131314
- カード見出し: 16.2px / weight 700 / line-height 1.5
- 本文: 14.4px / weight 400 / line-height 1.75 / color #131314
- CTA: 背景 transparent / 文字 #000 / border 1px solid #000 / radius 0px / padding 0 0 0 27px（左に矢印）/ 14.4px / weight 700
- 検索ボタン: 背景 #131314 / 文字 #fff / radius 0px
- ページ背景: #fbfcfc（純白ではなく、わずかに色味のあるオフホワイト）
- フッター: #edede3（暖色ベージュグレー）
- ブランドグリーン #00a040 はリンク色やアクセントにのみ使用（大面積には使わない）
- border-radius は 0px — すべて角張りで統一
- box-shadow は none — 影を使わず面の色で階層を作る
- letter-spacing は normal — トラッキング調整不要
- 英字装飾は Barlow weight 600, letter-spacing 0.05em
```
