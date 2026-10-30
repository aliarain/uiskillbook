# DESIGN.md — 天童木工（Tendo Mokko）

> 天童木工株式会社（https://www.tendo-mokko.co.jp/）のデザイン仕様書。
> 1940年創業、山形・天童の家具メーカー。柳宗理「バタフライスツール」や
> 成形合板（Roll Press Wood）の名作家具で知られる、日本のモダンデザインの担い手。
> 実サイトの computed style 実測（2026-06-24 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Helvetica ベースのモノクローム**で組む、静かでミニマルなプロダクト／ギャラリー型デザイン。白地に `#333333` のテキスト、**角丸ゼロ（radius 0）の四角い枠線ボタン**、家具写真を主役にした余白の多い editorial。**抑制と精度**が天童木工らしさ
- **天童木工について**: 成形合板技術と、柳宗理・剣持勇・Bruno Mathsson らの名作を製造してきた老舗。サイトも「製品＝作品」を端正に並べる**カタログ／アーカイブ的**構成。装飾を排し、写真とタイポグラフィの規律で品質感を出す
- **密度**: 低〜中密度。グリッドに製品サムネイルを整然と並べ、ラベルは小さく `15px` 前後。本文 line-height は 1.3 とタイトめで端正
- **キーワード**: Helvetica、モノクローム、角丸ゼロ、四角い枠線、写真主導、editorial、老舗、成形合板、規律
- **特徴**:
  - 欧文は **Helvetica / Helvetica Neue / Arial**、和文は **ヒラギノ角ゴ Pro（W3）→ メイリオ**。**欧文優先**のフォールバック
  - 基調は**モノクローム**（テキスト `#333333` / 白 `#ffffff` / グレー罫線 `#b6b6b6`・`#e2e2e2`）
  - **唯一のアクセントは深紅 `#b20000`**。"NEW" バッジ・選択中・チェック等に**ごく少量**だけ使う
  - ボタン・タイルは**角丸ゼロ（radius 0）の直線的な枠線**。pill や強い角丸は一切使わない
  - 本文サイズは **15px**（16px ではない）。ラベル・ナビは 12〜14px と小さめで端正
  - オーバーレイ・メニューは**ダーク（`rgba(45,45,45,0.9)`）**に反転し、白テキストを乗せる
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。基調はモノクローム＋深紅アクセント。

### Brand / Core

- **Text Primary** (`#333333`): 見出し・本文・ナビ・ロゴの主要テキスト（白地）
- **Background (Main)** (`#ffffff`): ページ背景・メインキャンバス
- **Accent Red** (`#b20000`): "NEW" バッジ・選択中・チェックマーク等のアクセント（少量のみ）

### Neutral / Line

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Border (strong) | `#333333` | (51, 51, 51) | 主要ボタンの枠線・強い罫線 |
| Border (light) | `#b6b6b6` | (182, 182, 182) | メニュー・セカンダリボタンの枠線・淡い罫線 |
| Tile Grey | `#e2e2e2` | (226, 226, 226) | カテゴリタイル・サムネイルの地・薄い面 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ダーク面上のテキスト |

### Dark Overlay（反転メニュー）

| Token | hex / rgba | 役割 |
|-------|-----------|------|
| Overlay Dark | `rgba(45, 45, 45, 0.9)`（≒ `#2d2d2d`） | メニュー／モーダルのオーバーレイ背景 |
| Text on Dark | `#ffffff` | ダーク面上の見出し・リンク・"CLOSE" |

### Semantic（推奨値）

実サイトに明確なエラー／成功色は確認されなかった（アクセントは深紅 `#b20000` のみ）。モノクロームのトーンを崩さない範囲で推奨する補完値:

- **Danger**: `#b20000`（ブランドの深紅を流用）
- **Success**: `#333333`（色ではなくチェックアイコン／テキストで表現）
- **Link Hover**: `#000000`（黒に寄せる）または `#b20000`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **ヒラギノ角ゴ Pro W3**（`"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro"`）→ **メイリオ / Meiryo** → `"ＭＳ Ｐゴシック" / "MS PGothic"`。OS 標準のゴシックで描画する
- **ProN ではなく Pro**: 天童木工は **Pro**（第一水準・第二水準漢字。約物が異なる）を指定。`ProN` と混同しない
- **明朝体**: 使用しない（全面ゴシック）
- weight は 400（本文・ナビ）/ 700（強調ラベル）の2段

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **Helvetica → Helvetica Neue → Arial**。Web フォントは読み込まず、システムフォントで描画する
- 製品名・カテゴリ名の英字（"Tendo Classics" "Roll Press Wood" 等）は Helvetica の端正な字面で見せる

### 3.3 font-family 指定

```css
/* 全テキスト共通 */
font-family: Helvetica, "Helvetica Neue", Arial,
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 欧文・数字は **Helvetica → Helvetica Neue → Arial**（欧文優先）
- 和文は **ヒラギノ角ゴ Pro W3 → メイリオ → MS Pゴシック**（Mac → Windows の順）
- Web フォント非依存のため**初期表示が速い**。Helvetica の規律ある字面がブランドの精度感を担う

> **preview.html での注記**: Helvetica・ヒラギノは OS 依存（Adobe/Web フォント不使用）。Mac では Helvetica + ヒラギノ角ゴ Pro、Windows では Arial + メイリオで描画される。preview では雰囲気を近づけるため、欧文 **Helvetica Neue 系**、和文フォールバックに **Noto Sans JP** を補助的に読み込んでもよい（実機は OS フォント）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-24 取得）。**本文 15px・タイトな line-height 1.3** が端正さの核。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section Heading（推奨） | Helvetica | 24〜28px | 400 | 1.4 | normal | `#333333` | セクション大見出し（実装は画像見出しが多い） |
| Sub Heading（推奨） | Helvetica | 18〜20px | 400〜700 | 1.4 | normal | `#333333` | ブロック見出し |
| Body / Nav | Helvetica / ヒラギノ | 15px | 400 | 1.3 (19.5px) | normal | `#333333` | 標準本文・ナビ・リンク |
| Emphasis Link | Helvetica | 15px | 700 | 1.3 | normal | `#333333` | "さらに古い記事を表示する" 等 |
| Menu Item | Helvetica | 15px | 400 | 2.1〜2.6 (31〜39px) | normal | `#333333` | メニューの行間広めのリスト |
| Date / Meta | Helvetica | 14px | 400 | 1.14 (16px) | normal | `#333333` | 日付（"2026.05.28"） |
| Category Label | Helvetica | 12px | 700 | 1.33 (16px) | normal | `#333333` | "Products" 等のラベル |
| Product Name (nav) | ヒラギノ | 12px | 400 | 1.33 (16px) | normal | `#333333` | "チェア＆アームチェア" 等 |
| Badge ("NEW") | Helvetica | 12px | 400 | 1.33 | normal | `#ffffff`（`#b20000` 地） | "NEW" バッジ |
| Micro | ヒラギノ | 10px | 400 | 1.7 (17px) | normal | `#333333` | 最小ラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文・ナビ (15px)**: `1.3`（19.5px。端正でタイト）
- **メニューリスト (15px)**: `2.1〜2.6`（行間を大きく開けたリスト）
- **ラベル・日付 (12〜14px)**: `1.14〜1.33`

**字間 (letter-spacing)** — 実測:
- **全テキスト `normal`**。Helvetica / ヒラギノのメトリクスにそのまま委ねる。トラッキングは加えない

**ガイドライン**:
- 本文は **15px / line-height 1.3** とやや詰めて端正に組む（広げすぎない）
- メニュー・目次は逆に **line-height 2.0 以上**で余白を開け、選びやすくする
- letter-spacing は触らず `normal`（規律は字面と余白で出す）

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 製品名（"バタフライスツール" 等）は折り返しを避け、収まらなければ 2 行で省略
- 英字製品名は `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` 等は未採用。システムフォントのメトリクスをそのまま使う

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

> 実測値。すべて **角丸ゼロ（radius 0）の直線的な枠線**が基調。

### Buttons / CTA

**Primary Outline Button（実測）** — "Online Store" / "Showroom" / "Contact"
- Background: `transparent`
- Text: `#333333`（Helvetica 15px / weight 400）
- Border: `1px solid #333333`
- Border Radius: `0px`（角丸ゼロ）
- 四角い枠線のリンクボタン。英字＋和文補足を2行で組むことが多い

**Secondary Outline Button（実測）** — メニュー内 "Tendo Classics" 等
- Background: `transparent`
- Text: `#333333`（Helvetica 15px / weight 400）
- Border: `1px solid #b6b6b6`（淡い罫線）
- Border Radius: `0px`
- セカンダリ。淡いグレー枠で控えめに

**Accent Button（推奨・少量）**
- Background: `#b20000`
- Text: `#ffffff`（weight 400〜700）
- Border: なし
- Border Radius: `0px`
- 強調が必要なときだけ深紅。多用しない（1 画面に 1 つ程度）

### Badge

**"NEW" Badge（実測）**
- Background: `#b20000`
- Text: `#ffffff`（12px / weight 400）
- Padding: `10px 13px`（実測の checkmark 系。バッジは小さく）
- Border Radius: `0px`
- 新着・選択中を示す唯一の有彩アクセント

### Inputs

**Text Input（推奨）**
- Background: `#ffffff`
- Border: `1px solid #b6b6b6`
- Border Radius: `0px`（角丸ゼロ）
- Padding: `8px 12px`
- Font: 15px / weight 400 / `#333333`
- Focus: border `#333333`（または `#b20000`）。リングは付けず罫線の濃淡で示す

### Cards / Surfaces

**Product Tile（推奨）**
- Background: `#e2e2e2`（サムネイルの地）または `#ffffff`
- Border: なし（影なし）／必要なら `1px solid #e2e2e2`
- Border Radius: `0px`
- 製品写真＋小さなラベル（製品名 12px / カテゴリ 12px / 700）。余白とグリッドで区切る
- "NEW" の製品には深紅バッジを重ねる

**Dark Menu / Overlay（実測）**
- Background: `rgba(45,45,45,0.9)`（≒ `#2d2d2d`）
- 見出し・リンク・"CLOSE": `#ffffff`
- ナビは行間を広く（line-height 2.0+）開けた白テキストのリスト

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ラベル内側・アイコン間 |
| S | 8px | 小要素間 |
| M | 16px | 要素間・グリッドのガター |
| L | 32px | カード内余白・ブロック間 |
| XL | 64px | セクション内の縦区切り |
| XXL | 96px | セクション間の大きな縦余白 |

### Container

- Max Width: `1080〜1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`
- 製品サムネイルを整然と並べる中央寄せグリッド。余白を端正にとる

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | **すべての要素（ボタン・入力・タイル・バッジ）** |

- 天童木工は**角丸を一切立てない**（radius 0）。pill・角丸は使わない

### Grid

- Columns: 推奨 12 カラム
- Gutter: 16〜24px
- 製品タイル: 4列（desktop）→ 3列（tablet）→ 2列（mobile）。整然と揃える

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素（基本フラット） |

- **天童木工は基本的に影を使わない**（フラット）
- 立体感は **白地 ↔ ダークオーバーレイ（`#2d2d2d`）のコントラスト**と、**罫線（`#333333` / `#b6b6b6`）の濃淡**で表現する
- どうしてもポップオーバー等で影が必要な場合のみ、ごく薄い `0 2px 8px rgba(0,0,0,0.08)` を推奨（多用しない）

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **`Helvetica, "Helvetica Neue", Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif`** のチェーン（欧文優先）
- 和文は **ヒラギノ角ゴ Pro（ProN ではない）**を指定する
- 本文は **15px / line-height 1.3** とやや詰めて端正に組む。メニュー・目次は逆に line-height 2.0+ で開ける
- 基調は**モノクローム**（テキスト `#333333` / 白 `#ffffff` / 罫線 `#b6b6b6`・`#e2e2e2`）
- アクセントは**深紅 `#b20000` のみ**を "NEW" バッジ・選択中・チェックに**ごく少量**使う
- ボタン・入力・タイル・バッジは**角丸ゼロ（radius 0）の直線的な枠線**
- メニュー／オーバーレイは**ダーク（`#2d2d2d` / `rgba(45,45,45,0.9)`）に反転**し白テキストを乗せる
- 写真を主役に、余白とグリッドの規律で品質感を出す

### Don't（禁止）

- **角丸（radius）を立てない**（pill・角丸 8px は天童木工らしさを壊す。すべて 0）
- letter-spacing を**加えない**（`normal`。規律は字面と余白で）
- **深紅以外の有彩色**を持ち込まない（モノクローム＋深紅 `#b20000` が基調）
- 深紅 `#b20000` を**大きな面に塗らない**（バッジ・少量のアクセントに限定）
- 本文を **16px 以上に大きくしない**（15px の端正さを保つ）／逆にメニューを詰めすぎない
- 影を**多用しない**（基本フラット。奥行きは罫線とダーク反転で）
- 和文に **ProN を指定しない**（天童木工は Pro）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。2カラム、メニュー折りたたみ |
| Tablet | 768px〜1023px | タブレット。3カラムグリッド |
| Desktop | ≥ 1024px | デスクトップ。4カラムグリッド |

### モバイル時の調整

- Section Heading: 24〜28px → 20px
- 本文 15px・line-height 1.3 は維持
- 製品タイル: 4列 → 3列 → 2列（整然と揃える）
- ナビはダークオーバーレイのフルスクリーンメニューに（line-height 2.0+ のリスト）
- 枠線ボタンは横幅いっぱいに伸ばしてもよい（radius 0 は維持）

### タッチターゲット

- 枠線ボタン: 高さ 44px 以上
- メニュー項目: 高さ 44px 以上（line-height を広く確保済み）
- 製品タイル: タイル全体をタップ可能に

### ダークモード

- 該当なし（実測時点で未対応。ただしダークオーバーレイメニューが構造的に存在する）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #333333
Background (Main): #ffffff
Accent Red: #b20000（少量のみ）

Border (strong): #333333
Border (light): #b6b6b6
Tile Grey: #e2e2e2
Overlay Dark: rgba(45,45,45,0.9) ≒ #2d2d2d
Text on Dark: #ffffff

Font: Helvetica, "Helvetica Neue", Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
（欧文優先・Web フォント非依存・和文は Pro / ProN ではない）

Section Heading: Helvetica 24-28px / weight 400 / line-height 1.4 / #333333
Body / Nav: 15px / weight 400 / line-height 1.3 / normal / #333333
Emphasis Link: 15px / weight 700 / #333333
Menu Item: 15px / weight 400 / line-height 2.1-2.6（行間広め）
Date / Meta: 14px / weight 400 / line-height 1.14
Category Label: 12px / weight 700
"NEW" Badge: 12px / #fff on #b20000
letter-spacing: normal（全域）

Primary Outline Button: transparent / text #333 / border 1px #333 / radius 0
Secondary Outline: transparent / text #333 / border 1px #b6b6b6 / radius 0
Accent Button (少量): bg #b20000 / text #fff / radius 0
Input: bg #fff / border 1px #b6b6b6 / radius 0
Product Tile: bg #e2e2e2 or #fff / radius 0 / 影なし
Radius: 0（全要素・角丸禁止）
Shadow: none（基本フラット。奥行きは罫線とダーク反転で）
```

### プロンプト例

```
天童木工（Tendo Mokko）のデザインシステムに従って、名作家具の製品紹介セクションを作成してください。
- フォント: Helvetica, "Helvetica Neue", Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
  （欧文優先。和文は ProN ではなく Pro を指定。Web フォントは読み込まない）
- 基調はモノクローム: テキスト #333333 / 背景 #ffffff / 罫線 #b6b6b6・#e2e2e2
- 本文・ナビ: 15px / weight 400 / line-height 1.3 / letter-spacing normal / color #333333（端正にやや詰めて組む）
- セクション見出し: Helvetica 24-28px / weight 400 / line-height 1.4
- メニュー・目次は逆に line-height 2.0+ で行間を広く開ける
- アクセントは深紅 #b20000 のみ。"NEW" バッジ・選択中・チェックにごく少量だけ使う（大きな面には塗らない）
- ボタン・入力・タイル・バッジはすべて角丸ゼロ（border-radius: 0）の直線的な枠線
- 主要ボタンは透明地＋1px solid #333 の四角い枠線。セカンダリは 1px solid #b6b6b6 の淡い枠線
- メニュー／オーバーレイはダーク（rgba(45,45,45,0.9)）に反転し、白テキストを乗せる
- box-shadow は使わない（フラット。奥行きは罫線の濃淡とダーク反転で表現）
- 製品写真を主役に、余白とグリッド（4列）の規律で品質感を出す
```
