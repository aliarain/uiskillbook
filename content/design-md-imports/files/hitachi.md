# DESIGN.md — HITACHI（日立製作所）

> 日立製作所（https://www.hitachi.co.jp/）のデザイン仕様書。
> 実サイトの CSS Custom Properties および computed style に基づく。
> 抽出日: 2026-05-23

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: コーポレート・権威的・構造的。グローバルな総合テクノロジー企業として信頼性と堅牢さを視覚的に訴求するデザイン。白とグレーの清潔な基盤の上に、日立レッド（`#cc0000`）をシグネチャーアクセントとして配置
- **密度**: 情報整理型。コーポレートサイトとしてニュース・事業紹介・IRなど多岐にわたるコンテンツを整然と区分けしつつ、適度な余白で視認性を確保
- **キーワード**: 権威的、堅牢、クリーン、構造的、グローバル
- **特徴**: 自社ブランドフォント「Hitachi Sans」を使用。純黒ではなく `#0c0c0c` を基調テキスト色とし、グレースケール5段階（`--color-supportive-grey-1` 〜 `5`）で情報階層を表現。CTA・アクセントにはすべて日立レッド `#cc0000` を一貫して使用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Hitachi Red** (`#cc0000`): CSS 変数 `--primary-color`。CTA ボタン、バッジ、インタラクティブテキストリンク等に使用。日立のコーポレートアイデンティティカラー
- **Brand Red** (`#fa000f`): CSS 変数 `--brand-color`。ロゴ・ブランドマーク等に使用される、よりビビッドな赤

### Neutral（ニュートラル — CSS Custom Properties）

- **Black** (`#0c0c0c`): `--color-black`。本文テキスト
- **Supportive Grey 1** (`#f4f4f4`): `--color-supportive-grey-1`。セクション背景、カード面
- **Supportive Grey 2** (`#d9d9d9`): `--color-supportive-grey-2`。フッター背景、区切り線
- **Supportive Grey 3** (`#b3b3b3`): `--color-supportive-grey-3`。補助的な区切り
- **Supportive Grey 4** (`#737373`): `--color-supportive-grey-4`。セカンダリテキスト、キャプション
- **Supportive Grey 5** (`#4d4d4d`): `--color-supportive-grey-5`。強調テキスト、オーバーレイ
- **White** (`#ffffff`): `--color-white`。ページ背景、テキスト反転色

### Surface & Background

- **Background** (`#ffffff`): ページ背景
- **Surface Primary** (`#f4f4f4`): ナビゲーション、カード、セクション背景
- **Surface Footer** (`#d9d9d9`): フッター背景
- **Surface Dark** (`#0c0c0c`): ダーク要素（ヘッダー最上部等）
- **Surface Skip** (`#333333`): スキップナビゲーション

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体**:
- Hitachi Sans（自社ブランドフォント、プロプライエタリ）
- Noto Sans JP（フォールバック）
- Yu Gothic UI（Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Hitachi Sans（欧文グリフ内蔵）、Noto Sans（フォールバック）
- **等幅**: 指定なし（システムデフォルト）

### 3.3 font-family 指定

```css
/* グローバル */
font-family: "Hitachi Sans", "Noto Sans JP", "Yu Gothic UI", "Noto Sans", sans-serif;
```

**フォールバックの考え方**:
- 自社ブランドフォント Hitachi Sans を最優先で指定。欧文・和文両グリフを持つカスタムフォント
- Noto Sans JP → Yu Gothic UI の順で和文フォールバック
- Noto Sans で欧文をカバーし、最後に generic family
- Hitachi Sans はドメインライセンスのため、preview.html では Google Fonts の Noto Sans JP で代替

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-23 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Hero Text | 45px | 700 | 67.5px (×1.5) | normal | ブランディングエリアの大見出し、白テキスト |
| H2 Section | 32px | 600 | 40px (×1.25) | normal | セクションタイトル |
| H3 Section | 28px | 600 | 35px (×1.25) | normal | サブセクション見出し |
| H2 Teaser | 20px | 500 | 30px (×1.5) | normal | ティーザーカードの見出し |
| Nav Mega Sub | 18px | 600 | 24px (×1.33) | normal | メガメニューのサブカテゴリ |
| Body | 16px | 400 | 24px (×1.5) | normal | 本文テキスト |
| Nav Link | 14px | 500 | 21px (×1.5) | normal | ナビゲーションリンク |
| Footer | 12px | 400 | 18px (×1.5) | normal | フッターテキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `24px` (16px × 1.5)
- ヒーローテキスト: `67.5px` (45px × 1.5)
- 見出し H2/H3: `40px` / `35px` (×1.25) — 見出しはタイトに
- ティーザー H2: `30px` (20px × 1.5)
- ナビゲーション: `21px` (14px × 1.5)
- フッター: `18px` (12px × 1.5)

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal` — 日立サイトは letter-spacing を一切調整していない

**ガイドライン**:
- 全階層で `letter-spacing: normal`。字詰め調整は行わない
- 見出しの行間は `1.25` とタイト。本文・ナビは `1.5` で統一
- ヒーローテキストは 45px / 700 の大きく太い文字で存在感を出す

### 3.6 禁則処理・改行ルール

```css
/* 標準的な禁則設定 */
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* 全要素で palt 不使用 — 実測確認済 */
font-feature-settings: normal;
```

- **palt**: 不使用。日立サイトはプロポーショナル字詰めを適用していない
- **kern**: フォント内蔵のカーニングに依存（明示的な指定なし）
- Hitachi Sans がブランドフォントとして字間設計済みのため、追加の字詰めは不要と推測

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#cc0000`（日立レッド）
- Text: `#ffffff`
- Border: `1px solid #cc0000`
- Border Radius: `2px`（ほぼ直角、シャープな印象）
- Font Size: 16px
- Font Weight: 600
- Padding: `12px 10px`

**Search Button**
- Background: `#cc0000`
- Text: `#ffffff`
- Border Radius: `0px`（完全な直角）
- Padding: `9px 6px`

**Back to Top**
- Background: `#cc0000`
- Text: `#ffffff`
- Font Weight: 500

**テキストリンク（インタラクティブ）**
- Color: `#cc0000`（日立レッドをリンク色としても使用）

### Inputs

**検索入力（ヘッダー）**
- Background: `#ffffff`
- Border: `1px solid transparent`
- Border Radius: `0px`
- Font Size: 16px
- Padding: `6px 12px`

**検索入力（丸型）**
- Border: `1px solid #707070`
- Border Radius: `50px`（pill 型）
- Padding: `6px 35px 6px 15px`

### Navigation

- Background: `#f4f4f4`
- テキスト色: `#0c0c0c`
- リンク Weight: 500
- メガメニューサブ見出し Weight: 600

### Cards

- Background: `#ffffff` または `#f4f4f4`
- テキスト色: `#0c0c0c`
- ボーダー: `#d9d9d9` または透明

### Footer

- Background: `#d9d9d9`
- テキスト色: `#0c0c0c`
- Font Size: 12px
- Font Weight: 400

---

## 5. Layout Principles

### Spacing

- コーポレートサイトとして適度なセクション間余白を確保
- ヒーローエリアは大きなビジュアルとテキストオーバーレイで構成
- カードグリッドは均等な gap で整列

### Container

- Max Width: ワイドレイアウト（フルウィドスのセクション + 中央コンテンツ制約）
- コンテンツエリア: 約 1200px（中央寄せ）

### Grid

- ニュース・カードセクション: 3〜4カラムのグリッド
- Gutter: 均等

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | 軽微なシャドウ | カードホバー時 |

- 日立のコーポレートサイトはフラットデザインを基調とし、エレベーションの使用は最小限
- ボーダーとグレースケール背景色の差で情報階層を表現する手法を採用
- 過度なドロップシャドウは使用しない

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA・アクセントには必ず日立レッド `#cc0000` を使う。これがブランドの視覚的な統一要素
- テキスト色は `#0c0c0c` を使い、純粋な `#000000` を避ける
- グレースケール 5 段階（`#f4f4f4` → `#d9d9d9` → `#b3b3b3` → `#737373` → `#4d4d4d`）で情報階層を表現する
- ボタンの角は `0px` 〜 `2px` のシャープな形状を維持する（コーポレートの信頼感）
- font-family には必ず Hitachi Sans → Noto Sans JP → Yu Gothic UI のフォールバックチェーンを指定する
- 見出しは weight 600、本文は weight 400 で明確な太さのコントラストをつける
- ヒーロー・ブランディングエリアは 700 のボールド白テキストで力強さを出す
- `letter-spacing` と `font-feature-settings` は `normal` を維持する

### Don't（禁止）

- 日立レッド以外の赤（`#ff0000` 等）をブランドカラーとして使わない。`#cc0000` が正式な `--primary-color`
- ボタンに大きな角丸（`8px` 以上）を適用しない（日立のUIはシャープ・直線的なデザイン）
- `letter-spacing` や `palt` を追加しない（日立サイトは字詰め調整を一切行っていない）
- グレースケール以外の中間色（ベージュ、ブルーグレー等）を背景に使わない
- `--brand-color` (`#fa000f`) を CTA ボタンに使わない（これはロゴ・マーク専用。CTA は `--primary-color` `#cc0000`）
- フッターの背景色を白にしない（`#d9d9d9` でコンテンツエリアと明確に区分する）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ハンバーガーメニュー |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト。メガメニュー表示 |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは見出しサイズをデスクトップの 70〜80% 程度に縮小
- 本文は 14〜16px を維持
- ヒーローテキストはモバイルで大幅に縮小（45px → 24〜28px 程度）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color (CTA): #cc0000 (Hitachi Red, --primary-color)
Brand Color (Logo): #fa000f (--brand-color)
Text Primary: #0c0c0c (--color-black)
Text Secondary: #737373 (--color-supportive-grey-4)
Background: #ffffff (--color-white)
Surface: #f4f4f4 (--color-supportive-grey-1)
Footer Background: #d9d9d9 (--color-supportive-grey-2)
Border: #d9d9d9 (--color-supportive-grey-2)

Font: "Hitachi Sans", "Noto Sans JP", "Yu Gothic UI", "Noto Sans", sans-serif
Body Size: 16px / weight 400 / line-height: 1.5
Heading: weight 600 / line-height: 1.25
Hero: 45px / weight 700 / line-height: 1.5
Letter Spacing: normal (全要素)
font-feature-settings: normal (palt 不使用)
Button Radius: 0–2px
```

### プロンプト例

```
日立のデザインシステムに従って、ニュース一覧ページを作成してください。
- フォント: "Hitachi Sans", "Noto Sans JP", "Yu Gothic UI", "Noto Sans", sans-serif
- テキスト色: #0c0c0c（純粋な黒は使わない）
- セカンダリテキスト: #737373
- 背景: #ffffff、セクション背景: #f4f4f4
- フッター背景: #d9d9d9
- CTA ボタン: bg #cc0000, text #ffffff, radius 2px, weight 600
- 見出し: weight 600, line-height 1.25
- 本文: 16px, weight 400, line-height 1.5
- letter-spacing: normal（字詰め調整なし）
- font-feature-settings: normal（palt 不使用）
- カード: 白背景またはグレー背景、フラットデザイン、シャドウは最小限
```
