# DESIGN.md — 小野薬品工業（ONO PHARMACEUTICAL）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-27 / 対象: `https://www.ono-pharma.com/ja`, `https://www.ono-pharma.com/ja/company/mission`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 製薬企業のコーポレートサイト。白地に 2 つの紺青、**和文は OS の游ゴシックだけ**で組む。角丸はカードの 10px とボタンのピルの 2 種類
- **密度**: 中。ナビは 15px / 行間 1.3 で詰め、本文ブロックだけ `line-height: 1.9〜2.0` に開く
- **キーワード**: 和文 Web フォント 0 本、字間ゼロ、`font-weight: 500` の本文、青い影、767px の 1 段だけ

**このサイトの核心は5つある。**

1. **和文の Web フォントを 1 本も読まない。** `@font-face` は 19 面（CSS 上は 9 ブロック）宣言されているのに、実際に取得されるフォントファイルは **`Lato-Regular.ttf` の 1 本だけ**。和文はすべて OS ローカルの游ゴシック／ヒラギノで出る
2. **本文の `font-weight` が 500。** 可視 234/237 要素が 500。ただし macOS の実測では **100〜500 が完全に同じ字幅**（577.38px）で、600 以上が別の面（589.17px）。つまり **500 は 400 と同じ顔で出ており、段は 2 つしかない**
3. **字間を一切当てていない。** 可視 270/270 要素（トップ）・263/263 要素（下層）が `letter-spacing: normal`。CSS には `0.02em`〜`0.18em` が **14 種類**書かれているが、どれも `body.english` / `html[lang="en"]` スコープで、**日本語ページでは 1 要素も当たらない**
4. **ヒーローの `BREAK THROUGH` は、狙った書体で出ていない。** `font-family: "Noto Sans", sans-serif` と書かれているが、`@font-face` の名前は **`NotoSans`（空白なし）**。名前が一致しないので永久にロードされず、generic の `sans-serif` にフォールバックする
5. **`line-height` の既定が 1.15。** `body` が 10px / 行送り 11.5px ＝ **無単位 1.15**。本文ブロックが自分で 1.6〜2.0 を宣言し直してはじめて日本語として読める行になる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **ONO Navy** | **`#003F73`** | 文字 35 要素（トップ）/ 27 要素（下層）。**ヒーローの見出しとリード、セクション見出し、外部サイトへのリンク**。検索ボタンの面にも使う |
| **ONO Blue** | **`#007AC7`** | 面 5 要素。**CTA（`詳しく見る` / `プレスリリース一覧へ` / `お知らせ一覧へ`）とタブの選択状態** |
| **Footer Navy** | `#00345F` | 面 5 要素。フッターのカテゴリ帯 |
| **Nav Navy** | `#1E3A65` / `#175080` | グローバルナビのドロワー面（2 階層） |

> 紺青が 3 つ（`#003F73` / `#00345F` / `#1E3A65`）並ぶが、**文字とヒーローに出るのは `#003F73` だけ**。残りはナビとフッターの面専用。
> **新規実装では文字・見出しに `#003F73`、CTA の面に `#007AC7`** を使う。

### Semantic（ニュース種別のバッジ）

`border-radius: 0`・`padding: 4px 0`・11px / weight 500 の帯。白文字。

| 種別 | 実装値 |
|------|--------|
| **研究開発** | **`#2452A2`** |
| **ライセンス** | **`#BB5A00`** |
| **経営・財務** | **`#A9303E`** |
| **企業** | **`#00345F`** |

### Neutral（ニュートラル）

- **Text Primary** (`#222222`): 本文・ナビ。**可視 152 要素（トップ）/ 166 要素（下層）で最多**。純黒は使わない
- **Text Secondary** (`#555555`): `English` / `Global` の言語切替、注釈
- **Text Muted** (`#707070`): ニュースの日付 / **`#767676`**: パンくずの現在地
- **Text on Dark** (`#FFFFFF`): 紺面・青面の上（可視 64〜75 要素）
- **Surface** (`#F2F2F6`): 統合報告書バナーの面 / **`#E8EAEE`**（`#E9EAEE` も同居）: 下層のリンクリストと `h1` の帯
- **Accent（採用）** (`#0042D8`): 採用バナーの面。**この 1 箇所にしか出ない強い青**
- **CMP** (`#002544`): クッキー同意バーの面。サイト本体の色ではない
- **Background** (`#FFFFFF`): ページ背景（`heroCovered: false`。`html` / `body` とも透明で、白は最上位の面から来る）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一の和文）**: **游ゴシック → ヒラギノ角ゴ ProN → メイリオ** の OS ローカルチェーン。実測 265 要素（トップ）/ 259 要素（下層）
- **明朝体**: 使わない。`NotoSerif-regular` / `-semi` / `-light` / `-semibold` / `-regular-vw` の 5 面が `@font-face` に書かれているが、**2 ページとも可視 0 要素・フォント要求 0 件**

### 3.2 欧文フォント

- **Lato**（`Lato-Regular.ttf`、`@font-face` 名 `Lato-Regular`）: セクションラベルの英字 **4 要素だけ**（`About` / `R&D` / `Investors` ほか、30px / weight 500 / `#003F73`）
- `Lato` という 10 面のファミリー（Light / Regular / Bold × italic）も宣言されているが **全部 `unloaded`**。読まれるのは単一面の `Lato-Regular` だけ
- 本文中の英数字は游ゴシックの欧文グリフで出る

### 3.3 font-family 指定

```css
/* 本文・UI（body に 1 回、可視 265 要素へ継承） */
body {
  font-family: "Yu Gothic", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体,
               "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
               "ＭＳ Ｐゴシック", sans-serif;
  font-weight: 500;   /* ★ここで中太を取りにいく */
}

/* 英字のセクションラベル（可視 4 要素） */
.section-label-en { font-family: Lato-Regular; }
```

**游ゴシック問題の解き方が、これまで収録した 4 つのどれとも違う。**
このサイトは `@font-face` の別名も上書きも使わず、**`font-weight: 500` と「Medium をスタックの 2〜3 番目に置く」の併用**で中太を狙っている。ただし **先頭は `"Yu Gothic"`（Regular 側の名前）**で、東京オペラシティ アートギャラリーの「Medium を Regular より前に置く」とは順序が逆。

**実測（macOS・隠し div の `getBoundingClientRect().width`）:**

| 指定 | 字幅 | 出る面 |
|------|------|--------|
| 100 / 200 / 300 / 400 / **500** | **577.38px** | すべて同じ（Regular） |
| 600 / 700 / 800 / 900 | **589.17px** | すべて同じ（Bold） |

→ **macOS では `font-weight: 500` は 400 と見分けがつかない。** 段は 2 つしかないので、`600` と `900` を使い分けても差は出ない（実サイトは `h3` の一部に 900 を当てているが、700 と同じ顔で描かれる）。

### 3.4 文字サイズ・ウェイト階層

**ルートは `html { font-size: 62.5% }` ＝ 10px、`body` も 10px。8 幅（1440 / 1280 / 1200 / 1024 / 834 / 768 / 767 / 375px）すべてで完全固定。** 流体もクランプも無い。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|------|--------|-------------|----------------|------|
| Hero Display | `"Noto Sans", sans-serif`（→ 実際は generic） | 80px | 700 | 88px (1.1) | normal | `BREAK THROUGH`。1 要素 |
| Hero Lead | 游ゴシック | 26px | 700 | 52px (**2.0**) | normal | `ONOは挑戦で、未来を変える` |
| Page Title (h1) | 游ゴシック | 44px | 700 | 57.2px (1.3) | normal | 下層ページの `h1` |
| Section (h2) | 游ゴシック | 32px | 700 | 48px (1.5) | normal | トップ 4 要素 / 下層 34px |
| Heading (h3) | 游ゴシック | 28px / 24px / 20px | 700（一部 900） | 1.3 | normal | 20px のカード見出しだけ weight 900 |
| Section Label (EN) | Lato-Regular | 30px | 500 | 39px (1.3) | normal | `About` / `R&D` / `Investors` |
| Body | 游ゴシック | **15px** | 500 | 30px (**2.0**) | normal | **可視 133 / 128 要素で最多** |
| Body (記事) | 游ゴシック | 16px | 500 | 30.4px (1.9) | normal | ミッション本文 |
| Nav / List | 游ゴシック | 14px | 500 | 16.1px (**1.15**) | normal | ヘッダー・フッターのリンク |
| Caption | 游ゴシック | 13px | 500 | 1.3 | normal | 言語切替・補助リンク |
| Badge | 游ゴシック | 11px | 500 | 1.3 | normal | ニュース種別 |

> **本文は 15px。** 日本語コーポレートとしてはやや小さめで、その代わり `line-height: 2.0` でゆったり開いている。

### 3.5 行間・字間

- **`body` の `line-height` は無単位 1.15**（10px × 1.15 = 11.5px）。比率 1.00 未満が 1 件も出ないので、絶対値 px ではなく無単位と確定できる
- **行間の実測分布**（可視要素）

| 比率 | トップ | 下層 | どこ |
|------|--------|------|------|
| 1.30 | 129 | 147 | ナビ・リスト・ラベル |
| **1.15** | 82 | 91 | **body からの継承がそのまま出ている要素** |
| 1.50 | 35 | — | カード見出し |
| 1.90 / 2.00 | 8 | 16 | **本文ブロック** |
| 1.60 | 4 | 2 | リード文 |

- **字間はゼロ。** 可視要素の 100% が `letter-spacing: normal`。これは「設定し忘れ」ではなく、日本語ページのスコープに字間の宣言が 1 つも届いていない状態

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの宣言（2 種） */
word-break: break-word;
word-break: keep-all;
```

`overflow-wrap` / `line-break` の宣言は無い。日本語の折り返しはブラウザ既定に委ねている。

### 3.7 OpenType 機能

**`font-feature-settings` の宣言は CSS 全文で 0 件。可視要素も 0。約物は詰めない。**

ただし**書体自体は `palt` に対応している**。同一ページ・同一スタックで隠し div を 2 つ作って測ると:

| 設定 | 字幅 |
|------|------|
| `normal` | **700px** |
| `"palt"` | **563.45px**（−19.5%） |
| `"halt"` | 580px |

→ 「書体が持っていないから効かない」のではなく、**使っていないだけ**。再現するときも `palt` を足さないこと（足すと別物になる）。

### 3.8 縦書き

該当なし。`writing-mode` が `horizontal-tb` でない要素は 2 ページとも 0。

---

## 4. Component Stylings

### Buttons

**Primary（ピル）** — 可視 4 要素。`詳しく見る` / `プレスリリース一覧へ` / `お知らせ一覧へ` / `コーポレートスローガン`

- Background: `#007AC7`
- Text: `#FFFFFF`
- Font: 16px / weight 500 / line-height 24px
- Padding: `16px 16px 16px 24px`（**左右非対称**。右端に矢印アイコンが入る）
- Border Radius: `9999px`
- Border / Shadow: なし

**Tab（選択中）** — `プレスリリース` / `お知らせ`

- Background: `#007AC7`／非選択は白
- Text: `#FFFFFF`
- Font: 20px / weight 700 / line-height 30px
- Padding: `16px 20px`
- Border Radius: `10px 10px 0 0`（**上だけ丸める**）

**Search（角 0）**

- Background: `#003F73` / Text: `#FFFFFF` / 16px / weight 700 / Padding `15px` / Radius `0`

### Cards

- Background: `#FFFFFF`（特集カードは `#F2F2F6`）
- Border Radius: **`10px`**（可視 7 要素）
- Border / Shadow: なし
- 見出しは 20px / weight 900 / `#003F73`

### List Links（下層）

- Background: `#E8EAEE`
- Text: `#222222` / 16px / weight 500
- Padding: `17px 35px 15px 16px`（**上下が非対称**。右に矢印が入る）
- Border Radius: `0`

### Notice Bar

- Background: `#F2F2F2` 系、Radius `5px`、文字 `#707070`

---

## 5. Layout Principles

### Spacing Scale

グリッドの `gap` 実測値。トークンは無いので、この 4 段を使う。

| Token | Value | 用途 |
|-------|-------|------|
| XS | `8px` | バッジ・メタ情報の並び |
| S | `20px` | カード内の要素間 |
| M | `24px` | カードの列間 |
| L | `48px` | セクションの列間（最多・4 箇所） |

### Container

| Max Width | 用途 |
|-----------|------|
| **`1200px`** | 本文コンテナ（4 要素）。**これが基準** |
| `1260px` | ヘッダー／フッターの外枠 |
| `1025px` | 記事本文の読み幅 |

### Grid

- トップのカードは 3 列・`gap: 48px`（1 枚 352px）
- ヒーローは `picture.mod__kv__img` が 1440×541px で全幅、テキストは左に重ねる

---

## 6. Depth & Elevation

**影は 1 種類しかない。しかも黒ではなく青。**

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **カード・ボタン・リストを含むほぼ全要素** |
| 1 | `rgba(36, 120, 255, 0.3) 5px 5px 25px 0px` | 動画サムネイル（可視 2 要素のみ） |

> 下層ページ（ミッションステートメント）は **影 0 種・角丸 0 種**。フラットに組む。
> 青い影の `rgba(36,120,255,.3)` は **黒に丸めないこと**。オフセットも `5px 5px`（右下 45°）で、よくある `0 Npx` ではない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **和文は OS ローカルのチェーンで組む。** 親切のつもりで Noto Sans JP を足さない（別物になる）
- `body` に `font-weight: 500` を置く。**ただし macOS では 400 と同じ顔で出ることを理解しておく**
- **本文ブロックには必ず `line-height` を宣言する**（既定の 1.15 が降りて行が潰れる）。本文は 1.9〜2.0、ナビは 1.3
- 本文 15px / 行間 2.0、記事本文 16px / 行間 1.9
- 文字色は `#222222`。見出しとリンクは `#003F73`
- CTA は `#007AC7` のピル（`border-radius: 9999px`）、カードは `10px`
- `padding` の左右・上下の非対称（`16px 16px 16px 24px` / `17px 35px 15px 16px`）をそのまま写す

### Don't（禁止）

- **`letter-spacing` を足さない。** このサイトは可視要素の 100% が `normal`
- **`font-feature-settings: "palt"` を足さない。** 宣言 0 件・可視 0 件が実装の実態
- **`font-weight` を 600〜900 で使い分けない。** macOS では全部同じ面になる
- 影を黒で書かない（1 種しかない影は青い `rgba(36,120,255,.3)`）
- 明朝体を使わない（`NotoSerif-*` は宣言だけで可視 0）
- `font-family: "Noto Sans"` と書かない。**実サイトはこう書いているが `@font-face` 名は `NotoSans` で一致せず、generic に落ちている。** 正しくは `font-family: NotoSans, sans-serif`（または `@font-face` 側を `"Noto Sans"` に直す）
- 純黒 `#000000` を本文に使わない

---

## 8. Responsive Behavior

### Breakpoints

**崖は 767/768px の 1 箇所だけ。** `html` / `body` の font-size は 8 幅すべてで 10px のまま動かない。

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | `h2` 32px → **24px**、本文ブロック 26px → **12px** |
| Desktop | ≥ 768px | 1200px コンテナ |

### フォントサイズの調整

- ルートが固定なので **`rem` では追従しない**。サイズはメディアクエリで直接書き換える
- 1024 / 834 / 768px のいずれでもデスクトップ値のまま。834px を「タブレット」として別値にしていない

### タッチターゲット

- CTA の実高は `16px + 24px + 16px` ＝ 56px。44px 基準を満たす

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary (text/heading): #003F73
Primary (CTA fill):     #007AC7
Text Color:             #222222
Background:             #FFFFFF
Surface:                #E8EAEE / #F2F2F6
Font: "Yu Gothic", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体,
      "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
      "ＭＳ Ｐゴシック", sans-serif
Body Size:    15px（記事本文 16px）
Body Weight:  500
Line Height:  2.0（本文）/ 1.3（ナビ）/ 1.15（body 既定・無単位）
Letter Spacing: normal（例外なし）
font-feature-settings: 指定しない
Radius: 10px（カード）/ 9999px（ボタン）
Shadow: なし。例外は rgba(36,120,255,.3) 5px 5px 25px のみ
Container: 1200px
Breakpoint: 767px
```

### プロンプト例

```
小野薬品工業のデザインシステムに従って、ニュース一覧セクションを作成してください。
- Web フォントは読み込まない。font-family は上記の OS ローカルチェーンをそのまま使う
- body に font-weight: 500 / line-height: 1.15 を置き、本文ブロックで line-height: 2.0 に上書きする
- letter-spacing と font-feature-settings は一切書かない
- 本文 15px / #222222、日付 13px / #707070、見出し 32px / weight 700 / #003F73
- 種別バッジは 11px / weight 500 / 白文字 / radius 0 / padding 4px 0、面は
  研究開発 #2452A2・ライセンス #BB5A00・経営財務 #A9303E・企業 #00345F
- 「一覧へ」ボタンは #007AC7 / radius 9999px / padding 16px 16px 16px 24px
- カードは radius 10px・影なし、コンテナは max-width 1200px、gap 48px
- 767px 以下で見出しを 24px に落とす
```
