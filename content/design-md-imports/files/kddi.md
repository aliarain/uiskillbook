# DESIGN.md — KDDI

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-19 / 対象: `https://www.kddi.com/`, `https://www.kddi.com/corporate/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 通信キャリアのコーポレートサイト。白地に **`#222222` の文字**、角丸 **8px** をほぼ全要素に効かせた、丸く柔らかい面の集合。ブランドの紺 `#0E0D6A` とシアン `#1EACE5` はアクセントとして点でしか出さない
- **密度**: 中〜高。カード主体で、見出しには一律 **0.08em** の字間を当てる
- **キーワード**: 34 個の設計トークン、12 カラム 1256px、角丸 8px、影ゼロ、0.08em、`filter` で色を配る

**このサイトの核心は4つある。**

1. **CSS Custom Properties が 34 個あり、色・レイアウト・動き・ヘッダー高さ・カルーセルの再生状態まで変数で持っている。** このリポジトリの収録サイトの中でも厚いほうの設計トークン
2. **`--content-grid-width--pc: 68px` × 12 ＋ `--content-grid-gap--pc: 40px` × 11 = 1256px = `--content-width`。** コンテナ幅が 12 カラムグリッドの計算結果として定義されている
3. **字間は `em` を各要素に当てる。既定は `0.08em`。** 48px の見出しなら 3.84px、16px の本文なら 1.28px と、**サイズに比例して px が変わる**（`body` から継承する設計ではない）
4. **トップと下層でテンプレートが違う。** トップは `html` に `font-size` 宣言が無く UA 既定の **16px**、下層は `html { font-size: 62.5% }` の **10px**。`palt` の配り方も、トップは**コンポーネント単位で 51 箇所**（実測 202 要素）、下層は **`body` に 1 行**（実測 1047 要素）と正反対

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| トークン | 実装値 | 実測 |
|----------|--------|------|
| `--color_main_key` | **`#0E0D6A`** | ブランドの紺。**面 2 要素 / 文字 1 要素**。ヘッダーの `お問い合わせ` ボタンと、下層のリード文に 1 回 |
| `--color_main_accent` | **`#1EACE5`** | シアン。アクセント（罫線・アイコン） |
| `--color_main_base01` | **`#EBF6FF`** | 淡い水色。**ヒーロー上の `View More` の文字色（可視 7 要素）** |
| `--color_main_base02` | **`#D5EDFF`** | もう一段濃い水色の面 |

> **ブランドの紺は驚くほど出てこない。** `#0E0D6A` の実測は両ページ合わせて 3 要素だけ。このサイトの印象を作っているのは紺ではなく **`#222222` の文字と角丸 8px の白い面**。

### Semantic（意味的な色）

| トークン | 実装値 | 用途 |
|----------|--------|------|
| `--color_other_alert` | **`#C50018`** | 障害・災害情報の帯（可視 1 要素） |
| `--color_link_main` | **`#0066AA`** | リンク文字（トップ 14 要素 / 下層 19 要素） |
| `--color_link_hover` | **`#1D9BFF`** | リンクのホバー |

### Neutral（ニュートラル）

| トークン | 実装値 | 実測 |
|----------|--------|------|
| `--color_text_main` | **`#222222`** | 本文・見出し。**可視 136 要素（トップ）/ 74 要素（下層）で最多** |
| `--color_text_darkgray` | **`#626262`** | 補助文・フッターリンク（36 要素 / 26 要素） |
| `--color_text_sub` | **`#7A7A7A`** | 日付・ラベル（9 要素 / 5 要素） |
| `--color_mono_white` | **`#FFFFFF`** | 反転時の文字（25 要素 / 3 要素） |
| `--color_mono_bg_light` | **`#F1F2F6`** | 面。ヘッダーの `ENGLISH` / `サイト内検索` ボタン（可視 5 要素） |
| `--color_mono_bg_dark` | **`#DDE0E7`** | カードの枠線（`1px solid`） |
| `--color_mono_bg_black` | **`#222222`** | 黒面（`ニュースリリース` のタブ） |

**`--rgb` 付きの別名が 3 つある**（`--color_text_main--rgb: 34 34 34` など）。`rgb(var(--color_text_main--rgb) / 0.6)` のように**透明度を後から足すため**。

### 色を `filter` で配るトークン（このサイト固有）

```css
--color_text_main--filtered:  brightness(0) saturate(100%) invert(4%) sepia(0%) saturate(1…);
--color_link_hover--filtered: brightness(0) saturate(100%) invert(42%) sepia(98%) saturate(…);
```

**黒い PNG / SVG アイコンを `filter` で `#222222` や `#1D9BFF` に塗り替えるための文字列。**
`fill` を持たない画像アイコンにブランド色を当てる手口で、**色トークンが 2 種類の形（hex と filter）で並行して存在する**。

### グラデーション

```css
/* 下層ページの main の地 */
background: linear-gradient(1.72deg, #DAE2EA 15.13%, #ECF0F3 54.34%, #F9F9F9 70.26%, #E5EAF0 88.37%);
/* カード */
background: linear-gradient(225deg, #E7E9F2 22.4%, #FFFFFF 97.14%);
```

角度 `1.72deg`・停止位置 `15.13% / 54.34% / 70.26% / 88.37%` は**丸めずそのまま写すこと**。

- **Background**: `#ffffff`（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 トップは `viewportTopBySample (3/3)`、下層は `body`）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**（Google Fonts の可変フォント、`wght@100..900`）。明朝は使わない
- OS ローカルの和文書体はスタックに入れない（受け皿は欧文のみ）

### 3.2 欧文フォント

- **サンセリフ**: **DM Sans**（Google Fonts の可変フォント、`100 1000`）。**和文より先に置く**ので、数字・英字は DM Sans で出る
- フォールバックは `"Helvetica Neue", Helvetica, Arial, sans-serif`

### 3.3 font-family 指定

```css
/* 下層テンプレート（正しい書き方） */
font-family: "DM Sans", "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**欧文優先のスタック。** 和文グリフを持たない DM Sans が先頭にあるため、英数字は DM Sans、和文は Noto Sans JP に自動で振り分けられる（和欧二層の標準的な作り）。

> **実サイトの誤り: トップページだけ `Helvetica` が 2 回入っている。**
> `"DM Sans", "Noto Sans JP", "Helvetica Neue", Helvetica, Helvetica, Arial, sans-serif`（可視 252 要素）。
> 2 回目は 1 回目で必ずマッチするので**到達しない**。実害は無いが、**正しくは 1 回**。

### 3.4 文字サイズ・ウェイト階層

**トップと下層でルートが違う**（5 節参照）。以下は 1440px での実測。

#### トップページ（`html` 16px / `body` 16px）

| Role | Size | Weight | Line Height | Letter Spacing | `palt` |
|------|------|--------|-------------|----------------|--------|
| Hero Title | **40px** | 400 | 1.5 | — | ✓ |
| Hero Subtitle | **24px** | 500 | 1.0 | — | ✓ |
| Section H2 | **42px** | 400 | 1.8 | normal | — |
| Section H2 | **36px** | 400 | **1.4** | **2.88px**（0.08em） | ✓ |
| Sub H2 | **24px** | 500 | 1.4 | **1.92px**（0.08em） | ✓ |
| Card Title | **18px** | 400 | 1.7 | **1.44px**（0.08em） | ✓ |
| Card Lead | **18px** | 500 | 1.4 | 1.44px（0.08em） | ✓ |
| List Item | **15px** | 400 | 1.7 | **1.2px**（0.08em） | ✓ |
| Nav | **15px** | 500 | 1.4 | 0.675px（0.045em） | — |
| Body / Link | **14px** | 400 | 1.6 | normal 〜 1.12px | ✓ |
| Caption | **12px** | 400 | 1.75 | **0.6px**（0.05em） | — |
| Small | **12px** | 300 | 1.7 | 0.96px（0.08em） | ✓ |
| Date | **12px** | 400 | — | 0.48px（0.04em） | — |

#### 下層ページ（`html` 10px / `body` 15px）

| Role | Size | `rem` | Weight | Line Height | Letter Spacing |
|------|------|-------|--------|-------------|----------------|
| Page Title | **48px** | 4.8rem | 500 | **1.5** | **3.84px**（0.08em） |
| Section H2 | **32px** | 3.2rem | 500 | 1.5 | **2.56px**（0.08em） |
| Section H2 | **36px** | 3.6rem | 400 | 1.4 | 2.88px（0.08em） |
| Sub H2 | **24px** | 2.4rem | 500 | 1.7 | 1.5px（0.0625em） |
| Lead | **16px** | 1.6rem | 400 | **1.7** | **1.28px**（0.08em） |
| **Body** | **15px** | **1.5rem** | 400 | **1.7** | normal |
| Table / Text | **14px** | 1.4rem | 400 | 1.7 | **1.12px**（0.08em） |
| Caption | **12px** | 1.2rem | 400 | 1.5〜1.75 | 0.6〜0.96px |

**ウェイトは 300 / 400 / 500 / 600 の 4 段**（700 は下層に 1 要素だけ）。
Noto Sans JP も DM Sans も可変フォントなので、**中間値も含めてすべて実在する**。
見出しの既定は **400 か 500**。**「見出しほど太い」設計ではない** —— 42px の見出しが 400、24px のサブ見出しが 500 になる場面がある。

### 3.5 行間・字間

**字間は `em` を各要素に当てる。`body` から継承させない。**

```css
/* CSS に書かれている宣言値（全 11 種） */
letter-spacing: 0.01em;   /* 最小の UI */
letter-spacing: 0.04em;   /* 日付・フッターリンク */
letter-spacing: 0.045em;  /* グローバルナビ */
letter-spacing: 0.05em;   /* キャプション */
letter-spacing: 0.06em;
letter-spacing: 0.08em;   /* ★既定。見出しも本文も基本これ */
letter-spacing: 0.1em;
letter-spacing: -0.02em;  /* 欧文の大きな見出し */
letter-spacing: -0.12em;  /* 装飾の数字 */
letter-spacing: 2px;      /* 1 箇所だけ px 直書き */
```

**`0.08em` がサイズに比例して px に化けるので、分布には `3.84 / 2.88 / 2.56 / 1.92 / 1.44 / 1.28 / 1.2 / 1.12 / 0.96px` が並ぶ。**
これを「px で継承されている」と読まないこと —— **サイズが違えば px も違う＝各要素が `em` を持っている**証拠。

**行間**（無単位。CSS の宣言値は `1 / 1.4 / 1.5 / 1.6 / 1.7 / 1.75 / 1.8 / 2 / 2.1`）:

| 比率 | 要素数（トップ） | 用途 |
|------|------------------|------|
| **1.8** | 73 | `View More` などのリンク行 |
| **1.7** | 68 | **本文（下層の `body` 既定）** |
| **1.4** | 44 | 見出し |
| **1.6** | 29 | カード本文 |
| 1.0 | 21 | 1 行で収まる UI |
| 1.5 / 2.1 / 1.75 | 計 11 | 個別 |

### 3.6 禁則処理・改行ルール

```css
/* 下層テンプレートのみ */
body { word-wrap: break-word; word-break: break-word; }
```

**`break-word` は `break-all` と違い、1 行に収まらない語だけを途中で折る。** 日本語の禁則は保たれる。
**トップページの `body` は `word-break: normal`** —— ここもテンプレート差。
`word-break: auto-phrase` は使っていない。

### 3.7 OpenType 機能

**実測 202 要素（トップ）/ 1047 要素（下層）。宣言のしかたが 2 通りある。**

```css
/* 下層テンプレート: body に 1 行で全体へ配る */
body {
  font-size: 1.5rem;
  line-height: 1.7;
  font-feature-settings: 'palt' on;
}
@media (max-width: 767.98px) { body { font-size: 1.4rem; font-feature-settings: 'palt' on; } }

/* トップテンプレート: body には書かず、コンポーネントごとに 51 箇所 */
.top-hero__item__heading__title    { font-size: 40px; font-weight: 400; line-height: 1.5; font-feature-settings: "palt" 1; }
.top-heading2__title               { font-size: 36px; font-weight: 400; line-height: 1.4; font-feature-settings: "palt" 1; }
.footer-link__list > li > [class*="__type"] { font-size: 15px; font-feature-settings: "palt" 1; }
.cmn-link-list-v3 > li > [class*="__type"]  { font-feature-settings: "palt" 1; }
```

**同じサイトで `palt` の配り方が 2 通りある。** 新規実装では **`body` に 1 行**（下層の流儀）で足りる。
`halt` / `vpal` / `tnum` は使っていない。`YakuHanJP` も使っていない。

### 3.8 縦書き

**該当なし。** `writing-mode: vertical-*` の実測は 0 件。

### 3.9 ヒーローは実テキスト

トップのヒーローは Swiper のカルーセル（`index_slide01_*.webp` 1440×743）。
**大見出し「KDDIが取り組む地域の魅力化」は画像ではなく実テキスト**（`.top-hero__item__heading__title` / 40px / 400 / lh 1.5 / `palt`）。サブタイトルは 24px / 500 / lh 1.0。

> `heroCover` は `false` を返すが、ヒーローは Swiper のカルーセル。候補の色が同時に DOM にあるため、`pageBackground` は下層ページと突き合わせて確認した（両方 `#ffffff`）。

---

## 4. Component Stylings

### Buttons

```css
/* Primary（紺ベタ・ヘッダーの お問い合わせ） */
.btn-primary {
  background: var(--color_main_key);      /* #0E0D6A */
  color: var(--color_mono_white);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.72px;                 /* 0.06em */
  border-radius: 8px;
  padding: 7px 14px 6px;
  border: 0;
}

/* Secondary（淡いグレー面・ENGLISH / サイト内検索） */
.btn-secondary {
  background: var(--color_mono_bg_light); /* #F1F2F6 */
  color: var(--color_text_main);          /* #222222 */
  font-size: 12px;
  letter-spacing: 0.12px;                 /* 0.01em */
  border-radius: 8px;
  padding: 7px 14px 6px;
}

/* Dark（黒ベタ・タブの選択状態） */
.btn-dark {
  background: var(--color_mono_bg_black); /* #222222 */
  color: #ffffff;
  border: 1px solid #222222;
  font-size: 15px;
  letter-spacing: 0.6px;                  /* 0.04em */
  border-radius: 8px;
  padding: 6px 15px;
}

/* Outlined（タブの非選択） */
.btn-outlined {
  background: transparent;
  color: var(--color_text_main);
  border: 1px solid var(--color_text_darkgray);   /* #626262 */
  border-radius: 8px;
  padding: 6px 15px;
}

/* カルーセル上のピル（半透明） */
.pill { background: rgba(34, 34, 34, 0.6); color: #fff; border-radius: 14px; padding: 4px 12px; font-size: 12px; }
```

- **角丸は 8px が標準**（トップ 89 要素 / 下層 33 要素）。カードは 6px（下層 49 要素）、ピルは 14px、小さいチップは 4px
- **Outlined の枠は `--color_text_darkgray`**。専用の border トークンは持たない

### Cards

```css
.card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--color_mono_bg_dark);   /* #DDE0E7 */
  border-radius: 8px;
  padding: 20px 16px 15px 19px;
  /* box-shadow は無い */
}
```

### Inputs

- `font-size: 15px` / `color: #222222` / `border-radius: 8px`

---

## 5. Layout Principles

### ルートの決め方（テンプレートで違う）

```css
/* トップページ: html に font-size の宣言が無い → UA 既定の 16px */
body {
  font-size: 16px;      /* 実測。line-height / letter-spacing は normal */
  word-break: normal;
}

/* 下層ページ */
html { font-size: 62.5%; -webkit-text-size-adjust: 100%; }   /* = 10px */
body {
  max-width: 1920px;
  margin: 0 auto;
  font-family: "DM Sans", "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;             /* = 15px */
  font-weight: 400;
  line-height: 1.7;
  font-feature-settings: 'palt' on;
  word-break: break-word;
  background-color: #fff;
  color: #222;
}
@media (max-width: 767.98px) { body { font-size: 1.4rem; } }   /* = 14px */
```

**新規実装では下層の流儀（`html` 62.5% ＋ `body` 1.5rem）に揃えること。**
7 幅（1440 / 1200 / 1024 / 834 / 768 / 767 / 375px）で測ると `html` も `body` も**各テンプレート内では固定**。流体なのは一部のコンポーネントだけ（`min()` / `clamp()` が計 30 箇所）。

### Grid / Container

```css
:root {
  --content-width: 1256px;
  --content-side--pc: 58px;
  --content-side--sp: clamp(16px, 8.21vw, 32px);
  --content-grid-width--pc: 68px;
  --content-grid-gap--pc: 40px;
  --content-grid-gap--sp: 16px;
  --padding-inline: min(15px, calc(15 / 1372 * 100vw));
}
```

**12 カラム。** `68px × 12 + 40px × 11 = 816 + 440 = 1256px`。`--content-width` はこの計算結果。
左右の余白は PC で 58px、SP は `clamp(16px, 8.21vw, 32px)` の流体。
ページ全体は `max-width: 1920px` で中央寄せ（下層テンプレート）。

### 動きのトークン

```css
--transition_duration: 0.5s;
--transition_easing: ease-out;
--transition_delay: 0s;
--transition_default-set:   var(--transition_duration) var(--transition_easing) var(--transition_delay);
--transition_animation-set: 0.3s var(--transition_easing) var(--transition_delay);
```

**ホバー等は 0.5s / ease-out、アニメーションは 0.3s。** `transition: color var(--transition_default-set)` のように使う。

### ヘッダーとカルーセルのトークン

```css
--header-height--pc: 121px;
--header-height--sp: 78px;
--header-height: var(--header-height--sp);   /* メディアクエリで PC 値に差し替える */
--header-megamenu-height: 0;                 /* JS がメガメニューの高さを書き込む */

--top-hero-indication-time: 5000ms;          /* カルーセルの 1 枚あたりの表示時間 */
--top-hero-animation-state: paused;          /* JS が running / paused を書き換える */
/* --top-tobira-* / --top-news-carousel-* も同じ 2 つ組 */
```

**JS が書き換える前提の変数を CSS 側で宣言しておく設計。** 再生・一時停止を `animation-play-state` にそのまま流す。

---

## 6. Depth & Elevation

**影を使わない。** `box-shadow` の実測は **両ページとも 0 種**。

階層は次の 3 つで作る。

1. **面の色** —— `#ffffff` / `rgba(255,255,255,0.8)` / `#F1F2F6` / `rgba(241,242,246,0.9)`
2. **1px の枠線** —— `1px solid #DDE0E7`
3. **グラデーション** —— `linear-gradient(1.72deg, #DAE2EA 15.13%, …)` を `main` の地に敷く

---

## 7. Do's and Don'ts

### Do（推奨）

- **色・レイアウト・動きを CSS Custom Properties で持つ。** 命名は `--color_<系統>_<役割>`（アンダースコア区切り）
- **`html { font-size: 62.5% }` ＋ `body { font-size: 1.5rem; line-height: 1.7 }`**（下層テンプレートの流儀）
- **`font-feature-settings: 'palt' on` を `body` に 1 行**
- **字間は `em` を各要素に当てる。既定は `0.08em`**、小さい UI は `0.04`〜`0.05em`
- **角丸は 8px**（カード 6px、ピル 14px）
- **ウェイトは 300 / 400 / 500 / 600 の 4 段**。見出しは 400 か 500
- **グリッドは 12 カラム**（`68px` × 12 ＋ gap `40px` × 11 = `1256px`）
- **透明度が要る色は `--rgb` の別名を作る**（`rgb(var(--color_text_main--rgb) / 0.6)`）
- **アイコン画像の色替えは `filter` トークン**で持つ

### Don't（禁止）

- **`box-shadow` を足さない。** 実測 0 種。階層は面と 1px の枠線で作る
- **字間を `body` から継承させない。** このサイトは各要素が `em` を持つ設計。`body` に px で書くと、サイズの違う要素が同じ字間になって別物になる
- **`font-family` に `Helvetica` を 2 回書かない。** トップページの実装はそうなっているが誤り
- **`<a>` にテキストを直接置くときは `color` を必ず宣言する。** 実サイトは `<a>` に色指定が無く、ロゴの画像リンクや読み上げ用ラベル（`新規ウィンドウで開く`）が **UA 既定の `#0000EE`** のままになっている（画像リンクなので実害は無いが、テキストを直下に置くと青が出る）
- **ブランドの紺 `#0E0D6A` を面に広げない。** 実測は両ページで 3 要素。このサイトの地色は白
- **明朝を使わない。** 和文は Noto Sans JP の 1 書体
- **`font-weight: 700` を既定にしない。** 実測はほぼ 400 / 500 / 600。700 は下層に 1 要素だけ
- **トップと下層でルートが違うことを「設計」として真似しない。** 2 世代のテンプレートが同居しているだけ

---

## 8. Responsive Behavior

### Breakpoints

**`768px` / `767.98px` の 1 箇所。** 7 幅で測った結果は次のとおり。

| 要素 | ≧768px | ≦767px |
|------|--------|--------|
| `html`（下層） | 10px | 10px |
| `body`（下層） | **15px** / lh 25.5px | **14px** / lh 23.8px |
| `body`（トップ） | 16px | 16px |
| h1（下層） | 48px / ls 3.84px | **36px** / ls 2.88px |
| h2（下層） | 32px / ls 2.56px | **24px** / ls normal |
| h3（トップ） | 14px | **13px** |
| p | 12px（834px 以下は 10px） | 12px |

**見出しは 768px で 0.75 倍に落とす**（48 → 36px、32 → 24px）。字間は `em` なので自動で追従する。

### 流体の使いどころ

全面的な流体ではなく、**上限付きの `min()` / `clamp()` を部品ごとに当てる**。

```css
--content-side--sp: clamp(16px, 8.21vw, 32px);
--padding-inline:   min(15px, calc(15 / 1372 * 100vw));
.top-tobira__card__title { font-size: min(18px, calc(18 / 1372 * 100vw)); }
```

分母の **1372** が SP 側の基準幅。

### タッチターゲット

- ボタンの padding は `7px 14px 6px`（高さ約 31px）と小さめ。タップ領域は親要素で確保している

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体:     DM Sans（欧文・可変 100-1000）→ Noto Sans JP（和文・可変 100-900）
          → "Helvetica Neue", Helvetica, Arial, sans-serif
ルート:   html 62.5%（10px）/ body 1.5rem（15px）/ lh 1.7
          767.98px 以下は body 1.4rem（14px）
本文:     15px / lh 1.7 / letter-spacing normal / #222222
見出し:   48px·500·0.08em·lh1.5 / 32px·500·0.08em / 36px·400·0.08em·lh1.4
字間:     0.08em が既定（em を各要素に当てる。継承させない）
色:       文字 #222222 / 補助 #626262 / ラベル #7A7A7A
          リンク #0066AA（hover #1D9BFF）/ 紺 #0E0D6A / シアン #1EACE5
          面 #F1F2F6 / 枠 #DDE0E7 / アラート #C50018
字詰め:   body に font-feature-settings: 'palt' on
角丸:     8px（カード 6px / ピル 14px / チップ 4px）
影:       使わない（実測 0 種）
グリッド: 12 カラム 68px + gap 40px = 1256px / 左右余白 58px
動き:     0.5s ease-out（アニメは 0.3s）
```

### プロンプト例

```
KDDI（www.kddi.com）の DESIGN.md に従って、サービス一覧ページを作ってください。

- :root に --color_* / --content-* / --transition_* のトークンを定義する
- html { font-size: 62.5% }、body { font-size: 1.5rem; line-height: 1.7;
  font-feature-settings: 'palt' on; word-break: break-word }
- コンテナは max-width 1256px、左右余白 58px、12 カラム（68px / gap 40px）
- 見出しの letter-spacing は 0.08em を各要素に当てる（body に継承させない）
- box-shadow は使わない。カードは 1px solid #DDE0E7 と border-radius 8px
- 文字色は #222222、リンクは #0066AA、CTA の面は #0E0D6A
- ウェイトは 400 と 500 だけ。700 は使わない
- transition は var(--transition_default-set)（0.5s ease-out）
```

---

## 10. 計測メモ（再現時の注意）

- **トップと下層で `html` の font-size が違う**（16px / 10px）。`layout.css` は共通だが、トップは `top_renew` + `top_new`、下層は `lower_new` + `common_new/app.css` + `corporate` と CSS 一式が別。**1 ページだけ測るとルートを取り違える**
- **`palt` の実測件数（202 / 1047）も同じ理由で倍以上ずれる。** 件数ではなく**宣言のしかた**（コンポーネント単位 51 箇所 / `body` に 1 行）を見ること
- **`rgb(0,0,238)` が可視 19 要素**。子に `<img>` しか持たない `<a>`（ロゴ 100×46）と、視覚的に隠した読み上げラベル。**計測失敗ではなく実サイトの構造**
- CSS 変数は `customPropertiesSummary` で `own: 34 / platform: 1`（Swiper の `--swiper-theme-color`）。ページから直接読むと 42 個見えるが、8 個は Swiper とカルーセル制御用
- `@font-face` は 129 ブロックあるが、**実際のフォント要求は 2 ファミリー**（DM Sans ＋ Noto Sans JP）
