# DESIGN.md --- LIXIL

> LIXIL（https://www.lixil.co.jp/）のデザイン仕様書。
> 2026-05-22 取得の computed style に基づく。
> LIXIL は日本最大の住宅設備・建材メーカー。INAX・TOSTEM・サンウエーブ等を統合し、トイレ・キッチン・浴室・窓・エクステリアを包括的に展開する。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 住宅設備の総合メーカーとして、生活者が製品を探しやすい実用的で信頼感のある情報設計。**ウォームクリーム背景（#f9f7f1）** がショールームのような温かみを演出し、**LIXIL Orange（#ef7a00）** のアクセントが要所で誘導を担う。装飾を抑え、製品情報とナビゲーションの明瞭さを最優先にしたコーポレートサイト
- **密度**: 製品カテゴリ・施工事例・ショールーム情報・ニュースを含む情報密度の高いポータル型。カードとボーダーで情報を整理し、余白で呼吸を確保する
- **キーワード**: ウォームクリーム、LIXIL Orange、シャープエッジ CTA、ヒラギノ角ゴ、住宅設備、実用・信頼
- **特徴**: **ヒラギノ角ゴ ProN** を先頭に配したシステムフォントスタック。Web フォントを使わず OS 標準フォントのみで構成。ボタンは **border-radius 0px のシャープエッジ** で統一し、住宅設備メーカーらしい堅実で直線的な印象を構成。palt 非適用、letter-spacing も normal で、装飾を排したシンプルな日本語タイポグラフィ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

LIXIL のカラーパレットは住宅設備メーカーらしい温かみのあるクリーム背景とオレンジのアクセントを軸にした、信頼感と親しみやすさを両立する構成。

- **LIXIL Orange** (`#ef7a00`): メインのブランドカラー。リンク色・アクセント要素に使用（rgb 239, 122, 0）。住宅設備の温もりと活力を表現する鮮やかなオレンジ

### Text

- **Text Primary** (`#4b4949`): 本文テキスト。ブラウニッシュダークグレー（rgb 75, 73, 73）。純黒を避けた柔らかい色調で、温かみのある背景との調和を重視
- **Text Content** (`#454545`): コンテンツリンク・製品ページテキスト（rgb 69, 69, 69）
- **Text on Dark** (`#ffffff`): ナビゲーション・ダーク背景上の白テキスト

### Surface

- **Background（ページ背景）** (`#f9f7f1`): ウォームクリーム。ショールームの壁面を想起させる温かみのあるオフホワイト（rgb 249, 247, 241）
- **Surface White** (`#ffffff`): カード・製品ブロックの白面
- **Section Gray** (`#efefef`): セクション区切りのライトグレー背景（rgb 239, 239, 239）
- **Nav Gray** (`#858384`): ユーティリティナビゲーション背景（rgb 133, 131, 132）

### Border

- **Border Light** (`#e6e6e6`): カテゴリリンクの枠線（rgb 230, 230, 230）
- **Border** (`#cccccc`): 製品カードの枠線・区切り線（rgb 204, 204, 204）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ ProN（Hiragino Kaku Gothic ProN）--- フォールバックチェーンの先頭に配置。macOS 標準搭載のゴシック体
- **レガシーフォールバック**: メイリオ（Windows）、MS Pゴシック（レガシー Windows）

### 3.2 欧文フォント

- **サンセリフ**: ヒラギノ角ゴ ProN の内蔵欧文グリフをそのまま使用。独立した欧文フォントは指定なし
- **セリフ・等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 全テキスト共通 --- ヒラギノ角ゴファーストのシステムフォントスタック */
font-family: "Hiragino Kaku Gothic ProN", Meiryo, "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- 先頭のヒラギノ角ゴ ProN で macOS の表示品質を確保。ProN 指定で JIS X 0213 対応
- メイリオは Windows のフォールバック
- MS Pゴシックはレガシー Windows 向け。古い環境でも崩れない堅実な設計
- Web フォントを使わない軽量設計。住宅設備メーカーとして幅広いデバイス・環境での安定表示を重視
- 游ゴシックを含まないシンプルな 3 フォント構成

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-22 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H2（セクション） | 15.95px | 700 | 1.1〜1.5 | normal | セクション見出し。白背景上は #4b4949、ダーク背景上は #ffffff |
| H3（コンテンツ） | 16px | 700 | 1.35 (21.6px) | normal | コンテンツ小見出し。color: #4b4949 |
| H3（ニュース） | 20px | 400 | 1.4 (28px) | normal | ニュースタイトル。weight 400 の軽い見出し |
| Body | 15.2px | 400 | 1.6 (24.32px) | normal | 本文テキスト。color: #4b4949 |
| P（小） | 12px | 400 | 1.58 (19px) | normal | 補足テキスト・注釈。color: #4b4949 |
| Nav | 13.68px | 400 | 1.1 (15.05px) | normal | ナビリンク。color: #ffffff（グレー背景上） |
| A（リンク） | 15.2px | 400 | --- | normal | コンテンツリンク。color: #ef7a00 |

**ウェイトの特徴**:
- 見出し（H2〜H3）は **weight: 700**、本文・リンク・ナビゲーションは **weight: 400** の二段構成
- ニュースタイトル（H3）が例外的に **weight: 400 / 20px** で、サイズで階層を作るパターン
- テキスト色が一貫して **#4b4949（ブラウニッシュダークグレー）** で統一。純黒を使わないことで温かみのある背景との調和を保つ
- リンク色は **#ef7a00（LIXIL Orange）** でアクセント兼ナビゲーション誘導

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.6`（24.32px / 15.2px）--- 日本語として標準的で読みやすい行間
- **見出し（H3）の行間**: `line-height: 1.35`（21.6px / 16px）--- 本文よりコンパクト
- **ニュース見出しの行間**: `line-height: 1.4`（28px / 20px）
- **ナビゲーションの行間**: `line-height: 1.1`（15.05px / 13.68px）--- タイトな行間
- **本文の字間**: `letter-spacing: normal`（0）--- カスタム字間なし
- **見出しの字間**: `letter-spacing: normal`（0）--- こちらもカスタム字間なし

**ガイドライン**:
- letter-spacing は**全要素 normal**。palt も非適用で、ヒラギノ角ゴのデフォルト字間をそのまま使う設計
- line-height は本文 1.6 / 見出し 1.1〜1.4 の**段階構成**
- 本文の line-height 1.6 は住宅設備の仕様説明等の長い文章でも読みやすい水準

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長いURL・製品型番の折り返し */
```

- 日本語固有の禁則処理は特別な設定なし。ブラウザデフォルトに従う
- 製品型番（例: CW-KB23QA）や品番に英数字が混在するため、overflow-wrap の設定が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。ヒラギノ角ゴのデフォルト字間をそのまま使用
- **kern**: ブラウザデフォルトに委ねる
- 装飾的な字詰めを排し、製品情報の可読性を優先するシンプルな設計

### 3.8 縦書き

- 該当なし。LIXIL コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Category Link（カード型・白背景）**

LIXIL の CTA は **シャープエッジ（border-radius 0px）** が基本。カード型リンクとして製品カテゴリへの導線を構成。

- Background: `#ffffff`
- Text: `#ef7a00`
- Border: 1px solid `#e6e6e6`
- Border Radius: **0px**（シャープエッジ）
- Padding: `0px`（カード型のためテキスト部分は内包要素で制御）

**Nav Button（グレー背景）**

- Background: `#858384`
- Text: `#ffffff`
- Border Radius: **0px**
- Font Size: 13.68px
- Font Weight: 400

**Product Link（ボーダー付き）**

- Background: `#ffffff`
- Text: `#454545`
- Border: 1px solid `#cccccc`
- Border Radius: **0px**

**ボタンの考え方**:
- LIXIL は **pill 型を一切使わない**。すべてのインタラクティブ要素が **border-radius 0px のシャープエッジ** で統一
- 住宅設備メーカーらしい直線的・建築的な印象を構成。窓枠・ドア枠・タイル等の直線を基調とした製品群との一貫性
- CTA の存在感はボーダーと色（#ef7a00 テキスト or #858384 背景）で表現し、形状の装飾に頼らない

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 2px solid `#ef7a00`（推定）
- Border Radius: 0px
- Padding: `8px 12px`
- Font Size: 15.2px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e6e6e6` or `#cccccc`
- Border Radius: 0px
- Padding: 16px
- Shadow: none --- ボーダーで区切る設計。シャドウは使用しない

### Navigation

- **ユーティリティナビ**: Background `#858384`（Gray）/ Link Color `#ffffff` / Size 13.68px / Weight 400
- **コンテンツリンク**: color `#ef7a00`（LIXIL Orange）/ Weight 400

---

## 5. Layout Principles

### Spacing Scale

実測値に基づく推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | インライン余白 |
| S | 8px | カード内パディング（縦） |
| M | 16px | カード内パディング、セクション内小余白 |
| L | 24px | セクション間の小余白 |
| XL | 48px | セクション間余白 |
| XXL | 64px | ページ上下の大余白 |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): `16〜48px`
- セクション間の区切り: 背景色の切り替え（クリーム → グレー → 白）とボーダーで視覚的に分離

### Grid

- 製品カテゴリグリッド: デスクトップで 3〜4 カラム
- ニュースリスト: 1 カラムのリスト形式
- セクションは全幅背景 + コンテンツ幅制約の二層構造

---

## 6. Depth & Elevation

LIXIL はシャドウを使わず、背景色の温度差とボーダーで階層を構成する。建築・住宅設備メーカーらしいフラットで堅実な奥行き表現。

| Level | 表現 | 用途 |
|-------|------|------|
| 0 | `background: #f9f7f1` | ページ背景（ウォームクリーム） |
| 1 | `background: #ffffff` + `border: 1px solid #e6e6e6` | カード・製品ブロック |
| 1 | `background: #efefef` | セクション区切り背景 |
| 2 | `background: #858384` | ユーティリティナビゲーション |

- ウォームクリーム背景（#f9f7f1）の上に白カード（#ffffff）を **ボーダーで区切って** 配置する構成が基本
- **シャドウ（box-shadow）は使用しない**。ボーダー（1px solid）のみで面の区切りを表現
- 建築素材を扱うメーカーとして、素材の質感よりも情報の明瞭さを優先するフラットな設計

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **"Hiragino Kaku Gothic ProN", Meiryo, "MS PGothic", sans-serif** の順で完全なシステムフォントスタックを指定する
- ボタン・カードは **border-radius 0px（シャープエッジ）** にする
- リンク色は **#ef7a00（LIXIL Orange）** にする
- ページ背景は **#f9f7f1（ウォームクリーム）** にする
- カードは白背景（#ffffff）+ ボーダー（1px solid #e6e6e6）で区切る
- テキスト色は **#4b4949（ブラウニッシュダークグレー）** を使い、純黒を避ける
- 本文の line-height は **1.6** を使う（日本語として読みやすい行間）
- letter-spacing は **normal** にする（カスタム字間は使わない）
- ナビゲーション背景は **#858384（Gray）** で白テキスト
- 製品情報の可読性と発見性を最優先にする

### Don't（禁止）

- 明朝体・セリフ系フォントを追加しない（ゴシック体構成がブランドの基本）
- ボタンに pill 型（border-radius 9999px 等）や角丸を使わない。LIXIL は **シャープエッジ（0px）** で統一
- ページ背景を純白（#ffffff）にしない（ウォームクリーム #f9f7f1 がブランドの基本）
- テキストに **#000000（純黒）** を使わない（#4b4949 で統一。温かみのある背景との調和を保つ）
- `palt`（font-feature-settings: "palt"）を適用しない（normal がデフォルト設計）
- letter-spacing にカスタム値を設定しない（全要素 normal）
- カードに box-shadow を追加しない（ボーダーで区切る設計。シャドウは不使用）
- Web フォントを追加しない（システムフォントスタックで統一する設計方針）
- リンク色に青系（#0000ff 等）を使わない（リンクは #ef7a00 オレンジ）
- ナビゲーション背景をブランドオレンジ（#ef7a00）にしない（ナビは #858384 グレー。オレンジはリンク・テキストアクセント用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | スマートフォン。ハンバーガーナビ化 |
| Tablet | 768〜1023px | タブレット |
| Desktop | >= 1024px | デスクトップ |

### モバイル時の調整

- コンテナの横 padding を縮小
- 製品カテゴリグリッドは 1〜2 カラムに折り返し
- シャープエッジのボタン形状はモバイルでも維持
- ナビゲーションのグレー背景 #858384 はモバイルでも変更なし
- ウォームクリーム背景 #f9f7f1 はモバイルでも変更なし

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- カード型リンクはカード全体がタップ領域となるため、タッチターゲットは十分

### フォントサイズの調整

- モバイルでは本文 14〜15px、見出しはデスクトップの 80〜90% 程度に縮小
- システムフォントスタックのため、デバイス間で OS 標準フォントにフォールバック

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: LIXIL（リクシル）
Origin: 日本最大の住宅設備・建材メーカー。INAX・TOSTEM・サンウエーブを統合。トイレ・キッチン・浴室・窓・エクステリア
LIXIL Orange: #ef7a00（リンク・アクセント）
Text Primary: #4b4949（ブラウニッシュダークグレー）
Text Content: #454545（製品ページ）
Text on Dark: #ffffff
Background: #f9f7f1（ウォームクリーム）
Section Gray: #efefef
Surface White: #ffffff
Nav Gray: #858384
Border Light: #e6e6e6
Border: #cccccc
Font: "Hiragino Kaku Gothic ProN", Meiryo, "MS PGothic", sans-serif
palt: 非適用（font-feature-settings: normal）
letter-spacing: normal（全要素）
Body: 15.2px / 400 / line-height 1.6 / color #4b4949
H2: 15.95px / 700 / color #4b4949 or #ffffff
H3: 16px / 700 / line-height 1.35 / color #4b4949
H3 (news): 20px / 400 / line-height 1.4
P (small): 12px / 400 / line-height 1.58
Nav: 13.68px / 400 / color #ffffff on #858384
Link: 15.2px / 400 / color #ef7a00
CTA Style: bg #ffffff / text #ef7a00 / border 1px solid #e6e6e6 / radius 0px (sharp edge)
Button Shape: シャープエッジ（0px radius）
Shadow: なし（ボーダーのみで面を区切る）
```

### プロンプト例

```
LIXIL のデザインシステムに従って、製品一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic ProN", Meiryo, "MS PGothic", sans-serif
- font-feature-settings: normal（palt は非適用）
- letter-spacing: normal（カスタム字間なし）
- 本文: 15.2px / line-height: 1.6 / color: #4b4949
- 見出し: 16px / font-weight: 700 / color: #4b4949
- ページ背景: #f9f7f1（ウォームクリーム）
- リンク色: #ef7a00（LIXIL Orange）
- ナビゲーション: bg #858384 / text #fff / font-size: 13.68px
- カード: bg #ffffff / border: 1px solid #e6e6e6 / border-radius: 0px
- ボタン: border-radius: 0px（シャープエッジ）
- シャドウは使用しない。ボーダーのみで面を区切る
```

### 字詰め・組版の重要ポイント

1. **ヒラギノ角ゴファースト**: システムフォントスタックの先頭にヒラギノ角ゴ ProN を配置。游ゴシックを含まないシンプルな 3 フォント構成（ヒラギノ → メイリオ → MS Pゴシック）で、macOS と Windows の両方をカバー
2. **シャープエッジの一貫性**: すべてのボタン・カード・入力欄が border-radius 0px。住宅設備メーカーとして、窓枠・ドア枠・タイル等の直線を基調とした製品群と一貫した、建築的な直線美
3. **純黒を避けたテキスト色**: #4b4949 はブラウニッシュな暗灰色で、ウォームクリーム背景（#f9f7f1）との温度感が合う。#000000 を使わないことで、住宅カタログのような落ち着いた紙面の印象を再現
4. **オレンジのアクセント使い**: #ef7a00 はナビゲーション背景ではなくリンク・テキストのアクセントとして使用。ナビゲーション背景はグレー（#858384）。オレンジを面で使わずテキストに限定することで、製品写真を引き立てる控えめな色使い
5. **ボーダーで区切るフラットデザイン**: box-shadow を使わず、1px solid のボーダーで面を区切る。建材・住宅設備カタログの製品仕切りを想起させる、実用的で堅実な奥行き表現
6. **letter-spacing / palt ともに非適用**: ヒラギノ角ゴのデフォルト字間をそのまま使う。製品型番・仕様の正確な表示を重視した、装飾を排した組版

---

**取得日**: 2026-05-22
**出典**: https://www.lixil.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
