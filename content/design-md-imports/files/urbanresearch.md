# DESIGN.md — URBAN RESEARCH（アーバンリサーチ）

> URBAN RESEARCH（https://www.urban-research.jp/）のデザイン仕様書。
> 1974年創業の日本を代表するセレクトショップ。国内外のブランドをキュレーションするライフスタイルブランド。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白基調のクリーンな EC レイアウトに、**ディープバーガンディ `#5e181a`** をブランドカラーとしてナビゲーションアイコンに配置。商品写真を主役にし、UI 装飾を最小限に抑える伝統的なセレクトショップの EC 構成
- **密度**: 情報密度が高い EC サイト。商品グリッド、スライダー、カテゴリナビを効率的に配置。本文 line-height は 1.5 と標準的
- **キーワード**: クリーン EC、バーガンディアクセント、システムフォント、シャープエッジ、情報密度
- **特徴**:
  - **Web フォントを一切使わず、システムフォントのみ**で構成。ヒラギノ角ゴ ProN を最優先とし、游ゴシック Medium、メイリオとフォールバック。ECサイトとしてのページ速度を最優先する設計思想
  - **ブランドカラーは `#5e181a`（ディープバーガンディ）**。ワインレッドに近い深い赤茶色で、ナビゲーションバーのアイコン群（カート、お気に入り、スタイリング、検索、メニュー）に使用。セレクトショップとしての上品さと歴史を表現
  - **リンク色は `#37a5cc`（ティールブルー）**。バーガンディとの補色関係に近く、EC サイトのテキストリンクとして目立つ
  - **角丸なし（border-radius: 0px）** が全面的な設計方針。ボタン、カード、画像すべてがシャープな直角。丸みを排した端正な印象
  - テキスト色は `#333333`（ソフトブラック）を全面採用。純黒 `#000000` は使わず、コントラストを抑えたやわらかい黒
  - `font-feature-settings` は `normal`。palt / kern の明示的な適用なし
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Burgundy** (`#5e181a`): ブランドカラー。トップナビゲーションのアイコン背景（カート、お気に入り、スタイリング、検索、メニュー）に使用。ECサイト全体で最も印象的な色
- **Teal Blue** (`#37a5cc`): テキストリンク色。商品名リンク、パンくずリスト、テキストリンク全般に使用
- **Subtle Gold** (`#bca878`): プロモーション・キャンペーンバナーのアクセント色。限定的に使用

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#333333` | (51, 51, 51) | 本文・見出し・ラベル全般（ソフトブラック） |
| Text Secondary | `#747474` | (116, 116, 116) | 補助テキスト、価格注記 |
| Text Tertiary | `#a8a8a8` | (168, 168, 168) | プレースホルダー、無効状態 |
| Surface | `#f4f4f4` | (244, 244, 244) | セクション背景、カテゴリ面 |
| Dot Inactive | `#dcdcdc` | (220, 220, 220) | スライダーのページネーションドット（非活性） |
| Dot Active | `#333333` | (51, 51, 51) | スライダーのページネーションドット（活性） |
| White | `#ffffff` | (255, 255, 255) | ページ背景、カード背景 |

### Semantic

- **Error Surface** (`#f2dede`): エラーメッセージの背景
- **Error Text** (`#a94442`): エラーメッセージのテキスト
- **Error Border** (`#ebccd1`): エラーメッセージの枠線

> 成功・警告色は実測で未確認。必要な場合の推奨値:
> - **Success**: `#3c763d`（Bootstrap 系に合わせた控えめなグリーン）
> - **Warning**: `#8a6d3b`（同系のアンバー）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ヒラギノ角ゴ ProN**（Hiragino Kaku Gothic ProN）を最優先。Apple 環境で最も美しく表示される和文ゴシック
- **フォールバック**: 游ゴシック Medium → YuGothic → YuGothicM → メイリオ → Meiryo → sans-serif
- **明朝体**: 使用しない（サイト全体ゴシック統一）

> **ProN と Pro の違いに注意**: URBAN RESEARCH は **ProN**（JIS X 0213:2004 字形）を指定。ProN は「辻」「葛」等の新字体を使い、Pro は旧字体を返す。この違いはセレクトショップの商品名表記（ブランド名に人名漢字を含むケース）で影響する可能性がある

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**和文フォントの欧文グリフ**をそのまま使用
- ヒラギノ角ゴ ProN の欧文グリフは Helvetica ベースの設計で、EC サイトの英字表記に十分な品質
- Helvetica Neue / Arial 等の欧文専用書体は font-family に含まれない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h3, p, a, span, button, nav, header, footer） */
font-family: "Hiragino Kaku Gothic ProN", "游ゴシック Medium",
  YuGothic, YuGothicM, メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ ProN（macOS / iOS 標準搭載）を最優先
- 游ゴシック Medium（Windows 8.1+）を次点に。**"游ゴシック Medium" と名前で Medium ウェイトを指定**しているのが特徴（游ゴシックの Regular は細すぎて本文に不向きなため）
- YuGothic / YuGothicM は游ゴシックの内部名・短縮名をカバーするためのフォールバック
- メイリオ / Meiryo は Windows Vista 以降の旧環境向け
- **欧文専用書体を挟まない**構成。和文フォントの欧文グリフで統一する方針

> **プレビュー用代替フォント**: ヒラギノ角ゴ ProN はシステムフォントのため、非 Apple 環境ではフォールバックされる。Google Fonts 環境で代替する場合は **Noto Sans JP**（weight 400 / 600 / 700）が字面の広さとウェイトバリエーションで最も近い

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (Logo) | Hiragino Kaku Gothic ProN | 26px | 600 | 39px (x1.5) | normal | `#333333` | サイトロゴ／ブランド名 |
| H2 (Section) | Hiragino Kaku Gothic ProN | 24px | 600 | 36px (x1.5) | normal | `#333333` | セクション見出し |
| H2 (Sub) | Hiragino Kaku Gothic ProN | 16px | 400 | normal | normal | `#333333` | サブセクション見出し |
| H3 | Hiragino Kaku Gothic ProN | 24px | 700 | 36px (x1.5) | normal | `#333333` | カテゴリタイトル |
| Body | Hiragino Kaku Gothic ProN | 14px | 400 | 21px (x1.5) | normal | `#333333` | 商品説明、本文全般 |
| Nav Icon Label | Hiragino Kaku Gothic ProN | 12px | 400 | normal | 1.2px (0.1em) | `#ffffff` | ナビバーのアイコンラベル（カート、お気に入り等） |
| Caption | Hiragino Kaku Gothic ProN | 12px | 400 | 18px (x1.5) | normal | `#747474` | 補足テキスト、注釈 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (14px)**: `1.5`（21px / 14px）-- EC サイトとして標準的。情報密度を確保しつつ可読性を維持
- **見出し (24-26px)**: `1.5`（36-39px）-- 見出しも本文と同じ比率
- **ナビラベル (12px)**: `normal`（ブラウザ既定。約 1.2）

**字間 (letter-spacing)** -- 実測:
- **本文・見出し**: `normal`（0）-- letter-spacing を積極的に調整しない方針
- **ナビアイコンラベル (12px)**: `1.2px`（**0.1em**）-- 小さい文字のみ広めのトラッキングで可読性を確保

**ガイドライン**:
- URBAN RESEARCH は **letter-spacing をほぼ使わない**。本文も見出しも `normal` が基本
- 唯一の例外がナビゲーションアイコンのラベル（12px / 0.1em）。小さい文字でスペーシングを広げて読みやすくするパターン
- line-height は全体的に `1.5` で統一。STORES（1.75）や note（2.0）と比べると詰まった印象で、EC サイトの情報効率を優先

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: break-all;         /* 商品名・ブランド名の長い英字を折り返す */
overflow-wrap: break-word;     /* 長い URL の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- 商品名に英字ブランド名（URBAN RESEARCH DOORS, SENSE OF PLACE 等）が多く含まれるため、`word-break: break-all` で折り返しを許容する設計
- カテゴリ名は `white-space: nowrap` で改行を禁止

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- システムフォントの既定メトリクスに任せ、letter-spacing もほぼ `normal` で運用する方針
- palt を適用しないことで、全角文字が等幅で並ぶ整然としたグリッドレイアウトと親和性が高い

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Nav Icon Button（バーガンディ）** -- カート、お気に入り、スタイリング、検索、メニュー
- Background: `#5e181a`
- Text: `#ffffff`
- Padding: アイコンサイズに合わせたスクエアパディング
- Border Radius: `0px`（直角）
- Font: 12px, weight 400, letter-spacing 0.1em
- Border: none

**Pagination Dot（活性）**
- Background: `#333333`
- Width / Height: 8px
- Border Radius: `0px`（四角ドット）

**Pagination Dot（非活性）**
- Background: `#dcdcdc`
- Width / Height: 8px
- Border Radius: `0px`（四角ドット）

**Text Link**
- Background: transparent
- Text: `#37a5cc`（ティールブルー）
- Font: 14px, weight 400
- Text Decoration: none（ホバーで underline）

**General CTA（推奨実装）**
- Background: `#333333`
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `0px`（直角）
- Font: 14px, weight 400〜600
- Border: none

**Secondary CTA（推奨実装）**
- Background: `#ffffff`
- Text: `#333333`
- Padding: `12px 24px`
- Border Radius: `0px`（直角）
- Border: `1px solid #333333`
- Font: 14px, weight 400

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dcdcdc`
- Border (focus): `1px solid #333333`
- Border Radius: `0px`（直角）
- Padding: `8px 12px`
- Font: 14px, weight 400
- Height: `40px`

### Cards（商品カード）

- Background: `#ffffff`
- Border: none（画像のみでカードを構成）
- Border Radius: `0px`（直角）
- Shadow: none（フラット）
- 商品画像 + テキストの縦積み構成。枠線なし、影なしが基本

### Error Alert

- Background: `#f2dede`
- Text: `#a94442`
- Border: `1px solid #ebccd1`
- Border Radius: `0px`
- Padding: `15px`

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #f4f4f4`（またはなし）
- Position: fixed / sticky
- Nav icons background: `#5e181a`（バーガンディ）

### Footer

- Background: `#ffffff` または `#f4f4f4`
- Border Top: `1px solid #dcdcdc`
- Padding: `40px 20px`

---

## 5. Layout Principles

### Spacing Scale（推奨 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内の要素間 |
| M | 16px | 商品グリッドのガター |
| L | 24px | セクション内の見出しと本文 |
| XL | 40px | セクション間の縦余白 |
| XXL | 60px | ヒーローバナー上下のゆとり |

### Container

- Max Width: `1200px`（中央寄せ）
- Padding (horizontal): mobile `15px` / desktop `20〜30px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | **すべてのコンポーネント** -- ボタン、カード、入力欄、画像、ドット |

URBAN RESEARCH は **border-radius を一切使わない**設計。pill ボタンも角丸カードも存在しない。

### Grid

- 商品一覧: 2カラム（モバイル）/ 3〜4カラム（デスクトップ）
- Gutter: 16px
- 商品画像はアスペクト比固定（概ね 3:4）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **ほぼすべての要素**（カード、ボタン、ヘッダー） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ドロップダウンメニュー（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | モーダル・オーバーレイ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none` のフラットデザイン
- 階層感は **背景色の切り替え**（`#ffffff` ↔ `#f4f4f4`）と **ボーダー**（`#dcdcdc`）で表現
- ボックスシャドウを使う場面はドロップダウンメニューやモーダルの浮遊要素に限定
- フラットで端正な印象が URBAN RESEARCH の EC サイトの基調

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **ヒラギノ角ゴ ProN を最優先**、フォールバックは游ゴシック Medium → YuGothic → メイリオ → sans-serif の順で指定する
- テキスト色は **`#333333`（ソフトブラック）** を基本にする。純黒 `#000000` は使わない
- border-radius は **すべて 0px** にする。直角がブランドの基調
- ブランドカラー `#5e181a`（バーガンディ）は **ナビゲーションアイコン等の限定要素**に絞る。CTAや本文に使いすぎない
- リンクテキストは **`#37a5cc`（ティールブルー）** で統一する
- 商品カードは **枠線なし・影なし**のフラット構成にする
- 階層感は **背景色の切り替え**（`#ffffff` と `#f4f4f4`）で表現する
- 小さいラベル（12px）のみ **letter-spacing 0.1em** で広げ、それ以外は `normal` を維持する
- エラー表示は **Bootstrap 互換の `#f2dede` / `#a94442` / `#ebccd1`** を使う

### Don't（禁止）

- **border-radius を付けない**。pill ボタン（9999px）も角丸カード（8px / 16px）も使わない
- 本文に **`line-height: 1.2` 以下**を使わない（情報密度は高いが、1.5 は維持する）
- **純黒 `#000000`** をテキスト色に使わない。URBAN RESEARCH のソフトな印象が崩れる
- **letter-spacing を広く取りすぎない**。本文・見出しは `normal` が基本で、0.04em〜0.1em の広いトラッキングは12px以下の小ラベルのみ
- ブランドカラー `#5e181a` を **CTA ボタンの背景に多用しない**。ナビゲーション要素に限定する
- ティールブルー `#37a5cc` を **ボタン背景やアクセント面**に使わない。テキストリンク専用
- **Web フォント（Noto Sans JP, Inter 等）をプロダクション環境で指定しない**。システムフォントのみで構成するのが URBAN RESEARCH の方針
- 商品カードに **box-shadow を付けない**。ホバーエフェクトも opacity や border-bottom で表現し、影は使わない
- **ウォームトーンやベージュ系**（`#f2f2f0` 等）のサーフェスを使わない。URBAN RESEARCH のグレーは **ニュートラルグレー `#f4f4f4`**（ウォーム寄りではない）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト。商品グリッド2カラム |
| Tablet | 768px - 1023px | タブレットレイアウト。商品グリッド3カラム |
| Desktop | >= 1024px | デスクトップレイアウト。商品グリッド3〜4カラム |

### モバイル時の調整

- H2 セクション見出し: 24px → 18〜20px
- H3: 24px → 16〜18px
- 本文サイズは 14px を維持
- ナビゲーションはハンバーガーメニュー化。バーガンディアイコンは維持
- 商品グリッドは2カラム。ガターは 8〜12px に縮小

### タッチターゲット

- ナビアイコン: 44px x 44px 以上（WCAG 基準）
- 商品カードのタップエリア: 画像 + テキスト全体
- ページネーションドット: 間隔を広めに（誤タップ防止）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Burgundy (Nav Icons): #5e181a
Teal Blue (Links): #37a5cc
Subtle Gold (Promo): #bca878
Text Primary: #333333
Text Secondary: #747474
Text Tertiary: #a8a8a8
Surface: #f4f4f4
Dot Inactive: #dcdcdc
White: #ffffff
Error: bg #f2dede / text #a94442 / border #ebccd1

Font: "Hiragino Kaku Gothic ProN", "游ゴシック Medium", YuGothic, YuGothicM, メイリオ, Meiryo, sans-serif
（非 Apple 環境の代替: Noto Sans JP weight 400 / 600 / 700）

Body Size: 14px / line-height 1.5 / weight 400 / letter-spacing normal
Section Heading: 24px / line-height 1.5 / weight 600 / letter-spacing normal
H3: 24px / line-height 1.5 / weight 700 / letter-spacing normal
Nav Label: 12px / weight 400 / letter-spacing 0.1em
Caption: 12px / line-height 1.5 / weight 400 / color #747474

Border Radius: 0px（すべてのコンポーネント）
Shadow: 基本 none。階層は #f4f4f4 サーフェスとボーダーで表現
```

### プロンプト例

```
URBAN RESEARCH のデザインに従って、セレクトショップの商品一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic ProN", "游ゴシック Medium", YuGothic, YuGothicM, メイリオ, Meiryo, sans-serif
- セクション見出し: 24px / weight 600 / line-height 1.5 / letter-spacing normal / color #333333
- 本文: 14px / weight 400 / line-height 1.5 / letter-spacing normal / color #333333
- 補助テキスト: 12px / weight 400 / color #747474
- リンク: color #37a5cc（ティールブルー）/ text-decoration none / hover で underline
- ナビアイコン: 背景 #5e181a（バーガンディ）/ 白文字 / 12px / letter-spacing 0.1em
- ボタン: 背景 #333333 / 白文字 / border-radius 0px / padding 12px 24px
- セカンダリボタン: 背景 白 / 文字 #333333 / border 1px solid #333333 / radius 0px
- 商品カード: 枠線なし、影なし、背景 #ffffff。画像は直角（radius 0px）
- セクション背景: #ffffff と #f4f4f4 の切り替えで階層を表現
- ページネーションドット: 四角（radius 0px）/ active #333333 / inactive #dcdcdc
- border-radius は一切使わない（0px で統一）
- box-shadow は基本 none
- 純黒 #000000 は使わない。テキストは #333333
```
