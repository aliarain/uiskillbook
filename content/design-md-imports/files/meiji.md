# DESIGN.md — Meiji (明治)

> 明治（https://www.meiji.co.jp/）のデザイン仕様書。
> 乳製品・チョコレート・菓子・栄養食品を中心とした総合食品メーカーのコーポレートサイト。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ライトブルーグレー `#edf3f7` の穏やかなサーフェスを基調に、**明治レッド `#d90000` の見出しアクセント**と **マルチカラーのカテゴリ配色**（ブルー・オレンジ・グリーン）で、食と健康のブランドらしい清潔感と信頼感を表現
- **密度**: 全テキスト要素で line-height 1.8 を一貫して適用する**非常に広い行間設計**。letter-spacing 0.06em のゆったりした字送りと合わせ、情報密度よりも読みやすさ・安心感を優先
- **キーワード**: 清潔、健康的、ファミリー向け、明治レッド、広い行間
- **特徴**:
  - 和文フォントに **YakuHanJP + Noto Sans CJK** を採用。YakuHanJP は日本語の約物（括弧・句読点）をプロポーショナル化する専用フォントで、括弧やカンマの余白を詰めて自然な日本語組版を実現
  - **ブランドカラーは `#d90000`（明治レッド）**。CSS 変数 `--primary-color: #f00` と `--text-color2: #d90000` の2段階で定義されている
  - **4色のカテゴリ配色**: 赤 `--primary-color`、ブルー `--accent-color1: #407bbe`、オレンジ `--accent-color2: #ffa24b`、グリーン `--accent-color3: #00ae83` で商品カテゴリや情報領域を分類
  - ページ背景は純白 `#ffffff` ではなく **`#edf3f7`（ライトブルーグレー）**。CSS 変数 `--bg2` がこれに該当。穏やかさ・清潔感の演出
  - テキストの主要色は `#06171f`（ダークネイビー）。純黒 `#000000` ではなく、やわらかい印象
  - ウェイト 200〜300 の**ライトウェイト見出し**を装飾的に使い、700 の太い見出しとの対比で視覚リズムを作る
  - **palt は使用しない**。代わりに YakuHanJP がフォントレベルで約物のプロポーショナル化を処理
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Meiji Red** (`#d90000`): メインのブランドカラー。見出し（"お知らせ" 等）に使用。CSS 変数 `--text-color2`
- **Primary Red** (`#ff0000`): CSS 変数 `--primary-color` に定義された純赤。ブランドの基準色
- **CTA Red** (`#e30200`): Cookie 同意ボタン等のインタラクティブ要素に使用。`#d90000` よりわずかに明るい

### Category Accents（マルチカラー体系）

- **Accent Blue** (`#407bbe`): CSS 変数 `--accent-color1`。カテゴリ分類・情報セクションの識別に使用
- **Accent Orange** (`#ffa24b`): CSS 変数 `--accent-color2`。プロモーション・注目コンテンツの識別
- **Accent Green** (`#00ae83`): CSS 変数 `--accent-color3`。健康・サステナビリティ関連コンテンツ

### Neutral

| Token | hex | CSS 変数 | 役割 |
|-------|-----|----------|------|
| Text Primary | `#06171f` | `--text-color1` | 本文テキスト（ダークネイビー） |
| Text Red | `#d90000` | `--text-color2` | 見出し強調・ブランドテキスト |
| Gray 1 | `#59636b` | `--gray-accent1` | 補助テキスト、日付 |
| Gray 2 | `#7c8a95` | `--gray-accent2` | プレースホルダー、不活性テキスト |
| Gray 3 | `#b7c4ce` | `--gray-accent3` | ボーダー、区切り線 |
| Gray 4 | `#cfdae3` | `--gray-accent4` | 淡いボーダー、背景区切り |
| BG White | `#ffffff` | `--bg1` | ヘッダー、カード面 |
| BG Light Blue-Gray | `#edf3f7` | `--bg2` | ページ背景・セクション面 |
| BG Medium | `#dde5eb` | `--bg3` | ホバー面・アクティブ面 |
| Dark Navy | `#27455c` | — | フッター背景 |
| Near Black | `#06171f` | — | フッター最下部背景 |

### Semantic（推奨値）

実サイトにはエラー／成功状態の明確な色定義は表面化していない。ブランドトーンに合わせた推奨値:

- **Danger**: `#d90000`（ブランドレッドを兼用）
- **Success**: `#00ae83`（Accent Green を兼用）
- **Warning**: `#ffa24b`（Accent Orange を兼用）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **YakuHanJP** を最優先（約物プロポーショナル化専用）→ **Noto Sans CJK**（本文の和文書体）
- **YakuHanJP の役割**: 括弧「」（）や句読点、・の前後に入る半角分の余白を除去し、自然な字詰めを実現する。font-feature-settings の `palt` と同様の効果をフォント自体で達成
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**Noto Sans CJK の欧文グリフ**を使用
- font-family に欧文専用サンセリフ（Helvetica Neue / Arial 等）は含まれない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h5, p, a, span, button, nav） */
font-family: YakuHanJP, "Noto Sans CJK", sans-serif;
```

**フォールバックの考え方**:
- YakuHanJP を先頭に置き、約物（括弧・句読点）のグリフのみを上書きする
- 残りの和文・欧文は Noto Sans CJK で表示
- YakuHanJP がない環境でも Noto Sans CJK で正常に表示される（約物の詰めが効かないだけ）

> **代替フォント注記**: YakuHanJP + Noto Sans CJK はいずれも Web フォントとして CDN 配信可能だが、preview.html や社外資料では **Google Fonts の Noto Sans JP** で代替する。字面の印象はほぼ同等（約物のプロポーショナル化のみ差異）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (Section Title) | Noto Sans CJK | 40px | **700** | 72px (x1.8) | 2.4px (0.06em) | `#000000` | "商品情報" 等のメインセクション |
| Display (Light) | Noto Sans CJK | 40px | **300** | 50px (x1.25) | 0.96px | `#59636b` | 装飾見出し・キャッチ |
| H2 Sub | Noto Sans CJK | 24px | 700 | 43.2px (x1.8) | 0.96px (0.04em) | `#000000` | サブセクション見出し |
| H2 Red | Noto Sans CJK | 16px | 700 | 28.8px (x1.8) | 0.96px (0.06em) | `#d90000` | "お知らせ" 等のブランドカラー見出し |
| H3 Pick-up | Noto Sans CJK | 42px | **200** | 75.6px (x1.8) | 0.96px | `#06171f` | ピックアップ・特集の大見出し |
| H3 Sub | Noto Sans CJK | 18.72px | 700 | 33.696px (x1.8) | 0.96px | `#06171f` | カード内見出し |
| P Lead | Noto Sans CJK | 20px | 400 | 36px (x1.8) | 1.2px (0.06em) | `#000000` | リード文 |
| P Card Title | Noto Sans CJK | 32px | 500 | 40px (x1.25) | 0.96px | `#06171f` | カードタイトル |
| P Copy | Noto Sans CJK | 24px | 500 | 43.2px (x1.8) | 0.96px | `#06171f` | コピーテキスト |
| Body | Noto Sans CJK | 16px | 400 | 28.8px (x**1.8**) | 0.96px (0.06em) | `#06171f` | 本文 |
| Nav | Noto Sans CJK | 15px | 500 | 27px (x1.8) | — | `#06171f` | グローバルナビ |
| Small | Noto Sans CJK | 14px | 400 | 25.2px (x1.8) | — | `#06171f` | 補足テキスト・日付 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.8`（28.8px / 16px）— **明治の最も特徴的なデザインシグネチャー**。全テキスト階層でほぼ統一
- **リード (20px)**: `1.8`（36px / 20px）
- **見出し (24〜42px)**: `1.8`（大見出しでも同じリズムを維持）
- **カードタイトル (32px)**: `1.25`（例外的にタイト）
- **装飾見出し (40px light)**: `1.25`（例外的にタイト）
- **ナビ (15px)**: `1.8`（27px / 15px）
- **小テキスト (14px)**: `1.8`（25.2px / 14px）

**字間 (letter-spacing)** — 実測:
- **本文・見出し共通**: **+0.06em**（0.96px / 16px）。見出しでも同じ値
- **リード (20px)**: +0.06em（1.2px / 20px）
- **サブ見出し (24px)**: +0.04em（0.96px / 24px）

**ガイドライン**:
- 明治の line-height 1.8 は日本語サイトとしても広めの部類。食品・健康ブランドとしての「安心感」「読みやすさ」を最優先した設計
- letter-spacing 0.06em はグローバルに適用。見出しで詰める（負のトラッキング）ことはしない
- ウェイト 200〜300 のライト見出しは装飾用。700 の太い見出しと組み合わせてコントラストを作る

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ナビゲーション項目は `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` は明示的に使用していない
- **YakuHanJP が約物のプロポーショナル化をフォントレベルで処理**するため、`palt` による字詰めは不要
- 明治サイトの「整った約物」は YakuHanJP の効果であり、OpenType 機能ではない

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（レッド）** — Cookie 同意・メイン CTA
- Background: `#e30200`
- Text: `#ffffff`
- Padding: `10px 24px`
- Border Radius: `4px`
- Font: Noto Sans CJK, 16px, weight 500
- Border: none

**Secondary（ボーダー付き）** — ナビゲーション内ボタン
- Background: `#ffffff`
- Text: `#06171f`
- Border: `1px solid #b7c4ce`
- Padding: `10px 16px`
- Border Radius: `4px`
- Font: Noto Sans CJK, 15px, weight 500

**Nav Link（テキストリンク）** — グローバルナビ項目
- Background: transparent
- Text: `#06171f`
- Border: `1px solid #b7c4ce`（ドロップダウンの区切り）
- Font: Noto Sans CJK, 15px, weight 500

**Category Badge** — カテゴリ色付きの小ラベル
- Background: 各カテゴリ色（`#407bbe` / `#ffa24b` / `#00ae83`）
- Text: `#ffffff`
- Padding: `4px 12px`
- Border Radius: `2px`
- Font: Noto Sans CJK, 12px, weight 700

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #b7c4ce`（`--gray-accent3`）
- Border (focus): `2px solid #407bbe`（`--accent-color1`）
- Border Radius: `4px`
- Padding: `10px 16px`
- Font: Noto Sans CJK, 16px, weight 400
- Height: `44px`

### Cards

- Background: `#ffffff`
- Border: `1px solid #cfdae3`（`--gray-accent4`）または border なし
- Border Radius: `8px`
- Padding: `24px`
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.06)`（hover 時）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #cfdae3`
- Position: `fixed top: 0`
- Height: `80px` 程度

### Footer

- Background: `#27455c`（ダークネイビー）→ `#06171f`（最下部）
- Text: `#ffffff`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ラベルと値の間 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px`
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 2px | カテゴリバッジ |
| Medium | 4px | ボタン・入力欄 |
| Large | 8px | カード |
| XL | 12px | モーダル |

### Grid

- 12 カラムグリッド
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | カードホバー |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・ナビメニュー |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ |

- 実測ではフラットなデザインが基本。影は控えめ
- 階層表現は **`#edf3f7` サーフェス**と `#ffffff` カードの色差で実現
- 影を使う場合も**彩度の低い黒**（`rgba(0, 0, 0, 0.06〜0.12)`）で控えめに

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **YakuHanJP → Noto Sans CJK → sans-serif** のフォールバックを指定する
- **line-height は 1.8 を全体の基本リズムにする**（明治の最も特徴的な設計判断）
- letter-spacing は **+0.06em** をグローバルに適用する
- ブランドカラー `#d90000` は見出しの色アクセントとして使い、**赤い背景面としては控えめに**する
- カテゴリ色（ブルー `#407bbe`、オレンジ `#ffa24b`、グリーン `#00ae83`）は**情報の分類**に使い、装飾目的の多用は避ける
- テキスト色は **`#06171f`（ダークネイビー）** を基本にし、純黒は避ける
- サーフェスは **`#edf3f7`** を使い、カードは白 `#ffffff` で浮かせる
- ウェイトの使い分けで視覚的なリズムを作る（200/300 = 装飾見出し、400 = 本文、500 = コピー・ナビ、700 = 強い見出し）

### Don't（禁止）

- **line-height 1.5 以下を使わない**（明治の余白感が完全に崩れる。1.8 が原則）
- **純黒 `#000000` を本文テキストに使わない**（`#06171f` のダークネイビーを使用）
- **pill 形状（border-radius 9999px）のボタンを使わない** — 明治のボタンは角丸 4px が基本
- 見出しに**負のトラッキング**を使わない（明治は見出しも正のトラッキング 0.06em）
- `palt` を CSS で有効にしない（YakuHanJP に任せる）
- ブランドレッド `#d90000` を**広い面（背景全体・ヒーロー面）に使わない** — あくまでテキストアクセント
- 冷たいグレー（`#9ca3af`、`#f3f4f6` 等）は使わない（`--bg2: #edf3f7` はブルーグレー系）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- Display (40px) → 28〜32px
- H2 Sub (24px) → 20px
- 本文サイズは 16px を維持（line-height 1.8 も維持）
- ナビはハンバーガーメニュー化

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- ナビボタン: padding `10px` + font 15px + line-height 1.8 = 約 44px

### フォントサイズの調整

- モバイルでは本文 14〜16px、見出しはデスクトップの 70〜80% 程度に縮小
- line-height 1.8 は端末問わず維持する

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Meiji Red (Brand): #d90000
CTA Red: #e30200
Accent Blue: #407bbe
Accent Orange: #ffa24b
Accent Green: #00ae83
Text Primary (Dark Navy): #06171f
Gray 1 (補助): #59636b
Gray 2 (不活性): #7c8a95
Gray 3 (ボーダー): #b7c4ce
Gray 4 (淡ボーダー): #cfdae3
BG White: #ffffff
BG Light Blue-Gray: #edf3f7
BG Medium: #dde5eb
Footer Dark: #27455c

Font: YakuHanJP, "Noto Sans CJK", sans-serif
（YakuHanJP 不在時の代替: "Noto Sans JP"）

Body Size: 16px / line-height 1.8 / weight 400 / letter-spacing 0.06em
Display: 40px / line-height 1.8 / weight 700 / letter-spacing 0.06em
Display Light: 40px / line-height 1.25 / weight 300
H2 Sub: 24px / line-height 1.8 / weight 700 / letter-spacing 0.04em
Small: 14px / line-height 1.8
Nav: 15px / line-height 1.8 / weight 500

Border Radius: 4px（ボタン）/ 8px（カード）/ 2px（バッジ）
Shadow: 基本 none。階層は #edf3f7 と #ffffff の面色差で表現
```

### CSS Custom Properties

```css
:root {
  --primary-color: #f00;
  --accent-color1: #407bbe;
  --accent-color2: #ffa24b;
  --accent-color3: #00ae83;
  --text-color1: #06171f;
  --text-color2: #d90000;
  --gray-accent1: #59636b;
  --gray-accent2: #7c8a95;
  --gray-accent3: #b7c4ce;
  --gray-accent4: #cfdae3;
  --bg1: #fff;
  --bg2: #edf3f7;
  --bg3: #dde5eb;
}
```

### プロンプト例

```
明治のデザインに従って、商品一覧ページを作成してください。
- フォント: YakuHanJP, "Noto Sans CJK", sans-serif（代替: "Noto Sans JP"）
- 全テキストの line-height は 1.8 を基本にする
- letter-spacing は 0.06em をグローバルに適用
- セクション見出し: 40px / weight 700 / line-height 1.8 / color #000000
- サブ見出し: 24px / weight 700 / line-height 1.8 / letter-spacing 0.04em
- 本文: 16px / weight 400 / line-height 1.8 / letter-spacing 0.06em / color #06171f
- 補助テキスト: 14px / weight 400 / line-height 1.8 / color #59636b
- ページ背景: #edf3f7（ライトブルーグレー）
- カード背景: #ffffff、ボーダー 1px solid #cfdae3、radius 8px
- ブランドカラー見出し: color #d90000（テキストアクセントとして）
- CTA ボタン: 背景 #e30200 / 白文字 / radius 4px / padding 10px 24px
- カテゴリバッジ: 背景 #407bbe or #ffa24b or #00ae83 / 白文字 / radius 2px
- フッター: 背景 #27455c（ダークネイビー）/ 白文字
- 純黒 #000000 は見出しのみ、本文は #06171f
- pill 形状のボタンは使わない（角丸 4px が基本）
```
