# DESIGN.md — 東京ステーションホテル（THE TOKYO STATION HOTEL）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-30 / 対象: `https://www.tokyostationhotel.jp/`, `/stay/rooms/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Web フォントを和文に一切使わない。** 本文は游ゴシック、格を出したいところだけ游明朝。欧文のセリフ 1 書体（Cormorant Infant）だけを Google Fonts から読む。濃紺 `#00335c` とグレージュ `#9f9691` の 2 色で組む、クラシックホテルの構え
- **密度**: 低い。客室 1 室に写真 1 枚と 3 行の説明。本文の行間は `1.75`（実測 132 要素）でゆったり組む
- **キーワード**: 游ゴシック Medium、游明朝のボタン、濃紺、ピル、Web フォント和文ゼロ

**このサイトの核心は 4 つある。**

1. **和文の Web フォントを 1 本も読まない。** フォントファイルの要求は 3 件で、内訳は Cormorant Infant（欧文セリフ・Google Fonts）／ FontAwesome ／ slick（カルーセルのアイコン）**だけ**。和文はすべて OS ローカル書体で、実測の内訳は 游ゴシックのスタック **860 要素** ／ 游明朝のスタック **77 要素** ／ Cormorant Infant **5 要素**
2. **Windows 游ゴシック問題を「`"Yu Gothic"` という名前そのものを `@font-face` で上書きする」流儀で解いている**（下記 3.1）。別名を作る SmartHR 方式でも、スタック順で解く方式でもない **5 つ目の流儀**
3. **ボタンに明朝を使う。** ヘッダーの「空室検索」は **游明朝 14.4px / weight 500 / letter-spacing 1.6px**。ゴシックのボタン（12.8px）と明朝のボタンが同じ画面に同居する
4. **`body { line-height: 1 }` が全子孫に降りている。** 実測で行間比 `1.00` が **トップ 46 要素 / 下層 58 要素**。各要素が自分で `line-height` を宣言し直す前提の設計で、**宣言を忘れた要素は行が潰れる**

**ヒーローの「Classic Luxury」「時代を超えて愛される、上質なひととき」はテキストではない。** 実測すると全画面の `<video>`（1440×810）の上に **`catch_txt.svg`（600×255）と `catch_txt_end.svg`（200×33）** が重なっている。**ここを Web フォントで実装しようとしないこと。**

CSS Custom Properties は **2 ページとも 0 個**。値はすべて CSS に直書きされている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Navy（主）** | **`#00335c`** | **可視 43 要素の塗り面**（下層 31 要素）。ピル型 CTA、「空室検索」、フッター近くのボタン、電話ボタン |
| **Navy Dark** | **`#002c59`** | **ヘッダー最上部の予約ボタン 3 つ専用**（可視 3 要素）。`#00335c` より 1 段暗い |
| **Greige** | **`#9f9691`** | **グローバルナビの帯**（可視 25 要素 / 下層 22 要素）。濃紺の対になる無彩色寄りのブラウン |
| **Teal（文字色）** | **`#356a87`** | 電話番号 `03-5220-1111` の文字色。面には使わない |

> **濃紺が 2 つあるのは実装の実態。** `#00335c` がサイト全体のボタン色、`#002c59` はヘッダー上部の予約ボタン 3 つだけ。新規実装では `#00335c` に寄せてよいが、ヘッダーを再現するなら 2 色あることを前提にする。

### Neutral（ニュートラル）

- **Text Primary** (`#444444`): 本文の既定。**下層で可視 173 要素**と圧倒的に多い
- **Text Black** (`#000000`): 客室名・プラン名など、強めに出す見出し（可視 25〜30 要素）
- **Text Nav** (`#111111`): グローバルナビの項目（可視 10 要素）
- **Text Muted** (`#888888`): `Language`、パンくず、補助リンク（可視 14〜15 要素）
- **Text Muted 2** (`#777777`): 時計表示、フッターの施設名（可視 8〜11 要素）
- **Border / Divider** (`#dddddd`): 区切り線（可視 5 要素の面）
- **Surface** (`#f5f5f5`): 客室カードの面、ページトップへ戻るボタンの地（可視 3〜6 要素）
- **Surface 2** (`#e7e7e7`): 下層の定義リスト `<dt>`（チェックイン/チェックアウト）の地。**可視 20 要素**
- **Surface 3** (`#eeeeee`): フッターの「TOKYO STATION CITY」帯
- **Background** (`#ffffff`): ページ背景。`<body>` に直接

> `rgb(181,175,171)` `rgb(67,160,71)` は Cookie 同意バー（CMP）の色なので**採用しない**。

---

## 3. Typography Rules

### 3.1 和文フォント

**Web フォントは 1 本も使わない。** すべて OS ローカル。

- **ゴシック体（本文・UI の主役）**: 游ゴシック → ヒラギノ角ゴ ProN W3
- **明朝体（格を出す所）**: 游明朝 → ヒラギノ明朝 ProN

#### Windows 游ゴシック問題の解き方（5 つ目の流儀）

このサイトは **`"Yu Gothic"` というファミリー名そのものを `@font-face` で定義し直している**。

```css
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 100; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 200; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 300; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 400; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Bold");   font-weight: bold; }
```

- 狙いは Windows。素の `Yu Gothic` は Regular が細すぎて潰れるため、**100〜400 のどれを指定しても Medium が返る**ように再定義している。別名（`AdjustedYuGothic` など）を作らず、**既存の名前を乗っ取る**のがこのやり方の特徴
- `src` が `local()` だけなので**ダウンロードは発生しない**（フォントファイルの要求 3 件に和文は 1 件も含まれない）
- **macOS では `local("Yu Gothic Medium")` が解決できず、`document.fonts` の該当エントリは `error` になる**（実測: weight `400` と `bold` が `error`、`100/200/300` は要求されないので `unloaded`）。その場合はスタックの 2 番目 `YuGothic`（游ゴシック体 Regular）に落ちる
- 結果として **macOS は Regular、Windows は Medium** で表示される。太さを完全に揃えたいなら、別名方式（`@font-face { font-family: "AdjustedYuGothic"; src: local("Yu Gothic Medium") }`）にしてスタックの先頭へ置く

#### 実際に出るウェイトは 2 段しかない（measure で確定）

同一ページに `position:absolute` の隠し div を作り、`font-weight` だけ変えて `getBoundingClientRect().width` を比較した実測値（40px / `日本語の組版とAbc123`）:

| スタック | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 |
|---|---|---|---|---|---|---|---|---|
| 游ゴシック系 | 416.48 | 416.48 | 416.48 | 416.48 | **416.48** | 422.81 | 422.81 | 422.81 |
| 游明朝系 | 408.00 | 408.00 | 408.00 | 408.00 | 408.00 | 412.53 | 422.84 | 422.84 |

- **游ゴシックは 100〜500 が全部同じ字面**。`body` に `font-weight: 500` を当てているが（実測 500 が 105〜224 要素と最多）、**400 と見た目は変わらない**
- 600 以上は**合成太字**。游明朝だけ 600 と 700 で段が分かれる
- **700 を当てても「より太い書体」が出てくるわけではない**ことを前提に設計する

### 3.2 欧文フォント

- **セリフ**: `Cormorant Infant`（Google Fonts・weight 400 のみ・`loaded`）。`SPECIAL OFFERS` `ROOM TYPES` `PALACE VIEW` のようなセクション見出しと客室名の英字に使う。**可視 5〜13 要素だけ**の少数精鋭
- **サンセリフ**: `"Helvetica Neue", Helvetica, Arial, sans-serif`（`body` の宣言。可視 78 要素）

### 3.3 font-family 指定

```css
/* body の宣言（和文の受け皿が無い点に注意） */
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}
body { line-height: 1; }   /* ← 後勝ちでこちらが効く */

/* 本文・UI の主役（可視 860 要素） */
font-family: "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3",
             "Hiragino Kaku Gothic ProN", Arial, メイリオ, Meiryo, sans-serif;

/* 明朝（可視 77 要素） */
font-family: 游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN",
             HGS明朝E, メイリオ, Meiryo, serif;

/* 欧文セリフ（可視 5〜13 要素） */
font-family: "Cormorant Infant", serif;
```

**実サイトはこうだが、正しくはこう（3 点）**:

1. **`body` に和文フォントが 1 つも書かれていない。** `"Helvetica Neue", Helvetica, Arial, sans-serif` だけなので、和文は OS の `sans-serif` 既定に落ちる。実際に本文として読める 860 要素は別セレクタで游ゴシックを当て直している。**新規実装では `body` に和文スタックを書く**
2. **明朝スタックのフォールバックに `メイリオ, Meiryo` が入っている。** メイリオはゴシック体なので、游明朝もヒラギノ明朝も無い環境では**明朝のつもりがゴシックで出る**。正しくは `游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "MS P明朝", serif`
3. **ゴシックスタックの `Arial` が メイリオ より前にある。** Arial は和文を持たないので和文は素通りするが、**欧文だけ Arial に落ちる**。和欧を游ゴシックで揃えたいなら `Arial` は末尾へ

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| Section（英） | Cormorant Infant | 29px | 600 | 2rem | — | `SPECIAL OFFERS` `INFORMATION` |
| Section（和英併記） | 游ゴシック | 29px | 500 | 1.10 | — | `STAY宿泊` `WEDDINGウエディング`（可視 5 要素） |
| Card Title（英） | Cormorant Infant | 18px | 400 | 1.25 | **1.8px** | `PALACE VIEW`（可視 12 要素） |
| Card Title（和） | 游ゴシック | 18px | 500 | 1.25 | **0.7px** | `パレスビュー`（可視 12 要素） |
| Page Title | 游ゴシック | 18px | 500 | — | **0.9px** | `客室一覧` |
| Body | 游ゴシック | 14px | 500 | **1.75** | normal | **下層で可視 141 要素**。本文の基準 |
| Nav | 游ゴシック | 15.2px | 500 | 1.00 | normal | グローバルナビ（可視 13 要素） |
| Button（予約） | 游ゴシック | 12.8px | 700 | — | normal | ヘッダー最上部 |
| Button（明朝） | 游明朝 | 14.4px | 500 | — | **1.6px** | `空室検索` |
| Caption | 游ゴシック | 12px | 500 | 1.50 | normal | 注記（可視 20 要素） |
| Small | 游ゴシック | 13px | 500 | — | — | 住所・電話 |

`html` と `body` はどちらも **16px で完全固定**（1440 / 1200 / 1024 / 992 / 991 / 834 / 769 / 768 / 767 / 576 / 575 / 375px の 12 幅すべてで `16px`）。流体も段階切替も無い。

### 3.5 行間・字間

- **本文の行間**: `1.75`（**下層で可視 132 要素**）。日本語本文の基準はここ
- **カードタイトルの行間**: `1.25`（可視 27 要素）
- **注記の行間**: `1.50`（可視 30 要素）
- **`body` の行間は `1`（無単位）**。実測で行間比 `1.00` が **トップ 46 / 下層 58 要素**。1 未満の比率が 1 件も出ないので、絶対値 px ではなく**無単位の 1** と確定している
- **字間は `normal` が既定**（トップ 126 / 下層 230 要素）。**空けるのは欧文と、和文のうち「名前」だけ**

| 対象 | letter-spacing | 実測 |
|---|---|---|
| 本文・ナビ・ボタンの大半 | `normal` | 230 要素 |
| 欧文の客室名（`PALACE VIEW`） | **1.8px** | 12 要素 |
| 和文の客室名（`パレスビュー`） | **0.7px** | 12 要素 |
| `詳細を見る` | 1.05px | 12 要素 |
| `ROOM TYPES` | 2.8px | 1 要素 |
| `空室検索`（明朝ボタン） | 1.6px | — |
| 日付ラベル（`前日` `当日` `不泊`） | **-1px** | 9 要素 |

> **同じ 18px の客室名でも、欧文は 1.8px・和文は 0.7px と字間を変えている。** 和欧で詰め方を分ける設計なので、どちらかに揃えないこと。

### 3.6 禁則処理・改行ルール

`word-break` / `overflow-wrap` / `line-break` の宣言は `body` に無く、ブラウザ既定に任せている。

```css
/* 既定のまま（宣言なし） */
word-break: normal;
overflow-wrap: normal;
```

新規実装で長い英数字（URL・ISBN・型番）を扱うなら `overflow-wrap: break-word` を足す。**`word-break: break-all` は使わない**（日本語の禁則処理が無効になる）。

### 3.7 OpenType 機能

```css
/* コンポーネント単位で宣言する。body には書かない */
.spc_txt       { font-feature-settings: "palt"; }
.category_title{ font-feature-settings: "palt"; }
.tx_ja         { font-feature-settings: "palt"; letter-spacing: 0.05em; }
.c_page_ttl_01 { font-feature-settings: "palt"; }
.c_btn, .c_btn_01, .c_btn_02, .c_btn_03, .c_btn_04 { font-feature-settings: "palt"; }
```

- **宣言位置はコンポーネント単位**（CSS 全文で 5 箇所）。`body` にも `*` にも書かない。実測で `"palt"` が当たっているのは **168 要素**（DOM 全走査 / 可視テキストではトップ 34・下層 27 要素）
- **軸の取り違えは無い**: `"palt" @ horizontal-tb` が 168 要素、縦組みは 0 要素
- **`palt` は実効している**。同一ページ・同一書体で隠し div の幅を比較すると `normal` 580.00px → `palt` **463.45px**（約 20% 詰まる）
- `halt` は使っていない（実測 0 件）

### 3.8 縦書き

**縦組みは使っていない**（`writing-mode` の宣言が CSS に 1 件も無く、実測も 0 要素）。

---

## 4. Component Stylings

### Buttons

CTA は **3 種類**ある。radius が 3 通り（30px / `0 0 4px 4px` / 0）なのがこのサイトの特徴。

**Primary（ピル）** — サイト全体で使う主ボタン
- Background: `#00335c`
- Text: `#ffffff`
- Font: 游ゴシックスタック / 12.8px / weight 500 / letter-spacing normal
- Padding: `7px 10px`（ヘッダー内）／ `10px 0`（フッター内の全幅ボタン）
- Border Radius: **`30px`**（完全なピル）
- Border: なし

**Header Reserve（下角丸）** — ヘッダー最上部の予約ボタン 3 つ専用
- Background: `#002c59`
- Text: `#ffffff`
- Font: 游ゴシックスタック / 12.8px / **weight 700**
- Padding: `10px 25px`
- Border Radius: **`0 0 4px 4px`**（上辺は直角、下辺だけ 4px）
- 画面最上部に貼り付く意匠なので、上側の角は落とさない

**Mincho Search（角丸なし・明朝）** — 「空室検索」
- Background: `#00335c`
- Text: `#ffffff`
- Font: **游明朝スタック** / 14.4px / weight 500 / **letter-spacing 1.6px**
- Padding: `0`（親の高さで中央寄せ）
- Border Radius: `0`

**Inverse（薄グレー面）** — 下層の定義リスト見出し
- Background: `#e7e7e7`
- Text: `#373a3c` / 14px / weight 700
- Padding: `10px`
- Border Radius: `0`

### Inputs

入力欄の独自スタイルは実測できる範囲に無い（検索はモーダル内の日付ピッカー）。日付ピッカーの選択済みセルは **`#00335c` 地・白文字・radius 4px・padding 6px**。

### Cards

- Background: `#f5f5f5`（客室カード）
- Border: なし
- Border Radius: `0`
- 画像は角丸を付けず矩形のまま
- Shadow: **なし**（6. 参照）

### Pill Link（フッター）

- Background: `#00335c`
- Border Radius: `30px`
- Padding: `10px 0`（全幅）
- `お問い合わせフォーム` `ホテルへのアクセス` など

---

## 5. Layout Principles

### Spacing Scale

CSS Custom Properties が 0 個なので、トークン化された余白スケールは**存在しない**。実測で頻出する値:

| 用途 | 値 |
|------|-----|
| ボタン内（小） | `7px 10px` |
| ボタン内（標準） | `10px 25px` |
| セル内 | `10px` |
| セクション見出しの上 | `160px`（`.category_title { padding-top: 160px }`） |
| 見出し下マージン | `20px` / `25px` |

**`padding-top: 160px` でセクションを離す**のがこのサイトの間合い。カード同士は詰めるが、セクション間は大きく空ける。

### Container

- ページ背景は白、コンテンツは中央寄せ
- グローバルナビは全幅の帯（`#9f9691`）

### Grid

- 客室一覧は画像＋テキストの横並び。グリッドのトークンは宣言されていない

---

## 6. Depth & Elevation

**サイト本体に影は無い。**

実測で得られる `box-shadow` は 2 種類だけで、**どちらも Cookie 同意バー（CMP）のもの**:

| 値 | 要素 |
|---|---|
| `rgba(0,0,0,0.26) 0 2px 5px 0` | CMP のボタン 3 つ |
| `rgba(0,0,0,0.1) 0 0 10px 0` | CMP のバー本体 |

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **すべての要素** |

**カード・ボタン・モーダルに影を足さないこと。** 奥行きは面の色（`#f5f5f5` / `#e7e7e7`）と余白で作る。

### Border Radius

| 値 | 用途 | 実測 |
|---|---|---|
| `30px` | ピル型 CTA | 可視 1〜5 要素 |
| `0 0 4px 4px` | ヘッダー予約ボタン | 可視 3 要素 |
| `4px` | 日付ピッカーの選択セル | 可視 1 要素 |
| `50%` | 円形アイコン | 可視 11 要素 |
| `0` | それ以外すべて | — |

---

## 7. Do's and Don'ts

### Do（推奨）

- **和文は OS ローカル書体で組む。** 游ゴシックを先頭に、ヒラギノ角ゴ ProN W3 を受け皿にする
- **Windows 対策の `@font-face` を書く。** `src: local("Yu Gothic Medium")` を 100〜400 に割り当てる（このサイトの流儀）か、別名を作ってスタックの先頭に置く
- **明朝は「格を出す一語」に限って使う。** 可視 77 要素（全体の 8% 程度）に留める
- **本文の `line-height` は `1.75`**、カードタイトルは `1.25`、注記は `1.50`
- **字間は `normal` を既定にする。** 空けるのは客室名などの固有名詞だけ（欧文 1.8px / 和文 0.7px）
- **`palt` はコンポーネント単位で当てる。** 見出し・ボタン・ナビには効かせ、長い本文には当てない
- **ボタンの radius は 3 種を使い分ける**（ピル 30px / 下角丸 `0 0 4px 4px` / 角丸なし）
- 面の色は濃紺 `#00335c` とグレージュ `#9f9691` の 2 色に絞る

### Don't（禁止）

- **和文の Web フォントを足さない。** Noto Sans JP や Noto Serif JP を親切のつもりで入れると、このサイトの字面ではなくなる
- **`line-height` を宣言し忘れない。** `body { line-height: 1 }` が降ってくるので、**宣言しない要素は行が潰れる**。本文ブロックには必ず書く
- **`font-weight` を 600 以上にしない。** 游ゴシックは 100〜500 がすべて同じ字面で、600 以上は**合成太字**になる。太く見せたいなら色かサイズで差をつける
- **明朝のフォールバックに `メイリオ` を入れない**（実サイトは入っているが誤り。ゴシックで出る）
- **影を足さない**（サイト本体は `box-shadow: none`）
- **ヒーローのキャッチコピーをテキストで組み直さない。** 実物は `<video>` の上に重ねた SVG 画像
- **`#00335c` と `#002c59` を混同しない。** 後者はヘッダー最上部の 3 ボタン専用
- `rgb(181,175,171)` / `rgb(67,160,71)` は CMP の色なので使わない

---

## 8. Responsive Behavior

### Breakpoints

`html` / `body` の `font-size` は **12 幅すべてで 16px 固定**。文字サイズでブレークポイントを切り替える設計ではない。レイアウト側のメディアクエリは実測で次の 2 点が確認できる:

| Name | Width | 挙動 |
|------|-------|------|
| Mobile | ≤ 767px | ヒーローのキャッチが `catch_title` 54px → **34px**、`letter-spacing` 5px → **3px** |
| Desktop | > 767px | `catch_title` 54px / `letter-spacing` 5px |

```css
.catch_area .catch_title {
  font-family: "Cormorant Infant", serif;
  font-size: 54px;
  letter-spacing: 5px;
}
@media (max-width: 767px) {
  .catch_area .catch_title { font-size: 34px; letter-spacing: 3px; }
}
```

- **本文サイズはモバイルでも縮まない**（14px のまま）。縮むのは見出しと装飾の欧文だけ
- `.catch_area .catch_text` は **游明朝 22px / `font-weight: 100` / letter-spacing 1px**。游明朝に 100 を当てると macOS では游明朝 Light が出る

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）。ピル型 CTA は `padding: 10px 0` ＋ 行高で確保する

### フォントサイズの調整

- 本文 14px は据え置き
- 装飾の欧文（Cormorant Infant）だけ 60〜65% に縮める

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #00335c
Primary Dark:  #002c59   （ヘッダー予約ボタン専用）
Accent:        #9f9691   （グローバルナビの帯）
Text Color:    #444444   （本文）／ #000000（見出し）／ #888888（補助）
Background:    #ffffff
Surface:       #f5f5f5 / #e7e7e7

Font（本文）: "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3",
              "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
Font（明朝）: 游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "MS P明朝", serif
Font（欧文）: "Cormorant Infant", serif

Body Size:   14px
Line Height: 1.75（本文）／ 1.25（カードタイトル）／ 1.50（注記）
Letter Spacing: normal（既定）／ 欧文の固有名詞 1.8px ／ 和文の固有名詞 0.7px
Button Radius: 30px（ピル）
Shadow: none
```

### 必ず書くCSS

```css
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 100; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 200; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 300; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Medium"); font-weight: 400; }
@font-face { font-family: "Yu Gothic"; src: local("Yu Gothic Bold");   font-weight: bold; }

body {
  font-family: "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3",
               "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
  font-size: 14px;
  line-height: 1.75;   /* 実サイトは 1 だが、新規実装では本文の値を書く */
  letter-spacing: normal;
  color: #444444;
}
```

### プロンプト例

```
東京ステーションホテルのデザインシステムに従って、客室一覧のカードを作成してください。
- 和文の Web フォントは読み込まない。游ゴシック → ヒラギノ角ゴ ProN W3 のスタックで組む
- カードの面は #f5f5f5、角丸なし、影なし
- 客室名は英字（Cormorant Infant 18px / letter-spacing 1.8px）と
  和名（游ゴシック 18px / letter-spacing 0.7px）を 2 行で併記する
- 説明文は 14px / line-height 1.75 / letter-spacing normal
- 「詳細を見る」は #00335c の背景・白文字・border-radius 30px のピル
- font-weight は 500 までに留める（600 以上は合成太字になる）
```
