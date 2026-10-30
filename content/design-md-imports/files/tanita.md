# DESIGN.md — TANITA (tanita.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: クリーン、信頼感、健康的。白を基調に深いブルーをアクセントに使い、清潔感と誠実さを演出する企業サイト
- **密度**: ゆったりとしたコーポレートサイト型。大きなビジュアルタイルと適度な余白で情報を整理
- **キーワード**: 信頼、清潔、健康、シンプル、コーポレート

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary** (`#004198`): タニタブルー。CTAボタン、ヘッダーショップリンク、ナビゲーションアクセントに使用
- **Primary Light** (`rgba(0,65,152,0.1)`): ホバー・背景のアクセント（プライマリ10%透過）

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト、見出し
- **Text Disabled** (`#999999`): 無効状態のテキスト、非アクティブナビ
- **Text on Dark** (`#ffffff`): ダーク背景上のテキスト（CTA、フッター）
- **Border** (`#dddddd`): カード枠、区切り線
- **Border Light** (`#cccccc`): 検索フォーム枠
- **Background** (`#ffffff`): ページ背景
- **Surface Gray** (`#f0f3f5`): セクション背景（企業情報、つながるセクション）
- **Surface Warm** (`#f7f3e5`): プロダクト・サービスセクション背景（クリーム色）
- **Surface Dark** (`#333333`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: noto-sans-cjk-jp（Adobe Fonts / TypeKit 経由で配信）

> **注意**: `noto-sans-cjk-jp` は Adobe Fonts のドメインライセンスフォント。ローカル環境やプレビューでは Google Fonts の **Noto Sans JP** で代替する（同じ Noto ファミリーのため字形・メトリクスがほぼ同一）

### 3.2 欧文フォント

- **サンセリフ**: noto-sans-cjk-jp に含まれる欧文グリフを使用（単独の欧文フォント指定なし）
- **ディスプレイ**: century-gothic（404ページ等の英字見出し専用。Adobe Fonts）

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: "noto-sans-cjk-jp", sans-serif;

/* preview.html 代替（Google Fonts） */
font-family: "Noto Sans JP", sans-serif;

/* 404ページ見出し（英字のみ） */
font-family: "century-gothic", sans-serif;
```

**フォールバックの考え方**:
- フォールバックは `sans-serif` のみのシンプルな構成
- 欧文専用フォントの指定なし。Noto Sans CJK JP の欧文グリフをそのまま使用

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (404) | century-gothic | 70px | 700 | 1.2 | 0.06em | 英字エラーページ見出し |
| Heading 3 | noto-sans-cjk-jp | 22px | 700 | 1.5 | 0.06em | セクション小見出し |
| Heading 4 | noto-sans-cjk-jp | 18px | 700 | 1.5 | 0.06em | カテゴリ見出し |
| Section Title (h2) | noto-sans-cjk-jp | 16px | 400 | 1.5 | 0.06em | アイコン付きセクションタイトル |
| Nav Title | noto-sans-cjk-jp | 20px | 700 | 1.2 | normal | グローバルナビ大見出し |
| Nav Sub Title | noto-sans-cjk-jp | 15px | 700 | 1.5 | normal | グローバルナビ小見出し |
| Tile Title (L) | noto-sans-cjk-jp | 22px | 700 | 1.44 | 0.06em | 大タイル見出し（白文字） |
| Tile Title (S) | noto-sans-cjk-jp | 18px | 700 | 1.44 | 0.06em | 小タイル見出し（白文字） |
| Body | noto-sans-cjk-jp | 16px | 400 | 2.0 | 0.06em | 本文テキスト |
| Body Small | noto-sans-cjk-jp | 15px | 400 | 2.0 | 0.06em | 補足本文 |
| Caption | noto-sans-cjk-jp | 14px | 400 | 1.5 | normal | ナビアイコン下テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.0（32px / 16px）。日本語コーポレートサイトとして広めの行間で読みやすさを確保
- **見出しの行間**: 1.44〜1.5
- **本文の字間 (letter-spacing)**: 0.06em（0.96px / 16px）。body 全体に適用
- **ナビゲーションの字間**: normal（letter-spacing なし）

**ガイドライン**:
- `letter-spacing: 0.06em` は body に指定されており、ほぼ全要素に継承される
- ナビゲーション内の要素は `letter-spacing: normal` で上書きされている
- 行間 2.0 は日本語本文の読みやすさを重視した設定

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt**: 未使用。全要素で `font-feature-settings: normal`
- プロポーショナル字詰めを使わず、等幅で組む方針

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA (Pill)**
- Background: `#004198`
- Text: `#ffffff`（※ CTA内テキストは白だが、interactive抽出値ではborder-radius要素のcolorが `#333333` になっている場合がある。実際のCTAテキスト色は白）
- Padding: 内部調整あり
- Border Radius: 19.2px（pill 形状）
- Font Size: 16px
- Font Weight: 400

**Secondary Outlined (Pill)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#004198`
- Padding: 内部調整あり
- Border Radius: 19.2px（pill 形状）

**Error Page CTA (Pill)**
- Background: `#333333`
- Text: `#ffffff`
- Padding: 13px 90px
- Border Radius: 80px（大きめの pill）

**Shop Link (Header)**
- Background: `#004198`
- Text: `#ffffff`
- Padding: 10px 20px 9px
- Border Radius: 0 0 4px 4px（下部のみ角丸）

### Inputs

**Search**
- Background: transparent
- Border: なし（input 自体は border: 0）
- Padding: 0px 50px 0px 20px
- Font Size: 16px
- ラッパー（label）: border-radius: 80px, border: 1px solid `#cccccc`, bg: `#ffffff`

### Cards

**Box Card**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Border Radius: 5px
- Padding: 30px 37px

**Tile Card**
- Background: 画像ベース
- Border Radius: 5px
- テキスト: 白（画像上にオーバーレイ）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 10px |
| M | 16px |
| L | 24px |
| XL | 30px |
| XXL | 50px |

### Container

- Max Width: 1200px（推定。コーポレートサイト標準幅）
- Padding (horizontal): 20px〜37px

### Grid

- Columns: 可変（タイルは2〜3列構成）
- Gutter: 16px〜20px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準状態のカード・タイル |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | ホバー時のカード（推定） |

タニタのサイトはフラットデザイン志向。`box-shadow: none` が全要素の基本で、影の使用は最小限。カード区切りは主にボーダーで表現。

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラー `#004198` を CTA とアクセントに一貫して使う
- 本文は `line-height: 2.0`、`letter-spacing: 0.06em` でゆったり組む
- ボタンは pill 形状（border-radius: 19.2px 以上）を基本とする
- カード・ボックスには `border: 1px solid #dddddd` を使い、影ではなくボーダーで区切る
- 白背景 + グレー面（`#f0f3f5`）+ クリーム面（`#f7f3e5`）の3種でセクションを分ける
- フッターは `#333333` 背景 + 白テキストで統一する

### Don't（禁止）

- `#004198` を背景色として広い面に使わない（CTA・バッジ・ヘッダーリンク等のポイント使いに限定）
- `palt`（プロポーショナル字詰め）を適用しない（全要素 `font-feature-settings: normal`）
- 角ばったボタン（border-radius: 0〜4px）を主要 CTA に使わない（pill を維持）
- テキスト色に `#000000` を使わない（`#333333` を使用）
- フォントウェイト 600 を使わない（400 と 700 の2段階のみ）
- ナビゲーション内に `letter-spacing: 0.06em` を適用しない（`normal` を維持）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。ハンバーガーメニュー表示 |
| Desktop | > 768px | デスクトップレイアウト。グローバルナビ展開 |

### タッチターゲット

- 最小サイズ: 44px × 44px（Swiperナビゲーションも44px）

### フォントサイズの調整

- モバイルでは本文 14〜16px
- タイル見出しはデスクトップの 80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #004198
Text Color: #333333
Background: #ffffff
Surface Gray: #f0f3f5
Surface Warm: #f7f3e5
Footer BG: #333333
Font: "Noto Sans JP", sans-serif  (Google Fonts 代替)
Body Size: 16px
Body Weight: 400
Heading Weight: 700
Line Height: 2.0 (本文)
Letter Spacing: 0.06em (本文)
Button Radius: 19.2px (pill)
Card Radius: 5px
palt: なし
```

### プロンプト例

```
TANITAのデザインシステムに従って、体組成計の商品一覧ページを作成してください。
- ブランドカラー: #004198（CTA ボタンに使用）
- フォント: "Noto Sans JP", sans-serif
- 本文: 16px / line-height: 2.0 / letter-spacing: 0.06em / weight: 400
- 見出し: 22px / weight: 700 / line-height: 1.5
- ボタン: pill 形状（border-radius: 19.2px）、背景 #004198、テキスト白
- カード: 白背景、border: 1px solid #dddddd、radius: 5px、padding: 30px 37px
- セクション背景: #f0f3f5（グレー）または #f7f3e5（クリーム）
- フッター: 背景 #333333、テキスト白
```
