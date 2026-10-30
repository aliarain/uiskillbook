# DESIGN.md — Graphpaper（グラフペーパー）

> Graphpaper（https://graphpaper-tokyo.com/）のデザイン仕様書。
> 南貴之が手がける東京のミニマル・ファッションブランド／セレクトショップ（Shopify ベースの EC）。
> 最大の特徴は **Helvetica 一本槍の極小タイポグラフィ** と **角丸を一切持たない直角（radius 0）の作り**、そして **純白地 × ニアブラック #212121 × ヘアライン（#f1f1f1）** で構成される徹底した余白設計。装飾色を持たず、商品ビジュアルそのものを主役にする。差し色はスレートブルー #8191a4 と、お知らせ帯の金 #ab8c52 のみ。
> 実サイトの computed style / CSS Custom Properties 実測（2026-06-30 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Helvetica と余白だけ**で構成する、編集的でクールなミニマリズム。文字は小さく、罫線はヘアライン、角は立て、色は持たない。商品画像を大きく置き、UI は限りなく引く
- **Graphpaper について**: 南貴之によるブランド／セレクトショップ。実店舗の硬質でギャラリー的な空間そのままに、Web も白・黒・極小 Helvetica で構成される
- **密度**: 低〜中密度。大きな商品ビジュアルと広い余白、極小の英字ラベル。情報は最小限に絞り、画像で語る
- **キーワード**: Helvetica、極小タイポ、直角（radius 0）、純白 #fff、ニアブラック #212121、ヘアライン #f1f1f1、スレートブルー #8191a4、金 #ab8c52（お知らせ）、大文字ラベル、エディトリアル
- **特徴**:
  - 書体は **Helvetica, Arial, sans-serif の一系統のみ**。和文専用 Web フォントは持たず、Helvetica の後ろにシステム和文を任せる
  - テキストは **純黒 #000 ではなく #212121（ニアブラック）** が基本。濃淡は #212121 の α 値（5〜95%）で段階表現する
  - **角丸を一切持たない**（`--radius: 0px`）。ボタンも入力も画像枠もすべて直角
  - 罫線は **ヘアライン #f1f1f1 / #f7f7f7** の極細。枠で主張せず、面の境目をそっと示す
  - 差し色は **スレートブルー #8191a4**（secondary）と、サイト上部のお知らせ帯の **金 #ab8c52**（border #e6ddcb）のみ。それ以外は無彩色
  - ナビ・ラベルは **小さな大文字英字（WEB STORE / VIEW ALL / CONTACT）** が基本

---

## 2. Color Palette & Roles

> CSS Custom Properties（`--color-*`）実測値。装飾色を持たない無彩色＋極小の差し色。すべて hex 表記。

### Core（背景・面）

- **White** (`#ffffff`): ページ・ヘッダー・カードの基本地（`--color-bg`）
- **Video / Tint BG** (`#f2f2f2`): 動画・メディア面の地（`--color-video-bg`）
- **Border** (`#f1f1f1`): 標準の区切り線（`--color-border`）
- **Border Light / Hairline** (`#f7f7f7`): さらに淡いヘアライン（`--color-border-light` / `--color-border-hairline`）
- **Border Dark** (`#bebebe`): 強めの区切り・入力枠（`--color-border-dark`）

### Text

- **Text** (`#212121`): 本文・リンクの基本テキスト（`--color-text` / `--color-link`）。ニアブラック
- **Text Dark** (`#000000`): 最も強い見出し・価格など（`--color-text-dark`）
- **Text Light** (`#646464`): 補助テキスト・キャプション（`--color-text-light`）
- **Link Hover** (`#999999`): リンクホバー（`--color-link-hover`）

### Brand / Accent

- **Primary** (`#333333`): ボタン枠・プライマリ文字（`--color-primary`）。Hover `#0e0c0c`（`--color-primary-hover`）
- **Secondary (Slate Blue)** (`#8191a4`): 唯一の有彩アクセント（`--color-secondary`）。Hover `#506a89`（`--color-secondary-hover`）。リンク・補助要素に控えめに使う
- **Announcement Gold** (`#ab8c52`): サイト上部お知らせ帯のテキスト（`--color-announcement-text`）。地は白、枠は `#e6ddcb`（`--color-announcement-border`）
- **Sale BG / Text** (`#212121` 地 / `#ffffff` 文字): セール・強調帯（`--color-sale-bg` / `--color-sale-text`）

### Alpha Scale（#212121 の透明度段階）

- `--color-a05`〜`--color-a95`: `rgba(33,33,33, 0.05〜0.95)`。罫線・オーバーレイ・ホバー地などの濃淡をすべて **ニアブラックの α 値**で表現する（独立したグレー色を増やさない設計）

### Semantic

- **Error** (`#333333`): エラーも独立した赤を持たず `--color-error` はニアグレー。地は `rgba(51,51,51,0.05)`（`--color-error-bg`）。無彩色基調を崩さない（赤を最小限あてる場合は本リポジトリ汎用の `#b23b32` 等を控えめに）

---

## 3. Typography Rules

> 実サイトは **Helvetica, Arial, sans-serif の一系統のみ**。和文専用 Web フォントは指定せず、システム和文に委ねる。意図的に**小さく**組むのが Graphpaper の作法。
> Helvetica は環境依存（ローカルにあれば表示）。preview.html では Helvetica Neue → Arial のシステムスタック＋和文 Noto Sans JP で近似する。

### 3.1 和文フォント

- **専用の和文 Web フォントは持たない**。`Helvetica, Arial, sans-serif` の後ろに OS の和文（ヒラギノ角ゴ／游ゴシック／Noto Sans JP 等）が自動で当たる
- 和文も欧文と同じく **小さく・詰めずに（letter-spacing normal）** 組む

### 3.2 欧文フォント

- **サンセリフ（唯一の書体）**: `Helvetica, Arial, sans-serif`。本文・見出し・ナビ・ラベルすべてこれ
- ナビ・カテゴリ・CTA は **大文字（uppercase、`.caps` クラス）** で組むことが多い

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: Helvetica, Arial, sans-serif;
```

- **フォールバックの考え方**: Helvetica → Arial → generic `sans-serif`。和文は明示せずシステムに委ねる（最小構成）

**preview.html での代替フォント**:
- Helvetica（実機にあればそのまま）→ **"Helvetica Neue", Arial, sans-serif** のシステムスタックで近似。Web フォントを足すなら **Inter**（ニュートラルなグロテスク）が近いが、Graphpaper の素の Helvetica 感を優先するなら system Helvetica/Arial が最も忠実
- 和文 → **Noto Sans JP**（preview 表示用。実サイトは未指定でシステム和文）

### 3.4 文字サイズ・ウェイト階層

> デスクトップ（1440px）実測 px。**意図的に小さい**のが特徴。本文・ラベルは 10〜11px 前後、セクション見出しでも 13px。価格・商品名も小さく抑える。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Heading | Helvetica | 13px | 700 | 1.5 (20px) | normal | 記事・セクション見出し（h2）。色 #212121 |
| Sub Heading | Helvetica | 11px | 400 | 1.4 (15.4px) | normal | サブ見出し（h3）。色 #646464 |
| Product Name | Helvetica | 11px | 400 | 1.4 (15.4px) | normal | 商品名。色 #000 |
| Body / Detail | Helvetica | 9.6–10px | 400 | 1.4 (13.4px) | normal | 商品詳細・本文。色 #212121 |
| Nav Item | Helvetica | 10px | 400/700 | 1.3 (13px) | normal | グローバルナビ（WEB STORE 等、大文字）。色 #212121 |
| CTA（ghost） | Helvetica | 9.6px | 400 | normal | normal | 「VIEW ALL」枠付きボタン |
| CTA（dark） | Helvetica | 10px | 700 | 1.5 (15px) | normal | 「Join」黒地ボタン（大文字） |
| Footer Label | Helvetica | 9.6px | 400 | 1.2 (11.5px) | normal | フッターのカテゴリ（INSTAGRAM / CONTACT、大文字） |

- **ウェイトは 400 と 700 の二択**。見出し・ナビの強調に 700、それ以外は 400
- 文字色は #212121 が基本。最強調（価格・見出し）に #000、補助に #646464
- **サイズで威圧しない**。小さく整然と並べることで端正さと余白を出す設計（必要に応じ各サイズ +1〜2px 程度に調整可だが、小ささそのものが Graphpaper の個性）

### 3.5 行間・字間

- **行間 (line-height)**: 見出し 1.5、本文・商品情報 1.4 前後。詰めすぎず、小さな文字でも読めるよう確保する
- **字間 (letter-spacing)**: **normal（ベタ組み）が基本**。Helvetica の素のメトリクスをそのまま使う
- 大文字ラベル（uppercase）はトラッキングを足さず、Helvetica の標準字送りのまま小さく置く

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
```

- 和文の標準的な行頭・行末禁則を守る
- 行頭禁止: `）」』】、。・：；？！` ／ 行末禁止: `（「『【`
- 商品名・英字ラベルは折り返しを避け、ひとまとまりで見せる

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測では `font-feature-settings: normal`。**palt は使わない**。Helvetica のラテンメトリクス、システム和文のベタ組みをそのまま活かす
- 詰めや約物処理に頼らず、小ささと余白で端正さを出す

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

> **角丸なし（radius 0）が絶対**。白地＋細枠のゴースト、または #212121 黒地の塗りつぶし。いずれも直角。

**Ghost（白地・枠付き）** — `VIEW ALL` 等
- Background: `#ffffff`
- Text: `#333333`（Helvetica / 9.6px）
- Border: 1px solid `#333333`（`--color-primary`）
- Border Radius: `0px`（`--radius`）
- Padding: `15px 25px`

**Dark（黒地・塗りつぶし）** — `Join` / 送信 等
- Background: `#212121`（`--color-sale-bg` / primary 系）
- Text: `#ffffff`（Helvetica / 10px / 700 / 大文字）
- Border: なし
- Border Radius: `0px`
- Padding: `0 18px`（高さは行ボックスで確保）
- Hover: 地 `#0e0c0c`（`--color-primary-hover`）

**Link（テキストリンク）**
- Text: `#212121`（`--color-link`）→ Hover `#999999`（`--color-link-hover`）
- 下線やスレートブルー #8191a4 で控えめに差をつける

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#bebebe`（`--color-border-dark`）、または下線のみ
- Border (focus): 1px solid `#212121` ＋ ごく薄い `rgba(33,33,33,0.1)` リング
- Border Radius: `0px`（角丸なし）
- Padding: 約 11px 13px
- Font: Helvetica / 11px
- Label: Helvetica / 9.6–10px（大文字ラベルが多い）

### Cards

- Background: `#ffffff`
- Border: なし、または `#f1f1f1` のヘアライン
- Border Radius: `0px`
- 商品ビジュアル（画像）を大きく直角の枠で置き、その下に Helvetica の商品名（11px / #000）＋価格（#212121）を小さく添える
- 影は持たず、白地とヘアライン・余白で面を分ける

---

## 5. Layout Principles

### Spacing

- 大きな商品ビジュアルと広い余白で構成。要素間は十分に空け、極小の文字が窮屈に見えないようにする
- 罫線はヘアライン #f1f1f1 / #f7f7f7。区切りで主張せず、余白で間を取る

### Container

- ワイドなエディトリアル・グリッド。左右に余白を取り、画像を主役にする
- セクション間は縦余白を十分に確保

### Grid

- 商品一覧はカードグリッド（2〜4 カラム、ビューポートで可変）
- Gutter: 中〜広め。画像の縦横比を揃え、Helvetica の小さなラベルを等間隔に並べる

---

## 6. Depth & Elevation

> Graphpaper は影をほぼ使わない。白地・ヘアライン・余白・直角で階層をつくる完全フラット設計。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 全コンポーネントの基本。ヘアライン #f1f1f1 で面を分ける |
| 1 | `0 1px 2px rgba(33,33,33,0.06)` | ドロップダウン・ドロワー等、必要箇所のみ最小限 |
| 2 | `0 8px 24px rgba(33,33,33,0.10)` | モーダル等（実サイトでは稀） |

- 濃淡が必要なときは影ではなく **#212121 の α 値（`--color-a05`〜`--color-a95`）** でオーバーレイする
- フラット・直角・ヘアラインが基本姿勢

---

## 7. Do's and Don'ts

### Do（推奨）

- 書体は Helvetica, Arial, sans-serif の一系統で通す（代替はシステム Helvetica Neue / Arial）
- 文字は小さく整然と組む（本文・ラベル 10〜11px、見出しでも 13px 程度）
- テキスト色は純黒 #000 ではなく #212121（ニアブラック）を基本に。最強調のみ #000
- 角は立てる（border-radius: 0）。ボタン・入力・画像枠すべて直角
- 罫線はヘアライン #f1f1f1 / #f7f7f7 の極細にする
- 濃淡は #212121 の α 値で段階表現する（独立したグレーを増やさない）
- 差し色はスレートブルー #8191a4 と、お知らせ帯の金 #ab8c52 のみに絞る
- ナビ・CTA・ラベルは小さな大文字英字（WEB STORE / VIEW ALL）で組む
- 商品ビジュアルを大きく置き、UI は引く

### Don't（禁止）

- 角丸（border-radius）を付けない（直角が個性。radius 0 を厳守）
- 装飾色・原色を足さない（無彩色＋スレートブルー＋金以外を持ち込まない）
- 明朝や複数書体を混ぜない（Helvetica 一系統）
- 文字を大きく主張させない（小ささと余白で端正さを出す）
- 太い枠や濃いボーダーで仕切らない（ヘアラインで十分）
- 本文に純黒 #000 を多用しない（#212121 を基本に）
- letter-spacing を広げない（Helvetica のベタ組みのまま）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1〜2 カラム、ナビはドロワー。画像を主役に縦積み |
| Tablet | 768–1023px | 2〜3 カラムの商品グリッド |
| Desktop | ≥ 1024px | 2〜4 カラムのワイドなエディトリアル・グリッド |

- 文字サイズはモバイルでも極小設計を保つが、最低 10px 前後は確保して可読性を守る
- 罫線・余白・直角の作りはブレークポイントを越えて一貫させる

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）。極小ラベルでもタップ領域（padding）は十分に確保する

### フォントサイズの調整

- 本文・ラベルは 10〜11px を基準に、モバイルでも極端に縮めない
- 大文字ラベルの字送りは normal を維持する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff / メディア面 #f2f2f2
Text: #212121（基本・ニアブラック）/ #000000（最強調）/ #646464（補助）
Border: #f1f1f1（標準ヘアライン）/ #f7f7f7（淡）/ #bebebe（濃・入力枠）
Accent: #8191a4（スレートブルー・secondary）/ #ab8c52（お知らせ帯の金、border #e6ddcb）
濃淡: #212121 の α 値（rgba(33,33,33, .05〜.95)）
Font（全要素）: Helvetica, Arial, sans-serif  /* 代替: "Helvetica Neue", Arial / 和文 Noto Sans JP */
Body/ラベル: 10〜11px / 見出し 13px / lh 1.4〜1.5 / letter-spacing normal
ウェイト: 400 / 700 の二択
OpenType: font-feature-settings: normal（palt は使わない）
Button: Ghost＝白地＋1px solid #333／Dark＝#212121 地＋白文字（大文字）。いずれも radius 0
Radius: 0px（全要素・直角厳守）
```

### プロンプト例

```
Graphpaper のデザインシステムに従って、ミニマルなファッション EC のトップ＋商品一覧を作成してください。
- 書体は Helvetica, Arial, sans-serif の一系統のみ（代替 "Helvetica Neue", Arial／和文 Noto Sans JP）。明朝や他書体は混ぜない
- テキストは #212121（ニアブラック）を基本、最強調のみ #000、補助 #646464。背景は純白 #ffffff
- 文字は意図的に小さく: ナビ・ラベル 10〜11px（大文字 WEB STORE / VIEW ALL）、見出しでも 13px、価格・商品名も小さく。letter-spacing は normal
- 角丸を一切使わない（border-radius: 0）。ボタン・入力・画像枠すべて直角
- 罫線はヘアライン #f1f1f1 / #f7f7f7 の極細。濃淡は #212121 の α 値で表現する
- 差し色はスレートブルー #8191a4 と、上部お知らせ帯の金 #ab8c52（border #e6ddcb）のみ
- CTA は Ghost（白地＋1px solid #333、radius 0）と Dark（#212121 地＋白文字・大文字）の二種
- 商品ビジュアルを大きく直角の枠で置き、その下に小さな商品名と価格を添える。UI は引いて画像で語る
```
