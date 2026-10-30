# DESIGN.md — CLAS（クラス）

> CLAS（https://clas.style/）のデザイン仕様書。
> 家具・家電のレンタル／サブスクサービス。「暮らしに、サブスクという選択を」をコンセプトにした、ナチュラルでサステナブルな生活提案型 EC。
> 実サイトの computed style 実測（2026-06-23 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白とウォームベージュを基調に、**落ち着いたミュートグリーン `#669988`** をブランド色として置き、**完全ピル（radius 24px）の CTA** でやわらかく親しみやすい暮らしのトーンを表現
- **密度**: 全体を通して line-height が **約 1.8** と非常にゆったり。見出しから本文・キャプションまで一貫して広い行間でエアリーなリズムをつくる
- **キーワード**: ナチュラル、ウォーム、幾何学サンセリフ、ピルボタン、暮らし／サステナブル
- **特徴**:
  - 欧文に **futura-pt（Adobe Fonts の幾何学サンセリフ）** を全面採用。"GREEN ITEM"・"SERVICE"・"SALE"・"NEW" 等の英字ラベルは大文字（uppercase）で使い、Futura らしい幾何学的な印象を前面に出す
  - 和文用の Web フォントは読み込まれず、**システムゴシック（ヒラギノ角ゴ ProN → Hiragino Sans）にフォールバック**する
  - **ブランドカラーはミュートグリーン `#669988`**（主要 CTA "新規会員登録"・"すべてを見る"・ブランド要素）
  - サーフェスに **ウォームベージュ `#f5f3f0`**（ステップ／ガイド帯）と **クールグレー `#f2f3f2` / `#e3e5e5`**（カテゴリタグ・記事帯）を使い分け、白地との対比でセクションを自然に区切る
  - アクセントは **オレンジ `#d96c45`**（セール／ハイライト）、**ブルーグレー `#608494`**（NEW・人気バッジ）、**ゴールド `#998866`** の3系統
  - 純黒は避け、テキストは温かみのあるダークグリーングレー（`#2d312f` / `#4b5049`）で組む
  - 大型の選択ボタンは `border: 3px solid` の太いアウトラインピル（radius 20〜24px）で軽やかな立体感を演出
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Green** (`#669988`): メインのブランドカラー。主要 CTA "新規会員登録"、"すべてを見る"・"もっと見る" 等のアクション、ブランド要素（rgb 102,153,136）

### CTA / Buttons

- **Primary CTA (Pill)**: 背景 `#669988` / 文字 `#ffffff` / border `1px solid #669988` / radius `24px` / padding `4px 16px` / 14px / weight 700
- **Ghost CTA "ログイン"**: 背景 `transparent` / 文字 `#646b61` / border `1px solid #646b61` / radius `24px` / padding `4px 16px`
- **Filter Chip**: 背景 `#ffffff` / 文字 `#646b61` / border `1px solid #646b61` / radius `24px` / padding `5px 12px` / 12px / weight 700
- **Large Outline Button**: 背景 `transparent` / border `3px solid`（グリーン or ダーク）/ radius `20〜24px`（ガイド選択ボタン）
- **Badge "NEW" / "人気"**: 背景 `#608494` / 文字 `#ffffff`（ブルーグレー）

### Neutral / Text

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Heading | `#4b5049` | (75, 80, 73) | 見出し（ダークウォームグリーングレー） |
| Text Primary | `#2d312f` | (45, 49, 47) | 本文主要テキスト・カテゴリタグ文字 |
| Text Secondary | `#646b61` | (100, 107, 97) | ゴーストボタン文字／枠・補足テキスト |
| Cool Grey 1 | `#e3e5e5` | (227, 229, 229) | カテゴリタグ背景・面色 |
| Cool Grey 2 | `#f2f3f2` | (242, 243, 242) | 記事セクション帯・サーフェス |
| Warm Beige Surface | `#f5f3f0` | (245, 243, 240) | ステップ／ガイド帯のウォームサーフェス |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード・ヘッダー |

### Accent

- **Accent Orange** (`#d96c45`): セール・ハイライトのアクセント（rgb 217,108,69）
- **Accent Blue-grey** (`#608494`): NEW・人気バッジ（rgb 96,132,148）
- **Accent Gold** (`#998866`): ナンバリング・装飾アクセント（rgb 153,136,102）

### Semantic（推奨値）

実サイトには明確なエラー／成功色の表面化は確認されなかった。生活 EC として推奨する補完値:

- **Danger**: `#d96c45`（ブランドのアクセントオレンジを流用）
- **Success**: `#669988`（ブランドグリーンを流用）

### Page Background

- **Page BG**: `#ffffff`（白）。上部 viewport の支配色は白で、セクション単位で `#f2f3f2`（クールグレー）・`#f5f3f0`（ウォームベージュ）に切り替わる

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: ヒラギノ角ゴ ProN（`Hiragino Kaku Gothic ProN`）→ ヒラギノ Sans（`Hiragino Sans`）→ sans-serif
- **Web フォント**: 和文の Web フォントは読み込まれない（OS のシステムゴシックにフォールバック）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **futura-pt**（Adobe Fonts の幾何学サンセリフ）— ラテン文字すべてに適用。英字ラベル／見出しは大文字（uppercase）で使う
- **アイコン**: 絵文字フォント（`Apple Color Emoji` / `Segoe UI Emoji` / `Segoe UI Symbol`）をフォールバックチェーンに内包

> **代替フォント注記**: futura-pt は Adobe Fonts（Typekit）のライセンスフォントのため、プレビューや社外環境では読み込めない。代替として **Jost**（Google Fonts / weight 300・400・500・600・700）を使用すると、Futura 系の幾何学的なプロポーションを近似できる（preview.html はこの代替を使用）。和文は **Noto Sans JP** で代替する。

### 3.3 font-family 指定

```css
/* 全体共通（メイン） */
font-family: futura-pt, arial, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
```

**フォールバックの考え方**:
- futura-pt（欧文）を最優先。和文は futura-pt の欧文グリフではカバーできないため、ヒラギノ角ゴ ProN 以下の和文フォントが担う
- futura-pt は Adobe Fonts のライセンスフォントであり、非契約環境では `arial` → 絵文字フォント → OS 和文フォントへフォールバックする
- 和文専用の Web フォントは指定しない（システムフォントで統一）

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-23 取得）。letter-spacing は em 換算。line-height は比率換算。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Section | futura-pt stack | 18px | 700 | 1.8 (32.4px) | 0.05em (0.9px) | `#4b5049` | セクション見出し（英字は uppercase） |
| H3 | futura-pt stack | 16px | 500 | 1.8 (28.8px) | 0.075em (1.2px) | `#4b5049` | サブ見出し |
| H3 Alt | futura-pt stack | 18px | 700 | 1.8 (32.4px) | 0 | `#2d312f` | 強調サブ見出し |
| Body | futura-pt stack | 14px | 400 | 1.8 (25.2px) | 0 | `#4b5049` / `#646b61` | 標準本文 |
| Small | futura-pt stack | 12px | 400〜700 | 1.8 (21.6px) | 0 | `#646b61` / `#4b5049` | 補足・チップ文字 |
| Caption | futura-pt stack | 10px | 400〜700 | 1.8 (18px) | 0 | `#4b5049` | キャプション・バナーラベル |
| CTA / Button | futura-pt stack | 14px | 700 | 1.8 (25.2px) | 0 | `#ffffff` on `#669988` | 主要 CTA |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.8`
- **小サイズ (12px)**: `1.8`
- **キャプション (10px)**: `1.8`
- **見出し (16〜18px)**: `1.8`
- → **全階層で約 1.8** に統一。サイズに関わらずゆったりとしたエアリーなリズムが CLAS の特徴

**字間 (letter-spacing)** — 実測:
- **本文**: `0`（futura-pt の自然なメトリクスを活かす）
- **H2 セクション見出し**: `0.05em`（0.9px / 18px）
- **H3 サブ見出し**: `0.075em`（1.2px / 16px）
- → letter-spacing は主に **大文字英字見出し**に適用（0.05〜0.075em）

**ガイドライン**:
- futura-pt は欧文フォントのため、和文・欧文どちらも line-height は **1.8** を基準にする（詰めない）
- 英字ラベル（"GREEN ITEM"・"SERVICE" 等）は uppercase + letter-spacing 0.05〜0.075em で Futura らしい幾何学的なリズムを出す
- 本文の letter-spacing は `0` のまま futura-pt のメトリクスに委ねる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
```

- 英字ラベル（"NEW"・"SALE" 等）・ピル・バッジ・チップは `white-space: nowrap`
- カテゴリチップは折り返さず横スクロール／flex-wrap で配置

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった（`font-feature-settings: normal`）
- futura-pt のメトリクスと letter-spacing で見た目を調整する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（グリーンピル）** — "新規会員登録"
- Background: `#669988`
- Text: `#ffffff`
- Border: `1px solid #669988`
- Padding: `4px 16px`
- Border Radius: `24px`（完全ピル）
- Font: futura-pt stack, 14px, weight 700

**Ghost CTA（グレー枠）** — "ログイン"
- Background: `transparent`
- Text: `#646b61`
- Border: `1px solid #646b61`
- Padding: `4px 16px`
- Border Radius: `24px`
- Font: futura-pt stack, 14px, weight 700

**Filter Chip** — "ドラム式洗濯乾燥機" 等のキーワードタグ
- Background: `#ffffff`
- Text: `#646b61`
- Border: `1px solid #646b61`
- Padding: `5px 12px`
- Border Radius: `24px`
- Font: futura-pt stack, 12px, weight 700

**Large Outline Button** — ガイド選択ボタン "家電から選ぶ" 等
- Background: `transparent`
- Border: `3px solid`（選択時グリーン／非選択時ダーク or transparent）
- Border Radius: `20〜24px`
- 太い枠線で軽やかな選択 UI を表現

**Badge "NEW" / "人気"**
- Background: `#608494`（ブルーグレー）
- Text: `#ffffff`
- Border Radius: `4px` 程度
- Font: futura-pt stack, 10px, weight 700

### Inputs

**Search / Text Input（推奨値）**
- Background: `#ffffff`
- Border: `1px solid #e3e5e5`
- Border Radius: `24px`（ピル）or `8px`
- Padding: `8px 16px`
- Font: futura-pt stack, 14px, weight 400
- Focus: `box-shadow: 0 0 0 3px rgba(102,153,136,0.25)`（ブランドグリーンのリング）

### Cards / Surfaces

**Product Card**
- Background: `#ffffff`
- Border: なし（または `1px solid #e3e5e5` のヘアライン）
- Border Radius: 画像 `8px` 程度
- Shadow: ごく薄い `0 2px 8px rgba(45,49,47,0.06)` 程度
- NEW バッジ: `#608494` / 白文字を左上に配置

**Category Tag Surface**
- Background: `#e3e5e5`（クールグレー）
- Text: `#2d312f`
- "# 全自動洗濯機" 等のカテゴリ表示に使用

**Warm Beige Banner（ステップ／ガイド帯）**
- Background: `#f5f3f0`
- Padding: `40px 24px`
- "迷わず選べる" 等のガイド導線に使用

**Article Section（記事帯）**
- Background: `#f2f3f2`（クールグレー）

### Header

- Background: `#ffffff`（白）
- Border-bottom: `1px solid #e3e5e5`（推奨）
- Position: `sticky` / `top: 0`（推奨）
- 右側に Ghost "ログイン" + Primary "新規会員登録" を並べる

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内側余白、アイコン間 |
| S | 8px | ボタン縦余白、カード内テキスト間 |
| M | 16px | カード内要素間、ナビリンク間 |
| L | 24px | カードの内側余白、セクション内余白 |
| XL | 40〜48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー・バナー上下のゆとり |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`
- サイドバーナビ + メインの2カラム構成（desktop）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | NEW・人気バッジ |
| Small | 8px | 入力欄、商品画像 |
| Pill | 24px | 全 CTA・ゴースト・チップ |
| Large Outline | 20〜24px | 太枠の大型選択ボタン |
| Circle | 50% | アイコンボタン |

### Grid

- Columns: 推奨 12 カラム（実装は Flexbox / CSS Grid）
- Gutter: 16〜24px
- 商品カード: 4列（desktop）→ 2列（tablet）→ 1列（mobile）
- カテゴリチップ: flex-wrap で横並び

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン（基本フラット） |
| 1 | `0 2px 8px rgba(45,49,47,0.06)` | 商品カード（推奨） |
| 2 | `0 8px 20px rgba(45,49,47,0.10)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 16px 40px rgba(45,49,47,0.15)` | モーダル（推奨） |

- 実測ではほぼフラット／極薄シャドウ
- 立体感は **ウォームベージュ `#f5f3f0`** と **クールグレー `#f2f3f2` / `#e3e5e5`** のサーフェス＋ヘアラインボーダーで表現する
- 影は黒ではなくダークグリーングレー（`rgba(45,49,47,*)`）ベースでウォームに保つ

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文は **futura-pt を最優先**、プレビュー・社外環境では **Jost** で代替する
- 和文は **ヒラギノ角ゴ ProN → Hiragino Sans** のフォールバックチェーンを維持する（和文 Web フォントは追加しない）
- 英字ラベル（"GREEN ITEM"・"SERVICE"・"SALE"・"NEW"）は **uppercase + letter-spacing 0.05〜0.075em** で Futura らしさを出す
- 本文から見出しまで line-height は **約 1.8** を基準にし、エアリーなリズムを保つ
- 主要 CTA は **`#669988` のグリーンピル（radius 24px）**、ゴーストは **`#646b61` の枠線ピル**で統一する
- ボタン・チップは **すべてピル（radius 24px）** に揃える（CLAS のアイデンティティ）
- サーフェスは **ウォームベージュ `#f5f3f0`** と **クールグレー `#f2f3f2` / `#e3e5e5`** を使い分ける
- テキストは **`#2d312f` / `#4b5049`** のウォームダークグリーングレーで組む
- `font-feature-settings` は **`normal`** のまま（palt 非使用）

### Don't（禁止）

- **純黒 `#000000`** を本文・見出しに使わない（Text は `#2d312f` / `#4b5049`）
- ボタンやチップを **角丸（8px 以下）の四角**にしない（CLAS は完全ピル radius 24px が基本）
- CTA に **オレンジ `#d96c45` を使わない**（オレンジはセール／アクセント専用、メインアクションはグリーン）
- 和文に **冷たい純グレー**（`#9ca3af` 等）を使わない（ウォームグリーングレーのトーンと合わない）
- 本文に **`line-height: 1.5` 以下**を使わない（CLAS は全体 1.8 のゆったり設計）
- 和文専用の Web フォント（Noto Sans JP 等）を **本番に追加しない**（実サイトはシステムゴシック。preview のみ代替使用）
- `font-feature-settings: "palt" 1` を **全体適用しない**（実サイト非採用）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム、ハンバーガーメニュー |
| Tablet | 768px〜1023px | タブレット。2カラム商品グリッド |
| Desktop | ≥ 1024px | デスクトップ。サイドバー + 4カラム商品グリッド |

### モバイル時の調整

- サイドバーナビ → ハンバーガー（`HamburgerCategoryAccordion`）に折りたたみ
- H2 セクション見出し: 18px は維持（weight 700 / letter-spacing 0.05em）
- 本文 14px・line-height 1.8 は維持
- 商品カード: 4列 → 2列 → 1列
- カテゴリチップ: 横スクロール

### タッチターゲット

- 主要 CTA ピル: 高さ 36px 以上（padding `4px 16px` + 14px font）
- フィルターチップ: 高さ 32px 以上（padding `5px 12px` + 12px font）
- 大型選択ボタン（3px 枠ピル）: 高さ 48px 以上

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green (CTA): #669988
Text Heading: #4b5049
Text Primary: #2d312f
Text Secondary (ghost text/border): #646b61
Accent Orange (sale): #d96c45
Accent Blue-grey (NEW/人気 badge): #608494
Accent Gold: #998866
Cool Grey 1 (tag bg): #e3e5e5
Cool Grey 2 (article surface): #f2f3f2
Warm Beige Surface (step/guide): #f5f3f0
White (page bg / card / header): #ffffff

Main Font: futura-pt, arial, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Preview Fallback: "Jost", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif

Body: 14px / line-height 1.8 / weight 400 / letter-spacing 0 / color #4b5049
Small: 12px / line-height 1.8 / weight 400〜700 / color #646b61
Caption: 10px / line-height 1.8 / color #4b5049
H2 Section (EN uppercase): 18px / weight 700 / line-height 1.8 / letter-spacing 0.05em / color #4b5049
H3: 16px / weight 500 / line-height 1.8 / letter-spacing 0.075em / color #4b5049
H3 Alt: 18px / weight 700 / line-height 1.8 / color #2d312f

CTA Pill Radius: 24px（全ボタン・チップ統一）/ Badge Radius: 4px
Primary CTA: bg #669988 / 白文字 / border 1px solid #669988 / radius 24px / padding 4px 16px / 700
Ghost CTA: transparent / 文字・枠 #646b61 / radius 24px / padding 4px 16px
Filter Chip: bg #fff / 文字・枠 #646b61 / radius 24px / padding 5px 12px / 12px / 700
Shadow (card): 0 2px 8px rgba(45,49,47,0.06)
font-feature-settings: normal（palt 非使用）
```

### プロンプト例

```
CLAS のデザインシステムに従って、家具・家電サブスクの商品一覧セクションを作成してください。
- フォント: futura-pt, arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
- セクション英字見出し: 18px / weight 700 / line-height 1.8 / letter-spacing 0.05em / uppercase / color #4b5049（例: "GREEN ITEM"）
- 本文: 14px / weight 400 / line-height 1.8 / letter-spacing 0 / color #4b5049
- 補足テキスト: 12px / line-height 1.8 / color #646b61
- 主要 CTA "新規会員登録": 背景 #669988（ミュートグリーン）/ 白文字 / border 1px solid #669988 / border-radius 24px（完全ピル）/ padding 4px 16px / 14px / weight 700
- ゴースト CTA "ログイン": transparent / 文字・枠 #646b61 / border-radius 24px
- フィルターチップ: 白背景 / 文字・枠 #646b61 / border-radius 24px / padding 5px 12px / 12px / weight 700
- NEW・人気バッジ: 背景 #608494（ブルーグレー）/ 白文字 / radius 4px / 10px / weight 700
- カード背景: #ffffff、カテゴリタグ帯は #e3e5e5、ステップ／ガイド帯は #f5f3f0（ウォームベージュ）、記事帯は #f2f3f2
- box-shadow は基本フラット（カードのみ 0 2px 8px rgba(45,49,47,0.06)）
- ボタン・チップはすべてピル（radius 24px）に揃える
- 純黒は使わず、テキストは #2d312f / #4b5049 のウォームダークグリーングレーで組む
- オレンジ #d96c45 はセール／アクセント専用（メイン CTA には使わない）
- 行間は全階層で 1.8 を基準にする
- font-feature-settings は normal（palt 非使用）
```
