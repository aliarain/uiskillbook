# DESIGN.md — HASAMI PORCELAIN

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 取得日: 2026-05-08 / 出典: https://www.hasami-porcelain.com/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極限のミニマリズム。タイポグラフィのみでブランドの世界観を構築する建築的アプローチ。装飾要素・カラー・ボタン・シャドウは一切使用しない
- **密度**: 極めて低い。余白を贅沢に使い、写真とテキストだけで構成するデジタルルックブック型
- **キーワード**: モノクローム、建築的、コンデンスド、静謐、プロダクトファースト
- **デザイナー**: 篠本拓宏（HASAMI PORCELAIN のモジュラー食器シリーズをデザイン）
- **サイトの性格**: ポートフォリオ/カタログ型。ECやSaaSではなく、ブランドの世界観を伝えるショーケース

---

## 2. Color Palette & Roles

完全なモノクロームパレット。ブランドカラー・アクセントカラーは存在しない。

### Primary（ブランドカラー）

- **Primary** (`#000000`): 純黒。テキスト・ナビゲーション・すべてのUI要素に使用。ブランドカラーそのものが黒
- **Primary Dark**: 該当なし（黒より暗い色は存在しない）

### Semantic（意味的な色）

該当なし。エラー・警告・成功などのセマンティックカラーはサイト上に存在しない（静的カタログサイトのため）

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 全テキスト。純黒のみ使用
- **Text Secondary**: 該当なし（テキストの濃淡による階層分けを行わない）
- **Border**: 該当なし（visible なボーダーは使用しない）
- **Background** (`#ffffff`): ページ背景。純白
- **Surface** (`#ffffff`): カード等の面。背景と同色

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 太ゴB101（モリサワ）— TypeSquare Webフォントサービス経由で配信。日本語の太ゴシック書体で、力強くも端正な印象
- **フォールバック**: 游ゴシック体, YuGothic, 游ゴシック, Yu Gothic, メイリオ, sans-serif

### 3.2 欧文フォント

- **サンセリフ（コンデンスド）**: UniversLTStd-BoldCn — Adrian Frutiger 設計のスイスモダニズム書体。Bold Condensed バリアントで、凝縮された力強さと端正さを両立
- **Google Fonts 代替**: Roboto Condensed（700 weight）— Univers Bold Condensed に近い凝縮感を再現

### 3.3 font-family 指定

```css
/* 見出し・ナビゲーション（欧文優先） */
font-family: "UniversLTStd-BoldCn", "太ゴB101", "游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;

/* 本文（TypeSquare Webフォント） */
font-family: "太ゴB101", "游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
```

**フォールバックの考え方**:
- 欧文は Univers Bold Condensed を先に指定し、日本語グリフのみ太ゴB101にフォールバック
- 太ゴB101 は TypeSquare 経由の Webフォント。ドメインライセンスのため preview.html では表示不可
- Univers BoldCn も Adobe Fonts / ライセンス制のため、Google Fonts では Roboto Condensed 700 で代替
- 太ゴB101 の代替は Noto Sans JP 700（モリサワ系ではないが、ウェイトと字面が近い）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title | UniversLTStd-BoldCn | 26px | 400 | 1.8 | 0.07em | ページ見出し。font-family 自体が Bold Condensed |
| Large Text | UniversLTStd-BoldCn | 22px | 400 | 1.8 | 0.05em | セクション見出し・404等 |
| Nav Primary | UniversLTStd-BoldCn | 14px | 400 | 1.8 | 0.07em | メインナビゲーション |
| Body JP | 太ゴB101 (TypeSquare) | 13px | 400 | 2.0 | 0.03em | 日本語本文 |
| Nav Sub | UniversLTStd-BoldCn | 12px | 400 | 1.42 | 0.07em | サブナビゲーション |
| Base/Default | — | 12px | 400 | 1.8 | 0.03em | 基本サイズ |
| Subnav/Small | — | 10.2px | 400 | 1.8 | 0.035em | 細部テキスト |
| Copyright | — | 10px | 400 | 1.8 | 0.1em | コピーライト。最も広い字間 |

**重要**: すべてのウェイトが 400 だが、UniversLTStd-BoldCn はフォントファミリー名自体が Bold Condensed バリアントを指定しているため、実際のレンダリングは太い凝縮体になる

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.0（日本語本文。十分な読みやすさを確保）
- **見出しの行間**: 1.8（サイト全体でほぼ統一されたリズム）
- **ナビサブの行間**: 1.42（サブナビゲーションのみやや詰まる）
- **本文の字間 (letter-spacing)**: 0.03em（日本語本文。控えめなトラッキング）
- **見出しの字間**: 0.07em（欧文見出し。広めのトラッキングで建築的な印象）
- **コピーライトの字間**: 0.1em（最も広いトラッキング。サイト下部の小さなテキスト）

**特徴**:
- サイト全体で line-height: 1.8 がほぼ統一値として使われている（本文の 2.0 とナビサブの 1.42 を除く）
- letter-spacing は全テキストに適用されている（0.03em〜0.1em）。字間ゼロのテキストは存在しない
- この広いトラッキングがサイト全体の「建築的な静けさ」を生み出している

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* palt の明示的な適用は確認されていない */
/* Univers Bold Condensed は元々コンデンスド書体のためカーニング調整は不要 */
font-feature-settings: normal;
```

- **palt**: 未適用。太ゴB101 はプロポーショナル字詰めなしで使用
- **kern**: Univers Bold Condensed は元々タイトなスペーシングのため追加カーニング不要

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

該当なし。サイト上にボタンコンポーネントは存在しない。ナビゲーションはすべてテキストリンクで構成

### Text Links（テキストリンク — 事実上の唯一のインタラクティブ要素）

- Color: `#000000`
- Font: UniversLTStd-BoldCn / 太ゴB101
- Text Decoration: none（下線なし）
- Hover: 不明（computed style からは取得不可）

### Inputs

該当なし。フォーム要素は確認されていない

### Cards

該当なし。カードコンポーネントは存在しない。コンテンツは写真とテキストの直接配置

---

## 5. Layout Principles

### Spacing Scale

明示的なスペーシングトークンは存在しない。余白は写真と文字のバランスで決定される、感覚的・建築的なアプローチ

### Container

- Max Width: 不明（フルブリード写真とテキストが混在）
- 全体的に寛大な余白を使用

### Grid

- Columns: 不明（従来のグリッドシステムではなく、写真中心のレイアウト）
- 写真は大きくフルブリードに近い表示、テキストは控えめに配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全要素。シャドウは一切使用しない |

完全にフラットなデザイン。エレベーション・シャドウ・グラデーションは存在しない。奥行きは写真の明暗のみで表現

---

## 7. Do's and Don'ts

### Do（推奨）

- 色は黒と白のみを使用する。グレーも含めない
- letter-spacing をすべてのテキストに適用する（0.03em〜0.1em）
- line-height は 1.8 を基本値とする
- 余白を惜しまず使い、写真に語らせる
- テキストは最小限にとどめ、情報密度を低く保つ
- 見出しにはコンデンスド書体を使い、凝縮感と緊張感を出す

### Don't（禁止）

- カラーを追加しない。アクセントカラーも含め、一切の色彩を使わない
- ボタンコンポーネントを作らない。インタラクションはテキストリンクのみ
- シャドウ・グラデーション・ボーダーを使わない
- テキストの weight を変えない。Univers BoldCn + weight: 400 の組み合わせを守る
- テキストを詰め込まない。1画面に多くの情報を載せない
- 装飾的な要素（アイコン・バッジ・タグ等）を追加しない

---

## 8. Responsive Behavior

### Breakpoints

具体的なブレイクポイント値は抽出データから確認されていない。以下は一般的な推定：

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | テキストサイズを縮小、写真はフルブリード |
| Desktop | > 768px | 基本レイアウト |

### タッチターゲット

- テキストリンクのみのため、リンク周辺に十分なパディングを確保する

### フォントサイズの調整

- Hero Title 26px は小さめのため、モバイルでも大きな縮小は不要
- 基本テキスト 12–13px はモバイルでは 14px 程度に拡大を推奨

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000000 (黒のみ)
Text Color: #000000
Background: #ffffff
Heading Font: "UniversLTStd-BoldCn", "太ゴB101", "游ゴシック体", "YuGothic", sans-serif
Body Font: "太ゴB101", "游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif
Body Size: 13px
Line Height: 1.8 (統一値) / 2.0 (本文)
Letter Spacing: 0.03em–0.07em (全テキスト)
Buttons: なし（テキストリンクのみ）
Shadows: なし
Border: なし
```

### プロンプト例

```
HASAMI PORCELAIN のデザインシステムに従って、商品カタログページを作成してください。
- カラー: 黒(#000000)と白(#ffffff)のみ。グレーも使わない
- 見出しフォント: Roboto Condensed 700（Univers BoldCn 代替）
- 本文フォント: Noto Sans JP（太ゴB101 代替）
- 全テキストに letter-spacing: 0.07em（見出し）/ 0.03em（本文）を適用
- line-height: 1.8 を基本に、本文は 2.0
- ボタンは使用しない。リンクはテキストリンクのみ
- シャドウ・ボーダー・装飾要素は一切使わない
- 余白を贅沢に使い、写真を大きく配置する
```
