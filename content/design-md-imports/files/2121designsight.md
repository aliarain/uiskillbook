# DESIGN.md — 21_21 DESIGN SIGHT

> 21_21 DESIGN SIGHT 公式サイト（https://www.2121designsight.jp/）のデザイン仕様書。
> 三宅一生・佐藤卓・深澤直人の3ディレクターによる、東京ミッドタウン内のデザインミュージアム。
> 安藤忠雄設計、2007 年開館。実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` ベースに、シアンブルー `#0090df` をブランド主色として大胆に配する**美術館的編集 UI**。安藤忠雄建築の打ちっぱなしコンクリートの白さと、三宅一生のブランドカラーを思わせるブルーの対比
- **密度**: 情報密度は中〜高め。展覧会情報・ニュース・スケジュール等のテキスト要素を **太字 weight 600** で組み、見出しの存在感を強く打ち出す
- **キーワード**: ピュアホワイト × シアンブルー `#0090df`、アクセント橙 `#ff9900` の "NEW" バッジ、Noto Sans Japanese の **weight 600 見出し** + weight 400 本文の対比、letter-spacing は基本 `normal`、palt は使わない、円形（radius 50%）の言語切替ピル
- **特徴**:
  - **ブランド主色 = シアンブルー `#0090df`** — リンク色・アクティブ言語ピル・ボーダー・h4 見出しに大胆使用。**「青を恐れず使う」美術館的アイデンティティ**
  - **font-family は Noto Sans Japanese 単独** — 欧文も和文も同じ Noto Sans に統一する潔いシングルフォント設計（meiryo / MS PGothic フォールバック）
  - **見出しは weight 600（semi-bold）** で太字に組む — KINTO や ACTUS の "全要素 400" とは正反対の、太字でヒエラルキーを作る方針
  - **本文は 14px / line-height 24px (1.71)** — 一般的な日本語サイトと同等
  - **letter-spacing は基本 `normal`** — 字間を広げない、字間を詰めない。Noto Sans のメトリクスをそのまま使う
  - **font-feature-settings は `normal`**（palt を使わない） — 等幅の自然な約物処理
  - **border-radius は 5px と 50% の二種類のみ** — 通常 UI は 5px の小さい角丸、言語切替や丸ボタンは円形
  - **アクセント橙 `#ff9900` は "NEW" バッジに限定使用** — 4 件出現
  - **明色テキストは `#333333`** — 純黒ではなくダークグレー。シアンブルーとの対比を保つ
  - **薄いグレー面 `#f3f3f3` をローディング画面・カテゴリナビ背景に使用**

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **21_21 Cyan Blue** (`#0090df`): リンク・アクティブ言語ピル・h4 見出し・border 2px CTA に使用（rgb(0, 144, 223)、出現 3 回）。**ブランドの主色**
- **Page White** (`#ffffff`): ページ背景の純白
- **Text Black** (`#000000`): 強調見出し・h2 タイトル

### Accent

- **NEW Orange** (`#ff9900`): "NEW" バッジ専用（rgb(255, 153, 0)、出現 4 回）。展覧会情報の新着訴求にのみ使用

### Surface（背景）

- **Page Background** (`#ffffff`): 純白
- **Light Gray Surface** (`#f3f3f3`): カテゴリナビ・ローディング画面（rgb(243, 243, 243)）
- **Mid Gray** (`#cccccc`): 補助面・区切り（rgb(204, 204, 204)）

### Text / Foreground

- **Text Strong** (`#000000`): h2 / h3 強調見出し
- **Text Body** (`#333333`): 本文・h3 small（rgb(51, 51, 51)）
- **Text Inverse** (`#ffffff`): 暗色帯・シアンブルー面上のテキスト
- **Brand Link** (`#0090df`): リンク・h4 ご利用案内見出し

---

## 3. Typography Rules

### 3.1 和文フォント

21_21 DESIGN SIGHT は **Noto Sans Japanese 単独**で運用。和文・欧文の区別なく同じフォントで組む。

- **第1候補**: Noto Sans Japanese（Google Fonts）
- **第2候補**: meiryo（Windows）
- **第3候補**: MS PGothic（旧 Windows）
- **最終フォールバック**: sans-serif

**注意**: ヒラギノ・游ゴシックを **置かない**。Web フォントが優先で、最終的には OS の Meiryo / MS PGothic に着地する。

### 3.2 欧文フォント

**専用の欧文フォントなし**。Noto Sans Japanese が Latin 字形も内蔵しているため、英字・数字も同じ書体で組まれる。

- "JPN / ENG / CHN" の言語切替ラベル
- "21_21 DESIGN SIGHT" のサイトロゴテキスト
- "NEW" バッジ
- すべて Noto Sans Japanese で組む

### 3.3 font-family 指定

実サイトの実測値（**body / h1 / h2 / h3 / h4 / a / p 共通**）:

```css
font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- Web フォント Noto Sans Japanese を最優先
- 読み込み失敗時は Windows の Meiryo / MS PGothic に直接落ちる
- Mac の Hiragino を**意図的に飛ばしている** — Web フォント前提で OS 差を消す姿勢

### 3.4 font-size

実測のサイズスケール（PC 1440px ビュー）：

| 用途 | サイズ | weight | 用例 |
|------|--------|--------|------|
| h3 大 / 言語切替ラベル | `16px` | 400〜600 | "JPN" "ENG" |
| h4 ご利用案内見出し | `16px` | 600 | "ご利用案内" "休館のお知らせ" |
| h3 reg / 本文小見出し | `14px` | 600 | "21_21 DESIGN SIGHT" |
| Body / 住所 | `14px` | 400 | 東京都港区赤坂... |
| h3 sml / h2 sml | `12px` | 400 | "MENU" 補助ラベル |
| 注釈 | `12px` | 400 | "*ギャラリー3は..." |
| 言語切替ピル / footer 注釈 | `10px` | 400 | "JPN" 円形ピル |

### 3.5 line-height

実測値：

- **本文 14px**: `24px / 14px` = `1.71`
- **h4 16px**: `24px / 16px` = `1.50`
- **h3 大 16px**: `16px / 16px` = `1.00`（ボタン的に詰める）
- **h3 small 12px**: `12px / 12px` = `1.00`
- **本文 p sml 12px**: `20px / 12px` = `1.67`
- **言語ピル 10px**: `normal`（≈1.2）

### 3.6 letter-spacing

**ほぼ全要素 `normal`**。21_21 は字間を広げず、Noto Sans のデフォルトメトリクスをそのまま使う。

- これは KINTO（小さい文字ほど 0.12em）や ACTUS（一律 0.07em）と対照的
- 美術館サイトの**情報密度を保つ**選択

### 3.7 font-feature-settings

```css
font-feature-settings: normal;
```

- **palt は使わない**
- 等幅の約物（句読点・括弧）が自然に空く
- 展覧会タイトル等の固有名詞・引用符の正確な表示を優先

### 3.8 ウェイト戦略

21_21 は **weight 400（regular）と 600（semi-bold）の2段階**でヒエラルキーを作る。

| 用途 | ウェイト |
|------|----------|
| 見出し（h1 / h2 / h3 / h4） | `600` |
| 本文 / 住所 / 注釈 | `400` |

**KINTO・ACTUS と正反対の方針**: 美術館サイトとして**太字を恐れず使い**、情報の優先度を視覚的にはっきり分ける。

---

## 4. Component Stylings

### 4.1 言語切替ピル（円形）

```css
font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif;
font-size: 10px;
font-weight: 400;
line-height: normal;
letter-spacing: normal;
border-radius: 50%;  /* 完全な円 */
padding: 0;
width: ~28px;
height: ~28px;
display: inline-flex;
align-items: center;
justify-content: center;
```

- **アクティブ**: `bg #0090df / color #ffffff`（"JPN" 現在選択）
- **非アクティブ**: `bg #ffffff / color #333333`（"ENG" "CHN"）
- **円形 radius 50%** — 21_21 の象徴的な UI 要素

### 4.2 メイン CTA（border 線ボタン）

```css
font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif;
font-size: 10px;
font-weight: 400;
color: #0090df;
background-color: #ffffff;
border: 2px solid #0090df;
border-radius: 5px;
padding: 20px 15px;
```

- **2px の太い枠線**で存在感を出す
- 角丸 `5px`（小さく）
- **シアンブルーの線と文字色で構成** — 塗りつぶしではなく線で訴求

### 4.3 NEW バッジ

```css
background-color: #ff9900;  /* オレンジ */
color: #ffffff;
font-size: 10px;
font-weight: 400;
padding: 2px 6px;
border-radius: 0;
```

- 展覧会カード左上に表示する **新着告知バッジ**
- 4 件出現（複数の展覧会で並行使用）

### 4.4 見出し

```css
/* h4 ご利用案内 */
font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 24px;
color: #0090df;  /* シアンブルー */
padding: 0 0 15px;

/* h3 lrg 21_21 DESIGN SIGHT */
font-size: 16px;
font-weight: 600;
color: #0090df;

/* h3 reg 本文小見出し */
font-size: 14px;
font-weight: 600;
color: #000000;
```

- **h3 / h4 の見出しはシアンブルー `#0090df` で組む** — リンクと同じ色で「探索可能感」を出す
- ボディ内 h3 reg は黒
- すべて weight 600

### 4.5 本文 p

```css
font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 24px;
color: #333333;
letter-spacing: normal;
```

- ダークグレー `#333333` で本文を組む
- 暗色帯上では `color: #ffffff`

### 4.6 サイトロゴ（テキスト）

```css
font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 16px;
color: #0090df;
```

- "21_21 DESIGN SIGHT" のロゴはテキストでも表現可能
- シアンブルー weight 600 で組む

### 4.7 カードレイアウト

- 展覧会カード: 写真 + タイトル + 期間
- NEW バッジ（オレンジ）を左上に配置
- 写真比率は 16:9 または 4:3
- カードに影なし、角丸なし

---

## 5. Layout Principles

- **コンテナ最大幅**: 1200〜1280px（美術館サイトとしてはコンパクト）
- **グリッド**: 展覧会カードは 3 列が主流
- **セクション間余白**: 60〜80px（情報密度を保つため、KINTO・ACTUS より詰める）
- 見出しは**左揃え**が基本
- **言語切替**は右上ヘッダーに 3 つの円形ピルで横並び
- **カテゴリナビ**は灰色帯 `#f3f3f3` で本文と分離

---

## 6. Depth & Elevation

- **影は使わない**（box-shadow: none）
- 階層は **面色 `#ffffff` → `#f3f3f3` → `#cccccc`** の段階で表現
- **太い border 2px** が「ボタンらしさ」を作る要素
- **円形 radius 50%** が言語切替の特殊性を表現
- ホバー状態は色の反転（白地→ブルー塗り）

---

## 7. Do's and Don'ts

### ✅ Do
- **Noto Sans Japanese 単独** で和文・欧文を組む
- 見出しは **weight 600** で太字、本文は 400 — 太字を恐れず使う
- リンク色 = h4 見出し色 = シアンブルー `#0090df`
- "NEW" バッジは **オレンジ `#ff9900`** で限定使用（展覧会の新着のみ）
- 言語切替は **円形ピル radius 50%**（アクティブはシアン塗り）
- メイン CTA は **2px solid #0090df / radius 5px** の白地・線ボタン
- 本文テキストは **`#333333`**（純黒ではない）
- letter-spacing は **`normal`** で詰めも広げもしない

### ❌ Don't
- ヒラギノ・游ゴシックをフォールバックに置かない（Meiryo / MS PGothic 直行）
- 全要素 weight 400 にしない（太字でヒエラルキーを作る）
- letter-spacing を広げない（`normal` を維持）
- palt を使わない（`font-feature-settings: normal`）
- ボタンを塗りつぶさない（白地・線ボタンが基本）
- 角丸を大きく取らない（5px か 50% の二択）
- "NEW" 以外でオレンジを使わない
- リンク以外の本文を `#0090df` で組まない（青はブランドの専用色）

---

## 8. Responsive Behavior

- **PC 1440px** をベース幅とする
- **タブレット（〜1024px）**: 3 列 → 2 列、ナビをハンバーガー化
- **モバイル（〜768px）**: 1 列、本文 13px に微縮小、言語切替を画面右下に配置
- **円形ピル radius 50%** は全ブレークポイントで維持
- weight 600 / 400 の対比は維持

---

## 9. Agent Prompt Guide

> AI エージェントに 21_21 DESIGN SIGHT 風 UI を生成させる際のプロンプト。

```
Generate a Japanese design museum / cultural institution UI in the 21_21 DESIGN SIGHT visual style.

Visual:
- Pure white background (#ffffff)
- Cyan blue (#0090df) as bold brand color — used liberally for links, headings, CTAs
- Orange (#ff9900) for "NEW" badge ONLY (exhibition new arrival)
- Light gray surface (#f3f3f3) for category nav / loading
- Body text in #333333 (NOT pure black)
- Editorial density — sections 60-80px apart (tighter than retail brands)

Typography:
- font-family: "Noto Sans Japanese", meiryo, "MS PGothic", sans-serif (NO Hiragino fallback)
- 和文 / 欧文 / 数字すべて Noto Sans Japanese で統一
- Headings (h1/h2/h3/h4): weight 600 — bold confidently
- Body / captions: weight 400
- Body: 14px / line-height 24px (1.71) / letter-spacing normal
- Caption / nav small: 12px / line-height 20px / letter-spacing normal
- Pill labels: 10px / line-height normal
- letter-spacing: ALWAYS normal (do not widen or tighten)
- font-feature-settings: normal (NO palt — preserve natural punctuation spacing)

Components:
- Language pills: circular (border-radius: 50%), 28×28px, active = bg #0090df + color white, inactive = bg white + color #333
- Main CTA: bg white, color #0090df, border 2px solid #0090df, radius 5px, padding 20px 15px
- "NEW" badge: bg #ff9900, color white, font-size 10px, padding 2px 6px, no radius
- h4 headings: color #0090df, weight 600, font-size 16px, line-height 24px
- Logo text "21_21 DESIGN SIGHT": Noto Sans, weight 600, color #0090df

Color Strategy:
- Brand: cyan blue #0090df (primary), orange #ff9900 (only for "NEW")
- Surfaces: white #ffffff (page), #f3f3f3 (light gray), #cccccc (border/divider)
- Text: #000 (strong heading), #333 (body), #0090df (link / h4), #fff (inverse)

Avoid:
- Bold for everything (use 600 only for headings)
- Treating cyan blue as decorative — it's the brand voice
- Hiragino font fallback (skip to Meiryo)
- letter-spacing widening or palt feature
- Filled buttons in default UI (use 2px outline ones)
- Large border-radius (use 5px or 50% only)
- Orange beyond the "NEW" badge
- Pure black for body (use #333)
```
