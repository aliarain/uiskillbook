# DESIGN.md — GREEN SPOON

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 出典: https://green-spoon.jp/（2026-05-30 取得）

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ナチュラル、温かみのある、洗練されたフード・ライフスタイル
- **密度**: ゆったりとしたメディア型。大きなビジュアルと余白を活かした構成
- **キーワード**: Warm Ivory / Natural Green / Editorial Food / Lifestyle Luxury / Handcrafted Feel
- **特徴**: 英語のディスプレイフォント（Riviera）を見出しに使い、日本語は游ゴシック体で本文を構成する和欧混植。ページ全体が温かみのあるアイボリー（`#fbfbf6`）で統一されており、純白は使用しない。食材カテゴリごとのカラーコーディングが特徴的

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary Green** (`#1f8d61`): メインCTAボタン（「今日からはじめる」「メニューをみる」等）
- **Mint Green** (`#b4d9ca`): ハンバーガーメニューボタン背景。プライマリの淡いバリエーション

### Accent（アクセントカラー）

- **Orange-Red** (`#db5331`): HOW TO USEセクション、動画スライダーのドット
- **Deep Blue** (`#003c73`): 新着メニューセクションの背景

### Category（食材カテゴリカラー）

- **和食 Japanese** (`#bee4e4`): ティール系バッジ
- **洋食 Western** (`#f3daaa`): ゴールド系バッジ
- **中華 Chinese** (`#eec1bc`): ピンク系バッジ
- **エスニック Ethnic** (`#f5d03e`): イエロー系バッジ

### Neutral（ニュートラル）

- **Text Primary** (`#1f1f1f`): 本文テキスト
- **Text Secondary** (`#b6b6b6`): ナビリンク、LOG INテキスト
- **Text Olive** (`#7b785b`): サイドメニューテキスト（オリーブ色のミュート）
- **Background** (`#fbfbf6`): ページ背景（温かみのあるアイボリー。純白ではない）
- **Surface Alt** (`#f8f7ee`): セクション背景（食材紹介、プラン説明等）
- **Footer BG** (`#252525`): フッター背景（ダーク）
- **Footer Text** (`#fbfbf6`): フッターテキスト（アイボリー on ダーク）

### CSS Custom Properties

```css
--primary-900: #252525;
--ease-in: cubic-bezier(.755, .05, .855, .06);
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-in-out: cubic-bezier(.86, 0, .07, 1);
--ease-out-back: cubic-bezier(.175, .885, .32, 1.275);
```

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: `"A+EqpB-游ゴシック体 Pr6N M"`, `游ゴシック体`, `YuGothic`, `"游ゴシック Medium"`, `"Yu Gothic Medium"`, `游ゴシック`, `sans-serif`
- 游ゴシック体の Pr6N M（Adobe-Japan1-6 対応 Medium ウェイト）を優先指定

### 3.2 欧文フォント

- **ディスプレイ**: `Riviera` — カスタムセリフ/ディスプレイフォント（Adobe Fonts またはプロプライエタリ）。英語見出しに使用
- **代替フォント**: Google Fonts「Cormorant Garamond」が雰囲気の近い代替候補（エレガントなセリフ体）

### 3.3 font-family 指定

```css
/* メイン（見出し〜本文） */
font-family: Riviera, "A+EqpB-游ゴシック体 Pr6N M", 游ゴシック体, YuGothic,
  "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, sans-serif;

/* Cookie同意バナー等 */
font-family: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- 英語見出しは Riviera（カスタムフォント）を最優先
- Riviera がない環境では游ゴシック体に統一される
- 游ゴシック体は Pr6N M を先に、次に汎用指定で Windows 環境にも対応
- generic family は `sans-serif`

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Riviera | 80px | 400 | 1.1 | normal | ヒーロー見出し（英語） |
| Section Heading | Riviera / 游ゴシック | 40px | 400 | 1.3 | normal | セクション見出し |
| Sub Heading | Riviera / 游ゴシック | 32px | 400 | 1.3 | normal | サブ見出し |
| Product Tab | 游ゴシック | 28px | 400 | 1.3 | normal | 商品カテゴリタブ |
| Body Lead | 游ゴシック | 28px | 700 | 1.78 | 0.05em | リード文（太字） |
| Body Large | 游ゴシック | 16px | 400 | 2.0 | -0.1em | 本文（大） |
| Body | 游ゴシック | 14px | 400 | 2.0 | 0.1em | 本文（標準） |
| Small Body | 游ゴシック | 13px | 400 | 1.0 | normal | 補足テキスト |
| Caption | 游ゴシック | 11px | 400 | 1.8 | 0.1em | 注釈、キャプション |
| Nav Link | 游ゴシック | 14px | 400 | 1.3 | normal | ナビゲーションリンク |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.0（Body / Body Large 共通。日本語の可読性を重視した広い行間）
- **見出しの行間**: 1.1〜1.3（Display が 1.1、それ以外の見出しは 1.3）
- **本文の字間 (letter-spacing)**: 0.1em（Body）、-0.1em（Body Large。ネガティブスペーシングで引き締め）
- **見出しの字間**: normal（すべての見出しで letter-spacing を設定しない）
- **リード文の字間**: 0.05em（Body Lead のみ。強調のため若干広め）

**ガイドライン**:
- 見出しはすべて weight 400。軽やかで洗練された印象を出すためにボールドを使わない
- CTAとリード文のみ weight 700 を使用
- Body Large の letter-spacing が -0.1em とネガティブなのが特徴。16px の文字を密に組む

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt・kern は使用しない */
```

- GREEN SPOON では `palt`（プロポーショナル字詰め）を使用していない
- `kern` も明示的な指定なし
- 見出しも本文もフルピッチ（等幅）で組んでいる

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（グリーン pill）**
- Background: `#1f8d61`
- Text: `#ffffff`
- Padding: `16px 24px`
- Border Radius: `159984px`（pill 形状）
- Font Size: 16px
- Font Weight: 700

**Cookie Consent**
- Background: `#1f8d61`
- Text: `#ffffff`
- Padding: `12px 48px`
- Border Radius: `72px`
- Font Size: 14px
- Font Weight: 700

**Login pill（ゴースト）**
- Background: `transparent`
- Text: `#b6b6b6`
- Border: `1px solid #b6b6b6`
- Padding: 任意
- Border Radius: `139986px`（pill 形状）

**Hamburger（サークル）**
- Background: `#b4d9ca`（ミントグリーン）
- Border Radius: `50%`（正円）
- アイコン色: `#1f1f1f`

**Social Circle（メニュー内）**
- Background: `#252525`
- Border Radius: `50%`（正円）
- アイコン色: `#fbfbf6`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #b6b6b6`
- Border (focus): `1px solid #1f8d61`
- Border Radius: 8px
- Padding: `12px 16px`
- Font Size: 14px

### Cards

- Background: `#fbfbf6`（アイボリー。ページ背景と同色の場合は `#ffffff` を使用）
- Border: なし（影で浮かせる）
- Border Radius: 16px
- Padding: `24px`
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`

### Food Category Badges

- Border Radius: `4px`
- Padding: `4px 12px`
- Font Size: 12px
- Font Weight: 700
- テキスト色: `#1f1f1f`
- 背景色はカテゴリごとに異なる（Color Palette の Category 参照）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 1200px
- Padding (horizontal): 24px

### Grid

- 商品グリッド: 4カラム（デスクトップ）、2カラム（タブレット）、1カラム（モバイル）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素、バッジ |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | 商品カード |
| 2 | `0 4px 16px rgba(0,0,0,0.12)` | ホバー時のカード |
| 3 | `0 8px 32px rgba(0,0,0,0.16)` | モーダル、フローティング要素 |

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景には必ず `#fbfbf6`（温かみのあるアイボリー）を使い、純白 `#ffffff` は使わない
- 英語見出しには Riviera（または Cormorant Garamond 代替）を使い、日本語本文は游ゴシック体を使う
- 見出しは weight 400 で軽やかに。ボールドは CTA とリード文のみ
- 食材カテゴリバッジには指定色（和食=ティール、洋食=ゴールド、中華=ピンク、エスニック=イエロー）を使う
- CTA は pill 形状（border-radius を大きな値に）にする
- セクション背景には `#f8f7ee`（ややクリーム寄りのアイボリー）を使い、コントラストを付ける

### Don't（禁止）

- 純白（`#ffffff`）をページ背景に使わない（温かみが失われる）
- 見出しに `font-weight: 700` を使わない（CTA・リード文以外では400を使う）
- `palt` や `kern` を font-feature-settings に設定しない（フルピッチで組む設計）
- テキスト色に純粋な `#000000` を使わない（`#1f1f1f` を使う）
- CTA ボタンを角丸の四角にしない（pill 形状が必須）
- 食材カテゴリの色を入れ替えない（色とカテゴリの対応は固定）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）
- CTA ボタンは十分な padding（16px 24px 以上）を確保

### フォントサイズの調整

- Display: デスクトップ 80px → モバイル 40px 程度に縮小
- Section Heading: デスクトップ 40px → モバイル 24px 程度に縮小
- 本文は 14px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #1f8d61
Text Color: #1f1f1f
Background: #fbfbf6
Surface Alt: #f8f7ee
Font (Display): Riviera, "Cormorant Garamond", serif
Font (Body): "A+EqpB-游ゴシック体 Pr6N M", 游ゴシック体, YuGothic,
  "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, sans-serif
Body Size: 14px
Line Height: 2.0
Heading Weight: 400
CTA Shape: pill (border-radius: 9999px)
```

### プロンプト例

```
GREEN SPOON のデザインシステムに従って、商品一覧ページを作成してください。
- 背景色: #fbfbf6（アイボリー）
- CTA: #1f8d61 の pill ボタン、font-weight: 700
- 見出し: 游ゴシック、weight 400、line-height 1.3
- 本文: 游ゴシック、14px、weight 400、line-height 2.0
- カード: radius 16px、影あり
- 食材バッジ: 和食=#bee4e4、洋食=#f3daaa、中華=#eec1bc、エスニック=#f5d03e
```
