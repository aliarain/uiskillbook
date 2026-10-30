# DESIGN.md — Notion Dev（Notion Developer Platform）日本語版

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 抽出元: https://www.notion.com/ja/product/dev
> 取得日: 2026-05-14

> Notion 本体（白基調・8px 角丸・モノクロブランド）とは別の意匠で、開発者向けプラットフォーム専用のキャンペーンページ。CSS 変数も `--color-campaigns-dev-platform-dos-blue` のように "dos"（DOS／BSOD ブルー）と命名されている。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ページ全体がコバルトブルー `#1313ba` の "ベタ塗り" 背景**。BSOD・メインフレーム端末を想起させるレトロブルー基調。Notion 本体（白基調）とは正反対
- **コーナー**: ボタン・CTA は `border-radius: 0`（角ばった四角）。`InlineTextLink` 等は 5px。Notion 本体の 8px とは異なる
- **密度**: ヒーローは余白広め、データ同期パネル・コードブロックは密度高め
- **キーワード**: dev、BSOD blue、DOS、cobalt、sharp corner、dot-matrix、mono accent

---

## 2. Color Palette & Roles

### Primary（ブランドカラー＝ページ背景）

- **Dev Blue** (`#1313ba`): NotionDev のブランド色であり、**同時にページ全体の背景色**。CSS 変数名は `--color-campaigns-dev-platform-dos-blue`。"ブランド" と "面" が同一であることが NotionDev の最大の特徴
- **Dev Blue α** (`#1313baa8`): 同色の 66% 透過。ライト面上の本文・補助テキストで使用

### Surface（面の色）

- **Page Background / Brand** (`#1313ba`): **ページ全体の主背景**。ヒーロー、ナビ、フッター含む大半の面
- **Surface Light** (`#F6F6FC`): セクション切り替え時のライト面、コードブロック・カードの面色（ライト lavender）
- **Surface Translucent** (`rgba(246, 246, 252, 0.44)`): ブルー面上に重ねる半透明パネル／ターミナル枠（**98 回出現で最頻**）。Workers / Agent Tools の浮遊パネルなど
- **Surface Lavender** (`#CBCBEF`): バッジ・ラベルの面色（"Untriaged"、"Triaged" 等のステータス）
- **Embedded Product UI** (`#111111`): **ページ内に埋め込まれた Notion 製品 UI モックアップの背景色**（Notion ダークモードの再現）。ページ本来の背景ではない点に注意

### Text Colors

- **Text on Brand** (`#FFFFFF`): ブルー面の本文・H1・ナビゲーション（NotionDev の大半のテキスト）
- **Text on Brand (Muted)** (`rgba(255, 255, 255, 0.75)`): ブルー面の補助テキスト
- **Text on Light** (`#1313ba`): ライト面の H2/H3、CTA テキスト（ブランド色＝テキスト色）
- **Text on Light (Body)** (`rgba(19, 19, 186, 0.66)`): ライト面の本文。**黒ではなくブランド色を 66% 透過で使う点が NotionDev 固有**

### Semantic（参考：Notion のデザイントークンより）

- **Red 500** (`#f64932`): エラー
- **Orange 500** (`#ff6d00`): 警告
- **Blue 500** (`#097fe8`): 情報（Notion 本体の青、Dev Blue とは別物）

### Neutral Scale（参考：Notion のグレースケール）

- gray-100 `#f9f9f8` → gray-900 `#191918`
- ライト本文補助には gray-700 `#494744`、gray-500 `#78736f` 相当を流用してよい

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: システムフォントに依存（`-apple-system` 経由で OS 標準の和文ゴシックが適用される）。Notion 本体と同じ方針

### 3.2 欧文フォント

- **サンセリフ**: `NotionInter`（Inter のカスタムビルド）を最優先で使用
- **等幅**: `iA Writer Mono`（CSS 変数 `--font-family-primary-mono` で定義）。コードブロック・キーボードショートカット・"/dev/notion" 等のキャンペーンコピーで使用

### 3.3 font-family 指定

```css
/* 本文・見出し（実測値） */
font-family: NotionInter, Inter, -apple-system, "system-ui", "Segoe UI",
  Helvetica, "Apple Color Emoji", Arial, sans-serif,
  "Segoe UI Emoji", "Segoe UI Symbol";

/* 等幅 / コード */
font-family: "iA Writer Mono", SFMono-Regular, Menlo, Consolas,
  "Liberation Mono", monospace;
```

**フォールバックの考え方**:

- 本体 Notion と同じ NotionInter → Inter → OS システムフォントの順
- 和文専用フォントは指定しない（OS 任せ）
- 絵文字は `"Apple Color Emoji"` と `"Segoe UI Emoji"` の両 OS 対応

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (H1) | NotionInter | 64px | 700 | 64px (1.0) | -2.125px (-0.033em) | `#FFFFFF` | ヒーロー大見出し（ブルー面） |
| Heading 1 (H2) | NotionInter | 54px | 700 | 56px (≈1.04) | -1.875px (-0.035em) | `#1313ba` | セクション見出し（ライト面） |
| Heading 2 (H3 lg) | NotionInter | 32px | 700 | 38.4px (1.2) | normal | `#1313ba` | サブセクション見出し |
| Heading 3 (H3 sm) | NotionInter | 18px | 700 | 28px (≈1.56) | -0.125px (-0.007em) | `#1313ba` | カード内見出し |
| Lead Paragraph | NotionInter | 20px | 400 | 28px (1.4) | -0.125px (-0.006em) | `#FFFFFF` | ヒーローの導入文（ブルー面） |
| Body (on Brand) | NotionInter | 16px | 400 | 24px (1.5) | normal | `#FFFFFF` | ブルー面の本文（NotionDev の大半） |
| Body (on Light) | NotionInter | 16px | 400 | 24px (1.5) | normal | `rgba(19,19,186,0.66)` | ライト面の本文 |
| Caption | NotionInter | 14px | 400 | 20px (≈1.43) | normal | `rgba(255,255,255,0.75)` | ブルー面の補助テキスト |
| Caption (Tight) | NotionInter | 14px | 400 | 20px | -0.125px | `rgba(255,255,255,0.75)` | ナビゲーション内ラベル |
| Small | NotionInter | 12px | 400 | 16px (≈1.33) | normal | — | 最小テキスト |
| Code / Terminal | iA Writer Mono | 14px | 400 | 20px | normal | `#1313ba`（ライト面）／`#FFFFFF`（ブルー面） | curl コマンドピル、ターミナル |

### 3.5 行間・字間

- **本文の行間**: 24px（1.5）。Notion 本体と同じ
- **見出しの行間**: Display は 1.0（タイト）、H1 は ≈1.04、H3 (sm) は 1.56
- **見出しの字間**: **負の letter-spacing を採る**（H1: -2.125px、H2: -1.875px、H3: -0.125px）。Inter のオプティカルサイズに合わせた詰め処理
- **本文の字間**: normal（0）

**ガイドライン**:

- 64px 以上の大見出しでは `letter-spacing: -0.033em` 程度を必ず指定する（Inter の太字は字間が広く感じやすいため）
- 本文の letter-spacing は 0 を維持。日本語に負の値を入れない

### 3.6 禁則処理・改行ルール

```css
word-break: break-word;
overflow-wrap: break-word;
```

**禁則対象**:

- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
font-feature-settings: "lnum", "locl" 0;
```

- **lnum**: Lining Figures — 数字をベースラインに揃えた等高グリフ
- **locl 0**: ローカライズ形式を無効化 — Inter のデフォルトグリフを維持
- 本体 Notion と同じ設定。**ナビゲーション・本文・CTA を含むほぼ全要素で適用**されているのが実測で確認できた

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

NotionDev の特徴は **CTA が `border-radius: 0`（角ばった四角）** であること。Notion 本体（8px）と差別化されている。

#### Primary CTA（ナビ右上の「Notionを無料で始める」）

- Background: `#FFFFFF`
- Text: `#1313ba`
- Padding: `4px 14px`
- Border: `1px solid rgba(255, 255, 255, 0)`（透明）
- Border Radius: `0`
- Font Size: 16px / Weight: 500 / Line Height: 24px
- Font Feature Settings: `"lnum", "locl" 0` を継承

#### Tertiary CTA（フッターの言語切替「日本語」など）

- Background: `#1313ba`
- Text: `#FFFFFF`
- Padding: `4px 14px`
- Border: `1px solid #FFFFFF`
- Border Radius: `0`

#### Ghost / Outline（ナビの「ログイン」）

- Background: `transparent`
- Text: `#FFFFFF`
- Border: `1px solid #FFFFFF`
- Border Radius: `0`
- Padding: `4px 14px`

#### Small Pill（"例を見る" などの軽い CTA）

- Background: `transparent`
- Text: `#1313ba`
- Border Radius: `0`
- Padding: `3px 11px`
- Font Size: 14px / Weight: 500

#### Menu Button（"Claude" などのタブ切替）

- Background: `#F6F6FC`
- Text: `#1313ba`
- Padding: `8px 16px`
- Border Radius: `0`
- Font Size: 14px / Weight: 500

### Inline Text Link

- Color: `#1313ba`
- Decoration: ホバーで `underline`
- Font Feature Settings: `"lnum", "locl" 0`
- Border Radius (フォーカスリング想定): `5px`

### Inputs

- Background: `#FFFFFF`（ライト） / `#1A1A1A`（ダーク）
- Border: `1px solid rgba(0, 0, 0, 0.13)`（ライト） / `1px solid rgba(255, 255, 255, 0.13)`（ダーク）
- Border (focus): `1px solid #1313ba`
- Border Radius: `0`（NotionDev は四角を統一）
- Padding: `6px 10px`
- Font Size: 14px / Line Height: 20px
- Color: `#1313ba`（ライト面） / `#FFFFFF`（ダーク面）

### Badges / Labels

- Background: `#CBCBEF`（ラベンダー）または `rgba(203, 203, 239, 0.44)`
- Text: `#1313ba`
- Padding: `2px 8px`
- Border Radius: `0` または `2px`
- Font Size: 12〜14px / Weight: 500
- 用途: "Enterprise"、"Account access"、"Imports & exports" 等の機能ラベル

### Cards / Panels

- Background: `#F6F6FC` または `rgba(246, 246, 252, 0.44)`（ダーク面でのオーバーレイ）
- Border: `1px solid rgba(255, 255, 255, 0.08)`（ダーク面）
- Border Radius: `0`〜`5px`（パネル種別による）
- Padding: 24px
- Shadow: 通常はフラット。必要に応じて `--shadow-200` を流用

### Code Block / Terminal Pane

- Background: `#F6F6FC` または `#111111`
- Font Family: `"iA Writer Mono", SFMono-Regular, monospace`
- Font Size: 14px / Line Height: 20px
- Color: `#1313ba`（ライト面） / `#CBCBEF`（ダーク面）
- Padding: 16〜24px
- Border Radius: `0`

---

## 5. Layout Principles

### Spacing Scale（Notion のデザイントークン由来）

| Token | Value |
|-------|-------|
| spacing-4 | 4px |
| spacing-8 | 8px |
| spacing-16 | 16px |
| spacing-24 | 24px |
| spacing-32 | 32px |
| spacing-48 | 48px |
| spacing-64 | 64px |
| spacing-96 | 96px |
| spacing-128 | 128px |
| spacing-160 | 160px |

セクション間の縦余白は `--spacing-l = 120px` を基本に。

### Container

- Max Width: 1200px
- Padding (horizontal): 32px（デスクトップ） / 16px（モバイル）

### Grid

- セクション内グリッドは 12 カラム可変
- Gutter: 24px

---

## 6. Depth & Elevation

NotionDev は**基本フラット**。シャドウは抑制し、面色・ボーダー・余白で階層を表現する。Notion のデザイントークンから流用する場合:

| Level | Token | Shadow | 用途 |
|-------|-------|--------|------|
| 0 | — | none | デフォルト |
| 1 | `--shadow-100` | `0px 0.7px 1.5px rgba(0,0,0,.015), 0px 3px 9px rgba(0,0,0,.03)` | カード、ホバー |
| 2 | `--shadow-200` | `0px 0.8px 2.9px rgba(0,0,0,.05), 0px 4px 18px rgba(0,0,0,.04)` | ポップオーバー |
| 3 | `--shadow-300` | （長文）`0px 13.9px 28.3px rgba(0,0,0,.024), 0px 36px 89px rgba(0,0,0,.04)` | モーダル |

---

## 7. Do's and Don'ts

### Do（推奨）

- **ページ背景には必ず `#1313ba`（Dev Blue）を使う**。これが NotionDev の最大のアイデンティティ。CSS 変数 `--color-campaigns-dev-platform-dos-blue`
- ブルー面の本文・見出しは白 `#FFFFFF` で打つ
- ライト面の本文には黒ではなく `rgba(19, 19, 186, 0.66)` を使う。NotionDev の "全部が青っぽい" 統一感はここから生まれる
- CTA・パネル・コードブロックの角は `border-radius: 0` で揃える
- 大見出し（48px 以上）には `letter-spacing: -0.033em` 前後の負の字間を入れる
- コード・ターミナル風コピーは `iA Writer Mono` で組む
- 数字を扱う UI には `font-feature-settings: "lnum", "locl" 0` を必ず指定

### Don't（禁止）

- **ページ背景を黒 `#111111` や `#191918` にしない**。`#111111` は埋め込み Notion 製品 UI モックアップ専用
- Notion 本体の角丸 `8px` を使わない（NotionDev は角ばっている）
- 本文に純黒 `#000000` や `rgba(0,0,0,0.95)` を使わない（青のトーンを崩す）
- Notion 本体の青 `#0075de`（`--color-blue-500`）と Dev Blue `#1313ba` を混同しない
- `letter-spacing` をプラス側に広げない（Inter は字間が広く感じやすい）
- 安易にシャドウを盛らない（NotionDev はフラット基調、点線で領域を区切るのが特徴）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ヒーローは縦並び |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 12 カラムグリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは Display を 40〜48px、H2 を 32〜36px に縮小
- 本文は 16px を維持
- 大見出しの letter-spacing は **画面サイズが小さくなるほど 0 に近づける**（小さい字に負の字間は不要）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Page Background / Brand: #1313ba（dev-platform "dos" blue — ページ背景そのもの）
Surface (Light): #F6F6FC
Surface (Translucent on Brand): rgba(246, 246, 252, 0.44)
Lavender Accent: #CBCBEF
Text on Brand: #FFFFFF（ブルー面の本文・H1）
Text on Light: #1313ba（見出し）／ rgba(19, 19, 186, 0.66)（本文）
Embedded Product UI Only: #111111
Font: NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif
Code Font: "iA Writer Mono", SFMono-Regular, Menlo, monospace
Body Size: 16px / line-height: 1.5
Display Size: 64px / line-height: 1.0 / letter-spacing: -0.033em
font-feature-settings: "lnum", "locl" 0
Button Radius: 0（角ばった四角）
```

### プロンプト例

```
Notion Developer Platform (NotionDev) のデザインシステムに従って、API ドキュメントのトップページを作成してください。
- ページ背景: #1313ba（コバルトブルーのベタ塗り — ブランド＝面色）
- フォント: NotionInter, Inter, -apple-system, sans-serif
- コード: "iA Writer Mono", SFMono-Regular, monospace
- ブルー面の本文: 16px / line-height: 1.5 / color: #FFFFFF
- ヒーロー H1: 64px / 700 / line-height: 64px / color: #FFFFFF / letter-spacing: -2.125px
- ライト面（部分セクション #F6F6FC）の H1: 54px / 700 / color: #1313ba / letter-spacing: -1.875px
- ライト面の本文: 16px / 400 / color: rgba(19, 19, 186, 0.66)
- font-feature-settings: "lnum", "locl" 0
- Primary CTA: 白背景 #FFFFFF、テキスト #1313ba、padding 4px 14px、border-radius: 0
- Ghost CTA: 透明背景、白テキスト、白ボーダー、padding 4px 14px、border-radius: 0
- 浮遊パネル: rgba(246, 246, 252, 0.44) 半透明、点線で領域を区切る
- Badge: 背景 #CBCBEF、テキスト #1313ba、border-radius: 0
```

### CSS 変数体系（抜粋・実測 424 件のうち主要なもの）

```css
/* NotionDev 固有のブランドトークン */
--color-campaigns-dev-platform-dos-blue: #1313ba;
--color-campaigns-dev-platform-dos-alpha-blue: #1313baa8;

/* フォント */
--font-family-primary-sans: NotionInter;
--font-family-primary-mono: "iA Writer Mono";
--font-family-fallback-sans: Inter, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
  "Segoe UI Emoji", "Segoe UI Symbol";

/* font-size スケール（rem） */
--font-size-50: 0.75rem;   /* 12px */
--font-size-100: 0.875rem; /* 14px */
--font-size-200: 1rem;     /* 16px */
--font-size-300: 1.125rem; /* 18px */
--font-size-600: 2rem;     /* 32px */
--font-size-800: 3.375rem; /* 54px */
--font-size-900: 4rem;     /* 64px */

/* border-radius（NotionDev は 0 を多用） */
--border-radius-0: 0;
--border-radius-300: 0.3125rem;  /* 5px - InlineTextLink */
--border-radius-500: 0.5rem;     /* 8px - 本体 Notion 互換 */

/* spacing */
--spacing-16: 1rem;   /* 16px */
--spacing-24: 1.5rem; /* 24px */
--spacing-l: 120px;   /* セクション縦余白 */
```

> 注: NotionDev は本体 Notion と同じ CSS 変数体系を共有しつつ、`--color-campaigns-dev-platform-dos-*` でキャンペーン固有の色を上書きしている。実装時はこのキャンペーン変数を優先する。
