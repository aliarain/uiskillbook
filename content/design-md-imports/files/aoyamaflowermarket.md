# DESIGN.md — 青山フラワーマーケット（Aoyama Flower Market）

> 青山フラワーマーケット（https://www.aoyamaflowermarket.com/）のデザイン仕様書。
> パーク・コーポレーション運営のプレミアムフラワーショップブランド。花のある暮らしを提案し、全国に店舗を展開。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調に、**ウォームレッド `#c8391c` の CTA** と **ゴールド `#b39b56` のアクセント**でプレミアムなフラワーショップの品格を表現。見出しにセリフ体（Frank Ruhl Libre）を使い、植物園のような上品さを演出
- **密度**: 本文の line-height は 1.5。スライダーやカードを中心としたビジュアル重視のレイアウト。情報密度よりも余白と写真の美しさを優先
- **キーワード**: ボタニカル、エレガント、ナチュラルプレミアム、セリフ×ゴシックの二層構造、花のある暮らし
- **特徴**:
  - 見出し・セクションタイトルに **Frank Ruhl Libre**（Google Fonts セリフ体）を採用。ジェントルで有機的な印象の欧文セリフで、花屋のブランドイメージと一致
  - 本文は **游ゴシック体** を中心としたシステムフォントスタック。可読性とOS互換性を重視
  - **ブランドカラーは `#c8391c`（ウォームレッド）**。主要 CTA「全国の店舗情報」やページトップボタン、価格表示に使用。花の赤を想起させる色
  - **ゴールド `#b39b56`** はランキングやプレミアム要素に使用。高級感の演出
  - セクション背景に `#fafbf3`（ごく薄いグリーンクリーム）を使い、植物のナチュラルさを暗示
  - ナビゲーションのテキストは 10px と極小で、`letter-spacing: -0.8px` の密なトラッキング。限られたスペースに多くのメニュー項目を収める設計
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Red** (`#c8391c`): メインのブランドカラー。主要 CTA の背景、ページトップボタン、価格表示に使用。温かみのある赤橙色
- **Brand Gold** (`#b39b56`): ランキング・プレミアム要素のアクセント。ゴールドは花束の高級感を連想させる
- **Banner Red** (`#c91435`): お知らせバナーや警告に使用。Brand Red よりやや深い赤

### CTA / Buttons

- **Primary CTA**: 背景 `#c8391c` / 文字 `#ffffff` / radius なし（角形）/ 花のブランドを象徴する温かい赤
- **Secondary CTA**: 背景 `transparent` / 文字 `#222222` / border `1px solid #969696` / radius `8px` / padding `0 30px` / height `38px`
- **Online Shop CTA** (`#f2b300`): ゴールデンイエロー。オンラインショップ遷移ボタンに使用（404ページ等）

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Text Primary | `#222222` | 本文テキスト・見出し |
| Text Secondary | `#555555` | 補足テキスト・説明文 |
| Border | `#969696` | ボタンの枠線・区切り線 |
| Slider Inactive | `#b1b1ac` | スライダードット非アクティブ（inset shadow 付き） |
| Background | `#ffffff` | ページ背景 |
| Section BG (Cream) | `#fafbf3` | 特集セクションの背景（薄いグリーンクリーム） |
| Section BG (Gray) | `#f9f9f9` | ランキングセクションの背景 |
| Info BG | `#efefef` | お知らせ・情報エリアの背景 |

### Accent

- **Brown** (`#a27769`): 季節のフラワーアレンジメント等で使用されるアクセントカラー。花の温かみを補強

### Semantic（推奨値）

実サイトには明確なエラー／成功色は表面化していない。EC 向けに推奨する補完値:

- **Danger**: `#c91435`（Banner Red を流用）
- **Success**: `#4a8c5c`（植物のグリーンに寄せた成功色）
- **Warning**: `#f2b300`（Online Shop CTA のゴールデンイエローを流用）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック体（Yu Gothic）** を最優先。モダンで端正な印象の和文ゴシック
- **フォールバック**: `ヒラギノ角ゴ ProN W3`（Apple OS）→ `ヒラギノ角ゴ Pro W3`（旧 Apple OS）→ `Meiryo`（Windows）→ `ＭＳ Ｐゴシック`（古い Windows）→ `sans-serif`
- **明朝体**: 使用しない（見出しの装飾は欧文セリフ体で担当）

### 3.2 欧文フォント

- **セリフ（Display）**: **Frank Ruhl Libre**（Google Fonts）。セクション見出し・ディスプレイテキストに使用。クラシカルで有機的なセリフ体
- **サンセリフ**: 専用の欧文サンセリフは持たず、游ゴシック体内の欧文グリフを使用

### 3.3 font-family 指定

```css
/* 本文・ナビ・商品情報 */
font-family: 游ゴシック体, "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  Meiryo, メイリオ, "MS PGothic", "ＭＳ Ｐゴシック", sans-serif;

/* 見出し・セクションタイトル（欧文セリフ） */
font-family: "Frank Ruhl Libre", serif;
```

**フォールバックの考え方**:
- 本文は游ゴシック体を最優先。和文名と英語名を併記して確実にマッチさせる
- Hiragino は ProN（JIS2004 字形）と Pro（JIS90 字形）の両方を指定し、新旧 macOS に対応
- 見出しの Frank Ruhl Libre は Google Fonts から配信。未読込時は generic `serif` へフォールバック
- フォントスタック全体が和文対応フォントで構成されており、欧文専用フォント（Helvetica 等）は含まない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Frank Ruhl Libre | 40px | 400 | 1.3 | 2px (0.05em) | セクション見出し（欧文セリフ） |
| Heading 3 (Product) | 游ゴシック体 | 16px | 700 (bold) | 1.5 | normal | 商品名 |
| Heading 4 (Desc) | 游ゴシック体 | 13px | 400 | 1.5 | normal | 商品説明 |
| Body | 游ゴシック体 | 16px | 400 | 1.5 | normal | 本文 |
| Price | 游ゴシック体 | 18px | 400 | 1.5 | normal | 価格表示（色: `#c8391c`） |
| Caption (Tax) | 游ゴシック体 | 12px | 400 | 1.5 | normal | 税込表記 |
| Nav | 游ゴシック体 | 10px | 400 | 1.2 | -0.8px (-0.08em) | ナビゲーション |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.5`
- **見出しの行間**: `1.3`（Display）〜 `1.5`（H3/H4）
- **本文の字間 (letter-spacing)**: `normal`（游ゴシックのデフォルト字送り）
- **Display 見出しの字間**: `2px`（0.05em）。セリフ体に広めのトラッキングで上品な間合い
- **ナビの字間**: `-0.8px`（-0.08em）。極小文字で密に詰める

**ガイドライン**:
- 本文の line-height: 1.5 は日本語としては標準的な値。商品情報中心のため、記事メディアほど広い行間は不要
- Display 見出し（Frank Ruhl Libre）は letter-spacing: 2px を必ず適用。ゆったりとした字間がブランドの優雅さを表現する
- ナビの letter-spacing: -0.8px は例外的に詰める指定。限られたスペースに多くのメニュー項目を収める実用的な処理

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`

### 3.7 OpenType 機能

```css
/* 本サイトでは palt・kern の明示的な指定は確認されていない */
font-feature-settings: normal;
```

- **palt**: 適用なし。本文・見出しともにデフォルトの字送り
- **kern**: 適用なし
- 游ゴシック体はデフォルトでプロポーショナル処理が控えめなため、明示的な palt なしでも可読性に問題なし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ブランドレッド）**
- Background: `#c8391c`
- Text: `#ffffff`
- Padding: 適宜（CTA によりサイズ可変）
- Border Radius: `0`（角形）
- Font Size: 16px
- Font Weight: 400

**Secondary（枠線付き）**
- Background: `transparent`
- Text: `#222222`
- Border: `1px solid #969696`
- Padding: `0 30px`
- Border Radius: `8px`
- Height: `38px`（line-height で中央揃え）

**Page Top Button**
- Background: `#c8391c`
- Text: `#ffffff`
- 固定位置表示

### Inputs

- Background: `#ffffff`
- Border: `1px solid #969696`
- Border (focus): `1px solid #c8391c`（推定、ブランドカラー準拠）
- Border Radius: `4px`
- Padding: `8px 12px`
- Font Size: `16px`

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし
- Border Radius: `0`（角形）
- Padding: `16px`
- Shadow: なし（フラットなレイアウト）
- 商品画像 + 商品名（16px bold）+ 説明（13px）+ 価格（18px, `#c8391c`）の構成

### Slider / Carousel

- **Active Dot**: `#222222` / border-radius `20px`（pill）
- **Inactive Dot**: `#b1b1ac` / border-radius `20px`（pill）/ inset box-shadow

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 1200px（推定、コンテンツ領域の実測値に基づく）
- Padding (horizontal): 16px

### Grid

- 商品一覧: 4カラムグリッド（デスクトップ）
- 特集エリア: フルワイドのスライダー
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 商品カード、ボタン（フラットデザイン基調） |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ドロップダウンメニュー |
| 3 | `inset 0 0 2px rgba(0,0,0,0.3)` | スライダー非アクティブドット |

サイト全体がフラットデザイン基調で、影の使用は最小限。商品写真とホワイトスペースでコンテンツの階層を作る。

---

## 7. Do's and Don'ts

### Do（推奨）

- Display 見出し（Frank Ruhl Libre）には必ず `letter-spacing: 2px` を適用する
- 価格表示は `#c8391c`（Brand Red）で統一する
- 商品カードはフラット（影なし）にし、写真の美しさで訴求する
- セクション背景には `#fafbf3`（クリーム）を使い、植物的な温かみを出す
- 游ゴシック体の font-family には和文名と英語名を両方記述する（OS 互換性）
- ボタンは角形（Primary）と角丸 8px（Secondary）を使い分ける

### Don't（禁止）

- Frank Ruhl Libre を本文テキストに使用しない（見出し・ディスプレイ専用）
- Brand Red (`#c8391c`) を背景の広い面に使わない（CTA とページトップのみ）
- ナビゲーション以外に letter-spacing: -0.8px の密なトラッキングを適用しない
- 商品カードに過度な影（box-shadow）をつけない（フラットデザインを崩す）
- 日本語本文に `line-height: 1.2` 以下を使わない
- `font-family` に游ゴシック体を1つだけ指定しない（フォールバック必須）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1カラムレイアウト。商品グリッドは2カラムに変更 |
| Tablet | ≤ 1024px | 商品グリッドは2〜3カラム |
| Desktop | > 1024px | 4カラムグリッド。フルワイドスライダー |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- ナビゲーションは 10px テキストだが、タップ領域は padding で確保

### フォントサイズの調整

- モバイルでは Display 見出しを 28px 程度に縮小
- 本文 16px はモバイルでも維持
- 商品価格 18px はモバイルでも維持（視認性重視）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #c8391c (Brand Red)
Accent Gold: #b39b56
Text Color: #222222
Background: #ffffff
Section BG: #fafbf3 (cream)
Display Font: "Frank Ruhl Libre", serif (40px / 400 / letter-spacing: 2px)
Body Font: 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", sans-serif
Body Size: 16px
Line Height: 1.5
```

### プロンプト例

```
青山フラワーマーケットのデザインシステムに従って、商品一覧ページを作成してください。
- プライマリカラー: #c8391c（CTA、価格表示）
- Display 見出しフォント: "Frank Ruhl Libre", serif / 40px / letter-spacing: 2px
- 本文フォント: 游ゴシック体, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", sans-serif
- 行間: 本文は line-height: 1.5
- セクション背景: #fafbf3（薄いクリーム）
- 商品カード: フラットデザイン（影なし）、写真 + 商品名(16px bold) + 説明(13px) + 価格(18px, #c8391c)
- ボタン: Primary は #c8391c 角形、Secondary は border 1px solid #969696 角丸 8px
```
