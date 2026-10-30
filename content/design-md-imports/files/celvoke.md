# DESIGN.md — Celvoke (セルヴォーク)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://celvoke.com/
> Celvoke（セルヴォーク）はメイクアップ／スキンケアのコスメブランド。ボタニカルを核に、
> 洗練されたエディトリアルな世界観で知られる。実測はブランドサイト トップに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ほぼ白と黒だけのモノトーンで組む静かなエディトリアル。商品・キャンペーンの写真を主役にし、UI は極限まで引き算する
- **密度**: 低密度。広い余白の中に、細い罫と大きな写真、字間を広げた欧文ラベルを配置する
- **キーワード**: ミニマル / モノクローム / エディトリアル / 洗練 / ボタニカル
- **形状言語**: CTA は塗り黒の完全ピル（`border-radius: 900px`）と、角丸ゼロ（`radius: 0`）のテキストリンク型ボタンの対比。装飾罫はほぼ持たない
- **書体の性格**: 筆記体のロゴ（画像）が優雅さを担い、UI テキストは丸みのある Nunito＋ヒラギノ角ゴ。ナビ・フッターの欧文ラベルは **字間 3px（≒0.2em）** を大きく開き、余白と静けさを演出する

---

## 2. Color Palette & Roles

<!-- 実サイトの computedStyles / customProperties / interactive 実測に基づく。基調はモノトーン、ブランドの緑を芯に持つ -->

### Base（下地）

- **Background** (`#fafafa`): ページ全体の下地。純白よりわずかに沈んだオフホワイト（rgb(250,250,250)）
- **Surface** (`#ffffff`): カード・モーダルの面。純白
- **Ink Black** (`#000000`): プロモバー・CTA・見出しの基調色（`--color-basic: #000`）

### Brand（ブランド）

- **Brand Green** (`#053931`): ブランドカラー。ボタニカルを象徴する深い常緑（`--color-primary`）。ロゴまわり・限定的な面に使う
- **Highlight** (`#ebfe9a`): 蛍光のシャルトルーズ。ハイライト・強調にごく限定的に使う（`--color-highlight`）
- **Dark Brown** (`#241816`): 写真上の濃色面・キャンペーンの下地に現れる深いブラウン

### Text（文字色）

- **Text Primary** (`#000000`): 見出し・ナビ・本文。純黒
- **Text Default** (`#212121`): 標準本文・キャプション（`--color-secondary` / `--text-color-default`）
- **Text Tertiary** (`#6e6e6e`): 補足・注釈（`--color-tertiary`）
- **Text on Dark** (`#ffffff`): 黒背景・写真上のラベル

### Accent（季節の差し色）

- **Summer Citrus** (`#f88329`): 季節キャンペーン用のオレンジ（`--color-summer-citrus`）。時期限定でアクセントに使う

### 色に関する設計思想

- 基調は「オフホワイト下地」「純黒の文字と CTA」「白の面」のモノトーン3色
- ブランドの芯は深緑 `#053931`。ボタニカルの世界観を担うが、面で多用せずロゴ・限定要素に絞る
- シャルトルーズ `#ebfe9a`・シトラス `#f88329` はシーズナルな差し色。基調のモノトーンを壊さない範囲で使う

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ ProN（`Hiragino Kaku Gothic ProN`）を基本に、メイリオ → 游ゴシック体 にフォールバック
- **明朝体**: 使用しない（ロゴは筆記体の画像）

### 3.2 欧文フォント

- **サンセリフ（UI）**: Nunito（Google Fonts）。丸みのあるヒューマニストサンセリフで、やわらかい印象を作る（`--font-base`）
- **サンセリフ（見出し/一部英字）**: Pragmatica（`pragmatica`, Adobe Fonts。`--font-en`）。Helvetica 系のグロテスク
- **セリフ / 等幅**: 使用しない（ロゴのみ筆記体）

> **代替フォントの注記**: Pragmatica は Adobe Fonts のためローカル・preview.html では表示できない。
> - Pragmatica → **Inter** や Helvetica 系（グロテスクの印象が近い）
> - Nunito は Google Fonts で直接読み込めるため、preview はそのまま Nunito を使う

### 3.3 font-family 指定

```css
/* 本文・UI（--font-base） */
font-family: "Nunito", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

/* 英字見出し・一部（--font-en） */
font-family: pragmatica, sans-serif;
```

**フォールバックの考え方**:
- **欧文（Nunito）を先頭**に置き、Latin グリフを Nunito で拾う
- 続いて和文（ヒラギノ角ゴ ProN → メイリオ）で日本語グリフを担う
- 見出し・本文とも同一チェーン。ウェイト（400 / 600 / 700）で階層を作る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | Nunito + ヒラギノ | 36px | 700 | 1.5 | 0.025em | ページ見出し |
| Heading 2 | Nunito + ヒラギノ | 20px | 700 | 1.5 | 0.04em | セクション見出し |
| Heading 3 | Nunito + ヒラギノ | 16px | 700 | 1.5 | normal | 小見出し |
| Body | Nunito + ヒラギノ | 18px | 400 | 1.5 | normal | 本文 |
| Nav / Menu | Nunito + ヒラギノ | 18px | 400 | 1.5 | 0.05em | グローバルナビ |
| Wide Label | Nunito + ヒラギノ | 11–14px | 400 | — | 0.2em | 欧文ラベル（字間3px） |
| Caption | Nunito + ヒラギノ | 12px | 400 | 1.5 | 0.03em | 注釈・補足 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.5`（18px 本文で 27px）
- **見出しの行間**: `1.5`（36px 見出しで 54px）
- **本文の字間 (letter-spacing)**: 基本 `normal`。ナビは `0.9px`（≒0.05em）
- **ラベルの字間**: フッター・カテゴリの欧文ラベルは **`3px`（≒0.2em）** と大きく開き、静けさと格を出す

**ガイドライン**:
- 欧文の小ラベル（ABOUT / PRODUCTS / NEWS 等）は字間を大きく開くのがこのブランドの流儀
- 本文は開けすぎず normal〜0.9px に留める

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

- 実測では `font-feature-settings: normal`。palt は使わず、字間は letter-spacing で調整している
- 欧文中心のラベル設計のため、和文の字詰めより欧文のトラッキングを重視する

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

塗り黒の完全ピルと、角丸ゼロのテキストリンク型ボタンを対比的に使う。

**Primary（塗り・完全ピル）**
- Background: `#000000`
- Text: `#ffffff`
- Border Radius: `900px`（完全ピル）
- Font: 15px / weight 600
- 例: 「カートにすすむ」

**Text Link（角丸ゼロ）**
- Background: `#000000`（または transparent の下線リンク）
- Text: `#ffffff`
- Border Radius: `0px`
- Font: 14px / weight 700
- 例: 「VIEW MORE」— 一覧への誘導

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dddddd`（細い下線 or 罫）
- Border (focus): `1px solid #000000`
- Border Radius: `0px`
- Padding: `12px 14px`
- Font Size: 14–16px

### Cards

- Background: `#ffffff`
- Border: なし（余白と写真で区切る）
- Border Radius: `0px`
- Shadow: なし（フラット）
- 商品カードは大判写真＋商品名＋価格の最小構成。角丸ゼロで端正に

---

## 5. Layout Principles

### Spacing Philosophy

広い余白の中に大判写真を配置し、要素間はゆったり空ける。テキストは字間で密度を下げ、静けさを保つ。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 48px |
| XL | 80px |
| XXL | 120px |

### Container

- Max Width: 1280px（キャンペーン写真はフルブリード）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（商品一覧は 2〜4 カラム）
- Gutter: 24–40px
- 大判写真をゆったり配置し、キャプションは短く添える

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。ほぼ全ての面はフラット |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・カートの最小限の浮き |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・オーバーレイメニュー |

- 影はほぼ使わない。奥行きは「余白」と「写真」で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 基調はオフホワイト `#fafafa`・純黒 `#000000`・白 `#ffffff` のモノトーン3色に絞る
- ブランドの芯として深緑 `#053931` を持ち、ロゴまわり・限定要素に使う
- 欧文の小ラベル（ABOUT / PRODUCTS 等）は字間を大きく（0.2em＝3px）開く
- CTA は塗り黒の完全ピル（radius 900px）と、角丸ゼロのテキストリンクを使い分ける
- 大判写真をゆったり配置し、カードは角丸ゼロ・影なしのフラットに
- 欧文は Nunito、和文はヒラギノ角ゴ ProN で組む

### Don't（禁止）

- 彩度の高い色を面で多用しない（緑・シトラス・シャルトルーズはアクセントに限定）
- カード・パネルに角丸・強い影を付けない（フラット基調）
- 本文の字間を開けすぎない（開くのは欧文ラベルだけ）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）
- モノトーンの静けさを、装飾や色面で壊さない

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1〜2 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 2〜4 カラム＋フルブリード写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは見出し（36px）を 24–28px 程度に、本文は 16px 前後に調整
- 欧文ラベルの広い字間はモバイルでも保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:   #fafafa
Surface:      #ffffff
Ink / CTA:    #000000
Brand Green:  #053931
Text Default: #212121
Text Muted:   #6e6e6e
Font:         "Nunito", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Body Size:    18px
Line Height:  1.5
Label 字間:   0.2em（3px、欧文ラベルのみ）
palt:         off
Button(主):   #000 bg / #fff / radius 900px（完全ピル）
Button(副):   #000 bg / #fff / radius 0（テキストリンク型）
Card:         radius 0 / shadow なし
```

### プロンプト例

```
Celvoke のデザインシステムに従って、コスメの商品一覧セクションを作成してください。
- 下地: #fafafa、面: #ffffff、文字: #000000 / #212121
- フォント: "Nunito", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
- 本文 18px / line-height 1.5、見出しは weight 700
- 欧文の小ラベル（PRODUCTS / VIEW MORE 等）は letter-spacing: 0.2em（3px）で大きく開く
- 主 CTA は塗り黒の完全ピル（radius 900px）、副 CTA は角丸ゼロのテキストリンク型
- 商品カードは大判写真＋商品名＋価格、border-radius: 0、影なしのフラット
- ブランドの差し色は深緑 #053931（ロゴまわり・限定要素のみ）
```

### Adobe Fonts が使えない環境での代替指針

- 欧文 Pragmatica → **Inter** / Helvetica 系
- 欧文 Nunito は Google Fonts で直接利用可
- 和文 ヒラギノ角ゴ ProN → **Noto Sans JP**（環境非依存の代替）
- 代替でも「モノトーン基調・広い字間の欧文ラベル・黒の完全ピル CTA・角丸ゼロのフラットなカード・大判写真」を守れば世界観は再現できる
