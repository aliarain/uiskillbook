# DESIGN.md --- BAPE (A Bathing Ape)

> A BATHING APE（https://bape.com/）のデザイン仕様書。
> 1993年にNIGOが原宿で創業した日本発のストリートウェアブランド。カモ柄、エイプヘッドロゴ、シャークフーディーで知られる。Shopify ベースの EC サイト。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 徹底したモノクロームと直線。**border-radius: 0px を全要素に貫徹**し、ストリートウェアの硬質さとブランドの威圧感を表現。色数を極限まで削ぎ落とし、プロダクト（衣服・グラフィック）自体が唯一のカラーアクセントになる設計
- **密度**: ECサイトとしてはテキストが非常に小さく（本文 12px）、情報密度は低め。商品画像を大きく見せ、テキストは最小限のキャプションに留める。余白を贅沢に使うラグジュアリーストリートの文法
- **キーワード**: モノクローム、角型 0px 徹底、12px ミニマルテキスト、Helvetica Neue 欧文優先、ストリートラグジュアリー
- **特徴**:
  - **欧文フォント優先戦略**: `"helveticaneue lt std"` を筆頭に Helvetica Neue 系のバリエーションを並べ、和文は `"Noto Sans JP"` をフォールバックとして後置。ブランドの国際的な立ち位置を font-family の順序で表現
  - **完全モノクローム**: ブランドカラーとしてのアクセント色を持たない。黒 `#000000` / ダークグレー `#323232` / 白 `#ffffff` の3色でUIを構成。ロゴのゴールド `#fecd7a` とブラウン `#693b00` はアイコン内のみに留め、UIには使わない
  - **border-radius: 0px の全面適用**: ボタン、入力欄、カード、バッジ、すべてが角型。pill や角丸は一切使わない。これが BAPE のデジタル上の最大のブランドシグネチャー
  - **12px の極小ベースフォント**: 一般的な EC サイトの 14~16px に対して 12px。テキストを小さく抑えることで、ビジュアル（商品画像・カモ柄）が支配する画面構成を実現
  - **letter-spacing: 0.5px のグローバル適用**: ほぼ全要素に微小なトラッキングを適用。12px の小さな文字でも可読性を確保
  - **ダークモード非対応**（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Black** (`#000000`): メインのブランドカラー。テキスト、ボーダー、ロゴに使用。BAPE にとっての「プライマリカラー」は黒そのもの
- **Dark Gray** (`#323232`): CTA ボタン背景、ナビリンク、フッターテキスト。黒を一段柔らげた UI 用のダーク
- **Footer Dark** (`#1d1d1d`): フッター最下部の背景

### Logo Icon Colors（UI には使用しない）

- **Ape Gold** (`#fecd7a`): エイプヘッドロゴの金色部分
- **Ape Brown** (`#693b00`): エイプヘッドロゴの茶色部分
- **Ape Black** (`#231f20`): エイプヘッドロゴの輪郭

### CTA / Buttons

- **Primary CTA**: 背景 `#323232` / 文字 `#ffffff` / border `1px solid #323232` / radius `0px`（角型）/ padding `13px 15px 14px`
- **Secondary CTA**: 背景 `transparent` / 文字 `#000000` / border `1px solid #000000` / radius `0px`（角型）/ padding `14px 15px 13px`
- **Wishlist CTA**: 背景 `#323232` / 文字 `#ffffff` / radius `0px` / shadow `0 0 25px rgba(0,0,0,0.2)`
- **Cart Badge**: 背景 `#323232` / 文字 `#ffffff` / radius `50%`（唯一の丸要素 --- アイコンバッジのみ例外）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#000000` | (0, 0, 0) | 本文テキスト・見出し |
| Text Secondary | `#323232` | (50, 50, 50) | ナビリンク・フッター・ラベル |
| Text Muted | `#acacac` | (172, 172, 172) | 非活性タブ・プレースホルダー |
| Border | `#000000` | (0, 0, 0) | 検索欄・セカンダリボタンの枠 |
| Border Light | `#e6e6e6` | (230, 230, 230) | ニュースレター入力欄の枠 |
| Background | `#ffffff` | (255, 255, 255) | ページ背景 |
| Footer BG | `#1d1d1d` | (29, 29, 29) | フッター最下部 |
| Search Button BG | `#222222` | (34, 34, 34) | 検索ボタン背景 |

### Semantic（実測未確認・推奨値）

実サイトにはエラー／成功色は表面化していない。EC サイト向けに推奨する補完値:

- **Danger**: `#cc0000` 程度の赤（黒基調に映える鮮やかな赤）
- **Success**: `#2e7d32` 程度のグリーン
- **Warning**: `#e65100` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** をフォールバックとして使用。ブランド側が和文を後方に配置する欧文優先戦略を採用
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Helvetica Neue LT Std** を最優先。Helvetica Neue 系のバリエーション（`helveticaneue`, `helvetica neue`, `helvetica`）を重ねてフォールバック。さらに `Open Sans`, `Arial` を後置
- **セリフ**: 使用しない
- **等幅**: 使用しない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1~h5, p, a, span, button, nav, input） */
font-family: "helveticaneue lt std", helveticaneue, "helvetica neue",
  helvetica, "Open Sans", arial, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**: Helvetica Neue LT Std（Linotype のライセンスフォント）を筆頭に、同系統の欧文フォントを4つ並べる。ブランドの国際性を font-family の順序で表現
- `Open Sans` と `arial` を挟み、最後に `"Noto Sans JP"` で和文を補完
- **和文は Noto Sans JP 一本**。ヒラギノ・游ゴシック等の OS 固有フォントはフォールバックに含めない、割り切った構成

> **代替フォント注記**: Helvetica Neue LT Std はライセンスフォントのため、プレビューや社外資料では表示できない。代替として **Noto Sans JP**（weight 400 / 700）を使用する。Helvetica Neue の冷たくニュートラルな印象を完全に再現することはできないが、Noto Sans JP の端正さは BAPE の整然としたレイアウトと相性がよい（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・検索パネル、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Logo | Helvetica Neue | 24px | 700 | 36px (x1.5) | 0.5px (0.02em) | `#000000` | ブランドロゴ・サイト名 |
| Search Type | Helvetica Neue | 20px | 700 | 26px (x1.3) | 0.5px (0.025em) | `#000000` | 検索パネル内カテゴリ |
| H2 | Helvetica Neue | 18px | 700 | 27px (x1.5) | 0.5px (0.028em) | `#000000` | セクション見出し |
| Account H | Helvetica Neue | 15px | 400 | 15px (x1.0) | 0.5px (0.033em) | `#000000` | アカウントページ見出し |
| Body / P | Helvetica Neue | 12px | 400 | 18px (x1.5) | 0.5px (0.04em) | `#000000` | 本文テキスト |
| Nav Link | Helvetica Neue | 12px | 700 | 18px (x1.5) | 0.5px (0.04em) | `#323232` | グローバルナビ |
| Banner | Helvetica Neue | 10px | 400 | 15px (x1.5) | 0.5px (0.05em) | `#000000` | トップバナー |

### 3.5 行間・字間

**行間 (line-height)** --- 実測:
- **全要素で line-height: 1.5 に統一**。サイズ問わず一貫して 1.5 を適用するシンプルなルール
- 唯一の例外は検索パネル内カテゴリ（20px → line-height 1.3）とアカウント見出し（15px → line-height 1.0）

**字間 (letter-spacing)** --- 実測:
- **全要素で 0.5px に統一**。body に `letter-spacing: 0.5px` を指定し、子要素はすべて継承
- 一部ナビ・ボタン要素で `letter-spacing: normal` に上書きされるケースあり
- em 換算: 12px 本文で 0.04em、18px 見出しで 0.028em、24px ロゴで 0.02em

**ガイドライン**:
- BAPE は **line-height 1.5 / letter-spacing 0.5px のグローバル統一**が特徴。個別要素で変えない
- 12px の小さな文字でも 0.5px のトラッキングと 1.5 の行間で最低限の可読性を確保している

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名・ブランド名は折り返さない: `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* 全要素 */
font-feature-settings: normal;
```

- **palt は使用しない**。Helvetica Neue のメトリクスをそのまま活かす
- **kern も明示的に指定しない**。ブラウザのデフォルト（通常 kern on）に委ねる
- BAPE は欧文優先のため、和文のプロポーショナル字詰めは不要という判断

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ダークグレー・角型）** --- 「ADD TO CART」「SHOP NOW」
- Background: `#323232`
- Text: `#ffffff`
- Border: `1px solid #323232`
- Padding: `13px 15px 14px`
- Border Radius: `0px`（**角型 --- BAPE の全要素で統一**）
- Font: 12px, weight 700, letter-spacing 0.5px
- Transition: opacity（ホバー時）

**Secondary CTA（アウトライン・角型）** --- 「VIEW DETAILS」「ACCOUNT」
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `14px 15px 13px`
- Border Radius: `0px`（角型）
- Font: 12px, weight 700, letter-spacing 0.5px

**Wishlist CTA（ダークグレー・角型）**
- Background: `#323232`
- Text: `#ffffff`
- Border Radius: `0px`
- Shadow: `0 0 25px rgba(0, 0, 0, 0.2)`

### Inputs

**Search (Compact)**
- Background: `#ffffff`
- Border: `1px solid #000000`
- Border Radius: `0px`
- Font Size: `10px`
- Padding: 内部に検索アイコン

**Search (Full)**
- Background: `#ffffff`
- Border: `1px solid #000000`
- Border Radius: `0px`
- Font Size: `15px`
- Height: `44px` 程度

**Newsletter**
- Background: `#ffffff`
- Border: `1px solid #e6e6e6`
- Border Radius: `0px`
- Font Size: `15px`
- Color: `#1d1d1d`

### Cards / Product Tiles

- Background: `#ffffff`
- Border: なし（商品画像がカードの全面を占める）
- Border Radius: `0px`
- Shadow: `none`（基本フラット）
- 商品名: 12px / weight 400 / `#000000`
- 価格: 12px / weight 700 / `#000000`
- 商品画像が主役。テキスト情報は画像下に最小限

### Header

- Background: `#ffffff`（白ヘッダー）
- ロゴ: 左揃え、24px / weight 700 / `#000000`
- ナビリンク: 12px / weight 700 / `#323232`
- 検索・カート・アカウントアイコン: 右揃え
- Cart Badge: `#323232` 背景の丸バッジ（radius 50% --- 唯一の丸要素）

### Footer

- Background: `#1d1d1d`
- Text: `#ffffff` / `#acacac`
- Padding: `48px 24px`
- リンク: 12px / weight 400 / `#ffffff`
- 著作権表示: 10px / `#acacac`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン間の微小余白 |
| S | 8px | テキストとアイコンの間 |
| M | 15px | ボタン内パディング（実測） |
| L | 24px | カード間のガター |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | **全UI要素（ボタン・入力・カード・タブ）** |
| Circle | 50% | カートバッジのみ（アイコンバッジの例外） |

**重要**: BAPE のデザイン言語は **角型（radius 0px）を全面適用**。pill（9999px）、角丸（4px, 8px）は一切使わない。唯一の例外はカートの数量バッジ（丸型アイコン）。

### Grid

- 商品一覧: 2~4カラムグリッド
- Gutter: 16~24px
- 画像アスペクト比: 1:1（正方形）が基本

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素の基本状態（フラット） |
| 1 | `0 0 25px rgba(0, 0, 0, 0.2)` | Wishlist CTA のみ（実測） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.1)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.15)` | モーダル・カート（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`。BAPE は**徹底的にフラット**
- Wishlist CTA にのみ `0 0 25px` の拡散影が適用されている（フローティング要素を示す）
- 立体感は白と黒のコントラストだけで表現。影に頼らないミニマルなデザイン

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **Helvetica Neue 系を欧文として最優先**し、和文は Noto Sans JP をフォールバックに置く。欧文→和文の順序がブランドの国際性を表現する
- **全UI要素を角型（border-radius: 0px）** で統一する。これが BAPE のデジタル上の最大のブランドシグネチャー
- CTAボタンの背景色は **`#323232`（ダークグレー）** を使い、白文字を載せる
- テキストサイズは **12px を基本**とし、テキストの存在感を抑えてビジュアル主体の画面構成にする
- **letter-spacing: 0.5px** を全要素にグローバル適用し、12px でも可読性を保つ
- **line-height: 1.5** を全要素で統一する
- セカンダリCTA は `transparent` 背景 + `1px solid #000000` のアウトラインスタイル
- 商品画像は正方形（1:1）で大きく見せ、テキスト情報は最小限に

### Don't（禁止）

- **border-radius を 0px 以外にしない**（カートバッジの 50% を唯一の例外とする）。pill や角丸はブランドの硬質さを壊す
- **アクセントカラーをUIに使わない**。BAPE は完全モノクローム。ロゴのゴールド `#fecd7a` やブラウン `#693b00` をボタンやリンクに使ってはならない
- **本文フォントサイズを 14px 以上にしない**。12px のミニマルさが BAPE のラグジュアリーストリートの文法
- **和文フォントを font-family の先頭に置かない**。欧文（Helvetica Neue）→和文（Noto Sans JP）の順序がブランドアイデンティティ
- **palt を有効にしない**。Helvetica Neue のメトリクスをそのまま活かす
- **カラフルなアクセント色（赤・青・緑等）をUIに持ち込まない**。BAPE のUIは黒・グレー・白のみ
- **box-shadow を多用しない**。フラットが基本。影はフローティング要素の最小限に留める

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（ハンバーガーナビ） |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- 商品グリッド: 4カラム → 2カラム
- ナビ: ハンバーガーメニュー化
- 本文サイズは 12px を維持（モバイルでもテキストの存在感を抑える）
- 商品画像のアスペクト比は 1:1 を維持

### タッチターゲット

- 主要CTA: padding `13px 15px 14px` で高さ 44px 以上を確保
- ナビリンク: タッチ領域 44px 以上を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Black (Primary): #000000
Dark Gray (CTA): #323232
Search Button: #222222
Footer BG: #1d1d1d
Text Muted: #acacac
Border Light: #e6e6e6
Background: #ffffff

Font: "helveticaneue lt std", helveticaneue, "helvetica neue",
  helvetica, "Open Sans", arial, "Noto Sans JP", sans-serif
（Helvetica Neue 不在時の代替: Noto Sans JP）

Body Size: 12px / line-height 1.5 / weight 400 / letter-spacing 0.5px
Heading H2: 18px / line-height 1.5 / weight 700 / letter-spacing 0.5px
Logo: 24px / line-height 1.5 / weight 700 / letter-spacing 0.5px
Banner: 10px / line-height 1.5 / weight 400 / letter-spacing 0.5px

Border Radius: 0px（全要素で角型。pill や角丸は一切使わない）
Shadow: 基本 none。徹底的にフラット
Color: 完全モノクローム。アクセント色なし
```

### プロンプト例

```
BAPE のデザインに従って、商品一覧のグリッドセクションを作成してください。
- フォント: "helveticaneue lt std", helveticaneue, "helvetica neue", helvetica, "Open Sans", arial, "Noto Sans JP", sans-serif
- 商品名: 12px / weight 400 / letter-spacing 0.5px / color #000000
- 価格: 12px / weight 700 / letter-spacing 0.5px / color #000000
- 主要CTA "ADD TO CART": 背景 #323232 / 白文字 / border-radius 0px（角型）/ border 1px solid #323232 / padding 13px 15px 14px
- セカンダリCTA: 背景 transparent / 黒文字 / border 1px solid #000000 / border-radius 0px（角型）
- カード: 白背景 #ffffff / box-shadow none / border なし / 角型（0px）
- 商品画像: 正方形 1:1 アスペクト比
- テキストは 12px を基本。14px 以上にしない
- カラーは黒・グレー・白のモノクロームのみ。アクセント色は使わない
- letter-spacing: 0.5px を全要素に。line-height: 1.5 を統一
```
