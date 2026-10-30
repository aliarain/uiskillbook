# DESIGN.md — たねや (Taneya)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://taneya.jp/
> たねやは近江八幡の和菓子屋。「ラ コリーナ近江八幡」（藤森照信 設計）で知られ、
> 洋菓子ブランド CLUB HARIE も展開する。実測はコーポレート／EC トップおよび下層ページに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 余白と大判写真を主役にした静かなエディトリアル。UI は極限まで引き算し、和菓子・田園・建築の写真そのものを見せる
- **密度**: 低密度。ファーストビューはフルブリードの風景写真＋筆文字ロゴと細いナビのみ
- **キーワード**: 静謐 / 端正 / 余白 / 自然 / エディトリアル
- **形状言語**: 角丸はごくわずか（`border-radius: 2px`）。ボタンは塗りではなく細い罫線のアウトライン。直線基調で構成する
- **書体の性格**: 和文角ゴシック（DNP 秀英角ゴシック銀）を全面に使い、本文・見出し・ナビすべてに `palt`（プロポーショナル字詰め）を効かせて字面を締める。筆文字ロゴだけが手仕事の温度を担う

---

## 2. Color Palette & Roles

<!-- 実サイトの computed style / interactive 実測に基づく。写真を主役にするため UI 色はほぼ無彩色に絞る -->

### Base（下地）

- **Background** (`#ffffff`): ページ全体の下地。純白
- **Surface** (`#f2f2f2`): ナビ・切替領域・パネルの面色。下地よりわずかに沈んだライトグレー（rgb(242,242,242)）
- **Overlay** (`rgba(0,0,0,0.8)`): メニュー展開時などのオーバーレイ

### Text（文字色）

- **Text Primary** (`#000000`): 見出し・本文・ナビ。純黒（rgb(0,0,0)）を使う潔い設計
- **Text on Image** (`#ffffff`): 写真上に重ねるロゴ・ラベル

### Accent（アクセント）

- **Notice Red** (`#bf0000`): 「NEW」バッジ・重要なお知らせラベル等、ごく限定的に使う差し色（rgb(191,0,0)）。彩度の高い色はこの一点のみ

### Line（罫）

- **Border** (`#000000` / `#e5e5e5`): ボタンの罫は黒 1px。区切り線には淡いグレーを使う

### 色に関する設計思想

- 色数を極端に絞り、写真の色を邪魔しない。UI 上に現れる色はほぼ「黒文字」「白背景」「グレー面」の 3 つだけ
- ブランドカラーとしての彩度色は持たず、赤（`#bf0000`）を注意喚起にだけ使う
- 塗り面は最小限。色は「文字色」と「罫線色」として現れる

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: DNP 秀英角ゴシック銀（`dnp-shuei-gothic-gin-std`, Adobe Fonts）。ふところが締まり、和菓子の端正さに合う上品な角ゴシック
- **明朝体**: 使用しない（ロゴは筆文字の画像）

### 3.2 欧文フォント

- **サンセリフ**: 秀英角ゴシック銀内蔵の欧文グリフをそのまま使う（独立した欧文フォント指定はなく、フォールバックは `sans-serif`）
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: 秀英角ゴシック銀は Adobe Fonts のためローカル環境・preview.html では表示できない。
> - 秀英角ゴシック銀 → **Zen Kaku Gothic New**（字面・ふところが近い角ゴシック）または Noto Sans JP で代替

### 3.3 font-family 指定

```css
/* 本文・見出し・ナビすべて共通 */
font-family: dnp-shuei-gothic-gin-std, sans-serif;
```

**フォールバックの考え方**:
- 和文フォント（秀英角ゴシック銀）を先頭に置き、欧文グリフもこの書体で拾う
- 最後に generic family（`sans-serif`）を指定
- サイト全体を単一の書体で統一し、ウェイト（400 / 600 / 700）だけで階層を作る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h2) | 秀英角ゴシック銀 | 27.34px | 400 | 1.7 | 0.1em | セクション大見出し |
| Heading 3 | 秀英角ゴシック銀 | 20px | 400 | 1.7 | 0.05em | 小見出し |
| Heading 4 | 秀英角ゴシック銀 | 17.5px | 400 | 1.7 | 0.17em | 記事内小見出し（字間広め） |
| Nav / Logo text | 秀英角ゴシック銀 | 14px | 700 | 1.7 | 0 | ヘッダー見出し・強調ナビ |
| Body | 秀英角ゴシック銀 | 14px | 400 | 1.7〜1.86 | 0〜0.1em | 本文・段落 |
| Link (small) | 秀英角ゴシック銀 | 12px | 600 | 1.7 | 0.18em | 補助リンク（字間広め） |
| Badge | 秀英角ゴシック銀 | 10px | 600〜700 | 1.0 | 0 | NEW ラベル等（赤 `#bf0000`） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.7`（14px 本文で 23.8px）。字間を開いた段落は `1.86`（26px）
- **見出しの行間**: `1.7`（本文と揃える）
- **本文の字間 (letter-spacing)**: 基本 `normal`〜`0.1em`。小さいラベル・リンクほど広く取り（0.17〜0.18em）、密度を下げて静けさを演出する
- **見出しの字間**: 大見出し `0.1em`、小見出し `0.05em`

**ガイドライン**:
- 全体に `palt` が効いているため、字間指定と併せて字面が詰まりすぎないよう注意する
- 小サイズのリンク・ラベルは字間を広く取るのがこのサイトの流儀

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
font-feature-settings: "palt" 1;  /* プロポーショナル字詰め（グローバル適用） */
```

- **palt をサイト全体（本文含む）に適用**しているのが特徴。角ゴシックの字面を締め、上品な印象を作る
- 一部のナビ span・button では `normal`（palt 無効）の箇所もあるが、基本方針は palt on

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

塗りボタンは使わず、白背景＋黒 1px 罫線のアウトラインを基本にする。

**Primary（アウトライン）**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `13px 18px`
- Border Radius: `2px`
- Font: 11.2px / weight 400 / `letter-spacing: 0.1em` / `font-feature-settings: "palt"`
- 例: 「一覧をみる」「ラ コリーナ近江八幡 ウェブサイトへ」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e5e5e5`（下線 1 本のスタイルも可）
- Border (focus): `1px solid #000000`
- Border Radius: `2px`
- Padding: `12px 14px`
- Font Size: 14px

### Cards

- Background: `#ffffff` または `#f2f2f2`
- Border: なし（余白と写真で区切る）
- Border Radius: `2px`
- Shadow: なし（フラット）
- 商品・記事カードは大判写真＋短いキャプションの最小構成

---

## 5. Layout Principles

### Spacing Philosophy

余白そのものを主要素として扱う。要素間は詰めず大きく空け、フルブリード写真で場面を切り替える。

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

- Max Width: 1280px（フルブリード写真はビューポート幅）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（商品一覧は 2〜3 カラム）
- Gutter: 24–40px
- 写真はフルブリードで見せ、テキストブロックは幅を絞って配置する

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。ほぼ全ての面はフラット |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・カート等の最小限の浮き |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・オーバーレイメニュー |

- 影は極力使わない。奥行きは「余白」と「写真」で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 下地は純白 `#ffffff`、文字は純黒 `#000000` を使い、色数を絞る
- サイト全体に `font-feature-settings: "palt"` を効かせる
- ボタンは白背景＋黒 1px 罫線のアウトライン（`border-radius: 2px`）を基本にする
- 小サイズのリンク・ラベルは字間を広く（0.15em 以上）取る
- 大判写真をフルブリードで見せ、余白を大きく取る
- 和文は秀英角ゴシック銀（代替: Zen Kaku Gothic New）で組む

### Don't（禁止）

- 彩度の高い色を多用しない（赤 `#bf0000` は注意喚起のみ）
- 塗りボタン・強い影で装飾しない
- 行間を詰めない（本文 line-height は 1.7 を保つ）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）
- 写真の上に色面を重ねて色調を濁さない

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 2〜3 カラム＋フルブリード写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは大見出し（27px）を 20–22px 程度に、本文は 14px を維持
- 字間・余白の"静けさ"はモバイルでも保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:   #ffffff
Text Primary: #000000
Surface:      #f2f2f2
Notice (red): #bf0000
Font:         dnp-shuei-gothic-gin-std, sans-serif
Body Size:    14px
Line Height:  1.7
palt:         on（全体）
Button:       #fff bg / 1px solid #000 / radius 2px / letter-spacing 0.1em
```

### プロンプト例

```
たねやのデザインシステムに従って、和菓子の商品紹介セクションを作成してください。
- 下地: #ffffff、文字: #000000、面色: #f2f2f2
- フォント: dnp-shuei-gothic-gin-std, sans-serif（代替: Zen Kaku Gothic New）
- サイト全体に font-feature-settings: "palt" を効かせる
- ボタンは白背景＋黒 1px 罫線、border-radius: 2px、letter-spacing: 0.1em
- 本文 line-height: 1.7、余白は大きく取り、大判写真をフルブリードで配置
- 彩度色は使わず、赤 #bf0000 は「NEW」ラベルなど注意喚起のみ
```

### Adobe Fonts が使えない環境での代替指針

- 和文 秀英角ゴシック銀 → **Zen Kaku Gothic New** ／ Noto Sans JP
- 代替でも「palt on・純黒白・広めの字間・大きな余白・フルブリード写真」を守れば世界観は再現できる
