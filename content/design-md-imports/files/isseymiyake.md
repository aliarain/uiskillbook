# DESIGN.md — ISSEY MIYAKE（イッセイ ミヤケ）

> ISSEY MIYAKE（https://www.isseymiyake.com/ja）公式サイトのデザイン仕様書。
> 三宅一生が立ち上げた、世界的に評価される日本発のファッションブランド。「PLEATS PLEASE」「BAO BAO」「A-POC ABLE」等、複数のサブブランドを展開。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` の余白を最大化し、**HelveticaLTPro（カスタム欧文）と ヒラギノ角ゴ W4 JIS2004** の混植で組む、**美術館カタログ的な編集デザイン**。色面はほぼ存在せず、写真・余白・タイポグラフィの三要素だけで構築する
- **密度**: ヒーローはほぼ全画面写真、テキストは最小限。情報密度は低く、**「呼吸する余白」と「素材の写真」が主役**。コンテンツページに入ると本文は 14px / line-height 1.5 のタイトな編集組
- **キーワード**: 純白基調、HelveticaLTPro、ヒラギノ角ゴ W4、JIS2004、letter-spacing normal、角丸ゼロ、フラット黒バー CTA、palt なし、編集デザイン
- **特徴**:
  - **font-family は `HelveticaLTPro, HelveticaNeueLTPro, "Hiragino Kaku Gothic W4 JIS2004", sans-serif`** — Apple や三菱地所と同じく Hiragino W4（W3 より若干太い）を採用。さらに **JIS2004 字形**を明示する徹底ぶり
  - **CSS Custom Properties は Shopify 系拡張（swym-*, swiper-*）のみ**でブランド独自トークンは未定義 — Shopify Plus 構築の典型
  - **全要素角丸 0px**。CTA も入力欄もすべて直角の矩形バー
  - **CTA は黒帯（`#333333` または `#000000`）に白文字** または **`#ff4500`（My Wishlist のオレンジ）** の 2 系統のみ
  - **letter-spacing は全要素 normal**。詰めも開きもしない素朴な組
  - 本文・見出し・キャプションすべて **font-weight 400（regular）が基本**。強調にだけ 700 を使う
  - line-height は **1.2〜1.5** の編集組系（雑誌・カタログに近い）。日本語標準の 1.7〜2.0 とは異なる **欧文寄りのタイト組**
  - 補助色（情報バッジ）は **`#464d59`（slate）** や **`#eceeef`（pale gray）** で控えめに
  - ダークモード非対応。常時ライト

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> ISSEY MIYAKE の UI は装飾色を持たず、**無彩色 + 一点のオレンジ**だけで構築されている。

### Brand

- **Wishlist Orange** (`#ff4500`): 「My Wishlist」CTA に使われる唯一のアクセント色。EC 機能のため
- 実質的なブランドカラーは **黒・グレー・白**。色は服と写真の中だけに存在

### Surface

- **Page Background** (`#ffffff`): ページ全体の純白
- **Section Alt** (`#eceeef`): 検索バー・補助セクション背景（rgb(236, 238, 239)、4 回出現）
- **Notice Bar** (`#464d59`): 「【重要なお知らせ】REALITY LAB...」等のお知らせバー背景（slate gray）

### Text

- **Text Primary** (`#333333`): 本文・見出し・ナビ・リンクのデフォルトテキスト色（rgb(51, 51, 51)）
- **Text Date** (`#222222`): 日付テキスト（rgb(34, 34, 34)、少し濃い）
- **Text Muted** (`#767676`): 補足・カテゴリラベル（rgb(118, 118, 118)）
- **Text on Dark** (`#ffffff`): 黒帯バー・CTA 内テキスト

### CTA / Action

- **Black Bar** (`#333333`): 「すべて同意」「拒否」「コンテンツに進む」等の CTA 背景
- **Black Bar Text** (`#ffffff`): 上記 CTA 内テキスト
- **Wishlist BG** (`#ff4500`): EC ウィッシュリスト CTA

### Semantic（補完）

- 実 UI に表面化したエラー・成功色は確認できない。アラート色を追加する場合は **赤（`#c4292d` 推奨）／ 緑（`#2e9e7b`）／ 黄（`#c89a3c`）** をミュートに

---

## 3. Typography Rules

### 3.1 和文フォント

- **メイン（ゴシック W4）**: **Hiragino Kaku Gothic W4 JIS2004（ヒラギノ角ゴ W4 JIS2004）** — 通常の ProN（W3）より若干太い W4 を採用。Apple 系列と同じ選択だが **JIS2004 字形**を明示指定する
- **フォールバック**: システム sans-serif

JIS2004 字形指定は、漢字の細かな字形差（鴎 vs 鷗、葛 vs 葛 等）を意識した書体指定。文化財・美術系に多い徹底度。

### 3.2 欧文フォント

- **メイン**: **HelveticaLTPro（カスタムライセンス / Linotype Helvetica）** — Helvetica の最新リリース系
- **第2候補**: **HelveticaNeueLTPro** — Helvetica Neue の Linotype 版
- **フォールバック**: システム sans-serif

### 3.3 font-family 指定

実サイトの実測値（**全要素で同一の font-family**）:

```css
font-family: HelveticaLTPro, HelveticaNeueLTPro,
  "Hiragino Kaku Gothic W4 JIS2004",
  sans-serif;
```

**フォールバックの考え方**:
- **欧文 HelveticaLTPro を先頭** — ASCII 文字を Helvetica で組む
- 和文は **ヒラギノ角ゴ W4 JIS2004**（W3 より太い、字形指定あり）
- AI で再現する場合、HelveticaLTPro は商用ライセンスのため **"Helvetica Neue" / Helvetica / "Hiragino Kaku Gothic ProN" / sans-serif** に簡略化（W4 → W3 の代替）

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・お知らせページ、2026-05-07 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Section h2 | **20px** | **700** | 24px (×1.2) | normal | `#333333` / `#ffffff` | "PLEATS PLEASE ISSEY MIYAKE" 等 |
| Lead p | 24px | 400 | 36px (×1.5) | normal | `#333333` | "重要なお知らせ" 大見出し |
| Sub Heading | 18px | 400 | 27px (×1.5) | normal | `#333333` | "REALITY LAB. ISSEY MIYAKE 営業に関する..." |
| Body | 14px | 400 | 21px (×1.5) | normal | `#333333` / `#ffffff` | 本文段落 |
| Nav Link | 16px | 400 | 24px (×1.5) | normal | `#333333` | グローバルナビ |
| Skip Link | 16px | 400 | 24px (×1.5) | normal | `#ffffff` | "コンテンツに進む" |
| Footer Link | 12px | 400 | 18px (×1.5) | normal | `#333333` | "Cookieポリシー" 等 |
| Wishlist CTA | 12px | 400 | 30px (×2.5) | normal | `#ffffff` | "My Wishlist"（オレンジ帯内） |
| Compact Body | 12px | 400 | 14.4px (×1.2) | normal | `#333333` | "続きを見る" |
| Date | 11px | 400 | 16.5px (×1.5) | normal | `#222222` | "2026.03.25" |
| Caption | 11px | 400 | 16.5px (×1.5) | normal | `#333333` | サムネイル下キャプション |
| Notice Mini | 10px | 400 | 10px (×1.0) | normal | `#ffffff` | 黒帯バー内通知 |
| Tag Bold | 10px | 700 | 15px (×1.5) | normal | `#333333` | "オンラインストア" 等のタグ |
| Cookie Btn | 10.8px | 400 | 16.2px (×1.5) | normal | `#ffffff` / `#333333` | "すべて同意" / "詳細設定" |

### 3.5 行間・字間

- **本文の行間**: **1.5**（21 / 14, 36 / 24, 27 / 18）— 欧文寄りのタイト組
- **見出し（h2）の行間**: **1.2**（24 / 20）— 編集デザイン特有のタイトな組
- **小文字の行間**: **1.5** が標準。例外として通知バー（10px / lh 10px = 1.0）
- **letter-spacing**: **全要素 normal（0）**

**ガイドライン**:
- ISSEY MIYAKE の和文は **1.5 倍行間が基本**。2.0 のような広い行間は使わない（編集デザインの締まりを保つ）
- letter-spacing は触らない（HelveticaLTPro と Hiragino W4 のメトリクスをそのまま信頼）
- 日本語サイトとして 1.5 倍はやや欧文寄り — ファッション・カタログ業界の組版言語

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ブラウザ既定の禁則処理に依存
- 商品名（A-POC ABLE / PLEATS PLEASE 等）は欧文中心のため改行は手動 `<br>` 制御

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt / kern を有効化していない** — 詰めない素朴な組
- AI 再現時に詰めを足したい場合のみ、**見出しのみ** `font-feature-settings: "palt"` を限定的に追加

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

ISSEY MIYAKE の CTA は**黒帯バー**と**オレンジ帯バー**の 2 種のみ。

**Primary CTA（"コンテンツに進む" / "すべて同意"）**
- Background: `#333333`
- Text: `#ffffff`
- Padding: `10px 20px`（または `8.1px 13.5px`）
- Border Radius: `0px`
- Font: 16px / weight 400 / letter-spacing normal
- Hover: opacity 0.85（推奨）

**Secondary CTA（"詳細設定" / "拒否"）**
- Background: `transparent` または `#333333`
- Text: `#333333` / `#ffffff`
- Border: `1px solid #333333`（透明背景の場合）
- Padding: `8.1px 13.5px`
- Border Radius: `0px`
- Font: 10.8〜12px / weight 400

**Wishlist CTA（"My Wishlist"）**
- Background: `#ff4500`
- Text: `#ffffff`
- Padding: `0 15px 0 36px`（左にハートアイコン領域）
- Border Radius: `0px`
- Font: 12px / weight 400 / line-height 30px

**Tag Link（"オンラインストア"）**
- Background: `transparent`
- Text: `#333333`
- Font: 10px / weight 700 / line-height 1.5
- Padding: `0`（テキストそのもの）
- 上部に細い区切り線、または周囲にボーダー

**Skip Link（"コンテンツに進む"）**
- Background: `#333333`
- Text: `#ffffff`
- Font: 16px / weight 400 / line-height 24px
- 通常はフォーカス時のみ表示

### Inputs

- Background: `#ffffff` または `#eceeef`
- Border: `1px solid #cccccc`（推奨。実 UI ではほぼ非表示）
- Border (focus): `1px solid #333333`
- Border Radius: `0px`
- Padding: `8px 12px`
- Font: 12px / weight 400 / Helvetica + Hiragino W4
- Color: `#333333`

### Select

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border Radius: `0px`
- Padding: `8px 12px`
- Font: 14px / weight 400 / line-height 21px

### Cards / Product Tiles

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`（写真の四角を尊重）
- Padding: 写真直下にメタ領域 12〜16px
- Shadow: なし（フラット）
- 構造: 商品写真 → ブランド名（10px / weight 700 / "PLEATS PLEASE"） → 商品名（14px / weight 400） → 価格（11px / weight 400）

### Notice Bar（"【重要なお知らせ】"）

- Background: `#464d59`（slate gray）
- Text: `#ffffff`
- Padding: `8px 16px`
- Font: 10px / weight 400 / line-height 1.0
- 全幅に跨る薄いバー

### Header / Nav

- Background: `#ffffff`
- Color: `#333333`
- Padding: `16px 24px`
- Logo "ISSEY MIYAKE" 中央または左、ナビ右、言語切替・検索・ウィッシュリスト・カート右端
- Active 項目は下線または太字

### Footer

- Background: `#ffffff`
- Color: `#333333`（メイン）/ `#767676`（補足）
- Padding: `48px 24px 24px`
- Footer リンク: 12px / weight 400 / line-height 18px

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白 |
| S | 8px | リスト項目間 |
| M | 16px | カード内段落間 |
| L | 24px | カード間 |
| XL | 48px | セクション内余白 |
| XXL | 96px | セクション間 |

### Container

- Max Width: 1440px（推奨）
- Padding (horizontal): mobile 16px / desktop 24〜32px

### Grid

- 商品グリッド: 2 カラム（mobile）→ 3 カラム（tablet）→ 4 カラム（desktop）
- Gutter: 16〜24px

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | 全要素 |

- ISSEY MIYAKE は**全要素で角丸ゼロ**。ボタン・入力欄・カード・写真すべて直角

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・写真・パネル（基本フラット） |
| 1 | `0 1px 2px rgba(0, 0, 0, 0.08)` | ホバー時の薄影（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.1)` | モーダル・ドロップダウン（推奨） |

- ISSEY MIYAKE は**影を最小限**。雑誌的なフラット表現
- カード・モーダルすべて基本フラット
- ホバー演出は opacity 0.85 / 写真ズーム scale(1.05) 等で

---

## 7. Do's and Don'ts

### Do（推奨）

- **font-family は `HelveticaLTPro, HelveticaNeueLTPro, "Hiragino Kaku Gothic W4 JIS2004", sans-serif`**（Web 代替: Helvetica Neue, Helvetica, "Hiragino Kaku Gothic ProN", sans-serif）
- **本文 14px / line-height 1.5 / weight 400** を基準に
- **見出し（h2）は 20px / weight 700 / line-height 1.2** — 編集デザインのタイトな組
- **letter-spacing は全要素 normal**
- **CTA は黒帯（`#333333`）に白文字、または橙帯（`#ff4500`）に白文字**の 2 系統のみ
- **角丸はすべて 0px**
- **影は最小限、基本フラット**
- 補足テキストは `#767676`、本文は `#333333`、日付は `#222222` を使い分ける
- 通知バーは `#464d59`（slate gray）に白文字 10px

### Don't（禁止）

- 角丸（`border-radius` > 0）を使わない
- 本文 letter-spacing に palt / 0.04em 等の詰めを適用しない
- ボタンに `background-color` のグラデーションや影を付けない（フラット原則）
- 純黒 `#000000` を本文に使わない（`#333333` を基本に。日付のみ `#222222`）
- 大型の本文に line-height 1.7〜2.0 を適用しない（編集組のタイトさを保つため 1.5 を厳守）
- カラフルなブランド色を UI 装飾に追加しない（オレンジ #ff4500 は EC ウィッシュリスト専用）
- ヒラギノ ProN（W3）を指定しない — **W4 JIS2004 を厳守**

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769–1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Section h2: 20px → 18px
- Lead p: 24px → 20px
- Sub Heading: 18px → 16px
- Body: 14px 維持
- ナビは drawer ハンバーガーへ切り替え
- 商品グリッド 4 → 2 → 1 カラム

### タッチターゲット

- 最小 44×44px。CTA は padding `12px 24px` 以上を確保
- リンクテキストは行間 24px 以上で十分なヒット領域を確保

### ダークモード

- **常時ライトモード**（白背景 + 黒テキスト）。ダーク切替は提供しない

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff
Text Primary: #333333
Text Date: #222222
Text Muted: #767676
Section Alt BG: #eceeef
Notice Bar BG: #464d59
CTA Black: #333333
Wishlist Orange: #ff4500

Font: HelveticaLTPro, HelveticaNeueLTPro, "Hiragino Kaku Gothic W4 JIS2004", sans-serif
Web Fallback: "Helvetica Neue", Helvetica, "Hiragino Kaku Gothic ProN", sans-serif

Heading h2: 20px / weight 700 / line-height 1.2 / letter-spacing normal
Lead: 24px / weight 400 / line-height 1.5
Sub Heading: 18px / weight 400 / line-height 1.5
Body: 14px / weight 400 / line-height 1.5
Caption: 11px / weight 400 / line-height 1.5
Date: 11px / weight 400 / color #222
Tag Bold: 10px / weight 700 / line-height 1.5

Border Radius: 0px（全要素）
Shadow: none（基本フラット）
font-feature-settings: normal（palt 適用なし）
letter-spacing: normal（全要素）
```

### プロンプト例

```
ISSEY MIYAKE のデザインに従って、商品一覧ページを作成してください。
- 背景: #ffffff（純白）
- フォント: "Helvetica Neue", Helvetica, "Hiragino Kaku Gothic ProN", sans-serif
  （実サイトは "Hiragino Kaku Gothic W4 JIS2004" を使用 — W4 と W3 で印象が変わる）
- letter-spacing は全要素 normal、palt は使わない
- セクション見出し h2: 20px / weight 700 / line-height 1.2 / color #333333（編集組のタイトな行間）
- 本文 p: 14px / weight 400 / line-height 1.5 / color #333333（line-height 1.5 を厳守、1.7 以上にしない）
- リード見出し: 24px / weight 400 / line-height 1.5
- 小見出し: 18px / weight 400 / line-height 1.5
- ブランド名タグ: 10px / weight 700 / line-height 1.5（"PLEATS PLEASE ISSEY MIYAKE" 等）
- 日付: 11px / weight 400 / color #222222
- キャプション: 11px / weight 400 / color #333333
- Primary CTA「カートに追加」: 16px / weight 400 / 白文字 / #333333 背景 / border-radius 0 / padding 10px 20px
- Wishlist CTA: #ff4500 背景 / 白文字 / border-radius 0
- 商品カードは写真直置き、影・ボーダー・角丸なし
- 通知バーは #464d59（slate）背景に 10px 白文字
- カラフルなアクセントは橙 #ff4500 のウィッシュリストのみ
```
