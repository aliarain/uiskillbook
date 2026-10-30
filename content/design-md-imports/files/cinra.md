# DESIGN.md — CINRA (シンラ)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://www.cinra.net/
> CINRA（シンラ）は音楽・映画・アート・演劇などを扱うカルチャー／エディトリアルメディア。
> クールなライトグレー下地に、緑みを帯びた黒の見出しと DM Sans の欧文タイトルで組む端正な雑誌設計。
> 実測はトップ / article / about に基づき、CSS Custom Property（`--color_*` / `--font_*`）が明快に定義されている。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白の記事面をクールなライトグレー下地に浮かべる、端正なエディトリアルメディア。写真・見出し・日付・タグの情報階層を、色数を絞って整然と組む
- **密度**: 中密度。記事カードのグリッドとサイドバーで構成され、見出しは大きく、メタ情報（日付・著者）は小さくグレーで添える
- **キーワード**: エディトリアル / カルチャー / クリーン / 端正 / 情報設計
- **形状言語**: CTA は白地＋1px 罫の**アウトラインピル**（`border-radius: 24px`）。タグは角丸 5px の小チップ。カード・面は角丸控えめでフラット。装飾は罫と余白に留める
- **書体の性格**: 欧文タイトルは **DM Sans（700）** を大きく効かせ（Newsletter / Playlist / Sponsored 等）、和文は OS のシステムゴシック（ヒラギノ角ゴ ProN 系）。**letter-spacing は基本 normal**で、字間で飾らず素直に組む。連載・シリーズ名だけ鮮烈な赤橙 `#f12b00` で差す

---

## 2. Color Palette & Roles

<!-- 実サイトの CSS Custom Property（--color_*）実測に基づく。基調は「クールなライトグレー下地＋緑みの黒」 -->

### Base（下地・面）

- **Background** (`#f4f5f6`): ページ全体の下地。青みを含むクールなライトグレー（`--color_background`）
- **Surface** (`#ffffff`): 記事カード・ヘッダー・CTA の面。純白
- **Border** (`#e3e4e5`): カード枠・区切り線・アウトラインボタンの罫（`--color_border`）
- **Icon** (`#c6c7c8`): アイコン・ごく淡い装飾のグレー（`--color_icon`）

### Text（文字色）

- **Text Base** (`#000a02`): 見出し・本文の基調。わずかに緑みを帯びた黒（`--color_base`）。純黒 `#000000` は使わない
- **Text Sub** (`#868788`): 日付・著者・補足のミドルグレー（`--color_sub`）

### Accent（差し色）

- **Series Red** (`#f12b00`): 連載・シリーズ名に使う鮮烈な赤橙（`--color_series`）。CINRA のアイデンティティカラー
- **Link Navy** (`#224b8f`): テキストリンクの落ち着いた紺（`--color_link`）
- **Underline Yellow** (`#f5ea68`): 見出し等の下線マーカーに使う淡い黄（`--color_underline`）
- **Job Green** (`#50b478`): 求人（CINRA JOB）セクションのグリーン（`--color_job`）

### 色に関する設計思想

- 下地はクールなライトグレー `#f4f5f6`、面は白、文字は緑みの黒 `#000a02`。この3〜4色で大半を組む
- 純黒 `#000000` を避け、`#000a02` を使うことで冷たくなりすぎない黒を作る
- 差し色は役割別に固定：連載＝赤橙 `#f12b00`、リンク＝紺 `#224b8f`、求人＝緑 `#50b478`、マーカー＝黄 `#f5ea68`。多色を面で混ぜない

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: OS のシステムゴシック。ヒラギノ角ゴ ProN → ヒラギノ Sans → 游ゴシック → メイリオ の順（`--font_base`）
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ（見出し・数値・英字タイトル）**: **DM Sans**（Google Fonts。`--font_en`）。ジオメトリックで見出し・英字ラベルに効かせる
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: DM Sans は Google Fonts で直接読み込めるため、preview.html でもそのまま使用できる。
> - 和文のシステムゴシック（ヒラギノ角ゴ ProN 等）→ preview では **Noto Sans JP** で代替（環境非依存）

### 3.3 font-family 指定

```css
/* 本文・UI（和文, --font_base） */
font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
  "Hiragino Sans", YuGothic, "Yu Gothic Medium", "Yu Gothic", Meiryo, sans-serif;

/* 英字タイトル・見出し・数値（--font_en） */
font-family: "DM Sans", sans-serif;
```

**フォールバックの考え方**:
- 和文はシステムフォント優先（`-apple-system` → ヒラギノ → 游ゴシック → メイリオ）で、環境ネイティブの表示品質を活かす
- 英字タイトル・セクション見出し・日付の数字は DM Sans を独立指定して、雑誌的なリズムを作る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | DM Sans | 48px | 700 | 1.15 | normal | 大セクション（Newsletter 等） |
| Section (EN) | DM Sans | 28–32px | 700 | 1.0 | normal | セクション見出し（Playlist / Sponsored） |
| Feature Title | システムゴシック | 36px | 700 | 1.39 | normal | 特集・記事の大見出し |
| Article Title | システムゴシック | 20–23px | 700 | 1.39 | normal | 記事カードのタイトル |
| Series Label | システムゴシック | 18px | 700 | 1.0 | normal | 連載名（赤橙 `#f12b00`） |
| Body | システムゴシック | 16–18px | 400 | 1.78 | normal | 本文 |
| Sub / Meta | システムゴシック | 12px | 400 | 1.15 | normal | 日付・著者（グレー `#868788`） |
| Tag | システムゴシック | 12px | 400 | 1.15 | normal | ハッシュタグチップ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.78`（18px 本文で 32px）。読み物メディアとして広めに取る
- **見出しの行間**: `1.39`（36px 見出しで 50px、23px で 32px）
- **英字見出しの行間**: `1.0〜1.15`（サイズ＝行高に近く詰める）
- **字間 (letter-spacing)**: **基本 `normal`（0）**。和文・欧文とも字間で飾らない。例外はニュースレターの一部ラベルでごく僅か（0.35px）

**ガイドライン**:
- CINRA は letter-spacing を積極的に使わない。字間を開けず、素直に組むのが基本
- 本文の line-height は 1.78 前後を確保し、長文記事の可読性を優先する
- 見出しと本文の差はサイズとウェイト（700 / 400）で作る

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
font-feature-settings: normal;  /* palt は使わない */
```

- 字間を `normal` で組む設計のため、palt による詰めは行わない
- システムフォント優先のため、OS ネイティブのカーニングに委ねる

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

一覧誘導の CTA は白地＋1px 罫のアウトラインピル。

**Outline Pill（一覧・もっとみる）**
- Background: `#ffffff`
- Text: `#000a02`
- Border: `1px solid #e3e4e5`
- Border Radius: `24px`（ほぼ完全ピル）
- Font: 14px / weight 400 / letter-spacing normal
- 例: 「記事一覧をみる」「もっとみる」「すべての連載をみる」

**Tag Chip（ハッシュタグ）**
- Background: `#f4f5f6`
- Text: `#000a02`
- Border: なし
- Border Radius: `5px`
- Padding: `0 10px`
- Font: 12px / weight 400
- 例: 「#Music」「#interview」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e3e4e5`
- Border (focus): `1px solid #224b8f`（リンク紺でフォーカスを示す）
- Border Radius: `8px`
- Padding: `12px 14px`
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border: `1px solid #e3e4e5`（または枠なしで下地との差で見せる）
- Border Radius: `8px`
- Shadow: なし〜ごく浅い（Depth セクション参照）
- 記事カードは写真＋タイトル（700）＋日付・著者（12px グレー）の構成

---

## 5. Layout Principles

### Spacing Philosophy

白い記事カードをライトグレー下地の上にグリッドで並べ、メインとサイドバー（新着・話題・ニュースレター）で構成する。コンテナ左右パディングは広め（`--global-container-padding-inline: 6rem`）。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 64px |
| XXL | 96px |

### Container

- Max Width: 1200px 前後
- Padding (horizontal): 6rem（デスクトップ）／モバイルは 16–24px
- Sticky Top（サイドバー等）: 14.8rem（`--position_sticky_top`）

### Grid

- Columns: メイン＋サイドの2カラム。記事一覧は 2〜3 カラムのカードグリッド
- Gutter: 24–32px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。カードは罫で表現しフラット |
| 1 | `0 1px 3px rgba(0,10,2,0.06)` | ホバー時のカードの浮き |
| 2 | `0 8px 24px rgba(0,10,2,0.10)` | モーダル・オーバーレイ（`--zindex_overlay: 105` / `--zindex_modal: 110`） |

- 影は控えめ。奥行きは「1px 罫」「下地とのコントラスト」で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 下地はクールなライトグレー `#f4f5f6`、面は白 `#ffffff`、文字は緑みの黒 `#000a02` を基本にする
- 差し色は役割で固定：連載＝赤橙 `#f12b00`、リンク＝紺 `#224b8f`、求人＝緑 `#50b478`、マーカー＝黄 `#f5ea68`
- 英字タイトル・数値は DM Sans（700）で効かせ、和文はシステムゴシックで組む
- letter-spacing は基本 normal。本文は line-height 1.78 前後で広く取る
- CTA は白地＋1px 罫のアウトラインピル（radius 24px）、タグは角丸 5px の小チップ
- メタ情報（日付・著者）は 12px・グレー `#868788` で小さく添える

### Don't（禁止）

- 純黒 `#000000` を本文に使わない（緑みの `#000a02` を使う）
- 字間を無理に開けない（CINRA は字間で飾らない）
- 差し色を面で多用しない（赤橙・緑・紺・黄は役割ごとにポイント使い）
- 和文本文の line-height を 1.5 未満に詰めない
- カードに強い影・大きな角丸を付けない（罫とフラットで端正に）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。サイドバーは下部へ回り込み |
| Tablet | ≤ 1024px | メイン＋細いサイド、または2カラム |
| Desktop | > 1024px | メイン＋サイドバー、記事は 2〜3 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- 本文はモバイルでも 16px を確保し、line-height 1.78 を保つ
- 英字大見出し（48px）はモバイルで 28〜32px に縮小。コンテナ左右パディングは 6rem→16–24px に

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:  #f4f5f6（クールなライトグレー）
Surface:     #ffffff
Border:      #e3e4e5
Text Base:   #000a02（緑みの黒）
Text Sub:    #868788
Series:      #f12b00（連載・赤橙）
Link:        #224b8f（紺）
Marker:      #f5ea68（黄下線）
Job:         #50b478（求人・緑）
Font(JP):    -apple-system, "Hiragino Kaku Gothic ProN", YuGothic, Meiryo, sans-serif
Font(EN):    "DM Sans", sans-serif
Body Size:   16–18px
Line Height: 1.78（本文）/ 1.39（見出し）
letter-spacing: normal（字間で飾らない）
palt:        off
Button:      #fff bg / #000a02 / 1px solid #e3e4e5 / radius 24px（アウトラインピル）
Tag:         #f4f5f6 bg / radius 5px
Card:        #fff / 1px solid #e3e4e5 / radius 8px / shadow なし
```

### プロンプト例

```
CINRA のデザインシステムに従って、カルチャー記事の一覧セクションを作成してください。
- 下地: #f4f5f6、面: #ffffff、罫: #e3e4e5、文字: #000a02（緑みの黒。純黒は使わない）
- 英字タイトル・日付の数値は "DM Sans"（700）、和文はシステムゴシック（ヒラギノ角ゴ ProN → 游ゴシック → メイリオ）
- 本文 16〜18px / line-height 1.78、見出しは weight 700 / line-height 1.39、letter-spacing は normal
- 連載名は赤橙 #f12b00、テキストリンクは紺 #224b8f
- CTA は白地＋1px 罫のアウトラインピル（radius 24px、「もっとみる」）、ハッシュタグは #f4f5f6 の角丸 5px チップ
- 記事カードは写真＋タイトル（700）＋日付・著者（12px / #868788）、影なし・角丸 8px の罫囲み
```

### 代替フォントの指針

- 英字 DM Sans は Google Fonts で直接利用可
- 和文システムゴシック → 環境非依存にするなら **Noto Sans JP**
- 代替でも「クールなライトグレー下地・緑みの黒・DM Sans の英字見出し・字間 normal・広い本文行間・アウトラインピル CTA・役割固定の差し色」を守れば世界観は再現できる
