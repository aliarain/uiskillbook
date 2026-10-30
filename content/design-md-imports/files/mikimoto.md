# DESIGN.md — MIKIMOTO（ミキモト）

> MIKIMOTO（https://mikimoto.com/jp-ja）のデザイン仕様書。
> 1893年創業、養殖真珠の発明者・御木本幸吉が興した日本発のラグジュアリージュエリーブランド。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白の余白と**シャンパンゴールド `#e5d3a9` のCTA**で真珠の光沢と品格を表現。見出しにセリフ体（Noto Serif JP）、本文にサンセリフ体（Noto Sans Japanese）という**クラシックラグジュアリーの二書体構成**
- **密度**: 本文の line-height は 2.0 と極めて広い。情報を詰め込まず、ゆとりある呼吸感で高級感を演出
- **キーワード**: ラグジュアリー、真珠の光沢、シャンパンゴールド、セリフ見出し、ワイドトラッキング、品格ある余白
- **特徴**:
  - **見出しにセリフ体、本文にサンセリフ体**というラグジュアリーブランドの定石を踏襲。Noto Serif JP の端正な明朝体が格式を、Noto Sans Japanese のゴシック体が現代性を担う
  - **ブランドカラーは `#e5d3a9`（シャンパンゴールド）**。真珠の温かな光沢を連想させる CTA の背景色。ボーダーには深みのある `#b58f36` を使用
  - **色数を極限まで絞る**: 黒 `#000000`・白 `#ffffff`・金 `#e5d3a9` の3色のみ。彩度のある色（赤・青・緑）は一切使わない
  - **letter-spacing 2px のワイドトラッキング**をボタンラベル・カテゴリラベル・バックボタンに適用。余裕のある字間がラグジュアリーブランドの落ち着きを表現
  - サーフェスに `#f2ebdc`（ライトゴールド）を使い、真珠のような温かみのある面を作る
  - `font-feature-settings: normal`（`palt` 未使用）。字詰めせず、均等な字間を保つ
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand --- Gold

- **Champagne Gold** (`#e5d3a9`): メインのブランドカラー。主要 CTA の背景色。真珠の温かな光沢を表現
- **Deep Gold** (`#b58f36`): CTA のボーダー色。シャンパンゴールドに深みと輪郭を与える
- **Light Gold Surface** (`#f2ebdc`): アクティブ状態のタブ背景、カード面。真珠のような温白の面

### CTA / Buttons

- **Primary CTA**: 背景 `#e5d3a9` / 文字 `#000000` / border `1px solid #b58f36` / radius `4px` / padding `19px 16px 20px` / 12px / weight 400 / letter-spacing 2px
- **Secondary CTA**（推奨実装）: 背景 `transparent` / 文字 `#000000` / border `1px solid #000000` / radius `4px` / padding `19px 16px 20px` / 12px / weight 400 / letter-spacing 2px
- **Text Link**: 文字 `#000000` / underline / 14px / weight 400

### Neutral --- Monochrome

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 見出し・本文テキスト・CTA 文字色 |
| Muted Gray | `#595959` | (89, 89, 89) | セレクト文字色・プレースホルダー |
| Light Gray | `#a7a7a7` | (167, 167, 167) | ミュートされた補助要素 |
| Chat BG | `#e6e6e6` | (230, 230, 230) | チャットウィジェット背景 |
| Light Gold | `#f2ebdc` | (242, 235, 220) | カード面・アクティブタブ背景 |
| Warm White | `#fffefe` | (255, 254, 254) | Cookie バナー背景（純白に僅かな温み） |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（推奨値）

実サイトにはエラー／成功色は表面化していない。ラグジュアリーブランドの抑制されたトーンに合わせた補完値:

- **Danger**: `#8b2020` 程度の深いレッド（派手にしない）
- **Success**: `#2d6a4f` 程度の落ち着いたグリーン
- **Warning**: `#b58f36`（Deep Gold を兼用）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: **Noto Sans Japanese** を使用。本文・ナビ・フォーム・UI 全般に適用
- **明朝体（見出し）**: **Noto Serif JP** を使用。h1・h2 等の見出しに適用し、格式と高級感を表現
- **フォールバック**: `sans-serif`（ゴシック体）/ `serif`（明朝体）

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans Japanese の欧文グリフを使用。専用の欧文書体は持たない
- **セリフ**: Noto Serif JP の欧文グリフを使用
- 純粋な欧文書体（Helvetica Neue, Inter 等）は font-family に含まれない

### 3.3 font-family 指定

```css
/* 見出し（h1, h2） */
font-family: "Noto Serif JP", serif;

/* 本文・UI（body, p, a, span, button, nav, input, select, label） */
font-family: "Noto Sans Japanese", sans-serif;

/* NotoSans 表記（ナビメニュー内） */
font-family: NotoSans, sans-serif;
```

**フォールバックの考え方**:
- 見出しは **Noto Serif JP** のみ指定し、フォールバックは `serif`。明朝体の品格を優先
- 本文は **Noto Sans Japanese** のみ指定し、フォールバックは `sans-serif`。可読性を優先
- ナビの一部に `NotoSans`（スペースなし）が使われている。同一フォントの別名表記
- Google Fonts から両方読み込み可能。ウェイト 400 のみ使用（ボールド不使用がブランドの特徴）

> **代替フォント注記**: Noto Serif JP / Noto Sans JP はいずれも Google Fonts で無料配信されており、ライセンス制限なく preview.html でも使用可能。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Noto Serif JP | 42px | 400 | 56px (x1.33) | normal | `#000000` | メインビジュアルのタイトル |
| Section H2 | Noto Serif JP | 28px | 400 | 38px (x1.36) | normal | `#000000` | セクション見出し |
| Mega Menu Subheading | Noto Sans Japanese | 32px | 400 | 38.4px (x1.2) | normal | `#000000` | メガメニュー内の大見出し |
| Search Input | Noto Sans Japanese | 28px | 400 | normal | normal | `#000000` | 検索フィールド |
| Nav Link | NotoSans | 16px | 400 | 19.2px (x1.2) | normal | `#000000` | グローバルナビ |
| Body | Noto Sans Japanese | 14px | 400 | 28px (x2.0) | normal | `#000000` | 本文テキスト |
| Wishlist | Noto Sans Japanese | 14px | 400 | 30px (x2.14) | normal | `#000000` | ウィッシュリスト |
| Form Input | Noto Sans Japanese | 14px | 400 | normal | normal | `#000000` | 入力フィールド |
| CTA Label | Noto Sans Japanese | 12px | 400 | 18px (x1.5) | **2px** | `#000000` | ボタンラベル（ワイドトラッキング） |
| Category Label | Noto Sans Japanese | 12px | 400 | normal | **2px** | `#000000` | サブメニューのカテゴリ名 |
| Back Button | Noto Sans Japanese | 12px | 400 | normal | **2px** | `#000000` | "Back" テキスト |
| Form Label | Noto Sans Japanese | 12px | 400 | 24px (x2.0) | normal | `#000000` | フォームラベル |
| Footer | Noto Sans Japanese | 12px | 400 | 23px (x1.92) | normal | `#000000` | フッターテキスト |
| Header Notice | Noto Sans Japanese | 12px | 400 | normal | normal | `#000000` | ヘッダー告知 |
| Language Selector | Noto Sans Japanese | --- | 400 | --- | **1px** | `#000000` | 言語切替リンク |

### 3.5 行間・字間

**行間 (line-height)** --- 実測:
- **本文 (14px)**: `2.0`（28px / 14px）--- **極めて広い行間**。ラグジュアリーブランドの呼吸感
- **フッター (12px)**: `1.92`（23px / 12px）--- 本文に準じた広さ
- **CTA ラベル (12px)**: `1.5`（18px / 12px）
- **見出し H1 (42px)**: `1.33`（56px / 42px）--- タイトに引き締め
- **見出し H2 (28px)**: `1.36`（38px / 28px）
- **ナビ (16px)**: `1.2`（19.2px / 16px）--- コンパクトなナビ高

**字間 (letter-spacing)** --- 実測:
- **本文・見出し**: `normal`（0）。大半の要素はデフォルトの字間を使用
- **CTA ラベル・カテゴリラベル・Back ボタン (12px)**: `2px` --- **ラグジュアリーブランド特有のワイドトラッキング**。小さなラベルに余裕と格式を持たせる
- **言語セレクター**: `1px` --- CTA ほどではないが、やや広げる

**ガイドライン**:
- 日本語本文は **line-height 2.0** が MIKIMOTO の基本リズム。1.75 以下は使わない
- 見出し（Noto Serif JP）は letter-spacing `normal` のまま。明朝体の自然なメトリクスを活かす
- **UI ラベル・ボタン文字には letter-spacing 2px** を適用。これがラグジュアリー感の核心
- ウェイトは全要素 **400（Regular）のみ**。ボールド（600/700）を使わないことで、繊細さと品格を表現

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- ヒーロー見出しは手動改行で位置を制御
- CTA ラベルは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Noto Serif JP / Noto Sans Japanese のデフォルトメトリクスに任せる方針
- 明朝体見出しに `palt` を入れると品格が崩れるため、意図的に `normal` を維持していると推測

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ゴールド角丸）** --- "ミキモトホーム"・"マイアカウント"・"登録する"
- Background: `#e5d3a9`（シャンパンゴールド）
- Text: `#000000`
- Border: `1px solid #b58f36`（ディープゴールド）
- Padding: `19px 16px 20px`（上下に大きな余白）
- Border Radius: `4px`（控えめな角丸）
- Font: Noto Sans Japanese, 12px, weight 400
- Letter Spacing: `2px`（ワイドトラッキング）

**Secondary CTA（黒ボーダー角丸）** --- 推奨実装
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `19px 16px 20px`
- Border Radius: `4px`
- Font: Noto Sans Japanese, 12px, weight 400
- Letter Spacing: `2px`

**Text Link** --- 本文中リンク
- Background: transparent
- Text: `#000000`
- Padding: `0`
- Font: Noto Sans Japanese, 14px, weight 400
- Border: none（必要に応じて underline）

### Inputs

- Background: `#ffffff`
- Border: `1px solid #595959`
- Border (focus): `1px solid #000000`（推奨）
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: Noto Sans Japanese, 14px, weight 400
- Height: `44px`

### Select

- Background: `#ffffff`
- Border: `1px solid #000000`
- Border Radius: `4px`
- Font: Noto Sans Japanese, 12px, weight 400
- Color: `#595959`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f2ebdc`（ライトゴールドの面）
- Border: none（影と面色で階層を表現）
- Border Radius: `0px`（直角が基本。ラグジュアリーブランドの端正さ）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`
- Border Bottom: なし
- Position: `fixed top: 0`
- z-index: 50 程度

### Footer

- Background: `#ffffff`
- Font: Noto Sans Japanese, 12px, weight 400
- Line Height: `1.92`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の横余白 |
| M | 16px | カード内の段落間・ボタンの横余白 |
| L | 24px | カードの内側余白・フッターの区切り |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下の大きなゆとり |
| XXXL | 120px | コレクションセクション間の余白（推奨） |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24~40px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | カード・画像・セクション（直角が基本） |
| Small | 4px | CTA ボタン・入力欄・セレクト |
| Medium | 8px | 推奨：ダイアログ・ポップオーバー |

### Grid

- シングルカラム中心のレイアウト（ジュエリーの大きなビジュアルを活かす）
- 商品グリッド: 2~4 カラム（Flexbox / CSS Grid）
- Gutter: 16~24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.04)` | ホバー時の微かな浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.06)` | ドロップダウン・メガメニュー |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.08)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- ラグジュアリーブランドは影を極力排し、**余白とサーフェス色**で階層を表現する
- 影を使う場合は **非常に薄く**（opacity 0.04~0.08）。存在を意識させない控えめさが鍵
- `#f2ebdc`（ライトゴールド面）と `#ffffff`（白）の対比でセクションの区切りを作る

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは **Noto Serif JP（明朝体）**、本文は **Noto Sans Japanese（ゴシック体）** の二書体構成を守る
- 本文の line-height は **2.0** を基本にする（14px で 28px）
- CTA ラベル・カテゴリラベルには **letter-spacing 2px** を適用し、ラグジュアリーな余裕を出す
- 主要 CTA は **`#e5d3a9`（シャンパンゴールド）背景 + `#b58f36` ボーダー**
- ウェイトは **全要素 400（Regular）のみ**。ボールドを使わない繊細さがブランドの特徴
- カードやセクションは **直角（border-radius 0）** を基本にする。角丸は CTA と入力欄のみ
- 色は **黒・白・金の3色**に限定する。彩度のある色を加えない

### Don't（禁止）

- 見出しに **ゴシック体（サンセリフ）を使わない** --- セリフ体の品格が失われる
- **font-weight 600 / 700 を使わない** --- MIKIMOTO は全要素 weight 400。太字は品格を損なう
- 本文に **line-height 1.75 以下**を使わない（ラグジュアリーの余白感が崩れる）
- **彩度の高い色**（赤 `#ff0000`、青 `#0066ff`、緑 `#00cc00` 等）を使わない --- 金・黒・白のみ
- CTA に **ピル形状（border-radius 9999px）を使わない** --- MIKIMOTO は `4px` の控えめな角丸
- CTA の letter-spacing を **normal にしない** --- `2px` のワイドトラッキングが必須
- **大きな box-shadow を使わない** --- ラグジュアリーブランドは影を極力排する
- カードに **丸い角丸（8px 以上）を使わない** --- 直角が基本
- `palt` を **見出しに適用しない** --- 明朝体の均等な字間が品格を生む

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ（ナビの分岐点） |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- ヒーロー H1: 42px -> 28~32px
- セクション H2: 28px -> 20~24px
- 本文サイズは 14px を維持（line-height も 2.0 維持）
- 商品グリッドは 2 カラム -> 1 カラム
- ナビはハンバーガーメニューへ切替

### タッチターゲット

- 主要 CTA: 高さ 56px 以上（padding `19px 16px 20px` + 12px font + 1.5 line-height = 約 57px）
- WCAG 基準の 44px を十分に確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Champagne Gold (CTA BG): #e5d3a9
Deep Gold (CTA Border): #b58f36
Light Gold Surface: #f2ebdc
Pure Black (Text): #000000
Muted Gray: #595959
White (BG): #ffffff

Heading Font: "Noto Serif JP", serif
Body Font: "Noto Sans Japanese", sans-serif

H1: 42px / weight 400 / line-height 1.33 / letter-spacing normal / Noto Serif JP
H2: 28px / weight 400 / line-height 1.36 / letter-spacing normal / Noto Serif JP
Body: 14px / weight 400 / line-height 2.0 / letter-spacing normal / Noto Sans Japanese
CTA Label: 12px / weight 400 / line-height 1.5 / letter-spacing 2px / Noto Sans Japanese
Footer: 12px / weight 400 / line-height 1.92 / Noto Sans Japanese

Border Radius: 0px（カード）/ 4px（CTA・入力欄）
Shadow: 基本 none。階層は #f2ebdc サーフェスと余白で表現
Weight: 全要素 400 のみ（ボールド不使用）
```

### プロンプト例

```
MIKIMOTO のデザインに従って、ジュエリーコレクションの一覧ページを作成してください。
- 見出しフォント: "Noto Serif JP", serif（明朝体）
- 本文フォント: "Noto Sans Japanese", sans-serif（ゴシック体）
- コレクション名（H1）: 42px / weight 400 / line-height 1.33 / Noto Serif JP
- セクション見出し（H2）: 28px / weight 400 / line-height 1.36 / Noto Serif JP
- 本文: 14px / weight 400 / line-height 2.0 / Noto Sans Japanese / color #000000
- 主要 CTA: 背景 #e5d3a9（シャンパンゴールド）/ 文字 #000000 / border 1px solid #b58f36 / radius 4px / padding 19px 16px 20px / 12px / weight 400 / letter-spacing 2px
- セカンダリ CTA: 背景 transparent / 文字 #000000 / border 1px solid #000000 / radius 4px / 12px / weight 400 / letter-spacing 2px
- カード: 背景 #ffffff / border-radius 0（直角）/ shadow なし
- サーフェス: #f2ebdc（ライトゴールド）でセクション背景を分ける
- ボーダー: なし（余白と面色で区切る）
- font-weight は全要素 400 のみ（ボールド禁止）
- 彩度のある色（赤・青・緑）は使わない。黒・白・金のみ
- CTA ラベルの letter-spacing は必ず 2px
```
