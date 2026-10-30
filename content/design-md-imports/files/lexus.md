# DESIGN.md — LEXUS

> LEXUS（https://lexus.jp/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 高級車ブランドとしての洗練と静謐。装飾を最小限にし、写真・タイポグラフィ・余白で価値を語るギャラリー型サイト
- **密度**: ゆったりとした大きな余白。ヒーローは大判画像を全幅で見せ、テキストは中央に小さく配置
- **キーワード**: ラグジュアリー、ミニマル、無装飾、上質、静謐、フォトジェニック
- **特徴**: 角丸を排した直線基調（border-radius: 0 が原則）。CTA ボタンは黒地白文字のフラット矩形。プロポーショナル字詰め `palt` を全面に適用し、和欧混植時の字詰め密度を統一している

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

LEXUS はブランドカラーを抑制し、**白背景に黒テキスト** + **黒の CTA** で統一。彩度のあるカラーは写真側に委ね、UI 自体は完全モノトーンで構築する。

- **Black** (`#000000`): ブランドベース。テキスト、CTA 背景、アイコン
- **White** (`#ffffff`): ページ背景、CTA テキスト、ヘッダー背景

### Neutral

- **Text Primary** (`#000000`): 本文・見出し（純黒を採用。プレミアム感を演出）
- **Text Subdued** (`#646464`): パンくず、補足テキスト
- **Surface** (`#ffffff`): ページ・ヘッダー・フッター背景
- **Divider** (`#e3e3e3`): セクション区切り線・薄いボーダー
- **Disabled / Placeholder** (`#999999`): 無効状態
- **Section BG** (`#f2f2f2`): 「購入検討サポート」等の薄グレーセクション背景

### Accent

- 自動車ブランドとしてのアクセントカラーは原則使用しない。配色は写真・映像で表現し、UI からは取り除く

---

## 3. Typography Rules

### 3.1 和文フォント

LEXUS は **モリサワ「リュウミン Lexus Rodin」** をブランド和文書体として使用（ライセンス契約品）。

- **Lexus Rodin**: ブランド和文ゴシック（モリサワ Rodin の LEXUS カスタマイズ版）
- **メイリオ / Meiryo**: Windows フォールバック
- **sans-serif**: 最終フォールバック

CSS Custom Properties の宣言:

```css
--font-book: Nobel-Book, LexusRodinPro-M, Meiryo, sans-serif;
--font-regular: Nobel-Regular, LexusRodinPro-DB, Meiryo, sans-serif;
--font-bold: Nobel-Bold, LexusRodinPro-B, Meiryo, sans-serif;
--font-lexus: "Lexus Rodin", Meiryo, sans-serif;
--font-mix: Nobel, "Lexus Rodin", Meiryo, sans-serif;
```

### 3.2 欧文フォント

- **Nobel**: ブランド欧文書体（LEXUS が長年採用しているジオメトリック・サンセリフ。Tobias Frere-Jones による Nobel リバイバル）
- ウェイト構成: **Nobel-Book**（軽め本文）/ **Nobel-Regular**（標準）/ **Nobel-Bold**（強調）

### 3.3 font-family 指定

```css
/* 標準（本文・ナビ・ボタン） */
font-family: Nobel, "Lexus Rodin", メイリオ, sans-serif;

/* 見出し（ブランド英文字優先） */
font-family: Nobel, "Lexus Rodin", Meiryo, sans-serif;

/* 和文単独で扱う本文 */
font-family: "Lexus Rodin", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 欧文 (Nobel) を先頭に置き、半角英数を必ずブランド書体で表示する
- 和文は Lexus Rodin → メイリオ の順
- 検索フォーム等の入力欄のみ `メイリオ, "ヒラギノ角ゴ Pro W3", sans-serif` と和文優先（IME 入力との親和性）

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Page Title (h1) | 50px | 500 | 1.5 (75px) | normal | モデル一覧ページタイトル |
| Hero Headline (h3 large) | 74px | 400 | 1.0 (74px) | normal | World Premiere 等の大見出し |
| Section Heading (h2) | 44px | 500 | 1.0 (44px) | normal | "BEV（電気自動車）" 等 |
| Section Title (h3) | 35px | 400 | 1.75 (61px) | normal | "モデル一覧" |
| Subsection Title (h3) | 31px | 400 | 1.75 (54px) | normal | "購入検討サポート" "LEXUSを知る" |
| Card Title (h3 small) | 21px | 500 | 1.6 (33.6px) | 0.075em (1.575px) | カード見出し（字間広め） |
| Card Lead (h4) | 21px | 500 | 1.75 (36px) | normal | "ピックアップ" "LEXUS NEWS" |
| Card Description (h4) | 16px | 500 | 1.7 (28px) | normal | "新型「TZ」詳細を世界初公開..." |
| Body | 16px | 400 | 1.6 (25.6px) | normal | 本文・ナビゲーション |
| Caption | 14.4px | 500 | 1.6 (23.04px) | normal | リンク、補足、CTA テキスト |
| Small | 12.3px | 500 | 1.6 (19.7px) | normal | 価格、メガメニュー説明 |
| Footer Lead | 14.4px | 600 | 1.6 (23.04px) | normal | フッター見出し |
| Breadcrumb | 10.3px | 400 | 1.0 | normal | パンくず（極小） |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.6`（25.6px / 16px）。ラグジュアリー領域では 1.6 程度の控えめな行間が定番
- **見出しの行間**: `line-height: 1.0` を Hero / Section Heading で採用。強い余白で見出しを孤立させて格を高める
- **本文の字間**: `letter-spacing: normal`。`palt` で字詰め最適化を行う
- **見出しの字間（カードタイトル）**: `0.075em`（1.575px）。サブ見出しレベルで字間を開け、ラグジュアリー感を出す

### 3.6 OpenType 機能

```css
font-feature-settings: "palt";
```

- **palt**: ほぼ全テキスト要素に適用（body, h1〜h5, p, a, button, span, li, nav, header）
- 入力欄のみ `font-feature-settings: "palt"` のまま、ヘッダーやフッターも一律適用
- 純粋な数値表示（価格・年式）にも `palt` がかかるため、半角数字の字詰めも一貫している

---

## 4. Component Stylings

### Buttons

**Primary CTA**（"見積りシミュレーション" "モデルを選んで比較"）

- Background: `#000000`
- Text: `#ffffff`
- Font: `Nobel, "Lexus Rodin", メイリオ, sans-serif`
- Font Size: 14.4px
- Font Weight: 500
- Line Height: 23.04px (1.6)
- Padding: 8.22857px（全方向。約 8px。極めてタイトな padding が特徴）
- Border Radius: **0px**（角丸なし。直線基調）
- Border: none
- Box Shadow: none
- Letter Spacing: normal
- Font Feature: `"palt"`

**Card-style CTA**（"販売店検索" "試乗予約" "認定中古車 CPO" 等）

- Background: `#ffffff`
- Text: `#000000`
- Font Size: 16px
- Font Weight: 400
- Line Height: 28px (1.75)
- Border Radius: 8.22857px（カード型のみ角丸あり）
- Border: none（薄い影で浮かせる、または薄ボーダー）
- アイコン + ラベル + 矢印の3点構成

**Tertiary（テキストリンク）**

- Color: `#000000`
- Font Size: 14.4px〜16.4px
- Font Weight: 500
- Underline: なし（ホバー時のみ表示する設計が多い）

### Inputs

- Font Family: `メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif`（IME 親和性のため和文優先）
- Font Size: 15.4px
- Font Weight: 400
- Line Height: 1.6 (24.7px)
- Padding: 10.3px
- Border Radius: 0px
- Border: 薄い `#e3e3e3` ベースのボトムライン or フルボーダー
- Background: `#ffffff`

### Cards

- Background: `#ffffff`
- Border Radius: 0px（モデルカード）/ 8.22857px（サポートメニュー）
- Padding: 0（画像はベタ）
- Shadow: なし or 微かなドロップシャドウ
- 画像優先のレイアウト。カード内テキストは小さく、白い余白で囲む

---

## 5. Layout Principles

### Container

- Max Width: **1400px**（CSS 変数 `--designMaxWidthCommon: 1400`, `--designMaxWidthNavigation: 1400`）
- 幅広で大判ヒーローを成立させる設計

### Spacing

| Token | Value | 用途 |
|-------|-------|------|
| Tight | 8.22857px | CTA padding |
| Small | 16px | カード内余白 |
| Medium | 25.7143px | h4 上余白 |
| Large | 41.1429px / 82.2857px | パンくず外側余白 |
| XL | 80px+ | セクション間余白 |

### Grid

- ヒーローは画面全幅 1 カラム
- モデル一覧は 2〜3 カラムグリッド（画像が主役）
- メガメニューは 4〜5 カラム

### z-index 設計

CSS Custom Properties で 10 段階に定義（`--z-lv-1` 〜 `--z-lv-10`、値は 1, 10, 100, 1000... と桁を上げていく）。逆方向に `--z-behindLv-1` 〜 `-10` も用意。

---

## 6. Depth & Elevation

LEXUS はシャドウを最小限に抑える。浮きを避け、面と線で構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。ほぼ全要素 |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カード型 CTA、フローティングメニュー |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル、ドロップダウン（控えめ） |

---

## 7. Do's and Don'ts

### Do（推奨）

- すべてのテキスト要素に `font-feature-settings: "palt"` を適用する（LEXUS の字詰め思想）
- ボタンは原則 `border-radius: 0` の矩形、CTA は黒地白文字
- 画像は大判・高画質・余白多め。トリミングは「余白を残す」設計
- 数字（価格、グレード、CC など）はブランド書体（Nobel）で表示する
- セクション見出しに `line-height: 1.0` を許容して、視覚的な余白で見出しを際立たせる
- カードタイトル（21px）は `letter-spacing: 0.075em` を入れて格調を出す

### Don't（禁止）

- 鮮やかな彩度の UI カラー（赤・緑・青など）を使わない。色は写真側に委ねる
- ボタンに大きな角丸（pill 型・border-radius 24px+）を使わない。LEXUS の硬質さが失われる
- 装飾的なグラデーションや影を多用しない
- フォントスタックから Lexus Rodin を抜かない（ブランド和欧混植が崩れる）
- 本文を `line-height: 2.0` 以上で組まない（読み物サイトではないため、開きすぎは LEXUS らしくない）
- 純白以外の背景色（クリーム、オフホワイト等）を多用しない。`#ffffff` 一択

---

## 8. Responsive Behavior

### Breakpoints

LEXUS は CSS Custom Properties に iPad サイズを定義しているため、ブレークポイントは iPad ベース。

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォンレイアウト |
| Tablet | 768〜1024px | iPad（`--size-ipad-short: 768px`, `--size-ipad-long: 1024px`） |
| iPad Pro | 834〜1112px | iPad Pro 10.5"（`--size-ipadPro10inch-short: 834px`, `--size-ipadPro10inch-long: 1112px`） |
| Desktop | > 1024px | デスクトップ（max-width 1400px で中央寄せ） |

### モバイル時の調整

- ヒーローはフルブリードのまま縮小
- グローバルナビはハンバーガーメニュー化
- フォントサイズは見出しを 60〜70% 程度に縮小（h2 44px → 28〜32px）

### イージング

CSS 変数で 8 種類 × 3 方向（in/out/inOut）= 24 個のイージングを定義。アニメーションは `--easeOut-quart` `--easeOut-expo` のような長い「キレ」のあるカーブを多用する。

```css
--easeOut-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
--easeOut-expo: cubic-bezier(0.19, 1, 0.22, 1);
--easeInOut-quint: cubic-bezier(0.86, 0, 0.07, 1);
```

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: LEXUS
Primary Color: #000000 (ブランド黒)
Background: #ffffff
Text: #000000
Subdued Text: #646464
Section BG: #f2f2f2
Divider: #e3e3e3
Font Family: Nobel, "Lexus Rodin", メイリオ, sans-serif
Body Size: 16px
Body Line Height: 1.6
font-feature-settings: "palt"
Border Radius: 0px (CTA) / 8.22857px (カード)
CTA: 黒地白文字、矩形、padding 8px、weight 500、size 14.4px
Container Max Width: 1400px
```

### プロンプト例

```
LEXUS のデザインシステムに従って、新型 BEV モデルの詳細ページを作成してください。
- フォント: Nobel, "Lexus Rodin", メイリオ, sans-serif
- すべてのテキストに font-feature-settings: "palt" を適用
- ヒーローは画面全幅の大判画像 + 中央に小さなヘッドライン (74px / weight 400 / line-height 1.0)
- CTA ボタンは black bg + white text + border-radius 0 + padding 8px の矩形
- 価格表示も Nobel で組み、(税込) は span 10.3px / weight 500 でぶら下げる
- ページ最大幅 1400px、白背景、彩度のある UI カラーは禁止
```

### 字詰め・組版の重要ポイント

1. **palt の徹底**: 数字・記号・かな・漢字すべてに `palt` を適用。和欧混植時の密度を均一にする
2. **letter-spacing は 0.075em を最大値**: カードタイトル（21px）程度で使用。本文には入れない
3. **line-height は 1.0 を許容**: ヒーロー・セクション見出しは詰めて、外側余白で開く
4. **border-radius 0 を基本**: CTA は 0、カード型サブメニューのみ 8.22857px
5. **数字は Nobel で**: 価格表示も含めてブランド書体で組み、Meiryo にフォールバックさせない

---

**取得日**: 2026-05-08
**出典**: https://lexus.jp/, https://lexus.jp/models/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
