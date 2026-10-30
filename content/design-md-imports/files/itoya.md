# DESIGN.md — 銀座 伊東屋（ITOYA）

> 銀座 伊東屋（https://www.ito-ya.co.jp/）のデザイン仕様書。
> 1904年創業の老舗文房具専門店。銀座本店を中心に、上質な文房具とライフスタイル雑貨を取り扱う。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ダークヘッダー（`#333333`）＋ライトグレーボディ（`#f0f0f0`）の強いコントラストで、老舗の格式と清潔感を両立。ブランドレッド `#c70b17` は差し色として控えめに使い、文房具店らしい落ち着きを保つ
- **密度**: 本文 18px / line-height 1.8 と大きめ。カード型の商品一覧で視覚的に整理し、余白を広くとった回遊型レイアウト
- **キーワード**: 老舗の品格、建築的な直線（radius 0px）、欧文リードの知性、温かみのあるアース系副色、クリーンなグレースケール
- **特徴**:
  - 欧文フォントに **Open Sans** をリードとして採用。1904年創業の老舗でありながら、グローバルな清潔感を意識した選択
  - 和文は**游ゴシック**を基本に、キャッチフレーズ等の大きなディスプレイテキストには**ヒラギノ角ゴ ProN W3** を単独指定
  - **ボタン・カードは一切角丸なし**（border-radius: 0px）。銀座本店の建築を想起させるシャープで端正な印象
  - ブランドレッド `#c70b17` はカートバッジやアクセントに限定使用。主要CTAは黒ベタ
  - 副色にウォームブラウン `#a57658` とベージュ `#decbac` を持ち、文房具・革小物の温もりを表現
  - CSS Custom Properties を使わない伝統的なCSS構成
  - `font-feature-settings` の指定なし（palt 未適用）
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **ITOYA Red** (`#c70b17`): 伊東屋のブランドレッド。カートバッジ、セール表示、ブランドアクセントに使用。主要CTAには使わない
- **Warm Brown** (`#a57658`): 革小物・プレミアム感の演出。セクション見出しの装飾やカテゴリアイコンに使用
- **Warm Beige** (`#decbac`): 紙・ナチュラル素材を連想させる面色。バナーやプロモーション領域の背景
- **Green Accent** (`#73ba66`): 在庫あり・新入荷等のポジティブな状態表示

### CTA / Buttons

- **Primary CTA**: 背景 `#000000` / 文字 `#ffffff` / radius `0px` / font-weight 700 / font-size 16px
- **Secondary CTA（Outline）**: 背景 `#ffffff` / 文字 `#000000` / border `1px solid #000000` / radius `0px` / font-weight 700 / font-size 16px
- **Clear**: 背景 `#ffffff` / 文字 `#000000` / border `1px solid #000000` / radius `0px`

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#000000` | テキスト・Primary CTA背景 |
| Header Dark | `#333333` | ヘッダー・ナビゲーション背景 |
| Text Secondary | `#999999` | 補助テキスト・ラベル |
| Content BG | `#f0f0f0` | ページ本体の背景 |
| Card Surface | `#ffffff` | カード・モーダルの面 |
| Border | `#000000` | ボタンのボーダー |
| Border Light | `#f0f0f0` | セクション間の区切り |

### Semantic（推奨値）

実サイトには明確なエラー／成功色のUI要素が確認できなかった。推奨補完値:

- **Danger**: `#c70b17`（Brand Red を流用）
- **Success**: `#73ba66`（Green Accent を流用）
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック体**（YuGothic）を基本とし、ヒラギノ角ゴ ProN W3 をフォールバック
- **ディスプレイ専用**: **ヒラギノ角ゴ ProN W3** をキャッチフレーズ等の大きなテキストに単独使用（游ゴシックのフォールバックなし）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Open Sans**（Google Fonts）をリードフォントとして採用。本文・見出し問わず先頭に配置
- 英字のみのセクション見出しには Open Sans 単独指定（和文フォールバックなし）
- 純粋に欧文のみで構成されるテキスト（"NEW ARRIVAL" 等）も Open Sans

### 3.3 font-family 指定

```css
/* 本文・見出し（和欧混植） */
font-family: "Open Sans", 游ゴシック体, YuGothic, "游ゴシック Medium",
  "Yu Gothic Medium", 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック",
  "MS PGothic", sans-serif;

/* 英字見出し専用 */
font-family: "Open Sans", sans-serif;

/* ディスプレイ（キャッチフレーズ） */
font-family: "ヒラギノ角ゴ ProN W3";
```

**フォールバックの考え方**:
- Open Sans を先頭に置くことで、欧文部分はすべて Open Sans のグリフで描画される（游ゴシックの欧文グリフは使われない）
- 和文は游ゴシック体 → YuGothic → Medium ウェイト指定 → ヒラギノ → メイリオ → MS P ゴシックの順で、Windows / macOS / 旧環境を広くカバー
- **Windows の游ゴシック問題**: `游ゴシック Medium` / `Yu Gothic Medium` を挟むことで、Windows 環境での細すぎる表示を回避している
- キャッチフレーズのヒラギノ角ゴ ProN W3 単独指定は、macOS / iOS ユーザーに限定した演出（Windows では代替フォントにフォールバック）

> **代替フォント注記**: Open Sans は Google Fonts で配信されており、ライセンス制限なし。游ゴシックはシステムフォントのため preview.html でも表示可能。ヒラギノ角ゴ ProN W3 は macOS / iOS のシステムフォントのため、Windows 環境では Noto Sans JP 等への代替が必要。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Section（日本語） | Open Sans + 游ゴシック | 30px | 700 | 36px (1.2) | normal | `#000000` | セクション見出し |
| H2 Section（英字） | Open Sans | 34px | 700 | 47.6px (1.4) | 0.34px (0.01em) | `#000000` | 英字セクションラベル |
| Display（キャッチ） | ヒラギノ角ゴ ProN W3 | 30px | 700 | 54px (1.8) | normal | `#000000` | キャッチフレーズ |
| Sub Display | ヒラギノ角ゴ ProN W3 | 25px | 700 | 45px (1.8) | normal | `#000000` | サブキャッチ |
| Body | Open Sans + 游ゴシック | 18px | 400 | 32.4px (1.8) | normal | `#000000` | 本文（大きめ） |
| Caption / Label | Open Sans + 游ゴシック | 14px | 400 | 21px (1.5) | normal | `#999999` | 補足テキスト・価格ラベル |
| Filter Select | Open Sans + 游ゴシック | 16px | 400-700 | 43px (2.69) | normal | `#000000` | 絞り込みUI |
| Footer Text | Open Sans + 游ゴシック | 18px | 700 | 32.4px (1.8) | normal | `#ffffff` | フッターリンク |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.8`。日本語本文としてはゆったりめで、商品説明文の可読性を重視
- **見出しの行間**: `1.2`（日本語セクション見出し）、`1.4`（英字見出し）、`1.8`（ディスプレイ / キャッチフレーズ）
- **本文の字間 (letter-spacing)**: `normal`（ゼロ）。palt 未適用のため、全角幅で均等に並ぶ
- **英字見出しの字間**: `0.01em`（わずかにトラッキング）

**ガイドライン**:
- 本文 18px は通常のWebサイトよりやや大きい。文房具カタログとして、文字そのものの美しさを見せる意図がある
- letter-spacing / palt ともに未適用。ベタ組みの端正さを活かしたデザイン
- 英字見出しの `0.01em` は極めて控えめなトラッキングで、ほぼベタ組みと同等

### 3.6 禁則処理・改行ルール

```css
/* 実測（明示的な指定なし — ブラウザデフォルト） */
word-break: normal;
overflow-wrap: break-word;
```

サイト側で明示的な禁則処理の指定は確認できなかった。ブラウザデフォルトの禁則処理に依存。

### 3.7 OpenType 機能

```css
/* 指定なし */
font-feature-settings: normal;
```

- `palt` 未適用。全角文字は等幅で並ぶ
- `kern` も明示指定なし（Open Sans のカーニングはブラウザデフォルトで有効）
- 文房具店らしい「整った」印象を、ベタ組みで実現している

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Primary（黒ベタ）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 12px 32px（推定）
- Border Radius: `0px`（角丸なし）
- Font Size: 16px
- Font Weight: 700

**Secondary（アウトライン）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: 12px 32px（推定）
- Border Radius: `0px`（角丸なし）
- Font Size: 16px
- Font Weight: 700

**特徴**: radius 0px の四角いボタンが伊東屋の統一意匠。pill ボタンは使わない。

### Inputs

- Background: `#ffffff`
- Border: `1px solid #999999`（推定）
- Border (focus): `1px solid #333333`（推定）
- Border Radius: `0px`
- Padding: 8px 12px
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: `0px`
- Padding: 0（画像上・テキスト下の構成）
- Shadow: なし（フラット）
- ホバー時: 微弱なシャドウ追加

### Carousel Dots

- 形状: circle（`border-radius: 50%`）
- Border: `1px solid #333333`
- アクティブ時: 塗りつぶし

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
| XXL | 64px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 20px

### Grid

- 商品一覧: 3〜4カラムグリッド
- Gutter: 20px
- カード型レイアウトで画像→テキストの縦並び

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 通常のカード・ボタン（フラットが基本） |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カードホバー時 |
| 2 | `0 4px 16px rgba(0,0,0,0.12)` | ドロップダウン・ポップオーバー |
| 3 | `0 8px 32px rgba(0,0,0,0.16)` | モーダル・ダイアログ |

**特徴**: 基本はフラットデザイン。影はインタラクション時のフィードバックとして控えめに使う。

---

## 7. Do's and Don'ts

### Do（推奨）

- ボタン・カードの角は `border-radius: 0px` を維持する（伊東屋の建築的アイデンティティ）
- 欧文は Open Sans を先頭に配置し、和文（游ゴシック）より優先する
- ブランドレッド `#c70b17` はアクセントに限定し、面積を抑える
- 本文 18px / line-height 1.8 の大きめ設定を守る
- ダークヘッダー `#333333` とライトグレーボディ `#f0f0f0` のコントラストを保つ
- 商品画像はカード内に余白なくフルブリードで配置する
- ウォーム系の副色（`#a57658`, `#decbac`）でプレミアム感を演出する

### Don't（禁止）

- ボタンやカードに `border-radius` をつけない（pill ボタンは伊東屋のデザイン言語にない）
- ブランドレッド `#c70b17` をCTAボタンの背景色に使わない（CTAは黒ベタ）
- letter-spacing や palt を本文に適用しない（ベタ組みの端正さが崩れる）
- ヘッダーを白やグレーにしない（ダークヘッダーがブランドアイデンティティ）
- 本文サイズを 16px 以下にしない（18px の大きめ設定が意図的）
- `#333333` を本文テキストに使わない（テキストは `#000000`、`#333333` はヘッダー背景専用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | 1カラム。ハンバーガーメニュー |
| Tablet | <= 1024px | 2カラムグリッド |
| Desktop | > 1024px | 3〜4カラムグリッド。フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 16px、見出しはデスクトップの 70〜80% に縮小
- ディスプレイテキスト（キャッチ）は 24px 程度に

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red: #c70b17（アクセント限定）
Primary CTA: bg #000000 / text #ffffff / radius 0px
Header BG: #333333
Content BG: #f0f0f0
Card Surface: #ffffff
Text Primary: #000000
Text Secondary: #999999
Font: "Open Sans", 游ゴシック体, YuGothic, ..., sans-serif
Body Size: 18px
Line Height: 1.8
Letter Spacing: normal（palt なし）
Border Radius: 0px（全コンポーネント共通）
```

### プロンプト例

```
伊東屋のデザインシステムに従って、商品一覧ページを作成してください。
- ヘッダーは背景 #333333 にテキスト #ffffff
- ページ背景は #f0f0f0
- 商品カードは白 #ffffff、角丸なし（radius: 0px）
- CTAボタンは黒ベタ #000000、テキスト白、角丸なし
- フォントは "Open Sans" を先頭に、游ゴシック体をフォールバック
- 本文は 18px / line-height: 1.8
- ブランドレッド #c70b17 はセールバッジやカートアイコンにのみ使用
- 商品画像はカード幅いっぱいに配置
```
