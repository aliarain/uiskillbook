# DESIGN.md — ASKUL (アスクル)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 実用重視・高密度・効率的。B2B オフィス用品通販として、膨大な商品カタログを素早く閲覧・検索・発注できることを最優先する
- **密度**: 情報密度が非常に高い業務EC。body の base font-size が 10px と極めて小さく、ヘッダー・サイドバー・メインカラムに情報を詰め込むレイアウト
- **キーワード**: 実用的、効率的、高密度、信頼感、業務向け

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **ASKUL Blue** (`#1b72e9`): メインのブランドカラー。リンク色、アクセント要素に使用
- **ASKUL Navy** (`#172397`): ページタイトル（h1）に使用される濃紺。ブランドの信頼感を表現
- **ASKUL Orange** (`#ff8d00`): 主要CTA「カンタン新規会員登録」ボタン。最も目立つアクション色
- **ASKUL Cyan** (`#33abee`): 「もっと見る」リンクボタン。補助的なアクション色

### Semantic（意味的な色）

- **Danger** (`#d90916`): エラー、重要なお知らせ（h2 の「重要なお知らせ」に使用）
- **Price Red** (`#d80000`): 価格表示専用の赤。セール価格・特価強調
- **Info Light** (`#ebf3fc`): お知らせ枠の背景（薄い青）
- **Danger Light** (`#fadfe1`): 重要お知らせ枠の背景（薄いピンク）

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Link Heading** (`#111184`): リンク見出し（h2 のリンクタイトル）
- **Link** (`#1b72e9`): 標準リンク色
- **Border** (`#cecece`): 区切り線、ボタン・入力欄の枠
- **Background** (`#ffffff`): ページ背景
- **Surface Gray** (`#f2f2f2`): カテゴリーボタン、詳細設定の背景
- **Footer / Guide** (`#efefef`): フッター、ご利用ガイドセクションの背景
- **Surface Light** (`#f5f5f5`): モーダル・フォーム背景

### Sustainability パステル（サステナビリティ特集のカテゴリ色）

- **時短・効率アップ** (`#d4dbec`): 淡い藤色
- **気持ちがはれる** (`#f7e0c8`): 淡いオレンジ
- **ごみを減らす** (`#c4dad4`): 淡いグリーン
- **心地よいデザイン** (`#eaccce`): 淡いピンク
- **社会にやさしい** (`#bce0e4`): 淡いシアン
- **資源を守る** (`#dfe8c7`): 淡い黄緑

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Hiragino Sans（macOS）、ヒラギノ角ゴシック、ヒラギノ角ゴ Pro W3（旧 macOS）、Noto Sans JP（Web/Android）、メイリオ / Meiryo（Windows）

### 3.2 欧文フォント

- **サンセリフ**: Arial（先頭指定。欧文優先のフォントスタック）

### 3.3 font-family 指定

```css
/* 全体共通 — 欧文優先型（Arial が先頭） */
font-family: Arial, "Hiragino Sans", "Noto Sans JP", ヒラギノ角ゴシック, "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- Arial が先頭に来る欧文優先型。B2B EC として数字・英字の可読性を優先
- 和文は Hiragino Sans → Noto Sans JP → ヒラギノ角ゴシック → ヒラギノ角ゴ Pro W3 → メイリオの順
- 古い macOS の「ヒラギノ角ゴ Pro W3」（ProN ではなく Pro）も含む幅広い互換性

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Page Title | System | 20px | 400 | 1.0 | normal | ページタイトル。color: #172397（Navy） |
| Section Title | System | 20px | 400 | 1.6 | 0.02em | セクション見出し「注目のトピックス」等 |
| Category Title | System | 20px | 400 | 1.0 | normal | カテゴリ見出し「事務用品／文房具」等 |
| Sidebar Title | System | 16px | 400 | 1.625 | 0.02em | サイドバー見出し「取扱商品」等 |
| Heading Small | System | 16px | 400 | 1.5 | normal | フッター見出し「急上昇キーワード」等 |
| Sub Heading | System | 13px | 700 | 1.54 | normal | お知らせタイトル。color: #111184 または #d90916 |
| Body | System | 13px | 400 | 1.6 | normal | 本文テキスト |
| Label | System | 14px | 700 | 1.1 | normal | ラベル「検索範囲」等 |
| Body Small | System | 12px | 400 | 1.33 | normal | 補足テキスト、リスト項目 |
| Nav | System | 10px | 700 | 1.3 | normal | ナビゲーション |
| Base / Small | System | 10px | 400 | 1.1 | normal | body のベースサイズ（非常に小さい） |
| Price | System | 20px | 700 | 1.0 | normal | 価格表示。color: #d80000 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（13px 本文テキスト）
- **見出しの行間**: 1.0〜1.6（見出しの種類で異なる）
- **本文の字間 (letter-spacing)**: normal（明示的な字間設定なし）
- **セクション見出しの字間**: 0.02em（20px, 16px の見出しで使用）

**ガイドライン**:
- body の base が 10px と非常に小さい。これは ECサイト特有の高密度レイアウトのため
- 実際の本文テキストは 12〜14px で表示される
- line-height は見出しで 1.0（タイト）、本文で 1.6（標準）

### 3.6 禁則処理・改行ルール

```css
/* 実測に基づくデフォルト設定 */
word-break: normal;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt**: 適用なし。全体で `font-feature-settings: normal`
- アスクルでは和文プロポーショナル字詰めを使用していない

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（新規会員登録）**
- Background: `#ff8d00`
- Text: `#ffffff`
- Padding: 12px 0px（width は親要素で制御）
- Border Radius: 5px
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: -0.05em（-0.8px / 16px）

**Secondary（詳細設定）**
- Background: `#f2f2f2`
- Text: `#333333`
- Border: 1px solid `#cecece`
- Padding: 3px 7px
- Border Radius: 4px
- Font Size: 11.5px
- Font Weight: 400

**Outlined（バリエーションを見る）**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#cecece`
- Padding: 0px 11px
- Border Radius: 2px
- Font Size: 12px
- Font Weight: 400
- Line Height: 26px

**FAX ユーザー向け**
- Background: `#ffffff`
- Text: `#30201a`
- Border: 1px solid `#6e635f`
- Padding: 6px 0px
- Border Radius: 5px
- Font Size: 11px
- Font Weight: 700
- Letter Spacing: -0.05em

**Link Button（もっと見る）**
- Background: transparent
- Text: `#1b72e9`
- Border Radius: 4px
- Font Size: 10px
- Font Weight: 400
- Padding: 0px 16px

### Inputs

- Background: `#ffffff`
- Border: 1px solid varies（search: なし, select: `#767676`）
- Border Radius: 0px（テキスト入力）/ 0px 6px 6px 0px（検索ボタン）
- Padding: 0px 10px
- Font Size: 13px
- Font Family: 本体と同じフォントスタック
- Line Height: 27px（検索入力）

### Cards

- Background: `#ffffff`
- Border: 1px solid `#cecece`
- Border Radius: 0px（商品カードはシャープな角）
- Padding: varies
- Shadow: none（フラットデザイン）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 3px |
| S | 6px |
| M | 10px |
| L | 16px |
| XL | 25px |
| XXL | 30px |

### Container

- Max Width: 1440px（推定。フルワイドではなく中央寄せ）
- Padding (horizontal): 10px〜30px（セクションにより異なる）

### Grid

- Columns: サイドバー（左）+ メインカラム（右）の2カラム構成
- サイドバー幅: 約 200px
- メインカラム: 残り（約 1000px）
- 商品グリッド: 4〜5 列

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全ての要素。フラットデザインが基本 |
| 1 | `0 1px 3px rgba(0,0,0,0.1)` | ドロップダウンメニュー |

**設計思想**: アスクルはほぼ完全にフラットデザイン。ボーダー (`#cecece`) で要素を区切り、影はほとんど使用しない

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントスタックは必ず Arial を先頭にする（欧文優先型を維持）
- 価格表示は `#d80000` + 700 weight で目立たせる
- CTA には `#ff8d00`（オレンジ）を使い、他の要素と明確に区別する
- ボーダー色は `#cecece` で統一する
- 本文は 13px / line-height: 1.6 を基本とする

### Don't（禁止）

- `font-feature-settings: "palt"` を適用しない（アスクルでは不使用）
- ボタンに大きな border-radius を使わない（最大 5px。pill ボタンは存在しない）
- 影 (box-shadow) を多用しない（フラットデザインが原則）
- body の base font-size 10px をそのまま本文に使わない（本文は 12〜14px で表示する）
- `#172397`（Navy）をリンク色に使わない（ページタイトル専用。リンクは `#1b72e9`）
- letter-spacing を広めに取らない（アスクルは `normal` が基本で、見出しの一部のみ 0.02em）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（1カラム） |
| Tablet | <= 1024px | タブレット（サイドバー非表示） |
| Desktop | > 1024px | デスクトップ（2カラム） |

### タッチターゲット

- 最小サイズ: 44px（--swiper-navigation-size: 44px が参考値）

### フォントサイズの調整

- モバイルでは本文 12〜14px を維持
- ナビゲーションの 10px テキストはタッチ向けにパディングを拡大

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #1b72e9
CTA Color: #ff8d00
Title Color: #172397
Text Color: #333333
Background: #ffffff
Surface: #f2f2f2
Border: #cecece
Danger: #d90916
Price: #d80000
Font: Arial, "Hiragino Sans", "Noto Sans JP", ヒラギノ角ゴシック, "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, sans-serif
Body Size: 13px
Line Height: 1.6
palt: なし
```

### プロンプト例

```
アスクルのデザインシステムに従って、商品一覧テーブルを作成してください。
- フォント: Arial, "Hiragino Sans", "Noto Sans JP", sans-serif
- 本文: 13px / weight 400 / line-height: 1.6 / color: #333333
- ページタイトル: 20px / weight 400 / color: #172397
- 価格: 20px / weight 700 / color: #d80000
- CTA ボタン: bg #ff8d00, color #fff, radius 5px
- ボーダー: #cecece
- 背景: #ffffff（メイン）、#f2f2f2（サーフェス）
```
