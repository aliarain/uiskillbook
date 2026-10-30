# DESIGN.md — Asahi Beer

> Asahi Beer（https://www.asahibeer.co.jp/）のデザイン仕様書。
> 実サイトの CSS Custom Properties および computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 清潔感とエネルギーを両立した、大手飲料メーカーのコーポレートサイト。ブランドブルーを軸に、商品プロモーションではゴールド/イエローのアクセントが際立つ
- **密度**: 情報量の多い商品ポータル型。商品カードやキャンペーンバナーが並ぶグリッドレイアウト
- **キーワード**: 爽快、親しみやすい、コーポレート、清潔、プロモーション重視
- **特徴**: ナビゲーションとフッターにブランドブルー `#074194` をベタ塗り、商品バッジに `#ffd742`（ゴールドイエロー）を多用する二色構成。`font-feature-settings` は使用せず、シンプルなタイポグラフィ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Blue** (`#074194`): ロゴ、ヘッダーナビ、フッター、セクション見出し。CSS変数 `--logo-color`
- **Attention Gold** (`#ffd742`): 商品バッジ（"5/12 発売" 等）、プロモーションアクセント。CSS変数 `--attention-color`。出現回数 34 と非常に多く、サイトの視覚的個性を形成

### Semantic（意味的な色）

- **Important / Danger** (`#cc111a`): エラー、重要なお知らせ、注意喚起。CSS変数 `--important-color`
- **Cookie Consent Blue** (`#0033ff`): Cookie同意バナーのCTA

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト。CSS変数 `--text-color`
- **Text White** (`#ffffff`): ナビ・フッター上のテキスト
- **Border** (`#dfdfdf`): 区切り線、カード枠。CSS変数 `--border-color`
- **Button Background** (`#f2f2f2`): ボタン・タグの背景。CSS変数 `--btn-color`
- **Background** (`#f9f9f9`): 商品カード・フッターリンク領域の背景。CSS変数 `--bg-color`
- **Page Background** (`#ffffff`): ページ全体の背景
- **Close Button Border** (`#cfcfcf`): ピルボタン枠

### Accent（アクセント色）

- **Light Blue** (`#edf4fc`): お知らせセクション、SNSセクションの背景
- **Lighter Blue** (`#cddcf2`): 補助的な青背景

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts / Webフォント）

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP に内包される欧文グリフを使用。別途欧文フォントの指定なし

### 3.3 font-family 指定

```css
/* 本文・全体 */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Webフォント（Noto Sans JP）のみで和欧文を統一
- CSS変数 `--cmn-font-family` として定義
- フォールバックは generic family の `sans-serif` のみ

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

**ページ全体**

| Role | Size | Weight | Line Height | Letter Spacing | palt | 備考 |
|------|------|--------|-------------|----------------|------|------|
| Heading 1 (Section) | 36px | 700 | — | normal | なし | セクション見出し、色 `#074194` |
| Heading 2 (Section) | 36px | 700 | — | normal | なし | CSS変数 `--heading-font-size-h2: 3.6rem` |
| Heading 2 (Sub) | 28px | 500 | 49px (x1.75) | normal | なし | サブ見出し |
| Heading 3 | 28px | 400 | 33px (x1.18) | normal | なし | CSS変数 `--heading-font-size-h3: 2.8rem` |
| Body (p) | 13px | 400 | 22.75px (x1.75) | normal | なし | 本文テキスト |
| Body (Product) | 16px | 700 | 1.75 | normal | なし | 商品名・強調テキスト |
| Nav Link | 16px | 700 | — | normal | なし | ヘッダーナビ、白文字 |
| Footer Link | 14px | 400 | — | normal | なし | フッターリンク |
| Body Default | 16px | 400 | 28px (x1.75) | normal | なし | 基準サイズ |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- body グローバル: `28px` (16px x 1.75)
- 本文 (p): `22.75px` (13px x 1.75)
- サブ見出し (h2): `49px` (28px x 1.75)
- `line-height: 1.75` がサイト全体の統一値

**字間 (letter-spacing)** -- 実測値:
- 全要素: `normal`（letter-spacing の指定なし）

**ガイドライン**:
- `line-height: 1.75` をサイト全体で統一。日本語本文として適度な行間
- `letter-spacing` は一切指定なし。Noto Sans JP のデフォルト字間をそのまま使用
- 見出しと本文で weight の差（700 vs 400）で階層を表現

### 3.6 禁則処理・改行ルール

```css
/* 特別な禁則処理の指定は確認されていない */
/* ブラウザデフォルトの禁則処理に依存 */
```

- CSS による明示的な `word-break` / `overflow-wrap` の指定は確認されていない
- ブラウザのデフォルト禁則処理（`line-break: auto`）で運用

### 3.7 OpenType 機能

```css
/* font-feature-settings の指定なし */
font-feature-settings: normal;
```

- `palt`（プロポーショナル字詰め）は使用していない
- Noto Sans JP のデフォルトのメトリクスで統一

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（ブランドブルー）**
- Background: `#074194`
- Text: `#ffffff`
- Padding: 12px 24px
- Border Radius: 4px
- Font Size: 16px
- Font Weight: 700

**Secondary（ライトグレー）**
- Background: `#f2f2f2`
- Text: `#333333`
- Padding: 12px 24px
- Border Radius: 4px
- Font Size: 14px
- Font Weight: 400

**Pill（閉じるボタン等）**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#cfcfcf`
- Padding: 8px 20px
- Border Radius: 100px

**Cookie Consent CTA**
- Background: `#0033ff`
- Text: `#ffffff`
- Border Radius: 4px
- Font Size: 14px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#dfdfdf`
- Border (focus): 1px solid `#074194`
- Border Radius: 4px
- Padding: 12px 16px
- Font Size: 16px

### Cards（商品カード）

- Background: `#f9f9f9`
- Border: 1px solid `#dfdfdf`
- Border Radius: 8px
- Padding: 16px

### Badge（発売日バッジ）

- Background: `#ffd742`
- Text: `#333333`
- Font Size: 13px
- Font Weight: 700
- Border Radius: 4px
- Padding: 4px 8px

### Navigation

- Background: `#074194`
- Text: `#ffffff`
- Height: 64px
- Font Size: 16px
- Font Weight: 700

### Footer

- Background: `#074194`
- Text: `#ffffff`
- Link Size: 14px
- Link Weight: 400

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |

### Container

- Max Width: 1080px
- Padding (horizontal): 16px

### Grid

- 商品一覧: 3カラムグリッド（デスクトップ）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | カード、ナビドロップダウン |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ホバー時のカード |
| 3 | `0 8px 24px rgba(0,0,0,0.16)` | モーダル、オーバーレイ |

- サイト全体としてフラットデザイン寄り。影の使用は控えめ
- ナビゲーションのドロップダウンに軽い影を使用

---

## 7. Do's and Don'ts

### Do（推奨）

- ヘッダーとフッターにはブランドブルー `#074194` をベタ塗りで使い、白文字を載せる
- 商品プロモーションにはゴールド `#ffd742` のバッジを積極的に使う
- テキスト色は `#333333` を使い、純粋な `#000000` を避ける
- `line-height: 1.75` をサイト全体で統一する
- フォントは `"Noto Sans JP", sans-serif` で統一する
- セクション見出しにはブランドブルー `#074194` を使い、weight 700 で視覚的階層を作る

### Don't（禁止）

- ブランドブルー `#074194` を本文テキストに使わない（見出し・ナビ・フッター専用）
- ゴールド `#ffd742` を背景全面に使わない（バッジ・アクセント限定）
- `font-feature-settings: "palt"` を指定しない（実サイトで使用していない）
- `letter-spacing` を追加しない（実サイトで `normal` に統一されている）
- 商品カードの角丸を 8px 以上にしない（コーポレートサイトらしい控えめな角丸）
- 重要/危険の赤 `#cc111a` をプロモーション目的に使わない（セマンティックな意味を保つ）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- モバイルではセクション見出しを 24px 程度に縮小（デスクトップ 36px の約 67%）
- 本文サイズは 13-16px を維持
- 商品グリッドは1カラムに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue: #074194（ナビ・フッター・見出し）
Attention Gold: #ffd742（商品バッジ・プロモーション）
Important Red: #cc111a（エラー・重要通知）
Text Primary: #333333
Background: #ffffff
Background Secondary: #f9f9f9
Border: #dfdfdf
Button Background: #f2f2f2

Font: "Noto Sans JP", sans-serif
Body Size: 16px / line-height: 1.75 / letter-spacing: normal
Heading Section: 36px / weight: 700 / color: #074194
palt: 使用していない
```

### プロンプト例

```
アサヒビールのデザインに従って、商品一覧ページを作成してください。
- フォント: "Noto Sans JP", sans-serif
- テキスト色: #333333
- 見出し色: #074194（ブランドブルー）、36px, weight 700
- ナビ・フッター: 背景 #074194、テキスト白
- 商品バッジ: 背景 #ffd742、テキスト #333333
- 商品カード: 背景 #f9f9f9、ボーダー #dfdfdf、角丸 8px
- line-height: 1.75 で統一
- letter-spacing: normal、palt なし
- 重要お知らせ: #cc111a
```
