# DESIGN.md — キッコーマン (Kikkoman)

> キッコーマン（https://www.kikkoman.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。CSS Custom Properties は Font Awesome 関連のみで、デザイントークンは直書き。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのある食品ブランドサイト。レシピ・献立を中心に、家庭的で親しみやすいデザイン。オレンジのブランドカラーが食欲を喚起し、クリーム色の面で温もりを演出
- **密度**: コーポレートトップは情報量多め（ニュース・ブランドサイト・レシピ導線が並列）、レシピページはカード中心のゆったりした構成
- **キーワード**: 温かい、家庭的、親しみやすい、レシピ中心、食の喜び
- **特徴**: ブランドオレンジ `#e96600` がヘッダーCTA・検索・タブ・レシピ見出しに一貫して使われ、サイト全体の統一感を形成。レシピページでは `#fdf5e2` / `#fdf7e0` のクリーム色面が温かみを強調

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Kikkoman Orange** (`#e96600`): メインのブランドカラー。CTAボタン、検索ボタン、タブ（アクティブ）、レシピ見出し色に使用
- **Kikkoman Orange (hover想定)** (`#d45c00`): ホバー時の暗めオレンジ（推定値）

### Sub Brand（サブブランドカラー）

- **Del Monte Green** (`#008f4b`): デルモンテブランド用
- **Manjo Red** (`#fb3733`): マンジョウブランド用
- **Manns Wine** (`#922e41`): マンズワインブランド用
- **Kikkoman Soymilk** (`#a3ca0f`): キッコーマン豆乳ブランド用

### Semantic（意味的な色）

- **Error / Notice** — background: `#ffe7e7`（重要なお知らせ背景）

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Placeholder** (`#898989`): 入力欄プレースホルダー（`rgb(137, 137, 137)`）
- **Border** (`#999999`): ボタン・入力欄の枠線（`rgb(153, 153, 153)`）
- **Border Dark** (`#333333`): 検索ボタンの枠線
- **Carousel Dot** (`#cccccc`): スライダーのインジケーター（`rgb(204, 204, 204)`）
- **Background** (`#ffffff`): ページ背景
- **Surface Light Gray** (`#f5f5f5`): セクション背景
- **Surface Warm Cream** (`#fdf5e2`): 今日の献立エリア、レシピセクション背景（トップ）
- **Surface Warm Cream Alt** (`#fdf7e0`): レシピページの献立エリア背景
- **Surface Warm Peach** (`#ffe4c3`): レシピ検索ナビ背景
- **Header Shadow** (`rgba(221, 221, 221, 0.004)`): ヘッダーの控えめな影

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- 游ゴシック体 / YuGothic（macOS・Windows）
- ヒラギノ角ゴ Pro（macOS フォールバック）
- メイリオ（Windows フォールバック）

> 注: 「ヒラギノ角ゴ Pro」であり「ProN」ではない。JIS X 0213:2004 の字形差異あり

### 3.2 欧文フォント

- **サンセリフ**: Arial, Osaka
- **等幅**: 特に指定なし

### 3.3 font-family 指定

```css
/* 全サイト共通（body） */
font-family: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
  "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, Arial,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 和文フォントを最優先（游ゴシック体が先頭）
- 游ゴシックの表記バリエーション4種（体/英語/混在）で確実にマッチ
- ヒラギノ角ゴ Pro → メイリオ → Osaka → Arial の順でフォールバック
- 最後に MS PGothic（レガシー Windows）

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

**コーポレートトップ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Display (h2) | 40px | 500 | 56px (×1.4) | normal | 「ブランドサイト」等のセクション見出し |
| Heading 1 | 32px | 700 | 51.2px (×1.6) | normal | メインカルーセル見出し |
| Heading 2 | 22px | 700 | 30.8px (×1.4) | normal | 「重要なお知らせ」等 |
| Heading 2 (sub) | 24px | 700 | 38.4px (×1.6) | normal | ホームクッキング見出し |
| Heading 3 | 18px | 500 | 28.8px (×1.6) | normal | ニュース見出し |
| Heading 3 (date) | 22px | 700 | 30.8px (×1.4) | normal | 「今日の献立」日付 |
| Nav Primary | 20px | 700 | 32px (×1.6) | normal | グローバルナビ（商品・レシピ等） |
| Nav Sub | 18px | 700 | 25.2px (×1.4) | normal | サブナビ（キャンペーン等） |
| Body | 16px | 500 | 25.6px (×1.6) | normal | 本文・一般テキスト |
| Tab Button | 18px | 700 | 25.2px (×1.4) | normal | ニュースタブ |
| Small | 14px | 700 | 19.6px (×1.4) | normal | ナビボタン「企業・IR・採用」 |
| Caption | 12px | 500 | 19.2px (×1.6) | normal | フッター注釈 |

**レシピページ（ホームクッキング）**

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Heading 2 (featured) | 28px | 700 | 36.4px (×1.3) | normal | `#e96600` | 「今日の献立」 |
| Heading 2 (section) | 26px | 700 | 36.4px (×1.4) | normal | `#333333` | 「人気のレシピまとめ」 |
| Heading 2 (sub) | 24px | 700 | 26.4px (×1.1) | normal | `#e96600` | 「公式アプリ・公式SNS」 |
| Heading 2 (season) | 20px | 500 | 32px (×1.6) | normal | `#e96600` | 「6月のおすすめ食材」 |
| Heading 3 (lead) | 22px | 500 | 30.8px (×1.4) | normal | `#e96600` | 献立のリード文 |
| Heading 3 (card) | 16px | 700 | 25.6px (×1.6) | normal | `#333333` | レシピカードタイトル |
| Heading 3 (app) | 20px | 700 | 26px (×1.3) | normal | `#ffffff` | 公式アプリ見出し |
| Body | 16px | 500 | 25.6px (×1.6) | normal | `#333333` | 本文 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `25.6px` (16px x 1.6)
- Display (h2 40px): `56px` (x 1.4)
- Heading 1 (32px): `51.2px` (x 1.6)
- Heading 2 (22px): `30.8px` (x 1.4)
- レシピ Heading 2 (28px): `36.4px` (x 1.3)
- Tab / Sub Nav (18px): `25.2px` (x 1.4)

**字間 (letter-spacing)** — 実測値:
- **全要素**: `normal`（サイト全体で letter-spacing の指定なし）

**ガイドライン**:
- サイト全体で `letter-spacing` は一切使用していない
- 行間は 1.4〜1.6 の範囲で統一。読み物コンテンツは 1.6、見出しは 1.3〜1.4
- `font-weight: 500` が body のデフォルト（游ゴシックの Medium に相当）

### 3.6 禁則処理・改行ルール

```css
/* 特段の指定なし（ブラウザデフォルト） */
```

- 明示的な `word-break` / `overflow-wrap` / `line-break` の指定は確認されなかった

### 3.7 OpenType 機能

```css
/* 全要素 */
font-feature-settings: normal;
```

- **palt**: 適用なし。サイト全体でプロポーショナル字詰めは使用していない
- **kern**: 特に指定なし

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（お問い合わせ・検索）**
- Background: `#e96600`
- Text: `#ffffff`
- Border: none（お問い合わせ）/ `1px solid #333333`（検索ボタン）
- Border Radius: 0px（お問い合わせ）/ `0px 5px 5px 0px`（検索ボタン、右側のみ角丸）
- Font Size: 16px（お問い合わせ）/ 18px（検索ボタン）
- Font Weight: 500（お問い合わせ）/ 700（検索ボタン）
- Padding: `40px 5px 4px`（お問い合わせ、縦長のアイコン型）/ `20px 22px`（検索）

**Tab Button（アクティブ）**
- Background: `#e96600`
- Text: `#ffffff`
- Border Radius: `5px 5px 0px 0px`（上辺のみ角丸）
- Font Size: 18px
- Font Weight: 700
- Padding: `13px 23.4px`

**Tab Button（非アクティブ）**
- Background: `#ffffff`
- Text: `#333333`
- Border Radius: `5px 5px 0px 0px`
- Font Size: 18px
- Font Weight: 700
- Padding: `13px 23.4px`

**Pill Button（ナビ・もっと見る）**
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #999999`
- Border Radius: `50px`
- Font Size: 16px（もっと見る）/ 14px（ナビ「企業・IR・採用」）
- Font Weight: 700
- Padding: `13px 22px`（リンク）/ `12.8px 45px`（ボタン）

**Carousel Dot**
- Background: `#cccccc`
- Border Radius: `50%`
- Border: none

### Inputs

**検索入力**
- Background: `#ffffff`
- Border: 枠線あり（詳細不明、1px solid と推定）
- Border Radius: `5px 0px 0px 5px`（左側のみ角丸、右は検索ボタンと結合）
- Font Size: 20px
- Font Weight: 400
- Color: `#898989`（プレースホルダー）
- Padding: `16px 22px`

### Cards

- Background: `#ffffff`
- Border: 特段のボーダー指定なし（影で浮遊感を出す想定）
- Border Radius: 明示的な指定なし
- Shadow: 控えめ（ヘッダーの `rgba(221, 221, 221, 0.004) 0px 1px 0px 0px` のみ確認）

### Navigation

- Background: `#ffffff`
- Shadow: `rgba(221, 221, 221, 0.004) 0px 1px 0px 0px`（控えめなボトムシャドウ）
- グローバルナビ: 20px / 700 / `#333333`
- サブナビ: 18px / 700 / `#333333`
- ユーティリティ（お問い合わせ・検索）: `#e96600` 背景、白文字

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 最小余白 |
| S | 8px | 要素内余白 |
| M | 16px | セクション内余白 |
| L | 24px | セクション間余白 |
| XL | 32px | 大セクション間余白 |
| XXL | 48px | ページセクション間余白 |

### Container

- Max Width: 明示的な固定値はなく、レスポンシブ
- ヘッダーナビは画面幅いっぱいに展開

### Grid

- コーポレートトップ: フルカルーセル + カード型グリッド
- レシピページ: カード型グリッド（レシピカード）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 大半の要素（フラットデザイン基調） |
| 1 | `rgba(221, 221, 221, 0.004) 0px 1px 0px 0px` | ヘッダー |

- サイト全体でシャドウの使用は極めて控えめ
- フラットデザインを基調とし、要素の区切りは背景色の変化（白 → クリーム → ピーチ）で表現

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドオレンジ `#e96600` はCTA・タブ・見出しアクセントに一貫して使う
- テキスト色は `#333333` を使い、純粋な `#000000` を避ける（温かみのある読書体験）
- 温かみのある面色（`#fdf5e2`, `#fdf7e0`, `#ffe4c3`）でレシピ・食関連セクションを包む
- `font-weight: 500` を body のデフォルトにする（游ゴシックの Medium が最適バランス）
- ボタンは pill 型（`radius: 50px`）と角付きタブ型（`radius: 5px 5px 0 0`）を使い分ける
- レシピ見出し（h2, h3）にはオレンジ `#e96600` を使い、食の世界観を強調する
- サブブランド色（デルモンテ緑、マンジョウ赤等）は各ブランド領域に限定して使う

### Don't（禁止）

- 純粋な `#000000` をテキストに使わない（コントラストが強すぎて温かみが失われる）
- ブランドオレンジ `#e96600` を本文テキスト色に使わない（白背景でコントラスト不足）
- `letter-spacing` や `palt` を追加しない（サイト全体で意図的に未使用）
- レシピセクション外でクリーム色面（`#fdf5e2`）を多用しない（食の文脈で使う色）
- ヒラギノ角ゴ「ProN」と「Pro」を混同しない（キッコーマンは「Pro」を使用）
- サブブランド色をメインブランドのCTAに流用しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイルでは本文 14-16px、見出しはデスクトップの 70-80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #e96600（オレンジ — CTA・タブ・レシピ見出し）
Text Primary: #333333
Background: #ffffff
Surface Warm: #fdf5e2（レシピセクション）
Surface Peach: #ffe4c3（検索ナビ）
Surface Gray: #f5f5f5
Border: #999999
Error Surface: #ffe7e7

Font: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
  "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, Arial,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

Body: 16px / weight: 500 / line-height: 1.6 / letter-spacing: normal
Heading: weight: 700 / line-height: 1.3-1.4
palt: なし（サイト全体で未使用）
```

### プロンプト例

```
キッコーマンのデザインに従って、レシピ一覧ページを作成してください。
- フォント: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
    "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
    メイリオ, Meiryo, Osaka, Arial, sans-serif
- テキスト色: #333333（純粋な黒は使わない）
- ブランドカラー: #e96600（CTAボタン、タブ、見出しアクセント）
- 背景: #ffffff、レシピセクション: #fdf5e2（温かいクリーム色）
- ボタン: pill型（border-radius: 50px, border: 1px solid #999）
- CTA: #e96600 背景、白文字、角付き（border-radius: 0 or 5px）
- body font-weight: 500、見出し font-weight: 700
- line-height: 本文 1.6、見出し 1.3-1.4
- letter-spacing: normal（palt なし）
```
