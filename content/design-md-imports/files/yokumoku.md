# DESIGN.md — Yoku Moku（ヨックモック）

> Yoku Moku（https://www.yokumoku.co.jp/）のデザイン仕様書。
> 2026-05-10 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1969年創業の高級洋菓子ブランド。シガール（Cigare au Chocolat）で知られる。**明朝体（Yu Mincho）の見出し + ゴシック体（YuGothic）の本文** というデュアルフォントシステムに、欧文サブヘッド用の **Assistant**（Google Fonts）を組み合わせた三層構成。ディープネイビー **#002063** を軸に、クリームホワイト **#f9f8f2** の温かみある背景で、贈答品にふさわしい上質感と信頼感を表現する
- **密度**: ゆったりとしたプロダクトショーケース型。大きなビジュアルと広い余白で商品の魅力を伝え、購買導線は控えめに配置。ECサイト（Shopify ベース）として機能しつつ、ブランドの品格を最優先にしたレイアウト
- **キーワード**: 高級洋菓子、贈答品、ディープネイビー、明朝見出し、デュアルフォント、クリームホワイト、ワイドレタースペーシング
- **特徴**: 見出しの **letter-spacing 0.36em**（h1）は日本語サイトとしては極端に広く、洋菓子ブランドの格式と余裕を演出する。CTAは **5px radius** の控えめな角丸。明朝体の見出しとゴシック体の本文の対比が、伝統と現代性を両立させる。バッジには **Optima**（Adobe Fonts）を使用し、ヨーロピアンな洗練を加える。Shopify Dawn テーマベースだが、CSS Custom Properties を上書きしてブランド独自の世界観を構築

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Yoku Moku のカラーパレットは **ディープネイビー #002063** を中心に構成。贈答品ブランドとして格式と信頼を表す深い青と、クリームホワイト #f9f8f2 の温かみある背景の組み合わせが、品格と親しみやすさを両立する。

- **Brand Navy** (`#002063`): メインブランドカラー。見出し・CTA背景・アクセント要素（rgb 0, 32, 99）。サイト全体で最も多用される色
- **Brand Gold** (`#b69469`): ゴールドアクセント（rgb 182, 148, 105）。高級感の演出、装飾ライン等
- **Brand Crimson** (`#b00020`): セール・プロモーション CTA（rgb 176, 0, 32）。限定商品・期間限定の訴求

### Accent

- **Sale Red** (`#e6004f`): セール価格・アクセントリンク（rgb 230, 0, 79）。ヘッダー等の目立たせたいリンクに使用
- **Dark Red** (`#a00a0a`): バーガンディアクセント（rgb 160, 10, 10）。深みのある赤で季節限定等に使用
- **Light Navy** (`#ecf4ff`): CTA のライトバリアント背景（rgb 236, 244, 255）。ブランドネイビーの淡い変種
- **Soft Navy** (`#9db2ce`): 装飾的なネイビー（rgb 157, 178, 206）。背景アクセント等

### Text & Neutral

- **Text Primary** (`#121212`): 本文テキスト（rgb 18, 18, 18）— ほぼ黒だが純黒ではない
- **Text Primary Alt** (`#111111`): 本文テキスト代替（rgb 17, 17, 17）
- **Text Navy** (`#002063`): 見出しテキスト（ブランドネイビーと同色）
- **Text Body** (`#1e2336`): 本文テキスト（rgb 30, 35, 54）— 紺がかったダークグレー
- **Text Secondary** (`#767676`): 補足テキスト、キャプション（rgb 118, 118, 118）
- **Text Muted** (`#404040`): フッター・控えめなテキスト（rgb 64, 64, 64）

### Surface

- **Surface Cream** (`#f9f8f2`): メイン背景（rgb 249, 248, 242）— 温かみのあるクリームホワイト。8回出現、最も広い面積を占める
- **Surface White** (`#ffffff`): カード・CTA ゴースト背景
- **Surface Light Gray** (`#f2f2f2`): セクション背景・区切り（rgb 242, 242, 242）
- **Border** (`#c9c9c9`): 区切り線・入力枠（rgb 201, 201, 201）

---

## 3. Typography Rules

### 3.1 和文フォント

Yoku Moku は**見出しに明朝体（Yu Mincho）、本文にゴシック体（YuGothic / 游ゴシック）** のデュアルフォントシステム。明朝体の格式とゴシック体の可読性を使い分ける。

- **ゴシック体（本文）**: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, Meiryo, sans-serif
- **明朝体（見出し）**: "Yu Mincho", YuMincho, "Hiragino Mincho ProN", "Hiragino Mincho Pro", HG明朝B, "MS Mincho", serif

### 3.2 欧文フォント

- **サンセリフ（サブ見出し・フッター）**: Assistant（Google Fonts）。h2 サブ見出し（16px / 700）、h4 ラベル（18px / 700）等に使用
- **セリフ（バッジ）**: Optima LT Pro（Adobe Fonts）。バッジテキスト（12px / 700）に使用。preview.html では EB Garamond（Google Fonts）で代替

> **補足**: Shopify の CSS Custom Properties では `--font-body-family: Assistant, sans-serif` / `--font-heading-family: Assistant, sans-serif` が定義されているが、実際のページでは明朝・ゴシックの日本語フォントスタックが CSS で上書きされている

### 3.3 font-family 指定

```css
/* 本文（ゴシック体） */
font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic",
  "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  "メイリオ", Meiryo, sans-serif;

/* 見出し（明朝体） */
font-family: "Yu Mincho", YuMincho,
  "Hiragino Mincho ProN", "Hiragino Mincho Pro",
  "HG明朝B", "MS Mincho", serif;

/* サブ見出し・ラベル（欧文） */
font-family: Assistant, sans-serif;

/* バッジ（欧文セリフ） */
font-family: optima-lt-pro, serif;
/* preview.html 代替: */
font-family: "EB Garamond", serif;
```

**フォールバックの考え方**:
- 本文は YuGothic 系を複数表記で網羅し、macOS（Hiragino）→ Windows（メイリオ）の順でカバー
- 見出しは Yu Mincho を先頭に、macOS（Hiragino Mincho）→ Windows（HG明朝B / MS Mincho）の順
- Assistant は Google Fonts で読み込み、sans-serif のみをフォールバック
- Optima LT Pro は Adobe Fonts（ドメインライセンス）。preview では EB Garamond で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display Large | YuGothic | 48px | 600 | 1.45 (69.6px) | 0.04em (1.92px) | ヒーロー・メインビジュアル |
| Display Medium | YuGothic | 36px | 700 | 1.45 (52.2px) | 0.04em (1.44px) | セクション大見出し |
| Heading 1 | Yu Mincho | 34px | 600 | 1.45 (48.9px) | 0.36em (12.08px) | ページタイトル / color #ffffff（ヒーロー上） |
| Heading 1 (products) | Yu Mincho | 30px | 600 | — | — | 商品ページ見出し / color #002063 |
| Heading 2 | Yu Mincho | 24px | 600 | — | — | セクション見出し / color #002063 or #121212 |
| Heading 2 (sub) | Assistant | 16px | 700 | — | — | 欧文サブ見出し |
| Heading 3 | Yu Mincho | 22px | 600 | — | — | 小見出し / color #002063 |
| Heading 4 | Assistant | 18px | 700 | — | — | ラベル・カテゴリ名 |
| Body | YuGothic | 14px | 500 | 1.6 (22.4px) | — | 本文 / color #1e2336 |
| Body (product) | YuGothic | 16px | 500 | 1.6 (25.6px) | — | 商品詳細ページ本文 |
| Price | — | 14.5px | 700 | — | — | 商品価格 |
| Nav | YuGothic | 14–16px | 400–500 | — | — | ヘッダーナビゲーション |
| Footer | YuGothic | 14px | 500 | — | — | フッターテキスト / color #404040 |
| Badge | optima-lt-pro | 12px | 700 | — | — | バッジ / color #ffffff |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.6`（22.4px / 14px）— 日本語として標準的な広さ
- **見出し（h1）の行間**: `line-height: 1.45`（48.9px / 34px）— 本文より詰める
- **Display の行間**: `line-height: 1.45`（69.6px / 48px）— 大型テキストも 1.45 で統一
- **本文の字間**: 特になし（letter-spacing: normal）
- **見出し（h1）の字間**: `letter-spacing: 0.36em`（12.08px @ 34px）— 極端なワイドスペーシング。Yoku Moku の格式を象徴する
- **Display の字間**: `letter-spacing: 0.04em`（1.92px @ 48px）— 控えめ

**ガイドライン**:
- Yoku Moku の letter-spacing は**見出しで極端に広い**のが特徴（h1 で 0.36em）
- Display テキストは 0.04em と控えめ。見出しと Display で字間の方向性が異なる
- 本文には letter-spacing を設定しない（ゴシック体のデフォルト字間を活用）
- 見出しの 0.36em は日本語サイトでは非常に珍しく、贈答品ブランドの「ゆとり」を視覚化する重要な要素

### 3.6 OpenType 機能

```css
/* 特定の OpenType 指定は確認されていない */
/* 見出しの letter-spacing で階層を表現するアプローチ */
```

- palt のグローバル適用は確認されていない
- 見出しの大きな letter-spacing が字間設計の中心
- 本文はフォントデフォルトの字間で可読性を確保

### 3.7 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- 商品名は日本語で簡潔にまとめ、改行が入らない前提

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ネイビー塗りつぶし）**

Yoku Moku の CTA はブランドネイビーの塗りつぶしが基本。5px の控えめな角丸。

- Background: `#002063`
- Text: `#ffffff`
- Border Radius: **5px**
- Padding: 13px 14px 13px 19px（左右非対称 — アイコン付き想定）
- Font Size: 14px
- Font Weight: 500

**Ghost CTA（白抜き）**

- Background: `#ffffff`
- Text: `#002063`
- Border: 1px solid `#002063`
- Border Radius: **5px**
- Padding: 13px 20px

**Light CTA（ライトネイビー背景）**

- Background: `#ecf4ff`
- Text: `#000000`
- Border Radius: **5px**
- Padding: 13px 20px 13px 19px

**Sale CTA（クリムゾン）**

- Background: `#b00020`
- Text: `#ffffff`
- Border Radius: **5px**
- Padding: 13px 20px

**ボタンの考え方**:
- メインは **#002063 ネイビー塗りつぶし + 白テキスト**。贈答品ブランドとしての品格
- radius は **5px** の控えめな角丸。pill でも sharp でもなく、柔らかな印象
- ゴースト（白抜き）は反転（白背景 + ネイビーテキスト + ネイビーボーダー）
- Light バリアント（`#ecf4ff`）は二次的な CTA に使用
- セール・プロモーション時のみ `#b00020` クリムゾンを使用

### Inputs

- Border: 1px solid `#c9c9c9`
- Border Radius: 5px（推定、ボタンと統一）
- Font Family: 游ゴシック体, YuGothic, sans-serif
- Font Size: 16px（モバイルのズーム防止）
- Padding: 13px 16px

### Cards（商品カード）

- Background: `#ffffff`
- Border Radius: **10px**
- Padding: 20px 15px 15px（大）/ 20px 5px 10px（小）
- Shadow: なし（フラット）
- 商品画像 + 商品名 + 価格の構成
- カードの角丸（10px）は CTA（5px）より大きく、柔らかい印象を与える

### Section Backgrounds

- Default: `#f9f8f2`（クリームホワイト — メイン背景）
- Product Cards: `#ffffff`（白 — カード面）
- Light Gray: `#f2f2f2`（セクション区切り）

---

## 5. Layout Principles

### Container

- Max Width: **120rem**（`--page-width: 120rem` = 1920px）
- ヘッダー・フッターは全幅
- コンテンツは中央寄せ

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | CTA の border-radius |
| S | 10px | 小カード下 padding |
| M | 15px | カード横 padding |
| L | 20px | カード上 padding / セクション余白 |
| XL | 40px | セクション間余白（推定） |
| XXL | 80px | 大セクション間余白（推定） |

### Grid

- 商品カードはグリッドレイアウト（3〜4 カラム）
- Product card radius: `--product-card-corner-radius: 0.0rem`（Shopify 変数は 0 だが、実装では 10px が適用されている）
- Media radius: `--media-radius: 0px`（商品画像はフラット）

---

## 6. Depth & Elevation

Yoku Moku はシャドウを控えめに使い、クリームホワイト背景と白カードの微妙な色差で空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（ほとんどの要素） |
| 1 | background `#ffffff` on `#f9f8f2` | カード・コンテンツ面（背景色差で浮かせる） |
| 2 | background `#002063` | ネイビーセクション・フッター |
| 3 | subtle shadow（hover 時） | カードホバー（推定） |

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しには **Yu Mincho（明朝体）**、本文には **YuGothic（ゴシック体）** を使い分ける
- ブランドカラーは **#002063**（ディープネイビー）を軸にする
- メイン背景は **#f9f8f2**（クリームホワイト）で温かみを出す
- h1 の letter-spacing は **0.36em** の極端なワイドスペーシングにする
- CTA は **#002063 塗りつぶし + 白テキスト + radius 5px** にする
- 商品カードは **radius 10px** で柔らかい印象にする
- 本文の line-height は **1.6** を基本とする
- Display / 見出しの line-height は **1.45** にする
- font-family は必ずフォールバックチェーンを完全に指定する
- 贈答品にふさわしい上質さと余白を大切にする
- 欧文サブ見出しには **Assistant**（Google Fonts）を使う

### Don't（禁止）

- 見出しにゴシック体を使わない（明朝体が Yoku Moku のアイデンティティ）
- 本文に明朝体を使わない（可読性のためゴシック体を使う）
- 純黒 `#000000` をブランドカラーとして使わない（`#002063` ネイビーが基本トーン）
- pill ボタン（radius 9999px）を使わない（5px の控えめな角丸が標準）
- 背景を純白 `#ffffff` だけにしない（`#f9f8f2` のクリームホワイトが Yoku Moku の温かみ）
- 鮮やかな原色を多用しない（ネイビー + クリーム + ゴールドのトーンを保つ）
- letter-spacing 0.36em を本文に適用しない（見出し専用の極端なワイドスペーシング）
- 本文テキストに `#000000` を使わない（`#121212` / `#1e2336` を使う）
- セールカラー `#b00020` / `#e6004f` を通常の CTA に使わない（プロモーション専用）
- font-weight 800 / 900 の極太ウェイトを使わない（最大 700 まで）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | スマートフォン（Shopify Dawn 準拠） |
| Tablet | 750〜989px | タブレット |
| Desktop | ≥ 990px | デスクトップ |

### モバイル時の調整

- Display Large（48px）→ 28〜32px 程度に縮小
- h1（34px）→ 22〜26px に縮小
- h2（24px）→ 18〜20px に縮小
- 商品グリッドは 1〜2 カラムに折り返す
- ナビゲーションはハンバーガーメニュー化
- 見出しの letter-spacing 0.36em はモバイルでは 0.1〜0.15em に縮小（行あたりの文字数確保）
- CTA はフルワイズ化（width: 100%）

### タッチターゲット

- CTA ボタン: 44px 以上のタップ領域を確保（padding 13px でほぼ達成）
- ナビ項目: 14〜16px のフォントサイズのため、パディングでタップ領域を補完
- 商品カード全体がタップ可能（カード全面リンク）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: Yoku Moku（ヨックモック）
Origin: 1969年創業 高級洋菓子ブランド
Brand Navy: #002063
Brand Gold: #b69469
Brand Crimson: #b00020
Sale Red: #e6004f
Text Primary: #121212
Text Body: #1e2336
Text Secondary: #767676
Background (cream): #f9f8f2
Surface (card): #ffffff
Border: #c9c9c9
Font (heading): "Yu Mincho", YuMincho, "Hiragino Mincho ProN", serif
Font (body): "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif
Font (sub-heading): Assistant, sans-serif
Font (badge): optima-lt-pro, serif (preview: "EB Garamond", serif)
H1: 34px / 600 / Yu Mincho / line-height 1.45 / letter-spacing 0.36em
H2: 24px / 600 / Yu Mincho / color #002063
Body: 14px / 500 / YuGothic / line-height 1.6 / color #1e2336
CTA Style: filled (bg #002063, text #fff, radius 5px)
Card Radius: 10px
Shadow: ほぼ使用しない
```

### プロンプト例

```
Yoku Moku（ヨックモック）のデザインシステムに従って、季節限定ギフトの紹介ページを作成してください。
- 見出しは Yu Mincho（明朝体）、本文は YuGothic（ゴシック体）
- h1「季節のギフトセット」は 34px / 600 / letter-spacing 0.36em / color #002063
- h2 は 24px / 600 / Yu Mincho / color #002063
- 本文は 14px / 500 / line-height 1.6 / color #1e2336
- 背景は #f9f8f2（クリームホワイト）
- CTA「ギフトを選ぶ」は bg #002063, text #fff, radius 5px
- 商品カードは bg #ffffff, radius 10px
- 欧文ラベルには Assistant (Google Fonts) を使用
- 贈答品にふさわしい上質な余白と品格を保つ
```

### 字詰め・組版の重要ポイント

1. **デュアルフォントシステム**: 見出し = Yu Mincho（明朝体）、本文 = YuGothic（ゴシック体）。明朝の品格とゴシックの可読性を使い分ける。この対比が Yoku Moku の視覚的アイデンティティ
2. **三層フォント構成**: 和文明朝（見出し）+ 和文ゴシック（本文）+ 欧文 Assistant（サブ見出し・ラベル）。さらにバッジに Optima LT Pro を使用する四フォント体制
3. **letter-spacing 0.36em**: h1 の字間は一般的な日本語サイトの 5〜10 倍。贈答品ブランドとしての「ゆとり」と格式を視覚化する最大の特徴。Display テキスト（0.04em）とは方向性が異なる
4. **クリームホワイト #f9f8f2**: 純白ではない温かみのある背景。洋菓子の「焼き色」を連想させ、ブランドの温かさを下支えする。サイト全体の最も広い面積を占める色
5. **ディープネイビー #002063**: 純黒ではなく、青みを帯びた深い紺。贈答品の包装紙を連想させる品格のある色。見出し・CTA・アクセントすべてに使用
6. **radius 5px（CTA）と 10px（カード）の二段階**: pill でも sharp でもない中間的な角丸。CTA は小さめ（5px）でフォーマル、カードは大きめ（10px）で柔らかい印象
7. **Windows の游ゴシック問題**: font-family に「游ゴシック体」「YuGothic」「游ゴシック」「Yu Gothic」の4表記を含む。Windows 環境では weight 500 指定で Medium 相当を確保している

---

**取得日**: 2026-05-10
**出典**: https://www.yokumoku.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
