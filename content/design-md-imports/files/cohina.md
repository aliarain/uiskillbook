# DESIGN.md — COHINA（コヒナ）

> COHINA（https://cohina.net/）のデザイン仕様書。
> 小柄な女性のための D2C ファッションブランド。Shopify ベースの EC サイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 小柄な女性に寄り添うファッションブランドとして、**ウォームクリーム `#faf7f2` の面**と **Optima の欧文見出し**で上品さと親しみやすさを両立。強い主張を避け、ニュートラルなアースカラーで「日常に溶け込む上質さ」を表現
- **密度**: ゆったりとしたプロダクトショーケース型。商品写真を主役に据え、テキストは控えめ。見出しのワイドレタースペーシング（0.2em）が空気感を生む
- **キーワード**: ウォームクリーム、Optima 見出し、アースカラー、ワイドトラッキング、フェミニン、D2C ファッション
- **特徴**:
  - **デュアルフォントシステム**: 見出し・ナビに **Optima / Optima nova**（欧文セリフ寄りのヒューマニストサンセリフ）、本文に **Noto Sans JP** を使い、欧文の優美さと和文の可読性を両立
  - **ブランド背景は `#faf7f2`（ウォームクリーム）**。純白 `#ffffff` ではなく、温かみのある生成りが全ページを覆う。出現回数 82 回で圧倒的に支配的
  - **テキスト色は `#121212`**。純黒 `#000000` ではなく、わずかに柔らかいニアブラック
  - **見出しの letter-spacing は 0.2em**（4px / 20px）と非常に広い。日本のファッション・ラグジュアリー系に特徴的なワイドスペーシング
  - **ウェイトは全体を通して 400（Regular）のみ**。Bold を一切使わず、サイズと letter-spacing だけで階層を作る
  - **CTA は角張り〜微角丸（0px / 5px）**。ピル型は使わない
  - アクセントカラーにモーブ `#ba827e`、マスタード `#f6d579`、ミューテッドブルー `#97c5d9` 等のアースカラーを季節・コレクションごとに使い分ける
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Warm Cream** (`#faf7f2`): ページ全体の背景色。ブランドを象徴するウォームトーン（出現回数 82 回）
- **Near Black** (`#121212`): 見出し・主要テキスト・CTA 背景。純黒を避けた柔らかいダーク

### CTA / Buttons

- **Primary CTA**: 背景 `#121212` / 文字 `#ffffff` / radius `0px` / padding `0px 30px` / 15px / weight 400
- **Secondary CTA**: 背景 `transparent` / 文字 `#000000` / border `1px solid #000` / radius `5px` / padding `16px 80px` / 13px / weight 400
- **Collection CTA**: 背景 `#aca59b`（ウォームトープ）/ 文字 `#ffffff` / radius `5px` / padding `0px` / 16px / weight 400
- **Cart / Purchase CTA**: 背景 `#000000` / 文字 `#ffffff` / radius `5px` / padding `11px 10px` / 12px / weight 400

### Accent — Earth Tone Palette

| Token | hex | 出現回数 | 役割 |
|-------|-----|----------|------|
| Muted Blue | `#97c5d9` | 12x | コレクション・シーズンアクセント |
| Dark Charcoal | `#2c2b2b` | 12x | フッター・ダークサーフェス |
| Near Black | `#181818` | 9x | ヘッダー・ナビ背景 |
| Golden Mustard | `#f6d579` | 8x | プロモ・アクセント |
| Light Gray | `#efefef` | 6x | ボーダー・区切り線 |
| Rose Mauve | `#ba827e` | 6x | コレクション・フェミニンアクセント |
| Muted Sage | `#ccced3` | 6x | サブカテゴリ背景 |
| Warm Taupe | `#d1caba` | 6x | セクション背景・面 |
| Brown | `#877976` | 6x | 補助テキスト |
| Slate | `#63666f` | 6x | キャプション・補助テキスト |

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Near Black | `#121212` | 見出し・主要テキスト |
| Body Text | `rgba(18,18,18,0.75)` | 本文テキスト（`#121212` の 75% 不透明度） |
| Dark Charcoal | `#2c2b2b` | フッター背景 |
| Header Dark | `#181818` | ヘッダー背景 |
| Light Gray | `#efefef` | ボーダー・区切り |
| Warm Cream | `#faf7f2` | ページ背景 |
| White | `#ffffff` | カード・コンテンツ面 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。EC 向けに推奨する補完値:

- **Danger**: `#c53030` 程度のやや抑えたレッド（在庫切れ・エラー）
- **Success**: `#2f855a` 程度のグリーン（追加完了）
- **Warning**: `#c05621` 程度のオレンジ（残りわずか）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を本文に使用
- **フォールバック**: `Assistant, sans-serif`
- **明朝体**: 使用しない（ゴシック統一）

### 3.2 欧文フォント

- **ヒューマニストサンセリフ**: **Optima** / **Optima nova** を見出し・ナビに使用。セリフに近い有機的な字形がファッションブランドの上品さを演出
- **サンセリフ**: **Assistant**（Google Fonts）を本文の欧文フォールバックに使用

### 3.3 font-family 指定

```css
/* 本文（body, p, h3, span, li） */
font-family: "Noto Sans JP", Assistant, sans-serif;

/* 見出し・ナビ（h1, h2, nav links） */
font-family: Optima, "Optima nova", sans-serif;
```

**フォールバックの考え方**:
- 見出しは Optima（macOS プリインストール）を最優先。Windows 環境では sans-serif にフォールバック
- 本文は Noto Sans JP を最優先し、欧文は Assistant（Google Fonts）で補完
- Optima nova は Optima の改刻版。利用可能な環境では nova を優先してもよい

> **代替フォント注記**: Optima は macOS / iOS にプリインストールされているが、Windows / Linux には含まれない。Windows 環境での表示確認が必要な場合、**EB Garamond**（セリフ）や **Cormorant Garamond**（セリフ）で有機的な雰囲気を代替するか、sans-serif フォールバックを許容する。

### 3.4 文字サイズ・ウェイト階層

> 実測値（2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Optima | 40px | 400 | — | 0.6px (0.015em) | `#121212` | メインビジュアル上のタイトル |
| Section H2 (Large) | Optima | 25px | 400 | 30px (x1.2) | 5px (0.2em) | `#121212` | セクション見出し |
| Section H2 (Medium) | Optima nova | 20px | 400 | 24px (x1.2) | 4px (0.2em) | `#121212` | サブセクション見出し |
| Section H2 (Small) | Optima | 22px | 400 | 27px (x1.23) | 4.4px (0.2em) | `#121212` | 中サイズ見出し |
| H2 on Dark | Optima | 18px | 400 | 22px (x1.22) | 1.8px (0.1em) | `#ffffff` | ダーク面上の見出し |
| H3 | Noto Sans JP | 13px | 400 | 22px (x1.69) | 0.6px (0.046em) | `#121212` | 小見出し・カテゴリラベル |
| Body | Noto Sans JP | 16px | 400 | 24px (x1.5) | 0.6px (0.038em) | `rgba(18,18,18,0.75)` | 本文 |
| Body (Small) | Noto Sans JP | 14px | 400 | — | 1.4px (0.1em) | `rgba(18,18,18,0.75)` | 商品説明等 |
| Caption | Noto Sans JP | 12px | 400-500 | — | 0.6px (0.05em) | `rgba(18,18,18,0.75)` | 価格・補足テキスト |
| Nav Link | Optima | 13px | 400 | 19.5px (x1.5) | 1.04px (0.08em) | `#121212` | ヘッダーナビゲーション |
| CTA Label | Noto Sans JP | 13-16px | 400 | — | — | `#ffffff` | ボタンテキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.5`（24px / 16px）— 標準的な日本語本文の行間
- **見出し (20-25px)**: `1.2`（見出しはタイト）
- **小見出し H3 (13px)**: `1.69`（22px / 13px）— 小テキストには広め
- **ナビ (13px)**: `1.5`（19.5px / 13px）

**字間 (letter-spacing)** — 実測:
- **見出し H2 (Optima)**: **+0.2em**（4〜5px）— 極端なワイドスペーシング。ファッション・ラグジュアリー系の定番
- **ダーク面見出し**: **+0.1em**（1.8px / 18px）— やや抑えたワイド
- **本文 (16px)**: **+0.038em**（0.6px / 16px）— 控えめな字送り
- **ナビ (13px)**: **+0.08em**（1.04px / 13px）— ナビはやや広め
- **キャプション (12px)**: **+0.05em**（0.6px / 12px）

**ガイドライン**:
- Optima 見出しは **letter-spacing 0.2em** が COHINA の最大の視覚的特徴。この値を下げるとブランド感が大きく損なわれる
- 本文の Noto Sans JP は 0.04em 前後の控えめなトラッキングで可読性を確保
- **weight は全体を通して 400**。太さで階層を作らず、サイズと letter-spacing の対比で階層を構成する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 見出しは短いフレーズが多く、改行制御は `<br>` で手動指定
- 商品名・価格は `white-space: nowrap` で折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- 見出しの Optima は letter-spacing 0.2em の広いトラッキングで字間を制御しており、`palt` は不使用
- 本文の Noto Sans JP も letter-spacing のみで調整

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ニアブラック・スクエア）** — "SHOP NOW" / カート追加
- Background: `#121212`
- Text: `#ffffff`
- Padding: `0px 30px`（高さは line-height で確保）
- Border Radius: `0px`（完全なスクエア）
- Font: Noto Sans JP, 15px, weight 400
- Border: none

**Secondary CTA（ボーダー・微角丸）** — "VIEW MORE"
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `16px 80px`
- Border Radius: `5px`
- Font: Noto Sans JP, 13px, weight 400

**Collection CTA（トープ・微角丸）** — コレクション誘導
- Background: `#aca59b`
- Text: `#ffffff`
- Padding: `0px`（高さは要素で確保）
- Border Radius: `5px`
- Font: Noto Sans JP, 16px, weight 400
- Border: none

**Cart / Purchase CTA（ブラック・微角丸）** — カート内の購入ボタン
- Background: `#000000`
- Text: `#ffffff`
- Padding: `11px 10px`
- Border Radius: `5px`
- Font: Noto Sans JP, 12px, weight 400
- Border: none

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #efefef`
- Border (focus): `1px solid #121212`
- Border Radius: `5px`
- Padding: `12px 16px`
- Font: Noto Sans JP, 16px, weight 400
- Height: `44px`

### Cards / Product Cards

- Background: `#ffffff`（クリーム背景上の白面）または `transparent`（背景色を透過）
- Border: なし（商品カードは写真で区切る）
- Border Radius: `0px`（スクエア）
- Padding: `16px`
- Shadow: なし（フラット）

### Header

- Background: `#181818`（ダークヘッダー）または `#ffffff`（ライトバリエーション）
- Position: `fixed top: 0`
- ナビリンク: Optima, 13px, letter-spacing 0.08em

### Footer

- Background: `#2c2b2b`（ダークチャコール）
- Text: `#ffffff`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内の価格と商品名の間 |
| M | 16px | 商品カード内の余白 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px`
- Padding (horizontal): mobile `16px` / desktop `24-40px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | Primary CTA・商品カード・商品画像 |
| Small | 5px | Secondary CTA・入力欄・Cart CTA |
| Medium | 8px | 情報カード（推奨） |

### Grid

- 商品一覧: 2 カラム（mobile）/ 3-4 カラム（desktop）
- Gutter: 16-24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての標準要素（カード・ボタン・ヘッダ） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウン・カートドロワー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ウォームクリーム `#faf7f2` と白 `#ffffff` の面の切り替え**で表現
- アースカラー（`#d1caba`、`#ccced3`、`#97c5d9`）のセクション背景で空間を分節
- 影を使う場合も極めて控えめに。ブランドのフラットで静かな世界観を壊さない

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しには **Optima** を使い、letter-spacing **0.2em** のワイドスペーシングを適用する
- 本文には **Noto Sans JP** を使い、letter-spacing は **0.04em** 前後に抑える
- ページ背景は **`#faf7f2`（ウォームクリーム）** を使う。純白 `#ffffff` はカード・コンテンツ面に限定
- テキスト色は **`#121212`** を使い、純黒 `#000000` は CTA 背景にのみ限定
- 本文テキストの不透明度は **`rgba(18,18,18,0.75)`** で、見出しより軽く見せる
- **weight は 400 に統一**。太さではなくサイズと letter-spacing で階層を作る
- CTA は **スクエア（0px）または微角丸（5px）**。Shopify のデフォルト pill は使わない
- アースカラー（モーブ・トープ・マスタード・セージ）はコレクション・シーズンに応じて使い分ける
- 商品写真を主役に据え、テキストは控えめに

### Don't（禁止）

- **`font-weight: 700` や bold を使わない** — COHINA のタイポグラフィは weight 400 で統一されている
- **ピル型 CTA（border-radius 9999px）を使わない** — CTA は 0px か 5px の直線的な形状
- **ページ背景に純白 `#ffffff` を使わない** — `#faf7f2` のウォームクリームが必須
- **見出しの letter-spacing を 0.1em 未満にしない** — ワイドスペーシングが COHINA の核心
- **冷たいグレー**（`#9ca3af`、`#f3f4f6`）を使わない — アースカラーのウォームトーンを壊す
- **ビビッドカラー**（純赤、純青、ネオンカラー）を使わない — ミューテッドなアースカラーの世界観に合わない
- 見出し（Optima）と本文（Noto Sans JP）の**フォントを入れ替えない** — 階層の表現が崩れる
- テキスト色に **純黒 `#000000` を多用しない** — `#121212` のニアブラックがブランドの柔らかさを支えている

---

## 8. Responsive Behavior

### Breakpoints（Shopify Dawn テーマ準拠）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 749px | モバイルレイアウト |
| Tablet | 750px - 989px | タブレットレイアウト |
| Desktop | >= 990px | デスクトップレイアウト |

### モバイル時の調整

- Hero H1: 40px -> 24-28px
- Section H2: 25px -> 18-20px（letter-spacing 0.2em は維持）
- 本文サイズ: 16px -> 14-16px（line-height 1.5 維持）
- 商品グリッド: 4 カラム -> 2 カラム
- ナビはハンバーガー化、ドロワーで展開

### タッチターゲット

- CTA ボタン: 高さ 44px 以上
- 商品カードのタップ領域: カード全体をリンク化

### フォントサイズの調整

- モバイルでは見出しのサイズを 70-80% 程度に縮小するが、**letter-spacing 0.2em のワイドスペーシングは維持**する（ブランドアイデンティティのため）
- 本文は 14-16px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Warm Cream (背景): #faf7f2
Near Black (見出し): #121212
Body Text: rgba(18,18,18,0.75)
Dark Charcoal (フッター): #2c2b2b
Header Dark: #181818
White (カード面): #ffffff
Light Gray (ボーダー): #efefef
Collection Taupe: #aca59b

Heading Font: Optima, "Optima nova", sans-serif
Body Font: "Noto Sans JP", Assistant, sans-serif

Body: 16px / line-height 1.5 / weight 400 / letter-spacing 0.038em / rgba(18,18,18,0.75)
H2 (Optima): 20-25px / line-height 1.2 / weight 400 / letter-spacing 0.2em / #121212
H3: 13px / line-height 1.69 / weight 400 / letter-spacing 0.046em
Nav (Optima): 13px / line-height 1.5 / letter-spacing 0.08em
Caption: 12px / weight 400-500 / letter-spacing 0.05em

Border Radius: 0px（Primary CTA）/ 5px（Secondary CTA・Cart）
Shadow: 基本 none。階層は #faf7f2 と #ffffff の面の切り替えで表現
```

### プロンプト例

```
COHINA のデザインに従って、小柄女性向けファッション EC の商品一覧ページを作成してください。
- ページ背景: #faf7f2（ウォームクリーム）
- 見出しフォント: Optima, "Optima nova", sans-serif
- 本文フォント: "Noto Sans JP", Assistant, sans-serif
- セクション見出し: Optima / 20-25px / weight 400 / letter-spacing 0.2em / color #121212
- 本文: Noto Sans JP / 16px / weight 400 / line-height 1.5 / letter-spacing 0.038em / color rgba(18,18,18,0.75)
- 小見出し: Noto Sans JP / 13px / weight 400 / line-height 1.69 / letter-spacing 0.046em
- Primary CTA: 背景 #121212 / 白文字 / border-radius 0px / padding 0 30px / 15px / weight 400
- Secondary CTA: 背景 transparent / 文字 #000 / border 1px solid #000 / radius 5px / padding 16px 80px / 13px
- 商品カード: 背景 #ffffff / border なし / radius 0px / shadow なし
- アクセント色は季節に応じて #ba827e（モーブ）/ #f6d579（マスタード）/ #97c5d9（ブルー）を選択
- weight は全体 400 に統一。bold は使わない
- ピル型ボタンは使わない（0px か 5px のスクエア / 微角丸）
- フッター: 背景 #2c2b2b / 文字 #ffffff
- 冷たいグレーは使わない。ウォーム系のニュートラルで統一
```
