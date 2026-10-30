# DESIGN.md — Karimoku New Standard（カリモク ニュースタンダード）

> Karimoku New Standard 公式サイト（https://www.karimoku-newstandard.jp/）のデザイン仕様書。
> 2009 年に老舗木製家具メーカー「カリモク家具」が設立した、新しい日本の家具デザインを提案するブランド。
> 国内外のデザイナーと共同で広葉樹の未利用材を活用した高品質な家具を作る。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **純白 `#ffffff` × 純黒 `#000000` のみ** で構成された、極限まで切り詰めた**展示図録的ミニマリズム**。家具の写真を主役にし、UI は文字組と余白だけで成立する
- **密度**: 情報密度は中程度。商品グリッドはゆとりを持って配置され、画像と短い英日テキストが並ぶ図録レイアウト
- **キーワード**: モリサワ A-OTF 太ゴ B101 Pr6N、nimbus-sans、純白純黒、全 weight 400、和欧二段組、negative letter-spacing、square、ALL CAPS、CTAなし
- **特徴**:
  - **メインフォントはモリサワ「A-OTF 太ゴ B101 Pr6N」**（`a-otf-futo-go-b101-pr6n`、Adobe Fonts 経由）— 日本語ゴシックの古典的名作。クセのある独特の骨格で家具のクラフト感と相性が良い
  - **英文セカンダリは nimbus-sans**（Adobe Fonts のサンセリフ）— 「特集 / featured」「カテゴリー / category」のように**日本語 + 英訳の二段組** で表記する展示図録スタイル
  - **全要素 weight 400** のみ — 太字を一切使わず、文字の太さで階層を作らない
  - **negative letter-spacing**（-1.6px / -8.05px）が大きな特徴 — 大見出しの和文には `-1.6px`（約 -0.08em）、英文サブ見出しには `-8.05px`（約 -0.35em の極端な詰め）を入れて、**書体の塊として読ませる**
  - **CTA らしい CTA がほぼ存在しない** — uniqueBackgrounds と interactive は両方とも 0 件。**すべてのリンクがテキストリンク**（黒文字 + 黒下線 or 矢印「→」のみ）
  - **font-feature-settings: "halt"** が h3 で使われる — halt は「半角約物のメトリクス字幅」OpenType 機能。約物の幅を半角扱いし、和文の組み版を引き締める
  - **全テキスト純黒 `#000000`** — ソフトブラックではない、**明確な純黒**を選ぶ硬派な姿勢
  - **すべて padding: 0px** — コンポーネントレベルでの装飾的余白を取らず、レイアウトレベルで間隔を制御
  - **border-radius: 0px** — すべての要素が完全な直角

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **KNS Black** (`#000000`): すべてのテキスト・罫線・アイコンの色。**純黒**を一貫して使用
- **KNS White** (`#ffffff`): ページ背景・面色（コンポーネント単位の背景は透過）

### Surface

- **Page White** (`#ffffff`): ページ標準背景（`background-color: rgba(0, 0, 0, 0)` で透過 = body 背景の白が透ける）
- **すべて透過** — カードやセクション単位で背景色を変えない徹底ぶり

### Border / Hairline

- **Hairline Black** (`#000000`): ナビ間の細罫線・商品カードの区切り線として使う場合あり

> **Note**: Karimoku New Standard のパレットは **「黒と白の二色のみ」**。色を一切使わず、**写真（家具の木目・素材感）が誌面の唯一の彩り**となる。**展示図録・モノグラフ的な視覚言語**。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（Webフォント先頭 + システムスタック）**:
- **a-otf-futo-go-b101-pr6n**（Adobe Fonts 経由のモリサワ「A-OTF 太ゴ B101 Pr6N」、最優先）
- 游ゴシック体（カナ表記、フォールバック先頭）
- YuGothic（Macmac 旧表記）
- "Yu Gothic"（クォート付き）
- "ヒラギノ角ゴ Pro W3"（macOS フォールバック）
- "Hiragino Kaku Gothic Pro"（同上、英語表記）
- メイリオ / Meiryo（Windows）
- "ＭＳ ＰゴシックMS PGothic"（Windows レガシー）

### 3.2 欧文フォント

- **nimbus-sans**（Adobe Fonts のサンセリフ、英文サブ見出し専用）
- フォールバック: sans-serif

### 3.3 font-family 指定

```css
/* 本文・UI 全般（メインフォント） */
font-family: a-otf-futo-go-b101-pr6n, 游ゴシック体, YuGothic, "Yu Gothic",
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, "ＭＳ ＰゴシックMS PGothic", sans-serif;

/* 英文サブ見出し（featured / category 等） */
font-family: nimbus-sans, sans-serif;
```

**フォールバックの考え方**:
- **Adobe Fonts の Webフォント先頭** — `a-otf-futo-go-b101-pr6n`（モリサワ太ゴ B101 Pr6N）が最重要
- **和文先頭スタック** — Webフォントが読み込めない場合は OS フォントの 游ゴシック → ヒラギノ → メイリオ
- **二系統の使い分け** — 和文は太ゴ B101 Pr6N、英文サブ見出しのみ nimbus-sans

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| h1 (ロゴ) | 太ゴ B101 Pr6N | 10px | 400 | 10px (1.0) | normal | ヘッダーの極小ロゴ「Karimoku New Standard」 |
| h1 (ページタイトル) | 太ゴ B101 Pr6N | 22px | 400 | 22px (1.0) | normal | 「全商品 ALL」等のページ見出し |
| h2 (セクション) | 太ゴ B101 Pr6N | 22px | 400 | 22px (1.0) | normal | 「特集 featured」等のセクション見出し |
| h2 (商品名) | 太ゴ B101 Pr6N | 20px | 400 | 32px (1.6) | normal | 「NASHI Card Holder」等の商品名 |
| h3 (連載) | 太ゴ B101 Pr6N | 20px | 400 | 32px (1.6) | normal | 「KNS ブランドビデオ 第3回」等（halt 機能オン） |
| Body | 太ゴ B101 Pr6N | 20px | 400 | 36px (1.8) | normal | 本文（ブランド説明文） |
| Section Title (和) | 太ゴ B101 Pr6N | 20px | 400 | 20px (1.0) | -1.6px (-0.08em) | 「特集」「カテゴリー」の和文部分 |
| Section Title (欧) | nimbus-sans | 23px | 400 | 23px (1.0) | -8.05px (-0.35em) | 「featured」「category」の英文部分（極端な詰め） |
| Section Title (sub欧) | nimbus-sans | 11.5px | 400 | 11.5px (1.0) | -8.05px | 小型の英文サブタイトル |
| Nav (主) | 太ゴ B101 Pr6N | 20px | 400 | 20px (1.0) | normal | グローバルナビ「PRODUCTS / ABOUT / NEWS」等 |
| Nav (副) | 太ゴ B101 Pr6N | 14px | 400 | 14px (1.0) | normal | サブナビ |
| Footer / Mini | 太ゴ B101 Pr6N | 10px | 400 | 10px (1.0) | normal | フッター・極小キャプション |

### 3.5 行間・字間

- **本文 line-height**: `1.8`（36px / 20px）— 日本語本文として広め
- **商品名・連載タイトル line-height**: `1.6`（32px / 20px）
- **見出し line-height**: `1.0`（タイトな組み）
- **letter-spacing**:
  - 通常テキスト: `normal`
  - 和文大見出し（「特集」「カテゴリー」）: **`-1.6px`（-0.08em）の負の字詰め**
  - 英文サブ見出し（「featured」「category」）: **`-8.05px`（-0.35em の極端な詰め）** — nimbus-sans の文字を密集させる
- **意図**: ALL CAPS の英文を「文字の塊」として配置するため、極端なネガティブトラッキングで密度を上げる

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — `word-break: keep-all` 等は明示的に指定しない
- 商品説明等のブランドテキストは line-height 1.8 で十分なゆとりを確保

### 3.7 OpenType機能

```css
/* h3（連載タイトル等） */
font-feature-settings: "halt";  /* 半角約物の幅で和文を引き締める */

/* その他はすべて normal */
font-feature-settings: normal;
```

- **halt**: 「Half-width Alternates」— 約物（、。「」など）を半角字幅で表示する。日本語組版を引き締めるための機能。**h3 タイトルでのみ使用**
- **palt は使わない** — モリサワ太ゴ B101 Pr6N の素の組版を尊重

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

- **CTA ボタンは存在しない** — interactive 抽出で 0 件。すべてのリンクがテキストリンク
- ボタン要素は MENU / category 等の極小なナビ要素のみで、装飾なし
- font-size: 20px / weight 400
- 背景透過、罫線なし、padding 0px、border-radius 0px

### Links

- 文字色: `#000000`
- text-decoration: 通常は none、ホバー時に下線
- 末尾に「→」を付けて遷移を示すパターン（line-height 36px）
- 装飾は控えめ、テキストそのものがリンクであることを示す

### Navigation

- font-family: a-otf-futo-go-b101-pr6n
- font-size: 20px（メイン）/ 14px（サブ）/ 10px（極小）
- font-weight: 400
- letter-spacing: normal
- 背景透過、罫線なし
- 横並びの ALL CAPS（PRODUCTS / ABOUT / NEWS / CONTRACT / DESIGNERS / SHOP / STORIES）

### Section Title (和欧二段組)

```css
/* 和文部分 */
.section-title-jp {
  font-family: a-otf-futo-go-b101-pr6n, sans-serif;
  font-size: 22px;       /* または 20px */
  font-weight: 400;
  letter-spacing: -1.6px; /* -0.08em の負の字詰め */
}

/* 英文部分 */
.section-title-en {
  font-family: nimbus-sans, sans-serif;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: -8.05px; /* -0.35em の極端な負の字詰め */
}
```

- **「特集 featured」「カテゴリー category」** のように、日本語と英語を並べる図録的構成
- 英文には極端なネガティブトラッキングを適用し、文字の塊として表現

### Cards (Product Card)

- 背景: 透過（白が透ける）
- 罫線: なし、または極細
- 影: なし（フラット）
- 角丸: 0px
- padding: 0px（コンポーネント内余白なし、レイアウト側で制御）
- 商品画像 + h2 商品名（20px / 32px line-height）+ 価格（控えめ）

---

## 5. Layout Principles

- **コンテンツ幅**: 制約は緩く、商品画像をフルブリードで配置することも多い
- **ヒーロー**: 大判の家具画像 + 極小タイポ（h1 10px のロゴ）
- **商品グリッド**: 2〜3 列、画像主役、テキストは商品名 + 価格のみ
- **余白で語る** — コンポーネント単位の padding は 0px、セクション単位で大きな余白を取る
- **和欧二段組** — セクションヘッダーは「日本語 / English」の縦・横並び
- **ALL CAPS のナビゲーション** — グローバルナビは PRODUCTS / ABOUT / NEWS のように全大文字

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` 完全フラット
- **段階表現**: 影や面色の差を一切使わず、**写真と余白だけで奥行きを作る**
- **罫線**: 1px solid #000000 を最小限。見出しの下線や商品カードの区切りに使う場合あり

---

## 7. Do's and Don'ts

### Do's

- **a-otf-futo-go-b101-pr6n（モリサワ太ゴ B101 Pr6N）** を本文・UI で使う
- **nimbus-sans** を英文サブ見出しに使い、和欧二段組を作る
- **文字色は純黒 `#000000`**、背景は純白 `#ffffff`
- **font-weight は 400 のみ** — 太字を使わず、サイズと余白で階層を作る
- **letter-spacing は normal（本文）と -1.6px / -8.05px（大見出し）の二択**
- **border-radius: 0px、padding: 0px** が基本
- **CTA はテキストリンク + 「→」矢印**で遷移を示す
- **line-height: 1.8（本文）/ 1.0（見出し）** で抑揚を作る
- **font-feature-settings: "halt"** を必要に応じて使う

### Don'ts

- **色を使わない** — 黒白二色を徹底
- **太字を使わない** — weight 400 のみ
- **影や立体感を作らない** — 完全フラット
- **角丸を入れない** — すべて直角
- **palt を使わない** — モリサワ書体の素の組版を尊重
- **罫線を多用しない** — 黒罫は最小限
- **CTA に塗りボタンを使わない** — テキストリンクが基本
- **ソフトブラック（#101010 等）を使わない** — 純黒一択
- **Webフォントが読み込めない場合のフォールバック先を 1 つに絞らない** — 游ゴシック → ヒラギノ → メイリオの順で広く対応

---

## 8. Responsive Behavior

- デスクトップ: 2〜3 列の商品グリッド + ALL CAPS の横並びナビ
- タブレット (768〜1024px): 2 列に折り畳み
- モバイル (〜767px): 1 列、ナビはハンバーガー（MENU ボタン）
- フォントサイズはほぼ固定（10px / 14px / 20px / 22px の固定スケール）
- ヒーロー画像はクロップして縦長に

---

## 9. Agent Prompt Guide

Karimoku New Standard らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: a-otf-futo-go-b101-pr6n, 游ゴシック体, YuGothic, "Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
- 英文サブ font-family: nimbus-sans, sans-serif
- 文字色: 純黒 #000000、背景: 純白 #ffffff（二色のみ）
- font-weight: 400 のみ（太字を使わない）
- 本文 line-height: 1.8（36px / 20px）— 広め
- 見出し line-height: 1.0（タイトに）
- letter-spacing: normal（本文）/ -1.6px（和文大見出し）/ -8.05px（英文サブ見出し、極端な詰め）
- セクションタイトルは「特集 / featured」のような和欧二段組
- すべての要素 padding: 0px、border-radius: 0px、影なし
- CTA はテキストリンク + 「→」矢印（塗りボタンを使わない）
- グローバルナビは ALL CAPS の英字（PRODUCTS / ABOUT / NEWS / CONTRACT / DESIGNERS / SHOP / STORIES）
- font-feature-settings: "halt" を h3 で使い、約物を半角字幅に
- Adobe Fonts (a-otf-futo-go-b101-pr6n + nimbus-sans) の読み込みが前提
- 写真（木目・素材感）が誌面の唯一の彩り — UI は黒白で消す展示図録スタイル
```
