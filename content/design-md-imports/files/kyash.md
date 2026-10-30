# DESIGN.md — Kyash（キャッシュ）

> Kyash（https://www.kyash.co/）のデザイン仕様書。
> Visaプリペイドカード＋スマホ決済アプリ。審査不要でカード発行、リアルタイム家計簿、共有口座などの機能を提供するフィンテックサービス。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Kyash Blue `#2ad1ff`（シアン系ブルー）**の大面積ヒーローと、ヒラギノ角ゴ＋palt によるプロポーショナル組版が特徴的なフィンテックサイト。清潔感・透明感・信頼性を兼ね備える
- **密度**: セクションごとに大きな余白を取るゆったりした構成。line-height 1.9（本文 14px → 26.6px）と非常に広い行間で可読性を重視
- **キーワード**: Kyash Blue（シアン）、ヒラギノ角ゴ palt、フィンテックの信頼感、カード UI、ほぼ白の `#fdfdfd` 背景
- **特徴**:
  - ブランドカラーは **`#2ad1ff`（Kyash Blue）**。CSS 変数 `--kyash-blue` で定義。ヒーロースライドの背景全面に使用
  - **見出しにヒラギノ角ゴ W7（StdN）**、本文にヒラギノ角ゴ W3（ProN）と、**同一ファミリの太さ違い**を使い分ける
  - **`font-feature-settings: "palt"` がグローバルに適用**。全要素でプロポーショナル字詰めを行う
  - letter-spacing は `0.5px`（≈ 0.036em）がグローバルに適用
  - リンク色は `#0d97ff`（CSS 変数 `--ui-blue`）。Kyash Blue とは異なるブルー
  - ページ背景は `#fdfdfd`（ほぼ白）。純白 `#ffffff` ではない
  - テキスト色は `#26262a`（CSS 変数 `--rich-black`）。純黒ではなくわずかに青みを帯びた near-black
  - **font-primary（W7）と font-secondary（W5）**の 2 ウェイトクラスがある
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。CSS Custom Properties あり。

### Brand

- **Kyash Blue** (`#2ad1ff` / `--kyash-blue`): メインのブランドカラー。ヒーロースライド全面背景。アクセント面
- **UI Blue** (`#0d97ff` / `--ui-blue`): リンク色・インタラクティブ要素の色
- **Deep Blue** (`#003ab8` / `--blue`): ダークブルー（強調用）

### CTA / Buttons

- **Feature Pill**: 背景 `transparent` / 文字 `#26262a` / radius `100000px`（pill）/ padding `10px 15px` / weight 400 / ナビゲーション機能ボタン（"イマすぐ入金" "リアルタイム家計簿" 等）
- **App Store Badge**: Store バッジ画像による CTA
- **Text Link**: 文字 `#0d97ff`（`--ui-blue`）/ underline なし

### Neutral — Rich Black Scale

| Token | hex | CSS 変数 | 役割 |
|-------|-----|----------|------|
| Rich Black | `#26262a` | `--rich-black` | テキスト・見出し |
| Gray Secondary | `#808084` | `--text-gray-secondary` | 補助テキスト |
| Gray Tertiary | `#b8b8bc` | `--text-gray-tertiary` / `--fill--border-gray-secondary` | ページネーション・ボーダー |
| Border Tertiary | `#eaeaef` | `--fill--border-gray-tertiary` | 薄いボーダー |
| Bright BG | `#f7f8f9` | `--fill--bright-bg` | セクション背景面 |
| Almost White | `#fdfdfd` | — | ページ背景（body） |
| White | `#ffffff` | `--white` | カード・ヘッダー面 |

### Accent

- **Warm Red** (`#ff6a56` / `--warm-red`): アクセント（エラー等）
- **Yellow** (`#ffc700` / `--yellow`): アクセント（バッジ等）
- **Orange** (`#ff9a66` / `--vd--orange`): アクセント（強調）

### Blue Surface

- **Blue 100 BG** (`#dbf0ff` / `--fill--blue100-bg`): 薄いブルー面
- **Blue 25 BG** (`#f3f9ff` / `--fill--blue25-bg`): 最も薄いブルー面

### Header

- **Header BG**: `#fdfdfd`（ほぼ白、nav.siteheader）
- **Header Link**: `#0d97ff`（UI Blue）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（太）**: **ヒラギノ角ゴ StdN W7**（見出し用、`.font-primary`）
- **ゴシック体（中）**: **ヒラギノ角ゴ StdN W5**（サブ見出し用、`.font-secondary`）
- **ゴシック体（細）**: **ヒラギノ角ゴ ProN W3**（本文用）
- **明朝体**: 使用しない

### 3.2 欧文フォント

- ヒラギノ角ゴの欧文グリフをそのまま使用
- 専用の欧文書体は指定しない

### 3.3 font-family 指定

```css
/* 本文（W3） */
font-family: "Hiragino Sans", "FP-ヒラギノ角ゴ ProN W3", sans-serif;

/* 見出し用 .font-primary（W7） */
font-family: "Hiragino Sans", "FP-ヒラギノ角ゴ StdN W7";

/* サブ見出し用 .font-secondary（W5） */
font-family: "Hiragino Sans", "FP-ヒラギノ角ゴ StdN W5";
```

**フォールバックの考え方**:
- macOS / iOS のシステムフォント「ヒラギノ角ゴ」を最優先
- `Hiragino Sans` は macOS 10.11+ で利用可能な合成ファミリ（weight を CSS で制御可）
- `FP-ヒラギノ角ゴ StdN W7` 等は Webflow の埋め込み用指定
- Windows / Android ではヒラギノ不在のため `sans-serif` にフォールバック（Yu Gothic 等）

> **代替フォント注記**: ヒラギノ角ゴは macOS / iOS 専用のため、preview.html では **Noto Sans JP**（weight 300 / 400 / 700）を代替使用。ヒラギノの字面の引き締まり感はやや異なるが、プロポーショナル組版の再現には最適。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H2 | Hiragino StdN W7 | 36px | 700 | 54px (×1.5) | 0.5px | `#26262a` | "ネットショッピングやスマホ決済が" |
| Concept H2 | Hiragino ProN W3 | 32px | 700 | 48px (×1.5) | 0.5px | `#26262a` | "Visaだから、いつものお店で使える。" |
| Concept Typo | Hiragino StdN W7 | 32px | 700 | 38.4px (×1.2) | 0.5px | `#26262a` | コンセプトの強調タイポ |
| Section H2 | Hiragino StdN W7 | 28px | 700 | 42px (×1.5) | 0.5px | `#26262a` | "スマホで利用上限や利用範囲を設定" |
| Section H1 | Hiragino StdN W7 | 24px | 700 | 28.8px (×1.2) | 0.5px | `#26262a` | "3ステップでKyashをはじめる" |
| Sub H2 | Hiragino StdN W5 | 20px | 500 | 30px (×1.5) | 0.5px | `#26262a` | "ネット決済、お店ですぐスマホで…" |
| Step H3 | Hiragino ProN W3 | 20px | 700 | 30px (×1.5) | 0.5px | `#26262a` | "審査・書類不要カードを無料発行" |
| H1 Description | Hiragino ProN W3 | 16px | 300 | 30.4px (×1.9) | 0.5px | `#26262a` | ヒーローの説明文 |
| Body | Hiragino ProN W3 | 14px | 400 | 26.6px (×1.9) | 0.5px | `#26262a` | 本文 |
| H4 Card | Hiragino ProN W3 | 14px | 700 | 27.3px (×1.95) | 0.5px | `#26262a` | カード内見出し |
| Step H3 | Hiragino ProN W3 | 14px | 700 | 21px (×1.5) | 0.5px | `#26262a` | "スマホで申し込み" |
| Nav Link | Hiragino ProN W3 | 14px | 400 | 21px (×1.5) | 0.5px | `#0d97ff` | ヘッダーナビ |
| Caption | Hiragino ProN W3 | 12px | 400 | 22.8px (×1.9) | 0.5px | `#808084` | 注釈テキスト |
| Footer Index | Hiragino StdN W7 | 12px | 700 | 12px (×1.0) | 0.5px | `#26262a` | フッターセクション見出し |
| Footer Nav | Hiragino StdN W5 | 12px | 500 | 12px (×1.0) | 0.5px | `#26262a` | フッターナビ見出し |
| Note Bold | Hiragino ProN W3 | 12px | 700 | 22.8px (×1.9) | 0.5px | `#26262a` | 強調注釈 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.9**（14px → 26.6px）— 非常に広い。フィンテックの読みやすさ重視
- **見出しの行間**: 1.2〜1.5
- **フッターの行間**: 1.0
- **本文の字間 (letter-spacing)**: 0.5px（≈ 0.036em）— グローバル適用
- **見出しの字間**: 同じく 0.5px

**ガイドライン**:
- line-height 1.9 は日本語サイトの中でも際立って広い。金融サービスとして「読みやすさ＝信頼感」を重視している
- letter-spacing 0.5px がグローバルに適用されており、palt と合わせて均一なリズムを作る

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **palt がグローバルに適用**。body レベルで `"palt"` が設定され、全要素に継承される
- 見出し・本文・注釈すべてでプロポーショナル字詰めが有効
- letter-spacing 0.5px と組み合わせることで、palt による詰まりすぎを防ぐバランスを取っている

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Feature Pill**
- Background: `transparent`
- Text: `#26262a`
- Padding: 10px 15px
- Border Radius: 100000px（pill）
- Font Size: 14px
- Font Weight: 400

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#b8b8bc`
- Border (focus): 1px solid `#0d97ff`
- Border Radius: 8px
- Padding: 12px 16px
- Font Size: 14px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#eaeaef`
- Border Radius: 16px
- Padding: 24px
- Shadow: none

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
- Padding (horizontal): 20px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード、ボタン（フラット基調） |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0 4px 16px rgba(0,0,0,0.12)` | モーダル・ポップオーバー |

フラット基調。ヒーローのスライドにのみ微細なシャドウが付く。

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラー `#2ad1ff` は背景面として大きく使う
- テキスト色は `#26262a`（rich-black）で統一する
- `font-feature-settings: "palt"` をグローバルに適用する
- 本文は line-height: 1.9 を確保する
- letter-spacing は 0.5px をグローバルに適用する
- リンク色は `#0d97ff`（UI Blue）を使う
- 見出しの太さは W7（700）/ W5（500）/ W3（300〜400）の 3 段階で使い分ける

### Don't（禁止）

- Kyash Blue `#2ad1ff` をテキスト色に使わない（背景色・面色専用）
- 純黒 `#000000` をテキスト色に使わない（`#26262a` を使う）
- 純白 `#ffffff` をページ背景に使わない（`#fdfdfd` を使う）
- palt を無効にしない（全体のリズムが崩れる）
- 本文の line-height を 1.5 未満にしない（1.9 が基準）
- ヒラギノ以外のフォントを混在させない（統一感が崩れる）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 991px | タブレットレイアウト |
| Desktop | > 991px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 14px を維持、見出しはデスクトップの 60–70% 程度に縮小
- `.switch-show-br` / `.switch-style-hide-br` クラスで、デバイスに応じて改行位置を制御

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #2ad1ff (Kyash Blue)
UI Link Color: #0d97ff
Text Color: #26262a
Text Secondary: #808084
Background: #fdfdfd
Surface: #ffffff
Border: #eaeaef
Font (Heading): "Hiragino Sans", "FP-ヒラギノ角ゴ StdN W7"
Font (Body): "Hiragino Sans", "FP-ヒラギノ角ゴ ProN W3", sans-serif
Body Size: 14px
Line Height: 1.9
Letter Spacing: 0.5px
font-feature-settings: "palt"
Card Radius: 16px
```

### プロンプト例

```
Kyash のデザインシステムに従って、カード残高管理画面を作成してください。
- ブランドカラー: #2ad1ff（セクション背景に使用）
- リンク色: #0d97ff
- フォント: "Hiragino Sans", sans-serif（見出し W7、本文 W3）
- テキスト色: #26262a、補助テキスト: #808084
- 行間: 本文は line-height: 1.9、letter-spacing: 0.5px
- font-feature-settings: "palt"（プロポーショナル字詰め）
- カード: 白背景、border-radius: 16px、border: 1px solid #eaeaef
- ページ背景: #fdfdfd
```
