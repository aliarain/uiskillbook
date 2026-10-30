# DESIGN.md — 東洋経済新報社（TOYO KEIZAI）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-30 / 対象: `https://corp.toyokeizai.net/`, `/aboutus/purpose/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **黒と白だけで組む。** トップページの可視テキストは `#000000` 69 要素と `#ffffff` 26 要素の **2 色しかない**。色が出るのは文字に流すグラデーション（赤→青）と、サービスカードの面だけ
- **密度**: 低い。ヒーローは左右の写真 2 枚（508×706）と中央の縦組み 1 行。1 画面に 1 つの主題
- **キーワード**: 縦組み、可変フォント、ピル、黒と白、グラデーション文字

**このサイトの核心は 4 つある。**

1. **和文の可変フォント 2 本を自前ホスティングしている。** `NotoSansJP-VariableFont_wght.woff2` と `NotoSerifJP-VariableFont_wght.woff2` を `/assets/fonts/` から配信。Google Fonts 経由ではない。**フォントファイルの要求は 3 件だけ**（上記 2 本＋ Roboto）
2. **ヒーローの大見出しが本物の縦組み。** `writing-mode: vertical-rl` ＋ **`text-orientation: upright`** で、Noto Serif JP の 37.44px。**1 文字ずつ `<span class="char">` に分割**されている（アニメーション用・実測 16 文字）。画像ではない
3. **`font-feature-settings` を使わない。** `body` は `normal`、`palt` は 1 要素も無い。**字間は `em` を各要素が自分で持つ**設計（0.05em / 0.0875em / 0.05em…と要素ごとに違う px が出る）
4. **ボタンの枠線を `border` ではなく `box-shadow: inset 0 0 0 1px` で引いている**（実測 6 要素）。ピル型の radius 32px と組み合わさる

CSS Custom Properties は **2 ページとも 0 個**。`html { font-size: 62.5% }` ＝ 10px で、`rem` を 10 倍して読む設計。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

このサイトに「ブランドカラーの面」は無い。**色はグラデーションとして文字に流す。**

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **見出しのグラデーション（赤→青）** | `linear-gradient(265.1deg, #ef0004 9.1%, #0d14dc 100%)` | 下層のページタイトル `パーパス`。**`background-clip: text`** |
| **パンくず・カテゴリのグラデーション** | `linear-gradient(264.83deg, #ef0004 -25.92%, #2253c5 94.38%)` | 下層の `会社概要`（可視 2 要素）。同じく文字に流す |
| **サービスカード（黄→赤）** | `linear-gradient(264.83deg, #efdf00 -25.92%, #c5223d 94.38%)` | トップの面（1 要素） |
| **サービスカード（赤→青）** | `linear-gradient(270.65deg, #ef0004 -89.37%, #2253c5 127.14%)` | トップの面（1 要素） |
| **サービスカード（青・半透明）** | `linear-gradient(257.66deg, rgba(2,19,255,.4) 0%, rgba(34,83,197,.4) 93.22%)` | トップの面（1 要素） |

> **角度と停止位置を丸めない。** `264.83deg` `265.1deg` `270.65deg` `257.66deg`、`-25.92%` `9.1%` `-89.37%` `127.14%` はすべて実装値そのまま。**停止位置がマイナスや 100% 超なのは意図的**（グラデーションの一部だけを切り取って使う）
> **`background-clip: text` の 2 つを「面の色」として実装しないこと。** 文字そのものに流れている。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し。**トップで可視 69 要素 / 下層 25 要素**。このサイトは本文に純黒を使う
- **Text on Dark** (`#ffffff`): 黒面のボタン・ナビ上のテキスト（トップ 26 要素 / 下層 15 要素）
- **Text Muted** (`#8f8f8f`): パンくずの `TOP`（下層 1 要素）
- **Text Dark Gray** (`#303030`): 下層のページタイトル（1 要素）
- **Background** (`#f3f3f3`): **ページ背景**。白ではなく、ごくわずかに灰を落とした地
- **Surface** (`#ffffff`): カード・ボタンの面
- **Surface 2** (`#ececec`): 下層のサイドナビ（現在地リスト）の面
- **Footer** (`#272727`): フッターの面（1 要素）
- **Border** (`#cfcfcf`): CMP の「同意しない」ボタンの面

> **ページ背景は `#f3f3f3`。** `#ffffff` ではない。カードを白で置くことでコントラストが出る設計なので、背景を白にすると全部のカードが消える。

---

## 3. Typography Rules

### 3.1 和文フォント

**和文の可変フォント 2 本を自前でホスティングしている。**

```css
@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-display: swap;
  src: url("/assets/fonts/NotoSansJP/NotoSansJP-VariableFont_wght.woff2") format("woff2"),
       url("/assets/fonts/NotoSansJP/NotoSansJP-VariableFont_wght.ttf")  format("truetype");
}
@font-face {
  font-family: "Noto Serif JP";
  font-style: normal;
  font-display: swap;
  src: url("/assets/fonts/NotoSerifJP/NotoSerifJP-VariableFont_wght.woff2") format("woff2"),
       url("/assets/fonts/NotoSerifJP/NotoSerifJP-VariableFont_wght.ttf")  format("truetype");
}
```

- **ゴシック体（本文・UI）**: `Noto Sans JP`（トップ 71 要素 / 下層 40 要素）
- **明朝体（縦組みの大見出しだけ）**: `Noto Serif JP`（トップ 24 要素 / 下層 2 要素）

#### `@font-face` が 1 本なのにウェイトが全部出る理由

`document.fonts` はどちらも **`weight: normal` 1 本・`loaded`** としか報告しない。しかし実測では 300 / 400 / 500 / 600 / 700 が別々の太さで描画されている。**可変フォント（`wght` 軸）だから**で、合成太字ではない。

隠し div の幅を測った実測値（40px / `日本語の組版とAbc123`）:

| 書体 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 |
|---|---|---|---|---|---|---|---|---|
| Noto Sans JP | 408.89 | 410.36 | 411.83 | 416.06 | 419.19 | 421.22 | 423.23 | 427.28 |
| Noto Serif JP | 416.73 | 416.73 | 417.89 | 419.30 | 421.14 | 422.97 | 425.66 | 428.97 |

**8 段すべてで字面が変わる**＝軸が連続して効いている。

> **実サイトはこうだが、正しくはこう**: `@font-face` に `font-weight` の記述が無い。仕様上これは `font-weight: normal` 1 点の宣言になるため、**ブラウザによっては 400 以外が合成太字に落ちうる**。可変フォントを配るなら `font-weight: 100 900;` と軸範囲を明示する。

### 3.2 欧文フォント

- 欧文専用の書体は使っていない。欧文も Noto Sans JP の欧文グリフで出る
- Roboto（Google Fonts）が 1 件読み込まれているが、これはサードパーティ由来で本文には使われていない

### 3.3 font-family 指定

```css
html { font-size: 62.5%; }            /* = 10px。rem は 10 倍して読む */

body {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.6rem;                   /* = 16px */
  font-weight: normal;
  line-height: 1.3;                    /* = 20.8px */
}
@media (max-width: 575px) {
  body { font-size: 1.5rem; }          /* = 15px */
}

/* 縦組みの大見出しだけ明朝 */
#p-top .p-top-mv-text > p {
  font-family: "Noto Serif JP", serif;
}
```

- `font-family` のスタックは **2 語だけ**（Web フォント＋ generic）。OS ローカル書体の受け皿を挟まない。可変フォントが `swap` で落ちてくるまでは generic の `sans-serif` で出る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| Hero（縦組み） | **Noto Serif JP** | **37.44px**（`clamp(28px, 2.6vw, 44px)`） | **500** | **2.00** | **0.05em** = 1.872px | `健全なる経済社会の発展に貢献する` |
| Section Title | Noto Sans JP | **63px**（流体） | 600 | **1.00** | **0.05em** = 3.15px | `東洋経済のサービス` |
| Section Title 2 | Noto Sans JP | **45px** | 500 | **1.00** | normal | `ニュース` |
| Page Title（下層） | Noto Sans JP | 42px | 600 | 1.00 | 2.1px | `パーパス` |
| Category Label | Noto Sans JP | 45px | 500 | 1.00 | — | `WEB` `雑誌` `書籍` |
| Lead | Noto Sans JP | 30px | 700 | 1.60 | — | `まじめな「異論」で、未来を拓く` |
| Statement | Noto Sans JP | 20px | 600〜700 | 1.50 | 2px | `自由で健全な経済社会の実現に貢献する。` |
| Body | Noto Sans JP | **16px** | 400 | **1.90** | normal | **トップ 30 要素 / 下層 19 要素**。本文の基準 |
| Nav | Noto Sans JP | 18px | 500 | 1.00 | **1.4px** | サイドナビ（可視 12 要素） |
| Link | Noto Sans JP | 14px | 500 | **1.70** | **0.9px** | 一覧のリンク（可視 12〜15 要素） |
| Button | Noto Sans JP | 16px | 400 | 1.70 | **0.8px** | `東洋経済オンライン` ほか |
| News Title | Noto Sans JP | 12px | 400 | 1.30 | 0.48px | お知らせ一覧 |
| Small | Noto Sans JP | **10px** | 300〜500 | 1.30 | normal | 年号・フッターの法務リンク |

#### ルートと body

| 幅 | html | body | body の lh |
|---|---|---|---|
| 1440 / 1200 / 1024 / 992 / 834 / 768 / 767px | **10px** | **16px** | 20.8px |
| 576px 以下 | **10px** | **15px** | 19.5px |

- `html` は **12 幅すべてで 10px 固定**（`font-size: 62.5%`）。流体ではない
- `body` は **576px を境に 16px → 15px の 1 段だけ**切り替わる
- **見出しだけが `clamp()` で流体**。`.p-top-service-head__title` は 1440px で 63px、1200px で 56.95px、992px 以下で 50px に着地する

> **`clamp()` の最小値が `0px` の宣言が複数ある**（`.c-title--h1-noBg { font-size: clamp(0px, 3.125vw, 40px) }`、`.c-flex-sns { gap: clamp(0px, 2.5vw, 40px) }`）。極端に狭い画面で文字が 0px になりうる。**新規実装では最小値に実用下限（例 `24px`）を入れる。**

### 3.5 行間・字間

- **本文の行間**: `1.90`（トップ 8 要素 / 下層 11 要素）。リンクリストは `1.70`
- **縦組みの行間**: **`2.00`**（＝行間が字送り 1 文字ぶん。縦組みで 2.0 は広め）
- **見出しの行間**: **`1.00`**（トップ 37 要素 / 下層 15 要素）。見出しは行間を付けず、`margin` で離す
- **`body` の行間は `1.3`**（20.8px / 16px）。本文ブロックは自分で `1.9` を宣言し直している

#### 字間は「要素ごとに `em` を持つ」型

`body` の `letter-spacing` は `normal`。字間を空けるのは個々の要素で、**サイズに比例して px が変わる**のが目印。

| 対象 | 宣言 | 1440px での実測 |
|---|---|---|
| 縦組みの大見出し（37.44px） | `0.05em` | **1.872px** |
| セクション見出し（63px） | `0.05em` | **3.15px** |
| 下層のページタイトル（42px） | `0.05em` | **2.1px** |
| サイドナビ（18px） | — | **1.4px** |
| 一覧のリンク（14px） | — | **0.9px** |
| ボタン（16px） | `0.05em` | **0.8px** |
| お知らせ（12px） | — | **0.48px** |
| 本文（16px） | — | **normal** |

> **字間を `body` に 1 回書いて継承させる設計ではない。** 見出し・ナビ・ボタンに個別に `em` を当て、**本文だけ `normal` にする**。逆にすると別物になる。

### 3.6 禁則処理・改行ルール

```css
/* body は既定のまま */
word-break: normal;
overflow-wrap: normal;

/* 見出しだけ単語単位の折返しを許す */
.c-title--h1-noBg { word-break: break-word; }
```

- `body` に `word-break` / `overflow-wrap` の宣言は無い（実測とも `normal`）
- **`word-break: break-all` は使わない**（日本語の禁則処理が無効になる）

### 3.7 OpenType 機能

**`font-feature-settings` を実質使っていない。** `body` は `normal`、`palt` は 2 ページとも **0 要素**。

CSS に 1 箇所だけ宣言があるが、**適用されている要素は 0 件**:

```css
/* 定義はあるが、実測 0 要素（縦中横用の仕込みが未使用のまま残っている） */
#p-top .p-top-mv-text > p > span.month {
  text-combine-upright: all;
  font-feature-settings: "liga" 0, "kern" 0;
}
```

- `span.month` は DOM に **0 件**、`text-combine-upright` が `none` 以外の要素も **0 件**
- **grep の件数を「使っている証拠」にしないこと。** 縦中横を再現したいなら自分で `<span class="month">10</span>` を置く必要がある
- 書体自体は `palt` が効く（隠し div で `normal` 580.00px → `palt` 461.64px）。**使わないという選択**

### 3.8 縦書き

**ヒーローの大見出しは本物の縦組み。**

```css
#p-top .p-top-mv-text > p {
  font-family: "Noto Serif JP", serif;
  font-size: clamp(18px, 1.69vw, 30px);   /* 既定 */
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;
  text-orientation: upright;              /* 欧文・数字も正立させる */
  margin: 0 auto;
}
@media (min-width: 768px)  { #p-top .p-top-mv-text > p { font-size: clamp(28px, 2.6vw, 44px); } }
@media (max-width: 767px)  { #p-top .p-top-mv-text > p { font-size: clamp(19px, 5.07vw, 39px); line-height: 1.75; } }
```

- 1440px の実測は **37.44px**（= 1440 × 0.026）。`line-height: 2` なので行送りは **74.88px**
- **1 文字ずつ `<span class="char">` に分けている**（実測 16 要素・各 75×39px）。出現アニメーション用で、`span` 自体は `display: inline-block; opacity: 0`
- **2 行が右から左へ並ぶ**（1 行目 `left: 720px`、2 行目 `left: 645px`）。`writing-mode: vertical-rl` の親に任せており、flex で横に並べていない。**flex で並べるなら `flex-direction: row-reverse` が必要**
- **モバイルでも縦組みのまま**（`line-height` だけ 2 → 1.75 に詰める）

---

## 4. Component Stylings

### Buttons

**Primary（黒のピル）**
- Background: `#000000`
- Text: `#ffffff`
- Font: Noto Sans JP / 16px / weight 400 / letter-spacing 0.8px / line-height 1.70
- Padding: `17px 28px`
- Border Radius: **`32px`**
- Border: なし
- `東洋経済オンライン` `東洋経済STORE`

**Secondary（枠線のピル）**
- Background: `transparent`
- Text: `#000000`
- **Border: `box-shadow: rgb(0,0,0) 0 0 0 1px inset`**（`border` プロパティは `none`）
- Padding: `17px 28px`
- Border Radius: `32px`
- `お問い合わせ` `「東洋経済オンライン」特設サイト` `雑誌一覧`（実測 6 要素）

> **枠線を `border` で引いていない。** `box-shadow` の inset で 1px の線を内側に描いている。`border` に書き換えると**ボックスサイズが 2px 広がる**ので、padding を調整しないと並びが崩れる。

**Tertiary（白面のピル）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: `17px 28px`
- Border Radius: `32px`
- `採用情報`（背景 `#f3f3f3` の上に置く）

**Hover（黒ボタン）**
- `box-shadow: rgb(255,255,255) 0 0 0 1px inset`（白い内側線が 1 要素）

### Cards

- Background: `#ffffff`（ページ背景 `#f3f3f3` との差で立たせる）
- Border Radius: `32px`（ピルと同じ値を面にも使う）
- **Shadow: `rgba(0,0,0,0.2) 0 0 10px 0`**（実測 12 要素）

### Inputs

独自スタイルの入力欄はトップ・下層に無い（問い合わせは別ページ）。

### Side Navigation（下層）

- Background: `#ececec`
- Border Radius: `5px`
- 項目: 18px / weight 500 / letter-spacing 1.4px / line-height 1.00
- 現在地の項目だけ `padding-left: 21px` ＋ letter-spacing 0.8px

---

## 5. Layout Principles

### Spacing Scale

CSS Custom Properties が 0 個なのでトークン化された余白スケールは**存在しない**。実測で頻出する値:

| 用途 | 値 |
|------|-----|
| ボタン内 | `17px 28px` |
| サイドナビの字下げ | `21px` |
| SNS アイコンの間隔 | `clamp(0px, 2.5vw, 40px)`（1440px で 36px） |
| セクション間の余白 | `40px`（`margin-top`） |

### Container

- ヒーローは `position: absolute` の 3 層（左写真 508×706 / 中央の縦組み / 右写真 508×706）
- 縦組みブロックは `top: clamp(120px, 11.6vw, 170px); left: 50%; transform: translateX(-50%); width: 100%`
- モバイルは `top: 50%; transform: translate(-50%, -50%)` で上下中央へ

### Grid

- サービスカードは面ごとにグラデーションを変える 3 枚構成
- グリッドのトークンは宣言されていない

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | 本文・見出し・ナビ | 既定 |
| 1 | `rgba(0,0,0,0.2) 0 0 10px 0` | カードの浮き | **12 要素** |
| 枠線 | `rgb(0,0,0) 0 0 0 1px inset` | Secondary ボタンの輪郭 | **6 要素** |
| 枠線（反転） | `rgb(255,255,255) 0 0 0 1px inset` | 黒ボタンのホバー | 1 要素 |

- **影は 1 種類だけ。** `0 0 10px`（offset なし・ぼかしのみ）なので、**全方向に等しく広がる浮き方**をする。下方向へのドロップシャドウではない
- **`inset` の影を「影」として数えない。** 枠線の代用

### Border Radius

| 値 | 用途 | 実測 |
|---|---|---|
| **`32px`** | ボタン・カード | 可視 10 要素 |
| `28px` | 問い合わせボタンの内側要素 | 1 要素 |
| `5px` | 下層のサイドナビ | 1 要素 |
| `50%` | 円形アイコン | 5 要素 |

**`32px` が基準。** 16px の文字に対して高さ 50px 前後のボタンなので、32px はほぼ完全なピルになる。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html { font-size: 62.5% }`（= 10px）を前提に `rem` を書く。** `1.6rem` = 16px
- **ページ背景は `#f3f3f3`**、カードとボタンの面を `#ffffff` で置く
- **和文の可変フォント 2 本（Noto Sans JP / Noto Serif JP）を使う。** ゴシックが本文、明朝は縦組みの大見出しだけ
- **本文は 16px / line-height 1.90 / letter-spacing normal**
- **見出しは `line-height: 1.00`** にして `margin` で離す
- **字間は要素ごとに `0.05em` を当てる。** `body` には書かない
- **縦組みは `writing-mode: vertical-rl` ＋ `text-orientation: upright`** で、`line-height: 2`・`letter-spacing: 0.05em`
- **ボタンの枠線は `box-shadow: inset 0 0 0 1px`** で引く（実サイトの流儀）
- **radius は `32px` に揃える**（ボタンもカードも）
- 色は黒と白に絞り、彩度はグラデーションの文字でだけ出す

### Don't（禁止）

- **ページ背景を `#ffffff` にしない。** 白にするとカードが背景に溶ける
- **`palt` を足さない。** このサイトは `font-feature-settings: normal` で通している
- **`clamp()` の最小値に `0px` を書かない**（実サイトは書いているが事故のもと）
- **本文に `letter-spacing` を当てない。** 字間は見出し・ナビ・ボタンだけ
- **グラデーションを「面の色」として実装しない。** 下層の `パーパス` `会社概要` は `background-clip: text` で**文字そのものに流れている**
- **グラデーションの角度・停止位置を丸めない**（`264.83deg` `-25.92%` `127.14%` はすべて実装値）
- **`text-combine-upright`（縦中横）を「使われている」と前提にしない。** CSS に定義はあるが**適用 0 要素**
- **可変フォントを `@font-face` で配るとき `font-weight` を省略しない。** `font-weight: 100 900;` と軸範囲を書く
- **縦組みを flex で横に並べない**（並べるなら `flex-direction: row-reverse`）
- **`word-break: break-all` を使わない**

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 挙動 |
|------|-------|------|
| Mobile | ≤ 575px | `body` 16px → **15px**。縦組みの `font-size: clamp(19px, 5.07vw, 39px)` / `line-height: 1.75`。ヒーローは上下中央 |
| Tablet | 576〜767px | `body` 16px。縦組みは既定の `clamp(18px, 1.69vw, 30px)` |
| Desktop | ≥ 768px | 縦組みは `clamp(28px, 2.6vw, 44px)`。セクション見出しは 63px（1440px）→ 50px（992px 以下） |

```css
html { font-size: 62.5%; }
body { font-size: 1.6rem; }
@media (max-width: 575px) { body { font-size: 1.5rem; } }
```

- **ルートは全幅 10px 固定。** 文字を縮めるのは `body` の 1 段と、見出しの `clamp()` だけ
- セクション見出しの実測: 1440px **63px** → 1200px **56.95px** → 1024px **52.94px** → 992px 以下 **50px**（下限）。字間も `0.05em` で連動（3.15px → 2.5px）

### タッチターゲット

- 最小サイズ: 44px × 44px。ボタンは `padding: 17px 28px` ＋ 行高 27.2px で約 61px を確保している

### フォントサイズの調整

- 本文 16px → 15px（約 94%）
- 縦組みの大見出し 37.44px → 19〜39px（`5.07vw`。375px で 19px）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color:    #000000（本文・見出し）／ #ffffff（黒面の上）／ #8f8f8f（パンくず）
Background:    #f3f3f3   ← 白ではない
Surface:       #ffffff（カード・ボタン）／ #ececec（サイドナビ）／ #272727（フッター）
Gradient（文字）: linear-gradient(265.1deg, #ef0004 9.1%, #0d14dc 100%) + background-clip: text

Font（本文）: "Noto Sans JP", sans-serif   （可変フォント・自前ホスティング）
Font（縦組み）: "Noto Serif JP", serif

Root:        html 62.5% = 10px（全幅固定）
Body Size:   16px（≤575px で 15px）
Line Height: 1.90（本文）／ 1.00（見出し）／ 2.00（縦組み）／ 1.70（リンク）
Letter Spacing: normal（本文）／ 0.05em（見出し・ボタン）
Button Radius: 32px
Button Border: box-shadow: rgb(0,0,0) 0 0 0 1px inset
Shadow: rgba(0,0,0,0.2) 0 0 10px 0
font-feature-settings: normal（palt は使わない）
```

### 必ず書くCSS

```css
@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 100 900;           /* 実サイトは省略しているが、軸範囲は明示する */
  font-display: swap;
  src: url("/assets/fonts/NotoSansJP-VariableFont_wght.woff2") format("woff2");
}
@font-face {
  font-family: "Noto Serif JP";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("/assets/fonts/NotoSerifJP-VariableFont_wght.woff2") format("woff2");
}

html { font-size: 62.5%; }
body {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.6rem;
  line-height: 1.3;
  letter-spacing: normal;
  font-feature-settings: normal;
  color: #000000;
  background: #f3f3f3;
}
```

### プロンプト例

```
東洋経済新報社のデザインシステムに従って、ニュース一覧のセクションを作成してください。
- ページ背景は #f3f3f3、カードは #ffffff / border-radius 32px / box-shadow rgba(0,0,0,0.2) 0 0 10px
- 書体は Noto Sans JP（可変フォント）。font-feature-settings は normal のまま（palt を足さない）
- セクション見出しは 45px / weight 500 / line-height 1.00
- 記事タイトルは 14px / line-height 1.70 / letter-spacing 0.9px
- 日付は 10px / weight 300
- 「一覧を見る」は透明地・黒文字・border-radius 32px・padding 17px 28px で、
  枠線は border ではなく box-shadow: rgb(0,0,0) 0 0 0 1px inset で引く
- 本文には letter-spacing を当てない
```
