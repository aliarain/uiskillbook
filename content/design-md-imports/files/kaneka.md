# DESIGN.md — カネカ（KANEKA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-19 / 対象: `https://www.kaneka.co.jp/`, `https://www.kaneka.co.jp/corporate/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 化学メーカーのコーポレートサイト。白地に青、見出しの英字は **PT Serif**、ヒーローの和文コピーだけ **Shippori Mincho B1**。カードは左右どちらかだけを丸める部分角丸で組む
- **密度**: 中。本文 `line-height: 1.6` と締まった行間に、見出しだけ **負の字間**を当てて字面を詰める
- **キーワード**: 設計幅 1280px の丸ごと拡縮、負の字間、部分角丸、青が 2 つ、影ゼロ

**このサイトの核心は4つある。**

1. **デスクトップのページ全体が、ウィンドウ幅に比例して拡大縮小する。** `body { font-size: calc(16 / (var(--designW) + var(--scrollbarW)) * 100vw) }`、`--designW: 1280`。設計幅 1280px のときちょうど 16px になり、1440px では 18px、**768px では 9.6px** まで縮む。サイズも余白もすべて `em` なので全部が一緒に伸び縮みする
2. **767px でその式が切れて `1.6rem`（16px）固定に戻る。** 768px の本文 **9.6px** が、1px 狭めるだけで **16px** に跳ぶ（**1.67 倍**）。崖はここ 1 箇所
3. **`palt` を `body` に当てて全体を詰めた上から、見出しに負の `letter-spacing`（−0.07〜−0.08em）を重ねる。** 実測 847 要素に `palt`、見出し・リードに `-1.26px`〜`-1.62px`。**詰めて、さらに詰める**
4. **ほとんど同じ青が 2 つ同居している。** `#005CA2`（ヒーローの帯・グローバルナビ・丸アイコン）と `#005BAC`（ヒーロー内の CTA・セクション見出し・フッターのボタン）。**同じ画面に隣り合って出る**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **KANEKA Blue A** | **`#005CA2`** | 面 14 要素 / 文字 8 要素（トップ）。**ヒーローの斜め帯**（`.firstSlide_blue`）、グローバルナビのリンク文字、`ニュース一覧` ボタン、丸いリンクアイコン |
| **KANEKA Blue B** | **`#005BAC`** | 面 4 要素 / 文字 21 要素（トップ）。ヒーロー内の **`企業情報` CTA**（`.firstSlide_btn`）、`NEWS` / `ABOUT KANEKA` の見出し、フッターの `EXHIBITION` / `ONLINE SHOP` ボタン |
| **Blue Tint** | `#E8F4FC` | カード面（可視 3 要素）。`IR INFORMATION` / `ESG ACTIVITY` / `RECRUIT` の 3 枚 |

> **青が 2 つあるのは実装の実態。** `#005CA2` と `#005BAC` は RGB で `(0,92,162)` と `(0,91,172)`。肉眼ではまず区別できず、**ヒーローでは青い帯（A）の上に青いボタン（B）が載っている**。
> **新規実装では `#005BAC` に寄せてよい**（コーポレートカラーとして露出が多いのはこちら）**が、既存ページと並べるときは 2 色あることを前提にする。**

### Semantic（ニュース種別のバッジ）

`border-radius: 100px` のピル。`font-size` は本文の 0.72em、padding は `0 0.432em`。

| 種別 | 実装値 | 実測 |
|------|--------|------|
| **お知らせ** | **`#4EA126`**（緑） | 可視 8 要素 |
| **ニュースリリース** | **`#E87B21`**（橙） | 可視 9 要素 |
| **IRニュース** | **`#811011`**（濃赤） | 可視 7 要素 |

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・ナビ・リスト。**可視 64 要素（トップ）/ 31 要素（下層）で最多**。**このサイトは本文に純黒を使う**
- **Text on Dark** (`#ffffff`): ヒーローの見出し、青面上のテキスト（可視 21 要素）
- **Text Muted** (`#707070`): グローバルナビの見出し、補助文（可視 7〜8 要素）
- **Text Note** (`#7C7C7C`): 注意喚起バーの文言
- **Surface Light** (`#F2F2F2`): 注意喚起バーの面 / **`#F3F3F3`**: `RELATED LINKS` の面
- **Inactive** (`#C3C3C3`): JP / EN 切替の非選択側の面
- **Divider** (`#CECECE`): フッター上端の 1px 罫線 / **`#CECECE`〜`#CCCCCC`** 系
- **Background** (`#ffffff`): ページ背景（`heroCovered: true`。ヒーローが全面を覆うため `pageBackground.resolved` はヒーローの色を返すが、**コンテンツの地色は白**）

> `--btnColor: #ae5136`（赤茶）という CSS 変数が 1 つ宣言されているが、**2 ページとも可視 0 要素**。使わないこと。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・UI の既定）**: **Noto Sans JP**（Google Fonts の可変フォント `100 900`）。実測 102 要素（トップ）/ 64 要素（下層）
- **明朝体（ヒーローのコピー専用）**: **Shippori Mincho B1**（Google Fonts）。実測 **2 要素のみ** ——「カネカは世界を健康にする」の 1 行だけ
- OS ローカルの書体は使わない（スタックの受け皿は `sans-serif` / `serif` のみ）

### 3.2 欧文フォント

- **セリフ（英字見出し専用）**: **PT Serif**（400 / 700）。実測 9 要素（トップ）/ 8 要素（下層）。`NEWS` `KANEKA TOPICS` `ABOUT KANEKA` `RELATED LINKS` `Scroll Down` など、**セクション名の英字だけ**
- 本文中の数字・英字は Noto Sans JP の欧文グリフ

### 3.3 font-family 指定

```css
/* 本文・UI（body に 1 回） */
body { font-family: "Noto Sans JP", sans-serif; }

/* 英字のセクション見出し */
.section-title-en { font-family: "PT Serif", serif; }

/* ヒーローの和文コピー */
.firstSlide_ttl { font-family: "Shippori Mincho B1", serif; }
```

**スタックは 2 語だけ。** OS ローカル書体をチェーンに並べない潔い構成で、Web フォントが落ちたら generic family に落ちる。

### 3.4 文字サイズ・ウェイト階層

**サイズはすべて `body` に対する `em`。`body` 自体が画面幅で動くので、px は「その幅のときの値」でしかない。**
下の表は **設計幅 1280px のときの px**（＝ `em` × 16px）を正とし、1440px での実測値を併記する。

| Role | Font | 設計値(1280px) | 実測(1440px) | `em` | Weight | Line Height | Letter Spacing |
|------|------|----------------|--------------|------|--------|-------------|----------------|
| Hero Copy | Shippori Mincho B1 | **57.6px** | 64.8px | 3.6em | 600 | 1.4 | **−0.03em** |
| Section EN (大) | PT Serif | **38px** | 42.75px | 2.375em | 700 | 1.6 | normal |
| Section EN (中) | PT Serif | **28px** | 31.5px | 1.75em | 700 | 1.6 | normal |
| Page Title | Noto Sans JP | **25px** | 28.125px | 1.5625em | 700 | 1.44 | +0.02em |
| Heading 3 | Noto Sans JP | **18px** | 20.25px | 1.125em | 700 | 1.6 | **−0.08em** |
| Heading 3 (青) | Noto Sans JP | **16px** | 18px | 1em | 600 | 1.6 | **−0.07em** |
| Card Title | Noto Sans JP | **20px** | 22.5px | 1.25em | 700 | 1.6 | +0.02em |
| **Body** | Noto Sans JP | **16px** | **18px** | **1em** | 400 | **1.6** | normal |
| Lead（詰め） | Noto Sans JP | **16px** | 18px | 1em | 400 | 1.6 | **−0.08em** |
| Nav | Noto Sans JP | **15.36px** | 17.28px | 0.96em | 500 | 1.6 | normal |
| Label EN | PT Serif | **15px** | 16.875px | 1.0547em | 700 | 1.6 | normal |
| Caption | Noto Sans JP | **14px** | 15.75px | 0.875em | 400 | 1.6 | normal |
| Date | Noto Sans JP | **12.8px** | 14.4px | 0.8em | 400 | 1.6 | normal |
| Badge | Noto Sans JP | **11.52px** | 12.96px | 0.72em | 400 | 1.6 | normal |

**ウェイトは 400 / 500 / 600 / 700 の 4 段。** Noto Sans JP は可変（`100 900`）なので全部実在する。
PT Serif は 400 と 700 の 2 本で、**英字見出しは全部 700**。

### 3.5 行間・字間

```css
body {
  color: #000;
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.6;              /* ★無単位。各要素が自分のサイズで再計算する */
  overflow-wrap: anywhere;
  font-feature-settings: "palt"; /* ★ここで全体を詰める */
  /* font-size は 5 節を参照 */
}
```

- **行間は `1.6` が可視 108 要素（トップ）/ 57 要素（下層）で圧倒的。** 無単位なので安全に継承される
- 例外は `1.4`（ヒーロー）・`1.44`（ページ見出し）・`1.3`（英字ラベル）・`1.56`・`1.5625`
- **字間の既定は `normal`**（93 要素 / 54 要素）。**空けも詰めもしないのが基本**

**字間は「`palt` で詰めた上に、見出しだけ負の `em` を足す」二段構え。**

| 値 | 実測 | 用途 |
|----|------|------|
| `normal` | 93 要素 | 本文・ナビ・リスト（既定） |
| **`-0.08em`** | 9 要素 | リード文、カードの説明文 |
| **`-0.08em`**（h3） | 6 要素 | 小見出し（`-1.62px` / 20.25px） |
| **`-0.07em`** | 3 要素 | 青い小見出し（`-1.26px` / 18px） |
| **`-0.03em`** | 2 要素 | ヒーローのコピー |
| `+0.02em` 〜 `+0.0625em` | 下層の 7 要素 | 下層ページの見出し・英字ラベルは**逆に空ける** |

CSS に書かれている宣言値は `0.04 / 0.05 / 0.08 / 0.1 / 0.15 / 0.2em` と `-0.03 / -0.05 / -0.055 / -0.07 / -0.08em`。
**トップは負、下層は正に振れる**ので、1 ページだけ見て「詰めるサイト」と決めないこと。

### 3.6 禁則処理・改行ルール

```css
body { overflow-wrap: anywhere; }
```

**`overflow-wrap: anywhere` を `body` に 1 行。** 長い英単語や URL が枠を突き破るのを防ぐが、`break-all` と違って**必要になったときだけ**単語の途中で折る。
`word-break` と `word-break: auto-phrase` の宣言は無い。

### 3.7 OpenType 機能

```css
body       { font-feature-settings: "palt"; }
.ly_header { font-feature-settings: "palt"; }   /* 冗長だが実サイトはこう書いている */
.ly_footer { font-feature-settings: "palt"; }
```

**実測 847 要素（トップ）/ 325 要素（下層）に `palt` が効いている。** 宣言は `body` の 1 行で足り、header / footer への再宣言は無くても同じ結果になる。

> **実サイトの不具合: 縦組みの 3 要素にも横組み用の `palt` が当たっている。**
> `"palt" @ vertical-rl` が 3 要素（`.fv_scrollDown`）。`palt` は横方向のメトリクスを変える機能なので、**縦組みでは黙って無視される**（エラーも警告も出ない）。
> 縦組みで同じことをしたいなら **`vpal`** を使う。

### 3.8 縦書き

```css
/* ヒーロー左端の "Scroll Down" ラベル（27 × 122px）のみ */
.fv_scrollDown {
  writing-mode: vertical-rl;
  font-family: "PT Serif", serif;
  font-weight: 700;
  color: #ffffff;
  /* font-feature-settings: "palt" は効かない。使うなら "vpal" */
}
```

**実測は 3 要素だけ**（div / a / span のネスト）。本文の縦組みは無い。
縦に積むだけの単独ラベルなので、`flex-direction: row-reverse` は不要。

### 3.9 ヒーローの右半分は画像

ヒーローは Splide のスライダー（`slide_01.png` ほか 1440×900）。

- **左の青帯の中**「カネカは世界を健康にする」は **実テキスト**（Shippori Mincho B1 / 64.8px / 600 / `#ffffff` と `#005CA2` の 2 スライド）
- **右の**「カガクで / ネガイを / カナエル会社」は **`firstslide_copy.png`（281×185）の画像**

一字ずつ字間を取ったカタカナのタイポグラフィに見えるが、`distributions.fontFamily` に該当する要素が 1 つも出ない。**ここを `letter-spacing` で再現しようとしないこと。**

---

## 4. Component Stylings

### Buttons

```css
/* Primary A（ヒーロー内の CTA） */
.btn-primary {
  background: #005BAC;
  color: #ffffff;
  border: 1px solid #005BAC;
  border-radius: 0.375em;        /* 1440px 実測 6px */
  padding: 0.5em 2.25em 0.5em 0.9em;
  font-size: 1em;                /* 16px 相当 */
  font-weight: 700;
  letter-spacing: normal;
}

/* Primary B（ニュース一覧など） */
.btn-primary--a { background: #005CA2; border-color: #005CA2; }

/* Ghost（青面の上） */
.btn-ghost {
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0;
  padding: 0.5em 0.625em 0.5625em;
  font-weight: 700;
}

/* 反転（白地に青） */
.btn-invert { background: #ffffff; color: #005BAC; border: 1px solid #ffffff; }

/* ニュース種別のピル */
.badge {
  border-radius: 100px;
  padding: 0 0.432em;
  font-size: 0.72em;
  font-weight: 400;
  color: #ffffff;
}
.badge--info    { background: #4EA126; }   /* お知らせ */
.badge--release { background: #E87B21; }   /* ニュースリリース */
.badge--ir      { background: #811011; }   /* IRニュース */

/* 注意喚起バー */
.notice { background: #F2F2F2; color: #7C7C7C; border-radius: 100px; padding: 0.4em 1em; }
```

### Cards（部分角丸が特徴）

**カードを左右・上下で割って、外側だけを丸める。** これがこのサイトの見た目を決めている。

```css
.card-left   { border-radius: 10px 0 0 10px; }   /* IR INFORMATION / RECRUIT */
.card-right  { border-radius: 0 10px 10px 0; }
.card-bottom { border-radius: 0 0 10px 10px; }   /* EXHIBITION / ONLINE SHOP */
.lang-switch { border-radius: 6px 0 0 6px; }     /* JP / EN 切替 */

.card { border-radius: 10px; background: #E8F4FC; }   /* 単体のカードは四隅 10px */
```

- **角丸の種類**: `50%`（円アイコン・19 要素）、`10px`（カード・11 要素）、`100px`（ピル・7 要素）、`6px`（ボタン・3 要素）、部分角丸 4 種
- 下層ページは `11.25px`（＝ 1440px 実測。設計値 10px）

### Inputs

- `font-size: 1em` / `color: #000000` / 既定のまま。独自の枠線色を持たない

---

## 5. Layout Principles

### ルートの決め方（このサイトの最大の特徴）

```css
html { font-size: 62.5%; }          /* = 10px。7 幅すべてで固定 */

:root { --designW: 1280; }          /* 設計幅 */
                                    /* --scrollbarW は JS が実測して入れる */

/* デスクトップ: ウィンドウ幅に完全比例 */
body { font-size: calc(16 / (var(--designW) + var(--scrollbarW)) * 100vw); }

/* 767px 以下: 固定に戻す */
@media (max-width: 767px) {
  body { font-size: 1.6rem; }       /* = 16px */
}
```

**設計幅 1280px のとき `body` がちょうど 16px になる。** それ以外の幅では比例して動く。

| ウィンドウ幅 | `html` | `body` | 本文の見え方 |
|--------------|--------|--------|--------------|
| 1440px | 10px | **18px** | 設計より 12.5% 大きい |
| **1280px** | 10px | **16px** | **設計どおり** |
| 1200px | 10px | 15px | |
| 1024px | 10px | 12.8px | |
| 834px | 10px | 10.425px | かなり小さい |
| **768px** | 10px | **9.6px** | **最小** |
| **767px** | 10px | **16px** | **1.67 倍に跳ぶ** |
| 375px | 10px | 16px | 固定 |

**崖は 768 / 767 の 1 箇所だけ。** `html` は全幅で 10px 固定なので、**ルートだけ測ると「完全固定のサイト」に見える**。
`body` を測らないとこの設計には気づけない。

### サイズも余白も `em` で書く

`font-size` がウィンドウ幅に比例するので、**`em` で書いたものは全部一緒に伸び縮みする**。実測の padding に `8.1px` `28.35px` `7.776px` `4.3875px` `10.9688px` `5.0625px` `13.1719px` のような端数が並ぶのはこのため。

- **`px` を直書きしないこと。** 直書きすると、そこだけ拡縮から取り残される
- **`rem` も使わないこと。** `html` は 10px 固定なので追従しない（モバイルの `1.6rem` だけが例外）

### Container

- CSS 変数は **3 個だけ**（`--designW: 1280` / `--scrollbarW` / `--btnColor`）。コンテナ幅やグリッドのトークンは持たない
- **`--designW` は色でもサイズでもなく「設計幅という数値」。** 変数が 3 個しかないからといって設計が雑なわけではなく、**この 1 個がページ全体の寸法を決めている**

---

## 6. Depth & Elevation

**影を使わない。** `box-shadow` の実測は **両ページとも 0 種**。
`filter: drop-shadow()` も使っていない（ヒーローの白文字は青帯の上に載せてコントラストを確保している）。

階層は **面の色**（`#ffffff` / `#E8F4FC` / `#F2F2F2` / `#F3F3F3`）と **部分角丸**だけで作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html { font-size: 62.5% }` で 10px に落とし、`body` を `calc(16 / 1280 * 100vw)` にする。** 767px 以下は `1.6rem` 固定
- **サイズと余白は `body` に対する `em` で書く**（本文 `1em`、小見出し `1.125em`、バッジ `0.72em`）
- **`line-height: 1.6` を `body` に無単位で書く**
- **`font-feature-settings: "palt"` を `body` に 1 行**
- **見出し・リード文にだけ負の字間**（`-0.07em` 〜 `-0.08em`）。本文は `normal`
- **英字のセクション名は PT Serif 700**、和文の本文は Noto Sans JP
- **カードは部分角丸**（`10px 0 0 10px` / `0 0 10px 10px`）、バッジは `100px` のピル
- `overflow-wrap: anywhere` を `body` に

### Don't（禁止）

- **`px` を直書きしない。** `body` が流体なので、そこだけ拡縮から取り残される
- **`rem` でサイズを書かない。** `html` は 10px で固定なので画面幅に追従しない
- **`line-height` を `em` や `px` で書かない。** `1.6` の無単位だからこそ、`body` が動いても比率が保たれる
- **本文に負の字間を当てない。** 既定は `normal`（93 要素）。詰めるのは見出しとリードだけ
- **縦組みに `palt` を当てない。** 実サイトは 3 要素で当ててしまっているが効いていない。縦組みで詰めるなら **`vpal`**
- **ヒーロー右の「カガクでネガイをカナエル会社」をテキストで組まない。** 実体は PNG 画像
- **Libre Baskerville / Poppins / Noto Serif JP を読み込まない。** `@font-face` は宣言されているが**フォント要求は 0 件**（実際に読まれているのは Noto Sans JP・PT Serif・Shippori Mincho B1 の 3 ファミリー、計 4 ファイルだけ）
- **`--btnColor: #ae5136` を使わない。** 2 ページとも可視 0 要素
- **影を足さない。** 実測 0 種
- **Shippori Mincho B1 を見出し全般に広げない。** 使われているのはヒーローの 1 行（2 要素）だけ

---

## 8. Responsive Behavior

### Breakpoints

**`768px` / `767px` の 1 箇所だけ。** ここで流体から固定へ切り替わる（5 節の表を参照）。

### フォントサイズの調整

**個別のメディアクエリでサイズを書き直す必要はない。** `body` が画面幅に比例するので、`em` で書いたものは自動的に追従する。
767px 以下に落ちたときだけ、`body` が 16px 固定になることで**一気に読みやすいサイズへ戻る**。

### この設計の注意点

- **834px〜768px のタブレット帯で本文が 10.4px〜9.6px まで縮む。** 可読性は厳しいので、この帯を主要ターゲットにする案件では `--designW` を見直すか、中間のブレークポイントを足すこと
- `--scrollbarW` を JS で実測して分母に足しているのは、**スクロールバーの有無でレイアウトが跳ねるのを防ぐため**

### タッチターゲット

- ボタンの padding は `0.5em 2.25em 0.5em 0.9em`。767px 以下では `body` 16px なので高さ約 42px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体:     Noto Sans JP（可変 100-900）/ PT Serif 700（英字見出し）
          / Shippori Mincho B1 600（ヒーローのコピーのみ）
ルート:   html 62.5%（10px 固定）
          body = calc(16 / 1280 * 100vw)  ← 設計幅 1280px
          767px 以下は body 1.6rem（16px）固定
サイズ:   すべて body に対する em。px も rem も使わない
本文:     1em / line-height 1.6（無単位）/ letter-spacing normal / #000000
見出し:   1.125em·700·-0.08em / 英字は PT Serif 2.375em·700
ブランド: #005BAC（主）と #005CA2（帯・ナビ）の 2 色が同居
バッジ:   #4EA126 お知らせ / #E87B21 リリース / #811011 IR（radius 100px）
字詰め:   body に palt（847 要素）。縦組みには当てない
角丸:     10px のカードを部分角丸で割る（10px 0 0 10px など）/ 円 50% / ピル 100px
影:       使わない（実測 0 種）
変数:     --designW: 1280 だけが本質。色のトークンは無い
```

### プロンプト例

```
カネカ（www.kaneka.co.jp）の DESIGN.md に従って、製品紹介ページを作ってください。

- html に font-size: 62.5%、body に calc(16 / 1280 * 100vw) を置く
  （767px 以下のメディアクエリで body を 1.6rem に戻す）
- フォントサイズと padding は body に対する em で書く。px も rem も使わない
- body に line-height: 1.6（無単位）、font-feature-settings: "palt"、
  overflow-wrap: anywhere を書く
- 本文の letter-spacing は normal。小見出しだけ -0.08em を当てる
- 英字のセクション名は PT Serif 700、和文は Noto Sans JP
- カードは border-radius: 10px 0 0 10px のような部分角丸にする
- box-shadow は使わない。階層は面の色（#ffffff / #E8F4FC / #F2F2F2）で作る
- ブランド色は #005BAC、本文は純黒 #000000
```

---

## 10. 計測メモ（再現時の注意）

- **`html` だけ測ると完全固定に見える。** 7 幅（1440 / 1200 / 1024 / 834 / 768 / 767 / 375px）すべてで 10px。流体なのは `body` のほう
- **`fontSize` 分布の端数**（`17.28` `20.25` `12.96` `42.75` `64.8` `14.625` `15.75` `22.5` `13.5` `28.125px`）は、すべて **1440px のときの `em` × 18px**。1.125 で割ると設計幅 1280px での値（`15.36` `18` `11.52` `38` `57.6` `13` `14` `20` `12` `25px`）に戻る
- **`heroCovered: true`**（`img.hp_pcOnly` が 1440×900 を覆う）。`pageBackground.resolved` の `viewportTopByArea` は `firstSlide_blue` の `rgb(0,92,162)` を返すが、**コンテンツの地色は白**
- 下層ページの `pageBackground.resolved` が `rgb(112,112,112)` を返すのは **サンプル 1/1** の弱い根拠。無視してよい
- `@font-face` は 810 ブロック（Google Fonts の unicode-range 分割）あるが、**実際のフォント要求は 4 ファイル**
