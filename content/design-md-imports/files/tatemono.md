# DESIGN.md — 東京建物（Tokyo Tatemono）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-15 / 対象: `https://tatemono.com/`, `/company/outline.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白地に**単一のブランドグリーン `#009348`** と**角丸 10px** だけで構成する。見出しは英語（Josefin Sans）を大きく、和文をその下に小さく置く二層構成
- **密度**: 中。本文 16px / 行間 1.8、字間は**足さない**（`palt` だけで詰める）
- **キーワード**: ブランドグリーン、角丸10px、Josefin Sans、palt のみ、5段階の流体ルート

**このサイトの核心は4つある。**

1. **`letter-spacing` を足さない。** 可視テキスト 193 要素のうち **`normal` が 177 要素**（下層）/ 219 要素（トップ）。詰めは **`palt` 1行**だけで作る（実測 849 要素／636 要素）。**「`palt` ＋ 字間を足し直す」型（東北新社・阪急阪神不動産）とは正反対**
2. **本文の既定ウェイトが 500 である。** `body { font-weight: 500 }`。400 ではない。見出しは 700、ヒーローのコピーは 500。**400 に落とすと全体が細くなる**
3. **ルートが 5 段階の補間式で、幅を狭めると文字が小さくなる区間がある。** `html` は 1440px で 10px、**992px で 8px まで縮み**、991px で **11.49px に跳ね上がる**。375px では 10.00px。**デスクトップより狭い 1024px の方が本文が小さい**（13.17px vs 16px）（→ 8 節）
4. **CSS Custom Properties が 1 つも無い。** `:root` は CSS 全文で **0 件**。色・サイズ・角丸すべて実値で書かれている

**`@font-face` は自社 CSS に 2 件（`icomoon` / `slick` のアイコン用）だけ。** 本文書体は Google Fonts から読む（フォント要求 39 件・`fonts.gstatic.com`）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Tatemono Green** | **`#009348`** | **ほぼ唯一のブランド色**。CTA の面、バッジの文字、見出しの装飾、メガメニューの地（655,331px²）。**可視 15 要素**（トップ）/ 7 要素（下層） |
| **Green 10%** | `rgba(0,147,72,0.1)` | バッジの面。文字は `#009348` のまま |
| **Green 45%** | `rgba(0,147,72,0.45)` | 画像の上に重ねる半透明の緑 |

### Semantic（意味的な色）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **注記・必須** | **`#b3000b`** | 可視 2 要素（トップ）/ 3 要素（下層）。注意書きのみ。**CTA には使わない** |

### Neutral（ニュートラル）

- **Background** (`#ffffff`): ページ背景
- **Text Primary** (`#333333`): 本文・見出し。**可視 103 要素**（トップ）/ 100 要素（下層）。`body` に宣言。純黒を使わない
- **Text on Dark** (`#ffffff`): 緑の面・写真の上（可視 123 要素）
- **Surface**: `#efefef`（タグの面）/ `#f2f2f2` / `#f8f8f8` / `#fafafa`（セクションの地・下層）
- **Accent Pale** (`#cddbd4`): 薄い緑がかったグレー（可視 10 要素）
- **Overlay**: `rgba(234,242,242,0.6)` / `rgba(240,240,240,0.9)` / `rgba(0,0,0,0.3)`
- **ヒーローの下敷き**: `linear-gradient(#ffffff 0px, #000000 90%, #000000 100%)`（`p-homeHero__slider` の `::before`）

> **ヒーローはカルーセル（1/5）。** `pageBackground.resolved` はスライドのグラデーションを返すが、**ページの地色は `#ffffff`**（下層の `viewportTopBySample (3/5)` で確定）。

---

## 3. Typography Rules

### 3.1 和文フォント

- **Noto Sans JP のみ**。Google Fonts 配信。**400 / 500 / 700 の3ウェイトすべて `loaded`**
- **`body` の既定は `font-weight: 500`**（Medium）。実測 500×123・400×71・700×56・900×5（トップ）

### 3.2 欧文フォント

- **Josefin Sans 400**（`loaded`）: **セクション見出しの英語**。`c-heading1st__sup` が 65px / 400 / `letter-spacing: 3.25px`（0.05em）、メガメニューの `l-header_gnavMega__ttlEn` が 47px / 400。**このサイトの見た目を決めている書体**
- **Montserrat 500**（`loaded`・トップのみ）: 数字・小さいラベル
- **Roboto 300 / 700**: 宣言はあるが **2 ページとも `unloaded`・可視 0 要素**。**使われていない**
- **Josefin Sans 700 / Montserrat 400** も `unloaded`

Google Fonts の URL（ここに書かれたウェイトが真）:

```
https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Roboto:wght@300;700&family=Montserrat:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap
```

> **Noto Sans JP に 900 は含まれていない。** 実測で `font-weight: 900` の要素が 5 つあるが、**読み込んでいるのは 400/500/700 だけ**なので 700 で描画される。**900 を書かない。**

### 3.3 font-family 指定

```css
body {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;                 /* 既定は Medium。400 ではない */
  font-size: 1.6rem;
  color: #333333;             /* 実サイトの宣言は 3 桁表記 */
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";    /* ここ1行で全体に効く */
}
```

> **実サイトの誤り**: 一部のコンポーネントが游ゴシックのスタックを持ち、しかも**2種類が混在している**。
>
> ```css
> /* .c-totop — Medium が Regular の後ろにあり、Windows で Medium が当たる（正しい） */
> font-family: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
>              游ゴシック, "Yu Gothic", "Noto Sans JP", sans-serif;
>
> /* .p-homeNews__tab-trigger — Medium が無い（Windows で細い Regular が当たる） */
> font-family: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
>              "Noto Sans JP", sans-serif;
> ```
>
> **どちらも自社クラス（`c-` / `p-` 接頭辞）で、サードパーティ由来ではない。** 再現するときは **`body` と同じ `"Noto Sans JP", sans-serif` に揃える**。游ゴシックを使うなら Medium を必ずスタックに入れる。

### 3.4 文字サイズ・ウェイト階層

| 用途 | クラス | サイズ（1440px） | ウェイト | 字間 | 行間 | 書体 |
|------|-------|-----------------|---------|------|------|------|
| **セクション見出し（英）** | `c-heading1st__sup` | **65px** | 400 | 3.25px（0.05em） | 1.1 | Josefin Sans |
| **メガメニュー見出し（英）** | `l-header_gnavMega__ttlEn` | 47px | 400 | `normal` | 1.1 | Josefin Sans |
| **ヒーローコピー（和）** | `p-homeHero__slider-heading-main` | **42px** | **500** | `normal` | 1.5 | Noto Sans JP |
| **事業見出し（和）** | `strong` | 50px | 700 | 10.5px（**0.21em**） | 1.0 | Noto Sans JP |
| 事業見出し（英） | `em` | 30px | 400 | 1.5px（0.05em） | 1.0 | Josefin Sans |
| 本文 | — | **16px** | 500 | `normal` | 1.8 | Noto Sans JP |
| 補足 | — | 14px | 400 | `normal` | 1.3 | Noto Sans JP |
| タグ・バッジ | `c-badge` | 12px | 500 | `normal` | 1.4 | Noto Sans JP |

- 実測サイズ分布: 16px×80・14px×69・12px×30・18px×20・50px×6・47px×5
- **英語見出しが和文見出しより大きい。** `Highlights` / `What's new` / `Our Business` が 65px、和文の節タイトルはその下に小さく置く

### 3.5 行間・字間

- **`line-height` は無単位の比率**。`body` は `1.8`（実測 `28.8px / 16px`）。各要素が自分のサイズで再計算する（実測比 1.20×58・1.30×49・1.00×54・1.10×22・1.50×11・1.80×9）
- **`letter-spacing` は原則 `normal`。** 可視 193 要素中 **177 要素が `normal`**（下層）。`body` に宣言が無い
- **字間を当てるのは装飾的な見出しだけ**: 50px の事業見出しが `10.5px`（0.21em）、Josefin Sans の見出しが `3.25px`（0.05em）、小さいラベルが `1.4px` / `1.5px` / `1.6px`
- CSS には `letter-spacing` の宣言が 24 種以上あるが（`.1em` `.25em` `.38em` `.5em` `1.125em` など）、**実際に描画されているのは一握り**。**宣言の多さを設計の厚みと読まない**

> **実サイトの誤り**: 12px のラベル1要素に `letter-spacing: -0.15em`（実測 `-1.8px`・「イノベーション拠点」）が当たっている。**文字が詰まりすぎて読みにくい。収まらないなら文字サイズかコンテナ幅を調整する。**

### 3.6 禁則処理・改行ルール

- `body` に **`word-wrap: break-word` / `overflow-wrap: break-word`**。長い URL・英単語がコンテナを突き破らない
- `word-break` の宣言は無し（`auto-phrase` も使っていない）

### 3.7 OpenType 機能

- **`font-feature-settings: "palt"` を `body` に1行**（ベンダープレフィックス付きで2行）。実測 **849 要素**（トップ）/ **636 要素**（下層）
- CSS 全文の `font-feature-settings` 宣言は **4 件**で、うち 2 件が `body`、1 件が `initial`（打ち消し）
- **`palt` 以外は使っていない**（`halt` / `tnum` の宣言は 0 件）

### 3.8 縦書き

- `writing-mode: vertical-rl` が **2 要素**だけ。装飾的なラベルで、本文組版としては使っていない
- CSS には `vertical-rl` / `tb-rl` / `vertical-lr` / `tb-lr` の4種が宣言されているが、**実際に出るのは 2 要素**。**縦組みのサイトとして再現しない**

---

## 4. Component Stylings

### Buttons

**角丸は 10px に統一。面色は緑ひとつ。**

| 種別 | 面 | 文字 | radius | padding | サイズ/ウェイト |
|------|----|------|--------|---------|----------------|
| **Primary** | `#009348` | `#ffffff` | **10px** | `0 30px 0 20px` | 18px / **700** |
| **Primary（小）** | `#009348` | `#ffffff` | **10px** | `14px 16px` | 16px / 700 |
| **Tab（非選択）** | `#ffffff` | `#333333` | **10px** | `14px 16px` | 16px / 700 |
| **Badge** | `rgba(0,147,72,0.1)` | `#009348` | **24px** | `3.6px 12px 3.9px` | 12px / 500 |
| **Tag** | `#efefef` | `#333333` | **10px** | `0` | 12px / 500 |
| **To Top** | `#009348` | `#ffffff` | **`10px 0 0`** | `20px 20px 0` | 16px / 700 |

```css
.c-btnBasic {
  background: #009348;
  color: #ffffff;
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: normal;   /* 字間は足さない */
}
.c-badge {
  background: rgba(0, 147, 72, 0.1);
  color: #009348;
  border-radius: 24px;      /* バッジだけ丸い */
  padding: 3.6px 12px 3.9px;
  font-size: 1.2rem;
  font-weight: 500;
}
```

> **Cookie 同意ボタンもサイト本体と同じ `c-btnBasic`**（`#009348` / radius 10px / 700）。外部 CMP の見た目が混ざっていない。

### Cards

- 角丸 **10px**（実測 33 要素）。丸いアイコン枠だけ `50%`（16 要素）
- 影は使わない

---

## 5. Layout Principles

- **角丸は 10px が基準**（33 要素）。バッジ 24px、円 50%、例外的に 8px / 15px
- **`box-shadow` は 0 種**（両ページ）。段差は面色（`#f2f2f2` / `#f8f8f8` / `#fafafa`）で作る
- 印刷用 CSS に `body { min-width: 1100px !important }` と `html { zoom: .7 !important }` があり、**レイアウトの設計幅は 1100px 以上**

---

## 6. Depth & Elevation

| レベル | 実装 |
|--------|------|
| 0 | 白地 |
| 1 | `#fafafa` / `#f8f8f8` / `#f2f2f2` の面でセクションを切る |
| 2 | `#efefef` のタグ・`rgba(0,147,72,0.1)` のバッジ |
| 3 | 写真の上に `rgba(0,0,0,0.3)` ／ `linear-gradient(#ffffff 0px, #000000 90%, #000000 100%)` |

**影は1つも使わない。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`body` に `font-weight: 500`** を書く（既定は Medium）
- **`body` に `font-feature-settings: "palt"` を1行**書いて継承させる
- **`letter-spacing` は `normal` のままにする。** 字間を当てるのは 50px の事業見出し（0.21em）と欧文見出し（0.05em）だけ
- **`border-radius: 10px`** を既定にする（バッジのみ 24px）
- **英語見出しを 65px / Josefin Sans で大きく置き、和文をその下に小さく置く**
- **`body` に `word-wrap: break-word` / `overflow-wrap: break-word`** を書く
- 文字色は `#333333`、面色は `#009348` の1色だけ

### Don't（禁止）

- **`font-weight: 900` を書かない。** Google Fonts の URL が `wght@400;500;700` なので 700 で出る
- **`letter-spacing` を本文に足さない**（`palt` だけで詰める設計）
- **`letter-spacing: -0.15em` のような負の値で文字を押し込まない**
- **Roboto を足さない**（宣言はあるが 2 ページとも `unloaded`・可視 0 要素）
- **游ゴシックのスタックを混ぜない。** 使うなら `"游ゴシック Medium", "Yu Gothic Medium"` を必ず含める
- **影を使わない**（`box-shadow` 0 種）
- **縦組みを実装しない**（実測 2 要素のみ）
- **CSS 変数で組まない**（このサイトは `:root` が 0 件。実値で書かれている）
- **ルートを単純な固定値にしない**（下の 5 段階の補間式が設計そのもの）

---

## 8. Responsive Behavior

### Breakpoints — 5 段階の補間式（Bootstrap のブレークポイントに沿う）

```css
html { font-size: 62.5%; }                                              /* ≥1400px → 10px */
@media (max-width:1399.9px){ html{ font-size: calc(56.25% + 1*(100vw - 1200px)/200) } }
@media (max-width:1199.9px){ html{ font-size: calc(50%    + 1.5*(100vw - 992px)/208) } }
@media (max-width: 991.9px){ html{ font-size: calc(62.5%  + 1.5*(100vw - 768px)/224) } }
@media (max-width: 767.9px){ html{ font-size: calc(62.5%  + 1.5*(100vw - 576px)/192) } }
@media (max-width: 575.9px){ html{ font-size: calc(58.5%  + 3*(100vw - 320px)/256) } }
```

`body` は **`1.6rem`**（デスクトップ）と **`1.4rem`**（991.9px 以下）の2段。

| 幅 | `html` | `body` | 備考 |
|----|--------|--------|------|
| 1920px | 10px | 16px | 上限で固定 |
| 1440px | 10px | 16px | |
| **1400px** | **10px** | 16px | ここから下が流体 |
| 1399px | 9.995px | 15.992px | |
| 1200px | 9px | 14.4px | |
| 1100px | 8.779px | 14.046px | |
| 1024px | 8.231px | **13.169px** | **最も文字が小さい領域** |
| **992px** | **8px** | **12.8px** | **最小** |
| **991px** | **11.493px** | **16.091px** | **1px 狭めるだけで本文が 1.26 倍に跳ぶ** |
| 900px | 10.884px | 15.238px | |
| 834px | 10.442px | 14.619px | |
| 769px | 10.007px | 14.009px | |
| 768px | 10px | 14px | |
| 767px | 11.492px | 16.089px | |
| **576px** | **10px** | **14px** | |
| **575px** | **12.348px** | **17.288px** | **ここにも崖がある** |
| 414px | 10.462px | 14.646px | |
| 375px | 10.005px | 14.006px | |
| 320px | 9.36px | 13.104px | 最小幅 |

> **この設計の性質を理解してから再現する。**
> - 各帯の**中では幅が狭くなるほど文字も小さくなる**（下限に向かって縮む）
> - **帯の境目で文字が跳ね上がる**（992→991px と 576→575px の2箇所）
> - 結果として **1024px の本文（13.17px）は 375px の本文（14.01px）より小さい**
> - **1 回の幅で測った値を「このサイトの文字サイズ」と書かない**

### フォントサイズの調整

- サイズはすべて `rem` 指定で、上の式に追従する
- **`letter-spacing` が `normal` なので、ルートが動いても字間は崩れない**（`em` で配っていたら全幅で再計算が必要になる）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
地色: #ffffff
ブランド: #009348（面・文字・装飾のすべてをこの1色で）
薄い緑: rgba(0,147,72,0.1)（バッジの面）
注記: #b3000b（注意書きのみ）
文字: #333333 / 反転 #ffffff
面: #fafafa / #f8f8f8 / #f2f2f2 / #efefef
和文: Noto Sans JP 400/500/700（既定は 500）
欧文: Josefin Sans 400（見出し）/ Montserrat 500（数字）
ルート: 5段階の補間式（下の表のとおり。単純な固定値にしない）
本文: 16px / 行間 1.8 / 字間 normal
見出し: 英語 65px Josefin Sans / 和文 50px weight 700・字間 0.21em
角丸: 10px（バッジのみ 24px、円 50%）
影: なし
OpenType: body に "palt" 1行。字間は足さない
```

### プロンプト例

> 東京建物のトーンで不動産デベロッパーのコーポレートサイトを作って。地色は白、文字は `#333333`、ブランド色は `#009348` の1色だけ。`body` に `font-family: "Noto Sans JP", sans-serif`・`font-weight: 500`・`line-height: 1.8`・`font-feature-settings: "palt"`・`word-wrap: break-word` を書く。**`letter-spacing` は `normal` のままにして、`palt` だけで詰める**。セクション見出しは Josefin Sans 65px / weight 400 / `letter-spacing: 0.05em` の英語を大きく置き、和文タイトルをその下に小さく添える。事業名の和文見出しだけ 50px / weight 700 / `letter-spacing: 0.21em`。ボタンは `#009348` の面＋`border-radius: 10px`＋weight 700、バッジは `rgba(0,147,72,0.1)` の面＋`border-radius: 24px`。影は使わない。`font-weight: 900` は使わない（読み込んでいるのは 400/500/700）。
