# DESIGN.md — DAISO

> DAISO（https://www.daiso-sangyo.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。クラスベースの CSS で構築されており、CSS Custom Properties は未使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ポップで元気な100円ショップのワクワク感を表現。ビビッドなマゼンタピンクをブランドカラーとし、バラエティ雑貨の楽しさと親しみやすさを前面に出したデザイン
- **密度**: 適度な余白と広めの字間で、情報をゆったりと並べるコーポレートサイト。商品の多様さよりもブランドの明快さを優先
- **キーワード**: ポップ、元気、親しみやすい、カラフル、バラエティ
- **特徴**: ブランドピンク `#f2157f` がテキスト色・見出し色・リンク色として全面的に使用される。フラットデザインで shadow はほぼ使わず、色と太いウェイトで視覚的な強さを出している

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **DAISO Pink** (`#f2157f`): メインのブランドカラー。見出し、リンク、CTA テキスト、アイコンなど全面的に使用。ビビッドマゼンタ

### Neutral（ニュートラル）

- **Text Primary** (`#f2157f`): 主要テキスト（ブランドピンクがメインテキスト色を兼ねる）
- **Text on Dark** (`#ffffff`): ピンク背景・暗い背景上の白テキスト
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f3f3f3`): セクション背景、カード面のライトグレー
- **Overlay** (`rgba(17,17,17,0.5)`): モーダルオーバーレイ

### Accent

- **DAISO Pink BG** (`#f2157f`): ピンク背景セクション。白テキストと組み合わせる
- **Light Gray** (`#f3f3f3`): 交互セクション背景、区切り面

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Web フォント、メイン和文書体）
- ヒラギノ角ゴ ProN（macOS フォールバック）
- メイリオ / Meiryo（Windows フォールバック）
- MS PGothic（レガシー Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Montserrat（Google Fonts、見出し・欧文メイン）、Geneva、Arial、Verdana
- **約物調整**: YakuHanJPs（日本語約物の半角化フォント。font-family の先頭に配置）

### 3.3 font-family 指定

```css
/* グローバル（全要素共通） */
font-family: YakuHanJPs, Montserrat, "Noto Sans JP",
  "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", "MS PGothic", Geneva, Arial, Verdana, sans-serif;
```

**フォールバックの考え方**:
- YakuHanJPs を先頭に置き、日本語の句読点・括弧をプロポーショナル幅に統一
- Montserrat が欧文グリフを担当（幾何学的サンセリフで、ポップな印象を強化）
- Noto Sans JP がメインの和文書体
- ヒラギノ → メイリオ → MS PGothic の順で OS 別フォールバック
- Geneva / Arial / Verdana は最終フォールバック

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Heading 2 (main) | 22px | 900 | 1.0 | 2.64px (0.12em) | メイン見出し「お知らせ」等。極太 |
| Heading 2 (sub) | 22px | 700 | 1.48 | 1.87px (0.085em) | サブ見出し「企業情報」等 |
| Heading 3 | 16.5px | 700 | 1.0 | 1.4px (0.085em) | 小見出し「店舗検索」等 |
| Body | 17px | 500 | 1.59 | 2.805px (0.165em) | 本文テキスト |
| Body (base) | 15px | 500 | 1.0 | — | body 要素のベース |
| Sub-brand label | 14.35px | 700 | 1.0 | 1.79px (0.125em) | 「Standard Products」等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body ベース: `1.0`（15px / 15px）— コンテナ要素の初期値。テキストブロックでは上書きされる
- 本文 (p): `1.59`（17px × 1.59 ≈ 27px）— 適度な行間で読みやすさを確保
- 見出し (h2 main): `1.0` — 見出しはタイトに組む
- 見出し (h2 sub): `1.48` — 複数行見出し向けのゆったりした行間

**字間 (letter-spacing)** — 実測値:
- 本文: `0.165em`（2.805px / 17px）— **非常に広い**。開放的でモダンな印象を与える
- 見出し (h2 main): `0.12em`（2.64px / 22px）— 見出しにも広い字間
- 見出し (h2 sub / h3): `0.085em`（1.87px / 22px, 1.4px / 16.5px）
- サブブランドラベル: `0.125em`（1.79px / 14.35px）

**ガイドライン**:
- DAISO は本文・見出しともに字間が広い。**すべてのテキストに `0.085em` 以上の letter-spacing を適用する**のが特徴
- 本文の `0.165em` は一般的な日本語サイト（0.04em 前後）と比べて約4倍。意図的なデザイン選択
- `font-feature-settings: "palt"` がグローバルに適用されており、YakuHanJPs と組み合わせて約物の詰めと文字間の調整を両立している
- weight 900（Black）を見出しに使うのは珍しく、DAISO のポップで力強い印象を作っている

### 3.6 禁則処理・改行ルール

```css
/* 標準的な日本語禁則処理 */
word-break: break-all;
overflow-wrap: break-word;
```

- 長い URL や英単語の折り返しに対応

### 3.7 OpenType 機能

```css
/* グローバル適用（body レベル） */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰め。**全要素にグローバル適用**
- YakuHanJPs（約物半角化フォント）と `palt` の併用で、句読点・括弧の余白を最小化しつつ、文字全体のプロポーショナル配置を実現
- 一般的なサイトでは見出し専用だが、DAISO では本文にも適用。広い letter-spacing と組み合わせて可読性を保っている

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ピンク背景）**
- Background: `#f2157f`
- Text: `#ffffff`
- Padding: フラットな矩形
- Border Radius: 0px（角丸なし）
- Font Weight: 700

**Secondary CTA（白背景）**
- Background: `#ffffff`
- Text: `#f2157f`
- Border: なし
- Border Radius: 0px（角丸なし）
- Font Weight: 700

**Ghost（透明背景）**
- Background: `transparent`
- Text: `#ffffff`
- Border Radius: 0px
- Font Weight: 700
- ピンク背景セクションで使用

**デザインの特徴**:
- ボタンは角丸なしのフラットな矩形。pill 型やラウンドボタンは使わない
- ボーダーではなく色の対比（ピンク×白）でボタンを区別する
- シンプルで直線的なスタイルが、ポップな配色とコントラストを作る

### Cards

- Background: `#ffffff`
- Border: なし（影もなし）
- Border Radius: 0px
- Padding: 適度な内側余白
- フラットデザインで、背景色の切り替え（白 / `#f3f3f3`）でセクションを区別

### Navigation

- ブランドピンクを基調としたヘッダーナビゲーション
- リンク色: `#f2157f`

---

## 5. Layout Principles

### Spacing

- 広い letter-spacing（0.085em〜0.165em）に合わせて、要素間の余白もゆったりと取る
- セクション間はピンク / 白 / ライトグレーの背景色切り替えで明確に区切る

### Container

- コーポレートサイトとして標準的なコンテナ幅
- 横幅いっぱいのビジュアルセクションとコンテンツ幅セクションを交互に配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素。フラットデザインが基本 |
| Overlay | `rgba(17,17,17,0.5)` 背景 | モーダルオーバーレイ |

- DAISO のコーポレートサイトはフラットデザインを徹底しており、box-shadow はほぼ使用されていない
- 奥行きの表現は背景色の切り替え（白 / `#f3f3f3` / `#f2157f`）で行う

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドピンク `#f2157f` をテキスト色・見出し色・リンク色として積極的に使う（DAISO の最大の視覚特徴）
- すべてのテキストに広い letter-spacing を適用する（本文 0.165em、見出し 0.085em〜0.12em）
- `font-feature-settings: "palt"` をグローバルに適用する
- YakuHanJPs を font-family の先頭に置き、約物の半角化を行う
- 見出しには weight 700〜900 の太いウェイトを使い、力強い印象を出す
- ボタンは角丸なしのフラットな矩形にする
- 背景色の切り替え（白 / `#f3f3f3` / `#f2157f`）でセクションを区切る
- Montserrat を欧文書体として使い、ポップで幾何学的な印象を保つ

### Don't（禁止）

- ボタンに border-radius を付けない（DAISO は角丸なしのフラットデザイン）
- letter-spacing を `0` や `normal` にしない（サイト全体の開放感が失われる）
- ブランドピンク以外の色をメインアクセントに使わない
- `palt` を見出し専用にしない（DAISO ではグローバル適用）
- box-shadow で奥行きを出さない（フラットデザインを崩す）
- weight 400（Regular）を見出しに使わない（ポップな力強さが失われる）
- YakuHanJPs を省略して約物の半角化が効かない状態にしない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルではフォントサイズを縮小するが、letter-spacing の広さは維持する
- ブランドピンクとフラットデザインのスタイルはデバイスを問わず一貫

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #f2157f (DAISO Pink — vivid magenta)
Text Primary: #f2157f
Text on Dark: #ffffff
Background: #ffffff
Surface: #f3f3f3
Overlay: rgba(17,17,17,0.5)

Font: YakuHanJPs, Montserrat, "Noto Sans JP",
  "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", "MS PGothic", Geneva, Arial, Verdana, sans-serif

Body Size: 17px / weight: 500 / line-height: 1.59 / letter-spacing: 0.165em
Heading 2: 22px / weight: 900 / line-height: 1.0 / letter-spacing: 0.12em
Heading 3: 16.5px / weight: 700 / line-height: 1.0 / letter-spacing: 0.085em

OpenType: font-feature-settings: "palt" (global)
Button Radius: 0px (flat, no rounded corners)
```

### プロンプト例

```
DAISO のデザインに従って、コーポレートサイトのお知らせ一覧ページを作成してください。
- フォント: YakuHanJPs, Montserrat, "Noto Sans JP",
    "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic", Geneva, Arial, Verdana, sans-serif
- font-feature-settings: "palt"（グローバル適用）
- ブランドカラー: #f2157f（テキスト、見出し、リンクすべてに使用）
- 白テキスト: #ffffff（ピンク背景セクション用）
- 背景: #ffffff、セクション背景: #f3f3f3
- 見出し: 22px, weight 900, letter-spacing: 0.12em
- 本文: 17px, weight 500, line-height: 1.59, letter-spacing: 0.165em
- ボタン: border-radius なし、フラットな矩形
- 奥行き: box-shadow は使わず、背景色の切り替えで区切る
```
