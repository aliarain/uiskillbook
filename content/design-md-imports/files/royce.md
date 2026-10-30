# DESIGN.md — ROYCE'（ロイズ）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 出典: https://www.royce.com/ — 2026-05-21 取得の computed style 実測値

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 北海道発の高級チョコレートブランドらしい、上品で落ち着いたトーン。ネイビーブルーをブランドカラーに据え、装飾的な英字スクリプトフォントでエレガンスを演出
- **密度**: EC サイトとしての商品一覧は情報密度が高いが、ブランドページは余白を活かしたビジュアル重視
- **キーワード**: エレガント、クラシカル、ネイビー、北海道、ギフト

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary** (`#1e2678`): ブランドネイビー。見出し、リンク、フッター背景、ナビゲーションテキストに使用
- **Primary Light** (`#32327f`): 一部リンクやサイドバーテキスト（`rgb(50,50,127)`）

### Semantic（意味的な色）

- **Danger** (`#c62828`): エラー、削除（推定値）
- **Warning** (`#e0a800`): 警告（推定値）
- **Success** (`#2e7d32`): 成功（推定値）

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Secondary** (`#454545`): 補足テキスト、商品名（`rgb(69,69,69)`）
- **Text White** (`#ffffff`): ダーク背景上のテキスト
- **Text Muted** (`#8f93bc`): フッターのコピーライト（`rgb(143,147,188)`）
- **Border** (`#cfcfcf`): 区切り線（`rgb(207,207,207)`）
- **Tag Background** (`#bbbbbb`): タグ・ピルの背景
- **Background** (`#ffffff`): ページ背景
- **Nav Background** (`#e4eef8`): カテゴリナビゲーションの背景（`rgb(228,238,248)`）
- **Footer Background** (`#1e2678`): フッター背景（ブランドネイビー）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans Japanese, メイリオ, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic ProN, Meiryo, ＭＳ Ｐゴシック, MS PGothic

### 3.2 欧文フォント

- **サンセリフ**: Arial, Helvetica（フォールバック末尾に配置）
- **装飾書体**: tangerineregular（セクション英字タイトル専用）

### 3.3 font-family 指定

```css
/* 本文 */
font-family: "Noto Sans Japanese", メイリオ, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", Arial, Helvetica, sans-serif;

/* セクション英字タイトル */
font-family: tangerineregular;
```

**フォールバックの考え方**:
- Noto Sans Japanese（Webフォント）を最優先
- メイリオ / ＭＳ Ｐゴシック で Windows 環境をカバー
- ヒラギノ角ゴ Pro W3 で macOS をカバー
- 欧文フォント（Arial, Helvetica）はチェーン末尾に配置

**注意**: tangerineregular は Web フォントとしてサイト内で読み込まれる装飾書体。preview.html では Google Fonts の Tangerine で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | tangerineregular | 64px | 400 | 1.6 | normal | セクション英字タイトル（"Topics" 等） |
| Heading (JP) | Noto Sans Japanese | 15px | 400 | 1.6 | normal | セクション日本語タイトル、color: #1e2678 |
| Heading 3 | Noto Sans Japanese | 15px | 700 | 1.6 | normal | サイドバー見出し |
| Product Name | Noto Sans Japanese | 18px | 400 | 1.6 | normal | 商品名、color: #1e2678 |
| Body | Noto Sans Japanese | 13px | 400 | 1.6 | normal | 本文 |
| Price | Noto Sans Japanese | 24px | 400 | 1.6 | normal | 価格表示、color: #454545 |
| Brand Page | Noto Sans Japanese | 22px | 400 | 1.4 | normal | ブランドページ大文字 |
| Caption | Noto Sans Japanese | 12px | 400 | 1.3 | normal | 著作権、補足 |
| Small | Noto Sans Japanese | 9px | 400 | 1.4 | normal | 税込表示等 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（13px / 20.8px）
- **見出しの行間**: 1.6
- **本文の字間 (letter-spacing)**: normal
- **見出しの字間**: normal

**ガイドライン**:
- 全体的に `line-height: 1.6` で統一された簡素な設計
- `letter-spacing` は全テキストで `normal`

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- palt, kern ともに適用なし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

ROYCE' のサイトではテキストリンクと画像ベースの CTA が主体で、明示的なボタンコンポーネントは少ない。

**Tag / Pill（商品カテゴリタグ）**
- Background: `#bbbbbb`
- Text: `#ffffff`
- Padding: 10px
- Border Radius: 20px（pill 型）
- Font Size: 12px
- Font Weight: 400

### Inputs

明示的なフォーム入力は検出されなかった（検索は画像ベースの UI）。

### Cards

- Background: `#ffffff`（推定）
- Border: none
- Border Radius: 0px
- Shadow: none
- 商品カードは画像＋テキストのシンプルな構成

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 5px |
| S | 10px |
| M | 15px |
| L | 20px |
| XL | 30px |
| XXL | 60px |

### Container

- Max Width: 推定 1000px
- Padding (horizontal): 20px

### Grid

- Columns: 2カラム（メインコンテンツ + サイドバー）
- Gutter: 推定 20px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全要素（フラット基調、影なし） |

ROYCE' のサイトはフラットデザインで、box-shadow をほぼ使用しない。

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドネイビー `#1e2678` を見出し・リンク・フッターに一貫して使用する
- セクションタイトルは英字スクリプト（Tangerine 64px）+ 日本語（15px）の二段構成にする
- タグ・ピルは `border-radius: 20px` の pill 型で統一する
- 商品一覧は画像主体で、テキストは控えめに

### Don't（禁止）

- ブランドネイビー以外の濃い色をアクセントカラーに使わない
- セクションタイトルの英字にゴシック体を使わない（必ずスクリプト体を使用）
- 本文のフォントサイズを 13px より大きくしない（EC サイトとして情報密度を保つ）
- 商品カードに影やボーダーを付けない（フラットな構成を維持）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 13px を維持、ブランドページの body は font-size: 10px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #1e2678 (navy)
Text Color: #000000
Text Secondary: #454545
Background: #ffffff
Nav BG: #e4eef8
Footer BG: #1e2678
Font: "Noto Sans Japanese", メイリオ, "ヒラギノ角ゴ Pro W3", sans-serif
Display Font: tangerineregular (64px)
Body Size: 13px
Line Height: 1.6
Tag Pill: radius 20px, bg #bbbbbb
```

### プロンプト例

```
ロイズのデザインシステムに従って、商品一覧ページを作成してください。
- ブランドカラー: #1e2678（ネイビー）
- フォント: "Noto Sans Japanese", メイリオ, "ヒラギノ角ゴ Pro W3", sans-serif
- セクションタイトル: 英字スクリプト (Tangerine 64px) + 日本語 (15px #1e2678)
- 本文: 13px / line-height: 1.6 / color: #000000
- 商品名: 18px / color: #1e2678
- 価格: 24px / color: #454545
- タグ: pill 型 radius 20px, bg #bbbbbb, text white
- フッター: #1e2678 背景
```
