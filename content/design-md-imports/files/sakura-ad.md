# DESIGN.md — さくらインターネット（SAKURA internet）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-05 / 対象: `https://www.sakura.ad.jp/`, `https://www.sakura.ad.jp/services/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **和文 Web フォント1本で全部やる。** 読み込むフォントファイルは `NotoSansJP-VariableFont_wght.woff2` の **1 件だけ**（実測: フォントファイルのリクエスト 1 件）。欧文の飾りラベルだけ OS ローカルの Futura に逃がす
- **密度**: 中。白いカードを薄い青紫の地（`#f4f4fa`）に浮かべ、カードの内側は `32px` 前後の余白をとる。コンテナは `1200px`
- **キーワード**: さくらピンク、Noto Sans JP 単一、ピル型CTA、字間ゼロ、halt

**このサイトの核心は4つある。**

1. **和文書体は Noto Sans JP の可変フォント 1 本だけ。** `@font-face` の `font-weight` は **`100 900`**（可変軸）で、`400 / 500 / 600 / 700` の 4 段を 1 ファイルから出している（実測 400=50 要素 / 500=32 / 600=12 / 700=23）。**ウェイトを増やしてもファイルは増えない設計**
2. **`letter-spacing` は 1 要素の例外もなく `normal`**（実測 **117/117 要素**）。日本語サイトで字間を触らないと決めた設計。**字間で表情を作らず、ウェイトと色で作る**
3. **`font-feature-settings` に `palt` ではなく `"halt"` を使う**（実測 トップ 4 要素 / サービス一覧 16 要素、いずれも `h3.headline` 32px）。`palt` が字幅を文字ごとに詰めるのに対し、`halt` は**全角の約物を半角幅に揃える**。32px の大見出しで「・」「（）」が間延びするのを抑える用途
4. **CTA の角丸が 5 種類ある**（`46px` タブ / `36px` ボタン / `22px` ログイン / `8px` カード / `3px` タグ）。**どれも「高さの半分＝完全なピル」か「8px の角丸」のどちらか**で、中間の値は使わない

**CSS Custom Properties は自社分が 2 個しかない**（`--shadow` と `--arrow-chevron`）。**設計トークンを変数に出していないサイト**なので、値は実装から拾うこと。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **さくらピンク** | **`#ff5577`** | ニュースタブの選択状態（面）、主要ボタンの枠 `2px`、欧文ラベル（`NEWS` `SERVICE`）の文字色。**可視テキスト 7 要素 ＋ 面 1 要素** |
| **Alert Crimson** | **`#e11c45`** | 重要なお知らせリンクの文字色と `2px` 枠（可視 1 要素）。**`#ff5577` より暗く、彩度が高い別の赤** |

> **ピンクが 2 つあるのは実装の実態。** `#ff5577` がブランド色、`#e11c45` は**告知・警告専用**。新規実装でブランド色として使うのは `#ff5577` のほう。

### Neutral（ニュートラル）

- **Text Primary** (`#1d1d1d`): 本文・見出し・リンク。**可視 66 要素で最多**。純黒ではない
- **Text Muted** (`#808080`): リード文、非選択タブ（可視 7 要素）
- **Text Muted 2** (`#6d6d75`): サービスカードの説明文（可視 5 要素）。**わずかに紫を含む灰**
- **Text on Dark** (`#f1f1f1`): 画像の上に重ねたオーバーレイ内のテキスト（可視 19 要素）
- **Text on Fill** (`#ffffff`): ピンク面・濃灰面の上（可視 10 要素）
- **Date** (`#56565b`): 日付（可視 1 要素）
- **Border** (`#d4d4da`): `会員ログイン` ボタンの `1px` 枠
- **Background** (`#f4f4fa`): **ページ背景**（`pageBackground.resolved` = `rgb(244, 244, 250)` / 根拠 `viewportTopBySample (9/12)`。`heroCovered: false`）。**白ではなく、ごく薄い青紫**
- **Surface** (`#ffffff`): カード・パネル・ボタンの面

### Overlay（画像の上に敷く面）

- `rgba(75, 75, 79, 0.9)` — サービス紹介カードの帯（可視 3 要素）
- `rgba(75, 75, 79, 0.7)` — 同、薄いほう（可視 1 要素）
- `#5f5f64` — グローバルナビのドロワー面

> **オーバーレイは黒ではなく `rgb(75,75,79)`（紫みのある濃灰）。** 背景 `#f4f4fa` と同じ色相に揃えてある。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**（可変フォント、自社ホスティング `/resource/assets/fonts/NotoSansJP-VariableFont_wght.woff2`）
- **明朝体**: 使わない。サイト全体で明朝は 1 要素もない

### 3.2 欧文フォント

- **サンセリフ（飾りラベル専用）**: **Futura** → `"Century Gothic"` → `sans-serif`。**Web フォントではなく OS ローカル**。`NEWS` `SERVICE` `EVENT SEMINAR` `CAMPAIGN` などセクション見出しの英字エイブロウだけに使う（**実測 7 要素**）
- 本文中の英数字（サービス名・日付）は **Noto Sans JP の欧文グリフ**をそのまま使う

> **Futura は macOS にしか入っていない。** Windows では `Century Gothic`、それも無ければ `sans-serif`（Segoe UI 等）になる。**7 要素しかない飾りなので割り切っている**が、再現するなら Google Fonts の **Jost** か **Questrial** が近い。

### 3.3 font-family 指定

```css
/* 本文・UI（既定） */
font-family: "Noto Sans JP", sans-serif;

/* 欧文エイブロウ（NEWS / SERVICE / EVENT SEMINAR） */
font-family: Futura, "Century Gothic", sans-serif;
```

**フォールバックの考え方**:
- **和文優先。** 欧文を先頭に置かず、Noto Sans JP の欧文グリフで本文を統一する
- **スタックが極端に短い。** 新潮社のような「ヒラギノ 6 通り・游ゴシック 5 通り」の環境差対策を一切しない。**Web フォントが落ちたら `sans-serif` に任せる**という割り切り
- 可変フォントなので `font-weight` を 100〜900 の任意の値にできるが、**実装は 400 / 500 / 600 / 700 の 4 段しか使っていない**。この 4 段に揃えること

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Section Heading** | Noto Sans JP | **32px** | **600** | **1.50** (48px) | normal | `h3.headline`。**`font-feature-settings: "halt"` が付くのはここだけ** |
| Card Heading | Noto Sans JP | 28px | 600 | 1.30 | normal | `ニュース` `サービス` 等のブロック見出し |
| Number | Noto Sans JP | 24px | 400 | 1.20 | normal | 日付の数字 |
| Panel Title | Noto Sans JP | 18px | 500 | 1.50 | normal | ニュース見出し・CTA の文字 |
| **Body** | Noto Sans JP | **16px** | **400 / 500** | **1.75** (28px) | normal | **本文。body の既定値** |
| Nav Link | Noto Sans JP | 15px | 400 | **1.75** (26.25px) | normal | グローバルナビ |
| Caption / Date | Noto Sans JP | 14px | 400 / 500 | **1.20** | normal | 日付・タグ・ログインボタン |
| Footer Link | Noto Sans JP | 13px | 400 | 1.50 | normal | 規約・ポリシー |
| Card Lead | Noto Sans JP | 16px | 500 | **1.70** | normal | カード内の説明文（`#6d6d75`） |

> **`h1` と `h2` はロゴとヒーローのスクリーンリーダー用で、可視テキストを持たない。** 見出しの実体は `h3.headline`（32px）から始まる。

### 3.5 行間・字間

- **本文の行間**: **1.75**（16px / 28px）。`body` に 1 回書いて継承させている
- **カード説明文**: **1.70**（実測 39 要素で最多）
- **見出しの行間**: **1.50**（32px / 48px）。**本文より狭いが、それでも 1.5 を割らない**
- **日付・ラベルの行間**: **1.20**（実測 30 要素）
- **字間**: **`normal` のみ。実測 117 要素すべて。例外ゼロ**

**ガイドライン**:
- **`letter-spacing` を絶対に足さない。** このサイトは Noto Sans JP の素の字送りをそのまま使う設計で、`0.04em` を足すだけで別のサイトになる
- **行間は 1.2（ラベル）／ 1.5（見出し）／ 1.7〜1.75（本文）の 3 段**で考える。中間値を作らない

### 3.6 禁則処理・改行ルール

```css
word-break: normal;        /* 実測値。break-all にしない */
overflow-wrap: normal;
line-break: auto;
```

- `word-break: auto-phrase` は使っていない。改行位置はブラウザ既定に任せる
- サービス名（`さくらの専用サーバ PHY`）が途中で割れないよう、ナビは十分な幅をとっている

### 3.7 OpenType 機能

```css
/* 32px のセクション見出しだけ */
h3.headline {
  font-feature-settings: "halt";
}
```

- **`palt` は 1 要素も使っていない。** 使うのは **`halt`**（Alternate Half Widths）だけ
- **`halt` と `palt` は別物。** `palt` は文字ごとに最適な字幅へ詰める（詰まり方が不均一になる）。`halt` は**全角の約物を一律に半角幅へ揃える**。「・」「（）」「：」が多い 32px 見出しで、詰まり過ぎず間延びもしない中庸を取る選択
- **本文には付けない**（実測 0 要素）

### 3.8 縦書き

該当なし（実測 `writing-mode: vertical-*` は 0 要素）。

---

## 4. Component Stylings

### Buttons

**Tab（選択状態 / ニュース切替）**
- Background: **`#ff5577`** / Text: `#ffffff`
- Border: `1px solid transparent`
- Padding: `6px 31px 7px`
- Border Radius: **`46px`**（高さ 60px に対するピル）
- Font: 16px / **weight 700** / line-height 1.75
- Size: 高さ **60px**

**Tab（非選択）**
- Background: `transparent` / Text: **`#808080`**
- 他は選択状態と同一（`46px` / `6px 31px 7px` / 16px / 700）

**Primary（枠線型・サービス導線）**
- Background: `#ffffff` / Text: `#1d1d1d`
- Border: **`2px solid #ff5577`**
- Padding: `18px 16.96px`
- Border Radius: **`36px`**
- Font: 18px / weight 500

> **ブランド色は面ではなく枠に出す。** 面色の CTA はニュースタブだけで、本命の導線（`さくらのクラウドサイトを見る`）は**白地＋ピンクの 2px 枠**。

**Login（ヘッダー右上）**
- Background: `#ffffff` / Text: `#1d1d1d`
- Border: `1px solid #d4d4da`
- Padding: `7px 17px 6px`
- Border Radius: **`22px`** / Size: 高さ **39px**
- Font: 14px / weight 500

**Alert Link（重要なお知らせ）**
- Background: `#ffffff` / Text: **`#e11c45`**
- Border: **`2px solid #e11c45`**
- Padding: `30px 61px 30px 30px`（右に矢印分のアキ）
- Border Radius: **`8px`** / Size: 高さ **116px**
- Font: 18px / weight 500

### Cards

- Background: `#ffffff`
- Border: なし（`1px solid #ffffff` ＝実質なし）
- Border Radius: **`8px`**
- Padding: **`36px 32px 32px`**（サービスカード） / `32px 63.04px 32px 32px`（ニュース） / `32px 40px`（導入事例）
- Shadow: `var(--shadow)` = **`0 2px 1px rgba(0,0,0,.15)`**（実測 21 要素）

### Tags / Chips

- Background: **`#f4f4fa`**（ページ背景と同色）/ Text: `#1d1d1d`
- Padding: `8px 24px`
- Border Radius: **`3px`**
- Font: 14px / weight 500

### Navigation

- Link: 15px / weight 400 / line-height 1.75 / 高さ **52px** / padding `15.49px 10px`
- Submenu Link: 高さ 26px / line-height 1.75
- ドロワーの面: `#5f5f64` / 文字 `#f1f1f1`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | **16px** | カード内の要素間（gap 実測 9 件） |
| S | **24px** | リスト間（gap 2 件） |
| M | **32px** | **カードグリッドの gap（実測 12 件で最多）／カード内側の左右** |
| L | **40px** | ブロック間（gap 6 件） |
| XL | **80px** | セクション間（gap 1 件） |

### Container

- **Max Width: 1200px**（実測 12 要素で最多）
- 広いブロック: **1264px**
- カード 1 枚: **384px**（1200px ÷ 3 − gap 32px）
- 本文カラム: **540px**

### Grid

- サービス・ニュースは **3 カラム**（384px × 3 ＋ gap 32px × 2 = 1216px ≒ コンテナ）
- 導入事例は **2 カラム**（540px 級）
- 可変グリッドの gap に `24px 2%` を使う箇所がある（実測 4 件）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。ボタン・タグ・ナビはフラット** |
| 1 | **`0 2px 1px rgba(0, 0, 0, 0.15)`** | **カード（実測 21 要素）。`--shadow` 変数の正体** |
| 2 | `0 21px 42px rgba(0, 0, 0, 0.15)` | ドロワー・追従パネル（実測 3 要素） |

> **影は 2 種類だけ、どちらも同じ `rgba(0,0,0,.15)`。** 深さの違いを**不透明度ではなく blur と y オフセットだけ**で作っている（`2px/1px` → `21px/42px`）。新規実装でも alpha は `.15` に固定すること。

---

## 7. Do's and Don'ts

### Do（推奨）

- **和文は `"Noto Sans JP", sans-serif` の 2 要素だけ書く。** 環境差対策のロングチェーンは足さない
- **ウェイトは 400 / 500 / 600 / 700 の 4 段に限定する**（可変フォントなので中間値も出せるが使っていない）
- **`letter-spacing: normal` を既定にし、どの要素でも触らない**
- **32px の大見出しには `font-feature-settings: "halt"` を付ける**
- **行間は 1.20 / 1.50 / 1.70〜1.75 の 3 段**で設計する
- **ページ背景は `#f4f4fa`、カードは `#ffffff`** という 2 層で面を分ける
- CTA の角丸は **ピル（高さの半分）か 8px** のどちらかにする
- 影は **`0 2px 1px rgba(0,0,0,.15)`** のみ。alpha を変えない
- 欧文エイブロウ（`NEWS` `SERVICE`）は **Futura / 色 `#ff5577`**

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない**（このサイトは `halt`。詰まり方が変わる）
- **本文や見出しに `letter-spacing` を足さない**（実測 117/117 が `normal`）
- **ブランド色 `#ff5577` を大きな面に広げない。** 面に使うのはニュースタブだけで、主要 CTA は**白地＋2px 枠**
- **`#e11c45` をブランド色として使わない**（告知・警告専用）
- **ページ背景を `#ffffff` にしない**（`#f4f4fa` が地）
- **明朝体を混ぜない**（実測 0 要素）
- **Futura を本文に使わない**（7 要素の飾り専用。Windows で別書体になる）
- **角丸に 4px / 12px / 16px を使わない**（実装は 3 / 8 / 22 / 36 / 46 の 5 値だけ）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | `(width < 768px)` | モバイル（実測 7 件） |
| Tablet | `(width < 992px)` | タブレット以下（5 件） |
| Desktop | `(width >= 992px)` | **デスクトップ（実測 8 件で最多）** |
| Wide | `(width >= 1460px)` | 広幅（1 件） |

- **`(width >= …)` のレンジ構文**（Media Queries Level 4）を使っている。`min-width` 記法ではない

### ルートとフォントサイズ

- **`html` も `body` も 16px 固定**（1440 / 1200 / 834 / 375px の 4 幅で実測、すべて `16px` / `line-height: 28px` / `letter-spacing: normal`）
- **流体タイポグラフィは使っていない。** `rem` の px 換算は常に **1rem = 16px**

### タッチターゲット

- タブ 60px、ナビ 52px、Alert 116px は 44px を満たす
- **`会員ログイン`（39px）とタグ（実測 高さ約 38px）は 44px を下回る。** モバイルでは高さを足すこと

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Pink:   #ff5577
Alert Red:    #e11c45
Text Primary: #1d1d1d
Text Muted:   #808080 / #6d6d75
Border:       #d4d4da
Background:   #f4f4fa
Surface:      #ffffff
Overlay:      rgba(75, 75, 79, 0.9)

Font (JP):  "Noto Sans JP", sans-serif   ← これだけ
Font (EN label): Futura, "Century Gothic", sans-serif

Body Size:      16px
Line Height:    1.75（本文） / 1.50（見出し） / 1.20（ラベル）
Letter Spacing: normal（例外なし）
Weights:        400 / 500 / 600 / 700
Radius:         8px（カード） / 36px・46px・22px（ピル） / 3px（タグ）
Shadow:         0 2px 1px rgba(0,0,0,.15)
Container:      1200px / gap 32px
Root:           html 16px 固定（流体なし）
```

### プロンプト例

```
さくらインターネットのデザインシステムに従って、サービス一覧カードを作成してください。
- フォントは "Noto Sans JP", sans-serif のみ。letter-spacing は normal（絶対に足さない）
- ページ背景 #f4f4fa、カードは #ffffff / border-radius 8px / padding 36px 32px 32px
- カードの影は 0 2px 1px rgba(0,0,0,.15)
- カード見出しは 32px / weight 600 / line-height 1.5 / font-feature-settings: "halt"
- カード説明文は 16px / weight 500 / line-height 1.7 / 色 #6d6d75
- CTA は白地＋2px solid #ff5577 / border-radius 36px / 18px / weight 500
- コンテナ 1200px、3 カラム、gap 32px
```
