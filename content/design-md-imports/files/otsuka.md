# DESIGN.md — 大塚製薬（Otsuka Pharmaceutical）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-14 / 対象: `https://www.otsuka.co.jp/`, `/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのあるオフホワイト（`#f5f4f2`）の地に、**角丸 20px の白いカード**を敷き詰める。製薬企業の硬さを角丸と余白で解く設計
- **密度**: 低い。本文の行間は **2.0 倍**（実測 106 要素）で、情報量より読みやすさに振っている
- **キーワード**: TBUDゴシック、UD書体、角丸20px、行間2.0、字間ゼロ

**このサイトの核心は3つある。**

1. **和文は TBUDゴシック（モリサワ TypeBank の UD 書体）を TypeSquare で配信している。** 実測 `TBUDゴシック R` 160 要素（下層）／136 要素（トップ）。`<body class="typesquare_option">` と `typesquare.js` → `wf.typesquare.com/ab.woff` の要求で確定。**UD書体を本文に全面採用している企業サイトは珍しい**
2. **太さは `font-weight` ではなくファミリー名で切り替える。** `@font-face` は `TBUDゴシック R` も `TBUDゴシック B` も `Sharoa Pro Regular` も**すべて `font-weight: bold` で宣言されている**（TypeSquare の方式）。太字が要る 1 要素だけ `font-family` を `TBUDゴシック B` に差し替えている（実測 1 要素・`バーチャル工場見学`）。**CSS の `font-weight` を上げても太くならない**
3. **`letter-spacing` は全要素 `normal`。** トップ 143/143 要素、下層 74/74 要素。**例外はひとつも無い**。`font-feature-settings` も 0 件で、`palt` も使っていない。**詰めない・空けない**のがこのサイトの構えで、代わりに行間 2.0 で余裕を作る

**CSS Custom Properties は 0 個**（トップ・下層とも）。色もサイズもすべて実値で書かれている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Otsuka Blue** | **`#426bba`** | **リンク文字 41 要素（トップ）/ 19 要素（下層）**。`詳しく見る` のテキスト、お知らせの見出しリンク、アウトラインボタンの枠と文字 |
| **Otsuka Red** | **`#b01c2e`** | **`New` バッジの面 7 要素**、カルーセルの現在位置ドット。差し色としてのみ使う |
| **Pale Blue** | `#bac4e3` | ニュースのカテゴリタブの面（**可視 5 要素**）。`#426bba` を薄めた面色 |

> **青と赤の役割は完全に分かれている。** 青は「読む・進む」（リンクとアウトライン）、赤は「新しい」（`New` バッジとカルーセルの現在位置）。**赤を CTA の面色に使わない。**

### Neutral（ニュートラル）

- **Background** (`#f5f4f2`): ページ背景。**可視 64 要素**。`pageBackground.resolved` = `rgb(245,244,242)` / 根拠 `body`
  - **注意**: トップは `heroCovered: true`（1440×777 のヒーロー画像が全面を覆う）。**ヒーローの青空はページの地色ではない。** 地色は `#f5f4f2`
- **Surface** (`#ffffff`): カードの面。角丸 20px の白カードがこの地色の上に乗る構造
- **Text Primary** (`#000000`): 本文・見出し（**可視 77 要素**）。**純黒を使う**
- **Text Muted** (`#5c5c5c`): フッターの規約リンク類（**可視 11 要素**）
- **Text on Dark** (`#ffffff`): 赤バッジ・青ドット上の文字（可視 14 要素）

---

## 3. Typography Rules

### 3.1 和文フォント

- **既定**: **TBUDゴシック R**（モリサワ TypeBank の UD ゴシック）。TypeSquare 配信・`loaded` 済。実測 160 要素（下層）
- **太字**: **TBUDゴシック B**。同じく TypeSquare 配信。**R とは別ファミリーとして指定する**
- **フォールバック**: 游ゴシック体 → ヒラギノ角ゴ Pro → メイリオ の順。実測 `ヒラギノ角ゴ ProN` が 9 要素だけ別スタックで出る

### 3.2 欧文フォント

- **Sharoa Pro Regular**（モリサワ TypeBank の欧文）。TypeSquare 配信・`loaded` 済。実測 5〜7 要素。`English` 切替、`Otsuka-people creating new products...` のような欧文見出しに使う
- 和文本文（TBUDゴシック R のスタック）側の欧文は TBUDゴシック R が持つ字形で出る

### 3.3 font-family 指定

```css
/* 和文本文（既定） */
font-family: "TBUDゴシック R", 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
             Osaka, Arial, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 和文の太字（R とは別ファミリー） */
font-family: "TBUDゴシック B", 游ゴシック体, YuGothic, /* 以下同じ */;

/* 欧文 */
font-family: "Sharoa Pro Regular", Arial, メイリオ, Meiryo,
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Osaka,
             游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
             "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

> **`@font-face` はすべて `font-weight: bold` で宣言されている**（`TBUDゴシック R` / `TBUDゴシック B` / `Sharoa Pro Regular` の3本とも、`document.fonts` で `loaded`）。TypeSquare はウェイトごとに別ファミリーを配信する方式なので、**`font-weight` の値は描画される太さを決めない**。

### 3.4 文字サイズ・ウェイト階層

| 用途 | サイズ | weight（宣言値） | 実際に描画される太さ |
|------|--------|------------------|----------------------|
| セクション見出し | 32px | 500 | TBUDゴシック R |
| 事業名・大見出し | 24px / 20px | 500 | TBUDゴシック R |
| 本文 | 16px | 500 | TBUDゴシック R |
| ナビ・カードタイトル | 14px | 500 | TBUDゴシック R |
| ユーティリティナビ | 12px | 500 | TBUDゴシック R |
| バッジ・補助 | 13px / 10px | 500 | TBUDゴシック R |
| **太字が要る見出し** | 16px | 700 | **TBUDゴシック B（ファミリーを差し替える）** |

- **実測のウェイト分布は 500 が 133 要素（トップ）/ 72 要素（下層）、400 が 10 要素、700 が 2 要素。** 事実上 1 段しかない
- **`font-weight: 700` を当てても太くならない。** 太字は `font-family: "TBUDゴシック B"` に差し替えて作る

### 3.5 行間・字間

- **`line-height` は無単位の `2`**（body 16px に対して 32px。12px→24px、14px→28px と**サイズに比例して再計算される**ことを実測で確認）
- **実測の行間比: `2.00` が 106 要素（トップ）/ 59 要素（下層）で最多。** 次が `1.60`（11 要素）、`1.42`（9 要素）、`1.56`、`1.90`
- **モバイル（≤749px）では body の行間が `1.75` に下がる**（body 12px / line-height 21px）
- **`letter-spacing` は `normal` 一択。** トップ 143/143 要素、下層 74/74 要素。**em でも px でも指定していない**

> **行間を px で書かない。** 無単位の `2` で継承させる設計なので、px に直すとサイズ違いの要素で破綻する。

### 3.6 禁則処理・改行ルール

- `word-break: auto-phrase` は使っていない
- 見出しの改行は HTML 側の `<br>` と文言調整で制御している

### 3.7 OpenType 機能

- **`font-feature-settings` は 0 件。`palt` も `halt` も使っていない**（トップ・下層とも）
- TBUDゴシック は UD 書体で字面が大きく、約物を詰めない前提の設計。**`palt` を足すと意図と変わる**

### 3.8 縦書き

- **縦組みは 0 要素。** `writing-mode` は全ページ `horizontal-tb`

---

## 4. Component Stylings

**`border-radius: 20px` がこのサイトの基準**（実測 46 要素で最多）。カードもボタンも 20px に揃う。

### Buttons

**Outline（`キャンペーン一覧`）**
- Background: `transparent`
- Text / Border: **`1px solid #426bba`** / `#426bba`
- Padding: `9px 32px 10px`
- Border Radius: **`20px`**
- Font: 14px / weight 500 / letter-spacing normal

**Pill（事業セレクタ `医療関連事業`）**
- Background: `#ffffff` / Text: `#000000`
- Padding: `10px 40px`
- Border Radius: **`100px`**（完全な丸）
- Font: 20px / weight 500

**Language Switch（`English`）**
- Background: `#f5f4f2` / Text: `#000000`
- Padding: `2px 0px 0px`
- Border Radius: `15px`
- Font: 12px / weight 500 / **Sharoa Pro Regular**

### Badges

**New Badge（角丸）**
- Background: **`#b01c2e`** / Text: `#ffffff`
- Padding: `1px 10px 0px`
- Border Radius: `10px`
- Font: 14px / weight 500

**New Badge（左端が角・右端が丸）**
- Background: `#b01c2e` / Text: `#ffffff`
- Padding: `0px 23px 0px 17px`
- Border Radius: **`0px 100px 100px 0px`**（画像の左端から生やすリボン型）
- Font: 12px / weight 500

**Carousel Dot**
- 現在位置: Background `#426bba` / Border `1px solid #426bba` / Radius `50%`
- 非選択: Background `#ffffff` / Border `1px solid #426bba` / Radius `50%`

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: **`20px`**（`18px` / `15px` の変種あり）
- Shadow: **`0 3px 4px rgba(0,0,0,0.1)`**
- 下層のリンクカードは `0 3px 3px rgba(0,0,0,0.1)`（実測 12 要素）

### Tabs

- カテゴリタブの面: `#bac4e3`（薄青）/ Text `#000000`
- 左端のタブだけ `border-radius: 20px 0px 0px 20px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 1–2px | バッジ内側の上下 |
| S | 10px | ピル型ボタンの上下 |
| M | 15px | カード内側の上 |
| L | 20px | カード内側 |
| XL | 32–40px | ボタン内側の左右 |
| 2XL | 48px | カード内側の右 |

### Container

- **Max Width: 1220px**（実測 5 要素・下層 4 要素で最多）
- 全幅セクション: 1920px
- 本文カラム: 900px / 狭いカラム: 460px

### Grid

- トップは全面ヒーロー（1440×777 の画像）＋ 角丸カードの 2〜3 カラム
- 下層は 1220px のコンテナに白カードを縦積み

---

## 6. Depth & Elevation

| レベル | 値 | 実測 |
|--------|-----|------|
| **Card** | **`0 3px 4px rgba(0,0,0,0.1)`** | **33 要素**。最も多い。カード全般 |
| Card（下層） | `0 3px 3px rgba(0,0,0,0.1)` | 12 要素。下層のリンクカード |
| Header | `0 6px 6px rgba(0,0,0,0.1)` | 2 要素。ヘッダーとカルーセルの操作バー |

- **影はすべて `rgba(0,0,0,0.1)` の黒 10%。** 色味は付けていない
- **ぼかしは 3〜6px と浅い。** 浮かせるのではなく「紙を一枚置いた」程度の段差

---

## 7. Do's and Don'ts

### Do（推奨）

- **和文は `"TBUDゴシック R"` をスタック先頭に置く**（TypeSquare 契約が無い環境では游ゴシック体に落ちる前提で書く）
- **太字は `font-family: "TBUDゴシック B"` に差し替えて作る**
- **`line-height` は無単位の `2`** で body に 1 回だけ書いて継承させる
- **`letter-spacing` は `normal` のまま**にする
- **角丸は 20px** を基準にする
- 影は `0 3px 4px rgba(0,0,0,0.1)` の 1 種類で足りる
- ページの地色は `#f5f4f2`、カードは `#ffffff` の二層で組む

### Don't（禁止）

- **`font-weight: 700` で太字を作らない。** `@font-face` が全部 `bold` 宣言なので**太さは変わらない**
- **`font-feature-settings: "palt"` を足さない**（実測 0 件。UD 書体の字面設計と衝突する）
- **`letter-spacing` を em で配らない**（実測 143/143 要素が `normal`）
- **`line-height` を px で書かない**（無単位 `2` が降る設計）
- **赤 `#b01c2e` を CTA の面色に使わない**（`New` バッジ専用）
- **ヒーローの青をページ背景色だと思わない**（`heroCovered: true`。地色は `#f5f4f2`）
- CSS Custom Properties は実測 0 個。**変数があるつもりで書かない**

---

## 8. Responsive Behavior

### Breakpoints

| 名前 | 条件 | 実測 |
|------|------|------|
| **SP** | `only screen and (max-width: 749.98px)` | **主要な分岐** |
| **PC** | `print, screen and (min-width: 750px)` | 同上の対 |
| Tablet | `(min-width: 750px) and (max-width: 834px)` | |
| — | `(min-width: 834px)` / `(min-width: 1100px)` | |
| Wide | `(min-width: 1220px) and (max-width: 1400px)` / `(min-width: 1400px)` | |

- **メディアクエリに `print` が併記されている**（`print, screen and (min-width: 750px)`）。印刷時は PC レイアウトで出る設計

### フォントサイズの調整

- **`html` は 6 幅すべてで `10px` 固定**（1440 / 1200 / 834 / 768 / 767 / 375px で実測）。流体ではない
- **`body` だけが 750px を境に切り替わる**:

| 幅 | body font-size | line-height | font-weight |
|---|---|---|---|
| **750px 以上** | **16px** | **32px（= 2.0）** | 500 |
| **749px 以下** | **12px** | **21px（= 1.75）** | **400** |

> **モバイルでは本文が 12px まで落ち、ウェイトも 500 → 400 に下がる。** 2.05 倍のような跳ね方はしないが、**行間比まで 2.0 → 1.75 に変わる**ので、px に読み替えて実装しない。

### タッチターゲット

- ピル型ボタン: `10px 40px` のパディングで 20px の文字を包む（高さ 約 50px）
- アウトラインボタン: `9px 32px 10px` + 14px（高さ 約 40px）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
和文:        "TBUDゴシック R"（TypeSquare / モリサワ TypeBank UD）
和文太字:    "TBUDゴシック B" ← ファミリー名で切り替える
欧文:        "Sharoa Pro Regular"
背景:        #f5f4f2
カード面:    #ffffff
ブランド青:  #426bba（リンク・アウトライン）
差し色の赤:  #b01c2e（New バッジのみ）
文字:        #000000 / 補助 #5c5c5c
行間:        2（無単位）／ SP は 1.75
字間:        normal（全要素）
角丸:        20px
影:          0 3px 4px rgba(0,0,0,0.1)
コンテナ:    1220px
BP:          749.98px / 750px
palt:        使わない
```

### プロンプト例

> 大塚製薬のデザインで作って。和文は `"TBUDゴシック R"` を先頭に置いた游ゴシック体フォールバックのスタック、**太字が要るところは `font-weight` を上げずに `"TBUDゴシック B"` にファミリーごと差し替える**（TypeSquare はウェイト別に別ファミリーを配信するので `font-weight` では太くならない）。地色は `#f5f4f2`、その上に `border-radius: 20px` / `box-shadow: 0 3px 4px rgba(0,0,0,0.1)` の白いカードを置く。**`line-height` は無単位の `2` を body に 1 回だけ書いて継承させ、`letter-spacing` は全要素 `normal`、`font-feature-settings` は書かない。** リンクとアウトラインボタンは `#426bba`、`New` バッジだけ `#b01c2e`。コンテナ 1220px、749px 以下で body を 12px / line-height 1.75 / weight 400 に落とす。
