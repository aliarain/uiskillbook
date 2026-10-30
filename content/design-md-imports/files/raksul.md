# DESIGN.md — RAKSUL（ラクスル）

> RAKSUL（https://raksul.com/）のデザイン仕様書。
> クラウド型の印刷・物流プラットフォーム。名刺・チラシ・ポスター等の印刷をネットで発注できる EC マーケットプレイス。
> 実サイトの computed style 実測（2026-06-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景に **ブルー `#0264bf` のログインボタン** と **オレンジ `#e7560d` のサインアップ CTA** を併置する、実用性重視の EC マーケットプレイス。ピンク `#e4007e` のおすすめバッジが商品カード上に多数配置され、購買導線を補強する
- **密度**: フォントサイズ基準が 14px、line-height 1.5 とコンパクト。サイドバー＋メガメニューの密集ナビで多カテゴリの印刷商品を一覧させる EC 型の情報密度
- **キーワード**: 実用 EC、コンパクト密度、3色アクセント（ブルー／オレンジ／ピンク）、Roboto + ヒラギノの堅実スタック、角丸 4px のフラットボタン
- **特徴**:
  - **3つのアクセント色を明確に役割分担**: ブルー `#0264bf`（ログイン・既存ユーザー導線）、オレンジ `#e7560d`（新規会員登録 CTA）、ピンク `#e4007e`（おすすめバッジ）
  - 欧文フォントに **Roboto** を最優先指定。和文は **Hiragino Sans** → **Hiragino Kaku Gothic ProN** → **Meiryo** のシステムフォールバック。Web フォントは使わない堅実な構成
  - ボタンの角丸は **4px** と控えめ。ピル型（9999px）は使わない
  - 見出しの weight は **600** が基本。700 はフッターの小見出しのみ
  - `letter-spacing` はほぼ `normal`（明示的なトラッキング調整なし）。`font-feature-settings`（palt/kern）も未使用
  - コンテナ幅 **1156px** は標準的な EC サイトよりやや広い
  - セクション背景に `#fafafa` を多用し、白との微差でカード領域を区切る
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Action

| Token | hex | 役割 |
|-------|-----|------|
| **Primary Blue** | `#0264bf` | ログインボタン背景、サービスナビ active テキスト、主要アクションの色 |
| **CTA Orange** | `#e7560d` | "新規会員登録" ボタン背景。コンバージョン最優先のアクション色 |
| **Badge Pink** | `#e4007e` | "おすすめ" 推奨バッジ背景（35 件出現）。商品カードの注目マーカー |
| **Badge Orange** | `#ee4a0e` | "NEW" 新着バッジ背景（10 件出現）。CTA Orange とは別の、より赤寄りのオレンジ |
| **Link Blue** | `#3fa2f3` | ドメインナビ（印刷・集客・物流等のサービス切替リンク）のテキスト色 |
| **Info Blue** | `#00a0e8` | 補助的なブルーアクセント（アイコン・リンク等） |

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| **Text Primary** | `#222222` | 本文テキスト・見出し |
| **Text Secondary** | `#636363` | 補助テキスト・カテゴリラベル |
| **Icon BG** | `#efefef` | アイコンボタンの背景 |
| **Surface** | `#fafafa` | カード領域・セクション背景（72 件出現） |
| **Divider** | `#dddddd` | 区切り線・セパレータ（12 件出現） |
| **Search Filter BG** | `#a6afba` | 検索バーのフィルタボタン背景 |
| **Search Highlight** | `#f2faff` | 検索ハイライト背景 |
| **Footer Related BG** | `#ecedef` | フッター関連サービスセクションの背景 |
| **Dark Badge** | `#222222` | 暗い背景のバッジ |
| **White** | `#ffffff` | ページ背景・カード面 |

### Semantic（推奨値）

実サイトのトップページには明確なエラー／成功状態の色は表面化していない。EC フォームで推奨する補完値:

- **Danger**: `#dc2626` — エラーメッセージ、入力エラー枠
- **Success**: `#16a34a` — 完了通知、在庫あり表示
- **Warning**: `#d97706` — 注意喚起、納期アラート

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Hiragino Sans**（Apple 環境）→ **Hiragino Kaku Gothic ProN**（旧 macOS）→ **Meiryo**（Windows）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- Web フォントは使用していない。OS のシステムフォントに依存する構成

### 3.2 欧文フォント

- **サンセリフ**: **Roboto** を最優先。font-family の先頭に配置し、欧文部分を Roboto で描画
- **フォールバック**: **Arial** → `sans-serif`
- セリフ・等幅は使用しない

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN",
  Meiryo, Arial, sans-serif;

/* 一部ナビ要素（Roboto なし） */
font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  Meiryo, Arial, sans-serif;
```

**フォールバックの考え方**:
- Roboto（Google Fonts 由来）を先頭に置き、欧文グリフの統一感を優先。和文は Roboto に含まれないため自動的に次の和文フォントへフォールバック
- 一部のナビ要素では Roboto を含まない和文優先スタックが使われている
- Arial は Windows 環境での最終フォールバック。Helvetica Neue は含まない

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 | Roboto + Hiragino | 20px | **600** | 1.33 | normal | `#222222` | セクション見出し |
| Footer H2 | Roboto + Hiragino | 16px | **700** | 1.33 | 0.05em | `#222222` | フッター見出し（唯一の 700） |
| Category H2 | Roboto + Hiragino | 12px | 600 | 1.33 | 0.02em | `#222222` | ナビ内カテゴリ見出し |
| Related H2 | Roboto + Hiragino | 14px | 600 | 1.33 | 0.05em | `#636363` | 関連サービス見出し |
| Nav Title P | Roboto + Hiragino | 13px | 600 | 1.5 | normal | `#222222` | ナビカテゴリタイトル |
| Body | Roboto + Hiragino | 14px | 400 | 1.5 | normal | `#222222` | 本文（サイトの基準サイズ） |
| Body P | Roboto + Hiragino | 13px | 400 | 1.5 | normal | `#222222` | 本文（やや小さめ） |
| Domain Nav A | Roboto + Hiragino | 14px | 400 | 1.0 | normal | `#3fa2f3` | ドメインナビリンク |
| Button Label | Roboto + Hiragino | 14px | 600 | — | normal | `#ffffff` | ボタン内テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (13〜14px)**: `1.5`（21px / 14px）— EC として標準的な行間
- **見出し (12〜20px)**: `1.33`（26.66px / 20px）— 全見出しで統一
- **ナビリンク**: `1.0`（14px / 14px）— 一行分の高さ

**字間 (letter-spacing)** — 実測:
- **本文**: `normal`（明示的なトラッキングなし）
- **見出し（大）**: `normal`
- **フッター見出し・関連サービス見出し**: `0.05em`（やや広め）
- **カテゴリ見出し**: `0.02em`（微量の広がり）

**ガイドライン**:
- RAKSUL は letter-spacing をほぼ調整しない。フォントのデフォルトメトリクスに委ねるスタイル
- 見出しの line-height `1.33` と本文の `1.5` の2段階のみで構成。シンプルで再現しやすい
- フッターの小見出しだけ `0.05em` と `weight 700` で例外的に強調

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- EC 商品名や印刷仕様の長い文字列が折り返される前提の設計
- ナビゲーション内のラベルは `white-space: nowrap` で折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` の明示的有効化は確認されなかった
- Roboto + Hiragino のデフォルトメトリクスをそのまま使用する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary Login（ブルー）** — "ログイン"
- Background: `#0264bf`
- Text: `#ffffff`
- Padding: `4.8px 12px`
- Border Radius: `4px`
- Font: Roboto + Hiragino, 14px, weight 600
- Border: none

**CTA Signup（オレンジ）** — "新規会員登録"
- Background: `#e7560d`
- Text: `#ffffff`
- Padding: `4.8px 8px`
- Border Radius: `4px`
- Font: Roboto + Hiragino, 14px, weight 600
- Border: none

**Search Filter** — 検索バー内のフィルタ切替
- Background: `#a6afba`
- Text: `#ffffff`
- Padding: `12.8px`
- Border Radius: `3px 0 0 3px`（左端のみ角丸）
- Font: Roboto + Hiragino, 14px, weight 600

**Icon Button** — ナビ内のアイコンボタン
- Background: `#efefef`
- Text: `#222222`
- Padding: `8px`
- Border Radius: `4px`
- Font: Roboto + Hiragino, 14px, weight 400

**Service Menu Link** — サイドバーのサービスメニュー
- Background: `#ffffff`
- Text: `#0264bf`
- Padding: `12.8px 8px`
- Font: Roboto + Hiragino, 16px, weight 400
- Border: none

### Badges

**おすすめバッジ（ピンク）**
- Background: `#e4007e`
- Text: `#ffffff`
- Padding: `2px 6px`
- Border Radius: `2px`
- Font: 11〜12px, weight 600

**NEW バッジ（オレンジ）**
- Background: `#ee4a0e`
- Text: `#ffffff`
- Padding: `2px 6px`
- Border Radius: `2px`
- Font: 11〜12px, weight 600

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Border (focus): `1px solid #0264bf`（推奨: プライマリブルー）
- Border Radius: `4px`
- Padding: `8px 12px`
- Font: Roboto + Hiragino, 14px, weight 400
- Height: `40px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#fafafa`（セクション背景）
- Border: `1px solid #dddddd` または border なし
- Border Radius: `4px`
- Padding: `16px`
- Shadow: 基本なし（フラット）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #dddddd`（推奨）
- Position: `fixed` または `sticky`
- ドメインナビ（印刷・集客・物流…）がヘッダー上部に横並び

### Footer

- Background: `#ffffff`
- 関連サービスセクション: `#ecedef`
- Border Top: `1px solid #dddddd`
- Padding: `32px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内の縦余白、アイコンと文字の間 |
| S | 8px | ボタン内の縦余白、カード内の要素間 |
| M | 16px | カード内の段落間、セクション内の要素間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 32px | フッターの内側余白 |
| XXL | 48px | セクション間の縦余白 |

### Container

- Max Width: `1156px`（CSS Custom Property `--width-container-outer` で定義）
- Padding (horizontal): `16px`（mobile）/ `24px`（desktop）

### Grid

- サイドバー + メインコンテンツの 2 カラムが基本（EC マーケットプレイス型）
- 商品カード: 4〜5 カラムのグリッド配置
- Gutter: `16px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 2px | バッジ |
| Medium | 4px | ボタン・カード・入力欄 |
| Edge | 3px | 検索バーの片側角丸 |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ドロップダウンメニュー・メガメニュー |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測では `box-shadow` の使用は控えめ。EC 商品カードも基本フラット
- 階層は **背景色の差** (`#ffffff` vs `#fafafa`) と **ボーダー** (`#dddddd`) で表現する
- メガメニューのドロップダウンには影が付く程度

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Roboto を先頭**に置き、Hiragino Sans → Hiragino Kaku Gothic ProN → Meiryo の順でフォールバックする
- 本文は **14px / line-height 1.5 / weight 400** を基本にする（16px ではなく 14px が RAKSUL の基準）
- 見出しの weight は **600** を基本にする（700 はフッター小見出しのみ）
- ログイン系アクションは **ブルー `#0264bf`**、新規登録は **オレンジ `#e7560d`** で色分けする
- おすすめマーカーは **ピンク `#e4007e`**、新着マーカーは **オレンジ `#ee4a0e`** で使い分ける
- ボタンの角丸は **4px** で統一する（ピル型にしない）
- セクション背景は **`#fafafa`** と白 `#ffffff` の微差で階層を作る
- 区切り線は **`#dddddd`** を使う

### Don't（禁止）

- 本文サイズを **16px に拡大しない**（RAKSUL は 14px ベースの密な EC レイアウト）
- ボタンに **ピル型 `border-radius: 9999px`** を使わない（4px の角丸が基本）
- ログインボタンにオレンジを使わない。**オレンジは新規登録専用**
- おすすめバッジにオレンジを使わない。**ピンク `#e4007e` がおすすめ**、**オレンジ `#ee4a0e` は NEW 専用**
- `letter-spacing` に負の値を使わない（RAKSUL は詰め組みをしない）
- テキスト色に純粋な `#000000` を使わない（RAKSUL のテキストは `#222222`）
- 見出しに `weight 700` を多用しない（600 が基本、700 はフッターの例外のみ）
- 過度な `box-shadow` でカードを浮かせない（フラットで背景色の差で階層を表現）

---

## 8. Responsive Behavior

### Breakpoints（推奨）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。サイドバーを格納、1カラム |
| Tablet | 768px〜1023px | タブレット。サイドバー折りたたみ |
| Desktop | ≥ 1024px | デスクトップ。サイドバー＋メインの2カラム |
| Wide | ≥ 1156px | コンテナ幅上限に到達。左右に余白 |

### モバイル時の調整

- セクション H2: 20px → 18px
- 本文サイズは 14px を維持（元から小さいため縮小しない）
- サイドバーナビはハンバーガーメニュー化
- 商品カードは 2 カラム → 1 カラム
- ドメインナビ（印刷・集客・物流…）は横スクロールまたは折りたたみ

### タッチターゲット

- CTA ボタン: 高さ 40px 以上（padding + font size で確保）
- バッジ: タップ用ではなく装飾。タップ領域はカード全体

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Blue (Login): #0264bf
CTA Orange (Signup): #e7560d
Badge Pink (おすすめ): #e4007e
Badge Orange (NEW): #ee4a0e
Link Blue (Domain Nav): #3fa2f3
Info Blue: #00a0e8
Text Primary: #222222
Text Secondary: #636363
Surface: #fafafa
Divider: #dddddd
Icon BG: #efefef
Search Filter BG: #a6afba
White: #ffffff

Font: Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif

Body Size: 14px / line-height 1.5 / weight 400 / letter-spacing normal
Heading Size: 20px / line-height 1.33 / weight 600 / letter-spacing normal
Caption: 13px / line-height 1.5 / weight 400
Small: 12px / line-height 1.33 / weight 600

Border Radius: 4px（ボタン・カード）/ 2px（バッジ）
Shadow: 基本 none。階層は #fafafa サーフェスと #dddddd ボーダーで表現
```

### プロンプト例

```
RAKSUL のデザインに従って、印刷商品の一覧ページを作成してください。
- フォント: Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif
- セクション見出し: 20px / weight 600 / line-height 1.33 / color #222222
- 本文: 14px / weight 400 / line-height 1.5 / color #222222
- 補助テキスト: 13px / weight 400 / line-height 1.5 / color #636363
- ログインボタン: 背景 #0264bf / 白文字 / border-radius 4px / padding 4.8px 12px / 14px / weight 600
- 新規登録 CTA: 背景 #e7560d / 白文字 / border-radius 4px / padding 4.8px 8px / 14px / weight 600
- おすすめバッジ: 背景 #e4007e / 白文字 / border-radius 2px / padding 2px 6px
- NEW バッジ: 背景 #ee4a0e / 白文字 / border-radius 2px / padding 2px 6px
- カード背景: 白 #ffffff、セクション背景は #fafafa
- ボーダー: #dddddd の 1px solid
- box-shadow は基本 none。背景色の差で階層を表現
- テキスト色は #222222（純黒 #000000 は使わない）
- ボタンは角丸 4px（ピル型 9999px にしない）
- letter-spacing は normal（詰め・広げの調整をしない）
- コンテナ幅: 1156px
```
