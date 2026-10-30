# DESIGN.md — SNIDEL（スナイデル）

> SNIDEL（https://snidel.com/）のデザイン仕様書。
> MASH Holdings が展開するウィメンズファッションブランド。"Street Formal" をコンセプトに、フェミニンなエレガンスとカジュアルなストリート感を融合させたスタイルで知られる。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純黒 `#000000` × 純白 `#ffffff` のハイコントラスト・モノクロームを基調に、**フラットな角張り CTA（radius 0px）** と **極端にタイトな見出し行間（1.0）** でファッション・エディトリアルの緊張感を表現
- **密度**: 見出しの line-height は 1.0（ベタ組み）でコンテンツを圧縮し、モード感を演出。本文テキストは 12〜14px の小ぶりなサイズで情報密度が高い
- **キーワード**: モノクローム、エディトリアル、ストリートフォーマル、ジオメトリックサンセリフ、ミニマルラグジュアリー
- **特徴**:
  - 欧文フォントに **pragmatica（ParaType、Adobe Fonts）** を採用。幾何学的なサンセリフで、欧州ラグジュアリーブランドの空気感を持つ
  - **`font-feature-settings: "palt"` をグローバル適用**。日本語の約物・かなを詰め組みにし、欧文 pragmatica のメトリクスと揃える。ファッションブランドらしい繊細な組版
  - **純黒 `#000000` をテキスト主色に採用**（SaaS 系で多い `#333` や `#1a1a1a` のような柔らかい黒ではない）。白背景に対して最大コントラストを取る、モード系ブランドの定石
  - CTA は **radius 0px の完全フラット矩形**。丸ピルを多用する SaaS 系とは対照的で、シャープなファッション感を出す
  - タグピル（トレンドキーワード）のみ **radius 20px** の丸型にし、矩形 CTA との対比で柔らかさを添える
  - セール・プロモ用に **`#feca00`（イエロー）、`#f90000`（レッド）、`#f70080`（ピンク）** 等のビビッドカラーを持つが、通常 UI はモノクローム
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Base

- **Black** (`#000000`): ブランドの主色。テキスト、CTA 背景、ロゴに使用。SNIDEL のモノクロームを支える軸
- **White** (`#ffffff`): ページ背景、CTA テキスト。黒との 21:1 の最大コントラスト

### CTA / Buttons

- **Primary CTA**: 背景 `#000000` / 文字 `#ffffff` / radius `0px`（フラット矩形）— "絞り込む" 等
- **Secondary CTA**: 背景 `#ffffff` / 文字 `#000000` / radius `0px`（フラット矩形）— "リセット" 等
- **Tag Pill**: 背景 `#dbdbdb` / 文字 `#000000` / radius `20px` / padding `4px 10px` — トレンドキーワード

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 見出し・本文テキスト・主要 CTA 背景 |
| Mid Gray | `#a6a6a6` | (166, 166, 166) | ページネーションドット（非アクティブ） |
| Tag Gray | `#dbdbdb` | (219, 219, 219) | タグピル背景 |
| Light Surface | `#f1f1f1` | (241, 241, 241) | 淡いグレー面背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード面・セカンダリ CTA 背景 |

### Promo / Seasonal

セール・キャンペーン時に使用するビビッドカラー。通常 UI には現れない。

| Token | hex | RGB | 用途 |
|-------|-----|-----|------|
| Sale Yellow | `#feca00` | (254, 202, 0) | セール・プロモ強調 |
| Promo Red | `#f90000` | (249, 0, 0) | セール赤 |
| Promo Pink | `#f70080` | (247, 0, 128) | 季節キャンペーン |
| Promo Orange | `#fb4700` | (251, 71, 0) | 季節キャンペーン |
| Promo Green | `#00942b` | (0, 148, 43) | 季節キャンペーン |
| Promo Blue | `#006ebc` | (0, 110, 188) | 季節キャンペーン |
| Promo Purple | `#680589` | (104, 5, 137) | 季節キャンペーン |
| Teal Accent | `#3fb8af` | (63, 184, 175) | ポイント・特典アクセント |

### Semantic（推奨値）

実サイトにはエラー／成功の明示的な色が表面化していない。EC 向けに推奨する補完値:

- **Danger**: `#f90000`（プロモレッドを兼用可）
- **Success**: `#00942b`（プロモグリーンを兼用可）
- **Warning**: `#feca00`（セールイエローを兼用可）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック体（YuGothic / Yu Gothic）** を主軸に使用
- **フォールバック**: `游ゴシック体` → `YuGothic` → `"游ゴシック Medium"` → `"Yu Gothic"` → `メイリオ` → `sans-serif`
- **ヒラギノ系**: 一部要素で `"ヒラギノ角ゴ ProN W3"`, `"Hiragino Kaku Gothic ProN"` が指定されている
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **pragmatica**（ParaType、Adobe Fonts）。幾何学的サンセリフで、Futura や DIN に近い端正なプロポーション。ファッションブランドで好まれる書体
- font-family 先頭に置かれ、**欧文部分は pragmatica が優先**される（和文は游ゴシック等にフォールバック）
- **等幅**: 指定なし

### 3.3 font-family 指定

```css
/* 本文・見出し・ボタン（メインスタック） */
font-family: pragmatica, 游ゴシック体, YuGothic, "游ゴシック Medium",
  "Yu Gothic", メイリオ, sans-serif;

/* 一部要素（ヒラギノ系バリエーション） */
font-family: pragmatica, "ヒラギノ角ゴ ProN W3",
  "Hiragino Kaku Gothic ProN", メイリオ, sans-serif;

/* カテゴリナビ（pragmatica なし） */
font-family: 游ゴシック体, YuGothic, "游ゴシック Medium",
  "Yu Gothic", メイリオ, sans-serif;
```

**フォールバックの考え方**:
- pragmatica を先頭に置き、欧文部分をブランド書体で統一する
- 和文は游ゴシック体（macOS / Windows 両対応）にフォールバック。ヒラギノ角ゴの指定もあるが、メインスタックでは游ゴシックを優先
- カテゴリナビのみ pragmatica を外し、游ゴシック体単独で表示（ナビの和文テキストを游ゴシックのメトリクスに統一する意図）
- 最終フォールバックは `sans-serif`

> **代替フォント注記**: pragmatica は Adobe Fonts のドメインライセンスのため、プレビューや社外資料で再現できない場合がある。代替として **DM Sans**（Google Fonts）を使用すると、幾何学的プロポーションと x-height の近さで印象が近い。**Inter** も候補だが、DM Sans の方が pragmatica のジオメトリック感に寄る。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Section | pragmatica | 38px | **600** | 38px (x1.0) | normal | `#000000` | "CATEGORY" 等のセクション見出し |
| H3 Large | pragmatica | 26px | **600** | 26px (x1.0) | normal | `#000000` | "ABOUT / SNIDEL" |
| Category Nav | 游ゴシック体 | 18px | 400 | 18px (x1.0) | 0.9px (0.05em) | `#000000` | カテゴリナビゲーション |
| Announcement | pragmatica | 14px | 400 | 50px (x3.57) | 2.24px (0.16em) | `#000000` | お知らせバー（広いレタースペース） |
| Nav Link | pragmatica | 12px | **500** | — | 0.96px (0.08em) | `#000000` | グローバルナビリンク |
| Trending Label | pragmatica | 12px | 400 | 21px (x1.75) | normal | `#000000` | トレンドキーワードラベル |
| Body / Base | pragmatica | 10px | 400 | 10px (x1.0) | normal | `#000000` | base font-size（モバイルファースト） |
| H1 (Logo) | pragmatica | 10px | 400 | — | normal | `#000000` | ロゴコンテナ（実質テキストなし） |
| H3 Small | pragmatica | 10px | 400 | — | normal | `#000000` | 小見出しコンテナ |

**注意**: base font-size が 10px と極端に小さいのはモバイルファーストの設計で、実際の可読テキストは 12〜18px で表示される。10px は `rem` 計算のベースとして機能している可能性が高い。

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **見出し (26〜38px)**: `1.0`（ベタ組み）-- ファッション・エディトリアルの特徴。行間ゼロの緊張感
- **カテゴリナビ (18px)**: `1.0`（ベタ組み）
- **お知らせバー (14px)**: `3.57`（50px / 14px）-- テキストではなくバー高さの確保が目的
- **トレンドラベル (12px)**: `1.75`（21px / 12px）-- 小テキストは読みやすさを確保

**字間 (letter-spacing)** -- 実測:
- **お知らせバー**: `0.16em`（2.24px / 14px）-- **極めて広い**。お知らせ文の一字一字を離してブランド感を演出
- **ナビリンク**: `0.08em`（0.96px / 12px）-- ナビ用のやや広めのトラッキング
- **カテゴリナビ**: `0.05em`（0.9px / 18px）-- 微かに広げて視認性を確保
- **見出し**: `normal`（0）-- 大きなサイズの見出しは詰めない

**ガイドライン**:
- SNIDEL のタイポグラフィは **見出しの行間 1.0 が核心**。行間を広げるとファッション感が失われる
- 字間はサイズが小さいほど広く取る傾向（12px → 0.08em、14px → 0.16em）。大見出しは 0
- `palt` がグローバル適用されているため、和文の約物・かなは自動で詰め組みになる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- お知らせバーは `white-space: nowrap` でスクロール表示
- 商品名・ブランド名は折り返さない

### 3.7 OpenType 機能

```css
/* グローバル適用（body レベル） */
font-feature-settings: "palt" 1;
```

- **`palt` がサイト全体に適用**されている。これは SNIDEL の最も特徴的なタイポグラフィ設定
- 日本語の括弧・句読点・かなが詰め組みになり、欧文 pragmatica と並べたときのリズムが揃う
- 多くのサイトが見出しのみに `palt` を適用する中、SNIDEL はグローバル適用（本文を含む）
- `kern` は明示的な指定なし（pragmatica のデフォルトカーニングに依存）

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（黒フラット矩形）** -- "絞り込む"
- Background: `#000000`
- Text: `#ffffff`
- Padding: `12px 24px`（推奨）
- Border Radius: `0px`（完全フラット -- ファッションブランドのシャープさ）
- Font: pragmatica, 游ゴシック体, 12〜14px, weight 400〜500
- Border: none
- `font-feature-settings: "palt" 1`

**Secondary CTA（白フラット矩形）** -- "リセット"
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `12px 24px`（推奨）
- Border Radius: `0px`（完全フラット）
- Font: pragmatica, 游ゴシック体, 12〜14px, weight 400〜500

**Tag Pill（トレンドキーワード）** -- "#ニットセットアップ" 等
- Background: `#dbdbdb`
- Text: `#000000`
- Padding: `4px 10px`
- Border Radius: `20px`（丸ピル -- 矩形 CTA との対比）
- Font: pragmatica, 12px, weight 400

**Pagination Dot**
- Background (inactive): `#a6a6a6`
- Background (active): `#ffffff` + border
- Width / Height: `14px`
- Border Radius: `7px`（正円）

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #dbdbdb`
- Border (focus): `1px solid #000000`
- Border Radius: `0px`（CTA と統一、フラット矩形）
- Padding: `12px 16px`
- Font: pragmatica, 游ゴシック体, 14px, weight 400
- Height: `44px`

### Cards / Product Tiles

- Background: `#ffffff`
- Border: なし（画像とテキストの構成で区切る）
- Border Radius: `0px`（フラット）
- Shadow: なし
- 商品画像はアスペクト比固定で `object-fit: cover`
- 商品名は 12〜14px / weight 400、価格は 12px / weight 400

### Header

- Background: `#ffffff`（ソリッド白）
- Border Bottom: なし、または `1px solid #f1f1f1`
- Position: `fixed` or `sticky`
- ロゴは中央配置、左右にナビアイコン

### Footer

- Background: `#ffffff` または `#f1f1f1`
- Text: `#000000`
- Font: 12px, weight 400

### Announcement Bar（お知らせバー）

- Background: `#ffffff` または `#000000`（キャンペーンにより変動）
- Text: 14px, weight 400, letter-spacing `0.16em`
- Height: `50px`（line-height で確保）
- `white-space: nowrap` でスクロール表示

---

## 5. Layout Principles

### Spacing Scale（推奨 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | タグ内の縦余白、アイコンとテキストの間 |
| S | 8px | 商品タイル間のマイクロ余白 |
| M | 16px | カード内テキスト間、ナビ項目間 |
| L | 24px | セクション内見出しと本文 |
| XL | 40px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`

### Grid

- 商品一覧: 2カラム（mobile）/ 3〜4カラム（desktop）
- Gutter: `8〜16px`（タイトなグリッド -- ファッション EC の定石）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | CTA・入力欄・カード・商品タイル（**基本フラット**） |
| Small | 7px | ページネーションドット |
| Pill | 20px | タグピル |

**注意**: SNIDEL の UI は原則 radius 0px。丸みを持つのはタグピルとページネーションドットのみ。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **ほぼ全要素**（カード・ボタン・ヘッダ） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・フィルターパネル（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.12)` | モーダル・カート（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **色のコントラスト**（黒 vs 白）と **面の切り替え**（`#ffffff` vs `#f1f1f1`）で表現
- 影を使う場合も **控えめな黒**（`rgba(0, 0, 0, 0.06〜0.12)`）に留める
- ファッション EC は「フラットで写真を主役にする」のが基本。影で装飾しない

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文は **pragmatica を先頭**、和文は **游ゴシック体 → YuGothic → メイリオ** のフォールバックチェーンを守る
- `font-feature-settings: "palt" 1` を**グローバルに適用**する（SNIDEL の核心的な組版設定）
- テキストの主色は **純黒 `#000000`** を使う（柔らかい黒 `#333` や `#1a1a1a` は使わない）
- CTA は **radius 0px のフラット矩形**にする。Primary は黒背景＋白文字、Secondary は白背景＋黒文字＋黒ボーダー
- 見出しの line-height は **1.0**（ベタ組み）にする。これがエディトリアルの緊張感を生む
- タグピルのみ **radius 20px** にして、矩形 CTA との対比をつける
- 小テキスト（12px 以下）ほど letter-spacing を **広めに取る**（0.05em〜0.16em）
- カテゴリナビは **pragmatica を外し、游ゴシック体単独**で指定する
- 商品画像を主役にし、UI 要素は白黒のミニマルに徹する

### Don't（禁止）

- CTA に **丸みを付けない**（radius 8px、9999px は SNIDEL の世界観を壊す）。radius 0px のみ
- 本文テキストに **柔らかい黒を使わない**（`#333333`、`#555555`、`#1a1a1a`）。SNIDEL は `#000000` 一択
- 見出しの line-height を **1.0 以上にしない**。1.2 や 1.4 にするとファッション感が失われる
- **グレーの中間色**（`#666`、`#999` 等）を本文テキストに使わない。SNIDEL のテキストは黒か白
- **セマンティックカラー**（青リンク、緑成功、赤エラー）を通常 UI に持ち込まない。モノクロームが基本
- 欧文に **Noto Sans、Helvetica Neue、Arial** を指定しない（pragmatica のジオメトリック感が失われる）
- `palt` を**見出しだけに限定しない**。SNIDEL はグローバル適用（本文含む）
- カード・商品タイルに **影をつけない**。`box-shadow: none` がデフォルト
- プロモカラー（`#feca00`、`#f90000` 等）を **通常 UI の要素に使わない**。セール・キャンペーン時限定

---

## 8. Responsive Behavior

### Breakpoints（推奨）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（2カラム商品グリッド） |
| Tablet | 768〜1023px | タブレットレイアウト（3カラムグリッド） |
| Desktop | >= 1024px | デスクトップレイアウト（3〜4カラムグリッド） |

### モバイル時の調整

- H2 セクション見出し: 38px → 24〜28px
- H3: 26px → 18〜20px
- カテゴリナビ: 18px → 14〜16px
- 商品グリッド: 2カラム、gutter 8px
- ナビはハンバーガー化、ドロワーで展開
- お知らせバーは横スクロール or 改行対応
- base font-size 10px はモバイルファースト設計のため、そのまま維持

### タッチターゲット

- CTA ボタン: 高さ 44px 以上
- タグピル: 高さ 29px（padding 4px + 21px line-height）-- タップ可能
- ページネーションドット: 14px（小さめ -- スワイプが主操作）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Black (テキスト / Primary CTA): #000000
White (背景 / Secondary CTA): #ffffff
Tag Gray (ピル背景): #dbdbdb
Light Surface: #f1f1f1
Mid Gray (ページネーション): #a6a6a6
Sale Yellow (プロモ): #feca00
Promo Red (プロモ): #f90000
Promo Pink (プロモ): #f70080

Font (メイン): pragmatica, 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic", メイリオ, sans-serif
Font (ヒラギノ系): pragmatica, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, sans-serif
Font (カテゴリナビ): 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic", メイリオ, sans-serif
（pragmatica 不在時の代替提案: DM Sans）

OpenType: font-feature-settings: "palt" 1（グローバル適用）

H2 Section: 38px / weight 600 / line-height 1.0 / letter-spacing normal
H3: 26px / weight 600 / line-height 1.0 / letter-spacing normal
Category Nav: 18px / weight 400 / line-height 1.0 / letter-spacing 0.05em
Announcement: 14px / weight 400 / line-height 50px / letter-spacing 0.16em
Nav Link: 12px / weight 500 / letter-spacing 0.08em
Trending: 12px / weight 400 / line-height 1.75

Border Radius: 0px（CTA・カード）/ 20px（タグピル）/ 7px（ページネーション）
Shadow: 基本 none。フラットなモノクロームで写真を主役にする
```

### プロンプト例

```
SNIDEL のデザインに従って、ウィメンズファッション EC の商品一覧ページを作成してください。
- フォント: pragmatica, 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic", メイリオ, sans-serif
- font-feature-settings: "palt" 1 をグローバルに適用
- セクション見出し: 38px / weight 600 / line-height 1.0 / color #000000
- カテゴリナビ: 游ゴシック体, YuGothic のみ（pragmatica なし）/ 18px / weight 400 / letter-spacing 0.05em
- ナビリンク: 12px / weight 500 / letter-spacing 0.08em
- 商品名: 12〜14px / weight 400 / color #000000
- Primary CTA "絞り込む": 背景 #000000 / 白文字 / border-radius 0px（フラット矩形）
- Secondary CTA "リセット": 背景 #ffffff / 黒文字 / border 1px solid #000 / radius 0px
- タグピル: 背景 #dbdbdb / 黒文字 / radius 20px / padding 4px 10px
- カード: border-radius 0px / box-shadow なし / 写真主体
- 背景: #ffffff、サーフェス面は #f1f1f1
- テキスト色は #000000 のみ（グレーの中間色は使わない）
- CTA に丸みを付けない（radius 0px が鉄則）
- 影は使わない。立体感は白 / #f1f1f1 の面切り替えで表現
- セール時のみ #feca00（イエロー）や #f90000（レッド）のアクセント色を使用
```
