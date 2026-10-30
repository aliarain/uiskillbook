# DESIGN.md — DAIKEN（大建工業）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-18 / 対象: `https://www.daiken.jp/`, `https://www.daiken.jp/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Web フォントを 1 本も読まず、OS のローカル書体だけで組む。** 代わりに `html` の 1 行に `palt` と `word-break: break-all` を置いて、和文の見え方をブラウザ側の機能だけで整えている。面は `20px` のピル・カードが基調
- **密度**: 高い。1200px のコンテナにタグピル・バナー・カードを詰める。トップは可視テキスト 191 要素
- **キーワード**: Web フォント 0 本、`html` に palt、`break-all`、角丸 20px のピル、パステル 3 色の事業カード

**このサイトの核心は5つある。**

1. **Web フォントを 1 本も読み込まない。** フォントファイルのリクエストは **0 件**。`@font-face` は CSS 全文で 3 件あるが、`swiper-icons` と `icomoon_close07`（外部 CRM ウィジェット `templates-cf.karte.io` 配信）という**アイコン専用**だけ。和文はすべて OS ローカルの書体で組む
2. **`html` の 1 行に 4 つを押し込んでいる。** `font-size: 62.5%` / `line-height: 1.5` / `word-break: break-all` / `font-feature-settings: "palt"` が**すべて `html` セレクタ**にある。`body` ではないので、`html` の宣言を外すと全体が崩れる
3. **`word-break: break-all` で日本語の禁則処理を無効にしている。** 行末で熟語の途中でも折り返す。狭いカード内で行が溢れないことを優先した指定で、**読みやすさとは引き換え**
4. **本文スタックの先頭が `Meiryo`。** macOS では 2 番目の `-apple-system` に落ちるが、**Windows ではメイリオが当たる**。游ゴシックでもヒラギノでもなく、意図的にメイリオを第一候補にしている
5. **事業カードの h3 だけ書体が違い、しかも游ゴシックの並びが誤っている。** `素材事業` / `建材事業` / `エンジニアリング事業` の 3 つだけ `游ゴシック体, YuGothic, "游ゴシック Medium", …` を使っているが、**`YuGothic`（Regular）が `"游ゴシック Medium"` より前**にあるため Windows では細く出る

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **DAIKEN Blue** | **`#0068b7`** | **文字 7 要素（トップ）／ 2 要素（下層）、面 3 要素／2 要素**。テキストリンク、検索ボタン、`製品情報` の線ピル。**基準の青** |
| **Navy** | **`#004d96`** | **面 1 要素**。`新規会員登録` の塗りピル、`ログイン` の線ピルの枠と文字 |
| **Teal** | **`#3ea2a3`** | **面 1 要素**。`ユーザー登録` の塗りピルだけ |
| **Green（バッジ）** | **`#0c8752`** | **面 3 要素**。`トピックス` バッジ |
| **Gray（バッジ）** | **`#616161`** | **面 2 要素**。`ニュース` バッジ |

> **青が 3 つあるが役割が分かれている。** `#0068b7` がリンクと汎用、`#004d96` が会員系の導線、`#3ea2a3` はユーザー登録専用。**新規実装では `#0068b7` を基準にしてよい。**

### 事業カードのパステル 3 色

| 事業 | 面 | 角丸 |
|---|---|---|
| 素材事業 | **`#f0f5d2`**（黄緑） | 20px |
| 建材事業 | **`#d8e9f8`**（淡い青） | 20px |
| エンジニアリング事業 | **`#fdebca`**（淡いオレンジ） | 20px |

- 文字はどれも `#333333` のまま。**面だけで事業を区別する**

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・見出し。**可視 152 要素（トップ）／ 104 要素（下層）で圧倒的に最多**。純黒にしない
- **Text Strong** (`#1a1a1a`): 大見出し（可視 10 要素／5 要素）
- **Text Secondary** (`#444444` / `#4f4f4f` / `#696969`): 補足（各 1〜2 要素）
- **Text on Dark** (`#ffffff`): 塗りピル・写真上（可視 17 要素／13 要素）
- **Background** (`#ffffff`): `pageBackground.resolved` = `rgb(255,255,255)`（根拠 `body`）
- **Surface** (`#f2f2f2` / `#f5f5f5` / `#f4f4f4`): セクションの地（可視 4 要素）
- **Border（濃）** (`#808080`): `DAIKEN魂！を読む` などの線ボタン
- **Border（既定）** (`#cccccc`): 一覧の枠線。最もよく出る
- **Border（淡）** (`#ababab` / `#aaaaaa`): ピルの線

### 外部ウィジェット由来（実装しない）

- `#1371c3`（`クッキー設定` ボタン・`border-radius: 18px` / 14px / 700）は **Cookie 同意バナー**
- `#3860be` は Cookie バナーのフィルタ UI
- `icomoon_close07`（`templates-cf.karte.io` 配信）は CRM ツールのアイコン

### 宣言だけで使われていない

- `font-family: "HG教科書体", "HG正楷書体-PRO", serif` が CSS にあるが **可視 0 要素**（Windows 専用の教科書体）
- **CSS カスタムプロパティは 0 個。** トップ・下層とも `own: 0`。色もサイズも全部ハードコードで、**デザイントークンの層が存在しない**

---

## 3. Typography Rules

### 3.1 和文フォント

- **Web フォントは 0 本。** フォントファイルの要求 **0 件**、`document.fonts` は `swiper-icons`（unloaded）と `icomoon_close07`（loaded・外部 CRM）のアイコン 2 件だけ
- **ゴシック体**: OS ローカル。Windows は **メイリオ**、macOS は **-apple-system（San Francisco → ヒラギノ角ゴ）**
- **事業カードの h3 だけ游ゴシック**（可視 3 要素）
- **明朝体**: 使わない（セリフ系の和文は 2 ページとも可視 0）

### 3.2 欧文フォント

- 専用の欧文書体を**持たない**。`Arial, sans-serif` が 4 要素だけ（数値ラベル）
- ヒーローの筆記体 `The New Flooring` は**画像**（`mv_artio01〜06.avif`）。`font-family` の分布に筆記体は 1 要素も無い

### 3.3 font-family 指定

```css
/* 実サイトの宣言をそのまま */
body {
  font-family: Meiryo, -apple-system, BlinkMacSystemFont,
               "Hiragino Kaku Gothic ProN", sans-serif;
  font-size: 1.6rem;      /* = 16px（html が 62.5%）*/
  color: #333;
  font-weight: 400;
}

/* 事業カードの見出しだけ別系統（可視 3 要素） */
.business__wrap--title {
  font-family: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
               游ゴシック, "Yu Gothic", sans-serif;
}
```

**事業カードの游ゴシックの並びは誤っている。** `YuGothic`（Regular）が `"游ゴシック Medium"` より**前**にあるため、Windows では Regular に当たって細く出る。正しくは:

```css
/* 正しい並び（Windows で Medium を拾わせる） */
font-family: 游ゴシック体, "游ゴシック Medium", "Yu Gothic Medium",
             YuGothic, 游ゴシック, "Yu Gothic", sans-serif;
```

**本文スタックの `Meiryo` 先頭も意識して書かれている。** macOS では `-apple-system` に落ちるため、**Windows と macOS で見た目がかなり変わる**設計。太さを揃えたい案件では Web フォントを入れるか、スタックの順を揃えること。

### 3.4 文字サイズ・ウェイト階層

**ルートは `62.5%` = 10px 固定で、サイズは `rem`（1rem = 10px）で書く。6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）とも完全固定で、流体もブレークポイント切替も無い。**

| 役割 | サイズ | ウェイト | 行間 | 字間 | 実測 |
|------|--------|---------|------|------|------|
| ページ見出し（下層 h1） | **40px**（4rem） | 400 | 1.2 | normal | 1 要素 |
| セクション見出し | **30px**（3rem） | 400〜600 | 1.2 | normal | 6 要素／3 要素 |
| SNS セクション見出し | 25px | **900** | 1.2 | normal | 1 要素 |
| 事業カード h3 | **22px**（2.2rem） | 400 | 1.5 | normal | 3 要素（游ゴシック） |
| 中見出し | 20px（2rem） | 600 | 1.5 | normal | 7 要素／1 要素 |
| ショールーム導線 | 18px | **900** | 1.5 | normal | 1 要素 |
| **本文** | **16px**（1.6rem） | 400 | **1.5** | normal | **38 要素／44 要素** |
| リンク・ラベル | 15px | 400〜600 | 1.5 | normal | 14 要素／10 要素 |
| **一覧・ナビ** | **14px**（1.4rem） | 400 | **2.0** | normal | **可視 57 要素で最多（トップ）** |
| 補足・日付 | **13px**（1.3rem） | 400 | 2.0 | normal | 43 要素／43 要素 |
| 注記 | 12px / 10px | 400 | 1.5 | normal | 8 + 11 要素 |

- **ウェイトは 400 と 600 の 2 段が基本**（可視 140 / 31 要素、下層 95 / 20）
- **`font-weight: 900` が 14 要素（トップ）／ 8 要素（下層）出るが、これは合成太字。** Web フォントを読まないため、メイリオにもヒラギノ角ゴ ProN にも Black は無く、**ブラウザが Bold を機械的に太らせている**。`ショールーム　トップページへ`（18px）、`ソーシャルメディア 公式アカウント`（25px）、`Facebook` / `Instagram` / `YouTube` などの SNS ラベル（16px）
- **700 は 6 要素だけ**で、うち Cookie バナー由来が含まれる

### 3.5 行間・字間

```css
/* 実サイトの宣言 */
html {
  font-size: 62.5%;                 /* = 10px */
  line-height: 1.5;                 /* ★無単位。ここから全体へ継承 */
  word-break: break-all;
  font-feature-settings: "palt";
}
body { font-size: 1.6rem; }         /* = 16px、行送り 24px */
```

- **行間は無単位の比率。** 使われているのは **`1.5`（本文・見出し。可視 114 要素／65 要素で最多）と `2.0`（一覧・日付。53 要素／47 要素）の 2 つ**。ほかは `1.2`（大見出し・15 要素）、`1.25`、`1.6` が少量
- **一覧とリンク行だけ `2.0` に開ける。** 13〜14px の小さい文字を縦に積むところで行間を広く取る設計
- **字間は `normal` 一択。** 可視 185/190 要素（トップ）・**127/127 要素（下層は全要素）**が `normal`。例外は `1px` 3 要素と `0.6px` 3 要素のみで、下層には 1 要素も無い
- **`palt` で詰めたあとに `letter-spacing` で空け直していない**

### 3.6 禁則処理・改行ルール

```css
html { word-break: break-all; }
```

- **`break-all` を `html` に当てている。** 日本語の禁則処理を無効にし、行末で**熟語の途中でも折り返す**
- これは `auto-phrase`（改行位置を文節に寄せる）の**反対側**の選択。狭いカード・ピル内でテキストが溢れないことを優先している
- **再現するなら `html` に書く。** `body` に書くと `html` 由来の他の指定と宣言位置がずれる
- 読みやすさを優先する案件では `word-break: normal`（または `auto-phrase`）に変えること。**ただしそのときはカード幅の検証をやり直す**

### 3.7 OpenType 機能

```css
html { font-feature-settings: "palt"; }
```

- **`palt` が可視 713 要素（トップ）／ 430 要素（下層）に継承されている**。宣言は `html` の 1 行だけ
- **実測で効いていることを確認済み**: 同一ページ・同一書体で `「東京・大阪」（株式会社）、デザインの話。` を組むと `normal` 797.61px → **`palt` 683.28px**（14.3% 詰まる）。`halt` は 697.61px
- Web フォントを読まなくても、**OS ローカルのヒラギノ角ゴ／メイリオが `palt` テーブルを持っている**ので詰まる
- `palt` 以外の feature（`halt` / `vpal` / `tnum`）は使っていない

### 3.8 縦書き

使っていない（`writing-mode: vertical-*` は 2 ページとも 0 要素）。

---

## 4. Component Stylings

### Buttons（ピル）

**角丸 `20px` のピルが基調。塗りと線がペアで並ぶ（`新規会員登録` / `ログイン`）。右に矢印を置くため `padding-right` だけ広い。**

```css
/* Primary（塗り） */
.btn-pill-primary {
  background: #004d96;
  border: 1px solid #004d96;
  color: #ffffff;
  border-radius: 20px;
  padding: 7px 29.87px 7px 20px;   /* ★右だけ広い（矢印のぶん） */
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

/* Secondary（線） */
.btn-pill-secondary {
  background: #ffffff;
  border: 1px solid #004d96;
  color: #004d96;
  border-radius: 20px;
  padding: 7px 29.87px 7px 20px;
  font-size: 16px;
  font-weight: 600;
}

/* Teal（ユーザー登録専用） */
.btn-pill-teal { background: #3ea2a3; border-color: #3ea2a3; color: #ffffff; }

/* 小さい線ピル（タグ導線・詳しくはこちら） */
.btn-pill-sm {
  background: #ffffff;
  border: 1px solid #ababab;
  color: #333333;
  border-radius: 15px;
  padding: 5px 28px 5px 15px;
  font-size: 14px;
  font-weight: 400;
}

/* 角のある線ボタン（一覧を見る） */
.btn-rect {
  background: transparent;
  border: 1px solid #808080;
  color: #333333;
  border-radius: 0;                /* ★角丸なし */
  padding: 10px 28px 10px 10px;
  font-size: 14px;
  font-weight: 600;
}

/* 検索 */
.btn-search {
  background: #0068b7;
  border: 1px solid #0068b7;
  color: #ffffff;
  border-radius: 10px;
  padding: 0 32px;
  font-size: 16px;
  font-weight: 400;
}
```

- **角丸は用途で 4 段**: ピル `20px` / `15px`、検索 `10px`、バッジ `5px`、一覧ボタン `0`
- **塗りピルと線ピルで枠線は同じ 1px、色だけ入れ替える**

### Badges

```css
.badge-topics { background: #0c8752; color: #ffffff; border-radius: 5px;
                padding: 5px 0; font-size: 10px; font-weight: 400; }
.badge-news   { background: #616161; color: #ffffff; border-radius: 5px;
                padding: 5px 0; font-size: 10px; font-weight: 400; }
.badge-product{ background: transparent; border: 1px solid #0068b7; color: #0068b7;
                border-radius: 5px; padding: 5px 0; font-size: 10px; }
```

- **10px の極小バッジ**。`トピックス`（緑）/ `ニュース`（グレー）/ `製品情報`（青の線）で分類を示す
- **左右の padding は 0** で、幅は親で固定する

### Cards（事業カード）

```css
.business__wrap {
  background: #f0f5d2;      /* または #d8e9f8 / #fdebca */
  border-radius: 20px;
  padding: 32px 16px;
  color: #333333;
  font-size: 16px;
}
.business__wrap--title {
  font-family: 游ゴシック体, "游ゴシック Medium", "Yu Gothic Medium",
               YuGothic, 游ゴシック, "Yu Gothic", sans-serif;
  font-size: 22px;
  line-height: 1.5;
}
```

- **カードはピルと同じ `20px` の角丸**。影は無い

### Tags

```css
.tag { border-radius: 15px; border: 1px solid #ababab; color: #333333;
       padding: 5px 28px 5px 15px; font-size: 14px; }
```

トップ上部に `DAIKEN GROUP REPORT 2026` `リフォーム` `お家ミラクルウォール` などのタグピルが並ぶ。

---

## 5. Layout Principles

### Spacing Scale

**CSS カスタムプロパティは 0 個。px を直書きしている。**

- 実測のギャップは **20px（5 要素／4 要素）・30px（2 要素）・24px（4 要素・下層）・16px・10px・8px・70px**
- **20px が基準。** 2 の倍数で `8 / 10 / 16 / 20 / 24 / 30 / 70px`
- 内側の余白は `32px 16px`（カード）、`10px`（一覧）、`7px 20px`（ピル）

### Container

```css
.container { max-width: 1200px; margin-inline: auto; }
```

- **1200px が 8 要素（トップ）／ 12 要素（下層）で最多**
- ヒーローは `1420px` / `1440px` と画面幅いっぱいに近く、本文だけ 1200px に絞る
- 狭いカラムは `520px`

### Grid

- 事業カードは 3 カラム、ニュースは 1 カラムのリスト。CSS Grid と flex の併用

---

## 6. Depth & Elevation

**影は実質「無い」。**

| 用途 | 値 | 実測 |
|---|---|---|
| ホバー用の初期値 | **`0 0 10px rgba(0, 0, 0, 0)`** | **可視 18 要素（トップ）。α が 0 なので見えない** |
| ホバー時 | `0 0 10px rgba(0, 0, 0, 0.5)` | 1 要素 |
| モーダル | `0 5px 15px rgba(0, 0, 0, 0.5)` | 1 要素 |
| フォーカス（下層） | **`0 0 4px #044795`** | 4 要素。**青い光彩** |
| 枠線代わり | `0 0 2px 2px rgba(0, 0, 0, 0.1)` | 1 要素 |

- **`rgba(0, 0, 0, 0)` の 18 要素を「影がある」と読み違えない。** α が 0 なので描画されず、ホバーで `0.5` に切り替わるための初期値
- 平常時の階層は**面色（白 / `#f2f2f2` / パステル 3 色）と 1px の線**だけで作る
- **`filter: drop-shadow()` は SVG の `<g>` 2 要素だけ**（ヒーローのロゴ装飾）。テキストには掛かっていない

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html` に 4 つまとめて書く**: `font-size: 62.5%` / `line-height: 1.5` / `word-break: break-all` / `font-feature-settings: "palt"`
- **Web フォントを読み込まない。** OS ローカルの書体 ＋ `palt` で組む
- **サイズは `rem`（1rem = 10px）で書く。** 本文 `1.6rem`、一覧 `1.4rem`、補足 `1.3rem`
- **本文色は `#333333`**（純黒にしない）、大見出しだけ `#1a1a1a`
- **行間は `1.5`（本文・見出し）と `2.0`（一覧・日付）の 2 つ**を無単位で
- **字間は `normal`。一切いじらない**
- **ウェイトは 400 と 600 の 2 段**で組む
- **角丸はピル `20px` / 小ピル `15px` / 検索 `10px` / バッジ `5px` / 一覧ボタン `0`** の 5 段
- **ピルの `padding-right` を広く取る**（`7px 29.87px 7px 20px`）。矢印を置く場所
- **事業・分類はパステルの面色（`#f0f5d2` / `#d8e9f8` / `#fdebca`）で分ける。** 文字色は変えない
- **影を使わない。** 面色と 1px の線で階層を作る
- コンテナは **1200px**、ギャップは 20px 基調

### Don't（禁止）

- **`font-weight: 900` を当てない。** Web フォントが無いので**合成太字になる**（メイリオにもヒラギノ角ゴ ProN にも Black は無い）。実サイトは 14 要素に当てているが、太さは機械的に水増しされているだけ
- **`font-weight: 700` も避ける。** サイト本体は 400 / 600 の 2 段
- **游ゴシックのスタックを `YuGothic, "游ゴシック Medium"` の順で書かない**（実サイトはそうだが Windows で細く出る）。Medium を先に置く
- **`Meiryo` 先頭のスタックを無批判に真似しない。** Windows と macOS で太さ・字形が大きく変わる。太さを揃えたい案件では Web フォントを入れる
- **`box-shadow: 0 0 10px rgba(0,0,0,0)` を「影」として実装しない**（α が 0 の初期値）
- **ヒーローの筆記体を Web フォントで実装しない。** `The New Flooring` も `2026年8月 新床材 Artio（アーティオ）誕生` も `mv_artio*.avif` に焼き込まれた画像で、`font-family` の分布に筆記体は 1 要素も無い
- **`"HG教科書体"` / `"HG正楷書体-PRO"` を実装しない**（宣言だけ・可視 0・Windows 専用）
- **`#1371c3` / `border-radius: 18px` を実装しない**（Cookie バナー由来。サイト本体に 18px の角丸は無い）
- **`word-break: break-all` を `body` に移さない**（`html` の他の宣言とセットで効いている）
- **CSS カスタムプロパティがある前提で書かない。** このサイトは `own: 0`

---

## 8. Responsive Behavior

### Breakpoints

```css
/* 実サイトの最頻（上位 5 件） */
@media screen and (max-width: 599px) { }                          /* 83 箇所 */
@media (any-hover: hover) { }                                     /* 59 箇所 */
@media screen and (min-width: 600px) { }                          /* 41 箇所 */
@media screen and (min-width: 1025px) { }                         /* 39 箇所 */
@media screen and (min-width: 600px) and (max-width: 1024px) { }  /* 34 箇所 */
```

- **境界は 600 / 1025 の 2 本**（= 599 以下 / 600〜1024 / 1025 以上の 3 段）。768px は使わない
- **`@media (any-hover: hover)` を 59 箇所で使い、ホバー演出をポインタがある端末に限定している**

### タッチターゲット

- ピルは `padding: 7px …` ＋ 16px 文字で高さ約 38px。**44px を下回るので `min-height: 44px` を別途保証する**
- 10px のバッジは装飾（タップ対象ではない）

### フォントサイズの調整

- **`html` は全幅 `62.5%` = 10px 固定、`body` は 16px / 行送り 24px 固定。** 6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）とも**完全に動かない**
- 流体（`vw` / `clamp()`）も、ルートの階段切替も**使っていない**
- モバイルで小さくするところは、各要素が `@media screen and (max-width: 599px)` の中で `rem` を個別に書き換える

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
ブランド色: #0068b7（基準の青）／#004d96（会員導線）／#3ea2a3（ユーザー登録）
バッジ: #0c8752（トピックス）／#616161（ニュース）／#0068b7 の線（製品情報）
事業カード: #f0f5d2（素材）／#d8e9f8（建材）／#fdebca（エンジニアリング）
本文色: #333333 ／ 大見出し #1a1a1a
地色: #ffffff ／ 面 #f2f2f2 ／ 線 #cccccc（既定）・#808080（濃）・#ababab（淡）
書体: Meiryo, -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", sans-serif
      ★Web フォントは 0 本
ルート: html { font-size: 62.5% } = 10px 固定（全幅）
本文: 1.6rem = 16px / 行送り 24px
ウェイト: 400 / 600（700・900 は使わない＝合成太字）
文字サイズ: 40 / 30 / 22 / 20 / 16 / 15 / 14 / 13 / 12 / 10px
行間: 1.5（本文・見出し）/ 2.0（一覧・日付）無単位
字間: normal（一切いじらない）
palt: html に "palt"（14.3% 詰まる）
word-break: break-all（html に書く）
角丸: 20px（ピル・カード）/ 15px / 10px / 5px / 0
影: 使わない（rgba(0,0,0,0) は初期値）
コンテナ: 1200px ／ ギャップ 20px 基調
ブレークポイント: 600 / 1025 ／ ホバーは @media (any-hover: hover)
CSS 変数: 0 個
```

### プロンプト例

> DAIKEN のデザインシステムで製品一覧ページを作って。
> **Web フォントは読み込まない。** `html` に `font-size: 62.5%` / `line-height: 1.5` / `word-break: break-all` / `font-feature-settings: "palt"` の 4 つをまとめて書き、`body` は `font-family: Meiryo, -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", sans-serif` / `1.6rem` / `#333333`。
> サイズは `rem`（1rem = 10px）で、本文 1.6rem・一覧 1.4rem・補足 1.3rem。**ルートは全幅固定で流体にしない。**
> ウェイトは 400 と 600 の 2 段だけ（**900 は合成太字になるので使わない**）。行間は本文 1.5 / 一覧 2.0、字間は `normal`。
> 導線は角丸 `20px` のピルで、`padding: 7px 29.87px 7px 20px` と右だけ広く取って矢印を置く。塗りは `#004d96`、線は白地に `#004d96` 1px。
> 分類は 10px のバッジで `#0c8752`（トピックス）/ `#616161`（ニュース）/ `#0068b7` の線（製品情報）。
> 事業カードは角丸 20px にパステル（`#f0f5d2` / `#d8e9f8` / `#fdebca`）を敷き、文字色は `#333333` のまま。
> **影は使わず**、面色と 1px の `#cccccc` の線だけで階層を作る。コンテナは 1200px、ギャップ 20px。
> ブレークポイントは 600 / 1025 の 2 本、ホバー演出は `@media (any-hover: hover)` で囲う。
