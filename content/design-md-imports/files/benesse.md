# DESIGN.md — Benesse（ベネッセ）

> Benesse Corporation（https://www.benesse.co.jp/）のデザイン仕様書。
> 「よく生きる」を企業理念に掲げる日本の総合教育・生活事業企業。進研ゼミ、こどもちゃれんじ、介護、語学等を展開。
> 実サイトの computed style 実測（2026-06-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウォームグレー（`#32322e` / `#f7f6f4`）を基調に、**ブルー系アクセント `#0277c3` / `#0860a8`** で信頼性を表現。ブランドページは大型タイポグラフィ（64px / weight 300）を使ったエディトリアル・マガジン調のレイアウトで、教育企業としての格と知性を演出
- **密度**: 本文の line-height は 1.25 と日本語サイトとしてはタイト。情報量を多く詰め込むコーポレートサイトの設計。ブランドページは大胆な余白とスケール感で対比を作る
- **キーワード**: ウォームグレー、コーポレートブルー、エディトリアル大型見出し、Koburina Gothic の端正な字面、教育・生活事業の信頼感
- **特徴**:
  - 和文フォントに **Koburina Gothic（コブリナ ゴシック、Fontworks）** を採用。TypeSquare 経由で配信される商用 Web フォント。W3（細字）と W6（中太）の 2 ウェイト構成
  - **body レベルで `font-feature-settings: "palt"` がグローバル適用**。日本語全体がプロポーショナル字詰めで組まれている。note のように見出し限定ではなく、本文を含む全テキストに適用されている点が特徴的
  - テキストカラーは **`#32322e`（ウォームダークグレー）** で、純黒 `#000000` ではない。R=G>B の暖色傾向で、ブランドの温かみを文字色レベルで表現
  - セクション背景は **`#f7f6f4`（ウォームライトグレー）** で、冷たい `#f5f5f5` ではなくわずかに黄み・赤みを含む
  - ブランドページのボタンは **ピル型（radius 30〜40px）** で、ダークグレー `#333333` 背景 + 白文字の落ち着いた配色
  - 英文見出しに **Roboto**、ブランドページの UI 要素に **Inter** を使用。和文と欧文で書体を明確に分けている
  - サービスカテゴリを **ブルー `#0277c3` / バイオレット `#b47fd9` / アジュール `#2da1d6` / パープル `#8b6cc6`** で色分け。教育・介護・語学等の多角事業を視覚的に区別
  - ブランドページに SDGs 関連の **イエロー `#fee101`** がアクセントとして使用
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値および CSS Custom Properties。すべて hex 表記。

### Brand

- **Primary Black** (`#000000` / `--color-primary`): メインのブランドプライマリ。ロゴ、ヘッダー等の基幹要素
- **Strong Blue** (`#0277c3` / `--color-strong-blue`): リンク色、CTA の強調、テキストリンク。ベネッセの「信頼のブルー」
- **Hover Blue** (`#0860a8` / `--color-hover`): リンクホバー時の色。Strong Blue より深い青
- **Sea Blue** (`#287fcc` / `--color-sea-blue`): 補助的なブルー。バナー、アイコン等
- **SDGs Yellow** (`#fee101`): ブランドページの SDGs セクションに使用される黄色アクセント

### Service Category Colors（事業色分け）

- **Brilliant Azure** (`#2da1d6` / `--color-brilliant-azure`): 教育系サービス
- **Light Violet** (`#b47fd9` / `--color-light-violet`): 生活・介護系サービス
- **Moderate Purple** (`#8b6cc6` / `--color-moderate-purple`): 語学・グローバル系サービス

### CTA / Buttons（ブランドページ）

- **Scroll CTA**: 背景 `#333333` / 文字 `#ffffff` / radius `30px`（pill）/ Inter 14px / weight 600
- **Primary Pill CTA**: 背景 `#ffffff` / 文字 `#333333` / radius `40px`（pill）/ Koburina W6 16px / letter-spacing 1.6px
- **Tag Filter**: 背景 `transparent` / 文字 `#333333` / border `1px solid rgba(51,51,51,0.1)` / radius `12px` / Koburina W6 16px

### Neutral — Warm Gray Scale

| Token | hex | CSS Variable | 役割 |
|-------|-----|-------------|------|
| Dark Gray | `#32322e` | `--color-darkgry` | 本文テキスト（**ウォーム傾向**: R=G>B） |
| Gray | `#676767` | `--color-gry` | 補助テキスト |
| Gray 2 | `#828181` | `--color-gry2` | 第三階層テキスト |
| Light Gray | `#cccccc` | `--color-lightgry` | ボーダー、区切り線 |
| Default Border | `#707070` | `--bdr-default` | デフォルトのボーダー色 |
| Warm Surface | `#f7f6f4` | — | セクション背景（**ウォーム傾向**: 黄み・赤みを含む） |
| Neutral Surface | `#f5f5f5` | — | フッター背景 |
| Menu BG | `#ececec` | `--bg-menu` | メニュー背景 |
| Tag BG | `#a9a9a9` | `--bg-tag` | タグ背景 |
| Breadcrumb BG | `#f3f7fb` | `--bg-breadcrumb` | パンくずリスト背景 |
| Main Heading BG | `#f5f5f5` (98% opacity) | `--bg-mainHeading` | メイン見出しセクション背景 |
| White | `#ffffff` | — | ページ背景 |
| Button Dark | `#333333` | — | ブランドページのボタン背景、ダーク UI 要素 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。教育サービスの管理画面向けに推奨する補完値:

- **Danger**: `#dc2626` 程度のレッド
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Koburina Gothic（コブリナ ゴシック）** を最優先。Fontworks 製、TypeSquare 経由で配信
  - **W3（JIS2004）**: 本文用。CSS 変数 `--font-koburina-w3`
  - **W6（JIS2004）**: 見出し・強調・ナビ用。CSS 変数 `--font-koburina-w6`
- **フォールバック**: `"Hiragino Kaku Gothic Pro"`（macOS）→ `Meiryo`（Windows）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

> **代替フォント注記**: Koburina Gothic は Fontworks の商用フォントで、TypeSquare のドメインライセンスでのみ配信される。デザインのプレビューや社外資料で再現できない場合は、**Zen Kaku Gothic New**（Google Fonts、同じ Fontworks 系）を代替として使用すると字形の印象が近い。Noto Sans JP よりもフォント提供元が同じ書体を選ぶことで、ブランドの雰囲気を保てる。preview.html はこの代替を使用。

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **Roboto** — セクション見出し（英文）、本文の欧文グリフで使用
- **サンセリフ（ブランドページ UI）**: **Inter** — ブランドページのスクロール CTA 等で使用
- **フォールバック**: `sans-serif`
- 欧文フォントが font-family の先頭に来る構成（`Roboto, "Koburina Gothic W3 JIS2004", ...`）

### 3.3 font-family 指定

```css
/* 本文（--font-koburina-w3） */
font-family: Roboto, "Koburina Gothic W3 JIS2004", "Hiragino Kaku Gothic Pro",
  Meiryo, sans-serif;

/* 見出し・ナビ・強調（--font-koburina-w6） */
font-family: Roboto, "Koburina Gothic W6 JIS2004", "Hiragino Kaku Gothic Pro",
  Meiryo, sans-serif;

/* ブランドページ CTA（ボタンラベル） */
font-family: "Koburina Gothic W6 JIS2004", sans-serif;

/* ブランドページ英文 UI */
font-family: Inter, sans-serif;

/* セクション見出し（英文） */
font-family: Roboto, sans-serif;

/* 別途定義あり（未使用の可能性含む） */
/* --font-kozuka: 'Kozuka Gothic Pr6N', sans-serif */
/* --font-NotoSansJP: 'Noto Sans JP', sans-serif */
/* --font-hiragino: 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif */
```

**フォールバックの考え方**:
- **欧文優先構成**: Roboto を先頭に置き、ASCII 範囲は欧文書体で統一。和文グリフは Koburina Gothic にフォールバック
- Koburina Gothic 不在環境（TypeSquare 未読み込み時）では即座に Hiragino Kaku Gothic Pro → Meiryo へフォールバック
- ブランドページのボタンラベルは Koburina W6 単独指定（Roboto を挟まない）で和文の印象を優先

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ＋ブランドページ、2026-06-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (JP) | Koburina W3 | 64px | **300** | 86px (x1.34) | 10% | `#32322e` | ブランドページ大見出し。超軽量ウェイトでエレガント |
| Display (EN) | Roboto | 36px | 600 | 40px (x1.11) | 5% | `#32322e` | 英文セクション見出し |
| Section H2 (EN) | Roboto | 36px | 700 | 40px (x1.11) | 5% | `#32322e` | セクションヘッダー（英文） |
| Nav Mega Title | Koburina W6 | 24px | 600 | 20px (x0.83) | normal | `#32322e` | メガメニューのカテゴリ名 |
| Nav Text | Koburina W6 | 18px | 600 | 20px (x1.11) | normal | `#32322e` | グローバルナビ |
| Nav Label | Koburina W6 | 16px | 600 | 20px (x1.25) | normal | `#32322e` | ナビ内ラベル |
| Body | Koburina W3 | 16px | 400 | 20px (x1.25) | normal | `#32322e` | 本文 |
| Brand Pill CTA | Koburina W6 | 16px | 400 | — | 1.6px (0.1em) | `#333333` | ブランドページのピル CTA ラベル |
| Scroll CTA | Inter | 14px | 600 | — | 1.12px (0.08em) | `#ffffff` | ブランドページのスクロール誘導 CTA |
| Tag Filter | Koburina W6 | 16px | 400 | — | 1.6px (0.1em) | `#333333` | ブランドページのタグフィルターラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.25`（20px / 16px）— 日本語サイトとしてはかなりタイト。コーポレートサイトの情報密度を優先した設計
- **ナビ (18px)**: `1.11`（20px / 18px）— 一行高さに近い
- **Display 見出し (64px)**: `1.34`（86px / 64px）— 大型見出しは余裕を持たせる
- **英文見出し (36px)**: `1.11`（40px / 36px）— 英文見出しもタイト
- CSS 変数: `--line-height-s: 1.4` / `--line-height-m: 1.6` / `--line-height-l: 20px`

**字間 (letter-spacing)** — 実測:
- **本文**: `normal`（明示的な letter-spacing 指定なし。ただし `palt` によるグローバル字詰めあり）
- **Display 見出し (64px)**: `10%`（非常に広いトラッキング。大型見出しの呼吸感を演出）
- **英文見出し (36px)**: `5%`
- **ブランドページ CTA**: `1.6px`（0.1em 相当）— ボタンラベルに広めのトラッキング
- **スクロール CTA**: `1.12px`（0.08em 相当）

**ガイドライン**:
- 本文は **line-height 1.25 + palt グローバル適用** が Benesse の基本リズム。他の日本語サイト（note: 2.0、STORES: 1.75）と比較してかなりタイト
- 大型 Display 見出し（64px）は **weight 300 + 広い letter-spacing** でエレガントに、英文見出し（36px）は **weight 600〜700 + 5% トラッキング** で力強く
- ブランドページの CTA ラベルは **0.1em** の広めのトラッキングで、高級感のある字送り

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ブランドページのヒーロー見出しは `<br>` で改行位置を手動指定
- ナビ・ボタンラベルは `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* body レベルでグローバル適用 */
font-feature-settings: "palt";
```

- **`palt` がグローバル適用**されている点が Benesse の特徴。body 要素に設定されており、見出し・本文・ナビ・ボタンを含む全テキストに適用
- note（見出し限定 palt）や STORES（palt なし）とは異なるアプローチ
- 全角句読点や括弧のツメが全体に効くため、和文の行長が欧文に近いリズムになる
- Koburina Gothic のメトリクスと palt の組み合わせで、タイトでありながら読みやすい組版を実現

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Scroll CTA（ブランドページ）** — スクロール誘導
- Background: `#333333`
- Text: `#ffffff`
- Padding: —
- Border Radius: `30px`（pill）
- Font: Inter, 14px, weight 600, letter-spacing 1.12px
- Border: none

**Primary Pill CTA（ブランドページ）** — メインアクション
- Background: `#ffffff`
- Text: `#333333`
- Padding: `0 15px 0 30px`（左右非対称。右矢印アイコン分のスペース）
- Border Radius: `40px`（pill）
- Font: Koburina W6, 16px, weight 400, letter-spacing 1.6px
- Border: none

**Tag Filter（ブランドページ）** — カテゴリ絞り込み
- Background: `transparent`
- Text: `#333333`
- Padding: `15px 18px 15px 45px`（左にアイコンスペース）
- Border Radius: `12px`
- Font: Koburina W6, 16px, letter-spacing 1.6px
- Border: `1px solid rgba(51, 51, 51, 0.1)`

**Text Link** — 本文中のリンク
- Background: transparent
- Text: `#0277c3`（Strong Blue）
- Text (hover): `#0860a8`（Hover Blue）
- Padding: `0`
- Font: Koburina W3, 16px, weight 400
- Border: none（必要に応じて underline）

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`（Light Gray）
- Border (focus): `1px solid #0277c3`（Strong Blue）
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: Koburina W3, 16px, weight 400
- Height: `44px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f7f6f4`（ウォームサーフェス）/ `#f5f5f5`（ニュートラルサーフェス）
- Border: `1px solid #cccccc` または border なし
- Border Radius: `4〜8px`
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`
- Height: `100px`（`--header-height: 100px`）
- Border Bottom: `1px solid #cccccc` 程度
- Position: `fixed top: 0`

### Footer

- Background: `#f5f5f5`
- Border Top: `1px solid #cccccc`
- Padding: `48px 24px`

### Breadcrumb

- Background: `#f3f7fb`（`--bg-breadcrumb`）
- Font: Koburina W3, 14px
- Color: `#676767`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度（推奨値）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | 入力欄、小カード |
| Medium | 8px | カード、パネル |
| Tag | 12px | タグフィルターボタン |
| Pill Small | 30px | スクロール CTA |
| Pill Large | 40px | メイン CTA |

### Grid

- 12 カラムグリッドが実装上自然（CSS Grid または Flexbox）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・大半の要素（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・メガメニュー |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ウォームサーフェス `#f7f6f4`** と **`#f5f5f5`** の面色で階層を表現
- 影を使う場合も **彩度の低い黒**（`rgba(0, 0, 0, 0.06〜0.12)`）で控えめに

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **Koburina Gothic を最優先**、フォールバックは Hiragino Kaku Gothic Pro → Meiryo。Koburina 不在環境では **Zen Kaku Gothic New**（Google Fonts）を代替にする
- **`font-feature-settings: "palt"` を body レベルで適用**する。Benesse の組版は全体がプロポーショナル字詰め
- 本文のテキストカラーは **`#32322e`（ウォームダークグレー）** を使う。`#000000` 純黒は避ける
- セクション背景は **`#f7f6f4`（ウォームグレー）** を使い、冷たい `#f0f0f0` や `#f3f4f6` は避ける
- 補助テキストは `#676767`、第三階層テキストは `#828181` で段階をつける
- リンクは **`#0277c3`（Strong Blue）**、ホバーは **`#0860a8`（Hover Blue）**
- ブランドページのボタンは **ピル型（radius 30〜40px）**、ダークグレー `#333333` or 白背景で落ち着いた配色
- 英文見出しには **Roboto**（weight 600〜700）を使い、和文と明確に書体を分ける
- Display 見出し（64px クラス）は **weight 300** のウルトラライトでエレガントに

### Don't（禁止）

- 本文に **`#000000`（純黒）** を使わない — Benesse のテキストカラーは `#32322e`（ウォーム）が基本
- **`palt` を見出しだけに限定しない** — Benesse はグローバル適用。body から外すとブランドの組版リズムが崩れる
- **冷たいグレー**（`#9ca3af`、`#6b7280`、`#f3f4f6`）を使わない（ウォームトーンを壊す）
- 主要テキストに **`#000000` と `#32322e` を混在させない** — 統一感が失われる
- 本文に **`line-height: 1.0` 以下**を使わない（タイトな 1.25 がベースだが、それ以上に詰めると可読性が著しく低下する）
- サービスカテゴリの色分け（`#2da1d6` / `#b47fd9` / `#8b6cc6`）を**別の事業カテゴリに流用しない** — 色とサービスの対応関係はブランドルール
- Koburina Gothic のフォールバックに **Noto Sans JP を挟まない**（CSS 変数で別途定義されているが、メインのフォールバックチェーンには含まれない）
- ブランドページの CTA に **ビビッドなブルー `#0277c3`** を使わない — ブランドページのボタンは `#333333`（ダークグレー）or 白で統一されている

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | 768px〜1023px | タブレットレイアウト |
| Desktop | >= 1024px | デスクトップレイアウト |

### モバイル時の調整

- Display (64px) → 32〜36px（半分程度に縮小）
- Section H2 (36px) → 24〜28px
- 本文サイズは 16px を維持（line-height も 1.25 維持）
- ヘッダー高さは縮小（100px → 60px 程度）
- ナビはハンバーガーメニュー化

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- ピル CTA: 高さ 44px 以上を確保
- タグフィルター: padding `15px 18px` で十分なタッチ領域

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Black: #000000
Strong Blue (リンク/CTA): #0277c3
Hover Blue: #0860a8
Sea Blue: #287fcc
Text Primary (ウォームグレー): #32322e
Text Secondary: #676767
Text Tertiary: #828181
Border: #cccccc
Default Border: #707070
Warm Surface: #f7f6f4
Neutral Surface: #f5f5f5
Breadcrumb BG: #f3f7fb
White: #ffffff
Button Dark (ブランドページ): #333333
SDGs Yellow: #fee101

Service Colors:
  Azure (教育): #2da1d6
  Violet (生活): #b47fd9
  Purple (語学): #8b6cc6

Font (本文): Roboto, "Koburina Gothic W3 JIS2004", "Hiragino Kaku Gothic Pro",
  Meiryo, sans-serif
Font (見出し/強調): Roboto, "Koburina Gothic W6 JIS2004", "Hiragino Kaku Gothic Pro",
  Meiryo, sans-serif
（Koburina 不在時の代替: Zen Kaku Gothic New）

Body Size: 16px / line-height 1.25 / weight 400 / letter-spacing normal
Display (JP): 64px / line-height 1.34 / weight 300 / letter-spacing 10%
Display (EN): 36px / line-height 1.11 / weight 600-700 / letter-spacing 5%
Nav: 18px / weight 600

OpenType: font-feature-settings: "palt" (body level, global)

Border Radius: 4-8px（カード）/ 12px（タグ）/ 30-40px（CTA ピル）
Shadow: 基本 none。階層は #f7f6f4 / #f5f5f5 のサーフェスで表現
```

### プロンプト例

```
ベネッセのデザインに従って、教育サービスの紹介セクションを作成してください。
- フォント本文: Roboto, "Koburina Gothic W3 JIS2004", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif
- フォント見出し: Roboto, "Koburina Gothic W6 JIS2004", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif
- font-feature-settings: "palt" を body に適用（グローバル字詰め）
- Display 見出し: 64px / weight 300 / line-height 1.34 / letter-spacing 10% / color #32322e
- 英文見出し: 36px / Roboto / weight 700 / line-height 1.11 / letter-spacing 5%
- 本文: 16px / weight 400 / line-height 1.25 / color #32322e
- 補助テキスト: 16px / weight 400 / color #676767
- リンク: color #0277c3 / hover #0860a8
- ピル CTA（ブランドページ風）: 背景 #333333 / 白文字 / radius 30px / Inter 14px / weight 600
- セカンダリ CTA: 背景 #ffffff / 文字 #333333 / radius 40px / Koburina W6 16px / letter-spacing 1.6px
- セクション背景: #f7f6f4（ウォームサーフェス）
- ページ背景: #ffffff
- ボーダー: #cccccc
- box-shadow は基本 none。立体感はサーフェスの色分けで表現
- テキストカラーは #32322e（ウォームグレー）、#000000 純黒は使わない
- 冷たいグレー（#9ca3af、#f3f4f6）は使わない — ウォームトーンで統一
```
