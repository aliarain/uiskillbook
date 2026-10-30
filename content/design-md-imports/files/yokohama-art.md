# DESIGN.md — 横浜美術館（Yokohama Museum of Art）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-30 / 対象: `https://yokohama.art.museum/`, `/about/overview/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **黒・白・シアンブルー 1 色。** 角丸も影も使わず（`border-radius` は円形アイコンの `50%` だけ、`box-shadow` は **0 種**）、面と余白で組む。展覧会の写真が主役で、UI は徹底して引く
- **密度**: 中。ナビは 4 語（`見る` `参加する` `利用する` `訪れる`）だけ。本文は `line-height: 1.65` で組む
- **キーワード**: palt 全適用、0.1em、vw 流体の本文、角丸ゼロ、影ゼロ

**このサイトの核心は 4 つある。**

1. **`body` に `font-feature-settings: "palt"` を 1 行書いて全要素に継承させている。** 実測 **トップ 894 要素 / 下層 601 要素**（すべて `horizontal-tb`）。`palt` は本当に効いており、隠し div の幅は `normal` 603.72px → `palt` **485.36px**（約 20% 詰まる）
2. **その上で `letter-spacing: 0.1em` を `body` に書いて空け直している。** 「詰めてから空ける」の二段構えで、**片方だけ再現すると別物になる**
3. **`html` は 16px 固定なのに `body` だけが `calc(1.09756vw)` の流体。** 1640px で 18px（設計値）、1440px で **15.8049px**、834px で **9.15px**、**501px で約 5.5px** まで縮み続け、**500px で 16px に跳ね戻る**。字間も `0.1em` なので一緒に縮む
4. **ヒーローの縦組みはテキストではない。** 展覧会タイトルと作家名の縦組みは **`marie_jp_PC.webp`（1440×675）に焼き込まれている**。CSS には `.vwTxt { writing-mode: vertical-rl }` の定義があるが、**適用されている要素は 2 ページとも 0 件**

CSS Custom Properties は **49 個あるがすべて WordPress / Gutenberg 由来**（`--wp--preset--color--black` など）。**自社トークンは 0 個**で、値は CSS に直書きされている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Cyan Blue** | **`#0090df`** | 面として可視 **7 要素**（トップ）、文字色として **16 要素**（下層）。`本日開館 10時−18時` のバッジ、`開館時間・休館日・観覧料` `フロアマップ` のリンク、パンくずの現在地 |
| **Black（面）** | **`#000000`** | `開催中` バッジ、ページトップへ戻る円 |

> **ブランド色は 1 色だけ。** 面に使うか文字に使うかで役割が変わる。トップでは面（バッジ）、下層ではリンク色として出る。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し。**トップ 153 要素 / 下層 75 要素**。このサイトは本文に純黒を使う
- **Text on Dark** (`#ffffff`): 黒面・写真の上（トップ 61 要素 / 下層 50 要素）
- **Text Muted** (`#7d7d7d`): カテゴリラベル（`無料` `大人` `ワークショップ`）。トップ 48 要素
- **Text Caption** (`#888888`): 写真クレジット（`撮影：新津保建秀`）。下層 18 要素
- **Text Date** (`#555555`): 一覧の日付（5 要素）
- **Text Nav** (`#222222`): グローバルナビの項目（5 要素）
- **Carousel Inactive** (`#cccccc`): カルーセルの番号（29 要素）
- **Disabled** (`#b5b5b5`): 切り替え前の言語ラベル（`EN`）
- **Background** (`#ffffff`): ページ背景。`<html>` に直接
- **Surface** (`#cfcfcf`): Cookie バーの「同意しない」ボタン

> `rgba(0,0,0,0.93)` は Cookie 同意バー（CMP）の地なので**採用しない**。

---

## 3. Typography Rules

### 3.1 和文フォント

**Noto Sans JP 1 書体だけ。** Google Fonts から `@import` で読む。

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200;300;400;500;700;900&display=swap");
```

- `<link>` タグではなく **CSS 内の `@import`** で読んでいる（`link[href*="fonts.googleapis"]` は 0 件）
- `@font-face` は **unicode-range で 100 本以上に分割**されるため `unloaded` が大量に出るが、これは Google Fonts の和文では正常。**フォント要求は実測 38 件**（すべて `fonts.gstatic.com/s/notosansjp/`）で、`loaded` は **400 / 500 / 700** の 3 ウェイト
- **明朝は使っていない。** セリフ系の和文は 2 ページとも可視 0 要素

#### 実際に使うウェイトは 3 段

`@import` の `wght@` には 200 / 300 / 900 も含まれるが、**描画に使われるのは 400 / 500 / 700 だけ**:

| weight | 実測 | 用途 |
|---|---|---|
| **400** | トップ 213 要素 / 下層 127 要素 | 本文・日付・ラベル |
| **700** | トップ 99 要素 / 下層 33 要素 | グローバルナビ、見出し、カテゴリリンク |
| **500** | **5 要素だけ** | ヘッダー最上部の `美術館について` `ご支援` `JP` |

隠し div での実測（40px）: 100 → 424.70px、400 → 430.41px、500 → 433.53px、600/700 → 436.59px、900 → 440.64px。**600 と 700 が同じ幅**なので、600 を指定しても 700 と変わらない。

### 3.2 欧文フォント

- 欧文専用の書体は使っていない。欧文も Noto Sans JP の欧文グリフで出る
- `Arial` がカルーセルの制御ラベル（`Previous` `Next`）に 12 要素出るが、これは slick の既定値で `font-size: 0`（視覚的に隠れている）

### 3.3 font-family 指定

```css
html { /* font-size の宣言なし → UA 既定の 16px。12 幅すべてで固定 */ }

body {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;                       /* 1641px 以上での値 */
  font-weight: 400;
  line-height: 1.65;
  letter-spacing: 0.1em;
  font-feature-settings: "palt";
  overflow-wrap: break-word;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  color: #000000;
}
@media screen and (max-width: 1640px) { body { font-size: calc(1.09756vw); } }
@media screen and (max-width: 500px)  { body { font-size: 16px; } }
```

- スタックは **2 語だけ**（Web フォント＋ generic）。OS ローカル書体の受け皿を挟まない
- `1.09756vw` = `18 / 1640 × 100`。**設計幅は 1640px**

### 3.4 文字サイズ・ウェイト階層

実測値はすべて **1440px でのもの**（`body` が流体なので幅で変わる）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| Nav | Noto Sans JP | **33.3659px** | 700 | 1.65 | 1.58049px | `見る` `参加する` `利用する` `訪れる`（可視 6 要素） |
| Page Title（下層） | Noto Sans JP | **43.9024px** | **700** | **1.65**（72.439px） | 1.58049px | `概要`（`h1.wp-block-heading`） |
| Section Head | Noto Sans JP | 26.3415px | 700 | 1.65 | 1.58049px | `グランドギャラリー` `美術図書室`（可視 8 要素） |
| Carousel Number | Noto Sans JP | 23.7073px | 400 | **1.93** | 1.58049px | `1` `2` `3`（可視 36 要素） |
| Exhibition Date | Noto Sans JP | **21.0732px** | 400 | 1.60 | 1.58049px | `2026年8月1日（土）`（可視 30 要素） |
| Sub Nav | Noto Sans JP | 17.561px | 400 | 1.65 | 1.58049px | `JP` `EN` ほか（可視 17〜40 要素） |
| Body | Noto Sans JP | **15.8049px** | 400 | **1.65** | **1.58049px** | **本文の基準**（可視 18 要素） |
| Body（CMS 本文） | Noto Sans JP | 15.8049px | 400 | **2.10** | 1.58049px | 下層の長文（可視 33 要素） |
| Menu Item | Noto Sans JP | **14.0488px** | 400 | 1.65 | 1.58049px | `概要・あゆみ・建築`（**トップ 104 要素 / 下層 72 要素**と最多） |
| Category Label | Noto Sans JP | 12.2927px | 400〜700 | 1.65 | 1.58049px | `大人` `ワークショップ`（可視 16〜62 要素） |
| Caption | Noto Sans JP | 10.5366px | 400 | 1.63 | **normal** | `撮影：新津保建秀`（可視 18 要素） |

> **サイズに端数が並ぶのは `body` が `vw` 流体だから。** `14.0488px` は `0.8889em`、`43.9024px` は `2.7778em` に相当する。**px を直書きすると幅が変わったとき追従しない。** 再現するなら `em` で書く。

### 3.5 行間・字間

- **本文の行間**: **`1.65`**（**トップ 183 要素 / 下層 84 要素**）。無単位なので各要素が自分のサイズで再計算する
- **CMS 本文の行間**: `2.10`（下層 33 要素）。長文だけさらに広げる
- **展覧会の日付**: `1.60`
- **見出しも `1.65` のまま**。見出しだけ行間を詰める設計ではない

#### 字間は `body` の `0.1em` が px で降りる

`letter-spacing: 0.1em` は **`body` の `font-size` で計算された絶対値**として全子孫に継承される。1440px なら `15.8049 × 0.1 = 1.58049px` が、**33px の見出しにも 12px のラベルにも同じ 1.58049px** で当たる。

| 対象 | letter-spacing | 実測 | em 換算 |
|---|---|---|---|
| ほぼ全要素（本文・ナビ・見出し） | **1.58049px** | **トップ 291 要素 / 下層 142 要素** | 本文で 0.1em / 見出し（43.9px）で **0.036em** |
| 写真クレジット | `normal` | 18〜19 要素 | — |
| 施設紹介の本文 | 1.04312px | 2 要素 | — |
| フッターの小文字 | 0.526829px | 2 要素 | — |

> **大きい文字ほど字間が相対的に消える。** これは `em` を `body` に書いたときに必ず起きる挙動で、IHI・愛知県美術館と同じ型。**見出しを広く空けたいなら、その要素で `em` を宣言し直す。**

### 3.6 禁則処理・改行ルール

```css
body {
  overflow-wrap: break-word;   /* 長い英数字・URL を折り返す */
  /* word-break の宣言は無い → normal（日本語の禁則処理は有効） */
}
```

- 実測: `word-break: normal` / `overflow-wrap: break-word`
- **`word-break: break-all` は使わない**（熟語の途中で折れる）

### 3.7 OpenType 機能

```css
body { font-feature-settings: "palt"; }

/* CMS 本文のリストだけ、行頭文字の詰めを解除する */
.cmsWysiwyg ol li::first-letter,
.cmsWysiwyg ul li::first-letter { font-feature-settings: normal; }
```

- **宣言位置は `body` に 1 行だけ。** 実測で `"palt"` が当たっているのは **トップ 894 要素 / 下層 601 要素**、すべて `horizontal-tb`（軸の取り違えは無い）
- **`palt` は実効している**。隠し div の幅は `normal` **603.72px** → `palt` **485.36px**（約 20% 詰まる）。`halt` も効く（503.72px）が使っていない
- **`li::first-letter` だけ `normal` に戻しているのがこのサイト独自の工夫。** `palt` が行頭の括弧や中点を詰めると箇条書きの字下げが揃わなくなるため、**行頭の 1 文字だけ詰めを解除**している。CSS 全文で 6 箇所（`.cmsWysiwyg` / `.about_point-page` / `.event_detail-page` / `.exhibition_detail-page` など、本文エリアごとに個別宣言）

### 3.8 縦書き

**CSS に定義はあるが、実際には 1 要素も使われていない。**

```css
/* 定義済み・適用 0 要素 */
.vwTxt {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

- `writing-mode` が `vertical-*` の要素は **2 ページとも実測 0 件**
- **ヒーローに縦組みが見えるのは画像。** 実測すると `marie_jp_PC.webp` / `mouri_PC.webp` / `main_slide02〜08.webp`（いずれも 1440×675）が全幅で並ぶカルーセルで、展覧会タイトルと作家名の縦組みは**その画像に焼き込まれている**
- **`.vwTxt` の存在を「縦組みのサイト」の証拠にしないこと。** 縦組みを実装するなら自分で書く

---

## 4. Component Stylings

### Buttons

**このサイトに「ボタンらしいボタン」はほとんど無い。** 角丸も影も使わず、面と文字だけで示す。

**Badge（黒）** — 展覧会の状態表示
- Background: `#000000`
- Text: `#ffffff` / 15.8049px / **weight 700** / letter-spacing 1.58049px / line-height 26.078px
- Padding: **`1.7561px 7.02439px`**（= `0.1111em 0.4444em`）
- Border Radius: **`0`**
- Border: `1px solid #000000`
- `開催中`

**Badge（シアン）** — 開館情報
- Background: `#0090df`
- Text: `#ffffff`
- Border Radius: `0`
- `本日開館 ｜ 10時−18時`

**Text Link（白面）** — 下層のメニューリンク
- Background: `#ffffff`
- Text: `#000000` / 12.2927px / **weight 700**
- Padding: **`3.5122px`**（= `0.2222em`）
- Border Radius: `0`
- Border: なし

**Page Top（円）**
- Background: `#000000`
- Text: `#ffffff` / 10px
- Border Radius: **`50%`**
- `line-height: 60px`（円の直径で中央寄せ）

> **padding に端数が出るのは `em` 指定だから。** `3.5122px` は `0.2222em`、`1.7561px` は `0.1111em`。**px で直書きすると幅が変わったときボタンだけ追従しない。**

### Inputs

独自スタイルの入力欄は 2 ページに無い。CSS には `font-size: 20px; letter-spacing: 0.1em; padding: 6px 12px` の宣言がある（問い合わせページ用）。

### Cards

- Background: 画像そのまま、面を敷かない
- Border Radius: `0`
- Shadow: **なし**
- 展覧会カードは「写真 → 日付（21.0732px）→ タイトル」の縦並び

### Tables（下層）

- `th` / `td` ともに `padding: 12px 22px`、`font-size: 18px`（1640px 以上）／ `calc(1.09756vw)`
- `th` は `vertical-align: top`

---

## 5. Layout Principles

### Spacing Scale

**自社トークンが 0 個なので、トークン化された余白スケールは存在しない。** 代わりに**余白が `em` で書かれていて `body` の流体に連動する**。

| 用途 | 宣言 | 1440px での実測 |
|------|-----|---|
| バッジ内 | `0.1111em 0.4444em` | `1.7561px 7.02439px` |
| リンク内 | `0.2222em` | `3.5122px` |
| 表のセル | `12px 22px` | 固定 |

**端数の px を見たら `em` に戻して読む**（割る数は `body` の font-size）。

### Container

- ヒーローは全幅（1440×675 の webp）
- ロゴは左上に `210×210px` の白い正方形で抜く（`head_logo.svg`）
- グローバルナビは右上に 4 語を横並び

### Grid

- 展覧会一覧・施設一覧は写真カードの横並び。グリッドのトークンは宣言されていない
- Gutenberg 由来の `gap: 0.25em` / `0.5em` の宣言があるが、これは WordPress ブロックの既定値

---

## 6. Depth & Elevation

**影は 1 つも使っていない。** 2 ページとも `box-shadow` の実測は **0 種**。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **すべての要素** |

### Border Radius

| 値 | 用途 | 実測 |
|---|---|---|
| **`50%`** | ページトップへ戻る円 | **可視 1 要素** |
| `0` | それ以外すべて | — |

**角丸を使わない。** バッジもリンクもカードも矩形のまま。奥行きは余白と写真で作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`body` に `font-feature-settings: "palt"` を 1 行書いて全要素に継承させる**
- **その上で `letter-spacing: 0.1em` を `body` に書く。** 「詰めてから空ける」の二段構えが、このサイトの字面
- **`li::first-letter { font-feature-settings: normal }` を本文エリアに書く。** 箇条書きの行頭だけ詰めを解除する
- **書体は Noto Sans JP 1 本。** ウェイトは **400 / 500 / 700** の 3 段だけ使う
- **本文の `line-height` は `1.65`（無単位）**、長文の CMS 本文だけ `2.10`
- **余白もフォントサイズも `em` で書く。** `body` が流体なので px は追従しない
- **角丸と影を使わない**（radius は円形アイコンの `50%` だけ、`box-shadow` は 0 種）
- **色はブランドのシアン `#0090df` 1 色＋黒と白。** 面に使うか文字に使うかで役割を変える
- **写真クレジットだけ `letter-spacing: normal` に戻す**（実サイトの流儀）

### Don't（禁止）

- **`body` の `vw` 流体をそのまま真似しない。** `calc(1.09756vw)` は 501px で **本文が約 5.5px** まで縮み、**500px で 16px に跳ね戻る**（約 2.9 倍の崖）。834px で 9.15px、768px で 8.43px と、**タブレット〜小型ノートの全域で読めない大きさになる**。流体にするなら `clamp(14px, 1.09756vw, 18px)` のように下限を切る
- **`letter-spacing` を各要素に `em` で配らない。** `body` に 1 回だけ書いて継承させる設計
- **大きい見出しの字間を `body` の継承値のままにしない**（43.9px の見出しで実効 0.036em まで薄まる）。広げたいならその要素で宣言し直す
- **`palt` と `letter-spacing` のどちらか片方だけ再現しない**
- **角丸・影を足さない**
- **明朝を足さない**（2 ページとも和文のセリフは可視 0 要素）
- **`font-weight: 600` を使わない**（700 と同じ字面になる）
- **`.vwTxt` があるからといって縦組みのサイトだと読まない。** 適用 0 要素で、ヒーローの縦組みは **webp 画像**
- **CSS 変数を「自社トークン」と読まない。** 49 個はすべて WordPress / Gutenberg 由来
- **`word-break: break-all` を使わない**

---

## 8. Responsive Behavior

### Breakpoints

```css
body { font-size: 18px; }                                    /* ≥ 1641px */
@media screen and (max-width: 1640px) { body { font-size: calc(1.09756vw); } }
@media screen and (max-width:  500px) { body { font-size: 16px; } }
```

| Width | body の font-size | letter-spacing（0.1em の実値） |
|---|---|---|
| 1641px 以上 | **18px**（設計値） | 1.8px |
| 1440px | **15.8049px** | 1.58049px |
| 1200px | **13.1707px** | 1.31707px |
| 1024px | **11.239px** | 1.1239px |
| 834px | **9.15366px** | 0.915366px |
| 768px | **8.42927px** | 0.842927px |
| 576px | **6.32195px** | 0.632195px |
| **501px** | **約 5.5px** ← 最小 | 約 0.55px |
| **500px 以下** | **16px** ← ここで跳ね戻る | 1.6px |

- **崖は 501 / 500 の 1 箇所だけ。** 16px → 5.5px の **約 2.9 倍**。規定の 4 幅（1440 / 1200 / 834 / 375px）だけ測ると、375px が 16px なので崖が見えない
- **`html` は 12 幅すべて 16px 固定**（`html` の `font-size` 宣言は CSS に 1 件も無く、UA 既定のまま）。ルートだけ測ると「完全固定のサイト」に見える
- **新規実装でこの式を写さないこと。** 設計幅 1640px より広い環境でしか意図どおりに出ない

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）。実サイトはバッジの padding が `0.1111em 0.4444em` と薄いので、タップ領域は親の行高で確保する

### フォントサイズの調整

- モバイル（≤500px）は **16px 固定**。流体から外れる
- 見出しも `em` 指定なので、`body` が 16px になると自動的に比率で追従する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0090df   （面にも文字にも使う唯一のブランド色）
Text Color:    #000000（本文・見出し）／ #ffffff（黒面・写真の上）
               #7d7d7d（カテゴリラベル）／ #888888（写真クレジット）／ #555555（日付）
Background:    #ffffff

Font: "Noto Sans JP", sans-serif   （Google Fonts・wght 400/500/700 のみ使用）
Root:        html 16px（固定）
Body Size:   16px（モバイル）／ 18px（設計幅 1640px）
Line Height: 1.65（無単位・本文も見出しも）／ 2.10（CMS 長文）
Letter Spacing: 0.1em（body に 1 回だけ。継承させる）
font-feature-settings: "palt"（body に 1 回だけ。li::first-letter だけ normal に戻す）
Border Radius: 0（円形アイコンのみ 50%）
Shadow: none
```

### 必ず書くCSS

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap");

body {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
  letter-spacing: 0.1em;        /* 絶対値 px として全子孫に降りる */
  font-feature-settings: "palt";
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  color: #000000;
  background: #ffffff;
}

/* 箇条書きの行頭だけ詰めを解除する */
.cmsWysiwyg ol li::first-letter,
.cmsWysiwyg ul li::first-letter { font-feature-settings: normal; }

/* 写真クレジットは字間を戻す */
.caption { letter-spacing: normal; }
```

### プロンプト例

```
横浜美術館のデザインシステムに従って、展覧会一覧のカードを作成してください。
- 書体は Noto Sans JP のみ。ウェイトは 400 / 700 の 2 段
- body に font-feature-settings: "palt" と letter-spacing: 0.1em を書いて継承させる
  （各要素に letter-spacing を当て直さない）
- 角丸は 0、box-shadow は使わない
- カードは「写真 → 日付（1.33em / weight 400 / line-height 1.60）→ タイトル（weight 700）」の縦並び
- 状態バッジは #000000 の面に白文字 weight 700、padding 0.1111em 0.4444em、border-radius 0
- 「開催中・予告」などのリンク色は #0090df
- 写真クレジットだけ letter-spacing: normal / color: #888888 / 0.6667em
- padding とフォントサイズは px ではなく em で書く
```
