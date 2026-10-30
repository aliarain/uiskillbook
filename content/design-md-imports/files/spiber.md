# DESIGN.md — Spiber

> Spiber Inc.（https://spiber.inc/）のデザイン仕様書。
> 実サイトの computed style および CSS Custom Properties に基づく。抽出日: 2026-06-07。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 研究機関とファッションブランドの中間に位置する、知的で洗練されたコーポレートサイト。Brewed Protein（構造タンパク質素材）を開発するバイオテック・ベンチャーとして、自然科学の真摯さとプロダクトの美しさを両立するデザイン
- **密度**: ゆったりとしたホワイトスペース。セクション間の余白が大きく、1画面に情報を詰め込まない。ファーストビューはキャッチコピー＋フルブリード画像の構成
- **キーワード**: インテレクチュアル、サステナブル、モノトーン、静謐、タイポグラフィドリブン
- **特徴**: 自社カスタムウェブフォント "Spiber" をブランドの軸とし、`#121212`（ほぼ黒）と白の2色構成で世界観を表現。`font-feature-settings: "palt"` をグローバルに適用し、和欧混植の組版密度を統一的に引き締めている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary** (`#121212`): ブランドの基調色。CTAボタン塗り、フッター背景、テキストに使用。純黒 `#000000` ではなく、わずかに柔らかいほぼ黒

### Neutral（ニュートラル）

- **Text Primary** (`#121212`): 本文テキスト
- **Text Body** (`#000000`): body 直下のデフォルト文字色（実測）
- **Text Secondary** (`#a1a1a1`): ラベル、補足テキスト、非アクティブな言語切替
- **Background** (`#ffffff`): ページ背景、ナビゲーション
- **Surface Light** (`#f2f2f2`): コンテンツセクションの交互背景
- **Surface Alt** (`#f3f3f3`): サブナビゲーションエリア
- **Surface Cookie** (`#e0dddb`): クッキーバー背景（暖みのあるグレー）
- **Border** (`#121212`): ボタン枠線、セクション区切り
- **Footer Background** (`#121212`): フッター背景
- **Footer Text Primary** (`#ffffff`): フッターのテキスト
- **Footer Text Secondary** (`rgba(224, 221, 219, 0.4)`): フッターの補助テキスト

### CSS Custom Properties（shadcn/ui パターン）

- `--primary`: `0 0% 9%` (≈ `#171717`)
- `--background`: `0 0% 100%`
- `--foreground`: `0 0% 3.9%`
- `--radius`: `0.5rem`
- `--bodyFont`: `0, 0%, 7%` (≈ `#121212`)
- `--greyFont`: `30, 7%, 87%`
- `--bgGreyLight`: `0, 0%, 95%` (≈ `#f2f2f2`)
- `--bgGreyDark`: `15, 5%, 24%`

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（フォールバック）**:
- 游ゴシック体 Pr6N M（"A+EqpB-游ゴシック体 Pr6N M" として独自マッピング）
- 游ゴシック / YuGothic
- YuGoPr6N
- YuGothicStd-R（クッキーバー領域で追加）

> **注意**: 見出し・本文の第一候補は自社カスタムウェブフォント "Spiber"。游ゴシック系はそのフォールバック。"A+EqpB-游ゴシック体 Pr6N M" は Adobe Fonts / TypeSquare 等で独自ビルドされた游ゴシック Pr6N Medium の別名と推測される

### 3.2 欧文フォント

- **カスタムフォント**: Spiber（ジオメトリック・サンセリフ系の自社書体）
- **システムフォールバック**: ui-sans-serif, system-ui, sans-serif
- **絵文字対応**: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"

> **preview.html 用の代替**: Spiber フォントはドメインライセンスのため外部では表示不可。Google Fonts の **Inter** がジオメトリック・サンセリフとして最も近い代替

### 3.3 font-family 指定

```css
/* 見出し・本文（メイン） */
font-family: Spiber, "A+EqpB-游ゴシック体 Pr6N M", 游ゴシック, YuGothic,
  YuGoPr6N, ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

/* ナビゲーション・UI */
font-family: Spiber, ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

/* クッキーバー・一部 body 要素 */
font-family: Spiber, "A+EqpB-游ゴシック体 Pr6N M", 游ゴシック, YuGothic,
  YuGoPr6N, YuGothicStd-R, ui-sans-serif, system-ui, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**フォールバックの考え方**:
- 自社カスタムフォント Spiber を最優先に指定
- 和文フォールバックは游ゴシック Pr6N M の独自マッピング名を経由して游ゴシック系に落ちる
- ナビゲーション・UI 要素では和文フォールバックを省略し、system-ui に直接落とす（欧文のみの想定）
- 最後に絵文字フォントを追加

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-06-07 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h1) | Spiber | 60px | 500 | 1.1 | -0.03em | "More than materials." / "Company" |
| Heading 2 | Spiber | 48px | 400 | 1.2 | -0.03em | セクション見出し |
| Heading 3 | Spiber | 24px | 400 | 1.5 | -0.02em | サブ見出し。ブランド名にはイタリック使用 |
| Body (JA) | Spiber | 16px | 400 | 1.5 | normal | 日本語本文 |
| Body Large (JA) | Spiber | 24px | 400 | 1.5 | normal | ミッションステートメント等 (`ja-larger-tonne`) |
| Label | Spiber | 16px | 400 | — | normal | "会社名" 等のラベル。color: `#a1a1a1` |
| Nav Primary | Spiber | 11px | 700 | 2.5 | 0.1em | uppercase, small-caps |
| Nav Secondary | Spiber | 11px | 400 | — | 0.1em | color: `#a1a1a1` |
| CTA Button | Spiber | 13px | — | — | — | ボタンテキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `24px` (16px × 1.5)
- 記事本文 (p): `24px` (16px × 1.5) — 業務的な記述のためコンパクト
- ミッション本文: `36px` (24px × 1.5) — 大きめの文字で統一的に 1.5
- Display (h1): `66px` (60px × 1.1) — 大文字見出しは詰まった行間
- Heading 2: `57.6px` (48px × 1.2) — やや詰まった行間
- Nav: `line-height: 2.5`（250%） — タッチターゲットの確保

**字間 (letter-spacing)** — 実測値:
- Display (h1): `-3%` (= -0.03em) — **トラッキングを詰める**（英語見出し向け）
- Heading 2: `-3%` (= -0.03em) — 同上
- Heading 3: `-2%` (= -0.02em) — やや緩い詰め
- 本文 (p): `normal`
- ナビゲーション: `1.1px` (= 0.1em) — **大きく広げる**（小文字 uppercase 向け）

**ガイドライン**:
- 見出しは**ネガティブ・トラッキング**（-0.02em 〜 -0.03em）でタイトに詰める。英語ベースの欧文組版思想
- ナビゲーションは逆に**ポジティブ・トラッキング**（0.1em）で広げ、大文字・小文字の区別を強調
- 本文は `normal` のまま。`palt` がグローバル適用されているため、和文はプロポーショナル字詰めで自然に詰まる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word;
```

- 長い URL や英単語の折り返しに対応
- 日本語テキストは標準的な禁則処理に従う

### 3.7 OpenType 機能

```css
/* body にグローバル適用 — 実測確認済 */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰め。**body 要素に適用されており、全要素に継承される**
- Spiber のサイトでは見出し専用ではなく**グローバル適用**。カスタムフォント "Spiber" 自体がプロポーショナル字詰めを前提に設計されていると推測される
- `kern` は Spiber フォント内蔵のカーニングテーブルに依存

### 3.8 縦書き

- 該当なし。Spiber は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（Contact Us）**
- Background: `#121212`
- Text: `#ffffff`
- Border: 1px solid `#121212`
- Padding: 8px 30px
- Border Radius: 50px（pill 形状）
- Font Size: 13px

**Secondary（Careers）**
- Background: `transparent`
- Text: `#121212`
- Border: 1px solid `#121212`
- Padding: 8px 30px
- Border Radius: 50px（pill 形状）

**Ghost on Dark（About us / Contact us — ダーク背景上）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 10px 30px
- Border Radius: 50px（pill 形状）

**Wide CTA（View all projects →）**
- Background: `transparent`
- Text: `#121212`
- Border: 1px solid `#121212`
- Padding: 10px 90px
- Border Radius: 50px（pill 形状）

**Text Link（Learn more → / Read more →）**
- Background: なし
- Text: `#121212`
- Border: なし
- Border Radius: 6px
- Font Size: 13px
- 矢印（→）付きのインラインリンク形式

**Cookie Bar Button**
- Background: `transparent` / `#121212`
- Text: `#121212` / `#ffffff`
- Border: 2px solid `#121212`
- Padding: 8px 27px
- Border Radius: 2px（角張ったスタイル — 他のボタンと異なる）

### Navigation

- Background: `#ffffff`（透過グラデーションの場合あり）
- テキスト: 11px / bold / uppercase / small-caps / letter-spacing: 0.1em
- 言語切替: active `#121212` / inactive `#a1a1a1`

### Footer

- Background: `#121212`
- Text Primary: `#ffffff`
- Text Secondary: `rgba(224, 221, 219, 0.4)`

---

## 5. Layout Principles

### Spacing Scale

- サイト全体でゆったりとした余白を採用。セクション間は 80px〜120px 程度のマージン
- 見出しとコンテンツ間は 24px〜40px
- カード内パディングは 24px〜32px

### Container

- Max Width: 約 1200px（コンテンツ幅）
- Padding (horizontal): 24px〜40px

### Grid

- ホーム: フルブリード画像 + テキストオーバーレイの構成が中心
- プロジェクト一覧: 2〜3カラムのカードグリッド
- 会社概要: シングルカラムの情報レイアウト

### Section Pattern

- ライトグレー (`#f2f2f2`) と白 (`#ffffff`) のセクションを交互に配置し、視覚的なリズムを作る

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 基本的にフラット。Spiber のサイトは影をほとんど使わない |
| 1 | 微弱な影（画像カードのホバー時など） | カードホバー |

- **フラットデザイン志向**: ドロップシャドウやエレベーションは極力排除。境界はセクション背景色の切り替え（白 / `#f2f2f2`）で表現する
- `--radius: 0.5rem`（8px）がCSS変数で定義されているが、ボタンは pill（50px）で独自のスタイル

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#121212` を基調とし、純粋な `#000000` とのわずかな差を保つ
- ボタンはすべて **pill 形状**（`border-radius: 50px`）にする — Spiber のアイデンティティ
- `font-feature-settings: "palt"` をグローバルに適用する（Spiber フォント前提の設計）
- 見出しの letter-spacing は**マイナス値**（-0.02em 〜 -0.03em）でタイトに詰める
- ナビゲーションは 11px / uppercase / small-caps / letter-spacing: 0.1em の組み合わせで統一する
- セクション背景は白と `#f2f2f2` の交互配置でリズムを作る
- ダーク背景上のボタンは ghost スタイル（白枠・白文字・透明背景）を使う
- テキストリンクの CTA には矢印（→）を付ける

### Don't（禁止）

- pill 以外の角丸（4px, 8px 等）をメインの CTA に使わない（クッキーバーの 2px は例外的な扱い）
- ブランドカラーとして彩度のある色を使わない。Spiber のパレットは**完全にモノトーン**（黒・白・グレー）
- ナビゲーションのテキストを通常の大文字小文字混在にしない（uppercase + small-caps が必須）
- 本文のフォントサイズを 16px 未満にしない
- 見出しに positive な letter-spacing を使わない（見出しは詰める方向）
- シャドウを多用しない。セクション分けは背景色の切り替えで表現する
- "Spiber" フォントの代わりに Noto Sans JP を指定しない。代替が必要な場合は **Inter**（Google Fonts）を使う

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px
- ナビゲーションリンクは line-height: 2.5（= 27.5px 相当）で確保

### フォントサイズの調整

- モバイルでは Display (h1) を 32px〜36px 程度に縮小
- Heading 2 を 28px〜32px 程度に縮小
- 本文は 16px を維持
- ナビゲーションの 11px は共通

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #121212（モノトーンパレット — ほぼ黒が唯一のブランドカラー）
Text Primary: #121212
Text Secondary: #a1a1a1
Background: #ffffff
Surface Light: #f2f2f2
Footer: bg #121212 / text #ffffff

Font (main): Spiber, "A+EqpB-游ゴシック体 Pr6N M", 游ゴシック, YuGothic,
  YuGoPr6N, ui-sans-serif, system-ui, sans-serif
Font (nav): Spiber, ui-sans-serif, system-ui, sans-serif
Font (preview substitute): Inter, 游ゴシック, YuGothic, sans-serif

Body: 16px / weight 400 / line-height: 1.5 / letter-spacing: normal
Display (h1): 60px / weight 500 / line-height: 1.1 / letter-spacing: -0.03em
Heading 2: 48px / weight 400 / line-height: 1.2 / letter-spacing: -0.03em
Nav: 11px / weight 700 / uppercase / small-caps / letter-spacing: 0.1em

OpenType: font-feature-settings: "palt" — グローバル適用
Buttons: pill (border-radius: 50px) — 全ボタン共通
```

### プロンプト例

```
Spiber のデザインに従って、プロジェクト一覧ページを作成してください。
- フォント: Inter, 游ゴシック, YuGothic, sans-serif（Spiber フォントの代替）
- テキスト色: #121212
- セカンダリテキスト: #a1a1a1
- 背景: #ffffff と #f2f2f2 をセクション交互に使用
- ボタン: pill 形状（border-radius: 50px）、#121212 塗り / 白文字
- 見出し: letter-spacing: -0.03em でタイトに詰める
- ナビ: 11px / bold / uppercase / small-caps / letter-spacing: 0.1em
- font-feature-settings: "palt" をグローバルに適用
- シャドウは使わず、セクション背景色で区切る
```
