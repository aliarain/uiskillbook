# DESIGN.md — 世田谷文学館（SETABUN）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-02 / 対象: `https://www.setabun.or.jp/`, `/exhibition/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **CSS Custom Properties を 1 個も持たないまま、Adobe Fonts の見出し書体 3 本で階層をつくる。** 色はマゼンタ `#ff0066` とシアン `#00baec` の 2 原色をべた面で置き、中間色を使わない
- **密度**: 高い。トップページはカレンダー・展覧会・NEWS・開館時間を同時に見せるタイル構成で、可視テキスト 448 要素
- **キーワード**: 2 原色、見出しゴシック 3 本、`html` に 1 回だけ書いた字間、影ゼロ、文学館

**このサイトの核心は 4 つある。**

1. **字間・行間・`palt`・文字色・書体を、すべて `html` に 1 回だけ書いて継承させている。** `letter-spacing: 0.08em` は 14px の `html` で **1.12px** に解決し、**可視 448 要素中 417 要素**がその値を持つ（下層ページも 84 要素中 63 要素）。`palt` は **1188 要素**に降りている。**子要素で字間を再宣言しない設計**
2. **ルート font-size が 14px。16px ではない。** `html { font-size: 14px }` なので `rem` の換算が全部変わる。`18.72px`（カレンダーの日付・186 要素）、`11.52px`（曜日・42 要素）のような半端な数値は、ここから派生したスケールの結果
3. **Adobe Fonts の見出し書体 3 本を用途で固定している。** 欧文ラベル＝`rig-shaded-bold-face`（可視 293 要素）、和文ナビ・見出し＝`a-otf-midashi-go-mb31-pr6n`（＝A-OTF 見出ゴ MB31 Pr6N・74 要素）、展覧会タイトル＝`toppan-bunkyu-midashi-go-std`（＝凸版文久見出しゴシック・46 要素）。**本文だけが OS のヒラギノ**（31 要素）
4. **Web フォントが揃うまでページ全体を隠す。** `html { visibility: hidden }` ／ `html.wf-active { visibility: visible; animation: fadeIn 1s }`。Typekit が `wf-active` を付けるまで**白紙**になる、強い割り切り

**CSS Custom Properties は 0 個**（トップ・下層とも `total: 0`）。色もサイズも変数化せず、すべてセレクタ側に直書きしている。**`box-shadow` も実質 0**（CSS 全文で 1 回だけ、slick 由来で可視 0 要素）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **マゼンタ（面）** | **`#ff0066`** | **塗り面 5 要素**（CSS 全文 6 回）。開館日バッジ、`本日開館` の帯、`ムットーニのからくり劇場` の見出し面。ロゴとグローバルナビの被せ面は `rgba(255,0,102,.9)` |
| **マゼンタ（CTA）** | **`#e81a79`** | **`詳しくはコチラ` ピル専用**（CSS 全文 3 回）。`#ff0066` よりわずかに暗く彩度が低い |
| **シアン** | **`#00baec`** | **塗り面 4 要素**（CSS 全文 11 回）。`TICKET` ボタン、NEWS ブロック、`休館日` バッジ、カレンダーの開館日の数字（**文字色として 37 要素**） |
| **イエロー** | **`#ecb319`** | 下層の `開催中の展覧会` 見出し面。トップには出ない |

> **マゼンタが 2 つあるのは実装の実態。** 面に使うのは `#ff0066`、ピル型 CTA だけ `#e81a79`。**新規実装では `#ff0066` に寄せてよいが、既存ページと並べるときは 2 色あることを前提にする。**

### Neutral（ニュートラル）

- **Text Primary** (`#1a1a1a`): 本文・見出し。**可視 250 要素**。`html` で宣言し全体へ継承（CSS 全文 29 回）。**純黒 `#000000` は本文に使わない**
- **Text on Dark** (`#ffffff`): 黒面・マゼンタ面・シアン面の上のテキスト（可視 80 要素）
- **Text Muted** (`#939393`): カレンダーの曜日ラベル（可視 42 要素）
- **Text Sub** (`#333333`): `TICKET` / `language` などヘッダーの一部（可視 8 要素）
- **Black（面）** (`#000000`): `図録・グッズの販売はこちら` ピル、`オンラインチケットサイト` の矩形ボタン、カレンダーの日付背景
- **Emergency** (`#1a1a1a`): 休止告知の全幅帯（面）
- **Beige** (`#f0debe`): ライブラリー〈ほんとわ〉ブロックの面（3 要素）
- **Border/Surface Gray** (`#ececec`): フッター・カルーセル周辺の面
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample (3/3)`。`html` と `body` はどちらも `transparent`）

---

## 3. Typography Rules

### 3.1 和文フォント

- **本文**: **ヒラギノ角ゴ**（`"Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo`）。Web フォントではなく OS 書体
- **見出し・ナビ（和文）**: **A-OTF 見出ゴ MB31 Pr6N**（Adobe Fonts: `a-otf-midashi-go-mb31-pr6n`）。グローバルナビ、フッターナビ、ページタイトル、ローカルナビ、縦組みの `企画展` ラベル。CSS 全文で **28 回**
- **展覧会タイトル**: **凸版文久見出しゴシック**（Adobe Fonts: `toppan-bunkyu-midashi-go-std`）。CSS 全文で **10 回**。告知帯と展覧会名だけに使う
- **丸ゴシック（限定）**: **Zen Maru Gothic**（Google Fonts、weight 700）。会員制度の案内 **2 要素だけ**

### 3.2 欧文フォント

- **欧文ラベル・数字**: **Rig Shaded Bold Face**（Adobe Fonts: `rig-shaded-bold-face`、weight 700）。`TICKET` `language` `NEWS` `MON/TUE/WED` とカレンダーの日付。**可視 293 要素でサイト最多**。CSS 全文で 16 回
- **アイコン**: Font Awesome 5 Free（weight 900、`loaded`）

> **Rig Shaded は欧文専用の装飾書体**。スタックは `rig-shaded-bold-face, sans-serif` で和文グリフを持たないため、**同じ要素に日本語が混ざると和文だけ `sans-serif`（OS 既定）に落ちる**。実サイトの `English` `簡体中文` などがそれ。**意図的に欧文だけ装飾している**と読む。

### 3.3 font-family 指定

```css
/* 本文（html に 1 回だけ。body ではない） */
html {
  font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, "sans-serif";
  font-size: 14px;
  color: #1a1a1a;
  line-height: 1.5;
  font-feature-settings: "palt" 1;
  letter-spacing: 0.08em;
}

/* 和文の見出し・ナビ */
font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
font-weight: 600;
font-style: normal;

/* 展覧会タイトル */
font-family: toppan-bunkyu-midashi-go-std, sans-serif;
font-weight: 900;
font-style: normal;

/* 欧文ラベル・数字 */
font-family: rig-shaded-bold-face, sans-serif;
font-weight: 700;
font-style: normal;
```

**実サイトの誤り（正しくはこう書く）**:
実サイトは `Meiryo, "sans-serif"` と**総称ファミリを引用符で囲んでいる**。CSS では引用符を付けると「`sans-serif` という名前のフォント」の指定になり、**総称ファミリとして機能しない**。新規実装では引用符を外して `..., Meiryo, sans-serif` と書くこと。

**フォールバックの考え方**:
- 和文を先頭に置き、最後に総称ファミリ（**引用符なし**）
- 見出し用の Adobe Fonts は和文・欧文で別書体なので、**1 つのスタックに混ぜず用途ごとに差し替える**
- `font-weight` は書体とセットで必ず書く（3.4 参照）

### 3.4 文字サイズ・ウェイト階層

**`h1`〜`h6` はリセットで `font-size: 100%; font-weight: normal` に潰してある。** 実測でも `h1` `h2` `h3` はすべて 14px / weight 400。**見出しの大きさは要素ではなくクラス（`.page_tit` `.categoryTit` `h3 .ja` など）が決める。**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Page Title | 見出ゴ MB31 | 57px | 600 | 1.5 | 0.08em (4.56px) | `.page_tit`。下余白 75px |
| 展覧会タイトル | 凸版文久見出しゴ | 28.8px | 900 | 1.4 | 0.08em | 告知帯・展覧会名（可視 7 要素） |
| Section Heading (JA) | 見出ゴ MB31 | 24px | 600 | 1.0 | 0.08em | `h3 .ja`。白面 + 2px solid #000000、上に -28px ずらす |
| Section Heading (EN) | Rig Shaded | 26px | 700 | 1.0 | 0.08em | `h3 .en`。和文見出しの上に重ねる |
| Local Nav | 見出ゴ MB31 | 20px | 600 | — | 0.08em | `.local_navi` |
| Nav / CTA | 見出ゴ MB31 | 18px | 600〜700 | 1.11 | 0.08em | `ご利用案内` `展覧会情報` `TICKET` |
| Lead | 見出ゴ MB31 | 19px | 600 | 1.4 | 0.08em | `.outline_lead` |
| Calendar Date | Rig Shaded | 18.72px | 700 | 1.0 | 0.08em | **可視 186 要素でサイト最多** |
| Body | ヒラギノ角ゴ | 14px | 400 | 1.5 (21px) | 0.08em (1.12px) | `html` の既定 |
| News / Caption | ヒラギノ角ゴ | 13px / 15px | 400 | 1.5 | 0.08em | 言語切替 39 要素 / NEWS 32 要素 |
| Calendar Weekday | Rig Shaded | 11.52px | 700 | 1.0 | 0.08em | 色 `#939393`（42 要素） |
| Footer | ヒラギノ角ゴ | 12px | 400 | 1.5 (18px) | 0.08em | 白文字 |

**ウェイトは「太さの指定」ではなく「書体の選択」。** 3 書体はそれぞれ単一ウェイトで配信されている（`@font-face` の宣言は 見出ゴ MB31 = 600 / Rig Shaded = 700 / 凸版文久見出しゴ = 900）。**宣言どおりの値だけを使うこと。** 見出ゴ MB31 に `700` を当てるとブラウザの合成太字になって字形が崩れる。

### 3.5 行間・字間

- **本文の行間**: **1.5**（14px / 21px）。`html` で宣言し全体へ継承。可視 111 要素
- **見出し・ラベルの行間**: **1.0**（可視 291 要素でサイト最多）。カレンダー・バッジ・ナビはベタ組み
- **展覧会タイトルの行間**: **1.4**
- **本文の字間**: **`0.08em`**。14px の `html` で **1.12px** に解決し、**可視 417 要素**が継承する
- **例外**: カレンダーの日付ブロックだけ `-1.4px`（`2026` `10.2` `金` の 3 要素）、`OPEN` `本日開館` は `normal`

**ガイドライン**:
- **字間は `html` に `0.08em` と 1 回だけ書く。** 要素ごとに px で書き直さない（下位要素は px で継承されるので、サイズが違っても 1.12px のまま。それがこの設計の意図）
- ベースが 14px なので、**本文を 16px に上げると字間は 1.28px に動く**。px 固定にしたい場合は `html` 側で揃える
- カレンダー・バッジは `line-height: 1.0` + 上下パディングで高さを作る（例: `padding: 3.744px 5.616px .936px` — 下パディングを削って視覚的に中央へ寄せている）

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの宣言（CSS 全文で word-break は 1 回だけ） */
word-break: break-all;   /* 施設情報の告知帯のみ */
```

- **`word-break` をグローバルには当てていない。** 既定（`normal`）のまま
- `word-break: auto-phrase` は使っていない。文節での改行が欲しい場合は実装側で追加する
- 展覧会名のような固有名詞は `<br>` で手動改行している

### 3.7 OpenType 機能

```css
font-feature-settings: "palt" 1;   /* html に 1 回。可視 1188 要素へ継承 */
```

- **`palt` はサイト全体に効いている。** トップ 1188 要素 / 下層 227 要素。本文・見出し・ナビの区別なく一律
- `palt` と `letter-spacing: 0.08em` を**同時に**当てている。約物を詰めたうえで全体を 0.08em 空ける構え
- `tnum` など他の feature は使っていない

### 3.8 縦書き

```css
/* 企画展カードのカテゴリラベル */
writing-mode: vertical-rl;
font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
font-weight: 600;
font-size: 28px;
line-height: 1.5;      /* 42px */
letter-spacing: 0.08em; /* 2.24px */
```

- **実装された縦組みは 2 要素だけ**（`.category` = `コレクション展` ／ `.category.yokoku` = `企画展`）。展覧会カードの左端に立てるラベル
- ヒーローのポスター内に見える縦組みは**画像に焼き込まれた文字**で、CSS の縦組みではない
- 本文を縦組みにはしない

---

## 4. Component Stylings

### Buttons

**Primary（マゼンタのピル）** — `詳しくはコチラ`

- Background: `#e81a79`
- Text: `#ffffff`
- Font: 見出ゴ MB31 相当 / 14px / weight 700
- Padding: `5.6px 14px 4.2px`（**下を 1.4px 削って視覚中央に寄せる**）
- Border Radius: `40px`
- Letter Spacing: `1.12px`

**Secondary（黒のピル）** — `図録・グッズの販売はこちら`

- Background: `#000000`
- Text: `#ffffff`
- Font: 18px / weight 700
- Padding: `7.2px 18px 5.4px`
- Border Radius: `30px`

**Rectangle（矩形 CTA）** — `オンラインチケットサイト`

- Background: `#000000`
- Text: `#ffffff`
- Font: 19px / weight 600
- Padding: `13.3px 57px 13.3px 19px`（**右に 57px の余白＝矢印アイコンの逃げ**）
- Border Radius: `0`

**Outlined（白地＋黒罫）** — セクション見出し `h3 .ja`

- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: `2px solid #000000`
- Font: 24px / weight 600 / line-height 1.0
- Padding: `10px 15px`
- Border Radius: `0`
- **`margin-top: -28px`** で上の欧文見出しに食い込ませる

### Badges

- **TICKET**（シアン）: 背景 `#00baec` / 文字 `#333333` / 18px / weight 700 / radius `0` / `padding: 4px 10px 0 30px`
- **休館日**（シアン）: 背景 `#00baec` / 文字 `#ffffff` / 14.4px / weight 400 / radius `4px` / `padding: 7.2px 11.52px`
- **OPEN**（白地マゼンタ文字）: 背景 `#ffffff` / 文字 `#ff0066` / 18.144px / weight 700 / letter-spacing `normal`
- **カレンダー日付**: 背景 `#000000` / 文字 `#e2e4e2` / 18.72px / weight 700 / radius `0`

### Cards

- Background: `#ffffff`
- Border: なし（**面の色でブロックを分ける**）
- Border Radius: `4px`（可視 10 要素。これがサイトの既定）
- Shadow: **なし**（6 章参照）
- 画像の上に文字を載せるときは `rgba(0,0,0,.6)` のオーバーレイ（可視 6 要素）

### Inputs

- Google カスタム検索をそのまま使用（`tahoma, arial, sans-serif` / 14px）
- **サイト側のフォーム意匠は持っていない**。新規実装では本文書体・14px・`border-radius: 4px` に合わせること

---

## 5. Layout Principles

### Spacing Scale

明示的なスケールは無い。実測で繰り返し出る値:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | ピルの上下パディング |
| S | 10px / 15px | バッジ・見出しのパディング |
| M | 20px / 30px | セクション内の間隔、見出しの下余白 |
| L | 50px | `.btn_back` の上余白 |
| XL | 60px / 75px | フッターナビ・ページタイトルの下余白 |
| XXL | 80px | ローカルナビの下余白 |

### Container

| 用途 | Max Width |
|------|-----------|
| 最大外枠 | **1450px** |
| 標準コンテンツ | **1380px** |
| 記事幅 | **1060px**（下層の既定） |
| 読み物幅 | **860px** |
| カラム | **527px** / 496px |

- `gap` はほぼ使わず（可視 1 件）、**`margin` と `flex` の `justify-content` で組む**

### Grid

- トップのヒーローは **3 カラム**（企画展カード / 外観写真 / 開館情報＋NEWS）を `flex` で横並び
- カレンダーは `table`（`th` = 曜日 / `td` = 日付）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **サイトのすべて** |

- **影を 1 つも使っていない。** 可視要素の `box-shadow` は **0 種**、CSS 全文でも 1 回（`0 5px 5px hsla(0,0%,0%,.20)`、slick 由来で可視 0 要素）
- `filter: drop-shadow()` も **0 件**
- **奥行きは色面の重なりと 2px の黒罫で出す。** 新規実装で影を足さないこと

---

## 7. Do's and Don'ts

### Do（推奨）

- **字間・行間・`palt`・文字色・書体は `html` に 1 回だけ書いて継承させる**
- ルートを **14px** にする。本文・NEWS・フッターのサイズはここから決まる
- 見出しは**書体で**作る（欧文 = Rig Shaded / 和文 = 見出ゴ MB31 / 展覧会名 = 凸版文久見出しゴ）
- `font-weight` は書体の素のウェイト（600 / 700 / 900）だけを使う
- 色面は `#ff0066` と `#00baec` の 2 原色。中間色を挟まない
- 文字色は `#1a1a1a`。黒面の上は `#ffffff`

### Don't（禁止）

- **子要素で `letter-spacing` を再宣言しない**（継承された 1.12px を壊す）
- **`h1`〜`h6` のサイズに頼らない。** このサイトでは全部 14px に潰れている
- **影を足さない**（`box-shadow` / `drop-shadow` ともサイトに存在しない）
- **CSS 変数を前提にしない。** このサイトは 0 個
- Rig Shaded のスタックに日本語を渡さない（和文グリフを持たず OS 既定に落ちる）
- 見出ゴ MB31 に `700`、凸版文久見出しゴに `700` を当てない（合成太字になる）
- 総称ファミリを引用符で囲まない（実サイトの `"sans-serif"` は誤り）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile S | ≤ 480px | `screen and (max-width: 480px)`（CSS 内 4 回） |
| Mobile | ≤ 640px | `screen and (max-width: 640px)`（3 回） |
| Tablet | ≤ 768px | `screen and (max-width: 768px)`（**最多の 7 回**） |
| Laptop | ≤ 950px / ≤ 1060px | コンテンツ幅の切り替え |

- すべて `max-width` 指定の**デスクトップファースト**

### フォントサイズの調整

- **`html` は 4 幅（1440 / 1200 / 834 / 375px）すべてで 14px 固定。** `body` も 14px / line-height 21px / letter-spacing 1.12px のまま動かない
- 字間・行間・`palt` もブレークポイントで変わらない
- 変えているのは見出しサイズとレイアウトだけ

### タッチターゲット

- `オンラインチケットサイト`（高さ約 52px）、`TICKET`（約 28px）
- **`TICKET` と言語切替は 44px を下回る。** モバイルでは高さを確保すること

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Magenta (面):   #ff0066
Magenta (CTA):  #e81a79
Cyan:           #00baec
Yellow:         #ecb319
Beige:          #f0debe
Text:           #1a1a1a
Text Muted:     #939393
Background:     #ffffff

Root Font Size: 14px   ← 16px ではない
Font (本文):    "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Font (和文見出): a-otf-midashi-go-mb31-pr6n, sans-serif  / weight 600
Font (展覧会名): toppan-bunkyu-midashi-go-std, sans-serif / weight 900
Font (欧文):    rig-shaded-bold-face, sans-serif         / weight 700
Body Size:      14px
Line Height:    1.5（本文） / 1.0（ラベル・カレンダー） / 1.4（展覧会名）
Letter Spacing: 0.08em（html に 1 回。14px で 1.12px に解決）
font-feature:   "palt" 1（html に 1 回。全要素へ継承）
Border Radius:  4px（既定） / 40px・30px（ピル） / 0（矩形 CTA・見出し）
Box Shadow:     none（サイト全体で 0）
Container:      1450px / 1380px / 1060px / 860px
CSS Variables:  0 個
```

### プロンプト例

```
世田谷文学館のデザインシステムに従って、展覧会一覧ページを作成してください。
- html に font-size: 14px / letter-spacing: 0.08em / font-feature-settings: "palt" 1 /
  line-height: 1.5 / color: #1a1a1a / font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
  を 1 回だけ書き、子要素では字間を再宣言しない
- 見出しは書体で作る: 欧文ラベルは rig-shaded-bold-face / 700、和文見出しは
  a-otf-midashi-go-mb31-pr6n / 600、展覧会タイトルは toppan-bunkyu-midashi-go-std / 900
- h1〜h6 は font-size: 100%; font-weight: normal にリセットし、サイズはクラスで与える
- セクション見出しは欧文 26px の下に和文 24px を白地 + 2px solid #000000 で重ね、margin-top: -28px
- 色面はマゼンタ #ff0066 とシアン #00baec の 2 色だけ。カード枠は使わず面で分ける
- CTA は #e81a79 / radius 40px / padding 5.6px 14px 4.2px、黒ピルは #000000 / radius 30px
- box-shadow は一切使わない。カードの radius は 4px
- 企画展のカテゴリラベルだけ writing-mode: vertical-rl（28px / line-height 1.5）
- ブレークポイントは max-width 768px を主軸に、480 / 640 / 950 / 1060px
```

---

## 補足: 計測で分かった実装の実態

- **Adobe Fonts は `document.styleSheets` に出ない。** Typekit は JS で CSS を注入するため、`common/css/font.css` には `/*Adobe fonts*/` というコメントしか無く、`@import` は Font Awesome だけ。判定は (a) `distributions.fontFamily` にハイフン区切り小文字の Typekit 名が出ているか (b) `use.typekit.net/af/...` へのフォント取得があるか の 2 つ。実測で **Typekit のフォントファイルを 5 本取得**している
- **キットに入っているだけで一度も使われていない書体が 2 本ある。** `vdl-admin` と `iroha-29ume-stdn` は `document.fonts` で `loaded` だが、**CSS 全文での参照 0 回・可視 0 要素**。`loaded` を「使っている」証拠にしないこと
- **`html { visibility: hidden }` は Web フォント待ちの実装。** Typekit が `html.wf-active` を付けるまでページ全体が白紙になる。この方式を再現する場合、フォント取得に失敗したときの保険（`wf-inactive` でも表示する）を併せて実装すること
- **`box-shadow` 0 / CSS 変数 0 / `h` タグのサイズ階層なし** という 3 点は、どれも「省略されている」のではなく**この設計の性格**。足さないこと
