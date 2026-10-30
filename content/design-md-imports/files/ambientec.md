# DESIGN.md — Ambientec

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://ambientec.co.jp/
> Ambientec は「灯りを、道具から作品へ」を掲げるポータブル照明ブランド。
> コードレスの高級テーブルランプ（TURN / xtal / Bottled 等）を扱う。実測は EC トップおよび製品ページに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 静謐でギャラリー的。余白を主役にし、製品写真と灯りの陰影が引き立つよう UI は極限まで引き算されている
- **密度**: ゆったりとした低密度レイアウト。ファーストビューは大判ビジュアル＋わずかなラベルのみ
- **キーワード**: ミニマル / 上質 / 硬質 / 静か / エディトリアル
- **形状言語**: 角丸を一切使わない（`border-radius: 0`）。ボタンは塗りではなく細い罫線のアウトライン。直線と直角で構成する
- **書体の性格**: 欧文グロテスク（Neue Haas Grotesk）を主役に据え、見出し・ナビ・ボタンは英字を **大文字（uppercase）** で組む。和文は DNP 秀英角ゴシック銀で欧文に馴染ませる

---

## 2. Color Palette & Roles

<!-- 実サイトの computed style / interactive 実測に基づく。純白・純黒は使わずわずかに色味を含んだニュアンスカラーを使う -->

### Base（下地）

- **Background** (`#fdfdfc`): ページ全体の下地。純白ではなくごくわずかに暖色を含んだオフホワイト
- **Surface** (`#f0f0ed`): セクションパネル・切替領域の面色。下地よりわずかに沈んだウォームグレー
- **Surface Alt** (`#efefeb`): サブパネル・区切り領域

### Text（文字色）

- **Text Primary** (`#161615`): 見出し・本文。純黒ではないニアブラック（rgb(22,22,21)）
- **Text Secondary** (`#303030`): リード文・段落補足（rgb(48,48,48)）
- **Text on Dark** (`#ffffff` / `#fdfdfc`): 暗色ビジュアル上に重ねるナビ・ボタン文字
- **Text Muted** (`rgba(28,28,28,0.6)`): フォームラベル等の弱い文字

### Accent（アクセント）

- **Taupe Gray** (`#999487`): 大見出し（h2）の文字色、アウトラインボタンの罫線色に使う中間色（rgb(153,148,135)）。ブランドの"作品然とした静けさ"を担う中核色
- **Plum** (`#975f71`): ごく限定的に使う差し色（"Page top" アンカー等）。灯りの温もりを想起させるくすんだ小豆色（rgb(151,95,113)）

### Line（罫）

- **Border** (`#dadad9`): 区切り線・入力欄の枠（rgb(218,218,217)）

### Semantic（意味的な色 / EC 機能）

- **Success** (`#307a07`): 在庫あり・完了
- **Warning** (`#ed8a00`): 注意喚起
- **Danger / Sale** (`#cb2b2b`): エラー・セール価格

### 色に関する設計思想

- 純白（`#ffffff`）・純黒（`#000000`）を避け、`#fdfdfc` / `#161615` のニュアンスカラーで柔らかさと上質さを両立させる
- 彩度の高い色は使わず、taupe（`#999487`）と plum（`#975f71`）の低彩度アクセントのみに絞る
- 塗り面は最小限。色はほぼ「文字色」と「罫線色」として現れる

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: DNP 秀英角ゴシック銀（`dnp-shuei-gothic-gin-std`, Adobe Fonts）。欧文グロテスクに合わせた、ふところの締まった端正な角ゴシック
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ（主役）**: Neue Haas Grotesk（`"Neue Haas Grotesk Text Pro"` / `neue-haas-grotesk-display`, Adobe Fonts）。本文は Text Pro、大見出しは Display を使い分ける
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: Neue Haas Grotesk・秀英角ゴシック銀はいずれも Adobe Fonts のためローカル環境・preview.html では表示できない。
> - Neue Haas Grotesk → **Helvetica Neue**（ネイティブ）／ Web では **Inter**（ニュートラルなネオグロテスク）で代替
> - 秀英角ゴシック銀 → **Zen Kaku Gothic New**（字面・ふところが近い角ゴシック）または Noto Sans JP

### 3.3 font-family 指定

```css
/* 本文（Neue Haas Grotesk Text Pro） */
font-family: "Neue Haas Grotesk Text Pro", neue-haas-grotesk-display,
             dnp-shuei-gothic-gin-std, sans-serif;

/* 大見出し（Neue Haas Grotesk Display） */
font-family: neue-haas-grotesk-display, dnp-shuei-gothic-gin-std, sans-serif;
```

**フォールバックの考え方**:
- **欧文優先の並び**。Neue Haas Grotesk を先頭に置き、欧文グリフの品質を最優先する
- 和文グリフは後段の秀英角ゴシック銀が拾う（欧文フォントに無い字を補完）
- 欧文と和文で書体の重心・線幅が揃うよう選定されている

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h2) | Neue Haas Grotesk Display | 56px | 500 | 1.14 | 0.016em | セクション大見出し・taupe (`#999487`) |
| Heading 1 | Neue Haas Grotesk Text Pro | 32px | 700 | 1.65 | 0 | ページ見出し |
| Lead / p | Neue Haas Grotesk | 18px | 500 | 1.6 | 0 | リード段落 (`#161615`) |
| Body accent | Neue Haas Grotesk | 17px | 500 | 1.65 | 0.06em | 字間を開いた説明文 (`#303030`) |
| Body | Neue Haas Grotesk Text Pro | 16px | 400 | 1.65 | 0 | 本文・ナビ (`#161615`) |
| Input | Neue Haas Grotesk | 14px | 400 | 1.65 | 0.12em | 入力欄プレースホルダ等 |
| Label | Neue Haas Grotesk | 12px | 400 | 1.5 | 0.04em | フォームラベル (`rgba(28,28,28,.6)`) |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.65`（16–18px 本文）。欧文主体のため和文サイトより締まっている
- **大見出しの行間**: `1.14`（56px display）
- **本文の字間 (letter-spacing)**: 基本 `normal`。ただし 17px の説明文は `0.06em`、ラベル・入力は `0.04〜0.12em` と広めに取り、静けさを演出する
- **見出しの字間**: 大見出しは `0.016em` 程度

**ガイドライン**:
- 英字の見出し・ボタン・ナビは **`text-transform: uppercase`** で組む
- 字間はサイズが小さいラベル系ほど広く取り、密度を下げる

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: "kern" 1;  /* 欧文カーニング */
```

- 実測では和文の `palt` は使用していない（`font-feature-settings: normal`）
- 欧文主体のため **kern（カーニング）** を効かせ、大文字組みの字面を整える

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

角丸ゼロ・アウトライン主体。塗りボタンは使わず、細い罫線と大文字テキストで構成する。

**Primary（アウトライン）**
- Background: `transparent`
- Text: `#ffffff`（暗色ビジュアル上）／ `#161615`（明色下地）
- Border: `1px solid #999487`（taupe）
- Padding: `14px 28px`（大）／ `8px 21px`（小）
- Border Radius: `0`
- Font: 18px / weight 500 / `letter-spacing: 0.04em` / `text-transform: uppercase`

**Accent（塗り・限定用途）**
- Background: `#975f71`（plum）
- Text: `#ffffff`
- Border Radius: `0`
- 用途: "Page top" などごく限定的なアンカーのみ

### Inputs

- Background: `#fdfdfc`
- Border: `1px solid #dadad9`（下線 1 本のみのスタイルも可）
- Border (focus): `1px solid #161615`
- Border Radius: `0`
- Padding: `8px 0`
- Font Size: 14px / `letter-spacing: 0.12em`
- Label: 12px / `rgba(28,28,28,0.6)` / uppercase

### Cards

- Background: `#fdfdfc` または `#f0f0ed`
- Border: なし（余白と写真で区切る）／必要時 `1px solid #dadad9`
- Border Radius: `0`
- Shadow: なし（フラット。Depth セクション参照）
- 製品カードは画像＋英字ラベル（uppercase）＋価格のみの最小構成

---

## 5. Layout Principles

### Spacing Philosophy

余白そのものをデザインの主要素として扱う。要素間は詰めず、大きく空ける。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 48px |
| XL | 80px |
| XXL | 120px |

### Container

- Max Width: 1440px（フルブリード画像はビューポート幅）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（製品一覧は 2〜3 カラム）
- Gutter: 24–40px
- 画像はフルブリードで見せ、テキストブロックは幅を絞って配置する

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。ほぼ全ての面はフラット |
| 1 | `0 1px 2px rgba(22,22,21,0.06)` | ドロップダウン・カート等の最小限の浮き |
| 2 | `0 8px 24px rgba(22,22,21,0.10)` | モーダル・ポップオーバー |

- 影は極力使わない。奥行きは「余白」と「写真の陰影」で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 下地は `#fdfdfc`、文字は `#161615` のニュアンスカラーを使う
- 英字の見出し・ボタン・ナビは `text-transform: uppercase` で組む
- ボタンは角丸ゼロのアウトライン（`1px solid #999487`）を基本にする
- 余白を大きく取り、要素を詰め込まない
- 和文は秀英角ゴシック銀（代替: Zen Kaku Gothic New）で欧文に馴染ませる

### Don't（禁止）

- `border-radius` を付けない（角丸は世界観に反する）
- 純白 `#ffffff`・純黒 `#000000` をベタで使わない
- 彩度の高い色・塗りボタンを多用しない（plum はごく限定用途）
- ドロップシャドウで奥行きを作らない
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 2〜3 カラム＋フルブリード画像 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは大見出し（56px）を 32–40px 程度に縮小、本文は 15–16px を維持
- 字間・余白の"静けさ"はモバイルでも保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:    #fdfdfc
Text Primary:  #161615
Text Secondary:#303030
Accent (taupe):#999487
Accent (plum): #975f71
Border:        #dadad9
Font:          "Neue Haas Grotesk Text Pro", neue-haas-grotesk-display, dnp-shuei-gothic-gin-std, sans-serif
Body Size:     16px
Line Height:   1.65
Button:        transparent bg / 1px solid #999487 / radius 0 / uppercase
```

### プロンプト例

```
Ambientec のデザインシステムに従って、製品紹介セクションを作成してください。
- 下地: #fdfdfc、文字: #161615
- 見出し・ボタン・ナビの英字は uppercase
- ボタンは角丸ゼロのアウトライン（1px solid #999487、透明背景）
- フォント: "Neue Haas Grotesk Text Pro", neue-haas-grotesk-display, dnp-shuei-gothic-gin-std, sans-serif
- 本文 line-height: 1.65、余白は大きく取る
- 影は使わず、フラットに組む
```

### Adobe Fonts が使えない環境での代替指針

- 欧文 Neue Haas Grotesk → **Helvetica Neue**（ネイティブ）／ Web は **Inter**
- 和文 秀英角ゴシック銀 → **Zen Kaku Gothic New** ／ Noto Sans JP
- どの代替でも「uppercase・角丸ゼロ・広めの字間・大きな余白」を守れば世界観は再現できる
