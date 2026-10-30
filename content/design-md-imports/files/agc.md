# DESIGN.md — AGC（AGC株式会社）

> AGC（https://www.agc.com/）のデザイン仕様書。
> 旧・旭硝子。ガラス・化学品・電子部材・セラミックスなど、素材の力で社会を支えるグローバル素材メーカー。
> 実サイトの computed style 実測（2026-05-25 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ディープネイビー `#001f6b` をブランドアイデンティティに据え、クールトーンのブルーグレーを基調に、**シャープなレッド `#e40046` の CTA** で行動を促す。素材メーカーとしての精密さ・信頼性・技術力を視覚的に表現
- **密度**: 本文の line-height が **2.0** と非常に広く、記事・IR 情報を落ち着いて読ませるメディア寄りの組版。余白を贅沢に使うコーポレートサイト
- **キーワード**: ディープネイビー、コーポレート、精密、クールトーン、シャープコーナー、素材メーカーの信頼感
- **特徴**:
  - **テキストカラーがネイビー `#001f6b`**（純黒ではない）。見出し・本文・リンク以外のほぼ全テキストがこの色で統一されており、AGC のブランドアイデンティティそのもの
  - **CTA ボタンは `#e40046`（ビビッドレッド）で border-radius 2px**。角がほぼ直角のシャープなコーポレートボタン。pill ではない
  - **ピル型ボタン `#3860be`（ミディアムブルー）は radius 17px** でサブアクション用。メインCTA とは明確に分離
  - サーフェスに `#dae0e4`（ブルーグレー）と `#d5e9ff`（ライトブルー）の2種を使い分け
  - フッターは `#465a64`（ダークブルーグレー）にライトブルーテキスト `#dcebff`
  - フォントは **Noto Sans JP** 一本。欧文も和文も統一
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Primary Navy** (`#001f6b`): ブランドアイデンティティカラー。テキストカラーとして全面的に使用（見出し・本文・ナビ）。AGC のコーポレートブルー
- **Accent Red** (`#e40046`): メイン CTA ボタンの背景色。行動喚起・重要アクションに使用
- **Medium Blue** (`#3860be`): ピル型サブボタンの背景。ネイビーより明るいブルーでセカンダリアクションを表現

### CTA / Buttons

- **Primary CTA**: 背景 `#e40046` / 文字 `#ffffff` / radius `2px`（シャープ）/ padding `12px 32px` / ~13px / weight 600
- **Pill Button**: 背景 `#3860be` / 文字 `#ffffff` / radius `17px`（ピル寄り）
- **White Button**: 背景 `#ffffff` / 文字 `#001f6b` / border `1px solid #001f6b` / radius `2px`

### Neutral — Cool Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Navy (Text) | `#001f6b` | (0, 31, 107) | 全テキスト・見出し・本文 |
| Link Blue | `#1566cc` | (21, 102, 204) | テキストリンク |
| Footer Dark | `#465a64` | (70, 90, 100) | フッター背景 |
| Footer Text | `#dcebff` | (220, 235, 255) | フッター内テキスト |
| Blue-Gray Surface | `#dae0e4` | (218, 224, 228) | ヒーロー背景・セクション面 |
| Light Blue Surface | `#d5e9ff` | (213, 233, 255) | 強調面・ハイライト領域 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード面 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。コーポレートサイト向けに推奨する補完値:

- **Danger**: `#c9243f` 程度（ブランドレッド `#e40046` と調和する暗めのレッド）
- **Success**: `#1a7a3a` 程度のグリーン
- **Warning**: `#c67a00` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を使用。Google Fonts 提供のオープンソースフォント
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**Noto Sans JP の欧文グリフ**がそのまま使われる
- font-family には和文フォントのみ指定し、フォールバックは `sans-serif` で終端

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h5, p, a, span, button, nav, header, footer） */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP が唯一の指定フォント。ウェイト 400 / 700 を使用
- 欧文専用書体は挟まない。Noto Sans JP の欧文グリフで統一
- 極めてシンプルな構成で、環境差が出にくい

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-25 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | Noto Sans JP | 36px | **400** | 46.8px (x1.3) | normal | `#001f6b` | ヒーロー見出し。400 で軽やかに |
| Section H2 | Noto Sans JP | 18px | **700** | 21.6px (x1.2) | normal | `#001f6b` | セクション見出し。太字で区切り |
| Body (P) | Noto Sans JP | 16px | 400 | 32px (x**2.0**) | normal | `#001f6b` | 本文。line-height 2.0 が特徴的 |
| Link (A) | Noto Sans JP | 16px | 400 | 28.8px (x1.8) | normal | `#1566cc` | テキストリンク |
| Button CTA | Noto Sans JP | ~13px | 600 | 15.6px (x1.2) | 0.01em | `#ffffff` | CTA ボタンラベル |
| Footer P | Noto Sans JP | 10px | 400 | 20px (x2.0) | normal | `#dcebff` | フッター注釈。2.0 維持 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `2.0`（32px / 16px）— 日本語コーポレートサイトでも広い部類。IR・技術情報を読ませるための配慮
- **フッター (10px)**: `2.0`（20px / 10px）— 本文と同じ比率を維持
- **リンク (16px)**: `1.8`（28.8px / 16px）
- **H1 (36px)**: `1.3`（46.8px / 36px）— 見出しは引き締め
- **H2 (18px)**: `1.2`（21.6px / 18px）— セクション見出しはタイト

**字間 (letter-spacing)** — 実測:
- **全テキスト**: `normal`（明示的な letter-spacing 指定なし）
- **ボタンラベル**: `0.01em`（ほぼ normal と同等）

**ガイドライン**:
- AGC は letter-spacing をほぼ使わず、Noto Sans JP のメトリクスに任せる方針
- line-height 2.0 が全体を貫くリズム。ゆったりとした行間で技術的な文章の可読性を確保
- 見出しは 1.2〜1.3 でタイトに詰めて、本文との対比を作る

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（コーポレートサイト標準） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 技術用語・製品名が長い場合があるため、`overflow-wrap: break-word` で安全に折り返す

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- letter-spacing も normal で、フォントのデフォルトメトリクスをそのまま使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（レッド・シャープ）** — メインの行動喚起
- Background: `#e40046`
- Text: `#ffffff`
- Padding: `12px 32px`
- Border Radius: `2px`（ほぼ直角。AGC の特徴的なシャープコーナー）
- Font: Noto Sans JP, ~13px, weight 600
- Border: none
- Letter Spacing: `0.01em`

**Pill Button（ミディアムブルー）** — サブアクション
- Background: `#3860be`
- Text: `#ffffff`
- Padding: `8px 20px`
- Border Radius: `17px`（ピル寄り）
- Font: Noto Sans JP, ~13px, weight 600
- Border: none

**Secondary（白・アウトライン）** — 控えめなアクション
- Background: `#ffffff`
- Text: `#001f6b`
- Border: `1px solid #001f6b`
- Padding: `12px 32px`
- Border Radius: `2px`
- Font: Noto Sans JP, ~13px, weight 600

**Text Link** — 本文中のリンク
- Background: transparent
- Text: `#1566cc`
- Padding: `0`
- Font: Noto Sans JP, 16px, weight 400
- Text Decoration: underline（ホバー時）

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #dae0e4`（ブルーグレーボーダー）
- Border (focus): `2px solid #001f6b`
- Border Radius: `2px`（ボタンと統一したシャープコーナー）
- Padding: `12px 16px`
- Font: Noto Sans JP, 16px, weight 400
- Height: `44px`
- Color: `#001f6b`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#dae0e4`（ブルーグレー面）/ `#d5e9ff`（ライトブルー面）
- Border: `1px solid #dae0e4` または border なし
- Border Radius: `4px`（控えめな角丸）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #dae0e4`
- Position: `fixed top: 0`
- z-index: 100

### Footer

- Background: `#465a64`（ダークブルーグレー）
- Text: `#dcebff`（ライトブルー）
- Font Size: `10px`
- Line Height: `2.0`
- Padding: `40px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px`
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 2px | CTA ボタン・セカンダリボタン・入力欄 |
| Small | 4px | カード・サーフェス |
| Pill | 17px | ピル型サブボタン |

### Grid

- 12 カラムグリッド
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン（基本フラット） |
| 1 | `0 2px 8px rgba(0, 31, 107, 0.08)` | ホバー時の浮き上がり |
| 2 | `0 4px 16px rgba(0, 31, 107, 0.10)` | ドロップダウン・ポップオーバー |
| 3 | `0 8px 32px rgba(0, 31, 107, 0.12)` | モーダル・ダイアログ |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ブルーグレーサーフェス** `#dae0e4` と **ライトブルーサーフェス** `#d5e9ff` の色面で表現
- 影を使う場合も**ネイビー系の影色** `rgba(0, 31, 107, ...)` を推奨（純黒の影よりブランドと調和する）

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストカラーは **ネイビー `#001f6b`** を使う（純黒 `#000000` ではない）。AGC の最大の視覚的特徴
- CTA ボタンは **`#e40046` のシャープコーナー（radius 2px）** で作る。角が立つことで精密・信頼の印象が出る
- 本文の line-height は **2.0** を基本にする。AGC の技術的な文章を読みやすく見せるリズム
- サーフェスは **`#dae0e4`（ブルーグレー）** と **`#d5e9ff`（ライトブルー）** を使い分け、白との3層で階層を表現
- フッターは **`#465a64` 背景 + `#dcebff` テキスト** のクールトーンで統一
- フォントは **Noto Sans JP** 一本で、ウェイトは 400（本文）と 700（見出し）の2段階
- リンクは **`#1566cc`** で、ネイビーテキストと区別しつつ同系色で調和させる

### Don't（禁止）

- テキストに **純黒 `#000000`** を使わない — AGC ではネイビー `#001f6b` がテキストカラー
- CTA ボタンを **pill（9999px）** にしない — AGC のボタンは 2px の直角が特徴。pill はサブアクション（17px）のみ
- CTA に **ブルー系（`#3860be` や `#1566cc`）を使わない** — メイン CTA は必ずレッド `#e40046`
- **ウォーム系のグレー**（`#f2f2f0`、`#737368` 等）を使わない — AGC はクールトーン一貫
- 本文に **line-height 1.5 以下** を使わない（AGC の line-height 2.0 のリズムが崩れる）
- letter-spacing に **負の値** を使わない — AGC は全体的に `normal` で統一
- 角丸を **8px 以上** にしない（シャープなコーポレート感が失われる）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- Hero H1: 36px → 24〜28px
- Section H2: 18px → 16px
- 本文サイズは 16px を維持（line-height も 2.0 維持）
- ボタンは幅 100% のブロック表示に切り替え

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタン: 高さ 44px 以上（padding `12px 32px` + ~13px font）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Navy (Text): #001f6b
Accent Red (CTA): #e40046
Medium Blue (Pill): #3860be
Link Blue: #1566cc
Blue-Gray Surface: #dae0e4
Light Blue Surface: #d5e9ff
Footer Dark: #465a64
Footer Text: #dcebff
White: #ffffff

Font: "Noto Sans JP", sans-serif
Body Size: 16px / line-height 2.0 / weight 400 / letter-spacing normal
H1: 36px / line-height 1.3 / weight 400
H2: 18px / line-height 1.2 / weight 700
Button: ~13px / weight 600 / letter-spacing 0.01em

CTA Radius: 2px（シャープ）
Pill Radius: 17px（サブアクション用）
Card Radius: 4px
Shadow: 基本 none。階層は #dae0e4 / #d5e9ff サーフェスで表現
```

### プロンプト例

```
AGC のデザインに従って、素材メーカーの製品紹介セクションを作成してください。
- フォント: "Noto Sans JP", sans-serif
- テキストカラー: #001f6b（ネイビー）— 純黒は使わない
- セクション見出し: 18px / weight 700 / line-height 1.2 / color #001f6b
- 本文: 16px / weight 400 / line-height 2.0 / letter-spacing normal / color #001f6b
- リンク: 16px / weight 400 / line-height 1.8 / color #1566cc
- 主要 CTA: 背景 #e40046（レッド）/ 白文字 / border-radius 2px / padding 12px 32px / ~13px / weight 600
- サブボタン: 背景 #3860be（ミディアムブルー）/ 白文字 / border-radius 17px / padding 8px 20px
- セカンダリ: 背景 白 / 文字 #001f6b / border 1px solid #001f6b / radius 2px
- カード背景: 白 #ffffff、強調面は #dae0e4（ブルーグレー）または #d5e9ff（ライトブルー）
- フッター: 背景 #465a64 / テキスト #dcebff
- box-shadow は基本 none。立体感は色面で表現
- 角丸は 2〜4px のシャープ路線。pill は 17px のサブアクション専用
- ウォーム系グレーは使わない。クールトーン一貫
```
