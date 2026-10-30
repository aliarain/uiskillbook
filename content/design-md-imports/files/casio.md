# DESIGN.md — CASIO (casio.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1957年創業の精密機器メーカーとしての信頼性と技術力を表現。装飾を排し、直線的・幾何学的な構成で「精密さ」を体現するコーポレートサイト
- **密度**: 中〜高密度の情報設計。ニュースリリース、IR情報、製品カテゴリ、パーパスが整然とグリッド配置されたインフォメーション型ホーム
- **キーワード**: 精密、堅実、先端、クリーン、角張り

**設計上のポイント**:
- 角丸を一切使わない（border-radius: 0px が全要素で徹底）— 精密機器メーカーらしいシャープさ
- DIN 2014（幾何学的サンセリフ）を欧文ディスプレイに使用 — 計器・時計の文字盤を想起させるブランド選択
- テキストは純黒 `#000000` を使用（資生堂のような温色グレーではなく、エンジニアリング的な明確さ）
- ページ背景が純白ではなく淡いブルーグレー `#f4f5f8` — わずかに冷たいトーンで技術的な清潔感
- カテゴリ別カラーコーディング: 製品=赤、企業=紺・紫、投資家=緑
- ウェイト 200（極細）〜 700（太字）の幅広いレンジを使用

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **CASIO Blue** (`#0a3282`): カシオの象徴的なブランドブルー。ロゴ、パーパスセクション、コーポレートアイデンティティに使用。深い紺色で信頼性と技術力を表現
- **CASIO Red** (`#bb3c39`): 「製品」カテゴリラベル。G-SHOCKなどプロダクトラインのアクセント

### Category（カテゴリカラー）

- **Corporate Purple** (`#494c8c`): 「企業」カテゴリラベル
- **Investor Green** (`#2e7c65`): 「投資家」カテゴリラベル

### Semantic（意味的な色）

- **Danger / Alert** (`#e54747`): エラーテキスト、警告メッセージ
- **Warning**: 未定義（実測なし）
- **Success**: 未定義（実測なし）

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出しの基本色。純黒を使用
- **Text Secondary** (`#333333`): 補足テキスト、ラベル
- **Text Disabled** (`#999999`): 無効状態のテキスト（推奨値）
- **Text Inverse** (`#ffffff`): 暗い背景上のテキスト
- **Border** (`#bebebe`): セカンダリボタンの枠線、区切り線
- **Border Strong** (`#000000`): プライマリボタンの枠線
- **Background** (`#f4f5f8`): ページ全体の基本背景（淡いブルーグレー、純白ではない）
- **Surface** (`#ffffff`): カード、モーダル等の面
- **Footer Background** (`#030303`): フッター背景（ほぼ純黒）

### Quick Swatch

| Token | Value | 役割 |
|-------|-------|------|
| CASIO Blue | `#0a3282` | ブランド紺・ロゴ・パーパス |
| CASIO Red | `#bb3c39` | 製品カテゴリ・プロダクトアクセント |
| Corporate Purple | `#494c8c` | 企業カテゴリ |
| Investor Green | `#2e7c65` | 投資家カテゴリ |
| Alert Red | `#e54747` | エラー・警告テキスト |
| Text Primary | `#000000` | 本文・見出し |
| Border | `#bebebe` | 仕切り線・ボタン枠 |
| Background | `#f4f5f8` | ページ背景（ブルーグレー） |
| Surface | `#ffffff` | カード・面 |
| Footer | `#030303` | フッター背景 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP（Google Fonts 配信）、ヒラギノ角ゴ ProN、Hiragino Kaku Gothic ProN、Meiryo、メイリオ
- **明朝体**: 使用なし（コーポレートサイトはゴシック体で統一）

### 3.2 欧文フォント

- **ディスプレイ**: DIN 2014（Adobe Fonts。幾何学的サンセリフ。精密機器・時計のイメージ）
- **サンセリフ**: Noto Sans JP の欧文グリフにフォールバック
- **セリフ**: 使用なし
- **等幅**: 未定義

> **Web配信に関する注記**:
> - `DIN 2014` は **Adobe Fonts** 専用のライセンスフォント。ドメインごとの契約が必要で、ローカルプレビューでは表示されない
> - preview.html では Google Fonts の `Inter` を代替として使用。DIN 2014 と同じく幾何学的サンセリフの系統で、字幅・ウェイト展開が近い
> - `Noto Sans JP` は Google Fonts から配信可能。和文のフォールバックとして確実に機能する
> - 実装時は Adobe Fonts のプロジェクトキットを設定して DIN 2014 を読み込むこと

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: din-2014, "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ", sans-serif;

/* preview.html 用（DIN 2014 を Inter で代替） */
font-family: "Inter", "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ", sans-serif;
```

**フォールバックの考え方**:
- `din-2014`（Adobe Fonts）を最優先で指定し、欧文の幾何学的な精密感を確保
- 続けて `Noto Sans JP` を和文の主力として配置（Web フォント配信可能）
- Mac には `ヒラギノ角ゴ ProN` を保険として配置
- Windows には `Meiryo` をフォールバック
- 明朝体やセリフは使用しない（精密機器メーカーとしてのゴシック統一）

### 3.4 文字サイズ・ウェイト階層

実測値に基づく主要階層（casio.co.jp トップページ計測）:

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | DIN 2014 + Noto Sans JP | 30px | 700 | — | normal | ページ最上位見出し |
| Heading 2 (topics) | DIN 2014 + Noto Sans JP | 30px | 700 | 48px (×1.6) | normal | 「TOPICS」セクション見出し |
| Heading 2 (sub) | Noto Sans JP | 20px | 700 | — | normal | サブセクション見出し |
| Nav Primary | Noto Sans JP | 14px | 700 | — | normal | 「会長メッセージ」等のナビ |
| Nav Sub | Noto Sans JP | 13px | 400 | — | normal | 「Purpose」等のサブナビ |
| Body | Noto Sans JP | 15px | 400 | 22.5px (×1.5) | normal | サイト全体の標準本文 |
| Body (article) | Noto Sans JP | 14px | 400 | 28px (×2.0) | normal | 記事本文（行間広め） |
| Nav Utility | Noto Sans JP | 12px | 400 | 18px (×1.5) | normal | 「企業TOP」等のヘッダーナビ |
| Caption / Alert | Noto Sans JP | 12px | 200 | — | normal | 注意書き、補足テキスト |
| Utility Small | Noto Sans JP | 11px | 200–400 | — | normal | ヘッダーユーティリティ |
| Button Text | Noto Sans JP | 12px | 200 | — | normal | 「マイページ」等のボタンラベル |
| Icon | icon-casio | 20px | — | — | — | カスタムアイコンフォント |

> 算出: `line-height` の比率 = `行送り px / フォントサイズ px`。CASIOは本文系が **1.5**、記事本文が **2.0**、見出し系が **1.6** に収束する設計。ウェイト 200（極細）をユーティリティテキストに多用するのが特徴。

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（15px / 22.5px）が基準。記事本文では 2.0（14px / 28px）を使用
- **見出しの行間**: 1.6（30px / 48px で TOPICS 等）
- **本文の字間 (letter-spacing)**: `normal`（明示的な指定なし）
- **見出しの字間**: `normal`

**ガイドライン**:
- letter-spacing を意図的に詰めたり広げたりしない。DIN 2014 のメトリクスをそのまま活かす設計
- 記事本文の line-height 2.0 は日本語サイトとしてかなり広め。長文の可読性を優先
- 本文 15px は一般的な 14px よりわずかに大きく、ブルーグレー背景上での視認性を確保

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実測ではグローバルな指定なし、ブラウザデフォルト） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 等の指定なし */
```

- **palt**: 使用していない（実測値はすべて `normal`）。プロポーショナル字詰めを適用しない
- **kern**: ブラウザの自動カーニングのみ
- DIN 2014 には独自のカーニングテーブルがあるが、CSS 側では明示的に有効化していない

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（黒塗り）**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Padding: 12px 28px
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 400
- 「ログイン」「企業情報」等の主要導線で使用

**Secondary（白地・グレー枠）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #bebebe`
- Padding: 12px 28px
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 400
- 「もっと見る」「ニュースリリース一覧」等の補助導線

**Category Label（カテゴリカラー塗り）**
- Background: カテゴリ色（`#bb3c39` / `#494c8c` / `#2e7c65`）
- Text: `#ffffff`
- Border: none
- Padding: 4px 12px
- Border Radius: `0px`
- Font Size: 12px
- Font Weight: 700
- 「製品」「企業」「投資家」のカテゴリラベル

### Inputs

- Background: `#ffffff`
- Border: `1px solid #bebebe`
- Border (focus): `1px solid #0a3282`（CASIO Blue）
- Border Radius: `0px`（サイト方針として角丸を使わない）
- Padding: 10px 12px
- Font Size: 15px
- Height: 44px（タッチターゲット基準）

### Cards / Panels

- Background: `#ffffff`
- Border: `1px solid #bebebe` または border なし
- Border Radius: `0px`
- Padding: 16px〜24px
- Shadow: なし（フラットが基本）

### Alert / お知らせ

- テキスト色: `#e54747`（Alert Red）
- 本文テキスト色: `#000000`
- 背景: `#ffffff` または `#f4f5f8`
- テキストの色だけで強調するミニマルな手法

### Footer

- Background: `#030303`
- Text: `#ffffff`
- Padding: 40px 80px
- リンク色: `#ffffff`

---

## 5. Layout Principles

### Spacing Scale

8px ベースの倍数で構成:

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 8px | 要素間の最小余白 |
| S | 16px | カード内パディング |
| M | 24px | セクション内要素間 |
| L | 40px | セクション上下パディング |
| XL | 64px | メインセクション間 |
| XXL | 80px | ヒーロー・フッター左右パディング |

### Container

- Max Width: 1200px（推定。コーポレートサイト標準幅）
- Padding (horizontal): 16px（モバイル）〜 80px（デスクトップ）

### Grid

- Columns: 可変（3〜4分割のニュースカード、2分割のトピックス等）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

実測値はすべて `box-shadow: none`。CASIOはフラットデザインを徹底している。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素のデフォルト |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | （推奨）ホバー時のカード控えめな浮き |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | （推奨）モーダル・ドロップダウン |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | （推奨）ダイアログ・フローティング要素 |

> 実装方針: 影を足さなくてもデザインが成立するレイアウトを優先する。罫線と背景色の差分で階層を表現。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#000000` を基本とし、CASIOブランドの明確さを保つ
- `border-radius: 0px` を全要素で徹底する。角丸は精密機器メーカーのイメージに反する
- `font-family` は `din-2014` を先頭に、`Noto Sans JP` → ヒラギノ → Meiryo のフォールバックチェーンで指定する
- DIN 2014 の幾何学的な字形を活かし、数値・英文ラベルは欧文フォントで表示する
- ページ背景には `#f4f5f8`（ブルーグレー）を使い、純白を避ける
- カテゴリラベルは色分けを厳守する（赤=製品、紺=コーポレート、紫=企業、緑=投資家）
- 影を使わず、ボーダーと背景色の差分で階層を作る
- ウェイト 200（極細）をユーティリティテキストに使い、情報の階層を明確にする

### Don't（禁止）

- ボタン・入力欄に角丸を加えない（`border-radius: 0px` を維持）
- CASIO Blue `#0a3282` を広い面の背景に多用しない（パーパスセクション等の限定使用にとどめる）
- ページ背景を純白 `#ffffff` にしない（`#f4f5f8` のブルーグレーが基本）
- `letter-spacing` をグローバルに変更しない（`normal` のまま）
- `font-feature-settings: "palt" 1` を適用しない
- 装飾的なグラデーション・ドロップシャドウを多用しない
- 明朝体を使わない（ゴシック体で統一）
- DIN 2014 の代わりに丸みのあるフォント（Rounded Gothic 等）を使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1カラム） |
| Tablet | 768px – 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 15px をそのまま維持（これ以上縮小しない）
- 見出しはデスクトップの 70〜80% 程度に縮小（h1: 30px → 22px、h2: 20px → 16px 程度）
- フッターの左右 padding は 80px → 16px へ縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color:  #0a3282 (CASIO Blue)
Product Red:  #bb3c39 (CASIO Red)
Text Color:   #000000 (pure black)
Background:   #f4f5f8 (light blue-gray, NOT pure white)
Surface:      #ffffff (cards, modals)
Border:       #bebebe (subtle) / #000000 (strong/primary btn)
Footer BG:    #030303
Alert Red:    #e54747
Font: din-2014, "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ", sans-serif
Body Size:    15px
Body Line Height: 1.5 (article: 2.0)
Border Radius: 0px (sharp, no rounded corners)
Letter Spacing: normal
font-feature-settings: normal (no palt)
Shadow: none (flat)
```

### プロンプト例

```
CASIO（casio.co.jp）のデザインシステムに従って、製品一覧ページを作成してください。

- ベースカラー: テキスト #000000（純黒）、背景 #f4f5f8（ブルーグレー）
- ブランド紺 #0a3282 はパーパス・ロゴ等のブランド要素に限定使用
- 製品カテゴリラベルは #bb3c39（赤）の塗りで表示
- フォント: din-2014, "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", Meiryo, "メイリオ", sans-serif
- 本文: 15px / weight 400 / line-height 1.5 / letter-spacing normal
- 見出し h1: 30px / weight 700
- 見出し h2: 20px / weight 700
- プライマリボタン: 黒塗り #000 + 白文字 + border 1px solid #000 + radius 0px
- セカンダリボタン: 白地 + 黒文字 + border 1px solid #bebebe + radius 0px
- カード: 白面 #fff + border 1px solid #bebebe + radius 0px + shadow none
- すべての要素で border-radius: 0px（角丸なし）
- box-shadow: none（フラット）
- フッターは背景 #030303、テキスト #ffffff
- font-feature-settings: normal（palt は使わない）
```
