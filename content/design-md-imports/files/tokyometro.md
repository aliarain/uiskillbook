# DESIGN.md — Tokyo Metro

> 東京メトロ（https://www.tokyometro.jp/）のデザイン仕様書。
> 実サイトの CSS および computed style（2026-06-19 取得）に基づく。CSS Custom Properties は未使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 公共交通インフラとしての信頼性・視認性を最優先にした、機能重視の情報設計。運行情報・駅探索・乗車券案内を素早く提供することに特化したUIで、装飾的な要素は極力排除されている
- **密度**: 情報密度が高い。トップページに運行情報パネル、駅検索、路線一覧、お知らせ等の主要機能がコンパクトに詰め込まれている
- **キーワード**: 信頼、機能的、視認性、公共インフラ、ユニバーサル
- **特徴**: 9路線それぞれに固有のラインカラーが割り当てられており、路線図や運行情報で色による即座の識別を可能にしている。ブランドカラーのネイビー（`#00467e`）がナビゲーション・CTA・フッターに一貫して使用される

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Navy** (`#00467e`): 東京メトロのコーポレートカラー。ナビゲーション、CTA、フッター、主要リンクに使用
- **Brand Navy Dark** (`#004173`): フッター背景等のより暗い面に使用

### Metro Line Colors（路線カラー）

東京メトロ9路線それぞれに公式カラーが割り当てられている。運行情報・路線図・駅案内で路線識別に使用。

| 路線 | Line | Color | Hex |
|------|------|-------|-----|
| 銀座線 | Ginza | オレンジ | `#f39700` |
| 丸ノ内線 | Marunouchi | レッド | `#e60012` |
| 日比谷線 | Hibiya | シルバー | `#9caeb7` |
| 東西線 | Tozai | スカイブルー | `#00a7db` |
| 千代田線 | Chiyoda | グリーン | `#00a650` |
| 有楽町線 | Yurakucho | ゴールド | `#c1a470` |
| 半蔵門線 | Hanzomon | パープル | `#8b76d0` |
| 南北線 | Namboku | ティール | `#00ada9` |
| 副都心線 | Fukutoshin | ブラウン | `#bb641d` |

### Accent（アクセントカラー）

- **Accent Cyan** (`#00a3d9`): 運行情報バッジのアクセント。ボタンのボーダーにも使用
- **Info Surface** (`#e6f3f9`): 運行情報カード、ステータスパネルの背景色
- **Info Surface Light** (`#e9f5fb`): お知らせセクションの背景
- **Info Border** (`#d3e8f2`): 運行情報カードのボーダー

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Dark** (`#191919`): 濃いテキスト（運行情報パネル内）
- **Text Link** (`#00467e`): リンクテキスト（ブランドネイビー）
- **Border Light** (`#dadada`): 入力欄のボーダー
- **Border Info** (`#e0eaf1`): 情報セクションのボーダー
- **Background** (`#ffffff`): ページ背景
- **Background Gray** (`#dfe4e7`): ヘッダーバーの背景
- **Background Light Gray** (`#dfe4e6`): フッター上部・SNSセクション背景
- **Surface Gray** (`#f4f4f4`): Cookie バナー等の背景面
- **Footer Dark** (`#00467e`): フッター背景（ブランドネイビー）

### Semantic（意味的な色）

- **Normal Operation** (`#e6f3f9`): 平常運転（背景）
- **Delay / Alert**: サイトでは運行障害時に専用の配色が表示される（通常時は未確認）

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- メイリオ / Meiryo（Windows ファースト）
- ヒラギノ角ゴ Pro W3 / Hiragino Kaku Gothic Pro（macOS）
- ＭＳ Ｐゴシック（レガシー Windows）

### 3.2 欧文フォント

- **サンセリフ**: メイリオ内蔵の欧文グリフを使用（専用の欧文フォント指定なし）
- **等幅**: 指定なし

### 3.3 font-family 指定

```css
/* 全体 */
font-family: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- メイリオを先頭に指定（Windows 環境を重視した公共サービスらしい設計）
- macOS 向けにヒラギノ角ゴ Pro W3 をフォールバック
- レガシー環境向けに ＭＳ Ｐゴシック を最終フォールバック
- 欧文専用フォントの別途指定はなく、メイリオ内蔵の欧文グリフに依存

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値（2026-06-19 取得）

**サブページ（路線・駅の情報）**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Page Title (h1) | 30px | 700 | 36px (x1.2) | normal | ページタイトル |
| Section Title (h2) | 22px | 700 | 22px (x1.0) | normal | セクション見出し |
| Body (p) | 14px | 400 | 18.2px (x1.3) | normal | 本文テキスト |
| Caption | 12px | 400 | 18.2px (x1.52) | normal | 補足テキスト |

**トップページ**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Title (h2) | 22px | 700 | 22px (x1.0) | normal | 「CM情報」等 |
| Section Title (h2, small) | 16px | 700 | 16px (x1.0) | normal | 「駅を探す」等 |
| Section Title (h2, white) | 24px | 700 | 24px (x1.0) | normal | 白背景上の見出し |
| Sub Title (p) | 20px | 700 | 20px (x1.0) | normal | 「運行情報」「遅延証明書」 |
| Sub Heading (p) | 18px | 700 | 18.2px (x1.01) | normal | 「駅を条件から探す」 |
| Body (body) | 14px | 400 | 18.2px (x1.3) | normal | 本文 |
| Info Badge | 13px | 700 | 19.5px (x1.5) | normal | 運行状況バッジ |
| Small Link | 12px | 400 | 18.2px (x1.52) | normal | 「路線図から探す」等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `18.2px` (14px x 1.3)
- h1: `36px` (30px x 1.2) — ページタイトル
- h2: `22px` (22px x 1.0) — セクション見出し（行間なし）
- p 本文: `18.2px` (14px x 1.3)

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal` — サイト全体で letter-spacing の調整は行われていない

**ガイドライン**:
- 行間は日本語サイトとしてはやや狭め（1.3）。情報密度を重視した設計
- 見出しの line-height が font-size と同値（1.0）のケースが多く、タイトな縦リズム
- letter-spacing は全要素で normal。字詰めは行っていない

### 3.6 禁則処理・改行ルール

```css
/* 明示的な禁則設定は確認されなかった */
/* ブラウザデフォルトの禁則処理に依存 */
```

- 特別な `word-break` や `overflow-wrap` の指定は確認されなかった
- ブラウザデフォルトの禁則処理に依存する設計

### 3.7 OpenType 機能

```css
/* 全要素で normal（未使用） */
font-feature-settings: normal;
```

- **palt**: 未使用。サイト全体でプロポーショナル字詰めは適用されていない
- **kern**: 未使用。公共交通サイトとして、デフォルトの文字間隔を維持している

### 3.8 縦書き

- 該当なし。東京メトロサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ネイビー背景）**
- Background: `#00467e`
- Text: `#ffffff`
- Padding: 5px 10px 5px 40px（アイコン付き）/ 10px（テキストのみ）
- Border Radius: 0px
- Font Size: 14px / 12px
- Font Weight: 400

**Info Badge（運行情報）**
- Background: `#e6f3f9`
- Text: `#191919` / `#00467e`
- Border: 1px solid `#d3e8f2`
- Border Radius: 4px
- Font Size: 13px
- Font Weight: 700

**Pill Button（情報更新）**
- Background: `#ffffff`
- Text: `#00467e`
- Border: 1px solid `#ebf0f2`
- Border Radius: 25px
- Padding: 5px 16px
- Font Size: 12px
- Font Weight: 400

**Accent Button（ボーダーアクセント）**
- Background: `#ffffff`
- Border: 2px solid `#00a3d9`
- Border Radius: 13px

### Inputs

**Search Input（駅検索 — メイン）**
- Background: `#ffffff`
- Border: 1px solid `#737373`
- Border Radius: 0px
- Box Shadow: `rgba(0,0,0,0.4) 2px 2px 7px 0px inset`
- Padding: 0px 10px
- Font Size: 18px
- Font Weight: 400

**Search Input（駅検索 — サブ）**
- Background: `#ffffff`
- Border: 1px solid `#dadada`
- Border Radius: 4px
- Padding: 0px 10px
- Font Size: 14px

**Select（言語切替）**
- Background: `#ffffff`
- Border: 1px solid `#dadada`
- Border Radius: 4px
- Color: `#004378`
- Font Size: 11px
- Padding: 0px 39px 0px 13px

### Cards（情報カード）

- Background: `#e6f3f9`
- Border: 1px solid `#d3e8f2`
- Border Radius: 4px
- Padding: 適宜

### Navigation Links（路線リスト）

- Background: `#ffffff`
- Text: `#333333`
- Padding: 15px 5px
- Border: none
- Font Size: 14px

---

## 5. Layout Principles

### Container

- Max Width: 1000px（推定、トップページメインコンテンツ）
- Padding (horizontal): 適宜

### Spacing

- サイト固有のスペーシングスケールやデザイントークンは確認されなかった
- コンポーネントごとに個別の padding/margin 値が設定されている

### Grid

- トップページ: 路線リストは横並びグリッド（9路線）
- 駅探索: アイコン付きの4カラムグリッド
- レスポンシブ対応あり

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 大半の要素（フラットデザイン） |
| Inset | `rgba(0,0,0,0.4) 2px 2px 7px 0px inset` | 駅検索入力欄 |

- サイト全体としてフラットデザインを採用。box-shadow はほぼ使用されていない
- 検索入力欄にインセットシャドウを適用し、凹んだ入力エリアを表現している
- カード等のフローティング要素にも明示的な shadow は確認されなかった

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドネイビー `#00467e` をナビゲーション・CTA・リンクに一貫して使う
- 路線を示す際は必ず公式ラインカラーを使用する（色による即座の識別が公共交通の基本）
- テキストには `#333333` を使う（純粋な黒 `#000000` は使わない）
- 運行情報パネルには `#e6f3f9` 背景 + `#d3e8f2` ボーダーの組み合わせを使う
- フォントはメイリオを先頭に指定する（Windows ユーザーが多い公共サービス）
- 情報の階層を font-size と font-weight で明確に区別する（14px/400 本文 vs 20px/700 セクション見出し）
- 機能ボタンには角丸なし（radius: 0）、情報ボタンには軽い角丸（radius: 4px）、アクション補助にはピル型（radius: 25px）と使い分ける

### Don't（禁止）

- 路線カラーをブランドカラーとして汎用的に使わない（路線カラーは路線識別専用）
- ブランドネイビー `#00467e` を本文テキストに使わない（リンク・CTA専用）
- 過度な装飾や影を追加しない（公共交通サイトとしてのフラットで機能的なデザインを維持する）
- `font-feature-settings: "palt"` を適用しない（実サイトでは全要素で未使用）
- `letter-spacing` を調整しない（実サイトでは全要素で normal）
- line-height を 2.0 等の広い値にしない（実サイトは 1.0〜1.3 のタイトな行間設計）
- 検索入力欄以外にインセットシャドウを使わない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 640px | モバイルレイアウト（推定） |
| Desktop | > 640px | デスクトップレイアウト |

### タッチターゲット

- 路線リストのリンク: padding 15px 5px で十分なタップ領域を確保
- ナビゲーションリンクボタン: padding 10px で最低限のタップ領域

### フォントサイズの調整

- モバイルでは主要なレイアウトがリニアに変更される
- フォントサイズの大幅な変更は確認されなかった

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Navy: #00467e
Accent Cyan: #00a3d9
Info Surface: #e6f3f9
Info Border: #d3e8f2
Text Primary: #333333
Text Link: #00467e
Background: #ffffff
Header Bar: #dfe4e7
Font: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", sans-serif
Body Size: 14px / line-height: 1.3 / letter-spacing: normal
palt: 未使用
```

### 路線カラーリファレンス

```
銀座線:    #f39700 (orange)
丸ノ内線:  #e60012 (red)
日比谷線:  #9caeb7 (silver)
東西線:    #00a7db (sky blue)
千代田線:  #00a650 (green)
有楽町線:  #c1a470 (gold)
半蔵門線:  #8b76d0 (purple)
南北線:    #00ada9 (teal)
副都心線:  #bb641d (brown)
```

### プロンプト例

```
東京メトロのデザインに従って、運行情報ダッシュボードを作成してください。
- フォント: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", sans-serif
- テキスト色: #333333
- ブランドカラー: #00467e（ナビゲーション・CTA用）
- リンクテキスト: #00467e
- 運行情報パネル背景: #e6f3f9、ボーダー: #d3e8f2
- 路線ごとに公式ラインカラーを使用
- 本文: 14px, line-height: 1.3, letter-spacing: normal
- palt: 使用しない
- 角丸: CTAは0px、情報バッジは4px、ピルボタンは25px
```
