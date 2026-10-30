# DESIGN.md — リノベる。（RENOVERU）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-28 / 対象: `https://www.renoveru.jp/`, `/contents/renoveru`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **`html { font-size: 24px }`。ブラウザ既定の 1.5 倍を rem の基準に置いた、角丸だらけの生活者向けサービスサイト**
- **密度**: 中。本文 15〜16px、見出し 26〜40px。要素間の余白は広く、円と丸ボタンで面を区切る
- **キーワード**: 24px ルート、Zen Kaku Gothic New 一本、ウェイト 500 が本文、角丸 8 種、オレンジ＋黄＋水色

**このサイトの核心は5つある。**

1. **`html { font-size: 24px }` を実際に宣言している。** ビューポート幅 1440 / 1200 / 834 / 375px の4条件で計測して**すべて 24px 固定**（流体ではない）。つまり**このサイトで `1rem` と書くと 24px になる**。一般的な 16px 前提のコンポーネントをそのまま持ち込むと、rem で書かれた余白・サイズが 1.5 倍に化ける
2. **`body { letter-spacing: 0.05em }` を1回だけ書いて継承させている。** 24px × 0.05 = **1.2px** が計算値で、11px の注記から 40px の見出しまで**サイズが違うのに全部 1.2px**（可視 247 要素中 131 要素）。子要素で em を再宣言していない
3. **和文書体は Zen Kaku Gothic New の一本。** トップで可視 247 要素中 **246 要素**がこのスタック。明朝も欧文専用書体も使わない（数字も同じ書体で組む）
4. **`font-weight` の主役は 500。** 実測 500 が 154 要素、700 が 76 要素、400 は 17 要素だけ。**本文が Medium で、Regular はほぼ使わない**
5. **`border-radius` が 8 種類ある。** `999px` / `720px` / `100px` / `50%` / `35px` / `16px` / `10px` / `4px`。ヒーローの背景も `border-radius: 50%` の円（`#eaeaea`）で、**丸がこのサイトの主題**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Orange / CTA** | **`#e6842c`** | 面色 10 要素。ヘッダーの「資料請求」ボタン（`border-radius: 999px`）と、セクション末の大型 CTA（`border-radius: 4px`）。**このサイトで最も強い色** |
| **Yellow / Nav** | **`#ecdb2b`** | 面色 5 要素。ヘッダーの「セミナー／相談会／ショールーム」3連ボタン。**両端だけ `999px` で丸め、中央は角のまま**つなげる |
| **Light Blue / Accent** | **`#76cfe3`** | 面色 6 要素。サービス種別バッジと、黒枠のセカンダリボタンの面 |
| **Black / Text & Button** | **`#000000`** | 文字 170 要素・ボタン面。**このサイトは本文に純黒を使う**（薄墨に逃げない） |

> **オレンジは「申し込み」、黄は「相談する」、水色は「知る」**、と行動の段階で色が分かれている。3色を同じ意味で混ぜない。

### Secondary / Surface

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Hero Circle** | **`#eaeaea`** | ヒーロー左側の大きな円（`div.mv__container::before`・186,624px²）。**疑似要素なので DOM 走査には出てこない** |
| **Tag / Chip** | **`#f2f2f2`** | 都道府県チップの面 47 要素（`border-radius: 16px`） |
| **Card** | **`#f5f5f5`** | サービス分岐カードの面 3 要素 |
| **CTA Band** | **`#ddeaed`** | 「まずは全体像を理解したい方へ」の帯。オレンジ CTA の背後に敷く淡い水色 |
| **Dark Surface** | **`#333333`** | YouTube 導線の帯 |
| **Background** | **`#ffffff`** | ページ背景 |

> **`pageBackground.resolved` はヒーローの色を返す。** `heroCover.heroCovered: true`（`picture.mv__pic` 1440×650）で、`html` / `body` はどちらも `rgba(0,0,0,0)`。`viewportTopBySample` は 5/5 で白を返しており、**コンテンツ領域の地色は `#ffffff`**。
> 同じ計測で最大面積に出る `rgba(0,0,0,0.7)`（`div.go1632949049`・1,308,952px²）は**ハンバーガーメニューの暗幕**で、静止状態では見えない。地色として採用してはいけない。

### Gradient（2 箇所だけ）

```css
/* サービス種別バッジ「セレクテッド」— 斜め 45 度で二色を半分ずつ */
background: linear-gradient(-45deg, #ecdb2b 0%, #ecdb2b 50%, #76cfe3 50%, #76cfe3 100%);

/* 「リノベるのサービスポリシー」の面 */
background: linear-gradient(to right bottom, #a7e6ff, #3b7793);
```

> グラデーションはこの 2 つだけ。**ブランド色どうしを 50% で切り替える**ハードストップで、ぼかさない。

### 外部埋め込み由来の色（自社トークンではない）

- **`#0270e0`**: HubSpot フォーム内のリンク色（`<a>` が 24px / 400 / `letter-spacing: 1.2px` のまま素通しになっている）。**自社のリンク色として再利用しない**
- `--swiper-theme-color: #007aff`: Swiper のデフォルト。CSS 変数に現れるが実装では使われていない

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し（文字 170 要素）
- **Text Muted** (`rgba(0,0,0,0.5)`): 都道府県チップの文字など（54 要素）
- **Text on Dark** (`#ffffff`): 黒ボタン・オレンジ帯の上（23 要素）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Zen Kaku Gothic New**（Google Fonts）。可視 247 要素中 246 要素
- 明朝体は使わない
- 例外は 1 要素だけ `"Yu Gothic", YuGothic, sans-serif`（ヘッダーの「相談会」）。**これは実装漏れで、再現する必要はない**

### 3.2 欧文フォント

- **数字・英字も Zen Kaku Gothic New で組む。** 欧文専用書体に切り替えない
- Google Fonts の読み込み URL には `Roboto:ital,wght@0,100..900;1,100..900` も含まれているが、**`document.fonts` の状態は `unloaded`** で描画には使われていない

### 3.3 font-family 指定

```css
/* 実サイトの body 宣言そのまま */
body {
  margin: 0;
  padding: 0;
  letter-spacing: 0.05em;
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
}
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

**フォールバックの考え方**:
- Web フォント 1 本 ＋ `sans-serif` だけ。OS 書体を中間に挟まない
- `Zen Kaku Gothic New` が落ちると各 OS の既定ゴシックになる。Zen 系は角が丸いので、落ちると**このサイトの印象が最も大きく変わる**箇所

### 3.4 Web フォントの実際

| ファミリー | 宣言 | `document.fonts` の状態 | 判断 |
|---|---|---|---|
| Zen Kaku Gothic New | 300 / 400 / 500 / 700 / 900 | **400 / 500 / 700 が `loaded`**、300 と 900 は `unloaded` | URL では 5 本要求しているが、**実際に描画に使われているのは 3 本**。300・900 は使える状態にはあるが、現行デザインでは使っていない |
| Roboto | 100..900（可変・italic 含む） | `unloaded` | 読み込み URL にあるだけで未使用 |
| swiper-icons | 400 | `unloaded` | Swiper のアイコン用 |

> **新規実装では 400 / 500 / 700 の 3 段に収める。** 900 を足すとこのサイトに無い強さが出る。

### 3.5 文字サイズ・ウェイト階層

**★ `1rem = 24px`。下表の px をそのまま書くのが安全。rem に直すときは 16 ではなく 24 で割ること。**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Page Title (h1) | Zen Kaku Gothic New | 40px | 700 | 48px (1.20) | 1.2px | 下層ページの見出し。`border-radius: 45px` の白い面に載る |
| Section Title (h2) | Zen Kaku Gothic New | 40px | 500 | 64px (1.60) | 1.2px | 下層。トップの h2 は 26px / 500 / 41.6px (1.60) |
| Heading (h3) | Zen Kaku Gothic New | 30px | 700 | 42px (1.40) | 1.2px | トップ。下層は 24px / 700 / 33.6px、字間だけ 2.4px に広げる |
| Lead | Zen Kaku Gothic New | 32px | 700 | 1.40 | 1.2px | 「こんなお悩みありませんか？」等の導入文（10 要素） |
| Body | Zen Kaku Gothic New | 18px | 700 | 2.00 | 1.2px | 本文の説明（**本文でも 700 を使う**） |
| Link / List | Zen Kaku Gothic New | 15px | 500 | 1.40 | 1.2px | 最頻サイズ（51 要素） |
| Nav | Zen Kaku Gothic New | 14px | 500 | 19.6px (1.40) | 1.4px | ヘッダーの 3 連ボタン |
| Caption | Zen Kaku Gothic New | 12px | 500 | 16.8px (1.40) | 1.2px | サービス名の補足（37 要素） |
| Small | Zen Kaku Gothic New | 11px | 500 | 1.40 | 1.2px | バッジ内の小文字（18 要素） |

> `font-size` の実測は **11 / 12 / 13 / 14 / 15 / 16 / 18 / 20 / 26 / 30 / 32 / 40px** で、すべて整数。**`htmlFontSize` が 24px でも本文サイズは px で直接書いている**（rem を多用する設計ではない）。

### 3.6 行間・字間

- **本文の行間**: `1.40` が既定（135 要素）。読ませる段落だけ `1.60`（75 要素）、さらに長い説明文で `2.00`（9 要素）
- **見出しの行間**: 下層 h2 のみ `1.60`、h1 は `1.20`
- **本文の字間**: **`body` に `letter-spacing: 0.05em` を 1 回だけ**。24px 基準なので計算値 **1.2px** が全体に継承される
- **見出しの字間**: 継承のまま 1.2px。強調したい見出しだけ個別に `2.4px` / `3px` / `2px` を当てる

```css
/* ★書き方の要点：これを body に1回だけ書く。子要素で em を書き直さない */
body { letter-spacing: 0.05em; line-height: 1.4; }
```

> **`0.05em` を子要素で再宣言すると、そこだけ字間が変わる。** 例えば 14px の要素に `0.05em` を書くと 0.7px になり、継承した 1.2px と揃わない。**実サイトは 1.2px のまま押し通している**（サイズが違っても px が同じ＝継承の証拠）。
> 個別に当てているのは 8 箇所だけで、`0.75px`（12 要素）/ `2.25px`（4 要素）/ `1.4px`（3 要素）/ `2px`（3 要素）/ `3px`（1 要素）など。

### 3.7 OpenType 機能

```css
/* 実測: font-feature-settings は 0 要素。palt を使っていない */
```

- **`palt` は 1 要素も無い。** Zen Kaku Gothic New の素の字送りで組む
- 約物サブセット（YakuHanJP 系）も使っていない
- **新規実装で `palt` を足さない。** 足すとカタカナのサービス名（「リノベーション」「セレクテッド」）が詰まって印象が変わる

### 3.8 縦書き

```css
/* 実測: writing-mode が horizontal-tb 以外の要素は 0。縦組みは使わない */
```

該当なし。

---

## 4. Component Stylings

### Buttons

**Primary（黒の四角ボタン）**
- Background: `#000000`
- Text: `#ffffff`
- Border: `2px solid transparent`（**透明の 2px 枠を持つ**。セカンダリと幅を揃えるため）
- Padding: `20px 40px`（大）/ `14px 20px`（小）
- Border Radius: `4px`
- Font: 16px / 500 / `line-height: 19.2px` / 字間 normal

**Secondary（白地・黒枠）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `2px solid #000000`
- Padding: `20px 40px`（大）/ `10px 20px`（小）
- Border Radius: `4px`
- Font: 16px / 500 / `line-height: 22.4px`

**Accent（水色・黒枠）**
- Background: `#76cfe3` / Text: `#000000` / Border: `2px solid #000000`
- Padding: `14px 40px` / Border Radius: `4px` / Font: 16px / 500

**CTA Pill（オレンジ・ヘッダー）**
- Background: `#e6842c` / Text: `#000000`
- Padding: `11px 34.5px` / Border Radius: `999px`
- Font: 15px / 400 / `line-height: 22.5px` / 字間 1.2px
- **文字色は白ではなく黒**

**CTA Block（オレンジ・セクション末）**
- Background: `#e6842c` / Text: `#000000`
- Padding: `20px 77px` / Border Radius: `4px` / Font: 16px / 500
- **同じオレンジでも、ヘッダーは `999px`・本文中は `4px`** と角丸を変える

**Nav Group（黄の 3 連）**
- Background: `#ecdb2b` / Text: `#000000` / Font: 14px / 500 / 字間 `1.4px`
- Padding: 左端 `11px 15px 11px 25px` / 中央 `11px 15px` / 右端 `11px 25px 11px 15px`
- Border Radius: 左端 `999px 0 0 999px` / 中央 `0` / 右端 `0 999px 999px 0`
- **3 個で 1 つのカプセルに見せる。個々を丸めない**

**Pill Dark（本文中のテキストリンク）**
- Background: `#000000` / Text: `#ffffff` / Padding: `3px 40px` / Border Radius: `999px`
- Font: 15px / 500 / `line-height: 30px` / **字間 `3px`**（このサイトで最も広い字間）

### Badges / Chips

| 種類 | 面 | 文字 | Padding | Radius | Font |
|---|---|---|---|---|---|
| サービス種別 | `#e6842c` | `#000000` | `4px 20px` | `999px` | 12px / 700 |
| サービス種別（黒） | `#000000` | `#ffffff` | `4px 20px` | `999px` | 12px / 500 |
| 「セレクテッド」 | `linear-gradient(-45deg, #ecdb2b 50%, #76cfe3 50%)` | `#000000` | — | `0 0 10px 10px` | 12px / 500 |
| 都道府県チップ | `#f2f2f2` | `rgba(0,0,0,0.5)` | `10px 15px` | `16px` | 14px / 700 / 字間 1.2px |

> **バッジの角丸が 3 種類（`999px` / `16px` / `0 0 10px 10px`）ある。** 下だけ丸める `0 0 10px 10px` は、カード上端に貼り付くタブ型のバッジ。

### Cards

- Background: `#f5f5f5`（サービス分岐）/ `#ffffff`（事例）
- Border Radius: `10px`（カード本体）/ `100px`（お悩みの吹き出し）
- Shadow: 原則なし。**実測の `box-shadow` は 1 種類だけ**（下記 6 章）
- Padding: `40px 80px 50px`（CTA ブロック）

### Circle Button（ハンバーガー・カルーセル送り）

- Size: 円（`border-radius: 50%`・実測 33 要素）
- Background: `#ffffff` / Border: `6px solid #333333`（カルーセルの送り）
- **ハンバーガー（`header__hum`）は `#ffffff` の円で、ヘッダー右端に浮く**

### 外部埋め込み（HubSpot）

- `a.hs-button`: `background #000000` / `border-radius: 720px` / `padding 2px 30px`（14px / 700 / 字間 1.2px）
- **`720px` はこのサイトの角丸スケールに無い値**（自社は `999px`）。HubSpot のフォームテンプレート由来なので、新規実装では `999px` に統一する

---

## 5. Layout Principles

### Grid

```css
/* 実サイトの :root にある自社変数は、この 2 つだけ */
:root {
  --column-gap: 2.13%;
  --column-width-multiplier: 8.333;   /* 100 / 12 */
}

/* 12 カラムの n カラム幅は calc で求める（実サイトの式をそのまま） */
.col-1  { width: calc(var(--column-width-multiplier) * 1%  * 1  - var(--column-gap) * (11 * var(--column-width-multiplier) / 100)); }
.col-2  { width: calc(var(--column-width-multiplier) * 1%  * 2  - var(--column-gap) * (10 * var(--column-width-multiplier) / 100)); }
/* …以下 11 まで同じ形 */
```

- **Columns: 12**（`8.333% = 100/12`）
- **Gutter: `2.13%`**（px ではなく %。ビューポートに比例して伸縮する）
- **CSS 変数はこの 2 つで全部。** 色もフォントも変数にしていない（`customPropertiesSummary.own = 2`）

### Container

- 実測でコンテナ幅の固定値は取れなかった。**カラムは % で持ち、外側の余白も % に寄せる設計**
- CTA ブロックの内側 padding は `40px 80px 50px`

### Spacing Scale

余白のトークンは無い。実測のパディングから拾うと **4 / 10 / 11 / 14 / 15 / 20 / 25 / 30 / 34.5 / 40 / 47 / 77 / 80px**。
**4 の倍数と「左右非対称の pill パディング」が混ざる**ので、コンポーネント単位で上表の値をそのまま使う。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **ほぼ全要素**。ボタン・バッジ・チップは影を持たない |
| 1 | `rgba(149, 157, 165, 0.2) 0px 8px 24px 0px` | **実測 1 要素だけ**。「リノベる。の住まい」のセクション見出し周り |

> **影は事実上 1 種類しかない。** 奥行きは影ではなく、**角丸（`4px` → `16px` → `999px`）と面色（`#ffffff` / `#f2f2f2` / `#f5f5f5` / `#ddeaed`）の切り替え**で作る。
> `rgba(149,157,165,0.2) 0 8px 24px` はよく出回っている汎用値なので、**このサイトの署名的な影ではない**。新規実装で多用しない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html { font-size: 24px }` を先に置く。** この宣言を写さないと、rem で書いた値がすべて 1.5 分の 1 に縮む
- **`letter-spacing: 0.05em` は `body` に 1 回だけ書き、継承させる。** 計算値 1.2px が全サイズで揃うのがこのサイトの見え方
- **本文のウェイトは 500。** 400 は補助的にしか使わない
- **角丸を使い分ける**: 申し込み動線＝`999px`、本文中のボタン＝`4px`、カード＝`10px`、チップ＝`16px`
- **オレンジ `#e6842c` の上の文字は黒。** 白にするとコントラストが落ちる（`#e6842c` と白は 2.5:1 程度）
- 黄 `#ecdb2b` の 3 連ボタンは**両端だけ丸める**

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない。** 実測 0 要素。カタカナのサービス名が詰まって別物になる
- **子要素で `letter-spacing: 0.05em` を書き直さない。** そこだけ字間が変わる（0.05em はサイズに比例するため）
- **`font-weight: 300` / `900` を当てない。** Google Fonts の URL には載っているが、現行デザインでは 1 要素も使っていない
- **`border-radius: 720px` を新しく書かない。** HubSpot フォーム由来。自社は `999px`
- **`#0270e0` をリンク色に採用しない。** HubSpot 埋め込みのリンクが素通しになっているだけ
- **縦組み・明朝を持ち込まない。** どちらも実装に 0 件
- **`pageBackground.resolved` をそのまま地色にしない。** ヒーロー（`picture.mv__pic`）とメニューの暗幕 `rgba(0,0,0,0.7)` が混ざる

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | `@media (max-width: 767px)` が主要な切り替え点（HubSpot テンプレート由来の `.dnd-section` も同じ値） |
| Desktop | ≥ 768px | 既定のレイアウト |

- **`html { font-size: 24px }` はブレークポイントを跨いでも変わらない。** 1440 / 1200 / 834 / 375px の4条件で計測して全て 24px
- `body` の `font-size: 24px` / `line-height: 33.6px` / `letter-spacing: 1.2px` も 4 条件で同一。**文字まわりはレスポンシブで変えない設計**

### モバイルでのサイズ調整

- 12 カラムは `%` 基準なので、幅の縮小はグリッドが吸収する
- 文字サイズは各要素の px 指定なので、モバイル用の上書きが必要な箇所だけ個別に下げる

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）
- ヘッダー CTA は `padding: 11px 34.5px` ＋ 15px / `line-height: 22.5px` で約 45px 高。**そのまま基準を満たす**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Root Font Size: 24px   ★ 1rem = 24px（16px ではない）
Primary Color: #e6842c   （申し込み系 CTA・pill）
Sub Colors:    #ecdb2b（相談系ナビ） / #76cfe3（サービス種別）
Text Color:    #000000
Background:    #ffffff   （ヒーローの円は #eaeaea）
Font: "Zen Kaku Gothic New", sans-serif
Body Size: 15px / Weight 500
Line Height: 1.4（読ませる段落は 1.6〜2.0）
Letter Spacing: body に 0.05em（= 1.2px）を1回だけ
palt: 使わない
Radius: 4px（ボタン） / 10px（カード） / 16px（チップ） / 999px（pill）
Shadow: 原則 none
```

### プロンプト例

```
リノベる。のデザインシステムに従って、リノベーション事例のカード一覧を作成してください。

- html に font-size: 24px を宣言する（1rem = 24px。rem を書くときは 24 で割ること）
- body に font-family: "Zen Kaku Gothic New", sans-serif / letter-spacing: 0.05em /
  line-height: 1.4 / font-weight: 400 を書く（字間は子要素で書き直さない）
- カード: 背景 #ffffff、border-radius: 10px、影なし
- カード見出し: 20px / 500、本文: 15px / 500、補足: 12px / 500
- 事例種別バッジ: 面 #e6842c、文字 #000000、padding 4px 20px、border-radius 999px、12px / 700
- 都道府県チップ: 面 #f2f2f2、文字 rgba(0,0,0,0.5)、padding 10px 15px、border-radius 16px、14px / 700
- 一覧末の CTA: 面 #e6842c、文字 #000000、padding 20px 77px、border-radius 4px、16px / 500
- font-feature-settings は書かない（実サイトは palt を使っていない）
- box-shadow は使わない
```
