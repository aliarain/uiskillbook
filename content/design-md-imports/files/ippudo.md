# DESIGN.md — 一風堂（IPPUDO）

> 一風堂（https://www.ippudo.com/）のデザイン仕様書。
> 1985年創業の博多発豚骨ラーメン専門店。世界15カ国以上に展開する日本を代表するラーメンブランド。
> 実サイトの computed style 実測（2026-05-24 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **一風堂レッド `#cf000d`** をヘッダー帯に大胆に使い、コンテンツ領域は白基調でクリーンに保つ。欧文は Montserrat、和文は Noto Sans JP の2書体構成で、モダンなラーメン店の世界観を演出
- **密度**: コンテンツセクションはゆったりとした余白。ニュースやメニュー紹介はカード型レイアウトで情報を整理
- **キーワード**: ブランドレッド、モダン和食、Montserrat × Noto Sans JP、クリーンレイアウト、グローバル展開
- **特徴**:
  - **ブランドカラーはビビッドレッド `#cf000d`**。ヘッダー背景・ナビゲーション帯に使用し、強い視覚的アイデンティティを形成
  - 欧文見出しに **Montserrat**（weight 400）、和文には **Noto Sans JP**（weight 400 / 600）を使用
  - 英語セクションラベル（NEWS, MENU, STORE 等）は Montserrat で `letter-spacing: 0.2em` と広めに取り、欧文の優雅さを出す
  - CSS Custom Properties にフォント名がハッシュ付きで大量に登録されている（A1ゴシック、Zen Old Mincho、Oswald 等）が、トップページでの実際の使用は Montserrat + Noto Sans JP が中心
  - ニュースカルーセルのナビゲーションボタンは円形（`border-radius: 50%`）
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **IPPUDO Red** (`#cf000d`): メインのブランドカラー。ヘッダー背景、ナビゲーション帯に使用。uniqueBackgrounds で 24 要素が使用
- **Beige / Warm** (`#f5f0e3`): ブランドのウォームニュートラル面（CSS変数 `--s-color-6ca3f167`）

### CTA / Buttons

- **Navigation Link**: 背景 `#cf000d`（ヘッダー帯） / テキスト `#333333` / radius なし
- **Carousel Arrow**: 背景 `#ffffff` / テキスト `#333333` / radius `50%`（円形）
- **Search / Category**: 背景 `#eeeeee` / テキスト `#333333` / radius なし

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Text Primary | `#333333` | 本文・見出しテキスト |
| White | `#ffffff` | ページ背景・カード面 |
| Light Gray | `#f3f3f3` | セクション背景（CSS変数 `--s-color-5a907a5d`） |
| Gray | `#eeeeee` | カテゴリボタン背景 |
| Muted Gray | `#e8e7e3` | 区切り線・フッター背景 |
| Border Overlay | `rgba(51, 51, 51, 0.1)` | 半透明ボーダー |

### Semantic（実測未確認・推奨値）

- **Danger**: `#dc2626`
- **Success**: `#16a34a`
- **Warning**: `#d97706`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を本文・見出し・ナビゲーションで使用
- **明朝体**: CSS変数に Zen Old Mincho、凸版文久見出し明朝等が登録されているが、トップページでの実使用は確認できず

### 3.2 欧文フォント

- **サンセリフ**: **Montserrat**（見出し・セクションラベル・英語テキスト）
- **その他**: CSS変数に Oswald, Open Sans, Raleway, DIN Next, Roboto, Lato, Gilda Display 等が登録（特定ページ用と思われる）

### 3.3 font-family 指定

```css
/* 和文本文・ナビ */
font-family: "Noto Sans JP", sans-serif;

/* 欧文見出し・セクションラベル */
font-family: Montserrat, sans-serif;

/* body リセット */
font-family: sans-serif;
```

**フォールバックの考え方**:
- 和文は Noto Sans JP を Google Fonts で読み込み、フォールバックは sans-serif のみのシンプル構成
- 欧文セクションラベル（NEWS, MENU 等）は Montserrat 単独指定
- body のデフォルトは `sans-serif`（ブラウザの既定）で、各要素で上書き

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Label (EN) | Montserrat | 24px | 400 | 1.4 | 0.2em | NEWS, MENU 等 |
| Section Title (EN) | Montserrat | 20px | 400 | 1.4 | normal | 店舗検索等 |
| Body (JP) | Noto Sans JP | 14px | 600 | 1.8 | normal | ニュースタイトル等 |
| Body (JP) | Noto Sans JP | 14px | 400 | 1.0 | normal | 日付表示 |
| Nav Label (JP) | Noto Sans JP | 12px | 400 | 1.4 | 0.1em | ヘッダーナビ和文 |
| CTA Text (EN) | Montserrat | 14px | 400 | 1.4 | 0.2em | VIEW MORE 等 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（ニュース本文 25.2px / 14px）
- **見出しの行間**: 1.4（Montserrat 見出し 28px / 20px）
- **本文の字間 (letter-spacing)**: normal（和文本文）
- **英語ラベルの字間**: 0.2em（Montserrat セクションラベル: 4.8px / 24px）
- **和文ナビの字間**: 0.1em（12px テキスト: 1.2px / 12px）

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt`・`kern` ともに明示的な使用なし
- Noto Sans JP は元々字間が整っているため、追加のプロポーショナル字詰めは不要と判断されている模様

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Navigation Link（ヘッダー帯内）**
- Background: `#cf000d`（帯の背景色）
- Text: `#333333`
- Padding: 0px
- Border Radius: 0px
- Font: Noto Sans JP 12px / Montserrat 12px
- Letter Spacing: 0.1em（和文ラベル）

**Carousel Arrow（丸ボタン）**
- Background: `#ffffff`
- Text: `#333333`
- Border Radius: 50%
- Icon: Material Icons `keyboard_arrow_left` / `keyboard_arrow_right`

**Category / Search Button**
- Background: `#eeeeee`
- Text: `#333333`
- Border Radius: 0px
- Padding: 適宜

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: 0px
- Shadow: なし（フラットデザイン）

### Inputs

- 実測データなし（トップページにフォームなし）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 32px |
| XL | 48px |
| XXL | 64px |

### Container

- Max Width: 1440px（推定）
- Padding (horizontal): 0px（フルブリード）

### Grid

- フルブリードのスライダー + カード型グリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード、ボタン — フラットデザインが基本 |

一風堂のサイトはシャドウをほぼ使用せず、色面とコンテンツで階層を表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドレッド `#cf000d` はヘッダー帯やアイコン的な使い方に限定する（面積を広げすぎない）
- 英語セクションラベルは Montserrat で letter-spacing: 0.2em を保つ
- 和文と英文のフォントを明確に使い分ける（混在させない）
- テキストカラーは `#333333` を基本とする（純黒ではない）

### Don't（禁止）

- ブランドレッド `#cf000d` を CTA ボタンの背景に使わない（ヘッダー帯の色であり、ボタン背景ではない）
- Montserrat の weight を 700 以上にしない（サイト全体で 400 統一）
- 和文本文に letter-spacing を広く取りすぎない（normal が基本）
- 装飾的なシャドウを多用しない（フラットデザインが基本思想）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | ハンバーガーメニューに切替 |
| Desktop | > 768px | フルナビゲーション表示 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは見出し Montserrat を 16〜18px に縮小
- 和文本文は 14px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #cf000d
Text Color: #333333
Background: #ffffff
Font JP: "Noto Sans JP", sans-serif
Font EN: Montserrat, sans-serif
Body Size: 14px
Line Height: 1.8
Letter Spacing (EN labels): 0.2em
```

### プロンプト例

```
一風堂のデザインシステムに従って、店舗一覧ページを作成してください。
- ヘッダー帯: 背景 #cf000d
- テキスト: #333333
- 英語セクションラベル: Montserrat 24px / letter-spacing 0.2em
- 和文本文: Noto Sans JP 14px / weight 400 / line-height 1.8
- カード: フラットデザイン（シャドウなし）
- ボタン: #eeeeee 背景、角丸なし
```
