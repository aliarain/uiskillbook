# DESIGN.md — nanamica

> nanamica（https://www.nanamica.com/）のデザイン仕様書。
> 実サイトの computed style 実測値に基づく（2026-05-09 取得）。
> システムフォントスタック使用。カスタム Web フォントは未使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 機能美と静けさを両立する、プレミアムアウトドア／ファッションブランド。余計な装飾を排し、プロダクトが主役のデザイン
- **密度**: コンパクト。本文 12px という小さなベースサイズで、エディトリアルな緊張感を持つ
- **キーワード**: 静謐、機能的、ミニマル、プレミアム、モノクローム
- **特徴**: 純粋な黒（`#000000`）ではなく、ダークネイビー `#001133` を全テキストに使用。白と紺の2色でほぼすべてを構成する「Quiet Luxury」のビジュアル。CTAボタンすら色を持たず、白背景＋ボーダーという極めて抑制されたデザイン

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Navy** (`#001133`): ブランドを象徴するダークネイビー。テキスト、アイコン、バッジ背景など、ほぼすべての前景要素に使用
- **White** (`#ffffff`): 背景、ボタン面。ネイビーとの2色構成がブランドアイデンティティ

### Semantic（意味的な色）

- **Danger / Alert** (`#b10f0c`): エラー、未対応ブラウザ警告
- その他のセマンティックカラー（Success, Warning）はサイト上で明示的に確認されていない。ブランドの抑制されたトーンに合わせ、必要な場合は彩度を落として使用すること

### Neutral（ニュートラル）

- **Text Primary** (`#001133`): 本文テキスト（ダークネイビー）
- **Text Secondary** (`#333333`): 補足テキスト、ボタンラベル
- **Overlay** (`rgba(0,17,51,0.6)`): カート・モーダルのオーバーレイ
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#ffffff`): カード、モーダル等の面
- **Border**: サイト上ではボーダーは最小限。必要な場合は `rgba(0,17,51,0.14)` を推奨

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- 游ゴシック Medium / 游ゴシック体 YuGothic（macOS / Windows）
- ヒラギノ角ゴ Pro W3（macOS フォールバック）
- Meiryo UI / メイリオ（Windows フォールバック）

明朝体は使用していない。

### 3.2 欧文フォント

- **サンセリフ**: Apple system font (-apple-system, system-ui), Helvetica Neue, Arial, Verdana, Roboto
- **セリフ**: 使用なし
- **等幅**: 使用なし

### 3.3 font-family 指定

```css
/* グローバル（欧文優先のシステムフォントスタック） */
font-family: -apple-system, "system-ui", "Helvetica Neue", HelveticaNeue,
  Arial, Verdana, Roboto, "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  "Meiryo UI", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- Apple システムフォント（San Francisco）を最優先。macOS / iOS でのネイティブ表示品質を重視
- Helvetica Neue, Arial, Verdana, Roboto で欧文をカバーした後に和文フォントを配置
- 游ゴシックは `Medium` ウェイトを明示指定（Windows での細すぎる表示を防止）
- カスタム Web フォントを使わず、各 OS のネイティブフォントに委ねる設計思想

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-09 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H2 Title | 20px | 700 | 32px (1.6) | 0.01em | "NEW ARRIVALS" 等 |
| H2 Section | 25px | 400 | 40px (1.6) | 0.01em | "JOURNAL" 等 |
| Nav Link | 15px | 400 | 24px (1.6) | 0.024em | カテゴリナビ |
| Category | 13px | 400 | 13px (1.0) | 0.028em | ブランド名ラベル |
| Body | 12px | 400 | 19.2px (1.6) | 0.03em | 本文テキスト |
| Product Name | 12px | 700 | 19.2px (1.6) | 0.01em | 商品名 |
| Product Meta | 11px | 400 | 17.6px (1.6) | 0.01em | ブランド名、価格等 |
| VIEW ALL | 11px | 400 | 11px (1.0) | 0.03em | リンクラベル |
| Lang Badge | 10px | 700 | 16px (1.6) | 0.01em | "JP" / "EN" |
| Search Input | 16px | 400 | 16px (1.0) | normal | 検索テキストボックス |
| Search Button | 12px | 400 | 12px (1.0) | 0.1em | 検索ボタンラベル |
| Cart Count | 11px | 400 | 11px (1.0) | 0.03em | カートバッジ内 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- ほぼすべての要素で **1.6** を一貫適用（body, h2, nav, product name, meta）
- 例外: VIEW ALL, Cart Count, Category 等の単行ラベルは `1.0`（行間なし）
- Search Input も `1.0`

**字間 (letter-spacing)** — 実測値:
- body: `0.03em`（0.36px / 12px）— グローバルに適用
- 見出し・商品名: `0.01em` — 控えめなトラッキング
- ナビリンク: `0.024em`
- 検索ボタン: `0.1em` — 大文字ラベル用に広め

**ガイドライン**:
- `letter-spacing` は全体的に 0.01em〜0.03em の範囲で控えめに設定されている
- 見出しも本文も差が小さく、統一感のあるトラッキング
- line-height 1.6 の一貫適用がブランドのリズムを形成している

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
```

- nanamica は英語コンテンツが多く、日本語禁則処理よりも長い英単語の折り返しが重要

### 3.7 OpenType 機能

```css
/* グローバルに適用 — body 要素で宣言 */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰め。**グローバルに適用**されている
- note とは異なり、本文を含む全テキストに palt が適用されている
- 12px という小さなベースサイズと相まって、コンパクトで洗練された印象を生む

### 3.8 縦書き

- 該当なし。nanamica は横書きのみ

---

## 4. Component Stylings

### Buttons

nanamica のボタンは極めて抑制されたデザイン。カラフルな CTA は存在しない。

**Primary（SHOP NOW）**
- Background: `#ffffff`（白）
- Text: `#001133`（ネイビー）
- Border: 1px solid `#001133`
- Border Radius: 0px（直角）
- Padding: 20px 0px（縦に広い、横はコンテンツ依存）
- Font Size: 12px
- Font Weight: 400
- Letter Spacing: 0.03em

**Secondary（戻る等）**
- Background: `#ffffff`
- Text: `#001133`
- Border: 1px solid `#001133`
- Border Radius: 0px
- Padding: 12px 8px

**Lang Badge（JP / EN）**
- Background: `#001133`（ネイビー）
- Text: `#ffffff`
- Border Radius: 50%（円形）
- Font Size: 10px
- Font Weight: 700

### Inputs

- Background: `#ffffff`
- Border: 推定 1px solid `rgba(0,17,51,0.3)`
- Border Radius: 0px
- Font Size: 16px
- Height: 推定 40px

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（ボーダーレス）
- Border Radius: 0px
- Shadow: なし
- 商品画像 + 商品名 + 価格のシンプルな構成。装飾を極力排した設計

---

## 5. Layout Principles

### Spacing Scale

nanamica は CSS Custom Properties でのスペーシングトークンは未定義。以下は実測からの推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 最小余白 |
| S | 8px | 要素内余白 |
| M | 16px | セクション内余白 |
| L | 24px | セクション間余白 |
| XL | 40px | ページセクション間 |
| XXL | 64px | ヒーロー等の大きな余白 |

### Container

- Max Width: `var(--main-width)` — 実測値は未確認だが、一般的な EC サイトとして 1200〜1400px 程度と推定
- Padding (horizontal): 16〜32px

### Grid

- 商品一覧: 4カラムグリッド（デスクトップ）
- Gutter: 推定 16〜24px

---

## 6. Depth & Elevation

nanamica はほぼフラットなデザイン。シャドウの使用は極めて少ない。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準状態（ほぼすべての要素） |
| 1 | `0 1px 3px rgba(0,17,51,0.08)` | ホバー時のカード（推定） |
| Overlay | `rgba(0,17,51,0.6)` | カート・メニューオーバーレイ |

- ブランドの「静謐さ」を表現するため、影よりも余白と線で階層を表現
- オーバーレイは `#001133` の 60% 透過で、ブランドカラーと統一

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#001133`（ダークネイビー）を使う。純粋な `#000000` は使わない
- font-family はシステムフォントスタックをフルチェーンで指定する（欧文 → 和文の順）
- 本文サイズは 12px を基準にする。コンパクトだがブランドの editorial な印象に不可欠
- line-height は 1.6 を一貫して使う。nanamica のリズムの根幹
- `font-feature-settings: "palt"` をグローバルに適用する
- ボタンは直角（radius: 0）で、白背景＋ネイビーボーダーで構成する
- 色は白（`#ffffff`）とネイビー（`#001133`）の2色に絞る

### Don't（禁止）

- 純粋な `#000000` をテキストに使わない（ブランドの温かみが失われる）
- カラフルな CTA ボタンを作らない（ブランドの抑制されたトーンに反する）
- pill 型（border-radius: 9999px）のボタンを使わない（nanamica は一貫して直角）
- シャドウを多用しない（フラットな表現がブランドの特徴）
- 本文サイズを 14px 以上に大きくしない（コンパクトな editorial 感を維持する）
- 游ゴシックの Medium 指定を省略しない（Windows で細すぎる表示になる）
- 派手なアニメーションやトランジションを入れない（静かな世界観を壊す）

---

## 8. Responsive Behavior

### Breakpoints

サイトの実測値からの推定:

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- ベースサイズが 12px と小さいため、モバイルでも大きな変更は不要
- ナビゲーションは全画面ドロワーに切り替わると推定

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Navy: #001133
Text Primary: #001133
Text Secondary: #333333
Alert: #b10f0c
Background: #ffffff
Overlay: rgba(0,17,51,0.6)

Font: -apple-system, "system-ui", "Helvetica Neue", HelveticaNeue,
  Arial, Verdana, Roboto, "游ゴシック Medium", "Yu Gothic Medium",
  游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  "Meiryo UI", メイリオ, Meiryo, sans-serif

Body Size: 12px
Line Height: 1.6（一貫適用）
Letter Spacing: 0.03em（body）/ 0.01em（見出し）
palt: グローバル適用
Button Radius: 0px（直角）
Button Style: 白背景 + ネイビーボーダー
```

### プロンプト例

```
nanamica のデザインに従って、商品一覧ページを作成してください。
- フォント: -apple-system, "system-ui", "Helvetica Neue", HelveticaNeue,
    Arial, Verdana, Roboto, "游ゴシック Medium", "Yu Gothic Medium",
    游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
    "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    "Meiryo UI", メイリオ, Meiryo, sans-serif
- テキスト色: #001133（純粋な黒は使わない）
- 背景: #ffffff のみ
- ボタン: 白背景、ネイビーボーダー、radius: 0（直角）
- 本文: 12px, line-height: 1.6, letter-spacing: 0.03em
- 見出し: letter-spacing: 0.01em
- font-feature-settings: "palt"（グローバル適用）
- 色は白とネイビーの2色のみ。カラフルな要素は使わない
- シャドウは使わない。フラットなデザイン
```
