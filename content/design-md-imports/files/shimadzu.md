# DESIGN.md — 島津製作所（SHIMADZU）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-28 / 対象: `https://www.shimadzu.co.jp/`, `https://www.shimadzu.co.jp/aboutus/company/profile.html`

---

## 1. Visual Theme & Atmosphere

このサイトの核心は **4 つ**ある。

1. **Web フォントが 1 本も無い。** `@font-face` は CSS 全文（10 ファイル・728KB）で **2 件だけ**で、どちらもアイコンフォント（`shimadzu_icon` / `Conv_CONDENSEicon`）。フォントファイルの要求は **1 件**（`shimadzu_icon.woff2`）のみ。和文も欧文も OS ローカル書体で組んでいる。
2. **`line-height` を宣言していない。** `body` に `line-height` が無く、**`normal` が 139 要素（トップ）/ 200 要素（下層）に降りている**。日本語の本文で行送りをブラウザ既定に任せている状態で、再現する側はここを埋める必要がある。
3. **字間もほぼ `normal`。** 可視 229/234 要素（トップ）・**240/240 要素（下層）が `normal`**。例外は見出し 4 要素の `-0.35px` と、下層タイトルの `-0.9px` という**わずかな負の詰め**だけ。
4. **CSS 変数が 0 個。** Drupal 7 の上に構築されており、色もサイズもすべて直書き。`font-size` の宣言は **px が 378 件に対し rem 59 件**で、px 主体。

- **デザイン方針**: 白地 ・ 赤 1 色のアクセント ・ 角丸ゼロの直線的なカード。研究機器メーカーらしい硬質さ
- **密度**: 高い。本文 14px で、1 画面に多くの導線を詰める
- **キーワード**: 硬質、直線的、欧文見出し ＋ 和文サブの二層、装飾を足さない

---

## 2. Color Palette & Roles

**CSS Custom Properties は 0 個。** すべて直書き。
（`--underlayer` / `--bg` / `--SP2Column` のような文字列が CSS に出てくるが、これらは `.foo--underlayer` のような **BEM のモディファイア名**であって Custom Property ではない）

### Primary（ブランドカラー）

- **Primary Red** (`#DD0000`): ブランドの赤。見出しの短い罫、ホバー時の文字色。実測 面 2 要素
- `#FF0000` も 1 要素あるが、これは **CMP（Cookie バナー）の OK ボタン**。サイト本体の赤は `#DD0000`

### Neutral（ニュートラル）

- **Text Primary** (`#464646`): `body` に宣言。実測 94 要素
- **Text Strong** (`#111111`): 下層の見出し。8 要素
- **Text on Dark** (`#FFFFFF`): 122 要素（黒帯のナビ・カードのオーバーレイ）
- **Background** (`#FFFFFF`): ページ背景（`viewportTopBySample (3/6)`、下層は 3/3 で白）
- **Surface Grey** (`#F3F3F3`): セクションの地（`.grayWideContainer`）
- **Surface Grey 2** (`#F5F5F5`): 交互配色の偶数行
- **Surface Grey 3** (`#EEEEEE`): 拠点ラベルなど。6 要素
- **Dark Bar** (`#595757`): 見出しの帯。8 要素
- **Black** (`#000000` / `rgba(0,0,0,.8)`): ナビ・カードのオーバーレイ
- **Divider** (`#ADADAD`): 6 要素

### Link / Category（意味色）

- **Link** (`#004ECC`): フッターのリンク。4 要素
- **Badge: プレスリリース** (`#3192BF`): 青。3 要素
- **Badge: お知らせ** (`#74A642`): 緑。2 要素

---

## 3. Typography Rules

### 3.1 和文フォント

- **Web フォントは 0 本。** 和文は完全に OS ローカル書体
- スタックは `"Hiragino Kaku Gothic ProN", メイリオ, sans-serif` の **3 つだけ**。macOS はヒラギノ角ゴ ProN、Windows はメイリオ
- `@font-face` の 2 件はどちらもアイコン専用（`shimadzu_icon` は `loaded`、`Conv_CONDENSEicon` は `unloaded` ＝ そのページで使われていない）

### 3.2 欧文フォント

- **専用の欧文フォントは無い。** セクション見出しの `Featured Products & Topics` / `News` / `Products`（40px）も和文と同じスタックで、ヒラギノ／メイリオの欧文字形で描かれている
- CSS には `Verdana, sans-serif` と `"Helvetica Neue", sans-serif` の宣言が残っているが、主要な面では使われていない

### 3.3 font-family 指定

```css
body {
  color: #464646;
  font-family: "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif;
}
```

- **これで全部。** Web フォントを読まないこと自体が設計なので、親切のつもりで Noto Sans JP を足すと別物になる
- **`游ゴシック` を入れていない。** Windows はメイリオで統一される
- CSS には `font-family: Conv_CONDENSEicon !important` という宣言もあるが、これは数字のコンデンス表示用のアイコンフォントで、そのページでは `unloaded`

### 3.4 文字サイズ・ウェイト階層

ルートは `html { cursor: auto; font-size: 62.5% }` ＝ **10px**。1440 / 1200 / 1024 / 834 / 768 / 767 / 375px の 7 幅すべてで 10px から動かない。
**`body` は 16px で、375px でだけ 14px に落ちる。**

| 用途 | size | weight | line-height | 実測件数（トップ） |
|---|---|---|---|---|
| セクション見出し（欧文） | 40px | — | 1.48（59.2px） | 6 |
| 下層ページタイトル | 36px | 800 | 1.33 | 1 |
| 中見出し | 26px | — | — | 2（下層） |
| カードタイトル | 20px | 400 | 1.43 | 31 |
| 製品カテゴリ | 18px | 600 | 1.30 | 6 |
| ニュース本文 | 16px | 400 | **normal** | 30 |
| 本文・リスト | 14px | 400 | **normal** / 1.60 | 126 |
| 補助・ラベル | 13px | 400 | 1.00〜1.80 | 11 |
| ユーティリティ | 12px | 400 | **normal** | 9 |

- **ウェイトは 400 / 600 / 700 の 3 段**（下層では 800 も 8 要素）
- **和文書体のウェイトは OS 任せ。** ヒラギノ角ゴ ProN は **W3 / W6 の 2 本**しか持たないので、600 は W6 に素直に当たるが、**700 と 800 は合成太字**になる。メイリオも Regular / Bold の 2 本
- つまり **600 と 700/800 の差は、環境によっては出ない**。再現するなら 400 / 600 の 2 段に寄せるのが安全

### 3.5 行間・字間

**このサイトで最も注意が要る点。**

- **`body` に `line-height` が無い。** 計算値は `normal` で、それが **トップ 139 要素 / 下層 200 要素**に降りている
  - `normal` はブラウザと書体が決める値で、ヒラギノ角ゴ ProN ではおおむね **1.17 前後**。日本語の本文としては詰まりすぎている
  - 一部のブロックだけが個別に宣言し直している（1.60 ×45、1.48 ×10、1.43 ×10、1.40 ×12、1.30 ×6、1.50 ×6）
- **再現するときは本文ブロックに必ず `line-height` を宣言する。** `normal` を継承させると行が潰れる
- 字間は **`normal` が支配的**（トップ 229/234、下層 **240/240**）。例外は 2 つだけ:

| 要素 | letter-spacing | font-size | em 換算 |
|---|---|---|---|
| セクション見出しの和文サブ（`注目製品＆トピックス` など） | **-0.35px** | 20px | -0.0175em |
| 下層のページタイトル（`島津製作所について`） | **-0.9px** | 30px | -0.03em |
| 本文の一部 | +0.25px | — | — |

- **「字間を開ける」設計ではなく、大きい見出しだけわずかに詰める**設計。+0.1em のような字空けは 1 箇所も無い
- CSS には `letter-spacing: 1.1` と `letter-spacing: 1`（**単位なし**）という宣言が残っている。`letter-spacing` に単位なしの数値は無効で、**ブラウザに無視される**。写さないこと

### 3.6 禁則処理・改行ルール

- `body` の `word-break` は **`normal`**
- CSS には `word-break: break-word` / `break-all` が部分的にある
- `word-break: auto-phrase` は使っていない

### 3.7 OpenType 機能

- **実測 0 要素。** `font-feature-settings` が 1 つも適用されていない
- **ただし CSS には `palt` 系の記述が 4 箇所ある。** 定義だけされていて、可視要素には 1 つも当たっていない（ユーティリティクラスが使われていない型）。**grep の件数を使用の証拠にしないこと**
- 実測では `palt` を当てると `「日本語」、約物。（テスト）` が 518px → 419.61px（**19% 縮む**）。詰める余地はあるが、**このサイトの再現としては「詰めない」が正**

### 3.8 縦書き

- `writing-mode: vertical-rl` は **0 要素**。縦組みは使っていない

---

## 4. Component Stylings

### Buttons

```css
/* 黒地の「一覧へ」ボタン */
.btn-list {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;            /* 14px */
  color: #FFFFFF;
  background: #000000;
  border-radius: 0;          /* 角丸は使わない */
  letter-spacing: normal;
}

/* グレー地のタブ */
.tab {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;          /* 18.2px */
  color: #464646;
  background: #EEEEEE;
  border-radius: 0;
}

/* 写真の上の白抜きボタン */
.btn-outline-light {
  font-size: 14px;
  color: #FFFFFF;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 0;
}
```

- **角丸は実質ゼロ。** `border-radius` の実測は `50%`（円形アイコン 4 要素）だけで、矩形の角丸は 0 種類
- 面で塗る CTA は**黒**。ブランドの赤 `#DD0000` はボタンの地色には使わない

### Badges / Chips

ニュース一覧のカテゴリ表示。**枠線だけで地色を持たない**のが特徴。

```css
.badge {
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  background: transparent;
  border: 1px solid currentColor;
  border-radius: 0;
  padding: 2px 8px;
}
.badge--press  { color: #3192BF; }  /* プレスリリース */
.badge--notice { color: #74A642; }  /* お知らせ */
```

- 文字色と枠線色が同じ（`currentColor`）。**塗らずに色分けする**

### Section Heading（このサイトの看板）

欧文を大きく、和文を小さく横に添える二層構成。上に短い赤い罫を置く。

```css
.section-heading::before {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background: #DD0000;
  margin-bottom: 16px;
}
.section-heading__en {
  font-size: 40px;
  line-height: 1.48;        /* 59.2px */
  color: #464646;
}
.section-heading__ja {
  font-size: 20px;
  line-height: 1.43;
  letter-spacing: -0.35px;  /* わずかに詰める */
  color: #464646;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  /* 実測 31 要素 */
}
.card__overlay {
  background: rgba(0, 0, 0, 0.8);   /* 画像の上のラベル帯・6 要素 */
  color: #FFFFFF;
}
```

---

## 5. Layout Principles

### Container

- ヒーローは **1200×370px** のバナーをカルーセルで横送り（中央寄せ・両側に余白）。全画面幅ではない
- 以降のセクションは白と `#F3F3F3` / `#F5F5F5` の帯を交互に敷く

### Grid

- 製品カテゴリは 3 列、ニュースは 1 列のリスト、取り組み紹介は 2 列
- 偶数行に `#F5F5F5` を敷く交互配色（`.foo--bg:nth-child(even)`）

### Spacing

- 余白のトークンは無い。px の実値指定（`font-size` 宣言が px 378 件 / rem 59 件という比率が、サイト全体の書き方を表している）

---

## 6. Depth & Elevation

- **影は 1 種類**: `0 5px 20px rgba(0, 0, 0, 0.2)`（実測 31 要素）
- 下方向に 5px の offset を持つ素直なドロップシャドウ。**不透明度 0.2 をそのまま写す**
- CMP の `0 5px 15px rgba(0,0,0,.5)` は Cookie バナー由来なので採用しない
- **角丸ゼロ ＋ 影あり**という組み合わせ。直線的な矩形が浮いている状態が、このサイトの質感

---

## 7. Do's and Don'ts

### Do（推奨）

- **Web フォントを読み込まない。** `font-family: "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif;` の 3 つだけで組む。これ自体が設計
- **`line-height` を本文ブロックに必ず宣言する。** 実サイトは `body` に書いておらず `normal` が 139〜200 要素に降りているが、それは再現すべき美点ではない。**1.6 前後を補う**こと（実サイト内で個別に宣言されている最多値も 1.60）
- **字間は `normal`。** 例外は大きい見出しの `-0.35px`（20px に対し -0.0175em）と `-0.9px`（30px に対し -0.03em）だけ
- **角丸を使わない。** `border-radius: 0` が既定。円形アイコンの `50%` のみ例外
- 影は `0 5px 20px rgba(0,0,0,.2)` の 1 種だけ
- **面で塗る CTA は黒**。赤 `#DD0000` は短い罫とホバーに限る
- バッジは**地色を持たせず、文字色と同色の 1px 枠線**で色分けする
- セクション見出しは**欧文 40px ＋ 和文 20px の二層 ＋ 上に 40×3px の赤い罫**

### Don't（禁止）

- **Noto Sans JP などの和文 Web フォントを足さない。** フォント要求はアイコンの 1 件だけというのが実装の事実
- **`font-feature-settings: "palt"` を書かない。** CSS に 4 箇所あるが可視要素への適用は 0 件。grep の件数を使用の証拠にしない
- **`letter-spacing: 1` / `1.1`（単位なし）を写さない。** 無効な値でブラウザに無視されている
- **`font-weight: 700` / `800` の差を当てにしない。** 和文は OS ローカル書体で、ヒラギノ角ゴ ProN は W3 / W6 の 2 本、メイリオも Regular / Bold の 2 本。600 までは実体に当たるが、700/800 は合成太字になる
- **角丸を足さない。** 矩形の `border-radius` は 1 種類も実装されていない
- **`#FF0000` を赤として使わない。** これは Cookie バナーの OK ボタンの色。本体の赤は `#DD0000`
- **ヒーローの `Explore SHIMADZU` を Web フォントで実装しない。** ヒーローは 1200×370px の JPG バナー（`bnr_explore_corp_pc.jpg`）で、**文字は画像に焼き込まれている**。DOM 上で最大の実テキストは 40px のセクション見出し
- **CSS 変数を期待しない。** 0 個。色もサイズも直書きで、`--` で始まる文字列は BEM のモディファイア名
- **CSS が `<link rel="stylesheet">` で読まれていない点に注意。** 初期 HTML には CSS のリンクが無く、JavaScript が 10 本の CSS を後から読み込む。素の HTML だけを見ると「スタイルが無いサイト」に見える

---

## 8. Responsive Behavior

### Breakpoints

実測で描画が変わるのは **375px のみ**（1440 / 1200 / 1024 / 834 / 768 / 767px は完全に同一）。

| | ≥767px | 375px |
|---|---|---|
| `html` | 10px | 10px（不変） |
| `body` | 16px / lh **normal** | **14px** / lh normal |
| `h1` | 18px / lh normal | 18px（不変） |
| `h2` | 40px / lh 59.2px / ls normal | **30px / lh 39px / ls -0.9px** |
| `h3` | 18px / lh 23.4px | 18px（不変） |
| `p` | 14px / lh 22.4px | **12px / lh normal** |

- `h2` はモバイルでだけ `letter-spacing: -0.9px`（-0.03em）が付く。**デスクトップでは `normal`**
- `p` はモバイルで `line-height` の宣言まで外れて `normal` に戻る。**再現するなら比率を維持すること**
- 流体（`vw` / `clamp()`）は 1 箇所も使っていない

### タッチターゲット

- タブは 13px / line-height 1.4 ＋ パディングで 36px 前後。**44px に拡げることを推奨**（実サイトはこうだが、正しくは拡げる）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体    : "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif
          （Web フォントは読み込まない。これが設計）
ルート  : html { font-size: 62.5% }  → 10px 固定・全幅で不変
本文    : 14px / #464646 / letter-spacing normal
          ※ 実サイトは line-height を宣言せず normal が降りている。再現では 1.6 を補う
見出し  : 欧文 40px（lh 1.48）＋ 和文 20px（ls -0.35px）の二層 ＋ 上に 40×3px の赤罫
ウェイト: 400 / 600 の 2 段に寄せる（700・800 は合成太字になる）
主色    : #DD0000（短い罫・ホバーのみ。面塗りはしない）
文字色  : #464646 / 強調 #111111 / 白 #FFFFFF
面      : #FFFFFF / #F3F3F3 / #F5F5F5 / #EEEEEE / 黒帯 #000000・rgba(0,0,0,.8)
リンク  : #004ECC
バッジ  : #3192BF（プレス）/ #74A642（お知らせ）— 枠線のみ・地色なし
角丸    : 0（円形アイコンの 50% のみ例外）
影      : 0 5px 20px rgba(0, 0, 0, .2) の 1 種のみ
CSS変数 : 0 個（すべて直書き）
OpenType: 使わない
縦組み  : 使わない
```

### プロンプト例

> 島津製作所のコーポレートサイト風に、製品カテゴリのセクションを作ってください。
> 書体は `"Hiragino Kaku Gothic ProN", "メイリオ", sans-serif` のみで、
> **Web フォントは一切読み込まないでください**（それがこのサイトの設計です）。
> ルートは `font-size: 62.5%`（10px）固定。本文 14px / `#464646` /
> `letter-spacing: normal`。**行間は 1.6 を明示的に宣言してください**
> （実サイトは宣言を省いて `normal` が降りていますが、日本語では詰まりすぎます）。
> セクション見出しは欧文 40px と和文 20px の二層にして、和文側にだけ
> `letter-spacing: -0.35px` を当て、見出しの上に 40×3px の `#DD0000` の罫を置いてください。
> **角丸は使わない**（`border-radius: 0`）。カードは影 `0 5px 20px rgba(0,0,0,.2)` のみ。
> 「一覧へ」ボタンは黒地に白文字。カテゴリバッジは地色を持たせず、
> 文字色と同色の 1px 枠線だけにしてください（プレスリリース `#3192BF`、お知らせ `#74A642`）。
> `font-feature-settings` は指定しないでください。
