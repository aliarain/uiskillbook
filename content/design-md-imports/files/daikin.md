# DESIGN.md — DAIKIN（ダイキン工業）

> ダイキン工業（https://www.daikin.co.jp/）のデザイン仕様書。
> 空調・化学事業のグローバルメーカー。住宅用エアコンから業務用空調まで幅広く展開。
> 実サイトの computed style 実測（2026-05-18 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ネイビー `#003568` とゴールド `#fdc64f` のブランドカラーを軸に、白基調のクリーンなコーポレートサイト。情報密度は高めだが整然としたグリッドで整理
- **密度**: body 14px / line-height 1.6 のコンパクトな組み。見出しは 26〜38px で控えめ。製品・サービスへの導線を効率よく配置
- **キーワード**: コーポレートネイビー、ゴールドアクセント、メイリオ、情報設計重視、安定感
- **特徴**:
  - **ブランドカラーはネイビー `#003568`** とゴールド `#fdc64f`。ネイビーは法人向け製品セクション・フッター、ゴールドは個人向け製品セクションのヘッダーに使い分け
  - 和文フォントは **メイリオ** を最優先。Windows 環境での可読性を重視する実用的な選択
  - CSS Custom Properties は使用せず、クラスベースの従来型 CSS 設計
  - `font-feature-settings` は設定なし（palt 非適用）
  - ライフスタイル写真を大きく使ったヒーロー領域で家庭の快適さを訴求
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Navy** (`#003568`): ダイキンのコーポレートカラー。法人向け製品セクションヘッダー・フッター・ナビ
- **Brand Gold** (`#fdc64f`): 個人向け製品セクションヘッダー。ネイビーとの対比で親しみやすさを表現

### CTA / Buttons

- **Primary Button**: 背景 `#168bb6`（ブルー）/ 文字 `#ffffff` / radius `2px` / padding 内包
- **Secondary Button**: 背景 `#ffffff` / 文字 `#168bb6` / border `1px solid` / radius `2px`
- **Ghost Button（枠線）**: 背景 transparent / 文字 `#000000` or `#ffffff` / border `1px solid` / radius `4px`
- **ENTER ボタン**: 枠線ボタン、白テキスト（ヒーロー画像上）

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#000000` | 見出し・本文テキスト |
| Dark Gray | `#333333` | フッター背景 |
| Mid Gray | `#696969` | 補助テキスト・ラベル |
| Link Gray | `#666666` | フッターリンク・パンくず |
| Light Gray | `#737373` | 補助テキスト |
| Border Gray | `#e8e8e8` | 区切り線 |
| Surface | `#f3f3f3` | セクション背景面 |
| Light Surface | `#f5f7fa` | 薄い背景面 |
| White | `#ffffff` | ページ背景 |

### Accent / Functional

- **Action Blue** (`#168bb6`): CTA ボタン・Cookie 設定ボタン
- **Link Blue** (`#0099cc`): テキストリンク・h3 リンク見出し
- **Navy Dark** (`#27455c`): ダーク面背景（製品詳細セクション等）
- **Blue Light** (`#cddcf2`): 薄いブルー面（ハイライト領域）
- **Filter Blue** (`#3860be`): フィルターアイコン等

### Semantic

- **Danger**: 実測未確認（推奨: `#cc0000` 程度）
- **Warning**: ゴールド `#fdc64f` が警告的に見えるが、実際はブランドカラー
- **Success**: 実測未確認（推奨: `#008800` 程度）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **メイリオ（Meiryo）** を最優先。Windows の標準フォントで高い可読性
- **フォールバック**: Hiragino Kaku Gothic ProN → sans-serif
- **明朝体**: 使用しない

### 3.2 欧文フォント

- 専用の欧文書体は持たず、メイリオ内蔵の欧文グリフを使用
- font-family に欧文専用フォントは含まれない

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: メイリオ, "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- メイリオを先頭に置き、Windows 環境での可読性を最優先
- macOS では Hiragino Kaku Gothic ProN にフォールバック
- Web フォントは使用しない（従来型のシステムフォント構成）

> **代替フォント注記**: preview.html では Noto Sans JP（Google Fonts）を使用。メイリオの字面幅・ウェイト感に近い。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／空調ページ、2026-05-18 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Hero H1 | 38px | 400 | 60.8px (×1.6) | normal | `#ffffff` | 「空気で答えを出す会社」（白テキスト、画像上） |
| Section H2 | 32px | 400 | 41.6px (×1.3) | normal | `#ffffff` | 「空気にできることは、もっとある。」 |
| Section H2 (Top) | 26px | 400 | 41.6px (×1.6) | normal | `#000000` | 「ダイキンの製品・サービス」 |
| Sub H2 | 28px | 700 | 28px (×1.0) | normal | `#000000` | 「空気の技術」 |
| H3 | 22px | 700 | 35.2px (×1.6) | normal | `#000000` | 「個人のお客様」「法人のお客様」 |
| H3 (Link) | 14px | 700 | 23.8px (×1.7) | normal | `#0099cc` | 「ストリーマ技術とは？」 |
| H3 (Sub) | 22px | 400 | 35.2px (×1.6) | normal | `#000000` | 「お問い合わせ・サポート」 |
| Body | 14px | 400 | 22.4px (×1.6) | normal | `#000000` | 本文 |
| Small | 12px | 400 | 19.2px (×1.6) | normal | `#000000` | 補足テキスト |
| Nav Link | 12px | 400 | 20px (×1.67) | normal | `#666666` | ヘッダーナビ |
| Footer | 14px | 400 | 22.4px (×1.6) | normal | `#ffffff` | フッターテキスト |
| Breadcrumb | 14px | 700 | 22.4px (×1.6) | normal | `#737373` | パンくずリスト |

### 3.5 行間（line-height）の方針

- **統一的に ×1.6**: ほぼ全階層で line-height は font-size の 1.6 倍。非常にシンプルな設計
- 見出しの大きいサイズ（32px 以上）でも 1.3〜1.6 と比較的広め

### 3.6 字間（letter-spacing）の方針

- **全て normal**: letter-spacing を明示的に設定している要素なし
- palt も未使用。デフォルトの等幅メトリクスで組む

### 3.7 OpenType 機能

```css
/* font-feature-settings は設定なし */
font-feature-settings: normal;
```

- palt 非適用。メイリオのデフォルトメトリクスをそのまま使用

### 3.8 禁則処理・改行

- デフォルトの禁則処理に任せる
- 特別な word-break / overflow-wrap 指定なし

---

## 4. Component Stylings

### Buttons

| Type | BG | Text | Border | Radius | 備考 |
|------|-----|------|--------|--------|------|
| Action Blue | `#168bb6` | `#ffffff` | none | `2px` | Cookie 設定・Apply |
| Action White | `#ffffff` | `#168bb6` | `1px solid` | `2px` | セカンダリ |
| Ghost | transparent | `#000000`/`#ffffff` | `1px solid` | `4px` | ナビ周辺 |
| Search | `#777777` | `#000000` | none | `0px` | 検索ボタン |

### Cards / Product Boxes

- 製品カテゴリカード: 白背景 `#ffffff`、上部にカラーヘッダー（個人=ゴールド `#fdc64f`、法人=ネイビー `#003568`）
- h3 見出し: 22px / 700
- 内部リンク: テキストリンク形式

### ナビゲーション

- ヘッダー: 白背景、上部にネイビーのブランドバー
- ロゴ: 左上「DAIKIN」
- グローバルナビ: 12px / 400 / `#666666`

---

## 5. Layout Principles

- **最大幅**: コンテンツ領域は中央揃え
- **セクション背景**: 白 / `#f3f3f3`（Surface）/ ネイビー `#003568` / ゴールド `#fdc64f` を交互に使い分け
- **製品導線**: 個人 vs 法人を色で明確に区別（ゴールド vs ネイビー）
- **ヒーロー**: 全幅のライフスタイル写真 + テキストオーバーレイ
- **フッター**: ダークグレー `#333333` 背景に白テキスト

---

## 6. Depth & Elevation

- **影の使用**: 最小限。基本的にフラット
- **区切り**: ボーダー `#e8e8e8` で区切る
- **ヘッダー**: 固定ではない（スクロールで消える）
- **製品カード**: 影なし、カラーヘッダーで区別

---

## 7. Do's and Don'ts

### Do's（推奨）

- ネイビー `#003568` とゴールド `#fdc64f` のブランドカラーペアを維持する
- 個人向け＝ゴールド、法人向け＝ネイビーの色分けルールを守る
- メイリオをベースフォントとし、システムフォント構成を使う
- line-height は統一的に ×1.6 を保つ
- CTA ボタンにはアクションブルー `#168bb6` を使う

### Don'ts（非推奨）

- ブランドのネイビーとゴールドを CTA ボタンに使わない（これらはセクション識別用）
- Web フォントを追加しない（メイリオベースの軽量構成を維持）
- letter-spacing を追加しない（全て normal がブランドスタイル）
- palt を有効にしない（等幅メトリクスが前提）
- カード系に影を付けない（フラット＋カラーヘッダーが基本）

---

## 8. Responsive Behavior

- **ブレークポイント**: 実測未取得
- **モバイル**: ハンバーガーメニュー、製品カードは 1 カラムに変化
- **ヒーロー**: 画像はクロップ、テキストサイズは縮小

---

## 9. Agent Prompt Guide

> AI エージェントがこの DESIGN.md を参照してダイキン風の UI を生成するためのガイド。

### 必須トークン

```css
:root {
  --brand-navy: #003568;
  --brand-gold: #fdc64f;
  --action-blue: #168bb6;
  --link-blue: #0099cc;
  --text-primary: #000000;
  --text-secondary: #696969;
  --surface: #f3f3f3;
  --border: #e8e8e8;
  --bg-white: #ffffff;
  --footer-bg: #333333;
}
```

### 生成時の注意点

1. **個人向け＝ゴールド、法人向け＝ネイビー**: 製品セクションはこの色分けで区別する
2. **CTA は `#168bb6`**: ブランドカラーのネイビー・ゴールドは CTA には使わない
3. **メイリオベース**: Web フォント不要。`font-family: メイリオ, "Hiragino Kaku Gothic ProN", sans-serif;`
4. **line-height は ×1.6 統一**: すべてのテキスト階層で 1.6 倍
5. **letter-spacing は normal**: 字間を詰めない・広げない
6. **フラットデザイン**: 影は使わず、色とボーダーで階層を表現
