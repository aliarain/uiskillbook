# DESIGN.md — 北欧、暮らしの道具店

> 北欧、暮らしの道具店（https://hokuohkurashi.com/）のデザイン仕様書。
> 株式会社クラシコムが運営する、北欧雑貨・日用品を中心としたライフスタイル EC サイト。読みもの（コラム）と商品販売を融合した「メディアコマース」の先駆者。
> 実サイトの computed style に基づいて記述（2026-05-09 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 雑誌のような読みもの体験と EC を融合。写真と短い文章でライフスタイルを提案する「エディトリアルコマース」
- **密度**: 中〜高。トップページは読みものカード・商品カード・ニュースが混在するマガジン型レイアウト
- **キーワード**: 温もり、ナチュラル、エディトリアル、家庭的、游ゴシック
- **特徴**:
  - **游ゴシック Medium ベース** — 全体を游ゴシック Medium で統一。Noto Sans JP をフォールバックに持つが、主役は游ゴシック。Windows のウェイト問題を "Yu Gothic Medium" 明示指定で対策
  - **YakuHanJPs の部分適用** — 記事カード等の一部要素に YakuHanJPs（約物半角化・小さいサブセット）を適用。nav やヘッダーには未適用
  - **小さなベースフォント 12px** — body のベースが 12px。記事本文は 13–15px に拡大するが、UI テキストは 12px のまま
  - **イエロー NEW バッジ `#fff100`** — 新着記事に鮮やかなイエロー背景のバッジ。サイト全体の暖色トーンの中で目を引くアクセント
  - **コーラルレッド NEW バッジ `#fb5c5c`** — ナビゲーションの "New" バッジに使用。pill 形状（radius 100px）
  - **水色セクション `#f2f7f9`** — 読みものセクション・カテゴリセクションの背景に淡い水色。柔らかい区切り
  - **ライトグレー背景 `#f7f7f7`** — ニュースティッカー等の背景に使用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- ブランドカラーは特定の単色ではなく、**温かみのあるニュートラルトーン全体**がブランドを表現する

### Accent

- **Yellow** (`#fff100`): 新着記事バッジ背景。ビビッドイエロー
- **Coral Red** (`#fb5c5c`): ナビゲーション "New" バッジ背景。pill 形状
- **Search Active** (`#444444`): 検索パネルのアクティブタブ背景

### Neutral（ニュートラル）

- **Text Primary** (`#444444`): 本文テキスト、ナビゲーション、見出し。サイト全体の基本テキスト色
- **White** (`#ffffff`): ページ背景、ヘッダー背景
- **Background Light** (`#f7f7f7`): ニュースティッカー、配送情報背景
- **Background Blue** (`#f2f7f9`): 読みものセクション、カテゴリセクション背景
- **Border** — 明示的なボーダーは少なく、背景色の切り替えでセクションを分離

### Text

- **Text Primary** (`#444444`): すべてのテキストに使用される単一テキスト色。純黒を避け、柔らかさを出す
- **Text Inverted** (`#ffffff`): ダーク背景上のテキスト（検索パネルタブ等）

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（全般）**:
- 游ゴシック Medium / Yu Gothic Medium（Windows のウェイト問題対策で Medium を明示）
- 游ゴシック体 / YuGothic（macOS フォールバック）
- ヒラギノ角ゴ ProN W3 / Hiragino Kaku Gothic ProN
- Noto Sans JP（Web フォントフォールバック）
- メイリオ / Meiryo（Windows 最終フォールバック）

**約物半角化**:
- YakuHanJPs（記事カード・本文の一部に適用）

### 3.2 欧文フォント

- **サンセリフ**: Helvetica Neue, Arial — 游ゴシックの欧文グリフより後にフォールバック

### 3.3 font-family 指定

```css
/* 標準（ヘッダー、ナビ、商品一覧等） */
font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体,
  -apple-system, "system-ui",
  "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  "Noto Sans JP", メイリオ, Meiryo,
  "Helvetica Neue", Arial, sans-serif;

/* 記事カード・読みもの本文（約物半角化あり） */
font-family: YakuHanJPs, "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体,
  -apple-system, blinkmacsystemfont,
  "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  "Noto Sans JP", メイリオ, meiryo,
  "Helvetica Neue", arial, sans-serif;
```

**フォールバックの考え方**:
- "Yu Gothic Medium" が先頭。Windows での游ゴシック Regular（細すぎる）問題を Medium 指定で回避
- -apple-system, system-ui を中間に挟む。macOS のシステムフォント（San Francisco）にもフォールバック
- YakuHanJPs は記事テキスト等の限定要素のみ。全体には適用しない
- blinkmacsystemfont は Chrome 向けのシステムフォント指定

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | 游ゴシック Medium | 20px | 700 | 1.6 | normal | セクション大見出し "人気商品" |
| Heading 2 | YakuHanJPs + 游ゴシック | 15px | 700 | 1.71 | normal | 記事カードタイトル |
| Heading 3 | 游ゴシック Medium | 20px | 700 | 1.6 | normal | セクション見出し "新着の読みもの" |
| Body | YakuHanJPs + 游ゴシック | 15px | 400 | 1.71 | normal | 記事説明文 |
| Body Small | YakuHanJPs + 游ゴシック | 13px | 400 | 1.6 | normal | ニューステキスト、補足 |
| Caption | 游ゴシック Medium | 12px | 400 | 1.6 | normal | ベーステキスト、ナビゲーション |
| Nav Badge | 游ゴシック Medium | 11px | 400 | 1.36 | normal | "New" バッジテキスト |
| Search Tab | 游ゴシック Medium | 13px | 400 | 1.6 | normal | 検索パネルタブ |
| Article Title (list) | YakuHanJPs + 游ゴシック | 15px | 400 | 1.6 | normal | 新着読みもの一覧のタイトル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6–1.71。游ゴシックの標準的な読みやすい行間
- **見出しの行間**: 1.6
- **本文の字間 (letter-spacing)**: normal。追加の字間は一切適用しない
- **見出しの字間**: normal

**ガイドライン**:
- letter-spacing は全要素で normal。サイト全体を通じて明示的な字間調整がない
- 行間は 1.6 を基本とし、記事系コンテンツで 1.71 にわずかに広げる

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- palt 未使用。游ゴシック Medium の標準字詰めに任せている

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

北欧、暮らしの道具店は CTA ボタンの露出が少ない。テキストリンクとカードタップが主なインタラクション手段。

**バッジ（New）**
- Background: `#fb5c5c`（ナビ）/ `#fff100`（記事）
- Text: `#ffffff`（ナビ）/ `#444444`（記事）
- Padding: 0 3px
- Border Radius: 100px（pill）
- Font Size: 11px

### Cards

**記事カード**
- Background: `#ffffff`
- Border: none
- 画像: アスペクト比固定、角丸なし
- タイトル: YakuHanJPs + 游ゴシック 15px / weight 700 / line-height 1.71
- 説明文: 15px / weight 400 / line-height 1.71 / color `#444444`
- NEW バッジ: `#fff100` 背景、左上に表示

**商品カード**
- Background: `#ffffff`
- 商品画像: 正方形
- 商品名・価格: 12–13px / weight 400

### Inputs

**検索入力**
- 検索パネルはオーバーレイで表示
- タブ切替: "商品検索" / "記事検索"
- アクティブタブ: `#444444` 背景 / `#ffffff` テキスト

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
| XXL | 64px |

### Container

- Max Width: 約 1060px（推定）
- Padding (horizontal): 16–20px

### Grid

- 商品グリッド: 4–5 カラム（デスクトップ）
- 記事カード: 2–3 カラム
- セクション間の区切りは背景色の切り替え（`#ffffff` → `#f2f7f9` → `#f7f7f7`）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

完全にフラットなデザイン。シャドウは一切使わず、背景色の切り替えのみで視覚的階層を構成する。

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは游ゴシック Medium を先頭に指定し、Windows でのウェイト問題を防ぐ
- テキスト色は `#444444` 一色に統一する
- 記事テキストには YakuHanJPs を適用して約物を半角化する
- セクション区切りは背景色の切り替え（`#ffffff` / `#f2f7f9` / `#f7f7f7`）で表現する
- 新着を示すバッジにはビビッドイエロー `#fff100` を使う
- 行間は 1.6 を基本とする

### Don't（禁止）

- `letter-spacing` を追加しない — このサイトは字間調整を一切行わない
- `font-feature-settings: "palt"` を使わない — 游ゴシック Medium の標準字詰め
- 黒 `#000000` をテキストに使わない — すべて `#444444`
- ボタンやカードにシャドウを付けない — 完全フラット
- ブランドカラーとして特定の色を前面に出さない — 温かみのあるニュートラルトーンが全体

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Desktop | > 767px | デスクトップレイアウト |

### タッチターゲット

- ナビゲーションリンク: padding 8px で 44px 以上のタップ領域
- カード全体がタップ対象

### フォントサイズの調整

- 見出し: 20px を維持
- 本文: 13–15px を維持
- ベーステキスト: 12px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Text: #444444
Background: #ffffff
Background Blue: #f2f7f9
Background Light: #f7f7f7
Accent Yellow: #fff100
Accent Coral: #fb5c5c
Font: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, -apple-system, "system-ui", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "Noto Sans JP", メイリオ, Meiryo, "Helvetica Neue", Arial, sans-serif
Body Size: 13-15px
Line Height: 1.6
```

### プロンプト例

```
北欧、暮らしの道具店のデザインシステムに従って、読みもの一覧ページを作成してください。
- テキスト色: #444444 一色
- フォント: 游ゴシック Medium ベース、記事テキストに YakuHanJPs を追加
- 背景色の切り替えでセクション区切り（#ffffff / #f2f7f9）
- NEW バッジ: #fff100 背景、11px
- カード: フラット、シャドウなし
- letter-spacing: normal（追加の字間なし）
```
