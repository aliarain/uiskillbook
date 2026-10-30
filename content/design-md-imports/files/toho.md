# DESIGN.md — 東宝（TOHO）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-29 / 対象: `https://www.toho.co.jp/`, `/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **サイト全体に `font-feature-settings: "halt"` をかけ、全角約物を一律に半角幅へ詰める。** 色はほぼ黒の紺 `#03021F` と青 `#3036E6`、そして暗部から光へ抜ける radial-gradient。映画館の暗がりを地にして、作品のビジュアルを並べる
- **密度**: 高い。14px / 15px の文字でグリッドを詰め、行間 1.5 で組む。本文ブロックだけ 1.7
- **キーワード**: halt、ほぼ黒の紺、ラジアルグラデーション、角丸 4px、Google Fonts 1 本

**このサイトの核心は4つある。**

1. **`font-feature-settings: "halt"` が 1017 要素にかかっている。** 横組み専用（`"halt" @ horizontal-tb` 1017 要素、縦組みは 0）。下層ページでも 669 要素。**`palt` ではなく `halt`** で、文字ごとに詰め幅を変えるのではなく**全角約物を一律に半角幅へ揃える**。実測で 40px の `「東京」、（映画）。・` が `normal` 360px → `"halt"` 300px（**16.7% 詰まる**）
2. **ヒーローの `Moments for Life` は画像。** `<h1>` の中が `<img src="common/img/top/heading.webp" alt="Moments for Life" class="heading-img">`（**350×30px**）＋ 和文テキスト「その時間が、人生の力になる。」という構造。Times 風のセリフに見えるのはこの WebP
3. **`.font-junge { font-family: Junge, serif }` は定義されているが機能していない。** `Junge` は `document.fonts` で **`unloaded`**、**フォントファイルの要求 0 件**（gstatic への 37 件はすべて Noto 系）、`document.fonts.check('16px Junge')` が **false**、そして**適用要素 0**。`Noto Serif JP 500` も宣言のみで可視 0
4. **実際に描画される書体は 1 本だけ。** `"Noto Sans JP", Noto-Sans-Fallback, sans-serif` が可視 163 要素。ほかは素の `sans-serif` 7 要素と `"Noto Sans", sans-serif` 1 要素

CSS Custom Properties は **23 個すべて自社トークン**（プラットフォーム由来 0）。命名が **`--Bg_white` / `--Toho_Blue` / `--Primary_black` の PascalCase ＋ アンダースコア**に `--Owned-media-bg-gray` のケバブが混ざる。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Primary Blue** | **`#3036E6`** | **文字 16 要素 / 罫線 16 要素**（2 ページ合計）。`--Primary_blue`。ナビの選択状態、リンク、アクセント |
| **Primary Black** | **`#03021F`** | **文字 25 要素**。`--Primary_black`。ほぼ黒だが青みのある紺。このサイトの「黒」 |
| Toho Blue | `#003692` | **2 ページとも可視 0 要素。** `--Toho_Blue` という社名を冠したトークンだが、描画されている要素が無い |

> **社名のついた `--Toho_Blue: #003692` は実装されていない。** 画面に出る青は `--Primary_blue: #3036E6` の方。**`--Toho_Blue` を使わない。**

### Secondary（宣言のみ・単色としては未使用）

| トークン | 値 | 実測 |
|----------|----|------|
| `--Secondary_green` | `#70E1B6` | 面・文字・罫線とも **0 要素** |
| `--Secondary_yellow` | `#D6FFB6` | 単色では **0 要素**（グラデーションの停止色として 0% に登場） |
| `--Secondary_magenta` | `#CD82FF` | 単色では **0 要素** |
| `--Secondary_purple` | `#8752FA` | **0 要素** |

> **Secondary の 4 色は単色の面としては一度も出てこない。** 画面に現れるのは下のラジアルグラデーションの中だけで、しかも停止色は `#D6FFB6` / `#C191FF` / `#3548E5` / `#09011A` と**トークンの値と一致しない**。色の語彙は宣言されているが、実装はグラデーション 1 本に集約されている。

### Gradient（実装の主役）

```css
/* CTA と CMP の OK ボタン。可視 2 要素 */
background: radial-gradient(70% 220% at 100% 0%,
  rgb(214, 255, 182) 0%,     /* #D6FFB6 */
  rgb(193, 145, 255) 20%,    /* #C191FF */
  rgb(53, 72, 229) 55%,      /* #3548E5 */
  rgb(9, 1, 26) 100%);       /* #09011A */

/* セクションの地 */
background: linear-gradient(rgb(224, 224, 227) 27.4%, rgb(255, 255, 255) 100%);
```

> **`70% 220% at 100% 0%` と `0% / 20% / 55% / 100%` の停止位置を丸めない。** 右上の 1 点から黄緑→藤色→青→ほぼ黒へ抜ける、このサイト唯一の「色」。

### Neutral（ニュートラル）

- **Text White** (`#ffffff`): `--Text_white` / `--Bg_white`。**可視 53 要素**。暗い地の上の文字
- **Text Black** (`#2E313B`): `--Text_black`。可視 22 要素
- **Text Sub Black** (`#64687A`): `--Text_sub_black`。可視 10 要素 / 面 6 要素。補助情報・タグ
- **Text Sub White** (`#E0E0E3`): `--Text_sub_white`。可視 18 要素 / 面 8 要素
- **Divider Gray** (`#D1D3DE`): `--Devider_gray`（**綴りは実サイトのまま**）。**罫線 46 要素でこのサイト最多の区切り線**
- **Card Dark** (`#1a1a1a`): 作品カードの地（可視 34 要素）。トークン化されていない直書き
- **Bg Gray** (`#F5F5F5`): `--Bg_gray`。お知らせの帯（可視 4 要素）
- **Bg Sub Gray** (`#EBEBEB`): `--Bg_sub_gray`。面 7 要素
- **Secondary Gray** (`#A6A5AD`): `--Secondary_gray`。文字 3 要素
- **Owned Media Bg** (`#272930`): `--Owned-media-bg-gray`。**可視 0 要素**
- **Focus** (`#8ab4f8`): `--focus-color`
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255, 255, 255)` / 根拠 `viewportTopBySample`）

> **トップの `heroCover` は `heroCovered: true`（`div` が 1440×660 を `rgb(0,0,0)` で塗る）だが、`html` / `body` ともに塗り指定が無い。** コンテンツ領域の地色は **UA 既定の白**で、下層ページでは 12/12 サンプルが白。**ヒーローの黒をページ背景と取り違えない。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**（Google Fonts）。400 / 500 / 600 / 700 が `loaded`
- **明朝体**: 使わない。`Noto Serif JP 500` が `@font-face` にあるが **`unloaded` かつ可視 0 要素**
- `Noto-Sans-Fallback` の `@font-face` は **`status: error`**（読み込みに失敗している）。スタック 2 番目に置かれているが機能していない

### 3.2 欧文フォント

- **サンセリフ**: **Noto Sans**（`loaded`）。ただし可視 **1 要素**のみ。欧文の大半は Noto Sans JP のラテングリフで組まれる
- **セリフ**: **使えていない。** `.font-junge { font-family: Junge, serif }` が CSS にあるが、`Junge` は読み込まれない（フォント要求 0 件・`unloaded`・`check()` が false）。**適用要素も 0**
- ヒーローのセリフ体は**書体ではなく画像**（`heading.webp` 350×30px）

> **実サイトはこうだが、正しくはこう。** `.font-junge` を使うなら Google Fonts の `<link>`（`family=Junge`）を足す必要がある。現状は**クラスだけが存在して書体が来ない**ので、もし適用されれば generic の `serif` ＝ 閲覧環境の既定セリフ（macOS は Times、Windows は Times New Roman）で出る。**環境ごとに別の書体になる。**

### 3.3 font-family 指定

```css
/* 本文・UI（実際に描画されるのはこれ 1 本・可視 163 要素） */
font-family: "Noto Sans JP", Noto-Sans-Fallback, sans-serif;

/* 欧文（可視 1 要素） */
font-family: "Noto Sans", sans-serif;

/* CSS に定義はあるが適用 0 要素・Junge は読み込まれない */
.font-junge { font-family: Junge, serif; }
.font-junge.size-400 { font-weight: 400; }
```

**フォールバックの考え方**:
- 和文を先頭に置き、欧文も同じ書体で受ける**単一書体構成**
- 2 番目の `Noto-Sans-Fallback` は `@font-face` が `error` なので実質スキップされ、3 番目の `sans-serif` が受け皿になる
- **スタックが 3 語しかない。** 長いチェーンを持たない割り切り

### 3.4 文字サイズ・ウェイト階層

`html { font-size: 10px }` 固定（7 幅で確認）なので `1rem = 10px`。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Hero | — | — | — | — | **画像**（`heading.webp` 350×30px） |
| Hero Lead | 16px | 400 | 1.50 | normal | 「その時間が、人生の力になる。」白文字 |
| Heading 1 (下層) | 32px | 500 | 1.25 | normal | 下層ページの見出し |
| Heading 2 | 28px | 500 | 1.50 | normal | `h2-basis`。`ニュース` `TOHOブランド` |
| Heading 3 | 22px | 500 | 1.50 | normal | 可視 6 要素 |
| Body | **16px** | 400 | 27.2px (**1.70**) | normal | `body` の既定 |
| List / Card | **15px** | 400 | 1.50 | **0.6px (0.04em)** | ナビ・カードのラベル。可視 34 要素 |
| UI | **14px** | 400 | 1.50 | normal / 0.7px (0.05em) | **可視 62 要素で最多** |
| Caption | 13px | 400 | 1.50 | normal | 日付・補助 |
| Small | 12px | 400 / 700 | 1.25 | normal / 0.48px (0.04em) | タグ・CMP ボタン |
| Nav Emphasis | 15px | 400 | 1.50 | **2.25px (0.15em)** | `映画` など 2 要素のみ |

- **ウェイトは 400（133 要素）と 500（26）の 2 段で大半。** 700 は 8 要素（CMP ボタンと `visually-hidden` の見出し）、600 は 1 要素
- Google Fonts で 400 / 500 / 600 / 700 を読んでいるが、**実際に使っているのは 400 と 500**

### 3.5 行間・字間

- **本文の行間**: **1.70**（`body` は `line-height: 27.2px` = 16 × 1.7）
- **UI・カードの行間**: **1.50**（可視 78 要素で最多）
- **リストの行間**: 1.25（11 要素）／ ゆったりした段落は 1.94（8 要素）・2.27（4 要素）
- **字間**: **可視 79 要素が `normal`**。残りは**各要素が `em` を持つ型**

| 実測値 | サイズ | em 換算 | 件数 | 用途 |
|--------|--------|---------|------|------|
| `0.6px` | 15px | **0.04em** | 11 | カード・リストのラベル |
| `0.7px` | 14px | **0.05em** | 3 | UI テキスト |
| `0.8px` | 16px | **0.05em** | 2 | 本文サイズの強調 |
| `0.48px` | 12px | **0.04em** | 1 | タグ |
| `2.25px` | 15px | **0.15em** | 2 | ナビの一部（`映画`） |

> **`body` から継承しているのではなく、要素ごとに `em` を当てている。** サイズが違うと px 値も比例して変わる（15px→0.6px、14px→0.7px はいずれも 0.04〜0.05em）。**px に読み替えて配らないこと。**

**ガイドライン**:
- 本文 1.7、UI 1.5 の二層
- 字間は**既定 `normal`**。ラベル類にだけ `0.04em` 〜 `0.05em` を足す
- **`0.15em` はナビの 2 要素専用**。一般化しない

### 3.6 禁則処理・改行ルール

```css
/* body（トップ） */
word-break: normal;
```

- `word-break` / `line-break` / `auto-phrase` の特別な指定は無い。**約物の処理は `halt` に任せている**
- 行頭禁止: `）」』】〕〉》、。，．・：；？！` ／ 行末禁止: `（「『【〔〈《`（ブラウザ既定）

### 3.7 OpenType 機能

```css
/* サイト全体（横組み）に適用。実測 1017 要素 */
font-feature-settings: "halt";
```

- **`halt` は全角約物を一律に半角幅へ揃える機能。** 文字ごとに詰め幅を変える `palt` とは**別物**
- **`palt` は 1 要素も使っていない。** 両方を同時に書かない
- 実測で効いている: 40px の `「東京」、（映画）。・` が `normal` 360px → `"halt"` 300px
- **横組み専用。** クロス集計で `"halt" @ horizontal-tb` 1017 要素、縦組みでの適用は 0。縦組みに `halt` を当てると**軸が違うので黙って無視される**
- `tnum`（等幅数字）は未使用

### 3.8 縦書き

```css
/* 該当なし */
```

- **`writing-mode: vertical-rl` は 2 ページとも 0 要素**
- もし縦組みを足すなら、**その要素の `font-feature-settings` は `"halt"` ではなく `"vhal"` / `"vpal"` に差し替える**（横方向の `halt` は縦組みでは効かない）

---

## 4. Component Stylings

### Buttons

**Primary（グラデーション）**
- Background: `radial-gradient(70% 220% at 100% 0%, #D6FFB6 0%, #C191FF 20%, #3548E5 55%, #09011A 100%)`
- Text: `#ffffff`
- Padding: 16px 16px 16px 24px
- Border Radius: `9999px`
- Font Size: 16px / Weight 400

**Secondary（枠線・小）**
- Background: `#ffffff`
- Text: `#2E313B`
- Border: 1px solid `#D1D3DE`
- Padding: 8px
- Border Radius: **18px**
- Font Size: 12px / Weight **700**

**Tag（作品種別）**
- Background: `#64687A`
- Text: `#ffffff`
- Padding: 0 12px
- Border Radius: **4px**
- Font Size: 14px / Weight 400

### Inputs

- 検索バー: 幅いっぱい / 16px / weight 400
- Focus: `rgb(0, 66, 188) 0px 0px 0px 2px`（**青の 2px リング**。可視 1 要素）。`--focus-color: #8ab4f8` も宣言されている

### Cards

- Background: `#1a1a1a`（作品カード・可視 34 要素）／ `#ffffff`（情報カード）
- Border: `1px solid #D1D3DE`（罫線 46 要素）
- Border Radius: **4px**（可視 29 要素でこのサイト最多）／ 18px（6）／ 50%（20）
- Shadow: `none`

### Navigation

- グローバルナビ: 14px / 15px / weight 400 / 文字色 `#03021F`
- 選択状態・リンク: `#3036E6`
- スキップリンク（`a.skip-link`）は **UA 既定の青 `rgb(0, 0, 238)`** のまま。画面外に逃がしてあるため実害は無いが、**色を指定していない**

---

## 5. Layout Principles

### Spacing Scale

`html { font-size: 10px }` なので `rem` がそのまま 10 倍の px になる。gap の実測値は 4 の倍数で組まれる。

| 用途 | 実装値 |
|------|--------|
| チップ・タグの並び | `8px 12px` |
| リストの行間 | `5px` / `8px` / `12px` / `15px` |
| カードグリッド | `32px 24px` |
| セクション内 | `20px` |

### Container

- **Max Width: 1600px**（可視 12 要素。このサイトのコンテナ幅）
- 記事カラム: 888px
- Header Height: `--header-height: 127px`

### Grid

- 作品カードは 2 列 / 4 列のタイル。gap `32px 24px`
- Gutter: 24px

### Transition

トークンで 3 段に固定されている。

| Token | Value |
|-------|-------|
| `--transition-fast` | `all .15s` |
| `--transition-default` | `all .3s` |
| `--transition-slow` | `all .5s` |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。カード・ボタン・タグはすべてフラット** |
| Focus | `rgb(0, 66, 188) 0px 0px 0px 2px` | **フォーカスリングのみ**（可視 1 要素） |

> **影で階層を作らないサイト。** 区別は `1px solid #D1D3DE` の罫線（46 要素）と、`#ffffff` / `#F5F5F5` / `#EBEBEB` / `#1a1a1a` の面色で行う。**唯一の `box-shadow` はフォーカスリング。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`font-feature-settings: "halt"` をサイト全体（横組み）に当てる**。これがこのサイトの組版の核
- **font-family は `"Noto Sans JP", Noto-Sans-Fallback, sans-serif` の 1 本で通す**
- **ウェイトは 400 と 500 の 2 段で考える**
- **`html { font-size: 10px }` を前提に `rem` を使う**（`1.6rem` = 16px）
- **本文の行間は 1.70、UI は 1.50**
- **字間は既定 `normal`。ラベル類にだけ `0.04em` 〜 `0.05em` を `em` で当てる**（px で配らない）
- 「黒」は純黒ではなく **`#03021F`**（青みのある紺）
- 青は **`#3036E6`**
- 角丸は **4px**（カード・タグ）／ 18px（小ボタン）／ 9999px（Pill）
- 罫線は **`#D1D3DE`**
- コンテナ幅 **1600px**
- トランジションは `.15s` / `.3s` / `.5s` の 3 段から選ぶ
- 装飾的な色はラジアルグラデーション 1 本に集約する

### Don't（禁止）

- **`palt` を使わない。** このサイトは `halt` で統一されている（併記すると別物になる）
- **縦組みに `halt` を当てない。** 軸が違うので黙って無視される。縦組みなら `"vhal"` / `"vpal"`
- **`Junge` を前提に組まない。** CSS にクラスはあるが書体が 1 バイトも読み込まれず、適用要素も 0。**セリフが要るならヒーローと同じく画像にするか、`<link>` を足して読み込む**
- **`Noto Serif JP` を前提に組まない**（`@font-face` はあるが `unloaded`・可視 0）
- **`--Toho_Blue: #003692` を使わない。** 社名のトークンだが 2 ページとも可視 0。実装は `#3036E6`
- **Secondary の 4 色（`#70E1B6` / `#D6FFB6` / `#CD82FF` / `#8752FA`）を単色の面に使わない**（すべて可視 0。出番はグラデーションの中だけ）
- **`--Owned-media-bg-gray: #272930` を使わない**（可視 0）
- **`box-shadow` を足さない**（フォーカスリング以外 0 件）
- **本文色を `#000000` にしない**（実サイトは `#03021F` / `#2E313B`）
- **ヒーローの大見出しを Web フォントで実装しない**（実サイトは 350×30px の WebP 画像）
- **`0.15em` の字間を一般化しない**（ナビの 2 要素専用）
- 角丸を 8px や 12px にしない（語彙は 4px / 18px / 50% / 9999px）

---

## 8. Responsive Behavior

### Breakpoints

7 幅（1440 / 1200 / 1024 / 834 / 768 / 767 / 375px）で実測した結果、**ルートは完全固定**。

| 項目 | 値 | 備考 |
|------|----|----|
| `html` | **10px** | 全幅で不変。流体（`vw`）も `clamp()` も無し |
| `body` | **16px** | 全幅で不変 |
| `body` line-height | **27.2px**（1.70） | 全幅で不変 |
| Container | **1600px** | `max-width` |
| Header | **127px** | `--header-height` |

- **`rem` はルートが固定なので幅に追従しない。** サイズ変更はメディアクエリで明示的に行う
- 字間（`em` 指定）はフォントサイズに比例するので、**サイズを変えれば字間も自動で追従する**

### タッチターゲット

- Primary ボタン: padding `16px 16px 16px 24px` + 16px → 高さ約 56px（満たす）
- Secondary ボタン: padding `8px` + 12px → 高さ約 31px。**44px を下回るのでモバイルでは高さを確保すること**
- タグ: padding `0 12px` + 14px → 高さ約 21px。**不足**
- ナビリンク: 14〜15px / padding `0 0 3px` → **高さ約 24px。モバイルでは縦の当たり判定を確保すること**

### フォントサイズの調整

- 12 / 13 / 14 / 15 / 16px の本文系はブレークポイントをまたいで固定
- モバイルで縮めるなら見出し（28px / 32px）側で行う

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Blue:  #3036E6
Primary Black: #03021F   （純黒ではなく青みのある紺）
Text Black:    #2E313B
Text Sub:      #64687A
Text Light Bl: #97E8FF
Divider:       #D1D3DE
Bg Gray:       #F5F5F5 / #EBEBEB
Card Dark:     #1a1a1a
Background:    #ffffff
Gradient: radial-gradient(70% 220% at 100% 0%, #D6FFB6 0%, #C191FF 20%, #3548E5 55%, #09011A 100%)

Font: "Noto Sans JP", Noto-Sans-Fallback, sans-serif
  （Junge / Noto Serif JP は宣言のみで描画されない）
font-feature-settings: "halt"   ← サイト全体・横組みのみ。palt は使わない
Root: html 10px 固定 / body 16px（7 幅とも不変）
Body Size: 16px / line-height 1.70
UI: 14px / 15px / line-height 1.50
Weight: 400 と 500 の 2 段
Letter Spacing: normal 既定。ラベルに 0.04em〜0.05em を em で
Border Radius: 4px（カード・タグ） / 18px（小ボタン） / 9999px（Pill） / 50%
Box Shadow: none（フォーカスリングのみ）
Container: 1600px / Header 127px
Transition: .15s / .3s / .5s
```

### プロンプト例

```
東宝のデザインシステムに従って、作品一覧ページを作成してください。
- html { font-size: 10px } を前提に rem で書く（1.6rem = 16px）
- font-family は "Noto Sans JP", Noto-Sans-Fallback, sans-serif の 1 本だけ
- body に font-feature-settings: "halt" を当てて全角約物を半角幅に揃える（palt は使わない）
- 本文 16px / line-height 1.7、UI は 14〜15px / line-height 1.5
- ウェイトは 400 と 500 の 2 段だけ
- letter-spacing は既定 normal。カードのラベルにだけ 0.04em、UI に 0.05em を em で当てる
- 「黒」は #03021F、本文の黒は #2E313B、補助は #64687A
- 作品カードは #1a1a1a の地 / border-radius 4px、情報カードは白 + 1px solid #D1D3DE
- タグは #64687A 塗り / 白文字 / radius 4px / 14px / padding 0 12px
- 主要 CTA は radial-gradient(70% 220% at 100% 0%, #D6FFB6 0%, #C191FF 20%, #3548E5 55%, #09011A 100%)
  / 白文字 / border-radius 9999px / padding 16px 16px 16px 24px
- box-shadow は使わない（フォーカスは #0042BC の 2px リング）
- コンテナ幅 1600px、カードグリッドの gap は 32px 24px
- ヒーローの欧文見出しは Web フォントではなく画像で置く
```
