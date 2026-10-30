# DESIGN.md — Minimal（ミニマル）

> Minimal（https://mini-mal.tokyo/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 東京発の Bean to Bar チョコレートブランド。「チョコレートを新しくする」をミッションに、素材の引き算で生まれる味覚体験をデザインにも反映。装飾を排したモノクロームの色面構成と、欧文フォント Poppins を軸にしたクラフト感のあるモダンタイポグラフィで、プロダクトそのものにフォーカスさせる。ダーク写真 + 白テキストのヒーロー構成が世界観の入口
- **密度**: ゆったりとしたプロダクトショーケース型。大きな商品写真と控えめなテキストで、チョコレートの色・テクスチャを主役にする。情報量は最小限に抑え、余白で「引き算」のブランド哲学を体現
- **キーワード**: Bean to Bar、モノクローム、Poppins + 游ゴシック、引き算、クラフトモダン、ダーク写真
- **特徴**: **欧文優先の二層フォントシステム**が最大の特徴。すべてのテキストに Poppins（Google Fonts）を第一候補として指定し、日本語のフォールバックに游ゴシック体を使用。body に `font-weight: 600` を設定するという珍しい構成で、全体にやや太めのベースウェイトを持たせる。CTA は `#333333` のダーク塗りつぶし + `radius 2px` の micro-rounded が基本形。palt は未使用（font-feature-settings: normal）。ブランドカラーに特定の鮮やかな色を持たず、**プロダクト写真の色**（カカオの茶、フルーツの赤など）がアクセントカラーの役割を果たす設計

---

## 2. Color Palette & Roles

### Brand Accent（プロダクト由来のアクセントカラー）

Minimal はブランドカラーとして特定の鮮やかな色を持たない。代わりに、プロダクトの素材やフレーバーに応じたアクセントカラーがページごとに現れる。

- **Blue-Green** (`#366b93`): Products ページのヒーロー背景（rgb 54, 107, 147）— カカオの原産地を想起させる深い青緑。最も頻出するアクセント
- **Teal** (`#6eaab4`): セクション背景・プロモーション面（rgb 110, 170, 180）— 明るい青緑系。Blue-Green の軽いバリエーション
- **Green** (`#578a3d`): フレーバー・素材の訴求セクション背景（rgb 87, 138, 61）— ナチュラル・オーガニックを示す緑

### Dark（ダーク系）

- **Dark Primary** (`#262626`): 主要ダーク面・CTA 背景・ヒーロー写真のオーバーレイ（rgb 38, 38, 38）
- **Dark Secondary** (`#333333`): CTA ボタン背景・テキストカラー（rgb 51, 51, 51）

### Text

- **Text Primary** (`#000000`): 本文テキスト（純黒）
- **Text Secondary** (`#707070`): キャプション・補足テキスト・価格（rgb 112, 112, 112）
- **Text Disabled** (`#d8d8d8`): 無効状態のテキスト（rgb 216, 216, 216）
- **Text on Dark** (`#ffffff`): ダーク背景上の白テキスト

### Surface

- **Surface** (`#fcfcfc`): ヘッダー・フッター・標準背景（rgb 252, 252, 252）— 純白ではなくごくわずかに温かみのあるオフホワイト
- **Surface Light Gray** (`#eeeeee`): タグ・フィルター背景（rgb 238, 238, 238）
- **Surface Gray** (`#eaeaea`): ボーダー・区切り線（rgb 234, 234, 234）

### Functional

- **Error** (`#c0392b`): エラー表示（推定）

---

## 3. Typography Rules

### 3.1 欧文フォント

Minimal は**欧文フォントを第一候補に指定**する、欧文優先型の構成。

- **Poppins**: Google Fonts で読み込み。Geometric Sans-Serif。クラフトチョコレートのモダンさと西洋的な洗練を担う。ウェイト 400 / 600 / 700 を使用

### 3.2 和文フォント

- **游ゴシック体 / YuGothic**: Poppins のフォールバックとして指定。macOS / Windows ともにシステムフォントとして利用可能。Medium 指定あり（Windows 対策）

### 3.3 font-family 指定

```css
/* 標準（本文・見出し・CTA 共通） */
font-family: Poppins, "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;

/* 一部要素（Poppins なし） */
font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- Poppins を先頭に置き、英数字は Poppins のグリフで表示。日本語文字は Poppins に含まれないため游ゴシックにフォールバック
- 游ゴシックは `"游ゴシック体"` → `YuGothic` → `"游ゴシック Medium"` → `"Yu Gothic Medium"` → `"游ゴシック"` → `"Yu Gothic"` の順で、macOS / Windows の両方をカバー
- 一部の要素では Poppins を省略し、游ゴシック単体で使用するケースあり

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title | Poppins + 游ゴシック | 36px | 600 | 1.4 (50.4px) | normal | ダーク写真上の白テキスト |
| Section Header EN | Poppins | 36px | 600 | 1.4 (50.4px) | 3.24px (0.09em) | "PRODUCTS" 等の英文セクション見出し |
| Heading 2 | Poppins + 游ゴシック | 24-32px | 600-700 | 1.4 | normal | セクションタイトル |
| Heading 3 | Poppins + 游ゴシック | 20px | 600 | 1.4 (28px) | normal | サブセクション見出し |
| Heading 4 | Poppins + 游ゴシック | 16px | 700 | 1.4 (22.4px) | normal | 小見出し |
| Heading 5 | Poppins + 游ゴシック | 12.8px | 700 | 1.4 | 1px (0.078em) | ラベル・カテゴリ |
| Body | Poppins + 游ゴシック | 14px | 400 | 1.6 (22.4px) | normal | 本文テキスト |
| Product Name | Poppins + 游ゴシック | 16px | 700 | 1.4 (22.4px) | normal | 製品名 |
| Price | Poppins + 游ゴシック | 13px | 400 | 1.6 (20.8px) | normal | 価格表示 |
| Caption | Poppins + 游ゴシック | 13px | 400 | 1.6 (20.8px) | normal | 補足テキスト / color #707070 |
| CTA Small | Poppins + 游ゴシック | 11.2px | 600 | 1.4 | normal | アウトラインCTA 内テキスト |

**body のデフォルト font-weight: 600**: 通常サイトでは body に 400（Normal）を指定するが、Minimal は 600（Semi-Bold）をベースにしている。これにより見出しを含まない通常テキストもやや太めに表示される

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.6`（22.4px / 14px）— 日本語本文として標準的な読みやすさ
- **見出しの行間**: `line-height: 1.4`（h1〜h5 共通）— 見出しは本文より詰める
- **本文の字間**: `letter-spacing: normal`（0）— Minimal は字間を広げない
- **英文セクション見出しの字間**: `letter-spacing: 0.09em`（3.24px @ 36px）— "PRODUCTS" 等の英文見出しのみトラッキングを広げる
- **ラベルの字間**: `letter-spacing: 0.078em`（1px @ 12.8px）— h5 ラベルに控えめなトラッキング

**ガイドライン**:
- Minimal は letter-spacing を意図的に最小限に抑えるデザイン。日本語本文に letter-spacing を加えない
- 英文見出しのみトラッキングを使い、ブランドの「ミニマル」な世界観を字間にも反映
- body weight 600 が全体のトーンを決めるため、見出しとのコントラストは weight よりも size で付ける

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- 製品名・フレーバー名は簡潔に1行に収める前提

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt 未使用 */
```

- **palt は使用しない**: Minimal は font-feature-settings を normal に設定。プロポーショナル字詰めを行わず、游ゴシックのデフォルト字詰めをそのまま使用
- Poppins は欧文フォントのため palt の影響を受けない。和文（游ゴシック）部分もデフォルトのまま

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ダーク塗りつぶし）**

Minimal の CTA は **ダークグレー塗りつぶし** が基本形。

- Background: `#333333`
- Text: `#fcfcfc`
- Border Radius: **2px**（micro-rounded — pill ではない）
- Padding: 8px 10px
- Font Family: Poppins, "游ゴシック体", YuGothic, sans-serif
- Font Size: 14px（推定）
- Font Weight: 600（body デフォルト継承）

**Hero Outline CTA（白アウトライン — ダーク背景用）**

- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 12px 20px
- Border Radius: 0px

**Outline CTA（ダークアウトライン — ライト背景用）**

- Background: `transparent`
- Text: `#333333`
- Border: 1px solid `#333333`
- Padding: 8px 10px
- Border Radius: 0px
- Font Size: 11.2px
- Font Weight: 600

**Dark Filled（角なし）**

- Background: `#262626`
- Text: `#ffffff`
- Border Radius: 0px
- Padding: 10px 4px

**Pill Outline CTA**

- Background: `transparent`
- Text: `#000000`
- Border: 1px solid `#000000`
- Border Radius: **100px**（pill 形状）
- Padding: 10px 30px
- Font Size: 13px

**Tag / Filter**

- Background: `#eeeeee`
- Text: `#262626`
- Border Radius: 0px
- Padding: 10px 4px

**ボタンの考え方**:
- メインは **#333333 の塗りつぶし + radius 2px**。SHIRO (3px) より鋭い micro-rounded
- ダーク背景では **白アウトライン**（border 1px solid white）に切り替える
- ライト背景のアウトラインは **#333333 のボーダー + 小さめフォント**
- pill 形状は特定のコンテキスト（リンクボタン等）でのみ使用
- tag / filter は **角なし（radius 0）+ グレー背景** で flat に仕上げる

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#eaeaea`
- Border (focus): 1px solid `#333333`
- Border Radius: 2px
- Padding: 12px 16px
- Font Family: Poppins, "游ゴシック体", YuGothic, sans-serif
- Font Size: 14px

### Cards（製品カード）

- Background: `#fcfcfc`
- Border Radius: 0px（写真はフラット）
- Shadow: なし
- 構成: 製品写真 + 製品名（16px / 700）+ 価格（13px / 400 / #707070）
- ホバー時のアニメーション: opacity の変化（控えめ）

### Section Backgrounds

- Default: `#fcfcfc`（オフホワイト）
- Hero / Dark: `#262626` + 写真オーバーレイ
- Product accent: `#366b93` / `#6eaab4` / `#578a3d`（プロダクト由来の色面）
- Tag / Filter area: `#eeeeee`

---

## 5. Layout Principles

### Container

- 全体として #fcfcfc 背景にコンテンツを中央寄せ
- ヒーローはフル幅のダーク写真
- 製品グリッドと情報セクションで構成
- ヘッダー・フッターはフル幅

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | タグ内縦 padding |
| S | 8px | CTA 縦 padding |
| M | 10px | CTA 横 padding / タグ padding |
| L | 16px | フォームの padding |
| XL | 20px | Hero CTA 横 padding |
| XXL | 30px | Pill CTA 横 padding |

### Grid

- 製品カードはグリッドレイアウト（2〜4カラム）
- モバイルでは 1〜2 カラムに折り返し

---

## 6. Depth & Elevation

Minimal はシャドウをほとんど使わない。#fcfcfc（オフホワイト）と #262626（ダーク）の色面コントラスト、およびプロダクト写真の色彩で空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#fcfcfc` | 通常コンテンツ面 |
| 2 | background `#262626` / `#333333` | ヒーロー・CTA・フッター |
| 3 | background `#366b93` / `#6eaab4` | プロダクトアクセント面 |

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は **Poppins を先頭**に置き、游ゴシックをフォールバックに指定する
- body の font-weight は **600** に設定する（Minimal のベースウェイト）
- CTA のメインは **#333333 塗りつぶし + radius 2px** にする
- 本文は **14px / 400 / line-height 1.6** で、letter-spacing は normal（0）にする
- 背景色は **#fcfcfc**（純白ではなくオフホワイト）を使う
- ダーク面は **#262626** を使う（#000000 は避ける）
- プロダクト写真を大きく使い、テキスト量は最小限にする
- 英文セクション見出しにはトラッキング（letter-spacing 0.09em）を加える
- 色面（#366b93 / #6eaab4 / #578a3d）はプロダクト訴求セクションでのみ使う
- ダーク背景では白アウトライン CTA に切り替える

### Don't（禁止）

- Poppins を省略して游ゴシック単体にしない（Poppins が Minimal のトーンを決める）
- 日本語本文に letter-spacing を加えない（normal が Minimal の設計）
- font-feature-settings: "palt" を適用しない（Minimal は palt 未使用）
- 純白 `#ffffff` を背景に使わない（`#fcfcfc` がベース）
- 純黒 `#000000` をダーク面に使わない（`#262626` / `#333333` が Minimal のトーン。ただしテキストには #000000 を使用）
- pill ボタン（radius 100px）をメイン CTA にしない（pill は限定的なコンテキストでのみ使用）
- シャドウ（box-shadow）を多用しない
- 鮮やかなアクセントカラーを UI 要素（ボタン・テキスト）に使わない（色面はプロダクト訴求のみ）
- body の font-weight 600 を 400 に変更しない（ベースウェイトが変わると全体のトーンが崩れる）
- tag / filter に border-radius を付けない（radius 0 がフラットな印象を保つ）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- h1（36px）→ 24px 程度に縮小
- 製品グリッドは 1〜2 カラムに折り返す
- ナビゲーションはハンバーガー化
- Hero の白アウトライン CTA は padding を広げてタッチターゲットを確保
- プロダクトアクセント面（#366b93 等）は維持（ブランド世界観の一部）

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタンのパディング拡張推奨（デスクトップの 8px 10px はモバイルで小さい）
- tag / filter は padding 10px 4px のため、モバイルでは横 padding を拡大

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: Minimal（ミニマル）
Origin: 東京発 Bean to Bar チョコレート
Dark Primary: #262626
Dark Secondary: #333333
Text Primary: #000000
Text Secondary: #707070
Background: #fcfcfc
Surface Light: #eeeeee
Accent Blue-Green: #366b93
Accent Teal: #6eaab4
Accent Green: #578a3d
Font: Poppins, "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif
palt: 未使用（font-feature-settings: normal）
Body: 14px / 400 / line-height 1.6 / letter-spacing normal
Body Default Weight: 600（body タグに設定）
Hero Title: 36px / 600 / line-height 1.4 / color #ffffff（on dark）
Section Header EN: 36px / 600 / line-height 1.4 / letter-spacing 0.09em
CTA Style: filled (bg #333333, text #fcfcfc, radius 2px)
CTA Outline: transparent bg, border 1px solid #333333, font-size 11.2px
CTA Pill: transparent bg, border 1px solid #000, radius 100px, font-size 13px
Shadow: 使用しない
```

### プロンプト例

```
Minimal（ミニマル）のデザインシステムに従って、新商品の紹介ページを作成してください。
- フォントは Poppins, "游ゴシック体", YuGothic, sans-serif
- body の font-weight は 600 に設定
- font-feature-settings は normal（palt 未使用）
- ヒーローは 36px / 600 / line-height 1.4 / 白テキスト on ダーク写真
- 本文は 14px / 400 / line-height 1.6 / letter-spacing normal / color #000000
- CTA「カートに入れる」は bg #333333, text #fcfcfc, radius 2px
- 背景は #fcfcfc。ダーク面は #262626
- プロダクト訴求セクションは #366b93 の色面を使用可
- 余白を多く取り、商品写真を大きく見せる
- シャドウは使わない
```

### フォント・組版の重要ポイント

1. **欧文優先の二層フォントシステム**: Poppins を先頭に指定し、英数字は Poppins で表示。日本語文字は游ゴシックにフォールバック。この組み合わせがクラフトチョコレートのモダンさと日本語の読みやすさを両立させる
2. **body font-weight: 600 の設計意図**: 通常の 400 ではなく 600 をベースにすることで、全体にやや太めのトーンを設定。見出しとの差は size で付け、weight のコントラストは控えめ
3. **palt 未使用**: font-feature-settings: normal のまま。游ゴシックのデフォルト字詰めで、letter-spacing も normal。SHIRO（palt + 0.1em）とは対照的に、字間による演出を行わない引き算のアプローチ
4. **letter-spacing の限定的な使用**: 日本語テキストには letter-spacing を加えず、英文セクション見出し（"PRODUCTS" 等）にのみ 0.09em のトラッキングを適用。ミニマルの名の通り、装飾的な字間は最小限
5. **CTA の多様性**: 塗りつぶし（#333333 / radius 2px）、アウトライン（border #333333 / radius 0）、pill（radius 100px）、ダーク面用白アウトラインの 4 バリエーション。コンテキストに応じて使い分ける
6. **背景の #fcfcfc**: 純白ではなくわずかに温かみのあるオフホワイト。チョコレートの茶色やダーク面との遷移を柔らかくする

---

**取得日**: 2026-05-09
**出典**: https://mini-mal.tokyo/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
