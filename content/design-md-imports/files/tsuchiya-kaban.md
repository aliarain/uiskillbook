# DESIGN.md — 土屋鞄製造所（Tsuchiya Kaban）

> 土屋鞄製造所 公式サイト（https://tsuchiya-kaban.jp/）のデザイン仕様書。
> 1965年創業、ランドセルづくりから始まった日本の革鞄ブランド。
> 「時を超えて愛される、正直なものづくり」を掲げ、熟練の職人による手仕事と上質な素材にこだわる。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「DM Sans + DNP秀英ゴシック銀 + weight 300 + 広い字間」で構成された、革職人の静かな誇りを感じさせるブランドサイト**。欧文に DM Sans（幾何学的サンセリフ）を先頭に置き、和文に DNP秀英ゴシック銀（Adobe Font）を組み合わせる欧文優先フォントスタック。見出しには Adobe Caslon Pro + DNP秀英明朝の明朝セリフ系スタックを別途持つ二重書体システム。全体を weight 300（極細）で統一し、純白 `#ffffff` 背景に `#004b87` の深いネイビーブルーをアクセントに配する
- **密度**: ゆったりとした EC 型。大判の製品写真に呼吸感のある余白を持たせ、テキストは抑制的。革の質感と職人の手仕事を主役に据える
- **キーワード**: DM Sans、DNP秀英ゴシック銀、Weight 300、Tsuchiya Blue、広い字間、Sharp Corners、職人、革、静謐、正直
- **特徴**:
  - **欧文優先の二重書体システム** — 本文は DM Sans → DNP秀英ゴシック銀 → Poppins。見出しは Adobe Caslon Pro → DNP秀英明朝。用途に応じてセリフ/サンセリフを使い分ける
  - **weight 300 で全体を統一** — body, h1, p, nav すべて ultralight。繊細で上品な空気感を作る
  - **letter-spacing 1.6px（0.1em）がグローバル** — body に `letter-spacing: 1.6px` を指定し、広い字間で静けさと高級感を演出。本文テキストのみ 0.02em に絞る
  - **Tsuchiya Blue `#004b87`** — 深いネイビーブルーをブランドカラーとし、CTA ボタン、レビューシステム、アラートバーに使用。鞄の金具や紺色の革を想起させる
  - **Sharp Corners（角丸なし）** — ボタンの `border-radius: 0px` が特徴的。精密な革の裁断・縫製を連想させるシャープな造形。ただしウィッシュリスト系の pill バッジ（12px）は例外
  - **font-feature-settings は normal** — palt 未使用。字間は CSS の letter-spacing のみで制御

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Tsuchiya Blue** (`#004b87`): ブランドカラー。CTA ボタン背景、レビューシステム（星・リンク）、メルマガ登録ボタン、アラートバー背景に使用。出現回数 2 + 関連色多数
- **Tsuchiya Blue Light** (`rgba(0,75,135,0.2)`): ウィッシュリスト系 UI のアクセント面。出現回数 3

### Semantic

- **Danger / Error** (`#990000`): カスタムプロパティ `--text-color-red` で定義。エラーテキスト、バリデーション
- **On-sale** (`#e32c2b`): セール価格表示（`--on-sale-text: 227 44 43`）
- **Success** (`#307a07`): 成功メッセージ（`--success-text: 48 122 7`）
- **Warning** (`#ed8a00`): 警告メッセージ（`--warning-text: 237 138 0`）

### Neutral

- **Text Primary** (`#222222`): 本文テキスト。わずかに柔らかい深いグレー
- **Text Header** (`#1c1c1c`): ヘッダー・ナビゲーション。ほぼ黒に近いが純黒ではない
- **Text Muted** (`rgba(34,34,34,0.6)`): プレースホルダー、無効状態のテキスト
- **Border** (`#cccccc`): フォーム入力欄の罫線（`--border-normal: 1px solid #ccc`）
- **Border Dark** (`#222222`): セカンダリボタンの罫線
- **Background** (`#ffffff`): ページ背景。純白
- **Surface Alt** (`#edebe8`): フッター・インフォメーション領域の温かみのあるライトグレー。出現回数 7
- **Surface Light** (`#f5f5f5`): 軽いグレー面。出現回数 5
- **Surface Warm** (`#fef3e2`): ウィッシュリスト通知の温かいクリーム

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文用）**:
- DNP秀英ゴシック銀（dnp-shuei-gothic-gin-std）— Adobe Font。上品で伝統的なゴシック体。DM Sans の後ろに配置し和文補完として機能

**明朝体（見出し用）**:
- DNP秀英明朝（dnp-shuei-mincho-pr6n）— Adobe Font。見出し専用のカスタムプロパティ `--heading-font-family` で指定

### 3.2 欧文フォント

- **DM Sans**（Google Fonts。幾何学的サンセリフ。本文・UI テキストの先頭）
- **Adobe Caslon Pro**（Adobe Font。オールドスタイルセリフ。見出しの先頭。Shopify の `--heading-font-family` で指定）
- **Poppins**（Google Fonts。幾何学的サンセリフ。フォールバック）
- **Jost**（フォールバック。見出しスタック内）
- **Abel**（サンセリフ。一部ウィッシュリスト UI に使用）

### 3.3 font-family 指定

```css
/* 本文（欧文優先 → 和文ゴシック） */
font-family: "DM Sans", dnp-shuei-gothic-gin-std, Poppins, sans-serif;

/* 見出し（Shopify --heading-font-family） */
font-family: "Adobe Caslon Pro", "dnp-shuei-mincho-pr6n", Jost, sans-serif;

/* メルマガ登録ボタン（和文ゴシック単独） */
font-family: dnp-shuei-gothic-gin-std, serif;

/* 欧文専用（カスタムプロパティ） */
font-family: "DM Sans", sans-serif;  /* --text-font-family-en */
```

**フォールバックの考え方**:
- **欧文優先スタック** — DM Sans を先頭に置き、欧文グリフは幾何学的サンセリフで統一。和文は DNP秀英ゴシック銀に落ちる
- **見出しはセリフ系** — Adobe Caslon Pro + DNP秀英明朝の組み合わせで、本文のサンセリフ体とのコントラストを作る（ただし実測では見出しも DM Sans + ゴシック銀で表示されるケースが多い）
- **Poppins はセーフティネット** — DM Sans が読めない環境での欧文フォールバック

### 3.4 文字サイズ・ウェイト階層

実サイトの computed style に基づく。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title | DM Sans + ゴシック銀 | 38px | 500 | 1.8 | 0.037em (1.4px) | ヒーローセクション大見出し |
| H2 Section | DM Sans + ゴシック銀 | 28px | 700 | 1.8 | 0.057em (1.6px) | セクションタイトル（MAIL MAGAZINE 等） |
| H3 Section | DM Sans + ゴシック銀 | 28px | 500 | 1.29 | 0.05em (1.4px) | コンテンツ見出し（CONTENTS 等） |
| H4 Category | DM Sans + ゴシック銀 | 18px | 500 | 1.8 | 0.078em (1.4px) | カテゴリ見出し（BAGS 等） |
| Hero Subtitle | DM Sans + ゴシック銀 | 26px | 300 | 0.98 | 0.062em (1.6px) | ヒーロー欧文サブタイトル |
| Body JP | DM Sans + ゴシック銀 | 14px | 500 | 1.8 | 0.02em (0.28px) | 和文本文 |
| Body Caption | DM Sans + ゴシック銀 | 14px | 300 | 1.8 | 0.114em (1.6px) | キャプション・価格テキスト |
| Nav Link | DM Sans + ゴシック銀 | 12px | 300 | 2.5 (30px) | 0.133em (1.6px) | ヘッダーナビゲーション |
| Alert | DM Sans + ゴシック銀 | 11px | 400 | 1.8 | normal | アラートバー |
| CTA Button | ゴシック銀, serif | 14px | 600 | 1.0 | normal | メルマガ登録ボタン |
| Product Price | DM Sans + ゴシック銀 | 14px | 300 | 1.8 | 0.114em (1.6px) | 商品価格・ラベル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.8`（14px × 1.8 = 25.2px）。日本語としてはゆったりめ。カスタムプロパティ `--base-line-height: 180%` で定義
- **見出しの行間**: `1.5`（`--heading-line-height: 150%`）。ヒーロー・セクション見出しに適用
- **本文の字間 (letter-spacing)**: `0.02em`（0.28px）。和文本文は控えめな字間
- **グローバルの字間**: `0.1em`（1.6px）。body に `letter-spacing: 1.6px` が指定されており、見出し・キャプション・ナビなど広範囲に継承される。カスタムプロパティ `--base-letter-spacing: .05em` とは異なる実測値
- **ナビの字間**: `0.133em`（12px に対して 1.6px）。小さなテキストに広い字間で開放感を持たせる

**ガイドライン**:
- body の `letter-spacing: 1.6px`（0.1em）は土屋鞄の世界観の核心。安易に詰めない
- 本文（14px / weight 500）のみ `0.02em` で可読性を確保するが、他の要素は 0.1em 前後の広い字間
- ウェイトは 300 が基調だが、本文テキストは 500、セクション見出しは 700、CTA は 600 と用途に応じて使い分ける

### 3.6 禁則処理・改行ルール

- 特別な CSS 指定は確認されていない。ブラウザのデフォルト挙動を尊重
- 商品名やコピーは短文で構成されるため、禁則処理が問題になる場面は少ない

### 3.7 OpenType 機能

```css
/* font-feature-settings は normal（未指定） */
font-feature-settings: normal;
```

- **palt 未使用** — Vermicular や note と異なり、プロポーショナル字詰めを適用しない
- 字間は CSS の `letter-spacing` のみで制御する設計
- DNP秀英ゴシック銀は元々字面が美しいため、palt なしでも整った組版になる

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA（角丸なし）

実例: メルマガ「登録」ボタン

- 背景: `#004b87`（Tsuchiya Blue）
- 文字色: `#ffffff`
- 罫線: なし
- font-family: dnp-shuei-gothic-gin-std, serif
- font-size: 14px / weight 600
- border-radius: `0px`（**角丸なし — 革の裁断のようなシャープさ**）
- padding: 0px 10px
- line-height: 14px

#### Secondary（枠線ボタン）

実例: 「試し読みはこちら」

- 背景: `transparent`
- 文字色: `#222222`
- 罫線: `1px solid #222222`
- font-size: 16px / weight 300
- border-radius: `0px`
- padding: `15px`
- letter-spacing: 1.6px

#### Pill Badge

実例: 「ログインして永久に保存する」

- 背景: `#ffffff`
- 文字色: `#1c1c1c`
- 罫線: `1px solid #1c1c1c`
- font-size: 13px / weight 600
- border-radius: `12px`（pill 型）
- padding: 10px 16px

#### Cart Action

実例: 「カートに移動 +」

- 背景: `transparent`
- 文字色: `#004b87`
- 罫線: `1px solid #004b87`
- font-size: 13px / weight 600
- border-radius: `0px`
- padding: 12px 18px

### Inputs

- 背景: `#ffffff`
- 文字色: `#505050`（Klaviyo フォーム） / `#222222`（Shopify フォーム）
- 罫線: `1px solid #cccccc`
- 罫線（フォーカス時）: `1px solid #004b87`（推定）
- border-radius: `0px`（`--input-border-radius: 0.0rem`）
- padding: `0.65rem 0.8rem`（`--input-padding-block` / `--input-padding-inline`）
- font-family: dnp-shuei-gothic-gin-std, serif（Klaviyo） / DM Sans + ゴシック銀（Shopify）
- font-size: 14px / weight 400

### Cards

- 背景: `transparent`
- 罫線: なし
- 影: なし（フラット）
- 角丸: なし
- 製品写真が主役。テキストは下部に製品名・価格を配置

### Navigation

- 背景: `transparent` → スクロール時固定（`--header-is-sticky: 1`）
- 文字色: `#1c1c1c`
- font-size: 12px（nav リンク） / weight 300
- letter-spacing: 1.6px
- ロゴ「土屋鞄製造所」は h1 / 16px / weight 300

---

## 5. Layout Principles

### Spacing Scale

カスタムプロパティに基づく。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の微小余白 |
| S | 16px (`--fieldset-gap: 1rem`) | フォーム要素間 |
| M | 20px (`--form-gap: 1.25rem`) | フォームグループ間 |
| L | 48px (`--section-stack-gap: 3rem`) | セクション内要素間 |
| XL | 64px (`--section-vertical-spacing: 4rem`) | セクション間余白 |
| XXL | 96px | ページ上部の大きな余白 |

### Container

- Max Width: `100%`（`--container-max-width`）
- 段階的制約:
  - XXS: 27.5rem（440px）
  - XS: 42.5rem（680px）
  - SM: 61.25rem（980px）
  - MD: 71.875rem（1150px）
  - LG: 78.75rem（1260px）
  - XL: 85rem（1360px）
- Gutter: `3rem`（48px）

### Grid

- 製品カードは等幅グリッド
- ヒーローはフルブリード画像 + 中央揃えテキスト
- フッターは `#edebe8` の温かい面色で区切る

### Layout 原則

- **製品写真が主役** — 大きなアスペクト比で革の質感を見せる
- **広い字間で静けさを演出** — 1.6px のグローバル letter-spacing がページ全体にゆったりとした呼吸感を与える
- **セクションは面色で区切る** — `#ffffff` → `#edebe8` → `#004b87` の面色切替
- **Tsuchiya Blue のアクセントは控えめ** — ページ全体はモノトーンで、ブルーは CTA とアラートバーに限定

---

## 6. Depth & Elevation

- **影**: 最小限の使用。カスタムプロパティで定義されるが、実際のコンポーネントではほぼフラット
- **角丸**: CTA ボタン・フォーム入力は `0px`（`--button-border-radius: 0.0rem`）。ウィッシュリスト pill のみ `12px`
- **ウィッシュリストの影**: `rgba(0,0,0,0.2) 0px 0px 25px 0px`（唯一のドロップシャドウ）

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 通常の要素（ボタン・カード・フォーム） |
| 1 | `0 2px 8px rgba(0,0,0,0.05)` | `--shadow-sm`。軽いホバー効果 |
| 2 | `0 5px 15px rgba(0,0,0,0.05)` | `--shadow`。ドロップダウン等 |
| 3 | `0 5px 30px rgba(0,0,0,0.05)` | `--shadow-md`。モーダル |

---

## 7. Do's and Don'ts

### Do's

- **欧文は DM Sans を先頭に指定**し、和文は DNP秀英ゴシック銀にフォールバックさせる
- **body に `letter-spacing: 1.6px`（0.1em）を指定**する。広い字間がブランドの静けさを作る
- **weight 300 を基調**とし、本文は 500、見出しは 500–700、CTA は 600 と段階的に使い分ける
- **CTA ボタンは `border-radius: 0px`**（角丸なし）で。革の裁断を思わせるシャープなエッジ
- **Tsuchiya Blue `#004b87`** を CTA・ブランド要素に限定使用する
- **本文は `line-height: 1.8`**（`--base-line-height: 180%`）でゆったりと組む
- **テキスト色は `#222222`** を使う。純黒ではなく、柔らかい深いグレー
- **フッター・情報セクションは `#edebe8`** の温かみのあるグレーで区切る
- **製品写真は大きく、余白は十分に**取る
- **セカンダリボタンは `1px solid #222222`**（暗い罫線 + 透明背景）で控えめに

### Don'ts

- **CTA 以外に `#004b87` を散らさない** — ブランドブルーは限定的に使うことで価値が出る
- **角丸を安易に付けない** — 0px がデフォルト。pill（12px）はウィッシュリスト系 UI の例外
- **letter-spacing を 0 にしない** — 広い字間はブランドアイデンティティの一部
- **weight 700 以上を多用しない** — 700 は「MAIL MAGAZINE」等の欧文セクション見出しに限定
- **palt を追加しない** — 土屋鞄は `font-feature-settings: normal` で設計されている
- **DNP秀英ゴシック銀を DM Sans より前に置かない** — 欧文優先スタックが設計意図
- **テキスト色に純黒 `#000000` を使わない** — `#222222` または `#1c1c1c` を使う
- **彩度の高いアクセントカラーを追加しない** — パレットは Tsuchiya Blue + ニュートラルグレーの二軸

---

## 8. Responsive Behavior

### Breakpoints

カスタムプロパティの clamp() 関数から推定。

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 750px | スマホ縦。`--container-xs-max-width: 42.5rem` |
| Tablet | 750–980px | タブレット。`--container-sm-max-width: 61.25rem` |
| Desktop | > 980px | デスクトップ。フルレイアウト |

### タッチターゲット

- セカンダリボタンのパディング 15px でタッチターゲットは十分確保
- ナビリンクは `line-height: 30px` + `padding: 0 15px` で 30px 高を確保

### フォントサイズの調整

- 見出し: clamp() 関数で自動スケーリング（例: `clamp(1.375rem, ... , 2rem)`）
- 本文: `--default-text-font-size: 14px` 固定
- グローバル letter-spacing はモバイルでも維持

### レイアウトの変化

- デスクトップの複数列グリッド → モバイルで縦積み
- ヒーロー画像はフルブリード維持
- ナビゲーションはハンバーガーメニューに切替

---

## 9. Agent Prompt Guide

土屋鞄らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: "DM Sans", "Zen Kaku Gothic New", Poppins, sans-serif
  （※ DNP秀英ゴシック銀の代替として Zen Kaku Gothic New を使用）
- 見出し font-family: "Libre Caslon Text", "Shippori Mincho", Jost, serif
  （※ Adobe Caslon Pro の代替として Libre Caslon Text、DNP秀英明朝の代替として Shippori Mincho）
- body に letter-spacing: 1.6px（0.1em）— 広い字間がブランドの静けさ
- 本文 font-size: 14px / font-weight: 500 / line-height: 1.8 / letter-spacing: 0.02em
- 見出し font-weight: 300–700（段階的に使い分け）
- font-feature-settings: normal（palt 未使用）
- ブランドカラー #004b87（Tsuchiya Blue）— CTA・レビューに限定
- テキスト色 #222222（深いグレー。純黒は使わない）
- 背景色 #ffffff（純白）
- フッター・面色 #edebe8（温かいライトグレー）
- CTA は角丸なし: border-radius: 0px / bg: #004b87 / text: white / font-weight: 600
- セカンダリボタン: transparent / border: 1px solid #222222 / radius: 0px / padding: 15px
- フォーム入力: border-radius: 0px / border: 1px solid #cccccc
- 影はほぼ使わない（box-shadow: none がデフォルト）
- 角丸は基本 0px。pill バッジ（12px）は例外
- セクション区切りは面色の切替（白 → #edebe8 → #004b87）
- 製品写真を大きく配置し、余白を十分に取る
```

### フォント代替ガイド

| 実サイト | Google Fonts 代替 | 選定理由 |
|----------|-------------------|----------|
| DM Sans | DM Sans | Google Fonts で直接利用可能 |
| DNP秀英ゴシック銀（Adobe Font） | Zen Kaku Gothic New | 同じく日本の活字文化に根ざしたゴシック体。字面の品格が近い |
| Adobe Caslon Pro（Adobe Font） | Libre Caslon Text | 同じ Caslon 系統のオールドスタイルセリフ |
| DNP秀英明朝（Adobe Font） | Shippori Mincho | 伝統的な明朝体の字形。秀英明朝と同系統の印象 |
| Poppins | Poppins | Google Fonts で直接利用可能 |
| Abel | Abel | Google Fonts で直接利用可能 |
