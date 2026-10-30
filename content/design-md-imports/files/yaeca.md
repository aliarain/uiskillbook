# DESIGN.md — YAECA

> YAECA 公式サイト（https://yaeca.com/）のデザイン仕様書。
> シンプルで時代に左右されない服づくりを掲げるミニマリストファッションブランド。ギャラリーとインテリアショップも併設。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景に純黒テキストのみの**絶対モノクロ**。装飾を一切排し、ギャラリーの案内板のような静謐さを持つ情報設計
- **密度**: 極端に低い。中央揃えの余白主導レイアウトで、画面の大半が白い空間。営業時間のグリッドと最小限のナビゲーションのみ
- **キーワード**: 絶対モノクロ、ゼロ装飾、ギャラリー的静謐、ヘルベチカ + 游ゴシック、ヘアライン罫線、palt グローバル適用
- **特徴**:
  - **二書体システム**: 欧文（ナビ・ロゴ・営業情報）は **Helvetica Neue**、和文は**游ゴシック** -- 用途で厳密に使い分け
  - **色は黒と白のみ**: `#000000` と `#ffffff` 以外の色が存在しない。グレーすら使わない純粋な二値デザイン
  - **font-feature-settings: "palt"** をグローバルに適用 -- 約物のプロポーショナル字詰めが全体に効く
  - **letter-spacing 0.07em** を欧文ナビに適用し、広いトラッキングでモダンな緊張感を演出
  - **ボタン・CTA が存在しない**: テキストリンクのみ。背景色付きの要素、角丸、影は一切なし
  - **罫線は 1px solid black のヘアライン**のみ。営業時間グリッドの区切りに使用
  - **角丸ゼロ（border-radius: 0px）** が全要素に徹底
  - **影ゼロ（box-shadow: none）** が全要素に徹底
  - ライトモード固定（ダーク切替なし）
  - サイト全体がギャラリーの壁面インフォメーションのような佇まい

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> YAECA は**色を持たない**。純白と純黒の二値のみで構成される極限のモノクロデザイン。

### Brand

- **Black** (`#000000`): ロゴ・ナビ・本文・罫線 -- サイト上のすべてのフォアグラウンド要素に使用される唯一の色

### Surface

- **Page Background** (`#ffffff`): ページ全体の純白。他の背景色は存在しない

### Text / Foreground

- **Text Primary** (`#000000`): 見出し・ナビ・本文・フッタ -- すべて純黒で統一
- **Text Inverse**: 該当なし（黒背景の面が存在しないため）

### Border / Divider

- **Hairline** (`#000000`): 営業時間グリッドの区切り線。1px solid black

### Semantic（補完）

- 実 UI にエラー・成功・警告色は存在しない（インタラクティブ要素がほぼないため）
- アラートを追加する場合は彩度を極力抑え、モノクロの世界観を壊さないこと:
  - Danger: `#333333`（ダークグレー）+ 下線で代替
  - Success / Warning: テキストのみで状態を伝える（色に頼らない）

### カラー設計の意図

YAECA のモノクロは「色を選ばなかった」のではなく「色を排除した」積極的な設計判断。ブランドの服づくり -- 素材と形だけで勝負する姿勢 -- がそのままウェブに反映されている。AI エージェントが UI を生成する際、**アクセント色を追加したい衝動を抑えること**が最も重要。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体, YuGothic, "Yu Gothic"
- **フォールバック**: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "MS PGothic", sans-serif
- **明朝体**: 該当なし（使用していない）

### 3.2 欧文フォント

- **サンセリフ**: "Helvetica Neue", Helvetica, Arial, sans-serif
- **セリフ**: 該当なし
- **等幅**: 該当なし

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 和文（body / 見出し） */
font-family: 游ゴシック体, YuGothic, "Yu Gothic",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 欧文（ナビ / ロゴ / フッタ / 営業情報） */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- 和文と欧文で font-family を完全に分離する二書体システム
- 和文チェーンは游ゴシック → ヒラギノ → メイリオ → MS PGothic の標準構成
- 欧文チェーンは Helvetica Neue を最優先 -- スイスタイポグラフィの伝統を踏襲
- ナビ項目 "NEWS" "SHOP" "GALLERY" 等の欧文テキストは Helvetica Neue で組む
- 和文テキスト（店舗情報等）は游ゴシックで組む
- AI で再現する場合:
  - 和文: `"Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif` に簡略化可
  - 欧文: `"Helvetica Neue", Helvetica, Arial, sans-serif` をそのまま使用

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-08 取得）

| Role | Family | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|--------|------|--------|-------------|----------------|-------|------|
| Logo (h1) | 游ゴシック | 14px | 400 | 14px (x1.0) | 0.1px | `#000000` | "YAECA" ワードマーク |
| Brand Name (h2) | Helvetica Neue | 16px | 600 | 30.4px (x1.9) | 1.12px (0.07em) | `#000000` | 欧文ブランド名 |
| Section Title (h2) | 游ゴシック | 18px | 600 | 28.8px (x1.6) | 0.1px | `#000000` | "NEWS" 等の和文セクション見出し |
| Nav Item | Helvetica Neue | 16px | **700** | 16px (x1.0) | 1.12px (0.07em) | `#000000` | NEWS / SHOP / GALLERY 等 |
| Body (EN) | Helvetica Neue | 16px | **700** | 30.4px (x1.9) | 1.12px (0.07em) | `#000000` | "open today" 等の欧文本文 |
| Footer / Copyright | Helvetica Neue | 12px | 400 | 12px (x1.0) | 0.1px | `#000000` | コピーライト表記 |

### 3.5 行間・字間

- **欧文ナビの行間**: **1.0**（16 / 16）-- タイトな single-line
- **欧文本文の行間**: **1.9**（30.4 / 16）-- ゆったりとした呼吸
- **和文セクション見出しの行間**: **1.6**（28.8 / 18）
- **欧文ナビの字間 (letter-spacing)**: **1.12px（0.07em）** -- 広いトラッキングでモダンな緊張感
- **和文の字間**: **0.1px（ほぼゼロ）** -- 游ゴシックのメトリクスをそのまま信頼

**ガイドライン**:
- 欧文テキストは letter-spacing 0.07em の広いトラッキングが YAECA のトーンを決定する
- 和文テキストは字間をほぼゼロに保ち、palt によるプロポーショナル字詰めのみ適用
- ナビの line-height 1.0 は意図的 -- 文字が罫線に対して精密に配置される

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- テキスト量が極めて少ないため、改行が問題になる場面はほぼない
- 店舗名・住所等の固有名詞は途中で折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: "palt" 1;
```

- **palt をグローバルに適用** -- body レベルで有効化
- 約物（「」、。等）がプロポーショナルに詰まり、ギャラリー的な精密感を生む
- 欧文テキストには Helvetica Neue の kern が別途作用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**YAECA にはボタンが存在しない。**

サイト全体を通じて、背景色・枠線・角丸を持つインタラクティブ要素は一切ない。すべてのインタラクションはテキストリンクで完結する。

### Text Links（ボタンの代替）

- Color: `#000000`
- Text Decoration: none（下線なし）
- Font: Helvetica Neue / 16px / weight 700 / letter-spacing 0.07em
- Hover: 下線表示（推奨）または opacity 変化
- **形式**: 大文字英字のみ（"SHOP", "GALLERY", "ONLINE STORE"）

### Inputs

実 UI にフォーム要素は表面化していないが、YAECA トーンに合わせる場合:

- Background: `#ffffff`
- Border: `1px solid #000000`
- Border (focus): `2px solid #000000`
- Border Radius: `0px`
- Padding: `12px 16px`
- Font: 16px / 游ゴシック / weight 400
- Color: `#000000`
- Placeholder: `#999999`（推奨 -- サイト内にグレーは存在しないが、placeholder のみ例外的に許容）

### Cards

**YAECA にはカードコンポーネントが存在しない。**

情報はすべてフラットなテキストと罫線のグリッドで構成される。背景色による面の区切りもない。

### Header / Nav

- Background: `#ffffff`（透明）
- Color: `#000000`
- ナビ項目: Helvetica Neue / 16px / weight 700 / letter-spacing 0.07em / 大文字英字
- 配列: `NEWS / SHOP / GALLERY / 一画 / INTERIOR / ONLINE STORE`
- スラッシュ区切り、中央揃え

### Store Hours Grid

- Border: `1px solid #000000`（ヘアライン）
- Background: `#ffffff`
- Font: Helvetica Neue / 16px / weight 700
- 構造: 曜日と営業時間の罫線区切りグリッド

### Footer

- Background: `#ffffff`（ヘッダーと同一 -- フッタも白）
- Color: `#000000`
- Font: Helvetica Neue / 12px / weight 400
- Copyright のみの極小フッタ

### Chevron / Arrow

- 下向きシェブロン矢印（`V`）がページ下部に配置
- Color: `#000000`
- サイズ: 小（装飾ではなくスクロール誘導の最小限のアフォーダンス）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 罫線間のミニマル余白 |
| S | 8px | グリッドセル内余白 |
| M | 16px | ナビ項目間 |
| L | 32px | セクション内余白 |
| XL | 64px | セクション間 |
| XXL | 120px | ページ上下のマージン |

### Container

- Max Width: 800px（推奨。実サイトは狭い中央配置）
- Padding (horizontal): mobile 16px / desktop 32px
- **中央揃え**: すべてのコンテンツが画面中央に集約

### Grid

- 基本は**シングルカラム**中央揃え
- 営業時間のみ罫線による 2 カラムグリッド（曜日 | 時間）
- Gutter: 概念的に不要（シングルカラムのため）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| All | **0px** | 全要素 |

- 角丸は一切使わない。ゼロ例外

### Alignment

- **テキスト**: 中央揃え（center）がデフォルト
- **レイアウト**: 中央揃え（margin: 0 auto）
- **ナビ**: 中央揃え、スラッシュ区切り

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **全要素** |

- YAECA は**影を一切使わない**。Elevation の概念が存在しない
- 視覚階層は**フォントウェイト**（400 vs 600 vs 700）と**フォントサイズ**のみで構成
- ホバー演出は opacity またはテキスト下線の変化のみ
- モーダル・ドロップダウン・ポップオーバーもサイト上に存在しない
- 奥行きのない平面的なデザインが、ギャラリーの壁面のような佇まいを作る

---

## 7. Do's and Don'ts

### Do（推奨）

- **背景は純白 `#ffffff`**、テキストは純黒 `#000000` -- この二色のみで構成する
- **欧文は Helvetica Neue** / weight 700 / letter-spacing 0.07em で組む
- **和文は游ゴシック** / weight 400-600 / letter-spacing ほぼゼロで組む
- **font-feature-settings: "palt" 1** をグローバルに適用する
- **ナビは大文字英字**、スラッシュ区切り、中央揃え
- **罫線は 1px solid #000000 のヘアライン**のみ使う
- **インタラクションはテキストリンクのみ**で表現する
- **余白を贅沢に取る** -- コンテンツよりも余白のほうが多いくらいが正しい
- **要素数を極限まで減らす** -- 「これは本当に必要か？」を常に問う
- **角丸ゼロ・影ゼロ・装飾ゼロ**を徹底する
- ロゴ・ブランド名は小さく控えめに配置する（14-16px）

### Don't（禁止）

- `#000000` と `#ffffff` 以外の色を使わない（グレーも含めて禁止。唯一の例外は input placeholder）
- ボタンコンポーネントを作らない（背景色・枠線・角丸を持つ要素は YAECA の語彙にない）
- border-radius を 1px でも付けない（すべて 0px）
- box-shadow を使わない（elevation の概念がない）
- グラデーションを使わない
- アイコンを多用しない（シェブロン矢印のみ許容）
- font-weight 800/900 を使わない（最大でも 700）
- letter-spacing を欧文で 0.07em 以上に広げすぎない
- font-feature-settings: "palt" を外さない（グローバル適用が YAECA の組）
- 装飾的な区切り線（破線・ドット・太線）を使わない（1px solid のみ）
- 情報を詰め込まない -- YAECA のサイトはほぼ空白で成立している
- 「寂しいから色を足そう」という判断をしない -- 余白と黒文字だけで十分

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769-1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- ナビ: スラッシュ区切りの一行表示 → 縦積みまたはハンバーガーメニュー
- Container 幅: 狭まるが中央揃えは維持
- フォントサイズ: ほぼ変更なし（元が小さいため縮小の余地が少ない）
- 営業時間グリッド: 2 カラム維持（セル幅が縮むのみ）
- 余白: デスクトップの 60-70% に圧縮するが、余白主導のレイアウトは維持

### タッチターゲット

- 最小 44x44px。テキストリンクは上下パディングを追加してタップ領域を確保
- ナビ項目の間隔を十分に取る

### ダークモード

- **対応なし**。ライトモード固定
- 黒背景 + 白文字への反転は YAECA の美学と矛盾するため非推奨

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白）
Text: #000000（純黒）
Border: #000000（1px solid ヘアライン）
-- 上記3値以外の色は使わない --

EN Font: "Helvetica Neue", Helvetica, Arial, sans-serif
JP Font: 游ゴシック体, YuGothic, "Yu Gothic",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

Logo (h1): 14px / 游ゴシック / weight 400 / line-height 1.0 / letter-spacing 0.1px
Brand Name (h2): 16px / Helvetica Neue / weight 600 / line-height 1.9 / letter-spacing 0.07em
Section Title (h2): 18px / 游ゴシック / weight 600 / line-height 1.6 / letter-spacing 0.1px
Nav Item: 16px / Helvetica Neue / weight 700 / line-height 1.0 / letter-spacing 0.07em
Body (EN): 16px / Helvetica Neue / weight 700 / line-height 1.9 / letter-spacing 0.07em
Footer: 12px / Helvetica Neue / weight 400 / line-height 1.0

font-feature-settings: "palt" 1（グローバル適用）
Border Radius: 0px（全要素、例外なし）
Shadow: none（全要素、例外なし）
Buttons: 存在しない（テキストリンクのみ）
```

### プロンプト例

```
YAECA のデザインに従って、店舗情報ページを作成してください。
- 背景: #ffffff（純白）、テキスト: #000000（純黒）。この2色以外は使わない
- 欧文フォント: "Helvetica Neue", Helvetica, Arial, sans-serif
- 和文フォント: 游ゴシック体, YuGothic, "Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif
- font-feature-settings: "palt" 1（グローバル適用）
- ページタイトル "YAECA": Helvetica Neue / 14px / weight 400 / letter-spacing 0.07em / 大文字
- ナビゲーション: "NEWS / SHOP / GALLERY / INTERIOR / ONLINE STORE"
  Helvetica Neue / 16px / weight 700 / letter-spacing 0.07em / 大文字 / 中央揃え / スラッシュ区切り
- 営業時間グリッド: 1px solid #000000 のヘアライン罫線で区切り
  曜日と時間を 2 カラム / Helvetica Neue / 16px / weight 700
- フッタ: Helvetica Neue / 12px / weight 400 / copyright のみ
- ボタンは作らない。リンクはテキストのみ（下線なし、hover で下線表示）
- border-radius は全要素 0px
- box-shadow は全要素 none
- グラデーション・アイコン・装飾は一切使わない
- 余白を贅沢に取り、コンテンツ量よりも空白の面積が多い状態を維持する
- レイアウトは中央揃え / シングルカラム / max-width 800px
```
