# DESIGN.md — NXグループ／日本通運（NIPPON EXPRESS）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 実測日: 2026-10-26 / 対象: `https://www.nipponexpress.com/ja/`, `/ja/brand/our-values-our-journey/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 左に固定した縦長サイドバーナビゲーション＋右の大判写真。ネイビーパープルとライムグリーンの 2 色で、物流企業の「線」を表現する
- **密度**: 低〜中。行間比 1.50 が 208/255 要素でゆったり組む
- **キーワード**: ネイビーパープル、ライム、負の字間、サイドバー

**このサイトの核心は 5 つある。**

1. **指定されている和文 Web フォント `tazuganegothicstdn`（タズガネゴシック StdN）が、1 バイトも読み込まれていない。** `font-family` の先頭に置かれ可視 **247 要素**を占めるのに、**`@font-face` は 7 件すべて欧文**（metropolis ×3 / Lora ×3 / swiper-icons ×1）で、タズガネの宣言が無い。フォント要求も **4 件だけ**（Metropolis 3 本 ＋ Lora 1 本）。**実際に和文を組んでいるのはスタック 2 番目の游ゴシック Medium**
2. **その結果、スタックが「正しい游ゴシック対策」になっている。** `"游ゴシック Medium", "Yu Gothic Medium"` を `游ゴシック体, yugothic, 游ゴシック` より**前**に置いているので、Windows でも Regular ではなく Medium が当たる
3. **`clamp()` の中間値に「設計意図」がそのまま書いてある。** `clamp(var(--font-size-m), calc(100vw * 20 / 1440), var(--font-size-xl))` ＝「1440px のとき 20px」。マジックナンバーを式で説明する書き方
4. **和文と欧文で文字サイズを出し分ける。** `[lang^="ja"]` / `html[lang="ja"]` のセレクタで、同じコンポーネントでも和文だけ 1 段小さいトークンに落とす（例: `.cardArrowTtl` は欧文 `--font-size-xxxl`＝1.5rem → 和文 `--font-size-xl`＝1.25rem）
5. **字間が負で統一されている。** `letter-spacing: -0.239976px`（= `-0.015em` × 16px）が可視 255 要素中 **99 要素**、`-0.25px` が 45 要素。**`em` 宣言が px の絶対値になって子へ降りる**型

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary / Navy** (`#1a005d`): ネイビーパープル。CTA の面・ロゴ・見出し（可視 **28 要素**で最多）
- **Primary Dark** (`#250d65`): フッターのグループ企業リンク（2 要素）
- **Accent / Green** (`#8ec300`): ライムグリーン。検索ボタン・アクセント（3 要素）

ランプは 5 段ずつ宣言されている。

```css
--color--navy-20: #cfcadd;  --color--navy-40: #a096b9;  --color--navy-60: #716297;
--color--navy-80: #443178;  --color--navy-90: #250d65;
--color--green-20: #e5efca; --color--green-40: #cce197; --color--green-60: #bbdb66;
--color--green-80: #9dc73a;
```

### Neutral（ニュートラル）

- **Text** (`#282828`): 本文（`--color--text`）
- **Background** (`#f8f8f8`): ページ背景（`body`）
- **Surface** (`#ffffff`): ヘッダー・カード
- **Border** (`#e0e0e0`): 区切り線（`--color--line`）
- **Danger** (`#dd0000`): `--color--attention` / `--color--red`

> **宣言はあるが実装に接続されていないものがある（Don't に書くこと）**:
> - `--color--primary-20〜90` は `--color--navy-20〜90` と**まったく同じ値の別名**。片方だけ直すと破綻する
> - `--color-text-neutral-loud` / `-medium` / `-soft` / `--color-text-primary-loud` / `-medium` は**5 つとも `#282828` で同値**。意味の階層が宣言だけで潰れている（Drupal Olivero テーマの雛形の既定値が残っている）
> - `--color--gray-saturation: 15%` / `--color--gray-hue: 201` / `--color--primary-hue: 202` は HSL 生成用のパラメータだが、**実際の色は hex 直書き**でこれらを参照していない

---

## 3. Typography Rules

### 3.1 和文フォント

- **実際に描画されるのは OS ローカルの游ゴシック Medium**。和文 Web フォントは 1 本も読み込まれない
- スタック上の先頭 `tazuganegothicstdn-regular` / `-bold` は **`@font-face` が存在しない死んだ別名**

### 3.2 欧文フォント

- **サンセリフ**: `metropolis`（自社配信。Regular / SemiBold 600 / Bold 700 の 3 本）
- **セリフ**: `Lora`（自社配信。400 / 400 italic / 700）
- どちらも `/themes/custom/nx_olivero/fonts/` から配信（Drupal の Olivero テーマのカスタム版）

### 3.3 font-family 指定

```css
/* 本文（可視 247 要素） */
body {
  font-family: tazuganegothicstdn-regular,
               "游ゴシック Medium", "Yu Gothic Medium",   /* ← Windows はここに当たる */
               游ゴシック体, yugothic, 游ゴシック, "Yu Gothic",
               sans-serif;
  font-size: 1rem;
  line-height: 1;            /* ← 無単位 1。各ブロックで必ず上書きすること */
}

/* 太字（可視 8 要素） */
.heading--bold {
  font-family: tazuganegothicstdn-bold, "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, …;
  font-weight: 700;
}
```

> **実サイトはこうだが、正しくはこう**: 先頭の `tazuganegothicstdn-*` は `@font-face` が無いので必ず外れる。
> タズガネゴシックを本当に使うなら `@font-face` を足すか、スタックから外して游ゴシック Medium を先頭に置く。
> **`-bold` ファミリーも実体が無いので、太字は合成太字（ブラウザが斜めに太らせる）で出ている**（実測: 欧文幅が 100〜500 で 437.61px、600〜900 で 464.53px の **2 段しかない**）。

### 3.4 文字サイズ・ウェイト階層

`html { font-size: 100% }` ＝ **16px**。7 幅すべてで固定。

サイズトークンは `rem` で 11 段。

| トークン | 値 | px |
|---|---|---|
| `--font-size-xxxs` | 0.625rem | 10px |
| `--font-size-xxs` | 0.75rem | 12px |
| `--font-size-xs` | 0.8125rem | 13px |
| `--font-size-s` | 0.875rem | 14px |
| `--font-size-m` / `--font-size-base` | 1rem | 16px |
| `--font-size-l` | 1.125rem | 18px |
| `--font-size-xl` | 1.25rem | 20px |
| `--font-size-xxl` | 1.375rem | 22px |
| `--font-size-xxxl` | 1.5rem | 24px |

見出しは別系統（`--h1-font-size: 1.75rem` → `--h1-font-size-md: 3.75rem` ＝ 28px → 60px）。

**ウェイトは 3 段しか出ない**: 400（244 要素）/ 700（8 要素）/ 600（3 要素）。
`--font-weight-normal: normal` と `--font-weight-bold: bold` の 2 つしか宣言が無い。

### 3.5 行間・字間

- **`body { line-height: 1 }` は無単位の 1**。実測で 1 未満の比率が **1 件も無い**ことで確定（絶対値 px なら大きい文字で 1 未満が出る）。本文ブロックは `1.5` を宣言し直しており、行間比 **1.50 が 208/255 要素**
- **`letter-spacing` は負で統一**。`.wrap { letter-spacing: -0.015em }` が 16px に掛かって **`-0.239976px`** という絶対値になり、**99 要素へ px のまま降りる**。ほかに `-0.25px`（45 要素）、`-0.475px`（11 要素）、`-2.24px`（3 要素・大見出し）
- トークンは `--font-lts: normal` / `--font-lts-tight: -0.01em` / `--font-lts-loose: 0.03em` の 3 つだが、**実装の `-0.015em` はこのどれでもない**

```css
/* 字間は親に 1 回だけ書いて px で継承させる。子で em を再宣言しない */
.wrap { letter-spacing: -0.015em; line-height: 1.5; overflow-wrap: anywhere; }
```

### 3.6 禁則処理・改行ルール

- `word-break` は `normal`（7 幅とも）
- `.wrap` に **`overflow-wrap: anywhere`**。長い英数字の型番・URL が枠を破らないようにしている

### 3.7 OpenType 機能

- **`font-feature-settings` は可視 255 要素すべて `normal`。`palt` を 1 要素も使っていない**
- ただし実測では**効く余地がある**（同一スタック・同一文字列で normal 540px → `"palt"` **463.73px**、`"halt"` 480px）。詰めたいなら足せる

### 3.8 縦書き

- 使用しない（2 ページとも 0 要素）

---

## 4. Component Stylings

### Buttons

```css
/* Primary — 角丸をほぼ持たない矩形 */
.btn--primary {
  background: #1a005d;
  color: #ffffff;
  border: 1px solid #1a005d;
  padding: 0 48px 0 24px;      /* 右に矢印を置くため左右非対称 */
  border-radius: 0.1875rem;    /* --border-radius ＝ 3px */
}

/* テキストリンク型（面を持たない） */
.btn--text { color: #ffffff; padding: 0 24px 0 32px; border: none; }

/* 検索 — アクセントのライム */
.btn--search { background: #8ec300; color: #000000; }
```

**padding が左右非対称（`0 48px 0 24px`）**なのは、右端に矢印アイコンを置くため。

### Inputs

```css
.input { border: 1px solid #e0e0e0; border-radius: 0.1875rem; font-size: 1rem; }
```

### Cards

```css
.card { background: #ffffff; border: 1px solid #e0e0e0; }
.cardArrowTtl {
  font-size: var(--font-size-xxxl);          /* 欧文 24px */
  line-height: 1.08;
  letter-spacing: -0.4px;
  margin-top: auto;                          /* タイトルをカード下端に寄せる */
}
.cardArrowTtl:is(html[lang^="ja"] *) {
  font-size: var(--font-size-xl);            /* 和文は 20px に落とす */
  line-height: 1.5;                          /* 行間も広げる */
}
```

**和文と欧文で「サイズも行間も」切り替えている**のがこのサイトの特徴。

---

## 5. Layout Principles

### Spacing Scale

基準単位が **`--sp: 1.125rem` ＝ 18px** という珍しい値。

```css
--sp0-25: 0.28125rem;  --sp0-5: 0.5625rem;  --sp0-75: 0.84375rem;
--sp1: 1.125rem;       --sp1-5: 1.6875rem;
--m-xxxs: 0.5rem;      --m-xxs: 1rem;       --m-xs: 1.5rem;
```

**18px 系（`--sp*`）と 8px 系（`--m-*`）の 2 系統が並走している。**

### Container

```css
--max-width: 84.375rem;        /* 1350px */
--max-bg-color: 98.125rem;     /* 1570px — 背景だけさらに広く取る */
--content-left: 5.625rem;      /* 90px — 左サイドバーの逃げ */
--container-padding: 1.125rem; /* 75rem 以上で 2.25rem */
--site-header-height-wide: 11.25rem;  /* 180px */
```

### Grid

- 左サイドバー（固定ナビ）＋右コンテンツの 2 カラム。ヒーローの写真は 1136×628px

---

## 6. Depth & Elevation

- **影は 1 種類も使っていない**（`box-shadow` の分布が 1 種、実質なし）。面の区別は `#e0e0e0` のボーダーと `#f8f8f8` / `#ffffff` の塗り分けで行う
- `border-radius` は `--border-radius: 0.1875rem` ＝ **3px** が基本。ほぼ直角

---

## 7. Do's and Don'ts

### Do（推奨）

- **游ゴシック Medium を Regular より前に置く**（`"游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, …`）。Windows で細く出るのを防ぐ
- 字間は**親に `-0.015em` を 1 回だけ**書いて px で継承させる
- `clamp()` の中間値を `calc(100vw * 20 / 1440)` の形で書き、**設計幅と設計値を式に残す**
- 和文と欧文でサイズ・行間を出し分けるときは `:is(html[lang^="ja"] *)` を使う
- 長い英数字を扱う面には `overflow-wrap: anywhere` を入れる
- 面の区別は影ではなくボーダー（`#e0e0e0`）で行う

### Don't（禁止）

- **`@font-face` の無いファミリー名をスタックの先頭に置かない**。このサイトの `tazuganegothicstdn` は必ず外れる死んだ別名で、意図した書体は 1 度も描画されていない
- **`body { line-height: 1 }` のまま本文を置かない**。無単位の 1 が全子孫に降りるので、各ブロックで `1.5` を宣言し直す
- `letter-spacing` を子要素で `em` 再宣言しない（親の px 継承と二重に掛かる）
- `--color--primary-*` と `--color--navy-*` を別の色として扱わない（同値の別名）
- `--color-text-neutral-*` の 3 段を「濃さの違い」として使わない（5 つとも `#282828`）
- 影を足さない（実サイトは 0 種）

---

## 8. Responsive Behavior

### Breakpoints

`rem` 基準のブレークポイント。`html` は 7 幅とも 16px 固定。

| ブレークポイント | 値 | 用途 |
|---|---|---|
| `48rem` | 768px | タブレット以上。`clamp()` の流体がここから効く |
| `75rem` | 1200px | デスクトップ。`--container-padding` が 2 倍に |

実測（下層 `h1`）:

| 幅 | h1 |
|---|---|
| 1440px | 64px |
| 1200px | 53.3333px |
| 1024px | 45.5111px |
| 834px | 37.0667px |
| 768px | 34.1333px |
| **767px** | **48px**（固定値に戻る） |
| 375px | 48px |

**768px を下回った瞬間に流体をやめて 48px 固定に戻す。** 767px で一度大きくなる（34.1 → 48px）ので、ここを跨ぐテストを必ず行うこと。

### タッチターゲット

- ボタンの最小高さは `min(6rem, 6.66667vw)`（`.btnLg`）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体:     和文 = 游ゴシック Medium（Web フォントなし）/ 欧文 = metropolis・Lora
スタック: "游ゴシック Medium", "Yu Gothic Medium" を 游ゴシック体 より前に置く
太さ:     400 / 700 の 2 段のみ（600 はごく少数）
字間:     親に letter-spacing: -0.015em を 1 回。子で再宣言しない
行間:     本文ブロックに 1.5 を必ず宣言（body の 1 が降りてくる）
色:       #1a005d（ネイビーパープル）/ #8ec300（ライム）/ #282828（本文）
背景:     #f8f8f8（ページ）/ #ffffff（面）/ #e0e0e0（線）
radius:   3px（0.1875rem）。ほぼ直角
影:       使わない
余白:     --sp: 1.125rem（18px）系と --m-*: 8px 系の 2 系統
clamp:    clamp(最小, calc(100vw * 設計値 / 1440), 最大)
```

### プロンプト例

> NXグループ（日本通運）のコーポレートサイト風に、サービス一覧のカードセクションを作ってください。
> 和文は `"游ゴシック Medium", "Yu Gothic Medium"` を `游ゴシック体` より**前**に置いたスタックで、
> Web フォントは読み込まないでください。
> 字間は親に `letter-spacing: -0.015em` を 1 回だけ書いて継承させ、
> 本文ブロックには `line-height: 1.5` を必ず宣言してください。
> 色はネイビーパープル `#1a005d` とライム `#8ec300` の 2 色、背景 `#f8f8f8`、線 `#e0e0e0`。
> **影は使わず**、`border-radius: 3px` のほぼ直角で、面はボーダーで区切ってください。
> 流体サイズは `clamp(1rem, calc(100vw * 32 / 1440), 2rem)` のように、
> 設計幅 1440px と設計値を式に残す書き方にしてください。
