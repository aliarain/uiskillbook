# DESIGN.md — 塩野義製薬（SHIONOGI）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-28 / 対象: `https://www.shionogi.com/jp/ja/`, `https://www.shionogi.com/jp/ja/company/outline.html`

---

## 1. Visual Theme & Atmosphere

このサイトの核心は **4 つ**ある。

1. **宣言した Web フォントが 1 本も届いていない。** `@font-face` で `"Noto Sans JP"` の 400 / 700 を宣言し、ブラウザは実際に 4 ファイル（`NotoSansJP-Regular.woff` / `.ttf` / `NotoSansJP-Bold.woff` / `.ttf`）を取りに行くが、**4 本とも HTTP 404**。`document.fonts` は 2 件とも `status: "error"`。結果として本文は `font-family` スタックの 2 番目以降（メイリオ／`sans-serif`）で描画されている。両ページで同じ。
2. **字間を 1 箇所も触っていない。** `letter-spacing` は可視テキスト **148/148 要素（トップ）・72/72 要素（下層）が `normal`**。CSS には `.12em` と `-0.4em` の宣言が存在するが、可視要素には 1 つも当たっていない。
3. **行間だけはトークンが実装まで届いている。** `--line-height-heading: 1.4` / `--line-height-text: 1.8` / `--line-height-btn: 1.3` が、実測の行間比 1.40（75 要素）/ 1.80（43 要素）/ 1.30（19 要素）とそのまま一致する。色トークンの大半が可視 0 なのと対照的。
4. **角丸が 8 / 12 / 16 / 24 / 32px の 5 段 ＋ ピル（`1440px`）。** 製薬のコーポレートサイトとしては丸みが強い。影は `rgba(45,49,63,.1) 0 2px 12px` の 1 種だけ（26 要素）。

- **デザイン方針**: 白地・赤 1 色のアクセント・角丸カード。情報の硬さを丸みと余白でほぐす
- **密度**: 中。カード主体で、1 画面あたりの文字量は抑えめ
- **キーワード**: 清潔、親しみ、systematic（トークン設計はある）、ただし実装は宣言に追いついていない

---

## 2. Color Palette & Roles

実サイトの CSS Custom Properties は `:root` に **93 個**（うちプラットフォーム由来は Swiper の 1 個のみ、自社 92 個）。
**ただし大半は可視 0 要素**。以下は DOM 全走査で実際に描画を確認した値のみを「実装」として記す。

### Primary（ブランドカラー）

- **Primary** (`#D80C24`): `--main-color` / `--red-100` / `--txt-red` / `--gradient-red-end` の 4 つが同じ値。実測 文字 4 要素・面 7 要素
- **Primary Gradient** (`linear-gradient(#F24A51 0%, #D80C24 100%)`): 2 要素。開始色 `--gradient-red-start: #F24A51` は**単独では可視 0**（グラデーションの中でだけ生きている）

### Neutral（ニュートラル）

- **Text Primary** (`#2D313F`): `--txt-body` / `--txt-dark` / `--dark-100` の 3 名義。**実測 711 要素**で圧倒的に最多
- **Text Secondary** (`#92959E`): `--txt-grey`。実測 86 要素
- **Text Tertiary** (`#545863`): 実測 7 要素（ユーティリティナビ）
- **Border** (`#EEEEEF`): `--gray-5` / `--border-light` / `--border-base` の 3 名義。実測 11 要素
- **Border Strong** (`#D3D4D9`): `--dark-15`。実測 6 要素（ピル型ボタンの枠）
- **Background** (`#FFFFFF`): ページ背景。`pageBackground.resolved` は `viewportTopBySample (10/10)` で白
- **Surface Tint** (`#F8E2E5`): カテゴリ見出し帯。実測 24 要素。**変数になっていない直書き**
- **Surface Tint 2** (`#EFC3C8`): 同系のより濃い帯。4 要素
- **Surface Grey** (`#EFEFEF`): 32 要素
- **Link** (`#3F58B0`): `--txt-link` / `--blue-100`。**実測 1 要素だけ**

### 宣言はあるが使われていない（Don't に直結）

`:root` の色トークンのうち、**次はすべて 2 ページとも可視 0 要素**である。

- 緑系 5 色（`--green-100: #10AD6B` / `-90` / `-70` / `-65` / `-50`）
- 黄系 5 色（`--yellow-100: #FDC93A` / `-90` / `-78` / `-70` / `-65`）
- 水色系 5 色（`--cyan-100: #74D1F4` / `-90` / `-83` / `-75` / `-73`）
- 赤の薄い段（`--red-90` / `-70` / `-65` / `-50`）と青の薄い段（`--blue-90` / `-70` / `-65` / `-50`）
- グレー段（`--gray-100` / `-65` / `-20` / `-15` / `-2`）、`--dark-65` / `-20` / `-5`
- `--txt-disabled: #C2C4CC`、`--border-dark: #C7C7C9`

**色ランプは「設計の厚み」であって実装ではない。** 実際に描く色は上の 10 色ほどに収束している。

### 壊れているトークン（そのまま写さない）

- `--font-size-base: 16rem` — ルートが 10px なので **160px**。明らかに `1.6rem` の書き誤りで、どこからも参照されていない（`body` は `font-size: 1.6rem` を直書き）
- `--btn-arw-padding: calc(* 2 + )` — `--btn-padding-x` / `--btn-padding-y` / `--btn-min-width` / `--btn-arw-pos` / `--btn-arw-img` / `--btn-arw-img-w` / `--btn-arw-img-hover` が**すべて空文字**のまま `calc()` に流し込まれ、構文として無効な式になっている。ボタンの実寸はこの変数とは無関係に決まっている

---

## 3. Typography Rules

### 3.1 和文フォント

- **宣言**: `"Noto Sans JP"`（自社ホストの `@font-face`、400 / 700 の 2 本）
- **実装**: **読み込みに失敗している。** フォントファイルの要求は 4 件発生するが全部 `HTTP 404`、`document.fonts` は `error`。実際に組まれているのはスタック 2 番目以降の **メイリオ（Windows）/ `sans-serif`（macOS ではヒラギノ角ゴシック）**
- 再現するときは **Noto Sans JP を正しく読み込む**こと。それが意図された設計であり、404 は不具合である

### 3.2 欧文フォント

- 専用の欧文フォントは無い。`--font-family-en: Arial, Helvetica, sans-serif` が宣言されているが、セクション見出しの欧文（`Pickup` / `Media` / `Innovation` / `Sustainability`、37px / weight 600）も和文と同じスタックで組まれている
- 多言語用に `--font-family-tw`（`"Noto Sans TC", "Microsoft JhengHei", …`）/ `--font-family-cn`（`"Noto Sans SC", "PingFang SC", …`）も宣言されている。日本語ページでは未使用

### 3.3 font-family 指定

```css
/* 実サイトの body */
body {
  color: #2d313f;
  font-family: "Noto Sans JP", "メイリオ", sans-serif;
  font-size: 1.6rem; /* ルートが 62.5% = 10px なので 16px */
}

/* :root の宣言（body からは参照されていない） */
--font-family-jp: "Noto Sans JP", "Hiragino Kaku Gothic Pro", "Meiryo", "MS PGothic", sans-serif;
```

- **実サイトのスタックは 3 つしかなく、ヒラギノを明示していない。** `--font-family-jp` の方にはヒラギノが入っているのに、`body` は使っていない。macOS では `sans-serif` 経由で結果的にヒラギノに落ちるが、**意図して指定した形にはなっていない**
- 正しくは `font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif;` のように受け皿を明示する

### 3.4 文字サイズ・ウェイト階層

ルートは `html { font-size: 62.5% }` ＝ **10px 固定**。1440 / 1200 / 1024 / 834 / 768 / 767 / 375px の **7 幅すべてで 10px から動かない**（流体なし・`clamp()` なし。CSS の `font-size` 宣言は rem 155 / px 101 / % 4）。

| 用途 | size | weight | line-height | 実測件数（トップ） |
|---|---|---|---|---|
| セクション見出し（欧文） | 37px | 600 | 1.30 | 4 |
| カテゴリ見出し | 26px | 600 | 1.40 | 5 |
| カード見出し | 21px | 600 | 1.40 | 5 |
| 本文・ナビ | 16px | 400 | 1.80 | 96 |
| 補助テキスト | 14px | 400 | 1.40 | 14 |
| ユーティリティ・日付 | 12px | 400 | 1.00 | 12 |
| バッジ（プレスリリース等） | 10px | 400 | 1.80 | 5 |

- **ウェイトは 400 / 600 の 2 段**（トップ: 400 ×90、600 ×55）。700 はトップでは 3 要素しかなく、そのすべてが CMP（`Japan` / `Cookie設定` / `OK`）。下層ページでは見出しに 700 を使っている（10 要素）
- **宣言した `@font-face` は 400 と 700 の 2 本だけで、600 は存在しない。** しかも 2 本とも 404 なので、600 は OS ローカル書体の中から解決される。メイリオは Regular / Bold の 2 本なので **600 は Regular で出る**（太らない）。ヒラギノ角ゴ ProN も W3 / W6 の 2 本で、600 は W6 に当たる。**閲覧環境で見え方が割れる**
- 再現するときは **400 / 700 の 2 段に寄せる**か、Noto Sans JP の可変フォントで 600 を実際に用意する

### 3.5 行間・字間

- **行間は無単位の比率で宣言されており、トークンと実装が一致している**。そのまま使ってよい

| トークン | 値 | 実測 |
|---|---|---|
| `--line-height-text` | 1.8 | 1.80 ×43（本文 16px → 28.8px） |
| `--line-height-heading` | 1.4 | 1.40 ×75 |
| `--line-height-btn` | 1.3 | 1.30 ×19 |
| `--line-height-table-cell` | 1.4 | （下層の定義表） |

- **字間は全面的に `normal`。** 可視テキスト 148/148（トップ）・72/72（下層）。**`letter-spacing` を足さないこと**が、このサイトを再現する条件になる
- CSS 内には `letter-spacing: .12em` と `letter-spacing: -0.4em` が書かれているが、**可視要素には 1 つも当たっていない**（`-0.4em` は `display: inline-block` を横並びさせるときの空白除去の常套手段で、タイポグラフィの指定ではない）

### 3.6 禁則処理・改行ルール

- `body` の `word-break` は **`normal`**（既定）。日本語の禁則処理はブラウザ任せ
- CSS には `word-break: keep-all` / `break-all` / `break-word` の 3 種が部分的に存在する
- `word-break: auto-phrase` は使っていない

### 3.7 OpenType 機能

- **`font-feature-settings` の宣言は CSS 全文で 0 件**、実測も 0 要素。`palt` も `halt` も使っていない
- 同じページで隠し要素を使って実測したところ、`「日本語」、約物。（テスト）` の幅は `normal` 520px → `palt` 423px（**18.6% 縮む**）だった。**詰める余地はあるのに使っていない**という状態
- 約物を詰めたいなら `palt` を足す判断はありうるが、**このサイトの再現としては「詰めない」が正**

### 3.8 縦書き

- `writing-mode: vertical-rl` は **0 要素**。縦組みは使っていない

---

## 4. Component Stylings

### Buttons

実装されているボタンは 3 系統。

```css
/* 1. ピル型・白地（カテゴリ導線） */
.btn-pill {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;           /* 20.8px */
  color: #2D313F;
  background: #FFFFFF;
  border: 1px solid #D3D4D9;
  border-radius: 1440px;      /* 実サイトの値。9999px と同義 */
  letter-spacing: normal;
}

/* 2. ピル型・枠のみ（下層の小ナビ） */
.btn-pill-sm {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;           /* 18.2px */
  color: #2D313F;
  background: transparent;
  border: 1px solid #EEEEEF;
  border-radius: 1440px;
}

/* 3. テキストリンク（カード内） */
.link-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;           /* 28.8px */
  color: #1764D8;
  background: transparent;
}
```

- **面で塗った CTA が存在しない。** 赤 `#D80C24` は見出しの文字色・バッジ・グラデーション帯に使われるが、ボタンの地色には使っていない
- `border-radius: 1440px` は実サイトの記述そのまま。ピル形状の意図

### Badges / Chips

```css
.badge {
  font-size: 10px;
  font-weight: 400;
  line-height: 1.8;           /* 18px */
  color: #FFFFFF;
  border-radius: 1440px;
  padding: 0 12px;
}
.badge--press  { background: #D80C24; }  /* プレスリリース */
.badge--notice { background: #3F58B0; }  /* お知らせ */
```

- 10px は小さい。**アクセシビリティ上は 12px 以上に上げる**ことを推奨する（実サイトはこうだが、正しくは 12px）

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 8px;                            /* 実測 33 要素 */
  box-shadow: 0 2px 12px rgba(45, 49, 63, 0.1);  /* --box-shadow-sm・実測 26 要素 */
}
.card--image-top { border-radius: 8px 8px 0 0; } /* 実測 52 要素 */
.card--large     { border-radius: 24px; }        /* 実測 12 要素 */
```

### カテゴリ見出し帯

```css
.cat-heading {
  background: #F8E2E5;   /* 実測 24 要素 */
  color: #2D313F;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;      /* 19.2px */
}
.cat-heading--strong { background: #EFC3C8; }  /* 実測 4 要素 */
```

---

## 5. Layout Principles

### Spacing Scale

- `--grid-gutter: 16px`
- 余白のトークンは `--grid-gutter` の 1 つだけ。あとは実値運用

### Container

- ページ背景は白。**下層ページの背景だけハードストップのグラデーションで作っている**:
  `linear-gradient(#FFFFFF 0px, #FFFFFF 140px, #F5F5F5 140px, #F5F5F5 100%)`
  （ヘッダー下 140px までを白、それ以降を `#F5F5F5` に塗り分ける。2 要素を重ねる代わりに 1 枚のグラデーションで段差を作っている）

### Grid

- トップはカード 3〜4 列のグリッド ＋ 横スクロールのカルーセル（Swiper）
- `--breakpoint-xs: 0` / `-sm: 576px` / `-md: 768px` / `-lg: 992px` / `-xl: 1200px` が宣言されている（Bootstrap のブレークポイント名をそのまま踏襲）。**ただし実測で文字サイズが切り替わるのは 768/767px の 1 箇所だけ**

### Border Radius

| トークン | 値 |
|---|---|
| `--border-radius-xs` | 8px |
| `--border-radius-sm` | 12px |
| `--border-radius-md` | 16px |
| `--border-radius-lg` | 24px |
| `--border-radius-xl` | 32px |
| （直書き） | `1440px`（ピル）・`100%`（円） |

---

## 6. Depth & Elevation

- **影は実質 1 種類**: `--box-shadow-sm: 0 2px 12px rgba(45, 49, 63, .1)`（実測 26 要素）
- 影の色は黒ではなく**本文色 `#2D313F` の 10%**。黒に丸めないこと
- `rgba(0,0,0,0) 0 0 0 0`（透明な影）が 7 要素あるが、これはホバー時の遷移元として置かれているもの
- カードは影 ＋ 角丸 8px、ボタンは影なし ＋ 1px の枠線、という使い分け

---

## 7. Do's and Don'ts

### Do（推奨）

- **`letter-spacing` は `normal` のまま触らない。** 可視 148/148 要素が `normal`。このサイトらしさの中心
- **行間は無単位の比率で、本文 1.8 / 見出し 1.4 / ボタン 1.3** の 3 段に揃える
- **ルートは `font-size: 62.5%`（10px）固定**にして、以降は `rem` で書く。7 幅すべてで固定であり、流体にしない
- **本文色は `#2D313F`**。純黒（`#000000`）を使わない
- 角丸は 8 / 12 / 16 / 24 / 32px とピル（`9999px`）から選ぶ
- 影は `0 2px 12px rgba(45, 49, 63, .1)` の 1 種だけ
- 赤 `#D80C24` は**文字・バッジ・細い帯**に使う。広い面を赤で塗らない

### Don't（禁止）

- **`--font-size-base: 16rem` を実装に使わない。** ルート 10px では 160px になる書き誤り
- **`--btn-arw-padding: calc(* 2 + )` を写さない。** 空変数から合成された無効な式
- **緑・黄・水色のランプ（計 15 色）と、赤・青・グレーの薄い段を「使える色」として扱わない。** 2 ページとも可視 0 要素
- **`font-weight: 600` を前提にしない。** 宣言された `@font-face` は 400 / 700 の 2 本だけで 600 が無く、しかもその 2 本が読み込みに失敗している。閲覧環境のローカル書体しだいで太らない
- **フォントファイルの 404 を再現しない。** `"Noto Sans JP"` を宣言するなら実際に届く場所に置く
- **`letter-spacing: -0.4em` を文字詰めとして使わない。** インラインブロック間の空白を消すためのハックであり、タイポグラフィの指定ではない
- **ヒーローの大見出しを Web フォントで実装しない。** 実サイトのヒーローのコピー（「SHIONOGIは いま、まさに 立ち向かっている。」）は **1440×480px の JPG（`cm2024_top.jpg`）に焼き込まれた画像**で、DOM 上に該当するテキストは 0 要素。ページ内で最大の実テキストは 37px のセクション見出し
- `font-family` の受け皿にヒラギノを書き落とさない（実サイトは `"Noto Sans JP", "メイリオ", sans-serif` の 3 つだけ）

---

## 8. Responsive Behavior

### Breakpoints

宣言されているトークン: `--breakpoint-sm: 576px` / `-md: 768px` / `-lg: 992px` / `-xl: 1200px`

実測で描画が変わるのは **768 / 767px の 1 箇所だけ**（1440 / 1200 / 1024 / 834 / 768px は完全に同一）。

| | ≥768px | ≤767px |
|---|---|---|
| `html` | 10px | 10px（不変） |
| `body` | 16px | 16px（不変） |
| `p` | 18px / 32.4px | 16px / 28.8px |
| `h3` | 16px / 22.4px | 14px / 19.6px |
| `h1` | 18px / 32.4px | 18px（不変） |
| `h2` | 21px / 29.4px | 21px（不変） |

- **ルートも body も動かない。**変わるのは個別要素だけ。流体（`vw` / `clamp()`）は 1 箇所も使っていない

### タッチターゲット

- ピル型ボタンは 16px / line-height 1.3 ＋ 上下パディングで 40px 前後。10px のバッジはリンクではなくラベル

### フォントサイズの調整

- モバイルで本文が 18px → 16px に下がる。**行間比 1.8 は維持される**（32.4px → 28.8px）ので、比率で書いておけば自動的に追従する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体    : "Noto Sans JP", "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif
          （実サイトは Noto Sans JP を 404 で取りこぼしているので、必ず届く形で読み込む）
ルート  : html { font-size: 62.5% }  → 10px 固定・全幅で不変
本文    : 16px / line-height 1.8 / letter-spacing normal / #2D313F
見出し  : 21〜37px / weight 600 / line-height 1.4 / letter-spacing normal
字間    : 全要素 normal（触らない）
ウェイト: 400 と 700 の 2 段に寄せる（600 は書体側に実体が無い）
主色    : #D80C24（文字・バッジ・細帯に。面塗りはしない）
文字色  : #2D313F / 補助 #92959E / リンク #3F58B0
罫線    : #EEEEEF（通常）/ #D3D4D9（ボタン枠）
面      : #FFFFFF / 淡赤 #F8E2E5 / グレー #EFEFEF
角丸    : 8 / 12 / 16 / 24 / 32px ＋ ピル 9999px
影      : 0 2px 12px rgba(45, 49, 63, .1) の 1 種のみ
OpenType: 使わない（palt / halt ともに 0 件）
縦組み  : 使わない
```

### プロンプト例

> 塩野義製薬のコーポレートサイト風に、製品紹介のカードセクションを作ってください。
> 書体は Noto Sans JP、ルートは 62.5%（10px）固定で rem 指定。本文 16px / 行間 1.8、
> **letter-spacing は全要素 normal のまま触らないでください**。
> 見出しは 21px / weight 600 / 行間 1.4。カードは背景白・角丸 8px・
> 影 `0 2px 12px rgba(45,49,63,.1)`。文字色は `#2D313F`、補助テキストは `#92959E`。
> アクセントの赤 `#D80C24` はバッジと見出しの文字にだけ使い、面は塗らないでください。
> ボタンはピル型（`border-radius: 9999px`）で、白地 ＋ `1px solid #D3D4D9` の枠線、
> weight 600。`font-feature-settings` は指定しないでください。
