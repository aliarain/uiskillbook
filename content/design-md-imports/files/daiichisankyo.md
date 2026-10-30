# DESIGN.md — 第一三共（Daiichi Sankyo）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-11 / 対象: `https://www.daiichisankyo.co.jp/`, `/about_us/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **モリサワ「新ゴ」を TypeSquare で配信し、太さを書体名で切り替える。** 字間は一切触らず（`letter-spacing: normal` が 121 / 114 要素）、行間 1.8 だけで息を作る。色はコーポレートの4色グラデーションと、記事カテゴリごとの色分けで持たせている
- **密度**: 低〜中。1ページあたりの可視テキストは 137 / 133 要素と少なく、白地に大きめの要素をゆったり置く
- **キーワード**: 新ゴ R / 新ゴ DB、TypeSquare、4色グラデーション、字間ノータッチ、ピル型 CTA

**このサイトの核心は4つある。**

1. **和文は「新ゴ R」と「新ゴ DB」の2書体で、`font-weight` は効かない。** TypeSquare（モリサワ）が JS で `@font-face` を注入し、**4 本すべてを `font-weight: bold` で宣言している**（`新ゴ DB` / `Shin Go DeBold` / `新ゴ R` / `Shin Go Regular`、いずれも `status: loaded`）。**太さはファミリー名で切り替える**設計で、`新ゴ R` に 700 を当てても太くならない（合成太字も起きない）
2. **字間を設計に入れていない。** `letter-spacing: normal` が可視 137 要素中 **121 要素**（下層 133 中 114）。例外はフッターリンクの `1px`、グローバルナビの `0.288px`（16px × 0.018em）など少数
3. **`font-feature-settings` は 1 要素も無い**（`palt` 0 件）。約物は詰めない
4. **CSS Custom Properties が 0 個。** DNN（DotNetNuke）基盤（`Portals/` `Skins/DAS/` `Containers/DAS/`）の上に素の CSS を書いており、**デザイントークンという層が存在しない**。色は hex 直書き

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|---|---|---|
| **Corporate Blue** | **`#005baa`** | 可視テキスト 18 / 7 要素（記事タイトル・リンク・パンくず）、塗り面 4 要素（メニュー開閉）。**ロゴと同じブランド青** |
| **CTA Blue** | **`#116dc9`** | 塗り面 **13 要素**。`詳しく見る` のピル型ボタンとカルーセルの操作ボタン。**ブランド青とは別の、1段明るい青** |
| Link Blue | `#0075c0` | 可視 4 要素。ヘッダー上部の対象者切替リンク |
| Worldwide Blue | `#0070c0` | 可視 1 要素。`Worldwide` リンク |

> **青が4つある。** `#005baa`（ブランド）/ `#116dc9`（CTA）/ `#0075c0` / `#0070c0`。
> **新規実装では `#005baa`（文字・ブランド）と `#116dc9`（ボタン面）の2つに寄せる。**
> `#0075c0` と `#0070c0` は 5 の差しかなく、実装上のゆらぎ。

### Corporate Gradient（このサイトの署名）

```css
/* 下層のページタイトル帯。実測 header.PagetitlePane / 154,080 px² */
background: linear-gradient(to right,
  #005baa   0%,     /* コーポレートブルー */
  #00acea  42%,     /* シアン */
  #89ba17  86%,     /* グリーン */
  #cfd300 100%);    /* イエローグリーン */
```

**4 ストップ・左から右。** ロゴ下の帯と下層ページの見出し帯に使う。**途中の 42% / 86% という偏った位置が特徴**で、等間隔にすると別物になる。

### Category Colors（ニュースのカテゴリ色）

角 1 つだけ丸めた塗りタブ（`border-radius: 20px 0 0`）。**文字は白・12〜16.875px / weight 700**。

| カテゴリ | 面 |
|---|---|
| サステナビリティ / 研究開発情報 | `#1d8922` |
| その他 | `#6e7311` |
| 製品情報 | `#bf4c00` |
| DX | `#057f89` |
| サイエンス＆テクノロジー | `#71757a` |

### Topic Pills（ESG トピックのタグ）

**淡い面＋濃い文字の対**。`border-radius: 96px` / 12px / weight 400 / padding `3px 12px`。

| トピック | 面 | 文字 |
|---|---|---|
| Social | `#f7eea5` | `#524901` |
| Environment | `#d3ef88` | `#405800` |

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 見出し（**可視 49 / 48 要素**）。**このサイトは見出しに純黒を使う**
- **Text Body** (`#4d4f53`): 本文・リスト（可視 39 要素）。やや青みのあるグレー
- **Text Stat** (`#232526`): 数値（可視 9 要素）
- **Border** (`#dddddd` / `#bbbbbb`): カードの枠・入力枠
- **Surface** (`#f6f6f6` / `#ececea`): 面
- **Overlay** (`rgba(0,0,0,.1)`): 画像の上にかぶせる膜（**26 要素**）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`）

---

## 3. Typography Rules

### 3.1 和文フォント

**モリサワ「新ゴ」の 2 ウェイトを TypeSquare で配信している。**

- **新ゴ R（Regular）** — 本文・リスト・キャプション。**可視 84 / 77 要素**
- **新ゴ DB（DeBold）** — 見出し・ナビ・ボタンラベル。**可視 49 / 54 要素**

### 3.2 欧文フォント

- `HelveticaNeueeTextPro-Roman`（Regular 側）/ `HelveticaNeueeTextPro-Md`（DeBold 側）を先に置き、`Helvetica Neue` で受ける
- **どちらも Web フォント配信されていない**（フォント要求は TypeSquare の 5 件のみ）。実機に無ければ `Helvetica Neue` 以降にフォールバックする
- カルーセルの `Prev` / `Next` だけ `Arial`（2 要素）

### 3.3 font-family 指定

```css
/* 本文・通常テキスト（実測 84 要素） */
font-family: "新ゴ R", "Shin Go Regular", HelveticaNeueeTextPro-Roman,
             "Helvetica Neue", YuGothic, "Hiragino Kaku Gothic ProN",
             Meiryo, sans-serif;

/* 見出し・ナビ・ボタン（実測 49 要素） */
font-family: "新ゴ DB", "Shin Go DeBold", HelveticaNeueeTextPro-Md,
             YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
```

**TypeSquare が注入する `@font-face` は 4 本すべて `font-weight: bold`。**

```css
/* 実サイト（JS が動的に注入） */
@font-face { font-family: "新ゴ R";  font-weight: bold; src: url("//wf.typesquare.com/3/tsst/dist/ja/ts?…"); }
@font-face { font-family: "新ゴ DB"; font-weight: bold; src: url("//wf.typesquare.com/3/tsst/dist/ja/ts?…"); }
/* 英字別名の "Shin Go Regular" / "Shin Go DeBold" も同じく bold 宣言 */
```

- ファミリーに実体が 1 本しか無いので、CSS が `font-weight: 400` でも `700` でも**同じファイルが返る**
- 目印は **フォント要求の `typesquare.com` / `wf.typesquare.com`**、および `typesquare.js` の読み込み
- `document.fonts` は 4 件とも `loaded`、`unicodeRange` は `U+0-10FFFF`（分割配信なし）

> **太さを変えたいときは `font-weight` ではなくファミリー名を差し替える。**
> `font-family` を `"新ゴ R"` から `"新ゴ DB"` に変える、が正しい操作。

### 3.4 文字サイズ・ウェイト階層

**`html` は 4 幅すべて 10px 固定（`62.5%` 相当）。`body` だけが 2 段階で流体になる**（§8 参照）。下表は **デスクトップ（1000px 以上・body 15px）** の値。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| Page Title | 新ゴ DB | 36px | 700 | 1.30 | normal | 下層 h1 |
| Section Heading | 新ゴ DB | 38px | 700 | 1.30 | normal | `Our Stories` / `ニュース&トピックス` |
| Stat Number | 新ゴ DB | 38px | 700 | 1.10 | normal | 9 要素。`20,171` など |
| Heading L | 新ゴ DB | 34px | 700 | 1.30 | normal | 4 要素 |
| Heading M | 新ゴ DB | 26px | 700 | 1.50 | normal | |
| Statement | 新ゴ R | 24px | 400 | 1.70 | 0.48px (0.02em) | 企業理念の引用 |
| Lead | 新ゴ R | 20px | 400 | 1.80 | normal | 15 / 16 要素 |
| Article Title | 新ゴ R | 19px | 400 | 1.38 | normal | 14 要素。色 `#005baa` |
| Category Tab | 新ゴ DB | 16.875px | 700 | 1.20 | normal | 4 要素 |
| Nav | 新ゴ DB | 16px | 700 | 1.30 | 0.288px (0.018em) | 6 / 34 要素 |
| **Body** | **新ゴ R** | **15px** | **400** | **27px (1.80)** | **normal** | **16 / 5 要素** |
| Button Label | 新ゴ R | 14px | 400 | 1.50 | normal | 15 / 8 要素。`詳しく見る` |
| Sub Nav | 新ゴ R | 13px | 400 | 1.00 | normal | 5 要素 |
| Caption | 新ゴ R | 12px | 400 | 1.38 | normal | **50 / 44 要素（最多）**。日付・パンくず |
| Footer Link | 新ゴ R | 12px | 400 | — | **1px (0.083em)** | 8 要素。**ここだけ字間を開ける** |

**ウェイトは 400 と 700 の 2 段だけ。** ただし前述のとおり **700 は「新ゴ DB を当てている」という意味**であって、ブラウザが太らせているわけではない。

### 3.5 行間・字間

- **本文の行間**: **1.80**（`body { line-height: 27px }` ＝ 15×1.8）。実測でも 1.80 が最多（52 / 45 要素）
- **見出しの行間**: **1.30**（6 / 21 要素）。小見出しとナビは **1.20**
- **UI の行間**: **1.00**（19 / 31 要素）。1 行で収めるラベル
- **字間**: **`normal`（121 / 114 要素）。このサイトは字間を触らない**
  - 例外: フッターリンク `1px`（8 要素）、グローバルナビ `0.288px`（6 要素）、下層の一部 `0.72px` / `0.48px`

```css
/* 実装の型 */
body { font-size: 15px; line-height: 1.8; }   /* letter-spacing は書かない */
.heading { font-family: "新ゴ DB", …; font-size: 38px; line-height: 1.3; }
.footer a { font-size: 12px; letter-spacing: 1px; }   /* ★ここだけ例外 */
```

> **`letter-spacing` を本文に足さない。** 字間を開けるのはフッターとナビだけ、という割り切りが
> このサイトの設計。0.05em のような一律指定を入れると別物になる。

### 3.6 禁則処理・改行ルール

- `word-break` / `line-break` / `overflow-wrap` の明示指定は無い。ブラウザ既定の禁則処理に任せている
- `word-break: auto-phrase` は**使っていない**
- 見出しの改行は `<br>` で手で入れている（`私たちは、／「イノベーションに情熱を。／ひとに思いやりを。」` など）

### 3.7 OpenType 機能

**`font-feature-settings` は 1 要素も無い（実測 0 件）。** `palt` も `halt` も使わない。
**約物を詰めない**のがこのサイトの組み方。

### 3.8 縦書き

`writing-mode` が `horizontal-tb` でない要素は **0 件**。縦組みは使わない。

---

## 4. Component Stylings

### Buttons

**Primary（ピル）** — 実測 4 要素・`詳しく見る`

- Background: `#116dc9`
- Text: `#ffffff`
- **Padding: `13px 68px 14px 44px`**（左 44px / 右 68px の大きな非対称。右に矢印が入る）
- **Border Radius: `50px`**
- Font Size: 14px / Weight: **400** / Letter Spacing: `normal`
- Border: なし

**Circle（カルーセル操作・ページトップ）**

- Background: `#ffffff` / Icon: `#005baa`
- Border: `1px solid #dddddd` / Border Radius: `50%`
- Font Size: 15px

> **ボタンの文字は太らせない（400）。** CTA は `#116dc9`、ブランド青 `#005baa` は**文字とアイコンに使う**。

### Category Tabs

- Background: カテゴリ色（§2）/ Text: `#ffffff`
- **Border Radius: `20px 0 0`**（左上だけ丸める）／対になる要素は `0 20px 0 0`
- Padding: `20px 30px`
- Font Size: 16.875px / Weight: 700（＝新ゴ DB）

### Topic Pills

- Background / Text: §2 の対で指定
- Border Radius: `96px` / Padding: `3px 12px`
- Font Size: 12px / Weight: 400

### Inputs

- Background: `#ffffff` / Border: `1px solid #bbbbbb`
- Border Radius: `0px`（**角丸なし**）
- Padding: `0 15px` / Font Size: 15px

### Cards

- Background: `#ffffff` / Border Radius: `0px`
- 画像の上に `rgba(0,0,0,.1)` の膜（26 要素）
- Shadow: §6 参照

---

## 5. Layout Principles

### Container

| 値 | 実測 | 用途 |
|---|---|---|
| **`1000px`** | 12 件（下層で最多） | **下層の本文カラム** |
| `1240px` | 11 / 2 件 | トップのセクション |
| `1600px` | 2 件 | ワイドなセクション |
| `1280px` / `1920px` | 2 / 1 件 | ヒーロー |
| `560px` | 14 件（トップ） | カード |
| `456px` | 2 件（下層） | カード |

### Grid / Gap

`gap` の宣言は **`60px` の 1 件のみ**。グリッドではなく `float` / `margin` 主体の旧来のレイアウト。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| **0** | `none` | **ほぼすべての要素** |
| 1 | **`rgba(0,0,0,.07) 0 3px 60px 0`** | トップのカルーセル枠。**実測 1 要素のみ** |

**影は実質 1 種類しかない。** しかも `blur: 60px` / `alpha: 0.07` と極端に広く薄い、**輪郭の見えない影**。
（もう 1 件測れる `rgba(0,0,0,.2) 0 0 18px` は OneTrust の Cookie バナーで、サイトの設計ではない。）

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **「新ゴ R」と「新ゴ DB」の 2 ファミリー**で組む。太さは**ファミリー名で切り替える**
- 本文 `line-height: 1.8`、見出し `1.3`、ナビ・小見出し `1.2`、1 行 UI `1.0`
- **`letter-spacing` は書かない。** 開けるのはフッターリンク（`1px`）とグローバルナビ（`0.018em`）だけ
- CTA は `#116dc9` の **`border-radius: 50px`** ピル、`padding: 13px 68px 14px 44px`
- ブランド青 `#005baa` は**文字・アイコン・リンク**に使う
- コーポレートグラデーションは **4 ストップ・42% / 86%** の位置をそのまま使う
- カテゴリは **1 つの角だけ丸める**（`20px 0 0`）

### Don't（禁止）

- **`font-weight` で太さを変えようとしない。** TypeSquare の `@font-face` は 4 本とも `bold` 宣言で、
  `新ゴ R` に 700 を当てても太くならない（合成太字も起きない）
- **`font-feature-settings: "palt"` を足さない。** このサイトは約物を詰めない
- **本文に `letter-spacing` を足さない**（121 / 137 要素が `normal`）
- CSS 変数でトークン化された設計だと思わない（**Custom Properties は 0 個**）
- 影を増やさない。使うなら `rgba(0,0,0,.07) 0 3px 60px` の 1 種類だけ
- ボタンのラベルを太字にしない（400）
- `#0075c0` / `#0070c0` を新規に増やさない。**`#005baa` に統一する**

### 実サイトの注意点（そのまま真似しない）

- **タブレット幅で本文が 11.52px まで縮む。** `768px` で `body { font-size: 1.5vw }` が効き、
  **日本語本文として小さすぎる**（§8）。新規実装では下限を 14px 程度で止める
- 和文スタックの受け皿が `YuGothic, "Hiragino Kaku Gothic ProN", Meiryo` の順。
  **Windows 向けの `"游ゴシック Medium"` / `"Yu Gothic Medium"` が入っていない**ので、
  TypeSquare が落ちたとき Windows では游ゴシック Light の細い字になる

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 実測（宣言回数） |
|------|-------|------|
| Phone | ≤ 750px | `screen and (max-width: 750px)` 4 回 |
| Tablet | ≤ 1050px | `screen and (max-width: 1050px)` **7 回** |
| Desktop | ≥ 768px / ≥ 1000px | `print, screen and (min-width: 768px)` 7 回 / `… (min-width: 1000px)` 7 回 |
| Narrow | ≤ 550px / ≤ 320px | 1 回ずつ |

**`print, screen and (…)` の形で印刷にも同じレイアウトを当てている。**

### `body` のフォントサイズ（★2段の流体）

`html` は 4 幅すべて **10px 固定**。動くのは `body` の方。

| 画面幅 | `body` font-size | 式 |
|---|---|---|
| **≥ 1000px** | **15px**（`line-height: 27px`） | 固定 |
| 999px | 14.985px | **`1.5vw`** |
| 860px | 12.9px | 〃 |
| 768px | **11.52px** | 〃 ← **最小。ここが一番小さい** |
| **767px** | **26.5894px** | **`3.46667vw`**（＝750px で 26px） |
| 750px | 26px | 〃 |
| 550px | 19.0667px | 〃 |
| 390px | 13.52px | 〃 |
| 375px | 13px | 〃 |
| 320px | 11.0933px | 〃 |

> **768px → 767px で本文が 11.52px から 26.59px へ 2.3 倍に跳ぶ。**
> スマートフォン側は「750px 幅で 26px」を基準に設計されており（`width=device-width` なので
> 375pt の端末では 13px になる）、タブレット側は `1.5vw` で素直に縮む。
> **1 幅だけ測って「このサイトの本文は 15px」と書かない。**
> **`rem` は `html` 固定（10px）なので素直に 10 倍でよいが、`body` 基準の相対指定は幅で変わる。**

### タッチターゲット

最小 44px × 44px を確保する。`詳しく見る` ボタンは実高 約 44px（13+14+17）。

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue:  #005baa（文字・アイコン・リンク）
CTA Blue:    #116dc9（ボタンの面）
Gradient:    linear-gradient(to right,#005baa 0%,#00acea 42%,#89ba17 86%,#cfd300 100%)
Heading:     #000000
Body Text:   #4d4f53
Background:  #ffffff
Font (body):    "新ゴ R", "Shin Go Regular", HelveticaNeueeTextPro-Roman,
                "Helvetica Neue", YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Font (heading): "新ゴ DB", "Shin Go DeBold", HelveticaNeueeTextPro-Md,
                YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Body Size:      15px（デスクトップ）
Line Height:    1.8（本文）/ 1.3（見出し）/ 1.2（ナビ）/ 1.0（1行UI）
Letter Spacing: normal（本文は触らない）
Feature:        なし（palt を使わない）
Radius:         50px（CTA）/ 20px 0 0（カテゴリ）/ 96px（トピック）/ 0（入力・カード）
Shadow:         rgba(0,0,0,.07) 0 3px 60px（1種類のみ）
Container:      1000px（本文）/ 1240px（セクション）
```

### プロンプト例

```
第一三共のデザインシステムに従って、ニュース一覧セクションを作成してください。
- 本文は font-family: "新ゴ R", … / 見出しは "新ゴ DB", … で指定する。
  太さは font-weight ではなくファミリー名で切り替える
- letter-spacing は書かない（本文は normal。フッターリンクだけ 1px）
- font-feature-settings は使わない
- 記事タイトルは 19px / line-height 1.38 / color #005baa
- 日付は 12px / line-height 1.38 / color #4d4f53
- カテゴリタブは背景 #1d8922（サステナビリティ）/ #bf4c00（製品情報）、
  文字 #ffffff / 16.875px / 新ゴ DB、border-radius: 20px 0 0、padding 20px 30px
- 「詳しく見る」は背景 #116dc9 / 文字 #ffffff / 14px / weight 400 /
  border-radius 50px / padding 13px 68px 14px 44px
- セクション見出しの下に 4 ストップのコーポレートグラデーション帯を敷く
- コンテナ幅 1000px、本文の line-height は 1.8
```
