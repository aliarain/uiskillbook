# DESIGN.md — BEAMS

> BEAMS（ビームス）公式サイト（https://www.beams.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1976 年創業のセレクトショップらしい、編集者的でフラットなビジュアル。商品画像と情報を主役にし、UI 自体は徹底的に控えめ
- **密度**: 情報密度がかなり高い。1 画面に「特集 / 新着 / 予約 / スタッフコーデ / SNS / ストア / ジャーナル」と多くのモジュールが並ぶ百貨店型
- **キーワード**: 編集型、フラット、ニュートラルグレー、装飾を抑えた、スタッフ主導
- **特徴**: ロゴ・アイコンに **BST**（BEAMS Serif Type、独自和文フォント）を限定使用。本文・UI は徹底してヒラギノ角ゴ Pro。見出しの `line-height` を 1.0 と極端に詰め、商品サムネと数字メトリクスを際立たせる構成

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Ink** (`#333333`): すべてのテキスト・主要 UI のベースカラー。BEAMS のニュートラル基調を象徴する濃グレー
- **Black** (`#1a1a1a`): トップアラートバー・SNS アイコン背景。緊急通知・公式感を出す面色

### Accent（アクセント）

- **BEAMS Red / Sale** (`#ff3700`): セール・SALE バッジに使用するブランドレッド
- **BEAMS Orange** (`#e85b03`): 「NEW」など強アテンション
- **BEAMS Green** (`#8fb347`): 「REARRIVAL」（再入荷）バッジ
- **BEAMS Blue** (`#55b1f2`): 「PRE ORDER」（予約）バッジ
- **Promo Olive** (`#bea870`): 特集番号バッジ（1）
- **Promo Brown** (`#997a5c`): 特集番号バッジ（3）

### Surface（面色）

- **Background** (`#ffffff`): ページ背景
- **Surface Cream** (`rgba(251,250,247,0.75)`): 特集カードの薄いクリーム背景
- **Tag Surface** (`#f2f2f2`): タグピル・カテゴリリンク背景（最も多用される面色）
- **Section Surface** (`#e5e5e5`): ナビ・セクション仕切りの中間グレー
- **Border / Divider** (`#efefef`): 細い区切り線
- **Mid Gray** (`#808080`): 現在ページのページャドット

### Text

- **Text Primary** (`#333333`): 本文・見出し・リンクすべてに共通。純黒は使わない
- **Text Secondary** (`#666666`): ページャ・ラベル等の補助
- **Text Muted** (`#838383`): 「人気検索キーワード」等のセクションラベル
- **Text Inverse** (`#ffffff`): 黒バー上のテキスト

> **Note**: BEAMS は背景色そのものでブランドを語らない。商品画像と編集レイアウトが主役で、UI は #333 / #f2f2f2 / #fff の 3 色で 9 割方を構成する。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ Pro（macOS）— **ProN ではなく Pro を指定**している点に注意
- メイリオ（Windows）
- ＭＳ Ｐゴシック（レガシー Windows）

**カスタム書体（BEAMS ロゴ・h1 のみ）**:
- **BST** — BEAMS Serif Type。BEAMS が独自に運用するブランド書体。h1（ロゴ・ブランドタイトル）のみで使用

### 3.2 欧文フォント

- **サンセリフ**: `-apple-system`, `system-ui`（OS フォントを優先）、その後 sans-serif
- セリフ系は使用しない

### 3.3 font-family 指定

```css
/* 本文・UI 共通 */
font-family: "Hiragino Kaku Gothic Pro", メイリオ, "ＭＳ Ｐゴシック", -apple-system, "system-ui", sans-serif;

/* ロゴ・h1 のみ */
font-family: BST, "Hiragino Kaku Gothic Pro", メイリオ, "ＭＳ Ｐゴシック", -apple-system, "system-ui", sans-serif;
```

**フォールバックの考え方**:
- 和文（Hiragino Kaku Gothic Pro）を最優先
- システムフォント `-apple-system` / `system-ui` は和文フォントの後に指定
- BST は h1 だけに限定し、他の階層には伝播させない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo / h1 | BST | 48px | 400 | 48px (1.0) | normal | サイト最上部のブランド名のみ |
| Section Heading (h2) | Hiragino Kaku Gothic Pro | 21px | 700 | 21px (1.0) | normal | 「人気のアイテムタグ」等 |
| Hero Heading | Hiragino Kaku Gothic Pro | 16px | 700 | 16px (1.0) | normal | 「特集をもっと見る」等の見出し |
| Sub Heading (h3) | Hiragino Kaku Gothic Pro | 16px | 400 | 24px (1.5) | normal | コピー本体 |
| Section Label | Hiragino Kaku Gothic Pro | 14px | 700 | 14px (1.0) | normal | 「人気検索キーワード」等 |
| Body | Hiragino Kaku Gothic Pro | 16px | 400 | 16px (1.0) | normal | body 直 |
| Article Body | Hiragino Kaku Gothic Pro | 14px | 400 | 24px (1.71) | normal | 商品説明本文 |
| Card Caption | Hiragino Kaku Gothic Pro | 12px | 400 | 21.6px (1.8) | normal | サムネ下のキャプション |
| Link Label | Hiragino Kaku Gothic Pro | 13px | 400 | 20px (1.54) | normal | グローバルナビ |
| Badge Text | Hiragino Kaku Gothic Pro | 12px | 400 | 12px (1.0) | normal | NEW / REARRIVAL 等 |
| Tag Pill | Hiragino Kaku Gothic Pro | 13px | 700 | normal | normal | #上品・#カジュアル等 |

### 3.5 行間・字間

- **見出し（h2 / h3）の行間**: **1.0**。BEAMS は見出しの `line-height` を文字サイズと同値にする独特の運用
- **本文（card caption）の行間**: 1.5〜1.8。商品説明やコピーは欧文サイトより広めを確保
- **letter-spacing**: 全体的に `normal`。OpenType `palt` も適用していない
- **本文の字間**: `letter-spacing: normal`（BEAMS は意図的に詰めない）

**ガイドライン**:
- セクション見出し・タイトルは `line-height: 1.0` でタイトに組み、視覚的に名詞ブロックとして見せる
- ボディは line-height 1.5 以上を確保し、商品説明の可読性を担保
- ヘッダー・ナビ・タグは小さめ（13px〜14px）でも weight 400/700 で重みをつける

### 3.6 禁則処理・改行ルール

```css
/* BEAMS の標準 */
word-break: normal;
overflow-wrap: break-word;
```

- 商品名（ブランド名 + 商品コード）が長くなるため `overflow-wrap: break-word` でサムネのキャプション領域に収める
- ハッシュタグ（#上品 等）は折り返さない pill 表示

### 3.7 OpenType 機能

```css
/* BEAMS は palt を使わない */
font-feature-settings: normal;
```

- **palt は適用しない**。商品名のような英数字混じりテキストでは詰めずベタ組みを優先

### 3.8 縦書き

- 該当なし（全面横書き）

---

## 4. Component Stylings

### Buttons

**Primary CTA（黒バー / アラート）**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Padding: `12px 0`
- Border Radius: `0px`（角丸なし）
- Font Size: 13–14px / Weight 400

**Tag Pill（最頻出）**
- Background: `#f2f2f2`
- Text: `#333333`
- Padding: `10px 15px 9px`（垂直方向に 1px のオフセットあり）
- Border Radius: `4px`
- Font Size: 13px / Weight 700

**Filter Pill (新着アイテム / 予約アイテム)**
- Background: `#f2f2f2`
- Text: `#333333`
- Padding: `0 10px`
- Border Radius: `4px`
- Font Size: 14–16px / Weight 700

**Pagination Dot**
- Background (アクティブ): `#808080`
- Background (非アクティブ): `#e5e5e5`
- Text: `#666666`
- Border Radius: `50%`（円）
- Size: 概ね 12px × 12px

**Text Link**
- Text: `#333333`
- Border Radius: `6px`（フォーカス時のリング想定）
- Padding: `0`
- 下線なし（hover 時のみ）

### Badges

| Type | Background | Text | Use Case |
|------|------------|------|----------|
| NEW | transparent | `#f23e0c` | 新着商品 |
| REARRIVAL | transparent | `#8fb347` | 再入荷 |
| PRE ORDER | transparent | `#55b1f2` | 予約商品 |
| SALE | transparent | `#ff3700` | セール |
| Promo No.1 | `#bea870` | `#ffffff` | 特集番号バッジ |
| Promo No.3 | `#997a5c` | `#ffffff` | 特集番号バッジ |

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Border Radius: `0px`（角張った検索ボックス）
- Padding: `1px 6px`（検索内のサブミットボタンは小さく）
- Font Size: 13–14px

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`（カードに角丸を使わない。商品画像をそのまま大きく見せる）
- Padding: 0（画像直下にキャプション）
- Shadow: なし（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | 同種要素の間 |
| M | 12px | 黒バー alert の上下 padding |
| L | 16px | カード内の縦間 |
| XL | 24px | セクション間 |
| XXL | 40px〜 | メジャーセクション間 |

### Container

- Max Width: 約 1280px（実測ベース）
- Padding (horizontal): 16〜24px
- グローバルナビは 100vw

### Grid

- 商品サムネは 4 カラム / 5 カラム / 8 カラムを切り替え
- ジャーナル系は 3 カラム
- ガッターは 8〜12px と狭い（情報密度を高める方針）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラット運用） |
| 1 | `0 1px 2px rgba(0,0,0,0.08)` | スティッキーなナビ・モーダル系（必要時のみ） |

> BEAMS はシャドウをほぼ使わない。コントラストは色面（#f2f2f2 vs #fff）で表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文・UI は `"Hiragino Kaku Gothic Pro", メイリオ, "ＭＳ Ｐゴシック", -apple-system, "system-ui", sans-serif` のチェーンで指定する
- テキスト色は `#333333`、背景は `#ffffff`、面色は `#f2f2f2` を基本にする
- 見出しは `line-height: 1.0` でタイト組み、本文は 1.5 以上で確保する
- 商品状態バッジは色だけで判別できるよう REARRIVAL=緑 / NEW=オレンジ / PRE ORDER=青 / SALE=赤の運用を踏襲する
- カードはシャドウ・角丸を使わずフラットに並べ、画像と編集力で差を出す

### Don't（禁止）

- ヒラギノは ProN ではなく **Pro** を使う。ProN を指定すると JIS90 字形がデフォルトとなり、BEAMS の意図する字形と異なる
- カードや CTA に大きな border-radius（>= 8px）を使わない（BEAMS はほぼ角張らせる）
- `palt` や `letter-spacing` を効かせない（ベタ組みが基本）
- 純黒（#000000）を本文に使わない（BEAMS の本文はすべて #333333）
- カラフルな配色を多用しない。色は商品画像とバッジに任せ、UI はモノクロームに保つ

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1 カラム、サムネ 2 カラム） |
| Tablet | 768–1023px | 2〜3 カラム |
| Desktop | ≥ 1024px | 4〜8 カラム、ジャーナル 3 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px（モバイル時のみ。デスクトップではタグピル等が小さくなる）

### フォントサイズの調整

- モバイルでは見出しは 1〜2px 縮小、本文は 14px を維持
- ロゴ h1（BST）はモバイルで 28〜32px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Text: #333333
Background: #ffffff
Tag Surface: #f2f2f2
Sale Red: #ff3700
NEW Orange: #f23e0c (テキストのみ)
REARRIVAL Green: #8fb347 (テキストのみ)
PRE ORDER Blue: #55b1f2 (テキストのみ)
Black Bar: #1a1a1a
Font (UI): "Hiragino Kaku Gothic Pro", メイリオ, "ＭＳ Ｐゴシック", -apple-system, "system-ui", sans-serif
Font (Logo h1): BST, [上記 fallback]
Body Size: 14–16px / Weight 400 / line-height 1.5–1.8
Heading Size: 16–21px / Weight 700 / line-height 1.0
Border Radius: 0–4px (角張りベース)
Shadow: なし
```

### プロンプト例

```
BEAMS のデザインシステムに従って、商品一覧ページを作成してください。
- 背景: #ffffff
- テキスト: #333333（純黒は使わない）
- フォント: "Hiragino Kaku Gothic Pro", メイリオ, "ＭＳ Ｐゴシック", -apple-system, sans-serif
- 商品サムネはカードボーダー・シャドウ・角丸なしのフラット表示
- 商品状態バッジは透明背景に色付きテキストで NEW=#f23e0c、REARRIVAL=#8fb347、PRE ORDER=#55b1f2、SALE=#ff3700
- カテゴリタグは bg #f2f2f2 / text #333 / radius 4px / 13px Bold のピル
- セクション見出しは 21px Bold で line-height: 1.0
- 商品キャプションは 12–14px Regular で line-height 1.5〜1.8
- カードのコンテナは max-width 1280px、ガッターは 8–12px と狭く
```
