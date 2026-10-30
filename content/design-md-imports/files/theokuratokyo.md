# DESIGN.md — オークラ東京（The Okura Tokyo）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-02 / 対象: `https://theokuratokyo.jp/ja/`, `/ja/the-okura-heritage-wing/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **明朝体を主、ゴシック体を従にした二層構成。** 見出し・リード・ナビはヒラギノ明朝（Adobe Fonts 配信）、UI と本文は Noto Sans JP。角丸を使わず（`border-radius: 0`）、金茶 1 色と温白の地色で組む
- **密度**: 低い。写真を全画面で見せ、文字を絞る。トップの可視テキスト 391 要素に対し、下層は 83 要素
- **キーワード**: ヒラギノ明朝、金茶、角丸ゼロ、ウェイト 400 一本、館ごとの地色

**このサイトの核心は 5 つある。**

1. **和文の主役は明朝体で、ゴシックより多い。** `hiragino-mincho-pron`（Adobe Fonts 経由のヒラギノ明朝 ProN）が **可視 197 要素**、`Noto Sans JP` が 185 要素。**`h1`〜`h3` はすべて明朝**、ボタンのラベルとフォーム系がゴシック
2. **ウェイトは実質 400 の一本。** 可視 391 要素中 **370 要素が 400**。700 は 21 要素で、その大半が CMP 由来。**太字で強弱をつけない設計**で、階層はサイズと字間だけで作る
3. **館ごとに地色を持っている。** `--color-bg-prestige: #2e1d1d`（プレステージタワー＝濃い焦茶）、`--color-bg-heritage: #f2e7d6`（ヘリテージウイング＝クリーム）。ヘリテージの下層では `#f2e7d6` が **7 要素**に塗られる
4. **角丸を使わない。** `border-radius` の実装は `50%`（矢印の円・可視 41 要素）と `0` だけ。CTA も入力欄もカードも**すべて直角**
5. **アクセシビリティのための書体切り替えを持っている。** ヘッダー左のアイコンから `html[class^="a11y--font-"]` を付けて **B612 / Atkinson Hyperlegible / Luciole / Sylexiad Sans / Andika / OpenDyslexic / Eido** に差し替える。既定状態ではどれも `unloaded`（＝読み込まれない）

CSS Custom Properties は **自社 32 個 / プラットフォーム由来 1 個**（Plyr の `--plyr-color-main`）。色 14 個・書体 4 個・z-index 6 個・ヘッダー高さ 6 個という内訳。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 変数 | 実装値 | 実測 |
|------|------|--------|------|
| **ブランド金茶（文字）** | `--brand-primary` | **`#886d44`** | **可視 68 要素の文字色**。`詳細 →` `詳細を見る` `Okura History` などすべてのリンク・補助ラベル |
| **CTA 金（面）** | `--color-head-book` | **`#dcb374`** | **塗り面 15 要素**。`オンライン予約` `ご宿泊` `お食事` `予約する` `入会お申込み` — **予約系 CTA はすべてこの色** |
| **ゴールド（暗所用の文字）** | `--color-gold` | **`#f6d197`** | 写真の上に置く見出し。可視 6 要素（`オークラプレステージタワー` ほか）。RGB 版 `--color-gold-rgb: 246,209,151` |

> **金が 3 つあるのは役割が違うから。** 明るい地の上の文字は `#886d44`、面は `#dcb374`、暗い写真の上の文字は `#f6d197`。**明度で使い分けている**ので取り違えないこと。

### Surface（面色）

| 変数 | 実装値 | 用途・実測 |
|------|--------|-----------|
| `--color-bg` | **`#fbfaf6`** | **ページ背景（温白）。`html` に指定、可視 14 要素** |
| `--color-bg-alt` | **`#f7f4ee`** | 予約タブの非選択状態（可視 4 要素）、インスタグラム帯の下半分 |
| `--color-bg-category` | `#eeebe4` | カテゴリ面 |
| `--color-table-head` | `#f3efe6` | テーブルの見出し行 |
| **`--color-bg-prestige`** | **`#2e1d1d`** | **オークラ プレステージタワーの地色（濃い焦茶）。可視 2 要素** |
| **`--color-bg-heritage`** | **`#f2e7d6`** | **オークラ ヘリテージウイングの地色（クリーム）。下層で可視 7 要素** |
| `--bg-history` | `#111111` | Okura History ページ |
| `--bg-admin` | `#5f6a6a` | 管理バー（公開画面には出ない） |

### 会員プログラムの等級色

| 変数 | 実装値 |
|------|--------|
| `--color-table-member` | `#a15c1e` |
| `--color-table-loyal` | `#64a53b` |
| `--color-table-exclusive` | `#636596` |

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し。**このサイトは純黒を使う**（CMP を除いた可視分で確認）
- **Text on Dark** (`#ffffff`): 写真・黒面の上（可視 90 要素）
- **Text on Footer** (`#dddddd`): フッターのグループ案内（可視 7 要素）
- **Dark Surface** (`#333333`): `会員プログラム` ボタンの面
- **Border** (`#dddddd`): 予約タブの非選択枠
- **Background** (`#fbfaf6`): ページ背景

> **トップページの `heroCover` は `true`**（`div.o-cover` が 1440×900 を覆う `background-image`）。`pageBackground.resolved` は `html` を根拠に `#fbfaf6` を返しており、**ヒーローの色ではなく本来の地色**。下層でも同じ値。

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（主）**: **ヒラギノ明朝 ProN**。Adobe Fonts（Typekit）経由で `hiragino-mincho-pron` として配信。**可視 197 要素でサイト最多**。`h1` `h2` `h3`、リード文、電話番号、言語切替まで明朝
- **ゴシック体（従）**: **Noto Sans JP**。Google Fonts（`300,400,500,700` を要求、実際に使うのは **400 と 700 だけ**）。ボタン・フォーム・ナビ・フッター住所

### 3.2 欧文フォント

- **セリフ**: Georgia / Cambria / Times New Roman（明朝スタックのフォールバック）
- **サンセリフ**: Helvetica Neue / Helvetica / Arial
- **等幅**: SF Mono / Monaco / Inconsolata / Fira Mono / Droid Sans Mono / Source Code Pro
- **EB Garamond**: CMP（Didomi）由来で可視 1 要素のみ。**サイトの書体ではない**

### 3.3 font-family 指定

```css
:root {
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,
                 Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --font-sans:   "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif:  hiragino-mincho-pron, Georgia, Cambria, "Times New Roman",
                 "Droid Serif", Times, serif;
  --font-mono:   "SF Mono", "Monaco", "Inconsolata", "Fira Mono",
                 "Droid Sans Mono", "Source Code Pro", monospace;
}

/* 既定は OS スタック。Web フォントが来てから差し替える */
body, .sans, button, input, optgroup, select, textarea { font-family: var(--font-system); }
html.wf-notosansjp-n4-active body,
html[class^="a11y--font-"] body { font-family: var(--font-sans); }

/* 見出し・リード */
.serif { font-family: var(--font-serif); }
```

**実装の実態（そのまま真似しないこと）**:
- `--font-sans` も `--font-serif` も、**和文フォントの後に欧文のフォールバックだけが並ぶ**。Noto Sans JP やヒラギノ明朝が取得できないと、和文は各 OS の `sans-serif` / `serif` 既定に落ちる
- **明朝のフォールバックが `Georgia, Cambria, "Times New Roman"` という欧文セリフ**になっている。和文の保険（`"Hiragino Mincho ProN", "Yu Mincho", serif`）が入っていない。新規実装では和文の明朝を挟むこと

**フォールバックの考え方**:
- 和文を先頭に置き、最後に総称ファミリ
- Web Font Loader のクラス（`wf-notosansjp-n4-active`）で切り替えるため、**フォント未取得時は OS スタックのゴシックで表示される**（白紙にはならない）

### 3.4 文字サイズ・ウェイト階層

**ウェイトはほぼ 400 一本。**（可視 391 要素中 370 要素）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 | 明朝 | 38px | 400 | 1.25 (47.5px) | normal | 1281px 未満では 28px |
| H2 | 明朝 | 36px / 24px | 400 | 1.25 | normal | 館名は 24px |
| H3 | 明朝 | 28px / 24px | 400 | 1.25 | **2.4px**（24px のとき） | プラン名 |
| Room Title | 明朝 | 25.6px | 400 | 1.2 | normal | 下層の客室名 |
| Lead | 明朝 | 19.2px | 400 | 1.24 | normal | リード文（可視 24 要素） |
| Nav | ゴシック | 18px | 400 | 1.0 | normal | グローバルナビ（可視 65 要素） |
| Body | ゴシック | **16px** | 400 | **1.7 (27.2px)** | normal | **可視 142 要素でサイト最多** |
| Vertical Text | 明朝 | 17px（1600px〜 20px） | 400 | 1.55 (26.35px) | normal | 縦組みラベル（3.8 参照） |
| Sub Text | ゴシック | 17.6px | 400 | 1.25 | normal | 客室の説明 |
| Label | ゴシック | 14px | 400 | 1.25 | **1.4px** | `[宿泊者限定]` `[季節のプラン]` |
| Table | ゴシック | 14.4px | 400 | 1.7 (24.48px) | normal | 空室カレンダー |
| Caption | ゴシック | 13px | 400 | 1.1 | normal | 室数・面積の数値（可視 41 要素） |

### 3.5 行間・字間

- **本文の行間**: **1.7**（16px / 27.2px）。`body` に指定し**可視 99 要素**が継承
- **見出しの行間**: **1.25**（可視 63 要素）。リードは 1.24、客室名は 1.2
- **ナビ・ボタンの行間**: **1.0**（可視 75 要素）。パディングで高さを作る
- **本文の字間**: **`normal`**（可視 306 要素）。本文は触らない

**字間は px で焼いてある。em ではない。**

| 値 | 実測 | 当たっている要素 |
|----|------|------------------|
| `3.2px` | 2 要素 | `おすすめのご宿泊プラン` `所在地`（32px 見出し相当） |
| **`2.4px`** | **37 要素** | **プラン名・プラン種別（24px 見出し）。本文以外で最多** |
| `2.8px` | 下層 2 要素 | `プライベートな空間で味わう` |
| `2px` | 3 要素 | 住所・電話番号 |
| `1.6px` | 13 要素 | `[特別なひととき]` `[季節のプラン]` などの角括弧ラベル |
| `1.4px` | 11 要素 | `[宿泊者限定]` `Filter by` |
| `0.8px` | 2 要素 | ヘッダーの `アクセス` `オークラらしさ` |
| `0.32px` | 11 要素 | フィルタのチップ（`全て` `シーズナル`） |

**ガイドライン**:
- **字間を px で書くと、同じクラスでもフォントサイズを変えた瞬間に見た目の比率が崩れる。** 新規実装では `0.1em` 相当（24px → 2.4px / 32px → 3.2px / 16px → 1.6px / 14px → 1.4px）に読み替えて em で書いてよい。**実サイトは px 固定だが、意図は 0.1em**
- CSS 内には `.1rem`（= 1.6px）や `.0875rem`（= 1.4px）の宣言も混在しており、**同じ値に 3 通りの書き方がある**。統一するなら em に寄せる
- **本文（16px / 1.7 / normal）は変えないこと。** 明朝の見出しとゴシックの本文という対比が設計の中心

### 3.6 禁則処理・改行ルール

- `word-break` / `line-break` / `overflow-wrap` のグローバル宣言は無し（既定のまま）
- `word-break: auto-phrase` は未使用
- 見出しの改行位置は `<br>` で手動制御している（例: `日本の美意識とモダニズムの\n調和から生まれた…`）

### 3.7 OpenType 機能

```css
/* 宣言なし */
```

- **`font-feature-settings` を 1 要素も使っていない**（CSS 全文で 0 件、computed も `normal`）
- **`palt` による字詰めをしない。** 代わりに `letter-spacing` を**空ける**方向に使う（3.5 参照）。約物は詰めず、全体をゆったり組む構え
- 新規実装で `palt` を足すと、空けた字間と打ち消し合って意図が崩れる

### 3.8 縦書き

```css
.o-vtext > span {
  writing-mode: vertical-rl;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  vertical-align: middle;
}
/* 欧文のときだけ字間を空け、和文では空けない */
@media (min-width: 48em)    { .o-vtext { letter-spacing: 1.7px; } }
@media (min-width: 93.75em) { .o-vtext { font-size: 1.25rem; letter-spacing: 2px; } }
html[lang=ja] .o-vtext { letter-spacing: 0; }
```

- **実装された縦組みは下層の 3 要素**（`.o-vtext > span`、ヒラギノ明朝 17px / line-height 26.35px = 1.55）。写真の脇に立てるラベル
- **実測した字間は `normal`**（`html[lang=ja]` の `letter-spacing: 0` は上書きされていない）。日本語では字間を触らない、という意図だけ読み取ればよい
- **幅 1500px（93.75em）を超えると 20px / line-height 31px に拡大する。** 1 幅だけ測ってサイズを決めないこと

---

## 4. Component Stylings

### Buttons

**Primary（予約系 CTA）** — `オンライン予約` `ご宿泊` `お食事` `予約する` `入会お申込み`

- Background: `#dcb374`（`--color-head-book`）
- Text: `#000000`
- Font: 16px / weight 400 / letter-spacing normal
- Padding: ヘッダー `22px 30px 24px` ／ 本文内 `12.5px 30px 13.5px` ／ 小 `10px 20px 10.5px`
- Border: なし
- **Border Radius: `0`**
- Box Shadow: なし

> **下パディングが上より 0.5〜2px 大きい。** 和文のベースライン位置を考慮した視覚中央合わせで、意図的な非対称。

**Secondary（会員プログラム）**

- Background: `#333333` / Text: `#ffffff` / 16px / weight 400
- Padding: `22px 30px 24px` / Border Radius: `0`

**Tab Selected / Unselected**（予約ウィジェット）

| 状態 | Background | Text | Border |
|------|-----------|------|--------|
| 選択 | `#000000` | `#ffffff` | `1px solid #000000` |
| 非選択 | `#f7f4ee` | `#000000` | `1px solid #dddddd` |

- Font: 16px / weight 400 / Padding: `14px 10px 14px 30px` / Border Radius: `0`

**Filter Chip** — `全て` `シーズナル` `イベント`

- 選択: 背景 `#000000` / 文字 `#ffffff` / `1px solid #000000`
- Font: 16px / weight 400 / **letter-spacing `0.32px`** / Padding: `10px 30px` / Radius `0`

**Text Link** — `詳細 →` `詳細を見る`

- Text: `#886d44`（`--brand-primary`）/ 16px / weight 400
- 下線は引かず、矢印（`→`）を付ける

### Cards

- Background: `#fbfaf6` または写真
- Border: なし
- **Border Radius: `0`**
- Shadow: なし（6 章参照）
- 暗い写真の上に文字を置くときは `rgba(0,0,0,.85)` または `rgba(0,0,0,.3)` のオーバーレイ（可視 20 / 32 要素）

### Icon Buttons

- カルーセルの前後矢印は `border-radius: 50%`（**可視 41 要素**）。サイトで唯一の丸い形

### Inputs

- Font: 16px / weight 400 / line-height 1.4（22.4px）
- Background: `#ffffff` / Border Radius: `0`
- 日付・人数の `select` も同様

---

## 5. Layout Principles

### Container

| 用途 | Max Width | 実測 |
|------|-----------|------|
| **標準** | **1320px** | トップ 9 要素 / 下層 8 要素 |
| 記事幅 | **1140px** | 2〜3 要素 |
| 読み物幅 | **800px** | 3 要素 |
| カード | **340px** | **トップ 44 要素**（プラン・ダイニングのカード） |
| 狭幅 | 710px / 730px / 600px | セクション内のテキストブロック |

### Spacing

実測で出る `gap`: **10px**（6 件）/ 80px（2 件）/ `40px 20px`

- `gap` はあまり使わず、**余白はセクションの `padding` で作る**

### Header

| 変数 | 値 | 用途 |
|------|-----|------|
| `--header-normal` | **140px** | 通常のヘッダー高さ |
| `--header-fulls` | **250px** | 全画面ヒーロー時 |
| `--header-scrolled` | **70px** | スクロール後（**半分に縮む**） |
| `--mobile-bar` | 60px | モバイルの固定バー |

### z-index

```css
--zindex-max:   99999;
--zindex-pop:   1080;
--zindex-mbar:  1070;
--zindex-head:  1060;
--zindex-slick: 1050;
--zindex-low:   -1;
```

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | **サイトのほぼすべて** | — |
| 1 | `0 2px 6px rgb(0 0 0 / .2)` | 小さな浮き（CSS 1 回） | 可視 0 |
| 2 | **`0 0 40px rgb(0 0 0 / .25)`** | **予約ドロップダウン・会員メニュー** | **可視 2〜3 要素** |
| 2' | `0 0 40px rgb(0 0 0 / .15)` | 同系の淡い版（CSS 2 回） | — |

- **影は 40px の「全方向ぼかし」1 種が主役。** オフセットを持たせず（`0 0`）、**浮かせるというより霞ませる**使い方
- カード・ボタン・入力欄には影を付けない
- **奥行きは写真の明度差と `rgba(0,0,0,.85)` のオーバーレイで作る**

### Border Radius

| 値 | 用途 | 実測 |
|----|------|------|
| **`0`** | **CTA・タブ・カード・入力欄のすべて** | CSS 4 回 |
| `50%` | カルーセルの矢印 | **可視 41 要素 / CSS 12 回** |
| `34px` / `5px` / `3px` / `2px` | 外部ウィジェット・CMP 由来 | 可視ごく少数 |

---

## 7. Do's and Don'ts

### Do（推奨）

- **見出し・リードは明朝（`hiragino-mincho-pron`）、本文・UI はゴシック（Noto Sans JP）** に分ける
- **ウェイトは 400 で通す。** 強調はサイズ・字間・色で作る
- 本文は 16px / `line-height: 1.7` / `letter-spacing: normal`
- 見出しの字間は **サイズの 0.1 倍**（24px → 2.4px / 32px → 3.2px / 14px → 1.4px）
- CTA は `#dcb374` の面に黒文字、`border-radius: 0`
- 文字リンクは `#886d44`、暗い写真の上の見出しは `#f6d197`
- ページ背景は `#fbfaf6`。館ごとの面は `#2e1d1d`（プレステージ）と `#f2e7d6`（ヘリテージ）
- 影は `0 0 40px rgb(0 0 0 / .25)` をドロップダウンにだけ

### Don't（禁止）

- **角丸を付けない。** 円形の矢印以外はすべて `border-radius: 0`
- **`font-feature-settings: "palt"` を足さない**（サイトに 0 件。空けた字間と打ち消し合う）
- **700 を乱用しない**（可視 21 要素、ほぼ CMP 由来）
- **本文に字間を足さない**（`normal` が設計。可視 306 要素）
- カード・ボタンに影を付けない
- 明朝のフォールバックを `Georgia` だけで済ませない（**実サイトはそうなっているが、和文の明朝を挟むのが正しい**）
- 金 3 色（`#886d44` / `#dcb374` / `#f6d197`）を混同しない

---

## 8. Responsive Behavior

### Breakpoints（em 指定。16px 基準）

| Name | em | px | 実測の出現 |
|------|-----|-----|-----------|
| Mobile | `max-width: 47.99em` | ≤ 767px | 25 回 |
| Tablet | `min-width: 48em` | ≥ 768px | **105 回** |
| Laptop | `min-width: 63.75em` / `max-width: 64em` | ≥ 1020px / ≤ 1024px | **157 回（最多）** / 28 回 |
| Desktop | `min-width: 78.75em` | ≥ 1260px | 51 回 |
| Wide | `min-width: 85em` | ≥ 1360px | 75 回 |
| Extra Wide | `min-width: 93.75em` | ≥ 1500px | 縦組みの拡大 |

- **ブレークポイントを `em` で書いている。** px に直すときは 16 倍すること

### フォントサイズの調整

- **`html` も `body` も 4 幅（1440 / 1200 / 834 / 375px）すべてで 16px 固定。** 流体ルートではない
- 変わるのは見出しのみ: **`h1` は 1281px 以上で 38px、未満で 28px**（line-height はどちらも 1.25）
- 縦組みラベルは 1500px 以上で 17px → 20px

### タッチターゲット

- `オンライン予約`（高さ約 70px）、`ご宿泊`（約 45px）、予約タブ（約 50px）— いずれも 44px を満たす
- フィルタチップ（約 42px）はわずかに下回るため、モバイルでは高さを確保すること

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand (文字):   #886d44
CTA (面):       #dcb374
Gold (暗所):    #f6d197
Background:     #fbfaf6
Surface Alt:    #f7f4ee
Category:       #eeebe4
Prestige BG:    #2e1d1d
Heritage BG:    #f2e7d6
Text:           #000000
Text on Dark:   #ffffff
Text Footer:    #dddddd
Dark Surface:   #333333

Root Font Size: 16px（固定）
Font (明朝):    hiragino-mincho-pron, Georgia, Cambria, "Times New Roman", "Droid Serif", Times, serif
Font (ゴシック): "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, sans-serif
Weight:         400（ほぼ一本）
Body Size:      16px
Line Height:    1.7（本文） / 1.25（見出し） / 1.0（ナビ・ボタン）
Letter Spacing: normal（本文） / サイズ × 0.1（見出し: 24px→2.4px, 32px→3.2px, 14px→1.4px）
font-feature:   なし（palt を使わない）
Border Radius:  0（すべて） / 50%（カルーセル矢印のみ）
Shadow:         0 0 40px rgb(0 0 0 / .25)（ドロップダウンのみ）
Container:      1320px / 1140px / 800px / カード 340px
Header:         140px（通常） / 250px（全画面ヒーロー） / 70px（スクロール後）
Breakpoints:    48em / 63.75em / 78.75em / 85em（em 指定）
```

### プロンプト例

```
オークラ東京のデザインシステムに従って、客室一覧ページを作成してください。
- 見出し・リード・縦組みラベルは明朝（hiragino-mincho-pron, Georgia, Cambria, "Times New Roman", serif）、
  本文・ボタン・フォームはゴシック（"Noto Sans JP", "Helvetica Neue", Helvetica, Arial, sans-serif）
- font-weight はすべて 400。太字を使わず、サイズと字間で階層を作る
- 本文は 16px / line-height 1.7 / letter-spacing normal
- h1 は明朝 38px / line-height 1.25（1281px 未満は 28px）、客室名は明朝 25.6px / 1.2
- 見出しの字間はサイズの 0.1 倍（24px なら 2.4px、32px なら 3.2px）
- [宿泊者限定] のような角括弧ラベルは 14px / letter-spacing 1.4px
- ページ背景は #fbfaf6、ヘリテージの面は #f2e7d6、プレステージの面は #2e1d1d
- 予約 CTA は背景 #dcb374 / 文字 #000000 / 16px weight 400 / padding 12.5px 30px 13.5px /
  border-radius 0（下パディングを 1px 大きくする）
- テキストリンクは #886d44 に「→」を添え、下線は引かない
- border-radius はすべて 0。円形はカルーセルの矢印（50%）だけ
- box-shadow はドロップダウンの 0 0 40px rgb(0 0 0 / .25) のみ。カードには付けない
- font-feature-settings は使わない（palt を足さない）
- コンテナは 1320px、カードは 340px。ブレークポイントは em で 48em / 63.75em / 78.75em / 85em
```

---

## 補足: 計測で分かった実装の実態

- **ヒラギノ明朝は Adobe Fonts（Typekit）配信で、`document.fonts` の `@font-face` 一覧に出てこない。** Typekit は CSS を JS で動的注入するため `document.styleSheets` にも載らない。判定は (a) `distributions.fontFamily` に `hiragino-mincho-pron` というハイフン区切り小文字の Typekit 名が出ているか (b) `use.typekit.net/af/...` へのフォント取得があるか の 2 つ。実測で **Typekit のフォントファイルを 4 本取得**している
- **`document.fonts` に並ぶ `unloaded` の大半はアクセシビリティ用の予備書体。** B612 / Atkinson Hyperlegible / Luciole / Sylexiad Sans / Andika / OpenDyslexic / Eido は `html[class^="a11y--font-"]` で切り替えたときにだけ読まれるので、既定状態で `unloaded` なのが正常。**「Web フォント未使用」と誤読しないこと**
- **Google Fonts には `Noto Sans JP:300,400,500,700` を要求しているが、実際に描画されるのは 400 と 700 だけ。** 300 / 500 を当てても取得済みなので表示はされるが、**サイトの設計としては使われていない**
- **CMP（Didomi）が `Roboto` と `EB Garamond`、`border-radius: 5px / 3px`、`#f6d197` 系の色を持ち込む。** `interactive` の `同意して閉じる` が `#dcb374` なのは CMP をブランド色で上書きしているためで、**サイト本体の CTA 色と同一**。ほかの CMP 由来の値（Roboto / EB Garamond / radius 5px）はサイトの設計ではない
- **`:root` の `--color-bg-prestige` `--color-bg-heritage` はどちらも実際に塗られている**（トップ 2 要素 / 下層 7 要素）。宣言だけで使われていない変数ではない
