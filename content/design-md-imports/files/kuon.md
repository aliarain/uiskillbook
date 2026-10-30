# DESIGN.md — KUON

> KUON（https://kuon.tokyo/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。
> Shopify（Dawn テーマ）ベース。カスタム Web フォントは未使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本の伝統的な布工芸（boro、sashiko）をコンテンポラリーメンズウェアに昇華するラグジュアリー職人ブランド。Shopify Dawn テーマをベースにしながら、**Apple システムセリフ（New York）** を全面採用した、Eコマースとしては極めて稀なセリフ・ファースト構成。装飾を抑えながらも、フォント選択ひとつで素材への敬意と編集感を両立させている
- **密度**: ゆったりとしたプロダクトショーケース型。余白を広くとり、写真が主役となる構成。テキストは最小限で、製品の物語を語ることに徹する
- **キーワード**: 職人、伝統布工芸、セリフ・ファースト、エディトリアル、ネイビーアクセント、シャープエッジ、Quiet Luxury
- **特徴**: **New York（Apple セリフシステムフォント）** のみを使用し、和文フォントを一切スタック内に持たない。これは日本のファッションEコマースとして極めて稀な設計。すべての font-weight は **400（レギュラー）のみ**で構成され、太字を使わずセリフの字形で視覚的階層を構築する。角丸は **border-radius: 0px（完全なシャープエッジ）**。ブランドアクセントは **ネイビー #2a305c** の1色のみ。palt（プロポーショナル字詰め）は非適用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

KUON のカラーパレットは白地に単一のネイビーを配した、極めて抑制的な構成。

- **Brand Navy** (`#2a305c`): CTA 背景・プライマリボタン・フィルターボタン（rgb 42, 48, 92）。絞り染め・藍染に通じる深みのある紺
- **Brand Navy on White** (`#ffffff`): ネイビー背景上の白テキスト

### Text & Neutral

- **Text Primary** (`#121212`): 本文・見出しテキスト（rgb 18, 18, 18）— 純黒を避けたソフトブラック
- **Text Secondary** (`rgba(18, 18, 18, 0.75)`): 補足テキスト・価格等のセカンダリラベル（75% 透過）
- **Text on Dark** (`#ffffff`): ネイビー背景上の白テキスト

### Surface

- **Background** (`#ffffff`): ページ背景
- **Surface Gray** (`#f3f3f3`): フッター背景・サブ面（rgb 243, 243, 243）
- **Surface Dark** (`#2a305c`): CTA・プライマリボタンの背景

### Functional

- **Announcement Bar**: ダーク背景（#2a305c 等）上に白テキスト。アナウンス・プロモーション用
- **Input Field BG** (`#ffffff`): 入力欄背景

---

## 3. Typography Rules

### 3.1 和文フォント

KUON は和文フォントをフォールバックチェーンに持たない。日本語テキストは Apple システムセリフの和文グリフ（Hiragino Mincho 相当）でレンダリングされる。

- **和文フォント指定なし**: font-family スタックに和文ゴシック・和文明朝のいずれも含まない
- 日本語テキストは OS フォールバックに委ねられ、macOS では游明朝 / ヒラギノ明朝系のセリフグリフで表示される

> **補足**: これは意図的な設計と考えられる。「New York」は Apple の SF Pro に連なるシステムセリフで、日本語ページにあえて欧文セリフ系スタックだけを指定することで、英語・日本語問わず統一した editorial な印象を持たせている

### 3.2 欧文フォント

- **セリフ（プライマリ）**: New York, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif
- **サンセリフ・等幅**: 使用なし（セリフ一本構成）

### 3.3 font-family 指定

```css
/* 全テキスト共通 — New York システムセリフスタック */
font-family: "New York", "Iowan Old Style", "Apple Garamond",
  Baskerville, "Times New Roman", "Droid Serif", Times,
  "Source Serif Pro", serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

**フォールバックの考え方**:
- 先頭の "New York" は macOS / iOS で Apple のシステムセリフとして解決される
- "Iowan Old Style" は iOS のフォールバック、"Apple Garamond" は旧 macOS、Baskerville はクロスプラットフォーム
- "Times New Roman" 以降は Windows / Android / Web 用のフォールバック
- 和文フォントは意図的に省略されており、OS デフォルトの明朝系グリフに委ねる設計
- 絵文字フォントをチェーン末尾に配置（Shopify Dawn テーマの標準構成）

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-09 取得）

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H1（ページ見出し） | 36px | 400 | — | 0.54px (0.015em) | ヒーロー・コレクション名 |
| H2（バナー見出し） | 21.6px | 400 | 1.3 | 0.54px (0.025em) | セクション見出し |
| H3（カード見出し・大） | 18–20px | 400 | 1.3 | 0.54px (0.027–0.03em) | コレクションカード |
| H3（カード見出し・小） | 16.2px | 400 | 1.3 | — | サブカード見出し |
| H3（製品カード） | 11.7px | 400 | 1.3 | 0.54px (0.046em) | 商品一覧の製品名 |
| Body | 16px | 400 | 1.8 (28.8px) | 0.6px (0.0375em) | 本文・説明文 |
| Nav Link | 14px | 400 | 1.8 | 0.6px (0.043em) | ナビゲーションリンク |
| Announcement / Badge | 11.7px | 400 | 1.3 | 1px (0.085em) | アナウンスバー・バッジ |

**ウェイトの特徴**:
- 全テキストが **weight: 400** — 太字ゼロの一本構成
- セリフの字形の違い（セリフの有無、字幅）だけで視覚的な情報階層を作る設計

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（28.8px / 16px）— 英文セリフとしては広め。ゆったりとした読み心地
- **見出しの行間**: `line-height: 1.3`— コンパクトにまとめ、写真との対比を際立たせる
- **本文の字間**: `letter-spacing: 0.6px`（≈ 0.0375em @ 16px）— 全体に均一に適用
- **見出しの字間**: `letter-spacing: 0.54px`（0.015–0.046em。サイズにより変動）— 本文とほぼ同水準
- **アナウンス / バッジ**: `letter-spacing: 1px`（0.085em）— 最も広い字間で視認性を上げる

**ガイドライン**:
- letter-spacing は **0.54〜1px** の範囲で全要素に一貫適用されており、 letter-spacing: normal（0）の要素は存在しない
- 行間は本文 1.8 / 見出し 1.3 の **二段階構成** のみ
- 見出しサイズが 11.7px まで小さくなるが、line-height 1.3 に letter-spacing 0.54px の組み合わせで読みやすさを確保

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長い英単語・製品コードの折り返し */
```

- Dawn テーマのデフォルト設定に従う。日本語固有の禁則処理は特別な設定なし
- 製品名・コレクション名は英語が主体のため、英単語の折り返し制御が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。日本語テキストに palt を使わないことで、セリフグリフの固有の字間をそのまま表示
- **kern**: ブラウザデフォルト（font-feature-settings: normal）に委ねる
- システムセリフフォント（New York / Baskerville 等）はカーニングテーブルを内蔵しており、font-feature-settings 指定なしでも適切なカーニングが効く

### 3.8 縦書き

- 該当なし。KUON は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし）**

KUON の CTA は **ネイビー塗りつぶし + シャープエッジ** が基本。

- Background: `#2a305c`
- Text: `#ffffff`
- Border Radius: **0px**（完全なシャープエッジ — pill も角丸も使わない）
- Padding: `0 30px`（縦は height で制御、横は30px）
- Font Family: "New York" システムセリフスタック
- Font Size: 15px
- Font Weight: 400
- Letter Spacing: 0.6px 程度

**Secondary（ゴースト / アウトライン）**

- Background: `transparent`
- Text: `#2a305c`（またはコンテキストに応じた前景色）
- Border: 1px solid（ブランドカラーまたは前景色）
- Border Radius: **0px**
- Padding: Primary に準拠

**Filter / Apply ボタン**

- Background: `#2a305c`
- Text: `#ffffff`
- Border Radius: **0px**
- 絞り込みパネルの適用ボタン。Primary CTA と同一スタイル

**ボタンの考え方**:
- すべてのボタンが **border-radius: 0px** — KUON のデザインにおいて丸みは存在しない
- プライマリは **ネイビー #2a305c 塗りつぶし + 白テキスト**
- font-weight は **400** 固定（CTA テキストを太くしない）
- シャープエッジはブランドの職人的な硬質感と手仕事の精度を暗示する

### Inputs

- Background: `#ffffff`
- Border: 実測から推定 1px solid（コンテキストに依存）
- Border Radius: **0px**（ボタンと同一の直角スタイル）
- Padding: `15px`（上下・左右共通）
- Font Size: 16px
- Line Height: `24px`（1.5）
- Letter Spacing: 0.4px
- Text Color: `#121212`

**フォーカス時**:
- Dawn テーマのデフォルトフォーカスリングを使用（システム依存）

### Cards（製品カード）

- Background: `#ffffff`
- Border Radius: **0px**
- Shadow: なし（フラット）
- 構成: 製品写真（全面）+ 製品名（11.7px / 400 / ls 0.54px）+ 価格
- ホバー時の視覚的フィードバックは写真のオーバーレイ等で実装（Dawn テーマ標準）

### Navigation

- Link Size: 14px
- Weight: 400
- Line Height: 1.8
- Letter Spacing: 0.6px
- Color: `#121212`
- Header Padding: `4px 32px`

### Footer

- Background: `#f3f3f3`
- Padding: `36px 0 100px`
- Text Color: `#121212`

---

## 5. Layout Principles

### Spacing Scale

Shopify Dawn テーマの CSS Custom Properties に基づく実測値:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ヘッダー上下 padding |
| S | 15px | 入力欄 padding |
| M | 30px | ボタン横 padding |
| L | 32px | ヘッダー横 padding |
| XL | 36px | フッター上部 padding |
| XXL | 100px | フッター下部 padding（モバイル考慮含む） |

### Container

- Max Width: Dawn テーマのデフォルト（通常 1200〜1440px）
- Padding (horizontal): `32px`（ヘッダー実測値）

### Grid

- 製品グリッド: デスクトップで 3〜4カラム（Dawn 標準）
- Gutter: Dawn テーマのデフォルト（推定 24〜32px）

---

## 6. Depth & Elevation

KUON はシャドウを使わない。ネイビー #2a305c とグレー #f3f3f3 と白のコントラストだけで面の階層を構成する。

| Level | Shadow / BG | 用途 |
|-------|-------------|------|
| 0 | なし | 通常要素（製品カード、本文エリア） |
| 1 | `background: #f3f3f3` | フッター・サブ面 |
| 2 | `background: #2a305c` | CTA・プライマリボタン・アナウンスバー |

- モーダル・ドロワー使用時は Dawn テーマのオーバーレイ（推定 `rgba(0,0,0,0.5)` 程度）
- すべての境界はシャドウではなく **背景色の差** と **ボーダー** で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **"New York" システムセリフスタック全体** を指定する（先頭の "New York" だけでは Windows・Android で非表示になる）
- すべてのテキストに **font-weight: 400** を使う（KUON のデザイン言語に太字は存在しない）
- ボタン・入力欄は **border-radius: 0px** の完全なシャープエッジにする
- アクセントカラーは **#2a305c（ネイビー）のみ** に絞る
- letter-spacing は **0.54〜0.6px** を全要素に一貫適用する
- 本文の line-height は **1.8** を使う（セリフフォントの読みやすさのために重要）
- 見出しの line-height は **1.3** を使う
- 背景色は `#ffffff`（白）と `#f3f3f3`（ライトグレー）と `#2a305c`（ネイビー）の3種に絞る
- 余白を広くとり、製品写真が呼吸できるスペースを確保する

### Don't（禁止）

- ゴシック体・サンセリフ系フォントを追加しない（セリフ一本構成がブランドの核心）
- `font-weight: 700`（bold）を使わない（太字ゼロの設計を守る）
- `border-radius` に 1px 以上の値を与えない（pill も角丸も KUON にはない）
- ネイビー #2a305c 以外のカラーをアクセントとして使わない
- `palt`（font-feature-settings: "palt"）を適用しない（セリフシステムフォントの字形をそのまま活かす設計）
- シャドウ（box-shadow）を使わない
- letter-spacing を 0（normal）にしない（全要素に一定の字間が設定されている）
- テキストを密集させない（職人ブランドの静謐さと余白は必須）
- `#000000`（純黒）をテキスト色に使わない（`#121212` が正値）

---

## 8. Responsive Behavior

### Breakpoints

Shopify Dawn テーマの標準ブレークポイント:

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | スマートフォン。ナビはハンバーガー化 |
| Tablet | 750〜989px | タブレット |
| Desktop | ≥ 990px | デスクトップ |

### モバイル時の調整

- H1（36px）→ 24〜28px 程度に縮小
- ヘッダー横 padding（32px）→ 16px に縮小
- 製品グリッドは 1〜2カラムに折り返し
- シャープエッジ（radius: 0px）はモバイルでも維持
- letter-spacing（0.54〜0.6px）はモバイルでも変更なし

### タッチターゲット

- CTA ボタンは padding `0 30px` のため、高さは実装側でタッチターゲット（最低 44px）を確保する
- 直角ボタンのため視覚的なタップ領域の明示が重要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: KUON（クオン）
Origin: 日本伝統布工芸（boro / sashiko）ベースのラグジュアリーメンズウェア
Brand Navy: #2a305c
Text Primary: #121212
Text Secondary: rgba(18, 18, 18, 0.75)
Background: #ffffff
Surface Gray: #f3f3f3
Font: "New York", "Iowan Old Style", "Apple Garamond", Baskerville,
      "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
Font Weight: 400 のみ（太字ゼロ）
palt: 非適用（font-feature-settings: normal）
Body: 16px / 400 / line-height 1.8 / letter-spacing 0.6px
H1: 36px / 400 / letter-spacing 0.54px
H2: 21.6px / 400 / line-height 1.3 / letter-spacing 0.54px
Product Title: 11.7px / 400 / line-height 1.3 / letter-spacing 0.54px
Nav: 14px / 400 / line-height 1.8 / letter-spacing 0.6px
CTA Style: bg #2a305c / text #fff / radius 0px / padding 0 30px / size 15px
Button Radius: 0px（すべて直角）
Shadow: 使用しない
```

### プロンプト例

```
KUON のデザインシステムに従って、コレクションページを作成してください。
- フォント: "New York", "Iowan Old Style", "Apple Garamond", Baskerville,
    "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif
- font-weight は 400 のみ（太字は一切使わない）
- font-feature-settings: normal（palt は非適用）
- 本文: 16px / line-height: 1.8 / letter-spacing: 0.6px / color: #121212
- H1: 36px / letter-spacing: 0.54px
- H2: 21.6px / line-height: 1.3 / letter-spacing: 0.54px
- 製品タイトル: 11.7px / line-height: 1.3 / letter-spacing: 0.54px
- CTA「ADD TO CART」: bg #2a305c / text #fff / border-radius: 0 / padding: 0 30px
- border-radius はすべての要素で 0px（シャープエッジのみ）
- 背景: #ffffff。フッターのみ #f3f3f3
- シャドウは一切使わない
- 余白を広くとる（Letter Spacing と line-height 1.8 で呼吸のある組版に）
```

### 字詰め・組版の重要ポイント

1. **セリフ・ファースト**: 日本のファッション EC で New York システムセリフのみを採用するのは極めて稀。スタック全体を正確に指定しないと、Windows や Android では Times New Roman 以前のセリフが適用されず意図したデザインにならない
2. **太字ゼロの一本構成**: font-weight: 400 のみ。セリフの字形の「ストロークの強弱」がウェイト変化の代わりをしており、bold を加えると字形の力学が崩れる
3. **シャープエッジ（radius: 0px）**: ボタン・入力欄・カードすべてに一貫。boro や sashiko の直線的な縫い目、裂き織りの角を暗示するデザイン言語
4. **ネイビー #2a305c の単色アクセント**: 藍染・縫い糸の色を想起させるネイビーが唯一のブランドアクセント。鮮やかな色は使わない
5. **letter-spacing の一貫性**: 0.54〜0.6px を全要素に適用。small（11.7px）から large（36px）まで絶対値で一定に近い字間を保つことで、異なるサイズでも統一感のある組版を実現
6. **palt 非適用**: システムセリフは palt（プロポーショナル字詰め）を使わない。和文グリフはデフォルト字間のまま表示することで、欧文セリフと和文明朝の字面が自然に並ぶ

---

**取得日**: 2026-05-09
**出典**: https://kuon.tokyo/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出（Shopify Dawn テーマ）
