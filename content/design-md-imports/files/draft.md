# DESIGN.md — DRAFT（ドラフト）

> DRAFT（ドラフト / https://www.draft.co.jp/）のデザイン仕様書。
> 宮田識が率いるブランディング／デザイン会社。CIBONE、D-BROS などのプロダクトや、数多くの企業ブランディングを手がける制作会社のコーポレートサイト。
> 最大の特徴は **黒（#000000）のフルスクリーン・ヒーローと白（#ffffff）の作品グリッドという徹底したモノクロームの対比**、**高コントラストなディスプレイ・セリフ（PPEiko）の英字見出し** と **グロテスク・サンセリフ（Graphik）＋游ゴシック Pr6N の和欧混植**、そして **`border-radius: 25px` の "破線（dashed）pill" カテゴリーフィルター** という、極めてミニマルでギャラリー的な構成。
> 実サイトの computed style 実測（2026-06-29 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **黒と白だけで構成する、ギャラリーのようなミニマリズム**。トップのファーストビューは黒一色（#000000）のフルスクリーンに白の英字ディスプレイ見出しを置き、スクロールすると白地（#ffffff）の作品グリッドが続く。色で語らず、作品（写真）と余白とタイポグラフィで語る、制作会社らしい禁欲的な編集設計
- **DRAFT について**: 宮田識デザイン事務所として 1978 年創業。広告・ブランディング・空間・プロダクト（D-BROS）・店舗（CIBONE）など領域横断で「ブランド」をつくる会社。サイト自体が作品ポートフォリオであり、UI は作品を引き立てる「額縁」に徹する
- **密度**: 低〜中密度。大きな余白、フルブリードの作品サムネイル、最小限の文字。情報を詰め込まず、1 つ 1 つの作品にスペースを与える
- **キーワード**: モノクローム、黒ヒーロー／白グリッド、ギャラリー、ハイコントラスト・セリフ（PPEiko）、Graphik、游ゴシック Pr6N、dashed pill フィルター、余白、editorial
- **特徴**:
  - **ヒーローは黒一色 #000000・テキストは白 #ffffff**。`section.p-top-fv` とその中の `.cover` 群がビューポート上部をフルに黒で覆う（実測 viewportTopByArea / 12 点サンプルすべて黒）
  - **本文・作品グリッド領域は白 #ffffff**（html / body 実測）。グレーの面（#efefef、出現 count 18）を補助サーフェス（プロジェクト一覧ブロック等）に使う
  - **見出しは 2 系統**。英字ディスプレイは **PPEiko-Light**（ハイコントラストなセリフ、weight 300、`palt`）。和文・英字本文は **Graphik ＋ 游ゴシック Pr6N**（MFW-YuGoPr6N）の混植、本文ベースは **ヒラギノ角ゴ ProN**
  - **`font-feature-settings: "palt"` は Graphik / PPEiko / 游ゴシック系の要素に適用**。一方、ベースの **ヒラギノ角ゴ ProN（body / a / li）は `normal`**（palt なし）。palt はグローバルではなく書体・要素ごとに使い分けられている
  - CTA・カテゴリーフィルターは **破線（1px dashed #000000）の pill 形状（radius 25px）**。塗りを持たない、線だけの上品なボタンが DRAFT の象徴的 UI
  - リンクは下線アニメーション（`js-underlineBtn` / `js-simpleLine-hover`）が基本。塗りボタンはほぼ使わない

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。基調は黒（ヒーロー）と白（コンテンツ）の徹底したモノクローム。すべて hex 表記。

### Brand / Core

- **Black (Hero)** (`#000000`): ファーストビュー背景・反転面の基調色。`section.p-top-fv` / `.cover` がフルスクリーンを覆う。CSS 変数 `--wp--preset--color--black`。テキスト主色も黒
- **White (Surface)** (`#ffffff`): ページ背景・作品グリッド・フッターの地色（html / body 実測）。CSS 変数 `--wp--preset--color--white`。ヒーロー上のテキスト色でもある
- **Teal Accent** (`#006790`): ごく稀に現れるアクセント（`rgb(0,103,144)`、出現 count 1）。リンクホバー等のワンポイント。多用しない

### Surface / Gray

| Role | hex | 用途 |
|------|-----|------|
| Surface Gray | `#efefef` | プロジェクト一覧ブロック等の補助面（最頻出グレー、count 18） |
| Surface Light | `#fcfcfc` | ごく薄い面（count 4） |
| Footer Tint | `#f6f6f6` | フッター近傍の面（"Projects" ブロック） |
| Overlay | `rgba(0,0,0,0.40)` | 作品サムネイルのホバー暗幕 |

### Text

- **Text Primary** (`#000000`): 白地での本文・見出しの基本テキスト
- **On Dark** (`#ffffff`): 黒ヒーロー・反転面上のテキスト

### Semantic

- DRAFT は制作会社のポートフォリオ型サイトのため、エラー／警告／成功などのセマンティックカラーは UI 上ほぼ使用されない。フォーム等で必要な場合は下記を推奨値とする
  - **Error**: `#cf2e2e`（WordPress プリセット `--wp--preset--color--vivid-red`）
  - **Link / Info**: `#006790`（上記 Teal Accent）

---

## 3. Typography Rules

> 実サイトは英字ディスプレイに **PPEiko-Light**（Pangram Pangram のハイコントラスト・セリフ）、和欧混植本文に **Graphik ＋ 游ゴシック Pr6N（MFW-YuGoPr6N、モリサワ）**、ベース本文に **ヒラギノ角ゴ ProN** を使う。
> PPEiko / Graphik / 游ゴシック Pr6N は商用ライセンスのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **ゴシック体（見出し・強調）**: 游ゴシック Pr6N Medium / Bold（`MFW-YuGoPr6N-Medium` / `MFW-YuGoPr6N-Bold`、モリサワ）— Graphik とセットで指定される和欧混植チェーンの和文側
- **ゴシック体（ベース本文）**: ヒラギノ角ゴ ProN（`"Hiragino Kaku Gothic ProN"`）— body / リンク / リスト等の基本テキスト
- **明朝体**: 使用しない（見出しのセリフ感は欧文 PPEiko が担う）

### 3.2 欧文フォント

- **ディスプレイ・セリフ**: PPEiko-Light（`PPEiko-Light`、weight 300）— 黒ヒーローの英字大見出し（"A Proposal for a New Yokohama Lifestyle" 等）。ハイコントラストなモダンセリフ
- **本文・ラベル サンセリフ**: Graphik（`GraphikMedium` / `GraphikSemibold`）— 英字見出し・カテゴリーラベル・ボタンテキスト。Commercial Type の端正なグロテスク

### 3.3 font-family 指定

```css
/* ベース本文（実測 body） */
font-family: "Hiragino Kaku Gothic ProN";   /* 実サイトはこの単独指定。下記の堅牢なチェーン推奨 */
/* 推奨フォールバック */
font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  "游ゴシック", YuGothic, "メイリオ", Meiryo, sans-serif;

/* 和欧混植 見出し・ラベル（実測 h3 / a / p） */
font-family: GraphikMedium, MFW-YuGoPr6N-Medium, sans-serif;   /* Medium */
font-family: GraphikSemibold, MFW-YuGoPr6N-Bold, sans-serif;   /* Semibold/Bold */

/* 英字ディスプレイ見出し（実測 h2 / span） */
font-family: PPEiko-Light, sans-serif;
```

- **混植の考え方**: 英字を Graphik、和文を 游ゴシック Pr6N に振り分ける和欧混植。欧文を先に書き、和文グリフを後段の `MFW-YuGoPr6N-*` で受ける（欧文の表情を優先する制作会社らしい指定順）
- ベース本文は実サイトでは `"Hiragino Kaku Gothic ProN"` 単独指定だが、環境依存を避けるため上記の堅牢なフォールバックチェーンを推奨する

**preview.html での代替フォント**:
- PPEiko-Light（ハイコントラスト・モダンセリフ、weight 300）→ **Playfair Display**（高コントラストなディスプレイセリフ。weight 400/700 を使用）
- Graphik（端正なグロテスク・サンセリフ）→ **Inter**（同系統のニュートラルなグロテスク。weight 500/600）
- 游ゴシック Pr6N / ヒラギノ角ゴ ProN（和文）→ **Zen Kaku Gothic New**（字面の端正な和文ゴシック。weight 400/500/700）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (Hero) | PPEiko-Light | 24px〜（レスポンシブで拡大）| 300 | 1.5 (36/24) | 0.6px (≈0.025em) | 黒ヒーローの英字大見出し（白）。`palt` |
| Heading (英字) | Graphik Medium | 16px | 400 | 1.0 | normal | "Featured Journal" 等のセクション見出し。`palt` |
| Title (作品名) | Graphik Semibold | 16px | 400 | 1.25 (20/16) | normal | 作品タイトル `.ttl`。`palt` |
| Body / Link | ヒラギノ角ゴ ProN | 16px | 400 | 1.0〜1.5 | normal | 本文・ナビ・リンク（`palt` なし） |
| Label / Category | Graphik Medium | 11px | 400 | 1.0 | normal | カテゴリーラベル `.cate`（"Product" 等）。`palt` |
| Button (filter) | Graphik Medium | 16px | 400 | 1.0 | normal | dashed pill フィルター内テキスト。`palt` |

- 実サイトは **ウェイトを書体名で持つ**（`PPEiko-Light` = 300、`GraphikMedium` / `GraphikSemibold`）。CSS の `font-weight` は 300〜400 に見えるが、視覚的な太さの差は **書体ファミリーの切り替え**で作っている点に注意
- 見出しを大きな数値ウェイトで太らせず、**サイズ・書体・余白**で階層を作る。制作会社らしい抑制的なタイポグラフィ
- Display 見出しはレスポンシブで大きく拡大される（実測の 24px は縮小ビューポート時の値。デスクトップではより大きい）

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.0〜1.5。作品名 `.ttl` は約 1.25（20px / 16px）。短い見出しは行高＝サイズ（1.0）に詰める
- **ディスプレイ見出しの行間**: 約 1.5（36px / 24px）。大きな英字セリフをゆったり積む
- **本文の字間 (letter-spacing)**: 基本 `normal`。ベースのヒラギノ本文は字詰めしない
- **ディスプレイ見出しの字間**: 0.6px（24px 基準で ≈0.025em）。わずかに開けて上品に見せる

**ガイドライン**:
- 英字ディスプレイ（PPEiko）は `letter-spacing` を ≈0.025em とごく控えめに開け、`palt` を併用する
- 和文ベース本文（ヒラギノ）は `letter-spacing: normal`・`palt` なしのベタ組みが基準。詰めすぎない
- 行間は短い見出しで 1.0、複数行の本文・タイトルで 1.25〜1.5 を使い分ける

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
/* Graphik / PPEiko / 游ゴシック Pr6N 系の見出し・ラベル・ボタンに適用 */
font-feature-settings: "palt";

/* ベースのヒラギノ角ゴ ProN（body / a / li）は適用しない */
font-feature-settings: normal;
```

- **重要**: DRAFT は `palt` を **グローバルには適用していない**。`palt` が効くのは **Graphik / PPEiko / 游ゴシック Pr6N を使う見出し・タイトル・ラベル・ボタン**。一方、**ベースの `"Hiragino Kaku Gothic ProN"`（body / リンク / リスト）は `normal`**（ベタ組み）。書体と要素ごとに使い分けるのが DRAFT 流
- 見出し・カテゴリーラベルなど短く密度を上げたい箇所で `palt`、長い本文ではベタ組み、という設計意図

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

> DRAFT の象徴は **塗りのない「破線（dashed）pill」**。カテゴリーフィルターやリンクボタンに使う。塗りボタンはほぼ用いない。

**Primary（破線 pill フィルター）** — カテゴリーフィルター（"ALL" / "Architecture" / "Interior" 等）
- Background: `transparent`
- Text: `#000000`
- Border: `1px dashed #000000`
- Padding: `16px 24px`
- Border Radius: `25px`（pill）
- Font: Graphik Medium / 16px / `palt`

**On Dark（ヒーロー上・テキストリンク）** — `.l-viewbtn` 等
- Background: `transparent`
- Text: `#ffffff`
- Border: なし（下線アニメーション `js-underlineBtn`）
- Font: ヒラギノ角ゴ ProN / 16px / 400

**Text Link（白地・下線ホバー）** — `.all js-simpleLine-hover`
- Background: `transparent`
- Text: `#000000`
- Border: なし（ホバーで下線がスライドイン）
- Font: Graphik Medium / 16px / `palt`（"See All Journal" 等）

**注**: 実サイトには明確な「塗りの primary CTA」が存在しない。塗りが必要な場合は **黒地（#000000）＋白文字（#ffffff）** または **白地＋黒文字＋黒の dashed/solid 枠** を推奨。pill（radius 25px）を基本形状とする

### Inputs

> 実サイトにフォーム要素の露出が少ないため、ブランドのトーンに合わせた推奨値。

- Background: `#ffffff`
- Border: `1px solid #000000`（DRAFT は線を黒で引く。グレー枠より黒の細線が世界観に合う）
- Border (focus): `1px solid #000000` ＋ `box-shadow: 0 0 0 2px rgba(0,0,0,0.12)`
- Border Radius: `0px`（角を立てるミニマル指向。pill にするならボタンに合わせ 25px）
- Padding: `12px 14px`
- Font Size: 16px
- Font Family: ヒラギノ角ゴ ProN 系（本文チェーン）

### Cards

> 作品サムネイルが主役。カードは枠線・影を持たず、写真＋最小限のテキストで構成する。

- Background: `#ffffff`
- Border: なし（または下罫 `1px solid #efefef`）
- Border Radius: `0px`（写真は角を立てる。フルブリード気味に大きく見せる）
- Padding: テキスト部のみ（写真は full-bleed）
- 構成: 大きな作品写真 → カテゴリーラベル（Graphik 11px）→ 作品タイトル（Graphik Semibold 16px）の順
- ホバー: 写真に `rgba(0,0,0,0.40)` の暗幕＋「View」テキストをフェードイン（`js-thumbhover`）
- Shadow: 基本なし（Depth & Elevation 参照）

---

## 5. Layout Principles

### Spacing Scale

> WordPress プリセット（`--wp--preset--spacing--*`）を rem→px 換算（16px 基準）した値をベースに整理。

| Token | Value | 備考 |
|-------|-------|------|
| XS | 7px | 0.44rem |
| S | 11px | 0.67rem |
| M | 16px | 1rem |
| L | 24px | 1.5rem |
| XL | 36px | 2.25rem |
| XXL | 54px | 3.38rem |
| 3XL | 81px | 5.06rem |

- フッターは `padding: 180px 0 24px` と、セクション間に大きな余白を取る。「余白で語る」DRAFT らしい設計

### Container

- Max Width: 約 1280px（作品グリッドはより広く、フルブリード気味）
- Padding (horizontal): 24〜40px

### Grid

- Columns: 作品グリッドは 2〜3 カラム
- Gutter: 16〜24px
- 大きな余白と full-bleed のサムネイルで、ギャラリーのように作品を並べる

---

## 6. Depth & Elevation

> DRAFT は影をほぼ使わない。黒／白の面の対比と余白で奥行きを作るフラット設計。必要時のみ WordPress プリセットの shadow を流用できる。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 作品カード・面（基本フラット。黒白の対比で区切る） |
| 1 | `6px 6px 9px rgba(0,0,0,0.2)` | ドロップダウン等（`--wp--preset--shadow--natural`） |
| 2 | `12px 12px 50px rgba(0,0,0,0.4)` | モーダル等（`--wp--preset--shadow--deep`） |

- 原則は **影なし**。影で立体を作るより、黒い面・白い面・余白で階層を表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- ファーストビューは黒一色 #000000 ＋白文字でギャラリーのように見せる
- コンテンツ領域は白 #ffffff を基調にし、補助面にだけグレー #efefef を使う
- 英字ディスプレイ見出しは PPEiko-Light（ハイコントラスト・セリフ、代替 Playfair Display）で組む
- 和欧混植は Graphik（英字）＋ 游ゴシック Pr6N（和文）、ベース本文はヒラギノ角ゴ ProN
- `palt` は見出し・ラベル・ボタン（Graphik / PPEiko 系）にのみ適用し、ベースのヒラギノ本文はベタ組み（normal）にする
- ボタン・フィルターは **塗りのない破線 pill（1px dashed #000000 / radius 25px）** を基本にする
- 大きな余白を取り、作品写真を主役にする

### Don't（禁止）

- カラフルなブランドカラーを足さない（黒・白・グレーのモノクロームが DRAFT の個性。Teal #006790 はごくワンポイントのみ）
- `palt` を全要素にグローバル適用しない（ベース本文＝ヒラギノはベタ組みが正）
- 見出しを極太ウェイトで主張させない（太さは書体ファミリーの切り替えで、控えめに）
- 塗りつぶしの派手な CTA を多用しない（線・下線アニメーション・dashed pill が基調）
- 角丸を多用しない（カード・入力は角を立てる。pill 形状はボタン／フィルターに限定）
- 和文フォントを 1 つだけ指定しない（必ずヒラギノ → 游ゴシック → メイリオのチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1 カラム、ナビはハンバーガー、ヒーロー見出しは縮小 |
| Tablet | 768–1023px | 2 カラム |
| Desktop | ≥ 1024px | 2〜3 カラムの作品グリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）。dashed pill は padding 16px 24px で十分な高さを確保

### フォントサイズの調整

- 英字ディスプレイ見出しはデスクトップで大きく、モバイルで縮小する（実測 24px は縮小時の値）
- 和文本文はモバイルでも 14〜16px を保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Hero Background: #000000 (Black) / Text on Hero: #ffffff
Content Background: #ffffff (White) / Surface Gray: #efefef
Text Primary: #000000
Accent (sparingly): #006790 (Teal)
英字ディスプレイ Font: PPEiko-Light, sans-serif  /* 代替: "Playfair Display" weight 300/400 */
和欧混植 Font: GraphikMedium, MFW-YuGoPr6N-Medium, sans-serif  /* 代替: "Inter" + "Zen Kaku Gothic New" */
ベース本文 Font: "Hiragino Kaku Gothic ProN", "游ゴシック", YuGothic, "メイリオ", sans-serif
Body Size: 16px / Line Height: 1.0–1.5 / Letter Spacing: normal（本文）, 0.025em（ディスプレイ）
OpenType: 見出し・ラベルに font-feature-settings: "palt" / ベース本文は normal
Button: 破線 pill — 1px dashed #000000 / radius 25px / padding 16px 24px / transparent
Radius: 0px (cards/inputs) / 25px (buttons・filters)
```

### プロンプト例

```
DRAFT のデザインシステムに従って、デザイン会社の作品ポートフォリオページを作成してください。
- ファーストビューは黒一色 #000000 のフルスクリーン＋白文字。スクロール後のコンテンツは白地 #ffffff
- カラフルな色は足さない（モノクローム基調。Teal #006790 はごくワンポイントのみ）
- 英字大見出しは PPEiko-Light（ハイコントラスト・セリフ、代替 Playfair Display）で letter-spacing 0.025em / palt
- 和欧混植は Graphik（英字）＋ 游ゴシック Pr6N（和文）、ベース本文はヒラギノ角ゴ ProN（palt なし・ベタ組み）
- カテゴリーフィルター・ボタンは塗りのない破線 pill（1px dashed #000000 / radius 25px / padding 16px 24px）
- カードと入力欄は角を立てる（radius 0px）。影は使わず、余白と黒白の対比で階層を作る
- 作品写真を大きく主役にし、テキストは最小限。ホバーで rgba(0,0,0,0.4) の暗幕＋「View」を出す
```
