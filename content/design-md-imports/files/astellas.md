# DESIGN.md — アステラス製薬（Astellas Pharma）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-18 / 対象: `https://www.astellas.com/jp/`, `https://www.astellas.com/jp/about`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **1 色のクリムゾンだけで全部を持たせる。** 面・文字・リンク・ナビの選択状態・丸い矢印ボタン、すべてが `#d91e49`。角丸と余白と行間は**ひとつの流体スケールから取る**ため、画面幅が変わると全体が同じ比率でゆっくり縮む
- **密度**: 低い。1364px のコンテナに大きな余白を取り、カードを帯の境界にまたがせて重ねる
- **キーワード**: クリムゾン単色、流体タイポグラフィ、カードオフセット、丸い矢印、淡いピンクの地

**このサイトの核心は5つある。**

1. **文字サイズも余白も角丸も、同じ `clamp()` のスケールから出ている。** 9 段の `--step-*`（文字）と 9 段 + 8 組の `--space-*`（余白）があり、どれも `clamp(最小, 基準 + N vw, 最大)` の形。**ルートは 16px 固定のまま、各要素のサイズだけが連続的に動く**（h1 は 1440px で 41.4992px → 375px で 37.8977px）。段差（ブレークポイントの崖）は無い
2. **`--step-*` は 2 系統宣言されていて、効いているのは後に来た比率 1.21 のほう。** 先に `clamp(2.6438rem, 2.216rem + 1.8752vw, 3.8147rem)`（比率 1.25／Utopia の既定）が並び、後から比率 1.21 の組が同じ名前で上書きする。**実測はすべて後者**（`--step-5` = 2.5937rem = 41.4992px で、前者の 3.8147rem = 61.04px は 1 要素も出ない）
3. **`font-feature-settings` が 1 要素も無い。** 2 ページ・計 192 要素を走査して `palt` も `halt` も 0。字間も `letter-spacing: normal` が可視 82/85・104/107 要素。**このサイトは和文を一切詰めない**
4. **`--color-primary-*` の色ランプは青で、ブランド色のクリムゾンはそこに入っていない。** `--color-primary-500: #4454ff`（青）、`--color-secondary-500: #38d996`（緑）、`--color-tertiary-500: #ffd41e`（黄）、`--color-additional-600: #d46bcf`（マゼンタ）と 48 個の原色が宣言されているのに、実際に使われる `--primary-element-mid` 等はすべて `#D91E49` を直接指す。**原色ランプは雛形のまま放置されている**
5. **`html { font-size: 1pc }`** という珍しい書き方。1 パイカ = 16px なので結果は既定どおりだが、`rem` 換算の基準として読むときに迷いやすい。`html` の地色は `#FEF8F9`（淡いピンク）で、`body` が白を被せている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Astellas Crimson** | **`#d91e49`** | **面 26 要素（トップ）／ 19 要素（下層）、文字 4 要素／26 要素**。塗りボタン、線ボタンの線と文字、丸い矢印、セクション帯、見出しの強調、リンク。**このサイトで唯一の彩度の高い色** |
| Crimson Hover | `#b4273b` | `--primary-button-hover` / `--primary-nav-label-hover`。ホバー時だけ |
| Crimson Pressed | `#982334` | `--primary-button-pressed`。押下時だけ |
| Crimson Pale | `#fdf2f4` / `#fce8ec` | チップの選択面・グラデーションの端。可視は少ない |

### Neutral（ニュートラル）

- **Text Primary** (`#515170`): 本文・リンク。**可視 14 要素（トップ）／ 19 要素（下層）**。純黒でも `#333` でもなく、**わずかに紫に寄ったグレー**。`--color-topnav-background` と同じ値で、トップのユーティリティバーの地色にも使っている
- **Text Secondary** (`#4d4d4f`): 補足・キャプション（可視 10 要素／9 要素）
- **Navy** (`#0e2753`): ユーティリティバーの地、ナビのラベル（`--primary-nav-label-resting`）。**可視面 3 要素**
- **Navy Outline** (`#0e4189`): `お問い合わせ` の線ボタンの線と文字だけ（`--tertiary-button-resting`）。**1 要素**
- **Text on Dark** (`#ffffff`): 可視 48 要素／45 要素で最多
- **Background（`body`）** (`#ffffff`): `pageBackground.resolved` = `rgb(255,255,255)`（根拠 `body`）
- **Background（`html`）** (`#fef8f9`): `--primary-element-pale`。`body` の外側に出る淡いピンク
- **Surface** (`#f4f4f4` / `#f5f5f5`): カード・タグの面

### 宣言されているが使われていない色（実装しない）

- **原色ランプ 48 個**（`--color-primary-*` 青 / `--color-secondary-*` 緑 / `--color-tertiary-*` 黄 / `--color-additional-*` マゼンタ）は **2 ページとも可視 0**
- `--secondary-button-resting: #ecad36`（アンバー）、`--secondary-title-page-title: #611923`（小豆色）も **可視 0**
- `--gradient-element-pattern: linear-gradient(135deg, #c5caff 0%, #eceeff 50.52%, #c1f3de 100%)`（青→緑）も可視 0。**グラデーションで使うのは `--gradient-navigation-separator`（`#FCE8EC00` → `#D12B43` 50% → `#FCE8EC00`）だけ**

### 外部ウィジェット由来（実装しない）

- `#3860be`（OneTrust の `Filter Button` / `Clear`）、`#0072e4`（同じくフォーカスリング）は **Cookie 同意バナー（OneTrust）の色**。サイトの設計色ではない

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**（Google Fonts・可変フォント `100 900`）。`document.fonts` 上は **loaded 34 サブセット / unloaded 90 サブセット**で、これは Google の `unicode-range` 分割による正常な状態
- **明朝体**: 使わない。セリフ系の和文は 2 ページとも可視 0 要素

### 3.2 欧文フォント

- 専用の欧文書体を**持たない**。欧文・数字も Noto Sans JP で組む（可視 73 要素／89 要素がすべて Noto Sans JP）
- `Material Symbols Rounded`（300・loaded）がアイコン専用で 12 要素／18 要素

### 3.3 font-family 指定

```css
/* 実サイトの宣言をそのまま */
font-family: "Noto Sans JP";
```

**フォールバックが 1 つも書かれていない。** Noto Sans JP の配信が落ちるとブラウザ既定のセリフ体に落ちる可能性がある。正しくは:

```css
/* 正しい指定（受け皿を置く） */
font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic Medium",
             "Yu Gothic", Meiryo, sans-serif;
```

### 宣言だけで使われていない書体（実装しない）

`document.fonts` に **Petrona / Plus Sans Jakarta / IBM Plex Sans / Roboto / Roboto Slab / Noto Serif / FontAwesome / slick / Material Icons** が並ぶが、**全部 `unloaded` で可視 0 要素**。`--font-petrona: "Petrona"` と `--font-jakarta: "Plus Sans Jakarta"` も宣言されているのに、`--font-title` は最終的に `"Noto Sans JP"` に上書きされている。**見出し用のセリフ体は存在しない。**

### 3.4 文字サイズ・ウェイト階層

**サイズはすべて `--step-*`（`clamp()`）で、比率 1.21（= 1.1²）の等比。以下は 1440px のとき。**

| トークン | 1440px | 834px | 375px | 用途 | 実測 |
|---|---|---|---|---|---|
| `--step-5` | **41.4992px** | 39.7327px | 37.8977px | h1 | 1 要素 |
| `--step-4` | **34.2976px** | 32.7139px | 31.0688px | h2 | 1 要素／2 要素 |
| `--step-3` | **28.3456px** | 26.9349px | 25.4702px | h3 | |
| `--step-2` | **23.4256px** | — | — | リード文 | 8 要素／6 要素 |
| `--step-1` | **19.36px** | 18.2598px | 17.1174px | 段落（`.cmp-text p`） | |
| `--step-0` | **16px** | — | — | 本文・ボタンラベル | 20 要素／36 要素 |
| `--step--1` | **13.2224px** | 12.3801px | 11.5043px | リンク・ナビ・キャプション | **可視 29 要素で最多** |
| `--step--2` | **10.928px** | 10.1941px | 9.43125px | 注記 | 8 要素 |

```css
/* 実サイトの宣言（効いているほう・比率 1.21） */
--step--2: clamp(0.5879rem, 0.5505rem + 0.1662vw, 0.683rem);
--step--1: clamp(0.7172rem, 0.6743rem + 0.1908vw, 0.8264rem);
--step-0:  clamp(0.875rem,  0.8259rem + 0.2183vw, 1rem);
--step-1:  clamp(1.0675rem, 1.0115rem + 0.2489vw, 1.21rem);
--step-2:  clamp(1.3024rem, 1.2388rem + 0.2825vw, 1.4641rem);
--step-3:  clamp(1.5889rem, 1.5171rem + 0.3191vw, 1.7716rem);
--step-4:  clamp(1.9384rem, 1.8578rem + 0.3584vw, 2.1436rem);
--step-5:  clamp(2.3649rem, 2.2749rem + 0.3998vw, 2.5937rem);

h1 { font-size: var(--step-5); font-weight: 400; }
```

- **px だけで書かない。** 上の表の px は **1440px のときの値**で、834px では 1px 近く、375px では 3.6px 小さくなる
- **ウェイトは 400 と 600 の 2 段だけ。** 可視 66/93 要素が 400、18/13 要素が 600。700 は **2 ページとも 1 要素だけ**（OneTrust の `Apply`）で、サイト本体には存在しない
- **見出しは太らない。** h1 / h2 / h3 はすべて `font-weight: 400`。太るのはボタンラベルとリンク（600）

### 3.5 行間・字間

```css
/* 実サイトの既定 */
line-height: 1.2;          /* 無単位。可視 58 要素（トップ）／60 要素（下層）で最多 */
letter-spacing: normal;    /* ★既定。可視 82/85・104/107 要素 */
```

- **行間は無単位の比率で書く。** 使われているのは **`1.2`（見出し・UI）と `1.6`（本文ブロック）の 2 つだけ**（トップ 58 + 12、下層 60 + 26）。`1.5` が 2 要素、`1.0` がアイコン
- `html { line-height: 1.15 }`（normalize.css 由来）が残っていて、`body` の実効行送りは **18.4px** になる。**本文ブロックには必ず `1.6` を宣言する**（しないと 1.15 が降りて和文が詰まる）
- **字間は `normal` のまま。** 可視要素で `normal` 以外は **`0.13008px` が 3 要素だけ**で、これは OneTrust バナー（13.008px × `0.01em`）。**サイト本体は字間を一切いじらない**
- CSS 全文には `letter-spacing: .01em` の宣言があるが、当たっているのは上記の外部ウィジェットのみ

### 3.6 禁則処理・改行ルール

```css
body { word-break: auto-phrase !important; }
```

- **`auto-phrase` を `body` に当てている。** 日本語の改行位置を文節単位に寄せる指定で、見出しの折り返しが自然になる。**これはサイトの設計の一部なので外さない**
- CSS 全文には `break-word` / `break-all` / `keep-all` も混在するが、`body` に効いているのは `auto-phrase`

### 3.7 OpenType 機能

**使っていない。** 2 ページ・計 192 要素を走査して `font-feature-settings` が `normal` 以外の要素は **0 件**。

- **`palt` を足さない。** このサイトの「ゆるさ」は約物が詰まっていないことで出ている
- 同じ理由で `letter-spacing` の負値も当てない

### 3.8 縦書き

使っていない（`writing-mode: vertical-*` は 2 ページとも 0 要素）。

---

## 4. Component Stylings

### Buttons

**塗りと線の 2 種類がペアで並ぶ（`採用情報` / `ニュース`）。**

```css
/* Primary（塗り） */
.btn-primary {
  background: #d91e49;
  border: 2px solid #d91e49;
  color: #ffffff;
  border-radius: var(--space-3xs);   /* 1440px で 6.08px */
  padding: var(--space-2xs) var(--space-s);  /* 11.04px 22.08px */
  font-size: var(--step-0);          /* 16px */
  font-weight: 600;
  box-shadow: none;
}
.btn-primary:hover  { background: #b4273b; border-color: #b4273b; }
.btn-primary:active  { background: #982334; border-color: #982334; }

/* Secondary（線） */
.btn-secondary {
  background: transparent;
  border: 2px solid #d91e49;
  color: #d91e49;
  border-radius: var(--space-3xs);
  padding: var(--space-2xs) var(--space-s);
  font-size: var(--step-0);
  font-weight: 600;
}

/* Tertiary（線・ネイビー）— ヘッダーの お問い合わせ だけ */
.btn-tertiary {
  background: transparent;
  border: 2px solid #0e4189;
  color: #0e4189;
  border-radius: var(--space-3xs);
  padding: var(--space-3xs) var(--space-xs);  /* 6.08px 16.96px */
  font-size: var(--step--1);         /* 13.2224px */
  font-weight: 400;
}
```

- **線は 2px。** 1px にしない（塗りと線を並べたときに高さが揃わなくなる）
- **影は付けない**（`box-shadow: none`）

### 丸い矢印ボタン（このサイトの要）

```css
.arrow-circle {
  width: var(--space-l); height: var(--space-l);   /* 1440px で 44px */
  border-radius: 50%;
  background: #d91e49;
  color: #ffffff;
  display: grid; place-items: center;
  padding: var(--space-3xs);         /* 6.08px */
  font-family: "Material Symbols Rounded";
  font-size: var(--space-m);         /* 22.08px — アイコンのサイズも余白トークン */
}
```

- `もっと詳しく` のテキストリンクの右に必ずこの円が付く。**面 8 要素／6 要素**
- `border-radius: 50%` はこの円とアバターだけ（可視 8 要素／6 要素）

### Cards

```css
.card {
  background: #ffffff;
  border-radius: var(--space-3xs);                    /* 6.08px */
  box-shadow: 0 11px 44px rgba(81, 81, 112, 0.2);     /* 影の色は本文色と同じ */
  padding: var(--space-s);                            /* 22.08px */
}
.card:hover {
  box-shadow: 0 9px 34px rgba(81, 81, 112, 0.2),
              0 9px 13px rgba(81, 81, 112, 0.35),
              0 4px 4px  rgba(81, 81, 112, 0.2);
}
```

- **カードは帯の境界にまたがる。** クリムゾンの帯の上に白いカードを半分はみ出させる構成（`.cmp-card-offset`）が全ページで繰り返される
- 影は**黒ではなく `#515170` の 20%**。本文色と同じ色で落とす

### Tags / Chips

```css
.chip {
  border-radius: var(--space-m);     /* 1440px で 22.08px */
  border: 1px solid #d91e49;
  color: #d91e49;
  background: #fdf2f4;               /* 選択時 */
}
```

---

## 5. Layout Principles

### Spacing Scale

**余白は 9 段 + 8 組の `clamp()`。角丸・ギャップ・アイコンサイズも同じトークンから取る。**

| トークン | 宣言 | 1440px |
|---|---|---|
| `--space-3xs` | `clamp(0.25rem, calc(0.2rem + 0.2vw), 0.38rem)` | **6.08px** |
| `--space-2xs` | `clamp(0.56rem, calc(0.52rem + 0.2vw), 0.69rem)` | **11.04px** |
| `--space-xs` | `clamp(0.81rem, calc(0.72rem + 0.4vw), 1.06rem)` | **16.96px** |
| `--space-s` | `clamp(1.06rem, calc(0.95rem + 0.5vw), 1.38rem)` | **22.08px** |
| `--space-m` | `clamp(1.63rem, calc(1.47rem + 0.7vw), 2.06rem)` | **32.96px** |
| `--space-l` | `clamp(2.13rem, calc(1.9rem + 1vw), 2.75rem)` | **44px** |
| `--space-xl` | `clamp(3.19rem, calc(2.84rem + 1.5vw), 4.13rem)` | **66.08px** |
| `--space-2xl` | `clamp(4.25rem, calc(3.79rem + 2vw), 5.5rem)` | **88px** |
| `--space-3xl` | `clamp(6.38rem, calc(5.69rem + 3vw), 8.25rem)` | **132px** |

ペアのトークン（`--space-s-l` 等）は「小さいほうの最小値から大きいほうの最大値まで」を 1 本の `clamp()` でつなぐもの:

```css
--space-s-l: clamp(1.0625rem, 0.4459rem + 2.7027vw, 2.75rem);  /* 17px → 44px */
```

- **実測で出てくる角丸は 6.08 / 11.04 / 16.96 / 22.08px の 4 つで、これは `--space-3xs` 〜 `--space-s` そのもの**（可視 40 + 15 + 8 + 6 / 44 + 18 + 15 + 6 要素）。**角丸専用のトークンは無い**
- 実測のギャップも `11.04 / 16.96 / 22.08 / 44px` で同じスケール

### Container

```css
.container {
  max-width: var(--grid-max-width);  /* 85.25rem = 1364px */
  margin-inline: auto;
}
```

- **1364px が 14 要素（トップ）／ 12 要素（下層）で最多。** 1200px でも 1280px でもない
- 中のナローカラムは `396px` / `440px` / `calc(60% + 88px)`（88px = `--space-2xl`）

### Grid

```css
--grid-columns: 12;
--grid-gutter: calc(var(--space-s-l) / 2);   /* 1440px で 22px */
```

12 カラム。`--column-1` 〜 `--column-7` に `12.78% / 16.07% / 17.56% / 14.6% / 14.6% / auto / 6.45%` という**不均等なカラム幅**が別途宣言されていて、パイプライン表（`/jp/science`）専用。

---

## 6. Depth & Elevation

**影は 2 種類だけ。**

| 用途 | 値 | 実測 |
|---|---|---|
| カード（既定） | `0 11px 44px rgba(81, 81, 112, 0.2)` | **可視 9 要素（トップ）／ 7 要素（下層）** |
| モーダル・ドロップダウン | `0 0 18px rgba(0, 0, 0, 0.2)` | 1 要素 |
| カード（hover） | `0 9px 34px rgba(81,81,112,.2), 0 9px 13px rgba(81,81,112,.35), 0 4px 4px rgba(81,81,112,.2)` | CSS 宣言 |

- **影の色を黒に丸めない。** 既定の影は `rgba(81, 81, 112, 0.2)` で、これは本文色 `#515170` と同じ RGB
- `44px` は `--space-l` と同値。**ぼかし半径も余白スケールから取っている**
- `filter: drop-shadow()` は使っていない（0 要素）

---

## 7. Do's and Don'ts

### Do（推奨）

- **文字・余白・角丸・影のぼかしを、1 本の `clamp()` スケールから取る。** px を直接書かない
- **`--step-*` は比率 1.21（= 1.1²）の等比**で組む。1.25 ではない
- **ブランド色は `#d91e49` 1 色**で通す。ホバー `#b4273b`、押下 `#982334`
- **見出しは `font-weight: 400`**。太らせるのはボタンとリンク（600）だけ
- **行間は `1.2`（見出し・UI）と `1.6`（本文）の 2 つ**を無単位で書く
- **`word-break: auto-phrase` を `body` に当てる**
- **`もっと詳しく` には必ず丸いクリムゾンの矢印を添える**
- **影は `rgba(81, 81, 112, 0.2)`**（本文色の 20%）で落とす
- **カードは帯の境界にまたがらせる**

### Don't（禁止）

- **`font-feature-settings: "palt"` を書かない。** 2 ページ・192 要素で 0 件。約物を詰めない設計
- **`letter-spacing` を当てない。** 既定は `normal`。実測で見える `0.13008px` は OneTrust 由来
- **`font-weight: 700` を使わない。** サイト本体は 400 と 600 の 2 段
- **`--color-primary-*`（青）・`--color-secondary-*`（緑）・`--color-tertiary-*`（黄）・`--color-additional-*`（マゼンタ）を実装しない。** 48 個とも可視 0 の雛形
- **Petrona / Plus Sans Jakarta / IBM Plex Sans / Noto Serif を読み込まない。** すべて `unloaded`・可視 0。見出し用セリフ体は存在しない
- **`font-family` を `"Noto Sans JP"` 単独で書かない**（実サイトはそうだが受け皿が無い）
- **角丸に px を直書きしない。** `6.08px` は `--space-3xs` の 1440px での値で、375px では 4px になる
- **影を黒にしない**。`rgba(0,0,0,.2)` はモーダル専用
- **`#3860be` / `#0072e4` を実装しない**（OneTrust の色）

---

## 8. Responsive Behavior

### Breakpoints

```css
/* 実サイトの最頻（上位 5 件） */
@media only screen and (min-width: 320px) and (max-width: 1024px) { }  /* 339 箇所 */
@media (max-width: 1024px) { }                                        /* 166 箇所 */
@media only screen and (min-width: 320px) and (max-width: 767.98px) { } /* 145 箇所 */
@media only screen and (min-width: 768px) and (max-width: 1024px) { }  /* 120 箇所 */
@media only screen and (min-width: 1024.1px) { }                       /*  93 箇所 */
```

- **境界は 1024 / 768 の 2 本。** `767.98px` と `1024.1px` という端数でデスクトップ側と重ならないようにしている
- **ただしタイポグラフィはブレークポイントを使わない。** `--step-*` / `--space-*` が `clamp()` で連続に動くため、6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）を測っても**崖が 1 つも無い**

### タッチターゲット

- 丸い矢印ボタンは `--space-l` = 1440px で 44px、375px で 34.08px。**モバイルでは 44px を下回るので、最小サイズを別途保証する**

### フォントサイズの調整

- **ルートは全幅 16px 固定**（`html { font-size: 1pc }`）。`body` も 16px・行送り 18.4px で固定
- 変わるのは**各要素のサイズだけ**。1440px → 375px で全体が約 8.7% 縮む（h1 41.4992px → 37.8977px）
- **`rem` では追従しない。** 再現には `clamp()` の式をそのまま書く

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
ブランド色: #d91e49（クリムゾン・唯一の彩度色）
ホバー/押下: #b4273b / #982334
本文色: #515170（紫寄りグレー）／補足 #4d4d4f
ネイビー: #0e2753（ユーティリティバー）／#0e4189（線ボタン）
地色: body #ffffff ／ html #fef8f9
書体: "Noto Sans JP"（Google Fonts 可変・受け皿を足すこと）
ウェイト: 400 と 600 の 2 段（700 は使わない）
文字サイズ: --step-* 比率 1.21 の clamp()（1440px で 41.4992 / 34.2976 / 28.3456 / 23.4256 / 19.36 / 16 / 13.2224 / 10.928px）
行間: 1.2（見出し・UI）/ 1.6（本文）無単位
字間: normal（一切いじらない）
palt: 使わない（0 要素）
word-break: auto-phrase
角丸: --space-3xs〜s（1440px で 6.08 / 11.04 / 16.96 / 22.08px）
影: 0 11px 44px rgba(81,81,112,.2)
コンテナ: 1364px（= 85.25rem）/ 12 カラム
ブレークポイント: 1024 / 768（タイポには使わない）
```

### プロンプト例

> アステラス製薬のデザインシステムで製品紹介ページを作って。
> ブランド色は `#d91e49` の 1 色だけ、本文は `#515170`。
> 書体は Noto Sans JP、ウェイトは 400 と 600 の 2 段で、**見出しも 400 のまま**。
> 文字サイズ・余白・角丸はすべて `clamp()` の流体スケールから取る（文字は比率 1.21。1440px で h1 = 41.4992px、本文 16px、リンク 13.2224px）。
> **`palt` と `letter-spacing` は書かない。** 行間は見出し 1.2 / 本文 1.6 を無単位で。
> `body` に `word-break: auto-phrase`。
> カードは角丸 6.08px・影 `0 11px 44px rgba(81,81,112,.2)` で、クリムゾンの帯の境界にまたがらせる。
> 「もっと詳しく」のリンクには直径 44px の丸いクリムゾンの矢印を添える。
> コンテナは 1364px。
