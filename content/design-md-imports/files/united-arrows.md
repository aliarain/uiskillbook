# DESIGN.md — UNITED ARROWS

> UNITED ARROWS（https://www.united-arrows.co.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。
> コーポレートサイト。TypeSquare（Morisawa）Web フォントを採用した、ファッション・エディトリアル構成。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表するセレクトショップの企業サイト。ウォームベージュグレーの背景（#eeebea）に、Morisawa の書体を3系統使い分ける高度なタイポグラフィ設計。ECサイトではなくコーポレート・エディトリアル型で、ブランドの世界観と企業情報を伝えることに徹する
- **密度**: ゆったりとしたエディトリアル型。フルワイドのヒーローセクション、非対称構成、写真とテキストに十分な余白を確保
- **キーワード**: ウォームトーン、エディトリアル、マルチフォント、テラコッタアクセント、ファッション・コーポレート
- **特徴**: **3つの書体系統を目的別に使い分ける**設計が最大の特徴。本文ゴシック（中ゴシックBBB）、ディスプレイゴシック（見出ゴMB31）、欧文セリフ（classico-urw）、数字専用サンセリフ（Manrope）を組み合わせ、YakuHanJP で約物の詰めを制御する。ページ背景が純白ではなく**ウォームベージュグレー #eeebea** であることがブランドトーンの基盤。大見出しには**負の letter-spacing**（-1.5px）を適用するファッション誌的な詰め組みを実践

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

UNITED ARROWS のカラーパレットはウォームニュートラルにテラコッタのアクセントを添えた、抑制的で温かみのある構成。

- **Terracotta** (`#b2542b`): ブランドアクセント。スライダーインジケーター、装飾的な強調要素に使用（rgb 178, 84, 43）。煉瓦・テラコッタを思わせる温かみのある茶褐色
- **Blue** (`#2c7ab9`): セカンダリアクセント。限定的に使用（rgb 44, 122, 185）

### Text & Neutral

- **Text Primary** (`#000000`): 本文・見出しテキスト
- **Text Secondary** (`#6f6f6f`): 補足テキスト、日付、Manrope で表示するメタ情報（rgb 111, 111, 111）
- **Text on Dark** (`#ffffff`): フッター等ダーク背景上のテキスト

### Surface

- **Background** (`#eeebea`): ページ背景 — **純白ではなくウォームベージュグレー**（rgb 238, 235, 234）。サイト全体のトーンを決定づける色
- **Surface Light** (`#f2f1f0`): タグ背景、カード背景等の面（rgb 242, 241, 240）
- **Surface Mid** (`#e6e6e6`): 中間トーンの面（rgb 230, 230, 230）
- **Border** (`#d0d0d0`): 区切り線、ディバイダー（rgb 208, 208, 208）— サイト全体で多用される境界線色
- **Footer BG** (`#404040`): フッター背景 — 純黒ではなくダークグレー（rgb 64, 64, 64）

---

## 3. Typography Rules

### 3.1 和文フォント

UNITED ARROWS は TypeSquare（Morisawa）の Web フォントを2書体採用。さらに YakuHanJP で約物の詰めを制御する。

- **本文ゴシック**: 中ゴシックBBB（Gothic Medium BBB）— Morisawa の中太ゴシック。ナビゲーション、本文、一般テキストに使用
- **ディスプレイゴシック**: 見出ゴMB31（Midashi Go MB31）— Morisawa の見出し専用極太ゴシック。ヒーロー見出し等のインパクトが必要な場面に限定使用
- **約物制御**: YakuHanJP — 括弧・句読点のみを半角幅にするWebフォント。行頭の約物を詰めて整った組版を実現

> **補足**: 中ゴシックBBB と見出ゴMB31 は TypeSquare のドメインライセンスフォント。preview.html では **Zen Kaku Gothic New**（Google Fonts、Morisawa 系で字形が近い）を代替として使用する

### 3.2 欧文フォント

- **セリフ（セクションタイトル・ラベル）**: classico-urw — URW 製のクラシカルなセリフ体。セクションタイトル、英語ラベル等に使用
- **サンセリフ（数字・日付）**: Manrope — ジオメトリックサンセリフ。日付、数値データ等の表示に限定使用

> **補足**: classico-urw は Adobe Fonts 経由で提供。preview.html では **Cormorant Garamond**（Google Fonts）を代替として使用する。Manrope は Google Fonts で利用可能

### 3.3 font-family 指定

```css
/* 本文・ナビゲーション — 中ゴシックBBB スタック */
font-family: YakuHanJP, "中ゴシックBBB", "Gothic Medium BBB",
  YuGothic, "游ゴシック体", Meiryo, "メイリオ",
  Osaka, "MS PGothic", arial, helvetica, sans-serif;

/* ヒーロー見出し — 見出ゴMB31 スタック */
font-family: YakuHanJP, "見出ゴMB31", "Midashi Go MB31", sans-serif;

/* 英語セクションタイトル・ラベル — classico-urw セリフ */
font-family: classico-urw, YakuHanJP, "中ゴシックBBB", sans-serif;

/* 数字・日付 — Manrope */
font-family: Manrope, sans-serif;
```

**フォールバックの考え方**:
- YakuHanJP を先頭に配置し、約物（括弧・句読点）のみ半角幅グリフで置換。それ以外の文字は次のフォントにフォールバック
- 中ゴシックBBB が利用できない環境では游ゴシック → メイリオ → Osaka → MS PGothic の順で和文ゴシックにフォールバック
- 見出ゴMB31 はフォールバックが少なく、TypeSquare 未対応環境ではシステムのデフォルト sans-serif に落ちる
- classico-urw は欧文のみのフォントで、日本語部分は中ゴシックBBB にフォールバック

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H2 Display | 見出ゴMB31 | 60px | 700 | 1.2 (72px) | 0.02em (1.2px) | ヒーローセクション見出し |
| H2 Section | 中ゴシックBBB | 50px | 500 | 0.9 (45px) | -0.03em (-1.5px) | セクション大見出し。負の字間 |
| H3 Serif | classico-urw | 40px | 400 | 1.2 (48px) | -0.03em (-1.2px) | 英語セクションサブ見出し |
| H3 Notice | 中ゴシックBBB | 16px | 500 | — | 0.02em (0.32px) | お知らせ・通常サイズ見出し |
| Body Lead | 中ゴシックBBB | 26px | 500 | 1.85 (48px) | 0.02em (0.52px) | リード文・導入パラグラフ |
| Body | 中ゴシックBBB | 16px | 500 | 1.875 (30px) | 0.02em (0.32px) | 本文テキスト |
| Tag | 中ゴシックBBB | 12px | 500 | — | 0.03em (0.36px) | タグ・ラベル |
| Small / Date | Manrope | 10-12px | 400 | — | — | 日付・メタ情報 |
| H1 Logo | 中ゴシックBBB | 16px | 500 | — | — | ロゴ横テキスト（控えめ） |
| Input | 中ゴシックBBB | 16px | 500 | — | — | 入力欄テキスト |

**ウェイトの特徴**:
- 中ゴシックBBB（本文・ナビ）は一貫して **weight: 500**（Medium）
- 見出ゴMB31（ディスプレイ）は **weight: 700** で最大のインパクト
- classico-urw（英語セリフ）は **weight: 400** で繊細な印象
- Manrope（数字）は **weight: 400** で控えめな存在感

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.875`（30px / 16px）— 日本語テキストに十分なゆとりを持たせた値
- **リード文の行間**: `line-height: 1.85`（48px / 26px）— 本文とほぼ同比率で一貫
- **ディスプレイ見出しの行間**: `line-height: 1.2`（72px / 60px）— コンパクト
- **大セクション見出しの行間**: `line-height: 0.9`（45px / 50px）— **1.0 未満のタイトな行間**。ファッション誌的な詰め組み
- **本文の字間**: `letter-spacing: 0.02em`（0.32px @ 16px）— 軽い字間で可読性を向上
- **大見出しの字間**: `letter-spacing: -0.03em`（-1.5px @ 50px）— **負の letter-spacing** でタイトに詰める
- **英語セリフ見出しの字間**: `letter-spacing: -0.03em`（-1.2px @ 40px）— 同様に負の字間

**ガイドライン**:
- **サイズに応じて letter-spacing の方向が反転する**のが最大の特徴。本文は正の字間（+0.02em）、大見出しは負の字間（-0.03em）
- 行間も同様に二極的: 本文は 1.875（広め）、大見出しは 0.9（詰め）
- この緩急のコントラストがファッション・エディトリアルの印象を生む

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word;     /* 長いURLや英単語の折り返し */
```

- YakuHanJP が約物の行頭詰めを処理するため、従来のCSS禁則設定への依存度は低い
- コーポレートサイトのため、長文の折り返しは限定的

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。TypeSquare フォント（中ゴシックBBB、見出ゴMB31）は palt を使わず、代わりに YakuHanJP で約物のみ半角化する設計
- **kern**: ブラウザデフォルトに委ねる
- YakuHanJP + font-feature-settings: normal の組み合わせは、約物だけを詰めて本文のデフォルト字間を維持する方針

### 3.8 縦書き

- 該当なし。UNITED ARROWS コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Tag ボタン（主要なインタラクティブ要素）**

UNITED ARROWS のコーポレートサイトには強い CTA は存在しない。主要なインタラクティブ要素はタグ・カテゴリボタン。

- Background: `#f2f1f0`
- Text: `#000000`
- Border Radius: **2px**（ほぼ直角に近い微かな角丸）
- Padding: `2px 8px`
- Font Size: 12px
- Font Weight: 500
- Letter Spacing: 0.36px (0.03em)

**検索・言語切り替え**

- アイコンベースの最小限なデザイン
- テキストボタンではなくアイコンで表現

**ボタンの考え方**:
- コーポレートサイトのため、EC的な「購入」「カートに入れる」CTAは存在しない
- インタラクションは控えめで、タグによるフィルタリングとナビゲーションリンクが中心
- 角丸は最小限の 2px で、ほぼシャープエッジに近い

### Inputs

- Background: `#ffffff`
- Border: コンテキスト依存
- Border Radius: 実測値に準拠
- Padding: 推定 8-16px
- Font Size: 16px
- Font Weight: 500
- Font Family: 中ゴシックBBB スタック（Hiragino Sans フォールバック含む）

### Cards

- Background: `#f2f1f0` または `#ffffff`
- Border: `1px solid #d0d0d0`（または border なし）
- Border Radius: 0-2px
- Shadow: なし
- 構成: エディトリアル写真 + テキストの非対称レイアウト

### Navigation

- Font: 中ゴシックBBB スタック
- Size: 16px
- Weight: 500
- Color: `#000000`
- Letter Spacing: 0.02em

### Footer

- Background: `#404040`（ダークグレー）
- Text: `#ffffff`
- Padding: `0 144px 90px`（水平方向に広い余白）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 2px | タグボタン上下 padding |
| S | 8px | タグボタン左右 padding |
| M | 30px | 一般的なセクション間余白 |
| L | 90px | フッター下部 padding |
| XL | 144px | フッター水平 padding |

### Container

- Max Width: フルワイドレイアウト（ヒーローセクション）+ 左右 144px 余白のコンテンツ領域
- Padding (horizontal): `144px`（デスクトップ時）

### Grid

- フルワイドヒーロー + 非対称のテキスト・画像構成
- 固定カラム数ではなく、コンテンツに応じた自由なレイアウト

---

## 6. Depth & Elevation

UNITED ARROWS はシャドウをほぼ使わない。ウォームベージュグレーの色差とボーダーで面の階層を構成する。

| Level | Method | 用途 |
|-------|--------|------|
| 0 | `background: #eeebea` | ページ背景 |
| 1 | `background: #f2f1f0` | タグ、カード等のサブ面 |
| 2 | `border: 1px solid #d0d0d0` | セクション区切り、コンテンツ境界 |
| 3 | `background: #404040` | フッター（ダークゾーン） |

- 白（#ffffff）をベースにするのではなく、ウォームベージュグレー（#eeebea）がデフォルトの面
- box-shadow によるエレベーションは使用しない
- 色の温度差（暖色系の面 → ダークグレーのフッター）で視覚的な区切りを作る

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景は **#eeebea（ウォームベージュグレー）** を使う（純白にしない）
- フォントは **3系統（中ゴシックBBB / 見出ゴMB31 / classico-urw）+ Manrope** を目的に応じて使い分ける
- YakuHanJP を font-family の先頭に配置し、約物（括弧・句読点）を半角幅にする
- 大見出し（40px 以上）には **負の letter-spacing**（-0.03em）を適用し、ファッション誌的なタイトな組みにする
- 本文には **正の letter-spacing**（0.02em）を適用し、可読性を確保する
- 本文の line-height は **1.875** を使う
- テラコッタ **#b2542b** をアクセントカラーとして控えめに使う
- フッターは **#404040（ダークグレー）** + 白テキストにする
- ボーダーには **#d0d0d0** を一貫して使う
- font-feature-settings は **normal**（palt を使わず、YakuHanJP に約物制御を任せる）

### Don't（禁止）

- ページ背景を `#ffffff`（純白）にしない（#eeebea のウォームトーンがブランドの核心）
- フッター背景を `#000000`（純黒）にしない（#404040 のダークグレーが正値）
- 本文に見出ゴMB31 を使わない（見出ゴMB31 はディスプレイ専用）
- 小さいテキスト（16px 以下）に負の letter-spacing を適用しない（可読性が損なわれる）
- 大見出しに正の letter-spacing を適用しない（エディトリアルのタイト感が失われる）
- palt（font-feature-settings: "palt"）を適用しない（YakuHanJP と役割が重複し、意図しない詰めが発生する）
- box-shadow を使わない（面の階層は背景色とボーダーで表現する）
- テラコッタ以外の鮮やかな色をアクセントに追加しない（ウォームニュートラルの統一感を崩す）
- 角丸を 4px 以上にしない（2px 以下の抑制的な角丸が基本）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ナビはハンバーガー化 |
| Tablet | 768-1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |

### モバイル時の調整

- H2 Display（60px）→ 32-40px 程度に縮小
- H2 Section（50px）→ 28-32px 程度に縮小
- H3 Serif（40px）→ 24-28px 程度に縮小
- 水平 padding（144px）→ 20-30px に縮小
- フルワイドヒーローは維持しつつ、テキストサイズを調整
- 負の letter-spacing はモバイルでも維持（ブランドのタイポグラフィ特性）
- Manrope の日付表示サイズはモバイルでも 10-12px を維持

### タッチターゲット

- タグボタン（padding 2px 8px）はモバイルで最低 44px のタッチ領域を確保する必要がある
- ナビゲーションリンクは十分な行間（line-height 1.875 相当）でタップしやすさを確保

### フォントサイズの調整

- 本文 16px はモバイルでも維持
- リード文 26px → 20-22px 程度に縮小
- 書体の使い分け（3系統 + Manrope）はデバイスサイズに関わらず維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: UNITED ARROWS（ユナイテッドアローズ）
Origin: 日本のセレクトショップ。コーポレートサイト（EC ではない）
Terracotta Accent: #b2542b
Blue Accent: #2c7ab9
Text Primary: #000000
Text Secondary: #6f6f6f
Background: #eeebea（ウォームベージュグレー — 純白ではない）
Surface Light: #f2f1f0
Border: #d0d0d0
Footer BG: #404040

Body Font: YakuHanJP, "中ゴシックBBB", "Gothic Medium BBB",
           YuGothic, "游ゴシック体", Meiryo, "メイリオ",
           Osaka, "MS PGothic", arial, helvetica, sans-serif
Display Font: YakuHanJP, "見出ゴMB31", "Midashi Go MB31", sans-serif
Serif Font: classico-urw, YakuHanJP, "中ゴシックBBB", sans-serif
Number Font: Manrope, sans-serif

palt: 非適用（font-feature-settings: normal）
約物制御: YakuHanJP（先頭指定で括弧・句読点のみ半角化）

Body: 16px / 500 / line-height 1.875 / letter-spacing 0.02em
Body Lead: 26px / 500 / line-height 1.85 / letter-spacing 0.02em
H2 Display: 60px / 700 / 見出ゴMB31 / line-height 1.2 / letter-spacing 0.02em
H2 Section: 50px / 500 / line-height 0.9 / letter-spacing -0.03em
H3 Serif: 40px / 400 / classico-urw / line-height 1.2 / letter-spacing -0.03em
Small/Date: 10-12px / Manrope 400
Tag: 12px / 500 / letter-spacing 0.03em

Tag Style: bg #f2f1f0 / text #000 / radius 2px / padding 2px 8px
Button Radius: 2px（ほぼ直角）
Shadow: 使用しない
```

### プロンプト例

```
UNITED ARROWS のデザインシステムに従って、コーポレートページを作成してください。
- ページ背景: #eeebea（ウォームベージュグレー。純白ではない）
- 本文フォント: YakuHanJP, "中ゴシックBBB", "Gothic Medium BBB",
    YuGothic, "游ゴシック体", Meiryo, "メイリオ", Osaka, "MS PGothic",
    arial, helvetica, sans-serif
- ヒーロー見出し: YakuHanJP, "見出ゴMB31", "Midashi Go MB31", sans-serif
    / 60px / font-weight: 700 / letter-spacing: 0.02em
- 英語セクションタイトル: classico-urw（セリフ）/ 40px / font-weight: 400
    / letter-spacing: -0.03em（負の字間）
- 数字・日付: Manrope / 10-12px / font-weight: 400
- font-feature-settings: normal（palt は非適用、YakuHanJP で約物制御）
- 本文: 16px / font-weight: 500 / line-height: 1.875 / letter-spacing: 0.02em
- セクション大見出し: 50px / line-height: 0.9（1.0 未満）/ letter-spacing: -0.03em
- タグ: bg #f2f1f0 / 12px / radius 2px / padding 2px 8px
- ボーダー: #d0d0d0
- フッター: bg #404040 / text #ffffff / padding 0 144px 90px
- テラコッタアクセント: #b2542b（控えめに使用）
- box-shadow は使用しない
```

### 字詰め・組版の重要ポイント

1. **3書体 + 1数字フォントの使い分け**: 中ゴシックBBB（本文）、見出ゴMB31（ディスプレイ）、classico-urw（英語セリフ）、Manrope（数字）を目的に応じて使い分ける。全てに YakuHanJP を先頭に配置して約物制御を行う
2. **サイズ依存の letter-spacing 反転**: 本文（16px）は正の字間 +0.02em、大見出し（40-50px）は負の字間 -0.03em。このコントラストがファッション・エディトリアルの印象を生む設計。サイズに関わらず一律の letter-spacing を適用すると雰囲気が崩れる
3. **ウォームベージュグレー背景 #eeebea**: 純白ではないページ背景がブランドトーンの根幹。この色を白に変えると、サイト全体の温かみが失われる
4. **見出ゴMB31 の限定使用**: 60px のヒーロー見出しのみに使う極太ディスプレイゴシック。本文や小見出しに使うとインパクトが分散する
5. **YakuHanJP による約物制御**: palt（font-feature-settings: "palt"）ではなく、YakuHanJP フォントの先頭指定で約物の半角化を実現。palt はグリフ全体のプロポーショナルメトリクスを変更するが、YakuHanJP は約物のみを対象とするため、本文の字間に影響を与えずに約物を詰められる
6. **TypeSquare フォントの代替**: 中ゴシックBBB と見出ゴMB31 は Morisawa の商用フォント（TypeSquare 経由）。AIエージェントが preview.html を生成する場合は **Zen Kaku Gothic New**（Google Fonts）で代替する。classico-urw は **Cormorant Garamond**（Google Fonts）で代替。Manrope は Google Fonts でそのまま利用可能

---

**取得日**: 2026-05-09
**出典**: https://www.united-arrows.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
