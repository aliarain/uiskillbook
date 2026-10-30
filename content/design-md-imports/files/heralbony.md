# DESIGN.md — HERALBONY

> HERALBONY 公式オンラインストア（https://www.heralbony.com/）のデザイン仕様書。
> "異彩を、放て。" をスローガンに掲げ、知的障害のあるアーティストの作品をファッション・アートプロダクトとして展開するソーシャルブランド。
> 実サイトの computed style に基づいて記述（2026-05-09 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: アート作品を主役にした EC サイト。余白を活かしたギャラリー的構成と、アーティストへのリスペクトを表現する丁寧なタイポグラフィ
- **密度**: 中程度。商品一覧は標準的なグリッドだが、ブランドストーリーセクションはゆったりした余白で構成
- **キーワード**: アーティスティック、インクルーシブ、ギャラリー、ネイビー、ウォーム
- **特徴**:
  - **ネイビーブルーのブランドカラー `#21428b`** — 信頼と知性を感じさせるダークネイビー。CTA やアクセントに使用
  - **Noto Sans JP 一本** — 和文・欧文ともに Noto Sans ファミリーで統一。装飾性を排しアート作品に視線を集める
  - **pill CTA（radius 450–900px）** — ボタンはすべて完全な pill 形状。角張った要素を排し、有機的な柔らかさを演出
  - **高い letter-spacing** — 見出し・ブランドコピーに `letter-spacing: 6–9px` の広い字間。雑誌的な高級感
  - **ウォームベージュの背景 `#fbf9f4`** — 純白ではなく、わずかにクリームがかった背景色。アートのキャンバスを思わせる温もり
  - **アーティスト名を青で強調** — 商品リスト内のアーティスト名を `#21428b` で表示。「作家性」の訴求をデザインに組み込む

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Navy** (`#21428b`): ブランドカラー。CTA ボタン背景、アーティスト名テキスト、アクセント
- **Dark** (`#1c1b1b`): ボタンデフォルト背景（CSS Custom Properties 定義）

### Semantic（意味的な色）

- **Sold Out** (`#c9c9c9`): 売り切れバッジ背景
- **NEW Badge** (`#333333`): NEW ラベル背景

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 見出しテキスト、商品タイトル
- **Text Secondary** (`#444444`): 本文テキスト、説明文
- **Text Tertiary** (`#6a6a6a`): ヘッダー内の薄いテキスト
- **Text Artist** (`#232425`): お知らせセクションのテキスト
- **Border** (`#b1b0ad`): 標準ボーダー
- **Border Header** (`#dedede`): ヘッダーボーダー
- **Background** (`#ffffff`): ページ標準背景
- **Background Warm** (`#fbf9f4`): ブランドストーリーセクション背景、ニュースレター背景
- **Background News** (`#fbfcf9`): お知らせセクション背景
- **Surface Header** (`#fcfcfc`): グローバルヘッダー
- **Surface Light** (`#efefef`): 薄い面色

### Accent

- **Featured Artist** (`#dbbcd2`): 月間フィーチャーアーティストセクション背景。ソフトピンク
- **Page Switcher Active** (`#52514f`): タブ切替のアクティブ背景

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（全般）**:
- Noto Sans Japanese / Noto Sans JP

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans — 和文と同じファミリーで統一

### 3.3 font-family 指定

```css
/* 本文 */
font-family: "Noto Sans Japanese", sans-serif;

/* 見出し・UI（Noto Sans + Noto Sans JP の併用） */
font-family: "Noto Sans", "noto sans JP", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans ファミリーのみ。欧文は "Noto Sans" が先で、和文は "noto sans JP" がフォールバック
- CSS Custom Properties で `--heading-font-family` と `--text-font-family` に分離されているが、実質同じ Noto Sans Japanese

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Sans JP | 30px | 500 | 1.7 | 9px (0.3em) | ブランドコピー "異彩を、放て。" |
| Heading 1 | Noto Sans JP | 30px | 500 | 1.4 | 6px (0.2em) | セクション大見出し "お知らせ" |
| Heading 2 | Noto Sans JP | 20px | 400 | 1.38 | normal | 商品タイトル（大） |
| Heading 3 | Noto Sans JP | 18px | 400 | 1.65 | 0.03em | ニュース見出し |
| Heading 4 | Noto Sans JP | 16px | 700 | 1.65 | 0.1em | カテゴリ見出し "ファッション" |
| Body | Noto Sans JP | 15px | 400 | 1.65 | normal | 本文テキスト |
| Body Manifesto | Noto Sans JP | 20px | 400 | 2.2 | 0.1em | ブランドマニフェスト本文 |
| Caption | Noto Sans JP | 13px | 400–500 | 1.53 | 0.05em | アナウンスバー、セクションラベル |
| Small | Noto Sans JP | 13px | 700 | 1.65 | 0.03em | サブ見出し |
| Artist Name | Noto Sans JP | 16px | 500 | 1.6 | 0.03em | 商品リスト内アーティスト名（`#21428b`） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.65（15px / 24.75px）
- **マニフェストの行間**: 2.2（20px / 44px）。ブランドコピーは特別に広い行間
- **見出しの行間**: 1.4–1.7
- **本文の字間 (letter-spacing)**: normal
- **見出しの字間**: 0.1–0.3em。セクションタイトルは意図的に広い字間で雑誌的に
- **カテゴリラベルの字間**: 0.1em（1.6px / 16px）

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- palt 未使用。Noto Sans JP の標準字詰めに任せている

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill / Navy）**
- Background: `#21428b`
- Text: `#ffffff`
- Padding: 14px 28px
- Border Radius: 450px（pill）
- Border: 1px solid `#444444`
- Font Size: 14px
- Font Weight: 400
- Letter Spacing: 0.2em

**Secondary CTA（pill / Outline）**
- Background: `#ffffff`
- Text: `#333333`
- Padding: 14px 72px 14px 32px（右に矢印アイコンスペース）
- Border Radius: 900px（pill）
- Border: 1px solid `#333333`
- Font Size: 16px
- Font Weight: 500
- Letter Spacing: 0.05em

**Search Submit**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 0 10px
- Border Radius: 450px
- Font Size: 16px
- Font Weight: 500

**Page Switcher Tab**
- Active Background: `#52514f`
- Active Text: `#ffffff`
- Inactive Background: transparent
- Inactive Text: `#444444`
- Border Radius: 34px
- Padding: 0 10px
- Font Size: 14px
- Letter Spacing: 0.05em

### Cards

**商品カード**
- Background: `#ffffff`
- Border: none（ボーダーレス）
- 商品画像はアスペクト比固定
- 商品タイトル: 16–20px / weight 400
- アーティスト名: 16px / weight 500 / color `#21428b`
- 価格: 15px / weight 400

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#b1b0ad`
- Border Radius: 0px
- Font Size: 15px
- 検索入力はヘッダーオーバーレイ内に配置

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 64px |
| XXL | 100px |

### Container

- Max Width: 約 1200px（推定）
- Padding (horizontal): 20–35px

### Grid

- 商品グリッド: 4 カラム（デスクトップ）
- ニュースカード: 3 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素 |

HERALBONY はシャドウを使わない。背景色の切り替え（`#ffffff` → `#fbf9f4` → `#fbfcf9`）で視覚的な段差を表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA はすべて pill（radius 450px 以上）にする
- アーティスト名は `#21428b`（ネイビー）で強調する
- ブランドストーリーセクションの背景は `#fbf9f4`（ウォームベージュ）を使う
- 大見出しには広い letter-spacing（0.2–0.3em）を適用する
- フォントは Noto Sans JP に統一する
- マニフェスト文の行間は 2.0 以上にする

### Don't（禁止）

- 角丸ボタン（radius 4–8px）を使わない — pill 一択
- 装飾的なフォント（明朝体、手書き風）を使わない — アート作品が主役
- 純黒 `#000000` を本文テキストに使わない — `#333333` または `#444444` を使用
- カードにシャドウを付けない — フラットでギャラリー的に
- ブランドコピーの letter-spacing を省略しない — 広い字間がブランドの品格

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- CTA ボタン: padding 14px 以上を確保
- タブスイッチャー: 高さ 44px 以上

### フォントサイズの調整

- ディスプレイ: デスクトップ 30px → モバイルで縮小
- 商品タイトル: デスクトップ 20px → モバイル 16px
- 本文: 15px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #21428b (Navy)
Text Primary: #333333
Text Secondary: #444444
Background: #ffffff
Background Warm: #fbf9f4
Font: "Noto Sans", "noto sans JP", sans-serif
Body Size: 15px
Line Height: 1.65
CTA Radius: 450px+ (pill)
```

### プロンプト例

```
HERALBONY のデザインシステムに従って、アーティスト一覧ページを作成してください。
- プライマリカラー: #21428b（ネイビー）
- フォント: Noto Sans JP 統一
- CTA: pill ボタン（radius 450px 以上）
- 見出しの字間: 0.2em 以上
- 背景: ブランドセクションは #fbf9f4
- アーティスト名はネイビーで強調
```
