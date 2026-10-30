# DESIGN.md — THE（ザ）

> THE / THE SHOP ONLINE（https://the-web.co.jp/）のデザイン仕様書。
> 中川政七商店グループが運営する「THE」のデザインプロダクト EC。
> 実サイトの computed style 実測（2026-06-23 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白地（`#ffffff`）を基調にした**モノクローム・エディトリアル**。中央寄せのセリフ（明朝体）ワードマーク、たっぷりの余白、プロダクトを主役にした静謐なレイアウト。ギャラリー／雑誌のような佇まい
- **密度**: 本文の line-height は 1.8 と広め。見出しはウェイトに頼らず**サイズ差**で階層を作る（全要素 weight 400 ＝レギュラー基調）
- **キーワード**: ミニマル、モノクローム、明朝体エディトリアル、静謐、プロダクト主役
- **特徴**:
  - 和文に Web フォント **Noto Serif JP（明朝体）** を採用。見出し・本文ともに明朝で組み、上品で端正な印象を作る
  - 約物（半角カナ・約物）は **YakuHanJP** が担当し、句読点・括弧のアキを詰めて緊張感のある組版にする
  - **ラテン文字・数字は Roboto**（サンセリフ）。和文＝明朝 × 欧文／数字＝サンセリフのエディトリアルなコントラストが識別点
  - フォント指定の **OS フォールバックはゴシック**（ヒラギノ角ゴ、游ゴシック、メイリオ）だが、Noto Serif JP がロード済み Web フォントのため、和文は実際には**明朝でレンダリングされる**
  - ボタン・枠線はすべて**直角（radius 0px）のハードエッジ + ヘアライン**。ピル／角丸を使わないのが identity
  - 配色はモノクロームを基本とし、**唯一の暖色アクセント＝ゴールド／ブラウン `#a26b25`**（カート／ドロワーのアクションボタン）と、**アラート用の朱赤 `#ff4f33`**（通知ドット）のみを差し色に使う
  - ページ最下部に**黒のアナウンスバー**を固定表示
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Accent

- **Accent Gold / Brown** (`#a26b25`): 唯一の暖色アクセント。カート（ドロワー）アクションボタンに使用
- **Accent Alert Vermilion** (`#ff4f33`): カート通知の小さなドット（アラート）専用

### CTA / Buttons

- **Primary Button**: 背景 `#1c1d1d` / 文字 `#ffffff` / radius `0px`（直角）/ border none
- **Checkout / Secondary Button**: 背景 `#333333` / 文字 `#ffffff` / radius `0px` / padding `17px`
- **Cart / Drawer Action**: 背景 `#a26b25`（ゴールド）/ 文字 `#ffffff` / radius `0px`
- **Outline / Ghost**: 背景 `transparent` / 文字 `#1c1d1d` / border `1px solid #1c1d1d` / radius `0px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#1c1d1d` | (28, 29, 29) | 本文・見出し・リンク・枠線・セール価格／タグ |
| Header Text | `#222222` | (34, 34, 34) | ヘッダーのテキスト |
| Text Secondary | `#999999` | (153, 153, 153) | 補足テキスト・サブ情報 |
| Footer Dark | `#111111` | (17, 17, 17) | フッターの暗色面 |
| Surface Dim | `#f2f2f2` | (242, 242, 242) | 薄いサーフェス・区切り面 |
| Image Dim | `#e6e6e6` | (230, 230, 230) | 画像プレースホルダー・入力欄の地 |
| Image BG (small) | `#eeeeee` | (238, 238, 238) | 小さな画像の地色 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード・ヘッダー |
| Announcement Bar | `#000000` | (0, 0, 0) | 最下部固定アナウンスバー背景 |

### Semantic（推奨値）

実サイトには明確な成功色の表面化は確認されなかった。EC として推奨する補完値:

- **Danger / Alert**: `#ff4f33`（実サイトのアラート朱赤を流用）
- **Success**: `#2e7d32`（一般的なグリーン。モノクロームに馴染む沈んだ色味）

### Header / Overlay

- **Header BG**: `#ffffff`（不透明白）
- **Position**: `fixed` / `top: 0`（中央寄せワードマーク）
- **Announcement Bar**: `#000000` 背景 / 白文字 / `fixed` / `bottom: 0`

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（メイン）**: **Noto Serif JP**（Google Fonts / Web フォント）— 見出し・本文ともに使用
- **約物**: **YakuHanJP**（半角約物）— 句読点・括弧のアキ詰め
- **ゴシック体**: フォールバックとしてのみ存在（ヒラギノ角ゴ → 游ゴシック → メイリオ）。Web フォントがロードされれば明朝で表示されるため、実際には使われない

### 3.2 欧文フォント

- **サンセリフ（ラテン・数字）**: **Roboto**（Google Fonts / Web フォント）
- 和文＝明朝 × 欧文・数字＝サンセリフ（Roboto）の対比がエディトリアルな質感を生む

### 3.3 font-family 指定

```css
/* 和文 見出し・本文（明朝） */
font-family: YakuHanJP, "Noto Serif JP", -apple-system, "system-ui",
  "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", 游ゴシック, YuGothic, メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", sans-serif;

/* ラテン文字・数字（Roboto / サンセリフ） */
font-family: Roboto, -apple-system, "Noto Sans JP", "Segoe UI",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", 游ゴシック, YuGothic,
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- 和文チェーンの先頭は YakuHanJP（約物のみカバー）→ Noto Serif JP（明朝の本体）。Web フォントがロードされれば**和文は明朝**でレンダリングされる
- ただし末尾の OS フォールバックは**ゴシック**（ヒラギノ角ゴ、游ゴシック、メイリオ）になっている。Noto Serif JP が読み込めない環境ではゴシックに落ちる点に注意
- ラテン文字・数字は **Roboto** が担当。明朝の和文と Roboto のラテンが混植され、エディトリアルなコントラストを作る

> **代替フォント注記は不要**: Noto Serif JP も Roboto も Google Fonts で配信されているため、preview.html では**実フォントをそのまま読み込める**。
> `https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap`

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ／商品ページ、2026-06-23 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display Heading | Noto Serif JP | 40px | 400 | 1.2 (48px) | 0.025em | `#1c1d1d` | 大見出し（h3 相当） |
| Lead Paragraph | Noto Serif JP | 20px | 400 | 1.8 (36px) | 0.025em | `#1c1d1d` | リード文・導入 |
| Body / Nav / Link | Noto Serif JP stack | 14px | 400 | 1.0〜1.8 | 0.025em | `#1c1d1d` / ヘッダー `#222222` | 標準本文・ナビ・リンク |
| Latin Caption | Roboto | 16px | 400 | 1.3 (20.8px) | 0.1em (1.6px) | `#1c1d1d` | ラテン見出し・キャプション |
| Small / Footer | Roboto | 10px | 400 | 1.0〜1.4 | 0.1em | `#999999` / `#1c1d1d` | 注記・フッター |

**ウェイトの原則**: 実測上、**ほぼ全要素が weight 400（レギュラー）**。見出しはサイズ差で階層を作り、太字（700）を多用しない。重みを抑えたセリフ設計が identity なので、勝手に bold を発明しない。

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **リード文 (20px)**: `1.8`（36px）
- **本文 (14px)**: `1.0〜1.8`（用途で変動。読み物は 1.8、ナビ・1行ラベルは 1.0〜1.3）
- **大見出し (40px)**: `1.2`（48px。明朝の大見出しを締める）
- **ラテンキャプション (16px)**: `1.3`（20.8px）

**字間 (letter-spacing)** — 実測:
- **和文（見出し・本文）**: `0.35px`（14px 上で `0.025em`）。明朝に控えめなトラッキングを与えて端正に
- **ラテンキャプション**: `1.6px`（16px 上で `0.1em`）。Roboto の英字を大きく開いてエディトリアルに
- **小／フッター (10px)**: `0.1em`

**ガイドライン**:
- 和文（明朝）の line-height は読み物で `1.8` を確保する
- ラテン見出し（Roboto）は letter-spacing `0.1em` で字間を大きく開き、雑誌的な抜け感を出す
- 和文の letter-spacing は `0.025em` 程度に抑え、明朝の自然なリズムを壊さない

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
```

- ラテン見出し・1行ラベルは `white-space: nowrap` で改行させない
- 価格・タグは `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* 約物の詰めは YakuHanJP が担当 */
font-family: YakuHanJP, "Noto Serif JP", ...;
font-feature-settings: normal;
```

- 句読点・括弧のアキ詰めは **`palt` ではなく YakuHanJP（半角約物フォント）**で実現している
- そのため `font-feature-settings: "palt" 1` は使わない方針。`normal` のまま YakuHanJP に委ねる

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary Button** — "カートに入れる" 等
- Background: `#1c1d1d`
- Text: `#ffffff`
- Padding: `17px`
- Border Radius: `0px`（直角）
- Font: 和文 stack, 14px, weight 400
- Border: none

**Checkout / Secondary Button**
- Background: `#333333`
- Text: `#ffffff`
- Padding: `17px`
- Border Radius: `0px`
- Font: 和文 stack, 14px, weight 400

**Cart / Drawer Action（ゴールドアクセント）**
- Background: `#a26b25`
- Text: `#ffffff`
- Padding: `17px`
- Border Radius: `0px`
- Font: 和文 stack, 14px, weight 400

**Outline / Ghost Button**
- Background: `transparent`
- Text: `#1c1d1d`
- Border: `1px solid #1c1d1d`
- Padding: `16px`（border 分を考慮）
- Border Radius: `0px`
- Font: 和文 stack, 14px, weight 400

### Inputs

**Text Input**
- Background: `#ffffff`（または地色 `#e6e6e6`）
- Border: `1px solid #1c1d1d`（ヘアライン）
- Border Radius: `0px`（直角）
- Padding: `12px`
- Font: 和文 stack, 14px, weight 400

**Focus 状態**
- Border: `1px solid #1c1d1d`（維持）+ `box-shadow: 0 0 0 2px rgba(28,29,29,0.15)`（推奨）

### Cards / Surfaces

**Product Card**
- Background: `#ffffff`
- Border: none（影なし）
- Border Radius: `0px`（画像も直角）
- 画像プレースホルダー地色: `#eeeeee` / `#e6e6e6`
- 区切り・タイトル間は余白で表現

**Dim Surface**
- Background: `#f2f2f2`
- Border Radius: `0px`

### Header

- Background: `#ffffff`（不透明白）
- Border: 下端にヘアライン（`1px solid #e6e6e6` 推奨）
- Position: `fixed` / `top: 0`
- ワードマークは中央寄せのセリフ

### Announcement Bar（最下部固定）

- Background: `#000000`
- Text: `#ffffff`
- Position: `fixed` / `bottom: 0`
- Font: 14px, weight 400

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン間、タグ内側余白 |
| S | 8px | カード内テキスト間 |
| M | 16px | カード内要素間、ナビリンク間 |
| L | 24px | カードの内側余白、セクション内余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80〜96px | ヒーロー上下の大きなゆとり |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`
- 中央寄せ・たっぷりの余白で**プロダクトを主役**にする

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | **全要素（ボタン・入力・カード・画像）** ハードエッジが identity |

> THE では radius を一切使わない。ピル・角丸は使用しない。

### Grid

- Columns: 推奨 12 カラム（実装は Flexbox / CSS Grid）
- Gutter: 16〜24px
- プロダクトカード: 4列（desktop）→ 2列（tablet）→ 2列／1列（mobile）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード、ボタン、画像（基本フラット） |
| 1 | `0 1px 0 #e6e6e6`（ヘアライン） | ヘッダー下端・区切り |
| 2 | `0 8px 24px rgba(0,0,0,0.08)` | ドロワー・ポップオーバー（推奨） |
| 3 | `0 16px 48px rgba(0,0,0,0.12)` | モーダル（推奨） |

- 実測ではカード・ボタンの shadow はほぼ `none`。**非常にフラット**
- 立体感・分離は **余白とヘアライン（`#e6e6e6`）** で表現する
- ドロップシャドウに頼らず、白地と直角の構成で静謐さを保つ

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **Noto Serif JP（明朝）** + **YakuHanJP（約物）** で組む。読み物の line-height は **1.8**
- ラテン文字・数字は **Roboto** を使い、明朝の和文と混植する
- ラテン見出し・キャプションは **letter-spacing 0.1em** で字間を開き、エディトリアルな抜け感を出す
- ボタン・入力・カード・画像はすべて **radius 0px（直角）** にする
- 配色は **モノクローム**（`#1c1d1d` / `#ffffff` / `#999999` / `#f2f2f2`）を基本にする
- 暖色アクセントは **ゴールド `#a26b25`** をカート系アクションに限定して使う
- アラート（通知ドット）は **朱赤 `#ff4f33`** のみに使う
- 階層は**サイズ差**で作る（weight 400 を基調に、太字を多用しない）
- 余白とヘアラインで分離する（shadow は基本 `none`）

### Don't（禁止）

- ボタン・カードに **角丸／ピル（radius ≥ 4px）を使わない**。直角がブランドの identity
- 和文に **ゴシックを意図的に指定しない**（フォールバック以外）。明朝の佇まいを保つ
- 約物詰めに **`font-feature-settings: "palt" 1` を使わない**（YakuHanJP が担当）
- 見出しに**安易な bold（700）を発明しない**。サイズで階層を作る
- **カラフルな差し色を増やさない**。暖色は `#a26b25`、アラートは `#ff4f33` のみ
- 立体感のために**強いドロップシャドウを多用しない**（フラットと余白で見せる）
- **純黒 `#000000`** を本文に使わない（Text Primary は `#1c1d1d`。`#000000` はアナウンスバー背景専用）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。2列／1列グリッド、ナビ折りたたみ |
| Tablet | 768px〜1023px | タブレット。2列グリッド |
| Desktop | ≥ 1024px | デスクトップ。4列グリッド |

### モバイル時の調整

- Display Heading: 40px → 28〜32px
- Lead Paragraph: 20px → 16〜18px
- 本文 14px・line-height 1.8 は維持
- プロダクトカード: 4列 → 2列 → 1列
- 最下部アナウンスバーは固定のまま（本文に下部 padding を確保）

### タッチターゲット

- Primary Button: 高さ 48px 以上（padding 17px + 14px font）
- 直角のままタップ領域を確保する

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary / Border / Link: #1c1d1d
Header Text: #222222
Text Secondary: #999999
Footer Dark: #111111
Surface Dim: #f2f2f2
Image Dim: #e6e6e6 / #eeeeee
Background: #ffffff
Announcement Bar: #000000
Accent Gold (cart action): #a26b25
Accent Alert (dot): #ff4f33
Checkout Button BG: #333333

JP Font (明朝): YakuHanJP, "Noto Serif JP", -apple-system, "system-ui",
  "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", 游ゴシック, YuGothic, メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", sans-serif
Latin/Number Font: Roboto, -apple-system, "Noto Sans JP", "Segoe UI", ...
（注: OS フォールバックはゴシックだが、Noto Serif JP がロードされ和文は明朝で表示）

Display Heading: 40px / weight 400 / line-height 1.2 / letter-spacing 0.025em / #1c1d1d
Lead Paragraph: 20px / weight 400 / line-height 1.8 / letter-spacing 0.025em / #1c1d1d
Body / Nav / Link: 14px / weight 400 / line-height 1.0〜1.8 / letter-spacing 0.025em / #1c1d1d
Latin Caption: Roboto 16px / weight 400 / line-height 1.3 / letter-spacing 0.1em
Small / Footer: Roboto 10px / weight 400 / #999999

Border Radius: 0px（全要素・直角）
Primary Button: bg #1c1d1d / white / radius 0px / padding 17px / no border
Checkout Button: bg #333333 / white / radius 0px
Cart Action: bg #a26b25（ゴールド）/ white / radius 0px
Outline: transparent / #1c1d1d text / 1px solid #1c1d1d / radius 0px
Shadow: 基本 none（分離は余白とヘアライン #e6e6e6）
font-feature-settings: normal（palt 非使用。約物は YakuHanJP）
全要素 weight 400 基調（太字を多用しない）
```

### プロンプト例

```
THE（the-web.co.jp）のデザインシステムに従って、デザインプロダクトの EC 商品一覧と商品詳細を作成してください。
- 和文フォント: YakuHanJP, "Noto Serif JP"（明朝）, ... 末尾 sans-serif フォールバック
- ラテン・数字フォント: Roboto
- 配色: モノクローム（背景 #ffffff / テキスト #1c1d1d / 補足 #999999 / 薄面 #f2f2f2）
- 大見出し: 40px / weight 400 / line-height 1.2 / letter-spacing 0.025em / #1c1d1d
- リード文: 20px / weight 400 / line-height 1.8 / #1c1d1d
- 本文: 14px / weight 400 / line-height 1.8 / letter-spacing 0.025em / #1c1d1d
- ラテンキャプション: Roboto 16px / letter-spacing 0.1em
- ボタンはすべて radius 0px（直角）。Primary は bg #1c1d1d / 白文字 / padding 17px / border none
- チェックアウトボタンは bg #333333、カート系アクションのみゴールド #a26b25
- アウトライン: transparent / 文字・枠 #1c1d1d / 1px solid / radius 0px
- カート通知ドットのアラートは朱赤 #ff4f33 のみ
- box-shadow は基本 none。分離は余白とヘアライン（#e6e6e6）で表現
- 角丸・ピルは使わない（直角が identity）
- 見出しに bold を多用しない（サイズで階層を作る。全要素 weight 400 基調）
- 純黒 #000000 は最下部アナウンスバー背景のみ。本文は #1c1d1d
- font-feature-settings は normal（palt 非使用。約物詰めは YakuHanJP）
```
