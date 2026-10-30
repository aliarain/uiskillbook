# DESIGN.md — Nissin (日清食品グループ)

> 日清食品グループ 商品情報サイト（https://www.nissin.com/jp/）のデザイン仕様書。
> 実サイトの CSS（Tailwind CSS ベース + CSS Custom Properties デザイントークン）および TypeSquare カスタムフォントに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ダーク基調のイマーシブなフードブランドサイト。CM動画や商品写真を大胆に打ち出し、メディアファーストの体験を提供。ダークチャコール背景に白テキスト・赤アクセントの力強いコントラスト
- **密度**: ゆったりとした大型ビジュアル主体。セクション間の余白は広く、商品・映像コンテンツが主役
- **キーワード**: ダーク、ボールド、イマーシブ、メディアファースト、プレミアムフード
- **特徴**: TypeSquare の「アオトゴシック」カスタムフォントを使用。ページ背景は `#1a1a1a`（ダークチャコール）で、純黒ではなくわずかに温かみを持たせている。ブランドレッド `#ff0000` をアクセントに使用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Nissin Red** (`#ff0000`): ブランドアイデンティティカラー。チップ（WEB限定等）、「もっと見る」リンク、Cookieバナー等に使用

### Semantic（意味的な色）

- **Danger / Accent** (`#ff0000`): エラー、強調、ブランドアクセント（ブランドレッドと兼用）

### Neutral（ニュートラル）

- **Text Primary** (`#ffffff`): 本文テキスト（ダーク背景上）
- **Text Secondary** (`#999999`): 日付、再生回数等の補足テキスト
- **Text Tertiary** (`#7f7f7f`): フッターコピーライト等の最も薄いテキスト
- **Background Primary** (`#1a1a1a`): ページ背景（ダークチャコール）
- **Background Surface** (`#4d4d4d`): ミッドグレーのセクション背景
- **Overlay** (`rgba(0,0,0,0.8)`): モーダル・オーバーレイ
- **Border Default** (`#e5e7eb`): Tailwind 由来のデフォルトボーダー（ライトセクション用）
- **Border Dark** (`rgba(255,255,255,0.2)`): ダーク背景上のボーダー

### Surface（CTA・カード）

- **CTA Surface** (`#ffffff`): 白ボタン（ダーク背景上の主要CTA）
- **CTA Text** (`#000000`): 白ボタン上の黒テキスト
- **Secondary CTA Surface** (`transparent`): 透明ボタン（白ボーダー付き）
- **Secondary CTA Text** (`#ffffff`): 透明ボタン上の白テキスト
- **Card Surface** (`#ffffff`): 商品カード背景
- **Card Text** (`#000000`): 商品カード上のテキスト
- **Chip Surface** (`#ff0000`): チップ・バッジ背景
- **Chip Text** (`#ffffff`): チップ上の白テキスト

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Aoto Gothic Regular（TypeSquare カスタムフォント、weight 400）
- Aoto Gothic Bold（TypeSquare カスタムフォント、weight 700）
- sans-serif（フォールバック）

> **注意**: Aoto Gothic は TypeSquare のドメインライセンスフォント。preview.html では Google Fonts の「Zen Kaku Gothic New」で代替している（Morisawa 系で字形が近い）

### 3.2 欧文フォント

- **サンセリフ**: Aoto Gothic 内の欧文グリフを使用
- **数字（ランキング）**: Helvetica, sans-serif（64px bold、ランキング番号専用）

### 3.3 font-family 指定

```css
/* デフォルト（Regular） — CSS Custom Property */
--font-family-normal: "Aoto Gothic Regular", sans-serif;

/* ボールド — CSS Custom Property */
--font-family-bold: "Aoto Gothic Bold", sans-serif;

/* ランキング数字 */
font-family: Helvetica, sans-serif;
```

**フォールバックの考え方**:
- TypeSquare のカスタムフォントが読み込まれるまでは sans-serif で表示
- `.typesquare_option` クラスでフォントの読み込み状態を管理
- ランキング番号はラテン数字専用に Helvetica を指定

### 3.4 文字サイズ・ウェイト階層

> 以下は CSS Custom Properties のデザイントークンによる定義値

| Role | Size | Weight | Line Height | Letter Spacing | palt | 備考 |
|------|------|--------|-------------|----------------|------|------|
| Display L | 48px | 700 | 140% (×1.4) | 0.01em | なし | ヒーローセクション |
| Display M | 40px | 700 | 140% (×1.4) | 0.01em | なし | 大見出し |
| Display S | 36px | 700 | 140% (×1.4) | 0.01em | なし | 中見出し |
| Headline L | 32px | 700 | 140% (×1.4) | 0.01em | なし | セクション見出し |
| Headline M | 24px | 700 | 140% (×1.4) | 0.01em | なし | サブ見出し |
| Headline S | 20px | 700 | 140% (×1.4) | 0.01em | なし | 小見出し |
| Title L | 20px | 400/700 | 150% (×1.5) | 0.02em | なし | タイトル大 |
| Title M | 18px | 400/700 | 150% (×1.5) | 0.02em | なし | タイトル中 |
| Title S | 16px | 400/700 | 150% (×1.5) | 0.02em | なし | タイトル小 |
| Body L | 18px | 400 | 160% (×1.6) | 0.02em | なし | 本文大 |
| Body M | 16px | 400 | 160% (×1.6) | 0.02em | なし | 本文中（デフォルト） |
| Body S | 14px | 400 | 160% (×1.6) | 0.02em | なし | 本文小 |
| Label L | 16px | 400/700 | 150% (×1.5) | 0.02em | なし | ラベル大 |
| Label M | 14px | 400/700 | 150% (×1.5) | 0.02em | なし | ラベル中 |
| Label S | 12px | 400/700 | 150% (×1.5) | 0.02em | なし | ラベル小 |
| Ranking Number | 64px | 700 | 1.0 | normal | なし | Helvetica, sans-serif |

### 3.5 行間・字間

**行間 (line-height)** — CSS Custom Properties デザイントークン:
- Display / Headline: `140%` (×1.4) — 見出し用、タイトで力強い印象
- Title / Label: `150%` (×1.5) — 標準的なタイトル・ラベル
- Body: `160%` (×1.6) — 本文用、日本語の可読性を確保

**字間 (letter-spacing)** — CSS Custom Properties デザイントークン:
- Display / Headline: `0.01em` — 大きな文字にわずかな字間
- Title / Body / Label: `0.02em` — 本文・ラベルにやや広い字間

**ガイドライン**:
- 全階層で `letter-spacing` がトークンとして定義されており、統一的に適用される
- Display/Headline は `0.01em`、それ以外は `0.02em` の2段階
- 行間は 1.4〜1.6 の範囲で、欧文的なタイトさを保ちつつ日本語の可読性に配慮

### 3.6 禁則処理・改行ルール

```css
/* フォントレンダリング */
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- Tailwind CSS ベースのため、word-break / overflow-wrap はユーティリティクラスで制御

### 3.7 OpenType 機能

```css
/* 全体 — 実測確認 */
font-feature-settings: normal;
```

- **palt は未使用**。全階層で `font-feature-settings: normal` が確認された
- Aoto Gothic 自体がプロポーショナルメトリクスを内包している可能性がある

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（白CTA — ダーク背景上）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 8px 24px
- Border Radius: 16px
- Font Size: 16px
- Font Weight: 700
- Font Family: `--font-family-bold`

**Secondary（透明・白ボーダー）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 8px 24px
- Border Radius: 8px
- Font Weight: 700

**Tab（アクティブ）**
- Background: `#ffffff`
- Text: `#000000`
- Border Radius: 8px
- Font Weight: 700

**Tab（非アクティブ）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Border Radius: 8px
- Font Weight: 700

**Link Button（「もっと見る」）**
- Background: `#ffffff`
- Text: `#ff0000`（ブランドレッド）
- Border Radius: 16px
- Font Weight: 700

### Chips / Badges

- Background: `#ff0000`
- Text: `#ffffff`
- Border Radius: 0px（角丸なし）
- Padding: 0 8px
- Font Size: 12px
- Font Weight: 700

### Inputs

- Background: `#1a1a1a`
- Border: 1px solid `rgba(255,255,255,0.2)`
- Border Radius: 8px
- Padding: 16px 56px（検索アイコン分の左パディング）
- Font Size: 16px
- Color: `#ffffff`

### Cards（商品カード）

- Background: `#ffffff`
- Text: `#000000`
- Border Radius: 16px
- Padding: 0（画像 + テキストの構成）
- Shadow: なし（フラット）
- Hover: 軽微な elevation

---

## 5. Layout Principles

### Spacing Scale — CSS Custom Properties

| Token | Value |
|-------|-------|
| 0 | 0px |
| 1 | 4px |
| 2 | 8px |
| 3 | 16px |
| 4 | 24px |
| 5 | 32px |
| 6 | 40px |
| 7 | 56px |
| 8 | 80px |
| 9 | 120px |

### Container

- Max Width: Tailwind の `max-w-screen-xl`（1280px）相当
- Padding (horizontal): 32px（デスクトップ）/ 16px（モバイル）

### Grid

- 商品カードグリッド: 4カラム（デスクトップ）
- CM動画グリッド: 2〜3カラム
- Gap: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | `0 2px 4px rgba(0,0,0,0.3)` | カード hover |
| 2 | `0 4px 12px rgba(0,0,0,0.4)` | ドロップダウン、ポップオーバー |
| 3 | `0 8px 24px rgba(0,0,0,0.5)` | モーダル、Cookie バナー |

- ダーク背景のため、shadow は高い opacity で定義する必要がある
- 主にフラットデザインで、影よりも色のコントラストで階層を表現

---

## 7. Do's and Don'ts

### Do（推奨）

- ダーク背景 `#1a1a1a` を使い、純黒 `#000000` を避ける（わずかな温かみを保つ）
- テキストは `#ffffff` を基本とし、補助テキストは `#999999` でトーンを落とす
- ブランドレッド `#ff0000` はチップ・バッジ・リンクテキストのアクセントに限定する
- CTA は白ボタン（`#ffffff` bg + `#000000` text）でダーク背景上の視認性を確保する
- 商品カードは白背景 `#ffffff` にし、ダーク背景とのコントラストで商品を際立たせる
- フォントは `--font-family-normal`（400）と `--font-family-bold`（700）の2ウェイトで統一する
- letter-spacing は Display/Headline で `0.01em`、それ以外で `0.02em` を適用する
- スペーシングは CSS Custom Properties のトークン（4px ベースの倍数）に従う

### Don't（禁止）

- ブランドレッド `#ff0000` を広い面積の背景に使わない（チップ・バッジ・小面積のアクセントのみ）
- 純黒 `#000000` をページ背景に使わない（`#1a1a1a` を使う）
- 白テキストに対して `#999999` より薄いグレーを本文に使わない（コントラスト不足）
- Aoto Gothic 以外のフォントをメインに使わない（ブランドの一体感が崩れる）
- 商品カードの角丸を 16px 以外にしない（ブランドのカード radius の統一）
- CTA に角丸 `16px` 以外の値を使わない（Primary CTA のブランド統一）
- チップ・バッジに角丸を付けない（`border-radius: 0` がブランドルール）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは Display を 36px → 24px 程度に縮小
- 商品カードグリッドは 4カラム → 2カラム → 1カラムに変化
- CM動画はスワイプ式のカルーセルに変化

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red: #ff0000（チップ・バッジ・リンク用）
CTA Background: #ffffff（ダーク背景上）
CTA Text: #000000
Text Primary: #ffffff
Text Secondary: #999999
Text Tertiary: #7f7f7f
Background: #1a1a1a
Background Surface: #4d4d4d
Card Background: #ffffff
Card Text: #000000
Chip Background: #ff0000
Chip Text: #ffffff
Border (dark): rgba(255,255,255,0.2)

Font (Normal): "Aoto Gothic Regular", sans-serif
Font (Bold): "Aoto Gothic Bold", sans-serif
Font (Preview代替): "Zen Kaku Gothic New", sans-serif

Display: 48px / weight: 700 / line-height: 1.4 / letter-spacing: 0.01em
Headline: 32px / weight: 700 / line-height: 1.4 / letter-spacing: 0.01em
Body: 16px / weight: 400 / line-height: 1.6 / letter-spacing: 0.02em
Label: 14px / weight: 400 / line-height: 1.5 / letter-spacing: 0.02em
Card Radius: 16px
CTA Radius: 16px
Chip Radius: 0px
```

### プロンプト例

```
日清食品グループのデザインに従って、商品一覧ページを作成してください。
- 背景: #1a1a1a（ダークチャコール）
- テキスト: #ffffff
- フォント: "Aoto Gothic Regular", sans-serif（Regular）/ "Aoto Gothic Bold", sans-serif（Bold）
- 商品カード: 白背景 #ffffff、黒テキスト #000000、radius 16px
- CTA: 白ボタン #ffffff bg + #000000 text、radius 16px
- チップ（WEB限定等）: #ff0000 bg + #ffffff text、radius 0
- 補足テキスト: #999999
- 本文: 16px, line-height: 1.6, letter-spacing: 0.02em
- 見出し: 32px, weight: 700, line-height: 1.4, letter-spacing: 0.01em
```
