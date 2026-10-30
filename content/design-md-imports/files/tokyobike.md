# DESIGN.md — tokyobike

> tokyobike（https://tokyobike.com/）のデザイン仕様書。
> WordPress ベースのサイト。システムフォント（ヒラギノ角ゴ Pro W3）とミュートなグレー系配色による、温かみのあるライフスタイルブランドのデザイン。
> 実サイトの computed style に基づく（2026-05 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのあるミニマルデザイン。純黒を避け `#444444` をテキストに使い、柔らかく落ち着いた印象。自転車とライフスタイルを軸に、気取らないけれど丁寧な世界観
- **密度**: コンパクトな情報密度。基本フォントサイズ 12px、本文 14px と小さめで、日本のライフスタイル系ECに典型的な詰まったレイアウト
- **キーワード**: 温かみ、ミニマル、ミュート、丁寧、ライフスタイル
- **特徴**: 純粋な黒（`#000000`）ではなく `#444444`（ダークグレー）をテキストに使用し、白背景と組み合わせて柔らかい視覚体験を提供。セージグリーン `#e3ebe8` がブランドアクセント。ボタンはすべて角丸なしの直線的なデザイン

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Sage Green** (`#e3ebe8`): ブランドアクセントカラー。フッター背景、タグボタンに使用。セージ／ミントグリーンの穏やかな色
- **Dark Gray** (`#444444`): 実質的なプライマリカラー。テキスト、CTA ボタンに使用

### Neutral（ニュートラル）

- **Text Primary** (`#444444`): 本文テキスト。純黒ではなくダークグレーで温かみを出す
- **Text Black** (`#000000`): ニュースレター見出し、一部リンクのみに使用。限定的
- **Text Secondary** (`#7e7e7e`): 補足テキスト、フッター内テキスト
- **Border** (`#404040`): ボタン枠線
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#e3ebe8`): フッター、タグ領域の背景面

### Link

- **Link Default** (`#0000ee`): ブラウザデフォルトの青リンク。スタイル未指定

### Button Colors

- **Button Primary BG** (`#565656`): メインボタン背景
- **Button CTA BG** (`#444444`): CTAボタン背景
- **Button Secondary Border** (`#404040`): アウトラインボタン枠線

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ Pro W3（macOS）
- メイリオ（Windows）
- MS Pゴシック（レガシー Windows）

### 3.2 欧文フォント

- **サンセリフ**: フォールバックチェーン内で sans-serif ジェネリックのみ
- 欧文専用フォントの指定なし。和文フォント内の欧文グリフを使用

### 3.3 font-family 指定

```css
/* 全体（body） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 和文フォントを先頭に配置し、日本語の表示品質を最優先
- 欧文フォントは指定せず、和文フォント内の欧文グリフをそのまま使用（ブランドの方針）
- macOS（ヒラギノ）→ Windows（メイリオ）→ レガシー Windows（MS Pゴシック）の順
- Web フォント不使用。すべてシステムフォントで表示

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値（2026-05 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Newsletter Heading | 14px | 700 | 20px (x1.43) | 0.84px (0.06em) | ニュースレター見出し、色 #000 |
| Label (bold) | 12px | 700 | 15px (x1.25) | 0.72px (0.06em) | ラベル・強調テキスト |
| Body (article) | 14px | 400 | 28px (x2.0) | 0.84px (0.06em) | 記事本文。非常にゆったり |
| Nav JP | 14px | 400 | 20px (x1.43) | 0.84px (0.06em) | ナビゲーション日本語 |
| Nav EN | 11px | 400 | 13px (x1.18) | 0.66px (0.06em) | ナビゲーション英語ラベル |
| Body (default) | 12px | 400 | 19.2px (x1.6) | 0.72px (0.06em) | デフォルト本文 |
| Footer | 12px | 400 | 18px (x1.5) | 0.72px (0.06em) | フッターテキスト |
| Category Tag | 10px | 400 | 16px (x1.6) | 0.6px (0.06em) | カテゴリタグ |
| Small | 10px | 400/700 | 16px (x1.6) | 0.6px (0.06em) | 最小テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `19.2px` (12px x 1.6)
- 記事本文 (14px): `28px` (14px x **2.0**) — 非常にゆったりした行間
- ラベル (12px bold): `15px` (12px x 1.25) — タイトなラベル
- フッター: `18px` (12px x 1.5)

**字間 (letter-spacing)** — 実測値:
- **全要素共通: `0.06em`** — body に一括指定。見出し・本文・ラベル・ナビすべてに適用
- 12px テキスト: 0.72px
- 14px テキスト: 0.84px
- 10px テキスト: 0.6px

**ガイドライン**:
- `letter-spacing: 0.06em` は**グローバル適用**。見出し専用ではなく全テキストに均一に効いている
- 記事本文は `font-size: 14px` + `line-height: 2.0` でゆったりした組版（note と同様の方針）
- 基本フォントは 12px と小さいが、letter-spacing で可読性を補っている

### 3.6 禁則処理・改行ルール

```css
/* WordPress デフォルト設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

- WordPress 標準の禁則処理に準拠
- 特別なカスタム設定は確認されない

### 3.7 OpenType 機能

```css
/* palt / kern の明示的な適用なし */
font-feature-settings: normal;
```

- **palt**: 未使用。letter-spacing: 0.06em のグローバル適用で字詰めを制御
- OpenType 機能に頼らず、letter-spacing で一律に調整するシンプルなアプローチ

### 3.8 縦書き

- 該当なし。tokyobike は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（メインボタン）**
- Background: `#565656`
- Text: `#000000`
- Padding: 10px 20px
- Border Radius: 0px（角丸なし）
- Font Size: 12px
- Font Weight: 400
- Border: none

**CTA（行動喚起ボタン）**
- Background: `#444444`
- Text: `#ffffff`
- Padding: 9px
- Border Radius: 0px
- Border: 1px solid `#444444`

**Secondary（アウトラインボタン）**
- Background: `#ffffff`
- Text: `#444444`
- Border: 1px solid `#404040`
- Padding: 7px 10px
- Border Radius: 0px

**Tag（タグボタン）**
- Background: `#e3ebe8`
- Text: `#444444`
- Padding: 10px
- Border Radius: 0px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#404040`
- Border (focus): 1px solid `#444444`
- Border Radius: 0px（`--wc-form-border-radius: 0px`）
- Padding: 8px 10px
- Font Size: 12px
- 検索欄のみ Border Radius: 5px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e3ebe8`
- Border Radius: 0px
- Padding: 20px
- Shadow: なし（フラットデザイン）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 5px |
| S | 10px |
| M | 20px |
| L | 30px |
| XL | 40px |
| XXL | 60px |

### Container

- Max Width: WordPress デフォルト（約 1200px）
- Padding (horizontal): 20px

### Grid

- 商品一覧: 3〜4カラムグリッド
- 記事一覧: 2〜3カラムグリッド
- Gutter: 20px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素（デフォルト） |

- tokyobike はフラットデザインを徹底。ボックスシャドウの使用は確認されない
- 奥行きはボーダー（`#e3ebe8` や `#404040`）と背景色の切り替え（`#ffffff` ↔ `#e3ebe8`）で表現
- ホバー時もシャドウではなく opacity やテキスト装飾の変化で応答する

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#444444`（ダークグレー）を使い、純粋な `#000000` を避ける（温かい印象のため）
- `letter-spacing: 0.06em` を全テキストにグローバル適用する（サイト全体で一貫）
- ボタンは角丸なし（border-radius: 0px）の直線的なデザインにする
- 記事本文は `font-size: 14px` + `line-height: 2.0` で組む
- セージグリーン `#e3ebe8` をアクセント面（フッター、タグ）に使い、温かみを出す
- フォントはシステムフォントのみ使用し、Web フォントを読み込まない
- フラットデザインを徹底し、ボックスシャドウを避ける

### Don't（禁止）

- 純粋な `#000000` を本文テキストに使わない（`#000` は見出しの一部のみに限定使用）
- ボタンに border-radius を付けない（0px がブランドのルール）
- letter-spacing を見出しだけに適用しない（tokyobike は全要素に 0.06em）
- 派手なアクセントカラーを使わない（彩度の低いセージグリーンが最も強い色）
- ボックスシャドウやグラデーションで装飾しない（フラットデザインの方針）
- Web フォントを読み込まない（システムフォントで統一）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- デスクトップ・モバイル共に基本 12px を維持（レスポンシブでの変更は限定的）
- グリッドカラム数で情報密度を調整（PC 3-4列 → モバイル 1-2列）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Accent: #e3ebe8（セージグリーン — フッター・タグ）
Button BG: #565656（プライマリ）/ #444444（CTA）
Text Primary: #444444（ダークグレー、黒ではない）
Text Black: #000000（見出し限定使用）
Text Secondary: #7e7e7e
Background: #ffffff
Surface: #e3ebe8
Border: #404040

Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

Body Size: 12px / line-height: 1.6 / letter-spacing: 0.06em
Article Body: 14px / line-height: 2.0 / letter-spacing: 0.06em
Button Radius: 0px（角丸なし）
Elevation: なし（フラットデザイン）
```

### プロンプト例

```
tokyobike のデザインに従って、自転車の商品一覧ページを作成してください。
- フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- テキスト色: #444444（純粋な黒は使わない）
- セカンダリテキスト: #7e7e7e
- 背景: #ffffff、フッター: #e3ebe8
- ボーダー: #404040
- ボタン: border-radius: 0px、背景 #565656
- 本文: 12px, line-height: 1.6, letter-spacing: 0.06em
- 記事本文: 14px, line-height: 2.0
- シャドウは使わない（フラットデザイン）
```
