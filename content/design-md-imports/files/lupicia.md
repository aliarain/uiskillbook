# DESIGN.md — LUPICIA（ルピシア）

> LUPICIA（https://www.lupicia.com/）のデザイン仕様書。
> 世界のお茶を届けるプレミアムティーブランド。「お茶のある暮らし」を提案する。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのあるナチュラルトーンで統一した、茶道の静けさとモダンな洗練を共存させるデザイン。装飾を抑え、お茶の世界観をコンテンツの余白と素朴な色彩で伝える
- **密度**: 本文 16px / line-height 1.6〜1.8。ゆったりとしたメディア型レイアウト。情報を詰め込まず、読みものとしての快適さを重視
- **キーワード**: ウォームニュートラル、アースカラー、余白、プレミアム感、茶道的ミニマリズム
- **特徴**:
  - **CSS Custom Properties なし** — 従来型の CSS（クラシック CSS）で構築
  - **欧文優先のフォントスタック**: Open Sans を先頭に、ヒラギノ角ゴ Pro → メイリオと続く構成。欧文の洗練さと和文の可読性を両立
  - **明朝体を部分使用**: 「International Visitors」案内等で游明朝体 / ヒラギノ明朝 Pro を使用。プレミアム感・格式を演出
  - **ブランドアクセントカラーが存在しない**: 派手な差し色を持たず、`#0a0a0a`（ほぼ黒）のテキスト + `#f4f4f1`（ウォームグレー）の面 + `#1f1515`（ダークブラウン）のフッターで世界観を構成
  - **ボタンは角張ったアウトラインスタイル**: `border-radius: 0px` の直線的なボタンが基本。pill や丸角を使わない
  - **ラベルにウォームピンク `#f0ddd6`**: イベントラベルの背景色に暖色系ピンクを使用し、茶葉のアースカラーに呼応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値に基づく。すべて hex 表記。

### Neutral（ニュートラル — LUPICIA のパレットの核心）

LUPICIA はブランドアクセントカラーを持たない。温かみのある中間色のグラデーションでブランドを表現する。

| Name | Value | 役割 |
|------|-------|------|
| Text Primary | `#0a0a0a` | 本文テキスト（ほぼ黒） |
| Text Secondary | `#333333` | 補足テキスト |
| Text Tertiary | `#666666` | メタ情報・日付 |
| Text Meta | `#999999` | 日付・タグのキャプション |
| Background | `#fefefe` | ページ背景（純白ではなくわずかに暖色） |
| Surface Warm | `#f4f4f1` | ナビブロック・タグ背景（ウォームグレー） |
| Surface Card | `#fbfbfa` | カード背景 |
| Surface Message | `#f6f6f4` | メッセージボックス背景 |
| Label Default | `#eeeeee` | ニュースラベル |
| Label Event | `#f0ddd6` | イベントラベル（ウォームピンク） |
| Border | `#dbdbdb` | ボタン枠線・区切り線 |
| Card Border | `#f4f4f1` | カードの境界線（Surface Warm と同色） |
| Footer BG | `#1f1515` | フッター背景（ダークブラウン） |
| Footer Text | `#ffffff` | フッター上のテキスト |

### Semantic（推奨）

実サイトで明示的なセマンティックカラーは確認できなかったため、ブランドトーンに合わせた推奨値:

- **Danger** (`#c44d4d`): エラー・削除（ウォームレッド）
- **Warning** (`#b8860b`): 警告・注意（ダークゴールデンロッド）
- **Success** (`#5b8a5b`): 成功・完了（モスグリーン）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（主要）**: ヒラギノ角ゴ Pro（"Hiragino Kaku Gothic Pro"）— フォールバックチェーンの和文部分
- **明朝体（部分使用）**: 游明朝体 / ヒラギノ明朝 Pro — 「International Visitors」案内など格式ある箇所で使用
- メイリオ（Meiryo）は Windows 向けフォールバック

### 3.2 欧文フォント

- **サンセリフ（主要）**: **Open Sans** — フォントスタック先頭。Google Fonts で配信
- **フォールバック**: Helvetica Neue → Helvetica → Arial → Verdana → Roboto
- **セリフ（明朝体と組み合わせ）**: 和文明朝体のラテングリフに委ねる（独立した欧文セリフは指定なし）

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・見出し・ボタン共通 */
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, Verdana, Roboto,
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, sans-serif;

/* 明朝体（International Visitors 等） */
font-family: 游明朝体, "Yu Mincho", YuMincho,
             "ヒラギノ明朝 Pro", "Hiragino Mincho Pro",
             "MS P明朝", "MS PMincho", serif;
```

**フォールバックの考え方**:
- **欧文優先**: Open Sans を先頭に置き、欧文の表示品質を確保。和文はヒラギノ角ゴ Pro → メイリオの順
- Roboto は Android 向けフォールバック
- 明朝体スタックは macOS（游明朝 / ヒラギノ明朝）→ Windows（MS P明朝）の優先順

> **代替フォント注記**:
> - **Open Sans** はそのまま Google Fonts で使用可能
> - **游明朝体** はシステムフォント。プレビューでの再現には **Noto Serif JP**（Google Fonts で近い印象の和文明朝）を代替として使用

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (隠し) | Open Sans + ゴシック | 48px | 400 | 67.2px (1.4) | normal | — | サイトタイトル（非表示） |
| H2 (エリアタイトル) | Open Sans + ゴシック | 22px | 700 | 30.8px (1.4) | normal | `#0a0a0a` | セクション見出し |
| H3 (イベント見出し) | Open Sans + ゴシック | 24px | 400 | 33.6px (1.4) | normal | `#0a0a0a` | イベント・特集のヘッドライン |
| H4 (フッターガイド) | Open Sans + ゴシック | 16px | 700 | 22.4px (1.4) | normal | `#ffffff` | フッター内セクションタイトル |
| H5 (フッターサブ) | Open Sans + ゴシック | 15px | 700 | 21px (1.4) | normal | `#ffffff` | フッター内サブセクション |
| Body | Open Sans + ゴシック | 16px | 400 | 25.6px (1.6) | normal | `#0a0a0a` | 一般本文 |
| Body (記事) | Open Sans + ゴシック | 16px | 400 | 28.8px (1.8) | normal | `#0a0a0a` | 記事本文（行間広め） |
| Body Sub | Open Sans + ゴシック | 15px | 400 | 24px (1.6) | normal | `#333333` | 補足テキスト |
| Caption | Open Sans + ゴシック | 14px | 400 | 25.2px (1.8) | normal | `#666666` | キャプション・説明文 |
| Date | Open Sans + ゴシック | 18px | 400 | 28.8px (1.6) | normal | `#999999` | 日付表示 |
| Small | Open Sans + ゴシック | 13px | 400-700 | 19.5px (1.5) | normal | `#333333` | ラベル・タグ |
| Nav Link | Open Sans + ゴシック | 16px | 400-700 | varies | normal | `#0a0a0a` | ナビゲーションリンク |
| Footer Link | Open Sans + ゴシック | 11px | 400 | 13.75px (1.25) | normal | `#ffffff` | フッター内リンク |
| Mincho Accent | 游明朝 + 明朝 | — | 500 | — | normal | — | International Visitors 等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **見出し全般**: **`1.4`** — H1〜H5 まで統一
- **本文 (Body)**: **`1.6`** — 一般的なテキスト
- **記事本文 (Body Article)**: **`1.8`** — 読みもの用に広めの行間
- **キャプション (14px)**: **`1.8`** — 小サイズでも読みやすく
- **フッター (11px)**: **`1.25`** — コンパクトに収めるために詰める

**字間 (letter-spacing)** — 実測:
- **全要素**: **`normal`** — LUPICIA は letter-spacing を一切カスタマイズしない
- palt も kern も使用しない、素のメトリクスに任せるデザイン

**ガイドライン**:
- LUPICIA の行間設計は「見出し 1.4 / 本文 1.6 / 読みもの 1.8」の 3 段階
- letter-spacing を変更しないことで、Open Sans + ヒラギノのデフォルトメトリクスを活かす
- 明朝体使用箇所も letter-spacing: normal を維持

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- お茶の名前（「テ オ ショコラ マロンヴァリエ」など長い商品名）は折り返しを許容
- URL やメールアドレスのみ `overflow-wrap: break-word` で対応

### 3.7 OpenType 機能

```css
/* LUPICIA は OpenType 機能を明示的に使用しない */
font-feature-settings: normal;
```

- `palt` `kern` いずれも未使用。Open Sans のデフォルトカーニングに委ねる
- 和文のプロポーショナル字詰め（palt）は適用なし — ベタ組みで素朴さを保つ

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Outlined CTA（主要ボタン）** — "おたより掲載の商品一覧から購入" 等
- Background: `transparent`
- Text: `#0a0a0a`
- Border: `1px solid #dbdbdb`
- Padding: `32px 0px`（幅はコンテナに依存）
- Border Radius: `0px`（角丸なし）
- Font: Open Sans + ゴシック, 18px, weight 400
- Letter Spacing: normal

**Nav Block（ナビゲーションブロック）**
- Background: `#f4f4f1`（Surface Warm）
- Text: `#0a0a0a`
- Border: なし
- Padding: `16px`
- Border Radius: `0px`
- Font: Open Sans + ゴシック, 16px, weight 700

**Label（ニュース）**
- Background: `#eeeeee`
- Text: `#333333`
- Border: なし
- Padding: `10.4px 13px`
- Border Radius: `0px`
- Font: Open Sans + ゴシック, 13px, weight 400-700

**Label（イベント）**
- Background: `#f0ddd6`（ウォームピンク）
- Text: `#333333`
- Border: なし
- Padding: `10.4px 13px`
- Border Radius: `0px`
- Font: Open Sans + ゴシック, 13px, weight 400-700

### Inputs

**Standard Input（推奨）**
- Background: `#ffffff`
- Border: `1px solid #dbdbdb`
- Border (focus): `1px solid #0a0a0a`
- Border Radius: `0px`
- Padding: `12px 16px`
- Font: Open Sans + ゴシック, 16px

### Cards

**Product Card**
- Background: `#fbfbfa`（Surface Card）
- Border: `1px solid #f4f4f1`
- Border Radius: `5px`
- Padding: `8px`
- タイトル: 16px, weight 400, color `#0a0a0a`
- 価格・説明: 14px, color `#666666`

### Header / Nav

- Background: `#fefefe`
- Border Bottom: `1px solid #dbdbdb`（推奨）
- Padding: `0 32px`

### Footer

- Background: `#1f1515`（ダークブラウン）
- Text: `#ffffff`
- Padding: `48px 32px`
- セクション見出し: 16px weight 700 color `#ffffff`
- リンク: 11px weight 400 color `#ffffff`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | カード内パディング、ラベル内余白 |
| M | 16px | カード間・セクション内のブロック間 |
| L | 32px | セクション間の縦余白 |
| XL | 48px | メインセクション間 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度（推奨）
- Padding (horizontal): `32px`（PC）/ `16px`（mobile）

### Grid

- 商品グリッドは **3〜4 カラム**（PC）/ 2 カラム（tablet）/ 1 カラム（mobile）
- Gutter: `16〜24px`
- カード内は垂直レイアウト（画像 → タイトル → 価格）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | `0px` | CTA ボタン・ラベル・入力欄 |
| Small | `5px` | 商品カード |
| Medium（推奨） | `8px` | モーダル・ダイアログ |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。カード・ボタン・ヘッダー |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウンメニュー（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測では **ほぼ全要素 `box-shadow: none`**
- 立体感は **ボーダー** と **背景色の段差**（`#fefefe` → `#fbfbfa` → `#f4f4f1`）で表現
- フッターの `#1f1515` が最も濃い面で、ページ全体に「重み」を与える

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントスタックは **Open Sans を先頭**に、ヒラギノ角ゴ Pro → メイリオの順で指定する
- **見出しの line-height は 1.4**、本文は 1.6、記事本文は 1.8 の 3 段階を使う
- **letter-spacing は normal を維持** — カスタム値を追加しない
- 色は **ウォームニュートラル** の階調で統一する（`#fefefe` → `#fbfbfa` → `#f4f4f1` → `#eeeeee`）
- ボタンは **border-radius: 0px の直線的なアウトラインスタイル** を基本にする
- イベントラベルには **`#f0ddd6`（ウォームピンク）** を使用して温かみを出す
- フッターには **`#1f1515`（ダークブラウン）** を使い、お茶の深みを表現する
- 明朝体を使う場合は **格式のある箇所に限定** する（サイト全体には使わない）

### Don't（禁止）

- **ブランドアクセントカラー（鮮やかな青・赤・緑）を追加しない** — LUPICIA は派手な色を意図的に排除している
- ボタンに **pill（`border-radius: 9999px`）や大きな角丸を使わない** — 0px が基本
- **letter-spacing に 0.04em 以上の値を設定しない** — LUPICIA は normal（0）で統一
- 日本語本文に **line-height 1.4 以下を使わない** — 最低でも 1.6
- テキスト色に **純粋な `#000000` を使わない** — `#0a0a0a` のわずかに柔らかい黒を使う
- フォントスタック先頭に **Noto Sans JP やヒラギノを置かない** — Open Sans が先頭
- フッターの背景に **純黒 `#000000` を使わない** — `#1f1515` のブラウンがかった黒が LUPICIA の個性
- Surface 色に **寒色系のグレー（`#f5f8fa` 等）を使わない** — `#f4f4f1` のウォームトーンを維持

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |

### モバイル時の調整

- H2: 22px → 18px
- H3: 24px → 20px
- 本文サイズは 16px を維持
- Container padding を 32px → 16px に縮小
- 商品グリッドは 3-4 カラム → 2 カラム → 1 カラム

### タッチターゲット

- CTA ボタン: padding `32px 0px` で十分な高さを確保
- ラベル: padding `10.4px 13px` でタップ可能なサイズ
- フッターリンク: 11px で小さいが、行間 1.25 で密接 — タッチ時は余白を広げるのが望ましい

### ダークモード

- 未実装。フッター `#1f1515` が唯一のダーク面
- 実装する場合は `#fefefe` → `#1a1a1a`、`#0a0a0a` → `#f0f0ee` の反転を推奨

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #0a0a0a
Text Secondary: #333333
Text Tertiary: #666666
Text Meta: #999999
Background: #fefefe
Surface Warm: #f4f4f1
Surface Card: #fbfbfa
Label Event: #f0ddd6
Border: #dbdbdb
Footer BG: #1f1515

Font (Body): "Open Sans", "Helvetica Neue", Helvetica, Arial, Verdana, Roboto,
             "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif

Font (Mincho): 游明朝体, "Yu Mincho", YuMincho,
               "ヒラギノ明朝 Pro", "Hiragino Mincho Pro",
               "MS P明朝", "MS PMincho", serif

Sizes:
  H2: 22px / weight 700 / line-height 1.4
  H3: 24px / weight 400 / line-height 1.4
  Body: 16px / weight 400 / line-height 1.6
  Body (Article): 16px / weight 400 / line-height 1.8
  Caption: 14px / weight 400 / line-height 1.8
  Small: 13px / weight 400-700 / line-height 1.5

Letter Spacing: normal（全要素）
font-feature-settings: normal（palt/kern 未使用）
Border Radius: 0px（ボタン・ラベル）/ 5px（カード）
```

### プロンプト例

```
LUPICIA のデザインに従って、商品一覧ページを作成してください。
- フォント: "Open Sans", "Helvetica Neue", Helvetica, Arial, Verdana, Roboto,
            "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
- ページ背景: #fefefe
- 商品カード: 背景 #fbfbfa / border 1px solid #f4f4f1 / radius 5px / padding 8px
- セクション見出し: 22px / weight 700 / line-height 1.4 / color #0a0a0a
- 本文: 16px / weight 400 / line-height 1.6 / letter-spacing normal
- CTA ボタン: transparent 背景 / border 1px solid #dbdbdb / radius 0px / 18px / weight 400
- ラベル（ニュース）: 背景 #eeeeee / 13px
- ラベル（イベント）: 背景 #f0ddd6（ウォームピンク）/ 13px
- フッター: 背景 #1f1515（ダークブラウン）/ 白文字
- 色使いはウォームニュートラル（寒色を使わない）
- ボタンに角丸を付けない（radius 0px）
- letter-spacing を変更しない（normal を維持）
```
