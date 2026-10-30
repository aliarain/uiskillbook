# DESIGN.md — 三井物産（MITSUI & CO.）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 実測日: 2026-10-26 / 対象: `https://www.mitsui.com/jp/ja/`, `/jp/ja/company/outline/profile/index.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 無彩色だけで組んだ総合商社のコーポレート。全画面の映像ヒーローに欧文1行を置き、以降はほぼグレースケールで情報を積む
- **密度**: 中。本文 14.7px / 行間比 1.24 と詰まり気味で、1画面あたりの情報量は多い
- **キーワード**: 静謐、無彩色、幾何学的サンセリフ、詰め組み

**このサイトの核心は 5 つある。**

1. **自社専用書体 `MitsuiandCoSans` を Regular / Bold の 2 ファミリーで持ち、`font-weight` では太さが一切変わらない。** `@font-face` に `font-weight` 宣言が無いため、100〜900 のどれを要求しても同じ1本が返る（実測: 欧文 `Handgloves Typography` の幅が 9 ウェイトとも **478.41px**。Bold ファミリーも 9 ウェイトとも **485.48px**）。合成太字すら起きない
2. **欧文は太さ1本、和文は4段。** 和文は受け皿の Noto Sans JP に落ちるので 400 / 500 / 600 / 700 が効く（実測 **435.7 / 450.67 / 461.73 / 468.89 / 476.05px**。800・900 は 700 と同値＝上限）。**同じ1行の中で、欧文と和文でウェイトの自由度が違う**
3. **詰めは `palt` だけで行い、`letter-spacing` は触らない。** `font-feature-settings: "palt"` が可視 423 要素中 **415 要素**（98%）。一方 `letter-spacing` は **363 要素が `normal`**。実測で `palt` は約 14% 詰まる（同一書体・同一文字列で normal 540px → palt **463.09px**）
4. **和文用と欧文用で `font-family` スタックを使い分ける。** `"Noto Sans JP"` を含むスタックが 352 要素、**抜いたスタックが 57 要素**（ヒーローの `360° business innovation` や `JP` / `EN` など欧文だけの要素）
5. **トップと下層で別世代のテンプレートが同居している。** `html` の `font-size` がトップ **10px** / 下層 **14px**（834px 以下で 15px）、クラス名が `megaMenu_overlay` / `megaMenu2027_overlay`、自社書体の配信パスも `/assets/font/` / `/common/fonts/` と分かれる

---

## 2. Color Palette & Roles

無彩色だけで構成される。**彩度のある色はブランドカラーとしては使われていない。**

### Primary（ブランドカラー）

- **Primary** (`#101010`): 見出し・ロゴ・ナビゲーションの文字色（可視 42 要素）。純黒 `#000000` ではなく、わずかに持ち上げた黒
- **面色としてのブランドカラーは存在しない。** CTA は面を持たず、下線とアイコンだけで示す（§4 参照）

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト（可視 **99 要素**で最多）
- **Text Secondary** (`#555555`): 日付・補足テキスト（可視 **67 要素**）
- **Text Inverse** (`#fafafa`): 写真・映像の上に置く白文字（可視 26 要素）。純白ではない
- **Background** (`#f5f5f5`): ページ背景（`body`）
- **Surface** (`#eeeeee`): ナビゲーションのドロップダウン面（20 要素）
- **Surface Alt** (`#f2f2f2`): 下層の定義リストの見出しセル（12 要素）
- **Border** (`#e3e3e3`): バッジの地・区切り線（8 要素）

> **実サイトはこうだが注意**: `uniqueBackgrounds` には `#27455c`（濃紺）と `#468254`（緑）も出るが、**どちらも可視テキストを持つ要素に当たっておらず、2 ページとも描画されていない**。採用しないこと。
> 同様に `#000a02` は CMP（OneTrust）のボタン色なので、サイトの設計色ではない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: `Noto Sans JP`（Google Fonts。400 / 500 / 600 が `loaded`）
- **明朝体**: 使用しない
- フォールバックは `"Hiragino Kaku Gothic Pro", Meiryo, sans-serif`

### 3.2 欧文フォント

- **サンセリフ**: `MitsuiandCoSans-Regular` / `MitsuiandCoSans-Bold`（自社配信の専用書体。幾何学的サンセリフ）
- 配信元は自社ドメイン（`/assets/font/MitsuiandCoSans-Regular.woff2`）。`font-display: swap`

### 3.3 font-family 指定

```css
/* 和文を含む要素（可視 352 要素） */
body {
  font-family: MitsuiandCoSans-Regular, "Noto Sans JP", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  font-weight: 500;                    /* ← 400 ではなく 500 が既定 */
  font-feature-settings: "palt";
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
}

/* 欧文だけの要素（可視 57 要素）— Noto Sans JP を抜く */
.heroCopy {
  font-family: MitsuiandCoSans-Regular, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
}

/* 太字 — font-weight ではなく font-family ごと差し替える（可視 12 要素） */
.title--bold {
  font-family: MitsuiandCoSans-Bold, "Noto Sans JP", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  font-weight: 700;
}
```

**`@font-face` は実サイトでは 3 件しかない**（`iconfont` / `MitsuiandCoSans-Regular` / `MitsuiandCoSans-Bold`）。いずれも `font-weight` を宣言していない。

```css
@font-face {
  font-family: MitsuiandCoSans-Regular;
  src: url("/assets/font/MitsuiandCoSans-Regular.woff2") format("woff2");
  font-display: swap;
  /* font-weight の宣言が無い ＝ 100〜900 のどの要求にもこの 1 本が返る */
}
```

### 3.4 文字サイズ・ウェイト階層

`html { font-size: 62.5% }` ＝ **10px**（トップ）。`rem` は 10px 基準で読む。

| 用途 | サイズ | ウェイト | 実測件数 |
|---|---|---|---|
| 本文・ナビゲーション | 14.7px (1.47rem) | 500 | 126 |
| 日付・補足 | 13.72px (1.372rem) | 500 | 93 |
| 小見出し | 21.2px | 500 | 7 |
| バッジ | 12px | 500 | 6 |
| ヒーロー大見出し | 約 62px（`calc()` の流体） | 500 | 1 |

**ウェイトは実測 500 が 392/423 要素（93%）**。400 は 14 要素、700 は 14 要素、600 は 3 要素。
**700 を当てるときは必ず `font-family` を `MitsuiandCoSans-Bold` に差し替える**（Regular のままでは欧文が 1px も太くならない）。

サイズは `rem` と `vw` を足した流体。デスクトップは `max()` で下限を切る。

```css
.footer_copy { font-size: calc(0.8rem + 2.13333vw); }              /* モバイル */
@media (min-width: 768px) {
  .footer_copy { font-size: max(1.2rem, 0.9rem + 0.6vw); }         /* デスクトップ */
}
```

この設計のため `font-size` に `14.7px` `13.72px`、`border-radius` に `0.96px` `1.92px` `2.88px` `4.8px` といった端数が出る。**端数は丸めずそのまま写すこと。**

### 3.5 行間・字間

- **`line-height`**: `html` に `var(--line-height-base)` ＝ **1.4**、`body` に `140%`。実測の行間比は **1.24（163 要素）/ 1.33（130 要素）/ 1.40（63 要素）** の 3 段が主。見出しほど詰まる
- **`letter-spacing`**: **`normal` が 363/423 要素**。負の値（`-0.294px` 17 要素、`-0.784px` 7 要素など）はヒーローと一部の大見出しだけ
- **字間は `em` で配らない。** 詰めは `palt` が担当し、`letter-spacing` は原則 `normal` のまま

### 3.6 禁則処理・改行ルール

- `word-break` は `normal`（7 幅すべてで確認）。日本語の禁則処理はブラウザ既定に任せる
- `word-break: break-all` も `auto-phrase` も使っていない

### 3.7 OpenType 機能

- **`font-feature-settings: "palt"` が可視 423 要素中 415 要素**（98%）
- **宣言位置は `body` ＋ コンポーネント単位の二重**。`body` に 1 行書いたうえで、`.footer_copy` `.globalMenuCard_title` `.headerMenu_title` `.homeInnovation_copy p` など各コンポーネントが
  `font-optical-sizing: auto; font-style: normal; font-feature-settings: "palt"; -webkit-font-smoothing: antialiased;` の 4 点セットを**再宣言する**（ミックスインとして展開されている）
- `palt` 以外（`tnum` / `halt` / 縦組み系）は使っていない

### 3.8 縦書き

- 使用しない（`writing-mode: vertical-rl` は 2 ページとも 0 要素）

---

## 4. Component Stylings

### Buttons

**面色を持つボタンが存在しない。** サイト本体の導線はすべて、下線か円形アイコンで示すテキストリンク。

```css
/* 円形の矢印アイコン（border-radius: 50% が 35 要素） */
.linkIcon {
  width: 4.8rem; height: 4.8rem;
  border-radius: 50%;
  border: 1px solid #e3e3e3;
  background: transparent;
}
```

> `interactive` に出る面色付きボタン（`同意する` / `すべて拒否する` / `Apply` / `設定を保存する`）は**すべて CMP（OneTrust）**。サイトの設計として採用しないこと。

### Badges / Chips

```css
.badge {
  background: #e3e3e3;
  color: #101010;
  font-size: 1.2rem;        /* 12px */
  padding: 4.8px 9.6px;
  border-radius: 1.92px;    /* 端数は vw 由来。丸めない */
}
```

### Cards

```css
.card {
  background: #ffffff;
  border-radius: 4.8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0 3px 7px 0;
}
.card--raised {
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 8px 0;   /* 可視 4 要素 */
}
```

### 写真・映像の上に置く白文字

CSS 変数はサイト全体で **3 個しかなく、うち 2 個がこれ**。

```css
:root {
  --text-shadow-mobile:
    10px 10px 25px rgba(0, 0, 0, 0.99),
    -10px 10px 25px rgba(0, 0, 0, 0.99),
    -10px -10px 25px rgba(0, 0, 0, 0.99),
    10px -10px 25px rgba(0, 0, 0, 0.99);
  --text-shadow-mobile-icon-text:
    0px 0px 10px rgba(0, 0, 0, 1),
    0px 0px 3px rgba(0, 0, 0, 1),
    10px 10px 25px rgba(0, 0, 0, 1),
    -10px 10px 25px rgba(0, 0, 0, 1),
    -10px -10px 25px rgba(0, 0, 0, 1),
    10px -10px 25px rgba(0, 0, 0, 1);
}
.heroCopy { color: #fafafa; text-shadow: var(--text-shadow-mobile); }
```

**4 方向に同じぼかしを重ねて、文字の周囲を均等に暗く落とす**という作り。オーバーレイを敷かずに写真の明度変化へ耐えさせている。

---

## 5. Layout Principles

### Spacing Scale

`rem`（10px 基準）と `vw` の併用。`padding: 0.133333vw` のような微小な vw も使う。

### Container

- ページ背景 `#f5f5f5` の上に `#ffffff` の面を重ねる
- ヒーローは全画面（1440×900 を覆う）。`heroCovered: true` なので、**計測時の背景色をページの地色と取り違えないこと**（地色は `body` の `#f5f5f5`）

### Grid

- ニュースのサムネイルは 230×154px（3 列）

---

## 6. Depth & Elevation

影は 2 種類だけ。

| 用途 | 値 | 件数 |
|---|---|---|
| 浮いた面（アクセシビリティ切替・メニュー） | `rgba(0, 0, 0, 0.12) 0 3px 8px 0` | 4 |
| カード | `rgba(0, 0, 0, 0.04) 0 3px 7px 0` | 1 |

`border-radius` は `50%`（35 要素・円形アイコン）、`4.8px`、`2.88px`、`1.92px`、`0.96px`。**px の端数は `vw` から算出された結果なので丸めない。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **太字にするときは `font-family` を `MitsuiandCoSans-Bold` に差し替える**。`font-weight` だけ上げても欧文は変わらない
- **欧文だけの要素では `font-family` から `"Noto Sans JP"` を抜く**（57 要素がそうしている）
- `font-feature-settings: "palt"` を `body` に書いて継承させる
- `letter-spacing` は `normal` のままにする
- 本文のウェイトは **500**（400 ではない）
- `html { font-size: 62.5% }` を前提に `rem` を 10px 基準で書く
- 写真の上の白文字には 4 方向の多重 `text-shadow` を使う

### Don't（禁止）

- **`MitsuiandCoSans-Regular` に `font-weight: 700` を当てない**。欧文は 1px も太くならず、和文だけが太る「ちぐはぐな太字」になる
- **`@font-face` に `font-weight` を書き足さない**。実サイトは意図的に省いており、ファミリー名で太さを切り替える設計
- `letter-spacing` を `em` で配らない（詰めは `palt` の仕事）
- `border-radius` や `font-size` の端数（`0.96px` `14.7px` `13.72px`）を整数に丸めない
- CMP（OneTrust）の面色 `#000a02` や、可視 0 の `#27455c` / `#468254` を設計色として使わない
- 彩度のある色をブランドカラーとして足さない（実サイトは無彩色のみ）

---

## 8. Responsive Behavior

### Breakpoints

実測（7 幅）では `html` / `body` は**ページによって異なる**。

| 幅 | トップ `html` | トップ `body` | 下層 `html` | 下層 `body` |
|---|---|---|---|---|
| 1440 / 1200 / 1024px | 10px | 13px | 14px | 14px |
| 834 / 768 / 767 / 375px | 10px | 13px | **15px** | **15px** |

- **トップは 7 幅とも 10px / 13px で完全固定**。流体なのは要素側（`calc(rem + vw)` と `max()`）
- **下層は 1024px と 834px の間で 14px → 15px に切り替わる**。モバイルの方が大きい
- 主なブレークポイントは **768px**（`calc()` と `max()` の切り替え）

### フォントサイズの調整

要素側の式がそのまま応答するので、`rem` だけを書き換えない。`calc(0.8rem + 2.13333vw)` / `max(1.2rem, 0.9rem + 0.6vw)` のペアで書く。

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
書体:     MitsuiandCoSans-Regular / -Bold（自社専用・欧文）＋ Noto Sans JP（和文）
太さ:     本文 500。太字は font-family を -Bold に差し替える（font-weight では変わらない）
詰め:     font-feature-settings: "palt" を body に。letter-spacing は normal
色:       #101010（見出し）/ #333333（本文）/ #555555（補足）/ #fafafa（白文字）
背景:     #f5f5f5（ページ）/ #ffffff（面）/ #eeeeee（ドロップダウン）
行間:     1.24〜1.40。見出しほど詰める
ルート:   html { font-size: 62.5% } ＝ 10px（トップ）
CTA:      面色を持たない。円形アイコン（border-radius: 50%）＋テキスト
影:       rgba(0,0,0,0.12) 0 3px 8px / rgba(0,0,0,0.04) 0 3px 7px の 2 種のみ
```

### プロンプト例

> 三井物産のコーポレートサイト風に、ニュース一覧のセクションを作ってください。
> 書体は欧文に幾何学的サンセリフ、和文に Noto Sans JP を重ねたスタックで、
> `font-feature-settings: "palt"` を body に 1 回だけ書いて継承させてください。
> `letter-spacing` は `normal` のままにしてください。
> 本文のウェイトは 500、太字は `font-weight` ではなく**太字専用のファミリー名**に差し替えてください。
> 色は無彩色のみ（見出し `#101010` / 本文 `#333333` / 補足 `#555555` / 背景 `#f5f5f5`）。
> CTA に面色は使わず、`border-radius: 50%` の円形アイコンとテキストで示してください。
