# DESIGN.md — CAINZ（カインズ）

> カインズ（https://www.cainz.com/）のデザイン仕様書。
> 日本最大級のホームセンターチェーン。オンラインショップと全国200超の店舗を展開。
> 2021年にデジタル戦略を刷新し、グッドデザイン賞を受賞したEC体験で知られる。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 深いフォレストグリーン `#006438` をブランドカラーに据え、**実用的で清潔感のある EC レイアウト**を構成。オレンジ `#e86e0c` の検索ボタンがアクセントとして視線を誘導し、セール赤 `#b81a35` が価格訴求を担う。ピル型のタグナビゲーションと Tailwind/MUI ハイブリッドの実装が特徴
- **密度**: 商品カードを密にグリッド配置する EC 型。本文 14px / line-height 1.5 と、日本語 EC としては標準的な密度。タグピル群のスクロールナビで多数のカテゴリを圧縮表示
- **キーワード**: フォレストグリーン、実用的 EC、ピルタグナビ、オレンジ検索アクセント、ホームセンターの信頼感
- **特徴**:
  - 和文フォントに**ヒラギノ角ゴ ProN**（Hiragino Kaku Gothic ProN）を最優先。Web フォントは使わず OS 標準書体でフォールバックする実用志向
  - **ブランドカラーは `#006438`（深いフォレストグリーン）**。CSS 変数 `--primary-color: hsl(150, 47%, 27%)` に対応。主要 CTA ボタンの背景に使用
  - **検索アクセントは `#e86e0c`（オレンジ）**。検索バーの虫眼鏡ボタンに使用（`bg-object-secondary-default`）
  - **注意色は `#b81a35`（ディープレッド）**。セールバッジ、カートバッジ、値引き価格の表示色（`text-attention` / `border-attention`）
  - **タグ背景は `#ffdf9a`（ウォームイエロー）**。「送料無料」等のタグに使用（`bg-object-tag`）
  - サーフェスに `#efefef`（ニュートラルグレー）を多用。タグピル・フッターカードの背景（`--object-base-bright-default`）
  - 本文色は `#222222`。CSS 変数 `--primary-text-color` は `#312f2f` だが、実測の computed style は `rgb(34, 34, 34)` = `#222222`
  - MUI（Material UI）のコンポーネントを検索バーとバッジに部分的に使用。Roboto が MUI 経由で混入するが、主要 UI はヒラギノ角ゴ
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Green** (`#006438`): メインのブランドカラー。主要 CTA「トップページに戻る」「カートに入れる」等の背景。CSS 変数 `--primary-color: hsl(150, 47%, 27%)`
- **Search Orange** (`#e86e0c`): 検索ボタンの背景（`bg-object-secondary-default`）。サイト内で唯一のオレンジ要素として強い視線誘導を担う

### Attention / Sale

- **Attention Red** (`#b81a35`): セールバッジの文字・ボーダー、カートバッジ背景、値引き価格表示（`text-attention` / `border-attention` / `text-object-attention-default`）
- **Tag Yellow** (`#ffdf9a`): 「送料無料」タグの背景（`bg-object-tag`）

### CTA / Buttons

- **Primary CTA**: 背景 `#006438` / 文字 `#ffffff` / radius `22px`（丸みのあるピル）/ border `1px solid #006438` / 14px / weight 700
- **Tag Pill**: 背景 `#efefef` / 文字 `#222222` / radius `24px`（ピル）/ padding `8px 16px` / 14px / weight 500
- **More Link（もっと見る）**: 背景 transparent / 文字 `#222222` / border `1px solid #222222` / radius `9999px`（完全ピル）/ padding `12px 0` / 16px / weight 700
- **Search Button**: 背景 `#e86e0c` / 文字 `#ffffff` / radius `0 4px 4px 0`（右側のみ角丸）/ padding `10px` / 24px / weight 700

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#222222` | (34, 34, 34) | 本文テキスト、見出し（computed style 実測値） |
| Text Secondary | `#312f2f` | (49, 47, 47) | CSS 変数 `--primary-text-color`。ボタンテキスト |
| Input Text | `#5e5e5e` | (94, 94, 94) | 検索入力のプレースホルダー |
| MUI Text | `rgba(0,0,0,0.87)` | — | MUI コンポーネント内テキスト |
| Surface Gray | `#efefef` | (239, 239, 239) | タグピル背景・フッターカード背景（`--object-base-bright-default`） |
| Border Default | `#e5e7eb` | (229, 231, 235) | Tailwind `border-gray-200`。全要素のデフォルトボーダー |
| Border Card | `#c6c6c6` | (198, 198, 198) | フッターカードのボーダー（`border-base-default`） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・セールバッジ背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#b81a35`（Attention Red と共用で問題ない）
- **Success**: `#006438`（ブランドグリーンと兼用、または `#16a34a` 程度）
- **Warning**: `#e86e0c`（Search Orange と兼用、または `#d97706` 程度）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ ProN（Hiragino Kaku Gothic ProN）** を最優先。OS 標準フォントで統一する実用志向
- **フォールバック**: `メイリオ (Meiryo)` → `ＭＳ Ｐゴシック (MS PGothic)` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- メインの font-family に欧文専用書体は含まない。ヒラギノ角ゴ ProN の欧文グリフを使用
- MUI コンポーネント内のみ **Roboto**, Helvetica, Arial が適用される（検索インプット・バッジ）

### 3.3 font-family 指定

```css
/* メイン（body, h1〜h3, p, a, span, button, nav, header, footer） */
font-family: "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* MUI コンポーネント（検索インプット、バッジ） */
font-family: Roboto, Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ ProN を最優先し、macOS / iOS での表示品質を確保
- Windows では Meiryo → MS PGothic の順でフォールバック
- Web フォントを使わない選択は、EC サイトとしてのパフォーマンス重視の現れ
- MUI の Roboto は検索バー限定。主要 UI には影響しない

> **代替フォント注記**: ヒラギノ角ゴ ProN は Apple デバイス専用のため、クロスプラットフォームのプレビューでは **Noto Sans JP**（weight 400 / 500 / 700）を代替として使用すると、字面のバランスが近い印象になる（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ／404ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page H1 | Hiragino Kaku Gothic ProN | 14px | **500** | 21px (x1.5) | normal | `#222222` | 「ホームセンター通販のカインズ」。控えめな h1 |
| 404 H1 | Hiragino Kaku Gothic ProN | 18px | 700 | 28px (x1.56) | normal | `#1f2937` | 「お探しのページは見つかりません」 |
| Section H2 (Large) | Hiragino Kaku Gothic ProN | 20px | 700 | 28px (x1.4) | normal | `#222222` | 「お知らせ」（Tailwind `text-xl font-bold`） |
| Section H2 (Medium) | Hiragino Kaku Gothic ProN | 18px | 700 | 27px (x1.5) | normal | `#222222` | 「ピックアップ特集」 |
| Section H2 (Small) | Hiragino Kaku Gothic ProN | 16px | 700 | 24px (x1.5) | normal | `#222222` | 「閲覧急上昇」 |
| Footer H2 | Hiragino Kaku Gothic ProN | 14px | 700 | 21px (x1.5) | normal | `#222222` | 「カインズのその他のサイト」 |
| H3 | Hiragino Kaku Gothic ProN | 16px | 700 | 24px (x1.5) | normal | `#222222` | 「商品に関するお知らせ」 |
| Body / Text | Hiragino Kaku Gothic ProN | 14px | 400 | 22.75px (x1.625) | normal | `#222222` | 一般テキスト |
| Nav Label | Hiragino Kaku Gothic ProN | 14px | 700 | 21px (x1.5) | normal | `#222222` | 「カテゴリから探す」 |
| Nav Link | Hiragino Kaku Gothic ProN | 14px | 500 | 21px (x1.5) | normal | `#222222` | 「ログイン・新規会員登録」 |
| Nav Category | Hiragino Kaku Gothic ProN | 14px | 500 | 21px (x1.5) | normal | `#222222` | カテゴリリスト |
| Caption / Badge Label | Hiragino Kaku Gothic ProN | 11px | 700 | 13.75px (x1.25) | normal | `#222222` / `#b81a35` | 「送料無料」「セール」 |
| Cart Label | Hiragino Kaku Gothic ProN | 12px | 500 | 15px (x1.25) | normal | `#222222` | 「カート」 |
| Price | Hiragino Kaku Gothic ProN | 20px | 400 | 30px (x1.5) | normal | `#b81a35` | 価格表示（Attention Red） |
| Search Input | Roboto | 16px | 400 | 23px (x1.44) | 0.15px | `#5e5e5e` | MUI Autocomplete |
| Cart Badge | Roboto | 11px | 700 | 11px (x1.0) | normal | `#ffffff` | MUI Badge（背景 `#b81a35`） |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (14px)**: `1.5〜1.625`（21〜22.75px / 14px）
- **セクション見出し (16〜20px)**: `1.4〜1.5`
- **バッジ・ラベル (11px)**: `1.25`（13.75px / 11px）
- **body タグ**: `1.8`（46.08 / 25.6。Tailwind のリセットサイズ由来で、実テキストには直接影響しない）

**字間 (letter-spacing)** -- 実測:
- **全要素**: `normal`（明示的な letter-spacing 指定なし）
- **MUI 検索インプットのみ**: `0.15px`（Roboto のデフォルト）

**ガイドライン**:
- カインズは letter-spacing を一切調整しない。フォントのメトリクスをそのまま使う実用主義
- line-height は 1.5 が基本。EC の商品テキストには十分な行間
- 見出しと本文のコントラストは size と weight で作り、letter-spacing では作らない

### 3.6 禁則処理・改行ルール

```css
/* 実サイト準拠 */
word-break: normal;
overflow-wrap: break-word;
```

- Tailwind のデフォルト禁則に従う
- 商品名は `line-clamp-2`（2行打ち切り）等の CSS で制御
- バッジは `w-max` で折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- OS 標準フォント（ヒラギノ角ゴ ProN）のデフォルトメトリクスをそのまま使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（グリーンピル）** -- 「トップページに戻る」「カートに入れる」
- Background: `#006438`
- Text: `#ffffff`
- Padding: `0`（`h-11` = 44px の高さ指定）
- Border Radius: `22px`（高さ 44px の半分で丸みピル）
- Border: `1px solid #006438`
- Font: Hiragino Kaku Gothic ProN, 14px, weight 700
- Height: `44px`（`h-11`）

**Tag Pill（グレーピル）** -- 「TV・SNSで話題」「新商品」「ランキング」
- Background: `#efefef`
- Text: `#222222`
- Padding: `8px 16px`
- Border Radius: `24px`
- Border: none
- Font: Hiragino Kaku Gothic ProN, 14px, weight 500
- Hover: `bg-object-base-bright-dark`（若干暗くなる）

**More Link（ボーダーピル）** -- 「お知らせをもっと見る」
- Background: transparent
- Text: `#222222`
- Padding: `12px 0`（幅は `w-[315px]` 固定）
- Border: `1px solid #222222`
- Border Radius: `9999px`（完全ピル）
- Font: Hiragino Kaku Gothic ProN, 16px, weight 700
- Text Align: center

**Search Button（オレンジ角丸）**
- Background: `#e86e0c`
- Text: `#ffffff`
- Padding: `10px`
- Border Radius: `0 4px 4px 0`（右端のみ角丸。検索バーと接合）
- Border: none
- Font: Hiragino Kaku Gothic ProN, 24px, weight 700
- Height: `44px`（`h-11`）
- Hover: `bg-object-secondary-dark`

### Badges / Tags

**送料無料タグ（イエロー）**
- Background: `#ffdf9a`
- Text: `#222222`
- Padding: `4px 8px`
- Border Radius: `0`（角型）
- Font: 11px, weight 700

**セールバッジ（レッドボーダー）**
- Background: `#ffffff`
- Text: `#b81a35`
- Border: `1px solid #b81a35`
- Padding: `4px 8px`
- Border Radius: `0`（角型）
- Font: 11px, weight 700

**カートバッジ（MUI）**
- Background: `#b81a35`
- Text: `#ffffff`
- Padding: `2px`
- Border Radius: `10px`（丸）
- Font: Roboto, 11px, weight 700

### Inputs

**検索バー（MUI Autocomplete）**
- Background: transparent（コンテナの白に依存）
- Border: MUI OutlinedInput のデフォルト（0px none）
- Font: Roboto, 16px, weight 400
- Color: `#5e5e5e`
- Letter Spacing: `0.15px`

**ネイティブ検索インプット**
- Background: transparent
- Border: `0`（外側コンテナで管理）
- Padding: `0 12px`
- Font: Hiragino Kaku Gothic ProN, 16px, weight 400
- Color: `#312f2f`

### Cards / Surfaces

**フッターカード（サービス一覧）**
- Background: `#efefef`
- Border: `1px solid #c6c6c6`
- Border Radius: `4px`（`rounded-square-button`）
- Shadow: `none`
- Hover: border が transparent になる

**商品カード**（推奨実装）
- Background: `#ffffff`
- Border: `1px solid #e5e7eb`
- Border Radius: `4px`
- Padding: `12px`
- Shadow: `none`（フラット）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #e5e7eb`
- Position: sticky
- Max Width: `1240px`（`--max-content-width`）+ `margin: 0 auto`

### Footer

- Background: transparent（`#ffffff` と同等）
- Padding: フッターカードグリッド + リンク一覧
- Font: 14px / weight 400 / `#222222`

---

## 5. Layout Principles

### Spacing Scale（推奨 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内の上下余白（`py-1`） |
| S | 8px | タグピル内の縦余白（`py-2`）、バッジ内の左右余白（`px-2`） |
| M | 16px | タグピル内の横余白（`px-4`）、モバイルスペーシング（`--spacing-sp`） |
| L | 20px | デスクトップスペーシング（`--spacing-pc`） |
| XL | 40px | セクション間の縦余白（`mt-10`） |
| XXL | 80px | ヒーローバナー上下のゆとり |

### Container

- Max Width: `1240px`（CSS 変数 `--max-content-width`）
- Content Width: `min(1240px, calc(100% - 40px))`（CSS 変数 `--content-width`）
- Padding (horizontal): mobile `16px`（`--spacing-sp`）/ desktop `20px`（`--spacing-pc`）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | バッジ（送料無料・セール）、検索ボタン左側 |
| Small | 4px | フッターカード、検索ボタン右側、商品カード |
| Normal | 22px | 主要 CTA ボタン（`rounded-normal-button`、高さ 44px の半分） |
| Pill | 24px | タグピル（`rounded-3xl`） |
| Full | 9999px | もっと見るリンク（`rounded-full`） |

### Grid

- Tailwind Flexbox ベース（CSS Grid ではない）
- 商品グリッドはスクロール型（水平スクロール + スナップ）
- フッターカード: 2列グリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | 商品カードのホバー（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | ドロップダウン・カテゴリメニュー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではすべての要素が `box-shadow: none`
- カインズは**完全にフラットなデザイン**。立体感は `#efefef` サーフェスとボーダーで表現
- 影を使う場合は EC の商品ホバーなど限定的に、控えめな値で

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **ヒラギノ角ゴ ProN を最優先**、フォールバックは Meiryo → MS PGothic → sans-serif
- 主要 CTA は **`#006438` のグリーンピル（radius 22px）**。ホームセンターのブランドカラーを明確に使う
- 検索ボタンは **`#e86e0c` のオレンジ**。検索アクションの視認性を高める
- セール・値引き系は **`#b81a35` のレッド**で統一。バッジは角型（radius 0）で情報ラベルとして扱う
- 「送料無料」タグは **`#ffdf9a` のイエロー背景**で、購買判断を助ける情報として表示
- タグピルは **`#efefef` 背景 + 24px radius**。カテゴリフィルターとして横スクロール配置
- 本文は **14px / weight 400 / line-height 1.5**。EC の情報密度に合った基本サイズ
- letter-spacing は **normal**（調整しない）。OS フォントのメトリクスを信頼する

### Don't（禁止）

- 主要 CTA に **オレンジ `#e86e0c` を使わない** -- オレンジは検索ボタン専用。CTA はグリーン `#006438`
- 主要 CTA に **赤 `#b81a35` を使わない** -- 赤はセール・注意の合図色。CTA とは明確に分離
- **角丸のない直角ボタン**（radius 0）を CTA に使わない -- radius 0 はバッジ・タグ用。ボタンは必ず丸みを持つ
- 本文に **line-height: 1.2 以下**を使わない（日本語の可読性が低下する）
- **MUI Roboto を主要 UI に使わない** -- Roboto は検索バーとバッジの MUI コンポーネント限定。メインは Hiragino
- letter-spacing に **palt や kern** を適用しない（サイト全体で normal が基本）
- **冷たいブルー系**のリンク色を使わない -- カインズにはテキストリンク専用の青が存在しない。リンクは `#222222` + hover:underline
- バッジに **ピル radius（24px 以上）を使わない** -- 「送料無料」「セール」は角型（0px）。ピルはナビタグ専用

---

## 8. Responsive Behavior

### Breakpoints（Tailwind 互換）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット。`max-md:` でモバイル条件分岐 |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 広いデスクトップ（`--max-content-width: 1240px` に収まる） |

### モバイル時の調整

- ナビゲーション: カテゴリリストの `px-5` パディングがモバイルでは `pl-4` に
- 検索バー: ハンバーガーメニュー内に移動（推奨）
- 商品グリッド: 横スクロール → 2カラムグリッド
- タグピル: 水平スクロールナビ維持
- テキスト: 本文 14px を維持、見出しは 16〜18px に縮小

### タッチターゲット

- 主要 CTA: 高さ `44px`（`h-11`）-- Apple HIG / WCAG 準拠
- タグピル: 36px 程度（`py-2` + 14px font + 1.43 line-height）
- 検索ボタン: 44px（`h-11`）
- Swiper ナビゲーション: 44px（`--swiper-navigation-size`）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green (CTA): #006438
Search Orange: #e86e0c
Attention Red (Sale): #b81a35
Tag Yellow (送料無料): #ffdf9a
Text Primary: #222222
Text Secondary: #312f2f
Surface Gray: #efefef
Border Default: #e5e7eb
Border Card: #c6c6c6
White: #ffffff

Font: "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
（プレビュー代替: Noto Sans JP）

Body Size: 14px / line-height 1.5 / weight 400 / letter-spacing normal
Section H2: 16-20px / line-height 1.4-1.5 / weight 700
Caption Badge: 11px / line-height 1.25 / weight 700

Border Radius: 0px（バッジ）/ 4px（カード）/ 22px（CTA）/ 24px（タグピル）/ 9999px（もっと見る）
Shadow: 基本 none。階層は #efefef サーフェスとボーダーで表現
Max Content Width: 1240px
```

### プロンプト例

```
カインズのデザインに従って、ホームセンター EC の商品一覧ページを作成してください。
- フォント: "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- セクション見出し: 16〜20px / weight 700 / line-height 1.4〜1.5 / color #222222
- 本文: 14px / weight 400 / line-height 1.5 / color #222222
- letter-spacing: normal（調整しない）
- 主要 CTA: 背景 #006438（ブランドグリーン）/ 白文字 / border-radius 22px / border 1px solid #006438 / 高さ 44px / 14px / weight 700
- タグピル: 背景 #efefef / 文字 #222222 / radius 24px / padding 8px 16px / 14px / weight 500
- 検索ボタン: 背景 #e86e0c（オレンジ）/ 白文字 / radius 0 4px 4px 0 / 24px / weight 700
- セールバッジ: 背景 白 / 文字 #b81a35 / border 1px solid #b81a35 / radius 0 / 11px / weight 700
- 送料無料タグ: 背景 #ffdf9a / 文字 #222222 / radius 0 / 11px / weight 700
- 商品カード: 背景 白 / border 1px solid #e5e7eb / radius 4px / shadow none
- フッターカード: 背景 #efefef / border 1px solid #c6c6c6 / radius 4px
- box-shadow は基本 none。フラットデザイン
- Max Width: 1240px
```
