# DESIGN.md — TODAY'S SPECIAL（トゥデイズスペシャル）

> TODAY'S SPECIAL（https://www.todaysspecial.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: GEORGE'S が運営するライフスタイルストア。「食と暮らしのDIY」をコンセプトに、自由が丘・渋谷などに実店舗を構え、オンラインストアも展開。ライフスタイルマガジンのようなエディトリアル感と、ミニマルなモノクロームの潔さが共存する。色を極限まで削ぎ落とし、**文字と余白だけで空気を作る**デザイン
- **密度**: ゆったりとしたライフスタイルメディア型。大きな写真と英文セクション見出しでリズムを作り、日本語のサブタイトルが文脈を添える
- **キーワード**: エディトリアル、モノクローム、Lato + Noto Sans JP、矩形 CTA（radius 0）、palt グローバル適用、ライフスタイルマガジン、DIY
- **特徴**: 英文見出しに **Lato**（セリフフォールバック）、和文に **Noto Sans JP** + 游ゴシック系のデュアルフォントシステム。CTA はすべて **border-radius: 0** の完全矩形。**`font-feature-settings: "palt"` を body にグローバル適用**しており、プロポーショナル字詰めがサイト全体に効いている。配色は `#222222` テキスト + `#000000` CTA + `#f7f7f7` セクション背景の純モノクローム。`letter-spacing: 0.05em` のグローバル字間が独特の間合いを生む

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

TODAY'S SPECIAL の配色は**純粋なモノクローム**。ブランドカラーとして彩色を持たず、黒・白・灰のグラデーションだけで世界観を構築する。

- **Ink Black** (`#000000`): Primary CTA 背景・ボーダー。最も強いアクセント
- **Charcoal** (`#222222`): テキストの基本色。純黒を避けた柔らかい黒
- **Dot Active** (`#707070`): ドットナビゲーションのアクティブ状態・中間グレー
- **Dot Inactive** (`#aaaaaa`): ドットナビゲーションの非アクティブ状態・装飾ドット

### Text & Neutral

- **Text Primary** (`#222222`): 本文テキスト・見出し
- **Text Secondary** (`#707070`): 補助テキスト・ラベル
- **Text Thin** (`#222222` / weight 100): フッターの極細テキスト（Privacy policy 等）
- **Border** (`#000000`): CTA ボーダー・入力欄の枠

### Surface

- **Surface White** (`#ffffff`): 標準背景・ヘッダー
- **Surface Light** (`#f7f7f7`): フッターセクション・交互背景
- **Surface Black** (`#000000`): Primary CTA の塗り

### Functional

- 彩色のセマンティックカラー（Danger / Warning / Success）は実測で確認されていない。モノクロームに徹したブランドのため、必要な場合はコンテキストに応じて控えめなトーンで追加

---

## 3. Typography Rules

### 3.1 和文フォント

TODAY'S SPECIAL は **Noto Sans JP** を和文の基本に据え、游ゴシック系を OS フォールバックとする。

- **Noto Sans JP**: 本文・和文見出し・ラベルの基本
- **游ゴシック Medium / Yu Gothic Medium**: Windows フォールバック（Medium 指定あり）
- **游ゴシック体 / YuGothic**: macOS の游ゴシック体
- **ヒラギノ角ゴ Pro W3 / Hiragino Kaku Gothic ProN**: macOS フォールバック
- **メイリオ / Meiryo**: Windows 追加フォールバック

### 3.2 欧文フォント

- **Lato**: 英文セクション見出し（h2 "SEASONAL NEWS" 等）・CTA ボタンのラベル。Google Fonts で提供
- **Helvetica Neue / Helvetica / Arial**: フォールバックの欧文サンセリフ
- **serif**: Lato 指定時のフォールバック末尾に serif が入っている（`Lato, serif`）

### 3.3 font-family 指定

```css
/* 本文・和文見出し */
font-family: "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium",
             游ゴシック体, YuGothic,
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN",
             メイリオ, Meiryo, "ＭＳ Ｐゴシック",
             "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 英文セクション見出し・CTA ラベル */
font-family: Lato, serif;
```

**フォールバックの考え方**:
- 和文は Noto Sans JP を Web フォントで読み込み、未到達なら游ゴシック Medium → ヒラギノ → メイリオの順
- 欧文見出しは Lato 単独指定 + serif フォールバック。和文フォントとは別系統
- 游ゴシック Medium が明示指定されており、Windows での細すぎ問題に対応済み
- `"ＭＳ Ｐゴシック"` まで入ったフル指定は古い環境への配慮

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 (Logo) | Noto Sans JP | 16px | 400 | 1.5 (24px) | 0.05em (0.8px) | "TODAY'S SPECIAL" サイトロゴ |
| H2 (Section) | Lato, serif | 32px | 400 | 1.5 (48px) | 0.05em | "SEASONAL NEWS" 英文セクション見出し |
| H3 (Concept) | Noto Sans JP | 20px | 400 | 1.5 (30px) | 0.05em | "今日を特別にする..." コンセプト見出し |
| Nav Link | Noto Sans JP | 18px | 400 | 1.5 (27px) | 0.05em | "ONLINE STORE" ナビゲーション |
| Body (p) | Noto Sans JP | 14px | 400 | 1.57 (22px) | 0.05em | 本文テキスト |
| Label (span) | Noto Sans JP | 14px | 400 | 1.43 (20px) | 0.05em | "CONCEPT 今日をどう楽しむ？" |
| Sub Label | Noto Sans JP | 14px | 400 | 1.5 (21px) | 0.05em | "シーズナルニュース" 等 |
| Small | Noto Sans JP | 12px | 400 | 1.83 (22px) | 0.05em | "複数選択可" 等の注記 |
| Footer Link | Noto Sans JP | 14px | 100 | 1.5 (21px) | 0.05em | "Privacy policy" — **weight 100 の極細** |
| Body Global | Noto Sans JP | 16px | 400 | 1.5 (24px) | 0.05em (0.8px) | body 要素のデフォルト |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（24px / 16px）— body デフォルト。シンプルで統一的
- **コンテンツの行間**: `line-height: 1.57`（22px / 14px）— 14px のコンテンツテキスト
- **小テキストの行間**: `line-height: 1.83`（22px / 12px）— 12px の注記。小さい文字に広い行間
- **見出しの行間**: 1.5 を一貫適用（32px〜16px のすべての見出しレベル）
- **グローバル字間**: `letter-spacing: 0.8px`（0.05em @ 16px）— **body に直接指定**。サイト全体が均一の間合い

**ガイドライン**:
- letter-spacing 0.05em はサイト全体に一貫適用。部分的な使い分けはない
- line-height は 1.5 を基本に、14px 本文のみ 1.57、12px 注記のみ 1.83 とわずかに広げる
- font-weight は body 400 が基本。フッターの極細リンクのみ 100

### 3.6 禁則処理・改行ルール

- 本文は word-break: normal の自然な折り返し
- 英文セクション見出し（"SEASONAL NEWS"）は大文字 1 行を前提
- 和文サブタイトルは改行を許容

### 3.7 OpenType 機能

```css
/* body にグローバル適用 */
font-feature-settings: "palt";
```

- **`palt` がサイト全体に適用されている**。TODAY'S SPECIAL の組版の最大の特徴
- body 要素に直接指定されており、見出し・本文・ラベル・ボタンすべてにプロポーショナル字詰めが効く
- letter-spacing 0.05em との併用で、字詰めしつつも間合いを確保する独特のバランス
- `kern` も暗黙的に有効（Noto Sans JP / Lato の OpenType kern テーブル）

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（Ink Black）**（"検索" "Contact" 等）

- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Border Radius: **0px**（完全矩形）
- Padding: —（コンテキストに応じて調整）
- Font Family: Lato stack（英文ラベル）/ Noto Sans JP stack（和文ラベル）
- Font Size: 14px
- Font Weight: **400**
- Letter Spacing: 0.05em

**Secondary CTA（"VIEW MORE"）**

- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#000000`
- Border Radius: **0px**
- Font Family: Lato stack
- Font Size: 14px
- Font Weight: 400

**Dot Pagination**

- Size: 16px
- Background (active): `#707070`
- Background (inactive): `#ffffff`
- Border: 1px solid `#707070`
- Border Radius: **50%**（円形）

**ボタンの考え方**:
- メインは **radius 0px の完全矩形**。`#000000` の塗り + `#000000` ボーダーの二重強調
- font-weight は **400**（OSAJI と違いボタンも軽い。エディトリアル的な抑制）
- Secondary は白背景 + 黒ボーダーの透明感あるアウトライン
- pill や角丸は一切使わない（ドットペジネーションの円形は例外的機能要素）

### Inputs

- Font Family: Noto Sans JP stack
- Font Size: 14px
- Background: `#ffffff`
- Border: 1px solid `#000000`
- Border Radius: **0px**（矩形）
- Checkbox: 14px, border 1px solid `#000000`, radius 0px
- Radio: 14px, border 1px solid `#000000`, radius 50%

### Cards

- Background: `#ffffff`
- Border: なし（写真と余白で構造化）
- Border Radius: 0px
- Shadow: なし（フラット）
- 構成: 写真 + カテゴリラベル + タイトル + 価格

### Section Backgrounds

- Hero / Main: `#ffffff`（純白）
- Alternate: `#f7f7f7`（フッター、交互セクション）
- CTA: `#000000` + `#ffffff` テキスト

---

## 5. Layout Principles

### Container

- ヘッダー・フッターは全幅
- メインコンテンツは max-width 中央寄せ（実測ベースで 1200px 想定）
- 商品グリッドは写真中心のゆったりレイアウト

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | 要素間の最小余白 |
| S | 16px | ラベルとコンテンツの間 |
| M | 24px | セクション内の要素間 |
| L | 32px | グリッドのガター |
| XL | 48px | セクション間 |
| XXL | 80px | ヒーローセクションのパディング |

### Grid

- 商品グリッドは 3〜4 カラム
- カルーセルによるスライド表示（SEASONAL NEWS 等）
- 写真が主役のレイアウト

---

## 6. Depth & Elevation

TODAY'S SPECIAL はシャドウを一切使わない。白と `#f7f7f7` の面の切り替えと、`#000000` ボーダーだけで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | border 1px solid `#000000` | CTA・入力欄の境界 |
| 2 | border 1px solid `#707070` | ドットペジネーションの境界 |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストに **`color: #222222`** を使う（純黒は CTA とボーダーだけ）
- 英文セクション見出しは **Lato / 32px / 400 / 1.5** で大きく置く
- 和文サブタイトルは **Noto Sans JP / 14px / 400** で見出しの下に添える
- **`font-feature-settings: "palt"`** を body にグローバル適用する
- **`letter-spacing: 0.05em`** をサイト全体に一貫適用する
- CTA は **`border-radius: 0px`** の完全矩形
- Primary CTA は **`#000000`** bg + **`#ffffff`** text + **1px solid #000000** border
- Secondary CTA は **`#ffffff`** bg + **`#222222`** text + **1px solid #000000** border
- セクション背景の切り替えに **`#f7f7f7`** を使う
- font-weight は **400 を基本**。ボタンも 400 で抑制的に
- line-height は **1.5 を基本**に統一

### Don't（禁止）

- 彩色（赤・青・緑など）を使わない。モノクロームに徹する
- pill（border-radius 50%）を CTA に使わない（ドットペジネーションのみ）
- 角丸（4px〜）を CTA に使わない。0px の矩形が鉄則
- font-weight 700（太字）をボタンに使わない。TODAY'S SPECIAL のボタンは 400 で軽い
- `palt` を部分適用しない。body レベルのグローバル適用が正解
- letter-spacing を 0 にしない（0.05em がグローバル設定）
- テキストに `#000000` を使わない（`#222222` が正しいテキスト色。`#000000` は CTA 専用）
- シャドウを使わない。面の切り替えとボーダーだけで奥行きを作る
- 明朝体を使わない。TODAY'S SPECIAL はゴシック + Lato の二刀流
- font-weight 100 を本文に使わない（フッターの一部リンクだけの特殊用途）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- H2 セクション見出し 32px → 24px 程度に縮小
- 商品グリッドは 2 カラムに折り返す
- ヘッダーはハンバーガー化
- ドットペジネーションは引き続き表示

### タッチターゲット

- CTA ボタンは十分な padding を確保（最小 44px × 44px 推奨）
- ドットペジネーションは 16px と小さいため、モバイルではタップ領域を拡張推奨

### フォントサイズの調整

- モバイルでは本文 14px を維持、H2 は 24px 程度に縮小
- body のデフォルト 16px はそのまま

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: TODAY'S SPECIAL（トゥデイズスペシャル）
Concept: 食と暮らしのDIY
Text Color: #222222 (Charcoal)
CTA Color: #000000 (Ink Black)
Background: #ffffff / #f7f7f7
Border: #000000
Dot Active: #707070
Dot Inactive: #aaaaaa
Body Font: "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
Heading Font: Lato, serif
Body Size: 16px / 400 / line-height 1.5
Content Size: 14px / 400 / line-height 1.57
Section Heading: 32px / 400 / line-height 1.5 (Lato)
Letter Spacing: 0.05em (global)
palt: body にグローバル適用
CTA Border Radius: 0px
CTA Font Weight: 400
```

### プロンプト例

```
TODAY'S SPECIAL（トゥデイズスペシャル）のデザインシステムに従って、季節のおすすめ商品ページを作成してください。
- 英文見出しフォント: Lato, serif — 32px / 400 / line-height 1.5
- 和文フォント: "Noto Sans JP", "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", sans-serif
- body に font-feature-settings: "palt" をグローバル適用
- letter-spacing: 0.05em をサイト全体に適用
- テキスト色は #222222、CTA は #000000 bg + #ffffff text + border 1px solid #000000 + radius 0px
- セクション見出し "SEASONAL PICKS" は Lato 32px / 400 / #222222
- 和文サブタイトル "季節のおすすめ" は Noto Sans JP 14px / 400 / #222222
- CTA "VIEW MORE" は白背景 + #222222 text + border 1px solid #000000
- セクション背景は #ffffff と #f7f7f7 を交互に
- 商品カードは radius 0 + 写真 + タイトル 14px + 価格
- 全体としてモノクローム（黒・白・灰）で構成。彩色は使わない
```

### 字詰め・組版の重要ポイント

1. **palt グローバル適用**: `font-feature-settings: "palt"` が body に指定されており、サイト全体でプロポーショナル字詰めが効いている。TODAY'S SPECIAL の組版の最大の特徴
2. **letter-spacing 0.05em の統一**: 見出し・本文・ラベル・ボタンすべてに同じ 0.05em。部分的な使い分けはない
3. **Lato + Noto Sans JP のデュアルフォント**: 英文セクション見出しは Lato で大きく、和文サブタイトルは Noto Sans JP で添える。この二段構成がエディトリアル感を生む
4. **font-weight 400 の徹底**: ボタンも含めほぼ全てが 400。700 を使わないことで、ライフスタイルマガジンの軽やかさを保つ
5. **CTA radius は 0px**: pill や角丸を一切使わない完全矩形。ボーダーとの組み合わせでシャープな印象
6. **モノクローム**: `#222222` / `#000000` / `#707070` / `#aaaaaa` / `#f7f7f7` / `#ffffff` の6色で完結。彩色は存在しない

---

**取得日**: 2026-05-09
**出典**: https://www.todaysspecial.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
