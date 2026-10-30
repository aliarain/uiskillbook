# DESIGN.md — HUMAN MADE（ヒューマンメイド）

> HUMAN MADE（https://humanmade.jp/）のデザイン仕様書。
> 2026-05-10 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: NIGO(R) が手がけるストリートウェア／ライフスタイルブランド。ヴィンテージアメリカーナとポップカルチャーへの愛を、クリーンなグラフィックデザインで表現。**Avenir Next LT Pro**（ジオメトリック・サンセリフ）を主軸に、font-weight 400 のみという極端なウェイト統一で「力の抜けた洗練」を実現。CTAは **radius 0px の完全な直角** で、グラフィカルかつ大胆。プロダクト写真のカラフルさとミニマルな UI のコントラストが HUMAN MADE の世界観を形作る
- **密度**: EC サイト型のプロダクトショーケース。商品画像を主役にした構成で、テキストは最小限。Shopify ベースの堅実なグリッドレイアウト
- **キーワード**: ストリートウェア、ポップカルチャー、ヴィンテージ、シャープCTA、カラフル、Avenir Next、weight 400 統一
- **特徴**: **font-weight 400 のみ**という単一ウェイトシステムが最大の特徴（footer の微小ボタン 600 を除く）。見出し・本文・CTA すべてが同一ウェイトで、サイズと letter-spacing の変化だけで階層を表現する。CTAは完全な直角（radius 0px）で、ストリートカルチャーのグラフィック的な力強さを演出。ブランドアクセントの赤 **#ea2222** は NIGO(R) のハートモチーフに由来し、プロダクトカラーも多彩（ネイビー、イエロー、オリーブ、ピンク等）。テキストカラーは純黒を避けたチャコール **#121212**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

HUMAN MADE のカラーパレットはプロダクト由来の多彩さが特徴。UI 自体は **#121212 チャコール** と **#ffffff 白** の二極構成だが、商品から溢れる色がページ全体のトーンを決める。

- **Charcoal** (`#121212`): CTA 背景・見出しテキスト・フッター等のキーエレメント（rgb 18, 18, 18）— 純黒ではないソフトブラック
- **Heart Red** (`#ea2222`): ブランドアクセント。NIGO(R) のハートモチーフに由来する赤（rgb 234, 34, 34）— 11 件出現

### Accent（プロダクト由来のアクセントカラー）

商品写真・カテゴリを彩るカラーパレット。UI 要素ではなくプロダクトの世界観を表現する色。

- **Navy** (`#083a6b`): ネイビー系プロダクト（rgb 8, 58, 107）— 11 件出現
- **Yellow** (`#ffd83b`): ポップなイエロー（rgb 255, 216, 59）— 9 件出現
- **Olive** (`#808000`): ミリタリー調オリーブ（rgb 128, 128, 0）— 6 件出現
- **Green** (`#7fbf50`): フレッシュグリーン（rgb 127, 191, 80）— 6 件出現
- **Sky Blue** (`#399ede`): ライトブルー（rgb 57, 158, 222）— 5 件出現
- **Pink** (`#f9aae7`): ポップピンク（rgb 249, 170, 231）— 5 件出現
- **Orange** (`#ff9800`): オレンジ（rgb 255, 152, 0）— 4 件出現
- **Tan** (`#c7b376`): ヴィンテージベージュ（rgb 199, 179, 118）— 4 件出現
- **Brown** (`#a5652a`): レザーブラウン（rgb 165, 101, 42）— 4 件出現

### Text & Neutral

- **Text Primary** (`#121212`): 見出し・本文テキスト（rgb 18, 18, 18）
- **Text Muted** (`rgba(18,18,18,0.85)`): サブナビゲーション・補足テキスト — 85% 不透明度
- **Text Footer** (`rgba(18,18,18,0.75)`): フッターテキスト — 75% 不透明度
- **Text on Dark** (`#ffffff`): チャコール背景上の白テキスト
- **Gray** (`#707070`): グレーテキスト（rgb 112, 112, 112）
- **Sale Red** (`#ed1c24`): セール価格の赤（rgb 237, 28, 36）— Heart Red とは別のやや明るい赤
- **Gray Card** (`#999999`): プロダクトカード背景（rgb 153, 153, 153）— 15 件出現

### Surface

- **Surface White** (`#ffffff`): ページ背景
- **Surface Charcoal** (`#121212`): CTA・フッター・ダークセクション背景
- **Carousel Dot** (`rgba(255,255,255,0.55)`): カルーセルインジケーター

---

## 3. Typography Rules

### 3.1 和文フォント

HUMAN MADE は和文フォントに**游ゴシック体**ファミリーを使用。Avenir Next LT Pro（欧文主体）のフォールバックとして配置されている。

- **游ゴシック体** (YuGothic): font-family 内で和文の表示を担当
- **游ゴシック** ("Yu Gothic"): Windows 向けフォールバック
- **Hiragino Sans**: macOS / iOS 向けフォールバック

### 3.2 欧文フォント

- **avenir-next-lt-pro**: Adobe Fonts から配信されるジオメトリック・サンセリフ。すべてのテキストの先頭に指定される HUMAN MADE のシグネチャーフォント
- **Google Fonts 代替**: **Nunito Sans**（丸みのあるジオメトリック・サンセリフ、Avenir Next と字形が近い）または **Outfit**

> **補足**: avenir-next-lt-pro は Adobe Fonts のドメインライセンス制フォント。preview.html では Nunito Sans を代替として使用する。一部要素では "Avenir Next"（ローカルフォント名）が指定されているケースもある

### 3.3 font-family 指定

```css
/* メイン（Adobe Fonts 版） */
font-family: avenir-next-lt-pro, sans-serif, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Sans", "ヒラギノ角ゴシック", "メイリオ", Meiryo, sans-serif;

/* 一部要素（ローカル版） */
font-family: "Avenir Next", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Sans", "ヒラギノ角ゴシック", "メイリオ", Meiryo, sans-serif;

/* Google Fonts 代替 */
font-family: "Nunito Sans", sans-serif, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Sans", "ヒラギノ角ゴシック", "メイリオ", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Avenir Next LT Pro）を先頭に配置 — 欧文グリフの品質を優先
- 和文は游ゴシック体 → Yu Gothic → Hiragino Sans → メイリオの順で、OS 問わず対応
- Avenir Next のクリーンなジオメトリック感が HUMAN MADE のブランドトーン

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 2 | Avenir Next LT Pro | 20px | 400 | 1.2 (24px) | 0.6px (0.03em) | セクション見出し |
| Heading 3 | Avenir Next LT Pro | 14px | 400 | 1.3 (18.2px) | 0.8px (0.057em) | カテゴリ見出し |
| Heading 4 | Avenir Next LT Pro | 24px | 400 | 1.3 (31.2px) | 0.6px (0.025em) | ページタイトル / alt: lh 1.2 (28.8px) |
| Body | Avenir Next LT Pro | 16px | 400 | 1.0 (16px) | 0.6px (0.0375em) | ベースボディ（行間詰め） |
| Body Paragraph | Avenir Next LT Pro | 16px | 400 | 1.6 (25.6px) | 0.8px (0.05em) | 本文パラグラフ / alt: lh 1.5 (24px) |
| Small Paragraph | Avenir Next LT Pro | 12px | 400 | 1.6 (19.2px) | 0.6px (0.05em) | 補足テキスト |
| Nav Link | Avenir Next LT Pro | 14-16px | 400 | — | 0.6-1px | ナビゲーション |
| Subnav | Avenir Next LT Pro | 12px | 400 | — | — | サブナビ / color rgba(18,18,18,0.85) |
| Price / Meta | Avenir Next LT Pro | 11px | 400 | 1.2 (13.2px) | 0.6px (0.055em) | 価格・メタ情報 |
| Button | Avenir Next LT Pro | 13px | 400 | — | 1px (0.077em) | CTA テキスト |
| Label | Avenir Next LT Pro | 14-16px | 400 | — | 0.98-1px | フォームラベル |
| Footer | Avenir Next LT Pro | 12px | 400 | — | 0.6px | フッター / color rgba(18,18,18,0.75) |
| Footer Small | Avenir Next LT Pro | 7px | 600 | — | — | フッター極小ボタン（唯一の非 400） |

### 3.5 行間・字間

- **ボディ基本の行間**: `line-height: 1.0`（16px / 16px）— 極端に詰めた行間。EC サイトのレイアウト効率重視
- **本文パラグラフの行間**: `line-height: 1.5〜1.6`（24-25.6px / 16px）— 読みやすさが必要な長文では標準的な行間に
- **見出しの行間**: `line-height: 1.2〜1.3` — タイトなヘッディング
- **本文の字間**: `letter-spacing: 0.6px`（16px ベースで約 0.0375em）— HUMAN MADE 全体で最も多い字間値
- **ナビ・ボタンの字間**: `letter-spacing: 0.8〜1px`（約 0.05〜0.077em）— やや広めでトラッキング感を出す
- **価格の字間**: `letter-spacing: 0.6px` — 本文と同一

**ガイドライン**:
- letter-spacing は **0.6px** がベースライン。ナビ・CTA・ラベルでは **0.8〜1px** に広げる
- 行間は用途で大きく変わる: レイアウト目的の body は 1.0、読む本文は 1.5〜1.6
- すべてが weight 400 のため、サイズと字間の変化だけで視覚的階層を構成する

### 3.6 OpenType 機能

```css
/* 特別な OpenType 設定なし */
/* Avenir Next LT Pro はデフォルトのカーニングが有効 */
```

- **palt**: グローバル適用なし。和文テキストが少なく、欧文フォント主体のため
- **kern**: Avenir Next LT Pro のデフォルトカーニングに依存
- 日本語テキストは letter-spacing で間隔を制御

### 3.7 改行・禁則

- Shopify テーマのデフォルト設定に依存
- 特別な禁則処理の指定なし（ブラウザデフォルト）

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし）**

HUMAN MADE の CTA は **完全な直角（radius 0px）** が最大の特徴。ストリートカルチャーのグラフィック的な力強さを表現する。

- Background: `#121212`
- Text: `#ffffff`
- Border Radius: **0px**（完全な直角 — sharp rectangular）
- Padding: 16px 32px（寛大なパディング）
- Font Family: avenir-next-lt-pro, sans-serif, ...
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 1px

**Ghost CTA（アウトライン）**

- Background: `transparent`
- Text: `#121212`
- Border: 1px solid `#121212`
- Border Radius: **0px**
- Padding: 16px 32px
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 1px

**ボタンの考え方**:
- **radius 0px が鉄則**。pill でも角丸でもなく、完全な直角。HUMAN MADE のグラフィック・アイデンティティ
- font-weight は **400**（CTA テキストも太くしない — ブランド全体の統一）
- パディングは **16px 32px** で横にゆったり。存在感を出しつつ、テキストの繊細さを保つ
- letter-spacing **1px** で CTA テキストにトラッキング感を付与

### Inputs

- Font Family: avenir-next-lt-pro, sans-serif, ...
- Font Size: 14-16px
- Font Weight: 400
- Letter Spacing: 0.98-1px
- Shopify テーマのデフォルトスタイルに準拠

### Cards（プロダクトカード）

- Background: `#ffffff`（一部 `#999999` グレー背景）
- Border Radius: 0px（フラット）
- Shadow: なし
- 商品画像 + 商品名（14px / 400）+ 価格（11px / 400 / ls 0.6px）の構成
- セール価格は `#ed1c24` の赤で表示

### Carousel Indicators

- Active: `#ffffff`（不透明白）
- Inactive: `rgba(255,255,255,0.55)`（半透明白）
- Shape: 50% radius（円形ドット）

### Section Backgrounds

- Default: `#ffffff`（白背景が基本）
- Dark: `#121212`（チャコール）
- Product cards: 一部 `#999999`（グレー）

---

## 5. Layout Principles

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 微調整余白 |
| S | 8px | カード内部余白 |
| M | 16px | CTA 縦 padding / セクション内余白 |
| L | 24px | セクション間余白 |
| XL | 32px | CTA 横 padding / 大きな余白 |
| XXL | 48px | ページセクション間 |

### Container

- **Max Width**: 1300px（`--base-size: 1300`）
- **Gutter**: 1.6rem（`--bs-gutter-x: 1.6rem` = 25.6px）

### Grid

- Bootstrap ベースのグリッドシステム
- 商品一覧は 2〜4 カラムグリッド
- Gutter: 1.6rem（25.6px）

---

## 6. Depth & Elevation

HUMAN MADE はシャドウを使わないフラットデザイン。色面（白 / チャコール / グレー）のコントラストで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての標準要素 |
| 1 | background `#ffffff` | 通常コンテンツ面 |
| 2 | background `#121212` | CTA・フッター・ダークセクション |
| 3 | background `#999999` | プロダクトカード背景（一部） |

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文フォントは **Avenir Next LT Pro**（または代替の Nunito Sans）を先頭に配置する
- font-weight は原則 **400 のみ** を使う（唯一の例外は footer 微小要素の 600）
- CTA は **radius 0px の完全な直角** にする
- CTA のパディングは **16px 32px** でゆったり取る
- テキストカラーは **#121212**（チャコール）を使う — 純黒を避ける
- letter-spacing は **0.6px** をベースに、ナビ・CTA では **0.8〜1px** に広げる
- ブランドアクセントには **#ea2222**（Heart Red）を使う
- セール価格には **#ed1c24** を使う
- プロダクトの多彩な色（ネイビー、イエロー、ピンク等）を写真で活かす
- 本文パラグラフの行間は **1.5〜1.6** に設定する

### Don't（禁止）

- CTA に border-radius を付けない（0px が HUMAN MADE のアイデンティティ）
- pill ボタン（radius 9999px）を使わない
- font-weight 700 や bold を見出し・CTA に使わない（400 統一が原則）
- 純黒 `#000000` をテキストに使わない（`#121212` がブランドのトーン）
- `letter-spacing: 0`（normal）にしない — すべてのテキストに字間が設定されている
- UI 要素にプロダクトカラー（#ffd83b, #f9aae7 等）を使わない — これらは商品の色であり UI の色ではない
- `palt` をグローバル適用しない — 欧文フォント主体のため和文の字詰めは不要
- box-shadow を使わない（フラットデザインを維持）
- テキストに装飾（underline, italic）を多用しない — ミニマルで均一な印象を保つ

---

## 8. Responsive Behavior

### Breakpoints（Bootstrap ベース）

| Name | Width | 説明 |
|------|-------|------|
| Mobile (sm) | ≤ 576px | モバイルレイアウト |
| Tablet (md) | ≤ 768px | タブレットレイアウト |
| Desktop (lg) | ≤ 1200px | 標準デスクトップ |
| Wide (xl) | ≤ 1440px | ワイドデスクトップ |
| Ultra (xxl) | ≤ 1920px | 超ワイドスクリーン |

### モバイル時の調整

- h4（24px）→ 18-20px 程度に縮小
- 商品グリッドは 1〜2 カラムに折り返す
- ナビゲーションはハンバーガー化
- CTA の radius 0px と letter-spacing は維持（ブランドアイデンティティ）

### タッチターゲット

- CTA ボタンは padding 16px 32px で十分なタップ領域を確保
- ナビ項目は 14-16px のため、モバイル時はタップ領域の拡張が必要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: HUMAN MADE（ヒューマンメイド）
Origin: NIGO(R) によるストリートウェア／ライフスタイルブランド
Charcoal: #121212
Heart Red: #ea2222 (brand accent)
Sale Red: #ed1c24
Text Primary: #121212
Text Muted: rgba(18,18,18,0.85)
Text Footer: rgba(18,18,18,0.75)
Background: #ffffff
Font: avenir-next-lt-pro, sans-serif, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Sans", sans-serif
Google Fonts Alt: "Nunito Sans", sans-serif（Avenir Next LT Pro の代替）
palt: 適用しない（欧文フォント主体）
Body: 16px / 400 / line-height 1.0 / letter-spacing 0.6px
Body Paragraph: 16px / 400 / line-height 1.6 / letter-spacing 0.8px
Heading 2: 20px / 400 / line-height 1.2 / letter-spacing 0.6px
Heading 4: 24px / 400 / line-height 1.3 / letter-spacing 0.6px
CTA Style: filled (bg #121212, text #fff, radius 0px, padding 16px 32px)
Ghost CTA: outline (bg transparent, text #121212, border 1px solid #121212, radius 0px)
CTA Font: 13px / 400 / letter-spacing 1px
Shadow: 使用しない
Grid: Bootstrap (max-width 1300px, gutter 1.6rem)
```

### プロンプト例

```
HUMAN MADE（ヒューマンメイド）のデザインシステムに従って、新商品一覧ページを作成してください。
- フォントは avenir-next-lt-pro（または代替 "Nunito Sans"）を先頭に、游ゴシック体をフォールバック
- font-weight は 400 のみ（太字は使わない）
- 見出しは 20-24px / 400 / line-height 1.2-1.3 / letter-spacing 0.6px / color #121212
- 本文は 16px / 400 / line-height 1.5-1.6 / letter-spacing 0.8px / color #121212
- 価格は 11px / 400 / letter-spacing 0.6px。セール価格は #ed1c24
- CTA「カートに入れる」は bg #121212, text #fff, radius 0px, padding 16px 32px
- アウトラインCTA「もっと見る」は bg transparent, border 1px solid #121212, radius 0px
- 背景は白 #ffffff。ダークセクションは #121212
- grid は max-width 1300px, gutter 1.6rem
- シャドウは一切使わない
```

### 字詰め・組版の重要ポイント

1. **欧文優先の font-family**: Avenir Next LT Pro を先頭に配置し、和文は游ゴシック体にフォールバック。欧文のジオメトリックなクリーンさがブランドの基調
2. **weight 400 の完全統一**: 見出し・本文・CTA・ナビすべてが同一ウェイト。サイズと letter-spacing の差だけで階層を作るのが HUMAN MADE の設計思想
3. **letter-spacing 0.6px がベースライン**: 全テキストに最低 0.6px の字間を設定。CTA・ナビでは 0.8〜1px に広げてトラッキング感を出す
4. **radius 0px の直角CTA**: pill でも角丸でもない完全な直角。ストリートカルチャーのグラフィック的な力強さを表現する HUMAN MADE のアイデンティティ
5. **#121212 チャコール**: 純黒（#000000）ではない。RGB (18, 18, 18) のわずかにソフトなブラックが、ポップな商品写真と調和する
6. **Heart Red #ea2222**: NIGO(R) のハートモチーフに由来するブランドアクセント。UI のアクセントというよりブランドシンボルの色

---

**取得日**: 2026-05-10
**出典**: https://humanmade.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
