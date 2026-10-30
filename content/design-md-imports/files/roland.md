# DESIGN.md — Roland（ローランド）

> Roland（https://www.roland.com/jp/）のデザイン仕様書。
> 世界的な電子楽器メーカー。ピアノ、シンセサイザー、V-Drums、ギターアンプ等を展開。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: スタジオ・ステージを想起させる**ライトグレー `#e5e5e5` の背景**に、**Roland Orange `#ff5a00`** のCTAと**黒 `#000000` のナビゲーション**でプロフェッショナルな楽器メーカーの存在感を表現
- **密度**: ヒーロー領域は超大型タイポグラフィ（80〜105px）でインパクト重視。本文は 12px / line-height 1.8 とコンパクトだが letter-spacing 1px で可読性を確保。カテゴリラベル系は極細ウェイト（100）で上品に抑える
- **キーワード**: インダストリアルグレー、Roland Orange、ウルトラシン見出し、デュアルフォント、ステージ照明のコントラスト
- **特徴**:
  - **ページ背景が `#e5e5e5`（ライトウォームグレー）** — 純白ではない。楽器メーカーらしいスタジオ空間の雰囲気
  - 欧文ブランドフォントに **proxima-nova（Adobe Fonts）** を採用。ヒーロー・ナビ・ラベルはすべて proxima-nova
  - 和文フォントは **Kozuka Gothic Pro（小塚ゴシック Pro）** を軸にしたフォールバックチェーン
  - **見出しに weight 100（ultra-thin）を多用** — h1 ヒーロー alt（105px / 100）、h2 カテゴリ（44px / 100）、h3 フッター（28px / 100）。太字ではなく細字で品格を出すアプローチ
  - **letter-spacing が広い**: カテゴリ見出し 3px、セクションラベル 1px。ゆったりとした文字間で余裕を感じさせる
  - **ディスプレイ見出しの line-height は 1.0**（文字サイズ＝行高さ）。タイトに詰めて塊感を出す
  - Roland Orange `#ff5a00` は CTA・ロゴエリア・クッキー同意ボタンなど、ユーザーアクションに集中的に使用
  - ナビゲーションは**黒背景 `#000000`** に白・灰色テキスト。楽器メーカーらしいダーク UI
  - CSS Custom Properties は使用していない（静的な CSS 設計）
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Roland Orange** (`#ff5a00`): メインのブランドカラー。CTA ボタン背景、ロゴエリア背景、クッキー同意ボタン。17 要素で使用される支配的なアクセント色
- **Roland Orange (Border)** (`#ff5a00`): CTA ボタンの border にも同色を使用（背景と一体化）

### CTA / Buttons

- **Primary CTA**: 背景 `#ff5a00` / 文字 `#ffffff` / radius `2px` / border `1px solid #ff5a00` / padding `12px 30px` / 14.4px / weight 700
- **Explore Chip**: 背景 `#000000` / 文字 `#ffffff` / padding `0px 7px 0px 15px` / 12px / weight 400 / proxima-nova

### Neutral — Gray & Black Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black (Nav BG) | `#000000` | (0, 0, 0) | ナビゲーション背景・テキスト主色 |
| Near Black (Footer BG) | `#141414` | (20, 20, 20) | フッター背景 |
| Dark Gray (Body) | `#333333` | (51, 51, 51) | セクションラベル `<h3>` |
| Mid Gray (Body Alt) | `#454545` | (69, 69, 69) | 本文テキスト `<p>` |
| Nav Label | `#666666` | (102, 102, 102) | ナビゲーションリンク |
| Muted Gray | `#808080` | (128, 128, 128) | h5 注釈・フィーチャーラベル |
| Footer Muted | `#999999` | (153, 153, 153) | フッター補助テキスト |
| Footer Light | `#cccccc` | (204, 204, 204) | フッターリンク・ナビ見出し |
| Page Background | `#e5e5e5` | (229, 229, 229) | **ページ背景（白ではない）** |
| White | `#ffffff` | (255, 255, 255) | カード面・ヒーロー上テキスト |

### Semantic（実測未確認・推奨値）

実サイトにはエラー／成功色が表面化していない。楽器メーカーECとして推奨する補完値:

- **Danger**: `#cc0000` 程度の深いレッド
- **Success**: `#228b22` 程度のフォレストグリーン
- **Warning**: `#cc7700` 程度のダークオレンジ（ブランドオレンジと被らない彩度）

### Header / Navigation

- **Nav BG**: `#000000`（黒ベタ）
- **Nav Text**: `#ffffff`（白）/ `#cccccc`（ライトグレー）/ `#666666`（ミュートラベル）
- **Nav Font**: proxima-nova, 13〜20px

### Footer

- **Footer BG**: `#141414`（ニアブラック）
- **Footer Text**: `#cccccc`（ライトグレー）/ `#999999`（ミュート）
- **Footer Heading**: 28px / weight 100 / letter-spacing 2px

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Kozuka Gothic Pro（小塚ゴシック Pro）** を最優先。Adobe 製の本文向けゴシック体
- **フォールバック**: `"Hiragino Kaku Gothic Pro"` → `"ヒラギノ角ゴ Pro W3"` → `メイリオ` → `Meiryo` → `Helvetica` → `Arial` → `Verdana` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **ブランド書体**: **proxima-nova**（Adobe Fonts）。ジオメトリックサンセリフ。ヒーロー、ナビ、ラベル、CTA に使用
- **本文欧文**: Kozuka Gothic Pro チェーンの末尾に `Helvetica`, `Arial`, `Verdana` が含まれるが、基本は Kozuka Gothic Pro の欧文グリフを使用
- **等幅**: 指定なし

### 3.3 font-family 指定

```css
/* 本文・カテゴリ見出し・セクションラベル（和文系） */
font-family: "Kozuka Gothic Pro", "Hiragino Kaku Gothic Pro",
  "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", Helvetica, Arial, Verdana, sans-serif;

/* ヒーロー・ナビ・ラベル・CTA（欧文ブランド系） */
font-family: proxima-nova, sans-serif;
```

**フォールバックの考え方**:
- **デュアルフォントシステム**: 欧文ブランド要素は proxima-nova 単独、和文コンテンツは Kozuka Gothic Pro チェーン。2系統を明確に分離
- Kozuka Gothic Pro は Adobe Fonts のため、未契約環境では Hiragino Kaku Gothic Pro へフォールバック
- `"ヒラギノ角ゴ Pro W3"` は日本語名でのフォールバック（古い OS 対応）
- メイリオ / Meiryo は Windows 向け。`"ＭＳ Ｐゴシック"` は最終和文フォールバック
- proxima-nova 不在時は `sans-serif` へ直接フォールバック（和文フォントを挟まない）

> **代替フォント注記**: proxima-nova は Adobe Fonts のドメインライセンスのため、preview.html では表示されない。代替として **Montserrat**（Google Fonts）を使用。同じジオメトリックサンセリフで、weight 100〜700 の幅広いウェイトをカバーする。和文は **Noto Sans JP** で代替。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Display | proxima-nova | 80px | 400 | 80px (x1.0) | 0 | `#ffffff` | "V-Drums 5 Series" |
| Hero Display Alt | proxima-nova | 105px | **100** | 105px (x1.0) | 0 | `#ffffff` | ウルトラシン。最大インパクト |
| Category H2 | Kozuka Gothic | 44px | **100** | 44px (x1.0) | 3px | `#000000` | "Pianos" 等のカテゴリ名 |
| Subcategory H2 | Kozuka Gothic | 21.92px | 600 | 26.3px (x1.2) | 0 | `#000000` | サブカテゴリ見出し |
| Section Label H3 | Kozuka Gothic | 14.4px | 400 | 14.4px (x1.0) | 1px | `#333333` | セクションラベル |
| Footer H3 | Kozuka Gothic | 28px | **100** | 33.6px (x1.2) | 2px | `#cccccc` | フッター見出し |
| Nav H3 | proxima-nova | 15px | 300 | 15px (x1.0) | 0 | `#cccccc` | ナビカテゴリ "Products" |
| Featured Label H5 | Kozuka Gothic | 13.6px | 600 | 13.6px (x1.0) | 1px | `#808080` | フィーチャーラベル |
| Notice H5 | Kozuka Gothic | 11px | 400 | 14.3px (x1.3) | 1px | `#808080` | 小注釈 |
| Lead P | proxima-nova | 16px | 300 | 16px (x1.0) | 0 | `#ffffff` | ヒーロー下リード文 |
| Body P | Kozuka Gothic | 12px | 400 | 21.6px (x**1.8**) | 1px | `#454545` | 本文テキスト |
| Body Default | Kozuka Gothic | 20px | 400 | 30px (x1.5) | 0 | `#000000` | body 要素デフォルト |
| Nav Span | proxima-nova | 20px | 400 | 30px (x1.5) | 0 | `#ffffff` | ナビメニュー大ラベル |
| Nav Link | proxima-nova | 13px | 400 | 13px (x1.0) | -0.5px | `#666666` | ナビリンク |
| CTA Button | proxima-nova | 14.4px | 700 | — | 0 | `#ffffff` | "Apply" 等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (12px)**: `1.8`（21.6px / 12px）— 小さめ文字サイズに対して広い行間で可読性を確保
- **body デフォルト (20px)**: `1.5`（30px / 20px）
- **ディスプレイ見出し (80〜105px)**: `1.0`（文字サイズ＝行高さ）— 大型見出しはタイトに塊化
- **カテゴリ見出し (44px)**: `1.0`
- **セクションラベル (14.4px)**: `1.0`
- **サブカテゴリ (21.92px)**: `1.2`
- **フッター見出し (28px)**: `1.2`

**字間 (letter-spacing)** — 実測:
- **カテゴリ見出し (44px)**: `3px` — 最も広い。カテゴリ名をゆったり配置
- **フッター見出し (28px)**: `2px`
- **セクションラベル / 本文 (12〜14.4px)**: `1px` — コンテンツ系全般
- **フィーチャーラベル / 注釈 (11〜13.6px)**: `1px`
- **ナビリンク (13px)**: `-0.5px` — ナビのみ負のトラッキング
- **ヒーロー / ナビ大ラベル**: `0`

**ガイドライン**:
- Roland のタイポグラフィは **"大きい＝タイト、小さい＝広い"** の対比が特徴
- ディスプレイ見出しは line-height 1.0 + letter-spacing 0 で塊感を出す
- 本文・ラベルは letter-spacing 1px で均等に広げ、小さな文字でも読みやすくする
- カテゴリ名は letter-spacing 3px で贅沢に空間を使う
- ナビリンクだけが `-0.5px` の負トラッキング（コンパクトに詰める例外）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ヒーロー見出しは改行なしの 1 行で表示（大型タイポグラフィ）
- カテゴリラベルは短いテキスト（"Pianos"、"Drums"）のため折り返し不要

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- proxima-nova はデフォルトのメトリクスカーニングに任せる
- Kozuka Gothic Pro の和文も letter-spacing 1px で均等配置するため palt 不使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（Roland Orange）** — "Apply"、"Allow All"、"Confirm"
- Background: `#ff5a00`
- Text: `#ffffff`
- Padding: `12px 30px`
- Border: `1px solid #ff5a00`
- Border Radius: `2px`（角丸ではなくほぼ直角）
- Font: proxima-nova, 14.4px, weight 700
- Hover: 推奨 `#e65100`（やや暗い Orange）

**Explore Chip（黒チップ）** — "Explore" + 矢印
- Background: `#000000`
- Text: `#ffffff`
- Padding: `0px 7px 0px 15px`
- Border Radius: 推奨 `2px`
- Font: proxima-nova, 12px, weight 400
- 注: ヒーローやカテゴリカード内の遷移チップ

**Secondary / Ghost（推奨実装）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `12px 30px`
- Border Radius: `2px`
- Font: proxima-nova, 14.4px, weight 700

**Text Link**
- Background: transparent
- Text: `#000000` または `#666666`
- Font: proxima-nova, 13〜16px, weight 400
- Decoration: underline on hover

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #ff5a00`
- Border Radius: `2px`
- Padding: `10px 14px`
- Font: Kozuka Gothic Pro chain, 14px, weight 400
- Height: `40px`

### Cards / Surfaces

- Background: `#ffffff`（白カード on グレー背景 `#e5e5e5`）
- Border: なし（白カードがグレー背景から自然に浮く）
- Border Radius: `0px`（角丸なし — 楽器メーカーらしいシャープさ）
- Shadow: 基本なし。ホバー時に薄い影を推奨
- Padding: `20〜32px`

### Header / Navigation

- Background: `#000000`（黒ベタ）
- Text: `#ffffff`（メイン）/ `#cccccc`（サブ）/ `#666666`（ミュートラベル）
- Height: 推奨 60〜72px
- Position: `fixed top: 0`
- z-index: 100 程度

### Footer

- Background: `#141414`
- Text: `#cccccc`（リンク）/ `#999999`（補助）
- Heading: 28px / weight 100 / letter-spacing 2px — ウルトラシンのフッター見出し
- Padding: `48px 32px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ラベル間の微小余白 |
| M | 16px | 本文段落間 |
| L | 24px | カード内余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下の大余白 |

### Container

- Max Width: `1200px` 程度（実サイトはフル幅ヒーロー + 中央寄せコンテンツ）
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0px | カード・画像（角丸なし） |
| Minimal | 2px | CTA ボタン・入力欄 |

Roland のデザインは**角丸をほぼ使わない**。シャープなエッジが楽器メーカーの精密さを表現。

### Grid

- 実サイトはフレキシブルグリッド（カテゴリカード 2〜4 列）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.12)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.16)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **グレー背景 `#e5e5e5` 上の白カード** というコントラストで表現（影なしでも浮いて見える）
- ナビゲーションは `#000000` ベタ塗りで物理的に暗い層を作る
- フッターは `#141414` で沈み込む最深層

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景は **`#e5e5e5`（ライトグレー）** を使い、白 `#ffffff` はカード面に限定する
- 欧文ブランド要素は **proxima-nova**、和文コンテンツは **Kozuka Gothic Pro チェーン** の 2 系統を使い分ける
- ディスプレイ見出しには **weight 100（ultra-thin）** を積極的に使い、品格ある印象を出す
- 本文の letter-spacing は **1px** を基本にする（日本語の可読性向上）
- カテゴリ名は **letter-spacing 3px** で贅沢に空間を取る
- CTA は **`#ff5a00`（Roland Orange）** に集中させ、ユーザーアクションを明確にする
- ボタンの border-radius は **2px**（ほぼ直角）でシャープに保つ
- カードは **角丸 0px** で楽器メーカーの精密さを表現する
- ナビは **黒背景 `#000000`** + 白テキストでダークモードナビを維持する

### Don't（禁止）

- ページ背景を **白 `#ffffff`** にしない（Roland のグレー背景は意図的なデザイン）
- CTA に **黒 `#000000` や青系** を使わない — 主要アクションは必ず Roland Orange `#ff5a00`
- 見出しに **太字（700〜900）だけ** を使わない — weight 100 のウルトラシンが Roland の個性
- **大きな角丸（8px 以上）やピル形状（9999px）** を使わない — Roland のデザインはシャープなエッジが基本
- proxima-nova のフォールバックに **和文フォントを挟まない**（欧文ブランド系は `sans-serif` 直行）
- 本文の letter-spacing を **0** にしない（Roland は 1px の広いトラッキングが基本）
- ディスプレイ見出しの line-height を **1.2 以上** にしない（1.0 のタイト設定が必須）
- ナビゲーションを **白背景** にしない（黒背景がブランドアイデンティティ）
- **影でカードを浮かせる** のではなく、グレー背景と白カードのコントラストで階層を作る

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ヒーロー文字縮小 |
| Tablet | 768〜1023px | タブレット。2 カラムグリッド |
| Desktop | ≥ 1024px | デスクトップ。フル表示 |

### モバイル時の調整

- Hero Display: 80〜105px → 36〜48px
- Category H2: 44px → 28〜32px
- Body P: 12px → 14px（モバイルでは可読性のためやや大きく）
- ナビはハンバーガー化
- カテゴリカードは 1 列スタック

### タッチターゲット

- CTA ボタン: padding `12px 30px` + font 14.4px ≒ 高さ 42px。モバイルでは 44px 以上を推奨
- ナビリンク: タッチ領域を padding で 44px 以上に拡張

### ダークモード

- 該当なし（実測時点で未対応）
- ナビ・フッターは既にダーク配色のため、ダークモード導入時はコンテンツエリアのみの切り替えが自然

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Roland Orange (CTA): #ff5a00
Black (Nav BG): #000000
Near Black (Footer BG): #141414
Dark Gray (Label): #333333
Mid Gray (Body Text): #454545
Nav Label: #666666
Muted: #808080
Footer Muted: #999999
Footer Light: #cccccc
Page Background: #e5e5e5 (ライトグレー — 白ではない！)
White (Card Surface): #ffffff

English Font: proxima-nova, sans-serif
Japanese Font: "Kozuka Gothic Pro", "Hiragino Kaku Gothic Pro",
  "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", Helvetica, Arial, Verdana, sans-serif
（proxima-nova 不在時の代替: Montserrat）
（Kozuka Gothic Pro 不在時の代替: Noto Sans JP）

Hero Display: 80-105px / weight 100-400 / line-height 1.0
Category H2: 44px / weight 100 / line-height 1.0 / letter-spacing 3px
Body P: 12px / weight 400 / line-height 1.8 / letter-spacing 1px
CTA: 14.4px / weight 700 / #ff5a00 bg / #fff text / radius 2px
Border Radius: 0px (カード) / 2px (ボタン) — 角丸を使わない
Shadow: 基本 none。階層は #e5e5e5 背景と #fff カードのコントラストで表現
```

### プロンプト例

```
Roland のデザインに従って、電子楽器の製品カテゴリページを作成してください。
- ページ背景: #e5e5e5（ライトグレー）— 白にしない
- カード背景: #ffffff（白）— グレー背景から自然に浮く
- ナビ: 黒背景 #000000 + 白テキスト #ffffff
- カテゴリ見出し: 44px / weight 100 / line-height 1.0 / letter-spacing 3px / color #000
- セクションラベル: 14.4px / weight 400 / letter-spacing 1px / color #333
- 本文: 12px / weight 400 / line-height 1.8 / letter-spacing 1px / color #454545
- 欧文フォント: proxima-nova, sans-serif
- 和文フォント: "Kozuka Gothic Pro", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, sans-serif
- CTA: 背景 #ff5a00（Roland Orange）/ 白文字 / border-radius 2px / padding 12px 30px / 14.4px / weight 700
- Explore チップ: 背景 #000 / 白文字 / 12px / weight 400
- カードは border-radius 0px（角丸なし）、box-shadow なし
- フッター: 背景 #141414 / テキスト #cccccc / 見出し weight 100
- ディスプレイ見出しは weight 100 のウルトラシンを使う
- 大きな角丸やピル形状は使わない — シャープなエッジが基本
```
