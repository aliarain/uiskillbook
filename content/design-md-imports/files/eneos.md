# DESIGN.md — ENEOS

> ENEOS（https://www.eneos.co.jp/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。CSS Custom Properties は使用されていない（OneTrust Cookie バナーを除く）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本最大級のエネルギー企業にふさわしい、信頼感と堅実さを重視したコーポレートサイト。装飾を抑え、情報を明快に伝えるデザイン
- **密度**: 適度な余白を持つコーポレート型。トップページはタブ切替で個人・法人・企業情報を分離し、情報整理を重視
- **キーワード**: 信頼、堅実、コーポレート、整然、エネルギー
- **特徴**: トップページ（メイリオベース）と企業情報ページ（Noto Sans JP ベース）で異なるフォントスタックを使い分けている。ブランドカラーのティール `#00ada9` はタブのアクティブ状態やアクセントに限定使用し、主張しすぎないバランス

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **ENEOS Teal** (`#00ada9`): ブランドのアクセントカラー。タブのアクティブ状態、カルーセルのアクティブドット、Cookie設定ボタンに使用
- **ENEOS Teal 70%** (`rgba(0,173,169,0.7)`): タブのアクティブ背景（半透明）
- **ENEOS Orange** (`#e94709`): 企業情報ページの見出し・アクセント色。ナビゲーションのアクティブ状態にも使用
- **ENEOS Orange Dark** (`#bf340a`): 企業情報ページの経営戦略セクション背景（ダーク系）

### Semantic（意味的な色）

- **Danger / Attention** (`#cc0000`): 注意喚起アイコン（エクスクラメーションマーク）
- **Energy Orange** (`#fe6230`): 石油・ガス・石油化学カテゴリのアクセント
- **Environment Green** (`#8db501`): 環境カテゴリのアクセント
- **Corporate Navy** (`#27455c`): 企業情報系の装飾背景
- **Statistics Blue** (`#3b609a`): 「数字で見るENEOS」セクション背景
- **Energy Gold** (`#e3b102`): エネルギーシステムカテゴリのアクセント

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Secondary** (`#696969`): Cookie バナー等のセカンダリテキスト
- **Text Placeholder** (`#bbbbbb`): 入力プレースホルダー
- **Border** (`#cccccc`): ボタン・リンクの枠線
- **Border Light** (`#aaaaaa`): 企業情報ページのボタン枠線
- **Background** (`#ffffff`): ページ背景
- **Background Secondary** (`#f4f4f4`): PICK UP セクション等の背景
- **Background Warm** (`#f4f4f0`): 企業情報ページの統計セクション背景
- **Surface Gray** (`#e4e4e4`): カルーセルの非アクティブドット
- **Assist Menu** (`#666666`): フローティングアシストメニュー背景
- **Footer** (`#000000`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（トップページ・共通ヘッダー/フッター）**:
- メイリオ（Windows）
- ヒラギノ角ゴ Pro W3（macOS）
- Osaka（macOS レガシー）
- MS PGothic（Windows レガシー）

**ゴシック体（企業情報ページ本文）**:
- Noto Sans JP（Google Fonts / Web フォント）

### 3.2 欧文フォント

- 和文フォント内蔵の欧文グリフをそのまま使用（欧文専用フォントの指定なし）

### 3.3 font-family 指定

```css
/* トップページ・共通ヘッダー/フッター */
font-family: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 企業情報ページ（見出し・本文） */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- トップページはメイリオを最優先に指定。Windows 環境を主なターゲットとした企業サイト向けの典型的な構成
- 企業情報ページのコンテンツ部分は Noto Sans JP 単独指定で統一感を重視
- 欧文専用フォント（Helvetica Neue 等）は指定されておらず、和文フォントの欧文グリフで表示
- preview.html では Noto Sans JP を Google Fonts から読み込み、メイリオの代替として使用する（メイリオは Windows 専用のため）

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

**トップページ**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Body | Meiryo | 16px | 400 | 25.6px (1.6) | normal | 本文テキスト |
| Tab Label | Meiryo | 18px | 400 | 25px (1.39) | normal | タブの見出しラベル |
| Tab Trigger | Meiryo | 18px | 400 | 28.8px (1.6) | normal | タブリンク |
| News Title | Meiryo | 16px | 400 | 22.4px (1.4) | normal | ニュースタイトル |
| Nav Link | Meiryo | 14px | 400 | 22.4px (1.6) | normal | ヘッダーナビ |
| CTA Link | Meiryo | 16px | 400 | 22.4px (1.4) | normal | ボタン型リンク |
| Overlay Label | Meiryo | 18px | 400 | 25.2px (1.4) | normal | 画像上のラベル |
| Assist Menu | Meiryo | 9px | 400 | 9px (1.0) | normal | フローティングメニュー |
| Attention Icon | Meiryo | 24px | 700 | 18px (0.75) | normal | 注意アイコン |

**企業情報ページ**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Page Title (h1) | Noto Sans JP | 63px | 700 | 75.6px (1.2) | normal | ページ見出し |
| Section Heading (h2) | Noto Sans JP | 43px | 500 | 51.6px (1.2) | normal | セクション見出し |
| Lead Text | Noto Sans JP | 27px | 700 | 40.5px (1.5) | normal | リード文 |
| Button v4 | Noto Sans JP | 20px | 400 | 36px (1.8) | normal | リンクボタン |
| Body Text | Noto Sans JP | 16px | 400 | 24px (1.5) | normal | 本文 |
| Card Text | Noto Sans JP | 16px | 400 | 25.6px (1.6) | normal | カード説明文 |
| Card Link | Noto Sans JP | 16px | 400 | 28.8px (1.8) | normal | カード型リンク |
| Outline Button | Noto Sans JP | 16px | 400 | 28.8px (1.8) | normal | 枠線ボタン |
| Breadcrumb | Meiryo | 13px | 400 | 20.8px (1.6) | normal | パンくずリスト |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- body グローバル: `25.6px` (16px x 1.6)
- 企業情報 h1: `75.6px` (63px x 1.2)
- 企業情報 h2: `51.6px` (43px x 1.2)
- 企業情報 リード: `40.5px` (27px x 1.5)
- 企業情報 本文: `24px` (16px x 1.5)
- ニュースタイトル: `22.4px` (16px x 1.4)

**字間 (letter-spacing)** -- 実測値:
- 全要素: `normal`（明示的な letter-spacing 設定なし）

**ガイドライン**:
- ENEOS のサイトは letter-spacing を一切使用していない。和文テキストのデフォルト字送りで表示
- line-height はページによって異なる: トップページは 1.6、企業情報ページの見出しは 1.2、本文は 1.5

### 3.6 禁則処理・改行ルール

```css
/* 特別な指定なし — ブラウザのデフォルト禁則処理 */
```

- 明示的な `word-break` や `overflow-wrap` の指定は確認されなかった

### 3.7 OpenType 機能

```css
/* 全要素で明示的な palt / kern の指定なし */
font-feature-settings: normal;
```

- palt（プロポーショナル字詰め）は使用していない
- メイリオはもともとプロポーショナルメトリクスを持つため、palt なしでも自然な字送りになる

### 3.8 縦書き

- 該当なし。ENEOS は横書きのみ

---

## 4. Component Stylings

### Buttons

**Standard CTA（白背景・枠線）**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#cccccc`
- Padding: 12px 40px 12px 30px
- Border Radius: 0px
- Font Size: 16px
- Font Weight: 400
- Line Height: 22.4px (1.4)

**Tab（アクティブ状態）**
- Background: `rgba(0,173,169,0.7)` (ENEOS Teal 70%)
- Text: `#ffffff`
- Border Radius: 0px
- Font Size: 18px
- Font Weight: 400

**Tab（非アクティブ状態）**
- Background: `#ffffff`
- Text: `#333333`
- Border Radius: 0px
- Font Size: 18px
- Font Weight: 400
- Padding Top: 10px

**Cookie / Accent Button**
- Background: `#00ada9`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Border Radius: 2px
- Padding: 12px 10px
- Font Size: 13px
- Font Weight: 600

**Outline Button（企業情報ページ）**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#aaaaaa`
- Padding: 19px 30px
- Border Radius: 0px
- Font Size: 16px (Noto Sans JP)
- Font Weight: 400

**Active Nav Link（企業情報ページ）**
- Background: `#e94709`
- Text: `#ffffff`
- Padding: 0px 20px
- Border Radius: 0px

**MORE Button**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#cccccc`
- Padding: 8px 40px 8px 30px
- Font Size: 16px

### Carousel Dots

**Active**
- Background: `#00ada9` (ENEOS Teal)
- Border Radius: 50%

**Inactive**
- Background: `#e4e4e4`
- Border Radius: 50%

### Floating Assist Menu

- Background: `#666666`
- Text: `#ffffff`
- Font Size: 9px
- Padding: 36px 0px 0px（アイコンスペース込み）
- 位置: 画面右端に固定

### Inputs

- Background: transparent
- Border: 0px（枠なし、ボーダーボトムスタイル）
- Font Size: 16px
- Font Weight: 400
- Placeholder Color: `#bbbbbb`

### Cards（企業情報ページ）

- Background: `#ffffff`
- Border: なし（影で分離）
- Border Radius: 0px
- Font: Noto Sans JP
- Description Font Size: 16px
- Description Line Height: 25.6px (1.6)

### Attention Badge

- Background: `#cc0000`
- Text: `#ffffff`
- Border Radius: 28px（pill）
- Font Size: 24px
- Font Weight: 700
- Padding: 6px 3px 5px

---

## 5. Layout Principles

### Container

- Max Width: 約 1100px（トップページメインコンテンツ）
- Padding (horizontal): 可変

### Spacing

- ENEOS のサイトは Tailwind 等のユーティリティフレームワークを使用しておらず、コンポーネント単位で余白を設定

### Grid

- トップページ: タブ切替によるコンテンツ切替（個人／法人／企業情報）
- 企業情報: 2カラム構成（カードグリッド）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットデザイン基調） |
| Overlay | `rgba(0,0,0,0.6)` background | 画像上のテキストオーバーレイ |
| Slider Arrow | `rgba(0,0,0,0.2)` background | カルーセルの前後ボタン |

- ENEOS のサイトは box-shadow をほとんど使用しない、フラットなデザイン
- 深度の表現は背景色の透明度で代替（画像上のオーバーレイ等）

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントはメイリオを第一候補とし、ヒラギノ角ゴ、Osaka、MS PGothic のフォールバックを含める
- テキスト色は `#333333` を使用する（純粋な `#000000` はフッター背景にのみ使用）
- ブランドカラー `#00ada9` はアクセント用途に限定する（タブ、ドット、ボタンのハイライト）
- ボタンは角丸なし（border-radius: 0px）の矩形を基本とする
- ボタンの矢印（→）はテキスト右側にCSSで付加する
- 企業情報ページのコンテンツ部分では Noto Sans JP を使用する
- line-height は本文で 1.5〜1.6、見出しで 1.2 を使用する

### Don't（禁止）

- ブランドカラー `#00ada9` を大面積の背景に使わない（アクセント用途に限定）
- letter-spacing を追加しない（ENEOS サイトは字間設定なし）
- palt を使用しない（メイリオのデフォルトメトリクスで表示）
- ボタンに大きな border-radius を付けない（角丸なしが基本）
- フッター以外の背景に純粋な `#000000` を使わない
- 企業情報ページのコンテンツにメイリオを使わない（Noto Sans JP で統一）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | 未確認 | モバイルレイアウト |
| Desktop | > 960px | デスクトップレイアウト |

### タッチターゲット

- フローティングアシストメニュー: 約 60px x 60px のタッチ領域
- タブ: 十分なパディングで操作可能なサイズ

### フォントサイズの調整

- 企業情報ページの h1 (63px) はモバイルでは縮小される想定
- トップページは元々 16px ベースのため大幅な変更は不要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Teal: #00ada9（アクセント専用）
Brand Orange: #e94709（企業情報ページ見出し）
Text Primary: #333333
Background: #ffffff
Background Secondary: #f4f4f4
Border: #cccccc
Footer: #000000
Assist Menu: #666666
Attention: #cc0000

Top Page Font: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Company Page Font: "Noto Sans JP", sans-serif

Body: 16px / 400 / line-height: 1.6 / letter-spacing: normal
Company h1: 63px / 700 / line-height: 1.2
Company h2: 43px / 500 / line-height: 1.2
palt: 未使用
```

### プロンプト例

```
ENEOS のデザインに従って、サービスステーション検索ページを作成してください。
- フォント: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- テキスト色: #333333
- アクセントカラー: #00ada9（タブ、アクティブ状態のみ）
- 背景: #ffffff
- ボタン: 白背景、#cccccc 枠線、角丸なし、padding 12px 40px
- letter-spacing: normal（字間設定なし）
- palt: 未使用
- フラットデザイン（box-shadow ほぼなし）
```
