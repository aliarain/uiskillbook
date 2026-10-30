# DESIGN.md — shu uemura（シュウ ウエムラ）

> shu uemura（https://www.shuuemura.jp/）のデザイン仕様書。
> 2026-05-10 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: L'Oreal グループ傘下のラグジュアリーコスメティクスブランド。メイクアップアーティスト・植村秀の美学を継承し、**シャープで無駄のないモダンラグジュアリー**を体現する。Helvetica Neue LT Std を基盤とした欧文優先のタイポグラフィ、border-radius 0px の完全な直角、そしてブラック / ホワイト / ゴールドの三色構成が、プロフェッショナルな「道具としての美」を伝える
- **密度**: ヒーロービジュアル主導のプロダクトショーケース型。大きな写真と少ないテキストで世界観を打ち出し、ディープブルーグレー (#27455c) のムーディな色面がブランドの深みを演出する
- **キーワード**: シャープエッジ、ラグジュアリーコスメ、Helvetica Neue、ブラック＆ゴールド、weight 300、border-radius 0px
- **特徴**: **border-radius 0px の徹底**が最大の特徴。CTA・カード・バッジ・スウォッチすべてに丸みがなく、鋭角的でプロフェッショナルな印象を貫く。font-weight 300（Light）の多用がエアリーなラグジュアリー感を生み、Helvetica Neue LT Std の Extended / Light / Roman の使い分けで微細な階層を表現する。letter-spacing は全要素 `normal`（0）で、字詰めによる演出を行わないストレートなタイポグラフィ。CSS Custom Properties は使用せず、すべてハードコード

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

shu uemura のカラーパレットはブラック / ホワイト / ゴールドが軸。深いブルーグレーがブランドの「ムード」を担い、スキントーンのアクセントがコスメブランドらしい温かみを加える。

- **Black** (`#000000`): メイン CTA 背景・テキスト・ヘッダー。ブランドの基調色
- **Near Black** (`#171717`): ヘッダー・フッター背景（rgb 23, 23, 23）
- **Deep Blue-Gray** (`#27455c`): ブランドアトモスフィア色（rgb 39, 69, 92）— 10 件の出現。ヒーロー背景・プロモーションセクションに使用し、ムーディで深みのある世界観を構築
- **Gold** (`#d1a85d`): アクセント CTA・プレミアム感の演出（rgb 209, 168, 93）

### Accent（コスメティックカラー）

- **Warm Peach** (`#f8cfa9`): スキントーン・コスメビジュアル用（rgb 248, 207, 169）
- **Burgundy** (`#a4493d`): リップ系・深みのある製品カラー（rgb 164, 73, 61）
- **Mauve** (`#984856`): ローズ系の製品カラー（rgb 152, 72, 86）
- **Red** (`#b80220`): ヒーロー CTA・強調アクション（rgb 184, 2, 32）

### Neutral

- **Text Primary** (`#000000`): 本文テキスト
- **Text Body** (`#333333`): セカンダリテキスト・段落本文（rgb 51, 51, 51）
- **Text Gray** (`#4e4e4e`): 補助テキスト（rgb 78, 78, 78）
- **Text Label** (`#696969`): ラベル・キャプション（rgb 105, 105, 105）
- **Text on Dark** (`#ffffff`): ダーク背景上の白テキスト
- **Dark Overlay** (`rgba(51, 51, 51, 0.53)`): オーバーレイ・モーダル背景

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Light Gray** (`#f7f6f7`): セクション背景・カード面（rgb 247, 246, 247）
- **Surface Near Black** (`#171717`): ヘッダー・フッター
- **Surface Blue-Gray** (`#27455c`): プロモーション・ヒーローセクション

---

## 3. Typography Rules

### 3.1 和文フォント

shu uemura の和文フォントは製品ページに限定的に使用される。ブランドのメインタイポグラフィは欧文（Helvetica Neue LT Std）が主導し、和文は補助的な役割。

- **游ゴシック Medium**: 製品ページの日本語テキスト用。`"Yu Gothic Medium"`, `"游ゴシック Medium"`, `"Yu Gothic"`, `游ゴシック`, `YuGothic`, `游ゴシック体` の順でフォールバック
- Medium ウェイトを `@font-face` ではなくフォント名で直接指定する方式

> **補足**: ヒーロー・ナビゲーション等のブランド要素はほぼ欧文表記のため、和文フォントの出番は製品説明・成分表示等に限られる

### 3.2 欧文フォント

shu uemura のタイポグラフィの主役。Helvetica Neue LT Std のバリエーション使い分けが特徴的。

- **HelveticaNeueLTStd**: 標準ウェイト（ナビゲーション・ボタン）
- **HelveticaNeueLTStd-Lt**: Light ウェイト（見出し・ヒーローテキスト）
- **HelveticaNeueLTStd-Ex**: Extended 幅（ヒーロー CTA・大きな見出し）
- **HelveticaNeueLTStd-Roman**: 正体（検索入力・フォーム）
- **Arial**: 製品ページのフォールバック

> **Adobe Fonts 注意**: HelveticaNeueLTStd は Adobe Fonts（Typekit）経由のライセンスフォント。preview.html では表示されないため、Google Fonts の **Inter**（幾何学的サンセリフとして最も近い代替）を使用する

### 3.3 font-family 指定

```css
/* ブランド要素（ヘッダー・ナビ・CTA・ヒーロー） */
font-family: HelveticaNeueLTStd, sans-serif;

/* Light ウェイトの見出し */
font-family: HelveticaNeueLTStd-Lt, sans-serif;

/* Extended ウェイト（ヒーロー CTA） */
font-family: HelveticaNeueLTStd-Ex, sans-serif;

/* 検索入力 */
font-family: HelveticaNeueLTStd-Roman, sans-serif;

/* 製品ページ（和文含む） */
font-family: Arial, "Yu Gothic Medium", "游ゴシック Medium", "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体, sans-serif;

/* preview.html 代替 */
font-family: "Inter", sans-serif;
```

**フォールバックの考え方**:
- ブランド要素は Helvetica Neue LT Std のバリエーションを直接指定し、sans-serif のみフォールバック
- 製品ページは Arial を先頭に、游ゴシック Medium のフォールバックチェーンが続く
- HelveticaNeueLTStd の Lt / Ex / Roman はフォント名自体でウェイト・幅を切り替える方式（CSS の font-weight / font-stretch ではない）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Heading | HelveticaNeueLTStd-Lt | 36px | 300 | 1.4 (50.4px) | normal | h1 / ページヒーロー |
| Hero Subtitle | HelveticaNeueLTStd-Ex | 34px | 400 | — | normal | h2 / ヒーロー補足 |
| Hero CTA | HelveticaNeueLTStd-Ex | 26px | 400 | — | normal | ヒーローボタン / color #b80220 or #fff |
| Section Heading | HelveticaNeueLTStd-Lt | 24px | 300 | — | normal | h3 / セクション見出し |
| Subsection | HelveticaNeueLTStd | 14px | 300–400 | — | normal | h3 小 / サブ見出し |
| Body Large | — | 16px | 300 | — | normal | 製品説明・リード文 |
| Body | — | 14px | 300–400 | — | normal | 標準本文 |
| Body Small | — | 12px | 400 | 1.5 (18px) | normal | ナビ・キャプション |
| Nav | HelveticaNeueLTStd | 12px | 400–700 | — | normal | ヘッダーナビゲーション |
| Button | HelveticaNeueLTStd | 10–14px | 400 | — | normal | CTA テキスト |
| Search Input | HelveticaNeueLTStd-Roman | 26px | 400 | — | normal | 検索フィールド |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（18px / 12px）— 標準本文
- **見出し（h1）の行間**: `line-height: 1.4`（50.4px / 36px）— ヒーロー見出し
- **本文の字間**: `letter-spacing: normal`（0）— すべてのテキスト共通
- **見出しの字間**: `letter-spacing: normal`（0）

**ガイドライン**:
- shu uemura は **letter-spacing を一切変更しない**。normal（0）がすべてのテキストに適用される
- 日本語サイトとしては珍しく、palt も letter-spacing 調整も行わないストレートなタイポグラフィ
- 階層の表現はフォントサイズ・ウェイト（300 vs 400 vs 700）・フォントバリエーション（Lt / Ex / Roman）で行う

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- ブランド要素は欧文中心のため、日本語禁則の問題が発生しにくい設計

### 3.7 OpenType 機能

```css
/* palt: 適用なし */
/* kern: 適用なし */
```

- **palt は使用しない**: letter-spacing: normal と合わせ、文字間隔を一切カスタマイズしないのが shu uemura のスタイル
- Helvetica Neue LT Std 自体が優れたメトリクスを持つため、追加の字詰めを必要としない設計思想

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**すべてのボタンが border-radius: 0px**。丸みのない直角が shu uemura のビジュアルアイデンティティ。

**Primary CTA（塗りつぶし・ブラック）**

- Background: `#000000`
- Text: `#ffffff`
- Border Radius: **0px**（完全な直角）
- Padding: 17px 20px
- Font Family: HelveticaNeueLTStd, sans-serif
- Font Size: 14px
- Font Weight: 400

**Secondary CTA（白抜き・アウトライン）**

- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Border Radius: **0px**
- Padding: 17px 40px
- Font Size: 14px

**Gold CTA（プレミアム）**

- Background: `#d1a85d`
- Text: `#ffffff`
- Border Radius: **0px**
- Padding: 16px 22px
- Font Size: 14px
- 用途: メンバーシップ・プレミアムオファー

**Hero CTA（レッドアクセント）**

- Background: `#b80220`
- Text: `#ffffff`
- Border Radius: **0px**
- Font Family: HelveticaNeueLTStd-Ex, sans-serif
- Font Size: 26px
- 用途: ヒーローバナーの主要アクション

**Header CTA（コンパクト）**

- Background: `#000000`
- Text: `#ffffff`
- Border Radius: **0px**
- Padding: 4px 12px 3px
- Font Size: 10–12px
- 用途: ヘッダー内のミニ CTA

**ボタンの考え方**:
- **border-radius は常に 0px**。pill も角丸も存在しない。エッジの効いたシャープさがブランドの核心
- Primary はブラック塗りつぶし、Secondary は白抜きアウトライン
- ゴールドとレッドは特別な場面（プレミアム・ヒーロー）でのみ使用
- font-weight は **400** が標準。ボタンテキストを太くしない

### Inputs

**検索フィールド**

- Font Family: HelveticaNeueLTStd-Roman, sans-serif
- Font Size: 26px（大きめの検索入力）
- Font Weight: 400
- Background: `#ffffff`
- Border: 下線のみのミニマルスタイル
- Border Radius: 0px

### Cards（製品カード）

- Background: `#ffffff`
- Border Radius: 0px
- Shadow: なし
- 製品画像 + 製品名 + 価格のシンプルな構成
- ホバー時もシャドウを追加しない（フラットを維持）

### Cosmetic Swatches（カラースウォッチ）

- Border Radius: **0px**（正方形スウォッチ）
- Padding: 1px
- Background: 各スキントーン色（#f8cfa9, #a4493d, #984856 等）
- サイズ: 小さめの正方形

### Section Backgrounds

- Default: `#ffffff`（白背景）
- Header / Footer: `#171717`（ニアブラック）
- Atmosphere: `#27455c`（ディープブルーグレー）
- Promo: `#f7f6f7`（ライトグレー）

---

## 5. Layout Principles

### Container

- 白背景にコンテンツ中央寄せ
- ヒーローバナーは全幅
- ヘッダー・フッターは全幅ダーク背景

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 1px | スウォッチ padding |
| S | 4px | Header CTA 縦 padding |
| M | 12px | Header CTA 横 padding |
| L | 17px | Primary CTA 縦 padding |
| XL | 20px | Primary CTA 横 padding |
| XXL | 40px | Secondary CTA 横 padding |

### Grid

- 製品カードは 3〜4 カラムグリッド（デスクトップ）
- ヒーローバナーは 1 カラム全幅
- 余白は控えめで、製品画像を大きく見せる設計

---

## 6. Depth & Elevation

shu uemura はシャドウをほぼ使わない。背景色の切り替え（白 → ブルーグレー → ニアブラック）で空間と奥行きを表現するフラットデザイン。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#ffffff` | 通常コンテンツ面 |
| 2 | background `#f7f6f7` | セクション区切り面 |
| 3 | background `#27455c` | アトモスフィア・プロモーション面 |
| 4 | background `#171717` | ヘッダー・フッター |
| 5 | `rgba(51, 51, 51, 0.53)` overlay | モーダル・オーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- border-radius は **常に 0px** にする（すべてのコンポーネント共通）
- ブランド要素は **HelveticaNeueLTStd** 系を使う（preview.html では Inter で代替）
- 製品ページの和文には **游ゴシック Medium** のフォールバックチェーンを指定する
- font-weight **300**（Light）を見出しに積極的に使い、エアリーなラグジュアリー感を出す
- letter-spacing は **normal（0）** を保つ
- CTA の基本は **ブラック塗りつぶし (#000000) + 白テキスト + radius 0px**
- ゴールド (`#d1a85d`) はプレミアム要素にのみ使う
- ディープブルーグレー (`#27455c`) でムーディなセクション背景を作る
- テキスト色は用途に応じて `#000000` / `#333333` / `#4e4e4e` / `#696969` を使い分ける
- 製品画像を大きく、テキストを少なく保つ

### Don't（禁止）

- border-radius を 0 以外にしない（pill も角丸も shu uemura のデザインに反する）
- letter-spacing を変更しない（`normal` が全体の方針）
- `font-feature-settings: "palt"` を適用しない（palt 不使用が意図的な設計）
- font-weight 500 や 600 を使わない（300 / 400 / 700 の三段階）
- 鮮やかなポップカラーを大面積に使わない（ブラック / ホワイト / ゴールド / ブルーグレーのトーンを守る）
- 游ゴシック以外の和文フォント（ヒラギノ角ゴ等）をブランド要素に使わない
- シャドウ（box-shadow）を装飾目的で使わない（フラットデザインを維持）
- HelveticaNeueLTStd の Lt / Ex / Roman を混同しない（各バリエーションに用途がある）
- ボタンテキストを太字（700）にしない（400 が標準）
- レッド (`#b80220`) をヒーロー CTA 以外に使わない（使用場面を限定する）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- h1（36px）→ 24px 程度に縮小
- h2 ヒーロー（34px）→ 22px 程度に縮小
- 製品グリッドは 2 カラム → 1 カラムに折り返し
- ナビゲーションはハンバーガーメニュー化
- ヒーローバナーの高さを縮小し、CTA サイズを調整
- 検索入力（26px）→ 18px 程度に縮小

### タッチターゲット

- CTA は radius 0px のまま維持（モバイルでもシャープエッジ）
- Header CTA（padding 4px 12px）はモバイルではタップ領域拡張が必要
- コスメスウォッチ（1px padding）はモバイルでサイズ拡大推奨

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: shu uemura（シュウ ウエムラ）
Origin: 日本発ラグジュアリーコスメティクス（L'Oreal グループ）
Black: #000000 (CTA, text)
Near Black: #171717 (header/footer)
Deep Blue-Gray: #27455c (atmosphere)
Gold: #d1a85d (premium accent)
Red: #b80220 (hero CTA)
Text Primary: #000000
Text Body: #333333
Text Gray: #4e4e4e
Text Label: #696969
Background: #ffffff
Surface Light: #f7f6f7
Font Brand: HelveticaNeueLTStd, sans-serif (Adobe Fonts — preview では Inter で代替)
Font Product JP: Arial, "Yu Gothic Medium", "游ゴシック Medium", "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体, sans-serif
palt: 適用なし
letter-spacing: normal (全テキスト共通)
Body: 12–14px / 300–400 / line-height 1.5
Hero H1: 36px / 300 / line-height 1.4 / HelveticaNeueLTStd-Lt
Hero H2: 34px / 400 / HelveticaNeueLTStd-Ex
CTA Style: filled (bg #000, text #fff, radius 0px, padding 17px 20px)
Gold CTA: bg #d1a85d, text #fff, radius 0px
Hero CTA: bg #b80220, text #fff, radius 0px, font 26px HelveticaNeueLTStd-Ex
Border Radius: 0px (全コンポーネント共通)
Shadow: 使用しない
```

### プロンプト例

```
shu uemura（シュウ ウエムラ）のデザインシステムに従って、新製品の紹介ページを作成してください。
- フォントは "Inter", sans-serif（HelveticaNeueLTStd の代替）
- 和文テキストは Arial, "Yu Gothic Medium", "游ゴシック Medium", sans-serif
- letter-spacing は normal（0）。palt は適用しない
- h1 は 36px / weight 300 / line-height 1.4（Light ウェイトのエアリーな印象）
- 本文は 14px / weight 400 / line-height 1.5 / color #333333
- CTA「今すぐ購入」は bg #000000, text #ffffff, radius 0px, padding 17px 20px
- ゴールド CTA は bg #d1a85d, text #ffffff, radius 0px
- ヒーローセクション背景は #27455c（ディープブルーグレー）
- ヘッダー・フッターは #171717
- ページ背景は白 #ffffff、セクション区切りは #f7f6f7
- border-radius は全要素 0px（角丸なし）
- シャドウは一切使わない
```

### タイポグラフィの重要ポイント

1. **Helvetica Neue LT Std のバリエーション使い分け**: Lt（Light / 見出し）、Ex（Extended / ヒーロー CTA）、Roman（正体 / フォーム入力）、標準（ナビ・ボタン）。CSS の font-weight ではなくフォント名自体で切り替える方式
2. **Adobe Fonts の制約**: HelveticaNeueLTStd はドメインライセンスのため、preview.html やローカル環境では表示不可。**Inter**（Google Fonts）が幾何学的サンセリフとして最も近い代替。Roboto はやや humanist 寄りのため Inter を優先
3. **letter-spacing: normal の徹底**: 日本語サイトでは珍しく、palt も letter-spacing 調整も一切行わない。Helvetica Neue の優れたメトリクスをそのまま活かす設計思想
4. **weight 300 の多用**: 見出し・リード文に Light ウェイトを使い、「軽やかなラグジュアリー」を表現。重厚さではなく透明感で高級感を出すアプローチ
5. **border-radius 0px の一貫性**: CTA・カード・スウォッチ・入力欄すべてが完全な直角。shu uemura のシャープで洗練されたブランドイメージの根幹
6. **ブラック / ゴールド / ブルーグレーの三軸**: ブラック (#000000) が力強さ、ゴールド (#d1a85d) がプレミアム感、ブルーグレー (#27455c) がムードを担当。この三色のバランスがブランドの視覚的アイデンティティ

---

**取得日**: 2026-05-10
**出典**: https://www.shuuemura.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
