# DESIGN.md — BANDAI NAMCO Entertainment（バンダイナムコエンターテインメント）

> BANDAI NAMCO Entertainment（https://www.bandainamcoent.co.jp/）のデザイン仕様書。
> 日本を代表するゲーム・エンターテインメント企業。ドラゴンボール、ワンピース、ガンダム、パックマン等の IP を展開。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ゲームコンテンツを主役にする**ダーク＋ライトのデュアルモード構成**。トップページのヒーロー領域は黒背景 `#000000` でゲームビジュアルをフルブリードに展開し、企業情報・ニュースセクションはライトグレー `#f2f2f2` に切り替わる。ブランドカラー **BANDAI NAMCO Red `#d60000`** はセクション見出し・タブのアクティブ状態・バッジに使い、ゲームタイトルのビジュアルと干渉しない抑制的な差し色として機能する
- **密度**: 情報密度が高い。ゲームタイトル一覧、ニュース、イベント、プラットフォーム別バッジが密集するポータル型レイアウト。body の基本フォントサイズが 10px と小さく、rem ベースのスケーリングで各要素のサイズを制御する
- **キーワード**: ダークキャンバス、コンテンツファースト、ポータル型高密度、プラットフォームバッジ、シャープエッジ
- **特徴**:
  - **ゲームビジュアルが主役**。ヒーローは黒背景に対してゲームの Key Visual を大きく表示し、UI 装飾を最小限に抑える
  - フォントは **`-apple-system` 先頭のシステムフォントスタック**。ブランド専用書体を持たず、OS ネイティブの表示品質を優先するモダンなアプローチ
  - ボタンは **角丸 2px の矩形**。ピル型は使わず、シャープで機能的な印象
  - **プラットフォームバッジシステム**: PlayStation / Nintendo Switch / Steam / iOS 等のゲーム対応プラットフォームを色分けされたバッジで表示する独自の UI パターン
  - **タブナビゲーション**がゲームカテゴリの切り替えに多用される。アクティブタブは文字色 `#d60000` で示す
  - CSS Custom Properties はほぼ使用しない（Swiper の `--swiper-theme-color` のみ）
  - `font-feature-settings: normal`（palt 不使用）、`letter-spacing: normal` でタイポグラフィの加工を行わない素朴な設計
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **BANDAI NAMCO Red** (`#d60000`): ブランドの基幹色。セクション見出し（H2）の文字色、タブのアクティブ状態、ニュースバッジ、ボーダーに使用。CTA ボタンの背景ではなく、テキスト・ライン・バッジのアクセントとして機能する
- **Highlight Yellow** (`#ffbf00`): "モットみる" ボタンの背景。金色寄りのイエローで、暗い背景上で視線を集める限定的なアクセント

### CTA / Buttons

- **Arrow Button**: 背景 `#ffffff` / 文字 `#333333` / border `1px solid #6e6e6e` / radius `2px` / padding `7px 21px 7px 14px` / 14px / weight 700
- **Tab Button (Inactive)**: 背景 `#ffffff` / 文字 `#333333` / radius `0px` / padding `12px` / 16px / weight 700 / Arial
- **Tab Button (Active)**: 背景 `#ffffff` / 文字 `#d60000` / radius `0px` / padding `12px` / 16px / weight 700 / Arial
- **Cookie Banner CTA**: 背景 `#ff0000` / 文字 `#ffffff`
- **Highlight CTA**: 背景 `#ffbf00` / 文字 `#333333`（"モットみる"）

### Platform Badge System

ゲーム対応プラットフォームを色で区別するバッジ群。BANDAI NAMCO 特有の UI パターン:

| Platform | hex | 備考 |
|----------|-----|------|
| PlayStation | `#2a008d` | パープル |
| PlayStation Blue | `#0070d1` | ブルー |
| PS VR2 | `#003de5` | ディープブルー |
| Nintendo Switch | `#d62a1b` | レッド |
| NSW2 | `#e70073` | ピンク |
| iOS | `#9b619d` | パープル |
| Steam | `#2e6f90` | ティール |
| Console Game | `#e02c3f` | レッド |

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | ヒーロー背景・ゲームビジュアルのキャンバス |
| Primary Text | `#333333` | (51, 51, 51) | 見出し・本文テキスト |
| Secondary Text | `#555555` | (85, 85, 85) | H3・補助テキスト |
| Border Gray | `#6e6e6e` | (110, 110, 110) | ボタンボーダー |
| Dark Section | `#444444` | (68, 68, 68) | RELEASE セクション背景（コーポレートページ） |
| Light Gray BG | `#f2f2f2` | (242, 242, 242) | ページ背景（コーポレート・ニュース領域） |
| Light Gray Alt | `#f4f4f4` | (244, 244, 244) | セクション背景のバリエーション |
| News Accent | `#ffeeee` | (255, 238, 238) | ニュースリリース面の薄いピンク |
| White | `#ffffff` | (255, 255, 255) | ヘッダー背景・カード背景 |

### Link

- **Link Blue** (`#024baf`): テキストリンクの色。ブランドレッドとは別系統のブルー

### Dark Overlay

- **Game Image Overlay**: `rgba(0, 0, 0, 0.7)` — ゲームビジュアル上のテキスト可読性確保用

### Semantic（実測未確認・推奨値）

コーポレート＋ゲームポータルサイトのため、明確なエラー／成功色は表面化していない。推奨補完値:

- **Danger**: `#dc2626` 程度のレッド（ブランドレッド `#d60000` との混同を避ける）
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: システムフォントに依存。`-apple-system` → `Noto Sans JP`（Android / Linux）→ `ヒラギノ角ゴ ProN W3`（macOS / iOS）→ `メイリオ` / `Meiryo`（Windows）
- **明朝体**: 使用しない（全体ゴシック統一）

### 3.2 欧文フォント

- **システムフォント**: `-apple-system`（Apple）→ `system-ui` → `Helvetica Neue` → `Segoe UI`（Windows）
- **タブ・ボタン用**: `Arial` を単独指定する要素がある（タブボタン、一部のボタン）
- **セリフ / 等幅**: 使用しない

### 3.3 font-family 指定

```css
/* メインスタック（body, h2, h3, p, a 等） */
font-family: -apple-system, "system-ui", "Helvetica Neue", "Segoe UI",
  "Noto Sans JP", "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, sans-serif;

/* タブ・一部ボタン */
font-family: Arial;
```

**フォールバックの考え方**:
- **欧文優先型**: `-apple-system` / `system-ui` / `Helvetica Neue` / `Segoe UI` が先頭。欧文はシステムフォントの高品質なグリフを使い、和文は後段の `Noto Sans JP` / ヒラギノ / メイリオに委ねる
- `ヒラギノ角ゴ ProN W3` は **ProN**（JIS2004 字形）を使用
- タブ要素で `Arial` が単独指定されているのは、英数字表記のカテゴリ名を均質に表示するため

### 3.4 文字サイズ・ウェイト階層

> body の基本フォントサイズが **10px** と小さく、rem ベースでスケーリングされる。以下は computed style の実測値。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2 Section | system stack | 28px | 700 | 35px (x1.25) | normal | `#333333` | セクション見出し |
| H2 Category Nav | system stack | 16px | 700 | 16px (x1.0) | normal | `#d60000` | カテゴリナビ見出し（赤） |
| H2 Company Nav | system stack | 10px | 700 | — | normal | — | 企業ナビ（小、ボーダー `#d60000`） |
| H3 | system stack | 14px | 700 | 19.6px (x1.4) | normal | `#555555` | 小見出し |
| P Nav | system stack | 13px | 700 | — | normal | `#333333` | ナビゲーション |
| A Nav | system stack | 13px | 700 | — | normal | `#333333` | ナビリンク |
| A Character | system stack | 11px | 700 | — | normal | `#333333` | キャラクター名等 |
| A Link | system stack | 14px | 400 | — | normal | `#024baf` | テキストリンク |
| Tab Button | Arial | 16px | 700 | — | normal | `#333333` / `#d60000` | タブ（非活性 / 活性） |
| Body (base) | system stack | 10px | — | — | normal | — | rem 計算の基底値 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **セクション見出し (28px)**: `1.25`（35px / 28px）— タイト
- **小見出し (14px)**: `1.4`（19.6px / 14px）
- **ナビ / タブ**: `1.0`（一行高さ = フォントサイズ）

**字間 (letter-spacing)** — 実測:
- **全要素**: `normal`（0）— 明示的な letter-spacing の指定はサイト全体で行われていない

**ガイドライン**:
- BANDAI NAMCO は **letter-spacing を一切加工しない**方針。palt も使わず、フォントのデフォルトメトリクスをそのまま活かす
- 見出しの line-height は 1.25 とやや詰め気味。ゲームタイトルや情報が多いため、縦方向の圧縮で一覧性を高めている
- body の line-height はセクションにより異なるが、概ね 1.4〜1.5 程度

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ゲームタイトル名は改行させずに表示するのが望ましい（`white-space: nowrap` を検討）
- プラットフォームバッジは一行で表示

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` ともに明示的な有効化は確認されなかった
- システムフォントのデフォルト設定に委ねる方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Arrow Button（主要ナビゲーション）** — "次へ" / "前へ"
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #6e6e6e`
- Padding: `7px 21px 7px 14px`（右に矢印アイコン分の余白）
- Border Radius: `2px`
- Font: system stack, 14px, weight 700

**Tab Button（カテゴリ切り替え）**
- Background: `#ffffff`
- Text (Inactive): `#333333`
- Text (Active): `#d60000`
- Border: none（下線等で活性状態を示す）
- Padding: `12px`
- Border Radius: `0px`（完全な矩形）
- Font: Arial, 16px, weight 700

**Highlight Button（"モットみる"）**
- Background: `#ffbf00`
- Text: `#333333`
- Border Radius: `2px`
- Font: system stack, 14px, weight 700

**Cookie Banner Button**
- Background: `#ff0000`
- Text: `#ffffff`
- Border Radius: `4px`

### Platform Badges

- Background: 各プラットフォーム固有色（上記 Platform Badge System 参照）
- Text: `#ffffff`
- Padding: `2px 8px` 程度
- Border Radius: `2px`
- Font: system stack, 10〜12px, weight 700
- 横並びで複数表示。ゲーム一枚絵の下にずらりと並ぶパターン

### Cards / Game Tiles

- Background: `#ffffff`
- Border: なし、または `1px solid #f2f2f2`
- Border Radius: `0px`〜`2px`（シャープエッジ基調）
- Shadow: 基本なし
- ゲームビジュアル画像が上部を占め、下部にタイトルとプラットフォームバッジ

### Header

- Background: `#ffffff`
- Border Bottom: 薄いボーダーまたはシャドウ
- Position: 固定ヘッダー

### News / Release Section

- Background: `#f2f2f2`（ライトグレー）
- Release Section: `#444444`（ダークグレー）背景に白文字
- News Accent: `#ffeeee`（薄ピンク）のニュースリリース面

### Dark Overlay（ゲームビジュアル上）

- Background: `rgba(0, 0, 0, 0.7)`
- テキスト: `#ffffff`
- ゲーム画像上にテキストを載せる際の可読性確保

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #6e6e6e`
- Border (focus): `1px solid #d60000`（ブランドレッドをフォーカス色に推奨）
- Border Radius: `2px`
- Padding: `8px 12px`
- Font: system stack, 14px, weight 400
- Height: `36px`

---

## 5. Layout Principles

### Spacing Scale（推奨 4px / 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内の余白、アイコンとテキストの間 |
| S | 8px | カード内の要素間、バッジ間のギャップ |
| M | 12px | タブのパディング、ボタン内余白 |
| L | 16px | カード内の段落間 |
| XL | 24px | セクション内の見出しと本文 |
| XXL | 48px | セクション間の縦余白 |

### Container

- Max Width: `1200px` 程度（コンテンツ領域の中央寄せ）
- Padding (horizontal): mobile `12px` / desktop `16〜24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0px | タブボタン・一部カード |
| Small | 2px | ボタン・バッジ・ゲームカード |
| Medium | 4px | Cookie バナーボタン |

### Grid

- ゲームタイトル一覧はカードグリッド（3〜4カラム、レスポンシブ）
- Gutter: 8〜16px
- ニュースリストは1カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・大半の要素（基本フラット） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.1)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.15)` | ドロップダウンメニュー・ポップオーバー |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.2)` | モーダル・フルスクリーンオーバーレイ |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ダーク背景 `#000000` とライト背景 `#f2f2f2` の面の切り替え**で表現
- ゲームビジュアル上のテキストは `rgba(0, 0, 0, 0.7)` のオーバーレイで可読性を確保
- 影よりも**面の色分け**と**ボーダー**で階層を表現する設計

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **`-apple-system` 先頭のシステムフォントスタック**を使う。ブランド専用書体は持たない
- **ゲームビジュアルを主役**にする。UI 装飾は最小限に、ゲームの Key Visual が映えるダークキャンバスを用意する
- ブランドカラー `#d60000` は**テキスト・バッジ・ボーダー**に使い、差し色として機能させる
- ボタンは **border-radius 2px のシャープな矩形**。角を丸めすぎない
- プラットフォームバッジは**各プラットフォーム固有色**で色分けする（PlayStation パープル、Switch レッド等）
- テキストリンクは **`#024baf`（ブルー）** でブランドレッドとは別系統にする
- 暗い背景上のテキストには `rgba(0, 0, 0, 0.7)` 以上のオーバーレイを敷いて可読性を確保する
- ダーク（ゲーム）セクションとライト（企業情報）セクションの**デュアルモード**を維持する

### Don't（禁止）

- **ピル型ボタン**（border-radius 9999px）を使わない — BANDAI NAMCO のボタンは矩形 2px が基本
- `#d60000` を **CTA ボタンの背景色**として多用しない — ブランドレッドは文字色・バッジ用であり、ボタン背景は白が基本
- letter-spacing や palt を**積極的に適用しない** — システムフォントのデフォルトメトリクスを活かす方針
- ゲームビジュアルの上に**オーバーレイなしで白文字を載せない**（可読性が確保できない）
- プラットフォームバッジの色を**統一しない** — 各プラットフォームの固有色がユーザーの認知に直結する
- **丸みの強いカード**（radius 8px 以上）を使わない — シャープエッジが BANDAI NAMCO の基調
- 本文テキストに**純黒 `#000000` を使わない** — 本文は `#333333`、見出しも `#333333`（純黒はヒーロー背景用）
- **明朝体やセリフ書体**を混ぜない — 全体ゴシック統一

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト。ゲームカードは1〜2カラム |
| Tablet | <= 1023px | タブレット。ゲームカード2〜3カラム |
| Desktop | >= 1024px | デスクトップ。フルグリッド表示 |

### モバイル時の調整

- ヒーロー: ゲームビジュアルのアスペクト比を調整し、縦方向に拡張
- セクション見出し: 28px → 20〜24px
- タブナビゲーション: 横スクロール可能なスクロールタブに変更
- プラットフォームバッジ: 折り返し表示
- ゲームカードグリッド: 3〜4カラム → 1〜2カラム

### タッチターゲット

- タブボタン: padding 12px で高さ 40px 程度（WCAG 基準 44px にやや足りない — 実装時に注意）
- Arrow ボタン: padding `7px 21px` で高さ 34px 程度（モバイルではサイズ拡大を推奨）

### フォントサイズの調整

- body base は 10px を維持（rem スケーリングで全体が連動）
- モバイルでは rem の基底値を調整するか、個別に media query でサイズを変更

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
BANDAI NAMCO Red: #d60000
Highlight Yellow: #ffbf00
Link Blue: #024baf
Primary Text: #333333
Secondary Text: #555555
Hero/Dark BG: #000000
Light Gray BG: #f2f2f2
Dark Section BG: #444444
News Accent: #ffeeee
White: #ffffff
Border Gray: #6e6e6e
Dark Overlay: rgba(0, 0, 0, 0.7)

Font: -apple-system, "system-ui", "Helvetica Neue", "Segoe UI",
  "Noto Sans JP", "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, sans-serif
Tab/Button Font: Arial

Body Base: 10px (rem scaling)
H2 Section: 28px / weight 700 / line-height 1.25 / color #333333
H2 Category: 16px / weight 700 / color #d60000
H3: 14px / weight 700 / line-height 1.4 / color #555555
Link: 14px / weight 400 / color #024baf
Tab: 16px / weight 700 / Arial / color #333333 (inactive) / #d60000 (active)
Letter Spacing: normal（全要素）
font-feature-settings: normal（palt 不使用）

Border Radius: 0px（タブ）/ 2px（ボタン・バッジ）/ 4px（Cookie）
Shadow: 基本 none。階層はダーク/ライト面の切り替えで表現

Platform Badges:
  PlayStation: #2a008d
  PS Blue: #0070d1
  PSVR2: #003de5
  Nintendo Switch: #d62a1b
  NSW2: #e70073
  iOS: #9b619d
  Steam: #2e6f90
```

### プロンプト例

```
BANDAI NAMCO Entertainment のデザインに従って、ゲームタイトル一覧ページを作成してください。
- フォント: -apple-system, "system-ui", "Helvetica Neue", "Segoe UI", "Noto Sans JP", "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, sans-serif
- セクション見出し: 28px / weight 700 / line-height 1.25 / color #333333
- カテゴリ見出し: 16px / weight 700 / color #d60000（BANDAI NAMCO Red）
- 本文・ゲームタイトル名: 14px / weight 700 / color #333333
- テキストリンク: 14px / weight 400 / color #024baf
- ヒーロー背景: #000000（黒）にゲームビジュアルをフルブリード表示
- コンテンツ領域背景: #f2f2f2（ライトグレー）
- カード背景: #ffffff / border-radius 2px / box-shadow none
- タブボタン: Arial 16px / weight 700 / 非活性 #333333 / 活性 #d60000 / radius 0px
- Arrow ボタン: 背景 #ffffff / border 1px solid #6e6e6e / radius 2px
- プラットフォームバッジ: PS=#2a008d / Switch=#d62a1b / Steam=#2e6f90 / iOS=#9b619d / 白文字 / radius 2px
- ゲームビジュアル上のテキストには rgba(0,0,0,0.7) のオーバーレイを敷く
- letter-spacing は normal。palt は使わない
- ピル型ボタン（radius 9999px）は使わない
- ブランドレッド #d60000 は文字色・バッジ用。ボタン背景には使わない
```
