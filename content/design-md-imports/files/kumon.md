# DESIGN.md — KUMON

> KUMON（https://www.kumon.ne.jp/）のデザイン仕様書。
> 公文教育研究会の公式サイト。実サイトの computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 教育ブランドとしての信頼感と親しみやすさを両立。カラフルな教科カラーと柔らかい角丸で、子どもから大人まで安心感を与えるデザイン
- **密度**: 情報量は多いが、セクションごとに背景色を切り替えて視覚的な区切りを作り、読みやすさを維持
- **キーワード**: 親しみやすい、カラフル、教育的、信頼感、あたたかみ
- **特徴**: 教科ごとに固有のブランドカラー（算数=青、英語=オレンジ、国語=緑、ズンズン=ゴールド）を持ち、CTAボタンはオレンジのpill形状で統一。カード要素には底部シャドウ（`0px 6px 0px`）で立体感を出す

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **KUMON Blue** (`#00a9e0`): メインのブランドカラー。キャンペーン見出し背景、ブランドアクセントに使用
- **CTA Orange** (`#faaf18`): 「お近くの教室を探す」等の主要CTAボタン。ヘッダーの検索ボタンにも使用

### Subject Colors（教科カラー）

- **算数・数学** (`#00a9e0`): ブルー。ブランドカラーと共用
- **英語** (`#ff5700`): オレンジ。英語教材のアクセント
- **国語** (`#69be29`): グリーン。国語教材のアクセント
- **ズンズン** (`#f0ab00`): ゴールド。運筆教材のアクセント

### Surface Colors（面色）

- **Light Blue** (`#d0f0ff`): セクションボタン（「算数・数学を詳しく見る」等）の背景
- **Warm Beige** (`#f2f1e6`): コンテンツセクション（「くもんの先生」等）の背景
- **Cool Blue** (`#e1ecf2`): 特長セクション（「KUMONの魅力」等）の背景
- **Cream Yellow** (`#fff0be`): プロモーション帯（教室検索エリア）の背景
- **Light Sky** (`#dcf4ff`): フッターメニュー等の背景

### Subject Tint Colors（教科の淡色背景）

- **英語 Tint** (`#ffe7db`): 英語セクションの淡い背景
- **国語 Tint** (`#edffe0`): 国語セクションの淡い背景

### Semantic（意味的な色）

- **Danger / Caution** (`#ff3f2f`): 重要なお知らせ見出し（`ttlCaution` クラス）
- **Badge Pink** (`#fa978d`): キャンペーンバッジ

### Neutral（ニュートラル）

- **Text Primary** (`#1e1e1e`): 本文テキスト
- **Text White** (`#ffffff`): 暗い背景上のテキスト
- **Border Light** (`#efefef`): 薄いボーダー（ナビゲーションシャドウ `rgba(239,239,239,0.8)`）
- **Background** (`#ffffff`): ページ背景
- **Surface White** (`#ffffff`): カード面、ボタン面

### Interactive Accent

- **Secondary Blue** (`#7dcdf4`): ヘッダーの「学習中の方」バッジ、サポートラベル

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts、主要和文フォント）
- ヒラギノ角ゴ Pro W3 / Hiragino Kaku Gothic Pro（macOS）
- メイリオ / Meiryo（Windows）
- MS Pゴシック（レガシー Windows）

### 3.2 欧文フォント

- **サンセリフ**: Lato（Google Fonts、欧文の先頭指定）

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: Lato, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;

/* 入力欄（Lato なし） */
font-family: "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント Lato を先頭に指定し、欧文の表示品質を優先
- Noto Sans JP を主要和文フォントとして配置（Google Fonts で読み込み）
- macOS のヒラギノ → Windows のメイリオ → レガシーの MS Pゴシック の順
- 入力欄は Lato を含まないスタック（ブラウザデフォルトに近い動作）

### 3.4 文字サイズ・ウェイト階層

> 以下は公文式オフィシャルサイト（kumon.ne.jp）トップページの computed style 実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Campaign Title (h2) | 44px | 700 | 60px (x1.36) | normal | 「無料体験学習」キャンペーン見出し。bg: #00a9e0 |
| Display (h2) | 40px | 700 | 54px (x1.35) | normal | 「一人ひとりにあわせて」大見出し |
| Section Title (h2) | 36px | 700 | 61.2px (x1.7) | normal | 「お近くの教室を探す」 |
| Heading 2 (h2) | 34px | 900 | 42px (x1.24) | normal | 「世界の60を超える国と地域に」 |
| Subject Heading (h3) | 28px | 900 | 24px (x0.86) | normal | 教科名「算数・数学」「英語」「国語」 |
| Heading 3 (h2) | 28px | 700 | 36px (x1.29) | normal | 「メアドだけでOK！」 |
| Heading 4 (h2) | 24px | 700 | 40.8px (x1.7) | normal | セクション小見出し |
| Card Title (h3) | 20px | 700 | 24px (x1.2) | normal | アコーディオン見出し |
| Body | 16px | 400 | 27.2px (x1.7) | normal | 本文テキスト |
| Header Button | 14px | 700 | 36px (x2.57) | normal | ヘッダーのバッジボタン |
| Input | 14px | 400 | normal | normal | ヘッダー検索欄 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- 本文 (p): `27.2px` (16px x **1.7**) -- 日本語として標準的な広さ
- セクション見出し (h2): `54px`〜`61.2px` (x1.35〜1.7) -- サイズにより変動
- カード見出し (h3): `24px` (20px x 1.2)
- CTA ボタンテキスト: `30.6px` (18px x 1.7)

**字間 (letter-spacing)** -- 実測値:
- 全要素: `normal` -- **letter-spacing の追加指定はなし**
- ナビゲーション要素のみ: `-0.64px` (= -0.04em) -- ネガティブスペーシング

**ガイドライン**:
- KUMON サイトは `letter-spacing` をほぼ使用していない。本文も見出しも `normal`
- ナビゲーションの `-0.04em` はコンパクト表示のための例外

### 3.6 禁則処理・改行ルール

```css
/* 特別な禁則設定は確認されなかった */
/* ブラウザデフォルトの禁則処理に依存 */
```

### 3.7 OpenType 機能

```css
/* トップページの全要素 */
font-feature-settings: normal;
```

- **palt は適用されていない**。すべての要素で `font-feature-settings: normal`
- letter-spacing も normal であり、文字詰めは行われていない

### 3.8 縦書き

- 該当なし。KUMON サイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（教室検索）**
- Background: `#faaf18`（CTA Orange）
- Text: `#ffffff`
- Padding: 12px 40px 12px 28px
- Border Radius: 50px（pill）
- Font Size: 18px
- Font Weight: 400
- 矢印アイコン付き

**Secondary CTA（詳しく見る系）**
- Background: `#ffffff`
- Text: `#1e1e1e`
- Padding: 12px 36px 12px 18px
- Border Radius: 48px（pill）
- Font Size: 18px
- Font Weight: 700
- 矢印アイコン付き

**Section Button（教科ページ誘導）**
- Background: `#d0f0ff`（Light Blue）
- Text: `#1e1e1e`
- Padding: 12px 36px 12px 18px
- Border Radius: 40px（pill）
- Font Size: 18px
- Font Weight: 700
- 一部に border: 2px solid `#7dcdf4`

**Header Badge**
- Background: `#7dcdf4`（Secondary Blue）
- Text: `#ffffff`
- Padding: 0px 12px
- Border Radius: 3px
- Font Size: 14px
- Font Weight: 700

**Nav CTA（ヘッダー内）**
- Background: `#faaf18`
- Text: `#ffffff`
- Padding: 8px 15px 8px 35px
- Border Radius: 20px
- Font Size: 16px
- Font Weight: 700

### Campaign Heading（キャンペーン見出し）

- Background: `#00a9e0`（KUMON Blue）
- Text: `#ffffff`
- Padding: 6px
- Border Radius: 8px
- Font Size: 44px
- Font Weight: 700
- Shadow: `rgba(0,0,0,0.1) 0px 6px 0px 0px`（底部シャドウ）

### Inputs

- Background: `#ffffff`
- Border: 1px solid（色は要素による）
- Border Radius: 3px 0px 0px 3px（検索欄左側）
- Padding: 6px 10px（ヘッダー）/ 13px 15px（メイン）
- Font Size: 14px（ヘッダー）/ 16px（メイン）
- 検索ボタン: bg `#faaf18`、radius 0px 3px 3px 0px（右側）

**Pill Input（教室検索エリア）**
- Border Radius: 48px 0px 0px 48px
- Font Weight: 700
- Padding: 12px 20px

### Cards（年齢別カード）

- Background: transparent（画像背景）
- Border Radius: 8px
- Shadow: `rgba(0,0,0,0.1) 0px 6px 0px 0px`（底部のみ）
- Font Size: 20px
- Font Weight: 700

### Accordion

- Background: `#f2f1e6`（Warm Beige）/ `#ffffff`
- Border Radius: 16px
- Padding: 24px 40px 24px 56px（左にアイコン余白）
- Font Size: 18px〜20px
- Font Weight: 700

### FAQ Accordion

- Background: `#ffffff`
- Border Radius: 16px
- Padding: 24px 40px 24px 56px
- Font Size: 18px
- Font Weight: 700

---

## 5. Layout Principles

### Container

- Max Width: 約1100px（コンテンツエリア推定）
- Padding (horizontal): 20px〜40px

### Spacing

- セクション間: 大きな余白 + 背景色の切り替えで区切り
- カード間のギャップ: 均等配置
- セクション内: 24px〜40px の余白

### 特徴的なレイアウトパターン

- **背景色ストライプ**: セクションごとに `#ffffff` → `#e1ecf2` → `#f2f1e6` → `#ffffff` と背景色を交互に切り替え
- **フルワイドセクション**: キャンペーンバナーや教室検索は画面幅いっぱい
- **カードグリッド**: 年齢別カードは横並びグリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（ほとんどの要素） |
| Card | `rgba(0,0,0,0.1) 0px 6px 0px 0px` | 年齢別カード、キャンペーン見出し。**底部のみのシャドウ**で押し出し効果 |
| Nav | `rgba(239,239,239,0.8) 0px 5px 10px 0px` | ナビゲーションバー |

**特徴**: 一般的な全方位シャドウではなく、**底部のみの`0px 6px 0px`パターン**を多用。ボタンを「押せる」印象にする効果。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#1e1e1e`（ほぼ黒）を使い、純粋な `#000000` を避ける
- CTAボタンはオレンジ `#faaf18` のpill形状（radius 40〜50px）で統一する
- 教科ごとに固有のカラーを使い分ける（算数=`#00a9e0`、英語=`#ff5700`、国語=`#69be29`、ズンズン=`#f0ab00`）
- セクションの区切りには背景色の切り替え（`#e1ecf2`, `#f2f1e6`, `#d0f0ff`）を使う
- カード要素には底部シャドウ `0px 6px 0px` を使って立体感を出す
- 本文の line-height は 1.7 で組む
- フォントは Lato を欧文先頭に、Noto Sans JP を和文主体に配置する

### Don't（禁止）

- 教科カラーを間違えて使わない（算数に緑を使う等）
- CTAボタンを四角（radius 0〜8px）にしない（pill形状が基本）
- letter-spacing や palt を追加しない（実サイトでは使用していない）
- ブランドカラー `#00a9e0` をCTAボタンの背景に使わない（CTAは `#faaf18` オレンジ）
- 全方位シャドウ（`0px 4px 8px`等）をカードに使わない（底部シャドウ `0px 6px 0px` が正しい）
- セクション背景を白一色にしない（色の切り替えで区切るのがKUMON流）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px
- CTAボタンは十分な padding で確保

### フォントサイズの調整

- モバイルでは見出しがデスクトップの 70〜80% 程度に縮小
- 本文は 16px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Blue): #00a9e0
CTA Color (Orange): #faaf18
Text Primary: #1e1e1e
Text White: #ffffff
Background: #ffffff
Surface Beige: #f2f1e6
Surface Cool Blue: #e1ecf2
Surface Light Blue: #d0f0ff
Secondary Blue: #7dcdf4
Danger: #ff3f2f

Subject Math: #00a9e0
Subject English: #ff5700
Subject Japanese: #69be29
Subject Zunzun: #f0ab00

Font: Lato, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif

Body Size: 16px / line-height: 1.7 / letter-spacing: normal
Heading: weight 700-900 / letter-spacing: normal / palt: なし
CTA Button: bg #faaf18, color #fff, radius 50px (pill), shadow 0px 6px 0px
Card Shadow: rgba(0,0,0,0.1) 0px 6px 0px 0px
```

### プロンプト例

```
KUMON のデザインに従って、教室一覧ページを作成してください。
- フォント: Lato, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
- テキスト色: #1e1e1e（純粋な黒は使わない）
- 背景: #ffffff、セクション背景は #e1ecf2 / #f2f1e6 / #d0f0ff を交互に使う
- CTAボタン: bg #faaf18, 白テキスト, pill形状 (radius 50px), 矢印アイコン付き
- カードのシャドウ: rgba(0,0,0,0.1) 0px 6px 0px 0px（底部のみ）
- 教科名は各教科カラーで表示: 算数=#00a9e0, 英語=#ff5700, 国語=#69be29
- 本文: 16px, line-height: 1.7, letter-spacing: normal, palt なし
```
