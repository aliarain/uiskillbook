# DESIGN.md — 成田国際空港（Narita International Airport）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-09 / 対象: `https://www.narita-airport.jp/ja/`, `/ja/access/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **紺一色のインフラ UI。** 彩度のある色は写真だけで、UI は紺・青・白・淡いグレーの 4 値しか使わない。影を 1 つも使わず、角丸と面の濃淡だけで層を作る
- **密度**: 中。フライト検索・交通手段といった「探しにくると決まっているもの」を大きなカードで置き、説明文を長く書かない
- **キーワード**: 紺、Noto Sans JP、影ゼロ、0.012em、5/10/20 の角丸

**このサイトの核心は4つある。**

1. **`letter-spacing: 0.012em` を、ほぼすべてのテキスト要素が自分で宣言している。** `body` は `normal` のままで、継承ではない。実測の px 値がサイズに正比例する——32px→`0.384px` / 16px→`0.192px` / 14px→`0.168px` / 12px→`0.144px` / 10px→`0.12px`。**どれも割ると 0.012em ちょうど**（可視 62〜66 要素のうち 58 要素）。375px まで縮めても 60px→`0.72px`、40px→`0.48px` と比例し続ける
2. **`line-height` は 1.8 と 1.4 の 2 値しかない。** 本文・ナビ・注記が 1.8（34〜42 要素）、見出しとボタンが 1.4（24〜27 要素）。**中間値を作らない**
3. **`box-shadow` がサイト全体で 0 種。** カードは `#ffffff` の面と `1px solid` の枠だけで立てる。奥行きは角丸の大小（5 / 10 / 20px）で表す
4. **`font-weight` は 400 と 700 の 2 段だけ**（実測 400 が 40〜47 要素、700 が 19〜22 要素）。500・600 は 1 要素もない

**`font-feature-settings` は `normal`（実測 0 件）。`palt` は使っていない。** CSS Custom Properties は `:root` に **1 個だけ**（`--roboto-font`）で、設計の語彙は Tailwind のクラス側にある。**「変数が少ない＝設計が無い」ではない**点に注意。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Narita Navy** | **`#033b7d`** | **可視 10 要素**。ヘッダー帯・フッター全面・リンク文字・アイコン。このサイトの基準色 |
| **Action Blue** | **`#0058aa`** | **フライト検索の主ボタン専用**（`出発フライト` のタブ面）。紺より明るく、押せる場所だけに使う |

> **紺が 2 つあるのは役割が違うから。** `#033b7d` は「面と文字の地の色」、`#0058aa` は「いま押せるもの」。**新規実装でこの 2 つを混ぜない。**

### Neutral（ニュートラル）

- **Text Primary** (`#081018`): 本文・見出し。**可視 16〜22 要素**。**純黒 `#000000` は使わない**（わずかに青を含んだ黒）
- **Text Muted** (`rgba(8,16,24,.698)`): 気温・時刻・補足。**可視 14 要素**。別の hex ではなく **Text Primary の 70% 不透明度**で作る
- **Text on Dark** (`#ffffff` / `rgba(255,255,255,.698)`): 紺面の上の文字と、その補助（可視 25 要素 / 7 要素）
- **Background** (`#f6f8fb`): ページ背景。`pageBackground.resolved` = `rgb(246,248,251)`（根拠 `viewportTopBySample 7/12`）
- **Surface** (`#ffffff`): カード・検索パネルの面
- **Border** (`#081018` の低不透明度 / `1px solid`): カードの枠。セカンダリボタンは枠だけで作る

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**。Regular(400) と Bold(700) の 2 ウェイトのみ。**実測した全可視テキスト（62 / 66 要素）がこの 1 スタック**で、例外が 1 要素もない
- **明朝体**: 使わない

### 3.2 欧文フォント

- **Roboto**（700 のみ `loaded`）。`--roboto-font` という変数が 1 つだけ用意されている
- 数字・アルファベット（気温・時刻・フライト番号）は、特に指定がなければ **Noto Sans JP の欧文グリフ**で出る

### 3.3 font-family 指定

```css
/* 本文・UI（既定・これ1本） */
font-family: "Noto Sans JP", "Noto Sans JP Fallback", sans-serif;

/* 欧文を明示したいとき */
font-family: var(--roboto-font);   /* = 'Roboto', 'Roboto Fallback', sans-serif */
```

**`"Noto Sans JP Fallback"` は手で書くものではない。** Next.js の `next/font` が、Web フォント読み込み前のレイアウトずれを消すために `size-adjust` 付きの代替 `@font-face` を自動生成した名前。**自前の CSS に転記しても同じ効果は出ない**（対応する `@font-face` が無いと、ただの存在しないファミリー名になる）。手書きするなら `"Noto Sans JP", sans-serif` でよい。

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Sans JP | 60px | 400 | 1.4 (84px) | 0.012em (0.72px) | ヒーローの惹句「想いをつなぐ。」。375px では 40px |
| Heading 1 | Noto Sans JP | 32px | 700 | 1.4 | 0.012em (0.384px) | セクション見出し。可視 4 要素 |
| Heading 2 | Noto Sans JP | 20px | 700 | 1.4 | 0.012em (0.24px) | カード見出し |
| Body | Noto Sans JP | 16px | 400 | 1.8 (28.8px) | 0.012em (0.192px) | 本文。可視 20 要素 |
| UI / Nav | Noto Sans JP | 14px | 400/700 | 1.8 | 0.012em (0.168px) | グローバルナビ。**最多の 21〜27 要素** |
| Caption | Noto Sans JP | 12px | 400 | 1.8 | 0.012em (0.144px) | 気温・時刻・注記 |
| Small | Noto Sans JP | 10px | 400 | 1.8 | 0.012em (0.12px) | 最小。375px の本文もここまで落ちる |

**サイズは 10 / 12 / 14 / 16 / 20 / 32 / 60 の 7 段**。奇数px・端数は 1 つも出ない（`html` は 1440 / 1200 / 834 / 375px のいずれでも **16px 固定**で、流体ルートではない）。

### 3.5 行間・字間

- **本文の行間**: `1.8`（単位なし）。実測で最も多い（34〜42 要素）
- **見出し・ボタンの行間**: `1.4`
- **字間**: **`0.012em` を各要素に書く。** `body` は `normal` のまま

**ガイドライン**:
- **`letter-spacing` を `body` に 1 回書いて継承させる設計ではない。** `em` を `body` に書くと、計算された px（16px なら 0.192px）が**そのまま子に降りて**、12px の注記も 60px の見出しも同じ 0.192px になる。このサイトはそうなっていない＝**各要素が `0.012em` を持っている**。再現するときも要素ごとに書く
- `line-height` は**単位なしの比率**で書く（`1.8` / `1.4`）。`em` や px で書くと絶対値が子に降りて別物になる
- `0.012em` は和文としてはごく浅い。**「詰めも空けもしない」構え**で、ベタ組みに限りなく近い。`0.04em` 以上に広げると別のサイトになる

### 3.6 禁則処理・改行ルール

```css
/* 実サイトが宣言しているのはこれだけ */
word-break: break-all;
```

- `body` の実効値は `word-break: normal` / `line-break: auto` / `overflow-wrap: normal`。**`break-all` は長い英数字が出る特定の箇所にだけ当てている**
- `word-break: auto-phrase` は使っていない。日本語の改行位置はブラウザ既定のまま

### 3.7 OpenType 機能

```css
/* 実サイトは font-feature-settings: normal。palt は使っていない */
```

- **`palt` を足さない。** 約物を詰めない状態がこのサイトの字面。`0.012em` の浅い字間と合わせて、わずかに緩い組みになっている

### 3.8 縦書き

`writing-mode` は実測 0 件。**縦組みを使わない。**

---

## 4. Component Stylings

### Buttons

**Primary**（フライト検索の選択タブ）
- Background: `#0058aa`
- Text: `#ffffff`
- Border Radius: `10px`
- Font Size: `16px` / Weight `700` / Line Height `1.4` / Letter Spacing `0.012em`
- Border: `0`

**Secondary**（`到着フライト` など非選択状態）
- Background: `transparent`
- Text: `rgba(8,16,24,.698)`
- Border Radius: `10px`
- Font Size: `16px` / Weight `700`

**Tertiary / Chip**（`液体物の持ち込み` などのキーワード）
- Background: `#ffffff`
- Text: `#081018`
- Border: `1px solid`
- Border Radius: `5px`
- Font Size: `16px` / Weight `400` / Line Height `1.8`

### Inputs

- Background: `#ffffff`
- Border: `1px solid`
- Border Radius: `5px`
- Font Size: `16px` / Weight `400`
- プレースホルダは `rgba(8,16,24,.698)`

### Cards

- Background: `#ffffff`
- Border: `1px solid`
- Border Radius: `10px`（大きな区画は `20px`）
- Padding: `20px`〜`32px`
- **Shadow: なし**（6章参照）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実測 |
|-------|-------|------|
| XS | 6px | gap 可視 1 箇所 |
| S | 8px | gap 可視 5 箇所 |
| M | 16px | gap |
| L | 20px | gap 可視 3 箇所。**カード間の既定** |
| XL | 24px | gap |
| XXL | 32px / 48px | セクション間（`32px 20px` の行列指定あり） |

4 の倍数で揃えるのではなく、**6 / 8 / 16 / 20 / 24 / 32 / 48** を使う。`20px` が中心。

### Container

- **Max Width: `1132px`**（実測 4 要素・両ページ共通）
- Padding (horizontal): `20px`

### Grid

- カードは 3 列（`gap: 20px`）。`1132px` の中で割る

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **すべての要素** |

**`box-shadow` はサイト全体で実測 0 種。** 浮かせたい要素は

1. 地（`#f6f8fb`）の上に面（`#ffffff`）を置く
2. `1px solid` の枠を足す
3. 角丸を大きくする（`5px` → `10px` → `20px`）

の 3 つで表現する。**影を足すとこのサイトではなくなる。**

---

## 7. Do's and Don'ts

### Do（推奨）

- `letter-spacing: 0.012em` を**要素ごとに**書く
- `line-height` は**単位なし**で `1.8`（本文）/ `1.4`（見出し・ボタン）の 2 値だけ使う
- 文字色は `#081018`、弱めたいときは**別の hex ではなく `rgba(8,16,24,.698)`** を使う
- 角丸は `5px` / `10px` / `20px` の 3 段から選ぶ
- フォントサイズは 10 / 12 / 14 / 16 / 20 / 32 / 60 から選ぶ

### Don't（禁止）

- **`box-shadow` を足さない**（実サイトに 1 つもない）
- **`font-weight: 500` / `600` を使わない**（Noto Sans JP は 400 と 700 しか読み込んでいない。500 を当てると 400 で出るか、ブラウザが合成する）
- **`letter-spacing` を `body` に 1 回だけ書いて済ませない**（px が固定されて全サイズ同じ字間になる）
- **`line-height` を px や `em` で書かない**（絶対値が子に降りる）
- **`palt` を足さない**
- **`"Noto Sans JP Fallback"` を手書きの CSS にそのまま転記しない**（`next/font` の生成名で、対応する `@font-face` が無ければ無効）
- 純黒 `#000000`・純粋なグレー文字を使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | < 768px | 1 カラム |
| Tablet | ≥ 768px | **実測 89 箇所**で最も使われる境目 |
| Desktop | ≥ 960px | 実測 20 箇所 |

`min-width` 基準のモバイルファースト。`1132px` を超えても中身は広がらない。

### タッチターゲット

- 最小 44px × 44px

### フォントサイズの調整

実測（1440px → 375px）:

| 要素 | 1440 / 1200 / 834px | 375px |
|------|------|------|
| ヒーロー惹句 | 60px（ls `0.72px`） | **40px**（ls `0.48px`） |
| 本文 | 16px（ls `0.192px`） | **12px**（ls `0.144px`） |

- **834px まで値が動かない。** 変わるのは 768px を割ってから
- **字間は px では固定されず、`0.012em` のまま比例して縮む。** px に読み替えて実装するとモバイルで広くなりすぎる

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #033b7d   (面・文字の紺)
Action Color:  #0058aa   (押せるものだけ)
Text Color:    #081018   (弱め: rgba(8,16,24,.698))
Background:    #f6f8fb   / Surface: #ffffff
Font: "Noto Sans JP", sans-serif   (400 / 700 のみ)
Body Size: 16px
Line Height: 1.8 (本文) / 1.4 (見出し)
Letter Spacing: 0.012em  ← 要素ごとに書く
Radius: 5 / 10 / 20px
Shadow: なし
Container: 1132px
```

### プロンプト例

```
成田国際空港のデザインシステムに従って、フライト検索パネルを作成してください。
- フォント: "Noto Sans JP", sans-serif（400 と 700 だけ。500/600 は使わない）
- 選択中のタブ: 背景 #0058aa / 文字 #ffffff / radius 10px / 16px / weight 700
- 非選択のタブ: 背景 transparent / 文字 rgba(8,16,24,.698)
- パネル: 背景 #ffffff / radius 20px / 1px solid の枠 / box-shadow なし
- ページ背景: #f6f8fb
- すべてのテキスト要素に letter-spacing: 0.012em を個別に指定する
- line-height は単位なしで、本文 1.8 / 見出し 1.4
- コンテナ幅 1132px、カード間 gap 20px
```
