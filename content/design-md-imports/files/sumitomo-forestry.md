# DESIGN.md — Sumitomo Forestry (住友林業)

> 住友林業（https://sfc.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。住友林業は住宅・建築・木材・再生可能エネルギー事業を展開する総合企業。
> 明朝体（ディスプレイ）・ゴシック体（本文）・Roboto（英語見出し）の3書体を使い分ける、自然と品格を表現したデザインシステム。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 自然素材（木・森林）に根差したブランドアイデンティティを、フォレストグリーンと明朝体で表現。企業としての格式と、木のぬくもりを両立させたコーポレートサイト
- **密度**: ゆったりとした余白。ヒーロービジュアル、大きな写真、スライド形式のカードを多用するメディアリッチなレイアウト
- **キーワード**: 自然、品格、信頼、伝統、サステナブル
- **特徴**: 3つの書体ボイスを持つ — 英語見出し（Roboto）、和文ディスプレイ（游明朝体）、本文（游ゴシック体）。フォレストグリーン `#008d54` をブランドカラーとして全体に展開

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — フォレストグリーン系）

- **Forest Green** (`#008d54`): メインブランドカラー。ナビゲーション項目、アウトラインボタンのテキスト・ボーダーに使用
- **CTA Green** (`#00664b`): CTAボタンの背景色。Primary より暗く、コントラスト比が高い
- **Nav Green** (`#007b4a`): 言語ナビゲーション等の背景色
- **Active Green** (`#00623b`): 言語アクティブ状態。最も暗いグリーン
- **Soft Green** (`rgba(143,173,161,0.8)`): 半透明グリーン。装飾的なオーバーレイ

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト。純粋な黒を使用
- **Text White** (`#ffffff`): 白テキスト。グリーン背景上、ヒーローキービジュアル上
- **Border Light** (`#cbcbcb`): 装飾的なボーダー・区切り線
- **Divider** (`#dcdcdd`): セクション区切り線
- **Background** (`#ffffff`): ページ背景
- **Section BG** (`#f0f0f0`): セクション背景（建築、サステナビリティ等）
- **Section BG Alt** (`#eeeeee`): IR、サステナビリティセクション背景
- **Footer BG** (`#f2f2f2`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文）**:
- 游ゴシック体 / YuGothic（macOS）
- 游ゴシック / Yu Gothic（Windows）
- メイリオ（Windows フォールバック）
- ヒラギノ角ゴ ProN（macOS フォールバック）

**明朝体（ディスプレイ・ヒーロー）**:
- 游明朝体 / Yu Mincho / YuMincho（クロスプラットフォーム）
- ヒラギノ明朝 Pro（macOS）
- MS P明朝 / MS PMincho（Windows レガシー）

> **preview.html での代替**: 游ゴシック体 → Noto Sans JP、游明朝体 → Noto Serif JP（Google Fonts）。実サイトは游書体を使用

### 3.2 欧文フォント

- **サンセリフ（見出し）**: Roboto — 英語セクション見出し専用
- **サンセリフ（本文内）**: 游ゴシック体のフォールバックチェーン内で対応

### 3.3 font-family 指定

```css
/* 本文（ゴシック体） */
font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic",
  "メイリオ", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;

/* ディスプレイ（明朝体） */
font-family: "游明朝体", "Yu Mincho", YuMincho,
  "ヒラギノ明朝 Pro", "Hiragino Mincho Pro",
  "MS P明朝", "MS PMincho", sans-serif;

/* 英語見出し */
font-family: Roboto, sans-serif;
```

**フォールバックの考え方**:
- ゴシック体: 游ゴシック体を先頭に、macOS → Windows → generic の順
- 明朝体: 游明朝体を先頭に、ヒラギノ明朝 → MS P明朝の順。最終は `sans-serif`（原文ママ）
- 英語見出し: Roboto 単体 + generic fallback

### 3.4 文字サイズ・ウェイト階層

> computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title (h1) | 明朝体 | 45px | 700 | 67.5px (×1.5) | 1.5px (0.033em) | キービジュアル上の白テキスト |
| Section Heading EN (h2) | Roboto | 40px | 700 | 52px (×1.3) | 1.5px (0.0375em) | "Focus", "About Us" 等 |
| Section Heading JP (h2) | 明朝体 | 34px | 700 | 57.8px (×1.7) | 1.7px (0.05em) | 和文セクション見出し |
| Sub Section (h2) | ゴシック体 | 32px | 400 | 38.4px (×1.2) | 2px (0.0625em) | "IR情報" 等 |
| Page Title (h2) | ゴシック体 | 22px | 400 | 33px (×1.5) | — | 情報ページのタイトル |
| CTA Large | ゴシック体 | 22px | 400 | — | — | 大型CTAボタン |
| CTA Standard | ゴシック体 | 18px | 400 | — | — | 標準CTAボタン |
| Footer Category | ゴシック体 | 18px | 400 | 36px (×2.0) | — | フッターカテゴリ |
| Nav Title | ゴシック体 | 16px | 700 | 16px (×1.0) | — | ナビゲーション項目 |
| Outline Button | ゴシック体 | 16px | 700 | — | — | アウトラインボタン |
| Body | ゴシック体 | 15px | 400 | 22.5px (×1.5) | — | 本文テキスト |
| Body Alt | ゴシック体 | 15px | 400 | 19.5px (×1.3) | — | 密な本文テキスト |
| Footer Nav | ゴシック体 | 14px | 400 | 21px (×1.5) | — | フッターナビ |
| Caption | ゴシック体 | 13.5px | 400 | 20.25px (×1.5) | — | 補足テキスト |
| Menu Label | ゴシック体 | 12px | 400 | 12px (×1.0) | 0.7px (0.058em) | "MENU" ラベル |
| More Button | Roboto | 18px | 400 | — | 0.9px (0.05em) | "More" ボタン |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `22.5px` (15px × **1.5**)
- 本文 alt: `19.5px` (15px × **1.3**) — 密なレイアウト
- ヒーロータイトル (h1 明朝体): `67.5px` (45px × **1.5**)
- セクション見出し JP (h2 明朝体): `57.8px` (34px × **1.7**) — 明朝体見出しはゆったり
- セクション見出し EN (h2 Roboto): `52px` (40px × **1.3**)
- サブセクション (h2 ゴシック体): `38.4px` (32px × **1.2**)
- フッターカテゴリ: `36px` (18px × **2.0**)

**字間 (letter-spacing)** — 実測値:
- 本文: `normal`
- ヒーロータイトル: `1.5px` (= 0.033em)
- セクション見出し EN: `1.5px` (= 0.0375em)
- セクション見出し JP: `1.7px` (= 0.05em)
- サブセクション: `2px` (= 0.0625em)
- Menu ラベル: `0.7px` (= 0.058em)
- More ボタン: `0.9px` (= 0.05em)

**ガイドライン**:
- 見出しには `letter-spacing` を指定するが、本文には適用しない
- 明朝体見出しは line-height 1.5〜1.7 でゆったり組む
- ゴシック体サブセクションは line-height 1.2 とタイトめ

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* palt は使用していない — 実測で確認 */
font-feature-settings: normal;
```

- **palt**: 不使用。游ゴシック体・游明朝体ともにプロポーショナル字詰めは適用されていない
- 見出しの字間調整は `letter-spacing` で個別に制御

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（グリーン背景）**
- Background: `#00664b`
- Text: `#ffffff`
- Padding: 8px 63px 8px 45px（アロー付きで左右非対称）
- Border Radius: 5px
- Font Size: 18px
- Font Weight: 400

**Large CTA（情報ページ用）**
- Background: `#00664b`
- Text: `#ffffff`
- Padding: 15px 0px（幅いっぱい）
- Border Radius: 5px
- Font Size: 22px
- Font Weight: 400

**Outline Button（グリーンボーダー）**
- Background: `#ffffff`
- Text: `#008d54`
- Border: 1px solid `#008d54`
- Padding: 12px 0px
- Border Radius: 0px（角丸なし）
- Font Size: 16px
- Font Weight: 700

**More Button（英語）**
- Background: `#ffffff`
- Text: `#000000`
- Border Radius: 0px
- Padding: 12px 0px
- Font: Roboto 18px weight 400
- Letter Spacing: 0.9px (0.05em)

### Cards

**ESG スライドカード**
- Background: `#ffffff`
- Padding: 23px 20px
- Shadow: なし（フラット）

### Navigation

- ナビ項目の背景: `#008d54`（Forest Green）
- 言語ナビ: `#007b4a`
- 言語アクティブ: `#00623b`
- テキスト: `#ffffff`
- Font Size: 16px / Weight: 700

---

## 5. Layout Principles

### Container

- Max Width: 推定 1100〜1200px（コーポレートサイト標準）

### Spacing

- ヒーローエリア: 大きなキービジュアルを全幅で配置
- セクション間: 大きめの余白でゆったり区切る
- カード内: 23px 20px（ESGカード実測値）

### Grid

- トップページ: スライド形式のカルーセル + 2〜3カラムグリッド
- セクション背景で区切り: `#f0f0f0`, `#eeeeee`, `#f2f2f2` を使い分け

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準状態のカード、ボタン |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | ドロップダウンメニュー |

- サイト全体でフラットなデザインを基調とし、影の使用は控えめ
- ボーダー（`#cbcbcb`, `#dcdcdd`）による区切りが主

---

## 7. Do's and Don'ts

### Do（推奨）

- 3つの書体ボイスを正しく使い分ける: 英語見出し → Roboto、和文ディスプレイ → 明朝体、本文 → ゴシック体
- CTAボタンは `#00664b`（CTA Green）を使う。ブランドカラー `#008d54` よりも暗い専用色
- 見出しには `letter-spacing` を適度に指定する（0.033em〜0.0625em）
- セクション背景にはニュートラルグレー（`#f0f0f0`, `#eeeeee`）を使い、コンテンツを区切る
- ボタンのフォントウェイトは用途で使い分ける: CTA → 400（ゆったり）、アウトライン → 700（力強く）

### Don't（禁止）

- ブランドカラー `#008d54` をCTAボタンの背景に使わない（実サイトでは `#00664b` を使用）
- 明朝体を本文テキストに使わない（ディスプレイ・ヒーロー専用）
- Roboto を和文テキストに混ぜない（英語見出し専用）
- ボタンに大きな `border-radius` を使わない（pill ではない。CTA は 5px、アウトラインは 0px）
- `palt` を適用しない（実サイトでは不使用）
- フッター以外の要素に `#f2f2f2` を使わない（フッター専用色）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルではヒーロータイトルを 28〜32px に縮小
- セクション見出し EN を 28〜32px に縮小
- 本文サイズ 15px は維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #008d54（Forest Green）
CTA Background: #00664b（CTA Green）
Nav Green: #007b4a
Active Green: #00623b
Text Primary: #000000
Text White: #ffffff
Background: #ffffff
Section BG: #f0f0f0
Footer BG: #f2f2f2
Border: #cbcbcb
Divider: #dcdcdd

Gothic Font: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic",
  "メイリオ", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Mincho Font: "游明朝体", "Yu Mincho", YuMincho,
  "ヒラギノ明朝 Pro", "Hiragino Mincho Pro",
  "MS P明朝", "MS PMincho", sans-serif
English Font: Roboto, sans-serif

Body: 15px / weight: 400 / line-height: 1.5 / letter-spacing: normal
Hero Title: 明朝体 45px / weight: 700 / line-height: 1.5 / letter-spacing: 0.033em
Section EN: Roboto 40px / weight: 700 / line-height: 1.3 / letter-spacing: 0.0375em
Section JP: 明朝体 34px / weight: 700 / line-height: 1.7 / letter-spacing: 0.05em
palt: 不使用
```

### プロンプト例

```
住友林業のデザインに従って、事業紹介ページを作成してください。
- ゴシック体: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic",
    "メイリオ", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
- 明朝体（見出し）: "游明朝体", "Yu Mincho", YuMincho,
    "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", sans-serif
- 英語見出し: Roboto, sans-serif
- テキスト色: #000000
- ブランドカラー: #008d54（ナビ、ボーダー）
- CTAボタン: 背景 #00664b、白テキスト、radius 5px
- アウトラインボタン: ボーダー #008d54、テキスト #008d54、radius 0px
- 本文: 15px, line-height: 1.5, letter-spacing: normal
- 見出し（明朝体）: letter-spacing: 0.05em
- 英語見出し: Roboto, letter-spacing: 0.0375em
- palt: 不使用
- セクション背景: #f0f0f0 / #eeeeee
```
