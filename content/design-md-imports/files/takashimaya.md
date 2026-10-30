# DESIGN.md — TAKASHIMAYA（高島屋）

> 高島屋（https://www.takashimaya.co.jp/）のデザイン仕様書。
> 1831年創業の老舗百貨店。"いつも、人から。" をブランド哲学に掲げる。
> 実サイトの computed style 実測（2026-06-18 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調に、**高島屋レッド `#dd0012`** のアクセントで老舗百貨店の格と信頼感を表現。装飾を抑え、余白と文字組で品位を伝えるクラシカル・エディトリアル
- **密度**: 本文の line-height は 1.6 で統一。百貨店のインフォメーションとして適度な密度を保ちながら、清潔感と読みやすさを確保
- **キーワード**: クラシカル、品格、クリムゾンレッド、デュアルフォントシステム、抑制された装飾
- **特徴**:
  - **デュアルフォントシステム**: 欧文ディスプレイに **Jost**、和文に **Noto Sans JP** を使用。英語の "TOP MESSAGE"、"VOL.26"、"VIEW MORE" 等のアクセントテキストに Jost を配し、老舗でありながら現代的な洗練を演出
  - **ブランドカラーは `#dd0012`（高島屋レッド / クリムゾン）**。標準的な赤よりやや深みのある純度の高いクリムゾンで、重要なお知らせバナー、CTA ボーダー、ナビアクセント等に一貫使用
  - テキストカラーは `#333333` で統一。純黒を避け、上品さを維持
  - **角丸は控えめ**。`0px`（直角）が基本で、一部 `10px` の緩やかな角丸。ピルボタンは使わない
  - **影の使用は極めて少ない**。フラットなデザインで階層は色面とボーダーで表現
  - ウェイト使い分けが特徴的: 400（本文）/ 500（中間強調）/ 600（ナビ）/ 700（見出し）の4段階を使い分ける。500 は百貨店らしい控えめな強調として多用
  - body テキストと小ラベルに `font-feature-settings: "palt"` を適用。和文のプロポーショナル字詰めで上品な文字組を実現
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Takashimaya Red** (`#dd0012`): ブランドカラー。重要なお知らせバナー背景、CTA ボーダー、ナビアクセントライン。標準的な赤（`#ff0000`）より深く、クリムゾン寄りの品格ある赤
- **Takashimaya Red (hover 推奨)** (`#c4000f`): ホバー・プレス時の暗めバリエーション（推奨値）

### CTA / Buttons

- **Red CTA**: 背景 `#dd0012` / 文字 `#ffffff` / border `1px solid #dd0012` / radius `10px`
- **White CTA**: 背景 `#ffffff` / 文字 `#333333` / border なし / radius `0px`
- **Outline CTA**: 背景 `#ffffff` / 文字 `#333333` / border `1px solid #000000` / 18px / padding `15px 0`
- **Red Banner**: 背景 `#dd0012` / 文字 `#ffffff` / radius `0px` / padding `7px 20px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#333333` | (51, 51, 51) | 本文テキスト・見出し |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |
| Light Gray Border | `#dddddd` | (221, 221, 221) | 区切り線・テーブルボーダー |
| Section BG | `#e7e7e7` | (231, 231, 231) | セクション背景面 |

### Semantic（実測未確認・推奨値）

実サイトには明確なセマンティック色は表面化していない。百貨店向けに推奨する補完値:

- **Danger**: `#cc0000` 程度（ブランドレッドと近いが区別可能な暗赤）
- **Success**: `#2e7d32` 程度（落ち着いたグリーン）
- **Warning**: `#e65100` 程度（品のあるオレンジ）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を使用。Google Fonts 配信のため環境依存なく安定表示
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **ディスプレイ用**: **Jost** — 英語のアクセントテキスト（"TOP MESSAGE"、"VOL.26"、"VIEW MORE" 等）に使用する幾何学的サンセリフ。Futura の精神を受け継ぐモダンな書体で、百貨店の現代性を表現
- **本文用**: Noto Sans JP の欧文グリフをそのまま使用

### 3.3 font-family 指定

```css
/* 和文本文・見出し */
font-family: "Noto Sans JP", sans-serif;

/* 欧文ディスプレイ（英語アクセント） */
font-family: Jost, sans-serif;
```

**デュアルフォントの使い分け**:
- 和文テキスト（見出し・本文・ナビ）は Noto Sans JP
- 英語のアクセントテキスト（セクションラベル・号数・VIEW MORE 等）は Jost
- 1つの見出しブロック内で Jost（英語）+ Noto Sans JP（日本語）を組み合わせるパターンが頻出（例: "TOP MESSAGE" + "トップメッセージ"）

### 3.4 文字サイズ・ウェイト階層

> 実測値（企業情報トップ、2026-06-18 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (EN) | Jost | 50px | 700 | 1.2 | 0.02em | `#333333` | "VOL.26" 等の号数表示 |
| Section Label (EN) | Jost | 30px | 700 | 1.6 | 0.04em | `#ffffff` | "TOP MESSAGE" 等 |
| Section Label (JA) | Noto Sans JP | 18px | 700 | 1.6 | 0.06em | `#ffffff` | "トップメッセージ" |
| Body Lead | Noto Sans JP | 20px | 500 | 1.6 | 0.024em | `#ffffff` | "企業情報トップ" リード文 |
| H2 Banner | Noto Sans JP | 15px | 500 | 1.6 | 0 | `#ffffff` | "重要なお知らせ" 赤帯見出し |
| H2 Section | Noto Sans JP | 16px | 700 | 1.0 | 0 | `#333333` | セクション内見出し |
| Body | Noto Sans JP | 16px | 400 | 1.6 | 0.025em | `#333333` | 本文（palt 適用） |
| Nav Link | Noto Sans JP | 15px | 600 | 1.6 | 0.032em | `#333333` | "企業情報" ナビリンク |
| Store Name | Noto Sans JP | 15px | 600 | 1.4 | 0 | `#ffffff` | "日本橋高島屋S.C." |
| Menu Item | Noto Sans JP | 14px | 500 | 1.6 | 0.034em | `#ffffff` | メニュー内アイテム |
| CTA Text | Noto Sans JP | 14px | 400 | 1.6 | 0 | `#333333` | "一覧を見る" |
| VIEW MORE (EN) | Jost | 11px | 700 | 1.0 | 0.04em | `#333333` | "VIEW MORE" リンク |
| Small Label | Noto Sans JP | 10px | 400 | 1.3 | 0 | `#333333` | "百貨店業" 等（palt 適用） |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (16px)**: `1.6`（25.6px / 16px）-- 百貨店として適度なゆとり
- **リード文 (20px)**: `1.6`（32px / 20px）
- **メニュー・ナビ (14-15px)**: `1.6`（22.4px / 14px）
- **セクション見出し (16px)**: `1.0`（タイト）
- **ディスプレイ (50px)**: `1.2`（60px / 50px）
- **小ラベル (10px)**: `1.3`（13px / 10px）

**字間 (letter-spacing)** -- 実測:
- **本文**: `0.025em`（微細なトラッキングで可読性向上）
- **ナビリンク**: `0.032em`
- **メニューアイテム**: `0.034em`
- **セクションラベル日本語**: `0.06em`（やや広めのトラッキングで品格を演出）
- **Jost ディスプレイ**: `0.02em`（英語の幾何学的サンセリフに合った広めの字間）
- **Jost VIEW MORE**: `0.04em`（小さい英文を広く開ける）
- **見出し・バナー**: `0`（詰めず標準）

**ガイドライン**:
- 全要素で **line-height 1.6** を基本リズムとする（百貨店の統一感）
- 本文の letter-spacing は `0.025em` と控えめ。百貨店の抑制的な印象に合致
- 日本語ラベルは `0.06em` と広めに取り、格式ある雰囲気を作る
- Jost の英語テキストは `0.02em`--`0.04em` とやや広めに。幾何学的書体の視認性を確保

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 百貨店のコンテンツは固有名詞（店舗名、ブランド名）が多いため `keep-all` との相性が良い場合もある

### 3.7 OpenType 機能

```css
/* 本文テキスト・小ラベルに適用 */
font-feature-settings: "palt" 1;
```

- **palt**: 本文テキスト（`.message-txt` 等）と小ラベル（"百貨店業" 等 10px）に適用
- 見出しやナビには `palt` を適用しない（標準メトリクスのまま）
- 百貨店の上品な文字組の要として `palt` が機能している

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（レッド角丸）** -- 赤帯内のリンク・CTA
- Background: `#dd0012`
- Text: `#ffffff`
- Padding: `7px 20px`
- Border: `1px solid #dd0012`
- Border Radius: `10px`
- Font: Noto Sans JP, 14-15px, weight 500-700

**Secondary CTA（白ボタン）** -- "一覧を見る"
- Background: `#ffffff`
- Text: `#333333`
- Padding: `8px 16px`
- Border: none
- Border Radius: `0px`
- Font: Noto Sans JP, 14px, weight 400

**Outline CTA（枠線ボタン）** -- "グループ事業一覧"
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #000000`
- Padding: `15px 0`（幅は親要素に準拠）
- Border Radius: `0px`
- Font: Noto Sans JP, 18px, weight 400

**VIEW MORE（テキストリンク）**
- Background: transparent
- Text: `#333333`
- Font: Jost, 11px, weight 700, letter-spacing 0.04em
- Border: none
- text-transform: uppercase 的な扱い

**Red Banner（重要なお知らせ帯）**
- Background: `#dd0012`
- Text: `#ffffff`
- Padding: `7px 20px`
- Border Radius: `0px`（完全直角）
- Font: Noto Sans JP, 13-15px, weight 500-700

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Border (focus): `1px solid #dd0012`
- Border Radius: `0px`（百貨店の直角基調に合わせて）
- Padding: `12px 16px`
- Font: Noto Sans JP, 16px, weight 400
- Height: `44px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#e7e7e7`（セクション背景）
- Border: `1px solid #dddddd`
- Border Radius: `0px`（直角が基本）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #dddddd` 程度
- 高島屋レッドのアクセントラインがナビ下部に配置

### Footer

- Background: `#ffffff` または `#e7e7e7`
- Border Top: `1px solid #dddddd`
- Padding: `40px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24-32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | ボタン・カード・バナー（基本） |
| Small | 10px | 赤 CTA の緩やかな角丸 |

### Grid

- レスポンシブグリッド（Flexbox ベース）
- Gutter: 20-24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本全要素） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は**色面の切り替え**（白 `#ffffff` ↔ ライトグレー `#e7e7e7`）と**ボーダー** `#dddddd` で表現
- 百貨店の品格を損なわないよう、影は極めて控えめに使用

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文アクセントテキストには **Jost** を使い、和文には **Noto Sans JP** を使う（デュアルフォントシステム）
- 全要素の line-height は **1.6 を基準**にする（高島屋の統一感）
- ブランドカラーは **`#dd0012`（高島屋レッド）** を一貫して使用する
- テキストカラーは **`#333333`** で統一し、純黒 `#000000` を避ける
- 本文には **`font-feature-settings: "palt"`** を適用する
- 日本語ラベルの letter-spacing は **0.06em** と広めにして格式を出す
- ボタン・カードは **直角（radius 0px）** を基本にする
- ウェイト 500（medium）を中間強調として活用する

### Don't（禁止）

- **ピルボタン（radius 9999px）を使わない** -- 百貨店の直角基調にそぐわない
- テキストに **純黒 `#000000`** を使わない（`#333333` で統一）
- **Jost を和文テキストに使わない** -- Jost は欧文ディスプレイ専用
- **Noto Sans JP を欧文アクセントに使わない** -- "TOP MESSAGE" 等は Jost の仕事
- 高島屋レッドを **広い面積の背景**に多用しない（バナー・アクセントに限定。大面積はスペシャルページ等の例外のみ）
- **影（box-shadow）を多用しない** -- 階層は色面とボーダーで表現
- **カジュアルなデザイン要素**（絵文字、グラデーション、アニメーション多用）を入れない -- 百貨店の品格を維持
- 本文の **line-height を 1.5 以下にしない**（可読性と品位の低下）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- ディスプレイ (50px): 32-36px に縮小
- セクションラベル EN (30px): 22-24px に縮小
- 本文サイズは 16px を維持（line-height も 1.6 維持）
- ナビはハンバーガーメニュー化

### タッチターゲット

- CTA ボタン: 高さ 44px 以上（WCAG 基準）
- テキストリンク: タップ領域を十分に確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Takashimaya Red (Brand): #dd0012
Text Primary: #333333
White (Background): #ffffff
Light Gray Border: #dddddd
Section BG: #e7e7e7

Font (JA): "Noto Sans JP", sans-serif
Font (EN display): Jost, sans-serif

Body Size: 16px / line-height 1.6 / weight 400 / letter-spacing 0.025em
Body: font-feature-settings "palt"

Display EN: Jost / 50px / weight 700 / line-height 1.2 / letter-spacing 0.02em
Section Label EN: Jost / 30px / weight 700 / letter-spacing 0.04em
Section Label JA: Noto Sans JP / 18px / weight 700 / letter-spacing 0.06em

Border Radius: 0px（基本）/ 10px（赤 CTA）
Shadow: 基本 none。階層は色面（#ffffff / #e7e7e7）とボーダー（#dddddd）で表現
```

### プロンプト例

```
高島屋のデザインに従って、季節の催事案内セクションを作成してください。
- 和文フォント: "Noto Sans JP", sans-serif
- 欧文アクセント: Jost, sans-serif（"SUMMER EVENT" 等のラベルに使用）
- セクションラベル EN: Jost / 30px / weight 700 / letter-spacing 0.04em / color #333333
- セクションラベル JA: Noto Sans JP / 18px / weight 700 / letter-spacing 0.06em / color #333333
- 本文: Noto Sans JP / 16px / weight 400 / line-height 1.6 / letter-spacing 0.025em / color #333333 / font-feature-settings "palt"
- 補助テキスト: 14px / weight 500 / line-height 1.6 / color #333333
- ブランドアクセント: #dd0012（バナー・ボーダーに限定使用）
- CTA ボタン: 背景 #dd0012 / 白文字 / border-radius 10px / padding 7px 20px
- セカンダリ CTA: 背景 白 / 文字 #333333 / border 1px solid #000000 / radius 0px
- カード: 背景 白 / border 1px solid #dddddd / radius 0px / shadow none
- セクション背景: #e7e7e7（ライトグレー面）
- 影は基本使わない。階層は色面とボーダーで表現
- 全要素 line-height 1.6 を維持
- ピルボタンは使わない（直角または緩やかな 10px 角丸）
```
