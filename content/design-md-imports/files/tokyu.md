# DESIGN.md — TOKYU（東急）

> TOKYU（https://www.tokyu.co.jp/）のデザイン仕様書。
> 東急電鉄・東急グループのポータルサイト。鉄道・生活サービス・沿線情報を統合的に提供するライフスタイルコングロマリット。
> 実サイトの computed style 実測（2026-06-18 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景にウォームグレー（`portal-gray-*`）の階調を重ね、**ティール `#045f68` のピル CTA** で鉄道・生活インフラとしての落ち着きと信頼感を表現。TOKYU RED `#f93628` はアラート・NEW バッジ専用で、CTA には使わない
- **密度**: 全階層の line-height が均一に **1.5**。見出しの letter-spacing は `normal`（0）で詰めず、本文も `normal`。情報密度が高い鉄道ポータルながら、余白で呼吸を確保
- **キーワード**: ウォームグレー、ティール CTA、ピルボタン、鉄道ポータルの安定感、包括的デザイントークンシステム
- **特徴**:
  - 欧文に **Inter** を最優先、和文に **Noto Sans JP** を使用。欧文優先のフォールバック構成
  - **ブランドカラーは `#045f68`（深いティール）**。CTA ボタン、テキストリンク、イベント日付バッジに使用（CSS 変数 `--button-primary` / `--text-teal` / `--bg-teal-primary`）
  - **TOKYU RED `#f93628`** は `--tokyu-red` として定義されているが、用途は運行情報アラート・NEW バッジ・遅延証明書リンクなどに限定。ブランドの「赤」は存在するがUIの中心色ではない
  - **ウォームグレーパレット**（`portal-gray-50` 〜 `portal-gray-900`）は STORES のウォームグレーに類似する暖色寄りの灰色体系。RGB で R>G>B の傾向（例: `#f8f7f5`、`#f1eee9`、`#e4e1da`）
  - 路線カラー（東横線 `#db0042`、目黒線 `#009cd3` 等）がデザイントークンとして定義されており、鉄道サービス固有のカラーシステムを持つ
  - 124 の CSS Custom Properties を持つ包括的なデザイントークンシステム
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Teal Primary** (`#045f68`): メインのブランドカラー。主要 CTA「検索」の背景、テキストリンク、イベント日付バッジのテキスト色（`--button-primary` / `--bg-teal-primary` / `--text-teal`）
- **Teal Dark** (`#02444c`): ホバー時・プレス時のティール（`--portal-teal-800`）
- **Teal Light Surface** (`#f0fafa`): イベント日付バッジの背景面、ティール系の薄い面（`--portal-teal-50` / `--bg-teal`）
- **TOKYU RED** (`#f93628`): ブランドの赤。NEW バッジ背景、アイコン等に限定使用（`--tokyu-red`）

### CTA / Buttons

- **Primary CTA（ティールピル）**: 背景 `#045f68` / 文字 `#ffffff` / radius `999px`（pill）/ padding `4px 18px 4px 22px` / 14px / weight 700
- **Secondary CTA（白ピル）**: 背景 `#ffffff` / 文字 `#1a2120` / border `1px solid #e4e1da` / radius `999px`（pill）/ padding `4px 24px` / 16px / weight 700
- **Dark CTA（黒ピル）**: 背景 `#201c18` / 文字 `#ffffff` / radius `999px` / padding `12px 24px` / 14px / weight 700 — App Store / Google Play ダウンロード等
- **Danger Alert（遅延証明書）**: 背景 `#fff4f3` / 文字 `#d92c1e` / border `1px solid #ff8880` / radius `999px`

### Semantic

- **Danger** (`#d92c1e`): エラー、運行情報アラート、NEW バッジテキスト（`--text-danger` / `--bg-new`）
- **Danger Surface** (`#fff4f3`): 遅延証明書・運行情報の背景面（`--bg-danger`）
- **Danger Border** (`#ff8880`): 遅延アラートの枠線（`--border-danger`）
- **Caution** (`#805e02`): 警告テキスト
- **Caution Surface** (`#fff9e2`): 警告の背景面（`--bg-caution`）
- **Focus Ring** (`#2d60d6`): フォーカス状態の枠線（`--border-focus`）

### Neutral — Warm Gray Scale (portal-gray)

| Token | hex | 役割 |
|-------|-----|------|
| `--portal-gray-900` | `#201c18` | ダーク CTA 背景・フッター最暗部 |
| `--portal-gray-800` | `#343028` | フッター背景（`--bg-dark`） |
| `--portal-gray-700` | `#49443c` | フッター企業情報セクション |
| `--portal-gray-600` | `#645d51` | 暗い補助テキスト |
| `--portal-gray-500` | `#888175` | 中間グレー |
| `--portal-gray-400` | `#afaaa2` | 無効テキスト・入力枠線（`--text-disabled` / `--border-medium`） |
| `--portal-gray-300` | `#d0cbc4` | 薄いボーダー |
| `--portal-gray-200` | `#e4e1da` | ライトボーダー（`--border-light`） |
| `--portal-gray-100` | `#f1eee9` | サーフェス強（`--bg-strong`） |
| `--portal-gray-50` | `#f8f7f5` | サーフェス既定（`--bg-default`） |

### Text

| Token | hex | 役割 |
|-------|-----|------|
| `--text-primary` | `#1a2120` | 本文テキスト |
| `--text-secondary` | `#5a605f` | 補足テキスト |
| `--text-tertiary` | `#818988` | 第三階層テキスト |
| `--text-disabled` | `#afaaa2` | 無効状態テキスト |
| `--text-teal` | `#045f68` | リンク・強調テキスト |
| `--text-danger` | `#d92c1e` | エラー・運行情報テキスト |

### Background

| Token | hex | 役割 |
|-------|-----|------|
| `--bg-light` | `#ffffff` | ページ背景（白） |
| `--bg-default` | `#f8f7f5` | セクション背景（ウォームグレー） |
| `--bg-strong` | `#f1eee9` | 強調面・スライダー矢印背景 |
| `--bg-dark` | `#343028` | フッターダーク背景 |
| `--bg-teal` | `#f0fafa` | ティール薄面（バッジ背景） |
| `--bg-teal-primary` | `#045f68` | ティール濃面（CTA 背景） |

### Station Line Colors

| 路線 | Token | hex |
|------|-------|-----|
| 東横線 | `--station-line-ty` | `#db0042` |
| 目黒線 | `--station-line-mg` | `#009cd3` |
| 田園都市線 | `--station-line-dt` | `#0a8540` |
| 大井町線 | `--station-line-om` | `#f18c2b` |
| 池上線 | `--station-line-ik` | `#ef6d9a` |
| 東急多摩川線 | `--station-line-tm` | `#b72e7e` |
| 世田谷線 | `--station-line-sg` | `#d4a418` |
| こどもの国線 | `--station-line-kd` | `#00a6c0` |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先。Google Fonts 由来の Web フォント
- **フォールバック**: `Hiragino Kaku Gothic ProN`（Apple OS）→ `Hiragino Sans`（Apple OS 新記法）→ `Meiryo`（Windows）→ `Noto Sans CJK JP`（Linux / Android）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Inter** を最優先。和文より前に指定し、欧文部分の表示品質を優先
- **フォールバック**: `Helvetica Neue` → `Helvetica` → `Arial` → `Roboto`
- Inter は Google Fonts から読み込み。Variable Font 対応

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h4, p, a, span, button, nav, header, footer） */
font-family: Inter, "Noto Sans JP", "Helvetica Neue", Helvetica, Arial,
  Roboto, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo,
  "Noto Sans CJK JP", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Inter）を先に指定し、ラテン文字の表示品質を最優先
- 和文は Noto Sans JP が Inter の直後に入り、日本語部分を担当
- Helvetica Neue / Arial / Roboto は Inter 不在時の欧文フォールバック
- 最後に各 OS の和文システムフォントを並べ、Noto Sans JP 不在時の和文カバーを確保

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-18 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 (Large) | Inter + Noto Sans JP | 32px | **700** | 48px (x1.5) | normal | `#1a2120` | "新着イベント" |
| H3 Section | Inter + Noto Sans JP | 24px | 700 | 36px (x1.5) | normal | `#1a2120` | "東急線をもっと知る" |
| Pickup Title | Inter + Noto Sans JP | 24px | 700 | 36px (x1.5) | normal | `#1a2120` | カード内のピックアップ見出し |
| H2 Small | Inter + Noto Sans JP | 20px | 700 | 30px (x1.5) | normal | `#1a2120` | "サイト内検索" |
| Body | Inter + Noto Sans JP | 16px | 400 | 24px (x1.5) | normal | `#1a2120` | 本文 |
| Nav Link | Inter + Noto Sans JP | 14px | 700 | 21px (x1.5) | normal | `#1a2120` | ナビゲーション |
| Subtext | Inter + Noto Sans JP | 14px | 400 | 21px (x1.5) | normal | `#5a605f` | 補足テキスト |
| Event Badge | Inter + Noto Sans JP | 14px | 700 | 17.5px (x1.25) | normal | `#045f68` | bg `#f0fafa` / radius 2px |
| H3 Nav Small | Inter + Noto Sans JP | 12px | 700 | 18px (x1.5) | normal | `#5a605f` | ナビ内のカテゴリ見出し |
| CTA Label | Inter + Noto Sans JP | 14px | 700 | — | normal | `#ffffff` | ボタン内テキスト |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **全階層で統一**: `1.5`（見出し・本文・補足すべて line-height 1.5）
- イベント日付バッジのみ `1.25`（17.5px / 14px）でコンパクト

**字間 (letter-spacing)** -- 実測:
- **全要素 `normal`**: 見出し・本文・補助テキストすべてで letter-spacing の明示指定なし
- 入力欄のみ `0.2px`（`0.0125em` 相当）の微量トラッキング

**ガイドライン**:
- TOKYU は全階層で **line-height 1.5** を統一。STORES のように見出しをタイトに詰めたり本文を広げたりする緩急はつけず、均一なリズムで安定感を出す
- letter-spacing も `normal` 統一。フォント自体のメトリクスに任せる方針
- 見出しの差別化は **サイズと weight（700）** のみで行い、字間では操作しない

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ヒーロー見出しやカードタイトルは自然改行（`<br>` による手動改行は少ない）
- ピル系ボタン・バッジは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Inter は OpenType 機能を豊富に持つが、サイト側で明示指定はしていない

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ティールピル）** -- "検索"
- Background: `#045f68`
- Text: `#ffffff`
- Padding: `4px 18px 4px 22px`（非対称。検索アイコン分を考慮）
- Border Radius: `999px`（完全ピル）
- Font: Inter + Noto Sans JP, 14px, weight 700
- Border: none

**Secondary CTA（白ピル）** -- "イベント一覧" "記事一覧"
- Background: `#ffffff`
- Text: `#1a2120`
- Border: `1px solid #e4e1da`
- Padding: `4px 24px`
- Border Radius: `999px`（完全ピル）
- Font: Inter + Noto Sans JP, 16px, weight 700

**Secondary Small（白ピル小）** -- "更新"
- Background: `#ffffff`
- Text: `#1a2120`
- Border: `1px solid #e4e1da`
- Padding: `4px 18px`
- Border Radius: `999px`
- Font: Inter + Noto Sans JP, 14px, weight 400

**Dark CTA（黒ピル）** -- "App Store" "Google Play"
- Background: `#201c18`
- Text: `#ffffff`
- Padding: `12px 24px`
- Border Radius: `999px`
- Font: Inter + Noto Sans JP, 14px, weight 700
- Border: none

**Danger Alert（遅延情報ピル）** -- "遅延証明書/運行情報"
- Background: `#fff4f3`
- Text: `#d92c1e`
- Border: `1px solid #ff8880`
- Padding: `8px 16px`
- Border Radius: `999px`
- Font: Inter + Noto Sans JP, 14px, weight 700

**Icon Button（丸）** -- 閉じる・スライダー矢印
- Background: `#f8f7f5`（閉じる）/ `#f1eee9`（矢印）
- Border Radius: `50%`
- Size: 36〜40px

### Inputs

- Background: `#ffffff`
- Border: `1px solid #afaaa2`（`--border-medium`）
- Border (focus): `1px solid #2d60d6`（`--border-focus`）
- Border (error): `1px solid #ff8880`（`--border-danger`）
- Border Radius: `12px`（`--border-radius-small`）
- Padding: `20px 16px`（大きめの内側余白）
- Font: Inter + Noto Sans JP, 16px, weight 400
- Letter Spacing: `0.2px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f8f7f5`（`--bg-default`）/ `#f1eee9`（`--bg-strong`）
- Border: `1px solid #e4e1da` または border なし
- Border Radius: `8px`（イベントカードリンク）/ `12px`（入力欄）/ `16px`（大カード）
- Shadow: 基本フラット

### Event Date Badge

- Background: `#f0fafa`（`--bg-teal`）
- Text: `#045f68`（`--text-teal`）
- Padding: `4px 8px`
- Border Radius: `2px`
- Font: 14px / weight 700

### Header

- Position: sticky top
- Background: `#ffffff`（白、透過なし）
- Height: 64px 程度

### Footer

- Background: `#343028`（`--bg-dark`）
- 企業情報セクション: `#49443c`（`--portal-gray-700`）
- Text: `#ffffff` / `rgba(255, 255, 255, 0.7)`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白、アイコン間 |
| S | 8px | カード内の小余白 |
| M | 16px | 入力欄の横余白、セクション内の段落間 |
| L | 24px | カード内余白、セクション見出し下 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | CSS Variable | 用途 |
|-------|-------|--------------|------|
| XXSmall | 4px | `--border-radius-xxsmall` | テーブル罫・微小角丸 |
| XSmall | 8px | `--border-radius-xsmall` | イベントカードリンク |
| Small | 12px | `--border-radius-small` | 入力欄 |
| Medium | 16px | `--border-radius-medium` | 大カード |
| Max (Pill) | 999px | `--border-radius-max` | CTA・バッジ・ピル |

### Grid

- カードグリッドは 2〜3 カラム構成
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ウォームグレーのサーフェス階調**（`#ffffff` → `#f8f7f5` → `#f1eee9`）で表現
- フッターのダーク背景（`#343028`）との明暗コントラストで空間を区切る

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文は **Inter** を最優先、和文は **Noto Sans JP** を使い、font-family は欧文優先のフォールバック構成にする
- 全階層の line-height は **1.5** で統一する
- 主要 CTA は **`#045f68`（ティール）のピル**、セカンダリは **白＋ウォームボーダー** のピル
- サーフェスは **ウォームグレー**（`#f8f7f5`、`#f1eee9`、`#e4e1da`）の3段階で階層を作る
- 補助テキストは **`#5a605f`**（`--text-secondary`）を使う
- 路線情報には **公式路線カラー**（`--station-line-*`）を正確に使用する
- ボタンの weight は **700** を基本にする
- TOKYU RED `#f93628` は **アラート・NEW バッジ専用** として限定使用する

### Don't（禁止）

- CTA ボタンの背景に **TOKYU RED `#f93628` を使わない** -- 赤はアラート・バッジ用。CTA はティール `#045f68`
- 冷たいグレー（`#9ca3af`、`#6b7280`、`#f3f4f6`）を使わない -- ウォームグレー `portal-gray-*` を使う
- 本文に **`line-height: 1.5` 未満** を使わない
- 見出しに letter-spacing を指定しない -- TOKYU は全要素 `normal`（フォントメトリクス依存）
- **角張ったボタン**（border-radius 0〜4px の CTA）を使わない -- 主要・セカンダリともピル `999px` が基本
- フォーカスリングに **ティール色** を使わない -- フォーカスは `#2d60d6`（ブルー）。ティールと区別する
- 路線カラーを **ブランド色の代わり** に使わない -- 路線カラーは路線図・駅情報の文脈のみ

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- Section H2: 32px → 24px
- H3: 24px → 20px
- 本文サイズは 16px を維持（line-height 1.5 も維持）
- ナビはハンバーガーメニュー化

### タッチターゲット

- 主要 CTA: 高さ 44px 以上
- ピルバッジ: 30px 程度
- 丸アイコンボタン: 36〜40px

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Teal Primary (CTA): #045f68
Teal Dark (hover): #02444c
Teal Light Surface: #f0fafa
TOKYU RED (alert/badge only): #f93628
Danger Text: #d92c1e
Danger Surface: #fff4f3
Caution Surface: #fff9e2
Focus Ring: #2d60d6
Dark CTA: #201c18
Footer BG: #343028

Text Primary: #1a2120
Text Secondary: #5a605f
Text Tertiary: #818988
Text Disabled: #afaaa2

Surface Default: #f8f7f5
Surface Strong: #f1eee9
Border Light: #e4e1da
Border Medium: #afaaa2
White: #ffffff

Font: Inter, "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, Roboto,
      "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo,
      "Noto Sans CJK JP", sans-serif

Body Size: 16px / line-height 1.5 / weight 400 / letter-spacing normal
Heading H2: 32px / line-height 1.5 / weight 700 / letter-spacing normal
Heading H3: 24px / line-height 1.5 / weight 700 / letter-spacing normal
Subtext: 14px / line-height 1.5 / weight 400 / color #5a605f
Nav Link: 14px / weight 700

Border Radius: 8px（カード）/ 12px（入力欄）/ 16px（大カード）/ 999px（CTA・ピル）
Shadow: 基本 none。階層はウォームグレーのサーフェス階調で表現
```

### プロンプト例

```
東急のデザインに従って、沿線イベント一覧セクションを作成してください。
- フォント: Inter, "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, Roboto, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, "Noto Sans CJK JP", sans-serif
- セクション見出し: 32px / weight 700 / line-height 1.5 / letter-spacing normal / color #1a2120
- カードタイトル: 24px / weight 700 / line-height 1.5
- 本文: 16px / weight 400 / line-height 1.5 / color #1a2120
- 補助テキスト: 14px / weight 400 / line-height 1.5 / color #5a605f
- 主要 CTA: 背景 #045f68（ティール）/ 白文字 / border-radius 999px / padding 4px 22px / 14px / weight 700
- セカンダリ CTA: 背景 白 / 文字 #1a2120 / border 1px solid #e4e1da / radius 999px / 16px / weight 700
- イベント日付バッジ: 背景 #f0fafa / 文字 #045f68 / radius 2px / 14px / weight 700
- カード背景: 白 #ffffff、セクション面は #f8f7f5（ウォームサーフェス）
- ボーダー: #e4e1da のウォームライン
- box-shadow は基本 none。立体感はサーフェス階調で表現
- TOKYU RED #f93628 は CTA に使わない（NEW バッジ・アラート用）
- 冷たいグレーは使わない -- ウォームグレー portal-gray-* パレットを使う
```
