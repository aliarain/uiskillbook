# DESIGN.md -- TULLY'S COFFEE (タリーズコーヒー)

> TULLY'S COFFEE 公式サイト (https://www.tullys.co.jp/) のデザイン仕様書。
> "Taste The Difference" を掲げるスペシャルティコーヒーチェーン。シアトル発、日本国内800店舗超。
> コーヒーの深煎りを思わせるダークブラウンを基調に、温かみのあるベージュとクリーム色で構成されたカフェトーンのデザイン。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: コーヒーの世界観を色で表現した温かみのあるデザイン。ダークブラウン（深煎り）、ベージュ（カフェオレ）、クリーム（生クリーム）の3階層でカフェの空間を再現。ページごとにボタンスタイルが変わる柔軟な構成
- **密度**: ゆったりとしたカフェ型レイアウト。メニュー写真を大きく見せるカード配置で、情報密度は低〜中程度
- **キーワード**: コーヒーブラウン、カフェトーン、ピルボタン、角丸カード、温かみ
- **特徴**: **システムフォント（ヒラギノ角ゴ / 游ゴシック / メイリオ）で和文を組み、装飾的な欧文見出しに Raleway を使う二層構成**。トップページはゴーストのピルボタン（radius 100px）、メニューページはベタ塗りの矩形ボタン（radius 0）と、ページ性格に応じてコンポーネントが切り替わる。カードは `border-radius: 16px` + 強めのドロップシャドウで立体感を出す

---

## 2. Color Palette & Roles

### Primary (ブランドカラー)

- **Coffee Brown** (`#301d0f`): メニューページの CTA ボタン背景。ダークロースト（深煎り）を想起させる最も濃いブラウン
- **Company Brown** (`#2d1e11`): 企業情報ページの CTA ボタン背景。Coffee Brown とほぼ同系のダークブラウン
- **Orange Accent** (`#eca776`): "New!" バッジ。新商品・季節限定のアクセントカラー

### Surface (面色)

- **Warm Beige** (`#e2dad5`): カード背景、セクション区切り。カフェオレの色調
- **Light Beige** (`#eae8e1`): セクション背景。やや黄みのあるナチュラルベージュ
- **Cream** (`#f7f6f2`): メニューページの全体背景。クリームの色調

### Neutral (ニュートラル)

- **Text Primary** (`#333333`): 本文テキスト（推定値。ヒラギノ標準の暗色）
- **Text Secondary** (`#535353`): 補足テキスト、サブ見出し
- **Text Light** (`#888888`): プレースホルダー、注釈
- **Border** (`#d5d2ce`): トップページのゴーストボタン枠線。温かみのあるグレーベージュ
- **Background** (`#ffffff`): トップページの背景
- **Dark Section** (`#211c1c`): フッター・ナビゲーションの暗色セクション

### Semantic (意味的な色)

- **Danger** (`#c0392b`): エラー、必須項目の未入力（推定値）
- **Success** (`#27ae60`): 成功、在庫あり（推定値）

> **Note**: TULLY'S の配色は **コーヒー豆のロースト段階を色で表現** している。最も濃い `#301d0f` がダークロースト（CTA）、中間の `#e2dad5` がミルクブレンド（カード面色）、最も薄い `#f7f6f2` がクリーム（背景）。この3段階のグラデーションがブランドの世界観。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: ヒラギノ角ゴ Pro（Mac）、游ゴシック（Windows）、メイリオ（フォールバック）

### 3.2 欧文フォント

- **サンセリフ（装飾見出し）**: Raleway — Google Fonts。英語のセクション見出し・ナビゲーションラベルに使用
- **サンセリフ（本文内欧文）**: 和文フォントスタック内の欧文グリフに依存

### 3.3 font-family 指定

```css
/* 本文・和文全般 */
font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", YuGothic, 游ゴシック, Meirio, メイリオ, sans-serif;

/* 英語装飾見出し */
font-family: "Raleway", sans-serif;
```

**フォールバックの考え方**:
- 和文はシステムフォント戦略。Mac は Hiragino、Windows は游ゴシック→メイリオの順
- 欧文の装飾見出しのみ Google Fonts (Raleway) を使用し、それ以外は和文フォント内の欧文グリフに委ねる
- Web フォントへの依存を最小限に抑えた軽量設計

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| English Heading | Raleway | 24px | 400 | 1.5 | normal | "Follow us" 等の英語セクション見出し |
| English Sub | Raleway | 18px | 400 | 1.5 | normal | 英語のサブ見出し |
| Body Large | Hiragino stack | 16px | 400 | 1.5 | normal | 本文・段落テキスト |
| Body | Hiragino stack | 14px | 400 | 1.5 | normal | 標準テキスト |
| Body Bold | Hiragino stack | 16px | 700 | 1.5 | normal | 強調テキスト |
| CTA Label | Raleway | 18px | 400 | 1.5 | normal | トップページのピルボタン |
| Menu Button | Hiragino stack | 13px | 400 | 1.5 | normal | メニューページのボタン |
| Company CTA | Hiragino stack | 16px | 700 | 1.5 | normal | 企業ページのボタン |
| Small | Hiragino stack | 12px | 400 | 1.5 | normal | 注釈、フッター |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5 — 全階層で統一
- **見出しの行間**: 1.5 — 本文と同一
- **本文の字間 (letter-spacing)**: normal — 特別な字間設定なし
- **見出しの字間**: normal

**ガイドライン**:
- 行間・字間ともにブラウザデフォルトに近い標準的な設定
- palt やカーニングの明示指定はなく、シンプルな構成を維持
- Raleway は欧文専用のため、letter-spacing の和欧混植問題は発生しない

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

明示的な `font-feature-settings` の指定なし。

- **palt**: 未使用
- **kern**: ブラウザデフォルトの `auto` に依存

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

**Ghost Pill (トップページ)**
- Background: `transparent`
- Text: `#2f1d0f` (ダークブラウン)
- Border: 2px solid `#d5d2ce`
- Padding: 20px 35px
- Border Radius: 100px (pill)
- Font Family: Raleway
- Font Size: 18px
- Font Weight: 400
- Hover: background `#f7f6f2`

**Filled Rectangle (メニューページ)**
- Background: `#301d0f`
- Text: `#ffffff`
- Padding: 12px
- Border Radius: 0px
- Font Size: 13px
- Font Weight: 400
- Shadow: 1px 2px 2px rgba(0,0,0,0.3)

**Full-Width CTA (企業ページ)**
- Background: `#2d1e11`
- Text: `#ffffff`
- Padding: 16px
- Border Radius: 0px
- Font Size: 16px
- Font Weight: 700
- Width: 100%

**Badge (New!)**
- Background: `#eca776`
- Text: `#ffffff`
- Padding: 4px 12px
- Border Radius: 4px
- Font Size: 12px
- Font Weight: 700

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#d5d2ce`
- Border (focus): 2px solid `#301d0f`
- Border Radius: 8px
- Padding: 12px 16px
- Font Size: 14px
- Font Family: Hiragino stack

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 16px
- Padding: 0（画像がカード上端に配置）
- Shadow: `5px 5px 10px rgba(0,0,0,0.25)` — 強めのドロップシャドウ

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 1100px
- Padding (horizontal): 20px

### Grid

- Menu Grid: 3 columns (デスクトップ) / 2 columns (タブレット) / 1 column (モバイル)
- Gutter: 24px
- カード画像はアスペクト比自由（メニュー写真に依存）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素、テキストブロック |
| 1 | `1px 2px 2px rgba(0,0,0,0.3)` | メニューページのボタン |
| 2 | `5px 5px 10px rgba(0,0,0,0.25)` | カードコンポーネント。**強めの影が特徴** |
| 3 | `0 8px 24px rgba(0,0,0,0.15)` | モーダル・オーバーレイ |

> **Note**: TULLY'S のカードは `5px 5px 10px rgba(0,0,0,0.25)` と**かなり強い影**を使う。右下方向にオフセットした影が立体感を強調し、メニュー写真を「テーブルに置かれたカード」のように見せる効果を狙っている。

---

## 7. Do's and Don'ts

### Do (推奨)

- ダークブラウン `#301d0f` を CTA の主色として使う — コーヒーブランドのアイデンティティ
- ベージュ `#e2dad5` とクリーム `#f7f6f2` で温かみのある面色を構成する
- 英語の装飾見出しには Raleway を使い、和文はシステムフォントに委ねる
- カードには `border-radius: 16px` + 強めのシャドウを必ず設定する
- トップページのCTAはピルボタン（radius 100px）にする
- 新商品・季節限定にはオレンジ `#eca776` のバッジを添える
- line-height は全体で 1.5 に統一する

### Don't (禁止)

- 冷色系（青・グレー系）をメインカラーに使わない — 温かいカフェの雰囲気を壊す
- カードを角丸なしで作らない — `border-radius: 16px` が必須
- Raleway を和文テキストに使わない — 英語の装飾見出し専用
- ダークブラウンを本文テキスト色に使わない — 本文は `#333333` 系のニュートラルグレー
- 影を省略してフラットなカードにしない — 立体感がデザインの特徴
- オレンジ `#eca776` を CTA ボタンに使わない — バッジ専用のアクセント

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | 1カラム、ハンバーガーメニュー |
| Tablet | <= 1023px | 2カラムグリッド |
| Desktop | > 1023px | 3カラムグリッド、フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px x 44px (WCAG 基準)

### フォントサイズの調整

- モバイルでは本文 14px を維持
- Raleway 見出しは 24px -> 20px に縮小
- メニューグリッドは 3列 -> 1列に変更
- ピルボタンのパディングを 20px 35px -> 16px 28px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #301d0f (Coffee Brown)
Accent Color: #eca776 (Orange - badges only)
Text Color: #333333
Text Secondary: #535353
Background: #ffffff (top), #f7f6f2 (menu)
Card Surface: #e2dad5 (Warm Beige)
Section BG: #eae8e1 (Light Beige)
Border: #d5d2ce
Footer: #211c1c
Font JP: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", YuGothic, 游ゴシック, Meirio, メイリオ, sans-serif
Font EN: "Raleway", sans-serif
Body Size: 14-16px
Line Height: 1.5
Button (top): pill, ghost, radius 100px, border #d5d2ce
Button (menu): filled, radius 0, bg #301d0f
Card Radius: 16px
Card Shadow: 5px 5px 10px rgba(0,0,0,0.25)
```

### プロンプト例

```
TULLY'S COFFEE のデザインシステムに従って、メニュー一覧ページを作成してください。
- 背景: #f7f6f2 (クリーム)
- フォント(和文): "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", YuGothic, sans-serif
- フォント(英語見出し): "Raleway", sans-serif
- カード: bg #fff, border-radius 16px, shadow 5px 5px 10px rgba(0,0,0,0.25)
- CTA ボタン: bg #301d0f, color #fff, radius 0, shadow 1px 2px 2px rgba(0,0,0,0.3)
- 新商品バッジ: bg #eca776, color #fff, radius 4px
- グリッド: 3列 (デスクトップ), 1列 (モバイル)
- line-height: 1.5 で統一
```
