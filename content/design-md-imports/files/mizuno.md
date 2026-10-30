# DESIGN.md — Mizuno（ミズノ）

> Mizuno（https://www.mizuno.jp/）のデザイン仕様書。
> ランニング・野球・ゴルフ等のスポーツ用品を扱う EC サイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **クリーンなライトテーマ基調**（`#ffffff` / `#f5f5f5` 背景 + ダークテキスト）で、スポーツ用品 EC としての機能性と信頼感を重視。ブランドカラーの **Mizuno Blue（`#001489`）** をアクセントに使い、プロダクトイメージを前面に出したビジュアル主導のレイアウト
- **密度**: トップページはヒーローバナー＋カテゴリグリッドで高密度。商品一覧は規則的なカードグリッド。フッターはダーク（`#111111`）でライトテキスト（`#f5f5f5`）
- **キーワード**: スポーツ、機能的、ライト＆クリーン、ダークCTA、グリッドEC
- **特徴**:
  - フォントに **Roboto**（欧文）+ **Hiragino Kaku Gothic ProN / メイリオ**（和文）を使用。欧文優先のフォールバック構成
  - `font-feature-settings`（palt）は**使用なし**。字詰め指定なしのナチュラルスペーシング
  - **Bootstrap ベース** の CSS フレームワーク。`--primary: #007bff` 等の Bootstrap カスタムプロパティが残存するが、実サイトの実測色とは乖離がある
  - CTA ボタンは **`#111111` 背景に白テキスト** または **`#ffffff` 背景に黒テキスト** のバイナリ構成。radius は 3px のわずかな角丸
  - プロモバーはダーク背景（`#111111`）+ `#f5f5f5` テキストの帯状通知

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Mizuno Blue** (`#001489`): ブランドアクセントカラー。ロゴ、一部アクセント要素に使用（4件の実測）
- **Text Dark** (`#111111`): セクション見出し、プライマリ CTA 背景、フッター背景
- **Text Primary** (`#303030`): 本文テキスト、ナビゲーション、汎用ラベル

### Accent

- **Pink** (`#ffb7c5`): メンバーシップ・サービスバッジ背景
- **Yellow** (`#ffff00`): ハイライト、セール表示
- **Light Blue** (`#89b8ee`): セカンダリアクセント

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| White | `#ffffff` | (255, 255, 255) | ページ背景、セカンダリ CTA 背景 |
| Surface Light | `#f5f5f5` | (245, 245, 245) | セクション背景面、タグ pill 背景（21件） |
| Surface Gray | `#ededed` | (237, 237, 237) | 区切り、インプット背景（15件） |
| Text Dark | `#111111` | (17, 17, 17) | 見出し、CTA 背景、フッター背景 |
| Text Primary | `#303030` | (48, 48, 48) | 本文テキスト |
| Text Sub | `#333333` | (51, 51, 51) | カテゴリ、フィーチャータイトル補助色 |
| Footer Text | `#f5f5f5` | (245, 245, 245) | フッター内テキスト、プロモバーテキスト |

### Semantic（Bootstrap 残存変数）

> Bootstrap 由来の CSS カスタムプロパティが残存するが、実サイトの主要 UI では直接使用されていない。参照のみ。

- `--primary: #007bff` / `--secondary: #6c757d` / `--success: #28a745`
- `--info: #17a2b8` / `--warning: #ffc107` / `--danger: #dc3545`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Hiragino Kaku Gothic ProN** を最優先。ない場合 **メイリオ（Meiryo）** にフォールバック
- **明朝体**: 使用なし（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Roboto**（Google Fonts）を最優先。欧文優先のフォールバック構成
- **フォールバック**: sans-serif

### 3.3 font-family 指定

```css
/* サイト全体（本文・見出し共通） */
font-family: Roboto, "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**構成。Roboto（欧文）が先頭に来るため、欧文グリフは Roboto が描画する
- 日本語は Hiragino Kaku Gothic ProN（macOS / iOS）→ メイリオ（Windows）の順
- 見出し・本文・ナビゲーションで font-family の切り替えはなく、全体で同一チェーンを使用

> **代替フォント注記**: Roboto は Google Fonts から無償で利用可能。和文の代替として **Noto Sans JP** を組み合わせると字形の印象が近い（Noto は Roboto と同じ Google デザインチームが監修）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／商品一覧ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 Page Title | Roboto | 20px | **700** | — | normal | `#303030` | ページタイトル |
| H2 Section | Roboto | 32px | 400 / **700** | 38.4px (×1.2) | normal | `#111111` | "閲覧履歴" 等のセクション見出し |
| H2 Sub-section | Roboto | 25px | **700** | 30px (×1.2) | normal | `#111111` | "TRAIL" / "SPEED" 等のカテゴリ見出し |
| H3 Store/Item | Roboto | 14px | **700** | 21px (×1.5) | normal | `#111111` | 店舗名、アイテム名 |
| H3 Running | Roboto | 25px | **700** | 30px (×1.2) | normal | `#111111` | H2 Sub と同系統の大きめ見出し |
| H4 Category | Roboto | 12px | 400 / **700** | 18px (×1.5) | normal | `#111111` / `#333333` | カテゴリラベル、フィーチャータイトル |
| Body | Roboto | 14px | 400 | 23.33px (×1.67) | normal | `#303030` | 本文 |
| Nav Category | Roboto | 16px | **700** | 26.67px (×1.67) | normal | `#303030` | ナビゲーション1階層目 |
| Nav Mega Item | Roboto | 22px | 400 | 65px (×2.95) | normal | `#303030` / `#111111` | メガメニュー大項目 |
| Nav Sub Item | Roboto | 12px | 400 | 28.8px (×2.4) | normal | `#111111` | メガメニュー小項目 |
| Promo Bar | Roboto | 12px | 400 | 30px (×2.5) | normal | `#f5f5f5` | ダーク背景のプロモバーテキスト |
| Tag Pill | Roboto | 12px | 400 | — | normal | `#111111` | 検索タグ（"春 アウター" 等） |
| Service Badge | Roboto | 12px | **700** | — | normal | `#ffffff` | メンバーシップバッジ |
| Footer | Roboto | 14px | 400 | — | normal | `#f5f5f5` | フッターテキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.67（`23.33px` / `14px`）— 日本語 EC サイトとしては標準的な行間
- **見出しの行間**: 1.2（H2 / H3 大型見出し）/ 1.5（H3 小型）
- **ナビゲーションの行間**: 1.67（カテゴリ）〜 2.95（メガメニュー大項目）
- **本文の字間 (letter-spacing)**: normal（0）— `palt` 未使用、字詰めなし
- **見出しの字間**: normal（0）— 全階層で字間指定なし

**ガイドライン**:
- `font-feature-settings: "palt"` は**使用しない**。Roboto は欧文フォントであり、palt は和文専用 OpenType 機能
- letter-spacing を追加する場合は欧文の可読性への影響を考慮する
- ナビゲーション大項目の line-height: 2.95 は高さ確保のためのパディング代わり

### 3.6 禁則処理・改行ルール

```css
/* 実サイト観測値に基づく推奨設定 */
word-break: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* Mizuno サイト: font-feature-settings 指定なし（palt 未使用） */
```

- **palt**: **使用しない**。Roboto 欧文フォントが先頭に来る構成のため、palt の効果は期待できない
- **kern**: 暗黙的に有効（ブラウザデフォルト）

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（"詳しく見る" 等）**
- Background: `#111111`
- Text: `#ffffff`
- Padding: 5px
- Border Radius: 3px
- Font Size: 14px
- Font Weight: 400
- Font Family: Roboto

**Secondary CTA（"ピックアップをすべて見る" 等）**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#111111`（推定）
- Padding: 18px
- Border Radius: 3px
- Font Size: 14px
- Font Weight: 400

**Tag Pill（検索タグ）**
- Background: `#f5f5f5`
- Text: `#111111`
- Border Radius: 30px（pill 型）
- Padding: 3px 7px
- Font Size: 12px
- Font Weight: 400

**Service Badge（メンバーシップ）**
- Background: `#ffb7c5`
- Text: `#ffffff`
- Border Radius: 5px
- Padding: 5px
- Font Size: 12px
- Font Weight: 700

### Inputs

- Background: `#ffffff` / `#f5f5f5`（フィールドによる）
- Border: 1px solid `#ededed`
- Border Radius: 3px
- Font Size: 14px

### Cards

- Background: `#ffffff`
- Border: なし（またはセパレータで区切る）
- Border Radius: 0〜3px
- Shadow: なし（フラットデザイン）
- テキスト色: `#303030`

### Navigation

- Background: `#ffffff`（メインナビ）/ `#111111`（プロモバー）
- カテゴリ項目: 16px, weight 700, color `#303030`
- メガメニュー大項目: 22px, weight 400, line-height 65px
- メガメニュー小項目: 12px, weight 400, line-height 28.8px, color `#111111`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 備考 |
|-------|-------|------|
| XS | 3px | タグ pill の縦 padding |
| S | 5px | CTA ボタン padding（最小） |
| M | 7px | タグ pill の横 padding |
| L | 18px | セカンダリ CTA padding |
| XL | 24px | セクション内パディング（推定） |
| XXL | 48px | セクション間（推定） |

### Container

- Max Width: Bootstrap グリッド準拠（`1200px` 相当と推定）
- Padding (horizontal): 15px（Bootstrap デフォルト）

### Grid

- Bootstrap 12 カラムグリッドをベースに使用
- 商品カード: 2〜4 カラム（デスクトップ）/ 1〜2 カラム（モバイル）
- カテゴリグリッド: 4〜6 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラットデザイン） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | 商品カード、ドロップダウン（推定） |
| 2 | `0 4px 12px rgba(0,0,0,0.1)` | メガメニュー（推定） |

実サイトはフラット寄りのデザイン。shadow よりも `#ededed` ボーダーや背景色の差で面の階層を表現している。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#303030`（本文）/ `#111111`（見出し）を使い分ける
- プライマリ CTA は `#111111` 背景 + `#ffffff` テキストの高コントラスト構成にする
- タグ・ピルには `border-radius: 30px`（pill 型）+ `#f5f5f5` 背景を使う
- フッターは `#111111` 背景 + `#f5f5f5` テキストのダークフッターを維持する
- Mizuno Blue (`#001489`) はロゴ・ブランド強調にのみ使い、CTA には使わない
- font-family は `Roboto, "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif` のフルチェーンを指定する

### Don't（禁止）

- `font-feature-settings: "palt"` を使わない（Roboto 欧文ファーストの構成では効果がなく、意図しない挙動になる）
- ボタンの border-radius を大きくしない（3px の微角丸スタイルを維持する）
- Mizuno Blue (`#001489`) を CTA や大面積の背景に使わない（ブランドアクセント限定）
- Bootstrap の `--primary: #007bff` を実 UI の主要色として使わない（実サイトでは `#111111` / `#303030` が主要テキスト色）
- 本文 line-height を 1.5 未満にしない（日本語可読性が著しく低下する）
- フッターを白背景にしない（`#111111` ダークフッターがサイト全体のコントラストを締める）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 576px | Bootstrap sm 未満 |
| Tablet | ≤ 768px | Bootstrap md 未満 |
| Desktop | > 768px | Bootstrap md 以上 |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）
- ナビゲーションメニュー項目の line-height（65px 等）はタッチターゲット確保を兼ねている

### フォントサイズの調整

- モバイルでは H2（32px）を 20〜24px 程度に縮小
- 本文 14px はモバイルでも維持（視認性の観点から小さくしない）
- ナビゲーションはハンバーガーメニュー化

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff / #f5f5f5 (section)
Text Primary: #303030
Text Dark: #111111 (headings, CTA bg)
Brand Accent: #001489 (Mizuno Blue)
Footer: bg #111111 / text #f5f5f5
Button Primary: bg #111111 / text #ffffff / radius 3px
Button Secondary: bg #ffffff / text #111111 / radius 3px
Tag Pill: bg #f5f5f5 / text #111111 / radius 30px
Font: Roboto, "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
Body Size: 14px / Weight 400 / Line Height 1.67
palt: 未使用
```

### プロンプト例

```
Mizuno のデザインシステムに従って、商品カードグリッドを作成してください。
- ページ背景: #ffffff、セクション面: #f5f5f5
- テキスト（本文）: #303030、見出し: #111111
- フォント: Roboto, "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
- 本文: 14px / weight 400 / line-height 1.67
- CTA ボタン: bg #111111 / text #ffffff / radius 3px / 14px
- タグ: bg #f5f5f5 / text #111111 / radius 30px / 12px
- カードはシャドウなしのフラットデザイン、border-radius 0〜3px
- Mizuno Blue (#001489) はロゴ・ブランド要素のみに限定
```
