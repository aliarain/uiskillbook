# DESIGN.md --- SHIPS

> SHIPS（シップス）公式サイト（https://www.shipsltd.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づいて記述。取得日: 2026-05-22

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1977年創業の老舗セレクトショップ。"STYLISH STANDARD" を掲げ、トラディショナルな要素を現代的に再解釈するブランド哲学をUIに体現。エディトリアルな雑誌レイアウトで、商品とスタイリングを主役に据える
- **密度**: 中程度。特集・ニュース・商品をカルーセルとグリッドで整理し、余白を十分に取った上品な構成
- **キーワード**: エディトリアル、ネイビー基調、クリーン、スタンダード、上品
- **特徴**: ネイビー `#04345a` のピル型CTAが視覚的アイデンティティ。テキストは weight 400 が主体で、太さに頼らず色とサイズで階層を表現する。欧文 Roboto を先頭に置くフォント戦略で、欧文の美しさを重視しつつ和文は游ゴシック Medium で品位を保つ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Navy** (`#04345a`): メインのブランドカラー。CTAボタン、主要リンク、アクセント面に使用。SHIPS のアイデンティティを象徴する深いネイビー
- **Brand Navy Dark** (`#003559`): フッター、モーダル閉じボタン等の暗めバリエーション

### Accent（アクセント）

- **Sale Red** (`#a50000`): カート・ウィッシュリスト通知バッジ、エラー表示
- **Highlight Yellow** (`#ffee00`): 「開催中」セールバッジの背景

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Title** (`#333333`): セクションタイトル、見出し
- **Text Secondary** (`#666666`): 日付、補足テキスト、フッター
- **Border** (`#333333`): アウトラインボタンの枠線
- **Background** (`#ffffff`): ページ背景
- **Surface Light** (`#f8f8f8`): 商品レビュー背景、セクション背景
- **Surface Gray** (`#eeeeee`): カルーセルドット（非アクティブ）
- **Dot Active** (`#999999`): カルーセルドット（アクティブ）

### Footer

- **Footer Background** (`#666666`): フッター領域の背景
- **Footer Text** (`#ffffff`): フッター内テキスト

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- 游ゴシック Medium（macOS / Windows）--- font-family 内で `"游ゴシック Medium"` と Medium ウェイトを明示指定
- sans-serif（フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Roboto --- Google Fonts。欧文を先頭に配置して欧文グリフの美しさを優先
- セリフ系は使用しない

### 3.3 font-family 指定

```css
/* 全体共通 */
font-family: Roboto, "游ゴシック Medium", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Roboto）を先頭に指定し、英数字を Roboto で表示
- 和文は游ゴシックの Medium ウェイトで統一。「游ゴシック」ではなく「游ゴシック Medium」と明示することで Windows でのかすれ問題を回避
- 最後に generic sans-serif

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Roboto + 游ゴシック Medium | 34px | 400 | 1.65 | normal | "PICK UP" 等の大見出し |
| Section Heading (h3) | Roboto + 游ゴシック Medium | 28px | 400 | 1.46 | normal | セクションタイトル |
| Brand Name (en) | Roboto | 18px | 400 | 1.5 | normal | 欧文ブランド名 |
| Shop Name | Roboto + 游ゴシック Medium | 15px | 400 | 1.5 | normal | 店舗名 |
| Content Body | Roboto + 游ゴシック Medium | 14px | 400 | 1.43 | normal | 商品説明等の本文 |
| Body (base) | Roboto + 游ゴシック Medium | 12px | 400 | 1.5 | normal | 基本テキスト |
| Sub Text | Roboto + 游ゴシック Medium | 12px | 400 | 1.67 | normal | 日付・補足（色 #666666） |
| Nav Links | Roboto + 游ゴシック Medium | 11px | 400 | 1.5 | normal | グローバルナビゲーション |
| Rating | Roboto | 16px | 700 | 1.5 | normal | レビュー評価値（数字のみ Bold） |

### 3.5 行間・字間

- **本文（Content Body）の行間**: 1.43〜1.5。欧文セレクトショップらしくやや詰めた組版
- **見出しの行間**: 1.46〜1.65。表示サイズが大きいため十分な可読性を確保
- **本文の字間 (letter-spacing)**: `normal`（全体的に明示的な letter-spacing は設定しない）
- **見出しの字間**: `normal`

**ガイドライン**:
- SHIPS は全体的に weight 400 で統一し、サイズと色で階層を表現する
- Bold（700）はレビュー評価値の数字のみで使用。見出しにも 400 を使う控えめな運用
- 行間は 1.43〜1.67 と、日本語サイトとしてはやや狭め

### 3.6 禁則処理・改行ルール

```css
/* SHIPS の標準 */
word-break: normal;
overflow-wrap: break-word;
```

- 商品名（ブランド名 + 商品コード）が長くなるため `overflow-wrap: break-word` で折り返し
- ナビゲーションリンクは折り返さない

### 3.7 OpenType 機能

```css
/* SHIPS は palt を使わない */
font-feature-settings: normal;
```

- **palt は適用しない**。letter-spacing も normal。ベタ組みで統一
- Roboto が先頭にあるため、欧文のカーニングは Roboto 側の kern テーブルに依存

### 3.8 縦書き

- 該当なし（全面横書き）

---

## 4. Component Stylings

### Buttons

**Primary CTA（ピル型）**
- Background: `#04345a`
- Text: `#ffffff`
- Padding: 約 `10px 24px`
- Border Radius: `20px`（ピル型）
- Font Size: 14px / Weight 400
- 用途: 「特集をすべて見る」「ニュースをすべて見る」等の主要アクション

**Secondary（アウトライン）**
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #333333`
- Padding: `12px 0`
- Border Radius: `4px`
- Font Size: 14px / Weight 400
- 用途: 「More」等のサブアクション

**Close / Overlay**
- Background: `#003559`
- Text: `#ffffff`
- Font Size: 50px
- 用途: モーダル閉じボタン

**Carousel Arrows**
- Background: `rgba(255,255,255,0.8)`
- Border Radius: `50%`（円形）

**Page Top**
- Background: `rgba(102,102,102,0.9)`
- Border Radius: `50%`（円形）

### Carousel Indicators

| State | Background | Size |
|-------|------------|------|
| Active | `#999999` | 8px 円 |
| Inactive | `#eeeeee` | 8px 円 |

### Badges

| Type | Background | Text | 備考 |
|------|------------|------|------|
| Sale 開催中 | `#ffee00` | `#000000` | セールバッジ |
| Cart / Wishlist Count | `#a50000` | `#ffffff` | 通知バッジ |

### Inputs

- Background: `#ffffff`
- Border: `2px inset #767676`（ブラウザデフォルトに近い）
- Border Radius: `0px`（角張り）
- Padding: `1px 2px`
- Font Size: 12px
- 検索ボックスは枠線なし、`line-height: 29px` でテキスト中央揃え

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`（角丸なし。商品画像をそのまま大きく見せる）
- Padding: 画像直下にテキスト情報
- Shadow: なし（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間 |
| S | 8px | インライン要素の余白 |
| M | 12px | カード内パディング |
| L | 16px | セクション内要素間 |
| XL | 24px | セクション間 |
| XXL | 48px〜 | メジャーセクション間 |

### Container

- Max Width: 約 1200px（実測ベース）
- Padding (horizontal): 16〜24px

### Grid

- 商品サムネ: 3〜4 カラム
- 特集カルーセル: フルブリード
- ニュース: 2〜3 カラム
- ガッター: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラット運用） |
| 1 | `0 1px 3px rgba(0,0,0,0.1)` | カルーセル矢印ボタン |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | モーダル・オーバーレイ |

> SHIPS はシャドウを極力使わない。背景色の切り替え（#fff / #f8f8f8）で面の階層を表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは `Roboto, "游ゴシック Medium", sans-serif` の順で指定する（欧文優先）
- CTAボタンは `#04345a`（Brand Navy）のピル型（`border-radius: 20px`）で統一する
- テキスト階層は weight 400 を基本とし、サイズと色で差をつける
- セール系バッジは黄色（`#ffee00`）、通知バッジは赤（`#a50000`）で統一する
- 商品カードはシャドウ・角丸なしのフラットスタイルで、画像を主役にする
- フッターは `#666666` 背景に白テキストで落ち着いた印象を保つ

### Don't（禁止）

- font-family で `"游ゴシック"` と指定しない。必ず `"游ゴシック Medium"` と Medium を明示する（Windows でのかすれ防止）
- テキストに weight 700（Bold）を多用しない。SHIPS は 400 が主体で、Bold はレビュー評価値など限定的な使用にとどめる
- CTA に角張った border-radius を使わない。主要 CTA は必ずピル型（20px）
- `palt` や明示的な `letter-spacing` を設定しない（ベタ組みが基本）
- 彩度の高い色を UI に多用しない。色は商品画像とセールバッジに任せ、UI はネイビー・グレー基調に保つ

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（1〜2カラム） |
| Tablet | 768〜1023px | タブレットレイアウト（2〜3カラム） |
| Desktop | >= 1024px | デスクトップレイアウト（3〜4カラム） |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは Display は 24〜28px に縮小
- 本文は 12〜14px を維持
- ナビゲーションはハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Navy: #04345a
Text Primary: #000000
Text Title: #333333
Text Secondary: #666666
Background: #ffffff
Surface Light: #f8f8f8
Sale Red: #a50000
Highlight Yellow: #ffee00
Footer: #666666
Font: Roboto, "游ゴシック Medium", sans-serif
Body Size: 12-14px / Weight 400 / line-height 1.43-1.5
Heading Size: 28-34px / Weight 400 / line-height 1.46-1.65
CTA: bg #04345a / text #fff / radius 20px (pill)
Border Radius: 0-4px (カード), 20px (CTA pill)
Shadow: なし（フラット基調）
palt: 未使用
letter-spacing: normal
```

### プロンプト例

```
SHIPS のデザインシステムに従って、商品一覧ページを作成してください。
- 背景: #ffffff
- テキスト: 本文 #000000、タイトル #333333、補足 #666666
- フォント: Roboto, "游ゴシック Medium", sans-serif（欧文優先）
- 商品カードはボーダー・シャドウ・角丸なしのフラット表示
- CTAボタンは bg #04345a / text #fff / border-radius 20px のピル型
- サブアクションは bg #fff / text #333 / border 1px solid #333 / radius 4px のアウトライン
- セクション見出しは 28px / weight 400 / line-height 1.46
- 商品キャプションは 12-14px / weight 400
- セールバッジは #ffee00 背景に黒テキスト
- レビュー背景は #f8f8f8
- フッターは bg #666 / text #fff
```
