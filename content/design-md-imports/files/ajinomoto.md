# DESIGN.md --- AJINOMOTO

> AJINOMOTO（https://www.ajinomoto.co.jp/）のデザイン仕様書。
> 2026-05-22 取得の computed style に基づく。
> 味の素グループのコーポレートサイト。「Eat Well, Live Well.」を掲げ、うま味調味料・冷凍食品・アミノ酸事業を展開する日本最大の総合食品メーカー。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表する総合食品メーカーのコーポレートサイト。**Ajinomoto Red（#e60012）** をブランドカラーとして全面に展開し、pill 型ナビボタンとクリーンな白背景で、信頼感と親しみやすさを両立。「食と健康」のリーディングカンパニーとして、清潔感のある情報設計
- **密度**: 商品情報・企業情報・サステナビリティ・レシピを含むコーポレートポータル型。セクションごとに背景色（白 / ライトピンク #ffefee / グレー #f8f8f8）を切り替えてリズムを作る
- **キーワード**: Ajinomoto Red、pill ナビ、UD新ゴ、デュアルフォントスタック、アクセシビリティ、食と健康
- **特徴**: **UD新ゴ R（ユニバーサルデザイン新ゴシック）** を本文に、**Noto Sans JP** を見出し・ナビに配した**デュアルフォントスタック構成**。UD フォントの採用はアクセシビリティ重視の姿勢を反映。ナビゲーションボタンは **border-radius 45px の pill 型** で統一。Ajinomoto Red（#e60012）はバッジ・見出し・ボーダー・CTA に頻出し、極めて支配的。palt 非適用、letter-spacing も normal で、装飾を排したシンプルな日本語タイポグラフィ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

味の素のカラーパレットは鮮烈な赤と清潔な白を軸にした、食品メーカーらしい明快で信頼感のある構成。

- **Ajinomoto Red** (`#e60012`): メインのブランドカラー。CTA ボタン・ナビゲーションアクセント・バッジ・セクション見出しに使用（rgb 230, 0, 18）。彩度の高い純粋な赤で強い視認性
- **Ajinomoto Red Variant** (`#e60a12`): 見出し・テキストアクセントに使用される微妙なバリアント（rgb 230, 10, 18）
- **Border Red** (`#cc0000`): ボーダー・pill ボタンの枠線に使用するダークレッド（rgb 204, 0, 0）

### Semantic（意味的な色）

- **Sustainability Green** (`#008849`): サステナビリティ・環境関連のアクセントカラー（rgb 0, 136, 73）。pill ボタンのボーダー色としても使用

### Text

- **Text Primary** (`#333333`): 本文テキスト・見出し（rgb 51, 51, 51）。純黒を避けたダークグレー
- **Text Secondary** (`#5f5f5f`): ヘッダー補足テキスト・メタ情報（rgb 95, 95, 95）
- **Text on Red** (`#ffffff`): 赤背景上の白テキスト

### Surface

- **Background（ページ背景）** (`#ffffff`): 白。クリーンな白背景が基本
- **Section Pink** (`#ffefee`): お知らせ・アナウンスセクションのライトピンク背景（rgb 255, 239, 238）。Ajinomoto Red の極薄バリアント
- **Section Gray** (`#f8f8f8`): セクション区切りのライトグレー背景（rgb 248, 248, 248）
- **Section Gray Deep** (`#f5f5f5`): より深いセクション背景（rgb 245, 245, 245）
- **Divider Gray** (`#f0f0f0`): 区切り線・境界のグレー（rgb 240, 240, 240）

### Border

- **Border** (`#cc0000`): pill ボタンの枠線（ダークレッド）
- **Border Neutral** (`#333333`): ニュートラルな pill ボタンの枠線
- **Border Green** (`#008849`): サステナビリティ文脈の pill ボタン枠線

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: UD新ゴ R --- モリサワの UD（ユニバーサルデザイン）新ゴシック Regular。文字の判別性・可読性を重視した設計。本文・一般テキストに使用
- **ゴシック体（見出し・ナビ）**: Noto Sans JP --- Google Fonts のオープンソースゴシック体。見出し・ナビゲーション・CTA テキストに使用
- **レガシーフォールバック**: メイリオ / Meiryo（Windows）、ヒラギノ角ゴ Pro（macOS）

### 3.2 欧文フォント

- **サンセリフ**: Arial, Verdana --- フォールバックチェーンに含まれる欧文フォント
- **セリフ・等幅**: 使用なし
- **絵文字**: Segoe UI Emoji, Segoe UI Symbol, Apple Color Emoji, Noto Color Emoji, Noto Emoji --- 完全な絵文字フォールバックチェーン

### 3.3 font-family 指定

```css
/* 本文（UD新ゴファースト） */
font-family: "UD新ゴ R", メイリオ, Meiryo,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  Arial, Verdana, "ＭＳ Ｐゴシック",
  "Lucida Grande", "Lucida Sans Unicode",
  "Segoe UI Emoji", "Segoe UI Symbol",
  "Apple Color Emoji", "Noto Color Emoji", "Noto Emoji",
  sans-serif;

/* 見出し・ナビゲーション */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- **デュアルフォントスタック構成**: 本文は UD新ゴ R を先頭、見出し・ナビは Noto Sans JP を使用。用途別にフォントを切り替える設計
- 本文の UD新ゴ R はモリサワのフォント。環境にインストールされていない場合はメイリオ → ヒラギノ角ゴ Pro の順でフォールバック
- 見出しの Noto Sans JP は Google Fonts 経由の Web フォント。環境非依存で安定した表示
- 絵文字フォールバック（Segoe UI Emoji 〜 Noto Emoji）が長い。レシピ・食品コンテンツでの絵文字使用を想定した設計
- **ヒラギノは Pro 指定**（ProN ではない）。JIS X 0208 ベースの旧字形を使用

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1（ロゴ） | --- | 32px | 700 | 1.5 (48px) | normal | ヘッダーロゴテキスト。color: #333333 |
| H2（ヒーロー） | Noto Sans JP | 46.08px | 700 | 1.5 (69.12px) | normal | ヒーローセクション。color: #e60a12（赤） |
| H3（セクションヒーロー） | Noto Sans JP | 46.08px | 700 | 1.5 | normal | セクション大見出し。color: #333333 |
| H3（パーパス） | Noto Sans JP | 40px | 700 | 1.5 (60px) | normal | パーパスセクション見出し |
| P（コンテンツ） | Noto Sans JP | 17.28px | 700 | 1.6 (27.65px) | normal | コンテンツ本文。太めの本文テキスト |
| P（ナビ） | Noto Sans JP | 14.4px | 700 | 1.5 (21.6px) | normal | ナビゲーションリンク |
| Span（ヘッダー） | --- | 15.5px | 700 | 1.5 (23.25px) | normal | ヘッダー補足。color: #5f5f5f |
| Body | UD新ゴ R | 16px | 400 | 1.5 (24px) | normal | デフォルト本文。color: #333333 |
| Pill（ガイド） | Noto Sans JP | 15px | 700 | 1.5 | normal | ヘッダーガイドボタン |

**ウェイトの特徴**:
- 見出し・ナビ・コンテンツテキストは **Noto Sans JP / weight: 700** で統一。太めのウェイトが支配的
- 本文のデフォルトは **UD新ゴ R / weight: 400**。読みやすさ優先の設計
- H2 ヒーローの色が **#e60a12（Ajinomoto Red）** で、他の見出し（#333333）と差別化。赤い見出しがヒーローのアイキャッチ
- 見出しの 46.08px は rem ベースの計算値（2.88rem x 16px）

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（24px / 16px）--- 日本語として標準的な行間
- **コンテンツの行間**: `line-height: 1.6`（27.65px / 17.28px）--- コンテンツ本文はやや広め
- **見出しの行間**: `line-height: 1.5`（全見出し共通）--- 見出しも 1.5 で統一
- **本文の字間**: `letter-spacing: normal`（0）--- カスタム字間なし
- **見出しの字間**: `letter-spacing: normal`（0）--- こちらもカスタム字間なし

**ガイドライン**:
- line-height は**全要素 1.5〜1.6 で統一**。極端に詰まった見出しも、極端に広い本文もない均一な設計
- letter-spacing は**全要素 normal**。palt も非適用で、各フォントのデフォルト字間をそのまま使う設計
- 日本語本文の line-height 1.5 はやや詰めの部類。UD新ゴ R の可読性の高さが 1.5 でも十分な読みやすさを実現

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長いURL・商品名の折り返し */
```

- 日本語固有の禁則処理は特別な設定なし。ブラウザデフォルトに従う
- 商品名に「味の素(R)」「Cook Do(R)」等の登録商標や和英混在が多いため、overflow-wrap の設定が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。UD新ゴ R / Noto Sans JP ともにデフォルト字間をそのまま使用
- UD フォント（UD新ゴ R）は字間の均一性が設計に織り込まれているため、palt を適用しない方が UD フォントの設計意図に沿う
- **kern**: ブラウザデフォルトに委ねる

### 3.8 縦書き

- 該当なし。味の素コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Pill（ヘッダーガイド・赤枠）**

味の素のナビゲーションボタンは **pill 型（border-radius 45px）** が基本形。

- Background: `transparent`
- Text: `#cc0000`
- Border: 1px solid `#cc0000`
- Border Radius: **45px**（pill 型）
- Padding: `3px 12px` 〜 `4.5px 30px`
- Font Size: 15px
- Font Weight: 700
- Font Family: Noto Sans JP

**Pill（ヘッダーガイド・黒枠）**

- Background: `transparent`
- Text: `#333333`
- Border: 1px solid `#333333`
- Border Radius: **45px**（pill 型）
- Padding: `3px 12px` 〜 `4.5px 30px`
- Font Size: 15px
- Font Weight: 700

**Pill（サステナビリティ・緑枠）**

- Background: `transparent`
- Text: `#008849`
- Border: 1px solid `#008849`
- Border Radius: **45px**（pill 型）
- Padding: `3px 12px` 〜 `4.5px 30px`
- Font Size: 15px
- Font Weight: 700

**ボタンの考え方**:
- ナビゲーション・ガイドボタンは全て **pill 型（border-radius 45px）+ 透明背景 + 枠線** のゴーストボタン構成
- 枠線の色でセマンティクスを表現: **赤（#cc0000）** = ブランド・主要アクション、**黒（#333333）** = ニュートラル、**緑（#008849）** = サステナビリティ
- 塗りつぶし CTA ではなくゴーストボタンを多用するのが味の素の特徴。コーポレートサイトとしての上品な抑制
- radius が 45px と大きく、完全な pill 形状。KIRIN（92〜1440px）に次ぐ pill 寄りの設計

### Nav Cards

- Background: `transparent`
- Border Radius: **5px**（角丸）
- Box Shadow: `rgba(0,0,0,0.1) 1.6px 1.6px 4.8px 3.2px`
- Font Size: 16px
- Font Weight: 700
- 備考: ナビゲーション内のカードリンク。pill ではなく控えめな角丸。シャドウで浮き感を演出

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cc0000`（推定）
- Border (focus): 2px solid `#e60012`
- Border Radius: 4px
- Padding: `8px 12px`
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 5px
- Padding: 16px
- Shadow: `rgba(0,0,0,0.1) 1.6px 1.6px 4.8px 3.2px` --- ナビカードと同じ柔らかいシャドウ

### Badges

- Background: `#e60012`（Ajinomoto Red 塗りつぶし）
- Text: `#ffffff`
- Border Radius: 4px
- Padding: `2px 8px`
- Font Size: 12〜14px
- Font Weight: 700
- 備考: 新着・お知らせ等のバッジ。pill ではなく控えめな角丸

---

## 5. Layout Principles

### Spacing Scale

実測値に基づく推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 3px | pill ボタンの縦 padding |
| S | 8px | バッジ padding |
| M | 16px | カード内 padding、セクション内余白 |
| L | 30px | pill ボタンの横 padding |
| XL | 48px | ヘッダー横 padding |
| XXL | 64px | セクション上下 padding |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): `48px`
- セクション間の区切り: 背景色の切り替え（白 → ピンク #ffefee → グレー #f8f8f8）で視覚的に分離

### Grid

- コンテンツグリッド: デスクトップで 3〜4 カラム
- ニュースリスト: 縦積み
- セクションは全幅背景 + コンテンツ幅制約の二層構造

---

## 6. Depth & Elevation

味の素は背景色の切り替えとカードシャドウで階層を構成する。

| Level | 表現 | 用途 |
|-------|------|------|
| 0 | `background: #ffffff` | ページ背景（白） |
| 1 | `background: #f8f8f8` | セクション背景（ライトグレー） |
| 1 | `background: #ffefee` | お知らせセクション（ライトピンク） |
| 2 | `box-shadow: rgba(0,0,0,0.1) 1.6px 1.6px 4.8px 3.2px` | ナビカード・コンテンツカード |
| 3 | `background: #e60012` | Ajinomoto Red のバッジ・アクセント面 |

- 白背景の上にライトグレー / ライトピンクでセクションを分離する構成が基本
- シャドウは `1.6px 1.6px 4.8px 3.2px` の4値指定で、右下方向に柔らかく落ちる。オフセットが小さくスプレッドが大きい、ソフトな浮き感
- Ajinomoto Red（#e60012）のバッジが面として最も強い存在感

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文フォントは **UD新ゴ R → メイリオ → ヒラギノ角ゴ Pro** の順でフォールバックチェーンを指定する
- 見出し・ナビフォントは **Noto Sans JP** を使う
- CTA・ナビボタンは **pill 型（border-radius 45px）+ ゴーストボタン** にする
- ブランドカラーは **#e60012（Ajinomoto Red）** を使う
- ページ背景は **#ffffff（白）** を基本とし、セクションごとに **#f8f8f8** や **#ffefee** で変化をつける
- テキストカラーは **#333333** を使い、補足は **#5f5f5f** を使う
- pill ボタンの枠線色でセマンティクスを表現する（赤 = ブランド、黒 = ニュートラル、緑 = サステナビリティ）
- 本文の line-height は **1.5** を使う
- 見出しは Noto Sans JP / **font-weight: 700** で統一する
- letter-spacing は **normal** にする（カスタム字間は使わない）
- バッジは **#e60012 塗りつぶし + 白テキスト** にする
- 絵文字フォールバック（Segoe UI Emoji 〜 Noto Emoji）をフォントスタックに含める

### Don't（禁止）

- 明朝体・セリフ系フォントを追加しない（ゴシック体構成がブランドの基本）
- pill ボタンに塗りつぶし背景を使わない（ゴーストボタンが味の素ナビの基本形。バッジは例外）
- ページ背景を **#f8f8f8 や #ffefee** でベタ塗りしない（白が基本。セクション分離の限定使用）
- テキストに `#000000`（純黒）を使わない（`#333333` がデザインの正値）
- `palt`（font-feature-settings: "palt"）を適用しない（normal がデフォルト設計。UD新ゴ R の設計意図を尊重）
- letter-spacing にカスタム値を設定しない（全要素 normal）
- pill ボタンの border-radius を 45px 以外にしない（角丸 4〜8px や radius 20px にすると味の素らしさが失われる）
- Ajinomoto Red（#e60012）をテキスト色として多用しない（見出しのアクセントとバッジに限定）
- Sustainability Green（#008849）をブランドカラーの代替として使わない（サステナビリティ文脈専用）
- ナビカードにボーダーを追加しない（シャドウで浮き感を出す設計）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | スマートフォン。ハンバーガーナビ化 |
| Tablet | 768〜1023px | タブレット |
| Desktop | >= 1024px | デスクトップ |

### モバイル時の調整

- H2/H3（46.08px）→ 28〜32px 程度に縮小
- ヘッダー横 padding（48px）→ 16px に縮小
- コンテンツグリッドは 1〜2 カラムに折り返し
- pill 型ボタンの形状（radius 45px）はモバイルでも維持
- セクション背景色（#f8f8f8 / #ffefee）はモバイルでも変更なし

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- pill ボタンは padding `3px 12px` 〜 `4.5px 30px` と小さめのため、モバイルでは padding を拡大して十分なタッチ領域を確保する
- UD新ゴ R の採用に象徴されるアクセシビリティ重視の設計。タッチターゲットも十分なサイズを推奨

### フォントサイズの調整

- モバイルでは本文 14〜16px、見出しはデスクトップの 60〜70% 程度に縮小（46.08px → 28〜32px）
- Noto Sans JP は Web フォントのため、デバイス間で表示が安定
- UD新ゴ R はローカルフォントのため、インストールされていない環境ではメイリオ / ヒラギノにフォールバック

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: AJINOMOTO（味の素）
Origin: 味の素グループ --- 「Eat Well, Live Well.」うま味調味料・冷凍食品・アミノ酸の日本最大総合食品メーカー
Ajinomoto Red: #e60012（ブランドカラー・バッジ・CTA 枠線）
Ajinomoto Red Variant: #e60a12（見出しテキスト用）
Border Red: #cc0000（pill ボタン枠線）
Sustainability Green: #008849（サステナビリティ文脈のみ）
Text Primary: #333333
Text Secondary: #5f5f5f
Background: #ffffff（白）
Section Pink: #ffefee（お知らせセクション）
Section Gray: #f8f8f8
Divider Gray: #f0f0f0
Font Body: "UD新ゴ R", メイリオ, Meiryo,
           "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
           Arial, Verdana, "ＭＳ Ｐゴシック",
           "Lucida Grande", "Lucida Sans Unicode",
           "Segoe UI Emoji", "Segoe UI Symbol",
           "Apple Color Emoji", "Noto Color Emoji", "Noto Emoji",
           sans-serif
Font Heading: "Noto Sans JP", sans-serif
palt: 非適用（font-feature-settings: normal）
letter-spacing: normal（全要素）
Body: 16px / 400 / line-height 1.5 / UD新ゴ R / color #333333
H2 Hero: 46.08px / 700 / line-height 1.5 / Noto Sans JP / color #e60a12
H3 Section: 46.08px / 700 / line-height 1.5 / Noto Sans JP / color #333333
H3 Purpose: 40px / 700 / line-height 1.5 / Noto Sans JP
P Content: 17.28px / 700 / line-height 1.6 / Noto Sans JP
P Nav: 14.4px / 700 / line-height 1.5 / Noto Sans JP
Pill Style: bg transparent / border 1px solid #cc0000 / radius 45px / padding 3-4.5px 12-30px
Badge Style: bg #e60012 / text #fff / radius 4px
Card Shadow: rgba(0,0,0,0.1) 1.6px 1.6px 4.8px 3.2px
Card Radius: 5px
```

### プロンプト例

```
味の素のデザインシステムに従って、商品一覧ページを作成してください。
- 本文フォント: "UD新ゴ R", メイリオ, Meiryo,
    "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    Arial, Verdana, sans-serif
- 見出しフォント: "Noto Sans JP", sans-serif
- font-feature-settings: normal（palt は非適用）
- letter-spacing: normal（カスタム字間なし）
- 本文: 16px / line-height: 1.5 / color: #333333
- 見出し: 46.08px / font-weight: 700 / color: #333333（Noto Sans JP）
- ページ背景: #ffffff
- セクション背景: #f8f8f8（グレー）/ #ffefee（ピンク・お知らせ）
- pill ボタン「詳しく見る」: bg transparent / border 1px solid #cc0000 /
    border-radius: 45px / padding: 4.5px 30px / font-weight: 700
- バッジ「NEW」: bg #e60012 / text #fff / border-radius: 4px
- カード: bg #ffffff / box-shadow: rgba(0,0,0,0.1) 1.6px 1.6px 4.8px 3.2px /
    border-radius: 5px
- Ajinomoto Red（#e60012）はバッジとアクセントに限定使用
```

### 字詰め・組版の重要ポイント

1. **デュアルフォントスタック**: UD新ゴ R（本文）と Noto Sans JP（見出し・ナビ）を用途別に使い分ける。UD新ゴ R はモリサワのユニバーサルデザインフォントで文字の判別性が高く、本文の可読性を確保。Noto Sans JP は Web フォントとして環境非依存の安定した見出し表示を実現
2. **UD新ゴ R のフォールバック**: UD新ゴ R はライセンスフォントのため、未インストール環境ではメイリオ → ヒラギノ角ゴ Pro にフォールバック。preview.html では Noto Sans JP（Google Fonts）を代替使用
3. **pill ゴーストボタン**: 塗りつぶしではなく透明背景 + 枠線の pill ボタンが味の素ナビの基本形。枠線の色（赤 / 黒 / 緑）でセマンティクスを表現する点がユニーク。radius 45px は完全な pill 形状
4. **Ajinomoto Red の使い分け**: #e60012 はバッジ（塗りつぶし）、H2 ヒーロー見出し（テキスト色）、ナビアクセントに使用。#cc0000 はボーダー用のダークバリアント。#e60a12 はテキストアクセント用の微妙な違い
5. **line-height 1.5〜1.6 の統一感**: 見出しも本文も 1.5 で統一する設計は珍しい。多くのサイトが見出し 1.2〜1.3 / 本文 1.7〜2.0 と差をつける中、味の素は均一なリズムを選択
6. **ヒラギノは Pro（ProN ではない）**: フォールバックチェーンで "Hiragino Kaku Gothic Pro" を指定。ProN（JIS X 0213 対応）ではなく Pro（JIS X 0208 ベース）を使用。レガシー互換性を重視した選択
7. **絵文字フォールバックの充実**: Segoe UI Emoji → Segoe UI Symbol → Apple Color Emoji → Noto Color Emoji → Noto Emoji の5段階。食品メーカーとしてレシピコンテンツでの絵文字表示を重視

---

**取得日**: 2026-05-22
**出典**: https://www.ajinomoto.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
