# DESIGN.md — ヒューリック（HULIC）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-12 / 対象: `https://www.hulic.co.jp/`, `/corporate/strengths/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 青一色の不動産コーポレート。**和文は詰め、欧文は空ける**という逆方向の字送りを1枚の画面で同時にやる。角丸は「ピル（9999px）か 0 か」の二択で、中間の角丸をほとんど使わない
- **密度**: 中。IR・事業紹介の情報量は多いが、セクション間を大きく空けて1画面1メッセージで見せる
- **キーワード**: 青、Forum（欧文セリフ）、和文 −0.05em、欧文 +0.025em、行間 1 が既定

**このサイトの核心は4つある。**

1. **字送りの向きが和欧で逆。** 和文の見出しは **`letter-spacing: -0.05em`**（32px → −1.6px、18px → −0.9px）で詰め、欧文の Forum は **`+0.025em`**（16px → 0.4px、60px → 1.5px、116px → 2.9px）で空ける。**本文・ナビ・リストは `normal`**（トップ 168/203 要素、下層は **165/165 要素＝100%**）。詰めるのも空けるのも、見出しだけの仕事
2. **`letter-spacing` は各要素が `em` で自分の分を宣言する**（継承ではない）。サイズが変われば px 値も比例して変わる（32px/−1.6px と 18px/−0.9px はどちらも −0.05em）。**body に一度書いて継承させる設計ではない**
3. **`line-height` の既定が `1`。** `body` が `line-height: 16px`（= font-size 16px × 無単位 1）で、宣言し直さない要素は**行送りゼロで出る**（比率 1.00 がトップ 59 要素 / 下層 32 要素）。本文ブロックは各自 1.4 / 1.5 / 1.8 を宣言して取り返している
4. **ヒーローの明朝は画像。** スクリーンショットの「駅と未来に近いビル。」は大きな明朝の字空けに見えるが、`distributions.fontFamily` に**明朝が 1 要素も出ない**。実体は `txt_main01.png`（PC）/ `txt_main01_sp.png`（SP）という**文字を焼き込んだ PNG** で、`img_main01.jpg`（1600×920）の写真に重ねている。**ここを Web フォントで実装しない**

**CSS Custom Properties は 2 ページとも 0 個**（`own: 0 / platform: 0`）。設計トークンは存在せず、値はすべて個別の CSS に直書きされている。
**`font-feature-settings` は 2 ページとも 0 件**（`palt` を使っていない）。**縦組みも 0 要素。**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Hulic Blue** | **`#006aac`** | ヘッダー右の `物件を探す` `お問い合わせ`（可視 2 面）。`pageBackground.resolved` もこの色（根拠 `viewportTopBySample`）だが、**これはヘッダー CTA を拾った値。コンテンツの地色は白** |
| **Link Blue** | **`#005caa`** | アウトラインボタンの文字色（`ABOUT US` `VIEW MORE`）。`#006aac` と 6 桁で別値なので**丸めない** |
| **Navy（見出し）** | **`#003f76`** | セクション見出し・パンくず。トップ 21 要素 / 下層 **36 要素**。下層では本文 `#333333` に次ぐ第2の文字色 |
| **Sky** | **`#81b3d5`** | カルーセルの `PREV` / `NEXT` の円面（可視 6 要素） |
| **Magenta** | **`#d1277c`** | **`NEW` バッジ専用**（可視 10 要素）。青一色の画面に1色だけ差す |
| **Slate** | **`#385a70`** | `IR資料` `ニュース` のカテゴリタグ（可視 5 要素） |
| **Cyan** | **`#01b4cd`** | 連番 `01` `02` `03` の数字のみ（可視 4 要素、Forum 48px） |

> **青が3つ（`#006aac` / `#005caa` / `#003f76`）あるのは実装の実態。** 面に使うのは `#006aac`、文字リンクは `#005caa`、見出しは `#003f76` と役割が分かれている。**1色に統合しない。**

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・ナビ（トップ 109 要素 / 下層 105 要素で最多）
- **Text on Dark** (`#ffffff`): 青面・写真上のテキスト（31 要素）
- **Text Strong** (`#222222`): ヒーロー脇のリード文（4 要素）。`#333333` とは別値
- **Text Muted** (`#777777`): PDF の容量表記 `（406KB）` など（8 要素）
- **Text Muted 2** (`#888888`): IR のカテゴリ行（3 要素）
- **Text Sub** (`#444444`): カードの小見出し（4 要素）
- **Surface** (`#f4f7fb`): ニュース行・カードの面（トップ 6 / 下層 3 要素）
- **Surface Blue** (`#e4ebf4`) / **`#d6e4f0`**: セクション帯・パンくず
- **Surface Blue Light** (`#e5f0f7`): 下層の実績ブロック（4 要素）
- **Surface Gray** (`#f7f7f7`): 下層のカード面（4 要素）
- **Accent Fill** (`#3079a7`) / **`#dae6f1`**: 下層「取り組む領域」/「非注力分野」の対比面
- **Hero Tint** (`rgba(186, 221, 242, 0.8)`): 下層ヘッダーの淡い青の覆い（`div::after`、518,400px²）
- **Header Veil** (`rgba(255, 255, 255, 0.85)`): 固定ヘッダーの半透明白
- **Background** (`#ffffff`): ページ背景。**`html` / `body` ともに背景指定が無く、UA 既定の白**（`canvasUnpainted: true`）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**（Google Fonts、可変フォント `100 900`）。トップ **168 要素** / 下層 **152 要素**。これ1本で全ての和文を組む
- **明朝体**: **使わない。** 2 ページを走査して明朝・セリフ系の和文は**可視 0 要素**。ヒーローの明朝は画像（1章参照）

### 3.2 欧文フォント

- **セリフ**: **Forum**（Google Fonts、weight 400 のみ）。トップ 34 要素 / 下層 11 要素。`ABOUT US` `VIEW MORE` `PICK UP` `01` などの**ラベルと連番専用**
- **サンセリフ**: 専用指定なし。欧文も Noto Sans JP の欧文グリフで出る
- **フォント取得**: `fonts.gstatic.com` へ **36 件**（Noto Sans JP の unicode-range サブセット＋Forum 1 本）。`document.fonts` は Forum 400 と Noto Sans JP `100 900` が **`loaded`**

### 3.3 font-family 指定

```css
/* 本文・見出し（和文） */
font-family: "Noto Sans JP", sans-serif;

/* ラベル・連番（欧文） */
font-family: Forum, serif;

/* 和欧混在の1要素だけこの順（「物件をお探しのお客さまはこちら」） */
font-family: Forum, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **和文スタックは `"Noto Sans JP", sans-serif` の2語だけ。** 游ゴシック・ヒラギノを一切書かない割り切った設計。Web フォントが落ちると OS 既定のゴシックに素通りする
- `Forum, serif` は欧文書体に `serif` を受け皿にした正しい形。**和文を含む要素にこのスタックを当てない**（和文は `serif` 側＝明朝で出てしまう）

### 3.4 文字サイズ・ウェイト階層

**ルートは `16px` 固定**（`html` も `body` も 16px）。**ただし 768px 未満だけ流体**（8章参照）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | Forum | 116px | 400 | 1.1 | **+0.025em** (2.9px) | `ABOUT US` `BUSINESS` セクション見出し |
| Display 2 (EN) | Forum | 96px | 400 | 1.1 | **−0.025em** (−2.4px) | `PICK UP` `NEWS`。**ここだけ欧文を詰める** |
| Sub Display (EN) | Forum | 60px | 400 | 1.1 | +0.025em (1.5px) | `BRAND SITE` |
| Numeral (EN) | Forum | 48px | 400 | 1.3 | +0.05em (2.4px) | `01` `02` `03`（色 `#01b4cd`） |
| Heading 1 (JP) | Noto Sans JP | 32px | 600 | 1.4 | **−0.05em** (−1.6px) | `会社情報` `中長期経営計画` |
| Heading 2 (JP) | Noto Sans JP | 28px | 500 | 1.6 | −0.05em | 下層のセクション見出し |
| Lead (JP) | Noto Sans JP | 18px | 400 | 1.6 | **−0.05em** (−0.9px) | ヒーロー脇のリード文（色 `#222222`） |
| Label (EN) | Forum | 20px / 18px | 400 | 1.1 | +0.025em | `VIEW MORE` |
| Body | Noto Sans JP | 16px | 400 | **1.8** | normal | 本文。下層 38 要素 |
| List / Nav | Noto Sans JP | 15px / 17px | 400–600 | 1.4 | normal | グローバルナビ・サイドメニュー |
| Caption | Noto Sans JP | 14px | 400 | 1.5 | normal | 日付・ニュース見出し（最多サイズ・60 要素） |
| Small | Noto Sans JP | 12px | 400 | 1.5 | normal | タグ・注記（色 `#777777`） |

- **weight は 400 / 500 / 600 の3段**（トップ 153 / 18 / 32 要素）。**下層にだけ 700 が 4 要素**（`成長性` `安全性` `収益性` の指標ラベル）。可変フォントなので 700 も正しく出るが、**原則 600 で止める**

### 3.5 行間・字間

- **`line-height` の既定は `1`（無単位）。** `body { line-height: 1 }` 相当が全体に降り、**宣言し直さない要素は行送りが font-size と同値**になる（比率 1.00 がトップ 59 要素）。無単位なので子は自分のサイズで再計算する（15px の要素は 15px、32px の要素は 32px）
- **本文ブロックは必ず `line-height` を宣言する**: 1.8（本文）/ 1.6（リード・下層見出し）/ 1.5（ニュース行）/ 1.4（ナビ・見出し、トップ 55 / 下層 61 要素で最多）
- **字間は3つのルールしかない**:
  - 本文・ナビ・リスト → **`normal`**（トップ 168 要素、下層 **165/165 = 100%**）
  - 和文の見出し・リード → **`-0.05em`**
  - 欧文の Forum → **`+0.025em`**（例外: `PICK UP` `NEWS` の 96px だけ `-0.025em`、連番 48px は `+0.05em`）
- **`em` で各要素に当てる。px に読み替えない。** 32px → −1.6px と 18px → −0.9px が同じ −0.05em で揃っている＝比例している＝ `em` 宣言の証拠。**px で固定すると見出しサイズを変えたときに字間だけ取り残される**

### 3.6 禁則処理・改行ルール

```css
/* 実サイトは word-break / overflow-wrap を body で指定していない（computed: normal） */
word-break: normal;
overflow-wrap: anywhere;   /* 推奨: 長いURL・英数字の溢れ対策として足す */
line-break: strict;        /* 推奨 */
```

- `word-break: auto-phrase` は**使っていない**。改行位置はブラウザ既定のまま
- 見出しの改行は HTML 側で `\n` を入れて制御している（リード文に実改行が入っている）

### 3.7 OpenType 機能

**`font-feature-settings` は 2 ページとも 0 件。`palt` を使っていない。**

和文の字詰めは `palt`（プロポーショナルメトリクス）ではなく **`letter-spacing: -0.05em` という一律の負の字送り**で作っている。
この2つは別物で、

- `palt` … 約物（「」、。）など**文字ごとに詰め幅が変わる**
- `-0.05em` … **全部の字間を同じだけ詰める**（約物の間延びは直らない）

**このサイトの見た目を再現するなら `-0.05em` を使う。`palt` を足すと詰まりすぎる。**

### 3.8 縦書き

**該当なし**（`writing-mode: vertical-*` は 2 ページとも 0 要素）。

---

## 4. Component Stylings

### Buttons

**Primary（ヘッダー CTA）** — `物件を探す` / `お問い合わせ`
- Background: `#006aac`
- Text: `#ffffff` / 13px / weight **600** / line-height 1.0
- Border Radius: **`0px`**
- Letter Spacing: `normal`
- Box Shadow: none

**Outlined Pill（セクション導線）** — `ABOUT US` / `MANAGEMENT PLAN`
- Background: `transparent`
- Text: `#005caa` / 18px / weight 400 / line-height 1.0
- Border: `1px solid #6ea9cf`
- Border Radius: **`30px`**
- Font: Forum / letter-spacing `+0.025em`

**Outlined Pill 2（`VIEW MORE`）**
- Background: `transparent`
- Text: `#005caa` / 16px / weight 400
- Border: `1px solid rgba(0, 106, 172, 0.5)`
- Border Radius: **完全なピル**（実測 `3.35544e+07px` = `border-radius: 9999px` 系の指定。**`9999px` と書けばよい**）

**Carousel Arrow** — `PREV` / `NEXT`
- Background: `#81b3d5` / Text: `#333333` / 16px / 400
- Border Radius: `16px`（小）/ `24px`（大）

### Badges / Tags

- **`NEW`**: 背景 `#d1277c` / 文字 `#ffffff` / **Forum 14px / 400** / radius `14px`（＝高さの半分でピル）
- **カテゴリタグ**（`IR資料` `ニュース`）: 背景 `#385a70` / 文字 `#ffffff` / 12px / weight 600 / radius `0px` / line-height 1.5

### Cards

- Background: `#f4f7fb`（ニュース行）/ `#ffffff`（下層の指標カード）
- Border Radius: `0px`（ニュース行）/ `9999px`（下層の指標ピル）
- Shadow: トップ `rgba(0, 0, 0, 0.2) 0 0 8px 0`（3 要素）/ **下層 `rgba(17, 88, 132, 0.1) 0 3px 6px 0`（6 要素）**

> **下層の影は黒ではなく青（`rgba(17, 88, 132, …)`）。** 黒に丸めると沈んで見える。**offset・blur・色をそのまま写す。**

### Inputs

トップ・下層ともフォーム要素が無いため**実測値なし**。実装が必要なら Outlined Pill の枠色 `rgba(0, 106, 172, 0.5)` と radius `0px` に合わせる。

---

## 5. Layout Principles

### Container

| 用途 | 幅 | 実測 |
|------|----|----|
| 標準コンテナ | **1320px** | トップ 5 / 下層 2 要素 |
| 狭いコンテナ | **1280px** | トップ 1 / 下層 3 要素 |
| 本文カラム | **960px** | 下層 1 要素 |

### Spacing Scale

明示的なトークンは無い。実測で使われている値は **4 / 8 / 16 / 24 / 30 / 40px** 系。
角丸は **`0px` / `2px` / `4px` / `14px` / `16px` / `24px` / `30px` / `9999px` の 8 種**で、
**中心は「0 か 9999（ピル）か」の二択**。16〜30px は円形ボタンの半径として出ているだけ。

### Grid

`display: grid` の `gap` が 2 ページとも検出されず（`gaps: []`）、**レイアウトは float / flex と margin で組んでいる**。新規実装で grid を使うのは構わないが、既存ページとの整合は margin ベースで取る。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | 既定。**ほぼ全ての要素** | トップ 203 要素中 200 要素 |
| 1 | `rgba(17, 88, 132, 0.1) 0 3px 6px 0` | 下層の指標ピル | 6 要素 |
| 2 | `rgba(0, 0, 0, 0.2) 0 0 8px 0` | トップのニュースカード | 3 要素 |

**影は実質2種類しかなく、しかも色が違う**（下層は青み、トップは黒）。**影を足しすぎない。**

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文の見出しは **`letter-spacing: -0.05em`**、欧文の Forum は **`+0.025em`** を `em` で各要素に書く
- 本文・ナビ・リストの `letter-spacing` は **`normal`** のままにする
- 本文ブロックには `line-height` を**必ず明示する**（1.8 / 1.6 / 1.5 / 1.4）。宣言を省くと既定の `1` が降りて行が潰れる
- 青は役割で使い分ける（面 `#006aac` / リンク `#005caa` / 見出し `#003f76`）
- 角丸は `0px` かピル（`9999px`）に寄せる
- ボタンの影は使わない（`box-shadow: none`）

### Don't（禁止）

- **ヒーローの大きな明朝を Web フォントで実装しない。** 実サイトは PNG（`txt_main01.png`）で、サイトに明朝は1要素も存在しない
- **`palt` を足さない。** このサイトは 0 件。字詰めは `-0.05em` で作っている
- **`letter-spacing` を px で固定しない。** 各要素が `em` で宣言しており、サイズに比例する
- **`line-height` を無単位 `1` のまま本文に使わない**（実サイトの既定だが、本文は必ず上書きしている）
- 和文に `Forum, serif` を当てない（和文が明朝にフォールバックする）
- 3つの青を1色にまとめない
- 影の色を黒に丸めない（下層は `rgba(17, 88, 132, 0.1)`）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | **≤ 767px** | ルートが流体に切り替わる（下記） |
| Desktop | **≥ 768px** | `html { font-size: 16px }` 固定 |
| Container | 1320px / 1280px | コンテナ幅の上限 |

### ルートの流体化（768px に崖がある）

**`html` の font-size は 768px 以上で `16px` 固定、767px 以下で `4.267vw`。** 実測:

| 幅 | `html` font-size |
|----|------------------|
| 1920px | 16px |
| 1440px | 16px |
| 800px | 16px |
| **768px** | **16px** |
| **767px** | **32.73px** |
| 600px | 25.60px |
| 430px | 18.35px |
| **375px** | **16.00px** |
| 320px | 13.65px |

- **768 → 767px の 1px で、ルートが 16px から 32.73px へ 2.05 倍に跳ぶ。** `rem` で書いた値は**すべて 2 倍になる**
- 式の分母から設計幅が読める: `4.267vw` は **375px のときちょうど 16px** に着地する＝**モバイルの設計幅は 375px、ルート 16px**。375px の画面に合わせたレイアウトを、画面幅に比例してそのまま拡大する方式
- **実装するときは `rem` を使う。** `px` で固定するとモバイルで拡大に追従せず、375px 設計のレイアウトが崩れる
- **規定の 4 幅（1440 / 1200 / 834 / 375px）だけ測ると、834px と 375px はどちらも 16px なので崖が見えない。** 767px を必ず測ること

```css
html { font-size: 16px; }
@media (max-width: 767px) {
  html { font-size: 4.267vw; }   /* 375px で 16px */
}
```

### タッチターゲット

- ヘッダー CTA（`物件を探す`）、Outlined Pill（30px radius / 18px 文字）は 44px を満たす
- **`VIEW MORE`（16px 文字）とカテゴリタグ（12px / radius 0）は下回る。** モバイルでは上下 padding で 44px を確保する

### フォントサイズの調整

- デスクトップでは `html` 16px 固定なので、**見出しのサイズ差（116 / 96 / 60 / 48 / 32 / 18px）はそのまま**
- モバイルは `rem` がルートに追従して全体が拡縮する。**個別にブレークポイントで縮める設計ではない**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Hulic Blue:   #006aac   (面・ヘッダーCTA)
Link Blue:    #005caa   (リンク・アウトライン文字)
Navy:         #003f76   (見出し)
Sky:          #81b3d5   (カルーセル矢印)
Magenta:      #d1277c   (NEW バッジのみ)
Slate:        #385a70   (カテゴリタグ)
Cyan:         #01b4cd   (連番 01/02/03)
Text:         #333333
Text Strong:  #222222
Muted:        #777777
Surface:      #f4f7fb / #e4ebf4 / #d6e4f0 / #e5f0f7
Background:   #ffffff

Font (JP): "Noto Sans JP", sans-serif
Font (EN): Forum, serif
Root: 16px (>=768px) / 4.267vw (<=767px, 375px設計)
Body: 16px / line-height 1.8 / letter-spacing normal
Heading JP: 32px / 600 / 1.4 / letter-spacing -0.05em
Lead JP:    18px / 400 / 1.6 / letter-spacing -0.05em
Display EN: 116px / Forum / 1.1 / letter-spacing +0.025em
line-height 既定: 1（無単位）— 本文は必ず上書きする
font-feature-settings: なし（palt 0 件）
Border Radius: 0px か 9999px（ピル）
Shadow: rgba(17,88,132,0.1) 0 3px 6px 0 / rgba(0,0,0,0.2) 0 0 8px 0
Container: 1320px / 1280px / 960px
```

### プロンプト例

```
ヒューリックのデザインシステムに従って、事業紹介ページを作成してください。
- 和文は "Noto Sans JP", sans-serif の1本だけ。明朝は使わない
- 欧文のラベル・連番は Forum, serif
- letter-spacing: 和文の見出しとリードは -0.05em、欧文の Forum は +0.025em、本文とナビは normal
- letter-spacing は px ではなく em で各要素に書く
- line-height は本文 1.8 / リード 1.6 / ニュース行 1.5 / 見出しとナビ 1.4 を必ず明示する
- セクション見出しは英語 116px Forum（+0.025em）＋ 和文 32px / weight 600 / -0.05em の二段
- CTA は背景 #006aac / 白 / 13px / weight 600 / border-radius 0
- 「VIEW MORE」は透明背景 / 文字 #005caa / 1px solid rgba(0,106,172,0.5) / border-radius 9999px
- 「NEW」バッジは背景 #d1277c / Forum 14px / border-radius 14px
- カードの影は rgba(17,88,132,0.1) 0 3px 6px 0（黒にしない）
- コンテナは 1320px
- html の font-size は 768px 以上で 16px、767px 以下で 4.267vw（375px 設計）。サイズは rem で書く
- palt は使わない。縦組みも使わない
```
