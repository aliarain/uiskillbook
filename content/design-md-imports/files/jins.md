# DESIGN.md — JINS（ジンズ）

> JINS（https://www.jins.com/jp/）のデザイン仕様書。
> 「Magnify Life. メガネをかけるすべての人の人生を拡張する」アイウェア D2C。
> 実サイトの computed style 実測（2026-05-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Tazugane Gothic（Morisawa）** で日本語のラテンライク な現代ゴシックを基調に、**自社設計の "JINS Next"** を英語見出しに当てる二本立て。CSS 変数で完全にトークン化された D2C プラットフォーム
- **密度**: 本文 16.5px / line-height 1.66 / letter-spacing 0.01em。読みやすさと商品グリッドの密度を両立。`--text-letter-spacing: 0.01em` を変数で固定
- **キーワード**: Tazugane Gothic、JINS Next、ブランドレッド `#ca2029`、CSS 変数完備、商品 EC、ニュートラル多階調グレー
- **特徴**:
  - **CSS Custom Properties が完備**（実測 31 個）。`--main-color-red: #da0024`、`--text-body-l-jp: 16.5px`、`--text-letter-spacing: 0.01em` などフルトークン化
  - **和文に Tazugane Gothic StdN（Morisawa）** を採用。Noto Sans JP より字面が引き締まり、JINS の機能寄りな印象に合う
  - **欧文・英見出しに自社書体 "JINS Next"**（"Products" "MEN" "WOMEN" 等のラベル）。weight 500 のミディアム
  - **ブランドカラーは `#ca2029`（鮮紅）/ CSS 変数では `#da0024`**。CTA・通知・閉じるボタンの主要アクション色
  - **アクセントネイビー `#27455c`** が出現（フィルタアイコン・サブ要素）
  - **リンク色は `#eb667c`（コーラルピンク）** — レッドからやわらかく派生
  - **Border Radius は階層的に 2px / 10px / 17px / 50px**。商品カードは 10px、フィルタピルは 50px、CTA は 2px
  - グレースケールは `gray3 → gray5 → gray10 → gray25 → gray50 → gray60 → gray90` の 7 段階

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値・CSS 変数に基づく。すべて hex 表記。

### Brand

- **Brand Red (Tokenized)** (`#da0024`): CSS 変数 `--main-color-red`。Cookie 通知・CTA の本来色
- **Brand Red (Computed)** (`#ca2029`): 実測時点でボタン背景に表示される値（彩度わずかに低めのレンダリング差）
- **Link Pink** (`#eb667c`): CSS 変数 `--link-color`。テキストリンクのコーラルピンク

### Accent

- **Accent Navy** (`#27455c`): セカンダリアクセント（フィルタアイコン背景等）。出現頻度は中程度
- **Accent Olive** (`#468254`): タグ・状態表示用の落ち着いた緑

### CTA / Buttons

- **Primary CTA**: 背景 `#ca2029` / 文字 `#ffffff` / radius `2px` / padding `12px 30px` / 12〜14.4px / weight 700
- **Secondary CTA（"もっとみる" ピル）**: 背景 `#f2f2f2` / 文字 `#000000` / border `1px solid #f2f2f2` / radius `10px` / 12.2px / weight 400 / Tazugane Gothic
- **Filter Pill (Outlined)**: 背景 `#ffffff` / 文字 `#000000` / border `1px solid #707070` / radius `50px` / padding `6px 35px 6px 15px` / 12.8px

### Neutral — JINS Token Scale

JINS の CSS 変数で定義された 7 段階グレースケール:

| Token | Value | RGB | 役割 |
|-------|-------|-----|------|
| `--main-color` | `#000000` | (0, 0, 0) | 主要テキスト |
| `--main-color-gray90` | `#1b1b1b` | (27, 27, 27) | 濃いグレーテキスト |
| `--main-color-gray60` | `#5e5e5e` | (94, 94, 94) | 補助テキスト |
| `--main-color-gray50` | `#808080` | (128, 128, 128) | 商品カードキャプション |
| `--main-color-gray25` | `#bfbfbf` | (191, 191, 191) | 弱いボーダー |
| `--main-color-gray10` | `#e6e6e6` | (230, 230, 230) | カード境界 |
| `--main-color-gray5` | `#f2f2f2` | (242, 242, 242) | フッター・ピル背景 |
| `--main-color-gray3` | `#f8f8f8` | (248, 248, 248) | 最も淡いサーフェス |
| Surface FA | `#fafafa` | (250, 250, 250) | 商品カード面（最頻出 43 件） |
| Surface F4 | `#f4f4f4` | (244, 244, 244) | 補助サーフェス |

### Sub Brand（CSS 変数）

- `--main-sub-blue5`: `#f7f8fd`（極淡ブルー面）
- `--main-sub-blue`: `#abb9ed`（補助ブルー）
- `--main-sub-red3`: `#fff5f6`（極淡レッド面）

### Cookie / Modal Overlay

- **Cookie Banner BG**: `rgba(62, 58, 57, 0.8)`（暖色寄りの黒オーバーレイ）

### Semantic

- **Danger / Primary Action**: `#da0024`（ブランドレッド = Danger 兼用）
- **Success（推奨）**: `#468254`
- **Warning（推奨）**: `#d97a00`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（主要）**: **TazuganeGothicStdN（Morisawa）** を最優先
- フォールバックは `sans-serif`（システムの和文ゴシック）
- 明朝体は使用しない（全体ゴシック統一）

### 3.2 欧文フォント

- **見出し・英ラベル**: **`jins_next`（JINS Next／自社書体）** → "JINS Next"（CSS 変数経由）→ "Noto Sans Japanese" → sans-serif
- **本文・UI**: TazuganeGothicStdN の欧文グリフを使用（独立した欧文書体は組まない）
- "MEN" "WOMEN" "Products" など navigation ラベルは JINS Next で組まれる

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・UI（Tazugane） */
font-family: TazuganeGothicStdN, sans-serif;

/* 英見出し・ナビラベル（JINS Next） */
font-family: jins_next, "JINS Next", "Noto Sans Japanese", sans-serif;

/* CSS 変数の文字サイズ・字間 */
:root {
  --text-body-l-jp: 16.5px;
  --text-body-m-jp: 14.4px;
  --text-body-s-jp: 12.2px;
  --text-caption-jp: 11px;
  --text-body-l-en: 17px;
  --text-body-m-en: 15px;
  --text-body-s-en: 13px;
  --text-caption-en: 11px;
  --text-letter-spacing: 0.01em;
  --text-letter-spacing-en: 0.02em;
}
```

**フォールバックの考え方**:
- **シンプルな2層構造**: ブランド書体 → `sans-serif` の最小チェーン
- TazuganeGothicStdN は Morisawa Web フォント。未契約環境では即座にシステム sans-serif にフォールバックする想定
- JINS Next は自社配信のため、フォールバックに `Noto Sans Japanese` を挟む（"日本語のサンセリフ" として近い字面）

> **代替フォント注記**:
> - **Tazugane Gothic StdN** は Morisawa Web Service / Adobe Fonts のフォント。プレビューでの再現には **Noto Sans JP**（同じく日本語の現代ゴシック）が近い印象
> - **JINS Next** は自社書体のため代替は難しい。Web プレビューでは **Inter**（欧文の現代サンセリフ）+ **Noto Sans JP** の組合せで近似する

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Body L (JP) | Tazugane | 16.5px | 400 | 27.39px (×1.66) | 0.165px (0.01em) | `#000000` | 主要本文 |
| Body M (JP) | Tazugane | 14.4px | 400 | — | (0.01em) | `#000000` | サブ本文 |
| Body S (JP) | Tazugane | 12.2px | 400 | 20.252px (×1.66) | 0.122px (0.01em) | `#000000` / `#808080` | 商品カードタイトル |
| Caption | Tazugane | 11px | 400 | — | (0.01em) | `#5e5e5e` | 注釈 |
| H2 Hero | Tazugane | 31px | **700** | 44.95px (×1.45) | 0.31px (0.01em) | `#ffffff` | "Airframe"（ヒーロー） |
| H4 EN Title | JINS Next | 21px | 500 | 27.3px (×1.3) | 0.42px (**0.02em**) | `#000000` | "メガネだけじゃない！" |
| Footer EN H2 | JINS Next | 17px | 500 | 22.1px (×1.3) | 0.34px (0.02em) | `#000000` | "Products / 製品情報" |
| Nav Link (EN) | JINS Next | 17px | 500 | 22.1px (×1.3) | 0.34px (0.02em) | `#000000` | "MEN" "WOMEN" |
| Nav Link (JP) | Tazugane | 17px | 700 | 26.35px (×1.55) | 0.17px (0.01em) | `#000000` | "コンタクトレンズ" |
| Hero Lead | Tazugane | 16.5px | 400 | 23.83px (×1.44) | 0.165px (0.01em) | `#ffffff` | "2,600万人が選んだ「軽さ」の、その先へ。" |
| Cookie Header | Tazugane | 16px | 700 | 24px (×1.5) | normal | `#696969` | "クッキーに関するお知らせ" |
| Primary Button | Tazugane | 12〜14.4px | 700 | 12〜14.4px (×1.0) | 0.12〜0.144px (0.01em) | `#ffffff` | "Apply" "閉じる" |
| Secondary Pill | Tazugane | 12.2px | 400 | 20.252px (×1.66) | 0.122px (0.01em) | `#000000` | "もっとみる" |
| Filter Pill | Tazugane | 12.8px | 400 | normal | normal | `#000000` | フィルタチップ |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16.5px / 12.2px)**: **`1.66`**（CSS で `27.39px / 16.5px = 1.66`）
- **見出し (31px Hero)**: `1.45`
- **EN ナビ (17px JINS Next)**: `1.3`
- **JP ナビ (17px Tazugane)**: `1.55`

**字間 (letter-spacing)** — CSS 変数で固定:
- **JP 全般**: **`--text-letter-spacing: 0.01em`**（極めて控えめ）
- **EN 見出し・ナビ**: **`--text-letter-spacing-en: 0.02em`**（やや広め）
- 例外: Cookie バナー等の OneTrust 系は `normal`（ベンダー UI）

**ガイドライン**:
- 日本語本文は **line-height 1.66 + letter-spacing 0.01em** が JINS の基本リズム
- 英語ナビは **letter-spacing 0.02em** で和文より広く取る（JINS Next の表情を生かす）
- Tazugane Gothic は字面が広いため、過度な letter-spacing は不要
- 商品カードタイトルは 12.2px / 1.66 でコンパクトに、Caption は 11px

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名（"JINS Combination Titanium ［中顔面短縮メガネ］" など）は折り返さない `white-space: nowrap` でカード幅に合わせる場合あり

### 3.7 OpenType 機能

```css
font-feature-settings: "liga" 0;
```

- 実測ですべての要素に **`"liga" 0`（リガチャ無効）** が掛かっている
- これは **欧文の合字を抑止** して、商品コードや SKU 系の英数字が崩れないようにする実装的な配慮
- `palt` `kern` の明示有効化は確認できず — Tazugane / JINS Next のメトリクスに任せる

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ブランドレッド）** — "Apply" "全てのクッキーを受け入れる"
- Background: `#ca2029`（実測。CSS 変数では `#da0024`）
- Text: `#ffffff`
- Border: `1px solid #ca2029`
- Padding: `12px 30px`
- Border Radius: `2px`
- Font: Tazugane, 12〜14.4px, weight 700
- Letter Spacing: `0.01em`

**Secondary Pill（"もっとみる"）**
- Background: `#f2f2f2`（gray5）
- Text: `#000000`
- Border: `1px solid #f2f2f2`
- Padding: 商品カード相当（縦横中央寄せ）
- Border Radius: `10px`
- Font: Tazugane, 12.2px, weight 400

**Filter Pill (Outlined)**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #707070`
- Padding: `6px 35px 6px 15px`（右にアイコン余白）
- Border Radius: `50px`
- Font: Tazugane, 12.8px, weight 400

**Tertiary / Cancel** — "Clear"
- Background: transparent
- Text: `#696969`（gray60 系）
- Border: `1px solid transparent`
- Padding: `1px`
- Border Radius: `2px`
- Font: Tazugane, 14.4px, weight 700

**Link Button** — "クッキー詳細"
- Background: transparent
- Text: `#3860be`（OneTrust デフォルト青、JINS の主要 UI ではなくサードパーティ寄り）
- Font: Tazugane, 13px, weight 400

### Inputs

**Search Pill Input**（モバイル系）
- Background: `#ffffff`
- Border: `1px solid #707070`
- Border Radius: `50px`（pill）
- Padding: `6px 35px 6px 15px`
- Font: Tazugane, 12.8px

**Standard Input（推奨）**
- Background: `#ffffff`
- Border: `1px solid #e6e6e6`
- Border (focus): `1px solid #000000`
- Border Radius: `2px`
- Padding: `12px 16px`
- Font: Tazugane, 14.4〜16px

### Product Card

- Background: `#fafafa`（最頻出のカード面）
- Border: なし
- Border Radius: `10px`
- Padding: 内容に応じて 16〜24px
- Title: 12.2px Tazugane weight 400
- Caption: 12.2px Tazugane weight 400 color `#808080`
- Favorite Icon Container: white circle radius 50% border 1px `#e6e6e6`

### Cards / Surfaces

- Surface 階層: `#ffffff` → `#fafafa`（カード）→ `#f8f8f8` → `#f4f4f4` → `#f2f2f2`（フッター）→ `#e6e6e6`（境界）
- Border: なしが基本、必要に応じて `#e6e6e6`
- Border Radius: `2px`（小）/ `10px`（カード）/ `50px`（ピル）

### Header / Nav

- Background: `#ffffff`
- Height: `--header-height: 70px`
- Border Bottom: なし、または `1px solid #e6e6e6`
- Padding: `0 var(--side-spacing)` (= 0 48px)
- z-index: 高め

### Footer

- Background: `#f2f2f2`（gray5）
- Padding: `60px 0 20px`（実測）
- Color: `#000000` 主体、英ラベルは JINS Next

### Cookie Banner

- Background: `rgba(62, 58, 57, 0.8)`
- Color: `#ffffff`
- Padding: 上下 24〜32px
- Buttons: Primary Red `#ca2029` / Close icon `#555555`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px ＋ JINS 変数）

| Token | Value | 用途 |
|-------|-------|------|
| `--side-spacing` | **48px** | ページ左右パディング（実測変数） |
| XS | 4px | アイコンと文字の間 |
| S | 8px | 商品カード内の段落間 |
| M | 16px | カード内の余白 |
| L | 24px | カード／セクション内のブロック間 |
| XL | 48px | セクション間の縦余白（= side-spacing） |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1440px` 程度
- Padding (horizontal): `--side-spacing: 48px`（PC）/ mobile では `16〜24px`
- Header Height: `--header-height: 70px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | `2px` | CTA・小ボタン |
| Medium | `10px` | 商品カード・"もっとみる" ピル |
| Filter | `17px` | フィルタチップ（円形寄り） |
| Pill | `50px` | 検索 input・大ピル |
| Circle | `50%` | お気に入りアイコン枠 |

### Grid

- 商品グリッドは **3〜4 カラム**（PC）/ 2 カラム（mobile）
- Gutter: 16〜24px
- Swiper（CSS 変数 `--swiper-theme-color: #007aff` を使用）でカルーセル

### Transition

- `--transition: 0.3s` を変数で固定
- Hover の opacity: `--link-hover-opacity: 0.7`
- Hover の brightness: `--link-hover-brightness: brightness(0.97)`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。商品カード・ヘッダー・フッター |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.10)` | モーダル・ドロップダウン（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.14)` | ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **8 段階のグレースケールサーフェス** で表現
- カードのホバー時は `brightness(0.97)` で軽くトーンを落とす（実測変数）

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **TazuganeGothicStdN**、英ラベル・ナビは **JINS Next** で書体を分ける
- 本文の line-height は **1.66**、letter-spacing は **0.01em（JP） / 0.02em（EN）** を CSS 変数で固定する
- ブランドカラーは **`#da0024`（CSS 変数）/ `#ca2029`（描画）** の鮮紅。リンクは `#eb667c` のコーラル
- グレースケールは **`gray3 → gray5 → gray10 → gray25 → gray50 → gray60 → gray90`** の 7 段階トークンを使う
- 商品カードは **`#fafafa` 背景 + `border-radius: 10px`** が基本
- フィルタ・検索は **`border-radius: 50px` のピル**
- CTA ボタンは **`border-radius: 2px` の角丸控えめ**
- `font-feature-settings: "liga" 0` を継承させる（合字を抑止して英数字を安定させる）

### Don't（禁止）

- 商品 CTA に **完全ピル（`border-radius: 9999px`）を使わない** — JINS の CTA は 2px
- 和文に **Noto Sans JP / Hiragino を主要指定にしない** — Tazugane を最優先
- 英ラベルに **Helvetica / Inter 等を使わない** — JINS Next のブランド書体を使う
- ブランドレッドを **彩度の低いマルーンや暗赤に変えない** — `#da0024` の鮮紅が JINS の押し
- グレーを CSS 変数の階層から外して**任意の値を使わない**（`gray3 → gray90` の 7 段階で揃える）
- 本文の letter-spacing を **0.04em 以上に広げない** — JINS は 0.01em で締める設計
- ヘッダー高さを `--header-height: 70px` から外さない

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ（`--side-spacing: 48px` 適用） |

### モバイル時の調整

- ヒーロー: 31px → 24〜26px
- 英見出し JINS Next: 21px → 18px
- 本文サイズは 16.5px を維持
- `--side-spacing` を 16〜24px に縮小
- 商品グリッドは 4 カラム → 2 カラム

### タッチターゲット

- 主要 CTA: padding `12px 30px` で約 41px の高さ（最小 44px に近づけるのが望ましい）
- フィルタピル: padding `6px 35px 6px 15px` でコンパクト
- お気に入りアイコン: 円形 24〜28px（タップ最小化）

### ダークモード

- `--main-color-rv: #fff` の変数があり反転色を意識した設計
- 完全なダークモードは未実装（実測時点）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red (Token): #da0024
Brand Red (Computed): #ca2029
Link Pink: #eb667c
Accent Navy: #27455c

Gray Scale (CSS 変数):
  --main-color-gray3:  #f8f8f8
  --main-color-gray5:  #f2f2f2
  --main-color-gray10: #e6e6e6
  --main-color-gray25: #bfbfbf
  --main-color-gray50: #808080
  --main-color-gray60: #5e5e5e
  --main-color-gray90: #1b1b1b

Surface (Card): #fafafa
Black: #000000
White: #ffffff

JP Font: TazuganeGothicStdN, sans-serif
EN/Heading Font: jins_next, "JINS Next", "Noto Sans Japanese", sans-serif

Sizes:
  --text-body-l-jp: 16.5px / line-height 1.66 / letter-spacing 0.01em
  --text-body-m-jp: 14.4px
  --text-body-s-jp: 12.2px / line-height 1.66
  --text-caption-jp: 11px
  --text-body-l-en: 17px / weight 500 / letter-spacing 0.02em (JINS Next)
  --text-body-m-en: 15px
  --text-body-s-en: 13px

Hero H2: 31px / weight 700 / line-height 1.45 / Tazugane
H4 EN: 21px / weight 500 / line-height 1.3 / letter-spacing 0.02em / JINS Next

Border Radius: 2px（CTA）／10px（カード・もっとみる）／50px（ピル）／50%（円）
Side Spacing: 48px (--side-spacing)
Header Height: 70px (--header-height)
Transition: 0.3s
font-feature-settings: "liga" 0
```

### プロンプト例

```
JINS のデザインに従って、商品グリッドセクションを作成してください。
- 和文フォント: TazuganeGothicStdN, sans-serif
- 英見出しフォント: jins_next, "JINS Next", "Noto Sans Japanese", sans-serif
- セクション英タイトル: JINS Next 21px / weight 500 / line-height 1.3 / letter-spacing 0.02em
- セクション和タイトル: Tazugane 16.5px / weight 400 / letter-spacing 0.01em
- 商品カードタイトル: Tazugane 12.2px / weight 400 / line-height 1.66 / color #000000
- 商品カードキャプション: Tazugane 12.2px / color #808080（gray50）
- 本文: 16.5px / weight 400 / line-height 1.66 / letter-spacing 0.01em
- 主要 CTA: 背景 #ca2029（ブランドレッド）/ 白文字 / radius 2px / padding 12px 30px / Tazugane 12〜14.4px / weight 700
- セカンダリ "もっとみる": 背景 #f2f2f2 / 黒文字 / radius 10px / Tazugane 12.2px / weight 400
- フィルタピル: 白背景 / 黒文字 / border 1px solid #707070 / radius 50px / padding 6px 35px 6px 15px
- 商品カード: 背景 #fafafa / radius 10px / border なし
- リンク色: #eb667c
- font-feature-settings: "liga" 0 をルートに適用
- グレーは gray3〜gray90 の 7 段階トークンから選ぶ（任意の灰色を使わない）
- ボタンに pill (radius 9999px) を使わない（CTA は 2px、もっとみるは 10px）
- 和文に Noto Sans JP を主要指定しない（Tazugane を最優先）
```
