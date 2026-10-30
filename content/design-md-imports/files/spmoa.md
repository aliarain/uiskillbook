# DESIGN.md — 静岡県立美術館（Shizuoka Prefectural Museum of Art）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-09 / 対象: `https://spmoa.shizuoka.shizuoka.jp/`, `/guide/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **UD フォントと 4 色の配色切り替えで組む、読めることを最優先にした公共館の UI。** 装飾を足さず、紺の帯と罫で区画を作る
- **密度**: 高い。開館時間・料金・休館日・イベント一覧を表と箇条書きで詰める
- **キーワード**: UD角ゴ、配色切り替え、10px ルート、影ゼロ、ベタ組み

**このサイトの核心は5つある。**

1. **太さを `font-weight` ではなく書体名で切り替える。** `FOT-UD角ゴ_ラージ Pr6 **R**` / `**M**` / `**B**` の 3 ファミリーを使い分けており、CSS に `font-weight` の宣言がない。実測でも**可視 284 要素のうち 280 要素が `400`**。**`font-weight: 700` を当てても太くならない**（そのファミリーに太字の実体が無い）
2. **UD フォント（ユニバーサルデザイン書体）を Web フォントで配信している。** Fontworks の UD角ゴ_ラージ を **FontPlus**（`webfont.fontplus.jp`）経由で動的注入する。**`document.fonts` には 1 件も載らない**ので、`@font-face` の有無では判定できない（3.1 参照）
3. **閲覧者が配色を 4 つから選べる。** ヘッダーの `白 / 青 / 黄 / 黒` のラジオで `body` に `.color01`〜`.color04` が付き、**背景・文字・リンク・罫・ボタンの色がまとめて入れ替わる**（実測 CSS 内に `.color0*` を含む規則が 33 本）
4. **ルートが 10px。** `body { font-size: 62.5% }` で 16px → **10px**。サイズはすべて `em` で書かれ、`1.4em` = 14px、`2.4em` = 24px として読む
5. **`line-height: 1.0em` が `body` に書いてある。** `em` なので **10px という絶対値**が全子孫に降りる。各要素が自分で `line-height` を宣言し直さないと、**14px の文字が 10px の行送りで組まれる**（実測で行間比 `0.71` が 33 要素）

**`letter-spacing` は可視 284 要素すべて `normal`。`font-feature-settings` は 0 件（`palt` なし）。CSS Custom Properties も 0 個。** トークン層を持たない素の CSS で、設計は書体名とクラス名に載っている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **SPMOA Navy** | **`#0e1b3f`** | **可視 62〜69 要素の塗り面**。ヘッダー帯・グローバルナビ・フッター・主ボタン・見出しの下線。このサイトのほぼ唯一のブランド色 |
| Navy Sub | `#455788` | サブ見出しの帯（可視 2 要素） |
| Navy Pale | `#dce0ea` | 淡い区切り面（可視 4 要素） |
| Breadcrumb | `#565f78` | パンくずの帯（可視 1 要素） |

### Semantic（意味的な色）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Warning / 注意書き** | `#dc0101` | `.rule`（注意事項の囲み）の枠と文字。**4 つの配色のうち「青」「黒」では白、「黄」では `#323232` に置き換わる** |
| **本日 / 開催中** | `#ed6400` | `本日` バッジ（可視 1 要素） |
| 日曜 | `#e40000` | カレンダーの日曜（可視 5 要素） |
| 土曜 | `#1e3a87` | カレンダーの土曜（可視 5 要素） |
| イベント分類 A | `#b7e3f8` | ギャラリーツアー等（可視 16 要素） |
| イベント分類 B | `#cef49b` | 創作週間等（可視 6 要素） |
| 開催中マーク | `#22ac38` | カレンダーの開催日（可視 1 要素） |

### Neutral（ニュートラル）

- **Text Primary** (`#323232`): 本文。`body` に直接書いてある。**可視 115〜132 要素**。**純黒は使わない**
- **Text Heading** (`#212121`): ナビ・見出し（可視 40 要素）
- **Text Muted** (`#666666`): カテゴリラベル（可視 9 要素）
- **Text on Dark** (`#ffffff`): 紺面の上（可視 99 要素）
- **Link** (`#032bc1`): 本文中のリンク（可視 3〜8 要素）
- **Border** (`#c9c9c9`): 見出しの下線・画像の枠
- **Surface Gray** (`#a0a0a0`): 展覧会カードの地（**可視 114 要素**）
- **Surface Light** (`#f6f6f6`): ニュース欄の面

### Background（配色切り替え）

**`body` に既定ではクラスが付かない**（実測 `document.body.className === ""`）。
そのため**初期表示のページ地色はブラウザ既定の白**で、ユーザーが選んだときだけ下の 4 つが当たる。

```css
body.color01 { background-color: #ffffff; }                      /* 白（文字は #323232 のまま） */
body.color02 { background-color: #0000b3; color: #ffffff; }      /* 青 */
body.color03 { background-color: #f39700; }                      /* 黄（実際は橙。文字は #323232） */
body.color04 { background-color: #000000; color: #ffffff; }      /* 黒 */
```

> **`pageBackground.resolved` は `rgb(14,27,63)` と出るが、これはヘッダーの紺。**
> トップ・下層とも `html` / `body` に塗りの指定がなく、`heroCover` も
> 「コンテンツ領域の地色は UA 既定（白）」と出ている。**紺をページ背景にしない。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **FOT-UD角ゴ_ラージ Pr6**（Fontworks のユニバーサルデザイン書体）。**R / M / B の 3 ファミリーを別々に指定する**
  - `FOT-UD角ゴ_ラージ Pr6 R` — 本文・UI。**可視 207 要素**
  - `FOT-UD角ゴ_ラージ Pr6 M` — 小見出し（`.sideIconTitle` / `.strongTitle`）。可視 7 要素
  - `FOT-UD角ゴ_ラージ Pr6 B` — 注意書きの囲み（`.rule`）・日付。可視 70 要素
- 明朝体は使わない

> **`typography.fontFaces` は空で、`document.fonts` にも 1 件も載らない。**
> それでも Web フォントを使っていないわけではない。**FontPlus**（`webfont.fontplus.jp/accessor/script/fontplus.js`）が
> JS で `@font-face` を動的注入し、ページ上の文字だけを動的サブセットして配信する方式のため、
> `document.fonts` に現れない。Adobe Fonts（Typekit）・TypeSquare・Morisawa Fonts Web と同じ型で、
> **これが 4 例目**。判定は次の 2 つで行う:
>
> 1. `distributions.fontFamily` に `FOT-` で始まるファミリー名が出ているか
> 2. `webfont.fontplus.jp` へのリクエストがあるか
>
> ドメインライセンスなので、**ローカルで再現するときは別の書体に置き換える**（下記）。

**ローカル再現の代替**: UD書体そのものは配れないので、**BIZ UDPGothic / BIZ UDGothic**（Google Fonts・モリサワの UD 書体）が最も近い。
3 段の太さは **BIZ UDPGothic には Regular と Bold しかない**ので、M の位置には Noto Sans JP の 500 を当てるか、R と B の 2 段に畳む。

### 3.2 欧文フォント

- 専用の欧文フォントを持たない。数字・アルファベット（日付・料金・時刻）も**UD角ゴの欧文グリフ**で出る
- フォールバックに古い欧文スタックが 1 本だけ残っている（`"lucida grande", tahoma, verdana, arial, "hiragino kaku gothic pro", meiryo, "ms pgothic", sans-serif`）。**本文には使われていない**

### 3.3 font-family 指定

```css
/* 本文・UI（既定） */
body {
  font-family: "FOT-UD角ゴ_ラージ Pr6 R", sans-serif;
  color: #323232;
  font-size: 62.5%;      /* = 10px。以降のサイズはすべてこの 10px に対する em */
  line-height: 1.0em;    /* ★ em なので 10px という絶対値が全子孫に降りる */
}

/* 小見出し */
.sideIconTitle,
.strongTitle { font-family: "FOT-UD角ゴ_ラージ Pr6 M", sans-serif; }

/* 注意書きの囲み */
.rule { font-family: "FOT-UD角ゴ_ラージ Pr6 B", sans-serif; }
```

**フォールバックの考え方**:
- スタックは **「書体名 1 つ ＋ `sans-serif`」だけ**。中間の OS フォントを並べない
- **太さはこのファミリー名で切り替える。** `font-weight` は使わない（3.4 参照）

### 3.4 文字サイズ・ウェイト階層

**`font-weight` は実質使わない。** 太さは R / M / B のファミリー名で指定する。

| Role | Font | Size (em / px) | Line Height | Letter Spacing | 備考 |
|------|------|------|-------------|----------------|------|
| Page Title | UD角ゴ R | `2.4em` / **24px** | `1.2em` (28.8px) | normal | `#pageTitle` |
| Heading 1 | UD角ゴ R | `2.0em` / **20px** | `1.3em` (26px) | normal | `.solidTitle`。下線 `3px solid #c9c9c9` |
| Heading 2 | UD角ゴ R | `1.8em` / **18px** | `1.4em` (25.2px) | normal | `.txtTitle`。可視 52 要素 |
| Heading 3 | UD角ゴ R | `1.6em` / **16px** | `1.3em` (20.8px) | normal | `.dotedTitle`。下線 `1px dotted` |
| Sub Heading | **UD角ゴ M** | `1.4em` / **14px** | `1.4em` (19.6px) | normal | `.sideIconTitle`（左に `10px` の紺の棒）/ `.strongTitle` |
| Notice | **UD角ゴ B** | `1.4em` / **14px** | `1.4em` | normal | `.rule`。`1px solid #dc0101` の囲み |
| Body / UI | UD角ゴ R | `1.4em` / **14px** | `1.6em` (22.4px) | normal | **最多の 96〜99 要素** |
| Nav | UD角ゴ R | `1.7em` / **17px** | — | normal | グローバルナビ（可視 40 要素） |
| Caption | UD角ゴ R | `1.2em` / **12px** | `1.0em` (12px) | normal | 図版キャプション |

**サイズは 10px を 1em として読む。** `1.2em` = 12px、`1.4em` = 14px、`2.4em` = 24px。
`html` は 1440 / 1200 / 834 / 375px のいずれでも **16px 固定**で、`body` の `62.5%`（= 10px）も全幅で動かない。**流体ルートではない。**

### 3.5 行間・字間

- **本文の行間**: `1.6em`（= その要素の font-size × 1.6）。実測 75〜81 要素
- **見出しの行間**: `1.2em`〜`1.4em`
- **長文の行間**: `1.8em`（開館時間の説明など。実測 19 要素）
- **1 行で収まる UI の行間**: `1.0em`（＝文字サイズと同じ。実測 97〜112 要素）
- **字間**: **可視 284 要素すべて `normal`。1 箇所も触らない**

**ガイドライン**:
- **`line-height` は `em` で書く。** 単位なしの比率に書き換えると別物になる。`em` は「その要素の font-size に対する絶対 px」を計算して**子に継承させる**ので、子が自分で宣言し直さない限り親の px がそのまま降りる
- **`body` の `line-height: 1.0em` = 10px を必ず上書きする。** 実測で行間比 `0.71` の要素が 33 個ある（14.04px の文字に 10px の行送り）。**新規に組む要素には必ず `line-height` を書く**
- **`letter-spacing` を足さない。** UD 書体は字面が大きく設計されているので、ベタ組みで詰まって見えない。`0.04em` などを当てると間延びする

### 3.6 禁則処理・改行ルール

```css
/* 実サイトは word-break / line-break / overflow-wrap を 1 つも宣言していない */
```

- すべてブラウザ既定（`word-break: normal` / `line-break: auto` / `overflow-wrap: normal`）
- `word-break: auto-phrase` も使っていない
- `html { -webkit-text-size-adjust: none; }` を宣言している（モバイルでの自動拡大を止める）

### 3.7 OpenType 機能

```css
/* 実サイトは font-feature-settings: normal。palt も halt も使っていない */
```

- **`palt` を足さない。** UD 書体は約物も含めて読みやすさのために設計されており、詰めると意図から外れる

### 3.8 縦書き

`writing-mode` は実測 0 件。**縦組みを使わない。**

---

## 4. Component Stylings

### Color Scheme Switcher（このサイト固有）

ヘッダーに 4 つのラジオを置き、`body` のクラスを差し替える。

```html
<div class="selectColor">
  <span class="btnList"><label class="label color01"><input type="radio" value="1" class="change-color">白</label></span>
  <span class="btnList"><label class="label color02"><input type="radio" value="2" class="change-color">青</label></span>
  <span class="btnList"><label class="label color03"><input type="radio" value="3" class="change-color">黄</label></span>
  <span class="btnList"><label class="label color04"><input type="radio" value="4" class="change-color">黒</label></span>
</div>
```

スイッチそのものが**選べる配色の見本**になっている（実測 `16px` / 白 `#ffffff` / 青 `#0000b3` / 黄 `#f39700` / 黒 `#000000`、すべて `1px solid #ffffff` の枠）。

**配色を足すときに書き換えが必要な箇所**（実サイトの `.color0*` 規則 33 本の内訳）:

| 対象 | 青(`.color02`) / 黒(`.color04`) | 黄(`.color03`) |
|------|------|------|
| `a:link` / `:visited` / `:hover` / `:active` | `#ffffff` | `#323232` |
| `.solidTitle` の下線 | （既定のまま） | `3px solid #0e1b3f` |
| `.dotedTitle` の下線 | （既定のまま） | `1px dotted #0e1b3f` |
| `.sideIconTitle` の左棒 | `10px solid #ffffff` | （既定のまま） |
| `.rule`（注意書き） | 枠・文字とも `#ffffff` | 枠・文字とも `#323232` |
| `.txtColorRed` | `#ffffff` | `#323232` |
| `.tbrNormal` / `.tbrBorder` の罫 | `th` の面を `inherit` に | `1px solid #323232` |
| `.btnDownload` | 面を `inherit`・`1px solid #ffffff` | 面を `inherit`・`1px solid #323232` |
| `.btnMore a` | 面 `#0e1b3f` / 文字 `#ffffff` / 枠なし | 同左 |

**考え方**: 青・黒（暗い地）では**文字と罫を白に倒す**、黄（明るい地）では**紺か `#323232` に倒す**。
面で塗っていたボタンは、暗い地では**枠線だけのボタンに変える**（`background-color: inherit` ＋ `1px solid`）。

### Buttons

**Primary**（`.btnMore`）
- Background: `#0e1b3f` / Text: `#ffffff`
- Border Radius: **`30px`**（全丸に近い）
- Font: UD角ゴ R `16px` / `line-height: 1.0em`

**Pagination**
- Background: `#ffffff` / Text: `#032bc1`
- Border Radius: `20px` / Font Size: `10px`

**Download**（配色で形が変わる）
- 既定: 面あり
- 青・黒: `background-color: inherit` ＋ `1px solid #ffffff`
- 黄: `background-color: inherit` ＋ `1px solid #323232`

### Cards

- Background: `#a0a0a0`（展覧会カードの地）/ `#f6f6f6`（ニュース欄）
- Border Radius: **`3px`**（実測 34 要素でこのサイトの既定）
- **Shadow: なし**

### Tables（`.tbrNormal` / `.tbrBorder`）

- 罫は**上辺と各行の下辺だけ**（`border-top` ＋ `border-bottom`）。縦罫を引かない
- 既定の罫色は `#c9c9c9`、黄の配色では `#323232`

---

## 5. Layout Principles

### Spacing Scale

CSS に直書きされている値（トークンは無い）。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10px | 図版キャプションの上 |
| S | 15px | 見出しの下・段落の下 |
| M | 20px | ブロックの下 |
| L | 25px | 図版の下 |
| XL | 35px | ブロック群の下 |
| XXL | 50px / 60px | セクション間 |

**5 の倍数**（10 / 15 / 20 / 25 / 35 / 50 / 60）。8 の倍数ではない。

### Container

- `.container { padding: 0 15px; }`
- 最大幅の指定は `100%`。**固定のコンテナ幅を持たない**（ブレークポイントごとに中身で決める）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **すべての要素** |

**`box-shadow` はサイト全体で実測 0 種。** 層は

1. 紺（`#0e1b3f`）の帯
2. 罫線（`#c9c9c9` の `solid` / `dotted`）
3. 面のグレー（`#a0a0a0` / `#f6f6f6` / `#dce0ea`）

の 3 つだけで作る。**影を足すと、配色を切り替えたときに暗い地で破綻する**（影は 4 配色ぶん定義されていない）。

---

## 7. Do's and Don'ts

### Do（推奨）

- 太さは**書体名**で切り替える（`FOT-UD角ゴ_ラージ Pr6 R / M / B`）
- サイズは `em` で書く（**ルートは 10px**）。`1.4em` = 14px
- **新しく作る要素には必ず `line-height` を書く**（`body` の 10px が降りてくる）
- `line-height` は `em` で書く（`1.6em` 本文 / `1.2em`〜`1.4em` 見出し）
- 色を足したら、**4 つの配色すべてで文字・罫・枠の見え方を確認する**
- ローカル再現は **BIZ UDPGothic** で代替する

### Don't（禁止）

- **`font-weight: 700` を当てない**（UD角ゴ_ラージ Pr6 R に太字の実体がなく、太くならない。太くしたいなら `B` のファミリーに変える）
- **`letter-spacing` を足さない**（実サイトは可視 284 要素すべて `normal`）
- **`palt` を足さない**
- **`box-shadow` を足さない**
- **`line-height` を単位なしの比率に書き換えない**（`em` の絶対値継承がこのサイトの前提）
- **紺 `#0e1b3f` をページ背景にしない**（ヘッダーの色。地色は白）
- **配色切り替えを考慮しない色指定をしない**（`color` を書くなら `.color02` / `.color03` / `.color04` の対応も書く）
- 純黒 `#000000` を本文に使わない（`#323232`）

---

## 8. Responsive Behavior

### Breakpoints

実測で使われている 5 つ。`min-width` と `max-width` が混在している。

| Name | Query | 実測 |
|------|-------|------|
| Mobile | `screen and (max-width: 860px)` | トップのみ |
| Tablet | `only screen and (min-width: 768px)` | 1〜2 箇所 |
| Desktop | `only screen and (min-width: 1024px)` | 1〜2 箇所 |
| Wide | `only screen and (min-width: 1366px)` | 1 箇所 |
| Wider | `only screen and (min-width: 1367px)` | 1 箇所 |

> **`1366px` と `1367px` が隣り合っている**（`min-width: 1366` と `min-width: 1367`）。
> 1366px ちょうどのときだけ前者が効く、という作り。**新規実装で真似しない。**

### タッチターゲット

- 最小 44px × 44px

### フォントサイズの調整

実測（1440px → 375px）:

| 要素 | 1440px | 1200px | 834px | 375px |
|------|--------|--------|-------|-------|
| `html` | 16px | 16px | 16px | 16px |
| `body` | 10px | 10px | 10px | 10px |
| セクション見出し | 28px | 28px | **24px** | **20px** |
| 本文 | 10〜14px | 10px | 10px | 10px |

- **ルートも `body` も全幅で固定。** 縮むのは見出しだけで、`em` の宣言値を 834px / 375px で書き換えている
- `line-height` は `em` なので、サイズを変えた要素では自動で追従する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0e1b3f   (SPMOA Navy)
Text Color:    #323232   (見出し #212121 / 補足 #666666 / リンク #032bc1)
Background:    #ffffff   (既定。配色切り替えで #0000b3 / #f39700 / #000000)
Border:        #c9c9c9
Font: "FOT-UD角ゴ_ラージ Pr6 R", sans-serif   (太字は "… Pr6 B"、中字は "… Pr6 M")
      ローカル代替: "BIZ UDPGothic", sans-serif
Root: body { font-size: 62.5% }  → 1em = 10px
Body Size: 1.4em (= 14px)
Line Height: 1.6em (本文) / 1.2〜1.4em (見出し)  ← 必ず em で、必ず書く
Letter Spacing: normal  ← 触らない
Radius: 3px (既定) / 30px (ボタン) / 20px (ページャ)
Shadow: なし
Weight: font-weight は使わない。書体名 R / M / B で切り替える
```

### プロンプト例

```
静岡県立美術館のデザインシステムに従って、開館時間・料金の表を作成してください。
- フォント: "FOT-UD角ゴ_ラージ Pr6 R", "BIZ UDPGothic", sans-serif
- font-weight は指定しない。強調する行だけ font-family を "FOT-UD角ゴ_ラージ Pr6 B" に変える
- body は font-size: 62.5%（= 10px）。サイズはすべて em で書く（本文 1.4em = 14px）
- line-height を必ず各要素に em で書く（本文 1.6em、見出し 1.3em）。
  書かないと body の line-height: 1.0em（= 10px）が降りてきて行が潰れる
- letter-spacing は指定しない
- 表は縦罫なし。border-top: 1px solid #c9c9c9 と各行の border-bottom だけ
- 見出し .solidTitle は 2.0em / border-bottom: 3px solid #c9c9c9
- box-shadow は使わない
- 配色切り替えに対応するため、.color02 / .color04（暗い地）では文字と罫を #ffffff に、
  .color03（黄の地）では #323232 にする CSS も併せて書く
```
