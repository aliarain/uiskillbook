# DESIGN.md — mybest（マイベスト）

> mybest（https://my-best.com/）のデザイン仕様書。
> 日本最大級の商品比較サービス。自社施設で商品を購入・検証し、ランキング形式でおすすめを紹介する。
> 実サイトの computed style 実測（2026-06-21 取得、トップページ＋記事ページ）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白基調のクリーンな情報設計に、**グリーン `#0eb03a` の EC 購入ボタン**と**ウォームゴールド `#fbe8b4` の「徹底比較」バッジ**で、信頼感と購買への即時性を両立する商品比較メディア
- **密度**: 記事ページは本文 14px / lh 1.62 とやや詰めた情報密度。見出しは palt 付きで詰め組み。ランキング一覧は商品カード＋EC ボタン3連（Amazon / 楽天 / Yahoo）が密に並ぶデータドリブンな構成
- **キーワード**: システムフォント、情報密度、ECグリーン、ゴールドバッジ、データドリブン、比較表
- **特徴**:
  - **システムフォントスタック**を採用。Web フォントを一切読み込まず、各 OS のネイティブフォントで高速表示
  - font-family の先頭は `-apple-system, "system-ui"` で始まる Apple 優先のシステムスタック。和文は `"BIZ UDPGothic"` と `"Hiragino Kaku Gothic ProN"` がフォールバック
  - **見出し（h1〜h5）に `font-feature-settings: "palt"` + 正の letter-spacing（0.04em）** を適用。和文の詰め組みと均等なゆとりを両立
  - 本文は palt なし、letter-spacing normal — 見出しとの明確な対比
  - **EC 購入ボタンはグリーン `#0eb03a`** に `box-shadow: inset 0 -4px 0 rgba(0,0,0,0.1)` の凹み影で立体感を出す特徴的なスタイル
  - 「徹底比較」バッジの **ウォームゴールド `#fbe8b4`** がブランドの信頼感を象徴
  - ランキング順位バッジは金 `#f2b50d`（1位）/ 銀 `#738c8c`（2位）/ 銅 `#b36b4d`（3位）のメダル配色
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Accent

- **EC Green** (`#0eb03a`): 商品購入 CTA（Amazon / 楽天 / Yahoo ボタン）の背景。最も目立つアクション色
- **Gold Badge** (`#fbe8b4`): 「徹底比較」バッジの背景。ブランドを象徴するウォームゴールド
- **Orange Accent** (`#ff8800`): ヘッダーのトレンドワード（「ヘアワックスおすすめ」等）のテキスト色。注目誘導
- **Gold Rank** (`#f2b50d`): 1位ランキングバッジの背景
- **Silver Rank** (`#738c8c`): 2位ランキングバッジの背景
- **Bronze Rank** (`#b36b4d`): 3位ランキングバッジの背景

### CTA / Buttons

- **EC Purchase CTA**: 背景 `#0eb03a` / 文字 `#000000` / radius `4px` / box-shadow `inset 0 -4px 0 rgba(0,0,0,0.1)` / padding `0 0 4px`
- **Standard Button**: 背景 `#f7f7f7` / 文字 `#000000` / radius `4px` / border: none
- **Outline Button**: 背景 transparent / 文字 `#000000` / border `1px solid #efefef` / radius `4px`
- **Tab/Filter Active**: 背景 `#f7f7f7` / radius `4px`（「選び方」「ランキング」等のタブ）

### Link

- **Text Link (Green)** (`#0eb03a`): 記事内テキストリンク（「制作・運営ポリシー」等）
- **Breadcrumb** (`#999999`): パンくずリスト・ナビゲーションの非アクティブリンク
- **TOC Link** (`#666666`): 目次リンクの文字色

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#313131` | (49, 49, 49) | 本文・見出しテキスト |
| Text Secondary | `#999999` | (153, 153, 153) | パンくず・補助テキスト |
| Text Muted | `#666666` | (102, 102, 102) | 目次・テーブルヘッダ補助 |
| Surface | `#f7f7f7` | (247, 247, 247) | ボタン背景・目次・フィルター面 |
| Surface Alt | `#fafafa` | (250, 250, 250) | テーブル偶数行のゼブラ |
| Table Header | `#f4fcfe` | (244, 252, 254) | テーブルヘッダの薄いシアン面 |
| Table Header Alt | `#e8f9fd` | (232, 249, 253) | 「詳細情報」ヘッダの濃いシアン面 |
| Table Header Neutral | `#fcfdfd` | (252, 253, 253) | テーブル「商品画像」ヘッダの薄グレー面 |
| Border Light | `#efefef` | (239, 239, 239) | ボタンのアウトラインボーダー |
| Border Card | `#e7e7e7` | (231, 231, 231) | カード枠ボーダー |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード背景 |

### Badge / Tag

- **Popular (Warm)** (`#fff9f3`): 「人気」タグの薄いオレンジ面
- **New (Cool)** (`#f5f9fd`): 「新着」タグの薄いブルー面
- **Popular Sort** (`#f5fcf6`): 「人気順」の薄いグリーン面

### Footer

| Token | hex | 用途 |
|-------|-----|------|
| Footer Dark | `#313131` | フッター上部背景（「監修者」「ガイド」領域）|
| Footer Mid | `#2c2c2c` | フッターリンク領域背景 |
| Footer Bottom | `#111111` | コピーライト領域背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#dc2626` — エラー・警告
- **Success**: `#0eb03a`（EC Green と共通）
- **Warning**: `#ff8800`（Orange Accent と共通）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: システムフォントスタック。`"BIZ UDPGothic"`（Windows 向け上位指定）→ `"Hiragino Kaku Gothic ProN"`（Apple OS）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **システムフォント**: `-apple-system`（Apple）/ `"system-ui"`（クロスプラットフォーム）/ `Roboto`（Android）/ `"Segoe UI"`（Windows）が先頭
- `arial`, `helvetica` がフォールバックに含まれる
- 欧文専用の Web フォントは使用しない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h5, p, a, span, button, input, nav, header, footer） */
font-family: -apple-system, "system-ui", Roboto, "Segoe UI",
  "BIZ UDPGothic", arial, helvetica,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;
```

**フォールバックの考え方**:
- システムフォントファースト。`-apple-system` と `"system-ui"` で各 OS の最適なシステムフォントを優先
- `Roboto` で Android、`"Segoe UI"` で Windows をカバー
- `"BIZ UDPGothic"` が Windows 向けの和文フォールバックとして `arial` / `helvetica` より**上**に置かれている（和文品質を重視）
- 最終フォールバックに `"Hiragino Kaku Gothic ProN"` / `"ヒラギノ角ゴ ProN W3"` で Apple 環境を補完

> **代替フォント注記**: mybest はシステムフォントスタックのため、デザインプレビューでは **Noto Sans JP**（Google Fonts、weight 400 / 700）を使用すると、BIZ UDPGothic / Hiragino Kaku Gothic の中間的な印象で再現できる（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ＋記事ページ、2026-06-21 取得）

| Role | Size | Weight | Line Height | Letter Spacing | palt | Color | 備考 |
|------|------|--------|-------------|----------------|------|-------|------|
| Hero (top) | 48px | 700 | 72px (x1.5) | normal | なし | `#ffffff` | トップページヒーロー「ベストな商品、選ぶなら」（白文字 on 画像） |
| Hero Sub (top) | 18px | 700 | 27px (x1.5) | normal | なし | `#ffffff` | 「徹底した自社検証と専門家の声をもとに」 |
| H1 Article | 30px | 700 | 37.5px (x1.25) | 1.2px (0.04em) | **あり** | `#313131` | 記事ページタイトル |
| H2 Article | 24px | 700 | 30px (x1.25) | 0.96px (0.04em) | **あり** | `#313131` | セクション見出し |
| H2 Large | 30px | 700 | 37.5px (x1.25) | 1.2px (0.04em) | **あり** | `#313131` | ランキング見出し（H1 と同サイズ） |
| H3 Article | 20px | 700 | 25px (x1.25) | 0.8px (0.04em) | **あり** | `#313131` | 中見出し「まずはシリーズをチェック！」 |
| H3 Card (top) | 14px | 700 | 17.5px (x1.25) | 0.56px (0.04em) | **あり** | `#313131` | トップのカード見出し「日焼け止め」 |
| H4 | 18px | 700 | 22.5px (x1.25) | 0.72px (0.04em) | **あり** | `#313131` | 小見出し |
| H5 | 16px | 700 | 20px (x1.25) | 0.64px (0.04em) | **あり** | `#313131` | 補助見出し |
| Body (article) | 14px | 400 | 22.68px (x1.62) | normal | なし | `#313131` | 記事本文 |
| Body (default) | 14px | 400 | 21px (x1.5) | normal | なし | `#313131` | 標準本文 |
| Body Bold | 14px | 700 | 21px (x1.5) | normal | なし | `#313131` | 「商品」等の太字ラベル |
| Caption | 12px | 400 | 18px (x1.5) | normal | なし | `#313131` | カテゴリタグ・フッターリンク |
| Caption Bold | 12px | 700 | 18px (x1.5) | normal | なし | `#313131` | カテゴリ見出し「家電」 |
| Small | 10px | 400 | 13.7px (x1.37) | normal | なし | `#313131` | 「商品比較サービス」ロゴ下テキスト |
| Small Palt | 10px | 400 | 15px (x1.5) | 0.96px (0.096em) | **あり** | `#313131` | 「実際に商品を購入して自社施設で徹底的に比較・検証」 |
| Micro | 8px | 400 | 10px (x1.25) | normal | なし | `#313131` | 「マイページ」アイコンラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **見出し全般（h1〜h5）**: `1.25`（統一。30px/37.5px、24px/30px、20px/25px 等すべて x1.25）
- **記事本文 (14px)**: `1.62`（22.68px / 14px）— 一般的な日本語メディアよりやや詰めた密度
- **標準本文 (14px)**: `1.5`（21px / 14px）
- **キャプション (12px)**: `1.5`（18px / 12px）
- **ヒーロー (48px)**: `1.5`（72px / 48px）— 大きいサイズはゆったり

**字間 (letter-spacing)** — 実測:
- **見出し（h1〜h5）**: **正のトラッキング +0.04em** + `font-feature-settings: "palt"`。palt で字形レベルの詰め組みをしつつ、tracking で均等なゆとりを加える合わせ技
- **本文・キャプション・ボタン**: `normal`（0）
- **Small Palt (10px)**: 例外的に `0.096em` と広い。小さい文字の視認性確保

**ガイドライン**:
- 日本語見出しは **line-height 1.25 + letter-spacing 0.04em + palt** が mybest の基本リズム
- 本文は **line-height 1.5〜1.62 + letter-spacing normal + palt なし** で対比を作る
- 見出しの letter-spacing が正の値（+0.04em）なのが特徴。STORES（-0.02em〜-0.03em の負）とは逆のアプローチ

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: anywhere;
line-break: strict;
```

- ヒーロー見出しは改行位置をコンポーネントで制御
- ボタン内テキスト（「すべてを見る」等）は `white-space: nowrap` 推奨

### 3.7 OpenType 機能

```css
/* 見出し（h1〜h5）— 実測 */
font-feature-settings: "palt";

/* 本文・ボタン・その他 — 実測 */
font-feature-settings: normal;
```

- **見出し専用の palt 適用**が mybest の特徴。h1〜h5 すべてに `"palt"` が設定されている
- 本文・ボタン・キャプション等は `normal`（palt なし）
- 見出しの palt + 正の letter-spacing の組み合わせにより、カーニングの効いた均等スペースの見出しを実現

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**EC Purchase CTA（グリーン 3D）** — 「1,845円 Amazon」「1,175円 楽天市場」「1,402円 ヤフー」
- Background: `#0eb03a`
- Text: `#000000`
- Padding: `0 0 4px`（下の凹み影分を確保）
- Border Radius: `4px`
- Font: System stack, 13.3px, weight 400
- Border: none
- **Box Shadow: `inset 0 -4px 0 rgba(0,0,0,0.1)`**（底辺に凹み影で3Dプレス効果）
- 注: 価格とEC名が改行で2行構成。上段が価格（bold）、下段がEC名

**Standard Button（グレー面）** — 「すべてを見る」「新着おすすめ人気ランキング一覧へ」
- Background: `#f7f7f7`
- Text: `#000000`
- Padding: `0 12px`
- Border Radius: `4px`
- Font: System stack, 13.3px, weight 400
- Border: none

**Outline Button（ボーダーのみ）** — 「参考になった」「参考にならなかった」
- Background: transparent
- Text: `#000000`
- Padding: `0 12px`
- Border Radius: `4px`
- Font: System stack, 13.3px, weight 400
- Border: `1px solid #efefef`

### Badges

**徹底比較バッジ（ウォームゴールド）** — 「徹底比較」
- Background: `#fbe8b4`
- Text: `#313131`
- Border Radius: 小さめ（4px 推奨）
- 出現回数: トップ 20件、記事ページ 5件

**ランキングバッジ**
- 1位: Background `#f2b50d`（ゴールド）/ Text `#ffffff`
- 2位: Background `#738c8c`（シルバー）/ Text `#ffffff`
- 3位: Background `#b36b4d`（ブロンズ）/ Text `#ffffff`
- 4位以降: Background `rgba(49,49,49,0.6)` / Text `#ffffff`

**人気バッジ** — 「人気」
- Background: `#fff9f3`（薄いオレンジ面）

**新着バッジ** — 「新着」
- Background: `#f5f9fd`（薄いブルー面）

### Inputs

- Background: transparent（rgba(0,0,0,0)）
- Border: none（ヘッダー検索バーは枠なし、外側のコンテナで囲む形式）
- Font: System stack, 14px, weight 400
- Color: `#313131`

### Cards / Surfaces

- Background: `#ffffff`（メイン）
- Border: `1px solid #e7e7e7`（商品リンクカード）
- Border Radius: 基本なし（0px）。目次 nav は `4px`
- Shadow: 基本フラット（`box-shadow: none`）

### Tables

- **Header Row**: Background `#fcfdfd`（薄グレー）/ `#f4fcfe`（薄シアン）/ `#e8f9fd`（濃シアン）
- **Body Even Row**: Background `#fafafa`（ゼブラストライプ）
- **Body Odd Row**: Background `#ffffff`
- **Cell Padding**: `0 4px`〜`8px`
- **Border**: テーブル自体の border は `0px none rgb(128,128,128)`
- **Header Font**: 14px / weight 700 / color `#313131`
- **Body Font**: 14px / weight 400 / color `#313131`

### Header

- Background: transparent（rgba(0,0,0,0)）
- Border Bottom: なし（実測）
- Position: fixed or sticky
- Font: 14px / weight 400 / color `#313131`

### Footer

- 3段構成:
  1. **上段** (`#313131`): 「監修者」「ガイド」セクション
  2. **中段** (`#2c2c2c`): サービスリンク一覧
  3. **下段** (`#111111`): コピーライト
- Text: `#313131` の背景に白文字（推奨 `#ffffff`）

### TOC（目次ナビ）

- Background: `#f7f7f7`
- Border Radius: `4px`
- Padding: `16px`
- Link Color: `#666666`
- Font: 12px / weight 400

---

## 5. Layout Principles

### Spacing Scale（推奨 4px/8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | テーブルセルの padding / バッジの内側余白 |
| S | 8px | ボタン内の余白 / 要素間の最小間隔 |
| M | 12px | ボタンの横 padding / カテゴリリスト間 |
| L | 16px | 目次 nav の padding / セクション内間隔 |
| XL | 24px | セクション間の縦余白 |
| XXL | 48px | 大セクション間のゆとり |

### Container

- Max Width: `1200px` 程度（推奨。記事コンテンツはサイドバー付き2カラム）
- Article Content Width: `740px` 程度（メインカラム）
- Sidebar Width: `300px` 程度

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | ボタン・目次ナビ・EC CTA |
| None | 0px | カード・テーブル・見出し下線 |

mybest は角丸を最小限に抑え、4px のみを基本とするフラットなデザイン。ピル型ボタン（9999px）は使用しない。

### Grid

- 記事ページ: 2カラム（メイン + サイドバー）
- トップページ: カテゴリカードのグリッド配置
- ランキング一覧: 1カラム縦積み

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ほぼ全要素（カード・ボタン・ヘッダ・テーブル） |
| EC CTA | `inset 0 -4px 0 rgba(0,0,0,0.1)` | EC 購入ボタンの凹み影（3D プレス効果） |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0,0,0,0.10)` | ドロップダウン・モーダル（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- **例外は EC 購入ボタンの `inset` 影のみ**。これが mybest のビジュアル上の大きな特徴
- 立体感はサーフェスカラーの切り替え（`#ffffff` / `#f7f7f7` / `#fafafa`）とボーダー（`#e7e7e7` / `#efefef`）で表現
- テーブルのゼブラストライプ（`#fafafa` 交互）で視線誘導

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **システムフォントスタック**を使う。Web フォントは読み込まない（`-apple-system, "system-ui", Roboto, "Segoe UI", "BIZ UDPGothic", arial, helvetica, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif`）
- **見出し（h1〜h5）に `font-feature-settings: "palt"` + `letter-spacing: 0.04em`** を必ず適用する
- 本文は `palt: なし` + `letter-spacing: normal` で見出しとの対比を維持する
- 見出しの line-height は **1.25** で統一する
- EC 購入ボタンは **`#0eb03a` + `inset 0 -4px 0 rgba(0,0,0,0.1)` の凹み影**で3D感を出す
- 「徹底比較」バッジは **`#fbe8b4`（ウォームゴールド）**
- テーブルは **ゼブラストライプ**（偶数行 `#fafafa`）を使う
- テーブルヘッダには **薄いシアン面** `#f4fcfe` / `#e8f9fd` を使う
- ランキングバッジは **金銀銅**（`#f2b50d` / `#738c8c` / `#b36b4d`）でメダルカラーを使い分ける
- border-radius は **4px** を基本にする

### Don't（禁止）

- **ピル型ボタン（border-radius 9999px）を使わない** — mybest は一貫して 4px の小角丸
- 見出しに **palt を適用し忘れない** — h1〜h5 すべてに `"palt"` が必要
- **本文に palt を適用しない** — 本文は `normal` を維持
- EC ボタンを **フラット（影なし）にしない** — `inset` の凹み影が mybest の EC ボタンの視覚的特徴
- EC ボタンの文字色を **白にしない** — 実測は `#000000`（黒文字 on グリーン背景）
- **派手な box-shadow**（外向きのドロップシャドウ）を多用しない — mybest はほぼフラット
- フッターを **白背景にしない** — 3段のダークグレー（`#313131` → `#2c2c2c` → `#111111`）が正しい
- テキスト色を **純黒 `#000000` にしない** — mybest のテキストは `#313131`（ボタンテキストのみ `#000000`）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット（2カラム → 1カラムの分岐点） |
| `lg` | 1024px | デスクトップ |

### モバイル時の調整

- H1 Article: 30px → 22〜24px
- H2: 24px → 18〜20px
- 本文サイズは 14px を維持（line-height も 1.5〜1.62 維持）
- 2カラム → 1カラム（サイドバーが下に回る）
- EC ボタンはフルワイド表示
- ヘッダーのカテゴリナビはハンバーガーメニュー化

### タッチターゲット

- EC 購入ボタン: 高さ 44px 以上
- フィルターボタン: 高さ 32px 程度
- アウトラインボタン: 高さ 32px 程度

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
EC Green (購入CTA): #0eb03a
Gold Badge (徹底比較): #fbe8b4
Orange Accent (トレンド): #ff8800
Rank Gold: #f2b50d
Rank Silver: #738c8c
Rank Bronze: #b36b4d
Text Primary: #313131
Text Secondary: #999999
Text Muted: #666666
Surface: #f7f7f7
Surface Alt (zebra): #fafafa
Table Header: #f4fcfe / #e8f9fd
Border Light: #efefef
Border Card: #e7e7e7
White: #ffffff
Footer: #313131 → #2c2c2c → #111111

Font: -apple-system, "system-ui", Roboto, "Segoe UI", "BIZ UDPGothic",
      arial, helvetica, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif
（プレビュー代替提案: Noto Sans JP）

H1: 30px / weight 700 / line-height 1.25 / letter-spacing 0.04em / palt: あり
H2: 24px / weight 700 / line-height 1.25 / letter-spacing 0.04em / palt: あり
H3: 20px / weight 700 / line-height 1.25 / letter-spacing 0.04em / palt: あり
Body: 14px / weight 400 / line-height 1.5〜1.62 / letter-spacing normal / palt: なし
Caption: 12px / weight 400 / line-height 1.5

Border Radius: 4px（唯一の角丸値。ピルなし）
Shadow: 基本 none。EC ボタンのみ inset 0 -4px 0 rgba(0,0,0,0.1)
```

### プロンプト例

```
mybest のデザインに従って、商品比較ランキングページを作成してください。
- フォント: -apple-system, "system-ui", Roboto, "Segoe UI", "BIZ UDPGothic", arial, helvetica, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif
- 記事見出し (h1): 30px / weight 700 / line-height 1.25 / letter-spacing 0.04em / font-feature-settings: "palt" / color #313131
- セクション見出し (h2): 24px / weight 700 / line-height 1.25 / letter-spacing 0.04em / palt
- 本文: 14px / weight 400 / line-height 1.62 / letter-spacing normal / palt なし / color #313131
- 補助テキスト: 12px / weight 400 / line-height 1.5 / color #999999
- EC 購入ボタン: 背景 #0eb03a / 文字 #000 / radius 4px / box-shadow inset 0 -4px 0 rgba(0,0,0,0.1)
- 「徹底比較」バッジ: 背景 #fbe8b4 / 文字 #313131
- ランキングバッジ: 1位 #f2b50d / 2位 #738c8c / 3位 #b36b4d / 4位以降 rgba(49,49,49,0.6) / 文字 白
- テーブルヘッダ: 背景 #f4fcfe / 文字 #313131 / weight 700
- テーブル偶数行: 背景 #fafafa（ゼブラ）
- カード背景: 白 #ffffff、ボーダー 1px solid #e7e7e7
- ボタン: radius 4px（ピルは使わない）
- box-shadow は EC ボタンの inset のみ。他は none
- テキスト色は #313131（純黒 #000000 ではない）
- フッターは3段ダーク: #313131 → #2c2c2c → #111111
```
