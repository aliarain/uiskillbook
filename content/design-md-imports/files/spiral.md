# DESIGN.md — Spiral

> Spiral（https://www.spiral.co.jp/）のデザイン仕様書。
> 槇文彦設計の複合文化施設。ワコール・アートセンターが運営する、南青山のギャラリー・ショップ・カフェの複合拠点。
> 実サイトの CSS computed style に基づく実測値（2026-05-08 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 建築空間をそのままWebに翻訳したような、ギャラリー的・エディトリアルな白と黒のデザイン。装飾を極力排し、余白とタイポグラフィの階層で構造を伝える
- **密度**: ゆったりとした余白。コンテンツは呼吸するように配置され、ギャラリーの壁面を想起させる
- **キーワード**: 建築的、ギャラリー、モノクローム、エディトリアル、静謐
- **特徴**: ほぼ黒の `#111111` を基調に、装飾要素がほとんどない。ロケーションタグは角のない真四角の黒バッジで、施設の各スペース（Spiral Garden, Spiral Market, CAFE AALTO 等）を示す。Roboto + Noto Sans JP の Google Fonts 構成で、body 全体に `font-feature-settings: "palt"` を適用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Spiral はモノクロームが基調。特定のブランドカラーを持たず、黒と白のコントラストそのものがアイデンティティ。

- **Black** (`#111111`): テキスト・タグ背景・CTA。ほぼ黒だが純黒ではない
- **White** (`#ffffff`): ページ背景・タグ内テキスト

### Neutral（ニュートラル）

- **Text Primary** (`#111111`): 本文テキスト、見出し、ナビゲーション
- **Text Black** (`#000000`): body デフォルト色
- **Text Muted** (`#999999`): 非アクティブなナビ、言語切替
- **Tag Text** (`#eeeeee`): 黒タグ上の白テキスト
- **Background** (`#ffffff`): ページ背景
- **Overlay** (`rgba(0,0,0,0.5)`): モーダル・オーバーレイ

### Semantic（意味的な色）

実サイトでは明示的な Semantic カラー（Success / Danger / Warning）の使用が確認されなかった。ギャラリーサイトとして、コンテンツに集中させるミニマルな配色。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- Noto Sans JP（Google Fonts、ウェイト 300/400/500/700 を使用）

### 3.2 欧文フォント

- **サンセリフ**: Roboto（Google Fonts、ウェイト 300/400/500/700 を使用）

### 3.3 font-family 指定

```css
/* グローバル（body） */
font-family: Roboto, "Noto Sans JP", serif;
```

**フォールバックの考え方**:
- 欧文フォント Roboto を先に指定し、ラテン文字の表示品質を優先
- 和文は Noto Sans JP で統一
- generic family が `serif` だが、実際に適用されるフォントはすべてサンセリフ（宣言上の特異な構成）
- Roboto と Noto Sans JP はどちらも Google Fonts で自由に使用可能

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値。サイズは viewport-relative のため、特定の viewport 幅での参考値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Heading (h2) | ~48px | 700 | 1.0 | 0.02em | トップページセクション見出し |
| Page Title (h2) | ~38px | 400 | 1.3 | 0.02em | トピックスページ |
| Dropdown Title | ~35px | 700 | 1.5 | 0.01em | ドロップダウンメニュー |
| Shop Name | ~19px | 300 | 1.0 | 0.02em | ナビゲーション施設名 |
| Nav Primary | ~16px | 700 | 1.2 | 0.01em | ナビゲーション主要リンク |
| Select/Filter | ~16px | 500 | normal | 0.03em | フィルター・セレクト |
| Search Input | ~16px | 400 | 1.0 | normal | 検索入力 |
| Body Default | ~14px | 400 | 1.5 | normal | 本文デフォルト |
| Description | ~13px | 400 | 1.69 | 0.02em | 説明テキスト |
| Tagline | ~12px | 400 | 1.5 | 0.04em | キャッチコピー・補足 |
| Language Switcher | ~12px | 400 | 1.2 | normal | JP / EN 切替 |
| Tags/Badges | 10px | 700 | 1.5 | 0.05em | ロケーションタグ |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- body デフォルト: 1.5 (14px ベース)
- 説明テキスト: 1.69 (~13px ベース)
- セクション見出し (h2): 1.0 -- タイトな行間で建築的な印象
- ページタイトル (h2): 1.3
- ドロップダウンタイトル: 1.5

**字間 (letter-spacing)** -- 実測値:
- body デフォルト: normal
- セクション見出し: 0.02em
- Tags/Badges: 0.05em -- 小さい文字をスパースに配置
- Tagline: 0.04em
- Select/Filter: 0.03em

**ガイドライン**:
- 見出しは `line-height: 1.0` で非常にタイト。建築的・ポスター的な印象を強調
- 本文は `line-height: 1.5~1.69` で読みやすさを確保
- ウェイトの幅が広い（300~700）。Light / Regular / Medium / Bold の4段階を使い分ける

### 3.6 禁則処理・改行ルール

```css
/* 明示的な禁則処理の指定は確認されなかった */
/* ブラウザのデフォルト挙動に準拠 */
```

### 3.7 OpenType 機能

```css
/* body にグローバル適用 -- 実測確認済 */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰めを **body 全体にグローバル適用**
- note（見出し専用）とは対照的に、Spiral はサイト全体で palt を有効化
- タグの小文字（10px/700）にも palt が効いており、凝縮された印象に寄与

### 3.8 縦書き

- 該当なし。Spiral サイトは横書きのみ

---

## 4. Component Stylings

### Tags / Badges（ロケーションタグ）

Spiral の最も特徴的なUI要素。施設内の各スペースを示す。

- Background: `#111111`
- Text: `#eeeeee`
- Font Size: 10px
- Font Weight: 700
- Letter Spacing: 0.05em (0.5px)
- Padding: 2px 10.5px
- Border Radius: **0px**（角なし。真四角の黒バッジ）
- Line Height: 1.5

### Buttons

実サイトでは明示的なボタンコンポーネントが少ない。主要なインタラクティブ要素はタグとナビゲーションリンク。

### Inputs（検索）

- Background: `transparent`
- Border: なし (0px)
- Font Size: ~16px
- Font Weight: 400
- ミニマルな検索インターフェース。枠線なしの透明な入力欄

### Cards

実サイトではイベント・展示情報がカード形式で並ぶ。

- Background: `#ffffff`
- Border: なし（影やボーダーで区切らない、余白で分離するスタイル）
- 画像とテキストのシンプルな構成

---

## 5. Layout Principles

### Spacing Scale

明示的なスペーシングトークンは確認されなかった。余白はコンテンツの呼吸感を重視した設計。

### Container

- レイアウトは全幅ベースで、コンテンツは中央寄せ
- ギャラリー情報は画像中心のグリッドレイアウト

### Grid

- イベント・展示情報: 2~3カラムのグリッド
- ギャラリーの壁面展示のように、規則的だが画一的でない配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインが基本 |

- Spiral のデザインはほぼ完全にフラット
- 要素間の区別は影ではなく、余白とタイポグラフィのウェイト差で表現
- オーバーレイのみ `rgba(0,0,0,0.5)` を使用

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#111111` を使う。純黒 `#000000` よりわずかに柔らかい
- body 全体に `font-feature-settings: "palt"` を適用する（Spiral のグローバル設定に準拠）
- ウェイトの幅（300~700）を活かしてタイポグラフィの階層を作る
- タグバッジは角なし（radius: 0px）の真四角。pill 形にしない
- 余白を広くとり、ギャラリーのような静謐な印象を維持する
- 見出しの line-height は 1.0 でタイトに（ポスター的な構成）
- Roboto と Noto Sans JP の組合せを維持する（両方 Google Fonts）

### Don't（禁止）

- ブランドカラーのアクセント色を追加しない（モノクロームがアイデンティティ）
- タグバッジに角丸を付けない（0px が正しい仕様）
- 装飾的なシャドウを多用しない（フラットデザインが基本）
- 見出しに line-height: 1.5 以上を使わない（建築的なタイトさが失われる）
- font-family の generic family を `sans-serif` に変更しない（Spiral は `serif` と宣言。実際の表示には影響しないが、ブランドの宣言を尊重）
- ウェイト 300 の Light を省略しない（施設名等で使用され、上品な軽さを演出）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ~768px 以下 | モバイルレイアウト |
| Desktop | ~769px 以上 | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- サイズは viewport-relative（vw ベース）で宣言されている箇所があり、画面幅に応じて滑らかにスケールする
- モバイルでは見出しがデスクトップの 60~70% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #111111
Text Muted: #999999
Tag Background: #111111
Tag Text: #eeeeee
Background: #ffffff
Overlay: rgba(0,0,0,0.5)

Font: Roboto, "Noto Sans JP", serif
Body Size: 14px / line-height: 1.5 / letter-spacing: normal
Heading: weight 700 / line-height: 1.0 / letter-spacing: 0.02em
palt: body 全体に適用（font-feature-settings: "palt"）
Tag: 10px / 700 / 0.05em / bg #111111 / text #eeeeee / radius 0px
```

### プロンプト例

```
Spiral のデザインに従って、展覧会一覧ページを作成してください。
- フォント: Roboto, "Noto Sans JP", serif（Google Fonts）
- テキスト色: #111111（ほぼ黒）
- ミュートテキスト: #999999
- 背景: #ffffff（白のみ）
- palt: body 全体に font-feature-settings: "palt" を適用
- 見出し: weight 700, line-height: 1.0, letter-spacing: 0.02em
- ロケーションタグ: bg #111111, text #eeeeee, 10px/700, radius 0px（角なし）
- 装飾なし: シャドウ・グラデーション・アクセントカラーは使わない
- 余白を広く: ギャラリー空間のような静謐さを維持
```
