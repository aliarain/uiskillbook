# DESIGN.md — Audio-Technica

> オーディオテクニカ（https://www.audio-technica.co.jp/）のデザイン仕様書。
> 1962年創業のプロフェッショナルオーディオ機器メーカー。
> Puppeteer による computed style 実測値（2026-05-26 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プレシジョン・テクニカル。音響機器メーカーとしての精密さと信頼感を、シャープなエッジと抑制されたカラーパレットで表現
- **密度**: 製品カタログ型。カルーセルで製品を回遊させつつ、ナビカードで用途別に誘導する構成
- **キーワード**: シャープ、テクニカル、プレミアム、ミニマル、精密
- **特徴**: border-radius をほぼ使わない（0px）直線的なデザイン。FontPlus によるヒラギノ角ゴ ProN のウェブフォント配信と、英文ディスプレイ用の Univers Next Pro Condensed の組み合わせが特徴。ナビゲーションラベルの letter-spacing: 0.2em が日本語プレミアム感を強調。ゴールド（`#daa521`）のアクセントが温かみのある高級感を添える

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000`): メインテキスト色。純粋な黒を使用
- **Gold** (`#daa521`): 会員登録CTA、プレミアムアクセント。温かみのあるゴールド

### Semantic（意味的な色）

- **Info Blue** (`#0478c1`): Cookie同意ボタン、インフォメーション系アクション
- **Promo Gold** (`#cc9900`): プロモーションバッジ、キャンペーン訴求

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト（純粋な黒）
- **Text Secondary** (`#616161`): 補足テキスト、無効ボタンテキスト
- **Text Footer** (`#ffffff`): フッター内テキスト（白）
- **Border** (`#bfbfbf`): ボタン枠線、区切り線
- **Background** (`#ffffff`): ページ背景
- **Surface Card** (`#f0f0f0`): 製品カードの背景面
- **Surface Section** (`#eaeaea`): トピックス・新製品セクション背景
- **Surface Campaign** (`#efefef`): キャンペーンセクション背景
- **Footer Dark** (`#404040`): フッター背景（ダークグレー、純黒ではない）

### Product Color Swatches

- **Teal** (`#008080`): 製品カラーバリエーション
- **Warm Brown** (`#be8f68`): 製品カラーバリエーション
- **Peru** (`#cd853f`): 製品カラーインジケーター

### UI Elements

- **Swiper Active** (`#777777`): カルーセルのアクティブドット
- **Swiper Inactive** (`#dddddd`): カルーセルの非アクティブドット
- **Nav Overlay** (`rgba(255, 255, 255, 0.7)`): ナビカード背景（半透明白）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: FP-HiraKakuProN-W3 — FontPlus（SBテクノロジー）配信のヒラギノ角ゴ ProN W3。ウェイト 400
- **ゴシック体（見出し）**: FP-HiraKakuProN-W6 — FontPlus 配信のヒラギノ角ゴ ProN W6。ウェイト 700
- **ゴシック体（UI）**: "FP-ヒラギノ角ゴ ProN W6" — Cookie バナー等の UI 要素用。日本語名での指定

### 3.2 欧文フォント

- **ディスプレイ**: UniversNextPro-Cond — Univers Next Pro Condensed。セクションタイトル、英文テキスト、404ページ等のディスプレイ用途。コンデンスドグロテスクで技術的な雰囲気を強調
- **入力フィールド**: Arial — フォーム入力のデフォルト

### 3.3 font-family 指定

```css
/* 本文 */
font-family: "FP-HiraKakuProN-W3", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;

/* 見出し・太字 */
font-family: "FP-HiraKakuProN-W6", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;

/* 英文ディスプレイ */
font-family: "UniversNextPro-Cond", "Arial Narrow", "Roboto Condensed", sans-serif;

/* UIボタン */
font-family: "FP-ヒラギノ角ゴ ProN W6", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;

/* フォーム入力 */
font-family: Arial, sans-serif;
```

**フォールバックの考え方**:
- FontPlus のウェブフォント（FP-HiraKakuProN-W3/W6）を最優先
- ローカルのヒラギノ角ゴ ProN、Hiragino Sans でフォールバック
- 英文ディスプレイは Univers Next Pro Condensed → Arial Narrow → Roboto Condensed の順
- FontPlus はドメインライセンスのため、preview.html ではローカルのヒラギノ角ゴ ProN + Roboto Condensed（Google Fonts）で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | UniversNextPro-Cond | 25px | 400 | 1.5 | 0.01em | 404ページ等の英文大見出し |
| Section Title | FP-HiraKakuProN-W6 | 15px | 700 | 1.0 | normal | 「おすすめアイテム」等のセクション見出し |
| Content Title | FP-HiraKakuProN-W6 | 16px | 700 | 1.5 | normal | 製品名、カード見出し |
| Content Title (wide) | FP-HiraKakuProN-W6 | 16px | 700 | 1.8 | normal | ナビカード見出し（広い行間） |
| Nav Label | FP-ヒラギノ角ゴ ProN W6 | 13px | 400 | 1.0 | 0.2em | ナビゲーションラベル（特徴的な広い字間） |
| English Label | UniversNextPro-Cond | 16px | 700 | 1.0 | normal | 英文ラベル「ONLINE LIMITED」等 |
| Body | FP-HiraKakuProN-W3 | 14px | 400 | 1.5 | normal | 製品説明テキスト |
| Body (404) | FP-HiraKakuProN-W3 | 14px | 400 | 2.0 | 0.02em | エラーページ本文 |
| Footer | FP-HiraKakuProN-W3 | 12px | 400 | 1.0 | 0.05em | フッターテキスト、白文字 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（14px テキスト → 21px）
- **見出しの行間**: 1.0〜1.8（セクションタイトルは密、ナビカード見出しはゆったり）
- **本文の字間 (letter-spacing)**: normal（基本的に字間なし）
- **ナビゲーションの字間**: 0.2em（13px × 0.2 = 2.6px）— 非常に広い字間。日本語プレミアムブランドの特徴的な表現
- **フッターの字間**: 0.05em（12px × 0.05 = 0.6px）

**ガイドライン**:
- ナビゲーションラベルの `letter-spacing: 0.2em` はブランドの視覚的アイデンティティ。省略しないこと
- 本文は字間を詰めず、`normal` を維持する
- フッターのみ微細な字間（0.05em）を適用

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

実測では特別な禁則設定は検出されなかった。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt**: 適用なし。全要素で `font-feature-settings: normal`
- すべてのテキストでプロポーショナル字詰めを使わず、等幅配置を維持している

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（会員登録）**
- Background: `#daa521`（ゴールド）
- Text: `#ffffff`
- Padding: 12px 50px
- Border Radius: 4px — サイト全体で唯一の角丸要素
- Font: FP-HiraKakuProN-W3, 16px, 400

**Secondary（基本ボタン）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#bfbfbf`
- Padding: 10px
- Border Radius: 0px
- Font: FP-ヒラギノ角ゴ ProN W6, 11px, 400
- Letter Spacing: 1.1px（0.1em）

**Cookie Accept**
- Background: `#0478c1`
- Text: `#ffffff`
- Padding: 1px 6px
- Border Radius: 0px
- Font: FP-ヒラギノ角ゴ ProN W6, 15px, 400

**Cookie Reject**
- Background: `#e9e7e8`
- Text: `#616161`
- Padding: 1px 6px
- Border Radius: 0px

### Inputs

- Background: `#ffffff`
- Border: デフォルトでは明示的なボーダーなし
- Border Radius: 0px
- Padding: 0px 8px
- Font: Arial, 14px, 400

### Cards（製品カード）

- Background: `#f0f0f0`（ライトグレー）
- Border: なし
- Border Radius: 0px — 完全にシャープなエッジ
- Padding: —（画像が全面を覆う構成）
- Shadow: なし（フラットデザイン）

### Navi Cards（ヘッドホンナビ等）

- Background: `rgba(255, 255, 255, 0.7)`（半透明白）
- Border: なし
- Border Radius: 0px
- 製品画像の上にオーバーレイとして表示

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 10px |
| M | 20px |
| L | 40px |
| XL | 55px |
| XXL | 60px |

### Container

- Max Width: 1440px（推定、フルワイドカルーセル）
- Footer Padding: 55px 60px 0px（上・左右・下）

### Grid

- Product Grid: 4カラム（製品カルーセル）
- Navi Cards: 3カラム（用途別ナビゲーション）
- Swiper Carousel: フルワイドスライダー

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインが基本 |

- サイト全体で box-shadow の使用は検出されなかった
- 深度の表現はシャドウではなく、背景色の差（`#ffffff` → `#f0f0f0` → `#eaeaea`）で階層を示す
- フッターのみダークグレー（`#404040`）で明確な領域分離

---

## 7. Do's and Don'ts

### Do（推奨）

- border-radius は基本 0px。シャープなエッジでテクニカルな印象を維持する
- ナビゲーションラベルには `letter-spacing: 0.2em` を適用し、プレミアム感を出す
- 英文テキストには UniversNextPro-Cond（コンデンスド書体）を使用する
- 製品カードの背景は `#f0f0f0` でコンテンツ領域と区別する
- フッターは `#404040`（ダークグレー）。純黒にしない
- 色のコントラストはページ背景が白・テキストが黒なので十分に確保されている

### Don't（禁止）

- 角丸を多用しない。CTA ボタン（`#daa521` ゴールド、radius: 4px）以外は radius: 0px
- ドロップシャドウを使わない。背景色の差で深度を表現する
- ナビゲーションの `letter-spacing: 0.2em` を省略しない（ブランドアイデンティティ）
- `palt` を適用しない。すべてのテキストで等幅配置を維持する
- ゴールド（`#daa521`）を汎用色として使わない。会員登録 CTA とプレミアム訴求に限定する
- 本文に FP-HiraKakuProN-W6（太字）を使わない。見出し・タイトルに限定する

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト、ハンバーガーメニュー |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト、フルナビ表示 |

### タッチターゲット

- ナビゲーション項目: padding 0px 20px（リスト項目単位）
- ボタン: padding 10px〜12px 50px（十分なタッチ領域）

### フォントサイズの調整

- モバイルではナビゲーションがハンバーガーメニューに変化
- 製品グリッドは1〜2カラムに縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary CTA Color: #daa521 (Gold)
Text Color: #000000
Background: #ffffff
Card Surface: #f0f0f0
Footer Background: #404040
Font (JP body): "FP-HiraKakuProN-W3", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Font (JP heading): "FP-HiraKakuProN-W6", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Font (EN display): "UniversNextPro-Cond", "Arial Narrow", "Roboto Condensed", sans-serif
Body Size: 14px
Line Height: 1.5
Border Radius: 0px (CTA only: 4px)
Nav Letter Spacing: 0.2em
```

### プロンプト例

```
Audio-Technica のデザインシステムに従って、製品一覧ページを作成してください。
- CTA ボタン: bg #daa521, text white, radius 4px, padding 12px 50px
- 製品カード: bg #f0f0f0, radius 0px, shadow なし
- 見出しフォント: FP-HiraKakuProN-W6 (700), 16px, line-height 1.5
- 本文フォント: FP-HiraKakuProN-W3 (400), 14px, line-height 1.5
- ナビラベル: 13px, letter-spacing 0.2em
- 英文テキスト: UniversNextPro-Cond
- border-radius は CTA 以外すべて 0px
- フッター: bg #404040, text white, 12px, letter-spacing 0.05em
```
