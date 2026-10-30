# DESIGN.md — ニデック（NIDEC）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 実測日: 2026-10-26 / 対象: `https://www.nidec.com/jp/`, `https://www.nidec.com/jp/value/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 深緑（`#001f0f`）の文字とグリーングラデーションで組む製造業のコーポレート。角丸と余白を多めに取った、やわらかいカード主体のレイアウト
- **密度**: 低。行間比 1.30 が最多、2.00 が 37 要素と広い
- **キーワード**: 深緑、グラデーション、可変フォント、設計幅ベースの流体

**このサイトの核心は 5 つある。**

1. **ウェイトが可変フォントの中間値で設計されている。** `--font-weight-250` と `--font-weight-350` がトークンとして存在し、**350 が可視 58 要素**で実際に描画される。Noto Sans JP を `wght@100..900` の可変フォントとして読んでいるため（実測: 欧文幅が 9 ウェイトすべて別の値 — 425.28 / 430.5 / 435.7 / 450.67 / 461.73 / 468.89 / 476.05 / 483.2 / 490.38px）。**400 に丸めるとサイトの軽さが消える**
2. **全要素のサイズが「設計幅に対する vw」で書かれている。** `calc(40 / var(--design-width) * 100vw)` ＝「デザインカンプで 40px だったもの」。`--design-width` は **デスクトップ 1468 / モバイル 376**
3. **`html` の `font-size` が 768px と 767px の間で 2 倍に跳ぶ。** 768px まで 16px 固定、**767px で 32.6383px**、375px で 15.9574px（`calc(16 / 376 * 100vw)`）。**規定の 1440/1200/834/375px だけ測ると完全固定に見える**
4. **タイポグラフィのトークンが「和文専用・画面別・4 点セット」で命名されている。** `--text-pc-jp-text-p-demilight-narrow` のように **pc/sp（画面）× jp（言語）× demilight（ウェイト名）× narrow（行間）** を名前に畳み込み、サイズ・`line-height`・`letter-spacing`・`font-weight` の 4 つが同じ接頭辞でぶら下がる
5. **`palt` を 1 要素も使っていない。** 可視 190 要素すべて `font-feature-settings: normal`。ただし書体は `palt` を持っており、実測で効く（normal 540px → palt **463.09px**）

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Base** (`#001f0f`): 深緑。本文・見出しの文字色（`--color-base-1`）。黒を使わない
- **Gradient Green**: `linear-gradient(90deg, #04937e 0%, #099d41 100%)` — CTA の面と、見出しの**文字そのもの**に流す（`background-clip: text`。下層で `gradientText: true` が 5 要素）
- **Gradient Green Hover**: `linear-gradient(90deg, #056a5b 0%, #08863c 100%)`
- **Green** (`#009b4a`): 単色のアクセント（`--color-green-7`）
- **Teal** (`#04937e`): グラデーションの左端（`--color-green-1`）

グリーンのランプは **21 段**宣言されている。主要なもの:

```css
--color-green-1:  #04937e;  --color-green-2:  #099d41;  --color-green-3:  #f8faf9;
--color-green-4:  #002f17;  --color-green-5:  #eff9f4;  --color-green-6:  #aec1b7;
--color-green-7:  #009b4a;  --color-green-9:  #008c43;  --color-green-10: #52cc8c;
--color-green-11: #294c31;  --color-green-12: #eaefec;  --color-green-13: #eaf7f0;
--color-green-15: #0aa546;  --color-green-17: #e5f5ed;  --color-green-18: #ccebdb;
--color-green-20: #f1f4f2;  --color-green-21: #5e8370;
```

**ネイビーのグラデーションも用意されている**（用途は別系統のセクション）。

```css
--color-gradient-navy: 90deg, #282761 0%, #232180 100%;
--color-gradient-navy-hover: 90deg, #312f87 0%, #3836b3 100%;
```

### Semantic（意味的な色）

- **Danger** (`#b30c00`): `--color-red-1`。背景 `#fbf3f2`、枠 `#f0cecc`

### Neutral（ニュートラル）

- **Background** (`#f8faf9`): ページ背景。**`html` に当たっており `body` は透明**（`--color-green-3`）
- **Surface** (`#ffffff`): カード
- **Text** (`#001f0f`): 本文
- **Gray**: `#242424` / `#646d68` / `#8f9c95` / `#b1bab5` / `#c7cdca` / `#d7dbd9` / `#e9ebea` / `#eef0ef` / `#f5f7f6`

> **グレーにも緑が入っている**（`#c7cdca` `#8f9c95` `#5e8370`）。純粋な無彩色ではない。
> **カテゴリーバッジの色は別系統**: 製品 `#5981a4`（青）/ コーポレート `#869c56`（オリーブ）。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: `Noto Sans JP`（Google Fonts の**可変フォント** `wght@100..900`）。可視 **174 要素**
- 多言語のため `Noto Sans KR` / `Noto Sans SC` も同じ URL で宣言されるが、**日本語ページでは JP 系だけが `loaded`**

```
https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900
  &family=Noto+Sans+KR:wght@100..900&family=Noto+Sans+SC:wght@100..900&family=Outfit:…
```

> `document.fonts` には `unloaded` が大量（351 件の `@font-face`）に出るが、これは **Google Fonts が和文を `unicode-range` で百数十本に分割するため**で異常ではない。判定はフォント要求件数（実測 39 件）と `fontFamily` の可視件数で行う。

### 3.2 欧文フォント

- **サンセリフ**: `Outfit`（Google Fonts の可変フォント `wght@100..900`）。可視 **13 要素**。`View More` やヒーローの `Nidec Journal` など、欧文の見出しとラベルに使う

### 3.3 font-family 指定

```css
:root {
  --ff-root:   "Noto Sans JP", sans-serif;
  --ff-outfit: "Outfit", sans-serif;
}
html, body {
  font-family: var(--ff-root);
  color: var(--color-base-1);
  font-size: calc(var(--root-fz) * 1px);   /* 16px */
  text-size-adjust: 100%;
}
body { line-height: var(--line-height); }  /* 1.5 */
```

欧文だけの要素に `--ff-outfit` を当てる。**和文に Outfit は当てない**（和文グリフを持たないため Noto Sans JP に落ちるが、混植の意図が消える）。

### 3.4 文字サイズ・ウェイト階層

**サイズは「カンプの px 値」をそのまま変数名にする。**

```css
:root {
  --spacing: calc(1 / 16 * 1rem);          /* ＝ 1px 相当の単位 */
  --text-9:  calc(var(--spacing) * 9);
  --text-14: calc(var(--spacing) * 14);
  --text-17: calc(var(--spacing) * 17);
  --text-48: calc(var(--spacing) * 48);
  --text-76: calc(var(--spacing) * 76);    /* 9〜76px まで 30 段以上 */
}
```

**ウェイトのトークンは 7 段。可変フォントだから中間値が作れる。**

```css
--font-weight-200: 200;  --font-weight-250: 250;  --font-weight-300: 300;
--font-weight-350: 350;  --font-weight-400: 400;  --font-weight-500: 500;
--font-weight-700: 700;
```

実測の分布（可視 190 要素）:

| ウェイト | 件数 | 用途 |
|---|---|---|
| 400 | 67 | ナビゲーション・ラベル |
| **350**（DemiLight） | **58** | **本文** |
| 500 | 45 | 小見出し |
| 700 | 10 | 強調 |
| 600 | 7 | — |
| 200 / 250 / 300 | 各 1 | — |

**本文は 400 ではなく 350。** `600` は `--font-weight-*` のトークンに存在しないので、設計外の値。

### 3.5 行間・字間

行間・字間もトークン化されている。

```css
--leading-66.7: 66.7%;  --leading-96: 96%;   --leading-100: 100%;  --leading-110: 110%;
--leading-120: 120%;    --leading-130: 130%; --leading-140: 140%;  --leading-170: 170%;
--leading-200: 200%;
--tracking-0: 0;  --tracking-1: .01em;  --tracking-2: .02em;
--tracking-3: .03em;  --tracking-4: .04em;
```

実測の行間比: **1.30（72 要素）/ 2.00（37）/ 1.70（22）/ 1.20（17）/ 1.00（17）**。
実測の字間: `normal`（112 要素）/ `0.34px`（22）/ `0.32px`（12）/ `-0.48px`（8）。

**ハーフレディングの除去に `1lh` 単位を使っている**（モダン CSS）。

```css
--leading-trim-v2: calc((1em - 1lh) / 2);
--spacing-leading-trim: calc(calc((1em - 1lh) / 2) * -1);
```

### 3.6 禁則処理・改行ルール

- `word-break` は `normal`（7 幅とも）。ブラウザ既定の禁則に任せる

### 3.7 OpenType 機能

- **可視 190 要素すべて `font-feature-settings: normal`。`palt` は 1 要素も使っていない**
- 書体側は対応しているので、詰めたい場合は足せる（実測 normal 540px → `"palt"` 463.09px / `"halt"` 480px）

### 3.8 縦書き

- 使用しない（2 ページとも 0 要素）

---

## 4. Component Stylings

### セマンティックなタイポグラフィ・トークン

このサイトの設計の中心。**1 つの名前にサイズ・行間・字間・ウェイトの 4 つがぶら下がる。**

```css
/* 命名: --text-{pc|sp}-{jp}-{要素}-{ウェイト名}-{変種} */
--text-pc-jp-text-p-demilight-narrow:                 calc(var(--spacing) * 17);  /* 17px */
--text-pc-jp-text-p-demilight-narrow--line-height:    130%;
--text-pc-jp-text-p-demilight-narrow--letter-spacing: 0;
--text-pc-jp-text-p-demilight-narrow--font-weight:    350;

--text-pc-jp-text-p-demilight-s:                      calc(var(--spacing) * 14);  /* 14px */
--text-pc-jp-text-p-demilight-s--line-height:         170%;                        /* narrow でない＝広い */
--text-pc-jp-text-p-demilight-s--font-weight:         350;

--text-sp-jp-text-p-demilight-narrow:                 calc(var(--spacing) * 14);  /* モバイルは 14px */
--text-sp-jp-text-form-demilight:                     calc(var(--spacing) * 16);
--text-sp-jp-text-form-demilight--letter-spacing:     .02em;                      /* フォームだけ字間を足す */
```

使うときは 4 つまとめて当てる。

```css
.p-text {
  font-size:      var(--text-pc-jp-text-p-demilight-narrow);
  line-height:    var(--text-pc-jp-text-p-demilight-narrow--line-height);
  letter-spacing: var(--text-pc-jp-text-p-demilight-narrow--letter-spacing);
  font-weight:    var(--text-pc-jp-text-p-demilight-narrow--font-weight);
}
```

### Buttons

```css
/* Primary — グラデーションの面 */
.c-btn {
  background: linear-gradient(var(--color-gradient-green));
  color: #ffffff;
  padding: 0 28px;
  border: none;
  border-radius: var(--radius-34);
}
.c-btn:hover { background: linear-gradient(var(--color-gradient-green-hover)); }
.c-btn__txt { font-size: calc(17 / var(--design-width) * 100vw); }

/* 矢印つきの横長ボタン — 右に余白を足す */
.c-btn--arrow { padding: 0 60px 0 28px; }

/* Secondary — 深緑の文字＋白地 */
.c-btn--outline { background: #ffffff; color: var(--color-base-1); }

.c-btn--small .c-btn__txt { font-size: calc(16 / var(--design-width) * 100vw); }
.c-btn__label {
  padding:       calc(2 / var(--design-width) * 100vw) calc(12 / var(--design-width) * 100vw);
  border-radius: calc(4 / var(--design-width) * 100vw);
  font-size:     calc(12 / var(--design-width) * 100vw);
}
```

### Badges / Chips

```css
.badge--product   { background: #5981a4; color: #ffffff; }  /* 製品 */
.badge--corporate { background: #869c56; color: #ffffff; }  /* コーポレート */
```

### Cards

```css
.c-card { background: #ffffff; border-radius: var(--radius-12); }
```

### 文字に流すグラデーション

```css
.heading--gradient {
  background: linear-gradient(90deg, #04937e 0%, #099d41 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

---

## 5. Layout Principles

### Spacing Scale

**`--spacing: calc(1 / 16 * 1rem)` を 1px 相当の単位として、すべてその倍数で書く。**

```css
--radius-4:  calc(var(--spacing) * 4);   --radius-6:  calc(var(--spacing) * 6);
--radius-8:  calc(var(--spacing) * 8);   --radius-12: calc(var(--spacing) * 12);
--radius-14: calc(var(--spacing) * 14);  --radius-16: calc(var(--spacing) * 16);
--radius-18: calc(var(--spacing) * 18);  --radius-20: calc(var(--spacing) * 20);
--radius-34: calc(var(--spacing) * 34);  /* ボタンのピル形 */
--radius-lg: .5rem;
```

### Container

```css
--design-width:          1468;   /* デスクトップの設計幅（767px 以下は 376） */
--contents-width:        1172;
--contents-side-padding: 54;
--_padding-inline-mobile: calc(var(--spacing) * 20);   /* 20px */
--global-navigation-height: calc(var(--spacing) * 80); /* 80px */
--container-padding: max(
  calc(var(--spacing) * 54),
  calc((100% - calc(var(--spacing) * 1172)) / 2)
);
```

コンテンツ幅 1172px、左右 54px、グローバルナビ 80px。

### Grid

- ヒーローは `<picture>` の写真（1440×550px）。**文字は実テキスト**（画像に焼き込んでいない）

---

## 6. Depth & Elevation

- 影はごく控えめ（2 種）。面の区別は `#f8faf9`（ページ）と `#ffffff`（カード）の塗り分けと角丸で行う
- **`backdrop-filter` のぼかし量もトークン**: `--blur-fixed-menu: calc(var(--spacing) * 10.5)` ＝ 10.5px
- z-index も 3 段だけ: `--z-index-modal: 100` / `--z-index-mega-menu: 100` / `--z-index-header: 1000`
- アニメーションはイージングをトークン化

```css
--ease-in:     cubic-bezier(.4, 0, 1, 1);
--ease-out:    cubic-bezier(0, 0, .2, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
--default-transition-duration: .15s;
--animate-tab-slide-in: tabSlideIn .6s cubic-bezier(.17, .15, .15, 1) forwards;
```

---

## 7. Do's and Don'ts

### Do（推奨）

- **本文のウェイトは 350（DemiLight）**。可変フォントを `wght@100..900` で読み込んでいるので中間値が出る
- サイズは `calc(カンプの px / var(--design-width) * 100vw)` で書く
- タイポグラフィは**サイズ・行間・字間・ウェイトの 4 つを 1 組**で当てる
- 文字色は黒ではなく深緑 `#001f0f`
- CTA はグラデーション `linear-gradient(90deg, #04937e 0%, #099d41 100%)` の面＋`--radius-34` のピル形
- グレーにもわずかに緑を混ぜる（`#8f9c95` `#c7cdca`）
- 角丸・余白・ぼかし量をすべて `--spacing` の倍数で揃える

### Don't（禁止）

- **`font-weight: 350` を 400 に丸めない**。サイトの軽さが消える。250・350 は設計された値
- **`font-weight: 600` を使わない**（`--font-weight-*` のトークンに存在しない。実測 7 要素は設計外）
- **`--design-width` を 1440 と決め打ちしない**。デスクトップは **1468**、モバイルは **376**
- **768px / 767px を跨ぐテストを省かない**。`html` が 16px → 32.6px に跳ぶ
- `rem` だけでレスポンシブを作らない（デスクトップ帯は `html` が固定で、要素側の `vw` が応答する）
- `palt` を「使っていないから不要」と読まない。書体は対応しており、足せば約 14% 詰まる
- 文字色・区切り線に純粋な無彩色のグレーを使わない（実サイトは緑を含む）

---

## 8. Responsive Behavior

### Breakpoints

**`html` / `body` の実測（7 幅）**:

| 幅 | `html` / `body` | `--design-width` |
|---|---|---|
| 1440px | 16px | 1468 |
| 1200px | 16px | 1468 |
| 1024px | 16px | 1468 |
| 834px | 16px | 1468 |
| 768px | 16px | 1468 |
| **767px** | **32.6383px** | **376** |
| 375px | 15.9574px | 376 |

```css
html, body { font-size: calc(var(--root-fz) * 1px); }           /* 768px 以上 ＝ 16px */
@media (max-width: 767px) {
  :root { --design-width: 376; }
  html, body { font-size: calc(var(--root-fz) / var(--design-width) * 100vw); }
}
```

**モバイルの設計幅は 376px**（375px でちょうど 15.96px ≒ 16px に着地する）。

要素側の実測（トップの `h2`）:

| 幅 | h2 |
|---|---|
| 1440 / 1200px | 48px（固定） |
| 1024px | 33.4823px |
| 834px | 27.2698px |
| 768px | 25.1117px |
| 767 / 375px | 30px（固定） |

**デスクトップ帯は px 固定、タブレット帯（768〜1024px）は要素側が `vw` で縮み、モバイルはルートが `vw` になる**という三段構え。

### タッチターゲット

- グローバルナビの高さ 80px（`--global-navigation-height`）
- モバイルの左右余白 20px（`--_padding-inline-mobile`）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体:     Noto Sans JP（可変 wght@100..900）＋ Outfit（欧文・可変）
太さ:     本文 350（DemiLight）。トークンは 200/250/300/350/400/500/700 の 7 段
サイズ:   calc(カンプのpx / var(--design-width) * 100vw)
設計幅:   --design-width: 1468（≥768px）/ 376（≤767px）
ルート:   html 16px 固定 → 767px で calc(16 / 376 * 100vw) に切り替わる
色:       #001f0f（文字・深緑）/ linear-gradient(90deg,#04937e,#099d41)（CTA）
背景:     #f8faf9（html に当てる。body は透明）/ #ffffff（カード）
行間:     --leading-130 / -170 / -200 など % のトークン
字間:     --tracking-0〜4（0 / .01 / .02 / .03 / .04em）
radius:   --radius-4〜34。ボタンは 34px のピル形
palt:     使っていない（0 要素）
```

### プロンプト例

> ニデックのコーポレートサイト風に、製品カテゴリーのカードセクションを作ってください。
> 和文は Noto Sans JP を可変フォント（`wght@100..900`）で読み込み、**本文のウェイトは 350**にしてください。
> 文字色は黒ではなく深緑 `#001f0f`、ページ背景は `#f8faf9` を `html` に当ててください。
> サイズは `calc(カンプのpx / var(--design-width) * 100vw)` の形で書き、
> `--design-width` はデスクトップ 1468 / 767px 以下は 376 に切り替えてください。
> CTA は `linear-gradient(90deg, #04937e 0%, #099d41 100%)` の面に白文字、角丸 34px のピル形。
> 見出しの一部は同じグラデーションを `background-clip: text` で文字に流してください。
> 角丸・余白は `--spacing: calc(1 / 16 * 1rem)` の倍数で揃え、`palt` は使わないでください。
