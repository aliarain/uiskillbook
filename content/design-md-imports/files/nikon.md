# DESIGN.md — Nikon（ニコン）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 出典: https://www.nikon.co.jp/ — 2026-05-21 取得の computed style 実測値

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ダークヒーロー＋ライトコンテンツの二層構成。ヒーローエリアは黒背景に白文字で映像的、コンテンツエリアはライトグレー背景で情報密度を高めた構成
- **密度**: ビジュアル訴求型のトップページと、ニュース・リンクブロックが密に配置された情報型セクションの混合
- **キーワード**: フォトジェニック、テクノロジカル、信頼感、クリーン、プロフェッショナル

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary** (`#222222`): ニコンのコーポレートカラー。ダークグレー（ほぼ黒）をベースに信頼感を演出
- **Primary Accent** (`#000000`): ヒーローエリアの背景、カルーセルドットのアクティブ状態

### Semantic（意味的な色）

- **Danger** (`#b22323`): エラー、削除、危険な操作（推定値）
- **Warning** (`#e0a800`): 警告、注意喚起（推定値）
- **Success** (`#1e7b65`): 成功、完了（推定値）

### Neutral（ニュートラル）

- **Text Primary** (`#222222`): 本文テキスト（コンテンツエリア）
- **Text White** (`#ffffff`): ヒーロー・フッターのテキスト
- **Text Secondary** (`#555555`): 補足テキスト
- **Text Disabled** (`#949494`): 無効状態のテキスト、ボーダー
- **Border** (`#949494`): 検索入力欄の枠線
- **Background** (`#f3f3f3`): ページ背景（コンテンツエリア）
- **Surface** (`#ffffff`): カード、入力欄の背景
- **Footer Background** (`#111111`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP, YuGothic, Customized Yu Gothic, Hiragino Kaku Gothic Pro

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP 内の欧文グリフを使用（和文フォント先頭指定）

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: "Noto Sans JP", YuGothic, "Customized Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP（Google Fonts）を最優先
- YuGothic / Customized Yu Gothic で Windows 環境をカバー
- Hiragino Kaku Gothic Pro で macOS をカバー
- 欧文フォントは和文フォント内のグリフを使用するため個別指定なし

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Sans JP | 40px | 500 | 1.5 | 0.06em | ヒーロータイトル |
| Heading 1 | Noto Sans JP | 30px | 500 | 1.5 | normal | セクション見出し |
| Heading 2 | Noto Sans JP | 18px | 500 | 1.5 | normal | サブ見出し |
| Body | Noto Sans JP | 18px | 400 | 1.5 | normal | 本文 |
| Body (article) | Noto Sans JP | 18px | 400 | 1.9 | normal | 記事本文（行間広め） |
| Nav | Noto Sans JP | 14px | 400 | 1.5 | normal | ナビゲーション |
| Caption | Noto Sans JP | 12px | 400 | 1.5 | normal | 補足、コピーライト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（標準）〜1.9（記事コンテンツ）
- **見出しの行間**: 1.5
- **本文の字間 (letter-spacing)**: normal
- **ヒーローの字間**: 0.06em（2.4px / 40px）

**ガイドライン**:
- 本文は `line-height: 1.5` をベースに、記事コンテンツは `1.9` とゆったり設定
- `letter-spacing` はヒーローのみ `0.06em` を適用、それ以外は `normal`

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- palt, kern ともに適用なし。全体的にフォントのデフォルト設定で統一

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Hero Anchor（ヒーローCTA）**
- Background: `transparent`
- Text: `#ffffff`
- Padding: 8px 44px
- Border: 1px solid transparent
- Font Size: 18px
- Font Weight: 500

**Cookie Accept**
- Background: `#ffffff`
- Text: `#222222`
- Padding: 12px 10px
- Border Radius: 2px
- Font Size: 13px
- Font Weight: 600

**Cookie Settings**
- Background: `#000000`
- Text: `#e0e0e0`
- Padding: 12px 0px
- Border Radius: 2px
- Font Size: 13px
- Font Weight: 600

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#949494`
- Border Radius: 22px（pill 型の検索フィールド）
- Padding: 0px 50px 0px 23px
- Font Size: 16px

### Cards

- Background: `#ffffff`（推定、リンクブロック構成）
- Border: none
- Border Radius: 0px
- Shadow: none（フラットなカードレス構成）

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

- Max Width: 1280px（推定）
- Padding (horizontal): 0px（フルブリード）

### Grid

- Columns: フレキシブル（リンクブロック3〜4列）
- Gutter: 推定 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準要素（フラット基調） |
| 1 | `rgba(0,0,0,0.92) 0 0 10px 0` | ページトップボタン |
| Nav | — | ヘッダー: `rgba(0,0,0,0.7)` 半透明オーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- ヒーローエリアはダーク背景（`#222222` 以上の暗さ）に白文字で映像的に構成する
- 本文テキストは `#222222` を使用し、純粋な `#000000` は避ける
- 検索フィールドは pill 型（`border-radius: 22px`）で統一する
- フォントウェイトは見出しに `500`、本文に `400` を使い分ける

### Don't（禁止）

- ヒーローエリアに明るい背景を使わない
- `font-weight: 700` (bold) を通常の見出しに使わない（500 が標準）
- コンテンツエリアの背景に純白 `#ffffff` を使わない（`#f3f3f3` が標準）
- `letter-spacing` をヒーロー以外のテキストに適用しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 16px、見出しはデスクトップの 70–80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #222222
Text Color: #222222
Background: #f3f3f3
Footer BG: #111111
Font: "Noto Sans JP", YuGothic, "Customized Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif
Body Size: 18px
Line Height: 1.5
Heading Weight: 500
```

### プロンプト例

```
ニコンのデザインシステムに従って、製品一覧ページを作成してください。
- 背景: #f3f3f3
- フォント: "Noto Sans JP", YuGothic, "Customized Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif
- 本文: 18px / line-height: 1.5 / font-weight: 400 / color: #222222
- 見出し: font-weight: 500（boldではなくmedium）
- ヒーロー: ダーク背景に白文字、letter-spacing: 0.06em
- 検索フィールド: pill 型 border-radius: 22px
- フッター: #111111 背景に白文字
```
