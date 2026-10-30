# DESIGN.md — MOTHERHOUSE（マザーハウス）

> MOTHERHOUSE（https://www.mother-house.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「途上国から世界に通用するブランドをつくる」を掲げるソーシャルビジネスブランド。バングラデシュ、ネパール、インドネシア等の素材と職人技を活かしたバッグ・ジュエリーを展開。デザインは**素材と職人の手仕事を際立たせるナチュラルトーン**。装飾を抑えた白背景に、製品写真を大きく見せるレイアウト。CTA のグレー（#656565）が象徴的で、主張しすぎない控えめなブランドカラーが「ものづくり」への敬意を表現する
- **密度**: ゆったりとしたプロダクトショーケース型。ヒーロービジュアルとカテゴリ導線が主体。Shopify ベースの EC サイト
- **キーワード**: ソーシャルブランド、Lato 欧文先頭、グレー CTA、ナチュラルトーン、Shopify、職人、途上国
- **特徴**: **Lato を欧文メインフォントに採用**し、游ゴシック体をフォールバックに置く構成。`font-feature-settings: normal`（palt 未適用）で、日本語のプロポーショナル字詰めは行わない。CTA ボタンの背景が **#656565（ミッドグレー）** という珍しい選択で、主張しすぎずに行動を促す。見出しの letter-spacing が広め（3〜5.6px）で、欧文ブランドらしい国際的な印象

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

MOTHERHOUSE のカラーパレットは**ナチュラルなグレー系**。ブランドを象徴する色は CTA の **ミッドグレー #656565** と、テキストの **チャコール #121212**。

- **CTA Gray** (`#656565`): CTA ボタン背景・メルマガ登録（rgb 101, 101, 101）— ブランドの控えめさを象徴する色
- **Text Charcoal** (`#121212`): 最も深いテキスト・ベースカラー（rgb 18, 18, 18）

### Accent

- **Beige** (`#edeadd`): ステートメントセクション背景（rgb 237, 234, 221）— ナチュラル・クラフト感
- **Blue Accent** (`#377dff`): CSS 変数に定義あり（`--gradient-base-accent-2: #334FB4`）— 限定的に使用

### Text & Neutral

- **Text Primary** (`#121212`): メインテキスト（rgb 18, 18, 18）
- **Text Dark** (`#3a3a3a`): セクション見出し（rgb 58, 58, 58）
- **Text Medium** (`#353535`): サブ見出し（rgb 53, 53, 53）
- **Text Body** (`#202020`): 本文テキスト（rgb 32, 32, 32）
- **Text Secondary** (`#656565`): 補足テキスト・ショップ説明（rgb 101, 101, 101）
- **Text Muted** (`#555555`): イベント・タブ（rgb 85, 85, 85）
- **Text on Dark** (`#ffffff`): CTA・カテゴリオーバーレイ上の白テキスト

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Light** (`#f2f2f2`): セカンダリ背景（rgb 242, 242, 242 — 最多出現 65 件）
- **Surface Divider** (`#dadada`): カテゴリタブ背景（rgb 218, 218, 218）
- **Surface Card** (`#f5f5f5`): カード・フッター背景（rgb 245, 245, 245）
- **Surface Beige** (`#edeadd`): ステートメント背景
- **Surface Overlay** (`rgba(255, 255, 255, 0.3)`): 半透明オーバーレイ

### Border

- **Border Natural** (`#dbd9cd`): イベントカード枠線（rgb 219, 217, 205）— ベージュがかったボーダー
- **Border Store** (`#f8f8f8`): 「お店を探す」ボタン枠線（4px 太線）

---

## 3. Typography Rules

### 3.1 和文フォント

- **游ゴシック体** / Yu Gothic / YuGothic: 本文・見出し共通の和文フォント
- **Hiragino Kaku Gothic Pro**: macOS フォールバック（ProN ではなく Pro を使用）
- **Meiryo**: Windows フォールバック

> **補足**: ヒラギノは **Pro**（ProN ではない）を指定。これは macOS の旧バージョンとの互換性を重視した選択

### 3.2 欧文フォント

- **Lato**: メイン欧文フォント（Google Fonts）— クリーンで読みやすいサンセリフ
- **Arial / Helvetica**: 見出し系のフォールバック

### 3.3 font-family 指定

```css
/* 本文（Lato + 游ゴシック体） */
font-family: Lato, 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", meiryo, sans-serif;

/* 見出し（Lato + Arial + 游ゴシック体） */
font-family: Lato, Arial, Helvetica, 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭型**: Lato を先頭に置き、欧文の表示品質を優先
- 見出しは Arial / Helvetica をフォールバックに追加（Lato が読み込めない場合のヘッドライン対策）
- 游ゴシック体は「Yu Gothic」と「YuGothic」の両表記でカバー
- Hiragino Kaku Gothic **Pro**（ProN ではない）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Category Overlay | Lato + 游ゴシック | 40px | 700 | 1.8 (72px) | 0.14em (5.6px) | "MEN" "WOMEN" オーバーレイ / 白テキスト |
| Heading 2 (section) | Lato + Arial | 26px | 400 | 1.19 (31px) | 0.115em (3px) | "ONLINE STORE" "NEW TOPICS" / #3a3a3a |
| Heading 2 (shop) | Lato + Arial | 24px | 400 | 1.25 (30px) | 0.21em (5px) | "SHOP & FACTORY" / 白テキスト |
| Heading 3 | Lato + Arial | 12px | 400 | 1.0 (12px) | 0.1em (1.2px) | サブセクション見出し / #121212 |
| Category Label | Lato + Arial | 17px | 700 | 1.8 (30.6px) | 0.14em (2.38px) | "GOODS" 等 / 白テキスト |
| Body | Lato + Arial | 14px | 400 | 1.75 (24.5px) | normal | 本文 / #202020 |
| Body (shop desc) | Lato + 游ゴシック | 15px | 500 | 1.47 (22px) | normal | ショップ説明 / #656565 |
| Article Title | Lato + Arial | 14px | 400 | 1.43 (20px) | 0.6px | 記事タイトル / #656565 |
| Nav Link | Lato | 13px | 400 | 1.8 (23.4px) | 0.6px | ナビゲーション |
| Header Menu | Lato + Arial | 13px | 400 | 3.08 (40px) | 2px | ヘッダーメニュー（高い line-height） |
| Nav Label | — | 10px | 700 | 1.8 (18px) | 0.6px | マイページ等のラベル |
| CTA Text | Lato + Arial | 12px | 600 | 1.8 (21.6px) | 0.14em (1.68px) | CTA ボタンテキスト / **SemiBold** |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.75`（24.5px / 14px）— 日本語に適した広めの行間
- **見出しの行間**: `line-height: 1.19–1.25`（h2）— 見出しは詰める
- **カテゴリオーバーレイの行間**: `line-height: 1.8`（72px / 40px）
- **見出しの字間**: `letter-spacing: 3–5.6px`（0.1–0.21em）— 広めのスペーシング
- **CTA の字間**: `letter-spacing: 1.68px`（0.14em @ 12px）
- **本文の字間**: `letter-spacing: normal`（字間なし）

**ガイドライン**:
- 見出し系は **letter-spacing が広め**（0.1–0.21em）で欧文ブランドらしい印象
- 本文は letter-spacing: normal で自然な組版
- CTA テキストは 0.14em の字間 + font-weight 600（SemiBold）で強調

### 3.6 OpenType 機能

```css
font-feature-settings: normal; /* palt 未適用 */
```

- MOTHERHOUSE は **palt を使用しない**。游ゴシック体のデフォルトメトリクスで組む
- 和文のプロポーショナル字詰めが不要な理由は、Lato（欧文）が主役で和文テキストの量が相対的に少ないため

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）
- Shopify テーマのデフォルト設定に準拠

---

## 4. Component Stylings

### Buttons

**Primary CTA（"オンラインストアを見る" "詳しく見る"）**

MOTHERHOUSE の CTA は**ミッドグレー塗りつぶし**が基本。

- Background: `#656565`
- Text: `#ffffff`
- Border Radius: **2–3px**（micro-rounded）
- Padding: 10px 42px（横に広い）
- Font Size: 12px
- Font Weight: 600（SemiBold）
- Letter Spacing: 1.68px（0.14em）
- Line Height: 1.8（21.6px）

**Outline CTA（"お店を探す"）**

- Background: transparent
- Text: `#ffffff`
- Border: **4px** solid `#f8f8f8`（太い白枠 — 太線が特徴的）
- Border Radius: 0px
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: 3px（0.19em — ワイドスペーシング）
- Line Height: 32px

**Tab Button（"イベントをさがす" "コラムをよむ"）**

- Background: `#ffffff`
- Text: `#555555`
- Border: 1px solid `#dbd9cd`（ナチュラルベージュ枠）
- Border Radius: **5px**
- Font Size: 10px
- Font Weight: 400
- Letter Spacing: 0.6px

**Newsletter CTA（"メールマガジンに登録する"）**

- Background: `#656565`
- Text: `#ffffff`
- Border Radius: 0px
- Font Size: 12px
- Line Height: 35px

**ボタンの考え方**:
- メインは**ミッドグレー #656565 の塗りつぶし**。ブランドの控えめさ・誠実さを反映
- radius は **2–3px** が標準（pill ではない）
- CTA テキストは小さめ **12px / SemiBold 600** + ワイド letter-spacing
- 横パディング **42px** が広く、ゆったりとしたボタン
- 「お店を探す」だけ **4px 太線の枠** という独自スタイル

### Inputs

- Shopify テーマデフォルトのフォーム要素
- 詳細なカスタマイズは限定的

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: 0px（`--media-radius: 0px`）
- Shadow: なし（`--media-shadow-opacity: 0.0`）
- 製品写真 + テキストの標準構成

### Section Backgrounds

- Default: `#ffffff`
- Category tabs: `#dadada`
- Statement: `#edeadd`（ベージュ）
- Footer area: `#f5f5f5`

---

## 5. Layout Principles

### Container

- Shopify テーマベースの標準レイアウト
- ヒーロービジュアルは全幅
- コンテンツは中央寄せ

### Spacing Scale（CSS 変数ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10px | CTA 縦パディング |
| S | 30px | Skip link 横パディング |
| M | 42px | CTA 横パディング |
| L | — | セクション間余白 |

### Grid

- 製品カードはグリッドレイアウト
- カテゴリナビはフルワイドタブ形式

---

## 6. Depth & Elevation

MOTHERHOUSE はシャドウを一切使わない（CSS 変数 `--media-shadow-opacity: 0.0` で明示的にゼロ指定）。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |
| 1 | background `#ffffff` | 通常面 |
| 2 | background `#f2f2f2` | セカンダリ面 |
| 3 | background `#edeadd` | ステートメント面（ベージュ） |
| 4 | `rgba(255, 255, 255, 0.3)` | 半透明オーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文には **Lato** を使用し、font-family 先頭に置く
- 和文は **游ゴシック体** をフォールバックに指定する
- ヒラギノは **Pro**（ProN ではなく）を指定する
- CTA は **#656565（ミッドグレー）塗りつぶし + 白テキスト + radius 2–3px** にする
- CTA テキストは **12px / SemiBold 600 / letter-spacing 0.14em** にする
- 見出しの letter-spacing は **0.1–0.21em** の広めスペーシングにする
- 本文の line-height は **1.75** にする
- 本文テキストの色は `#202020` を使う
- ベージュ（`#edeadd`）をステートメント・哲学セクションの背景に使う
- font-feature-settings は **normal**（palt を適用しない）

### Don't（禁止）

- 鮮やかなアクセントカラーを CTA に使わない（#656565 グレーが MOTHERHOUSE のトーン）
- `font-feature-settings: "palt"` を適用しない（MOTHERHOUSE は palt 未使用）
- 純黒 `#000000` をテキストに使わない（`#121212` / `#202020` が標準）
- pill ボタン（radius 9999px）を使わない（2–3px が標準）
- CTA テキストに大きなフォントサイズを使わない（12px が標準）
- シャドウ（box-shadow）を使わない（明示的にゼロ指定）
- Hiragino Kaku Gothic **ProN** を指定しない（Pro が正しい）
- 本文に letter-spacing を追加しない（normal が正しい）

---

## 8. Responsive Behavior

### Breakpoints（Shopify テーマ標準）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | スマートフォン |
| Tablet | 750〜989px | タブレット |
| Desktop | ≥ 990px | デスクトップ |

### モバイル時の調整

- ナビゲーションはハンバーガー化（sp-menu-modal）
- カテゴリオーバーレイのテキストは縮小
- 製品グリッドは 1〜2 カラムに折り返し
- 見出しの letter-spacing は維持

### タッチターゲット

- CTA は padding 10px 42px で十分なタップ領域
- タブボタンは 10px サイズのため、タップ領域の追加が必要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: MOTHERHOUSE（マザーハウス）
Origin: 途上国からのソーシャルビジネスブランド
CTA Gray: #656565
Text Primary: #121212
Text Body: #202020
Text Secondary: #656565
Surface Beige: #edeadd
Surface Light: #f2f2f2
Background: #ffffff

Body Font: Lato, 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", meiryo, sans-serif
Heading Font: Lato, Arial, Helvetica, 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", meiryo, sans-serif

palt: 未適用（font-feature-settings: normal）
Body: 14px / 400 / line-height 1.75 / letter-spacing normal / color #202020
Heading 2: 26px / 400 / line-height 1.19 / letter-spacing 3px / color #3a3a3a
CTA Style: filled (bg #656565, text #fff, radius 2-3px, padding 10px 42px)
CTA Font: 12px / 600 / letter-spacing 1.68px
Shadow: 使用しない
```

### プロンプト例

```
MOTHERHOUSE のデザインシステムに従って、製品紹介ページを作成してください。
- フォントは Lato, 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", meiryo, sans-serif
- font-feature-settings は normal（palt を使わない）
- 見出しは 26px / 400 / letter-spacing 3px / color #3a3a3a
- 本文は 14px / 400 / line-height 1.75 / color #202020
- CTA「オンラインストアを見る」は bg #656565, text #fff, radius 3px, padding 10px 42px
- CTA テキストは 12px / 600 / letter-spacing 1.68px
- 背景は白 #ffffff。ステートメントセクションは #edeadd（ベージュ）
- シャドウは一切使わない
```

### デザインの重要ポイント

1. **ミッドグレー CTA #656565**: ブランドカラーが「グレー」というのは珍しい。主張しすぎず、製品の素材と職人技に視線を集中させるための意図的な選択
2. **Lato + 游ゴシック体**: 欧文 Lato を先頭に置くことで国際的な印象を作りつつ、游ゴシック体で日本語の可読性を確保
3. **palt 未使用**: 游ゴシック体のデフォルトメトリクスで組む。Lato が主役の国際的なブランドでは palt の必要性が低い
4. **CTA テキスト 12px / SemiBold 600**: 小さく控えめだが SemiBold と letter-spacing 0.14em で存在感を出す
5. **ベージュ #edeadd**: 途上国の素材・クラフト・ナチュラルさを表現するベージュ。ステートメントセクションに使用
6. **4px 太線ボタン**: 「お店を探す」の border: 4px solid #f8f8f8 は MOTHERHOUSE 独自。他のブランドでは見ない太い枠線
7. **Hiragino Kaku Gothic Pro（ProN ではない）**: 意図的に Pro を選択

---

**取得日**: 2026-05-09
**出典**: https://www.mother-house.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
