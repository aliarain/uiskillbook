# DESIGN.md — Suntory（サントリー）

> サントリーホールディングス公式コーポレートサイト（https://www.suntory.co.jp/）のデザイン仕様書。
> 「水と生きる」をコーポレートメッセージに掲げる総合飲料・食品・健康・サービス企業。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「水」のブランドメッセージを反映した、爽やかで透明感のあるブルー基調のコーポレートデザイン。製品・キャンペーン・ニュースを並列に扱う情報量豊富なグローバル企業サイト
- **密度**: 情報密度は高め（多事業ポートフォリオ全体を俯瞰させるレイアウト）。ヒーロー領域は大きなプロモ画像、本体はカードグリッド
- **キーワード**: 透明感、水、ブルー、コーポレート、信頼、スケール
- **特徴**: **CTA はすべて pill 型（border-radius 30px）で「白地 + #ccc 細罫線」の outline ボタン**。塗り CTA はニュースリリースの「検索する」など機能ボタンに限定。**和文は OS の游ゴシック / ヒラギノを優先したシステムスタック**で、Webフォントを読み込まない軽量設計。テキスト色は純黒 `#000000` を多用するのが特徴で、letter-spacing 1.12px（約 0.03〜0.07em）で広めの字間

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Suntory Blue** (`#0075a8`): ニュースリリース日付バッジ・記事カテゴリラベルの塗り色。「水と生きる」を象徴する深い青。**コーポレートのアクセントブルー**
- **Suntory Light Blue** (`#5bc2dc`): ヒーロー上の「最新のお知らせ」吹き出しなど、軽やかなアクセント

### Text

- **Text Primary** (`#000000`): 本文・見出しの基本色。**純黒を使う**点が珍しい
- **Text Secondary** (`#333333`): ニュースページ本文・補足テキストの濃いグレー
- **Text Caption** (`#333333` 軽量): キャプション・小見出し

### Surface（面色）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface Primary** (`#edf4f7`): **最頻出の面色**。ニュースカードの背景、カテゴリピル背景、検索フィールド背景。淡い水色がかった白で「水のブランド」を演出
- **Surface 2** (`#f5f5f5`): 検索ボタン背景など補助面

### CTA / Button

- **CTA Outline Border** (`#cccccc`): outline pill CTA の細罫線
- **CTA Outline BG** (`#ffffff`): outline CTA の白背景
- **CTA Solid Blue** (`#0075a8`): 機能 CTA（「検索する」等、`border-radius 8px`）
- **Category Tag BG** (`#edf4f7`): 記事カテゴリラベルの薄い水色面（`border-radius 8px`）

> **Note**: Suntory のサイトは **「水色がかった白（#edf4f7）」と「深い青（#0075a8）」のコントラスト** で水のブランドアイデンティティを表現する。**原色や強いビビッドカラーは使わず**、青系のなかでトーンを揃える。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（システムスタック）**:
- ヒラギノ角ゴ W3（macOS、最優先。`"ヒラギノ角ゴ W3"` という表記でカナ込みで指定）
- Hiragino Kaku Gothic Pro（Pro: ProN ではない点に注意）
- 游ゴシック Medium / Yu Gothic Medium（Windows 10+ / macOS）
- メイリオ / Meiryo（Windows）

**ニュースページの一部では `"ヒラギノ角ゴ Pro W3"` と表記**: `body` には `Hiragino Kaku Gothic ProN` がデフォルト指定されているが、コンポーネント単位では `ヒラギノ角ゴ W3` / `ヒラギノ角ゴ Pro W3` の Pro（ProN ではない）が使われている

### 3.2 欧文フォント

- **Webフォントは未使用**。OS フォントの Helvetica / Arial が暗黙のフォールバックを担う
- 検索ボタンなどシステム button 要素は Arial にフォールバック

### 3.3 font-family 指定

```css
/* 本文・UI 全般（コーポレートトップ） */
font-family: "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "Yu Gothic Medium", "游ゴシック Medium", メイリオ, Meiryo, sans-serif;

/* ニュースページ本文 */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "sans-serif";

/* body デフォルト */
font-family: "Hiragino Kaku Gothic ProN";
```

**フォールバックの考え方**:
- **和文先頭**（OS 内蔵フォント優先）。Webフォントを読み込まないため**ページが軽い**
- macOS: ヒラギノ角ゴ → Yu Gothic
- Windows: 游ゴシック → メイリオ
- Pro と ProN の使い分けが**コンポーネントごとに異なる**点が独特（コーポレートトップと News サイトで指定が違う）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | 用途 |
|------|------|------|--------|-------------|------|
| Hero h2 | ヒラギノ角ゴ W3 | 36.65px | 700 | 64.13px (1.75) | ヒーロー大見出し（letter-spacing 1.12px） |
| Section h2 (sub) | ヒラギノ角ゴ W3 | 28.45px | 700 | 49.78px (1.75) | 小区分見出し |
| Section h3 (news) | ヒラギノ角ゴ Pro W3 | 28px | 700 | 63.84px (2.28) | News ページ大見出し |
| Sub-Heading p | ヒラギノ角ゴ W3 | 24.42px | 700 | 48.83px (2.0) | 大きめのリード文 |
| Item Title | ヒラギノ角ゴ W3 | 18px | 700 | 18px (1.0) | カードタイトル（nav） |
| Body | ヒラギノ角ゴ Pro W3 | 16–16.13px | 400–700 | 24–28px (1.5–1.75) | 本文 |
| Sub Nav | ヒラギノ角ゴ W3 | 15px | 400–700 | 19.99–28px (1.33–1.87) | グローバルナビ |
| Caption | ヒラギノ角ゴ W3 | 14.11–14px | 400–700 | 14.11–24.7px (1.0–1.75) | キャプション |
| Small | ヒラギノ角ゴ W3 | 12–13px | 400–700 | 12–16px (1.0–1.33) | 注釈・ラベル |
| Mini | ヒラギノ角ゴ W3 | 11px | 400 | 11px (1.0) | 最小注釈 |

### 3.5 行間・字間

- **本文 line-height**: `1.5` 〜 `1.75`（標準は `1.7`）
- **大見出しの line-height**: `1.75` 〜 `2.28`（h2 は 1.75、News h3 は 2.28 と非常にゆったり）
- **小見出し・ラベル line-height**: `1.0`〜`1.4`（ピル状の単行ラベルは 1.0）
- **letter-spacing 1.12px**: 16〜36px の見出しに広めの字間。**約 0.03〜0.07em** に相当
- **本文の letter-spacing は normal**（字間は詰めない）

### 3.6 禁則処理・改行ルール

- **デフォルト挙動**を尊重し、`word-break: keep-all` などは指定しない
- News 本文は `line-height 1.7` で読みやすさを確保

### 3.7 OpenType機能

- **`font-feature-settings: normal`**: `palt` / `kern` などの Web フォント前提機能は使用しない
- **letter-spacing 1.12px による物理的字間調整** で代替

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA (Outline Pill)
- 背景: `#ffffff`
- 罫線: `1px solid #cccccc`
- 文字色: `#000000`
- font-weight: 700
- font-size: 16.13px
- letter-spacing: 1.12px (0.07em)
- border-radius: **30px (pill)**
- padding: `20px 40px 20px 20px`（右に余白を多めに取り、矢印アイコン領域を確保）
- 用途: 「すべての商品一覧」「キャンペーン一覧」「ニュースリリース一覧」

#### Functional CTA (Solid Blue)
- 背景: `#0075a8`
- 文字色: `#ffffff`
- font-weight: 700
- font-size: 20px / line-height 30px
- border-radius: **8px**（pill ではない）
- 用途: フォームの「検索する」ボタンなど

### Tags / Category Pills

- 背景: `#edf4f7`（薄い水色面）
- 文字色: `#333333`
- font-weight: 700
- font-size: 16px / line-height 24px
- border-radius: **8px**
- padding: `8px 16px`
- 用途: 記事カテゴリラベル（商品 / キャンペーン・CM / グループ会社）

### Badges (Date / Category)

- 背景: `#0075a8`（Suntory Blue）
- 文字色: `#ffffff`
- font-weight: 700
- 用途: ニュースリリースのリリース日・カテゴリーバッジ

### Cards

- 背景: `#edf4f7` または `#ffffff`
- 罫線: なし or 極薄
- 影: なし（フラットデザイン）
- 角丸: 0px〜8px

### Inputs (検索フィールド)

- 背景: `#edf4f7`
- 文字色: `#333333`
- font-size: 16px / line-height 24px
- border-radius: 8px
- padding: 8px 16px

---

## 5. Layout Principles

- **コンテンツ幅**: 1200px〜1280px のラージコンテナ
- **ヒーロー**: 全幅画像 + 大型タイポ（h2 36.65px）
- **セクション間余白**: 大きめ（h2 line-height 64px は約 75px の縦の塊として配置）
- **カードグリッド**: 商品・ニュース・キャンペーンを 3 列または 4 列で平等に並べる
- **グリッド**: ニュースリリースは記事カードを縦積みリスト or 2 列カード
- **多事業ポートフォリオ表現**: 各事業領域（飲料・食品・酒類・健康・外食・グループ）を並列のリンクブロックで提示

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**フラットデザインを徹底**
- **段階表現**: 影ではなく**面色の差（#ffffff vs #edf4f7）** で奥行きを作る
- **罫線**: 細い `1px solid #cccccc` で要素を区切る

---

## 7. Do's and Don'ts

### Do's

- **CTA は pill (border-radius 30px) の outline ボタン**を使う（白地 + #ccc 細罫線）
- **薄い水色 #edf4f7 をベース面**に使い、純白とのコントラストで層を作る
- **アクセントは `#0075a8` の Suntory Blue** に絞る
- **見出しに letter-spacing 1.12px の広めの字間**を入れる
- **ヒラギノ角ゴ・游ゴシックの OS フォントを優先**する（Webフォント不使用）
- **影なし・フラットデザイン**を徹底する

### Don'ts

- **濃い影や強いグラデーションを使わない**（フラット主義）
- **CTA に塗り（solid）を多用しない** — outline が基本、solid は機能ボタンのみ
- **赤・黄など暖色系の原色を使わない**（青系トーンを統一）
- **行間を詰めすぎない** — 大見出しは line-height 1.75 以上を確保
- **letter-spacing を 0 にしない** — 見出しは 1.12px の物理字間を入れる

---

## 8. Responsive Behavior

- デスクトップ: マルチカラム（3〜4 列のカードグリッド）
- タブレット (768〜1024px): 2 列に折り畳み
- モバイル (〜767px): 1 列、ヒーローは縦長クロップ
- グローバルナビはハンバーガーメニュー（`<nav>` の hidden 切替）
- フォントサイズはほぼ固定（rem ではなく px 指定が中心）

---

## 9. Agent Prompt Guide

Suntory らしい UI を生成するときは以下を伝えるとよい：

```
- font-family: "ヒラギノ角ゴ W3", "Hiragino Kaku Gothic Pro", "Yu Gothic Medium", メイリオ, sans-serif
- 本文 line-height: 1.7、大見出し 1.75〜2.0
- letter-spacing: 1.12px (約 0.05em) を見出しに適用
- ブランドカラー: #0075a8 (Suntory Blue)、ライトブルー: #5bc2dc
- ベース面色: #edf4f7（薄い水色面）+ #ffffff
- CTA: outline pill — 白地 + #cccccc 細罫線、border-radius 30px、padding 20px 40px 20px 20px、font-weight 700
- 機能 CTA: solid #0075a8、border-radius 8px
- 影なし（フラットデザイン）
- 「水と生きる」のブランドメッセージ — 透明感、青基調、コーポレートな信頼感
- Webフォント不使用（OS フォントで構成）
```
