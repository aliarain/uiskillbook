# DESIGN.md — 日本民藝館（The Japan Folk Crafts Museum）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-13 / 対象: `https://mingeikan.or.jp/`, `/about/soetsu/?lang=ja`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **字詰めを一切しない。** `palt` も約物サブセットも使わず、Shippori Mincho（しっぽり明朝）を素のまま組む。柳宗悦の民藝館らしく、装飾を足さずに書体の素性で見せる
- **密度**: 中。トップは写真のヒーロー＋3 カラム（開催中 / お知らせ / 開館日カレンダー）、下層は 1 カラムの読み物
- **キーワード**: しっぽり明朝、字間ゼロ、Cinzel のカレンダー、角丸ゼロ、生成りの地色 `#fdfbfa`

**このサイトの核心は 4 つある。**

1. **`letter-spacing` が可視要素の全件で `normal`。** トップ 123/123 要素、下層 87/87 要素。CSS 全文の宣言も **4 件**しかなく、そのうち 2 件は `0px` に戻すもの。**字間という操作を設計から外している**
2. **`font-feature-settings` の宣言が 0 件。** `palt` も `halt` も無い。約物サブセット（YakuHan 系）も使っていない。**約物は全角幅のまま出る**
3. **書体を役割で 3 つに分ける。** 見出し・ナビ＝**Shippori Mincho**（トップ 34 要素 / 下層 **42 要素**）、本文・UI＝**Noto Sans JP**、カレンダーの曜日と日付＝**Cinzel**（ローマン体の欧文、トップ 38 要素）。**カレンダーだけ別書体**というのがこのサイトの指紋
4. **ゴシック側に太字が無い。** 可視の `font-weight: 700` は **Cinzel（31 要素）と Shippori Mincho（25 要素）だけ**。`document.fonts` 上 **Noto Sans JP の `700` は `unloaded`**。**太字は明朝と欧文で作る設計**

**CSS Custom Properties は自社トークン 0 個**（60 個すべて WordPress / Gutenberg の preset）。
**`html` は 6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）すべてで 16px、`body { font-size: 100% }` の完全固定。** 流体スケールは使っていない。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Ink（面）** | **`#222222`** | ナビの現在地、フッター全面（トップ 1 要素 / 下層 2 要素） |
| **Section Bar** | **`#444444`** | **`開催中` `お知らせ` `開館日カレンダー` の見出し帯（可視 6 要素）**。3 カラムを揃える唯一の面色 |
| **Sunday Red** | **`#f1503a`** | **カレンダーの日曜と休館日だけ（可視 6 要素）**。サイトで唯一の彩度のある色 |

> **ブランドカラーと呼べる面色は無い。** 黒（`#222222` / `#444444`）とグレーの階調だけで組み、赤は暦の意味づけにしか使わない。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 見出し・本文（トップ 42 要素 / 下層 36 要素）。**純黒を使う**
- **Text Body** (`#333333`): 補足テキスト（トップ 30 要素 / 下層 13 要素）
- **Text on Dark** (`#ffffff`): 帯・フッター上のテキスト（トップ 24 要素 / 下層 21 要素）
- **Text Muted** (`#999999`): カレンダーの休館日・枠線（可視 5 要素）
- **Surface Gray** (`#eeeeee`): カレンダーのヘッダ行、展示カードの面（**可視 9 要素**）
- **Surface Gray 2** (`#dddddd`): カレンダーの休館日セル（**可視 16 要素の文字色／4 要素の面**）
- **Surface Light** (`#f6f6f6`): 施設案内の面
- **Divider** (`#cccccc`): サブメニューの面
- **Scrim** (`rgba(0,0,0,0.9)` / `rgba(0,0,0,0.5)` / `rgba(0,0,0,0.3)`): モーダル背景・`TOPへ` ボタン
- **Background** (`#fdfbfa`): **ページ背景（`pageBackground.resolved` / 根拠 `body`）。純白ではなく、わずかに温かい生成り**

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（見出し・ナビ・展示名）**: **Shippori Mincho**（Google Fonts）。`400` / `700` とも `loaded`。**実測 35 サブセットを読み込んでいる**
- **ゴシック体（本文・UI）**: **Noto Sans JP**（Google Fonts）。`400` が `loaded`、**`700` は `unloaded`**。実測 37 サブセット

### 3.2 欧文フォント

- **Cinzel**（Google Fonts、`400` が `loaded`）: **カレンダーの曜日（`Sun` `Mon`…）と日付の数字専用**。トップで 38 要素
- **Barlow Semi Condensed** が `@font-face` で宣言されているが **`unloaded`・可視 0 要素**。**フォールバック前提で組むこと**

### 3.3 font-family 指定

```css
/* 本文・UI */
font-family: Roboto, "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium",
             游ゴシック体, YuGothic, "Hiragino Sans",
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, "Meiryo UI", sans-serif;

/* 見出し・ナビ・展示名 */
font-family: "Shippori Mincho", serif;

/* カレンダー */
font-family: Cinzel, serif;
```

**フォールバックの考え方**:
- **游ゴシックの Windows 対策を「スタック順」で解いている。** `"游ゴシック Medium", "Yu Gothic Medium"` を `游ゴシック体, YuGothic` の**前**に置くことで、Windows では Medium に当たる。`@font-face` の別名方式より軽いが、**macOS（Noto Sans JP）と Windows（Medium）で太さが揃わない**
- **実サイトはこうだが、正しくはこう** — **先頭の `Roboto` は Web フォントとして読み込んでいない**（フォント要求 73 件のうち Roboto は **0 件**）。Roboto を持たない環境（macOS 既定）では素通りし、英数字も `Noto Sans JP` で出る。**Roboto を本当に使いたいなら読み込むか、落とすなら削ること**
- generic family（`serif` / `sans-serif`）は末尾だけ。スタックの途中に無いので全候補が生きている

### 3.4 文字サイズ・ウェイト階層

**`html` は 6 幅すべてで 16px 固定**（`body { font-size: 100% }`）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Page Title** | **Shippori Mincho** | **24px** | 400 | 1.40 | **normal** | **下層のページタイトル（10 要素）** |
| Heading | Shippori Mincho | 18px | **700** | 1.20 | normal | カレンダーの月送り `«` `»` |
| Footer Name | Shippori Mincho | 16px | **700** | 1.30 | normal | `公益財団法人 日本民芸館` |
| Nav | Shippori Mincho | 14px | **700** | 1.50 | normal | `展示` `日本民藝館について` |
| Column Head | Shippori Mincho | 14px | 400 | 1.50 | normal | `開催中` `お知らせ`（白抜き・`#444444` の帯） |
| Exhibition Title | Shippori Mincho | 13px | **700** | 1.50 | normal | `創設90年記念` |
| Sub Nav | Shippori Mincho | 13px | 400 | 1.40 (18.2px) | normal | サブメニュー項目 |
| Exhibition Sub | Shippori Mincho | 12px | **700** | 1.30 | normal | `尚家関連品と護得久家伝来品` |
| **Body** | **Noto Sans JP** | **13px** | 400 | **2.00** | **normal** | **本文の既定（可視 45 要素で最多）** |
| Lead | Noto Sans JP | 16px | 400 | 1.50 | normal | リード |
| Date | Noto Sans JP | 12px | 400 / **500** | 1.30 | normal | `2026年10月12日` |
| Nav Label | Noto Sans JP | 11px | 400 | 1.50 | normal | `開館時間・入館料` |
| Link | Noto Sans JP | 11.2px | 400 | 1.50 | normal | `一覧を見る` |
| Caption | Noto Sans JP | 10px | 400 | 1.30 | normal | `詳しくはこちら`（18 要素） |
| Footer Link | Noto Sans JP | 9px | 400 | 1.20 | normal | `サイトポリシー` `サイトマップ` |
| **Calendar Head** | **Cinzel** | **12px** | **600** | 1.50 (18px) | normal | **`Sun` `Mon`。日曜のみ `#f1503a`** |
| **Calendar Date** | **Cinzel** | **13px** | **700** | 1.50 (19.5px) | normal | **日付の数字（31 要素）** |

**ウェイトは 400 / 500 / 600 / 700 の 4 段**だが、**実体は偏っている**。

> **「見出しほど太い」が成り立つのは明朝と欧文だけ。** 可視の `700` はトップ 59 要素のうち **Cinzel 31 ＋ Shippori Mincho 25**。
> **ゴシックスタック（Noto Sans JP）の葉要素に `700` は 1 件も無い。** `document.fonts` でも `Noto Sans JP 700` は `unloaded`。
> **本文を太字にしたいときは、ウェイトを上げずに Shippori Mincho へ切り替えるのがこのサイトの流儀。**

### 3.5 行間・字間

- **本文の行間**: **2.00**（13px / 26px。下層で 14 要素）。トップの UI は **1.50**（44 要素）
- **見出しの行間**: **1.20〜1.40**
- **カードの行間**: **1.30**（トップ 19 要素 / 下層 20 要素）
- **字間**: **可視要素の全件が `normal`。** トップ 123/123、下層 87/87。**例外は 1 件も無い**

```css
/* CSS 全文にある letter-spacing 宣言（4 件で全部） */
.mce-content-body .pagecontents > h2      { letter-spacing: 0.2em; }
.mce-content-body .pagecontents > h2 span { letter-spacing: 0px; }   /* ← 戻している */
.mce-content-body .pagecontents_en > h2   { letter-spacing: 0.2em; }
```

> **`0.2em` の宣言は記事本文の `h2` 専用で、実測した 2 ページでは 1 要素も当たっていない。** 字間を使うのは記事見出しだけ、という設計。

**ガイドライン**:
- **`letter-spacing` を書かない。** しっぽり明朝の素の字送りを信じる設計で、字間を足すと印象が変わる
- **`line-height` は必ず要素ごとに宣言する。** `html { line-height: 1 }`（無単位）が降りてくるため、宣言し忘れると行が潰れる（実測 比率 `1.00` がトップ 28 要素 / 下層 **35 要素**）
- 本文は **2.00**、UI は **1.50**、見出しは **1.20〜1.40**。**この 3 段の落差が紙面らしさを作っている**

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの宣言は 1 件のみ */
.screen-reader-text { word-break: normal !important; }
```

- **`word-break` / `overflow-wrap` / `line-break` を実質的に宣言していない。** 改行位置はブラウザ既定
- **`word-break: auto-phrase` も使っていない**
- 長い URL を置く場合は **自前で `overflow-wrap: break-word` を足すこと**

### 3.7 OpenType 機能

```css
/* font-feature-settings の宣言は 0 件 */
```

- **`palt` も `halt` も使わない。** 約物サブセット（YakuHanJP 等）も読み込んでいない
- **約物（`、。「」（）`）は全角幅のまま出る。** 「詰めない」ことがこのサイトの字面を決めている
- **再現するときに `palt` を足さない。** 足すと見出しのしっぽり明朝が詰まって、まったく別の印象になる

### 3.8 縦書き

```css
/* writing-mode の宣言は 0 件 */
```

- **縦組みは使っていない**（実測 `verticalWriting` 0 要素）。ヘッダーのロゴ `日本民藝館 / The Japan Folk Crafts Museum` は **DOM にテキストとして存在しない**（全要素走査で該当なし）＝画像置換。**書体の指定は効かないので、ここを Shippori Mincho で組み直そうとしない**

---

## 4. Component Stylings

### Buttons

**Floating（TOPへ）**
- Background: `rgba(0,0,0,0.5)`
- Text: `#ffffff` / 13px / weight 400（Noto Sans JP）
- Padding: `10px 12px 12px 30px`（**左に 30px。アイコン分**）
- Border Radius: **4px**

**Sub Nav Item**
- Background: `#cccccc`
- Text: `#222222` / **Shippori Mincho** 13px / weight 400
- Line Height: 18.2px
- Padding: `12px 20px`
- Border Radius: **0**

### Section Header（3 カラムの帯）

- Background: `#444444`
- Text: `#ffffff` / **Shippori Mincho** 14px / weight 400
- Border Radius: **0**
- > `開催中` `お知らせ` `開館日カレンダー` の 3 本。**カラムの幅を揃える役目を兼ねている**

### Calendar

- Header Cell: Background `#eeeeee` / Border `1px solid #999999` / **Cinzel** 12px / weight 600 / Padding `3px 0`
  - 日曜のみ Text `#f1503a`、他は `#333333`
- Closed Day Cell: Background `#dddddd` / Text `#999999` / **Cinzel** 13px / weight 700 / Padding `8px 0`
- Border Radius: **0**
- > **左右端だけ `4px 0 0 4px` / `0 4px 4px 0` で丸めている**（各 1 要素）

### Cards

- Background: `#eeeeee`（展示カード）/ `#f6f6f6`（施設案内）
- Border Radius: **0**
- Shadow: `rgba(0,0,0,0.2) 0 1px 3px`（1 要素のみ）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| S | 12px |
| M | **20px**（`padding-left` の内側） |
| L | **40px**（`padding-left` の最多値・3 要素） |

### Container

- Max Width: **1200px**（実測 6 要素）
- Padding (horizontal): **40px**（外側）/ **20px**（内側）

### Grid

- トップは **3 カラム**（開催中 / お知らせ / 開館日カレンダー）
- `gap` の宣言は無く、マージンで組んでいる

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。ほぼ全要素** |
| 1 | `rgba(0,0,0,0.2) 0 1px 3px` | カード（1 要素） |
| 2 | `rgba(0,0,0,0.2) 0 8px 8px -8px` | 下層の固定ヘッダ下の落ち影（1 要素） |

**影は 2 種類・各 1 要素しかない。** 階層は**罫線（`#999999`）と面（`#eeeeee` / `#dddddd` / `#f6f6f6`）**で作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- **見出し・ナビ・展示名は `"Shippori Mincho", serif`。** 本文・UI は Noto Sans JP
- **カレンダーの曜日と日付は `Cinzel, serif`。** 和文と混ぜない
- **`line-height` を要素ごとに必ず宣言する**（`html { line-height: 1 }` が降りてくる）。無単位で書く
- 本文 **2.00**、UI **1.50**、見出し **1.20〜1.40**
- ページ背景は **`#fdfbfa`**（純白ではない生成り）
- 角丸は **0 が既定**。例外は `TOPへ` の `4px` とカレンダー両端だけ
- 太字が要るときは **ウェイトを上げずに Shippori Mincho へ切り替える**

### Don't（禁止）

- **`letter-spacing` を書かない。** 実測で可視要素の **全件**が `normal`
- **`font-feature-settings: "palt"` を足さない。** 実測 0 件。足すと明朝の字面が別物になる
- **YakuHanJP / YakuHanMP などの約物サブセットを入れない。** このサイトは約物を全角幅のまま出す
- **Noto Sans JP に `font-weight: 700` を当てない。** `document.fonts` 上 `unloaded` で、葉要素にも 1 件も無い。合成太字になる
- **`Barlow Semi Condensed` を使わない。** 宣言はあるが `unloaded`・可視 0 要素
- **`Roboto` を「使われている書体」として扱わない。** スタック先頭にあるがフォントファイルを 1 件も要求していない
- **ヘッダーのロゴをテキストで組み直さない。** 実サイトは画像置換で、DOM にテキストが無い
- 影を増やさない（実測 2 種類・各 1 要素）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 宣言数 | 説明 |
|------|-------|--------|------|
| **Mobile** | **≤ 735px** | **102** | **主ブレークポイント。ここで 3 カラムを 1 カラムへ** |
| Container | ≤ 1200px | 6 | `max-width` の折り返し |
| Tablet | ≤ 1000px | 3 | 補助 |
| XS | ≤ 350 / 374px | 2 / 1 | 微調整 |

- **`max-width: 735px` が 102 宣言と圧倒的。** 実質 2 段階（〜735px / 736px〜）の設計
- **`html` は全幅で 16px のまま動かない。** 流体スケールもブレークポイントごとのルート切替も使っていない

### タッチターゲット

- カレンダーのセルは `padding: 8px 0` ＋ 行高 19.5px ＝ **約 36px**。**44px に満たない**
- サブナビは `padding: 12px 20px` ＋ 行高 18.2px ＝ **約 42px**。こちらも僅かに足りない
- **新規実装では縦 padding を足して 44px を確保すること**

### フォントサイズの調整

- ルートが固定なので、**サイズ変更はコンポーネント側のメディアクエリで行う**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Section Bar:    #444444
Ink:            #222222
Sunday Red:     #f1503a
Text Color:     #000000 / 補助 #333333
Background:     #fdfbfa
Font (mincho):  "Shippori Mincho", serif          ← 見出し・ナビ・展示名
Font (gothic):  Roboto, "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, sans-serif
Font (calendar):Cinzel, serif
Root Size:      16px (全幅固定)
Body Size:      13px
Line Height:    2.00 (本文) / 1.50 (UI) / 1.20〜1.40 (見出し)  ※必ず宣言する
Letter Spacing: normal （書かない）
palt:           使わない
Border Radius:  0
```

### プロンプト例

```
日本民藝館のデザインシステムに従って、展覧会一覧セクションを作成してください。
- 見出しと展覧会名は "Shippori Mincho", serif、本文は Noto Sans JP
- letter-spacing は一切書かない（normal のまま）
- font-feature-settings も書かない（palt なし）
- line-height は必ず宣言する（html に line-height: 1 が入っている前提）。本文 2.00
- セクション見出しは #444444 の帯に白の明朝 14px、角丸 0
- ページ背景は #fdfbfa、本文色は #000000
- 太字が要るときは font-weight を上げず、Shippori Mincho 700 に切り替える
- 影は付けない
```
