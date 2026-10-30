# DESIGN.md — TOTO（TOTO株式会社）

> TOTO（https://jp.toto.com/）のデザイン仕様書。
> 日本を代表する住宅設備メーカー。トイレ・浴室・キッチン・水栓等の水まわり製品を展開。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ライトブルーグレー (`#f2f6fa`) を基調面に、**ディープブルー `#1e4dc6` の CTA** と **ダークネイビー `#0b163e` の見出し**で住宅設備の信頼感と清潔感を表現。水まわりブランドらしいクールで清潔なトーン
- **密度**: 商品カテゴリーが多いため情報密度はやや高め。ただし pill 型タグリンクや大きなカード画像でユーザーを案内し、圧迫感を避ける
- **キーワード**: 清潔感、ブルーグレー基調、Lato + ヒラギノ、水まわりの信頼性、カテゴリー色分け
- **特徴**:
  - 欧文に **Lato** を使用。クリーンなジオメトリックサンセリフで、水まわり製品の清潔さと相性が良い
  - 和文のフォールバックに **ヒラギノ角ゴ Pro W3** を高優先で指定（`"ヒラギノ角ゴ Pro W3"` の日本語表記あり）
  - 背景色に `#f2f6fa`（ブルーグレーの薄い面色）を広く使用。白との切り替えで情報階層を作る
  - 商品カテゴリーごとにアクセントカラーを割り当て: トイレ（`#00b9ef` シアン）、浴室（`#dead00` ゴールド）、食洗機（`#a72126` レッド）、給湯器（`#c5d21c` イエローグリーン）
  - **pill 型タグリンク**（radius `40px`）が主要なナビゲーション UI。ライトブルー面 + ブルーテキストで誘導
  - フッターは `#0b163e`（ダークネイビー）で締める

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **TOTO Blue** (`#1e4dc6`): 主要 CTA ボタンの背景（"カタログを見る"、"ショールームを探す"）、リンクテキスト、タグリンクのテキスト色
- **Dark Navy** (`#0b163e`): 見出しテキスト（H2〜H4）、強調テキスト
- **Deep Navy** (`#061448`): ナビゲーションテキスト、ヘッダー要素
- **Dark Blue** (`#13449d`): ホバー・プレス時のブルー（より暗い）

### Category Colors

| カテゴリー | hex | 用途 |
|-----------|-----|------|
| トイレ | `#00b9ef` | カテゴリーアクセント（シアン） |
| 浴室 | `#dead00` | カテゴリーアクセント（ゴールド） |
| 食洗機 | `#a72126` | カテゴリーアクセント（レッド） |
| 給湯器 | `#c5d21c` | カテゴリーアクセント（イエローグリーン） |
| 水栓金具 | `#d9d9d8` | カテゴリーアクセント（シルバー） |

### CTA / Buttons

- **Primary CTA**: 背景 `#1e4dc6` / 文字 `#ffffff` / radius `2px` / padding `18px 12px` / 16px / weight 700
- **Tag Link (Pill)**: 背景 `#f9f9fc` / 文字 `#1e4dc6` / border `1px solid #e7edf2` / radius `40px` / padding `12px 20px` / 14px / weight 700
- **Show More**: テキスト `#1e4dc6` / weight 700 / padding `10px 0px 8px`（下線なし、テキストリンク型）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Navy | `#0b163e` | (11, 22, 62) | 見出しテキスト、フッター背景 |
| Deep Navy | `#061448` | (6, 20, 72) | ナビテキスト |
| Blue Gray BG | `#f2f6fa` | (242, 246, 250) | 主要なセクション背景面 |
| Tag Surface | `#f9f9fc` | (249, 249, 252) | タグリンク背景 |
| Light Surface | `#f6f6f6` | (246, 246, 246) | 関連コンテンツ背景 |
| Tag Border | `#e7edf2` | (231, 237, 242) | タグリンクのボーダー |
| Divider | `#d8e0e6` | (216, 224, 230) | セクション区切り |
| Search Border | `#cdd2de` | (205, 210, 222) | 検索フォームのボーダー |
| White | `#ffffff` | (255, 255, 255) | ページ背景、ボタン上テキスト |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ Pro W3**（日本語名 `"ヒラギノ角ゴ Pro W3"` でも指定）を高優先
- **フォールバック**: Hiragino Kaku Gothic Pro → Noto Sans JP → メイリオ / meiryo → sans-serif
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ**: **Lato** — ジオメトリックサンセリフ。Google Fonts で広く使われる
- **フォールバック**: arial

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: Lato, arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  "Noto Sans JP", メイリオ, meiryo, sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Lato）を先に指定し、欧文部分はクリーンなジオメトリック書体で表示
- 和文はヒラギノを最優先（Apple 環境）→ Noto Sans JP（Android / Linux）→ メイリオ（Windows）
- ヒラギノは **Pro W3**（ProN ではない）を使用。日本語表記と英語表記の両方を font-family に含む
- `arial` が Lato の直後に入っている（Lato が読み込めない場合の欧文フォールバック）

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／商品情報ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Lato + ヒラギノ | 52px | **400** | 86.3px (×1.66) | 0.012em | `#ffffff` | "会社情報" |
| Section H2 | Lato + ヒラギノ | 18px | 700 | 27px (×1.5) | 0.012em | `#0b163e` | "関連コンテンツ" |
| Sub H3 | Lato + ヒラギノ | 22px | 400 | 33px (×1.5) | 0.012em | `#0b163e` | "住宅向け商品" |
| Card H4 | Lato + ヒラギノ | 16px | 700 | 24px (×1.5) | 0.012em | `#0b163e` | "シンラ（戸建住宅向け）" |
| Pickup Label | Lato + ヒラギノ | 18px | 700 | 27px (×1.5) | 0.012em | `#0b163e` | "ピックアップ" |
| Showroom Lead | Lato + ヒラギノ | 22px | 400 | 33px (×1.5) | 0.012em | `#0b163e` | ショールーム誘導テキスト |
| Body | Lato + ヒラギノ | 16px | 400 | 24px (×1.5) | 0.012em | `#061448` | 本文・ナビリンク |
| Tag Link | Lato + ヒラギノ | 14px | 700 | 21px (×1.5) | 0.012em | `#1e4dc6` | pill 型タグ |
| Nav Label | Lato + ヒラギノ | 12px | 400 | 18px (×1.5) | 0.012em | `#061448` | ナビアイコンラベル |
| CTA Button | Lato + ヒラギノ | 16px | 700 | 16px (×1.0) | normal | `#ffffff` | "カタログを見る" |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（`24px` / `16px`）
- **ヒーローの行間**: 1.66（`86.3px` / `52px`）— 余裕のある表示
- **見出しの行間**: 1.5（H2〜H4 すべて統一）
- **本文の字間 (letter-spacing)**: 0.012em — 全要素でほぼ一律
- **CTA の字間**: normal（ボタンテキストのみ letter-spacing なし）

**ガイドライン**:
- 全テキストに `0.012em` の微細な letter-spacing を適用するのが TOTO のスタイル
- CTA ボタンのみ normal で、視認性とクリックターゲットの明確さを優先

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

palt / kern の明示的な指定なし。Lato のデフォルトカーニングに依存。

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#1e4dc6`
- Text: `#ffffff`
- Padding: 18px 12px
- Border Radius: 2px
- Font Size: 16px
- Font Weight: 700
- Line Height: 16px (×1.0)
- 全幅表示（`width: 100%`）が多い

**Tag Link (Pill)**
- Background: `#f9f9fc`
- Text: `#1e4dc6`
- Border: 1px solid `#e7edf2`
- Padding: 12px 20px
- Border Radius: 40px
- Font Size: 14px
- Font Weight: 700

**Text Link**
- Text: `#1e4dc6`
- Font Weight: 700
- テキストのみ（下線なし、背景なし）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cdd2de`
- Border Radius: 0px
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px（角丸なし）
- Shadow: none
- カード画像 + テキストの縦積みレイアウト

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 備考 |
|-------|-------|------|
| XS | 8px | アイコンとラベルの間隔 |
| S | 12px | タグリンク内パディング |
| M | 20px | タグリンク水平パディング |
| L | 24px | セクション内パディング |
| XL | 48px | セクション間 |
| XXL | 80px | 大セクション間 |

### Container

- Max Width: コンテンツ幅 約 1200px
- Section Padding: 24〜48px

### Grid

- 商品カード: 2〜4 カラム
- タグリンク: フレックスラップ

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素 |

フラットデザイン。シャドウはほぼ使用しない。面の色の切り替え（`#ffffff` ↔ `#f2f6fa`）で階層を表現。

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは `#0b163e`（ダークネイビー）を使う。純黒ではなく紺色
- セクション背景に `#f2f6fa`（ブルーグレー）と `#ffffff`（白）を交互に配置して階層を作る
- CTA ボタンは `#1e4dc6` 背景 + `2px` 角丸（pill ではない）
- pill 型タグリンクはナビゲーション的な用途に使う（`40px` 角丸 + `#1e4dc6` テキスト）
- `letter-spacing: 0.012em` を全テキストに一律適用する
- 商品カテゴリーにはカテゴリー固有のアクセントカラーを使う

### Don't（禁止）

- 見出しに純黒 `#000000` を使わない（`#0b163e` ダークネイビーが正しい）
- CTA ボタンに pill（大きな角丸）を使わない。pill はタグリンク専用（radius `40px`）、CTA は `2px`
- 全体の背景に純白のみを使わない（`#f2f6fa` のブルーグレー面が TOTO の特徴）
- ドロップシャドウを使わない（面色で階層を表現する）
- letter-spacing を 0 にしない（`0.012em` が TOTO の一律スタイル）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 375px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px
- CTA ボタンの padding は `18px 12px` で十分な高さを確保

### フォントサイズの調整

- モバイルではヒーロー H1 を 28〜32px に縮小
- タグリンクの padding を `8px 16px` に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #1e4dc6
Heading Color: #0b163e
Text Color: #061448
Background: #ffffff
Surface: #f2f6fa
Tag Surface: #f9f9fc
Font: Lato, arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Noto Sans JP", メイリオ, meiryo, sans-serif
Body Size: 16px / Weight 400
Line Height: 1.5
Letter Spacing: 0.012em
```

### プロンプト例

```
TOTO の公式サイトのデザインシステムに従って、商品カテゴリーページを作成してください。
- 主要色: #1e4dc6（ブルー）
- 見出し: #0b163e（ダークネイビー）、16〜22px / weight 400〜700
- セクション背景: #f2f6fa と #ffffff の交互配置
- フォント: Lato, "ヒラギノ角ゴ Pro W3", "Noto Sans JP", sans-serif
- タグリンク: pill 型（radius 40px）、#f9f9fc 背景 + #1e4dc6 テキスト
- CTA ボタン: #1e4dc6 背景、radius 2px、全幅
- letter-spacing: 0.012em を全テキストに適用
```
