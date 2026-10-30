# DESIGN.md — SHARP（シャープ）

> SHARP（https://jp.sharp/）のデザイン仕様書。
> 「ネイチャーテクノロジー」を掲げる総合家電メーカーのコーポレートサイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ライトテーマ基調**（`#f5f5f5` 面 + `#000000` テキスト）で、清潔感と誠実さを体現。製品写真をヒーローに大胆に使い、ダークオーバーレイ（`rgba(0,0,0,0.6)`）で可読性を確保。ブランドカラーのシャープレッド（`#e6000d`）を要所で使い、差し色として機能させる
- **密度**: 製品カテゴリはカードグリッドで整然と並べ、情報密度を中程度に保つ。本文ウェイトが 300（Light）と細めで、全体的に軽やかでクリーンな印象
- **キーワード**: クリーン＆ライト、Noto Sans JP 単独、シャープレッドの差し色、製品写真主体、ネイチャーテクノロジー
- **特徴**:
  - フォントに **Noto Sans JP** のみを使用（カスタムWebフォントなし）。body ウェイトが **300（Light）** と、家電メーカーとしては細めの設定が特徴的
  - ブランドアクセントの **SHARP Red `#e6000d`** は使用頻度を絞り、ナビゲーションやバッジの強調に留める
  - **AQUOS Blue `#4d7cfa`** はAQUOS（テレビ）製品ラインのサブブランドカラー
  - ヒーローは製品・自然写真の上に `rgba(0,0,0,0.6)` のオーバーレイを重ね、白テキストを載せる
  - 全タイポグラフィの `line-height` が一律 **×1.5** で統一されており、計算しやすい設計
  - COCORO サービス（クラウド連携）の存在感が大きく、ストアや会員訴求への導線を随所に配置

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **SHARP Red** (`#e6000d`): ブランドのプライマリアクセント。ナビゲーション強調、バッジ、注目要素に使用。出現頻度は 5〜6 回と絞り込まれており、差し色として機能する
- **AQUOS Blue** (`#4d7cfa`): AQUOSテレビ製品ラインのサブブランドカラー。5 回程度出現。製品カード・バナーのアクセントに使用
- **Text Primary** (`#000000`): 全テキストの基調色。サイト全体に一貫して使用

### Surface / Background

- **Surface Light** (`#f5f5f5`): ページの主要な面背景色。22 回と最多出現。カード、カテゴリボタン、製品サムネイル背景に使用
- **Surface White** (`rgba(255,255,255,0.9)`): 半透明白のオーバーレイ。製品情報パネル等に使用
- **Surface Border** (`#e6e6e6`): カードや区切り線のボーダー色

### Overlay

- **Overlay Dark** (`rgba(0,0,0,0.6)`): ヒーロー画像上のテキスト可読性を確保するダークオーバーレイ。11 回出現
- **Overlay Light** (`rgba(0,0,0,0.1)`): 軽い影・ホバー表現に使用。4 回出現
- **Video Overlay** (`rgba(43,51,63,0.7)`): 動画プレーヤーコントロールの背景

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Text Primary | `#000000` | 全テキスト |
| Surface Light | `#f5f5f5` | 面背景、カード背景 |
| Surface Border | `#e6e6e6` | 区切り線、枠線 |
| White | `#ffffff` | テキスト（ダーク背景上）、ボタン文字 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** のみ。カスタム Web フォントは使用せず、Google Fonts の Noto Sans JP 1 種で統一
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP に内包される欧文グリフを使用（専用欧文フォントは指定なし）
- **フォールバック**: `sans-serif`

### 3.3 font-family 指定

```css
/* サイト全体 */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP が読み込まれない環境ではシステムの `sans-serif` にフォールバック
- 専用の欧文フォントは指定しておらず、Noto Sans JP の欧文グリフが使われる
- Adobe Fonts 等のライセンス制限フォントは使用していないため、preview.html でも同じフォントを使用可能

> **代替フォント注記**: Noto Sans JP はオープンライセンスのため、外部環境でもそのまま利用可。weight 300 / 400 / 500 / 700 を Google Fonts から読み込む。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Noto Sans JP | 40px | **700** | 60px (×1.5) | normal | `#000000` | "シャープの製品を見る" |
| Section H2 Large | Noto Sans JP | 36px | **700** | 54px (×1.5) | normal | `#000000` | ネイチャーテクノロジータグライン |
| Section H2 Medium | Noto Sans JP | 28px | **700** | 42px (×1.5) | normal | `#000000` | "家電とクラウドのAI…" |
| Section H2 Standard | Noto Sans JP | 24px | **700** | 36px (×1.5) | normal | `#000000` | カテゴリ・サポートタイトル |
| Section H2 Sub | Noto Sans JP | 24px | 500 | 36px (×1.5) | normal | `#000000` | セクションサブタイトル |
| Section H2 Small | Noto Sans JP | 16px | 500 | 24px (×1.5) | normal | `#000000` | サブセクションテキスト |
| Body | Noto Sans JP | 16px | **300** | 24px (×1.5) | normal | `#000000` | 全ページの基本本文 |
| Body Small | Noto Sans JP | 14px | 300–400 | 19.6–21px (×1.4–1.5) | normal | `#000000` | 説明文、補足テキスト |
| Link Text | Noto Sans JP | 14px | 400 | 21px (×1.5) | normal | `#000000` | "詳しく見る" など誘導リンク |
| Nav Primary | Noto Sans JP | 15px | 300–400 | 22.5px (×1.5) | normal | `#000000` | グローバルナビゲーション |
| Nav Secondary | Noto Sans JP | 12px | 400 | 18px (×1.5) | normal | `#000000` | ナビゲーション補助テキスト |
| NEW Badge | Noto Sans JP | 12px | **700** | 18px (×1.5) | normal | `#ffffff` | 新製品バッジ（背景は SHARP Red） |
| Brand Callout | Noto Sans JP | 40px | **700** | 60px (×1.5) | normal | `#000000` | COCORO STORE 等のブランド強調 |

### 3.5 行間・字間

- **全体の行間 (line-height)**: **×1.5 で統一**（H1〜ナビゲーション・バッジまで全レベル共通）
- **本文の字間 (letter-spacing)**: `normal`（0）— 字間指定なし
- **見出しの字間**: `normal`（0）— 字間指定なし

**ガイドライン**:
- `line-height: 1.5` をサイト全体で統一することで、グリッドの整合性が保たれている
- 字間（`letter-spacing`）は指定しない（Noto Sans JP のデフォルトカーニングに委ねる）
- body の `font-weight: 300` は非常に細く、過度に小さいサイズでの使用は可読性に注意

### 3.6 禁則処理・改行ルール

```css
/* サイト実測より */
word-break: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

実サイトにて `palt`（プロポーショナル字詰め）の明示的な指定は確認されていない。Noto Sans JP のデフォルト設定を使用。

```css
/* 指定なし（ブラウザデフォルト） */
```

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Category Button（カテゴリ選択）**
- Background: `#f5f5f5`
- Text: `#000000`
- Border Radius: 10px
- Font Size: 14–16px
- Font Weight: 400
- 例: "AV機器"、"空調家電"

**Product Category Card（製品カテゴリカード）**
- Background: `#f5f5f5`
- Text: `#000000`
- Border Radius: 20px（大きめの角丸でソフトな印象）
- 製品カテゴリ一覧のナビゲーションカード

**Primary CTA（主要行動喚起）**
- Background: `#000000`
- Text: `#ffffff`
- Border Radius: 5px
- 例: "TVCMを見る"

**Video Play Button（動画再生）**
- Background: `rgba(43,51,63,0.7)`
- Text / Icon: `#ffffff`
- Border Radius: 9px

**NEW Badge（新製品バッジ）**
- Background: `#e6000d`（SHARP Red）
- Text: `#ffffff`
- Font Size: 12px
- Font Weight: 700
- Border Radius: 2–4px

### Cards

- Background: `#f5f5f5`
- Border: none（ボーダーなしで面色で区切る）
- Border Radius: 20px（製品カテゴリカード）/ 10px（カテゴリボタン）
- テキスト色: `#000000`
- ヒーロー上のカード: `rgba(0,0,0,0.6)` オーバーレイ + `#ffffff` テキスト

### Navigation

- Background: `#ffffff`（ヘッダー背景）
- Logo: SHARP ロゴ（ブランドマーク）
- Nav Text Size: 15px、weight 300–400
- SHARP Red `#e6000d` をナビゲーション内の強調要素に使用

---

## 5. Layout Principles

### Spacing Scale

実サイトから観測できる主なスペーシング単位:

| Token | Value | 備考 |
|-------|-------|------|
| XS | 8px | インライン要素間 |
| S | 16px | テキストブロック間、body line-height |
| M | 24px | カード内パディング |
| L | 32px | セクション内パディング |
| XL | 48px | セクション間マージン |
| XXL | 80–96px | ヒーロー・ランディングの上下余白 |

### Container

- Max Width: 1280–1440px（実測ベース）
- Padding (horizontal): 24px（モバイル）/ 48–64px（デスクトップ）

### Grid

- 製品カテゴリ: 3〜4 カラムグリッド
- ニュース・インフォメーション: 2〜3 カラム
- ヒーロー: フルスクリーン幅

---

## 6. Depth & Elevation

| Level | Shadow / Overlay | 用途 |
|-------|-----------------|------|
| 0 | none | フラットな面要素（`#f5f5f5` で区分） |
| 1 | `rgba(0,0,0,0.1)` | ホバー時の軽い暗転、Overlay Light |
| 2 | `rgba(43,51,63,0.7)` | 動画プレーヤーコントロール背景 |
| 3 | `rgba(0,0,0,0.6)` | ヒーロー画像上のテキスト可読性確保オーバーレイ |

シャドウ（`box-shadow`）よりも背景色の差（`#ffffff` vs `#f5f5f5`）と透明オーバーレイで奥行きを表現するフラットデザイン。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文は `font-weight: 300`（Light）を使う — シャープの軽やかな印象の根幹
- 全タイポグラフィの `line-height` は **1.5** で統一する
- カードや面の背景には `#f5f5f5`、枠線には `#e6e6e6` を使い、純白との差で階層を表現する
- SHARP Red `#e6000d` はアクセントに限定して使い、バッジ・ナビ強調など要所に絞る
- テレビ（AQUOS）関連コンテンツには AQUOS Blue `#4d7cfa` を使ってサブブランドを表現する
- ヒーロー画像には `rgba(0,0,0,0.6)` のオーバーレイを重ね、白テキストで可読性を確保する
- カテゴリカードは `border-radius: 20px` の大きめ角丸でやわらかい印象を出す

### Don't（禁止）

- 本文に `font-weight: 700`（Bold）を使わない — 見出しとの差別化が失われる
- ページ背景に純黒 `#000000` を使わない（ライトテーマの世界観を壊す）
- `letter-spacing` を指定しない — Noto Sans JP のデフォルトカーニングに委ねる
- SHARP Red を多用しない — 差し色としての効果が薄れる
- 角丸を 0px（シャープな角）にしない — カテゴリカードは必ず丸みを持たせる
- 明朝体を混ぜない — 全体をゴシック（Noto Sans JP）で統一
- `line-height` を 1.5 以外に変えない — 全レベル統一が SHARP のタイポグラフィルール

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 375px | スマートフォンレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）

### フォントサイズの調整

- Hero H1（40px）はモバイルで 24–28px 程度に縮小
- Section H2 Large（36px）はモバイルで 22–24px 程度に縮小
- Body（16px）はモバイルでも 16px を維持（14px に下げる場合は weight を 400 に上げる）
- 製品カテゴリグリッドはモバイルで 2 カラムに変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff / #f5f5f5
Text Color: #000000
Brand Accent: #e6000d (SHARP Red)
Sub-brand Accent: #4d7cfa (AQUOS Blue)
Border: #e6e6e6
Font: "Noto Sans JP", sans-serif
Body Size: 16px / Weight 300 (Light)
Line Height: 1.5 (全レベル統一)
Letter Spacing: normal (指定なし)
Hero Overlay: rgba(0,0,0,0.6)
Card Radius: 20px (製品カテゴリ) / 10px (カテゴリボタン)
CTA Radius: 5px (Primary) / 10px (Category)
```

### プロンプト例

```
SHARPのデザインシステムに従って、製品カテゴリ一覧セクションを作成してください。
- 背景: #f5f5f5（面背景）
- テキスト: #000000
- フォント: "Noto Sans JP", sans-serif
- Body ウェイト: 300（Light）、見出しは 700（Bold）
- 全 line-height: 1.5 で統一
- カードの角丸: border-radius 20px
- ブランドアクセント（バッジ・強調）: #e6000d
- AQUOSテレビカテゴリには #4d7cfa をサブブランドカラーとして使用
- ヒーロー画像の上にテキストを載せる場合は rgba(0,0,0,0.6) のオーバーレイを使用
```
