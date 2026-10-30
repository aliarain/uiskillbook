# DESIGN.md — 協和キリン（Kyowa Kirin）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-25 / 対象: `https://www.kyowakirin.co.jp/`, `/about_us/message/index.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Web フォントを 1 本も読まない、OS ローカル書体だけのサイト。** しかもスタックの先頭は **UD（ユニバーサルデザイン）書体**。オレンジを情報のラベルに、ブルーを導線に割り当てて役割を分ける
- **密度**: 高め。コンテンツ幅 980px に 14px の文字を詰める。製薬サイトらしく、左端に対象読者（医療関係者／一般・患者／株主・投資家／採用）の常設タブを置く
- **キーワード**: ヒラギノUD角ゴ、Web フォント 0 本、`word-break: break-all`、オレンジ #ea5504、ピル型の一覧リンク

**このサイトの核心は4つある。**

1. **Web フォントを 1 本も読み込んでいない。** 3 つの判定すべてでゼロ: `document.fonts` が**空配列**、CSS 全文の `@font-face` が **0 件**、フォントファイルの**リクエストが 0 件**（トップ・下層とも）。**ローカル書体だけで組むことが設計そのもの**
2. **スタックの先頭が「ヒラギノUD角ゴ Std」という UD 書体。** `@font-face` が無いので**訪問者の端末に入っていなければ当たらない**。ヒラギノUD角ゴは macOS に同梱されない別売書体なので、多くの訪問者には 3 番目の **ヒラギノ角ゴ Pro W3**（mac）／5 番目の **メイリオ**（Windows）が出る。**UD 書体は「入っていれば使う」という上乗せ**
3. **`body { word-break: break-all }` で日本語の禁則処理を切っている。** 行末で熟語の途中でも折り返す。7 幅すべてで確認
4. **ウェイトは 400 と 700 の 2 段だけ。** 500 も 600 も 1 要素も無い。Web フォントが無いため、使える太さが OS 同梱書体の持ち分に限られる

**計測に出る `Roboto, Arial, sans-serif` は Cookie バナー（OneTrust）。** 可視 2 要素だけなので、サイト本体の書体と混同しない。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Kyowa Kirin Orange** | **`#ea5504`** | **ブランド色。** 文字として**可視 16 要素**（`お知らせ` などのセクションラベル、カテゴリ名、カルーセルのドット）、面として可視 10 要素 |
| **Link Blue** | **`#1ba8d6`** | **導線専用。** ニュースのリンク文、`お知らせ一覧` `もっと見る` などのピル型ボタンの文字（可視 9 要素） |

> **オレンジは「ラベルの色」、ブルーは「押せるものの色」。** 役割が分かれている。
> **CTA をオレンジにしない。** ボタンの文字は一貫してブルー。

> **オレンジが 3 つ混在している。** `#ea5504`（ブランド・16 要素）のほかに **`#eb5e11`**（大見出し `Life-changingな価値を目指して` `Stories` の 3 要素）と **`#ed6f36`**（1 要素）がある。
> **新規実装では `#ea5504` に寄せてよいが、既存ページと並べるときは 3 色あることを前提にする。**

### Neutral（ニュートラル）

- **Text Primary** (`#23323b`): 本文・見出し・ナビ。**可視 46 要素（トップ）/ 31 要素（下層）で最多**。純黒は使わない
- **Text on Dark** (`#ffffff`): 写真の上・カルーセル上のテキスト（可視 21 要素）
- **Surface Gray** (`#f3f3f3`): カルーセルの地、`もっと見る` ボタンの面（可視 14 要素）
- **Surface Light** (`#f9f9f9`)
- **Footer** (`#3e3a39`): フッター全面
- **Border Strong** (`#23323b`): **3px** のセクション罫（可視 3 要素）
- **Border Accent** (`#ea5504`): 1px のオレンジ罫
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `viewportTopBySample (12/12)`）

### Overlay

```css
/* 写真の上に白文字を置くための覆い。可視 8 要素 */
background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45));
```

**左が濃く、右が透明。** 写真の左側にタイトルを置く前提の方向。角度や停止位置は丸めずそのまま使う。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（第一候補）**: **ヒラギノUD角ゴ Std**。UD（ユニバーサルデザイン）書体。**別売のため端末に入っていないことが多い**
- **実際に出ることが多い書体**: **ヒラギノ角ゴ Pro W3**（macOS）／ **メイリオ**（Windows）
- **Web フォントは 0 本**（`@font-face` 0 件・フォント要求 0 件・`document.fonts` 空）
- **明朝体は使わない**（可視 0 要素）

### 3.2 欧文フォント

- 専用の欧文書体を持たない。スタック末尾に **Arial / verdana** が入っているが、
  **和文書体が 1 つでも当たればその書体の欧文グリフが使われる**ので、実際に Arial が出るのは
  和文書体がすべて外れた環境だけ

### 3.3 font-family 指定

```css
/* 実サイトの宣言をそのまま。Web フォントは 1 本も読まない */
font-family:
  "ヒラギノUD角ゴ Std", "Hiragino UD Kaku Gothic Std",   /* UD 書体。入っていれば使う */
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",      /* macOS の受け皿 */
  メイリオ, meiryo,                                       /* Windows の受け皿 */
  Arial, verdana,                                         /* 和文が全部外れたときだけ */
  sans-serif;
```

**フォールバックの考え方**:
- **和文書体を先頭に置く**（日本語の表示品質を優先）
- 和名 → ASCII 名の順で 1 書体につき 2 つ書く（OS・ブラウザによって認識する名前が違うため）
- **`Arial, verdana` が `sans-serif` の手前にあるのは実サイトの構成だが、意味はほぼ無い。**
  和文書体が 1 つでも当たれば、その書体の欧文グリフで欧文も組まれるため、ここまで到達しない

> **Web フォントを「親切のつもりで」足さない。** Noto Sans JP などを先頭に入れると、
> UD 書体を優先するという設計意図が消える。

### 3.4 文字サイズ・ウェイト階層

`html { font-size: 62.5% }` = **10px**。サイズはすべて `rem`（`1.6rem` = 16px）。
`body` は **デスクトップ 1.6rem（16px）／ モバイル 1.4rem（14px）** の 2 段。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Page Title | **48px** | `700` | 1.25 | `normal` | 下層ページの大見出し（`トップメッセージ`） |
| Hero Heading | **34px** | `700` | 1.25 | `normal` | トップのヒーローカード |
| Display | **50px** | `700` | — | `normal` | `Stories` などの特設見出し |
| Heading 1 | **32px** | `700` | 40px (1.25) | `normal` | |
| Heading 2 | **30px** | `700` | — | `normal` | |
| Section Link | **20px** | `400`〜`700` | 1.5 | `normal` | `もっと見る` `会社情報` |
| Body | **16px** | `400` | **24px (1.5)** | `normal` | **body の既定** |
| Nav / Caption | **14px** | `400` | 21px (1.5) | `normal` | **可視 21 要素**。グローバルナビ |
| List | **13px** | `400` | 1.5 | `normal` | お知らせ一覧・フッター |
| Micro | **11px** | `400` | 1.15 | `normal` | 左端のステークホルダータブ |

> **ウェイトは 400 と 700 の 2 段だけ。** 実測で 500・600 は 1 要素も無い。
> **中間の太さを足さない**（OS 同梱書体には該当する面が無く、合成されてしまう）。

### 3.5 行間・字間

- **本文の行間**: **1.5**（16px → 24px / 14px → 21px）。**可視 76 要素（トップ）/ 41 要素（下層）で圧倒的最多**
- **見出しの行間**: **1.25**（48px → 60px 相当 / 32px → 40px）
- **本文の字間**: **`normal`**。**可視 93/93 要素（トップ）・48/48 要素（下層）で例外なし**

```css
html { font-size: 62.5%; }                /* = 10px。以降すべて rem */
body { font-size: 1.6rem; line-height: 1.5; letter-spacing: normal; }
@media (max-width: 767px) { body { font-size: 1.4rem; } }
.heading { font-size: 3.2rem; font-weight: 700; line-height: 1.25; }
```

> **`letter-spacing` を足さない。** 負の字間が出るのは特設バナー（`-0.25px` / `-0.3px`・計 4 要素）だけ。
> **`line-height` は無単位 1.5 で宣言する。** 16px → 24px、14px → 21px と比率で追従しており、絶対値 px ではない。

### 3.6 禁則処理・改行ルール

```css
body {
  word-break: break-all;   /* 実測。7 幅すべてで break-all */
}
```

**このサイトは日本語の禁則処理を無効にしている。** `word-break: break-all` は行末で
**熟語の途中でも折り返す**。情報量の多い見出し・一覧を幅の狭いカラムに収めるための選択で、
`distributions` には出ないので `body` の computed style を直接見ないと気づけない。

**再現するなら `body` に 1 行書く。** 読みやすさを優先して外すと、カラム幅の設計ごと変わる。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;   /* 実測 0 要素 */
```

- **`palt` / `halt` は CSS 全文で 0 件、実測も 0 要素。** 字詰めはしない
- Web フォントが無いため、OpenType 機能はそもそも端末の書体任せになる。**当てにしない**

### 3.8 縦書き

実測 `writing-mode: vertical-rl` は **0 要素**。縦組みは使わない。

---

## 4. Component Stylings

### Buttons

**Primary（一覧へのピルリンク）**
- Background: `#ffffff`
- Text: **`#1ba8d6`**
- Border Radius: **`40px`**
- Font Size: `16px`
- Font Weight: `400`
- Letter Spacing: `normal`

**Secondary（`もっと見る`）**
- Background: **`#f3f3f3`**
- Text: **`#1ba8d6`**
- Border Radius: **`50px`**
- Font Size: `20px`
- Font Weight: **`700`**

**Nav Item（グローバルナビ）**
- Background: `#ffffff` / Text: `#23323b`
- Padding: `0 15px`
- Border Radius: `0`
- Font Size: `14px` / Weight `400`

> **ボタンの文字はオレンジではなくブルー。** オレンジはラベル・見出し・ドットに使う。

### Cards

- Background: `#ffffff`
- Border Radius: `0`
- Shadow: **`rgba(0, 0, 0, 0.2) 0 0 8px 0`**（可視 14 要素。このサイトの主力の影）

### Stakeholder Rail（左端の常設タブ）

製薬サイト特有のコンポーネント。画面左端に縦積みで固定する。

- Width: 約 84px / Background: `#ffffff`
- Shadow: `rgba(0, 0, 0, 0.3) 0 0 6px 0`
- 項目: アイコン（約 36px）＋ `11px` のラベル（`医療関係者の皆さま` など）を縦に積む
- Line Height: `1.15`（2 行のラベルを詰める）

### Inputs

- Background: `transparent`
- Border: **なし**（`0px none`）
- Border Radius: `0`
- Padding: `4px`
- Font Size: `16px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実測 |
|-------|-------|------|
| XS | **10px** | コンテンツの左右余白（6 箇所で最多） |
| S | **15px** | ナビ項目の左右 padding |
| M | **30px** | 履歴リストの字下げ |
| L | **46px** | セクション間の gap |
| XL | **65px** | 大きなセクション間の gap |

### Container

- Max Width: **980px**（8 箇所で最多）。セクションにより **1000px / 1100px**、本文カラムは **600px**
- Padding (horizontal): **10px**

### Grid

- Columns: 2〜3（セクション導線カード）
- Gutter: **46px** / **65px**

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 本文・ボタン・一覧 |
| 1 | `rgba(0, 0, 0, 0.12) 0 2px 2px 0` | 固定ヘッダー |
| 2 | **`rgba(0, 0, 0, 0.2) 0 0 8px 0`** | **カード（可視 14 要素）。主力** |
| 3 | `rgba(0, 0, 0, 0.3) 0 0 6px 0` | 左端のステークホルダータブ |

> **影はすべて offset 0 の「全方向の広がり」型**（Level 1 の header を除く）。
> `0 4px 12px` のような下方向の影は使っていない。**色と offset をそのまま書き写す。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **Web フォントを読み込まない。** `font-family` は OS ローカル書体のスタックだけで書く
- スタックの先頭に **`"ヒラギノUD角ゴ Std", "Hiragino UD Kaku Gothic Std"`** を置く（和名 → ASCII 名の順）
- `html { font-size: 62.5% }` で 10px にし、サイズは `rem` で書く
- `font-weight` は **400 と 700 の 2 段だけ**
- 本文の `line-height` は **1.5**（無単位）、見出しは **1.25**
- `letter-spacing` は **`normal` のまま**
- **`body { word-break: break-all }`** を書く（このサイトの前提）
- オレンジ `#ea5504` は**ラベル・見出し・ドット**、ブルー `#1ba8d6` は**押せるもの**に使い分ける
- カードの影は `rgba(0,0,0,0.2) 0 0 8px 0`

### Don't（禁止）

- **Web フォント（Noto Sans JP 等）を足さない。** UD 書体を優先する設計が消える
- **`font-weight: 500` / `600` を使わない**（実測 0 要素。OS 書体では合成される）
- **`letter-spacing` を足さない**（実測 93/93 要素が `normal`）
- **`font-feature-settings: "palt"` を足さない**（実測 0 件）
- **CTA をオレンジにしない。** ボタンの文字はブルー `#1ba8d6`
- **`#eb5e11` / `#ed6f36` を新規実装で使わない。** `#ea5504` に寄せる
- **`word-break` を `normal` に戻さない。** カラム幅の設計がこの前提で組まれている
- **純黒 `#000000` を本文に使わない。** 本文は `#23323b`
- **`border-radius` をカードに足さない。** 角丸はピル型ボタン（40px / 50px）と円（50%）だけ
- **影を `0 4px 12px` のような下方向にしない。** offset は 0

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | `body` | 説明 |
|------|-------|--------|------|
| Mobile / Tablet | ≤ 767px | **14px / 行間 21px** | 下層 h1 は 28px、h2 は 16px |
| Desktop | ≥ 768px | **16px / 行間 24px** | 下層 h1 は 32px、h2 は 24px |

**`html` は全幅 10px 固定**（`62.5%`）。動くのは `body` と見出しだけで、**768px を境にした 2 段の階段切替**。
1920 / 1440 / 1200 / 1024 / 834px はすべて同じ値、768 / 767 / 375 / 374px もすべて同じ値。
**`clamp()` も `vw` も使っていない。**

実測（下層ページ）:

| 幅 | html | body | h1 | h2 |
|---|---|---|---|---|
| 1920〜834px | 10px | 16px / 24px | **32px** / 40px | **24px** / 36px |
| 768〜374px | 10px | **14px** / 21px | **28px** / 35px | **16px** / 24px |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）。ピル型リンクは `border-radius: 40px` で高さを確保する
- 左端のステークホルダータブは幅約 84px ×（アイコン 36px ＋ 2 行ラベル）で縦に十分な高さを取る

### フォントサイズの調整

- 本文: 16px → **14px**（87%）
- h1: 32px → **28px**（88%）／ h2: 24px → **16px**（67%。h2 の落差が大きい）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #ea5504（ラベル・見出し・ドット）
Link Color:    #1ba8d6（押せるもの）
Text Color:    #23323b
Surface:       #f3f3f3 / #f9f9f9
Footer:        #3e3a39
Background:    #ffffff
Font: "ヒラギノUD角ゴ Std", "Hiragino UD Kaku Gothic Std",
      "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
      メイリオ, meiryo, Arial, verdana, sans-serif
Web フォント: 読み込まない（0 本）
Weights: 400 / 700 のみ
Root: html 62.5%（= 10px）／ body 1.6rem（16px）→ 767px 以下 1.4rem（14px）
Line Height: 1.5（本文）/ 1.25（見出し）
Letter Spacing: normal
word-break: break-all
Card Shadow: rgba(0,0,0,0.2) 0 0 8px 0
```

### プロンプト例

```
協和キリンのデザインシステムに従って、ニュース一覧ページを作成してください。
- Web フォントは読み込まない。font-family は
  "ヒラギノUD角ゴ Std", "Hiragino UD Kaku Gothic Std", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, meiryo, Arial, verdana, sans-serif
- html { font-size: 62.5% } にして、サイズは rem で書く
- font-weight は 400 と 700 だけ。500 や 600 は使わない
- body { line-height: 1.5; letter-spacing: normal; word-break: break-all }
- 文字色は #23323b。純黒は使わない
- セクションラベルとカテゴリ名はオレンジ #ea5504
- 一覧へのリンクは border-radius 40px のピルで、文字はブルー #1ba8d6
- カードは角丸なし、影は rgba(0,0,0,0.2) 0 0 8px 0
- コンテナは max-width 980px、左右 padding 10px
- 767px 以下で body を 14px に落とす（clamp や vw は使わない）
```
