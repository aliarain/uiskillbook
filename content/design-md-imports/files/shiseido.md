# DESIGN.md — 資生堂 (shiseido.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1872年創業の老舗化粧品ブランドとしての品格と信頼感。装飾を抑え、シャープな直線と温かみのある中間色で構成された、コーポレートと美容の橋渡し的トーン
- **密度**: 中密度の情報設計。ヒーロー画像とブランド紹介、お知らせ、サービスエントリが整然と並ぶインフォメーション型ホーム
- **キーワード**: 端正、信頼、上品、温かみ、伝統

**設計上のポイント**:
- 角丸を一切使わない（border-radius: 0px がほぼ全要素で徹底）
- テキストカラーが純黒ではなく茶味のあるダークグレー（`#45433e`）で、化粧品ブランドらしい柔らかさを演出
- 強調が必要な箇所のみ「資生堂レッド」`#c80421` を点で配置

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Shiseido Red** (`#c80421`): 資生堂の象徴的な赤。「大事なお知らせ」見出し、プログレスバー、限定的な強調に使用。広い面には使わず、点で効かせる
- **Brand Text** (`#45433e`): ブランドの基準色。本文・見出し・リンクすべての主軸となる、わずかに茶味を含むダークグレー

### Semantic（意味的な色）

- **Danger / Important** (`#c80421`): 警告・重要なお知らせ。Shiseido Red と同色を流用
- **Warning**: 未定義（実測なし）
- **Success**: 未定義（実測なし）

### Neutral（ニュートラル）

- **Text Primary** (`#45433e`): 本文・見出しの基本色（`rgb(69, 67, 62)`）。純黒を避けた温かみのあるダークグレー
- **Text Inverse** (`#ffffff`): 暗い背景上のテキスト（フッター、グローバルナビの一部）
- **Border / Divider** (`#d3d2cf`): 区切り線、入力欄の枠、サブボタンの境界線（`rgb(211, 210, 207)`）
- **Border Strong** (`#45433e`): 強調されたアウトライン（「ブランド一覧」ボタン等）
- **Background** (`#ffffff`): ページ全体の基本背景
- **Surface Subtle** (`#d3d2cf`): セカンダリボタンの面、控えめな帯背景
- **Footer Background** (`#3d3d3d`): フッターのみ使用される濃いチャコールグレー（`rgb(61, 61, 61)`）

### Quick Swatch

| Token | Value | 役割 |
|-------|-------|------|
| Shiseido Red | `#c80421` | ブランド赤・重要強調 |
| Text / Brand | `#45433e` | テキスト・ボーダー基準 |
| Border Subtle | `#d3d2cf` | 仕切り線・控えめな面 |
| Footer | `#3d3d3d` | フッター背景 |
| White | `#ffffff` | ページ背景・反転テキスト |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体, yugothic, 游ゴシック, Yu Gothic, ヒラギノ角ゴ ProN, Hiragino Sans, Noto Sans JP
- **明朝体**: 使用なし（コーポレートサイトはゴシック体で統一）

### 3.2 欧文フォント

- **サンセリフ**: Inter（最優先で指定）
- **セリフ**: 使用なし
- **等幅**: 未定義

> **Web配信に関する注記（2026-05-05追記）**:
> - `Inter` は Google Fonts で配信されているため、Web フォントとして読み込み可能（推奨: `wght@400;500;600;700`）
> - `游ゴシック体` / `Yu Gothic` は **Web フォントとして配信されていない**。OS インストール済みフォント（macOS の Hiragino, Windows の Yu Gothic）にのみフォールバック
> - 環境を問わず確実に和文を表示したい場合は、`Noto Sans JP`（Google Fonts 配信）を Web フォントとして併読し、フォールバックチェーン末尾の保険として機能させる
> - プレビュー HTML / 実装で Web フォントを使う際は、`<link>` で `Inter` と `Noto Sans JP` の 2 系統を読み込むのが安全

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: Inter, 游ゴシック体, yugothic, 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- `Inter`（オープンソースの欧文サンセリフ）を最優先で指定し、欧文表示の品質と統一感を確保
- 続けて 游ゴシック系（Mac/Windows 両対応）を厚く積む
- Mac には `ヒラギノ角ゴ ProN` / `Hiragino Sans` を保険として配置
- 最後は Web フォントの `Noto Sans JP`、generic は `sans-serif`
- 明朝体やセリフは使用しない（コーポレート＋EC的な機能性を優先）

### 3.4 文字サイズ・ウェイト階層

実測値に基づく主要階層（トップページ計測）:

| Role | Selector / Context | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|--------------------|------|--------|-------------|----------------|------|
| Heading 1 | `h1`（header） | 28px | 700 | 33px (×1.18) | normal | ロゴ近傍の最上位見出し |
| Heading 2 (lead) | `h2.service__lead` 相当 | 22px | 700 | 32px (×1.45) | normal | サービス紹介リード |
| Heading 2 (alert) | `h2.attention__title` | 22px | 700 | 30px (×1.36) | normal | 「大事なお知らせ」赤色 `#c80421` |
| Heading 2 (news) | `h2.news__title` | 22px | 700 | 22px (×1.0) | normal | 「INFORMATION」等の英大文字 |
| Heading 2 (section) | `h2`（main） | 21px | 700 | 26px (×1.24) | normal | 一般的なセクション見出し |
| Heading 2 (aside) | `h2.info__title` | 18px | 700 | 18px (×1.0) | normal | サイドカラム見出し |
| Heading 3 | `h3.service-s__title` | 18px | 700 | 22px (×1.22) | normal | サブサービス見出し |
| Heading 3 (small) | `h3.service__content__title` | 16.38px | 700 | 21.38px (×1.305) | normal | コンテンツ小見出し |
| Heading 4 | `h4.service__sub__title` | 18px | 700 | 22px (×1.22) | normal | 「商品カタログ」等 |
| Body | `body` / `p` / `a` / `li` | 14px | 400 | 21px (×1.5) | normal | サイト全体の標準本文 |
| Body Emphasis | `p.service__text` | 16px | 500 | 24px (×1.5) | normal | サービス本文（やや強め） |
| Body Link (alert) | `a` 重要リンク | 16px | 500 | 22px (×1.375) | normal | 「自主回収に関するお詫び…」等 |
| List Item (alert) | `li` 重要リンク | 16px | 500 | 22px (×1.375) | normal | お知らせリスト内の強調項目 |
| Caption | `p`（small） | 12px | 500 | 18px (×1.5) | normal | 「お買い物に使えるポイント…」等 |
| Pagination | `span.swiper-pagination-current` | 16px | 600 | 16px (×1.0) | normal | スライダーのカウンター |
| Button (primary) | `button`（main） | 16px | 700 | 18px (×1.125) | normal | 「新着情報」等のタブボタン |
| Button (secondary) | `button.gray` 相当 | 16px | 500 | 18px (×1.125) | normal | 「資生堂グループ情報」等 |
| Button (outline) | `button` 細枠 | 14px | 400 | 21px (×1.5) | normal | 「さらに見る」等 |

> 算出: `line-height` の比率 = `行送り px / フォントサイズ px`。資生堂は本文系がほぼ **1.5**、見出し系が **1.0〜1.45** に収束する設計。

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（14px / 21px）でほぼ統一。日本語サイトとしてはやや控えめでコンパクト寄り
- **見出しの行間**: 見出しサイズによって 1.0〜1.45。短いラベル系（INFORMATION, お客さまへのお知らせ）は 1.0、リード文は 1.36〜1.45
- **本文の字間 (letter-spacing)**: `normal`（グローバルに `normal`。実測でも個別オーバーライドなし）
- **見出しの字間**: `normal`

**ガイドライン**:
- letter-spacing を意図的に詰めたり広げたりしない。和文の自然なメトリクスをそのまま使う設計
- 行間 1.5 は欧文寄りの設定。情報量の多いコーポレートサイトとして読みやすさより一覧性を優先
- 商品紹介や読み物コンテンツに展開する場合は、本文に `line-height: 1.7〜1.9` を別途設定するのが望ましい

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実測ではグローバルな指定なし、ブラウザデフォルト） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 等の指定なし */
```

- **palt**: 使用していない（実測値はすべて `normal`）。プロポーショナル字詰めを適用しない、素直な等幅組版
- **kern**: ブラウザの自動カーニングのみ
- 化粧品ブランドではあるが、コーポレートサイトとしては装飾的なフォント機能を抑制

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（白地・タブ的ボタン）**
- Background: `#ffffff`
- Text: `#45433e`
- Padding: 実測値なし（要素ごとに調整）
- Border Radius: `0px`
- Font Size: 16px
- Font Weight: 700

**Secondary（グレー塗り）**
- Background: `#d3d2cf`
- Text: `#45433e`
- Border: なし
- Border Radius: `0px`
- Font Size: 16px
- Font Weight: 500

**Outline（細枠）**
- Background: `transparent`
- Text: `#45433e`
- Border: `1px solid #d3d2cf`
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 400

**Outline Strong（強い枠）**
- Background: `#ffffff`
- Text: `#45433e`
- Border: `1px solid #45433e`
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 400
- 「ブランド一覧」等の重要導線で使用

### Inputs

トップページでは `<input>` `<select>` `<textarea>` の実測なし。資生堂全体の方針に合わせた推奨値:

- Background: `#ffffff`
- Border: `1px solid #d3d2cf`
- Border (focus): `1px solid #45433e`
- Border Radius: `0px`（サイト方針として角丸を使わない）
- Padding: 8px 12px（推奨）
- Font Size: 14px〜16px
- Height: 40px〜44px（タッチターゲット基準）

### Cards / Panels

- Background: `#ffffff`
- Border: なしか `1px solid #d3d2cf`
- Border Radius: `0px`
- Padding: 16px〜24px
- Shadow: なし（フラットが基本）

### Alert / お知らせ

- 見出しテキスト色: `#c80421`（Shiseido Red）
- 本文テキスト色: `#45433e`
- 背景: `#ffffff` または淡いグレー
- アイコンや帯で囲まず、テキストの色だけで強調するミニマルな手法

### Footer

- Background: `#3d3d3d`
- Text: `#ffffff`
- Padding: `40px 80px 58px`（実測）
- リンク色: `#ffffff` のまま

---

## 5. Layout Principles

### Spacing Scale（推定）

実測フッター padding `40px 80px 58px` から、8px ベースの倍数でスケールを推定:

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 8px | 要素間の最小余白 |
| S | 16px | リスト項目内のパディング（実測 `16px 0 16px 24px`） |
| M | 24px | リスト項目の左パディング |
| L | 40px | フッター上下パディング |
| XL | 58px | フッター下端余白 |
| XXL | 80px | フッター左右パディング |

> 実測のカスタムプロパティ:
> - `--swiper-theme-color: #007aff`（Swiper ライブラリのデフォルト。サイト独自の意味は薄い）
> - `--swiper-navigation-size: 44px`

### Container

- Max Width: 1280px（推定。コーポレートサイト標準幅）
- Padding (horizontal): 16px（モバイル）〜 80px（デスクトップ・フッター実測）

### Grid

- Columns: 可変（4分割のサービスカード、3分割のお知らせ等）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

実測値はすべて `box-shadow: none`。資生堂はフラットを徹底している。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素のデフォルト |
| 1 | `0 1px 2px rgba(0,0,0,0.06)` | （推奨）ホバー時のカード控えめな浮き |
| 2 | `0 4px 12px rgba(0,0,0,0.08)` | （推奨）モーダル・ドロップダウン |

> 実装方針: 影を足さなくてもデザインが成立するレイアウトを優先する。必要なら最小限。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#45433e` を使い、純黒 `#000000` を避ける
- `border-radius: 0px` を基本にする。角丸を加えると資生堂らしさが失われる
- `font-family` は `Inter` を先頭に、`游ゴシック体` 系を厚く積んだフォールバックチェーンで指定する
- 強調色 Shiseido Red `#c80421` は「重要・限定」のシグナルとしてピンポイントに使う
- 影を使わず、罫線・余白・タイポグラフィで階層を作る
- 本文は 14px / line-height 1.5 を基準に、長文には 1.7 以上を別途設定する

### Don't（禁止）

- ボタン・入力欄に角丸を加えない（`border-radius: 0px` を維持）
- Shiseido Red を広い面に使わない（化粧品の他ブランドラインのアクセントと混同される）
- 本文に純黒 `#000000` を使わない（コントラストが強すぎ、ブランドの柔らかさが消える）
- `letter-spacing` をグローバルにいじらない（`normal` のまま）
- `font-feature-settings: "palt" 1` を本文に適用しない
- 装飾的なグラデーション・ドロップシャドウを多用しない
- 明朝体を本文に使わない（コーポレートサイトはゴシック統一）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1カラム） |
| Tablet | 768px – 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準。`--swiper-navigation-size: 44px` とも整合）

### フォントサイズの調整

- モバイルでは本文 14px をそのまま維持（既に小さめのため、これ以上縮小しない）
- 見出しはデスクトップの 80% 程度に縮小（h1: 28px → 22px、h2: 22px → 18px 程度）
- フッターの左右 padding は 80px → 16px へ大幅に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #c80421 (Shiseido Red)
Text Color:  #45433e (warm dark gray, NOT pure black)
Background:  #ffffff
Border:      #d3d2cf (subtle) / #45433e (strong)
Footer BG:   #3d3d3d
Font: Inter, 游ゴシック体, yugothic, 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif
Body Size:   14px
Body Line Height: 1.5
Border Radius: 0px (sharp, no rounded corners)
Letter Spacing: normal
font-feature-settings: normal (no palt)
Shadow: none (flat)
```

### プロンプト例

```
資生堂（shiseido.co.jp）のデザインシステムに従って、企業向けお知らせ一覧ページを作成してください。

- ベースカラー: テキスト #45433e（純黒は使わない）、背景 #ffffff
- ブランド赤 #c80421 は「重要なお知らせ」見出しと、リンクのアクセントだけに使用（広い面には使わない）
- フォント: Inter, 游ゴシック体, yugothic, 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif
- 本文: 14px / weight 400 / line-height 21px (1.5) / letter-spacing normal
- 見出し h2: 22px / weight 700 / line-height 1.36 / 色は通常 #45433e、警告系のみ #c80421
- ボーダー: #d3d2cf を仕切り線・カード枠・「さらに見る」アウトラインボタンに使用
- 強調アウトラインボタンは #45433e の 1px solid + 白背景
- すべての要素で border-radius: 0px（角丸なし）
- box-shadow: none（フラット）
- フッターは背景 #3d3d3d、テキスト #ffffff、padding 40px 80px 58px
- font-feature-settings: normal（palt は使わない）
```
