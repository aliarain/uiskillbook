# DESIGN.md — KEWPIE (kewpie.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 抽出日: 2026-05-09 / 出典: https://www.kewpie.co.jp/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 親しみやすく温かみのある、食品ブランドらしいデザイン。1919年創業の歴史を持つ日本の食品メーカーとして、信頼感と家庭的な温もりを両立
- **密度**: ゆったりとしたメディア・コーポレートサイト型。レシピやプロダクト紹介に特化した余白の多いレイアウト
- **キーワード**: 温かい、親しみやすい、食卓、赤、丸い

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Kewpie Red** (`#e4002b`): メインのブランドカラー。セクション見出し、リンク、CTAボタン背景に統一的に使用。キユーピーの象徴色
- **Kewpie Orange** (`#f18606`): 商品カテゴリや特集のアクセント。オレンジはマヨネーズ・ドレッシングの食品的温かさを表現

### Semantic（意味的な色）

- **Danger**: サイト上で明示的なエラー色は未確認。`#e4002b` がブランド色のため、エラーは別色（例: `#cc0000`）を想定
- **Warning**: 未確認
- **Success**: 未確認

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト。純黒ではなくソフトなダークグレー
- **Text on Red** (`#ffffff`): Kewpie Red 背景上のテキスト
- **Border**: 未確認（明示的なボーダートークンなし）
- **Background** (`#ffffff`): ページ背景
- **Surface Light Pink** (`#fff0f1`): 商品ページの面色。ほんのりピンクがかった温かい背景
- **Surface Gray** (`#f2f2f2`): ニュートラルな面色。フィルタータブ等
- **Surface Light Gray** (`#f9f9f9`): より薄い面色
- **Surface Warm Gray** (`#f2f1f1`): ウォームグレーの面色
- **Carousel Dot** (`#efefef`): カルーセルインジケーターの非アクティブ色

---

## 3. Typography Rules

### 3.1 和文フォント

- **YakuHanJP**: 約物（句読点・括弧）を半角幅にする特殊フォント。フォントスタックの上位に配置し、約物のリズムを改善
- **BaseFont-JP**: カスタム和文フォント（サイト独自定義）
- **ヒラギノ角ゴ Pro W3** / **Hiragino Kaku Gothic Pro**: macOS向けフォールバック
- **メイリオ** / **Meiryo**: Windows向けフォールバック

### 3.2 欧文フォント

- **Roboto**: フォントスタック先頭。欧文文字をRobotoで描画し、和文は後続フォントにフォールバック
- **Helvetica** / **Arial**: 汎用フォールバック

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: Roboto, YakuHanJP, BaseFont-JP, Helvetica, Arial,
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- 欧文優先型: Roboto を先頭に置き、英数字はすべて Roboto で描画
- YakuHanJP が2番目: 約物（「」、。！？等）だけ半角幅に置換し、タイポグラフィのリズムを改善
- BaseFont-JP が3番目: サイト独自の和文フォント
- ヒラギノ・メイリオはOS別フォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Section Heading (h2) | 30px | 400 | 1.33 | 0.05em | `#e4002b` | セクション見出し。太字ではなくレギュラー |
| Update Heading (h3) | 25px | 400 | 1.7 | — | `#e4002b` | 更新情報見出し |
| Item Heading (h3) | 16px | 400 | 1.6 | — | `#e4002b` | おすすめアイテム見出し |
| Subsection (h4) | 15px | 400 | 1.7 | — | `#e4002b` | 小見出し |
| Body | 15px | 400 | 1.7 | 0.05em | `#333333` | 本文テキスト |
| Body (wide) | 15px | 400 | 2.0 | 0.05em | `#333333` | body要素のデフォルト行間 |
| Recipe Card Text | 15px | 400 | 1.125 | — | `#333333` | レシピカード内テキスト。コンパクト |
| Text Link | 14px | 400 | 1.7 | — | `#e4002b` | テキストリンク |
| Nav Link | 13px | 700 | 2.0 | 0.05em | — | ナビゲーションリンク。唯一のBold使用箇所 |
| Nav Sub | 14px | 400 | 1.7 | — | — | ナビゲーション補足テキスト |

**特徴**: 見出しの weight はすべて 400（Regular）。太字に頼らず、色（Kewpie Red）とサイズで階層を表現する設計。太字（700）はナビゲーションリンクのみ

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.7（p要素）〜 2.0（body デフォルト）。日本語としては標準的〜広め
- **見出しの行間**: 1.33（h2）〜 1.7（h3/h4）
- **本文の字間 (letter-spacing)**: 0.05em（0.75px / 15px）。日本語サイトとしてはやや広め
- **見出しの字間**: 0.05em（body から継承）

**ガイドライン**:
- body に `letter-spacing: 0.75px`（0.05em）がグローバル適用されている
- 行間は用途で変わる: body 2.0 / p 1.7 / レシピカード 1.125

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt**: 適用なし。YakuHanJP フォントが約物半角化の役割を果たしているため、palt による字詰めは使用していない
- YakuHanJP と palt は目的が似ている（約物の詰め）が、アプローチが異なる。YakuHanJP はフォントレベルで約物グリフを半角幅に置換し、palt は OpenType 機能でプロポーショナル字詰めを行う

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill）**
- Background: `#e4002b`
- Text: `#ffffff`
- Border Radius: 100px（pill 型）
- 例: 「地図へ移動する」

**Secondary CTA（pill outline, reverse）**
- Background: `#ffffff`
- Text: `#e4002b`
- Border Radius: 100px（pill 型）
- 例: 「取扱店舗を探す」

**Tertiary（pill outline, transparent）**
- Background: transparent
- Text: `#e4002b`
- Border: 1px solid `#e4002b`
- Border Radius: 100px（pill 型）
- 例: 「企業・IR」「Global」

**Search Button（半pill）**
- Background: `#e4002b`
- Text: `#ffffff`
- Border Radius: `0 50px 50px 0`（右側のみ丸い）

**Filter Tab**
- Background: `#f2f2f2`
- Text: `#333333`
- Border Radius: 0px（角張ったタブ）

### Inputs

- 検索入力欄は Search Button と結合したコンポジットUI
- Border Radius（左側）: `50px 0 0 50px`

### Cards

- レシピカードや商品カードは写真主体
- テキスト行間がタイトめ（line-height: 1.125）
- 角丸やシャドウの詳細は未確認

---

## 5. Layout Principles

### Spacing Scale

サイトのスペーシングシステムは固定トークンではなく、セクションごとの余白設計：

| 用途 | Value |
|------|-------|
| セクション間 | 40–60px |
| カード内パディング | 6px 0 4px（h3） |
| テキスト間余白 | 本文の line-height で調整 |

### Container

- Max Width: 約 1000px（推定）
- Padding (horizontal): セクションにより異なる

### Grid

- レシピカード: 3〜4カラムグリッド
- 商品カテゴリ: 2〜3カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットなデザインが基調 |
| 1 | 軽微な影（ホバー時） | カードホバー |

キユーピーのサイトは非常にフラットなデザインで、影はほとんど使わない。色面とタイポグラフィで階層を表現

---

## 7. Do's and Don'ts

### Do（推奨）

- **Kewpie Red `#e4002b` を見出しとCTAの両方に使う** — このブランドの最大の特徴。見出し色とCTA色が統一されている
- **ボタンは pill 型（radius: 100px）にする** — 角丸ではなく完全な pill が基本
- **見出しは weight: 400 にする** — 太字は使わず、サイズと色で階層を作る
- **YakuHanJP を使う場合は palt を外す** — 二重に約物を詰めるとバランスが崩れる
- **letter-spacing: 0.05em をグローバルに適用する** — サイト全体でゆったりとした字間
- **食品らしい温かい色を面色に使う** — `#fff0f1`（ライトピンク）や `#f18606`（オレンジ）

### Don't（禁止）

- **見出しに weight: 700 を使わない** — ナビリンク以外はすべて Regular (400)
- **`#e4002b` を背景色とテキスト色の両方に同時使用しない** — 背景が赤なら文字は白、文字が赤なら背景は白かピンク
- **寒色系の面色を使わない** — グレーは許容するが、ブルーやグリーンの面色は使わない
- **角丸ボタン（radius: 8px 等）を使わない** — pill（100px）か直角（0px、フィルタータブ）のみ
- **palt と YakuHanJP を同時に適用しない** — 約物が二重に詰まる

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。ハンバーガーメニュー |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）
- pill ボタンは十分なパディングで確保

### フォントサイズの調整

- モバイルでは本文 14–15px、見出しはデスクトップの 70–80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #e4002b (Kewpie Red)
Accent Color: #f18606 (Kewpie Orange)
Text Color: #333333
Background: #ffffff
Surface (warm): #fff0f1
Surface (neutral): #f2f2f2
Font: Roboto, YakuHanJP, BaseFont-JP, Helvetica, Arial,
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
Body Size: 15px
Body Line Height: 1.7 (p) / 2.0 (body)
Letter Spacing: 0.05em
Heading Weight: 400 (NOT bold)
Heading Color: #e4002b
Button Shape: pill (border-radius: 100px)
font-feature-settings: normal (palt なし — YakuHanJP で代替)
```

### プロンプト例

```
キユーピーのデザインシステムに従って、レシピ一覧ページを作成してください。
- プライマリカラー: #e4002b（見出しとCTAの両方に使用）
- アクセント: #f18606（カテゴリタグ）
- フォント: Roboto, "Noto Sans JP", sans-serif（Google Fonts代替）
- 見出し: 30px / weight 400 / color #e4002b
- 本文: 15px / weight 400 / line-height 1.7 / letter-spacing 0.05em / color #333333
- ボタン: pill型 (radius 100px) / bg #e4002b / 白文字
- カード背景: #fff0f1（温かいピンク）
- フラットデザイン（影なし）
```
