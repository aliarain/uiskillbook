# DESIGN.md — NTT Group (NTTグループ)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景にNTTブルーをアクセントとした、信頼感のあるコーポレートデザイン。大手通信グループとしての格式と、技術先進性を両立するクリーンな構成
- **密度**: 情報密度は中程度。ニュース・IR情報・グループ企業紹介が整然と配置されたポータル型
- **キーワード**: 信頼、クリーン、コーポレートブルー、構造的、フォーマル

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary / NTT Blue** (`#0072bc`): メインのブランドカラー。CTA境界線、タグピル、タブのアクティブ状態、ページネーションに使用
- **Primary Link** (`#0068b7`): テキストリンク色。CTA テキスト色にも使用

### Semantic（意味的な色）

- **Danger** (`#cc0000`): エラー、削除、危険な操作
- **Warning** (`#f5a623`): 警告、注意喚起
- **Success** (`#4caf50`): 成功、完了

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト、見出し
- **Text Secondary** (`#888888`): プレースホルダー、補足テキスト
- **Border** (`#0072bc`): CTAボタンの枠線（ブランドカラー兼用）
- **Border Muted** (`#888888`): ニュースラベル等の控えめな枠線
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f5f5f5`): カード背景、セクション面
- **Footer** (`#333333`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・見出し共通）**: Noto Sans JP（Google Fonts）— サイト全体で統一使用
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP 内蔵の欧文グリフを使用（別途欧文フォント指定なし）
- **セリフ**: なし
- **等幅**: なし（明示的な指定なし）

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", meiryo, sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP（Google Fonts）を先頭に指定し、ウェイトの統一性を確保
- ヒラギノ角ゴ ProN → Hiragino Sans → メイリオの順で macOS/Windows 対応
- 欧文専用フォントは指定せず、Noto Sans JP の欧文グリフをそのまま使用

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Sans JP | 38px | 600 | 1.3 | normal | ページタイトル、ヒーローテキスト |
| Heading 1 | Noto Sans JP | 28px | 600 | 1.3 | normal | セクション見出し |
| Heading 2 | Noto Sans JP | 22px | 600 | 1.3 | normal | サブ見出し、タブボタン |
| Heading 3 | Noto Sans JP | 28px | 600 | 1.3 | normal | カードセクション見出し |
| Body | Noto Sans JP | 16px | 400 | 1.6 | normal | 本文テキスト |
| Body Medium | Noto Sans JP | 16px | 500 | 1.3 | normal | 強調本文 |
| Caption | Noto Sans JP | 14px | 600 | 1.6 | normal | カードタイトル、小見出し |
| Small | Noto Sans JP | 12px | 400 | 1.4–1.6 | normal | ラベル、タグ、日付 |
| Nav | Noto Sans JP | 16px | 400 | 1.6 | normal | ナビゲーション項目 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（日本語本文として標準的な設定）
- **見出しの行間**: 1.3（コンパクトな見出し間隔）
- **本文の字間 (letter-spacing)**: normal（明示的な字詰め設定なし）
- **見出しの字間**: normal

**ガイドライン**:
- letter-spacing の明示的指定がなく、ブラウザデフォルトに準拠
- 見出しは line-height: 1.3 で引き締まった印象
- 本文は line-height: 1.6 で十分な可読性を確保

### 3.6 禁則処理・改行ルール

```css
/* NTTグループサイトの設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
/* 明示的なpalt指定なし */
font-feature-settings: normal;
```

- **palt**: 使用していない。本文・見出しともに palt なし
- サイト全体で均等字間を維持するフォーマルなコーポレートスタイル

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ピルボタン・アウトライン）**
- Background: `#ffffff`
- Text: `#0068b7`
- Border: 1px solid `#0068b7`
- Padding: 3.2px 40px
- Border Radius: 50px（ピル型）
- Font Size: 16px
- Font Weight: 400

**Tag Pill**
- Background: `#ffffff`
- Text: `#0072bc`
- Border: 1px solid `#0072bc`
- Padding: 2.4px 6px
- Border Radius: 27px
- Font Size: 12px
- Font Weight: 400

**News Label**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#888888`
- Padding: 4px 6px
- Border Radius: 0px（角型）
- Font Size: 12px
- Font Weight: 400

**Tab Button（アクティブ）**
- Background: transparent
- Text: `#0072bc`
- Font Size: 22px
- Font Weight: 700

**Tab Button（非アクティブ）**
- Background: transparent
- Text: `#333333`
- Font Size: 22px
- Font Weight: 600

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#0072bc`
- Border Radius: 4px
- Padding: 10px 16px
- Font Size: 16px
- Placeholder Color: `#888888`

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

### Pagination

- **Active Dot**: Background `#0072bc`, Border Radius 50%, Border 1px solid `#0072bc`
- **Inactive Dot**: Background `#ffffff`, Border 1px solid `#cccccc`, Border Radius 50%

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
| XXXL | 64px |

### Container

- Max Width: 1200px
- Padding (horizontal): 24px

### Grid

- Columns: 可変（コンテンツに応じて 2〜4列）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（タグ、ラベル） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | カード、コンテンツエリア |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.12)` | ホバー時のカード、ドロップダウン |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.16)` | モーダル、ダイアログ |

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA ボタンはピル型（border-radius: 50px）のアウトラインスタイルを使用する
- NTT Blue `#0072bc` はインタラクティブ要素（CTA、タグ、タブ）に限定する
- 見出しには weight 600 を使い、フォーマルな太さを維持する
- 本文は 16px / line-height: 1.6 で読みやすさを確保する
- タグとラベルはピル型（radius: 27px）で統一する
- フォントは Noto Sans JP をサイト全体で統一使用する

### Don't（禁止）

- NTT Blue を背景色のベタ塗りに使わない（アクセント・インタラクティブ要素専用）
- CTA ボタンにベタ塗り背景を使わない（アウトラインスタイルが基本）
- テキストに純粋な `#000000` を使わない（`#333333` を基準とする）
- 見出しの weight を 400 以下にしない（600 が基本）
- letter-spacing を意図的に広げない（normal を維持）
- ボタンの角丸を中途半端な値にしない（ピル 50px か角型 0px の二択）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（シングルカラム） |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト（max-width: 1200px） |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- CTA ボタン: padding 3.2px 40px + ピル型でタッチ領域を確保

### フォントサイズの調整

- モバイルでは本文 14–16px を維持
- Display は 38px → モバイルでは 26–28px に縮小
- Heading 1 は 28px → モバイルでは 22–24px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0072bc (NTT Blue)
Link Color: #0068b7
Text Color: #333333
Text Secondary: #888888
Background: #ffffff
Surface: #f5f5f5
Footer BG: #333333
Font: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", meiryo, sans-serif
Body Size: 16px
Line Height (body): 1.6
Line Height (heading): 1.3
Heading Weight: 600
Letter Spacing: normal
Border Radius (CTA): 50px (pill)
Border Radius (tag): 27px
Border Radius (card): 8px
palt: off
```

### プロンプト例

```
NTTグループのデザインシステムに従って、ニュース一覧ページを作成してください。
- プライマリカラー: #0072bc (NTT Blue)
- フォント: "Noto Sans JP" を統一使用
- 見出し: 28px / weight 600 / line-height: 1.3
- 本文サイズ: 16px / weight 400 / line-height: 1.6
- CTAボタン: アウトライン型、border 1px solid #0068b7、color #0068b7、border-radius: 50px
- タグ: ピル型、border 1px solid #0072bc、color #0072bc、border-radius: 27px
- カード背景: #ffffff、角丸: 8px、shadow: 0 2px 8px rgba(0,0,0,0.08)
- letter-spacing: normal（palt なし）
```
