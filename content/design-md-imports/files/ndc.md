# DESIGN.md — 日本デザインセンター (Nippon Design Center / NDC)

> 日本デザインセンター（https://www.ndc.co.jp/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1959年創業、亀倉雄策・原弘・田中一光らが設立した日本を代表するデザイン会社の公式サイト。「美意識のある社会」を掲げ、3言語（日本語・英語・中国語）対応の極めて精緻な可変フォントシステムを構築。**コンテンツ第一・余白第一**の現代的なエディトリアル設計
- **密度**: コンテンツ最大幅 93.75rem (1500px)、サイドパディング 6rem (96px)、12カラムグリッド + 2remギャップ。**変則的でないシステマティックな組み方**
- **キーワード**: エディトリアル、可変フォント、3言語対応、明朝×サンセリフの混在、超精緻、デザイン会社の矜持
- **特徴**: フォントウェイトを 340 / 450 / 520 という**3段階の数値**で制御（Variable Font）。背景は純白ではなくほんのわずかに温かい **#fcfcfc**（pale gray）。日本語明朝に **Source Serif 4 + 筑紫明朝**、サンセリフに **Acumin + Tazugane Gothic** という重層的な多言語スタック

---

## 2. Color Palette & Roles

NDC は彩度のあるブランドカラーを持たない。すべての色は CSS Custom Properties (`--color-*`) で定義され、テキスト・面・線・エラーの 4 役のみで構成される極めてミニマルな体系。

### Primary（テキスト系）

- **Black / Text** (`#1a1a1a`): 本文・見出しの基調色。純黒 #000000 ではなく、わずかに浮いた黒
- **Gray** (`#6f6f6f`): 二次情報・補足テキスト
- **White** (`#ffffff`): 写真上の白文字、ヘッダーロゴ

### Surface

- **Background** (`#fcfcfc`): ページ背景。極めて淡いオフホワイト（pale gray）
- **Footer** (`#f5f5f5`): フッター背景。一段濃いグレー
- **Border** (`#eeeeee`): カード境界・水平線
- **Underline** (`#dddddd`): リンク下線

### Error

- **Error** (`#e61000`): エラーメッセージ
- **Error Background** (`#ffebee`): エラー領域の背景

### CSS Custom Properties

```css
--color-black: #1a1a1a;
--color-white: #fff;
--color-pale-gray: #fcfcfc;
--color-bg-footer: #f5f5f5;
--color-gray: #6f6f6f;
--color-border: #eee;
--color-underline: #ddd;
--color-error: #e61000;
--color-bg-error: #ffebee;
--color-bg: #fcfcfc;
--color-text: #1a1a1a;
```

---

## 3. Typography Rules

### 3.1 和文フォント（明朝）

3 言語向けに **3 段階のサイズ別**で定義。Variable Font で字幅を最適化。

```css
--font-ja: "custom-source-serif-4-variable", "FOT-筑紫明朝 Pr6 R", serif;
--font-large-ja: "custom-source-serif-4-subhead-variable", "FOT-筑紫明朝 Pr6 R", serif;
--font-small-ja: "custom-source-serif-4-small-text-variable", "FOT-筑紫明朝 Pr6 R", serif;
--font-ja-device: YuMincho, "Hiragino Mincho ProN", serif; /* デバイスフォントフォールバック */
```

- **Source Serif 4 (variable)**: Adobe による可変ウェイト・オプティカルサイズ対応の欧文セリフ。NDC はこれを和文用にカスタマイズ
- **FOT-筑紫明朝 Pr6 R**: フォントワークスの和文明朝体。手書き感を抑えた現代的な明朝
- **YuMincho / Hiragino Mincho ProN**: 安全側のデバイスフォント

### 3.2 サンセリフフォント

```css
--font-ja-sans: "custom-acumin-variable", "Helvetica Neue", "TazuganeGothicStdN-Book", sans-serif;
--font-ja-sans-medium: "custom-acumin-variable", "Helvetica Neue", "TazuganeGothicStdN-Regular", sans-serif;
--font-ja-sans-bold: "custom-acumin-variable", "Helvetica Neue", "TazuganeGothicStdN-Medium", sans-serif;
```

- **Acumin (variable)**: Adobe の可変ウェイト Grotesque サンセリフ。Helvetica よりも幾何学的
- **TazuganeGothicStdN**: 字游工房の「タズガネ角ゴシック」。Acumin との混植のために設計された現代的な和文ゴシック
- ウェイト別に **Book / Regular / Medium** の 3 段階を切り替える

### 3.3 ウェイトシステム（Variable Font）

```css
--font-ja-weight: 340;        /* 通常本文 */
--font-ja-weight-medium: 450;  /* 中見出し */
--font-ja-weight-bold: 520;    /* 大見出し・強調 */
--font-en-weight: 360;
--font-en-weight-medium: 450;
--font-en-weight-bold: 520;
```

**慣例的な 400 / 700 ではなく、340 / 450 / 520 という細かい数値を採用**。Variable Font ならではの精緻な制御で、明朝とサンセリフの**視覚的ウェイトを揃える**設計思想。

### 3.4 文字サイズ・ウェイト階層（実測値）

| Role | Size | Family | Weight | Line Height | Letter Spacing |
|------|------|--------|--------|-------------|----------------|
| Body | 16.87px | Source Serif 4 (jp) | 340 | 1.8 (30.36px) | normal |
| Hero Title (display) | 75.9px | Acumin (sans) | 340 | 1.8 (136.62px) | -0.01em |
| Hero Subtitle | 33.73px | Acumin (sans) | 520 | 1.65 (55.66px) | 0.025em |
| Hero CTA Title | 33.73px | Acumin (sans) | 520 | 1.8 (60.72px) | 0.03em |
| Section Title (h2) | 25.30px | Acumin (sans) | 520 | 1.6 (40.48px) | 0.025em |
| Body Lead | 21.08px | Acumin (sans) | 520 | 1.8 (37.95px) | 0.03em |
| Topics Tag | 14.76px | Acumin (sans) | 520 | 1.8 (26.57px) | normal |
| News List | 13.70px | Acumin (sans) | 340 | 1.8 (24.67px) | normal |
| Small Text | 14.76px | Source Serif 4 small | 340 | 1.8 (26.57px) | normal |
| Cookie CTA | 14.76px | Acumin (sans) | 340 | 1.0 (14.76px) | normal |
| Language Selector | 16.87px | Acumin (sans) | 450 | 1.8 (30.36px) | normal |

**注目点**:
- 大見出しは**サンセリフ Acumin**、本文は**明朝 Source Serif 4** という二刀流
- 数値はすべて非整数（16.87 / 14.76 / 13.70）— 1rem = 16px ベースの相対サイズ計算で生まれる値
- 大型タイトル（75.9px）は letter-spacing を **-0.01em** とわずかに詰める（display 用途）
- 中型タイトル（21〜34px）は **+0.025〜0.03em** と開ける（読みやすさ重視）

### 3.5 行間・字間

- **本文**: `line-height: 1.8`（30.36px / 16.87px）— 日本語編集物の標準
- **見出し（大）**: `line-height: 1.6〜1.8` — 詰めすぎず開けすぎず
- **大型 display**: `line-height: 1.8` を維持しつつ `letter-spacing: -0.01em` で字を寄せる

### 3.6 OpenType 機能

```css
font-feature-settings: "chws";
```

- **chws** (Contextual Half-Width Spacing): 約物の半角詰め。日本語組版で記号類を自然に詰める機能
- **palt は使用しない** — chws のみで字詰めを最小限に行う、控えめなアプローチ

### 3.7 多言語対応

3 言語ごとに完全に独立したフォントスタックを定義。

```css
--font-cn: "custom-source-serif-4-variable", "Songti SC", "STSong", "SimSun", serif;
--font-cn-sans: "custom-acumin-variable", "SF Pro SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
```

中国語の場合、ウェイト基準も独立して定義（`--font-cn-weight: 360, medium 480, bold 500`）。**和文・欧文・中文で視覚ウェイトが揃うよう、それぞれ別の数値で制御**。

---

## 4. Component Stylings

### Buttons

**Primary CTA / Cookie Accept（黒）**

- Background: `#1a1a1a`
- Text: `#ffffff`
- Font Family: Acumin Variable, Helvetica Neue, TazuganeGothicStdN-Book
- Font Size: 14.76px
- Font Weight: 340
- Line Height: 1.0 (14.76px)
- Padding: 15.17px 14.76px
- Border Radius: **0.4375rem (7px)** — `--border-radius` グローバルトークン
- Border: 1px solid `#1a1a1a`
- Letter Spacing: normal
- font-feature-settings: `"chws"`

**Secondary CTA / Cookie Decline（白）**

- Background: `#fcfcfc`
- Text: `#1a1a1a`
- Border: 1px solid `#eeeeee`
- 他の値は Primary と同じ

### Inputs / Select

- Border Radius: 0.4375rem (7px)
- Border: 1px solid `#eeeeee`
- Padding: 12px 16px
- Background: `#ffffff`
- Font Size: 16.87px
- Font Family: Acumin Variable

### Cards

- Background: `#ffffff`
- Border Radius: 0.4375rem
- Border: 1px solid `#eeeeee`
- Shadow: なし（フラット）
- Padding: 内側は 24〜32px

### Footer

- Background: `#f5f5f5`
- Border-top: なし（背景色の差で区切る）
- Padding: 64〜96px 上下

---

## 5. Layout Principles

### Container（CSS Custom Properties から実測）

```css
--grid-columns: 12;
--grid-gap: 2rem;        /* 32px */
--padding-side: 6rem;    /* 96px */
--content-limit: 93.75rem; /* 1500px */
--header-height: 4.5rem; /* 72px */
--border-radius: .4375rem; /* 7px */
```

- **最大幅 1500px**: 一般的な 1200px より広い。エディトリアルなボリューム感を出す
- **サイドパディング 96px**: 左右に大きく余白を取る、原研哉的な美意識
- **12カラム + 32px ギャップ**: 標準的だが、組み合わせで余白が大きく見える
- **ヘッダー高 72px**: 細身

### Z-Index

```css
--z-index-global-header: 1000;
--z-index-menu: 2000;
--z-index-loading: 5000;
--z-index-gui: 999999;
```

明確な階層と意図的な「桁の飛び」で、競合を避けながら可読性を保つ。

### Animation Curves

```css
--ease-out-expo: cubic-bezier(.16, 1, .3, 1);
--ease-out-quint: cubic-bezier(.22, 1, .36, 1);
--ease-base-transform: cubic-bezier(.16, 1, .3, 1);
--ease-base-material: ease-out;
--duration-base-transform: 1s;
--duration-base-material: .3s;
```

- 装飾的なトランスフォーム（フェード・移動）には **1秒** の遅めのカーブ（ease-out-expo）
- マテリアル的な状態変化（ホバー）には **0.3秒** の速いイージング

---

## 6. Depth & Elevation

NDC はシャドウを基本的に使わず、**境界線と背景色の差**だけで階層を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。すべての面要素 |
| 1 | （未使用） | – |
| 2 | （未使用） | – |

**ヘッダーは sticky だが、box-shadow は付かない**。スクロール時もフラットなまま。

---

## 7. Do's and Don'ts

### Do（推奨）

- **明朝（Source Serif 4 + 筑紫明朝）と Acumin（サンセリフ）を組み合わせる**。本文 = 明朝、見出し = サンセリフが基本
- フォントウェイトは **340 / 450 / 520** の 3 段階（Variable Font）。400 / 500 / 700 ではない
- 背景は **#fcfcfc**（pale gray）。純白を使わない
- 本文色は **#1a1a1a**（純黒不可）
- **Border Radius: 0.4375rem (7px)** をすべての面要素に適用
- **コンテンツ最大幅 1500px、サイドパディング 96px** を遵守
- font-feature-settings は `"chws"` を指定。palt は使わない
- 大型タイトルは `letter-spacing: -0.01em` でわずかに詰める
- 中型タイトルは `letter-spacing: 0.025〜0.03em` で開ける
- アニメーションは **ease-out-expo / 1秒** を装飾的トランスフォームに使う

### Don't（禁止）

- 純黒 `#000000` を本文や見出しに使わない（#1a1a1a が基準）
- 純白 `#ffffff` 一色のページ背景を作らない（#fcfcfc が標準）
- ウェイトに **400 / 700** を直接指定しない（Variable Font の 340 / 520 を使う）
- 鋭い直角の CTA（`border-radius: 0`）を使わない（7px が標準）
- 鮮やかなブランドカラーを導入しない（無彩色 + #e61000 のみ）
- ドロップシャドウを多用しない（フラット運用）
- 和文・欧文に同じフォントを使わない（明確に別スタックで指定）
- `palt` を使った字詰めを行わない（chws のみ）
- 言語別のウェイト調整を省略しない（jp / en / cn でそれぞれ別ウェイト基準を定義する）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- サイドパディング 96px → 24px に縮小
- グリッド 12カラム → 4カラム
- ヒーロータイトル 75.9px → 36〜40px
- ヘッダーはハンバーガーメニュー化

### タッチターゲット

- CTA は最小 44px の高さ（15.17 + 14.76 + 15.17 = 45.10px）を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: 日本デザインセンター (Nippon Design Center / NDC)
Body Color: #1a1a1a (純黒不可)
Surface: #fcfcfc (pale gray, 純白不可)
Footer Surface: #f5f5f5
Border: #eeeeee
Underline: #dddddd
Error: #e61000
Body Font (jp): "Source Serif 4 Variable", "FOT-筑紫明朝 Pr6 R", serif
Sans Font (jp): "Acumin Variable", "Helvetica Neue", "TazuganeGothicStdN-Book", sans-serif
Body Size: 16.87px (1.054rem)
Body Line Height: 1.8 (30.36px)
Weight Scale: 340 (regular) / 450 (medium) / 520 (bold)
Letter Spacing (display): -0.01em
Letter Spacing (heading): 0.025〜0.03em
font-feature-settings: "chws" (palt 不使用)
Border Radius: 0.4375rem (7px)
Container Max Width: 93.75rem (1500px)
Side Padding: 6rem (96px)
Grid: 12 columns / 2rem gap
Header Height: 4.5rem (72px)
Animation: cubic-bezier(.16, 1, .3, 1) / 1s
```

### プロンプト例

```
日本デザインセンター（NDC）のデザインシステムに従って、新しいプロジェクト紹介ページを作成してください。
- 本文フォント: Source Serif 4 Variable + 筑紫明朝（明朝）
- 見出しフォント: Acumin Variable + Tazugane Gothic（サンセリフ）
- ウェイトは 340 / 450 / 520 の 3 段階のみ使用
- 背景 #fcfcfc、本文色 #1a1a1a、純黒・純白は使わない
- 大見出しは Acumin 33.73px / 520 / line-height 1.65 / letter-spacing 0.025em
- 本文は Source Serif 4 16.87px / 340 / line-height 1.8
- CTA は黒（#1a1a1a）背景 + 白文字、border-radius 7px、padding 15.17px 14.76px
- コンテンツ最大幅 1500px、サイドパディング 96px、12カラムグリッド
- font-feature-settings: "chws"（palt 不使用）
- 装飾的なトランスフォームは cubic-bezier(.16, 1, .3, 1) / 1秒
```

### 字詰め・組版の重要ポイント

1. **明朝（本文） × サンセリフ（見出し） の二刀流**: NDC のシグネチャ。和文サイトでこの構成は珍しい
2. **Variable Font の数値ウェイト**: 340 / 450 / 520 を使い、和文・欧文・中文の視覚ウェイトを精緻に揃える
3. **背景は #fcfcfc**: 純白を避け、わずかに温かみを持たせる
4. **コンテンツ最大幅 1500px + サイドパディング 96px**: 一般的なサイトより広く、余白も大きい
5. **palt ではなく chws**: 約物の半角詰めだけを行う、控えめな組版
6. **3 言語対応のフォントシステム**: jp / en / cn ごとに完全に独立したスタックとウェイト基準を持つ

---

**取得日**: 2026-05-08
**出典**: https://www.ndc.co.jp/, https://www.ndc.co.jp/work/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
