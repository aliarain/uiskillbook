# DESIGN.md — 住友化学（Sumitomo Chemical）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-28 / 対象: `https://www.sumitomo-chem.co.jp/`, `https://www.sumitomo-chem.co.jp/company/about/`

---

## 1. Visual Theme & Atmosphere

このサイトの核心は **4 つ**ある。

1. **和文本体は OS ローカル書体で組み、Web フォントは「約物」と「欧文」にだけ使う。** 読み込んでいるフォントファイルはトップで 3 本だけ — `YakuHanJPs-Regular.woff2` / `YakuHanJPs-Bold.woff2`（約物だけのサブセット）と Google Fonts の `Roboto Condensed`。かな・漢字は 1 バイトも落としていない。
2. **`palt` を 1 度も書かずに約物が詰まっている。** `font-feature-settings` の宣言は CSS 全文で **0 件**、実測も 0 要素。それでも `「日本語」、約物。（テスト）` の実測幅は **480.81px** で、同条件の塩野義（520px）・島津（518px）より **約 7% 狭い**。YakuHanJPs がスタック先頭にいて約物を半角幅に差し替えているため。
3. **字間は「見出しだけ」に `em` で当て、本文は `normal`。** しかも**文字が大きいほど字間を狭く**している（40px → 0.10em、30px → 0.14em、18px → 0.14em、16px → 0.20em）。光学的な調整として逆方向に見えるが一貫している。本文は可視 144/159 要素（トップ）が `normal`。
4. **文字サイズ切替（小・中・大）を前提にした二重宣言。** CSS は `font-size: 14px; font-size: 1.4rem;` のように **px を書いてから rem で上書きする**形を全面的に採る（rem 239 宣言 / px 104 宣言）。ヘッダーに `data-fz="S|M|L"` の切替 UI がある。

- **デザイン方針**: 全画面の写真ヒーロー ＋ 白地のコンテンツ。水色〜紺のレンジで統一
- **密度**: 中。本文 13px と小さめで、情報量は多い
- **キーワード**: 端正、寒色、字空けの効いた見出し、アクセシビリティ配慮（文字サイズ切替・多言語）

---

## 2. Color Palette & Roles

**CSS Custom Properties は 0 個**（`--ot-footer-space` は CMP の OneTrust 由来）。色はすべて CSS に直書きされている。

### Primary（ブランドカラー）

- **Primary Blue** (`#0296E5`): リンク・CTA の面・言語切替のアクティブ。実測 文字 22 要素 / 面 9 要素
- **Primary Blue Light** (`#28A6E9`): 検索ボタン。1 要素
- **Navy** (`#27455C`): 濃紺の面。8 要素

### Neutral（ニュートラル）

- **Text Primary** (`#555963`): 本文。`html` に直接宣言されている。実測 37 要素（ヒーローが白文字のため件数は少ない）
- **Text on Image** (`#FFFFFF`): ヒーロー上の文字。実測 126 要素
- **Background** (`#FFFFFF`): `html` に宣言。`pageBackground.resolved` は `from: "html"` で白
- **Surface Pale** (`#ECF3F6`): セクションの淡い地。実測 18 要素
- **Surface Pale 2** (`#E4EEF1`): 文字サイズ切替・言語切替のアクティブ背景。6 要素
- **Surface Dark** (`#48535B`): 1 要素

### 事業部門の識別色（4 系統）

トップの事業カード 4 枚にだけ使われる。**文字色とアイコン塗りでペアになっている**。

| 部門 | 文字色 | アイコン塗り |
|---|---|---|
| アグロ＆ライフソリューション | `#739931` | `#B6E37D` |
| ICT＆モビリティソリューション | `#C69044` | `#EDC47D` |
| アドバンストメディカルソリューション | `#C6637B` | `#FCA7B9` |
| エッセンシャル＆グリーンマテリアルズ | （同系） | `#82D3FD` |

- 文字色は彩度を落とした濃い側、アイコンは明るい側、という 2 段の持ち方をしている

### 計測に混ざる CMP（採用しない）

`interactive` の上位に出る `font-size: 13.008px` / `14.4px`、`letter-spacing: 0.13008px` / `0.144px`、`font-weight: 600` の要素は**すべて OneTrust の Cookie バナー**（`Cookie設定` / `OK`）。半端な px はバナー側の rem スケールによるもので、サイト本体の設計ではない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **Web フォントは使っていない。** かな・漢字は OS ローカル書体（メイリオ → ヒラギノ角ゴ ProN → ＭＳ Ｐゴシック）
- **約物だけ `YakuHanJPs` を Web フォントで読む。** `@font-face` は 100 / 200 / 300 / 400 / 500 / 700 / 900 の **7 本宣言されているが、実際に読まれるのは 400 と 700 の 2 本だけ**（残り 5 本は `document.fonts` で `unloaded`）
- `YakuHanJPs` は約物（`「」、。（）` など）のみを含むサブセット。**本文の字形は一切変えない**

### 3.2 欧文フォント

- **`Roboto Condensed`**（Google Fonts、300 / 400）。トップのセクション欧文見出し（`BUSINESS & PRODUCTS` / `ABOUT THE COMPANY` / `INVESTOR RELATIONS`、weight 300）に 8 要素
- **下層ページでは 1 件も読まれない**（会社概要ページのフォント要求は YakuHanJPs の 2 本のみ）。欧文見出しはトップ専用の意匠

### 3.3 font-family 指定

```css
html {
  color: #555963;
  background: #ffffff;
  font-family: YakuHanJPs, "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
               "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "MS PGothic",
               Helvetica, Arial, sans-serif;
  font-size: 62.5%;   /* = 10px */
}

/* 欧文見出しだけ差し替える */
.en-heading { font-family: "Roboto Condensed", sans-serif; }
```

- **宣言が `body` ではなく `html` にある。** 色・背景・書体・ルートサイズを 1 ブロックにまとめている
- **スタックの先頭が `YakuHanJPs`** であることが要。約物はここで拾われ、それ以外の文字は次の候補に落ちる
- **`メイリオ` が `Hiragino Kaku Gothic ProN` より前**にある。Windows 優先のスタックで、macOS でもメイリオが入っていれば（Office 経由など）そちらが当たる。意図が和文の統一なら、ヒラギノを先に置く構成も検討に値する
- 末尾に `Helvetica, Arial, sans-serif` があり、**generic family は最後にだけ 1 回**。途中に `sans-serif` を挟んでいないので、スタックが死んでいる箇所は無い

### 3.4 文字サイズ・ウェイト階層

ルートは `html { font-size: 62.5% }` ＝ **10px**。1440 / 1200 / 1024 / 834 / 768 / 767 / 375px の 7 幅すべてで 10px から動かない。
**`body` だけが 768/767px を境に 16px → 14px に切り替わる**（2 段の階段。流体ではない）。

| 用途 | size | weight | line-height | letter-spacing | 実測件数 |
|---|---|---|---|---|---|
| ヒーロー大見出し | 40px | 700 | 1.25（50px） | 4px = **0.10em** | 12 |
| セクション見出し（和文） | 30px | — | — | 4.2px = **0.14em** | 12 |
| セクション見出し（欧文） | 40px | 300 | 1.10 | 2px = 0.05em | 1 |
| 小見出し | 18px | — | 1.50（27px） | 2.52px = **0.14em** | 7 |
| ヒーローのサブコピー | 16px | 700 | 1.50 | 3.2px = **0.20em** | 24 |
| 本文 | 13px | 400 | 2.00（26px） | normal | 80 |
| ナビ | 16px | 400 | 2.00（32px） | normal | 43 |
| 日付 | 14px | 400 | — | normal | 9 |
| 欧文ラベル | 14px | 300 | 1.10 | 0.7px = 0.05em | 6 |

- **ウェイトは 300 / 400 / 700 の 3 段**。300 は欧文（Roboto Condensed Light）専用で、和文には使わない
- **和文に 300 を当てない。** OS ローカル書体（メイリオ／ヒラギノ角ゴ ProN）はそれぞれ 2 本ずつしか持たないので、300 を指定しても Regular で出る
- 本文の 13px は小さい。**文字サイズ切替 UI があることと一体の設計**

### 3.5 行間・字間

**字間は要素ごとに `em` で宣言する型**（`body` からの px 継承ではない）。サイズが変われば px も比例して変わるのが根拠。

| font-size | letter-spacing (実測) | em 換算 |
|---|---|---|
| 40px | 4px | 0.10em |
| 30px | 4.2px | 0.14em |
| 18px | 2.52px | 0.14em |
| 16px | 3.2px | **0.20em** |
| 14px | 0.7px | 0.05em |
| 13px（本文） | normal | — |

- **大きい見出しほど字間が狭く、小さいコピーほど広い。** 40px のヒーロー見出しが 0.10em、その下の 16px のサブコピーが 0.20em で**倍の開き**になっている。一般的な光学調整（大きいほど詰める）の考え方と一致する
- **本文には一切当てない。** 可視 144 要素（トップ）/ 124 要素（下層）が `normal`
- 行間は**無単位の比率**で、本文 **2.00**（13px → 26px）、見出し 1.50 / 1.25 / 1.10。本文の 2.0 は日本語としてかなりゆったりした側
- CSS には `letter-spacing: -0.40em` も存在するが、これはインラインブロック間の空白を消すハックで、タイポグラフィの指定ではない

### 3.6 禁則処理・改行ルール

- `body` の `word-break` は **`normal`**。日本語の禁則処理はブラウザ任せ
- CSS には `word-break: break-all` / `break-word` が部分的にある（表組みなど）
- `word-break: auto-phrase` は使っていない

### 3.7 OpenType 機能

- **`font-feature-settings` の宣言は CSS 全文で 0 件**、実測も 0 要素。`palt` も `halt` も書いていない
- **それでも約物は詰まっている。** 同一文字列での実測:

| サイト | `normal` | `palt` を当てた場合 |
|---|---|---|
| 住友化学（YakuHanJPs あり） | **480.81px** | 422.41px |
| 塩野義製薬（なし） | 520px | 423.09px |
| 島津製作所（なし） | 518px | 419.61px |

  `normal` の時点で約 7% 狭いのが YakuHanJPs の効果。**`palt` を足すと二重に詰まる**ので、再現時に `palt` を加えないこと

### 3.8 縦書き

- `writing-mode: vertical-rl` は **0 要素**。縦組みは使っていない

---

## 4. Component Stylings

### Buttons

```css
/* 面塗りの CTA */
.btn-primary {
  font-size: 13px;
  font-weight: 400;
  line-height: 2;          /* 26px */
  color: #FFFFFF;
  background: #0296E5;
  border-radius: 5px;      /* 実測 8 要素 */
  letter-spacing: normal;
}

/* テキストリンク */
.link-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
  color: #0296E5;
  background: transparent;
}

/* 検索ボタン */
.btn-search { background: #28A6E9; color: #FFFFFF; }
```

### 文字サイズ切替（Text Size Switcher）

サイトの特徴的なコンポーネント。ヘッダー右上に常設。

```html
<div class="text-fontsize">
  <p class="fontsize-ttl">文字サイズ :</p>
  <ul class="fontsize-list">
    <li class="list-item"><button class="item-inner" data-fz="S">小</button></li>
    <li class="list-item"><button class="item-inner is-active" data-fz="M">中</button></li>
    <li class="list-item"><button class="item-inner" data-fz="L">大</button></li>
  </ul>
</div>
```

```css
.fontsize-ttl,
.fontsize-list        { font-size: 13px; font-size: 1.3rem; }
.fontsize-list .item-inner          { padding: 3px; border: none; background: transparent;
                                      transition: all .3s ease-out; }
.fontsize-list .item-inner.is-active,
.fontsize-list .item-inner:hover    { background: #E4EEF1; color: #0296E5; }
.fontsize-list .item-inner:visited  { color: #555963; }
```

- 既定は **中（`M`）がアクティブ**
- **これを成立させるために、本文のサイズ指定が `px` → `rem` の二重宣言になっている**（下記 7 章の Do を参照）

### Cards

```css
.card {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);  /* 実測 15 要素 */
  border-radius: 7px;                        /* 実測 4 要素 */
}
```

- 角丸は 5px（ボタン）/ 7px（カード）/ 50%（円形アイコン）の 3 種だけ

### コンテンツ用サイズユーティリティ

本文中の文字サイズを段階で指定するクラスが用意されている。**モバイルで 1 段上がる**。

| クラス | ≥768px | ≤767px |
|---|---|---|
| `.fzs` | 12px (1.2rem) | 14px (1.4rem) |
| `.fzm` | 14px (1.4rem) | 16px (1.6rem) |
| `.fzl` | 16px (1.6rem) | 18px (1.8rem) |
| `.fzll` | 18px (1.8rem) | 20px (2.0rem) |

---

## 5. Layout Principles

### Container

- ヒーローは全画面幅（1440×732px の JPG をカルーセルで横送り）
- 以降のコンテンツは中央寄せのコンテナ

### Grid

- トップは事業 4 部門のカード、ニュース 2 カラム、バナー群
- ヒーローは Swiper 系のカルーセル。**左右に ±1440px 刻みで同じ画像が並ぶ**（無限ループ用の複製）。そのため `letter-spacing: 4px ×12` のように**件数が複製ぶん水増しされる**。実体は 1 要素と読むこと

### Spacing

- 余白のトークンは無い。`rem` の実値で指定（ルート 10px なので `2.4rem` = 24px のように読みやすい）

---

## 6. Depth & Elevation

- **影は 1 種類**: `0 0 20px rgba(0, 0, 0, 0.3)`（実測 15 要素）
- offset を持たない全方位のぼかしで、**不透明度 0.3 はかなり強い**。黒 30% をそのまま写すこと（薄く丸めない）
- CMP の `0 0 18px rgba(0,0,0,.2)` は OneTrust 由来なので採用しない

---

## 7. Do's and Don'ts

### Do（推奨）

- **約物を詰めるなら `palt` ではなく `YakuHanJPs` をスタック先頭に置く。** これがこのサイトの字面の要
  ```css
  font-family: YakuHanJPs, "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN", sans-serif;
  ```
- **字間は見出しだけに `em` で当てる。** 40px → 0.10em、30px / 18px → 0.14em、16px のサブコピー → 0.20em。**大きいほど狭く**
- **本文の `letter-spacing` は `normal`。** 継承させない
- 行間は無単位の比率で、**本文 2.0**、見出し 1.5 / 1.25 / 1.10
- `html` に色・背景・書体・`font-size: 62.5%` をまとめて宣言する
- **サイズ指定は `rem`。** 文字サイズ切替と拡大表示に追従させるため
- 影は `0 0 20px rgba(0,0,0,.3)` の 1 種だけ
- 事業部門の色は**文字用の濃い側とアイコン用の明るい側をペア**で持つ

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない。** YakuHanJPs ですでに約物が詰まっており、二重にかかる
- **`YakuHanJPs` の 7 ウェイトを全部読み込まない。** 実際に使われているのは 400 と 700 の 2 本だけ。残り 5 本は宣言だけで `unloaded`
- **和文に `font-weight: 300` を当てない。** 300 は欧文の Roboto Condensed 専用。OS ローカルの和文書体は Regular / Bold の 2 本しか持たないので細くならない
- **半端な px（`13.008px` / `14.4px` / `0.13008px`）を設計値として写さない。** すべて OneTrust の Cookie バナー
- **`letter-spacing: -0.40em` を文字詰めとして使わない。** インラインブロックの空白除去のハック
- **`font-size` を px だけで書かない。** 文字サイズ切替 UI があるので、px 単独指定は拡大できなくなる。実サイトは `font-size: 14px; font-size: 1.4rem;` と**両方書いて rem で上書きする**形を取っている（rem 239 宣言に対し px 104 宣言）
- **ヒーローのカルーセルの複製を要素数として数えない。** 同じ見出しが 12 回出るのは無限ループ用の複製
- ヒーローのコピー（「地球がつぎに、必要なものを。」）は**実テキスト**。画像化しないこと（背景写真だけが JPG）

---

## 8. Responsive Behavior

### Breakpoints

実測で切り替わるのは **768 / 767px の 1 箇所**。

| | ≥768px | ≤767px |
|---|---|---|
| `html` | 10px | 10px（不変） |
| `body` | 16px / lh 32px | **14px / lh 28px** |
| ヒーロー見出し | 40px / lh 50px / ls 4.8px | **25px / lh 31.25px / ls 3px** |
| `h1` | 16px / lh 32px | 14px / lh 28px |
| `h3` | 16px / lh 20.8px | 16px（不変） |
| `p` | 13px / lh 26px | 13px（不変） |
| `.fzs` 〜 `.fzll` | 12 / 14 / 16 / 18px | **14 / 16 / 18 / 20px**（1 段上がる） |

- **`body` が 2 段で切り替わる階段型。** `html` は固定なので、ルートだけ測ると「完全固定のサイト」に見える
- ヒーロー見出しの字間は 4.8px → 3px だが、**`em` 換算ではどちらも 0.12em で一定**。em で宣言しているので自動的に追従している
- 流体（`vw` / `clamp()`）は 1 箇所も使っていない

### タッチターゲット

- 文字サイズ切替のボタンは `padding: 3px` と小さい。**モバイルでは 44px 以上に拡げる**こと（実サイトはこうだが、正しくは拡げる）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体    : YakuHanJPs, "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN", sans-serif
          （和文本体は OS ローカル。Web フォントは約物の YakuHanJPs 400/700 のみ）
欧文    : "Roboto Condensed", sans-serif（300 / 400・セクション欧文見出し専用）
ルート  : html { font-size: 62.5%; color: #555963; background: #ffffff }  → 10px 固定
本文    : 13px / line-height 2.0 / letter-spacing normal / #555963
見出し  : 40px ls 0.10em ／ 30px・18px ls 0.14em ／ 16px サブコピー ls 0.20em
ウェイト: 400 / 700（和文）、300（欧文のみ）
主色    : #0296E5（リンク・CTA）/ 濃紺 #27455C
面      : #FFFFFF / 淡青 #ECF3F6 / アクティブ #E4EEF1
部門色  : 緑 #739931・橙 #C69044・桃 #C6637B（文字）/ #B6E37D・#EDC47D・#FCA7B9・#82D3FD（塗り）
角丸    : 5px（ボタン）/ 7px（カード）/ 50%（円）
影      : 0 0 20px rgba(0, 0, 0, .3) の 1 種のみ
OpenType: 書かない（YakuHanJPs が約物を担当するため palt 不要）
縦組み  : 使わない
単位    : font-size は rem（文字サイズ切替に追従させる）
```

### プロンプト例

> 住友化学のコーポレートサイト風に、事業紹介のセクションを作ってください。
> 書体は `YakuHanJPs, "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN", sans-serif` で、
> **和文の Web フォントは読み込まず、約物用の YakuHanJPs（400/700）だけ読み込んで**ください。
> `font-feature-settings` は書かないでください（YakuHanJPs が約物を詰めるので不要です）。
> ルートは `font-size: 62.5%`（10px）で、以降は rem 指定。
> 本文 13px / 行間 2.0 / letter-spacing は normal。
> 大見出しは 40px で `letter-spacing: 0.10em`、その下のサブコピーは 16px で `0.20em` と、
> **大きい文字ほど字間を狭く**してください。
> リンクと CTA は `#0296E5`、本文色は `#555963`、セクションの地は `#ECF3F6`。
> カードは `border-radius: 7px` ＋ `box-shadow: 0 0 20px rgba(0,0,0,.3)`。
> 768px 以下では body を 14px に落としてください。
