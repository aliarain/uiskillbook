# DESIGN.md — graf（グラフ）

> graf / decorative mode no.3 design products Inc.（https://www.graf-d3.com/）のデザイン仕様書。
> 大阪を拠点とするクリエイティブ・コレクティブ。家具・プロダクト・食・デザイン・建築を横断して活動する。
> 実サイトの computed style 実測（2026-06-23 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ミニマルで余白の多い、ギャラリーのような editorial デザイン。**白地に黒のワードマーク／ナビ**を基調に、手描き風のイラストレーションと**極細ウェイト（100〜300）のタイポグラフィ**を組み合わせ、静かで作家性のあるトーンを作る
- **graf について**: graf（decorative mode no.3 design products Inc.）は大阪の老舗クリエイティブ・コレクティブ。家具・プロダクト・食・デザイン・建築までを横断的に手がけるため、サイトもジャンルを問わない「作品集／ポートフォリオ」的な構成になっている
- **密度**: 余白を多くとり、コンテンツを詰め込まない。本文の line-height は 1.5〜2.0 と非常に広い。極細ウェイトのラベルと大胆な太字見出しのコントラストで階層を作る
- **キーワード**: ミニマル、アート／ギャラリー、極細ウェイト、余白、モノクローム＋チャコール、作家性、editorial
- **特徴**:
  - 欧文は **Inter**、和文は **Noto Sans JP**、約物（句読点・括弧）は **YakuHanJPs**（半角化）で処理する
  - **ウェイトを表現的に使い分ける**: 繊細なラベル・本文には ultralight（100 / 200 / 300）、大型見出しには bold（700）まで。**極細ウェイトの多用が graf のシグネチャー**
  - **基本はモノクローム**: 白地に黒（`#1f1f1f` / `#000000`）。"Who we are" 等のフィーチャーセクションは**ダークチャコール（`#1f1f1f` / `#2f2f2f` / `#3f3f3f`）に反転**し、薄いグレー（`#f1f1f1` / `#bcbcbc`）のテキストを乗せる
  - **クリーム `#fffbeb`** が唯一の暖色アクセント。柔らかいパネル／ハイライトとして少量だけ使う
  - CTA・ボタンは**極端にミニマル**。ベタ塗りの目立つ CTA はほぼ無く、黒テキストリンク・極細の枠線・ごく薄いチップが基本。**抑制（restraint）そのものがアイデンティティ**
  - ダークモード非対応（実測時点。ただしダークセクションが構造的に存在する）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。基本はモノクローム（白地に黒、フィーチャーは反転）。

### Brand / Core

- **Text / Logo Primary** (`#1f1f1f`): ワードマーク・ナビ・本文の主要テキスト（白地）
- **Pure Black** (`#000000`): アクセント・図版・最も強い見出し
- **Background (Main)** (`#ffffff`): ページ背景・メインキャンバス

### Dark Feature Sections（反転セクション）

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Charcoal 1 | `#1f1f1f` | (31, 31, 31) | "Who we are" 等フィーチャー背景・最も濃い面 |
| Charcoal 2 | `#2f2f2f` | (47, 47, 47) | フィーチャーセクションの面色（中） |
| Charcoal 3 | `#3f3f3f` | (63, 63, 63) | フィーチャーセクションの面色（淡） |

### Light Text on Dark（反転セクションのテキスト）

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Light 1 | `#f1f1f1` | (241, 241, 241) | ダーク背景上の見出し・リンク・主要テキスト |
| Light 2 | `#bcbcbc` | (188, 188, 188) | ダーク背景上の本文・補足テキスト |

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Mid Grey | `#9c9c9c` | (156, 156, 156) | 補助情報・サブテキスト・タグライン |
| Cream Accent | `#fffbeb` | (255, 251, 235) | 唯一の暖色アクセント。柔らかいパネル・ハイライト |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード |

### Overlays

- **Light Chip / Overlay**: `rgba(255, 255, 255, 0.05)` — ダーク背景上のナビチップ・カテゴリラベルの極薄背景
- **Dark Overlay**: `rgba(0, 0, 0, 0.04)` — 白地上のごく薄い面・hover の地

### Semantic（推奨値）

実サイトには明確なエラー／成功色は確認されなかった。モノクロームのトーンを崩さない範囲で推奨する補完値:

- **Danger**: `#c0392b`（くすんだレッド。彩度を抑えてトーンに馴染ませる）
- **Success**: `#3f3f3f` または `#1f1f1f`（チェック等は色ではなくテキスト／アイコンで表現する）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **Noto Sans JP**（Google Fonts）。weight 100 / 300 / 400 / 500 / 700 を表現的に使う
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- **約物処理**: **YakuHanJPs**（半角約物）でフォントチェーンの先頭に置き、句読点・括弧を半角詰めにする

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **Inter**（Google Fonts）。ultralight 100 から bold 700 まで全域を使う
- Inter / Noto Sans JP はいずれも Google Fonts で配信されているため、**preview.html でも実フォントを再現できる**（代替フォント注記は不要）

### 3.3 font-family 指定

```css
/* 全テキスト共通 */
font-family: YakuHanJPs, Inter, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- 先頭の **YakuHanJPs** が約物（、。「」（）等）だけを半角でレンダリングする
- 欧文・数字は **Inter**、和文本体は **Noto Sans JP** が担う
- いずれも未読み込み時は `sans-serif` に落ちる

> **代替フォント注記は不要**: Inter・Noto Sans JP は Google Fonts で配信されているため、preview.html では実フォントをそのまま読み込む。
> ```
> https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap
> ```

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-23 取得）。**極細（100）〜太字（700）の広いウェイトレンジが核心**。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero / Section H2 | Inter | 32.4px | 700 | 1.1 (36px) | normal | `#1f1f1f`（白地）/ `#bcbcbc`（ダーク） | セクション大見出し |
| H3 (large) | Inter | 27px | 700 | 1.2 | normal | `#1f1f1f` | サブ見出し |
| H3 (small) | Inter | 18px | 500〜600 | 1.4 | normal | `#1f1f1f` / `#f1f1f1` | カードタイトル・小見出し |
| Small Label (H1-style) | Inter | 12.6px | 200 | 1.43 (18px) | normal | `#f1f1f1` / `#1f1f1f` | ultralight の極小ラベル |
| Body | Inter / Noto Sans JP | 14.4px | 300〜400 | ≈2.0 (32.4px) | normal | `#1f1f1f` / `#bcbcbc` | 標準本文。非常にエアリー |
| Body (compact) | Inter / Noto Sans JP | 14.4px | 300〜400 | 1.5 (21.6px) | normal | `#1f1f1f` | 詰めた本文 |
| Lead (ultralight) | Inter | 12.6px | 100 | 1.5 | normal | `#9c9c9c` | 最も繊細なリード・タグライン |
| Link | Inter | 14.4〜18px | 300〜400 | 1.5 | normal | `#1f1f1f` / `#f1f1f1` | テキストリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14.4px)**: `2.0`（非常に広い）／ 詰めた場合 `1.5`
- **小ラベル (12.6px)**: `1.43〜1.5`
- **見出し H2 (32.4px)**: `1.1`（タイト）
- **見出し H3 (27px)**: `1.2`
- **小見出し H3 (18px)**: `1.4`

**字間 (letter-spacing)** — 実測:
- **全テキスト `normal`**。Inter / Noto Sans JP のメトリクスにそのまま委ねる。トラッキングを加えない

**ガイドライン**:
- **ウェイトでメリハリを作る**: ラベル・リードは 100〜300 の極細、見出しは 700。サイズより**ウェイト差**で階層を表現する
- 本文の line-height は **1.5〜2.0** と広めを保つ（余白の多いトーンに合わせる）
- letter-spacing は触らず `normal` のまま（graf のミニマルさは字間ではなく余白で出す）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
```

- **YakuHanJPs** により約物が半角詰めになるので、句読点・括弧周りの不自然な空きが抑えられる
- 英字ラベル（"Furniture / Products" 等）は `white-space: nowrap` で改行させない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 約物の詰めは **YakuHanJPs フォント自体**が担うため、`palt` の明示有効化は不要（実測でも未採用）
- Inter のメトリクスをそのまま活かす

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

> graf の UI は**極端に低彩度・低クローム**。ベタ塗りの大きな CTA は存在しない。以下は実測値＋それに整合する推奨セット。

### Buttons / CTA

**Nav / Category Chip（実測）** — "Furniture / Products" 等
- Background: `rgba(255, 255, 255, 0.05)`（ダーク背景上）
- Text: `#f1f1f1`（Inter / Noto stack）
- Border: なし（または `0px solid`）
- Border Radius: `1.8px`（≒2px、ほぼ角）
- Padding: `3.6px 9px`
- Font: 12.6〜14.4px / weight 200〜300
- 極めて控えめ。ほぼ塗りのないチップ

**Primary Text Link（白地・推奨）**
- Background: `transparent`
- Text: `#1f1f1f`
- Border-bottom（hairline）: `1px solid #1f1f1f`
- Padding: `0 0 2px`
- Font: 14.4px / weight 400
- 黒テキスト＋極細アンダーラインが基本の「ボタン」

**Solid Button（強調用・推奨）** — 強調が必要なときだけ
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: なし
- Border Radius: `2px`（ほぼ角）
- Padding: `10px 24px`
- Font: 14.4px / weight 400〜500
- 多用しない。1 画面に 1 つ程度

**Outline Button（推奨）**
- Background: `transparent`
- Text: `#1f1f1f`
- Border: `1px solid #1f1f1f`（hairline）
- Border Radius: `2px`
- Padding: `10px 24px`

> **要点**: 実サイトは「ほぼ見えない／低クローム」なインタラクションを好む。派手なベタ塗り CTA は graf らしさを壊す。

### Inputs

**Text Input（推奨）**
- Background: `transparent` または `rgba(0,0,0,0.04)`
- Border: なし／`1px solid #1f1f1f`（下線のみも可）
- Border Radius: `2px`
- Padding: `8px 0`（下線スタイル）/ `8px 12px`（枠スタイル）
- Font: 14.4px / weight 300〜400

### Cards / Surfaces

**Work Card（推奨）**
- Background: `#ffffff`（白地）
- Border: なし（影なし）
- 画像＋極細ラベルのみ。罫線・影で囲わず**余白で区切る**
- タイトル: 18px / weight 500、キャプション: 12.6px / weight 200 / `#9c9c9c`

**Cream Panel**
- Background: `#fffbeb`
- Padding: `40px`
- Border Radius: なし／`2px`
- 唯一の暖色面。引用・ハイライト・特集に少量だけ使う

### Feature Section（ダーク反転）

- Background: `#1f1f1f`（または `#2f2f2f` / `#3f3f3f`）
- 見出し: `#bcbcbc` / `#f1f1f1`、本文: `#bcbcbc`
- ナビチップ: `rgba(255,255,255,0.05)` 背景 + `#f1f1f1` テキスト
- 白地セクションとの**コントラストそのものが立体感**（影は使わない）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド／余白多め）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ラベル内側・アイコン間 |
| S | 8px | テキスト行間補助・小要素間 |
| M | 16px | 要素間・ナビリンク間 |
| L | 32px | カード内余白・セクション内ブロック間 |
| XL | 64px | セクション間の縦余白 |
| XXL | 128px | ヒーロー・フィーチャー上下の大きなゆとり（`pt-32` 等） |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `20px` / desktop `32〜48px`
- 中央寄せのコンテンツと、左寄せ／非対称な配置を混在させる

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | 画像・パネル・面（基本は角） |
| XS | 1.8〜2px | チップ・ボタン・入力（ほぼ角の最小丸み） |

- graf は**ほぼ角**（radius を立てない）。pill / 大きな丸みは使わない

### Grid

- Columns: 推奨 12 カラム（実装は Flexbox / CSS Grid）
- Gutter: 24〜32px
- 画像・イラスト先行の**非対称グリッド**。余白を大胆にとる
- ワークカード: 3列（desktop）→ 2列（tablet）→ 1列（mobile）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素（基本フラット） |

- **graf は基本的に影を使わない**（フラット）
- 立体感・奥行きは **白地 ↔ ダークチャコール（`#1f1f1f`〜`#3f3f3f`）のセクションコントラスト**と、**クリーム `#fffbeb` のパネル**で表現する
- どうしてもポップオーバー等で影が必要な場合のみ、ごく薄い `0 2px 8px rgba(0,0,0,0.08)` を推奨（多用しない）

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **`YakuHanJPs, Inter, "Noto Sans JP", sans-serif`** のチェーンで統一する
- **ウェイトでメリハリを作る**: ラベル・リードは 100〜300 の極細、見出しは 700
- 本文の line-height は **1.5〜2.0** と広めを保ち、余白を大胆にとる
- 基本は**白地に黒（`#1f1f1f`）**。フィーチャーセクションは**ダークチャコールに反転**し `#f1f1f1` / `#bcbcbc` を乗せる
- 暖色は **クリーム `#fffbeb`** のみ、少量のパネル／ハイライトに使う
- ボタン・CTA は**低クローム**に保つ（黒テキストリンク・極細枠・薄いチップ）。強調が必要なときだけ `#1f1f1f` ソリッドを 1 つ
- radius は **0〜2px**（ほぼ角）。立体感は影ではなくセクションコントラストで出す

### Don't（禁止）

- letter-spacing を**加えない**（`normal` のまま。字間ではなく余白で間（ま）を作る）
- **派手なベタ塗りの大型 CTA** を置かない（graf の抑制されたトーンを壊す）
- **pill（大きな丸み）や強い角丸**を使わない（radius は 0〜2px）
- **影を多用しない**（基本フラット。奥行きは白／チャコールのコントラストで）
- クリーム以外の**彩度の高い色**を持ち込まない（モノクローム＋チャコールが基調）
- 本文に **`line-height: 1.4` 以下**を使わない（詰まりすぎて静謐さが失われる）
- 見出しを**細いウェイトだけ**で済ませない（ラベルは細く、見出しは 700 でコントラストを作る）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム、ナビ折りたたみ |
| Tablet | 768px〜1023px | タブレット。2カラムグリッド |
| Desktop | ≥ 1024px | デスクトップ。3カラムグリッド |

### モバイル時の調整

- Hero / H2: 32.4px → 24〜26px（weight 700 は維持）
- H3 (large): 27px → 20px
- 本文 14.4px・line-height 2.0 は維持（詰める場合のみ 1.6）
- ワークカード: 3列 → 2列 → 1列
- セクション間余白は XXL → XL に縮める

### タッチターゲット

- テキストリンク: クリック領域 最小 44px 高さを確保
- ソリッド／アウトラインボタン: 高さ 40px 以上（padding `10px 24px`）
- ナビチップ: 高さ 32px 以上

### ダークモード

- 該当なし（実測時点で未対応。ただしダークフィーチャーセクションが構造的に存在する）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text / Logo Primary: #1f1f1f
Pure Black: #000000
Background (Main): #ffffff

Dark Feature BG: #1f1f1f / #2f2f2f / #3f3f3f
Light on Dark (heading/link): #f1f1f1
Light on Dark (body): #bcbcbc
Mid Grey (sub): #9c9c9c
Cream Accent (panel): #fffbeb

Light Chip / Overlay: rgba(255,255,255,0.05)
Dark Overlay: rgba(0,0,0,0.04)

Font: YakuHanJPs, Inter, "Noto Sans JP", sans-serif
Google Fonts: Inter wght@100;200;300;400;500;600;700 / Noto Sans JP wght@100;300;400;500;700

Hero / Section H2: Inter 32.4px / weight 700 / line-height 1.1 / normal / #1f1f1f
H3 large: Inter 27px / weight 700 / line-height 1.2
H3 small: Inter 18px / weight 500-600 / line-height 1.4
Small Label (ultralight): Inter 12.6px / weight 200 / line-height 1.43
Body: 14.4px / weight 300-400 / line-height 2.0 (compact 1.5) / normal / #1f1f1f
Lead (ultralight): Inter 12.6px / weight 100 / #9c9c9c
letter-spacing: normal（全域）

Nav Chip: bg rgba(255,255,255,0.05) / text #f1f1f1 / radius 1.8px / padding 3.6px 9px
Primary action: 黒テキストリンク + hairline underline（低クローム）
Solid (強調用のみ): bg #1f1f1f / white / radius 2px / padding 10px 24px
Radius: 0-2px（ほぼ角・pill 禁止）
Shadow: none（基本フラット。奥行きは白/チャコールのコントラストで）
```

### プロンプト例

```
graf（decorative mode no.3 design products Inc.）のデザインシステムに従って、
クリエイティブ・コレクティブの作品紹介セクションを作成してください。
- フォント: YakuHanJPs, Inter, "Noto Sans JP", sans-serif（Google Fonts の Inter + Noto Sans JP を読み込む）
- ウェイトを表現的に使う: ラベル・リードは weight 100〜300（極細）、見出しは weight 700
- セクション大見出し H2: Inter 32.4px / weight 700 / line-height 1.1 / letter-spacing normal / color #1f1f1f
- 小見出し H3: 18px / weight 500-600 / line-height 1.4
- 極小ラベル: 12.6px / weight 200（ultralight）/ color #9c9c9c
- 本文: 14.4px / weight 300-400 / line-height 2.0 / letter-spacing normal / color #1f1f1f
- 基本は白地（#ffffff）に黒（#1f1f1f）。"Who we are" などのフィーチャーセクションは
  ダークチャコール背景（#1f1f1f / #2f2f2f / #3f3f3f）に反転し、#f1f1f1 / #bcbcbc のテキストを乗せる
- 暖色アクセントはクリーム #fffbeb のみ。引用やハイライトに少量だけ使う
- ナビ／カテゴリラベルは低クロームのチップ（bg rgba(255,255,255,0.05) / radius 1.8px / padding 3.6px 9px）
- CTA は低クロームに保つ: 黒テキストリンク + 極細アンダーライン。強調が必要なときだけ #1f1f1f ソリッド（radius 2px）
- border-radius は 0〜2px（ほぼ角）。pill・大きな丸みは使わない
- letter-spacing は normal（字間を触らず、余白でリズムを作る）
- box-shadow は使わない（フラット。奥行きは白とチャコールのセクションコントラストで表現）
- 余白を大胆にとり、画像・イラスト先行の非対称グリッドで構成する
```
