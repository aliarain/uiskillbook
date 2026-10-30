# DESIGN.md — Mame Kurogouchi

> Mame Kurogouchi（https://www.mamekurogouchi.com/）のデザイン仕様書。
> 黒河内真衣子が手掛ける日本発のファッションデザイナーズブランド。ファブリックの開発から手掛ける職人的なものづくりと、日本の伝統工芸からの着想を現代のファッションに昇華する姿勢が特徴。
> 2026-05-19 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ギャラリー・ホワイトキューブのような純白空間に、ルックブック写真を静かに配置する**展示型デザイン**。テキストは極限まで小さく（全要素 11px 統一）、装飾を一切排除し、写真と余白だけで世界観を構築する。オートクチュール的な「見せすぎない」美学をウェブに翻訳した設計
- **密度**: 極めて低密度。大面積の写真と広大な余白が支配し、テキスト要素は最小限。11px のテキストは「読む」よりも「佇む」存在として機能し、**写真が圧倒的な主役**であることを宣言するレイアウト
- **キーワード**: ギャラリー型、Adobe Garamond Pro + 游明朝、全要素 11px 統一、モノクロームグレー、セリフ一貫、palt なし、ホワイトキューブ
- **特徴**:
  - **全テキスト 11px 統一**が最大の特徴。h1・h3・p・a・span・button すべてが同一サイズ。通常のウェブサイトにある見出しの階層構造を意図的に放棄し、テキスト要素の存在感を極限まで抑える
  - **完全セリフ体系**: 欧文 Adobe Garamond Pro + 和文 游明朝（Yu Mincho）。ゴシック体は一切使わない。ブランドの持つ職人性・文学性をセリフ書体の格調で表現
  - **モノクロームグレー**: テキスト色は `#666666`（プライマリ）と `#999999`（セカンダリ/リンク）の2色のみ。純黒 `#000000` はテキストに使わない
  - **CTA ボタンなし**: 明確なボタンコンポーネントが存在せず、すべてテキストリンクで構成。EC 機能もテキストリンクベースのミニマル設計
  - **CSS Custom Properties**: `--font-family`, `--color-font`, `--color-link`, `--color-red`, `--color-line` の5変数のみ。デザイントークンも最小限
  - letter-spacing `0.5px`（0.045em @ 11px）が全要素に均一適用。font-feature-settings は `normal`（palt なし）

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

Mame Kurogouchi のカラーパレットは極めて抑制的。**モノクロームグレー**の世界で、色はテキストの階層を区別するためだけに存在する。ブランドのアイデンティティは色ではなくファブリックの写真が担う。

- **Text Gray** (`#666666`): CSS 変数 `--color-font`。本文・見出し・フッターテキスト等すべての主要テキスト色。純黒を避けた中間グレーで、写真を邪魔しない
- **Link Gray** (`#999999`): CSS 変数 `--color-link`。ナビゲーション・リンク・セカンダリテキスト。テキストグレーよりさらに薄く、「押せる」要素が主張しすぎない設計

### Semantic（意味的な色）

- **Alert Red** (`#cc0000`): CSS 変数 `--color-red`。エラーや重要な通知に限定使用。実サイトでは非常に控えめな出現

### Neutral

- **Text Primary** (`#666666`): 本文テキスト（`--color-font`）
- **Text Secondary** (`#999999`): リンク・ナビゲーション（`--color-link`）
- **Text Input** (`#000000`): 検索入力フィールドのテキスト色（入力欄のみ純黒を許容）
- **Border** (`#e4e4e4`): CSS 変数 `--color-line`。区切り線、セクション境界
- **Background** (`#ffffff`): ページ背景。純白のホワイトキューブ
- **Toggle Menu** (`#999999`): モバイルメニュートグルの背景色

---

## 3. Typography Rules

### 3.1 和文フォント

Mame Kurogouchi は**明朝体のみ**を使用する完全セリフ体系。和文には **游明朝** を採用し、ゴシック体は一切使わない。

- **游明朝 (Yu Mincho)**: フォールバックチェーンに `"Yu Mincho"`, `游明朝`, `YuMincho`, `游明朝体` の4表記を併記（macOS / Windows / ブラウザ差異への対応）
- **ヒラギノ明朝 ProN**: 游明朝が利用できない環境でのフォールバック
- **さわらび明朝 (Sawarabi Mincho)**: Google Fonts のフォールバック明朝体

> **補足**: 游明朝はフォント名のエイリアスが多い（Yu Mincho / YuMincho / 游明朝 / 游明朝体）。CSS で 4 表記すべてを含めることで、macOS・Windows・iOS の差異を吸収している

### 3.2 欧文フォント

- **Adobe Garamond Pro**: 欧文の主要書体。オールドスタイル・セリフの代表格で、高級ファッションブランドに広く使われる。Adobe Fonts（TypeKit）から Web フォントとして読み込み
- フォントスタック先頭に置かれ、欧文グリフは Adobe Garamond Pro が優先される

> **Adobe Fonts ライセンス注意**: Adobe Garamond Pro はドメインライセンスのため、preview.html では表示されない。**Google Fonts の EB Garamond** が最も字形の近い代替フォント

### 3.3 font-family 指定

```css
/* 全テキスト共通（CSS 変数 --font-family） */
font-family: adobe-garamond-pro, "Yu Mincho", 游明朝, YuMincho, 游明朝体, "Hiragino Mincho ProN", "Sawarabi Mincho", serif;
```

**フォールバックの考え方**:
- 欧文フォント（Adobe Garamond Pro）を先頭に配置し、英数字は Garamond のグリフで表示
- 和文フォール バック は游明朝の 4 表記 → ヒラギノ明朝 ProN → さわらび明朝の順
- generic family は `serif`（ゴシック系のフォールバックは一切含まない）

### 3.4 文字サイズ・ウェイト階層

Mame Kurogouchi は**タイポグラフィの階層を意図的に放棄**している。h1 も p も button もすべて同じサイズ・ウェイトで統一される。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | adobe-garamond-pro, 游明朝 | 11px | 400 | — | 0.5px (0.045em) | ヘッダー内。見出しとしての特別な扱いなし |
| Heading 3 | adobe-garamond-pro, 游明朝 | 11px | 400 | — | 0.5px (0.045em) | フッターセクションタイトル / color #666666 |
| Body | adobe-garamond-pro, 游明朝 | 11px | 400 | 1.5 (16.5px) | 0.5px (0.045em) | 本文の標準スタイル / color #666666 |
| Nav Link | adobe-garamond-pro, 游明朝 | 11px | 400 | 1.18 (13px) | 0.5px (0.045em) | ナビゲーションリンク / color #999999 |
| Link | adobe-garamond-pro, 游明朝 | 11px | 400 | — | 0.5px (0.045em) | テキストリンク / color #999999 or #666666 |
| Span | adobe-garamond-pro, 游明朝 | 11px | 400 | — | 0.5px (0.045em) | インラインテキスト |
| Button (search) | adobe-garamond-pro, 游明朝 | 11px | 400 | — | — | 検索ボタン / padding 1px 6px / color #666666 |
| Input (search) | adobe-garamond-pro, 游明朝 | 11.9px | 400 | — | — | 検索入力 / padding 8px / color #000000 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.5`（16.5px / 11px）— 11px という極小サイズに対して十分な行間を確保
- **ナビゲーションの行間**: `1.18`（13px / 11px）— コンパクトなナビ組
- **見出しの行間**: 明示的な指定なし（ブラウザデフォルト）— 見出しも 11px のため問題にならない
- **全要素の字間 (letter-spacing)**: `0.5px`（0.045em @ 11px）— 均一に適用。極小テキストの可読性を確保するための微量な開き

**ガイドライン**:
- letter-spacing は **全要素で 0.5px（0.045em）に統一**。見出しだけ詰める / 広げるといった使い分けは行わない
- 全テキストが 11px のため、letter-spacing の段階的な差異で階層を作る必要がない
- line-height は 本文 1.5 / ナビ 1.18 の二段階のみ

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- テキスト量が極めて少なく、禁則処理が問題になるケースはほぼない
- 写真キャプションやプロダクト名は短いフレーズで完結する前提

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は不使用**。Adobe Garamond Pro も游明朝も、フォントのデフォルトメトリクスで組む
- letter-spacing 0.5px の均一適用が字間調整を担っており、palt による個別文字の字詰めは行わない
- Garamond のリガチャ等もブラウザデフォルトに委ねる

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

Mame Kurogouchi には**視覚的に目立つ CTA ボタンが存在しない**。これはブランドの最も特徴的なデザイン判断の一つ。すべてのインタラクションはテキストリンクで処理される。

**テキストリンク（標準リンク）**
- Font Family: adobe-garamond-pro, "Yu Mincho", 游明朝, YuMincho, 游明朝体, "Hiragino Mincho ProN", "Sawarabi Mincho", serif
- Font Size: 11px
- Font Weight: 400
- Letter Spacing: 0.5px (0.045em)
- Text Color: `#999999`（`--color-link`）
- Background: transparent
- Border: none
- Border Radius: 0px
- 装飾: なし（下線もデフォルトでは非表示の可能性）

**検索ボタン（唯一のボタン要素）**
- Font Size: 11px
- Font Weight: 400
- Padding: 1px 6px
- Text Color: `#666666`
- Background: transparent
- Border Radius: 0px
- 極めて控えめなインライン UI。CTA としてのビジュアル強調は一切ない

**ボタンの考え方**:
- **CTA ボタンを作らない**ことがデザイン意図。ファッションブランドのサイトとして、「売る」ための UI を前面に出さず、ギャラリーとしての体験を優先する
- どうしてもボタンが必要な場合は、テキストリンクと同じ 11px / #999999 / セリフ体で、背景色・ボーダー・角丸を一切付けない
- hover 等のインタラクション効果も最小限

### Inputs

**検索入力フィールド**
- Font Family: adobe-garamond-pro, 游明朝系, serif
- Font Size: 11.9px（ブラウザデフォルトに近い）
- Font Weight: 400
- Padding: 8px
- Text Color: `#000000`（入力テキストのみ純黒を許容）
- Background: `#ffffff`
- Border: 1px solid `#e4e4e4`（`--color-line`）
- Border Radius: 0px

### Cards

明確なカードコンポーネントは存在しない。コレクションの個々のアイテムは、写真 + テキストリンクの最小構成で配置される。

- Background: transparent
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 写真が主要素で、テキストは 11px のキャプション的存在

### Section Dividers

- `#e4e4e4`（`--color-line`）の 1px ラインでセクションを区切る
- 背景色の切り替えは行わない（全面 `#ffffff` で統一）

---

## 5. Layout Principles

### Container

- 純白 `#ffffff` の全幅レイアウト
- コレクション写真は大面積で配置（ルックブック写真が主役）
- テキスト要素はヘッダー・フッターに集約し、メインコンテンツエリアは写真で埋め尽くす構成

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 1px | 検索ボタンの縦パディング |
| S | 6px | 検索ボタンの横パディング |
| M | 8px | 検索入力のパディング |
| L | 16px | セクション余白（推定） |
| XL | 32px | セクション間余白（推定） |
| XXL | 64px+ | 写真セクション間の大余白（推定） |

### Grid

- ルックブック写真: 大面積の 1〜2 カラム配置。写真の世界観を活かすレイアウト
- コレクション一覧: グリッド配置（写真主体）
- テキスト要素は中央寄せまたは左寄せでコンパクトに配置

---

## 6. Depth & Elevation

Mame Kurogouchi はシャドウやエレベーションを一切使わない。**完全にフラットなホワイトキューブ空間**で、写真だけが奥行きを持つ。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素。影は一切不使用 |

- box-shadow、text-shadow、filter: drop-shadow いずれも使用しない
- 深度の表現はなく、写真の被写界深度だけが空間を構成する
- `#e4e4e4` のボーダーラインが唯一の視覚的区切り

---

## 7. Do's and Don'ts

### Do（推奨）

- すべてのテキストに **adobe-garamond-pro + 游明朝のセリフ体系**を使う（ゴシック体は使わない）
- テキストサイズは **11px を基本**とし、サイズの階層を作らない
- テキスト色は **`#666666`（プライマリ）** と **`#999999`（リンク/セカンダリ）** の2色で構成する
- letter-spacing は **0.5px（0.045em）を全要素に均一**に適用する
- line-height は本文 **1.5**、ナビ **1.18** を使う
- ページ背景は **`#ffffff` の純白**を使う（ホワイトキューブの空間演出）
- インタラクション要素はすべて**テキストリンク**で構成する（CTA ボタンを作らない）
- ボーダー色は **`#e4e4e4`**（`--color-line`）を使う
- font-weight は **400（Regular）のみ**を使う
- 写真に最大限のスペースを割き、テキスト要素は最小限に抑える
- CSS Custom Properties **`--font-family`, `--color-font`, `--color-link`, `--color-red`, `--color-line`** を活用する

### Don't（禁止）

- ゴシック体（サンセリフ）を使わない（完全セリフ体系を守る）
- テキストサイズに階層を作らない（h1 を大きくする等の一般的な見出し設計をしない）
- 純黒 `#000000` をテキストに使わない（入力フィールドのテキスト色を除く）
- CTA ボタン（塗りつぶし・枠線・角丸）を作らない
- pill ボタン（border-radius 9999px）を作らない
- font-weight 700（bold）や 600 を使わない（400 のみ）
- font-feature-settings で palt を有効にしない
- letter-spacing を変えて階層を表現しない（0.5px で統一）
- ドロップシャドウや box-shadow を使わない
- 鮮やかなアクセントカラーや派手な装飾を使わない
- テキストを詰め込まない（ギャラリー空間の余白と静寂を保つ）
- 背景に `#ffffff` 以外の色面を使わない（ダークセクションも不要）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム、ハンバーガーナビ |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ。フルサイズのルックブック写真 |

### タッチターゲット

- 11px テキストリンクのタップ領域は WCAG 基準（44px x 44px）を下回る可能性が高い
- モバイル時はリンク要素の padding を拡張して最低限のタッチ領域を確保する必要がある
- toggle メニュー（bg `#999999`）がモバイルナビゲーションを担う

### フォントサイズの調整

- デスクトップ・モバイルともに **11px を維持**する可能性が高い（サイズの階層がないため、縮小の概念がない）
- 写真のサイズとレイアウトで対応し、テキストサイズは固定

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: Mame Kurogouchi
Designer: Maiko Kurogouchi（黒河内真衣子）
Origin: 日本発ファッションデザイナーズブランド
Text Primary: #666666 (--color-font)
Text Secondary: #999999 (--color-link)
Alert Red: #cc0000 (--color-red)
Border: #e4e4e4 (--color-line)
Background: #ffffff
Font: adobe-garamond-pro, "Yu Mincho", 游明朝, YuMincho, 游明朝体, "Hiragino Mincho ProN", "Sawarabi Mincho", serif
palt: なし（font-feature-settings: normal）
All Text: 11px / 400 / letter-spacing 0.5px (0.045em) — サイズ統一
Body Line Height: 1.5
Nav Line Height: 1.18
CTA Style: なし（テキストリンクのみ、ボタンコンポーネント不在）
Shadow: 使用しない
Preview Alt Font: EB Garamond (Adobe Garamond Pro の Google Fonts 代替)
```

### プロンプト例

```
Mame Kurogouchi のデザインシステムに従って、コレクションページを作成してください。

- フォントは adobe-garamond-pro, "Yu Mincho", 游明朝, YuMincho, 游明朝体, "Hiragino Mincho ProN", "Sawarabi Mincho", serif
- ゴシック体は一切使わない。セリフ体のみ
- すべてのテキストを 11px / font-weight 400 / letter-spacing 0.5px に統一
- テキスト色は #666666（本文）と #999999（リンク）の2色のみ
- line-height は本文 1.5、ナビ 1.18
- 背景は純白 #ffffff。ダークセクションは不要
- ボーダーは #e4e4e4 の 1px ライン
- CTA ボタンは作らない。すべてテキストリンクで構成
- font-feature-settings: normal（palt なし）
- シャドウ、bold、アクセントカラーは一切使わない
- 写真を主役に据え、テキストは最小限のキャプション的存在にする
```

### 字詰め・組版の重要ポイント

1. **全要素 11px 統一**: ウェブデザインの常識である「見出し > 本文 > キャプション」のサイズ階層を意図的に放棄。h1 も p も 11px。テキストの存在を極限まで抑え、写真を主役にする高級ファッションブランド特有の美学
2. **完全セリフ体系**: Adobe Garamond Pro（欧文）+ 游明朝（和文）の明朝体のみ。ゴシック体を一切使わないサイトは日本のウェブでは非常に珍しく、ブランドの文学性・工芸性を強く打ち出す
3. **#666666 / #999999 のモノクロームグレー**: 純黒を避け、写真の邪魔にならないグレートーンで統一。この「テキストが主張しない」設計がギャラリー的体験の根幹
4. **CTA ボタンの不在**: 一般的な EC サイトには必ずある「カートに入れる」「購入する」等のボタン CTA が存在しない。テキストリンクだけで構成することで、商業性よりもアートディレクション性を優先
5. **letter-spacing 0.5px の均一適用**: palt を使わず、0.045em の微量なトラッキングを全テキストに一律適用。11px の極小サイズでも最低限の可読性を担保する実用的な判断
6. **Adobe Garamond Pro の先頭配置**: font-family スタック先頭が欧文セリフ。英数字は Garamond のエレガントなグリフで表示され、日本語のみ游明朝にフォールバックする。欧文優先の混植設計

---

**取得日**: 2026-05-19
**出典**: https://www.mamekurogouchi.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
