# DESIGN.md — LUSH Japan

> LUSH Japan（https://www.lush.com/jp/ja）のデザイン仕様書。
> 英国発ハンドメイドコスメブランドの日本語サイト。
> CSS Custom Properties および computed style 実測値に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ダーク＆イマーシブ。黒い背景がカラフルな商品写真を引き立てる「劇場型」レイアウト。遊び心のある手書き風ディスプレイフォントと、無機質なダークUIのコントラストが LUSH らしさを生む
- **密度**: フルブリードの大きなビジュアルセクション。商品画像が主役で、テキストは最小限
- **キーワード**: シアトリカル、プレイフル、イマーシブ、ダーク、カラフル
- **特徴**: 商品名（Rose Jam, Sleepy, Twilight 等）がそのまま CSS 変数名になっている独自の設計トークン体系。純粋な `#000000` をページ背景に使用し、極めて高コントラスト。手書き風フォント「handwritten」をセクション見出しに使い、ハンドメイドの世界観を表現

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000` / `--black`): ページ背景、ブランドの基調色。LUSH のダークモードがデフォルト
- **White** (`#ffffff` / `--white`): 暗い背景上の主要テキスト色、CTA ボタン背景

### Neutral（ニュートラル — 黒から白までの階調）

| Token | Hex | 用途 |
|-------|-----|------|
| Black | `#000000` | ページ背景 |
| Liquorice | `#212121` | ニアブラック面、カード背景 |
| Charcoal | `#333333` | セカンダリダーク面 |
| Slate | `#464646` | ミディアムダーク |
| Smoke | `#5e5e5e` | ミディアムグレー |
| Shadow | `#757575` | ボーダー、影、区切り線 |
| Stone | `#8f8f8f` | ライトグレー、補助テキスト |
| Silver | `#cbcbcb` | 薄いボーダー |
| Cloud | `#f4f2f4` | ライト面 |
| Disabled | `#f5f3f5` | 無効状態の面 |
| Buttermilk | `#fbf9ef` | ウォームクリーム面（温かみのある白） |
| Dove | `#fafbfc` | ニアホワイト面 |
| White | `#ffffff` | テキスト、CTA 背景 |

### Semantic（意味的な色）

- **Error** (`#eb0000` / `--error`): エラー、バリデーション失敗。ダーク面用: `#ff7024`
- **Success** (`#138645` / `--success`): 成功、完了。ダーク面用: `#0b5d45`
- **Warning** (`#ffe838` / `--warning`): 警告、注意喚起。ダーク面用: `#9e8d10`
- **Focus** (`#535afa` / `--focus`): フォーカスリング。代替: `#7b7afa`

### Accent（アクセント）

- **Amber** (`#e95708`): ウォームアクセント、プロモーション等
- **Club Green** (`#0db14b`): Lush Club メンバーシップのブランド色
- **Club Yellow** (`#ffe838`): Lush Club のアクセント

### Product Colors（商品名をトークン名にした独自パレット）

LUSH 独自の設計として、商品名がそのまま CSS 変数名になっている。プロモーションやキャンペーンページで対応する商品のテーマカラーとして使用する。

| Product | Base | Shade 1 | Shade 2 |
|---------|------|---------|---------|
| Rose Jam | `#fd726f` | `#ff9d9d` | `#feeeee` |
| Sleepy | `#bd8dc8` | `#a971b7` | `#dabbe1` |
| Twilight | `#ec58a5` | `#f49fcb` | `#ffdde9` |
| Good Karma | `#ffa379` | `#ffcdb6` | `#fef3ee` |
| Intergalactic | `#00b7d5` | `#6bcada` | `#c5e6ec` |
| Magnaminty | `#a2c9a4` | `#c2e1c4` | `#e0ede0` |
| Rosy Cheeks | `#d7aea9` | `#f4cfc6` | — |
| Skin Drink | `#f4d9b9` | `#f8cb98` | — |
| Synaesthesia | `#061455` | `#2e4090` | `#8293de` |

その他単色: Whoosh Yellow `#ffff54`, Ultrabland `#fcf0e3`, Oat `#e9e4c0`, Peace `#d5d0b8`, Porridge `#bab69a`

### Text（テキスト色）

- **Text on Dark** (`#ffffff`): ダーク背景上のテキスト（デフォルト）
- **Text on Light** (`#000000`): ライト面上のテキスト
- **Text Secondary** (`#8f8f8f` / Stone): 補助テキスト、メタ情報
- **Text Disabled** (`#5e5e5e` / Smoke): 無効状態のテキスト

---

## 3. Typography Rules

### 3.1 和文フォント

LUSH Japan はグローバルサイトの統一デザインを採用しており、和文専用のフォント指定はない。Inter のフォールバック `sans-serif` により OS デフォルトゴシック体が適用される：
- macOS: ヒラギノ角ゴシック
- Windows: メイリオ / Yu Gothic UI

### 3.2 欧文フォント

- **サンセリフ（本文）**: Inter — Google Fonts。見出し・本文・UI すべてに使用
- **ディスプレイ（手書き風）**: `handwritten` — LUSH 独自のカスタム Web フォント。セクション見出しやキャンペーンタイトルに使用。ハンドメイドの世界観を表現する
- **等幅**: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

### 3.3 font-family 指定

```css
/* 本文・UI（グローバル） */
font-family: inter, sans-serif;

/* ディスプレイ（セクション見出し・キャンペーン） */
font-family: "handwritten", sans-serif;

/* 等幅 */
font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

**フォールバックの考え方**:
- Inter を単独指定（CSS 変数 `--font-inter`）。フォールバックは `sans-serif` のみ
- `handwritten` は LUSH 独自の Web フォントで外部では使用不可。**preview.html では Google Fonts の Caveat（または Patrick Hand）で代替する**
- 和文はすべて OS デフォルトにフォールバック。Inter が和文グリフを含まないため、日本語は OS のゴシック体で表示される

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | handwritten | 40px | 700 | 1.1 (44px) | 0 | セクション見出し「New Products」等 |
| Heading 2 (Large) | Inter | 30px | 700 | 1.33 (39.99px) | -0.5px | 主要見出し |
| Heading 2 (Small) | Inter | 20px | 700 | 1.5 (30px) | 0 | サブセクション見出し |
| Heading 3 | Inter | 18px | 700 | 1.56 (28px) | 0 | 小見出し |
| Body | Inter | 16px | 400 | 1.5 (24px) | 0 | 本文（`--font-inter`） |
| Body Small | Inter | 14px | 400 | 1.14–1.71 (16–24px) | 0 | 商品説明、補足テキスト |
| Caption/Badge | Inter | 12px | 700 | — | 1px | バッジ、ラベル、カテゴリタグ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（16px / 24px）。日本語としては標準的
- **見出しの行間**: 1.1（Display）〜 1.56（H3）。ディスプレイサイズはタイトに詰める
- **本文の字間 (letter-spacing)**: 0（指定なし）。Inter は元々字間が広めのため追加の `letter-spacing` は不要
- **見出しの字間**: H2 Large のみ `-0.5px`。大きいサイズではネガティブスペーシングで引き締める
- **バッジの字間**: `1px`（全角換算約 0.08em）。キャップスタイルのラベルで視認性を確保

**ガイドライン**:
- LUSH はグローバルサイトの統一デザインのため、日本語特有の `letter-spacing` 調整（0.04em 等）は行っていない
- 日本語本文の `line-height: 1.5` はやや狭めだが、短い商品説明文が中心のため許容範囲

### 3.6 禁則処理・改行ルール

```css
/* サイトで観測される設定 */
word-break: break-all;
overflow-wrap: break-word;
```

特別な禁則処理の指定は観測されない。グローバルサイトの汎用設定に依存。

### 3.7 OpenType 機能

```css
/* palt / kern の適用なし */
```

- LUSH Japan では `font-feature-settings` の指定がない
- Inter は欧文フォントのため `palt`（プロポーショナル字詰め）は不要
- 和文は OS デフォルトフォントにフォールバックするため、OpenType 機能は適用されない

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

LUSH のボタンはすべてピル型（大きな border-radius）。角ばったボタンは使用しない。

**Primary（白背景 CTA）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 19px 24px
- Border Radius: 40px（ピル型）
- Font Size: 16px（推定）
- Font Weight: 600

**Search Button（ピル型）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 8px 20px
- Border Radius: 9999px（完全ピル型）
- Font Size: 14px
- Font Weight: 400

**Category Pill（カテゴリフィルター）**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#757575`
- Padding: 8px 20px
- Border Radius: 23px

**Ghost / Cookie Button（透明ボタン）**
- Background: transparent
- Text: `#ffffff` or `#000000`
- Border: 1px solid `#757575`
- Padding: 8px 20px
- Border Radius: 50px

### Inputs

- Background: `#ffffff`（ライト面）/ `#212121`（ダーク面）
- Border: 1px solid `#757575`
- Border (focus): 2px solid `#535afa`
- Border Radius: 8px
- Padding: 12px 16px
- Font Size: 16px
- Font Family: inter, sans-serif

### Cards（商品カード）

- Background: `#000000`（ダーク）/ `#ffffff`（ライト）
- Border: none
- Border Radius: 0px（商品画像はエッジトゥエッジ）
- Padding: 16px（テキストエリアのみ）
- Shadow: none — フラットデザイン。ダーク背景上では陰影不要

### Badges / Tags

- Background: 商品テーマカラー（Rose Jam `#fd726f`, Sleepy `#bd8dc8` 等）
- Text: `#000000` or `#ffffff`（背景色に応じて）
- Font Size: 12px
- Font Weight: 700
- Letter Spacing: 1px
- Border Radius: 4px
- Padding: 4px 8px
- Text Transform: uppercase（英語ラベルの場合）

---

## 5. Layout Principles

### Spacing Scale

LUSH のスペーシングは 4px ベースのグリッド。

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |
| XXXL | 64px |

### Container

- Max Width: 1920px（`--site-width: 120rem`）
- Padding (horizontal): 16px（モバイル）/ 24px（タブレット）/ 48px（デスクトップ）

### Grid

- 商品グリッド: 2列（モバイル）→ 3列（タブレット）→ 4列（デスクトップ）
- Gutter: 16px
- フルブリードセクション: 画面幅いっぱいのヒーロー画像・プロモーションバナー

### Header

- Height: 99px（`--header-height: 99px`）
- Background: `#000000`
- Position: sticky

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 通常の要素。LUSH はフラットデザインが基本 |
| 1 | `0 2px 4px rgba(0,0,0,0.2)` | ドロップダウンメニュー |
| 2 | `0 4px 16px rgba(0,0,0,0.3)` | モーダル、オーバーレイ |
| 3 | `0 8px 32px rgba(0,0,0,0.4)` | フローティング要素 |

**注意**: ダーク背景（`#000000`）上では影がほぼ見えないため、elevation よりもコンテンツの色差・ボーダーで層を表現する。ライト面（Buttermilk, Cloud 等）上でのみ shadow を使用する。

### Scroll Animations

- **Fade**: `opacity: 0 → 1`（CSS 変数によるスクロール連動）
- **Scale**: `transform: scale(0.7) → scale(1)`
- 商品カードやセクション見出しの出現に使用。劇場的な演出を生む

### Swiper Navigation

- `--swiper-navigation-size: 44px`
- `--swiper-theme-color: #007aff`
- 商品カルーセル、キャンペーンスライダーで使用

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景は `#000000` を基本とし、カラフルな商品画像を引き立てるダークステージとして使う
- ボタンは必ずピル型（border-radius 23px 以上）にする。LUSH に角ばったボタンは存在しない
- 商品テーマカラー（Rose Jam, Sleepy 等）をプロモーション素材に積極的に使い、商品の世界観を表現する
- ディスプレイ見出しには手書き風フォント（handwritten / Caveat）を使い、ハンドメイド感を出す
- フルブリードの商品画像をセクション間に配置し、没入感のあるスクロール体験をつくる
- フォーカスリングは `#535afa` を使い、ダーク背景上でも視認できるようにする
- Inter の `font-family` 指定はシンプルに `inter, sans-serif` とする（CSS 変数 `--font-inter`）

### Don't（禁止）

- ボタンに `border-radius: 0` や `border-radius: 4px` を使わない。LUSH のボタンは常にピル型
- ダーク背景上で `#000000` のテキストを使わない（見えない）。ダーク面では必ず `#ffffff` を使う
- 商品テーマカラーをブランドカラーと混同しない。ブランドカラーは黒と白であり、商品色はキャンペーン用
- `letter-spacing` に `palt` を適用しない。Inter は欧文フォントで和文の `palt` は不要
- ライト面（Buttermilk `#fbf9ef` 等）をメイン背景に多用しない。LUSH はダーク基調のサイト
- 手書き風フォントを本文テキストに使わない。手書き風はディスプレイサイズの見出しのみ
- 商品カードに box-shadow を付けない。ダーク背景上ではフラットなカードが正しい

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1列 / 2列レイアウト。ハンバーガーメニュー |
| Tablet | 768–1023px | 2〜3列グリッド |
| Desktop | ≥ 1024px | 最大4列グリッド。フルナビゲーション |
| Wide | ≥ 1440px | サイト幅 120rem（1920px）まで拡張 |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準、Swiper ナビゲーションサイズと一致）
- ピル型ボタンの最小パディング: 8px 20px

### フォントサイズの調整

- モバイルでは Display 見出しを 28–32px に縮小（デスクトップ 40px）
- H2 Large は 24px に縮小（デスクトップ 30px）
- 本文は 14–16px で維持
- Header height はモバイルでも 99px を維持（`--header-height`）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #000000 (dark stage)
Text on Dark: #ffffff
Text on Light: #000000
Warm Surface: #fbf9ef (Buttermilk)
Font (Body): inter, sans-serif
Font (Display): "handwritten", sans-serif → Google Fonts: Caveat
Body Size: 16px
Line Height: 1.5
Button Shape: pill (border-radius: 40px+)
CTA Color: #ffffff bg, #000000 text
Focus Ring: #535afa
Site Width: 1920px (120rem)
```

### プロンプト例

```
LUSH Japan のデザインシステムに従って、商品一覧ページを作成してください。
- ページ背景: #000000（純粋な黒）
- テキスト: #ffffff（白）
- フォント: inter, sans-serif（本文）/ "Caveat", cursive（セクション見出し）
- 商品カード: 黒背景、影なし、エッジトゥエッジの商品画像
- CTAボタン: 白背景、黒テキスト、border-radius: 40px（ピル型）
- カテゴリフィルター: 黒背景、白テキスト、border: 1px solid #757575、border-radius: 23px
- グリッド: 4列（デスクトップ）/ 2列（モバイル）
- スペーシング: 4px ベースのグリッド（16px, 24px, 32px を多用）
```

### 商品テーマカラーの使い方

```
キャンペーンページで Rose Jam をフィーチャーする場合:
- アクセントカラー: #fd726f（Rose Jam ベース）
- 背景グラデーション: #fd726f → #feeeee（Rose Jam Shade 2）
- ボタンホバー: #ff9d9d（Rose Jam Shade 1）

ただしページ背景は常に #000000 を維持し、
商品テーマカラーはアクセントとして部分的に使用する。
```
