# DESIGN.md — KINTO（キントー）

> 株式会社キントー（KINTO）公式オンラインストア（https://kinto.co.jp/）のデザイン仕様書。
> 1972 年創業、テーブルウェア・ドリンクウェア・インテリア小物のライフスタイルブランド。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` × チャコールグレーテキスト `#555555`（rgb(85, 85, 85)）の柔らかいトーン。**製品写真を引き立てるニュートラルな器**としての UI 設計
- **密度**: 余白を広く取り、商品写真と短いキャプションで構成。**写真を主役にする間（ま）の取り方**が要点
- **キーワード**: 純白＋ライトグレー `#e6e6e6` の薄い面、Swis721（欧文）+ Instrument Sans + ヒラギノ角ゴ Pro の混植、字間を控えめに広げる（letter-spacing 0.05〜0.11em）、palt 全体適用、角丸ゼロ、CTA は塗りつぶさず細罫線または KINTO オレンジ `#ff4500` の限定使用
- **特徴**:
  - **font-family は3系統の英文フォント**を使い分け — `Swis721`（見出し・カテゴリラベル）/ `Instrument Sans`（本文・メニュー）/ `baskerville-urw`（ライフスタイル系の大きな見出し serif）。**用途で書体を切り替える編集的タイポグラフィ**
  - **和文フォールバックはヒラギノ角ゴ Pro（ProN ではない Pro）から始まる伝統スタック** — `"ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック", "MS PGothic", メイリオ, Meiryo, sans-serif` という、Mac → Windows 全環境を跨ぐ厚いフォールバックチェーン
  - **本文 16px、行送り 28.8px（line-height 1.8）** — 一般的な日本語サイトと同等のゆったり設計
  - **全要素 weight 400** — ACTUS と同じく太字でヒエラルキーを作らず、サイズと位置で組む
  - **letter-spacing は要素ごとに細かく分岐** — body 0.6px (0.0375em) / h2 small 0.6px / 11px キャプション 1.32px (0.12em)。**小さい文字ほど字間を広げる** KINTO 特有の方針
  - **font-feature-settings: "palt" を全面適用** — 約物のスペースを詰めて自然な日本語組版
  - **テキスト本文のカラーは純黒ではなく `#555555`** — 写真と並んだときに印刷物のような落ち着きを生む
  - **CTA は塗りつぶしを避ける** — 線（border 1px solid #9f9f9f）でフォームボタン、面（KINTO オレンジ #ff4500）はウィッシュリスト等の限定機能のみ
  - **ライトグレー面 `#e6e6e6` を多用**（出現回数 7 回） — フッターのカントリーセレクタや POPULAR PRODUCTS 帯のキャンバス
  - **アクセント色 KINTO オレンジ `#ff4500`** — Wishlist / セール / 通知バッジ等の限定 UI に使用

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **KINTO Orange** (`#ff4500`): My Wishlist 等の限定機能・通知バッジに使用（rgb(255, 69, 0)）
- **KINTO Charcoal** (`#555555`): 本文・見出し・リンクのテキスト基調色（rgb(85, 85, 85)）
- **Page White** (`#ffffff`): ページ背景

### Surface（背景）

- **Page Background** (`#ffffff`): 純白
- **Light Gray Surface** (`#e6e6e6`): カントリーセレクタ・カテゴリ帯のキャンバス（rgb(230, 230, 230)、最頻出）
- **Soft Surface** (`#f7f8f8`): POPULAR PRODUCTS 等の補助帯（rgb(247, 248, 248)）
- **Soft Surface 2** (`#f0f0f0`): POPULAR SEARCHES 等の検索ヒント帯（rgb(240, 240, 240)）
- **Dark Surface** (`#1a1a1a`): フッターロゴ周りの暗色面（rgb(26, 26, 26)）
- **Warm Beige** (`#cec7bb`): ライフスタイル写真と組み合わせる暖色面（rgb(206, 199, 187)）

### Text / Foreground

- **Text Primary** (`#555555`): 本文・見出し・リンクの基調色（rgba(85, 85, 85, 0.75) で 75% 不透明にする派生もあり）
- **Text Strong** (`#000000`): 商品名・タイトル等の強調テキスト
- **Text Inverse** (`#ffffff`): 暗色帯・KINTO オレンジ面上のテキスト
- **Text Muted** (`#9f9f9f`): フォーム placeholder・送信ボタンの線色（rgb(159, 159, 159)）
- **Text Mid** (`#4e4e4e`): フッターのグレー面（rgb(78, 78, 78)）

### Border / Divider

- **Form Border** (`#9f9f9f`): 入力欄の線（rgb(159, 159, 159)）
- **Light Divider** (`#e6e6e6`): カードの区切り線

---

## 3. Typography Rules

### 3.1 和文フォント

KINTO は **ヒラギノ角ゴ Pro から始まる伝統的なクロスプラットフォーム・フォールバックチェーン** を採用。WebFont を読まず、OS フォントで完結させる。

- **第1候補（和文）**: ヒラギノ角ゴ Pro（macOS / iOS）
- **第2候補**: Hiragino Kaku Gothic Pro（CSS でのエイリアス）
- **第3候補**: Osaka（旧 macOS）
- **第4候補**: ＭＳ Ｐゴシック / MS PGothic（Windows）
- **第5候補**: メイリオ / Meiryo（Windows）
- **最終フォールバック**: sans-serif

**注意**: ProN（JIS2004 字形）ではなく **Pro（JIS90 字形）** を指定している。1972 年創業ブランドらしい、伝統字形を選ぶ判断。

### 3.2 欧文フォント

KINTO は **欧文を3系統使い分ける編集的タイポグラフィ**：

- **Swis721** — h2 small / リンク / 入力欄等の汎用欧文。Bitstream の Helvetica 系
- **Instrument Sans** — body / メニュー / バッジ等の現代的サンセリフ（Google Fonts に同名フォントあり）
- **baskerville-urw** — 大きな serif 見出し（25px h2.is-white 等）。Adobe Fonts / Google Fonts に同等のセリフ書体

ウェイトは **400 のみ**。階層を太字で作らない。

### 3.3 font-family 指定

実サイトの実測値（用途別）:

```css
/* body / メニュー / バッジ */
font-family: "Instrument Sans", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
             Osaka, "ＭＳ Ｐゴシック", "MS PGothic", メイリオ, Meiryo, sans-serif;

/* h2 / p / リンク（汎用） */
font-family: Swis721, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
             Osaka, "ＭＳ Ｐゴシック", "MS PGothic", メイリオ, Meiryo, sans-serif;

/* 大見出し serif（限定） */
font-family: baskerville-urw, serif;
```

**フォールバックの考え方**:
- Web フォント（Instrument Sans / Swis721）が読めない場合でも、ヒラギノ → Osaka → MS PGothic → メイリオ で OS の標準和文に確実に着地する
- **ProN ではなく Pro を指定**: JIS90 字形を意図的に選ぶブランド姿勢
- baskerville-urw は **欧文限定**で和文フォールバックなし。和文が混じる用途では使わない

### 3.4 font-size

実測のサイズスケール（PC 1440px ビュー）：

| 用途 | サイズ | 用例 |
|------|--------|------|
| 大見出し serif（カテゴリ） | `25px` | "Home" "Lifestyle" |
| ボタン skip-link | `15px` | "コンテンツに進む" |
| Body / 商品名 | `16px` | 本文・主要テキスト |
| h2 small / フォーム入力 | `12〜13px` | "Home" 小見出し・ナビ |
| キャプション | `11px` | "View more" 等の小ラベル |

**注意**: 本文 16px は ACTUS の 14px より大きく、note の 17px より小さい中庸サイズ。商品が多くスキャンしやすい設計。

### 3.5 line-height

実測値：

- **Body 16px**: `28.8px / 16px` = `1.80`（広めの行送り）
- **大 serif h2 25px**: `25px / 25px` = `1.00`（タイトな組み）
- **h2 small 12px**: `15.6px / 12px` = `1.30`（ナビの密度）
- **本文 p 12px**: `21.6px / 12px` = `1.80`（小さい文字ほど広く）
- **キャプション 11px**: `11px / 11px` = `1.00`（バッジ的に詰める）
- **ボタン a 30px line-height（12px font）**: `2.50` — ボタン高さを line-height で確保

**KINTO 独自**: 小さいテキスト（11px）と中サイズテキスト（12px）で line-height を意図的に変える。

### 3.6 letter-spacing

要素ごとに細かく調整。**em 換算で 0.04em〜0.12em**：

| 用途 | letter-spacing | em 換算 |
|------|---------------|---------|
| Body 16px | `0.6px` | `0.0375em` |
| h2 12px / p 12px | `0.6px` | `0.05em` |
| 大 serif h2 25px | `2px` | `0.08em` |
| キャプション 11px | `1.32px` | `0.12em` |
| 入力欄 13px | `1.3px` | `0.10em` |
| ボタン a 15px | `1px` | `0.067em` |

**特徴**: **小さいフォントほど字間を広げる**（11px に 0.12em）。可読性確保とブランドの "間" 表現を両立。

### 3.7 font-feature-settings

```css
font-feature-settings: "palt";
```

- **palt は body / h2 / p / button / input ほぼ全要素に適用**
- 約物（句読点・括弧）の自然なスペース調整で日本語組版を整える
- 例外: KINTO オレンジ Wishlist バッジ等の英文限定 UI は `normal`

### 3.8 ウェイト戦略

KINTO は **ほぼ全要素 weight 400** で運用する。

| 用途 | ウェイト |
|------|----------|
| すべての本文・見出し・ナビ・ボタン | `400` |

**階層は太字でなく、サイズ（11→12→13→16→25px）と書体の切り替え（Sans / Serif）で組む**。

---

## 4. Component Stylings

### 4.1 ボタン（フォーム送信）

```css
font-family: Arial, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 12px;
color: #9f9f9f;
background-color: #ffffff;
border: 1px solid #9f9f9f;
border-radius: 0;
padding: 10px 20px;
font-feature-settings: "palt";
```

- **白地に細罫線のミニマルボタン** — 送信・登録等の汎用 CTA
- 角丸ゼロ
- 文字色とボーダー色が同じ `#9f9f9f` で**控えめな存在感**

### 4.2 ボタン（強調・限定）

```css
font-family: "Instrument Sans", "ヒラギノ角ゴ Pro", ...;
font-size: 12px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0.6px;
color: #ffffff;
background-color: #ff4500;  /* KINTO オレンジ */
border-radius: 0;
padding: 0 15px;
box-shadow: rgba(0, 0, 0, 0.2) 0 0 25px 0;
```

- **KINTO オレンジ塗りつぶし** — Wishlist 等の限定機能専用
- 影あり（`0 0 25px rgba(0,0,0,0.2)`）でフローティング表現
- 普段の CTA では使わない

### 4.3 ナビゲーションリンク

```css
font-family: Swis721, "ヒラギノ角ゴ Pro", ...;
font-size: 12px;
font-weight: 400;
line-height: 21.6px;
letter-spacing: 0.6px;
color: #555555;
text-decoration: none;
font-feature-settings: "palt";
```

- 装飾なしのテキストリンク
- ホバー時は色を `#000` か `#ff4500` に変える

### 4.4 カード（商品サムネイル）

- 写真 + 商品名 + 価格の縦配置
- 背景: `#ffffff` または `#f7f8f8`
- 罫線: なし
- 影: なし（box-shadow: none）
- 角丸: `0px`
- **写真 1:1 が基本、ライフスタイルカットは 4:3 や 16:9 も混在**

### 4.5 フォーム

```css
font-family: Swis721, "ヒラギノ角ゴ Pro", ...;
font-size: 13px;
line-height: 26px;
letter-spacing: 1.3px;
color: #555555;
background-color: #ffffff;
border: 1px solid #9f9f9f;
border-radius: 0;
padding: 10px;
font-feature-settings: "palt";
```

- 入力欄: `1px solid #9f9f9f` 矩形、`border-radius: 0`
- フォーカス時は border 色を `#000` に変える
- placeholder: `#9f9f9f`

### 4.6 カントリーセレクタ（フッター）

- 矩形タイル（border-radius: 0）の country list
- 背景: `#e6e6e6`
- ボーダー: `1px solid #e6e6e6`（同色でほぼ見えない）
- font-size: 12px / line-height: 48px / letter-spacing: 1.44px (0.12em)
- **letter-spacing 0.12em は KINTO の特徴的な広がり**

### 4.7 大見出し（特集ヒーロー）

```css
font-family: baskerville-urw, serif;
font-size: 25px;
font-weight: 400;
line-height: 25px;
letter-spacing: 2px;
color: #ffffff;  /* 暗色面の上 */
font-feature-settings: "palt";
```

- 暗色面（`#1a1a1a` 等）の上に **白文字 serif** で大見出し
- ライフスタイル特集の入り口で使用

---

## 5. Layout Principles

- **コンテナ最大幅**: 1440〜1600px（商品写真をワイドに見せる）
- **グリッド**: 商品サムネイルは 4 列が主流。特集は 2 列・3 列を場面で使い分け
- **セクション間余白**: 80〜120px（写真の周囲に十分な間）
- **写真周囲には常に余白を確保**
- 見出しは**左揃え**または**中央揃え**を場面に応じて使い分け
- カントリーセレクタはフッター帯で 6 列タイル

---

## 6. Depth & Elevation

- **影は限定的に使用** — Wishlist バッジに `0 0 25px rgba(0,0,0,0.2)` のフローティング影
- 通常のカードや UI には影を使わない（box-shadow: none）
- 階層は **面色 `#ffffff` → `#f7f8f8` → `#e6e6e6` → `#1a1a1a`** の段階で表現
- ホバー状態は色の微変化（`#555` → `#000`）または下線追加

---

## 7. Do's and Don'ts

### ✅ Do
- **欧文を3書体で使い分ける** — Swis721（汎用）/ Instrument Sans（本文）/ baskerville-urw（大見出し serif）
- **和文フォールバックは "ヒラギノ角ゴ Pro" 先頭の伝統スタック**（ProN ではなく Pro）
- 全要素 **weight 400** に統一する
- 本文は **16px / line-height 1.8** で広めに組む
- letter-spacing は **小さいフォントほど広げる**（16px→0.0375em / 11px→0.12em）
- **palt を全面適用**して約物の自然なスペースを確保
- テキストは **純黒 `#000` ではなく `#555555`** を基調にする
- ライトグレー面 `#e6e6e6` を多用して写真の影として機能させる
- KINTO オレンジ `#ff4500` は **限定機能のみ**（Wishlist・セール）

### ❌ Don't
- ProN（JIS2004 字形）を指定しない（ブランドは Pro = JIS90 字形を選ぶ）
- weight 700 や 800 を使わない（階層は位置・サイズ・書体切り替えで）
- ボタンに塗り（特にオレンジ）を **常用しない** — 限定機能のみ
- 角丸を入れない（`border-radius: 0`）
- テキスト基調色を純黒 `#000` にしない（`#555555` チャコール）
- letter-spacing を **欧文サイトの方針**で組まない（小さい文字ほど広げる KINTO 特有のルール）

---

## 8. Responsive Behavior

- **PC 1440px** をベース幅とする
- **タブレット（〜1024px）**: 4 列 → 2 列、ナビをハンバーガー化
- **モバイル（〜768px）**: 1 列、本文を 14px に微縮小、CTA を幅 100%
- letter-spacing は em 換算なので全ブレークポイントで維持される
- weight 400 統一はモバイルでも維持

---

## 9. Agent Prompt Guide

> AI エージェントに KINTO 風 UI を生成させる際のプロンプト。

```
Generate a Japanese lifestyle/tableware brand UI in the KINTO visual style.

Visual:
- Pure white background (#ffffff) with charcoal gray text (#555555)
- Photography-first design with soft, neutral surfaces
- Light gray surfaces (#e6e6e6, #f7f8f8) for category bands
- Generous whitespace; 80-120px between sections
- Dark surface (#1a1a1a) for hero/special features
- KINTO orange (#ff4500) is rare — Wishlist/sale only

Typography:
- 和文 fallback: "ヒラギノ角ゴ Pro" (NOT ProN), "Hiragino Kaku Gothic Pro",
  Osaka, "ＭＳ Ｐゴシック", "MS PGothic", メイリオ, Meiryo, sans-serif
- 欧文 (3 typefaces by use case):
  - "Instrument Sans" → body, menu, badges
  - "Swis721" → h2 small, links, forms (heading-leaning)
  - "baskerville-urw" → large serif heroes (English-only, no JP fallback)
- ALL elements weight 400 — never use bold (700/800)
- Body: 16px / line-height 1.80 / letter-spacing 0.6px (0.0375em)
- Hero serif: 25px / line-height 1.0 / letter-spacing 2px (0.08em)
- Captions 11px: letter-spacing 1.32px (0.12em) — smaller = wider
- Apply font-feature-settings: "palt" globally

Components:
- Form button: white bg, 1px solid #9f9f9f, color #9f9f9f, padding 10px 20px, radius 0
- Wishlist/promo badge: orange #ff4500 bg, white text, box-shadow 0 0 25px rgba(0,0,0,0.2)
- Cards: photo + minimal text, NO shadow, NO border, NO radius
- Forms: 1px solid #9f9f9f / radius 0 / focus → border-color #000
- Country selector tiles: bg #e6e6e6 / radius 0 / letter-spacing 0.12em

Color Strategy:
- Brand: charcoal #555555 + white #fff
- Surfaces: #e6e6e6 / #f7f8f8 / #f0f0f0 / #1a1a1a
- Text: #555 (body), #000 (strong), #fff (inverse), #9f9f9f (muted)
- Accent: KINTO orange #ff4500 — used sparingly

Avoid:
- Bold weights (use 400 everywhere)
- ProN font (use Pro — JIS90 form)
- Pure black #000 for body text (use #555555)
- Filled buttons in default UI (text-only or outlined)
- Rounded corners (radius 0 everywhere)
- letter-spacing tight on small text (smaller text gets MORE letter-spacing)
- palt off (always on for body/headings)
```
