# DESIGN.md — Schoo（スクー）

> Schoo（https://schoo.jp/）のデザイン仕様書。
> 社会人向けオンライン学習プラットフォーム。生放送コミュニティ学習と録画授業を提供。
> 実サイトの computed style 実測（2026-06-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウォームホワイトを基調に、**ブランドオレンジ `#e29447` のピル CTA** と **ウォームベージュ `#f5f2ee` のサーフェス**で学習プラットフォームの親しみやすさ・温もりを表現
- **密度**: 本文の line-height は 1.6〜1.8 と広め。見出しはウェイト 900 と大きめのトラッキングで学習コンテンツのメリハリを作る
- **キーワード**: ウォームオレンジ、教育的・親しみやすい、コミュニティ感、温かみのある typography、成長志向
- **特徴**:
  - 欧文に **Avenir（Linotype ライセンスフォント）** を採用。幾何学系のウォームなサンセリフで、サービスの前向きさを体現
  - 和文は OS フォールバック（游ゴシック → ヒラギノ → メイリオ）で統一
  - プロモバナーのみ **Noto Sans JP**（Google Fonts）を使用し、キャンペーン帯の視認性を確保
  - **ブランドカラーはオレンジ系グラデーション** `#e29447`（バッジ・CTA）/ `#d8934e`（大型 CTA）/ `#d27a3e`（テキストリンク）
  - サーフェスに **ウォームベージュ `#f5f2ee`** を使い、白地との対比で「無料授業」等の訴求エリアを自然に区切る
  - セクションヘッダーには英字 weight 900（"INFORMATION"・"COURSE" 等）を多用し、学習コンテンツの格調を演出
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Orange** (`#e29447`): メインのブランドカラー。会員登録 CTA のバッジ、アクティブドット、NEW バッジ背景
- **Brand Orange CTA** (`#d8934e`): 大型 CTA "無料会員登録はこちら" の背景。ゴーストボタンのボーダー色
- **Brand Orange Text** (`#d27a3e`): テキストリンク・アンカーカラー

### CTA / Buttons

- **Primary CTA (Pill)**: 背景 `#e29447` / 文字 `#ffffff` / radius `100px` / padding `4px 8px` / 15px / weight 700
- **Large Primary CTA**: 背景 `#d8934e` / 文字 `#ffffff` / radius `50px` / padding `18px 50px 12px` / 18px / weight 700
- **Ghost CTA "ログイン"**: 背景 `transparent` / 文字 `#e29447` / border `2px solid #e29447` / radius `100px` / 15px
- **Large Ghost "法人版資料はこちら"**: 背景 `#ffffff` / 文字 `#1e1e1e` / border `1px solid #1e1e1e` / radius `50px` / 18px bold / padding `18px 50px 12px`
- **Badge "NEW"**: 背景 `#e29447` / 文字 `#ffffff` / radius `4px` / 10px / weight 700
- **Dark Balloon**: 背景 `#1e1e1e` / 文字 `#ffffff` / radius `50px`（pill）
- **Orange Balloon**: 背景 `#ffffff` / 文字 `#d8934e` / border `1px solid #d8934e` / radius `50px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#1f1f1f` | (31, 31, 31) | 本文・見出し主要テキスト |
| Text Dark | `#1e1e1e` | (30, 30, 30) | ヘッダー・ナビ・ダークバルーン背景 |
| Text Secondary | `#404044` | (64, 64, 68) | 補足テキスト・カードサブ |
| Text Muted | `#aaaaaa` | (170, 170, 170) | 日付・時刻・補助情報 |
| Text Disabled | `rgba(30,30,30,0.2)` | — | 非アクティブドット |
| Link Blue | `#4f9df7` | (79, 157, 247) | デフォルトリンク色 |
| Input Background | `#eeeeee` | (238, 238, 238) | 検索入力欄の背景 |
| Border / Divider | `#e1e1e1` | (225, 225, 225) | 区切り線・ブックマークボタン枠 |
| Warm Beige Surface | `#f5f2ee` | (245, 242, 238) | 「無料授業」バナー等のプロモサーフェス |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード・ヘッダー |

### Semantic（推奨値）

実サイトには明確なエラー／成功色の表面化は確認されなかった。学習 SaaS として推奨する補完値:

- **Danger**: `#dc3545`（一般的なレッド）
- **Success**: `#28a745`（一般的なグリーン）

### Header / Overlay

- **Header BG**: `rgba(255, 255, 255, 0.95)`（半透明白）+ `box-shadow: rgba(30,30,30,0.05) 0px 4px 8px`
- **Position**: `fixed` / `top: 0`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: 游ゴシック（`YuGothic` / `Yu Gothic`）→ ヒラギノ角ゴ（`Hiragino Sans`）→ メイリオ（`meiryo`）→ Osaka → MS Pゴシック
- **ゴシック体（バナー）**: Noto Sans JP（Google Fonts）— プロモバナー専用
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **Avenir**（Linotype ライセンス）→ Helvetica Neue（ダブル指定）
- **プレビュー代替**: **Nunito**（Google Fonts）— 幾何学的な丸みがAvenir に近く、ウォームなトーンも合致
- **アイコン**: Material Icons Round（Google Fonts）

### 3.3 font-family 指定

```css
/* 本文・ナビ・カード等（メイン） */
font-family: Avenir, "Helvetica Neue", "Helvetica Neue", YuGothic,
  "Yu Gothic", "Hiragino Sans", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, meiryo, osaka,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* プロモバナー専用 */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Avenir（欧文）を最優先。和文は Avenir の欧文グリフではカバーできないため、游ゴシック以下の和文フォントが担う
- Avenir は Adobe / Linotype のライセンスフォントであり、非契約環境では即座に Helvetica Neue → OS 和文フォントへフォールバック
- プロモバナーのみ Noto Sans JP を指定し、太字の視認性を高める

> **代替フォント注記**: Avenir は Linotype のライセンスフォントのため、デザインのプレビューや社外資料での再現は難しい。代替として **Nunito**（weight 300 / 400 / 600 / 700 / 900）を使用すると、幾何学的な丸み・ウォームなトーンの近似が得られる（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Large (バナー) | Noto Sans JP | 52px | 700 | 1.3 (67.6px) | -0.02em | `#1e1e1e` | プロモバナー大見出し |
| H1 | Avenir stack | 36px | 700 | 1.44〜1.5 | 0〜0.07em | `#1e1e1e` | ヒーロー見出し |
| H2 | Avenir stack | 24〜25px | 700 | 1.5 | 0.07em | `#1e1e1e` | セクション見出し |
| H3 Section | Avenir stack | 20px | 900 | 1.25 | 0.1em | `#1e1e1e` | "INFORMATION" 等の英字セクション見出し |
| H3 Card Title | Avenir stack | 12〜13px | 400〜700 | 1.6 | 0 | `#1f1f1f` / `#404044` | コースカードのタイトル |
| Body (バナー) | Noto Sans JP | 18px | 700 | 1.5 | 0.04em | `#1f1f1f` | バナー本文 |
| Body | Avenir stack | 14px | 400〜700 | 1.6〜1.7 | 0 | `#1f1f1f` | 標準本文 |
| Body Description | Avenir stack | 12px | 400 | 1.8 (21.6px) | 0 | `#1f1f1f` | 補足・説明文 |
| Detail / Date | Avenir stack | 11px | 700 | 1.0 | 0 | `#aaaaaa` | 日付・詳細情報 |
| Time | Avenir stack | 16px | 900 | 1.3 | 0 | `#aaaaaa` | 放送時刻 |
| AI Search Button | Avenir stack | 14px | 600 | normal | 0 | `#ffffff` | AI 検索ボタン |
| Badge NEW | Avenir stack | 10px | 700 | 2.0 | 0 | `#ffffff` on `#e29447` | 新着バッジ |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.6〜1.7`
- **補足テキスト (12px)**: `1.8`
- **カードタイトル (12〜13px)**: `1.6`
- **セクション見出し (20px)**: `1.25`（タイト）
- **大見出し (36〜52px)**: `1.3〜1.5`
- **時刻・詳細 (11〜16px)**: `1.0〜1.3`

**字間 (letter-spacing)** — 実測:
- **本文**: `0`（Avenir の自然なカーニングを活かす）
- **バナー本文**: `0.04em`（Noto Sans JP の可読性向上）
- **見出し (H3 Section)**: `0.1em`（英字セクションヘッダーを大きく開く）
- **見出し (H1〜H2)**: `0〜0.07em`
- **バナー大見出し**: `-0.02em`（52px を締める）

**ガイドライン**:
- Avenir は欧文フォントのため、和文の line-height は `1.6` 以上を確保する
- セクション英字ヘッダー（weight 900）は letter-spacing `0.1em` を与えて視認性を高める
- 本文の letter-spacing は `0` のまま Avenir のメトリクスに委ねる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
```

- 英字ヘッダー（"INFORMATION" 等）は `white-space: nowrap` で改行させない
- ピル・バッジは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Avenir のメトリクスと letter-spacing で見た目を調整する方針
- Noto Sans JP バナーも `normal`

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（オレンジピル）** — "会員登録(無料)"
- Background: `#e29447`
- Text: `#ffffff`
- Padding: `4px 8px`
- Border Radius: `100px`（完全ピル）
- Font: Avenir stack, 15px, weight 700
- Border: none

**Large Primary CTA** — "無料会員登録はこちら"
- Background: `#d8934e`
- Text: `#ffffff`
- Padding: `18px 50px 12px`
- Border Radius: `50px`
- Font: Avenir stack, 18px, weight 700

**Ghost CTA（オレンジ枠）** — "ログイン"
- Background: `transparent`
- Text: `#e29447`
- Border: `2px solid #e29447`
- Padding: `4px 8px`（ヘッダー）
- Border Radius: `100px`
- Font: Avenir stack, 15px, weight 400〜700

**Large Ghost CTA** — "法人版資料はこちら"
- Background: `#ffffff`
- Text: `#1e1e1e`
- Border: `1px solid #1e1e1e`
- Padding: `18px 50px 12px`
- Border Radius: `50px`
- Font: Avenir stack, 18px, weight 700

**Badge "NEW"**
- Background: `#e29447`
- Text: `#ffffff`
- Padding: `0 4px`
- Border Radius: `4px`
- Font: Avenir stack, 10px, weight 700, line-height 2.0

**Dark Balloon**
- Background: `#1e1e1e`
- Text: `#ffffff`
- Border Radius: `50px`
- Shadow: `0 2px 8px rgba(30,30,30,0.2)`

**Orange Balloon**
- Background: `#ffffff`
- Text: `#d8934e`
- Border: `1px solid #d8934e`
- Border Radius: `50px`

### Inputs

**Search Input**
- Background: `#eeeeee`
- Border: none（背景色で区別）
- Border Radius: `5px`
- Padding: `0 38px 0 10px`（右アイコン用余白）
- Font: Avenir stack, 14px, weight 400

**Textarea（コメント欄等）**
- Background: `rgba(0, 16, 14, 0.03)`
- Border: `1px solid rgba(0, 16, 14, 0.1)`（shadow で表現）
- Border Radius: `4px`
- Padding: `8px 12px`
- Box Shadow: `rgba(0, 16, 14, 0.1) 0px 0px 0px 1px`

### Cards / Surfaces

**Course Card**
- Background: `#ffffff`
- Border: none（影なし）
- Border Radius: 画像は `4px〜8px`
- Padding: 画像下 `8〜12px`
- Bookmark Button: 背景 `#ffffff` / border `1px solid #e1e1e1` / radius `50%`（サークル）

**Warm Beige Banner**
- Background: `#f5f2ee`
- Padding: `40px 24px`
- Border Radius: なし（全幅帯）

### Header

- Background: `rgba(255, 255, 255, 0.95)`（半透明白）
- Box Shadow: `rgba(30, 30, 30, 0.05) 0px 4px 8px`
- Position: `fixed` / `top: 0`
- z-index: 50 程度

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジの内側余白、アイコン間 |
| S | 8px | ボタン縦余白、カード内テキスト間 |
| M | 16px | カード内要素間、ナビリンク間 |
| L | 24px | カードの内側余白、セクション内余白 |
| XL | 40〜48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー・バナー上下のゆとり |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | NEW バッジ、テキストエリア |
| Small | 5〜8px | 検索入力、コース画像 |
| Large | 50〜100px | 全ピル CTA・ゴーストボタン |
| Circle | 50% | ブックマークボタン |

### Grid

- Columns: 推奨 12 カラム（実装は Flexbox / CSS Grid）
- Gutter: 16〜24px
- コースカード: 4列（desktop）→ 2列（tablet）→ 1列（mobile）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード、ボタン（基本フラット） |
| 1 | `rgba(30,30,30,0.05) 0px 4px 8px` | ヘッダー（実測値） |
| 2 | `rgba(30,30,30,0.1) 0px 8px 20px` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `rgba(30,30,30,0.15) 0px 16px 40px` | モーダル（推奨） |

- 実測ではカード本体の shadow はほぼ `none`
- 立体感は **ウォームベージュ `#f5f2ee`** と **半透明ヘッダー** で表現
- ダークバルーン（`#1e1e1e` pill）は `0 2px 8px rgba(30,30,30,0.2)` 程度の影で浮き感を演出

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文は **Avenir を最優先**、プレビュー・社外環境では **Nunito** で代替する
- 和文は **YuGothic → Hiragino Sans → meiryo** のフォールバックチェーンを維持する
- プロモバナー（キャンペーン帯）のみ **Noto Sans JP** に切り替えて視認性を高める
- 本文の line-height は **1.6 以上**を確保する（Avenir は欧文フォントのため和文が詰まりやすい）
- セクション英字ヘッダー（"INFORMATION" 等）は **weight 900 + letter-spacing 0.1em** で格調を出す
- 主要 CTA は **`#e29447` のオレンジピル**（大型は `#d8934e`）を使い、ゴーストは **`#e29447` の枠線**で統一する
- サーフェスは **ウォームベージュ `#f5f2ee`** を使い、冷たいグレーは避ける
- `font-feature-settings` は **`normal`** のまま（palt は使用しない）

### Don't（禁止）

- Avenir フォールバックチェーンに **欧文専用書体だけのフォールバック**を挟まない（和文が OS デフォルトに落ちる）
- プロモバナー以外の場所に **Noto Sans JP を混在させない**（本文は Avenir stack で統一）
- 本文に **`line-height: 1.4` 以下**を使わない（和文が詰まって可読性が著しく低下する）
- **冷たいグレー**（`#f3f4f6`、`#9ca3af`）を使わない（ウォームベージュ `#f5f2ee` のトーンと合わない）
- CTA に **青系の色**を使わない（`#4f9df7` はデフォルトリンク専用。CTA はオレンジ系のみ）
- `font-feature-settings: "palt" 1` を **全体適用しない**（実サイト非採用。文字詰めが崩れる）
- **純黒 `#000000`** を本文に使わない（Text Primary は `#1f1f1f` / `#1e1e1e`）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム、ナビ折りたたみ |
| Tablet | 768px〜1023px | タブレット。2カラムコースグリッド |
| Desktop | ≥ 1024px | デスクトップ。4カラムコースグリッド |

### モバイル時の調整

- バナー H2 Large: 52px → 32〜36px
- H1: 36px → 24〜28px
- セクション H3: 20px → 16px（weight 900 は維持）
- 本文 14px・line-height 1.6 は維持
- コースカード: 4列 → 2列 → 1列

### タッチターゲット

- 主要 CTA ピル: 高さ 36px 以上（padding `4px 8px` + 15px font）
- 大型 CTA: 高さ 56px 以上（padding `18px 50px 12px` + 18px font）
- ブックマークボタン（circle）: 最小 36x36px 推奨

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Orange (CTA): #e29447
Brand Orange Large CTA: #d8934e
Brand Orange Text Link: #d27a3e
Ghost Border: #e29447
Text Primary: #1f1f1f / #1e1e1e
Text Secondary: #404044
Text Muted: #aaaaaa
Link Blue (default link): #4f9df7
Warm Beige Surface: #f5f2ee
Input Background: #eeeeee
Border / Divider: #e1e1e1
Dark Near-Black: #1e1e1e
White: #ffffff
Header BG: rgba(255,255,255,0.95) + box-shadow rgba(30,30,30,0.05) 0px 4px 8px

Main Font: Avenir, "Helvetica Neue", "Helvetica Neue", YuGothic, "Yu Gothic",
  "Hiragino Sans", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, meiryo, osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Banner Font: "Noto Sans JP", sans-serif
Preview Fallback: "Nunito", YuGothic, "Yu Gothic", "Hiragino Sans", sans-serif

Body: 14px / line-height 1.6 / weight 400 / letter-spacing 0 / color #1f1f1f
Body Description: 12px / line-height 1.8 / weight 400 / color #1f1f1f
Section H3 (EN): 20px / weight 900 / line-height 1.25 / letter-spacing 0.1em
H1: 36px / weight 700 / line-height 1.44 / color #1e1e1e
H2: 24px / weight 700 / line-height 1.5 / letter-spacing 0.07em
Banner H2: 52px / Noto Sans JP / weight 700 / line-height 1.3 / letter-spacing -0.02em

CTA Pill Radius: 100px / Large CTA Radius: 50px / Badge Radius: 4px
Shadow (Header): rgba(30,30,30,0.05) 0px 4px 8px
font-feature-settings: normal（palt 非使用）
```

### プロンプト例

```
Schoo のデザインシステムに従って、オンライン学習プラットフォームのコース一覧セクションを作成してください。
- フォント: Avenir, "Helvetica Neue", YuGothic, "Yu Gothic", "Hiragino Sans", メイリオ, sans-serif
- セクション英字ヘッダー: 20px / weight 900 / letter-spacing 0.1em / color #1e1e1e
- コースカードタイトル: 12〜13px / weight 700 / line-height 1.6 / color #1f1f1f
- 本文: 14px / weight 400 / line-height 1.6 / letter-spacing 0 / color #1f1f1f
- 補足テキスト（日付等）: 11px / weight 700 / line-height 1.0 / color #aaaaaa
- 主要 CTA: 背景 #e29447（オレンジ）/ 白文字 / border-radius 100px / padding 4px 8px / 15px / weight 700
- ゴースト CTA "ログイン": transparent / 文字・枠 #e29447 / border-radius 100px / 2px border
- NEW バッジ: 背景 #e29447 / 白文字 / radius 4px / 10px / weight 700
- カード背景: #ffffff（白）、プロモ帯は #f5f2ee（ウォームベージュ）
- 区切り線・ブックマーク枠: #e1e1e1
- ブックマークボタン: 白背景 / border 1px solid #e1e1e1 / radius 50%（サークル）
- box-shadow は基本 none（ヘッダーのみ rgba(30,30,30,0.05) 0px 4px 8px）
- font-feature-settings は normal（palt 非使用）
- 青（#4f9df7）は CTA に使わず、テキストリンクのみに使用する
- 冷たいグレー（#f3f4f6、#9ca3af）は使わない
```
