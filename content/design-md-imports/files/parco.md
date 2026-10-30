# DESIGN.md — PARCO（パルコ）

> 株式会社パルコ コーポレートサイト（https://www.parco.co.jp/）のデザイン仕様書。
> 1969年創業、渋谷・池袋・名古屋などの都市型商業施設を運営する流通企業。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景 `#ffffff` × 濃グレー文字 `#2c2c2c` のミニマル構成。装飾色を持たず、文字情報そのものをグラフィカルに見せる**コーポレート寄りのタイポグラフィ主導デザイン**
- **密度**: 横並びナビ・カードの内側に細いグレー枠（`#dedede`）を引き、罫線で領域を区切る伝統的な日本企業サイトの構造。情報密度は中庸
- **キーワード**: 純白背景、濃グレー文字、letter-spacing 広め、palt 有効、見出しは weight 700 + 字間 +0.1em、角丸ゼロ、罫線で区切る
- **特徴**:
  - **CSS Custom Properties は未定義**。色・余白・フォントはすべて旧来 CSS で直書き
  - **font-feature-settings: "palt" を全要素に適用** — 和文プロポーショナル詰めをグローバル ON。詰めの効いたコーポレート体裁
  - **letter-spacing は body 全体で 0.28px (≈+0.02em)**。見出し（h2）はさらに広く `3px (≈+0.1em)`、weight 700 のゆったり字面
  - **2 系統の font-family**: 和文混在は「NotoSansCJKjp → ヒラギノ角ゴシック → 游ゴシック」、英数字専用要素（日付・タグ）は **Lato, sans-serif** を使い分け
  - **角丸ゼロ**（border-radius: 0px）。タグ・カード・ボタンすべて直角矩形
  - **タグバッジ**は `#707070` 灰色面 × 白文字 12px（"営業関連" 等）。鮮やかな色を使わない抑制されたカテゴリ表示
  - **カードは白背景 + 1px solid #dedede の薄罫線**で区切る。影・グラデーション・色面を使わない
  - body の line-height は 1.8（25.2 / 14）— 日本語可読性を意識した広めの行送り
  - CSS 変数なし、UI トークン未整備の旧世代コーポレート CSS の典型例

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> PARCO のコーポレートサイトは**極端に少ないパレット**で構成され、UI 自身は無彩色のみ。

### Brand

- **Brand Logo Black** (`#000000`): "PARCO" ロゴ・ヘッダーの黒
- **Body Charcoal** (`#2c2c2c`): 全テキストの基調色。純黒ではなく濃グレー（rgb(44, 44, 44)）。コーポレート文書の落ち着き

### Surface（背景）

- **Page Background** (`#ffffff`): ページ全体の純白
- **Light Gray Surface** (`#ededed`): 「RSS」「12345」等のページネーター背景（rgb(237, 237, 237)）
- **Tag Background** (`#707070`): カテゴリタグ（"営業関連" 等）の灰色面
- **Pager Inactive** (`#aeaeae`): ページャーの非アクティブ番号

### Text / Foreground

- **Text Primary** (`#2c2c2c`): 本文・見出し・ナビ全般
- **Text Muted** (`#646464`): 日付・キャプション（Lato で組まれる、rgb(100, 100, 100)）
- **Text on Tag** (`#ffffff`): タグ内の白文字
- **Text Logo** (`#000000`): ロゴ部分の純黒

### Border / Divider

- **Card Border** (`#dedede`): カード・リンクボックスを区切る 1px 罫線
- **Light Divider** (`#ededed`): 補助的な区切り線
- **Tag Border**: ボーダーは出さず、面色の差で区別

### Accent / Semantic

- **実 UI に表面化したアクセント色は存在しない**。エラー・成功・警告色の標準は確認できず、UI は完全に無彩色で完結
- 補完する場合は赤 `#cc3333` / 青 `#3366cc` / 緑 `#3a8a4d` をミュートで

---

## 3. Typography Rules

### 3.1 和文フォント

PARCO は **Web フォントを読み込まない**。OS/Noto 標準フォントへフォールバックするコーポレート構成。

- **第1候補**: NotoSansCJKjp（インストール済みなら Noto Sans CJK JP を使用）
- **第2候補**: ヒラギノ角ゴシック / Hiragino Kaku Gothic（Mac）
- **第3候補**: 游ゴシック / YuGothic（Windows / Mac 新）
- **第4候補**: メイリオ / Meiryo（Windows 旧）
- **最終フォールバック**: sans-serif

### 3.2 欧文フォント

- **コーポレート文章中の英数字**: 上記和文チェーン先頭（Noto Sans CJK の欧文グリフ）を使用
- **日付・キャプション専用**: **Lato, sans-serif** — 日付や英文単独要素には Lato を当てて視覚的に区別
- **等幅**: 該当なし

### 3.3 font-family 指定

実サイトの実測値（**body / h1 / h2 / a / li / span 共通**）:

```css
font-family: NotoSansCJKjp, ヒラギノ角ゴシック, "Hiragino Kaku Gothic",
  游ゴシック, YuGothic, メイリオ, Meiryo, sans-serif;
```

**英数字専用要素（日付 `<p class="date">` 等）**:

```css
font-family: Lato, sans-serif;
```

**フォールバックの考え方**:
- 和文は **Noto Sans CJK JP を最優先** — Adobe / Google 共同開発のオープンソース日本語フォント
- ヒラギノ → 游ゴシック → メイリオの伝統チェーン
- **英数字専用要素にだけ Lato を切り出す** — 日付の "2026/01/23" 等を欧文書体で組む
- AI で再現する場合、**"Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif** に簡略化して問題なし

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-07 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Section h2 | **30px** | **700** | 39px (×1.3) | **3px (+0.1em)** | `#2c2c2c` | "お知らせ" 等の節タイトル |
| Nav Active | 16px | **700** | 28.8px (×1.8) | 0.28px (+0.02em) | `#2c2c2c` | "企業情報" 等の現在地 |
| Body | 14px | 400 | 25.2px (×1.8) | 0.28px (+0.02em) | `#2c2c2c` | 段落・リンク・ナビ |
| Tag Badge | **12px** | 400 | 21.6px (×1.8) | 0.28px (+0.02em) | `#ffffff` on `#707070` | "営業関連" カテゴリ |
| Date (Lato) | 12px | 400 | 21.6px (×1.8) | 0.28px (+0.02em) | `#646464` | "2026/01/23" 等 |
| Footer Title | 14px | 400 | 25.2px (×1.8) | 0.28px (+0.02em) | `#2c2c2c` | "関連サイト" 等のフッタ見出し |

### 3.5 行間・字間

- **本文の行間**: **1.8**（25.2 / 14）— **日本語コーポレート文書では広めの値**。可読性とゆったり感を両立
- **見出し（h2）の行間**: **1.3**（39 / 30）— タイトルは詰めて見せる
- **小文字（12px）の行間**: **1.8**（21.6 / 12）— 本文と同じ比率を維持
- **letter-spacing**:
  - 本文・ナビ・タグ: **0.28px（≈+0.02em）** — 全要素グローバル適用
  - 見出し h2: **3px（≈+0.1em）** — タイトルだけ大幅に開く（典型的な日本企業ロゴ風タイポグラフィ）

**ガイドライン**:
- PARCO の和文は**字間を一律で広めに置く**ことで、コーポレート文書の落ち着きと読みやすさを担保
- **見出しだけ字間を 5 倍に開く（0.28px → 3px）**ことで、本文との階層差を字間で表現
- weight は本文 400、ナビアクティブと見出しで 700 に切り替え

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
```

- ブラウザ既定の禁則処理に依存
- 行末に来る句読点・括弧はブラウザの日本語禁則処理に委任

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **palt（プロポーショナル代替メトリクス）を全要素に適用**
- "、""。""（""）" 等の日本語約物が詰めて表示され、コーポレート体裁にふさわしい引き締まった字面
- Lato（欧文）には font-feature-settings: "palt" は無効だが、CSS 上は同じ宣言が継承される

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

PARCO のコーポレートサイトには**塗りボタンが少なく**、リンク化されたカード・テキストボックスが主役。

**Card Link（"ビジネスモデル" "開発計画" 等）**
- Background: `transparent` または `#ffffff`
- Text: `#2c2c2c`
- Border: `1px solid #dedede`
- Border Radius: `0px`
- Padding: `32px 5px`
- Font: 14px / weight 400 / letter-spacing 0.28px / palt
- Hover: border `#2c2c2c` / opacity 0.8（推奨）

**Tag Badge（"営業関連" 等のカテゴリ）**
- Background: `#707070`
- Text: `#ffffff`
- Padding: `2px 8px`
- Border Radius: `0px`
- Font: 12px / weight 400 / letter-spacing 0.28px / palt

**Pager Number Inactive**
- Background: `#ededed`
- Text: `#2c2c2c`
- Border Radius: **`50%`**（円形 — ページャーだけは例外的に丸い）
- Font: 0px（数字を画像置換 or 視覚的に小さく）

### Inputs

検索・フォームは Google CSE 由来で簡素:

- Background: `#ffffff`
- Border: 既定（細い罫線）
- Border Radius: `0px`
- Padding: `24px 10px`（メインナビ内）
- Font: 14px / Arial / line-height 1.2

### Cards / Item Tiles

- Background: `#ffffff`
- Border: `1px solid #dedede`
- Border Radius: `0px`
- Padding: `32px 5px` 程度
- Shadow: なし
- 構造: ラベル → タイトル → 補足

### Header / Nav

- Background: `#ffffff`
- Color: `#2c2c2c`（ナビ）/ `#000000`（ロゴ）
- Logo "PARCO" 左寄せ、グローバルナビは右寄せ
- ナビ項目: 16px / weight 400 → アクティブは weight 700
- Padding: 各項目 `26px 10px 20px`

### Footer

- Background: `#ffffff`
- Color: `#2c2c2c`（メイン）
- フッタ見出しは `<p class="mds">`：14px / weight 400 / letter-spacing 0.28px

---

## 5. Layout Principles

### Spacing Scale（推奨 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | タグ内余白 |
| S | 8px | リスト項目間 |
| M | 16px | カード内段落間 |
| L | 24px | カード間 |
| XL | 32px | セクション内余白 |
| XXL | 64px | セクション間 |

### Container

- Max Width: 1180–1280px（推奨）
- Padding (horizontal): mobile 16px / desktop 32px

### Grid

- カード: 2 カラム（mobile）→ 3 カラム（tablet）→ 4 カラム（desktop）
- Gutter: 16〜24px

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | カード・タグ・ボタン・入力欄 |
| Circle | 50% | ページャー・スライダーインジケーターのみ |

- 直角矩形が原則。**ページャーだけ例外的に円形**

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全コンポーネント基本 |
| 1 | `0 1px 0 0 #dedede` | 罫線で代替 |

- PARCO は**影を使わない**。立体表現はゼロで、罫線（border）で領域を区切る
- カード・モーダルすべてフラット
- ホバー演出は border-color / opacity の変化のみ

---

## 7. Do's and Don'ts

### Do（推奨）

- **背景は純白 `#ffffff`**、文字は濃グレー `#2c2c2c`（純黒 #000 ではない）
- **本文 14px / weight 400 / line-height 1.8 / letter-spacing 0.28px** を基準に
- **見出し（h2）は 30px / weight 700 / line-height 1.3 / letter-spacing 3px (+0.1em)** — 字間を本文の 10 倍開いて階層を作る
- **font-feature-settings: "palt" を全要素に適用** — 和文プロポーショナル詰め
- **カードは白背景 + 1px solid #dedede 罫線**で区切る
- **タグは #707070 灰色面 + 白文字 12px** — 鮮やかな色を使わない
- **角丸はすべて 0px**（ページャーの 50% を除く）
- 日付・英数字専用要素には **Lato, sans-serif** を当てる
- 影・グラデーション・カラフルなアクセントを使わない

### Don't（禁止）

- 純黒 `#000000` を本文に使わない（`#2c2c2c` の濃グレーを厳守）
- 本文 letter-spacing を 0（normal）に戻さない（+0.02em の字間が PARCO の標準）
- 見出しを letter-spacing normal で組まない（+0.1em が必須）
- ボタンに `border-radius` を付けない（直角を維持）
- カラフルなブランド色・アクセントカラーを UI に追加しない
- 影・elevation を使わない（フラット原則）
- font-feature-settings を normal に戻さない（palt 適用が PARCO の標準）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769–1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Section h2: 30px → 22px / letter-spacing は維持
- Body: 14px 維持（縮小しない）
- ナビは drawer ハンバーガーへ切り替え
- カードグリッド 4 → 2 → 1 カラム

### タッチターゲット

- 最小 44×44px。ボタン・タグは padding `8px 16px` 以上を確保

### ダークモード

- **対応なし**。ライトモード固定

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白）
Text Primary: #2c2c2c（濃グレー、純黒ではない）
Text Muted: #646464（日付・キャプション）
Tag BG: #707070（灰色面）
Tag Text: #ffffff
Border: #dedede（カード罫線）
Light Surface: #ededed（ページャー背景）
Logo Black: #000000

Font (和文): NotoSansCJKjp, ヒラギノ角ゴシック, "Hiragino Kaku Gothic", 游ゴシック, YuGothic, メイリオ, Meiryo, sans-serif
Font (欧文専用): Lato, sans-serif
Web Fallback (簡略): "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif

Body: 14px / weight 400 / line-height 1.8 / letter-spacing 0.28px (+0.02em)
Heading h2: 30px / weight 700 / line-height 1.3 / letter-spacing 3px (+0.1em)
Nav Active: 16px / weight 700 / line-height 1.8 / letter-spacing 0.28px
Tag Badge: 12px / weight 400 / line-height 1.8 / letter-spacing 0.28px / white on #707070
Date (Lato): 12px / weight 400 / line-height 1.8 / color #646464

Border Radius: 0px（ページャーのみ 50%）
Shadow: none（フラット）
font-feature-settings: "palt"（全要素グローバル適用）
```

### プロンプト例

```
PARCO のデザインに従って、コーポレートお知らせ一覧ページを作成してください。
- 背景: #ffffff（純白）
- フォント (和文): "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif
- フォント (日付): Lato, sans-serif
- font-feature-settings: "palt" を全要素に適用
- 本文 letter-spacing: 0.28px (+0.02em)
- セクション見出し "お知らせ": 30px / weight 700 / line-height 1.3 / letter-spacing 3px (+0.1em) / color #2c2c2c
- 各お知らせカード: 1px solid #dedede / border-radius 0 / padding 32px 5px / 白背景
- カード内日付: Lato 12px / line-height 1.8 / color #646464 / "2026/01/23" 形式
- カード内カテゴリタグ: 12px / 白文字 / 背景 #707070 / padding 2px 8px / radius 0
- 本文: 14px / weight 400 / line-height 1.8 / color #2c2c2c
- ページャー: 数字円形（border-radius 50%）/ 背景 #ededed / アクティブのみ #ffffff
- 影・グラデーション・カラフルなアクセントは一切使わない
- 角丸はすべて 0px（ページャーのみ 50%）
```
