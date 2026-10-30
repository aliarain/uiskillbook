# DESIGN.md — PRESS BUTTER SAND

> PRESS BUTTER SAND（https://buttersand.com/）のデザイン仕様書。
> 2026-05-19 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 東京発の洋菓子ブランド。バターサンド専門店として、素材の高級感と大胆さを両立するドラマティックなビジュアルデザイン。**筑紫Aオールド明朝（Fontworks）** の伝統的な和文明朝体と **Futura LT Pro** の幾何学的欧文サンセリフを組み合わせ、和洋折衷の品格を表現。ブランドカラー **#ff3300（オレンジレッド）** は「焼きたて」の熱を想起させる鮮烈なアクセント
- **密度**: フルスクリーンのヒーロー画像とゆったりとしたセクション構成。プロダクトの美しさを大写しにするシネマティックなレイアウト。情報量は最小限に絞り、ビジュアルで世界観を語る
- **キーワード**: ドラマティック、和洋折衷、オレンジレッド、明朝体、シネマティック、高級菓子
- **特徴**: **黒いヒーローセクション（#000000）** と **ライトグレー（#d2d2d2）** のコンテンツエリアが交互する劇的なコントラスト構成。見出しには和文は筑紫Aオールド明朝、欧文は Futura LT Pro という二系統フォントを使い分ける。ボタンは **角型（radius 0px）** で、ブランドオレンジ **#ff3300** の塗りつぶし。vw ベースのフォントサイジングを採用し、画面幅に応じてシームレスにスケール。`font-feature-settings` は `normal`（palt 不使用）で、代わりに `letter-spacing` の大きな値（0.05em〜0.15em）で和文の字間を調整

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

PRESS BUTTER SAND のカラーパレットは **黒・グレー・白のモノトーン** に **鮮烈なオレンジレッド** を差し色として使う構成。焼き菓子の「熱」を表現するオレンジレッドが、ダーク基調のデザインの中で目を引く。

- **Brand Orange** (`#ff3300`): ブランドの象徴色。セクション見出し・プロダクトタイトル・CTAボタン背景に使用。CSS 変数: `--color-orange`
- **Black** (`#000000`): ヒーローセクション背景・本文テキスト。CSS 変数: `--color-black`

### Text & Neutral

- **Text Primary** (`#000000`): 本文テキスト・ニュースタイトル
- **Text Dark** (`#231815`): フッター等のダーク要素テキスト（RGB 35, 24, 21 — わずかに赤みを帯びた黒）。CSS 変数: `--color-dark`
- **Text Dark Alt** (`#222222`): 補助テキスト。CSS 変数: `--color-dark_2`
- **Text Secondary** (`#666666`): メタ情報・日付等の補足テキスト。CSS 変数: `--color-gray`
- **Text Tertiary** (`#333333`): 中間濃度のグレー。CSS 変数: `--color-gray_2`
- **Text on Dark** (`#ffffff`): 黒背景・オレンジ背景上の白テキスト。CSS 変数: `--color-white`

### Surface

- **Surface Light Gray** (`#d2d2d2`): ページボディ背景。コンテンツエリアの基調色。CSS 変数: `--color-gray-light`
- **Surface Hero** (`#000000`): ヒーローセクション・トップエリアの黒背景
- **Surface White** (`#ffffff`): カード・コンテンツブロックの白背景
- **Surface Off-White** (`#f4f4f4`): 薄い背景バリエーション。CSS 変数: `--color-white_2`
- **Surface Light Gray 2** (`#ededed`): セクション背景バリエーション。CSS 変数: `--color-gray-light_2`
- **Surface Light Gray 3** (`#dbdbdb`): ボーダー・区切り。CSS 変数: `--color-gray-light_3`
- **Surface Light Gray 4** (`#e4e4e4`): ボーダー・区切りバリエーション。CSS 変数: `--color-gray-light_4`

### Accent

- **Brand Orange** (`#ff3300`): CTA・見出し・リンクのアクセント色。視線誘導の要

---

## 3. Typography Rules

### 3.1 和文フォント

PRESS BUTTER SAND の和文タイポグラフィは **筑紫Aオールド明朝 Pr6（Fontworks）** を中心に構成される。ウェイトのバリエーションが豊富で、CSS Custom Properties で管理されている。

- **FOT-筑紫Aオールド明朝 Pr6 R** (`--ff-regular`): 見出し・プロダクトタイトルの基本ウェイト
- **FOT-筑紫Aオールド明朝 Pr6 M** (`--ff-medium`): フッターラベル等の中間ウェイト
- **FOT-筑紫Aオールド明朝 Pr6 B** (`--ff-bold`): 強調見出し
- **FOT-筑紫Aオールド明朝 Pr6 L** (`--ff-light`): 軽いアクセント
- **FOT-筑紫Aオールド明朝 Pr6 D** (`--ff-demibold`): セミボールド
- **FOT-筑紫Aオールド明朝 Pr6 E** (`--ff-extrabold`): 極太見出し
- **FOT-TsukuAOldMinPr6E** (`--ff-old-extrabold`): オールドスタイル極太

- **Hiragino Kaku Gothic ProN**: body のフォールバック。ゴシック体で本文の可読性を担保

> **フォントライセンスに関する注意**: FOT-筑紫Aオールド明朝は Fontworks のライセンスフォント（LETS / fonts.to 等で配信）。preview.html では **Shippori Mincho**（Google Fonts）で代替する。筑紫Aオールド明朝の持つオールドスタイルの風情・墨だまり感に最も近い Google Fonts 和文明朝体

### 3.2 欧文フォント

- **FuturaLTPro-Book** (`--ff-futura-r`): 本文レベルの欧文
- **FuturaLTPro-Light** (`--ff-futura-l`): 軽い欧文テキスト
- **FuturaLTPro-Medium** (`--ff-futura-m`): セクション見出し・CTAボタンの欧文。実測で最も多く使用されるウェイト
- **FuturaLTPro-Heavy** (`--ff-futura-b`): 極太の欧文見出し

> **フォントライセンスに関する注意**: Futura LT Pro は Linotype のライセンスフォント（Adobe Fonts 等で配信）。preview.html では **Jost**（Google Fonts）で代替する。Futura と同じ幾何学的サンセリフの系譜で、字形の比率が近い

### 3.3 font-family 指定

```css
/* 欧文見出し・CTA（Futura LT Pro 系） */
font-family: "FuturaLTPro-Medium", sans-serif;

/* 和文見出し・プロダクトタイトル（筑紫Aオールド明朝） */
font-family: "FOT-筑紫Aオールド明朝 Pr6 R", serif;

/* 本文・ナビゲーション（ゴシック体フォールバック） */
font-family: "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- 欧文見出しは Futura LT Pro を単独指定。フォールバックは sans-serif のみ
- 和文見出しは筑紫Aオールド明朝を単独指定。フォールバックは serif
- 本文はヒラギノ角ゴ ProN。和文ゴシック体で可読性を確保
- **preview.html 用代替**: Futura LT Pro → Jost / 筑紫Aオールド明朝 → Shippori Mincho

### 3.4 文字サイズ・ウェイト階層

フォントサイズは **vw ベース**（viewport width に比例）。以下は 1440px viewport での実測値。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title EN | FuturaLTPro-Medium | 28px | 400 | 1.0 | 0.05em (1.4px) | "PICK UP" 等。color #ff3300 |
| Product Title JP | FOT-筑紫Aオールド明朝 Pr6 R | 26px | 400 | 1.61 | 0.125em (3.2px) | "NEW ARRIVAL" 等。color #ff3300 |
| News Title JP | FOT-筑紫Aオールド明朝 Pr6 R | 15px | 400 | 1.85 | 0.15em (2.2px) | ニュース記事タイトル。color #000000 |
| Footer Label JP | FOT-筑紫Aオールド明朝 Pr6 M | 11px | 400 | 1.0 | — | フッターカテゴリ名 |
| Body | Hiragino Kaku Gothic ProN | 11px | 400 | 1.0 | — | 本文テキスト（vw ベース） |
| CTA Button EN | FuturaLTPro-Medium | 14px | 400 | 1.0 | 0.02em (0.3px) | "PRODUCTS" 等の CTA ラベル |
| CTA Link EN | FuturaLTPro-Medium | 11px | 400 | 1.0 | — | "VIEW MORE" 等のテキストリンク |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.0` — body レベル。コンパクトなデフォルト設定
- **和文見出し（プロダクトタイトル）の行間**: `line-height: 1.61` — 和文明朝体の品格を保つゆったりとした行間
- **ニュースタイトルの行間**: `line-height: 1.85` — 複数行タイトルの可読性を確保
- **欧文見出しの行間**: `line-height: 1.0` — Futura の幾何学的なタイトな行間

- **欧文見出しの字間**: `letter-spacing: 0.05em` — 控えめなスペーシング
- **和文プロダクトタイトルの字間**: `letter-spacing: 0.125em` — 明朝体に余裕を持たせるワイドスペーシング
- **ニュースタイトルの字間**: `letter-spacing: 0.15em` — 最も広い字間。和文の品格を強調
- **CTA の字間**: `letter-spacing: 0.02em` — ごく控えめ

**ガイドライン**:
- letter-spacing は **三段階**: ニュースタイトル 0.15em（ワイド）/ プロダクトタイトル 0.125em（中間）/ 欧文見出し 0.05em（控えめ）
- 和文見出しの letter-spacing は 0.1em 以上が基本。明朝体の繊細な筆致に呼吸を与える
- vw ベースのサイジングにより、letter-spacing も viewport に応じてスケールする

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- プロダクト名・ニュースタイトルは短文が前提

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt 不使用 */
```

- **`palt` は使用しない**: 字詰めは letter-spacing の明示的な指定で制御
- 明朝体の等幅的な組みを活かし、letter-spacing で広げる方針
- palt を使わないことで、筑紫Aオールド明朝の持つ伝統的な等幅組みの品格を保持

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし — "PRODUCTS"）**

PRESS BUTTER SAND の CTA は**ブランドオレンジ塗りつぶし + 角型**が基本。

- Background: `#ff3300`
- Text: `#ffffff`
- Border Radius: **0px**（完全な角型 — pill でも角丸でもない）
- Padding: 17px 32px
- Font Family: "FuturaLTPro-Medium", sans-serif
- Font Size: 14px
- Font Weight: 400
- Letter Spacing: 0.02em (0.3px)

**Secondary CTA（テキストリンク — "VIEW MORE"）**

- Text: `#ff3300`
- Background: transparent
- Border Bottom: 1px solid `#ff3300`
- Font Family: "FuturaLTPro-Medium", sans-serif
- Font Size: 11px
- Font Weight: 400
- Border Radius: 0px

**Navigation Link（"STORE店舗一覧はこちら"）**

- Background: `#d2d2d2`
- Text: `#000000`
- Font Family: "Hiragino Kaku Gothic ProN", sans-serif
- Border Radius: 0px

**ボタンの考え方**:
- メインは **#ff3300 オレンジレッドの塗りつぶし**。白テキストとのコントラストで食欲を喚起する
- radius は **0px** の完全角型。シャープで潔い印象。菓子ブランドの甘さとは対照的な切れ味
- 欧文ラベルは **FuturaLTPro-Medium** で統一。font-weight は 400（Futura の Medium ウェイトが font-family 名に内包されている）
- セカンダリは**テキストリンク + アンダーライン**スタイル。背景なし・ボーダーなし・下線のみ

### Cards（プロダクトカード）

- Background: コンテキストに応じて `#ffffff` または `#d2d2d2`
- Border Radius: 0px
- Shadow: なし
- プロダクト写真 + タイトル（筑紫Aオールド明朝 / 26px / ls 0.125em / color #ff3300）の構成

### Section Backgrounds

- **Hero**: `#000000`（黒 — ドラマティックなファーストビュー）
- **Content Body**: `#d2d2d2`（ライトグレー — コンテンツエリアの基調）
- **Card / Block**: `#ffffff`（白 — コンテンツブロック内）
- **Off-White**: `#f4f4f4`（わずかに暖かみのある白）

---

## 5. Layout Principles

### Container

- フルブリードのヒーローセクション + 中央寄せのコンテンツエリア
- vw ベースのフォントサイジングにより、ブレークポイント不要のシームレスなスケーリング

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | 最小余白 |
| S | 16px | CTA 内縦パディング (17px) |
| M | 32px | CTA 内横パディング |
| L | 48px | セクション内余白 |
| XL | 80px | セクション間余白 |
| XXL | 120px | ヒーロー下マージン |

### Font Size Scale（CSS Custom Properties）

フォントサイズは rem ベースの CSS 変数で管理。vw での実測値はこれを viewport に応じてスケールしたもの。

| Token | Value | 用途 |
|-------|-------|------|
| --fs-8 | 0.8rem | 最小テキスト |
| --fs-10 | 1.0rem | キャプション |
| --fs-12 | 1.2rem | ラベル・補足 |
| --fs-14 | 1.4rem | CTA・ナビ |
| --fs-16 | 1.6rem | 本文 |
| --fs-18 | 1.8rem | 大きめ本文 |
| --fs-20 | 2.0rem | 小見出し |
| --fs-24 | 2.4rem | 見出し |
| --fs-28 | 2.8rem | セクション見出し |
| --fs-32 | 3.2rem | 大見出し |
| --fs-40 | 4.0rem | ディスプレイ |
| --fs-48 | 4.8rem | ラージディスプレイ |
| --fs-56 | 5.6rem | XL ディスプレイ |
| --fs-65 | 6.5rem | ヒーローディスプレイ |

---

## 6. Depth & Elevation

PRESS BUTTER SAND はシャドウをほぼ使わない。**黒（#000000）とグレー（#d2d2d2）と白（#ffffff）の面の切り替え**だけで空間の奥行きを表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#d2d2d2` | ページボディ・コンテンツエリア |
| 2 | background `#ffffff` | カード・コンテンツブロック（グレー面上の白で浮き上がり） |
| 3 | background `#000000` | ヒーロー・ドラマティックセクション |
| Accent | background `#ff3300` | CTA ボタン・アクセント面 |

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文見出し・CTA ラベルには **Futura LT Pro（または Jost）** を使う
- 和文見出し・プロダクトタイトルには **筑紫Aオールド明朝（または Shippori Mincho）** を使う
- ブランドアクセントは **#ff3300** のみ使う
- CTA ボタンは **角型（radius 0px）+ #ff3300 背景 + 白テキスト** にする
- セクション見出しの色は **#ff3300** にする（欧文・和文ともに）
- 和文見出しの letter-spacing は **0.1em 以上**にする
- 欧文見出しの letter-spacing は **0.05em** にする
- ヒーローセクションは **黒背景（#000000）** にする
- コンテンツエリアの背景は **#d2d2d2** にする
- 「VIEW MORE」等のセカンダリリンクは **#ff3300 テキスト + 下線** にする
- vw ベースのサイジングを維持し、viewport に応じたシームレスなスケーリングを保つ

### Don't（禁止）

- pill ボタン（radius 9999px）を使わない（PRESS BUTTER SAND は **完全角型 0px**）
- 角丸ボタン（radius 4px〜8px）も使わない
- `palt` を適用しない（明朝体の等幅組みを維持）
- #ff3300 以外のアクセントカラー（青、緑等）を使わない
- 和文テキストに Futura を使わない（和文は筑紫Aオールド明朝 or ヒラギノ角ゴ ProN）
- 欧文テキストに明朝体を使わない（欧文は Futura LT Pro）
- 見出しの letter-spacing を 0（normal）にしない（和文は 0.1em 以上が必須）
- シャドウ（box-shadow）を使わない（面の色で奥行きを表現する）
- コンテンツエリアの背景を純白（#ffffff）にしない（#d2d2d2 ライトグレーが基調）
- line-height を一律で設定しない（和文明朝 1.6〜1.85 / 欧文 1.0 と使い分ける）

---

## 8. Responsive Behavior

### Breakpoints

PRESS BUTTER SAND は vw ベースのフォントサイジングを採用しており、明確なブレークポイントによるレイアウト切り替えよりもシームレスなスケーリングを重視。

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### vw ベースのスケーリング

- フォントサイズが vw 単位で指定されており、viewport 幅に比例して自動スケール
- 1440px viewport で 11.232px のテキストは、375px viewport では約 2.9px 相当まで縮小（実際には min-font-size 等で下限制御される想定）
- letter-spacing の em 値もフォントサイズに連動してスケールする

### タッチターゲット

- CTA ボタンのパディング（17px 32px）はデスクトップ基準。モバイルではタップ領域の拡張が必要
- ナビゲーション項目は十分なタッチターゲットサイズを確保する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: PRESS BUTTER SAND
Origin: 東京発のバターサンド専門洋菓子ブランド
Brand Orange: #ff3300 (--color-orange)
Black: #000000 (--color-black)
Dark: #231815 (--color-dark)
Gray: #666666 (--color-gray)
Page Background: #d2d2d2 (--color-gray-light)
Surface White: #ffffff (--color-white)
Surface Off-White: #f4f4f4 (--color-white_2)
Font JP Heading: "FOT-筑紫Aオールド明朝 Pr6 R", serif（代替: "Shippori Mincho", serif）
Font EN Heading: "FuturaLTPro-Medium", sans-serif（代替: "Jost", sans-serif）
Font Body: "Hiragino Kaku Gothic ProN", sans-serif
palt: 不使用（font-feature-settings: normal）
Section Title EN: 28px / 400 / line-height 1.0 / letter-spacing 0.05em / color #ff3300
Product Title JP: 26px / 400 / line-height 1.61 / letter-spacing 0.125em / color #ff3300
News Title JP: 15px / 400 / line-height 1.85 / letter-spacing 0.15em / color #000000
Body: 11px (vw-based) / 400 / line-height 1.0
CTA Style: filled (bg #ff3300, text #fff, radius 0px, padding 17px 32px)
CTA Font: FuturaLTPro-Medium / 14px / 400 / letter-spacing 0.02em
Secondary Link: text #ff3300 + border-bottom 1px solid #ff3300
Shadow: 使用しない
```

### プロンプト例

```
PRESS BUTTER SAND のデザインシステムに従って、新商品の紹介ページを作成してください。
- ヒーローセクションは黒背景 #000000 にフルブリードのプロダクト写真
- セクション見出し "PICK UP" は FuturaLTPro-Medium (or Jost), 28px, color #ff3300, letter-spacing 0.05em
- 商品名は 筑紫Aオールド明朝 (or Shippori Mincho), 26px, color #ff3300, letter-spacing 0.125em, line-height 1.61
- CTA「PRODUCTS」は bg #ff3300, text #fff, radius 0px, padding 17px 32px
- ページ背景は #d2d2d2。コンテンツブロックは白 #ffffff
- "VIEW MORE" リンクは #ff3300 テキスト + 下線（border-bottom）
- シャドウは一切使わない。面の色（黒 / グレー / 白）で奥行きを表現する
- font-feature-settings は normal（palt 不使用）
```

### 字詰め・組版の重要ポイント

1. **二系統フォントの使い分け**: 和文は筑紫Aオールド明朝（明朝体）、欧文は Futura LT Pro（幾何学サンセリフ）。この和洋のコントラストがブランドの品格を生む。混植しない（和文テキストに Futura を使わない、その逆も同様）
2. **palt 不使用**: `font-feature-settings: normal` がグローバル。字詰めは letter-spacing の明示指定で制御する方針。明朝体の等幅的な組みを活かすデザイン判断
3. **letter-spacing の三段階**: ニュースタイトル 0.15em（ワイド）/ プロダクトタイトル 0.125em（中間）/ 欧文見出し 0.05em（控えめ）。和文ほど letter-spacing を広くとり、明朝体の筆致に呼吸を持たせる
4. **#ff3300 オレンジレッドの象徴性**: 「焼きたて」の熱・素材の鮮度を想起させるブランド固有の色。見出しテキスト色としても、CTA 背景色としても使う二刀流。テキスト / 背景の両方で使える強い色
5. **角型ボタン（radius 0px）**: pill でも角丸でもない完全な矩形。菓子ブランドの甘さに対する、デザインのシャープさ。「焼き菓子の型」を想起させる幾何学的な潔さ
6. **面による空間構成**: 黒（#000000）→ グレー（#d2d2d2）→ 白（#ffffff）の三段階のサーフェスで奥行きを表現。シャドウを使わずに空間を生む
7. **vw ベースのスケーリング**: フォントサイズが viewport width に比例するため、ブレークポイントに依存しないフルイドデザイン

---

**取得日**: 2026-05-19
**出典**: https://buttersand.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
**フォント代替**: FOT-筑紫Aオールド明朝 Pr6 → Shippori Mincho（Google Fonts）/ FuturaLTPro → Jost（Google Fonts）
