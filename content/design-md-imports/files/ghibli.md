# DESIGN.md — Studio Ghibli

> スタジオジブリ（https://www.ghibli.jp/）のデザイン仕様書。
> Bootstrap ベースのクラシカルな構成。CSS Custom Properties は使用せず、Bootstrap ユーティリティとインラインスタイルで構築。
> 実サイトの computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのある、手づくり感を大切にしたクラシカルなデザイン。アニメーションスタジオとしての歴史と品格を感じさせつつ、作品ニュースやイベント情報を丁寧に伝える
- **密度**: 情報量は多いが整然と配置。ニュース一覧やイベント情報がメインコンテンツで、サイドバーにカテゴリナビゲーション
- **キーワード**: クラシック、温かみ、手づくり感、落ち着き、品格
- **特徴**: ダークチョコレートブラウン (`#221815`) のヘッダーとジブリブルー (`#109ceb`) のアクセントカラーが、スタジオのアイデンティティを形成。Web フォントは一切使わず、システムフォントのみで構成

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Ghibli Blue** (`#109ceb`): メインのブランドカラー。リンク、ヒーロースライド背景、ラベル（巡回中）に使用
- **Ghibli Brown** (`#221815`): ヘッダー/ナビゲーション背景、CTA ボタン背景。スタジオの重厚感を表現

### Accent（アクセント）

- **Orange** (`#f79b30`): 「New!」バッジ、「New」ラベル背景。新着情報の強調に使用
- **Button Border Blue** (`#008cc1`): CTA ボタン (`btn-ghibli`) のボーダー色。Primary より少し暗い青

### Neutral（ニュートラル）

- **Text Primary** (`#373a3c`): 本文テキスト（Bootstrap デフォルト）
- **Text Dark** (`#333333`): 本文テキスト（一部要素）、セカンダリボタンテキスト
- **Text Light** (`#fafafa`): ダーク背景上のテキスト（ナビリンク、CTA テキスト）
- **Text Muted** (`#888888`): フッターテキスト、サイドバーカテゴリ見出し
- **Label Gray** (`#777777`): 「開催予定」ラベル背景
- **Border** (`#cccccc`): セカンダリボタン、フォーム入力欄のボーダー
- **Background** (`#ffffff`): ページ背景
- **Footer Background** (`#f4f4f4`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- メイリオ / Meiryo（Windows 優先）
- ヒラギノ角ゴ Pro W3（macOS）
- 游ゴシック体 / Yu Gothic / YuGothic（クロスプラットフォーム）
- MS P ゴシック（レガシー Windows）

**明朝体**: 該当なし

### 3.2 欧文フォント

- **サンセリフ**: Helvetica（フォールバックチェーン末尾）
- **セリフ**: 該当なし
- **等幅**: 該当なし

### 3.3 font-family 指定

```css
/* グローバル（body） */
font-family: メイリオ, Meiryo, "Hiragino Kaku Gothic Pro",
  "ヒラギノ角ゴ Pro W3", 游ゴシック体, "Yu Gothic", YuGothic,
  "ＭＳ Ｐゴシック", Helvetica, sans-serif;
```

**フォールバックの考え方**:
- メイリオを先頭に指定。Windows での表示品質を最優先
- macOS ではヒラギノ角ゴ Pro にフォールバック（ProN ではなく Pro を使用）
- 游ゴシック体を第3候補として配置（Windows 8.1+ / macOS 両対応）
- MS P ゴシックはレガシー Windows 環境向けのフォールバック
- 欧文は Helvetica のみ。和文フォント内の欧文グリフを優先する構成
- Web フォントは一切使用していない

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | palt | 備考 |
|------|------|--------|-------------|----------------|------|------|
| Heading 1 (h1) | 36px | 500 | 46.8px (x1.3) | normal | なし | ページタイトル（白文字・ダーク背景上） |
| Heading 2 (h2) | 30px | 500 | 39px (x1.3) | normal | なし | セクション見出し。一部に border-bottom あり |
| Heading 4 (h4 sidebar) | 16px | 500 | 20.8px (x1.3) | normal | なし | サイドバーカテゴリ見出し |
| Heading 4 (h4 footer) | 18px | 500 | 23.4px (x1.3) | normal | なし | フッターカテゴリ見出し |
| Body (p) | 14px | 400 | 18.2px (x1.3) | normal | なし | 本文テキスト |
| Nav Links | 14px | 500 | 18.2px (x1.3) | normal | なし | ヘッダーナビゲーション |
| Small / News | 11.9px | 400 | 15.5px (x1.3) | normal | なし | ニュースアイテム小テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 全要素で統一的に `1.3` が適用されている（Bootstrap のデフォルト `1.1` をカスタマイズ）
- 日本語本文としてはやや狭め（一般的な推奨値は 1.5〜2.0）だが、ニュースサイトとしてコンパクトな情報表示を優先

**字間 (letter-spacing)** — 実測値:
- 全要素で `normal`。明示的な letter-spacing 指定なし
- palt / kern 等の OpenType 機能も未使用

**ガイドライン**:
- line-height は全体で `1.3` に統一されている。記事コンテンツが少ないニュース・イベント情報サイトのため、コンパクトな行間で十分
- letter-spacing は一切設定されていない。シンプルな Bootstrap ベースの構成

### 3.6 禁則処理・改行ルール

```css
/* Bootstrap デフォルトに準拠 */
/* 明示的な禁則処理設定は確認されていない */
```

- Bootstrap 3.x のデフォルトスタイルに依存
- 明示的な `word-break` / `overflow-wrap` / `line-break` の指定なし

### 3.7 OpenType 機能

```css
/* OpenType 機能は未使用 */
font-feature-settings: normal;
```

- palt / kern いずれも適用されていない
- すべてのテキストで `font-feature-settings: normal`

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary — btn-ghibli（CTA）**
- Background: `#221815`（ダークチョコレートブラウン）
- Text: `#fafafa`
- Border: 1px solid `#008cc1`
- Border Radius: 7px
- Padding: 6px 12px
- Font Size: 14px
- Font Weight: 400

**Secondary — btn-default**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#cccccc`
- Border Radius: 4px
- Padding: 6px 12px
- Font Size: 14px
- Font Weight: 400

### Labels / Badges

- **New**: Background `#f79b30`（オレンジ）, Text `#ffffff`, Border Radius: 3px
- **巡回中**: Background `#109ceb`（ブルー）, Text `#ffffff`, Border Radius: 3px
- **開催予定**: Background `#777777`（グレー）, Text `#ffffff`, Border Radius: 3px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): ブラウザデフォルト（カスタム focus スタイルなし）
- Border Radius: 4px
- Padding: 6px 12px
- Font Size: 14px

### Cards

- Background: `#ffffff`
- Border: なし（影による区別は未使用）
- Border Radius: なし（Bootstrap デフォルト）
- Padding: Bootstrap のグリッドシステムに依存
- Shadow: なし

### Navigation

- Background: `#221815`（ダークチョコレートブラウン）
- Link Color: `#fafafa`
- Link Active/Hover: `#fafafa`（opacity 変化）
- Height: Bootstrap navbar デフォルト

### Hero Slider

- Background: `#109ceb`（ジブリブルー）
- Text: `#ffffff`
- 横幅いっぱいのスライドショー形式

---

## 5. Layout Principles

### Container

- Max Width: 1170px（Bootstrap `.container`）
- Padding (horizontal): 15px

### Grid

- Bootstrap 3.x の 12 カラムグリッドシステム
- Gutter: 30px（15px × 2）

### Spacing

- Bootstrap 3.x のデフォルトスペーシングを使用
- 追加のスペーシングスケールは定義されていない

| Token | Value | 備考 |
|-------|-------|------|
| XS | 5px | Bootstrap xs margin |
| S | 10px | パネル内余白 |
| M | 15px | グリッドガター半分 |
| L | 20px | セクション内余白 |
| XL | 30px | グリッドガター |
| XXL | 50px | セクション間余白 |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットなデザイン |

- サイト全体でボックスシャドウの使用は極めて少ない
- カード・パネルには影を使わず、ボーダーや背景色で区別するクラシカルなアプローチ
- Bootstrap のデフォルト `.panel` スタイル（1px solid border）に依存

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは `メイリオ, Meiryo` から始まるフルフォールバックチェーンを必ず指定する
- ブランドカラーは `#221815`（ブラウン）と `#109ceb`（ブルー）の2色を軸にする
- CTA ボタンは `#221815` 背景 + `#008cc1` ボーダーの組み合わせを維持する
- ニュースラベルの色分けルールを守る: New = `#f79b30`, 巡回中 = `#109ceb`, 開催予定 = `#777777`
- line-height は `1.3` を統一的に使用する
- Bootstrap 3.x のグリッドシステム（12 カラム）に従ってレイアウトする

### Don't（禁止）

- Web フォントを導入しない（システムフォントのみのデザインポリシー）
- ブランドカラーの `#109ceb` を本文テキストに使わない（白背景でのコントラストが不十分な場合がある）
- CTA ボタンのボーダー色 `#008cc1` を背景色 `#221815` と混同しない
- ダークブラウン (`#221815`) をページ背景全体に使わない（ヘッダーとボタンのみ）
- CSS Custom Properties を使わない（Bootstrap クラスベースの設計を維持）
- letter-spacing や palt を追加しない（実サイトで一切使用されていない）

---

## 8. Responsive Behavior

### Breakpoints

> Bootstrap 3.x のデフォルトブレークポイント

| Name | Width | 説明 |
|------|-------|------|
| XS (Mobile) | < 768px | モバイルレイアウト |
| SM (Tablet) | >= 768px | タブレットレイアウト |
| MD (Desktop) | >= 992px | デスクトップレイアウト |
| LG (Large) | >= 1200px | 大画面レイアウト |

### タッチターゲット

- 最小サイズ: Bootstrap デフォルト（明示的な 44px 指定なし）

### フォントサイズの調整

- モバイルでは Bootstrap のレスポンシブグリッドで列を折り返し
- フォントサイズの明示的なレスポンシブ変更は確認されていない

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue: #109ceb（リンク、ヒーロー背景、ラベル）
Brand Brown: #221815（ヘッダー背景、CTA ボタン背景）
CTA Border: #008cc1
Orange Accent: #f79b30（New バッジ）
Text Primary: #373a3c
Text Dark: #333333
Text Light: #fafafa（ダーク背景上）
Text Muted: #888888（フッター）
Background: #ffffff
Footer Background: #f4f4f4
Border: #cccccc

Font: メイリオ, Meiryo, "Hiragino Kaku Gothic Pro",
  "ヒラギノ角ゴ Pro W3", 游ゴシック体, "Yu Gothic", YuGothic,
  "ＭＳ Ｐゴシック", Helvetica, sans-serif

Body Size: 14px / line-height: 1.3 / letter-spacing: normal
Heading: font-weight: 500 / line-height: 1.3
Container: 1170px (Bootstrap 3.x)
```

### プロンプト例

```
スタジオジブリ公式サイトのデザインに従って、ニュース一覧ページを作成してください。
- フォント: メイリオ, Meiryo, "Hiragino Kaku Gothic Pro",
    "ヒラギノ角ゴ Pro W3", 游ゴシック体, "Yu Gothic", YuGothic,
    "ＭＳ Ｐゴシック", Helvetica, sans-serif
- テキスト色: #373a3c
- ヘッダー背景: #221815、テキスト: #fafafa
- CTA ボタン: 背景 #221815、ボーダー #008cc1、角丸 7px
- New ラベル: 背景 #f79b30（オレンジ）
- リンク色: #109ceb
- ページ背景: #ffffff、フッター背景: #f4f4f4
- 本文: 14px, line-height: 1.3, letter-spacing: normal
- 見出し: font-weight: 500, line-height: 1.3
- Bootstrap 3.x のグリッドシステム（container 1170px）
```
