# DESIGN.md — nendo（ネンド）

> nendo（https://www.nendo.jp/jp/）コーポレートサイトのデザイン仕様書。
> 佐藤オオキ率いるデザインオフィス。プロダクト・建築・インテリア・グラフィック・パッケージなど領域横断のデザインプラクティス。
> 実サイトの computed style 実測（2026-05-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白の余白上に、Helvetica Neue + 游ゴシック の混植で**作品写真を完全に主役に据える**極小主義 UI。サイト自体は徹底的に黒子で、クライアントの作品写真と nendo のキャプションだけが浮かび上がる
- **密度**: 本文 16px / line-height 1.5、ナビ・ラベルは 14px / `letter-spacing: 1px` の小キャップス。極小フォントの組み合わせと豊富な余白で**ギャラリー的な編集**になっている
- **キーワード**: ホワイトギャラリー、Helvetica Neue、letter-spacing 1px ナビ、游ゴシック、写真主役、Bootstrap 系基盤、低彩度
- **特徴**:
  - **ブランドカラーは "なし"** — 設計方針として無彩色のみで、唯一の色は作品サムネイルの中
  - **ナビ・ラベルに `letter-spacing: 1px`**（≒0.07em）の小キャップス調が共通言語。Helvetica Neue 14px / weight 400 と組み合わせて版元寄りの編集トーン
  - **オンラインストアリンクのみピル風**（`background: #f2f2f7` / `border-radius: 12px`）— 全体ミニマルの中で唯一のカラー面要素
  - **作品キャプションは 24px / weight 700 + 17.6px サブタイトル** で、写真の下に英字略称と日本語サブで構成（例: "HRMT" / "多様な料理ジャンルと人材が相乗効果を生むリブランディングプロジェクト"）
  - **Bootstrap 4 系 CSS 変数**（`--blue: #007bff`, `--gray: #6c757d` 等）が残存しているが、UI で実際に使われている色は**ニュートラルのみ**
  - 本文テキストは **`#5a5a5a`**（中グレー）。純黒ではなく、写真とのコントラストを下げる柔らかい黒
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> nendo のパレットは極端にニュートラル偏重で、彩色は作品写真側に委ねる。

### Brand

- **ブランド固有色は持たない**。サイト UI は完全にモノクロームで構成

### CTA / Buttons

- **Online Store Pill**: 背景 `#f2f2f7` / 文字 `#5a5a5a` / radius `12px` / padding `0 18px 0 34px`（左にアイコン分の余白）/ Helvetica Neue 14px / weight 400 / letter-spacing 1px
- **Hamburger Toggle (Mobile)**: 背景 `rgba(255, 255, 255, 0.5)` / アイコン色 `rgb(89, 87, 87)` ≒ `#595757`
- **Slide Indicator**: 円ドット、選択時 `#ffffff`、非選択時 `rgba(255, 255, 255, 0.2)`

### Neutral

- **Text Primary** (`#212529`): body の基本テキスト色（Bootstrap デフォルト）
- **Text Caption** (`#5a5a5a`): キャプション・段落・ナビゲーション（実 UI で頻出）
- **Text Charcoal** (`#5a5757`): 作品サブタイトル・ハンバーガーアイコン
- **Text Quaternary** (`#222222`): モバイルメニュー内項目
- **Form Text** (`#495057`): 入力フィールド内のテキスト（Bootstrap）
- **Border Form** (`#ced4da`): 入力フィールドの枠線（Bootstrap）
- **Surface Pill** (`#f2f2f7`): オンラインストアリンクの背景（Apple iOS の Light Surface 風）
- **Background** (`#ffffff`): ページ背景（純白ギャラリー）
- **Overlay Light** (`rgba(255, 255, 255, 0.2)`): 画像オーバーレイ上の薄白
- **Overlay Mid** (`rgba(255, 255, 255, 0.5)`): モバイルハンバーガー背景

### Semantic（補完）

実サイトに表面化したエラー・成功色は確認できないが、Bootstrap 系の CSS 変数として以下が定義されているため UI に出る場合はこれを使用:

- **Danger**: `#dc3545`（Bootstrap）
- **Warning**: `#ffc107`
- **Success**: `#28a745`
- **Info**: `#17a2b8`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **游ゴシック / Yu Gothic Medium / Yu Gothic**
- **フォールバック**: **ヒラギノ角ゴ ProN / Hiragino Sans**
- **Web フォント補強**: **Noto Sans CJK JP**

### 3.2 欧文フォント

- **ナビ・ラベル**: **Helvetica Neue / Helvetica / Arial**（letter-spacing 1px の小キャップス用途）
- **body システム**: **-apple-system / system-ui / Segoe UI / Roboto / Helvetica Neue / Arial**

### 3.3 font-family 指定

実サイトの実測値（**3 系統に分かれる**）:

```css
/* body: システムフォント主導（Bootstrap 4 系） */
font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
  Arial, "Noto Sans", "Liberation Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

/* 和文系: 游ゴシック主導（作品キャプション・本文） */
font-family: -apple-system, YuGothic, "Yu Gothic Medium", "Yu Gothic",
  "Hiragino Sans", "Noto Sans CJK JP", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans Emoji";

/* 欧文ナビ・ラベル: Helvetica Neue 主導 */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- **役割で書体を完全に分ける**設計（ナビ／ラベル＝Helvetica Neue、和文／キャプション＝游ゴシック、body＝システム）
- 和文側は **`-apple-system` を先頭**に置き、Mac で SF Pro JP 由来のレンダリングを優先
- Helvetica Neue ナビには CJK フォントを含めない（英字のみで使用される前提）
- AI で再現する場合、Web フォント補完として **Noto Sans JP**（Google Fonts） を使うのは妥当だが、nendo の意図は**システム和文の素朴さ**を活かすこと

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・works ページ、2026-05-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section Heading | Helvetica Neue | 14px | 400 | 16.8px (×1.2) | 1px (≒0.07em) | `#5a5a5a` | "clients" 等のミニ見出し |
| Project Title | Yu Gothic | **24px** | 700 | 36px (×1.5) | normal | `#5a5757` | "HRMT", "MAQL" 等の英字略称 |
| Project Subtitle | Yu Gothic | 17.6px | 400 | 26.4px (×1.5) | normal | `#5a5757` | 日本語の作品説明 |
| Body | Yu Gothic | 16px | 400 | 24px (×1.5) | normal | `#212529` | 通常本文（body 既定） |
| Hover Title (En) | Helvetica Neue | 18.56px | 400 | 27.84px (×1.5) | normal | `#222222` | モバイルメニュー内 |
| Nav Link | Helvetica Neue | 14px | 400 | 21px (×1.5) | 1px | `#5a5a5a` | グローバルナビ |
| Online Store Pill | Helvetica Neue | 14px | 400 | 21px (×1.5) | 1px | `#5a5a5a` | bg `#f2f2f7` / radius 12px |
| Footer Caption | Yu Gothic | 10px | 400 | 15px (×1.5) | normal | `#5a5a5a` | "online store" 等の小ラベル |
| Sub Project Date | Yu Gothic | 12px | 400 | 18px (×1.5) | normal | `#5a5a5a` | "SNCF Voyageurs" 等のクライアント名 |
| Sub Project Bold | Yu Gothic | 12px | 600 | 18px (×1.5) | normal | `#5a5a5a` | サブカード内強調 |
| Form Input | Yu Gothic | 16px | 400 | 24px (×1.5) | normal | `#495057` | 検索フィールド |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.5` 一貫（24px / 16px、36px / 24px、26.4px / 17.6px）— 控えめでギャラリー的な締まり
- **ナビ・ラベル**: line-height 1.5 + **letter-spacing 1px**（小キャップス的な編集トーン）
- **見出しの行間**: 1.5（タイトな見出しは作らない）

**ガイドライン**:
- 全体で `line-height: 1.5` に統一して、**ギャラリーの整理されたリズム**を保つ
- 英字ラベル・ナビには **`letter-spacing: 1px`** を必ず付ける（nendo の編集言語）
- 和文には letter-spacing を**付けない**（游ゴシックの自然な詰めを尊重）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 作品キャプションは1〜2行で完結する短文設計のため、自動禁則で問題なし
- 英字略称（プロジェクト名）は折り返さないように `white-space: nowrap` を推奨

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt`・`kern` ともに**明示有効化されていない**
- 游ゴシックの素朴な字詰めをそのまま使う、編集デザイン的な姿勢

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Online Store Pill** — 唯一のボタン状要素
- Background: `#f2f2f7`
- Text: `#5a5a5a`
- Padding: `0 18px 0 34px`（左にアイコン分の余白）
- Border Radius: `12px`
- Font: Helvetica Neue, 14px, weight 400, letter-spacing 1px
- Border: none
- Box Shadow: なし

**Nav Link** — 通常のナビゲーション
- Background: transparent
- Text: `#5a5a5a`
- Padding: `8px 18px`
- Font: Helvetica Neue, 14px, weight 400, letter-spacing 1px
- Border: none

**Hamburger Toggle (Mobile)**
- Background: `rgba(255, 255, 255, 0.5)`
- Icon Color: `#595757`
- Size: 推奨 48×48px

**Slide Indicator (Carousel)**
- Background: `rgba(255, 255, 255, 0.2)`（非選択）／ `#ffffff`（選択）
- Border Radius: `50%`（円）
- Size: 約 8〜12px

### Inputs（Bootstrap 4 デフォルト準拠）

- Background: `#ffffff`
- Border: `1px solid #ced4da`
- Border (focus): `1px solid #80bdff`（Bootstrap 既定）または `1px solid #5a5757`（nendo トーン推奨）
- Border Radius: `4px`
- Padding: `6px 12px`
- Font: 16px, weight 400
- Color: `#495057`
- Height: 約 38px

### Cards / Project Tiles

- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`（推奨：写真の四角を尊重）
- Padding: 写真直下にキャプション領域 16〜24px
- Shadow: 基本フラット

### Header / Nav

- Background: `#ffffff`
- Border Bottom: なし or `1px solid rgba(0, 0, 0, 0.06)`（推奨）
- Padding: `8〜16px 24px`
- Layout: ロゴ左、ナビ右、オンラインストアピルが端に配置

### Footer

- Background: `#ffffff`
- Color: `#5a5a5a`
- Padding: `64px 32px 32px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | リスト項目間 |
| M | 16px | カード内の段落間 |
| L | 24px | カード間／セクション内余白 |
| XL | 48px | セクション間 |
| XXL | 96px | 大セクション間（ギャラリーらしいゆとり） |

### Container

- Max Width: `1280px`（推奨、作品サムネイルのグリッドを広く取る）
- Padding (horizontal): mobile `16px` / desktop `24〜48px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | 写真・カード（写真の四角を尊重） |
| Small | 4px | 入力フィールド（Bootstrap 既定） |
| Medium | 12px | オンラインストアピル（唯一の角丸要素） |
| Circle | 50% | スライドインジケーター |

### Grid

- 4 カラム（works ページのプロジェクトサムネイル）または 2 カラム（works 詳細）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・写真（基本フラット） |
| 1 | `0 0 0 1px rgba(0, 0, 0, 0.04)` | ホバー時の薄境界（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | モーダル（推奨） |

- nendo は **影をほぼ使わない**。写真の存在感が主役で、UI 側はギャラリー壁のように透明
- 影を出すのは作品詳細モーダルや検索結果のオーバーレイ程度

---

## 7. Do's and Don'ts

### Do（推奨）

- ナビ・ラベルには **Helvetica Neue + `letter-spacing: 1px`** を必ず付ける（nendo の編集言語）
- 和文は **游ゴシック → ヒラギノ角ゴ ProN → Noto Sans CJK JP** の順でフォールバック
- 本文の line-height は **1.5** に統一（ギャラリーの締まり）
- テキスト色は **`#5a5a5a`**（中グレー）を基本にし、純黒 `#000000` は使わない
- 作品キャプションは **英字略称 24px / 700 + 日本語サブ 17.6px / 400** の 2 段組み
- 角丸は **写真・カードは 0px、ピルのみ 12px、入力は 4px** と明確に分ける
- 背景は **純白 `#ffffff`** で写真をギャラリー的に見せる
- 色は **作品写真の中だけに存在する** という方針を守る

### Don't（禁止）

- ブランドカラーを設定しない（nendo の特徴は無彩色 UI）
- ナビに **letter-spacing: normal** を使わない（編集トーンが消える）
- 和文に **letter-spacing 1px** を付けない（游ゴシックが詰まりすぎる）
- 純黒 `#000000` を本文に使わない（写真とのコントラストが強すぎる）
- 影を多用しない（ギャラリーの平面性が崩れる）
- カラフルな CTA・派手なアクセント色を入れない（写真主役の方針が崩れる）
- 写真カードに **角丸 8〜16px** を付けない（直角を維持）

---

## 8. Responsive Behavior

### Breakpoints（Bootstrap 4 系）

| Name | Min Width | 説明 |
|------|-----------|------|
| `xs` | 0 | モバイル |
| `sm` | 576px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 992px | デスクトップ |
| `xl` | 1200px | 広いデスクトップ |

### モバイル時の調整

- Project Title: 24px → 20px
- Project Subtitle: 17.6px → 15〜16px
- ナビは drawer ハンバーガーへ切り替え（`drawer` クラス使用）
- 4 カラムグリッド → 2 カラム → 1 カラム

### タッチターゲット

- ナビリンク: padding `8px 18px` → モバイルは line-height + padding で 44px 以上に
- ハンバーガー: 48×48px

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白ギャラリー）
Text Primary: #212529（body）
Text Caption: #5a5a5a（実 UI で頻出）
Text Charcoal: #5a5757（作品キャプション）
Surface Pill: #f2f2f7（オンラインストアのみ）
Border Form: #ced4da

Nav Font: "Helvetica Neue", Helvetica, Arial, sans-serif
Body Font: -apple-system, YuGothic, "Yu Gothic Medium", "Yu Gothic", "Hiragino Sans", "Noto Sans CJK JP", sans-serif
System Font: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Body: 16px / line-height 1.5 / weight 400 / letter-spacing normal
Project Title: 24px / line-height 1.5 / weight 700 / Yu Gothic
Project Subtitle: 17.6px / line-height 1.5 / weight 400 / Yu Gothic
Nav: 14px / line-height 1.5 / weight 400 / Helvetica Neue / letter-spacing 1px

Border Radius: 0px（写真）／ 4px（input）／ 12px（オンラインストアピル）
Shadow: none（基本フラット）
```

### プロンプト例

```
nendo のデザインに従って、プロジェクト一覧ページを作成してください。
- 背景: #ffffff（純白ギャラリー）
- ナビフォント: "Helvetica Neue", Helvetica, Arial, sans-serif
- 和文フォント: -apple-system, YuGothic, "Yu Gothic Medium", "Hiragino Sans", "Noto Sans CJK JP", sans-serif
- ナビリンク: 14px / weight 400 / letter-spacing 1px / color #5a5a5a / Helvetica Neue
- プロジェクトタイトル（英字略称）: 24px / weight 700 / line-height 1.5 / color #5a5757 / Yu Gothic
- 日本語サブタイトル: 17.6px / weight 400 / line-height 1.5 / color #5a5757 / Yu Gothic
- 通常本文: 16px / weight 400 / line-height 1.5 / color #212529
- 作品サムネイル: 角丸 0px、影なし、写真の四角を尊重
- オンラインストアピル: 背景 #f2f2f7 / 文字 #5a5a5a / radius 12px / padding 0 18px 0 34px / Helvetica Neue 14px / letter-spacing 1px
- ブランドカラーは設定しない（無彩色 UI、色は作品写真の中だけに）
- 4 カラムグリッド、Gutter 16〜24px
- ナビ・ラベルには必ず letter-spacing 1px を付ける（nendo の編集言語）
- 純黒 #000000 を本文に使わず、#5a5a5a を基本色に
- 影は使わない（ギャラリーの平面性を保つ）
```
