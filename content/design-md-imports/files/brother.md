# DESIGN.md — Brother（ブラザー）

> Brother（https://www.brother.co.jp/）のデザイン仕様書。
> プリンター・複合機・ミシン・工作機械など多角的な製造業ブランド。"at your side" をタグラインに掲げる。
> 実サイトの computed style 実測（2026-05-31 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ディープネイビーブルー `#0d2ea1` を基調に、**白背景＋グレー面**の明快なコントラストで製品情報を整理する B2B/B2C コーポレートデザイン。装飾よりも情報のアクセシビリティを重視
- **密度**: 本文 14px / line-height 1.7 で、製品スペック・カテゴリ一覧など情報量の多いページをコンパクトに収める。見出しは 28px / line-height 1.22 とタイトに詰め、セクション区切りを明瞭にする
- **キーワード**: ディープネイビー、コーポレート信頼感、游ゴシック、情報整理、シャープな角形UI、"at your side" の親しみやすさ
- **特徴**:
  - ブランドカラーは **`#0d2ea1`（ディープネイビーブルー）**。ヘッダーバー全面・アクティブナビタブの背景に使用される深い青で、製造業の信頼感を表現
  - アクションカラーは **`#1965e1`（アクションブルー）**。CTA ボタン "詳しく見る" やリンクに使用される明るい青
  - 和文フォントに**游ゴシック（YuGothic）**を採用。Web フォント不使用のシステムフォント構成で、日本のコーポレートサイトの定番
  - テキスト色は `#333333`（ダークグレー）が基本。純黒 `#000000` は見出しのみ
  - ナビゲーションは**角形（radius 0px）**。ピルや丸角は使わず、直線的・工業的な印象
  - サーフェスに `#f2f2f2`（ニュートラルグレー）を使い、白背景とのゾーニングで情報階層を構成
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Navy** (`#0d2ea1`): メインのブランドカラー。ヘッダーバー背景、アクティブナビタブの背景（rgb(13, 46, 161)）
- **Action Blue** (`#1965e1`): CTA ボタン "詳しく見る" の背景、テキストリンク色（rgb(25, 101, 225)）

### CTA / Buttons

- **Primary CTA**: 背景 `#1965e1` / 文字 `#ffffff` / radius `4px`（角丸）/ padding `10px 24px` / 14px / weight 700
- **Secondary CTA (Ghost)**: 背景 `transparent` / 文字 `#1965e1` / border `1px solid #1965e1` / radius `4px` / padding `10px 24px` / 14px / weight 700
- **Nav Tab (Active)**: 背景 `#0d2ea1` / 文字 `#ffffff` / radius `0px` / 12px / weight 400
- **Nav Tab (Default)**: 背景 `#ffffff` / 文字 `#000000` / radius `0px` / 12px / weight 400

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 見出し・ナビテキスト |
| Dark Gray | `#333333` | (51, 51, 51) | 本文テキスト・ラベル |
| Medium Gray | `#666666` | (102, 102, 102) | 補助テキスト |
| Light Gray | `#888888` | (136, 136, 136) | キャプション・注釈 |
| Border Gray | `#dddddd` | (221, 221, 221) | 区切り線・ボーダー |
| Border Light | `#d9d9d9` | (217, 217, 217) | 入力欄ボーダー |
| Surface | `#f2f2f2` | (242, 242, 242) | セクション背景（ニュートラル） |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Header / Footer

- **Header BG**: `#0d2ea1`（ブランドネイビーのベタ塗り）
- **Footer BG**: `#404040`（ダークグレー）
- **Footer Text**: `#ffffff`

### Semantic（推奨補完値）

実サイトには明確なエラー／成功色は表面化していない。コーポレートサイト向けに推奨する補完値:

- **Danger**: `#cc0000` 程度の視認性の高いレッド
- **Success**: `#008000` 程度のグリーン
- **Warning**: `#e68a00` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック（YuGothic）** を最優先。Windows / macOS のシステムフォント
- **フォールバック**: `"Hiragino Kaku Gothic ProN"`（Apple OS）→ `"ヒラギノ角ゴ ProN W3"`（日本語名指定）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**游ゴシックの欧文グリフ**を使用
- フォールバックにヒラギノ角ゴの欧文グリフ
- 純粋な欧文サンセリフ（Helvetica Neue / Inter 等）は font-family に含まれない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h3, p, a, span, button, nav, header, footer） */
font-family: 游ゴシック, YuGothic, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", sans-serif;
```

**フォールバックの考え方**:
- 游ゴシックを和文名・欧文名の両方で指定（ブラウザ互換性のため）
- ヒラギノ角ゴも和文名・欧文名の両方を列挙（macOS での確実な表示）
- Web フォントを使用しないため、全環境でシステムフォントに依存する設計
- Windows 環境では游ゴシックの細字問題（Regular が細く見える）に注意。必要に応じて `font-weight: 500` でMedium指定を検討

> **代替フォント注記**: 游ゴシックはシステムフォントのため外部環境で再現できない場合がある。代替として **Noto Sans JP**（weight 400 / 700）を使用すると、ニュートラルな字面で近い印象が出る（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-31 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 | 游ゴシック | 28px | **700** | 34.16px (x1.22) | normal | `#000000` | "プリンター・複合機" 等のセクション見出し |
| Sub H2 | 游ゴシック | 20px | **700** | 28px (x1.4) | normal | `#333333` | カテゴリ見出し |
| H3 | 游ゴシック | 20px | 700 | 28px (x1.4) | normal | `#333333` | サブカテゴリ見出し |
| Body | 游ゴシック | 14px | 400 | 23.8px (x**1.7**) | normal | `#333333` | 本文 |
| Label / Span | 游ゴシック | 12px | 400 | 20.4px (x1.7) | normal | `#333333` | ラベル・タグ |
| Nav Link | 游ゴシック | 12px | 400 | 12px (x1.0) | normal | `#000000` | グローバルナビ |
| Nav Active | 游ゴシック | 12px | 400 | 12px (x1.0) | normal | `#ffffff` | アクティブナビタブ（bg #0d2ea1） |
| Logo Area | 游ゴシック | 14px | 400 | 14px (x1.0) | normal | `#000000` | ロゴ周辺テキスト |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (14px)**: `1.7`（23.8px / 14px）-- コーポレートサイトとして標準的な可読性
- **ラベル (12px)**: `1.7`（20.4px / 12px）
- **見出し (28px)**: `1.22`（34.16px / 28px）-- かなりタイト
- **見出し (20px)**: `1.4`（28px / 20px）
- **ナビ**: `1.0`（一行高さ）

**字間 (letter-spacing)** -- 実測:
- **全要素**: `normal`（明示的な letter-spacing 指定なし）
- Brother は letter-spacing をカスタマイズせず、游ゴシックのデフォルトメトリクスに完全に委ねている

**ガイドライン**:
- 日本語本文は **line-height 1.7 + letter-spacing normal** が Brother の基本リズム
- 見出しは **line-height 1.22** でタイトに詰めてセクション区切りを強調
- letter-spacing は意図的に指定しない（游ゴシックのメトリクスを信頼する方針）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- 見出しは固定幅コンテナで自然折り返し
- ナビゲーション項目は `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- 游ゴシックのデフォルトメトリクスで統一する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ブルー角丸）** -- "詳しく見る"
- Background: `#1965e1`
- Text: `#ffffff`
- Padding: `10px 24px`
- Border Radius: `4px`（シャープな角丸）
- Font: 游ゴシック, 14px, weight 700
- Border: none

**Secondary CTA（ゴーストボタン）**
- Background: `transparent`
- Text: `#1965e1`
- Border: `1px solid #1965e1`
- Padding: `10px 24px`
- Border Radius: `4px`
- Font: 游ゴシック, 14px, weight 700

**Text Link**
- Background: transparent
- Text: `#1965e1`
- Padding: `0`
- Font: 游ゴシック, 14px, weight 400
- Border: none（hover 時に underline）

**Nav Tab (Active)**
- Background: `#0d2ea1`
- Text: `#ffffff`
- Padding: `8px 16px`
- Border Radius: `0px`（完全角形）
- Font: 游ゴシック, 12px, weight 400

**Nav Tab (Default)**
- Background: `#ffffff`
- Text: `#000000`
- Padding: `8px 16px`
- Border Radius: `0px`
- Font: 游ゴシック, 12px, weight 400

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #d9d9d9`
- Border (focus): `1px solid #1965e1`
- Border Radius: `4px`
- Padding: `10px 12px`
- Font: 游ゴシック, 14px, weight 400
- Height: `40px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f2f2f2`（セクション面）
- Border: `1px solid #dddddd` または border なし
- Border Radius: `4px`（シャープ基調）
- Shadow: 基本なし（フラット）

### Header

- Background: `#0d2ea1`（ブランドネイビーのベタ塗り）
- Border Bottom: なし
- Position: `fixed top: 0`
- Height: 実装に応じて 56〜64px

### Footer

- Background: `#404040`（ダークグレー）
- Text: `#ffffff`
- Link: `#ffffff`（hover 時 underline）
- Padding: `40px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ラベル間・ナビ項目の内側余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カード内の余白・セクション内のブロック間 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ページ上下のゆとり |

### Container

- Max Width: `1100px`（実測時の中央寄せコンテナ幅）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | ナビタブ・ヘッダー要素 |
| Small | 4px | CTA ボタン・カード・入力欄 |
| Medium | 8px | 大きなカード（推奨） |

### Grid

- 12 カラムグリッドが実装上自然（CSS Grid または Flexbox）
- Gutter: 20〜24px
- 製品カテゴリカードは 3〜4 列グリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ブランドネイビーのヘッダーバー**と **`#f2f2f2` サーフェス面**の色差で表現
- ホバー時に影を付ける場合も控えめに（`rgba(0, 0, 0, 0.08〜0.12)`）

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **游ゴシック（YuGothic）を最優先**、フォールバックは "Hiragino Kaku Gothic ProN" → "ヒラギノ角ゴ ProN W3" → sans-serif
- 本文の line-height は **1.7** を基本にする（14px 本文で 23.8px）
- 本文の letter-spacing は **normal**（明示的に指定しない）
- 主要 CTA は **`#1965e1` のアクションブルー角丸（radius 4px）**
- ヘッダーバーはブランドネイビー **`#0d2ea1` のベタ塗り**で統一する
- テキスト色は **`#333333`**（ダークグレー）を基本に、見出しのみ `#000000`
- サーフェスは **ニュートラルグレー `#f2f2f2`** を使い、白との切り替えでセクションを分ける
- ボタン・カード・入力欄の角丸は **4px** で統一（シャープな印象）
- 製品情報は **14px の密度の高い本文**でコンパクトにまとめる

### Don't（禁止）

- **ピル形状（radius 9999px）のボタン**を使わない -- Brother はシャープな角形 UI が基本
- 主要 CTA にブランドネイビー **`#0d2ea1`** を使わない -- ネイビーはヘッダー・ナビ専用、CTA はアクションブルー `#1965e1`
- **palt（プロポーショナル字詰め）を有効にしない** -- 游ゴシックのデフォルトメトリクスを維持する
- 本文に **`line-height: 1.5` 以下**を使わない（情報密度は高いが、可読性は 1.7 で確保）
- 本文テキストに **純黒 `#000000`** を使わない（コントラストが強すぎる。`#333333` が基本）
- **角の丸いカード（radius 16px 以上）**を使わない -- 工業ブランドのシャープさを壊す
- **装飾的なグラデーション・半透明オーバーレイ**を使わない -- Brother は情報のクリアさを重視するフラットデザイン
- ヘッダーに**半透明白＋backdrop-blur** を使わない -- Brother のヘッダーはネイビーのベタ塗り

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ（メインブレイクポイント） |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- Section H2: 28px → 22〜24px
- Sub H2 / H3: 20px → 18px
- 本文サイズは 14px を維持（line-height も 1.7 維持）
- ナビはハンバーガーメニュー化
- 製品カテゴリカードは 1〜2 列に縮小

### タッチターゲット

- 主要 CTA: 高さ 40px 以上（padding `10px 24px` + 14px font）
- ナビタブ: 36px 程度

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Navy (Header): #0d2ea1
Action Blue (CTA): #1965e1
Black (見出し): #000000
Dark Gray (本文): #333333
Medium Gray (補助): #666666
Light Gray (注釈): #888888
Border: #dddddd
Surface: #f2f2f2
White: #ffffff
Footer BG: #404040

Font: 游ゴシック, YuGothic, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif

Body Size: 14px / line-height 1.7 / weight 400 / letter-spacing normal / color #333333
Section H2: 28px / line-height 1.22 / weight 700 / color #000000
Sub H2: 20px / line-height 1.4 / weight 700 / color #333333
Label: 12px / line-height 1.7 / weight 400 / color #333333
Nav: 12px / line-height 1.0 / weight 400

Border Radius: 0px（ナビ）/ 4px（CTA・カード・入力欄）
Shadow: 基本 none。階層は #0d2ea1 ヘッダーと #f2f2f2 サーフェスで表現
```

### プロンプト例

```
Brother のデザインに従って、プリンター製品カテゴリの一覧ページを作成してください。
- フォント: 游ゴシック, YuGothic, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif
- ヘッダーバー: 背景 #0d2ea1（ブランドネイビー）/ 白文字 / ロゴ + ナビタブ
- セクション見出し: 28px / weight 700 / line-height 1.22 / color #000000
- サブ見出し: 20px / weight 700 / line-height 1.4 / color #333333
- 本文: 14px / weight 400 / line-height 1.7 / letter-spacing normal / color #333333
- 補助テキスト: 12px / weight 400 / line-height 1.7 / color #666666
- 主要 CTA: 背景 #1965e1（アクションブルー）/ 白文字 / border-radius 4px / padding 10px 24px / 14px / weight 700
- セカンダリ CTA: 背景 transparent / 文字 #1965e1 / border 1px solid #1965e1 / radius 4px
- カード: 背景 白 / border 1px solid #dddddd / radius 4px / フラット（影なし）
- セクション背景: 白 #ffffff と #f2f2f2 の交互配置
- ボタンにピル形状（radius 9999px）を使わない
- ヘッダーは半透明ではなく #0d2ea1 のベタ塗り
- letter-spacing は指定しない（游ゴシックのデフォルト）
```
