# DESIGN.md — good design company（グッドデザインカンパニー）

> good design company（https://gooddesigncompany.com/）のデザイン仕様書。
> 水野学が率いる、ブランディング／クリエイティブ・ディレクションの会社。相鉄グループ、中川政七商店、HOTEL THE MITSUI 等のブランディングを手がける。
> 最大の特徴は **純白（#fff）とライトグレー（#f5f5f5）だけのモノクローム極小パレット** に、**本文・見出しまで一貫して明朝体（century-old-style-std）をあてた静謐なエディトリアル組版**。装飾色を一切持たず、works のビジュアルそのものを主役にする。CTA は **白地＋細グレー枠のゴースト系**（塗りつぶしのブランドカラーは持たない）。欧文には広めの字間（letter-spacing 0.08em）をあてる。
> 実サイトの computed style 実測（2026-06-29 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **純白とライトグレーだけ**の徹底したモノクローム。色面・アクセントカラーを一切持たず、文字はすべて **明朝体**。works（手がけたブランドのビジュアル）を主役に据え、UI 自体は限りなく無色透明に引く。"デザイン会社のサイト自身が作例を邪魔しない" という思想
- **good design company について**: 水野学を中心としたブランディング／クリエイティブ・ディレクションの会社。サイトは works を中心とした静かなポートフォリオ。情報を語りすぎず、余白・明朝・グレートーンで品位を作る
- **密度**: 低〜中密度。大きな余白（`--spacing-*` は黄金比的に拡大するトークン）と、グリッド状の works カードで構成。本文 line-height は 1.8 とゆったり
- **キーワード**: モノクローム、純白 #fff、ライトグレー #f5f5f5、明朝体（century-old-style-std）、ゴースト・ボタン、広い余白、エディトリアル、静謐、palt なし
- **特徴**:
  - パレットは **無彩色のみ**。背景は白 #fff（`--color-background-primary`）とライトグレー #f5f5f5（`--color-background-secondary`）。テキストは #141414 を頂点としたグレースケール（25〜950 の 14 段）
  - **本文・見出し・ナビすべて明朝体**（`century-old-style-std` → `MFW-PA1MinchoStdN-Regular` → serif）。ゴシックは太字用途（`Noto Sans JP`）に限定
  - CTA は **白地＋細いグレー枠のゴースト・ボタン**（`--color-button-*`）。塗りつぶしのブランドカラーボタンは存在しない。ホバーで地が #f7f7f7 に、枠が #a3a3a3 に変化する控えめな反応
  - 欧文は **letter-spacing 0.08em（本文）/ 0.04em（見出し）** とやや広めに開け、端正に見せる。`palt` は使わない（全要素 `font-feature-settings: normal`）
  - 角丸は基本 4px（`--border-radius`）、丸ボタン用に 9999px（`--border-radius-max`）も用意

---

## 2. Color Palette & Roles

> 実サイトの computed style と CSS Custom Properties 実測値。装飾色を持たない無彩色パレット。すべて hex 表記。

### Core（背景・面）

- **Background Primary (White)** (`#ffffff`): ページ・ヘッダー・カードの基本地（`--color-background-primary` / `--color-white`）
- **Background Secondary (Light Gray)** (`#f5f5f5`): ヒーロー帯・セクション面（`--color-background-secondary` / `--color-gray-100`）。サイトで最も広く見える面色
- **Divider** (`#e5e5e5`): 区切り線・ボーダー（`--color-divider` / `--color-gray-200`）

### Grayscale（グレースケール — 全14段）

| Token | hex | 用途 |
|-------|-----|------|
| `--color-gray-25` | `#fcfcfc` | ほぼ白の面 |
| `--color-gray-50` | `#f7f7f7` | ボタンホバー地（`--color-button-background-hover`） |
| `--color-gray-100` | `#f5f5f5` | セクション面（= Background Secondary） |
| `--color-gray-200` | `#e5e5e5` | 区切り・サブテキスト（`--color-text-subtle`） |
| `--color-gray-300` | `#d6d6d6` | ボタン枠・リンク下線（`--color-button-border` / `--color-text-link-underline`） |
| `--color-gray-400` | `#a3a3a3` | ボタンホバー枠・透明ボタン文字（`--color-button-border-hover` / `--color-button-text-transparent`） |
| `--color-gray-500` | `#737373` | 補助テキスト |
| `--color-gray-600` | `#525252` | 補助テキスト（濃） |
| `--color-gray-700` | `#424242` | — |
| `--color-gray-800` | `#292929` | — |
| `--color-gray-900` | `#141414` | 本文・見出し（`--color-text-primary`） |
| `--color-gray-950` | `#0f0f0f` | 最深部 |
| `--color-black` | `#000000` | （トークン上のみ。本文には gray-900 を使う） |

### Text

- **Text Primary** (`#141414`): 本文・見出し・ナビの基本テキスト（`--color-text-primary` = gray-900）。純黒 #000 ではなくわずかに墨を抜いた #141414 を使う
- **Text Subtle** (`#e5e5e5`): 極薄のサブテキスト（`--color-text-subtle`）
- **Text Muted（補助）** (`#737373` / `#525252`): キャプション・メタ情報（gray-500 / gray-600）
- **Link Underline** (`#d6d6d6`): リンク下線の通常色（`--color-text-link-underline`）。ホバーで #141414 に（`--color-text-link-underline-hover`）

### Semantic

- 専用のセマンティックカラー（Danger / Warning / Success）は **定義されていない**。エラー表示等が必要な場合は、本リポジトリの汎用値（Error `#e34837` 等）を最小限あてるか、グレースケール＋テキストで表現する方針が一貫する

---

## 3. Typography Rules

> 実サイトは本文・見出し・ナビすべてに **明朝体 century-old-style-std**（Adobe Fonts）を使い、太字用途のみ **Noto Sans JP** を併用する。
> century-old-style-std は Adobe Fonts のドメインライセンスのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **明朝体（基本書体）**: century-old-style-std（Adobe Fonts）→ MFW-PA1MinchoStdN-Regular（モリサワ A1明朝系の Web フォント）→ serif。**本文も見出しもこの明朝チェーンが基本**（`--font-family-primary`）
- **ゴシック体（太字用途）**: Noto Sans JP → Noto Sans JP Fallback → sans-serif（`--font-family-bold`）。強調・太字ラベルなど限定的に使う

### 3.2 欧文フォント

- **セリフ**: century-old-style-std がそのまま欧文セリフを兼ねる（A1 系明朝の欧文グリフ）。フォールバックは serif
- **サンセリフ**: Noto Sans JP のラテングリフ（太字用途）
- 専用の欧文ディスプレイ書体・等幅書体は実サイトでは持たない

### 3.3 font-family 指定

```css
/* 基本（本文・見出し・ナビ — 明朝、--font-family-primary） */
font-family: "century-old-style-std", "MFW-PA1MinchoStdN-Regular", serif;

/* 太字用途（--font-family-bold） */
font-family: "Noto Sans JP", "Noto Sans JP Fallback", sans-serif;
```

- **CSS 変数**: `--font-family-primary`（明朝・基本）/ `--font-family-bold`（ゴシック・太字）
- **フォールバックの考え方**: 明朝を全面採用するため、Web フォント（century-old-style-std）→ モリサワ系 Web フォント（MFW-PA1MinchoStdN）→ generic `serif` の順。和文専用フォントを 1 つだけ指定するのではなく、必ず serif で閉じる

**preview.html での代替フォント**:
- century-old-style-std（クラシックなオールドスタイル・セリフ／A1明朝的な和欧混植）→ **Shippori Mincho**（しっぽり明朝。A1 系に近い、ふところがやや狭く品のある明朝。weight 400/500/600）。欧文ディスプレイ感を補うなら見出しに **EB Garamond**（オールドスタイル・セリフ）を併用してもよい
- Noto Sans JP → **Noto Sans JP**（そのまま Google Fonts で利用可。weight 500/700）

### 3.4 文字サイズ・ウェイト階層

> サイズは `clamp()` ベースの流動トークン（`--font-size-*`、基準 `--base-length: clamp(0.625rem, 0.325rem + 0.75vw, 1rem)` ≒ 10–16px）。下表はデスクトップ（1440px）での実測 px。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading (works タイトル) | 明朝 | 18.72px | 400 | 1.5 | normal | works カードのタイトル（h3）。色 #141414 |
| Body | 明朝 | 16px | 400 | 1.8 (24px) | normal | 本文（body 実測 16px / 24px だが本文トークンは lh 1.8） |
| Nav / Header | 明朝 | 16px | 400 | 1.5 | 1.28px (0.08em) | グローバルナビ・ヘッダー（works / news / about / contact / recruit） |
| Nav Item (small) | 明朝 | 14.2px | 400 | 1.0 | 1.28px (≈0.09em) | ナビ個別リンク（流動縮小時） |
| Logo / Link (small) | 明朝 | 14.4px | 400 | 1.0 | 1.28px (≈0.09em) | ロゴ・小リンク |
| Caption (en body) | 明朝 | 12.8px | 400 | 1.5 (19.2px) | 1.024px (0.08em) | 年号など英数キャプション（`.letterSpacing_en__body`） |
| Display (en) | 明朝 | 18.29px | 400 | 1.5 | 1.46px (0.08em) | 作例名の欧文（HOTEL THE MITSUI 等） |
| Icon Button | 明朝 | 32px | 400 | 1.5 | normal | アイコンのみのリンクボタン（色 #a3a3a3） |

- **ウェイトは 400 が圧倒的に基本**。明朝のサイズと余白だけで階層を作り、太字（Noto Sans JP / 500・700）はほぼ使わない
- 文字色は #141414（gray-900）が基本。アイコンボタン等の非主張要素は #a3a3a3（gray-400）
- 行高トークン: `--line-height-ui: 1.5` / `--line-height-heading: 1.5` / `--line-height-body: 1.8`

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（`--line-height-body`）。明朝本文をゆったり組む good design company の核
- **見出し・UI の行間**: 1.5（`--line-height-heading` / `--line-height-ui`）
- **欧文本文の字間 (letter-spacing)**: 0.08em（`--letter-spacing-western-body`。実測 1.28px/16px、1.024px/12.8px、1.46px/18.29px すべて 0.08em）
- **欧文見出しの字間**: 0.04em（`--letter-spacing-western-heading`）
- **和文の字間**: normal（明朝のメトリクスをそのまま活かす。`palt` も使わない）

**ガイドライン**:
- 和文明朝本文は line-height 1.8 で広く、字間は normal（ベタ組み）で端正に
- 欧文・英数だけ letter-spacing 0.08em をあて、ラテン部分を引き締める（`.letterSpacing_en__body` のように欧文限定で適用するのが実サイトの作法）

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 明朝の長文を扱うため、行頭・行末の標準的な禁則を守る
- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は使わない */
```

- **重要**: good design company は `font-feature-settings` を **全要素 normal** にしている（`palt` を使わない）。明朝のフルメトリクス（ベタ組み）をそのまま活かし、字間は欧文だけ letter-spacing で開ける、という方針。TYPICA の "palt グローバル適用" とは正反対なので注意
- 欧文の引き締めは `palt` ではなく **letter-spacing 0.08em** で行う

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

> good design company は **塗りつぶしのブランドカラーボタンを持たない**。白地＋細グレー枠のゴースト・ボタンが基本（`--color-button-*` トークン）。

**Primary（白地・グレー枠ゴースト）** — `.Button_root`
- Background: `#ffffff`（`--color-button-background`）
- Text: `#141414`（`--color-button-text`）
- Border: 1px solid `#d6d6d6`（`--color-button-border`）
- Hover: Background `#f7f7f7`（`--color-button-background-hover`）/ Border `#a3a3a3`（`--color-button-border-hover`）
- Border Radius: `4px`（`--border-radius`）。丸める場合は `9999px`（`--border-radius-max`）
- Font: 明朝 / 16px / 400 / letter-spacing 0.08em（欧文）

**Transparent / Icon（透明・アイコンのみ）** — `.Button_isTransparent` / `.Button_isIconOnly`
- Background: `transparent`
- Text / Icon: `#a3a3a3`（`--color-button-text-transparent` = gray-400）
- Border: なし
- 矢印アイコン等の非主張なナビゲーションに使う（実測サイズ 32px）

**Link（テキストリンク）**
- Text: `#141414`（明朝）
- Underline: 通常 `#d6d6d6`（`--color-text-link-underline`）→ Hover `#141414`（`--color-text-link-underline-hover`）
- 下線の色だけがホバーで濃くなる、控えめなインタラクション

### Inputs

> 実サイトでは入力フォームの抽出データは取れなかった（works 中心のポートフォリオ構成）。下記はトークンからの推定値。

- Background: `#ffffff`（`--color-background-primary`）
- Border: 1px solid `#d6d6d6`（`--color-button-border` / gray-300）
- Border (focus): 1px solid `#141414`（gray-900）＋薄いグレーリング
- Border Radius: `4px`（`--border-radius`）
- Padding: 約 11px 13px
- Font: 明朝（`--font-family-primary`）/ 16px / letter-spacing 0.08em（欧文）
- Label: 16px / 400 / 明朝

### Cards

- Background: `#ffffff`（`--color-background-primary`）
- Border: なし、または 1px solid `#e5e5e5`（`--color-divider`）
- Border Radius: `4px`（`--border-radius`）
- works ビジュアル（画像）を大きく置き、その下に明朝の作例名（h3 / 18.72px / 400）＋年号（英数キャプション 12.8px / ls 0.08em）を添えるエディトリアル構成
- 影は基本持たず、白地と細い区切り線で区切る（Depth セクション参照）

---

## 5. Layout Principles

### Spacing Scale

> `--spacing-*` は `--base-length`（clamp 10–16px）を半分にした単位を、おおむねフィボナッチ的（1,2,3,5,8,13,21,34）に拡大するトークン。下表はデスクトップ（base ≒ 16px → 単位 8px）での目安。

| Token | 係数 | Value（base=16px時） |
|-------|------|----------------------|
| `--spacing-xs` | 0.5 | 4px |
| `--spacing-sm` | 1 | 8px |
| `--spacing-md` | 2 | 16px |
| `--spacing-lg` | 3 | 24px |
| `--spacing-xl` | 5 | 40px |
| `--spacing-2xl` | 8 | 64px |
| `--spacing-3xl` | 13 | 104px |
| `--spacing-4xl` | 21 | 168px |
| `--spacing-5xl` | 34 | 272px |

- フォントサイズも `--font-size-xs`〜`--font-size-3xl` の clamp トークンで定義（base に 8/10〜8/4 を掛ける）
- 横方向のページ余白は `--spacing-padding-inline: 6.19vw`（ヘッダー実測 padding 24px 89px ≈ 6.19vw）

### Container

- Padding (horizontal): `6.19vw`（`--spacing-padding-inline`）。1440px 幅で約 89px
- Max Width: 明示トークンなし。padding-inline で左右を空け、ワイドなエディトリアル・グリッドを取る

### Grid

- Columns: works 一覧はカードグリッド（おおむね 2〜4 カラム、ビューポート幅で可変）
- Gutter: `--spacing-md`〜`--spacing-lg`（16〜24px）
- アスペクト比トークン `--aspect-ratio-silver-landscape: 1.414/1`（白銀比横長）を画像枠に使う

---

## 6. Depth & Elevation

> good design company は影をほぼ使わず、白地・ライトグレー面・細い区切り線で階層を作る。フラットが基本。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全コンポーネントの基本。白地と #e5e5e5 の区切り線で面を分ける |
| 1 | `0 1px 3px rgba(20,20,20,0.06)` | ドロップダウン・ドロワー等、必要な箇所だけ最小限 |
| 2 | `0 8px 24px rgba(20,20,20,0.10)` | モーダル等（実サイトでは稀） |

- 背景レイヤーの自然なフェードには `--linear-gradient-background-primary-to-transparent`（白→透明の多段グラデーション）を使い、画像上部などをなじませる

---

## 7. Do's and Don'ts

### Do（推奨）

- パレットは無彩色のみ（白 #fff / ライトグレー #f5f5f5 / グレースケール）。装飾色を足さない
- 本文も見出しも明朝（century-old-style-std → MFW-PA1MinchoStdN → serif）で組む
- 本文の line-height は 1.8 とゆったり取る
- 欧文・英数だけ letter-spacing 0.08em をあて、和文はベタ組み（normal）にする
- CTA は白地＋細グレー枠のゴースト・ボタン。ホバーは地 #f7f7f7・枠 #a3a3a3 の控えめな変化
- テキスト色は純黒 #000 ではなく #141414（gray-900）を使う
- 広い余白（`--spacing-*` トークン）と works ビジュアルで構成し、UI は静かに引く

### Don't（禁止）

- 装飾色・アクセントカラーを足さない（モノクロームこそ個性）
- 見出しや本文をゴシックで組まない（明朝が基本。ゴシックは太字の限定用途のみ）
- `palt` を有効にしない（実サイトは全要素 normal。引き締めは letter-spacing で行う）
- 塗りつぶしのブランドカラー・ボタンを作らない（ゴースト系が基本）
- 本文に純黒 #000 を使わない（#141414 を使う）
- 行間を詰めすぎない（本文 1.8 を保つ）
- 和文フォントを 1 つだけ指定しない（必ず serif で閉じるチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1 カラム、ナビはドロワー、余白・フォントは clamp で縮小 |
| Tablet | 768–1023px | 2 カラムの works グリッド |
| Desktop | ≥ 1024px | 2〜4 カラムのエディトリアル・グリッド |

- サイズは `clamp()` トークンで連続的にスケールするため、固定ブレークポイントよりも流動的に縮む設計
- 横余白は `6.19vw`（`--spacing-padding-inline`）でビューポートに比例

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- 本文は `--font-size-md`（clamp 10–16px）で、モバイルでも 14px 前後を確保
- ナビ等の英数はモバイルでやや縮むが、letter-spacing 0.08em は維持する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff (Primary) / #f5f5f5 (Secondary)
Text: #141414 (gray-900) / Muted #737373 / Subtle #e5e5e5
Divider / Border: #e5e5e5 (divider) / #d6d6d6 (button border)
基本 Font（本文・見出し・ナビ）: "century-old-style-std", "MFW-PA1MinchoStdN-Regular", serif  /* 代替: "Shippori Mincho" */
太字 Font: "Noto Sans JP", sans-serif
Body Size: 16px / Line Height: 1.8 / 和文 letter-spacing: normal / 欧文 letter-spacing: 0.08em
見出し letter-spacing: 0.04em（欧文）
OpenType: font-feature-settings: normal（palt は使わない）
Button: 白地 #fff ＋ 1px solid #d6d6d6 のゴースト（hover 地 #f7f7f7 / 枠 #a3a3a3）
Radius: 4px (base) / 9999px (max)
余白: フィボナッチ的 spacing トークン、横余白 6.19vw
```

### プロンプト例

```
good design company のデザインシステムに従って、works（実績）一覧ページを作成してください。
- パレットは無彩色のみ: 背景 #ffffff / セクション面 #f5f5f5、テキスト #141414、区切り線 #e5e5e5
- 装飾色・アクセントカラーは一切使わない（モノクローム）
- 本文も見出しもナビも明朝: "century-old-style-std", "MFW-PA1MinchoStdN-Regular", serif（代替 Shippori Mincho）。太字のみ Noto Sans JP
- 本文 line-height 1.8、和文はベタ組み（letter-spacing normal）、欧文・英数だけ letter-spacing 0.08em
- font-feature-settings は normal（palt を使わない）
- CTA は白地＋1px solid #d6d6d6 のゴースト・ボタン（hover で地 #f7f7f7・枠 #a3a3a3）。塗りつぶしのカラーボタンは作らない
- works ビジュアル（画像、アスペクト比 1.414:1）を大きく置き、その下に明朝の作例名と年号を添える
- 広い余白で静かに組み、UI が作例を邪魔しないようにする
```
