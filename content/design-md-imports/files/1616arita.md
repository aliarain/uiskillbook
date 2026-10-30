# DESIGN.md --- 1616 / arita japan

> 1616 / arita japan（https://www.1616arita.jp/）のデザイン仕様書。
> Creative Director: 柳原照弘（Teruhiro Yanagihara）。有田焼の伝統を現代デザインに昇華させたポーセリンブランド。
> 実サイトの computed style に基づく。WordPress サイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極限まで削ぎ落としたミニマリズム。UIクロームをほぼゼロにし、プロダクトフォトグラフィとタイポグラフィだけで空間を構成する。ギャラリーのような静謐さ
- **密度**: 非常にゆったり。大きな余白と写真が支配する。テキスト要素は必要最小限
- **キーワード**: 静謐、ギャラリー的、明朝体、ウォームニュートラル、写真中心、バイリンガル
- **特徴**: ボタンが存在しない。CTAはすべてテキストリンク。影もボーダーもほぼなし。全ウェイト400（ボールドなし）。負のレタースペーシング（-0.015em）という珍しい設定

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Accent Yellow** (`#fff100`): ビビッドイエロー。Horve Journal（エディトリアルセクション）で使用。非常に限定的

### Neutral（ニュートラル）

- **Text Primary** (`#595757`): 本文テキスト。温かみのあるダークグレー（純黒ではない）
- **Text Dark** (`#231f20`): 見出し、ヒーローテキスト。温かみのあるほぼ黒
- **Text Muted** (`#a6a8ab`): ナビゲーション非アクティブ、法的テキスト。ミディアムグレー
- **Background** (`#ffffff`): ページ背景。純白
- **Surface (Footer)** (`#f5f5f3`): フッター背景。温かみのあるオフホワイト
- **Surface Dark** (`#231f20`): ハンバーガーメニューオーバーレイ背景
- **Link Default** (`#0000ee`): ブラウザデフォルト青。独自スタイルなし（極めてミニマル）

### Semantic（意味的な色）

- サイト上にセマンティックカラー（Danger / Warning / Success）は確認されていない。ECサイトではなくブランドショーケースのため

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体（メイン）**:
- 游明朝体 / Yu Mincho（macOS・Windows）
- ヒラギノ明朝 Pro（macOS フォールバック）

**ゴシック体（ナビゲーション・UI専用）**:
- 游ゴシック Medium / Yu Gothic Medium（macOS・Windows）
- メイリオ（Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Arial（ナビゲーション・UI部分で游ゴシックより先に指定）
- **セリフ**: 明朝体フォールバック内で対応（serif ジェネリック）

### 3.3 font-family 指定

```css
/* 本文・見出し（明朝体） */
font-family: 游明朝体, "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
  "Hiragino Mincho Pro", serif;

/* ナビゲーション・UI（ゴシック体） */
font-family: Arial, "游ゴシック Medium", "Yu Gothic Medium",
  YuGothicMedium, 游ゴシック体, YuGothic, "Yu Gothic", 游ゴシック,
  メイリオ, sans-serif;
```

**フォールバックの考え方**:
- 明朝体スタックでは和文フォント名を先に指定（和文の表示品質を優先）
- ゴシック体スタックでは Arial を先に指定（欧文の表示品質を優先）
- 游ゴシックは Medium ウェイト指定を含む（Windows での細字問題を回避）

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title | Yu Mincho | 42px | 400 | 1.15 | -0.015em | ジャーナル記事タイトル |
| Collection Intro | Yu Mincho | 30px | 400 | 1.55 | -0.015em | コレクション紹介文 |
| Section Title (h2) | Yu Mincho | 24px | 400 | 1.55 | -0.015em | セクション見出し |
| Sub Title (h3/h5) | Yu Mincho | 21px | 400 | 1.55 | -0.015em | サブセクション見出し |
| Nav Link | Arial/YuGothic | 19px | 400 | 1.55 | 0.025em | ナビゲーション |
| Body | Yu Mincho | 16px | 400 | 1.55 | -0.015em | 本文テキスト |
| Body (article) | Yu Mincho | 15px | 400 | 1.55 | -0.015em | 記事本文 |
| Text Link | Yu Mincho | 16px | 400 | 1.6 | -0.015em | テキストリンク |
| Text Link Small | Yu Mincho | 14.4px | 400 | 1.6 | -0.015em | 小テキストリンク |
| Language Toggle | Arial/YuGothic | 15px | 400 | 1.55 | -0.015em | EN/JP切替 |
| Legal | Arial/YuGothic | 16px | 400 | 1.55 | -0.015em | フッター法的テキスト |

### 3.5 行間・字間

**行間 (line-height)** --- 実測値:
- 全体的に `1.55` で統一（見出し・本文共通）
- Hero Title のみ `1.15`（大きな文字でタイトに）
- テキストリンクは `1.6`

**字間 (letter-spacing)** --- 実測値:
- 明朝体テキスト全体: `-0.015em`（**負のレタースペーシング**、文字を詰める方向）
- ナビゲーション（ゴシック体）: `0.025em`（わずかに広げる）
- **重要**: 多くの日本語サイトが正のレタースペーシング（0.04em等）を使うのに対し、このサイトは負の値を使用。明朝体の文字を詰めることで、書籍的な上品さを演出している

**ガイドライン**:
- 明朝体のレタースペーシングは必ず `-0.015em` にする（正の値にしない）
- line-height は `1.55` を基本とし、大見出しのみ `1.15` に詰める
- **全テキストが weight 400**。ボールドは一切使用しない

### 3.6 禁則処理・改行ルール

```css
/* WordPress デフォルトに準拠 */
word-wrap: break-word;
overflow-wrap: break-word;
```

- 最小限の禁則処理設定。サイト全体がシンプルなテキスト構成のため複雑な禁則は不要

### 3.7 OpenType 機能

```css
/* palt / kern は使用していない */
font-feature-settings: normal;
```

- palt（プロポーショナル字詰め）は**未使用**。代わりに `letter-spacing: -0.015em` で全体的に詰めている
- kern も未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**このサイトにはボタンが存在しない**。すべてのアクションはテキストリンクで実現されている。

**Text Link（主要CTA）**
- Decoration: `border-bottom: 1px solid` または `2px solid`
- Text: `#595757`（本文と同色）
- Font: Yu Mincho, 16px, 400
- Letter Spacing: `-0.015em`
- ホバー時の変化は最小限

**Navigation Link**
- Text (inactive): `#a6a8ab`
- Text (active): `#231f20`
- Active indicator: 下部ボーダー
- Font: Arial/YuGothic, 19px, 400
- Letter Spacing: `0.025em`

### Inputs

**Newsletter Input**
- Background: `transparent`
- Border: なし（視覚的なボーダーなし）
- Font: 明朝体, 16px, 400
- 極めてミニマルなフォーム。装飾なし

### Cards

- 明示的なカードコンポーネントはない
- 商品やコレクションは写真＋テキストのシンプルな構成
- Background: `transparent`
- Border: なし
- Shadow: なし
- コンテンツの区切りは余白（ホワイトスペース）で表現

---

## 5. Layout Principles

### Spacing Scale

写真ギャラリー型のレイアウトのため、余白は大きめに取る。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト要素間の最小間隔 |
| S | 16px | テキストブロック間 |
| M | 32px | セクション内の要素間 |
| L | 64px | セクション間 |
| XL | 80px | ヒーローエリアの上下余白 |
| XXL | 120px | メインセクション間 |

### Container

- Max Width: 制約なし（写真は画面幅いっぱい）
- テキストエリア Max Width: 約 800px（中央揃え）
- Padding (horizontal): 32px

### Grid

- 商品グリッド: 2--4カラム（レスポンシブ）
- ジャーナル: 1カラム（フルワイド写真 + テキスト）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | **全要素** |

- **影は一切使用していない**。完全にフラットなデザイン
- 深度の表現はホワイトスペースの大小で行う
- ボーダーもほとんど使用しない
- 要素の分離は余白のみで実現

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#595757`（温かみのあるダークグレー）を使う。純黒 `#000000` は避ける
- 見出しには `#231f20`（温かみのあるほぼ黒）を使い、本文より濃くする
- 明朝体には必ず `letter-spacing: -0.015em` を設定する（正の値にしない）
- 全テキストを `font-weight: 400` にする。ボールドは使わない
- 写真を大きく見せ、テキストは最小限にする
- ナビゲーションのみゴシック体を使い、他は全て明朝体にする
- ニュースレターフォームは装飾なしの最小限にする
- EN/JP バイリンガル表示を意識する

### Don't（禁止）

- `font-weight: 700` や `bold` を使わない（このサイトにボールドは存在しない）
- ボタンUIを作らない（テキストリンクのみ）
- シャドウ（`box-shadow`）を使わない（完全フラット）
- `letter-spacing` を正の値にしない（明朝体テキストは -0.015em）
- 装飾的なボーダーやカード枠を使わない
- 派手なホバーエフェクトを使わない
- ブランドイエロー `#fff100` を多用しない（Horve Journal 限定）
- palt を適用しない（このサイトは letter-spacing で字詰めしている）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 768px | モバイルレイアウト。ハンバーガーメニュー |
| Desktop | > 768px | デスクトップレイアウト。フルナビゲーション |

### タッチターゲット

- ナビゲーションリンクは十分な余白で確保
- テキストリンクは行の高さ（line-height: 1.55）で確保

### フォントサイズの調整

- モバイルでは Hero Title を 42px から 28--30px 程度に縮小
- 本文サイズはデスクトップと同じ 15--16px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Accent Yellow: #fff100（Horve Journal 限定）
Text Primary: #595757
Text Dark: #231f20
Text Muted: #a6a8ab
Background: #ffffff
Surface Footer: #f5f5f3

Mincho Font: 游明朝体, "Yu Mincho", YuMincho,
  "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", serif
Gothic Font: Arial, "游ゴシック Medium", "Yu Gothic Medium",
  YuGothicMedium, 游ゴシック体, YuGothic, "Yu Gothic", 游ゴシック,
  メイリオ, sans-serif

Body Size: 16px / weight: 400 / line-height: 1.55 / letter-spacing: -0.015em
Hero Title: 42px / weight: 400 / line-height: 1.15 / letter-spacing: -0.015em
Nav: 19px / weight: 400 / line-height: 1.55 / letter-spacing: 0.025em
CTA Style: テキストリンク（border-bottom: 1px solid）、ボタンなし
Elevation: 影なし（完全フラット）
```

### プロンプト例

```
1616 / arita japan のデザインに従って、コレクション一覧ページを作成してください。
- 明朝体: 游明朝体, "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", serif
- ゴシック体（ナビのみ）: Arial, "游ゴシック Medium", "Yu Gothic Medium",
    YuGothicMedium, 游ゴシック体, YuGothic, メイリオ, sans-serif
- テキスト色: #595757（本文）、#231f20（見出し）
- 背景: #ffffff
- letter-spacing: -0.015em（負の値、詰める方向）
- font-weight: 400 のみ（ボールドなし）
- ボタンは作らず、テキストリンクにする
- 影・ボーダーなし。余白だけで要素を分離する
- 写真を大きく見せるギャラリー的レイアウト
```
