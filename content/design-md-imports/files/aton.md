# DESIGN.md — ATON

> ATON（https://aton-tokyo.com/）のデザイン仕様書。
> 2026-05-19 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 東京発のラグジュアリーミニマルファッションブランド。素材の質感と静寂を伝えるため、極限まで要素を削ぎ落としたデザイン。**12px の極小テキスト**がサイト全体を支配し、ファッションハウスのルックブックを紙面で眺めるような体験を構成する。**AkkuratLLWeb**（Lineto のスイス・ネオグロテスク書体）と **"Gotham A" / "Gotham B"**（H&Co のジオメトリックサンセリフ）の二系統を使い分け、欧文の精緻さと游ゴシックの日本語テキストを組み合わせる
- **密度**: 極端にゆったりとしたルックブック型。テキストは最小限、余白が主役。ビジュアルが呼吸し、テキストは「添え物」として存在する。ECサイトでありながら雑誌の誌面に近い情報密度
- **キーワード**: ラグジュアリーミニマル、極小タイポグラフィ、モノクローム、ウォームベージュ、シャープエッジ、ルックブック型EC
- **特徴**: **12px の極小テキスト**が最大の特徴。見出し・本文・ナビ・ボタンラベルまで、ほぼすべてのテキストが 12px。唯一の例外は本文の 18px で、これが「読ませるテキスト」として階層の頂点に立つ逆転構造。font-weight は 400〜500 の軽量域のみで 700 は使用しない。`font-feature-settings: "palt"` がグローバルに適用される。CTA は **#000000 塗りつぶし + radius 0px** の完全なシャープエッジ。フッターの **#cfc6be**（ウォームベージュ）がモノクロームに唯一の温度を与える

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

ATON のカラーパレットは極めて禁欲的。**純黒 #000000 と純白 #ffffff の完全なモノクローム**が基本。唯一の色彩はフッターの **ウォームベージュ #cfc6be**。ファッションブランドとして「色を持たない」ことそのものがアイデンティティ。

- **Black** (`#000000`): CTA 背景・テキスト・ロゴ・ボーダー — ブランドの基調色
- **White** (`#ffffff`): ページ背景・CTA テキスト — 純粋な白
- **Warm Beige** (`#cfc6be`): フッター背景・フッターテキスト（rgb 207, 198, 190）— モノクロームに温度を与える唯一のアクセント

### Text & Neutral

- **Text Primary** (`#000000`): 本文・見出し・リンク — 純黒
- **Text Secondary** (`#343434`): Gotham 書体のラベル・セクションヘッダー（rgb 52, 52, 52）— わずかに和らげた黒
- **Text on Beige** (`#cfc6be`): フッター上のテキスト — ベージュ地にベージュ文字（低コントラストの意図的デザイン）

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Near-White** (`#fafafa`): セクション背景のわずかな差異（rgb 250, 250, 250）
- **Surface Semi-Transparent** (`rgba(255, 255, 255, 0.5)`): オーバーレイ・透過ヘッダー
- **Surface Dark** (`#1d1d1d`): ダークセクション（rgb 29, 29, 29）
- **Surface Beige** (`#cfc6be`): フッター背景

### Functional

- **Focus Ring**: ブラウザデフォルト（ブランド独自のフォーカスリング色は未設定）

---

## 3. Typography Rules

### 3.1 和文フォント

ATON の和文テキストは **游ゴシック** を中心としたフォールバックチェーン。AkkuratLLWeb が先頭に指定されているため、欧文は Akkurat、和文は游ゴシック以降で表示される。

- **游ゴシック** / **Yu Gothic** / **YuGothic**: 和文テキストの主力
- **ヒラギノ角ゴ Pro W3** / **Hiragino Kaku Gothic Pro**: macOS フォールバック
- **メイリオ** / **Meiryo**: Windows フォールバック
- **MS P ゴシック**: レガシーフォールバック

### 3.2 欧文フォント

ATON は**二系統の欧文フォント**を使い分ける。

- **AkkuratLLWeb**（Lineto）: 本文・ナビゲーション・リンク。洗練されたスイス・ネオグロテスク。Helvetica Neue よりも柔らかく、現代的なラグジュアリーブランドに好まれる書体
- **"Gotham A" / "Gotham B"**（H&Co / Hoefler&Co）: セクションヘッダー・ラベル・アナウンスメントバー。ジオメトリックサンセリフ。大文字の letter-spacing 0.05em で「声を抑えた告知」のトーンを出す

> **注意**: AkkuratLLWeb と Gotham はいずれもライセンスフォント。preview.html では以下の Google Fonts 代替を使用する:
> - AkkuratLLWeb → **Inter**（同じくスイス系ネオグロテスクで字形が近い）
> - Gotham → **Montserrat**（ジオメトリックサンセリフの定番代替）

### 3.3 font-family 指定

```css
/* 本文・ナビゲーション（AkkuratLLWeb 系統） */
font-family: AkkuratLLWeb, 游ゴシック, "Yu Gothic", YuGothic,
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;

/* セクションヘッダー・ラベル（Gotham 系統） */
font-family: "Gotham A", "Gotham B", sans-serif;
```

**フォールバックの考え方**:
- **欧文優先**: AkkuratLLWeb を先頭に指定し、欧文は Akkurat のグリフで表示。和文のみ游ゴシック以降にフォールバック
- Gotham 系統はセクションヘッダー等の欧文のみに使われるため、和文フォールバックは最小限（sans-serif のみ）
- 游ゴシック指定は引用符あり・なし・英語名の3形式を併記（ブラウザ互換性のため）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Body (読ませるテキスト) | AkkuratLLWeb + 游ゴシック | 18px | 400 | 1.8 (32.4px) | — | 唯一の大きなテキスト。記事本文・製品説明 |
| H1 (ロゴ) | AkkuratLLWeb + 游ゴシック | 12px | 400 | — | — | ロゴをテキストとして表示。極小 |
| H2 Section Header (Gotham) | "Gotham A", "Gotham B" | 12px | 500 | — | 0.05em (0.6px) | "COLLECTION" 等のセクションラベル / color #343434 |
| H2 Footer (body font) | AkkuratLLWeb + 游ゴシック | 12px | 400 | — | — | フッター見出し / color #cfc6be |
| P Label (Gotham) | "Gotham A", "Gotham B" | 12px | 400 | — | 0.05em (0.6px) | Gotham 系のラベルテキスト / color #343434 |
| P Small | AkkuratLLWeb + 游ゴシック | 10–12px | 400 | — | — | フッター・補足テキスト |
| Link (body) | AkkuratLLWeb + 游ゴシック | 18px | 400 | — | — | 本文中のリンク / color #000000 |
| Link (nav/label) | AkkuratLLWeb + 游ゴシック | 12px | 400 | — | — | ナビゲーション・フッターリンク |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（32.4px / 18px）— ゆったりとした日本語本文向け行間
- **見出し・ラベルの行間**: 明示的な指定なし（ブラウザデフォルト、12px テキストのため行間の影響は小さい）
- **Gotham ラベルの字間**: `letter-spacing: 0.05em`（0.6px @ 12px）— 控えめなワイドスペーシング
- **本文の字間**: 明示的な指定なし（palt によるプロポーショナル字詰めのみ）

**ガイドライン**:
- ATON のテキスト階層は**サイズで分離しない**。ほぼすべてが 12px で、18px の本文だけが突出する逆ピラミッド構造
- letter-spacing は Gotham 系のラベルにのみ 0.05em を設定。控えめだが、大文字テキストと組み合わせることで「静かな存在感」を出す
- 12px テキストでは行間の設計より**余白の設計**が重要になる（テキスト間の距離はマージンで調整）

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- テキスト量自体が極めて少ないため、長文の折り返し処理が問題になることは稀

### 3.7 OpenType 機能

```css
font-feature-settings: "palt" 1; /* プロポーショナル字詰め — グローバル適用 */
```

- **`palt` はグローバルに適用**: body レベルで指定され、和文テキスト全体に効く
- 12px の極小テキストに palt を適用することで、文字間の微細な不揃いを補正し、均質な印象を維持
- 欧文フォント（AkkuratLLWeb / Gotham）には palt は影響しないが、混植時の和欧間スペースの調整に寄与

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし — "Subscribe"）**

ATON の CTA は **純黒 #000000 の塗りつぶし + radius 0px のシャープエッジ**。ファッションブランドらしい「一切の柔らかさを排した」ボタンデザイン。

- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Border Radius: **0px**（完全なシャープエッジ — pill も角丸も不可）
- Padding: 10px 40px
- Font Family: AkkuratLLWeb + 游ゴシック フォールバック
- Font Size: 12px（推定 — サイト全体の統一サイズ）
- Font Weight: 400

**Language Selector（ドロップダウン）**

- Background: `#ffffff`
- Text: `#000000`
- Border Radius: **0px**
- Font Size: 12px

**ボタンの考え方**:
- メインは **#000000 の塗りつぶし**。純黒と純白のコントラストのみで構成
- **radius は必ず 0px**。角丸を一切使わないのが ATON のデザイン原則
- font-weight は **400**。CTA テキストを太くすることは ATON のミニマリズムに反する
- padding は横方向に広く（40px）、「ボタンが空間を持つ」デザイン

### Inputs

**Newsletter Input（推定）**

- Border: 1px solid `#000000`
- Border Radius: **0px**
- Font Family: AkkuratLLWeb + 游ゴシック フォールバック
- Font Size: 12px
- Background: `#ffffff`

### Cards（製品カード）

- Background: `transparent` / `#ffffff`
- Border Radius: 0px
- Shadow: なし
- 製品写真がカードの大部分を占め、テキスト（製品名・価格）は 12px / 400 で控えめに配置
- ホバーエフェクトは最小限

### Section Backgrounds

- **Default**: `#ffffff`（白背景が基本）
- **Near-White**: `#fafafa`（セクション間の微細な差異）
- **Dark**: `#1d1d1d`（ダークセクション）
- **Beige Footer**: `#cfc6be`（ウォームベージュ）

### Header

- **透過ヘッダー**: `--use-sticky-header: 1` / `--header-is-transparent: 1` — ヘッダーは透過で、スクロール時にスティッキーになる
- 背景: `rgba(255, 255, 255, 0.5)` の半透過白

---

## 5. Layout Principles

### Container

- 全幅レイアウトが基本。コンテンツは中央寄せで、左右に広い余白を取る
- ルックブック的な大きなビジュアルが画面を支配し、テキストは添え物として配置

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10px | CTA ボタン縦 padding |
| S | 16px | 小余白・テキスト間距離 |
| M | 40px | CTA ボタン横 padding・セクション余白 |
| L | 64px | セクション間余白（推定） |
| XL | 120px | ヒーロービジュアル周辺余白（推定） |

### Grid

- 製品一覧は 2〜4 カラムのグリッド
- ルックブックページは 1 カラムの全幅ビジュアル
- グリッドガター: 最小限（製品写真を密に並べる）

---

## 6. Depth & Elevation

ATON はシャドウを一切使わない。面の色（白 / ニアホワイト / ダーク / ベージュ）の切り替えのみで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#ffffff` | 通常コンテンツ面 |
| 2 | background `#fafafa` | セクション差異（微細） |
| 3 | background `#1d1d1d` | ダークセクション |
| 4 | background `#cfc6be` | フッター（ウォームベージュ） |

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文テキストは **AkkuratLLWeb + 游ゴシック** のフォールバックチェーン全体を指定する
- セクションヘッダーには **"Gotham A", "Gotham B"** を使い、letter-spacing **0.05em** を設定する
- `font-feature-settings: "palt" 1` を**グローバルに**適用する
- テキストサイズは **12px** を基本とし、本文のみ **18px** にする
- CTA は **#000000 塗りつぶし + #ffffff テキスト + radius 0px** にする
- フッター背景には **#cfc6be**（ウォームベージュ）を使う
- font-weight は **400** を基本、Gotham ヘッダーのみ **500** にする
- 余白を極端に多くとり、テキスト量を最小限に抑える
- ヘッダーは透過（`rgba(255, 255, 255, 0.5)`）にする
- 製品写真を大きく配置し、テキストは添え物として扱う

### Don't（禁止）

- **角丸（border-radius > 0px）を使わない**。pill も micro-rounded も不可。シャープエッジが ATON の絶対原則
- **font-weight 700（bold）を使わない**。ATON のテキストは 400〜500 の軽量域のみ。太字は世界観を壊す
- **鮮やかなアクセントカラーを使わない**。パレットは黒・白・ベージュのみ
- **テキストを大きくしすぎない**。12px が標準。18px を超えるテキストは原則として存在しない
- **box-shadow を使わない**。面の色の切り替えで空間を構成する
- **palt を無効にしない**（グローバル適用が前提）
- **Gotham を本文に使わない**（Gotham はセクションヘッダー・ラベル専用）
- **フッターに黒背景を使わない**（#cfc6be ウォームベージュが ATON のフッター色）
- **テキストを詰め込まない**。ATON は余白と静寂が命

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- 12px のテキストサイズはモバイルでもほぼ維持（これ以上小さくすると可読性を損なう）
- 本文 18px → 16px 程度に縮小
- 製品グリッドは 1〜2 カラムに折り返す
- ルックブック写真は全幅のまま維持
- ナビゲーションはハンバーガー化
- ヘッダーの透過処理は維持

### タッチターゲット

- CTA ボタンの padding 10px 40px は、モバイル時に縦方向を拡張して最低 44px のタッチターゲットを確保する
- 12px のナビリンクはタップ領域の追加が必須

### フォントサイズの調整

- 12px テキストはモバイルでも維持（ブランドの視覚的アイデンティティ）
- 可読性を考慮し、line-height の拡張で対応

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: ATON
Origin: 東京発ラグジュアリーミニマルファッション
Black: #000000
White: #ffffff
Warm Beige (Footer): #cfc6be
Text Primary: #000000
Text Secondary: #343434
Background: #ffffff
Body Font: AkkuratLLWeb, 游ゴシック, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
Heading Font: "Gotham A", "Gotham B", sans-serif
Preview Alternatives: Inter (for Akkurat), Montserrat (for Gotham)
palt: グローバル適用（font-feature-settings: "palt" 1）
Body: 18px / 400 / line-height 1.8
Labels & Headers: 12px / 400-500 / letter-spacing 0.05em (Gotham)
Logo (H1): 12px / 400
CTA Style: filled (bg #000000, text #ffffff, radius 0px, padding 10px 40px)
CTA Font: 12px / 400
Footer: bg #cfc6be
Shadow: 使用しない
Border Radius: 使用しない（すべて 0px）
```

### プロンプト例

```
ATON のデザインシステムに従って、新コレクションの製品一覧ページを作成してください。
- 本文フォントは AkkuratLLWeb, 游ゴシック, "Yu Gothic", YuGothic 等のフォールバック付き
  （プレビュー用代替: Inter + 游ゴシック）
- セクションヘッダーは "Gotham A", "Gotham B"（代替: Montserrat）、12px / 500 / letter-spacing 0.05em
- font-feature-settings: "palt" 1 をグローバルに適用
- 製品名・ラベルは 12px / 400 / color #000000
- 本文は 18px / 400 / line-height 1.8
- CTA「カートに入れる」は bg #000000, text #ffffff, radius 0px, padding 10px 40px
- 角丸（border-radius > 0px）は一切使わない
- フッター背景は #cfc6be（ウォームベージュ）
- 背景は白 #ffffff。シャドウは一切使わない
- 余白を極端に多く取り、テキストは最小限に抑える
- 製品写真を大きく配置し、テキストは添え物として扱う
```

### 字詰め・組版の重要ポイント

1. **二系統の欧文フォント**: AkkuratLLWeb（本文・ナビ）と Gotham（ヘッダー・ラベル）を明確に使い分ける。混在させない
2. **12px の極小テキスト**: サイト全体が 12px で統一されており、18px の本文だけが突出する逆ピラミッド構造。テキストサイズではなく余白で階層を表現する
3. **palt のグローバル適用**: `font-feature-settings: "palt" 1` が body レベルで指定。12px の極小テキストでも文字間の不揃いを補正する
4. **radius 0px の絶対原則**: ボタン・入力欄・カード・すべての要素が完全なシャープエッジ。角丸は ATON の世界観を壊す
5. **font-weight の軽量域**: 400（本文・CTA）と 500（Gotham ヘッダー）のみ。700（bold）は存在しない。引き算のラグジュアリー
6. **ウォームベージュ #cfc6be**: 黒と白のモノクロームに唯一の温度を加えるフッター色。RGB (207, 198, 190) のグレイッシュベージュ。このニュアンスが ATON をコールドなミニマリズムから区別する
7. **透過ヘッダー**: スティッキーヘッダーは `rgba(255, 255, 255, 0.5)` の半透過。ビジュアルを遮らないデザイン

---

**取得日**: 2026-05-19
**出典**: https://aton-tokyo.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
