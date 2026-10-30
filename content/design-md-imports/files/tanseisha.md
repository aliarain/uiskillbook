# DESIGN.md — 丹青社（TANSEISHA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-30 / 対象: `https://www.tanseisha.co.jp/`, `/about`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **社名の 2 文字がそのまま配色になっている。** 「丹青」の丹（赤 `#A7153C`）と青（`#1C4C6F`）を CSS 変数 `--red` / `--blue` として持ち、斜めに切った面と写真で画面を割る。空間づくりの会社らしく、面の切り方で奥行きをつくる
- **密度**: 中。ヒーローは 48px の見出しと写真だけ。以下は 14px / 16px のカードを 1200px 幅に詰めて並べる
- **キーワード**: 丹青＝赤と青、ルビ、clamp() の流体タイポ、ピルか円かの二択、影ゼロ

**このサイトの核心は 4 つある。**

1. **配色トークンが社名の由来そのもの。** `--red: #A7153C` / `--blue: #1C4C6F` の 2 つが CSS Custom Properties に定義され、会社案内には「「丹青」とは、赤(丹)・青の基本的な 2 色から…」という一文がある。**色が先にあってブランドがあるのではなく、名前が先にあって色がある**
2. **ヒーロー見出しに本物の `<ruby>` が入っている。** 「人と社会に**丹青**（いろどり）を。」の丹青に `<rt>いろどり</rt>`。DOM 実測で `ruby` 1 要素 / `rt` 1 要素。**画像でもツールチップでもなく、HTML のルビ**
3. **文字サイズが `clamp()` で流体になっている。** `body` の font-size は **768px で 15px、1200px で 16px、その間を線形補間**（834px の実測が 15.1528px。傾きは厳密に 1/432）。`clamp(1.2rem, .8444444444rem + .462962963vw, 1.4rem)` のような式が本文・見出しに並ぶ。**`html` は 10px 固定で、動くのは `body` 以下**
4. **`palt` は CSS にあるが、この 2 ページでは 1 要素も効いていない。** `font-feature-settings: "palt"` の宣言は 7 箇所あるが、**すべて `.main--partner*`（協力会社向けページ）に限定**されている。トップと会社案内の実測は **0 要素**

**CSS Custom Properties は自社トークン 13 個**（ほかに Swiper 2 個と WordPress / Gutenberg 49 個）。**色は 11 個ぜんぶ定義されているが、実際に描画されるのはその一部で、逆にトークンに無い色も使われている**（2 章参照）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 変数 | 実装値 | 実測 |
|------|------|--------|------|
| **丹（赤）** | `--red` | **`#A7153C`** | トップで**文字 24 要素・面 1 要素**（`お知らせ` バッジ）、会社案内で文字 1 要素（`About`）。ヒーロー右上の帯（`.hero__KV__inner::after`）にも使う |
| **青** | `--blue` | **`#1C4C6F`** | **面 3 要素**。グローバルナビの展開面、フッターの `Contact` ブロック |

> **赤は「文字とアクセント」、青は「面」。** 実測では役割がはっきり分かれている。赤で大きな面を塗っている箇所は `お知らせ` バッジ 1 つだけ。

### Semantic（カテゴリバッジ）

| 色 | 実装値 | 用途 | 注意 |
|----|--------|------|------|
| Report Blue | **`#376895`** | `視察レポート` `対談・インタビュー`（面 6 要素） | **CSS 変数に無い。ハードコード** |
| Works Purple | **`#555879`** | `事例紹介`（面 2 要素） | **CSS 変数に無い。ハードコード** |
| News Red | `#A7153C` | `お知らせ`（面 1 要素） | `--red` |

> **カテゴリバッジの 2 色はトークン化されていない。** `--red` / `--blue` だけを見て「このサイトは 2 色」と書くと取りこぼす。**新規実装でカテゴリを増やすなら、この 2 色も含めて 4 色のバッジ体系として扱う。**

### Sub Media（丹青ノオト）

- `--tanseinote_base` (`#00346B`): 自社メディア「丹青ノオト」の基調色。**トップで文字 1 要素**（`丹青社の今を伝えるウェブメディア`）
- `--tanseinote_key` (`#db7007`): 同キーカラー。**実測した 2 ページでは可視 0 要素**

> **`--tanseinote_key` は宣言だけで、この 2 ページには出てこない。** 別ドメインのメディア側で使われるトークン。**コーポレート画面に持ち込まないこと。**

### Neutral（ニュートラル）

- **Text Primary** (`--base_text` / `--black` = `#333333`): 本文・見出し。**トップ 159 要素 / 会社案内 88 要素**。**純黒は使わない**
- **Text Secondary** (`--gray` = `#666666`): 実績カードの説明文、サブナビ（トップ 91 要素 / 会社案内 47 要素）。**面としても 64 要素**（ドロップダウンの背景）
- **Text on Dark** (`--white` = `#ffffff`): 面・写真の上（トップ 83 要素 / 会社案内 67 要素）
- **Text Muted** (`--lightgray` = `#999999`): 日付・補助
- **Surface** (`--bg` = `#F7F7F7`): セクションの地色。**会社案内はページ全体がこれ**
- **Surface Hover** (`--bgHover` = `#F0F0F0`): カードのホバー面
- **Surface Gray** (`#EBEBEB`): タブの非選択（面 3 要素）
- **Border** (`--border` = `#cccccc`) / **Line** (`--line` = `#dddddd`): 枠と罫線を 2 段で持つ
- **Background**: **ページによって違う**
  - トップ: `#ffffff`（`pageBackground.resolved` / 根拠 `viewportTopBySample (6/12)`）
  - **会社案内: `#F7F7F7`**（`--bg`。根拠 `viewportTopBySample (3/7)`）

> **下層ページの地色は白ではなく `#F7F7F7`。** トップだけ見て白と決めないこと。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一の和文）**: **Noto Sans JP**（Google Fonts 配信）
- **`loaded` なのは 400 / 500 / 700 の 3 本**（各 43 サブセット）
- **ただし和文で実際に使うのは 400 と 500 の 2 段だけ。** 実測の 600 / 700 はすべて欧文（Roboto）の要素
- フォールバックは **`sans-serif` のみ**。游ゴシック・ヒラギノを書き並べていない＝**Web フォント前提の設計**

### 3.2 欧文フォント

- **Roboto**（Google Fonts 配信）。`loaded` は **400 / 500 / 600 / 700 の 4 本**
- 用途は英字の見出しとラベルだけ: `PICK UP` `NEWS` `VIEW MORE` `Our Vision` `Our Works` `Tansei Media` `About` `Contact`
- 実測 トップ 10 要素 / 会社案内 3 要素。**数字（日付・年号）は Roboto ではなく Noto Sans JP 側で組まれている**

> **和文 3 本・欧文 4 本で、ウェイトの段数が違う。** 和文に 600 を当てると Noto Sans JP には 600 が無いため 700 に丸められる。**和文は 400 / 500 だけを使うこと。**

### 3.3 font-family 指定

```css
/* 和文・既定 */
font-family: "Noto Sans JP", sans-serif;

/* 欧文の見出し・ラベル */
font-family: Roboto, sans-serif;
```

**フォールバックの考え方**:
- **OS フォントを書き並べない割り切り。** `sans-serif` 1 つだけ。Web フォントが落ちたら OS 既定のゴシックで出る
- 游ゴシックの Windows Medium 問題への対策は**していない**（そもそも游ゴシックを指定していないので不要）
- **和文と欧文でファミリーを切り替える方式**。1 つのスタックに混ぜていない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Hero Heading** | Noto Sans JP | **48px** | **500** | **1.50** (72px) | **3px**（0.0625em） | **`<ruby>` 入り。「人と社会に丹青（いろどり）を。」** |
| **Section Heading (JP)** | Noto Sans JP | **64px** | **500** | **1.20** (76.8px) | normal | `丹青社の想い` `実績紹介` `メディア` |
| **Section Heading (EN)** | **Roboto** | 40px | **600** | 1.00 | 1.6px | `PICK UP` `NEWS` |
| Sub Heading L | Noto Sans JP | 32px | 500 | **1.60** (51.2px) | 2px（0.0625em） | `最新の実績` |
| Sub Heading M | Noto Sans JP | 24px | 500 | **2.00** (48px) | normal | `その他運営メディア` |
| Nav Heading | Noto Sans JP | 20px | 500 | 1.60 | **1.4px**（0.07em） | `丹青社の想い` `事業紹介`（グローバルナビ） |
| Card Title | Noto Sans JP | 18px | 400 / 500 | 1.60 | normal | 実績カードの見出し |
| **Body** | Noto Sans JP | **16px** | 400 | **2.00** (32px) | normal | **既定。`body` に直接** |
| Body Tight | Noto Sans JP | 16px | 500 | 1.60 | normal | カード内の本文 |
| **UI Label** | Noto Sans JP | **14px** | 400 / 500 | **1.60** | normal | **最多（トップ 136 要素）**。ナビ・ボタン |
| List Item | Noto Sans JP | 15px | 400 | 1.60 | normal | サブナビ |
| Date / Meta | Noto Sans JP | 14px | 400 | 1.80 | **0.96px**（0.06em） | 日付・カテゴリ |
| Footer Link | Noto Sans JP | 13px | 500 | 2.00 | normal | `採用情報` `お問い合わせ` |
| **Caption** | Noto Sans JP | **12px** | 400 | 2.00 (24px) | normal | **73 要素**。プライバシーポリシー等 |
| Button Label (EN) | Roboto | — | 400 | — | **0.64px** | `VIEW MORE` |

> **`html { font-size: 10px }`。** `rem` は 10 倍で読む（`1.4rem` = 14px、`clamp(2.8rem, …, 3.6rem)` = 28px〜36px）。

### 3.5 行間・字間

**行間は 2 段が主役。**

| 行間 | 実測 | 用途 |
|------|------|------|
| **1.60** | **トップ 216 要素 / 会社案内 149 要素（最多）** | カード・UI・見出し |
| **2.00** | 84 / 43 要素 | **`body` の既定**。本文・キャプション |
| 1.80 | 24 / 2 要素 | 実績カードの説明文 |
| 1.50 | 11 / 2 要素 | ヒーロー見出し（48px / 72px） |
| 1.20 | 6 / 1 要素 | 64px の大見出し |
| 1.00 | 17 / 5 要素 | 1 行ラベル |

> **`body { line-height: 2 }` を既定にし、密度の要る場所で 1.6 に締める。** 逆ではない。

**字間はほぼ触らない。**

- **`normal` が既定**: トップ **358 要素中 311 要素**、会社案内 **203 要素中 187 要素**
- 例外は見出しとメタだけ。**単位が em と px で混在している**（CSS 全文の宣言も `.07em` `.04em` `.08em` `.02em` と `2px` `3px` `.6px` `6.5px` `5px` `1.6px` `13px` が混じる）

| 実測値 | サイズ | em 換算 | 用途 |
|--------|--------|---------|------|
| 3px | 48px | 0.0625em | ヒーロー見出し |
| 2px | 32px | 0.0625em | 32px 見出し |
| 1.4px | 20px | 0.07em | グローバルナビの見出し |
| 0.96px | 16px | 0.06em | 日付・カテゴリ（24 要素） |
| 1.6px | 40px | 0.04em | `PICK UP`（Roboto） |
| 0.64px | — | — | `VIEW MORE`（Roboto） |

**ガイドライン**:
- **日本語本文に `letter-spacing` を足さない**（`normal` が 86%）
- **見出しに足すなら 0.0625em に揃える。** 48px と 32px で厳密に一致している唯一の段
- **px と em の混在を新規実装に引き継がない。** em で書けば流体タイポ（3.8 / 8 章）に追従する

### 3.6 禁則処理・改行ルール

```css
body {
  word-break: break-word;
}
```

- **実サイトは `body` に `word-break: break-word`**（1440 / 1200 / 834 / 375px の 4 幅すべてで実測）
- CSS 全文には `break-all` / `normal !important` / `break-word` / `normal` の 4 種があり、**場所によって上書きしている**
- **`break-all` を全体に当てない。** 実績の案件名（`YKK AP はじまりの工場が持つ歴史的価値を活…`）が途中で割れる
- `word-break: auto-phrase` は使っていない

### 3.7 OpenType 機能

**トップと会社案内では `font-feature-settings` が 1 要素も効いていない**（実測 0 要素）。

- CSS 全文には `palt` が **7 回**宣言されているが、**セレクタがすべて `.main--partner` / `.main--partnerECommerce`（協力会社向けページ）に限定**されている:

  ```css
  .main--partner .partnerBanner__textArea .module-text { font-feature-settings: "palt"; letter-spacing: .08em }
  .main--partnerECommerce .partnerECommerceContents .module-text { letter-spacing: .08em; font-feature-settings: "palt" }
  ```

- グローバルナビには **`font-feature-settings: normal` で明示的に打ち消している**箇所もある
- **コーポレート画面（トップ・会社案内・事業紹介）に `palt` を足さないこと。** このサイトで `palt` は「協力会社向けページの語彙」であって、全体の既定ではない
- `palt` を使う場合は**必ず `letter-spacing: .08em` とセット**にする（実サイトの 2 箇所ともそうなっている）

### 3.8 縦書き

**使っていない**（実測 `writing-mode: vertical-*` の可視要素 0 件）。

- CSS 全文には `writing-mode` が 23 回出てくるが、**該当する要素がこの 2 ページに無い**
- **縦組みを実装しないこと**

---

## 4. Component Stylings

**`border-radius` は「円」か「ピル」の二択。中間が無い。**

実測: `100%` が **76 要素**（トップ）/ 44 要素（会社案内）、`100px` が **4 要素**。**4px や 8px の角丸は 1 要素も無い。**

### Buttons

**Text Link（既定の遷移）**
- Background: `transparent`
- Text: `#333333`
- Border: なし
- Padding: **`0px 0px 1px`**（下線分の 1px）
- Font: 16px / weight 400 / line-height 2.00
- 例: `丹青社の想い` `事業紹介` `会社情報` `IR情報`

**Circle Button（矢印・ナビ）**
- Border Radius: **`100%`**
- Background: `#1C4C6F` または `#ffffff`
- **このサイトで最も多い形（76 要素）**

**Search**
- Text: `#ffffff` / Background: `#1C4C6F`
- Font: 16px / weight 500

### Badges / Chips

**Category Badge（ピル）**
- Border Radius: **`100px`**
- Padding: **`3px 8px`**
- Text: `#ffffff`
- Font: 12px / weight 400
- Background: 用途で色を変える
  - `視察レポート` `対談・インタビュー` → **`#376895`**
  - `事例紹介` → **`#555879`**
  - `お知らせ` → **`#A7153C`**

### Inputs

- Border: `1px solid #cccccc`（`--border`）
- Border Radius: `0px`
- Background: `#ffffff`
- Font Size: 16px / line-height 2.00

### Cards（実績・ニュース）

- Background: `#ffffff`（セクション地は `#F7F7F7`）
- Border: なし。**区切りは `--line` (`#dddddd`) の罫線**
- Border Radius: `0px`
- Shadow: **なし**
- 中身: 写真 → ピルバッジ（12px）→ 見出し 18px / lh 1.60 → 説明 14px / lh 1.80 / `#666666`

### Ruby（ルビ）

```html
<h1 class="title jsText">
  空間から未来を描き、<br>
  人と社会に<ruby>丹青<rt>いろどり</rt></ruby>を。
</h1>
```

- ヒーロー見出し 48px / weight 500 / line-height 1.50 / letter-spacing 3px の中に置く
- **`line-height: 1.5` はルビの分の逃げを兼ねている。** ルビを入れる行で 1.2 まで詰めないこと

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 3px | バッジ内側の上下 |
| S | 8px | バッジ内側の左右・カラム間の狭い gap |
| M | **12px / 20px** | 要素間 |
| L | **24px** | **カラム間の既定**（`gap: 0px 24px` が 16 箇所で最多） |
| XL | 25px | 行間の gap |

**実測 gap**: `0px 24px`（16）> `0px 8px`（8）> `25px 0px`（5）> `24px`（4）> `20px 0px` / `20px` / `12px 0px`（各 2）

### Container

- **Max Width: 1200px**（実測 7 要素）／ **1440px**（6 要素、全幅セクション）
- 本文カラム: **680px**
- **1200px はブレークポイントでもある**（`(min-width: 769px) and (max-width: 1200px)` が 146 回）

### Grid

- トップ: ヒーロー（斜めに切った写真＋赤・青の面）→ PICK UP → 実績 3 カラム → NEWS 2 カラム → メディア
- 会社案内: `#F7F7F7` の地に、64px の大見出し（lh 1.20）＋ 16px / lh 2.00 の本文を縦に積む

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。実測で影のある可視要素は 0 件** |

> **影を使わないサイト。** CSS 全文には `box-shadow` が 42 回、`text-shadow` が 6 回宣言されているが、**実測した 2 ページの可視要素では 1 つも使われていない**。`filter: drop-shadow()` は CSS 全文で 0 回。
>
> 奥行きは **(a) 斜めに切った面（`clip-path` 的な構成）、(b) 写真、(c) `--line` (`#dddddd`) の罫線、(d) `--bg` (`#F7F7F7`) と白の面の差**で作る。**`box-shadow` を足さないこと。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`--red: #A7153C` と `--blue: #1C4C6F` を CSS 変数として持つ。** 社名の由来なので名前も `--red` / `--blue` のままでよい
- **赤は文字とアクセント、青は面**に使い分ける
- **和文は Noto Sans JP の 400 / 500 の 2 段だけ**
- **欧文の見出し・ラベルは Roboto に切り替える**（`PICK UP` `VIEW MORE` `About`）
- **`body { line-height: 2 }` を既定にし、カードなど密度の要る場所で 1.6 に締める**
- **`letter-spacing: normal` を既定にする**（86%）。見出しに足すなら **0.0625em**
- **`border-radius` は `100%`（円）か `100px`（ピル）の二択**。中間を作らない
- カテゴリバッジは **`3px 8px` / `100px` / 12px / 白文字**
- **ルビは `<ruby><rt>` で実装する**。ルビを置く行の `line-height` は 1.5 を確保する
- 本文色は **`#333333`**、補助は **`#666666`**
- **下層ページの地色は `#F7F7F7`**

### Don't（禁止）

- **和文に `font-weight: 600` を当てない。** Noto Sans JP に 600 は無く 700 に丸められる。600 は Roboto 専用
- **コーポレート画面に `font-feature-settings: "palt"` を足さない**（実測 0 要素。`palt` は協力会社向けページ限定の語彙）
- **`palt` を使うときに `letter-spacing: .08em` を省かない**
- **`border-radius: 4px` / `8px` を作らない**
- **`box-shadow` / `text-shadow` を足さない**（可視 0 件）
- **縦組み（`writing-mode`）を実装しない**（実測 0 件）
- **`word-break: break-all` を本文に当てない**（案件名が途中で割れる）
- **`--tanseinote_key` (`#db7007`) をコーポレート画面に持ち込まない**（別メディア用。可視 0 要素）
- 本文色を純黒 `#000000` にしない（実サイトは `#333333`）
- **字間を px で書かない。** 流体タイポに追従しなくなる（8 章）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Query | 実測 |
|------|-------|------|
| **Desktop** | `print, screen and (min-width: 769px)` | **CSS 全文で 858 回（最多）** |
| **Mobile** | `screen and (max-width: 768px)` | **755 回** |
| **Tablet（流体帯）** | `print, screen and (min-width: 769px) and (max-width: 1200px)` | **146 回** |
| Small | `screen and (max-width: 640px)` | 12 回 |

- **769px と 1200px の 2 本で 3 面に分ける。** `print` を毎回セットで書いているのが特徴（印刷時も PC レイアウト）

### フォントサイズの調整 — `clamp()` の流体タイポ

**`html` は 10px 固定。動くのは `body` 以下。**

| Viewport | `html` | `body` font-size | `body` line-height | 比率 |
|----------|--------|------------------|--------------------|------|
| 1440px | 10px | **16px** | 32px | **2.00** |
| 1200px | 10px | **16px** | 32px | 2.00 |
| 1000px | 10px | 15.537px | 31.074px | 2.00 |
| 900px | 10px | 15.306px | 30.611px | 2.00 |
| 834px | 10px | **15.1528px** | 30.306px | 2.00 |
| **768px** | 10px | **15px** | **27px** | **1.80** |
| 375px | 10px | 15px | 27px | 1.80 |

- **768px → 1200px の間を線形補間している。** 傾きは厳密に **1px / 432px**（= 1200 − 768）。834px の実測 15.1528px は `15 + (834−768)/432 = 15.15278` と一致する
- **768px を下回ると流体は止まり、15px / line-height 1.80 に固定される。** ここで行間も 2.00 → 1.80 に落ちる
- CSS では `clamp()` で書かれている。例:

  ```css
  /* 12px @768px → 14px @1200px */
  font-size: clamp(1.2rem, .8444444444rem + .462962963vw, 1.4rem);

  /* 28px @768px → 36px @1200px */
  font-size: clamp(2.8rem, 1.3777777778rem + 1.8518518519vw, 3.6rem);
  ```

  `.462962963vw × 432px = 2px`、`1.8518518519vw × 432px = 8px`。**すべての clamp が 768〜1200px の窓で設計されている**

- **`letter-spacing` と `line-height` を px で書き写すと、この帯域で比率が崩れる。** em と無単位比率で書くこと

### タッチターゲット

- 円ボタン（`100%`）は 44px 前後を確保している
- **カテゴリバッジ（`3px 8px` / 12px）は約 22px 高で 44px を大きく下回る。** ただしこれは装飾ラベルでタップ対象ではない
- **テキストリンク（`padding: 0 0 1px`）はタップ領域が文字高そのもの。** モバイルでは上下に余白を足すこと

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Red (丹):      #A7153C   /* --red  文字・アクセント */
Blue (青):     #1C4C6F   /* --blue 面 */
Badge Blue:    #376895   /* カテゴリ（変数化されていない） */
Badge Purple:  #555879   /* カテゴリ（変数化されていない） */
Text Color:    #333333   /* --base_text */
Text Sub:      #666666   /* --gray */
Muted:         #999999   /* --lightgray */
Surface:       #F7F7F7   /* --bg  下層ページの地色 */
Border/Line:   #cccccc / #dddddd
Background:    #ffffff（トップ） / #F7F7F7（下層）
Font (JP): "Noto Sans JP", sans-serif   /* 400 / 500 のみ */
Font (EN): Roboto, sans-serif           /* 400 / 500 / 600 / 700 */
html font-size: 10px
Body Size:     16px（≥1200px） / 15px→16px 流体（768–1200px） / 15px（<768px）
Line Height:   2.00（body 既定・SP は 1.80） / 1.60（カード・UI） / 1.20（64px 見出し）
Letter Spacing: normal（既定） / 0.0625em（見出し）
Border Radius: 100%（円） または 100px（ピル）のみ
Box Shadow:    none
Container:     1200px / 1440px（全幅） / 680px（本文）
Gap:           24px
Breakpoints:   769px / 1200px
```

### プロンプト例

```
丹青社のデザインシステムに従って、実績一覧ページを作成してください。
- CSS 変数に --red: #A7153C と --blue: #1C4C6F を定義する（社名「丹青」の由来）
- 赤は文字とアクセント、青は面に使う
- 和文は "Noto Sans JP", sans-serif で weight は 400 と 500 のみ（600 は使わない）
- 英字の見出し・ラベル（PICK UP / VIEW MORE）だけ Roboto に切り替える
- html は font-size: 10px、body は clamp(1.5rem, …, 1.6rem) で 768px→1200px を線形補間する
- body の line-height は 2.0、768px 未満では 1.8 に落とす
- カードの line-height は 1.6、64px の大見出しは 1.2
- letter-spacing は normal を既定にし、見出しだけ 0.0625em
- カテゴリバッジは border-radius: 100px / padding: 3px 8px / 12px / 白文字
  背景は 視察レポート=#376895、事例紹介=#555879、お知らせ=#A7153C
- 矢印・ナビのボタンは border-radius: 100%
- 4px や 8px の角丸は作らない
- box-shadow は使わない。区切りは #dddddd の罫線と #F7F7F7 の面で作る
- font-feature-settings: "palt" は使わない
- ヒーロー見出しにルビを入れる場合は <ruby>丹青<rt>いろどり</rt></ruby> とし、line-height は 1.5 を確保する
- コンテナは 1200px、カラム間の gap は 24px
- 下層ページの地色は #F7F7F7
```
