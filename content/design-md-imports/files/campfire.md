# DESIGN.md — CAMPFIRE（キャンプファイヤー）

> CAMPFIRE（https://camp-fire.jp/）のデザイン仕様書。
> 日本最大級のクラウドファンディングプラットフォーム。
> 実サイトの computed style 実測（2026-06-12 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白基調のクリーンなレイアウトに、**ブランドレッド `#ef4846` のアクセント**（炎アイコン、プログレスバー）と **ダークテキスト `#4d4a4a`** で構成。プロジェクトカードのグリッド表示に情報を集約し、サムネイル・達成率・支援金額を一覧で比較できるブラウジング特化型UI
- **密度**: 情報密度が高いカード一覧型。プロジェクトカードは小さな文字（12px）で詳細を詰め込み、本文 line-height は 1.4 と欧文的にタイト。見出しも 1.4〜1.5 で余白を切り詰める
- **キーワード**: 白基調、情報密度、カードグリッド、ブランドレッド、プロジェクト閲覧性
- **特徴**:
  - 和文フォントは **Hiragino Kaku Gothic ProN / Hiragino Sans** を基本とし、欧文は **Helvetica Neue** を先頭に置く欧文優先の font-family 指定
  - **ブランドカラーは `#ef4846`（炎のレッド）**。プログレスバー、達成率ハイライト、ロゴマーク等に使用。ただし CTA ボタンには使われず、ボタンは `#4d4a4a`（ダークブラウングレー）や白枠が中心
  - テキスト色は `#4d4a4a`（ダークブラウングレー）が主役。純黒 `#000000` は使わず、やわらかいトーンで統一
  - **カテゴリーナビにピル型ボタン** `border-radius: 34px` を採用。検索ボタンは角丸 `4px`
  - CSS Custom Properties は未使用。ハードコードされた色指定
  - `font-feature-settings`（palt / kern）の明示的適用なし
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Red** (`#ef4846`): ブランドカラー。炎アイコン、プログレスバー、達成率表示、アクセント要素に使用。ボタン背景には使われない

### CTA / Buttons

- **Search Button**: 背景 `#4d4a4a` / 文字 `#ffffff` / radius `0px 4px 4px 0px`（右側のみ角丸）/ 12px
- **Secondary CTA**: 背景 `#ffffff` / 文字 `#666666` / border あり / radius `4px` / 14px / weight 700
- **Category Pill**: 背景 `transparent` / 文字 `#4d4a4a` / border あり / radius `34px`（ピル形状）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#4d4a4a` | (77, 74, 74) | 見出し・本文テキスト・検索ボタン背景 |
| Text Secondary | `#666666` | (102, 102, 102) | "もっと見る" ボタン・補足テキスト |
| Text Muted | `#999999` | (153, 153, 153) | フッターテキスト・補助情報 |
| Border | `#e4e4e4` | (228, 228, 228) | カード枠線・区切り線 |
| Surface Alt | `#f3f3f5` | (243, 243, 245) | 検索入力欄の背景 |
| Surface | `#f6f8fa` | (246, 248, 250) | セクション背景（クールグレー） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード背景 |

### Accent

- **Gold** (`#ffb20e`): 支援金額ハイライト、達成表示
- **Orange** (`#de772d`): カテゴリーアクセント
- **Navy** (`#4f6e98`): カテゴリーアクセント

### Footer

- **Footer Background** (`#393f48`): フッター背景のダークグレー
- **Footer Text**: `#999999`（muted）/ `#ffffff`（リンク）

### Semantic（実測未確認・推奨値）

実サイトのトップページにはエラー／成功色が表面化していない。クラウドファンディングの文脈に合わせた推奨値:

- **Danger**: `#dc3545` 程度のレッド（ブランドレッドとは区別）
- **Success**: `#28a745` 程度のグリーン
- **Warning**: `#ffc107` 程度のイエロー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Hiragino Kaku Gothic ProN**（macOS / iOS）→ **Hiragino Sans**（新しい macOS）→ **Meiryo**（Windows）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Helvetica Neue** を最優先、フォールバックに **Arial**
- font-family 先頭に欧文フォントを置く欧文優先の構成。和文テキスト中の英数字は Helvetica Neue で描画される

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
  "Hiragino Sans", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先の指定**。Helvetica Neue → Arial で欧文を先に拾い、和文は Hiragino Kaku Gothic ProN → Hiragino Sans → Meiryo の順
- Noto Sans JP / 游ゴシックは含まれない。macOS / iOS + Windows のシステムフォントに絞ったシンプルな構成
- Hiragino Kaku Gothic ProN と Hiragino Sans の両方を指定（旧 macOS 対応）

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-12 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page Title (H1) | Helvetica Neue + Hiragino | 20px | 700 | 30px (x1.5) | normal | `#4d4a4a` | "人気のプロジェクト" |
| Section H3 (Bold) | Helvetica Neue + Hiragino | 18px | 700 | 25.2px (x1.4) | normal | `#4d4a4a` | "カテゴリーからさがす" |
| Section H3 (Sub) | Helvetica Neue + Hiragino | 16px | 700 | 22.4px (x1.4) | normal | `#4d4a4a` | サブセクション見出し |
| Body | Helvetica Neue + Hiragino | 14px | 400 | 19.6px (x1.4) | normal | `#4d4a4a` | 本文基本 |
| Nav Link | Helvetica Neue + Hiragino | 13px | 700 | 18.2px (x1.4) | normal | `#4d4a4a` | ヘッダーナビ |
| Card Title (H2) | Helvetica Neue + Hiragino | 12px | 400 | 17px (x1.42) | 0.6px (0.05em) | `#4d4a4a` | プロジェクトカードのタイトル |
| Caption | Helvetica Neue + Hiragino | 10-11px | 400 | 14px (x1.4) | normal | `#999999` | フッター・注釈 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.4`（19.6px / 14px）— 日本語サイトとしてはタイト。情報密度優先
- **見出し (18〜20px)**: `1.4〜1.5`
- **カードタイトル (12px)**: `1.42`（17px / 12px）
- **ナビ (13px)**: `1.4`（18.2px / 13px）

**字間 (letter-spacing)** — 実測:
- **カードタイトル (12px)**: `0.05em`（0.6px / 12px）。小さい文字に正のトラッキングで可読性確保
- **その他**: `normal`（letter-spacing 指定なし）

**ガイドライン**:
- CAMPFIRE は **line-height 1.4 で統一**。日本語サイトの標準（1.7〜2.0）より詰めて、情報密度を高める方針
- letter-spacing は基本 `normal`。小さな文字（12px 以下）にのみ `0.05em` で可読性を補う
- 見出し・本文ともに同じリズム（1.4）で組み、カードグリッドの整列感を保つ

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

- カードタイトルは省略表示（`text-overflow: ellipsis`）が多い
- ナビゲーションは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` の明示的有効化は確認されなかった
- システムフォント（Hiragino / Meiryo）のデフォルトメトリクスで組む方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Search Button（検索）**
- Background: `#4d4a4a`
- Text: `#ffffff`
- Padding: 検索バーの右端に連結
- Border Radius: `0px 4px 4px 0px`（左は直角、右のみ 4px 角丸）
- Font: 12px, weight 400
- Border: none

**Secondary CTA（"もっと見る"）**
- Background: `#ffffff`
- Text: `#666666`
- Border: `1px solid #e4e4e4`
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: 14px, weight 700

**Category Pill（カテゴリー選択）**
- Background: `transparent`
- Text: `#4d4a4a`
- Border: `1px solid #e4e4e4`
- Padding: `6px 16px`
- Border Radius: `34px`（ピル形状）
- Font: 14px, weight 400

**Footer Link**
- Background: transparent
- Text: `#ffffff`
- Font: 12px, weight 400
- Border: none

### Inputs

**Search Input（検索フォーム）**
- Background: `#f3f3f5`
- Border: `1px solid #e4e4e4`
- Border (focus): `1px solid #4d4a4a`（推奨）
- Border Radius: `4px 0px 0px 4px`（検索ボタンと連結のため左のみ角丸）
- Padding: `8px 12px`
- Font: 14px, weight 400
- Height: `36px` 程度

### Cards（プロジェクトカード）

- Background: `#ffffff`
- Border: `1px solid #e4e4e4`
- Border Radius: `4px`
- Padding: `0`（サムネイル上部＋テキスト下部の構成）
- Shadow: 基本なし（フラット）

**プロジェクトカードの構造**:
1. サムネイル画像（上部、アスペクト比固定）
2. カテゴリーラベル
3. プロジェクトタイトル（12px / weight 400 / letter-spacing 0.05em）
4. 支援金額・達成率（ブランドレッド `#ef4846` でハイライト）
5. 残り日数・支援者数

### Progress Bar（達成率バー）

- Background (track): `#e4e4e4`
- Background (fill): `#ef4846`（ブランドレッド）
- Height: `4px` 程度
- Border Radius: `2px`

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #e4e4e4`
- Position: sticky / fixed
- z-index: 高い値

### Footer

- Background: `#393f48`
- Text: `#999999`（通常）/ `#ffffff`（リンク）
- Padding: `40px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 4px / 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間・プログレスバー上下 |
| S | 8px | カード内の要素間・ボタン内の縦余白 |
| M | 16px | カード内の横余白・段落間 |
| L | 24px | セクション内の見出しと本文・カード間 |
| XL | 40px | セクション間の縦余白 |
| XXL | 64px | ヒーロー上下・フッター上余白 |

### Container

- Max Width: `1100〜1200px`
- Padding (horizontal): mobile `16px` / desktop `24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 2px | プログレスバー |
| Medium | 4px | カード・検索ボタン・通常ボタン |
| Pill | 34px | カテゴリーピル |

### Grid

- プロジェクトカードグリッド: 3〜4 カラム（デスクトップ）
- Gutter: 16〜24px
- カードは均等幅、サムネイルのアスペクト比で高さ統一

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | カードホバー時の浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none` のフラットデザイン
- 階層は **ボーダー `#e4e4e4`** と **サーフェス背景色 `#f6f8fa`** で表現
- 影を使う場合は控えめな `rgba(0, 0, 0, 0.08〜0.12)` で

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif` の完全なフォールバックチェーンを指定する
- テキスト色は `#4d4a4a`（ダークブラウングレー）を基本にし、柔らかいトーンを保つ
- プログレスバーや達成率にはブランドレッド `#ef4846` を使う
- カードの枠線には `#e4e4e4` を統一して使う
- カテゴリーナビにはピル形状（`border-radius: 34px`）を使う
- プロジェクトカードのタイトルは 12px + `letter-spacing: 0.05em` で小さくても読みやすくする
- line-height は全体 `1.4` で統一し、カードグリッドの整列感を保つ
- セクション背景には `#f6f8fa` のクールグレーを使い、白との対比でゾーンを区切る

### Don't（禁止）

- テキストに純黒 `#000000` を使わない（CAMPFIRE のテキストは `#4d4a4a` が基本）
- ブランドレッド `#ef4846` をボタン背景に使わない（ブランドレッドはプログレスバー・アクセント用。ボタンは `#4d4a4a` や白枠）
- カードに大きな `box-shadow` をつけない（フラット + ボーダーが CAMPFIRE のスタイル）
- 検索バーの角丸を左右対称にしない（左が入力欄 `4px 0 0 4px`、右が検索ボタン `0 4px 4px 0` の非対称連結）
- フォントに `Noto Sans JP` や `游ゴシック` を混ぜない（CAMPFIRE は Hiragino 系 + Meiryo のシステムフォント構成）
- 本文の line-height を `1.7` 以上に広げない（CAMPFIRE は `1.4` の情報密度を維持する）
- カードタイトルの letter-spacing を `0` にしない（12px の小文字には `0.05em` が必要）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1カラム） |
| Tablet | 768〜1023px | タブレットレイアウト（2カラム） |
| Desktop | ≥ 1024px | デスクトップレイアウト（3〜4カラム） |

### モバイル時の調整

- プロジェクトカード: 3〜4カラム → 1〜2カラムに縮小
- Page Title (H1): 20px を維持
- ナビゲーション: ハンバーガーメニューに切り替え
- 検索バー: フルワイドに拡張
- カテゴリーピル: 横スクロール可能なリスト

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- カテゴリーピル: 高さ 36px 以上を確保

### フォントサイズの調整

- 本文 14px はモバイルでも維持
- 見出しはデスクトップと同じサイズを維持（元が小さいため）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red (accent): #ef4846
Text Primary: #4d4a4a
Text Secondary: #666666
Text Muted: #999999
Background: #ffffff
Surface: #f6f8fa
Surface Alt (input): #f3f3f5
Border: #e4e4e4
Footer BG: #393f48
Gold (funding): #ffb20e

Font: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
      "Hiragino Sans", Meiryo, sans-serif

Body Size: 14px / line-height 1.4 / weight 400 / letter-spacing normal
Page Title: 20px / line-height 1.5 / weight 700
Section Head: 16-18px / line-height 1.4 / weight 700
Card Title: 12px / line-height 1.42 / weight 400 / letter-spacing 0.05em
Caption: 10-11px / line-height 1.4

Border Radius: 4px (card/button) / 34px (category pill)
Shadow: 基本 none。階層はボーダーとサーフェス背景色で表現
```

### プロンプト例

```
CAMPFIRE のデザインに従って、クラウドファンディングのプロジェクト一覧ページを作成してください。
- フォント: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
- セクション見出し: 18px / weight 700 / line-height 1.4 / color #4d4a4a
- プロジェクトカードタイトル: 12px / weight 400 / line-height 1.42 / letter-spacing 0.05em / color #4d4a4a
- 本文: 14px / weight 400 / line-height 1.4 / color #4d4a4a
- 補助テキスト: 12px / weight 400 / color #999999
- プログレスバー: 背景トラック #e4e4e4 / 達成部分 #ef4846（ブランドレッド）/ 高さ 4px / radius 2px
- "もっと見る" ボタン: 背景 白 / 文字 #666666 / border 1px solid #e4e4e4 / radius 4px / 14px / weight 700
- カテゴリーピル: 背景 transparent / 文字 #4d4a4a / border 1px solid #e4e4e4 / radius 34px
- カード: 背景 白 / border 1px solid #e4e4e4 / radius 4px / shadow none
- セクション背景: #f6f8fa（クールグレー）と白の交互で区切る
- テキスト色に純黒 #000000 を使わない（すべて #4d4a4a 基調）
- ブランドレッド #ef4846 はボタンに使わない（プログレスバー・アクセント専用）
```
