# DESIGN.md — Takram（タクラム）

> Takram（https://ja.takram.com/）コーポレートサイトのデザイン仕様書。
> 「We're a design innovation firm.」を掲げる、デザインエンジニアリング・ブランディング・サービスデザインを横断する東京・ロンドン・ニューヨーク拠点のデザインファーム。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` の余白上に、カスタム欧文 **theinhardt** と森澤 **MFW-KoburinaGoStdN-W3（小琳ゴ Std N W3）** の混植で構築する、**極限までストイックなスイス・タイポグラフィ系デザイン**。色面はほぼ存在せず、文字組と写真の間隔だけで構造を作る
- **密度**: ヒーローの h1 が **64px / weight 400 / line-height 1.0 / letter-spacing -0.04em**（行間ゼロ＝サイズ一致）、本文も **16px / line-height 1.0** という、**極端にタイトな縦組**。そのぶん上下の余白を大きく取って呼吸を作る
- **キーワード**: theinhardt、Koburina Go、白基調、letter-spacing マイナス、line-height 1.0、weight 300/400 軽量、写真直置き、ヘッダー固定パネル
- **特徴**:
  - **CSS Custom Properties が `--color-black / graphite / gray-1〜5 / white / red` の極小パレット**で、UI には white/black/graphite/gray と、わずかな赤しか出てこない
  - **ヘッダーのオーバーレイパネルが `#343434`（graphite）の暗色面**で、ナビ展開時のみ画面に登場する。それ以外は無色
  - 全タイポグラフィに **`font-feature-settings: "palt"`** を適用 — Koburina の和文プロポーショナル詰めを最大限活かす
  - 見出しは **letter-spacing をマイナス**で攻める（h1: -0.04em、h2: -0.02em、span: -0.015em）。欧文 theinhardt のオプティカルサイズに合わせた詰め
  - 本文段落の line-height は **1.6**（記事領域）、UI の単発テキストは **1.0**（タイト）と二極化
  - 補助文字色は `#686868`（mid-gray）。区切り線・ボーダーは Custom Property の `--color-gray-1〜5` でグレースケール 5 段
  - **角丸ゼロ**。ボタンらしいボタンが存在せず、リンクテキストとアンダーラインで導線を作る
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> CSS Custom Properties は `--color-*` のみが定義されており、UI に出てくる色はほぼ無彩色。

### Brand

- **Takram Red** (`#c40b0b` 推定): `--color-red` として定義。実 UI ではアクセントとして稀に使用（プロジェクト記事内の小さな囲み等）
- 実質的なブランドカラーは **無彩色 + 赤一点**。色は写真とプロジェクト内の作品の中だけに存在

### Neutral（実測値）

- **Black** (`#1a1a1a`): h1・本文の基本テキスト色（`--color-black`）
- **Graphite** (`#343434`): ヘッダーのオーバーレイパネル背景色（`--color-graphite`）
- **Mid Gray** (`#686868`): 補足テキスト・キャプション・カテゴリラベル（`--color-gray-3` 相当）
- **Header Black** (`#000000`): 最小ロゴ・ナビ要素の純黒
- **White** (`#ffffff`): ページ背景（`--color-white`）

### Custom Properties で定義されているグレースケール

```
--color-black       /* #1a1a1a */
--color-graphite    /* #343434 */
--color-gray-1      /* 推奨: #2a2a2a */
--color-gray-2      /* 推奨: #525252 */
--color-gray-3      /* 推奨: #686868 */
--color-gray-4      /* 推奨: #a8a8a8 */
--color-gray-5      /* 推奨: #d8d8d8 */
--color-white       /* #ffffff */
--color-red         /* #c40b0b 推定 */
--color-selection-dark   /* テキスト選択時 */
--color-selection-light  /* テキスト選択時 */
```

### Semantic（補完）

- 実サイトに表面化したエラー・成功色は確認できない。ステータス色を追加する場合は **赤（`#c40b0b`）／ 緑（`#2f8f5f` 推奨）／ 黄（`#c89a3c` 推奨）** を控えめなトーンで。Takram のミニマリズムを壊さないこと

---

## 3. Typography Rules

### 3.1 和文フォント

- **メイン（軽量ゴシック）**: **MFW-KoburinaGoStdN-W3（小琳ゴ Std N W3 / Morisawa）** — 細身で柔らかい humanist gothic。Takram の知性とニュートラルさの源
- **フォールバック**: **YuGothic / Yu Gothic / 游ゴシック / 游ゴシック体 / Hiragino Kaku Gothic ProN / Hiragino Sans**

### 3.2 欧文フォント

- **メイン**: **theinhardt（カスタム / Optimo）** — Helvetica や Akzidenz Grotesk 系の中性サンセリフ。ニュートラルで構築的、weight 300〜700 を使い分ける
- **フォールバック**: `theinhardt Fallback`（カスタム fallback metrics font）→ システム sans-serif

### 3.3 font-family 指定

実サイトの実測値（**和欧混植は1系統に統一**）:

```css
font-family: theinhardt, "theinhardt Fallback",
  MFW-KoburinaGoStdN-W3, YuGothic, "Yu Gothic", 游ゴシック, 游ゴシック体,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
```

**フォールバックの考え方**:
- **欧文の theinhardt を先頭に置く** — ASCII 文字は theinhardt で組まれる
- 和文は **Morisawa MFW-KoburinaGoStdN-W3 が最優先**。Web フォントが読めない環境では游ゴシック → ヒラギノへフォールバック
- AI で再現する場合、theinhardt は商用ライセンスのため **Inter / Helvetica Neue / Akzidenz-Grotesk** で代替し、Koburina は **Noto Sans JP（Google Fonts）の Light / Regular** で雰囲気を近づける（ただし Koburina の humanist な柔らかさは別物）
- font-feature-settings は全要素で `"palt"` を有効化

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・projects ページ、2026-05-07 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Hero h1 | **64px** | **400** | 64px (×1.0) | -2.56px (-0.04em) | `#1a1a1a` | "We're a design innovation firm." |
| Page Title h1 | 56px | 400 | 56px (×1.0) | -1.12px (-0.02em) | `#1a1a1a` | "Projects" 等 |
| Lead | 24px | 300 | 24px (×1.0) | -0.36px (-0.015em) | `#1a1a1a` | ヒーロー直下のリード |
| Project Title | 16px | 400 | 20px (×1.25) | -0.16px (-0.01em) | `#1a1a1a` | プロジェクトカード見出し |
| Body Article | 16.32px | 300 | 26.112px (×1.6) | 0.16px (+0.01em) | `#1a1a1a` | 記事本文（lh が大きい唯一の要素） |
| Body | 16px | 300 | 16px (×1.0) | normal | `#1a1a1a` | UI 単発テキスト |
| Nav Link | 16px | 400 | 16px (×1.0) | normal | `#000000` (light bg) / `#ffffff` (dark) | グローバルナビ |
| Lang Switch | 16px | 400 | 16px (×1.0) | 0.48px (+0.03em) | `#1a1a1a` / `#686868` | "ja" / "en" 切替 |
| Project Sub | 15.47px | 300 | 21.66px (×1.4) | 0.165px (+0.01em) | `#1a1a1a` | プロジェクトカード本文 |
| Filter Tab | 14.5px | 400 | 14.5px (×1.0) | -0.145px (-0.01em) | `#1a1a1a` (active) / `#686868` | "All / Design Engineering / ..." |
| Caption Small | 14px | 400 | 14px (×1.0) | -0.07px (-0.005em) | `#686868` | フッター補足等 |
| Sub Caption | 14.28px | 300 | 14.28px (×1.0) | 0.14px (+0.01em) | `#686868` | "Feel free to connect." |
| Tag Pill (Light) | 12px | 300 | 13.8px (×1.15) | 0.06px (+0.005em) | `#ffffff` | 暗色面の中のタグ |
| Category Mini | 11px | 300 | 11px (×1.0) | 0.11px (+0.01em) | `#686868` | "Brand Identity & Experiences" |

### 3.5 行間・字間

- **本文（記事）の行間**: **1.6**（26.112px / 16.32px）— 唯一 `line-height: 1.6` を使う領域
- **その他すべての UI テキスト**: **`line-height: 1.0` または 1.15 前後**（ヒーロー・見出し・ナビ・キャプション）
- **見出しの字間**: **マイナス方向**（-0.01〜-0.04em）— 欧文 theinhardt のオプティカル詰めに合わせる
- **キャプション・サブ要素の字間**: **プラス方向**（+0.005〜+0.03em）— 小さい文字の可読性確保

**ガイドライン**:
- 大型の見出しほど `letter-spacing` を**マイナス**に強く（h1: -0.04em）— Takram の「文字組で密度を作る」言語
- 12px 以下の小文字には**プラス方向の字間**（0.5〜1px）を付けて潰れを防ぐ
- 本文段落以外は **`line-height: 1.0〜1.15`** で攻めるが、可読性が落ちる場合は 1.4〜1.6 へ緩める

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- Takram の和文は短文・キャプション中心で長文段落は記事ページのみ
- 英語と日本語が混在する箇所では theinhardt 側のカーニングが効くため、`palt` 適用済みでも自然に詰まる

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **全要素で `"palt"` を有効化**（実測で確認）— 和文プロポーショナル詰めをサイト全体に適用
- 欧文 theinhardt 側の kerning は Web フォント側の `kern` がデフォルト ON

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

Takram のサイトには**従来的なボタンは登場しない**。リンクテキスト or アンダーライン or 言語切替の文字スイッチのみ。

**Lang Switch (ja / en / zh)**
- Background: `transparent`
- Text (active): `#1a1a1a` weight 400
- Text (inactive): `#686868` weight 300
- Padding: `0`（文字そのもの）
- Font: theinhardt 16px / letter-spacing 0.48px

**Filter Tabs (Projects ページ)**
- Background: `transparent`
- Text (active): `#1a1a1a` weight 400
- Text (inactive): `#686868` weight 400
- Border: `1px solid #d8d8d8`（推奨）
- Padding: `8px 16px`
- Font: 14.5px / letter-spacing -0.145px
- Border Radius: `0px`（角丸なし）

**Text Link**
- Color: `#1a1a1a`
- Hover: underline + opacity 0.7（推奨）
- Font: 16px / weight 300〜400 / letter-spacing 0
- 矢印記号 `→` を末尾に付けるパターンが多い（"Learn more →"）

### Inputs

実 UI に検索欄等は表面化していないが、Takram トーンに合わせる場合:

- Background: `#ffffff`
- Border: `0px` または `1px solid #1a1a1a`（罫線型・下線型）
- Border Radius: `0px`
- Padding: `8px 0`（下線型）
- Font: 16px / theinhardt + Koburina

### Cards / Project Tiles

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`（写真の四角を尊重）
- Padding: 写真直下にキャプション領域 16〜24px
- Shadow: フラット（影なし）

### Header / Nav

**通常時（白背景）**
- Background: `#ffffff`
- Color: `#000000` / `#1a1a1a`
- Padding: `16px 32px`
- Logo "Takram" 左、ナビ右

**メニュー展開時（オーバーレイ）**
- Background: `#343434`（graphite）
- Color: `#ffffff`
- Sub Nav (LayoutMenuLink): color `#686868`、font 14px / weight 400 / letter-spacing -0.07px

### Footer

- Background: `#ffffff`
- Color: `#1a1a1a`（メイン）/ `#686868`（補足）
- Padding: `64px 32px 32px`
- "Feel free to connect." 14.28px weight 300 / letter-spacing 0.14px

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン文字間 |
| S | 8px | リスト項目間 |
| M | 16px | カード内段落間 |
| L | 24px | カード間 |
| XL | 48px | セクション内余白 |
| XXL | 96px | セクション間 |
| XXXL | 160px | ヒーローと次セクションの間（推奨） |

### Container

- Max Width: `--width-max`（推奨: 1280〜1440px）
- Margin Side: `--margin-side`（推奨: mobile 16px / desktop 32〜64px）
- Grid Margin: `--margin-grid`（推奨: 16〜24px）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | 全要素（写真・カード・ボタン・入力） |

- Takram は **全要素で角丸ゼロ**。写真・パネル・テキストブロックすべて直角

### Z-Index Scale（CSS Custom Properties）

```css
--z-index-1, --z-index-2, --z-index-3, --z-index-4
--z-index-negative-1, --z-index-negative-2, --z-index-negative-3, --z-index-negative-4
```

- 4 段の正値・4 段の負値で構成。レイヤリングを明示的にコントロール

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・写真・パネル（基本フラット） |
| 1 | `0 0 0 1px rgba(26, 26, 26, 0.08)` | ホバー時の薄境界（推奨） |

- Takram は**影をほぼ使わない**。立体表現は `#343434` のオーバーレイパネルだけが面として登場
- カード・モーダルも基本フラット

---

## 7. Do's and Don'ts

### Do（推奨）

- **theinhardt + MFW-KoburinaGoStdN-W3** の混植で組む。和文先頭ではなく**欧文 theinhardt を先頭**にして ASCII グリフを優先
- 全要素で **`font-feature-settings: "palt"`** を有効化
- 大型見出しの letter-spacing は **マイナス方向（-0.02 〜 -0.04em）** に
- 12px 以下の小文字には **プラス方向の字間（0.5〜1px）** を付ける
- 本文段落以外は **line-height 1.0 〜 1.15** で攻める
- 角丸はすべて **0px** に統一
- 影は使わず、ボーダーも最小限（`#d8d8d8` の 1px が上限）
- 色は **無彩色 + 写真の中の色**だけに留める
- ヘッダーオーバーレイは **`#343434`（graphite）** の固有色を使う

### Don't（禁止）

- 角丸（`border-radius` > 0）を使わない
- 大きめの本文に **`line-height: 1.5` 以上**を適用しない（記事本文 1.6 だけが例外）
- 純黒 `#000000` を本文に多用しない（`#1a1a1a` を基本に）
- カラフルなアクセント・シャドウ・グラデーションを入れない
- 大型見出しに `letter-spacing: normal` を使わない（締まりが消える）
- 背景に `--color-graphite` 以外の濃色を使わない
- ボタンに `background-color` 付きの矩形を作らない（リンクテキストか、線ベースで構成）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ `--bp-sp` (768px 推定) | スマホ |
| Desktop | > 768px | デスクトップ |

- CSS Custom Properties で `--bp-sp` が定義されている — モバイルブレークポイントは 1 段のみ

### モバイル時の調整

- Hero h1: 64px → 40〜48px
- Page Title h1: 56px → 32〜40px
- Lead: 24px → 18〜20px
- ナビは drawer ハンバーガーへ切り替え
- グリッド 4 → 2 → 1 カラム

### タッチターゲット

- 最小 44×44px。テキストリンクは padding `12px 0` 以上

### ダークモード

- 該当なし。常時ライトモード

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff
Text Primary: #1a1a1a
Text Muted: #686868
Surface Dark (overlay): #343434
Brand Red (rare accent): #c40b0b

Font: theinhardt, "theinhardt Fallback", MFW-KoburinaGoStdN-W3, YuGothic, "Yu Gothic", 游ゴシック, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Web Fallback (代替): Inter, "Helvetica Neue", "Noto Sans JP", sans-serif

Hero h1: 64px / weight 400 / line-height 1.0 / letter-spacing -0.04em / palt
Page h1: 56px / weight 400 / line-height 1.0 / letter-spacing -0.02em / palt
Body Article: 16.32px / weight 300 / line-height 1.6 / letter-spacing +0.01em / palt
Body UI: 16px / weight 300 / line-height 1.0 / letter-spacing normal / palt
Caption: 11-14px / weight 300 / line-height 1.0 / letter-spacing +0.005-0.01em / color #686868

Border Radius: 0px（全要素）
Shadow: none（基本フラット）
font-feature-settings: "palt" (全要素)
```

### プロンプト例

```
Takram のデザインに従って、プロジェクト一覧ページを作成してください。
- 背景: #ffffff（純白）
- フォント: theinhardt, MFW-KoburinaGoStdN-W3, YuGothic, "Hiragino Kaku Gothic ProN", sans-serif
  （Web 代替: Inter, "Helvetica Neue", "Noto Sans JP", sans-serif）
- 全要素で font-feature-settings: "palt" を有効化
- ページタイトル h1: 56px / weight 400 / line-height 1.0 / letter-spacing -0.02em / color #1a1a1a
- プロジェクトカード見出し: 16px / weight 400 / line-height 1.25 / letter-spacing -0.01em / color #1a1a1a
- カードキャプション: 11-12px / weight 300 / line-height 1.0 / letter-spacing +0.01em / color #686868
- フィルタタブ: 14.5px / weight 400 / letter-spacing -0.01em / active #1a1a1a / inactive #686868
- 本文段落（記事内のみ）: 16.32px / weight 300 / line-height 1.6 / letter-spacing +0.01em
- 角丸はすべて 0px、影は使わない
- カードの区切りは余白だけで作る（ボーダーなし）
- 色はモノクロ（#1a1a1a / #686868 / #ffffff）と写真の中の色だけに
- ヘッダーオーバーレイのみ #343434（graphite）の暗色面を使ってよい
- ボタンは作らず、テキストリンク + 矢印（→）で導線を構成
```
