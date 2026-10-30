# DESIGN.md — ANREALAGE（アンリアレイジ）

> ANREALAGE 公式オンラインショップ（https://www.anrealage.com/）のデザイン仕様書。
> デザイナー森永邦彦が 2003 年に設立。ブランド名は A REAL — UN REAL — AGE の造語で、「日常（real）の中にある非日常（unreal）を見つけ、時代（age）を超えるデザイン」を志向する。テクノロジーと伝統的な手仕事を融合させるアヴァンギャルドな日本発ファッションブランド。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Helvetica ファースト + 完全モノクローム**の、プロダクト写真が主役のミニマル EC。テキストは極小（10px ベース）で、商品画像に対して**徹底的に脇役に徹する**レイアウト。ギャラリーと EC ショップの中間のような佇まい
- **密度**: body の基本 font-size が **10px** と極端に小さく、ナビや注記テキストはそのまま 10px で表示される。商品名ですら 16px と控えめ。情報密度は低く、**商品写真のグリッドが画面のほぼ全面**を占める
- **キーワード**: Helvetica、モノクローム、ギャラリー型 EC、極小テキスト、無装飾、写真主役、角丸ゼロ、アヴァンギャルド、ミニマル
- **特徴**:
  - **Helvetica ファースト**の欧文優先フォントスタック。和文は游ゴシック Medium（Windows 対策で Medium 指定）にフォールバック
  - **全要素で同一の font-family** — 見出し・本文・ナビ・フッターすべて同じスタック。サブファミリーや書体の切り替えなし
  - **CSS Custom Properties は未使用**。素朴な直書き CSS
  - **border-radius は全要素 0px**（カルーセルドットの 20px を除く）。カード・ボタン・入力欄すべて直角
  - **色は純黒 `#000000` と純白 `#ffffff` の2色が基本**。装飾的なブランドカラーを持たない。彩度は商品写真だけが担う
  - **OpenType 機能（palt / kern）は未使用**。`font-feature-settings: normal` が全要素
  - **letter-spacing もほぼ 0**（body は -0.01px ≒ 0）。ナビの一部カテゴリに 0.15px の微小なトラッキングがある程度
  - **ウェイトの使い分けは 400 / 700 の二段階のみ**。ナビのカテゴリ名（WOMEN / MEN）とカート数バッジが 700、それ以外は 400
  - **CTA ボタンが事実上存在しない** — 商品画像そのものがリンクであり、従来の「カートに入れる」型ボタンはトップページに表示されない。EC でありながらギャラリーの文法で構成されている

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> ANREALAGE のパレットは**事実上モノクロームのみ**。ブランド固有の彩度を持つ色は存在せず、すべてのカラーは白・黒・グレーの無彩色。

### Brand

- **Pure Black** (`#000000`): テキスト・ロゴの基本色。事実上のブランドカラー
- **Pure White** (`#ffffff`): ページ背景。商品写真を引き立てる余白

### Surface

| Token | Hex | RGB | 役割 |
|-------|-----|-----|------|
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード面 |
| Light Gray | `#f0f0f0` | (240, 240, 240) | セクション背景・面色（最頻出、6件） |
| Silver | `#dcdcdc` | (220, 220, 220) | 閉じるボタン背景 |
| Dot Default | `#c8c8c8` | (200, 200, 200) | カルーセルドット（非アクティブ） |
| Dot Active | `#969696` | (150, 150, 150) | カルーセルドット（アクティブ） |
| Mid Gray | `#808080` | (128, 128, 128) | グレー中間値 |

### Text

| Token | Hex | RGB | 役割 |
|-------|-----|-----|------|
| Primary | `#000000` | (0, 0, 0) | 本文・商品名・ナビ |
| Secondary | `#999999` | (153, 153, 153) | サブナビ・補助リンク |
| On Dark | `#ffffff` | (255, 255, 255) | フッター・カテゴリラベル |

### Footer / Dark

| Token | Hex | RGB | 役割 |
|-------|-----|-----|------|
| Footer BG | `#333333` | (51, 51, 51) | フッター背景・TOP ボタン |
| Footer Text | `#ffffff` | (255, 255, 255) | フッター内テキスト |

### Third-party（除外推奨）

- **Chat Blue** (`#008cba`): チャット/サポートウィジェット。ブランドデザインの一部ではなく外部ツール由来

### Semantic（補完推奨値）

実サイトにはエラー・成功色が表面化していない。追加する場合はモノクロームに溶け込む低彩度を推奨:

- **Danger**: `#8b0000`（暗い赤）
- **Warning**: `#8b7355`（暗いゴールド）
- **Success**: `#3d5e3d`（暗いオリーブ）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック Medium / Yu Gothic Medium → 游ゴシック体 / YuGothic → ヒラギノ角ゴ Pro / Hiragino Kaku Gothic Pro → MS PGothic → sans-serif**
- 游ゴシックは **Medium** を明示指定（Windows で細字化を回避する定番テクニック）
- 明朝体の使用なし

### 3.2 欧文フォント

- **サンセリフ**: **Helvetica → Helvetica Neue → Arial → sans-serif**
- Helvetica が **最先頭**。macOS / iOS では Helvetica が表示され、Windows / Android では Arial にフォールバック
- セリフ・等幅フォントの使用なし

### 3.3 font-family 指定

実サイトの実測値（**全要素で同一**）:

```css
/* 唯一の font-family（全要素共通） */
font-family: Helvetica, "Helvetica Neue", Arial,
  "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック体, YuGothic,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- **Helvetica が先頭**（欧文優先）— 欧文はブランドの顔。ファッション業界では Helvetica 先頭が定番
- 和文は **游ゴシック Medium** で Windows の細字問題を解決し、macOS では **YuGothic** にフォールバック
- **ヒラギノ角ゴ Pro**（W3 ではなく Pro）は旧 macOS / iPhone 向けフォールバック
- MS PGothic は最終手段（古い Windows 向け）

> **代替フォント注記**: Helvetica はライセンス制約があるため、preview.html 等では **Arial**（Windows 標準、形状が近い）または **Google Fonts の "Inter"**（現代的な代替）で近似可能。ただし ANREALAGE の印象はあくまで **Helvetica のニュートラルさ**に依存しているため、可能な限り Helvetica を使用する。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Body (base) | Helvetica stack | 10px | 400 | 15px (×1.5) | -0.01px (≒0) | `#000000` | HTML の基本 font-size |
| Product Name | Helvetica stack | 16px | 400 | 20px (×1.25) | 1px (0.063em) | `#000000` | class "item-name" |
| Nav Category | Helvetica stack | 15px | **700** | — | 0.15px (0.01em) | `#000000` | "WOMEN" "MEN" 等 |
| Sub Nav | Helvetica stack | 12px | **700** | — | 0.15px (0.013em) | `#999999` | カテゴリ下層リンク |
| Header Banner | Helvetica stack | 15px | **700** | — | — | `#ffffff` | プロモーションバナー |
| Price | Helvetica stack | 14px | 400 | 21px (×1.5) | — | `#000000` | 価格表示 |
| Shop Info | Helvetica stack | 14px | 400 | 24px (×1.71) | — | `#000000` | 店舗情報テキスト |
| Cart Count | Helvetica stack | 10px | **700** | — | — | `#000000` | カート内アイテム数 |
| Category Label | Helvetica stack | 16px | 400 | — | — | `#ffffff` | 画像上の "Tシャツ" 等 |
| Footer "FOLLOW US" | Helvetica stack | 14px | 400 | — | — | `#ffffff` | フッター見出し |
| Footer "TOP" | Helvetica stack | 9px | 400 | — | — | `#ffffff` | ページトップリンク |
| Pop-up Notice | Helvetica stack | 10px | 400 | — | — | `#000000` | ポップアップ注記 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **Body (10px)**: `1.5`（15px / 10px）
- **Product Name (16px)**: **`1.25`**（20px / 16px）— タイトな行間。商品名は通常 1 行
- **Price (14px)**: `1.5`（21px / 14px）
- **Shop Info (14px)**: `1.71`（24px / 14px）— 情報テキストはやや広め

**字間 (letter-spacing)** — 実測:
- **Body (10px)**: **`-0.01px` ≒ `0`**（実質ゼロ）
- **Product Name (16px)**: **`1px` ≒ `0.063em`**（商品名だけにトラッキング）
- **Nav Category (15px)**: `0.15px ≒ 0.01em`（微小）
- **Sub Nav (12px)**: `0.15px ≒ 0.013em`（微小）
- **その他**: `0`（指定なし）

**ガイドライン**:
- letter-spacing は**基本的に 0**。過度なトラッキングはブランドの印象を損なう
- 商品名の `1px` は例外的な広め設定。ECとしての可読性を確保する最低限の調整
- line-height は `1.25〜1.71` のレンジ。日本語サイトとしては **タイトな組**（欧文ファッション誌寄り）

### 3.6 禁則処理・改行ルール

```css
/* 実測値 */
word-break: normal;
overflow-wrap: normal;
line-break: auto;
```

- 特段の禁則処理指定なし。ブラウザデフォルトに委ねている
- テキスト量が少なく、商品名や価格など短文が中心のため、改行問題が発生しにくい構造

### 3.7 OpenType 機能

```css
/* 実測値 */
font-feature-settings: normal;
```

- **`palt` 未使用**。和文のプロポーショナル詰めなし
- **`kern` 未使用**。欧文のカーニングもブラウザデフォルト
- テキストが極小（10px ベース）のため、字詰め調整の効果が視覚的に乏しく、意図的に省略していると推察される

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

ANREALAGE のトップページには従来型の CTA ボタンがほぼ存在しない。商品画像そのものがリンクとして機能し、ボタンは UI 制御要素（カルーセル、閉じる、ページトップ）に限定される。

**Footer "TOP" Button** — ページトップへ戻る
- Background: `#333333`
- Text: `#ffffff`
- Padding: 小（テキスト "TOP" が 9px）
- Border Radius: `0`
- Font: 9px, weight 400

**Carousel Dot（非アクティブ）**
- Background: `#c8c8c8`
- Border Radius: `20px`（円形ピル）
- Size: 小（ドット）

**Carousel Dot（アクティブ）**
- Background: `#969696`
- Border Radius: `20px`

**Close Button**
- Background: `#dcdcdc`
- Border Radius: `50%`（完全な円）

### Product Card

- Background: `#ffffff`
- Border: なし
- Border Radius: `0`
- Shadow: `none`
- テキスト構造:
  - 商品名: 16px / weight 400 / letter-spacing 1px / color `#000000`
  - 価格: 14px / weight 400 / line-height 1.5 / color `#000000`
- ホバー効果: 画像に控えめな opacity 変化（推奨）

### Header

- Background: `#ffffff`
- Position: 固定（推奨）
- ナビテキスト: 10px, weight 400
- カテゴリリンク: 15px, weight 700, letter-spacing 0.15px
- サブナビ: 12px, weight 700, color `#999999`
- カート: 10px, weight 700（数字バッジ）

### Footer

- Background: `#333333`
- Text: `#ffffff`
- "FOLLOW US": 14px, weight 400
- "TOP" リンク: 9px, weight 400, class "pagetop"

### Inputs（推奨値）

実測データにフォーム要素は少ないため、ブランドトーンに合わせた推奨:

- Background: `#ffffff`
- Border: `1px solid #c8c8c8`
- Border (focus): `1px solid #000000`
- Border Radius: `0`（直角）
- Padding: `8px 12px`
- Font: Helvetica stack, 14px, weight 400
- Color: `#000000`

---

## 5. Layout Principles

### Spacing Scale（推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | テキスト間の最小余白 |
| S | 10px | カード内テキスト間（商品名と価格の間） |
| M | 16px | セクション内のアイテム間 |
| L | 30px | カード padding / ナビ padding（実測 `0 10px 0 30px`） |
| XL | 48px | セクション間の余白 |
| XXL | 80px | ヒーロー周辺・フッター内余白 |

### Container

- Max Width: サイト幅に準拠（推奨 `1200px`〜`1400px`）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | `0` | **基本**。全カード・ボタン・入力欄 |
| Dot | `20px` | カルーセルドットのみ |
| Circle | `50%` | 閉じるボタンのみ |

### Grid

- 商品グリッド: 2〜4 カラム（デバイスに応じて可変）
- Gutter: `16〜24px`（推奨）
- 商品画像は正方形または縦長アスペクト比

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。全要素 |
| 1 | `0 1px 4px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | モーダル・ドロップダウン（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- ANREALAGE のデザインは **完全にフラット**。立体感は一切排除し、**写真の力と白い余白の対比**だけで構成する
- 影を使わないことで、商品写真（特にテクノロジカルな素材感）が最も映える

---

## 7. Do's and Don'ts

### Do（推奨）

- **font-family は Helvetica ファーストの完全なスタック**を必ず指定する（游ゴシック Medium を含むフォールバック全体）
- **テキストは極小（10〜16px）に抑え、写真を主役にする** — ANREALAGE のサイトは EC でありながらギャラリーの文法
- **色は純黒 `#000000` と純白 `#ffffff` の2色を基本にする**。グレーは `#333333`、`#999999`、`#c8c8c8`、`#f0f0f0` の段階で使い分ける
- **border-radius は 0（直角）を徹底する** — ボタン・カード・入力欄すべて
- **ウェイトは 400（regular）をデフォルトにし、700（bold）はナビカテゴリ等の限定箇所のみ**
- 商品名には **letter-spacing 1px（0.063em）** を適用して可読性を確保する
- UI 要素（ボタン・バッジ）は最小限に — **商品画像自体がリンク**として機能するレイアウトを優先

### Don't（禁止）

- **ブランドカラー（彩度のある色）を追加しない** — ANREALAGE は無彩色だけで成立するデザイン。#008cba（チャット）は外部ツール由来
- **明朝体を使わない** — 全要素 Helvetica + ゴシック体の統一
- **角丸ピル（radius 9999px / 100px）を使わない** — カルーセルドットの 20px は例外的な UI パーツ
- **letter-spacing を広げすぎない** — 基本は 0。商品名の 1px が上限
- **`palt` や `kern` を適用しない** — OpenType 機能は未使用がブランドの選択
- テキストを **大きくしすぎない** — 10px ベースの極小設計がブランドの表情。本文を 16px 以上にすると印象が崩れる
- **装飾的な影（box-shadow）を使わない** — 完全フラットがブランドの意志
- **`font-weight: 500` や `600` 等の中間ウェイトを使わない** — 400 と 700 の二段階のみ

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（商品グリッド 2 カラム） |
| Tablet | 768〜1023px | タブレットレイアウト（3 カラム） |
| Desktop | ≥ 1024px | デスクトップレイアウト（4 カラム） |

### モバイル時の調整

- Body base font-size は 10px を維持（元々極小のため縮小不要）
- 商品名: 16px → 14px
- ナビカテゴリ: 15px → 13px
- 商品グリッド: 4 カラム → 2 カラム
- ヘッダー: ハンバーガーメニューに切り替え

### タッチターゲット

- ナビリンク: パディングを拡大して 44px × 44px 以上のタップ領域を確保
- 商品カード: 画像全体がタップ領域（十分な大きさ）
- カルーセルドット: サイズが小さいため、モバイルではスワイプ操作を優先

### ダークモード

- 該当なし（実測時点で未対応）
- ブランドの性格上、純白背景がデザインの前提。ダークモード導入時も**黒背景 + 白テキスト**のモノクロ反転で整合性を保てる

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Black (Primary Text / Brand): #000000
White (Background): #ffffff
Light Gray (Surface): #f0f0f0
Silver (Close btn): #dcdcdc
Dot Default: #c8c8c8
Sub Nav Text: #999999
Dot Active: #969696
Mid Gray: #808080
Footer BG / TOP btn: #333333
Footer Text: #ffffff

Font Stack (全要素共通):
  Helvetica, "Helvetica Neue", Arial,
  "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック体, YuGothic,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "MS PGothic", sans-serif

Body: 10px / weight 400 / line-height 1.5 / letter-spacing 0
Product Name: 16px / weight 400 / line-height 1.25 / letter-spacing 1px (0.063em)
Nav Category: 15px / weight 700 / letter-spacing 0.15px
Sub Nav: 12px / weight 700 / letter-spacing 0.15px / color #999999
Price: 14px / weight 400 / line-height 1.5

Border Radius: 0（基本）/ 20px（カルーセルドット）/ 50%（閉じるボタン）
Shadow: 基本 none
font-feature-settings: normal（palt / kern 未使用）
```

### プロンプト例

```
ANREALAGE のデザインに従って、商品一覧ページを作成してください。
- フォント: Helvetica, "Helvetica Neue", Arial, "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic, "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "MS PGothic", sans-serif
- 全要素で同一の font-family を使用（書体の切り替えなし）
- 商品名: 16px / weight 400 / line-height 1.25 / letter-spacing 1px / color #000000
- 価格: 14px / weight 400 / line-height 1.5 / color #000000
- ナビ: 15px / weight 700 / letter-spacing 0.15px / color #000000
- サブナビ: 12px / weight 700 / color #999999
- 背景: #ffffff（純白）
- テキスト色: #000000（純黒）
- フッター: 背景 #333333 / テキスト #ffffff
- サーフェス: #f0f0f0
- border-radius: 0（全要素直角）
- box-shadow: none（全要素フラット）
- font-feature-settings: normal（palt / kern 未使用）
- 商品画像を主役にし、テキストは最小限に抑える
- CTAボタンは設けず、商品画像全体をリンクにする
- 角丸・影・装飾色は一切使わない
- ウェイトは 400 と 700 の二段階のみ
```
