# DESIGN.md — Loftwork (ロフトワーク)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://loftwork.com/jp/
> Loftwork（ロフトワーク）は「創造性」を掲げるクリエイティブカンパニー。
> 白と温かいクリームの下地に、シグネチャーの鮮烈なイエロー `#ffe600` と紺、そして
> 巨大な見出しタイポグラフィ（最大 112px 前後）でエディトリアルかつ大胆に組む。
> 実測はトップ / service / about に基づき、`--lw-*` のデザイントークンが明快に定義されている。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白と温かいクリーム下地の上に、巨大な見出しと大きな余白でエディトリアルに構成する。シグネチャーの鮮烈なイエロー `#ffe600` を CTA・強調・ブロックのアクセントに効かせ、クリエイティブな熱量と知性を同居させる
- **密度**: 低〜中密度。見出しは非常に大きく（デスクトップで 51〜112px）、和文本文は **line-height 1.9〜2.0** と広く取り、ゆとりを持って読ませる
- **キーワード**: クリエイティブ / エディトリアル / 大胆 / イエロー / 知的
- **形状言語**: シグネチャー CTA（Contact 等）は**角丸ゼロ（`border-radius: 0`）のイエロー面**。方形の強い矩形を基調に、装飾は最小限。副次的な同意ボタン等でのみピル（radius 42px）を使う
- **書体の性格**: 和文見出しは Morisawa **見出ゴ MB31**（重厚なディスプレイゴシック）、欧文見出しは **proxima-nova**、和文本文は **Hiragino 角ゴ Pro＋YakuHanJP**（約物半角化）、そして小さなラベルに **Libre Baskerville（セリフ）** をゴールドで差す。多書体を役割で使い分け、雑誌的なコントラストを作る

---

## 2. Color Palette & Roles

<!-- 実サイトの CSS Custom Property（--lw-*）実測に基づく。基調は「白／クリーム下地＋鮮烈イエロー＋紺」 -->

### Base（下地）

- **Background** (`#ffffff`): 基本の下地（`--lw-bg`）。純白
- **Background Alt** (`#fafafa`): 一段沈めた面（`--lw-bg-alt`）
- **Background Deep** (`#f4f1ea`): 温かいクリーム。特集・引用ブロックの下地に使う（`--lw-bg-deep`）
- **Line** (`#e5e5e5`): 区切り線・淡い罫（`--lw-line`）

### Brand（ブランド）

- **Signature Yellow** (`#ffe600`): Loftwork のシグネチャーカラー（`--lw-yellow`）。CTA 面・ハイライト・ブロックのアクセントに効かせる
- **Yellow Soft** (`#fff59a`): マーカー・淡い強調（`--lw-yellow-soft`）
- **Gold** (`#c0a700`): Libre Baskerville のセリフラベル等に使う沈んだ金（`--lw-gold`）

### Ink（文字色）

- **Ink** (`#1a1a1a`): 見出し・本文の基調（`--lw-ink`）。純黒は使わない
- **Ink 2** (`#4a4a4a`): 本文・リード（`--lw-ink-2`）
- **Ink 3** (`#8a8a8a`): 注釈・補足（`--lw-ink-3`）

### Accent（差し色）

- **Navy** (`#1a2040`): 濃紺。ダークセクションの下地・見出しに（`--lw-navy`）
- **Navy Soft** (`#2d3454`): 濃紺の一段明るい面（`--lw-navy-soft`）
- **Red** (`#ee4444`): 限定的な警告・強調の赤（`--lw-red`）

### 色に関する設計思想

- 下地は白 `#ffffff` と温かいクリーム `#f4f1ea` の対比。文字は純黒を避けた `#1a1a1a`
- ブランドの芯は鮮烈なイエロー `#ffe600`。CTA・強調・ブロックのアクセントに効かせ、面で大胆に使う数少ない色
- 紺 `#1a2040` はダークセクションで白文字と組み、イエローとのコントラストを作る
- ゴールド `#c0a700` は Libre Baskerville のセリフラベル専用のニュアンスカラー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: **YakuHanJP**（約物を半角化する Web フォント）＋ ヒラギノ角ゴ Pro（`Hiragino Kaku Gothic Pro`）→ メイリオ → Osaka → MS Pゴシック（`--font-jp`）
- **ゴシック体（見出し）**: Morisawa **見出ゴ MB31 Pr6N**（`a-otf-midashi-go-mb31-pr6n`）。重厚なディスプレイゴシックで大見出しに使う
- **明朝体**: 使用しない（セリフは欧文の Libre Baskerville のみ）

> **YakuHanJP について**: 句読点・括弧などの約物を半角幅で表示する Web フォント。見出しの字間を締めて欧文的なリズムを作るために、和文フォントの先頭に置いている。

### 3.2 欧文フォント

- **サンセリフ（見出し・ナビ）**: **proxima-nova**（Adobe Fonts。weight 700〜900）。英字ディスプレイ・グローバルナビに使う
- **セリフ（アクセントラベル）**: **Libre Baskerville**（`--font-accent`）。小さな英字ラベルにゴールドで添える
- **等幅**: `ui-monospace`, "SF Mono", Menlo, Consolas, monospace（`--font-mono`）

> **代替フォントの注記**: proxima-nova / 見出ゴ MB31 は Adobe / Morisawa のライセンスフォントのため、ローカル・preview.html では表示できない。
> - proxima-nova → **Mulish** / Montserrat 系（ヒューマニスト・ジオメトリックで印象が近い）
> - 見出ゴ MB31（Morisawa）→ **Zen Kaku Gothic New**（Morisawa 系で字形が近い）weight 700/900
> - Hiragino 角ゴ Pro（本文）→ **Noto Sans JP**（環境非依存）
> - Libre Baskerville は Google Fonts で直接読み込めるため、preview はそのまま使う

### 3.3 font-family 指定

```css
/* 本文・UI（和文, --font-jp） */
font-family: YakuHanJP, "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", Arial, sans-serif;

/* 和文の大見出し（Morisawa 見出ゴ MB31） */
font-family: a-otf-midashi-go-mb31-pr6n, YakuHanJP, "Hiragino Kaku Gothic Pro", sans-serif;

/* 英字見出し・ナビ */
font-family: proxima-nova, sans-serif;

/* セリフのアクセントラベル（--font-accent） */
font-family: "Libre Baskerville", Georgia, "Times New Roman", serif;

/* 等幅（--font-mono） */
font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
```

**フォールバックの考え方**:
- 和文本文は YakuHanJP を先頭に置き、約物を半角化してからヒラギノ角ゴ Pro で本文グリフを拾う
- 大見出しは Morisawa 見出ゴ MB31 → YakuHanJP → ヒラギノ の順
- 英字は proxima-nova を独立指定。小ラベルのみ Libre Baskerville でセリフの表情を足す

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero (EN) | proxima-nova | 112px | 700–900 | 0.95 | normal | トップの巨大英字（CREATIVE 等） |
| Hero (JP) | 見出ゴ MB31 | 76.8px | 700 | 1.4 | 0.01em | 大見出し（戦略を、ひらく。） |
| Heading 1 (JP) | 見出ゴ MB31 | 51.2px | 700 | 1.45 | 0.01em | セクション大見出し |
| Heading 2 (JP) | 見出ゴ MB31 | 36px | 700 | 1.4 | 0.01em | サブ見出し |
| Heading 3 (JP) | 見出ゴ MB31 | 22.4–32px | 700 | 1.4–1.5 | 0.01em | 小見出し |
| Statement (JP) | 見出ゴ MB31 | 40px | 700 | 1.5 | 0.045em | 標語・大きな引用 |
| Lead (JP) | Hiragino + YakuHanJP | 19.2px | 400 | 2.0 | normal | リード文（Ink 2） |
| Body (JP) | Hiragino + YakuHanJP | 16px | 400 | 1.95 | normal | 本文（Ink 2） |
| Body S (JP) | Hiragino + YakuHanJP | 14px | 400 | 1.9 | 0.07em | 小本文 |
| Serif Label (EN) | Libre Baskerville | 14px | 400 | 1.6 | normal | ゴールドの英字ラベル |
| Nav (EN) | proxima-nova | 14–18px | 700 | 1.0 | normal | グローバルナビ |

### 3.5 行間・字間

- **和文本文の行間 (line-height)**: **`1.9〜2.0`**（16px 本文で 31px、19.2px リードで 38.4px）。読み物としてかなり広く取る
- **見出しの行間**: `1.4〜1.5`（見出ゴ MB31）／英字ヒーローは `0.95`
- **本文の字間 (letter-spacing)**: リード・本文は `normal`。小本文（14px）は `1px`（≒`0.07em`）、標語（22–40px）は `0.045〜0.09em` とやや開く
- **見出しの字間**: `0.01em` 前後（大きなサイズでは僅かに開く程度）

**ガイドライン**:
- 和文本文は line-height 1.9〜2.0 を確保するのがこのブランドの特徴。ゆとりが知的な印象を作る
- 大見出しは見出ゴ MB31 の重厚さで見せ、字間はほぼ締める（YakuHanJP で約物半角）
- 標語・大きな引用だけ字間をやや開き、静かな強さを出す

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
/* YakuHanJP により約物（、。「」（）等）は半角幅で表示される */
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
/* YakuHanJP を先頭に置くことで約物半角を実現。palt に依存しない */
font-feature-settings: normal;
```

- 約物の詰めは `palt` ではなく **YakuHanJP（約物半角の Web フォント）** で実現している
- 見出しはこれにより欧文的なタイトなリズムを持つ。本文は字間を開けず素直に組む

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

シグネチャーはイエロー面・角丸ゼロの矩形 CTA。

**Primary（シグネチャー・イエロー）**
- Background: `#ffe600`
- Text: `#1a1a1a`
- Border: なし
- Border Radius: `0px`（角丸ゼロの矩形）
- Padding: `18px 32px`
- Font: 14–16px / weight 700
- 例: 「Contact」「資料ダウンロード」

**On Dark（紺セクション内）**
- Background: `#1a2040`（または透明＋白罫）
- Text: `#ffffff`
- Border Radius: `0px`
- ダークセクションで白文字＋イエローのアクセントと組む

**Pill（副次・同意等）**
- Background: `#2d3454`〜`#425b76`
- Text: `#ffffff`
- Border Radius: `42px`（ピル）
- Cookie 同意など限定的な用途にのみ使う

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e5e5e5`
- Border (focus): `2px solid #1a1a1a`（またはイエロー `#ffe600` の下線）
- Border Radius: `0px`
- Padding: `14px 16px`
- Font Size: 16px

### Cards

- Background: `#ffffff`（特集は `#f4f1ea` のクリーム）
- Border: `1px solid #e5e5e5` または枠なし
- Border Radius: `0px`（矩形）
- Shadow: なし〜ごく浅い
- プロジェクトカードは大判写真＋タイトル（見出ゴ）＋タグ（#教育 等）＋クライアント名

---

## 5. Layout Principles

### Spacing Philosophy

巨大な見出しと大きな余白で、雑誌の見開きのように構成する。白とクリームのブロックを積み、要所にイエローと紺のセクションを差し込んでリズムを作る。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 48px |
| XL | 80px |
| XXL | 120px |

### Container

- Max Width: 1280px（ヒーロー・写真はフルブリード）
- Padding (horizontal): 24–48px

### Grid

- Columns: 12（プロジェクト一覧は 2〜3 カラム）
- Gutter: 24–40px
- 大判写真と巨大見出しを組み合わせ、余白を大きく取る

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。矩形の面はフラット |
| 1 | `0 2px 8px rgba(26,26,26,0.08)` | カードのホバー |
| 2 | `0 12px 32px rgba(26,26,26,0.14)` | モーダル・フローティング |

- 奥行きは「イエロー／紺／クリームの色面ブロック」と「巨大な余白」で表現し、影は控えめに

---

## 7. Do's and Don'ts

### Do（推奨）

- 下地は白 `#ffffff` と温かいクリーム `#f4f1ea`、文字は純黒を避けた `#1a1a1a`／`#4a4a4a`
- シグネチャーのイエロー `#ffe600` を CTA・強調・ブロックのアクセントに大胆に効かせる
- 見出しは巨大に（デスクトップ 51〜112px）、和文本文は line-height 1.9〜2.0 で広く取る
- 和文見出しは見出ゴ MB31（→ Zen Kaku Gothic New 代替）、英字は proxima-nova（→ Mulish 代替）
- 和文本文は YakuHanJP＋ヒラギノ角ゴ Pro（→ Noto Sans JP 代替）で組み、約物を半角化する
- シグネチャー CTA は角丸ゼロのイエロー矩形。小さな英字ラベルは Libre Baskerville をゴールドで

### Don't（禁止）

- 純黒 `#000000` を本文に使わない（`#1a1a1a` を使う）
- イエローを弱めない（薄いパステルにせず、鮮烈な `#ffe600` を保つ）
- 和文本文の line-height を 1.7 未満に詰めない（ゆとりが世界観の核）
- シグネチャー CTA を丸くしない（イエロー面は角丸ゼロの矩形）
- 和文フォント1つだけを指定しない（YakuHanJP → ヒラギノ → フォールバックのチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。ナビはハンバーガー＋モーダルメニュー |
| Tablet | ≤ 1024px | 1〜2 カラム |
| Desktop | > 1024px | 2〜3 カラム＋フルブリード写真 |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- 巨大な見出し（76〜112px）はモバイルで 32〜48px 程度に大きく縮小する
- 本文は 16px を確保し、line-height 1.9〜2.0 を維持する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:   #ffffff / #f4f1ea（クリーム）
Ink:          #1a1a1a / #4a4a4a / #8a8a8a（純黒は使わない）
Signature:    #ffe600（イエロー）
Navy:         #1a2040 / #2d3454
Line:         #e5e5e5
Gold:         #c0a700（Libre Baskerville ラベル）
Font(JP本文): YakuHanJP, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif（→ Noto Sans JP 代替）
Font(JP見出): a-otf-midashi-go-mb31-pr6n（見出ゴ MB31, → Zen Kaku Gothic New 代替）
Font(EN):     proxima-nova（→ Mulish 代替）
Font(Serif):  "Libre Baskerville", Georgia, serif
Body Size:    16px
Line Height:  1.9〜2.0（和文本文）
palt:         off（約物半角は YakuHanJP で実現）
Button(主):   #ffe600 bg / #1a1a1a / radius 0（角丸ゼロの矩形）
Card:         radius 0 / shadow なし
```

### プロンプト例

```
Loftwork のデザインシステムに従って、クリエイティブ会社のプロジェクト紹介セクションを作成してください。
- 下地: #ffffff と温かいクリーム #f4f1ea、文字: #1a1a1a / #4a4a4a（純黒は使わない）
- シグネチャーのイエロー #ffe600 を CTA・強調に大胆に効かせる（紺 #1a2040 のダークブロックも差し込む）
- 和文見出しは Morisawa 見出ゴ MB31（→ Zen Kaku Gothic New 代替）で巨大に（デスクトップ 51〜76px）
- 英字見出し・ナビは proxima-nova（→ Mulish 代替）、小さな英字ラベルは Libre Baskerville をゴールド #c0a700 で
- 和文本文は YakuHanJP＋ヒラギノ角ゴ Pro（→ Noto Sans JP 代替）、16px / line-height 1.9〜2.0
- 主 CTA（Contact / 資料ダウンロード）は #ffe600 面・#1a1a1a 文字・border-radius: 0 の矩形
- プロジェクトカードは大判写真＋見出しゴのタイトル＋タグ（#教育 等）、角丸ゼロ・影なし
```

### ライセンスフォントが使えない環境での代替指針

- 英字 proxima-nova → **Mulish** / Montserrat 系
- 和文見出 見出ゴ MB31（Morisawa）→ **Zen Kaku Gothic New**（Morisawa 系, weight 700/900）
- 和文本文 ヒラギノ角ゴ Pro → **Noto Sans JP**
- 欧文セリフ Libre Baskerville は Google Fonts で直接利用可
- 代替でも「白／クリーム下地・鮮烈イエロー #ffe600 のアクセント・巨大見出し・広い本文行間（1.9〜2.0）・角丸ゼロの矩形 CTA」を守れば世界観は再現できる
