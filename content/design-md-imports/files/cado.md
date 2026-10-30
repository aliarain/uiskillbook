# DESIGN.md — cado（カドー）

> cado（https://cado.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「空気をデザインする」をタグラインに掲げる日本の家電デザインブランド。空気清浄機・除菌脱臭機・加湿器・扇風機を展開し、プロダクトの美しさと技術力を前面に出す。**ダークセクション #333333** と **純白 #ffffff** のコントラストで製品写真を映え立たせる、プロダクト・フォワードなビジュアル
- **密度**: ゆったりとしたプロダクトショーケース型。大きな余白と全幅の製品写真で「空気」感を演出。テキストは控えめに、プロダクトに語らせる構成
- **キーワード**: プレミアム家電、ダーク＆ホワイト、Cormorant セリフ、4フォントシステム、outline CTA、プロダクト・フォワード、ミニマル
- **特徴**: **4フォントシステム**が最大の特徴。英文ディスプレイに **Cormorant**（セリフ）、本文に **Helvetica/Arial**（サンセリフ）、日本語ナビ・ラベルに **游ゴシック**、フッターカテゴリに **Roboto Condensed**。CTA はアウトライン（border 1px solid）が基本で、塗りつぶしボタンをほとんど使わない。letter-spacing 0.1em の英文ディスプレイ見出しと 0.082em の日本語ナビで、バイリンガルの書き分けが明確。影なし・palt なし

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

cado のカラーパレットは極めてモノクロマティック。ブランドカラーと呼べる固有色はなく、**ダークグレー #333** と **ホワイト #fff** の二極で構成される。製品そのもの（シルバー、ブラック、ホワイト）がブランドの「色」となる設計。

- **Dark** (`#333333`): ダークセクション背景・ヒーロー・製品紹介エリア（rgb 51, 51, 51）— 出現 5 回
- **Dark Text** (`#3a3a3a`): 本文テキスト（rgb 58, 58, 58）— 純黒を避けたソフトブラック

### Text & Neutral

- **Text Primary** (`#3a3a3a`): 本文の色（rgb 58, 58, 58）
- **Text Secondary** (`#636262`): 補足テキスト（rgb 99, 98, 98）
- **Text Tertiary** (`#333232`): 濃いめの見出しテキスト（rgb 51, 50, 50）
- **Text Disabled** (`#afafaf`): 無効・プレースホルダー。NEW バッジ背景にも使用（rgb 175, 175, 175）
- **Text Muted** (`#9f9f9f`): フッターの補助テキスト（rgb 159, 159, 159）

### Surface

- **Surface White** (`#ffffff`): 標準背景
- **Surface Light** (`#f5f5f5`): セクション背景（28 件出現 — 最頻出の面色）
- **Surface Dark** (`#333333`): ダークセクション・ヒーロー・製品紹介
- **Overlay** (`rgba(247, 247, 247, 0.5)`): 半透明ライトオーバーレイ

### Functional

- **Border Default** (`#cccccc`): 検索フォーム枠
- **Border Light** (`#dddddd`): ナビ検索枠
- **Badge Gray** (`#afafaf`): NEW バッジ背景

---

## 3. Typography Rules

### 3.1 和文フォント

cado は日本語テキストに **游ゴシック** を使用。ナビゲーション・製品名・カテゴリラベル等、UI の日本語要素全般に適用。

- **游ゴシック / Yu Gothic / YuGothic**: ナビ・製品名・カテゴリラベル
- **ヒラギノ角ゴ Pro W3**: macOS フォールバック
- **メイリオ**: Windows フォールバック

> **preview.html での代替**: 游ゴシックは Google Fonts に存在しないため、**Noto Sans JP** で代替。ウェイト 400 が游ゴシック Regular に近い印象を再現する

### 3.2 欧文フォント

4つの欧文フォントを用途で使い分ける、cado 固有のマルチフォントシステム。

- **Cormorant**（セリフ）: 英文ディスプレイ見出し。"PHILOSOPHY", "FEATURE", "WHAT'S NEW" 等のセクションタイトル。Google Fonts で利用可能
- **Helvetica / Arial**（サンセリフ）: 本文・ボタン・汎用テキストのベース
- **Roboto Condensed**（コンデンス）: フッターのカテゴリラベル（"PRODUCT", "DEODORIZER" 等）。Google Fonts で利用可能

### 3.3 font-family 指定

```css
/* 英文ディスプレイ見出し（Cormorant セリフ） */
font-family: "Cormorant", Georgia, "Times New Roman", serif;

/* 本文・ボタン（Helvetica ベース） */
font-family: Helvetica, Arial, sans-serif;

/* 日本語ナビ・ラベル（游ゴシック） */
font-family: "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体,
             "ヒラギノ角ゴ Pro W3", メイリオ, sans-serif;

/* フッターカテゴリラベル（Roboto Condensed） */
font-family: "Roboto Condensed", "Yu Gothic Medium", "游ゴシック Medium",
             YuGothic, 游ゴシック体, sans-serif;
```

**フォールバックの考え方**:
- Cormorant は Google Fonts で Web フォントとして読み込み、セリフ系でフォールバック
- 本文は Helvetica 優先（macOS 標準）、Windows では Arial にフォールバック
- 日本語は游ゴシック優先、OS 標準ゴシックでフォールバック
- フッターの Roboto Condensed は Google Fonts。游ゴシック Medium でフォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (Cormorant) | Cormorant | 42px | 400 | 1.0 (42px) | 0.1em (4.2px) | "PHILOSOPHY" 等 |
| Section Title (Cormorant) | Cormorant | 32px | 400 | 1.2 (38.4px) | normal | "WHAT'S NEW" |
| Product Catch | Helvetica | 20px | 700 | 1.2 (24px) | 0.1em (2px) | ダーク bg 上 |
| Logo | Helvetica | 20px | 700 | 1.2 (24px) | 0.1em (2px) | "cado" |
| Category EN | Helvetica | 26px | 400 | 1.2 (31.2px) | 1px | "AIR PURIFIER" |
| Footer Category | Roboto Condensed | 17px | 400 | 1.2 (20.4px) | 0.48px | "DEODORIZER" |
| Footer Label | Helvetica | 16px | 400 | 1.2 (19.2px) | 1px | "PRODUCT" |
| Body | Helvetica | 15px | 400 | 1.5 (22.5px) | normal | 本文 |
| Nav JP | Yu Gothic | 15px | 400 | 1.0 (15px) | 1.23px (0.082em) | ナビゲーション日本語 |
| Product Name JP | Yu Gothic | 14px | 400 | 1.0 (14px) | 1.23px (0.082em) | 製品名 |
| Section Title JP | Helvetica | 13px | 400 | 1.2 (15.6px) | 1.3px (0.1em) | "cadoの最新情報" |
| News Title | Helvetica | 13px | 400 | 1.5 (19.5px) | 1px | ニュース記事タイトル |
| CTA Text | Helvetica | 13px | 700 | normal | normal | "カートを見る" |
| Product Spec | Yu Gothic | 11px | 400 | 1.0 (11px) | 1.23px (0.082em) | スペック表示 |
| Footer Small | Yu Gothic | 11px | 400 | 1.5 (16.5px) | normal | コピーライト等 |
| Badge | Helvetica | 11px | 400 | normal | normal | "NEW" |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（22.5px / 15px）— 標準的な設定
- **英文ディスプレイ見出しの行間**: `line-height: 1.0`（42px / 42px）— タイトに詰めた大文字タイトル
- **日本語ナビの行間**: `line-height: 1.0`（15px / 15px）— ナビのため詰め気味
- **英文ディスプレイの字間**: `letter-spacing: 0.1em`（4.2px @ 42px）— Cormorant 大文字の特徴
- **日本語ナビ・製品名の字間**: `letter-spacing: 0.082em`（1.23px @ 15px）— 游ゴシック用の固定値
- **本文の字間**: `letter-spacing: normal`（0）

**ガイドライン**:
- Cormorant ディスプレイは 0.1em のワイドスペーシングで大文字英文の品格を出す
- 日本語ナビは 0.082em（1.23px 固定）でわずかに字間を開ける
- 本文は letter-spacing normal でクリーンに

### 3.6 OpenType 機能

- `font-feature-settings` は指定なし（normal）
- **`palt` は使用しない**: 日本語の字詰めは行わず、letter-spacing 0.082em の均等配置
- Cormorant のカーニングはフォント内蔵のデフォルトに委ねる

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）
- 製品名はバイリンガル（"AIR PURIFIER 空気清浄機"）で1行に収める前提

---

## 4. Component Stylings

### Buttons

**Secondary CTA（アウトライン — "カートを見る"）**

cado の CTA は**アウトラインが基本**。塗りつぶしボタンをほとんど使わない。

- Background: `#ffffff`
- Text: `#3a3a3a`
- Border: 1px solid `#3a3a3a`
- Border Radius: **2px**（ごく控えめな角丸）
- Padding: 10px 18px
- Font Family: Helvetica, Arial, sans-serif
- Font Size: 13px
- Font Weight: **700**

**Text Link（"買い物を続ける"）**

- Text: `#3a3a3a`
- Font Size: 13px
- Font Weight: 400
- Text Decoration: underline
- Background: transparent
- Border: なし

**Section Link（"詳しく見る"）**

- Text: `#3a3a3a`
- Font Size: 13px
- Font Weight: 400
- ダークセクション上では text `#ffffff`

**NEW Badge（ピル型）**

- Background: `#afafaf`
- Text: `#ffffff`
- Border Radius: **30px**（pill）
- Padding: 4px 8px
- Font Size: 11px
- Font Weight: 400

**ボタンの考え方**:
- メインは**アウトラインスタイル**（border 1px solid + 白背景）。塗りつぶし CTA はほぼ使わない
- radius は **2px** の極微角丸。pill はバッジのみ
- font-weight は **700** で CTA テキストを強調
- ダークセクション上では白テキスト + 白ボーダーに反転

### Inputs

**検索フォーム（標準）**

- Font Family: Helvetica, Arial, sans-serif
- Font Size: 15px
- Border: 1px solid `#cccccc`
- Border Radius: **2px**
- Background: `#ffffff`
- Padding: 10px 18px

**ナビ検索（pill 型）**

- Border: 1px solid `#dddddd`
- Border Radius: **50px**（pill）
- Padding: 0 16px
- Font Size: 15px

### Cards（製品カード）

- Background: `#ffffff` または `#f5f5f5`
- Border Radius: 0px（写真はフラット）
- Shadow: なし
- 製品写真 + カテゴリ（英日バイリンガル） + 製品名の構成
- カテゴリは 26px / 400 / ls 1px の英文 + 日本語

### Section Backgrounds

- Hero/Product: `#333333`（ダーク）+ `#ffffff` テキスト
- Light Section: `#f5f5f5`（ライトグレー）— 最頻出
- Default: `#ffffff`
- Footer: `#333333`（ダーク）

---

## 5. Layout Principles

### Container

- ヒーロー・ダークセクションは全幅
- コンテンツエリアは max-width 1200px 中央寄せ（推定）
- ニュースカード等はグリッドレイアウト

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ縦 padding |
| S | 8px | バッジ横 padding |
| M | 10px | CTA 縦 padding |
| L | 16px | ナビ検索横 padding |
| XL | 18px | CTA 横 padding |
| XXL | 32px | セクション余白 |

### Grid

- 製品カテゴリは 2〜4 カラム
- ニュースは 3 カラムグリッド
- フッターは 4 カラム

---

## 6. Depth & Elevation

cado はシャドウを使わない。ダーク面（#333）とライト面（#f5f5f5 / #fff）の色面切り替えで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | `1px solid #ccc` border | フォーム境界 |
| 2 | background `#f5f5f5` | セクション区分 |
| 3 | background `#333333` | ダークセクション・ヒーロー |

---

## 7. Do's and Don'ts

### Do（推奨）

- 英文ディスプレイ見出しに **Cormorant** セリフを使う（"PHILOSOPHY" 等の大文字英文）
- 本文・ボタンには **Helvetica / Arial** を使う
- 日本語ナビ・ラベルには **游ゴシック**（preview では Noto Sans JP）を使う
- フッターカテゴリには **Roboto Condensed** を使う
- 英文ディスプレイに **`letter-spacing: 0.1em`** を設定
- 日本語ナビに **`letter-spacing: 0.082em`**（1.23px）を設定
- ダークセクションは **`#333333`** を使う（純黒 #000 ではない）
- CTA は **アウトラインスタイル**（border + 白背景 + radius 2px）
- 製品写真を大きく見せ、テキストは控えめに
- ライトセクション背景に **`#f5f5f5`** を使う

### Don't（禁止）

- 純黒 `#000000` をテキストや背景に使わない（`#3a3a3a` / `#333333` が cado のトーン）
- 塗りつぶし CTA を多用しない（アウトラインが基本）
- pill ボタンを CTA に使わない（pill は NEW バッジのみ）
- 大きな角丸（8px 以上）をボタンに使わない（2px が標準）
- Cormorant を本文や小さいテキストに使わない（ディスプレイ専用）
- 日本語テキストに Cormorant を使わない（和文は游ゴシック / Noto Sans JP）
- 鮮やかなアクセントカラーを使わない（モノクロマティックパレットを保つ）
- 見出しの letter-spacing を 0 にしない（0.1em が英文ディスプレイの特徴）
- `palt` を使わない
- シャドウ（box-shadow）を使わない（色面の切り替えで空間を作る）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Cormorant ディスプレイ 42px → 28px 程度
- 製品カテゴリグリッドは 2 カラムに折り返す
- ナビゲーションはハンバーガー化
- ダークセクションのパディング縮小

### タッチターゲット

- CTA ボタンは padding 10px 18px（高さ約 35px）— モバイル時は padding 拡張推奨
- ナビ項目は 15px / line-height 1.0 のため、タップ領域の追加が必要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: cado（カドー）
Tagline: 空気をデザインする
Dark Section: #333333
Text Primary: #3a3a3a
Text Secondary: #636262
Text Disabled: #afafaf
Surface Light: #f5f5f5
Background: #ffffff
Display Font: "Cormorant", Georgia, serif
Body Font: Helvetica, Arial, sans-serif
JP Font: "Yu Gothic", 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro W3", メイリオ, sans-serif
  preview代替: "Noto Sans JP" (游ゴシックは Google Fonts 不可)
Footer Font: "Roboto Condensed", sans-serif
Display Size: 42px / 400 / line-height 1.0 / letter-spacing 0.1em
Body Size: 15px / 400 / line-height 1.5 / letter-spacing normal
Nav JP: 15px / 400 / line-height 1.0 / letter-spacing 0.082em
CTA Style: outline (border 1px solid #3a3a3a, bg #fff, radius 2px)
CTA Font: 13px / 700
Badge: bg #afafaf, text #fff, radius 30px (pill)
palt: 使用しない
Shadow: 使用しない
```

### プロンプト例

```
cado（カドー）のデザインシステムに従って、新製品の空気清浄機紹介ページを作成してください。
- ヒーローは background #333333 + 白テキスト + 全幅の製品写真
- セクションタイトル "FEATURE" は Cormorant 42px / 400 / line-height 1.0 / letter-spacing 0.1em
- 日本語セクションラベル "cadoの特長" は 13px / 400 / letter-spacing 0.1em
- 本文は Helvetica 15px / 400 / line-height 1.5 / color #3a3a3a
- 日本語カテゴリラベル "空気清浄機" は Yu Gothic 15px / letter-spacing 0.082em
- CTA「詳しく見る」は outline: border 1px solid #3a3a3a, bg #fff, radius 2px, padding 10px 18px, font-weight 700
- ライトセクション background #f5f5f5
- フッターカテゴリ "PRODUCT" は Roboto Condensed 17px / letter-spacing 0.48px
- シャドウは一切使わない。色面（#333 / #f5f5f5 / #fff）の切り替えで空間を作る
```

### 字詰め・組版の重要ポイント

1. **4フォントシステムの使い分け**: Cormorant（英文ディスプレイ）/ Helvetica（本文・ボタン）/ 游ゴシック（日本語ナビ・ラベル）/ Roboto Condensed（フッターカテゴリ）。用途ごとにフォントが完全に分離している
2. **letter-spacing の二層構造**: 英文ディスプレイは 0.1em、日本語ナビは 0.082em（1.23px 固定）。本文は normal
3. **Cormorant ディスプレイの line-height 1.0**: 大きな英文大文字タイトルをタイトに詰める。日本語では line-height 1.0 は禁忌だが、英文大文字専用なので問題ない
4. **アウトライン CTA**: 塗りつぶしではなく border + 白背景が cado の CTA 様式。radius は 2px の極微角丸
5. **ダーク面 #333333**: 純黒ではなくダークグレー。製品写真を引き立てるための背景色
6. **font-weight は 400 と 700 のみ**: 本文・見出し 400、CTA のみ 700。中間ウェイトは使わない

---

**取得日**: 2026-05-09
**出典**: https://cado.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
