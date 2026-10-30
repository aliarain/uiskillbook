# DESIGN.md — Dandelion Chocolate（ダンデライオン・チョコレート）

> Dandelion Chocolate 公式オンラインストア（https://dandelionchocolate.jp/）のデザイン仕様書。
> 2010年サンフランシスコ創業の Bean to Bar チョコレート専門店。2016年に蔵前に日本1号店をオープン。
> シングルオリジンのカカオ豆ときび糖のみを使用した手作りチョコレート。Shopify ベースのサイト。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **明朝体全面使用**のクラフト・高級路線。ウォームクリーム背景 `#fffdf9` にゴールド CTA `#e2c465` を配し、Bean to Bar の手仕事感と上質さを両立する
- **密度**: 余白を大きく取ったメディア寄りのレイアウト。Shopify テーマをベースに、情報密度は低め。写真とテキストのリズムでストーリーを語る構成
- **キーワード**: 明朝体、ウォームクリーム、ゴールド CTA、pill ボタン、全ウェイト 400、ダークチャコール、クラフト感
- **特徴**:
  - **游明朝体を全面使用**: 本文・見出し・ナビすべてに游明朝体を適用。ゴシック体は使わない。Caslon を欧文見出し用に併用
  - **ウォームクリーム背景 `#fffdf9`**: 純白ではなく温かみのあるクリーム色。チョコレートの温もりとクラフト感を演出
  - **ゴールド CTA `#e2c465`**: ブランドの象徴色。チョコレートパッケージの箔押しと呼応するリッチなゴールド
  - **全ウェイト 400**: bold を一切使用しない。明朝体の細い線がエレガントさを担保
  - **テキスト色 `rgba(0,0,0,0.75)`**: 純黒ではなく 75% 不透明。柔らかく落ち着いた印象
  - **letter-spacing 一律 0.0375em（本文）/ 0.06em（見出し）**: サイズ比でほぼ統一した字間設定
  - **pill CTA（border-radius 41px）**: ゴールド背景またはクリーム背景のピル形状ボタン
  - **ダークチャコール `#33383c`**: ヘッダー・フッターに使用。チョコレートの焙煎を連想させる暗色
  - **font-feature-settings: normal**（palt 未使用）
  - ライトモード前提（ダーク切替なし）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> Dandelion Chocolate は**ウォームクリーム + ゴールド + ダークチャコール**の三層構造。

### Brand

- **Brand Gold** (`#e2c465`): プライマリ CTA、アナウンスメントバーのアクセント。チョコレートの箔押しパッケージを想起させるゴールド（rgb(226, 196, 101)、出現 11 回）
- **Gold Hover** (`#ecc15e`): ホバー時のゴールド変化色（rgb(236, 193, 94)）
- **Gold Dark** (`#947f4a`): セカンダリ CTA テキスト。ゴールドのダーク変種（rgb(148, 127, 74)）

### Surface（背景）

- **Page Background** (`#fffdf9`): ページ全体のウォームクリーム。最頻出色（28 回）。純白ではなく温かみを帯びたオフホワイト
- **Light Surface** (`#f7f5f1`): 目次エリア、セカンダリ CTA 背景。ページ背景よりわずかに暗いクリーム（21 回）
- **Subtle Gray** (`#f0f0f0` / `#f0f2f3`): 補助面。区切り・背景のバリエーション
- **Dark Surface** (`#33383c`): ヘッダー・フッター。チョコレートカラーに近いダークチャコール（16 回）

### Text / Foreground

- **Text Primary** (`rgba(0,0,0,0.75)` ≈ `#404040`): 本文テキスト。純黒の 75% 不透明で柔らかい印象
- **Text Strong** (`#121212`): 見出し。ほぼ黒だがわずかに浮かせた色
- **Text Dark** (`#333333`): ナビ項目・CTA テキスト
- **Text Inverse** (`#ffffff`): ダーク背景上の白文字（ヘッダーロゴ、h1 等）
- **Text Black** (`#000000`): アナウンスメントバー、スキップリンク

### Border / Divider

- **Subtle Border**: 明示的なボーダーは最小限。面色の切り替えで区切りを表現
- **Input Border**: Shopify フォーム要素のデフォルトスタイルに準拠

### Semantic（補完）

- 実 UI にエラー・成功・警告色の表面化は確認できない（EC の商品一覧中心のページ）
- アラートを追加する場合は Danger `#c0392b` / Success `#27ae60` / Warning `#d4a843` を**ゴールドトーンに寄せた暖色系**で統一

---

## 3. Typography Rules

### 3.1 和文フォント

Dandelion Chocolate は**明朝体を全面使用**する。ゴシック体は使わない。

- **明朝体**: 游明朝体, YuMincho, "游明朝 Medium", "Yu Mincho Medium", 游明朝, "Yu Mincho"
- **フォールバック**: `serif`

> Note: Shopify の CSS 変数では `--font-body-family: Montserrat, sans-serif` / `--font-heading-family: Garamond, Baskerville, Caslon, serif` が定義されているが、実際の computed style では游明朝体が優先的に適用されている。

### 3.2 欧文フォント

- **セリフ**: **Caslon** — 見出し（h1, h2 の英語タイトル "ABOUT" 等）に游明朝体の前に追加。クラシカルなオールドスタイルセリフ
- Shopify 変数由来の Garamond, Baskerville もフォールバックとして定義あり
- **サンセリフ / 等幅**: 該当なし

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・ナビ・p */
font-family: 游明朝体, YuMincho, "游明朝 Medium", "Yu Mincho Medium",
  游明朝, "Yu Mincho", serif;

/* 欧文見出し（h1, h2 英語タイトル） */
font-family: Caslon, 游明朝体, YuMincho, "游明朝 Medium",
  "Yu Mincho Medium", 游明朝, "Yu Mincho", serif;

/* Shopify CSS 変数（実際の適用とは異なる） */
--font-body-family: Montserrat, sans-serif;
--font-heading-family: Garamond, Baskerville, Caslon, serif;
```

**フォールバックの考え方**:
- 和文フォントを最優先 — 游明朝体の書体イメージがブランドの核
- 欧文見出しのみ Caslon を前置 — 英語タイトル "ABOUT" "STORY" 等で Caslon のクラシカルな字形を活かす
- AI で再現する場合:
  - 本文: `"Yu Mincho Medium", "Yu Mincho", "Hiragino Mincho ProN", serif` に簡略化
  - 欧文見出し: `Caslon, "Garamond", "Yu Mincho", serif`（Caslon が無い環境では Garamond で代替）
  - preview.html: Google Fonts の **Shippori Mincho** を游明朝の代替として使用

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ + About ページ、2026-05-08 取得）

| Role | Family | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|--------|------|--------|-------------|----------------|-------|------|
| Display (h2) | Caslon + 游明朝 | **40px** | 400 | 52px (x1.3) | 2.4px (0.06em) | `#ffffff` | About ページの大見出し |
| Heading 1 (h1) | Caslon + 游明朝 | **20px** | 400 | 26px (x1.3) | 1.2px (0.06em) | `#ffffff` | ダークヘッダー上のロゴ・タイトル |
| Heading 2 (h2) | 游明朝 or Caslon+游明朝 | **24px** | 400 | 31.2px (x1.3) | 1.44px (0.06em) | `#121212` | セクション見出し |
| Heading 3 (h3) | 游明朝 | **18px** | 400 | 23.4px (x1.3) | 0.6px (0.033em) | `#000000` | サブセクション見出し |
| Product Title (h3) | 游明朝 | **13px** | 400 | 16.9px (x1.3) | — | `#333333` | 商品カードタイトル |
| Body (p) | 游明朝 | **14px** | 400 | 25.2px (x1.8) | 0.6px (0.043em) | `rgba(18,18,18,0.75)` | 本文・説明文 |
| Body Large | 游明朝 | **16px** | 400 | 28.8px (x1.8) | 0.6px (0.0375em) | `rgba(0,0,0,0.75)` | body 基本サイズ |
| Nav Link (a) | 游明朝 | **15px** | 400 | — | 1px (0.067em) | `#333333` | ナビゲーション |
| Caption (span) | 游明朝 | **12px** | 400 | — | 0.6px (0.05em) | `#000000` | アナウンスメントバー |
| Input | 游明朝 | **16px** | 400 | — | 0.4px (0.025em) | — | フォーム入力欄 |

### 3.5 行間・字間

- **本文の行間**: **1.8**（25.2 / 14 = 1.8, 28.8 / 16 = 1.8）— 明朝体の可読性を最大化する広めの行間
- **見出しの行間**: **1.3**（h2: 31.2 / 24 = 1.3, h3: 23.4 / 18 = 1.3）— タイトで引き締まった見出し
- **本文の字間**: **0.0375em**（16px 本文で 0.6px）— 明朝体に適度な空気感を与える
- **見出しの字間**: **0.06em**（h2: 24px で 1.44px）— 本文より広めに取り、ゆったりとした印象

**ガイドライン**:
- 明朝体で line-height 1.8 は日本語明朝体としては広め。長文の読みやすさを重視
- 見出しの 1.3 との落差が大きく、本文とのリズムの対比が効いている
- letter-spacing はサイズ比でほぼ統一（0.0375em〜0.06em）。見出しをやや広く取る設計

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- 商品名・カカオ産地名は改行位置に注意（"ベリーズ・トレド" 等を途中で折らない）
- Shopify テーマのデフォルト設定に準拠

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt / kern を有効化していない** — 游明朝体のデフォルトメトリクスをそのまま使用
- 明朝体の約物（「」（）等）は全角のまま配置。クラフト感のある素朴な組を選択

### 3.8 縦書き

- 該当なし。横書きのみ
- パッケージやショップの什器では縦書きも見られるが、Web UI は横書き統一

---

## 4. Component Stylings

### Buttons

Dandelion Chocolate の CTA は**ゴールド pill** と**クリーム pill** の 2 パターン。

**Primary CTA（ゴールド pill: "お買い物はこちら" "注文する" "オンラインストアへ" 等）**
- Background: `#e2c465`（Brand Gold）
- Text: `#333333` または `#000000`
- Border: なし
- Padding: `0px 30px`
- Border Radius: **`41px`**（pill 形状）
- Font: 游明朝 / weight 400 / letter-spacing 0.6px
- Hover: background `#ecc15e`（Gold Hover）

**Secondary CTA（クリーム pill: "もっと詳しく" "Bean to Bar とは?" 等）**
- Background: `#f7f5f1`（Light Surface）
- Text: `#947f4a`（Gold Dark）
- Border: なし
- Padding: `0px 30px`
- Border Radius: **`41px`**（pill 形状）
- Font: 游明朝 / weight 400
- Hover: background `#f0ece5`（推奨 — やや暗いクリーム）

**Cart Add CTA（クリーム pill）**
- Background: `#f7f5f1`
- Text: `#947f4a`
- Border Radius: `41px`
- Padding: `8px`

### Inputs

- Background: `#ffffff`
- Border: Shopify デフォルト（`1px solid #d0d0d0` 推奨）
- Border (focus): `1px solid #e2c465`（Brand Gold）
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: 游明朝 16px / weight 400 / letter-spacing 0.4px
- Color: `#121212`

### Cards / Product Cards

商品一覧の商品カード:

- Background: `#fffdf9`（Page Background と同色）
- Border: なし
- Border Radius: `0px`
- Padding: 16px
- Shadow: なし（フラット）
- 構造:
  - 商品画像（正方形。チョコレートバーのパッケージ写真）
  - 商品名（h3: 13px / weight 400 / `#333333`）
  - 価格（14px / `rgba(18,18,18,0.75)`）

### Header / Nav

- Background: `#33383c`（Dark Surface — ダークチャコール）
- Color: `#ffffff`（白文字）
- Logo: 中央寄せ、白文字
- ナビ項目: 15px / weight 400 / `#333333`（ドロップダウン時は白背景に暗色文字）
- letter-spacing: 1px (0.067em)

### Footer

- Background: `#33383c`（Dark Surface）
- Color: `#ffffff`
- フッターリンク: 游明朝 14px / weight 400
- 構造: ブランドストーリーへのリンク、SNS アイコン、コピーライト

### Announcement Bar

- Background: `#e2c465`（Brand Gold）または `#33383c`（Dark Surface）
- Text: `#000000` または `#ffffff`
- Font: 12px / letter-spacing 0.6px

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白、最小間隔 |
| S | 8px | カード内要素間 |
| M | 16px | 段落間、カード内パディング |
| L | 24px | セクション内余白 |
| XL | 48px | セクション間 |
| XXL | 80px | ヒーロー〜コンテンツ間 |

### Container

- Max Width: 1200px（Shopify テーマ標準）
- Padding (horizontal): mobile 16px / desktop 32px

### Grid

- 商品カード: 2 カラム（mobile）→ 3 カラム（tablet）→ 4 カラム（desktop）
- Gutter: 16〜24px
- About ページ等のストーリーセクション: 1 カラム、中央揃え、max-width 720px

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | カード・画像・コンテナ |
| Small | 4px | 入力欄 |
| Pill | **41px** | CTA ボタン全般 |

- 原則 0px。**CTA だけ大きな pill (41px)** でゴールドの丸みを活かす

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・写真・パネル（基本フラット） |
| 1 | `none` | Shopify のデフォルト shadow は無効化 |

- Dandelion Chocolate は**影を使わない**。フラットな面色の切り替え（`#fffdf9` → `#f7f5f1` → `#33383c`）で視覚階層を構築
- ホバー演出は背景色の微変化（ゴールドの明度変化）のみ
- 商品カードは影なし・枠線なし。余白とテキストの階層で区切る

---

## 7. Do's and Don'ts

### Do（推奨）

- **全体に明朝体（游明朝体）を使う** — ゴシック体は使わない。Dandelion Chocolate のクラフト感の核
- **背景は `#fffdf9`（ウォームクリーム）** — 純白 `#ffffff` は使わない。温かみが失われる
- **CTA はゴールド `#e2c465` の pill（border-radius 41px）** — ブランドの象徴色
- **セカンダリ CTA は `#f7f5f1` 背景 + `#947f4a` テキスト（ダークゴールド）** の pill
- **テキスト色は `rgba(0,0,0,0.75)`** — 純黒ではなく 75% 不透明で柔らかく
- **見出しの letter-spacing は 0.06em、本文は 0.0375em** — サイズ比でほぼ統一
- **本文の line-height は 1.8** — 明朝体の長文読みやすさを確保
- **見出しの line-height は 1.3** — タイトで引き締め、本文との対比を出す
- **ウェイトは全て 400** — bold を使わず明朝の細い線で統一
- **英語見出しには Caslon を font-family の先頭に追加** — "ABOUT" "STORY" 等
- **ヘッダー・フッターは `#33383c`（ダークチャコール）+ 白文字**

### Don't（禁止）

- ゴシック体（游ゴシック、Noto Sans JP 等）を使わない — 明朝体がブランドの根幹
- 純白 `#ffffff` を背景に使わない（`#fffdf9` のウォームクリームを使う）
- 純黒 `#000000` を本文に使わない（`rgba(0,0,0,0.75)` を使う）
- font-weight を 700 や 600 にしない（全て 400）
- font-feature-settings: "palt" を適用しない（normal が Dandelion の選択）
- CTA を角丸矩形（border-radius 4〜8px）にしない（pill 41px）
- 鮮やかなポップカラーを使わない（ゴールド・クリーム・チャコールのトーン内で表現）
- 影・elevation を使わない（フラット + 面色切替の原則）
- letter-spacing を 0 にしない（0.0375em〜0.06em の微かな字間が明朝体に空気感を与える）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 749px | スマホ（Shopify Dawn テーマ標準） |
| Tablet | 750–989px | タブレット |
| Desktop | >= 990px | デスクトップ |

### モバイル時の調整

- Display h2: 40px → 28px（0.7 倍）
- Heading h2: 24px → 20px
- Heading h3: 18px → 16px
- Body: 14px 維持（縮小しない）
- ナビは drawer ハンバーガーへ切り替え
- 商品カードグリッド: 4 → 2 → 1 カラム
- CTA pill のパディングは維持（タップしやすさ確保）

### タッチターゲット

- 最小 44x44px。pill CTA は padding 0px 30px + line-height で 44px 以上を確保

### ダークモード

- **対応なし**。ライトモード固定
- ヘッダー・フッターの `#33383c` が「ダーク的役割」を担う

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Page Background: #fffdf9（ウォームクリーム）
Light Surface: #f7f5f1（セカンダリ面）
Dark Surface: #33383c（ヘッダー・フッター）

Brand Gold: #e2c465（プライマリ CTA）
Gold Hover: #ecc15e（ホバー時）
Gold Dark: #947f4a（セカンダリ CTA テキスト）

Text Primary: rgba(0,0,0,0.75)（本文）
Text Strong: #121212（見出し）
Text Dark: #333333（ナビ・CTA）
Text Inverse: #ffffff（ダーク背景上）

Body Font (明朝): 游明朝体, YuMincho, "游明朝 Medium", "Yu Mincho Medium", 游明朝, "Yu Mincho", serif
Body Web Fallback (簡略): "Yu Mincho Medium", "Yu Mincho", "Hiragino Mincho ProN", serif

English Heading Font: Caslon, 游明朝体, YuMincho, "游明朝 Medium", "Yu Mincho Medium", 游明朝, "Yu Mincho", serif
English Heading Fallback: "Garamond", "Yu Mincho", serif

Display: 40px / Caslon+游明朝 / weight 400 / line-height 1.3 / letter-spacing 0.06em / #ffffff
Heading 2: 24px / 游明朝 or Caslon+游明朝 / weight 400 / line-height 1.3 / letter-spacing 0.06em / #121212
Heading 3: 18px / 游明朝 / weight 400 / line-height 1.3 / letter-spacing 0.033em / #000000
Body: 14px / 游明朝 / weight 400 / line-height 1.8 / letter-spacing 0.043em / rgba(18,18,18,0.75)
Body Large: 16px / 游明朝 / weight 400 / line-height 1.8 / letter-spacing 0.0375em / rgba(0,0,0,0.75)
Product Title: 13px / 游明朝 / weight 400 / line-height 1.3 / #333333
Caption: 12px / 游明朝 / weight 400 / letter-spacing 0.05em / #000000

Primary CTA: #e2c465 bg / #333 text / border-radius 41px (pill) / padding 0 30px
Secondary CTA: #f7f5f1 bg / #947f4a text / border-radius 41px (pill) / padding 0 30px

font-feature-settings: normal（palt 適用なし）
Border Radius: 0px（CTA pill のみ 41px）
Shadow: none（フラット）
```

### プロンプト例

```
Dandelion Chocolate のデザインに従って、チョコレート商品の一覧ページを作成してください。
- 背景: #fffdf9（ウォームクリーム。純白は使わない）
- フォント: "Yu Mincho Medium", "Yu Mincho", "Hiragino Mincho ProN", serif（明朝体のみ。ゴシック体不使用）
- 英語見出し: Caslon, "Garamond", "Yu Mincho", serif
- font-feature-settings: normal（palt は適用しない）
- font-weight: すべて 400（bold 不使用）
- ヘッダー: 背景 #33383c / 白文字 / ロゴ中央
- ページタイトル "CHOCOLATE": 24px / Caslon+游明朝 / weight 400 / line-height 1.3 / letter-spacing 0.06em / color #121212
- 商品カード: 正方形画像 + 商品名 13px #333 + 価格 14px rgba(18,18,18,0.75) / border-radius 0 / 影なし / 背景 #fffdf9
- 商品カードグリッド: 4列（desktop）→ 2列（mobile）
- 本文・説明: 游明朝 14px / weight 400 / line-height 1.8 / letter-spacing 0.6px / color rgba(0,0,0,0.75)
- "お買い物はこちら" CTA: #e2c465 背景 / #333 文字 / border-radius 41px (pill) / padding 0 30px
- "もっと詳しく" セカンダリ CTA: #f7f5f1 背景 / #947f4a 文字 / border-radius 41px (pill)
- フッター: 背景 #33383c（ダークチャコール）+ 白文字
- テキスト色は rgba(0,0,0,0.75)。純黒 #000 は使わない
- 影・グラデーションは一切使わない
- 角丸はすべて 0px（CTA pill のみ 41px）
```
