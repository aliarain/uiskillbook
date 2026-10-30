# DESIGN.md — Zoff（ゾフ）

> Zoff（https://www.zoff.co.jp/）のデザイン仕様書。
> 「メガネが関わるすべてのことに、もっとワクワクを。」をビジョンに掲げるアイウェアブランド。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Helvetica Neue** を欧文先頭に、**ヒラギノ角ゴ ProN** を和文フォールバックとするクリーンなシステムフォント構成。ナビゲーションラベルに **Open Sans** weight 600、レンズ説明等の一部見出しに **Noto Sans JP** を併用する三層構成
- **密度**: 本文 15-16px / line-height 1.6 / letter-spacing normal。商品グリッドと読みやすさを両立するコンパクトな組版
- **キーワード**: Zoff Blue `#4998db`、pill ボタン、白ベースのクリーン EC、Open Sans ナビ、欧文先頭フォントスタック
- **特徴**:
  - **ページ背景は純白 `#ffffff`**。商品に集中させるミニマルな白地
  - **ブランドカラーは Zoff Blue `#4998db`**。店舗検索ボタン、バッジカウンター、リンク色 `#2199e1` に一貫して使用
  - **ボタンは pill 形状（radius 40px〜1440px）** が基本。EC サイトとしては珍しい大胆な丸みが Zoff のアイデンティティ
  - **"もっと見る" ボタンは白背景 + 黒ボーダーのピル**（outlined pill）。ブランドカラーではなくニュートラル
  - **セール・LP バナーには `#e60012`（鮮紅）** を使用。ブランドブルーとの二色で緩急をつける
  - **フォントスタックが欧文先頭**（"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo）。ブランド書体は持たずシステムフォントで統一
  - **letter-spacing は全体 `normal`**。palt も不使用。きわめてプレーンな組版
  - **ナビゲーションラベルに Open Sans weight 600** を採用。カテゴリ名の視認性を欧文フォントで担保

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値に基づく。すべて hex 表記。

### Brand

- **Zoff Blue** (`#4998db`): メインのブランドカラー。店舗検索ボタン、バッジ、アクセント全般に使用
- **Link Blue** (`#2199e1`): テキストリンク、テキストアクセント。Zoff Blue のやや明るいトーン

### Semantic

- **Sale Red** (`#e60012`): LP バナー・セール情報。"対象商品へ" のトーストバナー等
- **Danger（推奨）**: `#e60012`（セールレッドと共用）
- **Success（推奨）**: `#2e8b57`
- **Warning（推奨）**: `#d97a00`

### CTA / Buttons

- **Primary CTA（Zoff Blue ピル）**: 背景 `#4998db` / 文字 `#ffffff` / radius `40px`（pill） / padding `10px 24px`
- **Secondary CTA（"もっと見る" outlined ピル）**: 背景 `#ffffff` / 文字 `#000000` / border `1px solid #000000` / radius `1440px`（pill）
- **LP Banner Toast（セールレッド）**: 背景 `#e60012` / 文字 `#ffffff` / radius `4px`

### Neutral

| Token | Value | 役割 |
|-------|-------|------|
| Text Primary | `#000000` | 主要テキスト・見出し |
| Text Secondary | `#3d3d3d` | 補足テキスト（CSS 変数 `--color-text-secondary`） |
| Background | `#ffffff` | ページ背景 |
| Surface Light | `#f7f7f7` | セクション背景・カード面 |
| Surface Light Alt | `#f6f6f6` | 代替サーフェス |
| Surface Warm | `#f7f8f8` | 淡い寒色系サーフェス |
| Border | `#dddddd` | 区切り線・入力枠 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（主要）**: **ヒラギノ角ゴ ProN**（Hiragino Kaku Gothic ProN）をフォールバック和文として使用
- サブ用途で **Noto Sans JP** を一部見出し（レンズ説明等）に使用
- **Meiryo** が最終フォールバック
- 明朝体は使用しない（全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ（本文）**: **Helvetica Neue** を最優先、**Arial** がフォールバック
- **サンセリフ（ナビ）**: **Open Sans** weight 600 をナビゲーションラベルに使用
- 等幅フォントの明示指定なし

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・一般 UI（欧文先頭） */
font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

/* ナビゲーションラベル */
font-family: "Open Sans", sans-serif;

/* 一部見出し（レンズ説明等） */
font-family: "Noto Sans JP", sans-serif;

/* レンズセクション */
font-family: "Helvetica Neue";
```

**フォールバックの考え方**:
- **欧文先頭の構成**: Helvetica Neue → Arial → ヒラギノ角ゴ ProN → Meiryo → sans-serif
- Helvetica Neue を先頭に置き、欧文の表示品質を優先。和文はヒラギノ / Meiryo のシステムフォントに委ねる
- ナビラベルは Open Sans 単独指定で欧文表示に特化。日本語カテゴリ名はシステムフォントにフォールバック

> **代替フォント注記**:
> - **Helvetica Neue** はシステムフォント。Web プレビューでは **Inter**（Google Fonts、Helvetica に近い現代サンセリフ）が代替として適切
> - **Open Sans** は Google Fonts で利用可能。そのまま使用できる
> - **Noto Sans JP** も Google Fonts で利用可能。そのまま使用できる

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (Logo Area) | Helvetica Neue | 40px | 400 | 40px (1.0) | normal | `#000000` | ロゴ・大見出し |
| H2 (Section Title) | Helvetica Neue | 28px | 400 | 28px (1.0) | normal | `#000000` | "PICK UP" 等のセクション見出し |
| H3 (Sub Heading) | Helvetica Neue | 18-20px | 500-700 | 22-32px (1.2-1.6) | normal | `#000000` | サブセクション見出し |
| H3 (Lens Section) | Noto Sans JP | 15px | 400 | 22px (1.47) | normal | `#000000` | レンズ説明の見出し |
| H3 (Category Nav) | Open Sans | 16px | 600 | 22px (1.375) | 1px (0.0625em) | `#000000` | カテゴリナビゲーション |
| H4 (Footer Nav) | Helvetica Neue | 15px | 500 | 22px (1.47) | normal | `#000000` | フッターナビ |
| Body | Helvetica Neue | 16px | 400 | 25.6px (1.6) | normal | `#000000` | 主要本文 |
| Body (Sub) | Helvetica Neue | 15px | 400 | 24px (1.6) | normal | `#000000` | サブ本文 |
| Item Name | Helvetica Neue | 15px | 400 | 22px (1.47) | normal | `#000000` | 商品名 |
| Item Price | Helvetica Neue | 17px | 700 | 22px (1.29) | 0.5px (0.029em) | `#000000` | 価格表示 |
| Item Code | Helvetica Neue | 12px | 400 | 19.2px (1.6) | normal | `#3d3d3d` | 商品コード・型番 |
| Guide Link | Helvetica Neue | 12px | 400 | 19.2px (1.6) | normal | `#2199e1` | ガイドリンク |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (15-16px)**: **`1.6`**
- **見出し H1-H2 (28-40px)**: **`1.0`**（タイトで引き締まった見出し）
- **商品名 / H3-H4 (15-20px)**: `1.2〜1.47`
- **価格 (17px Bold)**: `1.29`

**字間 (letter-spacing)** -- 実測:
- **全体**: **`normal`**（明示的な letter-spacing なし）
- **例外: Open Sans カテゴリナビ**: `1px`（= 約 `0.0625em`）
- **例外: 価格表示**: `0.5px`（= 約 `0.029em`）

**ガイドライン**:
- Zoff は **letter-spacing を意図的に `normal` のまま** にしている。和欧混植でもプレーンな組版
- 見出しの line-height が `1.0` と非常にタイト。セクション見出しはコンパクトに収める設計
- 本文は `1.6` で日本語としては標準的な読みやすさを確保
- 価格だけ letter-spacing `0.5px` を入れ、数字の可読性を高めている

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名やブランド名は自然な折り返しが基本

### 3.7 OpenType 機能

```css
/* Zoff は OpenType 機能を明示的に使用していない */
font-feature-settings: normal;
```

- **palt**: 不使用。和文のプロポーショナル字詰めは適用しない
- **kern**: ブラウザデフォルト任せ
- フォントスタックが欧文先頭のため、和文固有の字詰め調整は行わない設計

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（Zoff Blue ピル）** -- 店舗検索ボタン
- Background: `#4998db`
- Text: `#ffffff`
- Border: none
- Padding: `10px 24px`
- Border Radius: `40px`（pill）
- Font: Helvetica Neue, 15px, weight 500

**Secondary CTA（"もっと見る" outlined ピル）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `10px 24px`
- Border Radius: `1440px`（pill）
- Font: Helvetica Neue, 15px, weight 400

**Sale Banner CTA（セールレッド）** -- "対象商品へ"
- Background: `#e60012`
- Text: `#ffffff`
- Border: none
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: Helvetica Neue, 14px, weight 700

**Badge Counter**
- Background: `#4998db`
- Text: `#ffffff`
- Border Radius: `10px`
- Font: 12px, weight 700
- Min Width: 20px

### Inputs

**Search Input（pill）**
- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Border Radius: `40px`（pill）
- Padding: `10px 20px`
- Font: Helvetica Neue, 16px
- Focus Border: `1px solid #4998db`

**Standard Input**
- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Border (focus): `1px solid #4998db`
- Border Radius: `0`（角丸なし）
- Padding: `10px 12px`
- Font: Helvetica Neue, 16px

### Product Card

- Background: `#ffffff`
- Border: なし（または `1px solid #f7f7f7`）
- Border Radius: なし（0）
- Padding: 内容に応じて 12〜16px
- Title: 15px, weight 400
- Price: 17px, weight 700, letter-spacing 0.5px
- Code: 12px, weight 400, color `#3d3d3d`

### Cards / Surfaces

- Surface 階層: `#ffffff`（背景）→ `#f7f7f7`（カードセクション）→ `#f6f6f6`（代替面）→ `#dddddd`（境界）
- Border: なしが基本、区切り線として `#dddddd`
- Border Radius: `0`（角丸なしの直線的なカード）

### Header / Nav

- Background: `#ffffff`
- Border Bottom: `1px solid #dddddd`（または none）
- Padding: `0 24px`
- Height: 60〜70px

### Footer

- Background: `#ffffff`（透明 / 特別な背景色なし）
- Padding: `40px 24px`
- Color: `#000000` 主体

---

## 5. Layout Principles

### Spacing Scale（推奨 8px ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内の段落間 |
| M | 16px | カード内の余白 |
| L | 24px | セクション内のブロック間 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー・メインビジュアルの上下 |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): `24〜48px`（PC）/ `16px`（mobile）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | `0` | 商品カード・入力フィールド |
| Small | `4px` | セールバナー CTA |
| Badge | `10px` | バッジカウンター |
| Pill | `40px` / `1440px` | ボタン・検索入力 |

### Grid

- 商品グリッドは **3〜4 カラム**（PC）/ 2 カラム（mobile）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。商品カード・ヘッダー・フッター |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | ドロップダウン・メニュー（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.14)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- **立体感はサーフェスの背景色差（`#ffffff` vs `#f7f7f7`）とボーダー（`#dddddd`）で表現**
- フラットでミニマルな外観がZoffの基調

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントスタックは **"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif** を維持する（欧文先頭）
- ナビゲーションラベルは **"Open Sans" weight 600** で組む
- ブランドカラーは **`#4998db`（Zoff Blue）** を一貫して使う。リンクは `#2199e1`
- ボタンは **pill（radius 40px 以上）** が Zoff のアイデンティティ。角丸の少ないボタンはセールバナーのみ
- 本文の line-height は **1.6** を維持する
- letter-spacing は **`normal`** を基本とし、例外は価格表示の `0.5px` のみ
- 商品カードは **白背景・ボーダーなし・角丸なし** でフラットに
- サーフェスは `#f7f7f7` / `#f6f6f6` の微差で面を分ける

### Don't（禁止）

- ボタンに **角丸 `4px` や `8px` を使わない** -- Zoff のボタンは pill か 0 か。中途半端な角丸は避ける
- ブランドカラーに **紺や濃紺を使わない** -- `#4998db` の明るいブルーが Zoff の押し
- 和文フォントを **font-family の先頭に置かない** -- Zoff は欧文先頭（Helvetica Neue が最優先）
- letter-spacing を **`0.04em` 以上に広げない** -- Zoff はプレーンな `normal` で組む
- 本文に **palt や kern を強制適用しない** -- Zoff は OpenType 機能を意図的に使わない
- セールレッド `#e60012` を **通常の CTA に使わない** -- セール・プロモーション専用
- 商品カードに **大きな box-shadow を付けない** -- フラットなサーフェス差で表現する

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |

### モバイル時の調整

- H1: 40px → 28px
- H2 セクション見出し: 28px → 20px
- 本文サイズは 15-16px を維持
- 左右 padding を 16px に縮小
- 商品グリッドは 4 カラム → 2 カラム
- pill ボタンのサイズは維持（タッチターゲット確保）

### タッチターゲット

- 主要 CTA（pill）: padding `10px 24px` で約 44px の高さを確保
- 検索ボタン: pill 形状で十分なタッチエリア
- 商品カード全体がタップターゲット

### ダークモード

- 未確認。実測時点ではライトモードのみ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Zoff Blue: #4998db
Link Blue: #2199e1
Sale Red: #e60012

Text Primary: #000000
Text Secondary: #3d3d3d
Background: #ffffff
Surface: #f7f7f7
Border: #dddddd

Body Font: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Nav Font: "Open Sans", sans-serif (weight 600)
Sub Heading Font: "Noto Sans JP", sans-serif

Sizes:
  H1: 40px / weight 400 / line-height 1.0
  H2: 28px / weight 400 / line-height 1.0
  H3: 18-20px / weight 500-700 / line-height 1.2-1.6
  Body: 15-16px / weight 400 / line-height 1.6
  Price: 17px / weight 700 / letter-spacing 0.5px
  Code/Caption: 12px / weight 400

Letter Spacing: normal (全体)
palt: 不使用
font-feature-settings: normal

Border Radius: 0（カード）/ 4px（セールCTA）/ 10px（バッジ）/ 40px+（pill ボタン）
```

### プロンプト例

```
Zoff のデザインに従って、商品一覧ページを作成してください。
- 本文フォント: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
- ナビフォント: "Open Sans", sans-serif（weight 600）
- セクション見出し: 28px / weight 400 / line-height 1.0
- 本文: 15px / weight 400 / line-height 1.6 / letter-spacing normal
- 商品名: 15px / weight 400 / color #000000
- 価格: 17px / weight 700 / letter-spacing 0.5px / color #000000
- 型番: 12px / weight 400 / color #3d3d3d
- 主要 CTA: 背景 #4998db（Zoff Blue）/ 白文字 / radius 40px (pill) / padding 10px 24px
- セカンダリ "もっと見る": 白背景 / 黒文字 / border 1px solid #000 / radius 1440px (pill)
- セール CTA: 背景 #e60012 / 白文字 / radius 4px
- 商品カード: 白背景 / radius 0 / border なし / shadow なし
- セクション背景: #f7f7f7
- リンク色: #2199e1
- ボーダー: #dddddd
- palt / kern を適用しない（font-feature-settings: normal）
- ボタンは pill 形状が基本（角丸 4-8px の中途半端な丸みは使わない）
```
