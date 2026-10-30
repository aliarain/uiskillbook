# DESIGN.md — Calpis

> カルピス（https://www.calpis.info/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。アサヒ飲料が展開する1919年創業の国民的乳酸菌飲料ブランドのブランドサイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: カルピスブルーを軸とした清涼感のあるブランドサイト。白地にカルピスブルーのアクセントで、乳酸菌飲料のさわやかさと100年の伝統を表現。システムフォントのみの軽量な実装
- **密度**: 大きなヒーローカルーセルと製品写真を中心に、余裕のあるレイアウト。本文 line-height: 1.5 で標準的な可読性
- **キーワード**: 清涼感、カルピスブルー、水玉模様、白と青、伝統的ブランド、システムフォント
- **特徴**: カルピスブルー `#0033ff` が CTA に、ミディアムブルー `#0053c5` が製品タイトル・リンクに使われる。ダークネイビー `#27455c` のブランドメッセージセクションが印象的。Web フォント不使用のシステムフォント完結設計

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Calpis Blue** (`#0033ff`): CTA ボタン背景、ブランドの象徴色
- **Medium Blue** (`#0053c5`): 製品タイトル、リンクテキスト
- **Dark Navy** (`#27455c`): ブランドメッセージセクション背景、重厚な信頼感の表現

### Neutral（ニュートラル）

- **Text Dark** (`#3c3c3c`): 説明文テキスト
- **Text Gray** (`#696969`): セクション見出し、クッキーダイアログテキスト
- **Background** (`#ffffff`): ページ背景（白）
- **Surface Alt** (`#f8f8f8`): クッキー情報等のサブ背景
- **Light Blue** (`#cddcf2`): ヒーローエリア等の淡い青みがかった背景
- **Border / Muted** — 実測では明確なボーダー色の定義なし

### Accent（アクセント）

- **Medium Navy** (`#3860be`): ピルボタン背景（バリエーション）
- **Link Blue** (`#003399`): テキストリンクのデフォルト色

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ Pro W3（macOS / iOS）
- メイリオ（Windows）
- Osaka（レガシー macOS フォールバック）
- MS Pゴシック（レガシー Windows フォールバック）

### 3.2 欧文フォント

- Web フォント不使用。和文フォントに内包される欧文グリフで表示
- **フォールバック**: sans-serif

### 3.3 font-family 指定

```css
/* サイト全体 */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 完全にシステムフォント依存。ヒラギノ → メイリオ → Osaka → MS Pゴシックの四段構え
- Web フォントの読み込みは一切なく、最軽量のパフォーマンス設計
- レガシー環境（旧 macOS の Osaka、旧 Windows の MS Pゴシック）まで手厚くカバー

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Product Title | ヒラギノ角ゴ | 22px | 700 | 26.4px (x1.2) | normal | 製品名、色 #0053c5 |
| Heading 3 | ヒラギノ角ゴ | 19.2px | 600 | 24.96px (x1.3) | normal | サブヘッダー |
| Heading 2 | ヒラギノ角ゴ | 16px | 700 | 24px (x1.5) | normal | セクション見出し、色 #696969 |
| Body | ヒラギノ角ゴ | 14px | 400 | 21px (x1.5) | normal | 本文テキスト |
| CTA Primary | ヒラギノ角ゴ | 14.4px | 700 | — | normal | CTA ボタンテキスト、色 #ffffff |
| CTA Secondary | ヒラギノ角ゴ | 13px | 600 | — | normal | セカンダリボタンテキスト、色 #0033ff |
| Link | ヒラギノ角ゴ | 14px | 400 | 21px (x1.5) | normal | リンクテキスト、色 #003399 |
| Small | ヒラギノ角ゴ | 12px | 400 | 18px (x1.5) | normal | 説明文、色 #3c3c3c |
| Footer Note | ヒラギノ角ゴ | 10px | 400 | 15px (x1.5) | normal | 登録商標表記等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文: `1.5`（21px / 14px）— 標準的な行間
- 見出し h2: `1.5`（24px / 16px）
- 製品タイトル: `1.2`（26.4px / 22px）— 大きめの文字はタイトに
- サブヘッダー h3: `1.3`（24.96px / 19.2px）

**字間 (letter-spacing)** — 実測値:
- 全テキスト: `normal`
- ブランドメッセージセクションでは視覚的に広めの字間が使われている（実装詳細は未確認）

**ガイドライン**:
- 行間は本文・見出しともに 1.5 が基本。製品タイトルのみ 1.2 でタイトに詰める
- 字間は全体的に normal。ブランドメッセージ等の演出的な文言では広めの字間を検討

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で palt / kern は適用されていない */
font-feature-settings: normal;
```

- palt: 未使用
- kern: 未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#0033ff`
- Text: `#ffffff`
- Border: none
- Border Radius: 2px
- Font Size: 14.4px
- Font Weight: 700

**Secondary CTA**
- Background: `#ffffff`
- Text: `#0033ff`
- Border: 1px solid `#0033ff`（推定）
- Border Radius: 2px
- Font Size: 13px
- Font Weight: 600

**Pill Button（バリエーション）**
- Background: `#3860be`
- Text: `#555555`
- Border Radius: 17px
- Font Weight: 推定 600

### Inputs

- フォーム要素の詳細は未確認（トップページにフォーム要素の露出が少ない）

### Cards

- 製品カードは写真中心のレイアウト
- 製品タイトルは `#0053c5` のミディアムブルーで視線を誘導
- 明確なカード枠線やシャドウの定義は実測では確認されていない

### Navigation

- ヘッダー: 白背景にカルピスロゴ（中央配置）、右上に青い MENU ボタン
- MENU ボタン: ブルー系のアクセント

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

- Max Width: 960px（推定）
- ヒーローカルーセルは全幅

### Grid

- ヒーロー: フルワイドのカルーセル
- 製品一覧: カード型グリッド
- ブランドメッセージ: フルワイドのダークネイビーセクション

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラットデザインが基調） |

- 全体的にフラットなデザイン。シャドウによる深度表現は控えめ
- 色の切り替え（白 → ダークネイビー → ライトブルー → 白）でセクション間の区切りを表現
- ヒーローカルーセルの製品写真が主要な視覚的奥行きを担う

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA ボタンにはカルピスブルー `#0033ff` を使う
- 製品タイトルにはミディアムブルー `#0053c5` を使う
- ブランドメッセージセクションの背景にはダークネイビー `#27455c` を使う
- ページ背景は白 `#ffffff`、ヒーロー周辺にはライトブルー `#cddcf2` を差し色として使う
- 和文テキストはヒラギノ角ゴ → メイリオ → Osaka → MS Pゴシックのフォールバックを守る
- 本文は 14px / line-height: 1.5 を維持する
- CTA ボタンの角丸は 2px のシャープな角で統一する
- テキストリンクには `#003399` を使う

### Don't（禁止）

- カルピスブルー `#0033ff` を本文テキスト色に使わない（CTA 専用）
- CTA ボタンに大きな角丸（10px 以上）を使わない（2px のシャープな角がブランド）
- Web フォントを追加しない（システムフォント完結の軽量設計がブランドの方針）
- palt / kern を適用しない（font-feature-settings: normal を維持）
- ダークネイビー `#27455c` をテキスト色として使わない（セクション背景専用）
- ヒーローエリアにライトブルーの背景色を使い忘れない（白一色では清涼感が失われる）

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

- モバイルでは本文 14px を維持、見出しはデスクトップの 70–80% に縮小
- ハンバーガーメニューに切り替え（MENU ボタン）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Calpis Blue: #0033ff（CTA ボタン背景）
Medium Blue: #0053c5（製品タイトル・リンク）
Dark Navy: #27455c（ブランドメッセージセクション背景）
Medium Navy: #3860be（ピルボタンバリエーション）
Link Blue: #003399（テキストリンク）

Text Dark: #3c3c3c
Text Gray: #696969
Background: #ffffff
Light Blue: #cddcf2（ヒーロー背景の差し色）
Surface Alt: #f8f8f8

JP Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

Body Size: 14px / line-height: 1.5 / letter-spacing: normal
Product Title: 22px / 700 / color: #0053c5
Heading 2: 16px / 700
CTA Button: radius 2px / bg #0033ff / color #fff
palt: なし
```

### プロンプト例

```
カルピスのデザインに従って、製品一覧ページを作成してください。
- 和文フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- ヘッダー: 白背景、中央にカルピスロゴ、右上に青い MENU ボタン
- ヒーロー: ライトブルー #cddcf2 背景、製品写真カルーセル
- ページ背景: #ffffff
- 製品タイトル: 22px, 700, 色 #0053c5
- 本文: 14px, line-height: 1.5, letter-spacing: normal
- CTA ボタン: bg #0033ff, 白文字, radius 2px
- ブランドメッセージセクション: bg #27455c, 白文字
- フッター: 白背景にフッターリンク
- palt / kern は使わない
```
