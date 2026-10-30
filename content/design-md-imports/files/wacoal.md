# DESIGN.md -- WACOAL (wacoal.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 抽出日: 2026-05-09 / 出典: https://www.wacoal.jp/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1946年創業の日本を代表するインナーウェアブランド。エレガントかつフェミニンなトーンに、ローズピンクのCTAで華やかさを添えた、商品を引き立てる上品な設計
- **密度**: 中密度のブランド型EC。ニュース・コラム・商品カテゴリが整然と並ぶ、ブランドの信頼感を重視したレイアウト
- **キーワード**: エレガント、フェミニン、ローズピンク、シャープ、上品

**設計上のポイント**:
- CTAボタンは角丸なし（border-radius: 0px）でシャープな印象を保つ
- 唯一 HOME ピルナビ（border-radius: 30px）で柔らかいアクセント
- テキストカラーは純黒ではなくダークグレー（`#323334`）で、品のある落ち着きを演出
- 全テキストで一貫した line-height: 1.7 を採用し、日本語の可読性を徹底
- body の font-weight が 500 で、やや太めの安定感のある書体表現
- リンクカラーにブランドバーガンディ（`#920b3b`）を使用し、ローズピンクCTAとの二層構造でブランドカラーを表現

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Wacoal Rose** (`#e67f95`): メインのブランドカラー。ログインボタン、主要CTAに使用。温かみのあるローズピンク
- **Wacoal Burgundy** (`#920b3b`): リンクテキストカラー。深みのあるワインレッドでブランドの格を表現

### Neutral（ニュートラル）

- **Text Primary** (`#323334`): 本文テキスト、ナビゲーション、見出し（`rgb(50, 51, 52)`）。純黒を避けたダークグレー
- **Text Inverse** (`#ffffff`): CTA上の白テキスト、フッター内テキスト
- **Border** (`#e0e0e0`): 区切り線、ディバイダー
- **Input Border** (`#323334`): 入力欄の枠線（テキスト色と同色）
- **Background** (`#ffffff`): ページ全体の基本背景
- **Surface** (`#f6f6f6`): カード面、入力欄背景、セクション背景（91件出現、最頻出面色）
- **Surface Alt** (`#f7f7f7`): 控えめなセクション背景
- **Section BG** (`#ededed`): 見出しセクション背景
- **Header** (`rgba(255,255,255,0.95)`): 半透明ヘッダー背景
- **Footer BG** (`#323334`): ダークフッター背景（テキスト色と同色）

### Quick Swatch

| Token | Value | 役割 |
|-------|-------|------|
| Wacoal Rose | `#e67f95` | CTA・ログイン・メイン強調 |
| Wacoal Burgundy | `#920b3b` | リンクテキスト |
| Text Primary | `#323334` | テキスト・見出し・ナビ |
| Surface | `#f6f6f6` | カード面・入力欄背景 |
| Border | `#e0e0e0` | ディバイダー |
| Footer BG | `#323334` | フッター背景 |
| White | `#ffffff` | 背景・反転テキスト |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体, YuGothic, 游ゴシック, Yu Gothic, ヒラギノ角ゴ ProN, ヒラギノ角ゴ Pro, ヒラギノ角ゴシック, メイリオ, sans-serif
- **明朝体**: 使用なし（全体をゴシック体で統一）

### 3.2 欧文フォント

- **サンセリフ**: 和文フォントの内蔵グリフに依存（欧文専用フォント指定なし）
- **等幅**: 未定義

> **Web配信に関する注記**:
> - `游ゴシック体` / `Yu Gothic` は Web フォントとして配信されていない。OS インストール済みフォントにフォールバック
> - 環境を問わず確実に和文を表示したい場合は、`Noto Sans JP`（Google Fonts）を Web フォントとしてフォールバックチェーンに追加するのが安全
> - 英語専用のディスプレイフォントは使用していない。和文フォントの欧文グリフで統一

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic",
             "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro",
             "Hiragino Sans", Meiryo, "メイリオ", sans-serif;
```

**フォールバックの考え方**:
- 和文フォント（游ゴシック系）を軸に、ヒラギノ角ゴ ProN / Pro をmacOS保険、メイリオをWindows保険として配置
- ヒラギノは ProN（JIS X 0213:2004 字形）と Pro（JIS X 0208 字形）の両方を指定
- Hiragino Sans も併記し、macOS 10.11 以降の新名称に対応
- 欧文専用フォントを先頭に置かない構成（和文フォント内蔵の欧文グリフを使用）

### 3.4 文字サイズ・ウェイト階層

実測値に基づく主要階層（wacoal.jp トップページ計測）:

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Heading | Yu Gothic | 32px | 400 | 1.7 | normal | セクション大見出し |
| Heading 2 | Yu Gothic | 24px | 400 | 1.7 | normal | コンテンツ見出し |
| Heading 2 Bold | Yu Gothic | 24px | 700 | 1.7 | normal | 強調見出し |
| Heading 3 | Yu Gothic | 24px | 400 | 1.7 | normal | サブ見出し |
| Span Section | Yu Gothic | 20px | 500 | 1.7 | normal | セクション内スパン |
| Body | Yu Gothic | 16px | 500 | 1.7 | normal | 本文テキスト |
| Login CTA | Yu Gothic | 18px | 500 | normal | normal | ログインボタン |
| Category Badge | Yu Gothic | 16px | 500 | normal | normal | カテゴリバッジ |
| Small | Yu Gothic | 14px | 500 | 1.7 | normal | 補足テキスト |
| Nav Header | Yu Gothic | 24px | 500 | 1.7 | normal | ヘッダーナビ |
| Nav Footer | Yu Gothic | 12px | 500 | 1.7 | normal | フッターナビ |
| Copyright | Yu Gothic | 12px | 500 | 1.7 | normal | フッター著作権表示 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.7`（全テキスト要素で統一。日本語の可読性を重視した広めの設定）
- **見出しの行間**: `1.7`（本文と同じ比率を維持）
- **本文の字間 (letter-spacing)**: `normal`（明示的な指定なし）
- **見出しの字間**: `normal`

**ガイドライン**:
- 全テキスト要素で line-height: 1.7 を統一している点がワコールの特徴。見出しも本文もリズムが揃う
- letter-spacing は全体で normal。意図的に字間を広げていない
- 日本語本文の 1.7 は可読性の高い設定で、インナーウェアブランドの丁寧な印象に合致

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
- インナーウェアブランドとして装飾的なフォント機能を抑制し、可読性と清潔感を優先

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ローズピンク）**
- Background: `#e67f95`
- Text: `#ffffff`
- Padding: 7.2px 18px
- Border Radius: `0px`
- Font Size: 18px
- Font Weight: 500
- 「ログイン」「新規会員登録」等のメインアクション

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#323334`
- Border: `1px solid #323334`
- Padding: 10px 24px
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 500
- 「WEB STORE」等の副次的アクション

**HOME Pill**
- Background: `transparent`
- Text: `#ffffff`
- Border Radius: `30px`
- Font Size: 14px
- 唯一の pill 形状。ナビゲーション内で使用

**Category Badge**
- Background: `#ffffff`
- Text: `#323334`
- Padding: 0 8px
- Border Radius: `0px`
- Font Size: 16px
- Font Weight: 500
- カテゴリラベル表示

### Inputs

- Background: `#f6f6f6`
- Border: `1px solid #323334`
- Border (focus): `1px solid #920b3b`（推奨: バーガンディで強調）
- Border Radius: `3px`
- Padding: 10px 12px
- Font Size: 16px
- Font Weight: 400
- Height: 44px（タッチターゲット基準）

### Cards（ニュース・コンテンツカード）

- Background: `#f6f6f6`
- Border: なし
- Border Radius: `0px`
- Padding: 16px
- Shadow: なし（フラット）

---

## 5. Layout Principles

### Spacing Scale（推定・8px ベース）

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 4px | アイコンとテキストの間隔 |
| S | 8px | 要素内の最小余白、バッジパディング |
| M | 16px | カード内パディング、リスト項目間 |
| L | 24px | セクション内コンテンツ間隔 |
| XL | 40px | セクション間余白 |
| XXL | 64px | ヒーロー領域パディング |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 16px（モバイル）〜 40px（デスクトップ）

### Grid

- Columns: 可変（ニュースカード 3列、商品カテゴリ 4列等）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | フラットな要素（デフォルト） |
| 1 | `0 2px 4px rgba(0,0,0,0.06)` | カードのホバー（推奨） |
| 2 | `0 4px 12px rgba(0,0,0,0.08)` | モーダル・ドロップダウン（推奨） |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | ダイアログ（推奨） |

> 実装方針: 基本はフラット。面色（`#f6f6f6`）でカードを区切る手法が主体。ホバー時に Level 1 程度の影を足すのみ。

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA ボタンには `#e67f95`（Wacoal Rose）を使い、`border-radius: 0px` を維持する
- テキスト色は `#323334` を使い、純黒 `#000000` を避ける
- リンクテキストには `#920b3b`（Wacoal Burgundy）を使い、CTA のローズピンクと差別化する
- line-height は全テキスト要素で `1.7` を維持し、統一されたリズムを保つ
- body の font-weight は `500` を使い、安定感のある文字表現にする
- 面背景には `#f6f6f6` のライトグレーを使い、セクション・カードを区切る
- 入力欄の border-radius は `3px` にし、CTAのシャープさとわずかに区別する
- フッターは `#323334` の暗い背景に `#ffffff` テキストで締める

### Don't（禁止）

- CTA ボタンに角丸を加えない（pill は HOME ナビ専用）
- 本文テキストに純黒 `#000000` を使わない（ブランドの柔らかさが消える）
- Wacoal Rose `#e67f95` を本文テキストに使わない（コントラスト不足）
- リンク色に `#e67f95` を使わない（`#920b3b` バーガンディと使い分ける）
- `font-feature-settings: "palt" 1` を適用しない（normal のまま）
- line-height を要素ごとに変えない（全体で 1.7 を統一）
- 装飾的なグラデーションやドロップシャドウを多用しない
- ヘッダーナビの font-size を 24px 以外にしない（実測値に準拠）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（1カラム） |
| Tablet | 768px -- 1024px | タブレットレイアウト（2カラム） |
| Desktop | > 1024px | デスクトップレイアウト（3〜4カラム） |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 16px をそのまま維持
- セクション見出し（32px）はデスクトップの 70〜80% に縮小（32px -> 24px 程度）
- line-height: 1.7 はレスポンシブでも維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color:     #e67f95 (Wacoal Rose)
Link Color:      #920b3b (Wacoal Burgundy)
Text Color:      #323334 (dark gray, NOT pure black)
Background:      #ffffff
Surface:         #f6f6f6
Border:          #e0e0e0
Input Border:    #323334
Footer BG:       #323334
Header BG:       rgba(255,255,255,0.95)

Body Font:       "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic",
                 "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro",
                 "Hiragino Sans", Meiryo, "メイリオ", sans-serif
Body Size:       16px
Body Weight:     500
Body Line Height: 1.7
Letter Spacing:  normal (all elements)
Border Radius:   0px (CTA) / 3px (input) / 30px (HOME pill only)
font-feature-settings: normal (no palt)
Shadow:          none (flat)
```

### プロンプト例

```
WACOAL（wacoal.jp）のデザインシステムに従って、商品カテゴリページを作成してください。

- プライマリCTA: 背景 #e67f95（Wacoal Rose）、テキスト白、border-radius: 0px、18px / weight 500
- リンクテキスト: #920b3b（Wacoal Burgundy）
- テキスト色: #323334（純黒は使わない）
- フォント: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", "Hiragino Sans", Meiryo, "メイリオ", sans-serif / 16px / weight 500
- line-height: 全要素で 1.7 を統一
- カード面: #f6f6f6、border-radius: 0px
- 入力欄: bg #f6f6f6、border 1px solid #323334、radius 3px
- font-feature-settings: normal（palt は使わない）
- box-shadow: none（フラット。ホバー時のみ控えめな影を許容）
- フッター: bg #323334、テキスト #ffffff
```
