# DESIGN.md — DESCENTE（デサント）

> DESCENTE（https://www.descente.co.jp/）のデザイン仕様書。
> 日本発のスポーツウェアブランド。DESCENTE / DESCENTE ALLTERRAIN / Munsingwear 等を展開する企業のコーポレートサイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景 + ダークネイビー（`#03062f`）のテキストによる、ハイコントラストでエレガントなコーポレートデザイン。スポーツウェアブランドらしい力強さと、ファッション性の高い洗練を両立
- **密度**: コンテンツ間の余白を十分に取り、ビジュアルを大きく見せるマガジン的レイアウト。テキストは控えめな密度
- **キーワード**: ダークネイビー、RivieraNights フォント、スポーツ × ファッション、ミニマル、ハイコントラスト
- **特徴**:
  - 欧文に **RivieraNights** というカスタムフォントを使用。セリフ要素を持つエレガントな書体で、スポーツブランドに品格を与えている
  - 和文には **Noto Sans JP** をフォールバック。RivieraNights が和文をカバーしないため
  - ブランドカラーは `#03062f`（ダークネイビー）。純黒ではなく深い紺色でブランドの知性と品格を表現
  - セクション背景に `#f5f5f5`（ライトグレー）を使い、白との微細なコントラストで階層を作る
  - ナビゲーションの補助テキストに `#888888` を使用
  - カルーセルのインジケーターは `#e4e4e4`（inactive）/ `#000000`（active）の丸ドット
  - ダークモードに対応したセクション（ブランド紹介）では `#1c1b1f` 背景 + 白テキスト

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Dark Navy** (`#03062f`): メインのブランドカラー。見出し、ナビ、本文テキスト、ブランド紹介セクション背景に使用
- **Dark Navy (85%)** (`rgba(3, 6, 47, 0.85)`): オーバーレイ用の半透明バージョン

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Navy | `#03062f` | (3, 6, 47) | 見出し・本文テキスト・フッター背景 |
| Dark Surface | `#1c1b1f` | (28, 27, 31) | ダークセクション背景 |
| Black | `#000000` | (0, 0, 0) | body テキスト、アクティブインジケーター |
| Gray | `#888888` | (136, 136, 136) | ナビ補助テキスト |
| Gray Dark | `#666666` | (102, 102, 102) | 日本語補助テキスト |
| Indicator | `#e4e4e4` | (228, 228, 228) | カルーセル非アクティブドット |
| Light Surface | `#f5f5f5` | (245, 245, 245) | セクション背景、メニュー背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景、ダーク面上テキスト |

### CTA / Buttons

- サイト全体にフィル型ボタンは少ない。ナビゲーション中心のシンプルな構成
- **メニューリンク**: 背景 `#f5f5f5` / テキスト `#03062f` / weight 700 / padding `7px 0px`
- **ニュースカテゴリバッジ**: テキスト `#000000` / border `1px solid #03062f` / padding `5px 10px` / 10px

### Semantic（推奨値）

実サイトにはエラー／成功色は表面化していない。コーポレートサイト向けに推奨:

- **Danger**: `#cf2e2e`
- **Success**: `#00d084`
- **Warning**: `#fcb900`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**（RivieraNights のフォールバックとして）
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **カスタム書体**: **RivieraNights** — セリフ要素を持つエレガントなスポーツブランド書体
- **フォールバック**: Noto Sans JP 内の欧文グリフ → sans-serif

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: RivieraNights, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- RivieraNights は Web フォントとして配信されるカスタム書体
- 和文は Noto Sans JP のみ。シンプルな 2 フォント構成
- RivieraNights が読み込まれない場合、Noto Sans JP が欧文・和文の両方をカバー

> **代替フォント注記**: RivieraNights はデサント専用のカスタムフォントのため外部では使用不可。代替として **Cormorant Garamond**（セリフ系の品格）または **Inter**（モダンサンセリフ）+ **Noto Sans JP** で雰囲気を再現可能（preview.html は Cormorant Garamond を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／ブランドページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (Logo) | RivieraNights | 14px | 700 | 21px (×1.5) | normal | `#000000` | ロゴ要素（画像置換） |
| Section H2 | RivieraNights | 14px | 700 | 21px (×1.5) | normal | `#000000` | "BRANDSブランド"（英語 + 日本語の併記） |
| Card H3 | RivieraNights | 22px | 700 | 26.4px (×1.2) | normal | `#ffffff` | "モノづくりへのこだわり" |
| News Title | RivieraNights | 14px | 400 | 21px (×1.5) | normal | `#000000` | ニュースリストタイトル |
| Body | RivieraNights + NotoSansJP | 16px | 400 | 24px (×1.5) | normal | `#03062f` | 本文 |
| Brand Name | RivieraNights + NotoSansJP | 14px | 700 | 21px (×1.5) | normal | `#03062f` | "デサント" 等 |
| Category Badge | RivieraNights | 10px | 400 | 10px (×1.0) | normal | `#000000` | "業績について" |
| Sub Label | RivieraNights + NotoSansJP | 10px | 400 | 15px (×1.5) | normal | `#666666` | 日本語サブラベル |
| Date | RivieraNights | 14px | 400 | 14px (×1.0) | normal | `#03062f` | "2026.05.01" |
| Nav Link | RivieraNights | 14px | 400 | 21px (×1.5) | normal | `#888888` | ナビゲーションリンク |
| Nav Active | RivieraNights | 14px | 700 | 21px (×1.5) | normal | `#03062f` | アクティブナビ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（`24px` / `16px`）
- **カード見出しの行間**: 1.2（`26.4px` / `22px`）— タイトにまとめる
- **字間 (letter-spacing)**: normal（全要素で letter-spacing の指定なし）

**ガイドライン**:
- letter-spacing を使わないクリーンなスタイル。フォント自体のメトリクスに依存
- カード見出しは行間 1.2 と狭めで、インパクトを出す

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

palt / kern の明示的な指定なし。

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Menu Link**
- Background: `#f5f5f5`
- Text: `#03062f`
- Padding: 7px 0px
- Border Radius: 0px
- Font Size: 14px
- Font Weight: 700

**Category Badge**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#03062f`
- Padding: 5px 10px
- Border Radius: 0px
- Font Size: 10px
- Font Weight: 400

### Cards

- Background: image with overlay
- Border: none
- Border Radius: 0px（角丸なし）
- Text overlay: padding `0px 32px`
- テキスト色: `#ffffff`（ダーク画像上）

### Carousel Indicators

- Inactive: `#e4e4e4` / `border-radius: 100%`
- Active: `#000000` / `border-radius: 100%`

### Navigation

- Background: `#ffffff`
- Height: 自動
- ロゴ: 画像 + h1（14px, 700）
- メニュー展開時: `#f5f5f5` 背景

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 備考 |
|-------|-------|------|
| XS | 5px | バッジ内パディング |
| S | 10px | バッジ水平パディング |
| M | 16px | カード間ギャップ |
| L | 24px | セクション内パディング |
| XL | 32px | カードテキストオーバーレイのパディング |
| XXL | 64px | セクション間の余白 |

### Container

- Max Width: フルスクリーン（ビジュアル重視）
- Content Padding: 16〜32px

### Grid

- ブランドカード: 2〜3 カラム
- ニュースリスト: 1 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全要素（フラットデザイン） |
| 1 | `rgba(3, 6, 47, 0.85)` overlay | ブランドセクションオーバーレイ |

フラットデザインを徹底。ドロップシャドウは使用しない。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色に `#03062f`（ダークネイビー）を使う。純黒 `#000000` よりブランドに合う
- ビジュアルを大きく見せるフルブリード画像を活用する
- ダークセクションは `#03062f` または `#1c1b1f` を背景にし、白テキストで
- letter-spacing は normal のまま。フォントメトリクスに任せる
- 英語と日本語を併記するラベル（"BRANDSブランド"）はブランドのスタイル

### Don't（禁止）

- 角丸を使わない（border-radius: 0px が基調。カルーセルドット以外）
- 派手なカラーアクセントを入れない（ダークネイビー + 白 + グレーの 3 色で構成）
- letter-spacing を広げない（RivieraNights の自然なスペーシングを活かす）
- ドロップシャドウを使わない（フラットデザイン）
- ゴシック体のみの font-family にしない（RivieraNights のセリフ要素がブランド資産）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 375px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは見出しサイズを 70〜80% に縮小
- カード H3 は 22px → 18px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color: #03062f
Background: #ffffff
Surface: #f5f5f5
Dark Section BG: #1c1b1f
Gray Text: #888888
Font: RivieraNights, "Noto Sans JP", sans-serif
Body Size: 14px / Weight 400
Line Height: 1.5
Heading Weight: 700
Letter Spacing: normal
Border Radius: 0px
```

### プロンプト例

```
DESCENTE のコーポレートサイトのデザインシステムに従って、ブランド紹介セクションを作成してください。
- テキスト色: #03062f（ダークネイビー）
- 背景: #ffffff（白）、セクション切り替えに #f5f5f5
- フォント: RivieraNights, "Noto Sans JP", sans-serif
- 見出しは 22px / weight 700 / line-height 1.2
- border-radius: 0px（角丸なし）
- ビジュアルを大きく見せるフルブリードレイアウト
- 英語と日本語のラベルを併記する
```
