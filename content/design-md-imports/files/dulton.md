# DESIGN.md — DULTON（ダルトン）

> DULTON（https://www.dulton.jp/）のデザイン仕様書。
> アメリカンヴィンテージ・インダストリアルをテーマにした日本のホームグッズ・家具・インテリアブランド。
> 実サイトの computed style 実測（2026-05-29 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: アメリカンヴィンテージ・インダストリアルの無骨な雰囲気を、ネイビーブルー `#001a60` と Arial Black の太い英字見出しで表現する日本のECサイト
- **密度**: 小さめのベースフォント（12px）とコンパクトな商品グリッドで、商品点数の多さを効率的に見せる情報密度の高いレイアウト
- **キーワード**: インダストリアル、アメリカンヴィンテージ、ネイビーブルー、フラット＆角形、バイリンガル見出し
- **特徴**:
  - 英語見出しに **Arial Black** を採用。太く力強い書体がインダストリアルなラベル感を生む
  - 和文は **Noto Sans JP** を基本とし、メイリオ・ヒラギノ角ゴ Pro W6 をフォールバックに指定
  - **ブランドカラーは `#001a60`（DULTON ネイビー）**。ヘッダー、フッター、見出し、アクティブ要素に一貫して使用
  - **角丸を一切使わない**完全にフラットなボタン・カードデザイン（border-radius: 0px）。ピル型ボタンは存在しない
  - 英語見出し＋日本語サブタイトルの**バイリンガル見出しパターン**が全セクションで統一
  - 小さな英字見出し（12px weight 700-900）には `letter-spacing: 1px` を適用し、工業製品のスタンプ・ラベルを彷彿させる
  - セクション背景に `#f5f5f5`（ライトグレー）と `#eef5f9`（ライトブルー）を使い、コンテンツ領域を区切る
  - `#ce0000`（DULTON レッド）はバッジ・通知ドット専用で、CTAには使わない
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **DULTON Navy** (`#001a60`): メインのブランドカラー。ヘッダー背景、フッター背景、英語セクション見出し、アクティブページネーション、ナビゲーションボタンに使用。rgb(0,25,96) / rgb(0,26,95) の2値が観測され、`#001a60` を正規値とする
- **DULTON Red** (`#ce0000`): バッジ・通知ドットの色。CTAには使用しない

### CTA / Buttons

- **Header/Footer Nav Button**: 背景 `#001a60` / 文字 `#ffffff` / radius `0px`（角形）/ 12px / weight 400
- **Filter Button ("絞り込み")**: 背景 `#444444` / 文字 `#ffffff` / radius `0px`
- **"もっと見る" Link**: 文字 `#444444` / 背景 transparent

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Text | `#333333` | (51, 51, 51) | 本文テキスト |
| Dark Gray | `#444444` | (68, 68, 68) | ボタン文字（"絞り込み"、"もっと見る"） |
| Border | `#cccccc` | (204, 204, 204) | 区切り線・入力欄の枠 |
| Pagination Inactive | `#d2d2d2` | (210, 210, 210) | 非アクティブページネーションドット |
| Muted Navy | `#9da7c2` | (157, 167, 194) | スクロールトップ・装飾要素 |
| Light Surface | `#f5f5f5` | (245, 245, 245) | セクション背景（PICK UP, RANKING 等） |
| Light Blue Surface | `#eef5f9` | (238, 245, 249) | バナー・プロモ領域の背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#ce0000`（DULTON Red と兼用）
- **Success**: `#2e8b57` 程度のグリーン
- **Warning**: `#d4a017` 程度のイエロー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先。Google Fonts 経由で読み込み
- **フォールバック**: メイリオ → Meiryo → ヒラギノ角ゴ Pro W6 → Hiragino Kaku Gothic Pro → Osaka → MS PGothic → sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **ディスプレイ・見出し**: **Arial Black** — セクションタイトルやブランド名に使用。太く力強い書体でインダストリアル感を表現
- **本文**: Noto Sans JP の欧文グリフをそのまま使用
- **セリフ**: 使用しない
- **等幅**: 指定なし

### 3.3 font-family 指定

```css
/* 本文・和文全般 */
font-family: "Noto Sans JP", メイリオ, Meiryo,
  "ヒラギノ角ゴ Pro W6", "Hiragino Kaku Gothic Pro",
  Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 英語見出し・セクションタイトル */
font-family: "Arial Black", arial, sans-serif;
```

**フォールバックの考え方**:
- 本文は Noto Sans JP を最優先。メイリオ（Windows）→ ヒラギノ角ゴ（macOS）の順で幅広い環境をカバー
- フォールバックに **ヒラギノ角ゴ Pro W6**（太め）を指定している点が特徴的。通常の ProN ではなく Pro 指定
- 英語見出しは Arial Black を最優先。システムフォントのため特別な読み込みは不要
- Osaka を含めることで古い macOS 環境もカバーするレガシー対応

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-29 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section Title (en, large) | Arial Black | 30px | 400 | 1.4 (42px) | normal | `#001a60` | 大英語セクションタイトル |
| Brand Name (en) | Arial Black | 24px | 900 | 1.6 (38.4px) | normal | `#001a60` | "DULTON" ブランドロゴ文字 |
| Menu Title (en) | Arial Black | 20px | 400 | 1.5 (30px) | normal | `#001a60` | "MENU" 等のナビ見出し |
| Label (en, small) | Arial Black | 12px | 700-900 | 1.5 (18px) | 1px | `#001a60` | "RANKING", "NEW ARRIVAL" ラベル |
| Subtitle (jp) | Noto Sans JP | 14px | 400 | 1.5-1.71 | normal | `#333333` | 英語見出しの日本語サブタイトル |
| Body | Noto Sans JP | 12px | 400 | 1.6 (19.2px) | normal | `#333333` | 本文テキスト |
| Product Name | Noto Sans JP | 12px | 400 | 1.6 (19.2px) | normal | `#333333` | 商品名テキスト |
| Price | Noto Sans JP | 14px | 700 | 2.8 (39.2px) | normal | `#333333` | 価格（太字） |
| Nav Link | Noto Sans JP | 12px | 400 | 1.5 (18px) | normal | `#ffffff` | ヘッダーナビ（白文字） |
| Footer Link | Noto Sans JP | 11-12px | 400 | 1.5-1.6 | normal | `#ffffff` | フッターナビ |
| Note / Small | Noto Sans JP | 10px | 400 | 1.5 (15px) | normal | `#333333` | 最小テキスト・注釈 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (12px)**: `1.6`（19.2px / 12px）— EC サイトとしてはコンパクト
- **価格 (14px)**: `2.8`（39.2px / 14px）— 価格表示に余裕を持たせる
- **サブタイトル (14px)**: `1.5〜1.71`
- **英語見出し (20〜30px)**: `1.4〜1.6`
- **小英語ラベル (12px)**: `1.5`

**字間 (letter-spacing)** — 実測:
- **本文・サブタイトル**: `normal`（letter-spacing 指定なし）
- **小英語ラベル (12px)**: `1px`（約 `0.083em`）— ヴィンテージ・インダストリアルなスタンプ感
- **英語見出し (20〜30px)**: `normal`

**ガイドライン**:
- 本文の letter-spacing は normal のまま。palt も使わない、素朴な組版
- 小さな英字ラベルだけ `letter-spacing: 1px` で**工業スタンプのような広がり**を持たせる
- ベースフォントサイズが 12px と小さいため、line-height 1.6 で最低限の可読性を確保

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名は1行に収める設計（overflow: hidden + text-overflow: ellipsis を推奨）
- 英語見出しは原則改行しない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Noto Sans JP のデフォルトメトリクスに任せ、letter-spacing の追加指定もほぼ行わない
- インダストリアルデザインの「素朴さ」と合致するアプローチ

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（ネイビー角形）** — ヘッダー・フッターのナビゲーションボタン
- Background: `#001a60`
- Text: `#ffffff`
- Padding: `50px 0px 12px`（アイコン＋テキストの縦配置）
- Border Radius: `0px`（完全角形）
- Font: Noto Sans JP, 12px, weight 400
- Border: none

**Filter Button（ダークグレー角形）** — "絞り込み"
- Background: `#444444`
- Text: `#ffffff`
- Padding: `8px 16px`（推奨）
- Border Radius: `0px`（完全角形）
- Font: Noto Sans JP, 12px, weight 400
- Border: none

**Text Link** — "もっと見る"、商品リンク
- Background: transparent
- Text: `#444444` / `#333333`
- Font: Noto Sans JP, 12px, weight 400
- Border: none
- Text Decoration: underline（一部）

**Carousel Dot（アクティブ）**
- Background: `#001a60`
- Size: 8px
- Border Radius: `50%`（円形）

**Carousel Dot（非アクティブ）**
- Background: `#d2d2d2`
- Size: 8px
- Border Radius: `50%`

**Slider Arrow**
- Background: `rgba(255, 255, 255, 0.8)`
- Border Radius: `0px`

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `2px solid #001a60`
- Border Radius: `0px`（角形で統一）
- Padding: `8px 12px`
- Font: Noto Sans JP, 12px, weight 400
- Height: `36px`

### Cards / Product Grid

- Background: `#ffffff`
- Border: `1px solid #cccccc` または border なし
- Border Radius: `0px`（角形）
- Padding: `12px`
- Shadow: `none`（基本フラット）

### Header

- Background: `#001a60`（ソリッドネイビー）
- Text: `#ffffff`
- Height: 約 120px（アイコン＋テキストの2段構成）
- Position: fixed top: 0

### Footer

- Background: `#001a60`（ヘッダーと同じネイビー）
- Text: `#ffffff`
- Font Size: 11-12px

### Section Background

- **PICK UP / RANKING**: `#f5f5f5`（ライトグレー）
- **バナー・プロモ**: `#eef5f9`（ライトブルー）

---

## 5. Layout Principles

### Spacing Scale（推奨 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 要素間の最小余白 |
| S | 8px | 商品グリッドのガター |
| M | 12px | カード内余白 |
| L | 16px | セクション内の間隔 |
| XL | 24px | セクション間の余白 |
| XXL | 48px | ヒーロー・大セクションの上下余白 |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `8px` / desktop `16〜24px`

### Grid

- **商品グリッド**: 2〜4カラム（デバイス幅に応じて変化）
- Gutter: `8〜12px`（コンパクト）
- 商品カードはアスペクト比を維持した正方形画像＋テキスト情報

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | ボタン・カード・入力欄（すべて角形） |
| Circle | 50% | ページネーションドット |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべてのカード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.12)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.15)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は**色の切り替え**（ネイビー `#001a60` ↔ 白 `#ffffff` ↔ ライトグレー `#f5f5f5`）で表現
- インダストリアルデザインの「フラットで無骨」なキャラクターに沿い、影は控えめに

---

## 7. Do's and Don'ts

### Do（推奨）

- 英語セクション見出しは **Arial Black** で太く、日本語サブタイトルは Noto Sans JP weight 400 で添える
- 小さな英字ラベル（"RANKING", "NEW ARRIVAL" 等）は **letter-spacing: 1px** でスタンプ感を出す
- ボタン・カード・入力欄は **border-radius: 0px（完全角形）** で統一する
- ブランドカラー `#001a60` をヘッダー・フッター・見出しに一貫して使う
- セクション背景は `#f5f5f5`（ライトグレー）と `#eef5f9`（ライトブルー）で領域を区切る
- 商品グリッドはコンパクトに、ベースフォント 12px で情報密度を高める
- 色のコントラスト比は WCAG AA 以上を確保する

### Don't（禁止）

- **border-radius をつけない** — ピル型（9999px）や角丸（8px）のボタン・カードは DULTON のデザイン語彙にない
- DULTON Red `#ce0000` を **CTA ボタンに使わない** — バッジ・通知ドット専用
- 英語見出しに **Noto Sans JP を使わない** — 必ず Arial Black で分離する
- 日本語本文に Arial Black を使わない — 和文は Noto Sans JP 系統で統一
- **`palt` や `kern` を有効化しない** — DULTON の素朴なインダストリアル組版を維持
- ヘッダー・フッター背景を **白や薄いグレーにしない** — ネイビー `#001a60` がブランドの枠組み
- 影を多用しない — フラットデザインが基本

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（2カラム商品グリッド） |
| Tablet | ≤ 1024px | タブレット（3カラム） |
| Desktop | > 1024px | デスクトップ（4カラム商品グリッド） |

### モバイル時の調整

- 商品グリッド: 4カラム → 2カラム
- 英語見出し: 30px → 20〜24px
- ヘッダー: アイコン＋テキスト構成を維持、コンパクト化
- 本文サイズは 12px を維持

### タッチターゲット

- ナビゲーションボタン: 高さ 44px 以上（padding で確保）
- 商品カード全体がタップ可能（カード全体リンク）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
DULTON Navy (Brand): #001a60
DULTON Red (Badge): #ce0000
Dark Text: #333333
Dark Gray (Button): #444444
Border: #cccccc
Light Surface: #f5f5f5
Light Blue Surface: #eef5f9
Muted Navy: #9da7c2
Pagination Inactive: #d2d2d2
White: #ffffff

Font (JP): "Noto Sans JP", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W6", "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Font (EN headings): "Arial Black", arial, sans-serif

Body Size: 12px / line-height 1.6 / weight 400 / letter-spacing normal
EN Section Title: 30px / Arial Black / weight 400 / line-height 1.4
EN Small Label: 12px / Arial Black / weight 700-900 / letter-spacing 1px
JP Subtitle: 14px / Noto Sans JP / weight 400 / line-height 1.5
Price: 14px / weight 700 / line-height 2.8

Border Radius: 0px（すべて角形）
Shadow: 基本 none。階層はネイビー／白／ライトグレーの色面で表現
```

### プロンプト例

```
DULTON のデザインに従って、商品一覧ページを作成してください。
- 英語セクション見出し: "Arial Black", arial, sans-serif / 30px / weight 400 / color #001a60
- 日本語サブタイトル: "Noto Sans JP" stack / 14px / weight 400 / color #333333
- 小英語ラベル: "Arial Black" / 12px / weight 900 / letter-spacing 1px / color #001a60
- 本文: Noto Sans JP / 12px / weight 400 / line-height 1.6 / color #333333
- 価格: 14px / weight 700
- ヘッダー・フッター: 背景 #001a60 / 文字 #ffffff
- ボタン: 背景 #444444 / 文字 #ffffff / border-radius 0px（完全角形）
- カード: 背景 #ffffff / border 1px solid #cccccc / border-radius 0px
- セクション背景: #f5f5f5（ライトグレー）または #eef5f9（ライトブルー）
- box-shadow は基本 none
- border-radius は一切つけない（ピル型・角丸ともに禁止）
- ページネーション: アクティブ #001a60 / 非アクティブ #d2d2d2 / 円形
```
