# DESIGN.md — Autify（オーティファイ）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-04 / 対象: `https://autify.jp/`, `/products/nexus`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ティールグリーン1色を軸にした BtoB SaaS。白と淡いブルーグレーの面で段を作り、角丸と薄い影で「触れる」要素を示す。写真ではなくイラストと図で説明する
- **密度**: 中程度。見出し 40px と本文 16px の2段で読ませ、実績数値（最大86%削減）だけ 42px で跳ね上げる
- **キーワード**: ティールグリーン、Webflow、和欧二層、淡いブルーグレー、数値の跳ね

**このサイトの核心は4つある。**

1. **欧文を先頭に置いた和欧二層スタック。** `Roboto, "Noto Sans JP", system-ui, sans-serif` が **トップ 201/219 要素・下層 149/181 要素**。Roboto が欧文と数字を、Noto Sans JP が和文を引き受ける。**和文を先頭に置かない設計**
2. **`letter-spacing` の設計がページ間で揃っていない。** トップは **`normal` が 193/219 要素**、下層（`/products/nexus`）は **`0.2px` が 117/181 要素**。同じサイトで「字間を足さない」と「0.0125em 足す」が同居している（下記 3.5）
3. **本文の色もページ間で違う。** トップの本文は **純黒 `#000000`（78 要素）**、下層は **`#333333`（82 要素）**。CSS 変数 `--aut-black: #333` は宣言されているが、**トップはそれを使っていない**
4. **`font-weight: 800` を当てている要素があるが、Web フォントに 800 は無い。** Google Fonts の読み込みは `Noto Sans JP:300,400,500,600,700` / `Roboto:300,400,500,600,700` で、**800 は Inter にしか存在しない**。トップの `49` `80`（42px）が 800 指定で、**実際にはブラウザの合成太字で出ている**

**`font-feature-settings: "palt"` は 1 要素も使っていない**（CSS 全文の `palt` 出現も 0 回）。`"liga"` が 1 要素だけ。縦組みも 0 件。

**サイトは Webflow 製**（`@font-face` に `webflow-icons`、CSS は `cdn.prod.website-files.com` 配信、ブレークポイントが `991 / 767 / 479px` ＝ Webflow 既定）。CSS Custom Properties は **26 個すべて自社トークン**（プラットフォーム由来 0）。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 変数 | 実測 |
|------|--------|------|------|
| **Autify Green** | **`#00b398`** | `--aut-blue--autify-green` | **文字色 47 要素・面色 17 要素**。CTA の面、強調語（`QA エージェント`）、数値、アウトライン CTA の文字と枠 |
| Nocode Green | `#12ccb0` | `--aut-blue--nocode-green` | 下層の `資料ダウンロード` ボタン **2 要素**のみ。`#00b398` より明るい |
| Tint Green | `#dffdf9` | — | ヒーロー上部のタグ（`AI時代のソフトウェアテストプラットフォーム`）の面 **1 要素**。文字は `#00b398` |

> **実装の実態として緑が2つある。** `#00b398` がブランド色で、`#12ccb0` は下層の1ボタンだけ。**新規実装では `#00b398` に寄せる。**

### Product Accent（製品別アクセント・宣言はあるが可視要素が少ない）

| 変数 | 値 | 実測 |
|------|----|------|
| `--pro-service` | `#ff4478` | Pro Service 用。計測した 2 ページでは**面として可視 0 要素** |
| `--genesis` | `#6946e6` | Genesis 用。同じく**可視 0 要素** |
| `--lp_cta_orange` | `#ff5c35` | LP の CTA 用。同じく**可視 0 要素** |
| `--rose` | `#e4006e` | 同上 |

> **宣言 ≠ 実装。** 製品別アクセントは変数としては並んでいるが、トップと Nexus ページでは一度も塗られていない。**製品ページを作るときだけ使う色**として扱う。

### Gradient

- **`linear-gradient(90deg, #00b398, #805ad5)`**（**可視 1 要素**）。トップ下部の CTA 帯 `貴社のボトルネックを特定し、最適なAIアプローチで最速解決へ`。**グラデはこの1箇所だけ**

### Neutral（ニュートラル）

| 役割 | 実装値 | 変数 | 実測 |
|------|--------|------|------|
| **Text Primary（トップ）** | **`#000000`** | `--black` | **可視 78 要素**。トップの見出し・本文 |
| **Text Primary（下層）** | **`#333333`** | `--aut-black` | **可視 82 要素**。下層の見出し・本文 |
| Text on Dark | `#ffffff` | `--white` | 可視 55 要素（CTA の文字、濃色面の上） |
| Text Nav | `#1b1b1b` | — | グローバルナビ **8 要素** |
| Text Muted | `#718096` | `--line-gray` | 業種バッジの文字 **8 要素** |
| Text Sub | `#64748b` | — | 数値カードのラベル（`テスト実行時間`）**3 要素** |
| Text Sub 2 | `#4a5568` | `--accent-gray` | タブのラベル **3 要素** |
| Text Form | `#212d3a` | — | 下層フォームのラベル **18 要素** |
| Border | `#cbd5e0` | `--border-gray` | バッジ・ヘッダー CTA の枠 |
| **Surface** | **`#f6f9fb`** | `--aut-gray` | **可視 33 要素**。製品カード・セクションの面。**最も多い面色** |
| Surface Badge | `#f0f5f9` | — | 業種バッジの面 **26 要素** |
| Surface Form | `#f5f8fa` | — | 下層フォームの入力欄 **17 要素** |
| Surface Dark | `#1a202c` | — | トップ最下部の CTA セクション **1 要素** |
| Image BG | `#edf2f7` | `--image-bg` | 画像の下敷き |
| Required | `#ff0000` | — | フォームの必須マーク `*` **11 要素** |
| **Background** | **`#ffffff`** | `--white` | ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`） |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**（Google Fonts）。ウェイトは **300 / 400 / 500 / 600 / 700** を読み込む
- 明朝体は使わない

### 3.2 欧文フォント

- **サンセリフ（既定）**: **Roboto**（Google Fonts、300〜700）。**和文より先に置かれており、欧文と数字は Roboto で出る**
- **サンセリフ（番号専用）**: **Inter**（Google Fonts、300〜900）。トップの手順番号 `01` `02` `03` **5 要素**のみ
- **アイコン**: `Material Symbols Rounded`（`login` 1 要素）

### 3.3 font-family 指定

```css
/* 本文・UI（既定） */
font-family: Roboto, "Noto Sans JP", system-ui, sans-serif;

/* 下層フォームなど一部 */
font-family: "Noto Sans JP", sans-serif;

/* 手順番号 01 / 02 / 03 */
font-family: Inter, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先。** Roboto を先頭に置き、和文グリフだけ Noto Sans JP に落とす二層構成。数字・英字の見た目を Roboto に統一する狙い
- `system-ui` を挟んでから `sans-serif` に落ちる
- **下層フォームだけ `"Noto Sans JP", sans-serif`（Roboto なし）**になっている箇所がある（31 要素）。**新規実装では既定スタックに揃える**

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Hero Heading** | Roboto + Noto Sans JP | **40px** | **700** | **1.50** (60px) | normal | `テストはQA エージェントの仕事。` **トップ h1** |
| Section Heading | 同上 | 40px | 400 / 700 | 1.40 (56px) | normal | 下層の h2 |
| **Stat Number** | 同上 | **42px** | **800** | 1.10 | 0.52px | `49` `80`。**800 は Web フォントに無く合成太字** |
| Step Number | Inter | 48px | 400 | 1.00 | normal | `01` `02` `03` |
| Sub Heading | 同上 | 32px | 700 | 1.40 | normal | `Autifyの活用例` |
| Card Heading | 同上 | 28px | 700 | 1.30 | normal | 下層カード見出し |
| Lead | 同上 | 24px | 400 | 1.40 | normal | リード文 |
| Product Name | 同上 | 20px | 700 | 1.38 | normal | `Autify Nexus` |
| Item Heading | 同上 | 18px | 700 | 1.70 | normal / 0.2px | 事例タイトル・機能名 |
| **Body** | 同上 | **16px** | **400** | **1.50** (24px) | normal / 0.2px | **本文。body の既定値そのまま** |
| Body Small | 同上 | 15px | 400 | 1.60 | 0.2px | 補足段落 |
| UI Label | 同上 | 14px | 400 / 500 | 1.50 (21px) | normal | グローバルナビ・ボタン |
| Form Label | Noto Sans JP | 13px | 400 | 1.54 | 0.2px | 下層フォーム |
| Tab Label | 同上 | 13px | 700 | 1.20 | **1.56px** | `Autifyとは何か` **字間が最大** |
| Badge | 同上 | 11px | 700 | 1.60–1.70 | normal / 0.2px | `IT・ソフトウェア` 等の業種 |
| Tag | 同上 | 12px | 500 | 1.20 | normal | ヒーロー上部のタグ |

### 3.5 行間・字間

- **本文の行間**: **1.50**（`body` が `16px / 24px`）。実測でもトップ 70 要素・下層 59 要素で最多
- **見出しの行間**: **1.40**（58 要素）。ヒーロー見出しだけ **1.50**、カード見出しは **1.30**、数値は **1.10**
- **CTA・ボタンの行間**: **1.20**（48 要素）
- **読み物の行間**: **1.70**（事例の説明文、19 要素）

#### 字間はページによって違う（実測の事実）

| ページ | 最多の `letter-spacing` | 件数 |
|--------|------------------------|------|
| トップ `/` | **`normal`** | **193 / 219 要素** |
| 下層 `/products/nexus` | **`0.2px`**（= 16px 基準で 0.0125em） | **117 / 181 要素** |

> **`body` の `letter-spacing` は両ページとも `normal`。** 下層の 0.2px は要素側で当てている。**どちらか一方に揃えるなら `normal` 側**（トップ＝ブランドの顔の設計）。
> 例外的に字間を足しているのは **タブラベルの `1.56px`（13px / 約 0.12em、5 要素）**、**CTA の `0.8px`（16–18px / 約 0.05em、8 要素）**、**数値の `0.52px`**。
> 逆に **事例タイトルだけ `-0.16px` と詰めている**（6 要素）。

**ガイドライン**:
- **本文に字間を足さない。** 足すのは**タブ・CTA・数値の3つだけ**
- **行間は 1.5 を既定にし、見出しだけ 1.4 に詰める。** 事例の読み物だけ 1.7 に広げる

### 3.6 禁則処理・改行ルール

```css
/* 実測: body に効いている */
line-break: strict;        /* ★このサイトの既定。厳格な禁則 */
word-break: normal;
overflow-wrap: normal;
```

- **`line-break: strict` が `body` に効いている**（4 幅すべてで実測）。小書きのかな（ゃ・ゅ・ょ・っ）や長音符を行頭に送らない厳格な禁則
- `word-break: auto-phrase` は**使っていない**（CSS 全文で 0 回）
- CSS 全文の `word-break` 宣言は 6 回（個別要素の上書き）

### 3.7 OpenType 機能

```css
/* このサイトは palt を使わない */
font-feature-settings: normal;
```

- **`palt` は 1 要素も無く、CSS 全文にも 0 回**。Noto Sans JP の素のベタ組みをそのまま使う
- `"liga"` が 1 要素だけ（アイコンフォント用）

### 3.8 縦書き

該当なし（`writing-mode: vertical-rl` は 0 件）。

---

## 4. Component Stylings

### Buttons

**Primary（面）**
- Background: `#00b398`
- Text: `#ffffff`
- Border Radius: **4px**（本体）／ **20px**（ヘッダーの小サイズ）
- Font Size: 14px (weight 500) / 16px (weight 400) / 13px (weight 700・ヘッダー)
- Line Height: 1.50（16px 時）／ 1.20（13px 時）
- Letter Spacing: normal
- Border: なし（ヘッダーの 20px 版のみ `1px solid #cbd5e0`）

**Secondary（アウトライン・白地）**
- Background: `#ffffff`
- Text: `#00b398`
- Border: `1px solid #00b398`
- Border Radius: **4px**
- Font Size: 16–18px / Weight **600** / **Letter Spacing `0.8px`**

**Secondary（アウトライン・濃色面の上）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Border Radius: 4px / Font Size 18px / Weight 600 / Letter Spacing 0.8px

**Tertiary（下層の強調ボタン）**
- Background: `#12ccb0` / Text `#ffffff` / Radius 4px / 18px / Weight 600

### Badges

- **業種バッジ**: Background `#f0f5f9`、Text `#718096`、Radius **4px**、11px / Weight 700
- **ヒーロータグ**: Background `#dffdf9`、Text `#00b398`、Radius **30px**、12px / Weight 500

### Inputs（下層フォーム）

- Background: `#f5f8fa`
- Border Radius: **3px**
- Font Size: 13px
- Text: `#212d3a`
- 必須マーク `*`: `#ff0000`

### Cards

- Background: `#ffffff` または `#f6f9fb`
- Border Radius: **8px**（説明カード 20 要素）／ **12px**（記事カード）／ **5px**（最多 46 要素・画像の角）
- Shadow: `rgba(0,0,0,0.05) 0 0 10px`（12 要素）

> **角丸は 1 種類に統一されていない。** 実測で **5px / 8px / 4px / 40px / 100% / 20px / 12px / 30px** の 8 種。**新規実装では ボタン=4px・カード=8px・画像=5px の3値に絞ると実サイトと整合する。**

---

## 5. Layout Principles

### Spacing Scale（gap の実測）

| Token | Value | 実測件数（トップ） |
|-------|-------|-----------------|
| XS | **8px** | 24 |
| S | **16px** | 20 |
| M | **24px** | 12 |
| L | 40px | 3（下層） |
| XL | **56px** | 6 |

### Container

- **Max Width: 1200px**（トップ 8 回・下層 10 回で最多）
- 他に 1280px / 1380px（全幅帯）、370–400px（カード）

### Grid

- カードは 3 列（370px / 400px）が基本。gap は 16px または 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 | 実測 |
|-------|--------|------|------|
| 0 | `none` | 大半の要素 | — |
| 1 | `rgba(0,0,0,0.05) 0 0 10px` | 説明カード | **12 要素** |
| 2 | `rgba(0,0,0,0.1) 0 2px 12px` | グローバルナビのドロップダウン | 1 要素 |
| 3 | `rgba(0,0,0,0.15) 0 0 24px` | 下層のフォーム・CTA パネル | 2 要素 |

> **影は「ぼかしのみ・オフセットほぼ 0」が基本**（`0 0 10px` / `0 0 24px`）。縦オフセットを付けるのはナビのドロップダウン（`0 2px 12px`）だけ。

---

## 7. Do's and Don'ts

### Do（推奨）

- `font-family` は **`Roboto, "Noto Sans JP", system-ui, sans-serif`** をそのまま使う（欧文先頭）
- 本文は **16px / line-height 1.50 / letter-spacing normal**
- CTA は **`#00b398` の面＋白文字＋radius 4px**。第2 CTA は**白地＋`#00b398` の枠と文字＋letter-spacing 0.8px**
- 面を切り替えるときは **`#f6f9fb`**（最多の面色）を使う
- `line-break: strict` を `body` に書く

### Don't（禁止）

- **`font-weight: 800` / `900` を当てない。** 読み込んでいるのは 300–700 で、800 は合成太字になる（実サイトの数値 42px がそれ）
- **`palt` を足さない。** このサイトは字詰めをしない設計
- 本文に `letter-spacing` を足さない（下層にある 0.2px は実装のばらつきで、揃えるなら `normal`）
- 本文色に `#000000` と `#333333` を混ぜない（**新規実装では `#333333` に統一**）
- 製品アクセント（`#ff4478` / `#6946e6` / `#ff5c35`）を通常ページで使わない

---

## 8. Responsive Behavior

### Breakpoints（Webflow 既定）

| Name | Width | 実測件数 |
|------|-------|---------|
| Mobile | ≤ **479px** | 4 |
| Mobile L | ≤ **767px** | 4–6 |
| Tablet | ≤ **991px** | 4 |
| Desktop | > 991px | — |
| Wide | ≥ 1280px / 1440px / 1920px | 1–2 |

### ルートは固定・見出しだけ流体

- **`html` / `body` は 4 幅（1440 / 1200 / 834 / 375px）すべてで 16px 固定**。`rem` の換算は常に 16px 基準でよい
- **ヒーロー見出し（h1）だけ流体**: 1440px で **40px** → 1200px で **39.99px** → 834px で **30px** → 375px で **24.26px**
- **本文（p）は 834px 以下で 16px → 12px に落ちる**。モバイルの本文は 12px / line-height 18px（1.50 は維持）

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #00b398
Surface: #f6f9fb
Text Color: #333333
Background: #ffffff
Font: Roboto, "Noto Sans JP", system-ui, sans-serif
Body Size: 16px
Line Height: 1.5
Letter Spacing: normal（本文には足さない）
Button Radius: 4px / Card Radius: 8px
Container: 1200px
line-break: strict
```

### プロンプト例

```
Autify のデザインシステムに従って、料金プランの比較カードを3枚作成してください。
- フォント: Roboto, "Noto Sans JP", system-ui, sans-serif
- 本文: 16px / line-height 1.5 / letter-spacing normal
- カード: 背景 #ffffff、角丸 8px、影 rgba(0,0,0,0.05) 0 0 10px
- セクションの地色: #f6f9fb
- 推奨プランの CTA: 背景 #00b398、白文字、角丸 4px、16px / weight 400
- 他プランの CTA: 白地、文字と枠 #00b398、角丸 4px、18px / weight 600、letter-spacing 0.8px
- 価格の数字: 42px。ただし font-weight は 700 まで（800 は合成太字になるので使わない）
- palt は使わない。body に line-break: strict を書く
- コンテナ幅 1200px、カード間の gap は 24px
```
