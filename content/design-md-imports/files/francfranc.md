# DESIGN.md — Francfranc（フランフラン）

> Francfranc（https://francfranc.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本発のインテリア・ライフスタイルブランド。家具・インテリア雑貨・ギフトを中心に展開。**フェミニンで温かみのあるパレット**が最大の特徴 — ブラッシュピンク（#f2e9e7）をシグネチャーカラーとし、ダスティローズ（#9c706d）をアクセントに使う。システムフォントのみ（Hiragino Sans 先頭）で、Web フォントを一切使わない軽量設計
- **密度**: 繊細で上品なEC。本文 13px と小さめのベースサイズが、雑誌的な洗練された印象を生む。余白を十分に取った商品写真中心のレイアウト
- **キーワード**: フェミニン、ブラッシュピンク、エレガント、ミニマルCTA、細やかなレタースペーシング、システムフォント
- **特徴**: **letter-spacing 0.05em を全見出しに統一適用**する。font-feature-settings は normal（palt なし）。font-weight は 300〜600 と幅広く、見出しでも 500〜600 に留まる。ボタンらしいボタンをほぼ持たず、リンクベースのミニマルなインタラクション設計

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Francfranc のカラーは**ピンクのグラデーション**で構成される。ブラッシュピンクの面色とダスティローズのアクセントがブランドを象徴する。

- **Blush Pink** (`#f2e9e7`): ブランドシグネチャーの淡いピンク面。セクション背景・プロモーション帯に使用（19件出現）
- **Dusty Rose** (`#9c706d`): ブランドアクセント。ヘッダーロゴ周辺・カテゴリ名に使用
- **Hot Pink** (`#ef4e96`): SALE バッジ・プロモーション強調色（3件出現）

### Text & Neutral

- **Text Primary** (`#222222`): メインテキスト・ヘッダーオーバーレイ（38件出現 — 最多。純黒を避けたソフトブラック）
- **Text Secondary** (`#7f7f7f`): フッターテキスト・補足情報
- **Text Muted** (`#ababab`): メタ情報・プレースホルダー（13件出現）

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Blush** (`#f2e9e7`): ブランドカラー面。プロモーション帯・セクション区切りに使用
- **Surface Light** (`#f3f2f3`): ニュートラルなセカンダリ背景面

### Border

- **Border Default**: 明示的な枠線は最小限。区切りは面色の切り替えで表現

---

## 3. Typography Rules

### 3.1 和文フォント

- **ヒラギノ角ゴ Pro W3** / Hiragino Kaku Gothic Pro: macOS メイン
- **メイリオ** / Meiryo: Windows フォールバック

### 3.2 欧文フォント

- **Helvetica**: macOS 欧文フォールバック
- **Arial**: クロスプラットフォームフォールバック

### 3.3 font-family 指定

```css
/* 全体共通（和文先頭） */
font-family: "Hiragino Sans", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- **和文先頭型**: Hiragino Sans を先頭に置き、日本語の表示品質を最優先
- macOS は Hiragino Sans → ヒラギノ角ゴ Pro W3 の2段階でカバー
- Windows は メイリオ（Meiryo）でカバー
- 欧文は Helvetica → Arial の順
- Web フォントは一切使用しない（システムフォントのみ）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (listing) | Hiragino Sans | 36px | 500 | 1.5 (54px) | 0.05em (1.8px) | 商品一覧タイトル |
| Heading 2 (section) | Hiragino Sans | 20px | 600 | 1.5 (30px) | 0.05em (1.0px) | セクション見出し |
| Heading 3 (menu) | Hiragino Sans | 12px | 600 | 1.5 (18px) | 0.05em (0.6px) | メニュー項目 |
| Heading 4 (subsection) | Hiragino Sans | 16px | 600 | 1.5 (24px) | 0.05em (0.8px) | サブセクション |
| Heading 4 (product) | Hiragino Sans | 18px | 500 | 1.5 (27px) | 0.05em (0.9px) | 商品名 |
| Body | Hiragino Sans | 13px | 400 | 1.5 (19.5px) | normal | 本文 / color #222 |
| Body (emphasis) | Hiragino Sans | 13px | 600 | 1.5 (19.5px) | normal | 強調本文 |
| Input | Hiragino Sans | 14–16px | 400 | — | normal | フォーム入力 |
| Header Logo | Hiragino Sans | 10px | 300 | 1.5 (15px) | 0.05em (0.5px) | ヘッダー / color #9c706d |
| Footer | Hiragino Sans | 10px | 400 | 1.5 (15px) | normal | フッター / color #7f7f7f |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5` — 全階層で統一。Francfranc は line-height 1.5 をすべての要素に一貫して適用する
- **見出しの行間**: `line-height: 1.5` — 本文と同じ。大きな見出しでも line-height を詰めない
- **本文の字間**: `letter-spacing: normal` — 本文・フッターは字間調整なし
- **見出しの字間**: `letter-spacing: 0.05em` — H1〜H4 のすべての見出しに 0.05em を統一適用

**ガイドライン**:
- 見出しには **letter-spacing: 0.05em を統一適用**するのが特徴。フォントサイズに関わらず 0.05em
- 本文（13px / 400）には letter-spacing を適用しない
- line-height 1.5 がグローバルに適用される。見出しも本文も例外なし
- font-weight は 300（ヘッダーロゴ）〜600（見出し）の範囲で、700（Bold）は使用しない

### 3.6 OpenType 機能

```css
/* font-feature-settings 未使用 */
font-feature-settings: normal;
```

- **palt 未適用**: Francfranc は font-feature-settings を一切指定しない。プロポーショナル字詰めは使わず、等幅の全角字間をそのまま活かす
- letter-spacing 0.05em による字間調整は palt ではなくスペーシングで実現

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

Francfranc は**明示的なボタンをほとんど持たない**。インタラクティブ要素の大半は装飾のないテキストリンクで構成される。

**Navigation Link（標準）**

- Background: `#ffffff`
- Text: `#222222`
- Border: なし
- Border Radius: 0–4px
- Font Size: 13px
- Font Weight: 400

**Login / Register**

- Background: `#ffffff`
- Text: `#222222`
- Border Radius: 4px
- Font Size: 13px
- Font Weight: 400

**SALE Badge**

- Background: — （テキストカラーで表現）
- Text: `#ef4e96`（ホットピンク）
- Font Weight: 600

**ボタンの考え方**:
- 塗りつぶし CTA ボタンを持たない。リンクベースのミニマル設計
- border-radius は最大 4px。pill ボタン（9999px）は使用しない
- SALE やプロモーションは `#ef4e96` のホットピンクテキストで強調
- ナビゲーションはネスト構造のインデントで階層を表現

### Inputs

- Background: `#ffffff`
- Border: 1px solid（グレー系）
- Border Radius: 4px
- Font Size: 14–16px（iOS ズーム防止で 16px）
- Font Weight: 400

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 商品画像 + 商品名（13px / 400–500）+ 価格の構成

---

## 5. Layout Principles

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の最小余白 |
| S | 16px | リスト項目・メニューパディング |
| M | 20px | セクション間パディング |
| L | 32px | カード間ギャップ |
| XL | 48px | セクション間マージン |

### Container

- Max Width: 全幅レイアウトを基本（EC サイト型）
- Padding (horizontal): 16–20px

### Grid

- 商品カードグリッド: 2–4 カラム（ブレークポイントで可変）
- メニューはフルワイドのリスト形式

---

## 6. Depth & Elevation

Francfranc はシャドウをほぼ使わない。面色の切り替え（白 / ブラッシュピンク / ライトグレー）で空間を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての基本要素 |
| 1 | background `#ffffff` | 通常面 |
| 2 | background `#f2e9e7` | ブランドカラー面（プロモーション帯） |
| 3 | background `#f3f2f3` | ニュートラルなセカンダリ面 |

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は **Hiragino Sans を先頭**に置く（和文先頭型）
- 見出しの letter-spacing は **全階層に 0.05em** を統一適用する
- line-height は **全要素に 1.5** を適用する（見出しも本文も例外なし）
- 面色にはブラッシュピンク `#f2e9e7` を積極的に使う（Francfranc のアイデンティティ）
- テキストは `#222222`（純黒を避ける）
- SALE やプロモーションには `#ef4e96` のホットピンクを使う
- border-radius は **最大 4px** に留める
- 本文は **13px** を基本サイズとする（雑誌的な洗練感）
- font-weight は **300〜600** の範囲内で使う
- ダスティローズ `#9c706d` はブランドロゴ・カテゴリ名に限定する

### Don't（禁止）

- 純黒 `#000000` をテキストに使わない（`#222222` が標準）
- pill ボタン（radius 9999px）を使わない
- 塗りつぶし CTA ボタンを安易に追加しない（Francfranc はリンクベースのミニマル設計）
- font-weight: 700（Bold）を使わない（最大 600 まで）
- 本文に letter-spacing を付けない（見出しのみ 0.05em）
- palt（font-feature-settings）を適用しない（Francfranc は未使用）
- シャドウ（box-shadow）を使わない
- ビビッドな原色やネオンカラーを使わない（ピンク系 + グレー系のソフトパレット）
- Web フォントを追加しない（システムフォントのみ）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Display（36px）→ 縮小
- ヘッダーロゴ周辺は 10px / weight 300 / #9c706d のまま維持
- letter-spacing 0.05em は見出しで維持（Francfranc のアイデンティティ）
- 商品グリッドは 1〜2 カラムに折り返し
- Input は 16px に拡大（iOS ズーム防止）

### タッチターゲット

- メニュー項目はパディングで十分なタップ領域を確保
- 最小タッチターゲット: 44px x 44px（WCAG 基準）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: Francfranc（フランフラン）
Origin: 日本発インテリア・ライフスタイルブランド
Blush Pink: #f2e9e7
Dusty Rose: #9c706d
Hot Pink (SALE): #ef4e96
Text Primary: #222222
Text Secondary: #7f7f7f
Background: #ffffff
Surface Blush: #f2e9e7
Surface Light: #f3f2f3

Font: "Hiragino Sans", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Helvetica, Arial, sans-serif

palt: 未使用（font-feature-settings: normal）
Body: 13px / 400 / line-height 1.5 / letter-spacing normal / color #222
Heading: 16–36px / 500–600 / line-height 1.5 / letter-spacing 0.05em
Display: 36px / 500 / line-height 1.5 / letter-spacing 0.05em
CTA Style: テキストリンクベース（塗りつぶしボタンなし）/ radius 0–4px
Shadow: 使用しない
```

### プロンプト例

```
Francfranc のデザインシステムに従って、商品一覧ページを作成してください。
- フォントは "Hiragino Sans", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Helvetica, Arial, sans-serif
- font-feature-settings は指定しない（normal）
- 見出しは letter-spacing: 0.05em を統一適用、本文は normal
- 本文は 13px / 400 / line-height 1.5 / color #222222
- セクション見出しは 20px / 600 / line-height 1.5 / letter-spacing 0.05em
- 商品名は 18px / 500 / letter-spacing 0.05em
- 背景は白 #ffffff、プロモーション帯はブラッシュピンク #f2e9e7
- SALE バッジは #ef4e96 のテキストカラー
- 塗りつぶしボタンは使わない。リンクベースのミニマル設計
- border-radius は最大 4px
- シャドウは一切使わない
```

### デザインの重要ポイント

1. **ブラッシュピンク #f2e9e7 がブランドシグネチャー**: 面色に使うことで Francfranc らしさが生まれる。背景全体ではなく、セクション帯やプロモーション領域に使う
2. **3層のピンク**: ブラッシュピンク（#f2e9e7 / 面色）→ ダスティローズ（#9c706d / ブランドアクセント）→ ホットピンク（#ef4e96 / SALE 強調）の3段階で使い分ける
3. **システムフォントのみ**: Hiragino Sans を先頭とした和文先頭型フォールバック。Web フォントは不使用。ブランドの軽量性・実用性を反映
4. **letter-spacing 0.05em は見出し専用**: 本文には適用しない。見出しのみに統一的に 0.05em を付与することで、上品なスペーシングを実現
5. **line-height 1.5 グローバル適用**: 見出し・本文・フッターまで例外なく 1.5。統一感のあるリズムを保つ
6. **13px ベースサイズ**: 一般的な 14–16px より小さく、雑誌的な洗練された印象を作る
7. **ボタンレスUI**: 明示的な塗りつぶしボタンをほぼ持たない。リンクとテキストカラーで行動を促すミニマルなアプローチ
8. **palt 未使用**: font-feature-settings を一切指定しない。letter-spacing 0.05em による字間調整のみ

---

**取得日**: 2026-05-09
**出典**: https://francfranc.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
