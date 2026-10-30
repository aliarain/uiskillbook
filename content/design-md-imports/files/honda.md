# DESIGN.md — Honda (本田技研工業)

> Honda（https://www.honda.co.jp/）のデザイン仕様書。
> 実サイトの CSS computed style および CSS Custom Properties に基づく。
> TypeSquare（Morisawa）経由のカスタム Web フォント HondaGlobalFontJP を全面採用し、グローバル palt・完全な角形ボタンで「精密工学ブランド」の印象を徹底している。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: インダストリアル・プレシジョン。Honda のモノづくりの精密さをそのまま画面に落とし込んだ、無駄のない設計
- **密度**: ゆったりとした余白と大きなビジュアル。自動車・モビリティ製品の存在感を引き立てるヒーロー型レイアウト
- **キーワード**: 精密、角形、インダストリアル、クリーン、自信
- **特徴**:
  - **カスタム Web フォント HondaGlobalFontJP**（TypeSquare / Morisawa）を Regular・Light・Bold の 3 ウェイトで全面使用。日本の大規模企業サイトでも稀な完全カスタム書体運用
  - **`font-feature-settings: "palt"` をグローバル適用** — 見出しだけでなく本文も含めて全面的にプロポーショナル字詰め
  - **ボタン・CTA の border-radius がすべて 0px** — 角丸を一切使わない完全角形デザイン。精密さ・工学的な印象を強化
  - テキスト色は純粋な黒 `#000000` ではなく、暗いチャコール `#35363b` を一貫使用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Honda Red** (`#cc0000`): コーポレートカラー。アクセント、警告、重要な要素に使用（CSS Custom Property `--Color_Accent-Red`）

### Design Page Accent（デザインサブサイトの特別色）

- **Red** (`#ff4a12`): デザインページのアクセント赤
- **Yellow** (`#ffc902`): デザインページのアクセント黄
- **Blue** (`#0a008a`): デザインページのアクセント青

### Neutral（ニュートラル）

- **Text Primary / Dark BG** (`#35363b`): 本文テキスト、ダークセクション背景。Honda の最も特徴的な色。CSS Custom Property `--Color_Text-Black_Basic`
- **Text Sub** (`#65666a`): 中間グレーの補足テキスト。`--Color_Text-Black_Sub`
- **Text Appendix** (`#8c8d91`): 薄いグレーの注釈テキスト。`--Color_Text-Black_Appendix`
- **Text Strong** (`#000000`): 最も強い強調テキスト（限定使用）。`--Color_Text-Black_Strong`
- **White Basic (on dark)** (`#d7d8da`): ダーク背景上の本文テキスト。`--Color_Text-White_Basic`
- **White Sub (on dark)** (`#c8c9cc`): ダーク背景上の補足テキスト。`--Color_Text-White_Sub`
- **White Strong (on dark)** (`#ffffff`): ダーク背景上の強調テキスト。`--Color_Text-White_Strong`

### Surface & Background

- **Background** (`#ffffff`): メインページ背景
- **Light Gray** (`#f4f5f5`): セクション背景の交互色。`--Color_Basic-LIGHT-GRAY`
- **Gallery Card BG** (`#e4e5e6`): デザインページのギャラリーカード背景
- **Dark BG** (`#35363b`): フッター、重要な告知セクション
- **Nav Overlay** (`rgba(53, 54, 59, 0.95)`): ナビゲーションオーバーレイ（半透明ダーク）
- **Frosted Header** (`rgba(255, 255, 255, 0.8)`): デザインサブサイトのヘッダー背景（すりガラス効果）

### Border

- **Border Default** (`#c6c6c6`): ナビゲーションサブリンク等の標準ボーダー
- **Button Border** (`#35363b`): CTA のアウトラインボーダー（テキスト色と同色）
- **Footer Border** (`#ffffff`): ダーク背景上のボーダー

---

## 3. Typography Rules

### 3.1 和文フォント

**カスタム Web フォント — HondaGlobalFontJP（TypeSquare / Morisawa）**:
- **HondaGlobalFontJP-Regular**: 本文テキスト用。font-weight: 400
- **HondaGlobalFontJP-Light**: ナビゲーション、ヘッダー、フッター用。font-weight: 400（フォントファイル自体が Light ウェイト）
- **HondaGlobalFontJP-Bold**: ナビゲーション見出し用。font-weight: 400（フォントファイル自体が Bold ウェイト、CSS の weight 値は 400）

> **注意**: HondaGlobalFontJP は TypeSquare（Morisawa の Web フォント配信サービス）経由でドメインライセンス配信されている。公式サイト以外では表示されないため、プレビューやプロトタイプでは Noto Sans JP で代替する。

**システムフォールバック**:
- ヒラギノ角ゴ W3 JIS2004（macOS）
- Hiragino Kaku Gothic ProN（macOS）
- Hiragino Sans（macOS）
- 游ゴシック体 / YuGothic（クロスプラットフォーム）
- 游ゴシック Medium / Yu Gothic Medium（Windows）
- Meiryo（Windows）

### 3.2 欧文フォント

- HondaGlobalFontJP に欧文グリフが含まれているため、別途の欧文フォント指定はなし
- フォールバック時はシステムフォントのゴシック体が欧文も担う

### 3.3 font-family 指定

```css
/* 本文（デザインサブサイト実測値） */
font-family: HondaGlobalFontJP-Regular, "ヒラギノ角ゴ W3 JIS2004",
  "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  Meiryo, sans-serif;

/* ナビゲーション・ヘッダー・フッター */
font-family: HondaGlobalFontJP-Light, "ヒラギノ角ゴ W3 JIS2004",
  "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  Meiryo, sans-serif;

/* ナビゲーション見出し */
font-family: HondaGlobalFontJP-Bold, "ヒラギノ角ゴ W3 JIS2004",
  "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  Meiryo, sans-serif;
```

**フォールバックの考え方**:
- カスタム Web フォントを最優先で指定
- macOS のヒラギノ角ゴ（JIS2004 → ProN → Sans）でカバー
- Windows は游ゴシック Medium → メイリオの順
- 游ゴシック「Medium」を明示指定しているのは、Windows での Regular ウェイトの細さ問題を回避するため

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Nav Heading | HondaGlobalFontJP-Bold | 20px | 400 | — | 0.8px (0.04em) | ナビ見出し |
| Body | HondaGlobalFontJP-Regular | 16px | 400 | 22.4px (x1.4) | normal | 本文テキスト |
| Nav Link | HondaGlobalFontJP-Light | 16px | 400 | — | 0.8px (0.05em) | ナビリンク |
| CTA Button | HondaGlobalFontJP-Regular | 16px | 400 | 20.8px (x1.3) | normal | アウトラインCTA |
| Nav Sub Link | — | 14px | 400 | — | — | ナビサブリンク |
| Footer Link | HondaGlobalFontJP-Light | 14px | 400 | — | — | フッターリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `22.4px` (16px x **1.4**) — 日本語サイトとしてはタイトめ。palt のグローバル適用と合わせて、密度の高い引き締まった印象
- CTA ボタン: `20.8px` (16px x 1.3)

**字間 (letter-spacing)** — 実測値:
- ナビゲーション見出し: `0.8px` (20px ベースで 0.04em)
- ナビリンク・ヘッダー・フッター: `0.8px` (16px ベースで 0.05em)
- 本文テキスト: `normal`
- CTA ボタン: `normal`

**ガイドライン**:
- `letter-spacing: 0.05em` はナビゲーション・ヘッダー領域に限定。本文には適用しない
- body の `line-height: 1.4` は日本語としてはやや詰まっているが、palt との組み合わせで視覚的に整う
- フォントの Light / Regular / Bold の切り替えは CSS `font-weight` ではなく `font-family` で行う（全ウェイトとも CSS 上は weight: 400）

### 3.6 禁則処理・改行ルール

```css
/* Honda サイトのグローバル設定 */
word-break: break-all;
overflow-wrap: break-word;
```

- 長い URL や英単語の折り返しに対応
- 日本語テキストの禁則処理はブラウザデフォルトに委ねている

### 3.7 OpenType 機能

```css
/* グローバル適用 — Honda の最も特徴的な設定 */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰め。**body に対してグローバルに適用**されている
- 多くの日本語サイトでは見出し専用だが、Honda は本文を含む全テキストに palt を適用
- カスタム Web フォント HondaGlobalFontJP の字詰め品質が高いため、本文への palt 適用でも可読性を維持

### 3.8 縦書き

- 該当なし。Honda は横書きのみ

---

## 4. Component Stylings

### Buttons

**Outline CTA（メインのアクション）** — 実測値:
- Background: `transparent`
- Text: `#35363b`
- Border: `1px solid #35363b`
- Border Radius: **`0px`**（完全角形）
- Padding: `23px 28px`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: HondaGlobalFontJP-Regular

**Nav Sub Link**
- Background: `transparent`
- Text: `#35363b`
- Border: `1px solid #c6c6c6`
- Border Radius: **`0px`**
- Padding: `5px 6px`
- Font Size: `14px`

**Content Button（カテゴリ選択等）**
- Background: `#ffffff`
- Text: `#35363b`
- Border Radius: **`0px`**
- Font Size: `16px`
- Line Height: `20.8px` (x1.3)

**Footer Language Button**
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Border Radius: **`0px`**
- Padding: `4px 8px`

> **重要**: Honda のボタンは**すべて radius 0px の完全角形**。角丸ボタンは一切使用されていない。これは精密工学ブランドとしてのデザイン意図。

### Cards

**Gallery Card（デザインページ）**
- Background: `#e4e5e6`
- Border: なし
- Border Radius: `0px`（角形を踏襲）
- Padding: 画像フル幅

**Content Card（ホワイト背景）**
- Background: `#ffffff`
- Border Radius: `0px`

### Navigation

- **Desktop Header**: 白背景、高さは余裕のあるレイアウト
- **Frosted Header（デザインサブサイト）**: `background: rgba(255, 255, 255, 0.8)` + `backdrop-filter: blur()` のすりガラス効果
- **Nav Overlay**: `rgba(53, 54, 59, 0.95)` の半透明ダーク

### Inputs

- Border: `1px solid #c6c6c6`
- Border Radius: **`0px`**
- Font Size: `16px`
- Font Family: HondaGlobalFontJP-Regular

---

## 5. Layout Principles

### Spacing Scale

Honda は明確なスペーシングトークンよりも、コンテンツに応じた余白設計を採用。セクション間は大きな余白で区切り、製品ビジュアルに十分な呼吸を与える。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン周り |
| S | 8px | 要素内パディング |
| M | 16px | カード内パディング |
| L | 24px | セクション内余白 |
| XL | 40px | セクション間余白 |
| XXL | 80px | ヒーロー・セクション間 |

### Container

- Max Width: 全幅レイアウト（コンテンツ部分は約 1200px 内に収まる）
- Padding (horizontal): `20px`〜`40px`

### Grid

- 製品ギャラリー: 2〜4 カラムのグリッド
- コンテンツエリア: 1 カラム中央揃え

---

## 6. Depth & Elevation

Honda のデザインはフラットを基調とし、影の使用を最小限に抑えている。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | デフォルト。ほぼすべての要素 |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ドロップダウンメニュー |
| Frosted | `backdrop-filter: blur(10px)` + `rgba(255,255,255,0.8)` | デザインサブサイトのヘッダー |
| Overlay | `rgba(53,54,59,0.95)` | ナビゲーションオーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#35363b`（ダークチャコール）を使い、純粋な `#000000` を避ける
- ボタン・CTA は `border-radius: 0px` の完全角形にする — Honda のアイデンティティ
- `font-feature-settings: "palt"` をグローバルに適用する（本文を含む）
- フォントウェイトの切り替えは `font-family` の変更で行う（Regular / Light / Bold）
- ダークセクション背景には `#35363b` を使い、テキスト色と背景色を統一的に扱う
- ナビゲーション要素には `letter-spacing: 0.05em` を適用する
- ダーク背景上のテキストは `#d7d8da`（白背景上より若干くすんだ白）を使う

### Don't（禁止）

- 角丸ボタンを使わない — `border-radius: 4px` や `8px` は Honda のデザイン意図に反する
- 純粋な `#000000` をテキストに使わない（`#35363b` を使用）
- CTA にソリッド（塗りつぶし）背景を多用しない — Honda の主要 CTA はアウトラインスタイル
- CSS `font-weight: 700` で太字を表現しない — Bold はフォントファミリーの切り替えで表現する
- ダーク背景上で純粋な `#ffffff` を本文テキストに使わない（`#d7d8da` を使用）
- 装飾的な影やグラデーションを多用しない — Honda はフラットで精密な印象を維持する

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタンは padding: 23px 28px で十分なタッチ領域を確保

### フォントサイズの調整

- モバイルでは本文 14-16px
- 見出しはデスクトップの 70-80% 程度に縮小
- HondaGlobalFontJP はモバイルでも同一フォントファミリーを使用

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #cc0000（Honda Red — アクセント用）
Text Primary: #35363b
Text Sub: #65666a
Text Appendix: #8c8d91
Background: #ffffff
Background Alt: #f4f5f5
Dark BG: #35363b
Gallery Card BG: #e4e5e6

Font (Body): HondaGlobalFontJP-Regular, "ヒラギノ角ゴ W3 JIS2004",
  "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
  Meiryo, sans-serif
Font (Nav): HondaGlobalFontJP-Light（同フォールバック）
Font (Heading): HondaGlobalFontJP-Bold（同フォールバック）

Body Size: 16px / line-height: 1.4 / letter-spacing: normal
Nav: letter-spacing: 0.05em
OpenType: font-feature-settings: "palt"（グローバル）
Button Radius: 0px（完全角形）
```

### プロンプト例

```
Honda のデザインに従って、製品一覧ページを作成してください。
- フォント: HondaGlobalFontJP-Regular（代替: Noto Sans JP）
  フォールバック: "ヒラギノ角ゴ W3 JIS2004", "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", 游ゴシック体, YuGothic, Meiryo, sans-serif
- テキスト色: #35363b（純粋な黒は使わない）
- 背景: #ffffff、セクション交互色: #f4f5f5
- ダークセクション: #35363b、テキスト: #d7d8da
- font-feature-settings: "palt"（グローバル適用）
- ボタン: border-radius: 0px の完全角形、アウトラインスタイル
- CTA: border: 1px solid #35363b, padding: 23px 28px
- 本文: 16px, line-height: 1.4
- ナビ: letter-spacing: 0.05em
```
