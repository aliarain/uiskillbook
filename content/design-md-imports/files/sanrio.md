# DESIGN.md — Sanrio

> サンリオ（https://www.sanrio.co.jp/）公式サイトのデザイン仕様書。
> 実サイトの computed style と CSS Custom Properties に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「みんな仲良く（Small Gift, Big Smile）」を体現する、やわらかく可愛らしいユニバーサルデザイン。子どもから大人まで親しみやすいパステル基調
- **密度**: 比較的余白を多くとり、丸みのあるピル CTA・サムネを大きく見せる構成。情報量は多いがカテゴリごとに色分けされて整理されている
- **キーワード**: パステル、ポップ、ピル、丸み、キャラクター主導、明るい
- **特徴**: **ピル CTA（border-radius 80–145px）** が UI の核。カテゴリごとに**異なるテーマカラー**（シアン / ピンク / 紫 / 黄 / 緑 / コーラル）でセクションを彩り、キャラクター IP の世界観をまとめる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — CSS Custom Properties 実測値）

- **Sanrio Cyan / `--c-primary`** (`#8bd0dd`): メインのブランドカラー。CTA・「キャラクター TOP」「Sanrio＋ TOP」等
- **Cyan Mid / `--c-dial-primary`** (`#71c6d6`): プライマリの 1 段濃いめ。ボタン上のテキスト等にも使用
- **Sanrio Pink / `--c-pagetheme-sub`** (`#e383a8`): セカンダリブランド。「グッズ TOP」「会員登録」「検索」CTA
- **Sanrio+ Pink** (`#e83767`): Sanrio+ サービス専用の濃いピンク
- **Sanrio+ Pink-A** (`#ec7996`): Sanrio+ ロゴ周辺の補助ピンク

### Category Theme Colors（カテゴリテーマ色）

各カテゴリの「TOP」CTA とセクションヘッダーで使用される 6 色：

- **Character** (`#8bd0dd`): シアン（キャラクター）
- **Goods** (`#e383a8`): ピンク（グッズ）
- **Movie** (`#cda1dc`): 紫（ムービー）
- **Digital** (`#f2d36b`): 黄（デジタル / LINE スタンプ）
- **Spot** (`#91dea9`): 緑（スポット / イベント）
- **News** (`#f08080`): コーラル（ニュース）

### Promo / Channel

- **YouTube Channel** (`#e67272`): 「チャンネル登録」CTA（YouTube 系）

### Surface（面色）

- **Background** (`#ffffff`): ページ背景
- **Surface Pink Light** (`#fdf5fa`): 重要なお知らせ等の薄ピンク背景
- **Surface Cyan Lightest / `--c-primary-c`** (`#f0f9fa`): プライマリの最薄面
- **Surface Cyan Light / `--c-primary-b`** (`#e2f2f7`): プライマリの薄面（フォーム背景等）
- **Surface Cyan Pale / `--c-primary-a`** (`#b5e5ef`): プライマリの中間面
- **Surface Gray Light** (`#f7f7f7`): ランキング・お知らせ等のセクション背景
- **Surface Gray** (`#dddddd`): 区切り・無効状態
- **Surface Character Cyan** (`#e2f2f7`): ハローキティ等キャラクターカード背景

### Text

- **Text Primary / `--c-text-main` (alternate)** (`#777777`): 本文・見出しすべての基本色（純黒は使わない）
- **Text Cyan Mid** (`#71c6d6`): 「もっと見る」等のリンクラベル
- **Text Pink** (`#e383a8`): ピンクテーマのリンクラベル

> **Note**: サンリオは UI のテキスト色に純黒（#000）も濃グレー（#333）も使わず、**#777777（中グレー）** を統一して使用している。これによりパステル基調の中で文字も柔らかい印象に保たれる。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- **Noto Sans JP**（Google Fonts、Web フォント）

**フォールバック**: `sans-serif` のみ（他の和文フォントは指定しない）

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP の欧文グリフをそのまま使用（独立した欧文書体は指定なし）

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Web フォント Noto Sans JP のみを指定し、和欧混植を 1 書体で統一
- フォールバックは generic `sans-serif` のみ（環境差を最小化）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title (h2) | Noto Sans JP | 22.5px | 700 | 27px (1.2) | 1.875px (≈0.083em) | 「Charactersキャラクター」等 |
| Sub Section (h2) | Noto Sans JP | 20px | 500 | 30px (1.5) | 2.4px (0.12em) | 特集ページタイトル |
| Block Heading (h3) | Noto Sans JP | 17.55px | 700 | 21.06px (1.2) | 1.875px (≈0.107em) | 「オンラインショップ人気ランキング」 |
| Sub Heading (h3) | Noto Sans JP | 15px | 500 | 23px (1.53) | 1.8px (0.12em) | 商品説明見出し |
| Notice Heading (h3) | Noto Sans JP | 14px | 700 | 16.8px (1.2) | 0.7px (0.05em) | 「重要なお知らせ」 |
| Body | Noto Sans JP | 15px | 400 | 27px (1.8) | 1.875px (0.125em) | 本文 |
| Card Caption | Noto Sans JP | 12px | 700 | 14.4px (1.2) | normal | キャラクター名（日本語） |
| Card Caption EN | Noto Sans JP | 11px | 700 | 13.2px (1.2) | normal | キャラクター名（英語） |
| Search Label | Noto Sans JP | 16px | 700 | 19.2px (1.2) | normal | 「検索」CTA 内 |
| "More" Label | Noto Sans JP | 11px | 700 | 13.2px (1.2) | normal | 「もっと見る」 |

### 3.5 行間・字間

- **本文（body / p）の行間**: **1.8**。サンリオは欧文サイトより明らかに広い line-height を本文に取る（読みやすさを最優先）
- **見出しの行間**: 1.2 でタイト
- **本文の字間**: `letter-spacing: 1.875px`（≈ `0.125em`）。**全角の本文に約 0.12em の字間**を入れて空気感を作る
- **見出しの字間**: 1.875–2.4px（≈ 0.083〜0.12em）。タイトな見出しでも字間は確保

**ガイドライン**:
- 本文は line-height 1.8 / letter-spacing 0.12em を厳守すると「サンリオらしさ」が出る
- 見出しは行間こそ詰めるが、字間は緩めて柔らかさを保つ
- カード内の小さなキャプション（11–12px）は字間を `normal` に戻して読みやすさを優先

### 3.6 禁則処理・改行ルール

```css
/* サンリオの基本 */
overflow-wrap: break-word;
word-break: normal;
```

- カテゴリラベル「キャラクター」「グッズ」等の短い名詞は禁則対象なし
- 商品名・キャラクター名（カタカナ + 英字）は `overflow-wrap` で折り返す

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使わない**。`letter-spacing` の数値指定で字詰めを制御している
- カーニング `kern` も明示指定なし

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA Pill（カテゴリ TOP / 主要アクション）**
- Background: カテゴリ別テーマ色（`#8bd0dd` / `#e383a8` / `#cda1dc` / `#f2d36b` / `#91dea9` / `#f08080`）
- Text: `#ffffff`
- Padding: 縦横とも内部に余白多め（実装依存）
- Border Radius: **80px**（完全な pill）
- Font Size: 13–16px / Weight 700

**Mega Pill CTA（会員登録）**
- Background: `#e383a8`
- Text: `#ffffff`
- Border Radius: **145px**（極端に大きい pill）
- Font Size: 16px / Weight 700

**Outline Pill（もっと見る等）**
- Background: `#ffffff`
- Text: `#71c6d6`（主シアン）/ `#e383a8`（ピンク）
- Border: 1px solid テーマ色 / 影による浮き上がり
- Border Radius: **55px**
- Font Size: 11px / Weight 700

**Tab / Filter Pill**
- Background: transparent
- Text: `#71c6d6`（cyan）/ `#777777`
- Border Radius: **6px**（タブ）または `100px`（カテゴリ）
- Padding: `9px` / `6px 0`
- Font Size: 13–14px / Weight 500–700

**Page Top Button**
- Background: `#8bd0dd`
- Text: `#777777`
- Border Radius: **300px**（円形）
- Position: fixed bottom-right

**YouTube CTA**
- Background: `#e67272`
- Text: `#ffffff`
- Border Radius: 28px
- Font Size: 14px / Weight 700

### Search Bar

- Background: `#fdf5fa` / `#f0f9fa`（テーマに応じてピンク / シアンの薄面）
- Search Type Tab: text `#71c6d6`、active で背景色追加
- 検索ボタン: 円形、bg `#e383a8`、`80px` radius

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Border Radius: 8–12px
- Padding: 8px 12px
- Font Size: 14px

### Cards

- Background: `#ffffff` または `#e2f2f7`（キャラクターカード）
- Border: なし or 1px solid `#dddddd`
- Border Radius: **20–24px**（柔らかい角丸）
- Padding: 16–24px
- Shadow: ごく薄い（後述）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | カード内テキスト間 |
| M | 16px | カード間ギャップ |
| L | 24px | セクション内ブロック間 |
| XL | 40px | セクション間 |
| XXL | 64px〜 | メジャーセクション間 |

### Container

- Max Width: 約 1200px
- Padding (horizontal): 16〜24px
- ヘッダー / フッターは 100vw

### Grid

- キャラクターサムネ: 4〜8 カラム（横スクロールも併用）
- ニュース: 3〜4 カラム
- ランキング: 1 カラム（縦並び）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな pill / カード |
| 1 | `0 2px 6px rgba(0,0,0,0.06)` | カード・フローティング pill |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | モーダル、ドロップダウン |

> サンリオの陰影は**全体的に淡く柔らかい**。強い影を落とさず、色面と丸みで階層を作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは `"Noto Sans JP", sans-serif` の 1 行で十分（環境差を最小化）
- テキスト色は `#777777` を統一して使用し、純黒を避ける
- CTA はすべて pill（`border-radius: 80px` 以上）にして角を完全に取り除く
- カテゴリごとに**テーマ色を切り替える**（キャラクター=シアン、グッズ=ピンク、ムービー=紫、デジタル=黄、スポット=緑、ニュース=コーラル）
- 本文には `line-height: 1.8` / `letter-spacing: 0.12em` を入れて柔らかい空気感を作る
- 見出しの字間は 0.08〜0.12em 程度を維持

### Don't（禁止）

- 純黒（#000000）や濃グレー（#333333）をテキスト色に使わない（サンリオの世界観が硬くなる）
- CTA を角張った（radius < 12px）形にしない。pill が原則
- 強いドロップシャドウを使わない（柔らかさが消える）
- カテゴリ間でテーマ色を混ぜない（ユーザーが色でカテゴリを識別している）
- 本文の line-height を 1.5 未満にしない（読みづらく、サンリオの空気感が失われる）
- `font-feature-settings: "palt"` は適用しない（letter-spacing を直接指定する方針）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル（1〜2 カラム） |
| Tablet | 768–1023px | 2〜4 カラム |
| Desktop | ≥ 1024px | 4〜8 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px
- pill CTA はモバイルで横幅 100% に伸びる傾向

### フォントサイズの調整

- モバイルでは見出しを 1〜2px 縮小、本文は 14–15px を維持
- pill の radius は維持（pill 形状はモバイルでも残す）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Cyan: #8bd0dd  (--c-primary)
Primary Cyan Mid: #71c6d6 (--c-dial-primary)
Sanrio Pink: #e383a8 (--c-pagetheme-sub)
Sanrio+ Pink: #e83767
Category Colors: Cyan #8bd0dd / Pink #e383a8 / Purple #cda1dc / Yellow #f2d36b / Green #91dea9 / Coral #f08080
Text: #777777 (純黒は使わない)
Background: #ffffff
Surface (cyan light): #f0f9fa
Surface (pink light): #fdf5fa
Font: "Noto Sans JP", sans-serif
Body Size: 15px / Weight 400 / line-height 1.8 / letter-spacing 0.125em
Heading: 17–22px / Weight 700 / line-height 1.2 / letter-spacing 0.08–0.12em
Border Radius (CTA): 80–145px (pill)
Border Radius (Card): 20–24px
```

### プロンプト例

```
サンリオのデザインシステムに従って、キャラクター一覧ページを作成してください。
- 背景: #ffffff
- テキスト: #777777（純黒・濃グレーは使わない）
- フォント: "Noto Sans JP", sans-serif（1 行のみ）
- 本文 line-height: 1.8、letter-spacing: 0.125em で柔らかい空気感
- セクション見出しは 22.5px Bold、line-height 1.2、letter-spacing 0.08em
- カテゴリ別 CTA はテーマ色の pill（border-radius: 80px）
  - キャラクター=#8bd0dd、グッズ=#e383a8、ムービー=#cda1dc、デジタル=#f2d36b、スポット=#91dea9、ニュース=#f08080
- 「もっと見る」は白背景 outline pill（radius: 55px）、テキストはテーマ色
- カードは border-radius: 20px、シャドウは ごく薄く `0 2px 6px rgba(0,0,0,0.06)`
- 見出し下のサブテキストは小さく（11–12px Bold）、英字キャラクター名を併記
```
