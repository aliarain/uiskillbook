# DESIGN.md --- AMBUSH

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 出典: https://ambushdesign.com/ (2026-06-02 取得)

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロームでストイックなラグジュアリーファッション。余白を大きくとり、情報密度を極限まで抑えたエディトリアルレイアウト
- **密度**: 非常にゆったり。12px という小さなベースサイズで、テキストの存在感を最小限にしつつ、プロダクト写真とホワイトスペースで語るデザイン
- **キーワード**: avant-garde, monochrome, minimal, editorial, luxury

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000`): ブランドの主軸色。テキスト・CTA 背景・ボーダーすべてに使用。AMBUSH はブランドカラー＝黒
- **AMBUSH Red** (`#FF3A32`, `--ambushRed`): アクセントカラー。セール・強調・通知に使用

### Semantic（意味的な色）

- **Error** (`#990000`, `--color-error`): エラーメッセージ、バリデーション
- **Error Area** (`#ECCACB`, `--color-error-area`): エラー領域の背景

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト。純黒をそのまま使用するのがブランドの特徴
- **Text Secondary** (`#808080`, `--ambushGray`): 補足テキスト、キャプション
- **Text Muted** (`#666666`, `--color-medium-grey`): 価格、メタ情報
- **Border Default** (`#a5a5a5`): VIEW ALL ボタン等の枠線
- **Border Light** (`#cccccc`, `--color-grey`): 区切り線
- **Border Strong** (`#000000`): CTA ボタンの枠線
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f5f5f5`, `--ambushLightGray`): カート領域、セクション背景
- **Surface Faint** (`#f2f2f2`, `--color-lightest-grey`): 入力フィールド背景
- **Surface Light** (`#e2e2e2`, `--color-light-grey`): ホバー・ディバイダー
- **Off-White** (`#fafafa`, `--color-white`): カード背景等。純白(`#fff`) とは区別
- **Accent Gray** (`#d4d4d4`, `--color-accent`): アクセント用グレー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴシック ProN (`hiragino-kaku-gothic-pron`)
- ファッションブランドらしく、フォールバックの和文フォントは 1 種のみ

### 3.2 欧文フォント

- **サンセリフ**: Replica (Lineto)
- Replica はスイスの Lineto 社による有料書体。ジオメトリックでありながら人間味のあるプロポーション。ファッション・アート業界で広く採用されている
- **preview.html 代替**: Inter（Google Fonts）。ジオメトリックサンセリフとして最も近い印象

### 3.3 font-family 指定

```css
/* 全体 */
font-family: Replica, hiragino-kaku-gothic-pron, sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント (Replica) を先に指定。ブランドの欧文表現が最優先
- 和文フォールバックは `hiragino-kaku-gothic-pron` 1 種のみ。macOS ネイティブに依存するミニマルな構成
- generic family は `sans-serif`

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo | Replica | 27.5px | 400 | 1.3 | 0.02em | ヘッダーロゴ |
| Section Title | Replica | 12px | 400 | 1.3 | 0.02em | "NEW ARRIVALS" 等。`text-transform: uppercase` |
| Body | Replica | 12px | 400 | 1.3 | 0.02em | 本文・商品説明 |
| Footer Heading | Replica | 12px | 400 | 0.8 | 0.02em | フッターのカラム見出し |
| Nav Link | Replica | 12px | 400 | 1.3 | 0.02em | ナビゲーションリンク |

**特徴**: タイポグラフィ階層がほぼフラット。ロゴ (27.5px) 以外はすべて 12px / 400。サイズやウェイトではなく、`text-transform: uppercase` とレイアウト上の位置で階層を表現するのが AMBUSH のデザイン言語

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.3（`--lineHeightBody`）。日本語としては狭いが、ファッションサイトのエディトリアルトーンを優先
- **見出しの行間**: 1.3（本文と同じ）
- **フッター見出しの行間**: 0.8（`--lineHeightRate`）。極めてタイトなディスプレイ用途
- **本文の字間 (letter-spacing)**: 0.02em（全要素共通）
- **見出しの字間**: 0.02em（同上）

**ガイドライン**:
- line-height 1.3 は日本語としては窮屈だが、ファッション系サイトではこのタイトさがトーンの一部。エージェントはこの値を維持すること
- letter-spacing 0.02em は全体に均一適用。バリエーションを設けない

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* 特になし。palt / kern の明示的な指定はサイトに見られない */
```

- Replica は欧文専用書体のため `palt` は不要
- 和文フォールバック（ヒラギノ）に対しても `palt` は適用されていない

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（黒ベタ）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 12px 24px（推定）
- Border Radius: 5px
- Border: 1px solid `#000000`
- Font Size: 12px
- Font Weight: 400
- Text Transform: uppercase
- 用途: "VIEW CART"、"ADD TO BAG" 等の主要 CTA

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Padding: 12px 24px
- Border Radius: 5px
- Border: 1px solid `#000000`
- Font Size: 12px
- Font Weight: 400
- Text Transform: uppercase
- 用途: "CLOSE"、"買い物を続ける" 等の補助アクション

**Tertiary（VIEW ALL）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 12px 24px
- Border Radius: 0px
- Border: 1px solid `#a5a5a5`
- Font Size: 12px
- Font Weight: 400
- Text Transform: uppercase
- 用途: セクション末尾の一覧リンク

**Newsletter（SIGN UP）**
- Background: `transparent`
- Text: `#000000`
- Padding: 12px 24px
- Border Radius: 5px
- Border: 1px solid `#000000`
- Font Size: 12px
- Font Weight: 400
- Text Transform: uppercase

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#000000`
- Border Radius: 0px
- Padding: 12px 16px
- Font Size: 12px
- Font Family: Replica, hiragino-kaku-gothic-pron, sans-serif

### Cards

- Background: `#ffffff`
- Border: none（プロダクトカードはボーダーレス。写真とテキストのみで構成）
- Border Radius: 0px
- Padding: 0（写真直下にテキストを配置）
- Shadow: none

---

## 5. Layout Principles

### Spacing Scale

CSS Custom Properties に基づくスペーシングシステム:

| Token | Value |
|-------|-------|
| XXS (`--space-xxs`) | 4px |
| XS (`--space-xs`) | 8px |
| Small (`--space-small`) | 16px |
| Medium (`--space-medium`) | 24px |
| Large (`--space-large`) | 32px |
| XL (`--space-xl`) | 40px |
| XXL (`--space-xxl`) | 48px |
| XXXL (`--space-xxxl`) | 56px |

### Container

- Max Width: 制約なし（フルブリード基調）
- Padding (horizontal): 16px〜32px

### Grid

- Columns: プロダクトグリッドは 2〜4 列
- Gutter: 16px〜24px
- プロダクト画像はアスペクト比固定（正方形または 3:4）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素。AMBUSH はシャドウを一切使わない |

**フラットデザイン**: エレベーションの概念を排除し、すべてをフラットに保つ。奥行きは余白と色のコントラストのみで表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストサイズは原則 12px を維持する。サイズで階層をつけない
- `text-transform: uppercase` で英語セクションタイトルを表記する
- 黒(`#000000`)と白(`#ffffff`)の2色を軸にデザインする
- プロダクト写真を最大のコミュニケーション手段とし、テキストは最小限にする
- ボタンの角丸は 5px。pill（大きな角丸）は使わない
- フォントウェイトは 400 のみ。ボールド(700) は使わない

### Don't（禁止）

- font-weight: 700 や bold を使わない。すべて regular (400) で統一する
- グラデーションやドロップシャドウを使わない。完全フラット
- 12px 以外の文字サイズを本文・見出しに使わない（ロゴの 27.5px は例外）
- 装飾的な色（カラフルな差し色）を多用しない。`--ambushRed` (#FF3A32) のみアクセントとして許容
- line-height を 1.5 以上にしない。タイトなタイポグラフィがブランドの特徴
- セリフ体を使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 768px | 1〜2 カラムグリッド、ハンバーガーメニュー |
| Tablet | <= 1024px | 2〜3 カラムグリッド |
| Desktop | > 1024px | 3〜4 カラムグリッド |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイルでもデスクトップと同じ 12px を維持。レスポンシブでサイズを変えないのが AMBUSH の特徴
- ロゴのみモバイルで若干縮小（27.5px → 20px 程度）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000000
Accent Color: #FF3A32
Text Color: #000000
Background: #ffffff
Surface: #f5f5f5
Font: Replica, hiragino-kaku-gothic-pron, sans-serif
Body Size: 12px
Body Weight: 400
Line Height: 1.3
Letter Spacing: 0.02em
Button Radius: 5px
Text Transform: uppercase (section titles, buttons)
```

### プロンプト例

```
AMBUSH のデザインシステムに従って、商品一覧ページを作成してください。
- フォント: Replica, hiragino-kaku-gothic-pron, sans-serif（すべて 12px / 400）
- 色: 黒 #000000 と白 #ffffff の2色。アクセントに #FF3A32
- ボタン: 黒ベタ (#000 bg, #fff text, 5px radius) と アウトライン (transparent bg, #000 border, 5px radius)
- レイアウト: プロダクト写真を大きく、テキストは最小限。余白を広くとる
- 行間: line-height 1.3。英語セクションタイトルは text-transform: uppercase
- シャドウ・グラデーションは一切不要
```
