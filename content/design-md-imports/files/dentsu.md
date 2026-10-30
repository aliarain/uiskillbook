# DESIGN.md — dentsu (電通)

> dentsu（https://www.dentsu.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく。CSS Custom Properties は未使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ニューモーフィズムを取り入れた、ソフトでモダンなコーポレートデザイン。柔らかいシャドウと丸みのあるカードで、温かみのある企業イメージを演出
- **密度**: ゆったりとした余白。ヒーローエリアは全幅ビジュアル、コンテンツは大きめのカードレイアウト
- **キーワード**: ニューモーフィック、ソフト、コーポレート、クリーン、信頼感
- **特徴**: 純白でなく `#f3f5f7` のライトグレーを背景に使い、ニューモーフィック（凸型・凹型）シャドウでカードやボタンに立体感を持たせている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- dentsu はブランドカラーとして特定の1色を前面に出すデザインではなく、黒とグレーのニュートラルトーンを基調とする

### Accent（カテゴリ別アクセント）

- **Blue** (`#009be0`): 日本の広告費アーカイブ
- **Red** (`#d83f30`): 世界の広告費
- **Navy** (`#254590`): 情報メディア白書
- **Green** (`#189f3b`): 媒体別広告量
- **Orange** (`#e4a334`): 広告景気年表

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text White** (`#ffffff`): ダーク背景上のテキスト
- **Background** (`#f3f5f7`): ページ背景（ニューモーフィズムのベース面）
- **Surface Light** (`#eaeaea`): カード下地、区切り
- **Surface Mid** (`#e9ecef`): セクション背景
- **Surface Dark** (`#313131`): GDPR バナー背景
- **Footer** (`#000000`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts / Web フォント）
- ヒラギノ角ゴ ProN（macOS フォールバック）
- ヒラギノ角ゴシック（macOS 新名称）
- メイリオ（Windows フォールバック）

### 3.2 欧文フォント

- **Roboto**: 見出し・セクションタイトルで和文より先に指定
- **Helvetica Neue**: 本文のフォールバック
- **Arial**: 追加フォールバック

### 3.3 font-family 指定

```css
/* 本文 */
font-family: "Noto Sans JP", "Helvetica Neue", arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, meiryo, sans-serif;

/* 見出し（Roboto 先頭で欧文優先） */
font-family: Roboto, "Noto Sans JP", "Helvetica Neue", arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, meiryo, sans-serif;
```

**フォールバックの考え方**:
- 本文は Noto Sans JP を最優先。欧文は Noto Sans JP 内蔵グリフを利用
- 見出しは Roboto を先頭に置き、英字タイトル（"News Releases" 等）のジオメトリック感を出す

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Roboto + Noto Sans JP | 60px | 700 | 1.4 | normal | メインビジュアルのキャッチ |
| Hero Lead | Noto Sans JP | 28px | 700 | 1.43 | normal | ビジュアル説明文 |
| Heading 2 | Roboto + Noto Sans JP | 45px | 700 | 1.4 | normal | セクション見出し |
| Heading 3 | Roboto + Noto Sans JP | 50px / 40px | 700 | 1.0 | normal | カード見出し |
| Section Title | Noto Sans JP | 26px | 700 | 1.75 | normal | セクション内見出し |
| Body | Noto Sans JP | 15px | 400 | 1.75 | normal | 本文 |
| Date | Roboto | 13px | 400 | 1.21 | normal | 日付表示 |
| Caption | Noto Sans JP | 13px | 400 | 1.75 | normal | GDPR テキスト等 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.75（15px → 26.25px）
- **見出しの行間**: 1.0〜1.4（見出しサイズにより変動）
- **本文の字間 (letter-spacing)**: normal（0）
- **見出しの字間**: normal（0）

**ガイドライン**:
- letter-spacing は全要素 `normal`。日本語の字間調整をしない設計
- font-feature-settings も `normal`。palt / kern は未使用

### 3.6 禁則処理・改行ルール

明示的な指定なし（ブラウザデフォルトに依存）

### 3.7 OpenType 機能

- font-feature-settings は全要素 `normal`
- palt / kern は未使用

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Outline Pill（ダーク背景用）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 5px 40px
- Border Radius: 60px
- Font Size: 16px
- Font Weight: 500

**Outline Pill（ライト背景用）**
- Background: `transparent`
- Text: `#000000`
- Border: 1px solid `#000000`
- Padding: 5px 40px
- Border Radius: 60px
- Font Size: 16px
- Font Weight: 500

**Neumorphic Pill（プライマリ CTA）**
- Background: `transparent`
- Text: `#000000`
- Border: none
- Padding: 5px 40px
- Border Radius: 60px
- Font Size: 16px
- Font Weight: 500
- Box Shadow: `rgb(255,255,255) -2px -2px 5px 0px, rgba(0,0,0,0.25) 10px 10px 20px 0px`

**GDPR 同意ボタン**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 10px 32px
- Border Radius: 4px
- Font Size: 16px
- Font Weight: 700

### Cards

**News Card（ニューモーフィック）**
- Background: transparent
- Border Radius: 30px
- Padding: 25px
- Box Shadow: `rgba(0,0,0,0.21) 9px 8px 10px 0px, rgb(255,255,255) 0px 0px 5px 0px, rgb(255,255,255) -4px 0px 5px 0px, rgb(255,255,255) -4px -6px 15px 0px`

**Horizontal Card**
- Background: transparent
- Border Radius: 30px
- Padding: 35px
- Box Shadow: 同上

**Data Card（広告資料）**
- Background: transparent
- Border Radius: 10px
- Padding: 0

### Inputs

明示的な input 要素の実測データなし

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 12px |
| S | 15px |
| M | 25px |
| L | 35px |
| XL | 50px |
| XXL | 144px |

### Container

- Max Width: コンテンツ幅は可変（レスポンシブ）
- Hero Padding: 0px 144px（左右大きめ）

### Grid

- News Cards: 4カラムグリッド
- Data Cards: 5カラムグリッド（広告資料セクション）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラット要素 |
| 1 (Neumorphic) | `rgba(0,0,0,0.21) 9px 8px 10px, #fff 0 0 5px, #fff -4px 0 5px, #fff -4px -6px 15px` | ニュースカード |
| 2 (CTA) | `#fff -2px -2px 5px, rgba(0,0,0,0.25) 10px 10px 20px` | ボタン |
| 3 (Overlay) | `rgba(0,0,0,0.75)` background | ヘッダーオーバーレイ |
| 4 (Carousel) | `rgba(0,0,0,0.44)` background | カルーセルナビゲーション |

---

## 7. Do's and Don'ts

### Do（推奨）

- ニューモーフィック（凸型）シャドウでカードに立体感を持たせる
- `#f3f5f7` のライトグレー背景をベースにする（ニューモーフィズムの前提）
- ボタンは pill 型（border-radius: 60px）のアウトラインスタイルを使う
- 見出しには Roboto を先頭にした欧文優先スタックを使う
- カードの角丸は 30px と大きめに設定する

### Don't（禁止）

- 純白 `#ffffff` をページ背景にしない（ニューモーフィック効果が出ない）
- ボタンにベタ塗り背景を使わない（アウトラインまたはニューモーフィック）
- letter-spacing を追加しない（全体で normal 統一）
- font-feature-settings: "palt" を使わない（未使用の設計）
- カードに1px border を使わない（シャドウで境界を表現する設計）

---

## 8. Responsive Behavior

### Breakpoints

実測データからの推定（明示的な CSS 変数なし）:

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1カラムレイアウト |
| Tablet | ≤ 1024px | 2カラムグリッド |
| Desktop | > 1024px | 4カラムグリッド |

### タッチターゲット

- Pill ボタン: 高さ約 32px + パディング

### フォントサイズの調整

- ヒーロー見出しは SP で縮小（60px → 推定 28〜32px）
- 本文は 15px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: なし（ニュートラルトーン基調）
Text Color: #000000
Background: #f3f5f7
Font Body: "Noto Sans JP", "Helvetica Neue", arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, meiryo, sans-serif
Font Heading: Roboto, "Noto Sans JP", "Helvetica Neue", arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, meiryo, sans-serif
Body Size: 15px
Line Height: 1.75
Button Style: pill (60px radius), outline or neumorphic shadow
Card Radius: 30px
```

### プロンプト例

```
dentsu のデザインシステムに従って、ニュースリリース一覧ページを作成してください。
- 背景色: #f3f5f7（ニューモーフィズムのベース）
- フォント: 見出しは Roboto + Noto Sans JP、本文は Noto Sans JP
- カード: border-radius 30px、ニューモーフィックシャドウ
- ボタン: pill 型（radius 60px）、アウトラインスタイル
- 行間: 本文は line-height: 1.75
```
