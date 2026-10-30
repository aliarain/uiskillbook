# DESIGN.md — BAUM (バウム)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://www.baumjapan.com/
> BAUM（バウム）は資生堂の「樹木との共生」を掲げるボタニカル スキンケアブランド。
> 木のぬくもりを思わせるパーチメント色の下地に、黒のテキストと角ゼロの罫でエディトリアルに組む。
> 実測はブランドサイト トップ / products / philosophy に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 樹皮や再生木材を思わせる温かいオフホワイト（パーチメント）を下地に、純黒のテキストと極細の罫だけで組む静かなエディトリアル。写真とゆとりある余白が主役で、UI は角丸ゼロ・装飾ゼロに徹する
- **密度**: 低〜中密度。小さめの文字（13〜14px 基調）を広い行間で置き、面ではなく余白と罫で領域を分ける
- **キーワード**: ボタニカル / パーチメント / エディトリアル / ミニマル / 温かみ
- **形状言語**: すべての面・ボタン・入力欄が `border-radius: 0`。CTA は 1px の黒罫で囲むアウトライン型が基本で、面塗りは黒のみに限定する。丸みや影で飾らず、直線と罫で端正に見せる
- **書体の性格**: 欧文はニュートラルなグロテスク（"Basel"）を、ナビ・見出しに **字間 0.08em** ほど開いて据える。和文は Noto Sans JP。全体に文字を小さく・字間を少し開いて、静けさと余白感を演出する

---

## 2. Color Palette & Roles

<!-- 実サイトの computedStyles / interactive / uniqueBackgrounds / pageBackground 実測に基づく。基調は「温かいパーチメント下地＋純黒」 -->

### Base（下地）

- **Background** (`#f5f3ed`): ページ全体の下地。木肌を思わせる温かいオフホワイト＝パーチメント（rgb(245,243,237)）。`body` の実測背景で、トップ全体を支配する
- **Surface** (`#ffffff`): 商品カード・モーダルなど、下地から一段持ち上げる面。純白
- **Ink Black** (`#000000`): 見出し・本文・罫・CTA 面の基調色。純黒

### Botanical Accent（植物の差し色）

- **Warm Gray** (`#686260`): 温かみのあるグレー（rgb(104,98,96)）。補足テキスト・キャプション・薄い面に
- **Bark Brown** (`#604a23`): 樹皮を思わせる深いブラウン。写真上のオーバーレイや限定的なアクセントに（実測は透過 `rgba(96,74,35,0.4)`）
- **Sage Gray** (`#b2b2a6`): 緑みを含むセージ／オリーブグレー。区切り面や淡い背景に（実測は透過 `rgba(178,178,166,0.6)`）

### Text（文字色）

- **Text Primary** (`#000000`): 見出し・本文。純黒
- **Text Muted** (`#686260`): 注釈・補足・フッターの小テキスト

### 色に関する設計思想

- 基調は「温かいパーチメント下地 `#f5f3ed`」「純黒の文字と罫 `#000000`」「白の面 `#ffffff`」の3色
- 差し色はすべて植物・樹木由来の低彩度カラー（バーク／セージ／ウォームグレー）。彩度の高い色は面で使わない
- ブランドの世界観は「色」ではなく「余白・写真・角ゼロの罫」で作る。色数を絞ることで温かさと静けさを保つ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP を基本に、`system-ui` → `-apple-system`（ヒラギノ角ゴ）にフォールバック
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ（見出し・ラベル）**: **Basel**（ニュートラルなネオグロテスク。可変ウェイトで実測 430 前後）。ロゴ・欧文見出し・ナビラベルに使う
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: Basel は Web ライセンスフォントのため、ローカル・preview.html では表示できない。
> - Basel → **Inter** / Helvetica Neue 系（ニュートラルなグロテスクで印象が近い）
> - 和文 Noto Sans JP は Google Fonts で直接読み込めるため preview はそのまま使う

### 3.3 font-family 指定

```css
/* 本文・UI（和文） */
font-family: "Noto Sans JP", system-ui, -apple-system, sans-serif;

/* 欧文見出し・ナビラベル */
font-family: "Basel", "Helvetica Neue", Arial, sans-serif;
```

**フォールバックの考え方**:
- 和文 UI は Noto Sans JP を先頭に、OS のシステムフォントへフォールバック
- 欧文の見出し・ラベルは Basel を独立して指定し、Latin グリフを Basel で拾う
- 見出し・本文ともウェイトは 400/430（≒Regular）が中心。階層はサイズと字間で作る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | Basel | 38px | 430 | 1.0 | 0.013em | 欧文の大見出し（BAUM MEMBERSHIP 等） |
| Heading (EN) | Basel | 26px | 430 | 1.0 | 0.018em | セクション見出し（Instagram 等） |
| Nav Label (EN) | Basel | 16px | 400 | 1.0 | 0.08em | グローバルナビ（PRODUCTS / NEWS 等） |
| Lead (JP) | Noto Sans JP | 18px | 400 | 1.5 | 0.027em | 導入文・リード |
| Body (JP) | Noto Sans JP | 13–14px | 400 | 1.7 | 0.034em | 本文（philosophy 等） |
| Caption (JP) | Noto Sans JP | 12px | 400 | 1.5 | 0.04em | 注釈・フッター |
| Micro Label (JP) | Noto Sans JP | 10px | 400 | 1.0 | normal | ナビ補足（「商品情報」「一覧」等） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.7`（13px 本文で 22px）。日本語の可読性のため広めに取る
- **リードの行間**: `1.5`
- **欧文見出しの行間**: `1.0`（サイズ＝行高で詰める）
- **本文の字間 (letter-spacing)**: `0.48px`（14px で ≒`0.034em`）。全体にごくわずかに開く
- **欧文ナビラベルの字間**: **`1.28px`（16px で ≒`0.08em`）** と大きめに開き、余白感を出す

**ガイドライン**:
- 和文本文は 13〜14px と小さめだが、`line-height: 1.7` を確保して読ませる
- 欧文ラベル（PRODUCTS / NEWS / ALL 等）は字間 0.08em ほど開くのがこのブランドの流儀
- 全体を通してウェイトは太らせず、サイズと字間で階層を作る

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は使わない */
```

- 実測では `font-feature-settings: normal`。palt は使わず、字間は `letter-spacing` で調整する
- 小さな文字を字間わずかに開いて置く設計のため、和文の詰め（palt）よりトラッキングを優先する

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

すべて `border-radius: 0`。ボタンは黒罫のアウトラインが基本、面塗りは黒のみ。

### Buttons

**Primary（面塗り・黒）**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Border Radius: `0px`
- Padding: `8px 16px`
- Font: 12–14px / weight 400 / letter-spacing 0.03em
- 例: 「ログイン」

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Border Radius: `0px`
- Padding: `8px 16px`（幅広リンクは `16px 0`）
- Font: 14px / weight 400
- 例: 「新規メンバー登録」「商品一覧」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #000000`（細い黒罫、または下線）
- Border (focus): `1px solid #000000`（罫を維持し、下線を濃くする）
- Border Radius: `0px`
- Padding: `12px 14px`
- Font Size: 14–16px

### Cards

- Background: `#ffffff`（または下地のパーチメントのまま）
- Border: なし、または `1px solid #000000` の細罫
- Border Radius: `0px`
- Shadow: なし（フラット）
- 商品カードは大判写真＋商品名＋容量／価格の最小構成。角丸ゼロで端正に

---

## 5. Layout Principles

### Spacing Philosophy

温かいパーチメントの余白を広く取り、大判の商品・樹木写真を主役に据える。要素は角丸ゼロの細罫でゆるやかに区切り、密度を上げすぎない。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 48px |
| XL | 72px |
| XXL | 120px |

### Container

- Max Width: 1280px（キービジュアルはフルブリード）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（商品一覧は 2〜4 カラム）
- Gutter: 24–40px
- 写真をゆったり配置し、キャプションは短く小さく添える

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。ほぼ全ての面はフラット |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・カートの最小限の浮き |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・ナビのオーバーレイ |

- 影はほぼ使わない。奥行きは「余白」「写真」「細罫」で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 下地は温かいパーチメント `#f5f3ed`、文字と罫は純黒 `#000000`、面は白 `#ffffff` の3色に絞る
- 差し色は植物・樹木由来の低彩度カラー（バークブラウン `#604a23` / セージグレー `#b2b2a6` / ウォームグレー `#686260`）に限定する
- すべての面・ボタン・入力欄を `border-radius: 0` にする
- CTA は 1px 黒罫のアウトライン型を基本にし、面塗りは黒だけに絞る
- 欧文ラベル（PRODUCTS / NEWS 等）は字間 0.08em ほど開く。和文本文は 13〜14px でも line-height 1.7 を確保する
- 欧文は Basel（→ Inter 代替）、和文は Noto Sans JP で組む

### Don't（禁止）

- 彩度の高い色・原色を面で使わない（差し色は植物由来の低彩度に限定）
- 角丸・強い影を付けない（フラット・角ゼロが基調）
- 和文本文の line-height を 1.5 未満に詰めない
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）
- 温かいパーチメントの静けさを、装飾や色面で壊さない

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1〜2 カラム。ナビはハンバーガー＋オーバーレイ |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 2〜4 カラム＋フルブリード写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- 本文は 13〜14px 基調だが、モバイルでも 13px 未満に落とさず line-height 1.7 を保つ
- 欧文見出し（38px）はモバイルで 24〜28px に縮小。ナビラベルの広い字間は維持する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:   #f5f3ed（温かいパーチメント）
Surface:      #ffffff
Ink / 罫/CTA: #000000
Bark Brown:   #604a23
Sage Gray:    #b2b2a6
Warm Gray:    #686260
Font(JP):     "Noto Sans JP", system-ui, -apple-system, sans-serif
Font(EN):     "Basel", "Helvetica Neue", Arial, sans-serif（→ Inter 代替）
Body Size:    13–14px
Line Height:  1.7（和文本文）
Label 字間:   0.08em（欧文ナビラベル）
palt:         off
Radius:       0（全要素）
Button(主):   #000 bg / #fff / 1px solid #000 / radius 0
Button(副):   transparent / #000 / 1px solid #000 / radius 0
Card:         radius 0 / shadow なし
```

### プロンプト例

```
BAUM のデザインシステムに従って、ボタニカル スキンケアの商品一覧セクションを作成してください。
- 下地: #f5f3ed（温かいパーチメント）、面: #ffffff、文字と罫: #000000
- フォント（和文）: "Noto Sans JP", system-ui, -apple-system, sans-serif
- フォント（欧文ラベル）: "Basel"（→ Inter 代替）, "Helvetica Neue", Arial, sans-serif
- 本文 13〜14px / line-height 1.7、欧文ラベル（PRODUCTS 等）は letter-spacing 0.08em
- すべての面・ボタン・入力欄は border-radius: 0
- 主 CTA は黒面（#000 / #fff）、副 CTA は 1px 黒罫のアウトライン型、いずれも角ゼロ
- 商品カードは大判写真＋商品名＋容量／価格、影なし・角丸ゼロのフラット
- 差し色はバークブラウン #604a23・セージグレー #b2b2a6 を限定的に
```

### Web ライセンスフォントが使えない環境での代替指針

- 欧文 Basel → **Inter** / Helvetica Neue 系（ニュートラルなグロテスク）
- 和文 Noto Sans JP は Google Fonts で直接利用可
- 代替でも「温かいパーチメント下地・純黒の文字と細罫・角ゼロのフラットな面・大判写真・低彩度の植物差し色」を守れば世界観は再現できる
