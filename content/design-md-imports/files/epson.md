# DESIGN.md — Epson

> Epson（https://www.epson.jp/）のデザイン仕様書。
> 実サイトのCSS computed style に基づく。CSS Custom Properties は使用されていない（レガシーな静的CSS構成）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 技術メーカーとしての信頼感と情報整理を重視した、堅実でクリーンなコーポレートサイト。製品ラインアップの網羅性と探しやすさを最優先
- **密度**: 情報密度が高い。製品カード一覧がグリッド状に並び、ヘッダー・フッターも要素が多い
- **キーワード**: 堅実、クリーン、情報整理、コーポレート、テクノロジー
- **特徴**: 2色のブルーを使い分ける — 機能的ブルー（`#005ab4`）はリンクや検索ボタン、ディープネイビー（`#10218b`）はブランド強調や製品カタログCTAに使用。白背景にグレー系のセクション区切りで、製品情報を見やすく整理

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Blue** (`#005ab4`): 機能的なブルー。リンク色、検索ボタン、インタラクティブ要素に使用
- **Brand Navy** (`#10218b`): ディープネイビー。製品カタログCTA、製品カードのテキスト、ブランド強調に使用

### Semantic（意味的な色）

- **Link** (`#005ab4`): テキストリンク（`<a>` タグのデフォルト色）
- **Link (product)** (`#003399`): 製品ラインアップ内のリンク（スライダー内 `li` で確認）
- **Danger / Error**: 実測なし（コーポレートサイトのため定義が限定的）
- **Warning**: 実測なし
- **Success**: 実測なし

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト、見出し（h2〜h4）
- **Text Strong** (`#000000`): ページタイトル（h1）、重要なお知らせ見出し
- **Text Secondary** (`#333333`): 補足テキスト（primary と同色、サイズで区別）
- **Link Text** (`#005ab4`): リンクテキスト
- **Product Card Text** (`#10218b`): 製品カード内のテキスト（ネイビー）
- **Border Light** (`#eeeeee`): 製品カード枠線、区切り線
- **Border Medium** (`#c7c7c7`): お知らせ領域の枠線
- **Border Footer** (`#cccccc`): 検索セレクトボックスの枠線
- **Background** (`#ffffff`): ページ背景
- **Surface Light** (`#f7f7f7`): 製品ラインアップセクション、ニュースリリースセクション背景
- **Surface Card** (`#fafafa`): 製品情報エリア背景
- **Footer** (`#ebebeb`): フッター背景
- **Search Pill Inactive** (`#dddddd`): 検索結果件数の非アクティブタブ
- **Search Pill Active** (`#666666`): 検索結果件数のアクティブタブ

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ Pro W3（macOS）— **ProN ではなく Pro を使用**
- メイリオ（Windows）
- MS Pゴシック（レガシー Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Arial（検索ボタン、コピーライト等の欧文要素で使用）
- **等幅**: 実測なし

### 3.3 font-family 指定

```css
/* メイン（和文・本文） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;

/* 検索ボタン・コピーライト（欧文要素） */
font-family: Arial, sans-serif;

/* 重要なお知らせ見出し */
font-family: Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 和文フォント（ヒラギノ角ゴ Pro W3）を先頭に指定。日本語サイトとして和文の表示品質を優先
- ヒラギノは **Pro**（ProN ではない）を使用。旧字体互換を意識した指定
- Windows 向けにメイリオ → MS Pゴシックの順でフォールバック
- 検索ボタンやコピーライトなど欧文のみの要素は Arial 単独指定

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

**トップページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Heading 2 | 36px | 700 | normal | normal | セクション見出し「製品ラインアップ」 |
| Heading 3 | 24px | 700 | normal | normal | サブ見出し「ニュースリリース」 |
| Body Link | 14px | 400 | 1.5 (21px) | normal | ナビゲーション、リンク |
| Product Card | 16px | 400 | 1.5 (24px) | normal | 製品カード内テキスト |
| Notice | 14px | 700 | 1.5 (21px) | normal | 重要なお知らせ見出し |
| Caption | 11px | 400 | 1.5 (16.59px) | normal | フッターリンク、パンくず |
| Copyright | 11px | 700 | 1.5 (16.59px) | normal | コピーライト（Arial） |

**製品情報ページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Heading 1 | 34px | 700 | 1.5 (51px) | normal | ページタイトル「製品情報」 |
| Heading 2 | 28px | 700 | 1.5 (42px) | normal | セクション「製品一覧から探す」 |
| Heading 3 | 24px | 700 | 1.5 (36px) | normal | カテゴリ「個人・家庭向けプリンター」 |
| Heading 4 | 20px | 700 | 1.5 (30px) | normal | サブカテゴリ「用途から選ぶ」 |
| Product Item | 16px | 400 | 1.5 (24px) | normal | 製品リンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body: `normal`（ブラウザデフォルト、約 1.2）
- 見出し (h1〜h3): `normal` または `1.5`
- 本文 (14px テキスト): `21px` (= 1.5)
- 製品カード (16px テキスト): `24px` (= 1.5)
- キャプション (11px テキスト): `16.59px` (= 1.5)

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal` — letter-spacing のカスタマイズは一切なし

**ガイドライン**:
- line-height は統一的に `1.5` が基本。body のみブラウザデフォルト `normal`
- letter-spacing は全要素 `normal`。palt も不使用。日本語のプロポーショナル字詰めは行わない方針
- 情報量が多いため、コンパクトな行間で効率的にスキャンできるデザイン

### 3.6 禁則処理・改行ルール

```css
/* 特別な禁則設定は未確認 */
/* ブラウザデフォルトの禁則処理に依存 */
```

- レガシーなサイト構成のため、明示的な `word-break` / `overflow-wrap` の指定は確認されなかった

### 3.7 OpenType 機能

```css
/* 全要素で normal（未使用） */
font-feature-settings: normal;
```

- **palt 不使用**: 見出し・本文ともにプロポーショナル字詰めは適用されていない
- **kern 不使用**: カーニングの明示的指定もなし
- コーポレートサイトとして、デフォルトの均等送りで統一

### 3.8 縦書き

- 該当なし。Epson は横書きのみ

---

## 4. Component Stylings

### Buttons

**CTA（製品カタログ）**
- Background: `#10218b`（ディープネイビー）
- Text: `#fafafa`（ほぼ白）
- Padding: 10px 0 8px
- Border: 1px solid `#10218b`
- Border Radius: 0px（角丸なし）
- Font Size: 16px
- Font Weight: 400

**検索ボタン**
- Background: `#005ab4`（ブランドブルー）
- Text: `#eeeeee`
- Padding: 2px 3px 0
- Border Radius: 10px 0 0 10px（左側のみ角丸）
- Font Family: Arial
- Font Size: 15px

**検索結果件数タブ（アクティブ）**
- Background: `#666666`
- Text: `#005ab4`
- Padding: 2px 8px
- Border Radius: 3px

**検索結果件数タブ（非アクティブ）**
- Background: `#dddddd`
- Text: `#005ab4`
- Padding: 2px 8px
- Border Radius: 3px

### Inputs

**検索入力欄**
- Background: `#ffffff`
- Border: 2px inset `#767676`（ブラウザデフォルト）
- Border Radius: 0px
- Font Size: 14px
- Font Family: ヒラギノ角ゴ Pro W3 スタック

**検索セレクトボックス**
- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border Radius: 3px 0 0 3px
- Font Size: 10px
- Padding: 8px 24px 8px 8px

### Cards（製品カード）

- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Border Radius: 0px（角丸なし）
- Text Color: `#10218b`（ネイビー）
- Font Size: 16px
- Line Height: 1.5
- Padding: 20px 10px 0
- Shadow: なし（フラットデザイン）

### Navigation

- Background: `#ffffff`
- テキストサイズ: 14px
- リンク色: `#005ab4`
- テキスト色: `#333333`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | 小さなパディング |
| S | 10px | カード内パディング |
| M | 15px | リスト項目間 |
| L | 20px | セクション内パディング |
| XL | 30px | 見出し下余白 |
| XXL | 45-50px | セクション間余白 |

### Container

- Max Width: 約 960px（推定、明示的なトークンなし）
- レガシーなテーブル・div ベースレイアウト

### Grid

- 製品カードグリッド: アイコン + テキストの横並び
- 製品ラインアップ: 複数列グリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

- **フラットデザイン**: box-shadow は全要素で `none`
- カード・ボタンに影を使わず、ボーダー（`#eeeeee`）で区切りを表現
- レガシーなコーポレートサイトらしい、フラットで堅実な表現

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#333333` を使い、純粋な `#000000` は h1 等の最上位見出しにのみ使用する
- リンク色は `#005ab4` を統一的に使用する（ブランドの一貫性）
- 製品関連テキストには `#10218b`（ネイビー）を使用して視覚的に区別する
- 製品カードは `1px solid #eeeeee` のボーダーで区切る（shadow は使わない）
- font-family のフォールバックは必ず `sans-serif` で終わる
- 情報量が多いページでは `line-height: 1.5` でコンパクトに収める
- 検索UIのボタンは `#005ab4` ブルーで統一する

### Don't（禁止）

- `letter-spacing` や `palt` を適用しない（実サイトでは全要素 `normal`）
- 製品カードに `border-radius` をつけない（実サイトは角丸なし）
- CTAボタンに角丸をつけない（`#10218b` CTA は `border-radius: 0px`）
- `line-height` を 2.0 のような広い行間にしない（情報密度の高いサイト設計）
- ブランドブルー `#005ab4` とネイビー `#10218b` を混同しない（用途が明確に分かれている）
- 影やグラデーションを多用しない（フラットなデザインポリシー）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | < 768px | モバイルレイアウト（推定） |
| Desktop | >= 768px | デスクトップレイアウト |

- レガシーなレスポンシブ対応。明確なブレークポイントトークンは未定義
- 製品カードグリッドがスタックする程度の最小限の対応

### タッチターゲット

- 製品カードの padding: 20px 10px で十分なタッチ領域を確保
- 検索ボタンは小さめ（padding: 2px 3px）

### フォントサイズの調整

- モバイル時の詳細なフォントサイズ変更は未確認

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue (Links): #005ab4
Brand Navy (CTA): #10218b
Text Primary: #333333
Text Strong: #000000
Product Card Text: #10218b
Link Color: #005ab4
Background: #ffffff
Surface Light: #f7f7f7
Footer: #ebebeb
Border Light: #eeeeee
Border Medium: #c7c7c7

Sans-Serif Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
Copyright Font: Arial, sans-serif

Body Size: 14-16px / line-height: 1.5 / letter-spacing: normal
Heading 1: 34px / weight: 700 / line-height: 1.5
Heading 2: 28-36px / weight: 700 / line-height: normal or 1.5
Heading 3: 24px / weight: 700 / line-height: 1.5
Heading 4: 20px / weight: 700 / line-height: 1.5

palt: 不使用
letter-spacing: 全要素 normal
border-radius: 0px（CTA）/ 3px（タブ）/ 10px（検索ボタン左側のみ）
```

### プロンプト例

```
Epson のデザインに従って、製品一覧ページを作成してください。
- フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
- テキスト色: #333333
- リンク色: #005ab4
- 製品カードテキスト: #10218b（ネイビー）
- 背景: #ffffff、セクション背景: #f7f7f7
- ボーダー: 1px solid #eeeeee
- CTAボタン: #10218b 背景、角丸なし
- line-height: 1.5、letter-spacing: normal
- palt は使わない
- フラットデザイン（box-shadow なし）
```
