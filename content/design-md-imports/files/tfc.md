# DESIGN.md — 東北新社（TFC / Tohokushinsha Film Corporation）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-15 / 対象: `https://www.tfc.co.jp/`, `/division/commercialplanning/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白地に**シアン系の寒色だけ**で情報を組む。CM・映像制作の会社だが、サイト自体は彩度を1系統に絞った IR 寄りの硬い設計
- **密度**: 中。本文 18〜20px と大きめで、行間 1.5、字間 0.08em を**全要素に等しく当てる**
- **キーワード**: Noto Sans JP セルフホスト、palt、字間 0.08em 一律、シアン、角丸 4px

**このサイトの核心は4つある。**

1. **和文は Noto Sans JP ひとつだけで、Google Fonts ではなく自社サーバから配信している。** `@font-face` は **7 件**、`src` は `assets/fonts/NotoSansJP-*.woff2`。フォント要求は **5 件すべて `www.tfc.co.jp`**（`fonts.gstatic.com` へのアクセスは 0 件）
2. **`palt` を `body` に1回だけ書いて全体に継承させる。** 実測 **714 要素**（トップ）/ **274 要素**（下層）。CSS 全文の `font-feature-settings` 宣言は **5 件**で、実体は `body { font-feature-settings: "palt" }` の1行
3. **`palt` で詰めた上から `letter-spacing: 0.08em` を足し直す。** `--ls-m: 0.08em` を各要素に当てており、サイズが変わっても比率は一定（20px→1.6px / 18px→1.44px / 16px→1.28px / 14px→1.12px / 12px→0.96px / 9px→0.72px / 36px→2.88px）。**「詰めてから空け直す」の二段構え**
4. **ウェイトのトークンは 700 を持つが、700 の書体ファイルは存在しない。** `--fw-b: 700` と宣言しているのに `@font-face` は 400 / **500** / **600** / 900 の4本で、**700 は1要素も描画されていない**（実測 500×183・400×46・900×8）。太字は **900（Black）**が担う（→ 3.4 節）

**CSS Custom Properties は 45 個すべて自社トークン**（`own: 45` / プラットフォーム由来 0）。サイズ 13 段・ウェイト 3 段・行間 5 段・字間 2 段が `:root` に揃っている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Cyan**（アクセント） | **`#00b3cd`** | **検索ボタンの面**（可視 4 要素）、矢印アイコン（`--icon-arrow` / `--icon-arrow-select` / `--icon-arrow-square` の SVG に `fill="#00B3CD"` で焼き込まれている）、下層の強調文字 |
| **Deep Teal**（ナビ） | **`#002327`** | **グローバルナビの面 7 要素**。24px / **weight 900** の白文字を `border: 4px solid #002327` で囲む。現在地だけ面を白に反転し、文字を `#002327` にする |
| **Pale Cyan**（面） | `#e2f6f9` | **可視 30 要素**。テーブルの `th`、タグバッジ、プルダウンの地 |
| **Cyan Border** | `#b6d0d4` | ボタンとテーブルの枠線。無効状態のボタンの面にも使う |

### Semantic（意味的な色）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **PDF バッジ** | **`#ee3d23`** | **可視 12 要素**。`PDF` の文字だけに使う赤。**CTA の面色には使わない** |

### Gradient（グラデーション）

- **ヒーロー**: `linear-gradient(150deg, #ffffff 10%, #cbf0f5 40%, #b1e6ee 67%, #7ad1de)`（面。角度・停止位置をそのまま写す）
- **CTA 帯**: `linear-gradient(130deg, #cbf0f5, #7ad1de)`

### Neutral（ニュートラル）

- **Background** (`#ffffff`): ページ背景。`pageBackground.resolved` の根拠は `viewportTopBySample (3/7)`（下層）
- **Text Primary** (`#313131`): 本文・見出し。**可視 169 要素**（トップ）/ 91 要素（下層）。`body` に宣言。**純黒を使わない**
- **Text Muted** (`#686868` 26 要素 / `#747474` 17 要素 / `#4d4d4d` 16 要素): 補足・日付・無効テキスト
- **Text on Dark** (`#ffffff`): ナビ・検索ボタン・PDF バッジの上

---

## 3. Typography Rules

### 3.1 和文フォント

- **Noto Sans JP のみ**。自社サーバ配信（`assets/fonts/NotoSansJP-*.woff2` / `.woff`）
- **読み込んでいるウェイト**: 400（Regular・`loaded`）、500（Medium・`loaded`）、900（Black・`loaded`）、600（`unloaded`）
- **`@font-face` の weight と中身がずれている**: `font-weight: 600` に割り当てられているファイルは **`NotoSansJP-Bold.woff2`**。つまり Bold は **600** として登録されている

### 3.2 欧文フォント

- **Noto Sans**: 400（`unloaded`）/ 500（`loaded`）。自社サーバ配信
- **Marcellus**（ラテン系セリフ）: 宣言はあるが **`unloaded`・可視 0 要素**。**使われていない**

### 3.3 font-family 指定

```css
body {
  font-family: "Noto Sans JP", sans-serif;
  font-feature-settings: "palt";   /* ここ1行で全体に効く */
  color: #313131;
}

@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(""),                                   /* 空の local() で必ずダウンロードさせる */
       url(assets/fonts/NotoSansJP-Regular.woff2) format("woff2"),
       url(assets/fonts/NotoSansJP-Regular.woff) format("woff");
}
```

> `src: local("")` は**空文字なので必ず外れ**、次の `url()` が使われる。東急不動産型（`local()` で OS 同梱書体に別名を付ける）とは逆の意図で、**ローカルの Noto Sans JP を使わせないため**の書き方。

### 3.4 文字サイズ・ウェイト階層

ルートは **`html: 16px` / `body: 16px`。6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）すべて固定**で、流体ではない（CSS 全文の `font-size: *vw` は 1 箇所のみ、`clamp()` は 0 件）。

`:root` のサイズトークン（`rem` 宣言・root 16px なので ×16 で px）:

| トークン | rem | px | トークン | rem | px |
|---------|-----|----|---------|-----|-----|
| `--txt-xxxxxl` | 3.25rem | 52px | `--txt-s` | 1.125rem | 18px |
| `--txt-xxxxl` | 3rem | 48px | `--txt-xs` | 1rem | 16px |
| `--txt-xxxl` | 2.5rem | 40px | `--txt-xxs` | 0.9375rem | 15px |
| `--txt-xxl` | 2.25rem | 36px | `--txt-xxxs` | 0.875rem | 14px |
| `--txt-xl` | 2rem | 32px | `--txt-xxxxs` | 0.75rem | 12px |
| `--txt-l` | 1.5rem | 24px | `--txt-xxxxxs` | 0.625rem | 10px |
| `--txt-m` | 1.25rem | 20px | | | |

**実際に多いのは 18px（60 要素）・20px（44 要素）・14px・15px・16px。** 本文が 18〜20px と大きい。

| トークン | 宣言 | 実測 |
|---------|------|------|
| `--fw-r` | 400 | **46 要素**。補足・小さいラベル |
| `--fw-m` | 500 | **183 要素**。**既定はこちら**。本文・ボタン・見出しの大半 |
| `--fw-b` | **700** | **0 要素**。**書体ファイルが無く、使えば 900（Black）で出る** |
| （トークン無し） | 900 | **8 要素**。グローバルナビの 24px 文字 |

> **`--fw-b: 700` を使わないこと。** `@font-face` は 400 / 500 / 600 / 900 の4本しか無く、CSS フォントマッチングで 700 を要求すると**上方向の最も近い 900 が選ばれる**。実サイトも 700 を1要素も使っていない。**太字が要るなら 900 を直接書く**（ナビと同じ）。600 を使いたい場合は `font-weight: 600` と書けば `NotoSansJP-Bold.woff2` が当たる。

### 3.5 行間・字間

- **`line-height` は無単位の比率**。`body` は `24px / 16px` = **1.5**。各要素が自分のサイズで再計算する（実測比 1.50×176・1.60×49・1.75×10・2.00×2）
- `:root` の行間トークン: `--lh-xl: 2` / `--lh-l: 1.8` / `--lh-m: 1.6` / `--lh-s: 1.5` / `--lh-xs: 1.0`
- **`letter-spacing` は `em` で各要素が持つ**（`body` は `normal`）。トークンは2段:

| トークン | 値 | 実測（px は font-size に比例） |
|---------|-----|------------------------------|
| `--ls-m` | **0.08em** | 36px→2.88px / 20px→1.6px（42 要素）/ 18px→1.44px（31 要素）/ 16px→1.28px / 14px→1.12px / 12px→0.96px / 9px→0.72px |
| `--ls-s` | **0.01em** | 15px→0.15px（24 要素）/ 18px→0.18px（11 要素） |

> **`palt` と `0.08em` はセットで使う。** 片方だけ再現すると別物になる（`palt` だけ＝詰まりすぎ、`0.08em` だけ＝約物が空く）。
> **グローバルナビだけ `letter-spacing: normal`**（24px / weight 900）。字間を入れない唯一の箇所。

### 3.6 禁則処理・改行ルール

- `word-break` / `word-wrap` の特別な宣言は無し。ブラウザ既定
- 見出しは文節で `<br>` せず、コンテナ幅で折り返す

### 3.7 OpenType 機能

- **`font-feature-settings: "palt"` を `body` に1行**。実測 714 要素（トップ）/ 274 要素（下層）
- **`"palt"` 以外は使っていない**（`tnum` / `halt` の宣言は 0 件）
- 下層に `font-feature-settings: normal` で**打ち消している要素が 1 つある**（`c-button` の一部）。意図的なものではなさそうなので再現しない

### 3.8 縦書き

- **縦組みは使っていない**（`writing-mode: vertical-*` は 0 要素）

---

## 4. Component Stylings

### Buttons

| 種別 | 面 | 文字 | 枠 | radius | padding | サイズ/ウェイト/字間 |
|------|----|------|----|--------|---------|---------------------|
| **Global Nav（通常）** | `#002327` | `#ffffff` | `4px solid #002327` | **0px** | `14px 0` | 24px / **900** / `normal` |
| **Global Nav（現在地）** | `#ffffff` | `#002327` | `4px solid #002327` | **0px** | `14px 0` | 24px / **900** / `normal` |
| **Primary（`c-button`）** | `#ffffff` | `#313131` | `1px solid #b6d0d4` | **4px** | `16px 24px` | 20px / 500 / 1.6px |
| **Disabled / 現在地** | `#b6d0d4` | `#686868` | `1px solid #b6d0d4` | **4px** | `16px 24px` | 20px / 500 / 1.6px |
| **Search** | `#00b3cd` | `#ffffff` | なし | **2px** | `0 8px` | 18px / 500 / 1.44px |
| **PDF バッジ** | `#ee3d23` | `#ffffff` | なし | **0px** | `0 10px` | 10px / 400 / 0.15px |
| **Tag バッジ** | `#e2f6f9` | `#313131` | なし | **2px** | `2px 12px`〜`2px 24px` | 12px / 500 / `normal` |

```css
.c-button {
  background: #ffffff;
  color: #313131;
  border: 1px solid #b6d0d4;
  border-radius: 4px;
  padding: 16px 24px;
  font-size: 1.25rem;              /* --txt-m */
  font-weight: var(--fw-m);        /* 500 */
  letter-spacing: var(--ls-m);     /* 0.08em */
  line-height: var(--lh-m);        /* 1.6 */
}
```

> **面色の CTA は実質 2 種（`#00b3cd` の検索と `#ee3d23` の PDF バッジ）だけ。** 主要な導線は**白地＋細い枠線**で表す。**シアンを主ボタンの面に使わない。**

### Inputs

- テーブルの `th`: `#e2f6f9` の面＋`1px solid #b6d0d4`、18px / 500 / 1.44px、`padding: 12px`、radius 0

---

## 5. Layout Principles

- **角丸は 4px と 2px の2段だけ**（実測 4px×47・2px×33）。ボタンは 4px、バッジ・検索は 2px
- **コンテンツ左右の余白はトークン**: `--px-content` が **`5.33%`**（モバイル）→ **`6.25rem`**（＝100px・デスクトップ）で切り替わる
- ヒーローはグラデーション面の上に見出し＋説明文を左、IR カードを右に置く2カラム

---

## 6. Depth & Elevation

| レベル | 実装 |
|--------|------|
| 0 | 白地 |
| 1 | `#e2f6f9` の面で区切る（影ではなく面色） |
| 2 | `1px solid #b6d0d4` の枠線 |
| 3 | **`rgba(0,42,49,0.1) 0px -5px 14px 3px`** — **これ1種類だけ**（可視 2 要素・固定ヘッダの下向きの影） |

> **影は 1 種類しか無い。** それ以外の浮き上がりは面色と枠線で作る。影の色は黒ではなく **`rgba(0,42,49,α)`**（ブランドのティールを混ぜた黒）。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`body` に `font-feature-settings: "palt"` を1行**書いて継承させる
- **`letter-spacing: 0.08em` を各要素に `em` で当てる**（`palt` とセット）
- **既定ウェイトは 500**。400 は補足、900 はナビだけ
- **本文は 18〜20px** と大きめに取る
- **文字色は `#313131`**（純黒を使わない）
- **ボタンは白地＋`1px solid #b6d0d4`＋`border-radius: 4px`**
- 影は `rgba(0,42,49,0.1) 0 -5px 14px 3px` の1種類だけ

### Don't（禁止）

- **`font-weight: 700` を書かない。** 書体ファイルが無く、900（Black）で出る。太字が要るなら 900 を直接書く
- **シアン `#00b3cd` を主ボタンの面色にしない**（検索ボタンとアイコンだけ）
- **赤 `#ee3d23` を CTA に使わない**（PDF バッジ専用）
- **Marcellus を欧文に足さない**（宣言はあるが `unloaded`・可視 0 要素）
- **Google Fonts から Noto Sans JP を読まない**（このサイトは自社サーバ配信。フォント要求 5 件すべて自ドメイン）
- **ルートを流体にしない**（`html: 16px` 固定）
- **グローバルナビに字間を入れない**（唯一 `letter-spacing: normal` の箇所）
- **角丸を 4px / 2px 以外にしない**

---

## 8. Responsive Behavior

### Breakpoints

| 幅 | `html` | `body` | `body line-height` |
|----|--------|--------|-------------------|
| 1440px | 16px | 16px | 24px（1.5） |
| 1200px | 16px | 16px | 24px |
| 834px | 16px | 16px | 24px |
| 768px | 16px | 16px | 24px |
| 767px | 16px | 16px | 24px |
| 375px | 16px | 16px | 24px |

**6 幅すべて完全固定。** ルートもボディも動かない。

### フォントサイズの調整

- サイズは `--txt-*` トークンをメディアクエリで差し替える方式（ルートは動かさない）
- 左右余白だけ `--px-content: 5.33%` ↔ `6.25rem` で切り替わる

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
地色: #ffffff
アクセント: #00b3cd（検索・アイコン）
ナビ面: #002327
淡い面: #e2f6f9 / 枠線: #b6d0d4
警告色: #ee3d23（PDF バッジのみ）
文字: #313131 / 補足 #686868・#747474・#4d4d4d
グラデ: linear-gradient(150deg, #ffffff 10%, #cbf0f5 40%, #b1e6ee 67%, #7ad1de)
和文/欧文: Noto Sans JP（400/500/900）/ Noto Sans（500）
ルート: html 16px 固定
行間: 1.5（既定）/ 1.6 / 1.8 / 2.0
字間: 0.08em（既定）/ 0.01em（小さいラベル）/ normal（グローバルナビ）
ウェイト: 500（既定）・400・900（700 は使わない）
角丸: 4px（ボタン）/ 2px（バッジ）
影: rgba(0,42,49,0.1) 0 -5px 14px 3px の1種類だけ
OpenType: body に "palt" 1行
```

### プロンプト例

> 東北新社のトーンで映像制作会社のコーポレートサイトを作って。地色は白、文字は `#313131`。`body` に `font-family: "Noto Sans JP", sans-serif` と `font-feature-settings: "palt"` を書いて全体に継承させ、その上から `letter-spacing: 0.08em` を各要素に当てる。既定ウェイトは 500、本文は 18〜20px、行間 1.5。ボタンは白地＋`1px solid #b6d0d4`＋`border-radius: 4px`＋`padding: 16px 24px`。シアン `#00b3cd` は検索ボタンと矢印アイコンだけに使う。グローバルナビは `#002327` の面に 24px / weight 900 の白文字を置き、ここだけ `letter-spacing: normal` にする。`font-weight: 700` は使わない（太字は 900）。影は使わず、面色と枠線で段差を作る。
