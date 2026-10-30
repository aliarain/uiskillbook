# DESIGN.md — NOHGA HOTEL（ノーガホテル）

> NOHGA HOTEL（ノーガホテル / https://www.nohgahotel.com/）のデザイン仕様書。
> 上野・秋葉原・清水（京都）に展開する、アート／音楽／ガストロノミーをテーマにした
> 野村不動産グループのライフスタイル（ブティック）ホテル。「その地域と深くつながること」を掲げ、
> 地域のデザイナー・アーティストと連携した家具・アート・音楽で滞在を編む。
> 最大の特徴は **チャコールグレー（#54565a / #53565a）を基調にした落ち着いた面** に、
> **アーシーなブロンズ／カーキ（#877b61 / #92846d）** をアクセントに置く構成。
> 見出しは **英字を幾何学サンセリフ（TTNorms）** で組み、**和文はヒラギノ角ゴ** で
> **広めの字間（トラッキング）と非常にゆったりした行間** を取る、静かで洗練された佇まい。
> 実サイトの computed style 実測（2026-07-01 取得）に基づく。
> ※ 原典の英字フォント **TTNorms**（TypeType, 商用ライセンス）は preview.html では表示できない。代替は後述。
> ※ このサイトは CSS Custom Properties を持たない（customProperties が空）。preview.html では独自のトークン名を :root に定義している。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **チャコールグレー（#54565a）× ブロンズ／カーキ（#877b61）** を核にした、静かでソフィスティケートされたライフスタイルホテルのサイト。純黒・純白を避け、わずかに温度のあるグレーとアーシーな中間色で構成する。写真を主役に、文字は控えめ・小さめだが字間を広く取ってラグジュアリーな余白感を出す
- **NOHGA HOTEL について**: 「その土地と深くつながる」を思想の中心に据えたブティックホテル。上野・秋葉原・京都清水の3拠点で、それぞれの地域のアート・音楽・食（ガストロノミー）を取り込んだ体験を提供する。EXPERIENCE（メディテーション／音楽／フード）や地域連携のプロダクトが柱
- **密度**: 中〜低密度。写真とグレーの面を大きく使い、テキストは要点を絞る。本文は 14px と小さめだが line-height ≈3.0・letter-spacing ≈0.1em と極端にゆったり組み、静けさと上質感を演出する
- **キーワード**: チャコールグレー #54565a、ブロンズ／カーキ #877b61、ニアブラック #1e1f21、幾何学サンセリフ（英字）、ヒラギノ角ゴ（和文）、広いトラッキング、アーシー、ソフィスティケート、アート／音楽／食
- **特徴**:
  - 基調面は **チャコールグレー #54565a / #53565a**。カード・タイル・区切り面・テキスト色に広く使われる最頻色（uniqueBackgrounds で count 29〜32）。純黒でも純グレーでもない、わずかに青みを含んだ落ち着いた灰
  - 差し色は **ブロンズ／カーキ #877b61**（と、やや明るい変種 #92846d）。CTA ボタン（"WEB SITE" "宿泊のみ" "BOOK NOW" 等）の塗り、小見出しラベル、電話番号リンクなどに使う唯一のブランドアクセント
  - ヒーロー（メインビジュアル）の地は **ダークチャコール #333333**。反転面・写真の下地として使う
  - 英字見出し（CONCEPT / EXPERIENCE / OUR HOTELS 等）は **TTNorms（幾何学サンセリフ）Medium** で、28〜34px・letter-spacing ≈0.05em。ブランドの英字ロゴ・セクションラベルを担う
  - 和文見出し・本文は **ヒラギノ角ゴ（Hiragino Sans / Hiragino Kaku Gothic ProN）**。和文の大見出しは weight 700＋非常に広い字間（letter-spacing 4.8〜6.4px ≈ 0.24〜0.27em）で、静かに引き締める
  - **角丸はほぼ 0**（radius 0px）。ボタン・カード・面すべてシャープな直線構成。影は使わずフラット。フォーム部品のみ radius 3px の例外
  - 本文は **極端に広い行間（line-height ≈3.0）** が最大の癖。読み物というより、余白としての文字組み

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。基調はチャコールグレー、アクセントはブロンズ／カーキ。すべて hex 表記（rgb → hex 変換済）。

### Brand / Core

- **Charcoal (Surface)** (`#54565a`): 最頻の面色（rgb 84,86,90 / count 29〜32）。カード・タイル・区切り面の基調グレー。わずかに青みを含む落ち着いた灰
- **Charcoal (Ink)** (`#53565a`): 本文・見出し・リンクの基本テキスト色（rgb 83,86,90）。#54565a とほぼ同値で、面色と文字色を同系グレーで統一する
- **Bronze (Accent)** (`#877b61`): ブランドアクセント（rgb 135,123,97）。CTA ボタンの塗り、小見出しラベル、電話番号リンク等。アーシーなブロンズ／カーキ・ゴールド
- **Bronze Light** (`#92846d`): やや明るいブロンズ変種（rgb 146,132,109）。レストラン予約ボタン等、ブロンズの階調違いに使う
- **Ink (Near-Black)** (`#1e1f21`): 見出し・ダーク CTA の濃色（rgb 30,31,33）。"See Detail 詳しく見る" 等の黒ボタン、大見出しの文字色。純黒を避けたニアブラック
- **Hero Dark** (`#333333`): メインビジュアル／反転面の下地（rgb 51,51,51）。ヒーローの支配色

### Neutral / Grey

| Role | hex | 用途 |
|------|-----|------|
| Text Primary | `#53565a` | 本文・見出し・リンクの基本テキスト |
| Heading Ink | `#1e1f21` | 濃い見出し・ダーク CTA |
| On Dark (White) | `#ffffff` | ダーク地・写真上の白文字 |
| Surface (Charcoal) | `#54565a` | カード・タイルの基調グレー面 |
| Surface (Light) | `#f2f3f4` | 明るいセクション背景（EXPERIENCE 等） |
| Surface (Light 2) | `#f3f3f3` | グループホテル一覧等の薄グレー面 |
| Border / Tab | `#d3d3d3` | フィルタ・タブの面、区切り |
| Footer Muted | `#7e7777` | フッターの補助テキスト（くすんだグレー） |

### Accent

- **Bronze** (`#877b61`) / **Bronze Light** (`#92846d`): ブランドアクセント。CTA の塗り・小ラベル・リンクに点で使う。広い面積はグレー、要所をブロンズで締める役

> 注: `uniqueBackgrounds` に `rgb(255,0,0)`（赤）が現れるが、これは footer 要素のデバッグ／プレースホルダ的なもので、実際の意匠色ではない。採用しない。

---

## 3. Typography Rules

> 実サイトは英字見出し・ラベルに **TTNorms**（TypeType の幾何学サンセリフ、Medium / Regular）、和文と大半のテキストに **ヒラギノ角ゴ（Hiragino Sans / Hiragino Kaku Gothic ProN）** を使う。
> TTNorms は商用ライセンスのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **ゴシック体（見出し・本文）**: ヒラギノ角ゴ（`"Hiragino Sans"` → `"Hiragino Kaku Gothic ProN"`）。Windows 向けに `YuGothicCustom` / `YuGothic` / `Meiryo` をフォールバック。和文はすべてこの1系統で統一（明朝は使わない）
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ（英字見出し・ラベル・数字）**: TTNorms（`TTNorms-Medium` / `TTNorms-Regular`）— 幾何学的なグロテスク／ジオメトリック・サンセリフ。CONCEPT・EXPERIENCE 等の英字セクション見出し、電話番号、テーブルのラベルに使う
- **和文本文中の欧文**: ヒラギノ角ゴのフォールバックチェーン内の欧文グリフに委ねる（和文と一体で組む）

### 3.3 font-family 指定

```css
/* 和文見出し・本文（実測） */
font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", YuGothicCustom, YuGothic, Meiryo, sans-serif;

/* 英字見出し・ラベル・数字（実測） */
font-family: TTNorms-Medium, sans-serif;   /* Regular は TTNorms-Regular */
```

- **フォールバックの考え方**: 和文は **和文優先型**（ヒラギノ角ゴ → 游ゴシック系 → Meiryo）。英字ラベルのみ TTNorms を単独指定し、和文とは別系統で組む
- 英字ブロックと和文ブロックを **フォントで明確に分ける**（英字=TTNorms、和文=ヒラギノ角ゴ）のがこのサイトの流儀

**preview.html での代替フォント**:
- TTNorms（英字見出し・ラベル）→ **Jost**（Google Fonts。TTNorms と同じジオメトリック・サンセリフで、円形の o・幾何学的な字形が近い。次点で Manrope）
- ヒラギノ角ゴ（和文）→ **Noto Sans JP**

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | TTNorms / 幾何サンス | 34px | 400 (Medium) | 1.5 | 0.05em | EXPERIENCE 等の英字大見出し |
| Heading (EN) | TTNorms / 幾何サンス | 28px | 400 (Medium) | 1.5 | 0.05em | CONCEPT / OUR HOTELS / news |
| Heading JP (Lead) | ヒラギノ角ゴ | 24px | 700 | 2.2 | 0.27em | c-subttl（コンセプト大見出し） |
| Heading JP | ヒラギノ角ゴ | 20px | 700 | 1.63 | 0.24em | セクション和文見出し |
| Subheading | ヒラギノ角ゴ | 18px | 400 | 1.67 | 0.09em | h4・c-ex_title |
| Card Title | ヒラギノ角ゴ | 18px | 700 | 1.6 | 0.04em | c-slideB_ttl（カード見出し） |
| Body | ヒラギノ角ゴ | 14px | 400 | 3.0 | 0.1em | 本文（極端に広い行間） |
| Body (Lead) | ヒラギノ角ゴ | 17px | 400 | 2.35 | 0.5em | ヒーロー下のリード（超ワイド字間） |
| Small / Caption | TTNorms / ヒラギノ角ゴ | 12–13px | 400 | 1.5–1.7 | 0.05em | 注記・テーブル・ラベル |
| Micro | TTNorms | 10px | 400 | 1.0 | 0.05em | コピーライト等 |

- **英字見出しは TTNorms Medium（実効 weight 400）**、和文の大見出しは **ヒラギノ角ゴ 700** と使い分ける
- **和文見出しの letter-spacing が非常に広い**（4.8px/20px ≈ 0.24em、6.4px/24px ≈ 0.27em）。字を開いて静けさと格を出す
- **本文の行間が極端に広い**（14px → 42px ＝ line-height 3.0）。読み物というより余白デザインとしての文字組み

### 3.5 行間・字間

- **本文の行間 (line-height)**: 約 3.0（14px → 42px）。日本語本文としても異例に広い。ゆったりした余白感が最大の特徴
- **見出しの行間**: 1.5〜2.2（英字見出しは 1.5、和文リード見出しは 2.2 前後）
- **本文の字間 (letter-spacing)**: 約 0.1em（1.4px ÷ 14px）。開いて上質感を出す。ヒーローのリードはさらに広く 0.5em（8.5px/17px）
- **和文見出しの字間**: 0.24〜0.27em（4.8〜6.4px）。特に広い
- **英字見出しの字間**: 約 0.05em（1.4px ÷ 28px、1.7px ÷ 34px）

**ガイドライン**:
- 本文は line-height 3.0・letter-spacing 0.1em を基準に、極端にゆったり組む
- 和文見出しは weight 700＋字間 0.24〜0.27em で、開いて静かに引き締める
- 英字ラベルは TTNorms（代替 Jost）Medium、字間 0.05em 程度

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
- 和文の字間は letter-spacing（本文 0.1em、見出し 0.24〜0.27em）で手動調整している

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

> NOHGA HOTEL の CTA は **ブロンズ塗り** または **ニアブラック塗り** の角丸 0 ボタンが基本。和文は weight 700・広い字間で組む。

### Buttons

**Primary（ブロンズ塗り）**
- Background: `#877b61`（ブロンズ。明るい変種 `#92846d` も可）
- Text: `#ffffff`
- Border: none
- Padding: 21px 24px（縦に厚め。横は文脈で可変）
- Border Radius: `0px`
- Font: ヒラギノ角ゴ 700 / TTNorms、Font Size 15〜16px
- Letter Spacing: 0.1em（英字 CTA は 0.08em 前後）
- 例: "WEB SITE" "宿泊のみ" "BOOK NOW 宿泊予約する"

**Dark（ニアブラック塗り）**
- Background: `#1e1f21`（ニアブラック）
- Text: `#ffffff`
- Border: none
- Border Radius: `0px`
- Font: ヒラギノ角ゴ、Font Size 16px
- 例: "See Detail 詳しく見る"

**Outline（フッター等）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#707070`
- Border Radius: `0px`
- 例: "お問い合わせ" "よくある質問"（ダーク地の上）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border Radius: `3px`（部品のみ角丸を許容）
- Padding: 0px 12px
- Font: Arial / ヒラギノ角ゴ、Font Size 12px、weight 700、letter-spacing 0.05em
- 送信ボタン（submit）: background `#877b61`（ブロンズ）、text `#ffffff`、letter-spacing 4.8px（≈0.4em）と非常に広い
- フォーカス: border を `#877b61`（ブロンズ）または `#53565a`（チャコール）に

### Cards

- Background: `#54565a`（チャコール面）または `#ffffff`／`#f2f3f4`（明るい面）
- Border: なし、または 1px solid `#d3d3d3`（薄グレー）
- Border Radius: `0px`
- 写真を大きく（4:3〜4:5）上に置き、タイトル（ヒラギノ角ゴ 700 / 18px）・キャプション（14px / line-height 3.0）を下に添える
- 影は使わない（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 48px |
| XL | 80px |
| XXL | 120px |

> 本文の行間（3.0）とセクション間の大きな余白でゆったりした間（ま）を作る。要素周りの padding も広めに取る。

### Container

- Max Width: 約 1200px（写真を大きく見せるワイド設計）
- Padding (horizontal): 24〜48px

### Grid

- Columns: コンテンツは 2〜3 カラム（EXPERIENCE / OUR HOTELS のタイル）
- Gutter: 16〜32px
- 写真タイル＋グレー面を並べ、隙間を詰めすぎず余白を残す

---

## 6. Depth & Elevation

> NOHGA HOTEL はほぼフラット。影を使わず、チャコールグレー面（#54565a）・ライト面（#f2f3f4）・ダーク面（#333333 / #1e1f21）の色差で階層を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード・セクション・ボタン（基本フラット） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・メニュー（控えめ） |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・ドロワー |

- 立体は影でなく **面色の差（チャコール／ライト／ダーク）** で表現するのが基本

---

## 7. Do's and Don'ts

### Do（推奨）

- 面はチャコールグレー #54565a、テキストは #53565a を基調にし、純黒・純白を避ける
- アクセントはブロンズ／カーキ #877b61（明変種 #92846d）を CTA・小ラベルに点で使う
- 英字見出し・ラベルは TTNorms（代替 Jost）Medium、和文はヒラギノ角ゴで組み、フォントを明確に分ける
- 和文大見出しは weight 700＋字間 0.24〜0.27em で開いて引き締める
- 本文は line-height 3.0・letter-spacing 0.1em と極端にゆったり組み、静かな余白感を出す
- ボタン・カードは角丸 0px・影なしのフラットにする。ダーク面は #333333 / #1e1f21 で深さを出す

### Don't（禁止）

- 鮮やかな原色やグラデーションを足さない（アーシーで落ち着いたトーンが崩れる）
- 本文の line-height を 1.5 以下に詰めない（このサイトの静けさは広い行間に由来する）
- 和文見出しにゴシック以外（明朝等）を混ぜない（和文はヒラギノ角ゴで統一）
- ボタン・カードに大きな角丸や影を付けない（フラット＋角丸 0 が基調）
- ブロンズを広い面積に塗り広げない（グレーが主役、ブロンズは差し色）
- 英字と和文を同じフォントで無理に統一しない（英字=TTNorms、和文=角ゴの対比を守る）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1 カラム、ナビはメニュー化、写真タイルは縦積み |
| Tablet | 768–1023px | 2 カラム |
| Desktop | ≥ 1024px | 2〜3 カラムの写真タイル＋ワイド写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px（縦厚めのブロンズ CTA で十分なタップ領域を確保）

### フォントサイズの調整

- 英字大見出し（34px 等）はモバイルで 24〜28px に縮小
- 本文はモバイルでも 14px・line-height を 2.4〜3.0 に保ち、ゆったり感を維持する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Surface / Base: #54565a (Charcoal)
Ink / Text: #53565a (Charcoal Ink)
Heading Ink: #1e1f21 (Near-Black)
Accent: #877b61 (Bronze) / #92846d (Bronze Light)
Hero / Dark Surface: #333333 / #1e1f21
Light Surface: #f2f3f4 / #f3f3f3
Border: #d3d3d3
On Dark: #ffffff
EN Heading Font: TTNorms-Medium, sans-serif   /* 代替: Jost (Medium) */
JP Font: "Hiragino Sans", "Hiragino Kaku Gothic ProN", sans-serif  /* 代替: Noto Sans JP */
Body Size: 14px / Line Height: 3.0 / Letter Spacing: 0.1em
JP Heading: weight 700 / ls 0.24–0.27em
Radius: 0px / palt: off / CTA: ブロンズ or ニアブラック塗り（角丸 0）
```

### プロンプト例

```
NOHGA HOTEL のデザインシステムに従って、客室紹介ページを作成してください。
- 面: #54565a（チャコールグレー）、テキスト: #53565a、濃い見出し: #1e1f21。純黒・純白は避ける
- 英字見出し・ラベル: TTNorms（代替 Jost）Medium、28–34px、ls 0.05em
- 和文見出し: ヒラギノ角ゴ（代替 Noto Sans JP）、weight 700、ls 0.24–0.27em
- 本文: ヒラギノ角ゴ、14px、line-height 3.0、ls 0.1em と極端にゆったり
- CTA はブロンズ #877b61 塗り、または ニアブラック #1e1f21 塗り。角丸 0px、影なし
- アクセントはブロンズを差し色で。ダーク面は #333333 / #1e1f21 で深さを出す
- palt は使わず、letter-spacing で字間を調整する
```
