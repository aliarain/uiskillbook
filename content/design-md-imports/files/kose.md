# DESIGN.md — KOSÉ / Maison KOSÉ (maison.kose.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表する化粧品メーカーのECプラットフォーム（Maison KOSÉ）。清潔感のあるフェミニンなトーンに、コーラルピンクのCTAで華やかさを添えた、商品を引き立てるミニマルな設計
- **密度**: 中〜高密度のEC型。商品カード・カテゴリタグ・フィルターが整然と並ぶショッピング特化レイアウト
- **キーワード**: フェミニン、清潔、コーラルピンク、シャープ、上品

**設計上のポイント**:
- CTAボタンは角丸なし（border-radius: 0px）でシャープな印象を保つ
- タグ・フィルターチップのみ pill 形状（border-radius: 18px）で柔らかさを出す
- テキストカラーは純黒ではなくダークグレー（`#3b4043`）で、化粧品ブランドらしい上品さを演出
- 英語のセクション見出しに Josefin Sans（weight 300, 広い字間）を使い、装飾的なアクセントとする

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **KOSÉ Coral** (`#ee696f`): メインのブランドカラー。「カートに入れる」「種類を選ぶ」等のCTAに広く使用。コーラルピンクの温かみのある赤
- **KOSÉ Dark** (`#3b4043`): 「すべての商品」等のセカンダリCTAに使用するダークグレー。テキストカラーと同色

### Semantic（意味的な色）

- **Info / Reservation** (`#56bbdc`): 「予約受付中」ラベル。水色で特別ステータスを示す
- **Promo / Sale** (`#fbd10b`): セール・キャンペーンバナーの黄色
- **Pagination** (`#4493c8`): ページネーション番号のブルー
- **Danger**: 未定義（実測なし）

### Neutral（ニュートラル）

- **Text Primary** (`#3b4043`): 本文テキスト（`rgb(59, 64, 67)`）。純黒を避けたダークグレー
- **Text Body Black** (`#000000`): body 要素の color 指定。実際の本文は `#3b4043` が優先される箇所が多い
- **Text Inverse** (`#ffffff`): CTA上の白テキスト
- **Border** (`#c8c8c8`): タグチップの枠線（`rgb(200, 200, 200)`）
- **Background** (`#ffffff`): ページ全体の基本背景
- **Surface** (`#f3f3f3`): カテゴリセクション等の面背景
- **Surface Subtle** (`#f7f7f7`): より控えめなセクション背景
- **Neutral Button** (`#efefef`): 「やり直す」「次へ進む」等のニュートラルボタン面

### Quick Swatch

| Token | Value | 役割 |
|-------|-------|------|
| KOSÉ Coral | `#ee696f` | CTA・メイン強調 |
| Dark Accent | `#3b4043` | テキスト・セカンダリCTA |
| Info Blue | `#56bbdc` | 予約・ステータス |
| Promo Yellow | `#fbd10b` | セール・キャンペーン |
| Surface | `#f3f3f3` | セクション面背景 |
| Border | `#c8c8c8` | チップ枠線 |
| White | `#ffffff` | 背景・反転テキスト |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体, YuGothic, 游ゴシック, Yu Gothic, メイリオ, sans-serif
- **明朝体**: 使用なし（ECサイトはゴシック体で統一）

### 3.2 欧文フォント

- **ディスプレイ**: Josefin Sans（Google Fonts。セクション見出し専用。weight 300、広い letter-spacing）
- **サンセリフ**: Open Sans（一部セカンダリボタンで使用）
- **等幅**: 未定義

> **Web配信に関する注記**:
> - `Josefin Sans` は Google Fonts で配信されている（推奨: `wght@300;400`）
> - `游ゴシック体` / `Yu Gothic` は Web フォントとして配信されていない。OS インストール済みフォントにフォールバック
> - 環境を問わず確実に和文を表示したい場合は、`Noto Sans JP`（Google Fonts）を Web フォントとしてフォールバックチェーンに追加するのが安全

### 3.3 font-family 指定

```css
/* 本文（和文） */
font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", "Noto Sans JP", sans-serif;

/* ディスプレイ見出し（英語セクションヘッダー） */
font-family: "Josefin Sans", sans-serif;

/* セカンダリボタン（一部） */
font-family: "Open Sans", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- 和文本文は游ゴシック系を軸に、メイリオを Windows 保険として配置
- Josefin Sans は英語のセクション見出し専用。和文テキストには適用しない
- Noto Sans JP を Web フォント保険として末尾に配置

### 3.4 文字サイズ・ウェイト階層

実測値に基づく主要階層（Maison KOSÉ トップ・商品ページ計測）:

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Display | Josefin Sans | 28–29px | 300 | normal | 0.18em | "TREND ITEM", "INFORMATION" 等の英語見出し |
| Heading 2 | Yu Gothic | 24px | 400 | normal | normal | コンテンツ内の日本語見出し |
| Body | Yu Gothic | 16px | 500 | normal | normal | 本文テキスト |
| Product Name | Yu Gothic | 14px | 400 | normal | 0.03em | 商品名 |
| Product Price | Yu Gothic | 14px | 500 | normal | 0.03em | 価格表示 |
| Brand Label | Yu Gothic | 12px | 600 | normal | 0.03em | 商品ブランドラベル |
| CTA Button | Yu Gothic | 13px | 600 | normal | normal | 「カートに入れる」等 |
| Nav Links | Yu Gothic | 12px | 500 | normal | 0.04–0.1em | ヘッダーナビゲーション |
| Tag Chip | Yu Gothic | 11px | 500 | normal | normal | カテゴリフィルタータグ |
| Footer | Yu Gothic | 12px | 500 | normal | normal | フッター内テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `normal`（ブラウザデフォルト、約 1.2）。EC サイトとして商品情報の一覧性を優先
- **見出しの行間**: `normal`
- **本文の字間 (letter-spacing)**: `normal`（明示的な指定なし）
- **見出しの字間（Josefin Sans）**: `0.18em`（約 5px / 28px）。装飾的に広く取る
- **商品情報の字間**: `0.03em`（商品名・価格・ブランドラベルで統一）
- **ナビゲーションの字間**: `0.04–0.1em`

**ガイドライン**:
- Josefin Sans 見出しの `0.18em` は装飾的な意図。和文見出しには適用しない
- 商品情報は `0.03em` でわずかに字間を広げ、可読性を確保
- 長文コンテンツを展開する場合は `line-height: 1.7〜1.9` を別途設定するのが望ましい

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実測ではグローバルな指定なし、ブラウザデフォルト） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 等の指定なし */
```

- **palt**: 使用していない（実測値はすべて `normal`）。和文は等幅組版のまま
- **kern**: ブラウザの自動カーニングのみ
- EC サイトとして装飾的なフォント機能を抑制し、可読性と一貫性を優先

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（コーラルピンク）**
- Background: `#ee696f`
- Text: `#ffffff`
- Padding: 8px 0px（幅は親要素に依存）
- Border Radius: `0px`
- Font Size: 13px
- Font Weight: 600
- 「カートに入れる」「種類を選ぶ」等のメインアクション

**Secondary CTA（ダーク）**
- Background: `#3b4043`
- Text: `#ffffff`
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 500
- 「すべての商品」等の副次的アクション

**Secondary（ダークグレー・Open Sans混在）**
- Background: `#444444`
- Text: `#ffffff`
- Border Radius: `2px`
- Font Family: Open Sans + YuGothic
- 一部のセカンダリボタンのみ微小な角丸を持つ

**Neutral（グレー塗り）**
- Background: `#efefef`
- Text: `#000000`
- Border Radius: `0px`
- 「やり直す」「次へ進む」等の中立的アクション

**Reservation / Info（水色）**
- Background: `#56bbdc`
- Text: `#ffffff`
- Border Radius: `0px`
- 「予約受付中」等のステータス表示

**Tag Chip（フィルタータグ）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #c8c8c8`
- Border Radius: `18px`（pill 形状）
- Padding: 10px 12px
- Font Size: 11px
- Font Weight: 500
- カテゴリフィルター・タグ選択に使用

### Inputs

トップ・商品ページでの推奨値（サイト方針に基づく）:

- Background: `#ffffff`
- Border: `1px solid #c8c8c8`
- Border (focus): `1px solid #3b4043`
- Border Radius: `0px`（CTA に合わせてシャープ）
- Padding: 10px 12px
- Font Size: 14px
- Height: 44px（タッチターゲット基準）

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（影で浮かせるか、面背景で区切る）
- Border Radius: `0px`
- Padding: 0（画像 + テキスト領域で構成）
- Shadow: なしまたは控えめ

### Product Card 内部構成

| 要素 | Size | Weight | Letter Spacing | 備考 |
|------|------|--------|----------------|------|
| ブランドラベル | 12px | 600 | 0.03em | 大文字で表示 |
| 商品名 | 14px | 400 | 0.03em | 和文テキスト |
| 価格 | 14px | 500 | 0.03em | 税込表示 |

---

## 5. Layout Principles

### Spacing Scale（推定・8px ベース）

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 4px | アイコンとテキストの間隔 |
| S | 8px | 要素内の最小余白 |
| M | 16px | カード内パディング、リスト項目間 |
| L | 24px | セクション内コンテンツ間隔 |
| XL | 40px | セクション間余白 |
| XXL | 64px | ヒーロー領域パディング |

### Container

- Max Width: 1200px（推定。ECサイト標準幅）
- Padding (horizontal): 16px（モバイル）〜 40px（デスクトップ）

### Grid

- Columns: 可変（商品カード 4列、カテゴリ 3列等）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | フラットな要素（デフォルト） |
| 1 | `0 2px 4px rgba(0,0,0,0.06)` | カードのホバー（推奨） |
| 2 | `0 4px 12px rgba(0,0,0,0.08)` | モーダル・ドロップダウン（推奨） |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | ダイアログ（推奨） |

> 実装方針: 基本はフラット。商品カードのホバー時に Level 1 程度の影を足すのみ。

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA ボタンには `#ee696f`（KOSÉ Coral）を使い、`border-radius: 0px` を維持する
- テキスト色は `#3b4043` を使い、純黒 `#000000` を避ける
- Josefin Sans は英語のセクション見出し専用で使う（weight 300, letter-spacing 0.18em）
- タグ・フィルターチップには pill 形状（`border-radius: 18px`）を使う
- 商品情報（名前・価格・ブランド）の letter-spacing は `0.03em` で統一する
- 面背景には `#f3f3f3` / `#f7f7f7` のライトグレーを使い、セクションを区切る

### Don't（禁止）

- CTA ボタンに角丸を加えない（pill はタグチップ専用）
- Josefin Sans を和文テキストに使わない（英語見出し専用）
- KOSÉ Coral `#ee696f` を本文テキストに使わない（コントラスト不足）
- 本文に純黒 `#000000` を使わない（ブランドの柔らかさが消える）
- `font-feature-settings: "palt" 1` を適用しない（normal のまま）
- 装飾的なグラデーションやドロップシャドウを多用しない
- 予約ステータスの `#56bbdc` をCTAに流用しない（意味が異なる）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（1〜2カラム商品グリッド） |
| Tablet | 768px – 1024px | タブレットレイアウト（2〜3カラム） |
| Desktop | > 1024px | デスクトップレイアウト（4カラム商品グリッド） |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 16px をそのまま維持
- Josefin Sans 見出しはデスクトップの 70〜80% に縮小（28px -> 20px 程度）
- タグチップは 11px のまま維持、パディングでタッチ領域を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color:     #ee696f (KOSÉ Coral)
Text Color:      #3b4043 (dark gray, NOT pure black)
Background:      #ffffff
Surface:         #f3f3f3, #f7f7f7
Border:          #c8c8c8
Dark Accent:     #3b4043 (secondary CTA)
Info Blue:       #56bbdc (reservation status)
Promo Yellow:    #fbd10b (sale banners)

Display Font:    "Josefin Sans", sans-serif (weight 300, ls 0.18em, English headings only)
Body Font:       "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", "Noto Sans JP", sans-serif
Body Size:       16px
Body Weight:     500
Body Line Height: normal
Letter Spacing:  normal (body) / 0.18em (Josefin Sans) / 0.03em (product info)
Border Radius:   0px (CTA) / 18px (tag chips only)
font-feature-settings: normal (no palt)
Shadow:          none (flat)
```

### プロンプト例

```
KOSÉ（Maison KOSÉ / maison.kose.co.jp）のデザインシステムに従って、商品一覧ページを作成してください。

- プライマリCTA: 背景 #ee696f、テキスト白、border-radius: 0px、13px / weight 600
- テキスト色: #3b4043（純黒は使わない）
- フォント（本文）: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", "Noto Sans JP", sans-serif / 16px / weight 500
- フォント（英語見出し）: "Josefin Sans" / weight 300 / letter-spacing 0.18em（"TREND ITEM", "NEW ARRIVAL" 等）
- 商品カード: ブランドラベル 12px/600/ls 0.03em、商品名 14px/400/ls 0.03em、価格 14px/500/ls 0.03em
- タグチップ: 白地、border 1px solid #c8c8c8、border-radius: 18px（pill）、11px/500
- セクション背景: #f3f3f3 または #f7f7f7（ライトグレー面）
- font-feature-settings: normal（palt は使わない）
- box-shadow: none（フラット。ホバー時のみ控えめな影を許容）
```
