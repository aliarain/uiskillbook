# DESIGN.md — OWNDAYS（オンデーズ）

> OWNDAYS（https://www.owndays.com/jp/ja）のデザイン仕様書。
> メガネ・サングラスの製造小売チェーン。オンラインストアと店舗情報を統合した EC サイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調にしたクリーンな EC レイアウト。プロダクト写真を引き立てるニュートラルな背景に、**リンクブルー `#0094c8`** がナビゲーションとアクションの目印として機能する。装飾を抑え、商品そのものに視線を集める設計
- **密度**: 本文の line-height は 2.0 と非常に広め。letter-spacing も 0.07em と開き気味。日本語 EC としてはかなりゆったりした組版で、長文の商品説明やサービス案内が読みやすい
- **キーワード**: クリーンホワイト、リンクブルー、ジオメトリックサンセリフ、広い行間、プロダクトファースト
- **特徴**:
  - 欧文フォントに **Founders Grotesk（商用 Web フォント）** を最優先配置。ジオメトリックサンセリフ体で、ブランドのモダンかつクリーンな印象を規定
  - 和文は **heisei-kaku-gothic-std（平成角ゴシック Std、Adobe Fonts）** にフォールバック。角ゴシックの安定感がある
  - **欧文フォントが先頭**の font-family 構成。欧文部分は Founders Grotesk のグリフ、和文部分は平成角ゴシックに切り替わる
  - ブランドカラーは **`#0094c8`（やや緑寄りのブルー）**。リンク、ナビゲーション、ホバー等に一貫して使用
  - CTA ボタンは **ダークグレー `#535353`**。純黒を避け、落ち着いた押しやすさを演出
  - 背景に **ウォームベージュ `#f7f5f4`** や **ライトグレー `#f8f8f8`** を使い分け、白一色にならない奥行き
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Link Blue** (`#0094c8`): メインのブランドアクセントカラー。ナビゲーションリンク、テキストリンク、ホバー状態に使用。CSS 変数 `--Link-Blue` で定義
- **Gold Badge** (`#c09411`): ゴールドメンバーシップやプレミアム商品のアクセント

### CTA / Buttons

- **Filter Button (Dark Gray)**: 背景 `#535353` / 文字 `#ffffff` / radius `10px` / フィルタ・アクション系
- **Login Button (Pill)**: 背景 `transparent` / 文字 `#000000` / border `1px solid #000000` / radius `160px`（pill）
- **Sort Button (White)**: 背景 `#ffffff` / 文字 `#000000` / radius `10px`

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#000000` | 見出し・主要テキスト |
| Dark Gray CTA | `#535353` | フィルタボタン・アクションボタン |
| Dark Charcoal | `#666666` | 副次テキスト・アイコン |
| Medium Gray | `#999999` | プレースホルダー・無効テキスト |
| Pagination Active | `#d9d9d9` | ページネーションドットのアクティブ状態 |
| Surface Gray | `#f2f2f2` | カード面・セクション区切り |
| Warm Beige | `#f7f5f4` | プロダクトカード背景・セクション面 |
| Light Gray BG | `#f8f8f8` | ページ背景のバリエーション |
| Footer BG | `#f4f4f4` | フッター背景 |
| White | `#ffffff` | メインページ背景 |

### Accent

- **Brown Accent** (`#865928`): 素材感や高級ラインの強調
- **Gold** (`#c09411`): メンバーシップ・プレミアムバッジ

### Overlay

- **Modal Overlay**: `rgba(0, 0, 0, 0.6)`

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。EC 向けに推奨する補完値:

- **Danger**: `#dc2626` — エラー・在庫切れ
- **Success**: `#16a34a` — カート追加完了・在庫あり
- **Warning**: `#d97706` — 残りわずか

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **heisei-kaku-gothic-std（平成角ゴシック Std）** — Adobe Fonts のフォント。Founders Grotesk のフォールバックとして和文を担当
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Founders Grotesk** — ジオメトリックサンセリフ。Klim Type Foundry の商用 Web フォント。ブランドの視覚的アイデンティティの核
- フォールバックに `sans-serif`（generic family）

### 3.3 font-family 指定

```css
/* 全要素共通（body, h2〜h4, p, a, span, button） */
font-family: "Founders Grotesk", heisei-kaku-gothic-std, sans-serif;

/* チャットウィジェット（別系統） */
font-family: "Hiragino Kaku Gothic ProN", メイリオ, Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- **欧文フォントを先頭に置く構成**。Founders Grotesk のラテン文字グリフを優先し、和文は heisei-kaku-gothic-std にフォールバック
- Adobe Fonts ライセンス上 `use.typekit.net` 経由でしか配信されないため、未契約環境では即座に `sans-serif` へフォールバック
- チャットウィジェットはサードパーティ製で独自のフォントスタック

> **代替フォント注記**: Founders Grotesk は商用 Web フォントのため、デザインのプレビューや社外資料で再現できない場合がある。欧文代替として **DM Sans**（Google Fonts）を使用すると、ジオメトリックサンセリフの印象が近い。heisei-kaku-gothic-std も Adobe Fonts のため、和文代替として **Noto Sans JP** を使用する（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 (EN) | Founders Grotesk | 32px | 600 | 26–54px (×0.81–1.69) | 0.32px (0.01em) | `#000000` | 英語セクション見出し |
| Section H2 (JP) | heisei-kaku-gothic-std | 25px | 700 | 42–54px (×1.68–2.16) | — | `#000000` | 日本語セクション見出し |
| Service H2 | heisei-kaku-gothic-std | 20px | 700 | 42px (×2.1) | — | `#000000` | サービスタイトル |
| H3 | Founders Grotesk | 24px | 600 | 30px (×1.25) | 1.05px (0.044em) | `#000000` | サブセクション見出し |
| H3 Slider | — | 16px | 700 | 28.8px (×1.8) | — | `#ffffff` | スライダー上のタイトル（白文字） |
| H3 Product Sub | Founders Grotesk | 16px | 400 | 20px (×1.25) | 0.8px (0.05em) | `#000000` | 商品サブタイトル |
| H4 | — | 14px | 400–600 | 16.5–17.5px (×1.18–1.25) | — | `#000000` | 小見出し・ラベル |
| Body | Founders Grotesk / heisei-kaku-gothic-std | 14px | 400 | 28px (×**2.0**) | 1px (0.07em) | `#000000` | 本文 |
| Button | — | 14px | 500 | — | — | varies | CSS 変数 `--btn-font-size: 14px; --btn-font-weight: 500` |
| Caption | — | 12px | 400 | 24px (×2.0) | — | `#666666` / `#999999` | 補足・注釈 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `2.0`（28px / 14px）— 日本語 EC サイトとしてはかなり広い
- **日本語見出し (25px)**: `1.68〜2.16`（42〜54px / 25px）— 見出しも広めの行間を維持
- **英語見出し (32px)**: `0.81〜1.69`（26〜54px / 32px）— コンテキストで変動
- **H3 (24px)**: `1.25`（30px / 24px）— タイトめ
- **スライダー見出し (16px)**: `1.8`（28.8px / 16px）

**字間 (letter-spacing)** — 実測:
- **本文 (14px)**: `0.07em`（1px / 14px）— 和文の可読性を重視した広めのトラッキング
- **H3 (24px)**: `0.044em`（1.05px / 24px）
- **H3 Product Sub (16px)**: `0.05em`（0.8px / 16px）
- **英語見出し (32px)**: `0.01em`（0.32px / 32px）— 欧文はほぼ詰めない
- **見出し全般**: 負のトラッキングは使用せず、正の値で統一

**ガイドライン**:
- 日本語本文は **line-height 2.0 + letter-spacing 0.07em** が OWNDAYS の基本リズム。かなり開放的な組版
- 見出しも行間を詰めすぎず、全体にゆとりある印象を維持
- 負のトラッキングは一切使わない。本文も見出しも正のトラッキングで統一するのが特徴

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語・URL の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- 商品名やブランド名は折り返さないよう `white-space: nowrap` を個別適用

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Founders Grotesk のデフォルトメトリクスに任せ、letter-spacing で調整する方針
- 和文の `palt` を適用しないクリーンなデフォルトレンダリング

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Filter Button（ダークグレー）** — 商品フィルタ・アクション系
- Background: `#535353`
- Text: `#ffffff`
- Padding: `10px 20px`
- Border Radius: `10px`
- Font: 14px, weight 500
- Border: none

**Login Button（ピルアウトライン）** — ログイン・会員登録
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `8px 24px`
- Border Radius: `160px`（pill）
- Font: 14px, weight 500

**Sort Button（白）** — ソート・並び替え
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #d9d9d9`
- Padding: `8px 16px`
- Border Radius: `10px`
- Font: 14px, weight 500

**Text Link** — ナビゲーション・本文中のリンク
- Background: transparent
- Text: `#0094c8`（Link Blue）
- Padding: `0`
- Font: 14px, weight 400
- Border: none（必要に応じて underline）

**Pagination Dot** — カルーセル・ページネーション
- Background (active): `#d9d9d9`
- Background (inactive): `transparent`
- Border: `1px solid #d9d9d9`
- Size: `8px × 8px`
- Border Radius: `0px`（正方形）

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #d9d9d9`
- Border (focus): `1px solid #0094c8`（Link Blue でフォーカスを示す）
- Border (error): `1px solid #dc2626`
- Border Radius: `4px`
- Padding: `10px 14px`
- Font: "Founders Grotesk", heisei-kaku-gothic-std, sans-serif, 14px, weight 400
- Height: `44px`

### Cards / Surfaces

**Product Card**
- Background: `#f7f5f4`（Warm Beige）または `#ffffff`
- Border: なし
- Border Radius: `0px`（エッジを効かせたクリーンな矩形）
- Shadow: なし（フラット）

**Section Surface**
- Background: `#f8f8f8`（Light Gray）または `#f2f2f2`（Surface Gray）
- Border: なし
- Border Radius: `0px`
- Padding: `40px 24px`

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #f2f2f2`
- Position: `fixed top: 0`（推奨）

### Footer

- Background: `#f4f4f4`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白・ページネーション間 |
| M | 16px | カード内の段落間・ボタンの横余白 |
| L | 24px | カード間の余白・セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーローバナー上下のゆとり |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | プロダクトカード・セクション面 |
| Small | 4px | 入力欄 |
| Medium | 10px | フィルタ／ソートボタン |
| Pill | 160px / 9999px | ログインボタン |

### Grid

- プロダクトグリッド: 2〜4 カラム（レスポンシブ）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・フィルタパネル |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.12)` | モーダル（overlay `rgba(0,0,0,0.6)` と併用） |

- 実測ではほぼ全要素 `box-shadow: none` のフラットデザイン
- 階層感はサーフェスの色差（`#ffffff` vs `#f8f8f8` vs `#f2f2f2` vs `#f7f5f4`）で表現
- 影を使う場合も控えめな透明度で

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文フォントは **Founders Grotesk を最優先**、和文は heisei-kaku-gothic-std にフォールバック
- 本文の line-height は **2.0** を基本にする（28px / 14px）。OWNDAYS の開放的な組版の核
- 本文の letter-spacing は **0.07em** で広めに取る
- リンク色は **`#0094c8`（Link Blue）** で統一する
- CTA ボタンは **`#535353`（ダークグレー）** を使い、商品写真を邪魔しない
- サーフェスは **`#f7f5f4`（ウォームベージュ）** や **`#f8f8f8`（ライトグレー）** で層を作る
- ログイン系のボタンは **pill 形状**（radius 160px）のアウトラインスタイル
- プロダクトカードはボーダーもシャドウもなく、**背景色の切り替えだけ**で区切る

### Don't（禁止）

- **純黒 `#000000` を CTA ボタン背景に使わない** — OWNDAYS の押しは `#535353` のソフトなダークグレー
- 本文に **`line-height: 1.5` 以下**を使わない（OWNDAYS の 2.0 の余白感が失われる）
- **letter-spacing を 0 にしない** — 本文は 0.07em、見出しも正のトラッキング
- Link Blue `#0094c8` を **ボタン背景色に使わない** — リンクテキスト専用の色
- **角丸 `9999px` を通常のアクションボタンに使わない** — pill はログイン等の認証系 UI 用。フィルタ・ソートは `10px`
- 欧文に **ゴシック体（Noto Sans JP 等）を先頭指定しない** — 欧文は Founders Grotesk が先
- プロダクトカードに **box-shadow を付けない** — フラットにして商品写真を主役にする
- **ウォームベージュ `#f7f5f4` とクールグレー `#f3f4f6` を混在させない** — 色温度を揃える

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 576px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop SM | ≤ 992px | 小デスクトップ |
| Desktop | > 1200px | フルデスクトップレイアウト |

### モバイル時の調整

- セクション H2 (JP): 25px → 18〜20px
- セクション H2 (EN): 32px → 24px
- 本文サイズ: 14px を維持（line-height 2.0 も維持）
- プロダクトグリッド: 4列 → 2列
- ナビはハンバーガーメニュー化

### タッチターゲット

- CTA ボタン: 高さ 44px 以上
- ページネーションドット: 8px（視覚的には小さいが、タップ領域を padding で 44px 確保推奨）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Link Blue (リンク・ナビ): #0094c8
Dark Gray CTA: #535353
Gold Badge: #c09411
Black (見出し): #000000
Dark Charcoal (副次テキスト): #666666
Medium Gray (プレースホルダー): #999999
Surface Gray: #f2f2f2
Warm Beige: #f7f5f4
Light Gray BG: #f8f8f8
Footer BG: #f4f4f4
White: #ffffff
Overlay: rgba(0, 0, 0, 0.6)

Font: "Founders Grotesk", heisei-kaku-gothic-std, sans-serif
（Founders Grotesk 不在時の欧文代替: DM Sans）
（heisei-kaku-gothic-std 不在時の和文代替: Noto Sans JP）

Body Size: 14px / line-height 2.0 / weight 400 / letter-spacing 0.07em
Section H2 (JP): 25px / line-height 1.68 / weight 700
Section H2 (EN): 32px / line-height varies / weight 600 / letter-spacing 0.01em
H3: 24px / line-height 1.25 / weight 600 / letter-spacing 0.044em
H4: 14px / weight 400–600
Caption: 12px / line-height 2.0

Border Radius: 0px（カード）/ 4px（入力欄）/ 10px（フィルタボタン）/ 160px（ログインピル）
Shadow: 基本 none。階層はサーフェスの色差で表現
```

### プロンプト例

```
OWNDAYS のデザインに従って、メガネ EC サイトの商品一覧ページを作成してください。
- フォント: "Founders Grotesk", heisei-kaku-gothic-std, sans-serif
  （代替: "DM Sans", "Noto Sans JP", sans-serif）
- セクション見出し (日本語): 25px / weight 700 / line-height 1.68 / color #000000
- セクション見出し (英語): 32px / weight 600 / line-height 1.25 / letter-spacing 0.01em
- 本文: 14px / weight 400 / line-height 2.0 / letter-spacing 0.07em / color #000000
- 副次テキスト: 14px / weight 400 / color #666666
- リンクテキスト: color #0094c8（Link Blue）
- フィルタボタン: 背景 #535353 / 白文字 / radius 10px / padding 10px 20px
- ソートボタン: 背景 白 / 黒文字 / border 1px solid #d9d9d9 / radius 10px
- プロダクトカード: 背景 #f7f5f4 / border なし / radius 0px / shadow なし
- セクション背景: #f8f8f8 または #f2f2f2
- ページ背景: #ffffff
- フッター: 背景 #f4f4f4
- pill ボタンはログイン等のみ（radius 160px, border 1px solid #000, 透明背景）
- CTA に #0094c8 を使わない（リンクテキスト専用色）
- box-shadow は基本 none。階層はサーフェスの色差で表現
```
