# DESIGN.md — OMRON (オムロン)

> OMRON (https://www.omron.com/jp/ja/) のデザイン仕様書。
> 日本発のグローバル電子部品・ヘルスケアメーカー。FA（工場自動化）・制御機器・ヘルスケア（血圧計等）・社会システム事業を展開。
> 実サイトの computed style 実測 (2026-06-04 取得) に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景に OMRON Blue `#005eb8` を差し色にした、B2B/ヘルスケア企業らしい清潔感・信頼感のあるコーポレートデザイン。装飾を抑え、情報の視認性と導線の明確さを優先
- **密度**: 本文 line-height 1.75、body ベース 16px とゆとりある組版。セクション見出しは 40px で大きく構え、ブランドの安定感を演出
- **キーワード**: コーポレートブルー、信頼、クリーン、テクノロジー＆ヘルスケア、Roboto + Noto Sans JP の和欧混植
- **特徴**:
  - **Roboto + Noto Sans JP の欧文優先スタック**。欧文は Roboto でシャープに、和文は Noto Sans JP で安定した可読性を確保。グローバル企業らしい設計
  - **CSS Custom Properties を113個以上定義**し、デザイントークンベースの設計思想（`--color-blue`, `--color-text-primary`, `--color-bg-blue` 等）
  - **ブランドカラーは `#005eb8`（OMRON Blue）**。CTA・リンク・検索ボタン・ナビのアクセントに一貫して使用
  - **サーフェスは `#f5faff`（ブルーティント）**。セクション背景に `--color-bg-blue` として使用し、白背景との階層感を作る
  - テキスト色は `#1d242b`（見出し）/ `#333333`（本文）/ `#5a7186`（補足）と、ダークブルーグレー系
  - **letter-spacing / palt は全要素 normal**。字詰めに依存しない、素朴で堅実な日本語組版
  - 検索入力欄に `border-radius: 50px`（pill 型）を採用し、モダンな印象を加えている
  - カードは `border-radius: 8px` + 薄い border で控えめな存在感
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。CSS Custom Properties 名を併記。

### Brand

- **OMRON Blue** (`#005eb8` / `--color-blue`): メインのブランドカラー。CTA ボタン・検索ボタン背景・リンク・ナビアクセント・アイコンに使用
- **Blue 10** (`#f5faff` / `--color-blue-10`, `--color-bg-blue`): セクション背景のブルーティント面。白背景との階層を作る
- **Blue 20** (`#e5f1ff` / `--color-blue-20`, `--color-surface-blue`): インタラクティブ要素のホバー面・選択状態の背景
- **Blue 30** (`#cce0ff` / `--color-blue-30`): フォーカスリングやアクセント面の補助色

### CTA / Buttons

- **Primary CTA (Search)**: 背景 `#005eb8` / 文字 `#ffffff` / radius `0 4px 4px 0`（検索ボタン、右端のみ角丸）
- **Card**: 背景 `#ffffff` / border `1px solid rgba(29,36,43,0.1)` / radius `8px`
- **Cancel Button**: 背景 `#ffffff` / 文字 `#333333` / radius `4px`
- **Language Selector**: 背景 transparent / radius `4px` / 選択時 `#ebf5ff`
- **Nav Accent**: span 背景 `#005eb8` / radius `8px`（ホバーインジケーター）

### Semantic

- **Danger**: 実測未確認。推奨 `#d32f2f` 程度の赤
- **Warning**: 実測未確認。推奨 `#f5a623` 程度のオレンジ
- **Success**: 実測未確認。推奨 `#2e7d32` 程度のグリーン

### Neutral

| Token | hex | CSS Variable | 役割 |
|-------|-----|-------------|------|
| Text Primary | `#1d242b` | `--color-text-primary`, `--color-black` | 見出し・リンクテキスト |
| Text Body | `#333333` | — | 本文テキスト |
| Text Secondary | `#5a7186` | `--color-text-secondary`, `--color-gray-dark` | フッター・補足テキスト |
| Gray | `#8d9dad` | `--color-gray` | プレースホルダー・補助 |
| Gray Light | `#c8d4de` | `--color-gray-light` | 薄いボーダー |
| Border Primary | `#c8d4de` | `--color-border-primary` | 区切り線・入力欄ボーダー |
| Input Border | `#d1d1d1` | — | 検索入力欄ボーダー |
| Surface Blue | `#f5faff` | `--color-bg-blue` | セクション背景 |
| Surface White | `#ffffff` | `--color-bg-white`, `--color-surface-white` | ページ背景・カード背景 |
| Cookie Text | `#696969` | — | Cookie 同意バナーテキスト |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を使用。CSS 変数 `--font-ja` で定義
- **注意**: 実サイトの computed style では `"Noto Sans  JP"`（スペース2つ）と記述されている。CSS 変数定義のタイポと考えられるが、実測値としてはこの表記
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Roboto** を最優先。CSS 変数 `--font-en` で定義。Noto Sans JP より前に配置し、欧文の表示品質を優先
- **Cookie バナー等のオーバーレイ**: `Arial, Roboto, "Droid Sans"` → `游ゴシック, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif` の広域フォールバック

### 3.3 font-family 指定

```css
/* メインコンテンツ（CSS Custom Properties ベース） */
--font-en: Roboto;
--font-ja: "Noto Sans  JP";
--font-family: var(--font-en), var(--font-ja);

/* 展開後の実測値 */
font-family: Roboto, "Noto Sans  JP";

/* Cookie バナー・オーバーレイ */
font-family: Arial, Roboto, "Droid Sans", 游ゴシック, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- Roboto を先頭に置き、欧文はラテン書体で統一（グローバル企業としての設計意図）
- 和文は Noto Sans JP に委ねる。Google Fonts として広く利用可能
- メインコンテンツは CSS Custom Properties で管理し、フォールバックチェーンを短く保つ設計
- Cookie バナー等の外部スクリプトは独自の広域フォールバックを持つ

> **代替フォント注記**: Roboto と Noto Sans JP はいずれも Google Fonts で提供されており、preview.html でもそのまま使用可能。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-04 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Vision Hero | Roboto + Noto Sans JP | 56px | **600** | 78.4px (x1.4) | normal | `#ffffff` | ビジョン領域の大見出し（白文字 on dark） |
| Section H2 | Roboto + Noto Sans JP | 40px | **600** | 48px (x1.2) | normal | `#333333` | メインセクション見出し |
| H1 | Roboto + Noto Sans JP | 32px | **700** | 37px (x1.16) | normal | `#333333` | ページタイトル |
| H3 | Roboto + Noto Sans JP | 16px | **700** | 20.8px (x1.3) | normal | `#333333` | カード内見出し・小見出し |
| H4 | Roboto + Noto Sans JP | 14px | 600-700 | 21px (x1.5) | normal | `#333333` | サブ見出し |
| Body | Roboto + Noto Sans JP | 16px | 400 | 28px (x**1.75**) | normal | `#333333` | 本文 |
| Sub | Roboto + Noto Sans JP | 14px | 400 | 24.5px (x1.75) | normal | `#5a7186` | フッター・補足テキスト |
| Nav | Roboto + Noto Sans JP | 14px | 500 | 24.5px (x1.75) | normal | `#1d242b` | ナビゲーションリンク |
| Small | Roboto + Noto Sans JP | 12px | 400 | — | normal | `#5a7186` | 注釈・利用規約 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (16px)**: `1.75`（28px / 16px）-- 日本語として広めの設定。ヘルスケア/B2B 情報サイトとして可読性を重視
- **補足 (14px)**: `1.75`（24.5px / 14px）-- 本文と同比率
- **セクション見出し (40px)**: `1.2`（48px / 40px）-- タイト
- **ビジョン見出し (56px)**: `1.4`（78.4px / 56px）-- ゆとりあるヒーロー
- **H1 (32px)**: `1.16`（37px / 32px）-- コンパクト
- **H3 (16px)**: `1.3`（20.8px / 16px）-- タイト

**字間 (letter-spacing)** -- 実測:
- **全要素**: `normal`（0）-- 明示的な letter-spacing 指定なし
- palt / kern の適用も確認されず、Roboto + Noto Sans JP のデフォルトメトリクスに任せる方針

**ガイドライン**:
- OMRON のタイポグラフィは line-height 1.75 で本文の可読性を重視。技術文書や製品情報が多い B2B サイトとして合理的
- ウェイトは 400（本文）/ 500（ナビ）/ 600（見出し）/ 700（H1・H3）の4段階
- letter-spacing は一切指定なし。Roboto と Noto Sans JP のデフォルトメトリクスをそのまま使用

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- CMS（おそらく AEM ベース）で改行位置を管理
- 技術情報・製品仕様の長い英単語は overflow-wrap で折り返し

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Roboto はカーニング情報を内蔵するが、CSS での明示的な有効化はなし
- Noto Sans JP はデフォルトのメトリクスサイドベアリングをそのまま使用
- B2B コーポレートサイトとして OpenType 機能に依存しないシンプルな設計

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（検索ボタン）** -- ヘッダー検索
- Background: `#005eb8`
- Text: `#ffffff`
- Padding: `8px 16px`
- Border Radius: `0 4px 4px 0`（右端のみ角丸 -- 検索入力欄と結合）
- Font: Roboto + Noto Sans JP, 14px, weight 500
- Border: none

**Primary CTA（汎用）** -- 推奨実装
- Background: `#005eb8`
- Text: `#ffffff`
- Padding: `12px 32px`
- Border Radius: `4px`
- Font: Roboto + Noto Sans JP, 16px, weight 600
- Border: none

**Secondary（白＋ブルーボーダー）** -- 推奨実装
- Background: `#ffffff`
- Text: `#005eb8`
- Border: `1px solid #005eb8`
- Padding: `12px 32px`
- Border Radius: `4px`
- Font: Roboto + Noto Sans JP, 14px, weight 600

**Cancel / Tertiary**
- Background: `#ffffff`
- Text: `#333333`
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: Roboto + Noto Sans JP, 14px, weight 400
- Border: `1px solid #c8d4de`

**Language Selector**
- Background: transparent / 選択時 `#ebf5ff`
- Text: `#1d242b`
- Padding: `6px 12px`
- Border Radius: `4px`

### Inputs

**検索入力欄（ヘッダー）**
- Background: `#ffffff`
- Border: `1px solid #d1d1d1`
- Border Radius: `50px`（pill 型）
- Padding: `8px 16px`
- Font: Roboto + Noto Sans JP, 14px, weight 400

**汎用入力欄（推奨実装）**
- Background: `#ffffff`
- Border: `1px solid #c8d4de`
- Border (focus): `1px solid #005eb8`
- Border Radius: `4px`
- Padding: `10px 14px`
- Font: Roboto + Noto Sans JP, 14px, weight 400
- Height: `44px`

### Cards

**事業カード（ビジネスディビジョン）**
- Background: `#ffffff`
- Border: `1px solid rgba(29, 36, 43, 0.1)`
- Border Radius: `8px`
- Padding: `24px`
- Shadow: 基本 none
- Hover: subtle shadow（推奨）

### Header

- Background: `#ffffff`
- ナビアクセント: `#005eb8` + radius `8px`（ホバーインジケーター）
- Position: sticky
- Border Bottom: `1px solid rgba(29, 36, 43, 0.1)`

### Footer

- Background: `#ffffff` or `#f5faff`
- Text: `#5a7186`
- Font: 14px, weight 400, line-height 1.75
- リンク色: `#005eb8`

---

## 5. Layout Principles

### Spacing Scale（8px ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間 |
| S | 8px | ラベル内余白 |
| M | 16px | カード内の段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 40px | セクション間の縦余白 |
| XXL | 80px | ヒーロー・ビジョン領域の余白 |

### Container

- Max Width: `1200px`（推奨値）
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | 入力欄・ボタン・言語セレクタ |
| Medium | 8px | カード・ナビアクセント |
| Pill | 50px | 検索入力欄 |

### Grid

- 12 カラムグリッドベース
- Gutter: 20-24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | カードのホバー（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **背景色の切り替え**（`#ffffff` ↔ `#f5faff` ↔ `#e5f1ff`）と **薄い border**（`rgba(29, 36, 43, 0.1)`）で表現
- OMRON Blue `#005eb8` のソリッド面とのコントラストで視覚的階層を作る
- 影を使うよりボーダーと背景色で階層を作る、フラットデザイン志向

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Roboto を先頭、Noto Sans JP を和文担当**に指定する
- 本文の line-height は **1.75** を基本にする（16px の場合 28px）-- B2B/技術情報サイトとしてゆとりある行間
- テキスト色は **ダークブルーグレー系**を使う（見出し `#1d242b`、本文 `#333333`、補足 `#5a7186`）
- 主要 CTA は **`#005eb8` の OMRON Blue** で統一する
- セクション背景は **`#f5faff` のブルーティント** で白背景との階層を作る
- カードは **radius `8px` + 薄い border `rgba(29,36,43,0.1)`** で控えめに
- ウェイトは **400 / 500 / 600 / 700** の4段階を使い分ける（600 がセクション見出しの基本）
- CSS Custom Properties を活用し、**`--color-blue`, `--color-text-primary`** 等のトークン名を使う

### Don't（禁止）

- font-family に **Noto Sans JP だけを指定しない**（欧文は必ず Roboto を先頭に置く）
- 主要 CTA に **黒やグレーを使わない** -- OMRON の CTA は常にブルー `#005eb8`
- 本文テキストに **純黒 `#000000` を使わない**（見出しも `#1d242b` のダークブルーグレー）
- **派手な影やグラデーションを多用しない** -- フラットデザイン志向。階層は背景色と border で表現
- **角丸 `0px`（直角）のボタン**を CTA に使わない -- 最低 `4px` の角丸が基本
- letter-spacing や palt を**勝手に追加しない** -- OMRON のタイポグラフィはデフォルトメトリクスのまま
- **weight 800 や 900 を使わない** -- 最大ウェイトは 700（H1・H3）
- ブランドカラー `#005eb8` を**テキスト色として本文に使わない** -- テキストは `#1d242b` / `#333333` のニュートラル系

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | >= 1024px | デスクトップレイアウト |

### モバイル時の調整

- Vision Hero: 56px → 32-36px
- Section H2: 40px → 24-28px
- H1: 32px → 24px
- 本文サイズは 16px を維持
- ナビはハンバーガーメニューに切り替え
- カードは 1 カラムに変更

### タッチターゲット

- 主要 CTA: 高さ 44px 以上
- ナビ要素: 44px x 44px 以上（WCAG 基準）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
OMRON Blue (CTA): #005eb8
Blue 10 (Surface): #f5faff
Blue 20 (Hover): #e5f1ff
Blue 30 (Accent): #cce0ff
Text Primary: #1d242b
Text Body: #333333
Text Secondary: #5a7186
Gray: #8d9dad
Border: #c8d4de
Surface Blue: #f5faff
White: #ffffff

Font: Roboto, "Noto Sans JP", sans-serif
（実サイトは "Noto Sans  JP" とスペース2つだが、通常はスペース1つで可）

Body Size: 16px / line-height 1.75 / weight 400 / letter-spacing normal
Section H2: 40px / line-height 1.2 / weight 600
H1: 32px / line-height 1.16 / weight 700
H3: 16px / line-height 1.3 / weight 700

Border Radius: 4px（ボタン・入力）/ 8px（カード）/ 50px（検索入力 pill）
Shadow: 基本 none。階層は背景色 + 薄い border で表現
```

### プロンプト例

```
OMRON のデザインに従って、FA（工場自動化）ソリューションの製品カテゴリページを作成してください。
- フォント: Roboto, "Noto Sans JP", sans-serif
- セクション見出し: 40px / weight 600 / line-height 1.2 / color #333333
- H1: 32px / weight 700 / line-height 1.16 / color #1d242b
- 小見出し: 16px / weight 700 / line-height 1.3 / color #333333
- 本文: 16px / weight 400 / line-height 1.75 / color #333333 / letter-spacing normal
- 補助テキスト: 14px / weight 400 / color #5a7186
- 主要 CTA: 背景 #005eb8 / 白文字 / border-radius 4px / padding 12px 32px / weight 600
- セカンダリ CTA: 背景 白 / 文字 #005eb8 / border 1px solid #005eb8 / radius 4px
- カード: 背景 白 / border 1px solid rgba(29,36,43,0.1) / radius 8px / padding 24px
- セクション面: 背景 #f5faff（ブルーティント）
- テキストは #1d242b / #333333 のダークブルーグレー。純黒 #000000 は使わない
- 影は基本 none。階層は背景色 + 薄い border で表現
- letter-spacing は一切指定しない（Roboto / Noto Sans JP のデフォルト）
```
