# DESIGN.md — 特種東海製紙（Tokushu Tokai Paper）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-11 / 対象: `https://www.tt-paper.co.jp/`, `/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **UD書体「BIZ UDPGothic」1本で全ページを組む。** 読みやすさを前提に置いた書体に `palt` をかけ、字間 0.06em・行間 1.5 で締める。レイアウトは `rem` だけで書かれていて、**3 つの設計幅（1080 / 860 / 390px）の間を `vw` ルートで連続的に伸縮する**
- **密度**: 中。紺（`#253957`）と白の2色で、角丸 6px / 10px / 26px を使い分けたカードを並べる
- **キーワード**: BIZ UDPGothic、palt、字間 0.06em、行間 1.5、vw ルート、紺一色

**このサイトの核心は4つある。**

1. **和文は BIZ UDPGothic のみ。** 可視テキスト 155 / 79 要素のうち **BIZ UDPGothic が 155 / 79 要素**（残り 1 要素だけ Poppins）。モリサワの UD（ユニバーサルデザイン）書体をプロポーショナルで使い、**Google Fonts から `wght@400;700` の 2 ウェイトを配信**している（フォント要求 60 件）
2. **`html` 自体が `vw` の流体で、3 つの規格幅を持つ。** `≥1080px` = `62.5%`（10px 固定）／`860–1079px` = `1.1627906977vw`（＝100vw/86、**860px で 10px**）／`≤859px` = `2.5641025641vw`（＝100vw/39、**390px で 10px**）。**実測で 375px→9.615px、834px→21.385px、1079px→12.547px** という半端な値が出る（世田谷美術館型）
3. **`font-family` の先頭 `"Local BIZ UDPGothic"` は実体が無い。** CSS 全文の `@font-face` は `webicon`（アイコンフォント）**1 件だけ**で、`Local BIZ UDPGothic` を定義する `@font-face` はどこにも無い。**マッチせずに 2 番目の `"BIZ UDPGothic"`（Google Fonts 配信）に落ちている**。OS に入っている BIZ UDPGothic を優先してダウンロードを省く意図だったと思われるが、`@font-face { src: local("BIZ UDPGothic") }` が無いので効いていない
4. **`line-break: strict` を `body` に書いている。** 禁則処理を明示している数少ないサイト。`overflow-wrap: anywhere` と `word-break: normal` も併記

**CSS Custom Properties は 2 個しかなく、しかも色でもサイズでもない**（§5 参照）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|---|---|---|
| **Corporate Navy** | **`#253957`** | **このサイトの中心。** `body { color: #253957 }`。可視テキスト **68 / 21 要素**、塗り面 **8 要素**（Primary ボタン）。見出しも本文もボタンも全部この紺 |
| **Paper Blue** | **`#0071c1`** | 可視 2 / 1 要素。**「製紙事業」側を指す色**。リンクの色としても使う |
| **Eco Green** | **`#06ad51`** | 可視 1 要素。**「環境関連事業」側を指す色** |

> **`#0071c1` と `#06ad51` は「製紙×環境」という2事業の対**を表すための色で、
> 装飾色ではない。**この2色を並べて初めて意味が立つ。**

### Neutral（ニュートラル）

| 役割 | 実装値 | 実測 |
|---|---|---|
| **Text Primary** | **`#253957`** | 上述。**黒を使わない。本文も紺** |
| Text Secondary | `#516179` | 可視 11 / 2 要素。日付・カテゴリ・注記。紺を薄めたトーン |
| Text on Dark | `#ffffff` | 可視 74 / 56 要素。紺面・写真の上 |
| Surface | `#eeeff2` | 塗り面 7 要素。タグの地色・カードの枠色 |
| Surface Light | `#f8f9fa` | 塗り面 1 要素。下層のヘッダー帯 |
| Border | `#dee1e6` | カードの枠（`1px solid`） |
| Border Light | `#eeeff2` | 薄い枠 |
| Divider | `#bec4cd` | 塗り面 2 要素 |
| Overlay | `rgba(37,57,87,.4)` | 写真の上の紺の膜（1 要素） |
| Background | `#ffffff` | ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample 4/4`） |

**グレーを使わず、ニュートラルも全部ブルーグレー（紺の派生）で作る。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **BIZ UDPGothic**（モリサワ／UD書体、プロポーショナル版）。**可視 155 / 79 要素すべて**
  - **UD 書体を全面採用しているサイトは珍しい。** 字面が大きく、濁点・半濁点が離れていて、`1` `7` `l` などの判別が付きやすい
- **明朝体**: 使わない

### 3.2 欧文フォント

- **Poppins**（Google Fonts、`wght@600` のみ配信）。**使っているのはフッターのコピーライト 1 要素だけ**
- アイコン用に `webicon`（自前の TTF / WOFF、`font-weight: 400` / `font-display: block`）

### 3.3 font-family 指定

```css
/* 実サイト */
body {
  color: #253957;
  font-family: "Local BIZ UDPGothic", "BIZ UDPGothic", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: .06em;
  font-feature-settings: "palt";
  overflow-wrap: anywhere;
  word-break: normal;
  line-break: strict;
}
```

**`"Local BIZ UDPGothic"` には対応する `@font-face` が無い。**

- CSS 全文の `@font-face` は **`webicon` の 1 件だけ**（実測）
- `document.fonts` に載るのは `BIZ UDPGothic` 400/700（Google Fonts の unicode-range 分割）・`Poppins` 600・`webicon` 400 のみ。**`Local BIZ UDPGothic` は存在しない**
- したがって先頭名は**必ず外れ**、2 番目の `"BIZ UDPGothic"` が当たる。ダウンロードは省略されず、**フォント要求は 60 件発生する**

```css
/* ★正しくはこう書く。OS 同梱の BIZ UDPGothic を優先してダウンロードを省くなら */
@font-face {
  font-family: "Local BIZ UDPGothic";
  src: local("BIZ UDPGothic"), local("BIZ UDPGothic Regular");
  font-weight: 400;
}
/* 新規実装では、この別名を使わず素直に書くのが安全 */
font-family: "BIZ UDPGothic", sans-serif;
```

**Poppins のフォールバック誤り**:

```css
/* 実サイト（フッターのコピーライト） */
font-family: Poppins, serif;   /* ★Poppins はジオメトリックサンセリフ。serif は誤り */
/* 正しくは */
font-family: Poppins, sans-serif;
```

加えて、その要素の `font-weight` は **400** だが、Google Fonts からは **`Poppins:wght@600` しか配信していない**。ファミリーに 600 の 1 本しか無いため、**400 と書いても SemiBold が出る**。

### 3.4 文字サイズ・ウェイト階層

**サイズはすべて `rem`。`html` が `vw` で動くので、下表は「`html` = 10px のとき（1080px 以上 / 860px / 390px）」の値。**

| Role | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|--------|-------------|----------------|------|
| Page Title (下層 h1) | 42px (4.2rem) | 700 | 63px (1.50) | 0.96px (0.06em) | |
| Section Heading | 40px (4.0rem) | 700 | 48px (1.20) | **6px (0.15em)** | 5 / 2 要素。**見出しだけ大きく開ける** |
| Statement | 32px (3.2rem) | 700 | 48px (1.50) | **5.12px (0.16em)** / 3.84px (0.12em) | `製紙事業` `環境関連事業` |
| Hero Accent | 26.352px | 700 | 1.80 | **4.392px (0.167em)** | `製紙` `環境` |
| Hero Sub | 24px (2.4rem) | 700 | — | **3.6px (0.15em)** | `技術と信頼で顧客と共に未来をひらく` |
| Heading M | 22px (2.2rem) | 700 | 1.50 | 0.96px (0.06em) | `トピックス` |
| Heading S | 20px (2.0rem) | 700 | 1.50 | 0.96px (0.06em) | `環境` `社会` `ガバナンス` |
| Lead | 19px / 18px | 700 | 1.50 | 0.96px (0.06em) | |
| Card Label (hero) | 19.2px | 400 | 1.80 | 0.06em | 9 要素。`と` `で` の小さい助詞 |
| **Body** | **16px (1.6rem)** | **400** | **24px (1.50)** | **0.96px (0.06em)** | **55 / 15 要素** |
| Nav / Body Strong | 16px | **700** | 24px (1.50) | 0.96px | **88 / 27 要素が 700** |
| UI | 15px / 14px | 400 | 1.50 | 0.9px / 0.84px (0.06em) | 31 / 35 要素 |
| Tag | 13px (1.3rem) | 700 | 1.50 | 0.78px (0.06em) | 21 / 15 要素 |
| Note | 12.8px | 400 | 1.50 | 0.06em | `（PDF:426KB）` |

**ウェイトは 400 と 700 の 2 段だけ**（Google Fonts の URL も `wght@400;700`）。
**500 / 600 は配信されていないので、当てると最寄りの 400 か 700 に丸められる。**

> **トップページでは 700 が 88 要素・400 が 68 要素で、太い方が多い。** UD 書体は字面が大きいぶん
> Regular でも十分に強いが、このサイトは見出し・ナビ・タグをすべて Bold で立てている。

### 3.5 行間・字間

- **本文の行間**: **1.50**（`body { line-height: 1.5 }`）。実測でも **1.50 が 137 / 72 要素**と圧倒的
  - 日本語本文としては**詰まっている方**。UD 書体の大きな字面で成立させている
  - 読み物の段落だけ `1.68`（2 要素）、ヒーローの小さい文字が `1.80`（5 要素）
- **字間**: **`body` に `letter-spacing: .06em` を 1 回書いて継承させる。**
  `em` 宣言は **絶対値 px に解決されて子へ降りる**ため、サイズの違う要素でも **同じ `0.96px`** が付く（可視 118 / 74 要素）
  - 16px × 0.06 = **0.96px** がサイト全体の既定
  - **`html` が `vw` で動くと字間も一緒に動く**: 390px で 0.84px、375px で 0.808px、859px で 1.85px
- **見出しだけ `em` を上書きする**: セクション見出し **0.15em**、ステートメント **0.16em**、ヒーロー **0.167em**

```css
/* 実装の型 */
body { font-size: 1.6rem; line-height: 1.5; letter-spacing: .06em; font-feature-settings: "palt"; }
.section-heading { font-size: 4rem; line-height: 1.2; letter-spacing: .15em; }  /* ★見出しだけ開く */
```

> **`letter-spacing` を各要素に `em` で配らない。** body に 1 回書いて継承させ、
> **見出しでだけ上書きする**のがこのサイトの設計。
> **`line-height` は比率（1.5）で書く。** px で固定しない。

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの body に書かれている 3 行。そのまま使う */
overflow-wrap: anywhere;   /* 長い URL・英単語をどこでも折る */
word-break: normal;        /* 和文は通常の規則で折る */
line-break: strict;        /* ★厳格な禁則処理 */
```

- **`line-break: strict`** を明示しているのがこのサイトの特徴。小書き仮名（ゃゅょっ）や長音符も行頭に来ないようにする
- `word-break: auto-phrase` は使っていない
- `interpolate-size: allow-keywords` を `:root` に書いている（`height: auto` へのアニメーションを有効にする新しい CSS）

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";   /* ★body に 1 回。実測 853 要素（トップ）/ 498 要素（下層） */
```

- **`palt` を `body` に 1 回書いて全体に継承させる。** 外部ウィジェットを除けばほぼ全要素に効いている
- **UD 書体に `palt` を当てる組み合わせ**。UD 書体は字面が大きく、詰めないと見出しが間延びする
- `halt` / `tnum` などは使っていない

### 3.8 縦書き

`writing-mode` が `horizontal-tb` でない要素は **0 件**。縦組みは使わない。

---

## 4. Component Stylings

### Buttons

**Primary（塗り）** — 実測 3 要素

- Background: `#253957`
- Text: `#ffffff`
- **Padding: `19.2px 12.8px 19.2px 19.2px`**（＝`1.92rem 1.28rem 1.92rem 1.92rem`。右だけ狭い）
- **Border Radius: `6px`**
- Font Size: 16px / Weight: **700** / Letter Spacing: `0.96px`（継承）
- Border: なし

**Secondary（白地・線）** — 実測 5 要素

- Background: `#ffffff`
- Text: `#253957`
- Border: **`1px solid #dee1e6`**
- Padding: `19.2px 8px 19.2px 16px`（大きい版は `27px 18px 27px 27px`）
- Border Radius: `6px`
- Font Size: 16px / 18px / Weight: **700**

**Ghost（枠なし）** — 実測 3 要素

- Background: `#ffffff` / Text: `#253957` / Border: なし / Radius: `6px`
- Padding: `16px 12.8px 16px 19.2px`

### Tags / Badges

- Background: `#eeeff2` / Text: `#253957`
- **Border Radius: `26px`**（ピル）
- Padding: `2.6px 13px`
- Font Size: 13px / Weight: **700**

### Cards

| 用途 | Radius | Border | 実測 |
|---|---|---|---|
| リンクカード | **`10px`** | `1px solid #eeeff2` | 7 / 5 要素。文字色 `#0071c1` |
| ボタン型カード | **`6px`** | `1px solid #dee1e6` | 15 / 4 要素 |
| セクション面 | `16px` / `24px` | なし | 3 / 1 要素 |
| 片角だけ | `24px 0 0` | なし | 1 要素（トピックス枠） |

### Focus / Ring

```css
/* 実測された唯一の box-shadow。影ではなくリング（blur 0 / spread 8px） */
box-shadow: rgba(37, 57, 87, .3) 0 0 0 8px;
```

ヒーローの円形要素に使われている。**ブランド紺の 30% を 8px 広げた輪**で、ぼかしは 0。

---

## 5. Layout Principles

### CSS Custom Properties（色でもサイズでもない）

実サイトの `:root` に宣言されているのは **2 個だけ**で、どちらも **JS に現在のブレークポイントを伝えるための文字列**。

```css
:root                                    { --breakpoint: "pc"; }
@media all and (min-width: 860px) and (max-width: 1079px) {
  :root { --breakpoint: "tab"; --breakpoint-width: "1080px"; }
}
@media all and (max-width: 859px) {
  :root { --breakpoint: "sp";  --breakpoint-width: "860px"; }
}
:root { interpolate-size: allow-keywords; }
```

**デザイントークンの層は存在しない。** 色もサイズも hex / rem の直書き。
`getComputedStyle(document.documentElement).getPropertyValue('--breakpoint')` を JS から読む、という使い方。

### Grid / Gap

| 値 | 実測 | 用途 |
|---|---|---|
| **`13px`（1.3rem）** | **26 件（最多）** | カード内の要素間 |
| `40px 16px` | 5 / 5 件 | カードグリッド（行 40 / 列 16） |
| `20px 32px` | 3 / 1 件 | 2カラム |
| `32px` / `24px` / `28px` | 2 / 2 / 1 件 | セクション内 |
| `56px` / `40px` / `30px` | 下層 | 下層の大きな区切り |

### Spacing Scale

`rem` 直書きで、**0.8 / 1.3 / 1.6 / 1.92 / 2.4 / 3.2 / 4.0 rem** あたりが頻出（= 8 / 13 / 16 / 19.2 / 24 / 32 / 40px）。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| **0** | **`none`** | **ほぼすべての要素**。下層ページは実測 0 種 |
| Ring | `rgba(37,57,87,.3) 0 0 0 8px` | ヒーローの円。**ぼかし 0・広がり 8px のリングで、影ではない** |

**落ち影を使わない。** 浮きは `1px solid #dee1e6` の枠と `#eeeff2` の地色で作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **`font-family: "BIZ UDPGothic", sans-serif`**（UD 書体）で組む
- **`body` に `letter-spacing: .06em` と `font-feature-settings: "palt"` を 1 回書いて継承させる**
- **`line-height: 1.5`** を既定にする（比率で書く）
- 見出しだけ **`letter-spacing: .15em`** に上書きする
- **`line-break: strict` / `word-break: normal` / `overflow-wrap: anywhere`** を `body` に書く
- 文字色は黒ではなく **`#253957`**。補助は `#516179`
- 角丸は **6px（ボタン）/ 10px（リンクカード）/ 26px（タグ）** で使い分ける
- ウェイトは **400 と 700 の 2 段**だけ
- 落ち影を足さない。枠 `1px solid #dee1e6` と地色 `#eeeff2` で面を分ける

### Don't（禁止）

- **`"Local BIZ UDPGothic"` を書かない。** 対応する `@font-face` が無く、必ずマッチせずに外れる
- **`font-weight: 500` / `600` を使わない。** `wght@400;700` しか配信していない
- **`Poppins, serif` と書かない。** Poppins はサンセリフ。`Poppins, sans-serif` が正しい
- **文字色に `#000000` を使わない。** このサイトの黒は `#253957`
- `letter-spacing` を要素ごとに `em` で配らない（body 継承 ＋ 見出しだけ上書き、が設計）
- `line-height` を px で固定しない（`html` が `vw` で動くため崩れる）
- **サイズを px で直書きしない。** 全体が `rem` ＋ `vw` ルートで組まれており、px を混ぜると
  スマートフォン・タブレットでその要素だけ伸縮しなくなる

### 実サイトの注意点（そのまま真似しない）

- **`≤859px` の規則が 859px まで効くため、タブレット縦（768〜859px）で本文が 27〜31px まで巨大化する。**
  390px 設計のモバイルレイアウトをそのまま引き伸ばしているため。
  新規実装では `clamp()` で上限を切るか、タブレット用の規格幅をもう 1 段挟む

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 実測（宣言回数） |
|------|-------|------|
| **SP** | ≤ 859px | `(max-width: 859px)` **159 回（最多）** |
| **TAB** | 860–1079px | `(min-width: 860px) and (max-width: 1079px)` **64 回** |
| **PC** | ≥ 1080px | `(min-width: 1080px)` 21 回 |
| PC Narrow | 1080–1200px | 2 回 |

### `html` のフォントサイズ（★3 規格幅の vw 流体）

```css
html { font-size: 62.5%; }                                        /* = 10px */
@media all and (min-width: 860px) and (max-width: 1079px) {
  html { font-size: 1.1627906977vw; }    /* = 100vw / 86 → 860px のとき 10px */
}
@media all and (max-width: 859px) {
  html { font-size: 2.5641025641vw; }    /* = 100vw / 39 → 390px のとき 10px */
}
```

**設計幅は 1080 / 860 / 390px の 3 つ**で、各レンジの中は**レイアウト全体が viewport 幅に比例して伸縮する**。

| 画面幅 | `html` | `body` (1.6rem) | `line-height` | `letter-spacing` |
|---|---|---|---|---|
| 1440px | **10px** | 16px | 24px | 0.96px |
| 1200px | 10px | 16px | 24px | 0.96px |
| **1080px** | **10px** | 16px | 24px | 0.96px |
| 1079px | **12.547px** | 18.82px | 28.23px | 1.129px |
| 1000px | 11.628px | 17.44px | 26.16px | 1.047px |
| **860px** | **10px** | 15px※ | 22.5px | 0.9px |
| 859px | **22.026px** | 30.84px | 46.25px | 1.850px |
| 768px | 19.692px | 27.57px | 41.35px | 1.654px |
| **390px** | **10px** | 14px※ | 21px | 0.84px |
| 375px | **9.615px** | 13.46px | 20.19px | 0.808px |
| 320px | 8.205px | 11.49px | 17.23px | 0.689px |

※ TAB 以下では `body` の `font-size` が `1.5rem` / `1.4rem` に落ちる（別宣言）。

> **`9.615px` / `21.385px` / `12.547px` のような半端な値が出たら、`html` が `vw` で動いている合図。**
> **1 幅だけ測って「このサイトの本文は 16px」と書かない。**
> **`rem` 指定は維持し、px へ読み替えない。** 読み替えると 390px 以外の全幅で崩れる。

### タッチターゲット

Primary ボタンの実高は 約 62px（19.2 + 24 + 19.2）。最小 44px × 44px は余裕で満たす。

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Corporate Navy: #253957（文字・Primary ボタンの面）
Paper Blue:     #0071c1（製紙事業・リンク）
Eco Green:      #06ad51（環境関連事業）
Text Secondary: #516179
Surface:        #eeeff2
Border:         #dee1e6
Background:     #ffffff
Font:           "BIZ UDPGothic", sans-serif   ← "Local BIZ UDPGothic" は書かない
Weights:        400 / 700（500・600 は無い）
Root:           html 62.5%（≥1080px）/ 1.1627906977vw（860–1079）/ 2.5641025641vw（≤859）
Body Size:      1.6rem（= 16px at 1080px+）
Line Height:    1.5
Letter Spacing: .06em（body に1回）/ .15em（見出し）
Feature:        font-feature-settings: "palt"（body に1回）
Kinsoku:        line-break: strict; word-break: normal; overflow-wrap: anywhere;
Radius:         6px（ボタン）/ 10px（リンクカード）/ 26px（タグ）
Shadow:         なし（リングのみ rgba(37,57,87,.3) 0 0 0 8px）
```

### プロンプト例

```
特種東海製紙のデザインシステムに従って、IR情報のカードセクションを作成してください。
- body に font-family: "BIZ UDPGothic", sans-serif / letter-spacing: .06em /
  font-feature-settings: "palt" / line-height: 1.5 /
  line-break: strict; word-break: normal; overflow-wrap: anywhere を書く
- サイズはすべて rem で書く。px で直書きしない
- 文字色は #253957、補助テキストは #516179。黒（#000000）は使わない
- セクション見出しは 4rem / weight 700 / line-height 1.2 / letter-spacing .15em
- カードは border-radius 10px / border 1px solid #eeeff2 / 文字色 #0071c1
- タグは背景 #eeeff2 / 文字 #253957 / 1.3rem / weight 700 /
  border-radius 26px / padding 0.26rem 1.3rem
- 「一覧を見る」ボタンは背景 #253957 / 文字 #ffffff / weight 700 /
  border-radius 6px / padding 1.92rem 1.28rem 1.92rem 1.92rem
- font-weight は 400 と 700 だけを使う
- box-shadow は使わない。枠と地色で面を分ける
- gap は 1.3rem（カード内）/ 4rem 1.6rem（カードグリッド）
```
