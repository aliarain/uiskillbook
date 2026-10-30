# DESIGN.md — UCC Ueshima Coffee (UCC上島珈琲)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのあるプレミアム感。1933年創業の老舗コーヒーブランドとしての格と、カジュアルな親しみやすさを両立
- **密度**: ゆったりとしたメディア型。コーヒー文化を伝える余白豊かなレイアウト
- **キーワード**: 温かみ (Warm)、上品 (Elegant)、親しみやすい (Approachable)、プレミアム (Premium)、コーヒー文化 (Coffee Culture)
- **特徴的なデザイン要素**:
  - 見出しに weight 300（極細）を使用し、エレガントな軽さを表現
  - 英語ラベルに Raleway + 広い letter-spacing（0.2em）でラグジュアリー感を演出
  - OpenType `pkna`（プロポーショナルかな）を全面的に使用（`palt` ではない）
  - UCC Red (#e60012) がすべてのCTA・アクセントを支配する強いブランドカラー
  - アクションカードに border-radius: 20px の大きな角丸で柔らかい印象
  - BEM ベースのコンポーネント命名: `ucc-a-`（atoms）、`ucc-m-`（molecules）、`ucc-o-`（organisms）、`ucc-p-`（pages）

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **UCC Red** (`#e60012`): メインブランドカラー。CTAボタン、英語ラベル、アクセント全般に使用。サイト内で圧倒的な出現頻度（44箇所以上）
- **UCC Red Dark** (`#cc0010`): ホバー・プレス時の推奨値

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Secondary** (`#666666`): サブナビ、補足テキスト
- **Text Muted** (`#786f5a`): ヘッダーリンク、アクションカードのテキスト。暖色系のグレーがコーヒーブランドらしい
- **Border Light** (`#eeeeee`): カードボーダー、サブナビ区切り
- **Border Medium** (`#cccccc`): 強めのボーダー
- **Divider** (`#d2d2d2`): セクション区切り線
- **Background** (`#ffffff`): ページ背景

### Surface（セクション背景色）

- **Beige** (`#f2ecde`): コーヒー知識・エンターテイメント系セクション。温かみのあるクラフト感
- **Light Pink** (`#fef3f4`): サステナビリティ系セクション。UCC Red の極薄トーン
- **Light Gray** (`#f7f7f7`): ニュースセクション

### Overlay

- **Hero Overlay** (`rgba(0,0,0,0.5)`): ヒーロー画像上のテキスト可読性確保用

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans Japanese（Google Fonts）。ウェイト 300〜600 を使い分け
- **フォールバック**: 游ゴシック → ヒラギノ角ゴ Pro → メイリオ

### 3.2 欧文フォント

- **サンセリフ**: Raleway（Google Fonts）。英語ラベル・セクションタイトルのアクセントに使用。ウェイト 400, 600
- **特徴**: Raleway は幾何学的サンセリフで、広い letter-spacing と組み合わせることでラグジュアリー/エディトリアルな印象を与える

### 3.3 font-family 指定

```css
/* 本文・和文メイン */
font-family: "Noto Sans Japanese", 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;

/* 英語ラベル・見出し装飾 */
font-family: Raleway, "Noto Sans Japanese", 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 和文は Noto Sans Japanese を最優先。Google Fonts で安定供給
- 欧文の Raleway は英語ラベル専用のフォントスタック。和文見出しと同居する場合は Raleway を先に指定
- 游ゴシック → ヒラギノ角ゴ Pro（ProN ではない）→ メイリオ の順でフォールバック
- cookie バナー等のシステムUIは `"ヒラギノ角ゴ ProN W3"` を先頭にしたシステムフォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Sans JP | 38px | 300 | 1.25 | normal | ページタイトル。極細ウェイトが特徴 |
| Section Heading | Noto Sans JP | 30px | 300 | 1.25 | normal | セクション見出し。同じく 300 の軽やかさ |
| English Label | Raleway | 16px | 400 | 1.75 | 0.2em | セクションの英語ラベル。広い字間 |
| Sub Heading | Noto Sans JP | 20px | 400 | 1.75 | normal | 中見出し |
| Section Sub | Noto Sans JP | 16px | 400 | 1.75 | normal | 小見出し |
| Action Heading | system | 22px | 500 | 1.6 | normal | アクションカード内見出し |
| CM Heading | system | 18px | 600 | 1.6 | normal | CM・プロモ見出し |
| Body / Nav | Noto Sans JP | 15px | 400 | 1.75 | normal | 本文・ナビゲーション |
| Caption | Noto Sans JP | 13px | 400 | 1.75 | normal | キャプション・補足 |
| Small | Noto Sans JP | 12px | 400 | 4.17 | normal | フッターナビ |
| CTA Text | system | 14px | 400 | — | normal | ボタンラベル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.75`。15px 本文 × 1.75 = 26.25px の行送り。日本語として十分な読みやすさ
- **見出しの行間**: `1.25`。大きな文字サイズ（30〜38px）に対してタイトな行間でエレガントに
- **英語ラベルの字間 (letter-spacing)**: `0.2em`。非常に広い字間でラグジュアリー感を演出
- **本文の字間**: `normal`。字間調整なし。`pkna` で仮名のプロポーショナル幅は適用

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で pkna を使用 */
font-feature-settings: "pkna";
```

- **pkna（プロポーショナルかな）**: `palt`（プロポーショナルメトリクス）ではなく `pkna` を使用。仮名文字のみプロポーショナル幅で詰め、漢字はフル幅を維持。見出し・本文ともに適用
- **palt との違い**: `palt` は漢字も含めて全グリフを詰めるが、`pkna` は仮名だけ。UCC は仮名の自然な詰めと漢字の安定感を両立している

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ucc-a-btn）**
- Background: `#e60012`（UCC Red）
- Text: `#ffffff`
- Padding: `10px`
- Border Radius: `0px`（角丸なし。シャープでクリーンな印象）
- Font Size: `14px`
- Font Weight: `400`
- 特徴: 赤の背景に白テキスト。角丸なしのシャープなデザイン

**Cookie Consent Button**
- Background: `#e60012`（UCC Red）
- Text: `#ffffff`
- Padding: `12px 14px`
- Border Radius: `18px`（pill 形状）
- Font Weight: `700`
- 特徴: 通常CTAとは異なり pill 形状

**PAGE TOP Button**
- Font: Raleway
- Background: `#e60012`
- Text: `#ffffff`
- Letter Spacing: `1.2px`（≈ 0.086em）
- Padding: `10px`

### Cards

**Action Card（ucc-m-action-thumb）**
- Background: `#ffffff`
- Border Radius: `20px`（大きな角丸で柔らかい印象）
- Text Color: `#786f5a`（温かみのあるミュートカラー）
- 特徴: 大胆な丸みでカジュアル・親しみやすい印象

**Footer Link Card**
- Border: `1px solid #eeeeee`
- Padding: `30px 18px`
- Font Size: `22px`
- Font Weight: `400`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #e60012`（推奨: ブランドカラーをフォーカスに使用）
- Border Radius: `4px`
- Padding: `8px 12px`
- Font Size: `15px`

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
| XXL | 64px |

### Container

- Max Width: `1200px`（推定。実サイトのコンテンツエリア幅に基づく）
- Padding (horizontal): `20px`

### Grid

- Columns: 3〜4列（デスクトップ）
- Gutter: `20px`
- アクションカードは 2列配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素。メインCTAボタン |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カード、ホバー時 |
| 2 | `0 4px 16px rgba(0,0,0,0.10)` | ドロップダウン、ポップオーバー |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル、フローティング要素 |

UCC サイトはフラットデザイン寄り。影の使用は控えめで、ボーダー（`#eeeeee`）による区切りが主体。

---

## 7. Do's and Don'ts

### Do（推奨）

- UCC Red (`#e60012`) をすべての CTA・アクセントに統一的に使う。ブランドの一貫性の核
- 見出しは weight 300 の極細ウェイトでエレガントさを出す
- 英語ラベルには Raleway + `letter-spacing: 0.2em` を組み合わせる
- OpenType は `pkna`（プロポーショナルかな）を使う。`palt` ではない
- font-family は必ずフォールバックチェーン全体を指定する
- アクションカードには border-radius: 20px の大きな角丸を使う
- セクション背景に `#f2ecde`（ベージュ）や `#fef3f4`（薄ピンク）を使い、温かみを加える
- 本文の line-height は 1.75 を維持する

### Don't（禁止）

- `palt` を `pkna` の代わりに使わない。UCC は仮名のみプロポーショナルにするデザイン方針
- 見出しに weight 700 を使わない。UCC の見出しは 300〜400 が基本（600 は CM 見出し等の限定用途）
- CTA に UCC Red 以外の色を使わない。ブランドの統一感が崩れる
- 本文に純粋な `#000000` を使わない。UCC は `#333333` でコントラストを和らげている
- 和文フォントに Noto Sans Japanese 1つだけを指定しない。游ゴシック → ヒラギノ角ゴ Pro → メイリオ のフォールバックを必ず含める
- Action Card の角丸を省略しない。20px の大きな丸みが UCC のやわらかいブランド感の要
- letter-spacing を本文に適用しない。広い字間は英語ラベル専用

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。1カラム |
| Tablet | ≤ 1024px | タブレットレイアウト。2カラム |
| Desktop | > 1024px | デスクトップレイアウト。3〜4カラム |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは Display 見出し 38px → 24px 程度に縮小
- 本文は 15px を維持（モバイルでも読みやすいサイズ）
- 英語ラベルの letter-spacing はモバイルでも 0.2em を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #e60012 (UCC Red)
Text Color: #333333
Text Secondary: #666666
Text Muted: #786f5a
Background: #ffffff
Section BG Beige: #f2ecde
Section BG Pink: #fef3f4
Section BG Gray: #f7f7f7
Border: #eeeeee
Font (JP): "Noto Sans Japanese", 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
Font (EN Label): Raleway, "Noto Sans Japanese", 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
Body Size: 15px
Body Line Height: 1.75
Heading Weight: 300
OpenType: "pkna" (NOT "palt")
CTA Radius: 0px (sharp edges)
Card Radius: 20px (soft curves)
EN Label Letter Spacing: 0.2em
```

### プロンプト例

```
UCC上島珈琲のデザインシステムに従って、商品一覧ページを作成してください。
- プライマリカラー: #e60012（UCC Red）
- フォント: "Noto Sans Japanese" + Raleway（英語ラベル）
- 見出し: weight 300、line-height 1.25
- 英語ラベル: Raleway, letter-spacing 0.2em
- 本文: 15px, line-height 1.75
- OpenType: font-feature-settings: "pkna"
- カード: border-radius 20px
- CTAボタン: #e60012 背景、白テキスト、角丸なし
- セクション背景: #f2ecde（ベージュ）でコーヒーの温かみを演出
```
