# DESIGN.md — 大橋量器（MASU KOUBOU / Ohashi Ryoki）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-08 / 対象: `https://www.masukoubou.jp/`, `/feature/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 岐阜・大垣の枡メーカー。**角丸ゼロ・ぼかしゼロ**で、四角い枡そのもののような画面を組む。写真は大きく、文字は紺と赤の2色だけで締める
- **密度**: 低〜中。`line-height: 2` と `letter-spacing: .08em` を**サイト全体に継承させて**、本文をゆったり組む
- **キーワード**: 秀英角ゴシック銀、縦組みヒーロー、字空け 0.08em、ずらし影、角丸ゼロ

**このサイトの核心は4つある。**

1. **和文は TypeSquare（モリサワ）配信の「秀英角ゴシック銀」1 書体で、太さをファミリー名で切り替える。** 本文＝`秀英角ゴシック銀 M`（可視 69 / 96 要素）、見出し＝`秀英角ゴシック銀 B`（可視 53 / 39 要素）。`document.fonts` で **M・B ともに `loaded`**
2. **`letter-spacing: .08em` を `body` に 1 回だけ書いて全体に継承させている。** 実測 `1.28px` がトップ 133 要素・下層 88 要素（可視 165 / 148 要素中）。**サイズの違う要素が全部 1.28px** なので、これは「各要素が em を持っている」のではなく**絶対値の継承**
3. **`font-feature-settings: "palt"` が全面に効いている**（トップ 591 要素 / 下層 516 要素）。字空けと約物詰めを**同時に**かけるのがこのサイトの組み方
4. **ヒーローは本物の縦組み。** `writing-mode: vertical-rl` がトップで 11 要素。見出し（36px）・リード文（18px）・画面右端の `ONLINE SHOP` / `FOLLOW US` が縦に流れる。画像に焼き込んだ文字ではない

**CSS Custom Properties は 0 個**（トップ・下層とも `total: 0`）。設計トークンは存在せず、値は CSS に直接書かれている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Navy（見出し・面）** | **`#1f284e`** | **可視 40 要素の文字色**（トップ）。`Information` `Message` などの英字見出し、セクション見出し |
| **Navy Deep（CTA セクションの面）** | **`#1b244a`** | **可視 6 要素の塗り面**。ページ末尾の `Contact` 帯、スライダーのアクティブドット |
| **Red（唯一の CTA）** | **`#d62116`** | **可視 1 要素**。`お見積り・ご相談［無料］` ボタン 600×210px の面色。サイト中でここだけ赤 |
| **Logo Red** | **`#da2616`** | ロゴマーク（インライン SVG の `fill`）専用 |

> **紺が 2 つ・赤が 2 つあるのは実装の実態。** `#1f284e` と `#1b244a`、`#d62116` と `#da2616` はそれぞれ肉眼では区別できない差（各チャンネル 4 以内）。**新規実装では `#1f284e` と `#d62116` に寄せてよいが、既存ページと並べるときは 2 色あることを前提にする。**

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文。**可視 91 要素**（トップ）/ 81 要素（下層）。**このサイトは本文に純黒を使う**
- **Text on Dark** (`#ffffff`): 紺面・写真上のテキスト（可視 25 / 19 要素）
- **Surface Pale** (`#eff2f5`): **可視 22 要素**。`Message` `Shop` セクションの地、電話 CTA の面。青みのある最も淡い面
- **Surface Gray** (`#e6e6e6`): スライダーの非アクティブドット、**およびずらし影の色**（後述）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`）
- **Page Title Band** (`#eeeeee`): 下層ページの `.page_ttl--bg`（ページタイトル帯）。下層でビューポート上部の最大面積

> **`heroCover` が `true`（`img.img-cover` 1454×1051 がビューポートを覆う）。** トップの第一印象は写真だが、**ページの地色は白**。`pageBackground.resolved` の根拠は `body` なので取り違えないこと。

### Semantic（意味的な色）

専用の semantic パレットを持たない。エラー・警告・成功の色は実測できなかった（該当コンポーネントが無い）。**実装するなら `#d62116` を danger に転用せず、CTA 専用のまま残すこと。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: **秀英角ゴシック銀 M**（DNP 秀英体 / モリサワ TypeSquare 配信）
- **ゴシック体（見出し・太字）**: **秀英角ゴシック銀 B**
- **明朝体**: 使用しない（可視 0 要素）

**配信は TypeSquare（モリサワ）。** `https://typesquare.com/3/tsst/script/ja/typesquare.js?<eid>&auto_load_font=true` を読み込み、**JS が `@font-face` を動的に注入する**。注入後の宣言は次のとおり:

```css
/* TypeSquare が注入する @font-face（実測。手で書くものではない） */
@font-face { font-family: "秀英角ゴシック銀 M"; font-weight: bold; src: url("//wf.typesquare.com/3/tsst/dist/ja/ts?...") }
@font-face { font-family: "秀英角ゴシック銀 B"; font-weight: bold; src: url("//wf.typesquare.com/3/tsst/dist/ja/ts?...") }
```

> **`font-weight: bold` で宣言されているのは TypeSquare の仕様で、書体の太さとは無関係。** 各ファミリーに実体は 1 つしか無いので、CSS 側が `font-weight: 500` と書いても **M（Medium）がそのまま描画される**。
> **逆に、`秀英角ゴシック銀 M` のファミリーに `font-weight: 700` を当てても太くならない**（宣言が bold なので「完全一致」と判定され、合成太字も起きない）。**太さを変えたいときは `font-weight` ではなくファミリー名（M ↔ B）を切り替える。**

TypeSquare が適用された要素には `typesquare_op` / `typesquare_option` クラスが自動で付く。**このクラスを手で書かないこと**（JS が付けるマーカー）。

### 3.2 欧文フォント

- **サンセリフ**: **Poppins**（Google Fonts）。`font-en` クラスで、`MENU` `Information` `Contact` `ONLINE SHOP` と電話番号に使う。実測 `loaded` は **300 / 400 / 500** の 3 ウェイト（可視 34 / 13 要素）
- **セリフ**: 使用しない
- **等幅**: 使用しない

> **Montserrat 600 が `@font-face` で宣言されているが、フォントファイルの要求は 0 件・可視 0 要素。** Google Fonts の CSS だけ読み込んで 1 文字も使っていない。**宣言を真似しないこと。**

### 3.3 font-family 指定

```css
/* 本文（body に 1 回） */
font-family: "秀英角ゴシック銀 M", "Shuei KakuGo Gin M",
             YuGothic, "Yu Gothic",
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", sans-serif;

/* 見出し・太字（.font-jp） */
font-family: "秀英角ゴシック銀 B", "Shuei KakuGo Gin B",
             YuGothic, "Yu Gothic",
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", sans-serif;

/* 欧文（.font-en） */
font-family: Poppins, sans-serif;
```

**和文名と英名を 2 つ並べるのは TypeSquare の定石**（環境によってどちらで解決されるか分からないため）。

**フォールバックの考え方 — 実サイトの 2 つの引っかかり**:

- **`"ヒラギノ角ゴ Pro W3"` の次が `"Hiragino Kaku Gothic ProN"` になっている。** 和名は **Pro**、英名は **ProN** で**別の書体**（ProN は JIS2004 字形）。**正しくは `"ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN"` のように世代を揃える**
- **Windows の游ゴシック問題に未対応。** `YuGothic, "Yu Gothic"` しか書いていないので、TypeSquare が落ちた Windows では **Light にマッピングされて細く出る**。新規実装では `"Yu Gothic Medium"` / `"游ゴシック Medium"` を**必ず挟む**

### 3.4 文字サイズ・ウェイト階層

`html` は **16px 固定**（4 幅すべてで `16px`）。rem は使っていない。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Page Title** | 秀英角ゴシック銀 B | 48px | 700 | 1.40 | 1.28px（継承） | 下層のページタイトル（`.page_ttl`） |
| **Hero Heading ★** | 秀英角ゴシック銀 B | 36px | 700 | 1.40 (50.4px) | 1.28px（継承） | **縦組み**（`writing-mode: vertical-rl`） |
| **Section Heading** | 秀英角ゴシック銀 B | 32px | 700 | 1.70 (54.4px) | **3.2px = .1em** | `.ttl-02` / `.ttl-03` |
| **Card Heading** | 秀英角ゴシック銀 M | 25.6px | 700 | 1.40 (35.84px) | **2.56px = .1em** | 商品名（`.ttl-03.txt-ctr`） |
| **CTA Lead** | 秀英角ゴシック銀 B | 24px | 700 | 1.40 (33.6px) | 1.28px（継承） | CTA セクションの惹句 |
| **Eyebrow（英字）** | Poppins | 28px | 400 | 1.20 | 1.6px | `Information` `Message` `Products` |
| **Sub Heading** | 秀英角ゴシック銀 B | 18px | 700 | 1.40 (25.2px) | 1.28px（継承） | `.txt-lg` |
| **Body ★** | 秀英角ゴシック銀 M | 16px | 500 | **2.00** (32px) | **1.28px = .08em** | **既定。`body` の値がそのまま降りる** |
| **Label** | 秀英角ゴシック銀 B | 16px | 700 | 1.40 (22.4px) | **1.6px = .1em** | `.ttl-01`（`このようなご相談にお応えします`） |
| **Nav** | 秀英角ゴシック銀 M | 15px | 500 | 2.00 (30px) | 1.28px（継承） | グローバルナビ |
| **Caption** | 秀英角ゴシック銀 M | 14px | 500 | 2.00 (28px) | 1.28px（継承） | 日付・ボタンラベル |
| **Small** | 秀英角ゴシック銀 M | 12px | 500 | 2.00 (24px) | 1.28px（継承） | コピーライト・フッター説明 |

**ウェイトは実質 2 段（500 / 700）**。トップの `300` 4 要素は slick（スライダー）の数字で Arial、`400` は Poppins。**和文で 600 や 900 は 1 要素も無い。**

### 3.5 行間・字間

- **本文の行間**: **`line-height: 2`（単位なし）**。実測 2.00 がトップ 98 要素・下層 106 要素で最多。**単位なしなので各要素が自分のサイズで再計算する**（16px→32px、15px→30px、14px→28px）
- **見出しの行間**: **1.40**（39 / 34 要素）。32px の大見出しだけ **1.70**
- **本文の字間**: **`letter-spacing: .08em` を `body` に 1 回**。computed は `1.28px` で、**子要素へは絶対値 1.28px として降りる**（サイズが違っても同じ 1.28px）
- **見出しの字間**: 32px / 25.6px の見出しは **自分で `.1em` を宣言**（3.2px / 2.56px）。16px の `.ttl-01` も `.1em`（1.6px）

**CSS に現れる `letter-spacing` の宣言値は 5 つだけ**: `.08em`（body）/ `.1em` / `.15em` / `.02em` / `0`。

**ガイドライン**:

- **`line-height` は単位なし、`letter-spacing` は `body` に `em` で 1 回。** この組み合わせを崩さない
- **子要素で `letter-spacing: .08em` を再宣言しない。** 継承で 1.28px が降りてくるので、再宣言すると見出しだけ字間が広がる
- 逆に **`.1em` を足したいときは要素に直接書く**（そこから下は絶対値で継承される）

### 3.6 禁則処理・改行ルール

```css
/* 実測（767px 以下で有効） */
word-break: break-word;
```

- **`word-break: break-word` はモバイルのみ。** 1440 / 1200 / 834px では `normal`、375px で `break-word` に切り替わる
- `line-break` / `overflow-wrap` の明示的な宣言は無い（UA 既定）
- `word-break: auto-phrase` は使っていない

**禁則対象**（ブラウザ既定に任せている）:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";   /* トップ 591 要素 / 下層 516 要素 */
```

- **`palt` は `body` に書いてサイト全体に効かせている。** 可視テキストの実質すべてが `"palt"`
- **字空け（`.08em`）と約物詰め（`palt`）を同時にかけるのがこのサイトの流儀。** `palt` で約物を詰めたぶんを `letter-spacing` で均して戻す構図
- `"tnum"` `"halt"` `"kern"` の宣言は無い
- CSS には `font-feature-settings: normal` で打ち消している箇所も 1 つある（slick の数字）

### 3.8 縦書き

```css
/* ヒーロー見出し・リード文 */
writing-mode: vertical-rl;
```

**本物の縦組み。トップで `vertical-rl` が 11 要素**（下層は固定サイドバーの 2 要素だけ）。

| 要素 | Font | Size | Line Height | 内容 |
|------|------|------|-------------|------|
| `h2.hero--ttl.txt-tate` | 秀英角ゴシック銀 B | 36px | 50.4px (1.40) | `毎日を、／ますます楽しく。` |
| `p.hero--txt.txt-tate` | 秀英角ゴシック銀 M | 18px | 36px (2.00) | ヒーローのリード文（3 行） |
| `span.txt-shop` / `.txt-sns` | Poppins | 14.06px / 10.31px | 2.00 | 画面右端固定の `ONLINE SHOP` / `FOLLOW US` |

- **縦組みでも `letter-spacing: 1.28px` がそのまま効いている**（縦方向の字送りになる）
- **英字（Poppins）も縦組みにしている**。`text-orientation` の宣言は無いので既定の `mixed`（英字は寝る）
- **縦組みは画像ではない。** スクリーンショットで縦組みを見ても `typography.verticalWriting` が 0 なら画像だが、このサイトは実装されている

---

## 4. Component Stylings

### Buttons

**Primary（赤 CTA — サイト中で 1 つだけ）**

- Background: `#d62116`
- Text: `#ffffff`
- Font: 秀英角ゴシック銀 M / 24px / 500 / line-height 48px
- Letter Spacing: 1.28px（継承）
- Size: **600 × 210px**（固定。中央寄せの面として置く）
- Border Radius: **0px**
- Shadow: none

**Secondary（枠線＋ずらし影）**

- Background: `transparent`
- Text: `#000000`
- Font: 秀英角ゴシック銀 B / 14px / 500 / line-height 28px
- Border: **`1px solid #1b244a`**
- Padding: `18.06px 63px 18.06px 14px`（**右に 63px の余白＝矢印のスペース。左右非対称**）
- Size: 338.36 × 66.09px
- Border Radius: **0px**
- Shadow: **`6px 6px 0 0 #e6e6e6`**（ぼかし 0 のずらし影。トップ 8 要素 / 下層 6 要素）

**Tel（電話 CTA）**

- Background: `#eff2f5`
- Text: `#1f284e`
- Font: 秀英角ゴシック銀 B / 16px / 700 / line-height 22.4px
- Size: 600 × 210px / Border Radius `0px`

**Text Link**

- Color: `#1f284e` / 14px / 500 / padding `2.52px 14px`（左にアイコン分の余白）

### Inputs

**実サイトのトップ・下層に入力欄が存在しない**（`input` / `select` / `textarea` の実測が 0 件）。問い合わせは別ページ（`/contact/`）。

実装するときは、他のコンポーネントに合わせて:

- Background: `#ffffff`
- Border: `1px solid #1b244a`
- Border Radius: **`0px`**（このサイトに角丸は無い）
- Font: 秀英角ゴシック銀 M / 16px / 500 / line-height 2
- フォーカスは**角丸を足さず**、枠を `2px solid #d62116` に太くする

### Cards

- Background: `#ffffff`（または `#eff2f5` のセクション地の上に白）
- Border: なし（写真＋テキストで区切る）
- Border Radius: **0px**
- Shadow: なし。ボタンだけが `6px 6px 0 0 #e6e6e6` を持つ
- 商品名: 秀英角ゴシック銀 M / 25.6px / 700 / letter-spacing `.1em` / 中央寄せ

---

## 5. Layout Principles

### Spacing Scale

実測から確認できた値（CSS Custom Properties は 0 個なので、スケールは暗黙）。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 14px | ボタンの左 padding、テキストリンクの左右 |
| S | 16px | 要素間（`.mgn-btm16`） |
| M | 32px | 見出し下（`.mgn-btm32`） |
| L | 60px | フッター下 padding |
| XL | 96px | セクション上 padding（`.section_pdg`） |
| XXL | 112px | フッター上 padding |

### Container

| 文脈 | Max Width |
|------|-----------|
| **本文カラム（下層）** | **860px**（下層で 12 要素と最多） |
| 標準コンテナ | **1080px** |
| ワイドコンテナ | **1330px** / 1440px |
| フルブリード | 1455px / 1640px |

- Padding (horizontal): 20px 前後（`.inner`）

### Grid

- 商品カードは 3 列（下層 `.lps_sec`）
- `gap` の宣言は実測 0 件。**カラムの余白は `margin` で取っている**（Flexbox + margin の旧来型）

---

## 6. Depth & Elevation

**影は 1 種類しか無い。**

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | **既定。カード・セクション・ヘッダーすべて** | — |
| 1 | **`6px 6px 0 0 #e6e6e6`** | **セカンダリボタンのみ** | トップ 8 要素 / 下層 6 要素 |

- **ぼかし（blur）が 0。** 紙を重ねたような段差ではなく、**版ずれのような平らな影**。`rgba(0,0,0,.1)` 系のソフトシャドウに置き換えないこと
- `border-radius` は **50% が 2 要素だけ**（スライダーの丸ドット）。**それ以外はすべて `0px`**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`letter-spacing: .08em` と `line-height: 2` は `body` に 1 回だけ書く。** 子要素は継承に任せる
- **`font-feature-settings: "palt"` を `body` に書いて全体へ効かせる**（実測 591 要素）
- **太さはファミリー名で切り替える**（`秀英角ゴシック銀 M` ↔ `B`）。`font-weight` だけ変えても TypeSquare の書体は太くならない
- **`border-radius: 0` を既定にする。** 丸みを足すとこのサイトでは無くなる
- 影を使うなら **`6px 6px 0 0 #e6e6e6`** の 1 種類だけ
- 縦組みを使うのは**ヒーローとサイド固定のラベルだけ**。本文は横組み
- 和文フォントのスタックには**和名と英名を両方**書く（`"秀英角ゴシック銀 M", "Shuei KakuGo Gin M"`）

### Don't（禁止）

- **子要素で `letter-spacing: .08em` を再宣言しない。** 継承で 1.28px が降りているので、再宣言すると大きい文字だけ字間が開く
- **`line-height` を px で書かない。** このサイトは単位なしの `2` で、サイズごとに再計算される設計
- **`秀英角ゴシック銀 M` に `font-weight: 700` を当てない。** 太くならず（宣言が bold のため完全一致扱い）、意図とズレる
- **`typesquare_op` / `typesquare_option` クラスを手書きしない**（TypeSquare の JS が付けるマーカー）
- **Montserrat を読み込まない。** 実サイトは宣言だけで 1 文字も使っていない
- **`"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN"` をそのまま写さない。** Pro と ProN は別書体なので世代を揃える
- **Windows 用の游ゴシック Medium を省かない。** 実サイトは未対応だが、新規実装では `"Yu Gothic Medium"` / `"游ゴシック Medium"` を挟む
- `box-shadow` にぼかしを入れない。**このサイトの影は blur 0**
- 本文の色を `#333333` に薄めない。**実測は純黒 `#000000`**（可視 91 要素）

---

## 8. Responsive Behavior

### Breakpoints

実測した `@media` のうち出現回数が多いもの。

| Name | Width | 実測 | 説明 |
|------|-------|------|------|
| Mobile | `max-width: 767px` | **42 回** | **主ブレークポイント** |
| Tablet / Desktop | `min-width: 768px` | 10 回 | `print, screen` の複合で書かれている |
| Narrow Desktop | `max-width: 1080px` | 5 回 | ナビの折り返し |
| Desktop | `min-width: 1081px` | 4 回 | — |
| Wide | `min-width: 1081px and max-width: 1660px` | 2 回 | ヒーローの幅調整 |

### 幅ごとの実測値（`body`）

| 幅 | html | body font-size | line-height | letter-spacing | word-break |
|----|------|----------------|-------------|----------------|------------|
| 1440px | 16px | 16px | 32px | 1.28px | normal |
| 1200px | 16px | 16px | 32px | 1.28px | normal |
| 834px | 16px | 16px | 32px | 1.28px | normal |
| **375px** | 16px | **14px** | **28px** | **1.12px** | **break-word** |

> **モバイルで `body` が 14px に切り替わる**（`html` は 16px のまま）。`line-height: 2` と `letter-spacing: .08em` は比率で書かれているため **28px / 1.12px に自動で追従する**。
> **字間を px に読み替えると、モバイルで 1.28px のまま残って字間が開きすぎる。** 必ず `em` のまま書くこと。

### タッチターゲット

- セカンダリボタンの実測高さ **66px**、CTA は 210px。**44px 基準は満たしている**
- グローバルナビのリンクは `padding: 0 11.25px` / 高さ 30px。**モバイルではハンバーガーに切り替わる**

### フォントサイズの調整

- 本文: 16px → **14px**（375px）
- 見出しは比率指定ではなく個別に縮小される（`max-width: 767px` のメディアクエリ 42 件がこれを担う）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #d62116   (赤 CTA。サイト中で1つだけ)
Accent Color:  #1f284e   (紺。見出し・テキストリンク)
Surface:       #eff2f5
Text Color:    #000000
Background:    #ffffff
Font (body):    "秀英角ゴシック銀 M", "Shuei KakuGo Gin M", YuGothic, "Yu Gothic Medium", "ヒラギノ角ゴ ProN W3", sans-serif
Font (heading): "秀英角ゴシック銀 B", "Shuei KakuGo Gin B", YuGothic, "Yu Gothic Medium", "ヒラギノ角ゴ ProN W3", sans-serif
Font (en):      Poppins, sans-serif
Body Size: 16px (375px 以下は 14px)
Font Weight: 500 (本文) / 700 (見出し)
Line Height: 2        ← 単位なし
Letter Spacing: .08em ← body に 1 回だけ
font-feature-settings: "palt"
Border Radius: 0
Box Shadow: 6px 6px 0 0 #e6e6e6 (セカンダリボタンのみ)
```

### プロンプト例

```
大橋量器のデザインシステムに従って、商品一覧ページを作成してください。

- body に以下を 1 回だけ書き、子要素では再宣言しない:
    font-family: "秀英角ゴシック銀 M", "Shuei KakuGo Gin M", YuGothic, "Yu Gothic Medium", sans-serif;
    font-size: 16px; font-weight: 500;
    line-height: 2;            /* 単位なし */
    letter-spacing: .08em;     /* 子へは 1.28px として継承される */
    font-feature-settings: "palt";
- 見出しは font-weight ではなくファミリー名を "秀英角ゴシック銀 B" に切り替える
- セクション見出しは 32px / line-height 1.7 / letter-spacing .1em / color #1f284e
- 商品名は 25.6px / letter-spacing .1em / 中央寄せ
- カードは枠線も影も無し。角丸は全要素 0
- 「商品詳細へ」ボタンは 1px solid #1b244a・背景透明・影 6px 6px 0 0 #e6e6e6・
  padding 18px 63px 18px 14px（右を広く取る）
- ページ末尾の CTA は #d62116 の面に白 24px、600×210px
- 375px 以下で body を 14px にし、word-break: break-word を足す
```
