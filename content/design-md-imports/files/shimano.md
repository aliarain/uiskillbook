# DESIGN.md — Shimano (シマノ)

> Shimano（https://www.shimano.com/jp）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。
> メイリオ優先のシステムフォントスタック＋英文アクセントに PT Sans を採用し、複数のシマノブルーと控えめな角丸（4px）で「精密工学メーカーのコーポレートサイト」としての堅実さを表現している。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: インダストリアル・コーポレート。自転車部品・釣具・ボート用品のグローバルメーカーとして、技術力と信頼性を堅実に伝えるレイアウト
- **密度**: ゆったりとした余白に大きなヒーロー動画を配置し、事業部門ごとのカードで導線を分ける構成。情報は整理されて落ち着いた印象
- **キーワード**: 堅実、精密、インダストリアル、クリーン、信頼
- **特徴**:
  - **メイリオ優先のシステムフォントスタック** — Web フォントを使わず、OS 標準のゴシック体に依存する伝統的な日本語コーポレートサイトの構成
  - **英文アクセントに PT Sans** — ラベルやキャッチコピーの英文部分で Google Fonts の PT Sans を使い、欧文に独自のトーンを持たせている
  - **複数のシマノブルー** — `#00a1e9`（ブランドブルー）を中心に、`#0093d7`（リンク）、`#32bfea`（検索ボタン）、`#009ee7`（CTA）と微妙に異なるブルーを使い分ける
  - **ページ背景はライトグレー `#f3f4f5`** — 純白ではなく薄いグレーを地色に使い、工業製品メーカーらしい落ち着いたトーンを形成
  - **`font-feature-settings: "normal"`** — palt を適用しない。メイリオのベタ組みをそのまま使う設計
  - **border-radius は 4px または 0px** — 角丸を極力抑えた直線的なデザイン

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Shimano Blue** (`#00a1e9`): コーポレートカラー。ラベル、バッジ、英文アクセントテキストに使用
- **Shimano Blue Link** (`#0093d7`): テキストリンク色
- **Shimano Blue CTA** (`#009ee7`): Cookie ダイアログ等の CTA テキスト色
- **Shimano Blue Light** (`#32bfea`): 検索ボタン背景。やや明るいブルー
- **Shimano Blue Video** (`#04a6e1`): YouTube バナー背景

### Neutral（ニュートラル）

- **Text Primary** (`#4f4f4f`): 本文テキスト、見出し。Shimano の基本テキスト色
- **Text Nav / Sub** (`#727272`): ヘッダーナビゲーション、ニュースカテゴリバッジ
- **Light Text (on dark)** (`#f3f3f3`): ダーク背景上のテキスト

### Surface & Background

- **Page Background** (`#f3f4f5`): メインページ背景（ライトグレー）
- **Section Background** (`#e3e4e5`): 会社情報ページのセクション背景（やや濃いグレー）
- **White** (`#ffffff`): カード背景、入力フィールド背景
- **Business Card Dark** (`#393e40`): 事業部門カード背景（ダークチャコール）。Bicycle Components / Fishing Tackle / Rowing Equipment の各カードに使用
- **Dark Navy** (`#274558`): ダークアクセントセクション背景
- **Dark Footer** (`#292929`): フッター、動画オーバーレイ背景

### Border

- **Cookie Button Border** (`#009ee7`): CTA アウトラインボーダー
- **Input Border**: 明示的なボーダー指定なし（背景色 `#cdcdcd` で区別）

---

## 3. Typography Rules

### 3.1 和文フォント

**システムフォントスタック（Web フォントなし）**:
- **メイリオ / Meiryo**: 第一優先。Windows のシステムフォント
- **ヒラギノ角ゴ ProN / Hiragino Kaku Gothic ProN / ヒラギノ角ゴ ProN W3**: macOS 向け
- **Osaka**: macOS レガシー
- **MS PGothic**: Windows レガシー

> **注意**: メイリオを最優先に置くのは、近年の日本語 Web サイトでは少数派（游ゴシックや Noto Sans JP が主流）。Shimano のコーポレートサイトは Windows 環境での視認性を最優先する伝統的な方針を採っている。

### 3.2 欧文フォント

- **PT Sans**: 英文アクセントテキスト専用（ラベル "History of" 等）。Google Fonts
- **Roboto**: メインフォントスタックのフォールバック内に含まれる
- **Helvetica, Arial**: 最終フォールバック

### 3.3 font-family 指定

```css
/* メイン（本文・見出し・ナビゲーション） */
font-family: メイリオ, Meiryo, "ヒラギノ角ゴ ProN",
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  Osaka, "ＭＳ Ｐゴシック", "MS PGothic",
  Roboto, Helvetica, Arial, sans-serif;

/* 英文アクセント（ラベル、キャッチ） */
font-family: "PT Sans", sans-serif;
```

**フォールバックの考え方**:
- 和文フォントを先頭に置き、日本語の表示を最優先
- メイリオ → ヒラギノ角ゴ ProN → Osaka → MS PGothic の順で Windows / macOS / レガシー環境をカバー
- 欧文フォールバックとして Roboto → Helvetica → Arial を末尾に配置
- 英文アクセントテキストのみ PT Sans を独立して指定し、和文フォントスタックとは完全に分離

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Nav Mega Title | メイリオ | 24px | 400 | 45.6px (x1.9) | normal | メガメニュー見出し |
| Section Title (h2) | メイリオ | 22px | 700 | 34.1px (x1.55) | normal | 会社情報ページ見出し |
| English Accent | PT Sans | 18px | 400 | — | 0.3px (0.017em) | 英文ラベル |
| Subsection (h3) | メイリオ | 17px | 700 | 26.35px (x1.55) | normal | 会社情報サブ見出し |
| Body (top) | メイリオ | 16px | 400 | 30.4px (x1.9) | normal | トップページ本文 |
| Body (text) | メイリオ | 16px | 400 | 24px (x1.5) | 0.8px (0.05em) | 一般テキスト |
| Nav Label | メイリオ | 14px | 400 | 16.8px (x1.2) | normal | ナビラベル |
| Body (company) | メイリオ | 14px | 400 | 25.2px (x1.8) | normal | 会社情報本文 |
| Nav Item | メイリオ | 13px | 400 | 15px (x1.15) | normal | ナビゲーションリンク |
| Small | メイリオ | 13px | 400–700 | 19.5px (x1.5) | 0.65px (0.05em) | 小テキスト・注釈 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- トップページ本文 (body): `30.4px` (16px x **1.9**) — 日本語サイトとして非常にゆったりとした行間
- 一般テキスト (p): `24px` (16px x **1.5**) — 標準的な行間
- 会社情報本文: `25.2px` (14px x **1.8**) — ゆったりめ
- 見出し (h2/h3): `x1.55` — 見出しとしては標準的
- メガメニュー見出し: `45.6px` (24px x **1.9**) — 本文と同じ比率

**字間 (letter-spacing)** — 実測値:
- 一般テキスト: `0.8px` (16px ベースで **0.05em**)
- 小テキスト: `0.65px` (13px ベースで **0.05em**)
- 英文アクセント (PT Sans): `0.3px` (18px ベースで 0.017em)
- 検索ボタン: `2px` (特殊なケース)
- 見出し・ナビゲーション: `normal`

**ガイドライン**:
- 本文テキストに `letter-spacing: 0.05em` を適用するのが Shimano の基本ルール
- ただし見出し（h2, h3）やナビゲーションには letter-spacing を適用しない
- トップページの本文は `line-height: 1.9` と非常に広い。ページの種類によって `1.5`〜`1.9` で使い分けている

### 3.6 禁則処理・改行ルール

```css
/* Shimano サイトの設定 */
word-break: normal;
overflow-wrap: break-word;
```

- 日本語テキストの禁則処理はブラウザデフォルトに委ねている
- 長い URL の折り返しのみ `overflow-wrap` で対応

### 3.7 OpenType 機能

```css
/* palt は適用しない */
font-feature-settings: normal;
```

- **palt 不使用**: メイリオのデフォルト字詰め（等幅）をそのまま使用
- メイリオ自体がプロポーショナルメトリクスを持つフォントだが、`font-feature-settings` による追加の字詰め調整は行っていない
- 代わりに `letter-spacing: 0.05em` で文字間を広げ、可読性を確保するアプローチ

### 3.8 縦書き

- 該当なし。Shimano は横書きのみ

---

## 4. Component Stylings

### Buttons

**Search Button（検索）** — 実測値:
- Background: `#32bfea`（明るいシマノブルー）
- Text: `#f3f3f3`
- Border Radius: `4px`
- Letter Spacing: `2px`

**Business Section Card（事業部門）** — 実測値:
- Background: `#393e40`（ダークチャコール）
- Text: `#ffffff`
- Border Radius: `0px`（角形）
- 用途: Bicycle Components / Fishing Tackle / Rowing Equipment の事業カード

**Cookie Outline Button** — 実測値:
- Background: `#ffffff`
- Text: `#009ee7`
- Border: `1px solid #009ee7`
- Border Radius: `2px`

**Cookie Accept Button** — 実測値:
- Background: `#ffffff`
- Text: `#009ee7`
- Border: `1px solid #ffffff`
- Padding: `12px 30px`
- Border Radius: `2px`

**YouTube CTA** — 実測値:
- Background: `#292929`
- Border Radius: `4px`

> **特徴**: Shimano のボタンは `border-radius: 0px`〜`4px` の範囲。pill 型（大きな角丸）は使用しない。事業部門カードは完全角形（0px）、検索ボタンや YouTube CTA は 4px の控えめな角丸。

### Cards

**Business Section Card（事業部門カード）**
- Background: `#393e40`
- Text: `#ffffff`
- Border Radius: `0px`
- 用途: 主要事業セクションの導線カード

**Content Card（白背景）**
- Background: `#ffffff`
- Border Radius: `0px`

### Navigation

- **Desktop Header**: 白背景のメガメニュー方式
- **Mega Menu**: ダーク背景（`#292929` 系）にライトテキスト `#f3f3f3`
- **Mega Menu Title**: 24px, weight 400, line-height 1.9
- **Nav Item**: 13px, weight 400, テキスト色 `#4f4f4f`

### Inputs

**Search Input（メイン）**
- Background: `#cdcdcd`
- Border: なし（背景色で区別）
- Border Radius: `4px`
- Font Size: `20px`
- Font Weight: `400`

**Search Input（サブ）**
- Background: `#ffffff`
- Border Radius: `4px`
- Font Size: `16px`
- Padding: `14px 14px 14px 37px`（左に検索アイコン分の余白）

---

## 5. Layout Principles

### Spacing Scale

Shimano はコンテンツの種類に応じた余白設計を採用。ヒーロー動画を起点に、事業部門カードが大きな余白で並ぶ構成。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン周り |
| S | 8px | 要素内パディング |
| M | 16px | カード内パディング |
| L | 24px | セクション内余白 |
| XL | 40px | セクション間余白 |
| XXL | 80px | ヒーロー・セクション間 |

### Container

- Max Width: 全幅レイアウト（コンテンツ部分は約 1200px 内に収まる）
- Padding (horizontal): `20px`〜`40px`

### Grid

- 事業部門カード: 3 カラムのグリッド（Bicycle / Fishing / Rowing）
- ニュース一覧: 1 カラムリスト
- コンテンツエリア: 1 カラム中央揃え

---

## 6. Depth & Elevation

Shimano のデザインはフラットを基調とし、影の使用を極力抑えている。ダークカードやダークセクションによる色の切り替えで階層を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | デフォルト。ほぼすべての要素 |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ドロップダウンメニュー |
| Dark Card | `background: #393e40` | 事業部門カード（影ではなく背景色で深度を表現） |
| Dark Section | `background: #274558` | ダークアクセントセクション |
| Footer | `background: #292929` | フッター・動画セクション |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#4f4f4f` を使い、純粋な `#000000` を避ける
- ページ背景は `#f3f4f5`（ライトグレー）を使い、純白 `#ffffff` を避ける
- ブランドカラーのブルーはコンテキストに応じて使い分ける（`#00a1e9` ラベル / `#0093d7` リンク / `#32bfea` ボタン）
- 本文テキストに `letter-spacing: 0.05em` を適用する
- ボタンの `border-radius` は `0px`〜`4px` に留める
- 英文アクセントテキストには PT Sans を使い、和文フォントスタックとは分ける
- ダーク背景上のテキストは `#f3f3f3` を使う（純白 `#ffffff` に近いが微かに暖色）
- 事業部門カードのダーク背景には `#393e40` を使い、ビジネスの重厚さを表現する

### Don't（禁止）

- pill 型の角丸ボタン（`border-radius: 9999px` や `24px` 等）を使わない — Shimano のデザイン意図に反する
- 純粋な `#000000` をテキストに使わない（`#4f4f4f` を使用）
- ページ背景に純白 `#ffffff` を使わない（`#f3f4f5` を使用）
- `font-feature-settings: "palt"` を適用しない — Shimano はベタ組み + letter-spacing で調整するスタイル
- 和文テキストに PT Sans を混在させない — PT Sans は英文アクセント専用
- 鮮やかなグラデーションやドロップシャドウを多用しない — Shimano はフラットで堅実な印象を維持する
- ブランドブルーを背景のベタ塗りに使わない — Shimano のブルーはテキスト・ラベル・アクセント要素に限定使用

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- Cookie ボタンは padding: 12px 30px で十分なタッチ領域を確保

### フォントサイズの調整

- モバイルでは本文 14-16px
- 見出しはデスクトップの 70-80% 程度に縮小
- メイリオは全プラットフォームでシステムフォントとして利用可能（Windows 標準、macOS にもバンドル）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #00a1e9（Shimano Blue — ラベル・アクセント用）
Link Color: #0093d7
CTA Blue: #009ee7
Search Button: #32bfea
Text Primary: #4f4f4f
Text Nav: #727272
Background: #f3f4f5（ライトグレー）
Section BG Alt: #e3e4e5
Card Dark: #393e40
Dark Navy: #274558
Footer Dark: #292929

Font (Main): メイリオ, Meiryo, "ヒラギノ角ゴ ProN",
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  Osaka, "ＭＳ Ｐゴシック", "MS PGothic",
  Roboto, Helvetica, Arial, sans-serif
Font (English Accent): "PT Sans", sans-serif

Body Size: 16px / line-height: 1.9 (top) or 1.5 (general) / letter-spacing: 0.05em
OpenType: font-feature-settings: normal（palt なし）
Button Radius: 0px–4px
```

### プロンプト例

```
Shimano のデザインに従って、製品カテゴリ一覧ページを作成してください。
- フォント: メイリオ, Meiryo, "ヒラギノ角ゴ ProN",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
    Osaka, "ＭＳ Ｐゴシック", "MS PGothic",
    Roboto, Helvetica, Arial, sans-serif
- 英文アクセント: "PT Sans", sans-serif
- テキスト色: #4f4f4f（純粋な黒は使わない）
- 背景: #f3f4f5（ライトグレー）
- 事業カード: bg #393e40, text #ffffff, radius 0px
- リンク: #0093d7
- ラベル・バッジ: #00a1e9（Shimano Blue）
- ボタン: border-radius: 0px–4px
- 本文: 16px, line-height: 1.5–1.9, letter-spacing: 0.05em
- font-feature-settings: normal（palt を使わない）
```
