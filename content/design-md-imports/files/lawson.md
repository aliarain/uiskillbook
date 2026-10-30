# DESIGN.md — LAWSON (ローソン)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 清潔感のある白背景に、LAWSONブルーをアクセントとした親しみやすいデザイン。コンビニエンスストアとしての機能性・情報密度と、ブランドの温かみを両立
- **密度**: 情報密度は中程度。メニュー・商品情報・店舗情報等が整理されたポータル型
- **キーワード**: 親しみやすい、清潔、丸み、ブルー基調、実用的

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary / LAWSON Blue** (`#0072ce`): メインのブランドカラー。ヘッダーボタン、言語セレクター等に使用
- **Primary Dark** (`#1f5fa8`): ロゴリンク、ホバー時の濃いブルー
- **Primary Light** (`#63b2ed`): アクティブナビゲーション項目のライトブルー

### Semantic（意味的な色）

- **Danger** (`#cc0000`): エラー、削除、危険な操作
- **Warning** (`#f5a623`): 警告、注意喚起
- **Success** (`#4caf50`): 成功、完了

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Secondary** (`#999999`): 補足テキスト、ラベル
- **Text Dark** (`#3b3b3b`): ナビゲーション項目
- **Border** (`#dddddd`): 区切り線、入力欄の枠
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f7f7f7`): カード、リージョンボタン、コンテンツエリアの面
- **Input Background** (`#f2f2f2`): 入力欄の背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: ヒラギノ角ゴ ProN W3、ヒラギノ角ゴ Pro W3
- **丸ゴシック（ブランド）**: M PLUS Rounded 1c（Google Fonts）— ロゴ・ブランド要素に使用
- **見出し**: Noto Sans Japanese（ultra-light weight 100〜200）

### 3.2 欧文フォント

- **サンセリフ（本文）**: Verdana
- **サンセリフ（ブランド）**: Helvetica Neue, Helvetica, Arial
- **等幅**: なし（明示的な指定なし）

### 3.3 font-family 指定

```css
/* 本文 */
font-family: "ヒラギノ角ゴ ProN W3", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", verdana, メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;

/* ブランド・ロゴ */
font-family: "M PLUS Rounded 1c", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 見出し */
font-family: "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- 本文はヒラギノ角ゴ ProN を先頭に、macOS/Windows/Linux 対応のフォールバック
- ブランド要素には M PLUS Rounded 1c（丸ゴシック）で柔らかい印象を演出
- 見出しは Noto Sans Japanese の極細ウェイト（100〜200）でモダンさを表現

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Brand Logo | M PLUS Rounded 1c | 26px | 900 | 1.2 | normal | ロゴテキスト、色は #1f5fa8 |
| Section Heading | Noto Sans Japanese | 26px | 100 | 1.4 | 0.025em | セクション見出し |
| Footer Heading | Noto Sans Japanese | 16px | 200 | 1.4 | 0.0375em | フッター内見出し |
| Body | ヒラギノ角ゴ ProN | 13px | 400 | 1.4 | 0.05em | 本文テキスト |
| Small | ヒラギノ角ゴ ProN | 11–12px | 400 | 1.4 | 0.05em | 注釈、補足情報 |
| Breadcrumb | ヒラギノ角ゴ ProN | 10px | 400 | 1.4 | normal | パンくずリスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.4（コンパクトめだがコンビニサイトとして十分な可読性）
- **見出しの行間**: 1.4
- **本文の字間 (letter-spacing)**: 0.05em（0.65px / 13px）— body レベルで一律適用
- **見出しの字間**: 0.025em（0.65px / 26px）

**ガイドライン**:
- body に `letter-spacing: 0.65px` が一律設定されている
- line-height は全要素共通で 1.4
- 情報密度を重視するため、一般的な日本語サイトより行間はコンパクト

### 3.6 禁則処理・改行ルール

```css
/* LAWSONサイトの設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
/* 明示的なpalt指定なし */
font-feature-settings: normal;
```

- **palt**: 使用していない。本文・見出しともに palt なし
- サイト全体で均等な字間を維持

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（LAWSON Blue）**
- Background: `#0072ce`
- Text: `#ffffff`
- Padding: 18px 24px
- Border Radius: 4px
- Font Size: 13px
- Font Weight: 400

**Region / Secondary**
- Background: `#f7f7f7`
- Text: `#333333`
- Padding: 18px 24px
- Border Radius: 4px
- Border: none

**Ghost / Link**
- Background: `transparent`
- Text: `#0072ce`
- Border: 1px solid `#0072ce`
- Padding: 10px 20px
- Border Radius: 4px

### Inputs

- Background: `#f2f2f2`
- Border: 1px solid `#dddddd`
- Border (focus): 1px solid `#0072ce`
- Border Radius: 10px
- Padding: 10px 16px
- Font Size: 13px
- Height: auto（padding で高さを確保）

### Cards

- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Border Radius: 8px
- Padding: 20px
- Shadow: 0 2px 4px rgba(0, 0, 0, 0.08)

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

- Max Width: 1080px
- Padding (horizontal): 20px

### Grid

- Columns: 可変（コンテンツに応じて 2〜4列）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（リージョンボタン等） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | カード、コンテンツエリア |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.12)` | ドロップダウン、ホバー時のカード |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.16)` | モーダル、ダイアログ |

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランド要素（ロゴ、メインCTA）には M PLUS Rounded 1c（weight 900）を使用する
- 見出しには Noto Sans Japanese の極細ウェイト（100〜200）を使用し、モダンさを出す
- 本文は 13px / line-height: 1.4 で情報密度を確保する
- LAWSON Blue `#0072ce` はインタラクティブ要素にのみ使用する
- 入力欄は角丸を大きめ（10px）にして柔らかい印象を与える
- カードやボタンの背景には `#f7f7f7` を使い、白背景との差を出す

### Don't（禁止）

- M PLUS Rounded 1c を本文テキストに使わない（ブランド要素専用）
- 見出しの weight を 400 以上にしない（ultra-light がデザインの特徴）
- LAWSON Blue を背景色のベタ塗りに使わない（テキスト・ボタンのアクセントのみ）
- `letter-spacing` を 0 にしない（body 全体に 0.05em が設定されている）
- 角丸を 12px 以上にしない（最大は入力欄の 10px）
- テキストに純粋な `#000000` を使わない（`#333333` を基準とする）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（シングルカラム） |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト（max-width: 1080px） |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- リージョンボタン: padding 18px で十分なタッチ領域を確保

### フォントサイズの調整

- モバイルでは本文 13–14px を維持
- 見出しはデスクトップの 26px → モバイルでは 20–22px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0072ce (LAWSON Blue)
Primary Dark: #1f5fa8
Text Color: #333333
Background: #ffffff
Surface: #f7f7f7
Body Font: "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", verdana, メイリオ, sans-serif
Brand Font: "M PLUS Rounded 1c", sans-serif (weight: 900)
Heading Font: "Noto Sans Japanese", sans-serif (weight: 100-200)
Body Size: 13px
Line Height: 1.4
Letter Spacing: 0.05em
Border Radius (button): 4px
Border Radius (input): 10px
```

### プロンプト例

```
LAWSONのデザインシステムに従って、商品一覧ページを作成してください。
- プライマリカラー: #0072ce (LAWSON Blue)
- 本文フォント: ヒラギノ角ゴ ProN W3 を使用
- ブランド要素: M PLUS Rounded 1c (weight 900)
- 見出し: Noto Sans Japanese (weight 100)
- 本文サイズ: 13px / line-height: 1.4 / letter-spacing: 0.05em
- カード背景: #f7f7f7、角丸: 8px
- ボタン: #0072ce、角丸: 4px
- 入力欄背景: #f2f2f2、角丸: 10px
```
