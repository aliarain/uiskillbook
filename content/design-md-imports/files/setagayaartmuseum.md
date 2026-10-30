# DESIGN.md — 世田谷美術館（SETAGAYA ART MUSEUM）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-29 / 対象: `https://www.setagayaartmuseum.or.jp/`, `/exhibition/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白地に展覧会の色を置く。** 館そのものには色を持たせず、展覧会・イベントごとに割り当てた6色だけが画面に立つ。罫線と面で組み、角丸はバッジの真円以外に使わない
- **密度**: 中程度。会期・展示室・タイトルを縦に積むカード形式。本文の行間は `1.73`、展覧会タイトルは `2.10` とゆったり
- **キーワード**: 約物サブセット、極細と極太、カテゴリカラー、950px固定、印刷を前提にしたメディアクエリ

**このサイトの核心は3つある。**

1. **約物だけを別フォントに差し替えて詰める。`palt` は1文字も使っていない**（CSS 全文で `font-feature-settings` の宣言 **0 件**、実測 `font-feature-settings` を持つ要素 **0 件**）。代わりに **YakuHanJP** を `unicode-range` で約物だけに限定して被せている。**「約物が詰まっている＝palt」と読み違えないこと**
2. **CSS Custom Properties が 0 個。色は hex をそのままクラス名にしている**（`.color_039788` `.color_d70000` …）。実測 `customPropertiesSummary.own = 0` / `platform = 0`。設計トークンという層が存在しない
3. **書体スタックはサイト全体で1本しかない。** `YakuHanJP, "Noto Sans Japanese", sans-serif` が **可視テキストの全要素**（トップ 168/168、下層 108/108）。見出しも本文もナビもフッターも同じ1行で、**差は太さとサイズだけでつけている**

**ルートの `font-size` は固定値ではなく、画面幅に追従する流体値。** デスクトップでは `10px` だが、タブレットで `8px`、モバイルでは **`4.99999px`** まで縮む（実測。下表は 4 幅での計測）。

| 画面幅 | `html` の font-size | `body` の font-size |
|---|---|---|
| 1440px | **10px** | 10px |
| 1200px | **10px** | 10px |
| 834px | **8px** | 8px |
| 375px | **4.99999px** | 4.99999px |

**`rem` を `px` に読み替えて固定しないこと。** `1rem` はデスクトップで 10px、モバイルでは約 5px になる。CSS には `font-size: 1.28vw` や `calc((0.7878787878787877vw - 0.08484848484848229px) * 1.6)` のような **vw ベースの式**が書かれており、`4.99999px` という半端な実測値がその証拠。**この DESIGN.md の 3.4 節のサイズはすべてデスクトップ（1440px / 1200px）での実測値**。

---

## 2. Color Palette & Roles

### Category（展覧会・イベントの色）

**このサイトのブランドカラーは「無い」。** 代わりに6色のカテゴリカラーがあり、展覧会ごと・イベント種別ごとに1色が割り当てられる。**CSS 全文での出現回数がほぼ揃っている（12〜15回）** のは、6色が同じ役割の体系として書かれている証拠。

| 色 | 実装値 | 実測 |
|------|--------|------|
| **Blue** | **`#3e4eb8`** | 可視 3 要素（会期・展示室・展覧会タイトル）。CSS 全文で 12 回 |
| **Green** | **`#039788`** | 可視 3 要素。CSS 全文で 12 回 |
| **Yellow** | **`#fed910`** | 可視 3 要素。CSS 全文で 12 回 |
| **Red** | **`#d70000`** | 可視 4 要素（イベントのバッジ）。CSS 全文で **15 回** |
| **Pink** | **`#ec1561`** | 可視 4 要素（デジタルコンテンツのバッジ）。CSS 全文で 12 回 |
| **Olive** | **`#a7b809`** | **下層ページの見出し専用**（`/exhibition/` の h1「展覧会」と h2 が計 7 要素）。CSS 全文で 12 回 |

> **色の割り当て方が独特。** クラス名が `color_` ＋ hex そのもの（`.color_3e4eb8`、`.color_039788`）で、展覧会ごとに HTML 側でクラスを付け替える。**CSS 変数もトークン名も介さない。**
>
> ```css
> #CONTENTS .list01.list_calendar li .title.color_039788 { color: #039788 }
> #CONTENTS .ticket_info_navibar.color_039788 { background-color: #039788 }
> #CONTENTS .exhibition_unit.color_039788 .title .extraordinary {
>   background: linear-gradient(transparent 17%, #039788 17%, #039788 /* …蛍光ペン風の下線 */ );
> }
> ```
>
> **新規実装でこの流儀を真似する必要はない**（色を増やすたびにクラスが増える）。**が、既存ページに手を入れるときは「色＝クラス名」を前提にする。**

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・見出し・ナビ。**可視 43 要素 / 17 要素**。CSS 全文で **152 回**。**純黒ではない**
- **Text on Dark** (`#ffffff`): 黒面・カテゴリ面の上のテキスト（可視 69 / 55 要素）
- **Text Muted** (`#666666`): カレンダーのイベント名（可視 10 要素）
- **Text Disabled** (`#808080`): 分館リンク・寄付の案内（可視 3 要素）
- **Surface Gray** (`#f5f5f5`): 一覧カードの面。**可視 25 要素**。CSS 全文で **60 回**。このサイトで最も多い面色
- **Black（面）** (`#000000`): ボタン・タブの選択状態（可視 26 要素の塗り面）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample (12/12)`）

> `html` も `body` も `background-color` が `rgba(0,0,0,0)` で、**地色は最上位の `div` が持っている**。`body` に色を書かない実装なので、`body { background: ... }` で上書きしても効かない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans CJK JP**。ただし `font-family` 名は **`Noto Sans Japanese`**（Google Fonts の現行名 `Noto Sans JP` ではない）。**CDN ではなく自前ホスト**（`../font/NotoSansCJKjp-Regular.woff`）
- **約物専用**: **YakuHanJP**。`unicode-range` で約物だけに限定したサブセットフォントで、400 / 500 / 700 の3本
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **専用の欧文フォントを持たない。** 数字も欧文も `Noto Sans Japanese` の欧文グリフで組む
- 例外は動画プレイヤーのアイコンフォント `VideoJS`（`unloaded`）と、一部 UI の `Arial, Helvetica, sans-serif`（CSS 全文で 5 回）

### 3.3 font-family 指定

**CSS 全文で本文用の `font-family` はこの1行だけ**（`'YakuHanJP', 'Noto Sans Japanese', sans-serif` が1回）。`body` に書いて全体へ継承させている。

```css
/* 本文・見出し・ナビ・フッター すべて共通 */
font-family: "YakuHanJP", "Noto Sans Japanese", sans-serif;
```

**約物サブセットの仕組み**（実サイトの `@font-face` をそのまま）:

```css
@font-face {
  font-family: "YakuHanJP";
  font-style: normal;
  font-weight: 400;              /* 500 / 700 も同じ形で計3本 */
  font-display: block;
  src: url("../font/YakuHanJP-Regular.woff2") format("woff2"),
       url("../font/YakuHanJP-Regular.woff") format("woff");
  /* 約物だけに限定する。ここが肝 */
  unicode-range: U+3001-3002, U+3008-3011, U+3014-3015, U+30fb,
                 U+ff01, U+ff08-ff09, U+ff0c, U+ff0e, U+ff1a-ff1b,
                 U+ff1f, U+ff3b, U+ff3d, U+ff5b, U+ff5d;
}
```

- **スタックの先頭に置くのが必須。** `YakuHanJP` が約物（`、。「」（）・：；？！`）だけを担当し、それ以外の文字は自動的に2番目の `Noto Sans Japanese` に落ちる
- **`palt` を併用しない。** YakuHanJP は字形そのものが詰まっているので、`palt` を足すと二重に詰まって逆に窮屈になる

**和文フォントの `@font-face`（自前ホスト・実サイトのまま）**:

```css
@font-face {
  font-family: "Noto Sans Japanese";
  font-style: normal;
  font-weight: 400;
  src: url("../font/NotoSansCJKjp-Regular.eot?v=1.0.4");   /* IE9 Compat */
  src: local("Noto Sans CJK JP Regular"),
       url("../font/NotoSansCJKjp-Regular.eot?v=1.0.4#iefix") format("embedded-opentype"),
       url("../font/NotoSansCJKjp-Regular.woff?v=1.0.4") format("woff"),
       url("../font/NotoSansCJKjp-Regular.ttf?v=1.0.4") format("truetype");
}
```

> **`.eot` と `local()` が残っている＝IE 対応時代の実装がそのまま現役。** 新規実装では `.eot` / `.ttf` を落として `woff2` 1本でよい。**ただし `font-family` 名を `Noto Sans JP` に変えると、このサイトの CSS は全部当たらなくなる**（名前が宣言と一致しなくなるため）。名前は `Noto Sans Japanese` のまま扱う。

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|--------|-------------|----------------|------|
| **会期（日付）** | **42px** | **100** | 42px (1.00) | 3.36px (**0.08em**) | トップの展覧会カード 3 要素。**Thin で大きく組む** |
| **ページタイトル（下層 h1）** | **22px** | **200** | 22px (1.00) | 2.2px (**0.1em**) | `/exhibition/` の「展覧会」1 要素。色 `#a7b809` |
| **展覧会タイトル（h3）** | 20px | 400 | 42px (**2.10**) | normal | 18 要素。カテゴリ色 |
| **セクション見出し** | 16px | 700 | 16px (1.00) | 0.8px (0.05em) | 9 要素（「新着情報」「9月の休館情報」） |
| **小見出し / カードの題** | 15px | 700 | 22.5px (1.50) | 0.75px (0.05em) | 下層 12 要素 |
| **本文** | 15px | 400 | 25.95px (**1.73**) | normal | 下層のリード 7 要素 |
| **ナビゲーションのリンク** | 15px | 400 | 15px (1.00) | 3px (**0.2em**) | グローバルナビ。**最も大きく空ける** |
| **バッジ** | 13〜15px | 700 | 1.00 | normal | 「開催中」「次回」「企画展」 |
| **分館名・補助ラベル** | 12px | 400 | 13.2px (1.10) | 1.2px (**0.1em**) | 21 要素 |
| **フッターリンク** | 12px | 400 | — | -0.12px (**-0.01em**) | 7 要素。**負の字間** |
| **ロゴ・最小テキスト** | 10px | 400 / 700 | 10px (1.00) | normal | 5 要素 |
| **カレンダーの数字** | — | **900** | — | normal | 4 要素。**合成太字（下記）** |

### 3.5 行間・字間

**字間は `em` を各要素に当てる。** サイズが変わると px 値も比例して変わるので、`px` に読み替えて固定しないこと（42px → 3.36px、22px → 2.2px、12px → 1.2px は **すべて同じ `0.08em` / `0.1em` 系の宣言**）。

- **本文の字間**: **`normal`**。実測 **107 / 63 要素**で最多。**本文は詰めも空けもしない**（約物は YakuHanJP が詰めるので、`letter-spacing` に頼らない）
- **見出し・ラベルの字間**: `.03em` / `.05em` / `.08em` / `.1em` / `.2em`。CSS 全文では **`.05em` が 38 回で最多**、次いで `.03em` 13 回、`.1em` 8 回
- **負の字間がある**: `-.01em`（2回）/ `-.02em`（2回）/ `-.03em`（3回）/ `-.05em`（1回）。フッターの小さいリンクを詰めるために使う
- **本文の行間**: **1.73**（15px → 25.95px）。展覧会タイトルは **2.10**（20px → 42px）と極端に広い
- **単一行のラベルは `line-height: 1.00`**（実測 134 / 75 要素で最多）。**この 1.00 を「行間の既定値」と読み違えないこと**。折り返す文章には必ず 1.5 以上が当たっている

```css
/* 本文 */
letter-spacing: normal;
line-height: 1.73;

/* セクション見出し */
letter-spacing: .05em;
line-height: 1.5;

/* グローバルナビ */
letter-spacing: .2em;
```

### 3.6 禁則処理・改行ルール

- `word-break` / `line-break` の宣言は**無い**（ブラウザ既定のまま）
- 展覧会タイトルは HTML 側で改行位置を手で入れている（`スウェーデン・テキスタイル` ／ `暮らしと自然に息づく北欧デザイン` の2行）。**自動改行に任せず、タイトルは人が折る**

### 3.7 OpenType 機能

```css
/* このサイトは font-feature-settings を一切書かない */
```

- **`palt` は使わない**（CSS 全文で `font-feature-settings` の宣言 **0 件** / 実測 0 要素）
- **約物詰めは `YakuHanJP` が担当する。** `palt` を足すと二重に詰まるので、**このサイトの設計に合わせるなら書かない**

### 3.8 縦書き

使用しない（実測 `writing-mode: vertical-rl` の要素 **0 件**）。

### 3.9 ウェイトの落とし穴（重要）

**CSS が当てているウェイトと、実際に描画されるウェイトが一致しない。**

- **CSS で宣言されている `@font-face` は 100 / 200 / 300 / 400 / 500 / 700 / 900 の7本**（`NotoSansCJKjp-Thin` / `-Light` / `-DemiLight` / `-Regular` / `-Medium` / `-Bold` / `-Black`）
- **`document.fonts` に載るのは 100 / 200 / 400 / 700 の4本だけ**（実測）。**300 / 500 / 900 は実測で確認できなかった**
- **CSS は 500 を 15 回、900 を 2 回当てている。** 実測では **500 が 37 要素 / 900 が 4 要素**に付いている。**このウェイトは指定どおりに出ていない可能性が高い**（最近傍のウェイトへのフォールバック、またはブラウザの合成）

> **新規実装での扱い**: **100 / 200 / 400 / 700 の4本だけを使う。** 500 や 900 を当てると、意図した中間の太さにならない。太さの対比は **100（会期の日付）↔ 700（見出し）** の振れ幅でつける。これがこのサイトの見た目を決めている。

**さらに、読み込まれるウェイトはページごとに違う。** トップは 100 が `loaded` / 200 が `unloaded`、`/exhibition/` はその逆。**ページに実際に現れた字形しか読み込まれない**ので、「サイト全体で常に4本ある」とは考えないこと。

---

## 4. Component Stylings

### Buttons

**Primary（黒の面）**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #333333`（一部）/ `none`
- Border Radius: **`0px`**
- Font Size: 13〜15px
- Font Weight: 700
- Letter Spacing: `normal`

**Category Badge（真円）**
- Background: カテゴリ6色のいずれか（`#3e4eb8` / `#039788` / `#fed910` / `#d70000` / `#ec1561`）
- Text: `#ffffff`
- Border Radius: **`100%`**（`50%` ではなく `100%` と書かれている。描画結果は同じ）
- Font Size: 15px / Weight: 700
- 用途: 「開催中」「次回」

> **実サイトの黄色バッジ（`#fed910` の面に `#ffffff` の文字）はコントラスト比 1.39 で、事実上読めない**（実測。`interactive` の3番目）。**この組み合わせは複製しないこと。** 黄色を面に使うなら文字色を `#333333` にする（コントラスト比 11.1）。他の5色は白文字で AA を満たす。

**Back to Top**
- Background: `#ffffff` / Text: `#333333`
- Border Radius: `26px`

### Cards

- Background: **`#f5f5f5`**（可視 25 要素）
- Border: なし
- Border Radius: `0px`
- Shadow: なし
- 見出しは 15px / 700 / `letter-spacing: 0.45px`（= `.03em`）

### Inputs

- サイト内検索はヘッダーのアイコンから展開する。通常表示では露出していない
- ナビゲーションのトグルに `border-radius: 12%` が1要素ある（**このサイトで唯一の半端な角丸**）

---

## 5. Layout Principles

### Container

- **Max Width: `950px` 固定**（CSS 全文で `max-width: 950px` が **11 回**、実測でもトップ 12 要素 / 下層 5 要素）
- 補助的に `1280px`（3 要素）と `440px`（4 要素）
- **流体ではない。** `1878px` はフルブリードのヒーロー用

### Grid

- **`gap` を使っていない**（実測 `gaps: []`）。`float` / `margin` で組む世代の実装
- 展覧会カードは1カラムで縦に積む

### Spacing

- トークン化された余白スケールは無い（CSS 変数 0 個）
- ボタンの内側は `padding: 0` ＋ `line-height` で高さを作る（15px / `line-height: 15px`）

---

## 6. Depth & Elevation

**影はほぼ使わない。** 実測で `box-shadow` を持つ要素は **トップに 1 種 1 要素のみ**、下層は **0 種**。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。カード・ボタン・バッジすべてフラット** |
| 1 | `rgba(0, 0, 0, 0.2) -3px 3px 10px 0px` | 実測 1 要素のみ。**offset が `-3px 3px`（左下に落ちる）** |

> **影を足さないこと。** 面の区別は `#f5f5f5` と `#ffffff` の差でつけている。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`font-family` は `"YakuHanJP", "Noto Sans Japanese", sans-serif` の1本で通す。** 見出しだけ別書体にしない
- **`YakuHanJP` をスタックの先頭に置く。** 2番目以降だと約物が差し替わらない
- **本文の `letter-spacing` は `normal`。** 空けるのは見出し・ナビ・ラベルだけ
- **字間は `em` で書く**（`.03em` / `.05em` / `.1em` / `.2em`）。サイズが変われば追従させる
- **太さは 100 / 200 / 400 / 700 の4段で組む。** 極細（100・200）を大きなサイズに使うのがこのサイトの見せ場
- **本文の行間は 1.73、展覧会タイトルは 2.10**
- 色は **hex を直接書く**（CSS 変数を導入すると既存の `.color_xxxxxx` と二重管理になる）
- コンテナは **950px 固定**

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない。** YakuHanJP と二重に詰まる
- **`font-weight: 500` / `900` を当てない。** `@font-face` の実体が確認できず、意図した太さで出ない
- **`font-family` 名を `Noto Sans JP` に書き換えない。** 宣言名は `Noto Sans Japanese`
- **`line-height: 1.00` を本文に使わない。** 1.00 が実測で最多なのは単一行のラベルが多いからで、文章用の値ではない
- **角丸を足さない**（バッジの `100%` とトップ戻りの `26px` 以外は `0px`）
- **影を足さない**
- CSS Custom Properties を前提にしない（**0 個**）

---

## 8. Responsive Behavior

### Breakpoints

**メディアクエリがすべて `print, screen and (...)` で書かれている。** 美術館の展覧会情報は印刷される前提で、**印刷時にもデスクトップのレイアウトを当てている**。

| Name | Query | 実測（CSS 全文の出現） |
|------|-------|------|
| Mobile | `screen and (max-width: 600px)` | 3 回 |
| Mobile (narrow) | `screen and (min-width: 501px) and (max-width: 600px)` | 1 回 |
| Tablet | `print, screen and (min-width: 601px) and (max-width: 949px)` | 3 回 |
| Desktop (S) | `print, screen and (min-width: 950px) and (max-width: 1023px)` | 1 回 |
| Desktop (M) | `print, screen and (min-width: 1024px) and (max-width: 1279px)` | 1 回 |
| Desktop (L) | `print, screen and (min-width: 1280px)` | 1 回 |

- **境界は 600 / 950 / 1024 / 1280。** コンテナ幅 `950px` とブレークポイント `950px` が一致している
- 高解像度画像の出し分けに `(-webkit-min-device-pixel-ratio: 1.1), (min-resolution: 105dpi)` を使う

### ルートの縮小（重要）

**ブレークポイントを跨ぐと `html` の `font-size` そのものが変わる**（1章の表を参照）。1440px で `10px` → 834px で `8px` → 375px で `4.99999px`。

- **`rem` で書かれた値はすべて画面幅に追従する。** モバイルでは `1rem` が約半分になる
- **実測でもモバイルだけ別の値が当たる**: グローバルナビのリンクは 1440px で `15px / 400 / letter-spacing: 3px` だが、375px では **`16px / 500 / letter-spacing: 3.2px`** と、サイズも太さも変わる（`letter-spacing` は `.2em` のままなので px だけ追従）
- **1回の計測を「このサイトの文字サイズ」と書かないこと。** 幅ごとに測る

### タッチターゲット

- グローバルナビのリンクは 15px / `line-height: 15px` と小さい。**モバイルで流用するなら `padding` で 44px を確保する**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color:    #333333
Background:    #ffffff
Surface:       #f5f5f5
Category:      #3e4eb8 / #039788 / #fed910 / #d70000 / #ec1561 / #a7b809
Font:          "YakuHanJP", "Noto Sans Japanese", sans-serif
Root Size:     10px（デスクトップ）/ 8px（834px）/ 約5px（375px） ← 流体
Body Size:     15px（デスクトップ実測）
Line Height:   1.73
Letter Spacing: normal（本文）/ .05em（見出し）/ .2em（ナビ）
Weights:       100 / 200 / 400 / 700  ← この4段のみ
Container:     950px
Radius:        0（バッジのみ 100%）
Shadow:        なし
palt:          使わない
```

### プロンプト例

```
世田谷美術館のデザインシステムに従って、展覧会一覧のカードを作成してください。

- font-family は "YakuHanJP", "Noto Sans Japanese", sans-serif の1本だけを使う
  （YakuHanJP は unicode-range で約物限定のサブセット。必ずスタックの先頭に置く）
- font-feature-settings: "palt" は書かない（YakuHanJP と二重に詰まる）
- 会期の日付は 42px / font-weight: 100 / letter-spacing: .08em / line-height: 1
- 展覧会タイトルは 20px / font-weight: 400 / line-height: 2.1 / letter-spacing: normal
  文字色は展覧会ごとのカテゴリ色（#3e4eb8 など）
- 「開催中」バッジは カテゴリ色の面に白文字、border-radius: 100%、15px / 700
- カードの面は #f5f5f5、角丸なし、影なし
- 本文は 15px / 400 / line-height: 1.73 / letter-spacing: normal / 色 #333333
- font-weight は 100 / 200 / 400 / 700 だけを使う（500・900 は当てない）
- コンテナは max-width: 950px
```
