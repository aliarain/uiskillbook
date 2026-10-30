# DESIGN.md — Cle de Peau Beaute

> Shiseido のラグジュアリービューティーライン「Cle de Peau Beaute」公式サイト（https://www.cledepeau-beaute.com/jp/）のデザイン仕様書。
> 「鍵」を意味するフランス語ブランド名にふさわしい、抑制されたエレガンスと光の質感が特徴。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ラグジュアリーコスメにふさわしい抑制と余白。装飾を削ぎ落とし、光と余白で上質さを表現する「引き算のエレガンス」
- **密度**: 情報密度は低め。製品ビジュアルとホワイトスペースが主役で、テキストは最小限に抑えられる
- **キーワード**: ラグジュアリー、ライトウェイト（300）、ウォームクリーム、ダークネイビー、抑制
- **特徴**: **font-weight: 300（Light）が全体の基調**。見出しから本文まで一貫して Light ウェイトを使い、重さを感じさせない。見出しの `letter-spacing: 0.08em` が広い字間を生み、高級感のあるゆったりした佇まいをつくる。カテゴリセクションには温かみのあるクリーム面 `#fdf9f3` を敷き、ヘッダー・フッターのダークネイビー `#081f2c` との対比で奥行きを出す。ボタンの角丸は最小限の `3px` で、pill 型は使わない

---

## 2. Color Palette & Roles

### Neutral（ニュートラル — 精緻なグレー階調が特徴）

- **Dark Navy** (`#081f2c`): 見出し・フッター背景の基調色。**純黒は使わない**。暗いネイビーで柔らかい重みを出す
- **Body Text** (`#505050`): 説明文・h4 レベルの本文色
- **Secondary Text** (`#6d717a`): 日付・キャプション・補足テキスト。ブルーグレーの色味がクールさを添える
- **Placeholder** (`#979797`): 検索窓のプレースホルダー
- **Disabled Text** (`#bfc2c6`): 無効状態のボタンテキスト

### Surface（面色）

- **Background** (`#ffffff`): ページ全体の標準背景。純白
- **Warm Cream** (`#fdf9f3`): カテゴリセクション（キーラディアンスケア、ベースメイクなど）の温かみのある面色。**ブランドの核心的な面色**
- **Disabled Surface** (`#f7f8f9`): 無効状態ボタンの背景
- **Dark Navy** (`#081f2c`): フッター・動画プレーヤー領域の暗い面

### CTA / Button

- **Primary CTA** (`#081f2c` on `#ffffff`): ダークネイビー文字 + 白背景（アクティブ時）
- **Footer CTA** (`#000000` on `#ffffff`): 白背景にボーダー付き（LINE / メンバーシップ）
- **Disabled CTA** (`#bfc2c6` on `#f7f8f9`): 無効状態

> **Note**: Cle de Peau Beaute は**ブランドカラーとしての鮮やかな色を UI 上に使わない**。製品パッケージのゴールドや深紅は写真の中に留め、UI はあくまでニュートラルなモノトーン + ウォームクリームで構成する。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- Noto Sans JP（Google Fonts / Webフォント、最優先）
- ヒラギノ角ゴ ProN W3 / Pro W3（macOS フォールバック）
- 游ゴシック / YuGothic（macOS / Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Helvetica Neue, Helvetica, Arial（Noto Sans JP の後にフォールバックとして配置）

### 3.3 font-family 指定

```css
/* 本文・UI 全般 */
font-family: "Noto Sans JP", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             游ゴシック, YuGothic,
             "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 一部の領域（簡略版） */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **和文 (Noto Sans JP) を先頭**に置く。日本語の表示品質を最優先
- ヒラギノを ProN と Pro の**両方**指定（ブラウザ・OS バージョンによる違いを吸収）
- 游ゴシックは短縮名 `游ゴシック` と英語名 `YuGothic` の両方を指定
- 欧文フォールバックは最後に配置（和文フォント内の欧文グリフを優先する設計）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | Noto Sans JP | 34px | 300 | 1.18 (40.12px) | 0.08em (2.72px) | ページ大見出し (`#081f2c`) |
| Heading 2 | Noto Sans JP | 20px | 300 | 1.1 (22px) | 0.08em (1.6px) | セクション見出し (`#081f2c`) |
| Card Heading | Noto Sans JP | 17px | 300 | 1.5 (25.5px) | 0.04em | 製品カード名 |
| Heading 4 | Noto Sans JP | 14px | 400 | 1.6 (22.4px) | 0.08em (1.12px) | 小見出し・ラベル (`#505050`) |
| Body | Noto Sans JP | 14px | 300 | 1.5 (21px) | 0.03em (0.42px) | 本文 (`#6d717a`) |
| Footer Heading | Noto Sans JP | 14px | 400 | 1.4 (19.6px) | — | フッターセクション見出し |
| Small / Date | Noto Sans JP | 14px | 400 | — | — | 日付・補足 (`#6d717a`) |
| Caption | Noto Sans JP | 12px | 300 / 600 | 1.5 / 1.6 | — | フッター最小テキスト |
| Button | Noto Sans JP | 12px | 500 | — | — | CTA ラベル |
| Search | Noto Sans JP | 24px | 300 | — | — | 検索入力テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.5** (14px / 21px)。ラグジュアリーブランドらしい程よい呼吸感
- **見出しの行間**: **1.1〜1.18**。タイトルはタイトに詰め、存在感を出す
- **本文の字間 (letter-spacing)**: **0.03em**。わずかな字間が上品さを加える
- **見出しの字間**: **0.08em**。広い字間がラグジュアリーの核心。呼吸するような空間

**ガイドライン**:
- 見出しの `letter-spacing: 0.08em` はブランドの特徴的な要素。省略するとカジュアルに見えてしまう
- ウェイト 300 と広い字間の組み合わせが「軽やかな高級感」を生む
- 400 は小見出し・ラベル・フッターなど補助的な用途に限定

### 3.6 禁則処理・改行ルール

```css
/* 標準のブラウザ任せ。特別な指定は最小限 */
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

Cle de Peau Beaute は palt / kern を使わず、Noto Sans JP のデフォルトメトリクスで組む。**Light ウェイト + 広い letter-spacing** で十分な字間を確保しているため、追加の字詰めは不要。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — 抑制されたフラットなスタイル

**Primary (アクティブ時)**
- Background: `#ffffff`
- Text: `#081f2c`
- Border: `1px solid #081f2c`
- Border Radius: `3px`
- Padding: `16px 48px`
- Font Size: `12px`
- Font Weight: `500`

**Footer CTA (LINE / メンバーシップ)**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #ffffff`
- Border Radius: `3px`
- Padding: `10px 20px`

**Disabled**
- Background: `#f7f8f9`
- Text: `#bfc2c6`
- Border: none
- Border Radius: `3px` (top corners only)

> **Don't**: Cle de Peau Beaute に **pill 型のボタン（大きな角丸）は存在しない**。角丸は常に `3px` の最小限。鮮やかな色の CTA も使わない。

### Inputs

- **Search Input**
  - Background: `transparent`
  - Border: none（下線のみ）
  - Font Size: `24px`
  - Font Weight: `300`
  - Placeholder: `#979797`

### Cards

- Background: `#ffffff` or `#fdf9f3`
- Border: なし
- Border Radius: `0px`
- Shadow: なし（フラット）
- 製品画像が主役。テキストは控えめに配置

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコン間 |
| S | 16px | テキスト間 |
| M | 24px | カード内要素間 |
| L | 32px | セクション内パディング |
| XL | 48px | CTA パディング（横） |
| XXL | 80px+ | セクション間 |

### Container

- Max Width: 約 1200px（コンテンツ領域）
- ヒーローセクションは全幅
- 製品グリッドは均等配置

### Grid

- 製品カテゴリ: 3〜4 カラム（デスクトップ）
- 製品一覧: 2〜3 カラム
- モバイル: 1〜2 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（影はほぼ使わない） |
| 1 | `#fdf9f3` 面色の切り替え | セクション区切り |
| 2 | 微細な `box-shadow`（ホバー時のみ） | カードホバー |

> **特徴**: Cle de Peau Beaute は**ドロップシャドウをほぼ使わない**。面色の切り替え（白 `#ffffff` とクリーム `#fdf9f3`）で奥行きを表現する。ラグジュアリーブランドらしい「平面の中の奥行き」。

---

## 7. Do's and Don'ts

### Do（推奨）

- font-weight: **300 (Light)** を本文・見出しの基調とする
- 見出しには `letter-spacing: 0.08em` で広い字間を確保する
- カテゴリセクションの背景に **Warm Cream `#fdf9f3`** を使い、温かみを出す
- テキスト色は **Dark Navy `#081f2c`** を使い、純黒は避ける
- ボタンの角丸は **3px** に統一する
- 製品写真を大きく見せ、テキストは添える程度に留める
- ホワイトスペースを贅沢に使う

### Don't（禁止）

- **純黒 `#000000` を見出しに使わない**（`#081f2c` を使う）
- **font-weight: 700 (Bold) を使わない**。最も重くても 500
- **pill 型ボタン（大きな角丸）を使わない**（3px を守る）
- **鮮やかな色の CTA ボタンを使わない**（UI はモノトーン + クリーム）
- **letter-spacing を 0 にしない**（見出しの 0.08em はブランドの核心）
- **ドロップシャドウで強い影を落とさない**
- **palt / kern を適用しない**（Noto Sans JP のデフォルトメトリクスで組む）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ナビは収納 |
| Tablet | ≤ 1024px | 2 カラム製品グリッド |
| Desktop | > 1024px | 3〜4 カラム製品グリッド |

### タッチターゲット

- 最小サイズ: 44px x 44px（ボタン padding を含めて確保）

### フォントサイズの調整

- モバイルでは h1 34px → 24px 程度に縮小
- 本文 14px は据え置き
- 検索入力 24px も据え置き

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Dark Navy:           #081f2c  (見出し・フッター)
Body Text:           #505050
Secondary Text:      #6d717a
Warm Cream:          #fdf9f3  (カテゴリ面)
Background:          #ffffff
Disabled:            #bfc2c6 on #f7f8f9
Font:                "Noto Sans JP", "ヒラギノ角ゴ ProN W3", ..., sans-serif
Body Size:           14px
Body Weight:         300 (Light)
Body Line Height:    1.5
Heading LS:          0.08em
Body LS:             0.03em
Button Radius:       3px
```

### プロンプト例

```
このサービスのデザインシステム（クレ・ド・ポー ボーテ風）に従って、
製品詳細ページのカテゴリセクションを作成してください。

- 背景: Warm Cream #fdf9f3
- 見出し: 20px / weight 300 / letter-spacing 0.08em / color #081f2c
- 本文: 14px / weight 300 / line-height 1.5 / letter-spacing 0.03em / color #6d717a
- CTA: 12px / weight 500 / border 1px solid #081f2c / radius 3px / padding 16px 48px
- フォント: "Noto Sans JP" を先頭に、ヒラギノ → 游ゴシック → 欧文のフォールバック
- 純黒・太字・pill ボタン・ドロップシャドウは使わない
```
