# DESIGN.md — 関西国際空港（KIX / Kansai International Airport）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-09 / 対象: `https://www.kansai-airport.or.jp/`, `/access`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **紺とシアンの 2 色で組む、トークン駆動の案内 UI。** 色・サイズ・行間・イージングまで `:root` の変数に載っている（実測 **自社トークン 148 個**）。角丸は 16px か全丸の二択で、丸みが強い
- **密度**: 中〜高。待ち時間・出発便・フロアマップといった「いま知りたい数値」をカードで並べる
- **キーワード**: KIX ネイビー、シアン、Noto Sans 多言語、色の付いた影、16px の角丸

**このサイトの核心は5つある。**

1. **和文 Web フォントを 4 言語ぶん自前でホストし、言語で出し分けている。** `notosansjp` / `notosanstc` / `notosanssc` / `notosanskr` を `/themes/custom/kix_ui/src/fonts/` に置き、`html[lang]` ごとにスタックを切り替える。日本語ページでは **JP の 3 本だけが `loaded`**、TC / SC / KR は `unloaded` のまま（＝1 バイトも落ちない）
2. **`letter-spacing` を一度も触らない。** 可視 134 要素中 **134 要素が `normal`**（残る 1 件は Cookie バナー由来）。**ベタ組みがこのサイトの字面**
3. **`box-shadow` が黒ではなくブランド色で付いている。** `rgba(0,191,242,.12)`（シアン）と `rgba(7,24,92,.12)`（紺）の 2 種。**黒い影を 1 つも使っていない**
4. **主ボタンは背景ではなく「文字そのもの」に 2 色のグラデーションを敷いてある。** `linear-gradient(to right, #00bff2 0 50%, #07185c 50% 100%)` を `background-size: 200% 100%` で持ち、`-webkit-text-fill-color: transparent` で文字に抜く。既定は右半分（紺）が見えていて、ホバーで位置を動かすと**文字色がシアンへ拭き変わる**（実測 27 要素）
5. **`font-weight` は 400 / 500 / 700 の 3 段。** Noto Sans JP の Regular / Medium / Bold を**実ファイルで 3 本持っている**ので、この 3 つは本物の太さで出る

**`font-feature-settings` は `normal`（実測 0 件）。`palt` は使っていない。**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | トークン | 実測 |
|------|--------|---------|------|
| **KIX Navy** | **`#07185c`** | `--color-blue-500` / `--color-blue` | **可視 30〜31 要素**。文字・面・影の基準色 |
| **KIX Cyan** | **`#00bff2`** | `--color-sky-blue-500` | **可視 71 要素**。アクセント、ボタンのグラデ左半分、影の色 |
| Cyan Light | `#bdf1ff` | `--color-sky-blue-100` | 淡い面 |
| Cyan Lightest | `#f0fcff` | `--color-sky-blue-50` | 最も淡い面 |

> **マゼンタ `#eb008b`（`--color-red-500`）は変数として定義され、CSS の 2 箇所から参照されているが、可視 0 要素。**
> トップのヒーローに見える鮮やかなマゼンタ（鳥居・KIX のロゴマーク）は、CSS の色ではなく
> **`hero-kix-2-bg.png` という画像に焼き込まれた色**。**マゼンタを UI の色として実装しない。**

### Semantic（意味的な色）

| 役割 | 文字 | 面 | トークン |
|------|------|----|---------|
| **Error** | `#cc1000` | `#ffe3e0` | `--color-error-primary` / `-secondary` |
| **Warning** | `#6e4005` | `#fff1d6` | `--color-warning-primary` / `-secondary` |
| **Success** | `#006936` | `#e2efda` | `--color-success-primary` / `-secondary` |
| **Info** | `#084285` | `#d9eaff` | `--color-info-primary` / `-secondary` |

**4 種とも「濃い文字色＋淡い面色」の対で用意されている。** 片方だけ使わない。

### Neutral（ニュートラル）

| 役割 | 実装値 | トークン | 実測 |
|------|--------|---------|------|
| **Text Primary** | `#101114` | `--color-grey-600` / `--color-grey` | **可視 23〜44 要素**。純黒ではない |
| **Text Muted** | `#6e7281` | `--color-grey-400` | **可視 10〜20 要素**。更新時刻・注記 |
| Text Strong Sub | `#3e414c` | `--color-grey-500` | |
| Border | `#dddddf` | `--color-grey-200` | |
| Divider | `#a6a8b0` | `--color-grey-300` | |
| **Background** | `#f7f7f8` | `--color-grey-100` | セクションの地。`main.layout-main` |
| Surface | `#ffffff` | `--color-white` | カードの面 |

> **ページの地色は白。** `pageBackground.resolved` は `rgb(255,255,255)`（根拠 `viewportTopBySample 6/12`）。
> トップは `heroCovered: true`（`div.home-hero-kix_anim-bg` の背景画像 2394×580 が上部を覆う）なので、
> **ヒーローの色をページ背景と取り違えないこと。** セクションの地として `#f7f7f8` を敷く。

> **`--color-gray-*`（英綴り `gray`）と `--color-grey-*`（`grey`）が両方ある。**
> `gray` 系は Tailwind 既定の `oklch()` のまま、`grey` 系が KIX の hex。**使うのは `grey` のほう。**
> 同じく `--color-cyan-500` / `--color-sky-500` / `--color-blue-600` / `--color-blue-800` も Tailwind 既定の残りで、
> ブランド色ではない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**。セルフホストで Regular / Medium(500) / Bold(700) の **3 本**
- **多言語**: Noto Sans TC（繁体）/ SC（簡体）/ KR（韓国語）を同じ場所に置き、**言語ごとにスタックごと差し替える**
- 明朝体は使わない

### 3.2 欧文フォント

- **Noto Sans**（`notosans`）。Regular / Medium / Bold の 3 本をセルフホスト。**和文スタックの 2 番目**に置き、欧文・数字をここで拾う
- アイコンフォント `kixicon`（`iconfont.woff2`）
- Roboto が 1 ファイルだけ `fonts.gstatic.com` から読まれるが、UI の書体ではない

### 3.3 font-family 指定

```css
/* 日本語ページ（実サイトの宣言そのまま） */
font-family: notosansjp, notosans, "PingFang SC", "Microsoft YaHei", sans-serif;

/* 繁体字 */ font-family: notosanstc, notosans, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
/* 簡体字 */ font-family: notosanssc, notosans, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
/* 韓国語 */ font-family: notosanskr, notosans, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
```

> **実サイトはこうだが、日本語スタックのフォールバックは入れ替わっている。**
> 日本語ページの受け皿が **PingFang SC（簡体字中国語）と Microsoft YaHei（簡体字中国語）**で、
> 逆に中国語・韓国語ページの受け皿が**ヒラギノ角ゴ ProN とメイリオ（日本語）**になっている。
> Web フォントが落ちてこないあいだ、日本語ページは**中国語の字形**（`直` `骨` `今` `海` などが別形）で表示される。
> **正しくは次のように書く:**
>
> ```css
> font-family: notosansjp, notosans,
>              "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", Meiryo, sans-serif;
> ```

```css
/* @font-face（実サイトの宣言そのまま） */
@font-face {
  font-family: notosansjp;
  src: url("/themes/custom/kix_ui/src/fonts/notosans-fonts/NotoSansJP-Regular.woff")
       format("truetype");          /* ← 実ファイルは .woff。正しくは format("woff") */
}
@font-face { font-family: notosansjp; src: url(".../NotoSansJP-Medium.woff") format("truetype"); font-weight: 500; }
@font-face { font-family: notosansjp; src: url(".../NotoSansJP-Bold.woff")   format("truetype"); font-weight: 700; }
```

**宣言 ≠ 実装が 2 つある。**

1. **`format("truetype")` と書いてあるが、実ファイルは `.woff`。** ブラウザが中身で判定するので現状は動くが、`format()` は正しくは `woff`
2. **`font-display: swap` が TC / SC / KR にはあり、JP と欧文の `notosans` には無い。** 日本語ページだけが読み込み中に文字を出さない（FOIT）挙動になる。**新規実装では JP にも `font-display: swap` を付ける**

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Sans JP | 50px | 700 | 1.2 (60px) | normal | ヒーロー「こんにちは！」。375px では 32px |
| Heading 1 | Noto Sans JP | 40px | 700 | 1.2 (48px) | normal | |
| Heading 2 | Noto Sans JP | 32px | 700 | 1.2 | normal | セクション見出し。可視 4〜7 要素 |
| Heading 3 | Noto Sans JP | 20px | 700 | 1.2 | normal | カード見出し。**可視 15 要素** |
| Lead | Noto Sans JP | 18px | 500 | 1.4 | normal | 見出しに添える説明 |
| Body | Noto Sans JP | 16px | 400 | 1.4 (22.4px) | normal | 本文。**最多の 31〜55 要素** |
| UI / Caption | Noto Sans JP | 14px | 400/500 | 1.4 (19.6px) | normal | ナビ・注記。可視 28〜37 要素 |

`html` は 1440 / 1200 / 834 / 375px のいずれでも **16px 固定**（流体ルートではない）。

### 3.5 行間・字間

- **本文の行間**: `1.4`（可視 41〜67 要素で最多）
- **見出しの行間**: `1.2`（可視 23〜42 要素）
- **長文の行間**: `1.75`（ボタン内の折り返しなど少数）
- **字間**: **全要素 `normal`。1 箇所も触らない**

**ガイドライン**:
- **`letter-spacing` を書かない。** このサイトの日本語は完全なベタ組みで、それが設計
- `line-height` は**単位なしの比率**。トークンにも `--leading-label: 1.2` / `--leading-normal: 1.5` として比率で入っている
- 本文 `1.4` は日本語としては締まったほう。**空港の案内という「短い行を速く読む」用途**に合わせた値で、長文の記事に流用しない

### 3.6 禁則処理・改行ルール

```css
/* 実サイトに宣言があるもの（箇所ごとに使い分け） */
word-break: normal;      /* 既定 */
word-break: keep-all;    /* ことばの途中で折り返さない箇所 */
word-break: break-all;   /* 長い英数字 */
overflow-wrap: break-word;
```

- `body` の実効値は `word-break: normal` / `line-break: auto`
- `word-break: auto-phrase` は使っていない

### 3.7 OpenType 機能

```css
/* 実サイトは font-feature-settings: normal。palt は使っていない */
```

- Tailwind の `--default-font-feature-settings` は `normal` のまま。**`palt` を足さない**

### 3.8 縦書き

`writing-mode` は実測 0 件。**縦組みを使わない。**

---

## 4. Component Stylings

### Buttons

**Primary**（`btn-kix-default` — 文字がグラデーションで拭き変わるボタン）

```css
.btn-kix-default {
  background-image: linear-gradient(to right,
    #00bff2 0%, #00bff2 50%, #07185c 50%, #07185c 100%);
  background-size: 200% 100%;
  background-position: 100% 0;      /* 既定は右半分＝紺が文字に出る */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position .4s var(--ease-kix-outside);
}
.btn-kix-default:hover { background-position: 0 0; }   /* シアンへ拭き変わる */
```

- **面を塗るのではなく、文字を塗る。** 実測 27 要素
- `--ease-kix-outside: cubic-bezier(.25, 1, .5, 1)`（KIX 専用のイージング）

**Solid**（面で塗るボタン）
- Background: `#07185c` / Text: `#ffffff` / Font Size `16px` / Weight `500` / Line Height `1.4`
- Border Radius: **全丸**（Tailwind v4 の `rounded-full` は `calc(infinity * 1px)` = 実測 `3.35544e+07px`。**CSS に書くときは `9999px` でよい**）

**Accent**
- Background: `#00bff2` / Text: `#ffffff` / Font Size `20px` / Weight `700` / Line Height `1.4`

**Status Chip**（Semantic の対で作る）
- Success: 面 `#e2efda` / 文字 `#006936` / `14px` / Weight `500`
- Warning: 面 `#fff1d6` / 文字 `#6e4005`
- Error: 面 `#ffe3e0` / 文字 `#cc1000`
- Info: 面 `#d9eaff` / 文字 `#084285`

### Inputs

- Background: `#ffffff` / Border: `1px solid #dddddf`
- Border Radius: **全丸**（検索フォーム）または `8px`
- Font Size: `16px` / Weight `400`

### Cards

- Background: `#ffffff`
- Border Radius: **`16px`**（実測 21〜37 要素で最多）
- 変形: `0 0 16px 16px`（上辺だけ角のない帯）
- Shadow: 6章参照

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 実測 |
|-------|-------|------|
| XS | 8px | gap 可視 4〜6 箇所 |
| S | 12px | |
| M | **16px** | gap 可視 6〜12 箇所 |
| L | **24px** | gap 可視 10 箇所 |
| XL | 32px | gap 可視 4 箇所 |
| XXL | 56px / 64px | セクション間 |

**8 の倍数**で揃っている（8 / 16 / 24 / 32 / 56 / 64）。

### Container

- **Max Width: `1280px`**（実測 17〜21 要素。このサイトの基準）
- 広い帯: `1440px`
- 読み物の段: `1024px`

### Grid

- カードは 2〜4 列、`gap: 16px` または `24px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 既定 |
| 1 (cyan) | `rgba(0,191,242,.12) 0 1px 3px 0, rgba(0,191,242,.12) 0 4px 8px 3px` | お知らせの帯 |
| 1 (navy) | `rgba(7,24,92,.12) 0 1px 4px 0, rgba(7,24,92,.12) 0 4px 8px 3px` | 「空港のご利用目的は？」のパネル |

**影は黒を使わない。** ブランドの 2 色を `12%` の不透明度で敷き、
**近い影（`1px 3px` / `1px 4px`）と遠い影（`4px 8px 3px`）を必ず 2 本重ねる**。
`rgba(0,0,0,.2) 0 0 18px` が 1 件出るが、これは Cookie バナー（Usercentrics）のもので**サイトの影ではない**。

---

## 7. Do's and Don'ts

### Do（推奨）

- 色は `--color-grey-*` / `--color-sky-blue-*` / `--color-blue-500` から取る
- Semantic は**文字色と面色の対**で使う（`#006936` と `#e2efda` のように）
- 角丸は **`16px`** を既定にし、ボタン・入力欄だけ全丸にする
- 影は**ブランド色 12%・2 本重ね**で作る
- `line-height` は `1.4`（本文）/ `1.2`（見出し）の 2 値
- 和文スタックのフォールバックは**ヒラギノ角ゴ ProN / メイリオ**に直して書く

### Don't（禁止）

- **`letter-spacing` を足さない**（実サイトは可視 134 要素すべて `normal`）
- **マゼンタ `#eb008b` を UI の色として使わない**（可視 0 要素。画像の中の色）
- **黒い `box-shadow` を使わない**
- **`palt` を足さない**
- **`--color-gray-*`（`gray` 綴り）・`--color-cyan-500` / `--color-sky-500` / `--color-blue-600` / `--color-blue-800` を使わない**（Tailwind 既定の残りでブランド色ではない）
- **日本語スタックに `PingFang SC` / `Microsoft YaHei` を書かない**（実サイトの誤り。中国語字形で出る）
- **`format("truetype")` で `.woff` を宣言しない**
- 純黒 `#000000` を本文に使わない（`#101114`）

---

## 8. Responsive Behavior

### Breakpoints

Tailwind v4 の既定スケールをそのまま使う（`--breakpoint-xl: 80rem` = 1280px がトークンにある）。

| Name | Width |
|------|-------|
| Mobile | < 768px |
| Tablet | ≥ 768px |
| Desktop | ≥ 1024px |
| Wide | ≥ 1280px |

### タッチターゲット

- 最小 44px × 44px

### フォントサイズの調整

実測（1440px → 375px）:

| 要素 | 1440 / 1200 / 834px | 375px |
|------|------|------|
| ヒーロー見出し | 50px / lh 60px | **32px / lh 38.4px** |
| 本文 | 14px / lh 19.6px | **14px**（変わらない） |

- **834px まで値が動かず、375px で見出しだけ縮む。** 本文は全幅で同じサイズ
- `line-height` は比率なので自動で追従する（1.2 のまま）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #07185c   (KIX Navy)
Accent Color:  #00bff2   (KIX Cyan)
Text Color:    #101114   (弱め: #6e7281)
Background:    #f7f7f8   / Surface: #ffffff / Border: #dddddf
Font: notosansjp, notosans, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
      (= Noto Sans JP 400 / 500 / 700)
Body Size: 16px
Line Height: 1.4 (本文) / 1.2 (見出し)
Letter Spacing: normal  ← 触らない
Radius: 16px (カード) / 9999px (ボタン・入力欄)
Shadow: rgba(0,191,242,.12) または rgba(7,24,92,.12) の2本重ね
Container: 1280px
```

### プロンプト例

```
関西国際空港のデザインシステムに従って、保安検査の待ち時間カードを作成してください。
- フォント: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif（400/500/700）
- カード: 背景 #ffffff / border-radius 16px / gap 24px
- 影: rgba(7,24,92,.12) 0 1px 4px 0, rgba(7,24,92,.12) 0 4px 8px 3px（黒い影は使わない）
- 見出し 20px / weight 700 / line-height 1.2、本文 16px / weight 400 / line-height 1.4
- letter-spacing は指定しない（normal のまま）
- 混雑ステータス: 空いている = 面 #e2efda / 文字 #006936、混雑 = 面 #fff1d6 / 文字 #6e4005
- 詳細ボタン: 背景 #07185c / 文字 #ffffff / border-radius 9999px / 16px / weight 500
- ページ背景 #f7f7f8、コンテナ幅 1280px
```
