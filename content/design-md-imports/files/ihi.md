# DESIGN.md — IHI（株式会社IHI）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-19 / 対象: `https://www.ihi.co.jp/`, `https://www.ihi.co.jp/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 重工業のコーポレートサイト。白地に **`#1E52A6` の青一色**で、角丸は 3〜6px と控えめ。面で区切らず **罫線で区切る**（しかもその罫線を `box-shadow` の inset で引いている）
- **密度**: 高い。グローバルナビに 6 階層、下層はリンクリストが主体。本文は `line-height: 1.8` でゆったり組む
- **キーワード**: 10px ルート、`%` でサイズを書く、inset の下線、青一色、palt を使わない

**このサイトの核心は4つある。**

1. **`html { font-size: 0.625em }` で 10px、`body` に `font-size` を一切書かない。** だから `body` も 10px のまま。サイズは全部 **`%`**（`170%` = 17px）で書く。CSS 全文で `font-size: <数値>%` が **155 箇所**。7 つの幅（1440 / 1200 / 1024 / 834 / 768 / 767 / 375px）で測っても `html` も `body` も **1px も動かない**
2. **`letter-spacing: 0.04em` は `body` に 1 回だけ書いてある。しかし `body` が 10px なので、子へ降りるのは `0.4px` という絶対値。** 実測 216 要素中 **214 要素が `0.4px`**。17px の本文では実効 **0.024em** で、見た目はほとんど字間ゼロ。**「0.04em のサイト」ではない**
3. **`font-feature-settings` の実測は 0 件。** CSS には `.feature-palt` / `.feature-halt` というユーティリティクラスがちゃんと定義されているのに、**トップ・下層とも 1 要素も使っていない**。約物は詰めない
4. **CSS Custom Properties は 2 個だけ**（`--pc-height: 400px` / `--sp-height: 240px`）。色もサイズも余白も変数化されていない。**デザイントークンは存在しない**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **IHI ブルー** | **`#1E52A6`** | **文字色 27 要素 / 面 30 要素**（トップ）。グローバルナビの「〜TOP」リンク、CTA ボタンの面、下層の大見出し（h2 46px / 36px）、アイコンの円 |
| **Pale Blue** | `#B3C5E3` | 見出し下の罫線の「薄いほう」。後述のハードストップ・グラデーションで `#1E52A6` と組にして使う |
| **Blue Tint** | `#D7E4F7` | 面（可視 5 要素）。タグ・選択状態の淡い背景 |

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・見出し・ナビ。**可視 129 要素（トップ）/ 123 要素（下層）で最多**。純黒は使わない
- **Text on Dark** (`#ffffff`): ヒーローの大見出し、青面上のテキスト（可視 40 要素）
- **Text Muted** (`#707070`): 日付、カテゴリラベル（可視 12 要素）
- **Border / Divider** (`#dddddd`): 後述のとおり `box-shadow` で引く
- **Surface Gray** (`#f5f5f5`): カードの面（可視 7 要素）
- **Surface Blue-Gray** (`#f2f4f8`): 地域切替パネルの面
- **Gray Badge** (`#9f9f9f` / `#767676`): 「English」「その他」などの小さなバッジ（各 3 要素）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`）

> **計測に Cookiebot が混ざる。この 5 色は IHI の色ではない。**
> `#141414`（CMP の本文）、`#1032CF`（`許可する` ボタン）、`#2A4EEF`（CMP のリンク）、面の `#F4F4F4`（**97 要素**）と `#D6D6D6`（30 要素）は、すべて同意バナーの Cookie 一覧表。
> `uniqueBackgrounds` の 1 位・2 位がこれなので、**上位の色をそのまま拾うと間違える**。`border-radius: 3.75px` と `font-weight: 600` も CMP 由来で、サイト本体には存在しない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一の本文書体）**: **Noto Sans JP**（Google Fonts / 300・400・500・700 の 4 ウェイト）。実測 212 要素（トップ）/ 143 要素（下層）
- **明朝体**: **Noto Serif JP 300**。ただし**トップページの 2 要素だけ**（`持続可能であるために` の 54px 見出し）。下層ページではフォント要求が 0 件で、1 要素も使われない
- OS ローカルの游ゴシック・ヒラギノはフォールバックとしてのみチェーンに入る

### 3.2 欧文フォント

- **専用の欧文フォントは実質ない。** `Lato`（300/400/700/900）が Google Fonts の URL に書かれているが、**フォント要求は両ページとも 0 件**。1 バイトも読み込まれていない
- 数字・アルファベットは Noto Sans JP の欧文グリフで出る
- **`icomoon.ttf`** を自前配信（アイコンフォント）

### 3.3 font-family 指定

```css
/* 本文・UI（唯一のスタック） */
font-family: "Noto Sans JP",
             "Yu Gothic Medium", "游ゴシック Medium",   /* ★Windows を Medium に当てる */
             YuGothic, 游ゴシック体,                      /* macOS / Windows の Regular */
             "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
             メイリオ, Meiryo, sans-serif;
```

**游ゴシック問題の解き方は「スタック順」。** `@font-face` による別名定義も上書きも使わず、**Medium を Regular より前に置く**ことで Windows に Medium を当てている（東京オペラシティ アートギャラリーと同じ流儀）。
ただし先頭が Web フォントの Noto Sans JP なので、**通常は游ゴシックまで到達しない**。これは Web フォントが落ちたときの受け皿として機能する。

### 3.4 文字サイズ・ウェイト階層

**基準は `html` の 10px。CSS には `%` で書く**（`170%` → 17px）。以下は 1440px 幅での実測値。

| Role | Size | `%` 表記 | Weight | Line Height | 色 | 備考 |
|------|------|----------|--------|-------------|-----|------|
| Hero Title | **61px** | 610% | 700 | 1.3 | `#ffffff` | トップのヒーロー。実テキスト |
| Hero Sub | **54px** | 540% | **300** | **1.0** | `#ffffff` | サイト内で 300 を使う唯一の場所 |
| Page Title | **52px** | 520% | 500 | 1.5 | `#ffffff` | 下層のページ見出し |
| Section H2 | **46px** | 460% | 700 | 1.8 | `#1E52A6` | 下層の大見出し |
| Section H2 (sub) | **36px** | 360% | 500 | 1.8 | `#1E52A6` | |
| Lead | **38px** | 380% | 500 | 1.2 | `#333333` | リード文 |
| Heading 3 | **28px** | 280% | 700 | 1.1 | `#333333` | |
| Nav / Card Title | **20px** | 200% | 500 | 1.3 | `#333333` | 「〜TOP」リンク |
| **Body** | **17px** | **170%** | 400 | **1.8** | `#333333` | 本文・ナビ項目（**可視 106 要素で最多**）|
| Caption | **14px** | 140% | 400 | 1.8 | `#333333` | |
| Label | **13px** | 130% | 400 | 1.0 | `#333333` | 「採用情報」「Global」 |
| Small | **12px** | 120% | 400 | 1.1 | `#333333` | 「English」バッジ（可視 58 要素）|
| Copyright | **11px** | 110% | 400 | — | `#333333` | |

**ウェイトは 300 / 400 / 500 / 700 の 4 段。`@font-face` もこの 4 本しかない。**
ナビと見出しの既定は **500**（可視 80 要素）で、400（98 要素）より多い。
**600 を指定しないこと** — `@font-face` に無いので合成太字になる（実測で 600 が出るのは Cookiebot だけ）。

### 3.5 行間・字間

```css
/* body に 1 回だけ。これが全ページの基礎 */
body {
  font-size: /* 宣言なし → html の 10px がそのまま */;
  letter-spacing: 0.04em;   /* ★10px に対する 0.04em = 0.4px が絶対値で全子孫へ降りる */
  line-height: 1.8;         /* ★無単位。各要素が自分のサイズで再計算する */
  color: #333;
  background-color: #fff;
}
```

**同じ 1 ブロックの中で、字間と行間が正反対に継承される。**

- **`letter-spacing: 0.04em` は 10px に対して計算され、`0.4px` という絶対値になって降りる。** 可視 216 要素中 **214 要素が `0.4px`**。17px の本文では **0.024em**、61px のヒーローでは **0.0066em**。**大きい文字ほど字間が無くなる**
- **`line-height: 1.8` は無単位なので、各要素が自分の `font-size` で掛け直す。** 17px → 30.6px、14px → 25.2px と正しく追従する

**行間の使い分け**（実測の比率分布）:

| 比率 | 要素数 | 用途 |
|------|--------|------|
| **1.8** | 54 | 本文（body 既定） |
| **1.3** | 46 | カードタイトル、ナビ項目 |
| **1.1** | 61 | 小さいラベル・バッジ |
| **1.0** | 27 | 1 行で収まる UI 要素 |
| 1.7 / 1.6 / 1.5 / 1.2 | 計 25 | 個別指定 |

`line-height: calc(60 / 1200 * 100vw)` という流体の行送りが 1 箇所だけある（見出しの装飾用）。

### 3.6 禁則処理・改行ルール

- `word-break` / `overflow-wrap` / `line-break` の宣言は **`body` に無い**（`normal` のまま）。ブラウザ既定の日本語禁則に任せている
- `word-break: auto-phrase` も使っていない

### 3.7 OpenType 機能

**実測 0 件。このサイトは約物を詰めない。**

```css
/* CSS には定義されているが、どのページでも 1 要素も使われていない */
.feature-palt { font-feature-settings: 'palt' 1; }
.feature-halt { font-feature-settings: 'halt' 1; }
```

**ユーティリティクラスとして用意だけされて、適用がゼロ。** 再現するときも `palt` を足さないこと（足すと全体の字面が変わる）。
`YakuHanJP` のような約物サブセットフォントも使っていない。

### 3.8 縦書き

**該当なし。** `writing-mode: vertical-*` の実測は 0 件。

### 3.9 ヒーローは「和文＝テキスト、欧文＝SVG画像」

トップのヒーローは **`ihi_mv.mp4`（1440×640）の動画**の上に文字を重ねる。

- **和文の大見出し**「世界中の人々の安心・安全、豊かな暮らしを根幹から支える」は **実テキスト**（h1 / 61px / 700 / `#ffffff`）
- **欧文のサブコピー**「For Industry & National Security」は **`index_main-visual-text_2026_img.svg`（680×46）の画像**。等幅のように字間が開いて見えるのはそのため

**欧文側を Web フォントで再現しようとしないこと。** `distributions.fontFamily` に該当する欧文書体が 1 要素も出ないのが証拠。

---

## 4. Component Stylings

### Buttons

```css
/* Primary（青ベタ） */
.btn-primary {
  background: #1E52A6;
  color: #ffffff;
  font-size: 140%;          /* 14px */
  font-weight: 500;
  letter-spacing: 0.4px;    /* body からの継承。宣言しない */
  border-radius: 4px;
  padding: 16px 18px;
  border: 0;
}

/* Secondary（白地に青枠） */
.btn-secondary {
  background: #ffffff;
  color: #1E52A6;
  font-size: 170%;          /* 17px */
  font-weight: 500;
  letter-spacing: 0.68px;   /* ★ここだけ 0.04em を再宣言している（17px × 0.04）*/
  border: 1px solid #1E52A6;
  border-radius: 4px;
  padding: 17px 30px;
}

/* 小さいバッジ */
.badge { background: #1E52A6; color: #fff; border-radius: 3px; padding: 5px 7px 4px; font-size: 140%; }
.badge--gray { background: #9f9f9f; }   /* English */
.badge--mid  { background: #767676; }   /* その他 */
.badge--cyan { background: #399FC4; }
```

- **角丸は 4px が標準**（可視 9 要素）、バッジは 3px、地域切替パネルだけ 6px、アイコンの円は `50%`（11 要素）
- **`border-radius: 3.75px` は Cookiebot のボタン。採用しない**

### Cards

```css
.card {
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 20px 42px 20px 18px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 0 8px 0;   /* 可視 6 要素 */
}
```

### Inputs

- `font-size: 170%`（17px） / `color: #333333` / 既定のまま。独自の枠線色は持たない

---

## 5. Layout Principles

### ルートの決め方（このサイトの最大の特徴）

```css
html { font-size: 0.625em; }   /* = 10px。7 幅すべてで固定 */
/* body に font-size の宣言が無いので、body も 10px */
```

**すべてのサイズを `%` で書く。** `170%` = 17px、`460%` = 46px。
`rem` も `clamp()` も `vw` も（1 箇所の `line-height` を除いて）使わない。

**この設計の利点と落とし穴**:
- 利点: 10px 基準なので `%` の数値がそのまま px として読める（`170%` → 17px）
- 落とし穴: **`body` が 10px なので、`em` で書いた値はすべて 10px 基準で計算されてしまう。** 実際 `letter-spacing: 0.04em` がこれで `0.4px` に固定された（3.5 節）

### Container

- 中央寄せの固定幅コンテナ。`max-width` の変数は無い（ハードコード）
- 変数は `--pc-height: 400px` / `--sp-height: 240px` の 2 つだけで、これはヒーロー画像の高さ

---

## 6. Depth & Elevation

**このサイトの影は「罫線」である。**

```css
/* 可視 43 要素（両ページとも同数）。リンクリストの区切り線 */
box-shadow: rgb(221, 221, 221) 0 -1px 0 0 inset;

/* カードの浮き。可視 6 要素（トップのみ） */
box-shadow: rgba(0, 0, 0, 0.16) 0 0 8px 0;
```

**`border-bottom` ではなく `inset` の `box-shadow` で下線を引いている。** 影は実質この 2 種類だけ。
（`rgba(0,0,0,0.3) 0 30px 70px 0` は Cookiebot のモーダル。採用しない）

### 見出しの下線は「ハードストップのグラデーション」

```css
/* 左 50px だけ濃い青、そこから先は淡い青。可視 2 要素 */
background: linear-gradient(90deg, #1E52A6 50px, #B3C5E3 50px);
```

2 色を同じ停止位置に置いて段差を作る手口。**`border-bottom` を 2 本並べるのではなく 1 枚のグラデーションで済ませている。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html { font-size: 0.625em }` で 10px に落とし、サイズは `%` で書く**（`170%` = 17px）
- **`letter-spacing` は `body` に 1 回だけ書く。** ただし下の Don't も読むこと
- **`line-height: 1.8` を `body` に無単位で書く。** 見出しは 1.1〜1.3 に個別で落とす
- **ウェイトは 300 / 400 / 500 / 700 の 4 段で組む。** ナビと見出しの既定は **500**
- **区切り線は `box-shadow: #dddddd 0 -1px 0 0 inset`** で引く
- **青は `#1E52A6` ひとつ。** 文字色は `#333333`、純黒は使わない
- 見出しの下線は `linear-gradient(90deg, #1E52A6 50px, #B3C5E3 50px)`

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない。** 実測 0 件。`.feature-palt` が定義されていても使われていない
- **`letter-spacing` を「0.04em のサイト」として再現しない。** `body` が 10px なので実際に効いているのは **`0.4px`**（17px の本文で 0.024em）。子要素に `0.04em` を配ると**文字サイズに比例して広がってしまい、別物になる**
- **`font-weight: 600` を使わない。** `@font-face` に無く合成太字になる（600 が出るのは Cookiebot だけ）
- **`Lato` を読み込まない。** Google Fonts の URL には入っているが、実際のフォント要求は 0 件。使っていない
- **Noto Serif JP を本文や下層に広げない。** 使われているのはトップの 2 要素のみ
- **ヒーローの欧文コピーを Web フォントで組まない。** 実体は SVG 画像
- **CSS 変数を設計トークンとして期待しない。** 2 個しかなく、どちらも画像の高さ
- **`border-radius` を 8px 以上にしない。** サイト本体は 3〜6px（8px は CMP）

---

## 8. Responsive Behavior

### Breakpoints

**`768px` / `767px` の 1 箇所だけ。** 7 幅で測った結果、`html`（10px）と `body`（10px / lh 18px / ls 0.4px）は **全幅で完全固定**。変わるのは見出しだけ。

| 要素 | ≧768px | ≦767px |
|------|--------|--------|
| h1（セクション） | 17px / lh 30.6px | **14px** / lh 25.2px |
| h2（セクション） | 17px / lh 30.6px | **12px** / lh 21.6px |
| h3（ヒーロー） | 54px / lh 54px | **38px** / lh 43.7px |
| 本文 p | 17px | 17px（変わらない） |

**本文のサイズはモバイルでも 17px のまま。** 834px でも 375px でも同じ。

### タッチターゲット

- CTA ボタンの padding は `16px 18px`（高さ約 46px）。`17px 30px` の二次ボタンで約 55px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体:     Noto Sans JP のみ（300/400/500/700）。明朝は使わない
ルート:   html 10px（0.625em）/ body も 10px。サイズは % で書く（170% = 17px）
本文:     17px / line-height 1.8 / letter-spacing 0.4px（継承）/ #333333
見出し:   46px·700·#1E52A6（下層）、61px·700·#fff（ヒーロー）、28px·700（小）
ブランド: #1E52A6 一色。リンクも CTA もこれ
字詰め:   palt を使わない（実測 0 件）
角丸:     4px（バッジ 3px、円 50%）
影:       #dddddd 0 -1px 0 0 inset（罫線代わり・43 要素）
          rgba(0,0,0,.16) 0 0 8px（カード）
変数:     使わない（実サイトは 2 個のみ）
BP:       768 / 767 の 1 箇所。本文サイズは変えない
```

### プロンプト例

```
IHI（www.ihi.co.jp）の DESIGN.md に従って、製品一覧ページを作ってください。

- html に font-size: 0.625em（10px）を置き、body には font-size を書かない
- フォントサイズは % で指定する（本文 170%、見出し 280%）
- body に letter-spacing: 0.04em と line-height: 1.8 を 1 回だけ書く
  （字間は 0.4px の絶対値として降りる。子要素で em を再宣言しない）
- font-feature-settings は書かない
- リストの区切りは box-shadow: #dddddd 0 -1px 0 0 inset
- 書体は Noto Sans JP、ウェイトは 400 と 500 だけ。600 は使わない
- 文字色 #333333、ブランド色 #1E52A6、角丸 4px
```

---

## 10. 計測メモ（再現時の注意）

- **可視テキスト要素はトップ 216 / 下層 150。** Cookiebot が画面下部を覆うため、`interactive` の最上位スコア（`#1032CF` の `許可する`）と `uniqueBackgrounds` の 1〜2 位（`#F4F4F4` 97 要素 / `#D6D6D6` 30 要素）は**全部 CMP**
- **`computedStyles` の `p` / `a` / `span` / `li` / `button` / `input` / `label` のうち、色が `rgb(20,20,20)`・字間が `0.1px` のものは Cookiebot**。サイト本体は `#333333` / `0.4px`
- CSS 全文は **1.24MB**、`@font-face` は **1002 ブロック**（Google Fonts の unicode-range 分割）。それでも実際のフォント要求は **3 ファイル**（Noto Sans JP ×2 ＋ icomoon.ttf）
- 同意ベンダー一覧に `Fontplus.jp` が載っているが、**FontPlus のフォント要求は 0 件**。このページでは配信されていない
