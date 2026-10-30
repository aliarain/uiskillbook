# DESIGN.md — DASSAI（獺祭・旭酒造株式会社）

> 旭酒造株式会社 獺祭 公式サイト（https://www.asahishuzo.ne.jp/）のデザイン仕様書。
> 山口県岩国市の蔵元が醸すプレミアム日本酒ブランド。山田錦と精米歩合にこだわる「磨き」の哲学を、深いインディゴと明朝セリフで表現する。
> 実サイトの computed style 実測に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景に**深インディゴ `#27174b`** をブランドカラーに据え、**Noto Serif JP を主書体**とする**明朝セリフ基調**の上品なデザイン。酒蔵の伝統と現代的な洗練を融合
- **密度**: 余白を広く取り、商品写真とエディトリアルな本文を大きく配置する**低密度・高余白**のレイアウト
- **キーワード**: 純白背景、深インディゴ、明朝セリフ基調、極広行間、広字間、角型CTA
- **特徴**:
  - **本文・見出しともに明朝（Serif）が主**: Noto Serif JP を h1, h2, body に使用。ブランドの格式と日本酒の伝統を書体で体現
  - **UI・ナビゲーションのみゴシック**: Noto Sans JP は h3, nav, footer, ボタンラベル等の機能的テキストに限定
  - **極めて広い行間**: 本文の line-height が 2.4 — 日本語サイトとしても際立って広い。余韻を持たせる酒蔵の美意識
  - **広い字間**: セクション見出し 0.2em、本文 0.1em。文字のひとつひとつに空間を与え、凛とした佇まい
  - **CTA は角型（radius 0px）**: 丸みを排除した直線的なボタン。伝統工芸的な端正さ
  - **font-feature-settings: normal**（palt なし）— 等幅の和文組版を維持
  - ライトモード前提（ダーク切替なし）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> DASSAI は**深インディゴ + 純白**の二色構成を基調とする、極めて抑制されたパレット。

### Brand

- **Primary Indigo** (`#27174b`): 獺祭のブランドカラー（rgb(39, 23, 75)）。CTA ボタン背景、ナビゲーション強調、ストアリンクに使用。藍染を思わせる深い紫紺
- **Slider Lavender** (`#a5afd3`): カルーセル矢印ボタンの背景色（rgb(165, 175, 211)）。ブランドインディゴの淡いトーン

### Surface（背景）

- **Page Background** (`#ffffff`): ページ全体の純白。余白の白が主役
- **Age Gate Overlay** (`rgba(0,0,0,0.4)`): 年齢確認モーダルの半透明オーバーレイ

### Text / Foreground

- **Text Primary** (`#000000`): 本文テキスト（Noto Serif JP の明朝本文）
- **Text Secondary** (`#222222`): 見出し（h3）等の補助テキスト（rgb(34, 34, 34)）
- **Text Inverse** (`#ffffff`): インディゴ背景の CTA ボタン上の白文字

### Border / Divider

- サイト全体で border によるセクション区切りは控えめ。余白とタイポグラフィの階層で構造を示す

### Semantic（補完）

- 実 UI にエラー・成功・警告色は確認できない（酒蔵のブランドサイトではアラートが必要となる場面が少ない）
- フォーム等でアラートを追加する場合は深みのあるトーン — 赤 `#8b3a3a`, 緑 `#3a6b4f`, 黄 `#8b7a3a` — を推奨。ブランドの抑制されたパレットとの調和を保つ

---

## 3. Typography Rules

### 3.1 和文フォント

DASSAI は **明朝セリフを主書体**とする、日本語サイトでは珍しい構成:

- **明朝体（主書体）**: Noto Serif JP — h1, h2, 本文（p）に使用。ブランドの格式と伝統を担う
- **ゴシック体（UI書体）**: Noto Sans JP — h3, ナビゲーション, フッタ, ボタンラベルに使用。機能的テキスト専用

### 3.2 欧文フォント

- 和文フォントに内包される欧文グリフをそのまま使用
- Noto Serif JP / Noto Sans JP はいずれも Google Fonts から配信

### 3.3 font-family 指定

```css
/* 本文・見出し（明朝セリフ） */
font-family: "Noto Serif JP", serif;

/* UI・ナビゲーション（ゴシック） */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Google Fonts からの Web フォント配信のため、フォールバックは generic family のみ
- 明朝系は `serif`、ゴシック系は `sans-serif` で終端

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | Noto Serif JP | 32px | 700 | 1.0 | — | ページタイトル。太い明朝 |
| Heading 2 (Section) | Noto Serif JP | 27px | 400 | 1.0 | 0.2em (5.4px) | セクション見出し。極めて広い字間 |
| Heading 2 (Lineup) | Noto Serif JP | 32px | 400 | 1.8 (57.6px) | 0.03em (0.96px) | 商品ラインナップ見出し |
| Heading 2 (News) | Noto Sans JP | 21px | 700 | — | — | ニュースセクション見出し。ゴシック |
| Heading 3 | Noto Sans JP | 16px | 700 | 1.6 (25.6px) | — | 小見出し。color: #222222 |
| Heading 3 alt | Noto Sans JP | 18px | 400 | — | — | 軽い小見出しバリエーション |
| Body | Noto Serif JP | 15.75px | 400 | 2.4 (37.8px) | 0.1em (1.575px) | **明朝本文。極めて広い行間** |
| Body alt | Noto Sans JP | 16px | 400 | 1.5 (24px) | — | UI 付随テキスト |
| Nav / Footer | Noto Sans JP | 14px | 400 | 1.25 (17.5px) | — | ナビゲーション、フッタ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `2.4` — 日本語サイトとしては**極めて広い**。文字と文字の間に余韻を持たせる、酒蔵らしい美意識の表れ。Noto Serif JP の明朝と組み合わさり、和書の版面に近い空気感を生む
- **見出しの行間**: `1.0`（セクション h2）〜 `1.8`（ラインナップ h2）。用途により大きく変わる
- **本文の字間 (letter-spacing)**: `0.1em` — 1文字ずつ空間を確保し、ゆったりと読ませる
- **見出しの字間**: セクション h2 で `0.2em`（極めて広い）。文字を離すことで格式を示す

**ガイドライン**:
- 本文は必ず `line-height: 2.4` を維持する。2.0 未満に詰めるとブランドの空気感が失われる
- セクション見出しの `letter-spacing: 0.2em` はブランドアイデンティティの核心。省略しない
- 本文の `letter-spacing: 0.1em` も必須。0 にするとブランドの凛とした印象が崩れる

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使用しない**: 等幅組みを維持する。プロポーショナル字詰めをすると、広い letter-spacing で意図した均等な字間が崩れる
- **kern も明示的には有効化しない**: Noto Serif JP / Noto Sans JP のデフォルト挙動に委ねる

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Primary CTA（獺祭 Store リンク等）**
- Background: `#27174b`
- Text: `#ffffff`
- Padding: `10px 13px 10px 41px`（左に余白を大きく取り、矢印アイコンの領域を確保）
- Border Radius: `0px`（角型。丸みなし）
- Font: Noto Sans JP, 15px, 400
- Letter Spacing: `0.1em` (1.5px)
- テキスト例: 「獺祭Store WEB店 ▸」

**Secondary CTA（セクションリンク）**
- Background: `#27174b`
- Text: `#ffffff`
- Padding: `12.8px 40px`
- Border Radius: `0px`（角型）
- Font: Noto Sans JP, 17.6px, 400
- Letter Spacing: `0.27em` (4.8px) — **極めて広い字間**。ボタン内テキストにも獺祭の美意識を貫く
- テキスト例: 「一覧を見る」「もっと見る」

**Slider Arrow（カルーセル制御）**
- Background: `#a5afd3`
- Border Radius: `50%`（円形）
- 矢印アイコン: 白

### Inputs

- 実サイトで確認できた入力フィールドは年齢確認モーダルのみ
- フォームを追加する場合の推奨値:
  - Background: `#ffffff`
  - Border: `1px solid #cccccc`
  - Border (focus): `1px solid #27174b`
  - Border Radius: `0px`（ブランドの角型ルールに準拠）
  - Font: Noto Sans JP, 15px
  - Padding: `10px 16px`

### Cards

- 商品カード・ニュースカードはいずれも**ボーダーレス**。影も枠線もなし
- Background: `#ffffff`（透明、またはページ背景と同色）
- 写真で視覚的に区切り、テキスト階層で構造を示す
- カード間の余白が主たるセパレーター

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | インライン要素間 |
| S | 16px | テキストブロック間 |
| M | 24px | カード内パディング |
| L | 40px | セクション内要素間 |
| XL | 64px | セクション間 |
| XXL | 100px+ | ヒーロー・大セクション間 |

### Container

- Max Width: `1100px`（コンテンツエリア）
- Padding (horizontal): `20px`（モバイル時）

### Grid

- 商品ラインナップ: 3〜4 カラムのカードグリッド
- ニュース: 1 カラムのリスト形式
- エディトリアル本文: 1 カラムのセンター配置。テキスト幅は読みやすさを優先して狭め

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットなデザイン |
| 1 | — | カード、ボタンに影なし（余白で階層を表現） |
| 2 | `rgba(0,0,0,0.4)` overlay | 年齢確認モーダルのオーバーレイ |

DASSAI のデザインは**影をほぼ使わない**。深度は余白・タイポグラフィの階層・色の濃淡で表現する。白い背景に対してインディゴの CTA が「浮く」のは色のコントラストによるもので、box-shadow ではない。

---

## 7. Do's and Don'ts

### Do（推奨）

- **Noto Serif JP を本文・見出しに使う** — これは明朝セリフ基調のブランド。ゴシックは UI テキストのみ
- **セクション見出しの letter-spacing は 0.2em** — ブランドの格式を示す核心的な値
- **本文の line-height は 2.4 を維持する** — 極めて広い行間がブランドの空気感をつくる
- **本文の letter-spacing は 0.1em** — 文字ひとつひとつに余白を与える
- **CTA ボタンは角型（radius: 0px）** — 端正な直線で伝統工芸的な品格を保つ
- **カラーパレットは `#27174b` + `#ffffff` の二色基調** — 抑制が美意識
- **余白を惜しまない** — 情報を詰め込まず、呼吸を持たせる

### Don't（禁止）

- **角丸ボタンを使わない** — pill 形状（border-radius: 9999px）も通常の角丸（8px）も不可。すべて 0px
- **palt を有効化しない** — `font-feature-settings: "palt" 1` を指定しない。広い letter-spacing との併用で字間が不均一になる
- **ゴシック体を本文に使わない** — 本文は Noto Serif JP（明朝）。Noto Sans JP は UI・ナビ・ボタンラベル限定
- **彩度の高いアクセントカラーを追加しない** — 蛍光色、ビビッドな赤・青・緑は世界観を壊す
- **本文の line-height を 2.0 未満にしない** — ブランドの余韻が失われる
- **セクション見出しの letter-spacing を省略しない** — 0.2em の空きが端正さの根幹
- **box-shadow で深度を表現しない** — 影は使わず、余白と色で階層をつくる

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | シングルカラム。ナビはハンバーガー |
| Tablet | ≤ 1023px | 2カラムのカードグリッド |
| Desktop | > 1024px | 3〜4カラム。max-width: 1100px |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタンは十分な padding で確保

### フォントサイズの調整

- モバイルでは本文 14〜15px、見出しはデスクトップの 75〜85% 程度に縮小
- **line-height: 2.4 と letter-spacing: 0.1em は画面幅に関わらず維持する**（ブランドの核心値）
- セクション見出しの letter-spacing: 0.2em もモバイルで維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Name: DASSAI（獺祭）
Primary Color: #27174b
Text Color (Body): #000000
Text Color (Heading): #222222
Background: #ffffff
Font (Body/Heading): "Noto Serif JP", serif
Font (UI/Nav): "Noto Sans JP", sans-serif
Body Size: 15.75px
Body Line Height: 2.4
Body Letter Spacing: 0.1em
Section Heading Letter Spacing: 0.2em
Button Radius: 0px
palt: off
```

### プロンプト例

```
獺祭（DASSAI）のデザインシステムに従って、商品一覧ページを作成してください。

- ブランドカラー: #27174b（深インディゴ）
- 背景: #ffffff（純白）
- 本文フォント: "Noto Serif JP", serif — 明朝セリフが主書体
- UI フォント: "Noto Sans JP", sans-serif — ナビ・ボタンのみ
- 本文: 15.75px, line-height: 2.4, letter-spacing: 0.1em
- セクション見出し: 27px, weight 400, letter-spacing: 0.2em
- CTA ボタン: bg #27174b, 白文字, radius 0px（角型）, letter-spacing: 0.1em
- カードに影やボーダーは使わない。余白で区切る
- palt は使わない（font-feature-settings: normal）
```
