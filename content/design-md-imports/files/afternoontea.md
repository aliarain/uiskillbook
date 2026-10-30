# DESIGN.md — Afternoon Tea（アフタヌーンティー）

> Afternoon Tea 公式ブランドサイト（https://www.afternoon-tea.net/）のデザイン仕様書。
> サザビーリーグが 1981 年に創業した日本のライフスタイルブランド。
> LIVING（雑貨・インテリア）、TEAROOM（カフェ）、BAKERY、LOVE&TABLE のサブブランドを展開。
> 温かみのある、エレガントで女性的なデザインが特徴。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ディープグリーン（#006450）をブランドカラーに据え、広い字間（1.12px）+ 白とライトグレーのセクション交互配置で「温かく呼吸感のあるライフスタイルブランド」を表現。テキストは #555555 のソフトグレーが主体
- **密度**: 情報密度は中程度。ヒーローバナー + コンテンツカード + お知らせの3層構成で、余白を十分に取りつつ情報を届ける
- **キーワード**: ディープグリーン、Dosis ジオメトリック、wide letter-spacing 1.12px、温かみ、ライフスタイル、フェミニン、シャープコーナー CTA
- **特徴**:
  - **2系統フォント運用** — 和文・本文に「Noto Sans JP」（Google Fonts）、英文セクションタイトルに「Dosis」（Google Fonts のジオメトリック丸ゴシック）
  - **ブランドカラー #006450（ディープグリーン）が支配的アクセント** — CTA 塗り、見出し文字色、ナビタブ背景、ハンバーガーアイコンすべてに使用
  - **テキスト色は #555555（ソフトグレー）が基本** — 純黒は使わず、補助テキストは #696969
  - **背景は白 + #ededed（ライトグレー）の交互セクション** — 穏やかなリズムを生む
  - **letter-spacing 1.12px（0.07em）** がほぼ全要素に適用 — エレガントで呼吸感のある字間がブランドらしさ
  - **見出しの letter-spacing はさらに広い** — h2 重要お知らせは 1.36px（0.085em）、セクション英字タイトルは 3.2px（0.114em）
  - **CTA はシャープコーナー（border-radius: 0px）** — pill や角丸を使わない、構造的で清潔な印象
  - **サブブランドナビゲーション** — LIVING / TEAROOM のタブが #006450 背景 + 白文字 28px で目立つ
  - **font-weight 400〜700 を使い分け** — 本文は 400、見出しは 500、CTA は 700。AURALEE のような極端な軽さではなく、メリハリがある
  - **Webフォントのみ** — Noto Sans JP + Dosis は Google Fonts で読み込み。Adobe Fonts 不要

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Accent

- **AT Green** (`#006450`): ブランドの支配色（rgb(0, 100, 80)）。**CTA 背景、見出し文字色、ナビタブ背景、ボーダー、アイコン**に使用。サイト全体のアイデンティティ
- **AT Green Dark** (`#006654`): Cookie 設定ダイアログの Apply ボタン等（rgb(0, 102, 84)）。#006450 とほぼ同色のバリエーション

### Foreground（テキスト）

- **Text Primary** (`#555555`): 本文・ナビ・フッターの主要テキスト色（rgb(85, 85, 85)）
- **Text Secondary** (`#696969`): 補助テキスト・h3/h4 見出し・Cookie バナー説明文（rgb(105, 105, 105)）
- **Link Default** (`#0000ee`): ブラウザデフォルトの青リンク（スタイル未上書き）

### Surface（背景）

- **White** (`#ffffff`): ページ背景・ヘッダー・フッター
- **Section Gray** (`#ededed`): セクション背景のライトグレー（rgb(237, 237, 237)）。Dosis 見出しの帯背景にも使用
- **Soft Gray** (`#f5f5f5`): ナビゲーション領域等のやや薄いグレー（rgb(245, 245, 245)）
- **Border Gray** (`#e1e1e1`): フッター内のセクション区切り面（rgb(225, 225, 225)）

### Semantic

- **Cookie Toggle On** (`#e3eee3`): Cookie 設定トグル ON 時の背景（rgb(227, 238, 227)）— ブランドグリーンの淡い版

### Overlay

- **Carousel Arrow** (`rgba(0, 0, 0, 0.3)`): カルーセルの PREV/NEXT 矢印背景

### Header Shadow

- **Header Elevation** (`rgba(0, 0, 0, 0.1) 0px 2px 2px 0px`): ヘッダーの影

> **Note**: Afternoon Tea のパレットは **「ディープグリーン + ソフトグレー + 白」の 3 色構成**。彩度の高い色はブランドグリーン 1 色のみ。背景は白と #ededed の交互配置でリズムを作り、テキストは #555555 と #696969 で控えめに構成。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（フォールバックスタック）**:
- Noto Sans JP（Google Fonts、メインの和文フォント）
- Hiragino Kaku Gothic ProN（macOS フォールバック）
- ヒラギノ角ゴ ProN W3（カナ表記）
- MS PGothic（Windows フォールバック）
- ＭＳ Ｐゴシック（全角表記）

### 3.2 欧文フォント

- **Dosis**（Google Fonts、ジオメトリック丸ゴシック。セクションの英文タイトルに使用）
- Noto Sans JP 内蔵の欧文グリフが本文・UI の欧文を担当

### 3.3 font-family 指定

```css
/* 本文・UI・見出し（サイト全体） */
font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "MS PGothic", "ＭＳ Ｐゴシック", sans-serif;

/* 英文セクションタイトル（Dosis） */
font-family: Dosis;
```

**フォールバックの考え方**:
- **和文先頭スタック** — Noto Sans JP が先頭。欧文も Noto Sans JP の内蔵グリフを使用
- **Dosis は単独指定** — 英文セクションタイトル（LIVING, BRAND, CSR 等）のみ。和文フォールバック不要
- **Webフォント前提** — Noto Sans JP と Dosis は Google Fonts の読み込みが必要
- **Adobe Fonts 不使用** — すべて Google Fonts で完結

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Nav Tab (LIVING) | Noto Sans JP | 28px | 400 | 54px (1.93) | 1.12px | サブブランドナビタブ |
| Section Title (EN) | Dosis | 28px | 500 | 42px (1.5) | 3.2px (0.114em) | 「BRAND」「PICK UP!」等 |
| Section Title (EN/nav) | Dosis | 24px | 700 | — | 1.12px | 「LIVING」タブ見出し |
| Section Title (JP) | Noto Sans JP | 24px | 500 | 36px (1.5) | 1.12px | 「季節のおすすめ」等 |
| h2 Important | Noto Sans JP | 20px | 500 | 30px (1.5) | 1.12px | 記事大見出し |
| h2 Notice | Noto Sans JP | 16px | 500 | 24px (1.5) | 1.36px (0.085em) | 「重要なお知らせ」 |
| Body | Noto Sans JP | 16px | 400 | 24px (1.5) | 1.12px (0.07em) | 本文 |
| Body Article | Noto Sans JP | 16px | 400 | 27.2px (1.7) | 1.12px | 記事本文（行間広め） |
| Body Small | Noto Sans JP | 14px | 400 | 21px (1.5) | 1.12px | 段落テキスト・補足 |
| CTA Text | Noto Sans JP | 14px | 700 | 21px (1.5) | 1.12px | 「Afternoon Tea MEMBERS」 |
| Arrow Link | Noto Sans JP | 14px | 500 | 14px (1.0) | 1.12px | 「重要なお知らせ一覧へ」 |
| h3 Article | Noto Sans JP | 14px | 500 | 21px (1.5) | 0.16px | 記事小見出し |
| Footer Title | Noto Sans JP | 12px | 500 | 18px (1.5) | 1.12px | 「ショップ検索」等 |
| Footer Link | Noto Sans JP | 12px | 400-500 | 18px (1.5) | 1.12px | フッターリンク |
| Notice Item | Noto Sans JP | 12px | 400 | 18px (1.5) | 1.12px | お知らせ日付+テキスト |

### 3.5 行間・字間

- **本文 line-height**: `1.5`（24px / 16px）— 日本語の標準的な読みやすさ
- **記事本文 line-height**: `1.7`（27.2px / 16px）— 記事ページではやや広め
- **見出し line-height**: `1.5`（ほぼ統一。NavTab の 1.93 は padding 含む）
- **letter-spacing 1.12px (0.07em)**: 本文・フッター・お知らせなどサイト全体の標準字間
- **letter-spacing 1.36px (0.085em)**: h2 重要お知らせの広めの字間
- **letter-spacing 3.2px (0.114em)**: Dosis セクションタイトルの大きく開いた字間（ブランドらしいエレガントな空気感）
- **意図**: 1.12px の字間がサイト全体に「呼吸感」を与え、ライフスタイルブランドの温かさと上品さを演出。Dosis セクションタイトルではさらに字間を広げて視覚的アクセントに

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — 特別な `word-break` や `line-break` 指定はない
- 日本語の禁則はブラウザのデフォルト挙動に任せる

### 3.7 OpenType機能

- **`font-feature-settings: normal`** — palt や kern を強制しない
- **letter-spacing 1.12px による物理的字間調整** で代替。Noto Sans JP の palt は使わず、均一な字間で統一

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA（Afternoon Tea MEMBERS 等）
- 背景: `#006450`
- 文字色: `#ffffff`
- font-size: 14px
- font-weight: 700
- line-height: 21px (1.5)
- letter-spacing: 1.12px
- border: 1px solid `#006450`
- border-radius: **0px**（シャープコーナー）
- padding: 12px

#### Secondary CTA（Online Store）
- 背景: 透過
- 文字色: `#006450`
- font-size: 16px
- font-weight: 500
- line-height: 49px
- letter-spacing: 1.12px
- border: **3px solid `#006450`**（太めのアウトラインで存在感）
- border-radius: 0px
- padding: 0px（line-height で高さを確保）

#### Arrow Link（「重要なお知らせ一覧へ」等）
- 背景: 透過
- 文字色: `#006450`
- font-size: 14px
- font-weight: 500
- letter-spacing: 1.12px
- 装飾: wedge（小さな矢印アイコン）付き
- border-radius: 0〜2px

#### Cookie Consent Button
- 背景: `#006450`
- 文字色: `#ffffff`
- font-size: 13px
- font-weight: 600
- border: 1px solid `#006450`
- border-radius: 2px
- padding: 12px 10px

### Navigation

#### Sub-brand Tab（LIVING / TEAROOM）
- 背景: `#006450`
- 文字色: `#ffffff`
- font-family: Noto Sans JP
- font-size: 28px
- font-weight: 400
- line-height: 54px
- letter-spacing: 1.12px
- border-radius: 0px

#### Section Nav Title
- 背景: `#ededed`
- 文字色: `#555555`
- font-family: Dosis
- font-size: 24px
- font-weight: 700
- letter-spacing: 1.12px

### Inputs

- 背景: `#ffffff`
- 文字色: `#555555`
- 罫線: 1px solid `#d1d1d1`
- border-radius: 50px（丸い検索ボックス）
- padding: 6px 35px 6px 15px
- font-size: 12.8px
- font-weight: 400

### Cards

- 背景: `#ffffff` または透過
- 罫線: なし
- 影: なし（フラット）
- 角丸: 0px
- 記事画像が主役。見出しは `#006450` の h2/h3

### Footer

- 背景: `#ffffff`
- padding-top: 48px
- タイトル: 12px / weight 500 / `#555555` / letter-spacing 1.12px
- リンク: 12px / weight 400-500 / `#555555` / letter-spacing 0.78〜1.12px

---

## 5. Layout Principles

- **コンテンツ幅**: max-width 640px〜960px が中心。モバイルファースト設計
- **ヒーロー**: フルブリードのバナー画像 + オーバーレイテキスト
- **セクション交互配置**: 白背景 → `#ededed` 背景 → 白背景 のリズム
- **カードグリッド**: 記事カードは 2〜3 列のグリッド配置
- **サブブランドナビ**: LIVING / TEAROOM / BAKERY のタブがページ上部に常設
- **余白設計**: セクション間は padding 48px 程度、カード間は padding 10〜20px
- **フッター**: 2〜3列のリンクブロック + ソーシャルアイコン

### Header

- 背景: `#ffffff`
- box-shadow: `rgba(0, 0, 0, 0.1) 0px 2px 2px 0px`（軽い影）
- sticky 配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラット基調） |
| 1 | `rgba(0, 0, 0, 0.1) 0px 2px 2px 0px` | ヘッダーのみ |

- **影は極めて控えめ** — ヘッダーに薄い影を落とす程度で、カードやボタンには影なし
- **段階表現**: `#ededed` のセクション背景色と白の交互配置で視覚的な層を作る
- **CTA の奥行き**: 影やグラデーションではなく、塗り色 `#006450` と白文字のコントラストで存在感を出す

---

## 7. Do's and Don'ts

### Do's

- **Noto Sans JP を和文・本文のメインフォント** として使う（Google Fonts 読み込み）
- **Dosis を英文セクションタイトル** に使い、ジオメトリックで親しみやすい印象を出す
- **ブランドカラー #006450** を CTA・見出し・ナビに一貫して使う
- **テキストカラーは #555555**（純黒は使わない、柔らかいグレー）
- **letter-spacing 1.12px (0.07em)** を本文・UI 全体に適用（エレガントな呼吸感）
- **CTA は border-radius: 0px** のシャープコーナー（角丸にしない）
- **セクション背景を白と #ededed で交互** に配置してリズムを作る
- **font-weight 500** を見出しの標準ウェイトとして使う

### Don'ts

- **CTA を pill 型（border-radius 9999px）にしない** — Afternoon Tea の CTA はシャープコーナー
- **#006450 以外の彩度の高い色を追加しない** — ブランドグリーン 1 色でアクセントを統一
- **本文を 10〜12px に小さくしない** — Afternoon Tea の本文は 14〜16px で可読性重視
- **純黒 #000000 を本文に使わない** — `#555555` のソフトグレーが基本
- **letter-spacing を 0 にしない** — 1.12px の呼吸感が Afternoon Tea らしさ
- **Dosis を本文や和文に使わない** — 英文セクションタイトル専用
- **影を多用しない** — ヘッダー以外は基本フラット
- **太字（weight 800〜900）を使わない** — 700 が最大ウェイト

---

## 8. Responsive Behavior

- デスクトップ: 2〜3列の記事カードグリッド + フルブリードバナー
- モバイル: 1列の縦積み + フルブリードバナー
- サブブランドナビ（LIVING / TEAROOM）はモバイルでもタブとして表示
- フォントサイズはモバイルでも維持（14〜16px 中心）
- CTA はモバイルで全幅（`w-100v` クラス）に拡張

---

## 9. Agent Prompt Guide

Afternoon Tea らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "MS PGothic", "ＭＳ Ｐゴシック", sans-serif
- 英文タイトル font-family: Dosis（Google Fonts のジオメトリック丸ゴシック）
- 本文 line-height: 1.5（24px / 16px）
- letter-spacing: 1.12px (0.07em) を全要素に適用（エレガントな呼吸感）
- ブランドカラー: #006450（ディープグリーン）— CTA・見出し・ナビに使用
- テキストカラー: #555555（ソフトグレー）、補助: #696969
- 背景: #ffffff（白）と #ededed（ライトグレー）の交互セクション
- 文字サイズ: 本文 16px、見出し 20〜28px、CTA 14px
- CTA は border-radius: 0px のシャープコーナー + bg #006450 + 白文字
- Secondary CTA は border 3px solid #006450 のアウトライン
- font-weight: 400（本文）/ 500（見出し）/ 700（CTA）
- ヘッダーのみ shadow（rgba(0,0,0,0.1) 0 2px 2px）、他はフラット
- サブブランドタブ: LIVING / TEAROOM — bg #006450、白文字 28px
- Dosis のセクションタイトルは letter-spacing 3.2px で大きく開ける
- Google Fonts で Noto Sans JP + Dosis を読み込み（Adobe Fonts 不要）
```
