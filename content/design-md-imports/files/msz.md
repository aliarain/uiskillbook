# DESIGN.md — みすず書房（MISUZU SHOBO）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-04 / 対象: `https://www.msz.co.jp/`, `/book/genre/philosophy/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 茶色（`#734b28`）と白だけで組む人文書の版元。トップは本棚の写真と游明朝の見出しで「読み物」を、書籍一覧は游ゴシック／メイリオの 12px と行間 1.10 で「目録」を見せる。**同じサイトの中に読み物と目録の2つの組版がある**
- **密度**: トップは疎（可視 85 要素）、書籍一覧は密（可視 312 要素のうち **160 要素が行間 1.10**）
- **キーワード**: 茶、游明朝、Web フォント 0 本、行間 1.10 の目録、palt

**このサイトの核心は5つある。**

1. **Web フォントを 1 本も読み込まない。** `@font-face` は **アイコンフォント `icomoon`（data URI）の 1 件だけ**で、**フォントファイルのリクエストは実測 0 件**。和文はすべて **OS のローカル書体**（游ゴシック・游明朝・メイリオ）で組んでいる
2. **ローカル書体を3つのスタックで使い分ける。** ①游ゴシック先頭（ナビ・UI）、②**メイリオ先頭**（書籍一覧の本文・**下層で 170 / 312 要素**）、③游明朝（見出し・特集）。**メイリオを先頭に置くスタックを明示的に持っているのが特徴**
3. **行間が「密」と「疎」で二重化している。** 書籍一覧は **1.10（160 要素）**、記事の説明は **1.88（24 要素 / 15 要素）**。`body` の既定は **1.875（16px / 30px）**で、**目録だけ 1.10 に落としている**
4. **`html` の font-size が 992px を境に 16px → 13px に落ちる。** 1440px / 1200px では 16px、**834px / 375px では 13px**。`rem` 指定が全部 0.8125 倍になるため、**px 換算を 16 基準で固定してはいけない**
5. **CSS Custom Properties 35 個のうち、意味を持つのは 6 個だけ。** 残りは **Bootstrap 4 の既定変数**（`--blue: #007bff` `--indigo` `--purple` `--breakpoint-*` 等）がそのまま残っている。**`--primary: #734b28` `--sub: #b99d67` `--accent: #09488f` `--dark: #231815` `--light3: #f5f1e8` `--ebook: #17a2b8` が自社の値**

**`font-feature-settings: "palt"` は トップ 28 要素 / 下層 23 要素に効いている**（CSS 全文の `palt` 宣言は 3 回）。**縦組みも 1 要素だけ実在する**（下記 3.8）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 変数 | 実測 |
|------|--------|------|------|
| **みすず茶** | **`#734b28`** | `--primary` | **文字色 3 要素（トップ）/ 27 要素（下層）**、面 1 要素（フッターの帯）。リンク・ジャンル名・`詳細はこちら` |
| **Brown Light** | **`#8e6746`** | — | **面として 5–6 要素**。右サイドの縦ナビ（`近刊` `復刊` `電子書籍`…）の面。**`#734b28` より明るい茶** |
| Gold | `#b99d67` | `--sub` | 右サイドナビ全体の下敷き **1 要素** |
| Paper | `#f5f1e8` | `--light3` | **トップの「この一冊」セクションの地**。`linear-gradient(0deg, #f5f1e8 62%, #ffffff 38%)` で下 62% だけ敷く |
| Accent Blue | `#09488f` | `--accent` | リンクの強調（宣言あり・計測した 2 ページでは可視 0 要素） |

> **茶が 2 つある。** `#734b28`（文字・帯）と `#8e6746`（右サイドナビの面）。**新規実装では文字＝`#734b28`、面＝`#8e6746` として使い分ける。**

### Category（記事カテゴリのラベル色）

| 色 | 実測 | 用途 |
|----|------|------|
| `#4876d0` | **3 要素** | `イベント` |
| `#dd6d5e` | 1 要素 | `お知らせ` |
| `#00904b` | 2 要素 | `話題の本` |
| `#17a2b8` | `--ebook` | 電子書籍の表示 |

> いずれも **12px・白文字・`border-radius: 0`・1px の白枠**という同じ形で、**色だけでカテゴリを分ける**。

### Neutral（ニュートラル）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Text Primary** | **`#000000`** | **可視 28 要素（トップ）/ 100 要素（下層）**。**このサイトは本文に純黒を使う** |
| Text UI | `#212529` | ナビ **6 要素**（Bootstrap の `--gray-dark: #343a40` ではなく `body` の既定色） |
| **Text Muted** | **`#909090`** | **可視 8 要素（トップ）/ 154 要素（下層）**。**書籍一覧の著者名・価格・ISBN はすべてこの色**。変数 `--gray` |
| Text Sub | `#5c5c5c` | 補足（日付の下の説明、8 要素）。ページ番号の面 |
| Text on Dark | `#ffffff` | 茶面・カテゴリラベルの上（32 要素 / 25 要素） |
| Surface | `#f4f4f4` | **ニュース行の面 16 要素（トップ）/ 書影の下敷き 40 要素（下層）**。変数 `--light` |
| Border | `#ececec` | 区切り線（`--light2`） |
| Dark | `#231815` | `--dark`。**墨（真っ黒ではない黒）**。宣言あり |
| **Background** | **`#ffffff`** | ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`） |

### Bootstrap の残骸（使わないこと）

`--blue: #007bff` / `--indigo: #6610f2` / `--purple: #6f42c1` / `--pink: #e83e8c` / `--orange: #fd7e14` / `--yellow: #ffc107` / `--green: #28a745` / `--teal: #20c997` / `--cyan: #17a2b8` / `--info: #4876d0` / `--success: #28a745` / `--warning: #ffc107` / `--danger: #dd6d5e`

> **Bootstrap 4 の既定変数がそのまま残っている。** このうち実際に使われているのは `--info`（`#4876d0` ＝ `イベント` ラベル）と `--danger`（`#dd6d5e` ＝ `お知らせ` ラベル）だけで、**他は 1 要素も塗っていない**。`#007bff` 等を「このサイトの色」として採用しないこと。

---

## 3. Typography Rules

### 3.1 和文フォント

**Web フォントは使わない。** すべて OS のローカル書体。

- **ゴシック体（UI・ナビ）**: **游ゴシック**（`Yu Gothic` / `YuGothic`）→ ヒラギノ角ゴ ProN → ヒラギノ Sans → **メイリオ**
- **ゴシック体（書籍一覧の本文）**: **メイリオ（Meiryo）を先頭に置く別スタック**。游ゴシックは2番目
- **明朝体（見出し・特集・縦組み）**: **游明朝**（`Yu Mincho` / `YuMincho`）→ ヒラギノ明朝 ProN → ヒラギノ明朝 Pro

### 3.2 欧文フォント

- **専用の欧文フォントを持たない。** 数字・アルファベット（日付 `2026.10.02`、ISBN、`NEWS`）も**和文書体の欧文グリフ**で出す
- `--font-family-monospace`（`SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`）が Bootstrap 既定として宣言されているが、**可視 0 要素**

### 3.3 font-family 指定

```css
/* ① UI・ナビ・既定（Bootstrap の --font-family-sans-serif を上書き） */
font-family: "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Sans",
             Meiryo, sans-serif;

/* ② 書籍一覧・書誌情報（メイリオ先頭の別スタック） */
font-family: Meiryo, "Yu Gothic", YuGothic, sans-serif;

/* ③ 見出し・特集・縦組み */
font-family: "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "Hiragino Mincho Pro",
             serif;

/* ④ 明朝の短縮版（WEBみすずの記事タイトル等） */
font-family: "Yu Mincho", YuMincho, serif;
```

**フォールバックの考え方**:
- **和文優先。** 欧文フォントを先頭に置かず、游ゴシック／游明朝の欧文グリフで統一する
- **②のメイリオ先頭は意図的。** 書籍一覧は 12px という小さい級数で著者名・価格・ISBN を並べるため、**ヒンティングが効いて小さい字が潰れにくいメイリオを優先している**（游ゴシックは小級数で細くなる）。**この使い分けを「游ゴシックに統一」と直さないこと**
- **游ゴシックの Windows Medium 問題への対策は入っていない**（`"Yu Gothic Medium"` 等をチェーンに持たない）。**Windows では Light 寄りに出る**ことを前提に、太さが要る箇所は `font-weight: 600` を当てている

### 3.4 文字サイズ・ウェイト階層

**※ 992px 未満ではルートが 13px になり、`rem` 由来の値はすべて 0.8125 倍になる（下記 8 章）。以下は 1440px 時の実測値。**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Display** | 游ゴシック | **52px** | **300** | 1.20 | **-0.52px** (-0.01em) | `最新 NEWS` `WEBみすず`。**唯一の 300。細く大きく、わずかに詰める** |
| Section Heading | 游ゴシック | 40px | 400 | 1.20 | **-0.4px** | `新刊紹介 / 話題の本 / コラム` |
| **Page Heading** | **游明朝** | **30px** | **600** | 1.20 | normal | 下層の `哲学・思想・宗教` |
| **Catch Copy** | **游明朝** | **24px** | **600** | **1.20** | **1.68px（0.07em）** | `トランジション（転換）という神話を…` **明朝＋字空けの惹句** |
| Nav Heading | 游明朝 | 24px | 600 | 1.20 | **4.8px（0.2em）** | 下層の `ジャンルで探す`。**字間が最大** |
| Article Title | 游明朝 | 22px | 400 | 1.60 | normal | `新着記事` |
| Vertical Label | 游明朝 | 19.2px | 300 | 1.20 | 0.192px (0.01em) | **縦組みの `最新`**（下記 3.8） |
| CTA / Footer | 游ゴシック | 18px | 400 | 1.10 | **0.45px（0.025em）** | `詳細はこちら` `ニュースレター登録` |
| **Body** | 游ゴシック | **16px** | 400 | **1.875**（30px） | normal | **`body` の既定。読み物の本文** |
| Book Title | メイリオ | 16px | **600** | **1.60** | normal | 書籍一覧の書名 |
| News Title | メイリオ | 16px | 600 | 1.60 | normal | ニュース見出し |
| Nav Label | 游ゴシック | **14px** | 400 | **1.00** | **-0.7px（-0.05em）** | `WEBみすず` `NEWS` `特集`。**グロナビだけ詰める** |
| Side Nav | 游ゴシック | 14px | **700** | 1.10 | normal | 右サイドの `近刊` `復刊` |
| Date | 游ゴシック | **13.008px** | 400 | 1.40 | **1.3008px（0.1em）** | `2026.10.02`。**日付だけ 0.1em 空ける** |
| Breadcrumb | 游ゴシック | 13.008px | 400 | 1.10 | normal | 下層のパンくず（74 要素） |
| **Spec / Author** | **メイリオ** | **12px** | 400 | **1.10** | normal | **著者・訳者・価格・ISBN。下層で 151 要素と最多** |
| Caption | 游ゴシック | 12px | 400 | **1.88** | normal | `9月の新刊` 等のラベル |
| Badge | メイリオ | 12px | 400 | 1.10 | normal | `イベント` `お知らせ` `話題の本` |

> **`13.008px` は端数ではなくライブラリ由来。** Bootstrap の `.small` 相当（16px × 0.813）。**992px 未満ではルートが 13px になるので 10.57px まで落ちる。**

### 3.5 行間・字間

#### 行間 — 読み物 1.875 / 目録 1.10 の二重構造

| 値 | 件数（トップ / 下層） | 用途 |
|----|---------------------|------|
| **1.875** | `body` の既定（16px / 30px） | **読み物の本文** |
| **1.88** | 24 / 15 | **記事の説明文・ラベル** |
| **1.10** | 19 / **160** | **書籍一覧（著者・価格・ISBN）。下層で最多** |
| 1.40 | 18 / 71 | 日付・書誌の補足 |
| 1.60 | 8 / 20 | 書名・ニュース見出し |
| 1.20 | 10 / 2 | 大きな見出し |
| 1.00 | 6 / 36 | グロナビ |

> **`line-height: 1.10` は日本語本文としては極端に詰まっている**が、このサイトでは**「読む文」ではなく「引く情報」（著者名・価格・ISBN）にだけ**当てている。**本文に 1.10 を使わない。**

#### 字間 — `normal` が既定、要所だけ正負に振る

| 値 | em 換算 | 件数（トップ / 下層） | 用途 |
|----|---------|---------------------|------|
| **`normal`** | — | **56 / 303** | **既定。本文・書籍一覧** |
| **-0.7px** | **-0.05em** | 6 / 6 | **グローバルナビ（14px）だけ詰める** |
| -0.52px | -0.01em | 2 / — | 52px の大見出し |
| -0.4px | -0.01em | 1 / — | 40px の見出し |
| 0.45px | 0.025em | 2 / 1 | `詳細はこちら`（18px） |
| 0.35px | 0.025em | 2 / 1 | 14px のリンク |
| **1.3008px** | **0.1em** | 8 / — | **日付（13.008px）** |
| **1.68px** | **0.07em** | 5 / — | **明朝の惹句（24px）** |
| **4.8px** | **0.2em** | — / 1 | **`ジャンルで探す`（24px）。最大** |
| 0.8px | 0.05em | 2 / — | `みすず書房のオンラインマガジン` |

**ガイドライン**:
- **本文に `letter-spacing` を足さない。** 既定は `normal`
- **グローバルナビだけ `-0.05em` と詰める**（横幅を稼ぐため）
- **日付・明朝の惹句・ジャンル見出しは逆に空ける**（0.07〜0.2em）。**明朝＋字空けがこのサイトの「読ませる」合図**

### 3.6 禁則処理・改行ルール

```css
/* 実測: body の既定値 */
word-break: normal;
overflow-wrap: normal;
line-break: auto;
```

- `line-break` の指定は無し。`word-break: auto-phrase` も**不使用**（CSS 全文で 0 回）
- CSS 全文の `word-break` 宣言は **5 回**（長い書名・URL 用の個別上書き）

### 3.7 OpenType 機能

```css
font-feature-settings: "palt" 1;   /* 見出し・ラベルに適用（トップ 28 / 下層 23 要素） */
```

- **`palt` を使う。** ただし `body` 全体ではなく **見出し・ラベル・惹句だけ**（CSS 全文の宣言は 3 回）
- **書籍一覧の本文（メイリオ 12px）には効いていない**。小級数の目録は**ベタ組みのまま**

### 3.8 縦書き

```css
/* トップの「この一冊」ラベル */
writing-mode: vertical-rl;
font-family: "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "Hiragino Mincho Pro", serif;
font-size: 19.2px;
font-weight: 300;
line-height: 1.20;        /* 23.04px */
letter-spacing: 0.192px;  /* 0.01em */
```

- **実測 1 要素**（`<em>` タグ、テキストは `最新`）。**画像ではなく CSS で組まれた本物の縦組み**
- 書体は**游明朝・weight 300**。**縦組みは明朝で細く**という扱い
- 下層ページには縦組みは無い（0 件）

---

## 4. Component Stylings

### Buttons

**Primary（茶の面）**
- Background: `#8e6746`
- Text: `#ffffff`
- Border Radius: **0px**（右サイドナビ）／ **7px**（下層のタグ）
- Font Size: 14px / Weight **700** / Line Height 1.10
- Letter Spacing: normal

**Secondary（白地・茶の枠・丸み）**
- Background: `transparent`
- Text: `#734b28`
- Border: `1px solid #734b28`
- Border Radius: **28px**（`詳細はこちら`）／ **48px**（`ニュースレター登録`）
- Font Size: 14–18px / Weight 400 / **Font Family 游明朝**（14px 版）
- Letter Spacing: 0.35–0.45px

> **第2ボタンだけ明朝で組まれている**（`"Yu Mincho", YuMincho, serif`）。実サイトの特徴なので残す。

### Badges（カテゴリラベル）

- Background: `#4876d0`（イベント）／ `#dd6d5e`（お知らせ）／ `#00904b`（話題の本）
- Text: `#ffffff`
- **Border: `1px solid #f4f4f4`**（面と同じ地色の枠で、面から浮かせる）
- **Border Radius: `0px`**
- Font Size: 12px / Weight 400 / Font Family **メイリオ** / Line Height 1.10

### Cards（書影・ニュース行）

- Background: `#f4f4f4`
- Border Radius: **2px**（書影の下敷き 30 要素 / 20 要素）
- Shadow: **`rgba(0,0,0,0.2) 0 0 3.2px`**（書影 30 要素）／ **`rgba(0,0,0,0.16) 0 0 20px`**（大きい面 8 / 20 要素）

### Pagination

- Border Radius: **100%**（12 要素）
- Background: `#5c5c5c`（現在ページ）/ Text `#ffffff` / 14px / Line Height 1.25

### Link Underline（茶の半分下線）

```css
background: linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(115,75,40,0.4) 50%);
```

- **可視 19 要素（トップ）/ 17 要素（下層）**。ホバーで左から下線が伸びる演出の静止状態。**`border-bottom` ではなくグラデーションで作っている**

---

## 5. Layout Principles

### Container

- **Max Width: 1366px**（トップ 7 回・下層 4 回）
- 書籍一覧のカラム: **25%**（トップ 8 回・**下層 20 回**）＝ **4 カラムの書影グリッド**
- 記事カラム: 66.6667%（2/3）

### Grid

- 書籍一覧は **4 列（25%）**。Bootstrap のグリッドをそのまま使う
- `gap` の宣言は **0 件**（Bootstrap の `padding` ベースのガターで組んでいる）。**flex/grid の `gap` を使っていない**

### Spacing

- `calc(100% + 12.8px)` ＝ Bootstrap の `.row` の負マージン（ガター **12.8px**、片側 6.4px）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | 大半の要素 | — |
| **1** | **`rgba(0,0,0,0.2) 0 0 3.2px`** | **書影の縁** | **30 要素** |
| 2 | `rgba(0,0,0,0.16) 0 0 20px` | 特集パネル・書影の大サイズ | 8 / **20 要素** |
| 3 | `rgba(0,0,0,0.2) 0 0 20px` | 最前面の面 | 1 要素 |
| — | `rgba(255,255,255,0.15) 0 1px 0 inset, rgba(0,0,0,0.075) 0 1px 1px` | `ニュースレター登録` ボタン | 1 要素（**Bootstrap の既定**） |

> **影は「オフセット 0・ぼかしのみ」。** 本の表紙を紙として見せるための縁取りで、UI の浮き上がりには使っていない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **Web フォントを読み込まない。** 游ゴシック・游明朝・メイリオのローカル書体で組む
- **書籍一覧・書誌情報は `Meiryo, "Yu Gothic", YuGothic, sans-serif` の 12px**（小級数はメイリオ優先）
- **読み物の本文は 16px / line-height 1.875 / letter-spacing normal**
- **目録（著者・価格・ISBN）だけ line-height 1.10** に落とす
- **明朝＋字空け（0.07〜0.2em）は「読ませる」合図**として見出し・惹句に使う
- グローバルナビだけ `letter-spacing: -0.05em` と詰める
- リンクの下線は `linear-gradient(to left, transparent 50%, rgba(115,75,40,0.4) 50%)`
- 書影には `rgba(0,0,0,0.2) 0 0 3.2px` の縁

### Don't（禁止）

- **`line-height: 1.10` を読み物の本文に使わない**（目録専用）
- **Bootstrap の既定色（`#007bff` `#6610f2` `#6f42c1` …）を採用しない。** 使っているのは `#4876d0` と `#dd6d5e` だけ
- **Noto Sans JP / Noto Serif JP を足さない**（このサイトはローカル書体だけで完結している）
- **書籍一覧を游ゴシックに統一しない**（メイリオ先頭は意図的）
- `rem` の px 換算を 16px 基準で固定しない（**992px 未満でルートが 13px になる**）
- `gap` を前提にレイアウトを組まない（Bootstrap の padding ガター 12.8px）

---

## 8. Responsive Behavior

### Breakpoints（Bootstrap 4）

| Name | Width | 実測件数 |
|------|-------|---------|
| XS | ≤ 575.98px | 2 |
| SM | ≥ 576px / ≤ 767.98px | 16 / 2 |
| MD | ≥ 768px | 11 |
| **LG** | **≥ 992px** | **129（最多）** |
| LG 以下 | ≤ 991.98px | **59** |
| XL | ≥ 1200px / ≤ 1199.98px | 13 / 2 |
| — | ≤ 1200px | 17 |

### ルートが 992px を境に切り替わる（最重要）

| 幅 | `html` font-size | `body` font-size | `body` line-height |
|----|------------------|------------------|--------------------|
| 1440px | **16px** | 16px | 30px（1.875） |
| 1200px | **16px** | 16px | 30px（1.875） |
| 834px | **13px** | 13px | **24.375px**（1.875） |
| 375px | **13px** | 13px | **24.375px**（1.875） |

- **`html` 自体が 16px → 13px に切り替わる。** `rem` 由来の値はすべて **0.8125 倍**になる（`13.008px` → `10.57px`）
- **`line-height` は無単位（1.875）で宣言されているので比率は保たれる。** px に読み替えないこと
- 見出しも追従する: `h2` 24px（1440px）→ **19.077px**（834px）→ **17.7px**（375px）。`letter-spacing` は `0.07em` 宣言なので **1.68px → 1.335px → 1.239px** とサイズに比例して追従する

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #734b28（文字・帯）/ #8e6746（面）
Text Color: #000000 / 補助 #909090
Surface: #f4f4f4 / Paper #f5f1e8
Background: #ffffff
Font (UI):   "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
Font (目録): Meiryo, "Yu Gothic", YuGothic, sans-serif
Font (見出し): "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "Hiragino Mincho Pro", serif
Body: 16px / line-height 1.875 / letter-spacing normal
目録: 12px / line-height 1.10 / letter-spacing normal
Web フォント: 使わない（ローカル書体のみ）
Radius: 0px（ラベル）/ 2px（書影）/ 28px・48px（ボタン）
Container: 1366px / 書籍グリッド 25%（4列）
html font-size: 16px（≥992px）/ 13px（<992px）
```

### プロンプト例

```
みすず書房のデザインシステムに従って、書籍の一覧ページ（4列グリッド）を作成してください。
- Web フォントは読み込まない。すべてローカル書体で組む
- ページ見出し: "Yu Mincho", YuMincho, "Hiragino Mincho ProN", serif / 30px / weight 600
- 「ジャンルで探す」のような小見出し: 游明朝 24px / weight 600 / letter-spacing 0.2em
- 書名: Meiryo, "Yu Gothic", YuGothic, sans-serif / 16px / weight 600 / line-height 1.6 / 色 #000000
- 著者・訳者・価格・ISBN: メイリオ 12px / weight 400 / line-height 1.10 / 色 #909090
- 書影: 背景 #f4f4f4、角丸 2px、影 rgba(0,0,0,0.2) 0 0 3.2px
- ジャンルのタグ: 背景 #8e6746、白文字 14px / weight 400、角丸 7px
- ページネーション: 現在ページは背景 #5c5c5c の円（border-radius 100%）、白文字 14px
- リンクの下線: linear-gradient(to left, transparent 50%, rgba(115,75,40,0.4) 50%)
- グリッドは 25% の 4 列、コンテナ 1366px、ガターは padding 6.4px（gap は使わない）
- 992px 未満では html の font-size を 13px にする
- 本文に letter-spacing を足さない。palt は見出しにだけ当てる
```
