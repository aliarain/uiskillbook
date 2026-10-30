# DESIGN.md — 猿田彦珈琲（Sarutahiko Coffee）

> 猿田彦珈琲（https://sarutahiko.co/）のデザイン仕様書。
> 恵比寿発のスペシャルティコーヒー専門店。EC は Shopify ベース。
> コーヒーブラウンとソフトブルーのアクセントで、温かみのあるクラフト感を表現。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのあるクラフト志向。コーヒーブラウンとソフトブルーの組み合わせで、専門店の落ち着きとカジュアルな親しみやすさを両立
- **密度**: EC サイトとしては標準的なグリッド密度。商品カード間は 8px（デスクトップ）/ 4px（モバイル）とタイトだが、セクション間には十分な余白
- **キーワード**: クラフト、コーヒーブラウン、ソフトブルー、Shopify EC、Zen Kaku Gothic New、温かみ
- **特徴**:
  - 和文フォントに **Zen Kaku Gothic New**（Google Fonts 相当の ZenKakuGothicNew-Regular）を使用。角の丸い柔らかなゴシック体で、手仕事のぬくもりを感じさせる
  - 欧文ディスプレイに **brothers**（Adobe Fonts）を使用。ナビゲーションカテゴリラベルや言語切替に限定的に使用
  - **ブランドアクセントは `#c8dce6`（ソフトブルー）**。Shopify テーマの `--color-base-accent-1` に設定。フッター背景、ナビゲーションカテゴリの active 背景、検索ボタンに使用
  - **バッジ・ラベルは `#9d826e`（コーヒーブラウン）**。「NEW」「送料無料」等のタグに使用。ブランドの世界観を象徴する色
  - **価格は `#663300`（ダークブラウン）** で表示。コーヒーの焙煎色を連想させる
  - ボタンは **border-radius: 0**（直角、Shopify テーマ設定 `--buttons-radius: 0px`）。バッジは pill 型（`--badge-corner-radius: 4.0rem`）
  - 人気ランキングバッジに **金・銀・銅**（`#ffc107` / `#9e9e9e` / `#b87333`）を使用
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Accent

- **Soft Blue** (`#c8dce6`): メインのアクセントカラー。Shopify テーマ変数 `--color-base-accent-1` / `--color-base-background-2`。フッター背景、カテゴリナビの active 背景、検索ボタン、トグルボタンに使用
- **Coffee Brown** (`#9d826e`): バッジ・ラベル色。「NEW」「送料無料」等の商品タグ背景。ブランドの核となるブラウン
- **Price Brown** (`#663300`): 価格表示専用のダークブラウン。コーヒーの深煎りを連想
- **Tag Light Blue** (`#e9f1f5`): キーワードタグの背景色。「父の日」「飲み比べ」等のフィルタータグに使用

### CTA / Buttons

- **Primary CTA**: 背景 `#121212` / 文字 `#ffffff` / radius `0` / padding 調整 / font-size 15px / weight 500 / letter-spacing 1px
- **Outline CTA**: 背景 `transparent` / ボーダー `1px solid #000000` / shadow `0 2px 2px rgba(0,0,0,0.25)` / radius `0`
- **Megamenu Item**: ボーダー `1px solid #dfdfdf` / padding `10px 20px`
- **Wishlist**: `#ff4500`（オレンジレッド）— ウィッシュリストのハートアイコン

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Text Primary | `#000000` | 本文テキスト |
| Product Name | `rgba(0,0,0,0.75)` | 商品名（半透明ブラック） |
| Text Secondary | `#290200` | ブランドリンクテキスト（極暗ブラウン） |
| Border | `#dfdfdf` | 区切り線、メガメニューアイテムの枠 |
| Input Border | `#dfdfdf` | 入力欄の枠（radius 5px） |
| Grid Placeholder | `#e0e0e0` | 商品画像読込前のプレースホルダー |
| Background | `#ffffff` | ページ背景 |

### Semantic / Ranking

- **Gold** (`#ffc107`): 人気ランキング No.1 バッジ
- **Silver** (`#9e9e9e`): 人気ランキング No.2 バッジ
- **Bronze** (`#b87333`): 人気ランキング No.3 バッジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ZenKakuGothicNew-Regular**（Zen Kaku Gothic New）を最優先。角の丸いソフトなゴシック体で、クラフト感と親しみやすさを演出
- **フォールバック**: YuGothic → "Hiragino Kaku Gothic Pro" → "Meiryo UI" → Meiryo → sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **ディスプレイ**: **brothers**（Adobe Fonts）— ナビゲーションカテゴリラベル、言語切替（JP/EN）に限定使用
- **本文**: Zen Kaku Gothic New の欧文グリフがそのまま使われる

### 3.3 font-family 指定

```css
/* 本文・見出し */
font-family: ZenKakuGothicNew-Regular, YuGothic, "Hiragino Kaku Gothic Pro", "Meiryo UI", Meiryo, sans-serif;

/* ナビゲーション・ディスプレイ */
font-family: brothers, sans-serif;
```

**フォールバックの考え方**:
- 和文は ZenKakuGothicNew-Regular を先頭に、YuGothic → ヒラギノ角ゴ → メイリオの順でフォールバック
- brothers は Adobe Fonts 限定。ライセンス外では sans-serif にフォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Body | Zen Kaku Gothic New | 14px | 500 | 1.5 | 0.043em (0.6px) | 本文テキスト |
| Announcement (h1) | Zen Kaku Gothic New | 14px | 400 | — | 0.046em (0.65px) | 告知バー |
| Section Heading (h2) | Zen Kaku Gothic New | 13px | 700 | — | 0.05em (0.65px) | セクション見出し |
| Nav Item | Zen Kaku Gothic New | 14–15px | 700 | — | 0.06em (0.9px) | ナビゲーション |
| Nav Category | brothers | 14px | 700 | — | — | カテゴリラベル（bg #c8dce6） |
| Language | brothers | 14px | 700 | — | 0.07em (0.98px) | JP/EN 切替 |
| Price | Zen Kaku Gothic New | 16px | 700 | — | — | 価格（color #663300） |
| Tag | Zen Kaku Gothic New | 10–12px | 400 | — | — | キーワードタグ |
| Button (Solid) | Zen Kaku Gothic New | 15px | 500 | — | 0.067em (1px) | CTA ボタン |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5
- **見出しの行間**: 明示的な指定なし（inherit）
- **本文の字間 (letter-spacing)**: 0.043em（0.6px / 14px）— 和文としてはやや広め
- **見出しの字間**: 0.05em（0.65px / 13px）
- **ナビゲーションの字間**: 0.06em（0.9px / 15px）— かなり広め、ゆったりとした印象

**ガイドライン**:
- 全体的に letter-spacing が広めに設定されており、開放的でクラフト的な印象を生んでいる
- 本文の line-height: 1.5 は日本語としては標準的。EC サイトの商品説明文に適切な値
- weight 500 が本文のベース。700 は見出し・ナビ・価格のみ

### 3.6 禁則処理・改行ルール

```css
/* Shopify テーマのデフォルト設定 */
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

- **palt**: 明示的な指定なし。Zen Kaku Gothic New はプロポーショナルメトリクスを内蔵しており、デフォルトで文字幅が調整される
- **kern**: 明示的な指定なし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（Solid）**
- Background: `#121212`
- Text: `#ffffff`
- Padding: 調整値
- Border Radius: `0px`（`--buttons-radius: 0px`）
- Font Size: 15px
- Font Weight: 500
- Letter Spacing: 1px

**Secondary（Outline）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Box Shadow: `0 2px 2px rgba(0,0,0,0.25)`
- Border Radius: `0px`

**Variant Pill（バリアント選択）**
- Border Radius: `40px`（`--variant-pills-radius: 40px`）
- Pill 型の丸みのある選択ボタン

### Badges

**Product Badge（NEW / 送料無料）**
- Background: `#9d826e`
- Text: `#ffffff`
- Border Radius: `4.0rem`（`--badge-corner-radius`）— pill 型

**Ranking Badge**
- Gold (No.1): `#ffc107`
- Silver (No.2): `#9e9e9e`
- Bronze (No.3): `#b87333`

**Keyword Tag**
- Background: `#e9f1f5`
- Text: `#000000`
- Font Size: 10–12px

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dfdfdf`
- Border Radius: `5px`（`--inputs-radius` は 0px だが実測は 5px）
- Font Size: 14px

### Cards（Product）

- Background: `#ffffff`
- Border: なし（画像 + テキスト構成）
- Image Placeholder: `#e0e0e0`
- Grid Gap: `8px`（デスクトップ）/ `4px`（モバイル）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | モバイルグリッドギャップ |
| S | 8px | デスクトップグリッドギャップ |
| M | 16px | セクション内余白 |
| L | 24px | カード内パディング |
| XL | 32px | セクション間余白 |

### Container

- Max Width: Shopify テーマ依存（標準的な 1200px 前後）

### Grid

- 商品一覧: 4カラム（デスクトップ）/ 2カラム（モバイル）
- Grid Gap: `8px`（デスクトップ）/ `4px`（モバイル）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 通常の商品カード、フラット要素 |
| 1 | `0 2px 2px rgba(0,0,0,0.25)` | アウトラインボタンの shadow |
| 2 | Shopify テーマ依存 | ドロップダウン、メガメニュー |

**特徴**:
- 全体的にフラットなデザイン。商品カードに shadow はなく、ボーダーも最小限
- メガメニューアイテムは `1px solid #dfdfdf` のボーダーで区切る
- ボタンの shadow（`0 2px 2px rgba(0,0,0,0.25)`）が唯一の明示的なエレベーション

---

## 7. Do's and Don'ts

### Do（推奨）

- `#c8dce6`（ソフトブルー）をアクセントとして広い面に使う（フッター、カテゴリナビ）
- `#9d826e`（コーヒーブラウン）はバッジ・ラベルの小面積に限定する
- 価格は必ず `#663300` で表示する
- ボタンは直角（radius: 0）、バッジは pill 型（radius: 4rem）と使い分ける
- Zen Kaku Gothic New の柔らかさを活かし、letter-spacing を 0.04em 以上に設定する
- 商品画像は余白少なめのタイトグリッドで配置する

### Don't（禁止）

- ブランドのブルー `#c8dce6` を CTA ボタンの背景に使わない（CTA は `#121212` の黒系）
- `#9d826e` を本文テキスト色に使わない（バッジ専用）
- ボタンに border-radius を付けない（テーマ設定で 0px）
- 価格を `#000000` で表示しない（必ず `#663300` のブラウン）
- brothers フォントを本文に使わない（ナビゲーション・ディスプレイ専用）
- line-height を 1.5 未満にしない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | モバイルレイアウト |
| Tablet | ≤ 989px | タブレットレイアウト |
| Desktop | > 989px | デスクトップレイアウト（Shopify 標準） |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでも本文 14px を維持（EC サイトのため情報密度を保つ）
- 商品グリッドは 2 カラムに縮小、ギャップは 4px に狭める

### グリッドの変化

- デスクトップ: 4 カラム / gap 8px
- モバイル: 2 カラム / gap 4px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Accent: #c8dce6 (Soft Blue)
Badge Color: #9d826e (Coffee Brown)
Price Color: #663300 (Dark Brown)
CTA Background: #121212
Text Color: #000000
Background: #ffffff
Footer BG: #c8dce6
Font Body: ZenKakuGothicNew-Regular, YuGothic, "Hiragino Kaku Gothic Pro", "Meiryo UI", Meiryo, sans-serif
Font Display: brothers, sans-serif
Body Size: 14px / Weight 500
Line Height: 1.5
Letter Spacing: 0.043em
Button Radius: 0px
Badge Radius: 4.0rem
```

### プロンプト例

```
猿田彦珈琲のデザインシステムに従って、商品一覧ページを作成してください。
- 商品カードは 4 カラムグリッド（gap: 8px）
- フォント: ZenKakuGothicNew-Regular, YuGothic, "Hiragino Kaku Gothic Pro", "Meiryo UI", Meiryo, sans-serif
- 本文: 14px / weight 500 / line-height 1.5 / letter-spacing 0.043em
- 価格: 16px / weight 700 / color #663300
- 「NEW」バッジ: bg #9d826e / color white / border-radius 4rem
- CTA ボタン: bg #121212 / color white / radius 0 / font-size 15px
- カテゴリナビ: bg #c8dce6 / font brothers (sans-serif)
```

### Adobe Fonts 代替

| Original | Substitute (Google Fonts) | 理由 |
|----------|--------------------------|------|
| brothers | Zen Kaku Gothic New (700) | 同じ柔らかいゴシック体の太字で代用。ナビラベルの雰囲気を維持 |
