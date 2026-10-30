# DESIGN.md — objcts.io（オブジェクツアイオー）

> objcts.io（https://objcts.io/）のデザイン仕様書。
> 日本発の D2C プレミアムレザーグッズブランド。バッグ・アクセサリーを中心に、ものづくりの質感と機能美を追求。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。Shopify ベースの EC サイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ミディアムグレー `#707070` を唯一のブランドカラー**に据えた、極めて抑制的なモノトーン設計。派手な原色を一切排し、プロダクト写真の革の質感・色味を主役にする「ギャラリー型 EC」
- **密度**: 12px という小さなベースフォントサイズ、本文は 15px で line-height 1.6。情報密度は控えめで、余白とプロダクトフォトに呼吸を持たせる
- **キーワード**: ミディアムグレー、レザーの質感、ギャラリー型、抑制、プロダクト写真中心
- **特徴**:
  - **ブランドカラーが `#707070`（ミディアムグレー）という極めて珍しい選択**。黒でもシルバーでもない「革の中間トーン」をブランド色にすることで、レザープロダクトの陰影と調和させている
  - 本文フォントは **Lato（欧文優先）+ 游ゴシック体 / YuGothic / Noto Sans JP** の混植スタック。欧文の端正さを先に立て、プロダクト名・型番の多い EC に適した構成
  - 見出しはシステムフォントスタック（Shopify デフォルト）を使用。本文の Lato とのコントラストで、見出しを「構造」、本文を「ブランドの声」として分離
  - **CTA の角丸戦略が混在**: 主要 CTA（View All, Checkout）は `border-radius: 0px`（シャープ）、セカンダリ（Add, 登録）は `4〜5px`、ページネーションは `50%`（円形）。シャープな CTA が高級感を、丸みのあるセカンダリが親しみやすさを担う
  - ボーダー `#e8e8e1` はわずかに黄緑がかったウォームグレー。純粋なグレーではなく、天然皮革の色味に寄せている
  - アナウンスメントバーは `#1c1d1d`（ほぼ黒）で、唯一のダーク面。ここだけ強い対比を持たせる
  - Checkout ボタンは `#111111`（漆黒に近い）で radius 0px。購入導線で最大の視覚的重みを作る
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値（CSS Custom Properties 含む）。すべて hex 表記。

### Brand

- **Brand Gray** (`#707070`): メインのブランドカラー。Add ボタン背景、View All / Check Collaboration ボタン背景、本文テキスト色。CSS変数 `--colorBtnPrimary`
- **Brand Gray Dim** (`#636363`): ホバー時のプライマリボタン色。CSS変数 `--colorBtnPrimaryDim`
- **Cart Dot** (`#ff4f33`): カートアイコンの通知ドット。唯一の暖色アクセント（限定的な使用）。CSS変数 `--colorCartDot`

### CTA / Buttons

- **Primary CTA（Add）**: 背景 `#707070` / 文字 `#ffffff` / radius `5px` / weight 400
- **Checkout CTA**: 背景 `#111111` / 文字 `#ffffff` / radius `0px`（シャープ）— 購入導線で最大の重み
- **View All / Brand CTA**: 背景 `#707070` / 文字 `#ffffff` / radius `0px`（シャープ）— セクション遷移
- **Email Signup**: 背景 `#505050` / 文字 `#ffffff` / radius `3px` — メール登録バナー
- **Outline CTA**: 背景 `transparent` / 文字 `#000000` / border 1px solid / radius `4px` — Check Products
- **Outline Light**: 背景 `transparent` / 文字 `#ffffff` / border 1px solid / radius `0〜4px` — ダーク面上の CTA

### Neutral — Warm-Tinted Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Near Black | `#111111` | (17, 17, 17) | Checkout ボタン背景 |
| Announcement Dark | `#1c1d1d` | (28, 29, 29) | アナウンスメントバー背景 |
| Dark Gray | `#505050` | (80, 80, 80) | メール登録バナー背景 |
| Brand Gray | `#707070` | (112, 112, 112) | ブランドカラー・CTA・本文テキスト |
| Brand Gray Dim | `#636363` | (99, 99, 99) | ホバー時 CTA |
| Border | `#e8e8e1` | (232, 232, 225) | 区切り線（**ウォーム傾向**: B値が低い、黄緑がかり） |
| Body Dim | `#f2f2f2` | (242, 242, 242) | 淡い背景面 |
| Body Medium Dim | `#f5f5f5` | (245, 245, 245) | さらに淡い背景面 |
| Body Light Dim | `#fafafa` | (250, 250, 250) | 最も淡い背景面 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ドロワー・CTA文字 |

### Semantic（実測未確認・推奨値）

実サイトのプロダクトページにはエラー／成功色が表面化していない。EC向けに推奨する補完値:

- **Danger**: `#cc3333` 程度（品切れ表示、フォームエラー）
- **Success**: `#3d7a4a` 程度（在庫あり、注文完了）— ブランドのグレートーンに合わせ彩度を落とす
- **Warning**: `#b5860a` 程度（残りわずか等）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体（YuGothic）を基本和文フォントとして使用
- **フォールバック**: Noto Sans JP → sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Lato** を最優先。Google Fonts のクリーンな欧文書体で、レザーグッズの型番・プロダクト名が美しく表示される
- 見出し用には別途システムフォントスタック（system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans）を使用

### 3.3 font-family 指定

```css
/* 本文・ナビ・ボタン等（Lato 優先の和欧混植） */
font-family: Lato, "游ゴシック体", YuGothic, "Noto Sans JP", sans-serif;

/* 見出し（h1〜h3）— Shopify デフォルトのシステムフォントスタック */
font-family: system-ui, -apple-system, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

**フォールバックの考え方**:
- 本文は **Lato（欧文）を先頭**に置く。プロダクト名・型番が多い EC では欧文グリフの品質が重要。日本語は游ゴシック体 → Noto Sans JP でカバー
- 見出しはシステムフォントスタックで OS ネイティブの表示。Lato とは異なるフォントにすることで、「見出し＝構造的ナビゲーション」「本文＝ブランドの語り口」という二層構造を作っている
- 游ゴシック体と YuGothic は同一フォントの別名指定（macOS / Windows 対応）

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・プロダクトページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H2 | system-ui | 32px | 400 | 38.4px (x1.2) | 0 | `#000000` | ヒーローセクション大見出し |
| H1 | system-ui | 22px | 400 | 26.4px (x1.2) | 0 | `#000000` | ページタイトル |
| H2 | system-ui | 20px | 400 | 24px (x1.2) | 0 | `#000000` | セクション見出し |
| H2 Tracked | system-ui | 20px | 400 | 24px (x1.2) | 2px (0.1em) | `#000000` | セクション区切り見出し — 広い字間で装飾的 |
| H3 | system-ui | 18px | 400 | 21.6px (x1.2) | 0 | `#000000` | サブ見出し |
| Body | Lato + 游ゴシック | 15px | 400 | 24px (x1.6) | 0.375px (0.025em) | `#000000` / `#707070` | 本文 |
| Body Wide | Lato + 游ゴシック | 15px | 400 | 24px (x1.6) | 3px (0.2em) | `#707070` | 装飾的テキスト — 極端に広い字間 |
| Base | Lato + 游ゴシック | 12px | 400 | 18px (x1.5) | 0.3px (0.025em) | `#707070` | UI テキスト・ナビ・ラベル |
| Button Primary | Lato + 游ゴシック | 14px | 500 | — | — | `#ffffff` | 重要 CTA（Checkout 等） |
| Button Secondary | Lato + 游ゴシック | 12px | 400 | — | — | `#ffffff` | Add ボタン等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (15px)**: `1.6`（24px / 15px）— 標準的な日本語本文の行間
- **ベース (12px)**: `1.5`（18px / 12px）— UI テキスト
- **見出し (18〜32px)**: `1.2`（全見出し共通でタイト）

**字間 (letter-spacing)** — 実測:
- **本文・ベース**: `0.025em`（+0.3〜0.375px）— 微量の正トラッキングで日本語の可読性を確保
- **装飾テキスト**: `0.2em`（+3px / 15px）— レザーブランドらしい広い字間で高級感を演出
- **セクション区切り見出し**: `0.1em`（+2px / 20px）— 見出しに呼吸を持たせる装飾的な字間
- **見出し（通常）**: `0`（トラッキングなし）
- **全要素 `font-feature-settings: normal`** — palt / kern は明示的に有効化されていない

**ガイドライン**:
- 本文は **line-height 1.6 + letter-spacing 0.025em** が objcts.io の基本リズム。STORES (1.75) よりタイトで、EC の商品説明に適した行間
- 見出しは一律 **line-height 1.2** でタイト。weight 400 のみで、太字を使わず「軽さ」で高級感を作る
- **装飾的な広い字間（0.1em〜0.2em）がブランドの声**。セクション区切りやキャッチコピーで使用し、レザーの手触り・静けさを文字で表現する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- プロダクト名（英語）は改行されにくいよう配慮
- Shopify のデフォルト禁則処理に準拠

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Lato の欧文メトリクスと游ゴシック体のデフォルト字詰めに依存

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（Add — ブランドグレー角丸）** — "Add" / カート追加
- Background: `#707070`
- Text: `#ffffff`
- Padding: `10px 20px`
- Border Radius: `5px`
- Font: Lato + 游ゴシック, 12px, weight 400
- Border: none

**Checkout CTA（漆黒シャープ）** — "Checkout" / 購入確定
- Background: `#111111`
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `0px`（完全にシャープ — 購入導線の「決意」を表す）
- Font: Lato + 游ゴシック, 14px, weight 500
- Border: none

**Brand CTA（グレーシャープ）** — "View All" / "Check Collaboration"
- Background: `#707070`
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `0px`（シャープ）
- Font: Lato + 游ゴシック, 12〜14px, weight 400
- Border: none

**Email Signup CTA（ダークグレー）** — メール登録バナー
- Background: `#505050`
- Text: `#ffffff`
- Padding: `10px 20px`
- Border Radius: `3px`
- Font: Lato + 游ゴシック, 12px, weight 400
- Border: none

**Outline CTA（白枠）** — "Check Products" / "最寄りの店舗を探す"
- Background: `transparent`
- Text: `#000000`（ライト面）/ `#ffffff`（ダーク面）
- Border: `1px solid currentColor`
- Padding: `10px 20px`
- Border Radius: `4px` / `0px`（文脈による）
- Font: Lato + 游ゴシック, 12px, weight 400

**Pagination（円形）**
- Background: `#ffffff`
- Text: `#707070`
- Border: `1px solid #e8e8e1`
- Border Radius: `50%`（完全な円）
- Size: `36px x 36px`

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #e8e8e1`
- Border (focus): `1px solid #707070`
- Border Radius: `4px`
- Padding: `10px 14px`
- Font: Lato + 游ゴシック, 14px, weight 400
- Height: `40px`

### Cards / Product Cards

- Background: `#ffffff`
- Border: none（ボーダーレスでプロダクト写真を際立たせる）
- Border Radius: `0px`（シャープ — レザーの端正さ）
- Shadow: none
- Image Aspect Ratio: 正方形（1:1）が基本

### Announcement Bar

- Background: `#1c1d1d`
- Text: `#ffffff`
- Padding: `8px 16px`
- Font: Lato + 游ゴシック, 12px, weight 400
- Position: fixed top

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #e8e8e1`
- Position: sticky
- z-index: 50 程度

### Footer

- Background: `#ffffff`
- Border Top: `1px solid #e8e8e1`
- Padding: `48px 24px`

### Drawers（カート・メニュー）

- Background: `#ffffff`（CSS変数 `--colorDrawers`）
- Overlay: `rgba(0, 0, 0, 0.5)` 程度

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内余白、小要素の間隔 |
| M | 16px | 商品カード間のガター |
| L | 24px | セクション内の段落間・カード内余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24〜40px`

### Border Radius Strategy

| Token | Value | 用途 | 意味 |
|-------|-------|------|------|
| Sharp | 0px | Checkout CTA・View All CTA・プロダクトカード | 「決定」「構造」— 最も高級感のある要素 |
| Subtle | 3px | メール登録 CTA | 控えめな丸み |
| Small | 4〜5px | Add ボタン・Outline CTA | セカンダリの親しみやすさ |
| Circle | 50% | ページネーション | 装飾的 |

> **重要**: objcts.io は STORES やその他 SaaS 系とは異なり、**主要 CTA がピル（9999px）ではなくシャープ（0px）**。高級レザーブランドの「端正さ・直線美」を CTA の形状で表現している

### Grid

- 商品一覧: 4 カラム（desktop）→ 2 カラム（mobile）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | プロダクトカード・ボタン・ほぼ全要素（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロワー・カートパネル |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **背景面の色差**（`#ffffff` → `#f5f5f5` → `#f2f2f2`）と **アナウンスメントバーの `#1c1d1d`** で表現
- **影を使わないフラット設計**がギャラリー的な静けさを支えている。影を入れる場合も alpha 0.06〜0.12 に抑える
- ウォームボーダー `#e8e8e1` が影の代わりに要素の境界を示す

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文フォントは **Lato を先頭**に、和文フォールバックは游ゴシック体 → YuGothic → Noto Sans JP
- 見出しはシステムフォントスタック。**本文と見出しでフォントファミリーを分ける**
- **ブランドカラーは `#707070`（ミディアムグレー）** を CTA・テキスト・アクセントに一貫して使う
- 主要 CTA（View All, Checkout 系）は **border-radius 0px のシャープ**にする
- セカンダリ CTA（Add 等）は **radius 4〜5px** の控えめな角丸にする
- 本文の line-height は **1.6** を基本にする
- ボーダーは **`#e8e8e1`（ウォームグレー）** を使い、冷たい灰色（`#d1d5db` 等）は避ける
- 見出しは **weight 400**（Regular）を基本にする。太字で強調するのではなく、サイズと余白で階層を作る
- 装飾的なテキストには **letter-spacing 0.1em〜0.2em** の広い字間を使い、レザーブランドの「静けさ」を表現する
- プロダクト写真を主役にし、UI はミニマルに抑える

### Don't（禁止）

- 主要 CTA に **鮮やかな色（ブルー、グリーン、レッド等）を使わない** — objcts.io の押しはグレーのみ。`#ff4f33` はカート通知ドット専用
- 見出しに **weight 600〜700** を使わない — 全見出し weight 400 がブランドの「軽さ」
- 本文に **line-height 1.5 以下**を使わない（商品説明文の読みやすさが損なわれる）
- **ピル（border-radius 9999px）** を主要 CTA に使わない — objcts.io の CTA はシャープ（0px）か控えめな角丸（4〜5px）
- **冷たいグレー**（`#9ca3af`、`#6b7280`、`#f3f4f6`）を使わない。objcts.io のグレーは `#707070` / `#e8e8e1` / `#f2f2f2` で構成され、どれも微かにウォーム
- プロダクトカードに **影やボーダーを付けない** — 写真の美しさを枠で囲まない
- **12px より小さいフォントサイズ**を使わない（12px がベースの下限）
- `font-feature-settings: "palt" 1` を勝手に追加しない（実サイトは normal）
- アナウンスメントバー以外に **ダーク面を多用しない** — ダーク面は `#1c1d1d` のバー1本だけ

---

## 8. Responsive Behavior

### Breakpoints（Shopify 準拠の推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | < 750px | モバイルレイアウト |
| Tablet | 750px〜989px | タブレット |
| Desktop | ≥ 990px | デスクトップレイアウト |

### モバイル時の調整

- Hero H2: 32px → 22〜24px
- H1: 22px → 18〜20px
- 本文サイズは 15px を維持（line-height 1.6 維持）
- ベースサイズ 12px はモバイルでもそのまま
- 商品グリッド: 4列 → 2列
- ナビはハンバーガーメニュー化

### タッチターゲット

- CTA ボタン: 高さ 40px 以上（padding 10〜12px + フォント + line-height ≒ 40〜44px）
- ページネーション: 36px（円形、タップしやすい）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Gray (CTA / Text): #707070
Brand Gray Dim (Hover): #636363
Checkout Black: #111111
Announcement Dark: #1c1d1d
Email Signup Gray: #505050
Cart Dot (通知): #ff4f33
Warm Border: #e8e8e1
Surface Dim: #f2f2f2
Surface Medium Dim: #f5f5f5
Surface Light Dim: #fafafa
White: #ffffff

Body Font: Lato, "游ゴシック体", YuGothic, "Noto Sans JP", sans-serif
Heading Font: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif

Body Size: 15px / line-height 1.6 / weight 400 / letter-spacing 0.025em / color #707070 or #000000
Base Size: 12px / line-height 1.5 / weight 400 / letter-spacing 0.025em / color #707070
Heading Size: 20〜32px / line-height 1.2 / weight 400 / letter-spacing 0
Decorative Text: 15〜20px / letter-spacing 0.1em〜0.2em

Border Radius: 0px（主要 CTA・カード）/ 4〜5px（セカンダリ CTA）/ 50%（ページネーション）
Shadow: 基本 none。ギャラリー的なフラット設計。階層は #f2f2f2 / #f5f5f5 の面色差で表現
```

### プロンプト例

```
objcts.io のデザインに従って、レザーバッグの商品一覧ページを作成してください。
- 本文フォント: Lato, "游ゴシック体", YuGothic, "Noto Sans JP", sans-serif
- 見出しフォント: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- セクション見出し: 20〜32px / weight 400 / line-height 1.2 / letter-spacing 0 / color #000000
- 本文: 15px / weight 400 / line-height 1.6 / letter-spacing 0.025em / color #707070
- ベーステキスト: 12px / weight 400 / line-height 1.5 / letter-spacing 0.025em / color #707070
- 装飾テキスト（キャッチコピー等）: letter-spacing 0.1em〜0.2em で静けさを演出
- 主要 CTA（View All）: 背景 #707070 / 白文字 / border-radius 0px / padding 12px 24px
- Checkout CTA: 背景 #111111 / 白文字 / border-radius 0px / padding 12px 24px / weight 500
- セカンダリ CTA（Add）: 背景 #707070 / 白文字 / border-radius 5px / 12px / weight 400
- Outline CTA: 背景 transparent / 文字 #000 / border 1px solid / radius 4px
- 商品カード: 背景 white / ボーダーなし / radius 0px / 影なし — 写真が主役
- ボーダー: #e8e8e1（ウォームグレー）
- 背景面: #ffffff / #f2f2f2 / #f5f5f5 の微妙な差で階層を作る
- 見出しは weight 400 のみ（太字を使わない）
- ブランドカラー #707070 以外の派手な色を CTA に使わない
- ピル（border-radius 9999px）を使わない — シャープか控えめな角丸
- box-shadow は基本 none — ギャラリー的なフラット設計を維持
```
