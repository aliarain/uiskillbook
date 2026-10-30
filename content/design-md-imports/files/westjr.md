# DESIGN.md — JR西日本（West Japan Railway）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-01 / 対象: `https://www.westjr.co.jp/`, `/company/info/outline/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **JR ブルー 1 色と、その反転。** 塗りは `#0065b1`、それ以外は白地に黒文字（`#111111`）。装飾色を持たず、色が増えるのは「状態」を示すときだけ
- **密度**: 高い。トップの最初の 1 画面に、グローバルナビ・運行情報 6 区分・重要なお知らせ・ヒーローが同時に載る。**運行状況が最優先**という情報設計
- **キーワード**: JR ブルー、palt グローバル、0.05em 継承、pill、2 世代の同居

**このサイトの核心は 4 つある。**

1. **`body` に 3 つ書いて、あとは全部継承させる。** `letter-spacing: 0.05em`（= **0.8px**）、`line-height: 1.7`、`font-feature-settings: "palt" 1` の 3 つを `body, html` に 1 回だけ書く。結果、**0.8px が可視 205 要素中 155 要素**、**`palt` が 749 要素**に効いている。**子要素で字間を再宣言しない**のが実装の構え
2. **`border-radius` は 8 種類あるが、設計上は 2 つしかない。** `14px / 18px / 20px / 34px / 62px / 13px / 12px / 9999px` は**すべて pill（要素の高さの半分）**で、値が違うのは高さが違うからにすぎない。本物の角丸は **`24px` のカード**だけ
3. **下層ページは 2018 年版の別デザインシステムで、サイズが 16/13 倍に膨らんでいる。** `/company/info/` 配下は `common.css?date=20180820` を読み、`body { font-size: 81.25% }`（= 13px）を基準にした `.text10`〜`.text19` という % スケールで組まれている。ところが**新デザインの CSS が `body` を 16px に差し替えた**ため、`p, li, dt, dd, th, td { font-size: 107.692% }` が **16 × 1.07692 = 17.2308px** で出る。**意図は 14px、実装は 17.23px**
4. **フォーカスリングだけオレンジ。** `#ff7600` の `solid 2px`。サイト中が青なので、**フォーカスを青にすると埋もれる**という判断。青いサイトを作るときに真似る価値がある

**CSS Custom Properties は 0 個**（トップ・下層とも `total: 0`）。トークンは持たず、値はすべて CSS に直接書かれている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **JR ブルー** | **`#0065b1`** | **面 10 要素 / 文字 10 要素**。すべての塗りボタン、`本文へスキップ`、下層のリンク |
| 見出し帯のブルー | `#0068b4` | 下層ページの h1 帯（可視面積 182,813px²） |
| ボタン文字のブルー | `#0068b7` | 下層の `button-grey` 内の文字（4 要素） |
| リンクのブルー | `#0075d3` | トップの `広島・山口地区`（1 要素） |

> **青が 4 つある。** `#0065b1` / `#0068b4` / `#0068b7` / `#0075d3` は目視では区別できない近さで、**これは設計ではなく 2 世代の CSS が同居した結果**。
> **新規実装では `#0065b1` に統一すること。** 既存ページと並べるときだけ、4 つあることを前提にする。

### Semantic（意味的な色）

運行情報のステータスは**色ではなく SVG アイコン**で表す。

| 状態 | 実装 |
|------|------|
| 運転見合わせ | `/assets/images/top/Ic_StatusStop.svg`（赤い ×） |
| 遅延 | `/assets/images/top/Ic_StatusDelay.svg`（黄の △） |
| 注意・お知らせ | `/assets/images/top/Ic_StatusNotice.svg`（黄の ！） |
| 平常運転 | 同系の ○ アイコン |

- **記号は文字ではなく `<img>` の SVG。** テキストは区間名（`北陸エリア` 15px / `letter-spacing: 0.75px` / `#111111`）だけで、**色を持たない**
- **Warning Surface** (`#fff7dd`): `重要なお知らせ` の帯。`border-radius: 0 0 24px 24px` で下だけ丸める
- **色覚に依存しない設計。** 状態はアイコンの形で分かるようになっており、文字色は常に `#111111`。**この構えをそのまま守ること**

### カテゴリバッジ

| バッジ | 面 | 文字 |
|--------|----|------|
| 経営関連 | `#80c8f0` | `#111111` |
| グループ会社 | `#8bdfea` | `#111111` |

いずれも `12px / 500 / letter-spacing: 0.8px`、`border-radius: 12px`（= pill）。**バッジの面は淡い色にして文字は黒のまま**で、白抜きにしない。

### Neutral（ニュートラル）

- **Text Primary** (`#111111`): 本文・見出し。**トップ 146 / 下層 45 要素**で最多。`#000000` でも `#333333` でもない
- **Text on Blue** (`#ffffff`): 塗りボタン・見出し帯の文字（48 / 37 要素）
- **Text Legacy** (`#333333`): **下層のパンくずだけ**（4 要素）。2018 年版 CSS の名残
- **Surface Gray** (`#f2f2f2`): 下層の定義表（`th`）の面（16 要素）
- **Surface Gray Cool** (`#f2f3f5`): 下層のパンくずバー（4 要素）
- **Divider** (`#d6d6d6`): グローバルナビの区切り（`li::before`）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`。トップ・下層とも同じ）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**。Google Fonts の**可変フォント**（`wght@100..900`）を読み込み、`document.fonts` で `loaded`。可視 186 要素（トップ）/ 90 要素（下層）
- 明朝体は使わない
- OS フォントへのフォールバックは `ヒラギノ角ゴ ProN` → `BIZ UDPGothic` → `メイリオ` → `Meiryo` → `sans-serif`

### 3.2 欧文フォント

- **Inter**。Google Fonts の可変フォント（`wght@100..900`）、`loaded`。`MOBILITY` `LIFE SERVICE` `INFRASTRUCTURE SOLUTIONS` などの**英字見出し専用**（可視 19 要素）
- 本文中の数字・英字は **Noto Sans JP の欧文グリフ**で出る

### 3.3 font-family 指定

**実サイトの CSS（`assets/css/common.css`）はこうなっている:**

```css
@charset "UTF-8";
body, html {
  font-family: "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN",
               "BIZ UDPGothic", "メイリオ", Meiryo, sans-serif;
  font-size: 62.5%;
  line-height: 1.6;
  font-feature-settings: "palt" 1;
}
```

> **実際のバイト列では、和文のフォント名が文字化けしている。**
> `@charset "UTF-8"` と書いてあるのに `"ヒラギノ角ゴ ProN"` と `"メイリオ"` の部分だけ **Shift_JIS のまま**配信されており、ブラウザは `"�q���M..."` という読めない名前として受け取る（computed style にもそのまま出る）。
> **実害は出ていない。** 化けた名前の**直後に ASCII の別名**（`"Hiragino Kaku Gothic ProN"` / `Meiryo`）が置いてあるので、フォールバックはそこで拾われる。だから 10 年気づかれずに残っている。
> **真似るなら ASCII 名だけで書くこと。** 和文名はあってもなくても動くが、エンコーディング事故の種になる。

```css
/* 正しく書き直したもの（新規実装はこちら） */
font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic",
             Meiryo, sans-serif;

/* 欧文見出し */
font-family: Inter, "Helvetica Neue", Arial, Roboto, sans-serif;
```

**もう 1 つの「宣言 ≠ 実装」**: 上の CSS は `body, html` の両方に `font-size: 62.5%` と `line-height: 1.6` を書いているが、**実測は `html` 10px / `body` 16px / `line-height` 1.7**（27.2px ÷ 16px）。後続のルールが `body` を上書きしている。**数値は上の宣言ではなく、下の表の実測値に従うこと。**

### 3.4 文字サイズ・ウェイト階層

`html` は 4 幅（1440 / 1200 / 834 / 375px）すべてで **10px 固定**。`body` も **16px 固定**で、流体（vw / clamp）は無い。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Copy | Noto Sans JP | 47px | 700 | 1.60 | 0.8px | `心が動く未来をつくっていく` |
| Display (EN) | **Inter** | 65px | 700 | 1.20 | — | `JR WEST BUSINESS` |
| Heading 1 | Noto Sans JP | 38px | 700 | 1.60 | 0.8px | `JR西日本ニュース` |
| Heading 2 | Noto Sans JP | 28px | 700 | 1.60 | 0.8px | `モビリティ` `生活サービス` |
| Heading 3 | Noto Sans JP | 22px | 700 | 1.70 | 0.8px | `ニュースリリース` `更新情報` |
| Lead | Noto Sans JP | 18px | 400 | 1.70 (30.6px) | **0.9px** | 福知山線のステートメント |
| Body ★ | Noto Sans JP | **16px** | 400 | **1.70 (27.2px)** | **0.8px** | **最多 82 要素** |
| Nav / UI | Noto Sans JP | 15px | 400 / 700 | 1.70 | 0.8px | グローバルナビ（可視 46 要素） |
| Status Label | Noto Sans JP | 15px | 400 | — | **0.75px** | 運行情報の区間名 |
| Button | Noto Sans JP | 16px | 400 | — | 0.8px / normal | 塗り・反転とも 16px |
| Label (EN) | **Inter** | 17px | 700 | — | — | `JR WEST NEWS` |
| Caption | Noto Sans JP | 13px | 400 / 700 | 1.40 | 0.8px | 運行情報の補助リンク、カテゴリ見出し |
| Small | Noto Sans JP | 12px | 400 / 500 | 1.70 | 0.8px | 事業領域の説明、バッジ |

**ウェイトは 700 / 400 / 500 の 3 段。** 可視分布はトップが 700 (115) / 400 (77) / 500 (13)。Noto Sans JP も Inter も**可変フォント（100〜900）なので任意の値が出せる**が、実際に使っているのは 3 つだけ。

### 3.5 行間・字間

- **行間は `1.7` を `body` に書いて継承させる。** 16px → 27.2px。可視 130 要素（トップ）/ 49 要素（下層）が 1.70、見出しの 1.71 も同じ系列（端数は px 丸め）
- 例外: 事業領域の説明が **1.60**（16 要素）、グローバルナビの一部が **1.51**、運行情報の補助リンクが **1.40**
- **字間は `0.05em`（= `body` 16px で 0.8px）を `body` に 1 回書くだけ。** 可視 205 要素中 **155 要素**が 0.8px

> **これは「px 宣言」ではなく「em 宣言 → px 継承」。** `body` の `0.05em` が 0.8px に計算され、**その px 値が子へ降りる**。だから 13px のキャプションも 47px のヒーローコピーも**同じ 0.8px**になる（サイズに比例しない）。
> **DESIGN.md を読んだエージェントが `0.05em` を各要素に書くと別物になる**（47px の見出しなら 2.35px になってしまう）。**`body` に 1 回だけ書くこと。**

**個別に宣言している例外は 3 つだけ:**

```css
letter-spacing: 0.75px;  /* 運行情報の区間名（6 要素）15px に対して 0.05em */
letter-spacing: 0.9px;   /* 福知山線のステートメント（3 要素）18px に対して 0.05em */
letter-spacing: 0.6px;   /* コンセプトムービーのキャプション（3 要素）12px に対して 0.05em */
letter-spacing: normal;  /* グローバルナビの第 1 階層（38 要素）— 字間を切っている */
```

> **例外の 3 つはどれも「そのサイズでの 0.05em」。** つまり**比率としては同じ**で、px 継承だと揃わない箇所だけ書き直している。**比率は常に 0.05em** と覚えればよい。

### 3.6 禁則処理・改行ルール

```css
/* 実サイトは word-break / overflow-wrap / line-break を body で指定していない。
   見出しの改行は <br> で手で割っている。 */
```

- **`word-break: auto-phrase` は使っていない。**
- `JR WEST BUSINESS` `INFRASTRUCTURE SOLUTIONS` のような長い英字見出しは **Inter で 1 行に収める前提**。折り返しが起きる幅では `<br>` を入れている
- **行頭禁止**: `）」』】〕〉》、。，．・：；？！`
- **行末禁止**: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
/* body, html に 1 回だけ */
font-feature-settings: "palt" 1;
```

- **`palt` をサイト全体に効かせている。** 実測 **749 要素**（トップ）/ 231 要素（下層）。例外なし
- `-webkit-font-feature-settings` も併記されている（古い WebKit 対応）
- **`tnum` は使っていない。** 運行情報の時刻や IR の数値も `palt` のまま
- **`palt` を外さないこと。** 字間 0.05em と `palt` の組み合わせで今の字面ができている。片方だけ真似ると詰まりすぎる／空きすぎる

### 3.8 縦書き

```css
/* 該当なし */
```

`writing-mode` は実測 0 件。

---

## 4. Component Stylings

### Buttons

**Primary（塗り）**

- Background: `#0065b1`
- Text: `#ffffff`
- Font: 16px / 400 / `letter-spacing: 0.8px`
- Border Radius: **要素の高さの半分**（= pill）

| サイズ | class | radius | 用途 |
|--------|-------|--------|------|
| Small | `c-button-small` | `14px`（高さ 28px） | 運行情報の `遅延証明書` |
| Medium | — | `18px` / `20px` | ヘッダーの `予約・IC・WESTER`、`もっと見る` |
| Large | `c-button-large` | `34px`（高さ 68px） | `福知山線列車事故について` |
| Hero | `mvButton` | `62px` | ヒーローの `私たちの志をもっと知る` |

**Secondary（反転）**

- Background: `#ffffff`
- Text: `#0065b1`（小）/ `#111111`（大）
- Border: 1px solid（`#0065b1` または薄いグレー）
- Border Radius: Primary と同じ pill
- class 名も対になっている: `c-button-small-inverted` / `c-button-large-inverted`

> **「塗りか反転か」の 2 択しかない。** 文字だけのリンクボタンは無い。**反転の大サイズは文字が `#111111`** で、青にしない（本文と同じ扱いにする）。

**Tabs**

- `categoryListTab`: 面 `#ffffff` / 文字 `#111111` / **16px / 700 / `letter-spacing: normal`** / `border-radius: 0`
- 選択状態は下線で示す（面色を変えない）

### Badges

- `12px / 500 / #111111`、`border-radius: 12px`（pill）、面は `#80c8f0` / `#8bdfea`

### Cards

- Background: `#ffffff`
- Border Radius: **`24px`**（本サイトで唯一の「角丸らしい角丸」。17 要素）
- 上辺だけ / 下辺だけ丸めるパターンあり:
  - `border-radius: 28px 28px 0 0` — 白いブロックが上に重なる（3 要素、影は上向き）
  - `border-radius: 0 0 24px 24px` — `重要なお知らせ` の帯（3 要素、影は下向き）
- `topHighlights_listItem_label`: `13px / 700 / radius 13px`（pill のタグ）

### Inputs

> **実測した 2 ページに通常のテキスト入力欄が存在しない**（検索はヘッダーのアイコンから展開する）。下は本サイトの値から導いた**推奨**。

- Background: `#ffffff`
- Border: 1px solid `#d6d6d6`
- Border (focus): `outline: 2px solid #ff7600`（下記のフォーカス色に合わせる）
- Border Radius: `24px`
- Padding: 12px 20px
- Font Size: 16px / `letter-spacing` は継承（0.8px）

**フォーカスリング**: **`outline: #ff7600 solid 2px`。**

> **これは意図的な設計。** リンクもボタンも面も `#0065b1` の青で埋まっているサイトなので、フォーカスを青にすると見つからない。**オレンジに逃がしている。**
> 青を主色にするサイトを作るときは、この手を真似る価値がある。

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実測 |
|-------|-------|------|
| M | 20px | ボタンの左右 padding |
| L | **40px** | **gap の最多（2 件）** / `0 40px` |
| XL | 68px | 大型ボタンの高さ |

> **`gap` の実測は 40px にほぼ一本化されている。** セクション間の余白は padding 側で取っている。

### Container

- **Max Width: 1500px**（実測 5 要素。トップのすべての主要ブロック）
- 下層（2018 年版）はコンテナ指定を持たず、固定幅のテーブルで組まれている
- Padding (horizontal): 20px（モバイル）/ 40px（デスクトップ）

### Grid

- Columns: 3（事業領域 `モビリティ` / `生活サービス` / `インフラソリューション`）/ 6（運行情報の区分）/ 4（ハイライトのタグ）
- Gutter: **40px**

### Border Radius

| 値 | 件数 | 実体 |
|----|------|------|
| `24px` | 17 | **カード（唯一の本物の角丸）** |
| `13px` | 14 | pill（高さ 26px のタグ） |
| `34px` | 6 | pill（高さ 68px の大型ボタン） |
| `12px` | 5 | pill（高さ 24px のバッジ） |
| `9999px` | 3 | pill の明示 |
| `50%` | 3 | 円形アイコン |
| `14px` / `18px` / `20px` / `62px` | 各 1〜数件 | pill |
| `0 0 24px 24px` / `28px 28px 0 0` | 3 / 3 | 片側だけ丸めたブロック |

> **`border-radius` を値でコピーしない。** 「ボタンは `calc(高さ / 2)` で pill、カードは `24px`」と覚える。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。カード・ボタン・バッジはすべて影を持たない** |
| 1 (上向き) | `0 -10px 10px rgba(0, 0, 0, 0.16)` | **白いブロックが下から重なる箇所（3 要素）**。`border-radius: 28px 28px 0 0` と対で使う |
| 1 (下向き) | `0 10px 10px rgba(0, 0, 0, 0.16)` | `重要なお知らせ` の帯が上から降りてくる箇所（1 要素） |

- **影は 1 種類の値（`10px 10px / 0.16`）を、向きだけ反転して使っている。**
- **影の役割は「浮かせる」ではなく「重なりの向きを示す」。** 上に重なる要素は上向きの影、下に降りてくる要素は下向きの影。**ぼかしと濃さは同じ**
- `filter: drop-shadow()` / `text-shadow` は 0 件

---

## 7. Do's and Don'ts

### Do（推奨）

- **`letter-spacing: 0.05em` と `line-height: 1.7` と `font-feature-settings: "palt" 1` を `body` に 1 回だけ書く。** 子要素では再宣言しない
- **ボタンの `border-radius` は要素の高さの半分**（`calc(高さ / 2)` か、十分大きい `9999px`）
- **カードは `24px`。** 片側だけ丸めるときは `28px 28px 0 0` / `0 0 24px 24px`
- **状態はアイコンの形で示し、文字色は `#111111` のまま。** 色覚に依存させない
- **フォーカスリングは `#ff7600` の 2px。** 青いサイトなので青以外を使う
- 本文の文字色は `#111111`。`#000000` にも `#333333` にもしない
- 英字の見出し・ラベルは **Inter**、それ以外は **Noto Sans JP**。1 つのスタックに混ぜない

### Don't（禁止）

- **`letter-spacing: 0.05em` を各要素に書かない。** `body` で計算された 0.8px が継承される設計で、要素ごとに書くとサイズに比例して字間が開く（47px の見出しなら 2.35px になる）
- **`palt` を外さない。** 749 要素に効いている。字間 0.05em とセットで今の字面になっている
- **フォント名に和文の文字列を直接書かない。** 実サイトは `"ヒラギノ角ゴ ProN"` `"メイリオ"` を書いているが、**配信時に Shift_JIS のまま出ていて文字化けしている**。ASCII 名（`"Hiragino Kaku Gothic ProN"` / `Meiryo`）だけで書く
- **青を 4 つに増やさない。** `#0068b4` `#0068b7` `#0075d3` は 2 世代の同居による事故で、**新規は `#0065b1` に統一する**
- **`border-radius` の値をそのままコピーしない**（`14px` `34px` `62px` はどれも「その要素の高さの半分」でしかない）
- **`font-weight: 600` や `300` を使わない。** 可変フォントなので出せてしまうが、実装は 400 / 500 / 700 の 3 段
- **下層（`/company/info/` 配下）の `17.2308px` を「本文サイズ」として真似ない。** 13px 基準の % スケールに 16px の `body` が乗った結果で、**意図は 14px**
- テキストの色に `#000000` を使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 実測 |
|------|-------|------|
| Mobile | ≤ 767px | トップ 2 件 / **下層 154 件** |
| Tablet | 768–1279px | 2 件 |
| Desktop | ≥ 1280px | 2 件 |
| 印刷併用 | `print, screen and (min-width: 768px)` | トップ 2 件 / **下層 62 件** |
| 微調整 | ≤ 1090px / ≤ 1740px | 各 2 件 |

> **主分岐は 768px。** トップ（新デザイン）は `min-width: 1280px` でデスクトップを足し、下層（2018 年版）は `max-width: 767px` でモバイルを削る、という**逆向きの書き方が同居している**。
> **下層の CSS は `print` をほぼすべてのメディアクエリに併記している**（`print, screen and (min-width: 768px)`）。印刷時にデスクトップ幅のレイアウトを使うための実装で、公共インフラのサイトらしい配慮。

### ルートサイズ

- **`html` 10px / `body` 16px / `line-height` 27.2px / `letter-spacing` 0.8px は 4 幅すべてで同じ。** 流体も SP 縮小も無い
- モバイルで変わるのは**見出しだけ**（例: トップの `列車運行状況` が 16px → 375px で 17px）
- **下層の `p, li, th, td` は 4 幅すべてで 17.2308px のまま**。モバイルでも縮まない

### タッチターゲット

- `c-button-small` は**高さ 28px** で WCAG の 44px を下回る。新規実装では 44px 以上を確保すること
- `c-button-large` は高さ 68px で十分

### フォントサイズの調整

- 本文 16px はモバイルでも据え置き
- ヒーローコピー 47px、英字 Display 65px はモバイルで半分程度まで落とす

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0065b1
Text Color:    #111111
Background:    #ffffff
Surface:       #f2f2f2
Warning Surface: #fff7dd
Focus Ring:    #ff7600（2px solid）
Font (JP): "Noto Sans JP", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", Meiryo, sans-serif
Font (EN): Inter, "Helvetica Neue", Arial, sans-serif
Body Size: 16px
Line Height: 1.7（body に 1 回）
Letter Spacing: 0.05em（body に 1 回。子では書かない）
font-feature-settings: "palt" 1（body に 1 回）
Button Radius: calc(高さ / 2) — pill
Card Radius: 24px
Shadow: 0 10px 10px rgba(0,0,0,.16)（重なりの向きで ± を反転）
Container: 1500px / Gutter 40px
```

### プロンプト例

```
JR西日本のデザインシステムに従って、路線の運行状況を 6 区分で並べるパネルを作ってください。

- body に letter-spacing: 0.05em / line-height: 1.7 / font-feature-settings: "palt" 1 を
  1 回だけ書く。子要素では字間を再宣言しない
- フォント: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", Meiryo, sans-serif
  （和文のフォント名は ASCII 表記で書くこと）
- 各区分は「状態アイコン（SVG）＋ 区間名」の 2 段。区間名は 15px / 400 / #111111
- 状態は色ではなくアイコンの形で示す。文字色は状態によって変えない
- 補助リンク（運行情報トップ など）は 13px / line-height 1.4
- パネル右の「遅延証明書」ボタンは面 #0065b1・白文字・16px、高さ 28px、border-radius 14px
- 「列車走行位置」は白地に #0065b1 の文字と枠の反転ボタン、同寸法
- 重要なお知らせの帯は面 #fff7dd、border-radius 0 0 24px 24px、影 0 10px 10px rgba(0,0,0,.16)
- コンテナ 1500px、gap 40px
- フォーカス時は outline: 2px solid #ff7600
```
