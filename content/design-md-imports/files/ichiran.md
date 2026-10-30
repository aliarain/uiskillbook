# DESIGN.md — ICHIRAN (一蘭)

> 一蘭（https://ichiran.com/）のデザイン仕様書。
> 福岡発の天然とんこつラーメン専門店。「味集中カウンター」で知られる日本を代表するラーメンブランド。
> Puppeteer による computed style 実測値（2026-06-10 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 和の伝統と温かみを感じさせる飲食ブランドサイト。暗色背景と写真を大胆に使い、没入感のあるビジュアルで「味集中」の世界観を表現
- **密度**: フルスクリーンの写真・暗色セクションを多用するイマーシブ型。情報量は控えめでビジュアル訴求
- **キーワード**: 和風、温かみ、没入感、赤と茶、伝統的
- **特徴**: テキスト色に `#503211`（焦げ茶）を使い、黒ではなく温かみのある色調で統一。CTA は pill 型（border-radius: 96px）に茶色ボーダーを組み合わせた独自スタイル。CSS Custom Properties は未使用の旧来型 CSS 設計。フルスクリーン背景画像に半透明オーバーレイを重ねるレイアウトが特徴的

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Red** (`#bf1a1a`): メインのブランドカラー。一蘭の赤。CTA ボタン背景、ブランド訴求に使用
- **Brand Green** (`#628141`): セカンダリカラー。店舗案内・アクション系の CTA に使用
- **Brand Brown** (`#503211`): テキスト色・ボーダー色。一蘭のロゴや暖簾の茶色に由来する基調色

### Accent（アクセント）

- **Gold** (`#e1d7a5`): 言語セレクターバー、装飾要素。和の金色をモチーフにした温かみのあるアクセント
- **Gold Text** (`#ccaa22`): テキストアクセント。翻訳サジェスト等の強調テキスト
- **Rose** (`#eecccc`): サイドバー CTA（おみやげ一蘭 公式通販）の背景。赤の淡い派生色

### Neutral（ニュートラル）

- **Text Primary** (`#503211`): 本文テキスト。純黒ではなく焦げ茶
- **Text Secondary** (`#666666`): 補足テキスト、モーダル見出し
- **Text Muted** (`#999999`): 無効状態、フッター内テキスト
- **Copyright** (`#999977`): コピーライト専用の緑がかったグレー
- **Border** (`#503211`): ボタンボーダー。テキスト色と同じ茶色
- **Background White** (`rgba(255,255,255,0.96)`): コンテンツエリア背景。わずかに透過
- **Surface Dark** (`#222222`): セクション背景（イチオシ、SNS、海外展開）
- **Overlay Dark** (`rgba(0,0,0,0.8)`): フッター背景、言語バッジ
- **Overlay Hero** (`rgba(0,0,0,0.4)`): ヒーロー写真の上に重なるオーバーレイ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ Pro W3（macOS）、メイリオ（Windows）、Osaka（レガシー macOS）、ＭＳ Ｐゴシック（レガシー Windows）
- 特徴: ProN ではなく **Pro** を使用。旧来の日本語ウェブサイトに典型的なフォントスタック

### 3.2 欧文フォント

- **サンセリフ**: システムデフォルト（generic sans-serif）
- **コピーライト専用**: Oxygen（Google Fonts）— フッターの著作権表示のみに使用

### 3.3 font-family 指定

```css
/* 本文・見出し */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* コピーライト */
font-family: Oxygen, sans-serif;
```

**フォールバックの考え方**:
- 和文ゴシックを最優先。欧文専用フォントは含まず、和文フォント内蔵の欧文グリフをそのまま使用
- ヒラギノ角ゴ **Pro**（ProN ではない）を指定。JIS X 0213:2004 の字形変更が反映されないレガシー指定
- Osaka はクラシック macOS 向けのフォールバック。現在の macOS では実質不要だが互換性のために残されている

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | 本文フォント | 32px | 700 | 1.4 | normal | ヘッダーロゴ・メインビジュアル |
| Heading 1 | 本文フォント | 24px | 700 | 1.4 | normal | モーダル見出し |
| Heading 2 | 本文フォント | 16-24px | 700 | 1.4 | normal | セクション見出し |
| Body | 本文フォント | 16px | 400 | 1.6 | normal | 本文 |
| CTA Text | 本文フォント | 16px | 600 | 1.6 | normal | ボタンラベル |
| Small | 本文フォント | 12.8px | 400 | 2.0 | normal | 補足・注釈テキスト |
| Copyright | Oxygen | 12px | 400 | 1.5 | normal | フッター著作権表示 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（16px テキストで 25.6px の行間）
- **見出しの行間**: 1.4（Display・h1・h2 共通）
- **小テキストの行間**: 2.0（12.8px テキストで 25.6px。小さい文字を読みやすくするための広い行間）
- **本文の字間 (letter-spacing)**: normal（カスタム指定なし）
- **見出しの字間**: normal（カスタム指定なし）

**ガイドライン**:
- 一蘭サイトは letter-spacing を一切カスタマイズしていない。日本語の標準字間をそのまま使用
- 本文 1.6、見出し 1.4 は日本語サイトとしてはオーソドックスな設定
- 小テキスト（12.8px）の line-height: 2.0 は、可読性確保のための配慮

### 3.6 禁則処理・改行ルール

```css
/* サイトでの観測値 — 特別な設定なし */
word-break: normal;
overflow-wrap: normal;
```

**備考**: 禁則処理はブラウザデフォルトに依存。明示的な CSS 指定なし

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt**: 未使用。プロポーショナル字詰めは適用されていない
- **kern**: 未使用
- 旧来型の日本語 Web サイトに典型的な設定。OpenType 機能を活用しないシンプルなタイポグラフィ

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（赤）**
- Background: `#bf1a1a`
- Text: `#ffffff`
- Border: 1px solid `#503211`
- Padding: 9.6px 16px
- Border Radius: 96px（pill 型）
- Font Size: 16px
- Font Weight: 600

**Secondary（緑）**
- Background: `#628141`
- Text: `#ffffff`
- Border: 1px solid `#503211`
- Padding: 9.6px 16px
- Border Radius: 96px（pill 型）
- Font Size: 16px
- Font Weight: 600

**Outline（白抜き）**
- Background: `transparent`
- Text: `#503211`
- Border: 1px solid `#503211`
- Padding: 9.6px 16px
- Border Radius: 96px（pill 型）
- Font Size: 16px
- Font Weight: 600

**Sidebar CTA**
- Background: `#eecccc`
- Text: `#333333`
- Border: none
- Padding: 3%
- Border Radius: 0px（角丸なし）

**Back to Top**
- Background: `rgba(0,0,0,0.8)`
- Text: `#ffffff`
- Border Radius: 50px（円形）

**ボタンの共通特徴**:
- すべての主要 CTA が pill 型（border-radius: 96px）で統一されている
- ボーダーは Brand Brown `#503211` で統一。背景色に関わらずボーダーの茶色が一蘭らしさを演出
- 角張ったボタンはサイドバー CTA のみ。階層の低い位置づけ

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#503211`
- Border Radius: 4px
- Padding: 8px 12px
- Font Size: 16px

### Cards

- Background: `#ffffff` または `rgba(255,255,255,0.96)`
- Border: none
- Border Radius: 8px
- Padding: 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.15)`

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

- Max Width: 960px
- Padding (horizontal): 3%（パーセント指定）

### Grid

- Columns: 単一カラム（メインコンテンツ）+ サイドバー
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | カード、コンテンツブロック |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | モーダル、ポップアップ |
| 3 | `0 8px 24px rgba(0,0,0,0.2)` | オーバーレイ、フローティング要素 |

**特記事項**: 一蘭サイトは shadow よりも background-color の暗転（`rgba(0,0,0,0.4)` 等のオーバーレイ）で奥行きを表現する傾向が強い

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色に `#503211`（焦げ茶）を使う。一蘭の暖簾・ロゴの茶色を基調とした温かみのあるデザインにする
- CTA は pill 型（border-radius: 96px）にし、ボーダーに `#503211` を使う
- 暗い背景（`#222` や `rgba(0,0,0,0.8)`）と明るいコンテンツエリアのコントラストで奥行きをつくる
- 写真の上には半透明オーバーレイ（`rgba(0,0,0,0.4)` 程度）を重ねてテキスト可読性を確保する
- ブランドレッド `#bf1a1a` は主要 CTA にのみ使い、使いすぎない

### Don't（禁止）

- テキストに純黒 `#000000` を使わない（一蘭のトーンは焦げ茶 `#503211`）
- CTA を角丸（border-radius: 8px 等）にしない（一蘭は pill 型が基本）
- モダンな SaaS 風のフラットデザインにしない（温かみと伝統感を維持する）
- letter-spacing や palt を独自に追加しない（元サイトが意図的にデフォルトを採用している）
- Brand Red と Brand Green を同じ画面内で同格のボタンとして並べない（赤がプライマリ、緑がセカンダリの階層を守る）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。単一カラム |
| Tablet | ≤ 1024px | タブレット。サイドバー非表示 |
| Desktop | > 1024px | デスクトップ。メイン + サイドバー |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 14-16px、見出しはデスクトップの 70-80% 程度に縮小
- pill CTA のパディングは維持し、タッチしやすいサイズを確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #bf1a1a (一蘭レッド)
Secondary Color: #628141 (グリーン)
Text Color: #503211 (焦げ茶)
Background: rgba(255,255,255,0.96)
Dark Section: #222222
Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Body Size: 16px
Line Height: 1.6
CTA Style: pill (border-radius: 96px) + border 1px solid #503211
```

### プロンプト例

```
一蘭のデザインシステムに従って、店舗検索ページを作成してください。
- テキスト色: #503211（焦げ茶。黒は使わない）
- プライマリ CTA: bg #bf1a1a、text #fff、border-radius: 96px、border: 1px solid #503211
- セカンダリ CTA: bg #628141、同じ pill スタイル
- フォント: "ヒラギノ角ゴ Pro W3" を先頭にしたフォールバックチェーン
- 行間: 本文は line-height: 1.6
- ダークセクション: 背景 #222 に白テキスト
- letter-spacing / palt: 使用しない（デフォルトのまま）
```
