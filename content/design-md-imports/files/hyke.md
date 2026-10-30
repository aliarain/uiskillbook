# DESIGN.md — HYKE

> HYKE（https://hyke.jp/）のデザイン仕様書。
> Shopify ベースのオンラインストア。実サイトの CSS Custom Properties および computed style に基づく。
> A-OTF Gothic BBB Pro N（Morisawa / Adobe Fonts）はドメインライセンスのため、preview.html では Google Fonts の Zen Kaku Gothic New で代替。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極限までそぎ落とされた、ギャラリーのようなモノクロームの空間。商品写真が唯一の主役であり、UIは存在を消す方向に設計されている。ファッションブランドとして「見せない」ことで高級感と緊張感を演出
- **密度**: 非常に疎。大きな余白、最小限のテキスト、タイトな行間で静謐な空気をつくる
- **キーワード**: ミニマル、モノクローム、ギャラリー、建築的、抑制
- **特徴**: 純粋な `#000000` ではなく `#3a3a3a` をテキストに使用し、白背景とのコントラストを柔らげている。色彩はほぼ存在せず、唯一のアクセントカラーはセール用の `#ea0606` のみ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Text / Primary** (`#3a3a3a`): ブランドのベーステキスト色。ボタン背景にも使用。純黒を避けた柔らかい黒
- **Primary Darker** (`#212121`): ホバー・プレス時のボタン背景

### Semantic（意味的な色）

- **Sale** (`#ea0606`): セール価格。サイト唯一のビビッドカラー

### Neutral（ニュートラル）

- **Text Primary** (`#3a3a3a`): 本文テキスト（`--color-text`）
- **Text Body** (`#333232`): 本文テキスト（`--color-body-text`）
- **Text Overlay** (`#ffffff`): 画像上テキスト
- **Text Blankstate** (`rgba(51,50,50,0.35)`): 空状態テキスト
- **Background** (`#ffffff`): ページ背景（`--color-body` / `--color-bg`）
- **Background Alt** (`rgba(51,50,50,0.05)`): 微かなグレー背景（`--color-bg-alt`）
- **Video Background** (`#f2f2f2`): 動画プレースホルダー背景
- **Border** (`#ebebeb`): 区切り線・カードボーダー（`--color-border`）
- **Border Form** (`#cccccc`): フォーム入力欄の枠（`--color-border-form`）
- **Border Form Darker** (`#b3b3b3`): フォーカス時のフォーム枠（`--color-border-form-darker`）
- **Image Overlay** (`#685858`): 画像オーバーレイ（暖かみのあるブラウン）
- **Image Loader Primary** (`rgba(58,58,58,0.06)`): 画像ローディングプレースホルダー
- **Image Loader Secondary** (`rgba(58,58,58,0.12)`): 画像ローディングアニメーション
- **Currency Selector** (`rgba(51,50,50,0.2)`): 通貨セレクタ
- **Blankstate Border** (`rgba(51,50,50,0.2)`): 空状態ボーダー
- **Blankstate Background** (`rgba(51,50,50,0.1)`): 空状態背景

### Surface & Buttons

- **Button Primary** (`#3a3a3a`): プライマリボタン背景（`--color-btn-primary`）
- **Button Primary Darker** (`#212121`): ホバー時ボタン背景（`--color-btn-primary-darker`）
- **Button Primary Text** (`#ffffff`): プライマリボタンテキスト（`--color-btn-primary-text`）
- **Small Button** (`#3a3a3a` テキスト / ボーダー): 小型ボタン
- **Text Field Background** (`#ffffff`): 入力欄背景
- **Text Field Text** (`#000000`): 入力欄テキスト

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- A-OTF Gothic BBB Pro N（Morisawa / Adobe Fonts）— 細身で上品なゴシック体。ブランドの抑制された美学に合致
- sans-serif（generic fallback）

> **注意**: A-OTF Gothic BBB Pro N は Adobe Fonts（ドメインライセンス）のため、ローカル環境では表示されない。Google Fonts で代替する場合は **Zen Kaku Gothic New**（同じく Morisawa 系で字形が近い）を推奨

### 3.2 欧文フォント

- **サンセリフ**: Helvetica, Arial — 見出し・本文共に使用
- **等幅**: 特に指定なし

### 3.3 font-family 指定

```css
/* body（実測値） */
font-family: Arial, Helvetica, a-otf-gothic-bbb-pr6n, "sans-serif";

/* ヘッダー（CSS Custom Property） */
font-family: Helvetica, Arial, sans-serif;  /* --font-stack-header */

/* ボディ（CSS Custom Property） */
font-family: Helvetica, Arial, sans-serif;  /* --font-stack-body */
```

**フォールバックの考え方**:
- 欧文フォント（Helvetica / Arial）を先に指定し、欧文グリフの表示品質を優先
- 和文は Adobe Fonts の a-otf-gothic-bbb-pr6n で表示。読み込み前は generic sans-serif にフォールバック
- ヘッダーとボディで CSS Custom Property は同じスタックだが、body の実測値では Arial が先頭に来ている

### 3.4 文字サイズ・ウェイト階層

> 以下は CSS Custom Properties（`--font-size-*`）および DevTools の computed style による実測値

**CSS Custom Properties（デザイントークン）**

| Role | Desktop | Mobile | 備考 |
|------|---------|--------|------|
| Mega Title Large | 65px | — | 大型キャンペーン |
| H1 | 35px | 32px | ページタイトル |
| H2 | 20px | 18px | セクション見出し |
| H3 | — | 20px | サブ見出し |
| H4 | 17px | 15px | 小見出し |
| H5 | 15px | 13px | ラベル |
| H6 | 14px | 12px | 最小見出し |
| Header | 26px | — | ヘッダーナビ |
| Base | 15px | — | 本文基準サイズ |
| Rich Text Large | 17px | — | リッチテキスト大 |
| Rich Text Small | 13px | — | リッチテキスト小 |

**Computed Style（実測値）**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| body | 16px | 400 | 16px (x1.0) | normal | グローバル基準 |
| h2 (collection) | 20px | 700 | 20px (x1.0) | 0.6px (0.03em) | コレクション見出し |
| h2 (normal) | 20px | 400 | 20px (x1.0) | normal | 一般見出し |
| h2 (NEW IN) | 28px | 400 | 28px (x1.0) | normal | 新着セクション |
| h3 (sub) | 12px | 400 | 15.6px (x1.3) | 0.36px (0.03em) | サブヘッダー |
| p (VIEW MORE) | 16px | 400 | 16px (x1.0) | normal | ナビリンク |
| p (dates) | 14px | 400 | 14px (x1.0) | normal | 日付 |
| p (prices) | 12px | 400 | 16.8px (x1.4) | normal | 価格表示 |
| p (footer) | 10px | 400 | 16px (x1.6) | normal | フッター |
| nav links | 13px | 400 | — | 0.39px (0.03em) | ナビゲーション |
| header links | 12px | 400 | — | 0.39px (0.03em) | ヘッダー内リンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `16px` (16px x 1.0) — **極端にタイト**。ギャラリー的な緊張感を生む
- 見出し (h2): `20px` (20px x 1.0) — テキストサイズと同値
- 新着見出し (h2 NEW IN): `28px` (28px x 1.0) — 同上
- サブヘッダー (h3): `15.6px` (12px x 1.3) — やや余裕あり
- 価格 (p): `16.8px` (12px x 1.4)
- フッター (p): `16px` (10px x 1.6)

**字間 (letter-spacing)** — 実測値:
- 本文: `normal`
- コレクション見出し (h2): `0.6px` (= 0.03em)
- サブヘッダー (h3): `0.36px` (= 0.03em)
- ナビリンク: `0.39px` (= 0.03em)
- ヘッダーリンク: `0.39px` (= 0.03em)

**ガイドライン**:
- line-height: 1.0（テキストサイズと同値）が**デフォルト**。これは一般的なWebサイトと大きく異なり、HYKE の視覚的アイデンティティの核心
- `letter-spacing: 0.03em` がナビゲーション・見出しの標準。本文には適用しない
- ウェイトは 400 がほぼ全てのテキストに使用される。700 はコレクション見出しのみ

### 3.6 禁則処理・改行ルール

```css
/* 特別な禁則設定は確認されず */
/* Shopify デフォルトに準拠 */
```

- 最小限のテキスト量のため、禁則処理が問題になるケースは少ない

### 3.7 OpenType 機能

```css
/* 実測値 */
font-feature-settings: normal;
```

- **palt は適用されていない**。A-OTF Gothic BBB Pro N は字面が小さく字間が自然に開くため、プロポーショナル字詰めなしでも上品に見える
- kern も明示的な指定なし

### 3.8 縦書き

- 該当なし。HYKE は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（ADD TO CART 等）**
- Background: `#3a3a3a`（`--color-btn-primary`）
- Text: `#ffffff`（`--color-btn-primary-text`）
- Hover Background: `#212121`（`--color-btn-primary-darker`）
- Font Weight: 400
- Font Size: 15px（`--font-size-base`）

**Small（フィルター、サイズ選択等）**
- Background: `transparent`
- Text: `#3a3a3a`
- Border: 1px solid `#3a3a3a`
- Font Size: 12-13px
- Letter Spacing: 0.03em

> **特徴**: HYKE のサイトには目立つ CTA ボタンがほとんど存在しない。ブラウジング体験を優先し、購入への誘導は控えめ

### Inputs

- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`（`--color-border-form`）
- Border (focus): 1px solid `#b3b3b3`（`--color-border-form-darker`）
- Font Size: 15px

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（画像が直接配置される）
- Shadow: なし
- テキストは画像の下に極小サイズ（12px）で配置

### Navigation

- Background: `#ffffff`
- Font Size: 13px
- Letter Spacing: 0.03em
- Font Weight: 400
- テキストカラー: `#3a3a3a`

---

## 5. Layout Principles

### Spacing

- HYKE は定義されたスペーシングスケールを持たない。余白は大きく、不規則で、建築的な間（ま）を意識している
- 商品グリッドの gutter は狭く、画像同士の間隔は最小限

### Container

- 全幅レイアウトが基本。固定幅のコンテナは使用しない
- 商品画像は画面幅いっぱいに配置されるケースが多い

### Grid

- 商品一覧: 2カラム（デスクトップ）/ 2カラム（モバイル）
- トップページ: フルブリードの画像ブロックが基本

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全ての要素。HYKE はフラットデザインを徹底 |

- **シャドウは使用されていない**。ボーダーも最小限（`#ebebeb`）。深度の表現は余白と配置のみで行う
- 唯一のレイヤー表現は画像オーバーレイ（`#685858`）と半透明背景（`rgba(51,50,50,0.05)`）

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#3a3a3a` を使い、純粋な `#000000` を避ける（柔らかいコントラスト）
- line-height は 1.0（テキストサイズと同値）をデフォルトとする。HYKE の緊張感はここから生まれる
- ウェイトは 400 を基本とし、700 はコレクション見出しなどごく限られた場面にのみ使う
- `letter-spacing: 0.03em` をナビゲーション・見出しに適用する
- 余白を惜しまない。要素間の距離は広く取り、ギャラリーのような空間をつくる
- 商品画像を最大限に大きく見せる。テキストは添え物
- 色彩を使わない。モノクローム（黒・白・グレー）のみで構成する

### Don't（禁止）

- 純粋な `#000000` をテキストに使わない（HYKE は `#3a3a3a` を使用）
- 装飾的なシャドウやグラデーションを使わない（完全にフラット）
- ボタンを目立たせない。CTA は控えめに
- セール赤 `#ea0606` 以外のアクセントカラーを追加しない
- 本文に `line-height: 1.5` 以上を使わない（HYKE のタイトな行間が崩れる）
- font-weight: 700 を多用しない（400 が HYKE の標準）
- `palt` や過度な `letter-spacing` を適用しない（フォント本来の字間を活かす）

---

## 8. Responsive Behavior

### Breakpoints

> CSS Custom Properties 実測値

| Name | Width | 説明 |
|------|-------|------|
| Small | 750px | モバイル / タブレット境界 |

### フォントサイズの調整

- H1: 35px → 32px
- H2: 20px → 18px
- H4: 17px → 15px
- H5: 15px → 13px
- H6: 14px → 12px

### タッチターゲット

- ナビゲーションリンク: タッチ領域はテキストより大きく取る（パディングで確保）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color: #3a3a3a
Body Text: #333232
Background: #ffffff
Background Alt: rgba(51,50,50,0.05)
Border: #ebebeb
Border Form: #cccccc
Button Primary: #3a3a3a (bg) / #ffffff (text)
Button Hover: #212121
Sale: #ea0606

Font (body actual): Arial, Helvetica, a-otf-gothic-bbb-pr6n, sans-serif
Font (header token): Helvetica, Arial, sans-serif
Font (Google Fonts substitute): "Zen Kaku Gothic New", Helvetica, Arial, sans-serif

Body Size: 15px (token) / 16px (computed)
Line Height: 1.0 (default — intentionally tight)
Letter Spacing: 0.03em (nav/headings) / normal (body)
Font Weight: 400 (default) / 700 (collection headings only)
palt: off
```

### プロンプト例

```
HYKE のデザインに従って、商品一覧ページを作成してください。
- フォント: "Zen Kaku Gothic New", Helvetica, Arial, sans-serif
- テキスト色: #3a3a3a（純粋な黒は使わない）
- 背景: #ffffff
- ボーダー: #ebebeb（極薄）
- ボタン: 背景 #3a3a3a、テキスト #ffffff、ホバー #212121
- line-height: 1.0（タイトな行間がブランドの核心）
- font-weight: 400 をデフォルト、700 は見出しのみ
- letter-spacing: 0.03em をナビ・見出しに
- シャドウなし。フラットデザインを徹底
- 余白を大きく取り、ギャラリーのような空間をつくる
- セール赤 #ea0606 以外の色は使わない
```
