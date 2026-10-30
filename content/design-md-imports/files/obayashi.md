# DESIGN.md — 大林組（OBAYASHI）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-27 / 対象: `https://www.obayashi.co.jp/`, `/company/philosophy.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **約物サブセットフォントで括弧と句読点だけ詰め、`letter-spacing` は一切書かない。** 角丸ゼロ・影ゼロ。写真とグレースケールの面だけで組む、ゼネコンの企業サイト
- **密度**: 中。ナビゲーションは 14.08px（0.88rem）で細かく、本文は 16px / `line-height: 1.8` でゆったり組む
- **キーワード**: YakuHanJPs、游ゴシック Medium、角丸ゼロ、影ゼロ、モノクローム、1px の緑

**このサイトの核心は4つある。**

1. **約物サブセット（YakuHanJPs）＋ 游ゴシック Medium 別名の2層構成。** 実測で **可視テキスト 353 要素中 337 要素**がこのスタック。`font-feature-settings` は **0 要素**、`letter-spacing` は **353 要素中 346 要素が `normal`**。つまり**このサイトは字間を一切いじらない。詰まって見えるのは約物サブセットだけの効果**
2. **`border-radius` も `box-shadow` も、2 ページの実測で 0 種類。** CSS 全文でも `border-radius: 50%`（丸アイコン）と `999px` / `18px` / `5px` が各1件ずつあるだけ。**面は必ず直角、浮かせない**
3. **`font-weight` は 400 と 700 の2段だけ。** 実測 400 が 301 要素、700 が 52 要素。500・600 は 1 要素も無い
4. **コーポレートグリーン `#018A0E` は、静止状態では 1 要素も描画されない。** ナビ項目の下に `height: 1px` の線として仕込まれ、`opacity: 0` からホバーで現れるだけ。**ブランド色を面に塗らない**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Corporate Green** | **`#018A0E`** | **静止状態では可視 0 要素。** グローバルナビ項目の `::before`（`height: 1px`・`opacity: 0`）としてのみ存在し、ホバー/カレントで現れる。CSS 全文で 21 回 |
| **Main Text** | **`#272727`** | CSS 変数 `--main-text-color`。**可視 94 要素**。本文・見出し・ロゴ。純黒 `#000000` は使わない |

> **ブランド色は「塗る色」ではなく「引く線」。** ロゴマークの緑三角以外、緑は 1px の下線としてしか出てこない。新規実装で `#018A0E` をボタンの面色に使うと、このサイトの構えから外れる。

### News カテゴリ色（`:root` 変数・記事種別のラベル文字色）

| 変数 | 実装値 | 用途 |
|------|--------|------|
| `--news-press-release` | `#cc3d2e` | プレスリリース |
| `--news-ir` | `#255aa5` | 株主・投資家情報 |
| `--news-sustainability` | `#3e8f79` | サステナビリティ |
| `--news-others` | `#e68e43` | その他・イベント情報 |

> **4色はバッジの左端 4px の帯にだけ使う。** バッジ本体は `background: #eff0f2` / 文字 `#272727` で種別を問わず共通、`::before` に `width: 4px; height: 100%` を置いて種別色を塗る。実測のバッジ面は `#eff0f2` が 30 要素。
> 暗い面のニュース一覧では**バッジが `#585858`・幅 190px・左帯 5px** に切り替わる（実測 14 要素）。**文字色に種別色を使わない。**

### Neutral（ニュートラル）

- **Text Primary** (`#272727`): 本文・見出し（可視 94 要素）
- **Text Secondary** (`#666666`): `--notice-text-color`。注記、ボタンのホバー黒（可視 46 要素）
- **Text Tertiary** (`#767676`): `--news-tab-text-color`。ニュースのタブ（可視 4 要素）
- **Text on Dark** (`#d5d5d5`): **フッター上のテキスト専用**（可視 126 要素 = 2 ページ合計。白ではなく薄いグレーを置く）
- **Border** (`#cad0d5`): 罫線。**CSS 全文で 37 回**。このサイトで最も多い線色
- **Surface Badge** (`#eff0f2`): ニュース種別バッジの面（可視 30 要素）
- **Surface Notice** (`#f1f2f4`): `--important-notice-background`。重要なお知らせ帯
- **Footer** (`#565656`): フッター全面。`border-bottom: 10px solid #565656` も同色
- **Hover Fill** (`#d6dade`): `--basic-button-hover-color`。淡グレーのボタンのホバー
- **Background** (`#ffffff`): ページ背景

> **`pageBackground.resolved` は信用しない。** トップは `rgb(0,0,0)`（根拠 `viewportTopBySample (9/12)`・`div.swiper`）、下層は `rgb(39,39,39)`（`div.keyVisual`）を返すが、**どちらもヒーローの色**。`html` / `body` はともに `rgba(0,0,0,0)` で、**コンテンツの地色は `#ffffff`**。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **游ゴシック Medium**。Windows で Regular に落ちる問題を `MyYuGothicM` という**別名 `@font-face`**（`local()` のみ）で吸収している
- **約物サブセット**: **YakuHanJPs**（Web フォント）。**スタックの先頭**に置き、括弧・句読点だけを詰める
- 明朝体は使わない

### 3.2 欧文フォント

- **Roboto**（Web フォント・`--en-font-family`）: 英字セクション見出しと通し番号専用。`NEWS` が **70px / weight 700**、カルーセルの `01 | 05` が 15px
- 和文のラテングリフは游ゴシックのものをそのまま使う（英数字だけ Roboto に逃がすことはしない）

### 3.3 font-family 指定

```css
/* 本文・UI（html, body に 1 回だけ宣言して全体に継承させる） */
font-family: "YakuHanJPs", "MyYuGothicM", "游ゴシック Medium", "Yu Gothic Medium",
             "游ゴシック体", YuGothic,
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 游ゴシック Medium を Windows でも当てるための別名（実サイトのまま） */
@font-face {
  font-family: "MyYuGothicM";
  font-weight: normal;
  src: local("YuGothic-Medium"), local("Yu Gothic Medium"), local("YuGothic-Regular");
}
@font-face {
  font-family: "MyYuGothicM";
  font-weight: bold;
  src: local("YuGothic-Bold"), local("Yu Gothic");
}

/* IE 向け（游ゴシックを丸ごと外してヒラギノ→メイリオへ） */
@media all and (-ms-high-contrast: none) {
  html, body {
    font-family: "YakuHanJPs", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
                 "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  }
}

/* 英語ページ */
html:lang(en) body {
  font-family: "YakuHanJPs", Helvetica Neue, Helvetica, Arial, sans-serif;
}

/* 欧文見出し・通し番号 */
font-family: "Roboto", sans-serif;   /* --en-font-family */
```

**フォールバックの考え方**:
- **YakuHanJPs を必ず先頭に置く。** 約物（`（）「」、。・：`）だけを含むサブセットなので、先頭に置いても和文本体は次の游ゴシックに落ちる
- `MyYuGothicM` → `"游ゴシック Medium"` → `"Yu Gothic Medium"` → `游ゴシック体` → `YuGothic` の順で、**OS と Chrome/Firefox の差を4段で吸収**している
- **`html, body` の両方に書いている**（`html` だけだとフォームコントロールに継承されないため）

### 3.4 Web フォントの実際

| ファミリー | 宣言 | `document.fonts` の実測 |
|---|---|---|
| **YakuHanJPs** | 100 / 200 / 300 / 400 / 500 / 700 / 900 の **7 ウェイト** | **`loaded` は 400 と 700 の2本だけ**。残りは `unloaded` |
| **MyYuGothicM** | normal / bold の 2 本（`src` は `local()` のみ） | **両方 `error`**。游ゴシックが入っていない環境では最初から効かない |
| **Roboto** | 100 / 400 / 700 | **`loaded` は 400 と 700** |

> **`MyYuGothicM` が `error` でも設計は壊れない。** `local()` しか書いていないので、游ゴシックが無い環境では次の `"ヒラギノ角ゴ Pro W3"` に落ちるだけ。**このエラーは意図どおり**で、再現実装でも `src` に URL を足してはいけない（別の書体になる）。

### 3.5 文字サイズ・ウェイト階層

**サイズはすべて `rem`。ただし px を 16 で割って小数2桁に丸めているため、実測は半端な値になる。**

| Role | Font | 宣言 | 実測 | Weight | Line Height | Letter Spacing |
|------|------|------|------|--------|-------------|----------------|
| EN Section Title | Roboto | `70px` | 70px | 700 | 92px（1.31） | normal |
| Page Title | 游ゴシック | `2.38rem` | **38.08px** | 400 | 1.6 | normal |
| Hero Caption | 游ゴシック | `1.75rem` | 28px | 400 | 1.5 | **0.01em = 0.28px** |
| Heading 1 | 游ゴシック | `1.75rem` | 28px | 700 | 1.6 | normal |
| Heading 2 | 游ゴシック | `1.25rem` | 20px | 700 | 1.6 | normal |
| Heading 3 | 游ゴシック | `1rem` | 16px | 400 | 1.6 | normal |
| Body | 游ゴシック | `1rem` | 16px | 400 | **1.8** | normal |
| Nav / List | 游ゴシック | `0.88rem` | **14.08px** | 700 | 1.7 | normal |
| Meta | 游ゴシック | `0.82rem` | **13.12px** | 400 | 1.7 | normal |
| Badge | 游ゴシック | `11px` | 11px | 700 | 1.7 | normal |
| Utility | 游ゴシック | `0.75rem` | 12px | 400 | 1.7 | normal |

**丸めた rem の実例**（CSS 出現回数）: `0.88rem` 66回 / `0.75rem` 36回 / `1rem` 35回 / `0.82rem` 32回 / `1.13rem` 23回 / `1.25rem` 15回 / `0.94rem` 13回 / `0.63rem` 12回。

> **DESIGN.md を読んで実装するときは、rem 値をそのまま書くこと。** `14.08px` を `14px` に丸めると 66 箇所すべてがズレる。逆に「14px にしたい」という理由で `0.875rem` に直すのも、既存ページと 0.08px ズレる。**このサイトの単位は rem で、丸めた値そのものが仕様**。

> **同じセレクタに rem が二重宣言されている箇所がある。** 例: `.heading-type2__title { font-size: 1.13rem; font-size: 1.125rem; }`（後勝ちで 18px）、`.heading-type1__title { font-size: 1.375rem; font-size: 8.2vw; font-size: 1.375rem; }`（vw を書いて直後に取り消している）。**実装値は最後の宣言**。

### 3.6 行間・字間

- **本文の行間**: **1.8**（`/company/philosophy.html` の理念本文で 21 要素）
- **既定の行間**: **1.7**（実測 113 要素で最多。ナビ・リスト・注記）
- **カード・見出しの行間**: **1.5**（実測 99 要素）
- **セクション見出しの行間**: **1.6**（実測 33 要素）
- **本文の字間**: **`normal`。書かない**（実測 353 要素中 346 要素）
- **例外はヒーローのキャプションのみ**: `letter-spacing: 0.01em`（28px に対して 0.28px・7 要素）

**ガイドライン**:
- **`letter-spacing` を足さない。** このサイトの「詰まった見え」は YakuHanJPs が作っている。em を重ねると約物が二重に詰まって崩れる
- CSS 全文の `letter-spacing` は `0`（5件）、`-1em`（3件・`inline-block` の隙間潰し hack）、`0.05em`（1件）、`0.01em`（1件）だけ。**`-1em` は組版ではなくレイアウト hack なので真似しない**

### 3.7 OpenType 機能

```css
/* このサイトは font-feature-settings を 1 要素も使っていない */
```

- **`palt` は 0 件**（2 ページ・353 要素すべて `normal`）
- **約物の詰めは `palt` ではなく YakuHanJPs（サブセット書体）で行う。** これはブラウザ・OS を問わず同じ見えになる反面、**詰まるのは約物だけで、かなと漢字の間は詰まらない**

### 3.8 縦書き

```css
/* 該当なし。writing-mode は 2 ページで 0 要素 */
```

---

## 4. Component Stylings

### Buttons

このサイトに**面で塗った CTA は無い**。押せるものは「罫で囲む」か「テキストリンク」のどちらか。

**Basic（淡グレー・罫線）**
- Background: `#ffffff`
- Text: `#272727`
- Border: 1px solid `#cad0d5`
- Border Radius: **`0`**
- Font Size: `0.88rem`（14.08px）/ Weight: 700
- Hover: Background `#d6dade`（`--basic-button-hover-color`）

**Basic Black**
- Background: `#272727`
- Text: `#ffffff`
- Border Radius: **`0`**
- Hover: Background `#666666`（`--basic-button-black-hover-color`）

### Badges（ニュース種別）

```css
.news-section__list__item__category {
  display: grid; place-items: center;
  background: #eff0f2;          /* 種別で変えない */
  color: #272727;
  min-height: 21px;
  font-size: 0.6875rem;         /* 11px。モバイルは 0.625rem = 10px */
  font-weight: 700;
  border-radius: 0;
  position: relative;
}
/* ★種別色は左端 4px の帯にだけ使う */
.news-section__list__item__category::before {
  content: ""; position: absolute; top: 0; left: 0;
  width: 4px; height: 100%;
  background: var(--news-press-release);   /* --news-ir / --news-sustainability / --news-others */
}
```

暗い面のニュース一覧では別バリアントになる。

```css
.select-news-section__list__item__category {
  background: #585858; color: #ffffff;
  width: 190px; min-height: 20px; margin: 16px 0 10px;
  font-size: 0.75rem; font-weight: 700;
}
.select-news-section__list__item__category::before { width: 5px; height: 100%; background: white; }
```

- ニュースの見出しリンクは `text-decoration: underline`
- ニュースのタブは選択中だけ `::after` に `border-bottom: 1px solid black` を敷く

### Cards

- Background: `#ffffff`
- Border: 1px solid `#cad0d5`（または罫線のみ）
- Border Radius: **`0`**
- Shadow: **none**
- Hover: `transform: scale(1.05)` / `transition: scale 0.35s ease-out`（`--hover-scale-value` / `--hover-scale-transition`）

> **ホバーは色ではなく拡大で示す。** カード全体を 1.05 倍にする挙動が変数化されている。

### Nav Item

- Font Size: `0.88rem`（14.08px）/ Weight: 700
- 下線: `::before` に `height: 1px` / `background-color: #018A0E` / `opacity: 0` → ホバーで `opacity: 1`
- `transform-origin: right center`（**右から左へ引く**）

---

## 5. Layout Principles

### Container

| 用途 | Max Width | 実測 |
|------|-----------|------|
| **標準コンテンツ** | **1240px** | トップで 8 要素 |
| 読み物（理念・本文） | **800px** | 下層で 3 要素 |
| フルブリード | 1600px | ヘッダー/フッター内側 |
| 狭幅ブロック | 1000px | 2 要素 |

- ヘッダーの左右 padding: `30px` / 上下 `20px`

### Grid / Gap

実測の `gap` は小さい値に偏る（リスト項目の区切りに使い、カードの間隔は `margin` で取っている）。

| Gap | 出現 | 用途 |
|-----|------|------|
| `8px`（column） | 15 | インライン要素の区切り |
| `10px`（row） | 7 | 縦積みリスト |
| `5px`（column） | 7 | アイコン＋ラベル |
| `30px` / `32px`（column） | 3 | カード列 |
| `40px 30px` | 2 | 実績カードのグリッド |
| `80px 40px` | 1 | 事業セクション |

### Spacing

余白は `em` と `%` で書かれている（`margin-bottom: 10%` / `padding: 6.25% 0 0` / `margin-top: 0.8em`）。**px の固定余白はほとんど無い**ので、再現実装でも比率で持つ。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | **`none`** | **すべての要素** |

- **実測 2 ページで `box-shadow` は 0 種類。** CSS 全文でも `0px 0px 2px 3px rgba(0,0,0,0.2)` が 1 件（フォーカスリング相当）あるだけ
- **奥行きは影ではなく、罫線（`#cad0d5` 1px）と面の明度差（`#ffffff` / `#eff0f2` / `#f1f2f4` / `#565656`）で作る**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`YakuHanJPs` をスタックの先頭に置く。** これが約物の詰めを担う
- **`html, body` の両方に `font-family` を書く**（実サイトがそうしている）
- `font-weight` は **400 と 700 だけ**使う
- `border-radius: 0` を明示する
- 本文は `line-height: 1.8`、それ以外は `1.7` を既定にする
- サイズは**丸めた rem をそのまま**書く（`0.88rem` / `0.82rem` / `2.38rem`）
- ブランドグリーン `#018A0E` は **1px の線**としてだけ使う

### Don't（禁止）

- **`letter-spacing` を足さない。** このサイトは 346/353 要素が `normal`
- **`font-feature-settings: "palt"` を足さない。** 実サイトは 0 件で、YakuHanJPs と二重に効いて崩れる
- **`box-shadow` を足さない**（実測 0 種）
- **`border-radius` を足さない**（実測 0 種）
- `font-weight: 500` / `600` を使わない（実サイトに 1 要素も無い）
- **`MyYuGothicM` の `@font-face` に URL を足さない。** `local()` だけなのが仕様
- `#018A0E` をボタンやバッジの面色にしない
- 本文の色に `#000000` を使わない（`#272727`）
- `letter-spacing: -1em` を組版として真似しない（`inline-block` の隙間潰し hack）

---

## 8. Responsive Behavior

### Breakpoints

実装は **max-width 主体（デスクトップファースト）**。

| Query | 出現回数 | 説明 |
|-------|---------|------|
| `only screen and (max-width: 767px)` | **58** | モバイル。主要な切り替え点 |
| `only screen and (max-width: 1060px)` | 10 | タブレット/小型ノート |
| `only screen and (min-width: 768px)` | 5 | モバイル以上 |
| `only screen and (max-width: 1150px)` | 3 | ナビの折り返し |
| `only screen and (min-width: 1061px)` | 3 | デスクトップ |
| `only screen and (min-width: 1281px)` | 1 | ワイド |
| `only screen and (max-height: 760px) and (min-width: 1000px)` | 1 | **高さで切り替える 1 件**（ヒーローの高さ調整） |
| `print` | 3 | 印刷 |
| `(-ms-high-contrast: none)` | 3 | IE 向けフォントスタック差し替え |

### モバイルでのサイズ調整

- 見出しは `rem` を下げる（`1.75rem` → `1.375rem`、`1.25rem` → `1.13rem`）
- 余白は `%` で持っているので自動で縮む（`margin-bottom: 10%` など）

### タッチターゲット

- ナビ項目の `padding` は `47px 58px 0 0` と大きく取る（デスクトップ）。モバイルではアコーディオンに切り替わる

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green:   #018A0E   （1px の下線としてのみ。面に塗らない）
Text Primary:  #272727
Text Secondary:#666666
Text on Dark:  #d5d5d5
Border:        #cad0d5
Surface:       #eff0f2 / #f1f2f4
Footer:        #565656
Background:    #ffffff

Font: "YakuHanJPs", "MyYuGothicM", "游ゴシック Medium", "Yu Gothic Medium",
      "游ゴシック体", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
      "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Font (EN): "Roboto", sans-serif

Body Size:  16px (1rem)   Line Height: 1.8
Nav Size:   0.88rem (14.08px) / 700
Letter Spacing: normal（書かない）
Border Radius: 0   Box Shadow: none
Container: 1240px（読み物は 800px）
Weights: 400 / 700 のみ
```

### プロンプト例

```
大林組のデザインシステムに従って、事業一覧のカードグリッドを作成してください。

- font-family は上記スタックをそのまま使う（YakuHanJPs を先頭に置く）
- letter-spacing は書かない。font-feature-settings も書かない
- border-radius: 0、box-shadow: none を明示する
- カードの枠は 1px solid #cad0d5
- カード見出しは 1.25rem / 700 / line-height 1.6、本文は 1rem / 400 / line-height 1.8
- カテゴリバッジは面 #eff0f2 / 文字 #272727 / 11px / 700 / radius 0。
  種別色は ::before の width:4px; height:100% の左帯にだけ塗る（文字色にしない）
- ホバーはカード全体を transform: scale(1.05) / transition: scale .35s ease-out
- コンテナは max-width: 1240px
- 文字色は #272727。#000000 は使わない
```
