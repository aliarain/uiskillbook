# DESIGN.md — 日本郵船（NYK LINE）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-27 / 対象: `https://www.nyk.com/`, `https://www.nyk.com/profile/history/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 海運会社のコーポレートサイト。**ライト／ダークの 2 モードを 24 個の CSS 変数で切り替える**。書体は Noto Sans JP の 400 と 700 だけ、アクセントは社旗の赤 1 色
- **密度**: 高。カード型のニュース・記事一覧を 12px の小さな文字で敷き詰め、見出しだけ 700 で立てる
- **キーワード**: ダークモード、配色トークン 24 個、2 ウェイトだけ、字間ゼロ、1260px 固定幅

**このサイトの核心は5つある。**

1. **ダークモードが設計の中心にある。** `:root` に 17 個の配色トークンを置き、`html.is-darkmode` が**その 17 個を全部上書きする**。`prefers-color-scheme: dark` の環境では JS が `is-darkmode` を付け、ヘッダーのトグルでも切り替わる。日本の大企業コーポレートでは珍しい
2. **モードで変える色と、変えない色を分けている。** 24 個のうち上書きされるのは 17 個で、**残り 7 個は両モード共通**。たとえば `--theme-color-accent: #d70c18`（赤い面）はそのまま、`--theme-color-red: #d70c18 → #f58080`（赤い文字）だけ明るくしてコントラストを確保する
3. **ウェイトは 400 と 700 の 2 段だけ。** Google Fonts から Noto Sans JP の 400 / 700 を読む。実測でも 100〜500 が同じ字幅、600〜900 が同じ字幅で、**中間のウェイトは存在しない**
4. **`letter-spacing` の宣言が CSS 全文で 0 件。** 可視 295 要素（トップ）/ 274 要素（下層）すべて `normal`。`font-feature-settings` も 0
5. **デスクトップは 1260px の固定幅。** `body { min-width: 1260px; max-width: 1920px; margin: 0 auto }`。ウィンドウを狭めてもレイアウトは縮まず、767.98px 以下でモバイル版に切り替わる

---

## 2. Color Palette & Roles

### Design Tokens（これがこのサイトの本体）

`:root` が 17 個、`html.is-darkmode` が同じ 17 個を上書きする。

| トークン | Light | Dark | 用途 |
|---|---|---|---|
| `--theme-color-main` | `#333333` | `#e0e0e0` | 主要な文字・罫 |
| `--theme-color-sub` | `#f3f5f7` | `#383838` | 面（カード・バッジ） |
| `--theme-color-sub3` | `#ffffff` | `#121212` | 反転した面の上の文字 |
| `--theme-color-sub4` | `#717171` | `#a1a1a1` | 弱い文字・日付 |
| `--theme-color-sub5` | `#d70c18` | `#ffffff` | **モードで役割が入れ替わる**（赤 ↔ 白） |
| `--theme-color-red` | `#d70c18` | `#f58080` | **赤い文字**。暗い地では明度を上げる |
| `--bg-color-base` | `#ffffff` | `#121212` | **ページ背景** |
| `--bg-color-sub` | `#888888` | `#4b4b4b` | 補助面（ページトップ等） |
| `--text-color-base` | `#333333` | `#e0e0e0` | **本文** |
| `--text-color-red` | `#d70c18` | `#f58080` | 強調の文字 |
| `--link-color-link` | `#333333` | `#e0e0e0` | リンク（未訪問） |
| `--link-color-visited` | `#333333` | `#e0e0e0` | リンク（訪問済み） |
| `--link-color-hover` | `#d70c18` | `#e0e0e0` | **hover。ライトだけ赤くなる** |
| `--link-color-active` | `#333333` | `#e0e0e0` | リンク（押下） |
| `--border-color` | `#dddddd` | `#a1a1a1` | 罫線 |
| `--icon-color` | `#d70c18` | `#ffffff` | アイコン |
| `--icon-color2` | `#ffffff` | `#d70c18` | **反転アイコン（上と入れ替わる）** |

### モード共通（上書きされない 7 個）

| トークン | 値 | 用途 |
|---|---|---|
| `--theme-color-accent` | **`#d70c18`** | **社旗の赤。面として使う色はモードで変えない** |
| `--theme-color-bright` | `#ffffff` | 常に白 |
| `--text-color-bright` | `#ffffff` | 赤面の上の文字 |
| `--theme-color-sub2` | `#888888` | 中間グレー |
| `--icon-color3` | `#888888` | 無効アイコン |
| `--text-color-placeholder` | `#999999` | 入力欄のプレースホルダ |
| `--text-color-disable` | `#717171` | 無効テキスト |

> **赤の扱いが 2 種類に分かれているのが要点。**
> **面の赤**（`--theme-color-accent` / 検索ボタンの `#d70c18`）は両モードで同じ。白文字が乗るのでコントラストが変わらない。
> **文字の赤**（`--theme-color-red` / `--text-color-red`）はダークで `#f58080` に持ち上げる。`#d70c18` を `#121212` の上に置くとコントラストが足りないため。

### 実測された色（ダークモード時）

- **Text Base** (`#E0E0E0`): 可視 171 要素（トップ）/ 207 要素（下層）で最多
- **Accent** (`#D70C18`): 文字 82 要素（ハッシュタグの `#`）・面 4 要素（検索ボタン）
- **Muted** (`#A1A1A1`): 日付・補足（28 / 52 要素）
- **Surface** (`#383838`): カテゴリバッジの面（30 要素）
- **Background** (`#121212`): ページ背景（可視 131 要素）
- **Footer Link** (`#CCCCCC`): フッターの補助リンク（7 要素）

### 切り替えの実装

```css
/* 実サイトの CSS は 3 桁 hex で書いているが、ここでは 6 桁に展開して示す */
:root            { --bg-color-base: #ffffff;  --text-color-base: #333333;  /* …17個 */ }
html.is-darkmode { --bg-color-base: #121212;  --text-color-base: #e0e0e0;  /* …同じ17個 */ }

body {
  background-color: var(--bg-color-base);
  color: var(--text-color-base);
  transition: background-color .25s cubic-bezier(.4, 0, .2, 1);   /* ★切替をアニメーションさせる */
}
```

ロゴは CSS では切り替えず、**`class="js-mode-swap-image"` を付けた `<img>` の `src` を JS が差し替える**（`cmn_logo01.svg` ↔ `cmn_logo01_darkmode.svg`）。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一の和文）**: **Noto Sans JP**（Google Fonts、**400 と 700 の 2 本だけ**）。実測 295 要素（トップ）/ 221 要素（下層）
- `@font-face` は `unicode-range` で分割されるため **248 件**宣言され、実際のフォント要求は **32 件**。`unloaded` が大量に出るのは正常
- 明朝体は使わない

### 3.2 欧文フォント

- 専用の欧文 Web フォントは無い。英数字は Noto Sans JP の欧文グリフ
- **例外**: 沿革ページの年号（`1885` `1886` …）だけ `font-family: Arial, Helvetica, "sans-serif"` で **53 要素**。44px / weight 700

### 3.3 font-family 指定

```css
/* 本文・UI（body に 1 回） */
body {
  font-family: "Noto Sans jp", "Yu Gothic", "Hiragino Kaku Gothic Pro", "Hiragino Sans",
               Meiryo, Osaka, Arial, "MS PGothic", sans-serif;
}
```

**2 つ、そのまま写してはいけない書き方がある。**

1. **`"Noto Sans jp"` は小文字の `jp`。** CSS のファミリー名照合は ASCII 大文字小文字を区別しないので、`@font-face` の `Noto Sans JP` に正しく当たる。**実害は無いが、新規実装では `"Noto Sans JP"` と書く**
2. **沿革ページの `Arial, Helvetica, "sans-serif"` は generic family をクォートしている。** 引用符を付けると「`sans-serif` という名前のフォント」を探す指定になり、generic キーワードとして機能しない。Arial / Helvetica が両方無い環境では受け皿が消える。**正しくは `Arial, Helvetica, sans-serif`**

### 3.4 文字サイズ・ウェイト階層

**`html { font-size: 62.5% }` ＝ 10px、8 幅すべてで固定。`body` だけ 768px を境に 16px / 14px に切り替わる。**

| Role | Size | Weight | Line Height | Letter Spacing | 実測 |
|------|------|--------|-------------|----------------|------|
| Year (沿革) | 72px / 44px | 700 | 1.0 | normal | Arial。44px が 52 要素 |
| Page Title (h1) | 32px | 700 | 44.8px (1.4) | normal | `沿革` |
| Section (h2) | 26px / 24px | 700 | 36.4px (1.4) | normal | `創業から航路拡大へ` |
| Lead | 22px | 700 | 30.8px (1.4) | normal | 導入文（53 要素） |
| Card Title (h3) | 18px | 700 | 25.2px (1.4) | normal | 記事タイトル（23 要素） |
| Body | **16px** | 400 | 25.6px (**1.6**) | normal | **下層 119 要素で最多** |
| Nav / UI | 14px | 400 | 19.6px (1.4) | normal | ヘッダーのユーティリティ |
| Meta / Tag | **12px** | 700 | 16.8px (1.4) | normal | **トップ 218 要素で最多**。タグ・バッジ・日付 |

**ウェイトの実測（隠し div の字幅）:**

| 指定 | 字幅 | 出る面 |
|------|------|--------|
| 100 / 200 / 300 / 400 / 500 | **576.53px** | Regular（400） |
| 600 / 700 / 800 / 900 | **588.38px** | Bold（700） |

→ 読み込んでいるのが 400 と 700 の 2 本だけなので、**500 を指定すると 400 で、600 を指定すると 700 で出る**。分布も 400 と 700 の 2 つだけ（トップ 59 / 236、下層 109 / 165）。

> **トップページの文字は 12px が 218 要素で最多。** タグ・バッジ・カテゴリ名が大量に並ぶ設計で、本文サイズの 16px は下層ページに出てくる。

### 3.5 行間・字間

- **行間の実測分布**

| 比率 | トップ | 下層 | どこ |
|------|--------|------|------|
| **1.40** | 209 | 16 | **カード・タグ・ナビ（トップの既定）** |
| **1.60** | 17 | 100 | **本文（`body` の既定。16px → 25.6px）** |
| 1.00 | 69 | 158 | 年号・日付・1 行で収まるラベル |
| 1.20 | — | — | — |

- **`body` の `line-height` は 1.6**（16px → 25.6px、14px → 22.4px）。768px を跨いでも比率は 1.6 のまま
- **字間はゼロ。CSS 全文に `letter-spacing` の宣言が 1 件も無い。** 可視要素は 2 ページとも 100% が `normal`

### 3.6 禁則処理・改行ルール

```css
body {
  overflow-wrap: break-word;
  word-break: break-word;
}
```

`word-break: break-all` も CSS に存在するが、`body` の既定は `break-word`。

### 3.7 OpenType 機能

**`font-feature-settings` の宣言は CSS 全文で 0 件。可視要素も 0。約物は詰めない。**

実測では Noto Sans JP に `palt` を当てると 700px → **561.64px**（−19.8%）になるので、**書体は対応しているが使っていない**。再現するときも足さないこと。

### 3.8 縦書き

該当なし。`writing-mode` が `horizontal-tb` でない要素は 2 ページとも 0。

---

## 4. Component Stylings

### Buttons

**Search（アクセント）**
- Background: `var(--theme-color-accent)` = `#D70C18`（**両モード共通**）
- Text: `var(--text-color-bright)` = `#FFFFFF`
- Font: 14px / weight 400 / Padding: `5px 15px 5px 36px`（左に虫めがねアイコン）/ Radius: `0`

**Search Submit（反転）**
- Background: `var(--theme-color-main)`（Dark では `#E0E0E0`、Light では `#333333`）
- Text: `var(--theme-color-sub3)`（Dark では `#121212`、Light では `#FFFFFF`）
- Font: 18px / weight 700 / Padding: `5px 40px 7px 14px` / Radius: `0`

> **この 2 つで「変えない赤」と「反転するモノクロ」の両方が見える。**

### Tags（ハッシュタグのピル）

- Background: `var(--bg-color-base)`（地と同色）
- Text: `var(--text-color-base)` / 12px / weight 700 / line-height 16.8px
- Border: `1px solid var(--text-color-base)`
- **Border Radius: `13px`**（可視 83 要素）
- Padding: `1.8px 9px 2px 20px`（**左 20px は `#` を重ねるための余白**。`#` は `--theme-color-accent` で別に描く）

### Badges（カテゴリ / サブカテゴリ）

| 種別 | 面 | 枠 | 文字 |
|------|----|----|------|
| **カテゴリ** | `var(--theme-color-sub)`（Dark `#383838`） | `1px solid` 同色 | `var(--text-color-base)` |
| **サブカテゴリ** | `var(--bg-color-base)`（Dark `#121212`） | `1px solid var(--theme-color-sub4)`（Dark `#A1A1A1`） | `var(--text-color-base)` |

どちらも 12px / weight 700 / Padding `0 10px 2px` / **Radius `0`**。

### Cards

- Background: 地と同色（面を敷かず、罫線と余白で区切る）
- Border Radius: `0`
- Shadow: **ほぼ使わない**（下記）

---

## 5. Layout Principles

### Container

```css
body { min-width: 1260px; max-width: 1920px; margin: 0 auto; }
```

**デスクトップは 1260px 固定。** ウィンドウを 1260px 未満にしても中身は縮まず横スクロールになる（767.98px 以下でモバイル版に切り替わるまで）。`max-width: 1920px` で超ワイドでは中央寄せ。

### Spacing Scale

明示的なトークンは無い。`padding` の実測から:

| Token | Value | 用途 |
|-------|-------|------|
| XS | `2px` | バッジの下端調整 |
| S | `9px` / `10px` | タグ・バッジの左右 |
| M | `14px` / `15px` | ボタンの左右 |
| L | `20px` | タグの左（`#` の逃げ） |
| XL | `36px` / `40px` | 検索ボタンのアイコン側 |

### Hero

```
<video class="home-hero__video" src="/video/index_video01.mp4">   1920×716px
<img src="/img/index_tx01.webp">                                   949×312px（top: 312px）
```

**ヒーローの大見出し「これまでを極め、これからを拓く。」はテキストではなく webp 画像。** DOM を全走査しても該当テキストは出てこない（`fontSize` の最大は 22px）。**ここを Web フォントで実装し直さないこと。**

---

## 6. Depth & Elevation

**影はほとんど使わない。**

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | **カード・バッジ・タグ・ボタンを含むほぼ全要素** | — |
| 1 | `rgba(0, 0, 0, 0.1) 0px 6px 12px 0px` | 公式 SNS アカウントのポップオーバー | **1 要素だけ** |

> 下層ページ（沿革）は **影 0 種**。奥行きは影ではなく `--theme-color-sub`（`#383838` / `#f3f5f7`）の面で表す。
> **ダークモードで黒い影を使っても見えない**ため、面色で段差を作るのは理にかなっている。

### Border Radius

| 値 | 用途 | 実測 |
|----|------|------|
| **`13px`** | ハッシュタグのピル | 83 要素（トップ） |
| `50%` | 丸いアイコン | 1 要素 |
| `0` | **それ以外すべて** | — |

---

## 7. Do's and Don'ts

### Do（推奨）

- **色は必ず CSS 変数経由で書く。** `:root` に 17 個、`html.is-darkmode` で同じ 17 個を上書きする構造を崩さない
- **モードで変えない 7 個（`--theme-color-accent` ほか）を分けて置く。** 面の赤は固定、文字の赤だけ `#d70c18 → #f58080` に持ち上げる
- `body` に `transition: background-color .25s cubic-bezier(.4,0,.2,1)` を置く
- 書体は `"Noto Sans JP"` の **400 と 700 だけ**
- 本文 16px / 行間 **1.6**、カード・タグ 12px / 行間 **1.4**
- ハッシュタグは `border-radius: 13px` + 地と同色の面 + 1px 枠、左 padding 20px
- デスクトップは `min-width: 1260px` の固定幅、`max-width: 1920px` で中央寄せ
- モードで差し替える画像には `js-mode-swap-image` のような目印クラスを付け、`src` を切り替える

### Don't（禁止）

- **`letter-spacing` を書かない。** CSS 全文に宣言が 0 件
- **`font-feature-settings: "palt"` を足さない**
- **`font-weight` に 500 / 600 を使わない。** 400 と 700 しか読んでいないので、500 は 400 に、600 は 700 に丸められる
- **黒い影で奥行きを作らない。** ダークモードで消える。面色（`--theme-color-sub`）で段差を表す
- **色を hex で直書きしない。** ダークモードで追従しなくなる
- **ヒーローの大見出しをテキストで組み直さない**（実サイトは `index_tx01.webp`）
- `font-family: Arial, Helvetica, "sans-serif"` と書かない。**実サイトは沿革ページでこう書いているが、クォートした generic family は受け皿として機能しない。** 正しくは `Arial, Helvetica, sans-serif`
- `"Noto Sans jp"` と小文字で書かない（当たりはするが `"Noto Sans JP"` が正しい）
- `border-radius` を 13px 以外に足さない

---

## 8. Responsive Behavior

### Breakpoints

```css
@media print, screen and (min-width: 768px)                        /* デスクトップ／タブレット */
@media only screen and (min-width: 768px) and (max-width: 1259.98px) /* 中間（1260px 未満） */
@media only screen and (max-width: 767.98px)                       /* モバイル */
@media print, screen and (min-width: 1260px)                       /* 本来のデスクトップ */
@media screen and (max-width: 480px)                               /* 小さいモバイル */
```

| Name | Width | body font-size | line-height |
|------|-------|----------------|-------------|
| Mobile | ≤ 767.98px | **14px** | 22.4px (1.6) |
| Tablet | 768–1259.98px | 16px | 25.6px (1.6) |
| Desktop | ≥ 1260px | 16px | 25.6px (1.6) |

- **`html` は 8 幅すべて 10px で固定。** 流体もクランプも無い
- `body { min-width: 1260px }` のため、768〜1259px では横スクロールが出る
- 375px では `min-width` が外れ、横スクロールは出ない

### カラースキーム

```css
@media (prefers-color-scheme: dark) { /* JS が html に .is-darkmode を付ける */ }
```

OS の設定に従って初期状態が決まり、ヘッダーの「ダークモード」トグルで上書きできる。

### タッチターゲット

- 検索ボタンの実高は `5px + 19.6px + 5px` ＝ 29.6px。**44px 基準を満たしていない**。新規実装では縦の padding を増やす

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
--- Light ---
Background: #ffffff   Text: #333333   Muted: #717171
Surface:    #f3f5f7   Border: #dddddd  Link hover: #d70c18
--- Dark ---
Background: #121212   Text: #e0e0e0   Muted: #a1a1a1
Surface:    #383838   Border: #a1a1a1  Link hover: #e0e0e0
--- 共通 ---
Accent (面):  #d70c18      ← モードで変えない
Accent (文字): #d70c18 / #f58080  ← ダークでは明度を上げる
On accent:    #ffffff

Font: "Noto Sans JP", "Yu Gothic", "Hiragino Kaku Gothic Pro", "Hiragino Sans",
      Meiryo, Osaka, Arial, "MS PGothic", sans-serif
Weights:  400 / 700 のみ
Root:     html { font-size: 62.5% }  ← 10px 固定
Body Size: 16px（≤767px は 14px）
Line Height: 1.6（本文）/ 1.4（カード・タグ）
Letter Spacing: normal（宣言 0 件）
font-feature-settings: 指定しない
Radius: 13px（タグのピル）/ 50%（丸アイコン）/ それ以外は 0
Shadow: 原則 none
Container: min-width 1260px / max-width 1920px
Breakpoints: 480 / 768 / 1260px
```

### プロンプト例

```
日本郵船のデザインシステムに従って、ニュース一覧カードを作成してください。
- 色はすべて CSS 変数で書く。:root にライトの 17 トークン、html.is-darkmode で同じ 17 個を上書きする
- --theme-color-accent: #d70c18 は両モード共通。文字の赤だけ #d70c18 → #f58080 に持ち上げる
- body に background-color: var(--bg-color-base) / color: var(--text-color-base) と
  transition: background-color .25s cubic-bezier(.4,0,.2,1) を置く
- font-family は "Noto Sans JP" 先頭の OS ローカル混在チェーン、ウェイトは 400 と 700 だけ
- letter-spacing と font-feature-settings は書かない
- カードタイトル 18px / 700 / 行間 1.4、日付 12px / 700 / var(--theme-color-sub4)
- カテゴリバッジは面 var(--theme-color-sub) / radius 0 / padding 0 10px 2px / 12px / 700
- ハッシュタグは radius 13px / 地と同色 / 1px solid var(--text-color-base) / padding 1.8px 9px 2px 20px
- 影は使わない。段差は var(--theme-color-sub) の面で作る
- コンテナは min-width 1260px、767.98px 以下で本文を 14px に落とす
```
