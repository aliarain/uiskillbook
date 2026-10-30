# DESIGN.md — SAPPORO BEER（サッポロビール）

> サッポロビール（https://www.sapporobeer.jp/）のデザイン仕様書。
> 1876年創業、北海道開拓使麦酒醸造所をルーツとする日本を代表するビールブランド。星のマークが象徴。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景に **スターゴールド `#f3be00`** をアクセントに使った、伝統と親しみやすさを両立するコーポレートサイト。情報密度は高めだが、余白とセクション区切りで整理
- **密度**: body の base font-size が 10px と小さく、コンテンツ密度が高い。line-height は 1.3〜1.9 と用途に応じて変動
- **キーワード**: スターゴールド、YakuHanJP、伝統企業、コーポレート、メガドロップダウン
- **特徴**:
  - フォントスタックの先頭に **YakuHanJP** を配置。句読点を半角幅で表示し、テキストの詰まりを改善する専用フォント
  - ブランドカラーは **`#f3be00`（スターゴールド）**。サッポロビールの星マークの黄金色
  - 赤 `#e51b33` は「重要なお知らせ」専用。ブランドカラーではなく警告色
  - リンク色に `#186cc2`（ブルー）を使用
  - CTA は目立つボタンではなくテキストリンクが中心。コーポレートサイトの控えめな作法
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

| Token | hex | 役割 |
|-------|-----|------|
| Star Gold | `#f3be00` | **ブランドカラー**。スワイパーページネーション、アクセント。出現回数 51 で最多 |

### Functional

| Token | hex | 役割 |
|-------|-----|------|
| Link Blue | `#186cc2` | テキストリンク色 |
| Notice Red | `#e51b33` | 「重要なお知らせ」タイトル。警告・注意喚起 |

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Text Primary | `#333333` | 本文テキスト |
| Text Dark | `#222222` | ナビゲーション・見出し（製品ページ） |
| Text Secondary | `#777777` | キャプション・注釈 |
| Text Muted | `#aaaaaa` | ユーティリティナビリンク |
| Surface Light | `#f1f2f6` | セクション背景（お知らせ、商品情報等） |
| Footer BG | `#f5f6f9` | フッター背景（やや青みのグレー） |
| Dropdown Border | `#e4e5ec` | ナビドロップダウンボーダー |
| Input Border | `#dddddd` | 検索入力ボーダー |
| Select Border | `#cccccc` | セレクトボーダー |
| White | `#ffffff` | ページ背景・カード面 |
| Dark Nav | `#222222` | 検索ボタン背景 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **約物フォント**: **YakuHanJP** — フォントスタックの先頭に配置。句読点（。、「」等）のみ半角幅のグリフを提供し、テキストの詰まりを改善する専用フォント
- **ゴシック体**: **Noto Sans JP** — 実際の文字レンダリングを担当
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **検索ボタン**: `Arial` — 検索ボックスのボタン・アイコンに使用
- フォールバックに **ヒラギノ角ゴ Pro W3**、**游ゴシック**、**メイリオ**、**MS Pゴシック** を含む厚いチェーン

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: YakuHanJP, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", 游ゴシック, メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 検索ボタン */
font-family: Arial;
```

**フォールバックの考え方**:
- YakuHanJP を先頭に置き、約物のみ半角幅で描画。文字本体は次のフォントに委譲
- Noto Sans JP（Web フォント）→ ヒラギノ（macOS）→ 游ゴシック（Windows 10+）→ メイリオ（Windows 旧版）→ MS Pゴシック（レガシー）の順
- 日本語名と英語名を併記するダブル指定で互換性を確保

> **YakuHanJP について**: YakuHanJP は約物（句読点・括弧等）のみを含むWebフォントで、CDN（`https://cdn.jsdelivr.net/npm/yakuhanjp/dist/css/yakuhanjp.min.css`）から読み込む。全角約物を半角幅に置き換えることで、行頭・行末の不自然な空きを改善する。Noto Sans JP と併用するのが一般的。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ／商品一覧ページ、2026-05-09 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Page H1 | 40px | 400 | 52px (×1.3) | normal | `#333333` | "商品カテゴリ一覧" 等のページタイトル |
| Section H2 | 30px | 400 | 39px (×1.3) | normal | `#333333` / `#222222` | "ニュースリリース"、"おすすめブランド" |
| Nav Primary | 15px | 700 | 19.5px (×1.3) | normal | `#222222` | グローバルナビ "商品情報" 等 |
| Nav Secondary | 12px | 700 | 15.6px (×1.3) | normal | `#aaaaaa` / `#222222` | ユーティリティナビ "お客様サポート" |
| Body | 14px | 400 | 24px (×1.71) | normal | `#333333` | 本文テキスト |
| Body (Menu) | 15px | 400 | 19.5px (×1.3) | normal | `#333333` / `#222222` | メニュー・ドロップダウンテキスト |
| Category Title | 14px | 500 | 14px (×1.0) | normal | `#333333` | 商品カテゴリタイトル |
| Notice Title | 14px | 400 | 21px (×1.5) | normal | `#e51b33` | "重要なお知らせ" |
| Caption | 12px | 400 | 22.8px (×1.9) | normal | `#777777` | 注意書き・補足 |
| Dropdown Item | 14px | 400 | 18.2px (×1.3) | normal | `#222222` | メガメニュー項目 |
| Base (body) | 10px | 400 | 19px (×1.9) | normal | `#333333` | body 要素のベースサイズ（小さい） |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.71`（24px / 14px）— 日本語の標準的な広めの行間
- **キャプション (12px)**: `1.9`（22.8px / 12px）— 小さい文字ほど行間が広い
- **body ベース (10px)**: `1.9`（19px / 10px）
- **見出し (30〜40px)**: `1.3`（タイト）
- **ナビ (12〜15px)**: `1.3`（一行高さ）
- **通知タイトル (14px)**: `1.5`

**字間 (letter-spacing)** — 実測:
- **全要素**: `normal`（明示的な letter-spacing 指定なし）
- YakuHanJP による約物の半角化が、結果的に letter-spacing を調整したのと同じ視覚効果を生む

**ガイドライン**:
- サッポロビールは **letter-spacing を一切指定しない**。代わりに YakuHanJP で約物周りの空きを引き締めるアプローチ
- 本文は **line-height 1.7〜1.9** の広めのリズムで、ビール・食品関連の情報を読みやすく提供
- 見出しは **line-height 1.3** で統一し、階層を明確に

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- ドロップダウンメニュー項目は `white-space: nowrap` で折り返し防止

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- **YakuHanJP が palt の代替を果たしている**: 約物のプロポーショナル化を OpenType 機能ではなくフォント置換で実現するアプローチ。`palt` が効かないブラウザや環境でも約物半角化が保証される

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons / Interactive

```css
/* ナビドロップダウンアイテム */
.mega-dropdown a {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  color: #222222;
  background-color: #ffffff;
  border: 1px solid #e4e5ec;
  border-radius: 0px;
  padding: 10px;
}

/* 検索ボタン */
.mf_finder_searchBox_submit {
  font-family: Arial;
  font-size: 16px;
  color: #eeeeee;
  background-color: #222222;
  border-radius: 0px 3px 3px 0px;
  padding: 0px 7.5px;
}
```

- フィル型の主要 CTA ボタンは検出されず。テキストリンクとナビゲーションが主な操作導線
- 検索ボタンのみダーク背景（`#222222`）＋右角丸

### Swiper Pagination

```css
/* アクティブ状態 */
.swiper-pagination-bullet-active {
  background-color: #f3be00; /* スターゴールド */
  border: 1px solid #f3be00;
  border-radius: 50%;
}

/* 非アクティブ */
.swiper-pagination-bullet {
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;
}
```

### Input / Search

```css
/* 検索入力 */
.mf_finder_searchBox_query_input {
  font-size: 10px;
  color: #999999;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  padding: 5px;
}

/* セレクト */
select {
  font-size: 10px;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 3px 0px 0px 3px;
  padding: 5px 15px 5px 5px;
}
```

---

## 5. Layout Principles

### Spacing Scale（推奨 4px / 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | リスト項目間の最小余白 |
| M | 10px | ドロップダウン項目の内側余白 |
| L | 20px | カード内の段落間 |
| XL | 40px | セクション左右パディング |
| XXL | 45px | フッター上部余白 |

### Container

- Max Width: 推奨 `1100px`（実測では明確な固定コンテナ幅は未確認）
- Padding (horizontal): `40px`（パンくずナビの左パディングから推定）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | カード・ドロップダウン・セクション（基本） |
| Small | 3px | 検索ボタン・入力欄 |

角なし（radius 0）が基本。企業サイトらしい直線的なデザイン。

### Structure

- **ヘッダー**: 固定ヘッダー。白背景。メガドロップダウン対応
- **フッター**: 背景 `#f5f6f9`（やや青みのグレー）、上パディング 45px
- **パンくず**: 左右パディング 40px
- **セクション背景**: `#f1f2f6` で区切り。「重要なお知らせ」「商品情報」「キャンペーン」等のセクション
- CSS Custom Properties は使用されていない

---

## 6. Depth & Elevation

- **フラットデザイン基調**: box-shadow は検出されず
- セクション間の区別は背景色（白 / `#f1f2f6` / `#f5f6f9`）で表現
- ドロップダウンはボーダー `#e4e5ec` で区切り

---

## 7. Do's and Don'ts

### Do's ✓

- フォントスタック先頭に YakuHanJP を配置し、約物の半角化を有効にする
- ブランドアクセントとしてスターゴールド `#f3be00` を使う（ページネーション、バッジ等）
- テキストリンク（`#186cc2`）を主要な操作導線にする
- セクション背景 `#f1f2f6` で情報ブロックを区切る
- ナビゲーションは weight 700 で太く、本文は weight 400 で軽く
- フォールバックチェーンにヒラギノ・游ゴシック・メイリオの 3 系統を含める
- 「重要なお知らせ」には赤 `#e51b33` を使う

### Don'ts ✗

- スターゴールド `#f3be00` を CTA ボタンの背景に使わない。あくまでアクセント・インジケーター用
- 赤 `#e51b33` をブランドカラーとして多用しない。警告専用
- 本文テキスト色に純黒 `#000000` を使わない。`#333333` を使う
- pill 型ボタンを使わない。角丸は 3〜4px 程度に抑える
- palt を使わない（YakuHanJP が約物を担当するため不要）
- ナビゲーションのテキストリンク主体のスタイルを崩して大きなボタンを配置しない

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ（メガメニュー表示の分岐点） |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- Page Title H1: 40px → 24〜28px
- Section H2: 30px → 20〜24px
- 本文サイズは 14px を維持（line-height も 1.71 維持）
- ナビはハンバーガーメニュー（"MENU" テキスト＋ドロワー）に変更

### タッチターゲット

- ナビリンク: 高さ 44px 以上を確保
- ドロップダウン項目: padding `10px` で十分なタッチ領域

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Star Gold (Brand Accent): #f3be00
Link Blue: #186cc2
Notice Red (Alert Only): #e51b33
Nav Dark: #222222
Text Primary: #333333
Text Secondary: #777777
Text Muted: #aaaaaa
Surface: #f1f2f6
Footer Surface: #f5f6f9
Input Border: #dddddd
Dropdown Border: #e4e5ec
White: #ffffff

Font: YakuHanJP, "Noto Sans JP", "ヒラギノ角ゴ Pro W3",
  "Hiragino Kaku Gothic Pro", 游ゴシック, メイリオ, Meiryo,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

YakuHanJP CDN: https://cdn.jsdelivr.net/npm/yakuhanjp/dist/css/yakuhanjp.min.css

Body Size: 14px / line-height 1.71 / weight 400 / letter-spacing normal
Heading H1: 40px / line-height 1.3 / weight 400
Heading H2: 30px / line-height 1.3 / weight 400
Caption: 12px / line-height 1.9 / weight 400 / color #777777

Border Radius: 0px（基本）/ 3px（検索フォーム）
Shadow: 基本 none。階層は #f1f2f6 / #f5f6f9 サーフェスで表現
palt: 不使用（YakuHanJP が約物半角化を代替）
```

### プロンプト例

```
サッポロビールのデザインに従って、商品一覧ページを作成してください。
- フォント: YakuHanJP, "Noto Sans JP", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", 游ゴシック, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- YakuHanJP を必ず先頭に置く（約物半角化）
- ページタイトル: 40px / weight 400 / line-height 1.3 / color #333333
- セクション見出し: 30px / weight 400 / line-height 1.3 / color #333333
- 本文: 14px / weight 400 / line-height 1.71 / color #333333
- 補足テキスト: 12px / weight 400 / line-height 1.9 / color #777777
- リンク: color #186cc2 / underline
- ナビリンク: 15px / weight 700 / color #222222
- ブランドアクセント: #f3be00（スターゴールド）をアクティブ状態・ブランド要素に使用
- アラート: #e51b33 を重要なお知らせにのみ使用
- セクション背景: 白 #ffffff と #f1f2f6 を交互に使用
- border-radius は基本 0px（直角）。検索フォームのみ 3px
- box-shadow は基本 none。立体感はサーフェスカラーの切り替えで表現
- ボタンは基本テキストリンク。どうしてもボタンが必要な場合は ghost（border #cccccc / bg transparent）
- 見出しは weight 400（太字にしない）
- letter-spacing は normal（YakuHanJP に任せる）
- font-feature-settings は normal（palt 不使用）
```
