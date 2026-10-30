# DESIGN.md — TABIO（タビオ / 靴下屋）

> TABIO（https://tabio.com/jp/）のデザイン仕様書。
> 「Made in Japan」にこだわるプレミアム靴下ブランド。靴下屋の上位ブランドとして、素材・編み・仕上げの技術を追求する。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **小振仮名ゴシック（Koburina Gothic / Fontplus）** を全面に用いた、静謐で上品なモノトーン EC。色で押さない――タイポグラフィと余白で品格を表現する
- **密度**: 本文 14px / line-height 1.23 / letter-spacing 0.08em。商品グリッドはゆったりとした間隔で、靴下一足ずつの素材感を際立たせる
- **キーワード**: Koburina Gothic、モノトーン、0.08em ワイドトラッキング、クラフト感、ミューテッドグレー
- **特徴**:
  - **Fontplus の小振仮名ゴシック（KoburinaGoStdN）** を W3（Light）と W6（Bold）で使い分ける。仮名が小ぶりで上品な、工芸ブランド向けの書体選定
  - **CSS のフォント指定は独特**: `ur`（Regular 欧文）、`ub`（Bold 欧文）、`kr`（Regular 和文）、`kb`（Bold 和文）という短縮名を先頭に置き、実体は `FP-KoburinaGoStdN-W3` / `FP-KoburinaGoStdN-W6`
  - **ブランドカラーは「なし」が答え**: 強い色を意図的に使わず、グレースケールのみで構成。ボタンすら `#a6a6a6` のミューテッドグレー
  - **letter-spacing 0.08em が全要素のシグネチャ**: 見出し・本文・ナビ・ボタンのすべてに一貫して広い字間を適用。Tabio のタイポグラフィを最も特徴づける値
  - **font-weight は CSS 上すべて 400**: フォントファイル自体が重み（W3 = Light / W6 = Bold）を持つため、CSS 側で weight を切り替えない設計
  - **border-radius は一貫して 2px**: ピル型を使わない、直線的で控えめなコンポーネント設計

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値に基づく。すべて hex 表記。

### Brand

- Tabio はブランドアクセント色を持たない。**モノトーンのグレーパレットそのものがブランドの表現**

### Neutral

| Token | Value | 役割 |
|-------|-------|------|
| Text Primary | `#222222` | 主要テキスト（見出し・ラベル） |
| Text Black | `#000000` | body テキスト |
| Text Dark | `#404040` | ロゴ SVG fill |
| Text Secondary | `#737373` | 補足テキスト・キャプション |
| Button Primary BG | `#a6a6a6` | 主要ボタン背景（ミューテッドグレー） |
| Button Primary Text | `#f2f2f2` | 主要ボタン文字色 |
| Border | `#d9d9d9` | 入力欄・区切り線 |
| Background Page | `#f7f7f7` | ページ背景 |
| Surface Content | `#ffffff` | カード・コンテンツ面 |
| Surface Footer | `#f2f2f2` | フッター背景 |
| Surface Button Secondary | `#f2f2f2` | セカンダリボタン背景 |

### Accent（控えめ）

- **Link Blue** (`#5d9cec`): 商品リンク・テキストリンク。ページ内で最も色味が強い要素
- **Badge Dark** (`#4d5057`): レビューバッジ背景。暗めのブルーグレー

### Semantic（推奨）

- **Danger**: `#cc3333`（推奨。実測なし）
- **Success**: `#468254`（推奨）
- **Warning**: `#d9a825`（推奨）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（主要）**: **KoburinaGoStdN（小振仮名ゴシック / Fontplus）** を W3（Light）と W6（Bold）の 2 ウェイトで使用
- **フォールバック**: 游ゴシック → YuGothic → Hiragino Sans → ヒラギノ角ゴシック → Hiragino Kaku Gothic ProN → メイリオ → Meiryo → Osaka → sans-serif
- 明朝体は使用しない

### 3.2 欧文フォント

- Koburina Gothic 内蔵の欧文グリフを使用。独立した欧文書体は組まない
- CSS では `ur`（Regular 欧文）/ `ub`（Bold 欧文）として指定される

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・ナビ・キャプション（Koburina W3 = Light） */
font-family: ur, kr, krSpecific, FP-KoburinaGoStdN-W3,
  游ゴシック, "Yu Gothic", YuGothic, "Hiragino Sans",
  ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W1", "Hiragino Kaku Gothic ProN W1",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, sans-serif;

/* 見出し・ボタン・セクションタイトル（Koburina W6 = Bold） */
font-family: ub, kb, kbSpecific, FP-KoburinaGoStdN-W6,
  游ゴシック, "Yu Gothic", YuGothic, "Hiragino Sans",
  ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W1", "Hiragino Kaku Gothic ProN W1",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, sans-serif;

/* 商品名・Input 等（游ゴシック直指定） */
font-family: 游ゴシック, "Yu Gothic", YuGothic, "Hiragino Sans",
  ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, Osaka, sans-serif;
```

**フォールバックの考え方**:
- Fontplus の短縮名（`ur`, `kr`, `kb` 等）→ 実体フォント名（`FP-KoburinaGoStdN-*`）→ 和文システムフォント → generic family
- Fontplus 未読み込み環境では游ゴシックにフォールバック。游ゴシック未対応環境はヒラギノ → メイリオの順
- **W3 と W6 の切り替えは font-family の差し替えで行い、font-weight は 400 のまま変えない**

> **代替フォント注記**:
> - **Koburina Gothic（小振仮名ゴシック）** は Fontplus 配信のフォント。ローカルプレビューには **Zen Kaku Gothic New**（Google Fonts）が字形の印象が近い。仮名が小ぶりで丁寧な印象を持つ
> - M PLUS 1p も代替候補だが、Zen Kaku Gothic New の方が Koburina の引き締まった字面に近い

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ + 商品ページ、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Hero | Koburina W6 | 26px | 400 | 34px (×1.31) | 2.08px (0.08em) | `#222222` | ヒーローバナー見出し |
| H2 Feature | Koburina W6 | 18px | 400 | 22.2px (×1.23) | 1.44px (0.08em) | `#222222` | 特集セクション見出し |
| H2 Section | Koburina W6 | 17px | 400 | 20.9px (×1.23) | 1.36px (0.08em) | `#222222` | "特集" 等のセクション名 |
| H3 Nav Section | Koburina W6 | 14px | 400 | 14〜21px | 1.12px (0.08em) | `#222222` | ナビゲーション区分 |
| H3 Sub Category | Yu Gothic | 14.3px | 400 | 17.6px (×1.23) | 1.14px (0.08em) | `#222222` | サブカテゴリ名 |
| EN Label | Koburina W3 | 16px | 700 | 19.7px (×1.23) | 0〜1.28px | `#222222` | "LADIES" "MEN" |
| Body | Koburina W3 | 14px | 400 | 14〜17.2px | 0.56〜1.12px (0.04〜0.08em) | `#000000` | 商品説明・本文 |
| Nav Label | Koburina W3 | 14px | 400 | 14px | 0.56px (0.04em) | `#222222` | ナビゲーションリンク |
| Nav Section Bold | Koburina W6 | 13.5px | 400 | 16.6px (×1.23) | 1.08px (0.08em) | `#222222` | ナビ内セクション見出し |
| Body Fallback | Yu Gothic | 13px | 400 | 16px (×1.23) | 1.04px (0.08em) | `#000000` | フォールバック本文 |
| Button | Koburina W6 | 14px | 400 | 14px | 1.12px (0.08em) | `#f2f2f2` | ボタンラベル |
| Small / Footer | Koburina W3 | 12px | 400 | 12〜14.8px | 0.96px (0.08em) | `#737373` | フッターリンク・補足 |
| Caption | Koburina W3 | 11px | 400 | 13.5px (×1.23) | 0.88px (0.08em) | `#737373` | ブランド名・小キャプション |
| H1 Caption | Koburina W3 | 11px | 400 | 13.5px (×1.23) | 0.44px (0.04em) | `#222222` | 商品キャプション |
| Item Name | Yu Gothic | 14.6px | 700 | 17.6px | 1.17px (0.08em) | `#000000` | 商品名（太字） |
| Input | Yu Gothic | 14px | 700 | normal | 1.12px (0.08em) | `#000000` | 入力フィールド |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: **`1.23`**（欧文的にタイトな行間。Koburina の小さい仮名ゆえ成立する）
- **ヒーロー見出し (26px)**: `1.31`
- **セクション見出し (17〜18px)**: `1.23`
- **フッター小文字 (12px)**: `1.0〜1.23`

**字間 (letter-spacing)** — Tabio のシグネチャ:
- **全要素共通**: **`0.08em`**（最も支配的な値。見出し・本文・ナビ・ボタンすべてに適用）
- **ナビリンク・キャプション**: `0.04em`（0.08em よりやや狭い場面もある）
- **EN ラベル "LADIES"**: `normal`〜`0.08em`

**ガイドライン**:
- Tabio の最大の特徴は **letter-spacing: 0.08em の統一的な適用**。これがブランド全体の「ゆったりとした上品さ」を生む
- line-height 1.23 は日本語としてはかなりタイト。Koburina Gothic の仮名が小さいことで成立している
- Koburina W3（Light）の繊細な線は広い字間と相性が良く、詰めると品格が損なわれる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名（「プレミアムコンフォートリブショートソックス」等）はカード幅に合わせて折り返す

### 3.7 OpenType 機能

```css
/* 実測: 明示的な font-feature-settings の指定なし */
font-feature-settings: normal;
```

- `palt` の明示的な有効化は確認できず。Koburina Gothic のデフォルトメトリクスに委ねる設計
- letter-spacing 0.08em が常時適用されているため、`palt` による字詰めは使わない方針と推測される

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（ミューテッドグレー）** — カート追加・アクション
- Background: `#a6a6a6`
- Text: `#f2f2f2`
- Border: none
- Padding: `7px 21px`
- Border Radius: `2px`
- Font: Koburina W6, 14px, weight 400
- Letter Spacing: `0.08em`
- Shadow: `0 0 8px rgba(0, 0, 0, 0.15)`

**Secondary（ライトグレー）**
- Background: `#f2f2f2`
- Text: `#d9d9d9`
- Border: none
- Padding: `7px 21px`
- Border Radius: `2px`
- Font: Koburina W6, 14px, weight 400
- Shadow: none

**Cancel / Tertiary**
- Background: `#f2f2f2`
- Text: `#222222`
- Border: none
- Padding: `7px 21px`
- Border Radius: `2px`
- Shadow: `0 0 8px rgba(0, 0, 0, 0.15)`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #d9d9d9`
- Border (focus): `1px solid #222222`（推奨）
- Border Radius: `2px`
- Padding: `0 21px`
- Font: 游ゴシック, 14px, weight 700
- Letter Spacing: `0.08em`

### Product Card

- Background: `#ffffff`
- Border: none
- Border Radius: なし（矩形）
- Padding: コンテンツに応じて 16px
- Image: アスペクト比固定（正方形寄り）
- Title: 游ゴシック 14.6px weight 700
- Caption: Koburina W3 11px color `#737373`
- Letter Spacing: `0.08em`

### Badge（レビュー）

- Background: `#4d5057`
- Text: `#ffffff`
- Border Radius: `2px`
- Font Size: 11〜12px

### Header / Nav

- Background: `#ffffff`
- Border Bottom: `1px solid #d9d9d9`
- Padding: `0 24px`
- Nav Link: Koburina W3, 14px, letter-spacing 0.04em, color `#222222`
- Section Label: Koburina W6, 13.5px, letter-spacing 0.08em

### Footer

- Background: `#f2f2f2`
- Color: `#737373`
- Padding: `48px 24px`
- Link: Koburina W3, 12px, letter-spacing 0.08em

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | 商品カード内の段落間 |
| M | 16px | カード内の余白・リスト間隔 |
| L | 24px | セクション内のブロック間 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下 |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): `24px`（PC）/ `16px`（mobile）

### Grid

- 商品グリッドは **3〜4 カラム**（PC）/ 2 カラム（mobile）
- Gutter: 16〜24px

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Default | `2px` | ボタン・入力欄・バッジ（全コンポーネント共通） |

- Tabio は単一の `2px` radius で統一。ピル型やラウンド型は使わない

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。ほぼ全要素 |
| 1 | `0 0 8px rgba(0, 0, 0, 0.15)` | Primary ボタン・Cancel ボタン |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | ホバー時の浮き上がり（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではボタンのみに影があり、カード・ヘッダー・フッターは影なし
- 立体感は **グレースケール面の階層**（`#ffffff` → `#f7f7f7` → `#f2f2f2`）で表現

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストの letter-spacing は **0.08em** を基本にする。Tabio のタイポグラフィの最大の特徴
- フォントは **Koburina W3（本文）と W6（見出し・ボタン）** を font-family の差し替えで使い分ける。font-weight は 400 のまま
- カラーパレットは **グレースケールのみ**で構成する。`#222222` → `#737373` → `#a6a6a6` → `#d9d9d9` → `#f2f2f2` → `#f7f7f7`
- ボタンは **すべて border-radius: 2px**。角丸を控えめにして直線的な印象を保つ
- 影は **ボタンの `0 0 8px rgba(0,0,0,0.15)` のみ**に限定し、カードは影なしでフラットに
- 商品画像を主役にするため、UIは最小限のコントラストに抑える
- line-height は 1.23 の密な行間で組む（Koburina の小仮名で成立する）

### Don't（禁止）

- **鮮やかなブランドカラーを追加しない** — Tabio のモノトーンは意図的な設計。赤・青・緑のアクセントを足すとブランドが壊れる
- **border-radius を大きくしない** — 2px 以外を使わない。ピル（9999px）やラウンド（8px 以上）は Tabio の直線美に反する
- **letter-spacing を 0.04em 以下にしない** — 詰めるとクラフト感が失われ、量販店の印象になる
- **font-weight: 700 を CSS で指定しない** — Koburina Gothic は W3/W6 の font-family 切り替えで太さを制御する。CSS の weight 700 は游ゴシックフォールバック時にのみ使用
- **影を多用しない** — ボタン以外に box-shadow を付けるとフラットな世界観が崩れる
- **本文に Noto Sans JP / ヒラギノを主要指定にしない** — Koburina Gothic を最優先

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト |

### モバイル時の調整

- ヒーロー: 26px → 20〜22px
- セクション見出し: 17〜18px → 15〜16px
- 本文サイズ 14px を維持
- letter-spacing 0.08em を維持（ブランドシグネチャのため縮小しない）
- 商品グリッドは 3〜4 カラム → 2 カラム
- Container padding: 24px → 16px

### タッチターゲット

- 主要ボタン: padding `7px 21px` → モバイルでは `10px 24px` に拡大して 44px 以上を確保
- ナビリンク: 44px の高さを確保

### ダークモード

- 未実装（実測時点）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Accent: なし（意図的にモノトーン）
Text Primary: #222222
Text Black: #000000
Text Secondary: #737373
Link Blue: #5d9cec

Button Primary BG: #a6a6a6（ミューテッドグレー）
Button Primary Text: #f2f2f2
Button Shadow: 0 0 8px rgba(0,0,0,0.15)

Background Page: #f7f7f7
Surface Content: #ffffff
Surface Footer: #f2f2f2
Border: #d9d9d9

JP Font (Light): ur, kr, krSpecific, FP-KoburinaGoStdN-W3, 游ゴシック, "Yu Gothic", YuGothic, "Hiragino Sans", ヒラギノ角ゴシック, sans-serif
JP Font (Bold):  ub, kb, kbSpecific, FP-KoburinaGoStdN-W6, 游ゴシック, "Yu Gothic", YuGothic, "Hiragino Sans", ヒラギノ角ゴシック, sans-serif
Preview Substitute: "Zen Kaku Gothic New", sans-serif

Sizes:
  H2 Hero: 26px / weight 400 / line-height 1.31 / letter-spacing 0.08em / Koburina W6
  H2 Section: 17px / weight 400 / line-height 1.23 / letter-spacing 0.08em / Koburina W6
  Body: 14px / weight 400 / line-height 1.23 / letter-spacing 0.08em / Koburina W3
  Button: 14px / weight 400 / line-height 1.0 / letter-spacing 0.08em / Koburina W6
  Caption: 11px / weight 400 / line-height 1.23 / letter-spacing 0.08em / Koburina W3
  Small: 12px / weight 400 / line-height 1.23 / letter-spacing 0.08em / Koburina W3

Border Radius: 2px（全コンポーネント統一）
font-feature-settings: normal（palt なし）
letter-spacing: 0.08em（シグネチャ値）
```

### プロンプト例

```
TABIO のデザインに従って、商品一覧グリッドを作成してください。
- 和文フォント（本文）: "Zen Kaku Gothic New", sans-serif（Koburina W3 代替）
- 和文フォント（見出し）: "Zen Kaku Gothic New", sans-serif（Koburina W6 代替、weight 700 で近似）
- letter-spacing: 0.08em をすべての要素に適用（Tabio のシグネチャ）
- 見出し: 17px / weight 400 / line-height 1.23 / letter-spacing 0.08em / color #222222
- 本文: 14px / weight 400 / line-height 1.23 / letter-spacing 0.08em / color #000000
- キャプション: 11px / color #737373
- 主要ボタン: 背景 #a6a6a6 / 文字 #f2f2f2 / radius 2px / padding 7px 21px / shadow 0 0 8px rgba(0,0,0,0.15)
- 商品カード: 背景 #ffffff / border なし / radius なし / 影なし
- ページ背景: #f7f7f7
- リンク色: #5d9cec
- border-radius は全コンポーネント 2px（ピル型を使わない）
- font-feature-settings: normal（palt なし）
- 色は鮮やかなアクセントを追加しない（モノトーン厳守）
```
