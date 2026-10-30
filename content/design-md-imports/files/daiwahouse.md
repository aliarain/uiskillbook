# DESIGN.md — DAIWA HOUSE（大和ハウス工業）

> 大和ハウス工業（https://www.daiwahouse.co.jp/ / https://www.daiwahouse.co.jp/jutaku/）のデザイン仕様書。
> 日本最大の住宅メーカー。コーポレートサイトと住宅サイト（jutaku）の二面構成。
> 実サイトの computed style 実測（2026-05-25 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本最大のハウスメーカーとしての信頼感と、住まいの温もりを両立。コーポレートサイトはブルーグレー `#5b79a8` を基調とした堅実なトーン、住宅サイトはブラック CTA + セリフ見出し（Noto Serif JP）で上質な暮らしを訴求
- **密度**: 本文 12px と小さめで情報密度が高い（典型的な日本の大企業サイト）。line-height 1.7 で読みやすさを確保
- **キーワード**: ブルーグレーの信頼感、住宅の品格、セリフ×サンセリフの使い分け、伝統的な日本語フォントスタック、二面性（コーポレート／住宅）
- **特徴**:
  - **二つの顔**: コーポレート（IR・企業情報）は `#5b79a8` のブルーグレーで堅実さを、住宅サイトは黒ピル CTA + Noto Serif JP の見出しで上質さを演出
  - 和文フォントは **Noto Sans JP** を最優先。フォールバックに **メイリオ → MS P ゴシック** と続く、伝統的な日本の大企業サイトのフォントスタック
  - 住宅サイトの一部見出しに **Noto Serif JP** を採用し、和の品格を加える
  - 本文は 12px（日本の大企業サイトに典型的な小さめのベースサイズ）
  - コーポレートの CTA は `border-radius: 6px` の角丸、住宅の CTA は `border-radius: 30px` のピル型と、サイトごとに異なるボタン意匠
  - `font-feature-settings: normal`（palt 不使用）。letter-spacing はサブナビで -0.7px 程度の詰めがある以外はほぼ既定
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Blue-Gray** (`#5b79a8`): コーポレートサイトのメインブランドカラー。CTA ボタン背景、ブランドアイデンティティに使用
- **Accent Teal** (`#368bb1`): コーポレートサイトのセカンダリアクセント

### CTA / Buttons — Corporate

- **Primary CTA (Corporate)**: 背景 `#5b79a8` / 文字 `#ffffff` / radius `6px` / padding `10px 24px` / 14px / weight 700
- **Ghost CTA (Corporate)**: 背景 `transparent` / 文字 `#5b79a8` / border `1px solid #5b79a8` / radius `6px`
- **Round Icon Button**: radius `50px`（丸型アイコンボタン）

### CTA / Buttons — Housing (jutaku)

- **Primary CTA (Housing)**: 背景 `#000000` / 文字 `#ffffff` / radius `30px`（ピル）/ padding `12px 32px` / 14px / weight 500
- **Secondary CTA (Housing)**: 背景 `#000000` / 文字 `#ffffff` / radius `4px`（シャープ）
- **White Card CTA**: 背景 `#ffffff` / 文字 `#000000` / radius `5px` / border `1px solid #ebebeb`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 住宅 CTA・主要テキスト（コーポレート） |
| Dark Gray | `#2d2d2e` | (45, 45, 46) | 見出し・濃いテキスト |
| Medium Gray | `#4d4d4f` | (77, 77, 79) | 本文テキスト（コーポレート） |
| Text Gray (Housing) | `#666666` | (102, 102, 102) | 本文テキスト（住宅） |
| Light Gray | `#8d8d8d` | (141, 141, 141) | 補助テキスト（住宅） |
| Border Gray | `#aaaaaa` | (170, 170, 170) | ボーダー・区切り線 |
| Surface Gray | `#ebebeb` | (235, 235, 235) | コーポレートの薄い面背景 |
| Blue-Gray Surface | `#eceff4` | (236, 239, 244) | 住宅サイトの青み面背景 |
| Warm Gray Surface | `#e5e4e0` | (229, 228, 224) | 住宅サイトの温かみ面背景 |
| Light Surface (Housing) | `#f4f4f4` | (244, 244, 244) | 住宅サイトの汎用面背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトにはエラー色・成功色の表面化が確認されなかった。推奨する補完値:

- **Danger**: `#c53030` 程度の落ち着いたレッド
- **Success**: `#2f855a` 程度のグリーン
- **Warning**: `#d69e2e` 程度のイエロー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を最優先。Noto Sans Japanese（住宅サイト旧名）も同系統
- **フォールバック**: メイリオ (Meiryo) → MS P ゴシック (MS P Gothic) → sans-serif
- **明朝体（住宅サイト見出し用）**: **Noto Serif JP** — 住宅ページの一部見出し（H2 等）で使用。品格ある和の雰囲気を演出

### 3.2 欧文フォント

- **サンセリフ**: Arial（コーポレートのフォールバック内）
- 純粋な欧文優先フォントは font-family に含まれない。Noto Sans JP / Noto Serif JP の欧文グリフを使用

### 3.3 font-family 指定

```css
/* コーポレートサイト — 本文・見出し共通 */
font-family: "Noto Sans JP", メイリオ, Meiryo, "ＭＳ Ｐゴシック",
  "MS P Gothic", Arial, sans-serif;

/* 住宅サイト — 本文・ナビ */
font-family: "Noto Sans Japanese", メイリオ, Meiryo, "ＭＳ Ｐゴシック",
  "MS P Gothic", sans-serif;

/* 住宅サイト — セリフ見出し */
font-family: "Noto Serif JP", serif;
```

**フォールバックの考え方**:
- Noto Sans JP（Google Fonts）を最優先し、和文・欧文ともに統一
- メイリオは Windows ユーザー向けの第1フォールバック。伝統的な日本の大企業サイトの定番構成
- MS P ゴシックは古い Windows 環境向けの最終フォールバック（全角名 `ＭＳ Ｐゴシック` と半角名 `MS P Gothic` を併記）
- 住宅サイトは `Noto Sans Japanese`（旧名）を使用しているが、実質 Noto Sans JP と同一

> **フォント注記**: コーポレートと住宅で font-family 名が微妙に異なる（`Noto Sans JP` vs `Noto Sans Japanese`）が、表示結果は同一。住宅サイトの方がやや古い記述。

### 3.4 文字サイズ・ウェイト階層

> 実測値（コーポレートサイト＋住宅サイト、2026-05-25 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (Corporate) | Noto Sans JP | 14px | 500 | 20px (x1.43) | normal | `#000000` | コーポレートページタイトル |
| H2 (Corporate) | Noto Sans JP | 28px | 700 | 40px (x1.43) | normal | `#000000` | セクション大見出し |
| H3 (Corporate) | Noto Sans JP | 14-18px | 700 | — | normal | `#000000` | 小見出し |
| H2 Serif (Housing) | Noto Serif JP | 17-25px | 500-700 | — | normal | `#000000` | 住宅セクション見出し（セリフ） |
| H3 (Housing) | Noto Sans JP | 18px | 700 | — | normal | `#000000` | 住宅小見出し |
| Body (Corporate) | Noto Sans JP | 12px | 400 | 20.4px (x**1.7**) | normal | `#000000` | 本文 |
| Body (Housing) | Noto Sans JP | 12px | 500 | 20.4px (x1.7) | normal | `#666666` | 本文 |
| Nav (Corporate) | Noto Sans JP | 14px | 700 | 14px (x1.0) | normal | `#000000` | グローバルナビ |
| Nav (Housing) | Noto Sans JP | 15-20px | 500 | — | normal | `#000000` | ナビゲーション |
| Sub Nav | Noto Sans JP | 12px | 400 | — | -0.7px (-0.058em) | `#4d4d4f` | サブナビ（字詰めあり） |
| List (Housing) | Noto Sans JP | 14px | 500 | — | normal | `#666666` | リスト項目 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (12px)**: `1.7`（20.4px / 12px）— 小さめの文字に対して広めの行間で可読性を確保
- **見出し H2 (28px)**: `1.43`（40px / 28px）
- **ナビ (14px)**: `1.0`（14px / 14px）— ナビは一行高さ

**字間 (letter-spacing)** — 実測:
- **本文・見出し**: `normal`（letter-spacing の明示的な指定なし）
- **サブナビ**: `-0.7px` (-0.058em)（サブナビのみ詰め）
- 全体的に letter-spacing は最小限。Noto Sans JP のメトリクスに委ねる方針

**ガイドライン**:
- 日本語本文は **line-height 1.7** で 12px の小さい文字をカバー
- letter-spacing はほぼ `normal`。palt も不使用。フォント自体のメトリクスを信頼する方針
- サブナビのみ `-0.7px` のネガティブトラッキングで情報密度を上げている

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Noto Sans JP / Noto Serif JP のメトリクスに任せる方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA (Corporate) — ブルーグレー角丸**
- Background: `#5b79a8`
- Text: `#ffffff`
- Padding: `10px 24px`
- Border Radius: `6px`
- Font: Noto Sans JP, 14px, weight 700
- Border: none

**Ghost CTA (Corporate) — アウトライン角丸**
- Background: `transparent`
- Text: `#5b79a8`
- Border: `1px solid #5b79a8`
- Padding: `10px 24px`
- Border Radius: `6px`
- Font: Noto Sans JP, 14px, weight 700

**Primary CTA (Housing) — ブラックピル**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `12px 32px`
- Border Radius: `30px`（ピル）
- Font: Noto Sans JP, 14px, weight 500
- Border: none

**Secondary CTA (Housing) — ブラックシャープ**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `10px 24px`
- Border Radius: `4px`
- Font: Noto Sans JP, 14px, weight 500

**White Card CTA (Housing)**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #ebebeb`
- Padding: `10px 20px`
- Border Radius: `5px`
- Font: Noto Sans JP, 14px, weight 500

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #aaaaaa`
- Border (focus): `1px solid #5b79a8`
- Border Radius: `4px`
- Padding: `8px 12px`
- Font: Noto Sans JP, 14px, weight 400
- Height: `40px`

### Cards

- Background: `#ffffff`
- Border: `1px solid #ebebeb`
- Border Radius: `5px`（住宅）/ `0px`（コーポレート・フラット）
- Padding: `20px`
- Shadow: 基本 `none`（フラットなデザイン）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | 段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px`（コーポレート）/ `1100px`（住宅）
- Padding (horizontal): mobile `16px` / desktop `24px`

### Grid

- Columns: 12
- Gutter: `20px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.08)` | カードホバー（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ドロップダウン・ナビ展開 |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感はサーフェスの色分け（`#ebebeb` / `#eceff4` / `#f4f4f4`）で表現するフラットな設計思想
- 大企業サイトらしい堅実で控えめな階層表現

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Noto Sans JP を最優先**、フォールバックは メイリオ → MS P ゴシック → sans-serif
- 住宅ページの見出しには **Noto Serif JP** でセリフのアクセントを入れ、品格を出す
- 本文の line-height は **1.7** を基本にする（12px の小さい本文でも読みやすく）
- コーポレートの CTA は **`#5b79a8` のブルーグレー＋角丸 6px**
- 住宅の CTA は **`#000000` のブラックピル（30px radius）**
- 色のコントラスト比は WCAG AA 以上を確保する
- サーフェスは用途に応じて使い分ける（`#ebebeb` コーポレート / `#eceff4` 青み / `#e5e4e0` 温かみ / `#f4f4f4` 汎用）

### Don't（禁止）

- コーポレートの CTA にブラックを使わない（コーポレートは `#5b79a8` ブルーグレー）
- 住宅の CTA にブルーグレーを使わない（住宅はブラック `#000000` が基本）
- **コーポレートと住宅の CTA スタイルを混在させない** — サイトごとにトーンが異なる
- 本文に `line-height: 1.4` 以下を使わない（12px の文字が読みにくくなる）
- `font-feature-settings: "palt"` を追加しない（実サイトは normal で統一）
- 住宅ページの全見出しをセリフにしない（セリフは H2 等の大見出しにのみ使用し、H3 以下はサンセリフ）
- フォールバックチェーンから **メイリオを省略しない**（日本の大企業サイトの Windows 対応の定番）
- ボタンに強い影 (`box-shadow`) をつけない — フラットが基本

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- 住宅ピル CTA は高さ 44px 以上を確保

### フォントサイズの調整

- モバイルでは本文 12〜14px（ベースが小さいため大きな縮小は不要）
- 見出しはデスクトップの 70〜80% 程度に縮小
- Noto Serif JP の見出しもモバイルでは 15〜18px 程度に縮小

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue-Gray (Corporate CTA): #5b79a8
Accent Teal: #368bb1
Black (Housing CTA): #000000
Dark Gray (見出し): #2d2d2e
Medium Gray (本文): #4d4d4f
Text Gray (住宅本文): #666666
Light Gray (補助): #8d8d8d
Border: #aaaaaa
Surface (Corporate): #ebebeb
Surface (Housing Blue): #eceff4
Surface (Housing Warm): #e5e4e0
Surface (Housing Light): #f4f4f4
Background: #ffffff

Font (Corporate): "Noto Sans JP", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS P Gothic", Arial, sans-serif
Font (Housing): "Noto Sans Japanese", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif
Font (Housing Serif): "Noto Serif JP", serif

Body Size: 12px / line-height 1.7 / weight 400 (Corporate) or 500 (Housing)
H2 Size: 28px / line-height 1.43 / weight 700
H2 Serif (Housing): 17-25px / weight 500-700 / Noto Serif JP

CTA Radius (Corporate): 6px
CTA Radius (Housing Pill): 30px
Card Radius: 5px
Shadow: 基本 none。サーフェスの色分けで階層を表現
```

### プロンプト例

```
大和ハウス工業のデザインに従って、住宅商品一覧ページを作成してください。
- フォント（本文）: "Noto Sans JP", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif
- フォント（見出し）: "Noto Serif JP", serif を一部セクション見出しに使用
- セクション見出し（セリフ）: 25px / weight 500 / Noto Serif JP / color #000000
- 小見出し: 18px / weight 700 / Noto Sans JP / color #000000
- 本文: 12px / weight 500 / line-height 1.7 / color #666666
- 補助テキスト: 12px / weight 400 / color #8d8d8d
- 主要 CTA: 背景 #000000 / 白文字 / border-radius 30px (ピル) / padding 12px 32px / 14px / weight 500
- カード: 背景 #ffffff / border 1px solid #ebebeb / radius 5px / 影なし
- セクション背景: 白 #ffffff と #f4f4f4 の交互。青みの #eceff4 や温かみの #e5e4e0 も使用
- letter-spacing: normal（palt なし）
- ボタンに影をつけない。フラットが基本
```
