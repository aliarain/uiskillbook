# DESIGN.md — Pen Online（ペンオンライン）

> Pen Online 公式サイト（https://www.pen-online.jp/）のデザイン仕様書。
> 1998 年創刊、CCCメディアハウス発行のカルチャー・デザイン誌『Pen』のオンライン版。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` × 純黒 `#000000` の **モノクロームエディトリアル**。雑誌ブランドの権威性を、Optima Nova LT Pro と FOT-筑紫ゴシック Pr5 D の有償フォント混植で表現
- **密度**: 雑誌の柱組のように **多段グリッド**で構成。letter-spacing を**意図的に広く取る**ことで雑誌組版の格調を再現
- **キーワード**: モノクローム、Optima Nova LT Pro（欧文）+ FOT-筑紫ゴシック Pr5 D（和文）の混植、letter-spacing 0.04〜0.17em の幅広い字間設計、palt 全面適用、純白・純黒・グレーのみ、塗りつぶさない line-only ボタン
- **特徴**:
  - **欧文は Optima Nova LT Pro 系2種** — Medium（ナビ・本文）と Light（display 大見出し）の使い分け。Optima Nova は人文系サンセリフで、Hermann Zapf 設計の名書体を Akira Kobayashi がリバイバル。**雑誌的な格調を担う書体選定**
  - **和文は FOT-筑紫ゴシック Pr5 D（フォントワークス）** — Pr5 = JIS2004 字形、D = Demi Bold 相当の力強さ。Adobe Fonts のサブスクリプション書体
  - **混植見出し書体 `TsuGoProB-SyntaxNextLTProM`** — 筑紫ゴシック B + Syntax Next M を組み合わせた商用混植エンジン。**24px 記事タイトルで letter-spacing 4.032px (0.168em) という非常に広い字送り**
  - **全要素 weight 400** — Optima Nova の Medium / Light をフォント側で切り替え、CSS の font-weight は 400 で固定
  - **letter-spacing は要素ごとに細かく設計** — 16px本文 0.48px (0.03em) / 24px 大ナビ 0.96px (0.04em) / 24px 記事 4.032px (0.168em)
  - **font-feature-settings: "palt" 全面適用** — 約物の自然なスペース調整で日本語組版を整える
  - **アクセント色なし** — 純白 `#ffffff` × 純黒 `#000000` × 微グレー `#f6f6f6` のみで構成。雑誌の **モノクロ印刷的ミニマリズム**
  - **ナビゲーションのモーダル背景は中明度グレー `#86878d`** — メニュー閉じる/開く時に画面を覆う色
  - **ボタンは2系統** — (1) 白地黒文字に `1px solid #000` の線ボタン（"Buy Now" の販売 CTA）、(2) 黒地白文字の塗り（"ログイン" の機能 CTA）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Pen Black** (`#000000`): 本文・見出し・メインロゴ・ボタン
- **Page White** (`#ffffff`): ページ背景の純白

### Surface（背景）

- **Page Background** (`#ffffff`): 純白
- **Soft Surface** (`#f6f6f6`): 補助面・記事間の境界（rgb(246, 246, 246)）
- **Nav Modal Gray** (`#86878d`): ハンバーガーメニュー開閉時のモーダル面（rgb(134, 135, 141)）
- **Nav Inner Mid** (`#9d9d9d`): ナビ "Series" 等の中明度面（rgb(157, 157, 157)）
- **Nav Inner Dark** (`#6f6f74`): ナビ "Magazine" 等の濃いグレー面（rgb(111, 111, 116)）

### Text / Foreground

- **Text Primary** (`#000000`): 本文・見出し・リンクのすべて
- **Text Inverse** (`#ffffff`): 暗色帯・ナビ展開時の白文字

### Border

- **Button Border** (`#000000`): ボタン・タグの 1px 線

---

## 3. Typography Rules

### 3.1 和文フォント

Pen Online は **FOT-筑紫ゴシック Pr5 D（Fontworks / Adobe Fonts）** を主役書体に据える、有償 WebFont 前提の設計。

- **第1候補（和文）**: FOT-筑紫ゴシック Pr5 D（Adobe Fonts 配信、有償）
- **最終フォールバック**: sans-serif

**注意**: ヒラギノ・游ゴシック・Noto Sans JP のいずれもフォールバックに置かない。**Adobe Fonts が読めない環境では汎用 sans-serif に直行**する潔さ。

#### 筑紫ゴシック Pr5 D の特徴
- **Pr5 = Adobe-Japan1-5 / JIS2004 字形** に対応
- **D = Demi Bold 相当** の重み。一般的な R（Regular）より太い
- 本文用としては **やや太い印象**で、雑誌の力強い見出しに合う

### 3.2 欧文フォント

**Optima Nova LT Pro 系2種** を使い分ける、雑誌的編集タイポグラフィ：

- **OptimaNovaLTPro-Medium** — ナビ・タグ・メタ情報・小見出し
- **OptimaNovaLTPro-Light** — 40px 大見出し "Latest" 等の display 用
- **TsuGoProB-SyntaxNextLTProM** — 24px 記事タイトル混植専用（筑紫ゴシック B + Syntax Next M）

Optima Nova LT Pro は Hermann Zapf 設計の Optima を、Akira Kobayashi がリバイバルした人文系サンセリフ。**雑誌の権威性を象徴する書体**。

### 3.3 font-family 指定

実サイトの実測値（用途別）:

```css
/* 和文・本文 */
font-family: "FOT-筑紫ゴシック Pr5 D", sans-serif;

/* 欧文・ナビ・タグ */
font-family: OptimaNovaLTPro-Medium, sans-serif;

/* 大見出し display */
font-family: OptimaNovaLTPro-Light, sans-serif;

/* 記事タイトル混植 */
font-family: TsuGoProB-SyntaxNextLTProM, sans-serif;
```

**フォールバックの考え方**:
- すべて `sans-serif` に直行する **シングルフォール構成**
- ヒラギノ・游ゴシック・Noto を経由しない
- **WebFont 前提**で、読めなければ OS デフォルト sans-serif で潔く落とす

### 3.4 font-size

実測のサイズスケール（PC 1440px ビュー）：

| 用途 | サイズ | フォント | 用例 |
|------|--------|---------|------|
| Display 大見出し | `40px` | Optima Nova Light | "Latest" |
| 記事タイトル h2 | `24px` | TsuGoProB-SyntaxNextLTProM | 「【厚さ10㎜以下の薄型...】」 |
| 大ナビ a | `24px` | Optima Nova Light | "Art&Design" |
| Body / メインロゴ h1 | `16px` | FOT-筑紫ゴシック / Optima Nova | 本文・ナビ |
| 記事メタ・h2 small | `14px` | FOT-筑紫ゴシック | 「サブカテゴリ」 |
| Search / コピーライト | `12〜16px` | Optima Nova Medium | "Search" |

### 3.5 line-height

実測値：

- **Body 16px / メインロゴ**: `16px / 16px` = `1.00`（タイトな組み）
- **大見出し Optima 40px**: `58px / 40px` = `1.45`
- **記事タイトル h2 24px**: `36px / 24px` = `1.50`
- **記事メタ h2 14px**: `22.4px / 14px` = `1.60`
- **ナビ大 24px**: `24px / 24px` = `1.00`
- **ボタン a 16px**: `23px / 16px` = `1.44`

**特徴**: 本文クラスタ（14〜16px）で **line-height 1.4〜1.6**。雑誌の柱組と同等。

### 3.6 letter-spacing

**Pen Online の最大の特徴は letter-spacing の幅広い設計**：

| 要素 | letter-spacing | em 換算 | コメント |
|------|---------------|---------|----------|
| Body / メインロゴ 16px | `normal` | `0` | デフォルト |
| ナビ Login 16px | `0.48px` | `0.03em` | わずかに広げる |
| 大ナビ 24px Light | `0.96px` | `0.04em` | display 用 |
| Pen Meet 16px | `0.48px` | `0.03em` | category-link |
| Pen Membership 16px | `0.64px` | `0.04em` | group-link |
| 大見出し Latest 40px | `1.6px` | `0.04em` | Optima Light |
| 記事メタ h2 14px | `1.568px` | `0.112em` | やや広い |
| **記事タイトル h2 24px** | **`4.032px`** | **`0.168em`** | **非常に広い字送り** |

**`0.168em` の超広字間** が Pen の象徴的な雑誌タイポグラフィ。一般的な日本語サイトでは `0.04〜0.1em` だが、**Pen は記事タイトルだけ `0.168em` まで広げる**。

### 3.7 font-feature-settings

```css
font-feature-settings: "palt";
```

- **palt は body / h2 / a / li / button ほぼ全要素に適用**
- 約物（句読点・括弧）の自然なスペース調整
- 例外: 「ログイン」黒地ボタンは `normal`

### 3.8 ウェイト戦略

Pen Online は **CSS の font-weight 400 で固定**し、フォント側で重みを切り替える。

| 用途 | font-weight | フォント側で表現 |
|------|-------------|----------------|
| すべての要素 | `400` | Optima Nova **Medium** / **Light**、筑紫ゴシック **D**（Demi Bold） |

**雑誌的アプローチ**: フォントファミリー名で重みを表現する **Adobe Fonts/Fontworks 流の運用**。

---

## 4. Component Stylings

### 4.1 ボタン（販売 / 線ボタン）

```css
font-family: OptimaNovaLTPro-Medium, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0.48px;
color: #000000;
background-color: #ffffff;
border: 1px solid #000000;
border-radius: 0;
padding: 2px 10px 1px;
font-feature-settings: "palt";
```

- **白地黒文字 + 1px 黒線** のミニマル販売 CTA
- "Buy Now" 等の購入導線
- 角丸ゼロ
- padding が極小（縦 2px / 横 10px）— **雑誌のタグのように見える**

### 4.2 ボタン（機能 / 黒塗り）

```css
font-family: "FOT-筑紫ゴシック Pr5 D", sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 16px;
letter-spacing: normal;
color: #ffffff;
background-color: #000000;
border: 1px solid #000000;
border-radius: 0;
font-feature-settings: normal;
```

- **黒地白文字** の機能 CTA
- "ログイン" 等のアカウント機能
- letter-spacing は `normal`（広げない）
- font-feature-settings も `normal`

### 4.3 ボタン（登録 / 線ボタン和文）

```css
font-family: "FOT-筑紫ゴシック Pr5 D", sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0.448px;
color: #000000;
background-color: transparent;
border: 1px solid #000000;
border-radius: 0;
font-feature-settings: "palt";
```

- **透明地に 1px 黒線** の和文ボタン
- "新規会員登録" 等のサインアップ導線

### 4.4 ナビゲーション

```css
/* 大ナビカテゴリ "Art&Design" */
font-family: OptimaNovaLTPro-Light, sans-serif;
font-size: 24px;
line-height: 24px;
letter-spacing: 0.96px;
color: #ffffff;  /* 暗色面の上 */

/* サブナビ "Pen Meet" */
font-family: OptimaNovaLTPro-Medium, sans-serif;
font-size: 16px;
letter-spacing: 0.48px;
color: #ffffff;
```

- ハンバーガーメニュー展開時に **Nav Modal Gray `#86878d`** 面の上に白文字
- カテゴリは Optima Light、サブナビは Optima Medium で重みを変える

### 4.5 記事カード

- 写真 + タイトル + メタ情報の縦配置
- 背景: `#ffffff` または `#f6f6f6`
- 罫線: なし
- 影: なし（box-shadow: none）
- 角丸: `0px`
- **タイトルは 24px / 筑紫ゴシック+Syntax 混植 / letter-spacing 4.032px (0.168em)**

### 4.6 タグ・バッジ

```css
font-family: OptimaNovaLTPro-Medium, sans-serif;
font-size: 11〜12px;
color: #000000;
background-color: transparent;
border: 1px solid #000000;
padding: 2px 8px;
border-radius: 0;
```

- カテゴリタグは **白地に黒線**
- "Buy Now" ボタンと同じスタイル

---

## 5. Layout Principles

- **コンテナ最大幅**: 1280〜1440px
- **グリッド**: 記事は 3 列〜2 列（PC）
- **セクション間余白**: 60〜80px
- 見出しは**左揃え**が基本（雑誌の柱組）
- **記事タイトルは 24px / 筑紫+Syntax 混植**で組み、和文・欧文混在の文字列でも一貫した表情を保つ

---

## 6. Depth & Elevation

- **影は使わない**（box-shadow: none）
- 階層は **面色 `#ffffff` → `#f6f6f6` → `#86878d` → `#000`** の段階で表現
- ホバー状態は色の反転（白地→黒塗り、黒線→太線）
- 角丸は使わない（`border-radius: 0`）

---

## 7. Do's and Don'ts

### ✅ Do
- **欧文は Optima Nova LT Pro / 和文は FOT-筑紫ゴシック Pr5 D** の有償フォント混植
- 記事タイトルには **TsuGoProB-SyntaxNextLTProM** の混植エンジンを使う
- letter-spacing は **要素ごとに細かく設計**（0.03〜0.168em）
- **記事タイトル 24px だけ letter-spacing 4.032px (0.168em)** で雑誌的字送り
- 全要素の CSS font-weight は **400 で固定**（重みはフォント側で表現）
- **palt を全面適用**して約物のスペースを整える
- ボタンは **白地に 1px 黒線**（販売）か **黒地に白文字**（機能）の二択
- 角丸ゼロを徹底する

### ❌ Don't
- ヒラギノ・游ゴシック・Noto Sans JP をフォールバックに置かない（sans-serif 直行）
- font-weight を 600 や 700 にしない（フォント側で重みを表現）
- 記事タイトルの letter-spacing を `normal` にしない（**0.168em が雑誌の格調**）
- アクセントカラー（赤・青等）を使わない（モノクロームを保つ）
- 角丸を入れない（`border-radius: 0`）
- ボタンを大きな padding で組まない（雑誌タグのように小さく）

---

## 8. Responsive Behavior

- **PC 1440px** をベース幅とする
- **タブレット（〜1024px）**: 3 列 → 2 列、ナビをハンバーガー化
- **モバイル（〜768px）**: 1 列、本文を 14px に微縮小
- letter-spacing は em 換算なので全ブレークポイントで維持
- 記事タイトル 24px / 4.032px は維持（モバイルでも雑誌感を保つ）

---

## 9. Agent Prompt Guide

> AI エージェントに Pen Online 風 UI を生成させる際のプロンプト。

```
Generate a Japanese editorial / culture magazine UI in the Pen Online visual style.

Visual:
- Pure white background (#ffffff) with pure black text (#000000)
- Monochrome only — NO accent colors
- Soft surface #f6f6f6 for subtle separation
- Nav modal background gray #86878d (hamburger expand state)
- Editorial magazine layout — column-based, multi-tier grids
- No shadows, no rounded corners, no fills (except black-on-white CTAs)

Typography:
- 和文: "FOT-筑紫ゴシック Pr5 D", sans-serif (Adobe Fonts subscription, no Hiragino/Yu Gothic fallback)
- 欧文 nav/body: OptimaNovaLTPro-Medium, sans-serif
- 欧文 display: OptimaNovaLTPro-Light, sans-serif (40px hero "Latest" etc)
- 記事タイトル: TsuGoProB-SyntaxNextLTProM, sans-serif (筑紫 Gothic + Syntax Next mix engine)
- ALL CSS font-weight: 400 (weight expressed by font name: Medium/Light/Demi)
- Apply font-feature-settings: "palt" globally

letter-spacing scale (the SIGNATURE of Pen):
- Body 16px: normal (0)
- Nav small 16px: 0.48px (0.03em)
- Nav main 24px Light: 0.96px (0.04em)
- Display 40px Optima Light: 1.6px (0.04em)
- Article meta 14px: 1.568px (0.112em)
- ARTICLE TITLE 24px: 4.032px (0.168em) — extreme wide spacing, the magazine signature
- Pen registration link 16px: 0.448px (0.028em)

Components:
- Buy Now button: white bg, 1px solid #000, color #000, padding 2px 10px 1px (small magazine tag)
- Login button: black bg #000, white text, font-feature normal, no letter-spacing
- 新規会員登録: transparent bg, 1px solid #000, color #000, palt on
- Article cards: photo + 24px wide-spacing title + 14px meta, no shadow, no border, no radius
- Nav modal: bg #86878d, white text, OptimaNova for English, 筑紫 for Japanese

Color Strategy:
- Brand: pure black + pure white only
- Surfaces: #ffffff / #f6f6f6 / #86878d (modal) / #000
- NEVER use accent colors — monochrome editorial discipline

Avoid:
- Color accents (red/blue/orange) — Pen is strictly monochrome
- font-weight: 600/700 (use 400 always; weight comes from font name)
- Hiragino, Yu Gothic, Noto fallback (single-fall to generic sans-serif)
- Removing the 0.168em title letter-spacing (it's the magazine voice)
- Rounded corners (radius 0 everywhere)
- Box shadows / elevation effects
- Big buttons (Pen buttons are small, magazine-tag sized)
```
