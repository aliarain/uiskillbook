# DESIGN.md — ORBIS（オルビス）

> ORBIS（https://www.orbis.co.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ポーラグループの化粧品ブランド。「肌が本来持つ力を引き出す」スキンサイエンスの思想を、温かみのあるナチュラルトーンで表現。純黒を避けたウォームブラウン `#231815` のテキスト、クリームホワイト `#fff7ed` の背景面、コーラル `#ef857d` のアクセントで、清潔感と親しみやすさを両立。装飾を抑えたコマース型レイアウトで、商品カード・カテゴリナビ・プロモーションバナーを効率よく配置する
- **密度**: コマース型の中密度。カテゴリブラウジング・商品グリッド・プロモーションセクションが整然と並ぶ。余白は適度で、SHIRO のようなミニマリズムではなく、ECとしての情報伝達力を確保しつつ温かみを保つバランス
- **キーワード**: スキンサイエンス、ウォームブラウン、クリームホワイト、コーラルアクセント、コマース、ナチュラルトーン
- **特徴**: **ウォームトーンの徹底**が最大の特徴。テキストは純黒ではなく `#231815`（RGB 35,24,21 — 赤みを帯びたダークブラウン）、背景面は `#fff7ed`（暖かいクリーム）、CTAは `#5c5a5a`（ブラウングレー）。クールなモノトーンを完全に排除し、肌の温かみに寄せたカラーパレット。フォントは Open Sans + 游ゴシック体の欧文先行スタック。`font-feature-settings` は normal（palt なし）で、letter-spacing も normal。本文ウェイト 500 がやや珍しい

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

ORBIS のカラーパレットはウォームトーンで統一。ブランドの核となる色は **クリームホワイト #fff7ed**（温かい面色）と **コーラル #ef857d**（アクセント）。CTAには控えめなブラウングレー `#5c5a5a` を使い、商品を主役にする設計。

- **Brand Cream** (`#fff7ed`): ウォームクリーム。セクション背景・カテゴリタグの面色。ページ全体の温かみを決定づけるキーカラー（rgb 255, 247, 237）
- **Brand Coral** (`#ef857d`): コーラル/サーモン。価格ハイライト・バッジ・セール表示のアクセントカラー（rgb 239, 133, 125）
- **CTA Brown-Gray** (`#5c5a5a`): ブラウングレー。プライマリCTA背景・アウトラインボタンのボーダー色。目立ちすぎない控えめなCTA（rgb 92, 90, 90）

### Semantic（意味的な色）

- **Success / Free Shipping** (`#69b35e`): 緑。「送料無料」バッジ等のポジティブ表示（rgb 105, 179, 94）
- **Gold / Premium** (`#9d8735`): ゴールド。会員ステータス・プレミアム表示（rgb 157, 135, 53）
- **Coral Accent** (`#ef857d`): 価格・セール・注意喚起にも兼用

### Tint（淡色面）

カテゴリやプロモーションセクションの背景に使う淡色パレット。

- **Light Blue** (`#e5f0f5`): 水色面（rgb 229, 240, 245）
- **Light Green** (`#ebf6ef`): 薄緑面（rgb 235, 246, 239）
- **Light Pink** (`#f7e8ee`): 薄桃面（rgb 247, 232, 238）
- **Light Yellow-Green** (`#f7f9e1`): 薄黄緑面（rgb 247, 249, 225）

### Neutral（ニュートラル）

- **Text Primary** (`#231815`): 本文テキスト。ウォームブラウン — 純黒ではない（rgb 35, 24, 21）
- **Text on CTA** (`#ffffff`): CTA上の白テキスト
- **Border** (`#e0e0e0`): 区切り線・フィルタボタンの枠
- **Border Tag** (`#cdcdcd`): カテゴリタグの枠
- **Surface** (`#f8f8f8`): ニアホワイト。最頻出の背景色（rgb 248, 248, 248）
- **Surface Footer** (`#fafafa`): フッター背景
- **Background** (`#ffffff`): 純白背景

---

## 3. Typography Rules

### 3.1 和文フォント

ORBIS は **游ゴシック体（YuGothic）** を和文の基本フォントとして使用。Windows の游ゴシック Medium 問題に対応するため、"游ゴシック Medium" / "Yu Gothic Medium" / "YuGothic Medium" の3バリアントを明示指定し、さらにヒラギノ角ゴ Pro W3 → メイリオのフォールバックチェーンを持つ。

- **游ゴシック体** (YuGothic): 和文の基本。macOS 標準搭載
- **游ゴシック Medium** (Yu Gothic Medium): Windows 環境での Regular ウェイト補正
- **ヒラギノ角ゴ Pro W3** (Hiragino Kaku Gothic Pro): macOS フォールバック
- **メイリオ** (Meiryo): Windows フォールバック

> **補足**: ヒラギノは **Pro W3**（ProN ではない）を指定。游ゴシックの Windows Medium 問題に対しては SmartHR のような `@font-face` マッピングではなく、font-family チェーンでの直接指定で対応

### 3.2 欧文フォント

- **Open Sans**: 欧文の基本。Google Fonts で Web フォントとして読み込み。font-family チェーンの先頭に配置され、欧文は游ゴシックの欧文グリフより Open Sans を優先する設計

### 3.3 font-family 指定

```css
/* メインスタック（全テキスト共通） */
font-family: "open sans", 游ゴシック体, YuGothic, "游ゴシック Medium",
  "Yu Gothic Medium", "YuGothic Medium", 游ゴシック, "Yu Gothic",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
  sans-serif;
```

**フォールバックの考え方**:
- **欧文先行型**: Open Sans を先頭に置き、欧文は必ず Open Sans で表示。和文は游ゴシック体にフォールバック
- 游ゴシック系を5バリアント列挙して Windows / macOS 両対応
- ヒラギノ角ゴ → メイリオ の順でさらにフォールバック
- 最後に generic `sans-serif`

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | Open Sans + YuGothic | 20px | 700 | 1.5 (30px) | normal | カテゴリページタイトル |
| Heading 2 (large) | Open Sans + YuGothic | 28px | 700 | 1.0 (28px) | normal | "商品を探す" 等の大見出し。line-height 1.0 のタイト設定 |
| Heading 3 | Open Sans + YuGothic | 18px | 700 | 1.8 (32.4px) | normal | セクション小見出し |
| Body | Open Sans + YuGothic | 14px | 500 | 1.8 (25.2px) | normal | 本文の標準スタイル。**ウェイト 500** に注意 |
| Product Name | Open Sans + YuGothic | 14px | 500 | 1.5 (21px) | normal | 商品カード内の商品名 |
| Small | Open Sans + YuGothic | 13px | 500 | 1.8 (23.4px) | normal | 補足テキスト |
| Nav Badge | Open Sans + YuGothic | 12px | 700 | 1.0 (12px) | normal | ナビゲーション内バッジ |
| Footer | Open Sans + YuGothic | 12px | 500 | 1.0 (12px) | normal | フッターテキスト |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（25.2px / 14px）— 日本語本文に十分なゆとり
- **見出し（大）の行間**: `line-height: 1.0`（28px / 28px）— タイト。大見出し専用
- **見出し（h1）の行間**: `line-height: 1.5`（30px / 20px）— 標準的
- **見出し（h3）の行間**: `line-height: 1.8`（32.4px / 18px）— 本文と同じ
- **本文の字間**: `letter-spacing: normal`（0）— 字詰めなし
- **見出しの字間**: `letter-spacing: normal`（0）— 字詰めなし

**ガイドライン**:
- ORBIS は **letter-spacing を一切使わない**。すべてのテキストが `normal`
- 行間は本文 1.8、大見出し 1.0 の二極分化。1.0 は日本語としてはかなりタイト
- 本文ウェイトが **500**（Regular 400 でも Bold 700 でもない中間値）は珍しい。游ゴシック体のウェイトバリエーションを活かしている

### 3.6 禁則処理・改行ルール

- 特別な設定なし（ブラウザデフォルト）
- ECサイトのため、商品名・価格の折り返しは避ける設計

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt なし */
```

- **palt は適用しない**: ORBIS は和文のプロポーショナル字詰めを使用しない
- letter-spacing normal + palt なし = ベタ組み。ECサイトの情報伝達を優先した選択

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし）**

ORBIS の CTA は**ブラウングレー塗りつぶし**。コスメブランドとしては珍しく、ブランドカラー（クリームやコーラル）ではなくニュートラルな灰色系を CTA に使う。商品写真を引き立てる控えめなアプローチ。

- Background: `#5c5a5a`
- Text: `#ffffff` (weight 700)
- Padding: 0px 10px（コンパクト）
- Border Radius: 0px（シャープ）
- Font Size: 14px
- Font Weight: 内部 span が 700

**Secondary CTA（アウトライン）**

- Background: `#ffffff`
- Text: `#5c5a5a`
- Border: 1px solid `#5c5a5a`
- Padding: 8px 20px
- Border Radius: 0px

**Tag Pill（カテゴリタグ）**

- Background: `#fff7ed`（ブランドクリーム）
- Text: `#231815`
- Border: 1px solid `#cdcdcd`
- Padding: 6px 20px
- Border Radius: **40px**（pill）
- Font Size: 14px

**Filter Button（フィルタ）**

- Background: `#ffffff`
- Text: `#231815`
- Border: 1px solid `#e0e0e0`
- Padding: 8px 10px
- Border Radius: 0px

**Footer Button**

- Background: `#ffffff`
- Text: `#5c5a5a`
- Border: 1px solid `#5c5a5a`
- Padding: 0px 20px
- Border Radius: 0px

**ボタンの考え方**:
- CTA は **#5c5a5a のブラウングレー塗りつぶし**。ブランド色を CTA に使わない珍しい設計
- radius は基本 **0px**（シャープ）。カテゴリタグのみ **40px の pill**
- pill と sharp の二極化。中間の角丸（8px 等）は使わない
- アウトラインボタンは同じ `#5c5a5a` をボーダー色に使用

### Inputs

- Border: 1px solid `#e0e0e0`
- Border (focus): 1px solid `#5c5a5a`（推定 — CTA 色と統一）
- Border Radius: 0px
- Padding: 8px 10px
- Font Size: 14px
- Font Weight: 500

### Cards（商品カード）

- Background: `#ffffff`
- Border Radius: 0px
- Shadow: なし
- Padding: 10px 20px 10px 10px（カテゴリカード実測値）
- 商品写真 + 商品名（14px / 500）+ 価格（14px / 500 or コーラル #ef857d）の構成
- 送料無料バッジ: bg `#69b35e`、会員バッジ: bg `#9d8735`

### Section Backgrounds

- Default: `#ffffff`（白背景）
- Brand Cream: `#fff7ed`（温かいクリーム面）
- Near White: `#f8f8f8`（微灰色面）
- Tint: `#e5f0f5` / `#ebf6ef` / `#f7e8ee` / `#f7f9e1`（カテゴリ別淡色面）
- Footer: `#fafafa`

---

## 5. Layout Principles

### Container

- ECサイト標準のフルワイズ構成
- ヘッダー・プロモバナーは全幅
- 商品グリッド・カテゴリナビは中央寄せ

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 6px | タグ pill 縦 padding |
| S | 8px | フィルタボタン縦 padding、アウトラインボタン縦 padding |
| M | 10px | CTA 横 padding、カード左 padding |
| L | 20px | タグ pill 横 padding、アウトラインボタン横 padding |
| XL | 32px | セクション間余白（推定） |
| XXL | 48px | 大セクション間余白（推定） |

### Grid

- 商品カード: 4カラムグリッド（デスクトップ）
- カテゴリナビ: 横スクロール or グリッド
- モバイルでは 2 カラム → 1 カラムに折り返し

---

## 6. Depth & Elevation

ORBIS はシャドウを控えめに使う。面色の切り替え（白 / クリーム / 淡色 tint）で空間を構成し、深い影は使わない。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（商品カード・ボタン） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ホバー時のカード・ドロップダウン（推定） |
| 2 | `0 2px 8px rgba(0,0,0,0.10)` | モーダル・ポップオーバー（推定） |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は **#231815**（ウォームブラウン）を使う — 純黒 #000000 を避ける
- 背景面には **#fff7ed**（ブランドクリーム）を積極的に使う
- CTA は **#5c5a5a 塗りつぶし + 白テキスト + radius 0px** にする
- カテゴリタグは **pill（radius 40px）+ #fff7ed 背景** にする
- 本文は **14px / 500 / line-height 1.8** にする
- フォントは Open Sans を先頭に、游ゴシック体のフルフォールバックチェーンを指定する
- アクセントカラーは **#ef857d**（コーラル）を価格やバッジに使う
- 淡色 tint（#e5f0f5, #ebf6ef, #f7e8ee, #f7f9e1）でセクションを色分けする
- ウェイトは **500**（本文）と **700**（見出し・CTA内テキスト）を使い分ける

### Don't（禁止）

- テキストに純黒 `#000000` を使わない（`#231815` がブランドトーン）
- CTA にブランドクリーム `#fff7ed` やコーラル `#ef857d` を背景色として使わない（CTA は `#5c5a5a`）
- 中間の角丸（4px〜20px）を使わない（0px シャープか 40px pill の二択）
- `font-feature-settings: "palt"` を適用しない（ORBIS はベタ組み）
- `letter-spacing` を追加しない（すべて normal）
- font-weight 400 を本文に使わない（ORBIS の本文は 500）
- font-weight 300 や 600 の中間ウェイトを使わない（500 と 700 のみ）
- 鮮やかな青や赤のアクセントカラーを使わない（ウォームトーンを保つ）
- 深いシャドウ（box-shadow の spread が大きいもの）を使わない

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- 商品グリッドは 4 カラム → 2 カラム → 1 カラム
- h2（28px）→ 20px 程度に縮小
- ナビゲーションはハンバーガー化
- カテゴリタグは横スクロール
- ウォームクリーム `#fff7ed` の面色はモバイルでも維持（ブランドアイデンティティ）

### タッチターゲット

- CTA ボタンは padding が小さめ（0px 10px）のため、モバイル時はタップ領域拡張が必要
- カテゴリタグ pill は 6px 20px でタッチフレンドリー

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: ORBIS（オルビス）
Origin: ポーラグループ化粧品ブランド
Brand Cream: #fff7ed
Brand Coral: #ef857d
CTA Brown-Gray: #5c5a5a
Text Primary: #231815 (warm brown)
Border: #e0e0e0
Background: #ffffff
Surface: #f8f8f8
Font: "open sans", 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "YuGothic Medium", 游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
palt: なし (font-feature-settings: normal)
letter-spacing: normal (全テキスト)
Body: 14px / 500 / line-height 1.8
Heading 1: 20px / 700 / line-height 1.5
Heading 2: 28px / 700 / line-height 1.0
Heading 3: 18px / 700 / line-height 1.8
CTA Style: filled (bg #5c5a5a, text #fff, radius 0px)
Tag Style: pill (bg #fff7ed, border #cdcdcd, radius 40px)
Shadow: ほぼ使用しない
```

### プロンプト例

```
ORBIS（オルビス）のデザインシステムに従って、商品一覧ページを作成してください。
- フォントは "open sans", 游ゴシック体, YuGothic, ... sans-serif（フルチェーン指定）
- font-feature-settings: normal（palt なし）、letter-spacing: normal
- 本文は 14px / 500 / line-height 1.8 / color #231815
- 見出しは 700 / color #231815
- CTA「カートに入れる」は bg #5c5a5a, text #fff, radius 0px
- カテゴリタグは bg #fff7ed, border 1px solid #cdcdcd, radius 40px（pill）
- 背景は白 #ffffff、セクション面は #fff7ed（クリーム）
- 価格表示のアクセントは #ef857d（コーラル）
- シャドウは控えめに
```

### 字詰め・組版の重要ポイント

1. **欧文先行フォントスタック**: Open Sans を先頭に配置し、欧文は必ず Open Sans で表示。和文は游ゴシック体にフォールバック。note（Helvetica Neue 先頭）と同じ欧文先行型
2. **游ゴシック 5 バリアント指定**: Windows の游ゴシック Medium 問題を font-family チェーンで解決。SmartHR の `@font-face` マッピング方式とは異なるアプローチ
3. **palt なし + letter-spacing normal**: ベタ組み。SHIRO（palt グローバル + ls 0.1em）や note（palt + ls 0.04em）とは対照的
4. **ウォームブラウン #231815**: RGB (35, 24, 21) は赤みを帯びた超ダークブラウン。純黒との差は微妙だが、暖色パレットとの調和に貢献
5. **本文ウェイト 500**: Regular (400) でも Bold (700) でもない中間値。游ゴシック体の Medium ウェイトを活用した、やや太めで読みやすい本文
6. **CTA のブラウングレー #5c5a5a**: ブランドカラー（クリーム・コーラル）を CTA に使わず、ニュートラルグレーで引く設計。商品写真の色が主役

---

**取得日**: 2026-05-09
**出典**: https://www.orbis.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
