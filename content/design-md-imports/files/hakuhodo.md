# DESIGN.md — Hakuhodo（博報堂）

> 博報堂（https://www.hakuhodo.co.jp/）のデザイン仕様書。
> 日本第2位の広告代理店。「生活者発想」を掲げるクリエイティブエージェンシーのコーポレートサイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ダークネイビー `#1a1a23` とビビッドレッド `#ff1a1a` の対比を軸にした、エディトリアル＋コーポレートのハイブリッド。大量の余白と大きな欧文見出しで広告代理店らしい「作品性」を演出
- **密度**: 情報密度は低め。ヒーロー・セクション見出しに 42〜80px の大きな欧文タイポグラフィを配置し、本文は 14〜16px でコンパクトにまとめる。雑誌的な「読ませる」レイアウト
- **キーワード**: エディトリアル、ビビッドレッド、ダークネイビー、二書体システム（和文＋欧文）、広告代理店の作品性
- **特徴**:
  - **二書体システム**: 和文に **Zen Kaku Gothic New**、欧文見出しに **sofia-pro-variable（Adobe Fonts）** を使い分ける。セクション見出しの英語ラベル（"Who We Are"、"What We Believe"）は sofia-pro-variable で大きく組み、和文本文は Zen Kaku Gothic New で読ませる
  - **ブランドカラーは `#ff1a1a`（ビビッドレッド）**。CTA のボーダー、テキストリンク、ピルバッジに使用。背景色としてはほぼ使わず、線・文字で効かせるのが特徴
  - **`font-feature-settings: "pwid"`（プロポーショナル字幅）をグローバル適用**。`palt`（プロポーショナル字詰め）ではなく `pwid` を選んでいる点が独自。全角英数字や約物の幅を可変にし、和欧混植の自然さを確保
  - **カテゴリバッジに蛍光色を使用**: ネオンイエロー `#e7ff33`（"サービス"）、ライトピンク `#ff8080`（"調査レポート"）。ブランドレッドとは別系統のアクセント
  - テキストカラーは `#1a1a23`（青みを帯びたニアブラック）。純黒 `#000000` ではなく、ダークネイビー寄りの色で文字の圧迫感を抑える
  - フッター・ダークセクションの背景も同じ `#1a1a23` を使い、テキストと面の色を統一
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Red** (`#ff1a1a`): メインのブランドカラー。CTA ボーダー、テキストリンク（"ニュース一覧"、"The H Magazine"）、ピルバッジに使用。背景色としては使わず、線・文字のアクセントとして効かせる
- **Neon Yellow** (`#e7ff33`): カテゴリバッジ "サービス" 等の背景色。蛍光感のある黄緑で、レッドとは補色関係に近い対比
- **Light Pink** (`#ff8080`): カテゴリバッジ "調査レポート" 等の背景色。Brand Red の明度を上げた派生色

### CTA / Buttons

- **Outline CTA**: 背景 `transparent` / 文字 `#ff1a1a` / border `1px solid #ff1a1a` / radius `4px` / 14〜16px / weight 500〜700
- **Card Surface**: 背景 `#ffffff` / radius `8px`
- **Nav Link**: 背景 `transparent` / 文字 `#1a1a23` / radius `8px`

### Neutral — Blue-Tinted Dark Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Navy | `#1a1a23` | (26, 26, 35) | 見出し・本文テキスト・フッター背景（**青み**: B>R=G） |
| Dark Gray | `#222222` | (34, 34, 34) | セカンダリテキスト |
| Medium Gray | `#99999d` | (153, 153, 157) | 補助テキスト・日付表示（**わずかに青み**） |
| Light Border | `#e5e5e6` | (229, 229, 230) | 区切り線・カードボーダー |
| Warm Beige | `#f4eee8` | (244, 238, 232) | セクション背景面（**暖色系**: R>G>B） |
| Light Surface | `#f5f5f5` | (245, 245, 245) | カード背景・セクション面 |
| Near White | `#fafafa` | (250, 250, 250) | 薄い背景面 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード面 |

### Semantic（実測未確認・推奨値）

実サイトにはエラー／成功色は表面化していない。コーポレートサイト向け推奨補完値:

- **Danger**: `#dc2626`
- **Success**: `#16a34a`
- **Warning**: `#d97706`

### Footer / Dark Section

- **Background**: `#1a1a23`（テキストカラーと同色のダークネイビー）
- **Text on Dark**: `#ffffff`（白）
- **Link on Dark**: `#ff1a1a`（ブランドレッド）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Zen Kaku Gothic New** を最優先。Google Fonts で配信される現代的なゴシック体
- **フォールバック**: `sans-serif`（実測上、フォールバックチェーンは短い）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **見出し専用**: **sofia-pro-variable**（Adobe Fonts）。セクション見出しの英語テキスト（"Who We Are"、"What We Believe"）やナビゲーションに使用
- 本文の欧文は Zen Kaku Gothic New の欧文グリフで処理。欧文専用フォントを本文にはさまない

### 3.3 font-family 指定

```css
/* 和文本文（body, h2, p, button, 大半の要素） */
font-family: "Zen Kaku Gothic New", sans-serif;

/* 欧文見出し（h3 英語ラベル、ヒーロー英語テキスト、ナビ英語） */
font-family: sofia-pro-variable, sans-serif;
```

**フォールバックの考え方**:
- Zen Kaku Gothic New は Google Fonts で配信されるため、ほぼすべての環境で表示可能。フォールバックチェーンを長くする必要がない
- sofia-pro-variable は Adobe Fonts のドメインライセンス。未契約環境ではシステムの sans-serif にフォールバック

> **代替フォント注記**: sofia-pro-variable が使えない環境では **Inter**（Google Fonts）が字形・ウェイトバリエーションの点で近い。preview.html はこの代替を使用。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／About ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero (EN) | sofia-pro-variable | 80px | **700** | — | — | `#1a1a23` | "Who We Are" 等のヒーロー英語テキスト |
| Section Head (EN) | sofia-pro-variable | 42px | **700** | — | -0.03em | `#1a1a23` | "What We Believe" 等のセクション英語見出し |
| Section Head (JP) | Zen Kaku Gothic New | 42px | **500** | 1.4 (58.8/42) | — | `#1a1a23` | 和文セクション見出し |
| Subsection (EN) | sofia-pro-variable | 32px | **500** | — | -0.04em | `#1a1a23` | 英語サブ見出し |
| Lead Text | Zen Kaku Gothic New | 22px | **500** | — | 0.03em | `#1a1a23` | リード文・概要テキスト |
| Article Title | Zen Kaku Gothic New | 19px | **500** | 1.4 (26.6/19) | — | `#1a1a23` | ニュース・記事タイトル |
| Body | Zen Kaku Gothic New | 16px | 400 | 1.15 (18.4/16) | — | `#1a1a23` | 本文（デフォルト） |
| Body (Wide) | Zen Kaku Gothic New | 14–15px | 400 | 1.5–1.8 | — | `#1a1a23` | 説明文・段落テキスト |
| Small Bold | Zen Kaku Gothic New | 14px | **700** | 1.4 (19.6/14) | — | `#1a1a23` | カテゴリラベル・強調小テキスト |
| Nav (EN) | sofia-pro-variable | 14px | 400 | — | — | `#1a1a23` | ナビゲーション英語テキスト |
| Caption | Zen Kaku Gothic New | 12–13px | 400 | 1.5 | — | `#99999d` | 日付・補助情報 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.15`（18.4px / 16px）— 非常にタイト。エディトリアル的な緊張感を作る
- **説明文 (14–15px)**: `1.5〜1.8` — 読ませるテキストは広めに取る
- **和文見出し (42px)**: `1.4`（58.8px / 42px）
- **記事タイトル (19px)**: `1.4`（26.6px / 19px）
- **小テキスト (14px bold)**: `1.4`（19.6px / 14px）

**字間 (letter-spacing)** — 実測:
- **リードテキスト (22px)**: `0.03em` — 日本語の可読性を上げる正のトラッキング
- **欧文見出し (32px)**: `-0.04em` — 強くタイトに詰める
- **欧文セクション見出し (42px)**: `-0.03em` — タイトに詰める
- **本文**: 明示的な letter-spacing なし（`pwid` に任せる）

**ガイドライン**:
- 博報堂の本文 line-height は `1.15` と非常にタイト。エディトリアルデザインの密度感を意図している
- 説明文・段落テキストでは `1.5〜1.8` に広げ、読みやすさを確保
- 欧文見出しは負のトラッキングで詰め、和文リードは正のトラッキングで開く対比構造

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
line-break: strict;            /* 厳格な禁則処理 */
```

- ヒーロー見出しや英語セクション見出しは固定テキストのため自然改行
- カテゴリバッジ・ピルは `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: "pwid";
```

- **`pwid`（プロポーショナル字幅）をグローバル適用**。`palt`（プロポーショナル字詰め）ではなく `pwid` を使っている
- `palt` が文字間の詰め（字面の左右空きを調整）であるのに対し、`pwid` は文字自体の送り幅を可変にする。全角英数字・約物がプロポーショナル幅になり、和欧混植が自然になる
- `kern` の明示的有効化は確認されなかった

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Outline CTA（レッドボーダー）** — "ニュース一覧"、"See More"
- Background: `transparent`
- Text: `#ff1a1a`
- Border: `1px solid #ff1a1a`
- Padding: `8px 16px`（推定）
- Border Radius: `4px`
- Font: Zen Kaku Gothic New, 14–16px, weight 500–700
- ホバー時: 背景 `#ff1a1a` / テキスト `#ffffff`（反転。推奨実装）

**Text Link** — 本文中のリンク、"The H Magazine" 等
- Background: transparent
- Text: `#ff1a1a`
- Border: none
- Font: Zen Kaku Gothic New, 14–16px, weight 400–500
- 必要に応じて underline

**Category Badge (Neon Yellow)** — "サービス"
- Background: `#e7ff33`
- Text: `#1a1a23`
- Padding: `4px 12px`
- Border Radius: `4px`
- Font: Zen Kaku Gothic New, 12–14px, weight 700

**Category Badge (Light Pink)** — "調査レポート"
- Background: `#ff8080`
- Text: `#ffffff`
- Padding: `4px 12px`
- Border Radius: `4px`
- Font: Zen Kaku Gothic New, 12–14px, weight 700

**Nav Link** — グローバルナビゲーション
- Background: transparent
- Text: `#1a1a23`
- Border Radius: `8px`
- Font: sofia-pro-variable（英語）/ Zen Kaku Gothic New（日本語）, 14px, weight 400

**Skip Link**
- Background: `#ffffff`
- Text: `#1a1a23`
- Border Radius: `4px`

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #e5e5e6`
- Border (focus): `1px solid #1a1a23`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: "Zen Kaku Gothic New", 16px, weight 400
- Height: `44px`

### Cards

- Background: `#ffffff`
- Border: none または `1px solid #e5e5e6`
- Border Radius: `8px`
- Shadow: 基本なし（フラット）
- ホバー時: `box-shadow: 0 4px 16px rgba(26, 26, 35, 0.08)` 程度（推奨）

### Header

- Background: `#ffffff`（または半透明白 + backdrop-blur。推奨）
- Border Bottom: `1px solid #e5e5e6`（推奨）
- Position: `fixed` or `sticky`

### Footer

- Background: `#1a1a23`（ダークネイビー）
- Text: `#ffffff`
- Link Color: `#ff1a1a`（ブランドレッド）
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | バッジ内の縦余白 |
| M | 16px | カード内の段落間・ボタンの横余白 |
| L | 24px | カードの内側余白・セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり・大セクションの区切り |

### Container

- Max Width: `1200px` 程度（エディトリアルレイアウトのため、記事部分はさらに狭い 800px 程度の場合もある）
- Padding (horizontal): mobile `16px` / desktop `24–32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 4px | CTA ボタン・バッジ・入力欄 |
| Medium | 8px | カード・ナビリンク |
| Large | 16px | 大きなカード・モーダル（推奨） |

### Grid

- 12 カラムグリッドが実装上自然
- Gutter: 24px
- ニュース一覧は 3〜4 カラムのカードグリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ほぼ全要素（基本フラット） |
| 1 | `0 2px 8px rgba(26, 26, 35, 0.06)` | カードホバー（推奨） |
| 2 | `0 4px 16px rgba(26, 26, 35, 0.08)` | ドロップダウン・ポップオーバー |
| 3 | `0 8px 32px rgba(26, 26, 35, 0.12)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼフラットデザイン。影は控えめ
- 立体感は **ダークネイビー `#1a1a23` の面** と **ウォームベージュ `#f4eee8` の面**、**ライトグレー `#f5f5f5` の面** のコントラストで表現
- 影を使う場合は `rgba(26, 26, 35, ...)` でテキストカラーと色相を揃える（純黒の影は避ける）

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **Zen Kaku Gothic New**、欧文見出しは **sofia-pro-variable**（またはその代替 Inter）の二書体を使い分ける
- **`font-feature-settings: "pwid"`** をグローバルに適用する（`palt` ではない）
- ブランドレッド `#ff1a1a` は**線・文字・ボーダー**で使い、背景色としてはほぼ使わない
- CTA は **`transparent` 背景 + `#ff1a1a` ボーダー + `#ff1a1a` テキスト** のアウトラインスタイル
- テキストカラーは **`#1a1a23`**（青みのダークネイビー）を使い、純黒 `#000000` は避ける
- カテゴリバッジには **蛍光色**（`#e7ff33`、`#ff8080`）を使い、コンテンツの種類を色で区別する
- 欧文見出しは **負のトラッキング**（-0.03em〜-0.04em）でタイトに、和文リードは **正のトラッキング**（0.03em）で開く
- フッター・ダーク面は `#1a1a23` で統一し、テキスト白 + リンク赤の配色にする
- 影の色相はテキストカラー `#1a1a23` に揃える（`rgba(26, 26, 35, ...)` を使う）

### Don't（禁止）

- **`palt` を使わない** — 博報堂は `pwid` を採用している。混同しないこと
- **CTA の背景を `#ff1a1a` で塗りつぶさない** — ブランドレッドはアウトライン（ボーダー＋文字色）で使うのが基本
- **テキストに純黒 `#000000` を使わない** — `#1a1a23` のダークネイビーがブランドの文字色
- **欧文見出しに Zen Kaku Gothic New を使わない** — 英語セクション見出しは sofia-pro-variable（またはその代替）で組む
- **和文本文に sofia-pro-variable を使わない** — 日本語グリフがないため表示できない
- **カテゴリバッジの蛍光色を CTA に使わない** — `#e7ff33` と `#ff8080` はバッジ専用。CTA は `#ff1a1a` のレッド
- **`border-radius: 9999px`（ピル）を多用しない** — 博報堂のボタンは `4px` の角丸。ピルスタイルではない
- **冷たいグレー**（`#6b7280`、`#9ca3af` 等）をテキストに使わない — `#99999d` の青みグレーがブランドの補助テキスト色

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | — | 〜767px。モバイルレイアウト |
| Tablet | 768px | タブレット。2カラムに切り替え |
| Desktop | 1024px | デスクトップ。フルナビゲーション表示 |
| Wide | 1280px | 広いデスクトップ。コンテンツの最大幅に達する |

### モバイル時の調整

- ヒーロー英語テキスト: 80px → 40–48px
- セクション見出し (42px): → 28–32px
- リードテキスト (22px): → 18–20px
- 本文サイズは 14–16px を維持
- ナビゲーションはハンバーガーメニューに切り替え

### タッチターゲット

- CTA ボタン: 高さ 44px 以上（padding + font + line-height で確保）
- カテゴリバッジ: タップターゲットとして 32px 程度を確保
- 最小サイズ: 44px x 44px（WCAG 基準）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red (CTA border/text): #ff1a1a
Neon Yellow (category badge): #e7ff33
Light Pink (category badge): #ff8080
Dark Navy (text/footer bg): #1a1a23
Secondary Text: #222222
Medium Gray (caption): #99999d
Light Border: #e5e5e6
Warm Beige Surface: #f4eee8
Light Surface: #f5f5f5
White: #ffffff

JP Font: "Zen Kaku Gothic New", sans-serif
EN Font: sofia-pro-variable, sans-serif
（sofia-pro-variable 不在時の代替: Inter）

OpenType: font-feature-settings: "pwid"

Body Size: 16px / line-height 1.15 / weight 400
Lead Text: 22px / weight 500 / letter-spacing 0.03em
JP Heading: 42px / weight 500 / line-height 1.4
EN Heading: 42px / weight 700 / letter-spacing -0.03em (sofia-pro-variable)
EN Hero: 80px / weight 700 (sofia-pro-variable)
EN Subsection: 32px / weight 500 / letter-spacing -0.04em
Article Title: 19px / weight 500 / line-height 1.4
Small Bold: 14px / weight 700 / line-height 1.4

Border Radius: 4px（ボタン・バッジ）/ 8px（カード）
Shadow: 基本 none。立体感はダーク面 #1a1a23 と面色 #f4eee8 / #f5f5f5 で表現
```

### プロンプト例

```
博報堂のデザインに従って、コーポレートサイトのニュースセクションを作成してください。
- 和文フォント: "Zen Kaku Gothic New", sans-serif
- 欧文見出しフォント: sofia-pro-variable, sans-serif（代替: Inter）
- font-feature-settings: "pwid"（グローバル適用）
- セクション見出し（英語）: sofia-pro-variable / 42px / weight 700 / letter-spacing -0.03em / color #1a1a23
- セクション見出し（日本語）: Zen Kaku Gothic New / 42px / weight 500 / line-height 1.4 / color #1a1a23
- リードテキスト: 22px / weight 500 / letter-spacing 0.03em / color #1a1a23
- 記事タイトル: 19px / weight 500 / line-height 1.4 / color #1a1a23
- 本文: 16px / weight 400 / line-height 1.15 / color #1a1a23
- 日付・補助: 12–13px / weight 400 / color #99999d
- CTA: 背景 transparent / 文字 #ff1a1a / border 1px solid #ff1a1a / radius 4px
- カテゴリバッジ（サービス）: 背景 #e7ff33 / 文字 #1a1a23 / radius 4px
- カテゴリバッジ（レポート）: 背景 #ff8080 / 文字 #ffffff / radius 4px
- カード: 背景 #ffffff / radius 8px / shadow none
- 区切り線: #e5e5e6
- フッター: 背景 #1a1a23 / 文字 #ffffff / リンク #ff1a1a
- テキスト色は #1a1a23（純黒 #000000 は使わない）
- CTA 背景にブランドレッドを塗りつぶさない（ボーダー＋文字色で使う）
- palt ではなく pwid を使う
```
