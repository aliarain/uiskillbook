# DESIGN.md — NEWT（ニュート / 令和トラベル）

> NEWT（ニュート）by 令和トラベル株式会社（https://www.newt.net/）のデザイン仕様書。
> 海外・国内旅行のツアー＆ホテルをアプリで予約できる旅行サービス。
> 「かしこい、たのしい、海外旅行」をコンセプトに掲げる。
> 実サイトの computed style 実測（2026-06-24 取得。CSS Custom Properties 155 件を含む）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **鮮やかなグリーン `#00cd68`** を主役にした、明るくフレンドリーな消費者向け（C2C/アプリ）デザイン。白地に丸み（radius 24px の pill ボタン、角丸カード）と写真を多用し、**たのしさ・かしこさ**を体現する。整理された**フル・デザイントークン**（green/red/yellow/blue/gray の 5 段階スケール）で運用されている
- **NEWT について**: 旅行予約アプリ。情報量が多くなりがちな旅行系を、**広い余白・大きな写真・明快なグリーン CTA**で迷わせない設計。検索ボックス・タブ・カードが UI の中心
- **密度**: 中密度。カード／タイル中心で要素は多いが、グリーンのアクセントと白背景で軽快にまとめる
- **キーワード**: 鮮やかグリーン、フレンドリー、pill ボタン、角丸カード、システムフォント、デザイントークン、写真主導、アプリ的UI
- **特徴**:
  - **ブランド色＝グリーン `#00cd68`（--color-primary）**。ロゴ・主要 CTA・検索ボタン・リンク強調に使う
  - フォントは**システムフォントスタック**（Web フォントを読み込まず高速表示）。和文は **Hiragino Kaku Gothic ProN / Hiragino Sans / Meiryo**
  - テキストは**ダークグリーン寄りのグレー `#28332e`（gray-80）** を主見出し色に、本文は黒 `#000000`。**真っ黒ではなく緑みのあるダークグレー**が NEWT らしさ
  - **5 段階カラースケール**（green/red/yellow/blue/gray が各 5〜100）で状態・強弱を体系的に表現
  - CTA・ボタンは **pill（radius 24px）**。検索の主要ボタンは**真円（radius 100%）**のグリーン丸ボタン
  - 影は `--shadow` / `--shadow-box` の2段階。カード・フローティング要素にやわらかく使う
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの CSS Custom Properties 実測値。NEWT は整理されたフル・トークンシステムを持つ。すべて hex 表記。

### Brand / Core

- **Primary / Brand Green** (`#00cd68`): ロゴ・主要 CTA・検索ボタン・リンク強調（`--color-primary` = `--color-green-40`）
- **Text Heading** (`#28332e`): 見出し・ナビの主要テキスト（`--color-gray-80`。緑みのあるダークグレー）
- **Text Body** (`#000000`): 本文テキスト
- **Background (Main)** (`#ffffff`): ページ背景・カード（`--color-white`）

### Green Scale（ブランド／--color-green-*）

| Token | hex | 役割 |
|-------|-----|------|
| green-5 | `#e4f8ea` | 最も淡い面・チップ地・成功系の淡背景 |
| green-10 | `#bdedca` | 淡いハイライト |
| green-30 | `#58d783` | 淡めのアクセント |
| **green-40** | **`#00cd68`** | **ブランド／Primary（CTA・ロゴ）** |
| green-50 | `#00c349` | hover の一段濃いグリーン |
| green-60 | `#00b33f` | active / dark（`--color-green-dark`） |
| green-90 | `#006e0f` | 最も濃いグリーン・テキスト用 |

### Gray Scale（--color-gray-*）

| Token | hex | 役割 |
|-------|-----|------|
| gray-5 | `#f4f6f6` | セクション地・最も淡い面 |
| gray-10 | `#eeeeee` | 罫線・淡い区切り |
| gray-20 | `#e0e2e2` | ボーダー |
| gray-30 | `#c9cbcb` | 無効・プレースホルダ罫線 |
| gray-50 | `#6f7977` | サブテキスト・注釈 |
| gray-70 | `#3a4640` | 強めのサブテキスト |
| **gray-80** | **`#28332e`** | **主見出し色** |
| gray-90 | `#131d18` | 最も濃いテキスト |

### Semantic（実測トークン）

| Role | hex (base) | light | dark |
|------|-----------|-------|------|
| **Danger / Red** | `#f53649` | `#ffe9ee` | `#eb002c` |
| **Warning / Yellow** | `#fbc02d` | `#fffde7` | `#f9a825` |
| **Info / Blue** | `#1976d2` | `#e3f2fd` | `#1565c0` |
| **Success / Green** | `#00cd68` | `#e4f8ea` | `#00b33f` |

- セール・割引の訴求には red 系（`#f53649` / `#fa052c`）を**バッジ・価格強調**に使う

### Surface 補助

- **Off Grey BG**: `#f6f6f6`（フッター等のセクション地）
- **Light Grey Line**: `#efefef`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **Hiragino Kaku Gothic ProN → Hiragino Sans → Meiryo**（OS 標準）。Web フォントは読み込まず、OS のシステムフォントで高速描画する
- **明朝体**: 使用しない（全面ゴシック）
- weight は 400（本文）/ 700（見出し・ラベル・CTA）の2段。**中見出し以上はほぼ 700**

### 3.2 欧文フォント

- **サンセリフ（メイン）**: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial`（OS のシステムサンセリフ）
- Web フォント非依存のため、英字も OS 標準で描画

### 3.3 font-family 指定

```css
/* --font-sans（全テキスト共通） */
font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 欧文・数字は `-apple-system` / `Helvetica Neue` / `Arial`、和文は `Hiragino Kaku Gothic ProN` → `Hiragino Sans` → `Meiryo`
- **欧文優先**のフォールバック順（欧文メトリクスを先に当て、和文は OS に委ねる）
- Web フォントを読み込まないため**初期表示が速い**のが設計意図

> **preview.html での再現**: システムフォント指定のため、macOS では Hiragino、Windows では Meiryo で描画される（実機と同様）。代替 Web フォントは読み込まない。

### 3.4 文字サイズ・ウェイト階層

> 実測値＋トークン（`--fontSize-*` / `--lineHeight-*`）。トークン体系: xs 10 / sm 12 / base 14 / lg 16 / xl 18 / 2xl 20 / 3xl 24 / 4xl 28 / 5xl 32。

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Section H2 (大) | 28px (4xl) | 700 | 1.43 (40px) | normal | `#28332e` | "注目SALE" 等のセクション大見出し |
| H2 (中) | 24px (3xl) | 700 | 1.33 (32px) | normal | `#28332e` | "Follow Us" 等 |
| H2 (小) | 20px (2xl) | 700 | 1.4 (28px) | normal | `#28332e` | ブロック見出し |
| Body / List | 16px (lg) | 400 | 1.15 (18.4px) | normal | `#000000` | 標準本文・ナビ |
| Body (見出し小) | 16px | 700 | 1.5 (24px) | normal | `#28332e` | 強調本文・小見出し |
| Label / Tab | 14px (base) | 700 | 1.15〜1.71 | normal | `#28332e` / `#00cd68` | タブ・カードラベル |
| CTA Label | 14〜16px | 700 | 1.15 | normal | `#ffffff` / `#00cd68` | ボタン内テキスト |
| Caption / Meta | 12px (sm) | 400〜700 | 1.33 (16px) | normal | `#6f7977` | キャプション・カテゴリ |
| Micro | 10px (xs) | 400 | 1.15 | normal | `#6f7977` | 注釈（*1 等） |

### 3.5 行間・字間

**行間 (line-height)** — 実測／トークン:
- **本文 (16px)**: `1.15`（18.4px。やや詰めた UI 寄り）／読み物的本文では `1.5`（24px）
- **見出し (20〜28px)**: `1.33〜1.43`
- **トークン**: sm16 / base20 / lg24 / xl24 / 2xl28 / 3xl32 / 4xl40 / 5xl44

**字間 (letter-spacing)** — 実測:
- **全テキスト `normal`** が基本（トークン `--letter-spacing: 10%` は限定的な装飾用途）。本文・見出しはトラッキングを加えない

**ガイドライン**:
- UI ラベル・カード本文は **line-height 1.15〜1.5** とやや詰め気味（情報密度を確保）
- 読み物（旅行ガイド本文）は **1.5〜1.7** に広げる
- letter-spacing は基本 `normal`

### 3.6 禁則処理・改行ルール

```css
word-break: break-all; /* カード内の長い地名・施設名 */
overflow-wrap: break-word;
line-break: strict;
```

- カード内の地名・ツアー名は `line-clamp` で2〜3行に省略する想定
- 価格・数値は折り返さない（`white-space: nowrap`）

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` 等は未採用。システムフォントのメトリクスをそのまま使う

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

> 実測値。CTA は **pill（radius 24px）** と**真円（radius 100%）** の2系統。

### Buttons / CTA

**Primary Pill（実測）** — "ログイン / 新規登録"
- Background: `#00cd68`
- Text: `#ffffff`（weight 700 / 14px）
- Border: `1px solid #00cd68`
- Border Radius: `24px`（pill）
- Padding: `0 24px`（高さは行高で確保。実質 40px 前後）
- ブランドグリーンの主要 CTA

**Round Primary（実測）** — 検索ボタン "さがす"
- Background: `#00cd68`
- Text: `#ffffff`（weight 700 / 16px）
- Border Radius: `100%`（真円）
- 検索ボックスの末尾に置くグリーンの丸ボタン

**Outline Pill（実測）** — "すべてみる"
- Background: `#ffffff`
- Text: `#28332e`（weight 700）
- Border: `1px solid #28332e`
- Border Radius: `24px`
- Padding: `0 24px`
- セカンダリ。一覧導線

**White-on-Green / Ghost（実測）** — "アプリをひらく"
- Background: `#ffffff`
- Text: `#00cd68`（weight 700 / 14px）
- Border Radius: `24px`
- グリーン背景上で使う白塗り＋グリーン文字の反転 pill

**Tab / Text Button（実測）** — "海外旅行" 等のカテゴリタブ
- Background: `transparent`
- Text: `#28332e`（weight 700 / 12px）
- Border Radius: `8px`
- Padding: `0 24px`
- 選択中はグリーンの下線／グリーン文字で示す

### Inputs

**Search / Text Input（推奨）**
- Background: `#ffffff`
- Border: `1px solid #e0e2e2`（gray-20）
- Border Radius: `8px`（検索ボックス全体は大きめの角丸 / pill）
- Padding: `12px 16px`
- Placeholder: `#6f7977`（gray-50）
- Focus: border `#00cd68` + ring `0 0 0 3px rgba(0,205,104,0.2)`

### Cards / Surfaces

**Tour / Hotel Card（推奨）**
- Background: `#ffffff`
- Border: なし／`1px solid #eeeeee`
- Border Radius: `12px`
- Shadow: `--shadow`（`0 4px 8px #1a0e000a, 0 0 1px #1a0e000a`）
- 写真（角丸上部）＋ タイトル（16px / 700 / `#28332e`）＋ 価格（red 系で強調）＋ タグ
- セールバッジ: red `#f53649` / 文字白 / 角丸チップ

**Section Block（推奨）**
- Background: `#ffffff` / `#f6f6f6`（gray 地）
- 見出し（28px / 700 / `#28332e`）＋「すべてみる」outline pill

### Promo Band（グリーン帯）

- Background: `#00cd68`（または green グラデーション）
- Text: `#ffffff`、CTA: 白塗り pill（`#ffffff` / 文字 `#00cd68`）
- 会員登録などのコンバージョン誘導に使う

---

## 5. Layout Principles

### Spacing Scale（推奨 4/8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | チップ内側・アイコン間 |
| S | 8px | 小要素間・タグ間 |
| M | 16px | カード内余白・要素間 |
| L | 24px | カード間・ブロック内 |
| XL | 40px | セクション内の縦区切り |
| XXL | 64〜80px | セクション間の縦余白 |

### Container

- Max Width: `1120〜1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`
- カード／タイルのグリッドが中心。検索ボックスは上部に大きく配置

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| SM | 8px | タブ・タグ・入力・小要素 |
| MD | 12px | カード・写真 |
| Pill | 24px | ボタン・CTA |
| Round | 100% | 検索ボタン・アイコン・アバター |

### Grid

- Columns: 推奨 12 カラム
- Gutter: 16〜24px
- ツアーカード: 4列（desktop）→ 2列（tablet）→ 1〜2列（mobile）

---

## 6. Depth & Elevation

> 実測トークン。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 地の面・セクション |
| 1 (`--shadow`) | `0 4px 8px #1a0e000a, 0 0 1px #1a0e000a, 0 0 1px #1a0e000a` | カード・通常の浮き |
| 2 (`--shadow-box`) | `0 4px 16px #1a0e0024, 0 0 1px #1a0e000a, 0 0 1px #1a0e000a` | フローティング検索ボックス・モーダル |
| Dark | `0 4px 4px #0000000d` | ヘッダー固定時の薄い影 |

- 影は**温かみのある黒（`#1a0e00` ベース）の極薄**。やわらかく浮かせる
- カードは `--shadow`、検索ボックスや重要パネルは `--shadow-box`

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **システムフォントスタック**（`-apple-system … "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`）を使い、Web フォントは読み込まない（高速表示）
- ブランド色 **グリーン `#00cd68`** を主要 CTA・検索ボタン・リンク強調に使う
- 主見出しは**緑みのあるダークグレー `#28332e`（gray-80）**、本文は黒 `#000000`
- ボタンは **pill（radius 24px）**、検索の主要ボタンは**真円（radius 100%）**のグリーン丸ボタン
- カードは radius 12px ＋ `--shadow`、写真を大きく見せる
- 状態・強弱は **5段階トークン**（green/red/yellow/blue/gray）で体系的に。セールは red `#f53649` バッジ
- 影は**温かみのある極薄影（`#1a0e00` ベース）**でやわらかく浮かせる

### Don't（禁止）

- 見出しを**真っ黒 `#000000` にしない**（主見出しは緑みのある `#28332e`）
- グリーン以外の**ビビッドな原色**を主役にしない（赤・黄・青はセマンティック＝状態表示に限定）
- ボタンを**角ばった角丸 4px にしない**（pill 24px / 真円が基本）
- Web フォントを重く読み込まない（システムフォントで高速表示を保つ）
- 影を**濃く・黒くしない**（温かみのある極薄影に留める）
- letter-spacing を**大きく加えない**（基本 normal）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1〜2カラム。アプリ的UI |
| Tablet | 768px〜1023px | タブレット。2〜3カラム |
| Desktop | ≥ 1024px | デスクトップ。4カラムグリッド |

### モバイル時の調整

- Section H2: 28px → 20〜22px（weight 700 維持）
- 検索ボックス: 横並び → 縦積み（出発地・目的地・日付を縦に）
- ツアーカード: 4列 → 2列 → 横スクロールカルーセル
- グリーン CTA は**画面下部固定（sticky）**にすることが多い

### タッチターゲット

- pill CTA・検索丸ボタン: 高さ／直径 44px 以上
- タブ・カテゴリ: 高さ 40px 以上
- カードタップ領域: カード全体をタップ可能に

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary / Brand Green: #00cd68（--color-primary）
Text Heading: #28332e（gray-80。緑みのダークグレー）
Text Body: #000000
Background (Main): #ffffff

Green scale: green-5 #e4f8ea / green-40 #00cd68 / green-50 #00c349 / green-60 #00b33f / green-90 #006e0f
Gray scale: gray-5 #f4f6f6 / gray-20 #e0e2e2 / gray-50 #6f7977 / gray-80 #28332e / gray-90 #131d18
Semantic: Danger #f53649 / Warning #fbc02d / Info #1976d2 / Success #00cd68

Font (--font-sans): -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
（Web フォント非依存・システムフォント）

Section H2 (大): 28px / weight 700 / line-height 1.43 / normal / #28332e
H2 (中): 24px / weight 700 / line-height 1.33
Body: 16px / weight 400 / line-height 1.15（読み物は 1.5）/ #000000
小見出し: 16px / weight 700 / line-height 1.5 / #28332e
Caption: 12px / weight 400-700 / #6f7977
letter-spacing: normal（全域）

Primary Pill: bg #00cd68 / text #fff / radius 24px / padding 0 24px
Round Primary (検索): bg #00cd68 / text #fff / radius 100%
Outline Pill: bg #fff / text #28332e / border 1px #28332e / radius 24px
Ghost (on green): bg #fff / text #00cd68 / radius 24px
Card: bg #fff / radius 12px / shadow 0 4px 8px #1a0e000a
Sale Badge: bg #f53649 / text #fff
Radius: tab/input 8px, card 12px, button pill 24px, search 100%
Shadow (--shadow): 0 4px 8px #1a0e000a / (--shadow-box): 0 4px 16px #1a0e0024
```

### プロンプト例

```
NEWT（令和トラベル）のデザインシステムに従って、旅行予約サービスのトップセクションを作成してください。
- フォント: システムフォントスタック
  （-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif）
  ※ Web フォントは読み込まない（高速表示が設計意図）
- ブランド色はグリーン #00cd68。主要 CTA・検索ボタン・リンク強調に使う
- 主見出し: 28px / weight 700 / line-height 1.43 / color #28332e（緑みのあるダークグレー。真っ黒にしない）
- 本文: 16px / weight 400 / line-height 1.15（読み物本文は 1.5）/ color #000000
- CTA は pill（radius 24px）。検索の主要ボタンは真円（radius 100%）のグリーン丸ボタン
- セカンダリは白地＋ #28332e ボーダーの outline pill。グリーン帯の上では白塗り＋グリーン文字の ghost pill
- カードは radius 12px ＋ やわらかい影（0 4px 8px #1a0e000a）。写真を大きく見せる
- セール・割引バッジは red #f53649（文字白）。状態色は green/red/yellow/blue の5段階トークンで体系的に
- letter-spacing は normal。影は温かみのある極薄影でやわらかく浮かせる
- グリーン以外のビビッドな原色を主役にしない（赤・黄・青は状態表示に限定）
```
