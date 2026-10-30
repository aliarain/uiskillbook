# DESIGN.md — THREE

> THREE（https://www.threecosmetics.com/）のデザイン仕様書。
> ACRO Inc.（ポーラ・オルビスグループ）が展開するナチュラルコスメブランド。
> 実サイトの computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 植物由来の自然な美しさを体現する、引き算のデザイン。プロダクトフォトグラフィが主役で、UIクロームは極限まで削ぎ落とされている
- **密度**: 非常にゆったり。余白を贅沢に使い、コスメブランドらしいエディトリアルな空気感を演出
- **キーワード**: ボタニカル、ミニマル、エディトリアル、フラット、ストイック
- **特徴**:
  - **全テキスト weight 400** — ボールドを一切使わない、均一なテキストウェイトが静謐な印象を生む
  - **全ボタン border-radius: 0** — 角丸なし。矩形のゴーストボタンのみで構成
  - **Akzidenz-Grotesk** — Helvetica の前身であるネオグロテスク書体を全面採用。ラグジュアリーかつクラフト感のある欧文表現
  - **イエローグリーン `#dfda64`** — THREE のシグネチャーアクセントカラー。ティッカーバナーに使用
  - **影なし** — box-shadow を一切使わない完全フラットデザイン

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Brand Accent** (`#dfda64`): THREE のシグネチャーカラー。イエローグリーン。ティッカーバナー、アクセント装飾に使用。テキストには使わない

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト。純粋な黒ではなく、柔らかいダークグレー
- **Text Secondary** (`#595757`): フッターナビ、補足テキスト
- **Border Primary** (`#595757`): CTAボタンの枠線（ダーク背景以外）
- **Border Secondary** (`#bfbfbf`): セカンダリボタン、ジャーナルリンクの枠線
- **Border Light** (`#b9b9b9`): ジャーナルリンク等の薄い枠線
- **Background** (`#ffffff`): ページ背景
- **Surface Tag** (`#f2f2f2`): キーワードタグの背景
- **Surface Tag Hover** (`#ededed`): タグホバー、NAVアクティブ状態の背景
- **Banner Muted** (`#999999`): グレーティッカーバナー背景

### On Dark（暗い背景上）

- **Text on Dark** (`#ffffff`): ダーク背景上のテキスト
- **Border on Dark** (`#ffffff`): ダーク背景上のボタン枠線

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ ProN（macOS）
- 游ゴシック（macOS / Windows）
- メイリオ（Windows フォールバック）

**明朝体**: 該当なし。THREE は全面ゴシック体（日本のビューティーブランドとしては珍しい選択）

### 3.2 欧文フォント

- **プライマリ**: Akzidenz-Grotesk（Berthold 社のライセンスフォント）
  - **代替フォント**: Inter（Google Fonts）— ジオメトリックサンセリフとして最も近い印象。Akzidenz-Grotesk の均一なストロークと中立的な字形を再現
  - 他の候補: IBM Plex Sans（やや人間味が強い）、Work Sans（やや幅広）
- **フォーム / 検索**: Arial（単体指定）

### 3.3 font-family 指定

```css
/* メイン — 欧文 Akzidenz-Grotesk 優先 */
font-family: akzidenz-grotesk, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", arial, YuGothic, 游ゴシック,
  Meiryo, メイリオ, sans-serif;

/* フォーム / 検索入力 */
font-family: Arial, sans-serif;

/* preview.html 用（ライセンスフォント代替） */
font-family: "Inter", "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", arial, YuGothic, 游ゴシック,
  Meiryo, メイリオ, sans-serif;
```

**フォールバックの考え方**:
- 欧文 Akzidenz-Grotesk を最優先。ブランドの欧文表現が核心
- 和文はヒラギノ角ゴ ProN → 游ゴシック → メイリオの順
- 明朝体スタックは不要（サイト全体がゴシック統一）
- フォーム入力は Arial 単体でシステムフォント的に扱う

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Category Section (h3) | 18px | 400 | 1.0 (18px) | 0.5px | カテゴリ見出し |
| Section Title (h2) | 17px | 400 | 1.0 (16px) | 0.5px | セクションタイトル |
| Section Title Large (h2) | 16px | 400 | 1.0 (16px) | 0.5px | 大セクションタイトル |
| Body / Nav | 14px | 400 | 1.86 (26px) | 0.5px | 本文・ナビゲーション |
| Product Title | 14px | 400 | 1.57 (22px) | 0.5px | 商品名 |
| Price | 12px | 400 | 1.0 (12px) | 0.5px | 価格表示 |
| Footer Heading (h4) | 12px | 400 | 1.83 (22px) | 0.5px | フッター見出し |
| Banner Ticker | 12px | 400 | 1.2 (14.4px) | 0.5px | ティッカーバナー |
| Footer Nav | 12px | 400 | 1.83 (22px) | 0.5px | フッターナビ |

**特徴的な点**:
- **全テキストが weight 400** — ボールドは一切使用されていない
- **全テキストに `letter-spacing: 0.5px`** が均一に適用されている
- **コンパクトなサイズ** — 本文 14px、キャプション 12px と、日本語サイトとしては小さめ
- **見出しの line-height: 1.0** — 見出しに呼吸の余白を持たせない、タイトな組版

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 / ナビ: `1.86` (14px × 1.86 = 26px) — 日本語としては標準的
- 商品名: `1.57` (14px × 1.57 = 22px) — やや詰め気味
- 見出し (h2, h3): `1.0` — 非常にタイト。装飾的な見出し表現
- 価格: `1.0` — データ表示はタイトに
- フッター: `1.83` (12px × 1.83 = 22px) — 小さい文字は行間を広めに

**字間 (letter-spacing)** — 実測値:
- **全テキストに `0.5px` が均一適用** — サイズに関わらず固定値
- 14px テキストでは約 `0.036em`、12px テキストでは約 `0.042em` に相当
- `palt` は確認されていない

**ガイドライン**:
- `letter-spacing: 0.5px` をすべてのテキストに均一適用する
- `font-weight: 400` のみを使用する。ボールドは禁止
- 見出しの `line-height: 1.0` は意図的なデザイン判断（装飾的・欧文的な見出し表現）
- 本文の `line-height: 1.86` は日本語の可読性を確保している

### 3.6 禁則処理・改行ルール

```css
/* 標準的な日本語改行設定 */
word-break: break-all;
overflow-wrap: break-word;
```

- 特殊な禁則処理の設定は確認されていない
- サイト全体がコンパクトなテキスト量のため、長文の折り返しは最小限

### 3.7 OpenType 機能

```css
/* palt / kern の明示的な適用は確認されていない */
font-feature-settings: normal;
```

- Akzidenz-Grotesk はもともとプロポーショナルフォントのため、palt は不要
- 和文部分にも palt は適用されていない（ヒラギノ角ゴ ProN のデフォルト字詰めで運用）

### 3.8 縦書き

- 該当なし。THREE は横書きのみ

---

## 4. Component Stylings

### Buttons

THREE のボタンは**すべてゴーストボタン（アウトライン）**。塗りつぶしボタンは存在しない。

**Primary CTA（ダークグレー枠）**
- Background: `transparent`
- Text: `#333333`
- Border: `1px solid #595757`
- Padding: `14px 0`（幅は親要素に依存）
- Border Radius: `0px`
- Font Size: `14px`
- Font Weight: `400`
- Letter Spacing: `0.5px`

**Secondary CTA（ライトグレー枠）**
- Background: `transparent`
- Text: `#333333`
- Border: `1px solid #bfbfbf`
- Padding: `8px 0`
- Border Radius: `0px`
- Font Size: `12px`
- Font Weight: `400`

**CTA on Dark（白枠）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Padding: `15px 0`
- Border Radius: `0px`
- Font Size: `14px`
- Font Weight: `400`

**Keyword Tag**
- Background: `#f2f2f2`
- Text: `#333333`
- Border: none
- Padding: `3px 10px`
- Border Radius: `0px`
- Font Size: `14px`
- Hover Background: `#ededed`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #bfbfbf`
- Border Radius: `0px`
- Padding: `8px 12px`
- Font Size: `14px`（Arial）
- Font Weight: `400`

### Cards

- Background: `#ffffff`
- Border: none（ボーダーレス、写真主導のカード）
- Border Radius: `0px`
- Shadow: none（完全フラット）
- 商品画像が全面を占め、テキストは最小限

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 最小余白 |
| S | 8px | タグ内パディング |
| M | 16px | 要素間余白 |
| L | 24px | セクション内余白 |
| XL | 40px | セクション間余白 |
| XXL | 80px | ページセクション間 |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 20px

### Grid

- 商品一覧: 3〜4カラムグリッド
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

- THREE は**完全フラットデザイン**。box-shadow を一切使用しない
- 要素の区別はスペーシングとタイポグラフィの階層のみで表現
- ホバー時も影の追加はなし（ボーダー色の変化やテキストのアンダーラインで状態を示す）
- この徹底したフラットさが、プロダクト写真の美しさを際立たせている

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストは常に `font-weight: 400` を使う。ボールドで強調しない、ストイックな表現を貫く
- `letter-spacing: 0.5px` をすべてのテキストに均一適用する
- ボタンは `border-radius: 0` のゴーストボタン（アウトライン）のみ使う
- 商品写真を大きく扱い、UIクロームは最小限にする
- アクセントカラー `#dfda64` は装飾要素（ティッカーバナー等）にのみ使い、抑制的に使う
- テキスト色は `#333333` を使い、純粋な `#000000` は避ける
- 見出しの `line-height: 1.0` を維持し、欧文的なタイトな組版を表現する

### Don't（禁止）

- `font-weight: 700` や `bold` を使わない（THREE のデザインで最も重要なルール）
- `border-radius` を付けない。角丸ボタンは THREE の世界観を壊す
- 塗りつぶしボタンを使わない。すべてのCTAはゴーストボタン
- `#dfda64` アクセントカラーをテキストに使わない（白背景でコントラスト不足）
- box-shadow を追加しない。フラットデザインを崩さない
- 明朝体を使わない（THREE はゴシック体のみ）
- テキストサイズを大きくしすぎない（14px 本文、12px キャプションのコンパクトさを維持）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- ゴーストボタンは十分なパディング（14px〜15px 垂直）でタップ可能領域を確保

### フォントサイズの調整

- モバイルでは本文 14px を維持（もともとコンパクト）
- グリッドカラム数を 3〜4 → 2 → 1 に段階的に縮小
- 商品画像の比率は維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Accent: #dfda64（ティッカーバナー・装飾用）
Text Primary: #333333
Text Secondary: #595757
Background: #ffffff
Surface Tag: #f2f2f2
Border CTA: #595757
Border Secondary: #bfbfbf

Font: akzidenz-grotesk, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", arial, YuGothic, 游ゴシック,
  Meiryo, メイリオ, sans-serif
Font (preview substitute): "Inter", "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", arial, YuGothic, 游ゴシック,
  Meiryo, メイリオ, sans-serif

Body Size: 14px / weight: 400 / line-height: 1.86 / letter-spacing: 0.5px
Heading: weight: 400 / line-height: 1.0 / letter-spacing: 0.5px
All Buttons: border-radius: 0 / ghost (outline) only / weight: 400
Elevation: none (完全フラット)
```

### プロンプト例

```
THREE のデザインに従って、商品一覧ページを作成してください。
- フォント: "Inter", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
    arial, YuGothic, 游ゴシック, Meiryo, メイリオ, sans-serif
- font-weight は全テキスト 400 のみ（bold 禁止）
- letter-spacing: 0.5px を全テキストに均一適用
- テキスト色: #333333
- 背景: #ffffff
- ボタン: border-radius: 0, ghost style, border 1px solid #595757
- 影なし（box-shadow 禁止）
- 商品写真を大きく扱い、UIは最小限に
- アクセント #dfda64 はティッカーバナー等の装飾のみ
```
