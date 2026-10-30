# DESIGN.md — シボネ (CIBONE)

> CIBONE（https://www.cibone.com/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: "We Eat Good. We Sleep Good." をスローガンとする青山発のライフスタイルストア。インテリア・雑貨・アートを横断する編集型 EC で、雑誌のような大判ビジュアルと余白で「日々のもの選び」の世界観を伝える
- **密度**: ヒーローは大判写真 + 短文の見出し。プロダクトグリッドは 2〜3 カラムでゆとりを持たせ、行間 1.5 で日本語を組む
- **キーワード**: ライフスタイル、青山、インテリア、雑貨、編集、ネイビー、矩形、雑誌的、品揃え
- **特徴**: ブランドカラーは **濃いネイビー #142d55**。タイポは **游ゴシック中心**（YuGothic / Yu Gothic / Hiragino Kaku Gothic ProN のクラシック和文スタック）+ 一部見出しに **Helvetica Neue + Open Sans** の欧文混植スタック。ボタンはすべて **border-radius: 0px** の矩形（白地 + ネイビー枠線）。装飾を排した大人のクラフト感が CIBONE 特有の表情

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

CIBONE は **濃いネイビー #142d55** を全 UI のシグネチャ色とする。お知らせバナー、ボタン枠線、リンク、強調点など、画面のあらゆる要素にこのネイビーが現れる。

- **CIBONE Navy** (`#142d55`): 上部告知バナー、ボタン枠線、強調リンク（rgb 20, 45, 85）

### Neutral

- **Text Primary** (`#000000`): 本文・見出し・ボタンテキスト
- **Text Inverse** (`#ffffff`): ネイビー上の反転テキスト
- **Surface** (`#ffffff`): 標準背景
- **Surface Light** (`#eaeaea`): セクション地・ボックス背景（rgb 234, 234, 234）
- **Surface Subtle** (`#eeeeee` / `#efefef`): About ページ等の補助背景
- **Border Mute** (`#535353`): フッター "トップへ戻る" 円形ボタンの枠（rgb 83, 83, 83）

### Accent

- 鮮やかなアクセント色は使わない。ネイビーと白で完結させる
- 商品写真自体が画面の色を担う

---

## 3. Typography Rules

### 3.1 和文フォント

CIBONE は **游ゴシック (YuGothic) を最優先**とするクラシックな和文スタック。Webフォントは使わず、OS 標準フォントだけで構成する Mac/Win 両対応の保守的なアプローチ。

- **游ゴシック体 / Yu Gothic / YuGothic**: 主要和文（Mac/Win 両方の游ゴシック呼称を網羅）
- **Hiragino Kaku Gothic ProN / ヒラギノ角ゴ ProN W3**: macOS フォールバック
- **Hiragino Kaku Gothic Pro / ヒラギノ角ゴ Pro W3**: 旧 macOS フォールバック
- **Meiryo / メイリオ**: Windows フォールバック
- **MS PGothic / ＭＳ Ｐゴシック**: 古い Windows フォールバック
- **sans-serif**: 最終フォールバック

### 3.2 欧文フォント

一部の見出し・特集ラベルでは欧文を先頭に置いたスタックを使い、英語と日本語が混在する見出しを組む。

- **Helvetica Neue**: 主要欧文。"FEATURES" "GOODS" 等の英語見出し
- **Open Sans**: 第二の欧文。Helvetica Neue がないときに代替
- **Arial**: フォールバック
- 和文部分は同じスタック内で游ゴシックに継がれる

### 3.3 font-family 指定

```css
/* Body / 標準（和文優先） */
font-family: 游ゴシック体, "Yu Gothic", YuGothic,
             "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
             "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
             Meiryo, メイリオ, "MS PGothic", "ＭＳ Ｐゴシック", sans-serif;

/* Featured Heading（欧文優先） */
font-family: "Helvetica Neue", "Open Sans", Arial,
             游ゴシック体, "Yu Gothic", YuGothic,
             "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
             "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
             Meiryo, メイリオ, "MS PGothic", "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- Web フォントは使わず、Mac/Win 双方で游ゴシックを呼び出すクラシックスタック
- 見出しに欧文を入れたいときは Helvetica Neue を先頭に置き、和文部分は游ゴシックに自動的に継がれる仕組み

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Font | 備考 |
|------|------|--------|-------------|------|------|
| Brand Logo (h1) | 32px | 700 | 1.5 (48px) | 游ゴシック | "CIBONE ONLINE STORE" |
| Section Title (h2) | 34px | 700 | 1.5 (51px) | Helvetica Neue + 游 | "FEATURES特集" など欧文+和文混植 |
| Card Title (h3) | 18.72px | 700 | 1.8 (33.7px) | 游ゴシック | "FURNITUREファニチャー" |
| Card Title (h3) | 18px | 700 | 1.8 (32.4px) | 游ゴシック | "What the Eye Knows" |
| Sub Heading (h3) | 20px | 700 | 1.5 (30px) | Helvetica Neue + 游 | "GOODS" |
| Lead (p) | 18px | 700 | 1.5 (27px) | 游ゴシック | "デスクは、自分らしさの小宇宙" |
| Body | 16px | 500 | 1.5 (24px) | 游ゴシック | 本文。weight は **500** が基本 |
| Body Small | 14px | 500 | 1.5 (21px) | 游ゴシック | 補足テキスト |
| Card Item Name | 15px | 700 | 1.5 (22.5px) | Helvetica Neue + 游 | 商品名 "WRAPINKNOT WOOL WEAR" |
| Card Price | 15px | 500 | 1.5 (22.5px) | 游ゴシック | "¥26,400" |
| Promo Banner | 12px | 500 | 1.5 (18px) | 游ゴシック | "雑貨アイテム、11,000円以上お買い上げで送料無料" |
| Header Nav | 14px | 700 | 1.0 (14px) | 游ゴシック | "GOODS" "アイテム" 等 |
| Header Caption | 13px | 500 | normal | 游ゴシック | カート等の補助 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（24px / 16px）。游ゴシックの読みやすさを保つ標準的な比率
- **見出しの行間**: 大見出しは 1.5（48〜51px）、カード見出しはやや広く 1.8（33.7px / 32.4px）
- **本文の字間**: `letter-spacing: normal`。游ゴシックの本来の字面で組む
- **特殊な字間**: なし（CIBONE は letter-spacing をいじらない）

### 3.6 OpenType 機能

- 抽出データ上に明示的な `font-feature-settings` 指定はなし（normal）
- 游ゴシック標準のカーニング・約物処理に委ねる
- **`palt` は使用しない**: 游ゴシックの素のメトリクスでの読みやすさを尊重

### 3.7 改行・禁則

- 商品名（"WRAPINKNOT WOOL WEAR / ラッピンノッ…"）は欧文 + 和文の混植で 2 行折り返しを許容
- 本文ブロックでは `word-break` を強制しない

---

## 4. Component Stylings

### Buttons

**Primary CTA（白地・ネイビー枠）**（"新規会員登録" "店舗一覧" 等の主要動作）

- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#142d55`（CIBONE Navy）
- Border Radius: **0px**（完全な矩形）
- Padding: 16px 10px（縦に広い、横は控えめ）
- Font Family: 游ゴシック スタック
- Font Size: 16px
- Font Weight: 500
- Line Height: 1.0（16px / 16px）

**Top More CTA**（"もっと見る" のような補助動作）

- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#142d55`
- Border Radius: **0px**
- Padding: 16px 10px
- Font Size: 14px
- Font Weight: 500

**Footer Top Round CTA**（"トップへ戻る"）

- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#535353`（ミュートグレー）
- Border Radius: **50%**（円形 — フッターのこの 1 種類のみ）
- Padding: 0
- Font Size: 16px

**Promo Banner CTA**（上部の "雑貨アイテム、11,000円以上…" バナーリンク）

- Background: `#142d55`
- Text: `#ffffff`
- Font Size: 12〜14px
- Font Weight: 700（バナー内の強調語のみ）

### Inputs

実測の input 要素から:

- Font Size: 13px
- Font Family: 游ゴシック スタック
- Font Weight: 500
- Border: 1px solid（淡いグレー想定）
- Border Radius: 0px（矩形）
- Background: `#ffffff`

### Cards

- Background: `#ffffff`
- Border Radius: 0px（矩形のみ）
- Shadow: なし（フラット）
- 構成: 商品画像 + タイトル（欧文+和文混植）+ 価格（游ゴシック数字）

### Section Backgrounds

- Hero / Standard: `#ffffff`
- Section Box: `#eaeaea`（軽くトーンを落とす場面）
- About 系: `#eeeeee` / `#efefef` のグラデーション

---

## 5. Layout Principles

### Container

- ヘッダー: ロゴ中央 + ナビ + カート + 検索の構成
- メインコンテンツ: max-width で中央寄せ、左右にゆとりのあるパディング

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10px | CTA 横 padding（ナロー） |
| S | 16px | CTA 縦 padding |
| M | 24px | カード内余白 |
| L | 40px | セクション間 |

### Grid

- 商品グリッドは PC で 3〜4 カラム、タブレット 2、モバイル 1
- 特集 (FEATURES) は 2 カラム以上の大判レイアウト
- フッターは 4 カラム前後のリンク群

---

## 6. Depth & Elevation

CIBONE はシャドウを使わずフラットに構成する。商品写真と少しのトーン差（`#eaeaea` の薄面）で空間を作る。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。すべての要素 |
| 1 | bg `#eaeaea` | ボックス・セクションの区切り |
| 2 | `1px solid #142d55` border | カード・ボタン枠線 |

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラーは **`#142d55` (ネイビー)** を必ず軸にする。お知らせバナーや CTA 枠線など、画面のあらゆる場所に使う
- 本文・UI は **游ゴシック** スタックで組む（Webフォントは使わない）
- 欧文混植の見出しでは **`"Helvetica Neue", "Open Sans", Arial, 游ゴシック…`** の欧文先頭スタックを使う
- 本文の `font-weight` は **500** が基本（400 より少し締まる）
- 見出しの `font-weight` は **700**
- 本文の `line-height: 1.5` を維持
- ボタンは **`border-radius: 0px`** の矩形。`#ffffff` bg + `#142d55` 1px 枠線が標準
- 「トップへ戻る」のみ円形（border-radius 50%）の例外

### Don't（禁止）

- ブランドネイビー以外の色を CTA 枠線に使わない
- ボタンを pill (radius: 50px) にしない
- 本文 weight を 400 にしない（500 が基本）
- letter-spacing を入れない（normal を維持）
- Webフォントを乱用しない（游ゴシック・Helvetica Neue で完結）
- ドロップシャドウを使わない（フラット）
- 鮮やかなアクセント色（赤・緑・オレンジ）を多用しない

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- ヒーロー h2 34px → 24px 程度
- ヘッダーはハンバーガーメニュー化
- 商品グリッドは 1〜2 カラムに折り返す
- フッターは 1 カラム積み

### タッチターゲット

- Primary CTA は 16px 縦 padding × 2 + 16px 文字高 = 48px と十分
- 円形「トップへ戻る」は 44×44px 以上を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: CIBONE
Primary Color: #142d55 (CIBONE Navy)
Text Primary: #000000
Surface: #ffffff
Surface Light: #eaeaea
Border Mute: #535353
Body Font: 游ゴシック体, "Yu Gothic", YuGothic,
           "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Featured Font: "Helvetica Neue", "Open Sans", Arial, 游ゴシック...
Body Size: 16px / 500 / line-height 1.5
Heading Weight: 700
Letter Spacing: normal (palt 不使用)
CTA Border Radius: 0px (矩形のみ)
CTA Padding: 16px 10px
CTA Pattern: #ffffff bg + 1px solid #142d55 + #000000 text
```

### プロンプト例

```
CIBONE のデザインシステムに従って、新作家具特集ページを作成してください。
- 本文フォント: 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
- 本文 color は #000000、font-weight 500、line-height 1.5
- ヒーロー h2 は "FEATURES特集" のように欧文+和文混植 — フォントは "Helvetica Neue", "Open Sans", Arial, 游ゴシック…
- Primary CTA「商品を見る」は #ffffff bg + #000000 text + 1px solid #142d55 + radius 0px + padding 16px 10px
- 上部告知バナーは #142d55 bg + #ffffff text、12px / 500
- 商品グリッドは 3 カラム、カードは radius 0px のフラット
- letter-spacing は normal、palt は使わない
- 装飾色は使わず、ネイビー #142d55 と白だけで構成する
```

### 字詰め・組版の重要ポイント

1. **font-weight 500 の本文**: 400 ではなく 500 を本文の標準に置くのが CIBONE 流
2. **欧文+和文混植見出し**: "FEATURES特集" のように英文 + 和文を 1 つの見出しに同居させる
3. **CTA は border-radius 0px**: pill ではなく矩形。ネイビー枠線 + 白地が定型
4. **ブランドネイビー #142d55 の徹底**: 告知バナーから CTA 枠線まで一貫してこの 1 色
5. **letter-spacing normal**: 字詰めをせず、游ゴシック本来のメトリクスを使う
6. **Web フォント不使用**: 游ゴシック + Helvetica Neue の OS 標準で完結させる保守的な選択

---

**取得日**: 2026-05-08
**出典**: https://www.cibone.com/, https://www.cibone.com/about/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
