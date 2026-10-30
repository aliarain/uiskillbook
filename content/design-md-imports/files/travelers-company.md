# DESIGN.md — TRAVELER'S COMPANY（トラベラーズカンパニー）

> TRAVELER'S COMPANY（https://www.travelers-company.com/）のデザイン仕様書。
> 2006年創業のステーショナリーブランド。トラベラーズノート（革カバーのリフィル式ノート）を中心に、真鍮製品・スパイラルリングノート等を展開。「旅するように毎日を過ごす」をコンセプトにした、クラフト感と旅情を感じるブランド。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景 `#ffffff` × 純黒テキスト `#000000` のハイコントラスト構成。WordPress ベースの素朴で堅実なレイアウトに、**ヴィンテージ旅行チケット / スタンプ風のビジュアル**を載せるクラフト感のあるデザイン
- **密度**: 商品写真とカテゴリサムネイルを中心に、テキストは控えめ（本文 12px）。**写真を主役にし、テキストは最小限に抑える**設計
- **キーワード**: クラフト、旅情、ヴィンテージ、ダークナビ `#222222`、角丸ゼロ、Helvetica Neue 先頭の欧文優先スタック、400/700 のバイナリウェイト、WordPress テーマベースの素朴な組版
- **特徴**:
  - **角丸ゼロ（border-radius: 0px）が全コンポーネントに徹底** — シャープで工芸品的な矩形デザイン。革製品・真鍮のクラフト感と呼応する
  - **ダーク面 `#222222` がブランドの主要視覚要素** — ナビゲーションドロップダウン、フッターに多用（32 occurrences）。製品の革色に対するダーク・コンパニオン
  - **欧文フォント先頭のフォールバック** — Helvetica Neue が先頭、和文はヒラギノ角ゴ ProN W3 が続く。欧文の美しさを優先するグローバルブランド志向
  - **font-weight は 400 と 700 のバイナリのみ** — 中間ウェイトなし。Regular と Bold で明快にヒエラルキーを作る
  - **本文 12px と小さめ** — 写真を圧倒的に主役にする設計。テキストは添える程度
  - **リンク色はスチールブルー `#336699`** — WordPress 系サイトの伝統的なリンク色を踏襲
  - **letter-spacing は一律 normal** — palt 未使用、OpenType 字間調整なし。フォントのデフォルト字詰めをそのまま活かす素朴な組版
  - **WordPress サイト（WP CSS vars あり）** — `--wp--preset--font-size--normal: 16px`、`--wp--preset--font-size--huge: 42px` 等のプリセットが定義されているが、実際の UI は独自サイズ（12〜22px）で組まれている

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **TRAVELER'S Dark** (`#222222`): ナビゲーションドロップダウン・フッター等の主要暗色面。最頻出のブランドカラー（32 occurrences）。製品の革色に対する暗色パートナー
- **TRAVELER'S Blue** (`#336699`): リンク色。スチールブルーで旅のイメージに通じる落ち着いた青
- **Page White** (`#ffffff`): ページ背景

### Surface（背景）

- **Page Background** (`#ffffff`): 純白。コンテンツエリアのベース
- **Dark Surface** (`#222222`): ナビドロップダウン・フッター。rgb(34, 34, 34)
- **Hero Warm** (CSS background): ヒーロー領域にベージュ / ピンクがかった暖色の背景。ヴィンテージ旅行チケット風のビジュアルと組み合わせて使用

### Text / Foreground

- **Text Primary** (`#000000`): 本文テキスト。純黒
- **Text Link** (`#336699`): リンクテキスト。スチールブルー。rgb(51, 102, 153)
- **Text Inverse** (`#ffffff`): ダーク面 `#222222` 上のテキスト
- **Text Muted** (`#888888`): 装飾要素・補足テキスト。rgb(136, 136, 136)

### Indicator / UI

- **Dot Default** (`#dddddd`): カルーセルドットのデフォルト状態。rgb(221, 221, 221)
- **Dot Active** (`#777777`): カルーセルドットのアクティブ状態。rgb(119, 119, 119)

### Border / Divider

- **Light Border** (`#dddddd`): 区切り線・カード境界
- **Decorative** (`#888888`): 装飾的な境界線・アクセント

---

## 3. Typography Rules

### 3.1 和文フォント

TRAVELER'S COMPANY は **ヒラギノ角ゴ ProN W3 をメインの和文フォント**として使用。Web フォントを読み込まず、OS フォントで完結する。

- **第1候補（和文）**: ヒラギノ角ゴ ProN（macOS / iOS）— ProN（JIS2004 字形）を指定
- **第2候補**: Hiragino Kaku Gothic ProN（CSS でのエイリアス表記）
- **第3候補**: YuGothic / Yu Gothic（macOS / Windows）
- **最終フォールバック**: sans-serif

**注意**: KINTO 等が Pro（JIS90 字形）を選ぶのに対し、TRAVELER'S COMPANY は **ProN（JIS2004 字形）** を採用。WordPress テーマの標準的な指定に従う。

### 3.2 欧文フォント

**Helvetica Neue を先頭**に据える欧文優先フォールバック。グローバルブランドとしての欧文表示品質を優先する。

- **第1候補**: Helvetica Neue（macOS）
- **第2候補**: Helvetica（汎用フォールバック）
- **第3候補**: Arial（Windows / 全環境）
- **最終フォールバック**: sans-serif

ウェイトは **400（Regular）と 700（Bold）の 2 段階**。

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 全体共通 */
font-family: "Helvetica Neue", Helvetica, Arial,
             "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
             YuGothic, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- **欧文フォントを先に配置** — Helvetica Neue → Helvetica → Arial で欧文グリフを先に拾い、和文グリフのみヒラギノ / 游ゴシックに落ちる
- **ヒラギノは英名・和名を併記** — 環境による名前解決の違いを吸収
- **YuGothic / Yu Gothic は Windows 向け** — ヒラギノが使えない Windows 環境でのフォールバック
- 1 系統のみで全ページを通す**シンプルな運用**（KINTO のような書体使い分けはしない）

### 3.4 文字サイズ・ウェイト階層

実測のサイズスケール（PC ビュー）：

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Page Title (h1) | `22px` | `400` | `1.20` (26.4px) | `normal` | ページタイトル。見出しでも Regular ウェイト |
| Section Heading (h2) | `18px` | `700` | `1.00` (18px) | `normal` | セクション見出し。Bold で強調 |
| Sub Heading (h2 small) | `14px` | `700` | `1.40` (19.6px) | `normal` | サブ見出し |
| Logo (h1) | `13px` | `700` | — | `normal` | ヘッダーロゴテキスト |
| Body / Nav | `13px` | `400` | — | `normal` | ナビゲーション・一般テキスト |
| Body (article) | `12px` | `400` | `1.80` (21.6px) | `normal` | 記事本文。小さいが行間で可読性を確保 |
| Badge | `12px` | `400` | `2.20` (26.4px) | `normal` | NEW / SALE 等のラベル |
| Link | `13px` | `700` | `2.00` (26px) | `normal` | テキストリンク。Bold + ブルーで明示 |

**注意**:
- **ページタイトル h1 が weight 400**（Regular）なのが特徴的 — 大きさだけでヒエラルキーを作り、太さは控えめ
- **h2 と link が weight 700**（Bold）— 見出しとリンクは太字で明快に区別
- **本文は 12px と極めて小さい** — note の 17px、KINTO の 16px と比べると最小クラス。写真を圧倒的に主役にする設計意図

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.80`（12px × 1.8 = 21.6px）。小さい文字でも広めの行送りで可読性を確保
- **ページタイトルの行間**: `1.20`（22px × 1.2 = 26.4px）。タイトな組み
- **セクション見出しの行間**: `1.00`（18px × 1.0 = 18px）。行間なしの凝縮感
- **リンクの行間**: `2.00`（13px × 2.0 = 26px）。タッチターゲット確保を兼ねた広い行送り
- **バッジの行間**: `2.20`（12px × 2.2 = 26.4px）。高さを line-height で確保

**字間**:
- **全要素 letter-spacing: normal** — 一切の字間調整なし。フォントのデフォルトメトリクスをそのまま使う素朴な組版。KINTO の精緻な字間設計とは対照的

### 3.6 禁則処理・改行ルール

WordPress テーマのデフォルト設定に準拠:

```css
word-break: normal;
overflow-wrap: break-word;
```

- WordPress 標準の禁則処理
- 長い URL や英単語は `overflow-wrap: break-word` で折り返し
- 日本語固有の厳格な禁則設定（`line-break: strict`）は未指定

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt 未使用** — プロポーショナル字詰めなし
- **kern 未使用** — カーニングはブラウザデフォルト
- WordPress テーマベースのため、OpenType 機能による組版の微調整は行わない
- 約物（句読点・括弧）はフォントのデフォルト幅で表示される

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### 4.1 ナビゲーション（トップレベル）

```css
font-family: "Helvetica Neue", Helvetica, Arial,
             "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
             YuGothic, "Yu Gothic", sans-serif;
font-size: 13px;
font-weight: 400;
color: #000000;
background-color: #ffffff;
padding: 10px 0;
border-radius: 0;
```

- 白背景に黒テキストのシンプルなナビゲーション
- 角丸なし

### 4.2 ナビゲーション（ドロップダウン）

```css
font-size: 13px;
font-weight: 400;
color: #ffffff;
background-color: #222222;
padding: 12px 10px;
border-radius: 0;
```

- **ダーク面 `#222222` が TRAVELER'S COMPANY の視覚的アイデンティティ** — 製品の革の質感を想起させる暗色
- 白テキスト on ダーク背景で高コントラスト
- 完全な矩形（角丸ゼロ）

### 4.3 テキストリンク

```css
font-size: 13px;
font-weight: 700;
line-height: 26px;
color: #336699;
text-decoration: underline;  /* 標準的なリンク装飾 */
```

- **スチールブルー `#336699` + Bold** で明快にリンクを示す
- WordPress の伝統的なリンクスタイルを踏襲
- ホバー時は色の濃度変化

### 4.4 バッジ（NEW / SALE 等）

```css
font-size: 12px;
font-weight: 400;
line-height: 26.4px;
color: #ffffff;
background-color: #222222;  /* ダーク面と同色 */
border-radius: 0;
padding: 2px 8px;
```

- ダーク背景 + 白テキストの矩形バッジ
- ナビドロップダウンと同じ `#222222` で統一感
- 角丸なし

### 4.5 カルーセル

- **ドットインジケーター**: デフォルト `#dddddd`、アクティブ `#777777`
- ヴィンテージ旅行チケット / スタンプ風のビジュアルを表示
- 暖色系（ベージュ / カーキ）の写真が多い

### 4.6 カード（商品サムネイル）

- 写真 + 商品名の縦配置
- 背景: `#ffffff`
- 罫線: なし、または `#dddddd` の薄い線
- 影: なし（box-shadow: none）
- 角丸: `0px`
- **ダークブラウン / カーキトーンの商品写真**が多く、ページ全体に暖かみを添える

### 4.7 フッター

```css
background-color: #222222;
color: #ffffff;
```

- ナビドロップダウンと同じダーク面 `#222222`
- ブランドロゴ「TRAVELER'S COMPANY JAPAN」をセリフ風の装飾的なワードマークで表示
- 装飾的なボーダー（罫線デザイン）がヴィンテージ感を演出

---

## 5. Layout Principles

### Spacing

- **セクション間余白**: 40〜80px（コンパクトな構成）
- **商品グリッド間余白**: 20〜30px
- **ナビゲーション内余白**: padding 10〜12px

### Container

- **Max Width**: 960〜1200px（WordPress テーマのデフォルトに準拠）
- **Padding (horizontal)**: 15〜20px

### Grid

- **商品サムネイル**: 3〜4 列
- **カテゴリタイル**: 2〜3 列
- **特集ヒーロー**: 1 列フルワイド

### アライメント

- テキストは**左揃え**が基本
- ヒーローエリアのみ**中央揃え**
- ロゴ「TRAVELER'S COMPANY JAPAN」は装飾的なボーダーで囲んだ中央配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ほぼ全要素。フラットなデザイン |

- **影はほぼ使わない** — box-shadow: none が基本
- 階層は**面色の切り替え**で表現: `#ffffff`（白）→ `#222222`（ダーク）の 2 段階
- ホバー状態は色の変化（テキスト色 / 背景色）で表現
- **クラフト感のあるフラットデザイン** — 影ではなく、色面の対比と写真の質感で奥行きを出す

---

## 7. Do's and Don'ts

### Do（推奨）

- **font-family は Helvetica Neue 先頭の欧文優先スタック**を使う — 和文はヒラギノ角ゴ ProN W3 → YuGothic のフォールバック
- **weight は 400（Regular）と 700（Bold）の 2 段階のみ**を使う — 中間ウェイトなし
- **ページタイトル h1 は weight 400 にする** — 大きさでヒエラルキーを作り、太字は h2 とリンクに限定
- **本文 12px / line-height 1.8** を守る — 小さいが行間で可読性を確保
- **角丸は一切入れない**（border-radius: 0 を徹底）
- **ダーク面は `#222222`** を使う — ナビドロップダウン・フッター・バッジで統一
- **リンク色はスチールブルー `#336699`** + Bold で明示する
- **letter-spacing は normal** — 字間調整しない素朴な組版を維持
- **写真はダークブラウン / カーキ / ベージュのトーン**を意識 — 革・真鍮・紙の素材感
- **ヴィンテージ旅行チケット / スタンプ風のビジュアル**をヒーローに配置

### Don't（禁止）

- border-radius を入れない（`0px` を徹底。pill ボタンや角丸カードは世界観に合わない）
- weight 500 / 600 / 800 / 900 を使わない（400 と 700 のバイナリのみ）
- テキストカラーに `#333` や `#555` 等のグレー系を使わない（純黒 `#000000` が基調色）
- letter-spacing を追加しない（normal のまま）
- font-feature-settings: "palt" を適用しない（未使用がブランドの方針）
- リンクを `#000000` で表示しない（`#336699` のスチールブルーで区別する）
- モダンな影（box-shadow）やグラデーションを使わない — フラット + 面色切り替えで階層を作る
- ポップな色（ビビッドな赤・黄・緑）を使わない — ダーク `#222222` + ブルー `#336699` のクラシックな配色を維持
- ProN を Pro に変えない（TRAVELER'S COMPANY は ProN = JIS2004 字形を採用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。1 列構成 |
| Tablet | ≤ 1024px | タブレットレイアウト。2 列 |
| Desktop | > 1024px | デスクトップ。3〜4 列グリッド |

### タッチターゲット

- ナビゲーション項目: padding 12px でタッチ領域を確保
- リンク: line-height 2.0（26px）でタップしやすい高さ

### フォントサイズの調整

- **モバイル**: 本文は 12px を維持（もともと小さいため縮小しない）
- **WordPress のプリセット変数が存在**: `--wp--preset--font-size--normal: 16px` 等。テーマレベルでのレスポンシブ制御が可能
- weight のバイナリ運用（400/700）は全ブレークポイントで維持

---

## 9. Agent Prompt Guide

> AI エージェントに TRAVELER'S COMPANY 風 UI を生成させる際のプロンプト。

```
Generate a Japanese stationery/leather goods brand UI in the TRAVELER'S COMPANY visual style.

Visual:
- White background (#ffffff) with pure black text (#000000) — high contrast
- Dark surfaces (#222222) for navigation dropdowns, footer, badges
- Vintage travel ticket / stamp aesthetic for hero visuals
- Warm tones (beige, khaki, dark brown) in product photography
- Flat design — no shadows, no gradients
- Sharp rectangular forms — border-radius: 0 everywhere
- Decorative borders around brand logo for vintage feel

Typography:
- font-family: "Helvetica Neue", Helvetica, Arial,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  YuGothic, "Yu Gothic", sans-serif
- Single font stack for entire site (no typeface switching)
- Weight: binary 400/700 only — NO 500/600/800/900
  - h1 page title: 22px / weight 400 / line-height 1.2
  - h2 section: 18px / weight 700 / line-height 1.0
  - h2 sub: 14px / weight 700 / line-height 1.4
  - Body: 12px / weight 400 / line-height 1.8
  - Links: 13px / weight 700 / line-height 2.0
  - Badges: 12px / weight 400 / line-height 2.2
- letter-spacing: normal (NO adjustments, NO palt)
- font-feature-settings: normal (no OpenType features)

Components:
- Nav dropdown: bg #222222, color #fff, padding 12px 10px, radius 0
- Nav top-level: bg #fff, color #000, padding 10px 0
- Links: color #336699, weight 700, underline
- Badges: bg #222222, color #fff, radius 0, padding 2px 8px
- Cards: photo + text, NO shadow, NO border-radius, flat
- Carousel dots: default #dddddd, active #777777
- Footer: bg #222222, color #fff, decorative borders

Color Strategy:
- Brand dark: #222222 (nav, footer, badges — 32 occurrences, most prominent)
- Text: #000000 (body), #336699 (links), #ffffff (inverse on dark)
- Muted: #888888 (decorative), #777777 (active dot), #dddddd (default dot)
- Photography tones: dark brown, khaki, beige, warm leather textures

Avoid:
- Rounded corners (radius 0 everywhere, including buttons and cards)
- Mid-range font weights (only 400 and 700)
- Gray body text (#333, #555) — use pure black #000
- letter-spacing adjustments or palt — keep letter-spacing: normal
- Box shadows or drop shadows — use flat color surfaces only
- Vivid/pop accent colors — stick to #222 dark + #336699 blue
- Modern gradient backgrounds — solid colors only
- ProN → Pro substitution (brand uses ProN / JIS2004)
```
