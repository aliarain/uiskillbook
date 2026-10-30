# DESIGN.md — 愛知県美術館（Aichi Prefectural Museum of Art）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-07 / 対象: `https://apmoa.museum/`, `/about/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **組版の指定を `body` の1宣言に集約し、あとは全部継承させる。** 字詰め・字間・行間・禁則をページ全体に一度だけ書き、個別の要素では原則上書きしない
- **密度**: 低い。本文の行間が **2.2** と広く、展覧会のポスター画像を大きく見せるための余白が取ってある
- **キーワード**: palt 全面適用、行間 2.2、Noto Sans JP 一本、角丸ほぼゼロ、空色のアクセント

**このサイトの核心は4つある。**

1. **`body` に組版の設定を全部書いて継承させる。** 実装はこの1行がすべて：

   ```css
   body { font-size: 16px; font-family: "Noto Sans JP", sans-serif; color: var(--color-text);
          line-height: 2.2; font-weight: 400; font-feature-settings: "palt";
          letter-spacing: 0.05em; overflow-wrap: anywhere; word-break: normal; line-break: strict; }
   ```

   結果、**`palt` が可視 337 要素（トップ）/ 196 要素（下層）に効く**。字間 `0.8px` が可視 113 要素中 **90 要素**、行間比 `2.20` が **48 要素**。
2. **字間は px で継承され、行間は比率で継承される。** `letter-spacing: 0.05em` は `body` の 16px で計算されて **`0.8px` という絶対値**になり、14px の要素にも 18px の要素にもそのまま `0.8px` で降りる。一方 `line-height: 2.2` は単位なしなので各要素が自分のサイズで再計算する（14px → 30.8px / 18px → 39.6px / 13.2px → 29.04px）。**同じ `body` の1行に書いてあるのに、継承のしかたが正反対**
3. **Web フォントは Noto Sans JP の可変フォント1本だけ**（`100 900`・`loaded`）。Google Fonts から配信され、実測で **45 件のフォントファイル要求**（日本語サブセット分割）。明朝体もブランド欧文も持たない
4. **行間 2.2 は日本語サイトとして最も広い部類。** 一方でセクション見出しは `line-height: 24px`（32px の文字に対し **比率 0.75**）まで詰める。**本文を開き、見出しを閉じる**落差が紙面の調子を作っている

**CSS Custom Properties は 56 個すべて自社トークン**（プラットフォーム由来 0）。うち **20 個が `--post-*` という記事本文専用の名前空間**で、CMS が吐く本文のタイポグラフィだけを別建てで持っている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Sky Blue** | **`#009FE8`** (`--color-blue`) | **可視 3 要素の面 ＋ 文字 3〜4 要素**。`チケット購入` `メンバーシップ` のリンク文字、開館ステータスの `Open`、メガメニューの見出し |
| **Ink** | **`#1A1A1A`** (`--color-black` / `--color-text`) | **可視 82 要素**。本文・見出し・リンクの既定色。**純黒は使わない** |

> **アクセント色はこの空色ひとつだけ。** 赤（`--color-red: #FF2800`）が宣言されているが **DOM 全走査で可視 0 要素**。カレンダー用の `--sun-color: #d93025` / `--sat-color: #1967d2` も同様にトップ・下層では出てこない。

### Neutral（ニュートラル）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Text Primary** | `#1A1A1A` | 可視 82 要素 |
| **Text Muted** | `#707070` (`--color-gray`) | 可視 4 要素。`Closed`、展覧会の欧文サブタイトル |
| **Text Dark** | `#404040` (`--color-darkgray`) | **可視 6 要素の面**。`お知らせ` タグの地色（白抜き文字） |
| **Border / Tag BG** | `#D6D6D6` (`--color-lightgray`) | **可視 4 要素の面 ＋ 罫線**。`開催予定` タグ、枠線リンクの枠 |
| **Image Placeholder** | `#EDEDED` (`--color-bg-image`) | **可視 14 要素**。画像が入る前の面。実測で最も多い背景色 |

### Surface（面）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Slider Cream** | **`#FAF9ED`** (`--color-bg-slider`) | ヒーロー（展覧会カルーセル）の右半分の地色。**`heroCover` が `true` を返す面**。606,893 px² |
| **Beige** | `#F6F5F1` (`--color-beige`) | お知らせセクションの面。602,708 px² |
| **Pale Blue** | `#E8F2F5` (`--color-lightblue`) | イベントセクション／下層のページヘッダー |
| **Gradient Blue** | `linear-gradient(180deg, #EBEFF1 0%, #D8E9EF 100%)` | フッター直前のリンク帯（`--color-gradient-blue`） |
| **Background** | **`#FFFFFF`** | ページ背景（`pageBackground.resolved` / 根拠 `viewportTopBySample 3/9`） |

> **ページの地色は白。** `heroCover` が `true`（`a.box__content` が 1440×636 を `#FAF9ED` で塗る）なので、`viewportTopByArea` の最上位（`rgba(0,0,0,0.4)` ＝ メガメニューの backdrop）も `#FAF9ED` も**ヒーローとオーバーレイの色であってページの地色ではない**。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**（Google Fonts・可変フォント `100 900`・`loaded`）。**これ1本で全部組む**
- **明朝体**: 使用しない。宣言も無い

### 3.2 欧文フォント

- **専用の欧文フォントを持たない。** 英語のサブタイトル（`Allure of Japan and the Dawn of Modern Japanese Painting`）も日付も **Noto Sans JP の欧文グリフ**で組んでいる
- **Material Symbols Outlined** をアイコンフォントとして併用（可変 `100..700`・`loaded`・可視 11〜12 要素）。メガメニューの `＋` などが実体は `add` という文字

### 3.3 font-family 指定

```css
/* 全体（body に 1 回だけ） */
font-family: "Noto Sans JP", sans-serif;

/* アイコン */
font-family: "Material Symbols Outlined";
```

**フォールバックの考え方**:
- **和文 Web フォント 1 本 ＋ generic family のみ**という最小のチェーン。OS ローカル書体の書き分けを一切していない
- Google Fonts の可変フォントなので **300 / 400 / 500 / 600 / 700 のどれを指定しても実体が存在する**（合成太字にならない）

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| **Section Heading** | **32px** | **600** | **24px（比率 0.75）** | **6.4px = 0.2em** | `.headding--title-top`。`お知らせ` `展覧会` `イベント`。**最も字間を空け、最も行間を詰める** |
| Exhibition Title | 24px | **700** | 36px（1.50） | 1.2px = 0.05em | `h2.box__content-title`。ヒーローの展覧会名 |
| Nav / Card Title | 18px | 600〜700 | 39.6px（2.20） | 0.8px（継承） | メガメニュー見出しは `#009FE8` |
| **Body** | **16px** | **400** | **35.2px（2.20）** | **0.8px（継承）** | **既定。`body` から降りてくる値そのまま** |
| Body Emphasis | 16px | 600 | 35.2px（2.20） | 0.8px | 展覧会の説明文・リスト見出し |
| Nav Link | 14px | 400 | 30.8px（2.20） | 0.8px | グローバルナビ・言語切替 |
| Submenu | 13.2px | 400 | 29.04px（2.20） | 0.8px | メガメニューの第2階層 |
| **Tag (gray)** | 16px | 400 | **16px（1.00）** | **1.6px = 0.1em** | `開催予定` `企画展`。背景 `#D6D6D6` |
| **Tag (news)** | 14px | 400 | **16px（1.14）** | **1.4px = 0.1em** | `お知らせ`。背景 `#404040` / 白文字 |
| Light Heading | 18〜20px | **300** | — | 0.8px | 下層のナビ見出し（可視 16 要素）。**Light を使う唯一の場所** |

> **ウェイトは 300 / 400 / 500 / 600 / 700 の5段**（実測 400 が 64 要素、600 が 27、300 が 16、700 が 9、500 が 8）。可変フォントなのですべて実在の太さで出る。

### 3.5 行間・字間

- **本文の行間**: **2.2**（`body` に単位なしで宣言）。**比率として継承されるので、どのサイズでも 2.2 のまま**
- **見出しの行間**: セクション見出し **0.75**（32px / 24px）、展覧会タイトル **1.50**、タグ **1.00〜1.14**
- **本文の字間**: **`letter-spacing: 0.05em`**（＝ `body` 16px で **`0.8px`**）。**子要素には `0.8px` という px 値で降りる**
- **自分で字間を宣言している要素は 4 種類だけ**:

  | 要素 | 宣言値 | 実測 px | 件数 |
  |------|--------|---------|------|
  | セクション見出し | `0.2em` | 6.4px（32px） | 4 |
  | タグ（大） | `0.1em` | 1.6px（16px） | 8 |
  | タグ（小） | `0.1em` | 1.4px（14px） | 5 |
  | 展覧会タイトル | `0.05em` | 1.2px（24px） | 1 |

**ガイドライン**:
- **`letter-spacing` は `body` に 1 回だけ `0.05em` と書く。** 子要素で `em` を再宣言しない（親の px 値がそのまま降りる前提で組まれている）
- **`line-height` は単位なしの `2.2`。** `35.2px` と px で書くとサイズの違う要素で行間が崩れる
- **サイズを落としても行間比は変えない。** 13.2px の第2階層メニューまで 2.2 を保っている

### 3.6 禁則処理・改行ルール

```css
/* body の宣言をそのまま使う */
overflow-wrap: anywhere;
word-break: normal;
line-break: strict;
```

- **`overflow-wrap: anywhere`** — 長い欧文（展覧会の英語サブタイトル）がカラムを突き抜けないようにする
- **`word-break: normal`** — 和文の語の途中では折らない。`break-all` にしない
- **`line-break: strict`** — 小書きの仮名（ゃゅょっ）や長音符も行頭に来ないようにする厳格な禁則
- CSS には `word-break: keep-all` も存在するが、**`body` の既定は `normal`**

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";   /* body に 1 回だけ。可視 337 要素に効く */
```

- **`palt` をサイト全体に効かせる設計。** 見出しだけ／ナビだけ、ではなく本文も含めて全部詰める
- `"liga"` も 11〜12 要素で指定されているが、これは **Material Symbols（アイコンフォント）のリガチャ**であって和文組版とは無関係
- 記事本文は `--post-font-feature-settings: "palt"` として**同じ値をトークンでも持っている**

### 3.8 縦書き

**該当なし**（`writing-mode: vertical-*` は 0 要素）。縦組みに見える展覧会ポスターは**画像**。

---

## 4. Component Stylings

**既定の `border-radius` は `0px`。** トークンには `--border-radius-lg: 10px` / `--border-radius: 6px` / `--border-radius-sm: 3px` の 3 段があるが、**実測で面に出ている角丸は 4px（Google 検索ウィジェット）1 種のみ**で、サイト自前の CTA はすべて 0px か 3px。

### Buttons

**Outline（最も多い CTA）**
- Background: `transparent`
- Text: `#1A1A1A`
- Border: **`1px solid #D6D6D6`**
- Padding: **`16px 24px`**
- Border Radius: **`3px`**（`--border-radius-sm`）
- Font: 16px / weight 400 / line-height 2.2 / letter-spacing 0.8px

**Close（枠線ボタン）**
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Border: **`1px solid #707070`**
- Padding: `16px 24px`
- Border Radius: **`0px`**
- Font: 18px / **weight 500** / letter-spacing **`normal`**（この要素だけ字間を打ち消している）

**Card Link（ヒーローの展覧会ブロック）**
- Background: **`#FAF9ED`**
- Text: `#1A1A1A`
- Border Radius: `0px`
- Padding: `0px`（内側の要素で取る）

### Tags / Badges

| 種類 | 背景 | 文字色 | Size / Weight | Letter Spacing | Padding | Radius |
|------|------|--------|---------------|----------------|---------|--------|
| **Status（開催予定）** | `#D6D6D6` | `#1A1A1A` | 16px / 400 | **0.1em** | `8px` | `0px` |
| **Outline（企画展）** | `#FFFFFF` | `#1A1A1A` | 16px / 400 | **0.1em** | `8px` | `0px` |
| **News（お知らせ）** | `#404040` | `#FFFFFF` | 14px / 400 | **0.1em** | `8px 0` | `0px` |

> **タグの行間は `1.00`〜`1.14`**（`line-height: 16px` 固定）。背景の帯の高さを文字サイズで決めている。

### Cards

- Background: `#FFFFFF` / セクションごとに `#FAF9ED` `#F6F5F1` `#E8F2F5` の地色を敷く
- Border: **なし**（面の色差で分ける）
- Border Radius: `0px`
- Shadow: **なし**（下記参照）

### 記事本文（CMS）

`--post-*` の 20 トークンが CMS 記事のタイポグラフィを別建てで持っている。**値は `body` と微妙に違う**ので注意：

```css
--post-font-family: 'Noto Sans JP', sans-serif;
--post-font-size: 16px;
--post-line-height: 1.7;          /* ← body の 2.2 ではなく 1.7 */
--post-letter-spacing: 0.05em;    /* body と同じ */
--post-font-feature-settings: "palt";
--post-text-color: #1A1A1A;
--post-paragraph-gap: 1em;
--post-button-padding: 16px 52px 16px 24px;
--post-button-border: 1px solid #707070;
--post-button-radius: 0;
--post-button-text-align: left;
--post-button-justify-content: space-between;
```

> **記事本文だけ `line-height: 1.7` に落ちる。** サイト UI の 2.2 をそのまま適用しないこと。

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | タグ内側、ブロック間の最小アキ |
| S | 16px | グリッドの gap（実測 6 要素で最多）、ボタン内側の上下 |
| M | 24px | ボタン内側の左右、カード間 |
| L | 30〜32px | カード列の gap |
| XL | 40px | セクション内の大きなアキ |

### Container

- **Max Width: 1232px**（実測 5 要素で最多）
- サブの幅: **1338px**（全幅に近いブロック）、**1306px**、**1296px**
- **本文カラム: 700px**（下層の読み物）

### Grid

- グリッドの `gap` は **16px**（6 要素）が最多、次いで **30px**（3）、**16px 32px**（行 16 / 列 32）
- ヒーローは「ポスター画像（左）／展覧会情報（右・`#FAF9ED`）」の 2 分割

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。カード・ボタン・タグはすべてフラット** |
| 1 | `rgba(0,0,0,0.06) 0 2px 8px` | **サイト全体で 1 要素のみ**（メガメニューのドロップダウン） |

> **影で階層を作らないサイト。** 面の区別は `#FAF9ED` / `#F6F5F1` / `#E8F2F5` / `#EDEDED` という地色の塗り分けで行う。
> もう 1 つ検出される `rgba(0,0,0,0.3) 0 4px 12px` は **Cookie 同意バー（CMP）のもの**で、サイト本体の語彙ではない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **組版の指定は `body` に 1 回だけ書く**: `font-feature-settings: "palt"` / `letter-spacing: 0.05em` / `line-height: 2.2` / `word-break: normal` / `line-break: strict` / `overflow-wrap: anywhere`
- **`line-height` は単位なしの `2.2`**（比率として継承させる）
- **本文の字間は `0.05em` を `body` で一度だけ。** 子要素で再宣言しない
- **字間を自分で持つのはタグ（`0.1em`）とセクション見出し（`0.2em`）だけ**
- **セクション見出しは 32px / weight 600 / `letter-spacing: 0.2em` / `line-height: 24px`**。字間を開いて行間を詰める
- 書体は **Noto Sans JP 一本**。300 / 400 / 500 / 600 / 700 を使い分ける
- アクセント色は **`#009FE8`** だけ。本文は **`#1A1A1A`**
- 面の切り替えは `#FAF9ED` / `#F6F5F1` / `#E8F2F5` の 3 色

### Don't（禁止）

- **`line-height: 35.2px` と px で書かない**（サイズの違う要素で行間が壊れる）
- **`letter-spacing` を各要素に `em` で配らない**（このサイトは親の px 値を降ろす設計）
- **本文に `palt` を外さない。** 全要素に効かせるのがこのサイトの設計
- **明朝体を混ぜない**（宣言も実装も存在しない）
- **`border-radius` を 6px / 10px にしない。** トークンにはあるが実装は `0px` と `3px` しか使っていない
- **`box-shadow` をカードに足さない**（サイト本体は 1 要素のみ）
- **記事本文に `line-height: 2.2` を当てない**（`--post-line-height` は `1.7`）
- 赤（`#FF2800`）を使わない（宣言のみ・可視 0 要素）
- 本文色を `#000000` にしない（実サイトは `#1A1A1A`）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767.98px | モバイル（CSS 全文で最多・10 箇所） |
| Tablet | ≤ 1047.98px | タブレット（5 箇所） |
| Desktop | > 1047.98px | デスクトップ |

- **`.98px` という半端な上限**は Bootstrap 系のブレークポイント記法（`768 - 0.02`）

### 文字サイズは固定

- **`html` も `body` も 16px のまま**。1440 / 1200 / 834 / 375px の 4 幅で測って **すべて `font-size: 16px` / `line-height: 35.2px` / `letter-spacing: 0.8px`** だった
- **流体タイポグラフィ（`vw` / `clamp`）を使っていない。** モバイルでも本文は 16px

### タッチターゲット

- 枠線リンク（`padding: 16px 24px` ＋ 16px / lh 2.2）で高さ 約 67px — 44px を満たす
- **タグ（高さ 32px）は下回る**。ただしタグはリンクではなくラベルなので実害はない

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Accent:      #009FE8
Text:        #1A1A1A
Muted:       #707070
Tag BG:      #D6D6D6 / #404040（白抜き）
Surface:     #FAF9ED / #F6F5F1 / #E8F2F5
Placeholder: #EDEDED
Background:  #FFFFFF
Font: "Noto Sans JP", sans-serif
Body: 16px / weight 400
Line Height: 2.2（単位なし・比率で継承）
Letter Spacing: 0.05em（body に 1 回・px で継承）
font-feature-settings: "palt"（body に 1 回・全要素に効かせる）
Border Radius: 0px（枠線 CTA のみ 3px）
Container: 1232px
```

### プロンプト例

```
愛知県美術館のデザインシステムに従って、展覧会一覧ページを作成してください。
- body に font-family: "Noto Sans JP", sans-serif / font-size: 16px / font-weight: 400 /
  line-height: 2.2（単位なし）/ letter-spacing: 0.05em / font-feature-settings: "palt" /
  word-break: normal / line-break: strict / overflow-wrap: anywhere をまとめて書く
- 子要素では letter-spacing と line-height を再宣言しない（親から継承させる）
- セクション見出しは 32px / weight 600 / letter-spacing 0.2em / line-height 24px
- 展覧会タイトルは 24px / weight 700 / line-height 1.5 / letter-spacing 0.05em
- ステータスタグは背景 #D6D6D6 / 16px / letter-spacing 0.1em / padding 8px / radius 0
- お知らせタグは背景 #404040 / 白文字 / 14px / letter-spacing 0.1em
- CTA は transparent / 1px solid #D6D6D6 / padding 16px 24px / border-radius 3px
- セクションごとの地色は #FAF9ED（展覧会）/ #F6F5F1（お知らせ）/ #E8F2F5（イベント）
- アクセント色は #009FE8 のみ。本文は #1A1A1A。box-shadow は使わない
- コンテナ幅 1232px、グリッドの gap は 16px
```
