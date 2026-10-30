# DESIGN.md — KIRIN

> KIRIN（https://www.kirin.co.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。
> キリングループのコーポレートサイト。ビール・飲料・乳製品を含む総合飲料メーカー。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表する飲料メーカーのコーポレートサイト。**KIRIN Red（#f00000）** を全面に展開し、pill 型ボタンとウォームクリーム背景で温かみと親しみやすさを表現。情報量の多い商品ポータルでありながら、clean でモダンな印象を維持する企業サイト
- **密度**: コンテンツ重視のポータル型。商品情報・キャンペーン・コラム・IR情報等を多層的に配置。セクションごとに背景色を切り替えてリズムを作る
- **キーワード**: KIRIN Red、pill CTA、Roboto ファースト、ウォームクリーム、年齢確認、飲料ブランド
- **特徴**: **Roboto（Google Fonts）** を先頭に配した欧文ファーストの font-family。日本の消費財メーカーとしては珍しい設計で、Noto Sans JP を和文フォールバックに配置。ボタンは **border-radius 92〜1440px の pill 型** で統一。2つの赤 **#f00000（ブライトレッド）** と **#e6001e（ディープレッド）** を使い分ける。palt 非適用、letter-spacing も normal で、装飾を排したシステマティックな日本語タイポグラフィ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

KIRIN のカラーパレットは2つの赤を軸にした、力強くも温かみのある構成。

- **KIRIN Red** (`#f00000`): メインのブランドカラー。CTA ボタン背景・アクセント見出し・注意文言に使用（rgb 240, 0, 0）。鮮明で力強い赤
- **KIRIN Red Deep** (`#e6001e`): フッター背景・ページトップボタン・ヘッダーアウトラインボタンに使用（rgb 230, 0, 30）。やや深みのある赤で構造的な用途

### Text

- **Text Primary** (`#333333`): 本文テキスト（rgb 51, 51, 51）。純黒を避けたソフトなグレーブラック
- **Text Nav / Heading** (`#222222`): ナビゲーション・一部見出し（rgb 34, 34, 34）。本文より僅かに濃いダーク
- **Text on Red** (`#ffffff`): 赤背景上の白テキスト

### Semantic

- **Caution / Danger** (`#f00000`): 注意書き・年齢確認の強調。ブランドレッドと同色で統一
- **Link Blue** (`#367eb3`): 標準リンクカラー（rgb 54, 126, 179）。商品カード・テキストリンク

### Surface

- **Background** (`#ffffff`): ページ背景
- **Background Warm** (`#faf9f5`): セクション背景のウォームクリーム（rgb 250, 249, 245）。ピックアップ・キャンペーンエリア等に使用。飲料ブランドらしい温もり
- **Background Gray** (`#f9f9f9`): ニュートラルグレーのセクション背景（rgb 249, 249, 249）
- **Footer** (`#e6001e`): フッター背景。KIRIN Red Deep で強い存在感

### Border & Overlay

- **Border** (`#d3d3d4`): 入力欄の枠線・セレクトボックスのボーダー（rgb 211, 211, 212）
- **Carousel Overlay** (`rgba(74, 72, 71, 0.8)`): カルーセルのオーバーレイ。ダーク半透明

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP — フォールバックチェーンの2番目に配置。Google Fonts で提供されるため環境非依存
- **レガシーフォールバック**: ヒラギノ角ゴ Pro W3（macOS）、メイリオ（Windows）、MS Pゴシック（旧Windows）

### 3.2 欧文フォント

- **サンセリフ（プライマリ）**: Roboto — フォールバックチェーンの先頭。Google Fonts。数字・英文の表示品質を優先する設計
- **セリフ・等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 全テキスト共通 — Roboto ファーストの欧文優先スタック */
font-family: Roboto, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro W3", メイリオ, Meiryo,
  "MS Pゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 先頭の Roboto で欧文・数字の表示品質を確保（Google Fonts でクロスプラットフォーム対応）
- Noto Sans JP で和文の統一的な表示を確保（同じく Google Fonts）
- ヒラギノ角ゴ → メイリオ → MS Pゴシック は macOS → Windows のレガシーフォールバック
- Roboto + Noto Sans JP はいずれも Google Fonts のため、preview.html で完全に再現可能

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-09 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H1（年齢確認） | 38px | 400 | 1.5 (57px) | normal | 年齢確認ページ見出し。color: #f00000 |
| H2（メインセクション） | 44px | 700 | 1.25 (55px) | normal | 「商品情報」等のセクション見出し |
| H2（サブセクション） | 32px | 700 | 1.25 (40px) | normal | サブセクション見出し |
| H2（アナウンス） | 18px | 700 | 1.5 (27px) | normal | お知らせ見出し。color: #f00000 |
| H3（ピックアップ） | 24px | 700 | 1.25 (30px) | normal | ピックアップコンテンツ見出し |
| Body（リード文） | 20px | 400 | 1.5 (30px) | normal | ジャーナル導入文等 |
| Body | 16px | 400 | 1.67 (26.72px) | normal | 本文・説明テキスト |
| Caption / Footer | 14px | 400 | 1.5 (21px) | normal | 注釈・フッターテキスト |
| Small / Caution | 12px | 400 | 1.5 (18px) | normal | 注意書き・免責。color: #f00000 |

**ウェイトの特徴**:
- 見出し（H2・H3）とナビゲーションは **weight: 700**、本文・キャプションは **weight: 400** の二段構成
- H1 のみ 400 で、赤色（#f00000）とサイズ（38px）で視覚的な強さを確保

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（24px / 16px）— Roboto + Noto Sans JP の標準的な行間
- **本文（リード文）の行間**: `line-height: 1.5`（30px / 20px）— リードも同比率
- **見出しの行間**: `line-height: 1.25`（H2 44px → 55px / H3 24px → 30px）— コンパクトな見出し間隔
- **本文の字間**: `letter-spacing: normal`（0）— カスタム字間なし
- **見出しの字間**: `letter-spacing: normal`（0）— こちらもカスタム字間なし

**ガイドライン**:
- letter-spacing は**全要素 normal**。palt も非適用で、Roboto / Noto Sans JP のデフォルト字間をそのまま使う設計
- line-height は本文 1.5 / 見出し 1.25 の**二段階構成**
- 飲料メーカーの商品情報サイトとして、装飾を排したシステマティックな組版

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長いURL・商品コードの折り返し */
```

- 日本語固有の禁則処理は特別な設定なし。ブラウザデフォルトに従う
- 商品名・キャンペーン名には日本語と英語が混在するため、overflow-wrap の設定が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。Noto Sans JP のデフォルト字間をそのまま使用
- **kern**: ブラウザデフォルトに委ねる。Roboto は内蔵カーニングテーブルを持つため、font-feature-settings 指定なしでも適切なカーニングが効く
- 装飾的な字詰めを排し、可読性とメンテナンス性を優先する設計

### 3.8 縦書き

- 該当なし。KIRIN コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill 型・赤塗りつぶし）**

KIRIN の CTA は **KIRIN Red 塗りつぶし + 極端な pill 型** が基本。

- Background: `#f00000`
- Text: `#ffffff`
- Border: 1px solid `#f00000`
- Border Radius: **96px**（pill 型）
- Padding: `10px 20px`
- Font Size: 16px
- Font Weight: 400

**Secondary（pill 型・アウトライン）**

- Background: `#ffffff`
- Text: `#f00000`
- Border: 1px solid `#f00000`
- Border Radius: **92px**（pill 型）
- Padding: `11px 20px`

**Header pill（小型・アウトライン）**

- Background: `transparent`
- Text: `#e6001e`
- Border: 1px solid `#e6001e`
- Border Radius: **1440px**（極端な pill 値）
- Padding: `5px 16px 6px`
- Font Size: 14px
- Font Weight: 700

**Page Top（円形）**

- Background: `#e6001e`
- Border: 1px solid `#e6001e`
- Border Radius: **50%**（完全な円形）

**ボタンの考え方**:
- すべてのボタンが **pill 型（border-radius 92〜1440px）** — KIRIN のデザインにおいて角丸やシャープエッジは存在しない
- Primary CTA は **#f00000 塗りつぶし**、Secondary は **#f00000 アウトライン**
- Header のアウトラインボタンのみ **#e6001e（Deep Red）** を使用
- pill 型は親しみやすさと押しやすさを兼ね備え、飲料ブランドの温かみに合致

### Inputs

**検索入力**:
- Background: `#ffffff`
- Border: none
- Font Size: 16px
- Font Weight: 400

**年齢確認入力**:
- Background: `#ffffff`
- Border: 2px solid `#f00000`
- Font Size: 34px
- Font Weight: 400
- Text Color: `#f00000`

**セレクトボックス**:
- Background: `#ffffff`
- Border: 1px solid `#d3d3d4`
- Border Radius: 0px
- Padding: `8px 26px 8px 44px`

### Cards（商品カード）

- Background: `#ffffff`
- Padding: `18px 10px 20px`
- Text Color: `#367eb3`（リンクブルー）
- Shadow: なし（フラット）
- 構成: 商品画像 + 商品名（リンクブルー）

### Navigation

- Link Size: 16px
- Weight: 700
- Line Height: 1.75 (28px)
- Letter Spacing: normal
- Color: `#222222`
- Header Padding: `0 48px`

### Footer

- Background: `#e6001e`（KIRIN Red Deep）
- Text Color: `#ffffff`

---

## 5. Layout Principles

### Spacing Scale

実測値に基づく推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | ヘッダー pill ボタンの上 padding |
| S | 10px | CTA ボタンの縦 padding、商品カード左右 padding |
| M | 20px | CTA ボタンの横 padding、商品カード下 padding |
| L | 48px | ヘッダー横 padding |
| XL | — | セクション間余白（セクション背景切替で視覚分離） |

### Container

- Header Padding (horizontal): `48px`
- セクション間の区切り: 背景色の切り替え（白 → クリーム → グレー）で視覚的に分離

### Grid

- 商品グリッド: デスクトップで複数カラム
- セクションは全幅背景 + コンテンツ幅制約の二層構造

---

## 6. Depth & Elevation

KIRIN は背景色の切り替えとオーバーレイで階層を構成する。box-shadow は最小限。

| Level | 表現 | 用途 |
|-------|------|------|
| 0 | `background: #ffffff` | 通常コンテンツ・商品カード |
| 1 | `background: #faf9f5` | ピックアップ・キャンペーンセクション |
| 1 | `background: #f9f9f9` | ニュートラルセクション |
| 2 | `background: #e6001e` | フッター・ページトップ |
| 3 | `rgba(74, 72, 71, 0.8)` | カルーセルオーバーレイ |

- 背景色の3段（白 → クリーム/グレー → 赤）で面の階層を構成
- シャドウよりも**背景色の温度差**（ウォームクリーム #faf9f5 vs ニュートラルグレー #f9f9f9）でセクションの性格を表現

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Roboto → Noto Sans JP → レガシーフォールバック** の順で完全なスタックを指定する
- CTA ボタンは **pill 型（border-radius 92px 以上）** にする
- Primary CTA は **#f00000 塗りつぶし + 白テキスト** にする
- 見出し（H2・H3）は **font-weight: 700** を使い、本文（Body）は **400** を使う
- セクション背景は `#ffffff`、`#faf9f5`（ウォームクリーム）、`#f9f9f9`（グレー）を交互に使い、リズムを作る
- フッター背景は **#e6001e（Deep Red）** にする
- テキストリンクは **#367eb3（リンクブルー）** にする
- 本文の line-height は **1.5** を使う
- 見出しの line-height は **1.25** を使う
- letter-spacing は **normal** にする（カスタム字間は使わない）
- 年齢確認 UI を含む場合は **#f00000** を強調色とし、入力欄に **2px solid #f00000** のボーダーを使う

### Don't（禁止）

- 明朝体・セリフ系フォントを追加しない（ゴシック体サンセリフ構成がブランドの基本）
- ボタンに角丸（border-radius 8px 等）やシャープエッジ（0px）を使わない（pill 型で統一）
- CTA に **#e6001e（Deep Red）** を使わない（CTA は #f00000。#e6001e はフッター・構造要素用）
- テキストに `#000000`（純黒）を使わない（`#333333` が本文の正値）
- `palt`（font-feature-settings: "palt"）を適用しない（normal がデフォルト設計）
- letter-spacing にカスタム値を設定しない（全要素 normal）
- ウォームクリーム背景 `#faf9f5` を多用しすぎない（メリハリのため白セクションと交互に）
- フォント指定で Roboto を省略しない（欧文の表示品質に直結する）
- リンクテキストに赤（#f00000）を使わない（リンクは #367eb3 ブルー。赤はブランドカラー・CTA・注意書き用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。ハンバーガーナビ化 |
| Tablet | 768〜1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |

### モバイル時の調整

- H2（44px）→ 28〜32px 程度に縮小
- ヘッダー横 padding（48px）→ 16px に縮小
- 商品グリッドは 1〜2カラムに折り返し
- pill 型ボタンの形状はモバイルでも維持
- フッターの赤背景 #e6001e はモバイルでも変更なし

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）
- pill 型ボタンは padding `10px 20px` + font-size 16px のため、実質的なタッチ領域は十分
- 年齢確認の入力欄（font-size 34px）はタッチ操作でも容易な大きさ

### フォントサイズの調整

- モバイルでは本文 14〜16px、見出しはデスクトップの 70〜80% 程度に縮小
- Roboto / Noto Sans JP はいずれも Google Fonts のため、デバイス間で表示が安定

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: KIRIN（キリン）
Origin: キリングループ — ビール・飲料・乳製品を含む日本の総合飲料メーカー
KIRIN Red: #f00000（CTA・アクセント・注意書き）
KIRIN Red Deep: #e6001e（フッター・構造要素）
Link Blue: #367eb3
Text Primary: #333333
Text Nav: #222222
Background: #ffffff
Background Warm: #faf9f5
Background Gray: #f9f9f9
Footer: #e6001e
Border: #d3d3d4
Font: Roboto, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro W3", メイリオ, Meiryo,
      "MS Pゴシック", "MS PGothic", sans-serif
palt: 非適用（font-feature-settings: normal）
letter-spacing: normal（全要素）
Body: 16px / 400 / line-height 1.67
Body Lead: 20px / 400 / line-height 1.5
H2 Main: 44px / 700 / line-height 1.25
H2 Sub: 32px / 700 / line-height 1.25
H3: 24px / 700 / line-height 1.25
Caption: 14px / 400 / line-height 1.5
Nav: 16px / 700 / line-height 1.75
CTA Style: bg #f00000 / text #fff / radius 96px (pill) / padding 10px 20px / size 16px
Secondary CTA: bg #fff / text #f00000 / border 1px solid #f00000 / radius 92px (pill)
Button Shape: pill 型（92〜1440px radius）
Shadow: 背景色の切替で面の階層を表現
```

### プロンプト例

```
KIRIN のデザインシステムに従って、商品一覧ページを作成してください。
- フォント: Roboto, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro W3", メイリオ, Meiryo,
    "MS Pゴシック", "MS PGothic", sans-serif
- font-feature-settings: normal（palt は非適用）
- letter-spacing: normal（カスタム字間なし）
- 本文: 16px / line-height: 1.67 / color: #333333
- H2: 44px / font-weight: 700 / line-height: 1.25
- H3: 24px / font-weight: 700 / line-height: 1.25
- CTA「商品を見る」: bg #f00000 / text #fff / border-radius: 96px (pill) / padding: 10px 20px
- Secondary CTA: bg #fff / text #f00000 / border: 1px solid #f00000 / border-radius: 92px (pill)
- 背景: セクションごとに #ffffff / #faf9f5 / #f9f9f9 を交互に使用
- フッター: bg #e6001e / text #fff
- リンクテキスト: #367eb3
- シャドウは使わず背景色の切り替えで面の階層を作る
```

### 字詰め・組版の重要ポイント

1. **Roboto ファースト**: 日本の消費財メーカーとして珍しい欧文ファーストの font-family。Roboto を省略するとナビゲーションや数字の表示品質が低下する。Roboto と Noto Sans JP はいずれも Google Fonts のため、Web フォント読み込みで環境差を吸収できる
2. **2つの赤の使い分け**: #f00000（ブライトレッド）は CTA・アクセント・注意書き用。#e6001e（ディープレッド）はフッター・構造的な背景用。両方を混ぜずに役割で使い分ける
3. **pill 型ボタンの一貫性**: border-radius 92〜1440px の pill 型がすべてのインタラクティブ要素の基本。角丸（8px 等）やシャープエッジ（0px）は KIRIN のデザイン言語に存在しない
4. **letter-spacing / palt ともに非適用**: Roboto + Noto Sans JP のデフォルト字間をそのまま使う。字詰めの装飾を排したシステマティックな組版
5. **ウォームクリーム背景（#faf9f5）**: 飲料ブランドの温もりを表現する背景色。純白（#ffffff）やニュートラルグレー（#f9f9f9）と交互に使うことで、情報量の多いポータルにリズムを生む
6. **年齢確認 UI**: アルコールブランドとして年齢確認が重要な UI パターン。入力欄は 34px / 2px solid #f00000 の大きく目立つ設計

---

**取得日**: 2026-05-09
**出典**: https://www.kirin.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
