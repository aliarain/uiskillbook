# DESIGN.md — CLASKA

> 株式会社 CLASKA 公式サイト（https://www.claska.com/）のデザイン仕様書。
> かつてのデザインホテルを出自とする、東京・目黒のデザインカンパニー。Gallery & Shop "DO"、GALLERY CLASKA、HOIM（家具）、WHOLESALE、オンラインショップ、HÅU（ファッション）を展開する。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景に**極小タイポグラフィ（10-12px）**と**大判写真グリッド**を組み合わせた、ギャラリー/エディトリアル型デザイン。テキストを極限まで小さくし、写真に語らせるアプローチ
- **密度**: 写真を大きく配置し、テキスト情報は最小限。**視覚密度は中〜高（写真主体）、情報密度は低い**
- **キーワード**: ギャラリー的、エディトリアル、ミニマル、純白、極小テキスト、角丸ゼロ、フラット
- **特徴**:
  - **本文はヒラギノ角ゴ ProN**: `"Hiragino Kaku Gothic ProN"` を和文第一候補とするモダンなゴシック構成（Note: ProN であり Pro ではない）
  - **日付・時刻のみ明朝**: `"Hiragino Mincho Pro"` / 游明朝を `span.time` に適用 — 日付だけにセリフを使う繊細なタイポグラフィ設計
  - **極小フォントサイズ**: body 12px、ナビ 10px、カテゴリバッジ 7px。デザインギャラリー的な抑制
  - **line-height 2.0** で極小文字に豊かな行間を確保 — 小さくても読みやすい
  - **letter-spacing は normal** — 詰めも開きも適用しない
  - **font-feature-settings: normal**（palt 未使用）
  - **角丸ゼロ**: border-radius は全要素で 0px。CTA ボタンも含め一切の丸みを排除
  - **影ゼロ**: box-shadow を一切使わないフラット設計
  - **1px 黒罫線**: セクション区切りは薄い水平線（HR）のみ
  - **グレーバッジ**: カテゴリラベルは `#eeeeee` 背景 + 黒文字 + 角丸 0 の矩形タグ（7px）
  - **ロゴ**: 丸い "C" マーク + "CLASKA" テキストを中央配置
  - **ナビは全大文字英語**: ABOUT / NEWS / BRAND & PROJECT / SHOP 等
  - ライトモード前提（ダーク切替なし）
  - WordPress ベースのサイト

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> CLASKA は**モノクロ + グレーの 2 色構成**。装飾色を排し、写真の色彩をそのまま活かすアプローチ。

### Brand

- **Brand Black** (`#000000`): ロゴ・見出し・本文・ナビの基調色。CLASKA のブランドカラーそのもの

### Surface（背景）

- **Page Background** (`#ffffff`): ページ全体の純白
- **Badge Surface** (`#eeeeee`): カテゴリバッジ（NEWS / DO / HOIM 等）の背景色（rgb(238, 238, 238)）

### Text / Foreground

- **Text Primary** (`#000000`): 見出し・本文・ナビ・CTA
- **Text Muted** (`#666666`): 日付・時刻（span.time）の色（rgb(102, 102, 102)）
- **Text Inverse** (`#ffffff`): 写真オーバーレイ上のテキスト（想定）

### Border / Divider

- **Rule** (`#000000`): 1px 黒の水平罫線（セクション区切り）
- **Subtle Divider**: 実測では罫線は黒。グレー罫線は確認されていない

### Semantic（補完）

- 実 UI にエラー・成功色は表面化していない（ニュース＋ギャラリーサイトのためアラート場面がない）
- アラートを追加する場合は赤 `#cc3333` / 緑 `#339933` / 黄 `#cc9933` を**黒基調に調和する渋めの彩度**で

---

## 3. Typography Rules

### 3.1 和文フォント

CLASKA は **2 系統のフォント**を使い分ける:

#### 本文・ナビ・見出し — ヒラギノ角ゴ ProN

- **第1候補**: `"Hiragino Kaku Gothic ProN"` / `"ヒラギノ角ゴ ProN W3"`
- **第2候補**: `YuGothic` / `"Yu Gothic"`
- **第3候補**: `メイリオ` / `Meiryo`
- **第4候補**: `"ＭＳ ゴシック"`
- **最終フォールバック**: `sans-serif`

> Note: ProN（JIS X 0213 対応）を指定。Pro（JIS X 0208）ではない。macOS / iOS ではヒラギノ角ゴシック ProN が標準搭載。

#### 日付・時刻のみ — 明朝体

- **第1候補**: `"Hiragino Mincho Pro"`
- **第2候補**: `游明朝` / `"Yu Mincho"` / `YuMincho`
- **最終フォールバック**: `serif`
- **適用範囲**: `span.time` 要素のみ（日付表示: "2026.05.08" 等）

### 3.2 欧文フォント

- 欧文専用フォントは未指定。和文フォントチェーン内の欧文グリフ（Hiragino / YuGothic）で対応
- ナビ項目は英語テキストだが、フォントは本文と同じチェーン
- 等幅・特殊書体: 該当なし

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・ナビ・見出し・フッタ */
font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  YuGothic, "Yu Gothic", メイリオ, Meiryo, "ＭＳ ゴシック", sans-serif;

/* 日付・時刻（span.time） */
font-family: "Hiragino Mincho Pro", 游明朝, "Yu Mincho", YuMincho, serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ ProN を最優先 — macOS / iOS での表示品質を最大化
- YuGothic で Windows をカバー
- メイリオ / MS ゴシックは旧 Windows 環境のフォールバック
- 日付の明朝はヒラギノ明朝 Pro を最優先、游明朝で Windows 対応
- AI で再現する場合:
  - 本文: `"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif` に簡略化
  - 日付: `"Hiragino Mincho Pro", "Yu Mincho", serif` に簡略化
  - Google Fonts 代替: 本文 → `"Noto Sans JP"`, 日付 → `"Noto Serif JP"`

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-08 取得）

| Role | Family | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|--------|------|--------|-------------|----------------|-------|------|
| Logo (h1) | ヒラギノ角ゴ | **28px** | **600** | 42px (×1.5) | normal | `#000000` | ヘッダーロゴ "CLASKA" |
| Body (p) | ヒラギノ角ゴ | 12px | 400 | 24px (×2.0) | normal | `#000000` | 段落・通常テキスト |
| Article Title (p.title) | ヒラギノ角ゴ | 12px | **700** | 24px (×2.0) | normal | `#000000` | 記事・ニュースのタイトル |
| Nav Link | ヒラギノ角ゴ | **10px** | **500** | 10px (×1.0) | normal | `#000000` | ABOUT / NEWS / SHOP 等 |
| Date (span.time) | **明朝** | 10px | 400 | 18px (×1.8) | normal | `#666666` | "2026.05.08" 等の日付 |
| Category Badge | ヒラギノ角ゴ | **7px** | 400 | 12.6px (×1.8) | normal | `#000000` | NEWS / DO / HOIM 等のバッジ |
| Footer Copyright | ヒラギノ角ゴ | 10px | 400 | 18px (×1.8) | normal | `#000000` | © CLASKA |

### 3.5 行間・字間

- **本文の行間**: **2.0**（24 / 12）— 極小フォントに対して非常に広い行間。読みやすさを担保
- **ロゴの行間**: **1.5**（42 / 28）
- **日付の行間**: **1.8**（18 / 10）
- **ナビの行間**: **1.0**（10 / 10）— ナビは行間なしのタイトな配置
- **letter-spacing**: **normal（0）** — 本文・見出し・ナビ問わず詰めも開きも適用しない

**ガイドライン**:
- CLASKA は 10-12px の極小テキストが基調。**line-height 2.0 を厳守**して可読性を確保
- ナビは 10px / line-height 1.0 でコンパクトに。上下 padding 30px / 左右 10px でタッチ領域を確保
- 日付は 10px / 明朝 / `#666666` — 本文ゴシックとの微妙なコントラストが CLASKA のディテール

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- ニュースタイトルは短いフレーズが中心。長文の禁則処理が問題になる場面は少ない
- 句読点は標準のまま使用（palt 無効）

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt / kern を有効化していない** — 小さな文字サイズで詰めると可読性が落ちるため、normal が正しい選択
- ヒラギノ角ゴの標準メトリクスをそのまま使用

### 3.8 縦書き

- 該当なし。横書きのみ
- ギャラリー展示のキャプション等で将来的に `writing-mode: vertical-rl` を使う余地はあるが、現行 UI は横書き統一

---

## 4. Component Stylings

### Buttons

CLASKA のサイトには**目立つ CTA ボタンがほぼ存在しない**。テキストリンクで遷移を促すミニマルな設計。

**テキストリンク（主要な遷移手段）**
- Color: `#000000`
- Font: 12px / weight 400 / line-height 2.0
- Text Decoration: underline（ホバー時）
- Hover: opacity 0.7（推奨）

**Category Badge（カテゴリラベル）**
- Background: `#eeeeee`
- Text: `#000000`
- Padding: `3px 7px`
- Border Radius: `0px`
- Font: 7px / weight 400 / line-height 1.8
- Border: なし

CLASKA トーンに合わせてボタンを追加する場合:

**Primary Button（追加時の推奨）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `10px 24px`
- Border Radius: `0px`（角丸禁止）
- Font: 10px / weight 500 / letter-spacing normal
- Hover: background `#333333`

**Secondary Button（追加時の推奨）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `10px 24px`
- Border Radius: `0px`
- Font: 10px / weight 500
- Hover: background `#000000` / text `#ffffff`

### Inputs

実 UI に検索欄・フォームは表面化していないが、CLASKA トーンに合わせる場合:

- Background: `#ffffff`
- Border: `1px solid #000000`
- Border (focus): `2px solid #000000`
- Border Radius: `0px`
- Padding: `8px 12px`
- Font: 12px / ヒラギノ角ゴ / weight 400
- Color: `#000000`
- Placeholder: `#666666`

### Cards / Photo Cards

トップページの事業紹介カード（3 カラムの大判正方形写真）:

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`
- Shadow: なし（フラット）
- 構造:
  - 正方形の写真（1:1 アスペクト比。事業を象徴するイメージ）
  - 事業名テキスト（12px / weight 400 or 700）
  - カテゴリバッジ（7px / `#eeeeee` 背景）

### News List（ニュース一覧）

- 構造: 日付（明朝 10px / `#666666`）+ カテゴリバッジ + タイトル（12px / weight 700）を 1 行に配置
- 各行の区切り: 1px 黒罫線
- Padding: `16px 0`

### Header / Nav

- Background: `#ffffff`
- Color: `#000000`
- ロゴ: 丸い "C" マーク + "CLASKA" テキスト（28px / weight 600）中央配置
- "CLASKA ONLINE SHOP" リンク: 右上に小さく配置（10px）
- ナビ項目: 10px / weight 500 / 英語大文字 / padding 30px 10px / line-height 1.0
- ナビは水平 1 行、均等配置

### Footer

- Background: `#ffffff`（ヘッダーと同じ白背景）
- Color: `#000000`
- Copyright: 10px / weight 400
- 水平罫線で本文エリアと区切る

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 3px | バッジ内余白（padding 3px 7px） |
| S | 8px | リスト項目間 |
| M | 16px | セクション内余白 |
| L | 24px | カード間 |
| XL | 48px | セクション間 |
| XXL | 96px | ページ上下余白 |

### Container

- Max Width: 960px（推奨。コンパクトなギャラリー幅）
- Padding (horizontal): mobile 16px / desktop 32px

### Grid

- トップページの事業紹介カード: **3 カラム**（等幅、正方形写真）
- ニュース一覧: 1 カラム（リスト形式）
- Gutter: 16px
- モバイルでは 1 カラムに折り返し

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | すべての要素 |

- **全要素 0px**。CTA ボタンも含め角丸は一切使わない
- これが CLASKA のギャラリー的な直線美を定義する

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素 |

- CLASKA は**影を一切使わない**。完全なフラット設計
- 視覚階層は**フォントサイズの差**（7px / 10px / 12px / 28px）と**写真の面積**で作る
- カード・モーダル・ドロップダウンすべてフラット
- ホバー演出は opacity の変化のみ

---

## 7. Do's and Don'ts

### Do（推奨）

- **背景は純白 `#ffffff`**、テキストは純黒 `#000000`（CLASKA はコントラスト最大のモノクロ）
- **本文は 12px / ヒラギノ角ゴ ProN / weight 400 / line-height 2.0** — 小さくても広い行間で読みやすく
- **ナビは 10px / weight 500 / 英語大文字** — ギャラリーの壁面キャプションのような抑制
- **日付は 10px / 明朝体 / `#666666`** — ゴシック本文の中で明朝が繊細なアクセントになる
- **カテゴリバッジは 7px / `#eeeeee` 背景 / padding 3px 7px / radius 0px** — 極小・矩形・グレー
- **写真は大きく、テキストは小さく** — 写真に語らせるデザイン哲学を貫く
- **セクション区切りは 1px 黒罫線** — 薄い水平線のみ
- **letter-spacing は normal を貫く** — 詰めも開きも適用しない
- 角丸は**すべて 0px** — CTA も含め一切の丸みを排除
- 影は**一切なし** — 完全フラット
- ナビの padding は上下 30px / 左右 10px でタッチ領域を確保
- フッタも白背景 + 黒テキスト（サイト全体が白の統一感）

### Don't（禁止）

- border-radius を使わない（全要素 0px が CLASKA のルール）
- box-shadow を使わない（影ゼロが絶対原則）
- 本文を 14px 以上にしない（12px が CLASKA の基調。大きくすると別のサイトになる）
- ナビを 12px 以上にしない（10px のコンパクトさがギャラリー感を出す）
- letter-spacing を +0.04em 等で詰めない（normal が CLASKA の組）
- font-feature-settings: "palt" を適用しない（normal が CLASKA の選択）
- 鮮やかな装飾色を背景に使わない（白と `#eeeeee` のグレーのみ。色は写真に任せる）
- グラデーション・テクスチャを使わない（フラットな面のみ）
- 影・elevation を使わない（フラット原則）
- 日付以外に明朝体を使わない（明朝は `span.time` 限定）
- ロゴ以外に weight 600 を使わない（本文 400、タイトル 700、ナビ 500 の 3 段階）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769-1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Logo: 28px → 24px
- Body: 12px 維持（これ以上縮小しない）
- Nav: 10px 維持。ハンバーガーメニューに切り替え
- カードグリッド 3 → 2 → 1 カラム
- ニュース一覧は 1 カラムのまま維持

### タッチターゲット

- ナビ項目は padding 30px 10px で視覚サイズより広いタップ領域を確保
- 最小タッチターゲット: 44×44px（WCAG 基準）

### フォントサイズの調整

- CLASKA はもともと極小フォント（10-12px）のため、モバイルでの追加縮小は**しない**
- 必要に応じて line-height を 1.8 に縮めてコンパクト化（2.0 → 1.8）

### ダークモード

- **対応なし**。ライトモード固定
- 白と黒のモノクロ設計が CLASKA のアイデンティティ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白）
Text Primary: #000000（純黒）
Text Muted: #666666（日付・時刻）
Badge Surface: #eeeeee（カテゴリバッジ背景）

Body Font: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  YuGothic, "Yu Gothic", メイリオ, Meiryo, "ＭＳ ゴシック", sans-serif
Date Font (明朝): "Hiragino Mincho Pro", 游明朝, "Yu Mincho", YuMincho, serif
Google Fonts 代替: Body → "Noto Sans JP", Date → "Noto Serif JP"

Logo: 28px / weight 600 / line-height 1.5
Body: 12px / weight 400 / line-height 2.0 / letter-spacing normal
Article Title: 12px / weight 700 / line-height 2.0
Nav: 10px / weight 500 / line-height 1.0 / 英語大文字
Date: 10px / 明朝 / weight 400 / color #666666 / line-height 1.8
Category Badge: 7px / weight 400 / bg #eeeeee / padding 3px 7px / radius 0px

font-feature-settings: normal（palt 適用なし）
Border Radius: 0px（全要素）
Shadow: none（フラット）
```

### プロンプト例

```
CLASKA のデザインに従って、ブランドのニュース一覧ページを作成してください。
- 背景: #ffffff（純白）
- 本文フォント: "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif
- 日付フォント: "Hiragino Mincho Pro", "Yu Mincho", serif
- font-feature-settings: normal（palt は適用しない）
- letter-spacing: normal（詰めない）
- ヘッダー: ロゴ "CLASKA" 28px / weight 600 / 中央配置
- ナビ: ABOUT / NEWS / BRAND & PROJECT / SHOP / WHOLESALE — 10px / weight 500 / 英語大文字 / padding 30px 10px
- ニュースティッカー: 日付（明朝 10px / #666666）+ カテゴリバッジ（7px / bg #eeeeee / padding 3px 7px / radius 0）+ タイトル（12px / weight 700）
- ニュース各行は 1px 黒罫線で区切る
- セクション下部の写真カード: 3カラムグリッド / 正方形 / border-radius 0 / 影なし
- 本文・説明: 12px / weight 400 / line-height 2.0 / color #000000
- フッタ: 白背景 / 黒テキスト 10px / © CLASKA
- border-radius は全要素 0px（角丸禁止）
- box-shadow は使わない（フラット）
- 装飾色は使わず、モノクロ + #eeeeee グレーのみ
- 写真を大きく、テキストを極小に — ギャラリー的な余白感を出す
```
