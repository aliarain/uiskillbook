# DESIGN.md — AKOMEYA TOKYO（アコメヤ トーキョー）

> AKOMEYA TOKYO 公式サイト（https://www.akomeya.jp/）のデザイン仕様書。
> 「お米を中心とした暮らしの提案」を掲げる、サザビーリーグ運営のセレクト型ライフスタイルストア。
> 2013 年に銀座で 1 号店を開業。米穀・調味料・道具・衣料・書籍まで、和の暮らしを再編集する。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「米色（こめいろ）の和紙のようなクリーム背景に、游明朝の見出しと游ゴシックの本文を組み合わせる和モダン EC」**。明朝体を見出しに使うことで、伝統工芸品や食材を扱うブランドの空気感を作る
- **密度**: 商品画像 + 簡潔なキャプションのグリッドが主役。情報密度は中程度。和雑貨ECに必要な要素（送料・特典バナー、レビュー、商品ジャンル）を整理して配置
- **キーワード**: クリーム、亜麻色、米色、明朝体、游明朝、和モダン、温かい、暮らし、丁寧、抹茶（緑のギフトCTA）、漆黒（強調）
- **特徴**:
  - **見出しは Yu Mincho（游明朝）** — h2「ABOUT AKOMEYA」「AKOMEYA SELECTION」など主要セクションタイトルがすべて明朝体。和モダンの中核
  - **本文は Yu Gothic + メイリオ + ヒラギノ角ゴ Pro W6 のチェーン** — `font-weight: 500` を本文標準として使う特徴的な指定
  - **クリーム系のサーフェス階層** — ヘッダー `#efebdd`（亜麻色）、フッター `#f6f4ef`（より淡いクリーム）、ベース `#ffffff`、商品リスト面 `#f5f5f5`
  - **黒寄りの暗色アクセント** — `#3c3c3c`（チャコール、最頻出 BG）、`#444444`（テキスト）、`#222222`（強調帯）
  - **抹茶グリーン #41c395 のギフト CTA** — 「住所を知らない相手にeギフトで贈る」専用色。**他では使われない強いアクセント**
  - **赤 #ed4831 はバッジ・セール** — 出現は控えめだが強い目線誘導用
  - **ボタンは控えめな radius 2px の塗り** — `#444444` の暗色塗り + 白文字 + radius 2px が EC 操作 CTA の標準
  - **本文サイズ 14px / weight 500 / line-height 1.5** — 游ゴシックを中肉（500）で運用するのが AKOMEYA らしい仕上がり
  - **Webフォントを使わない** — OS フォールバックに依拠した「重い読み込みを避けた素朴な実装」

---

## 2. Color Palette & Roles

> 実サイトの uniqueBackgrounds（出現回数集計）と computed style 実測値に基づく。

### Brand / Surfaces

- **AKOMEYA Cream Header** (`#efebdd`): ヘッダー背景・特典告知バー（`rgb(239, 235, 221)`）。**ブランドの顔**
- **AKOMEYA Sand Footer** (`#f6f4ef`): フッター背景（`rgb(246, 244, 239)`）。クリームより淡い砂色
- **List Surface** (`#f5f5f5`): 商品グリッド・カード面（`rgb(245, 245, 245)`、出現回数 9）
- **Pure White** (`#ffffff`): 本体・モーダル

### Foreground

- **AKOMEYA Charcoal** (`#3c3c3c`): 出現回数 40 の最頻出 BG（`rgb(60, 60, 60)`）。メニュー帯やアクセント帯
- **Body Text Dark** (`#444444`): 本文・h2・h3 の標準テキスト色（`rgb(68, 68, 68)`）。同色がボタン塗りにも使われる
- **Strong Black** (`#222222`): 出現回数 6 の濃強調帯（`rgb(34, 34, 34)`）。ヘッダー上部・最強調
- **Pure Black** (`#000000`): 見出しの一部（h2 `Yu Mincho` 18px / weight 700 など）
- **Soft Gray** (`#666666`): キャプション（`rgb(102, 102, 102)`、weight 500、letter-spacing 1px）
- **Link Gray** (`#333333`): 「履歴を残さない」等の控えめリンク（`rgb(51, 51, 51)`）

### Accent / Semantic

- **Gift Green** (`#41c395`): e ギフト CTA（`rgb(65, 195, 149)`、出現回数 4）。**専用色**。「住所を知らない相手にeギフトで贈る」の塗り
- **Sale Red** (`#ed4831`): バッジ・セール強調（`rgb(237, 72, 49)`、出現回数 4）。出番は限定的だが強い目線誘導

> **Note**: AKOMEYA のパレットは **「米と土の自然色」+ 「漆黒の差し色」+ 「抹茶グリーン / 朱赤の和アクセント」**。全体は淡いクリームでまとめつつ、e ギフトと SALE で和の彩色を効かせる二重構造。

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体（見出し）**:
- **Yu Mincho**（游明朝、Mac / Win 標準）
- フォールバックなしで `"Yu Mincho"` 単独指定 — OS の游明朝に依拠

**ゴシック体（本文）— 実サイトのチェーン**:
- `"Yu gothic"`（macOS 游ゴシック）
- `メイリオ`（Windows 標準）
- `Meiryo`（メイリオの英字表記）
- `"ヒラギノ角ゴ Pro W6"`（macOS、weight 600 相当を直接指定）
- `"Hiragino Kaku Gothic Pro W6"`（同上、英字）
- 最後は generic family（指定なし、ブラウザデフォルト）

**ゴシック体（補助・キャプション）**:
- `游ゴシック`（カナ表記）
- `"ヒラギノ角ゴ Pro W3"`（W3 = Light）
- `メイリオ, sans-serif`

### 3.2 欧文フォント

- 専用欧文フォントは指定せず、和文フォントが内蔵する欧文グリフに依拠
- 欧文と和文の混植は游ゴシック / 游明朝のメトリクスをそのまま使う

### 3.3 font-family 指定

```css
/* 見出し（明朝体） */
font-family: "Yu Mincho";

/* 本文（ゴシック・W6 系） */
font-family: "Yu gothic", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W6", "Hiragino Kaku Gothic Pro W6";

/* キャプション・補助（ゴシック・W3 系） */
font-family: 游ゴシック, "ヒラギノ角ゴ Pro W3", メイリオ, sans-serif;
```

**フォールバックの考え方**:
- **Yu Mincho を見出しの基準**にする（フォールバックなし、OS 標準前提）
- **本文は Yu Gothic + メイリオ + ヒラギノ W6 の重ねがけ** — Mac は游ゴシック、Windows はメイリオ、フォントが揃わない環境では `"ヒラギノ角ゴ Pro W6"` が直接 W6 ウェイトを指定する
- **W6 を直接指定** — ヒラギノ角ゴの Pro W6 は通常 600 相当のメディアム〜デミボールド。これが本文 14px / weight 500 と組み合わさることで **「游ゴシックは 500、ヒラギノは W6」** という二重指定になる
- Webフォント不使用 — **米屋らしい素朴さを演出する選択**

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 用途 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Yu Mincho（または親要素フォント） | 32px | 400 | normal | normal | `#ffffff` | ヒーロー文字（画像オーバーレイ） |
| H2 (Section Mincho) | Yu Mincho | 34px | 400 | 51px (1.5) | normal | `#444444` | 「ABOUT AKOMEYA」等 |
| H2 (Mincho Strong) | Yu Mincho | 22px | 700 | 33px (1.5) | normal | `#444444` | サブセクション見出し |
| H2 (Mincho Small) | Yu Mincho | 18px | 700 | 27px (1.5) | normal | `#000000` | カード見出し |
| Body | Yu Gothic | 14px | 500 | 21px (1.5) | normal | `#444444` | 本文標準 |
| Strong Body | Yu Gothic | 13px | 700 | 19.5px (1.5) | normal | `#444444` | 強調本文 |
| Sub Body | Yu Gothic | 12px | 500 | 18px (1.5) | normal | `#444444` | 補助本文 |
| Caption (W3 系) | 游ゴシック / ヒラギノ Pro W3 | 10px | 500 | 15px (1.5) | 1px | `#666666` | 小キャプション |
| Anchor Caption | Yu Gothic | 12px | 700 | 18px (1.5) | normal | `#444444` | リンク・パンくず |
| Anchor Mincho | Yu Mincho | 14–15px | 400 | 1.0–1.57 | normal | `#000000` | 明朝のセリフ風リンク |
| Button (Standard) | Yu Gothic | 14px | 400 | 21px (1.5) | normal | `#ffffff` | EC 操作 CTA |
| Button (Large) | Yu Gothic | 16px | 400 | 24px (1.5) | normal | `#ffffff` | 「もっと見る」 |
| Button (Filter) | Yu Gothic | 14px | 400 | 21px (1.5) | normal | `#ffffff` | 「絞り込み」「表示順」 |

### 3.5 行間・字間

- **本文 line-height**: `1.5`（21px / 14px、18px / 12px、19.5px / 13px）。読みやすさ重視の標準的な比率
- **見出し line-height**: `1.5`（明朝大見出しでも 51px / 34px）。**詰めずに広めの行送り**を使う
- **letter-spacing**:
  - 本文: `normal`（指定なし）
  - キャプション（W3 系）: `1px`（10px サイズで 0.1em 相当の広めの字間 — **小さい字を読みやすくする工夫**）
  - 見出し: `normal`
- **意図**: 米屋・暮らしのブランドらしい「ゆとりのある組版」。詰めず、欠けず、読みやすさが第一

### 3.6 禁則処理・改行ルール

- 特別な指定なし。ブラウザデフォルト
- 商品名は短く改行を含めない設計

### 3.7 OpenType機能

- 特別な指定なし（`palt` も `kern` も強制しない）
- 游明朝・游ゴシックのデフォルトメトリクスをそのまま使う

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Standard CTA（暗色塗り、最も多用）
- 背景: `#444444`
- 文字色: `#ffffff`
- 罫線: なし
- font-family: Yu Gothic
- font-size: 14px / weight 400
- line-height: 21px (1.5)
- padding: `8px 0px 6px`（横は親の幅に依存、縦は 8/6 の非対称）
- border-radius: `2px`

#### Large CTA（「もっと見る」）
- 背景: `#444444`
- 文字色: `#ffffff`
- font-size: 16px / weight 400
- line-height: 24px (1.5)
- padding: `10px 0px`
- border-radius: `2px`

#### Gift Green CTA（e ギフト専用）
- 背景: `#41c395`
- 文字色: `#ffffff`
- font-size: 親要素を継承（実サイトでは内側のラベルが 0px で SVG/アイコンだけのケースもあり）
- font-weight: 700
- border-radius: `0px`
- padding: `1px 6px`
- **使用コンテキスト限定** — 「住所を知らない相手にeギフトで贈る」

#### Strong Black Bar（最強調・告知帯）
- 背景: `#222222`
- 文字色: `#ffffff`
- ヘッダー上部・限定告知に使用

### Header / Footer

#### Header（クリーム背景）
- 背景: `#efebdd`
- 文字色: `#444444`
- font-size: 14px / weight 500
- line-height: 21px (1.5)
- 「5,500円以上で送料無料 / 新規会員登録」等

#### Footer（淡サンド背景）
- 背景: `#f6f4ef`
- 文字色: `#444444`
- font-size: 14px / weight 500
- 線でなくサーフェスの色変化で領域を分ける

### Inputs

- 背景: `#ffffff`
- 罫線: `1px solid` 薄グレー
- 文字色: `#444444`
- font-family: Yu Gothic
- font-size: 14px / weight 500
- border-radius: `2px`

### Cards

- 背景: `#f5f5f5`（リスト面）または `#ffffff`
- 罫線: なし
- 影: なし（フラット）
- 角丸: `0px`〜`2px`
- 商品画像 + 14px の Yu Gothic キャプション

### Badges

- **Sale Badge**: 背景 `#ed4831` / 白文字 / 12–13px
- **Gift Badge**: 背景 `#41c395` / 白文字（または SVG アイコン）
- **New Badge**: 背景 `#222222` / 白文字

---

## 5. Layout Principles

### Spacing Scale

実測値ベースの暗黙的なスケール：

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- グリッドは商品 4 列 × N 行が基本（PC）
- 横幅は 1140px〜1280px のフルードコンテナ

### Grid

- ヘッダー帯はフル幅（背景 `#efebdd` を端まで使う）
- 商品グリッドはコンテナ内で 2〜4 カラム

---

## 6. Depth & Elevation

- **影**: ほぼ未使用。**フラット + サーフェス色変化で奥行きを作る**
- **段階表現**:
  - サーフェス色（白 → `#f5f5f5` → `#f6f4ef` → `#efebdd` → `#3c3c3c` → `#222222`）の濃淡で領域を区別
  - 罫線も最小限
- **角丸**: 0〜2px。和紙のような直線的な印象を保つ

---

## 7. Do's and Don'ts

### Do's

- **見出しは Yu Mincho（游明朝）**を使う — 和モダンの軸
- **本文は `"Yu gothic", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W6"` のチェーン**で OS 横断
- **本文の weight は 500**（Medium）を標準にする
- **背景はクリーム階層**（`#efebdd` ヘッダー / `#f6f4ef` フッター / `#f5f5f5` リスト / `#ffffff` ベース）
- **キャプション（10px W3 系）は `letter-spacing: 1px`** で読みやすく
- **CTA は `#444444` 暗色塗り + 白文字 + radius 2px** が標準
- **e ギフト CTA は `#41c395`、SALE は `#ed4831`** の専用色を守る
- **影なし、フラット、角丸 0〜2px** を貫く
- **行間 1.5** を本文・見出し問わず標準に

### Don'ts

- **見出しに角ゴシックだけを使わない** — 明朝の温度感がブランドの核
- **本文を weight 400 にしない** — 500 が AKOMEYA らしい中肉感
- **彩度の高いブランドカラーを増やさない** — グリーンと赤は専用色として温存
- **角丸を大きくしない** — 8px 以上は和の直線性を損なう
- **ヒラギノを ProN にしない** — 実サイトは `Pro W6` 直指定
- **影で深さを作らない** — サーフェス色階層で表現する
- **見出しの line-height を 1.2 以下に詰めない** — 1.5 のゆとりが基本

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ縦 |
| Tablet | 769–1024px | タブレット |
| Desktop | > 1024px | PC |

### タッチターゲット

- ボタン padding `8px 0 6px` は横幅で稼ぐ。グリッドの最小タップ領域は 44px 以上を確保

### フォントサイズの調整

- 本文 14px はモバイルでも保持
- 見出しはモバイルで一段縮小（h2 34px → 22–24px）
- キャプション 10px はモバイルでも保持（letter-spacing 1px が効く）

---

## 9. Agent Prompt Guide

AKOMEYA TOKYO らしい UI を生成するときは以下を伝えるとよい：

```
- 見出し font-family: "Yu Mincho"
- 本文 font-family: "Yu gothic", メイリオ, Meiryo, "ヒラギノ角ゴ Pro W6", "Hiragino Kaku Gothic Pro W6"
- キャプション font-family: 游ゴシック, "ヒラギノ角ゴ Pro W3", メイリオ, sans-serif（letter-spacing: 1px）
- 本文 14px / font-weight: 500 / line-height: 1.5（500 が標準）
- 見出し（明朝大）34px / weight 400 / line-height 1.5
- 見出し（明朝中）22px / weight 700 / line-height 1.5
- ヘッダー背景: #efebdd（クリーム）／ フッター背景: #f6f4ef（サンド）／ リスト面: #f5f5f5
- テキスト色 #444444（本文）／#000000（明朝見出し）／#666666（キャプション）
- 強調帯: #222222（黒帯）／#3c3c3c（チャコール）
- 標準 CTA: 背景 #444444 / 白文字 / radius 2px / Yu Gothic 14px weight 400
- e ギフト CTA: 背景 #41c395（抹茶グリーン）/ 白文字（限定使用）
- SALE バッジ: 背景 #ed4831（朱赤）/ 白文字（限定使用）
- 影なし / 角丸 0–2px / Webフォント不使用
- 「丁寧な暮らし」「和モダン」「米屋」のトーン
```
