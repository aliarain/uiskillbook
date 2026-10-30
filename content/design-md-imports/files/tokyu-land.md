# DESIGN.md — 東急不動産（TOKYU LAND）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-30 / 対象: `https://www.tokyu-land.co.jp/`, `/company/about/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **緑 1 色と純黒の 2 色主義。** 角丸ゼロ、影ゼロ、面は白か淡緑。ヒーローは 1440×560px の写真を全幅で敷き、その上に緑の面を置いて見出しを載せる
- **密度**: 中。13px のリンクを詰めたナビと、16px / 行間 1.70 の本文が同居する
- **キーワード**: 東急グリーン `#0B8100`、純黒の本文、角丸ゼロ、6 書体を読んで 2 書体しか使わない

**このサイトの核心は 4 つある。**

1. **Web フォントを 6 ファミリー読み込んでいるのに、描画に使われているのは 2 つだけ。** `document.fonts` で `loaded` なのは **Noto Sans JP（400/500/700）・Noto Sans（400/500/700）・Inter（400/500/600）・Jost（600/700）・Noto Serif JP（400/600）・Train One（400）** の 6 種。**実測でトップに出るのは Noto Sans JP 210 要素と Inter 44 要素の 2 つだけ**で、Jost / Noto Sans / Noto Serif JP / Train One は**可視 0 要素**。**`loaded` は「使っている」証拠にならない**
2. **本文が純黒 `#000000`。** 実測 153 要素。`#333333` に逃げていない。日付だけ `#6E6E6E`
3. **游ゴシックの Windows 対策を `local()` だけの `@font-face` で書いている。**

   ```css
   @font-face { font-family: YuGothicM; src: local("Yu Gothic Medium") }
   ```

   ただし**スタックの先頭が Noto Sans JP で、それが実際に `loaded` している以上、この游ゴシックのチェーンは 1 度も出番が無い**（宣言だけが残っている）
4. **字間に設計が無い。** `letter-spacing: normal` が実測 254 要素中 201 要素。残りは **CSS 全文で 36 種類のバラバラな値**（`4px` `3px` `.5px` `1px` `2.6px` `2px` `1.2px` `1.5px` `.8px` `.7px` `1.4px` `1.1px` `-.3px` に加えて `.02em` `.007em` `.002em` `.05em` `-.06em` `.7em` `.025em` …）。**段になっていないので、真似るなら `normal` だけを引き継ぐ**

**`font-feature-settings` / `palt` / `writing-mode` / `<ruby>` はいずれも 0 件。** CSS Custom Properties は**自社トークン 0 個**（検出された 1 個は Swiper の `--swiper-theme-color`）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **東急グリーン** | **`#0B8100`** | **文字 47 要素・面 21 要素**（トップ）。リンク、セクション見出し、CTA の枠と面。**このサイトを定義する 1 色** |
| **Hero Green** | **`#2C9622`** | **ヒーローのラベル面 10 要素**（`01 CM` `02 SUSTAINABILITY` …）。`#0B8100` より明るい。写真の上に載せるため |

> **緑は 2 段。** `#0B8100` が基準、`#2C9622` は写真の上に置く面専用。**新規実装では `#0B8100` を既定にし、写真の上でコントラストが要るときだけ `#2C9622` を使う。**

### Gradient（面のグラデーション）

実測された 4 種。**すべて淡く、面の境目をぼかす用途**。

```css
/* トップ・セクション面 */
linear-gradient(120deg, rgba(243, 244, 241, 0.4), rgb(244, 245, 242));
linear-gradient(243.5deg, rgb(244, 245, 242), rgba(243, 244, 241, 0.5));
linear-gradient(315deg, rgb(237, 245, 230), rgba(237, 245, 229, 0.5));

/* 会社情報のサブヒーロー（div::after の疑似要素） */
linear-gradient(90deg, rgb(72, 166, 63) 36%, rgb(169, 203, 3));
```

> **下層ページの帯は `div::after.c-hero-sub` の疑似要素に塗られている。** `querySelectorAll("*")` の走査には出てこないので、**要素側だけ見て「帯に色が無い」と判断しないこと**。`#48A63F → #A9CB03` の緑〜黄緑のグラデーション。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・ナビ・見出し。**トップ 153 要素 / 会社情報 91 要素**。**このサイトは本文に純黒を使う**
- **Text on Dark** (`#ffffff`): 緑面・写真の上（トップ 37 要素 / 会社情報 10 要素）
- **Text Muted** (`#6E6E6E`): 日付（`2026.09.29` 等、9 要素）
- **Text Muted Light** (`#7F7F7F`): ヒーローの非選択タブ（`01 CM` `03 URBAN DEVELOPMENT`、8 要素）
- **Surface Green Pale** (`#EDF5E6`): 実績数値ブロックの面（3 要素）
- **Surface Warm** (`#F4F5F2`): セクションの面（2 要素）
- **Surface Gray** (`#F2F2F2`): 会社情報のナビ面
- **Surface Gray Light** (`#EDEDED`): 会社情報トップのタブ
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)`）

> **トップは `heroCover: true`（`img.c-hero__image` 1440×560px が画面上部を覆う）。** 抽出の `viewportTopByArea` は先頭に `#2C9622` を返すが、これはヒーローのラベル面であってページの地色ではない。**`html` / `body` ともに塗り指定が無く、コンテンツの地色は UA 既定の白**。会社情報ページの実測でも白だった。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一の和文）**: **Noto Sans JP**（Google Fonts 配信）。`loaded` は **400 / 500 / 700** の 3 本
- **Noto Serif JP（400 / 600）も `loaded` しているが、トップと会社情報では可視 0 要素。** 別ページ用
- フォールバックは **游ゴシック → YuGothicM → メイリオ**。ただし Noto Sans JP が実際に読み込まれるため**出番が無い**

### 3.2 欧文フォント

- **Inter**（400 / 500 / 600）。ヒーローのラベル（`01 CM` `02 SUSTAINABILITY`）とセクションの英字見出し（74px）に使う。実測トップ 44 要素 / 会社情報 4 要素
- **Jost（600 / 700）・Noto Sans（400 / 500 / 700）・Train One（400）も `loaded` だが、実測した 2 ページでは可視 0 要素**

> **「読み込んでいる書体」と「描画されている書体」を混同しないこと。** このサイトは 6 ファミリーを配信しながら 2 つしか使っていない。**新規実装では Noto Sans JP と Inter の 2 本だけで足りる**（残り 4 本は転送量の無駄でもある）。

### 3.3 font-family 指定

```css
/* 和文・既定 */
font-family: "Noto Sans JP", YuGothic, YuGothicM, メイリオ, Meiryo, sans-serif;

/* 欧文ラベル・英字見出し */
font-family: Inter, sans-serif;

/* Windows の游ゴシック Medium を別名で拾う宣言 */
@font-face {
  font-family: YuGothicM;
  src: local("Yu Gothic Medium");
}
```

**フォールバックの考え方**:
- **游ゴシックの Windows 問題は「別名方式」で対処している**（SmartHR / 白鶴と同じ型）。素の `YuGothic` は macOS で 游ゴシック体 Regular に当たり、Windows では家族名が `Yu Gothic`（スペース入り）なので当たらない。そこで **`YuGothicM` という別名を `local("Yu Gothic Medium")` で定義し、`YuGothic` の直後に置く**
- **`src` が `local()` だけなのでファイルのダウンロードは発生しない。** そのため `document.fonts` 上では**永久に `unloaded` のまま**。これは失敗ではなく `local()` の正常な挙動。**`unloaded` を理由に「使われていない」と書かないこと**
- **ただしこのサイトでは、その工夫が効く場面が無い。** スタック先頭の `Noto Sans JP` が `loaded` するので游ゴシックまで降りてこない。**別名方式そのものは正しいので、Web フォントを使わない案件で流用する価値がある**
- 和文と欧文で**ファミリーを切り替える方式**（1 つのスタックに混ぜていない）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Section Heading (EN)** | **Inter** | **74px** | 600 | 1.20 | **4px** | `GREEN MAGAZINE` `NEWS RELEASE` `SUSTAINABILITY` |
| **Stat Number** | Inter | **42px** | **700** | **0.90** | — | `173件` `218施設` の数字部分 |
| Page Title | Noto Sans JP | 38px | 500 | 1.50 | — | 会社情報の `東急不動産について` |
| **Hero Heading** | Noto Sans JP | **28.8px** | **500** | **1.47** (42.336px) | **1.1px** | `価値を創造する環境先進企業へ`（写真の上・白文字） |
| **Section Heading (JP)** | Noto Sans JP | **28px** | **700** | **1.70** (47.6px) | **2.6px** | `特徴的な取り組み`（`#0B8100`） |
| Lead | Noto Sans JP | 24px | 700 | 1.80 | — | 会社情報のリード |
| Sub Heading | Noto Sans JP | 22px | 400 / 500 | 1.60 | — | `広域渋谷圏での取り組み` |
| Card Heading | Noto Sans JP | 20px | 500 | 1.40 | 1px | `東急不動産Webマガジン` |
| Stat Label | Noto Sans JP | 18px | 400 | 1.60 | — | `国内発電総事業数` |
| **Body** | Noto Sans JP | **16px** | 400 | **1.70** (27.2px) | **normal** | **既定。`body` に直接。4 幅すべてで固定** |
| Stat Unit | Inter | 16.8px | 700 | 0.90 | — | `件` `施設` |
| Card Text | Noto Sans JP | 15px | 400 | 1.80 | — | 記事カードの説明 |
| **Hero Tab** | **Inter** | **14px** | 500 | 1.20 | **1.2px / 1.4px** | `01 CM` `02 SUSTAINABILITY`（選択時 `#0B8100`、非選択 `#7F7F7F`） |
| **UI Link** | Noto Sans JP | **13px** | 400 | **1.40** | normal | **最多（トップ 64 要素）**。ヘッダー・フッターのリンク |
| Breadcrumb | Noto Sans JP | 12px | 400 | 1.50 | 0.084px | 会社情報のパンくず |

> **`html { font-size: 10px }`。** `rem` は 10 倍で読む（`2.88rem` = 28.8px）。**`28.8px` / `16.8px` という半端な値はそこから来ている**（`2.88rem` / `1.68rem`）。**流体（vw）ではない** — 4 幅の実測で `body` は 16px から動かなかった。

### 3.5 行間・字間

**行間は 3 段が主役。**

| 行間 | 実測 | 用途 |
|------|------|------|
| **1.40** | **トップ 71 要素（最多）** | ヘッダー・フッターの 13px リンク |
| **1.70** | 58 / 21 要素 | **`body` の既定**。本文・ナビ |
| **1.60** | 50 / 52 要素 | 事業紹介の説明文 |
| 1.20 | 29 / 1 要素 | ヒーローのタブ・英字見出し |
| 1.86 | 11 要素 | 災害のお知らせ文 |
| 2.00 | 8 / 9 要素 | 長い説明文 |
| 1.75 / 1.47 / 1.80 | 6 / 5 / 4 要素 | ニュース・ヒーロー見出し・カード |
| 0.90 | 4 要素 | 統計数値（`173件`） |

**字間はほぼ触らない。値は段になっていない。**

- **`normal` が既定**: トップ **254 要素中 201 要素**、会社情報 **108 要素中 94 要素**
- **CSS 全文の宣言は 36 種類**で、px（`4px` `2.6px` `1.2px` `1.1px` `.5px` `-.3px` …）と em（`.02em` `.05em` `.007em` `.002em` `-.06em` `.7em` …）と rem（`.02rem`）が混在している
- **`0.084px`（パンくず）や `0.002em` のような、目視では判別不能な値まである**

**ガイドライン**:
- **`letter-spacing: normal` だけを引き継ぐ。** 例外値に設計上の意味が見出せない
- **どうしても足すなら英字ラベル（Inter）にだけ。** 実測で意味のある字間は `01 CM` の 1.2px / 1.4px と 74px 見出しの 4px、緑の 28px 見出しの 2.6px の 3 箇所
- **`0.002em` / `0.084px` のような値を新規実装に持ち込まない**

### 3.6 禁則処理・改行ルール

- **`body` の `word-break` は `normal`**（1440 / 1200 / 834 / 375px の 4 幅すべてで実測）
- CSS 全文には `break-all` と `break-word` が宣言されているが、**局所的な上書き**にとどまる
- `word-break: auto-phrase` は使っていない
- **ブラウザ既定の和文折り返しに任せるのが、このサイトの既定**

### 3.7 OpenType 機能

**このサイトは `font-feature-settings` を一切使っていない**（実測 0 要素 / CSS 全文でも 0 回）。

- **`palt` を足さないこと。** Noto Sans JP の既定の字送りのまま組む
- フォントスタックに `YakuHanJP` の類も入っていない。**約物は詰まらないまま出るのが正しい状態**
- 統計数値（`173件` `218施設`）は Inter の 700 で組むが、`tnum` などの指定は無い

### 3.8 縦書き

**使っていない**（実測 0 件。CSS 全文でも `writing-mode` は 0 回）。

- **縦組みを実装しないこと**

---

## 4. Component Stylings

**`border-radius` はサイト全体で `0px`。** 実測で 0 以外だったのは**円形要素（`100%`）がトップ 3 要素 / 会社情報 1 要素だけ**。

### Buttons

**Outline（緑枠）**
- Background: `transparent`
- Text: `#000000`（タグ状のものは `#ffffff`）
- Border: **`1px solid #0B8100`**
- Padding: **`2px 5px`**（タグ）／`0px`（テキスト＋枠）
- Border Radius: **`0px`**
- 例: `ニュースリリース` `長期ビジョン` `中期経営計画`

**Solid（緑面）**
- Background: **`#0B8100`**
- Text: `#ffffff`
- Border: なし
- Padding: **`5px 13px`**（小）／**`5px 20px`**（大）
- Border Radius: `0px`
- 例: `会社案内` `グループ紹介` `東急不動産の主要関連会社` `採用情報を詳しく見る`

**Contact（ヘッダー）**
- Text: `#000000`
- Padding: **`10px 18px 10px 15px`**（左右非対称。右にアイコン分のアキ）
- Border Radius: `0px`

**Hero Tab**
- Background: `transparent`（選択中はラベル面 `#2C9622`）
- Text: 選択 `#0B8100` / 非選択 `#7F7F7F`
- Padding: `0px 22px 0px 0px`
- Font: Inter 14px / weight 500 / letter-spacing 1.2–1.4px
- **匿名のドットではなく `01 CM` `02 SUSTAINABILITY` と名前で並べる**

### Cards

- Background: `#ffffff` または `#F4F5F2` / `#EDF5E6`（淡いグラデーション面）
- Border: なし
- Border Radius: `0px`
- Shadow: **なし**
- 中身: 写真 → 見出し 20px / lh 1.40 → 説明 15px / lh 1.80 → 日付 13px / `#6E6E6E`

### Stat Block（実績数値）

- Background: **`#EDF5E6`**
- 数値: **Inter 42px / weight 700 / line-height 0.90**
- 単位: Inter 16.8px / weight 700
- ラベル: Noto Sans JP 18px / weight 400 / lh 1.60
- Border Radius: `0px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 2px | タグの内側上下 |
| S | 5px | ボタン内側の上下 |
| M | **10px** | 要素間の狭い gap |
| L | **13px / 20px** | ボタン内側の左右 |
| XL | **30px / 33px / 40px** | カラム間 |
| XXL | 55px | セクション間（`gap: 55px 27px`） |

**実測 gap**: `40px`（2）/ `10px`（2）/ `55px 27px` / `30px` / `33px` / `0px 40px` / `0px 1px`

### Container

- **Max Width: 1200px**（実測 12 要素で最多）
- **`calc(100% - 120px)`**（4 要素）: 左右 60px の余白を確保する全幅ブロック
- 1300px / 1400px: ヒーローなどの広いブロック
- 会社情報の本文カラム: **1020px / 1100px**

### Grid

- トップ: ヒーロー（1440×560px の写真＋緑の面＋名前付きタブ 5 枚）→ お知らせ枠 → 事業紹介 → 統計（`#EDF5E6`）→ ニュース → グループ情報
- 会社情報: 緑グラデーションの帯（`::after`）→ カード 2 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。実測で影のある可視要素は 0 件** |

> **影を使わないサイト。** CSS 全文には `box-shadow` が 46 回、`text-shadow` が 10 回宣言されているが、**実測した 2 ページの可視要素では 1 つも使われていない**。`filter: drop-shadow()` は CSS 全文で 0 回。
>
> **ヒーローの白文字（`価値を創造する環境先進企業へ`）にも影は付けていない。** 代わりに **`#2C9622` の緑の面を写真の上に敷いて、その上に白文字を置く**。これがこのサイトの「写真の上に文字を載せる」作法。**`text-shadow` で済ませないこと。**
>
> 階層は **(a) 緑の面、(b) 淡いグラデーション面（`#F4F5F2` / `#EDF5E6`）、(c) `1px solid #0B8100` の枠**で作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`#0B8100` を唯一のブランド色として使う。** 写真の上に載せる面だけ `#2C9622`
- **本文色は純黒 `#000000`。** 日付だけ `#6E6E6E`
- **和文は Noto Sans JP、欧文ラベルと数値は Inter** の 2 本だけで組む
- **`border-radius: 0` を貫く**（円形要素のみ例外）
- **`letter-spacing: normal` を既定にする**（79%）
- **行間は 1.40（UI）/ 1.70（body 既定）/ 1.60（説明文）の 3 段**
- **写真の上の文字は、影ではなく面（`#2C9622`）を敷いて載せる**
- カルーセルのタブは**匿名のドットではなく `01 CM` のように名前と番号で並べる**
- 統計数値は **Inter 42px / weight 700 / line-height 0.90**
- 游ゴシックを使う案件では**別名方式**を流用する: `@font-face { font-family: YuGothicM; src: local("Yu Gothic Medium") }` を定義し、`YuGothic` の直後に置く

### Don't（禁止）

- **Jost / Noto Serif JP / Train One / Noto Sans を読み込まない。** 実サイトは配信しているが**この 2 ページでは 1 要素も描画していない**。真似る必要はない
- **`document.fonts` の `loaded` を「使っている」証拠にしない。** 可視要素の数で確かめる
- **`YuGothicM` が `unloaded` なのを「壊れている」と読み違えない。** `src: local()` だけの宣言はダウンロードが発生しないので `unloaded` が正常
- **`font-feature-settings: "palt"` を足さない**（実測 0 要素）
- **縦組み（`writing-mode`）を実装しない**（実測 0 件、CSS にも 0 回）
- **`box-shadow` / `text-shadow` を足さない**（可視 0 件）。写真の上の白文字にも付けない
- **`border-radius` を 4px や 8px にしない**
- **本文色を `#333333` にしない**（実サイトは純黒 `#000000`）
- **字間の例外値（`0.002em` `0.084px` `-.3px` など）を引き継がない。** 36 種類の値は段になっておらず、設計ではない
- **CSS Custom Properties でトークン設計されていると思わないこと**（自社トークン 0 個）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Query | 実測 |
|------|-------|------|
| **Mobile** | `(max-width: 767px)` | **CSS 全文で 1513 回（圧倒的最多）** |
| **Desktop** | `(min-width: 768px)` | 269 回 |
| Tablet | `(max-width: 991px)` / `(max-width: 1059px)` | 98 / 97 回 |
| Wide | `(min-width: 1060px)` / `(min-width: 1200px)` | 31 / 15 回 |
| Hover | `(hover: hover)` | 14 回 |

- **767/768px が主分岐。** 1059/1060px と 1200px で細かく調整する
- CSS には `@custom-media` 由来の `(--sm-gt) and (--lg-lte)` が 19 回出てくる（**カスタムメディアクエリで名前付けしている**）

### フォントサイズの調整

**`body` は動かない。**

| Viewport | `html` | `body` font-size | `body` line-height | `body` letter-spacing |
|----------|--------|------------------|--------------------|------------------------|
| 1440px | 10px | 16px | 27.2px（1.70） | normal |
| 1200px | 10px | 16px | 27.2px（1.70） | normal |
| 834px | 10px | 16px | 27.2px（1.70） | normal |
| 375px | 10px | **16px** | **27.2px（1.70）** | normal |

- **4 幅すべてで `16px / 1.70` のまま。** 流体（vw / clamp）も、SP での縮小も無い
- **`html` は 10px 固定**（`line-height: 11.5px`）。`rem` は 10 倍で読む
- 縮小はコンポーネント単位で行っている（`28.8px` の見出しなどは SP でメディアクエリにより別値になる）

### タッチターゲット

- 緑の面ボタン（`5px 20px` ＋ 16px の文字）で**約 42px 高**。44px をわずかに下回る
- **タグ（`2px 5px`）は約 22px 高、13px のフッターリンクは行高 18px で大きく下回る**
- **モバイルでは `padding` を増やして 44px を確保すること**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green:   #0B8100
Hero Green:    #2C9622   /* 写真の上に敷く面 */
Text Color:    #000000   /* 純黒 */
Muted:         #6E6E6E   /* 日付 */
Muted Light:   #7F7F7F   /* 非選択タブ */
Surface Green: #EDF5E6
Surface Warm:  #F4F5F2
Surface Gray:  #F2F2F2
Background:    #ffffff
Font (JP): "Noto Sans JP", YuGothic, YuGothicM, メイリオ, Meiryo, sans-serif
Font (EN): Inter, sans-serif
@font-face { font-family: YuGothicM; src: local("Yu Gothic Medium") }
html font-size: 10px
Body Size:     16px（全幅で固定）
Line Height:   1.70（body 既定） / 1.40（UI 13px） / 1.60（説明文）
Letter Spacing: normal
Border Radius: 0px
Box Shadow:    none
Container:     1200px / calc(100% - 120px)
Breakpoints:   767/768px（主） / 1059/1060px / 1200px
```

### プロンプト例

```
東急不動産のデザインシステムに従って、事業紹介ページを作成してください。
- ブランド色は #0B8100 の 1 色。写真の上に置く面だけ #2C9622
- 本文色は純黒 #000000（#333333 にしない）。日付は #6E6E6E
- 和文は "Noto Sans JP", YuGothic, YuGothicM, メイリオ, Meiryo, sans-serif
- @font-face { font-family: YuGothicM; src: local("Yu Gothic Medium") } を定義して
  YuGothic の直後に置く（Windows の游ゴシック Medium 対策）
- 英字ラベルと統計数値だけ Inter に切り替える
- 読み込む Web フォントは Noto Sans JP と Inter の 2 つだけにする
- html は font-size: 10px、body は 16px / line-height 1.7 でブレークポイントをまたいで固定
- UI リンクは 13px / line-height 1.4、説明文は line-height 1.6
- セクション見出しは 28px / weight 700 / letter-spacing 2.6px / color #0B8100
- 英字の大見出しは Inter 74px / weight 600 / letter-spacing 4px
- 統計数値は Inter 42px / weight 700 / line-height 0.9、面は #EDF5E6
- letter-spacing は normal を既定にする（例外値を作らない）
- CTA は「1px solid #0B8100 の枠」か「#0B8100 の面 + 白文字 / padding 5px 20px」の 2 種
- border-radius はすべて 0px（円形要素のみ 100%）
- box-shadow と text-shadow は使わない
  写真の上に文字を載せるときは #2C9622 の面を敷いて白文字を置く
- font-feature-settings: "palt" と writing-mode は使わない
- コンテナは 1200px、ブレークポイントは 768px を主分岐にする
```
