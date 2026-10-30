# DESIGN.md — TENTIAL

> TENTIAL（https://tential.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ネイビーブルーを基調にした、信頼感と清潔感のあるウェルネス EC。リカバリーウェアや睡眠グッズを扱うブランドとして、落ち着きと上質さを両立するデザイン
- **密度**: 本文の line-height は 1.8 と広め。商品カードや機能紹介はゆったりした余白で配置し、コンディショニングブランドとしての余裕を表現
- **キーワード**: ネイビーブルー、クリーン、ウェルネス、テクノロジー×睡眠、上質な信頼感
- **特徴**:
  - **2フォントシステム**: 見出し・UI に **din-2014**（幾何学的サンセリフ）、本文に **Helvetica / neue-haas-grotesk-display**（ネオグロテスク）。どちらも日本語フォールバックは Noto Sans JP
  - **ブランドカラーは `#284b7d`（ネイビーブルー）**。見出し、CTA、バッジ、リンクに一貫して使用。ページ上で最も頻出する背景色（56 回出現）
  - **ブルーティンテッドな面システム**: 背景は純粋なグレーではなく `#eef2f7` / `#d4dbe5` / `#dde1f0` のようにブルー寄りにティントされている
  - **ピル・角丸・直角の混在**: CTA に `radius: 1000px`（ピル）、カート追加に `32px`（角丸）、アウトラインボタンに `4px`（直角寄り）と用途で使い分ける
  - **本文 weight 500**: 通常の 400 より一段太い。ウェルネスブランドとしての堅実さ・信頼感を文字の太さで表現
  - **`font-feature-settings: normal`**: palt なし。欧文書体 din-2014 のメトリクスに任せる
  - **Adobe Fonts（din-2014, neue-haas-grotesk-display）**: ドメインライセンスのため、外部環境では表示されない
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Navy** (`#284b7d`): メインのブランドカラー。見出し、主要 CTA "詳しくはこちら" / "カートに追加" の背景、ナビラベル、リンク、医療機器バッジの背景。ページ全体で最も頻出する有彩色背景（56 件）
- **Accent Periwinkle** (`#8593bc`): セカンダリブランドカラー。セクション背景やカテゴリエリアの面色（29 件出現）
- **Accent Gold** (`#d1c67a`): "限定" バッジの背景。期間限定・特別感の合図色
- **Accent Brown** (`#b48857`): ウォームアクセント。プロモバナーやキャンペーン帯に使用

### CTA / Buttons

- **Primary CTA (Pill)**: 背景 `#284b7d` / 文字 `#ffffff` / radius `1000px`（ピル）/ font din-2014, weight 600
- **Primary CTA (Rounded)**: 背景 `#284b7d` / 文字 `#ffffff` / radius `32px` / "カートに追加" 等
- **Secondary Outline**: 背景 `#ffffff` / 文字 `#284b7d` / border 1px solid / radius `4px` / "すべての商品をみる"
- **Secondary Pill**: 背景 `#ffffff` / 文字 `#284b7d` / radius `32px` / "お近くの店舗を探す"
- **Badge (Medical)**: 背景 `#284b7d` / 文字 `#ffffff` / radius small / 12px / weight 600 / "一般医療機器"
- **Badge (Limited)**: 背景 `#d1c67a` / 文字 `#ffffff` / radius small / 12px / weight 600 / "限定"
- **Badge (NEW)**: 背景 gray / 文字 `#ffffff` / radius small / 12px / weight 600

### Neutral — Blue-Tinted Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#18181b` | (24, 24, 27) | 本文テキスト（ほぼ黒、わずかにブルー） |
| Text Near-Black | `#000011` | (0, 0, 17) | 一部のリンク・テキスト |
| Text Secondary | `#666666` | (102, 102, 102) | 商品説明・補助テキスト |
| Footer Heading | `#567eb4` | (86, 126, 180) | フッターのカテゴリ見出し |
| Footer Subtitle | `#7e93b1` | (126, 147, 177) | フッターナビのサブ項目 |
| Surface Dark | `#d4dbe5` | (212, 219, 229) | 濃いブルーグレー面 |
| Surface Mid | `#dde1f0` | (221, 225, 240) | パープル寄りの面 |
| Surface Light | `#eef2f7` | (238, 242, 247) | 商品リスト背景等の薄いブルーグレー面 |
| Surface Ultra Light | `#f7f8fa` | (247, 248, 250) | ニアホワイトのブルーティント面 |
| Search BG | `#f6fafe` | (246, 250, 254) | 検索入力欄の背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトのトップページにはエラー／成功色は表面化していない。EC として推奨する補完値:

- **Danger**: `#dc2626` — エラー、在庫切れ
- **Success**: `#16a34a` — 購入完了、在庫あり
- **Warning**: `#d97706` — 注意喚起

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先の和文フォント。din-2014 / Helvetica / neue-haas-grotesk-display の日本語グリフ補完として使用
- **フォールバック**: YuGothic → Yu Gothic（Windows）→ Hiragino Kaku Gothic ProN（macOS）→ sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **見出し・UI 用**: **din-2014**（幾何学的サンセリフ、Adobe Fonts）。"TENTIAL" ワードマーク、セクション見出し "人気の商品"・"News"、ナビラベル、ボタンラベル、商品タイトル、フッター等に使用
- **本文用**: **Helvetica**（システムフォント）/ **neue-haas-grotesk-display**（Adobe Fonts）。本文、商品説明、キャプション等に使用
- **等幅**: 明示指定なし

### 3.3 font-family 指定

```css
/* 見出し・UI（h1〜h3, button, nav, product title, badge, footer） */
font-family: din-2014, "Noto Sans JP", YuGothic, "Yu Gothic",
  "Hiragino Kaku Gothic ProN", sans-serif;

/* 本文・説明文（p, body, product description, caption） */
font-family: Helvetica, neue-haas-grotesk-display, "Noto Sans JP",
  YuGothic, "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（din-2014 / Helvetica）を先に指定し、欧文の表示品質をブランド書体で確保
- 和文は Noto Sans JP を最優先フォールバック。weight 500 / 600 / 700 すべてをカバーするため
- YuGothic → Yu Gothic は Windows 環境向け。`@font-face` による Medium マッピングは不使用
- Hiragino Kaku Gothic **ProN**（N 付き）を指定
- Adobe Fonts（din-2014, neue-haas-grotesk-display）が未契約環境では Helvetica → Noto Sans JP にフォールバック

> **代替フォント注記**: din-2014 は Adobe Fonts のドメインライセンスのため、preview.html や社外資料では表示されない。代替として **Barlow**（Google Fonts、幾何学的サンセリフ）が字面の幅・ウェイト感で近い印象が出る。neue-haas-grotesk-display は **Inter** または **システム Helvetica** で代替する。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 Logo | din-2014 | 32px | 600 | 0 (collapsed) | normal | `#284b7d` | "TENTIAL" ワードマーク |
| H2 Section | din-2014 | 32px | 600 | 48px (×1.5) | normal | `#284b7d` | "人気の商品"、"News" |
| H3 Subsection | din-2014 | 22px | 600 | 39.6px (×1.8) | normal | `#284b7d` | 機能紹介のサブセクション |
| Body Feature | Helvetica | 18px | 700 | 32.4px (×1.8) | normal | `#284b7d` | "良質な睡眠のために" 等の特徴テキスト |
| Body | Helvetica | 16px | 500 | 28.8px (×1.8) | normal | `#18181b` | 本文 |
| Nav Label | din-2014 | 14px | 600 | 14px (×1.0) | normal | `#284b7d` | "製品一覧" 等 |
| Product Title | din-2014 | 13px | 600 | 20px (×1.54) | normal | `#18181b` | 商品名 |
| Product Desc | Helvetica | 13px | 500 | 19.5px (×1.5) | normal | `#666666` | 商品説明 |
| Footer Title | din-2014 | 13px | 600 | normal | normal | `#567eb4` | フッターカテゴリ見出し |
| Footer Subtitle | din-2014 | 12px | 600 | 21.6px (×1.8) | normal | `#7e93b1` | フッターナビ項目 |
| Caption | Helvetica | 12px | 500 | 21.6px (×1.8) | normal | `#666666` | 小さい情報テキスト |
| Search Input | Helvetica | 16px | 500 | normal | normal | `#18181b` | bg `#f6fafe`, radius 4px |
| Badge | din-2014 | 12px | 600 | normal | normal | `#ffffff` | "一般医療機器"、"限定" 等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.8`（28.8px / 16px）— 日本語 EC として広めの行間で可読性を確保
- **特徴テキスト (18px)**: `1.8`（32.4px / 18px）
- **H2 見出し (32px)**: `1.5`（48px / 32px）
- **H3 見出し (22px)**: `1.8`（39.6px / 22px）
- **商品タイトル (13px)**: `1.54`（20px / 13px）
- **商品説明 (13px)**: `1.5`（19.5px / 13px）
- **ナビ (14px)**: `1.0`（14px / 14px）— 一行高さ
- **フッター項目 (12px)**: `1.8`（21.6px / 12px）

**字間 (letter-spacing)** — 実測:
- **全要素**: `normal`（0）。TENTIAL は明示的な letter-spacing 調整を行わない
- 文字間の調整は din-2014 / Helvetica のメトリクスに任せる方針

**ガイドライン**:
- TENTIAL の基本リズムは **line-height 1.8 + letter-spacing normal**
- 見出しも本文も同じ `1.5〜1.8` の行間を維持し、急激なリズム変化を避ける
- letter-spacing は一切カスタマイズしない。フォントのデフォルトメトリクスを尊重する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
```

- 特別な禁則設定は確認されなかった
- 商品名やキャッチコピーの改行は HTML の `<br>` で手動指定

### 3.7 OpenType 機能

```css
/* 全要素共通 */
font-feature-settings: normal;
```

- **palt は一切使用しない**。実測で全要素 `font-feature-settings: normal` を確認
- din-2014 は欧文書体のため palt は不要。Noto Sans JP フォールバック時もデフォルトメトリクスに任せる

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA (Pill)** — "詳しくはこちら"
- Background: `#284b7d`
- Text: `#ffffff`
- Padding: 適度な内部余白
- Border Radius: `1000px`（完全ピル）
- Font: din-2014, weight 600
- Border: none

**Primary CTA (Rounded)** — "カートに追加"
- Background: `#284b7d`
- Text: `#ffffff`
- Padding: 適度な内部余白
- Border Radius: `32px`（大きな角丸）
- Font: din-2014, weight 600
- Border: none

**Secondary Outline** — "すべての商品をみる"
- Background: `#ffffff`
- Text: `#284b7d`
- Border: `1px solid #284b7d`
- Padding: 適度な内部余白
- Border Radius: `4px`（直角寄り）
- Font: din-2014, weight 600

**Secondary Pill** — "お近くの店舗を探す"
- Background: `#ffffff`
- Text: `#284b7d`
- Border: `1px solid #284b7d`
- Padding: 適度な内部余白
- Border Radius: `32px`
- Font: din-2014, weight 600

**Tertiary Outline** — "もっと見る"
- Background: `#ffffff`
- Text: `#284b7d`
- Border: `1px solid #284b7d`
- Padding: 適度な内部余白
- Border Radius: `4px`
- Font: din-2014, weight 600

**Registration** — "新規会員登録"
- Background: `#284b7d`
- Text: `#ffffff`
- Border Radius: `4px`
- Font: din-2014, weight 600

### Badges

**Medical Device Badge** — "一般医療機器"
- Background: `#284b7d`
- Text: `#ffffff`
- Border Radius: small
- Font: din-2014, 12px, weight 600

**Limited Badge** — "限定"
- Background: `#d1c67a`
- Text: `#ffffff`
- Border Radius: small
- Font: din-2014, 12px, weight 600

**NEW Badge**
- Background: gray
- Text: `#ffffff`
- Border Radius: small
- Font: din-2014, 12px, weight 600

### Inputs

- Background: `#f6fafe`（ブルーティントのニアホワイト）
- Border: `1px solid` 薄いボーダー
- Border Radius: `4px`
- Font: Helvetica + Noto Sans JP, 16px, weight 500

### Cards（商品カード）

- Background: `#ffffff`
- Border: 薄いボーダーまたはなし
- Border Radius: 適度な角丸
- 商品画像 + タイトル（din-2014, 13px, 600）+ 説明（Helvetica, 13px, 500, `#666666`）の構成

### Navigation

- Background: `#ffffff`
- ロゴ "TENTIAL": din-2014, 32px, weight 600, color `#284b7d`
- ナビラベル: din-2014, 14px, weight 600, color `#284b7d`, line-height 1.0

### Footer

- カテゴリ見出し: din-2014, 13px, weight 600, color `#567eb4`
- ナビ項目: din-2014, 12px, weight 600, color `#7e93b1`, line-height 1.8

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白、アイコンと文字の間 |
| S | 8px | 商品カード内の要素間 |
| M | 16px | カード内余白、テキストブロック間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | `4px` | アウトラインボタン、入力欄、会員登録ボタン |
| Medium | `32px` | カート追加ボタン、セカンダリピル |
| Pill | `1000px` | 主要 CTA "詳しくはこちら" |

### Grid

- 商品リストは 4 カラム（デスクトップ）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 商品カード・ボタン（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウン・ナビメニュー |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- TENTIAL の階層感は **ブルーティンテッドなサーフェス色**（`#eef2f7` / `#d4dbe5` / `#dde1f0`）で表現
- 影は控えめ。純白 `#ffffff` とブルーグレー面のコントラストで奥行きを作る
- カルーセルやヒーローエリアは画像の上にテキストを重ねて深度を表現

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出し・UI には **din-2014** を使い、本文には **Helvetica / neue-haas-grotesk-display** を使う（2フォントシステムを維持する）
- ブランドカラー `#284b7d` を見出し・CTA・バッジ・リンクに一貫して使用する
- 本文は **weight 500** を基本にする（TENTIAL は標準の 400 より一段太い）
- 本文の line-height は **1.8** を基本にする（日本語 EC として読みやすいリズム）
- 背景面にはブルーティンテッドなサーフェス色（`#eef2f7` / `#dde1f0`）を使い、純粋なグレー（`#f3f4f6` 等）は避ける
- CTA の形状は用途で使い分ける: メイン訴求はピル `1000px`、カート操作は角丸 `32px`、一覧表示はアウトライン `4px`
- バッジは内容に応じて色を変える: 医療機器はネイビー `#284b7d`、限定はゴールド `#d1c67a`
- フッターのテキスト色はメイン UI より明るいブルー系（`#567eb4` / `#7e93b1`）を使い、階層を作る
- `font-feature-settings: normal` を維持する（palt なし）

### Don't（禁止）

- din-2014 と Helvetica を**逆の用途で使わない**（見出しに Helvetica、本文に din-2014 は NG）
- ブランドネイビー `#284b7d` 以外の色を主要 CTA の背景に使わない
- 本文に **weight 400**（regular）を使わない — TENTIAL の本文は 500（medium）が基本
- 背景に**冷たいグレー**（`#f3f4f6`、`#e5e7eb`）や**ウォームグレー**（`#f2f2f0`）を使わない — TENTIAL のサーフェスはブルーティント
- letter-spacing をカスタマイズしない — 全要素 `normal` が基本
- `palt` を適用しない — 実サイトは `font-feature-settings: normal`
- すべての CTA をピルにしない — アウトラインボタンは `4px`、カート追加は `32px` と使い分ける
- ゴールド `#d1c67a` を**常時表示の要素**に使わない（"限定" の合図色）
- フッターテキストにメイン UI のネイビー `#284b7d` をそのまま使わない — フッターは `#567eb4` / `#7e93b1` で軽くする
- 純粋な `#000000` をテキストに使わない — TENTIAL のテキスト色は `#18181b`（ほぼ黒だが純黒ではない）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト |

### モバイル時の調整

- H2 セクション見出し: 32px → 24px 程度に縮小
- 商品グリッド: 4 カラム → 2 カラム
- 本文サイズは 16px を維持（line-height も 1.8 維持）
- ナビはハンバーガーメニューに切り替え

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Navy (CTA / Heading): #284b7d
Accent Periwinkle (Section BG): #8593bc
Accent Gold (Limited Badge): #d1c67a
Accent Brown (Promo): #b48857
Text Primary: #18181b
Text Secondary: #666666
Footer Heading: #567eb4
Footer Subtitle: #7e93b1
Surface Light: #eef2f7
Surface Mid: #dde1f0
Surface Ultra Light: #f7f8fa
Background: #ffffff

Heading / UI Font: din-2014, "Noto Sans JP", YuGothic, "Yu Gothic",
  "Hiragino Kaku Gothic ProN", sans-serif
Body Font: Helvetica, neue-haas-grotesk-display, "Noto Sans JP",
  YuGothic, "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif
（din-2014 不在時の代替提案: Barlow。neue-haas-grotesk-display 不在時: Inter）

Body Size: 16px / weight 500 / line-height 1.8 / letter-spacing normal
H2 Section: 32px / weight 600 / line-height 1.5 / color #284b7d
H3 Subsection: 22px / weight 600 / line-height 1.8 / color #284b7d
Product Title: 13px / weight 600 / din-2014
Product Desc: 13px / weight 500 / color #666666
Caption: 12px / weight 500 / line-height 1.8

Border Radius: 4px（アウトライン）／32px（カート）／1000px（CTA ピル）
Shadow: 基本 none。階層はブルーティンテッドサーフェスで表現
palt: なし（font-feature-settings: normal）
```

### プロンプト例

```
TENTIAL のデザインに従って、リカバリーウェアの商品一覧ページを作成してください。
- 見出しフォント: din-2014, "Noto Sans JP", YuGothic, "Yu Gothic",
    "Hiragino Kaku Gothic ProN", sans-serif
- 本文フォント: Helvetica, neue-haas-grotesk-display, "Noto Sans JP",
    YuGothic, "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif
- セクション見出し: 32px / weight 600 / line-height 1.5 / color #284b7d / din-2014
- 本文: 16px / weight 500 / line-height 1.8 / letter-spacing normal / color #18181b
- 商品タイトル: 13px / weight 600 / din-2014 / color #18181b
- 商品説明: 13px / weight 500 / color #666666
- 主要 CTA: 背景 #284b7d / 白文字 / border-radius 1000px / din-2014 / weight 600
- カート追加: 背景 #284b7d / 白文字 / border-radius 32px
- セカンダリ: 背景 白 / 文字 #284b7d / border 1px solid / radius 4px
- バッジ（医療機器）: 背景 #284b7d / 白文字 / 12px / weight 600
- バッジ（限定）: 背景 #d1c67a / 白文字 / 12px / weight 600
- 商品リスト背景: #eef2f7（ブルーティンテッド、純粋なグレーは NG）
- 本文 weight は 500（400 ではない）
- letter-spacing は全要素 normal（カスタマイズしない）
- palt なし（font-feature-settings: normal）
- shadow は基本 none。面の色差で階層を表現
```

---

**取得日**: 2026-05-09
**出典**: https://tential.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
