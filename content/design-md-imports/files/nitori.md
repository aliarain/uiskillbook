# DESIGN.md — ニトリ（Nitori）

> ニトリネット（https://www.nitori-net.jp/）のデザイン仕様書。
> 家具・インテリア・生活雑貨の総合 EC プラットフォーム。「お、ねだん以上。」を掲げる日本最大級のホームファニシング企業。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 機能的・実用的な EC 特化デザイン。白を基調に、ニトリティール `#009e96` のアクセントで信頼感と清潔感を演出。装飾を排した情報密度の高いレイアウトで、商品検索・購買を最短距離で達成させる
- **密度**: 情報密度が高い。カテゴリナビ・商品グリッド・特集バナーが詰まった典型的な大型 EC。本文の line-height は 1.6 と標準的
- **キーワード**: 機能的、信頼感、EC 特化、情報密度、バリュー志向
- **特徴**:
  - ブランドカラーは **`#009e96`（ティールグリーン）**。ログインボタン、決定ボタン、プロモテキストに使用。CSS 変数 `--text-Promotional-nitori` / `--border-Promotional-nitori` がこれに該当
  - **マルチブランド対応**: ニトリ（ティール `#009e96`）、デコホーム（オレンジ `#eb5505`）、N+（ウォームグレー `#94897d`）の 3 サブブランドを CSS 変数で管理
  - 和文フォントは **Hiragino Sans 優先**の Apple 寄りシステムフォントスタック。Web フォントは使用しない
  - `letter-spacing` は全体を通じて `normal`（0）。`palt` も不使用。素のシステムフォントメトリクスに任せる実直な組版
  - サーフェスは `#f2f2f2`（ライトグレー、出現 68 回）が支配的。`--background-Disabled` / `--background-SecondaryLayer` の 2 階層で面の深さを作る
  - テキスト色は `#333333`（`--text-Primary`）を基本とし、純黒 `#000000` は使わない
  - ボーダーラディウスは一貫して **4px**。ピル形状は使わない——角丸の浅い、堅実な印象
  - **明確なデザイントークンシステム**を CSS Custom Properties で持つ。`--background-*`、`--text-*`、`--border-*` の命名規則
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。CSS Custom Properties が定義されている場合はトークン名を併記。

### Brand

- **Nitori Teal** (`#009e96` / `--text-Promotional-nitori` / `--border-Promotional-nitori`): ニトリのブランドカラー。主要 CTA（ログイン・決定）の背景、プロモテキスト、ブランドアクセント
- **Deco Home Orange** (`#eb5505` / `--text-Promotional-deco`): デコホームのサブブランドカラー。デコホーム関連のプロモ表示
- **N+ Warm Gray** (`#94897d` / `--text-Promotional-nplus`): N+ のサブブランドカラー。N+ 関連のプロモ表示

### CTA / Buttons

- **Primary CTA**: 背景 `#009e96` / 文字 `#ffffff` / radius `4px` / padding `0px 16px`
- **Secondary CTA**: 背景 `#ffffff` / 文字 `#333333` / border `1px solid #333333` / radius `4px`
- **Disabled**: 背景 `#dbdbdb` / 文字 `#6d6d6d` / radius `5px`

### Semantic

- **Destructive / Error** (`#ff3a2e` / `--text-Destructive` / `--border-Destructive`): エラー、削除、注意喚起
- **Link** (`#53a4ef` / `--text-Link` / `--border-default-Focus`): テキストリンク、フォーカスリング

### Neutral

| Token | hex | CSS Variable | 役割 |
|-------|-----|-------------|------|
| Text Primary | `#333333` | `--text-Primary` / `--background-Black` | 本文テキスト、アイコン |
| Text Secondary | `#6d6d6d` | `--text-Secondary` | 補足テキスト、ラベル |
| Text Disabled | `#dbdbdb` | `--text-Disabled` | 無効状態のテキスト |
| Text OnFill | `#ffffff` | `--text-OnFill` | 塗りつぶし面上の白文字 |
| Border Primary | `#333333` | `--border-Primary` | 強調ボーダー |
| Border Secondary | `#dbdbdb` | `--border-Secondary` | 通常の入力欄・区切り線 |
| Border Divider | `#e7e7e7` | `--border-Divider` | 薄い区切り線 |
| Base Layer | `#ffffff` | `--background-BaseLayer` | ページ背景 |
| Secondary Layer | `#ededed` | `--background-SecondaryLayer` | 第 2 層サーフェス |
| Tertiary Layer | `#e1e1e1` | `--background-TertiaryLayer` | 第 3 層サーフェス |
| Disabled BG | `#f2f2f2` | `--background-Disabled` | 無効状態の背景、最も広い面色 |
| Focus Ring | `#53a4ef` | `--border-default-Focus` | フォーカスリング |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Hiragino Sans** を最優先。Apple デバイスでの表示品質を重視
- **フォールバック**: Hiragino Kaku Gothic ProN → Meiryo → Yu Gothic → sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: Helvetica Neue → Helvetica → Arial
- 欧文フォントが和文フォントより先に指定されており、**欧文グリフは Helvetica Neue / Arial を優先**する設計
- セリフ・等幅は使用しない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h3, p, a, span, button, nav, header, footer） */
font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN",
  "Helvetica Neue", Helvetica, Arial,
  Meiryo, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- Hiragino Sans を最優先に置き、Apple 環境での表示品質を確保
- Hiragino Kaku Gothic ProN は旧 macOS / iOS 向けのフォールバック
- Helvetica Neue / Helvetica / Arial は**欧文グリフの差し替え**用（和文フォントより先に指定されているが、和文グリフを持たないので日本語は Hiragino にフォールバック）
- Meiryo → Yu Gothic で Windows をカバー
- Web フォントは不使用。CDN 依存なしでパフォーマンスを確保する実直な方針

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／商品一覧ページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 Site Title | Hiragino Sans | 29.6px | 500 | 1.22 | normal | `#333333` | "ニトリ公式通販 ニトリネット" |
| H2 Section | Hiragino Sans | 24px | 700 | 1.33 | normal | `#333333` | "ピックアップ特集" 等のセクション見出し |
| H3 Large | Hiragino Sans | 22px | 700 | 1.22 | normal | `#333333` | カテゴリ見出し |
| H3 Small | Hiragino Sans | 16px | 700 | 1.5 | normal | `#333333` | 小見出し |
| Body | Hiragino Sans | 16px | 400 | 1.6 | normal | `#333333` | ベースの本文 |
| Body (small) | Hiragino Sans | 14px | 500 | 1.43 | normal | `#333333` | 商品説明、補足テキスト |
| Price | Hiragino Sans | 22px | 700 | — | normal | `#ff3a2e` | セール価格（赤） |
| Button | Hiragino Sans | 14-16px | 500-700 | — | normal | `#ffffff` / `#333333` | CTA ラベル |
| Caption | Hiragino Sans | 12px | 400 | 1.5 | normal | `#6d6d6d` | 注釈、フッター |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.6`（25.6px / 16px）— 日本語 EC として標準的な余裕
- **補助テキスト (14px)**: `1.43`（20px / 14px）— やや詰めて情報密度を確保
- **見出し (22〜29.6px)**: `1.22〜1.33` — タイトな見出し
- **小見出し (16px weight 700)**: `1.5`

**字間 (letter-spacing)** — 実測:
- **全階層**: `normal`（0）。見出し・本文・キャプションすべて letter-spacing なし
- トラッキングによるデザイン調整は行わず、フォントのデフォルトメトリクスに任せる方針

**ガイドライン**:
- ニトリは **letter-spacing を一切使わない**。`palt` も不使用。Hiragino Sans のデフォルトの字送りをそのまま活かす
- 日本語本文は `line-height: 1.6` が基本リズム。note（2.0）や STORES（1.75）より詰めている——EC の情報密度を優先
- 商品説明テキストは 14px / weight 500 / line-height 1.43 で、本文より一段コンパクト

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

- EC サイトのため、商品名・型番に長い英数字が頻出。`break-all` で確実に折り返す
- 価格表示は `white-space: nowrap` で改行を防ぐ

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` の明示的有効化は確認されなかった
- システムフォントのデフォルトメトリクスに任せる。見出しにもプロポーショナル字詰めは適用しない
- EC の情報表示において、等幅に近い和文組版で一覧性を確保する実用的な判断

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ティール）** — "ログイン"・"決定"
- Background: `#009e96`
- Text: `#ffffff`
- Padding: `0px 16px`（高さは line-height で確保）
- Border Radius: `4px`
- Font: Hiragino Sans, 14-16px, weight 500-700
- Border: none

**Secondary CTA（白＋黒ボーダー）**
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #333333`
- Padding: `0px 16px`
- Border Radius: `4px`
- Font: Hiragino Sans, 14-16px, weight 500

**Disabled**
- Background: `#dbdbdb`（`--text-Disabled`）
- Text: `#6d6d6d`（`--text-Secondary`）
- Border Radius: `5px`
- Border: none

**Skip Link**
- Background: `#efefef`
- Text: `#333333`
- Border Radius: `0px 0px 5px 5px`（下辺のみ角丸）

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dbdbdb`（`--border-Secondary`）
- Border (focus): `1px solid #53a4ef`（`--border-default-Focus`）
- Border (error): `1px solid #ff3a2e`（`--border-Destructive`）
- Border Radius: `4px`
- Padding: `8px 12px`
- Font: Hiragino Sans, 16px, weight 400

### Cards（商品カード）

- Background: `#ffffff`
- Border: `1px solid #e7e7e7`（`--border-Divider`）または border なし
- Border Radius: `4px`
- Padding: `12px〜16px`
- Shadow: なし（フラット）

### Pagination

- Border Radius: `4px`
- Active: 背景 `#009e96` / 文字 `#ffffff`
- Default: 背景 `#ffffff` / 文字 `#333333` / border `1px solid #dbdbdb`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間、リストのインデント |
| S | 8px | ボタン内の縦余白、商品カード内のテキスト間 |
| M | 16px | カード内余白、フォーム要素間 |
| L | 24px | セクション内の見出しと本文、カード間のギャップ |
| XL | 32px | セクション間の縦余白 |
| XXL | 48px | ページ上部のヘッダー下余白 |

### Container

- Max Width: `1200px`（デスクトップ）
- Padding (horizontal): mobile `12〜16px` / desktop `16〜24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Standard | 4px | ボタン、カード、入力欄、ページネーション——ほぼすべての要素 |
| Asymmetric | 0 0 5px 5px | スキップリンク（下辺のみ） |

- **ニトリは 4px の統一角丸**が基本。ピル形状（9999px）は使わない。大きな角丸（8px, 16px）も使わない。堅実でプレーンな印象

### Grid

- 商品一覧: 4〜5 カラムグリッド（デスクトップ）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | ドロップダウン・ホバー時（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`。フラットデザインを徹底
- 立体感は **サーフェスの色差**（`#ffffff` → `#f2f2f2` → `#ededed` → `#e1e1e1`）で表現
- CSS 変数が `--background-BaseLayer` / `SecondaryLayer` / `TertiaryLayer` の 3 階層を定義しており、影ではなく**面の明度差**でレイヤーを作る設計思想
- 影を使う場合は低彩度の `rgba(0, 0, 0, 0.08〜0.10)` で控えめに

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **Hiragino Sans を最優先**、フォールバックは Hiragino Kaku Gothic ProN → Meiryo → Yu Gothic → sans-serif
- 欧文は **Helvetica Neue → Helvetica → Arial** を和文の前に挟む
- 本文の line-height は **1.6** を基本にする
- letter-spacing は **normal（0）**——見出し・本文・キャプションすべて同じ
- 主要 CTA は **`#009e96`（ニトリティール）の角丸 4px ボタン**
- テキスト色は **`#333333`**（`--text-Primary`）を基本とする
- サーフェスの階層は **`#ffffff` → `#f2f2f2` → `#ededed` → `#e1e1e1`** の明度差で表現
- ボーダーラディウスは **4px に統一**する
- 価格表示（セール）は **`#ff3a2e`** で、22px / weight 700
- マルチブランド要素（デコホーム、N+）は **CSS 変数で切り替え**、ニトリティールと混ぜない
- CSS Custom Properties（`--background-*`、`--text-*`、`--border-*`）を活用してトークンベースで組む

### Don't（禁止）

- テキスト色に **純黒 `#000000`** を使わない——ニトリのテキストは `#333333`
- **ピル形状（border-radius 9999px）** のボタンを使わない——ニトリは 4px の角丸が基本
- **大きな角丸（8px, 16px）** を使わない——4px を超えるラディウスはニトリの語彙にない
- letter-spacing を **正にも負にも設定しない**——常に `normal`
- `font-feature-settings: "palt"` を **有効にしない**——プロポーショナル字詰めは使わない
- ニトリティール `#009e96` を **テキストリンクに使わない**——リンクは `#53a4ef`（`--text-Link`）
- **冷たい青グレー**（`#6b7280`、`#9ca3af`）を補助テキストに使わない——`#6d6d6d` のニュートラルグレーを使う
- デコホームのオレンジ `#eb5505` を **ニトリブランドの文脈**で使わない（サブブランド専用）
- 影（box-shadow）を **多用しない**——立体感はサーフェスの色差で出す

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。商品グリッド 2 カラム |
| Tablet | 768px〜1023px | タブレット。商品グリッド 3 カラム |
| Desktop | ≥ 1024px | デスクトップ。商品グリッド 4〜5 カラム |

### モバイル時の調整

- H1: 29.6px → 20〜24px
- H2: 24px → 18〜20px
- 本文サイズは 14〜16px を維持
- カテゴリナビはハンバーガーメニュー化
- 商品カードは 2 カラムグリッドに縮小

### タッチターゲット

- 主要 CTA: 高さ 44px 以上（WCAG 基準）
- ページネーション: 最小 44px × 44px のタップエリア

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Nitori Teal (Brand/CTA): #009e96
Deco Home Orange: #eb5505
N+ Warm Gray: #94897d
Text Primary: #333333
Text Secondary: #6d6d6d
Text Disabled: #dbdbdb
Destructive: #ff3a2e
Link: #53a4ef
Focus Ring: #53a4ef
Border Secondary: #dbdbdb
Border Divider: #e7e7e7
Page Background: #ffffff
Surface (Primary): #f2f2f2
Surface (Secondary): #ededed
Surface (Tertiary): #e1e1e1

Font: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Helvetica Neue", Helvetica, Arial, Meiryo, "Yu Gothic", sans-serif

Body Size: 16px / line-height 1.6 / weight 400 / letter-spacing normal
H1: 29.6px / weight 500 / line-height 1.22
H2: 24px / weight 700 / line-height 1.33
H3: 22px / weight 700 / line-height 1.22
Body (small): 14px / weight 500 / line-height 1.43
Caption: 12px / weight 400 / line-height 1.5

Border Radius: 4px（全要素統一）
Shadow: 基本 none。階層は #ffffff → #f2f2f2 → #ededed → #e1e1e1 のサーフェス色差で表現
```

### プロンプト例

```
ニトリのデザインに従って、家具カテゴリの商品一覧ページを作成してください。
- フォント: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Helvetica Neue", Helvetica, Arial, Meiryo, "Yu Gothic", sans-serif
- セクション見出し: 24px / weight 700 / line-height 1.33 / color #333333
- 本文: 16px / weight 400 / line-height 1.6 / color #333333 / letter-spacing normal
- 商品説明: 14px / weight 500 / line-height 1.43 / color #333333
- 補助テキスト: 14px / weight 400 / color #6d6d6d
- 価格（セール）: 22px / weight 700 / color #ff3a2e
- 主要 CTA: 背景 #009e96（ニトリティール）/ 白文字 / border-radius 4px / padding 0 16px
- セカンダリ CTA: 背景 白 / 文字 #333333 / border 1px solid #333333 / radius 4px
- 商品カード: 背景 白 / border 1px solid #e7e7e7 / radius 4px / shadow なし
- サーフェス階層: #ffffff（基底）→ #f2f2f2（面色）→ #ededed → #e1e1e1
- box-shadow は基本 none。立体感はサーフェスの色差で表現
- border-radius は 4px に統一。ピル形状や 8px 以上の角丸は使わない
- letter-spacing は全階層 normal。palt は使わない
- テキスト色は #333333（純黒 #000000 ではない）
- リンク色は #53a4ef、ニトリティール #009e96 はリンクに使わない
```
