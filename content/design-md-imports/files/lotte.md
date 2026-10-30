# DESIGN.md — LOTTE（ロッテ）

> LOTTE（https://www.lotte.co.jp/）のデザイン仕様書。
> 1948年創業の菓子・食品メーカー。「お口の恋人」をスローガンに、チョコパイ・ガーナ・キシリトール等を展開。
> 実サイトの computed style 実測（2026-06-18 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ロッテレッド `#dd1d18`** を基軸に、ウォームニュートラル `#efece7` のセクション面と白背景を交互に使うクラシカルな構成。見出しは英語（大・Black体）＋日本語（小・広いトラッキング）のバイリンガル2段パターンで統一
- **密度**: line-height 1.15 がデフォルトとかなりタイト。weight 700 がボディの基本ウェイトで、全体的にボールドヘビーな印象。日本語サイトとしては珍しくコンパクトな組版
- **キーワード**: ロッテレッド、バイリンガル見出し、ボールドヘビー、コンパクト line-height、ウォームニュートラル面
- **特徴**:
  - **CSS 変数（デザイントークン）は存在しない**レガシーサイト。色・サイズはすべてインラインまたは直接指定
  - フォントは **Roboto（欧文優先）→ Noto Sans JP** のシンプルなスタック
  - 英語見出しは **weight 900（Black）+ letter-spacing 0.06em** で力強く、日本語サブタイトルは **weight 700 + letter-spacing 0.24em** で広く散らす独特のバイリンガルパターン
  - ボディの weight が **700** と異例に太い。日本語のサブテキストも 700 が基本
  - **影ベースのエレベーションは使わない**。階層は背景色の切り替え（白 → `#efece7` → `#f5f4f0`）で表現
  - CTA は角丸 5px のアウトラインボタンが基本。ピルボタン（9999px）は使わない
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Lotte Red** (`#dd1d18`): メインのブランドカラー。ナビゲーション背景、カルーセルのアクティブドット・矢印、セクション見出しの英語部分、スキップリンク背景
- **Lotte Red Dark** (`#c6130e`): ホバー・プレス時のプレスカラー。ナビのクローズボタン背景

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#333333` | (51, 51, 51) | 本文テキスト・タブのアクティブ文字 |
| Text Secondary | `#6b6b6b` | (107, 107, 107) | 補助テキスト・日本語サブタイトル・ブランド説明文 |
| Text Tertiary | `#666666` | (102, 102, 102) | タブの非アクティブ文字 |
| Black | `#000000` | (0, 0, 0) | 一部要素のテキスト |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ナビ内テキスト・CTA テキスト |
| Surface Warm | `#efece7` | (239, 236, 231) | セクション背景（"新商品"、"ブランドを探す"） |
| Surface Light | `#f5f4f0` | (245, 244, 240) | ABOUT セクション背景 |

### Semantic（実測未確認・推奨値）

実サイトにはフォームやエラー画面が表面化していない。推奨する補完値:

- **Danger**: `#dc2626` 程度のレッド（ブランドレッドとの混同を避けるためやや青寄り）
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を使用
- フォールバック: `sans-serif`（システムフォント）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Roboto** を最優先に指定
- 欧文テキスト（英語見出し等）は Roboto の weight 900 / 700 で表示
- セリフ・等幅は使用していない

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: Roboto, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Roboto を先頭に置き、欧文グリフは Roboto で統一。日本語は Noto Sans JP にフォールバック
- Roboto と Noto Sans JP は Google Fonts のため、ドメインライセンスの制約なし
- 最後に generic family `sans-serif` を指定

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-18 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section Heading EN | Roboto | 30px | **900** | 1.15 | 0.06em | `#dd1d18` | "Campaign" "ABOUT LOTTE" 等の英語見出し |
| Section Heading JP | Noto Sans JP | 16px | 700 | 1.15 | **0.24em** | `#6b6b6b` | "キャンペーン" "ロッテについて" 等の日本語サブ |
| H1 (Logo) | Roboto | 28px | 700 | 1.15 | normal | `#333333` | ロゴ周辺 |
| H2 Section Title | Noto Sans JP | 21px | 700 | 1.15 | normal | `#333333` | "Campaign" 下のセクション見出し |
| H3 Product Title | Noto Sans JP | 16px | 700 | 1.15 | 0.06em | `#333333` | 商品名 |
| H3 Product Card | Noto Sans JP | 14px | 700 | 1.15 | 0.04em | `#333333` | カード内の商品名 |
| Body | Noto Sans JP | 14px | **700** | 1.15 | normal | `#333333` | 本文（weight 700 がデフォルト） |
| About Body | Noto Sans JP | 16px | 700 | **2.0** | normal | `#ffffff` | ABOUT セクションの本文（白文字） |
| Brand Desc | Noto Sans JP | 14px | 700 | 1.5 | 0.06em | `#6b6b6b` | ブランド説明文 |
| Nav Link | Noto Sans JP | 16px | 700 | 1.15 | **0.12em** | `#ffffff` | グローバルナビ（赤背景上の白文字） |
| About Heading EN | Roboto | 30px | 900 | 1.15 | 0.06em | `#ffffff` | "ABOUT LOTTE"（白文字） |
| About Heading JP | Noto Sans JP | 16px | 700 | 1.15 | 0.24em | `#ffffff` | "ロッテについて"（白文字） |
| Footer Small | Noto Sans JP | 13px | 700 | 1.15 | normal | `#333333` | フッターテキスト |
| Tab Label | Noto Sans JP | 16px | 400 | 1.15 | normal | `#333333` / `#666666` | "お知らせ" 等のタブ（唯一 weight 400） |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **ほぼ全要素**: `1.15` -- 日本語サイトとしては異例にタイト
- **ABOUT 本文 (16px)**: `2.0` -- ここだけ広い。白背景に白文字の読みやすさを確保
- **ブランド説明 (14px)**: `1.5` -- 補助テキスト向け

**字間 (letter-spacing)** -- 実測:
- **英語見出し (30px / 900)**: `0.06em`（1.8px）。力強いトラッキング
- **日本語サブタイトル (16px / 700)**: `0.24em`（3.84px）。極端に広いトラッキングが特徴
- **商品名 (14-16px / 700)**: `0.04em〜0.06em`。やや詰め
- **ナビリンク (16px / 700)**: `0.12em`（1.92px）。広めのナビ向けトラッキング
- **本文 (14px / 700)**: `normal`（0）。トラッキングなし

**ガイドライン**:
- ロッテの組版は **line-height 1.15 + weight 700** が基本リズム。日本語の一般的な line-height 1.7-2.0 とは大きく異なる
- 英語見出しと日本語サブタイトルで **letter-spacing に大きな差**を付ける（0.06em vs 0.24em）のがバイリンガルパターンの核心
- 長文の読みやすさが必要な箇所のみ line-height 1.5-2.0 に上げる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名やキャッチコピーは `white-space: nowrap` 推奨
- カルーセル内テキストは固定幅で折り返し制御

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- 日本語サブタイトルの wide tracking（0.24em）は letter-spacing で実現しており、palt は不使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Nav Close Button（ダークレッド）**
- Background: `#c6130e`
- Text: `#ffffff`
- Padding: `15px 0`
- Border Radius: `0px`
- Font: Noto Sans JP, 18px, weight 700

**Footer Outline Button** -- "SNS公式アカウント一覧"
- Background: `transparent`
- Text: `#ffffff`
- Border: `2px solid #ffffff`
- Padding: `12px`
- Border Radius: `5px`
- Font: Noto Sans JP, 13px, weight 700

**Skip Link**
- Background: `#dd1d18`
- Text: `#ffffff`
- Padding: デフォルト
- Border Radius: `0px`

**Carousel Arrow**
- Background: `#dd1d18`
- Border Radius: `5px`
- 矢印アイコン白

**Carousel Dot（Active）**
- Background: `#dd1d18`
- Border Radius: `100%`

**Carousel Dot（Inactive）**
- Background: `#ffffff`
- Border: `solid #dd1d18`
- Border Radius: `100%`

**Tab（Active）** -- "お知らせ"
- Background: `#ffffff`
- Text: `#333333`
- Padding: `14px 0`
- Font: Noto Sans JP, 16px, weight 400

**Tab（Inactive）**
- Background: `#ffffff`
- Text: `#666666`
- Padding: `14px 0`
- Font: Noto Sans JP, 16px, weight 400

### Inputs（推奨実装）

実サイトにフォーム要素は表面化していないため、ブランドトーンに合わせた推奨値:

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `2px solid #dd1d18`
- Border Radius: `5px`
- Padding: `12px 16px`
- Font: Noto Sans JP, 14px, weight 700
- Height: `44px`

### Cards

**Product Card**
- Background: `#ffffff`（画像上にダークオーバーレイ）
- Border: なし
- Border Radius: `0px`（角なし）
- Shadow: なし

**Category Card**
- Background: カテゴリごとの固有色（オーバーレイ付き）
- Border Radius: `0px`

### Navigation Bar

- Background: `#dd1d18`（ロッテレッド）
- Text: `#ffffff`
- Font: Noto Sans JP, 16px, weight 700, letter-spacing 0.12em
- Position: fixed top

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内の縦余白 |
| M | 16px | セクション内の要素間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーローセクションの上下 |

### Container

- Max Width: `1100px` 程度（実測時のコンテンツ幅）
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | 商品カード・ナビボタン・画像 |
| Small | 5px | フッターボタン・カルーセル矢印 |
| Circle | 100% | カルーセルドット |

### Grid

- カルーセルベースのレイアウトが主体
- 商品グリッドは 4 カラム（デスクトップ）/ 2 カラム（モバイル）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素の基本（影なし） |

- **実測ではすべての要素が `box-shadow: none`**
- 立体感は **背景色の切り替え**で表現:
  - 白 `#ffffff` → ウォーム面 `#efece7` → ライト面 `#f5f4f0`
  - 商品画像上のダークオーバーレイ
  - ロッテレッド `#dd1d18` のナビバーによる視覚的な層分け
- 影を使う場合の推奨値（hover 演出等に限定）:
  - Level 1: `0 2px 8px rgba(0, 0, 0, 0.08)`
  - Level 2: `0 4px 16px rgba(0, 0, 0, 0.10)`

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは **英語（30px / 900 / 0.06em / `#dd1d18`）＋日本語（16px / 700 / 0.24em / `#6b6b6b`）** のバイリンガル2段を基本にする
- フォントは **Roboto → Noto Sans JP → sans-serif** の順でフォールバックを指定する
- 本文の weight は **700** を基本にする（ロッテのボールドヘビーな個性）
- 英語見出しには **weight 900（Black）** を使い、日本語との太さコントラストを作る
- ナビバーは **`#dd1d18` のベタ塗り**に白文字を載せる
- セクション背景は **白 `#ffffff` と `#efece7` を交互に**使い、視覚的な区切りを作る
- 日本語サブタイトルの letter-spacing は **0.24em** と広く取る
- 影の代わりに **背景色の切り替え**で階層を表現する
- ボタンの角丸は **5px**（ピルではない）

### Don't（禁止）

- **line-height を安易に 1.7〜2.0 にしない** -- ロッテの基本は 1.15。長文の読みやすさが必要な箇所のみ例外的に上げる
- **weight 400 を安易に使わない** -- 700 がデフォルト。400 はタブラベル等の限定的な用途
- **ピルボタン（radius 9999px）を使わない** -- ロッテは角丸 5px のシャープなボタン
- **冷たいグレー**（`#9ca3af`、`#6b7280`、`#f3f4f6`）を使わない -- ウォームトーンの `#efece7` / `#6b6b6b` を使う
- **影（box-shadow）で立体感を出さない** -- 背景色切り替えが基本
- バイリンガル見出しで **日本語を英語と同じサイズにしない** -- 英語 30px に対して日本語は 16px の2段構成
- 英語見出しに **ロッテレッド以外の色を使わない** -- `#dd1d18` がセクション見出しの英語部分の色

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 768px | モバイルレイアウト（ハンバーガーメニュー） |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- 英語見出し: 30px → 20〜24px
- 日本語サブタイトル: 16px → 12〜14px
- 商品グリッド: 4列 → 2列
- カルーセルは横スワイプ対応
- ナビバーはハンバーガーメニューに変更

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- タブ: padding `14px 0`（高さ確保）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Lotte Red (Brand): #dd1d18
Lotte Red Dark: #c6130e
Text Primary: #333333
Text Secondary: #6b6b6b
Text Tertiary: #666666
Surface Warm: #efece7
Surface Light: #f5f4f0
White: #ffffff
Nav BG: #dd1d18 (solid red)

Font: Roboto, "Noto Sans JP", sans-serif

Section Heading EN: 30px / 900 / line-height 1.15 / letter-spacing 0.06em / color #dd1d18
Section Heading JP: 16px / 700 / line-height 1.15 / letter-spacing 0.24em / color #6b6b6b
Body: 14px / 700 / line-height 1.15 / letter-spacing normal / color #333333
About Body: 16px / 700 / line-height 2.0
Nav Link: 16px / 700 / letter-spacing 0.12em / color white

Border Radius: 0px（カード）/ 5px（ボタン）/ 100%（ドット）
Shadow: none（背景色切り替えで階層表現）
```

### プロンプト例

```
ロッテのデザインに従って、お菓子の新商品紹介セクションを作成してください。
- フォント: Roboto, "Noto Sans JP", sans-serif
- セクション見出し（英語）: "New Products" / 30px / weight 900 / letter-spacing 0.06em / color #dd1d18
- セクション見出し（日本語）: "新商品" / 16px / weight 700 / letter-spacing 0.24em / color #6b6b6b
- 商品名: 14-16px / weight 700 / line-height 1.15 / letter-spacing 0.04-0.06em / color #333333
- 本文: 14px / weight 700 / line-height 1.15 / color #333333
- 補足テキスト: 14px / weight 700 / line-height 1.5 / color #6b6b6b
- ナビバー: 背景 #dd1d18（ロッテレッド）/ 白文字 / weight 700 / letter-spacing 0.12em
- セクション背景: 白 #ffffff と #efece7 を交互に
- ボタン: 背景 transparent / テキスト白 / border 2px solid white / radius 5px（アウトラインスタイル）
- カード: 角丸なし / 影なし / 画像上ダークオーバーレイ
- ピルボタンは使わない（radius 5px のシャープなボタン）
- box-shadow は使わない（背景色切り替えで階層を表現）
```
