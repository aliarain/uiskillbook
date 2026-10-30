# DESIGN.md --- GLICO

> GLICO（https://www.glico.com/jp/）のデザイン仕様書。
> 2026-05-21 取得の computed style に基づく。
> 江崎グリコのコーポレートサイト。ポッキー・プリッツ・ビスコ等を擁する日本を代表する菓子メーカー。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表する菓子メーカーのコーポレートサイト。**Glico Red（#f44336）** をブランドカラーとして全面に展開し、pill 型ボタンとウォームクリーム背景（#faf3f0）で親しみやすく温かみのある印象を構成。お菓子ブランドらしい遊び心と、コーポレートサイトとしての信頼感を両立
- **密度**: 商品情報・キャンペーン・企業情報を含むポータル型。セクションごとに背景色を切り替えてリズムを作る
- **キーワード**: Glico Red、pill CTA、ウォームクリーム、游ゴシック、菓子ブランド、親しみやすさ
- **特徴**: **游ゴシック（YuGothic）** を先頭に配したシステムフォントスタック。Web フォントを使わず、OS 標準フォントのみで構成する軽量設計。ボタンは **border-radius 17.5〜20px の pill 型** で統一。2つの赤 **#f44336（Glico Red）** と **#dd3326（Deep Red）** を使い分ける。palt 非適用、letter-spacing も normal で、装飾を排したシンプルな日本語タイポグラフィ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Glico のカラーパレットはお菓子ブランドらしい鮮やかな赤と温かみのあるクリーム背景を軸にした、親しみやすく楽しい構成。

- **Glico Red** (`#f44336`): メインのブランドカラー。CTA ボタン背景・ナビゲーション背景・アクセント要素に使用（rgb 244, 67, 54）。マテリアルデザインの Red 系に近い温かみのある赤
- **Glico Red Deep** (`#dd3326`): ホバー・プレス時のアクセント。より深みのある赤（rgb 221, 51, 38）
- **Pink Tint** (`#f38077`): ライトアクセント。タグ・バッジ等の補助的な赤系色（rgb 243, 128, 119）

### Text

- **Text Primary** (`#000000`): 本文テキスト。純黒を使用
- **Text Secondary** (`#696969`): 見出し（H2〜H4）・補足テキスト（rgb 105, 105, 105）。ダークグレー
- **Text on Red** (`#ffffff`): 赤背景上の白テキスト。ナビゲーション・CTA
- **Text Content** (`#212121`): コンテンツエリアのリンク・テキスト（rgb 33, 33, 33）。ほぼ黒のダークグレー

### Surface

- **Background（ページ背景）** (`#faf3f0`): ウォームクリーム。菓子ブランドらしい温かみのあるベージュ系背景（rgb 250, 243, 240）
- **Body Background** (`#f44336`): body 要素の背景は Glico Red。ページ全体を赤で包み、コンテンツ領域はクリーム背景
- **Section Gray** (`#eeeee8`): セクション区切りのグレー背景（rgb 238, 239, 232）
- **Surface White** (`#ffffff`): カード・商品ブロックの白面
- **Light Gray** (`#f0f0f0`): 補助的な背景（rgb 240, 240, 240）

### Footer

- **Footer Navy** (`#27455c`): フッター背景。深いネイビーブルー（rgb 39, 69, 92）。赤系ブランドカラーとの対比で落ち着きと信頼感を演出

### Border

- **Border** (`#d0d0d0`): 入力欄の枠線・区切り線。ニュートラルグレー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック（YuGothic）--- フォールバックチェーンの先頭に配置。macOS / Windows 標準搭載のため環境非依存
- **レガシーフォールバック**: ヒラギノ角ゴ ProN W3（macOS）、メイリオ（Windows）

### 3.2 欧文フォント

- **サンセリフ**: 游ゴシックの内蔵欧文グリフをそのまま使用。独立した欧文フォントは指定なし
- **セリフ・等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 全テキスト共通 --- 游ゴシックファーストのシステムフォントスタック */
font-family: 游ゴシック, YuGothic,
  "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 先頭の游ゴシック / YuGothic で和欧両方をカバー。日本語サイトとして和文ファーストの設計
- ヒラギノ角ゴ ProN は macOS のフォールバック（ProN 指定で JIS X 0213 対応）
- メイリオは Windows のフォールバック
- Web フォントを使わないため、ページ読み込みが軽量。菓子メーカーサイトとして幅広いデバイスでの表示安定性を重視

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-21 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H1（ロゴ） | 15px | 700 | --- | normal | ヘッダー内ロゴテキスト |
| H2（セクション） | 16px | 700 | 1.5 (24px) | normal | セクション見出し。color: #696969 |
| H3 | 16px | 700 | 1.3 (20.8px) | normal | 小見出し。color: #696969 |
| H4 | 14px | 700 | 1.5 (21px) | normal | 補助見出し。color: #696969 |
| Body | 15px | 400 | 1.7 (25.5px) | normal | 本文テキスト。color: #000000 |
| Nav | 15px | 700 | --- | normal | ナビリンク。color: #ffffff（赤背景上） |
| A（コンテンツ） | 15px | 400 | --- | normal | コンテンツリンク。color: #212121 |

**ウェイトの特徴**:
- 見出し（H2〜H4）とナビゲーションは **weight: 700**、本文は **weight: 400** の二段構成
- 見出しのサイズが比較的小さめ（16px）で、ウェイトの差でコントラストを作る設計
- 見出しの色は **#696969（ダークグレー）** で、本文の **#000000（黒）** よりトーンを落とし柔らかい印象

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.7`（25.5px / 15px）--- 日本語として広めの行間で可読性が高い
- **見出し（H2）の行間**: `line-height: 1.5`（24px / 16px）--- 本文よりやや詰めた行間
- **見出し（H3）の行間**: `line-height: 1.3`（20.8px / 16px）--- 小見出しはよりコンパクト
- **本文の字間**: `letter-spacing: normal`（0）--- カスタム字間なし
- **見出しの字間**: `letter-spacing: normal`（0）--- こちらもカスタム字間なし

**ガイドライン**:
- letter-spacing は**全要素 normal**。palt も非適用で、游ゴシックのデフォルト字間をそのまま使う設計
- line-height は本文 1.7 / 見出し 1.3〜1.5 の**段階構成**
- 本文の line-height 1.7 は日本語サイトとして読みやすく、菓子メーカーサイトの親しみやすさに寄与

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長いURL・商品名の折り返し */
```

- 日本語固有の禁則処理は特別な設定なし。ブラウザデフォルトに従う
- 商品名・キャンペーン名に日本語と英語が混在するため、overflow-wrap の設定が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。游ゴシックのデフォルト字間をそのまま使用
- **kern**: ブラウザデフォルトに委ねる
- 装飾的な字詰めを排し、可読性を優先するシンプルな設計

### 3.8 縦書き

- 該当なし。Glico コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill 型・赤塗りつぶし）**

Glico の CTA は **Glico Red 塗りつぶし + pill 型** が基本。

- Background: `#f44336`
- Text: `#ffffff`
- Border Radius: **17.5px**（pill 型）
- Padding: `8px 24px`
- Font Size: 15px
- Font Weight: 700

**Secondary（pill 型・白背景）**

- Background: `#ffffff`
- Text: `#212121`
- Border Radius: **20px**（pill 型）
- Padding: `8px 24px`

**Category Tab（透明背景）**

- Background: `transparent`
- Text: `#f44336`
- Border Radius: **4px**
- Padding: `4px 12px`
- Font Size: 14px

**ボタンの考え方**:
- CTA は **pill 型（border-radius 17.5〜20px）** で統一。KIRIN ほど極端な pill 値（92〜1440px）ではないが、角丸ではなく pill 寄りの形状
- Primary CTA は **#f44336 塗りつぶし + 白テキスト**
- カテゴリタブのみ radius 4px の角丸で、コンテンツナビゲーションとしての控えめな存在感

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#d0d0d0`
- Border (focus): 2px solid `#f44336`
- Border Radius: 4px
- Padding: `8px 12px`
- Font Size: 15px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 8px
- Padding: 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.1)` --- 軽いシャドウでカードの浮き感を演出

### Navigation

- Background: `#f44336`（Glico Red）
- Link Color: `#ffffff`
- Link Weight: 700
- Link Size: 15px

### Footer

- Background: `#27455c`（Navy）
- Text Color: `#ffffff`

---

## 5. Layout Principles

### Spacing Scale

実測値に基づく推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | タグ・バッジの縦 padding |
| S | 8px | ボタンの縦 padding、入力欄 padding |
| M | 16px | カード内 padding |
| L | 24px | ボタンの横 padding、セクション間の小余白 |
| XL | 48px | ヘッダー横 padding、セクション間余白 |
| XXL | 64px | セクション上下 padding |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): `48px`
- セクション間の区切り: 背景色の切り替え（クリーム → グレー → 白）で視覚的に分離

### Grid

- 商品グリッド: デスクトップで 3〜4 カラム
- カードグリッド: デスクトップで 3 カラム
- セクションは全幅背景 + コンテンツ幅制約の二層構造

---

## 6. Depth & Elevation

Glico は背景色の温度差とカードシャドウで階層を構成する。

| Level | 表現 | 用途 |
|-------|------|------|
| 0 | `background: #faf3f0` | ページ背景（ウォームクリーム） |
| 1 | `background: #ffffff` + `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` | カード・商品ブロック |
| 1 | `background: #eeeee8` | セクション区切り背景 |
| 2 | `background: #f44336` | ナビゲーション・ヒーロー |
| 3 | `background: #27455c` | フッター |

- ウォームクリーム背景（#faf3f0）の上に白カード（#ffffff）を浮かせる構成が基本
- シャドウは軽め（`0 2px 8px`）で、お菓子ブランドらしい柔らかい印象
- ナビゲーション（赤）とフッター（ネイビー）が最も強い面として存在

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **游ゴシック → YuGothic → ヒラギノ角ゴ ProN → メイリオ** の順で完全なシステムフォントスタックを指定する
- CTA ボタンは **pill 型（border-radius 17.5〜20px）** にする
- Primary CTA は **#f44336 塗りつぶし + 白テキスト** にする
- ページ背景は **#faf3f0（ウォームクリーム）** にする
- カードは白背景（#ffffff）+ 軽いシャドウで、クリーム背景に対して浮かせる
- 見出し（H2〜H4）は **font-weight: 700 / color: #696969** を使い、本文は **400 / #000000** を使う
- 本文の line-height は **1.7** を使う（日本語として読みやすい行間）
- フッター背景は **#27455c（Navy）** にする
- letter-spacing は **normal** にする（カスタム字間は使わない）
- ナビゲーション背景は **#f44336（Glico Red）** で白テキスト

### Don't（禁止）

- 明朝体・セリフ系フォントを追加しない（ゴシック体構成がブランドの基本）
- ボタンに角丸（4px）やシャープエッジ（0px）を使わない。CTA は pill 型（17.5〜20px）で統一（カテゴリタブのみ 4px は許容）
- ページ背景を純白（#ffffff）にしない（ウォームクリーム #faf3f0 がブランドの基本）
- 見出しに **#000000（純黒）** を使わない（見出しは #696969。本文のみ #000000）
- `palt`（font-feature-settings: "palt"）を適用しない（normal がデフォルト設計）
- letter-spacing にカスタム値を設定しない（全要素 normal）
- フッターに赤（#f44336）を使わない（フッターは #27455c ネイビー。赤はナビゲーション・CTA 用）
- Web フォントを追加しない（システムフォントスタックで統一する設計方針）
- カードにボーダーを追加しない（シャドウで浮き感を出す設計）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | スマートフォン。ハンバーガーナビ化 |
| Tablet | 768〜1023px | タブレット |
| Desktop | >= 1024px | デスクトップ |

### モバイル時の調整

- ヘッダー横 padding（48px）→ 16px に縮小
- 商品グリッドは 1〜2 カラムに折り返し
- pill 型ボタンの形状はモバイルでも維持
- フッターのネイビー背景 #27455c はモバイルでも変更なし
- ナビゲーションの赤背景 #f44336 はモバイルでも変更なし

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- pill 型ボタンは padding `8px 24px` + font-size 15px のため、実質的なタッチ領域は十分

### フォントサイズの調整

- モバイルでは本文 14〜15px、見出しはデスクトップの 80〜90% 程度に縮小
- システムフォントスタックのため、デバイス間で OS 標準フォントにフォールバック

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: GLICO（江崎グリコ）
Origin: 江崎グリコ --- ポッキー・プリッツ・ビスコ等を擁する日本を代表する菓子メーカー
Glico Red: #f44336（ナビ・CTA・アクセント）
Glico Red Deep: #dd3326（ホバー・プレス時）
Pink Tint: #f38077（ライトアクセント）
Text Primary: #000000
Text Secondary: #696969（見出し）
Text Content: #212121（コンテンツリンク）
Background: #faf3f0（ウォームクリーム）
Section Gray: #eeeee8
Surface White: #ffffff
Footer Navy: #27455c
Border: #d0d0d0
Font: 游ゴシック, YuGothic, "ヒラギノ角ゴ ProN W3",
      "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
palt: 非適用（font-feature-settings: normal）
letter-spacing: normal（全要素）
Body: 15px / 400 / line-height 1.7
H2: 16px / 700 / line-height 1.5 / color #696969
H3: 16px / 700 / line-height 1.3 / color #696969
H4: 14px / 700 / line-height 1.5 / color #696969
Nav: 15px / 700 / color #ffffff on #f44336
CTA Style: bg #f44336 / text #fff / radius 17.5px (pill) / padding 8px 24px
Secondary CTA: bg #fff / text #212121 / radius 20px (pill)
Button Shape: pill 型（17.5〜20px radius）
Shadow: 0 2px 8px rgba(0,0,0,0.1)（カード用）
```

### プロンプト例

```
Glico のデザインシステムに従って、商品一覧ページを作成してください。
- フォント: 游ゴシック, YuGothic, "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
- font-feature-settings: normal（palt は非適用）
- letter-spacing: normal（カスタム字間なし）
- 本文: 15px / line-height: 1.7 / color: #000000
- 見出し: 16px / font-weight: 700 / color: #696969
- ページ背景: #faf3f0（ウォームクリーム）
- CTA「詳しく見る」: bg #f44336 / text #fff / border-radius: 17.5px (pill) / padding: 8px 24px
- ナビゲーション: bg #f44336 / text #fff / font-weight: 700
- フッター: bg #27455c / text #fff
- カード: bg #ffffff / box-shadow: 0 2px 8px rgba(0,0,0,0.1) / border-radius: 8px
- シャドウは軽めで柔らかい印象を維持する
```

### 字詰め・組版の重要ポイント

1. **游ゴシックファースト**: システムフォントスタックの先頭に游ゴシックを配置。Web フォントを使わない軽量設計で、macOS と Windows の両方で高品質な表示を実現。Windows の游ゴシック問題（細く見える）は font-weight で対応
2. **2つの赤の使い分け**: #f44336（Glico Red）はナビゲーション・CTA・アクセント用。#dd3326（Deep Red）はホバー・プレス時のフィードバック用。Pink Tint #f38077 はバッジ・タグ等の軽い強調に
3. **ウォームクリーム背景**: #faf3f0 はお菓子ブランドらしい温かみと親しみやすさを表現。純白 #ffffff はカード面としてクリーム背景に対して浮かせる用途
4. **ネイビーフッター**: #27455c は赤系ブランドカラーとの補色関係で、ページ末尾に落ち着きと信頼感を加える。赤 → クリーム → ネイビーのカラーフローがページ全体のリズム
5. **見出しのトーンダウン**: 見出し色が #696969（ダークグレー）で本文の #000000 より明度が高い。ウェイト 700 との組み合わせで、柔らかいが明確な階層を構成
6. **letter-spacing / palt ともに非適用**: 游ゴシックのデフォルト字間をそのまま使う。字詰めの装飾を排したシンプルな組版

---

**取得日**: 2026-05-21
**出典**: https://www.glico.com/jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
