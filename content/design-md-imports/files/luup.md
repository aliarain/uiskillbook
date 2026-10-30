# DESIGN.md — LUUP（ループ）

> LUUP（https://luup.sc/）のデザイン仕様書。
> 電動キックボード・電動アシスト自転車のシェアリングサービス。都市の移動インフラを目指すモビリティプラットフォーム。
> 実サイトの computed style 実測（2026-06-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調に**ティールグリーン `#00b6ac` のアクセント**を要所に配し、都市のモビリティサービスらしいクリーンで近未来的な印象を形成。装飾は最小限に抑え、余白で呼吸させるミニマルな構成
- **密度**: 本文の line-height は 1.5 と標準的。見出しはタイトな line-height 1.0 で大きくダイナミックに立てる。情報密度は低〜中程度で、白い空間が多い
- **キーワード**: ミニマル、ティールアクセント、Roobert の国際的テック感、軽いウェイト、都市モビリティ
- **特徴**:
  - 欧文フォントに **Roobert**（Display Foundry 製のジオメトリックサンセリフ）を最優先。テック企業やスタートアップに好まれる現代的な書体で、LUUP のブランドアイデンティティの柱
  - 和文フォントは **Noto Sans JP** → 游ゴシック → ヒラギノ角ゴシック Pro の順にフォールバック
  - **全体の font-weight は 400（Regular）で統一**。見出しもボールドにしない。軽さ・軽快さを全面に出す設計
  - **ブランドカラーは `#00b6ac`（ティール）**。CTA のテキスト色、アクセントスパン、アプリダウンロードボタン等で使用
  - `#04a6a0`（やや深いティール）がアプリダウンロード CTA の背景に使われ、`#00b6ac` との微妙な使い分けがある
  - ページ背景は純白 `#ffffff`、セクション背景に `#f7f7f7`（クールグレー）を敷いて階層を作る
  - Bulma CSS フレームワーク（`is-size-*`, `has-text-*` クラス）をベースにした WordPress サイト
  - ダークフッターセクション `#363636` で引き締め
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Teal** (`#00b6ac`): メインのブランドカラー。CTA テキスト色、見出しのアクセントスパン、装飾アイコン等に使用
- **Brand Teal Dark** (`#04a6a0`): アプリダウンロード CTA の背景色。`#00b6ac` のやや深い変種
- **Brand Teal Light** (`#00d1b2`): Bulma デフォルトのプライマリ色。アイコンの一部で出現（実質的にはブランドティールと同系統で共存）

### CTA / Buttons

- **Nav CTA（ティール文字ピル）**: 文字 `#00b6ac` / 背景 `#ffffff` / border `1px solid #dddddd` / radius `20px` / padding `6px 14px` / 14px / weight 500
- **Ghost Button**: 文字 `#313636` / 背景 transparent / radius `4px` / padding `7px 16px` / 16px / weight 400
- **App Download CTA**: 背景 `#04a6a0`（ティール）/ 文字 `#ffffff` / 大きめのピル型

### Neutral — Cool Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#313636` | (49, 54, 54) | 本文テキスト・見出し（R < G=B、わずかにクール） |
| Dark Section | `#363636` | (54, 54, 54) | フッター背景・"必須" タグの背景 |
| Overlay | `#78848b` | (120, 132, 139) | ポート相談 CTA の暗いオーバーレイ |
| Notice Badge | `#dadee6` | (218, 222, 230) | お知らせバッジの背景 |
| Divider | `#dddddd` | (221, 221, 221) | ボーダー・区切り線・ナビ CTA の枠 |
| Surface | `#f7f7f7` | (247, 247, 247) | セクション背景（クールグレー） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード面 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。モビリティ向けに推奨する補完値:

- **Danger**: `#e53e3e` 程度の明瞭なレッド（返却エラー等）
- **Success**: `#38a169` 程度のグリーン（乗車完了等）
- **Warning**: `#d69e2e` 程度のイエロー（バッテリー残量注意等）

### Footer

- **Footer BG**: `#363636`（ダークグレー）
- **Footer Text**: `#ffffff`（白）
- **Copyright Text**: `#ffffff` / 8px（極小）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先のフォールバック和文フォント
- **フォールバック**: `Yu Gothic` → `YuGothic` → `Hiragino Kaku Gothic Pro` → `Meiryo UI` → `Meiryo` → `MS PGothic` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Roobert**（Display Foundry 製のジオメトリックサンセリフ）を最優先。LUUP のブランド書体
- Roobert は国際的なテック企業に人気のモダンな幾何学系書体で、Futura の柔らかいバリエーションのような字形を持つ
- Roobert の欧文グリフが日本語テキスト中の欧文部分にも適用される（font-family の先頭に配置）

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h6, p, a, span, button, nav, header, footer） */
font-family: Roobert, "Noto Sans JP", "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic Pro", "Meiryo UI", Meiryo, "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- Roobert（カスタム欧文書体）を最優先。欧文部分はブランド書体の字形で描画される
- 日本語部分は Roobert にグリフがないため、次の Noto Sans JP 以降にフォールバック
- **欧文優先型の構成**（note の Helvetica Neue 先頭と同じ思想）。欧文と和文で異なる書体が組み合わさる混植スタイル
- 游ゴシックは Mac / Windows 両方のバリアント（`Yu Gothic` + `YuGothic`）を記述
- ヒラギノは **Pro**（ProN ではない）を使用

> **代替フォント注記**: Roobert は Display Foundry のライセンスフォントのため、デザインのプレビューや社外資料で再現できない場合がある。代替として **Inter**（weight 400 / 500）を使用すると、ジオメトリックでクリーンな印象が近い（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／サービスページ、2026-06-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (title-1) | Roobert / Noto Sans JP | 96px | 400 | 96px (x1.0) | 4.8px (0.05em) | `#313636` | ヒーロー数値・キャッチ |
| H2 (title-6) | Roobert / Noto Sans JP | 56px | 400 | 56px (x1.0) | 2.8px (0.05em) | `#313636` | メインセクション見出し |
| H2 (Service) | Roobert / Noto Sans JP | 48px | 400 | 72px (x1.5) | 0.8px (0.017em) | `#313636` | サービス紹介セクション |
| H2/H3 (is-size-3) | Roobert / Noto Sans JP | 32px | 400 | 48px (x1.5) | 0.8px (0.025em) | `#313636` | 中見出し |
| Subtitle (is-size-4) | Roobert / Noto Sans JP | 24px | 400 | 30px (x1.25) | 0.8px (0.033em) | `#313636` | サブタイトル |
| H2/H3 (is-size-5) | Roobert / Noto Sans JP | 20px | 400 | 30px (x1.5) | 0.8px (0.04em) | `#313636` | 小見出し |
| Body | Noto Sans JP | 16px | 400 | 24px (x1.5) | 0.8px (0.05em) | `#313636` | 本文 |
| Nav Button | Roobert / Noto Sans JP | 14px | **500** | 21px (x1.5) | — | `#313636` | ナビゲーションボタン |
| Caption | Noto Sans JP | 12px | 400 | 18px (x1.5) | 0.8px (0.067em) | `#313636` | 補足・注釈 |
| Copyright | Noto Sans JP | 8px | 400 | 12px (x1.5) | — | `#ffffff` | フッター最下部 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.5`（24px / 16px）— 日本語として標準的
- **中〜小見出し (20〜48px)**: `1.25〜1.5`
- **大見出し (56〜96px)**: `1.0`（タイト）— 大きな文字はベタ組みで迫力を出す
- **キャプション (12px)**: `1.5`
- **ナビボタン (14px)**: `1.5`

**字間 (letter-spacing)** — 実測:
- **全サイズ共通**: **0.8px の固定値**（body に `letter-spacing: 0.8px` を一括指定）
- 本文 (16px) では **0.05em**、96px では **0.05em** と、em 換算は同じだがピクセル値は固定
- 大見出しでも負のトラッキング（詰め）は使わない — 正のトラッキングで統一する設計
- ナビボタン (14px weight 500) のみ letter-spacing 未設定（ブラウザデフォルト）

**ガイドライン**:
- LUUP の文字組みは **0.8px の一律 letter-spacing** が特徴。サイズに応じた em 換算の調整はしない
- 大見出しは letter-spacing を詰めるのではなく、**line-height 1.0** でタイト感を表現
- weight は全面的に 400 で統一。ナビの 500 が唯一の例外。ボールドを使わない設計思想

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（Bulma ベース） */
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- Bulma CSS フレームワークのデフォルト設定を踏襲
- 大見出し（96px / 56px）は要素幅で自然に折り返し

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- letter-spacing 0.8px の一律指定で見た目の字間を調整する方針
- Roobert は欧文フォントのため `palt` の対象にならない。和文フォールバック側の palt も未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Nav CTA（ティール文字ピル）** — ヘッダーの行動喚起ボタン
- Background: `#ffffff`
- Text: `#00b6ac`
- Border: `1px solid #dddddd`
- Padding: `6px 14px`
- Border Radius: `20px`（ピル型）
- Font: Roobert / Noto Sans JP, 14px, weight 500

**Ghost Button（ゴースト）** — セクション内リンクボタン
- Background: `transparent`
- Text: `#313636`
- Border: none
- Padding: `7px 16px`
- Border Radius: `4px`
- Font: Roobert / Noto Sans JP, 16px, weight 400

**App Download CTA（ティール背景）** — アプリダウンロード誘導
- Background: `#04a6a0`
- Text: `#ffffff`
- Border: none
- Padding: `12px 24px`（推奨）
- Border Radius: `20px`（ピル型）
- Font: Roobert / Noto Sans JP, 16px, weight 400

**Dark Tag** — "必須" 等のタグバッジ
- Background: `#363636`
- Text: `#ffffff`
- Padding: `2px 8px`
- Border Radius: `4px`
- Font: Noto Sans JP, 12px, weight 400

**Notice Badge** — お知らせカテゴリバッジ
- Background: `#dadee6`
- Text: `#313636`
- Padding: `2px 8px`
- Border Radius: `4px`
- Font: Noto Sans JP, 12px, weight 400

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Border (focus): `1px solid #00b6ac`（ブランドティール）
- Border Radius: `4px`
- Padding: `8px 12px`
- Font: Roobert / Noto Sans JP, 16px, weight 400
- Height: `40px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f7f7f7`（セクション背景）
- Border: `1px solid #dddddd` または border なし
- Border Radius: `4px`（Bulma デフォルト）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`（推奨: 白背景、スクロール時に固定）
- Border Bottom: `1px solid #dddddd`（推奨）
- Position: `fixed top: 0`
- z-index: 30 程度

### Footer

- Background: `#363636`（ダークグレー）
- Text: `#ffffff`
- Padding: `48px 24px`
- Copyright: 8px（極小サイズ）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | インライン要素の間隔 |
| S | 8px | ボタン内の縦余白・タグ間 |
| M | 16px | カード内のコンテンツ間 |
| L | 24px | セクション内の見出しと本文・カード内の余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下・大セクション間の余白 |

### Container

- Max Width: `1152px`（Bulma のデフォルト `.container` 幅）
- Padding (horizontal): mobile `16px` / desktop `24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | カード・入力欄・ゴーストボタン・タグ |
| Medium | 8px | 画像カード（推奨） |
| Pill | 20px | ナビ CTA・アプリダウンロードボタン |

### Grid

- Bulma の 12 カラムグリッド（`.columns > .column`）
- Gutter: 24px（`0.75rem` x 2 = Bulma デフォルト）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・セクション（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- **フラットデザインを徹底**。立体感は `#f7f7f7` のセクション背景色の切り替えで表現
- 影を使う場合は控えめな `rgba(0, 0, 0, 0.08〜0.12)` で
- ダークフッター `#363636` がページ末端のコントラストアンカーとして機能

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文フォントは **Roobert を最優先**、和文は Noto Sans JP → Yu Gothic → Hiragino Kaku Gothic Pro の順にフォールバック
- 本文の line-height は **1.5** を基本にする
- letter-spacing は **0.8px（0.05em）の固定値**で全テキストに一律適用する
- 大見出し（56〜96px）の line-height は **1.0** でタイトに組む
- font-weight は **全面的に 400** で統一する（ナビボタンの 500 のみ例外）
- ブランドカラーは **`#00b6ac`（ティール）** を CTA テキスト・アクセントに使う
- アプリ CTA の背景には **`#04a6a0`** を使い、`#00b6ac` との微妙な差で奥行きを出す
- セクション背景に **`#f7f7f7`** を使って白との切り替えで視覚的な区切りを作る
- ボーダーは **`#dddddd`** で統一する
- ボタンの border-radius は **20px（ピル型）** を基本とし、補助ボタンやカードは **4px**

### Don't（禁止）

- **font-weight 600 や 700 を使わない** — LUUP の軽さ・軽快さが崩れる（weight 400 統一が設計意図）
- 本文に **`line-height: 1.2` 以下**を使わない（可読性が著しく低下する）
- letter-spacing を **サイズごとに変えない** — LUUP は 0.8px 固定の統一設計
- **純黒 `#000000` をテキストに使わない** — LUUP のテキスト色は `#313636`（ダークグレー）
- ブランドティール `#00b6ac` を **背景色に多用しない** — テキスト色・アクセント用であり、面を塗る色ではない（面には `#04a6a0` を限定的に使う）
- **角張った直角ボタン**（border-radius 0）を CTA に使わない — ピル型 20px が基本
- **ウォームグレー**（`#f2f2f0`、`#737368` 等）を使わない — LUUP のグレーは `#f7f7f7` / `#dddddd` / `#313636` のクールニュートラル系
- ナビの CTA ボタンに **ティールの背景色を使わない** — ナビ CTA は白背景＋ティール文字＋細ボーダーの控えめなスタイル

---

## 8. Responsive Behavior

### Breakpoints（Bulma 互換）

| Name | Min Width | 説明 |
|------|-----------|------|
| `mobile` | — | 〜768px。モバイルレイアウト |
| `tablet` | 769px | タブレット以上 |
| `desktop` | 1024px | デスクトップレイアウト |
| `widescreen` | 1216px | ワイドスクリーン |
| `fullhd` | 1408px | フル HD |

### モバイル時の調整

- Display (96px) → 48〜56px 程度に縮小
- H2 (56px) → 32〜40px 程度に縮小
- H2 (48px) → 28〜32px
- 本文サイズは 16px を維持（line-height も 1.5 維持）
- letter-spacing 0.8px は維持（ピクセル固定のため端末問わず同じ）
- ナビはハンバーガーメニュー化

### タッチターゲット

- ナビ CTA: 高さ 33px（padding `6px 14px` + 14px font + 1.5 line-height）— モバイルでは padding を広げて 44px 以上を確保すべき
- ゴーストボタン: 高さ 38px（padding `7px 16px` + 16px font + 1.5 line-height）
- App CTA: 44px 以上を確保（推奨）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Teal (CTA text / accent): #00b6ac
Brand Teal Dark (App CTA bg): #04a6a0
Brand Teal Light (icons): #00d1b2
Text Primary: #313636
Divider / Border: #dddddd
Surface (section bg): #f7f7f7
Dark Section (footer): #363636
Notice Badge bg: #dadee6
White: #ffffff

Font: Roobert, "Noto Sans JP", "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic Pro", "Meiryo UI", Meiryo, "MS PGothic", sans-serif
（Roobert 不在時の代替: Inter weight 400 / 500）

Display: 96px / line-height 1.0 / weight 400 / letter-spacing 0.8px
H2 Large: 56px / line-height 1.0 / weight 400 / letter-spacing 0.8px
H2 Medium: 48px / line-height 1.5 / weight 400 / letter-spacing 0.8px
H2/H3: 32px / line-height 1.5 / weight 400 / letter-spacing 0.8px
Subtitle: 24px / line-height 1.25 / weight 400 / letter-spacing 0.8px
Body: 16px / line-height 1.5 / weight 400 / letter-spacing 0.8px
Nav: 14px / line-height 1.5 / weight 500
Caption: 12px / line-height 1.5 / weight 400 / letter-spacing 0.8px

Border Radius: 4px（カード・入力欄）／20px（CTA・ピルボタン）
Shadow: 基本 none。階層は #f7f7f7 / #ffffff の面切り替えで表現
```

### プロンプト例

```
LUUP のデザインに従って、電動キックボードのポート一覧ページを作成してください。
- フォント: Roobert, "Noto Sans JP", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic Pro", "Meiryo UI", Meiryo, "MS PGothic", sans-serif
- セクション見出し: 56px / weight 400 / line-height 1.0 / letter-spacing 0.8px / color #313636
- 中見出し: 32px / weight 400 / line-height 1.5 / letter-spacing 0.8px
- 本文: 16px / weight 400 / line-height 1.5 / letter-spacing 0.8px / color #313636
- ナビ CTA: 文字 #00b6ac / 背景 白 / border 1px solid #dddddd / radius 20px / padding 6px 14px / 14px / weight 500
- アプリダウンロード CTA: 背景 #04a6a0 / 文字 白 / radius 20px
- カード: 背景 #ffffff / border なし or 1px solid #dddddd / radius 4px
- セクション背景: 白 #ffffff と #f7f7f7 を交互に使って階層を表現
- フッター: 背景 #363636 / 文字 #ffffff
- box-shadow は基本 none
- font-weight は 400 で統一（ナビの 500 のみ例外）。ボールドは使わない
- letter-spacing は 0.8px で全テキスト共通
- テキスト色は #313636（純黒 #000000 は使わない）
```
