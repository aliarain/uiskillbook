# DESIGN.md — 長崎県美術館（Nagasaki Prefectural Art Museum）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-08 / 対象: `https://www.nagasaki-museum.jp/`, `/about/concept`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白地に細い文字。**字間を一切足さず、`palt` で約物だけ詰める。** 色はロゴの赤 1 点のほかはグレー階調だけで、展示作品の色を邪魔しない
- **密度**: 低い。本文は `line-height: 1.8em`、見出しは中央寄せで上下に大きく空ける
- **キーワード**: あおとゴシック L、字間 normal、palt 全面、太さを書体名で切り替える、赤 1 点

**このサイトの核心は4つある。**

1. **和文は TypeSquare（モリサワ）配信の「あおとゴシック」で、L（Light）と DB（DemiBold）の 2 段しか使わない。** 可視 L 131 要素 / DB 11 要素（トップ）。**`font-weight` は 400 が 184 要素**で、`700` はトップの `News` 1 要素だけ。**太さは `font-weight` ではなくファミリー名で切り替える設計**
2. **`letter-spacing` は `normal` が既定。** トップで可視 185 要素中 **177 要素が `normal`**、下層は 76 要素中 **75 要素**。字間を足すのはセクション見出し 3 要素と `News` ラベルだけ
3. **それでいて `font-feature-settings: "palt"` はトップで 3309 要素に効いている。** 「字間は足さないが、約物の空きは詰める」。**字空けと字詰めを混同しないための教材のような組み方**
4. **`line-height` が `em` 単位で宣言されている**（`1.8em` / `1.7em` / `1.5em` / `1.4em` / `1.2em`）。16px の親で `1.7em` と書くと **27.2px という絶対値**が降り、12px のフッターリンクでは実測比 **2.27** になる。**単位なしの `1.7` に書き換えると別物になる**

**CSS Custom Properties は total 132 個あるが、自社のものは 6 個しかない。** 残りは WordPress / Gutenberg（49）、WordPress admin（11）、Swiper（2）、**VK Blocks（`--vk-*` / `--vk_*` 39）**、**intl-tel-input（`--iti-*` 25）**。設計トークンではなくプラグインの語彙。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Base Red** | **`#ff000f`**（`--base_color`） | **可視 2 要素**。ロゴの赤い縦線群、見出しの `border-left: 5px solid`（コンセプトページの `基本理念`）、一部リンク色 |
| **Room Blue** | **`#0065b2`** | **可視 5 要素**。トップの `第1室` `第2室` … のピル型バッジ |
| **Gallery Mint** | **`#c8f1e9`** | 可視 3 要素。`A室` `B室` `C室`（県民ギャラリー）のバッジ |

> **ブランド色は `--base_color: #ff000f` ひとつ。** 「赤」と呼べる色はこれだけで、面として大きく使う場所は無い。**ロゴの縦罫と見出しの左 5px 罫に限定する**。
> **トップで最も多い塗り色 `#80b538`（可視 178 要素）はブランド色ではない。** イベントカレンダーの Events Manager プラグイン既定色なので、**採用しないこと**。

### Neutral（ニュートラル）

- **Text Primary** (`#101010`): 本文・見出し。**可視 21 要素（トップ）/ 16 要素（下層）**。純黒ではなく **わずかに持ち上げた黒**
- **Text Link / Secondary** (`#333333`): ナビ・フッターリンク・日付。**可視 106 要素（トップ）/ 53 要素（下層）で最多**
- **Text Alt** (`#2b2b2b`): カレンダーの日付・お知らせ本文（可視 46 要素）
- **Text Muted** (`#999999`): ボタンの枠線色（`1px solid`）
- **Text Field** (`#555555`): 検索入力欄のプレースホルダ
- **Surface Light Gray** (`#d9dbdd`): `お知らせ` ラベルの面（可視 10 要素）
- **Surface Calendar** (`#dee3e9`): カレンダーの日付丸（可視 3 要素）
- **Surface Mega Menu** (`#f3f3f3`): グローバルナビのメガメニューの地
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample 3/3`）

> **`html` / `body` に背景色の宣言が無い**（`heroCover.canvasUnpainted: true`）。白は **UA 既定**であって指定ではない。**新規実装では `background: #ffffff` を明示すること。**

### Semantic（意味的な色）

専用の semantic パレットを持たない。`--vk-color-background-red: #dc3545` / `--vk-color-background-orange: #ffa536` / `--vk-color-background-green: #28a745` などが宣言されているが、**これは VK Blocks（WordPress プラグイン）の既定で、可視 0 要素**。**サイトの色として採用しないこと。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・既定）**: **あおとゴシック L**（モリサワ / TypeSquare 配信）
- **ゴシック体（強調）**: **あおとゴシック DB**（展覧会タイトルなど。可視 11 / 6 要素）
- **明朝体**: 使用しない（可視 0 要素）

**配信は TypeSquare（モリサワ）。** `https://typesquare.com/3/tsst/script/ja/typesquare.js?<eid>` を読み込み、**JS が `@font-face` を動的に注入する**。`document.fonts` で **あおとゴシック L / DB の 2 つだけが `loaded`**。

```css
/* TypeSquare が注入する @font-face（実測。手で書くものではない） */
@font-face { font-family: "あおとゴシック L";  font-weight: bold; src: url("//wf.typesquare.com/3/tsst/dist/ja/ts?...") }
@font-face { font-family: "あおとゴシック DB"; font-weight: bold; src: url("//wf.typesquare.com/3/tsst/dist/ja/ts?...") }
```

> **`font-weight: bold` は TypeSquare の仕様で、書体の太さとは無関係。** 各ファミリーに実体は 1 つしか無いので、CSS が `font-weight: 400` と書いても L はそのまま Light で描画される。
> **CSS には `あおとゴシック B` と `あおとゴシック R` も書かれているが、配信されていない**（`document.fonts` に無く、可視 0 要素）。**この 2 つを当てた要素は UA 既定書体で出る。真似しないこと。**

### 3.2 欧文フォント

- **サンセリフ**: **Raleway**（Google Fonts）。**カレンダーの曜日・日付だけ**（可視 42 要素）。スタックは `Raleway, HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **セリフ**: 使用しない
- **等幅**: 使用しない
- フッターのコピーライトだけ `Arial, Helvetica, "sans-serif"`（**`"sans-serif"` を引用符で囲っているのは誤り。generic family はクオートしない**）

### 3.3 font-family 指定

```css
/* 実サイトの宣言（そのまま） */
body            { font-family: "あおとゴシック L"; }
.el_title       { font-family: "あおとゴシック DB"; }
.calendar       { font-family: Raleway, HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif; }
```

**フォールバックの考え方 — 実サイトの引っかかり**:

- **`font-family: "あおとゴシック L";` にフォールバックが 1 つも書かれていない。** TypeSquare の JS が落ちたり読み込みに失敗すると、**UA 既定（多くの環境で明朝）に落ちる**
- **新規実装では必ずフォールバックを足す**:

```css
/* 推奨（ゴシックの系統を保つ） */
font-family: "あおとゴシック L",
             "Hiragino Sans", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN",
             "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
             "Noto Sans JP", sans-serif;
```

- `"あおとゴシック B"` / `"あおとゴシック R"` は**配信されていないので書かない**

### 3.4 文字サイズ・ウェイト階層

`html` は **16px 固定**（1440 / 1200 / 834 / 375px の 4 幅すべてで `16px`）。`rem` 宣言に `1.187rem` `1.437rem` `0.937rem` のような端数が多いため、**px は 16px 基準の換算値**。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Page Title** | あおとゴシック L | 44px | 400 | **normal** | normal | 下層の `h1`。中央寄せ、下に細い縦罫 |
| **Logo Mark** | あおとゴシック L | 32px | 400 | 32px | normal | ロゴの `h1`（画像置換） |
| **Lead Heading** | あおとゴシック L | 30px | 400 | **normal** | normal | `呼吸する美術館` |
| **Section Heading** | あおとゴシック L | 24px | 400 | normal | **2.4px = .1em** | `コレクション展（常設展示室）` |
| **Sub Heading** | あおとゴシック L | 22.992px (`1.437rem`) | 400 | 32.19px (1.40) | normal | `基本理念`。左に赤 5px 罫 |
| **Front Title** | あおとゴシック L | 21.6px | 400 | 1.00 | **2.592px = .12em** | `本日の展示・イベント` `お知らせ` |
| **Nav** | あおとゴシック L | 18.992px (`1.187rem`) | 400 | normal | normal | グローバルナビ（6 要素） |
| **Item Title** | **あおとゴシック DB** | 18px | 400 | 25.2px (1.40) | normal | 展覧会名（`.el_title`） |
| **Body ★** | あおとゴシック L | 16px | 400 | **28.8px**（`1.8em`） | **normal** | **既定** |
| **Sub Nav** | あおとゴシック L | 15px | 400 | normal | normal | `貸施設` `年間会員・寄附` 等 |
| **Date / Caption** | あおとゴシック L | 14.992px (`0.937rem`) | 400 | normal | normal | 会期の日付 |
| **Breadcrumb** | あおとゴシック L | 13.6px | 400 | normal | normal | パンくず |
| **Footer Link** | あおとゴシック L | 12px | 400 | **27.2px**（親の `1.7em` を継承） | normal | **比にすると 2.27** |
| **Label** | あおとゴシック L | 10px | 400 | normal | normal | `お知らせ` の最小ラベル |
| **News Label** | あおとゴシック L | 16px | **700** | normal | **0.8px = .05em** | **サイト唯一の `font-weight: 700`** |

**ウェイトは実質 1 段（400）。** 太く見える要素は `あおとゴシック DB` に切り替えたもの。

### 3.5 行間・字間

- **本文の行間**: **`line-height: 1.8em`**。16px の本文で **28.8px**。**`em` なので絶対値が子へ降りる**
- **フッター・ナビの行間**: **`line-height: 1.7em`** を 16px の親に書いており、12px の子リンクに **27.2px がそのまま降りる**（比 2.27）
- **見出しの行間**: **宣言なし（`normal`）**。`h1` 44px・`h2` 30px・ナビ 18.99px はすべて `normal`
- **本文の字間**: **`normal`**。可視 185 要素中 177 要素
- **見出しの字間**: 24px の見出しだけ `.1em`（2.4px）、21.6px の `front_title` が `.12em`（2.592px）、`News` が `.05em`（0.8px）

**CSS に現れる `line-height` の宣言単位**: `1.8em` / `1.7em` / `1.5em` / `1.4em` / `1.2em` / `1.25em` / `1.1em`。**単位なしの値はプラグイン（Bootstrap / Swiper）側だけ。**

**ガイドライン**:

- **`line-height` は `em` で書く。** このサイトは「親で決めた行送りを子に絶対値で配る」設計。単位なしに書き換えると、12px のフッターリンクが 20px 前後に詰まって別物になる
- **`letter-spacing` を本文に足さない。** あおとゴシックの素の字送りで組むのがこのサイト
- 字間を足すのは**セクション見出しだけ**（`.1em` 〜 `.12em`）

### 3.6 禁則処理・改行ルール

```css
/* 実測 */
word-break: normal;        /* 単語分割（CSS にコメント付きで明示） */
overflow-wrap: break-word; /* VK Blocks 側の既定 */
```

- **`word-break: normal` を明示している**（CSS に `/* 単語分割 */` のコメント付き）
- 4 幅（1440 / 1200 / 834 / 375px）すべてで `body` の `word-break` は `normal`。**モバイルでも切り替わらない**
- `line-break` / `word-break: auto-phrase` は使っていない

**禁則対象**（ブラウザ既定に任せている）:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";   /* トップ 3309 要素 / 下層 197 要素 */
```

- **`palt` を全面に効かせている。** 可視テキストのほぼすべて
- **`letter-spacing: normal` と `palt` の組み合わせがこのサイトの肝。** 約物（`「」（）・：`）の空きだけ詰め、仮名・漢字の字送りは触らない
- `"tnum"` `"halt"` `"kern"` の宣言は無い

> **`palt` を外すと、`コレクション展（常設展示室）` の括弧まわりが間延びする。** 逆に `letter-spacing` を足すと `palt` で詰めた分が相殺される。**どちらか片方だけを真似しないこと。**

### 3.8 縦書き

```css
/* 該当なし */
```

**縦組みは使っていない**（`typography.verticalWriting` がトップ・下層とも 0 件）。ロゴマークの縦線は SVG の図形であって文字ではない。

---

## 4. Component Stylings

### Buttons

**Pill（枠線ボタン — 既定）**

- Background: `transparent`
- Text: `#333333`
- Font: あおとゴシック L / 12px / 400
- Border: **`1px solid #999999`**
- Padding: `6px 18px`
- Border Radius: **`900px`**（完全なピル。`9999px` ではなく `900px`）
- Shadow: none

**Room Badge（展示室バッジ）**

- Background: `#0065b2`（県民ギャラリーは `#c8f1e9`）
- Text: `#ffffff` / あおとゴシック L / 14px / 400
- Padding: `2.8px 0 0`（中央寄せの固定幅）
- Border Radius: **`900px`**

**Text Link**

- Color: `#333333`、ホバーで `#777777`（`--hover_color`）
- 下線なし。**ホバーで色だけ変える**

**More（もっと見る）**

- Shadow: **`0 0 8px 0 rgba(0, 0, 0, .3)`** ← **サイト唯一の影**（可視 2 要素）

### Inputs

- Background: `#ffffff`
- Text: `#555555` / あおとゴシック L / **14.4px**
- Border: 実測なし（プラグイン既定の細枠）
- Border Radius: `4px`（検索窓）
- **送信ボタンだけ `font-family` が `Arial` 13.33px のまま**（UA 既定が残っている）。**新規実装では書体を揃えること**

### Cards

- Background: `#ffffff`
- Border: なし。**サムネイル画像とテキストの縦積み**で区切る
- Border Radius: `0px`（画像は角丸なし）
- Shadow: なし
- タイトル: **あおとゴシック DB** / 18px / line-height 25.2px / color `#333333`
- 日付: あおとゴシック L / 14.992px / color `#333333`

### Heading Rule（見出しの罫）

このサイトを特徴づける 2 つの罫:

- **赤い左罫**: `border-left: 5px solid #ff000f`（`基本理念` など h3）。**4px 版も CSS に存在する**
- **細い縦罫**: ページタイトル直下の 1px の縦線（約 48px）。`h2` の下は横罫

---

## 5. Layout Principles

### Spacing Scale

自社トークンは `--gb_lr_margin: 28px` の 1 つだけ。残りは VK Blocks の `--vk-margin-*` だが**可視 0 要素**なので採用しない。実測から:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | カレンダーのセル間（`gap`、181 要素） |
| S | 18px | 見出し下（`h2` の `padding-bottom`） |
| M | 28px | 左右の外側余白（`--gb_lr_margin`） |
| L | 40px | セクション間（`gap`） |
| XL | 64px | 大セクション間（`gap`） |

### Container

| 文脈 | Max Width |
|------|-----------|
| **ページ全体** | **1280px**（`--content_width`） |
| **本文カラム** | **780px**（トップで 35 要素と最多） |

- Padding (horizontal): 28px（`--gb_lr_margin`）

### Grid

- 展覧会カードは 3 列
- カレンダーは 7 列 × `gap: 5px`
- `gap` は **5px / 40px / 64px の 3 値だけ**

---

## 6. Depth & Elevation

**影はほぼ使わない。**

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | **既定。カード・ヘッダー・バッジすべて** | 下層は 0 種 |
| 1 | **`0 0 8px 0 rgba(0, 0, 0, .3)`** | **`もっと見る` ボタンのみ** | トップで可視 2 要素 |

- **`border-radius` は用途で 5 種**: `900px`（ピルボタン・バッジ）/ `50%`（カレンダーの日付丸、38 要素）/ `20px`（スライダーのドット、8 要素）/ `4px`（検索窓）/ `8px 8px 0 0`（カレンダーの見出し行）
- **カードと画像には角丸を付けない**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`letter-spacing` は `normal` のまま。** 字間を足すのはセクション見出しの `.1em` 〜 `.12em` だけ
- **`font-feature-settings: "palt"` を `body` に書いて全体へ効かせる**（実測 3309 要素）
- **太さはファミリー名で切り替える**（`あおとゴシック L` ↔ `DB`）。`font-weight` は 400 のまま
- **`line-height` は `em` で書く**（本文 `1.8em`、ナビ・フッター `1.7em`）
- **`background: #ffffff` を明示する。** 実サイトは `html` / `body` とも未指定で UA 既定に頼っている
- **フォールバックを足す。** 実サイトは `"あおとゴシック L"` 単独だが、ヒラギノ → 游ゴシック Medium → Noto Sans JP → `sans-serif` を続ける
- 赤 `#ff000f` は**ロゴと見出しの左罫だけ**に使う

### Don't（禁止）

- **本文に `letter-spacing` を足さない。** `palt` と二重にかかって約物まわりが崩れる
- **`line-height` を単位なしに書き換えない。** `1.7em` は 27.2px という絶対値として 12px の子に降りている（実測比 2.27）
- **`font-weight: 700` を使わない。** サイト全体で 1 要素しか無く、あおとゴシックに Bold は配信されていない（合成太字になる）
- **`"あおとゴシック B"` / `"あおとゴシック R"` を書かない。** CSS には残っているが配信されておらず、UA 既定書体に落ちる
- **`#80b538`（緑）を採用しない。** イベントカレンダー（Events Manager プラグイン）の既定色で、可視 178 要素あるがブランド色ではない
- **`--vk-*` / `--iti-*` の変数を設計トークンとして扱わない。** VK Blocks と intl-tel-input の語彙で、ほぼすべて可視 0 要素
- **generic family をクオートしない。** 実サイトのフッターに `Arial, Helvetica, "sans-serif"` があるが、`"sans-serif"` は文字列扱いになり generic family として機能しない
- 見出しに `line-height` を足さない。**実サイトは `normal`** で、書体のメトリクスに任せている

---

## 8. Responsive Behavior

### Breakpoints

自社の切り替え幅は変数で持っている: `--chg_width_cmn: 769px` / `--chg_width_hdr: 880px`。

| Name | Width | 実測 | 説明 |
|------|-------|------|------|
| **Header 切替** | `max-width: 880px` | **60 回** | **主ブレークポイント**（`--chg_width_hdr`）。グローバルナビがハンバーガーに |
| Common 切替 | 769px | 変数 | `--chg_width_cmn`。本文まわり |
| Small | `max-width: 480px` | 9 回 | カレンダーの縮退 |
| Bootstrap 系 | 575.98 / 767.98 / 991.98 / 1199.98px | 各 6〜14 回 | **VK Blocks（Bootstrap）由来。自社の設計ではない** |

### 幅ごとの実測値（`body`）

| 幅 | html | body font-size | line-height | letter-spacing | word-break |
|----|------|----------------|-------------|----------------|------------|
| 1440px | 16px | 16px | normal | normal | normal |
| 1200px | 16px | 16px | normal | normal | normal |
| 834px | 16px | 16px | normal | normal | normal |
| 375px | 16px | 16px | normal | normal | normal |

> **`body` は 4 幅すべてで同じ。** 流体ルートもブレークポイント切替も無い。**モバイルでも本文は 16px のまま**で、縮むのは見出しとレイアウトだけ。

### タッチターゲット

- ピルボタンの実測高さは `12px + padding 6px×2 ≒ 31px`。**44px に届かない**
- **新規実装では `min-height: 44px` を足すこと**

### フォントサイズの調整

- 本文は縮小しない（16px 固定）
- 見出しは `max-width: 880px` のメディアクエリで個別に縮小（`h1` 44px → モバイルでは 1.75rem 前後）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #ff000f   (ロゴ・見出しの左罫のみ)
Accent Blue:   #0065b2   (展示室バッジ)
Text Color:    #101010   (本文・見出し)
Link Color:    #333333   / hover #777777
Border:        #999999
Background:    #ffffff   ← 明示すること
Font: "あおとゴシック L", "Hiragino Sans", "Yu Gothic Medium", "Noto Sans JP", sans-serif
Font (強調): "あおとゴシック DB", ...同じフォールバック
Font (数字):  Raleway, "Helvetica Neue", Arial, sans-serif
Body Size: 16px (全幅で固定)
Font Weight: 400 固定（太さは書体名で切り替える）
Line Height: 1.8em  ← em 単位。単位なしにしない
Letter Spacing: normal ← 本文に足さない
font-feature-settings: "palt"
Border Radius: 900px (ピル) / 0 (カード・画像)
Container: 1280px / 本文 780px
```

### プロンプト例

```
長崎県美術館のデザインシステムに従って、展覧会一覧ページを作成してください。

- body:
    background: #ffffff;
    color: #101010;
    font-family: "あおとゴシック L", "Hiragino Sans", "Yu Gothic Medium", "Noto Sans JP", sans-serif;
    font-size: 16px; font-weight: 400;
    line-height: 1.8em;        /* em 単位。単位なしにしない */
    letter-spacing: normal;    /* 本文に字間を足さない */
    font-feature-settings: "palt";
- 強調したい語・展覧会タイトルは font-weight ではなく font-family を
  "あおとゴシック DB" に切り替える（700 は使わない）
- セクション見出しだけ letter-spacing: .1em を足す
- 見出しに line-height を書かない（normal のまま）
- 小見出しの左に border-left: 5px solid #ff000f を付ける
- ボタンは背景透明・1px solid #999999・border-radius: 900px・padding 6px 18px・12px。
  ただし min-height: 44px を足す（実サイトは 31px でタッチ基準を満たしていない）
- 展示室バッジは #0065b2 の面に白 14px、border-radius: 900px
- コンテナ 1280px、本文カラム 780px、左右の外側余白 28px
- カードは枠線も影も角丸も無し
```
