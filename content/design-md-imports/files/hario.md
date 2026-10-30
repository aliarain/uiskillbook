# DESIGN.md — HARIO（ハリオ）

> HARIO 公式サイト（https://www.hario.com/）のデザイン仕様書。
> 1921年創業、日本で唯一の耐熱ガラスメーカー。V60ドリッパーをはじめとするコーヒー器具で世界的に知られる。
> 「ガラスの王（玻璃王=ハリオ）」を社名に冠し、素材の透明感・清潔感をデザインに反映している。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「グレー基調 + Jost 欧文見出し + Noto Sans JP 本文」で構成された、素材の透明感を意識した抑制的なコーポレートサイト**。テキスト色は純黒を避けた `#4d4d4d`（ミディアムグレー）で統一し、背景はほぼ白。装飾を極限まで削ぎ落とし、製品写真と余白で語るレイアウト。ニュースカテゴリのカラーバッジが唯一のクロマティック要素
- **密度**: 標準的なコーポレートサイト。ヒーロー動画、ニュース一覧、製品カルーセル、企業紹介セクションが縦に並ぶ構成
- **キーワード**: ミディアムグレー、Jost geometric sans、抑制的、クリーン、カテゴリバッジ、モノクロマティック、透明感、精密
- **特徴**:
  - **Jost + Noto Sans JP の二重書体システム** — 見出しの欧文に Jost（幾何学的サンセリフ）を使い、和文は Noto Sans JP。本文は Noto Sans JP 一本
  - **全体が `#4d4d4d` のミディアムグレー** — テキスト色が純黒ではなく、柔らかく親しみやすい印象。耐熱ガラスの透明感に通じる
  - **カテゴリバッジカラーシステム** — NEWS（青 `#3a9bd2`）、PICKUP（紫 `#a07dd7`）等、ニュースカテゴリごとに固有色を持つアウトラインバッジが唯一の彩色要素
  - **オンラインショップリンクのマゼンタ `#d60077`** — ヘッダー内で唯一目立つ色。ECサイトへの導線として機能
  - **weight 400 で全体を統一** — 見出しも本文も Regular ウェイト。一部 h3 のみ 700（Bold）
  - **letter-spacing 0.05em を広く適用** — 本文・見出しともに 0.05em 前後の字間で品のある組版
  - **影なし、角丸なし** — 完全にフラットで直線的。ガラスの「面」の美しさを反映

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **HARIO Gray** (`#4d4d4d`): メインテキスト色。純黒を避けたミディアムグレー。**ブランドのトーンを決定する色**
- **HARIO Magenta** (`#d60077`): オンラインショップリンクの色。HARIO のEC導線を示す唯一の鮮やかなアクセント色

### Category（ニュースバッジ専用）

- **ALL / Active** (`#666666`): 全カテゴリ選択時の背景色。アクティブ状態のインジケーター
- **NEWS** (`#3a9bd2`): ニュースカテゴリの青。ボーダーとテキストに使用
- **PICKUP** (`#a07dd7`): ピックアップカテゴリの紫。ボーダーとテキストに使用

### Neutral

- **Text Primary** (`#4d4d4d`): 本文テキスト。`rgb(77, 77, 77)` の実測値
- **Text Secondary** (`#898989`): フッターのコピーライト等。`rgb(137, 137, 137)` の実測値
- **Border** (`#666666`): 入力欄のボーダー、セクション区切り
- **Background** (`#ffffff`): ページ背景・ヘッダー背景
- **Surface Alt** (`#f1f1f1`): コンテンツセクション背景。`rgb(241, 241, 241)` の実測値。出現回数 7
- **Surface Footer** (`#f5f5f5`): フッター背景。`rgb(245, 245, 245)` の実測値
- **Section Divider** (`#e6e6e6`): セクション間の区切り背景。`rgb(230, 230, 230)` の実測値
- **Carousel Dot Inactive** (`#bcbcbc`): カルーセルのインジケーター非アクティブ。`rgb(188, 188, 188)` の実測値。出現回数 9
- **Carousel Dot Active** (`#666666`): カルーセルのインジケーターアクティブ

> **Note**: HARIO のパレットは **グレーのグラデーションが主役**。`#4d4d4d` → `#666666` → `#898989` → `#bcbcbc` → `#e6e6e6` → `#f1f1f1` → `#f5f5f5` → `#ffffff` と、純黒から純白までのグレースケールで構成される。彩色はカテゴリバッジとオンラインショップリンクのみに限定し、UI 全体はモノクロマティック。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（全般）**:
- Noto Sans JP（Google Fonts。本文・見出し和文の唯一の書体）

### 3.2 欧文フォント

- **Jost**（Google Fonts。幾何学的サンセリフ。見出しの欧文用）
- **sans-serif**（generic family。フォールバック末尾）

### 3.3 font-family 指定

```css
/* 見出し（Jost + Noto Sans JP） */
font-family: Jost, "Noto Sans JP", sans-serif;

/* 本文 */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **見出しは Jost を先頭** — 欧文は Jost の幾何学的なグリフを優先し、和文は Noto Sans JP にフォールバック
- **本文は Noto Sans JP 単独** — Google Fonts から読み込み、sans-serif でフォールバック。システムフォントには依存しないシンプルな構成
- **フォントスタックが極めてシンプル** — 他のサイトに比べてフォールバックチェーンが短い。Web フォント前提の潔い設計

### 3.4 文字サイズ・ウェイト階層

実サイトの computed style に基づく。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| H1 Section | Jost + Noto Sans JP | 26px | 400 | 1.12 | 0.1em | セクション見出し「ニュース」等 |
| H3 Product | Noto Sans JP | 13px | 700 | 1.0 | 0.05em | 製品名「どんぐりカラフェ」等 |
| Body | Noto Sans JP | 16px | 400 | 1.875 | 0.05em | 本文テキスト |
| Hero CTA | Noto Sans JP | 18px | 300 | 1.0 | 0.05em | ヒーロー内リンク「PLAY MOVIE」 |
| Nav Link | Noto Sans JP | 16px | 400 | 1.0 | normal | ヘッダーナビ |
| Badge | Noto Sans JP | 14px | 400 | 1.0 | 0.1em | カテゴリバッジ「NEWS」「PICKUP」 |
| Footer Link | Noto Sans JP | 15px | 400 | 1.0 | 0.1em | フッター内リンク |
| Caption | Noto Sans JP | 11px | 400 | 1.0 | normal | ヘッダー補助テキスト「よくあるご質問」 |
| Copyright | Noto Sans JP | 11px | 400 | 1.0 | 0.1em | フッターコピーライト |
| Search Input | Noto Sans JP | 12px | 400 | 2.334 | normal | 検索フォーム |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.875`（16px × 1.875 = 30px）。日本語本文として広めの行間で読みやすい
- **見出しの行間**: `1.0〜1.12`。見出しはタイトで引き締まった印象
- **本文の字間 (letter-spacing)**: `0.05em`（0.8px / 16px）。わずかに開いた上品な字間
- **見出しの字間**: `0.1em`（2.6px / 26px）。h1 は本文より広い
- **バッジの字間**: `0.1em`（1.4px / 14px）。カテゴリバッジは広めの字間でラベル感を強調

**ガイドライン**:
- 本文の `0.05em` は HARIO 全体のトーンを決める重要な値。0 にしない
- 見出しの `0.1em` はラベル的な使い方に由来。説明的な見出しでは詰めてもよい
- バッジの `0.1em` は変えない。バッジの識別性に直結する

### 3.6 禁則処理・改行ルール

- 特別な CSS 指定は確認されていない。ブラウザのデフォルト挙動を尊重
- 本文テキストは `word-break` / `overflow-wrap` のカスタム指定なし

### 3.7 OpenType 機能

```css
/* font-feature-settings は normal（未使用） */
font-feature-settings: normal;
```

- **palt 未使用** — body にも見出しにも `font-feature-settings` の指定なし。Noto Sans JP のデフォルトメトリクスで組んでいる
- `letter-spacing: 0.05em` で一律に字間を確保しており、palt による個別調整は不要という設計判断

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Search Button

実例: ヘッダー検索欄の送信ボタン

- 背景: `#666666`
- 文字色: `transparent`（アイコンのみ表示）
- 罫線: なし
- font-size: 12px / weight 400
- border-radius: `0px`（角丸なし）
- padding: 1px 6px

#### "もっと見る" ボタン（アウトライン型）

実例: ニュース一覧下部

- 背景: `#ffffff`
- 文字色: `#4d4d4d`
- 罫線: 1px solid `#4d4d4d`
- font-size: 16px / weight 400
- letter-spacing: 0.05em
- border-radius: `0px`（角丸なし）

#### Category Badge（アウトラインバッジ）

実例: ニュースカテゴリ「NEWS」「PICKUP」

- 背景: `transparent`
- 文字色: カテゴリ固有色（`#3a9bd2` / `#a07dd7` 等）
- 罫線: 1px solid（文字色と同色）
- font-size: 14px / weight 400
- letter-spacing: 0.1em
- border-radius: `0px`
- padding: 4px 7px 6px

#### Category Badge（アクティブ状態）

実例: ニュースカテゴリ「ALL」選択時

- 背景: `#666666`
- 文字色: `#ffffff`
- 罫線: 1px solid `#666666`
- その他はアウトラインバッジと同じ

### Inputs

- 背景: `#ffffff`
- 文字色: `#000000`
- 罫線: 1px solid `#666666`
- Border Radius: `0px`
- Padding: 0px 6px
- Font Size: 12px
- Line Height: 28px（入力欄の高さとして機能）

### Cards

- 背景: `#ffffff`
- 罫線: なし
- 影: なし（フラット）
- 角丸: なし
- 製品写真を主役にした最小限のカード。テキストは製品名 h3 + 短い説明

### Navigation

- 背景: `#ffffff`
- 文字色: `#4d4d4d`
- font-family: "Noto Sans JP", sans-serif
- font-size: 16px / weight 400
- ロゴは画像（テキストではない）
- 「オンラインショップ」リンクのみ `#d60077`（マゼンタ）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 7px | バッジ内パディング（上下） |
| S | 16px | テキスト間の基本余白 |
| M | 32px | セクション内要素間 |
| L | 48px | 本文の右パディング |
| XL | 100px | フッター上部の大きな余白 |

### Container

- Max Width: 推定 1200px
- Padding (horizontal): 推定 0–48px

### Grid

- 製品カルーセル: 横スクロール
- ニュース一覧: 1列リスト
- フッター: 複数列リンクリスト

### Layout 原則

- **白背景が基調** — `#ffffff` のクリーンな背景に、`#f1f1f1` のセクション面を配置
- **製品写真がヒーロー** — カルーセルで製品を大判表示
- **セクション区切り** — `#e6e6e6` の薄いグレー背景で視覚的に分離
- **余白は控えめ** — Vermicular のようなエディトリアル的な余白ではなく、実用的な密度

---

## 6. Depth & Elevation

- **影**: 使用しない。**完全にフラット**
- **角丸**: 使用しない。すべて `border-radius: 0px`
- **段階表現**: グレーの濃淡のみで面を区別する

| Level | Expression | 用途 |
|-------|-----------|------|
| 0 | `#ffffff`（白） | ページ背景・ヘッダー・カード |
| 1 | `#f5f5f5`（最淡グレー） | フッター |
| 2 | `#f1f1f1`（淡グレー） | コンテンツセクション |
| 3 | `#e6e6e6`（薄グレー） | セクション区切り |
| 4 | `#666666`（ダークグレー） | アクティブ要素・検索ボタン |

---

## 7. Do's and Don'ts

### Do's

- **欧文見出しは Jost + Noto Sans JP** を font-family に指定する。Jost の幾何学的な清潔感が HARIO のイメージ
- **本文テキスト色は `#4d4d4d`** を使う。純黒 `#000000` は使わない
- **letter-spacing は本文 `0.05em`、見出し `0.1em`** を守る。わずかに開いた字間が品格を保つ
- **カテゴリバッジはアウトライン型**（背景 transparent + 色付きボーダー）で作る。塗りバッジはアクティブ状態のみ
- **バッジのカテゴリ色を厳守** — NEWS は `#3a9bd2`（青）、PICKUP は `#a07dd7`（紫）、ALL は `#666666`
- **すべてのコンポーネントを `border-radius: 0px`** にする。HARIO に丸みはない
- **背景はグレーの濃淡のみ** で面を分ける。影は使わない
- **font-weight は基本 400** で統一する。太字は h3 製品名の 700 のみ
- **オンラインショップリンクは `#d60077`** で強調する。ヘッダー内の唯一のカラーアクセント

### Don'ts

- **純黒 `#000000` をテキストに使わない** — `#4d4d4d` を使う
- **丸ボタン（pill）を作らない** — すべて直角。border-radius は 0px
- **box-shadow を使わない** — 奥行きはグレーの面色で表現する
- **カテゴリバッジに角丸をつけない** — フラットなスクエアバッジが HARIO のスタイル
- **ニュースバッジに塗りを使わない** — アクティブ状態（`#666666` 背景）以外はアウトライン
- **彩度の高い色を UI に多用しない** — カテゴリバッジとオンラインショップリンク以外はグレースケール
- **weight 700 を見出しに多用しない** — h3 製品名以外は 400 で統一。太い文字は HARIO の繊細さに合わない
- **palt を適用しない** — HARIO は `font-feature-settings: normal` で組んでいる。letter-spacing で調整する設計
- **行間を狭くしない** — 本文の `line-height: 1.875` は読みやすさの要。1.5 未満にしない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ縦。1列レイアウト |
| Tablet | 768–1024px | タブレット |
| Desktop | > 1024px | デスクトップ。フルレイアウト |

### タッチターゲット

- カテゴリバッジの padding は 4px 7px 6px と小さめ。**モバイルでは padding を拡大し 44px 以上の高さを確保すること**

### フォントサイズの調整

- h1 見出し: 26px はモバイルでも維持可能なサイズ
- 本文: 16px はモバイルでもそのまま
- バッジ: 14px はモバイルでも変更不要
- Caption: 11px は最小。これ以上縮小しない

---

## 9. Agent Prompt Guide

HARIO らしい UI を生成するときは以下を伝えるとよい：

```
- 見出し font-family: Jost, "Noto Sans JP", sans-serif
- 本文 font-family: "Noto Sans JP", sans-serif
- テキスト色 #4d4d4d（ミディアムグレー。純黒 #000000 は使わない）
- 背景色 #ffffff（純白）
- セクション背景 #f1f1f1（淡グレー）
- フッター背景 #f5f5f5（最淡グレー）
- border-radius: 0px（すべてのコンポーネント。角丸なし）
- box-shadow: none（影なし。完全フラット）
- font-weight: 400 で統一（h3 製品名のみ 700）
- 本文 font-size: 16px / line-height: 1.875 / letter-spacing: 0.05em
- 見出し font-size: 26px / line-height: 1.12 / letter-spacing: 0.1em
- font-feature-settings: normal（palt 未使用）
- カテゴリバッジ: アウトライン型、border 1px solid、角丸なし
  - NEWS: #3a9bd2（青）
  - PICKUP: #a07dd7（紫）
  - ALL (active): bg #666666 + text #ffffff
- オンラインショップリンク: #d60077（マゼンタ。唯一の鮮やかなアクセント）
- ボタン: アウトライン型 / border 1px solid #4d4d4d / 角丸なし
- 入力欄: border 1px solid #666666 / 角丸なし / font-size 12px
- グレースケールが UI の主役。彩色はカテゴリバッジとECリンクのみ
```

### フォント代替ガイド

| 実サイト | Google Fonts 代替 | 選定理由 |
|----------|-------------------|----------|
| Jost | Jost | Google Fonts で直接利用可能 |
| Noto Sans JP | Noto Sans JP | Google Fonts で直接利用可能 |

> HARIO は両フォントとも Google Fonts から利用可能なため、代替は不要。
