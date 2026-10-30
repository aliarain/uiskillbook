# DESIGN.md — Mitsui Fudosan (三井不動産)

> 三井不動産（https://www.mitsuifudosan.co.jp/）のデザイン仕様書。
> 日本最大の総合不動産デベロッパー。プレミアム・権威・洗練を体現するコーポレートサイト。
> Puppeteer による computed style 実測値（2026-05-23 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プレミアム不動産デベロッパーとしての格を示す、堂々とした大型タイポグラフィ主導のデザイン。セリフ系ディスプレイフォント（Optima）とサンセリフ系ボディフォント（New Cezanne）の二系統を使い分ける
- **密度**: ゆったりとした大型ビジュアル。90px の巨大見出しとフルブリード画像で、空間の広がりを表現
- **キーワード**: 権威的、洗練、プレミアム、タイポグラフィ二系統、シャープ
- **特徴**: ボタン・カードすべてが角丸なし（radius 0px）。セリフ系ディスプレイ（Optima）× サンセリフ系ボディ（New Cezanne）の対比がブランドの核。palt はグローバル適用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Mitsui Fudosan Blue** (`#004098`): ブランドのコアカラー。フッター背景、ニュースタブ（inactive）、セクション見出し（H1）に使用
- **Mitsui Red** (`#e60012`): サブアクセント。控えめに使用される差し色

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Category** (`#636363`): カテゴリラベルの背景色（「リリース」タグ等）
- **Border** (`#e3e3e3`): 区切り線、カード枠
- **Border Light** (`#cccccc`): セクションボタンのボーダー
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#ffffff`): カード背景

### Dark Section

- **Footer Background** (`#004098`): フッター全体の背景。ブランドブルー
- **Header Overlay** (`#004098`): ヘッダー領域のブランドブルー
- **CTA Background** (`#000000`): VIEW MORE ボタン、コンタクトボタンの背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **NewCezanneProN**（Morisawa / Adobe Fonts）: ボディフォント。本文、ナビサブリンク、カード、ニュース、フッター等あらゆる和文テキストに使用
- **NewCezanneProN7**: NewCezanneProN の太字バリアント。ナビメインリンク、セクションボタン、H1（404ページ）に使用

### 3.2 欧文フォント

- **OptimaLTPro**（Linotype / Adobe Fonts）: ディスプレイ・見出し専用のセリフ系フォント。セクション H1（90px）、VIEW MORE リンク（30px）、日付・ページネーション等に使用
- 特徴: Optima はサンセリフに分類されることもあるが、ストロークに抑揚がありセリフ的な品格を持つ。この二系統の対比が三井不動産のタイポグラフィの核

### 3.3 font-family 指定

```css
/* ボディ（和文テキスト全般） */
font-family: "NewCezanneProN", sans-serif;

/* ボディ太字（ナビ、セクションボタン） */
font-family: "NewCezanneProN7", sans-serif;

/* ディスプレイ見出し（欧文セクションタイトル） */
font-family: "OptimaLTPro", serif;
```

**フォールバックの考え方**:
- NewCezanneProN は Adobe Fonts 経由で配信されるため、ドメインライセンスに依存
- OptimaLTPro も同様に Adobe Fonts 経由
- preview.html では Google Fonts の代替フォントを使用（後述の Agent Prompt Guide 参照）

**preview.html 用の代替フォント**:
- NewCezanneProN → `"Noto Sans JP", sans-serif`（クリーンな和文ボディ）
- OptimaLTPro → `"Noto Serif JP", serif`（セリフ系ディスプレイの品格を近似）

### 3.4 文字サイズ・ウェイト階層

> computed style 実測値

**ディスプレイ（OptimaLTPro）**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title (H1) | OptimaLTPro | 90px | 400 | 90px (×1.0) | -3.6px (-0.04em) | 白背景: `#004098`、暗い背景: `#ffffff` |
| VIEW MORE CTA | OptimaLTPro | 30px | 400 | 36px (×1.2) | normal | 黒背景に白テキスト |
| Date / Pagination | OptimaLTPro | 14px | 400 | normal | normal | 日付表示、ページ番号 |
| Scroll Indicator | OptimaLTPro | 14px | 400 | normal | normal | "SCROLL" テキスト |

**ボディ（NewCezanneProN / ProN7）**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Body Text | NewCezanneProN | 16px | 400 | 27px (×1.6875) | normal | 本文テキスト `#000000` |
| Nav Main Link | NewCezanneProN7 | 14px | 400 | normal | normal | メインナビゲーション |
| Section Button | NewCezanneProN7 | 20px | 400 | normal | normal | セクション遷移ボタン |
| H1 (404 page) | NewCezanneProN7 | 28px | 400 | 39.2px (×1.4) | normal | エラーページ見出し |
| News Item | NewCezanneProN | 16px | 400 | 27px (×1.6875) | normal | ニュースリスト |
| Card Text | NewCezanneProN | 16px | 400 | 27px (×1.6875) | normal | ピックアップカード |
| Footer Text | NewCezanneProN | 16px | 400 | 27px (×1.6875) | normal | フッター内テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `27px` (16px × **1.6875**)
- セクション H1 (OptimaLTPro): `90px` (90px × **1.0**) — 超タイトな行間。大型ディスプレイ用
- VIEW MORE (OptimaLTPro): `36px` (30px × 1.2)
- H1 404 (NewCezanneProN7): `39.2px` (28px × 1.4)

**字間 (letter-spacing)** — 実測値:
- セクション H1 (OptimaLTPro 90px): `-3.6px` (= **-0.04em**) — **ネガティブトラッキング**。大型ディスプレイで文字を詰める
- その他すべて: `normal`

**ガイドライン**:
- OptimaLTPro の大型見出し（90px）には必ずネガティブトラッキング `-0.04em` を適用する
- ボディの行間は 1.6875 で、一般的な日本語サイト（1.7〜2.0）よりやや詰まっているが読みやすさは確保
- palt がグローバル適用されているため、和文の約物は自動的に詰められる

### 3.6 禁則処理・改行ルール

```css
/* グローバル設定 */
word-break: break-all;
overflow-wrap: break-word;
```

- 標準的な禁則処理。長い URL や英単語の折り返しに対応

### 3.7 OpenType 機能

```css
/* グローバル適用 — body レベルで全要素に継承 */
font-feature-settings: "palt";
```

- **palt はグローバル適用**: WIRED と同様に body レベルで `palt` を指定。本文・見出し・ナビ・フッターすべてに効く
- **OptimaLTPro は欧文フォントのため palt の影響なし**: palt は和文グリフに対する機能。OptimaLTPro のセクションタイトルには実質的に効かない
- NewCezanneProN / ProN7 の和文テキストすべてにプロポーショナル字詰めが適用される

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**VIEW MORE（プライマリ CTA）**
- Background: `#000000`
- Text: `#ffffff`
- Font: OptimaLTPro, 30px, weight 400
- Padding: 21px 44px
- Border Radius: **0px**（シャープコーナー）

**Section Button（ボーダー付き）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Font: NewCezanneProN7, 20px
- Padding: 5px 40px 5px 19px
- Border Radius: **0px**（シャープコーナー）

**Contact Button（ヘッダー）**
- Background: `#000000`
- Text: `#ffffff`
- Font: NewCezanneProN7, 16px
- Border Radius: **0px**

**News Tab（アクティブ）**
- Background: `#ffffff`
- Text: `#000000`
- Font Size: 20px
- Border Radius: **0px**

**News Tab（非アクティブ）**
- Background: `#004098`
- Text: `#ffffff`
- Font Size: 20px
- Border Radius: **0px**

### Inputs

- コーポレートサイトのため、入力フィールドは主要ページに存在しない

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e3e3e3`
- Border Radius: **0px**（シャープコーナー）
- Shadow: なし（フラット）

### Navigation

- Header Background: ブランドブルー `#004098` のオーバーレイ
- Nav Main Links: NewCezanneProN7, 14px, `#ffffff`
- Contact Button: `#000000` 背景

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | 細部の余白 |
| S | 16px | 要素間の基本余白 |
| M | 24px | セクション内の余白 |
| L | 40px | セクション間の余白 |
| XL | 60px | 大きなセクション区切り |
| XXL | 80px | ヒーロー周辺の余白 |

### Container

- Max Width: 1200px（推定）
- 中央寄せ。左右にゆとりのあるパディング

### Grid

- ピックアップカード: 3カラム構成
- ニュースリスト: 1カラムのリスト表示

---

## 6. Depth & Elevation

- フラットデザイン。影（box-shadow）はほぼ使用しない
- 奥行きはフルブリード画像のオーバーレイ（暗い透過）で表現
- カードは枠線（`#e3e3e3`）で区切り、影は使わない
- ホバー時の変化は色やテキスト装飾で表現

---

## 7. Do's and Don'ts

### Do（推奨）

- OptimaLTPro はセクションタイトル・VIEW MORE・日付等の**欧文ディスプレイ専用**に限定する
- NewCezanneProN / ProN7 は**和文ボディテキスト全般**に使用する
- ボタン・カード・タブのすべてに **radius 0px**（シャープコーナー）を徹底する
- セクション H1（90px）には `letter-spacing: -0.04em` のネガティブトラッキングを必ず適用する
- palt は body レベルでグローバルに適用する
- ブランドブルー `#004098` はフッター背景・ニュースタブ・セクション見出し色として使う
- VIEW MORE ボタンは黒背景に白テキスト。OptimaLTPro 30px で堂々と表示する
- テキスト色は純粋な `#000000` を使う（三井不動産はコントラストの強さで権威を表現）

### Don't（禁止）

- OptimaLTPro を和文テキストに使わない（欧文ディスプレイ専用）
- NewCezanneProN をセクションタイトルの欧文に使わない（OptimaLTPro の領分）
- 角丸（border-radius > 0）を使わない。すべてのコンポーネントはシャープコーナー
- pill ボタン（radius 9999px）は絶対に使わない
- ブランドブルー `#004098` を本文テキスト色に使わない（見出し・背景・タブ専用）
- 不必要な影（box-shadow）を追加しない。フラットに保つ
- カジュアルな印象を与えるデザイン要素（丸み、ポップな色、アイコン多用）を避ける

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルではセクション H1（90px）を大幅に縮小（40〜50px 程度）
- ボディテキスト 16px は維持
- VIEW MORE の 30px は 20px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue: #004098
CTA Background: #000000
Text Primary: #000000
Text Category: #636363
Border: #e3e3e3
Background: #ffffff
Footer Background: #004098
Accent Red: #e60012

Display Font: "OptimaLTPro", serif
  → preview代替: "Noto Serif JP", serif
Body Font: "NewCezanneProN", sans-serif
  → preview代替: "Noto Sans JP", sans-serif
Body Bold Font: "NewCezanneProN7", sans-serif
  → preview代替: "Noto Sans JP" weight 700, sans-serif

Section H1: OptimaLTPro 90px / weight 400 / line-height 1.0 / letter-spacing -0.04em
VIEW MORE: OptimaLTPro 30px / weight 400 / line-height 1.2
Body: NewCezanneProN 16px / weight 400 / line-height 1.6875
palt: グローバル適用
Border Radius: 全コンポーネント 0px
```

### プロンプト例

```
三井不動産のデザインに従って、物件一覧ページを作成してください。
- ディスプレイフォント: "OptimaLTPro", serif（代替: "Noto Serif JP"）
- ボディフォント: "NewCezanneProN", sans-serif（代替: "Noto Sans JP"）
- セクション見出し: OptimaLTPro, 90px, weight 400, line-height 1.0,
    letter-spacing: -0.04em, 色: #004098
- 本文: NewCezanneProN, 16px, line-height: 1.6875, 色: #000000
- ボタン: すべて border-radius: 0px（シャープコーナー）
- VIEW MORE: 黒背景 (#000000)、白テキスト、OptimaLTPro 30px
- フッター: 背景 #004098、テキスト #ffffff
- palt: グローバル適用 (font-feature-settings: "palt")
- 全体: フラット、影なし、プレミアム不動産の格式
```
