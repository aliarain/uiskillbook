# DESIGN.md — エスビー食品（S&B Foods）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-14 / 対象: `https://www.sbfoods.co.jp/`, `/products/newproduct/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **S&Bレッド（`#d6182c`）の一色刷り**。ヒーローはスパイスの産地を描いた赤い線画イラストで、面を塗らず線だけで世界観を作る
- **密度**: トップは低い（白地＋線画＋ピルボタン2つ）。商品一覧は高い（1ページ 693 要素）
- **キーワード**: S&Bレッド、線画、ピル型ボタン 42px、見出しだけ Web フォント、字間 0.1em

**このサイトの核心は3つある。**

1. **和文 Web フォントは「見出しの8要素」にしか使っていない。** Google Fonts の指定は `family=Lato&family=Zen+Kaku+Gothic+New:wght@700` ＝ **Zen Kaku Gothic New は 700 の1本だけ**。本文 686 要素は OS ローカル（ヒラギノ角ゴ Pro / 游ゴシック Medium）。**下層ページに至っては `@font-face` が1件も無い**
2. **セクション見出しは「和文（Zen Kaku Gothic New 36px）＋欧文の小見出し（Lato 18px）」の2段組み。** `商品情報 / products`、`今週のおすすめレシピ / recipe` のように必ず対で出る。**和文には 0.1em、欧文には 0.17em** と別々の字間を当てている
3. **CTA はすべて `border-radius: 42px` のピル型で、塗りと白抜きの2種だけ。** 赤ベタ（`#d6182c` / 白文字）と白地赤枠（`2px solid #d6182c` / 赤文字）がペアで並ぶ。**第3の形は存在しない**

**CSS Custom Properties は 0 個。** `letter-spacing` は見出しにだけ px（= em 宣言の結果）で付き、本文 693 要素は `normal`。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **S&B Red** | **`#d6182c`** | **CTA の面と枠・ロゴ・フッター全面・見出し文字（可視 5 要素＋面 3 要素）**。線画ヒーローもこの色 |
| **Accent Red** | `#d62828` | **`新商品` バッジ 18 要素**、トップの日付バッジ（`rgba(214,40,40,0.9)`）。`#d6182c` とは別の赤 |
| **Spice Green** | **`#1b9974`** | **商品一覧のカテゴリ面 162 要素**。`リフレッシュ` `商品情報` `他のバリエーション` のラベル帯 |
| Carousel Green | `#00836b` | カルーセルの Prev / Next アイコン（可視 7 要素）。`#1b9974` より暗い |

> **赤が2つ、緑が2つある。** `#d6182c` がブランド色、`#d62828` はバッジ専用。緑は商品一覧側の第2軸で、**トップページには出てこない**。新規実装では `#d6182c` と `#1b9974` に寄せてよいが、既存ページと並べるときは4色あることを前提にする。

### Neutral（ニュートラル）

- **Background** (`#ffffff`): ページ背景。`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `html`
- **Surface Cream** (`#f6f6ee`): セクションの面（可視 4 要素）。白よりわずかに黄み
- **Surface Sand** (`#f8f5e6`): パンくずの帯
- **Surface Gray** (`#e8e7e2`): **商品スペック表のラベル列 180 要素**。`品番` `内容量` `希望小売価格`
- **Surface Light** (`#f2f2f2`): `一覧へ` ボタンまわり
- **Text Primary** (`#000000`): 本文・見出し（**可視 83 要素 / 下層 498 要素**）。**純黒**
- **Text Muted** (`#9b9b9b` / `#666666`): 補助情報・パンくず
- **Border** (`#d4d3d3`): カテゴリタブの枠

---

## 3. Typography Rules

### 3.1 和文フォント

- **本文（既定）**: **OS ローカルの ヒラギノ角ゴ Pro / 游ゴシック Medium**。Web フォントではない。実測 86 要素（トップ）/ **692 要素（下層）**
- **見出し（Web フォント）**: **Zen Kaku Gothic New**（Google Fonts）。実測 **8 要素・トップページのみ**
- **下層ページには `@font-face` が 1 件も無い**（`document.fonts` が空）。**和文はすべて OS ローカル**

### 3.2 欧文フォント

- **Lato**（Google Fonts・400 のみ）。実測 13 要素。セクション見出しの英字サブ（`products` `recipe` `news release`）と日付（`2026.10.07`）
- 本文スタックの欧文は **Arial**（スタック先頭）

### 3.3 font-family 指定

```css
/* 本文（既定）— OS ローカルのみ */
font-family: Arial, Helvetica,
             "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
             "游ゴシック Medium", "Yu Gothic Medium",   /* ★Medium を Regular より前に */
             游ゴシック体, YuGothic,
             Meiryo, メイリオ, sans-serif;

/* セクション見出しの和文 */
font-family: "Zen Kaku Gothic New";   /* 700 の1本だけ読み込んでいる */

/* セクション見出しの欧文サブ・日付 */
font-family: Lato;
```

```html
<link href="https://fonts.googleapis.com/css2?family=Lato&family=Zen+Kaku+Gothic+New:wght@700&display=swap" rel="stylesheet">
```

> **Windows の游ゴシック問題は「スタック順」で解いている。** `"游ゴシック Medium"` / `"Yu Gothic Medium"` を `游ゴシック体` / `YuGothic` より**前に置く**ことで、Windows では Medium が当たる。`@font-face` を書かない流儀（東京オペラシティ アートギャラリーと同型）。
>
> **実サイトの問題点**: 下層ページは `@font-face` が無いのに**コピーライト行だけ `font-family: Lato` 単独**を指定している（可視 1 要素）。フォールバックが1つも無いため、Lato が読み込まれていない下層ではブラウザ既定書体で出る。**新規実装では `Lato, sans-serif` のように受け皿を書く。**

### 3.4 文字サイズ・ウェイト階層

| 用途 | サイズ | weight | 書体 | letter-spacing |
|------|--------|--------|------|----------------|
| **セクション見出し（和文）** | **36px** | 700 | **Zen Kaku Gothic New** | **3.6px（= 0.1em）** |
| セクション見出し（和文・小） | 28px | 700 / 400 | Zen Kaku Gothic New | 2.8px（= 0.1em） |
| **セクション見出し（欧文サブ）** | **18px** | 400 | **Lato** | **3.06px（= 0.17em）** |
| CTA | 18px / 16px | 400 | OS ローカル | normal |
| ナビ・カテゴリ | 16px | 700 | OS ローカル | normal |
| 本文 | 16px | 400 | OS ローカル | normal |
| 商品名・スペック | 14px | 400 / 700 | OS ローカル | normal |
| 日付 | 16px | 400 | Lato | normal（`update` のみ 0.48px） |

- **実測のウェイト分布**: トップ 400 が 88 要素 / 700 が 19 要素 / 600 が 2 要素。下層 400 が 375 要素 / **700 が 318 要素**（スペック表のラベルが全部 700）
- **`Zen Kaku Gothic New` は 700 しか読み込んでいない。** `楽しく、もっと健康に` は CSS が `font-weight: 400` を当てているが、**ファミリーに 700 しか存在しないので 700 で描画される**（実測 28px / 宣言 400）

### 3.5 行間・字間

- **`line-height` は無単位**（トップの body は 16px / 28.8px = **1.8**。834px 以下では 14px / 22.4px で**比率 1.8 のまま**）
- **実測の行間比**: トップは `1.75` が 73 要素で最多、下層は **`1.80` が 554 要素**。見出しは `1.50`、CTA は `1.44`
- **`letter-spacing` は本文 `normal`（トップ 95 要素 / 下層 693 要素＝全要素）。見出しにだけ em で当てている**:

| 要素 | 実測 px | サイズ | em 換算 |
|------|---------|--------|---------|
| セクション見出し（和文） | **3.6px** | 36px | **0.1em** |
| セクション見出し（和文・小） | **2.8px** | 28px | **0.1em** |
| セクション見出し（欧文 Lato） | **3.06px** | 18px | **0.17em** |
| `update` ラベル | 0.48px | 16px | 0.03em |

> **字間は「継承」ではなく「各要素が自分で em を持つ」型。** サイズに比例して px が変わる（36px→3.6px、28px→2.8px がどちらも 0.1em）。**body に 1 回書いて継承させる設計ではない。**
> **和文 0.1em と欧文 0.17em で値が違う。** 欧文サブ見出しのほうを大きく空ける。

### 3.6 禁則処理・改行ルール

- `word-break: auto-phrase` は使っていない
- 見出しの改行は `<br>` で制御（`スパイス＆ハーブでもっと楽しく、もっと健康に` を2行に割っている）

### 3.7 OpenType 機能

- **`font-feature-settings` は 0 件。`palt` も `halt` も使っていない**
- 見出しは `palt` ではなく**正の `letter-spacing`（0.1em）で空ける**方向の設計

### 3.8 縦書き

- **縦組みは 0 要素**。`writing-mode` は全ページ `horizontal-tb`

---

## 4. Component Stylings

### Buttons

**Primary（赤ベタ・ピル）**
- Background: **`#d6182c`** / Text: `#ffffff`
- Border: **`2px solid #d6182c`**
- Padding: `14px 28px`
- Border Radius: **`42px`**
- Font: 18px / weight 400 / line-height 1.444
- Shadow: `0 0 20px rgba(0,0,0,0.04)`

**Secondary（白地・赤枠・ピル）**
- Background: `#ffffff` / Text: **`#d6182c`**
- Border: **`2px solid #d6182c`**
- Padding: `14px 28px`
- Border Radius: **`42px`**
- Font: 18px / weight 400

**Small（`一覧へ`）**
- Background: `#ffffff` / Text: `#d6182c` / Border: `2px solid #d6182c`
- Padding: `12px 15px` / Border Radius: `42px` / Font: 16px

**Filter（`新商品` チェック）**
- Background: `#ffffff` / Text: `#000000`
- Border: `2px solid #e8e7e2`
- Padding: `11px 32px 7px 20px` / Border Radius: **`4px`**（ピルではない）

**Carousel Arrow**
- Background: `rgba(255,255,255,0.8)` / Icon: `#00836b`
- Border Radius: `50%` / Shadow: `0 2px 10px rgba(0,0,0,0.1)`

### Badges

**New Badge**
- Background: **`#d62828`** / Text: `#ffffff`
- Padding: `0px 15px` / Border Radius: **`10px 0px`**（左上と右下だけ丸める）
- Font: 16px / weight 400

**Category Label（商品一覧）**
- Background: **`#1b9974`** / Text: `#ffffff`
- Padding: `0px 15px` / Border Radius: `10px 0px`
- 変種: `0px 0px 0px 10px` / `0px 0px 10px`（カードの角に合わせて1箇所だけ丸める）

**Date Badge（トップ）**
- Background: `rgba(214,40,40,0.9)` / Text: `#ffffff` / Border Radius: `50%`

### Cards / Tables

**Product Card**
- Border Radius: **`10px`**（実測 120 要素）
- Shadow: **`0 1px 3px rgba(145,145,145,0.6)`**（実測 62 要素）

**Spec Table**
- ラベル列: Background `#e8e7e2` / Text `#000000` / **14px / weight 700**
- Padding: `11px 13px 10px`
- 角: `10px 0px 0px` / `0px 0px 0px 10px`（表の四隅だけ丸める）

### Tabs

- Background: `transparent` / Border: `1px solid #d4d3d3`
- Padding: `1px 0px` / Border Radius: `10px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 1px | タブ内側 |
| S | 11–13px | スペック表のセル |
| M | 15px | バッジ内側の左右 |
| L | 20px | カテゴリラベルの左 |
| XL | 28px | CTA 内側の左右 |
| 2XL | 30px | グリッドの gap |

- **gap の実測**: `30px`（最多）/ `0px 30px` / `20px` / `0px 20px` / `12px` / `0px 15px` / `2%` / `5.7%`

### Container

- **Max Width: 1200px**（実測 6 要素で最多）
- 広いセクション: 1440px / 1310px / 1280px
- 本文カラム: 1080px / 1000px / 960px / 912px / 680px
- 2カラムの比率: **55.5% : 42.5%**

### Grid

- トップは全幅の線画ヒーロー ＋ 1200px のセクション積み
- 商品一覧はカードのグリッド（gap 30px）＋ スペック表

---

## 6. Depth & Elevation

| レベル | 値 | 実測 |
|--------|-----|------|
| **Card** | **`0 1px 3px rgba(145,145,145,0.6)`** | **62 要素**。商品カード・バッジ。**グレー 60%** |
| CTA | `0 0 20px rgba(0,0,0,0.04)` | 6 要素。ピルボタン。**ぼかし 20px の広く薄い影** |
| Arrow | `0 2px 10px rgba(0,0,0,0.1)` | 7 要素。カルーセルの矢印 |
| Section | `0 2px 10px rgba(128,128,123,0.1)` | 5 要素。**グレーに緑みを足した影** |
| Breadcrumb | `0 4px 4px -4px #979797 inset` | 1 要素。パンくず下端の内側影 |

- **影の色を黒に丸めない。** `rgba(145,145,145,0.6)` / `rgba(128,128,123,0.1)` と**グレー系を 2 種類使い分けている**
- CTA の影だけ **ぼかし 20px / 黒 4%** と性格が違う（輪郭を出さずふわりと浮かせる）

---

## 7. Do's and Don'ts

### Do（推奨）

- **本文は OS ローカル書体で組む。** `Arial, Helvetica, "Hiragino Kaku Gothic Pro", "游ゴシック Medium", …` のスタックをそのまま使う
- **`"游ゴシック Medium"` / `"Yu Gothic Medium"` を `游ゴシック体` / `YuGothic` より前に置く**（Windows で細く出るのを防ぐ）
- **Web フォントはセクション見出しだけ**（Zen Kaku Gothic New 700 ＋ Lato 400）
- **セクション見出しは「和文 36px ＋ 欧文サブ 18px」の対**で作る
- **字間は見出しに em で当てる**（和文 0.1em / 欧文 0.17em）
- **CTA は `border-radius: 42px` のピル。赤ベタと白地赤枠の 2 種だけ**
- `line-height` は無単位の `1.8`

### Don't（禁止）

- **`Zen Kaku Gothic New` に 400 や 500 を期待しない。** 読み込んでいるのは **700 の 1 本だけ**で、400 を指定しても 700 で描画される
- **本文に和文 Web フォントを足さない**（実測 686/693 要素が OS ローカル。下層は `@font-face` が 0 件）
- **`font-family: Lato` を単独で書かない**（実サイトはそうなっているが、フォールバックが無く下層で崩れる。`Lato, sans-serif` と書く）
- **`letter-spacing` を body に書いて継承させない**（本文 693 要素が `normal`。字間は見出しが自分で持つ）
- **`font-feature-settings: "palt"` を足さない**（実測 0 件。このサイトは詰めずに空ける設計）
- **影を黒に丸めない**（`rgba(145,145,145,0.6)` / `rgba(128,128,123,0.1)` のグレー系 2 種）
- **緑 `#1b9974` をトップページに持ち込まない**（商品一覧側の色）
- CSS Custom Properties は実測 0 個。**変数があるつもりで書かない**

---

## 8. Responsive Behavior

### Breakpoints

| 名前 | 条件 | 実測 |
|------|------|------|
| **SP / Tablet** | **`only screen and (max-width: 868px)`** | **344 ルール。主要な分岐** |
| Narrow PC | `only screen and (max-width: 1109px)` | 23 ルール |
| Small | `only screen and (max-width: 760px)` | 10 ルール |
| Mobile | `only screen and (max-width: 478px)` | 35 ルール |
| Hover | `(any-hover: hover)` | 9 ルール |

### フォントサイズの調整

- **`html` は 6 幅すべてで `10px` 固定**（1440 / 1200 / 834 / 768 / 767 / 375px で実測）。流体ではない
- **`body` だけが 868px を境に切り替わる**（869px と 868px の 1px 差で実測して確定）:

| 幅 | body font-size | line-height | 比率 |
|---|---|---|---|
| **869px 以上** | **16px** | **28.8px** | 1.8 |
| **868px 以下** | **14px** | **22.4px** | 1.8 |

> **行間比は 1.8 のまま変わらない。** 変わるのは基準サイズだけなので、**行間を px に読み替えて実装しない。**

### タッチターゲット

- ピル型 CTA: `14px 28px` + 18px（高さ 約 50px）
- フィルタボタン: `11px 32px 7px 20px` + 16px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
本文:        OS ローカル（Arial → ヒラギノ角ゴ Pro → 游ゴシック Medium）
見出し和文:  "Zen Kaku Gothic New" 700 のみ（Google Fonts）
見出し欧文:  Lato 400（Google Fonts）
背景:        #ffffff / 面 #f6f6ee・#e8e7e2
ブランド赤:  #d6182c（CTA・ロゴ・フッター）
バッジ赤:    #d62828
商品緑:      #1b9974（商品一覧のみ）
文字:        #000000
行間:        1.8（無単位）
字間:        本文 normal / 見出し和文 0.1em / 見出し欧文 0.17em
CTA 角丸:    42px（ピル）
カード角丸:  10px
影:          0 1px 3px rgba(145,145,145,0.6)
コンテナ:    1200px
BP:          868px
palt:        使わない
```

### プロンプト例

> エスビー食品のデザインで作って。**本文は Web フォントを使わず** `Arial, Helvetica, "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic, Meiryo, メイリオ, sans-serif` で組む（Medium を Regular より前に置く Windows 対策）。**セクション見出しだけ Google Fonts の Zen Kaku Gothic New 700（和文 36px・字間 0.1em）と Lato 400（欧文サブ 18px・字間 0.17em）を対で使う。** Zen Kaku Gothic New は 700 しか読み込まないので 400 を当てても太字で出る前提で書く。CTA は `border-radius: 42px` のピル型を 2 種だけ — 赤ベタ（`#d6182c` / 白文字 / `2px solid #d6182c`）と白地赤枠（白 / 赤文字 / 同じ枠）。カードは角丸 10px ＋ `0 1px 3px rgba(145,145,145,0.6)`。`line-height` は無単位 1.8、本文の `letter-spacing` は `normal`、`font-feature-settings` は書かない。コンテナ 1200px、868px 以下で body を 14px に落とす。
