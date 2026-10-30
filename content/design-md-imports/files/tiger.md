# DESIGN.md — TIGER Corporation（タイガー魔法瓶）

> TIGER Corporation（https://www.tiger-corporation.com/）のデザイン仕様書。
> 1923年創業の魔法瓶メーカー。炊飯器、電気ケトル、ステンレスボトル等の家庭用調理・保温製品を展開。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 工業製品メーカーとしての**信頼感と堅実さ**を基調に、`#005ab3` のブルー CTA と `#27455c` のダークネイビーセクションでプレミアム感を演出。`#b78a28` のゴールドアクセントで顧客サポート領域に温かみを添える
- **密度**: 本文は 16px / line-height 1.6 で標準的。製品一覧は情報密度高め、コーポレートページはゆったりめ
- **キーワード**: 堅実、信頼、工業的、プレミアム、日本の家電メーカー
- **特徴**:
  - **フォントスタックが極めてコンパクト**: `"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif` の 2 書体のみ。余計な欧文フォントを挟まない割り切った構成
  - **CTA は角張り（radius 0px）とピル（radius 50px）の二刀流**: 主要 CTA "会員登録" は角形ボタン、製品カテゴリフィルターはピル型。用途で使い分ける
  - ダークネイビー `#27455c` セクションで製品を引き立てるプレミアム演出
  - ゴールド `#b78a28` は「お客様サポート」専用。ブランドの温かみと顧客への敬意を表す
  - WordPress ベースだが、CSS 変数は WP デフォルトのため独自デザイントークンは持たない
  - **letter-spacing / palt / kern は全要素 normal**。OpenType 機能を使わないシンプルな組版
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Tiger Blue** (`#005ab3`): メインのブランドカラー。主要 CTA "会員登録" の背景、アクティブなカテゴリフィルターに使用
- **Tiger Blue Dark** (`#004ea2`): カテゴリフィルターのアクティブ状態。Tiger Blue の暗めバリエーション
- **Tiger Gold** (`#b78a28`): 「お客様サポート」セクションのアクセントカラー。CTA 背景に使用。サポート・信頼の意味を持つ

### CTA / Buttons

- **Primary CTA**: 背景 `#005ab3` / 文字 `#ffffff` / radius `0px` / "会員登録" 等のメインアクション
- **Secondary CTA**: 背景 `#ffffff` / 文字 `#333333` / border `1px solid #333333` / radius `0px` / "製品登録" "お問い合わせ" 等
- **Support CTA**: 背景 `#b78a28` / 文字 `#ffffff` / radius `0px` / "お客様サポート" 領域
- **Category Filter (Active)**: 背景 `#004ea2` / 文字 `#ffffff` / radius `50px`（pill）
- **Category Filter (Inactive)**: 背景 `#ffffff` / 文字 `#333333` / border `1px solid #e7e7e7` / radius `50px`（pill）
- **Carousel Dot (Active)**: 背景 `#ffffff`（不透明）
- **Carousel Dot (Inactive)**: 背景 `rgba(255,255,255,0.3)`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#333333` | (51, 51, 51) | 本文テキスト |
| Text White | `#ffffff` | (255, 255, 255) | 暗い背景上のテキスト |
| Footer / Dark Section | `#333333` | (51, 51, 51) | フッター背景、ダークセクション |
| Deep Black | `#1c1c1c` | (28, 28, 28) | 最も暗いセクション背景 |
| Dark Navy | `#27455c` | (39, 69, 92) | プレミアムセクション背景 |
| Mid Gray | `#666666` | (102, 102, 102) | セクション区切り |
| Light Gray | `#e7e7e7` | (231, 231, 231) | 薄い区切り線 |
| Surface | `#f7f7f7` | (247, 247, 247) | カード・セクション背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトにはエラー／成功色は表面化していない。推奨補完値:

- **Danger**: `#cc0000` 程度のレッド
- **Success**: `#1e8e3e` 程度のグリーン
- **Warning**: `#e6a700` 程度のイエロー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ ProN（macOS）、游ゴシック（Windows）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、ヒラギノ角ゴ ProN / 游ゴシックの欧文グリフをそのまま使用
- 純粋な欧文サンセリフ（Helvetica Neue / Arial 等）は font-family に含まれない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h2〜h4, p, a, span, button, nav, header, footer） */
font-family: "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- ヒラギノ角ゴ ProN（macOS 標準）を最優先し、和文・欧文ともに統一
- Windows 環境では游ゴシック（`Yu Gothic`）にフォールバック
- 最小構成の 2 書体 + generic family。余計な欧文フォントを挟まないことで、和欧混植時の書体不一致を避ける
- Noto Sans JP / メイリオ等は指定されていない

> **代替フォント注記**: ヒラギノ角ゴ ProN は macOS / iOS 専用のシステムフォントのため、Web フォントとしては配信されない。preview.html では **Noto Sans JP**（weight 300 / 400 / 500 / 700）を代替使用。

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-09 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Hero Text | 30px | 400 | 48px (×1.6) | normal | ヒーロー白文字 |
| Section Title (h2) | 30px | 500 | 60px (×2.0) | normal | セクション見出し |
| Item Title (h2) | 28.8px | 500 | 34.56px (×1.2) | normal | 製品タイトル等 |
| Support Title (h2) | 24px | 500 | 33.6px (×1.4) | normal | サポート領域見出し |
| Category Title (h3) | 30px | 500 | 60px (×2.0) | normal | ニュースカテゴリ |
| Body Large (p) | 18px | 400 | 28.8px (×1.6) | normal | リード・大きめ本文 |
| Body (p) | 16px | 400 | 25.6px (×1.6) | normal | 標準本文 |
| Category (p) | 18px | 400 | 27px (×1.5) | normal | カテゴリラベル |
| Footer Heading (h4) | 15px | 700 | 40px (×2.67) | normal | フッター見出し白文字 |
| Small / Remarks | 12px | 300 | 19.2px (×1.6) | normal | 注釈・小文字 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `24px` (16px × 1.5)
- 本文 (p): `25.6px` (16px × **1.6**)
- 大きめ本文 (p): `28.8px` (18px × **1.6**)
- セクション見出し (h2): `60px` (30px × **2.0**) — ゆったりとした見出し行間
- 製品タイトル (h2): `34.56px` (28.8px × **1.2**) — タイトに詰めた製品名
- ヒーローテキスト: `48px` (30px × **1.6**)
- フッター見出し (h4): `40px` (15px × **2.67**) — 広い行間でフッターの可読性確保

**字間 (letter-spacing)** — 実測値:
- **全要素 `normal`**: 見出し・本文・ボタン・ナビすべてで letter-spacing は指定なし
- 字詰め調整は行っていない

**ガイドライン**:
- letter-spacing は一切使わない（実サイトに忠実）
- 行間は用途によって 1.2〜2.67 まで幅広く変動する。特にフッター (×2.67) は異例に広い
- 本文は一貫して ×1.6

### 3.6 禁則処理・改行ルール

```css
/* WordPress デフォルトの基本設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

- `word-wrap: break-word` をグローバルに適用
- 特別な禁則処理の CSS は確認されなかった

### 3.7 OpenType 機能

```css
/* 全要素で適用なし */
font-feature-settings: normal;
```

- **palt / kern ともに使用しない**。見出しを含め全要素で `normal`
- プロポーショナル字詰めは行わず、等幅の全角文字をそのまま並べるシンプルな組版

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（会員登録 CTA）**
- Background: `#005ab3`
- Text: `#ffffff`
- Padding: 12px 32px
- Border Radius: 0px（角形）
- Font Size: 16px
- Font Weight: 500

**Secondary（製品登録・お問い合わせ）**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#333333`
- Padding: 12px 32px
- Border Radius: 0px（角形）

**Support（お客様サポート）**
- Background: `#b78a28`
- Text: `#ffffff`
- Padding: 12px 32px
- Border Radius: 0px（角形）

**Category Filter Pill（製品カテゴリ）**
- Background (active): `#004ea2`
- Background (inactive): `#ffffff`
- Text (active): `#ffffff`
- Text (inactive): `#333333`
- Border: 1px solid `#e7e7e7`（inactive）
- Padding: 8px 20px
- Border Radius: 50px（pill）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e7e7e7`
- Border (focus): 1px solid `#005ab3`
- Border Radius: 0px
- Padding: 12px 16px
- Font Size: 16px

### Cards

- Background: `#ffffff` または `#f7f7f7`
- Border: 1px solid `#e7e7e7`
- Border Radius: 0px
- Padding: 24px
- Shadow: なし（フラットデザイン）

### Navigation

- Background: `#ffffff`
- Border Bottom: 1px solid `#e7e7e7`
- テキスト色: `#333333`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |
| XXXL | 80px |

### Container

- Max Width: 1200px
- Padding (horizontal): 20px

### Grid

- Columns: 製品一覧は 3〜4 カラム（デスクトップ）
- Gutter: 20px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインが基本 |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | ドロップダウンメニュー |

- サイト全体がフラットデザイン基調。影の使用は極めて控えめ
- 製品カードはボーダーのみで区切り、影は使わない
- ホバー時にのみ軽い影が付くインタラクション

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#333333` を使う（純粋な `#000000` ではない）
- CTA は `#005ab3`（Tiger Blue）を背景に使い、十分なコントラストを確保する
- 主要 CTA は角形（radius 0px）で工業的な堅実さを表現する
- カテゴリフィルター等の選択チップには pill 形（radius 50px）を使う
- フォントは `"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif` の最小構成を守る
- ダークセクションでは `#27455c`（ダークネイビー）を使い、純黒 `#000000` を避ける
- 本文の line-height は 1.6 を基本とする
- サポート系の CTA には `#b78a28`（ゴールド）を使い、通常 CTA と差別化する

### Don't（禁止）

- `font-family` に Helvetica Neue や Arial を追加しない（実サイトの構成に含まれない）
- `letter-spacing` や `font-feature-settings: "palt"` を適用しない（実サイトは全要素 normal）
- ブランドブルー `#005ab3` とゴールド `#b78a28` を同じコンポーネント内で混ぜない（用途が異なる）
- カードに角丸（border-radius）を付けない（工業的なフラットデザインが基本）
- フッターの行間 (×2.67) を本文に適用しない（フッター専用のゆったり設定）
- ダークセクション背景に `#000000` を使わない（`#27455c` か `#333333` か `#1c1c1c` を使う）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 14〜16px
- 見出しはデスクトップの 70〜80% に縮小（30px → 22px 程度）
- カテゴリフィルターは横スクロールに変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Primary): #005ab3
Brand Color (Support): #b78a28
Text Primary: #333333
Text White: #ffffff
Background: #ffffff
Surface: #f7f7f7
Dark Section: #27455c
Footer BG: #333333
Border: #e7e7e7

Font: "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif

Body Size: 16px / line-height: 1.6 / letter-spacing: normal
Heading Size: 30px / weight: 500 / line-height: 2.0
palt/kern: なし（全要素 normal）
CTA Radius: 0px（角形）
Filter Pill Radius: 50px
```

### プロンプト例

```
タイガー魔法瓶のデザインに従って、製品一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif
- テキスト色: #333333（純粋な黒は使わない）
- 背景: #ffffff、カード背景: #f7f7f7
- ボーダー: #e7e7e7
- 主要 CTA: 背景 #005ab3、文字 #ffffff、角形（radius 0px）
- カテゴリフィルター: pill（radius 50px）、アクティブ時 背景 #004ea2
- 見出し: 30px, weight 500, line-height: 2.0
- 本文: 16px, weight 400, line-height: 1.6
- letter-spacing: normal（palt/kern なし）
- プレミアムセクション: 背景 #27455c で暗い演出
```
