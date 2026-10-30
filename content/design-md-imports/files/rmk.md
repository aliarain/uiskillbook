# DESIGN.md — RMK

> RMK（https://www.rmkrmk.com/）のデザイン仕様書。
> 2026-05-20 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: Kanebo（花王グループ）が展開する日本のラグジュアリーコスメティクスブランド。エディトリアルかつ温かみのある洗練を追求し、臨床的・無機質な印象を避けたデザイン。**Neue Helvetica World**（Monotype のライセンスフォント）に游ゴシック体をフォールバックとして組み合わせる
- **密度**: ゆったりとしたエディトリアル型。大きなビジュアルを主役とし、テキストは控えめに添える。ビューティーブランドでありながら雑誌の誌面に近い構成
- **キーワード**: ウォームソフィスティケーション、デュアルテーマ（ダーク/ライト）、エディトリアル、ウォームグレー、温かみのあるラグジュアリー
- **特徴**: **ダーク/ライトのデュアルテーマ構造**が最大の特徴。TOPページは `#4F4F4F`（ウォームダークグレー）背景のダークテーマ、商品ページは `#ffffff` 白背景 + `#CBC4BC`（ウォームベージュ）ヘッダーのライトテーマ。ヘッダー・フッターには `#776F6B`（ブラウニッシュグレー）を配し、パレット全体が**黄みを帯びたウォームグレー系**で統一される。一般的なコスメブランドのクールグレーや純白基調とは一線を画す。CTA は `#776F6B` 塗りつぶし + radius 5px の穏やかな角丸。`font-feature-settings: normal`（palt なし）

---

## 2. Color Palette & Roles

### Brand（ブランドカラー — ウォームグレーファミリー）

RMK のカラーパレットは**温かみのあるグレー系**で統一される。冷たいブルーグレーではなく、黄〜赤みを帯びたブラウニッシュグレーが特徴。

- **Warm Brown Gray** (`#776F6B`): ヘッダー背景（TOP）・フッター背景・CTA ボタン — ブランドのアクセントカラー
- **Warm Dark Gray** (`#4F4F4F`): TOP ページ背景・レビューセクション背景 — ダークテーマの基調色
- **Dark Section Gray** (`#434343`): ランキング・その他セクション背景 — やや暗めのダークセクション
- **Button Gray** (`#6F6F6F`): セカンダリボタン背景
- **Warm Beige** (`#CBC4BC`): 商品ページのヘッダー背景 — ライトテーマ時のアクセント

### Functional

- **Alert Orange** (`#F84300`): 閉じるボタン等のアクセント（限定的に使用）

### Text

- **Text on Dark** (`#ffffff`): ダークテーマ上の本文テキスト
- **Text on Light** (`#4F4F4F`): ライトテーマ上の本文テキスト — 背景と同じウォームダークグレー

### Surface & Border

- **Surface Dark** (`#4F4F4F`): TOP ページ背景
- **Surface Light** (`#F4F4F4`): 商品ページ背景
- **Surface White** (`#ffffff`): カード・タグ背景
- **Mega Menu (TOP)** (`rgba(119, 111, 108, 0.95)`): ダークテーマ時のメガメニュー（半透明ウォームグレー）
- **Mega Menu (Product)** (`rgba(255, 255, 255, 0.95)`): ライトテーマ時のメガメニュー（半透明白）
- **Border Default** (`#E2E2E2`): タグ・区切り線
- **Input Border** (`#D1D1D1`): フォーム入力欄

### Theme Mapping

| Token | TOP（ダーク） | PRODUCTS（ライト） |
|-------|---------------|---------------------|
| --main-bg | `#4F4F4F` | `#F4F4F4` |
| --header-bg | `#776F6B` | `#CBC4BC` |
| --megamenu-bg | `rgba(119,111,108,0.95)` | `rgba(255,255,255,0.95)` |
| --footer-bg | `#776F6B` | `#4F4F4F` |
| --main-text | `#ffffff` | `#4F4F4F` |
| --main-text-nega | `#4F4F4F` | `#ffffff` |

---

## 3. Typography Rules

### 3.1 和文フォント

- **游ゴシック体** / **YuGothic** / **Yu Gothic**: 和文テキストの主力。ヒラギノは使用しない

### 3.2 欧文フォント

- **Neue Helvetica World**（Monotype）: 3ウェイト使い分け
  - **Neue-HelveticaR-World-45-Light**: ライトウェイト
  - **Neue-HelveticaR-World-55-Roman**: レギュラーウェイト（本文）
  - **Neue-HelveticaR-World-75-Bold**: ボールドウェイト（見出し）
- **Helvetica Neue**: フォールバック
- **Helvetica**: レガシーフォールバック

> **注意**: Neue Helvetica World は Monotype のライセンスフォント。preview.html では **Inter**（Google Fonts）を代替として使用する。同じくスイス系ネオグロテスクで字形が近い。

### 3.3 font-family 指定

```css
/* 本文・標準 */
font-family: Neue-HelveticaR-World-55-Roman, Neue-HelveticaR-World-75-Bold,
             Neue-HelveticaR-World-45-Light, "Helvetica Neue", Helvetica,
             游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif;

/* ナビゲーション・ヘッダー（短縮版） */
font-family: Neue-HelveticaR-World-55-Roman,
             游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif;

/* 商品説明 h3（和文専用） */
font-family: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**: Neue Helvetica World を先頭に指定し、欧文は Helvetica 系のグリフで表示。和文のみ游ゴシック体以降にフォールバック
- h3 の商品説明では **欧文フォントなし**で游ゴシック体のみを指定。コンテンツ領域で和文の統一感を出す意図
- Neue Helvetica World の3ウェイトを font-family に併記する独特の指定方法（通常は font-weight で切り替えるが、RMK は font-family 自体にウェイト名を含める）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 | Neue Helvetica + 游ゴシック | 36px | 500 | 1.1 | normal | ヒーロータイトル |
| H2 Section (EN) | Neue Helvetica + 游ゴシック | 30px | 500 | 1.6 | 0.067em (2px) | セクション英語見出し |
| H2 Section (JA) | Neue Helvetica + 游ゴシック | 20px | 400 | 1.0 | normal〜0.025em (0.5px) | セクション日本語見出し |
| H3 Product | 游ゴシック体のみ | 14px | 700 | 1.71 | normal〜0.036em (0.5px) | 商品名（和文専用フォント） |
| Subtitle (ja-title) | Neue Helvetica + 游ゴシック | 14px | 700 | 1.2 | 0.143em (2px) | 日本語サブタイトル |
| Body | Neue Helvetica + 游ゴシック | 14px | 400 | 1.43 | normal | 標準本文 |
| Body Description | Neue Helvetica + 游ゴシック | 14px | 400 | 1.71 | normal | 商品説明テキスト（行間広め） |
| Small / Price | Neue Helvetica + 游ゴシック | 12px | 400 | 1.5 | normal | 価格・補足テキスト |
| Nav Link | Neue Helvetica + 游ゴシック | 12px | 400 | 1.0 | normal | ナビゲーションリンク |
| Nav Bold | Neue Helvetica + 游ゴシック | 14px | 700 | 1.43 | normal | ナビゲーション太字リンク |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.43`（20px / 14px）— 日本語としてはやや詰め気味の行間
- **本文（説明）の行間**: `line-height: 1.71`（24px / 14px）— 商品説明用のゆったりした行間
- **H1 の行間**: `line-height: 1.1`（39.6px / 36px）— タイトな見出し行間
- **H2 英語の行間**: `line-height: 1.6`（48px / 30px）— ゆったりした英語見出し
- **英語セクション見出しの字間**: `letter-spacing: 0.067em`（2px / 30px）— ワイドスペーシング
- **本文の字間**: `letter-spacing: normal` — 字間の調整なし

**ガイドライン**:
- RMK のテキスト階層は本文 14px を基準に、H1 36px → H2 30px/20px → H3/Body 14px → Small 12px と標準的に推移する
- letter-spacing は英語セクション見出しと ja-title サブタイトルのみに 2px を設定。本文には適用しない
- 商品説明テキスト（line-height: 1.71）と標準本文（line-height: 1.43）の使い分けが重要

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- コスメブランドサイトのため、商品名・成分名等が長くなる場合はコンテナ幅で自然改行

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt なし */
```

- **palt は適用しない**: RMK は `font-feature-settings: normal` を使用。プロポーショナル字詰めは行わない
- 游ゴシック体のデフォルトのメトリクスをそのまま使用し、自然な文字間隔を保つ

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし — "インフォメーション一覧へ"）**

RMK の CTA は **ウォームブラウングレー #776F6B の塗りつぶし + radius 5px**。ブランドヘッダーと同色で、穏やかな角丸が温かみを与える。

- Background: `#776F6B`
- Text: `#ffffff`
- Border Radius: **5px**
- Padding: 13px 0px 17px（横幅は親要素いっぱい）
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: 0.5px

**Secondary CTA（"販売商品終了のお知らせ"）**

- Background: `#6F6F6F`
- Text: `#ffffff`
- Border Radius: **5px**
- Padding: 3px 11px
- Font Size: 16px

**Tag / Hashtag（"リップカラー"、"ファンデーション"）**

- Background: `#ffffff`
- Text: `#4F4F4F`
- Border: 1px solid `#E2E2E2`
- Border Radius: **5px**
- Padding: 10px 18px
- Font Size: 14px
- Font Weight: 400

**Service Card CTA（"ギフトサービス"、"送料無料"）**

- Background: `#434343`
- Text: `#ffffff`
- Padding: 25px 30px 30px

### Inputs

**Search Input（検索）**

- Background: `#ffffff`
- Border: 1px solid `#D1D1D1`
- Border Radius: **50px**（ピル型）
- Padding: 6px 35px 6px 15px
- Font Size: 14px

### Cards

- 製品カードはビジュアル主導。大きな製品写真にテキスト（商品名 14px / 700、価格 12px / 400）を控えめに配置
- カード背景: `transparent`（ダークテーマ時）/ `#ffffff`（ライトテーマ時）
- サービスカード: `#434343` 背景 + `#ffffff` テキスト

### Special: New Badge

- Background: `#000000`
- Text: `#ffffff`
- 新商品のアクセントとして使用

---

## 5. Layout Principles

### Container

- コンテンツ中央寄せ、ビジュアルを主役にした構成
- 横幅いっぱいのヒーロービジュアルが特徴

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 3px | セカンダリボタン縦 padding |
| S | 6–10px | 検索入力・タグ縦 padding |
| M | 13–18px | CTA 縦 padding・タグ横 padding |
| L | 25–30px | サービスカード padding |
| XL | 64px | セクション間余白（推定） |

### Grid

- 商品一覧: 2〜4 カラムのレスポンシブグリッド
- ランキング: 横スクロールカルーセル
- サービスカード: 2 カラムグリッド

---

## 6. Depth & Elevation

RMK はシャドウを最小限に抑え、面の色の切り替えでテーマ（ダーク/ライト）と空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（ほぼすべての要素） |
| Theme Dark | background `#4F4F4F` | TOP ページ背景 |
| Theme Dark Deeper | background `#434343` | ランキング・セクション背景 |
| Header | background `#776F6B` / `#CBC4BC` | テーマに応じたヘッダー色 |
| Mega Menu | `rgba(119,111,108,0.95)` / `rgba(255,255,255,0.95)` | 半透明オーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Neue Helvetica World + 游ゴシック体** のフォールバックチェーン全体を指定する
- h3 商品説明には **游ゴシック体のみ**（Helvetica なし）のフォントスタックを使用し、和文に特化した表示にする
- CTA は **#776F6B 塗りつぶし + #ffffff テキスト + radius 5px** にする
- ダーク/ライトのデュアルテーマを意識し、テーマごとに `--main-bg`, `--header-bg`, `--main-text` を切り替える
- ウォームグレー系パレット（`#776F6B`, `#4F4F4F`, `#434343`, `#6F6F6F`）を使い、**黄みを帯びた温かみ**を保つ
- 検索入力欄は **pill 型（radius 50px）** にする
- 英語セクション見出しには `letter-spacing: 0.067em` を設定する
- `font-feature-settings: normal` を維持する（palt なし）
- 商品説明テキストの line-height は **1.71** にする

### Don't（禁止）

- **クールグレー（青みのあるグレー）を使わない**。RMK のグレーはすべてウォーム（黄〜赤み）系
- **palt を適用しない**。`font-feature-settings: normal` が RMK の指定
- **h3 商品説明に Helvetica 系フォントを先頭指定しない**。游ゴシック体のみのスタックがブランドの意図
- **CTA に純黒 #000000 を使わない**。`#776F6B`（ウォームブラウングレー）が RMK の CTA 色
- **ヘッダーの色をテーマ間で固定しない**。TOP は `#776F6B`、商品ページは `#CBC4BC` とテーマで切り替える
- **角丸を大きくしすぎない**。CTA とタグは 5px。検索入力のみ 50px（pill）
- **font-weight を 700 以上にしない**。RMK は 400〜700 の範囲で使用し、極端な太字は使わない

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- 商品グリッドは 1〜2 カラムに折り返す
- CTA ボタンはフルワイドを維持
- ナビゲーションはハンバーガーメニュー化
- ヒーロービジュアルは全幅のまま維持
- テーマ（ダーク/ライト）切り替えはモバイルでも維持

### タッチターゲット

- CTA ボタンの padding 13px 0px 17px は合計 30px + フォントサイズで十分なタッチターゲットを確保
- 最小タッチターゲット: 44px × 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 14px を維持
- H1 36px → 24px 程度に縮小
- 12px のナビリンクはタップ領域の追加が必須

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: RMK（Kanebo / 花王グループ）
Theme: デュアルテーマ（TOP=ダーク、Products=ライト）
Warm Brown Gray: #776F6B (ヘッダー・フッター・CTA)
Warm Dark Gray: #4F4F4F (TOP 背景・テキスト)
Dark Section: #434343
Button Gray: #6F6F6F
Warm Beige: #CBC4BC (商品ページヘッダー)
Alert: #F84300
Text on Dark: #ffffff
Text on Light: #4F4F4F
Background (TOP): #4F4F4F
Background (Products): #F4F4F4
Body Font: Neue-HelveticaR-World-55-Roman, "Helvetica Neue", Helvetica, 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif
H3 Product Font: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif
Preview Alternative: Inter (for Neue Helvetica World)
palt: なし (font-feature-settings: normal)
Body: 14px / 400 / line-height 1.43
Description: 14px / 400 / line-height 1.71
H1: 36px / 500 / line-height 1.1
H2 EN: 30px / 500 / line-height 1.6 / letter-spacing 0.067em
H3 Product: 14px / 700 / line-height 1.71
Small/Price: 12px / 400 / line-height 1.5
CTA Style: filled (bg #776F6B, text #ffffff, radius 5px, padding 13px 0 17px)
Tag Style: outlined (bg #ffffff, text #4F4F4F, border #E2E2E2, radius 5px)
Search: pill (radius 50px, border #D1D1D1)
```

### プロンプト例

```
RMK のデザインシステムに従って、新商品のプロダクトページを作成してください。
- ダークテーマ（TOP ページ）: bg #4F4F4F, header #776F6B, text #ffffff
- ライトテーマ（商品ページ）: bg #F4F4F4, header #CBC4BC, text #4F4F4F
- 本文フォントは Neue-HelveticaR-World-55-Roman, "Helvetica Neue", Helvetica, 游ゴシック体, YuGothic 等のフォールバック付き
  （プレビュー用代替: Inter + 游ゴシック）
- 商品名 h3 は游ゴシック体のみ（Helvetica なし）、14px / 700 / line-height 1.71
- 本文は 14px / 400 / line-height 1.43
- 商品説明は 14px / 400 / line-height 1.71
- CTA「カートに入れる」は bg #776F6B, text #ffffff, radius 5px
- タグ「リップカラー」は bg #ffffff, text #4F4F4F, border #E2E2E2, radius 5px
- 検索は pill 型: border #D1D1D1, radius 50px
- font-feature-settings: normal（palt なし）
- ウォームグレー系パレットを使い、クールグレーは使わない
```

### 字詰め・組版の重要ポイント

1. **デュアルテーマ**: TOP ページ（ダーク `#4F4F4F`）と商品ページ（ライト `#F4F4F4`）で背景・ヘッダー・テキスト色がすべて切り替わる。テーマ変数を使い分ける
2. **ウォームグレーの一貫性**: パレット全体が黄〜赤みを帯びたグレーで構成される。`#776F6B` のヘッダー/CTA がブランドの顔。クールグレー（青み系）は世界観を壊す
3. **h3 の和文専用フォントスタック**: 商品説明の h3 では Helvetica 系を除外し、游ゴシック体のみを指定。コンテンツ領域で日本語の統一感を優先する意図的なデザイン
4. **palt なし**: `font-feature-settings: normal` を使用。游ゴシック体のデフォルトメトリクスを信頼し、プロポーショナル字詰めは行わない
5. **Neue Helvetica World の3ウェイト併記**: 通常の font-weight 切り替えではなく、font-family にウェイト名を含める指定方法。`Neue-HelveticaR-World-55-Roman`, `75-Bold`, `45-Light` を列挙する
6. **検索入力の pill 型**: 唯一 radius 50px が使われる要素。CTA やタグの 5px とは明確に区別される
7. **ヘッダー背景の切り替え**: TOP は `#776F6B`（ブラウングレー）、商品ページは `#CBC4BC`（ウォームベージュ）。同一サイト内でヘッダー色が変わる珍しい設計

---

**取得日**: 2026-05-20
**出典**: https://www.rmkrmk.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
