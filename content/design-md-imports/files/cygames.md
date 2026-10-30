# DESIGN.md — Cygames（サイゲームス）

> Cygames（https://www.cygames.co.jp/）のデザイン仕様書。
> 「最高のコンテンツを作る会社」を掲げる日本のゲーム開発会社。Granblue Fantasy, Uma Musume 等を展開。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロームを基調に、**ダークネイビー `#27455c` とグリーン `#468254` をアクセント**に添えた重厚感のあるコーポレートデザイン。ゲーム会社でありながら派手な色使いを抑え、コンテンツ（ゲームタイトル）自体を引き立てる黒子的な構成
- **密度**: ヒーロー領域は line-height 1.0 の極端にタイトな組み。セクション見出しも 1.15〜1.33 と詰めて力強さを出す。エンタテインメント企業らしい「画で魅せる」レイアウト
- **キーワード**: モノクローム、重厚、ボールド、ゲーミング、コンテンツファースト
- **特徴**:
  - 英語セクション見出しに **Cygames Sans（ブランド専用書体）** を使用。自社開発のカスタムフォントで、幾何学的なサンセリフ
  - 和文は **YakuHanJPs + Noto Sans JP** の組み合わせ。YakuHanJPs は約物（括弧・句読点）を半角幅に詰めるためのユーティリティフォント
  - ヒーローの日本語見出しに **weight 900** を使用。一般的な 700 を超える超極太ウェイトで圧倒的な存在感
  - 大きな日本語見出しに `font-feature-settings: "palt"` を適用。プロポーショナル字詰めで見出しの密度をさらに高める
  - カラーパレットは黒・白・グレーのモノクロームが 9 割以上。ネイビー `#27455c` とグリーン `#468254` はセクション背景やカテゴリ表示など限定的に使用
  - CSS Custom Properties は使用せず、スタイルはマークアップに直接埋め込み
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — Monochrome Core

- **Black** (`#000000`): ブランドの基幹色。CTA ボタン背景、本文テキスト、ヘッダー背景に使用。Cygames のコーポレートカラーは黒
- **White** (`#ffffff`): ヒーローテキスト、暗い背景上のテキスト、ページ背景

### Accent

- **Navy Blue** (`#27455c`): セクション背景色。数字で紹介するインフォグラフィックセクション等で使用。深みのあるダークブルー
- **Forest Green** (`#468254`): カテゴリバッジ・アクセント色。ゲームタイトルのカテゴリ表示等に使用

### CTA / Buttons

- **Primary CTA**: 背景 `#000000` / 文字 `#ffffff` / radius `5px` / padding 可変
- **Ghost CTA（ヒーロー上）**: 背景 `transparent` / 文字 `#ffffff` / border `1px solid #ffffff` / radius `5px`
- **Cookie Accept**: 背景 `#000000` / 文字 `#ffffff` / radius `4px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Pure Black | `#000000` | (0, 0, 0) | 見出し・本文テキスト・CTA 背景 |
| Dark Charcoal | `#3f3e3e` | (63, 62, 62) | フッター背景・セカンダリテキスト |
| Medium Gray | `#cccccc` | (204, 204, 204) | ボーダー・区切り線 |
| Light Gray | `#f5f5f5` | (245, 245, 245) | セクション背景（ライト面） |
| Pure White | `#ffffff` | (255, 255, 255) | ページ背景・暗い面上のテキスト |

### Semantic（実測未確認・推奨値）

実サイトはコーポレートサイトのため、明確なエラー／成功色は表面化していない。アプリケーション UI 向けの推奨補完値:

- **Danger**: `#dc2626` 程度のレッド
- **Success**: `#468254`（ブランドのグリーンを転用可）
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を主書体として使用
- **約物半角化**: **YakuHanJPs** を font-family 先頭に配置。括弧・句読点（「」、。等）のグリフだけを半角幅に差し替えるユーティリティフォント。本文の字面が引き締まる
- **フォールバック**: 游ゴシック体 → YuGothic → 游ゴシック → Yu Gothic → メイリオ → sans-serif

### 3.2 欧文フォント

- **Cygames Sans（ブランド専用）**: 英語セクション見出し（"News", "About" 等）に使用。自社開発の幾何学的サンセリフ。外部では使用不可
- **フォールバック**: Noto Sans JP の欧文グリフがそのまま適用（欧文専用書体は font-family に含まれない）

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: YakuHanJPs, "Noto Sans JP", 游ゴシック体, YuGothic,
  游ゴシック, "Yu Gothic", メイリオ, sans-serif;

/* 英語セクション見出し（ブランド専用） */
font-family: "Cygames Sans", sans-serif;
```

**フォールバックの考え方**:
- YakuHanJPs を先頭に置き、約物グリフだけを半角化。和文本体のグリフは Noto Sans JP にフォールバック
- 游ゴシック系は Windows 環境でのフォールバック。メイリオは古い Windows 向け
- Cygames Sans はブランド専用フォントのため、再現不可能な環境では Inter や Montserrat 等の幾何学的サンセリフで代替

> **代替フォント注記**: Cygames Sans はブランド専用書体のため外部利用不可。preview.html では英語見出しに **Inter**（Google Fonts、幾何学的サンセリフ）を代替使用。Noto Sans JP は Google Fonts で利用可能。

### 3.4 文字サイズ・ウェイト階層

> 実測値（コーポレートサイト トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Display | Noto Sans JP | 61.7px | **900** | 72px (x1.17) | — | `#ffffff` | "「楽しさ」と「ワクワク」を" / `palt` 有効 |
| Hero Slider | Noto Sans JP | 30px | 700 | 30px (x1.0) | — | `#ffffff` | スライダー上のキャッチコピー |
| Section H2 (EN) | Cygames Sans | 26.7px | 700 | 30.7px (x1.15) | — | `#000000` | "News", "About" 等の英語見出し |
| Section H2 (JP) | Noto Sans JP | 30.9px | 700 | 41.1px (x1.33) | — | `#000000` | "Cygamesの特徴を数字で紹介" |
| Section Label | Cygames Sans | 15px | 700 | — | — | `#000000` | 英語の小見出しラベル |
| H1 Tagline | Noto Sans JP | 20px | 700 | 20px (x1.0) | — | `#ffffff` | "最高のコンテンツを作る会社" |
| H3 Item Title | Noto Sans JP | 20.6px | 700 | — | — | `#000000` | 記事・項目タイトル / `palt` 有効 |
| H3 Sub | Noto Sans JP | 16px | 700 | 20.8px (x1.3) | — | `#000000` | 小見出し |
| Date/Info | Noto Sans JP | 20px | 700 | 20px (x1.0) | — | `#ffffff` | 日付・情報テキスト（ダーク面上） |
| Body | Noto Sans JP | 10px | 400 | — | — | `#000000` | 本文（コーポレートサイトは画像主体で本文テキストが少ない） |
| Link | Noto Sans JP | 14-16px | 700 | — | — | `#000000` | ナビ・テキストリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **ヒーロー見出し (61.7px)**: `1.17`（72px / 61.7px）— 超タイト。文字の密集で迫力を出す
- **ヒーロースライダー (30px)**: `1.0`（30px / 30px）— 行間なし。一行テキスト前提
- **セクション見出し EN (26.7px)**: `1.15`（30.7px / 26.7px）
- **セクション見出し JP (30.9px)**: `1.33`（41.1px / 30.9px）
- **小見出し (16px)**: `1.3`（20.8px / 16px）
- **タグライン (20px)**: `1.0`（20px / 20px）

**字間 (letter-spacing)** — 実測:
- 明示的な letter-spacing の指定は確認されなかった
- 大きな見出し（61.7px, 20.6px）では `font-feature-settings: "palt"` によるプロポーショナル字詰めが有効
- 本文・ナビでは既定の字間

**ガイドライン**:
- ヒーロー・見出しは **line-height 1.0〜1.33 のタイト**な組みが基本。ゲーミング・エンタメらしい力強さ
- `palt` は **大きな和文見出し（20px 以上）に限定**。本文には適用しない
- weight 700〜900 の極太ウェイトを多用。700 が標準的な太さ、900 はヒーロー限定

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ヒーロー見出しは画像内テキストまたは `<br>` で改行位置を手動指定
- ナビリンクは `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* 大きな和文見出し（H2 Hero, H3 Item Title）に適用 */
font-feature-settings: "palt";
```

- **`palt`（プロポーショナル字詰め）**: 61.7px のヒーロー見出しと 20.6px の項目タイトルで確認。括弧・句読点の前後が詰まり、見出しの密度が上がる
- **本文・ナビには `palt` を適用しない**。YakuHanJPs が約物のみ半角化しており、全体のプロポーショナル化は不要
- `kern` の明示的有効化は確認されなかった

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（黒背景）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 可変（コンテキストに依存）
- Border Radius: `5px`（角丸だがピルではない）
- Font: Noto Sans JP, 14-16px, weight 700
- Border: none

**Ghost CTA（ヒーロー上の透明ボタン）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Padding: 可変
- Border Radius: `5px`
- Font: Noto Sans JP, 14-16px, weight 700
- 用途: ヒーロースライダー上の CTA。背景画像を活かすための透過デザイン

**Cookie Accept**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `8px 16px`
- Border Radius: `4px`
- Font: Noto Sans JP, 14px, weight 700

### Cards — News

- Background: `#ffffff`
- Border: なし
- Border Radius: `10px`
- Shadow: 軽い影（推奨 `0 2px 8px rgba(0, 0, 0, 0.08)`）
- 用途: ニュース記事一覧のカード。サムネイル画像 + タイトル + 日付

### Inputs（推奨実装）

コーポレートサイトにフォーム要素は露出していないが、ブランドトーンに合わせた推奨値:

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #000000`
- Border Radius: `5px`（ボタンと統一）
- Padding: `12px 16px`
- Font: YakuHanJPs, "Noto Sans JP", sans-serif, 16px, weight 400
- Height: `44px`

### Header

- Background: `#000000`（ソリッド黒）または画像・動画が背景
- Position: `fixed top: 0`
- ロゴ: Cygames ロゴ（白）
- ナビリンク: 白文字、14-16px、weight 700

### Footer

- Background: `#3f3e3e`（ダークチャコール）
- Text: `#ffffff`
- Padding: `48px 24px`
- リンク: 白文字、14px

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内の要素間 |
| M | 16px | カード内の段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度（コンテンツ領域）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`
- ヒーロー: フル幅（`100vw`）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | Cookie ボタン等の小パーツ |
| Medium | 5px | 主要 CTA・ゴーストボタン |
| Large | 10px | ニュースカード |

### Grid

- ニュースカード: 3〜4 カラムグリッド（CSS Grid または Flexbox）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ほとんどの要素（フラットデザイン基調） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ニュースカード |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.12)` | ホバー時の浮き上がり（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.15)` | モーダル・ダイアログ（推奨） |

- 立体感は主に **ダーク面とライト面のコントラスト**で表現。ヒーローの `#000000`、セクションの `#27455c`、`#f5f5f5` と `#ffffff` の切り替えで奥行きを作る
- 影を使う場合も控えめな値（`rgba(0, 0, 0, 0.08〜0.15)`）で重厚感を維持

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **YakuHanJPs を先頭**に置き、約物の半角化を常に有効にする
- 英語セクション見出しは **Cygames Sans**（利用不可の場合は Inter 等の幾何学的サンセリフ）で和文と明確に分ける
- ヒーロー見出しは **weight 900 + `palt`** で最大限のインパクトを出す
- CTA は **黒背景 `#000000` + 白文字**。ブランドのモノクロームを貫く
- ダーク面上の CTA は **ゴーストボタン**（透明背景 + 白ボーダー）で背景画像を活かす
- アクセント色（ネイビー `#27455c`、グリーン `#468254`）は **セクション背景やカテゴリ表示に限定**。面で使い、テキストや CTA に使わない
- 見出しの line-height は **1.0〜1.33 のタイト**な組みを基本にする。密集した文字組みがゲーム会社らしい力強さを生む
- border-radius は **5px** を基本値とする（ピルではない控えめな角丸）

### Don't（禁止）

- ヒーローや見出しに **細いウェイト（400 以下）を使わない**。Cygames のデザインは太字が基本（最低 700）
- **ビビッドなカラー CTA**（ブルー、レッド、グリーン等の CTA 背景）を使わない — Cygames の CTA は黒一択
- アクセント色 `#27455c` `#468254` を **テキストやボタンの色に使わない**（セクション背景・バッジのみ）
- **ピルボタン（radius 9999px）を使わない** — Cygames は `5px` の控えめな角丸
- 見出しに **広い line-height（1.5 以上）を使わない**。タイトな組みが崩れる
- **カラフルなグラデーション**や **影の多用**をしない。モノクロームの重厚感を壊す
- 本文に **`palt` を適用しない**。`palt` は大きな見出し（20px 以上）専用
- YakuHanJPs を **省略しない**。約物半角化はブランドの文字組みの一部

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768px〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト |

### モバイル時の調整

- ヒーロー Display: 61.7px → 32〜36px（weight 900 は維持）
- セクション H2 (JP): 30.9px → 22〜26px
- セクション H2 (EN): 26.7px → 18〜22px
- ニュースカード: 3-4 カラム → 1 カラム
- ナビはハンバーガーメニュー化

### タッチターゲット

- CTA ボタン: 高さ 44px 以上（WCAG 基準）
- ナビリンク: 44px x 44px のタッチ領域を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Black (Brand / CTA): #000000
White (Text on Dark): #ffffff
Navy Blue (Section BG): #27455c
Forest Green (Accent): #468254
Light Gray (Surface): #f5f5f5
Medium Gray (Border): #cccccc
Dark Charcoal (Footer): #3f3e3e

Font (JP): YakuHanJPs, "Noto Sans JP", 游ゴシック体, YuGothic,
  游ゴシック, "Yu Gothic", メイリオ, sans-serif
Font (EN Heading): "Cygames Sans", sans-serif
（Cygames Sans 不在時の代替: Inter）

Hero Display: 61.7px / weight 900 / line-height 1.17 / palt
Section H2 EN: 26.7px / Cygames Sans / weight 700 / line-height 1.15
Section H2 JP: 30.9px / weight 700 / line-height 1.33
H3 Title: 20.6px / weight 700 / palt
Body: 10-16px / weight 400
Link/Nav: 14-16px / weight 700

Border Radius: 5px（CTA）/ 10px（カード）
Shadow: 基本 none。階層はダーク面とライト面のコントラストで表現
```

### プロンプト例

```
Cygames のデザインに従って、ゲームタイトル一覧ページを作成してください。
- フォント (JP): YakuHanJPs, "Noto Sans JP", 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", メイリオ, sans-serif
- フォント (EN 見出し): "Cygames Sans", sans-serif（利用不可の場合は Inter）
- セクション見出し (EN): 26.7px / Cygames Sans / weight 700 / line-height 1.15 / color #000000
- セクション見出し (JP): 30.9px / weight 700 / line-height 1.33 / color #000000
- カードタイトル: 20.6px / weight 700 / palt / color #000000
- 本文: 16px / weight 400 / color #000000
- CTA: 背景 #000000（黒）/ 白文字 / border-radius 5px / weight 700
- ゴースト CTA（ダーク面上）: 背景 transparent / 白文字 / border 1px solid #ffffff / radius 5px
- カード: 背景 #ffffff / border-radius 10px / 軽い影
- セクション背景（交互）: #ffffff / #f5f5f5 / #27455c（ネイビー・数字セクション等）
- フッター: 背景 #3f3e3e / 白文字
- ビビッドな CTA 色を使わない。CTA は常に黒
- アクセント色（#27455c, #468254）はセクション背景・カテゴリバッジに限定
- YakuHanJPs を font-family 先頭に置き、約物を半角化する
- 大きな和文見出し（20px 以上）には font-feature-settings: "palt" を適用
```
