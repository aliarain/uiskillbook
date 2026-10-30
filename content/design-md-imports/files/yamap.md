# DESIGN.md — YAMAP（ヤマップ）

> YAMAP（https://yamap.com/）のデザイン仕様書。
> 登山・アウトドア向けの地図アプリ＆コミュニティプラットフォーム。
> 実サイトの computed style 実測に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロームを基調とした機能的で情報密度の高い UI に、**レッド `#e60012` のブランドアクセント**を差し色として使用。アウトドア・登山というアクティブな領域でありながら、装飾を抑えた実用重視のデザイン
- **密度**: 本文 line-height 1.5、letter-spacing normal。情報量の多い活動記録・山の情報を効率よく表示する設計
- **キーワード**: モノクローム、機能的、ピル CTA、ヒラギノゴシック、アウトドア・コミュニティ
- **特徴**:
  - 和文フォントに **Hiragino Kaku Gothic ProN / Hiragino Sans** を最優先。Next.js の `next/font` 経由で **Noto Sans JP** も読み込み、フォールバックに組み込む
  - **ブランドカラーは `#e60012`（YAMAP レッド）**。アクセントとして使用されるが、主要 CTA は黒 `#000000` またはライトグレー `#f0f0f0` のピルが中心
  - **CTA はすべて完全ピル（radius 9999px）**。黒ピル・ライトピル・レッドピルの3段階
  - テキスト色は `#222222`（ソフトブラック）を基本に、純黒 `#000000` は使わない
  - サーフェスに `#f0f0f0` を多用し、純白との対比で階層を作る
  - カードは `border-radius: 10px` の角丸
  - `letter-spacing` と `font-feature-settings` はいずれも初期値のまま。palt / kern の適用なし
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **YAMAP Red** (`#e60012`): ブランドカラー。レッドピル CTA の背景、ロゴ、アクセント要素に使用

### CTA / Buttons

- **Primary CTA (Dark)**: 背景 `#000000` / 文字 `#ffffff` / radius `9999px`（pill）/ padding `0px 24px` / 14-16px / weight 700
- **Primary CTA (Red)**: 背景 `#e60012` / 文字 `#ffffff` / radius `9999px`（pill）/ padding `0px 24px` / 16px / weight 700
- **Secondary CTA (Light)**: 背景 `#f0f0f0` / 文字 `#000000` / radius `9999px`（pill）/ padding `0px 24px` / 14px / weight 700

### Neutral — Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 黒ピル CTA 背景 |
| Soft Black | `#222222` | (34, 34, 34) | 本文テキスト・見出し・ダークセクション背景 |
| Border | `#d8d8d8` | (216, 216, 216) | 区切り線・カードボーダー |
| Surface | `#f0f0f0` | (240, 240, 240) | カード背景・セクション背景（最多出現） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ヘッダー |

### Overlay

- **Modal Overlay**: `rgba(0, 0, 0, 0.6)`

### Semantic（実測未確認・推奨値）

実サイトでは明確なエラー／成功色は表面化していない。アウトドアアプリ向けに推奨する補完値:

- **Danger**: `#dc2626`
- **Success**: `#16a34a`
- **Warning**: `#d97706`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Hiragino Kaku Gothic ProN（ヒラギノ角ゴ ProN）** を最優先。macOS / iOS 環境でのネイティブ表示品質を重視
- **フォールバック**: `Hiragino Sans` → `Noto Sans JP`（Next.js `next/font` 経由で読み込み）→ `Meiryo`（Windows）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、ヒラギノの欧文グリフを優先
- フォールバックチェーンに `system-ui`、`SF Pro`、`-apple-system` を含み、Apple 環境での欧文表示を最適化
- Helvetica Neue 等の欧文専用書体は指定に含まれない

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  "Noto Sans JP", Meiryo, sans-serif, system-ui, "SF Pro", -apple-system;
```

**フォールバックの考え方**:
- Hiragino Kaku Gothic ProN を最優先し、macOS / iOS での表示品質を確保
- Next.js の `next/font` で Noto Sans JP をプリロードしているため、非 Apple 環境でも和文の品質を担保
- `system-ui` / `SF Pro` / `-apple-system` はフォールバック末尾に配置（欧文グリフの補完用）

> **代替フォント注記**: Hiragino Kaku Gothic ProN は Apple OS にバンドルされているため、Windows / Linux 環境では Noto Sans JP にフォールバックする。preview.html では Noto Sans JP を使用。

### 3.4 文字サイズ・ウェイト階層

> 実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display H2 | Hiragino Kaku Gothic ProN | 40px | 700 | 60px (x1.5) | normal | `#222222` | ヒーローセクション大見出し |
| Section H2 | Hiragino Kaku Gothic ProN | 24px | 700 | 36px (x1.5) | normal | `#222222` | セクション見出し |
| H2 Small | Hiragino Kaku Gothic ProN | 16px | 700 | 24px (x1.5) | normal | `#222222` | カード内・リスト見出し |
| H3 | Hiragino Kaku Gothic ProN | 20px | 700 | 30px (x1.5) | normal | `#222222` | サブ見出し |
| H3 Small | Hiragino Kaku Gothic ProN | 16px | 700 | 24px (x1.5) | normal | `#222222` | 小見出し |
| Body | Hiragino Kaku Gothic ProN | 16px | 400 | 24px (x1.5) | normal | `#222222` | 本文 |
| Body Large | Hiragino Kaku Gothic ProN | 18px | 400 | 27px (x1.5) | normal | `#222222` | リード文 |
| Caption | Hiragino Kaku Gothic ProN | 14px | 400 | 21px (x1.5) | normal | `#222222` | 補足テキスト |
| Small | Hiragino Kaku Gothic ProN | 12px | 400 | 18px (x1.5) | normal | `#222222` | 注釈・タグ |
| Tiny | Hiragino Kaku Gothic ProN | 10px | 400-700 | 15px (x1.5) | normal | `#222222` | 最小テキスト |
| CTA Label | Hiragino Kaku Gothic ProN | 14-16px | 700 | 21-24px (x1.5) | normal | `#ffffff` / `#000000` | ピルボタンラベル |
| Logo H1 | Hiragino Kaku Gothic ProN | 16px | 700 | 24px (x1.5) | normal | `#222222` | ロゴエリア |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **全要素一律**: `1.5` -- 見出し・本文・キャプション・CTA すべて同一の line-height
- 欧文サイトの見出し（1.1-1.3）と比べ広め。日本語の可読性を優先した設計

**字間 (letter-spacing)** -- 実測:
- **全要素一律**: `normal`（0）-- 見出し・本文ともにトラッキング調整なし
- 負のトラッキングで見出しを詰めるパターンは採用していない

**ガイドライン**:
- YAMAP の line-height は **全要素 1.5 で統一** されている。セクションごとに変えない
- letter-spacing は一切調整しない。`normal` のまま使用する
- 見出しと本文の差は **サイズと weight のみ** で表現する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 改行位置の手動制御は最小限（レスポンシブ対応のため）

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Hiragino Kaku Gothic ProN のデフォルトメトリクスをそのまま使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA (Dark Pill)** -- アプリダウンロード・主要アクション
- Background: `#000000`
- Text: `#ffffff`
- Padding: `0px 24px`（高さは line-height で確保）
- Border Radius: `9999px`（完全ピル）
- Font: Hiragino Kaku Gothic ProN, 14-16px, weight 700
- Border: none

**Primary CTA (Red Pill)** -- ブランドアクション・登録
- Background: `#e60012`
- Text: `#ffffff`
- Padding: `0px 24px`
- Border Radius: `9999px`（完全ピル）
- Font: Hiragino Kaku Gothic ProN, 16px, weight 700
- Border: none

**Secondary CTA (Light Pill)** -- フィルタ・タグ・補助アクション
- Background: `#f0f0f0`
- Text: `#000000`
- Padding: `0px 24px`
- Border Radius: `9999px`（完全ピル）
- Font: Hiragino Kaku Gothic ProN, 14px, weight 700
- Border: none

**Card Link** -- カード内リンク
- Background: `#f0f0f0`
- Text: `#0000ee`（ブラウザデフォルトリンク色）
- Padding: `0px 16px`
- Border Radius: `10px`
- Font: Hiragino Kaku Gothic ProN, 16px, weight 400

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #d8d8d8`
- Border (focus): `1px solid #222222`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font: Hiragino Kaku Gothic ProN, 16px, weight 400
- Height: `44px`

### Cards

- Background: `#f0f0f0` または `#ffffff`
- Border: なし、または `1px solid #d8d8d8`
- Border Radius: `10px`
- Padding: `16px`
- Shadow: 基本なし（フラットデザイン）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #d8d8d8`（推奨）
- Position: `fixed` または `sticky`

### Footer

- Background: `#222222`（ダーク）
- Text: `#ffffff`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | 要素内の小余白 |
| M | 16px | カード内余白・段落間 |
| L | 24px | セクション内の見出しと本文・ピル CTA 横余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24-32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | 小要素 |
| Medium | 8px | 入力欄 |
| Card | 10px | カード・カードリンク |
| Pill | 9999px | CTA ボタン・タグ・バッジ |

### Grid

- Flexbox ベースのレイアウト
- Gutter: 16-24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **背景色の切り替え**（`#ffffff` と `#f0f0f0`）と **`border-radius: 10px` のカード形状** で表現
- モーダルオーバーレイは `rgba(0, 0, 0, 0.6)` で背景を暗転

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **Hiragino Kaku Gothic ProN を最優先**、フォールバックは Hiragino Sans -> Noto Sans JP -> Meiryo
- 本文の line-height は **1.5** で統一する（見出し・本文・キャプションすべて）
- letter-spacing は **normal（0）** のまま使う。トラッキング調整は不要
- 主要 CTA は **ピル形状（radius 9999px）** で統一する
- テキスト色は **`#222222`（ソフトブラック）** を基本にする
- サーフェスは **`#f0f0f0`** を使い、純白との対比でカード・セクションの階層を作る
- ブランドレッド `#e60012` は **アクセントとして控えめに** 使う（全面に広げない）
- 見出しと本文の差は **サイズと weight（700 vs 400）のみ** で表現する
- カードは **`border-radius: 10px`** で統一する

### Don't（禁止）

- テキストに **純黒 `#000000`** を使わない（YAMAP のテキストは `#222222`。CTA 背景のみ `#000000`）
- **letter-spacing を調整しない**（見出しの負トラッキング、本文の正トラッキングともに不要）
- **palt / kern を有効にしない**（Hiragino のデフォルトメトリクスをそのまま使う）
- **冷たいブルーグレー**（`#6b7280`、`#9ca3af` 等）を使わない（YAMAP のグレーは無彩色系 `#d8d8d8` / `#f0f0f0`）
- CTA に **角張った直角（radius 0）や小角丸（4-8px）** を使わない -- ピル `9999px` が基本
- ブランドレッド `#e60012` を **主要 CTA のデフォルト色にしない**（主要 CTA は黒ピルが基本。レッドは特別なアクションのみ）
- カードの border-radius を **4px や 16px にしない**（YAMAP は `10px` で統一）
- 本文の line-height を **1.5 以外にしない**（YAMAP は全要素統一）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | - | ~767px。モバイルレイアウト |
| Tablet | 768px | タブレットレイアウト |
| Desktop | 1024px | デスクトップレイアウト |

### モバイル時の調整

- Display H2: 40px -> 24-28px
- Section H2: 24px -> 20px
- 本文サイズは 16px を維持（line-height 1.5 も維持）
- ナビはハンバーガーメニュー化

### タッチターゲット

- 主要 CTA: 高さ 44px 以上（WCAG 基準）
- ピルボタン: padding `0px 24px` + weight 700 で視認性確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
YAMAP Red (Brand): #e60012
Black (CTA): #000000
Soft Black (Text): #222222
Border: #d8d8d8
Surface: #f0f0f0
White: #ffffff
Overlay: rgba(0, 0, 0, 0.6)

Font: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif
（非 Apple 環境の代替: Noto Sans JP）

Body Size: 16px / line-height 1.5 / weight 400 / letter-spacing normal
Heading Size: 24-40px / line-height 1.5 / weight 700 / letter-spacing normal
Caption: 14px / line-height 1.5 / letter-spacing normal
Small: 12px / line-height 1.5 / letter-spacing normal

Border Radius: 10px（カード）／9999px（CTA・ピル）
Shadow: 基本 none。階層は #f0f0f0 サーフェスで表現
```

### プロンプト例

```
YAMAP のデザインに従って、登山コミュニティの活動記録一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif
- セクション見出し: 24-40px / weight 700 / line-height 1.5 / letter-spacing normal / color #222222
- 本文: 16px / weight 400 / line-height 1.5 / letter-spacing normal / color #222222
- 補足テキスト: 14px / weight 400 / line-height 1.5 / color #222222
- 主要 CTA（黒ピル）: 背景 #000000 / 白文字 / border-radius 9999px / padding 0 24px / 14-16px / weight 700
- ブランド CTA（レッドピル）: 背景 #e60012 / 白文字 / border-radius 9999px / padding 0 24px / 16px / weight 700
- セカンダリ CTA（ライトピル）: 背景 #f0f0f0 / 文字 #000 / border-radius 9999px / padding 0 24px / 14px / weight 700
- カード背景: #f0f0f0 / border-radius 10px
- ページ背景: #ffffff
- ボーダー: #d8d8d8
- テキスト色は #222222（ソフトブラック）。純黒 #000000 はテキストに使わない
- letter-spacing は全要素 normal。palt/kern は使わない
- line-height は全要素 1.5 で統一
- box-shadow は基本 none。階層は背景色 #f0f0f0 と #ffffff の切り替えで表現
```
