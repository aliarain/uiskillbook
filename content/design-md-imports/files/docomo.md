# DESIGN.md — NTT docomo

> NTT docomo（https://www.docomo.ne.jp/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。日本最大の携帯キャリアのコーポレートサイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ドコモレッドを軸とした信頼感のあるコーポレートサイト。カード型UIとやわらかな角丸で親しみやすさを演出。ライトグレー背景に白カードを浮かせるレイヤー構造
- **密度**: 情報量が多いがカード型で整理されている。本文 line-height: 1.5 で標準的な可読性
- **キーワード**: コーポレート、レッドアイデンティティ、カード型UI、やわらかな角丸、親しみやすさ
- **特徴**: ドコモレッド `#cc0033` がヘッダー・ボタンボーダー・アクセントに一貫して使われる。欧文に Roboto を部分的に使用。全体的にシャドウ付きカードで視覚的階層を作っている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **docomo Red** (`#cc0033`): ヘッダー背景、ボタンボーダー、アクセント。ドコモの象徴色
- **Dark Blue** (`#093475`): 被災地支援リンク等、信頼性が求められるコンテキストで使用

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Content** (`#272727`): 見出し・コンテンツテキスト
- **Text Card** (`#333333`): カードリンクテキスト
- **Text Muted** (`#b2b2b2`): 補助テキスト、ポイント単位
- **Background** (`#f3f3f3`): ページ背景（ライトグレー）
- **Surface** (`#ffffff`): カード・ヘッダー等の面
- **Surface Dark** (`#5c5c5c`): 報道発表バッジ背景
- **Footer** (`#272727`): フッター背景
- **Border Faint** (`#d9d9d9`): 区切り線

### Semantic（意味的な色）

- **Light Red** (`#fff2f2`): 注意喚起エリア背景
- **Disabled** (`#757575`): 送信ボタン等の無効状態

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ Pro W3（macOS / iOS）
- メイリオ（Windows）

### 3.2 欧文フォント

- **サンセリフ**: Roboto（Google Fonts、MENU ラベル・ポイント表示等の部分使用）
- **フォールバック**: sans-serif

### 3.3 font-family 指定

```css
/* 本文（和文） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;

/* 欧文アクセント（MENU、ポイント表示） */
font-family: Roboto, sans-serif;
```

**フォールバックの考え方**:
- 和文はシステムフォント依存。ヒラギノ → メイリオの二段構え
- 欧文は Roboto を部分的に使用。MENU ラベル、ポイント数値等のアクセントに限定
- Web フォントの読み込みは最小限に抑えたパフォーマンス重視の設計

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 2 | ヒラギノ角ゴ | 24px | 700 | 36px (x1.5) | normal | セクション見出し、色 #272727 |
| Heading 3 | ヒラギノ角ゴ | 20px | 700 | 30px (x1.5) | normal | サブセクション見出し |
| Body | ヒラギノ角ゴ | 14px | 400 | 21px (x1.5) | normal | 本文テキスト |
| Card Link | ヒラギノ角ゴ | 14px | 700 | 21px (x1.5) | normal | カードリンクテキスト |
| MENU Label | Roboto | 11px | 700 | 11px (x1.0) | 0.99px | ハンバーガーメニューラベル |
| Nav Label | ヒラギノ角ゴ | 12px | 700 | 18px (x1.5) | normal | ヘッダーナビ |
| Notice | ヒラギノ角ゴ | 14px | 700 | 21px (x1.5) | 1px | お知らせ・災害情報テキスト |
| Point Unit | Roboto | 10px | 700 | 10px (x1.0) | normal | ポイント単位「P」 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 全テキスト: `1.5`（21px / 14px）— 統一的な行間設定
- 見出し: `1.5`（30px / 20px）

**字間 (letter-spacing)** — 実測値:
- 本文: `normal`
- MENU ラベル: `0.99px`（0.09em 相当）
- お知らせテキスト: `1px`（0.07em 相当）

**ガイドライン**:
- 行間は全体的に 1.5 で統一されている
- 字間は特殊なラベル要素にのみ適用

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で palt / kern は適用されていない */
font-feature-settings: normal;
```

- palt: 未使用
- kern: 未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Login Button**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cc0033`
- Padding: 8px
- Border Radius: 4px
- Font Size: 12px
- Font Weight: 700

**Card Link（角丸カード型ボタン）**
- Background: `#ffffff`
- Text: `#272727`
- Border: none
- Padding: 4px 26px 4px 13px
- Border Radius: 10px
- Font Size: 14px
- Font Weight: 700
- Shadow: `2px 2px 8px rgba(0,0,0,0.2)`

**Pill Link（お知らせ系）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 8px 8px 6px 24px
- Border Radius: 15px
- Font Size: 15px
- Font Weight: 700

### Inputs

- 検索入力の詳細は未確認（トップページにフォーム要素の露出が少ない）

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 10px
- Padding: 4–13px
- Shadow: `2px 2px 8px rgba(0,0,0,0.2)`

### Badge（報道発表）

- Background: `#5c5c5c`
- Text: `#ffffff`
- Font Size: 推定 12px
- Border Radius: 4px

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 64px |

### Container

- Max Width: 960px（推定）
- Padding (horizontal): 20px

### Grid

- カード型レイアウトが中心
- サービス一覧: 4カラムグリッド
- ニュース一覧: リスト形式

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素 |
| 1 | `2px 2px 8px rgba(0,0,0,0.2)` | カードリンク（デフォルト状態で影あり） |
| 2 | `4px 4px 12px rgba(0,0,0,0.25)` | ホバー時の強調（推定） |

- カード型UIが特徴で、デフォルトでシャドウを持つ要素が多い
- ヘッダーはフラットで、`#cc0033` のベタ塗りで存在感を出す

---

## 7. Do's and Don'ts

### Do（推奨）

- ヘッダーとアクセントには必ずドコモレッド `#cc0033` を使う
- カードリンクには `border-radius: 10px` + シャドウで浮遊感を出す
- 欧文ラベル（MENU、P 等）には Roboto 700 を使う
- 和文テキストはヒラギノ角ゴ → メイリオのフォールバックを守る
- ページ背景は `#f3f3f3` のライトグレー、カード面は `#ffffff` の白
- 本文は 14px / line-height: 1.5 を維持する
- ログインボタンは白地にレッドボーダー（`1px solid #cc0033`）
- フッターは `#272727` のダークグレー背景

### Don't（禁止）

- ドコモレッド `#cc0033` をテキスト色として使わない（背景・ボーダー専用）
- カードの角丸を 4px 以下にしない（10px 以上のやわらかな角丸がブランドの特徴）
- Roboto を和文テキストに使わない（MENU、P 等の欧文ラベル専用）
- フラットなカード（シャドウなし）を使わない（浮遊感がデザインの要）
- 純白 `#ffffff` をページ背景に使わない（`#f3f3f3` を使う）
- letter-spacing を本文に適用しない（normal を維持）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 14px を維持、見出しはデスクトップの 70–80% に縮小
- ハンバーガーメニューに切り替え（MENU ラベル: Roboto 11px 700）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
docomo Red: #cc0033（ヘッダー背景・ボタンボーダー・アクセント）
Dark Blue: #093475（信頼性コンテキスト）

Text Primary: #000000
Text Content: #272727
Text Muted: #b2b2b2
Background: #f3f3f3
Surface: #ffffff
Footer: #272727

JP Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
EN Accent Font: Roboto, sans-serif

Body Size: 14px / line-height: 1.5 / letter-spacing: normal
Heading 2: 24px / 700
Card Radius: 10px / shadow: 2px 2px 8px rgba(0,0,0,0.2)
Login Button: white / border 1px solid #cc0033 / radius 4px
palt: なし
```

### プロンプト例

```
NTT docomo のデザインに従って、サービス一覧ページを作成してください。
- 和文フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
- 欧文ラベル: Roboto, sans-serif（700、MENU 等に使用）
- ヘッダー: 背景 #cc0033、白ロゴ
- ページ背景: #f3f3f3
- カード: 白背景、radius 10px、shadow 2px 2px 8px rgba(0,0,0,0.2)
- テキスト色: #272727
- 見出し: 24px, 700
- 本文: 14px, line-height: 1.5, letter-spacing: normal
- フッター: bg #272727, 白文字
- palt / kern は使わない
```
