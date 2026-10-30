# DESIGN.md — Onitsuka Tiger（オニツカタイガー）

> Onitsuka Tiger（https://www.onitsukatiger.com/jp/ja-jp/）のデザイン仕様書。
> ASICS のヘリテージファッションブランド。ラグジュアリーストリートウェアとハイファッションスニーカーで知られる。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ハイファッション × ヘリテージの二面性を、**モノクロームの余白**と**ヨーロピアンジオメトリックサンス (matter)** で表現する。プロダクトが主役のエディトリアルレイアウト
- **密度**: 余白を大きくとり、情報密度を極めて低く保つ。ラグジュアリーブランドのルックブック的な疎の美学
- **キーワード**: ラグジュアリー・ストリートウェア、モノクローム、エディトリアル、ヨーロピアンタイプフェイス、プロダクトセンター
- **特徴**:
  - 欧文フォントに **matter（Displaay 製のジオメトリックサンス）** を採用。ファッションブランド特有の「欧文が先」のフォントスタック。日本語は Noto Sans JP にフォールバック
  - ディスプレイ・エディトリアル用に **Reckless（Displaay 製のコントラストセリフ）** を持つ。ルックブック風の見出しや商品名に使用
  - ブランドカラーは **`#212322`（暗い緑みの黒）**。純黒ではなく、わずかに緑を含む。CTA ボタン・テキスト・アイコンのすべてにこの色を使用
  - CTA は **ピル形状（radius 50〜60px）** が基本。ラグジュアリーブランドらしい柔らかさ
  - アクセントカラーは **`#be0026`（セール・限定のレッド）** と **`#ecc7cd`（ソフトピンク、CSS変数 `--gle_color_accent`）**
  - サーフェスに `#f5f5f5` のライトグレーを使い、白との微妙な階層で奥行きを作る
  - 装飾を極限まで排除したミニマルデザイン。影・グラデーション・ボーダーは最小限
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Dark** (`#212322`): ブランドのプライマリカラー。CTA 背景、テキスト、アイコンすべてに使用。純黒ではなく、わずかに緑を含む暗色（rgb(33, 35, 34)）
- **Accent Pink** (`#ecc7cd`): CSS変数 `--gle_color_accent`。ブランドのソフトアクセント。コレクション特集やホバー演出で使用
- **Sale Red** (`#be0026`): セール・限定商品・価格強調に使用（rgb(190, 0, 38)）

### CTA / Buttons

- **Primary CTA**: 背景 `#212322` / 文字 `#ffffff` / radius `60px`（pill）/ padding `18px 17px`
- **Secondary CTA**: 背景 `transparent` / 文字 `#212322` / border `1px solid #212322` / radius `50px`（pill）
- **Newsletter CTA**: 背景 `#212322` / 文字 `#ffffff` / radius `0px`（角型）/ padding `10px 20px` — フッターのニュースレター登録のみ角型
- **CSS変数**: `--colorBtnPrimary: #000000`（CSS定義上は純黒だが、実レンダリングは `#212322`）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Brand Dark | `#212322` | (33, 35, 34) | テキスト・CTA・アイコン |
| Gray Text | `#626262` | (98, 98, 98) | 補助テキスト・価格・キャプション |
| Border | `#e7e8ea` | (231, 232, 234) | 区切り線・入力欄枠 |
| Nav Border | `#babec2` | (186, 190, 194) | ナビタブのボーダー |
| Gray (CSS var) | `#d9d9d6` | (217, 217, 214) | 汎用グレー（`--gle_color_gray`） |
| Surface | `#f5f5f5` | (245, 245, 245) | カード面・セクション背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（推奨値）

- **Danger / Sale**: `#be0026`（実測。セール価格・限定表示に使用）
- **Success**: `#2d8a4e` 程度の落ち着いたグリーン（推奨）
- **Warning**: `#c67a00` 程度のゴールドオレンジ（推奨）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** をフォールバックに使用。matter の日本語グリフがない部分を補完
- **明朝体**: 使用しない（サイト全体でゴシック / サンセリフ統一）

### 3.2 欧文フォント

- **サンセリフ（メイン）**: **matter**（Displaay 製ジオメトリックサンス）。ブランドの中核書体。ナビ・本文・ボタンラベルすべてに使用
- **セリフ（ディスプレイ）**: **Reckless**（Displaay 製コントラストセリフ）。エディトリアル・ルックブック風の商品名・コレクション見出しに使用
- **フォールバック**: `"Helvetica Neue", Helvetica, Arial, sans-serif`

### 3.3 font-family 指定

```css
/* メイン（body, nav, button, p, span 等） */
font-family: matter, Reckless, "Noto Sans JP", sans-serif,
  "Helvetica Neue", Helvetica, Arial, sans-serif;

/* CSS変数定義（本文） */
--gle_font_family--p: 'matter', sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**: matter（欧文ジオメトリックサンス）を最優先。ファッションブランドとして欧文の表示品質を最重視
- Reckless はセリフ体だが font-family チェーンに含まれている（CSS 上の指定であり、実際の使い分けはクラスや要素ごとに切り替え）
- Noto Sans JP が日本語の受け皿。matter に日本語グリフがないため、和文は実質 Noto Sans JP で描画される
- 最終フォールバックに Helvetica Neue → Helvetica → Arial → sans-serif

> **代替フォント注記**: matter は Displaay のライセンスフォントのため、プレビューや社外資料では表示できない場合がある。代替として **Inter**（ジオメトリックサンス）が字面のクリーンさで近い。Reckless の代替は **Playfair Display** がコントラストセリフとして近い印象になる（いずれも Google Fonts で利用可）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ / 商品一覧 / 商品詳細ページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (商品名) | matter | 40px | 400 | 48px (×1.2) | 1.2px (0.03em) | `#212322` | 商品名・コレクション見出し |
| Heading 1 | matter | 24px | 600 | 24px (×1.0) | 0.72px (0.03em) | `#212322` | ページタイトル |
| Heading 2 | matter | 16px | 700 | 17.6px (×1.1) | 0.42px (0.026em) | `#212322` | セクション見出し |
| Heading 3 (Nav) | matter | 16px | 700 | — | — | `#212322` | ナビゲーション見出し |
| Body | matter / Noto Sans JP | 14px | 400 | 20px (×1.43) | 0.42px (0.03em) | `#212322` | 基本本文 |
| Body (Description) | matter / Noto Sans JP | 14px | 500 | 25px (×1.79) | 0.7px (0.05em) | `#212322` | 商品説明・段落テキスト |
| Label (Brand) | matter | 14px | 700 | — | 1.4px (0.1em) | `#212322` | ブランド名・カテゴリラベル（広い字間で格調を出す） |
| Caption | matter / Noto Sans JP | 12px | 400 | — | 0.36px (0.03em) | `#626262` | 補助テキスト・注釈 |
| Price | matter | 14px | 500 | — | — | `#212322` | 価格表示 |
| Sale Price | matter | 14px | 500 | — | — | `#be0026` | セール価格（赤） |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.43`（20px / 14px）— ファッション EC として標準的
- **本文・商品説明 (14px)**: `1.79`（25px / 14px）— 商品説明はやや広め
- **Display (40px)**: `1.2`（48px / 40px）— 大きな見出しはタイト
- **H1 (24px)**: `1.0`（24px / 24px）— ページタイトルは密着
- **H2 (16px)**: `1.1`（17.6px / 16px）— セクション見出しもタイト

**字間 (letter-spacing)** — 実測:
- **本文 (14px)**: `0.03em`（0.42px / 14px）— わずかに広げてクリーンさを保つ
- **商品説明 (14px)**: `0.05em`（0.7px / 14px）— やや広め
- **ブランドラベル (14px)**: `0.1em`（1.4px / 14px）— ラグジュアリーブランドの定石。広い字間で高級感を演出
- **Display (40px)**: `0.03em`（1.2px / 40px）
- **H1 (24px)**: `0.03em`（0.72px / 24px）
- **H2 (16px)**: `0.026em`（0.42px / 16px）

**ガイドライン**:
- Onitsuka Tiger はすべてのテキスト階層で**正の letter-spacing** を使用する。見出しの負トラッキングは使わない
- ブランドラベル（商品名横のブランド名等）は **0.1em** と大きめの letter-spacing で格調を演出。ラグジュアリーファッション特有の手法
- 日本語本文（Noto Sans JP 描画）は line-height 1.43〜1.79 で、一般的な日本語 Web（1.7〜2.0）よりやや詰め気味。ファッション EC のビジュアル重視な組版
- weight は 400（通常）/ 500（説明文）/ 600（H1）/ 700（H2・ラベル）の4段

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名は `<br>` で手動改行の箇所あり
- ナビ・ボタンラベルは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- matter のデフォルトメトリクスに任せる方針
- 日本語テキスト（Noto Sans JP）にも palt は適用しない

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ダークピル）** — "もっと見る"・"カートに入れる"
- Background: `#212322`
- Text: `#ffffff`
- Padding: `18px 17px`
- Border Radius: `60px`（ピル）
- Font: matter, 14px, weight 500
- Border: none
- Hover: 背景の明度を上げる（`#3a3c3b` 程度）

**Secondary CTA（アウトラインピル）** — "会員登録"
- Background: `transparent`
- Text: `#212322`
- Border: `1px solid #212322`
- Padding: `18px 17px`
- Border Radius: `50px`（ピル）
- Font: matter, 14px, weight 500

**Login CTA** — "ログイン"
- Background: `#212322`
- Text: `#ffffff`
- Padding: `18px 17px`
- Border Radius: `50px`（ピル）
- Font: matter, 14px, weight 500

**Newsletter CTA** — "登録する"
- Background: `#212322`
- Text: `#ffffff`
- Padding: `10px 20px`
- Border Radius: `0px`（角型 — フッター専用の例外）
- Font: matter, 14px, weight 500

**Nav Tab** — カテゴリ切り替え
- Background: `transparent`
- Text: `#212322`
- Border: `1px solid #babec2`
- Padding: `13px 10px`
- Border Radius: `0px`
- Font: matter, 14px, weight 400

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e7e8ea`
- Border (focus): `1px solid #212322`
- Border Radius: `0px`（角型 — ラグジュアリーブランド特有のシャープさ）
- Padding: `12px 16px`
- Font: matter / Noto Sans JP, 14px, weight 400
- Height: `44px`

### Cards（商品カード）

- Background: `#ffffff`
- Border: none（ボーダーレス）
- Border Radius: `0px`（角型）
- Shadow: none（完全フラット）
- 商品画像 + テキスト情報の縦積み構成
- 画像部分は背景 `#f5f5f5` のライトグレー

### Header

- Background: `#ffffff`（白、スクロール時も白を維持）
- Border Bottom: `1px solid #e7e8ea`
- Position: `fixed top: 0`
- z-index: 高め（ナビゲーションの上に重なる）
- ロゴは中央配置

### Footer

- Background: `#212322`（ダーク）
- Text: `#ffffff`
- Padding: `48px 24px`
- ニュースレター登録フォームを含む

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白・テキスト間の微調整 |
| M | 16px | カード内の段落間・ボタンの横余白 |
| L | 24px | セクション内の見出しと本文・カードの内側余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下の大余白 |
| XXXL | 120px | セクション間の大きなブレイク |

### Container

- Max Width: `1440px`（ファッションブランドとして広めのビューポートを活用）
- Padding (horizontal): mobile `16px` / desktop `24〜48px`

### Grid

- 商品一覧: 4カラム（デスクトップ）/ 2カラム（モバイル）
- Gutter: `16〜24px`
- ルックブック: 1〜2カラムの大判レイアウト

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | 入力欄・カード・商品画像・ニュースレターボタン |
| Small | 4px | バッジ・タグ |
| Pill | 50〜60px | CTA ボタン |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・すべての基本状態（完全フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウンメニュー・ミニカート |
| 3 | `0 16px 48px rgba(0, 0, 0, 0.12)` | モーダル・クイックビュー（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は `#f5f5f5` のライトグレーサーフェスと白背景のコントラストで表現
- ラグジュアリーブランドとしてフラットデザインを徹底。影に頼らない階層表現
- 影を使う場合も `rgba(0, 0, 0, 0.06〜0.12)` の極めて控えめな値にとどめる

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文フォントは **matter を最優先**。日本語は Noto Sans JP にフォールバック
- エディトリアル・コレクション見出しには **Reckless（コントラストセリフ）** を使い、matter との対比で緊張感を出す
- テキストカラーは **`#212322`（緑みの黒）** を使う。純黒 `#000000` ではない
- CTA は **ピル形状（radius 50〜60px）** を基本にする
- 商品カードは **ボーダーレス・シャドウレス** のフラット構成にする
- 商品画像の背景は **`#f5f5f5`** のライトグレーで統一する
- ブランドラベルの letter-spacing は **0.1em** で格調を演出する
- 余白を大きくとり、情報密度を低く保つ（ラグジュアリーブランドの疎の美学）
- フッターはダーク（`#212322`）にし、ヘッダー・本文エリアの白との対比を作る

### Don't（禁止）

- テキストに**純黒 `#000000`** を使わない — ブランドダークは `#212322`（緑みの暗色）
- CTA に**角型（radius 0）** を使わない — ニュースレターフッターのみ例外
- **カラフルなアクセント**を多用しない — モノクロームが基本。色を使うのはセール `#be0026` とアクセントピンク `#ecc7cd` のみ
- 商品カードに**影やボーダー**をつけない — 完全フラットが Onitsuka Tiger のスタイル
- 日本語本文に **line-height 1.3 以下** を使わない（最低 1.43）
- **装飾的なグラデーション・パターン背景**を使わない — 白とライトグレーの最小限の面で構成する
- matter の代わりに**ゴシック体（游ゴシック・ヒラギノ角ゴ等）を直接使わない** — 和文と欧文の書体バランスが崩れる。matter 不在時は Inter + Noto Sans JP を組み合わせる
- ブランドラベルの letter-spacing を **0.03em 以下** にしない — 0.1em の広い字間がラグジュアリー感の鍵

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。2カラム商品グリッド |
| Tablet | 768〜1023px | タブレット。3カラム商品グリッド |
| Desktop | ≥ 1024px | デスクトップ。4カラム商品グリッド |
| Wide | ≥ 1440px | ワイドデスクトップ。余白がさらに広がる |

### モバイル時の調整

- Display (40px) → 24〜28px
- H1 (24px) → 18〜20px
- 本文サイズは 14px を維持
- ナビはハンバーガーメニュー化、展開時にフルスクリーンドロワー
- 商品グリッド: 4カラム → 2カラム
- ヒーロービジュアル: フルブリード（左右余白なし）

### タッチターゲット

- CTA ボタン: 高さ 44px 以上（padding `18px` + font 14px で十分な高さ）
- ナビリンク: 44px のタップ領域を確保
- 商品カード: カード全体がタップ可能領域

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Dark (Text/CTA): #212322
White (BG): #ffffff
Surface (Light Gray): #f5f5f5
Border: #e7e8ea
Sale Red: #be0026
Accent Pink: #ecc7cd
Gray Text: #626262

Font (Main): matter, Reckless, "Noto Sans JP", sans-serif,
  "Helvetica Neue", Helvetica, Arial, sans-serif
Font CSS var: --gle_font_family--p: 'matter', sans-serif
（matter 不在時の代替: Inter + Noto Sans JP / Reckless 代替: Playfair Display）

Body: 14px / weight 400 / line-height 1.43 / letter-spacing 0.03em
Description: 14px / weight 500 / line-height 1.79 / letter-spacing 0.05em
Brand Label: 14px / weight 700 / letter-spacing 0.1em
Display: 40px / weight 400 / line-height 1.2 / letter-spacing 0.03em
H1: 24px / weight 600 / line-height 1.0 / letter-spacing 0.03em
H2: 16px / weight 700 / line-height 1.1 / letter-spacing 0.026em

CTA Primary: bg #212322 / text white / radius 60px (pill)
CTA Secondary: bg transparent / text #212322 / border 1px solid #212322 / radius 50px (pill)
Card: border none / shadow none / radius 0 (flat)
Input: border 1px solid #e7e8ea / radius 0
```

### プロンプト例

```
Onitsuka Tiger のデザインに従って、スニーカーの商品一覧ページを作成してください。
- フォント: matter, Reckless, "Noto Sans JP", sans-serif, "Helvetica Neue", Helvetica, Arial, sans-serif
- 商品名（Display）: 40px / weight 400 / line-height 1.2 / letter-spacing 0.03em / color #212322
- セクション見出し: 16px / weight 700 / line-height 1.1 / letter-spacing 0.026em / color #212322
- 本文: 14px / weight 400 / line-height 1.43 / letter-spacing 0.03em / color #212322
- ブランドラベル: 14px / weight 700 / letter-spacing 0.1em / color #212322 — 広い字間でラグジュアリー感を出す
- 商品説明: 14px / weight 500 / line-height 1.79 / letter-spacing 0.05em
- Primary CTA: 背景 #212322 / 白文字 / border-radius 60px（ピル）/ padding 18px 17px
- Secondary CTA: 背景 transparent / 文字 #212322 / border 1px solid #212322 / radius 50px（ピル）
- 商品カード: ボーダーなし、シャドウなし、角型（radius 0）。画像背景は #f5f5f5
- ページ背景: #ffffff、セクション面: #f5f5f5
- セール価格: #be0026（赤）
- テキストは純黒 #000000 ではなく、必ず #212322（緑みの暗色）を使う
- 4カラムグリッド、余白を大きくとり情報密度を低く保つ
- 装飾を排除し、プロダクトが主役のエディトリアルレイアウトにする
```
