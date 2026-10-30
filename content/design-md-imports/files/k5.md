# DESIGN.md — K5（ケーファイブ）

> K5（K5 NIHOMBASHI KABUTOCHO, TOKYO / https://k5-tokyo.com/ ）のデザイン仕様書。
> 1923 年築の旧第一銀行別館を、スウェーデンの建築スタジオ Claesson Koivisto Rune が改装した日本橋兜町のブティックホテル（ミシュラン 1 キー）。
> 設計思想は日本語の「曖昧（Aimai）」。光と影、内と外の境界をぼかす。
> 最大の特徴は **写真主導の余白** と **極細ウェイト（weight 200–300）の游ゴシック＋カスタム書体 K5type**、そして全体に効いた **palt**。
> 実サイト（WordPress）の computed style 実測（2026-06-27 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白面（#ffffff）と大判写真 × 極細タイポグラフィ** による、静かで余韻のあるエディトリアルデザイン。色をほぼ排し、写真のトーンと余白、そして繊細な細字で空気感（曖昧さ）を表現する
- **K5 について**: 銀行建築をリノベートした複合ホテル。客室に加えてレストラン Caveman、ワインバー、Brooklyn Brewery、ライブラリーバー「青（Ao）」、Switch Coffee などを内包する。建築・空間・グラフィックが一貫したトーンで設計されている
- **密度**: 低密度。大きな写真、広い余白、抑制された文字量。本文 line-height は 1.8 とゆったり。読み物・施設紹介を静かに見せる
- **キーワード**: 白面、大判写真、極細ウェイト、游ゴシック、K5type、palt、曖昧、エディトリアル、ディープブルー
- **特徴**:
  - 基調は **白 #ffffff × ブラック #000000** のモノクローム。ヒーローは大判写真（青みのトーンが多い）でブランドの静けさを作る
  - タイポグラフィは **極細（weight 200–300）** が全面。游ゴシック＋カスタム書体 **K5type** を細く組み、繊細で上品な印象を出す
  - **font-feature-settings: "palt" がグローバルに適用**。和文を詰めて端正に見せる（このサイトの重要な特徴）
  - 和文は **游ゴシック体**（チェーン `游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic"`）、欧文ディスプレイは **K5type**
  - アクセントは **オレンジ #F15A24**（言語切替「JA」等のハイライト）と **ディープブルー #014460**。ごく限定的に使う
  - 角丸は **0px**。ボタンも枠線も矩形。CTA は塗りつぶさず、細字テキスト＋下線/矢印で誘導
  - letter-spacing は約 0.05em（本文）〜0.0625em（ナビ）。細字に空気を含ませる

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値＋WordPress テーマの CSS Custom Properties。基調は白×黒のモノクローム。すべて hex 表記。

### Brand / Core

- **Background (White)** (`#ffffff`): コンテンツ面・メインキャンバス（`--color-white`）
- **Ink (Black)** (`#000000`): 見出し・本文の基本テキスト（`--color-black`）
- **Hero / Letterbox (Black)** (`#000000`): ヒーロー・ローディング・余白の地（body 実測。大判写真の額縁）
- **On Image Text** (`#ffffff`): 写真・黒地上のテキスト（ヒーローの "K5" ロゴ等）

### Accent / Semantic（CSS Custom Properties 実測）

| Token | hex | 役割 |
|-------|-----|------|
| `--color-orange` | `#F15A24` | アクセント（言語切替ハイライト・強調） |
| `--color-blue` | `#014460` | ディープブルー（限定アクセント） |
| `--color-glass-white` | `rgba(255,255,255,0.6)` | 写真上のすりガラス面 |
| `--color-glass-gray` | `rgba(180,180,180,0.6)` | すりガラス（グレー） |

### Neutral / Grey（CSS Custom Properties 実測）

| Token | hex | 用途 |
|-------|-----|------|
| `--color-light-gray` | `#F2F2F2` | 淡い面・区切り |
| `--color-gray` | `#B3B3B3` | 補助テキスト・罫・プレースホルダ |
| `--color-dark-gray` | `#808080` | サブテキスト |
| Cookie / UI Grey | `#7f8181` | 同意バー・UI テキスト |
| Text (UI) | `#222222` / `#333333` | UI ラベル |

---

## 3. Typography Rules

> 和文は **游ゴシック体**（極細）、欧文ディスプレイは **カスタム書体 K5type**。全体に **palt** が効く。
> K5type は独自フォントのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体（`游ゴシック体` → `YuGothic` → `游ゴシック` → `"Yu Gothic"`）。ウェイトは 200〜300（極細〜細）
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **ディスプレイ**: K5type（カスタム書体。見出し・ナビ・ロゴ "K5"）
- **本文サンセリフ**: 游ゴシックのラテングリフ

### 3.3 font-family 指定

```css
/* 本文・和文（実測） */
font-family: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", -apple-system, sans-serif;
font-weight: 300;
font-feature-settings: "palt";        /* グローバルに適用 */
letter-spacing: 0.05em;

/* 見出し・ナビ・ロゴ */
font-family: K5type, 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif;
font-weight: 200;                      /* 極細 */
```

- **フォールバックの考え方**: 見出しは K5type を先頭に、無ければ游ゴシック体に委ねる。本文は游ゴシック体先頭の和文優先型。`-apple-system` で macOS/iOS をカバー
- **重要**: `font-feature-settings: "palt"` が body から全体に適用される（和文の字詰め）

**preview.html での代替フォント**:
- K5type → **Jost**（Google Fonts。weight 200/300 の幾何学的細字で K5type の繊細さに寄せる）
- 游ゴシック体（極細）→ **Noto Sans JP**（weight 300）または **Zen Kaku Gothic New**（weight 300）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Logo | K5type | ~48px+ | 200 | 1.0 | normal | "K5"（写真上・白） |
| Heading 1 | K5type | 18.9px | 200 | 1.0 | normal | コンテンツ見出し（極細） |
| Heading 2 | K5type / 游ゴシック | 22.5px | 200 | 1.0–1.8 | 0.75px (0.03em) | "Events & News" / "K5 Story" |
| Heading 4 | K5type / 游ゴシック | 20.6px | 300 | 1.5 | 0.75px (0.04em) | 記事タイトル |
| Body | 游ゴシック体 | 15px | 300 | 1.8 | 0.75px (0.05em) | 本文 |
| Nav | K5type / 游ゴシック | 13–16px | 300 | 1.8 | 1px (0.06em) | グローバルナビ |
| Nav (Small) | K5type | 10px | 300 | 1.8 | 1px (0.1em) | Instagram 等の小ナビ |
| Caption | 游ゴシック体 | 12px | 300 | 1.8 | 0.75px | 補助・日付 #B3B3B3 |

- 全体に **極細ウェイト（200〜300）** を貫く。太字でメリハリをつけず、サイズと余白で階層を作る

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（15px / 26.98px）。日本語の細字をゆったり読ませる
- **見出しの行間**: 1.0〜1.8（短い見出しはタイト、複数行はゆったり）
- **本文の字間 (letter-spacing)**: 0.05em（細字に空気を含ませる）
- **ナビの字間**: 0.06〜0.1em

**ガイドライン**:
- 極細ウェイト＋palt＋letter-spacing 0.05em が K5 のトーンの核。和文を詰めつつ字間で抜け感を出す
- 本文は line-height 1.8 を基準に、白の余白を広く取る

### 3.6 禁則処理・改行ルール

```css
font-feature-settings: "palt";   /* 必須：和文の字詰め */
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";   /* グローバル適用（実測） */
```

- **palt**: 本サイトの重要な特徴。body から全要素にプロポーショナル字詰めが効く。見出しだけでなく本文にも適用されている
- 極細ウェイトと組み合わせ、繊細で端正な和文組版を実現する

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Primary（テキスト CTA・写真上）**
- Background: `transparent`
- Text: `#ffffff`（写真・黒地上）/ `#000000`（白地上）
- Border: なし
- Padding: 12px 15px
- Border Radius: `0px`
- Font Size: 15–18px
- Font Weight: 300（"BOOK A STAY" / "Read More"）
- 下線または矢印で誘導。塗りつぶさない

**UI / 同意系**
- Background: `#7f8181`（Accept）/ `#f9f9f9`（Deny・View preferences）
- Text: `#ffffff` / `#222222`
- Border: 1px solid `#f2f2f2` 〜 `#7f8181`
- Padding: 10px
- Border Radius: `0px`
- Font Size: 15px / Weight 500

### Inputs

- Background: `transparent` / `#ffffff`
- Border: 1px solid `#B3B3B3`（細い罫）
- Border Radius: `0px`
- Padding: 10px 12px
- Font Size: 15px
- Font Family: 游ゴシック体チェーン / Weight 300

### Cards（施設・記事）

- Background: `#ffffff`
- Border: なし（写真と余白で区切る）
- Border Radius: `0px`
- 大判写真を上部に、下に極細の見出し（K5type）と日付（#B3B3B3）
- 影は使わない（フラット・写真主導）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 32px |
| XL | 64px |
| XXL | 120px |

### Container

- Max Width: 約 1200〜1400px（大判写真はフルブリードも多用）
- Padding (horizontal): 20〜40px

### Grid

- Columns: 施設・記事グリッドは 2〜3 カラム
- Gutter: 24〜40px
- フルブリードの大判写真と、余白の広いテキストブロックを交互に配置

---

## 6. Depth & Elevation

> K5 はほぼフラット。影を使わず、白の余白・大判写真・すりガラス面（glass-white/gray）で奥行きを表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | セクション・カード（基本フラット） |
| 1 | `rgba(255,255,255,0.6)` のすりガラス面 | 写真上のオーバーレイ（`--color-glass-white`） |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・ドロワー（控えめ） |

---

## 7. Do's and Don'ts

### Do（推奨）

- 白面 #ffffff と大判写真を主役にし、余白を広く取る
- タイポグラフィは極細ウェイト（200〜300）で統一し、繊細・上品に組む
- `font-feature-settings: "palt"` をグローバルに適用して和文を詰める
- 本文は游ゴシック体・line-height 1.8・letter-spacing 0.05em
- アクセント（オレンジ #F15A24 / ブルー #014460）はごく限定的に使う

### Don't（禁止）

- 太字（700 以上）でメリハリをつけない（極細が基調。太字は世界観を壊す）
- 角丸を使わない（矩形・直線が基本、radius 0px）
- CTA を鮮やかな色で塗りつぶさない（テキスト＋下線/矢印で誘導）
- 色を足しすぎない（モノクローム＋限定アクセント）
- palt を外さない（和文の字詰めが K5 のトーンの核）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1 カラム、ナビはハンバーガー |
| Tablet | 768–1024px | 2 カラム |
| Desktop | > 1024px | 2〜3 カラム＋フルブリード写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- ヒーローロゴ・見出しはビューポートに応じて可変。本文はモバイルでも 15px 前後を保つ
- 極細ウェイトはモバイルの小サイズで可読性が落ちやすいので、12px 未満では weight 300 を下限にする

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000000 (Ink)
Background: #ffffff (White) / Hero #000000 (写真の額縁)
Accent: #F15A24 (Orange), #014460 (Deep Blue)  ※ごく限定的に
Font (heading): K5type, 游ゴシック体, sans-serif  /* 代替: "Jost", "Noto Sans JP" */
Font (body): 游ゴシック体, YuGothic, "Yu Gothic", sans-serif
Weight: 200 (heading) / 300 (body)  ← 極細が基調
Body Size: 15px
Line Height: 1.8
Letter Spacing: 0.05em
font-feature-settings: "palt"  ← グローバル適用
Radius: 0px
```

### プロンプト例

```
K5（ホテル）のデザインシステムに従って、施設紹介ページを作成してください。
- 背景: #ffffff（白）、テキスト: #000000。ヒーローは大判写真＋白文字
- フォント: 見出し K5type→游ゴシック体（代替 Jost + Noto Sans JP）、本文 游ゴシック体
- ウェイトは極細で統一（見出し 200 / 本文 300）。太字は使わない
- font-feature-settings: "palt" をグローバルに適用、本文 line-height 1.8・letter-spacing 0.05em
- 角丸 0px、影なしのフラット。CTA はテキスト＋下線/矢印で塗りつぶさない
- アクセント（オレンジ #F15A24・ブルー #014460）はごく限定的に
```
