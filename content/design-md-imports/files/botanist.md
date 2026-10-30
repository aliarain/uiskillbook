# DESIGN.md — BOTANIST（ボタニスト）

> BOTANIST（https://botanistofficial.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ボタニカルヘア・ボディケアブランド。ブランドタグライン「答えはきっと自然の中にある。」を体現する、自然と洗練が融合したエディトリアルデザイン。**二書体システム（Yu Gothic Pr6N + new-atten）** でジャポニスムとモダニズムを共存させる。全面写真に半透明のテキストオーバーレイを重ねる雑誌的な構成が特徴
- **密度**: ゆったりとしたフルブリード写真主体のショーケース型。大きな余白とミューテッドカラーで「植物の静謐さ」を演出。写真とテキストが空間を共有し、読むというより眺める体験を設計している
- **キーワード**: ボタニカル、グレーブルー、二書体システム、エディトリアル、写真オーバーレイ、半透明CTA、ワイドスペーシング
- **特徴**: **欧文ディスプレイ（new-atten）と和文テキスト（Yu Gothic Pr6N）の二書体システム**が最大の特徴。セクションラベルやカテゴリ名は new-atten で幾何学的なクリーンさを出し、ブランドメッセージや商品名は Yu Gothic Pr6N の Medium / Bold で品格を添える。背景はグレーブルー `#e6e9ed` が支配的で、ダークチャコール `#1f2529` との明暗コントラストで空間を構成。CTAは半透明の `rgba(255,255,255,0.2)` でガラス質の浮遊感を表現する。本文 line-height 2.0、letter-spacing 0.05em の広い組版が植物的な「呼吸」を感じさせる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

BOTANIST のカラーパレットはナチュラルで抑制的。ブランドを象徴する色は **グレーブルー #e6e9ed**（面の色）と **ダークチャコール #1f2529**（文字・ダークセクション）。鮮やかなアクセントカラーは存在せず、自然界の無彩色で世界観を構築する。

- **Gray Blue** (`#e6e9ed`): ページ全体の支配的な背景色。ボタニカルな静けさを表現（rgb 230, 233, 237）
- **Dark Charcoal** (`#1f2529`): フッター・ダークセクション背景、深い落ち着き（rgb 31, 37, 41）

### Text & Neutral

- **Text Primary** (`#222222`): 本文テキスト（rgb 34, 34, 34）— 純黒を避けたソフトブラック
- **Text Secondary** (`#787b80`): ラベル・補足テキスト（rgb 120, 123, 128）
- **Text Muted** (`#bcbfc3`): さらに控えめな補助テキスト（rgb 188, 191, 195）
- **Text on Dark** (`#ffffff`): ダークチャコール背景上の白テキスト

### Surface

- **Surface Gray Blue** (`#e6e9ed`): メイン背景（ホームページで 94 箇所出現）
- **Surface Near White** (`#fcfcfc`): コンテンツエリアの白に近い背景
- **Surface Light Gray** (`#f0f0f0`): カード・区切りの淡いグレー
- **Surface Dark** (`#1f2529`): フッター・ダークセクション
- **CTA Glass** (`rgba(255,255,255,0.2)`): ダーク背景上の半透明 CTA

### Functional

- **Error** (`#c0392b`): フォームエラー（推定 — 実測値なし）

---

## 3. Typography Rules

### 3.1 和文フォント

BOTANIST は **Yu Gothic Pr6N**（Adobe Fonts / Morisawa）を使用。標準の游ゴシックではなく、ProN（JIS2004 字形）の Medium / Bold ウェイト。

- **Yu Gothic Pr6N M**: 本文・ナビ・キャプション（Medium ウェイト相当）
- **Yu Gothic Pr6N B**: 見出し・商品名（Bold ウェイト相当）

> **注意**: Yu Gothic Pr6N は Adobe Fonts のライセンスフォント。ローカル環境やプレビューでは **Zen Kaku Gothic New**（Google Fonts、Morisawa 系で字形が近い）を代替に使用する

### 3.2 欧文フォント

- **new-atten**: ディスプレイ用のジオメトリックサンセリフ（Adobe Fonts）。セクションラベル「MISSION」「SPECIAL」「HAIRCARE」等に使用
- フォールバック: `sans-serif`

> **注意**: new-atten も Adobe Fonts のライセンスフォント。プレビューでは **Josefin Sans**（Google Fonts、幾何学的クリーンさが近い）を代替に使用する

### 3.3 font-family 指定

```css
/* 和文テキスト（本文・見出し・商品名） */
font-family: "Yu Gothic Pr6N M", "Yu Gothic Pr6N B", "Zen Kaku Gothic New", "Yu Gothic", "YuGothic", sans-serif;

/* 欧文ディスプレイ（セクションラベル・カテゴリ名） */
font-family: "new-atten", "Josefin Sans", sans-serif;
```

**フォールバックの考え方**:
- 和文テキストは Yu Gothic Pr6N を最優先。Google Fonts 代替 → 標準游ゴシック → generic の順
- 欧文ディスプレイは new-atten を最優先。Google Fonts 代替 → generic の順
- 二書体の使い分けが BOTANIST の核心。混在させない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Display | Yu Gothic Pr6N M | 52px | 400 | 1.35 | 0.1em | ブランドタグライン「答えはきっと自然の中にある。」 |
| Section Display EN | new-atten | 32px | 400 | 1.1 | 0.03em | "SPECIAL" 等の英字大見出し |
| Footer Tagline | Yu Gothic Pr6N M | 40px | 400 | 1.35 | 0.15em | ダーク背景上のブランドメッセージ |
| Category Label EN | new-atten | 21px | 400 | 1.6 | 0 | "HAIRCARE" 等のカテゴリ名 |
| Section Title JP | Yu Gothic Pr6N B | 18px | 400 | 1.5 | 0 | 「商品について知る」等の和文見出し |
| Product Name | Yu Gothic Pr6N B | 16px | 400 | 1.6 | 0 | 商品名テキスト |
| Section Label EN | new-atten | 15px | 400 | 1.6 | 0 | "MISSION" 等の小さなラベル |
| Body | Yu Gothic Pr6N M | 16px | 400 | 2.0 | 0.05em | ミッション説明等の本文 |
| Nav Brand EN | new-atten | 16px | 700 | 1.6 | 0 | "HOME" 等のナビゲーション |
| Nav Label | Yu Gothic Pr6N M | 12px | 400 | 1.6 | 0 | ナビゲーションラベル |
| Caption | Yu Gothic Pr6N M | 10px | 400 | normal | 0 | 最小テキスト・注釈 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 2.0` — 日本語サイトの中でもかなり広い。植物的な「呼吸」を感じさせる
- **見出し（Hero）の行間**: `line-height: 1.35` — 大きな文字の詰まり感
- **欧文ディスプレイの行間**: `line-height: 1.1` — タイトな英字見出し
- **本文の字間**: `letter-spacing: 0.05em` — 控えめだが確実にスペーシング
- **ヒーローの字間**: `letter-spacing: 0.1em` — ディスプレイサイズではやや広め
- **フッタータグラインの字間**: `letter-spacing: 0.15em` — 最もワイドなスペーシング

**ガイドライン**:
- BOTANIST の letter-spacing は **3段階**: フッタータグライン 0.15em（ワイド）/ ヒーロー 0.1em（中間）/ 本文 0.05em（控えめ）
- 欧文ディスプレイ（new-atten）は letter-spacing 0 または 0.03em で、フォント自体のスペーシングに任せる
- line-height 2.0 は BOTANIST の本文に特徴的。行間の広さが「自然」を表現する重要な要素

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- ブランドタグラインや商品名は改行なしで1行に収める前提

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt 不使用 */
```

- **palt は適用しない**: BOTANIST は `font-feature-settings: normal` で、プロポーショナル字詰めを使用しない
- 字間調整は letter-spacing のみで行い、フォントの固有間隔を尊重するアプローチ
- SHIRO や note と異なり、palt を使わないのが BOTANIST の特徴

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（半透明ガラス — ダーク背景上）**

BOTANIST の CTA は **半透明の白ガラス** が基本。写真やダーク背景に溶け込むように設計されている。

- Background: `rgba(255,255,255,0.2)`
- Text: `#ffffff`
- Border: なし
- Border Radius: **0px**（完全にシャープ — pill でも角丸でもない）
- Padding: 左右非対称（左 17px / 右 13px）
- Font Family: "new-atten", sans-serif
- Font Size: 14px
- Font Weight: 400

**Secondary CTA（ソリッド — ライト背景上）**

- Background: `#1f2529`
- Text: `#ffffff`
- Border Radius: **0px**
- Padding: 12px 32px
- Font Family: "Yu Gothic Pr6N M", sans-serif
- Font Size: 14px
- Font Weight: 400

**Ghost CTA（ボーダーのみ）**

- Background: `transparent`
- Text: `#222222`
- Border: 1px solid `#222222`
- Border Radius: **0px**
- Padding: 12px 32px

**ボタンの考え方**:
- ダーク背景上のメイン CTA は **半透明白 rgba(255,255,255,0.2)**。ガラス越しのような浮遊感
- ライト背景上は **ダークチャコール #1f2529 の塗りつぶし**
- radius は **0px** のシャープエッジ。自然素材の「生」の感触を表現
- ホバー等のインタラクションは opacity の変化で表現

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#bcbfc3`
- Border (focus): 1px solid `#1f2529`
- Border Radius: 0px
- Padding: 12px 16px
- Font Family: "Yu Gothic Pr6N M", sans-serif
- Font Size: 16px

### Cards（商品カード）

- Background: `#fcfcfc`
- Border: なし
- Border Radius: 0px（完全にシャープ）
- Shadow: なし
- 商品写真 + カテゴリラベル（new-atten）+ 商品名（Yu Gothic Pr6N B）の構成

### Section Backgrounds

- Default: `#e6e9ed`（グレーブルーが基本）
- Content: `#fcfcfc`（ニアホワイト）
- Light: `#f0f0f0`（ライトグレー）
- Dark: `#1f2529`（ダークチャコール）

---

## 5. Layout Principles

### Container

- 全面写真とテキストオーバーレイが基本構成
- コンテンツは中央寄せ
- ヘッダー・フッター・ヒーローは全幅

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ミクロ余白・ラベル間隔 |
| S | 8px | カード内パディング |
| M | 16px | 要素間余白 |
| L | 32px | セクション内余白 |
| XL | 64px | セクション間余白 |
| XXL | 120px | ヒーロー上下余白 |

### Grid

- 商品カードはグリッドレイアウト（3〜4カラム）
- フルブリード写真セクションは全幅
- モバイルでは 1〜2 カラムに折り返し

---

## 6. Depth & Elevation

BOTANIST はシャドウを使わない。グレーブルー面（#e6e9ed）、ニアホワイト面（#fcfcfc）、ダークチャコール面（#1f2529）の色コントラストと、半透明オーバーレイで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#fcfcfc` | コンテンツカード面 |
| 2 | background `#e6e9ed` | メイン背景面 |
| 3 | background `#1f2529` | ダークセクション・フッター |
| 4 | `rgba(255,255,255,0.2)` overlay | ガラス質 CTA・半透明要素 |

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文テキストは **Yu Gothic Pr6N**（代替: Zen Kaku Gothic New）を使う
- 欧文ディスプレイは **new-atten**（代替: Josefin Sans）を使う — 二書体の使い分けを守る
- メイン背景は **#e6e9ed**（グレーブルー）にする
- ダーク背景上の CTA は **rgba(255,255,255,0.2)** の半透明ガラスにする
- ボタンの radius は **0px**（シャープエッジ）にする
- 本文の line-height は **2.0** にする（植物的な呼吸感）
- 本文の letter-spacing は **0.05em** にする
- テキストカラーは **#222222**（ソフトブラック）を使う
- 写真を大きく使い、テキストは最小限にする
- `font-feature-settings: normal` のまま（palt は使わない）

### Don't（禁止）

- 和文テキストに new-atten を使わない（欧文ディスプレイ専用）
- 欧文ラベルに Yu Gothic Pr6N を使わない（和文テキスト専用）
- 鮮やかなアクセントカラー（赤・青・緑等）を使わない
- pill ボタン（radius 9999px）や角丸ボタン（radius 8px 等）を使わない（0px がルール）
- 背景を純白 `#ffffff` にしない（`#e6e9ed` か `#fcfcfc` が BOTANIST のトーン）
- テキストに純黒 `#000000` を使わない（`#222222` が標準）
- `font-feature-settings: "palt"` を適用しない（BOTANIST は palt 不使用）
- 本文の line-height を 1.5 以下にしない（2.0 が標準）
- テキストを詰め込まない（余白と写真が主役）
- box-shadow を使わない（色面と透明度のみで奥行きを表現）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Hero Display（52px）→ 28〜32px 程度に縮小
- Footer Tagline（40px）→ 24px 程度に縮小
- 商品グリッドは 1〜2 カラムに折り返し
- フルブリード写真のアスペクト比は維持
- ナビゲーションはハンバーガー化

### タッチターゲット

- CTA ボタンは radius 0px のシャープエッジ — モバイル時はパディング拡張推奨
- 半透明 CTA はタッチ時に opacity を上げてフィードバックを明確にする

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: BOTANIST（ボタニスト）
Tagline: 答えはきっと自然の中にある。
Gray Blue BG: #e6e9ed
Dark Charcoal: #1f2529
Near White: #fcfcfc
Light Gray: #f0f0f0
Text Primary: #222222
Text Secondary: #787b80
Text Muted: #bcbfc3
CTA Glass: rgba(255,255,255,0.2)
Font JP: "Yu Gothic Pr6N M", "Zen Kaku Gothic New", sans-serif
Font EN Display: "new-atten", "Josefin Sans", sans-serif
palt: 不使用（font-feature-settings: normal）
Body: 16px / 400 / line-height 2.0 / letter-spacing 0.05em
Hero: 52px / 400 / line-height 1.35 / letter-spacing 0.1em
EN Display: 32px / 400 / line-height 1.1 / letter-spacing 0.03em
CTA Style: glass (bg rgba(255,255,255,0.2), text #fff, radius 0px)
Shadow: 使用しない
```

### プロンプト例

```
BOTANIST（ボタニスト）のデザインシステムに従って、新商品の紹介ページを作成してください。
- 和文フォントは "Yu Gothic Pr6N M" / "Yu Gothic Pr6N B"（代替: "Zen Kaku Gothic New"）
- 欧文ディスプレイは "new-atten"（代替: "Josefin Sans"）
- font-feature-settings: normal（palt は使わない）
- メイン背景は #e6e9ed（グレーブルー）
- ダークセクションは #1f2529
- テキストは #222222
- ヒーロータグラインは 52px / 400 / line-height 1.35 / letter-spacing 0.1em
- 本文は 16px / 400 / line-height 2.0 / letter-spacing 0.05em
- セクションラベル "HAIRCARE" は new-atten / 21px / 400
- CTA は rgba(255,255,255,0.2) のガラス質、radius 0px
- シャドウは一切使わない
- 写真を大きく使い、テキストは最小限に
```

### 字詰め・組版の重要ポイント

1. **二書体システム**: Yu Gothic Pr6N（和文）と new-atten（欧文ディスプレイ）の明確な使い分けが核心。セクションラベルやカテゴリ名は必ず new-atten、ブランドメッセージや商品名は Yu Gothic Pr6N
2. **palt 不使用**: `font-feature-settings: normal` が全体に適用され、プロポーショナル字詰めを行わない。SHIRO や note とは対照的なアプローチ
3. **line-height 2.0**: 本文の行間が極めて広い。この余白が「植物的な呼吸」を生み出す BOTANIST の核心的要素
4. **グレーブルー #e6e9ed**: 純白でも純灰でもない、ほのかに青みがかった背景色。自然の空気感を表現する
5. **半透明ガラス CTA**: `rgba(255,255,255,0.2)` の CTA は写真やダーク背景に溶け込み、UI が環境の一部になる設計思想
6. **radius 0px**: すべてのコンポーネントがシャープエッジ。自然素材の「生」の質感を UI に反映している
7. **Adobe Fonts 依存**: Yu Gothic Pr6N と new-atten はいずれも Adobe Fonts。プレビューやローカル開発では Zen Kaku Gothic New + Josefin Sans で代替する

---

**取得日**: 2026-05-09
**出典**: https://botanistofficial.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
