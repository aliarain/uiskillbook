# DESIGN.md — Square Enix

> Square Enix Co., Ltd.（https://www.jp.square-enix.com/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。ゲーム・出版物の総合情報ポータル。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 黒を基調とした重厚なダークテーマ。ゲームの世界観を引き立てるための「黒い額縁」として機能するサイト設計。赤いCTAボタンが黒背景の中で強い視線誘導を果たす
- **密度**: 情報密度が高い。ニュース、ゲームタイトル、商品、スケジュールが1ページに集約されたポータル型
- **キーワード**: ダーク、シャープ、矩形、ゲーミング、ポータル
- **特徴**: border-radius が全要素で 0px。角丸を一切使わない鋭角的なデザイン。CSS Custom Properties 不使用のレガシー構成。ヘッダーは白、メインコンテンツは黒、フッターはグレーという3層構造

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Square Enix Red** (`#c80000`): ブランドアクセント。CTAボタン背景、価格テキスト、リンクホバー。`rgb(200, 0, 0)` の実測値
- **Black** (`#000000`): メインコンテンツ領域の背景。ダークテーマの基盤

### Secondary（ナビゲーション・構造）

- **Nav Dark** (`#333333`): ヘッダーナビゲーションバー背景。「ストア」「メンバーズ」等のメニュー項目
- **Footer Grey** (`#e5e5e5`): フッター背景、セカンダリボタン背景、カレンダーカード背景
- **Dark Grey** (`#444444`): フッター下部の補助背景

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 白背景上のテキスト
- **Text White** (`#ffffff`): 黒背景上のテキスト、CTAボタンテキスト
- **Text Subtle** (`#60676f`): セクション見出し（トピックス、CM等）の控えめなグレー
- **Background Header** (`#ffffff`): ヘッダー領域の白背景
- **Background Main** (`#000000`): メインコンテンツ領域の黒背景
- **Surface Card** (`#e5e5e5`): カレンダーカード、記事カードの面
- **Hero Overlay** (`rgba(0, 0, 0, 0.8)`): ヒーロースライダーのキャプション背景
- **Search BG** (`#ededed`): 検索入力フィールド背景
- **Search Border** (`#dedede`): 検索入力フィールドのボーダー

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- メイリオ / Meiryo（Windows 環境のメイン）
- ヒラギノ角ゴ Pro W3 / Hiragino Kaku Gothic Pro（macOS 環境のメイン）

> **注意**: 実サイトでは `"ヒラギノ角ゴ Pro W3"` を指定しているが、ProN ではなく Pro。また英語名の `"Hiragino Kaku Gothic Pro"` も併記されている

### 3.2 欧文フォント

- **サンセリフ**: Helvetica（最優先）、Arial（フォールバック）
- **モバイル**: "Doroid Sans"（Droid Sans の誤記と推測されるが、実サイトの指定をそのまま記録）

### 3.3 font-family 指定

```css
/* 全体（body） — 欧文優先型 */
font-family: Helvetica, Arial, "Doroid Sans", メイリオ, Meiryo,
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォントを先に指定（Helvetica > Arial > Doroid Sans）
- 和文フォントはメイリオを先に（Windows カバレッジ優先）、ヒラギノが後
- 単一の font-family でサイト全体を統一。見出し・本文の使い分けなし
- Web フォントは不使用。OS インストールフォントのみに依存

> **preview.html 用の代替**: Noto Sans JP（Google Fonts）をメイリオ / ヒラギノの代替として使用。preview.html でのみ適用

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Caption | system | 40.32px | 700 | 1.2 | normal | ヒーロースライダーのタイトル、白文字 on rgba(0,0,0,0.8) |
| Section Title (h3) | system | 22.12px | 700 | 1.3 | normal | セクション見出し、色 #60676f |
| Page Title (h1) | system | 24.08px | 700 | 1.0 | normal | 404ページで確認 |
| H2 Section | system | 18.06px | 700 | 1.0 | normal | サブセクション見出し、白文字 on #333 |
| H2 Brand Title | system | 14px | 700 | 1.3 | normal | ブランドタイトル（SVG アイコン併用） |
| Topic Title (h3) | system | 16.1px | 700 | 1.4 | normal | トピックスのニュースタイトル |
| Game Title (h3) | system | 16.1px | 700 | 1.3 | normal | ゲームタイトル一覧 |
| Body | system | 14px | 400 | 1.125 | normal | 本文テキスト |
| Price | system | 16.1px | 700 | 1.75 | normal | 価格テキスト、色 #c80000 |
| CTA Large | system | 22.12px | 400 | — | normal | 赤背景CTAボタン（line-height: 50px 固定） |
| CTA Small | system | 14px | 400 | 1.0 | normal | 小型CTAボタン |
| Nav | system | 14px | 400 | 1.125 | normal | ヘッダーナビゲーション |
| Footer Link | system | 12px | 700 | 1.75 | normal | フッターのカテゴリリンク |
| Footer Body | system | 14px | 400 | 1.75 | normal | フッターテキスト |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- body: `15.75px` (14px x **1.125**) -- 非常にタイトな行間
- トピックタイトル: `22.54px` (16.1px x **1.4**)
- ヒーロー: `48.384px` (40.32px x **1.2**)
- フッター td: `24.5px` (14px x **1.75**)
- CTA ボタン: `50px`（固定値、フォントサイズによらない）

**字間 (letter-spacing)** -- 実測値:
- 全要素: `normal`（letter-spacing の明示的な指定なし）

**ガイドライン**:
- 本文の line-height: 1.125 は日本語サイトとしては異例に狭い。ゲーム情報ポータルとしての情報密度を優先した設計
- letter-spacing はサイト全体で normal。字詰めは行わない

### 3.6 禁則処理・改行ルール

```css
/* 標準的な設定（実測値なし、ブラウザデフォルトに依存） */
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で palt / kern は適用されていない */
font-feature-settings: normal;
```

- palt: 未使用。本文・見出し共に normal
- kern: 未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（大）**
- Background: `#c80000`
- Text: `#ffffff`
- Padding: 0px 108.6px（左右大きめ）
- Border Radius: `0px`（角丸なし）
- Font Size: 22.12px
- Font Weight: 400
- Line Height: 50px（固定高さ）

**Primary CTA（小）**
- Background: `#c80000`
- Text: `#ffffff`
- Padding: 1% 2.5%
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 400

**Secondary（記事を読む）**
- Background: `#e5e5e5`
- Text: `#333333`
- Padding: 内部で調整
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 400
- Line Height: 30px

### Inputs

**Search Input（検索）**
- Background: `#ededed`
- Border: 1px solid `#dedede`
- Border Radius: `2px`（唯一角丸がある要素）
- Padding: 1px 10px 1px 35px（左にアイコン分の余白）
- Font Size: 14px

### Cards

**Calendar Card / Product Card**
- Background: `#e5e5e5`
- Border: なし
- Border Radius: `0px`
- Padding: 20px

**Topic Card**
- Background: `#ffffff`（白背景）
- Border: なし
- Border Radius: `0px`
- Shadow: なし（フラットデザイン）

### Nav Menu Button

- Background: `#333333`
- Text: デフォルトリンク色（ブラウザデフォルト）
- Padding: 0px 20px
- Border Radius: `0px`
- ダイヤモンド装飾: CSS 擬似要素による菱形アイコン付き

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 5px |
| S | 10px |
| M | 20px |
| L | 30px |
| XL | 50px |
| XXL | 80px |

### Container

- Max Width: 960px（推定）
- Padding (horizontal): 20px

### Grid

- Columns: マルチカラム（トピックスはグリッド、カレンダーは1カラム）
- Gutter: 可変

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全要素（基本がフラットデザイン） |

- サイト全体がフラットデザイン。box-shadow の使用は確認されていない
- 奥行きは色のコントラスト（白ヘッダー → 黒メイン → グレーフッター）で表現
- ヒーロースライダーは `rgba(0,0,0,0.8)` のオーバーレイで奥行きを演出

---

## 7. Do's and Don'ts

### Do（推奨）

- CTAボタンは `#c80000` の赤背景 + 白文字。角丸は 0px を厳守する
- 黒背景上のテキストは `#ffffff` を使い、コントラストを確保する
- ヘッダーは白背景、メインコンテンツは黒背景、フッターはグレー背景の3層構造を維持する
- font-family は欧文先頭（Helvetica > Arial）の指定順序を守る
- 価格表示は `#c80000`（ブランドレッド）で太字にする
- セクション見出し（トピックス、CM等）は `#60676f` のグレーで控えめに表示する
- ナビメニューは `#333333` の暗いグレー背景に白系テキスト

### Don't（禁止）

- border-radius を使わない（検索入力の 2px を除き、全要素 0px）
- 本文の line-height を 1.5 以上に広げない（1.125 のタイトな行間がこのサイトの特徴）
- `#c80000` 以外の赤をCTAに使わない
- ヒーローキャプションの背景を単色の黒にしない（`rgba(0,0,0,0.8)` の半透明を使う）
- Web フォントを追加しない（OS フォントのみの軽量設計が意図されている）
- ドロップシャドウやグロウエフェクトを加えない（完全なフラットデザイン）
- ナビの `#333333` を `#000000` に変えない（メインの黒背景と差別化するため）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタンの line-height: 50px で十分な高さを確保

### フォントサイズの調整

- モバイルでは CTA ボタンのフォントサイズが 22.12px → 12.96px に縮小
- ナビゲーションはハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red: #c80000（CTA・価格・リンクホバー）
Black BG: #000000（メインコンテンツ背景）
White BG: #ffffff（ヘッダー背景）
Nav Dark: #333333（ナビ背景）
Footer Grey: #e5e5e5（フッター背景）
Text Subtle: #60676f（セクション見出し）
Hero Overlay: rgba(0,0,0,0.8)（ヒーローキャプション背景）
Search BG: #ededed
Search Border: #dedede

Text Primary: #000000（白背景上）
Text White: #ffffff（黒背景上）

Font: Helvetica, Arial, "Doroid Sans", メイリオ, Meiryo,
      "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif

Body Size: 14px / line-height: 1.125 / letter-spacing: normal
Hero Caption: 40.32px / 700 / white on rgba(0,0,0,0.8)
Section Title: 22.12px / 700 / color: #60676f
CTA Large: 22.12px / 400 / white on #c80000 / line-height: 50px / radius: 0px
palt: なし
border-radius: 0px（全要素）
```

### プロンプト例

```
Square Enix のサイトデザインに従って、ゲームタイトル一覧ページを作成してください。
- フォント: Helvetica, Arial, "Doroid Sans", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif
- 背景: #000000（黒）
- テキスト色: #ffffff（白）
- CTA ボタン: bg #c80000, white, radius 0px, font-size 22.12px, line-height 50px
- セカンダリボタン: bg #e5e5e5, #333, radius 0px
- ヘッダー: bg #ffffff（白）、ナビ: bg #333333
- セクション見出し: 22.12px, 700, color: #60676f
- 本文: 14px, line-height: 1.125, letter-spacing: normal
- 全要素 border-radius: 0px
- palt / kern は使わない
- ドロップシャドウは使わない
```
