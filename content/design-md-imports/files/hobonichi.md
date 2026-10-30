# DESIGN.md — ほぼ日刊イトイ新聞（Hobonichi）

> ほぼ日刊イトイ新聞 公式サイト（https://www.1101.com/）のデザイン仕様書。
> 糸井重里が主宰する 1998 年創刊の Web メディア兼 EC（ほぼ日手帳など）。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 25 年以上続く「日刊」の Web マガジンらしい、編集面のような多色性とユーモア。色を絞らずに、コンテンツごとに**カードの背景色を変えて目印にする**
- **密度**: 情報密度は中〜高。日替わりコンテンツ・連載・グッズ・展示など、性格の異なるカードがトップに同居する
- **キーワード**: 編集的、多色、丸み、手紙のような、親密
- **特徴**: 全カラム・全カードに対して **角丸（border-radius 8〜56px）が徹底**されており、ピル型 CTA（radius 36–56px）が頻出。ブランドカラーが固定されず、**淡い水色 `#dbf2ff` / 黄色 `#ebd833` / 緑 `#5dae64` / 紫 `#6d257e` / ピンク `#f3c0d9`** を文脈ごとに使い分ける。本文フォントは Web フォント `Noto Sans` + `Noto Sans JP` の組み合わせで、**body の letter-spacing は 0.8px（≈ 0.05em）**を全体に適用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — 固定 1 色ではない）

ほぼ日には固定の単一ブランドカラーがなく、**コンテンツごとの色シール**として複数のアクセントを使い分ける:

- **Hobonichi Yellow** (`#ebd833` / `#f0d524`): 「本日発売！」「開催中」のバッジ・帯。最も「ほぼ日らしい」黄色
- **Hobonichi Light Blue** (`#dbf2ff`): 「生活のたのしみ展へ」「お買いものへ」など最頻出の pill CTA 背景
- **Hobonichi Light Blue Pale** (`#d1f0ff` / `#bbe5ff`): 連載カードの淡い背景・発売日バッジ
- **Hobonichi Green** (`#5dae64`): ほぼ日手帳など EC 系のコンバージョン CTA。背景 `#5dae64` + 文字 `#f3fff4`
- **Hobonichi Green Pale** (`#f3fff4`): 「ほぼ日のお店」紹介カードの背景
- **Hobonichi Purple** (`#6d257e`): 連載・展示の特集色
- **Hobonichi Pink** (`#f3c0d9`): 季節企画・限定アクセント
- **Hobonichi Olive** (`#6d7246`): 一部の特集カード
- **Hobonichi Orange** (`#ffaa00` / `#f88352`): 注目バッジ・「くわしくみる」CTA の文字色

### Text

- **Text Primary** (`#3e3e3e`): 本文・見出しの基本色。**純黒は使わない**
- **Text Muted** (`#767676`): 補助テキスト
- **Text Caption** (`#939393`): 投稿系 CTA「言いまつがいに投稿する」の文字色
- **Text on Yellow / Light** (`#3e3e3e`): 淡い背景の上では本文色をそのまま使う
- **Text Link Blue** (`#005588`): 淡い水色 pill の上の文字色（高コントラスト）

### Surface（面色）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface Card Gray** (`#f6f6f6`): 一覧カードの汎用背景。**最頻出**
- **Surface Mute** (`#d9d9d9`): フッター近くの「ほぼ日にメールを送る」CTA 背景
- **Surface Dark** (`#3e3e3e`): SNS シェアボタン「ポスト」の塗り

### Frame / Outline

- **Frame Black** (`#000000`): 一部の特集カードの太いブロックボーダー（`8px solid #000`）。**1998 年からの絵本的な装丁感を残す**
- **Outline Mute** (`#d9d9d9`): outline ピル CTA「言いまつがいに投稿する」「小ネタ劇場に投稿する」の枠線

> **Note**: ほぼ日は **CSS Custom Property を持たない**（旧来のべた書き CSS）。色は CSS ファイル各所に直接記述されている。**色を覚えるよりも「役割（バッジ / pill CTA / 強調枠）と組み合わせ」を優先**して再現する。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- Noto Sans JP（Google Fonts、和文担当）
- Noto Sans（同上、欧文・数字担当）
- 和文の OS フォールバックは指定なし（Noto Sans JP に強く依存）

### 3.2 欧文フォント

- **サンセリフ（最優先）**: Noto Sans
- **セリフ・装飾系の使用なし**

### 3.3 font-family 指定

```css
/* 本文・UI 全般（body 直下に適用） */
font-family: "Noto Sans", "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **欧文の Noto Sans を先頭**に置き、欧文・数字を綺麗に表示
- **和文は Noto Sans JP に集約**。OS 内蔵の游ゴシックやヒラギノは指定しない（=サーバー配信フォント前提のデザイン）
- generic は `sans-serif`

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| H1 | Noto Sans + JP | 32px | 400 | 35.2px (1.1) | normal | 大型ヘッダー |
| Section Heading | Noto Sans + JP | 24px | 600 | 30px (1.25) | normal | 連載タイトル「メモという不思議な表現形式。」 |
| Card Heading | Noto Sans + JP | 20px | 600 | 22–28px (1.1–1.4) | normal | カード見出し「生活のたのしみ展」 |
| Body | Noto Sans + JP | 16px | 400 | 30.4px (1.9) | 0.8px (≈0.05em) | 本文（連載記事） |
| Caption Small | Noto Sans + JP | 14px | 400 | 21px (1.5) | normal | 補足キャプション |
| Caption Tiny | Noto Sans + JP | 13px | 400 | 19.5px (1.5) | normal | 「乗組員ナイト、しゅう〜りょう〜」等 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.9（16px ÷ 30.4px）**。Web マガジンとして長文の読みやすさを確保
- **見出しの行間**: 1.1〜1.4。タイトルは詰めて打つ
- **本文の字間 (letter-spacing)**: **`0.8px`（≈0.05em）を body 全体に適用**
- **font-feature-settings**: `normal`。palt は使わず、letter-spacing で代替して空間を作る

> **特徴**: ほぼ日は palt ではなく **letter-spacing 0.05em を全文に当てる**ことで、文字同士の関係をほんの少し広げて「手紙のような落ち着き」を出している。日本語サイトとしては珍しい設計。

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
```

特別な指定なし。ブラウザの標準禁則処理に依存。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

**palt は不使用**（letter-spacing で代替）。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — 役割で形が変わる豊富なバリエーション

**Pill CTA Light Blue (角丸 42px)**
- Background: `#dbf2ff`
- Text: `#005588`
- Border: なし
- Border Radius: `42px`
- Padding: `5.6px 11.2px`
- 例: 「生活のたのしみ展へ」「お買いものへ」「一覧ページへ」

**Pill CTA Solid Green (角丸 42px)**
- Background: `#5dae64`
- Text: `#f3fff4`
- Border: なし
- Border Radius: `42px`
- Padding: `5.6px 11.2px`
- 例: 「公式ページへ」（EC 系コンバージョン）

**Pill CTA Outline Orange (角丸 42px)**
- Background: `transparent`
- Text: `#f88352`
- Border: `1px solid #f88352`
- Border Radius: `42px`
- Padding: `5.6px 16.8px`
- 例: 「くわしくみる」（特集記事）

**Pill CTA Outline Mute (角丸 56px)**
- Background: `transparent`
- Text: `#939393`
- Border: `1px solid #d9d9d9`
- Border Radius: `56px`
- Padding: `7px 14px`
- 例: 「言いまつがいに投稿する」「小ネタ劇場に投稿する」（投稿系）

**Pill SNS Share Dark (角丸 36px)**
- Background: `#3e3e3e`
- Text: `#ffffff`
- Border Radius: `36px`
- Padding: `3px 12px`
- 例: 「ポスト」（X シェア）

**Pill Mail (角丸 36px)**
- Background: `#d9d9d9`
- Text: `#3e3e3e`
- Border Radius: `36px`
- Padding: `3px 12px`
- 例: 「ほぼ日にメールを送る」

**Tab Button (角丸 12px、無背景)**
- Background: `transparent`
- Text: `#3e3e3e`
- Border Radius: `12px`
- Padding: `0px`
- 例: 「今日のコドモ」「今日のミラクル」「今日のダンナ」（タブ切替）

**Block Card with Heavy Border (角丸 8px、太枠)**
- Background: `transparent`
- Text: `#000000`
- Border: **`8px solid #000`**（特集カードの装丁的な太枠）
- Border Radius: `8px`
- 例: 「ほぼ日乗組員が見つけた」のような特集カード

> **Don't**: ほぼ日に **#000000 ベタ塗りの硬い CTA は存在しない**。塗りカラーは必ず淡い色か、ブランドの黄・水色・緑を使う。

### Cards

- Background: `#f6f6f6` 標準（または各企画色 `#dbf2ff` / `#f3fff4` / `#ebd833` 等）
- Border: なし or `8px solid #000`（特集の場合）
- Border Radius: 一律ではないが、**8px〜12px が標準**
- 内部の見出しは `#3e3e3e`、本文も `#3e3e3e`

---

## 5. Layout Principles

### Spacing Scale

実測ベースの推定:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- 1 カラムの中央寄せ（max-width: ≈ 1000px）
- カード一覧は 2〜3 カラムグリッド

### Grid

- トップは複数の「島」（連載 / EC / 展示 / コラム）の組み合わせ
- 各島が独自の色とレイアウトを持ち、**グリッドの統一よりもコンテンツの個性を優先**

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（影はほぼ使わない） |
| 1 | 背景の色違い（#f6f6f6 / `#dbf2ff` / `#ebd833`） | カード分離 |
| 2 | `8px solid #000` の太枠 | 特集カード（影の代わりに枠で立体感） |

> **特徴**: ほぼ日は**ドロップシャドウをほとんど使わず**、色面の塗り分けと太枠で奥行きを出す。**昭和の絵本・装丁的な感性**が現代の Web に持ち込まれている。

---

## 7. Do's and Don'ts

### Do（推奨）

- カードごとに **役割色（黄・水色・緑・紫など）** を割り当てる
- CTA は **角丸 36〜56px の pill** で統一する
- 本文の letter-spacing は **0.8px（0.05em）** を維持する
- 本文の line-height は **1.9** にして長文の読みやすさを確保する
- フォントは **Noto Sans + Noto Sans JP の Web フォント前提**で組む

### Don't（禁止）

- **#000000 ベタ塗りの硬い CTA を作らない**（強調は太枠で表現）
- letter-spacing 0 で詰めて打たない（手紙感が消える）
- 1 ページに 1 ブランドカラーで統一しない（**ほぼ日は多色である**ことが正しい）
- ドロップシャドウで陰影を強調しない
- palt は使わない（letter-spacing で代替する）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、カードは縦積み |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 3 カラム + サイドコラム |

### タッチターゲット

- 最小サイズ: 36–44px（pill CTA は padding を含めて高さ ≥ 36px を確保）

### フォントサイズの調整

- モバイルでは見出しを 70–80% に縮小（24px → 18–20px）
- 本文 16px は据え置き

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Colors:        多色（固定なし） — Yellow #ebd833 / LightBlue #dbf2ff / Green #5dae64 / Purple #6d257e / Pink #f3c0d9
Text Primary:        #3e3e3e（純黒は使わない）
Text Link on Light:  #005588
Background:          #ffffff
Surface (Card):      #f6f6f6
Heavy Border:        8px solid #000（特集カード）
Body Font:           "Noto Sans", "Noto Sans JP", sans-serif
Body Size:           16px
Line Height:         1.9 (30.4px / 16px)
Letter Spacing:      0.8px (≈0.05em) — body 全体に適用
CTA Style:           pill 36–56px（多彩なバリエーション）
```

### プロンプト例

```
このサービスのデザインシステム（ほぼ日刊イトイ新聞風）に従って、
連載コンテンツの一覧ページを作成してください。

- 背景: 白 #ffffff
- カードはコンテンツごとに役割色を割り当てる：
  - お買いもの系 → 背景 #dbf2ff、文字 #005588
  - EC 系（手帳・グッズ） → 背景 #5dae64、文字 #f3fff4
  - 季節アクセント → 背景 #ebd833、文字 #3e3e3e
- カードの border-radius: 12px、ボーダーなしを基本
- 特集カードのみ 8px solid #000 の太枠で目立たせる
- CTA: pill (radius 42px) で「くわしくみる」「公式ページへ」
- 本文: 16px / line-height 1.9 / letter-spacing 0.8px
- 文字色は純黒ではなく #3e3e3e を使う
- フォント: "Noto Sans", "Noto Sans JP", sans-serif
- palt は使わない（letter-spacing で空気感を作る）
```
