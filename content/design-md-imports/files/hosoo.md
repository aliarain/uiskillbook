# DESIGN.md — HOSOO / 細尾 (hosoo.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1688年創業・京都西陣の織物メゾン。Louis Vuitton や Chanel とのコラボレーションでも知られる、テキスタイルを軸としたラグジュアリーブランド。サイトはギャラリー/ポートフォリオ型で、UIクロームを極限まで排除し、フルスクリーンの織物画像に語らせる設計
- **密度**: 超低密度。テキスト要素は最小限で、余白と画像が主役。情報を「足す」のではなく「削ぎ落とす」アプローチ
- **キーワード**: 静謐、品格、禁欲的、工芸的、余白

**設計上のポイント**:
- 完全なモノクロマティック配色（`#2b2b2e` と `#949799` のみ）。ブランドカラーが存在しない——色で主張しないこと自体がブランド表現
- 和文は筑紫Aオールド明朝（Fontworks）、欧文は Heldane Display/Text という、両方とも高品位セリフ書体のデュアルタイプフェイスシステム
- CTAボタンが一切存在しない。すべてのインタラクションがテキストリンクとページネーションドットのみで構成される
- 本文の line-height が 1.0 と極端にタイト。可読性よりアートディレクション的な視覚効果を優先した設計
- 欧文テキストに letter-spacing 0.04〜0.1em の広めのトラッキングを適用し、静かな空気感を演出

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Dark Charcoal** (`#2b2b2e`): ほぼ唯一の有彩寄りダークカラー。テキスト・ハンバーガーメニュー背景・アクティブページネーション・セクション背景に兼用。`rgb(43, 43, 46)` でわずかに青味を含む
- ブランド専用のアクセントカラーは存在しない——モノクロマティックであること自体がブランドアイデンティティ

### Neutral（ニュートラル）

- **Text Primary** (`#2b2b2e`): 本文・見出しの基本色。純黒ではなく、わずかに柔らかいチャコール
- **Text Secondary** (`#949799`): 著作権表示、言語セレクター等の控えめなテキスト。`rgb(148, 151, 153)`
- **Background** (`#ffffff`): ページ全体の基本背景。純白
- **Border / Indicator** (`#2b2b2e`): ページネーションドットの枠線。テキストカラーと同色を流用

### Semantic（意味的な色）

- **Danger / Warning / Success**: 未定義（サイトの性質上、意味的な色を使用するUIが存在しない）

### Quick Swatch

| Token | Value | 役割 |
|-------|-------|------|
| Dark Charcoal | `#2b2b2e` | テキスト・UI要素・ダーク面の唯一の色 |
| Muted Gray | `#949799` | セカンダリテキスト・非アクティブ要素 |
| White | `#ffffff` | ページ背景・非アクティブドット内部 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体**: FOT-筑紫Aオールド明朝 Pr6（Fontworks / Adobe Fonts）。オールドスタイルの伝統的な明朝体で、西陣織の歴史と格式にふさわしい書体選択
- **ゴシック体**: 使用なし（サイト全体を明朝体＋欧文セリフで統一）

> **Web配信に関する注記（2026-05-09）**:
> - `FOT-筑紫Aオールド明朝 Pr6` は **Adobe Fonts（Fontworks 提供）** のためドメインライセンスが必要。Web フォントとして自由に使用できない
> - preview.html では Google Fonts の **Shippori Mincho**（しっぽり明朝）を代替として使用。和文明朝体として品格が近く、オールドスタイルの雰囲気を再現できる
> - 実装時は Adobe Fonts サブスクリプションで `FOT-筑紫Aオールド明朝 Pr6` を読み込むか、`Shippori Mincho` をフォールバックとして使用する

### 3.2 欧文フォント

- **セリフ（Display）**: Heldane Display — ナビゲーション、ラベル、著作権表示に使用
- **セリフ（Text）**: Heldane Text — スライドテキスト等の長文寄りの欧文に使用
- **サンセリフ / 等幅**: 使用なし

> **Web配信に関する注記**:
> - `Heldane Display / Text` は **Klim Type Foundry** の商用書体。Web フォントライセンスが必要
> - preview.html では Google Fonts の **Cormorant Garamond** を代替として使用。クラシカルなセリフ体として Heldane の品格に近い
> - 実装時は Klim Type Foundry からライセンスを取得するか、Cormorant Garamond をフォールバックとして使用する

### 3.3 font-family 指定

```css
/* 和文本文（明朝体） */
font-family: "FOT-筑紫Aオールド明朝 Pr6 M", "FOT-筑紫Aオールド明朝 Pr6 B",
             "Heldane Text", serif;

/* 欧文ナビゲーション・ラベル（Display セリフ） */
font-family: "Heldane Display", serif;
```

**フォールバックの考え方**:
- 和文フォント（筑紫Aオールド明朝）を最優先。M（Medium）と B（Bold）の 2 ウェイトを指定
- 欧文フォールバックとして `Heldane Text` を配置。和文フォントに含まれない欧文グリフを Heldane で補完
- ナビゲーション等の欧文ラベルには `Heldane Display` を単独指定
- 最終フォールバックは generic `serif`
- サンセリフ体やゴシック体は一切使用しない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo / H1 | 筑紫Aオールド明朝 | 32px | 700 | — | — | ブランドロゴ |
| Body | 筑紫Aオールド明朝 | 16px | 400 | 16px (1.0) | normal | 本文。極端にタイトな行間 |
| Nav Link | Heldane Display | 14px | 500 | 15.4px (1.1) | 1.4px (0.1em) | ナビゲーションリンク |
| Slide Text | Heldane Display | 16px | 400 | 24px (1.5) | 0.64px (0.04em) | スライド内テキスト |
| Language Selector | Heldane Display | 13px | 500 | — | 1.04px (0.08em) | EN / JP 切替 |
| Copyright | Heldane Display | 12px | 500 | 18px (1.5) | 0.48px (0.04em) | フッター著作権 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.0（16px / 16px）。アートディレクション的な意図で極端にタイト。一般的な日本語本文としては読みにくいが、ギャラリーサイトのキャプション的用途に限定
- **欧文ラベルの行間**: 1.1〜1.5。ナビゲーション（1.1）やスライド（1.5）で使い分け
- **本文の字間 (letter-spacing)**: `normal`（和文には字間を追加しない）
- **欧文の字間**: 0.04em〜0.1em。ナビゲーションが最も広い（0.1em）

**ガイドライン**:
- 和文本文に `letter-spacing` を加えない。明朝体本来のメトリクスを活かす
- 欧文テキストには必ず `letter-spacing` を設定する（最低 0.04em）。詰まった欧文はブランドのトーンに合わない
- line-height 1.0 はギャラリー的なレイアウト専用。読み物コンテンツには 1.7〜2.0 を別途設定すること
- 和欧混植時は欧文の letter-spacing が和文にも影響する点に注意。混植部分は個別に調整する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
/* 和文（筑紫Aオールド明朝） */
font-feature-settings: normal;  /* palt は使用しない */

/* 欧文（Heldane Display） */
font-feature-settings: "liga" 0;  /* リガチャを無効化 */
```

- **palt**: 使用していない。明朝体の等幅組版を維持する設計
- **liga**: Heldane Display では明示的に `"liga" 0` で無効化。fi, fl 等のリガチャを使わず、1文字ずつ独立させて表示
- **kern**: ブラウザの自動カーニングのみ
- リガチャ無効化は珍しい指定だが、欧文セリフの各文字を明確に見せる意図と推測される

### 3.8 縦書き

該当なし（現在のサイトでは縦書きは使用されていないが、西陣織の文脈では将来的に縦書き対応がブランドらしさを高める可能性がある）

---

## 4. Component Stylings

### Buttons

HOSOOのサイトにはCTAボタンが存在しない。すべてのインタラクションはテキストリンクで構成される。

**Text Link（テキストリンク）**
- Background: なし
- Text: `#2b2b2e`
- Border: なし
- Font Family: Heldane Display
- Font Size: 14px
- Font Weight: 500
- Letter Spacing: 0.1em
- Decoration: none（下線なし）
- ホバー時: opacity 変化のみ

**Text Link (Secondary)**
- Text: `#949799`
- Font Size: 12〜13px
- Font Weight: 500
- Letter Spacing: 0.04〜0.08em

### Pagination Dots

サイト唯一のインタラクティブ・ビジュアル要素。

**Active**
- Background: `#2b2b2e`
- Border: `1px solid #2b2b2e`
- Border Radius: `50%`（完全な円）
- Size: 8〜10px

**Inactive**
- Background: `#ffffff`
- Border: `1px solid #2b2b2e`
- Border Radius: `50%`
- Size: 8〜10px

### Inputs

トップページにフォーム要素の実測なし。ブランドのトーンに合わせた推奨値:

- Background: `#ffffff`
- Border: `1px solid #2b2b2e`
- Border (focus): `2px solid #2b2b2e`
- Border Radius: `0px`（角丸なし）
- Padding: 12px 16px
- Font Family: 筑紫Aオールド明朝 / Shippori Mincho
- Font Size: 16px
- Height: 48px

### Cards

- Background: `#ffffff`
- Border: なし（または `1px solid rgba(43,43,46,0.1)`）
- Border Radius: `0px`
- Padding: 24px〜32px
- Shadow: なし

---

## 5. Layout Principles

### Spacing Scale

ギャラリーサイトのため厳密なトークン体系は実測されていないが、大きめの余白を基調とする:

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 8px | 要素間の最小余白 |
| S | 16px | テキスト行間の補助余白 |
| M | 24px | セクション内の小区切り |
| L | 40px | ナビゲーションの高さ余白 |
| XL | 80px | セクション間の大きな余白 |
| XXL | 120px | ヒーロー周辺の特大余白 |

### Container

- Max Width: フルスクリーン（コンテナ制約なし。画像がビューポート全幅を使う）
- テキストコンテンツ Max Width: 800px（推奨）
- Padding (horizontal): 24px〜40px

### Grid

- Columns: 不定（コンテンツに応じた自由なレイアウト）
- Gutter: 24px〜40px
- 基本的にシングルカラムのスクロールレイアウト

---

## 6. Depth & Elevation

実測値はすべて `box-shadow: none`。HOSOOはフラットかつミニマルを徹底している。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素のデフォルト |
| 1 | `0 1px 3px rgba(43,43,46,0.06)` | （推奨）画像ホバー時の微細な浮き |
| 2 | `0 4px 16px rgba(43,43,46,0.08)` | （推奨）モーダル・ライトボックス |

> 実装方針: 影は一切使わないのが原則。織物の質感はフラットな画像で伝え、UIの層構造は余白と透明度で表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#2b2b2e` を使い、純黒 `#000000` を避ける
- 和文には明朝体（筑紫Aオールド明朝系）を使い、ゴシック体を混ぜない
- 欧文には `letter-spacing: 0.04em` 以上を設定し、ゆったりとしたトラッキングを維持する
- Heldane Display の欧文には `font-feature-settings: "liga" 0` を指定する
- 余白を大きくとり、情報を詰め込まない。「引き算」のデザインを心がける
- 画像はフルスクリーンまたは大きなサイズで配置し、トリミングを最小限にする
- ページネーションは円形ドット（border-radius: 50%）で実装する

### Don't（禁止）

- ゴシック体やサンセリフ体を使わない（ブランドの品格が失われる）
- 色付きのCTAボタンを作らない（テキストリンクのみ）
- 角丸（border-radius > 0px）を使わない（ページネーションドットの 50% を除く）
- 装飾的なグラデーション・ドロップシャドウを使わない
- `letter-spacing` なしで欧文テキストを表示しない（詰まった欧文はブランドトーンに合わない）
- 和文本文に `palt` を適用しない（等幅組版を維持）
- テキストに純黒 `#000000` や濃い色のアクセントカラーを使わない
- 情報を詰め込まない。HOSOOの設計思想は「余白で語る」こと
- line-height 1.0 をそのまま長文に適用しない（ギャラリーキャプション専用の設定）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | シングルカラム。画像フルスクリーン維持 |
| Tablet | 768px – 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）
- ページネーションドットは視覚的に小さいが、タップ領域は 44px 以上を確保する

### フォントサイズの調整

- モバイルではナビゲーションをハンバーガーメニュー（背景 `#2b2b2e`、テキスト `#ffffff`）に切り替え
- 本文 16px はそのまま維持
- ロゴ / H1 の 32px はモバイルで 24px 程度に縮小
- 画像のフルスクリーン表示はモバイルでも維持（ポートレート方向に最適化）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color:     #2b2b2e (warm charcoal, NOT pure black)
Text Secondary: #949799 (muted gray)
Background:     #ffffff
Border:         #2b2b2e (pagination dots only)
Font (JP):      "FOT-筑紫Aオールド明朝 Pr6 M", serif
Font (EN):      "Heldane Display", serif
Body Size:      16px
Body Line Height: 1.0 (gallery caption) / 1.7+ (reading content)
Letter Spacing (JP): normal
Letter Spacing (EN): 0.04em – 0.1em
Border Radius:  0px (except pagination: 50%)
font-feature-settings: "liga" 0 (Heldane Display) / normal (Mincho)
Shadow: none (flat)
CTA Buttons: none (text links only)
```

### プロンプト例

```
HOSOO（hosoo.co.jp）のデザインシステムに従って、西陣織コレクションのギャラリーページを作成してください。

- 配色: テキスト #2b2b2e（純黒は使わない）、セカンダリ #949799、背景 #ffffff のモノクロマティック
- アクセントカラーは使わない。色を足さないこと自体がブランド表現
- 和文フォント: "FOT-筑紫Aオールド明朝 Pr6 M" / フォールバック "Shippori Mincho", serif
- 欧文フォント: "Heldane Display" / フォールバック "Cormorant Garamond", serif
- 欧文テキストには letter-spacing: 0.04em 以上を必ず設定
- 欧文セリフには font-feature-settings: "liga" 0 を指定（リガチャ無効）
- CTAボタンは作らない。テキストリンクのみ
- 画像はフルスクリーンで大きく配置
- border-radius: 0px（ページネーションドットの 50% を除く）
- box-shadow: none（完全にフラット）
- ページネーションは円形ドット（active: bg #2b2b2e / inactive: bg #ffffff, border 1px solid #2b2b2e）
- 余白を大きくとり、情報を削ぎ落とす。「引き算」のデザイン
```
