# DESIGN.md — ZOJIRUSHI（象印マホービン）

> ZOJIRUSHI（https://www.zojirushi.co.jp/）のデザイン仕様書。
> 魔法瓶・炊飯器・ホットプレート等の家庭用品メーカー。タグライン「きょうを、だいじに。」
> 実サイトの computed style 実測（2026-05-31 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調にした清潔でゆとりある構成に、**ブランドブルー `#1d87d0` をアクセント**として配置。CTA は白ピル（`#ffffff` 背景 + `#222222` 文字）で控えめに仕上げ、ブルーはナビタブや装飾ラインなど「場の彩り」に使う。ライフスタイル家電ブランドらしい静かなエレガンス
- **密度**: 本文の line-height は最大 2.0、ブランドコピーも 1.68 と非常にゆったり。見出しの letter-spacing は 0.05em と広めに取り、余白で呼吸する構成。情報密度よりもブランドの空気感を優先
- **キーワード**: 静謐、ライフスタイル家電、白ピル CTA、palt グローバル適用、Helvetica Neue 優先、ブランドブルーのアクセント使い
- **特徴**:
  - 和文フォントの**明示的な宣言がない**という珍しい構成。`"Helvetica Neue", Helvetica, Arial, sans-serif` のみで、日本語はブラウザデフォルト（macOS ではヒラギノ角ゴ、Windows では游ゴシック）にフォールバック
  - **`font-feature-settings: "palt"` がグローバル適用**。すべてのテキストにプロポーショナル字詰めが効いており、見出しだけでなく本文も詰められている
  - **ブランドカラー `#1d87d0` は CTA には使わない**。ナビのアクティブタブ、テキストアクセント、ラインなど装飾要素に限定。主要 CTA は白ピル `#ffffff` + ダーク文字 `#222222` という控えめなスタイル
  - セクション見出しに英語ラベル（"TOPICS"、"PICK UP"）を大きく使う欧文演出
  - 本文コピーの letter-spacing が 0.12em と非常に広い箇所がある（ブランドステートメント系）
  - テキストカラーは `#222222`（濃いグレー）が主体で、純黒 `#000000` は使わない
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Blue** (`#1d87d0`): ブランドのアクセントカラー。ナビのアクティブタブ背景、テキストリンクのホバー、装飾ライン。**CTA には使わない**（装飾・彩り用途）
- **Link Blue** (`#0075c2`): テキストリンク、商品カード内のリンクテキスト。Brand Blue よりやや濃い
- **Warm Cream** (`#f9f6ed`): オンラインストア導線などのプロモーション面背景。ウォームニュートラル

### CTA / Buttons

- **Primary CTA（白ピル）**: 背景 `#ffffff` / 文字 `#222222` / radius `999px`（pill）/ padding `18.5px 50px 18.5px 30px` / 16-17px / weight 400-500。"詳しくはこちら"、"商品情報はこちら" 等
- **Ghost CTA**: 背景 transparent / 文字 `#000000` / radius `48px` / padding `16px 80px`。"もっと見る" 等
- **Tab Active**: 背景 `#1d87d0` / 文字 `#ffffff` / radius `10px 10px 0 0`（上角丸）/ 17px
- **Tab Inactive**: 背景 `#cccccc` / 文字 `#ffffff` / radius `10px 10px 0 0`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Text | `#222222` | (34, 34, 34) | 主要テキスト・見出し・CTA 文字 |
| Near Black | `#1a1a1a` | (26, 26, 26) | 商品名・カテゴリ名 |
| Gray | `#666666` | (102, 102, 102) | ダークアクセント |
| Light Gray | `#cccccc` | (204, 204, 204) | 非アクティブタブ・ボーダー |
| Surface Light | `#f6f6f6` | (246, 246, 246) | 薄いグレー面 |
| Surface Very Light | `#f9f9f9` | (249, 249, 249) | ごく薄いグレー面 |
| Light Blue Tint | `#dfeaf5` | (223, 234, 245) | 薄いブルー面（ブランドブルーの淡色） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・CTA 背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#cc3333` 程度の落ち着いたレッド
- **Success**: `#2e8b57` 程度のナチュラルグリーン
- **Warning**: `#cc8800` 程度のウォームオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **明示的な宣言なし**。font-family チェーンに和文フォントが含まれていない珍しい構成
- ブラウザのデフォルトにフォールバック:
  - macOS: ヒラギノ角ゴ ProN
  - Windows: 游ゴシック / メイリオ
  - Linux/Android: Noto Sans CJK JP
- **明朝体**: 使用しない（サイト全体ゴシック系統一）

### 3.2 欧文フォント

- **Helvetica Neue** を最優先。`Helvetica` → `Arial` の順でフォールバック
- 欧文テキスト（セクション見出しの "TOPICS"、"PICK UP" 等）は Helvetica Neue のグリフで表示される
- 和文と欧文で異なるフォントが混植される構成（意図的な設計）

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h4, p, a, span, button, nav） */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- Helvetica Neue を最優先し、欧文部分のタイポグラフィ品質を確保
- 和文フォントは**意図的に未指定**。OS のデフォルトゴシック体に委ねることで、各プラットフォームの最適な和文フォントが自動適用される
- この方針はライフスタイルブランドにおいて「特定の書体を押しつけない」デザイン哲学を反映

> **代替フォント注記**: preview.html では日本語の表示一貫性のため Google Fonts の **Noto Sans JP** を追加している。実サイトでは OS デフォルトの和文フォントが使用される。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／商品ページ、2026-05-31 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 (Large) | Helvetica Neue | 35px | **700** | 35px (x1.0) | 1.75px (0.05em) | `#222222` | "TOPICS" 等の英語セクション見出し |
| Product Title | Helvetica Neue | 24px | 700 | 31.2px (x1.3) | 0.72px (0.03em) | `#1a1a1a` | "EVERINO" 等の商品名 |
| Topic Title | Helvetica Neue | 21px | 700 | 23.1px (x1.1) | 0.7px (0.03em) | `#222222` | トピックスライダー内の見出し |
| Category Name | Helvetica Neue | 20px | 400 | 34px (x1.7) | 0.85px (0.04em) | `#1a1a1a` | 商品カテゴリ名 |
| Body (Brand Copy) | Helvetica Neue | 20.57px | 400 | 41.14px (x**2.0**) | 2.47px (**0.12em**) | `#222222` | ブランドステートメント系の本文。極めて広い字間 |
| Body (Statement) | Helvetica Neue | 19px | 400 | 32px (x1.68) | 0.7px (0.04em) | `#222222` | ブランド声明文 |
| Body (Article) | Helvetica Neue | 17px | 400 | 25.5px (x1.5) | 0.7px (0.04em) | `#222222` | 記事本文 |
| Brand Label | Helvetica Neue | 16px | **700** | 24px (x1.5) | 0.32px (0.02em) | `#1d87d0` | ブランド名ラベル（ブルー文字） |
| CTA Text | Helvetica Neue | 16-17px | 400-500 | 1.1-1.5 | 0.7px (0.04em) | `#222222` | 白ピル CTA 内のテキスト |
| Body (Default) | Helvetica Neue | 14px | 400 | 21px (x1.5) | normal | `#222222` | body のデフォルト本文 |
| H1 (Logo) | Helvetica Neue | 14px | 500 | 15.4px (x1.1) | 0.7px (0.05em) | `#222222` | KV タイトル（ロゴ的使用） |
| H2 (Pickup) | Helvetica Neue | 14px | 500 | 14px (x1.0) | 0.7px (0.05em) | `#222222` | ピックアップ見出し |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **ブランドコピー (20.57px)**: `2.0`（41.14px / 20.57px）-- 非常にゆったり。ブランドの空気感を演出
- **ブランド声明 (19px)**: `1.68`（32px / 19px）
- **カテゴリ名 (20px)**: `1.7`（34px / 20px）
- **記事本文 (17px)**: `1.5`（25.5px / 17px）
- **デフォルト本文 (14px)**: `1.5`（21px / 14px）
- **見出し (35px)**: `1.0`（35px / 35px）-- タイトに詰めてインパクトを出す
- **商品名 (24px)**: `1.3`（31.2px / 24px）

**字間 (letter-spacing)** -- 実測:
- **ブランドコピー**: **0.12em**（2.47px / 20.57px）-- 非常に広い。空気感の核心
- **セクション見出し**: **0.05em**（1.75px / 35px）-- 広めのトラッキングで英字見出しに呼吸を
- **本文・カテゴリ名**: **0.03em〜0.04em** -- 日本語の可読性を上げる標準的な範囲
- **CTA・ラベル**: **0.02em〜0.04em**
- **デフォルト (body)**: `normal`（14px のデフォルト本文のみ）

**ガイドライン**:
- 象印のデザインは**字間の広さで空気感をコントロール**する。ブランドコピーは 0.12em、見出しは 0.05em、本文は 0.03-0.04em と段階的に詰めていく
- 行間もブランドコピーは 2.0 と極めてゆったり。記事本文でも 1.5 は確保する
- 英語セクション見出し（"TOPICS"）は line-height 1.0 + letter-spacing 0.05em で、タイトかつ呼吸のあるバランス

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: anywhere;
line-break: strict;
```

- ブランドコピーは `<br>` で改行位置を手動指定する場合がある
- ピル CTA は `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* グローバル適用 -- 象印サイトの重要な特徴 */
font-feature-settings: "palt";
```

- **`palt`（プロポーショナル字詰め）がグローバル適用**。body レベルで全テキストに効いている
- 見出しだけでなく本文・CTA・ナビ・フッターまで、すべての日本語テキストにプロポーショナル幅が適用される
- これにより和文の字間が自然に詰まり、Helvetica Neue の欧文グリフとの混植時のリズムが整う
- letter-spacing との組み合わせで「palt で詰めてから letter-spacing で広げる」二段階の字間制御を実現

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（白ピル）** -- "詳しくはこちら"、"商品情報はこちら"
- Background: `#ffffff`
- Text: `#222222`
- Padding: `18.5px 50px 18.5px 30px`（左右非対称、右にゆとり）
- Border Radius: `999px`（完全ピル）
- Font: "Helvetica Neue", 16-17px, weight 400-500
- Border: none（または `1px solid #cccccc` の薄いボーダー）
- **注**: ブランドブルーを CTA に使わない控えめなスタイルが象印の特徴

**Ghost CTA** -- "もっと見る"
- Background: transparent
- Text: `#000000`
- Padding: `16px 80px`
- Border Radius: `48px`
- Font: "Helvetica Neue", 16px, weight 400
- Border: `1px solid #cccccc`

**Tab（Active）** -- "ニュースリリース"
- Background: `#1d87d0`（ブランドブルー）
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `10px 10px 0 0`（上だけ角丸）
- Font: "Helvetica Neue", 17px, weight 500

**Tab（Inactive）** -- "お知らせ"
- Background: `#cccccc`
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `10px 10px 0 0`
- Font: "Helvetica Neue", 17px, weight 400

**Product Link Card** -- 商品カード内テキストリンク
- Text: `#0075c2`（リンクブルー）
- Font: "Helvetica Neue", 14-16px, weight 400
- Border: none
- text-decoration: none（ホバー時 underline）

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #1d87d0`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: "Helvetica Neue", 16px, weight 400
- Height: `44px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f9f6ed`（ウォームクリーム面）/ `#f6f6f6`（ライトグレー面）
- Border: `1px solid #f6f6f6` または border なし
- Border Radius: `10px`（通常カード）/ `16px`（大カード）
- Shadow: 基本フラット（`box-shadow: none`）、ホバーで軽い影

### Header

- Background: `#ffffff`（`::after` 疑似要素で白背景）
- Border Bottom: なし
- Height: `60px` 程度
- Position: `sticky top: 0`

### Footer

- Background: `#f6f6f6` または `#ffffff`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー・KV 上下のゆとり |
| XXXL | 120px | セクション間の大きな余白（ブランドページ） |

### Container

- Max Width: `1200px` 程度（推奨）
- Padding (horizontal): mobile `16px` / desktop `72px`（トピック見出しの padding-left 実測値）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | 入力欄・小パーツ |
| Medium | 10px | カード・タブ |
| Large | 16px | 大カード |
| XL | 48px | ゴースト CTA |
| Pill | 999px | 主要 CTA |

### Grid

- 12 カラムグリッド（推奨）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.05)` | ホバー時の浮き上がり |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は**サーフェスの色分け**（白 / `#f6f6f6` / `#f9f6ed`）と**余白**で表現
- 影を使う場合は非常に控えめ（opacity 0.05〜0.10）

---

## 7. Do's and Don'ts

### Do（推奨）

- `font-feature-settings: "palt"` を**グローバル適用**する（象印サイトの核心的な特徴）
- 欧文フォントは **Helvetica Neue を最優先**、和文は OS デフォルトにフォールバックさせる
- 主要 CTA は**白ピル**（`#ffffff` 背景 + `#222222` 文字 + radius `999px`）で控えめに
- ブランドブルー `#1d87d0` は**タブ・ライン・テキストアクセント**に限定して使う
- リンクテキストは `#0075c2` を使う
- セクション見出しに**英語ラベル**（"TOPICS"、"PICK UP"）を大きく配置し、欧文の空気感を出す
- ブランドコピーは **letter-spacing 0.12em + line-height 2.0** で最大限のゆとりを
- 本文コピーは **letter-spacing 0.03-0.04em + line-height 1.5** で可読性を確保
- テキストカラーは **`#222222`** を基本にする（純黒 `#000000` より柔らかい）
- サーフェスに **`#f9f6ed`（ウォームクリーム）** や **`#f6f6f6`（ライトグレー）** を使い分ける

### Don't（禁止）

- **主要 CTA にブランドブルー `#1d87d0` を使わない** -- 象印の CTA は白ピルが基本。ブルーは装飾用
- font-family に**和文フォントを明示指定しない** -- OS デフォルトに委ねるのが象印の方針
- **`font-feature-settings: "palt"` を見出しだけに限定しない** -- グローバル適用が正解
- 本文に **line-height 1.5 未満**を使わない（ブランドのゆとりが失われる）
- **純黒 `#000000` をテキストに多用しない** -- `#222222` が象印のテキストカラー
- **角張った直角ボタン**（border-radius 0）を使わない -- ピルまたは大角丸が基本
- 見出しの letter-spacing を **0 や負の値**にしない -- 象印は常に正のトラッキング（0.03em〜0.05em）
- **冷たいブルーグレー**（`#6b7280`、`#9ca3af`）を使わない -- 象印のグレーはニュートラル寄り

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- セクション H2: 35px -> 24-28px
- 商品タイトル: 24px -> 18-20px
- 本文サイズは 14-16px を維持
- ブランドコピーの letter-spacing は 0.12em -> 0.06em に縮小可
- ピル CTA のパディングを縮小（50px -> 28px）

### タッチターゲット

- 主要 CTA: 高さ 48px 以上（padding + font-size + line-height）
- タブ: 高さ 44px 以上

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue (Accent): #1d87d0
Link Blue: #0075c2
Warm Cream Surface: #f9f6ed
Dark Text: #222222
Near Black: #1a1a1a
Light Gray Surface: #f6f6f6
Light Blue Tint: #dfeaf5
Tab Inactive: #cccccc
White: #ffffff

Font: "Helvetica Neue", Helvetica, Arial, sans-serif
（日本語は OS デフォルトフォールバック。preview 用代替: Noto Sans JP）
font-feature-settings: "palt"  ← グローバル適用

Body (Default): 14px / line-height 1.5 / weight 400 / letter-spacing normal
Body (Article): 17px / line-height 1.5 / weight 400 / letter-spacing 0.04em
Brand Copy: 20px / line-height 2.0 / weight 400 / letter-spacing 0.12em
Section H2: 35px / line-height 1.0 / weight 700 / letter-spacing 0.05em
Product Title: 24px / weight 700 / line-height 1.3 / letter-spacing 0.03em

Primary CTA: 白ピル / bg #fff / text #222 / radius 999px
Ghost CTA: 透明 / text #000 / border #ccc / radius 48px
Tab Active: bg #1d87d0 / text #fff / radius 10px 10px 0 0
Shadow: 基本 none。階層はサーフェスの色分けで表現
```

### プロンプト例

```
象印マホービンのデザインに従って、商品カテゴリ一覧セクションを作成してください。
- フォント: "Helvetica Neue", Helvetica, Arial, sans-serif
- font-feature-settings: "palt"（グローバル適用）
- セクション見出し: 英語ラベル "PRODUCTS" / 35px / weight 700 / letter-spacing 0.05em / color #222222
- 商品タイトル: 24px / weight 700 / line-height 1.3 / letter-spacing 0.03em / color #1a1a1a
- 本文: 17px / weight 400 / line-height 1.5 / letter-spacing 0.04em / color #222222
- ブランドコピー: 20px / weight 400 / line-height 2.0 / letter-spacing 0.12em
- 主要 CTA: 背景 #ffffff（白）/ 文字 #222222 / border-radius 999px / padding 18px 50px 18px 30px — 控えめな白ピル
- ゴースト CTA: 背景 透明 / 文字 #000 / border 1px solid #cccccc / radius 48px
- ブランドブルー #1d87d0 はタブ・アクセントラインに限定（CTA には使わない）
- リンクテキスト: #0075c2
- カード背景: 白 #ffffff、プロモ面は #f9f6ed（ウォームクリーム）、一般面は #f6f6f6
- box-shadow は基本 none。立体感はサーフェスの色分けで表現
- テキストカラーは #222222 を基本。純黒 #000000 は使わない
- letter-spacing は常に正の値（0.03em 以上）
```
