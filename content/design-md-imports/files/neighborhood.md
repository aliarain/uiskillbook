# DESIGN.md — NEIGHBORHOOD（ネイバーフッド）

> NEIGHBORHOOD 公式サイト（https://www.neighborhood.jp/）のデザイン仕様書。
> 滝沢伸介が 1994 年に原宿で設立した日本のストリートウェアブランド。
> モーターサイクルカルチャー、ミリタリー、アウトドアの影響を受け、緻密なクラフツマンシップで知られる。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ほぼ黒（#222222）+ 白 + ライトグレー（#f5f5f5）の3色で構成された、**攻撃的でタイトなストリートウェア美学**。コンデンスドボールド書体（HelveticaLTWXX-BoldCond）と**ネガティブ letter-spacing**（-0.65px〜-3.1px）が全体を支配し、軍用・工業的な圧迫感を生む
- **密度**: 情報密度は高め。商品グリッドはコンパクトに並べ、余白は最小限。ヒーローエリアのみ大判画像 + オーバーサイズのコンデンスドタイポグラフィ
- **キーワード**: コンデンスドボールド、ネガティブ letter-spacing、シャープエッジ（radius 0px）、ニアブラック #222222、ミリタリー / インダストリアル、タイトライン
- **特徴**:
  - **2 系統フォント運用** — UI・見出しに「HelveticaLTWXX-BoldCond」（コンデンスドボールド欧文）、body・header・footer に「TsukuGoPr5-D」（筑紫ゴシック Pro5 D、Fontworks のプレミアム和文ゴシック）
  - **ネガティブ letter-spacing が設計の核心** — h2 ヒーロー -3.1px（-0.05em）、セクション見出し -1.65px（-0.05em）、VIEW MORE -0.65px（-0.05em）。**日本語サイトでは極めて珍しい詰め方向**で、ストリートウェアの攻撃性を表現
  - **border-radius: 0px が絶対** — ボタン、入力欄、カード、すべてシャープな直角。丸みは一切ない
  - **テキスト色は #222222（ニアブラック）** — 純黒 #000000 は使わない。CTA の背景色も同じ #222222
  - **line-height が極端に詰まっている** — 本文 1.15（14.95px / 13px）、ヒーロー h2 も 1.15（71.3px / 62px）。呼吸を許さないタイトなライン
  - **筑紫ゴシック Pro5 D** — body・header・footer・検索入力に使用。Fontworks の高品質和文ゴシックで、一般的なヒラギノや游ゴシックとは一線を画す個性がある
  - **font-weight 400 がメイン** — コンデンスドボールド書体自体が太いため、CSS の weight は 400。ナビの一部で 700
  - **CSS カスタムプロパティに `--red: #da2c4d`** — サイト上では未使用だが、ブランドのアクセントカラーとして定義されている

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **NBHD Black** (`#222222`): ブランドの支配色（rgb(34, 34, 34)）。**テキスト・CTA 背景・フッターの主色**。純黒ではないが限りなく黒
- **NBHD Secondary** (`#aaaaaa`): 商品タイプラベル・価格テキスト（rgb(170, 170, 170)）。控えめなグレー
- **NBHD Muted** (`#999999`): コピーライト等の最も薄いテキスト（rgb(153, 153, 153)）
- **NBHD Red** (`#da2c4d`): CSS 変数 `--red` で定義（rgb(218, 44, 77)）。セール・アクセントに使用可能

### Surface（背景）

- **Pure White** (`#ffffff`): ページ背景（暗黙のデフォルト）
- **Light Gray** (`#f5f5f5`): 最も使用頻度の高い面色（rgb(245, 245, 245)、16 箇所で出現）。セクション背景・カード背景
- **System Button** (`#efefef`): システムボタンの背景色（rgb(239, 239, 239)）

### Text on Dark

- **Inverse Text** (`#ffffff`): CTA ボタン・ヒーローオーバーレイ上の白テキスト

### Border

- **Card Border**: 罫線はほぼ使わない。**CTA のみ `1px solid #222222`**
- **Input Border** (`#dddddd`): 一部フォーム入力欄（rgb(221, 221, 221)）

### Semantic

- **Warning** (`#f7dc9d`): チケット情報等の警告背景（rgb(247, 220, 157)）
- **Checkout Accent** (`#2f3ced`): サードパーティ決済ボタン（rgb(47, 60, 237)）— NEIGHBORHOOD 固有の色ではない

### CSS Custom Properties（定義のみ、実使用は限定的）

- `--black: #080808` / `--red: #da2c4d` / `--white: #ffffff`
- `--grey: #ecedf3` / `--grey-light: #f2f7f9`
- `--black-blue: #1f2029` / `--black-light: #424455`

> **Note**: NEIGHBORHOOD のパレットは **「ほぼモノクロ」**。#222222 の単一ニアブラックがテキストと CTA の両方を担い、#f5f5f5 のライトグレーが面色。**商品写真だけが彩りを持つ、ストリートウェアらしい無骨なデザイン**。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（TsukuGoPr5-D スタック）**:
- TsukuGoPr5-D（筑紫ゴシック Pro5 D、Fontworks）— body・header・footer・検索入力のメイン
- TsukuARdGothic-Regular（筑紫A丸ゴシック、Fontworks）— フォールバック
- Hiragino Kaku Gothic ProN / ヒラギノ角ゴ ProN W3 — macOS フォールバック

**ゴシック体（HelveticaLTWXX-BoldCond スタック内の和文）**:
- Hiragino Kaku Gothic ProN / ヒラギノ角ゴ ProN W3 — macOS
- YuGothic — Windows / macOS

### 3.2 欧文フォント

- **HelveticaLTWXX-BoldCond**（Helvetica LT Condensed Bold）— UI・見出し・ナビ・商品情報のメイン。**攻撃的なコンデンスドフォント**
- **HelveticaNeue-CondensedBold**（Helvetica Neue Condensed Bold）— フォールバック
- **Helvetica Neue / Helvetica**（通常幅）— さらなるフォールバック
- **sans-serif**（ボタン・システム要素のジェネリック）

### 3.3 font-family 指定

```css
/* UI・見出し・ナビ・商品情報（コンデンスドスタック） */
font-family: HelveticaLTWXX-BoldCond, HelveticaNeue-CondensedBold, "Helvetica Neue", Helvetica, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", YuGothic, -apple-system, "system-ui", sans-serif;

/* body・header・footer・検索入力（筑紫ゴシックスタック） */
font-family: TsukuGoPr5-D, TsukuARdGothic-Regular, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;

/* ボタン・システム要素 */
font-family: sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭スタック** — HelveticaLTWXX-BoldCond が先頭。コンデンスドの圧迫感がブランドのアイデンティティ
- **筑紫ゴシックスタック** — body に TsukuGoPr5-D（Fontworks のプレミアム和文）を使い、一般的なゴシック体との差別化を図る
- **Adobe Fonts / ドメインライセンス前提** — TsukuGoPr5-D も HelveticaLTWXX-BoldCond もライセンスフォント
- **preview.html での代替**: TsukuGoPr5-D → Zen Kaku Gothic New（Fontworks 系）、HelveticaLTWXX-BoldCond → Oswald（Google Fonts のコンデンスド sans）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| h2 Hero | HelveticaLTWXX-BoldCond | 62px | 400 | 71.3px (1.15) | -3.1px (-0.05em) | ヒーロータイトル（白抜き） |
| h2 Section | HelveticaLTWXX-BoldCond | 33px | 400 | 37.95px (1.15) | -1.65px (-0.05em) | セクション見出し |
| h1 Logo | Helvetica | 26px | 700 | 29.9px (1.15) | normal | ロゴエリア |
| Nav Link | HelveticaLTWXX-BoldCond | 13px | 400 | 14.95px (1.15) | normal | ナビゲーション |
| Nav Active | HelveticaLTWXX-BoldCond | 13px | 700 | 14.95px (1.15) | normal | ナビ選択状態（言語切替等） |
| Body | TsukuGoPr5-D | 13px | 400 | 14.95px (1.15) | normal | 本文・構造テキスト |
| Description | HelveticaLTWXX-BoldCond | 13px | 400 | 18.2px (1.4) | -0.13px (-0.01em) | ブランド説明文 |
| Product Type | HelveticaLTWXX-BoldCond | 11px | 400 | 12.65px (1.15) | normal | 商品カテゴリラベル |
| Product Title | HelveticaLTWXX-BoldCond | 13px | 400 | 14.95px (1.15) | normal | 商品名 |
| Price | HelveticaLTWXX-BoldCond | 13px | 400 | 14.95px (1.15) | normal | 価格（色 #aaaaaa） |
| VIEW MORE | HelveticaLTWXX-BoldCond | 13px | 400 | 14.95px (1.15) | -0.65px (-0.05em) | ヒーロー内リンク（白） |
| Copyright | HelveticaLTWXX-BoldCond | 10px | 400 | 11.5px (1.15) | normal | コピーライト（色 #999999） |

### 3.5 行間・字間

- **本文 line-height**: `1.15`（14.95px / 13px）— **日本語サイトとしては極端に詰まっている**。通常の日本語 1.5〜2.0 の半分以下
- **説明文 line-height**: `1.4`（18.2px / 13px）— 長文のみやや緩めだが、それでも一般的な日本語よりタイト
- **ヒーロー h2 line-height**: `1.15`（71.3px / 62px）— 見出しも本文も同じ 1.15 で統一
- **letter-spacing**: **ネガティブ（負の値）が特徴**
  - ヒーロー h2: `-3.1px`（-0.05em）
  - セクション h2: `-1.65px`（-0.05em）
  - VIEW MORE: `-0.65px`（-0.05em）
  - 説明文: `-0.13px`（-0.01em）
  - 本文・ナビ: `normal`（ネガティブではない要素はゼロ）
- **意図**: テキストを**圧縮・凝縮**して、ストリートウェアの攻撃性とミリタリー的な緊張感を表現。通常の日本語デザインとは真逆の方向性

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — 特別な禁則設定はなし
- 英語中心のコンテンツが多く、和文の禁則は暗黙のブラウザ挙動に任せる

### 3.7 OpenType機能

- **`font-feature-settings: normal`** — palt や kern は強制しない
- **ネガティブ letter-spacing で物理的に詰める**設計。OpenType の字詰めではなく、CSS の letter-spacing でブランドの「圧迫感」を実現

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Subscribe CTA (Primary)
- 背景: `#222222`
- 文字色: `#ffffff`
- font-family: HelveticaLTWXX-BoldCond スタック
- font-size: 13px / weight 400
- line-height: 14.95px (1.15)
- letter-spacing: normal
- padding: 13px 10px
- border: 1px solid `#222222`
- border-radius: **0px**（完全な直角）
- box-shadow: none

#### System Button (Secondary)
- 背景: `#efefef`
- 文字色: `#000000`
- font-family: sans-serif
- font-size: 13px / weight 400
- padding: 1px 6px
- border: none
- border-radius: **0px**

#### Tertiary Button
- 背景: `#efefef`
- 文字色: `#000000`
- font-family: sans-serif
- font-size: 12px / weight 400
- padding: 1px 6px
- border: none
- border-radius: **0px**

### Navigation

- font-family: HelveticaLTWXX-BoldCond スタック（コンデンスドボールド）
- font-size: 13px
- font-weight: 400（選択状態は 700）
- color: `#222222`
- letter-spacing: normal
- 装飾なし（テキストリンク）
- 大文字表記（ALL BRANDS, BRANDS 等）

### Inputs

#### Search Input
- font-family: TsukuGoPr5-D スタック
- font-size: 13px / weight 400
- line-height: 40px（高さ指定）
- 背景: `#ffffff`
- border: none
- border-radius: **0px**
- padding: 0px 6px

#### Subscribe Input
- font-family: sans-serif
- font-size: 13px / weight 400
- 背景: `#ffffff`
- border: none
- border-radius: **0px**
- padding: 0px 15px

#### Form Input (General)
- border: 1px solid `#dddddd`
- border-radius: **0px**

### Cards

- 背景: 透過（`rgba(0, 0, 0, 0)` — 背面の `#f5f5f5` が透ける）
- 罫線: なし
- 影: なし（フラット）
- 角丸: **0px**
- 商品画像の下に 11px のカテゴリラベル（#aaaaaa）+ 13px の商品名 + 13px の価格（#aaaaaa）

### Select (Localization)

- font-family: sans-serif
- font-size: 16px / weight 400
- border: 1px solid `#dddddd`
- border-radius: **0px**
- 背景: `#ffffff`

---

## 5. Layout Principles

- **コンテンツ幅**: 明確な max-width 制約はなし。商品グリッドはフルブリードに近い
- **ヒーロー**: 大判のビジュアル + オーバーサイズのコンデンスドタイポ（62px / -3.1px ls）
- **余白**: セクション間は 21px padding が基本。画像間のギャップは最小限
- **商品グリッド**: コンパクトなマルチカラムグリッド。カテゴリラベル（11px / #aaaaaa）+ 商品名（13px / #222222 or #aaaaaa）+ 価格（13px / #aaaaaa）の3行構成
- **フッター**: `#222222` の暗色フッター。SUBSCRIBE CTA + ロケーション/言語セレクター + コピーライト（10px / #999999）
- **header padding**: `6px 10px 0px`

### Spacing Scale（実測推定）

| Token | Value |
|-------|-------|
| XS | 6px |
| S | 10px |
| M | 15px |
| L | 20-21px |
| XL | 35px |

### Container

- Max Width: 制約なし（フルブリード基調）
- Padding (horizontal): 20〜35px

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**完全にフラット**
- **段階表現**: 影は一切使わず、**色の切り替え（白 → #f5f5f5 → #222222）**のみで面を分ける
- **罫線も最小限** — CTA の `1px solid #222222` とフォーム入力の `1px solid #dddddd` のみ
- **フラット + シャープ**: radius 0px + shadow none の徹底により、軍用品・工業製品的な硬質さを表現

---

## 7. Do's and Don'ts

### Do's

- **HelveticaLTWXX-BoldCond（コンデンスドボールド）** を UI テキスト・見出し・商品情報で使う
- **TsukuGoPr5-D（筑紫ゴシック）** を body・header・footer で使い、和文に個性を持たせる
- **テキストカラーは #222222**（ニアブラック）を一貫して使う
- **ネガティブ letter-spacing** を見出し（-3.1px / -1.65px）・リンク（-0.65px）に適用し、圧縮感を出す
- **border-radius: 0px** をすべての要素で徹底する（ボタン・入力・カード・すべて直角）
- **line-height 1.15** を基本とし、タイトなラインを維持する
- **#f5f5f5** のライトグレーを面色として多用する
- **font-weight 400** をメインに使う（コンデンスド書体自体が視覚的に太い）
- **大文字表記**（ALL BRANDS, SUBSCRIBE, VIEW MORE 等）でテキストを統一する

### Don'ts

- **border-radius を 1px でもつけない** — NEIGHBORHOOD の全コンポーネントは完全な直角。ピルやラウンドは禁止
- **ポジティブな letter-spacing を使わない** — ストリートウェアの攻撃性はネガティブ字間から生まれる。0.05em 等のスペーシングは AURALEE や note の世界
- **line-height を 1.5 以上にしない** — 1.15 のタイトなラインが NEIGHBORHOOD らしさ（説明文のみ 1.4 まで許容）
- **純黒 #000000 をメインテキストに使わない** — `#222222` のニアブラックが基本
- **彩度の高い色を UI に持ち込まない** — モノクロパレット（#222222 / #f5f5f5 / #ffffff）を守る。`--red: #da2c4d` はアクセントのみ
- **柔らかいサンセリフ（Noto Sans JP, 游ゴシック）を UI テキストに使わない** — コンデンスドボールドの硬質さがブランドの根幹
- **影（box-shadow）を追加しない** — フラット + シャープが絶対

---

## 8. Responsive Behavior

- デスクトップ: マルチカラム商品グリッド + 大判ヒーロービジュアル
- ヒーロー h2: 62px（デスクトップ）→ モバイルでは縮小するが、コンデンスドのタイトな印象は維持
- フォントサイズはモバイルでも 13px / 11px 中心（拡大しない）
- ナビゲーション: ハンバーガーメニューに格納（ヘッダーのアイコンボタン）
- 商品グリッド: 2列→1列に切り替え
- **SP でもタイトな line-height 1.15 を維持** — デバイスによって呼吸感を変えない

---

## 9. Agent Prompt Guide

NEIGHBORHOOD らしい UI を生成するときは以下を伝えるとよい：

```
- UI テキスト font-family: HelveticaLTWXX-BoldCond, HelveticaNeue-CondensedBold, "Helvetica Neue", Helvetica, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", YuGothic, -apple-system, "system-ui", sans-serif
- body font-family: TsukuGoPr5-D, TsukuARdGothic-Regular, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif
- 本文 line-height: 1.15（14.95px / 13px）— 極端にタイト
- letter-spacing: ネガティブ値が特徴。h2 ヒーロー -3.1px、セクション -1.65px、リンク -0.65px
- ブランドカラー: #222222（ニアブラック）がテキスト・CTA 両方の支配色
- 面色: #f5f5f5（ライトグレー）が最多使用
- 背景: #ffffff（純白）
- border-radius: 0px を全要素で徹底（ピル / ラウンドは一切なし）
- 影なし（box-shadow: none をすべてに）
- font-weight: 400 がメイン（コンデンスド書体自体が視覚的に太い）
- CTA: bg #222222 / text white / border 1px solid #222222 / padding 13px 10px / radius 0px
- 商品ラベル: 11px / #aaaaaa、商品名: 13px / #222222、価格: 13px / #aaaaaa
- 大文字表記（text-transform: uppercase に近い英文中心の UI）
- TsukuGoPr5-D（筑紫ゴシック）と HelveticaLTWXX-BoldCond（Helvetica コンデンスド）はライセンスフォント
  - 代替: TsukuGoPr5-D → Zen Kaku Gothic New / HelveticaLTWXX-BoldCond → Oswald
```
