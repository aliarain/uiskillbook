# DESIGN.md — KAI (貝印)

> KAI 公式サイト（https://www.kai-group.com/）のデザイン仕様書。
> 1908年創業、包丁・カミソリ・医療用刃物で世界的に知られる刃物メーカー。「モノづくりの老舗」としての信頼感を、極細ウェイト（300）の游ゴシック＋大きな余白で表現する、静かなコーポレートサイト。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 100年超の歴史を持つ老舗メーカーのコーポレートサイト。情報をきれいに整理し、製品群（包丁・カミソリ・ビューティ・医療）を落ち着いたトーンで見せる。装飾は最小限
- **密度**: 中程度。コーポレート情報と製品カテゴリを並列に配置するポータル型。カルーセル + ニュースフィードが主構成
- **キーワード**: 静謐、軽やか、老舗の品格、白基調、システムフォント
- **特徴**: **body の font-weight が 300（Light）** という珍しい設定。日本のコーポレートサイトでは 400 が標準だが、KAI は全体を 300 で組むことで「研ぎ澄まされた」空気感をつくっている。palt は見出しとロゴに選択適用し、本文には使わない。CTA は pill でもカラーボタンでもなく、**フラットなナビゲーション型リンク**が基本。WordPress CMS 上に構築

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **KAI Blue** (`#094da4`): カルーセルオーバーレイ、フッターのアクセントボタンテキストに使用。企業ブランドの青。実サイトでは控えめに登場し、写真とテキストの間に静かに差し色として置かれる

### Text

- **Text Primary** (`#242424`): 本文テキスト。純黒ではなく柔らかい黒
- **Text Nav** (`#333333`): ナビゲーションのサブ項目、メニューテキスト
- **Text Muted** (`#5f5f5f`): フッターの二次リンク、キャプション等
- **Text on Surface** (`#ffffff`): ダーク面上のテキスト（カルーセルのオーバーレイ等）

### Surface（面色）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface Gray** (`#f7f7f7`): ナビゲーションドロワー背景
- **Surface Footer** (`#f6f6f6`): フッター背景。白とほぼ同化する極薄グレー
- **Surface Dark** (`#094da4`): カルーセルオーバーレイの青面（ブランドカラーと同値）

### Border

- **Border Default** (`#cccccc`): フォームコントロール・区切り線（CSS変数 `--_light-color-gray`）
- **Border Input** (`#cccccc`): 入力フィールドの枠線（CSS変数 `--_form-control-border-color`）

> **Note**: KAI のカラーパレットは**極めて制限的**。ブランドブルー 1 色 + テキスト階調 + グレー面の 3 層構造。原色やアクセント色をほとんど使わず、製品写真の色に語らせる設計。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- ヒラギノ角ゴ ProN（macOS 最優先）
- 游ゴシック / YuGothic（macOS / Windows）
- メイリオ（Windows フォールバック）
- MS PGothic（最終フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: フォントスタック内で欧文専用フォントは指定していない。ヒラギノ角ゴ / 游ゴシック内蔵の欧文グリフをそのまま使用

### 3.3 font-family 指定

```css
/* 全体 */
font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN", "Yu Gothic", 游ゴシック, YuGothic,
  游ゴシック体, メイリオ, Meiryo, "ＭＳ Ｐゴシック",
  "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- **和文フォントのみ**で構成。欧文専用フォントを先頭に置かないため、欧文も和文フォントのグリフで表示される
- ヒラギノ Sans → ヒラギノ角ゴ ProN（macOS）→ 游ゴシック（macOS / Windows）→ メイリオ（Windows）→ MS PGothic（最終）
- Webフォントは使用していない。完全にシステムフォント依存

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | palt | 備考 |
|------|------|--------|-------------|----------------|------|------|
| Logo (h1) | 28px | 300 | 1.0 | 0.05em | あり | サイトロゴ。Light ウェイト |
| Section Title (h2) | 20px | 700 | 1.7 | 0.05em | あり | セクション見出し「top-ttl」 |
| Nav Sub (h2) | 14px | 400 | 1.71 | normal | なし | ドロワーナビの小見出し |
| Nav Item (h3) | 14px | 400 | 1.71 | 0.05em | あり | ナビゲーション項目 |
| Body (p) | 14px | 300 | 1.75 | 0.05em | なし | 本文テキスト。**Light ウェイト** |
| Body Large | 15px | 300 | normal | 0.05em | なし | 一部の本文テキスト |
| Nav Link | 13px | 500 | 1.54 | 0.05em | なし | ヘッダーナビゲーション |
| Footer Button | 16px | 600 | 1.75 | normal | なし | フッターのアクション |
| Footer Link | 12px | 600 | 1.75 | normal | なし | フッター内リンク |
| Caption | 11px | 300 | 1.5 | 0.05em | なし | 最小テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.75**（14px 本文基準で 24.5px）。標準的な日本語サイトの 1.5〜1.7 よりやや広め
- **見出しの行間**: **1.7**（20px 見出し基準で 34px）。見出しでもゆとりを保つ
- **letter-spacing**: **0.7px（≈ 0.05em）がグローバルに適用**。body 全体で均一な字間を設定
- **font-feature-settings**: **palt は見出し・ロゴ・ナビに選択適用**。本文には使わない

> **特徴**: KAI の組版は **font-weight: 300 + letter-spacing: 0.05em** の組み合わせが独自性を生んでいる。細い線幅 + 広めの字間で「刃物の精密さ」を連想させる。

### 3.6 禁則処理・改行ルール

```css
/* WordPress 標準。特別な禁則指定はなし */
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* 見出し・ロゴに選択適用 */
font-feature-settings: "palt" 1;
```

- **palt**: h1（ロゴ）、h2（セクションタイトル）、h3（ナビ）に適用。本文 (p) には適用しない
- **kern**: 明示的な指定なし。ブラウザデフォルトのカーニングに任せる

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — フラット＋ミニマル、pill CTA は不使用

**Navigation Link（ヘッダー）**
- Background: `transparent`
- Text: `#333333`
- Font Size: `13px`
- Font Weight: `500`
- Letter Spacing: `0.05em`
- Border: なし
- Border Radius: `0px`
- Padding: `17px 95px 15px 20px`（ドロワーメニュー）
- Hover: テキスト色変化のみ
- 例: 「包丁」「カミソリ」「ビューティケア」

**Footer Action**
- Background: `transparent`
- Text: `#094da4`（ブランドブルー）
- Font Size: `16px`
- Font Weight: `600`
- Border: なし
- Border Radius: `0px`
- 例: フッターのカテゴリリンク

**Footer Sub Link**
- Background: `transparent`
- Text: `#5f5f5f`
- Font Size: `12px`
- Font Weight: `600`
- 例: フッターの二次リンク

> **Don't**: KAI に **pill ボタンやカラー塗りの CTA は存在しない**。すべてのアクションはテキストリンクまたはフラットなナビゲーション要素。

### Inputs

- Background: `#ffffff`
- Border: `1px solid #cccccc`（`--_form-control-border-color`）
- Border (focus): `1px solid #094da4`（推定、ブランドブルー）
- Border Radius: `0px`
- Font Size: `14px`
- Font Weight: `300`

### Cards

- Background: `#ffffff`
- Border: `1px solid #cccccc` または影のみ
- Border Radius: `0px`（角丸なし）
- Padding: セクションにより可変
- Shadow: 最小限

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコン・インライン余白 |
| S | 16px | テキスト間 |
| M | 24px | カード内パディング |
| L | 32px | セクション内余白 |
| XL | 64px | セクション間（小） |
| XXL | 100px+ | セクション間（大）、ヒーロー周辺 |

### Container

- Max Width: **1200px**（推定、コーポレートサイト標準）
- Padding (horizontal): `20px`（モバイル）〜 `40px`（デスクトップ）

### Grid

- ヒーロー: 1 カラム（フルブリードカルーセル）
- 製品カテゴリ: 4 カラム（デスクトップ）/ 2 カラム（タブレット）/ 1 カラム（モバイル）
- ニュース: リスト型（1 カラム）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（ほぼすべての要素） |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | カードホバー、ナビゲーション |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ドロップダウンメニュー |

> **特徴**: KAI は**影を極力使わない**フラットデザイン。セクション区切りはボーダーラインまたは背景色の微差（#ffffff → #f7f7f7 → #f6f6f6）で表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文の font-weight は **300（Light）** を使う。KAI の最大の特徴
- letter-spacing は **0.05em** をグローバルに適用する
- palt は**見出し・ロゴにのみ**適用し、本文には使わない
- テキスト色は `#242424`（純黒ではない）を使う
- ブランドブルー `#094da4` は差し色として控えめに使う
- 余白を広くとり、コンテンツの密度を低く保つ
- フォントはシステムフォントスタック（ヒラギノ → 游ゴシック → メイリオ）で統一する

### Don't（禁止）

- **font-weight: 400 以上を本文に使わない**（300 が KAI のアイデンティティ）
- **pill ボタンやカラー塗りの CTA を作らない**（すべてフラットなテキストリンク）
- **原色やビビッドなアクセントカラーを使わない**（製品写真に色を語らせる）
- **ドロップシャドウで強い立体感を出さない**（フラット + 薄いグレー背景で層を作る）
- **テキスト色に純黒 `#000000` を使わない**（`#242424` を使う）
- **Webフォントを追加しない**（システムフォントの一貫性を保つ）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ハンバーガーナビ |
| Tablet | ≤ 1024px | 2 カラムグリッド |
| Desktop | > 1024px | フル表示、4 カラム製品グリッド |

### タッチターゲット

- 最小サイズ: 44px x 44px（ナビゲーション項目は padding で確保）

### フォントサイズの調整

- モバイルでは本文 14px 据え置き、見出しはデスクトップの 80% 程度に縮小
- font-weight: 300 はモバイルでも維持（ブランドの一貫性）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color:         #094da4 (KAI Blue)
Text Primary:        #242424
Text Nav:            #333333
Text Muted:          #5f5f5f
Background:          #ffffff
Surface Gray:        #f7f7f7
Surface Footer:      #f6f6f6
Border:              #cccccc
Font:                "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif
Body Size:           14px
Body Weight:         300 (Light)
Heading Weight:      700
Line Height:         1.75
Letter Spacing:      0.05em (global)
palt:                見出し・ロゴのみ（本文は不使用）
CTA Style:           フラットテキストリンク（pill / カラーボタンなし）
```

### プロンプト例

```
KAI（貝印）のデザインシステムに従って、製品一覧ページを作成してください。

- 背景: #ffffff（白基調）
- フォント: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif
- 本文: 14px / font-weight: 300 / line-height: 1.75 / letter-spacing: 0.05em
- 見出し: 20px / font-weight: 700 / palt あり
- テキスト色: #242424（純黒は使わない）
- ブランドブルー #094da4 はリンクの差し色にのみ使用
- CTA はフラットなテキストリンク（pill ボタンやカラーボタンは使わない）
- カード: ボーダー #cccccc、角丸なし、影は最小限
- 全体を font-weight: 300 で組み、「研ぎ澄まされた精密さ」を表現する
```
