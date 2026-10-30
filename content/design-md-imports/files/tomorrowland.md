# DESIGN.md — TOMORROWLAND（トゥモローランド）

> TOMORROWLAND 公式サイト（https://www.tomorrowland.co.jp/）のデザイン仕様書。
> 1978年創業のセレクトショップ / オリジナルブランド。GALERIE VIE、MACPHEE、DES PRES 等を擁するファッション企業。
> "Tomorrow is Beautiful." をブランドメッセージに掲げ、上質なライフスタイルを提案する。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: エディトリアル・ファッション誌のような大胆な余白と軽やかなタイポグラフィ。Cormorant Garamond のエレガントなセリフを超大型（72px）で配置し、ブランドの「美しい明日」を視覚化する
- **密度**: 情報密度は極めて低い。1スクリーン1メッセージの「マガジン型」レイアウト。ビジュアルとタイポグラフィの余白で世界観を語る
- **キーワード**: エレガント、ライトウェイト、エディトリアル、ナチュラルパレット、ファッション・モード
- **特徴**: **Cormorant Garamond（Google Fonts のハイコントラスト・セリフ）を display 書体として使用**し、本文は Noto Sans JP のウェイト 300（Light）で統一。**全体を通じて weight 300 が支配的**という、ファッションブランド特有の繊細な軽さが最大の特徴。CTA はアウトライン・角丸 5px のミニマルなボタンで、塗りボタンは使わない。色はモノクロ（純黒 `#000000` × 純白 `#ffffff`）を基調に、シーズナルなアクセントカラー（スカイブルー、テラコッタ、セージグリーン、ベージュ）を差し色として添える

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000`): テキスト・ボーダー・ロゴすべてに使う唯一の主要色。TOMORROWLAND は純黒をブランドカラーとして採用する珍しいアプローチ

### Seasonal Accent（シーズナル・アクセント）

季節やコレクションに合わせて入れ替わる、ミュートされた自然色のパレット:

- **Sky Blue** (`#a0c9e3`): 柔らかなスカイブルー。最も出現頻度が高いアクセント色（4要素で使用）
- **Terracotta** (`#e67f60`): 温かみのあるテラコッタ。秋冬のコレクションを想起させる
- **Sage Green** (`#a1b2a1`): 落ち着いたセージグリーン。ナチュラルで上品な印象
- **Warm Beige** (`#d9d4c3`): 温かいベージュ / ストーン。素材感を伝えるニュートラルトーン

> **Note**: これらのアクセント色は**シーズンごとに変わる可能性がある**。ブランドの恒常的なカラーは黒と白のみ。アクセント色はすべてミュート（彩度を抑えた）トーンで統一されており、原色は使わない。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出しの基本色。純黒をそのまま使用
- **Text Secondary**: 明示的な secondary 色は設定されていない。テキストは基本的にすべて `#000000`
- **Divider** (`#eaeaea`): ニュースページの区切り線
- **Muted** (`#cdcdcd`): ニュースページの補助要素
- **Background** (`#ffffff`): ページ背景。純白
- **Overlay** (`rgba(0, 0, 0, 0.5)`): モーダル・オーバーレイのバックドロップ

> **特徴**: TOMORROWLAND は **純黒 `#000000` と純白 `#ffffff` の最大コントラスト**を使う。多くのラグジュアリーブランドがダークグレー（`#333` 等）を好む中、あえて真のモノクロで潔い印象を作っている。

---

## 3. Typography Rules

### 3.1 和文フォント

**コーポレートサイト**:
- **Noto Serif JP**（Google Fonts、明朝体）: Cormorant Garamond と組み合わせる display 用。font-family のフォールバックとして指定
- **Noto Sans JP**（Google Fonts、ゴシック体）: 本文・UI テキスト。**ウェイト 300（Light）が標準**

**ニュース / EC ページ**:
- **ヒラギノ角ゴ Pro W3**（macOS 内蔵）: ニュースページの本文
- **Noto Sans JP**: フォールバック

### 3.2 欧文フォント

- **セリフ（display）**: **Cormorant Garamond**（Google Fonts）。ハイコントラストのエレガントなセリフ。ヒーロータイトル・セクションラベルに使用
- **サンセリフ（ニュース / EC）**: **Avenir**, **Lato**, Arial。ニュースページの欧文見出し
- サンセリフ（本文）: Noto Sans JP 内の欧文グリフをそのまま使用

### 3.3 font-family 指定

```css
/* コーポレートサイト — display（ヒーロー・セクションタイトル） */
font-family: "Cormorant Garamond", "Noto Serif JP", serif;

/* コーポレートサイト — 本文・UI */
font-family: "Noto Sans JP", sans-serif;

/* ニュース / EC ページ — 本文 */
font-family: "ヒラギノ角ゴPro W3", "Hiragino Kaku Gothic Pro", "Noto Sans JP", sans-serif;

/* ニュース / EC ページ — 欧文見出し */
font-family: Avenir, Lato, Arial, sans-serif;
```

**フォールバックの考え方**:
- コーポレートサイトは **Google Fonts（Cormorant Garamond + Noto Sans JP / Noto Serif JP）に依存**。システムフォントへのフォールバックは最小限
- ニュース / EC ページは **macOS のヒラギノを優先**し、Noto Sans JP でフォールバックする一般的な日本語ウェブ構成
- Cormorant Garamond はすべて **ウェイト 300** で使用。太字バリエーションは使わない

### 3.4 文字サイズ・ウェイト階層

#### コーポレートサイト

| Role | Font | Size | Weight | Line Height | 用途 |
|------|------|------|--------|-------------|------|
| Hero Title | Cormorant Garamond, Noto Serif JP | 72px | 300 | normal | メインビジュアルのタイトル |
| Section Label | Cormorant Garamond, Noto Serif JP | 46px | 300 | normal | コレクション名・セクション名 |
| Sub Heading | Cormorant Garamond, Noto Serif JP | 20.8px | 300 | normal | 小見出し・リンクラベル |
| Body | Noto Sans JP | 16px | 300 | normal | 本文テキスト |
| Info Label | Noto Sans JP | 12.8px | 300 | normal | 日付・カテゴリ等の補助情報 |
| Logo | Noto Sans JP | 16px | 300 | normal | サイトロゴ（テキストベース） |

#### ニュース / EC ページ

| Role | Font | Size | Weight | Line Height | 用途 |
|------|------|------|--------|-------------|------|
| Heading EN | Avenir, Lato, Arial | — | 400–500 | — | 欧文見出し |
| Body | ヒラギノ角ゴ Pro W3 | — | 400 | — | ニュース本文 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `normal`（ブラウザデフォルト、約 1.15–1.2）。明示的な line-height 指定はしていない
- **見出しの行間**: `normal`
- **letter-spacing**: `normal`（0）。明示的な字間指定なし
- **font-feature-settings**: 特に指定なし

> **特徴**: TOMORROWLAND は **line-height・letter-spacing ともにブラウザデフォルト（normal）のまま**で、明示的なチューニングを行わない。ウェイト 300 の細いストロークとデフォルトのメトリクスで、自然体の軽やかさを表現している。本文の可読性よりもビジュアルの空気感を優先する、ファッションブランドらしいアプローチ。

### 3.6 禁則処理・改行ルール

```css
/* 特別な指定は確認されていない。ブラウザデフォルトに依存 */
```

ヒーロータイトルやセクションラベルは大きな文字サイズ（46–72px）のため、改行が発生するケースは少ない。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

TOMORROWLAND は **palt / kern を使わない**。Cormorant Garamond のオリジナルのレターフォームと Noto Sans JP のデフォルトメトリクスをそのまま活かす。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — アウトラインのみ。塗り CTA は使わない

**Outline CTA（角丸 5px）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Border Radius: `5px`
- Font: Noto Sans JP
- Font Weight: `300`
- 例: 「TOMORROWLAND ONLINE STORE」

> **特徴**: TOMORROWLAND の CTA は**角丸 5px のわずかなラウンド**を持つ outline ボタン。BALMUDA の pill（60–100px）とは対照的に、直線的で控えめ。ボタン自体を目立たせず、テキストリンクの延長として機能させる設計。

**Text Link（デフォルト）**
- Color: `#000000`
- Text Decoration: 下線なし（ホバーで下線が出る構成が多い）
- Font Weight: `300`

> **Don't**: TOMORROWLAND に**塗りの CTA ボタン、カラーボタンは存在しない**。アクセント色はビジュアルやバナーの背景に使われ、ボタン色には使わない。

### Inputs

ニュース / EC ページでのフォーム:
- Background: `#ffffff`
- Border: `1px solid #cdcdcd`
- Border Radius: `0px`（角丸なし）
- Font Size: `14–16px`

### Cards

- Background: `#ffffff`
- Border: なし（区切り線 `#eaeaea` で分離する場合あり）
- Border Radius: `0px`
- Shadow: なし
- コーポレートサイトではカードコンポーネント自体が少なく、フルブリードの写真レイアウトが主体

### Navigation

- ヘッダーナビはテキストリンクベース
- ハンバーガーメニューまたはフルスクリーンメニュー（モバイル）
- ナビ文字: `#000000`、ウェイト 300

---

## 5. Layout Principles

### Spacing Scale

実測ベースのスペーシング（推定）:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコン余白、最小間隔 |
| S | 16px | テキスト間、ラベル下 |
| M | 24px | カード内パディング |
| L | 40px | セクション内小見出し間 |
| XL | 80px | セクション間 |
| XXL | 120px+ | ヒーローセクション上下の大余白 |

### Container

- コーポレートサイトはフルブリードが基本（ビジュアルが viewport 全幅を使用）
- テキストコンテンツは中央寄せ（max-width: 約 1000–1200px）
- ニュースページは一般的なコンテナ幅（約 960–1100px）

### Grid

- ヒーロー: 1 カラム（フルブリード・フルスクリーン写真）
- コレクション紹介: 1 カラムまたは 2 カラム
- ニュース一覧: リスト型（1 カラム、区切り線で区分）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。**シャドウはほぼ使わない** |
| 1 | `rgba(0, 0, 0, 0.5)` overlay | モーダル・オーバーレイのバックドロップのみ |

> **特徴**: TOMORROWLAND は**ドロップシャドウ・ボックスシャドウを一切使わない**フラットな設計。奥行きの表現は、純白の背景に対する黒テキストのコントラストと、アクセントカラーのバナーの面積差で行う。グレー階調による層の表現（BALMUDA 的な `#fbfbfb` / `#f8f8f8`）も使わず、**白と黒の 2 値**に近い潔さがある。

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントウェイトは **300（Light）を基本**にする。太字が必要な場面でも 400 まで
- display 書体（Cormorant Garamond）は **46px 以上の大きなサイズ**でのみ使用する
- CTA は **outline スタイル（border 1px solid #000、角丸 5px）** のみ使用する
- 余白を大きく取り、1 セクション 1 メッセージの構成にする
- アクセント色はミュートされたトーン（彩度を抑えた自然色）から選ぶ
- モノクロ（`#000000` × `#ffffff`）を基調とし、色数を最小限にする
- 写真・ビジュアルに語らせ、テキスト量を抑える

### Don't（禁止）

- **ウェイト 700（Bold）以上を使わない**（ブランドの軽やかさが崩れる）
- **塗りのカラー CTA を作らない**（アクセント色でボタンを塗らない）
- **Cormorant Garamond を 20px 以下の小さなサイズで使わない**（ハイコントラスト・セリフは小サイズで潰れる）
- letter-spacing / palt を追加しない（フォントの素のメトリクスで組む）
- ドロップシャドウ・グロウ・グラデーション等のエフェクトを使わない
- 原色・高彩度のアクセント色を使わない（すべてミュートトーンに抑える）
- **Cormorant Garamond を本文に使わない**（display 専用。本文は Noto Sans JP）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ハンバーガーメニュー |
| Tablet | ≤ 1024px | レイアウト調整 |
| Desktop | > 1024px | フルブリード写真 + 大型タイポグラフィ |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- outline ボタンは padding を含めてタップ領域を確保

### フォントサイズの調整

- モバイルでは Hero Title 72px → 36–42px 程度に縮小
- Section Label 46px → 24–28px 程度に縮小
- 本文 16px は据え置き
- ウェイト 300 は維持（モバイルでもライトウェイトの印象を保つ）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color:          #000000
Background:          #ffffff
Accent (Sky Blue):   #a0c9e3
Accent (Terracotta): #e67f60
Accent (Sage):       #a1b2a1
Accent (Beige):      #d9d4c3
Divider:             #eaeaea
Overlay:             rgba(0, 0, 0, 0.5)
Display Font:        "Cormorant Garamond", "Noto Serif JP", serif
Body Font:           "Noto Sans JP", sans-serif
Body Size:           16px
Font Weight:         300 (Light) — 全体を通じて
Line Height:         normal
Letter Spacing:      normal
CTA Style:           outline, border 1px solid #000, radius 5px
```

### プロンプト例

```
TOMORROWLAND のデザインシステムに従って、
コレクション紹介ページのヒーローセクションを作成してください。

- 背景: 純白 #ffffff にフルブリードの写真
- ヒーロータイトル: "Cormorant Garamond", "Noto Serif JP", serif / 72px / weight 300 / color #000000
- セクションラベル: 同上のフォントスタック / 46px / weight 300
- 本文: "Noto Sans JP", sans-serif / 16px / weight 300 / color #000000
- CTA: outline ボタン（border 1px solid #000、border-radius 5px、背景 transparent）
- 余白: セクション間 80–120px、テキスト間 16–24px
- シーズナル・アクセント色を使う場合はミュートトーン（#a0c9e3, #e67f60, #a1b2a1, #d9d4c3）から選択
- 塗りボタン・太字・ドロップシャドウは使わない
- font-weight は 300 を厳守、最大でも 400 まで
```
