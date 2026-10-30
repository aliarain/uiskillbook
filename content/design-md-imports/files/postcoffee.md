# DESIGN.md — PostCoffee（ポストコーヒー）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 出典: https://postcoffee.co/（2026-07-01 取得）

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: クリーンで明るい、ポップで親しみやすい D2C スペシャルティコーヒー EC。白基調に鮮やかなブランドカラーを差し色として効かせる
- **密度**: 商品グリッド中心の EC 型。カード（商品）を等間隔に並べ、余白は詰めすぎず広すぎない実用的な密度
- **キーワード**: Clean White / Vivid Green Accent / Playful D2C / Product Grid / Diagnosis-driven
- **特徴**: ページ背景は純白 `#ffffff`、セクションの区切りに極薄グレー `#fafafa` / `#f5f5f7` を使う。ブランドの主役は鮮やかなグリーン `#4cc764`（「New」バッジ・診断導線）。レビュー星は温かみのあるイエロー `#ffc93f`、サブスク導線にはオレンジ `#ffa500` を使い、ポップで元気な印象を作る。上部の告知バーは鮮やかなブルー `#306fdc`。CTA・バッジはすべて丸い（radius 16px の角丸 or pill）。フォントは欧文優先の Helvetica Neue + ヒラギノ角ゴのシステムフォントスタック（Webフォント非依存で高速）

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Green** (`#4cc764`): メインのブランドアクセント。「New」バッジ、コーヒー診断の訴求、アクティブ状態、成功表現に使用。出現頻度が最も高いブランド色
- **Brand Green Dark** (`#3fae55`): グリーンのホバー・プレス時（実測値からの派生。原色をやや暗く）

### Accent（アクセントカラー）

- **Rating Yellow** (`#ffc93f`): レビュー評価の星（★4.5 等）、ハイライト。温かみのあるイエロー
- **Subscribe Orange** (`#ffa500`): サブスク導線 CTA（「今すぐ始める」）、HOW TO USE 系の強調。行動を促す暖色アクセント
- **Announce Blue** (`#306fdc`): ページ最上部の告知バー背景（「15:00までのご注文で当日発送！」等）
- **Sale Red** (`#e10112`): セール・在庫僅少などの強い注意喚起（minor accent）
- **Pop Pink** (`#ff3399`): 限定・キャンペーン用のポップな差し色（minor accent）

### Semantic（意味的な色）

- **Danger** (`#e10112`): エラー、削除、在庫警告
- **Warning** (`#ffa500`): 警告、注意喚起（暖色）
- **Success** (`#4cc764`): 成功、完了、有効（ブランドグリーンと共用）

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出しテキスト（PostCoffee は本文に純黒 `#000` を実際に使用している。EC のクリーンな印象を優先）
- **Text Dark** (`#1d1d1f`): 濃色バッジ・パネルの背景（「まもなく終売」バッジ等のダークチップ）
- **Text Muted** (`#777777`): 補足テキスト、ロースター名、価格の g 表記
- **Text Disabled** (`#dfdfdf`): 無効状態・レビュー無しラベル（NO REVIEWS）
- **Border** (`#efefef`): キーワードチップ・カードの枠線
- **Divider** (`#e2e2e2`): 区切り線
- **Background** (`#ffffff`): ページ背景（純白）
- **Surface Alt** (`#fafafa`): 商品カード・セクションの薄いグレー面（最も広く使われる面色）
- **Surface Alt 2** (`#f5f5f7`): 特集セクションの背景（やや濃いグレー）
- **Panel Dark** (`#1d1d1f`): ダークパネル・ダークチップの背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: `"ヒラギノ角ゴ ProN W3"`, `"Hiragino Sans"`, `"Hiragino Kaku Gothic ProN"`, `メイリオ`, `Meiryo`
- Web フォントは読み込まず、OS 標準の和文ゴシックにフォールバックする設計。macOS はヒラギノ、Windows はメイリオで表示される
- 明朝体は不使用

### 3.2 欧文フォント

- **サンセリフ**: `"Helvetica Neue"`, `Arial`（和文より先に指定＝欧文優先スタック）
- **等幅**: 明示指定なし（コード表示は想定されていない EC サイト）
- 一部の 404 系ボタンにのみ `Roboto`（Material UI 由来）が混在するが、主要導線には使われない

### 3.3 font-family 指定

```css
/* サイト全体（body から継承） */
font-family: "Helvetica Neue", Arial, "ヒラギノ角ゴ ProN W3", "Hiragino Sans",
  "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先スタック**: Helvetica Neue → Arial を先頭に置き、欧文グリフを Helvetica Neue で表示する
- 和文は「ヒラギノ角ゴ ProN W3」を先に指定し、macOS で W3（細め）ウェイトを優先。Windows では メイリオ
- generic family は `sans-serif`
- Webフォントに依存しないため表示が高速で、環境ごとにネイティブフォントで組まれる

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Heading | Helvetica/ヒラギノ | 58px | 700 | 1.5 | normal | ヒーロー大見出し（「コーヒーのサブスクで…」） |
| Section Heading | Helvetica/ヒラギノ | 40px | 700 | 1.5 | normal | セクション見出し（「新入荷」等） |
| Sub Heading | Helvetica/ヒラギノ | 26px | 700 | 1.5 | normal | サブ見出し（「たくさんのコーヒーに…」） |
| Lead / Modal Title | Helvetica/ヒラギノ | 20px | 700 | 1.5 | normal | モーダル見出し・強調文 |
| Product Name | Helvetica/ヒラギノ | 14px | 700 | 1.5 | normal | 商品名 |
| Price | Helvetica/ヒラギノ | 14px | 700 | 1.5 | normal | 価格（¥864 等） |
| Body | Helvetica/ヒラギノ | 13px | 400 | 1.5 | normal | 本文（body 既定） |
| Description | Helvetica/ヒラギノ | 14px | 400 | 2.0 | normal | 説明文（行間広め） |
| Announce Text | Helvetica/ヒラギノ | 12px | 500 | 1.5 | 0.1em | 告知バーのテキスト |
| Badge / CTA Label | Helvetica/ヒラギノ | 11px | 700 | normal | 0.145em | バッジ・小 CTA（「無料でコーヒー診断」「LOGIN」） |
| Keyword Chip | Helvetica/ヒラギノ | 14px | 700 | 1.5 | 0.1em | 検索キーワードチップ（「フルーティー」等） |
| Roaster Name | Helvetica/ヒラギノ | 10px | 400 | 1.2 | normal | ロースター名（英字・ミュート） |
| Caption | Helvetica/ヒラギノ | 11px | 300–500 | 1.5 | normal | 補足・価格 g 表記 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（body 既定 13px→19.5px）。説明文は 2.0（14px→28px）と広めに取る
- **見出しの行間**: 1.5（40px→60px、58px→87px、26px→39px。すべて 1.5 で統一）
- **本文の字間 (letter-spacing)**: normal（本文は字間を詰めない）
- **バッジ・CTA の字間**: 0.145em 前後（11px に 1.6px）。小さい英字ラベルを広げて読みやすく
- **チップ・告知の字間**: 0.1em（14px に 1.4px、12px に 1.2px）

**ガイドライン**:
- 見出しはすべて weight 700（太字）で、はっきりとした EC らしいメリハリを出す
- 本文は weight 400、価格・商品名・チップは weight 700
- 小さい英字ラベル（バッジ・CTA）には letter-spacing 0.1〜0.15em を付けて視認性を上げる
- 説明文だけ line-height 2.0 と広く取り、それ以外は 1.5 に統一

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt・kern は使用しない */
```

- PostCoffee は `palt`（プロポーショナル字詰め）を使用していない（全要素で `font-feature-settings: normal`）
- システムフォント（ヒラギノ/メイリオ）のデフォルト字送りで組む

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ダーク pill / 診断導線）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `10px 16px 9px`
- Border Radius: `16px`
- Font Size: 11px
- Font Weight: 700
- Letter Spacing: 0.145em
- Shadow: `0 0 5px rgba(0,0,0,0.1)`

**Brand CTA（グリーン）**
- Background: `#4cc764`
- Text: `#ffffff`
- Border Radius: `16px`（角丸）〜 pill
- Font Weight: 700
- 用途: ブランドを前面に出す主要導線（診断開始・登録）

**Subscribe CTA（オレンジ pill）**
- Background: `#ffa500`
- Text: `#ffffff`
- Border Radius: `100px`（pill）
- Font Weight: 700
- 用途: サブスク申込（「今すぐ始める」）

**Round Outline（白 pill / ボーダー）**
- Background: `#ffffff`（または `#000000`）
- Text: `#000000`（黒地なら `#ffffff`）
- Border: `1px solid #ffffff`（反転時）
- Padding: `1px 20px 0`
- Border Radius: `22px`（pill）
- Font Size: 14px
- Font Weight: 600
- 用途: 「すべてのブランドを見る」等

**Keyword Chip（検索キーワード）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #efefef`
- Padding: `3px 16px 2px`
- Border Radius: `16px`
- Font Size: 14px
- Font Weight: 700
- Letter Spacing: 0.1em
- 用途: 「フルーティー」「デカフェ」等のタグ

### Inputs

- Background: `#ffffff`
- Border: `1px solid #efefef`
- Border (focus): `1px solid #4cc764`（ブランドグリーン）
- Border (error): `1px solid #e10112`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font Size: 14px

### Cards

- Background: `#fafafa`（商品カードの薄グレー面。白背景から浮かせる）
- Border: なし（薄グレー面で区別）／必要時 `1px solid #efefef`
- Border Radius: `8px`
- Padding: `16px`
- Shadow: `0 0 5px rgba(0,0,0,0.1)`（軽く浮かせる場合）

### Badges

**New Badge（ブランドグリーン）**
- Background: `#4cc764`
- Text: `#ffffff`
- Border Radius: `4px`（or pill）
- Font Size: 10–11px
- Font Weight: 700

**Rating Badge（イエロー）**
- Background: `#ffc93f`
- Text: `#000000`（or `#ffffff`）
- 用途: ★4.5 等の評価表示

**Dark Chip（終売・限定）**
- Background: `#1d1d1f`
- Text: `#ffffff`
- Border Radius: `4px`
- Font Size: 10–11px
- Font Weight: 700
- 用途: 「まもなく終売」等

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 1200px
- Padding (horizontal): 16px（モバイル）〜 24px（デスクトップ）

### Grid

- 商品グリッド: 4カラム（デスクトップ）、2〜3カラム（タブレット）、2カラム（モバイル）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素、バッジ、チップ |
| 1 | `0 0 5px rgba(0,0,0,0.1)` | CTA ボタン、スライダー矢印、軽く浮かせるカード |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ホバー時のカード、ドロップダウン |
| 3 | `0 8px 24px rgba(0,0,0,0.16)` | モーダル、フローティング要素 |

- PostCoffee の影は控えめ。基本は `0 0 5px rgba(0,0,0,0.1)`（ぼかし 5px の淡い全方向シャドウ）を CTA・矢印に使う

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景には純白 `#ffffff` を使い、セクション区切り・カード面に `#fafafa` / `#f5f5f7` を使う
- ブランドアクセントは鮮やかなグリーン `#4cc764` を主役にする（New バッジ・診断導線・成功表現）
- レビュー星はイエロー `#ffc93f`、サブスク導線はオレンジ `#ffa500` の pill を使う
- CTA・バッジ・チップはすべて丸い形状にする（radius 16px の角丸、または 100px の pill）
- 見出しは weight 700 で太くはっきりと。商品名・価格・チップも 700
- 小さい英字ラベル（バッジ・CTA）には letter-spacing 0.1〜0.15em を付ける
- フォントは欧文優先の `"Helvetica Neue", Arial, "ヒラギノ角ゴ ProN W3", ...` スタックを使う（Webフォント非依存）

### Don't（禁止）

- ブランドグリーンとオレンジ・イエローの役割を入れ替えない（緑＝ブランド/New、黄＝評価、橙＝サブスク）
- CTA を角ばった四角にしない（丸み radius 16px 以上 or pill が必須）
- 見出しに weight 400 を使わない（EC のメリハリが失われる）
- `palt` / `kern` を font-feature-settings に設定しない（システムフォントの既定字送りで組む）
- Webフォントを重く読み込まない（表示速度優先の設計思想を守る）
- 告知バーのブルー `#306fdc` を本文リンク色として乱用しない（最上部の帯専用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（商品2カラム） |
| Tablet | <= 1023px | タブレットレイアウト（商品3カラム） |
| Desktop | > 1024px | デスクトップレイアウト（商品4カラム） |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- CTA ボタンは十分な padding（10px 16px 以上）を確保

### フォントサイズの調整

- Hero Heading: デスクトップ 58px → モバイル 32px 程度に縮小
- Section Heading: デスクトップ 40px → モバイル 24px 程度に縮小
- 本文は 13〜14px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #4cc764  (Brand Green)
Rating Yellow: #ffc93f
Subscribe Orange: #ffa500
Announce Blue: #306fdc
Text Color: #000000
Text Muted: #777777
Background: #ffffff
Surface Alt: #fafafa
Border: #efefef
Font: "Helvetica Neue", Arial, "ヒラギノ角ゴ ProN W3", "Hiragino Sans",
  "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
Body Size: 13px
Line Height: 1.5 (説明文は 2.0)
Heading Weight: 700
CTA Shape: rounded 16px / pill 100px
```

### プロンプト例

```
PostCoffee のデザインシステムに従って、コーヒー商品一覧ページを作成してください。
- 背景色: #ffffff（純白）、カード面は #fafafa
- ブランドアクセント: #4cc764（New バッジ・診断 CTA）
- 商品カード: radius 8px、New バッジは #4cc764 白文字、評価星は #ffc93f
- サブスク CTA: #ffa500 の pill（radius 100px）、白文字、weight 700
- 見出し: weight 700、line-height 1.5
- 本文: 13〜14px、weight 400、line-height 1.5
- キーワードチップ: 白地 + 1px solid #efefef、radius 16px、weight 700
- フォント: 上記 Helvetica Neue + ヒラギノ角ゴのシステムスタック
```
