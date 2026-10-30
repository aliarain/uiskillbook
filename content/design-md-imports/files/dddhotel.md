# DESIGN.md — DDD HOTEL（ディーディーディー ホテル）

> DDD HOTEL（ディーディーディー ホテル / https://dddhotel.jp/）のデザイン仕様書。
> 東京・馬喰町に建つ、アート／ギャラリーを併設したミニマルなデザインホテル（旧 the b をリノベーション）。
> 最大の特徴は **オフホワイト（#fafafa）× ニアブラック（#040404）のモノクローム** に、
> **くすんだブロンズ（#856d47）** をひと差しするアクセント、そして **Cardo（Latin セリフ）× 明朝／ゴシック（和文）** による
> **特大の editorial タイポグラフィと大きな余白**。塗りボタンを持たず **テキストリンク主体** のミニマル設計。
> 実サイトの computed style 実測（2026-06-28 取得）に基づく。
> ※ 本文欧文の **Benton Sans** は Adobe Fonts（ドメインライセンス）のため preview.html では表示できない。代替は後述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **オフホワイト地（#fafafa）× ニアブラック（#040404）** のモノクロームを基調にした、静謐で余白の大きい editorial なギャラリー型サイト。色をほぼ使わず、特大タイポグラフィ・写真・余白で語る。差し色は **くすんだブロンズ #856d47** のみ
- **DDD HOTEL について**: 馬喰町のデザインホテル。客室・レストラン・アートギャラリーを擁し、滞在そのものを一つの作品として体験させる。建築・現代美術・食を横断する文化的なホスピタリティを掲げる
- **密度**: 低密度。巨大な余白、大きく置かれた写真、抑制された文字量。見出しは画面を支配する特大サイズ（rooms ページの h1 は 256px、ナビ項目は 76px）で組まれ、本文は小さく generous な行間（line-height ≈1.9）で添える
- **キーワード**: オフホワイト #fafafa、ニアブラック #040404、ブロンズ #856d47、Cardo セリフ、明朝、特大タイポ、余白、テキストリンク主体、editorial、モノクローム
- **特徴**:
  - 基調は **オフホワイト #fafafa × ニアブラック #040404**。純白・純黒は避け、わずかに濁したトーンで上品さを出す
  - 見出し・ナビ・ディスプレイは **Cardo**（Latin はエレガントなセリフ、和文フォールバックは **ヒラギノ明朝**）で組む。letter-spacing はわずかに負（≈ -0.01em）。サイズは特大（76px〜256px）で editorial に振る
  - 本文コピーは **Benton Sans**（Latin はグロテスク・サンセリフ、和文は **ヒラギノ角ゴ**）。本文は 11〜13.5px と小さめ、line-height ≈1.9、letter-spacing ≈0.08em とゆったり
  - **塗りボタンを持たない**。"Reservation" 等の CTA も含めて **テキストリンク主体**（リンク色も #040404 基調）。装飾を排し、文字そのものをナビゲーションにする
  - 反転（ダーク）面は **#040404 / #1b1b1b** のニアブラックで、フッターやフルスクリーンのセクションに多用される。地が黒のときテキストは #fafafa
  - 差し色 **#856d47（ブロンズ／カーキ・ゴールド）** は面色やアクセントに最小限。鮮やかな色は持たない
  - 全体に **角丸はほぼ 0**。直線的でシャープな面構成、影は使わずフラット

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。基調はオフホワイト×ニアブラックのモノクローム＋ブロンズ。すべて hex 表記。

### Brand / Core

- **Background (Off-White)** (`#fafafa`): ページ背景・メインキャンバス（viewport サンプルの大半を占める）。わずかに濁したオフホワイト
- **Ink (Near-Black)** (`#040404`): 本文・見出しの基本テキスト色。純黒を避けたニアブラック。反転面・フッターの地色にも多用（uniqueBackgrounds で最頻 count 18〜23）
- **Dark Surface** (`#1b1b1b`): ダークセクションのもう一段のニアブラック。#040404 と併用して反転面に階層をつける
- **Accent (Bronze)** (`#856d47`): 差し色。くすんだブロンズ／カーキ・ゴールド。面色・アクセント・ホバー等に最小限に使う唯一のブランド色

### Neutral / Grey

| Role | hex | 用途 |
|------|-----|------|
| Text Primary | `#040404` | 本文・見出しの基本テキスト |
| Text Muted (Nav) | `#292929` | ナビのデフォルト文字色（ホバー前のグレー） |
| On Dark (White) | `#fafafa` | ダーク地の上の白文字 |
| Surface (Light) | `#fdfdfd` | 背景よりわずかに明るい面 |

### Accent

- **Bronze** (`#856d47`): ブランドアクセント。リンクホバー・小さな面・アクセントラインなどに点で使う。広い面積には使わず、モノクロームを引き締める役

---

## 3. Typography Rules

> 実サイトは見出しに **Cardo**（Google Fonts のセリフ、和文は明朝）、本文に **Benton Sans**（Adobe Fonts のグロテスク、和文はゴシック）を使う。
> Benton Sans はドメインライセンスのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **明朝体（見出し・ナビ）**: ヒラギノ明朝 ProN W3（`"ヒラギノ明朝 ProN W3"` / `"Hiragino Mincho ProN"`）。Cardo のフォールバックとして見出し・ナビの和文を担う
- **ゴシック体（本文）**: ヒラギノ角ゴ ProN（`"Hiragino Kaku Gothic ProN"` / `"ヒラギノ角ゴ ProN"`）。Benton Sans のフォールバックとして本文の和文を担う

### 3.2 欧文フォント

- **セリフ（見出し・ナビ・ディスプレイ）**: Cardo（`Cardo`）— エレガントなオールドスタイル・セリフ。特大表示で editorial な品格を出す
- **サンセリフ（本文）**: Benton Sans（`benton-sans`）— グロテスク・サンセリフ（Franklin Gothic 系）。本文・キャプションに使用

### 3.3 font-family 指定

```css
/* 見出し・ナビ・ディスプレイ（実測） */
font-family: Cardo, "Noto Sans JP", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", serif;

/* 本文・キャプション（実測） */
font-family: benton-sans, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", sans-serif;
```

- **フォールバックの考え方**: いずれも **欧文優先型**。見出しは Cardo（Latin セリフ）→ 和文明朝、本文は Benton Sans（Latin グロテスク）→ 和文ゴシック。Latin セリフ × 和文明朝、Latin サンセリフ × 和文ゴシックの上品な対比
- 見出しの実測チェーンには `"Noto Sans JP"` が混じる箇所もあるが、和文の意図は **明朝**（ヒラギノ明朝）。preview.html では明朝代替（Noto Serif JP）を当てる

**preview.html での代替フォント**:
- Cardo（見出しセリフ）→ **Cardo**（Google Fonts にあり。実サイトと同一書体をそのまま使用）
- ヒラギノ明朝（見出し和文）→ **Noto Serif JP**（明朝の代替）
- Benton Sans（本文グロテスク）→ **Libre Franklin**（Benton Sans は Franklin Gothic 系。Libre Franklin が最も近い。次点で Inter）
- ヒラギノ角ゴ（本文和文）→ **Noto Sans JP**

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (XL) | Cardo / 明朝 | 256.8px | 400 | 1.0 | -0.01em | rooms ページの巨大 h1 |
| Display | Cardo / 明朝 | 102–118px | 400 | 1.0–1.3 | -0.01em | ヒーローの特大リンク見出し |
| Nav (Big) | Cardo / 明朝 | 76px | 400 | 1.0 | -0.01em | グローバルナビ項目（特大） |
| Heading 3 | Cardo / 明朝 | 71.9px | 400 | 1.05 | -0.01em | セクション大見出し |
| Heading | Cardo / 明朝 | 25.7px | 400 | 1.0 | -0.01em | リンク見出し（中） |
| Subheading | Cardo / 明朝 | 20.5px | 400 | 1.3 | -0.01em（一部 +0.08em） | h2 / h4 |
| Lead Link | Cardo / 明朝 | 17.5px | 400 | 1.3 | -0.01em | 小さめのリンク見出し |
| Body | Benton Sans / 角ゴ | 13.35px | 400 | 1.9 | 0.08em | 本文（generous な行間） |
| Body (Small) | Benton Sans / 角ゴ | 12.3px | 400 | 1.9 | 0.08em | 補足本文 |
| Caption / Nav | Cardo / 明朝 | 14.4px | 400 | 1.3 | -0.01em | ヘッダー内テキスト・小リンク |
| Small | Benton Sans / 角ゴ | 11.3px | 400 | 1.65 | -0.01em〜normal | リスト・注記 |

- **ウェイトは一貫して 400**。太字で主張せず、サイズ（特大⇔極小）の落差と余白で階層を作るのがこのサイトの肝
- 見出しの letter-spacing はわずかに負（≈ -0.143808px ÷ サイズ ≈ -0.01em）。特大セリフを締めて見せる
- h4 の一部に `letter-spacing: 1.64px`（≈ +0.08em）の正方向バリエーションあり（小ラベル用）

### 3.5 行間・字間

- **本文の行間 (line-height)**: 約 1.9（13.35px → 25.37px）。日本語本文としてかなり generous
- **見出しの行間**: 1.0〜1.3（特大表示は行が詰まり気味。256px や 76px はほぼ 1.0）
- **本文の字間 (letter-spacing)**: 約 0.08em（1.07px ÷ 13.35px）。ゆったり開けて静けさを出す
- **見出しの字間**: わずかに負（≈ -0.01em）。特大セリフを引き締める

**ガイドライン**:
- 本文は line-height 1.9・letter-spacing 0.08em でゆったり組み、余白の多い静かな佇まいを保つ
- 見出しは特大サイズ＋わずかに詰めた字間で editorial な品格を出す。太字に頼らない

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は未適用 */
```

- 実測では `font-feature-settings: normal`。**palt は適用していない**
- 和文の字間は letter-spacing（本文 0.08em）で手動調整している

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

> DDD HOTEL は **塗りボタンを持たない**。CTA はテキストリンク主体。以下の塗りボタン仕様は、塗りが必要な場合の推奨補完（実サイトの色を流用）。

### Buttons / Links

**Primary（テキストリンク・基調）**
- Background: `transparent`
- Text: `#040404`（ダーク地では `#fafafa`）
- Border: なし（または下線・極細の枠）
- Font: Cardo / 明朝、サイズは文脈に応じ大きく
- ホバー: 不透明度を下げる、またはブロンズ #856d47 に色変化
- "Reservation" 等もこの形。**文字そのものを CTA にする**

**Solid（塗りが必要な場合の推奨補完）**
- Background: `#040404`（ニアブラック）
- Text: `#fafafa`
- Border: none
- Padding: 14px 36px
- Border Radius: `0px`
- Font: Benton Sans / 角ゴ、letter-spacing 0.08em

**Accent（ブロンズ・最小限）**
- Background: `#856d47`
- Text: `#fafafa`
- Border Radius: `0px`
- 強調したい単一 CTA のみ。多用しない

### Inputs

- Background: `#fafafa` / `#ffffff`
- Border: 1px solid `#040404`（細線。基調は下線のみでも可）
- Border Radius: `0px`
- Padding: 10px 12px
- Font: Benton Sans / 角ゴ、letter-spacing 0.08em
- フォーカス: border `#040404`（または #856d47）

### Cards

- Background: `#fafafa` / `#fdfdfd`
- Border: なし、または 1px solid `#040404`（極細）
- Border Radius: `0px`
- 写真を大きく、テキスト（タイトル・キャプション）は小さく下に添える
- 余白を広く取り、影は使わない（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 32px |
| L | 64px |
| XL | 120px |
| XXL | 200px |

> 余白の単位が大きいのが特徴。セクション間は 120〜200px 取り、特大見出しの周囲を広く空ける。

### Container

- Max Width: 約 1440px（フルブリードの写真・特大タイポを活かすワイド設計）
- Padding (horizontal): 24〜64px

### Grid

- Columns: 客室・コンテンツは 1〜2 カラム（大きく見せる）
- Gutter: 32〜64px
- 大きな余白で各要素を孤立させ、ギャラリーのように見せる

---

## 6. Depth & Elevation

> DDD HOTEL はほぼフラット。影を使わず、オフホワイト面とニアブラック面（#fafafa / #040404 / #1b1b1b）の色差で階層を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード・セクション（基本フラット） |
| 1 | `0 1px 2px rgba(0,0,0,0.05)` | ドロップダウン・メニュー（控えめ） |
| 2 | `0 12px 32px rgba(0,0,0,0.12)` | モーダル・ドロワー |

- 立体は影でなく **反転（#040404 のダーク面）** で表現するのが基本

---

## 7. Do's and Don'ts

### Do（推奨）

- 背景はオフホワイト #fafafa、テキストはニアブラック #040404 を使い、純白・純黒は避ける
- 見出し・ナビは Cardo（Latin セリフ）× 明朝（和文）で特大に組み、editorial な品格を出す
- 本文は Benton Sans × 角ゴで小さめ・line-height 1.9・letter-spacing 0.08em とゆったり添える
- CTA はテキストリンク主体にする。塗りが必要なら #040404 地＋#fafafa 文字、角丸 0
- 差し色はブロンズ #856d47 を点で。反転面は #040404 / #1b1b1b で深さを出す
- 余白を大きく取り（セクション間 120〜200px）、写真と特大タイポを主役にする

### Don't（禁止）

- 鮮やかなブランドカラーや装飾的グラデーションを足さない（モノクロームの静けさが崩れる）
- 見出しを太字（700/800）にしない（ウェイトは一貫して 400、サイズと余白で階層を作る）
- 見出しの和文にゴシックを当てない（見出しは明朝、本文はゴシックの対比を守る）
- 影を多用して立体的にしない（フラット＋反転面が基本）
- 情報を詰め込まない・余白を削らない（余白こそがデザイン）
- 派手な塗りボタンを乱発しない（テキストリンク主体が基調）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | 1 カラム、ナビはメニュー化、特大見出しは縮小 |
| Tablet | 750–1023px | 1〜2 カラム |
| Desktop | ≥ 1024px | フルブリード写真＋特大タイポ |

### タッチターゲット

- 最小サイズ: 44px × 44px（テキストリンクでも十分なタップ領域を確保）

### フォントサイズの調整

- 特大見出し（256px / 76px 等）は `clamp()` でモバイルまで段階的に縮小する
- 本文はモバイルでも 13〜14px・line-height 1.9 を基準に保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #fafafa (Off-White)
Ink / Text: #040404 (Near-Black)
Dark Surface: #040404 / #1b1b1b (反転面)
Accent: #856d47 (Bronze — 差し色のみ)
Nav Muted: #292929
Heading Font: Cardo, "ヒラギノ明朝 ProN W3", serif   /* 代替: Cardo + Noto Serif JP */
Body Font: benton-sans, "Hiragino Kaku Gothic ProN", sans-serif  /* 代替: Libre Franklin + Noto Sans JP */
Body Size: 13.35px / Line Height: 1.9 / Letter Spacing: 0.08em
Heading: weight 400 / 特大（76–256px）/ ls -0.01em
Radius: 0px / palt: off / CTA: テキストリンク主体
```

### プロンプト例

```
DDD HOTEL のデザインシステムに従って、客室紹介ページを作成してください。
- 背景: #fafafa（オフホワイト）、テキスト: #040404（ニアブラック）。純白・純黒は使わない
- 見出し・ナビ: Cardo + 明朝（代替 Cardo + Noto Serif JP）で特大（76–256px）、weight 400、ls -0.01em
- 本文: Benton Sans + ヒラギノ角ゴ（代替 Libre Franklin + Noto Sans JP）、13–14px、line-height 1.9、ls 0.08em
- CTA はテキストリンク主体。塗るなら #040404 地＋#fafafa 文字、角丸 0px
- 差し色はブロンズ #856d47 を点で。反転セクションは #040404 で深さを出す
- 余白を大きく取り（セクション間 120–200px）、写真と特大タイポを主役にする。影なしのフラット
- palt は使わず、letter-spacing で字間を調整する
```
