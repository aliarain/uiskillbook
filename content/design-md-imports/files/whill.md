# DESIGN.md — WHILL

> WHILL（https://whill.inc/）のデザイン仕様書。
> パーソナルモビリティ（次世代型電動車いす）メーカー。法人・個人向けに移動ソリューションを展開。
> 実サイトの computed style 実測（2026-05-29 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調にした清潔感のあるプロダクトサイト。**WHILL Blue `#0075b8`** のピル CTA が行動を促し、製品写真と余白で「自由な移動」の開放感を伝える
- **密度**: 本文の line-height は 1.4〜1.5、letter-spacing は 0.016em〜0.02em と適度。見出しはタイト（line-height 1.0〜1.1）で製品名を力強く打ち出す。ゆとりのある余白設計
- **キーワード**: クリーン、プロダクトフォーカス、モダンヘルスケア、開放感、ユニバーサル
- **特徴**:
  - **単色ブランド**: メインカラーは `#0075b8`（WHILL Blue）のみ。CTA・リンク・セカンダリ枠すべてこの1色で統一
  - **Noto Sans JP ベース**: Tailwind CSS（Next.js）の font-family 定義で `"Noto Sans JP"` を先頭に、ヒラギノ・メイリオをフォールバック
  - **ピル CTA**: radius `900px` の完全ピル形状がすべての CTA に適用される
  - **テキスト色は温かみのあるニアブラック**: 本文に `#353537`（純黒ではない）を使い、ヘルスケア分野に適したやさしい印象
  - **カードは微細なマルチレイヤーシャドウ**: `rgba(162,164,169)` 系の3段シャドウで、穏やかな浮きを表現
  - **ダークモード非対応**（実測時点）
  - **`word-break: keep-all`** を採用。日本語テキストが単語の途中で折り返さない

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **WHILL Blue** (`#0075b8`): メインのブランドカラー。主要 CTA "試乗体験する"・"お問い合わせ" の背景、セカンダリ CTA の文字色・ボーダー色

### CTA / Buttons

- **Primary CTA**: 背景 `#0075b8` / 文字 `#ffffff` / radius `900px`（pill）/ border `1px solid #0075b8` / padding `14px 32px` / 16〜18px / weight 700
- **Primary CTA (Hero)**: 背景 `#0075b8` / 文字 `#ffffff` / radius `40px` / border `1px solid #0075b8` / padding `0px 32px` / 18px / weight 700
- **Secondary CTA**: 背景 `#ffffff` / 文字 `#0075b8` / border `1px solid #0075b8` / radius `900px`（pill）/ padding `0px 16px` / 16px / weight 700

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Text | `#353537` | (53, 53, 55) | 本文テキスト（ウォームニアブラック） |
| Near Black | `#252525` | (37, 37, 37) | フッター・ダークセクション背景 |
| Muted Blue-Gray | `#b7c2cd` | (183, 194, 205) | 装飾・無効状態 |
| Light Gray Surface | `#fafafa` | (250, 250, 250) | カード・セクション背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。ヘルスケア SaaS 向けに推奨する補完値:

- **Danger**: `#dc2626` 程度のレッド
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先。Google Fonts 配信
- **フォールバック**: `"Hiragino Kaku Gothic ProN"` → `Meiryo` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**Noto Sans JP の欧文グリフ** と Tailwind のシステムフォントスタック（`ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial`）をフォールバック
- セリフ・等幅は使用しない

### 3.3 font-family 指定

```css
/* 見出し・プロダクト名 */
font-family: "Noto Sans JP", sans-serif, "Hiragino Kaku Gothic ProN", Meiryo, "sans-serif";

/* body（Tailwind デフォルト + Noto Sans JP） */
font-family: ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

**フォールバックの考え方**:
- 見出し・製品名は **Noto Sans JP を最優先**し、日本語の字面を安定させる
- body はTailwindのデフォルトスタックが先に来るが、日本語グリフは Noto Sans JP から供給される
- Google Fonts 配信のため、環境依存が少ない

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／製品ページ、2026-05-29 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Noto Sans JP | 48px | **600** | 52.8px (x1.1) | 0.96px (0.02em) | `#353537` | ヒーロータイトル |
| Model Name H2 | Noto Sans JP | 48px | **700** | 48px (x1.0) | 0.96px (0.02em) | `#353537` | 製品モデル名（Model C2 等） |
| Section Subtitle H2 | Noto Sans JP | 20px | 400 | 26px (x1.3) | 0.4px (0.02em) | `#353537` | セクションサブタイトル |
| Label H2 | Noto Sans JP | 20px | **700** | 20px (x1.0) | 0.4px (0.02em) | `#353537` | カテゴリラベル |
| H3 | Noto Sans JP | 14px | 400 | 14px (x1.0) | 0.28px (0.02em) | `#353537` | モデル日本語名 |
| P Large | Noto Sans JP | 24px | **700** | 28px (x1.17) | 0.4px | `#353537` | CTA 見出しテキスト |
| Body | Noto Sans JP | 20px | 400 | 28px (x**1.4**) | 0.32px (0.016em) | `#353537` | 本文 |
| Body Default | Noto Sans JP | 16px | 400 | 24px (x**1.5**) | 0.32px (0.02em) | `#353537` | ベース本文 |
| Nav Link | Noto Sans JP | 16px | 400 | 24px (x1.5) | 0.32px (0.02em) | `#353537` | ナビゲーション |
| Small | Noto Sans JP | 13px | **700** | 18.2px (x1.4) | 0.26px (0.02em) | `#353537` | お問い合わせ情報・注釈 |

### 3.5 行間・字間

**行間 (line-height)** --- 実測:
- **本文 (20px)**: `1.4`（28px / 20px）
- **ベース (16px)**: `1.5`（24px / 16px）
- **注釈 (13px)**: `1.4`（18.2px / 13px）
- **ヒーロー見出し (48px)**: `1.1`（52.8px / 48px）--- タイト
- **モデル名 (48px)**: `1.0`（48px / 48px）--- 最タイト
- **ラベル・サブタイトル (20px)**: `1.0〜1.3`

**字間 (letter-spacing)** --- 実測:
- **全テキスト共通**: **正のトラッキング** `0.02em` が基本（0.016em〜0.02em）
- 見出しも本文も同じ正のトラッキングで統一されている（STORES のような見出しの負トラッキングはない）

**ガイドライン**:
- WHILL は **全テキストに一貫して +0.02em のトラッキング** を適用。見出しと本文の差は line-height と weight で表現する
- 本文 line-height は 1.4〜1.5。ゆったりすぎず、ヘルスケア製品の信頼感と読みやすさのバランスを取る

### 3.6 禁則処理・改行ルール

```css
/* 実サイト準拠 */
word-break: keep-all;          /* 単語の途中で折り返さない */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
```

- `keep-all` により日本語テキストが助詞の途中等で改行されない（読みやすさ重視）
- ヒーロー見出しは `<br>` で改行位置を手動指定

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Noto Sans JP のデフォルトメトリクスに任せ、letter-spacing で見た目を調整する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ブルーピル）** --- "試乗体験する"・"お問い合わせ"
- Background: `#0075b8`
- Text: `#ffffff`
- Padding: `14px 32px`
- Border: `1px solid #0075b8`
- Border Radius: `900px`（完全ピル）
- Font: Noto Sans JP, 16〜18px, weight 700
- Hover: opacity 0.85（推奨）

**Primary CTA（ヒーロー版）**
- Background: `#0075b8`
- Text: `#ffffff`
- Padding: `0px 32px`（高さは line-height で確保）
- Border: `1px solid #0075b8`
- Border Radius: `40px`
- Font: Noto Sans JP, 18px, weight 700

**Secondary CTA（白ピル＋ブルー文字）** --- "詳しく見る"
- Background: `#ffffff`
- Text: `#0075b8`
- Border: `1px solid #0075b8`
- Padding: `0px 16px`
- Border Radius: `900px`（完全ピル）
- Font: Noto Sans JP, 16px, weight 700

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #b7c2cd`
- Border (focus): `1px solid #0075b8`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font: Noto Sans JP, 16px, weight 400
- Height: `48px`

### Cards / Surfaces

- Background: `#ffffff`
- Border: なし
- Border Radius: `4px`
- Shadow: `rgba(162,164,169,0.05) 0px 10px 23px, rgba(162,164,169,0.04) 0px 41px 41px, rgba(162,164,169,0.03) 0px 93px 56px`（3層の微細シャドウ）
- Padding: `24px`

### Header

- Background: `#ffffff`（白）
- Border Bottom: なし
- Position: `fixed top: 0`
- Logo + ナビリンク + CTA の水平レイアウト

### Footer

- Background: `#252525`（ニアブラック）
- Text: `#ffffff`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1280px`（Tailwind xl breakpoint）
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | カード |
| Medium | 8px | 入力欄 |
| Large | 40px | ヒーロー CTA |
| Pill | 900px | 標準 CTA・バッジ |

### Grid

- Flexbox ベースのレイアウト（Tailwind CSS）
- 製品カードは 2〜3 列構成
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | フラットな要素 |
| 1 | `rgba(162,164,169,0.05) 0px 10px 23px, rgba(162,164,169,0.04) 0px 41px 41px, rgba(162,164,169,0.03) 0px 93px 56px` | 製品カード（穏やかな3層シャドウ） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではカードに3段のマルチレイヤーシャドウが適用されている
- `rgba(162,164,169,...)` 系の青みのあるグレーで、WHILL Blue と親和性のある穏やかな影

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **Noto Sans JP を最優先**、フォールバックは Hiragino Kaku Gothic ProN → Meiryo → sans-serif
- 本文の line-height は **1.4〜1.5** を基本にする
- letter-spacing は **全テキスト共通で +0.02em** を適用する
- 主要 CTA は **`#0075b8` のブルーピル**（radius `900px`）、セカンダリは **白＋ブルー文字＋ブルーボーダー** のピル
- テキスト色は **`#353537`**（ウォームニアブラック）を使い、純黒 `#000000` を避ける
- カードには **3層マルチレイヤーシャドウ** を使い、穏やかな浮き上がりを表現する
- `word-break: keep-all` で日本語の折り返しを自然にする

### Don't（禁止）

- 主要 CTA に **黒や赤を使わない** --- WHILL の CTA は常に `#0075b8` のブルー
- テキストに **純黒 `#000000` を使わない**（`#353537` を使う）
- **角張った直角ボタン**（border-radius 0）や **小角丸（4〜8px）の CTA** を使わない --- ピル `900px` が基本
- 本文に **line-height: 1.2 以下** を使わない（可読性が著しく低下する）
- 見出しに **負の letter-spacing** を使わない（WHILL は見出しも正のトラッキング）
- 派手な装飾色やグラデーションを使わない（単色ブランドの統一感を壊す）
- `word-break: break-all` を使わない（`keep-all` が基本方針）

---

## 8. Responsive Behavior

### Breakpoints（Tailwind 互換）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ（モバイルナビ分岐点） |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- ヒーロー H1: 48px → 28〜32px
- モデル名 H2: 48px → 32〜36px
- 本文サイズは 16px を維持（line-height も 1.5 維持）
- 製品カードは 1 列に切り替え

### タッチターゲット

- 主要 CTA: 高さ 48px 以上（padding `14px 32px` + font で確保）
- 最小タップ領域: 44px x 44px（WCAG 基準）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
WHILL Blue (CTA): #0075b8
Dark Text: #353537
Near Black (Footer): #252525
Muted Blue-Gray (Disabled): #b7c2cd
Light Gray Surface: #fafafa
White (Background): #ffffff

Font (heading): "Noto Sans JP", sans-serif, "Hiragino Kaku Gothic ProN", Meiryo, "sans-serif"
Font (body): ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif

Body Size: 16px / line-height 1.5 / weight 400 / letter-spacing 0.02em
Large Body: 20px / line-height 1.4 / weight 400 / letter-spacing 0.016em
Hero H1: 48px / line-height 1.1 / weight 600 / letter-spacing 0.02em
Model Name: 48px / line-height 1.0 / weight 700 / letter-spacing 0.02em
Small: 13px / line-height 1.4 / weight 700 / letter-spacing 0.02em

Border Radius: 4px（カード）／8px（入力欄）／900px（CTA ピル）
Shadow (Card): rgba(162,164,169,0.05) 0px 10px 23px, rgba(162,164,169,0.04) 0px 41px 41px, rgba(162,164,169,0.03) 0px 93px 56px
```

### プロンプト例

```
WHILL のデザインに従って、パーソナルモビリティの製品一覧ページを作成してください。
- フォント: "Noto Sans JP", sans-serif, "Hiragino Kaku Gothic ProN", Meiryo, "sans-serif"
- セクション見出し: 48px / weight 700 / line-height 1.0 / letter-spacing 0.02em / color #353537
- 本文: 16px / weight 400 / line-height 1.5 / letter-spacing 0.02em / color #353537
- 主要 CTA: 背景 #0075b8 / 白文字 / border-radius 900px / padding 14px 32px / 16px / weight 700
- セカンダリ CTA: 背景 白 / 文字 #0075b8 / border 1px solid #0075b8 / radius 900px / padding 0 16px
- カード: 背景 白 / radius 4px / shadow 3層（rgba(162,164,169) 系）
- フッター: 背景 #252525（ニアブラック）/ 白文字
- テキスト色は #353537（純黒を使わない）
- word-break: keep-all
- ピル CTA 以外の角丸ボタンは使わない
```
