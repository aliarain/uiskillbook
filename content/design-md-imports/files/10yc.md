# DESIGN.md — 10YC

> 10YC（https://10yc.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「着る人も作る人も豊かにします」をミッションに掲げる D2C ファッションブランド。ブランド名の "10YC" は "10 Years Clothing"（10年着られる服）の略。透明性・品質・サステナビリティを体現するように、装飾を徹底的に排したモノクロームデザイン。大きなプロダクト写真と極太のヒーロータイトルで服そのものにフォーカスさせ、UI は限りなく背景に退く
- **密度**: ゆったりとした EC ショーケース型。大きなヒーロー写真に重なるテキスト、その下にカテゴリナビとプロダクトグリッド。情報量は最小限で、余白で「長く使うものに本当に必要なものだけ」というブランド哲学を体現
- **キーワード**: モノクローム、D2C、Roboto 単一フォント、角ボタン（radius 0）、エディトリアル、Shopify、サステナブル
- **特徴**:
  - **Roboto 単一フォント**: 和文専用フォントを宣言せず、欧文フォント Roboto のみを指定してシステムフォールバックに委ねる珍しい構成。日本語はブラウザデフォルトの和文フォント（macOS ではヒラギノ角ゴ、Windows ではメイリオ等）で表示される
  - **完全モノクロームパレット**: `#141414`（ほぼ黒）、`#858585`（灰）、`#f5f5f5`（薄灰）、`#ffffff`（白）の 4 色のみ。ブランドアクセントカラーを持たない。色の代わりにプロダクト写真がアクセントの役割を果たす
  - **border-radius 0px**: すべてのボタン・入力欄が完全な矩形。角丸を一切使わないシャープなエディトリアルスタイル
  - **ヒーロー 44px / weight 900**: 極太ウェイトの大きなタイトルでインパクトを出し、残りは 13px / 400 の控えめな本文でコントラストを作る
  - **13px のベースフォントサイズ**: 一般的な日本語サイト（14-16px）より小さいベースサイズ。余白の広さと相まってファッション誌的な繊細さを演出
  - **Shopify ベースの EC サイト**: 日本の D2C ブランドに多い Shopify テーマをベースにカスタマイズ
  - **palt 未使用 / CSS Custom Properties なし / box-shadow なし**: 装飾的な CSS 機能を一切使わない、極めてストリップバックなスタイリング

---

## 2. Color Palette & Roles

> 10YC はブランドアクセントカラーを持たない完全モノクロームパレット。色でブランドを語るのではなく、プロダクト写真の色彩がアクセントの役割を担う。

### Dark（ダーク系）

- **Near Black** (`#141414`): ほぼ黒。ヒーロータイトル、見出し、ダーク CTA 背景、フッター文字に使用。10YC における最も濃い色（rgb 20, 20, 20）
- **Text Body** (`#121212`): `#141414` のわずかに薄い変種。一部の本文テキストに使用（rgb 18, 18, 18）

### Gray（グレー）

- **Gray 500** (`#858585`): セカンダリテキスト、フッターリンク、価格、補足情報に使用（rgb 133, 133, 133）
- **Gray Disabled** (`rgba(18,18,18,0.55)`): 無効状態のテキスト・要素

### Light（ライト系）

- **Surface Light** (`#f5f5f5`): 検索入力欄の背景、セクション背景として使用（rgb 245, 245, 245）
- **White** (`#ffffff`): ページ背景、アウトライン CTA の背景

### Overlay

- **Modal Overlay** (`rgba(56,56,56,0.5)`): カート・モーダルのオーバーレイ背景

### Semantic（実測未確認・推奨補完値）

実サイトにはエラー・成功色の表面化なし。EC サイト向けの推奨補完値:

- **Danger**: `#c0392b` 程度（カートエラー・在庫切れ表示）
- **Success**: `#27ae60` 程度（カート追加完了）

---

## 3. Typography Rules

### 3.1 欧文フォント

10YC は**欧文フォント Roboto のみを font-family に宣言**する単一フォント構成。

- **Roboto**: Google Fonts。Geometric Grotesque 系のサンセリフ。ウェイト 400 / 500 / 900 を使用

### 3.2 和文フォント

- **明示的な和文フォント指定なし**: Roboto に含まれない日本語文字はブラウザのシステムフォントにフォールバック
- macOS: ヒラギノ角ゴ ProN（デフォルト）
- Windows: メイリオ / Yu Gothic（デフォルト）
- Linux/Android: Noto Sans CJK JP（デフォルト）

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h5, p, a, span, button, nav, header, footer） */
font-family: Roboto, sans-serif;
```

**フォールバックの考え方**:
- Roboto を唯一の指定フォントとし、英数字は Roboto で表示
- 日本語文字は Roboto に含まれないため、各 OS のシステム和文フォントに自動フォールバック
- `sans-serif` のみを generic family として指定。和文フォントを明示しないことで、OS ごとの最適なシステムフォントに委ねる設計
- 和文フォントを明示したい場合の推奨拡張: `Roboto, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif`

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Title | Roboto | 44px | **900** | 48px (x1.09) | 2.2px (0.05em) | `#141414` | "ニートシャツ"、"私たちについて" |
| Hero Subtitle | Roboto | 15px | 400 | 23px (x1.53) | normal | `#858585` | ヒーロー直下の説明文 |
| Section H2 | Roboto | 16px | 500 | 20px (x1.25) | 0.8px (0.05em) | `#141414` | セクションタイトル |
| Nav Link | Roboto | 13px | 400 | 14px (x1.08) | 0.65px (0.05em) | `#141414` | "メンズ"、"ウィメンズ" |
| Body | Roboto | 13px | 400 | 17px (x1.31) | normal | `#858585` | 本文・補足テキスト |
| Price / Cart Bold | Roboto | 15px | 900 | 21px (x1.4) | 0.75px (0.05em) | `#141414` | "小計"、価格表示 |
| Footer Heading (H5) | Roboto | 15px | 900 | 21px (x1.4) | 0.75px (0.05em) | `#141414` | "ABOUT" 等のフッター見出し |
| Category Link | Roboto | 13px | 400 | 24px (x1.85) | normal | `#858585` | フッターカテゴリリンク |
| Input Search | Roboto | 13px | 400 | 17px (x1.31) | normal | `#141414` | 検索入力欄 / bg `#f5f5f5` |
| Input Large | Roboto | 24px | 400 | 31px (x1.29) | normal | `#141414` | 数量セレクタ等の大きい入力欄 |
| Small / Copyright | Roboto | 10px | 400 | 16px (x1.6) | normal | `#858585` | "著作権 (C) 2026, 10YC." |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **ヒーロータイトル (44px)**: `1.09`（48px / 44px）— 極めてタイト。文字が密集してインパクトを作る
- **本文 (13px)**: `1.31`（17px / 13px）— 日本語本文としてはやや狭め
- **Hero Subtitle (15px)**: `1.53`（23px / 15px）— 本文寄りのゆったりさ
- **Footer Category (13px)**: `1.85`（24px / 13px）— リスト的に広い行間
- **Price / Footer Heading (15px)**: `1.4`（21px / 15px）
- **Section H2 (16px)**: `1.25`（20px / 16px）
- **Small (10px)**: `1.6`（16px / 10px）

**字間 (letter-spacing)** — 実測:
- **ヒーロータイトル**: `0.05em`（2.2px @ 44px）— 見出しに控えめなトラッキング
- **セクション H2**: `0.05em`（0.8px @ 16px）
- **ナビリンク**: `0.05em`（0.65px @ 13px）
- **Price / Footer Heading**: `0.05em`（0.75px @ 15px）
- **本文・Hero Subtitle・Category Link**: `normal`（0）

**ガイドライン**:
- 10YC は **letter-spacing 0.05em** をナビ・見出し・価格など UI 要素に統一的に適用する
- 本文（13px / 400）には letter-spacing を加えない
- ヒーロータイトルの line-height 1.09 は意図的に詰めたもの。44px / 900 の極太文字をタイトに組むことでビジュアルインパクトを出す
- 本文の line-height 1.31 は日本語としてはやや狭め。ファッション EC の簡潔な説明文向きの設計

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- Shopify テーマベースのため、標準的な HTML レンダリングに従う

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt 未使用 */
```

- **palt は使用しない**: font-feature-settings は normal。Roboto は欧文フォントのため palt は影響しない。フォールバック先の和文フォントにも palt を適用しない設計
- 字間の調整は letter-spacing のみで行う

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

10YC のボタンはすべて **border-radius 0px**（完全な矩形）。角丸を一切使わない。

**Primary CTA（ダーク塗りつぶし）** — "チェックアウトに進む"
- Background: `#141414`
- Text: `#ffffff`
- Border: none
- Border Radius: **0px**
- Padding: フルワイド（カートドロワー内）
- Font: Roboto, 15px 程度, weight 900

**Outline CTA（白＋ボーダー）** — "詳しくはこちら"、"商品はこちらから"
- Background: `#ffffff`
- Text: `#141414`
- Border: 1px solid `#141414`
- Border Radius: **0px**
- Padding: 12px 24px 程度
- Font: Roboto, 13-15px, weight 400

**Back Link** — "戻る"
- Background: `#ffffff`
- Text: `#141414`
- Border: 1px solid `#141414`
- Border Radius: **0px**
- Font: Roboto, 13px, weight 400

**ボタンの考え方**:
- 10YC は **2 種類のみ**: ダーク塗りつぶし（決済系）とアウトライン（誘導系）
- すべて radius 0 の矩形で、ファッション誌のような鋭いエディトリアル感を保つ
- pill ボタン（radius 9999px）は使用しない
- ホバーエフェクトは控えめ（opacity 変化程度）

### Inputs

- Background: `#f5f5f5`（検索入力欄）
- Border: none（背景色で領域を示す）
- Border (focus): ブラウザデフォルト
- Border Radius: **0px**
- Padding: 8px 16px 程度
- Font: Roboto, 13px, weight 400

**大型入力欄（数量セレクタ等）**:
- Font Size: 24px
- Weight: 400
- Line Height: 31px
- テキスト中央揃え

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 構成: 商品写真 + 商品名 + 価格。装飾なしのフラット構成
- ホバー: opacity 変化（控えめ）

### Navigation

- Background: `#ffffff`
- Border Bottom: なし（またはごく薄い線）
- ロゴ "10YC" はテキスト非表示（`text-hide` クラス）でロゴ画像表示
- ナビリンク: 13px / 400 / letter-spacing 0.05em
- 右端: 検索アイコン、アカウントアイコン、カートバッグアイコン

### Announcement Bar

- Background: `#ffffff` または `#f5f5f5`
- Text: 13px / 400 / `#858585`
- イベント・ニュースのリンクテキストを配置

### Footer

- Background: `#ffffff`
- 見出し: 15px / 900 / letter-spacing 0.05em（"ABOUT" 等）
- リンク: 13px / 400 / `#858585`
- コピーライト: 10px / 400 / `#858585`

---

## 5. Layout Principles

### Container

- コンテンツ中央寄せ
- ヒーローはフル幅の大きな商品写真
- ヒーロー下にカテゴリナビ → プロダクトグリッド → フッターの構成

### Spacing Scale（実測ベースの推奨値）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間 |
| S | 8px | リスト項目間、ボタン内縦余白 |
| M | 16px | カード内余白、セクション内の段落間 |
| L | 24px | ナビとコンテンツの間、CTA の横 padding |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーローの上下余白 |

### Grid

- 商品グリッド: 2〜4 カラム（Shopify テーマベース）
- モバイルでは 1〜2 カラムに折り返し
- ガター: 16-24px

---

## 6. Depth & Elevation

10YC はシャドウを一切使わない完全フラットデザイン。立体感はモノクロームの色面コントラスト（`#141414` vs `#ffffff` vs `#f5f5f5`）とプロダクト写真で表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素（ボタン、カード、ナビ、カート） |
| — | `rgba(56,56,56,0.5)` overlay | カート / モーダルのオーバーレイ背景 |

- box-shadow は一切使用しない
- カート展開時はモーダルオーバーレイ `rgba(56,56,56,0.5)` で背景を暗くする
- 階層の区別は背景色の明度差（`#ffffff` / `#f5f5f5` / `#141414`）で行う

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は **Roboto, sans-serif** のみを指定する（10YC の設計に忠実な場合）
- 和文フォールバックを明示したい場合は `Roboto, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif` に拡張する
- ボタンの border-radius は **すべて 0px** にする（矩形のみ）
- ヒーロータイトルは **44px / weight 900 / line-height 1.09** の極太タイトで組む
- 本文は **13px / weight 400 / line-height 1.31** の繊細なサイズで組む
- 色は **#141414（ほぼ黒）**、**#858585（灰）**、**#f5f5f5（薄灰）**、**#ffffff（白）** の 4 色に絞る
- UI 要素の letter-spacing は **0.05em** で統一する（ナビ、見出し、価格）
- 本文テキストの letter-spacing は **normal** にする
- プロダクト写真を大きく使い、テキスト量は最小限にする
- カート内の決済 CTA のみダーク塗りつぶし（`#141414`）、それ以外はアウトライン（白 + 黒ボーダー）

### Don't（禁止）

- **border-radius を付けない**: 4px でも 8px でも不可。10YC は radius 0 で統一。pill（9999px）は論外
- **純粋な `#000000` をテキストに使わない**: 10YC のテキスト色は `#141414` が最も濃い色
- **鮮やかなアクセントカラーを使わない**: ブルー、グリーン、レッド等のブランドカラーは存在しない。モノクローム以外の色はプロダクト写真のみに限る
- **font-feature-settings: "palt" を適用しない**: 10YC は palt 未使用
- **box-shadow を使わない**: フラットデザインを徹底。ホバー時の影も不要
- **本文に letter-spacing 0.05em を適用しない**: 0.05em はナビ・見出し・価格向け。本文は normal
- **weight 700 以下の中間ウェイトを見出しに使わない**: 10YC のヒーローは weight 900（Black）。500 や 600 は使用箇所が限られる（H2 の 500 のみ）
- **ベースフォントサイズを 14px 以上にしない**: 10YC の本文は 13px。14px に拡大するとファッション EC の繊細な余白バランスが崩れる
- **和文専用フォント（Noto Sans JP 等）を font-family の先頭に置かない**: Roboto が先頭であることが 10YC のトーンを決める

---

## 8. Responsive Behavior

### Breakpoints（Shopify テーマ標準ベースの推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 749px | モバイル |
| Tablet | 750-989px | タブレット |
| Desktop | >= 990px | デスクトップ |

### モバイル時の調整

- ヒーロー H1: 44px -> 28-32px に縮小
- セクション H2: 16px を維持（もとから小さい）
- 本文サイズ 13px を維持
- ナビゲーションはハンバーガー化
- 商品グリッドは 1-2 カラムに折り返し
- ヒーロー写真はアスペクト比を維持してフル幅表示

### タッチターゲット

- CTA ボタン: padding を拡張して 44px 以上の高さを確保
- ナビリンク: 13px / line-height 1.08 はモバイルではタッチターゲット不足。padding で補う

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: 10YC（テンワイシー）
Origin: 日本のD2Cファッション / "10 Years Clothing" — 10年着られる服
Near Black: #141414
Gray: #858585
Surface Light: #f5f5f5
White: #ffffff
Overlay: rgba(56,56,56,0.5)

Font: Roboto, sans-serif
（和文拡張版: Roboto, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif）
palt: 未使用（font-feature-settings: normal）

Hero Title: 44px / weight 900 / line-height 1.09 / letter-spacing 0.05em / color #141414
Section H2: 16px / weight 500 / line-height 1.25 / letter-spacing 0.05em
Body: 13px / weight 400 / line-height 1.31 / letter-spacing normal / color #858585
Price/Cart Bold: 15px / weight 900 / line-height 1.4 / letter-spacing 0.05em
Small: 10px / weight 400 / line-height 1.6

CTA Style: outline (bg #ffffff, border 1px solid #141414, text #141414, radius 0px)
CTA Checkout: filled (bg #141414, text #ffffff, radius 0px)
Border Radius: すべて 0px
Shadow: 使用しない
```

### プロンプト例

```
10YC のデザインシステムに従って、商品詳細ページを作成してください。
- フォント: Roboto, sans-serif
- font-feature-settings: normal（palt 未使用）
- ヒーロー写真はフル幅、その上に 44px / weight 900 / line-height 1.09 / letter-spacing 0.05em の商品名
- 本文（説明文）: 13px / weight 400 / line-height 1.31 / letter-spacing normal / color #858585
- 価格: 15px / weight 900 / letter-spacing 0.05em / color #141414
- CTA「カートに追加」: 背景 #141414 / 文字 #ffffff / border-radius 0px（完全な矩形）
- CTA「詳しく見る」: 背景 #ffffff / 文字 #141414 / border 1px solid #141414 / radius 0px
- 背景は #ffffff。サーフェスは #f5f5f5
- 色は #141414, #858585, #f5f5f5, #ffffff の 4 色のみ
- box-shadow は使わない。border-radius は一切使わない
- 装飾を排して、商品写真を主役にする
```

### フォント・組版の重要ポイント

1. **Roboto 単一指定の設計意図**: 和文フォントを明示せず、`Roboto, sans-serif` のみで構成。日本語は OS のシステムフォントにフォールバックさせることで、環境ごとの最適フォントに委ねる。D2C ブランドの実用的な割り切り
2. **weight 900 のヒーロー**: 通常の bold（700）ではなく Black（900）を使用。44px の大きなサイズと組み合わせて、ファッション誌のようなビジュアルインパクトを作る。これが 10YC の視覚的アイデンティティの核
3. **13px の控えめなベース**: 日本語サイトとしては小さいベースサイズ。服の写真と太い見出しとのコントラストを最大化する設計。テキストを読ませるのではなく、写真を見せるための組版
4. **letter-spacing 0.05em の統一パターン**: ナビ・見出し・価格などの UI 要素に 0.05em を一貫して適用。本文には適用しない。シンプルな使い分けルール
5. **radius 0 の徹底**: ボタン、入力欄、カード、すべてが矩形。角丸を一切排除することで、エディトリアルな緊張感とブランドの「余計なものを付けない」哲学を表現
6. **完全モノクローム**: アクセントカラーを持たないことが最大の特徴。色でブランドを語るのではなく、モノトーンの UI にプロダクト写真の色を際立たせる引き算の設計

---

**取得日**: 2026-05-09
**出典**: https://10yc.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
