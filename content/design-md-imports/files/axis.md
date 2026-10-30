# DESIGN.md — AXIS（アクシス）

> AXIS Web（https://www.axismag.jp/）のデザイン仕様書。
> 「デザインの視点で、人間の可能性や創造性を伝えるメディア」を掲げる、デザイン誌 AXIS のオンライン版。建築・プロダクト・グラフィック・テクノロジー等を横断するデザインジャーナリズム。
> 最大の特徴は **純白（#ffffff）の地に黒〜濃グレー（#000 / #333 / #666）だけで組む徹底したモノクローム** と、**Type Project の独自書体「AXIS Font（AXIS ProN）」を和欧ともに全面採用** していること。英字ラベルには **DIN Next LT Pro** を併用。`letter-spacing` も `palt` も使わず、line-height を 1.0 前後まで詰めた、雑誌の版面のように緊密で硬質な組版。
> 実サイトの computed style 実測（2026-06-29 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **純白の地にモノクロームのテキストだけ**で構成する、ニュートラルで知的なデザインジャーナルの版面。色を主役にせず、写真（記事サムネイル）と端正なタイポグラフィに語らせる。装飾を排し、コンテンツそのものを際立たせる editorial（編集的）な硬質さ
- **AXIS について**: 1981年創刊のデザイン誌 AXIS のWebメディア。建築 / プロダクト / インテリア / グラフィック / テクノロジー / アート / ファッション等、デザインに関わる領域を横断して記事化する。カテゴリ数が非常に多く、情報設計はカテゴリ・タグ駆動
- **密度**: 中〜高密度。グレーの面（#f1f1f1）で区切ったカテゴリナビ、記事サムネイルのグリッド、`line-height` を詰めた緊密な見出しで、雑誌的に情報を敷き詰める
- **キーワード**: 純白 #ffffff、モノクローム、AXIS Font、DIN、グレー面 #f1f1f1、line-height 1.0（緊密）、letter-spacing なし、palt オフ、editorial、ニュートラル
- **特徴**:
  - 地色は **純白 #ffffff**（`--wp--preset--color--white`、html/body 実測）。クリーム等の温度は持たせず、ニュートラルな白
  - 色相を持つブランドカラーを基本的に使わない。**黒 #000 / 濃グレー #333 / グレー #666** の3段のモノクロームでテキスト階層を作る
  - 面の色は **グレーの濃淡**のみ。カテゴリナビ・タグ面は #f1f1f1、画像プレースホルダは #eeeeee、薄い区画は #f9f9f9 / #f5f5f5、ニュースレター帯は濃いチャコール #2b2b2b
  - フォントは **Type Project の AXIS Font（AXIS ProN）** を和欧ともに採用。M（Medium）と B（Bold）の2ウェイトを使い分ける。英字ラベル・カテゴリ名には **DIN Next LT Pro** を併用
  - **`letter-spacing` は基本 `normal`、`font-feature-settings` も `normal`（palt オフ）**。字間をいじらず、AXIS Font 本来のメトリクスで組む。これは palt をグローバル適用する TYPICA とは対照的
  - **`line-height` を 1.0 前後まで詰める**。見出しもナビも本文も font-size ≒ line-height で、版面が緊密。媒体名どおり「軸（axis）」の通った硬い組版
  - ボタン・リンクの形状は **3系統**。カテゴリナビは角丸ゼロの矩形（#f1f1f1 面）、タグは完全 pill（radius 46px・グレー枠線）、ニュースレターの購読ボタンは pill（radius 25px）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。色相を持つブランドカラーは持たず、白地＋モノクローム＋グレー面で構成する。すべて hex 表記。

### Brand / Core

- **Background (White)** (`#ffffff`): ページ背景・メインキャンバス（html/body 実測、`--wp--preset--color--white`）。ニュートラルな純白
- **Ink (Black)** (`#000000`): ナビ・見出し・本文の最も濃いテキスト。AXIS のモノクローム基調の主役
- **Text Dark** (`#333333`): 見出し・本文・リンクの標準テキスト色。純黒よりわずかに和らげた濃グレー
- **Text Muted** (`#666666`): カテゴリラベル・メタ情報・補助テキスト・タグ枠線

### Surface（面のグレー濃淡）

| Role | hex | 用途 |
|------|-----|------|
| Surface (Nav / Tag) | `#f1f1f1` | カテゴリナビ・タグ面（最頻出、count 29） |
| Image Placeholder | `#eeeeee` | 記事サムネイルのプレースホルダ（count 24） |
| Surface Light | `#f9f9f9` | セクション区画の薄い面（count 7） |
| Surface Light 2 | `#f5f5f5` | "FOLLOW US" 等の補助面 |
| Dark Surface | `#2b2b2b` | ニュースレター登録帯（"Sign up for AXIS…"）のダーク地 |
| Mid Gray | `#666666` | 検索送信ボタン地・タグ枠線 |

### Text

- **Text Primary** (`#000000`): ナビ・h1・最重要テキスト
- **Text Standard** (`#333333`): 見出し（h2/h3）・本文・リンクの基本色
- **Text Muted** (`#666666`): メタ情報・カテゴリラベル・注記
- **On Dark** (`#ffffff`): ダーク帯（#2b2b2b）上のテキスト

### Semantic

- AXIS は意味色（Danger / Warning / Success）を独自に持たない。エラー表示等が必要な場合は、汎用の赤 `#cf2e2e`（WordPress プリセット `--wp--preset--color--vivid-red`）を最小限で用いる
- リンクの hover はカラーではなくモノクロームの濃度変化・下線で表現するのが AXIS の流儀

> 注: `customProperties` に並ぶ `--wp--preset--color--*`（vivid-red, vivid-cyan-blue 等）や多数の gradient は **WordPress（Gutenberg）の既定プリセット**であり、AXIS が意図的に使うブランドパレットではない。実際の版面はモノクロームで構成されている。`--swiper-theme-color: #01aeeb`（シアン）はスライダーUI部品のデフォルト色で、ブランド色ではない。

---

## 3. Typography Rules

> 実サイトは和欧ともに **AXIS Font（AXIS ProN、Type Project）** を採用。M（Medium）と B（Bold）の2ウェイト。英字ラベル・カテゴリ名に **DIN Next LT Pro** を併用。
> AXIS Font / DIN Next LT Pro はいずれもライセンス書体のため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **ゴシック体**: AXIS Font（`"AXIS ProN M"` / 太字は `"AXIS ProN B"`、Type Project）。フォールバックは `NoChattering`（チラつき防止用の透明フォント）のみが指定されている
  - AXIS Font は AXIS 誌のために Type Project が開発したコーポレート書体。直線的で視認性が高く、和欧の調和を重視した現代的ゴシック
- **明朝体**: 使用しない（モノクローム・ゴシックで統一）

### 3.2 欧文フォント

- **サンセリフ（本文・和欧混植）**: AXIS Font（`AXIS ProN`）が欧文グリフも内包し、和文と一体で組む
- **サンセリフ（ラベル・カテゴリ）**: DIN Next LT Pro（`"DIN Next LT Pro"` → `"Helvetica Neue"` → Arial → sans-serif）。英字のカテゴリ見出し（"Product" 等）に使用。幾何学的で工業的な DIN 系
- **フォーム入力**: `Arial`（input は実測で Arial 単独。OS依存のフォールバック）

### 3.3 font-family 指定

```css
/* 和文・英字本文（AXIS Font、実測） */
font-family: "AXIS ProN M", NoChattering;       /* 通常 */
font-family: "AXIS ProN B", NoChattering;       /* 太字相当（見出し） */

/* 英字ラベル・カテゴリ名（実測） */
font-family: "DIN Next LT Pro", "Helvetica Neue", Arial, sans-serif;

/* フォーム入力（実測） */
font-family: Arial;
```

- **フォールバックの考え方**: 原典は AXIS Font に強く依存し、フォールバックは `NoChattering`（描画チラつき防止の透明フォント）のみ。AXIS Font が読み込めない環境を実質想定していない設計。**再現する場合は必ず游ゴシック / ヒラギノ等の和文フォールバックを補う**こと
- **DIN Next LT Pro** はフォールバックチェーンが Helvetica Neue → Arial と整備されており、英字ラベルは欧文サンセリフで安定する

**preview.html での代替フォント**:
- AXIS Font（`"AXIS ProN M"` / `"AXIS ProN B"`）→ **IBM Plex Sans JP**（直線基調で視認性が高く、AXIS Font の硬質でニュートラルな印象に近い和文ゴシック。weight 400/500/700）
- DIN Next LT Pro（幾何学サンセリフ・ラベル）→ **Archivo**（DIN 系のグロテスク・サンセリフで字幅・骨格が近い。weight 400/500/600）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading (Feature) | AXIS ProN M | 32px | 500 | 1.4 (44.8px) | normal | 大型記事見出し（#333） |
| Section Title | AXIS ProN M | 24px | 400 | 1.0 | normal | セクション見出し（"World's Design Journal" 等、#000/#333） |
| Article Title | AXIS ProN B | 18px | 400(=Bold書体) | 1.0 | normal | 記事カテゴリ見出し（B ウェイト書体、#333） |
| H1 | AXIS ProN M | 16px | 400 | 1.0 | normal | ページ最上位（サイズは控えめ） |
| Body / Nav | AXIS ProN M | 16px | 400 | 1.0 | normal | 本文・グローバルナビ（#333） |
| Sub Nav / Category | AXIS ProN M | 14px | 400 | 1.0 | normal | カテゴリナビ・サブナビ（#333、#f1f1f1 面） |
| English Label | DIN Next LT Pro | 16px | 400 | 1.0 | 0.32px (≈0.02em) | 英字カテゴリ名 "Product" 等（#000） |
| Caption / Meta | AXIS ProN M | 12px | 400 | 1.0–1.3 | normal | メタ情報・カテゴリラベル（#666） |
| Caption (lead) | AXIS ProN M | 12px | 400 | 1.3 (15.6px) | normal | リード付き注記（#666） |

- ウェイトは **書体名で切り替える**のが AXIS の流儀。CSS の `font-weight` は概ね `400` のままで、太字は `"AXIS ProN B"` という別ファミリ指定で実現する（h3 のカテゴリ見出し等）。例外的にフィーチャー見出しは `font-weight: 500`
- 大半の要素が **`line-height` ≒ `font-size`（比率 1.0）**。フィーチャー見出しのみ 1.4、小さな注記が 1.3 まで。版面を緊密に詰める設計

### 3.5 行間・字間

- **本文の行間 (line-height)**: 実測は **約 1.0**（16px → 16px）。AXIS は本文も行高を詰める硬い組版。**ただし長文記事本文をエージェントに組ませる場合は、可読性のため 1.6〜1.8 に緩めることを推奨**（実サイトのトップ要素の 1.0 は見出し・一覧・ナビ中心の値）
- **見出しの行間**: セクション見出し 1.0、大型フィーチャー見出し 1.4（44.8px / 32px）
- **本文の字間 (letter-spacing)**: `normal`（字間は調整しない）
- **英字ラベルの字間**: DIN ラベルのみ `0.32px`（16px → ≈0.02em）とごく僅かに開く

**ガイドライン**:
- AXIS の質感を出すなら letter-spacing は `normal` を基本にし、字間をいじらない
- 一覧・ナビ・見出しは line-height を詰める（1.0〜1.4）。一方で**段落本文は line-height 1.6 以上**を確保し可読性を担保する（実サイト一覧の 1.0 をそのまま長文に適用しない）

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;     /* または keep-all */
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;   /* AXIS は palt を使わない */
```

- **重要**: AXIS は `font-feature-settings: normal`（実測で全要素が `normal`）。**`palt`（プロポーショナル字詰め）を適用していない**。AXIS Font 本来の字幅・メトリクスでベタ組みに近く組むのが流儀で、字間を詰める TYPICA とは対照的
- 再現時も `palt` はオフのままにし、字間の操作で雰囲気を作らない

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

> AXIS のクリック要素は **3系統**。カテゴリナビは角丸ゼロの矩形、タグは完全 pill（枠線）、購読ボタンは pill（塗り）。色はモノクロームが基本。

**Category Nav（矩形・グレー面）** — グローバル/サブナビのカテゴリリンク
- Background: `#f1f1f1`
- Text: `#333333`
- Border: なし
- Padding: `12px 9px`
- Border Radius: `0px`（角丸なし・矩形）
- Font: AXIS ProN M / 14px / 400

**Tag（完全 pill・枠線）** — "#TAKT PROJECT" 等のタグ
- Background: `#ffffff`
- Text: `#666666`
- Border: `1px solid #666666`
- Padding: `0 15px`（高さ 46px、行で pill 成立）
- Border Radius: `46px`（完全 pill）
- Font: AXIS ProN M / 16px / 400 / line-height 46px

**Newsletter Submit（pill・白塗り）** — "購読する"
- Background: `#ffffff`
- Text: `#2b2b2b`（ダーク帯 #2b2b2b の上に置かれる白ボタン）
- Border: なし
- Padding: `7px 48px`
- Border Radius: `25px`（pill）
- Font: Noto Sans JP / 16px / **700**（このボタンのみ Noto Sans JP・太字）

**Search Submit（小・角丸）** — 検索フォームの送信
- Background: `#666666`
- Text: `#ffffff`
- Border: なし
- Padding: `1px 6px`
- Border Radius: `3px`
- Font: Arial / 13.3px / 400

> 注: 矩形カテゴリナビと完全 pill タグが同居するのが AXIS の特徴。**主たるナビは矩形（radius 0）**、**補助的なタグは pill（radius 46px）** と役割で形を分ける。

### Inputs

- Background: `#f1f1f1`（検索）/ 透明（ニュースレターは下線型）
- Border: なし（検索は枠線なしのグレー面）
- Border Radius: `0px`（矩形）
- Padding: `0 18px`（高さ 50px 前後、line-height 50px）
- Font Size: 18px（検索）/ 14px（ニュースレター）
- Font Family: `Arial`（実測。再現時は和文フォールバックを補う）
- **再現の推奨**: 矩形・グレー面（#f1f1f1）・枠線なしを基本とし、フォーカス時のみ濃グレーの枠 or 下線を足す

### Cards（記事サムネイル）

- Background: `#ffffff`
- 画像プレースホルダ: `#eeeeee`
- Border: なし（区切りは余白とグレー面で表現）
- Border Radius: `0px`（矩形。角を丸めない）
- 構成: 写真（4:3 等）を大きく置き、その下にカテゴリラベル（#666 / 12px）＋記事タイトル（#333）＋メタ情報の editorial レイアウト
- カードは影を持たずフラット。グレーの区画（#f9f9f9）で領域をまとめる

---

## 5. Layout Principles

### Spacing Scale

> 実サイトの WordPress スペーシングプリセット（rem基準）を px 換算した目安。

| Token | Value | 由来 |
|-------|-------|------|
| XS | 7px | `--wp--preset--spacing--20` (0.44rem) |
| S | 11px | `--wp--preset--spacing--30` (0.67rem) |
| M | 16px | `--wp--preset--spacing--40` (1rem) |
| L | 24px | `--wp--preset--spacing--50` (1.5rem) |
| XL | 36px | `--wp--preset--spacing--60` (2.25rem) |
| XXL | 54px | `--wp--preset--spacing--70` (3.38rem) |
| XXXL | 81px | `--wp--preset--spacing--80` (5.06rem) |

### Container

- Max Width: 約 1200px（記事グリッドのコンテンツ幅）
- Padding (horizontal): 20〜40px

### Grid

- Columns: 記事一覧は 2〜4 カラム
- Gutter: 16〜24px
- カテゴリ駆動の情報設計。グレー面でカテゴリ群を区切り、その下にサムネイルグリッドを敷く

---

## 6. Depth & Elevation

> AXIS は影をほとんど使わず、グレーの面とテキスト濃度で階層を作るフラット設計。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード・カテゴリ面（基本フラット、グレー面で区切る） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・浮かせる必要のある最小限の要素 |
| 2 | `0 6px 18px rgba(0,0,0,0.12)` | モーダル・ドロワー（補助的に使用） |

> WordPress プリセット（`--wp--preset--shadow--natural` 等）は存在するが、AXIS の版面では基本的に未使用。影に頼らずフラットに保つ。

---

## 7. Do's and Don'ts

### Do（推奨）

- 地は純白 #ffffff を使い、テキストは黒 #000 / 濃グレー #333 / グレー #666 の3段モノクロームで階層を作る
- 面の区切りはグレーの濃淡（#f1f1f1 / #eeeeee / #f9f9f9）と余白で行う
- フォントは AXIS Font（代替 IBM Plex Sans JP）を和欧一体で使い、英字ラベルのみ DIN Next LT Pro（代替 Archivo）を併用する
- 太字は `font-weight` ではなく **Bold 書体（AXIS ProN B）** への切り替えで表現する意識を持つ
- `letter-spacing: normal` / `font-feature-settings: normal`（palt オフ）を守り、字間で雰囲気を作らない
- 見出し・ナビ・一覧は line-height を詰める（1.0〜1.4）。一方で段落本文は 1.6 以上を確保する
- ボタンは役割で形を分ける（主ナビ＝矩形 radius 0、タグ＝完全 pill radius 46px）

### Don't（禁止）

- 色相を持つブランドカラー（青・赤・緑等）を主役に使わない。AXIS はモノクローム。WordPress プリセットの vivid 系・gradient・`--swiper-theme-color #01aeeb` をブランド色と誤用しない
- クリームや色付き地を敷かない（純白 #ffffff が基調）
- `palt` を適用して和文を詰めない（AXIS は palt オフ）
- letter-spacing を大きく開けない（字間は normal が基本）
- すべての要素を pill にしない（主ナビは矩形が AXIS の特徴）
- AXIS Font 単独指定のまま放置しない（再現時は游ゴシック / ヒラギノ等の和文フォールバックを必ず補う）
- カードに影や大きな角丸を付けない（フラット・矩形が基調）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | 1 カラム、カテゴリナビはドロワー/アコーディオン |
| Tablet | 750–989px | 2 カラム |
| Desktop | ≥ 990px | 2〜4 カラムの記事グリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px（タグの pill 高さ 46px はこれを満たす）

### フォントサイズの調整

- フィーチャー見出し（32px）はモバイルで 22〜26px 程度に縮小する
- 和文本文・ナビはモバイルでも 14〜16px を基準に保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff (White)
Ink: #000000 / Text: #333333 / Muted: #666666
Surface: #f1f1f1 (nav/tag) / #eeeeee (image) / #f9f9f9 / #2b2b2b (dark band)
和文・英字 Font: "AXIS ProN M" / "AXIS ProN B"  /* 代替: "IBM Plex Sans JP" */
英字ラベル Font: "DIN Next LT Pro", "Helvetica Neue", Arial, sans-serif  /* 代替: "Archivo" */
Body Size: 16px / Line Height: 1.0（一覧）〜1.6+（段落本文）/ Letter Spacing: normal
OpenType: font-feature-settings: normal（palt オフ）
Button: 主ナビ=矩形 radius 0 / タグ=pill radius 46px / 購読=pill radius 25px
Card: フラット・矩形（影なし・角丸なし）
```

### プロンプト例

```
AXIS のデザインシステムに従って、デザイン記事の一覧ページを作成してください。
- 地は純白 #ffffff。色相を持つブランドカラーは使わず、黒 #000 / 濃グレー #333 / グレー #666 のモノクロームで組む
- 面の区切りはグレーの濃淡（カテゴリナビ・タグ面 #f1f1f1、画像プレースホルダ #eeeeee）と余白で行う
- フォントは AXIS Font（代替 IBM Plex Sans JP）を和欧一体で使用。英字カテゴリ名のみ DIN Next LT Pro（代替 Archivo）
- letter-spacing は normal、font-feature-settings も normal（palt オフ）
- 見出し・ナビ・一覧は line-height を 1.0〜1.4 に詰める。段落本文だけは 1.6 以上にする
- カテゴリナビは角丸ゼロの矩形（#f1f1f1 面）、タグは完全 pill（radius 46px・グレー枠線 #666）で形を分ける
- カードは影なし・角丸なしのフラットな矩形。写真＋カテゴリラベル（#666）＋タイトル（#333）の editorial 構成
- 全体はニュートラルで硬質なデザインジャーナルの版面に仕上げる
```
