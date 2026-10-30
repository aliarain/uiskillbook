# DESIGN.md — KALDI Coffee Farm

> KALDI Coffee Farm (https://www.kaldi.co.jp/) のデザイン仕様書。
> 実サイトの computed style に基づく。CSS Custom Properties は使用されていない。
> コーポレートサイトと EC サイト (https://www.kaldi.co.jp/ec/) の2サイトを網羅。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: コーヒーと輸入食品の専門店らしい、温かみのある食品小売デザイン。深いコーヒーブラウンをボディ背景に使用し、クリーム色のコンテンツエリアとネイビーのヘッダーで構成する独特の配色
- **密度**: 情報量多め。商品一覧・ニュース・特集バナーが密に配置されるECサイト型レイアウト
- **キーワード**: 温かい、コーヒー色、クラフト感、食欲をそそる、親しみやすい
- **特徴**: body 背景が `#411e0a`（深いコーヒーブラウン）という非常に珍しい配色。コンテンツエリアは `#f4eadd`（パーチメント/羊皮紙風のクリーム色）で包み、まるでコーヒー染めの紙のような世界観を構築している

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Coffee Brown** (`#411e0a`): ブランドの核となるコーヒーブラウン。body 背景・本文テキスト色の両方に使用
- **Navy Blue** (`#004099`): ヘッダー背景、「もっと見る」CTA ボタン。信頼感・誘導の色

### Accent（アクセントカラー）

- **Orange** (`#eb701e`): EC サイトのカートボタン。食欲をそそるアクション色
- **Terracotta** (`#d15516`): 温かみのあるアクセント。コーヒーの赤味を感じさせる
- **Olive Green** (`#919b50`): 食品・自然を感じさせるナチュラルなアクセント
- **Gold** (`#bf9861`): ラベルテキスト（"STORES", "COMPANY" 等）。上品な装飾色
- **Warm Brown** (`#a57d50`): 日付テキスト等の中間調ブラウン

### Semantic（意味的な色）

- **Danger / Error** (`#cc0000`): エラー表示（EC サイト）
- **Dark Red** (`#b41400`): 強いエラー・警告

### Neutral（ニュートラル）

- **Text Primary** (`#411e0a`): 本文テキスト（コーポレートサイト）
- **Text Primary EC** (`#333333`): 本文テキスト（EC サイト）
- **Text Price** (`#000000`): 価格テキスト（EC サイト）
- **Text Link EC** (`#672513`): リンク色（EC サイト。暖色系ブラウン）
- **Background Body** (`#411e0a`): ページ最外殻の背景（コーヒーブラウン）
- **Background Content** (`#f4eadd`): メインコンテンツエリア（パーチメント/クリーム色）
- **Background Light** (`#f8f3eb`): もう少し薄いクリーム（セクション背景）
- **Background EC** (`#ede5d7`): EC サイト背景（やや濃いクリーム）
- **Surface Dark** (`#181a1a`): フッター等の暗い面
- **Text White** (`#ffffff`): ヘッダーナビ、暗い背景上のテキスト
- **Border** (`#ddd`): 一般的な区切り線

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（コーポレートサイト）**:
- ヒラギノ角ゴ ProN W3（macOS）
- メイリオ（Windows）

**ゴシック体（EC サイト）**:
- ヒラギノ角ゴ Pro W3（macOS。ProN ではなく Pro を使用）

### 3.2 欧文フォント

- **サンセリフ（コーポレートサイト）**: Droid Sans
- **サンセリフ（EC サイト）**: Arial
- **アクセント（見出し・日付・ラベル）**: Montserrat（Google Fonts）

### 3.3 font-family 指定

```css
/* コーポレートサイト本文 */
font-family: "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, "Droid Sans", sans-serif;

/* EC サイト本文 */
font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif;

/* アクセント（日付、セクションラベル） */
font-family: Montserrat, sans-serif;
```

**フォールバックの考え方**:
- コーポレートサイトは和文フォント（ヒラギノ）先行の日本語優先スタック
- EC サイトは Arial 先行の欧文優先スタック。ヒラギノも ProN ではなく Pro を使用
- Montserrat はアクセント用途のみ。セクションラベルや日付に限定使用
- ヒラギノの ProN / Pro 指定がサイトによって異なる点に注意

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-06-03 取得）

**コーポレートサイト**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo (h1) | ヒラギノ | 14px | 400 | 21px (1.5) | normal | ヘッダーロゴ |
| Section Title (h2) | ヒラギノ | 22px | 700 | 26.4px (1.2) | 4.4px (0.2em) | "FEATURES特集" 等 |
| Sub Title (h2) | ヒラギノ | 16px | 700 | 16px (1.0) | normal | "重要なお知らせ" |
| Body (p) | ヒラギノ | 14px | 400 | 25.2px (1.8) | normal | 本文テキスト |
| Body Bold (p) | ヒラギノ | 14px | 700 | 25.2px (1.8) | normal | 強調テキスト |
| Date (p) | Montserrat | 12px | 400 | 21.6px (1.8) | 0.96px (0.08em) | 日付表示 |
| Label (span) | Montserrat | 14px | 700 | 21px (1.5) | normal | セクションラベル |
| Nav (a) | ヒラギノ | 14px | 400 | 28px (2.0) | 0.7px (0.05em) | ヘッダーナビ |

**EC サイト**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Body (p) | Arial + ヒラギノ | 14px | 400 | 22.4px (1.6) | normal | 本文テキスト |
| Price | Arial + ヒラギノ | 15px | 700 | 24px (1.6) | normal | 価格表示 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- 本文 (p): `25.2px` (14px x **1.8**) -- 日本語として十分にゆったり
- セクション見出し (h2): `26.4px` (22px x 1.2) -- やや詰まった見出し
- ナビゲーション (a): `28px` (14px x 2.0)
- EC 本文: `22.4px` (14px x 1.6) -- やや狭め

**字間 (letter-spacing)** -- 実測値:
- セクション見出し (h2): `4.4px` (= **0.2em**) -- 非常に広い。見出し専用
- ナビゲーション (a): `0.7px` (= 0.05em)
- 日付 (Montserrat): `0.96px` (= 0.08em)
- 本文 (p): `normal`

**ガイドライン**:
- セクション見出しの `letter-spacing: 0.2em` は KALDI の特徴的なスタイル。欧文混じりの見出し（"FEATURES特集"）でワイドなスペーシングを演出
- 本文には字間調整を適用しない
- Montserrat テキストには軽い字間 (0.08em) を付与

### 3.6 禁則処理・改行ルール

```css
/* 特段のカスタム禁則設定は確認されなかった */
word-break: normal;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* palt / kern の適用は確認されなかった */
font-feature-settings: normal;
```

- KALDI のサイトでは `palt` や `kern` は使用されていない
- 見出しのワイドスペーシング（0.2em）は `letter-spacing` のみで実現

### 3.8 縦書き

- 該当なし。KALDI は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（"もっと見る"）**
- Background: `#004099`（ネイビーブルー）
- Text: `#ffffff`
- Padding: 14px
- Border Radius: 4px
- Font Size: 14px
- Font Weight: 400

**Cart Button（EC サイト）**
- Background: `#eb701e`（オレンジ）
- Text: `#ffffff`
- Padding: 10px 24px
- Border Radius: 4px
- Font Size: 14px
- Font Weight: 700

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 9px 12px
- Border Radius: 4px

**Category Nav（EC サイト）**
- Background: `#ffffff`
- Text: `#672513`
- Padding: 8px
- Border Radius: 0px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#004099`
- Border Radius: 4px
- Padding: 8px 12px
- Font Size: 14px

### Cards

- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Border Radius: 8px
- Padding: 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`

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
| XXL | 48px |

### Container

- Max Width: 960px（コーポレートサイト）
- Padding (horizontal): 16px

### Grid

- Columns: 3--4（商品一覧）、2（ニュース一覧）
- Gutter: 16px--24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素 |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カード、商品タイル |
| 2 | `0 4px 16px rgba(0,0,0,0.12)` | ホバー時のカード |
| 3 | `0 8px 24px rgba(0,0,0,0.16)` | モーダル、ポップアップ |

- 全体的に控えめなシャドウ。温かみのあるクリーム色の背景と調和させるため、影は薄く軽い
- コーヒーブラウンの body 背景に対してカードが浮く効果は、明度差で表現

---

## 7. Do's and Don'ts

### Do（推奨）

- body 背景に `#411e0a`（コーヒーブラウン）を使い、コンテンツエリアの周囲にブランドカラーを見せる
- コンテンツエリアの背景は `#f4eadd`（パーチメント色）で、温かみのある食品店の雰囲気を出す
- セクション見出しには `letter-spacing: 0.2em` を適用し、欧文混じりの洗練されたスペーシングを表現する
- 日付やラベルには Montserrat を使い、本文のヒラギノとのコントラストを出す
- CTA ボタンは `#004099`（ネイビー）、カートボタンは `#eb701e`（オレンジ）と役割で色を分ける
- テキストリンク（EC サイト）は `#672513` の温かみのあるブラウンを使う

### Don't（禁止）

- コンテンツエリア内で `#411e0a` の背景を使わない（ここは `#f4eadd` クリーム色の領域）
- Montserrat を本文テキストに使わない（見出し・ラベル・日付のアクセント専用）
- CTA とカートボタンの色を逆にしない（ネイビー = 情報系、オレンジ = 購買系）
- セクション見出し以外に `letter-spacing: 0.2em` を適用しない（本文に使うとスカスカになる）
- `#000000` を本文テキストに使わない（コーポレートサイトは `#411e0a`、EC は `#333333`）
- ヒラギノの ProN と Pro を混在させない（コーポレートサイトは ProN、EC は Pro）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 640px | モバイルレイアウト |
| Tablet | <= 960px | タブレットレイアウト |
| Desktop | > 960px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイルでは本文 14px を維持、見出しは 18--20px 程度に縮小
- 商品グリッドは 2 カラムに縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Body BG): #411e0a
CTA Navy: #004099
Cart Orange: #eb701e
Gold Label: #bf9861
Text Primary: #411e0a
Text EC: #333333
Content Background: #f4eadd
Content Light: #f8f3eb
EC Background: #ede5d7
Footer: #181a1a
Error: #cc0000

Body Font: "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, "Droid Sans", sans-serif
EC Font: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif
Accent Font: Montserrat, sans-serif

Body: 14px / line-height: 1.8 / letter-spacing: normal
Section Heading: 22px / weight: 700 / letter-spacing: 0.2em
Date/Label: Montserrat / 12-14px / letter-spacing: 0.08em
CTA Radius: 4px
```

### プロンプト例

```
KALDI のデザインに従って、商品一覧ページを作成してください。
- body 背景: #411e0a（コーヒーブラウン）
- コンテンツ背景: #f4eadd（パーチメント色）
- ヘッダー: #004099（ネイビー）、テキスト白
- フォント: "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
    メイリオ, Meiryo, "Droid Sans", sans-serif
- テキスト色: #411e0a
- 見出し: 22px, weight: 700, letter-spacing: 0.2em
- 本文: 14px, line-height: 1.8
- 日付・ラベル: Montserrat, letter-spacing: 0.08em
- CTA: #004099 ネイビー、カート: #eb701e オレンジ
- カード: 白背景、radius 8px、影あり
- ボタン: radius 4px
```
