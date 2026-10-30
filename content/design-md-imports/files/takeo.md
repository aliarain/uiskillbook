# DESIGN.md — TAKEO（竹尾）

> 竹尾 公式サイト（https://www.takeo.co.jp/）のデザイン仕様書。
> 1899年創業のファインペーパー専門商社。紙の可能性を追求するブランドとして、サイト自体が「紙的な静けさ」を体現している。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極細ウェイト（Light 300）と広い字間で「紙に印字されたような静寂」を演出。装飾を排した余白型レイアウト
- **密度**: 情報密度は低い。大きなビジュアルとゆったりとした行間で、紙のテクスチャーを感じさせる構成
- **キーワード**: 静謐、余白、Light ウェイト、広い字間、モノトーン
- **特徴**: **全体が font-weight: 300（Light）で統一**される異例の構成。和文に AotoGothicStdN（アオトゴシック Std N / Morisawa）を使用し、欧文は Inter を先頭に配置。`font-feature-settings: "palt"` がグローバル適用で、プロポーショナル字詰めがサイト全体に効いている。CTAボタンはほぼ存在せず、テキストリンクのみで遷移させる「紙の目次」的ナビゲーション

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **なし**: 竹尾はアクセントカラーを持たない。モノトーンのみで構成

### Text

- **Text Primary** (`#161f20`): 本文・見出しの基本色。純黒ではなく、深いネイビーグレー
- **Text Sub** (`#2f2f2f`): サブナビゲーションのテキスト
- **Text on Dark** (`#ffffff`): ダークセクション（サステナビリティ等）上のテキスト
- **Text Muted** (`#bebebe`): 言語切替等の補助テキスト

### Surface

- **Background** (`#ffffff`): ページ標準背景
- **Surface Light** (`#f6f6f6`): セクション背景の薄いグレー
- **Surface Input** (`#fefefe`): 検索フィールドの背景
- **Surface Grey** (`#707070`): ヒーロー画像の平均色（写真+オーバーレイ）
- **Surface Dark Overlay** (`rgba(0, 0, 0, 0.7)`): メインビジュアルの暗幕
- **Surface Grey Mid** (`#949495`): 言語切替アイコンの背景
- **Border** (`#e3e3e3`): 区切り線

### CTA / Button

- **Cookie CTA** (`#000000` bg / `#ffffff` text / radius 5px): サイト上唯一の塗りボタン（Cookie 同意）
- **テキストリンク**: 基本の遷移手段。下線やアローで示す

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: AotoGothicStdN（アオトゴシック Std N / Morisawa Adobe Fonts）

> **注意**: AotoGothicStdN はドメインライセンスのため preview.html では表示不可。Google Fonts の Zen Kaku Gothic New が字形・ウェイト展開が最も近い代替。

### 3.2 欧文フォント

- **サンセリフ**: Inter（Google Fonts、和文より先に指定して欧文グリフを担当）

### 3.3 font-family 指定

```css
/* サイト全体 */
font-family: Inter, AotoGothicStdN, sans-serif;
```

**フォールバックの考え方**:
- Inter を先頭に置き、欧文・数字グリフは Inter が担当
- 和文は AotoGothicStdN が担当
- フォールバック少なめの潔い構成（環境にフォントがなければ sans-serif に直行）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title | Inter + AotoGothicStdN | 26px | 300 | 1.85 | 0.08em | メインの和文見出し |
| English Title | Inter | 26px | 400 | 1.0 | 0.01em | 英語セクション名 |
| Sub Heading | Inter + AotoGothicStdN | 21px | 300 | 2.14 | 0.05em | サービス名等 |
| Body Copy | Inter + AotoGothicStdN | 16px | 300 | 2.19 | 0.09–0.12em | 本文（非常に広い字間） |
| Body Default | Inter + AotoGothicStdN | 16px | 300 | 1.4 | 0.05em | 標準テキスト |
| Nav | Inter + AotoGothicStdN | 14px | 500 | 1.4 | 0.05em | ナビゲーション |
| Sub Nav | Inter + AotoGothicStdN | 14px | 300 | 2.86 | 0.1em | サブナビ（広い行間） |
| Caption | Inter + AotoGothicStdN | 14px | 300 | 1.0 | 0.05em | ラベル・キャプション |
| Footer | Inter + AotoGothicStdN | 11px | 300 | 1.4 | 0.1em | フッター |
| Cookie | Inter + AotoGothicStdN | 12px | 300 | 1.8 | 0.05em | Cookie バナー |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.19（35px / 16px）。非常に広い。紙面的な空気感を演出
- **見出しの行間**: 1.85（48px / 26px）
- **本文の字間 (letter-spacing)**: 0.09–0.12em（1.44–1.92px）。通常の日本語サイトの2倍以上
- **見出しの字間**: 0.08em（2.08px / 26px）
- **標準テキストの字間**: 0.05em（0.8px / 16px）

**ガイドライン**:
- 竹尾の「紙的な静けさ」は**広い字間と軽いウェイト**で実現されている
- letter-spacing 0.09–0.12em はコピー文（ブランドメッセージ）のみ。通常UIテキストは0.05em
- font-weight: 300 がデフォルト。500 はナビのみ、400 はごく一部

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体に適用 */
font-feature-settings: "palt" 1;
```

- **palt がグローバル適用**: body レベルで `"palt"` が指定されている。見出し・本文・ナビすべてにプロポーショナル字詰めが効く
- 例外: button 要素には `font-feature-settings: normal`（palt 解除）

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（Cookie同意のみ）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 6px 0px
- Border Radius: 5px
- Font Size: 12px
- Font Weight: 400

**テキストリンク（標準CTA）**
- Background: transparent
- Text: `#161f20`
- Border: none
- Decoration: underline or arrow icon
- Font Size: 14px
- Font Weight: 300

### Inputs

- Background: `#fefefe`
- Border: none
- Border Radius: 0px
- Padding: 0px 0px 0px 46px（左にアイコンスペース）
- Font Size: 14px
- Font Weight: 300

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px
- Shadow: none
- 竹尾のカードはボーダーやシャドウを使わず、余白のみで区切る

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 6px |
| S | 16px |
| M | 32px |
| L | 60px |
| XL | 100px |
| XXL | 160px |

### Container

- Max Width: 1440px（推定）
- Padding (horizontal): 60px

### Grid

- フリーレイアウト（厳密なグリッドではなく、余白ベースの配置）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

> 竹尾のサイトは **elevation を一切使わない**フラットデザイン。影、浮きの表現はゼロ。

---

## 7. Do's and Don'ts

### Do（推奨）

- font-weight は 300 をデフォルトにする（ナビのみ 500）
- letter-spacing はコピー文で 0.09–0.12em、通常テキストで 0.05em
- palt をグローバルに適用する
- 余白で要素を区切る（ボーダー・シャドウは最小限）
- モノトーン（黒・白・グレー）のみで構成する

### Don't（禁止）

- font-weight: 700 (Bold) を使わない — 竹尾のトーンが壊れる
- アクセントカラーを追加しない — モノトーンのみ
- box-shadow を使わない — フラットを維持
- 狭い letter-spacing（normal / 0）を使わない — 最低 0.05em
- 派手なCTAボタンを使わない — テキストリンクが基本

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### フォントサイズの調整

- モバイルでは見出し 26px → 20px 程度に縮小
- 本文の letter-spacing は維持（ブランド表現の核心）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: なし（モノトーン）
Text Color: #161f20
Background: #ffffff
Surface: #f6f6f6
Font: Inter, AotoGothicStdN, sans-serif
Body Size: 16px
Body Weight: 300
Line Height: 2.19（コピー文） / 1.4（通常）
Letter Spacing: 0.09em（コピー文） / 0.05em（通常）
OpenType: palt グローバル適用
```

### プロンプト例

```
竹尾のデザインシステムに従って、紙製品の一覧ページを作成してください。
- フォント: Inter, "Zen Kaku Gothic New", sans-serif（AotoGothicStdN の代替）
- ウェイト: 300（Light）をデフォルトに
- 色: テキスト #161f20、背景 #ffffff、面 #f6f6f6
- 字間: 本文 0.05em、コピー文 0.1em
- 行間: 本文 2.0 以上
- font-feature-settings: "palt" 1 を全体に
- ボタン: テキストリンクのみ。塗りボタンは使わない
- 影: 使わない。余白のみで区切る
```
