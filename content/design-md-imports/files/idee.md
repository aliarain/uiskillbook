# DESIGN.md — IDÉE（イデー）

> IDÉE SHOP Online 公式サイト（https://www.idee-online.com/）のデザイン仕様書。
> 1982 年創業、自由が丘発の家具・インテリアブランド。"Life in Art" を掲げ、自社オリジナル家具とキュレーション雑貨を展開。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景に**深紺 `#001646`**（ミッドナイトブルー）をブランド色として据え、Helvetica + 游ゴシック Pr6n（Adobe Fonts）で組む**抑制されたモダン・エディトリアル**
- **密度**: 商品写真を大きく敷き詰めるグリッド。情報は最小限に絞り込み、商品ビジュアルが主役。**情報密度低、写真密度高**
- **キーワード**: 純白背景、深紺アクセント、Helvetica + 游ゴシック Pr6n、letter-spacing wide、palt、line-height 1.0 のタイト見出し、長方形 48px ライン CTA、角丸ゼロ、YakuHanJP 約物処理
- **特徴**:
  - **Helvetica Neue を欧文先頭** + **`yu-gothic-pr6n`（Adobe Fonts）** を和文に採用 — エディター誌面のようなクリーン構成
  - **`YakuHanJP` を最先頭**に置き、約物（カッコ・ハイフン）の半角アキを自動詰め — 日本語混在テキストの仕上がりが一段精緻になる
  - **font-feature-settings: "palt" を全要素に適用** — 和文プロポーショナル詰め
  - **letter-spacing 0.6px (≈+0.04em)** を body・見出し共通で適用 — 字間を広げて Helvetica の素直な字面を保つ
  - **line-height: 1.0**（h1 / body）— 見出しと体裁要素は**詰めて組む**ことで、エディトリアル誌面のような視覚的シャープさを生む
  - **CTA は line-height 48px / 1px solid #888 のライン枠**で長方形に組む（border-radius 0）
  - **ナビ・ヘッダーの label** は 11px / weight 400 / letter-spacing 0.5px の極小英大文字組
  - **深紺 `#001646`** はログインボタン背景・"NEW ARRIVALS" バッジ背景・フッタ面色として登場 — ブランド・サーフェス
  - 角丸はすべて 0px（直角矩形を貫く）
  - ライトモード前提（ダーク切替なし）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> IDÉE は**白 + 深紺 + 黒文字**の極めて抑制された 3 色構成。

### Brand

- **Primary Navy / Midnight Blue** (`#001646`): IDÉE のブランドカラー（rgb(0, 22, 70)）。ログインボタン背景、"NEW ARRIVALS" バッジ、フッタ面色、最重要のブランド色
- **Brand Black** (`#111111`): 本文・ナビ・見出しの基調色（rgb(17, 17, 17)）

### Surface（背景）

- **Page Background** (`#ffffff`): ページ全体の純白
- **Brand Surface** (`#001646`): ブランド面（フッタ・主要 CTA・バッジ）
- **Header Black** (`#000000`): ヘッダーロゴ・主要見出しの一部で純黒も併用

### Text / Foreground

- **Text Primary** (`#111111`): 本文・商品名・見出し
- **Text Inverse** (`#ffffff`): 深紺面・黒面上の白文字
- **Text Logo** (`#000000`): ロゴ・特定見出し（純黒）

### Border / Divider

- **CTA Border** (`#888888`): ライン CTA の 1px 枠
- **Subtle Divider**: 罫線は最小限。空間と写真の角で区切る

### Accent / Semantic

- **実 UI に表面化したアクセント色は深紺 `#001646` のみ**。エラー・成功色の標準は確認できず、UI は完全に紺・白・黒で完結
- 補完する場合は赤 `#b53939` / 緑 `#3a7c4f` を**深みのあるエディター彩度**で

---

## 3. Typography Rules

### 3.1 和文フォント

IDÉE は**Adobe Fonts の `yu-gothic-pr6n`（游ゴシック Pr6N）** を最優先する Web フォント運用。

- **第 0 候補**: **`YakuHanJP`** — 約物半角アキ詰めの専用サブセットフォント（Yaku Han JP）
- **第 1 候補**: `"Helvetica Neue"` / `Helvetica`（欧文グリフはここで処理）
- **第 2 候補**: **`yu-gothic-pr6n`**（Adobe Fonts 配信の游ゴシック Pr6N — Web フォント名）
- **第 3 候補**: `YuGothic` / `"游ゴシック Medium"` / `"Yu Gothic Medium"` / `游ゴシック` / `"Yu Gothic"`
- **最終フォールバック**: `sans-serif`

> **重要**: `YakuHanJP` と `yu-gothic-pr6n` は IDÉE の Adobe Fonts 契約由来のドメインライセンス。preview.html では Google Fonts の代替フォントを当てる:
> - `YakuHanJP` → 代替なし（標準フォントで近似）
> - `yu-gothic-pr6n` → `"Yu Gothic Medium"` / `"Hiragino Sans"` で代替

### 3.2 欧文フォント

- **第 1 候補**: **`Helvetica Neue`**
- **第 2 候補**: `Helvetica`
- **役割**: ASCII グリフ・サインオブジェ（英大文字ロゴ "NEW ARRIVALS" 等）すべて Helvetica で組む

### 3.3 font-family 指定

実サイトの実測値（**body / h1 / h2 / p / a 共通**）:

```css
font-family: YakuHanJP, "Helvetica Neue", Helvetica, yu-gothic-pr6n, YuGothic,
  "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- **YakuHanJP を最先頭に置く** — 「（」「）」「、」「。」「・」等の約物だけを半角アキ字形に置換するサブセットフォント。和欧混在組版の精度を一段上げる
- **Helvetica Neue / Helvetica を欧文位置に挟む** — ASCII グリフを Helvetica で組む（YakuHanJP は ASCII を持たない）
- **yu-gothic-pr6n（Adobe Fonts）** が和文の主役 — Pr6N は游ゴシックの拡張字形セット
- AI で再現する場合、**`"Helvetica Neue", Helvetica, "Yu Gothic Medium", "Hiragino Sans", "Yu Gothic", sans-serif`** に簡略化して問題なし。可能なら YakuHanJP を CDN 経由で読み込む

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-07 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Page Heading (h1) | **28px** | **700** | **28px (×1.0)** | 0.6px (+0.02em) | `#111111` | ページタイトル — line-height 1.0 でタイト |
| Section Title (h2) | 21px | **700** | 33.6px (×1.6) | 0.6px | `#111111` | "INFORMATION" "SHOP NEWS" 等 |
| Hero Item Title | **30px** | 400 | 42px (×1.4) | 0.6px | `#111111` | スライダー内大型タイトル |
| Body | 14px | 400 | **14px (×1.0)** | 0.6px (+0.04em) | `#111111` | 段落・通常テキスト — タイトな組 |
| Topic Body | 13px | 400 | 19.5px (×1.5) | 0.6px | `#111111` | 商品カテゴリ説明 |
| Item Name | 12px | 400 | 16.8px (×1.4) | 0.6px (+0.05em) | `#111111` | "IDEE Cotton Linen Tote Bag ネイビー" |
| Section Label | **11px** | 400 | 11px (×1.0) | 0.5px (+0.045em) | `#ffffff` | "NEW ARRIVALS" 英大文字バッジ |
| Helper Link | 11px | 400 | 11px (×1.0) | 0.3px | `#ffffff` | "お買いものガイド" 等のヘッダ補助 |
| CTA Text (line) | 15px | 400 | **48px (×3.2)** | 0.6px | `#111111` | "特集一覧を見る" line-height で高さを作る |
| CTA Text (navy) | 12px | 400 | 24px (×2.0) | 0.3px | `#ffffff` | "ログイン" / 深紺ピル |

### 3.5 行間・字間

- **本文の行間**: **1.0**（14 / 14）— **極端にタイト**。エディター誌面の引き締まった字組
- **見出し（h1 / Section Label）の行間**: **1.0** — タイトルもタイト
- **節タイトル（h2）の行間**: 1.6（33.6 / 21）— 唯一広めに取る
- **CTA の行間**: 48px / 24px（**line-height で高さを決める** ため、padding は 0px）
- **letter-spacing**:
  - 本文・見出し: **0.6px（≈+0.04em）** — 全体的に字間を開く
  - Section Label / Helper Link: **0.3〜0.5px** — 11px の小文字に合わせ調整

**ガイドライン**:
- **IDÉE の本文 line-height 1.0 は意図的なエディター組** — 商品名・短文ラベルが中心で、長文段落は別ページで line-height 1.5+ に切り替える
- **見出しは line-height 1.0 でタイトに**、字間 0.6px で軽く開く（Helvetica Neue の字面を活かす）
- **CTA の高さは line-height で決める**（`line-height: 48px` で 48px 高のボタン）— padding を 0px で組む

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名は短く、改行を意識した組
- 約物半角詰めは **YakuHanJP** が自動処理（CSS では特別な指定不要）

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- **palt（プロポーショナル代替メトリクス）を全要素に適用**
- yu-gothic-pr6n の和文約物が詰まり、Helvetica の欧文と混ざる和欧混在組版が締まる
- YakuHanJP との二段重ねで、約物処理は二重に最適化

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

IDÉE の CTA は**3 種類**に明確に分かれる。

**Primary CTA — Navy Pill（"ログイン" 等）**
- Background: **`#001646`**（ブランド深紺）
- Text: `#ffffff`
- Border: なし
- Padding: `0px 10px`
- Border Radius: `0px`
- Font: 12px / weight 400 / line-height 24px / letter-spacing 0.3px
- 高さ: line-height 24px が決定（padding 0）

**Secondary CTA — Line Box（"特集一覧を見る" "SHOP NEWS一覧" 等）**
- Background: `#ffffff`
- Text: `#111111`
- Border: **`1px solid #888888`**
- Padding: `0px`
- Border Radius: `0px`
- Font: 15px / weight 400 / **line-height 48px** / letter-spacing 0.6px
- 高さ: 48px（line-height で決定）

**Section Label — Navy Badge（"NEW ARRIVALS" 等）**
- Background: `#001646`
- Text: `#ffffff`
- Padding: 4px 8px（推奨）
- Border Radius: `0px`
- Font: 11px / weight 400 / line-height 1.0 / letter-spacing 0.5px / 英大文字

### Inputs

- Background: `#ffffff`
- Border: `1px solid #888888`
- Border (focus): `1px solid #001646`（ブランド深紺）
- Border Radius: `0px`
- Padding: `12px 16px`
- Font: 14px / Helvetica + 游ゴシック Pr6n / weight 400
- Color: `#111111`

### Cards / Item Tiles

商品グリッドの 1 枚:

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`
- Padding: 0（写真を縁取らずベタ置き）
- Shadow: なし
- 構造:
  - 商品写真（正方形 1:1 〜 4:5）
  - 商品名（12px / `#111111` / line-height 1.4）
  - 価格（必要に応じ 13px / weight 400）

### Header / Nav

- Background: `#ffffff`
- Color: `#111111`
- Logo "IDÉE" 中央 or 左
- Section Label "NEW ARRIVALS" 等は **#001646 深紺バッジに白 11px** で組む
- ナビ項目: 13px / weight 400 / letter-spacing 0.6px
- Padding: `12px 16px`

### Footer

- Background: `#001646`（ブランド深紺）
- Color: `#ffffff`
- "© 2002 IDÉE" / "FOLLOW US" は Helvetica で英文組
- Padding: `48px 32px 32px`

---

## 5. Layout Principles

### Spacing Scale（推奨 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白 |
| S | 8px | リスト項目間 |
| M | 16px | カード内段落間 |
| L | 24px | カード間 |
| XL | 48px | セクション内余白 |
| XXL | 80px | セクション間 |

### Container

- Max Width: 1280px（推奨）
- Padding (horizontal): mobile 16px / desktop 32px

### Grid

- 商品カード: 2 カラム（mobile）→ 3 カラム（tablet）→ 4 カラム（desktop）
- Gutter: 16〜24px
- ヒーロースライダーは画面幅いっぱい

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | 全要素（カード・タグ・ボタン・入力欄） |

- IDÉE は**全要素で角丸ゼロ**を貫く。pill・circle すら登場しない直角原則

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・写真・パネル（基本フラット） |
| 1 | `0 0 0 1px #888888` | ライン CTA の枠で代替 |

- IDÉE は**影を一切使わない**。立体表現はゼロで、写真の発色と深紺面が視覚階層を作る
- カード・モーダルすべてフラット
- ホバー演出は border-color / opacity の変化のみ

---

## 7. Do's and Don'ts

### Do（推奨）

- **背景は純白 `#ffffff`**、ブランド面は**深紺 `#001646`**
- **本文・見出しは `#111111`**（純黒 #000 ではない、わずかに浮かせる）
- **欧文を Helvetica Neue → 和文を yu-gothic-pr6n（または `"Yu Gothic Medium"`）** で組む
- **YakuHanJP を最先頭**に挟んで約物を自動半角詰め
- **font-feature-settings: "palt" を全要素に適用**
- **letter-spacing: 0.6px（≈+0.04em）を本文・見出しに**
- **本文 line-height 1.0** でタイトに（短文・商品名のみで構成すること前提）
- **見出し h1: 28px / weight 700 / line-height 1.0**
- **CTA は line-height で高さを決める**（48px / 24px）— padding は 0
- **ライン CTA は 1px solid #888 / border-radius 0**
- **深紺 CTA は #001646 / 白文字 / border-radius 0 / 12px**
- **Section Label は深紺バッジに白 11px / letter-spacing 0.5px / 英大文字**
- 角丸はすべて 0px（pill・circle 無し）
- 影・グラデーション・カラフルなアクセントを使わない

### Don't（禁止）

- 純黒 `#000000` を本文に使わない（`#111111` を使う）
- 本文に letter-spacing normal / 0 を適用しない（0.6px が IDÉE の標準）
- font-feature-settings を normal に戻さない（palt が必須）
- ボタンに `border-radius` を付けない（直角を維持）
- 深紺以外のブランドアクセント色を追加しない（`#001646` 一本でブランドを表現）
- 影・elevation を使わない（フラット原則）
- 長文を line-height 1.0 で組まない — エディター誌面用の短文専用組。長文は 1.5+ に切り替え
- 角丸（border-radius > 0）を使わない（全要素 0px）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769–1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Page Heading (h1): 28px → 22px
- Body: 14px 維持
- ナビは drawer ハンバーガーへ切り替え
- 商品グリッド 4 → 2 → 1 カラム
- CTA は line-height 44px に縮小（タッチターゲット最小確保）

### タッチターゲット

- 最小 44×44px。**ライン CTA は line-height 48px で十分**、深紺 CTA は line-height 24px のため padding を上下追加して 44px+ を確保

### ダークモード

- **対応なし**。ライトモード固定
- フッタ深紺面が「ダーク的役割」を担う

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白）
Brand Navy: #001646（ログイン・バッジ・フッタ）
Text Primary: #111111（やや柔らかい黒）
Text Inverse: #ffffff
Border (CTA): #888888

Font: YakuHanJP, "Helvetica Neue", Helvetica, yu-gothic-pr6n, YuGothic, "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif
Web Fallback (簡略): "Helvetica Neue", Helvetica, "Yu Gothic Medium", "Hiragino Sans", "Yu Gothic", sans-serif

Page Heading (h1): 28px / weight 700 / line-height 1.0 / letter-spacing 0.6px
Section Title (h2): 21px / weight 700 / line-height 1.6 / letter-spacing 0.6px
Body: 14px / weight 400 / line-height 1.0 / letter-spacing 0.6px (+0.04em)
Topic Body: 13px / weight 400 / line-height 1.5 / letter-spacing 0.6px
Item Name: 12px / weight 400 / line-height 1.4 / letter-spacing 0.6px
Section Label: 11px / weight 400 / line-height 1.0 / letter-spacing 0.5px / 英大文字 / 深紺バッジ
CTA Text (line): 15px / weight 400 / line-height 48px / letter-spacing 0.6px / black on white
CTA Text (navy): 12px / weight 400 / line-height 24px / letter-spacing 0.3px / white on #001646

Border Radius: 0px（全要素）
Shadow: none（フラット）
font-feature-settings: "palt"（全要素グローバル適用）
```

### プロンプト例

```
IDÉE のデザインに従って、家具商品の一覧ページを作成してください。
- 背景: #ffffff（純白）
- ブランド色（深紺）: #001646
- フォント: "Helvetica Neue", Helvetica, "Yu Gothic Medium", "Hiragino Sans", "Yu Gothic", sans-serif
  （可能なら YakuHanJP を CDN で読み込み、和文約物を半角詰め）
- font-feature-settings: "palt" を全要素に適用
- 本文 letter-spacing: 0.6px (+0.04em)
- ページ見出し: 28px / weight 700 / line-height 1.0 / color #111111
- セクションタイトル "NEW ARRIVALS": 11px / 白文字 / 深紺 #001646 バッジ / letter-spacing 0.5px / 英大文字
- 商品グリッド（4 カラム）: 写真 + 商品名 12px / line-height 1.4 / color #111111
- ヒーロースライダー: 大型タイトル 30px / weight 400 / line-height 1.4
- ライン CTA "特集一覧を見る": 白背景 / 1px solid #888 / border-radius 0 / 15px / line-height 48px / 黒文字
- 深紺 CTA "ログイン": 背景 #001646 / 白文字 12px / border-radius 0 / line-height 24px / padding 0 10px
- フッタ: 背景 #001646（深紺）/ 白文字 / "© 2002 IDÉE" は Helvetica
- 影・グラデーション・カラフルなアクセントは一切使わない
- 角丸はすべて 0px（直角矩形を貫く）
- 本文 line-height 1.0 のタイト組（短文・商品名のみ。長文は line-height 1.5+ に切り替え）
```
