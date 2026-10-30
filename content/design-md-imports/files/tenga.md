# DESIGN.md — TENGA（テンガ）

> TENGA（テンガ / https://www.tenga.co.jp/ ）のデザイン仕様書。
> 「性を表通りに」を掲げ、プレジャーアイテムを工業デザインの対象に引き上げた日本のブランド。
> TENGA GEO 等が **レッド・ドット・デザイン賞 Best of the Best**（上位約 2%）を受賞している。
> 最大の特徴は **白地に黒の力強いディスプレイ書体（IBM Plex Sans）** と、製品ラインを象徴する **赤・黄・緑のアクセント三色**。
> 実サイトの computed style 実測（2026-06-27 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白地（#ffffff）× ブラック（#000000）** を基調に、巨大なディスプレイ書体と製品写真で「愛と自由」をストレートに打ち出す、クリーンで力強いプロダクトサイト。装飾を排し、製品そのものの造形美を主役にする
- **TENGA について**: マスターベーションアイテムを工業デザイン・ブランディングの対象として再定義した企業。CUP シリーズの **赤（スタンダード）・黒・白** や、ラインごとの色分けがアイデンティティ。「性を表通りに」というメッセージを、明るくオープンなトーンで発信する
- **密度**: 中密度。大きな見出しと製品写真を軸に、ニュース・記事・メディアをカード状に並べる editorial 寄りの構成。本文 line-height は 1.6
- **キーワード**: 白地、ブラック、IBM Plex Sans、Oswald、赤 #d70c19、グッドデザイン的造形、オープン、力強い、アクセント三色
- **特徴**:
  - 基調は **白 #ffffff × 黒 #000000**。クリーンなキャンバスに製品とタイポグラフィを置く
  - ヒーロー大見出しは **IBM Plex Sans（weight 600、最大 120px）**。「愛と自由と TENGA」を巨大に組む
  - セクションラベル（PICK UP / TOPICS / MEDIA / NEW ARTICLE）は **Oswald**（縦長コンデンスドな欧文ディスプレイ）。letter-spacing を取り力強く見せる
  - 和文・本文は **Noto Sans JP**（チェーン先頭 Noto Sans JP →ヒラギノ角ゴ）。本文色は黒ではなくグレー #555555
  - **アクセント三色** — 赤 #d70c19（TENGAVOICE / CUP の象徴色）、黄 #d7b00c（RELEASE バッジ）、緑 #0b9163（NEWS バッジ）。カテゴリ・バッジを色で分類する
  - 角丸は控えめ。製品カード・バッジはシャープな矩形が基本

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。基調は白地×黒、製品ラインを象徴する赤・黄・緑のアクセント。すべて hex 表記。

### Brand / Core

- **Background (White)** (`#ffffff`): ページ背景・メインキャンバス
- **Ink (Black)** (`#000000`): 大見出し・セクション見出しのテキスト
- **TENGA Red** (`#d70c19`): **ブランドの象徴色**。TENGAVOICE バッジ・強調・CUP のスタンダードカラー
- **Body Grey** (`#555555`): 本文・ナビ・補助テキスト（黒ではなくグレーで柔らかく）

### Accent（製品ライン／カテゴリ色）

- **Signal Yellow** (`#d7b00c`): RELEASE バッジ・新着告知
- **Signal Green** (`#0b9163`): NEWS バッジ・お知らせ
- **TENGA Red** (`#d70c19`): TENGAVOICE・強調（上記 Brand と共通）

### Neutral / Grey

| Role | hex | 用途 |
|------|-----|------|
| Text Primary | `#000000` | 見出し |
| Body Text | `#555555` | 本文・ナビ |
| Text (Warm Black) | `#231815` | 記事リード（DICカラー的な温黒） |
| Surface (Light) | `#f7f7f7` | "ALL PRODUCTS" 等のセクション地・面 |
| Border / Divider | `#e5e5e5` | 区切り線・カード枠 |
| Mid Grey | `#707070` | 補助・アイコン |
| Footer / Dark | `#333333` | フッター・ナビ反転面の地 |
| On Dark Text | `#ffffff` | 黒地・写真上のテキスト |

---

## 3. Typography Rules

> 欧文ディスプレイは **IBM Plex Sans**、セクションラベルは **Oswald**、和文・本文は **Noto Sans JP**。
> いずれも Google Fonts で入手可能なため preview.html でも忠実に再現できる。

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP（先頭） → ヒラギノ角ゴ Pro W3 / Hiragino Kaku Gothic ProN → メイリオ
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **ディスプレイ**: IBM Plex Sans（大見出し・ヒーロー）
- **ラベル / 見出し**: Oswald（縦長コンデンスドのセクションラベル）
- **本文サンセリフ**: Noto Sans JP のラテングリフ

### 3.3 font-family 指定

```css
/* 本文・和文（実測） */
font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN",
  ヒラギノ角ゴシック, "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Verdana, sans-serif;

/* ヒーロー大見出し */
font-family: "IBM Plex Sans", sans-serif;

/* セクションラベル（PICK UP / TOPICS / MEDIA 等） */
font-family: Oswald, sans-serif;
```

- **フォールバックの考え方**: 本文は Noto Sans JP を先頭に置く和文優先型。ヒラギノ→メイリオで OS 差を吸収。欧文ディスプレイ（IBM Plex Sans / Oswald）は専用フォントを単独指定

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | IBM Plex Sans | 120px | 600 | 1.17 | 6px (0.05em) | ヒーロー「愛と自由と TENGA」 |
| Section Label (L) | Oswald | 46px | 400 | 1.3 | 2.76px (0.06em) | PICK UP / TOPICS |
| Section Label (M) | Oswald | 40px | 400 | 1.0–1.6 | 2.4px (0.06em) | MEDIA / NEW ARTICLE |
| Heading (JP) | Noto Sans JP | 28px | 700 | 1.93 | 0.56px (0.02em) | キャッチコピー見出し |
| Card Title (white) | Oswald | 48px | 700 | 1.0 | 2.88px (0.06em) | "DISPOSABLE" 等（写真上） |
| Sub Heading | Noto Sans JP | 24px | 700 | 1.5 | 1.44px (0.06em) | 記事リード |
| Body | Noto Sans JP | 16px | 400 | 1.6 | normal | 本文 |
| Body Small | Noto Sans JP | 14px | 400/500 | 1.6 | 0.7px | 注記・補助 |
| Nav | Oswald / Noto Sans JP | 16–18px | 400 | 1.6 | 2px (0.11em) | グローバルナビ |
| Caption | Noto Sans JP | 10px | 500 | 1.4 | 0.5px | フッター微細テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（16px / 25.6px）
- **JP 見出しの行間**: 1.5〜1.93（キャッチコピーは 1.93 と広め）
- **欧文ディスプレイ（Oswald）の行間**: 1.0〜1.3（タイト）
- **本文の字間 (letter-spacing)**: normal（和文本文）
- **欧文ラベルの字間**: 0.05〜0.11em（Oswald / IBM Plex Sans を力強く見せる）

**ガイドライン**:
- Oswald のセクションラベルは letter-spacing 0.06em 前後で組み、コンデンスドの密度を活かす
- 和文キャッチコピーは line-height 1.9 前後でゆったり、本文は 1.6

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は未指定 */
```

- 実測では `font-feature-settings: normal`。字間は letter-spacing で調整

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Primary（製品・主要 CTA）**
- Background: `#d70c19`（TENGA Red）
- Text: `#ffffff`
- Padding: 14px 28px
- Border Radius: `4px`
- Font Size: 16px
- Font Weight: 700

**Secondary（白地・アウトライン）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Padding: 12px 24px
- Border Radius: `4px`

**View All / テキストリンク**
- Oswald・uppercase・letter-spacing 0.06em
- 下線または矢印（→）で誘導

### Badges（カテゴリ）

- **RELEASE**: 地 `#d7b00c`（黄）/ 白文字
- **NEWS**: 地 `#0b9163`（緑）/ 白文字
- **TENGAVOICE**: 地 `#d70c19`（赤）/ 白文字
- 矩形〜わずかな角丸、Oswald で短くラベリング

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Border Radius: `4px`
- Padding: 12px 16px
- Font Size: 16px
- Font Family: Noto Sans JP チェーン

### Cards

- Background: `#ffffff` / `#f7f7f7`
- Border: 1px solid `#e5e5e5`
- Border Radius: `4px`
- 製品・記事写真を上部に大きく、下にタイトル（Oswald）と日付
- 影は控えめ（ホバーで軽く浮かせる程度）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 48px |
| XXL | 80px |

### Container

- Max Width: 約 1200px
- Padding (horizontal): 16〜70px（セクションにより可変）

### Grid

- Columns: 製品・記事グリッドは 3〜4 カラム
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットなセクション・バッジ |
| 1 | `0 2px 6px rgba(0,0,0,0.08)` | 製品・記事カード |
| 2 | `0 6px 16px rgba(0,0,0,0.12)` | ホバー時のカード・ドロップダウン |
| 3 | `0 12px 32px rgba(0,0,0,0.16)` | モーダル・フローティング |

---

## 7. Do's and Don'ts

### Do（推奨）

- 白地 #ffffff にブラック見出し＋製品写真で、クリーンに製品の造形を見せる
- ヒーローは IBM Plex Sans を大きく（〜120px・weight 600）、セクションラベルは Oswald を使う
- カテゴリは赤 #d70c19 / 黄 #d7b00c / 緑 #0b9163 のバッジで色分けする
- 本文は黒ではなくグレー #555555、line-height 1.6 で組む
- 欧文ラベルは uppercase ＋ letter-spacing 0.06em

### Don't（禁止）

- 本文に純黒 #000000 を使わない（見出しは黒、本文はグレー #555 が基調）
- アクセント三色を無秩序に混ぜない（赤=強調、黄=新着、緑=お知らせの役割を守る）
- ヒーロー以外で巨大ディスプレイ書体を乱用しない
- 和文フォントを 1 つだけ指定しない（必ず Noto Sans JP →ヒラギノのチェーンを書く）
- 過度な装飾・グラデーションを足さない（クリーンな白地が基調）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1 カラム、ナビはハンバーガー |
| Tablet | 768–1024px | 2 カラム |
| Desktop | > 1024px | 3〜4 カラムグリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- ヒーロー大見出し（120px）はモバイルで 40〜56px 程度まで縮小
- 本文はモバイルでも 16px を基準に保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #d70c19 (TENGA Red)
Ink: #000000  / Body Text: #555555
Background: #ffffff
Accent: #d7b00c (Yellow / Release), #0b9163 (Green / News)
Display Font: "IBM Plex Sans", sans-serif (weight 600)
Label Font: Oswald, sans-serif (uppercase)
Body Font: "Noto Sans JP", "ヒラギノ角ゴ Pro W3", sans-serif
Body Size: 16px
Line Height: 1.6
Radius: 4px
```

### プロンプト例

```
TENGA のデザインシステムに従って、製品一覧ページを作成してください。
- 背景: #ffffff（白）、見出し: #000000、本文: #555555
- ヒーロー大見出しは IBM Plex Sans（weight 600）を大きく
- セクションラベル（PICK UP / NEWS 等）は Oswald・uppercase・letter-spacing 0.06em
- 和文・本文は "Noto Sans JP", "ヒラギノ角ゴ Pro W3", sans-serif、line-height 1.6
- カテゴリバッジは 赤 #d70c19 / 黄 #d7b00c / 緑 #0b9163 で色分け
- 主要 CTA は TENGA Red #d70c19 の塗り、radius 4px
```
