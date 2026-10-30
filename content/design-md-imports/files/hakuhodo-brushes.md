# DESIGN.md — Hakuhodo Brushes（白鳳堂）

> 白鳳堂 公式オンラインショップ（https://www.hakuho-do.co.jp/）のデザイン仕様書。
> 1974年創業、広島県熊野町の化粧筆・書道筆メーカー。世界最高峰の筆づくりで知られ、プロのメイクアップアーティストから一般ユーザーまで幅広く支持される。
> Shopify ベースのECサイト。実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景に**漆黒 `#0f0f0f` / `#111111`** を基調とした**モノトーンの職人美学**。ヒーローは全面ダーク（`#0f0f0f`）に白文字を載せ、筆の美しい写真を大きく見せる構成。全体に**明朝体（MS PMincho / serif）** を一貫使用し、ゴシック体を使わない老舗工芸の格式
- **密度**: 商品写真を大胆に使うビジュアル主導のレイアウト。テキスト情報量は少なく、余白を広く取る。**視覚密度は高い（ヒーロー写真）が情報密度は低い**
- **キーワード**: 漆黒ヒーロー、純白背景、明朝体統一、ワイドレタースペーシング CTA、角丸ゼロ、職人の矜持、モノトーン
- **特徴**:
  - **フォントは明朝体（MS PMincho, serif）で統一**: 見出し・本文・CTA すべてが同一の明朝ファミリー。ゴシック体を使わない潔い選択
  - **CTA は直角矩形 + ワイドレタースペーシング**: `border-radius: 0px`、`letter-spacing: 0.3em`（3.9px / 13px）の広い字間が白鳳堂の象徴的な CTA スタイル
  - **ヒーローセクションは `#0f0f0f` のダーク面**: 大判の筆写真の上に白文字（40〜55px 明朝）で商品名・キャッチコピーを配置
  - **「おすすめ」バッジに青緑 `#5ba390`**: 唯一の有彩色アクセント。職人の厳選を示すバッジ
  - **アナウンスメントバーに朱色 `#fa4616`**: カートドット・セール表示に使うアクセント色
  - **body の letter-spacing は `0.025em`**（CSS変数 `--typeBaseSpacing`）— 明朝体の字間をわずかに開いて品格を出す
  - **body line-height は 1.6**（25.6 / 16）— 明朝本文の標準的な行間
  - **角丸はすべて 0px**（CSS変数 `--buttonRadius: 0px`）
  - ライトモード前提（ダーク切替なし）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値 + CSS Custom Properties。すべて hex 表記。
> 白鳳堂は**漆黒＋純白のモノトーン**を基調に、バッジ青緑とアナウンス朱色の2色だけを有彩色として使う。

### Brand

- **Brand Black** (`#111111`): 主要 CTA 背景色（`--colorBtnPrimary`）。ブランドの基調色（rgb(17, 17, 17)）
- **Brand Black Light** (`#2b2b2b`): ボタンホバー時の明度アップ（`--colorBtnPrimaryLight`）
- **Brand Black Dim** (`#040404`): ボタンプレス時の暗転（`--colorBtnPrimaryDim`）

### Accent

- **Badge Teal** (`#5ba390`): 「おすすめ」バッジの背景色（rgb(91, 163, 144)）。唯一の有彩色アクセント — 職人が厳選した商品を示す
- **Announcement Orange** (`#fa4616`): アナウンスメントバー背景・カートドット・セール価格テキスト（`--colorAnnouncement` / `--colorCartDot` / `--colorTextSavings`）

### Surface

- **Page Background** (`#ffffff`): ページ全体・ヘッダー・フッター・ナビ・ドロワーの純白（`--colorBody` / `--colorNav` / `--colorFooter` / `--colorDrawers`）
- **Hero / Large Image** (`#0f0f0f`): ヒーロースライドショーのダーク面（`--colorLargeImageBg`）
- **Surface Dim** (`#f2f2f2`): ドロワー・モーダルの薄いグレー背景（`--colorBodyDim` / `--colorDrawersDim`）
- **Modal Background** (`#e6e6e6`): モーダル背景（`--colorModalBg`）

### Text / Foreground

- **Text Body** (`#000000`): 本文・リンク・ナビ・フッター・ドロワーのテキスト（`--colorTextBody` / `--colorLink` / `--colorNavText` / `--colorFooterText`）
- **Text Price** (`#1c1d1d`): 商品価格・セールタグ（`--colorPrice` / `--colorSaleTag`）。純黒よりわずかに柔らかい
- **Text Inverse** (`#ffffff`): ダーク面（ヒーロー・CTAボタン・アナウンスバー）上の白文字（`--colorHeroText` / `--colorBtnPrimaryText` / `--colorAnnouncementText`）

### Border / Divider

- **Border Default** (`#e8e8e1`): 入力欄・CTA secondary・ドロワーの枠線（`--colorBorder` / `--colorDrawerBorder`）。微かにウォームなグレー
- **Image Overlay** (`#000000` opacity 0.1): 画像オーバーレイ・グリッドオーバーレイ（`--colorImageOverlay` / `--colorGridOverlay`）

### Semantic（補完）

- 実 UI に表面化したエラー・成功色は確認できない
- アラートを追加する場合はバッジ青緑 `#5ba390`（成功系）、アナウンス朱色 `#fa4616`（警告・エラー系）を流用するのが自然

---

## 3. Typography Rules

### 3.1 和文フォント

白鳳堂は**明朝体を全面的に使用**する。ゴシック体は一切使わない。

- **採用**: **ＭＳ Ｐ明朝** (`"ＭＳ Ｐ明朝", "MS PMincho"`)
- **フォールバック**: `serif, serif`（二重指定は Shopify テーマの仕様）
- **役割**: 見出し・本文・CTA・ナビ・フッタすべてを統一。職人の手仕事にふさわしい伝統的な書体選択

> Note: ＭＳ Ｐ明朝は Windows / macOS に標準搭載の明朝体。Web フォントは使用していない。preview.html では Google Fonts の **Shippori Mincho** を代替に使う。macOS 環境では **ヒラギノ明朝 ProN** が近い印象になる。

### 3.2 欧文フォント

- 欧文専用フォントは未使用。明朝ファミリーの欧文グリフ（MS PMincho 内包）で対応
- 例外: 言語切替 select が `arial` を使用（ブラウザデフォルト）

### 3.3 font-family 指定

実サイトの CSS Custom Properties:

```css
/* 全要素共通（--typeBasePrimary + --typeBaseFallback） */
font-family: "ＭＳ Ｐ明朝", "MS PMincho", serif, serif;
```

**フォールバックの考え方**:
- Windows: ＭＳ Ｐ明朝がそのまま適用
- macOS: MS PMincho が無い場合、`serif` フォールバックでヒラギノ明朝が適用される
- AI で再現する場合: `"Shippori Mincho", "Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", "MS PMincho", serif` に置換可

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ + 商品一覧ページ、2026-05-21 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Hero Title (h2) | **55px** | 400 | 55px (x1.0) | normal | `#ffffff` | "2026文月絵手紙セット" 等の最大見出し |
| Hero Title (h2) | **50px** | 400 | 50px (x1.0) | normal | `#ffffff` | "S100シリーズ 朱軸" |
| Hero Title (h2) | **45px** | 400 | 45px (x1.0) | normal | `#ffffff` | "一本を究める" |
| Hero Title (h2) | **40px** | 400 | 40px (x1.0) | normal | `#ffffff` | "ものづくり日本大賞" |
| Page Title (h1) | 38px | 400 | 38px (x1.0) | normal | `#000000` | 商品一覧ページタイトル（`--typeHeaderSize`） |
| Section Heading (h2) | 32.3px | 400 | 32.3px (x1.0) | normal | `#000000` | セクション見出し |
| Sub Heading (p.h3) | 26.6px | 400 | 26.6px (x1.0) | normal | `#000000` | "化粧筆の使い方" 等 |
| Collection Title (span) | 18px | 400 | 18px (x1.0) | 0.025em | `#000000` | "200シリーズ" 等のコレクション名（`--typeCollectionTitle`） |
| Body Large | 17.6px | 400 | 28.16px (x1.6) | 0.025em | `#000000` | 説明文 |
| Body | 16px | 400 | 25.6px (x1.6) | 0.025em | `#000000` | 標準テキスト（`--typeBaseSize`） |
| Collection Subtitle (span) | 14.4px | 400 | 18px (x1.25) | 0.2em | `#000000` | シリーズ名のサブテキスト |
| Footer / Sub text | 13.6px | 400 | 21.76px (x1.6) | 0.025em | `#000000` | メルマガ案内・フッタ本文 |
| CTA Primary | 13px | **700** | 18.46px (x1.42) | **0.3em** | `#ffffff` | "シリーズを見る" "詳細を見る" |
| CTA Secondary | 12px | 400 | 17.04px (x1.42) | **0.3em** | `#000000` | "すべてを見る" "イベント情報を見る" |
| CTA Small | 12px | **700** | 17.04px (x1.42) | **0.3em** | `#ffffff` | "もっと見る"（`btn--small`） |
| Footer Small | 12px | 400 | 19.2px (x1.6) | 0.025em | `#000000` | コピーライト |
| Product Caption | 11.2px | 400 | 16.8px (x1.5) | 0.025em | `#000000` | 商品コード・セット説明 |
| Label | 10.2px | 400 | 16.32px (x1.6) | **0.3em** | `#000000` | "メールアドレスを登録する" 等のラベル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.6**（25.6 / 16。CSS変数 `--typeBaseLineHeight: 1.6`）
- **見出し・ヒーローの行間**: **1.0**（line-height = font-size。CSS変数 `--typeHeaderLineHeight: 1`）
- **本文の字間 (letter-spacing)**: **0.025em**（0.4px / 16px。CSS変数 `--typeBaseSpacing: 0.025em`）
- **CTA の字間**: **0.3em**（3.9px / 13px）— 白鳳堂の CTA を最も特徴づける値
- **見出しの字間**: **0em / normal**（CSS変数 `--typeHeaderSpacing: 0.0em`）

**ガイドライン**:
- 本文は `letter-spacing: 0.025em` で明朝の字間をわずかに開く — 職人の丁寧さを字間で表現
- CTA は `letter-spacing: 0.3em` で大きく開く — ラグジュアリーブランドに共通するワイドスペーシング手法
- 見出し（h1〜h2）は line-height: 1.0 のタイト設定 — 大きな文字サイズで迫力を出す

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名（"S100シリーズ 朱軸"）は短めで改行しにくい
- 長文の説明テキストは標準的な禁則処理

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt / kern を有効化していない** — ＭＳ Ｐ明朝の素の字面メトリクスをそのまま使用
- 「Ｐ」は「プロポーショナル」の意で、元々欧文がプロポーショナル幅の明朝体

### 3.8 縦書き

- 該当なし。横書きのみ
- 書道筆のページでは `writing-mode: vertical-rl` が映えるが、現サイトは横書き統一

---

## 4. Component Stylings

### Buttons

白鳳堂の CTA は**直角矩形 + ワイドレタースペーシング**に統一。border-radius は一切使わない。

**Primary CTA（"シリーズを見る" "詳細を見る" 等）**
- Background: `#111111`（`--colorBtnPrimary`）/ ダーク面では `#000000`
- Text: `#ffffff`
- Border: `1px solid transparent` / ダーク面では `0px none`
- Padding: `11px 20px`
- Border Radius: **`0px`**（`--buttonRadius`）
- Font: 13px / weight **700** / line-height 1.42 / **letter-spacing 0.3em**
- Hover: background `#2b2b2b`（`--colorBtnPrimaryLight`）

**Inverse CTA（ダーク面上 "詳細を見る" "シリーズを見る" 等）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `2px solid #ffffff`
- Padding: `11px 20px`
- Border Radius: `0px`
- Font: 13px / weight **700** / line-height 1.42 / **letter-spacing 0.3em**

**Secondary CTA（"すべてを見る" "イベント情報を見る" 等）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #e8e8e1`（`--colorBorder`）
- Padding: `8px 14px`
- Border Radius: `0px`
- Font: 12px / weight 400 / line-height 1.42 / **letter-spacing 0.3em**

**Circle Button（スライドショー矢印）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #e8e8e1`
- Border Radius: `50%`
- Padding: `10px`
- Font: 13px / weight 700

### Inputs

**検索入力（header）**
- Background: `transparent`
- Border: `0px none`（ボーダーレス）
- Padding: `8px 10px`
- Font: 16px / 明朝 / weight 400
- Color: `#000000`

**ニュースレター入力（footer）**
- Background: `#ffffff`
- Border: なし（下線スタイル）
- Padding: `10px 45px 10px 0px`（右に送信ボタン分の余白）
- Font: 13.6px / 明朝 / weight 400
- Color: `#000000`

**標準入力**
- Background: `transparent`
- Border: `1px solid #e8e8e1`
- Border (focus): `1px solid #111111`（推奨 — ブランドブラック）
- Border Radius: `0px`
- Padding: `8px 10px`
- Font: 16px / 明朝 / weight 400
- Color: `#222222`

### Cards / Product Cards

商品一覧ページのコレクションカード:

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`
- Shadow: なし（フラット）
- 構造:
  - 商品画像（正方形に近い比率）
  - コレクション名（18px / weight 400 / `#000000`）
  - サブテキスト（14.4px / weight 400 / letter-spacing 0.2em）
  - 価格（16px / `#1c1d1d`）
  - 「おすすめ」バッジ（`#5ba390` 背景 / 白文字）

### Header / Nav

- Background: `#ffffff`（`--colorNav`）
- Color: `#000000`（`--colorNavText`）
- Shadow: `rgba(0, 0, 0, 0.2) 0px 0px 1px 0px`（極薄シャドウ）
- Padding: `20px 0px`
- ナビアイコン: 13px / weight 400 / padding `7.5px 12px`

### Footer

- Background: `#ffffff`（`--colorFooter`）
- Color: `#000000`（`--colorFooterText`）
- Padding: `60px 0px`
- メルマガ案内: 13.6px / 明朝 / weight 400
- コピーライト: 12px / 明朝 / padding `7.5px 0px`
- ラベル: 10.2px / letter-spacing 0.3em

### Badge

- **「おすすめ」バッジ**:
  - Background: `#5ba390`
  - Text: `#ffffff`（推定）
  - Border Radius: `0px`
  - Font: small / weight 400

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白 |
| S | 8px | CTA 内パディング上下 |
| M | 16px | カード内段落間 |
| L | 22px | グリッドガッター（`--grid-gutter: 22px`） |
| XL | 48px | セクション内余白 |
| XXL | 80px | セクション間・ヒーロー内余白 |

### Container

- Max Width: 1440px（Shopify テーマ標準）
- Padding (horizontal): mobile 15px / desktop 30px

### Grid

- 商品カード: 2 カラム（mobile）→ 3 カラム（tablet）→ 4 カラム（desktop）
- Gutter: 22px（`--grid-gutter`）
- ヒーロースライドショー: 全幅（100vw）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | **0px** | すべてのボタン・カード・画像・入力欄 |
| Circle | 50% | スライドショー矢印ボタンのみ |

- **角丸は使わない**（`--buttonRadius: 0px`）。白鳳堂のデザインは直線・直角で統一

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・商品画像（基本フラット） |
| Header | `rgba(0, 0, 0, 0.2) 0px 0px 1px 0px` | ヘッダーの極薄シャドウ |
| Overlay | `rgba(0, 0, 0, 0.1)` | 画像オーバーレイ（`--colorImageOverlayOpacity: .1`） |

- 白鳳堂は**影をほぼ使わない**。ヘッダーの `0 0 1px` のみ
- 立体表現はゼロで、漆黒と純白のコントラストだけで視覚階層を作る
- ホバー演出は背景色の微変化（`#111111` → `#2b2b2b`）のみ

---

## 7. Do's and Don'ts

### Do（推奨）

- **背景は純白 `#ffffff`**、ヒーロー/大判画像セクションのみ漆黒 `#0f0f0f`
- **フォントは明朝体で統一**（`"ＭＳ Ｐ明朝", "MS PMincho", serif` / preview では `"Shippori Mincho", serif`）
- **CTA の letter-spacing は `0.3em`**（13px なら 3.9px）— ワイドスペーシングが白鳳堂の象徴
- **CTA は border-radius: 0px の直角矩形**。Primary は黒塗り白文字、Secondary は白背景＋ `#e8e8e1` 枠
- **本文の letter-spacing は `0.025em`** — 明朝の字間をわずかに開いて品格を出す
- **見出しの line-height は 1.0**（タイト）、本文は 1.6
- **ヒーロー見出しは 40〜55px / 明朝 / weight 400 / 白文字**
- **「おすすめ」バッジは青緑 `#5ba390`** — 唯一の有彩色
- **角丸は一切使わない**（スライドショー矢印の circle 50% のみ例外）
- 価格表示は `#1c1d1d` で純黒よりわずかに柔らかく

### Don't（禁止）

- ゴシック体（sans-serif）を使わない — 白鳳堂は明朝統一
- CTA に border-radius を付けない（pill も角丸も不可）
- CTA の letter-spacing を normal にしない（0.3em のワイドスペーシングが必須）
- 本文の letter-spacing を 0 にしない（0.025em の微開きが白鳳堂の組）
- 有彩色を安易に増やさない（青緑バッジと朱色アナウンスのみ）
- 影・グラデーションを使わない（フラット原則）
- 見出しを太字（700）にしない（明朝 weight 400 が白鳳堂の見出し）
- font-feature-settings: "palt" を適用しない（normal が白鳳堂の選択）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ。ドロワーナビに切替 |
| Tablet | 769–959px | タブレット（Shopify テーマの中間幅） |
| Desktop | > 959px | デスクトップ |

### モバイル時の調整

- Hero Title: 55px → 32px 程度に縮小
- ナビは drawer（スライドメニュー）に切替。ドロワーリンクは 22.4px / padding 15px
- 商品グリッド: 4 → 2 → 1 カラム
- CTA サイズは変更しない（タッチターゲットは padding で確保済み）

### タッチターゲット

- Primary CTA: padding `11px 20px` + font 13px + line-height 18.46px = 高さ約 40.5px。横幅は letter-spacing 0.3em + padding で十分
- タッチ最小サイズ 44x44px に近いが、text の横幅で補う

### ダークモード

- **対応なし**。ライトモード固定
- ヒーローセクションの `#0f0f0f` ダーク面がダーク的役割を担う

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白）
Hero / Dark Surface: #0f0f0f
Text Body: #000000
Text Price: #1c1d1d
Text Inverse: #ffffff（ダーク面上）
Brand Black (CTA): #111111
Brand Black Hover: #2b2b2b
Badge Teal: #5ba390（「おすすめ」バッジ）
Announcement Orange: #fa4616（アナウンスバー・セール）
Border: #e8e8e1
Surface Dim: #f2f2f2

Font (全要素共通 — 明朝): "ＭＳ Ｐ明朝", "MS PMincho", serif
Font Web Fallback: "Shippori Mincho", "Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", serif

Hero Title: 40–55px / 明朝 / weight 400 / line-height 1.0 / letter-spacing normal / white
Page Title (h1): 38px / 明朝 / weight 400 / line-height 1.0 / letter-spacing normal
Section Heading (h2): 32px / 明朝 / weight 400 / line-height 1.0
Sub Heading: 26.6px / 明朝 / weight 400 / line-height 1.0
Collection Title: 18px / 明朝 / weight 400 / letter-spacing 0.025em
Body: 16px / 明朝 / weight 400 / line-height 1.6 / letter-spacing 0.025em

CTA Primary: 13px / 明朝 / weight 700 / letter-spacing 0.3em / bg #111111 / white text / radius 0px / padding 11px 20px
CTA Inverse: 13px / weight 700 / letter-spacing 0.3em / transparent bg / 2px solid white / radius 0px
CTA Secondary: 12px / weight 400 / letter-spacing 0.3em / transparent bg / 1px solid #e8e8e1 / radius 0px

font-feature-settings: normal（palt 適用なし）
Border Radius: 0px（全要素）
Shadow: none（フラット）
Grid Gutter: 22px
```

### プロンプト例

```
白鳳堂のデザインに従って、化粧筆の商品一覧ページを作成してください。
- 背景: #ffffff（純白）
- フォント: "Shippori Mincho", "Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", serif（全要素共通、明朝統一）
- font-feature-settings: normal（palt は適用しない）
- letter-spacing: 本文 0.025em、CTA 0.3em
- ヒーロー: 背景 #0f0f0f / 白文字 50px / 明朝 weight 400 / line-height 1.0 / "S100シリーズ 朱軸"
- ページタイトル: 38px / 明朝 / weight 400 / line-height 1.0 / color #000000
- セクション見出し: 32px / weight 400 / line-height 1.0
- 商品カード: 白背景 / border なし / radius 0px / 影なし
  - 商品名: 18px / weight 400 / letter-spacing 0.025em
  - 価格: 16px / color #1c1d1d
  - 「おすすめ」バッジ: bg #5ba390 / 白文字
- "シリーズを見る" CTA: bg #111111 / 白文字 13px / weight 700 / letter-spacing 0.3em / radius 0px / padding 11px 20px
- "すべてを見る" CTA: transparent / 黒文字 12px / weight 400 / letter-spacing 0.3em / 1px solid #e8e8e1
- ヘッダー: 白背景 / shadow rgba(0,0,0,0.2) 0 0 1px / padding 20px 0
- フッタ: 白背景 / 黒文字 / メルマガ入力欄あり
- 影・グラデーションは一切使わない
- 角丸は一切使わない（radius 0px）
- ゴシック体は使わない（明朝統一）
```
