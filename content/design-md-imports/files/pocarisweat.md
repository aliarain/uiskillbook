# DESIGN.md — Pocari Sweat (pocarisweat.jp)

> 大塚製薬 ポカリスエット（https://pocarisweat.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。CSS Custom Properties は使用されていない（クラシックな CSS 構成）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 清潔感と爽やかさを重視した、日本を代表する飲料ブランドのコーポレートサイト。アイコニックな「ポカリブルー」を軸に、白と青のコントラストで清涼感を表現
- **密度**: 画像主導のビジュアル構成。プロダクト写真やキャンペーンビジュアルが中心で、テキスト情報は簡潔
- **キーワード**: 爽やか、清潔、信頼、クラシック、ブルー＆ホワイト
- **特徴**: 純粋な黒（`#000000`）ではなく、ブルーグレー `#42515a` をテキスト色に採用。飲料ブランドらしい涼しげなトーンを維持。半透明ホワイトのフロステッドグラスオーバーレイが特徴的

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Pocari Blue** (`#015db2`): ポカリスエットのアイコニックなブランドブルー。ロゴ背景、ナビゲーション、リンク色に使用。日本で最も認知度の高いブランドカラーのひとつ
- **Pocari Blue Dark** (`#004a8f`): ホバー時のプライマリカラー（推定）

### Semantic（意味的な色）

- **Danger** (`#cc0000`): エラー、注意喚起（企業サイト標準）
- **Success** (`#2e8b57`): 完了、成功状態（企業サイト標準）

### Neutral（ニュートラル）

- **Text Primary** (`#42515a`): 本文テキスト。ブルーグレーのトーンで清涼感を演出
- **Text Nav** (`#606d75`): ナビゲーションリンク。やや薄いブルーグレー
- **Text Link** (`#015db2`): リンクテキスト。ブランドブルーと同色
- **Background** (`#ffffff`): ページ背景
- **Surface Light** (`#f6f8f9`): セクション背景。ごく薄いグレー
- **Footer Background** (`#ebebeb`): フッター背景
- **Dark Navy Overlay** (`rgba(5, 33, 92, 0.8)`): ニュースセクションのオーバーレイ帯。約 `#05215c` の 80% 不透明度

### Frosted Glass（フロステッドグラス）

- **Frosted Light** (`rgba(255, 255, 255, 0.4)`): 薄い半透明ホワイト
- **Frosted Medium** (`rgba(255, 255, 255, 0.5)`): 中間の半透明ホワイト
- **Frosted Strong** (`rgba(255, 255, 255, 0.8)`): 濃い半透明ホワイト

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ ProN W3（macOS）
- メイリオ / Meiryo（Windows）
- MS Pゴシック / MS PGothic（レガシー Windows）

### 3.2 欧文フォント

- **サンセリフ**: Helvetica, Arial
- **等幅**: 該当なし（コードブロックなし）

### 3.3 font-family 指定

```css
/* グローバル（body） */
font-family: Helvetica, Arial, "ヒラギノ角ゴ ProN W3",
  "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Helvetica）を先頭に配置する欧文優先型
- macOS: Helvetica → ヒラギノ角ゴ ProN W3 の順で和文を解決
- Windows: Arial → メイリオ → MS Pゴシック の順で和文を解決
- クラシックな日本語 Web フォントスタック。Web フォントは使用していない

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Body | 12px | 400 | 1.5 (18px) | normal | 本文テキスト |
| Heading 1 (Logo) | 12px | 700 | 1.5 (18px) | normal | ロゴコンテナ内テキスト |
| Heading 2 | 12px | 700 | 1.5 (18px) | normal | セクション見出し |
| Nav Link | 12px | 400 | 1.5 (18px) | normal | ナビゲーション |
| Nav Highlight | 13.92px | 700 | 1.5 | normal | ナビ強調テキスト |
| Link Text | 12px | 700 | 1.5 (18px) | normal | テキストリンク |
| Button | 13.3px | 400 | 1.5 | normal | ボタン要素 |

**注意**: 基本フォントサイズが 12px と小さい。2000年代の日本語コーポレートサイトに典型的なサイジング

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body: `18px` (12px x 1.5)
- 全要素共通で `line-height: 1.5` を使用

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal`（字間の調整なし）

**ガイドライン**:
- `letter-spacing` は一切調整されていない。クラシックな日本語 Web デザインの特徴
- `line-height: 1.5` がグローバルに適用されている

### 3.6 禁則処理・改行ルール

```css
/* 標準的な設定。特別な禁則処理の指定なし */
word-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* OpenType 機能は使用されていない */
font-feature-settings: normal;
```

- `palt`（プロポーショナル字詰め）は適用されていない
- `kern`（カーニング）も明示的な指定なし

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（CTA）**
- Background: `#015db2`（Pocari Blue）
- Text: `#ffffff`
- Padding: 8px 24px
- Border Radius: 0px（角丸なし。クラシックなスクエアボタン）
- Font Size: 13.3px
- Font Weight: 400

**Secondary（リンクスタイル）**
- Background: `transparent`
- Text: `#015db2`
- Border: none
- Font Weight: 700
- Text Decoration: underline

**注意**: サイトは画像ベースのナビゲーションが中心で、テキストベースの CTA は少ない。リンク自体がCTA の役割を果たすことが多い

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`（推定）
- Border (focus): 1px solid `#015db2`
- Border Radius: 0px
- Padding: 4px 8px
- Font Size: 12px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#ebebeb`
- Border Radius: 0px
- Padding: 16px
- Shadow: none（フラットデザイン）

### Navigation

- Background: `#015db2`（Pocari Blue）
- Text: `#ffffff`
- Height: 自動（コンテンツに依存）
- Position: ページ上部固定

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |

### Container

- Max Width: 960px（推定）
- Padding (horizontal): 16px

### Grid

- 画像ベースのグリッドレイアウト
- プロダクト一覧は 3〜4 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準状態（フラット） |
| 1 | `0 1px 3px rgba(0,0,0,0.12)` | カードホバー |
| 2 | `0 2px 8px rgba(0,0,0,0.15)` | ドロップダウン |

- サイト全体でフラットデザインを採用。影の使用は最小限
- フロステッドグラス（半透明ホワイトオーバーレイ）が影の代わりに深度を表現する

### Frosted Glass Overlay

```css
/* コンテンツオーバーレイ */
background: rgba(255, 255, 255, 0.5);

/* ニュースセクション帯 */
background: rgba(5, 33, 92, 0.8);
```

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#42515a`（ブルーグレー）を使い、清涼感のあるトーンを維持する
- ブランドカラー `#015db2` はナビゲーション、リンク、CTA に限定して使う
- 白背景（`#ffffff`）をベースに、ポカリブルーとのコントラストで清潔感を出す
- フロステッドグラスオーバーレイ（`rgba(255,255,255,0.5)` 等）で奥行きを表現する
- 画像・ビジュアルを中心に構成し、テキストは簡潔にまとめる
- フォントは欧文優先（Helvetica 先頭）のクラシックな日本語フォントスタックを使う

### Don't（禁止）

- テキストに純粋な `#000000` を使わない。`#42515a` のブルーグレートーンを維持する
- ブランドブルー `#015db2` を本文テキストに使わない（リンクと誤認される）
- 角丸を多用しない。ポカリスエットのサイトはスクエアなコンポーネントが基調
- Web フォント（Google Fonts 等）を追加しない。システムフォントスタックを維持する
- フロステッドグラスを濃くしすぎない。`rgba(255,255,255,0.8)` を上限とする
- 12px 未満のフォントサイズを使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでも base 12px を維持（伝統的な日本語コーポレートサイトの慣例）
- 画像ベースのレイアウトがレスポンシブに縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Pocari Blue): #015db2
Text Primary: #42515a
Text Nav: #606d75
Text Link: #015db2
Background: #ffffff
Surface Light: #f6f8f9
Footer Background: #ebebeb
Dark Navy Overlay: rgba(5, 33, 92, 0.8)
Frosted Glass: rgba(255, 255, 255, 0.5)

Font: Helvetica, Arial, "ヒラギノ角ゴ ProN W3",
  "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

Body Size: 12px / line-height: 1.5 / letter-spacing: normal
Button: 13.3px / weight: 400 / border-radius: 0
```

### プロンプト例

```
ポカリスエットのデザインに従って、製品紹介ページを作成してください。
- ブランドカラー: #015db2（Pocari Blue）
- フォント: Helvetica, Arial, "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN", メイリオ, Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- テキスト色: #42515a（ブルーグレー。純粋な黒は使わない）
- 背景: #ffffff（白ベース）
- ナビゲーション: #015db2 背景に白文字
- ボタン: スクエア（border-radius: 0）、#015db2 背景
- フロステッドグラス: rgba(255,255,255,0.5) のオーバーレイで深度表現
- 画像中心のレイアウト。テキストは簡潔に
```
