# DESIGN.md — Komeda (コメダ珈琲店)

> コメダ珈琲店（https://www.komeda.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。システムフォントのみ使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かく親しみやすい、街の喫茶店を感じさせるデザイン。ブランドオレンジを効かせつつ、落ち着いた白ベースのレイアウトで情報を整理。サイドバーナビゲーションが特徴的
- **密度**: 適度な余白。メニューや店舗情報を見やすく配置し、カフェらしいゆったり感を演出
- **キーワード**: 温かい、親しみやすい、くつろぎ、街の喫茶店、ホスピタリティ
- **特徴**: 純粋な黒 (`#000000`) ではなく `#333333` のソフトブラックを使用。`letter-spacing: 0.8px` をほぼ全要素にグローバル適用し、ゆったりとした文字間で読みやすさと温もりを演出

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Orange** (`#e95513`): メインのブランドカラー。ロゴ、リンク、CTA テキスト、アクセントに使用

### Accent（アクセント）

- **Deep Red** (`#990d0d`): ダークアクセント。フッターや特別セクションの背景に使用
- **Warm Beige** (`#efe8e4`): セクション背景。温もりのあるベージュ
- **Light Blue** (`#e4edfc`): セクション背景。清涼感のあるライトブルー
- **Light Green** (`#d2eae1`): セクション背景。フレッシュなライトグリーン

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト（ソフトブラック）
- **Text Secondary** (`#666666`): ナビゲーションサブ項目、補足テキスト
- **Text Muted** (`#999999`): ラベル、ブランド補足テキスト
- **Text Date** (`#aaaaaa`): タイムスタンプ、日付表示
- **Background** (`#fafafa`): ページ背景（温かみのあるオフホワイト）
- **Surface** (`#ffffff`): カード、CTA ボタン背景
- **Border** (`#e0e0e0`): 区切り線

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ ProN（macOS）
- メイリオ（Windows）

### 3.2 欧文フォント

- **サンセリフ**: Arial
- **等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 全体 */
font-family: Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Arial）を先に指定し、数字やアルファベットの表示品質を優先
- macOS の和文フォント（ヒラギノ角ゴ ProN）→ Windows の和文フォント（メイリオ）の順
- Web フォントは使用せず、システムフォントのみで構成。軽量で表示速度が速い
- フォントスタックが非常にシンプルで、環境差異が少ない

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Logo (a) | 32px | 700 | — | 0.8px (0.025em) | サイトロゴ。ブランドオレンジ |
| Heading 1 (h1) | 32px | 700 | 48px (×1.5) | 0.8px (0.025em) | ページタイトル |
| Heading 2 (h2) | 24px | 700 | 36px (×1.5) | 0.8px (0.033em) | セクション見出し |
| Body (p) | 16px | 400 | 24px (×1.5) | 0.8px (0.05em) | 本文テキスト |
| Body Bold (p) | 16px | 700 | 24px (×1.5) | 0.8px (0.05em) | ニュースタイトル等 |
| Small (p) | 14px | 700 | 21px (×1.5) | 0.8px (0.057em) | ラベル、小見出し |
| Caption (p) | 13px | 700 | 32px (×2.46) | 0.8px (0.062em) | ブランドラベル |
| Nav Link (a) | 16px | 700 | 24px (×1.5) | 0.8px (0.05em) | ナビゲーション項目 |
| Nav Sub (a) | 13px | 700 | 19.5px (×1.5) | 0.8px (0.062em) | サブナビゲーション |
| Breadcrumb (a) | 13px | 400 | 19.5px (×1.5) | 0.8px (0.062em) | パンくずリスト。オレンジ |
| Footer (span) | 14px | 700/400 | 21px (×1.5) | 0.8px (0.057em) | フッターテキスト |
| Input | 16px | 400 | 40px (×2.5) | normal | 入力欄 |
| Menu Category (p) | 16px | 400 | 40px (×2.5) | 0.8px (0.05em) | メニューカテゴリ。白文字 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body: `24px` (16px × 1.5)
- h1: `48px` (32px × 1.5)
- h2: `36px` (24px × 1.5)
- メニューカテゴリ / input: `40px` (16px × 2.5) — タッチターゲット確保
- キャプション: `32px` (13px × 2.46) — ラベル用

**字間 (letter-spacing)** — 実測値:
- **グローバル `0.8px`**: ほぼ全要素に `letter-spacing: 0.8px` が適用されている
- input のみ `normal`（ユーザー入力は字間を広げない）

**ガイドライン**:
- `letter-spacing: 0.8px` は**グローバル適用**。見出し・本文・ナビ・フッターすべてに統一
- note のように見出し専用ではなく、コメダはサイト全体で一貫した字間を使用
- この統一された字間が、ゆったりとした喫茶店の雰囲気を文字組みで表現している
- input 要素のみ `letter-spacing: normal` で、入力時の可読性を優先

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
-webkit-font-smoothing: antialiased;
```

- `word-wrap: break-word` で長い URL や英単語の折り返しに対応

### 3.7 OpenType 機能

```css
/* 明示的な設定なし */
font-feature-settings: normal;
```

- `palt` は適用されていない。`letter-spacing: 0.8px` のグローバル適用で字間を確保しており、プロポーショナル字詰めは不要
- シンプルなシステムフォント構成のため、高度な OpenType 機能は使用していない

### 3.8 縦書き

- 該当なし。コメダ珈琲店のサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**CTA Primary（"一覧へ" 等）**
- Background: `#ffffff`
- Text: `#e95513`（ブランドオレンジ）
- Padding: 8px 24px
- Border Radius: 24px（pill 形状）
- Font Size: 16px
- Font Weight: 700

**CTA Secondary（"店舗を選んで調べる" 等）**
- Background: `#ffffff`
- Text: `#333333`
- Padding: 8px 24px
- Border Radius: 30px（pill 形状）
- Font Size: 16px
- Font Weight: 700

**CTA Ghost（"近くの店舗を表示" 等）**
- Background: `transparent`
- Text: `#e95513`（ブランドオレンジ）
- Padding: 8px 24px
- Border Radius: 20px
- Font Size: 16px
- Font Weight: 700

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e0e0e0`
- Border Radius: 0px
- Padding: 8px 12px
- Font Size: 16px
- Line Height: 40px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e0e0e0`
- Border Radius: 8px
- Padding: 24px
- Shadow: `0 2px 4px rgba(0,0,0,0.08)`

### Navigation（サイドバー）

- Background: `#ffffff`
- Width: 280px（サイドバー固定幅）
- ロゴ色: `#e95513`（ブランドオレンジ）
- リンク色: `#333333`（通常）/ `#e95513`（ホバー・アクティブ）
- サブリンク色: `#666666`

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
| XXXL | 64px |

### Container

- Max Width: 1200px
- Padding (horizontal): 32px

### Grid

- サイドバーナビゲーション + メインコンテンツの2カラム構成
- サイドバー: 280px 固定
- メインコンテンツ: 残り幅

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素 |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | カード、コンテンツブロック |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ホバー状態、ドロップダウン |
| 3 | `0 8px 24px rgba(0,0,0,0.16)` | モーダル、ポップアップ |

- フラットデザイン寄り。影は控えめに使用
- カード要素は薄いボーダー + 軽い影で浮かせる
- 全体的に温かく柔らかい印象を維持するため、影は透明度を高めに設定

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#333333`（ソフトブラック）を使い、純粋な `#000000` を避ける（温かみのある読書体験）
- `letter-spacing: 0.8px` をグローバルに適用する（コメダの文字組みの特徴）
- ブランドオレンジ `#e95513` はリンクや CTA テキストに使い、目を引くアクセントにする
- CTA ボタンは pill 形状（border-radius: 20px 以上）にする
- セクション背景にはベージュ `#efe8e4`、ライトブルー `#e4edfc`、ライトグリーン `#d2eae1` を使い、温かみのあるバリエーションを出す
- ページ背景は `#fafafa`（オフホワイト）を使い、純白 `#ffffff` との差をつける
- システムフォントのみで構成する（Web フォント不要）
- サイドバーナビゲーションのパターンを維持する

### Don't（禁止）

- 純粋な `#000000` をテキストに使わない（コントラストが強すぎて喫茶店の雰囲気を壊す）
- ブランドオレンジ `#e95513` を大面積の背景に使わない（小さなアクセントとして使う）
- `letter-spacing` を `normal` にリセットしない（input 要素を除く）
- `palt` を適用しない（コメダは `letter-spacing: 0.8px` のグローバル適用で統一）
- 角ばった CTA ボタン（border-radius: 0）を使わない（pill 形状が特徴）
- 冷たい色（濃いブルーやグレー）をメインに使わない（温かみを損なう）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。サイドバー非表示 |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | サイドバー + メインコンテンツの2カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px
- メニューカテゴリの line-height: 40px はタッチ操作を考慮

### フォントサイズの調整

- モバイルでは h1 を 24px、h2 を 20px に縮小
- 本文 16px は変更なし

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #e95513（ブランドオレンジ — リンク・CTA・ロゴ）
Deep Red: #990d0d（ダークアクセント）
Text Primary: #333333（ソフトブラック）
Text Secondary: #666666
Text Muted: #999999
Background: #fafafa（オフホワイト）
Surface: #ffffff
Warm Beige: #efe8e4（セクション背景）
Light Blue: #e4edfc（セクション背景）
Light Green: #d2eae1（セクション背景）

Font: Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Body Size: 16px / line-height: 1.5 / letter-spacing: 0.8px
Heading: weight 700 / letter-spacing: 0.8px / palt: なし
CTA: pill 形状（border-radius: 20-30px）
```

### プロンプト例

```
コメダ珈琲店のデザインに従って、メニュー一覧ページを作成してください。
- フォント: Arial, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
- テキスト色: #333333（純粋な黒は使わない）
- リンク色: #e95513（ブランドオレンジ）
- 背景: #fafafa、セクション背景: #efe8e4
- 全要素に letter-spacing: 0.8px を適用
- CTA ボタン: 白背景にオレンジテキスト、pill 形状（radius 24px）
- カード: 白背景、8px 角丸、軽い影
- サイドバーナビゲーション + メインコンテンツの2カラム構成
```
