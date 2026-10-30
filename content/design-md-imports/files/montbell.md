# DESIGN.md — mont-bell（モンベル）

> mont-bell（https://www.montbell.jp/）のデザイン仕様書。
> 1975年創業、日本最大のアウトドア・登山用品ブランド。"Function is Beauty"（機能美）を哲学に掲げる。
> 実サイトの computed style 実測（2026-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 実用重視・道具感のある EC サイト。装飾を排し、商品と情報にフォーカスした構成。メイリオを基本書体に据えた Windows 優先のフォント戦略が特徴的で、日本の量販・アウトドア EC の王道
- **密度**: 本文 12.8px / line-height 1.3 と**情報密度が高い**。カード・ナビ・キャプションに 10〜12px 台の小さな文字が詰まる、カタログ的なレイアウト
- **キーワード**: メイリオ、ネイビー、ベージュ、直角ボタン、実用主義、道具感、自然・山岳
- **特徴**:
  - **メイリオ先頭の font-family** — Windows での表示品質を最優先する、日本の EC サイトに多い戦略。Mac ではヒラギノ角ゴにフォールバック
  - **ネイビー `#082754` がブランドカラー** — カードタイトル、リンク、テキスト強調に使用。山・海・空を連想させる深い紺
  - **暖色アクセントのベージュ `#ece9d8`** — ヒーロースライダー背景。自然素材・アウトドアの温かみを添える
  - **ティール `#004c6e`** — 検索 CTA の背景。ネイビーより明るく、アクションを示す
  - **border-radius: 0 が基本** — ボタン、入力欄、カードすべて直角。道具的で飾らない
  - **ナビゲーションの letter-spacing 0.12em** — 小さな文字（11.2px）でも視認性を確保するワイドトラッキング
  - **CSS Custom Properties 不使用** — 全値がインライン/直書き。デザイントークンの体系化は行っていない
  - **OpenType 機能不使用** — `font-feature-settings: normal`。palt も kern も適用なし

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Navy Dark** (`#082754`): ブランドの基調色。カードタイトル、リンクテキスト、ロゴ周辺に使用。山岳・海洋を想起させる深い紺
- **Teal** (`#004c6e`): 検索ボタン CTA の背景。ネイビーのファミリーでありながらアクション性を持つ
- **Navy Medium** (`#003451`): アラート内リンク、補助的な強調テキスト
- **Beige** (`#ece9d8`): ヒーロースライダー背景。自然素材の温かみ、アウトドアのニュアンス

### CTA / Buttons

- **Search CTA**: 背景 `#004c6e` / 文字 `#ffffff` / radius `0` / padding `12px 16px`
- **Category Button**: 背景 `#f2f2f2` / 文字 `#000000` / radius `0` / padding `8px 16px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Default | `#333333` | (51, 51, 51) | 本文テキスト |
| Navy Dark | `#082754` | (8, 39, 84) | カードタイトル、リンク |
| Navy Medium | `#003451` | (0, 52, 81) | アラートリンク |
| Light Gray | `#f2f2f2` | (242, 242, 242) | 入力欄・カテゴリボタン背景 |
| Beige | `#ece9d8` | (236, 233, 216) | ヒーロー背景 |
| White | `#ffffff` | (255, 255, 255) | ヘッダー・ページ背景 |
| Header White | `rgba(255,255,255,0.98)` | — | ヘッダー半透明背景 |

### Semantic（推奨値）

実サイトには明確なエラー／成功色は表面化していない。アウトドア EC 向けの推奨補完値:

- **Danger**: `#c41e1e`（赤。在庫切れ・エラー表示）
- **Warning**: `#b07a00`（黄土。注意喚起）
- **Success**: `#2a7d4f`（深い緑。注文完了・在庫あり）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **メイリオ → ヒラギノ角ゴ ProN W3 → ヒラギノ角ゴ ProN → Hiragino Sans → ヒラギノ角ゴ Pro → Hiragino Kaku Gothic Pro → Osaka → sans-serif**
- メイリオ先頭指定は **Windows 最適化** の典型。Mac ではヒラギノ角ゴにフォールバック
- 明朝体は不使用

### 3.2 欧文フォント

- **サンセリフ**: **Helvetica Neue → HelveticaNeue** — 和文フォントの後方に配置（和文優先の戦略）
- 欧文専用フォントは指定されていない。メイリオ/ヒラギノの内蔵欧文グリフに依存

### 3.3 font-family 指定

```css
/* 全要素共通（1 ファミリーのみ） */
font-family: メイリオ, Meiryo, "Helvetica Neue", HelveticaNeue,
  "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3", HiraKakuProN-W3,
  "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Osaka, sans-serif;
```

**フォールバックの考え方**:
- **和文（メイリオ）が先頭** — Windows のクリアタイプ表示を最優先
- Helvetica Neue は和文の後に置かれており、メイリオが無い環境（古い Mac）の欧文フォールバック
- ヒラギノの指定が **ProN W3 → ProN → Pro** と3段階。macOS のバージョン差を幅広く吸収
- Osaka は macOS 9 以前の互換フォールバック（現在はほぼ無意味だが残存）
- 全ページで **書体は1種類**。見出し・本文の区別はウェイトとサイズのみで行う

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Alert Text | メイリオ | 14px | 400 | 1.19 (16.66px) | 0.011em (0.154px) | `#333333` | お知らせバナー |
| Body | メイリオ | 12.8px | 400 | 1.3 (16.64px) | 0.012em (0.154px) | `#333333` | 標準本文 |
| Link | メイリオ | 12.8px | 400 | 1.6 (20.48px) | 0.012em (0.154px) | `#082754` | テキストリンク |
| Card Title | メイリオ | 11.52px | 700 | 1.6 (18.43px) | 0.013em (0.150px) | `#082754` | 商品カードタイトル |
| Card Body | メイリオ | 11.52px | 400 | 1.6 (18.43px) | 0.013em (0.150px) | `#333333` | カード説明文 |
| Nav Link | メイリオ | 11.2px | 700 | 1.4 (15.68px) | **0.12em (1.344px)** | `#333333` | ナビゲーション |
| Caption | メイリオ | 10.24px | 400 | 1.6 (16.38px) | 0.015em (0.154px) | `#333333` | 注釈・キャプション |
| Caption Bold | メイリオ | 10.24px | 700 | 1.6 (16.38px) | 0.015em (0.154px) | `#333333` | 強調キャプション |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (12.8px)**: `1.3`（16.64px / 12.8px）— 日本語としてはかなりタイト。EC の情報密度を優先
- **カード・リンク (11.52〜12.8px)**: `1.6`（余裕のある行間で読みやすさを確保）
- **ナビ (11.2px)**: `1.4`
- **アラート (14px)**: `1.19`（1行表示前提のタイトな行間）

**字間 (letter-spacing)** — 実測:
- **本文 (12.8px)**: `0.012em`（0.154px）— ほぼ均等。最小限の微調整のみ
- **ナビゲーション (11.2px)**: **`0.12em`（1.344px）** — 極端に広い。小さい文字の視認性確保
- **カード (11.52px)**: `0.013em`（0.150px）
- **キャプション (10.24px)**: `0.015em`（0.154px）

**ガイドライン**:
- 本文の line-height 1.3 は**日本語の推奨値（1.5〜2.0）より低い**。mont-bell はカタログ密度を優先した設計
- ナビゲーションの letter-spacing 0.12em は特異値。小文字サイズの EC ナビでは効果的
- 全体的に letter-spacing は 0.01〜0.015em の微量で、palt に頼らない均等組み

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- 特別な禁則設定は確認されていない。ブラウザデフォルトの禁則処理に依存

### 3.7 OpenType 機能

```css
/* 未使用 */
font-feature-settings: normal;
```

- **palt / kern ともに不使用**。メイリオの標準グリフ幅をそのまま使う設計
- mont-bell のようなカタログ型 EC では、均等幅の方がテーブル・リスト表示と相性が良い

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Search CTA** — 検索ボタン
- Background: `#004c6e`
- Text: `#ffffff`
- Padding: `12px 16px`
- Border Radius: `0`（直角）
- Font: メイリオ, 12.8px, weight 700
- Border: none

**Category Button** — カテゴリ選択
- Background: `#f2f2f2`
- Text: `#000000`
- Padding: `8px 16px`
- Border Radius: `0`
- Font: メイリオ, 12.8px, weight 400
- Border: none

**Text Link** — テキストリンク
- Color: `#082754`（ネイビー）
- Font: メイリオ, 12.8px, weight 400
- Text Decoration: underline（ホバー時）

### Inputs

- Background: `#f2f2f2`
- Border: none（ボーダーレス）
- Border Radius: `0`
- Padding: `12px 16px`
- Font: メイリオ, 12.8px, weight 400
- Color: `#333333`

### Cards

- Background: `#ffffff`
- Border: `1px solid #e0e0e0`（推奨）
- Border Radius: `0`（直角）
- Padding: `16px`
- Shadow: none（フラット）

### Header

- Background: `rgba(255, 255, 255, 0.98)`（半透明白）
- Position: `fixed top: 0`
- Border Bottom: なし（または薄い影で分離）

### Hero Slider

- Background: `#ece9d8`（ベージュ）
- Slide Item Border Radius: `0 0 5px 5px`（下角のみ微小角丸）

---

## 5. Layout Principles

### Spacing Scale（推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内の要素間 |
| M | 16px | カードの内側余白 |
| L | 24px | セクション内の要素間 |
| XL | 32px | セクション間の余白 |
| XXL | 48px | ヒーローとコンテンツの間 |

### Container

- Max Width: `960px`（推奨）
- Padding (horizontal): mobile `12px` / desktop `16〜24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0 | **基本**。全ボタン・入力欄・カード |
| Slider | 5px | ヒーロースライダーの下角のみ |

### Grid

- 商品一覧: 3〜4 カラムグリッド
- Gutter: 16〜20px
- ナビゲーション: 多段メガメニュー構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。ほぼすべての要素 |
| 1 | `0 1px 4px rgba(0, 0, 0, 0.08)` | ヘッダー固定時の影（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ドロップダウン・メガメニュー（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- フラットで実用的。立体感は**色面（ネイビー、ベージュ、ライトグレー）の切り替え**で表現
- 影に頼らない、**道具的な情報設計**が特徴

---

## 7. Do's and Don'ts

### Do（推奨）

- **メイリオを先頭に指定**する — mont-bell の Windows 優先戦略の核心
- **ネイビー `#082754` をリンク・見出しの基調色**にする — ブランドを象徴する色
- **ベージュ `#ece9d8` を温かみのアクセント**として使う — アウトドアの自然感
- ボタン・入力欄は **直角（border-radius 0）** — 道具的な無骨さ
- ナビゲーションの letter-spacing は **0.12em** まで広げてよい（小文字の視認性確保）
- 本文は **12.8px / line-height 1.3** の高密度で組む — カタログ EC の情報量を優先
- フォントファミリーは **1 種類で統一** — ウェイト（400/700）とサイズで階層を作る

### Don't（禁止）

- **明朝体を使わない** — mont-bell は全面ゴシック。道具的・実用的な印象を崩さない
- **角丸ピル（border-radius 100px / 9999px）を使わない** — mont-bell は直角
- **鮮やかなブルー（#0066ff 等）を使わない** — ネイビー #082754 / ティール #004c6e がブランドの青
- **palt を適用しない** — メイリオの等幅グリフをそのまま使う設計
- **本文の line-height を 1.8 以上にしない** — 密度の高いカタログ感が薄れる
- **欧文フォント（Helvetica, Inter 等）を先頭に指定しない** — 和文（メイリオ）優先
- テキストの色に **純粋な `#000000` を多用しない** — 本文は `#333333`、強調は `#082754`

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト（商品グリッド 3〜4 列） |

### モバイル時の調整

- アラートテキスト: 14px を維持
- 本文: 12.8px → 14px に拡大推奨（タップ操作時の可読性）
- 商品グリッド: 3〜4 列 → 1〜2 列
- ナビゲーション: メガメニューをハンバーガーに折り畳み
- ヒーロースライダー: 横幅 100%、高さ縮小

### タッチターゲット

- 検索 CTA: padding `12px 16px` で十分な領域
- カテゴリボタン: padding `8px 16px`（高さ 36px 以上を推奨）
- テキストリンク: タップ領域の拡張を推奨（padding 追加）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Navy Dark (Brand / Link): #082754
Teal (Search CTA): #004c6e
Navy Medium (Alert Link): #003451
Text Default: #333333
Beige (Hero BG): #ece9d8
Light Gray (Input / Category BG): #f2f2f2
White (Page BG): #ffffff
Header: rgba(255,255,255,0.98)

Font: メイリオ, Meiryo, "Helvetica Neue", HelveticaNeue, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN W3", HiraKakuProN-W3, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Osaka, sans-serif

Body: 12.8px / line-height 1.3 / letter-spacing 0.012em / weight 400 / color #333333
Nav: 11.2px / weight 700 / letter-spacing 0.12em
Card Title: 11.52px / weight 700 / line-height 1.6 / color #082754
Caption: 10.24px / weight 400 / line-height 1.6

Border Radius: 0（基本）
Shadow: 基本 none
font-feature-settings: normal（palt/kern 不使用）
```

### プロンプト例

```
mont-bell のデザインに従って、商品一覧ページを作成してください。
- フォント: メイリオ, Meiryo, "Helvetica Neue", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
- 本文: 12.8px / weight 400 / line-height 1.3 / letter-spacing 0.012em / color #333333
- 商品タイトル: 11.52px / weight 700 / line-height 1.6 / color #082754（ネイビー）
- ナビ: 11.2px / weight 700 / letter-spacing 0.12em（ワイドトラッキング）
- 検索 CTA: 背景 #004c6e / 白文字 / radius 0 / padding 12px 16px
- カテゴリボタン: 背景 #f2f2f2 / 黒文字 / radius 0
- ヒーロー背景: #ece9d8（ベージュ）
- カード: 直角 / フラット / border 1px solid #e0e0e0
- ページ背景: #ffffff
- 明朝体は使わない（全面ゴシック）
- 角丸ピルは使わない（直角のみ）
- palt は適用しない（font-feature-settings: normal）
```
