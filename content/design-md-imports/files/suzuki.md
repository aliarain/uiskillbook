# DESIGN.md — SUZUKI (スズキ)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 対象: https://www.suzuki.co.jp/ および https://www.suzuki.co.jp/car/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 堅実・信頼・機能的。日本のモノづくり企業としての誠実さを、余計な装飾を省いたクリーンなレイアウトで表現。コーポレートサイトと四輪サイトで微妙にトーンが異なるが、Noto Sans JP / ホワイトベースの統一感がある
- **密度**: 情報密度が高いポータル型。ニュースリリース、車種ラインアップ、販売店検索など多数の導線を1ページに集約
- **キーワード**: 堅実、信頼、機能的、情報整理、自動車メーカー

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Suzuki Blue** (`#09348b`): マイページリンク、ブランドアクセント。深い紺で信頼感を表現
- **Suzuki Dark Navy** (`#002b80`): Swiper ページネーション active、タブ active 状態。ラインアップのカテゴリタブに使用
- **CTA Blue** (`#166af1`): 検索ボタン、主要CTA。鮮やかなブルーで視線を誘導

### Category（カテゴリカラー）

- **Corporate Navy** (`#314059`): コーポレートセクション背景。企業情報・歴史館エリアに使用
- **四輪 Green** (`#25b578`): 四輪車カテゴリバッジ。ニュースリリースのカテゴリアイコン
- **総合 Gray** (`#4e5452`): 総合カテゴリバッジ
- **TVCM Blue** (`#0068b6`): 四輪サイトの TVCM セクション背景
- **Campaign Green** (`#329f5b`): 四輪サイトのキャンペーンセクション背景

### Semantic（意味的な色）

- **Danger / Alert** (`#d65e57`): エラー、警告表示（コーポレートサイトの背景色として検出）

### Neutral（ニュートラル）

- **Text Primary** (`#0d0d0d`): コーポレートサイトの見出しテキスト
- **Text Body** (`#212529`): 四輪サイトの本文テキスト（Bootstrap デフォルト準拠）
- **Text Secondary** (`#5c5c5c`): 補足テキスト、ニュースリリース本文
- **Text Muted** (`#707070`): ボタンテキスト、フッターリンク
- **Text Tertiary** (`#808080`): コーポレートサイトのブログ本文
- **Text Sub** (`#666666`): 四輪サイトのリンクテキスト
- **Text H3** (`#4d4d4d`): 四輪サイトの H3 見出し
- **Border Default** (`#dddddd`): 入力フィールドの枠線
- **Border Medium** (`#707070`): ボタンの枠線、四輪サイトのフォーム枠
- **Border Light** (`#b3b3b3`): GLOBAL ボタンの枠線
- **Border Card** (`#d9d9d9`): 四輪サイトのカードボーダー
- **Background** (`#ffffff`): ページ背景（両サイト共通）
- **Surface Light** (`#f7f7f7`): コーポレートサイトのカテゴリナビ背景
- **Surface Gray** (`#f2f2f2`): 四輪サイトのセクション背景、タブ非活性背景
- **Footer Border** (`#f0f0f0`): フッターナビの区切り線
- **Footer Sub** (`#d5d5d5`): フッター最下部の区切り線

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: Noto Sans JP（コーポレートサイト） / Noto Sans Japanese（四輪サイト）
- 明朝体の使用なし

### 3.2 欧文フォント

- 和文フォント（Noto Sans JP / Noto Sans Japanese）の欧文グリフをそのまま使用
- 別途の欧文フォント指定なし

### 3.3 font-family 指定

```css
/* コーポレートサイト (suzuki.co.jp) */
font-family: "Noto Sans JP", sans-serif;

/* 四輪サイト (suzuki.co.jp/car/) */
font-family: "Noto Sans Japanese", sans-serif;
```

**フォールバックの考え方**:
- 両サイトとも Noto Sans 系 + generic sans-serif のみのシンプルな構成
- "Noto Sans JP" と "Noto Sans Japanese" は同一フォントの別名（Google Fonts 世代違い）
- フォールバックに游ゴシックやヒラギノを含まない、Webフォント前提の設計

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 2 (corp) | Noto Sans JP | 34px | 500 | 1.0 | normal | コーポレートサイトのセクション見出し |
| Heading 2 (car) | Noto Sans Japanese | 36px | 700 | 1.2 | 0.08em | 四輪サイトのセクション見出し |
| Heading 3 | Noto Sans Japanese | 23–24px | 700 | 1.2 | normal | サブセクション見出し |
| Heading 4 | Noto Sans Japanese | 20px | 700 | 1.2 | normal | 小見出し |
| Body (corp) | Noto Sans JP | 16px | 400 | 1.5 | normal | コーポレートサイト本文 |
| Body (car) | Noto Sans Japanese | 16px | 400 | 1.5 | normal | 四輪サイト本文 |
| Nav | Noto Sans Japanese | 15px | 600 | 1.4 | normal | PC ナビゲーション |
| Sub Nav | Noto Sans JP | 12px | 400 | 1.5 | normal | コーポレートサイト上部ナビ |
| Caption | Noto Sans JP | 12px | 400–700 | 1.5 | normal | カテゴリバッジ、日付 |
| Small / Sub | Noto Sans Japanese | 11px | 400 | 1.3 | normal | 四輪トップへ戻る等のサブリンク |
| Car Name | Noto Sans Japanese | 16px | 700 | 1.3 | normal | 車種名（ラインアップ） |
| Price | Noto Sans Japanese | 14px | 400 | 1.3 | normal | 価格表示 |
| Blog Title | Noto Sans JP | 16px | 700 | 1.4 | normal | コーポレートブログ見出し |
| Copyright | Noto Sans JP | 9px | 400 | 4.4 | normal | フッターコピーライト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（16px / 24px）。コーポレート・四輪の両サイトで統一
- **見出しの行間**: 1.0〜1.2。コーポレートサイトの H2 は 1.0（タイトな詰め）、四輪サイトの H2 は 1.2
- **本文の字間 (letter-spacing)**: normal（明示的な字間設定なし）
- **見出しの字間**: 四輪サイトの H2 のみ `0.08em`（2.88px / 36px）。ゆったりとした見出し感を演出
- **ボタンテキストの字間**: `-0.04em`（四輪サイトの "購入をお考えの方" 等、-0.64px / 16px）。CTAの視認性向上

**ガイドライン**:
- 日本語本文の行間 1.5 は標準的な値。広めの行間は使わない堅実な設計
- 見出しの字間は四輪サイトの H2（セクションタイトル）のみに適用。本文やその他の見出しには字間設定なし

### 3.6 禁則処理・改行ルール

```css
/* 検出された設定 — 特段の指定なし、ブラウザデフォルトに依存 */
word-wrap: break-word;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* 全体 — palt / kern の明示的な適用なし */
```

- **palt**: 適用なし。見出し・本文ともにプロポーショナル字詰めは使用していない
- **kern**: 適用なし。Noto Sans JP のデフォルトカーニングに依存

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary Search（検索ボタン）**
- Background: `#166af1`
- Text: `#ffffff`
- Padding: 5px 5px（コーポレート）/ 5px 5px（四輪）
- Border Radius: 0 5px 5px 0（検索バーと一体型、右側のみ角丸）
- Font Size: 12px（コーポレート）/ 16px（四輪）
- Font Weight: 700

**Secondary Outline（販売店検索等）**
- Background: `#ffffff`
- Text: `#707070`
- Border: 1px solid `#707070`
- Padding: 10px 0
- Border Radius: 5px
- Font Size: 12px
- Font Weight: 700

**Renewal Button（おすすめコンテンツ等）**
- Background: `#ffffff`
- Text: `#707070`
- Border: 1px solid `#707070`
- Padding: 10px 0
- Border Radius: 0px
- Font Size: 18px
- Font Weight: 700

**Tab Active（カテゴリタブ）**
- Background: `#ffffff`
- Text: `#002b80`
- Padding: 10px 8px
- Font Size: 18px
- Font Weight: 700

**Tab Inactive**
- Background: `#f2f2f2`
- Text: `#555555`
- Padding: 10px 8px
- Font Size: 18px
- Font Weight: 700

**GLOBAL ボタン**
- Background: transparent
- Text: `#191919`
- Border: 1px solid `#a3a3a3`
- Padding: 0 15px 0 38px
- Border Radius: 5px
- Font Size: 12px
- Font Weight: 400

**My Page リンク**
- Background: `#ffffff`
- Text: `#09348b`（Suzuki Blue）
- Font Size: 16px
- Font Weight: 600

### Category Badges（ニュースカテゴリ）

**四輪バッジ**
- Background: `#25b578`
- Text: `#ffffff`
- Padding: 2px 0 4px
- Font Size: 12px
- Font Weight: 700

**総合バッジ**
- Background: `#4e5452`
- Text: `#ffffff`
- Padding: 2px 0 4px
- Font Size: 12px
- Font Weight: 700

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#dddddd`（コーポレート）/ 1px solid `#707070`（四輪）
- Border Radius: 5px 0 0 5px（検索バーと一体型、左側のみ角丸）/ 5px（単独フォーム）
- Padding: 5px（コーポレート）/ 8px（四輪）/ 8px 16px（フォーム）
- Font Size: 10px（コーポレート検索）/ 16px（四輪サイト）
- Height: auto
- Placeholder Color: `#939393`

### Cards

**コンテンツカード（四輪サイト）**
- Background: `#ffffff`
- Border: 1px solid `#d9d9d9`
- Border Radius: 0px
- Padding: 0px
- Shadow: none（ホバー時も影なし）

**ブログカード（コーポレートサイト）**
- Background: transparent
- Border: 1px solid `#b3b3b3`
- Border Radius: 0px
- Padding: 0px

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 5px |
| S | 10px |
| M | 15px |
| L | 20px |
| XL | 45px |
| XXL | 55px |

### Container

- Max Width: 1440px（推定。コーポレートサイト）
- Padding (horizontal): 10px（コーポレートヘッダー）/ 15px（四輪ナビ）

### Grid

- Columns: 可変（車種ラインアップはフレックスボックス型のグリッド）
- Gutter: 0px（カード間はボーダーで区切り）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素。フラットデザインが基本 |

スズキのサイトはシャドウをほとんど使わないフラットなデザイン。カード・ボタン・ナビゲーションすべてボーダーによる区切りで、elevation の階層がない。Swiper の `--swiper-theme-color: #007aff` はライブラリデフォルト。

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは `"Noto Sans JP", sans-serif` のシンプルなフォールバックチェーンを使う
- 日本語本文の line-height は 1.5 を維持する
- ボタンは角丸 `5px` で統一する（pill ではない）
- カテゴリバッジには対応する色（四輪 = `#25b578`、総合 = `#4e5452`）を使う
- 見出し（H2）の letter-spacing はセクションタイトルにのみ `0.08em` を適用する
- CTA の青 `#166af1` はアクション性の高いボタン（検索等）にのみ使う
- タブの active 状態には `#002b80` を使い、inactive は `#555555` / `#f2f2f2` 背景にする

### Don't（禁止）

- `font-family` に游ゴシックやヒラギノを入れない（Noto Sans 系のみ）
- 本文に `letter-spacing` を設定しない（normal を維持）
- ボタンに box-shadow を使わない（フラットデザイン）
- `palt` を使わない（サイト全体で font-feature-settings: normal）
- カテゴリバッジを pill 型（border-radius: 9999px）にしない（角丸 0px の矩形バッジ）
- ページ背景に色を付けない（白ベースを維持）
- テキストの色に純粋な `#000000` を多用しない（`#0d0d0d` または `#212529` を使う）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ハンバーガーメニュー表示 |
| Desktop | > 767px | デスクトップレイアウト。PC ナビゲーション表示 |

### タッチターゲット

- 最小サイズ: ハンバーガーメニュー、検索ボタン等は十分なタップ領域を確保
- Swiper ナビゲーションサイズ: 44px（`--swiper-navigation-size`）

### フォントサイズの調整

- モバイルでの見出し縮小は確認できず。四輪サイトはレスポンシブ時にハンバーガーメニューに切り替え
- モバイルナビ: 15px / 700 / `#707070`（SP 用ドロワーメニュー）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #002b80 (Dark Navy) / #166af1 (CTA Blue)
Brand Color: #09348b (Suzuki Blue)
Text Color: #0d0d0d (corp) / #212529 (car)
Text Secondary: #5c5c5c
Background: #ffffff
Font (corp): "Noto Sans JP", sans-serif
Font (car): "Noto Sans Japanese", sans-serif
Body Size: 16px
Line Height: 1.5
Letter Spacing: normal
Heading Letter Spacing: 0.08em (H2 only)
Button Radius: 5px
palt: off
```

### プロンプト例

```
スズキのデザインシステムに従って、車種ラインアップ一覧ページを作成してください。
- プライマリカラー: #002b80
- CTA ボタン: bg #166af1, 白文字, radius 5px
- フォント: "Noto Sans JP", sans-serif
- 行間: 本文は line-height: 1.5
- 見出し (H2): 36px / 700 / letter-spacing: 0.08em
- カードボーダー: 1px solid #d9d9d9
- タブ active: text #002b80 on white / inactive: text #555 on #f2f2f2
- カテゴリバッジ: 四輪 #25b578 / 総合 #4e5452, 白文字, 12px, 700
- ボタンスタイル: outline, border 1px solid #707070, text #707070, radius 5px
```
