# DESIGN.md — KOKUYO（コクヨ）

> KOKUYO（https://www.kokuyo.co.jp/）コーポレートサイトのデザイン仕様書。
> 「Curiosity is Life — 好奇心を人生に」を掲げる文具・家具・空間・通販を横断する大手メーカー。
> 2024年に CI/VI を全面リニューアルし、カテゴリごとにブランドカラーを割り当てたモジュラー型ナビゲーションと、Helvetica Now Text + 田鶴ゴシック StdN（Morisawa）の混植が特徴。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` の上に、**カテゴリ別の彩度高めブランドカラーパネル**（青・緑・桃・赤・砂色・黄）をタイル状に配置する**カラフルだが整理されたモジュラー UI**。文字は Helvetica Now Text + 田鶴ゴシック StdN という洗練された欧米寄り混植
- **密度**: 本文 17px / line-height 24px（≈1.41）、見出し 19px / weight 500、ボタンや CTA はすべて **OKLCH 色空間で統一**された彩度カーブで定義。色面同士のコントラストは強いが彩度が揃っているので調和する
- **キーワード**: Helvetica Now Text、田鶴ゴシック StdN（Morisawa）、Curiosity is Life、OKLCH パレット、カテゴリカラータイル、palt 適用、純白背景、モジュラーナビ
- **特徴**:
  - **CSS Custom Properties が約 50 種類**と充実（`--brand_blue / brand_red / brand_pink / brand_green / cyan / purple / salmon / tan / sand / sun / violet / cloud / bean / lavender / mint / apricot / sea / cream / lemon` 等）
  - **OKLCH（CIE LAB ベース）色空間を採用** — `oklch(0.79 0.14 221)` 等で記述。すべての色が **明度 0.7〜0.9 / 彩度 0.12〜0.17** に揃えられており、トーンが統一されている
  - **カテゴリごとにキーカラーを割り当て**: 文具＝シアン青、家具＝緑、空間＝ピンク、通販＝赤、マガジン＝クリーム黄
  - 全要素で **`font-feature-settings: "palt"`** を有効化 — 田鶴ゴシックの和文プロポーショナル詰めを最大限活かす
  - **Spacing スケールが 8px 基準**（`--space8 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 112 / 144`）— 8px → 16px → 24px → 32px → 48px と倍々ではなく加算的に伸びるカスタムスケール
  - 黒は純黒ではなく **`oklch(0.2718 0.001 0)` ≈ `#313131`**（`--black100`）
  - ボーダー・区切り線は `--gray_line`、ボタン背景は `--gray_btn`、汎用面背景は `--gray_bg` と命名規則が明確
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。OKLCH を hex 換算して併記。
> KOKUYO は OKLCH ベースの統一カーブで、彩度・明度が一定の範囲に揃っている。

### Brand Category Colors（カテゴリパネルの面色）

- **文具 / Stationery** (`oklch(0.79 0.14 221)` ≈ **`#5dadd1`**): シアン青。文具カテゴリのキーカラー
- **家具 / Furniture** (`oklch(0.73 0.17 159)` ≈ **`#3eb088`**): エメラルドグリーン。家具カテゴリ
- **空間 / Space** (`oklch(0.84 0.12 337)` ≈ **`#e08bbf`**): ピンク。空間カテゴリ
- **通販 / Mail Order** (`oklch(0.72 0.16 20)` ≈ **`#e76654`**): コーラルレッド。通販カテゴリ
- **コクヨを知る / About** (`oklch(0.9 0 200)` ≈ **`#dde5e7`**): 淡いブルーグレー。企業情報セクション
- **マガジン / Magazine** (`oklch(0.89 0.02 93)` ≈ **`#e6e2cb`**): 淡いクリーム。マガジン

### Surface / Background

- **Background White** (`oklch(1 0 0)` ≈ **`#ffffff`**): ページ基本背景（`--white100`）
- **Surface Sand** (`oklch(0.9696 0.0696 125.09)` ≈ **`#ecf5d5`**): キャンパスノート的な明るい黄緑（`--sand` または `--lemon` 系）
- **Surface Light** (`oklch(0.95 0 0)` ≈ **`#eeeeee`**): カード背景・お知らせバナー（`--gray_bg`）
- **Border Light** (`oklch(0.85 0 0)` ≈ **`#d4d4d4`**): 区切り線・ボタン枠（`--gray_line`）

### Text

- **Black 100** (`oklch(0.2718 0.001 0)` ≈ **`#313131`**): 本文・見出し（`--black100`）。純黒ではなく若干グレー寄り
- **Gray Text** (`oklch(0.51 0 0)` ≈ **`#7a7a7a`**): 補足テキスト（`--gray_text`）
- **Gray Text Light** (推奨 `#a4a4a4`): さらに薄い補助（`--gray_text_light`）
- **White** (`#ffffff`): カラーパネル上のテキスト

### Extended Palette（CSS Custom Properties で定義 / 実 UI で時々登場）

> KOKUYO のフルパレット（OKLCH ベース、明度 0.79〜0.97、彩度 0.05〜0.17 で揃う）

| Token | 推定 hex | トーン |
|-------|---------|--------|
| `--brand_blue` | `#5dadd1` | 文具 |
| `--brand_red` | `#e76654` | 通販 |
| `--brand_pink` | `#e08bbf` | 空間 |
| `--brand_green` | `#3eb088` | 家具 |
| `--cyan` | `#5dadd1` | 文具系 |
| `--purple` | `#a78bd9` | アクセント |
| `--salmon` | `#f0a290` | アクセント |
| `--tan` | `#d4b89a` | クリーム系 |
| `--sand` | `#ecf5d5` | 黄緑面 |
| `--sun` | `#f5d97a` | 黄 |
| `--violet` | `#c5a5e0` | アクセント |
| `--cloud` | `#dde5e7` | 淡ブルーグレー |
| `--bean` | `#c4d68f` | 抹茶緑 |
| `--lavender` | `#d8c0e8` | 薄紫 |
| `--mint` | `#9fd9c1` | 薄緑 |
| `--apricot` | `#f5b896` | アプリコット |
| `--sea` | `#7ec5d4` | 海色 |
| `--cream` | `#f0e9d4` | クリーム |
| `--lemon` | `#f0e89a` | 黄レモン |
| `--keycolor` | （ページごとに切替） | カテゴリで動的に変わる |

### Semantic（補完）

- KOKUYO では `--brand_red` (`#e76654`) を**通販カテゴリのキーカラー**として使うため、エラー色には使わない
- ステータス色を作る場合: **エラー `#d04a3a`** / **警告 `#e8a943`** / **成功 `#3eb088`**（家具と同色なら別トーン推奨）

---

## 3. Typography Rules

### 3.1 和文フォント

- **メイン（ゴシック）**: **TazuganeGothicStdN（田鶴ゴシック StdN / Morisawa）** — 田鶴明朝とペアで設計された Morisawa の humanist gothic。ややカリグラフィックで温かみがある
- **フォールバック**: システム sans-serif

### 3.2 欧文フォント

- **メイン**: **HelveticaNowText（Monotype）** — Helvetica の現代的リバイバル。よりオプティカルに最適化されたグリフ
- **省略形**: `hnr`（HelveticaNowText の Variable Font 版を CSS 内でカスタム名称）
- **フォールバック**: システム sans-serif

### 3.3 font-family 指定

実サイトの実測値:

```css
font-family: hnr, HelveticaNowText, TazuganeGothicStdN, sans-serif;
```

**フォールバックの考え方**:
- **欧文 hnr / HelveticaNowText を先頭**に置く — ASCII グリフは Helvetica Now Text で組まれる
- 和文は **TazuganeGothicStdN（Morisawa）が最優先**
- AI で再現する場合、HelveticaNowText・TazuganeGothicStdN ともに商用ライセンスのため:
  - **欧文代替: Inter / "Helvetica Neue" / Arial**
  - **和文代替: "Noto Sans JP" / "Hiragino Kaku Gothic ProN" / sans-serif**
- 全要素で `"palt"` 有効

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-07 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Heading | **19px** | **500** | 28px (×1.47) | normal | `#313131` | "ニュースリリース" 等 |
| Body | **17px** | 400〜500 | 24px (×1.41) | normal | `#313131` | 段落・カード本文 |
| Body Muted | 17px | 400 | 24px (×1.41) | normal | `#7a7a7a` | "領域・社員・歴史のこと" 等の補助説明 |
| Card Label | 17px | 500 | 24px (×1.41) | normal | `#ffffff` | カラーパネル上のラベル |
| Anchor | 19px | 400 | 28px (×1.47) | normal | `#313131` | リンク見出し |
| Sub Label (S) | 15px | 500 | 22px (×1.47) | normal | `#000000` | "サイトの動き" 等の小ラベル |
| Toggle Caption | 11px | 500 | 20px (×1.82) | normal | `#000000` / `#ffffff` | ON / OFF トグル |
| H1 / H2 (visual) | （実測 1px / 視覚的には領域名カードの文字） | 400 | 1.15 | normal | カラー面に合わせる | "Curiosity is Life", "好奇心を人生に" |

> 注: Sliderヒーローの h1/h2 は装飾要素として `font-size: 1px` で隠蔽されており、視覚的なテキストは画像 / SVG または別タグで表現されている。AI で再現する場合、**ヒーローの大型キャッチは見た目のサイズで指定** すること（例: 64〜80px の Helvetica Now Text Bold）。

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.41**（24px / 17px）— 欧文寄りのやや締まったプロポーション
- **見出しの行間**: **1.47**（28px / 19px）
- **トグル小文字の行間**: 1.82（20px / 11px）— 小文字の余裕を確保
- **letter-spacing**: ほぼ全要素で **`normal`** — `palt` の自動詰めに任せる

**ガイドライン**:
- 田鶴ゴシック + Helvetica Now Text の組み合わせは詰まり気味になりやすい — `letter-spacing: normal` + `palt` で自動調整に委ねる
- カラーパネル上のラベルは weight 500 で太めに（白文字の可読性確保）
- 本文を `line-height: 1.4〜1.5` に保ち、欧米寄りのリズムを維持

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 田鶴ゴシックは humanist スタイルで、禁則自動処理との相性が良い

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **全要素で `"palt"` を有効化**（実測で確認）— 田鶴ゴシックの和文プロポーショナル詰めをサイト全体に適用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Category Tile（gnaviButton）** — トップナビの大型カラーパネル
- Background: カテゴリカラー（`oklch(0.79 0.14 221)` 等）
- Text: `#ffffff` または `#000000`（明度に応じて選ぶ）
- Padding: `32px`（推奨。実測 padding-top 32px、padding-left 32px）
- Border Radius: `0px`（タイルは矩形）
- Font: HelveticaNowText + TazuganeGothicStdN, weight 400〜500

**News Card** — お知らせのカード
- Background: `#eeeeee`（`--gray_bg`、`oklch(0.95 0 0)`）
- Text: `#313131`（`--black100`）
- Padding: `24px`
- Border Radius: `0px`（推奨。実測 0）
- Font: 17px / weight 500 / lh 1.41

**Toggle (アニメ ON/OFF)**
- Background: `#ffffff`（OFF）/ `#000000`（ON）
- Border: `1px solid #d4d4d4`
- Text: 11px / weight 500 / lh 20px
- ピル状

### Inputs

実 UI に大きく表面化していないが、KOKUYO トーンに合わせる場合:

- Background: `#ffffff`
- Border: `1px solid #d4d4d4`（`--gray_line`）
- Border (focus): `2px solid` カテゴリキーカラー（`--keycolor`）
- Border Radius: `0px` または `8px`
- Padding: `12px 16px`（`--space16` / `--space12`）
- Font: HelveticaNowText + TazuganeGothicStdN 17px

### Cards

- Background: `#ffffff` または `--gray_bg` (`#eeeeee`)
- Border: なし or `1px solid #d4d4d4`
- Border Radius: `0px`（基本）/ `8px`（カラーパネル外の汎用カード）
- Padding: `24px`（`--space24`）
- Shadow: フラット（基本影なし）

### Header / Nav

- Background: `#ffffff`
- Color: `#313131`
- Padding: `16px 32px`（推奨）
- ロゴ KOKUYO 左、検索・言語切替・ナビ右

### Footer

- Background: `#ffffff`
- Color: `#313131`
- Padding: `64px 32px`（`--space64` / `--space32`）

---

## 5. Layout Principles

### Spacing Scale（CSS Custom Properties 実測）

| Token | Value | 用途 |
|-------|-------|------|
| `--space8` | 8px | アイコン文字間 |
| `--space16` | 16px | リスト項目間 |
| `--space24` | 24px | カード内パディング |
| `--space32` | 32px | カラーパネル padding |
| `--space48` | 48px | セクション内余白 |
| `--space64` | 64px | フッター padding |
| `--space80` | 80px | セクション間 |
| `--space96` | 96px | 大セクション間 |
| `--space112` | 112px | ヒーローと次セクション |
| `--space144` | 144px | 最大の余白 |

> 8px ベースで加算的（8 → 16 → 24 → 32 → 48 → 64 → 80 → 96 → 112 → 144）

### Container

- Max Width: 推奨 `1280〜1440px`
- ヘッダー高さ: `--headAreaHeight`
- スクロールバー幅: `--scrollbar`
- Viewport 単位: `--vw` / `--vwnounit`（カスタム CSS Variables）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | カラーパネル・カード（基本） |
| Small | 8px | 汎用カード（推奨） |
| Pill | 999px | トグル（ON/OFF） |

### Grid

- カラーパネル: 5〜6 タイルの横並び（コクヨを知る、文具、家具、空間、通販、マガジン、衣・食・住）
- ニュース: 1〜3 カラム（カード型）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カラーパネル・カード（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時のリフトアップ（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.10)` | モーダル（推奨） |

- KOKUYO は色面で構造を作るため、**影はほぼ使わない**
- ホバー時に薄い影でフィードバックする程度

---

## 7. Do's and Don'ts

### Do（推奨）

- **HelveticaNowText + TazuganeGothicStdN** の混植で組む（欧文先頭、和文 Morisawa を 2 番目）
- 全要素で **`font-feature-settings: "palt"`** を有効化
- 本文 line-height は **1.41**（24/17）に統一（欧米寄りの締まったリズム）
- カテゴリカラーは **OKLCH 色空間**で定義し、**明度 0.7〜0.9 / 彩度 0.12〜0.17** に揃える（トーン統一）
- カラーパネル上のラベルは **weight 500 / `#ffffff`** で
- Spacing は **8px ベースの加算スケール**（8 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 112 / 144）
- 純黒は使わず、**`#313131`（`--black100`）** をテキスト基本色に
- `--keycolor` をページごとに切り替え（カテゴリ別の演出）

### Don't（禁止）

- 純黒 `#000000` を本文に多用しない
- カラーパネル外のカードに**派手な色**を使わない（白＋グレー＋テキストで構成）
- 影を多用しない（KOKUYO は色面で構造を作る）
- カテゴリカラーを意味のない場所に流用しない（必ずカテゴリと紐付ける）
- 文具の青（`--brand_blue`）と通販の赤（`--brand_red`）を CTA エラー色に転用しない
- letter-spacing を強く付けない（`palt` の自動調整を尊重）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | ≤ 1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- カラーパネル: 5〜6 タイル横並び → 2 カラム → 1 カラム積み
- 本文: 17px → 15〜16px
- 見出し: 19px → 17px
- Spacing: `--space64` → `--space32` 等で半減

### タッチターゲット

- 最小 44×44px。カラーパネルは 96〜112px 角を確保

### ダークモード

- 該当なし。常時ライトモード

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff
Text: #313131 (oklch(0.2718 0.001 0), --black100)
Text Muted: #7a7a7a (--gray_text)
Surface Light: #eeeeee (--gray_bg)
Border: #d4d4d4 (--gray_line)

Brand Cyan (文具): #5dadd1 (oklch(0.79 0.14 221), --brand_blue)
Brand Green (家具): #3eb088 (oklch(0.73 0.17 159), --brand_green)
Brand Pink (空間): #e08bbf (oklch(0.84 0.12 337), --brand_pink)
Brand Red (通販): #e76654 (oklch(0.72 0.16 20), --brand_red)
Brand Sand: #ecf5d5 (oklch(0.9696 0.0696 125.09), --sand)
Brand Cloud: #dde5e7 (oklch(0.9 0 200), --cloud)

Font: hnr, HelveticaNowText, TazuganeGothicStdN, sans-serif
Web Fallback (代替): Inter, "Helvetica Neue", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif

Heading: 19px / weight 500 / line-height 1.47 / letter-spacing normal / palt
Body: 17px / weight 400-500 / line-height 1.41 (24px) / letter-spacing normal / palt
Card Label (white on color): 17px / weight 500 / color #ffffff / palt

Spacing: 8 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 112 / 144（加算スケール）
Border Radius: 0px（カラーパネル）/ 8px（汎用カード）/ 999px（トグル）
Shadow: none（基本フラット）
font-feature-settings: "palt"（全要素）
```

### プロンプト例

```
KOKUYO のデザインに従って、商品カテゴリ一覧ページを作成してください。
- 背景: #ffffff
- フォント: hnr, HelveticaNowText, TazuganeGothicStdN, sans-serif
  （Web 代替: Inter, "Helvetica Neue", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif）
- 全要素で font-feature-settings: "palt" を有効化
- 本文: 17px / weight 400 / line-height 1.41 (24px) / color #313131
- 見出し: 19px / weight 500 / line-height 1.47 / color #313131
- カテゴリパネル（4〜6タイル）:
  - 文具: bg #5dadd1 (oklch(0.79 0.14 221))
  - 家具: bg #3eb088 (oklch(0.73 0.17 159))
  - 空間: bg #e08bbf (oklch(0.84 0.12 337))
  - 通販: bg #e76654 (oklch(0.72 0.16 20))
  - パネル内ラベル: white text / 17px / weight 500 / palt
  - padding: 32px、角丸 0px
- ニュースカード: bg #eeeeee / padding 24px / 角丸 0px
- Spacing は 8px ベース加算スケール（8/16/24/32/48/64/80/96/112/144）
- 純黒 #000000 は使わず、#313131（--black100）を基本テキスト色に
- letter-spacing は付けず、palt の自動詰めに任せる
- 影はほぼ使わない（カラーパネルで構造を作る）
- CTA ボタンは矩形 + カテゴリキーカラー + 白文字
```
