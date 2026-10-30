# DESIGN.md — クラウドサイン（CloudSign）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-01 / 対象: `https://www.cloudsign.jp/`, `/about/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **青は語り、マゼンタが押す。** 見出し・リンク・アイコンは `#0d64c9`、CTA だけが `#f42859`。**ブランド色でボタンを塗らない**という割り切りが設計の中心
- **密度**: 中。本文 16px / 行間 1.6 を基本に、長い説明文だけ 18px / 行間 2.0 まで開く。角丸 4px・影 1 種で平らに組む
- **キーワード**: 青とマゼンタ、palt 全面、em で刻む字間、radius 4px、丸数字 9 本

**このサイトの核心は 4 つある。**

1. **丸数字①〜⑨のために `@font-face` を 9 本積んでいる。** `NotoSansJP-circled-1` から `-9` までを、**`unicode-range` を 1 文字ずつ（`U+2460`〜`U+2468`）に絞って**宣言し、本文スタックの**先頭**に置いている。セルフホストしている `NotoSansJP-Regular.woff2` のサブセットに丸数字が入っていないための補填
2. **その 9 本はすべて `unloaded` で、それが正常。** 実測したトップ・下層とも**フォントのリクエストが 1 本も発生していない**（①〜⑨がページに無いため）。`unicode-range` で絞ってあるので、**丸数字が出るページでだけ 1 本ずつ落ちてくる**。`unloaded` を「読み込み失敗」と読み違えないこと
3. **字間は `em` の段で刻む。** `body` に `0.1em`、見出しに `0.04em`、説明文に `0.06〜0.08em`、キャッチに `0.15〜0.2em`。**`0.01 / 0.02 / 0.04 / 0.05 / 0.06 / 0.08 / 0.1 / 0.15 / 0.2em` の 9 段**が実在する。375px で `body` が 14px に落ちると字間も 1.4px に**自動で追従する**
4. **CTA の色がブランド色ではない。** マゼンタ `#f42859` は**資料ダウンロード系のボタン専用**（面 17 要素）。青 `#f42859` ではなく `#0d64c9` は見出し・リンク・副次ボタンに回っている。**「一番目立つ色＝一番押させたい操作」を 1 対 1 にしている**

**CSS Custom Properties は自社トークン 0 個。** 検出した 60 個はすべて WordPress / Gutenberg 由来（`--wp--preset--*` 49 個、WordPress admin 11 個）。値は CSS に直接書かれている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **CloudSign Blue** | **`#0d64c9`** | **文字 26 要素（トップ）/ 44 要素（下層）、面 6 要素**。見出し、`ログイン` `新規登録`、本文リンク、見積もり系の副次ボタン |
| **Magenta（主 CTA）** | **`#f42859`** | **面 17 要素（トップ）/ 8 要素（下層）**。`資料・デモを見る（無料）` `資料ダウンロード（無料）` のみ |

> **ボタンの色でサービスの色を使わない。** 青は「読むもの」（見出し・リンク）、マゼンタは「押すもの」（資料請求）。**青い面のボタンもあるが、それは問い合わせ・見積もりという一段弱い導線**で、マゼンタの下に置かれる。
> **3 つ目の CTA 色を足さない。** 強弱が壊れる。

### Neutral（ニュートラル）

青みを含んだ 6 段のグレースケールを持つ。**純黒・純グレーを使わない。**

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Text Primary** | **`#30363e`** | **トップ 171 / 下層 134 要素**で最多。本文・見出し |
| Text Secondary | `#495158` | 注釈（`※1：契約期間は…`）3 要素 |
| Text Tertiary | `#697482` | 認証制度のラベル（19 要素） |
| Text Muted | `#8897a7` | `※` の但し書き、`REASON 01`、連番（18 / 12 要素） |
| Text on Dark | `#bcc8d6` | フッターのリンク（12 / 13 要素） |
| Text Inverted Weak | `#dae3ed` | ヘッダーのドロワー見出し（42 要素） |
| Text on Color | `#ffffff` | マゼンタ CTA・青帯の文字（44 / 21 要素） |

### Surface（面）

| 面 | 実装値 | 用途 |
|----|--------|------|
| **Surface** | **`#fafcfd`** | **最多 56 要素**。機能一覧・料金表の地 |
| Surface Blue | `#eaf0f6` | 表のヘッダ行（30 要素） |
| Surface Cool | `#f4f7fa` | 認証制度のチップ、`クラウドサインで実現できること`（24 / 11 要素） |
| Surface Accent | `#f2f8ff` | キャッチの背面（2 要素）。最も青い面 |
| Surface Dark | `#49515a` | 導入事例の業種バッジ（18 要素）。白文字 |
| Background | `#ffffff` | ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`） |

> `viewportTopByArea` の先頭に `rgba(0,0,0,0.7)`（面積 1,308,952px²）が出るが、これは**非表示のモーダルオーバーレイ**（emotion 生成クラス `go1632949049`）。**地色ではない。**

### グラデーション

```css
/* 料金カードの下端をぼかす */
linear-gradient(#ffffff calc(100% - 16px), rgba(255, 255, 255, 0) 100%);
/* 見出しの下に敷く細い帯 */
linear-gradient(#ffffff 0%, #ffffff 117px, rgba(35, 81, 131, 0.2) 0%);
```

いずれも**面を分けるためではなく、境目を消すため**に使う。装飾のグラデーションは無い。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**。**セルフホスト**（`/wp-content/themes/cloudsign/web_fonts/NotoSansJP-{Regular,Medium,Bold}.woff2`）。`document.fonts` で 400 / 500 / 700 が `loaded`
- 明朝体は使わない
- **丸数字専用のサブセットを 9 本持つ**（下記 3.3）

### 3.2 欧文フォント

- **Inter**。同じくセルフホスト（`Inter_24pt-Regular.woff2` / `Inter_24pt-Bold.woff2` / `Inter_18pt-Medium.woff2`）。400 / 500 / 700 が `loaded`
- 可視は 15 要素（`REASON 01` `5` などの英数字ラベル）。**本文は和文スタック**で、Inter はスタックの中（`"Noto Sans JP"` の手前）に入って欧文グリフを担当する
- **Font Awesome 5 Free 900** が `loaded`（アイコン）。`Font Awesome 5 Brands` は `unloaded`
- `slick`（カルーセルの矢印）も `loaded`

### 3.3 font-family 指定

**実サイトの `body` のスタック（実測）:**

```css
font-family:
  NotoSansJP-circled-1, NotoSansJP-circled-2, NotoSansJP-circled-3,
  NotoSansJP-circled-4, NotoSansJP-circled-5, NotoSansJP-circled-6,
  NotoSansJP-circled-7, NotoSansJP-circled-8, NotoSansJP-circled-9,
  Inter, "Noto Sans JP", sans-serif;
```

**その 9 本はこう宣言されている:**

```css
@font-face {
  font-family: NotoSansJP-circled-1;
  src: url(https://fonts.gstatic.com/s/notosansjp/v55/…92.woff2) format("woff2");
  unicode-range: U+2460;   /* ① だけ */
}
@font-face { font-family: NotoSansJP-circled-2; src: url(…91.woff2); unicode-range: U+2461; } /* ② */
/* … -9 まで、U+2468（⑨）まで 1 文字ずつ */
```

> **これは「使われていない 9 本」ではない。** `unicode-range` が 1 文字に絞ってあるので、**そのページに①〜⑨が無ければブラウザは 1 バイトも取りに行かない**。実測でもフォントのリクエストは `NotoSansJP-*` と `Inter_*` と `fa-solid-900` と `slick` だけで、**`circled` は 1 本も発生していない**。
> **`document.fonts` が `unloaded` を返すのはこのため。** 読み込み失敗ではない。
> 使いどころは、**本文フォントをサブセットしていて丸数字が欠ける**ケース。Google Fonts の該当サブセットファイルを 1 文字ずつ借りてくる、という解法として流用できる。

**新規実装で同じ構えを取るなら:**

```css
/* 和文本体はセルフホスト、欠ける記号だけ unicode-range で補う */
font-family: NotoSansJP-circled-1, /* …-9 */, Inter, "Noto Sans JP",
             "Hiragino Sans", "Yu Gothic", sans-serif;
```

> 実サイトのスタックは **`sans-serif` の直前が `"Noto Sans JP"`** で、**OS フォントの具体名が無い**。Web フォントが落ちると環境依存になるので、`"Hiragino Sans"` / `"Yu Gothic"` を足すこと（→ 7. Don'ts）。

**外部ウィジェットが別スタックを持ち込んでいる。** 資料請求のフローティングバナー（3 要素）だけ `"Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Hiragino Sans", Meiryo, "MS PGothic", sans-serif` で組まれている。**サイト本体の指定ではないので真似ないこと。**

### 3.4 文字サイズ・ウェイト階層

`html` / `body` とも **16px**（`62.5%` のような縮小は無い）。**375px でのみ `body` が 14px に落ちる。**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero H1 | Noto Sans JP | **60px** | 700 | 1.30 (78px) | 継承 1.6px | 色 `#0d64c9`。375px で 42px |
| Hero Lead | Noto Sans JP | 28px | 700 | 1.40 | 1.6px | 色 `#0d64c9` |
| Heading 1 (下層) | Noto Sans JP | 36px | 700 | 1.00 | **7.2px (0.2em)** | 青帯の中の白文字 |
| Heading 2 ★ | Noto Sans JP | **40px** | 700 | **1.60 (64px)** | **0.04em** | セクション見出し（可視 10〜13 要素） |
| Heading 2 (tight) | Noto Sans JP | 40px | 700 | 1.10 (44px) | 0.04em | `選ばれる5つの理由` |
| Heading 3 | Noto Sans JP | 32px | **600 → 700 で描画** | 1.50–1.60 | 1.92px (0.06em) | 下層の特徴見出し（34 要素） |
| Heading 4 | Noto Sans JP | 24px | 700 | 1.60 (38.4px) | 1.6px | `コスト削減` `契約業務の効率化` |
| Card Title | Noto Sans JP | 20px | 700 | 1.60 (32px) | 0.8px (0.04em) | 色 `#0d64c9` |
| Long Body | Noto Sans JP | 18px | 400 | **2.00 (36px)** | 1.6px (0.089em) | **下層の説明文（27 要素）だけ行間 2.0** |
| Body ★ | Noto Sans JP | **16px** | 400 | **1.60 (25.6px)** | **1.6px (0.1em)** | **最多 104 要素** |
| Sub Body | Noto Sans JP | 14px | 400 / 500 | 1.60 (22.4px) | 0.56px (0.04em) | 下層の最多（92 要素） |
| Tagline | Noto Sans JP | 14px | 700 | 1.60 | **0.28px (0.02em)** | `契約業務の点を線にして、…` |
| Nav / UI ★ | Noto Sans JP | **12px** | 400 / 700 | **1.00** | **0.72px (0.06em)** | **87 要素**。ヘッダーの小リンク |
| Top Band | Noto Sans JP | 12px | 400 | 1.00 | **1.8px (0.15em)** | `これからの100年、新しい契約のかたち。` |
| Caption | Noto Sans JP | 10px | 400 | 1.40 | 0.4px (0.04em) | 料金表の脚注 |
| Label (EN) | **Inter** | 14px | 700 | — | — | `REASON 01` `POINT 01` |

**ウェイトは 400 / 500 / 700 の 3 本しか持っていない。**

> **下層の h3 に当たっている `font-weight: 600`（34 要素）は実体が無い。** `@font-face` は 400 / 500 / 700 の 3 本だけなので、CSS のフォントマッチングで**上方向の 700 が選ばれて描画される**。
> **600 を書かず 700 と書くこと。** 書き手の意図（700 より少し細く）は実装されていない。

### 3.5 行間・字間

- **本文の行間**: **1.60**（トップ 188 / 下層 181 要素）。`body` に `1.6` を書いて継承させる
- **長い説明文だけ 2.00**（下層の 18px 本文、27 要素）。**読ませる段落は 1 段開ける**という使い分け
- 見出しの行間も **1.60** が既定。詰めるのは `1.40`（Hero Lead）、`1.30`（Hero H1）、`1.10`（大見出し `選ばれる5つの理由`）、`1.00`（ナビ・青帯の h1）
- **字間は `em` で刻む。** `body` が `0.1em`

**実在する `em` の段（実測した px を font-size で割ったもの）:**

| em | px の例 | 使いどころ |
|----|---------|-----------|
| `0.01em` | 0.13px @13px | ヘッダーの第 1 階層ナビ |
| `0.02em` | 0.28px @14px | タグライン |
| **`0.04em`** | 0.48px @12px / 0.56px @14px / 0.64px @16px / 0.8px @20px / 1.6px @40px | **見出し・表の既定** |
| `0.05em` | 1.2px @24px | 料金プラン名 |
| `0.06em` | 0.72px @12px / 0.96px @16px / 1.92px @32px | ナビ・特徴見出し |
| `0.08em` | 1.12px @14px | 下層の説明文 |
| **`0.1em`** | **1.6px @16px** | **`body` の既定** |
| `0.15em` | 1.8px @12px / 2.4px @16px | 最上部の細帯、10 周年バナー |
| `0.2em` | 7.2px @36px | 下層 h1（青帯の白文字） |

**`em` と `px` 継承の違いに注意する。**

> `body` の `0.1em` は **16px に対して 1.6px と計算され、その px 値が子へ降りる**。だから `1.6px` という値は 2 通りの出方をする。
> - **継承**: h1 は desktop 60px で `1.6px`、375px では `body` が 14px になるのに合わせて **`1.4px`** になる（= 継承している証拠）
> - **自分で宣言**: h2 は desktop 40px で `1.6px`、375px では 23px に縮むと **`0.92px`**（= 0.04em）になる（= 自分で `0.04em` を持っている証拠）
>
> **サイズが違う要素に同じ px が並んでいたら継承、サイズに比例して px が動いていたら em 宣言**、と読み分ける。

### 3.6 禁則処理・改行ルール

```css
/* 実サイトは word-break / overflow-wrap / line-break を body で指定していない。 */
```

- **`word-break: auto-phrase` は使っていない。** 見出しの改行は `<br>` と `<span>` で手で割っている（`クラウドサインは「紙と印鑑」を「クラウド」に置き換え、` のように `「紙と印鑑」` を別 span にして色を変えている）
- `"clig" 0, "liga" 0`（合字オフ）が **30 要素**に入っている。欧文の `fi` `fl` 合字を切っている箇所
- **行頭禁止**: `）」』】〕〉》、。，．・：；？！`
- **行末禁止**: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **`palt` をサイト全体に効かせている。** 実測 **1,070 要素**（トップ）/ **684 要素**（下層）
- `"clig" 0, "liga" 0` が 30 要素（合字オフ）
- **`tnum` は使っていない。** 料金表（`11,000円` `145,200円`）も `palt` のまま
- **`palt` と `letter-spacing: 0.1em` はセット。** `palt` で詰めた分を `em` で開き直しているので、片方だけ真似ると字面が別物になる

### 3.8 縦書き

```css
/* 該当なし */
```

`writing-mode` は実測 0 件。

---

## 4. Component Stylings

### Buttons

**Primary（資料ダウンロード = 一番押させたい）**

- Background: **`#f42859`**
- Text: `#ffffff`
- Border Radius: **`4px`**
- Font: 16px / **700** / `letter-spacing: 1.6px`
- Padding: `22px 0`（高さ 60px、幅は親いっぱい）
- ヘッダー版: 13px / 700 / `padding: 0 32px` / 高さ 38px

**Secondary（問い合わせ・見積もり）**

- Background: `#0d64c9`
- Text: `#ffffff`
- Border Radius: `4px`
- 同寸法。**マゼンタの下、または横に並べる**

**Tertiary（枠線）**

- Background: `#ffffff`
- Text / Border: `#0d64c9`
- Border Radius: `4px`（`導入サポートページについてはこちら` だけ `6px`）
- ヘッダーの `新規登録` がこれ

> **radius は `4px` 一択。** 実測 50 要素。`4.8px` / `6.112px` は**外部のフローティングバナー**由来なので無視してよい。**pill も 0px も使わない。**

### Badges

- 導入事例の業種バッジ: 面 `#49515a` / 白文字 / 12px / 700 / `letter-spacing: 0.48px`（0.04em）
- 料金プランの `おすすめ`: 12px / 700 / `letter-spacing: 0.48px`

### Cards

- Background: `#ffffff` または `#fafcfd`
- Border Radius: **`4px`**（上辺だけの `4px 4px 0 0` が 18 要素 — 画像とテキストで分かれたカードの上半分）
- Shadow: `0 3px 6px rgba(0, 0, 0, 0.1)`（→ 6. Depth & Elevation）
- Border: なし

### Tables（料金表・機能比較）

- ヘッダ行: 面 `#eaf0f6` / `th` 14px / 700 / `letter-spacing: 0.04em` / 行間 1.57
- 本体: 面 `#fafcfd` / `td` 10–14px / 400 / 行間 1.40
- 罫線は淡いグレー、`border-radius` は外周の `4px` のみ

### Inputs

> **実測した 2 ページに通常のテキスト入力欄が無い**（資料請求は別ドメインのフォーム）。下は本サイトの値から導いた**推奨**。

- Background: `#ffffff`
- Border: 1px solid `#dae3ed`
- Border (focus): `outline: 2px solid #0d64c9`
- Border Radius: `4px`
- Padding: 12px 16px
- Font Size: 16px / `letter-spacing` は `body` から継承（1.6px）

**フォーカスリング**: **実サイトは `outline: none` で消している。**

> **これは真似てはいけない。** `a` にフォーカスを当てると `outline-style: none` が返る。キーボード操作でどこにいるか分からなくなる。
> **新規実装では `outline: 2px solid #0d64c9; outline-offset: 2px` を必ず明示すること**（→ 7. Don'ts）。

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実測 |
|-------|-------|------|
| XS | 10px | gap 4 件 |
| S | **16px** | **gap 4 件＝最多** |
| M | 25px / 30px / 35px | gap 各 1〜2 件 |
| L | 40px | gap 2 件 |
| XL | 50px / 56px | `0 50px` 2 件 / 56px 2 件 |
| XXL | 60px | gap 2 件 |

> **5 の倍数と 8 の倍数が混在している**（`10 / 16 / 25 / 30 / 35 / 40 / 50 / 56 / 60`）。**揃っていないので、新規実装では 8 の倍数（8 / 16 / 24 / 40 / 56）に寄せてよい。**

### Container

- **Max Width: 1000px**（下層の本文カラム）/ **1200px**（下層のワイドブロック）
- トップは全幅ブロックが主で、内側のカラムが `454px`（2 カラム）/ `520px` / `390px`（SP 相当）
- Full bleed: `1429px`（ヒーロー）
- Padding (horizontal): 16px（モバイル）/ 40px（デスクトップ）

### Grid

- Columns: 5（`選ばれる5つの理由`）/ 3（機能カード・お役立ち資料）/ 2（ヒーローのテキストと画面）
- Gutter: **16px**（カード）/ 40〜60px（セクション内の大きな分割）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 既定。表・バッジ・ボタンは影を持たない |
| **1 ★** | **`0 3px 6px rgba(0, 0, 0, 0.1)`** | **最多 21 要素（トップ）/ 12 要素（下層）**。導入事例カード、お役立ち資料カード |
| 1' | `0 2px 4px rgba(0, 0, 0, 0.1)` | ヘッダーのドロップダウン（1 要素） |
| 2 | `0 4px 20px rgba(48, 54, 62, 0.1)` | 下部のフローティング CTA（2 要素）。**色が `#30363e` の 10%**（黒ではない） |
| 2' | `0 1px 5px rgba(48, 54, 62, .1), 0 5px 9px rgba(13, 100, 201, .1)` | 10 周年バナー（1 要素）。**青の影を重ねている** |

- **階層 1 は `0 3px 6px rgba(0,0,0,.1)` に一本化されている。** カードは全部これ
- **浮かせたいものだけ `rgba(48, 54, 62, 0.1)` を使う。** 影の色を**本文色（`#30363e`）の 10%** にすることで、黒い影よりも面に馴染む
- `filter: drop-shadow()` / `text-shadow` は 0 件

---

## 7. Do's and Don'ts

### Do（推奨）

- **CTA はマゼンタ `#f42859`、副次ボタンは青 `#0d64c9`。** 色で押させる順番を示す
- **`border-radius` は `4px` 一択。** カードもボタンも表も同じ
- **字間は `em` で書く。** `body` に `0.1em`、見出しに `0.04em`、ナビに `0.06em`。px で書かない
- **`font-feature-settings: "palt"` を全面に効かせる。** 字間 `em` とセット
- 本文の行間は `1.6`。**読ませる長い段落だけ `2.0`** に開く
- 文字色は `#30363e`。弱めるときは `#697482` → `#8897a7` の順
- 面は `#fafcfd` → `#f4f7fa` → `#eaf0f6` の 3 段で階層を作る
- 影は `0 3px 6px rgba(0,0,0,.1)` に統一。**浮かせるものだけ `rgba(48,54,62,.1)`**
- 丸数字が必要なら、`unicode-range` を 1 文字に絞った `@font-face` をスタック先頭に置く

### Don't（禁止）

- **`outline: none` でフォーカスリングを消さない。** 実サイトはそうしているが、**これは直すべき実装**。`outline: 2px solid #0d64c9; outline-offset: 2px` を書くこと
- **`font-weight: 600` を使わない。** `@font-face` は 400 / 500 / 700 の 3 本だけで、600 は**上方向の 700 で描画される**。下層の h3 がそうなっている
- **字間を px で書かない。** 375px で `body` が 14px に落ちたとき、px だと字間だけ据え置かれて字面が崩れる
- **`palt` を外さない。** 1,070 要素に効いている
- **CTA を 3 色にしない。** マゼンタと青の 2 段で止める
- **`font-family` を実サイトのまま流用しない。** スタックの末尾が `"Noto Sans JP", sans-serif` で、**OS フォントの具体名が 1 つも無い**。`"Hiragino Sans", "Yu Gothic"` を足すこと
- **`border-radius: 4.8px` / `6.112px` を真似ない。** 外部のフローティングバナー由来で、サイト本体の値ではない
- **`NotoSansJP-circled-*` が `unloaded` なのを「読み込み失敗」と判断して直そうとしない。** `unicode-range` で絞ってあるので、該当文字が無いページでは読まれないのが正しい
- テキストの色に `#000000` を使わない（本サイトは `#30363e`）

---

## 8. Responsive Behavior

### Breakpoints

**すべて `min-width` で書かれたモバイルファースト。** `max-width` は 1 件も無い。

| Name | Width | 備考 |
|------|-------|------|
| Small Phone | ≥ 320px | 最小の基準 |
| Phone | ≥ 375px | **ここで `body` が 14px → 16px に切り替わる** |
| Phone Wide | ≥ 605px | |
| Tablet | ≥ 767px / ≥ 768px / ≥ 798px | 3 つの近い値が併存 |
| Desktop | ≥ 1230px / **≥ 1280px** | 主分岐 |
| Wide | ≥ 1325px | |

> `screen and (min-width: 768px) and (min-width: 1280px)` という**入れ子のまま出ている指定**がある（実質 1280px）。整理されていないが害は無い。

### ルートサイズ

- `html` は **16px 固定**（4 幅すべて）
- **`body` は 1440 / 1200 / 834px で 16px、375px で 14px。** 行間は 1.6 のまま（25.6px → 22.4px）、字間は `0.1em` なので **1.6px → 1.4px に自動追従**
- 見出しも連動する: **h1 60px → 42px**、**h2 40px → 23px**（字間は 1.6px → 0.92px = 0.04em のまま）

> **`body` のサイズを落とすだけで、字間も行間も見出しも比率で追従する設計。** `em` と比率で書いてあるからこうなる。**px に読み替えると、この自動追従が全部壊れる。**

### タッチターゲット

- ヘッダーの CTA は**高さ 38px** で WCAG の 44px を下回る。新規実装では 44px 以上を確保すること
- 本文中の CTA は高さ 60px で十分

### フォントサイズの調整

- デスクトップ 40px の h2 は 375px で 23px（約 58%）
- 本文 16px は 375px で 14px。**14px を下回らせない**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color (CTA):  #f42859
Primary Color (青):   #0d64c9
Text Color:           #30363e
Text Secondary:       #697482
Text Muted:           #8897a7
Background:           #ffffff
Surface:              #fafcfd / #f4f7fa / #eaf0f6
Font: Inter, "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif
Body Size: 16px（375px 未満は 14px）
Line Height: 1.6（長い段落のみ 2.0）
Letter Spacing: 0.1em（body）/ 0.04em（見出し・表）/ 0.06em（ナビ）
font-feature-settings: "palt"
Radius: 4px（すべて）
Shadow: 0 3px 6px rgba(0,0,0,.1)
Container: 1000px（本文）/ 1200px（ワイド）/ Gutter 16px
```

### プロンプト例

```
クラウドサインのデザインシステムに従って、料金プランの比較表を作ってください。

- フォント: Inter, "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif
- font-feature-settings: "palt" を全体に効かせる
- 字間は em で書く: body 0.1em、見出しとセル 0.04em、小さいラベル 0.06em
  （px で書かない）
- 本文 16px / line-height 1.6、セクション見出し 40px / 700 / line-height 1.6
- ウェイトは 400・500・700 のみ（600 は使わない）
- 表ヘッダは面 #eaf0f6 / 14px / 700、本体は面 #fafcfd / 14px / 400 / line-height 1.4
- プラン名は 24px / 700 / #0d64c9、「おすすめ」バッジは面 #49515a の白文字 12px
- 各プランの下に「資料ダウンロード（無料）」を面 #f42859・白文字・16px / 700 /
  padding 22px 0 / border-radius 4px で置く
- 「プランや料金について相談する」は白地に #0d64c9 の文字と枠、同じ radius 4px
- border-radius はすべて 4px。影はカードのみ 0 3px 6px rgba(0,0,0,.1)
- 文字色は #30363e、注釈は #8897a7
- コンテナ 1000px、カード間の gap は 16px
- フォーカス時は outline: 2px solid #0d64c9; outline-offset: 2px
```
