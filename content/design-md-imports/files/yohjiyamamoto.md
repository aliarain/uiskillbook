# DESIGN.md — Yohji Yamamoto（ヨウジヤマモト）

> Yohji Yamamoto 公式サイト（https://www.yohjiyamamoto.co.jp/）のデザイン仕様書。
> 山本耀司が率いる、黒の詩学と脱構築で知られる世界的メゾン。Yohji Yamamoto、Y's、Y's for men、discord、S'YTE、WILDSIDE、Ground Y 等を展開。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 黒 `#101010` の深淵を基調に **Optima（ヒューマニストサンセリフ）と游ゴシック体** の混植で組む、**反商業的なギャラリーUI**。CTAボタンは存在せず、テキストリンクと余白だけで構成する禁欲的な設計
- **密度**: トップページはフルスクリーン映像+最小限のテキスト。コレクションページに切り替わると `#fafafa` の白背景に写真グリッドが並ぶ **ダークモード / ライトモードの二面性**。いずれも情報密度は極めて低く、余白が支配する
- **キーワード**: 黒の詩学、Optima、游ゴシック体、letter-spacing 0.08em、角丸ゼロ、テキストリンクCTA、palt なし、ダーク/ライト二面、反商業
- **特徴**:
  - **二面的な背景設計**: トップページ `#101010`（漆黒）/ コレクションページ `#fafafa`（オフホワイト）
  - **欧文には Optima を使用** — セリフとサンセリフの中間に位置するヒューマニストフォントで、川久保玲やヨウジの世界観と親和性が高い。macOS / iOS にプリインストール
  - **和文は游ゴシック体（Yu Gothic）** — body に指定。ヒラギノ角ゴ Pro W3 がフォールバック。メイリオ、Verdana、Osaka、MS PGothic と手厚いフォールバックチェーン
  - **日付表示には Poppins** — Google Fonts の幾何学的サンセリフ。日付スタンプ専用
  - **font-feature-settings: normal（全要素）** — palt / kern は一切使わない
  - **letter-spacing 1.2px（body グローバル）** — 15px 本文に対して 0.08em 相当。ナビは 1.5px（0.15em at 10px）まで広げる
  - **ボタン要素は一切存在しない** — `interactive` 配列が空。サイト全体がテキストリンクのみで構成されるという、ファッションサイト随一の禁欲さ
  - **全要素角丸 0px**。写真もカードもリンクもすべて直角
  - **CSS Custom Properties はサードパーティのみ**（Swiper、vue-carousel 系の --vc-* 変数）。ブランド独自のデザイントークンは未定義
  - **font-weight 400 が全要素の基本**。500 は通知バーの小テキストに稀に出現する程度

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> Yohji Yamamoto の UI は装飾色を持たない。**黒・白・灰の無彩色のみ**で構築される。

### Surface（背景）

- **Dark Background** (`#101010`): トップページの body 背景（rgb(16, 16, 16)）。ブランド体験の基盤
- **Light Background** (`#fafafa`): コレクションページの body 背景（rgb(250, 250, 250)）。商品閲覧モード
- **Pure Black** (`#000000`): フッター背景、モーダルオーバーレイ内面
- **Notice Bar** (`#272727`): 偽サイト注意喚起バーの背景（rgb(39, 39, 39)）
- **Highlights Section** (`#212121`): ハイライトセクション背景（rgb(33, 33, 33)）
- **Divider Gray** (`#ebebeb`): ナビゲーション区切り線・フッター罫線（rgb(235, 235, 235)、8 回出現）
- **Menu Surface** (`#ffffff`): サイドメニュー・ブランド選択パネルの背景

### Text

- **Text on Dark** (`#ffffff`): ダークモード上のテキスト（rgb(255, 255, 255)）
- **Text on Light** (`#000000`): ライトモード上のテキスト（rgb(0, 0, 0)）
- **Date Muted** (`#a3a3a3`): 日付スタンプのミュートテキスト（rgb(163, 163, 163)）

### Overlay

- **Modal Overlay** (`rgba(0, 0, 0, 0.4)`): ライブビューモーダルのベール
- **Semi Overlay** (`rgba(0, 0, 0, 0.5)`): コレクション写真ホバー時のオーバーレイ

### Semantic（補完）

- 実 UI にエラー・成功・警告色は存在しない。追加する場合は **赤（`#8b0000`）/ 緑（`#2e7d32`）/ 黄（`#c89a3c`）** をミュートに

---

## 3. Typography Rules

### 3.1 和文フォント

- **メイン**: **游ゴシック体（Yu Gothic / YuGothic）** — Windows / macOS 両対応のシステムフォント
- **フォールバック**: ヒラギノ角ゴ Pro W3（macOS）→ メイリオ（Windows）→ Verdana → Osaka → MS PGothic

> **Note**: ヒラギノは **Pro W3**（ProN ではない）。Apple JP サイトと同じ指定。

### 3.2 欧文フォント

- **ブランド・見出し**: **Optima** — Hermann Zapf 設計のヒューマニストサンセリフ。macOS / iOS にプリインストール
- **日付表示**: **Poppins** — Google Fonts。幾何学的サンセリフ。日付スタンプ専用
- **フォールバック**: sans-serif

### 3.3 font-family 指定

実サイトの実測値（body に指定されたグローバルスタック）:

```css
/* body（和文本文） */
font-family: 游ゴシック体, "Yu Gothic", YuGothic,
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, verdana, Osaka,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 見出し・ナビ・ブランドテキスト（Optima） */
font-family: Optima, sans-serif;

/* 日付スタンプ（Poppins） */
font-family: Poppins, sans-serif;
```

**フォールバックの考え方**:
- **body は和文先頭スタック** — 游ゴシック体 → ヒラギノ → メイリオ → 欧文フォールバック。日本語の表示品質を優先
- **見出し・ナビには Optima を単独指定** — macOS / iOS ではプリインストール。Windows 環境へのフォールバックは sans-serif のみという潔い設計
- **日付は Poppins** — Google Fonts 依存。数字の美しさを優先した選択
- **AI で再現する場合**: Optima は macOS 専用のため、Google Fonts では **EB Garamond**（ヒューマニスト感）や **Cormorant Garamond** が雰囲気に近い。ただし Optima はセリフレスのため完全な代替は困難 — macOS 環境では Optima をそのまま使うのが最善

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・コレクションページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section Heading | Optima | 20px | 400 | 20px (x1.0) | 1.2px (0.06em) | `#ffffff` / `#000000` | "BRANDS / COLLECTION" 等 |
| Article Title | Optima | 20px | 400 | 30px (x1.5) | normal | `#ffffff` | 記事カードのタイトル |
| Collection Brand | Optima | 16px | 400 | 24px (x1.5) | 1.2px (0.075em) | `#ffffff` | コレクションページ内ブランド名 |
| Sub Brand | Optima | 14px | 400 | 21px (x1.5) | 1.2px (0.086em) | `#ffffff` | "S'YTE" 等サブブランド名 |
| Article Title SM | Optima | 14px | 400 | 21px (x1.5) | normal | `#ffffff` | 小カード内タイトル |
| Body | 游ゴシック体 | 15px | 400 | 18.75px (x1.25) | 1.2px (0.08em) | `#ffffff` / `#000000` | 本文テキスト |
| Nav Top Link | Optima | 12px | 400 | 12px (x1.0) | 1.2px (0.1em) | `#000000` | "TOP" メニュー内 |
| Newsletter Link | Optima | 11px | 400 | 11px (x1.0) | 0.88px (0.08em) | `#ffffff` | "NEWSLETTER" ヘッダー内 |
| Nav Brand | Optima | 10px | 400 | 15px (x1.5) | 1.2px (0.12em) | `#000000` | メニュー内ブランド名リスト |
| Footer Nav | Optima | 10px | 400 | 10px (x1.0) | 1.5px (0.15em) | `#ffffff` | フッターナビ・最小テキスト |
| Date Stamp | Poppins | 12px | 400 | 12px (x1.0) | normal | `#a3a3a3` | "May 21, 2026" |
| Notice Bar | 游ゴシック体 | 10px | 500 | 15px (x1.5) | 1.2px (0.12em) | `#ffffff` | 偽サイト注意喚起 |
| Menu Label | Optima | 10px | 400 | 12px (x1.2) | 1.2px (0.12em) | `#ffffff` / `#000000` | "MENU" / "BRANDS / COLLECTION" |
| Breadcrumb | Optima | 10px | 400 | 10px (x1.0) | 1.2px (0.12em) | `#000000` | "HOME" コレクション内 |
| Corp Name | Optima | 10px | 400 | 12.5px (x1.25) | normal | `#000000` | "YOHJI YAMAMOTO Inc." |

### 3.5 行間・字間

- **本文の行間**: **1.25**（18.75px / 15px）— 日本語サイトとしてはかなりタイト。ファッション業界のストイックな組版
- **見出し（h2）の行間**: **1.0**（20px / 20px）— ベタ組。余白はマージンで確保
- **記事タイトルの行間**: **1.5**（30px / 20px）— 複数行タイトルのみ通常の行間
- **本文の字間**: **1.2px（0.08em at 15px）** — body にグローバル指定。すべての子要素が継承
- **見出しの字間**: **1.2px**（body 継承）または **normal**（記事タイトル）
- **ナビの字間**: **1.2px〜1.5px** — 小テキスト（10px）に対して最大 0.15em。かなり広い

**ガイドライン**:
- Yohji Yamamoto の和文は **1.25 倍行間**が基本。ISSEY MIYAKE の 1.5 よりさらにタイト
- **letter-spacing 1.2px はグローバル定数**。body に一括指定し、例外的に normal（記事タイトル・日付）か 1.5px（小テキスト）に上書き
- **全角文字に 0.08em の字間**は標準的な日本語組版よりやや広め — 欧文的なエアリーさを日本語にも適用する意図

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ブラウザ既定の禁則処理に依存
- ブランド名（Yohji Yamamoto / WILDSIDE / discord 等）は欧文のため自然に折り返される

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt / kern を有効化していない** — 全要素で `normal`
- Optima はプロポーショナルメトリクスが優秀なため、追加のカーニング指定は不要
- 游ゴシック体の和文にも詰めを適用しない — letter-spacing 1.2px が既に字間を制御している

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

Yohji Yamamoto のサイトには **従来型のCTAボタンが一切存在しない**。`interactive` 配列が空であり、`<button>` / `<input>` / `<select>` タグも皆無。すべての操作はテキストリンクで行う。

**Text Link（Primary action）**
- Background: `transparent`
- Text: `#ffffff`（ダーク）/ `#000000`（ライト）
- Font: Optima 10〜12px / weight 400 / letter-spacing 1.2px
- Padding: `5px〜10px`（テキストリンク前後の呼吸）
- Border: なし
- Hover: opacity 0.7（推奨）
- 例: "NEWSLETTER", "TOP", "MENU"

**Newsletter Link（Header）**
- Font: Optima 11px / weight 400 / letter-spacing 0.88px
- Color: `#ffffff`
- 位置: ヘッダー左端

**Brand Name Link（Navigation）**
- Font: Optima 10px / weight 400 / letter-spacing 1.2〜1.5px / line-height 15px
- Color: `#000000`（メニュー内）/ `#ffffff`（フッター内）
- Padding: `5px 5px 5px 20px`（インデント付き）

**Notice Bar Link**
- Background: `#272727`
- Text: 游ゴシック体 10px / weight 500 / letter-spacing 1.2px
- Color: `#ffffff`
- 全幅バー、padding 付き
- 例: "THE SHOP YOHJI YAMAMOTOを装ったサイトへの誘導にご注意ください"

### Inputs

- 実サイトに input / select / textarea は検出されなかった
- 推奨スタイル（ブランドトーンに基づく）:
  - Background: `transparent`
  - Border: `1px solid #ebebeb`（ダーク時）/ `1px solid #272727`（ライト時）
  - Border (focus): `1px solid #ffffff`（ダーク時）/ `1px solid #000000`（ライト時）
  - Border Radius: `0px`
  - Padding: `10px 0px`（下線スタイル推奨）
  - Font: 游ゴシック体 15px / weight 400 / letter-spacing 1.2px

### Cards

- Background: `transparent`（写真のみ、面色なし）
- Border: なし
- Border Radius: `0px`
- Shadow: なし
- 構造: 写真 → 日付（Poppins 12px / `#a3a3a3`） → タイトル（Optima 20px or 14px）
- ホバー: opacity 0.8 / 写真に `rgba(0, 0, 0, 0.5)` オーバーレイ

### Header

- Background: `transparent`（ダークモード時）/ `#fafafa`（ライトモード時）
- ロゴ: SVG ワードマーク（中央配置）
- 左: NEWSLETTER リンク（Optima 11px）
- 右: MENU / BRANDS / COLLECTION ラベル（Optima 10px）
- 通知バー: `#272727` 背景、游ゴシック体 10px / weight 500

### Footer

- Background: `#000000`
- Text: `#ffffff`（Optima 10px / letter-spacing 1.5px）
- ブランド名リスト（Yohji Yamamoto, Y's, discord 等）を縦に並べる
- 企業情報: "YOHJI YAMAMOTO Inc."（Optima 10px / letter-spacing normal）
- 区切り線: `#ebebeb`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | リンク内パディング、テキスト間最小余白 |
| S | 10px | ナビリンクパディング |
| M | 20px | ブランドリスト左インデント |
| L | 40px | セクション内余白 |
| XL | 80px | セクション間余白 |
| XXL | 120px | ヒーロー前後の余白 |

### Container

- Max Width: 1440px（推奨）
- Padding (horizontal): mobile 16px / desktop 40px
- コンテンツ幅: コレクションギャラリーはほぼ全幅

### Grid

- コレクション写真: 2カラム（均等分割、gap なし、写真同士が密着）
- ニュースカード: スワイパーによる横スクロール（4〜5枚表示）
- Gutter: 0px（写真グリッド）/ 24px（テキストコンテンツ）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | 全要素 |

- Yohji Yamamoto は**全要素で角丸ゼロ**。直線と直角のみの構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素基本（フラット） |
| Overlay | `rgba(0, 0, 0, 0.4)` | モーダルオーバーレイ（ライブビュー時） |
| Photo Hover | `rgba(0, 0, 0, 0.5)` | コレクション写真ホバー時 |

- Yohji Yamamoto は **影（box-shadow）を一切使わない**。全要素 `none`
- 奥行きの表現はオーバーレイの透過度のみ
- モーダルはダーク半透明ベール + 純黒の内面で構成

---

## 7. Do's and Don'ts

### Do（推奨）

- **本文は 游ゴシック体、見出し・ナビは Optima、日付は Poppins** の3フォント体制を厳守
- **letter-spacing 1.2px を body にグローバル指定**（全子要素が継承）
- **ダーク背景 `#101010` とライト背景 `#fafafa` の二面を正しく使い分ける**
  - ダーク: ブランド体験（トップ・映像・ニュース）
  - ライト: 商品閲覧（コレクション・ショップ）
- **CTAはテキストリンクのみ**。Optima 10〜12px / letter-spacing 1.2px / hover: opacity 0.7
- **font-weight 400 を全要素の基本に**。500 は通知テキストの例外的使用のみ
- **角丸はすべて 0px**
- **影は一切使わない**（box-shadow: none）
- **日付は Poppins 12px / color `#a3a3a3`** で統一
- フッターは `#000000` 背景に Optima 10px / letter-spacing 1.5px

### Don't（禁止）

- 角丸（`border-radius` > 0）を使わない
- box-shadow を使わない（奥行きはオーバーレイのみ）
- 従来型の塗りボタン（background-color + padding の矩形 CTA）を作らない — テキストリンクが唯一のアクション手段
- 本文に palt / kern を適用しない（letter-spacing 1.2px が字間を制御済み）
- 装飾色・アクセントカラーを追加しない（無彩色パレットを厳守）
- 本文の line-height を 1.5 以上にしない（1.25 のタイトな組みを維持）
- 游ゴシック体の指定で ProN を使わない（Pro W3 がフォールバック）
- ナビゲーションの letter-spacing を 1.2px 未満にしない（広い字間がブランドの呼吸）
- Optima の代わりに Arial や Helvetica を使わない（ヒューマニストの優美さが失われる）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769-1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Section Heading: 20px → 16px
- Article Title: 20px → 16px
- Body: 15px 維持
- Nav: ハンバーガーメニュー（MENU / CLOSE MENU テキスト切替）
- コレクション写真グリッド: 2カラム → 1カラム
- 通知バー: テキストサイズ維持、横スクロール対応

### タッチターゲット

- テキストリンクの line-height 42px（通知バーリンク）で十分なヒット領域を確保
- ナビリンクは padding `5px〜10px` + line-height 15px。密集するメニュー内ではギリギリだが意図的なデザイン

### ダークモード

- **ページ単位での切替**:
  - トップページ / ニュース: ダーク（`#101010` 背景 + `#ffffff` テキスト）
  - コレクション / ショップ: ライト（`#fafafa` 背景 + `#000000` テキスト）
- OS のダークモード設定には非連動。コンテンツの性質で決定する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Dark Background: #101010
Light Background: #fafafa
Footer Background: #000000
Notice Bar BG: #272727
Highlights BG: #212121
Divider: #ebebeb
Text on Dark: #ffffff
Text on Light: #000000
Date Muted: #a3a3a3
Overlay: rgba(0, 0, 0, 0.4)

Font Body: 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, verdana, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Font Heading: Optima, sans-serif
Font Date: Poppins, sans-serif

Section Heading: Optima 20px / weight 400 / line-height 1.0 / letter-spacing 1.2px
Article Title: Optima 20px / weight 400 / line-height 1.5 / letter-spacing normal
Body: 游ゴシック 15px / weight 400 / line-height 1.25 / letter-spacing 1.2px
Nav Link: Optima 10-12px / weight 400 / letter-spacing 1.2-1.5px
Date: Poppins 12px / weight 400 / color #a3a3a3

Border Radius: 0px（全要素）
Shadow: none（全要素）
font-feature-settings: normal（palt 適用なし）
letter-spacing: 1.2px（body グローバル）
CTA: テキストリンクのみ（塗りボタンなし）
```

### プロンプト例

```
Yohji Yamamoto のデザインに従って、ニュース一覧ページを作成してください。
- 背景: #101010（漆黒）
- フォント（本文）: 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", sans-serif
- フォント（見出し・ナビ）: Optima, sans-serif
- フォント（日付）: Poppins, sans-serif
- letter-spacing: body に 1.2px をグローバル指定
- palt は使わない
- セクション見出し: Optima 20px / weight 400 / line-height 1.0 / color #ffffff / letter-spacing 1.2px
- 記事タイトル: Optima 20px / weight 400 / line-height 1.5 / color #ffffff
- 本文: 游ゴシック体 15px / weight 400 / line-height 1.25 / color #ffffff
- 日付: Poppins 12px / weight 400 / color #a3a3a3
- CTA はテキストリンクのみ（Optima 10-12px / letter-spacing 1.2px / hover: opacity 0.7）。塗りボタンは作らない
- カードは写真 + 日付 + タイトルの3要素。border / shadow / 角丸なし
- 通知バー: #272727 背景 / 游ゴシック 10px weight 500 / #ffffff
- フッター: #000000 背景 / Optima 10px / letter-spacing 1.5px / #ffffff
- 全要素 border-radius: 0px、box-shadow: none
```
