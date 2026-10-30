# DESIGN.md --- GANZO

> GANZO 公式サイト（https://www.ganzo.ne.jp/）のデザイン仕様書。
> 日本最高峰のレザーブランド。コードバン、ブライドルレザーなど最上級の素材を、熟練の職人が仕立てる。
> 「一切の妥協を許さないものづくり」を掲げ、財布・鞄・革小物を展開。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「Rokkitt（スラブセリフ）+ ヒラギノ角ゴ Pro W3 + 温かみのあるブラウングレー」で構成された、革職人の矜持を感じさせるクラフトラグジュアリーサイト**。欧文に Rokkitt（スラブセリフ）を先頭に置き、和文にヒラギノ角ゴ Pro W3 を組み合わせる欧文優先フォントスタック。純白背景に温かみのあるブラウングレー系テキストカラー `#5b5454` を配し、ブライトなアクセント色を一切排除した抑制的な配色。全体に広い letter-spacing（0.04em〜0.2em）を施し、革の経年変化のような静かな品格を表現する
- **密度**: 極めてゆったりとした EC 型。製品写真と余白が主役で、テキストは最小限。革の質感と職人技を前面に押し出す
- **キーワード**: Rokkitt、スラブセリフ、ブラウングレー、Wide Spacing、Sharp Corners、コードバン、クラフト、静謐、抑制
- **特徴**:
  - **Rokkitt スラブセリフが欧文の顔** --- 伝統工芸・クラフトマンシップを想起させるスラブセリフ。EC サイトでは極めて珍しい書体選択
  - **温かみのあるブラウングレーパレット** --- テキスト色 `#5b5454`（R91,G84,B84）は赤みを含む暖色系グレー。純黒も標準的なクールグレーも使わない。革の色味を想起させる配色
  - **広い letter-spacing がブランドシグネチャー** --- ナビ 0.04em、セクションタイトル 0.1em、フッター 0.12em、コピーライト 0.2em と段階的に字間を拡げ、静かなラグジュアリー感を演出
  - **CTA は徹底的に抑制** --- ブライトなアクセント色なし。ボタンも `#ecebeb`（ウォームグレー面）+ `#7b6f6f`（ブラウングレーテキスト）で、製品の存在感を邪魔しない
  - **角丸なし `border-radius: 0px`** --- 全コンポーネントがシャープコーナー。革の裁断・縫製のような精緻さ
  - **コピーライトのブラッシュトーン `#cdbec7`** --- 唯一の彩度を持つ色。革のパティナ（経年美化）を思わせる淡いローズ
  - **font-feature-settings は normal** --- palt 未使用。字間は CSS の letter-spacing のみで制御

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Warm Dark** (`#5b5454`): ブランドのベーステキストカラー。ナビ、フッター、本文リンクに使用。ブラウン系の暖色グレー
- **Brand Dark Chocolate** (`#433b3b`): フォームラベル、チェックボックスに使用。ダークチョコレートの深い茶系グレー
- **Brand Button Dark** (`#282323`): 検索ボタン背景。最も暗いトーン
- **Copyright Rose** (`#cdbec7`): コピーライト年号に使用。パレット唯一の彩度を持つ色。革のパティナを想起させるブラッシュトーン

### Neutral --- Text

- **Text Primary** (`#5b5454`): 本文テキスト・ナビリンク・フッターリンク。赤みのある暖色グレー
- **Text Description** (`#746e6e`): 商品説明文・ボディコピー。やや明るいブラウングレー
- **Text Muted** (`#a19d9d`): フッターキャプション、注釈テキスト
- **Text Button** (`#7b6f6f`): メルマガ送信ボタンの文字色

### Neutral --- Surface & Border

- **Background** (`#ffffff`): ページ背景。純白
- **Surface Utility** (`#f6f5f5`): ヘッダーユーティリティバー背景。ウォームホワイト
- **Surface Button** (`#ecebeb`): メルマガ送信ボタン背景。ウォームグレー面
- **Surface Divider** (`#e7e6e6`): ボーダー・区切り線
- **Border Input** (`#dcdada`): メール入力欄ボーダー
- **Border Checkbox** (`#959191`): チェックボックスボーダー
- **Placeholder** (`#d0cece`): 入力プレースホルダー・検索テキスト
- **Surface Mid** (`#b8b5b5`): スクロールインジケーター

### Semantic

- 実サイトでは明示的な semantic color（danger / warning / success）は確認されていない。EC サイトとしてはカート・エラー画面で使用される可能性があるが、トップページの実測範囲外

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（全テキスト共通）**:
- ヒラギノ角ゴ Pro W3（Hiragino Kaku Gothic Pro）--- macOS 標準ゴシック。GANZO のメイン和文フォント
- メイリオ（Meiryo）--- Windows フォールバック
- Osaka --- レガシー macOS フォールバック
- MS Pゴシック --- レガシー Windows フォールバック

**明朝体**: 未使用

### 3.2 欧文フォント

- **Rokkitt**（Google Fonts。スラブセリフ。本文の先頭。クラフト・伝統・職人を想起させる）
- **HelveticaNeue / Helvetica**（フッターのコピーライト専用で追加される欧文サンセリフ）

### 3.3 font-family 指定

```css
/* 本文・ナビ・商品説明（欧文スラブセリフ優先 → 和文ゴシック） */
font-family: Rokkitt, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, Osaka, "MS Pゴシック", "MS PGothic", sans-serif;

/* h1 商品説明テキスト（Rokkitt なし、和文ゴシックのみ） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, Osaka, "MS Pゴシック", "MS PGothic", sans-serif;

/* フッターコピーライト（欧文サンセリフ追加） */
font-family: HelveticaNeue, Helvetica, 游ゴシック体, "Yu Gothic", YuGothic,
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, Osaka, "MS Pゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- **Rokkitt が欧文の顔** --- スラブセリフの存在感で、欧文テキスト（MAIL MAGAZINE, GANZO 等）にクラフト感を付与
- **h1（商品説明）は Rokkitt を外す** --- 和文主体の長文テキストでは Rokkitt を省き、ヒラギノ角ゴのみで組む
- **フッターは HelveticaNeue を追加** --- コピーライト表記の欧文にニュートラルなサンセリフを使用
- **OS フォールバックを丁寧に設定** --- macOS（ヒラギノ）→ Windows（メイリオ）→ レガシー（Osaka, MS Pゴシック）の3段

### 3.4 文字サイズ・ウェイト階層

実サイトの computed style に基づく。全テキストが weight 400（Regular）で統一されている点が特徴的。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Search Input | Rokkitt + ヒラギノ | 20px | 400 | 2.5 (50px) | 0.1em (2px) | 検索フォーム |
| Section Title | Rokkitt + ヒラギノ | 16px | 400 | 1.0 | 0.1em (1.6px) | MAIL MAGAZINE 等セクション見出し |
| Body / Description | ヒラギノ（Rokkitt なし） | 12px | 400 | 2.17 (26px) | normal | 商品説明本文。極めてゆったりした行間 |
| H1 Subtitle | ヒラギノ（Rokkitt なし） | 12px | 400 | 1.0 | normal | 説明サブタイトル |
| Nav Item | Rokkitt + ヒラギノ | 11px | 400 | 1.45 (16px) | 0.04em (0.44px) | ナビゲーションリンク |
| Mail Submit | Rokkitt + ヒラギノ | 12px | 400 | 1.0 | 0.1em (1.2px) | メルマガ送信ボタン |
| Footer Small | Rokkitt + ヒラギノ | 10px | 400 | 1.75 (17.5px) | 0.12em (1.2px) | フッター小文字 |
| Copyright | HelveticaNeue + ヒラギノ | 10px | 400 | normal | 0.2em (2px) | コピーライト。最も広い字間 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `2.17`（12px に対して 26px）。日本語サイトとしても極めてゆったり。革製品の説明文に呼吸感を与える
- **セクションタイトルの行間**: `1.0`。タイトで引き締まった見出し
- **ナビの行間**: `1.45`
- **フッターの行間**: `1.75`

**字間（letter-spacing）は GANZO のデザインの核心**:
- **ナビ**: `0.04em`（0.44px / 11px）--- 控えめだが確実に拡げている
- **セクションタイトル**: `0.1em`（1.6px / 16px）--- 欧文タイトルに広い字間でラグジュアリー感
- **フッター**: `0.12em`（1.2px / 10px）--- 小さなテキストに広い字間
- **コピーライト**: `0.2em`（2px / 10px）--- 最も広い字間。印章のような格式

**ガイドライン**:
- GANZO の広い letter-spacing は意図的なデザイン判断。安易に詰めない
- weight は全面的に 400 で統一されている。ボールドを使わないことでスラブセリフの書体デザインを活かす
- 本文 line-height 2.17 は通常のウェブサイトより広いが、GANZO の余白感を構成する重要な要素

### 3.6 禁則処理・改行ルール

- 特別な CSS 指定は確認されていない。ブラウザのデフォルト挙動を尊重
- 商品名やコピーは短文で構成されるため、禁則処理が問題になる場面は少ない

### 3.7 OpenType 機能

```css
/* font-feature-settings は全要素で normal（未指定） */
font-feature-settings: normal;
```

- **palt 未使用** --- プロポーショナル字詰めを適用しない
- 字間は CSS の `letter-spacing` のみで制御する設計
- Rokkitt はスラブセリフのため、等幅感が書体の特徴。palt を加えると逆に崩れる

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Primary Submit（メルマガ送信）

実例: メルマガ「送信」ボタン

- 背景: `#ecebeb`（ウォームグレー面）
- 文字色: `#7b6f6f`（ブラウングレー）
- 罫線: なし
- font-family: Rokkitt + ヒラギノ角ゴ
- font-size: 12px / weight 400
- border-radius: `0px`（角丸なし）
- padding: 任意
- letter-spacing: 0.1em

#### Search Submit（検索ボタン）

- 背景: `#282323`（ダークチョコレート）
- 文字色: 白
- 罫線: なし
- border-radius: `0px`
- 最もコントラストの強い CTA だが、それでも暗いブラウン系で抑制的

#### Nav Button

- 背景: `#ffffff`
- 文字色: `#5b5454`（ブランドテキスト）
- 罫線: なし
- font-size: 11px / weight 400
- border-radius: `0px`
- padding: 10px 20px 10px 10px
- letter-spacing: 0.04em
- 非常に控えめ。背景と同化する設計

**特記**: GANZO にはブライトカラーの CTA ボタンが存在しない。製品そのものが主役であり、UIは徹底的に脇役に徹する

### Inputs

#### Search Input

- 背景: transparent
- 文字色: `#5b5454`
- 罫線: なし
- font-size: 20px / weight 400
- line-height: 2.5 (50px)
- letter-spacing: 0.1em (2px)
- placeholder 色: `#d0cece`
- border-radius: `0px`

#### Email Input

- 背景: `#ffffff`
- 文字色: `#5b5454`
- 罫線: `1px solid #dcdada`
- border-radius: `0px`
- padding: 0 10px
- font-size: 12px / weight 400

#### Checkbox

- font-size: 10px / weight 400
- 罫線: `1px solid #959191`
- 文字色: `#433b3b`（ダークチョコレート）
- letter-spacing: 0.12em

### Cards

- 背景: transparent
- 罫線: なし
- 影: なし（フラット）
- 角丸: なし
- 製品写真が主役。テキストは最小限の製品名・価格を配置

---

## 5. Layout Principles

### Spacing Scale

GANZO は CSS カスタムプロパティを使用しない伝統的な静的 CSS で構成されている。実測からの推定値。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の微小余白 |
| S | 10px | ボタンパディング、入力欄内余白 |
| M | 16px | セクション内要素間 |
| L | 32px | セクション間余白 |
| XL | 64px | ページセクション間 |
| XXL | 96px | ヒーロー余白 |

### Container

- レイアウトは中央揃え
- Gutter: 適切な左右余白を確保

### Grid

- 製品カードは均等グリッド配置
- ヒーローはフルブリード画像

### Layout 原則

- **製品写真が絶対的な主役** --- 革の質感・エイジングが伝わる大きな写真
- **テキストは最小限** --- 12px / weight 400 が基本。テキストで語るのではなく、写真で語る
- **広い字間で呼吸感** --- letter-spacing が全体にゆったりとした空気を作る
- **ウォームトーンで統一** --- ブラウングレー系のテキスト色がレザーの温もりを伝える
- **装飾的要素を排除** --- 影もグラデーションもアニメーションも最小限

---

## 6. Depth & Elevation

- **影**: 実サイトでは確認されていない。フラットデザインが基本
- **角丸**: 全コンポーネント `border-radius: 0px`。例外なし
- **ボーダー**: `#e7e6e6`（ウォームグレー）の控えめなセパレーター

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素（ボタン・カード・フォーム） |
| 1 | `0 1px 4px rgba(91,84,84,0.08)` | ホバー効果（推定） |
| 2 | `0 4px 12px rgba(91,84,84,0.10)` | ドロップダウン（推定） |
| 3 | `0 8px 24px rgba(91,84,84,0.12)` | モーダル（推定） |

**注**: 影の rgba は `#5b5454` ベースのウォームトーン。純黒 `rgba(0,0,0,...)` は GANZO の世界観に合わない

---

## 7. Do's and Don'ts

### Do's

- **欧文は Rokkitt（スラブセリフ）を先頭に指定**し、和文はヒラギノ角ゴ Pro W3 にフォールバックさせる
- **letter-spacing を段階的に設定**する --- ナビ 0.04em、タイトル 0.1em、フッター 0.12em、コピーライト 0.2em
- **weight 400 を全面的に使用**する。ボールドは原則使わない
- **CTA は `border-radius: 0px`**（角丸なし）で。革の裁断のようなシャープなエッジ
- **テキスト色は `#5b5454`**（ブラウングレー）を使う。温かみのある色がレザーブランドの世界観を作る
- **説明本文は `line-height: 2.17`** でゆったりと組む。呼吸感のある組版
- **CTA ボタンは `#ecebeb` 背景 + `#7b6f6f` 文字色**で控えめに。派手にしない
- **コピーライトの年号には `#cdbec7`** のブラッシュトーンを使用する
- **製品写真は大きく、余白は十分に**取る。写真が語り、テキストは沈黙する
- **フォントサイズは小さめ**（10px〜12px）を基調とし、検索入力のみ 20px で存在感を出す

### Don'ts

- **ブライトカラーのアクセントを追加しない** --- GANZO のパレットにオレンジ・赤・青は存在しない
- **角丸を付けない** --- `border-radius: 0px` が全コンポーネントの鉄則
- **letter-spacing を 0 にしない** --- 広い字間はブランドアイデンティティの核心
- **weight 700 以上を使わない** --- 全テキスト weight 400 が GANZO の設計
- **palt を追加しない** --- `font-feature-settings: normal` で設計されている
- **テキスト色に純黒 `#000000` やクールグレー `#333333` を使わない** --- `#5b5454` のウォームブラウングレーがブランドの色
- **CTA を目立たせようとしない** --- 製品が主役。UI は脇役に徹する
- **Rokkitt を和文テキストに適用しない** --- 和文主体の長文では Rokkitt を外し、ヒラギノ角ゴのみで組む
- **影を多用しない** --- フラットなデザインが GANZO の世界観。影は革の質感を邪魔する

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <=750px | モバイルレイアウト |
| Tablet | 750--980px | タブレット |
| Desktop | >980px | デスクトップ。フルレイアウト |

### タッチターゲット

- ナビボタンのパディング 10px 20px で最低限のタッチターゲットを確保
- 検索入力の line-height 50px で十分なタッチ領域

### フォントサイズの調整

- 基本フォントサイズが 12px と小さいため、モバイルでは 14px 以上への拡大を推奨
- letter-spacing はモバイルでも維持（ブランドアイデンティティ）

### レイアウトの変化

- 製品グリッド → モバイルで1列
- ナビゲーションはハンバーガーメニューに切替

---

## 9. Agent Prompt Guide

GANZO らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: Rokkitt, "Noto Sans JP", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif
  （※ ヒラギノ角ゴ Pro W3 の代替として Noto Sans JP を先頭に追加）
- 和文本文（長文） font-family: "Noto Sans JP", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif
  （※ 和文主体のテキストでは Rokkitt を外す）
- body に letter-spacing を段階的に設定 --- ナビ 0.04em、タイトル 0.1em、フッター 0.12em
- 本文 font-size: 12px / font-weight: 400 / line-height: 2.17 / letter-spacing: normal
- セクションタイトル font-size: 16px / letter-spacing: 0.1em
- font-feature-settings: normal（palt 未使用）
- テキスト色 #5b5454（ウォームブラウングレー。純黒は使わない）
- テキスト補助色 #746e6e（説明文・ボディコピー）
- 背景色 #ffffff（純白）
- ユーティリティ面色 #f6f5f5（ウォームホワイト）
- CTA は角丸なし: border-radius: 0px / bg: #ecebeb / text: #7b6f6f / letter-spacing: 0.1em
- 検索ボタン: bg: #282323 / text: white / radius: 0px
- フォーム入力: border-radius: 0px / border: 1px solid #dcdada
- 影は使わない（box-shadow: none がデフォルト）
- 角丸は一切なし: border-radius: 0px
- コピーライト年号: color: #cdbec7（ブラッシュトーン）/ letter-spacing: 0.2em
- 製品写真を大きく配置し、テキストは最小限に抑える
```

### フォント代替ガイド

| 実サイト | Google Fonts 代替 | 選定理由 |
|----------|-------------------|----------|
| Rokkitt | Rokkitt | Google Fonts で直接利用可能 |
| ヒラギノ角ゴ Pro W3（macOS 標準） | Noto Sans JP | 最も汎用性が高い和文ゴシック。weight 400 が揃う |
| メイリオ（Windows 標準） | （フォールバック内で使用） | --- |
| HelveticaNeue（フッター） | --- | Noto Sans JP のフォールバックチェーン内で対応 |
