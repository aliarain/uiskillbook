# DESIGN.md — BASE FOOD（ベースフード）

> BASE FOOD（https://basefood.co.jp/）のデザイン仕様書。
> 完全栄養食の D2C ブランド。「かんたん、おいしい、からだにいい」がタグライン。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 黒いヒーローセクションの力強さと、**ウォームイエロー `#fac83c` のピル CTA** で「おいしさ・手軽さ・健康」の前向きさを表現。白い商品面と暖色系ニュートラル `#f0f1eb` でクリーンかつ温かみのある D2C 体験を構築
- **密度**: 本文の line-height は 1.5 と標準的。商品カルーセルや大画面ビジュアル中心で、情報密度より視覚的インパクト優先
- **キーワード**: ウォームイエロー、D2C ナチュラル、ピル CTA、黒ヒーロー＋白面のコントラスト、完全栄養食の信頼感
- **特徴**:
  - 和文フォントに **mfw-pishiigothicstdn（ピシーゴシック Std N、Morisawa フォントワークス Web フォント）** を採用。Regular（`-r`）と Bold（`-b`）の 2 ウェイトを明示的に切り替える設計
  - **ブランドカラーは `#fac83c`（ウォームイエロー／ゴールド）**。CSS Custom Property `--bf-surface-brand` / `--bf-accent-brand` / `--bf-button-primary-bg` がすべてこの値。CTA "BASE FOODを始める" の背景、フッター全面の背景、商品ピルバッジ "商品を見る" に使用
  - ホバー時は `orange`（`--bf-button-primary-bg-hover`）、アクティブは `#ea8900`（`--bf-button-primary-bg-active`）と段階的に深くなる
  - ページ背景は白 `#ffffff`。ヒーローセクションは黒 `#000000` でフルスクリーンの没入感
  - テキストカラーは `#2a2a2a`（`--bf-text-primary`）を基本に、`#5a5a5a`（`--bf-text-secondary`）で階層を作る。純黒 `#000000` は使わず、ソフトな黒
  - ニュートラルサーフェスに `#f0f1eb`（`--bf-surface-neutral`）— 緑寄りのウォームグレー。"Cartカート" "My pageマイページ" のピル背景に使用
  - デザイントークンは `--bf-*` プレフィックスで体系化。font-size（10〜60）、line-height（12〜88）、spacing、色すべてにトークンがある
  - `/magazine`（HEALTH MAGAZINE）は別システム（WordPress）で、游ゴシック体ベースの独立したタイポグラフィを持つ
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値 + CSS Custom Properties。すべて hex 表記。

### Brand

- **Brand Yellow** (`#fac83c`): メインのブランドカラー。主要 CTA "BASE FOODを始める" の背景、フッター背景、商品ピルバッジ "商品を見る"（`--bf-surface-brand` / `--bf-accent-brand` / `--bf-button-primary-bg`）
- **Brand Hover** (`orange`): 主要 CTA のホバー状態（`--bf-button-primary-bg-hover`）— CSS キーワード `orange`（≒ `#ffa500`）
- **Brand Active** (`#ea8900`): 主要 CTA のアクティブ／プレス状態（`--bf-button-primary-bg-active`）
- **Brand Disabled** (`#ffe89f`): 主要 CTA の無効状態背景（`--bf-button-primary-bg-disabled`）

### CTA / Buttons

- **Primary CTA**: 背景 `#fac83c` / 文字 `#2a2a2a` / radius `9999px`（pill）/ padding `16px 24px` / 16px / weight 400（`-r` ウェイト）
- **Secondary CTA**: 背景 `transparent` / 文字 `#5a5a5a` / border `1px solid #c8c8c8` / radius `9999px`（pill）/ padding `12px 16px`（"すべての商品を見る" "すべての記事を見る"）
- **Neutral Pill**: 背景 `#f0f1eb` / 文字 `#5a5a5a` / radius `9999px` / padding `0 32px 0 24px` / height `56px`（"Cartカート" "My pageマイページ"）
- **Small Promo Pill**: 背景 `#fac83c` / 文字 `#5a5a5a` / radius `9999px` / padding `8px 12px`（"商品を見る"）
- **Carousel Nav**: 背景 `transparent` / border `1px solid #2a2a2a`（active）or `1px solid #c8c8c8`（disabled）/ radius `9999px` / size `48px`

### Semantic（アクセント）

- **Notice** (`#f05e88`): ピンクの注意喚起（`--bf-accent-notice`）
- **Error** (`#ff4a24`): エラー表示（`--bf-accent-error`）
- **Swiper Pagination** (`#ff9b00`): カルーセルのアクティブドット（`--swiper-pagination-color`）

### Text

| Token | hex | CSS Custom Property | 役割 |
|-------|-----|---------------------|------|
| Primary | `#2a2a2a` | `--bf-text-primary` | 見出し・本文・CTA テキスト |
| Secondary | `#5a5a5a` | `--bf-text-secondary` | 補助テキスト・body のデフォルト色 |
| Placeholder | `#a8a8a8` | `--bf-text-placeholder` | フォーム未入力テキスト |
| Disabled | `#c8c8c8` | `--bf-text-disabled` | 無効状態のテキスト・アイコン |
| Inverse | `#ffffff` | `--bf-text-inverse` | ヒーロー内白文字・ナビ白文字 |
| Button Disabled FG | `#5a5a5a` | `--bf-button-primary-fg-disabled` | 無効ボタンの文字色 |

### Surface

| Token | hex | CSS Custom Property | 役割 |
|-------|-----|---------------------|------|
| Base | `#ffffff` | `--bf-surface-base` | ページ背景・カード背景 |
| Neutral | `#f0f1eb` | `--bf-surface-neutral` | ニュートラルピル・セクション背景（ウォームグリーン寄り） |
| Brand | `#fac83c` | `--bf-surface-brand` | CTA・フッター・バッジの背景 |
| Inverse | `#2a2a2a` | `--bf-surface-inverse` | ダーク面（反転 UI 用） |
| Overlay | `#000000` (60%) | `--bf-surface-overlay` | モーダル・オーバーレイ背景（`#0009`） |
| Hero BG | `#000000` | — | ヒーローセクション全面の黒 |
| Magazine BG | `#fdfdfd` | `--color_bg` | magazine ページの背景（ほぼ白） |

### Divider

| Token | hex | CSS Custom Property | 役割 |
|-------|-----|---------------------|------|
| High | `#2a2a2a` | `--bf-divider-high` | 強い区切り・カルーセルナビの active border |
| Middle | `#c8c8c8` | `--bf-divider-middle` | セカンダリボタンの border・disabled ナビの border |
| Low | `#f0f0f0` | `--bf-divider-low` | 薄い区切り線・アイコンボタンの border |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **mfw-pishiigothicstdn（ピシーゴシック Std N）** を最優先。フォントワークス（Morisawa グループ）の Web フォント
- **2 ウェイト体制**: Regular（`mfw-pishiigothicstdn-r`）と Bold（`mfw-pishiigothicstdn-b`）を **別の font-family 名で切り替える** 設計。CSS の `font-weight` ではなく、`--bf-font-base`（Regular）と `--bf-font-bold`（Bold）の CSS Custom Property で管理
- **フォールバック**: `Hiragino Kaku Gothic ProN`（Apple OS）→ `Hiragino Sans`（新しい Apple OS）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- **magazine ページの例外**: `/magazine` は WordPress ベースで **游ゴシック体** → `Yu Gothic` → `YuGothic` → `Hiragino Kaku Gothic ProN` → `Hiragino Sans` → `Meiryo` → `sans-serif`

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**mfw-pishiigothicstdn の欧文グリフ**を優先
- フォールバックにシステム和文フォントの欧文グリフ
- 純粋な欧文サンセリフ（Helvetica Neue / Inter 等）は font-family に含まれない

### 3.3 font-family 指定

```css
/* 本文・通常テキスト（--bf-font-base） */
font-family: "mfw-pishiigothicstdn-r", "Hiragino Kaku Gothic ProN",
  "Hiragino Sans", sans-serif;

/* 見出し・強調テキスト（--bf-font-bold） */
font-family: "mfw-pishiigothicstdn-b", "Hiragino Kaku Gothic ProN",
  "Hiragino Sans", sans-serif;
```

**フォールバックの考え方**:
- mfw-pishiigothicstdn は Web フォントのため、フォントワークスの配信 JS 経由でのみ利用可能
- `font-weight: 700` ではなく **font-family 自体を `-b` に切り替える**のが BASE FOOD の独自設計。Tailwind の `font-bold` クラスが `--bf-font-bold` を参照するよう設定されている
- フォールバックは最小限（Hiragino 系 → sans-serif のみ）。Noto Sans JP や游ゴシックは含まれない

> **代替フォント注記**: mfw-pishiigothicstdn はフォントワークスの Web フォントライセンスのため、デザインのプレビューや社外資料で再現できない場合がある。代替として **Noto Sans JP**（weight 400 / 700）を使用するとモダンゴシックの印象が近い。**M PLUS 1p** も丸みのある字面で雰囲気が似る（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-21 取得）。BASE FOOD は `font-weight` ではなく font-family で太さを制御するため、Weight 列は「実際に適用される太さ」を記載

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Display | pishiigothicstdn-b | 48px | **700** | 72px (x1.5) | normal | `#2a2a2a` | "かんたん、おいしい、からだにいい" フッター大見出し |
| Hero Span | pishiigothicstdn-b | 20px | 700 | 36px (x1.8) | normal | `#ffffff` | "調理不要で" 等のヒーロー内テキスト |
| Section H2 | pishiigothicstdn-b | 22px | 700 | 32px (x1.45) | normal | `#2a2a2a` | "Product" 等のセクション見出し |
| Sub Body | pishiigothicstdn-b | 18px | 700 | 24px (x1.33) | normal | `#2a2a2a` | "Convenient, Delicious, and Healthy" |
| Nav Link | pishiigothicstdn-b | 14px | 700 | 20px (x1.43) | normal | `#ffffff` | "商品一覧" "スタートセット" |
| Registered Mark | pishiigothicstdn-b | 14px | 700 | 20px (x1.43) | normal | `#2a2a2a` | "®︎" |
| Body | pishiigothicstdn-r | 16px | 400 | 24px (x**1.5**) | normal | `#5a5a5a` | 本文デフォルト |
| CTA Text | pishiigothicstdn-r | 16px | 400 | 24px (x1.5) | normal | `#5a5a5a` | "BASE FOODを始める" "すべての商品を見る" |
| Neutral Pill | pishiigothicstdn-r | 16px | 400 | 24px (x1.5) | normal | `#5a5a5a` | "Cartカート" "My pageマイページ" |

### デザイントークン（CSS Custom Properties）

```css
/* Font Size Scale */
--bf-font-size-10: 0.625rem;   /* 10px */
--bf-font-size-11: 0.6875rem;  /* 11px */
--bf-font-size-12: 0.75rem;    /* 12px */
--bf-font-size-14: 0.875rem;   /* 14px */
--bf-font-size-16: 1rem;       /* 16px — 本文基準 */
--bf-font-size-18: 1.125rem;   /* 18px */
--bf-font-size-20: 1.25rem;    /* 20px */
--bf-font-size-22: 1.375rem;   /* 22px */
--bf-font-size-24: 1.5rem;     /* 24px */
--bf-font-size-28: 1.75rem;    /* 28px */
--bf-font-size-32: 2rem;       /* 32px */
--bf-font-size-40: 2.5rem;     /* 40px */
--bf-font-size-48: 3rem;       /* 48px */
--bf-font-size-60: 3.75rem;    /* 60px */

/* Line Height Scale */
--bf-line-height-12: 0.75rem;   /* 12px */
--bf-line-height-14: 0.875rem;  /* 14px */
--bf-line-height-16: 1rem;      /* 16px */
--bf-line-height-20: 1.25rem;   /* 20px */
--bf-line-height-24: 1.5rem;    /* 24px */
--bf-line-height-28: 1.75rem;   /* 28px */
--bf-line-height-32: 2rem;      /* 32px */
--bf-line-height-36: 2.25rem;   /* 36px */
--bf-line-height-40: 2.5rem;    /* 40px */
--bf-line-height-44: 2.75rem;   /* 44px */
--bf-line-height-48: 3rem;      /* 48px */
--bf-line-height-56: 3.5rem;    /* 56px */
--bf-line-height-64: 4rem;      /* 64px */
--bf-line-height-72: 4.5rem;    /* 72px */
--bf-line-height-88: 5.5rem;    /* 88px */
```

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (16px)**: `1.5`（24px / 16px）-- D2C サイトとして標準的
- **見出し (48px)**: `1.5`（72px / 48px）-- 見出しにしては広め。余白感を重視
- **セクション見出し (22px)**: `1.45`（32px / 22px）
- **サブ本文 (18px)**: `1.33`（24px / 18px）
- **ナビリンク (14px)**: `1.43`（20px / 14px）
- **ヒーロースパン (20px)**: `1.8`（36px / 20px）-- ヒーロー内は特に広い

**字間 (letter-spacing)** -- 実測:
- **全要素**: `normal`（0）-- すべての計測ポイントで letter-spacing は normal
- palt も未使用。字間の手動調整は行わず、フォントのデフォルトメトリクスに委ねる方針

**ガイドライン**:
- BASE FOOD は letter-spacing を一切カスタマイズしない。フォントのデフォルトメトリクスで統一
- line-height は本文 1.5、見出し 1.33〜1.5 と、見出しを過度にタイトにしないゆったり設計

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- ピル系（"Cartカート"）は `white-space: nowrap`
- ヒーロー内テキストは flex レイアウトで自然に折り返し

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` / `halt` の明示的有効化は確認されなかった
- mfw-pishiigothicstdn のデフォルトメトリクスに任せる方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ブランドイエローピル）** -- "BASE FOODを始める"
- Background: `#fac83c`（`--bf-button-primary-bg`）
- Text: `#2a2a2a`（`--bf-button-primary-fg`）— 暗色テキスト on 黄色背景
- Padding: `16px 24px`
- Border Radius: `9999px`（完全ピル）
- Font: pishiigothicstdn-r, 16px, weight 400
- Border: none
- Hover BG: `orange`（`--bf-button-primary-bg-hover`）
- Active BG: `#ea8900`（`--bf-button-primary-bg-active`）
- Disabled: BG `#ffe89f` / Text `#5a5a5a`

**Secondary CTA（白ピル＋ボーダー）** -- "すべての商品を見る" "すべての記事を見る"
- Background: `transparent`
- Text: `#5a5a5a`
- Border: `1px solid #c8c8c8`（`--bf-divider-middle`）
- Padding: `12px 16px`
- Border Radius: `9999px`（完全ピル）
- Font: pishiigothicstdn-r, 16px, weight 400
- Hover BG: `#f0f1eb`（`--bf-surface-neutral`）

**Neutral Pill** -- "Cartカート" "My pageマイページ"
- Background: `#f0f1eb`（`--bf-surface-neutral`）
- Text: `#5a5a5a`
- Padding: `0 32px 0 24px`
- Height: `56px`（`h-14`）
- Border Radius: `9999px`（完全ピル）
- Font: pishiigothicstdn-r, 16px, weight 400
- Border: none

**Small Promo Pill** -- "商品を見る"（商品カード上の小 CTA）
- Background: `#fac83c`（`--bf-surface-brand`）
- Text: `#5a5a5a`
- Padding: `8px 12px`
- Border Radius: `9999px`（完全ピル）
- Font: pishiigothicstdn-r, 16px, weight 400

**Carousel Nav Button**（矢印ナビ）
- Background: `transparent`
- Border: `1px solid #2a2a2a`（active） / `1px solid #c8c8c8`（disabled）
- Size: `48px`（`size-12`）
- Border Radius: `9999px`（丸）
- Text: `#2a2a2a`（active） / `#c8c8c8`（disabled）
- Hover BG: `#f0f0f0`（`--bf-divider-low`）

**Close / Overlay Button**
- Background: `#ffffff`（`--bf-surface-base`）
- Border: `1px solid #c8c8c8`（`--bf-divider-middle`）
- Size: `56px`（`size-14`）
- Border Radius: `9999px`
- Position: `fixed right-16px top-16px z-10`
- Backdrop Filter: blur

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #c8c8c8`（`--bf-divider-middle`）
- Border (focus): `1px solid #2a2a2a`（`--bf-divider-high`）
- Border (error): `1px solid #ff4a24`（`--bf-accent-error`）
- Border Radius: `8px`
- Padding: `12px 16px`
- Font: pishiigothicstdn-r, 16px, weight 400
- Placeholder Color: `#a8a8a8`（`--bf-text-placeholder`）
- Height: `48px`

### Cards / Surfaces

- 商品カード: `overflow: hidden` + 画像（`aspect-ratio: 4/5`）+ テキスト、border なし、shadow なし
- ニュートラル面: `#f0f1eb`（`--bf-surface-neutral`）
- 区切り付きカード: `border-top: 1px solid #f0f0f0`（`--bf-divider-low`）

### Header

- Background: `transparent`（ヒーロー上ではスクロール前は透明、白文字）
- Text: `#ffffff`（ヒーロー上）
- Position: `fixed top-0 left-0 z-[99] w-full`
- Transition: `transition-all duration-300 ease-in-out`
- ナビリンク: pishiigothicstdn-b, 14px, weight 700, `px-4`, `whitespace-nowrap`

### Footer

- Background: `#fac83c`（`--bf-surface-brand`）— ブランドイエロー全面
- Text: `#5a5a5a`（`--bf-text-secondary`）— 本文
- Heading: `#2a2a2a`（`--bf-text-primary`）— 見出し "かんたん、おいしい、からだにいい。"
- Padding: desktop `120px 80px 80px` / mobile `80px 24px 40px`

### Magazine カテゴリバッジ（/magazine ページ）

- Background: `#fac83c`
- Text: `#ffffff`
- Padding: `0 8px`
- Border Radius: `16px`
- Font: 游ゴシック体, 11px, weight 500

---

## 5. Layout Principles

### Spacing Scale（`--bf-*` トークンベース）

| Token | CSS Custom Property | Value | 用途 |
|-------|---------------------|-------|------|
| 2 | `--bf-spacing-2` | 2px | 最小ギャップ |
| 4 | — | 4px | アイコンと文字の間（`gap-bf-2`） |
| 8 | `--bf-spacing-8` | 8px | ピル内の小ギャップ（`gap-bf-8`）、Promo Pill の py |
| 12 | — | 12px | セカンダリ CTA の py |
| 16 | `--bf-spacing-16` | 16px | CTA の py、モバイル横余白（`right-bf-16`） |
| 24 | `--bf-spacing-24` | 24px | CTA の px、Neutral Pill の pl、モバイルフッター px |
| 32 | `--bf-spacing-32` | 32px | Neutral Pill の pr |
| 40 | `--bf-spacing-40` | 40px | モバイルフッター pb |
| 80 | `--bf-spacing-80` | 80px | デスクトップフッター px / pb / モバイルフッター pt |
| 120 | `--bf-spacing-120` | 120px | デスクトップフッター pt |

### Container

- Max Width: 制約なし（フルブリード設計）。コンテンツはセクションごとに `max-w-*` で制御
- Padding (horizontal): mobile `16〜24px` / desktop `80px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | ヒーローセクション・ヘッダー |
| Small | 8px | 推奨: 入力欄・小カード |
| Medium | 16px | magazine カテゴリバッジ |
| Pill | 9999px | CTA・ナビピル・カルーセルナビ・閉じるボタン — **ほぼ全てのインタラクティブ要素** |

### Grid

- フルブリードレイアウト中心（Flexbox ベース）
- 商品カルーセル: Swiper.js による横スクロール
- フッターリンク: Flex カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | CTA・カード・ヒーロー・フッター（基本フラット） |
| 1 | `0 2px 4px rgba(0,0,0,0.05), 0 4px 4px -4px rgba(0,0,0,0.1)` | magazine のタブボタン（"人気記事" 等） |
| 2 | `0 1px 4px rgba(0,0,0,0.12)` | magazine のヘッダー |
| Overlay | — | `--bf-surface-overlay: #0009`（モーダル背景用） |

- 実測ではメインサイト（basefood.co.jp）はほぼ全要素 `box-shadow: none`
- 立体感は**ブランドイエロー面** `#fac83c`、**ニュートラル面** `#f0f1eb`、**黒ヒーロー** `#000000` のコントラストで表現
- 閉じるボタンに `backdrop-filter: blur` を使用し、半透明の浮遊感を演出

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **mfw-pishiigothicstdn-r / -b** を最優先、フォールバックは `Hiragino Kaku Gothic ProN` → `Hiragino Sans` → `sans-serif`
- 太字は **font-family を `-b` に切り替える**（`font-weight: 700` ではなく `--bf-font-bold` を使う）
- 主要 CTA は **`#fac83c` のイエローピル + `#2a2a2a` の暗色テキスト**
- セカンダリ CTA は **`transparent` + `1px solid #c8c8c8` のピル**。ホバーで `#f0f1eb` に変わる
- テキストカラーは **`#2a2a2a`（primary）と `#5a5a5a`（secondary）**の 2 階層で構成
- ニュートラル面は **`#f0f1eb`**（ウォームグリーン寄り）を使い、冷たい灰色は避ける
- letter-spacing は **`normal`（0）** を維持。フォントのデフォルトメトリクスに委ねる
- ピル形状（`border-radius: 9999px`）をすべてのボタン・バッジに適用する
- ヒーローセクションは **黒背景 + 白文字**で没入感を出す
- フッターは **`#fac83c` 全面塗り**でブランドの余韻を残す

### Don't（禁止）

- CTA に **角張った直角ボタン**（border-radius 0）や **小角丸（4〜8px）** を使わない — すべてピル `9999px`
- テキストに **純黒 `#000000`** を使わない — BASE FOOD のテキストは `#2a2a2a`（ソフトブラック）
- **`font-weight: 700` だけで太字にしない** — 必ず font-family を `-b` に切り替える（フォールバック時のみ weight で太字化）
- letter-spacing を **手動で追加しない**（`0.02em` 等）。BASE FOOD は字間ゼロが基本
- ニュートラルサーフェスに **冷たいグレー**（`#f3f4f6`、`#e5e7eb` 等の青みグレー）を使わない — `#f0f1eb` のウォームトーンを維持
- ブランドイエロー `#fac83c` の上に **白文字を置かない** — イエロー上のテキストは `#2a2a2a`（暗色）
- magazine ページのスタイル（游ゴシック体）をメインサイトに **混在させない**

---

## 8. Responsive Behavior

### Breakpoints（Tailwind 互換）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ（ナビの表示切替閾値。`hidden lg:flex` パターン） |
| `xl` | 1280px | 広いデスクトップ |

実装上、`lg:` プレフィックスがナビの表示／非表示の分岐点。`max-lg:` でモバイル専用スタイルを適用。

### モバイル時の調整

- フッター見出し（48px）は `hidden lg:block` — モバイルでは非表示
- フッターサブ見出し: desktop 18px → mobile 16px（`max-lg:text-[var(--bf-font-size-16)]`）
- 商品カード: desktop `aspect-auto lg:flex-1 lg:h-dvh` → mobile `aspect-[4/5]`
- Neutral Pill: desktop `lg:w-40 lg:flex-none` → mobile `flex-1`
- フッター padding: desktop `120px 80px 80px` → mobile `80px 24px 40px`
- ナビ: デスクトップは横並びリンク、モバイルはハンバーガーメニュー

### タッチターゲット

- 主要 CTA: 高さ約 56px（padding 16px + 24px line-height = 十分）
- Neutral Pill: 高さ 56px（`h-14`）
- カルーセルナビ: 48px（`size-12`）
- Swiper ナビゲーション: 44px（`--swiper-navigation-size`）
- 閉じるボタン: 56px（`size-14`）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Yellow (CTA / Footer / Badge): #fac83c
Brand Hover: orange (≒ #ffa500)
Brand Active: #ea8900
Brand Disabled BG: #ffe89f
CTA Text on Yellow: #2a2a2a

Text Primary: #2a2a2a
Text Secondary: #5a5a5a
Text Placeholder: #a8a8a8
Text Disabled: #c8c8c8
Text Inverse (white): #ffffff

Surface Base (BG): #ffffff
Surface Neutral: #f0f1eb
Surface Brand: #fac83c
Surface Inverse: #2a2a2a
Hero BG: #000000

Divider High: #2a2a2a
Divider Middle: #c8c8c8
Divider Low: #f0f0f0

Accent Notice: #f05e88
Accent Error: #ff4a24

Font Base: "mfw-pishiigothicstdn-r", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Font Bold: "mfw-pishiigothicstdn-b", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
（mfw-pishiigothicstdn 不在時の代替提案: Noto Sans JP または M PLUS 1p）

Body: 16px / line-height 1.5 / weight 400 / letter-spacing normal / color #5a5a5a
Display: 48px / line-height 1.5 / weight 700 (font-bold) / color #2a2a2a
Section Heading: 22px / line-height 1.45 / weight 700 (font-bold) / color #2a2a2a
Nav: 14px / line-height 1.43 / weight 700 (font-bold) / color #ffffff

Border Radius: 9999px（全 CTA・ピル・ナビボタン）/ 8px（入力欄推奨）
Shadow: 基本 none。階層はブランドイエロー面・ニュートラル面・黒ヒーローで表現
```

### プロンプト例

```
BASE FOOD のデザインに従って、完全栄養食の商品一覧ページを作成してください。
- フォント（通常）: "mfw-pishiigothicstdn-r", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
- フォント（太字）: "mfw-pishiigothicstdn-b", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
- 大見出し: 48px / weight 700（font-bold） / line-height 1.5 / color #2a2a2a
- セクション見出し: 22px / weight 700（font-bold）/ line-height 1.45 / color #2a2a2a
- 本文: 16px / weight 400 / line-height 1.5 / letter-spacing normal / color #5a5a5a
- letter-spacing はすべて normal（フォントのデフォルトに委ねる）
- 主要 CTA: 背景 #fac83c（ブランドイエロー）/ 文字 #2a2a2a / border-radius 9999px / padding 16px 24px
  - hover: 背景 orange / active: #ea8900 / disabled: 背景 #ffe89f, 文字 #5a5a5a
- セカンダリ CTA: 背景 transparent / 文字 #5a5a5a / border 1px solid #c8c8c8 / radius 9999px / padding 12px 16px
  - hover: 背景 #f0f1eb
- ニュートラルピル: 背景 #f0f1eb / 文字 #5a5a5a / radius 9999px / height 56px
- ページ背景: #ffffff（白）
- ニュートラル面: #f0f1eb（ウォームグリーン寄り）
- フッター: 背景 #fac83c 全面塗り
- カード: border なし、shadow なし、overflow hidden
- box-shadow は基本 none。立体感は色面（黄・黒・ニュートラル）で表現
- テキストに純黒 #000000 は使わない（primary は #2a2a2a、secondary は #5a5a5a）
- すべてのボタン・バッジは pill 形状（radius 9999px）
- 冷たいグレー（#f3f4f6 等）は使わない
```
