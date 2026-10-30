# DESIGN.md — 阪急阪神不動産（Hankyu Hanshin Properties）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-12 / 対象: `https://www.hhp.co.jp/`, `/corp/message/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **`palt` を `body` に1回書いて全画面を詰める。** 阪急のマルーン寄りの紫（`#7f0073`）からピンク（`#c32381`）へのグラデーションが唯一の強い色で、それ以外は白と灰で組む
- **密度**: 低め。12px の小さい文字を大量に並べるメガメニュー型のナビと、ゆったりした 30px の明朝ヘッドラインが同居する
- **キーワード**: palt 1175 要素、紫→ピンクのグラデーション、事業色6色、明朝は見出しだけ、root 10px

**このサイトの核心は4つある。**

1. **`font-feature-settings: "palt"` を `body` に1行だけ書き、1175 要素へ継承させている**（`html` は `normal`、`body` が `"palt"`）。抽出器が数えた可視テキストでもトップ **531 要素** / 下層 **258 要素**。**このサイトの和文の詰まり方は `letter-spacing` ではなく `palt` で作られている**
2. **`palt` の上に、さらに小さい正の `letter-spacing` を重ねる。** ナビ 15px に `0.6px`（= 0.04em）、ヘッドライン 30px に `1.8px`（= 0.06em）、リンク 14px に `0.84px`（= 0.06em）。**詰めてから、わずかに空け直す**という二段構え
3. **明朝（Noto Serif JP）は見出しだけ。** トップのヒーロー見出し 30px が **13 要素**、下層のページタイトル 42px が **1 要素**。本文は全部ゴシック。`@font-face` は 200〜900 の 8 ウェイト宣言されているが、**`loaded` は 500 の1本だけ**
4. **事業カテゴリに6色のバッジ色を持つ。** `#4ea075`（サステナビリティ）/ `#347885`（ロジスティクス）/ `#8ca546`（開発事業）/ `#6da5ad`（DX）/ `#c76fa3`（エリアマネジメント）/ `#868e98`（その他）。いずれも 11px / radius 2px の小さなタグ

**CSS Custom Properties は 2 ページとも 0 個。** 設計トークンは存在しない。
**縦組みは 0 要素。**

> **weight 700 の要素はすべて OneTrust（CMP）のもの**（`プライバシー設定センター` `全てのCookieを受け入れる` `Clear` `Apply` `ot-cat-header` など）。**サイト本体のウェイトは 300 / 400 / 500 の3段だけ**で、下層ページには 700 が 1 要素も無い。`interactive` に出てくる 14.4px / weight 700 のボタンも CMP なので、**コンポーネント仕様として採用しない。**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Hankyu Purple** | **`#7f0073`** | 可視 7 面＋文字 8 要素。`ニュースリリース一覧を見る` などのリンク文字、ボタン面 |
| **Brand Gradient** | **`linear-gradient(90deg, #7f0073 0%, #c32381 100%)`** | **ヒーローのテキストパネル専用**（可視 6 要素）。写真の上に斜めに置かれる紫→ピンクの面 |
| **Pink** | `#c32381` | グラデーションの終端。単色では使われない |

> **グラデーションは `90deg`（左→右）で、停止位置は 0% と 100%。** 角度も停止位置も丸めない。

### 事業カテゴリ色（バッジ）

| 事業 | 実装値 |
|------|--------|
| サステナビリティ | `#4ea075` |
| ロジスティクス | `#347885` |
| 開発事業 | `#8ca546` |
| DX | `#6da5ad` |
| エリアマネジメント | `#c76fa3` |
| その他 | `#868e98` |

いずれも 11px / 文字白 / `border-radius: 2px` / weight 400 / line-height 1.55。**6色セットで1つの体系**なので、1色だけ足したり引いたりしない。

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・ナビ（トップ 65 要素 / 下層 48 要素で最多）
- **Text Sub** (`#3f464e`): セクション見出し・`News` などの欧文ラベル（トップ 21 / 下層 11 要素）
- **Text Muted** (`#868e98`): パンくず（下層 4 要素）。**バッジの「その他」と同じ値**
- **Text on Dark** (`#ffffff`): グラデーション面の上（23 要素）
- **Text Light** (`#555555`): 補助テキスト
- **Dark Surface** (`#27455c`): フッター（可視 6 面）
- **Border / Divider** (`#d0d5dd`): ページャの番号面（6 要素）
- **Surface** (`#f8f8f8`) / **`#f3f3f3`** / **`#f2f2f2`**: 淡い面の3段
- **Subpage Gradient** (`linear-gradient(#f6f4f1 0%, #d3d0c9 100%)`): 下層ヒーローの背景（`div::before.top_message_wrap_back`、589,995px²）。**ベージュ〜グレーの縦グラデーション**で、トップの紫とは別系統
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` / 根拠 `body`）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・既定）**: **Noto Sans JP**（Google Fonts）。トップ 93 要素 / 下層 58 要素
- **明朝体（見出しのみ）**: **Noto Serif JP**。トップ 13 要素（ヒーロー見出し 30px）/ 下層 1 要素（ページタイトル 42px）
- **フォント取得**: `fonts.gstatic.com` へ **61 件**。`document.fonts` で `loaded` なのは **Noto Sans JP 400 / 500、Noto Serif JP 500、Inter 400、Cormorant Infant 300** の5本だけ。残り（Noto Sans JP の 100/200/300/600/700/800/900、Noto Serif JP の 200/300/400/600/700/900）は宣言のみで**描画されていない**

### 3.2 欧文フォント

- **サンセリフ**: **Inter**（weight 400）。`English` と日付 `2026.10.07`（トップ 8 / 下層 4 要素）
- **セリフ**: **Cormorant Infant**（weight **300**）。`News` `Business` `Pick up` のセクション見出し 60px（5 要素）。**この1ウェイトしか読み込んでいないので、太くしない**

### 3.3 font-family 指定

```css
/* 本文・ナビ（実サイトの宣言をそのまま） */
font-family: "Noto Sans JP", 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;

/* 見出し（明朝） */
font-family: "Noto Serif JP";

/* バッジ・一部ラベル */
font-family: "Noto Sans JP";

/* 欧文 */
font-family: Inter;              /* 日付・English */
font-family: "Cormorant Infant"; /* セクション見出し 60px */
```

**フォールバックの考え方 — 実サイトはこうだが、正しくはこう**:

- **游ゴシックの並び順が逆。** 実サイトは `游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium"` の順で、**Windows では2番目の `YuGothic`（Regular）に当たり、Medium に到達しない**＝細く出る。Noto Sans JP が先頭にあり実際に `loaded` しているので実害は出ていないが、**Web フォントが落ちた瞬間に Windows だけ細くなる**。新規実装では Medium を Regular より前に置く:
  ```css
  font-family: "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic,
               "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
  ```
- **ヒラギノは `Pro` を指定している（`ProN` ではない）。** Pro と ProN は別物（ProN は JIS2004 字形）。実サイトに合わせるなら `Pro`、字形を今風にするなら `ProN`。**どちらを選んだか決めて統一する**
- **`"Noto Serif JP"` と `"Noto Sans JP"` にフォールバックが無い（1語だけ）。** Web フォントが落ちるとブラウザ既定にそのまま落ちる。**`, serif` / `, sans-serif` を足す**

### 3.4 文字サイズ・ウェイト階層

**`html { font-size: 10px }`（= 62.5%）、`body { font-size: 15px; line-height: 22.5px }`。どちらも 1440 / 1200 / 834 / 768 / 767 / 375px で完全に固定**（流体化していない）。
`rem` の px 換算は **1rem = 10px**。ナビの `14.4px` は `1.44rem`。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | Cormorant Infant | 60px | **300** | 1.2 | normal | `News` `Business` `Pick up` |
| Page Title (JP) | Noto Serif JP | 42px | 400 | 1.2 | **2.52px** (0.06em) | 下層の `トップメッセージ` |
| Hero Headline (JP) | Noto Serif JP | 30px | 400 | 1.6 | **1.8px** (0.06em) | ヒーローパネル内。色 `#ffffff` |
| Heading 2 (JP) | Noto Sans JP | 18px | 500 | 1.5 | normal | `新着情報` `事業紹介` `特集` |
| Nav (JP) | Noto Sans JP | 15px | **500** | **1.47** | **0.6px** (0.04em) | グローバルナビ |
| Body | Noto Sans JP | 15px | 400 | **1.5**（22.5px） | normal | `body` の既定 |
| Link (JP) | Noto Sans JP | 14px | 400 | 1.5 | **0.84px** (0.06em) | `ニュースリリース一覧を見る` |
| Lead (JP) | Noto Sans JP | 16px | 400 | **1.86** | 0.3px | 下層の本文リード |
| Caption | Noto Sans JP | 13px | 400 | 1.6 | **0.26px** (0.02em) | `詳しく見る`、役職名 |
| Date (EN) | Inter | 14px | 400 | 1.5 | 0.28px (0.02em) | `2026.10.07` |
| Menu Item | Noto Sans JP | 12px | 400 | 1.5 | normal | メガメニューの項目（最多サイズ・37 要素） |
| Badge | "Noto Sans JP" | 11px | 400 | **1.55** | normal | 事業カテゴリ |

- **weight は 300 / 400 / 500 の3段だけ**（トップ 73 / 47 / 5 要素）。**700 は OneTrust のみ。サイト本体では使わない**
- 300 を使うのは **Cormorant Infant（欧文セリフ 60px）だけ**。和文に 300 は当てていない

### 3.5 行間・字間

- **本文の行間は 1.5**（`body { line-height: 22.5px }` = 15px × 1.5）。**px の絶対値で宣言されているが、トップ 65 要素 / 下層 39 要素が比率 1.50 で出ているので、各ブロックが自分で `1.5` を宣言し直している**。新規実装では**無単位の `1.5` で書く**
- **見出しの行間**: ヒーロー見出し 1.6 / ページタイトル 1.2 / ナビ 1.47 / 欧文 Display 1.2
- **下層のリードだけ 1.86**（2 要素）とゆったり組む
- **字間は `palt` が主役、`letter-spacing` は補助。**
  - 既定は **`normal`**（トップ 76 要素 / 下層 49 要素で最多）
  - 空けるのは **0.02em / 0.04em / 0.06em の3段**:
    - `0.06em` → 明朝の見出し（30px → 1.8px、42px → 2.52px）とリンク（14px → 0.84px）
    - `0.04em` → ナビ（15px → 0.6px）、事業名（12px → 0.48px）
    - `0.02em` → キャプション（13px → 0.26px）、日付（14px → 0.28px）
  - **`em` で各要素に宣言している**（サイズに比例して px が変わる）。**継承させていない**

### 3.6 禁則処理・改行ルール

```css
/* 実サイトは body に word-break / overflow-wrap を指定していない（computed: normal） */
word-break: normal;
overflow-wrap: anywhere;   /* 推奨 */
line-break: strict;        /* 推奨 */
```

- `word-break: auto-phrase` は**使っていない**
- ヒーロー見出しは HTML 側で全角スペースを入れて改行位置を作っている（`商業施設やオフィスなど 魅力あふれるまちづくり`）。**`<br>` ではなくスペース区切り**なので、幅によって折り返し位置が変わる

### 3.7 OpenType 機能

```css
body { font-feature-settings: "palt"; }
```

**これがこのサイトの字詰めの本体。** `body` に1行書くだけで **1175 要素**（DOM 全走査）に継承されている。`html` は `normal` のままなので、**宣言位置は `body`**。

- `palt` は**プロポーショナルメトリクス**。約物（「」、。）や仮名が文字ごとに詰まる。全体を一律に詰める `letter-spacing` とは別物
- **`palt` の上に正の `letter-spacing` を重ねている**（3.5 節）。詰めてから 0.02〜0.06em 空け直すことで、約物だけ詰まって仮名は適度に開いた組みになる。**どちらか片方だけ真似すると別物になる**
- `kern` / `tnum` / `halt` は使っていない

### 3.8 縦書き

**該当なし**（`writing-mode: vertical-*` は 2 ページとも 0 要素）。

---

## 4. Component Stylings

### Buttons

**Text Link Pill**（`ニュースリリース一覧を見る` / `事業紹介一覧を見る`）
- Background: `transparent`
- Text: `#7f0073` / 14px / weight 400 / line-height 1.5 / letter-spacing `0.06em`
- Border Radius: **`100px`**（ピル）

**Hero Panel**（グラデーションのテキストパネル）
- Background: `linear-gradient(90deg, #7f0073 0%, #c32381 100%)`
- Text: `#ffffff` / Noto Serif JP 30px / 400 / line-height 1.6 / letter-spacing `0.06em`
- Border Radius: **`7px`**
- Box Shadow: **`rgba(0, 0, 0, 0.1) 0 3px 30px 0`**

**Pager**
- Background: `#d0d5dd`（非選択）
- Border Radius: `10px`

> **OneTrust の `全てのCookieを受け入れる` / `Apply` / `Clear`（14.4px / weight 700 / 背景 `#7f0073`）はコンポーネント仕様に含めない。** CMP がブランド色で塗られているだけで、サイト本体に weight 700 のボタンは存在しない。

### Badges

- 6色の事業カテゴリ（2章）: 11px / 白 / `border-radius: 2px` / line-height 1.55
- 採用区分（`新卒` `キャリア`）: `border-radius: 5px` / 12px / letter-spacing `0.064em`

### Cards

- Background: `#ffffff` / `#f8f8f8`
- Border Radius: **`5px`**（標準）/ `7px`（ヒーローパネル）/ `3px`（小）/ `1px`（`ENGLISH`）
- Shadow: **`rgba(0, 0, 0, 0.1) 0 3px 30px 0`**（サイト全体で **1種・6要素のみ**）

> **角丸は 1 / 2 / 3 / 5 / 7 / 10 / 100px の7種あるが、使用の中心は `5px`（10 要素）。** `100px` はテキストリンクのピルだけ。

### Inputs

トップのキーワード検索欄が1つあるのみ。**専用の枠色・radius は検出されず**、実装が必要なら card と同じ `5px` に合わせる。

---

## 5. Layout Principles

### Container

| 用途 | 幅 | 実測 |
|------|----|----|
| **標準コンテナ** | **1160px** | トップ 6 / 下層 5 要素（最多） |
| 広いコンテナ | 1240px | トップ 2 / 下層 1 要素 |
| 中カラム | 960px | トップ 4 要素 |
| 本文カラム | 800px / 546px | 下層 |
| カード | 470px | トップ 6 要素 |
| サイドカラム | 300px | トップ 2 / 下層 2 要素 |

### Spacing Scale

明示的なトークンは無い。角丸・影と同様、**1160px のコンテナと 470px のカード幅が設計の基準**。
`display: grid` の `gap` は検出されず（`gaps: []`）、**flex と margin で組んでいる**。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | 既定。**下層ページは影 0 種** | 下層 63 要素すべて |
| 1 | `rgba(0, 0, 0, 0.1) 0 3px 30px 0` | ヒーローのテキストパネル | トップ 6 要素 |

**サイト全体で影は1種類しかない。** blur が `30px` と大きく offset が `3px` と小さい、**広く薄く落とす影**。`0 2px 4px` のような一般的な値に置き換えない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`body { font-feature-settings: "palt" }` を1行書いて全体に継承させる**
- その上に `letter-spacing` を **0.02em / 0.04em / 0.06em の3段**で足す（`em` で各要素に宣言）
- 明朝（Noto Serif JP）は**見出しだけ**に使い、本文はゴシックにする
- weight は **300 / 400 / 500** の3段に収める
- 事業カテゴリのバッジは6色セットで使う
- 影は `rgba(0, 0, 0, 0.1) 0 3px 30px 0` の1種だけ
- グラデーションは `linear-gradient(90deg, #7f0073 0%, #c32381 100%)` をそのまま写す
- `rem` は 1rem = 10px で換算する（`html { font-size: 62.5% }`）

### Don't（禁止）

- **weight 700 を使わない。** 実サイトで 700 なのは OneTrust（CMP）の UI だけで、サイト本体には1要素も無い
- **`palt` を外さない。** 外すと和文の約物が間延びして、このサイトの詰まりが再現できない
- **逆に `palt` だけ当てて `letter-spacing` を 0 にしない。** 実サイトは詰めてから 0.02〜0.06em 空け直している
- **游ゴシックのスタックを実サイトのままコピーしない**（Medium が Regular の後ろにあり、Windows で細くなる）
- **`"Noto Serif JP"` / `"Noto Sans JP"` を1語だけで書かない**（`, serif` / `, sans-serif` を足す）
- Cormorant Infant を 300 より太くしない（読み込んでいるのは 300 のみ）
- `html` の `font-size` を 16px に戻さない（全ての `rem` が 1.6 倍になる）
- 影を増やさない

---

## 8. Responsive Behavior

### Breakpoints

CSS に出現するメディアクエリ（実測・出現数順）:

| Width | 出現数（トップ / 下層） |
|-------|------------------------|
| `max-width: 1024px` | 3 / 2 |
| `max-width: 768px` | 3 / 2 |
| `max-width: 480px` | 3 / 2 |
| `max-width: 1440px` | 2 / 1 |
| `max-width: 1330px` | 2 / 1 |
| `max-width: 1240px` | 2 / 1 |
| `max-width: 1160px` | 2 / 1 |
| `max-width: 880px` | 2 / — |
| `max-width: 600px` | 2 / 2 |
| `min-width: 550px` | 2 / 2 |

- **主軸は 1024 / 768 / 480px の3段。** 1440 / 1330 / 1240 / 1160 はコンテナ幅に合わせた微調整
- **`html` / `body` の font-size はどのブレークポイントでも変わらない**（10px / 15px 固定）。第一三共や三陽商会のような流体ルートの崖は**存在しない**（768px の前後 ±1px でも確認済み）

### タッチターゲット

- テキストリンクのピル（14px / radius 100px）、事業バッジ（11px / radius 2px）、メガメニュー項目（12px）は **44px を下回る**。モバイルでは上下 padding で高さを確保する

### フォントサイズの調整

- **サイズはブレークポイントをまたいで固定。** モバイルでの縮小はレイアウト側（カラム落ち）で吸収している

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Hankyu Purple: #7f0073
Pink:          #c32381
Gradient:      linear-gradient(90deg, #7f0073 0%, #c32381 100%)
Business colors: #4ea075 サステナ / #347885 ロジ / #8ca546 開発 /
                 #6da5ad DX / #c76fa3 エリマネ / #868e98 その他
Text:        #333333
Text Sub:    #3f464e
Muted:       #868e98
Dark:        #27455c   (フッター)
Divider:     #d0d5dd
Surface:     #f8f8f8 / #f3f3f3 / #f2f2f2
Background:  #ffffff

Font (JP):     "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic,
               "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
Font (明朝):   "Noto Serif JP", serif   ← 見出しのみ / loaded は 500 の1本
Font (EN):     Inter               ← 日付・English
Font (EN serif): "Cormorant Infant"  ← 60px 見出し / weight 300 のみ

html: 10px (62.5%) 固定   body: 15px / line-height 1.5 固定
font-feature-settings: "palt"  ← body に1行。1175 要素へ継承
letter-spacing: normal 既定 + 0.02em / 0.04em / 0.06em の3段（em で各要素に）
weight: 300 / 400 / 500 の3段のみ（700 は使わない）
Border Radius: 5px 標準 / 7px パネル / 100px ピル / 2px バッジ
Shadow: rgba(0,0,0,0.1) 0 3px 30px 0  ← 1種のみ
Container: 1160px / Card: 470px
Breakpoints: 1024 / 768 / 480px
```

### プロンプト例

```
阪急阪神不動産のデザインシステムに従って、事業紹介ページを作成してください。
- body に font-feature-settings: "palt" を1行書いて全体に継承させる
- その上で letter-spacing を 0.02em（キャプション）/ 0.04em（ナビ・事業名）/ 0.06em（明朝見出し・リンク）の3段で em 宣言する。本文は normal
- html は font-size: 62.5%（10px）、body は 15px / line-height 1.5
- 和文は "Noto Sans JP" 先頭、游ゴシックは Medium を Regular より前に置く
- 見出しだけ "Noto Serif JP" 30px / 400 / line-height 1.6 / letter-spacing 0.06em
- 英語のセクション見出しは "Cormorant Infant" 60px / weight 300 / line-height 1.2
- font-weight は 300 / 400 / 500 の3段だけ。700 は使わない
- ヒーローのテキストパネルは linear-gradient(90deg, #7f0073 0%, #c32381 100%) /
  白文字 / border-radius 7px / box-shadow rgba(0,0,0,0.1) 0 3px 30px 0
- 「一覧を見る」リンクは文字 #7f0073 / 14px / border-radius 100px
- 事業バッジは 11px / 白 / border-radius 2px、色は6色セット
  (#4ea075 #347885 #8ca546 #6da5ad #c76fa3 #868e98)
- カードは border-radius 5px、影はサイト全体で上記1種類のみ
- コンテナ 1160px、カード 470px、ブレークポイント 1024 / 768 / 480px
- 縦組みは使わない
```
