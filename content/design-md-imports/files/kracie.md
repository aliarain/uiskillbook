# DESIGN.md — Kracie（クラシエ）

> Kracie（https://www.kracie.co.jp/）のデザイン仕様書。
> 漢方薬・日用品・化粧品・食品を手がける総合消費財メーカー。タグライン「夢中になれる明日」。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウォームクリーム `#fafaef` の柔らかい地色に、**ビビッドイエロー `#ffd500` のピル CTA** をアクセントに配置。ヒーローは全画面ビデオ背景（ダーク `#151b17`）で映像訴求。多彩なブランドカラー（ピンク・ブルー・ライム・オレンジ・パープル）が食品・化粧品・薬品の事業ドメインごとに使い分けられ、コーポレートサイト全体としてはカラフルで親しみやすい印象
- **密度**: 本文 13px / line-height 1.8 でコンパクトながら行間は広め。見出しの line-height は 1.3 でタイト。情報密度は中程度で、セクション間の余白でゆとりを持たせている
- **キーワード**: ウォームクリーム、ビビッドイエロー、マルチカラー、UD新ゴ（ユニバーサルデザイン）、消費財の親しみやすさ
- **特徴**:
  - 和文フォントに **UDShinGoPr（UD新ゴPr、Morisawa）** を採用。ユニバーサルデザインに配慮した可読性の高いゴシック体で、消費財メーカーとしての公益性を表現
  - **ブランドカラーは `#ffd500`（ビビッドイエロー）**。ハンバーガーメニューボタン、CTA ボタン「お問い合わせフォームへ」、カルーセルのアクティブドット等に統一して使用
  - **ページ背景は `#fafaef`（ウォームクリーム）**。純白ではなく、わずかに黄味がかったオフホワイトで温かみのある印象
  - ヘッダーは `#ffffff`（純白）で、ページ背景との微妙なコントラストで浮き上がりを作る
  - フッターは `#272727`（ダークグレー）背景に白文字。コーポレートの落ち着いた印象
  - ブランドサイト群では `#ffa8e2`（ピンク）`#248cff`（ブルー）`#b2ff53`（ライムグリーン）`#ffa646`（オレンジ）`#6c55f0`（パープル）等のカラフルな配色を事業ドメインごとに使い分け
  - `font-feature-settings: "palt"` をグローバル（body）に適用。和文全体にプロポーショナル字詰めが効いている
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Yellow** (`#ffd500`): メインのブランドカラー。主要 CTA「お問い合わせフォームへ」の背景、ハンバーガーメニューボタン背景、カルーセルアクティブドット。`uniqueBackgrounds` で最多 74 件出現
- **Brand Pink** (`#ffa8e2`): ブランドサイト・キャンペーングラフィックの装飾色。29 件出現
- **Brand Blue** (`#248cff`): ブランドサイト・キャンペーンで使用される差し色。12 件出現
- **Brand Lime** (`#b2ff53`): キャンペーン・プロモグラフィックの差し色。12 件出現
- **Brand Orange** (`#ffa646`): キャンペーン・プロダクトカテゴリの差し色
- **Brand Purple** (`#6c55f0`): キャンペーン・プロダクトカテゴリの差し色

### CTA / Buttons

- **Primary CTA**: 背景 `#ffd500` / 文字 `#272727` / radius `50px`（pill）/ padding `15px 20px` / 15px / weight 700 / letter-spacing 0.05em
- **Nav Pill**: 背景 `transparent` または `#f8f8f8` / 文字 `#272727` / radius `50px`（pill）/ padding `15px` / 13px / weight 700
- **Hamburger Button**: 背景 `#ffd500` / radius `50%`（circle）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#272727` | (39, 39, 39) | 見出し・本文テキスト |
| Text Secondary | `#585858` | (88, 88, 88) | 補足テキスト・キャプション |
| Text Dark (Modal) | `#2b2e38` | (43, 46, 56) | モーダル／重要なお知らせのテキスト |
| Light Gray | `#f8f8f8` | (248, 248, 248) | ナビアイテムの背景、検索入力の背景 |
| Warm Beige | `#f0f0e2` | (240, 240, 226) | セクション面の背景（ブランドサイト群） |
| Page Background | `#fafaef` | (250, 250, 239) | ページ背景（body） |
| Carousel Inactive | `#e3e3e3` | (227, 227, 227) | カルーセルドット（非アクティブ） |
| Border Gray | `#b7b7b7` | (183, 183, 183) | 閉じるボタンの区切り |
| Footer BG | `#272727` | (39, 39, 39) | フッター背景 |
| Header BG | `#ffffff` | (255, 255, 255) | ヘッダー背景 |
| White | `#ffffff` | (255, 255, 255) | カード背景、検索入力（モバイル） |
| Hero Dark | `#151b17` | (21, 27, 23) | ビデオヒーロー背景 |

### Semantic（実測未確認・推奨値）

実サイトのコーポレートトップにはエラー／成功色の表面化がない。推奨する補完値:

- **Danger**: `#dc2626` 程度のレッド
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **UDShinGoPr（UD新ゴPr）** を最優先。Morisawa のユニバーサルデザイン書体
- **フォールバック**: `Yu Gothic`（Windows）→ `YuGothic` → `游ゴシック体` → `Hiragino Kaku Gothic Pro`（macOS）→ `ヒラギノ角ゴ Pro W3` → `Meiryo UI` → `Meiryo` → `メイリオ` → `Arial` → `Vardana` → `MS PGothic` → `ＭＳ Ｐゴシック`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、フォールバックチェーンの末尾に **Arial** / **Vardana** を配置
- 数字・欧文は UDShinGoPr → Yu Gothic → Arial の順でレンダリング

### 3.3 font-family 指定

```css
/* 見出し（h1〜h3）、ナビ、CTA、フッター */
font-family: UDShinGoPr, "Yu Gothic", YuGothic, 游ゴシック体,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "Meiryo UI", Meiryo, メイリオ, Arial, Vardana,
  "MS PGothic", "ＭＳ Ｐゴシック";

/* body（UDShinGoPr なし — ブラウザが自動継承する場合あり） */
font-family: "Yu Gothic", YuGothic, 游ゴシック体,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "Meiryo UI", Meiryo, メイリオ, Arial, Vardana,
  "MS PGothic", "ＭＳ Ｐゴシック";
```

**フォールバックの考え方**:
- UDShinGoPr（Morisawa Web Fonts）を最優先。Web フォント未配信環境では即座に Yu Gothic → Hiragino へフォールバック
- Yu Gothic を Hiragino より先に置く珍しい構成（多くのサイトは逆）。Windows ユーザーを優先的にケアしている印象
- `sans-serif` の generic family が末尾にない（実装上は `MS PGothic` が最終フォールバック）
- フォールバックチェーンに日本語名と英語名の両方を列挙し、あらゆるブラウザ／OS に対応

> **代替フォント注記**: UDShinGoPr は Morisawa Web Fonts のドメインライセンスのため、デザインのプレビューや社外資料で再現できない場合がある。代替として **Noto Sans JP**（weight 400 / 700）を使用すると、UD 書体特有のオープンカウンターと素直な字形で近い印象が出る。より Morisawa 系に寄せるなら **Zen Kaku Gothic New** も候補。

### 3.4 文字サイズ・ウェイト階層

> 実測値（コーポレートトップページ、2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 (Lv1) | UDShinGoPr | 35px | **700** | 45.5px (x1.3) | 1.75px (0.05em) | `#272727` | 「おすすめ情報」等のセクション大見出し |
| H2 / H3 (Lv2) | UDShinGoPr | 24px | **700** | 31.2px (x1.3) | 1.2px (0.05em) | `#272727` / `#2b2e38` | 「商品に関するお問い合わせ」「お知らせ」等 |
| H2 (Lv3) | UDShinGoPr | 16px | **700** | 20.8px (x1.3) | 0.8px (0.05em) | `#272727` | 「メールでのお問い合わせ」等の小見出し |
| Body | UDShinGoPr | 13px | 400 | 23.4px (x**1.8**) | normal | `#585858` | 本文・説明テキスト |
| Body (Card) | UDShinGoPr | 16px | 400 | 28px (x1.75) | normal | `#272727` | 商品カード内テキスト |
| Nav Link (Desktop) | UDShinGoPr | 13px | **700** | 16.9px (x1.3) | normal | `#272727` | グローバルナビ「企業情報」等 |
| Nav Link (Mobile Main) | UDShinGoPr | 15px | **700** | 22.5px (x1.5) | 0.75px (0.05em) | `#272727` | モバイルメニュー「企業情報」等 |
| Nav Sub (Mobile) | UDShinGoPr | 14px | **700** / 500 | 21px (x1.5) | 0.75px (0.05em) | `#272727` | サブナビ「価値創造の考え方」等 |
| Nav Sub Small | UDShinGoPr | 12px | 500 | 18px (x1.5) | 0.75px (0.05em) | `#272727` | 「クラシエの綜合化」等の小項目 |
| CTA Button | UDShinGoPr | 15px | **700** | 22.5px (x1.5) | 0.75px (0.05em) | `#272727` | 「お問い合わせフォームへ」 |
| Label (Modal) | UDShinGoPr | 16px | 500 | 24px (x1.5) | normal | `#2b2e38` | 「日用品・化粧品」等のフォームラベル |
| Footer | UDShinGoPr | 13px | 500 | 16.9px (x1.3) | normal | `#ffffff` | フッターリンク |
| Logo (H1) | UDShinGoPr | 26px | 400 | 33.8px (x1.3) | normal | `#272727` | ロゴマーク横テキスト |
| Phone Number | UDShinGoPr | 28px | **700** | 42px (x1.5) | 0.75px | `#272727` | 電話番号 |
| Note Small | UDShinGoPr | 10px | 500 | 15px (x1.5) | 0.75px | `#272727` | 「（祝日・窓口休業日を除く）」等 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **本文 (13px)**: `1.8`（23.4px / 13px）-- 日本語本文として読みやすい広め設定
- **カード内テキスト (16px)**: `1.75`（28px / 16px）
- **見出し (16〜35px)**: `1.3`（タイト）-- 全見出しレベルで統一
- **ナビ (13〜15px)**: `1.3`（デスクトップ）/ `1.5`（モバイル）
- **サブナビ (12〜14px)**: `1.5`
- **フッター**: `1.3`

**字間 (letter-spacing)** -- 実測:
- **本文 (13px / 16px)**: `normal`（0）-- palt をグローバル適用しているため、letter-spacing は追加しない
- **見出し (16〜35px)**: `0.05em`（+1.75px / +1.2px / +0.8px）-- **正のトラッキングで統一**
- **モバイルナビ・CTA**: `0.05em` (0.75px)
- **デスクトップナビ**: `normal`

**ガイドライン**:
- 日本語本文は **line-height 1.8 + letter-spacing normal + palt on** がクラシエの基本リズム
- 見出しは **正のトラッキング 0.05em** で一貫。ゆったり読ませる方針（STORES の負のトラッキングとは対照的）
- palt がグローバル適用されているため、letter-spacing を追加で入れなくても和文の字詰めは効いている

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- ヒーローはビデオ背景のため、テキスト改行の手動制御は不要
- ナビゲーション項目は `white-space: nowrap` で改行防止

### 3.7 OpenType 機能

```css
/* body に適用（グローバル） */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰めを **body レベルでグローバル適用**。見出し・本文・ナビ・フッターすべてに継承
- ヘッダーの一部 button / span 要素では `font-feature-settings: normal` に明示リセットされている（video.js コントロール等の外部ライブラリ由来）
- UDShinGoPr は UD 書体のため palt 適用時も可読性が保たれる設計

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（イエローピル）** -- 「お問い合わせフォームへ」
- Background: `#ffd500`
- Text: `#272727`
- Padding: `15px 20px`
- Border Radius: `50px`（ピル）
- Font: UDShinGoPr, 15px, weight 700, letter-spacing 0.05em
- Border: none

**Nav Pill（デスクトップナビ）** -- 「企業情報」「商品情報」等
- Background: `transparent`（通常）/ `#f8f8f8`（hover / active、「採用情報」等）
- Text: `#272727`
- Padding: `15px`
- Border Radius: `50px`（ピル）
- Font: UDShinGoPr, 13px, weight 700
- Border: none

**Hamburger Menu Button**
- Background: `#ffd500`
- Border Radius: `50%`（円形）
- Padding: `1px 6px`

**Carousel Dot（アクティブ）**
- Background: `#ffd500`
- Border Radius: `5px`

**Carousel Dot（非アクティブ）**
- Background: `#e3e3e3`
- Border Radius: `5px`

**Language Switcher** -- 「JP」
- Background: `#f8f8f8`
- Border Radius: `50%`（円形）
- Font: 13px, weight 700

**Product Card Link** -- 商品名カード
- Background: `#ffffff`
- Text: `#272727`
- Padding: `20px`
- Border Radius: `10px`
- Font: UDShinGoPr, 16px, weight 400, line-height 1.75
- Border: none
- Shadow: none

**Banner Card（イエロー帯）** -- 「WE リーグ クラシエカップ」等
- Background: `#ffd500`
- Text: `#272727`
- Padding: `12px`
- Border Radius: `0px`
- Font: UDShinGoPr, 16px, weight 400, line-height 1.75

### Inputs

**Search Input（デスクトップヘッダー）**
- Background: `#f8f8f8`
- Border: none
- Border Radius: `50px`（ピル）
- Font: UDShinGoPr, 13px, weight 400
- Padding: `0px`

**Search Input（モバイルメニュー）**
- Background: `#ffffff`
- Border: none
- Border Radius: `30px`（ピル）
- Font: UDShinGoPr, 16px, weight 500
- Padding: `5px 40px 5px 20px`

### Cards / Surfaces

- **Product Card**: Background `#ffffff`, border-radius `10px`, padding `20px`, shadow none
- **Section Surface**: Background `#fafaef`（ページ背景と同一）または `#f0f0e2`（ウォームベージュ、ブランドサイト群で使用）
- **Nav Dropdown**: Background `#f8f8f8`, padding `12px 15px`
- **Contact Category Tab**: Background `#e3e3e3`（非アクティブ）/ `#272727`（アクティブ、白文字）

### Header

- Background: `#ffffff`
- Padding: `0px 20px`
- Position: fixed（上端固定）
- body に `padding-top: 65px` でヘッダー分のオフセット確保

### Footer

- Background: `#272727`
- Text: `#ffffff`
- Font: UDShinGoPr, 13px, weight 500
- Padding: `30px 20px`

### Modal Overlay（お問い合わせ選択）

- Text: `#2b2e38`
- Label: UDShinGoPr, 16px, weight 500, line-height 1.5
- Background: 実測未確認（半透明黒のオーバーレイと推定）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド + 5px 刻み）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | サブナビの余白 `padding-bottom: 10px` |
| S | 10px〜15px | ナビアイテムの内側余白、CTA の縦余白 |
| M | 20px | カード内余白、ヘッダーの左右余白、見出しの左パディング |
| L | 30px | フッターの縦余白、タイトル左パディング（アイコン分） |
| XL | 40px | 検索入力の右パディング（アイコン分） |
| XXL | 65px | ヘッダー分の body 上パディング |

### Container

- Max Width: 実測困難（レスポンシブ対応で可変幅）。推奨 `1200px`
- Padding (horizontal): mobile `15px` / desktop `20px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 5px | カルーセルドット |
| Medium | 10px | 商品カード |
| Large | 30px | モバイル検索入力 |
| Pill | 50px | CTA ボタン、ナビアイテム |
| Circle | 50% | ハンバーガーボタン、言語切替 |

### Grid

- 実測上、CSS Grid / Flexbox によるレスポンシブレイアウト
- Gutter: 推奨 `20px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ナビ・ヘッダ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウンメニュー・モーダル（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **背景色の切り替え**（`#ffffff` カード on `#fafaef` ページ背景、`#ffd500` CTA on 白カード）と **border-radius のバリエーション** で表現
- フラットデザインベースだが、カードの角丸（10px）とピルボタン（50px）で柔らかさを演出

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **UDShinGoPr を最優先**、フォールバックは Yu Gothic → Hiragino Kaku Gothic Pro → Meiryo の順
- 本文の line-height は **1.8** を基本にする（13px 本文）。カード内テキストは **1.75**（16px）
- **見出しの letter-spacing は 0.05em**（正のトラッキング）で統一する
- `font-feature-settings: "palt"` を **body レベルでグローバル適用** する
- 主要 CTA は **`#ffd500` のイエローピル**（border-radius 50px）、文字色は `#272727`
- ページ背景は **`#fafaef`（ウォームクリーム）**。純白 `#ffffff` はカード・ヘッダーの面に使う
- フッターは **`#272727` ダークグレー + 白文字**
- 事業ドメインごとのカラーバリエーション（ピンク・ブルー・ライム等）は **ブランドサイト・キャンペーン限定**で使用

### Don't（禁止）

- 主要 CTA に **`#272727`（ダーク）や `#ffffff`（白）を使わない** -- クラシエの押しはあくまで `#ffd500` のイエロー
- ページ背景に **純白 `#ffffff`** を使わない（`#fafaef` のウォームクリームがブランドの基調色）
- 本文に **`line-height: 1.5` 以下**を使わない（クラシエは 1.8 が基準）
- 見出しに **負の letter-spacing** を使わない（クラシエは正のトラッキング 0.05em で統一）
- フォールバックチェーンから **Yu Gothic / Meiryo を省略しない**（Windows ユーザーを重視した設計）
- **冷たいグレー**（`#9ca3af`、`#6b7280` 等）を使わない（ウォームクリーム基調との不整合）
- ブランドサイト用のカラフルな差し色（`#ffa8e2`, `#248cff`, `#b2ff53` 等）を **コーポレートの通常 UI に使わない**（あくまでキャンペーン・ブランドサイトの装飾色）
- `palt` を **見出しだけに限定しない** -- クラシエはグローバル適用

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト。ハンバーガーメニュー展開 |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | >= 1024px | デスクトップレイアウト。グローバルナビ展開 |

### モバイル時の調整

- ヒーロービデオは全幅を維持
- グローバルナビはハンバーガーメニュー（`#ffd500` 円形ボタン）→ フルスクリーンアコーディオンメニューに変化
- ナビ文字サイズ: 13px（デスクトップ）→ 15px（モバイルメイン）/ 14px（サブ）/ 12px（小項目）
- 検索バー: ヘッダー内（デスクトップ）→ モバイルメニュー下部に移動
- モバイルメニュー内にお問い合わせ電話番号（28px, weight 700）を掲載

### タッチターゲット

- ナビピル: padding `15px`（デスクトップ）→ padding `20px 15px`（モバイル）
- CTA ボタン: padding `15px 20px`（十分なタッチターゲット）
- モバイルサブナビ: padding `8px 15px`

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Yellow (CTA): #ffd500
Page Background: #fafaef (warm cream)
Header BG: #ffffff
Footer BG: #272727
Card BG: #ffffff
Text Primary: #272727
Text Secondary: #585858
Text Dark (Modal): #2b2e38
Light Gray (Nav / Search): #f8f8f8
Carousel Inactive: #e3e3e3
Hero Dark: #151b17

Campaign Colors (ブランドサイト限定):
  Pink: #ffa8e2 / Blue: #248cff / Lime: #b2ff53
  Orange: #ffa646 / Purple: #6c55f0

Font (heading): UDShinGoPr, "Yu Gothic", YuGothic, 游ゴシック体,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "Meiryo UI", Meiryo, メイリオ, Arial, Vardana,
  "MS PGothic", "ＭＳ Ｐゴシック"
（UDShinGoPr 不在時の代替提案: Noto Sans JP または Zen Kaku Gothic New）

Body Size: 13px / line-height 1.8 / weight 400 / letter-spacing normal
Heading Size: 35px / line-height 1.3 / weight 700 / letter-spacing 0.05em
Card Text: 16px / line-height 1.75 / weight 400
Nav: 13px / line-height 1.3 / weight 700
CTA: 15px / line-height 1.5 / weight 700 / letter-spacing 0.05em

OpenType: font-feature-settings: "palt" (グローバル適用)
Border Radius: 10px（カード）/ 50px（CTA・ナビ）/ 50%（丸ボタン）
Shadow: 基本 none。階層は背景色の差で表現
```

### プロンプト例

```
クラシエのデザインに従って、コーポレートサイトの商品紹介セクションを作成してください。
- フォント: UDShinGoPr, "Yu Gothic", YuGothic, 游ゴシック体,
    "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    "Meiryo UI", Meiryo, メイリオ, Arial, Vardana,
    "MS PGothic", "ＭＳ Ｐゴシック"
- font-feature-settings: "palt"（グローバル適用）
- ページ背景: #fafaef（ウォームクリーム）
- セクション見出し: 35px / weight 700 / line-height 1.3 / letter-spacing 0.05em / color #272727
- サブ見出し: 24px / weight 700 / line-height 1.3 / letter-spacing 0.05em
- 本文: 13px / weight 400 / line-height 1.8 / color #585858
- カード内テキスト: 16px / weight 400 / line-height 1.75 / color #272727
- 主要 CTA: 背景 #ffd500（ビビッドイエロー）/ 文字 #272727 / border-radius 50px / padding 15px 20px / 15px / weight 700 / letter-spacing 0.05em
- 商品カード: 背景 #ffffff / border-radius 10px / padding 20px / shadow none
- ナビアイテム: 背景 transparent / border-radius 50px / 13px / weight 700
- フッター: 背景 #272727 / 文字 #ffffff / 13px / weight 500
- box-shadow は基本 none。立体感は背景色の差（#fafaef vs #ffffff）と角丸で表現
- テキスト色は #272727（見出し）/ #585858（本文補足）
- 冷たいグレーは使わない（ウォームクリーム基調を保つ）
- キャンペーン用のカラフルな差し色（ピンク・ブルー・ライム等）は通常 UI に使わない
```
