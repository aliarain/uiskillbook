# DESIGN.md — TYPICA（ティピカ）

> TYPICA（ティピカ / https://typica.jp/）のデザイン仕様書。
> コーヒー生産者とロースターを直接つなぐ、スペシャルティコーヒーのダイレクトトレード・プラットフォーム＆コミュニティ。
> 最大の特徴は **温かいクリーム地（#f4efe5）に多色のブランドアクセント（イエロー／ブルー／パープル／グリーン）を散らす editorial（編集的）な配色** と、**巨大なハイコントラスト・セリフ書体（restra）の英字ディスプレイ見出しを各色で組む** こと。和文には **モリサワ 中ゴシックBBB Pr6N** を使い、**`font-feature-settings: "palt"` をほぼ全要素にグローバル適用** している。CTA は丸い **pill 形状**。
> 実サイトの computed style 実測（2026-06-28 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **温かいクリーム地（#f4efe5）** をキャンバスに、**イエロー／ブルー／パープル／グリーン** の多色アクセントを大胆に散らした、雑誌のような editorial（編集的）で色彩豊かな世界観。コーヒーという嗜好品の「楽しさ」「多様性」を、色とタイポグラフィの遊びで表現する
- **TYPICA について**: コーヒー生産者（Producers）とロースター（Roasters）を仲介者なしで直接つなぐダイレクトトレード・プラットフォーム。生豆のオファーリスト、生産者ストーリー、コミュニティ記事を通じて「コーヒーを愛する全ての人」をつなぐ。MOHEIM のような単色ミニマルとは対極の、多色で賑やかな性格
- **密度**: 中〜高密度。巨大な英字ディスプレイ見出しと色面ブロックを組み合わせ、情報を雑誌的にレイアウトする。本文 line-height は約 1.5
- **キーワード**: クリーム #f4efe5、多色アクセント、ハイコントラスト・セリフ、巨大ディスプレイ数字、restra、中ゴシックBBB、palt グローバル適用、pill ボタン、editorial
- **特徴**:
  - 基調は **温かいクリーム #f4efe5（CSS変数 `--primary-bg-color`）**。純白の冷たさを避けた、紙のような温度のある地色
  - ブランドカラーは **多色パレット**。Primary はイエロー／オリーブ #cbc741、Secondary はブルー／ティール #1b6688。さらにパープル #7a318d、グリーン #0f7e58 を CTA・見出し・色面に自由に展開する
  - **見出しは 2 系統**。英字ディスプレイは **restra**（ハイコントラストなセリフ）で 89〜110px の巨大サイズ、各ブランドカラーで組む。和文見出し・本文は **中ゴシックBBB Pr6N**（モリサワ）
  - **`font-feature-settings: "palt"` がほぼ全要素にグローバル適用**されている。和文の字間を詰めて端正に見せる、TYPICA の重要な特徴
  - CTA は **pill 形状**（高さに対し radius が大きく丸い、概ね 18〜26px）。塗り（イエロー地＋黒文字／ブルー地＋イエロー文字／パープル地＋白文字）とアウトライン（白枠・黒枠）を使い分ける
  - 基本の角丸は控えめ（`--primary-border-radius: 4px`）だが、ボタンは pill 寄り。タブは完全 pill（radius 999px）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。クリーム地に多色アクセントを散らす editorial パレット。すべて hex 表記。

### Brand / Core

- **Background (Cream)** (`#f4efe5`): ページ背景・メインキャンバス（`--primary-bg-color` 実測）。紙のように温かいクリーム
- **Primary (Yellow / Olive)** (`#cbc741`): 最頻出のブランド色（出現 count 16）。`--primary-color` / `--color-yellow`。CTA 地・強調・色面に使う、TYPICA の象徴色
- **Secondary (Blue / Teal)** (`#1b6688`): `--secondary-color` / `--color-blue`。ボタン地・大見出し・色面ブロック
- **Purple** (`#7a318d`): `--color-purple`。CTA 地・ディスプレイ見出し・"NEW WISH LIST" 等のラベル面
- **Green** (`#0f7e58`): `--color-green`。ディスプレイ見出し・色面。系統色として #346e4a / #468254 も使用

### Surface / Dark

| Role | hex | 用途 |
|------|-----|------|
| Surface (Cream Tint) | `#dfdad2` | 国名タグ・面（クリームより一段濃い、count 9） |
| Surface Light | `#f5f5f5` / `#f2f4f5` | 補助面・地図等 |
| Border / Divider | `#d8d8d8` / `#e9e9e9` | 区切り・アウトライン枠 |
| Navy Surface | `#27455c` | ダークネイビーの色面（ブルー系の深色） |
| Dark Surface | `#1e181c` | 反転タブ地・ダーク帯 |
| Near-Black | `#151415` | 最深部の反転面 |
| Charcoal | `#342f32` | フッターリンク面（FAQ / Contact / Recruit） |

### Text

- **Text Primary** (`#000000`): 本文・和文見出しの基本テキスト
- **Text Muted** (`#696969`): サブ見出し・補助テキスト
- **Text Disabled** (`#828282`): 非アクティブなタブ
- **On Dark / Photo** (`#ffffff`): 写真上・色面上のテキスト

### Semantic

- **Error** (`#e34837`): エラーテキスト・注意（`#e348` 系）
- **Success / Allow** (`#346e4a`): 同意ボタン地（"すべて許可する" 等）

---

## 3. Typography Rules

> 実サイトは和文に **モリサワ 中ゴシックBBB Pr6N**（Adobe Fonts）、英字本文に **Clother**、英字ディスプレイ見出しに **restra** を使う。
> いずれも Adobe Fonts のドメインライセンスのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **ゴシック体**: 中ゴシックBBB Pr6N（`a-otf-gothic-bbb-pr6n`、モリサワ）→ 游ゴシック（`YuGothic`） → ヒラギノ角ゴ Pro W3 → メイリオ
- **明朝体**: 使用しない（見出しのセリフ感は欧文の restra が担う）

### 3.2 欧文フォント

- **本文サンセリフ**: Clother（`Clother`）— 幾何学的サンセリフ。英字本文・ラベル・ナビに使用
- **ディスプレイ・セリフ**: restra（`restra`）— ハイコントラストなセリフ。巨大な英字見出し・数字を各ブランドカラーで組む（89〜110px）

### 3.3 font-family 指定

```css
/* 和文本文・見出し（実測 --primary-font） */
font-family: a-otf-gothic-bbb-pr6n, "游ゴシック", YuGothic,
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 英字本文（実測 --en-font） */
font-family: Clother, HelveticaNeue, Helvetica, Roboto, "Droid Sans", sans-serif;

/* 英字ディスプレイ見出し（実測 --heading-font） */
font-family: restra, "Times New Roman", Times, Georgia, Roboto, "Droid Sans", serif;
```

- **CSS 変数**: `--primary-font`（和文）/ `--en-font`（英字本文）/ `--heading-font`（英字ディスプレイ）
- **フォールバックの考え方**: 和文は中ゴシックBBB を先頭に置き、なければ游ゴシック系へ。英字本文は Clother、巨大見出しは restra と、用途別に 3 チェーンを使い分ける和欧混植型

**preview.html での代替フォント**:
- 中ゴシックBBB Pr6N（`a-otf-gothic-bbb-pr6n`）→ **Zen Kaku Gothic New**（モリサワ系で字形が近い。weight 400/500/700）
- restra（ハイコントラスト・セリフ・ディスプレイ）→ **Playfair Display**（高コントラストなディスプレイセリフ。weight 400/700/900）
- Clother（幾何学サンセリフ）→ **Jost**（幾何学サンセリフ。Latin 用）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (XL) | restra | 110px | 700 | 1.0 | normal | 英字巨大見出し。各色で組む（#0f7e58 / #1b6688 等） |
| Display (L) | restra | 89px | 400/700 | 1.0 | normal | 英字見出し（#cbc741 / #1b6688 / #7a318d / #000000） |
| Display (S) | restra | 45px | 700 | 1.0 | normal | 数字・小ディスプレイ（#7a318d 等） |
| Heading (和文 L) | 中ゴシックBBB | 40px | 400 | 1.58 | 4.8px (≈0.12em) | 写真上の和文大見出し（白） |
| Heading (和文 M) | 中ゴシックBBB | 25px | 400 | 1.3 | normal | 和文中見出し（白） |
| Heading (和文 S) | 中ゴシックBBB | 20px | 400 | 1.5 | normal | 和文小見出し |
| Lead (英字) | Clother | 26px | 400 | 2.88 | 1.82px (≈0.07em) | 英字リード |
| Sub-heading | 中ゴシックBBB | 16px | 700 | 1.5 | normal | サブ見出し #696969 |
| Body (L) | 中ゴシックBBB | 20px | 400 | 1.55 | 1.4px (≈0.07em) | 本文（大） |
| Body | 中ゴシックBBB | 13px | 400 | 1.0–1.5 | 0.91px (≈0.07em) | 本文・注記 |
| Label (英字) | Clother | 15px | 500 | 1.0 | 1.05px (≈0.07em) | 英字ラベル #cbc741 |
| Nav (英字) | Clother | 15px | 400 | 1.0 | normal | グローバルナビ #cbc741 |

- 和文見出しのウェイトは **400 が基本**（太字で主張せず、サイズと色で階層を作る）。サブ見出しのみ 700
- ウェイト変数: `--normal-font-weight: 400` / `--medium-font-weight: 500` / `--bold-font-weight: 700` / `--black-font-weight: 900`
- 巨大な英字数字・見出しは restra でハイコントラストに、本文は中ゴシックBBB で端正に、という **役割分担** が肝

### 3.5 行間・字間

- **本文の行間 (line-height)**: 約 1.5（20px → 30px／31px）。小さい注記は 1.0 まで詰まる箇所もある
- **和文大見出しの行間**: 1.3〜1.58（写真上の大見出し）
- **英字ディスプレイの行間**: 1.0（サイズ＝行高。巨大数字を密に積む）
- **本文の字間 (letter-spacing)**: 約 0.07em（1.4px / 20px、0.91px / 13px、1.05px / 15px が頻出）
- **和文大見出しの字間**: 約 0.12em（4.8px / 40px）と広め

**ガイドライン**:
- 和文本文は line-height 約 1.5、letter-spacing 約 0.07em を基準に、`palt` を併用して端正に組む
- 英字ディスプレイは line-height 1.0 で巨大に積み、各ブランドカラーで色分けする

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";  /* ほぼ全要素にグローバル適用 */
```

- **重要**: TYPICA は `font-feature-settings: "palt"` を body をはじめ **ほぼ全要素にグローバル適用** している（見出し限定ではない）。和文のプロポーショナルメトリクスで字間を自動的に詰め、密度の高い editorial レイアウトを成立させている
- 一部のシステムフォント要素（`-apple-system` 系のボタン等）は `normal`

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

> CTA は pill 形状が基本。塗り 3 色（イエロー／ブルー／パープル）とアウトラインを使い分ける。

**Primary（イエロー塗り・pill）** — `.nm-button`
- Background: `#cbc741`
- Text: `#000000`
- Border: なし
- Padding: 0 20px（高さで pill を成立させる）
- Border Radius: `21px`（pill）
- Font Size: 15px / 400

**Secondary（ブルー塗り・pill）** — `.nm-button`
- Background: `#1b6688`
- Text: `#cbc741`（ブルー地にイエロー文字の補色コンビ）
- Border: なし
- Padding: 0 20px
- Border Radius: `21px`
- Font Size: 15px / 400

**Tertiary（パープル塗り・pill）** — `.nm-button`
- Background: `#7a318d`
- Text: `#ffffff`
- Border Radius: `21px`
- Padding: 0 20px / Font Size: 15px / 400

**Nav Button（角丸・小）** — `.global-nav__button`
- Background: `#1b6688` または `#7a318d`
- Text: `#cbc741`
- Border Radius: `5px`（pill ではなく軽い角丸）
- Padding: 0 25px 2px / Font Size: 15px / 400

**Outline（写真上・白枠）** — `.nm-button`
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Border Radius: `19px`（pill）
- Padding: 0 20px / Font Size: 13px

**More Button（白地・黒枠）** — `.nm-more-button`
- Background: `#ffffff`（または transparent）
- Text: `#000000`
- Border: 1px solid `#000000`
- Border Radius: `23px`（pill）
- Padding: 0 20px 0 24px / Font Size: 15px / 400

**Tab（完全 pill）** — `.nm-blog-tabs__btn`
- Background: `#ffffff`（非選択）/ `#1e181c`（選択）
- Text: `#1e181c` / `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.12)`
- Border Radius: `999px`（完全 pill）
- Padding: 10px 14px / Font Size: 10px / 700

**Category Tab** — `.nm-category-tab__button`
- 選択: Background `#1b6688` + Text `#cbc741`、または `#cbc741` + Text `#000000`
- 非選択: transparent + Text `#828282`
- Border Radius: `18px`（pill）/ Padding: 0 20px / Font Size: 13px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#d8d8d8`〜`#e0e0e0`
- Border Radius: `4px`（`--primary-border-radius`）
- Padding: 約 0 12px（高さ 43px 前後）
- Font Size: 15〜16px
- Font Family: `a-otf-gothic-bbb-pr6n, "游ゴシック", …`（和文チェーン）
- Label: 16px / weight 500〜600 / `palt`

### Cards

- Background: `#ffffff` または各色面（イエロー／ブルー／クリーム #dfdad2）
- Border: なし、または 1px solid `#d8d8d8`
- Border Radius: `4px`〜10px（上辺のみ角丸の `10px 10px 0 0` タブ型もあり）
- 写真を大きく、その上に和文見出し（白）や英字ディスプレイ（色）を重ねる editorial 構成
- 色面ブロック（国名タグ #dfdad2、"OFFER LISTS" #1b6688 等）で情報を区切る

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 約 1200〜1280px（editorial グリッド）
- Padding (horizontal): 20〜40px

### Grid

- Columns: コンテンツグリッドは 2〜4 カラム（オファー一覧・記事一覧）
- Gutter: 16〜24px
- 巨大な英字ディスプレイ見出しと色面ブロックを組み合わせ、雑誌のように緩急をつけてレイアウトする

---

## 6. Depth & Elevation

> TYPICA は色面で階層を作るのが主で、影は控えめ。カードはフラット〜軽い影。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 色面ブロック・カード（基本フラット、色で区切る） |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カード・ドロップダウン |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・ドロワー |

---

## 7. Do's and Don'ts

### Do（推奨）

- 背景はクリーム #f4efe5 を使い、純白の冷たさを避ける
- ブランドカラーは多色（イエロー #cbc741／ブルー #1b6688／パープル #7a318d／グリーン #0f7e58）を恐れず大胆に使い、色面と色文字で editorial に組む
- 巨大な英字見出し・数字は restra（ハイコントラスト・セリフ）で組み、各ブランドカラーで色分けする
- 和文には `font-feature-settings: "palt"` をグローバルに適用し、字間を詰めて端正に見せる
- CTA は pill 形状（radius 18〜26px、タブは 999px）。塗り 3 色とアウトラインを使い分ける
- ブルー地＋イエロー文字のような **補色の組み合わせ** で CTA にコントラストを作る

### Don't（禁止）

- 単色ミニマルに寄せない（多色アクセントこそ TYPICA の個性）
- 巨大見出しを和文ゴシックだけで組まない（英字ディスプレイは必ず restra のセリフで）
- 純白 #ffffff をページ地に使わない（クリーム #f4efe5 が基調）
- `palt` を外して和文をベタ組みにしない（字間の詰まりが TYPICA の質感）
- ボタンを角ばった大きな角丸（rect）にしない（pill が基本）
- 和文フォントを 1 つだけ指定しない（必ず中ゴシックBBB → 游ゴシック → ヒラギノのチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | 1 カラム、ナビはドロワー、ディスプレイ見出しは縮小 |
| Tablet | 750–989px | 2 カラム |
| Desktop | ≥ 990px | 2〜4 カラムの editorial グリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- 巨大な英字ディスプレイ（89〜110px）はモバイルで大幅に縮小する（おおよそ半分以下）
- 和文本文はモバイルでも 13〜15px を基準に保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #f4efe5 (Cream)
Primary: #cbc741 (Yellow/Olive)
Secondary: #1b6688 (Blue/Teal)
Accent: #7a318d (Purple) / #0f7e58 (Green)
Text: #000000 / Muted #696969 / Error #e34837
和文 Font: a-otf-gothic-bbb-pr6n, "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro W3", sans-serif
         /* 代替: "Zen Kaku Gothic New" */
英字本文 Font: Clother, HelveticaNeue, Helvetica, sans-serif  /* 代替: "Jost" */
英字ディスプレイ Font: restra, "Times New Roman", Georgia, serif  /* 代替: "Playfair Display" */
Body Size: 13–20px / Line Height: ~1.5 / Letter Spacing: ~0.07em
OpenType: font-feature-settings: "palt"（グローバル適用）
Button: pill (radius 18–26px、tab 999px)
Radius: 4px (base)
```

### プロンプト例

```
TYPICA のデザインシステムに従って、スペシャルティコーヒーのオファー一覧ページを作成してください。
- 背景: #f4efe5（クリーム）。純白は使わない
- ブランドカラーは多色: イエロー #cbc741 / ブルー #1b6688 / パープル #7a318d / グリーン #0f7e58 を色面・色文字で大胆に使う
- 巨大な英字見出し・数字は restra（ハイコントラスト・セリフ、代替 Playfair Display）で組み、各ブランドカラーで色分け
- 和文は a-otf-gothic-bbb-pr6n（代替 Zen Kaku Gothic New）、英字本文は Clother（代替 Jost）
- 和文には font-feature-settings: "palt" をグローバル適用し、line-height 約 1.5 / letter-spacing 約 0.07em で組む
- CTA は pill 形状（radius 21px 前後）。イエロー地＋黒文字 / ブルー地＋イエロー文字 / パープル地＋白文字を使い分ける
- 全体は雑誌のような editorial レイアウト。色面ブロックで情報を区切る
```
