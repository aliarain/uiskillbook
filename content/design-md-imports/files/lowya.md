# DESIGN.md --- LOWYA (low-ya.com)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 取得日: 2026-05-30 / 出典: https://www.low-ya.com/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 実用的でストイックなECデザイン。黒と白のハイコントラスト、シャープな直角ボタン、大きな商品画像が中心。装飾を極限まで削ぎ落としたモノトーン基調
- **密度**: 商品画像を大きく見せるメディア型レイアウト。テキスト情報は最小限に抑え、ビジュアルで語る構成
- **キーワード**: ミニマル、モノトーン、シャープ、プロダクトファースト、ユーティリタリアン

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000`): ブランドの基本色。CTA ボタン、ナビゲーションのアクティブタブ、カルーセルナビゲーションに使用
- **Cyan Accent** (`#05c5f5`): アクセントカラー。「すべて見る」リンク、テキストリンクのハイライトに限定使用

### Semantic（意味的な色）

- **Badge Red** (`#ff4e48`): NEW / HOT バッジの背景
- **Badge Red Surface** (`#ffedec`): NEW / HOT バッジの淡色面

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 見出し、本文テキスト
- **Text Body Alt** (`#111820`): ブランドアイテムのテキスト（ほぼ黒のブルーグレー）
- **Text Secondary** (`#666666`): 商品名、補足テキスト
- **Text Muted** (`#cccccc`): フッターの MENU 見出し、コンタクトリンクのボーダー
- **Border Primary** (`#000000`): ボタンの2pxボーダー、カルーセルナビ
- **Border Input** (`#999999`): 検索入力欄のボーダー
- **Background** (`#ffffff`): ページ背景
- **Surface Placeholder** (`#eeeeee`): 画像プレースホルダーの背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP（Google Fonts）がメイン。メイリオ / ヒラギノ角ゴ Pro W3 をフォールバックに持つ
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: Open Sans（Google Fonts）を見出し・フッターの英語テキストに使用。ウェイト 600 / 700 / 800 / 900 を使い分ける
- **等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 本文・日本語全般 */
font-family: "Noto Sans JP", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", "MS PGothic", "ＭＳ Ｐゴシック", sans-serif;

/* 見出し・英語テキスト（Open Sans を先頭に追加） */
font-family: "Open Sans", "Noto Sans JP", メイリオ, Meiryo,
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "MS PGothic",
  "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- 欧文見出しには Open Sans を先頭に置き、英数字の表示品質を優先
- 本文は Noto Sans JP を先頭に、和文の可読性を最優先
- メイリオ / ヒラギノの順で Windows / macOS 双方に対応
- MS PGothic は最終フォールバック（古い Windows 環境向け）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H2 Section | Open Sans + Noto Sans JP | 24px | 900 | 1.5 | normal | セクション見出し |
| H2 Footer Menu | Open Sans + Noto Sans JP | 28px | 600 | 1.0 | 2px | フッターメニュー見出し、色 #cccccc |
| H2 Footer Info | Noto Sans JP | 16px | 700 | 1.5 | normal | フッター情報見出し |
| Category Title | Open Sans + Noto Sans JP | 16px | 900 | 1.5 | normal | カテゴリ見出し |
| Category Name | Noto Sans JP | 11px | 700 | 1.5 | normal | カテゴリ名 |
| Nav Name | Noto Sans JP | 14px | 400 | 1.5 | normal | ナビゲーション項目 |
| Body Link | Noto Sans JP | 14px | 700 | 1.5 | normal | テキストリンク |
| Body Tab | Noto Sans JP | 12px | 400 | 1.5 | normal | タブテキスト |
| Product Name | Noto Sans JP | 12px | 400 | 1.5 | 0.5px | 商品名テキスト |
| Button | Noto Sans JP | 13px | 700 | 1.2 | normal | ボタンテキスト |
| Body Small | Noto Sans JP | 10px | 400/700 | 1.5 | normal | 最小テキスト（body 基本サイズ） |
| Input | Noto Sans JP | 12px | 400 | normal | normal | 入力フィールド |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（全体で統一）
- **見出しの行間**: 1.5（一般）/ 1.0（フッターメニュー見出し）
- **本文の字間 (letter-spacing)**: normal（字詰めなし）
- **商品名の字間**: 0.5px（わずかに広げている）
- **フッターメニューの字間**: 2px（英字のトラッキングを広く）

**ガイドライン**:
- LOWYA は letter-spacing をほぼ使わない。装飾的な字間調整は避ける
- フッターの英字見出しのみ 2px のトラッキングを適用
- 商品名には 0.5px のわずかな字間を設定

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;    /* 長いURLや英単語の折り返し */
```

**備考**: 特別な禁則処理設定は確認されず。ブラウザデフォルトに依存

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 不使用 */
```

- **palt**: 使用なし。プロポーショナル字詰めは適用されていない
- **kern**: 使用なし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（黒ベタ）**
- Background: `#000000`
- Text: `#ffffff`
- Border: `2px solid #000000`
- Padding: `10px`
- Border Radius: `0px`（シャープな直角）
- Font Size: `13px`
- Font Weight: `700`

**Secondary（白抜き）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `2px solid #000000`
- Padding: `10px`
- Border Radius: `0px`（シャープな直角）
- Font Size: `13px`
- Font Weight: `700`

**Contact Link（フッター）**
- Background: `transparent`
- Text: `#cccccc`
- Border: `2px solid #cccccc`
- Border Radius: `0px`

**Carousel Navigation**
- Background: `#000000`
- Border: `2px solid #000000`
- Border Radius: `0px`

### Inputs

- Background: `transparent`
- Border: `1px solid #999999`
- Border (focus): 未確認（ブラウザデフォルト）
- Border Radius: `3px`
- Padding: `6px 9px 6px 22px`（左寄せで検索アイコン分のパディング）
- Font Size: `12px`
- Font Weight: `400`

### Cards

- Background: `#ffffff`
- Border: なし（画像ベースのカードレイアウト）
- Border Radius: `0px`
- Padding: 画像に依存
- Shadow: なし（フラットデザイン）

### Badges

**NEW / HOT Badge**
- Background: `#ff4e48`
- Text: `#ffffff`
- Surface（淡色版）: `#ffedec`
- Border Radius: 小さい角丸

### Nav Tabs

**Active**
- Background: `#000000`
- Text: `#ffffff`

**Inactive**
- Background: `transparent`
- Text: `#000000`

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

- Max Width: 全幅レイアウト（メインビジュアル）/ コンテンツは中央寄せ
- Padding (horizontal): 左右余白あり

### Grid

- 商品一覧: 4列グリッド（デスクトップ）
- カテゴリ: 横スクロール / フレックス配置
- ヒーロー: フルブリード画像

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素。LOWYA はフラットデザイン |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | ホバー時のカード（控えめ） |

**備考**: LOWYA のデザインは elevation をほとんど使わない。2px solid のボーダーで要素の区切りを表現するスタイル。影よりもボーダーが主要な分離手段

---

## 7. Do's and Don'ts

### Do（推奨）

- ボタンは必ず `border-radius: 0px` の直角にする。LOWYA のデザインアイデンティティ
- ボタンのボーダーは `2px solid` を使う。1px ではなく 2px が基本
- 黒（`#000000`）と白（`#ffffff`）のハイコントラストを基調にする
- アクセントカラー `#05c5f5` は「すべて見る」等のリンクに限定し、控えめに使う
- 商品画像を大きく配置し、テキスト情報は最小限に抑える
- Open Sans は英語の見出しにのみ使い、ウェイト 600 以上で視覚的な重みを出す
- フォントは必ずフォールバックチェーンを指定する

### Don't（禁止）

- pill 型ボタン（`border-radius: 9999px` や大きな角丸）を使わない。LOWYA は完全にスクエア
- `#05c5f5` をボタンやヘッダーなど大面積に使わない。リンクテキストのみ
- 影（box-shadow）を多用しない。フラットデザインが基本
- 装飾的な letter-spacing や palt を適用しない
- 10px 未満のフォントサイズを使わない（base が 10px で既に小さい）
- バッジの赤 `#ff4e48` を CTA ボタンに流用しない。NEW / HOT 専用

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

### フォントサイズの調整

- モバイルでは商品グリッドが2列に変更
- フォントサイズは極端に変更しない（base が 10px と小さいため）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #000000 (black)
Accent Color: #05c5f5 (cyan)
Text Primary: #000000
Text Secondary: #666666
Background: #ffffff
Font JP: "Noto Sans JP", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif
Font EN Heading: "Open Sans", "Noto Sans JP", sans-serif
Body Size: 10px (base) / 12-14px (readable text)
Line Height: 1.5
Button Radius: 0px (square)
Button Border: 2px solid #000000
Badge Red: #ff4e48
```

### プロンプト例

```
LOWYA のデザインシステムに従って、商品一覧ページを作成してください。
- ブランドカラー: #000000（黒）/ #ffffff（白）
- アクセントカラー: #05c5f5（シアン、リンクのみ）
- フォント: 本文は "Noto Sans JP"、英語見出しは "Open Sans" を先頭に
- ボタン: border-radius: 0px、border: 2px solid #000000
- バッジ: NEW は bg #ff4e48、text #ffffff
- 行間: line-height: 1.5
- レイアウト: 商品画像を大きく、テキストは最小限
- 装飾: 影は使わない、ボーダーで区切る
```
