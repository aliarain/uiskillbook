# DESIGN.md — amadana

> amadana 公式サイト（https://amadana.com/）のデザイン仕様書。
> 日本発のデザイン家電・ライフスタイルブランド。「美しい道具」をコンセプトに、家電をインテリアとして再定義するプロダクトデザインで知られる。
> Shopify ベースの EC サイト。実サイトの computed style および CSS Custom Properties に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プロダクトを「展示」するギャラリーのような暗色基調のサイト。白い本体背景にダークセクションを重ね、製品写真を引き立てる
- **密度**: 中程度。Shopify のグリッドレイアウトで製品カードを並べつつ、セクション間は `16rem`（256px）の大きな余白で区切る展示型
- **キーワード**: インダストリアル・ミニマル、ギャラリーキュレーション、ダークモード展示、赤アクセント、単一フォント
- **特徴**: **フォントは Noto Sans Japanese 一本、ウェイトも 400 のみ**というストイックな構成。サイズの差だけで階層をつくる。CTA は `#E60012`（amadana レッド）の角張ったボタン（`border-radius: 0`）で、pill や丸みのあるボタンは使わない。ダークセクション（`#131313` / `#272727`）で製品をまとめ、美術館の壁面のように製品写真を並べる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **amadana Red** (`#E60012`): ブランドの署名色。CTA ボタン、「ONLINESTORE」リンク、「Log in」ボタンに使用。出現回数 15 件で、サイト内で最も印象的なアクセント

### Text

- **Text Primary** (`#3F3F3F`): 本文・説明テキスト。純黒ではなくダークグレー
- **Text on Dark** (`#ffffff`): ダークセクション上のテキスト。製品名、価格、ナビゲーション

### Surface（面色 — ダークグレーの階調が特徴）

- **Background** (`#ffffff`): ページ本体の背景（body）
- **Header Overlay** (`rgba(63, 63, 63, 0.4)`): ヒーロー上部の半透明オーバーレイ。ナビゲーションの視認性を確保
- **Dark Section** (`#131313`): 製品セクションの主要背景。ほぼ黒だが純黒ではない
- **Product Card** (`#272727`): 製品カードの背景。`#131313` より一段明るいダークグレー
- **Muted Accent** (`#B5B5B0`): ミュートされたニュートラルアクセント。補助テキストやラベルに使用

### CTA / Button

- **CTA Red** (`#E60012`): プライマリ CTA の背景。白テキストとの組み合わせ
- **CTA Text** (`#ffffff`): CTA ボタン上のテキスト

### Semantic（意味的な色）

- サイト上で明示的な Success / Danger / Warning のカラートークンは定義されていない。Shopify のデフォルトに準拠

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一のフォント）**:
- Noto Sans Japanese（Google Fonts 提供、ウェイト 400 のみ使用）

明朝体は使用しない。

### 3.2 欧文フォント

- Noto Sans Japanese 内の欧文グリフをそのまま使用
- 別途の欧文フォントスタックは指定されていない

### 3.3 font-family 指定

```css
/* 本文・見出し共通（CSS Custom Property 実測値） */
--font-body-family: "Noto Sans Japanese", sans-serif;
--font-heading-family: "Noto Sans Japanese", sans-serif;

/* 適用 */
font-family: "Noto Sans Japanese", sans-serif;
```

**フォールバックの考え方**:
- `sans-serif` のみをフォールバックに指定するミニマル構成
- Noto Sans Japanese は Google Fonts で配信されるため、環境依存が少ない
- 和文・欧文ともに同一フォントで統一し、混植の不整合を排除

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H1 (Logo) | 57.2px | 400 | 0px | normal | ビジュアルロゴ |
| H2 (Section) | 43.2px | 400 | 1.0 | normal | セクション見出し |
| H3 (Promo) | 30.8px | 400 | 1.0 | normal | プロモブロック見出し、白テキスト |
| H3 (Product) | 17.6px | 400 | 1.0 | normal | 製品カード見出し、白テキスト |
| H3 (Regular) | 15px | 400 | 1.7 | normal | 通常の小見出し |
| Body (P) | 15px | 400 | 1.7 | normal | 本文テキスト |
| Description (P) | 13.2px | 400 | 1.7 | normal | 製品説明・補足 |
| Link / Price | 13.2px | 400 | 1.7 | normal | リンク、価格表示 |
| Button | 13.2px | 400 | — | normal | CTA テキスト |

**特筆点**: ウェイトがすべて 400（Regular）。Bold / Semibold は一切使わず、サイズの差だけで視覚階層をつくるストイックな設計。

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 / 説明 / リンク: `1.7`（Shopify テーマ変数 `--font-body-line-height: 1.7`）
- セクション見出し (H2): `1.0` — タイトで力強い
- プロモ / 製品見出し (H3): `1.0` — 同上
- `--font-body-scale: 1.5` がテーマ変数として定義（Shopify のスケーリング基準）

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal`（明示的な letter-spacing 指定なし）
- 和文プロポーショナル字詰めも未使用

**ガイドライン**:
- amadana は letter-spacing を一切指定しない。フォント本来の字間に委ねる設計
- 見出しの `line-height: 1.0` は日本語としてはタイト。短いフレーズや製品名を想定

### 3.6 禁則処理・改行ルール

```css
/* Shopify デフォルト設定 */
word-break: break-word;
overflow-wrap: break-word;
```

- Shopify テーマのデフォルト禁則処理に準拠
- 特別なカスタマイズは確認されていない

### 3.7 OpenType 機能

```css
/* palt・kern ともに未設定 */
font-feature-settings: normal;
```

- `palt`（プロポーショナル字詰め）は使用しない
- フォントのデフォルトメトリクスをそのまま使う方針

### 3.8 縦書き

- 該当なし。amadana は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（Log in / ONLINESTORE）**
- Background: `#E60012`（amadana Red）
- Text: `#ffffff`
- Padding: `9.6px 33.6px`
- Border Radius: `0px`（角張ったシャープなボタン）
- Font Size: `13.2px`
- Font Weight: `400`
- Border: なし

**Secondary（想定）**
- Background: `transparent`
- Text: `#3F3F3F`
- Border: `1px solid #3F3F3F`
- Border Radius: `0px`
- Padding: `9.6px 33.6px`

### Navigation Arrows（スライダー）

- Background: `transparent`
- Size: `48px × 48px`
- Shape: 円形
- 最小タッチターゲット 44px を満たす

### Cards（製品カード）

- Background: `#272727`
- Text: `#ffffff`
- Border: なし（暗色面でボーダーレス）
- Border Radius: `0px`（角張ったカード）
- カード全体がクリッカブルリンク

### Inputs

- Shopify デフォルトのフォームスタイルに準拠
- Font Family: `"Noto Sans Japanese", sans-serif`
- Font Size: `15px`

---

## 5. Layout Principles

### Header

- Height: `68px`（CSS Custom Property `--header-height: 68px`）

### Section Spacing

- `--spaced-section: 16rem`（256px）— セクション間の大きな余白

### Grid

- Shopify のリキッドグリッドレイアウト
- 製品カードグリッド: ダークセクション上に配置

### Content Structure

| Area | 説明 |
|------|------|
| ヒーロー | フルブリード画像 + 半透明オーバーレイ |
| 製品セクション | `#131313` 背景のダークセクション |
| 製品カード | `#272727` 背景のグリッドカード |
| フッター | ダーク背景、白テキスト |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ほぼすべての要素。フラットなデザイン |
| Header | — | `rgba(63, 63, 63, 0.4)` オーバーレイで奥行きを表現 |

- amadana はシャドウをほとんど使わない。**面色の階調**（`#131313` → `#272727` → `#ffffff`）で奥行きを表現する
- 半透明オーバーレイ（ヘッダー）が唯一の「浮き」表現

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは Noto Sans Japanese 一本に統一する（ウェイト 400 のみ）
- サイズの差だけで視覚階層をつくる（Bold / Semibold は使わない）
- CTA は `#E60012` の角張ったボタン（`border-radius: 0`）にする
- 製品セクションは `#131313` のダーク背景を使い、ギャラリーのような雰囲気にする
- テキスト色は `#3F3F3F`（ダークグレー）を使い、純黒は避ける
- 本文の行間は `line-height: 1.7` を維持する
- セクション間の余白は大きく（256px）取り、展示のような間を持たせる

### Don't（禁止）

- `font-weight: 700` や `600` を使わない（amadana は 400 のみ）
- CTA に `border-radius` をつけない（pill ボタンや丸みのあるボタンは使わない）
- ダークセクションに純黒 `#000000` を使わない（`#131313` を使う）
- `letter-spacing` や `font-feature-settings: "palt"` を追加しない（フォント本来の字間に委ねる）
- 製品カードにシャドウやボーダーを付けない（面色の差で区別する）
- 明朝体や装飾フォントを混ぜない

---

## 8. Responsive Behavior

### Breakpoints

- Shopify テーマのデフォルトブレークポイントに準拠

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | モバイルレイアウト |
| Tablet | 750px–989px | タブレットレイアウト |
| Desktop | ≥ 990px | デスクトップレイアウト |

### タッチターゲット

- ナビゲーションアロー: `48px × 48px`（WCAG 基準 44px を満たす）

### フォントサイズの調整

- モバイルでは見出しがデスクトップの 70–80% 程度に縮小
- 本文 15px はモバイルでも維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (CTA): #E60012
Text Primary: #3F3F3F
Text on Dark: #ffffff
Background: #ffffff
Dark Section: #131313
Product Card: #272727
Header Overlay: rgba(63, 63, 63, 0.4)
Muted Accent: #B5B5B0

Font: "Noto Sans Japanese", sans-serif
Weight: 400（すべて）
Body Size: 15px / line-height: 1.7 / letter-spacing: normal
Heading: line-height: 1.0 / letter-spacing: normal
palt: なし
Button Radius: 0px
```

### プロンプト例

```
amadana のデザインに従って、製品一覧ページを作成してください。
- フォント: "Noto Sans Japanese", sans-serif（ウェイトは 400 のみ）
- テキスト色: #3F3F3F（純黒は使わない）
- ダーク背景上のテキスト: #ffffff
- ページ背景: #ffffff
- 製品セクション背景: #131313
- 製品カード背景: #272727（ボーダーなし、シャドウなし、角張り）
- CTA ボタン: #E60012、白テキスト、border-radius: 0
- 本文: 15px, line-height: 1.7
- 見出し: line-height: 1.0、サイズで階層をつくる
- Bold は使わない（全要素 font-weight: 400）
- セクション間余白: 256px
```
