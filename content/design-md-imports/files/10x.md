# DESIGN.md — 10X（テンエックス）

> 株式会社10X（https://10x.co.jp/）のコーポレートサイトのデザイン仕様書。
> 小売チェーン向けEC・OMOプラットフォーム「Stailer」を提供するSaaS企業。
> 「10xプロダクトを、世界中の人々に届ける。」をミッションに掲げる。
> 実サイトの computed style 実測（2026-06-24 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白地に**極太の日本語見出し**を大きく置く、クリーンでミニマルなコーポレート・デザイン。和文は **Noto Sans JP**、英字ラベル・ボタン・数値は **Lexend** という**2書体の使い分け**が骨格。余白を広くとり、淡いグレーのドット／点描イラストで軽やかさを出す
- **10X について**: 小売の現場をテクノロジーで変えるSaaS企業。BtoB だが堅すぎず、**大きな見出し × 広い行間**で力強さと読みやすさを両立する。ヒーローは 96px の極太見出し
- **密度**: 低〜中密度。1セクション1メッセージで、見出しを主役にする。本文の line-height は 2.0〜2.3 と広い
- **キーワード**: クリーン、ミニマル、極太見出し、白地、Lexend、淡いグレー点描、pill ボタン、グレースケール＋淡いアクセント
- **特徴**:
  - 和文＝**Noto Sans JP**、欧文ラベル・CTA・日付＝**Lexend**（幾何学サンセリフ）。**英字は必ず Lexend** に乗せる
  - 基調は**ほぼグレースケール**（テキスト `#222222` / 白 `#ffffff` / 淡グレー `#f7f7f7`・`#d9d9d9`）。フィーチャー・フッターは `#222222` のダーク面に反転
  - **淡いアクセント2色**: 会社情報導線に**ソフトブルー `#62a2cb`**、プロダクト導線に**ソフトグリーン `#89d393`**。彩度を抑えた優しい色で、面ではなく小さな pill CTA に使う
  - CTA は **pill（radius 32px）**。塗りの小ボタンと、`2px` ボーダーのアウトライン大ボタンの2系統
  - 見出し・ラベルには **letter-spacing 0.04〜0.05em** を効かせる（本文は normal）
  - ダークモード非対応（実測時点。ただしダーク反転セクションが構造的に存在する）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。基調はグレースケール＋淡い2アクセント。

### Brand / Core

- **Text Primary** (`#222222`): 見出し・本文・ロゴの主要テキスト（白地）
- **Background (Main)** (`#ffffff`): ページ背景・メインキャンバス
- **Dark Surface** (`#222222`): フィーチャー／フッター等の反転面（白テキストを乗せる）

### Accent（淡い2色）

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Soft Blue | `#62a2cb` | (98, 162, 203) | 会社情報（COMPANY）への導線 pill CTA |
| Soft Green | `#89d393` | (137, 211, 147) | プロダクト（PRODUCT）への導線 pill CTA |

- アクセントは**小さな pill ボタンのみ**に使い、大きな面塗りには使わない（白×グレーの清潔感を保つ）

### Neutral / Surface

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Off White | `#f7f7f7` | (247, 247, 247) | セクション地・カード背景・薄い面 |
| Light Grey | `#d9d9d9` | (217, 217, 217) | 罫線・区切り・淡い面・点描の地 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ダーク面上のテキスト |

### Semantic（推奨値）

実サイトに明確なエラー／成功色は確認されなかった。グレースケールのトーンを崩さない範囲で推奨する補完値:

- **Danger**: `#d64545`（彩度を抑えたレッド）
- **Success**: `#89d393`（ブランドのソフトグリーンを流用）
- **Link Hover**: `#62a2cb`（ソフトブルー）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **Noto Sans JP**（Google Fonts）。weight 400 / 500 / 700 を使う。見出しは 700、本文は 500、注釈は 400
- **明朝体**: 使用しない（全面ゴシック）
- **約物処理**: 特別な半角詰めフォントは未使用。`font-feature-settings: normal`（palt 非適用）

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **Lexend**（Google Fonts）。幾何学的で可読性研究に基づくサンセリフ。weight 400 / 500 / 600 / 700。**英字ラベル・CTA・日付・英字見出しは必ず Lexend**
- Lexend / Noto Sans JP はいずれも Google Fonts で配信されるため、**preview.html でも実フォントを再現できる**（代替フォント注記は不要）

### 3.3 font-family 指定

```css
/* 和文主体のテキスト */
font-family: "Noto Sans JP", sans-serif;

/* 英字ラベル・CTA・日付・英字見出し */
font-family: Lexend, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- 英字を含むラベル・ボタンは **Lexend** を先頭に置き、和文が混じった場合のみ **Noto Sans JP** が拾う
- 純和文の見出し・本文は **Noto Sans JP** 単独
- 未読み込み時は `sans-serif` に落ちる

> **代替フォント注記は不要**: Lexend・Noto Sans JP は Google Fonts で配信されているため、preview.html では実フォントをそのまま読み込む。
> ```
> https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap
> ```

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-24 取得）。**極太の日本語ヒーロー（96px / 700）が核心**。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Noto Sans JP | 96px | 700 | 1.5 (144px) | 0.05em (4.8px) | `#222222` | 巨大な日本語メッセージ |
| Section H2 (dark) | Noto Sans JP | 44px | 700 | 1.63 (71.72px) | 0.04em (1.76px) | `#ffffff`（ダーク面） | ダークセクション大見出し |
| Lead / Statement | Noto Sans JP | 30px | 700 | 1.56 (46.8px) | normal | `#222222` | リード文・宣言文 |
| Sub-lead | Noto Sans JP | 21px | 700 | 2.16 (45.36px) | 0.02em (0.42px) | `#222222` | 中見出し・強調本文 |
| Eyebrow (英字) | Lexend | 24px | 400〜500 | 1.0 (24px) | 0.04em (0.96px) | `#222222` / `#ffffff` | "PRODUCT" "RECRUIT" 等のラベル |
| Body | Noto Sans JP | 16px | 500 | 2.25 (36px) | 0.01em (0.16px) | `#222222` | 標準本文。非常にエアリー |
| Date / Meta (英字) | Lexend | 18px | 500 | 1.0 | 0.04em (0.72px) | `#222222` | 日付・メタ |
| Tag / Caption | Noto Sans JP | 12px | 700 | 1.0 | normal | `#222222` | カテゴリタグ・キャプション |
| CTA Label (英字) | Lexend | 18px | 600 | 1.0 | 0.04em (0.72px) | `#222222` / `#ffffff` | "VIEW COMPANY" 等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `2.25`（非常に広い）
- **強調本文 (21px)**: `2.16`
- **リード (30px)**: `1.56`
- **ヒーロー H1 (96px)**: `1.5`
- **英字ラベル・CTA**: `1.0`（タイト）

**字間 (letter-spacing)** — 実測:
- **見出し・ラベル・CTA**: `0.04〜0.05em`（英字 Lexend／大型和文見出しに付与）
- **本文 (16px)**: `0.01em`（ごく僅か）
- **リード (30px)**: `normal`

**ガイドライン**:
- **英字は Lexend ＋ letter-spacing 0.04em** をセットで使う（10X らしさの核）
- 和文本文の line-height は **2.0〜2.3** と広く保つ（余白の効いたトーン）
- 巨大ヒーロー見出しは weight 700 ＋ letter-spacing 0.05em で堂々と組む

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 巨大見出しは意図的な改行（`<br>`）で2〜3行に割り、行頭を揃える
- 英字ラベル（"VIEW COMPANY" 等）は `white-space: nowrap` で改行させない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測でも `palt` 等は未採用。Noto Sans JP / Lexend のメトリクスをそのまま使う

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

> 実測値＋それに整合する推奨セット。CTA は **pill（radius 32px）** が基本。

### Buttons / CTA

**Small Pill CTA（実測）** — "VIEW COMPANY" / "VIEW PRODUCT"
- Background: `#62a2cb`（会社情報）/ `#89d393`（プロダクト）
- Text: `#222222`（Lexend 18px / weight 600 / letter-spacing 0.04em）
- Border: なし
- Border Radius: `32px`（pill）
- アイコン＋英字ラベルの小さな導線ボタン

**Outline Pill Button（実測）** — "VIEW ALL"
- Background: `transparent`
- Text: `#222222`（Lexend 18px / weight 600）
- Border: `2px solid #222222`
- Border Radius: `32px`（pill）
- Padding: `12px 64px`
- 一覧導線・セカンダリ。横に長い pill

**Dark CTA（推奨・反転面）** — "JOIN OUR TEAM" / "CONTACT US"
- Background: `#222222`
- Text: `#ffffff`（Lexend / weight 500〜600）
- Border Radius: `32px`
- Padding: `12px 48px`
- ダーク面では白テキストの塗り pill、または白ボーダーのアウトライン pill

### Inputs

**Text Input（推奨）**
- Background: `#ffffff` / `#f7f7f7`
- Border: `1px solid #d9d9d9`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font: Noto Sans JP 16px / weight 400
- Focus: border `#62a2cb` + ring `0 0 0 3px rgba(98,162,203,0.25)`

### Cards / Surfaces

**News / Article Card（推奨）**
- Background: `#ffffff`（または `#f7f7f7`）
- Border: なし／`1px solid #d9d9d9`
- Border Radius: `8px`
- 日付（Lexend 18px）＋ カテゴリタグ（12px / weight 700）＋ タイトル（Noto Sans JP 18px / weight 700）
- 影は使わず、罫線か面色で区切る

**Dark Feature Section（反転）**
- Background: `#222222`
- 見出し: `#ffffff`（Noto Sans JP 44px / weight 700）、英字ラベル: Lexend `#ffffff`
- 白テキスト＋淡い点描で奥行きを出す

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド／余白多め）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ラベル内側・アイコン間 |
| S | 8px | 小要素間 |
| M | 16px | 要素間・テキストブロック間 |
| L | 32px | カード内余白・ブロック間 |
| XL | 64px | セクション内の縦区切り |
| XXL | 120px | セクション間の大きな縦余白 |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `20px` / desktop `40〜80px`
- 中央寄せ。見出しを大きく、本文ブロックは幅を絞る（読みやすさ重視）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| MD | 8px | カード・入力・小さな面 |
| Pill | 32px | ボタン・CTA・タグ |
| Round | 100% | アイコン・丸ボタン（検索等） |

- **ボタンは pill（32px）が基本**。カード・入力は 8px

### Grid

- Columns: 推奨 12 カラム
- Gutter: 24〜32px
- ニュースカード: 3列（desktop）→ 2列（tablet）→ 1列（mobile）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 基本（フラット） |
| 1 | `0 2px 8px rgba(0,0,0,0.06)` | カードの hover（推奨） |
| 2 | `0 8px 24px rgba(0,0,0,0.10)` | モーダル・ポップオーバー（推奨） |

- 実サイトは**ほぼフラット**。奥行きは白 ↔ ダーク面（`#222222`）のコントラストと淡いグレー面（`#f7f7f7`）で出す
- 影は hover・浮遊要素に限定して薄く使う

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **`"Noto Sans JP", sans-serif`**、英字ラベル・CTA・日付は **`Lexend, "Noto Sans JP", sans-serif`** に乗せる
- **英字には letter-spacing 0.04em** をセットで効かせる
- ヒーロー見出しは **Noto Sans JP 700 を大きく**（〜96px）置き、意図的な改行で2〜3行に割る
- 本文の line-height は **2.0〜2.3** と広く保つ
- 基調は**グレースケール**（`#222222` / `#ffffff` / `#f7f7f7` / `#d9d9d9`）。フィーチャー・フッターは `#222222` に反転
- アクセントは**ソフトブルー `#62a2cb`／ソフトグリーン `#89d393`** を**小さな pill CTA だけ**に使う
- ボタンは **pill（radius 32px）**。塗りの小ボタンと 2px ボーダーのアウトライン大ボタンを使い分ける

### Don't（禁止）

- 英字ラベル・CTA に **Noto Sans JP を使わない**（必ず Lexend）
- アクセント色（ブルー／グリーン）を**大きな面に塗らない**（清潔感を壊す）
- **彩度の高いビビッドな色**を持ち込まない（淡いトーンを保つ）
- ボタンを**角丸 4〜8px の角ばった形にしない**（pill 32px が基本）
- 本文に **line-height 1.5 以下**を使わない（詰まりすぎ）
- 影を**多用しない**（フラット基調。奥行きは面コントラストで）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム |
| Tablet | 768px〜1023px | タブレット。2カラム |
| Desktop | ≥ 1024px | デスクトップ。3カラム |

### モバイル時の調整

- Hero H1: 96px → 40〜48px（weight 700・letter-spacing 0.05em は維持）
- Section H2: 44px → 28〜32px
- Lead: 30px → 22px
- 本文 16px・line-height 2.25 は維持（詰める場合のみ 2.0）
- ニュースカード: 3列 → 1列
- アウトライン pill の padding `12px 64px` → `12px 32px`

### タッチターゲット

- pill CTA: 高さ 44px 以上（padding `12px` 前後）
- ナビリンク: クリック領域 44px 高さを確保

### ダークモード

- 該当なし（実測時点で未対応。ダーク反転セクションは `#222222` で構造的に存在）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #222222
Background (Main): #ffffff
Dark Surface: #222222

Accent (Company): #62a2cb（ソフトブルー）
Accent (Product): #89d393（ソフトグリーン）

Off White (surface): #f7f7f7
Light Grey (line): #d9d9d9
White: #ffffff

和文 Font: "Noto Sans JP", sans-serif
英字ラベル・CTA・日付 Font: Lexend, "Noto Sans JP", sans-serif
Google Fonts: Lexend wght@400;500;600;700 / Noto Sans JP wght@400;500;700

Hero H1: Noto Sans JP 96px / weight 700 / line-height 1.5 / letter-spacing 0.05em / #222222
Section H2 (dark): Noto Sans JP 44px / weight 700 / line-height 1.63 / letter-spacing 0.04em / #ffffff
Lead: Noto Sans JP 30px / weight 700 / line-height 1.56 / normal
Eyebrow (英字): Lexend 24px / weight 400-500 / letter-spacing 0.04em
Body: Noto Sans JP 16px / weight 500 / line-height 2.25 / letter-spacing 0.01em / #222222
CTA Label (英字): Lexend 18px / weight 600 / letter-spacing 0.04em

Small Pill CTA: bg #62a2cb or #89d393 / text #222 / radius 32px
Outline Pill: transparent / border 2px #222 / radius 32px / padding 12px 64px
Dark CTA: bg #222 / text #fff / radius 32px
Radius: card/input 8px, button pill 32px, icon 100%
Shadow: none（フラット基調。奥行きは白/ダーク面のコントラストで）
```

### プロンプト例

```
株式会社10X のデザインシステムに従って、小売SaaSのコーポレートセクションを作成してください。
- 和文フォント: "Noto Sans JP", sans-serif（Google Fonts を読み込む）
- 英字ラベル・CTA・日付フォント: Lexend, "Noto Sans JP", sans-serif（英字は必ず Lexend に乗せる）
- ヒーロー見出し H1: Noto Sans JP 96px / weight 700 / line-height 1.5 / letter-spacing 0.05em / color #222222
  （意図的な改行で2〜3行に割り、行頭を揃える）
- 英字ラベル（eyebrow）: Lexend 24px / weight 400-500 / letter-spacing 0.04em
- 本文: Noto Sans JP 16px / weight 500 / line-height 2.25 / letter-spacing 0.01em / color #222222
- 基調はグレースケール（テキスト #222222・白 #ffffff・淡グレー #f7f7f7 / #d9d9d9）
- フィーチャー／フッターは #222222 のダーク面に反転し、白テキストを乗せる
- アクセントはソフトブルー #62a2cb（会社情報導線）とソフトグリーン #89d393（プロダクト導線）を、
  小さな pill CTA だけに使う（大きな面塗りには使わない）
- CTA は pill（radius 32px）。塗りの小ボタンと、2px ボーダーのアウトライン大ボタン（padding 12px 64px）を使い分ける
- カード・入力は radius 8px。本文の line-height は 2.0〜2.3 と広く保つ
- box-shadow は基本使わない（フラット。奥行きは白とダーク面のコントラストで）
```
