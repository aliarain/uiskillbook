# DESIGN.md — MICIN（マイシン）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-13 / 対象: `https://micin.jp/`, `/news/14845/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **`* { font-feature-settings: "palt" }` で全要素を詰めた上から、`em` の字間を当て直す。** 医療 × テクノロジーの企業サイト。白地・紺一色・角丸ゼロで、情報を「詰めて空ける」操作だけで整える
- **密度**: 低い。全画面の `<canvas>` ヒーローに欧文の一文だけを置き、以下はゆったりした 1 カラム
- **キーワード**: palt 全掛け、em の字間、ネイビー `#00245c`、角丸ゼロ、和文 Web フォント 0 本

**このサイトの核心は 4 つある。**

1. **`font-feature-settings: "palt"` をユニバーサルセレクタで当てている。** CSS 全文の宣言は **`* { "palt" }` の 1 行だけ**。実測はトップ **697 要素**、ニュース詳細 **180 要素**＝**ページ上の全要素**。見出しだけでも本文だけでもなく、例外なく全部
2. **詰めた上から `em` で空け直す二段構え。** 可視要素の字間は **0.02 / 0.08 / 0.10 / 0.12 / 0.14 / 0.15 / 0.18 / 0.20em** の 8 段。`palt` で詰まった分を、要素ごとに `em` で戻している。**`letter-spacing` 宣言は CSS 全文で 55 件**
3. **`html, body` が 4 段の階段で切り替わる。** `14px`（≥979px）→ `13px`（≤979px）→ `12px`（≤479px）→ `11px`（≤325px）。**`rem` で組まれた全サイズ・全余白がこれに追従する**（`11.9px` = `0.85rem`、`15.4px` = `1.1rem` のような端数はここから出る）
4. **和文 Web フォントは 1 本も読み込んでいない。** フォントファイルの要求は実測 **6 件**（Lato 4 / Roboto 2）で、すべて欧文。**和文は OS ローカルの游ゴシック → ヒラギノ角ゴ Pro**

**`font-family` はサイト全体で 1 スタックだけ**（トップ 197 要素・ニュース詳細 38 要素が同一）。明朝は 1 要素も無い。
**CSS Custom Properties は自社トークン 0 個**（60 個すべて WordPress / Gutenberg の preset）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **MICIN Navy** | **`#00245c`** | **文字色 37 要素 ＋ 塗り面 4 要素。** `ENGLISH` ボタンの面、カテゴリタグの枠と文字、小見出し |
| **Deep Navy** | **`#001029`** | ヒーロー直下のセクション面（1 要素）。`#00245c` より暗い |
| Accent Magenta | `#951f5e` | **可視 2 要素のみ**。アクセントとして極めて限定的 |

> **面として使う紺は 1 色だけ。** `#00245c` が枠・文字・面を兼ねる。`rgba(0,16,41,0.09)` `rgba(12,27,51,0.098)` はヒーローの薄いオーバーレイ。

### Neutral（ニュートラル）

- **Text Primary** (`#1a1a1a`): 本文・見出し（**可視 118 要素＝最多**）。**純黒ではない**
- **Text on Navy** (`#ffffff`): 紺面・ヒーロー上のテキスト（トップ 26 要素 / ニュース詳細 28 要素）
- **Text Muted** (`#8a8a8a`): 日付・補助情報（可視 14 要素）
- **Surface Wash** (`rgba(148,148,148,0.1)`): ニュース一覧の面（5 要素）
- **Surface Wash 2** (`rgba(148,148,148,0.2)`): 事業カードの面（5 要素）
- **Border** (`#eeeeee`): `ENGLISH` ボタンの枠
- **Divider** (`#cccccc`): 区切り線
- **Background** (`#ffffff`): ページ背景

> **`pageBackground.resolved` は信用しない。** トップは全画面の `<canvas>`（1440×900）に覆われ、`html` / `body` とも塗り指定が無い。**コンテンツ領域の地色は UA 既定の白。**

### 実サイトの誤り（Don't）

- ニュース詳細に **`rgb(0,0,255)` の要素が 1 件**ある。`<a>` 直下に文字を直接置いたため **UA 既定のリンク青**が出ている。**新規実装では `#00245c` を明示すること**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体のみ**。明朝は使わない（実測 0 要素）
- **Web フォントは読み込んでいない。** 游ゴシック → ヒラギノ角ゴ Pro → Osaka → MS Pゴシック → メイリオ の **OS ローカル依存**

### 3.2 欧文フォント

- **Lato**（Google Fonts）: `300` / `400` / `700` / `900` が `loaded`。スタックの**先頭**にあり、英数字はすべて Lato で出る
- Roboto のファイルが 2 件要求されているが、`document.fonts` には現れない（埋め込み要素由来）

### 3.3 font-family 指定

```css
/* サイト全体で唯一のスタック */
font-family: Lato, 游ゴシック, YuGothic, "Yu Gothic", YuGothic,
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Osaka,
             "ＭＳ Ｐゴシック", "MS PGothic", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先。** `Lato` を先頭に置き、英数字を和文書体の欧文グリフより優先する
- **実サイトはこうだが、正しくはこう** — **`YuGothic` が 2 回重複している**（3 番目と 5 番目）。後ろの 1 つは到達せず無意味。重複を削って構わない
- **実サイトはこうだが、正しくはこう** — **游ゴシックの Medium 指定が無い。** Windows では `YuGothic` が Light にマッピングされて**細く出る**。`"游ゴシック Medium", "Yu Gothic Medium"` を `游ゴシック` の**前**に足すこと
- **ヒラギノは `Pro`（`ProN` ではない）。** 字形が違うので書き換えない
- generic family（`sans-serif`）は末尾だけ。スタックの途中に無いので全候補が生きている

### 3.4 文字サイズ・ウェイト階層

**ルートが画面幅で切り替わる。** 下表は **1440px（root = 14px）** の実測値。

| Role | Size (1440px) | rem | Weight | Line Height | Letter Spacing | 備考 |
|------|---------------|-----|--------|-------------|----------------|------|
| Display | 40px | — | 400 | 1.10 | — | ヒーローの欧文 |
| Heading 1 | **28px** | **2rem** | 600 / 700 | 1.10 | **0.20em** (5.6px) | セクション見出し |
| Heading 2 | **19.6px** | **1.4rem** | 600 | 1.30 | **0.12em** (2.352px) | サブ見出し |
| Heading 3 | **15.4px** | **1.1rem** | 700 | 1.60 | **0.10em** (1.54px) | 小見出し |
| Heading 3b | 15.4px | 1.1rem | 700 | 1.60 | **0.08em** (1.232px) | 別系統の小見出し |
| Heading 3c | 15.4px | 1.1rem | 700 | — | **0.18em** (2.772px) | 最も空ける見出し |
| **Body** | **14px** | **1rem** | 400 | **1.80** (25.2px) | **0.08em** (1.12px) | **本文の既定（実測 30 要素）** |
| Body Wide | 14px | 1rem | 400 | **2.20** | **0.10em** (1.4px) | 読み物の本文（ニュース詳細で 16 要素） |
| **Caption** | **11.9px** | **0.85rem** | 400 / 700 | 1.50 | **0.08em** (0.952px) | **可視 70 要素で最多のサイズ** |
| Caption Wide | 11.9px | 0.85rem | 700 | 1.10 | **0.14em** (1.666px) | ラベル |
| Caption Wider | 11.9px | 0.85rem | 400 | 1.50 | **0.12em** (1.428px) | 日付・注記 |
| Tag | 11px | — | 700 | 1.90 (20.9px) | **0.10em** (1.1px) | `メディア掲載` `お知らせ` |
| Nav | 13px | — | 700 | 1.80 (23.4px) | **0.15em** (1.95px) | グローバルナビ |
| **Micro Label** | **10px** | — | 400 | **7.20** | **0.20em** (2px) | **側面の縦ラベル（実測 24 要素）** |

**ウェイトは 400 / 600 / 700 / 900 の 4 段**（実測 700 が 78 要素で最多、次いで 400 が 72、600 が 42、900 が 5）。

> **`600` は実体が無い。** `Lato` は `300 / 400 / 700 / 900` しか `loaded` しておらず、和文側の游ゴシックも Regular / Bold が基本。**`600` を指定しても描画は 700 か Medium に丸められる。** 新規実装では **400 / 700** の 2 段に寄せてよい。

### 3.5 行間・字間

- **本文の行間**: **1.80**（実測 50 要素で最多）。読み物は **2.20**（ニュース詳細で 16 要素）
- **見出しの行間**: **1.10**（実測 20 要素）。**詰める**
- **UI の行間**: **1.50**（43 要素）
- **特異値**: **7.20**（24 要素）は 10px の縦ラベル。`line-height` で縦位置を取っている
- **字間は全要素が `em`。** 要素のサイズが変われば px も比例して変わる（**継承ではなく、各要素が自分で宣言している**）

| em | 実測 px（root 14px のとき） | 用途 |
|----|------------------------|------|
| 0.02em | 0.28px @14px | 長文の本文 |
| **0.08em** | **1.12px @14px / 0.952px @11.9px** | **本文・キャプションの既定（合計 59 要素で最多）** |
| 0.10em | 1.4px @14px / 1.54px @15.4px | 小見出し・タグ |
| 0.12em | 1.428px @11.9px / 2.352px @19.6px | ラベル・中見出し |
| 0.14em | 1.666px @11.9px | 強調ラベル |
| 0.15em | 1.95px @13px | ナビ |
| 0.18em | 2.772px @15.4px | 見出し |
| **0.20em** | **2px @10px / 5.6px @28px** | **大見出しと縦ラベル** |

**ガイドライン**:
- **`palt` と `em` の字間は必ずセットで再現する。** `palt` だけだと詰まりすぎ、`em` だけだと約物が空いたままになる
- **字間は `px` ではなく `em` で書く。** ルートが 4 段で切り替わるので、px 固定にすると小さい画面で字間だけが相対的に広がる
- **`line-height` を宣言し忘れない。** `body { line-height: 1 }`（無単位）が降りてくる

### 3.6 禁則処理・改行ルール

```css
/* 実サイトは word-break / overflow-wrap / line-break を一切宣言していない（実測 0 件） */
```

- **`word-break: auto-phrase` は使っていない。** 改行位置はブラウザ既定
- 長い URL・英単語の折り返し対策が無いので、**新規実装では `overflow-wrap: break-word` を足すこと**

### 3.7 OpenType 機能

```css
* {
  font-feature-settings: "palt";
}
```

- **ユニバーサルセレクタで全要素に `palt`。** CSS 全文でこの 1 宣言だけ。実測トップ 697 要素 / ニュース詳細 180 要素
- `tnum` `halt` などは使っていない
- **`palt` は仮名漢字を含む全文字の字送りを詰める。** そのため上の `em` の字間で空け直している。**どちらか片方だけ再現すると別物になる**

### 3.8 縦書き

```css
/* writing-mode の宣言は 0 件 */
```

- **縦組みは使っていない**（実測 `verticalWriting` 0 要素）
- ヒーロー左右の `ARTIFICIAL INTELLIGENCE` / `MEDICAL` は**縦に見えるが縦組みではない**。10px / `letter-spacing: 0.20em` / `line-height: 7.2` の横組みを回転させている。**`writing-mode: vertical-rl` で実装しない**

---

## 4. Component Stylings

### Buttons

**Primary（ENGLISH）**
- Background: `#00245c`
- Text: `#ffffff` / 13px / weight 700
- Line Height: 23.4px
- Letter Spacing: `0.12em`（1.56px）
- Padding: `3px 6px`
- Border: `1px solid #eeeeee`
- Border Radius: **0**

**Outlined（カテゴリタグ）**
- Background: `transparent`
- Text: `#00245c` / 11px / weight 700
- Letter Spacing: `0.10em`（1.1px）
- Border: `1px solid #00245c`
- Padding: `0`
- Border Radius: **0**

### Badges / Chips

**SNS Share（ニュース詳細）**
- `シェア`: Background `#315096` / `ポスト`: Background `#55acee`
- Text: `#ffffff` / 11px / weight 700 / `letter-spacing: 0.08em`
- Border Radius: **3px**
- > これは SNS 公式色。**ブランドカラーではない**

### Cards

**News Card**
- Background: `rgba(148,148,148,0.1)`
- Border Radius: **0**

**Business Card**
- Background: `rgba(148,148,148,0.2)`
- Border Radius: **6px**（実測 4 要素）／ 上側だけ丸める `3px 3px 0 0` も 1 要素

### Inputs

- 実測した 2 ページに入力欄が無い。**新規実装では `border-radius: 0` ＋ `1px solid #00245c` に合わせる**

---

## 5. Layout Principles

### Spacing Scale

**余白も `rem`。** root 14px のときの実測値:

| Token | rem | px (1440px) |
|-------|-----|-------------|
| M | `2rem` | **28px** |
| L | `3rem` | **42px**（flex の `gap`） |
| XL | `4rem` | **56px**（`padding-left` の最多値・5 要素） |

### Container

- **`max-width` の宣言が無い**（実測 0 件）。コンテンツは `padding` で寄せる
- Padding (horizontal): **56px**（デスクトップ）/ **28px**（内側）

### Grid

- Gap: **42px**（`3rem`）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **全要素** |

**影は 0 種類。** `box-shadow` の実測が両ページとも空。**階層は面の濃度（`rgba(148,148,148,0.1)` → `0.2`）と紺の面でのみ表現する。**

- `filter: drop-shadow()` も使っていない。ヒーローの欧文は白背景の上なので影が要らない設計

---

## 7. Do's and Don'ts

### Do（推奨）

- **`* { font-feature-settings: "palt" }` を入れる。** これがこのサイトの字面を決めている
- **その上で `letter-spacing` を `em` で当て直す。** 本文 `0.08em` / 見出し `0.12〜0.20em`
- **サイズ・余白はすべて `rem`。** ルートが 14 / 13 / 12 / 11px の 4 段で切り替わる前提で組む
- 角丸は **0 が既定**。例外はカードの `6px` と SNS ボタンの `3px` だけ
- 本文色は **`#1a1a1a`**（純黒ではない）
- `line-height` は本文 **1.80**、読み物 **2.20**、見出し **1.10**

### Don't（禁止）

- **`palt` を外さない。** 外すと全要素の字送りが広がり、上から当てた `em` の字間と二重に効いて間延びする
- **`letter-spacing` を `px` で書かない。** ルートが 4 段で変わるため小さい画面で破綻する
- **`font-weight: 600` を新規に使わない。** Lato にも游ゴシックにも実体が無く、700 に丸められる
- **縦に見えるラベルを `writing-mode` で実装しない。** 実サイトは横組みの回転
- **`<a>` の直下に文字を置かない。** ニュース詳細で UA 既定の `#0000ff` が 1 件出ている
- 影を足さない（実測 0 種類）
- **明朝を混ぜない。** 実測 0 要素
- 和文 Web フォントを足さない。**OS ローカル依存それ自体が設計**（フォント要求は欧文の 6 件のみ）

---

## 8. Responsive Behavior

### Breakpoints

```css
@media only screen and (min-width: 979px) { html, body { font-size: 14px; } }
@media only screen and (max-width: 979px) { html, body { font-size: 13px; } }
@media only screen and (max-width: 479px) { html, body { font-size: 12px; } }
@media only screen and (max-width: 325px) { html, body { font-size: 11px; } }
```

| Name | Width | 宣言数 | root |
|------|-------|--------|------|
| Desktop | > 979px | 38 | **14px** |
| **Tablet / Mobile** | **≤ 979px** | **35** | **13px** |
| **Layout 切替** | **≤ 760px** | **74（最多）** | 13px |
| Small Mobile | ≤ 479px | 9 | **12px** |
| XS | ≤ 325px | 3 | **11px** |

- **ルートの切替（979 / 479 / 325px）とレイアウトの切替（760px）がずれている。** 760px はカラム構成だけを変え、文字サイズは 13px のまま
- 実測: 1440px → 14px / 1200px → 14px / 834px → 13px / 768px → 13px / 767px → 13px / 375px → **12px**

### タッチターゲット

- `ENGLISH` ボタンは高さ 23.4px ＋ `padding: 3px 6px` ＝ **約 30px。44px に満たない**。新規実装では縦 padding を足す

### フォントサイズの調整

- **個別に書かない。** `rem` で組んでおけばルートの 4 段切替が全部面倒を見る。モバイルでは 14px の本文が **12px** になる

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color:  #00245c
Deep Navy:      #001029
Text Color:     #1a1a1a
Muted:          #8a8a8a
Background:     #ffffff
Font:           Lato, "游ゴシック Medium", 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", sans-serif
Root Size:      14px (≥979px) / 13px / 12px (≤479px) / 11px (≤325px)
Body Size:      1rem (= 14px @desktop)
Line Height:    1.80 (本文) / 2.20 (読み物) / 1.10 (見出し)
Letter Spacing: 0.08em (本文) / 0.12〜0.20em (見出し)
palt:           * { font-feature-settings: "palt" }  ← 全要素に必須
Border Radius:  0
Shadow:         none
```

### プロンプト例

```
MICIN のデザインシステムに従って、お知らせ一覧セクションを作成してください。
- グローバルに * { font-feature-settings: "palt" } を当てる
- その上で letter-spacing は本文 0.08em、見出し 0.12em を em で指定する
- サイズと余白はすべて rem（root 14px 基準。979/479/325px で段階的に縮む）
- 本文は 1rem / line-height 1.80 / color #1a1a1a
- カテゴリタグは border 1px solid #00245c / color #00245c / 11px / weight 700 / radius 0
- カードの面は rgba(148,148,148,0.1)、角丸 0、影なし
- font-weight は 400 と 700 の 2 段だけ使う
```
