# DESIGN.md — MARKS&WEB（マークスアンドウェブ）

> MARKS&WEB（https://www.marksandweb.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「デイリープロダクツ」を掲げる日本発のボタニカルスキンケアブランド。白・ライトグレー・ダークグレー `#303030` だけで構成される**徹底したモノクロ**が特徴。色彩を排し、余白とタイポグラフィだけで「素材そのもの」の誠実さを表現する。装飾はほぼゼロ、影もゼロ、角丸もゼロ
- **密度**: 商品一覧は密で小さい文字（14px カードタイトル）を grid で並べる EC 型。本文は 16px / line-height 1.8 と広めの行間で可読性を確保。英語の大きな見出し + 日本語小サブタイトルの**バイリンガル二段見出し**が全体を貫く
- **キーワード**: ボタニカル、モノクローム、Noto Sans JP、矩形 CTA（radius 0）、バイリンガル見出し、フラット、無装飾、植物由来
- **特徴**: フォントは **Noto Sans JP** 一本。明朝体は使わない。font-weight は本文 400 / ボタンも 400 で、太さによるコントラストを作らない。唯一の有彩色はセール用の深紅 `#831616` のみ。全コンポーネントが `border-radius: 0` で統一された完全矩形

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

MARKS&WEB の世界観はモノクロ。ブランドカラー自体がテキスト色と同一の `#303030` であり、有彩色に頼らずトーンだけで空間を作る。

- **Charcoal** (`#303030`): テキスト・見出し・Primary CTA の背景色。ブランドの基調色（rgb 48, 48, 48）
- **Light Gray** (`#eeeeee`): フッター背景・バッジ・セクション地。控えめなグレー面
- **Tab Active** (`#c1c1c1`): アクティブタブ背景。中間のグレー
- **Tab Inactive** (`#f3f3f3`): インアクティブタブ背景。極淡グレー

### Accent

- **Deep Red** (`#831616`): セール・値引きタグ等に限定使用。唯一の有彩色（rgb 131, 22, 22）

### Text & Neutral

- **Text Primary** (`#303030`): 本文・見出し・ラベル — 全テキストに統一
- **Text Tab** (`#222222`): インアクティブタブのテキスト色（rgb 34, 34, 34）
- **Border** (`#707070`): ニュースレター登録ボタンの枠線（rgb 112, 112, 112）
- **Input Placeholder** (`#999999`): 想定プレースホルダー色

### Surface

- **Surface White** (`#ffffff`): 標準背景・Secondary CTA 背景
- **Surface Light** (`#f3f3f3`): インアクティブタブ・極淡セクション
- **Surface Gray** (`#eeeeee`): フッター・バッジの面色
- **Newsletter Input BG** (`#ffffff`): 入力欄背景
- **Newsletter Button** (`#cccccc`): ニュースレター登録ボタン背景

---

## 3. Typography Rules

### 3.1 和文フォント

MARKS&WEB は **Noto Sans JP** のみ。明朝体は一切使わない、ゴシック一本の簡潔な構成。

- **Noto Sans JP**: 本文・見出し・ボタン・すべてのテキストに使用
- **フォールバック**: sans-serif（CSS 変数 `--font-body-family` で定義）

### 3.2 欧文フォント

- 欧文専用のフォント指定はなく、Noto Sans JP の欧文グリフがそのまま使われる
- 見出しの "NEW ITEMS" "ABOUT US" "VIEW MORE" 等の英文ラベルも Noto Sans JP

### 3.3 font-family 指定

```css
/* 本文・見出し・すべて共通 */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- CSS 変数 `--font-body-family` / `--font-heading-family` ともに `"Noto Sans JP", sans-serif`
- Web フォントの未到達時は OS のデフォルト sans-serif
- フォールバックチェーンは最小限で、他のフォントに依存しない設計

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Title (h2) | 26px | 400 | 1.3 (33.8px) | normal | "NEW ITEMS" 英語大見出し |
| Section Sub (h2) | 14px | 400 | 1.3 (18.2px) | normal | "新商品" 日本語サブタイトル |
| About Title (h2) | 18px | 400 | 1.3 (23.4px) | normal | "ABOUT US" |
| Collection Title (h1) | 14px | 400 | 1.3 (18.2px) | normal | コレクションページ見出し |
| Body | 16px | 400 | 1.8 (28.8px) | 0.6px (0.0375em) | 本文 |
| Card Title (h3) | 14px | 400 | 1.5 (21px) | normal | 商品カードタイトル |
| Announcement | 13px | 400 | 1.3 (16.9px) | 1px (0.077em) | ヘッダー告知バー |
| Label | 12px | 400 | 1.5 (18px) | 1px (0.083em) | バッジ・タグ |
| Breadcrumb | 12px | 400 | 1.8 (21.6px) | normal | パンくずリスト |
| Nav | 10px | 400 | 1.3 (13px) | normal | ナビゲーション「商品を探す」 |
| CTA Text | 15px | 400 | 1.2 (18px) | 1px (0.067em) | 「詳しくはこちら」 |
| Tab Active | 12px | 500 | normal | normal | アクティブタブ（唯一の 500） |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（28.8px / 16px）— 日本語本文に十分な余白を確保。ボタニカルブランドらしいゆったりした組版
- **見出しの行間**: `line-height: 1.3` を基本。英語見出しが多いため欧文寄りのタイトな行間
- **本文の字間**: `letter-spacing: 0.6px`（0.0375em @ 16px）— 微細だが一貫した字間で均整の取れた本文
- **告知・ラベルの字間**: `letter-spacing: 1px`（0.077em @ 13px）— 大文字英語や告知バーで広めのスペーシング
- **見出しの字間**: normal（0）— 見出しは字間を開けない

### 3.6 OpenType 機能

- `font-feature-settings: normal` — **palt は使用しない**
- 字詰めは行わず、letter-spacing の統一値で間合いを作る方針
- カーニングも明示指定なし

### 3.7 改行・禁則

- 本文は `word-break: normal` の自然な折り返し
- 商品名は日本語のみのものが多く、英日混在は比較的少ない
- 告知バーは letter-spacing 1px で 1 行に収める前提

---

## 4. Component Stylings

### Buttons

**Primary CTA（「詳しくはこちら」）**

- Background: `#303030`
- Text: `#ffffff`
- Border: なし
- Border Radius: **0px**（完全矩形）
- Padding: 0 30px（高さはline-height制御）
- Font Size: 15px
- Font Weight: **400**
- Letter Spacing: 1px (0.067em)
- Line Height: 18px

**Secondary CTA（"VIEW MORE"）**

- Background: `#ffffff`
- Text: `#303030`
- Border: なし
- Border Radius: **0px**
- 同一フォントサイズ・ウェイト

**Tab Button — Active**

- Background: `#c1c1c1`
- Text: `#ffffff`
- Border Radius: **0px**
- Padding: 5px 10px
- Font Size: 12px / Weight **500**（唯一の 500 使用箇所）

**Tab Button — Inactive**

- Background: `#f3f3f3`
- Text: `#222222`
- Border Radius: **0px**
- Padding: 5px 10px
- Font Size: 12px / Weight 500

**Newsletter Submit（「登録」）**

- Background: `#cccccc`
- Text: `#303030`
- Border: 1px solid `#707070`
- Border Radius: **0px**
- Padding: 8px 20px

**Wishlist Button**

- Background: `#000000`
- Text: `#ffffff`
- Border Radius: **0px**

**ボタンの考え方**:
- 全ボタンが **radius 0px の完全矩形**。例外なし
- font-weight は CTA でも **400** を維持（タブのみ 500）。太さで目立たせるのではなく、`#303030` の塗りつぶしと `letter-spacing: 1px` で存在感を出す
- 影やホバーエフェクトは最小限。フラットの徹底

### Inputs

- Font Family: "Noto Sans JP", sans-serif
- Font Size: 16px（本文）/ 12px（ニュースレター）
- Border: なし（メイン入力欄）/ 実測なし
- Border Radius: **0px**（`--inputs-radius: 0px`）
- Background: `#ffffff`
- Padding: 15px（メイン）/ 0 8px（ニュースレター）

### Cards（商品カード）

- Background: `#ffffff`
- Border Radius: 0px
- Shadow: なし（完全フラット）
- 商品写真 + h3（14px / 400 / line-height 1.5） + 価格テキストの構成
- グリッド間隔: 8px（`--grid-desktop-horizontal-spacing` / `--grid-desktop-vertical-spacing`）

### Section Backgrounds

- Hero / メイン: `#ffffff`
- フッター: `#eeeeee`（ライトグレー）
- 告知バー: `#ffffff` + 上下ボーダー
- 全面ダーク反転は使わない（OSAJI との違い）

---

## 5. Layout Principles

### Container

- Max Width: `100rem`（1600px、CSS 変数 `--page-width`）
- 商品グリッドとコンテンツは全幅に近い配置
- 本文コンテンツは適度な左右 padding で読みやすさを確保

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | タブ縦 padding |
| S | 8px | グリッド間隔（CSS 変数） |
| M | 15px | 入力欄 padding |
| L | 20px | ニュースレターボタン横 padding |
| XL | 30px | Primary CTA 横 padding |

### Grid

- 商品グリッドは 3〜4 カラム
- Grid gap: 8px（desktop、CSS 変数で定義）
- 非常にタイトなグリッド間隔が特徴（他ブランドは 16〜32px が一般的）

---

## 6. Depth & Elevation

MARKS&WEB は**影を一切使わない**。box-shadow の指定は全コンポーネントで確認されていない。奥行きは色のトーン差（白 → `#eeeeee` → `#303030`）のみで表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は **`#303030`** を統一使用する（純黒 `#000000` は Wishlist ボタンのみ）
- フォントは **"Noto Sans JP", sans-serif** のみ。明朝体を混ぜない
- **`border-radius: 0px`** をすべてのコンポーネントで徹底する
- 本文に `letter-spacing: 0.6px`（0.0375em）、告知・ラベルに `letter-spacing: 1px` を適用する
- 本文の `line-height: 1.8` で日本語の可読性を確保する
- 見出しは「英語（大きめ）+ 日本語サブ（小さめ）」のバイリンガル二段構成にする
- 面色は白 `#ffffff` と `#eeeeee` のグレーのみ。有彩色のセクション背景を作らない
- CTA の font-weight は **400** を維持する
- グリッド間隔は **8px** のタイトな密度を保つ

### Don't（禁止）

- 明朝体（Zen Old Mincho、Noto Serif JP 等）を使わない
- pill（border-radius 50%）や角丸（8px〜）を使わない
- box-shadow を使わない。完全フラットを保つ
- `#831616`（Deep Red）をセール・値引き以外の用途で使わない
- ボタンを太字（600〜700）にしない。400 を維持する（タブの 500 のみ例外）
- 派手な有彩色（ブルー、グリーン、オレンジ等）を使わない
- グラデーションやテクスチャを使わない
- テキストに `#000000` を使わない（`#303030` がブランド基調）
- 行間を 1.5 未満にしない（日本語本文の可読性を損なう）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | スマートフォン |
| Tablet | 750〜989px | タブレット |
| Desktop | ≥ 990px | デスクトップ |

### モバイル時の調整

- Section Title h2 26px → 20px 程度に縮小
- 商品グリッドは 2 カラムに折り返す
- ナビゲーションはドロワー化
- グリッド間隔は 8px を維持（タイトさはモバイルでも保つ）

### タッチターゲット

- Primary CTA は line-height 18px + padding で高さが控えめなため、モバイル時は padding 拡張推奨
- タブボタンは 5px + 5px + 12px = 22px と小さいため、モバイルでは padding を広げる

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: MARKS&WEB（マークスアンドウェブ）
Primary Color: #303030 (Charcoal — テキストと同一)
Light Gray: #eeeeee (フッター・バッジ)
Deep Red: #831616 (セール限定)
Tab Active: #c1c1c1
Tab Inactive: #f3f3f3
Newsletter Button: #cccccc
Text Primary: #303030
Background: #ffffff
Body Font: "Noto Sans JP", sans-serif
Body Size: 16px / 400 / line-height 1.8
Body Letter Spacing: 0.6px (0.0375em)
Heading Size: 26px / 400 / line-height 1.3
CTA Font Size: 15px / 400 / letter-spacing 1px
CTA Border Radius: 0px (全ボタン共通)
CTA Font Weight: 400
Grid Gap: 8px
palt: 使用しない
box-shadow: 使用しない
```

### プロンプト例

```
MARKS&WEB（マークスアンドウェブ）のデザインシステムに従って、新商品紹介ページを作成してください。
- フォント: "Noto Sans JP", sans-serif のみ。明朝体は使わない
- 本文 color は #303030、font-size 16px、line-height: 1.8、letter-spacing: 0.6px
- 見出しは英語 + 日本語サブの二段構成: h2 "NEW ITEMS" 26px / 400 / lh 1.3 + sub "新商品" 14px / 400
- 見出しの letter-spacing は normal（0）、ラベル・告知は letter-spacing: 1px
- Primary CTA「詳しくはこちら」は #303030 bg + #ffffff text + radius 0px + padding 0 30px + font-weight 400 + letter-spacing 1px
- カード: 商品写真 + h3 14px / 400 / lh 1.5 + 価格。grid-gap 8px
- 面色は #ffffff と #eeeeee のみ。有彩色のセクション背景を作らない
- box-shadow は一切使わない。完全フラット
- 角丸は一切使わない。すべて border-radius: 0px
```

### 字詰め・組版の重要ポイント

1. **モノクロの徹底**: `#303030` + `#eeeeee` + `#ffffff` の 3 色だけで世界を作る。有彩色は `#831616` セールタグのみ
2. **letter-spacing の二段階**: 本文 0.0375em / ラベル・告知 0.077em。見出しは normal
3. **radius 0px の完全矩形**: pill も角丸も一切なし。すべてのインタラクティブ要素が矩形
4. **font-weight 400 の統一**: CTA ですら 400。太さで強調しない。色の塗りつぶしで区別する
5. **バイリンガル二段見出し**: "NEW ITEMS"（英語 26px）+ "新商品"（日本語 14px）の構成が全セクションに共通
6. **8px グリッド**: 商品グリッドの間隔が 8px と非常にタイト。密度の高い EC レイアウト
7. **影ゼロ**: box-shadow の指定が一切ない。奥行き表現は色のトーン差のみ

---

**取得日**: 2026-05-09
**出典**: https://www.marksandweb.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
