# DESIGN.md — FANCL

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 取得日: 2026-06-02 / 出典: https://www.fancl.co.jp/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: クリーン、温かみのある、信頼感のあるヘルスケア EC。無添加（additive-free）ブランドらしい清潔感と透明感が基調
- **密度**: ゆったりとした EC 型。商品カードと余白のバランスで呼吸感を確保
- **キーワード**: 清潔、信頼、やさしい、ブルー基調、無添加

**特徴的なデザイン要素**:
- ブルーのグラデーショングループ（ダークネイビー → ブランドブルー → CTA ブルー → リンクブルー）で統一感を演出
- ページ背景は純白ではなく `#f7fafd`（ごく薄いブルーホワイト）。肌にやさしいブランドイメージを面で表現
- 見出しの `letter-spacing` が極端に広い（最大 0.44em）。ゆったりと上品な印象を与える
- ヒラギノ丸ゴシックをフォールバックに含む珍しい指定。角ゴシック → 丸ゴシックの順で、柔らかい印象に倒す意図
- pill 型タブボタン（radius 30px）と半 pill 型プロモバッジ（右側のみ丸い）が特徴的

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Blue** (`#1e4d9e`): メインのブランドカラー。Zen Kaku Gothic New 見出し、セクションタイトル等に使用
- **Dark Navy** (`#072b4d`): システムフォント見出し、製品エリアのヘッダー。ブランドブルーの暗色バリエーション

### Action（アクションカラー）

- **CTA Blue** (`#0070c0`): pill タブボタン（active）、主要 CTA の背景色
- **Link Blue** (`#0067cc`): テキストリンク色
- **Promo Orange** (`#f0ac00`): プロモーションバッジ、特価ラベル。ブルー基調に対する暖色アクセント

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト、見出しテキスト
- **Text Dark Navy** (`#00254d`): 強調テキスト（ネイビー系）
- **Text Gray** (`#5c6063`): ナビゲーション、非アクティブタブのテキスト
- **Text Muted** (`#757575`): 検索ボタン、補足テキスト
- **Border** (`#e0e0e0`): 区切り線、入力欄の枠（推定値）

### Surface（面の色）

- **Background** (`#f7fafd`): ページ背景。純白ではなく、ごく薄いブルーホワイト
- **Surface White** (`#ffffff`): カード、モーダル、商品カード背景
- **Surface Light Blue** (`#f1f8ff`): プロモーションセクション、特集エリアの背景
- **Surface Gray** (`#eff0f4`): カテゴリヘッダー、分類バーの背景
- **Inactive Tab** (`#f0f0f0`): 非アクティブタブの背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: ヒラギノ角ゴ ProN W3 / Pro W3。本文・ナビゲーション・UI 全般に使用
- **丸ゴシック（フォールバック）**: ヒラギノ丸ゴ ProN W4 / Pro W4。角ゴが利用できない環境で柔らかい印象を維持
- **Web フォント（見出し）**: Zen Kaku Gothic New。トップページのヒーロー見出し、セクションタイトルに使用

### 3.2 欧文フォント

- **サンセリフ**: フォントスタック内で欧文専用指定はなし。和文フォント内の欧文グリフを使用
- **等幅**: 指定なし

### 3.3 font-family 指定

```css
/* 本文・UI（システムフォントスタック） */
font-family: "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             "ヒラギノ丸ゴ ProN W4", "Hiragino Maru Gothic ProN",
             "ヒラギノ丸ゴ Pro W4", "Hiragino Maru Gothic Pro",
             メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 見出し・ブランド表現（Web フォント） */
font-family: "Zen Kaku Gothic New", sans-serif;
```

**フォールバックの考え方**:
- 和文フォントのみのスタックで、欧文フォントを先頭に置かない構成
- ヒラギノ角ゴ（角ゴシック）を最優先とし、次にヒラギノ丸ゴ（丸ゴシック）を配置。macOS で角ゴが利用不可の場合に丸ゴシックで柔らかさを維持する意図
- ProN と Pro の両方を列挙し、JIS2004 対応・非対応環境の両方をカバー
- メイリオ → MS Pゴシックの順で Windows 環境にもフォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Subheading | Zen Kaku Gothic New | 16px | 700 | 1.4 | 0.44em (7px) | ブランドブルー `#1e4d9e`。極端に広い字間 |
| Section Title | Zen Kaku Gothic New | 22-24px | 400 | 1.4 | 0.30em (6.6-7px) | `#000000`。軽量ウェイトで上品に |
| Area Heading | System Stack | 20-22px | 700 | 1.4 | normal | `#072b4d` ダークネイビー |
| Promo Heading | Zen Kaku Gothic New | 18px | 700 | 1.4 | 0.11em (2px) | `#1e4d9e`、bg `#f1f8ff` |
| Category Label | System Stack | 16px | 700 | 1.4 | normal | `#072b4d`、bg `#eff0f4` |
| Body | System Stack | 16px | 400 | 1.4 | normal | `#000000` |
| Nav | System Stack | 16px | 400 | 1.4 | normal | `#5c6063` |
| Small | System Stack | 12.32px | 400 | 1.4 | normal | カテゴリ補足テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.4（22.4px / 16px）。EC サイトとしてはやや詰め気味で、情報を効率的に見せる
- **見出しの行間**: 1.4（本文と同じ）
- **本文の字間 (letter-spacing)**: normal（0）。字間調整は見出しのみに適用
- **見出しの字間**: Zen Kaku Gothic New 使用時に 0.11em〜0.44em の広い字間を適用。特にヒーロー見出しの 0.44em は極端に広く、ゆったりとした高級感を演出

**ガイドライン**:
- Zen Kaku Gothic New の見出しには必ず広い `letter-spacing` を適用する。これがなければ FANCL のブランド感が出ない
- システムフォントの見出しには `letter-spacing` を適用しない（UI 的な見出しと装飾的な見出しを使い分ける）
- 本文の `line-height: 1.4` は日本語としてはやや狭いが、EC 商品一覧の密度を確保するための意図的な設定

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* 明示的な palt / kern 指定なし */
/* Zen Kaku Gothic New の見出しは letter-spacing で手動調整 */
```

- palt: 使用せず。代わりに `letter-spacing` で手動で字間を制御
- kern: 明示指定なし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Pill Tab (Active)**
- Background: `#0070c0`
- Text: `#ffffff`
- Padding: 8px 20px
- Border Radius: 30px
- Border: 1px solid `#0070c0`
- Font Size: 14.08px
- Font Weight: 700

**Pill Tab (Inactive)**
- Background: `#f0f0f0`
- Text: `#5c6063`
- Padding: 8px 20px
- Border Radius: 30px
- Border: none
- Font Size: 14.08px
- Font Weight: 400

**Promo Badge (Half-pill)**
- Background: `#f0ac00`
- Text: `#ffffff`
- Border Radius: 0px 30px 30px 0px（右側のみ丸い半 pill 形状）
- Font Size: 12px
- Font Weight: 700
- 用途: 「この商品も一緒にいかがですか」等のプロモーション表示

**Search Submit**
- Background: `#ffffff`
- Text: `#757575`
- Border Radius: 0px 5px 5px 0px（右側のみ角丸、検索バーと結合）
- Font Size: 14px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#0070c0`
- Border Radius: 5px
- Padding: 10px 12px
- Font Size: 16px
- Font Family: System Stack

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e8e8e8`
- Border Radius: 0px（角丸なし。四角い端正なカード）
- Padding: 0px（画像は端までフルブリード）
- Shadow: none（フラット）

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
| XXL | 64px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 16px

### Grid

- Columns: 4（商品カード）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 商品カード、基本要素（フラットなデザイン） |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | ドロップダウン、フローティングカート |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル |

エレベーションは控えめ。ほぼフラットなデザインで、影は最小限に抑えている。

---

## 7. Do's and Don'ts

### Do（推奨）

- Zen Kaku Gothic New の見出しには必ず広い `letter-spacing`（0.11em 以上）を付与する
- ページ背景には `#f7fafd` を使い、純白にしない。ブルーホワイトの清潔感がブランドの核
- フォントスタックにはヒラギノ角ゴ → ヒラギノ丸ゴの順でフォールバックを含め、柔らかい印象を保つ
- pill ボタンの radius は 30px。中途半端な角丸（8px 等）にしない
- プロモバッジは半 pill（右側のみ丸い）で統一する
- CTA には `#0070c0` を使い、ブランドブルー `#1e4d9e` とは使い分ける

### Don't（禁止）

- ページ背景を純白 `#ffffff` にしない（ブランドの清潔感が損なわれる）
- Zen Kaku Gothic New の見出しに `letter-spacing: normal` を使わない（ブランドの上品さが消える）
- ブランドブルー `#1e4d9e` を CTA ボタンの背景に使わない（テキスト見出し専用色）
- システムフォントの見出しに広い `letter-spacing` を適用しない（UI 見出しと装飾見出しを混同しない）
- プロモーションのオレンジ `#f0ac00` を常用しない（アクセントとして控えめに使う）
- 丸ゴシック（ヒラギノ丸ゴ）を第一候補にしない。あくまで角ゴシックのフォールバックとして配置する

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | 1カラム。商品カードは縦積み |
| Tablet | <= 1023px | 2カラムグリッド |
| Desktop | > 1024px | 4カラムグリッド。最大幅 1200px |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは見出しの `letter-spacing` をデスクトップの 60-70% 程度に縮小（可読性確保）
- 本文は 14-16px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue: #1e4d9e
Dark Navy: #072b4d
CTA Blue: #0070c0
Link Blue: #0067cc
Promo Orange: #f0ac00
Text Color: #000000
Text Gray: #5c6063
Background: #f7fafd
Surface Light Blue: #f1f8ff
Font (body): "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ヒラギノ丸ゴ ProN W4", "Hiragino Maru Gothic ProN", メイリオ, Meiryo, sans-serif
Font (heading): "Zen Kaku Gothic New", sans-serif
Body Size: 16px
Line Height: 1.4
Heading Letter Spacing: 0.11em - 0.44em (Zen Kaku only)
Button Radius: 30px (pill)
```

### プロンプト例

```
FANCL のデザインシステムに従って、スキンケア商品一覧ページを作成してください。
- ページ背景: #f7fafd（純白ではなくブルーホワイト）
- セクションタイトル: Zen Kaku Gothic New / 22px / weight 400 / letter-spacing 0.30em / color #000000
- 商品名: ヒラギノ角ゴ系 / 16px / weight 700 / color #072b4d
- CTA ボタン: 背景 #0070c0 / 白文字 / radius 30px（pill 型）
- 商品カード: 白背景 / ボーダー 1px solid #e8e8e8 / 角丸なし / フラット
- プロモバッジ: 背景 #f0ac00 / 白文字 / 右半 pill（0 30px 30px 0）
```
