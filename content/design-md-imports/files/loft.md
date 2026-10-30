# DESIGN.md — LOFT（ロフト）

> LOFT（https://www.loft.co.jp/）のデザイン仕様書。
> 文房具・雑貨・コスメ・インテリアを扱うライフスタイルストア。セブン＆アイグループ。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ロフトイエロー `#fdd000`** をシンボルカラーに据え、白背景 + システムフォント（游ゴシック / ヒラギノ角ゴ / メイリオ）で構成された実用的で親しみやすいデザイン
- **密度**: 本文 line-height 1.4 で比較的コンパクト。ニュース一覧・商品グリッドなど情報密度が高い EC 寄りのレイアウト
- **キーワード**: ロフトイエロー、システムフォント、実用的、親しみやすさ、雑貨店の賑やかさ
- **特徴**:
  - **ロフトイエロー `#fdd000`** がヘッダー背景・ブランドアイコンに使われ、ページ全体のアイキャッチになる
  - Webフォント不使用。環境ごとのシステムフォントに依存するフォールバック構成
  - コーポレートサイトとネットストアで**異なる font-family スタック**を使用（後述）
  - コンテンツ領域では `font-feature-settings: "kern"` を適用し、欧文のカーニングを有効化
  - ボタンは `border-radius: 3px〜5px` の控えめな角丸 + アウトラインスタイルが基本
  - **NEW!! バッジ**は赤 `#e40012` 背景 + 白文字で、EC サイトらしい鮮度訴求
  - 背景に `#fffbf4`（暖かみのあるオフホワイト）を部分的に使い、雑貨店らしい温もりを演出
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — LOFT Yellow

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| LOFT Yellow | `#fdd000` | (253, 208, 0) | ブランドカラー。ヘッダー背景、アイコン |
| Yellow Dark | `#eba700` | (235, 167, 0) | アクセント。矢印アイコン「＞」、リンクカラー |

### Accent — Red

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| NEW Red | `#e40012` | (228, 0, 18) | NEW!! バッジ背景。鮮度・新着の強調 |

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 本文テキスト・見出し（コーポレートサイト） |
| Dark Gray | `#333333` | (51, 51, 51) | 本文テキスト（ネットストア）、補助テキスト |
| Mid Gray | `#666666` | (102, 102, 102) | ページネーション・補助 UI |
| Light Gray | `#999999` | (153, 153, 153) | 日付テキスト |
| Border Gray | `#cccccc` | (204, 204, 204) | ボタン枠線、区切り線 |
| Button Gray | `#eeeeee` | (238, 238, 238) | ボタン背景（カラー表示ボタン等） |
| Input Gray | `#e1e2e5` | (225, 226, 229) | 検索入力欄の背景 |

### Surface / Background

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| White | `#ffffff` | (255, 255, 255) | メイン背景・カード面 |
| Warm White | `#fffbf4` | (255, 251, 244) | ネットストアのサイドバー背景 |
| Light Gray BG | `#f4f4f4` | (244, 244, 244) | セクション背景（コーポレート） |
| Footer Gray | `#f1f1f1` | (241, 241, 241) | フッター背景（コーポレート） |
| Help BG | `#fafafa` | (250, 250, 250) | ヘルプ・ガイド領域の背景 |
| Category Highlight | `#f3f2db` | (243, 242, 219) | カテゴリーハイライト背景 |

### CTA / Buttons

- **Primary CTA（ネットストア）**: 背景 `#ffffff` / 文字 `#000000` / border `1px solid #cccccc` / radius `5px` / font-size 12px / weight 700 / padding `4px` / line-height `40px`
- **Secondary Button**: 背景 `#eeeeee` / 文字 `#000000` / radius `3px` / font-size 11px / padding `0px 7px`
- **Search Button**: 背景 `#ffffff` / 文字 `#111111` / border `1px solid #cccccc` / radius `3px` / font-size 12px
- **Outlined Link Button**: 背景 `#ffffff` / 文字 `#1f2022` / border `1px solid #a2a1ab` / radius `0px` / padding `8px 32px 8px 8px`

### Semantic（実測未確認・推奨値）

- **Danger**: `#e40012`（NEW Red を流用）
- **Success**: `#00875a`
- **Warning**: `#eba700`（Yellow Dark を流用）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック（YuGothic）が最優先。フォールバックにヒラギノ角ゴ、メイリオ
- **明朝体**: 使用しない（全面ゴシック）

### 3.2 欧文フォント

- 和文フォント内蔵の欧文グリフを使用（専用の欧文書体指定なし）

### 3.3 font-family 指定

```css
/* コーポレートサイト（ヘッダー・ナビ・フッター） */
font-family: YuGothic, 游ゴシック, メイリオ, Meiryo, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", sans-serif;

/* コンテンツ領域（ニュース・記事） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;

/* ネットストア */
font-family: メイリオ, Meiryo, "ＭＳ ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;
```

**フォールバックの考え方**:
- コーポレートサイトは游ゴシック優先（macOS の見栄えを重視）
- コンテンツ領域はヒラギノ角ゴ Pro を最優先。**ProN ではなく Pro** を指定している点に注意
- ネットストアはメイリオ優先（Windows での表示安定性を重視）
- Webフォント不使用のため、環境ごとに見た目が変わる

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・ネットストア、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (Logo) | 游ゴシック系 | 16px | 400 | 22.4px (×1.4) | normal | `#000000` | ロゴ画像用。テキスト非表示 |
| H2 (Section) | ヒラギノ角ゴ Pro系 | 16px | 700 | 22.4px (×1.4) | normal | `#000000` | セクション見出し「重要なお知らせ」等 |
| H2 (Store) | メイリオ系 | 18px | 700 | 18px (×1.0) | normal | `#000000` | ネットストアのセクション見出し |
| H3 (Notice) | ヒラギノ角ゴ Pro系 | 14px | 400 | 19.6px (×1.4) | normal | `#000000` | お知らせリスト項目 |
| H3 (Store) | メイリオ系 | 18px | 700 | 18px (×1.0) | normal | `#000000` | ネットストアのサブ見出し |
| H4 (Store) | メイリオ系 | 12.8px | 400 | 23px (×1.8) | normal | `#333333` | カード内のクリエイター名等 |
| P (Body) | ヒラギノ角ゴ Pro系 | 16px | 400 | 30px (×1.875) | normal | `#000000` | 本文（コーポレート） |
| P (Body Alt) | ヒラギノ角ゴ Pro系 | 16px | 400 | 22.4px (×1.4) | normal | `#000000` | 本文（コンテンツ領域） |
| P (News Title) | ヒラギノ角ゴ Pro系 | 13px | 400 | 19.5px (×1.5) | normal | `#000000` | ニュースタイトル |
| P (Article) | ヒラギノ角ゴ Pro系 | 14px | 400 | 21px (×1.5) | normal | `#000000` | 記事本文 |
| P (Date) | ヒラギノ角ゴ Pro系 | 12px | 400 | 16.8px (×1.4) | normal | `#000000` | 日付 |
| P (Store Body) | メイリオ系 | 12px | 400 | 12px (×1.0) | normal | `#000000` | ネットストアのお知らせ |
| P (Store Desc) | メイリオ系 | 12px | 400 | 15.6px (×1.3) | normal | `#000000` | ネットストアの商品名 |
| Nav | 游ゴシック系 | 14px | 700 | 14px (×1.0) | normal | `#000000` | グローバルナビ |
| Nav (Sub) | 游ゴシック系 | 10px | 700 | 14px (×1.4) | normal | `#000000` | サブナビ |
| Caption (Date) | メイリオ系 | 12px | 400 | 12px (×1.0) | normal | `#999999` | ネットストアの日付 |
| Badge | ヒラギノ角ゴ Pro系 | 11px | 400 | 16.5px (×1.5) | normal | `#ffffff` | NEW!! バッジ |
| Footer | 游ゴシック系 | 9.375px | 400 | 9.375px (×1.0) | normal | `#000000` | フッターリンク |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.4〜1.875（ページにより幅がある。コーポレートは 1.875、コンテンツは 1.4）
- **見出しの行間**: 1.0〜1.4（タイトに詰めたスタイル）
- **本文の字間 (letter-spacing)**: normal（0）
- **見出しの字間**: normal（0）

### 3.6 禁則処理・改行ルール

```css
/* 実測値に基づく推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* コンテンツ領域で適用 */
font-feature-settings: "kern";
```

- **kern**: 欧文のカーニングを有効化。コンテンツ領域（ヒラギノ角ゴ Pro 系フォントスタック使用時）で適用
- **palt**: 使用しない。和文のプロポーショナル字詰めは無効
- ヘッダー・ナビ（游ゴシック系）では `font-feature-settings: normal`

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ネットストア）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Padding: 4px
- Border Radius: 5px
- Font Size: 12px
- Font Weight: 700
- Line Height: 40px

**Secondary（カラー表示等）**
- Background: `#eeeeee`
- Text: `#000000`
- Border: none
- Padding: 0px 7px
- Border Radius: 3px
- Font Size: 11px
- Font Weight: 400

**Outlined Link**
- Background: `#ffffff`
- Text: `#1f2022`
- Border: 1px solid `#a2a1ab`
- Padding: 8px 32px 8px 8px
- Border Radius: 0px
- Font Size: 16px
- Font Weight: 400

**Search Button**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#cccccc`
- Border Radius: 3px
- Font Size: 12px
- Font Weight: 400

### Inputs

- Background: `#e1e2e5`
- Border: none
- Border Radius: 0px 3px 3px 0px（右側のみ角丸）
- Padding: 4px
- Font Size: 12px

### Cards

- Background: `#ffffff`
- Border: none（影なし、ボーダーなしのフラットスタイル）
- Border Radius: 0px
- コンテンツベースのカード。画像 + テキストの縦積みレイアウト

### Badge（NEW!!）

- Background: `#e40012`
- Text: `#ffffff`
- Font Size: 11px
- Font Weight: 400
- Padding: 2px
- Border Radius: 0px

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

- Max Width: 980px（コーポレート）/ 960px（ネットストア）
- Padding (horizontal): 0px〜25px

### Grid

- Columns: コーポレートは1カラム（コンテンツ幅固定）、ネットストアは2カラム（左サイドバー + コンテンツ）
- Gutter: 10px〜20px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラット基調） |

フラットデザインが基本。ボックスシャドウの使用は実測されなかった。

---

## 7. Do's and Don'ts

### Do（推奨）

- ロフトイエロー `#fdd000` はヘッダー背景やブランドアイコンに使い、アイキャッチとして機能させる
- コーポレートサイトとネットストアで異なるフォントスタックを使い分ける
- コンテンツ領域では `font-feature-settings: "kern"` を適用する
- ボタンは控えめな角丸（3px〜5px）とアウトラインスタイルを基本にする
- NEW!! バッジは赤 `#e40012` 背景で鮮度を訴求する
- 日付テキストは `#999999` でトーンダウンする

### Don't（禁止）

- ロフトイエロー `#fdd000` をテキスト色に使わない（白背景でのコントラスト不足）
- Webフォント（Noto Sans JP 等）を導入しない（システムフォント運用がブランドの方針）
- 見出しに `letter-spacing` を追加しない（実測値は全て normal）
- ボタンに大きな `border-radius`（pill 型等）を使わない
- コンテンツ領域の `font-feature-settings: "kern"` を省略しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Desktop | > 767px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（ナビゲーション、ボタン）

### フォントサイズの調整

- モバイルでは本文 14px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #fdd000 (LOFT Yellow)
Accent Color: #eba700 (Yellow Dark)
Alert Color: #e40012 (NEW Red)
Text Color: #000000
Text Secondary: #333333
Background: #ffffff
Warm Background: #fffbf4
Font (Corporate): YuGothic, 游ゴシック, メイリオ, Meiryo, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", sans-serif
Font (Content): "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif
Font (Store): メイリオ, Meiryo, "ＭＳ ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif
Body Size: 16px / 12px (store)
Line Height: 1.4
Button Radius: 3px-5px
```

### プロンプト例

```
LOFT のデザインシステムに従って、商品一覧ページを作成してください。
- ヘッダー背景にロフトイエロー #fdd000 を使用
- フォントは游ゴシック優先のシステムフォントスタック
- 見出しは 18px bold、本文は 12px regular
- ボタンは border-radius: 5px のアウトラインスタイル（border: 1px solid #cccccc）
- NEW バッジは #e40012 背景 + 白文字
- フラットデザイン（影なし）
```
