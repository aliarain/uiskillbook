# DESIGN.md — 東京茶寮（Tokyo Saryo）

> 東京茶寮（Tokyo Saryo / https://www.tokyosaryo.jp/）のデザイン仕様書。
> 世界初のハンドドリップ日本茶専門店（東京・三軒茶屋）。煎茶をハンドドリップで一杯ずつ淹れる、静かな喫茶体験を提供する。
> 最大の特徴は **温かみのあるクリーム地（#f3f0e0）の余白** と **くすんだゴールド（#b3873d）のアクセント**、そして **欧文セリフ（Cardo）× 和文ゴシック** を組み合わせた端正な editorial デザイン。
> 角丸はボタンを含め基本 0px（直角）で、和の上品さとミニマルを両立する。
> 実サイト（Shopify ベース）の computed style 実測（2026-06-28 取得）に基づく。
> ※ 欧文 Cardo・Source Sans は Google Fonts で表示可能。和文ヒラギノ角ゴは Web 表示不可のため preview.html では Noto Sans JP で代替する。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **クリーム/ベージュ地（#f3f0e0）× ダークグレーの墨（#333333）** を基調にした、静謐でミニマルな editorial デザイン。色数を絞り、余白・写真・上質なタイポグラフィで「一服の静けさ」を語る。和の落ち着きと欧文セリフの気品を掛け合わせる
- **東京茶寮について**: 三軒茶屋にある、世界初のハンドドリップ日本茶専門店。煎茶を一杯ずつ丁寧に淹れる体験そのものを商品にしている。サイトもその所作と同じく、無駄を削いだ静かなトーンで構成される
- **密度**: 低密度。大きな余白、ゆったりした行送り、抑制された文字量。プロダクト（茶葉・喫茶体験）と写真を主役にする gallery / editorial 寄りの構成
- **キーワード**: クリーム #f3f0e0、くすんだゴールド #b3873d、Cardo セリフ、和文ゴシック、角丸0、静謐、ミニマル、editorial
- **特徴**:
  - 基調は **温かいクリーム #f3f0e0 × 墨グレー #333333**。純白・純黒の冷たさを避け、わずかに温度のある色で和の柔らかさを出す
  - **アクセントは唯一、くすんだゴールド/真鍮 #b3873d**。小見出し・強調・ラベルにのみ使い、真鍮の急須や茶道具を思わせる上品な差し色とする
  - 欧文（Latin）は **Cardo**（エレガントなセリフ）を見出し・本文すべてに使用。和文は **ヒラギノ角ゴ ProN（ゴシック）**。「欧文セリフ × 和文ゴシック」という非対称の組み合わせが端正な印象を生む
  - 見出しのウェイトは控えめ（**400**）。太字で主張せず、サイズ・余白・セリフの字形で階層を作る
  - CTA は **スレートブルーグレー #556677 の塗り＋白文字**、border 1px #445566、**角丸 0px（直角）**。茶寮の落ち着いた色調に馴染む唯一の有彩ボタン
  - リンクは水色寄りのブルー #3388bb。本文の墨グレーから浮かせて導線を示す
  - 全体に **角丸は 0px**。ボタンも入力欄も直角で、端正でシャープな面構成を保つ

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。基調はクリーム×墨グレー、差し色はくすんだゴールド。すべて hex 表記。

### Primary（ブランドカラー）

- **Background (Cream)** (`#f3f0e0`): ページ背景・メインキャンバス（出現最多）。温かみのあるクリーム/ベージュ。和紙のような落ち着いた地色
- **Accent (Brass Gold)** (`#b3873d`): ブランドの差し色。くすんだゴールド/真鍮。小見出し（h4）・強調テキスト・ラベルに使用。茶道具の真鍮を思わせる上品なアクセント
- **CTA (Slate Blue-Grey)** (`#556677`): 主要 CTA ボタンの地色（白文字）。落ち着いたスレートブルーグレー
- **CTA Border** (`#445566`): CTA ボタンの枠線（1px）。地色よりわずかに濃いトーン

### Semantic（意味的な色）

- **Link** (`#3388bb`): リンク色。水色寄りのブルー（強調リンク／本文中リンク）
- **Link (Default)** (`#0000ee`): ブラウザ既定リンク（一部の素の `<a>`）。基本は #3388bb に揃える
- **Error**（推奨）(`#c0392b`): エラー・必須警告（実サイトに明示色がないため和のトーンに合わせた推奨値）

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 見出し（h2/h3）・本文主のテキスト色。墨に近いダークグレー
- **Text Strong** (`#222222`): 濃いめの本文・強調本文
- **Text Muted** (`#555555`): 補助テキスト・キャプション・リスト
- **Text / Link Base** (`#000000`): 素のリンク・ナビ等の基本テキスト
- **Surface (Cool)** (`#f4f6f8`): モーダル・告知（クッキー同意等）の面。クリームよりわずかに青みのある明面
- **Surface (Grey)** (`#efefef`): 同意ボタン等の薄いグレー面
- **On Accent / CTA** (`#ffffff`): CTA・アクセント面の上のテキスト

---

## 3. Typography Rules

> 実サイトは欧文（Latin）に **Cardo**（セリフ）、UI 一部に **Source Sans Pro**、和文に **ヒラギノ角ゴ ProN**（ゴシック）を使う。
> Cardo・Source Sans Pro は Google Fonts で表示可能。和文ヒラギノは Web 表示不可のため preview.html では Noto Sans JP で代替する。

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ ProN（`Hiragino Kaku Gothic ProN`） / ヒラギノ角ゴ Pro W3（`ヒラギノ角ゴ Pro W3` / `Hiragino Kaku Gothic Pro`）
- **明朝体**: 使用しない（和文は一貫してゴシック。欧文セリフ × 和文ゴシックの組み合わせが東京茶寮の核）

### 3.2 欧文フォント

- **セリフ**: Cardo（`cardo`）— エレガントなオールドスタイルセリフ。見出し・本文の Latin グリフに使用。フォールバックに Georgia
- **サンセリフ**: Source Sans Pro（`source sans pro` / `Source Sans Pro`）— 一部の UI・リンク・補助テキストに使用

### 3.3 font-family 指定

```css
/* 見出し・本文（Latin はセリフ、和文はゴシック） */
font-family: cardo, georgia, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Hiragino Kaku Gothic ProN", sans-serif;

/* UI・一部リンク・補助テキスト */
font-family: "source sans pro", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif;

/* body（和文ゴシック単独指定の箇所） */
font-family: "Hiragino Kaku Gothic ProN";
```

**フォールバックの考え方**:
- **欧文優先型**。Cardo（または Source Sans Pro）を先頭に置き、Latin グリフの印象を最優先する。和文はヒラギノ角ゴに委ねる
- 欧文セリフ（Cardo）の字形が見出し・本文の英字に効き、日本語部分はヒラギノ角ゴのゴシックで端正に表示される
- 最後に generic family（sans-serif）を置く

**preview.html での代替フォント**:
- Cardo → **Cardo**（Google Fonts に同名で存在。実サイトと同一書体をそのまま使用）
- Source Sans Pro → **Source Sans 3**（旧 Source Sans Pro。Google Fonts）
- ヒラギノ角ゴ ProN → **Noto Sans JP**（Web 表示可能なゴシック代替。weight 400 を基準に）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 (H2) | Cardo / Hiragino | 44px | 400 | 1.2 (52.8px) | normal | セクション大見出し（#333333） |
| Lead / Quote | Cardo / Hiragino | 35.2px | 400 | 1.2 (42.24px) | normal | 大きめの引用的テキスト（#333333） |
| Sub-Lead | Cardo / Hiragino | 26.4px | 400 | 1.2 (31.68px) | normal | リード文（#333333） |
| Heading 3 | Cardo / Hiragino | 24px | 400 | 1.45 (34.8px) | normal | 小見出し（#333333） |
| Heading 4 (Accent) | Cardo / Hiragino | 20px | 400 | 1.45 (29px) | normal | 小見出し・ラベル（#b3873d ゴールド） |
| Body | Cardo / Hiragino | 14px | 400 | 1.45 (20.3px) | normal | 本文・リンク（#333333 / #000000） |
| UI / Link | Source Sans | 16px | 400/700 | 1.0〜1.45 | normal | UI ラベル・リンク（#0000ee / #3388bb） |
| Label (Gold) | Cardo / Hiragino | 14px | 400 | 1.5 (21px) | normal | ゴールドの小ラベル（#b3873d） |
| Caption | Cardo / Hiragino | 12px | 400 | 1.45 (17.4px) | normal | キャプション・注記（#222222 / #b3873d） |

- 見出し・本文ともウェイトは **400** が基調。強調 CTA・リンクの一部のみ 700
- letter-spacing はすべて normal（実測 ls=normal）。和文を詰めず、ゆったり読ませる

### 3.5 行間・字間

- **本文の行間 (line-height)**: 約 1.45（14px → 20.3px）。日本語本文としてはやや締まった行送りで、editorial の端正さを出す
- **見出しの行間**: 大見出し（44px / 35.2px / 26.4px）は約 1.2、中見出し（24px / 20px）は約 1.45
- **本文の字間 (letter-spacing)**: normal（0em）
- **見出しの字間**: normal（0em）

**ガイドライン**:
- 本文は line-height 1.45 を基準にする。長文の読み物（journal 記事）では 1.6〜1.8 まで広げてよい
- letter-spacing は和欧ともに normal を維持し、Cardo セリフの字形と字間をそのまま活かす
- 欧文見出しは Cardo のセリフが映えるよう、過度な字詰めをしない

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は未適用 */
```

- 実測では `font-feature-settings: normal`。**palt は適用していない**
- 和文はゴシックで字幅をそのまま使い、字間 normal で素直に組む

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Primary（主要 CTA）**
- Background: `#556677`（スレートブルーグレー）
- Text: `#ffffff`
- Border: 1px solid `#445566`
- Padding: 12px 18px
- Border Radius: `0px`（角丸なし・直角）
- Font Size: 16px
- Font Weight: 700
- Font Family: `"source sans pro", "ヒラギノ角ゴ Pro W3", sans-serif`
- 例: 「予約の日程をみる」

**Secondary（薄グレー・同意系）**
- Background: `#efefef`
- Text: `#000000`
- Border: なし（border 0）
- Padding: 8px 16px（実測の小ボタンは 0 のため、汎用に padding を補う）
- Border Radius: `0px`
- Font Size: 12px
- 例: 「承諾する」

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#d8d3bf`（クリーム地に馴染むベージュ寄りグレー枠／推奨）
- Border (focus): 1px solid `#b3873d`（ゴールドでフォーカスを示す／推奨）
- Border Radius: `0px`
- Padding: 12px 14px
- Font Size: 14px
- Font Family: `cardo, georgia, "ヒラギノ角ゴ Pro W3", sans-serif`

### Cards

- Background: `#ffffff` または クリーム面 `#f3f0e0`
- Border: なし、または 1px solid `#e3ddc8`（クリームより一段濃い枠／推奨）
- Border Radius: `0px`
- 写真を大きく、テキスト（小見出し・本文）は下に控えめに配置
- 余白を広く取り、影は使わない（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 約 1080〜1200px（ゆったりした editorial グリッド）
- Padding (horizontal): 20〜40px

### Grid

- Columns: 記事・商品グリッドは 2〜3 カラム（デスクトップ）
- Gutter: 24〜40px
- 大きな余白で各要素を孤立させ、静かな間合いを作る

---

## 6. Depth & Elevation

> 東京茶寮はほぼフラット。影を多用せず、クリーム地 #f3f0e0 と明面 #ffffff / #f4f6f8 の色差で階層を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | セクション・カード（基本フラット） |
| 1 | `0 1px 2px rgba(0,0,0,0.06)` | ドロップダウン・控えめな浮き |
| 2 | `0 8px 24px rgba(0,0,0,0.10)` | モーダル・クッキー同意（#f4f6f8 面） |

---

## 7. Do's and Don'ts

### Do（推奨）

- 背景はクリーム #f3f0e0、テキストは墨グレー #333333 を使い、純白・純黒の冷たさを避ける
- アクセントはくすんだゴールド #b3873d 一色に絞り、小見出し・ラベル・強調にのみ使う
- 欧文（Latin）は Cardo のセリフ、和文はヒラギノ角ゴのゴシックを組み合わせる
- 角丸は 0px に保ち、ボタン・入力欄を直角の端正な面にする
- 余白を大きく取り、写真とタイポグラフィで静かな間合いを作る
- letter-spacing は normal、palt は使わず、素直にゆったり組む

### Don't（禁止）

- 鮮やかな多色やグラデーションを足さない（静謐な世界観が崩れる）
- 和文を明朝にしない（東京茶寮は和文ゴシック。欧文だけがセリフ）
- 見出しを極太（700/800）にしない（基調ウェイトは 400）
- ボタンを pill（radius 9999px）や大きな角丸にしない（直角 0px が基本）
- ゴールド #b3873d を広い面の塗りに使わない（あくまで点の差し色）
- テキストに純黒 #000000 を多用しない（本文は #333333 の墨グレー）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | 1 カラム、ナビはドロワー |
| Tablet | 750–989px | 1〜2 カラム |
| Desktop | ≥ 990px | 2〜3 カラムの editorial グリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- 大見出し（44px）はモバイルで 28〜32px 程度に縮小する
- 本文はモバイルでも 14px を基準に保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary (Accent): #b3873d (Brass Gold)
Background: #f3f0e0 (Cream)
Text: #333333 (墨グレー)
CTA: #556677 (Slate Blue-Grey) / 白文字 / border #445566 / radius 0
Link: #3388bb
Font (Latin serif × 和文ゴシック): cardo, georgia, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", sans-serif
  /* 代替: "Cardo", "Source Sans 3", "Noto Sans JP" */
Body Size: 14px
Line Height: 1.45
Heading: weight 400 / letter-spacing normal / palt off
Radius: 0px（直角）
```

### プロンプト例

```
東京茶寮のデザインシステムに従って、煎茶の紹介ページを作成してください。
- 背景: #f3f0e0（クリーム）、テキスト: #333333（墨グレー）。純白・純黒は使わない
- アクセント: #b3873d（くすんだゴールド）を小見出し・ラベルにのみ使う
- フォント: cardo, georgia, "ヒラギノ角ゴ Pro W3", sans-serif（代替 Cardo + Noto Sans JP）。欧文はセリフ、和文はゴシック
- 見出しは weight 400、letter-spacing normal、palt なし
- CTA は #556677 の塗り＋白文字、border 1px #445566、角丸 0px（直角）
- リンクは #3388bb。本文 line-height は 1.45
- 余白を大きく取り、写真とタイポグラフィで静かな editorial を作る。影なしのフラット
```
