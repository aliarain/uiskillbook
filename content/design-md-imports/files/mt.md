# DESIGN.md — mt masking tape (KAMOI KAKOSHI)

> mt masking tape（https://www.masking-tape.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく（2026-05-09 取得）。
> カモ井加工紙が展開するマスキングテープブランド。プレミアム日本語フォント（FOT-筑紫ゴシック Pr5N D）を採用した、職人的・クラフト的なデザインシステム。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プロダクト（テープ柄）を主役に据えた、落ち着いたグレートーンのUIで構成。過剰な装飾を排し、製品の色彩・模様を際立たせるミニマルなキャンバスとして機能する
- **密度**: ゆったりとした余白。余白と行間を広く取り、クラフト誌的な「手のかかった誌面」を感じさせる
- **キーワード**: かわいい、上品、クラフト、プレミアム、日本らしい、温もり
- **特徴**:
  - ブランドカラーを持たず、グレー（`#4d4d4d`〜`#000000`）でUIを統一。ブランドの個性はプロダクト写真の豊かな色彩で表現する
  - プレミアム商業フォント「FOT-筑紫ゴシック Pr5N D」（Fontworks）を採用。Adobe Fonts / TypeSquare 経由のみ使用可能
  - 英字見出しに Oswald（Google Fonts）を使用。和文の丸みある筑紫ゴシックと角ばった Oswald のコントラストが、クラフトブランドらしい遊び心を生む
  - CTAボタンはシャープコーナー（border-radius: 0px）で統一。柔らかい製品のイメージに対し、フレームは直線的に締める
  - CTA に `box-shadow: rgba(0,0,0,0.1) 2px 2px 3px` の柔らかいドロップシャドウを採用（日本のミニマル系サイトでは珍しい）

---

## 2. Color Palette & Roles

<!-- ブランドカラーは存在せず、すべてグレースケールでUIを構成する -->

### Primary（CTAカラー）

- **CTA Primary** (`#4d4d4d`): メインCTAボタンの背景色。ミディアムグレー
- **CTA Dark** (`#000000`): 「オンラインショップ」ボタン等、特に強調したいCTAに使用

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト。純黒ではなくダークグレー
- **Text Secondary** (`#555555`): 補足テキスト、ラベル、サブナビゲーション
- **Text On-Dark** (`#ffffff`): 暗い背景（CTA、ナビ等）上のテキスト
- **Border / Divider** (`#cccccc`): 区切り線、入力欄の枠
- **Surface Light** (`#e5e5e5`): 最も多く使われる非白の背景（出現28回）。セクション背景、ナビゲーション背景
- **Surface Mid** (`#e3e3e3`): h3 パネルの背景。`#e5e5e5` に近い値で、セクション小見出しの背景に使用
- **Surface Subtle** (`#fafafa`): 薄い背景面。カード等
- **Background** (`#ffffff`): ページ背景

### Semantic（意味的な色）

- エラー・警告・成功の専用カラーは実測では確認されていない。フォーム・エラー状態にはブラウザデフォルトに依存している可能性が高い

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（メイン）**:
- FOT-筑紫ゴシック Pr5N D（Fontworks）— Adobe Fonts / TypeSquare 経由のみ使用可。プレビュー環境では **Zen Kaku Gothic New**（Google Fonts、同 Fontworks 提供）で代替
- メイリオ（Windows フォールバック）
- ＭＳ Ｐゴシック（レガシー Windows フォールバック）

**プレビュー用代替フォント**:
- `"Zen Kaku Gothic New"` を Google Fonts から読み込む。Fontworks 提供の書体で字形が最も近い

### 3.2 欧文フォント

- **ディスプレイ（英字見出し）**: Oswald（Google Fonts）— コレクション名、セクション見出しの英字に使用
- **フォールバック**: sans-serif

### 3.3 font-family 指定

```css
/* 本文・UI全体（和文優先） */
font-family: "FOT-筑紫ゴシック Pr5N D", メイリオ, "ＭＳ Ｐゴシック", sans-serif;

/* 英字ディスプレイ見出し */
font-family: Oswald, sans-serif;

/* プレビュー環境での代替（Adobe Fontsが使えない場合） */
font-family: "Zen Kaku Gothic New", メイリオ, "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- 和文フォントを先に指定（日本語の表示品質を優先）
- FOT-筑紫ゴシックは Adobe Fonts ライセンスのため、ローカル環境・プレビューHTMLでは表示されない
- Oswald は英字専用のディスプレイフォントとして独立したスタックを持つ
- 和文フォントが Fontworks 製であることを考慮し、代替も Fontworks 系の Zen Kaku Gothic New を選ぶ

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo / Site Title | 筑紫ゴシック | 20.88px | 700 | 1.2 (25px) | normal | h1、ロゴ相当 |
| Section Heading (EN) | Oswald | 25.89px | 700 | 1.2 (31px) | 0.1em (2.59px) | h2、英語セクション見出し |
| Collection Label | Oswald | 23.6px | 700 | 1.2 | 0.1em | "2026 SS COLLECTION" 等のキャプション |
| Small Label (EN) | Oswald | 12.95px | 700 | — | 0.2em | バッジ・タグ等の小さい英字ラベル |
| Section Panel (h3) | 筑紫ゴシック | 15.03px | 700 | 1.2 (18px) | 0.1em (1.392px) | グレー背景パネル付き小見出し |
| Body | 筑紫ゴシック | 13.92px | 400 | 2.0 (27.84px) | 0.1em (1.392px) | 本文、ナビゲーション |
| Nav Items | 筑紫ゴシック | 13.92px | 400 | 2.0 | 0.1em (1.392px) | ヘッダーナビゲーション |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body, p, nav): `2.0`（27.84px / 13.92px）— 日本語editorial サイト標準のゆったりした行間
- 見出し (h2, h3, logo): `1.2`— 表示テキストは詰めて力強く

**字間 (letter-spacing)** — 実測値:
- **全体の基本値**: `0.1em`（1.392px / 13.92px）— 本文・見出し・ナビ問わず全要素に統一適用
- 小さい英字ラベル (Oswald 小): `0.2em`— より開いた字間でラベルの視認性を上げる
- **palt**: `font-feature-settings: normal`（palt 非適用）— 全角の等幅スペーシングで統一

**ガイドライン**:
- `letter-spacing: 0.1em` が UI 全体のユニバーサルベース値。サービスの上品な手仕事感を演出している
- palt を使わないことで、全角文字が均一に並ぶ伝統的な日本語組版の印象を維持
- Oswald 使用時は `letter-spacing: 0.1em` または `0.2em` で詰まりを防ぐ

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- 日本語の長い商品名や URL の折り返しに `break-all` を適用
- macOS での筑紫ゴシックの表示品質向上のため、アンチエイリアス設定を明示する

### 3.7 OpenType 機能

```css
/* 全体 — palt 非適用 */
font-feature-settings: normal;
```

- **palt 非適用**: 全角文字の等幅スペーシングを維持。和文の均一な字並びを優先した設計
- 字詰めは `letter-spacing: 0.1em` の均等空けで代用している
- Oswald 使用時も `font-feature-settings: normal`

### 3.8 縦書き

- 該当なし。mt は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#4d4d4d`（ミディアムグレー）
- Text: `#ffffff`
- Border: `2px solid #4d4d4d`
- Border Radius: `0px`（シャープコーナー）
- Padding: `10px 40px`
- Font Size: `13.92px`
- Font Weight: `700`
- Box Shadow: `rgba(0,0,0,0.1) 2px 2px 3px`（柔らかいドロップシャドウ。CTAの浮遊感を演出）

**Primary Dark CTA（オンラインショップ等）**
- Background: `#000000`
- Text: `#ffffff`
- Border Radius: `0px`
- Padding-Left: `34.8px`（やや広め）
- Box Shadow: `rgba(0,0,0,0.1) 2px 2px 3px`

**テキストリンク / Secondary**
- Background: `transparent`
- Text: `#555555`
- スタイル: 矢印付きテキストリンク形式（ボーダーなし、下線スタイル）

### Inputs

- Border: `1px solid #cccccc`
- Border Radius: `0px`（ボタンと統一したシャープコーナー）
- Font Size: `13.92px`
- Font Family: 筑紫ゴシック スタック

### Cards / Section Panels

**h3 セクションパネル**
- Background: `#e3e3e3`
- Padding: `20px`
- Border Radius: `0px`
- Font Weight: `700`
- Letter Spacing: `0.1em`

**コンテンツカード（商品カード等）**
- Background: `#ffffff`
- Border: なし（写真のみで境界を表現）
- Shadow: なし（フラットデザイン）

### Navigation

- Background: `#e5e5e5`（最頻出の面色）
- Text Color: `#333333` または `#555555`
- スタイル: フルワイドのメガドロップダウン形式
- Font Size: `13.92px`
- Line Height: `2.0`

---

## 5. Layout Principles

### Spacing Scale

mt サイトには明示的なデザイントークンのスペーシングスケールは確認されていない。実測から以下のパターンが観察される：

| 用途 | Value |
|------|-------|
| ボタン内の上下パディング | 10px |
| ボタン内の左右パディング | 40px |
| h3 パネルのパディング | 20px |
| セクション間の余白 | 40〜60px（推定） |

### Container

- 実測では固定のコンテナ幅は明示されていない。フルワイドレイアウトを基本とし、コンテンツに応じて内部で幅を制限している模様

### Grid

- 商品グリッドは CSS Grid または Flexbox による可変列構成（デスクトップ: 3〜4列推定）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード、フラットな面要素 |
| 1 | `rgba(0,0,0,0.1) 2px 2px 3px` | CTAボタン（実測）— 斜め方向の柔らかいドロップシャドウ |

- mt のエレベーションは事実上1段階のみ。CTA ボタンにのみ shadow を適用し、他の要素はすべてフラット
- シャドウが右下方向（offset: 2px 2px）なのが特徴。デザイン的な意図として、手作業・スタンプ感を連想させる

---

## 7. Do's and Don'ts

### Do（推奨）

- **UI色はグレースケールに徹する**: ブランドの色彩はプロダクト写真が担う。UIの色に鮮やかな色を持ち込まない
- **CTAはシャープコーナーで統一する**: `border-radius: 0px` を維持する。角丸はブランドの直線的なフレームと合わない
- **CTA には `box-shadow: rgba(0,0,0,0.1) 2px 2px 3px` を付ける**: mtのボタンの特徴的な軽い影。省くとブランドらしさが薄れる
- **本文は `letter-spacing: 0.1em` を全要素に適用する**: サイト全体のユニバーサル基本値として統一する
- **英字ディスプレイテキストには Oswald を使う**: 和文の丸みと Oswald の角ばりのコントラストがブランドの遊び心を表現する
- **h3 パネルは `background: #e3e3e3`、`padding: 20px` で統一する**: セクション区切りの視覚的なリズムを保つ
- **フォールバックに Zen Kaku Gothic New を使う**: Adobe Fonts が使えない環境では同 Fontworks 系の Google Fonts を代替として選ぶ

### Don't（禁止）

- **UIに鮮やかな色を使わない**: mt のブランドカラーはプロダクトパターンにある。UI に赤・青・緑等を持ち込むとブランドの静謐さが失われる
- **CTA に border-radius を付けない**: 角丸ボタンはこのブランドの世界観に合わない
- **palt（プロポーショナル字詰め）を使わない**: 実サイトでは `font-feature-settings: normal`。等幅の全角スペーシングで日本語の均一な並びを保つ
- **line-height を 1.5 以下にしない**: 本文の `line-height: 2.0` はブランドのゆったりとした空気感の核心。詰めると編集誌的な雰囲気が失われる
- **筑紫ゴシックの代替に Noto Sans JP を使わない**: Noto Sans JP は字形・太さが筑紫ゴシックと大きく異なる。Fontworks 系の Zen Kaku Gothic New を優先する
- **フォントを指定する際にフォールバックを省かない**: FOT-筑紫ゴシック Pr5N D は環境依存のため、メイリオ・ＭＳ Ｐゴシックまでのフォールバックチェーンを必ず持たせる

---

## 8. Responsive Behavior

### Breakpoints

実測から推定されるブレークポイント（明示的な CSS 変数は確認されていない）：

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1カラム表示。ナビゲーション折りたたみ |
| Tablet | ≤ 1024px | 2カラム表示 |
| Desktop | > 1024px | フルレイアウト、メガドロップダウンナビ |

### タッチターゲット

- ボタンの `padding: 10px 40px` は縦方向のタップ領域がやや小さめ（約34px）。モバイルでは追加の padding を検討する

### フォントサイズの調整

- ベース `13.92px`（約14px）はモバイルでもそのまま使用。ビューポートスケーリングで調整している可能性がある
- Oswald 見出しのサイズはモバイルでは70〜80%程度に縮小する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
CTA Background: #4d4d4d（ミディアムグレー）
CTA Dark Background: #000000（オンラインショップ等）
Text Primary: #333333
Text Secondary: #555555
Text On-Dark: #ffffff
Surface Light: #e5e5e5（セクション背景・ナビ背景）
Surface Mid: #e3e3e3（h3パネル背景）
Background: #ffffff
Border: #cccccc

Japanese Font: "FOT-筑紫ゴシック Pr5N D", メイリオ, "ＭＳ Ｐゴシック", sans-serif
  （プレビュー代替: "Zen Kaku Gothic New", メイリオ, "ＭＳ Ｐゴシック", sans-serif）
English Display Font: Oswald, sans-serif

Body Size: 13.92px / line-height: 2.0 / letter-spacing: 0.1em
Heading (h2): Oswald 25.89px / weight: 700 / letter-spacing: 0.1em
Heading (h3): 15.03px / weight: 700 / letter-spacing: 0.1em / bg: #e3e3e3 / padding: 20px
font-feature-settings: normal（palt 非適用）

CTA Border Radius: 0px
CTA Box Shadow: rgba(0,0,0,0.1) 2px 2px 3px
```

### プロンプト例

```
mt masking tape のデザインに従って、商品一覧ページを作成してください。
- フォント: "FOT-筑紫ゴシック Pr5N D", メイリオ, "ＭＳ Ｐゴシック", sans-serif
  （Adobe Fonts が使えない環境は "Zen Kaku Gothic New" を先頭に置く）
- 英字見出し: Oswald, sans-serif
- テキスト色: #333333（本文）/ #555555（補足）
- 背景: #ffffff、セクション背景: #e5e5e5、h3パネル背景: #e3e3e3
- 全要素の letter-spacing: 0.1em（palt は使わない）
- 本文 line-height: 2.0
- CTAボタン: background #4d4d4d、白文字、border-radius 0px、padding 10px 40px
  box-shadow: rgba(0,0,0,0.1) 2px 2px 3px
- h3見出しはグレー背景パネル（#e3e3e3、padding 20px）で囲む
- ブランドカラーを UI に使わない（色彩は商品写真に任せる）
```
