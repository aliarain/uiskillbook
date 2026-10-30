# DESIGN.md — 山櫻（YAMAZAKURA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-05 / 対象: `https://www.yamazakura.co.jp/`, `/about/brand-philosophy`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白地・黒文字・1px の枠線だけ。** 面色の CTA が 1 つも存在しない（実測: ボタンはすべて `background: transparent` ＋ `1px solid #212121`）。名刺・封筒の会社らしく、紙に刷った罫線のような構え
- **密度**: 低い。本文 `line-height: 1.60`、理念ページは `2.00`。余白を広くとり、1 画面に 1 メッセージ
- **キーワード**: 縦組みのタグライン、源ノ角ゴシック、字間 0.06em の継承、面色ゼロ、罫線だけ

**このサイトの核心は4つある。**

1. **ヒーローのタグラインが本物の縦組み。** `div.vertical-txt` に `writing-mode: vertical-rl` / **30px / line-height 48px / `letter-spacing: 17.4px`（= 0.58em）** / weight 400 で「出逢ふをカタチに」を組む（実測 2 要素）。**画像に焼き込んだ文字ではない**ので、テキストとして選択・読み上げができる
2. **字間を `body` に 1 回だけ書いて px で継承させる。** `body { letter-spacing: 0.96px }`（= 16px × **0.06em**）が **13px / 14px / 16px / 18px のどのサイズの要素にも同じ 0.96px で降りている**（実測 140/153 要素）。見出しだけが自分で `em` を宣言し直す
3. **Adobe Fonts で 5 本読み込んで、描画に使うのは 1 本だけ。** Typekit キット `ldp8tix` が **源ノ角ゴシック 3 ウェイト（200/300/400）＋ 源ノ明朝 2 ウェイト（300/400）** を `loaded` にしているが、**源ノ明朝は可視 0 要素**。実際に出ているのは `Muli, source-han-sans-japanese` のスタックだけ（可視 109〜150 要素）
4. **ウェイトは 400 と 700 の 2 段しかない。** 中間ウェイトを使わない（源ノ角ゴシックの 200 / 300 も読み込んでいるのに使っていない）

**CSS Custom Properties は自社分が 4 個だけ**（`--border` `--text` `--muted` `--head-bg`）。19 個ある `--vc-*` は **vue3-carousel**、`--hacobune-swiper-*` は動画プレイヤーのライブラリ由来。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

**このサイトにブランドカラーはない。** 面に使う色は白と黒（`#212121` の枠線）だけで、彩度のある色は**カテゴリバッジの 3 色**にしか現れない。

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Tag / 環境** | **`#94c727`** | ニュースのカテゴリバッジ「環境」（可視 2 要素） |
| **Tag / 社会貢献** | **`#dbaa80`** | 同「社会貢献」（可視 1 要素） |
| **Alert** | **`#f44343`** | `重要なお知らせ` のラベル（可視 1 要素） |

### Neutral（ニュートラル）

- **Text Primary** (`#111111`): 本文・見出し・ナビ。**可視 72〜111 要素で最多**
- **Text on Dark** (`#ffffff`): カード画像の上・フッター（可視 36〜40 要素）
- **Text Muted** (`#808080`): 事業紹介のリード、パンくず、コピーライト（可視 3〜11 要素）
- **Border（ボタン・区切り）** (`#212121`): **ボタンの `1px` 枠はこの色**。`#111111` ではない
- **Border（罫線）** (`#e5e5e5`): `--border` 変数の値
- **Surface Gray** (`#f6f6f6`): `--head-bg`（表ヘッダー）
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample (9/11)`。`heroCovered: false`）

> **宣言 ≠ 実装。** `--text: #222` と宣言されているが、**本文に実際に出ているのは `#111111`**（可視 111 要素）。`--muted: #757575` も実装は `#808080`。**変数の値をそのまま使わないこと。**

### 計測から除外する色（外部ウィジェット由来）

- **`#21759b`**（リンク青）と `rgb(241,241,241)` の面 — **accessilens.com のアクセシビリティツールバー**（`uni-toolbar-*` クラス、書体は PTSansRegular / Poppins）。**サイト本体の設計ではない**
- `rgba(0,0,0,0.2) 0 0 1px 1px` の影も同ツールバー由来

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一の実働）**: **源ノ角ゴシック**（Adobe Fonts、`source-han-sans-japanese`。キット `ldp8tix`）。`normal` / `200` / `300` の 3 ウェイトを読み込み、**描画に使うのは `normal`（400）と合成の 700 だけ**
- **明朝体**: **源ノ明朝**（`source-han-serif-japanese`、`normal` / `300`）を読み込んでいるが、**全ページで可視 0 要素**。宣言と読み込みだけが残っている

> **`document.fonts` の `loaded` を「使っている証拠」にしないこと。** 源ノ明朝は本当に 2 ウェイト読み込まれているが、`font-family` にこの名を書いた要素が 1 つもないので 1 文字も描画されない。判定は常に computed style の `font-family` 実測で行う。

### 3.2 欧文フォント

- **サンセリフ**: **Muli**（Google Fonts、`300` / `400` / `600` を宣言。実測 `400` と `600` が `loaded`、`300` は `unloaded`）。スタックの先頭にあり、**英数字は Muli、和文は源ノ角ゴシック**という和欧二層
- 等幅フォントは使っていない

### 3.3 font-family 指定

実サイトの宣言（`body`、そのまま）:

```css
font-family: Muli, source-han-sans-japanese, sans-serif, -apple-system, "system-ui",
             "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3", HiraKakuProN-W3,
             "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN",
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
             游ゴシック体, YuGothic, "Yu Gothic M", "游ゴシック Medium", "Yu Gothic Medium",
             メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic",
             "Helvetica Neue", HelveticaNeue, Helvetica, Arial, "Segoe UI", sans-serif,
             "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**実サイトはこうだが、正しくはこう。**

- **`sans-serif` が 3 番目に入っているため、4 番目以降は 1 つも到達しない。** generic family はどんな文字でも必ずマッチするので、`-apple-system` 以降のヒラギノ・游ゴシック・メイリオの長いチェーンは**書いてあるだけで死んでいる**
- 同じ CSS に `@font-face { font-family: "Yu Gothic M"; src: local("Yu Gothic Medium") }`（および `700` = `local("Yu Gothic Bold")`）があるが、**上の理由で到達しない**ため Windows の游ゴシック Medium 対策として機能していない
- 再現するならこう書く:

```css
/* 修正版（到達するチェーン） */
font-family: Muli, source-han-sans-japanese,
             "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3",
             "Yu Gothic M", "游ゴシック Medium", "Yu Gothic Medium",
             游ゴシック体, YuGothic, メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先（Muli が先頭）。** 英数字を Muli に、和文を源ノ角ゴシックに振り分ける意図
- `sans-serif` は**必ず末尾**に置く（途中に入れると以降が無効になる）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Tagline（縦組み）** | 源ノ角ゴ | **30px** | 400 | **1.60** (48px) | **17.4px (0.58em)** | **`writing-mode: vertical-rl`。サイトで唯一の縦組み** |
| Section Label (EN) | Muli | **40px** | 400 | 1.40 | **4px (0.10em)** | `SERVICE` `ABOUT US` `PEOPLE` `PLANET` |
| Page Heading | 源ノ角ゴ | 24px | **700** | **2.00** | 0.96px（継承） | 下層ページの `h2` |
| Sub Heading | 源ノ角ゴ | 20px | 400 | 1.60 | **2.4px (0.12em)** | `山櫻のものづくりの考え方` |
| Lead | 源ノ角ゴ | 16px | 400 | **2.10** | **1.44px (0.09em)** | トップのリード文 |
| Nav | 源ノ角ゴ | **18px** | 400 | 1.60 | **1.92px** | グローバルナビ（高さ 80px） |
| **Body** | 源ノ角ゴ | **16px** | 400 | **1.60** (25.6px) | **0.96px (0.06em)** | **body の既定値** |
| Body Wide | 源ノ角ゴ | 16px | 400 | **1.80 / 2.00** | 0.96px（継承） | 事業紹介・理念の本文 |
| Caption | 源ノ角ゴ | 14px | 400 | **1.60** (22.4px) | 0.96px（継承） | 日付・カテゴリ |
| List Item | 源ノ角ゴ | 13px | 400 | 1.54 (20px) | 0.96px（継承） | サブナビ・一覧 |
| UI Button | 源ノ角ゴ | 14px | 400 | 1.60 | **1.4px (0.10em)** | `印刷会社様向け` `ONLINE SHOP` |
| Menu Toggle | Muli | 12px | 400 | 1.60 | **1.2px (0.10em)** | `MENU` / `CLOSE` |
| Footer | 源ノ角ゴ | 10px | 400 | 1.60 | 0.96px（継承） | コピーライト |

### 3.5 行間・字間

- **本文の行間**: **1.60**（16px / 25.6px）。`body` に書いて継承（実測 97〜111 要素で最多）
- **読ませる本文の行間**: **2.00**（理念ページ、実測 48 要素）／ **2.10**（トップのリード、4 要素）／ **1.80**（事業紹介、9 要素）
- **欧文ラベルの行間**: **1.40**
- **字間**: **`body` の `0.96px` が 140/153 要素に px のまま継承**。見出し・ボタン・ラベルだけが自分で `em` を宣言し直す

**字間の設計を読み違えないこと。**

- **13px / 14px / 16px / 18px の要素が全部 `0.96px`** になっている ＝ **`body` に 1 回書いて継承させている**（各要素に `em` を当てているなら、サイズに比例して px が変わるはず）
- 継承値を `em` に読み替えると**小さい文字で字間が狭くなり、別物になる**。**`body { letter-spacing: 0.06em }` を 1 回だけ書き、子要素では再宣言しない**
- 例外的に `em` を当てているのは **欧文ラベル（0.10em）／ 小見出し（0.12em）／ リード（0.09em）／ 縦組みタグライン（0.58em）** の 4 系統だけ

### 3.6 禁則処理・改行ルール

```css
word-break: normal;        /* 実測値 */
overflow-wrap: normal;
line-break: auto;
```

- `word-break: auto-phrase` は使っていない
- **縦組みブロックは 1 行 8 文字で固定**（「出逢ふをカタチに」）。`line-height: 48px` が縦組みでは**行間＝字の左右の間隔**になる点に注意

### 3.7 OpenType 機能

**このサイトは `font-feature-settings` を一切使っていない**（実測 0 要素）。

- **`palt` を足さないこと。** 字詰めは `letter-spacing: 0.06em` で**逆に空ける**方向に設計されていて、`palt` を足すと意図と反対に働く
- 源ノ角ゴシックは約物を詰める機能を持つが、このサイトは使わない

### 3.8 縦書き

```css
.vertical-txt {
  writing-mode: vertical-rl;
  font-size: 30px;
  line-height: 48px;      /* 縦組みでは行の左右間隔 */
  letter-spacing: 17.4px; /* = 0.58em。字と字を大きく空ける */
  font-weight: 400;
  color: #111111;
}
```

- **ヒーロー右端のタグラインだけ**（実測 2 要素：`div.vertical-txt` とその中の `span`）
- **`letter-spacing: 0.58em` は横組みではありえない値。** 縦組みで字を大きく離して「掛け軸」のように見せる意図。**横組みに流用しない**
- 書体は本文と同じ源ノ角ゴシック（明朝にしない）

---

## 4. Component Stylings

**面色のボタンが 1 つも無いサイト。** すべて `background: transparent` ＋ `1px solid #212121` ＋ `border-radius: 0`。

### Buttons

**Primary（`more` — 事業紹介への導線）**
- Background: **`transparent`** / Text: `#111111`
- Border: **`1px solid #212121`**
- Border Radius: **`0px`**
- Font: 16px / weight 400 / line-height 1.60 / letter-spacing **0.96px**（継承）
- Size: **280 × 64px**

**Secondary（ヘッダー右上の 2 本）**
- Background: `transparent` / Text: `#111111`
- Border: `1px solid #212121` / Border Radius: `0px`
- Font: 14px / weight 400 / line-height 1.60 / letter-spacing **1.4px (0.10em)**
- Size: **249 × 48px**
- 例: `印刷会社様向け` / `ONLINE SHOP`

**Nav Link**
- Background / Border: なし
- Font: 18px（ドロワー内は 14px） / weight 400 / letter-spacing 1.92px
- Size: 高さ **80px**

### Cards（事業紹介）

- Background: `#ffffff`
- Border: なし（画像と文字を縦に積むだけ）
- Border Radius: **`0px`**
- Padding: `0 0 42px`
- Size: 幅 **239px** / 高さ 470px

### Badges（ニュースのカテゴリ）

- Background: なし（**文字色だけで区別する**）
- Text: `#94c727`（環境） / `#dbaa80`（社会貢献） / `#f44343`（重要なお知らせ）
- Font: 13px / weight 400

### Border Radius

| 値 | 用途 | 実測 |
|----|------|------|
| **`0px`** | **既定。ボタン・カード・画像すべて** | — |
| `50%` | SNS アイコンの円 | 2 要素 |
| `64px` | 追従する丸ボタン | 1 要素 |
| `3px` | 小さなラベル | 1 要素 |

---

## 5. Layout Principles

### Spacing Scale

実測から読み取れる値（`gap` を使わず `margin` / `padding` で組んでいるため、ボタンの寸法から逆算する）:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 14px | ボタン内側の上下（`15px 23px 14px`） |
| S | 23px | ボタン内側の左右 |
| M | 42px | カード下の余白 |
| L | 80px | **ヘッダー・ナビの高さ** |

### Container

- **`width: 100%`** のフルブリード構成（実測 2 要素）。固定のコンテナ幅を持たない
- カード幅 **239px** / ボタン幅 **249px・280px** が実質のモジュール

### Grid

- トップは「全画面動画のヒーロー ＋ 右端に縦組みタグライン」
- 事業紹介は **6 カラム**（239px のカードを横に並べる）
- 下層は 1 カラムの読み物レイアウト（`line-height: 2.00`）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。ボタン・カード・ナビはすべてフラット** |
| 1 | `0 8px 16px rgba(0, 0, 0, 0.22)` | 追従ボタン（**サイト全体で 1 要素のみ**） |

> **影で階層を作らないサイト。** 区別は **`1px solid #212121` の枠線**と余白で行う。
> もう 1 種類（`0 0 1px 1px rgba(0,0,0,0.2)`）が計測に出るが、**アクセシビリティツールバー由来**なので本体の設計に含めない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`body { letter-spacing: 0.06em }` を 1 回だけ書き、子要素では再宣言しない**（px に読み替えない。16px 基準で 0.96px になる）
- **ボタンは `background: transparent` ＋ `1px solid #212121` ＋ `border-radius: 0`**
- **本文は `line-height: 1.60`、読ませる本文は `2.00`** と切り替える
- **ウェイトは 400 と 700 の 2 段だけ**（200 / 300 を読み込んでいても使わない）
- **縦組みを使うのはヒーローのタグラインだけ。** `writing-mode: vertical-rl` / 30px / `letter-spacing: 0.58em`
- 欧文のセクションラベル（`SERVICE` `ABOUT US`）は **Muli 40px / `letter-spacing: 0.10em`**
- 本文色は **`#111111`**、罫線は **`#212121`**（変数の `#222` ではない）
- `font-family` の **`sans-serif` は必ず末尾**に置く

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない**（実測 0 要素。字間を空ける設計と逆方向）
- **面色の CTA を作らない。** ブランド色が存在しないサイトで、塗りのボタンを置くと一気に別物になる
- **`border-radius` を 4px / 8px にしない**（既定は `0`）
- **影でカードを浮かせない**（実質フラット）
- **源ノ明朝を前提に組まない。** 読み込まれてはいるが**可視 0 要素**で、明朝で組んだ箇所は 1 つもない
- **`--text: #222` / `--muted: #757575` を実装値として使わない**（実装は `#111111` / `#808080`）
- **`#21759b` や PTSansRegular / Poppins を設計に取り込まない**（外部のアクセシビリティツールバー由来）
- **字間の `0.96px` を `em` に換算し直さない**（継承値を再宣言すると小さい文字で崩れる）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| **Mobile** | **`(max-width: 720px)`** | **実測 295 件で圧倒的に最多。実質ここだけで分岐している** |
| Mobile (alt) | `(max-width: 719px)` | 33 件 |
| Desktop | `(min-width: 720px)` / `(min-width: 721px)` | 11 件 / 4 件 |
| Laptop | `(max-width: 1280px)` | 13 件 |
| Wide | `(max-width: 1660px)` | 3 件 |

- **2 段構成（720px 以下 / 以上）。** タブレット用の中間レイアウトを持たない

### ルートとフォントサイズ

- **`html { font-size: 10px }`（62.5%）だが `body` は `16px`。** `rem` を使うときは **1rem = 10px** として計算する
- **流体ではない。** 1440 / 1200 / 834 / 375px の 4 幅で実測し、`html` = `10px` / `body` = `16px` / `line-height` = `25.6px` / `letter-spacing` = `0.96px` がすべて同じ値だった

### タッチターゲット

- ナビ 80px、`more` 64px、ヘッダーボタン 48px はいずれも 44px を満たす

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #111111
Text Muted:   #808080
Border:       #212121（ボタン） / #e5e5e5（罫線）
Surface Gray: #f6f6f6
Background:   #ffffff
Tag Colors:   #94c727（環境） / #dbaa80（社会貢献） / #f44343（重要）

Font (JP): Muli, source-han-sans-japanese, "ヒラギノ角ゴ ProN W3",
           "Yu Gothic M", "游ゴシック Medium", 游ゴシック体, メイリオ, sans-serif
           ※ sans-serif は必ず末尾

Root:           html 10px（62.5%） / body 16px ※流体なし
Body Size:      16px
Line Height:    1.60（本文） / 2.00（読み物） / 1.40（欧文ラベル）
Letter Spacing: body に 0.06em を 1 回（＝ 0.96px が全要素へ継承）
Weights:        400 / 700 のみ
Radius:         0px
Button:         transparent + 1px solid #212121 + radius 0
Shadow:         なし
Vertical:       writing-mode: vertical-rl / 30px / letter-spacing 0.58em（タグラインのみ）
```

### プロンプト例

```
山櫻のデザインシステムに従って、事業紹介カードのセクションを作成してください。
- body に letter-spacing: 0.06em と line-height: 1.6 を 1 回だけ書き、子要素では再宣言しない
- font-family は Muli, source-han-sans-japanese, ... , sans-serif（sans-serif は末尾）
- 文字色 #111111、背景 #ffffff、ウェイトは 400 と 700 だけ
- カードは幅 239px / border-radius 0 / 影なし / 枠線なし、画像の下に見出しと本文
- セクションの欧文ラベルは Muli 40px / letter-spacing 0.10em / line-height 1.4
- 導線ボタンは 280 × 64px / background transparent / 1px solid #212121 / radius 0
- palt は使わない。面色のボタンは作らない
```
