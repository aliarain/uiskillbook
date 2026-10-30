# DESIGN.md — Discover Japan (ディスカバー・ジャパン)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://discoverjapan-web.com/
> Discover Japan は「日本の魅力、再発見」をテーマにした雑誌・Web メディア。旅・工芸・食・宿を扱う。
> 実測は WordPress ベースのメディア トップに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 和文明朝＋欧文セリフで組む端正なエディトリアル。雑誌の表紙・大判写真を主役に、罫と余白で品よく区切る
- **密度**: 中密度。誌面のように情報を整然と並べつつ、見出しまわりに余白を効かせる
- **キーワード**: エディトリアル / 和モダン / 上質 / 明朝 / 誌面的
- **形状言語**: タグ・ボタンは角丸ゼロ（`border-radius: 0`）の直線基調。セクション見出しには**左の縦罫**を添える誌面的なあしらい。曲線・強い影は使わない
- **書体の性格**: 本文・和文見出しは **游明朝（Yu Mincho）**、英字の大見出しは **Cormorant SC**（オールドスタイルのセリフ・スモールキャップス）。キャプションだけヒラギノ角ゴの細ウェイトで軽くする、明朝主体の格調ある設計

---

## 2. Color Palette & Roles

<!-- 実サイトの computedStyles / interactive 実測に基づく。WordPress の preset ではなく実測色を採用 -->

### Base（下地）

- **Background** (`#ffffff`): ページ全体の下地。純白
- **Surface Blue** (`#f1f4fa`): サイドバー・特集エリアの面色。ごく淡いブルーグレー（rgb(241,244,250)）。誌面に落ち着きを与える
- **Surface Gray** (`#cccccc` / `#ababab`): 補助的なグレー面（定期購読バナー等）

### Text（文字色）

- **Text Primary** (`#222222`): 見出し・本文の基調色（rgb(34,34,34)）。純黒を避けた濃いグレー
- **Text Secondary** (`#727272`): キャプション・補足（rgb(114,114,114)）
- **Text Muted** (`#8a8a8a`): 日付・注釈などの最小情報
- **Text on Dark** (`#ffffff`): 濃色ヘッダー・写真上のラベル

### Accent（差し色）

- **Link Blue** (`#3564a2`): 「Share」等のリンク・アクション（rgb(53,100,162)）。落ち着いた藍寄りのブルー
- **Ink Black** (`#000000`): ヘッダー・フッターの濃色帯

### Line（罫）

- **Border** (`#e8e8e8`): タグ・区切りの淡い罫（rgb(232,232,232)）
- **Rule (見出し縦罫)** (`#222222`): セクションラベル左の縦罫は文字色と同じ濃色で引く

### 色に関する設計思想

- 文字は純黒を避けた `#222222`。明朝の線が硬くなりすぎず、誌面の柔らかさを保つ
- 面色は白を基本に、特集・サイドは淡いブルーグレー `#f1f4fa` でゾーニングする
- 彩度色はリンクの藍ブルー `#3564a2` に絞り、写真の色を主役にする

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体**: 游明朝体 / Yu Mincho（`游明朝体, "Yu Mincho"`）を本文・和文見出しに全面採用。フォールバックは ヒラギノ明朝 → MS 明朝
- **ゴシック体**: ヒラギノ角ゴ（`Hiragino Sans`）→ メイリオ。キャプション・補足の細ウェイト（w300）にのみ使う

### 3.2 欧文フォント

- **セリフ（見出し）**: Cormorant SC（`cormorantSC`）。オールドスタイルのセリフ・スモールキャップスで、「PICKUP」「AREA」等の英字ラベルや大見出しに使う
- **サンセリフ / 等幅**: 独立指定は少なく、和文フォント内の欧文グリフを使う

> **代替フォントの注記**: 游明朝は OS 内蔵、Cormorant SC は Google Fonts で利用できる。
> - 游明朝 → **Shippori Mincho**（誌面的で上質な明朝）または Noto Serif JP
> - Cormorant SC → **Cormorant SC**（Google Fonts で同一書体を読み込める）

### 3.3 font-family 指定

```css
/* 本文・和文見出し */
font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 ProN",
  "Hiragino Mincho ProN", serif;

/* 英字の大見出し・ラベル */
font-family: cormorantSC, "游明朝体", serif;

/* キャプション・補足（細ゴシック） */
font-family: "Hiragino Sans", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 本文は **和文明朝を先頭**に置き、日本語の格を担保する
- 英字ラベル・大見出しだけ Cormorant SC を先頭に置き、セリフの装飾性を借りる
- キャプションは細いゴシックで軽さを出し、明朝との強弱を作る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (英字) | Cormorant SC | 42px | 400–600 | 1.3 | 0.05em | 「PICKUP」等の大ラベル |
| Display (和文) | 游明朝 | 42px | 700 | 1.3 | 0.05em | 和文の大見出し |
| Heading (記事) | 游明朝 | 24–32px | 600 | 1.4 | 0.02em | 記事タイトル |
| Sub Heading | 游明朝 | 16px | 600 | 1.6 | normal | 小見出し |
| Body | 游明朝 | 16px | 500 | 1.8 | normal | 本文 |
| Caption | ヒラギノ角ゴ | 14px | 300 | 1.6 | normal | 補足（`#727272`、細ゴシック） |
| Meta / Date | Cormorant SC / 游明朝 | 12–14px | 500 | 1.5 | normal | 日付・カテゴリ（`#8a8a8a`） |
| Tag | 游明朝 | 12px | 600 | 1.4 | normal | ハッシュタグ（罫囲み） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.8`（明朝本文はゆったりと。16px 本文で約 29px）
- **見出しの行間**: `1.3〜1.4`
- **本文の字間 (letter-spacing)**: 基本 `normal`。大見出し・英字ラベルにのみ `2.1px`（≒0.05em）を付ける
- **見出しの字間**: 英字・和文の大見出しは `0.05em` 前後

**ガイドライン**:
- 明朝本文は line-height を 1.8 前後まで広げ、読みやすさと誌面感を両立する
- 英字大見出し（Cormorant SC）は字間を開き、スモールキャップスの格を活かす

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は使わない */
```

- 実測では `font-feature-settings: normal`。明朝の字面をそのまま活かし、palt は使わない
- 英字は Cormorant SC のスモールキャップス／リガチャに任せる

### 3.8 縦書き

該当なし（Web は横書き。誌面本体は縦組みだが Web UI は横書き）。

---

## 4. Component Stylings

### Buttons / Tags

角丸ゼロの直線基調。ハッシュタグは白地＋淡い罫で並べる。

**Tag（ハッシュタグ）**
- Background: `#ffffff`
- Text: `#222222`
- Border: `1px solid #e8e8e8`
- Padding: `6px 10px`
- Border Radius: `0px`
- Font: 12px / weight 600
- 例: 「#一度は訪れたい名建築」「#伝統工芸」

**Link / Action**
- Text: `#3564a2`（藍ブルー）または `#222222`
- Border Radius: `0px`
- Font: 14–16px / weight 500
- 例: 「Share」「もっと見る」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e8e8e8`
- Border (focus): `1px solid #222222`
- Border Radius: `0px`
- Padding: `10px 14px`
- Font Size: 16px

### Cards

- Background: `#ffffff` または `#f1f4fa`
- Border: なし〜`1px solid #e8e8e8`（余白と写真で区切ることが多い）
- Border Radius: `0px`
- Shadow: なし（フラット）
- 記事カードは大判写真＋明朝タイトル＋日付の誌面的構成

### Section Label（誌面あしらい）

- セクション見出しは**左に縦罫**（`border-left: 2–4px solid #222222`）を添え、英字（Cormorant SC）＋和文サブラベルの2段で構成する
- 例:「PICKUP / 注目記事」「AREA」

---

## 5. Layout Principles

### Spacing Philosophy

誌面のように整然と並べつつ、見出しまわりに余白を効かせる。写真は大きく、テキストブロックは幅を絞る。

### Spacing Scale（`--wp--preset--spacing` 実測ベース）

| Token | Value |
|-------|-------|
| XS | 0.44rem（≈7px） |
| S | 0.67rem（≈11px） |
| M | 1rem（16px） |
| L | 1.5rem（24px） |
| XL | 2.25rem（36px） |
| XXL | 3.38–5.06rem（54–81px） |

### Container

- Max Width: 1200–1280px
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（記事一覧は 2〜3 カラム＋サイドバー）
- Gutter: 24–36px
- 特集・エリア一覧はサイドバー（淡ブルー面）と本文の 2 カラム構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。ほぼ全ての面はフラット |
| 1 | `6px 6px 9px rgba(0,0,0,0.2)` | 写真・カードの自然な影（`--wp--preset--shadow--natural`） |
| 2 | `12px 12px 50px rgba(0,0,0,0.4)` | モーダル・強調要素（`--wp--preset--shadow--deep`） |

- 基本はフラット。影は写真まわりに限定的に使う

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文・和文見出しは **游明朝**、英字大見出しは **Cormorant SC** で組む
- 文字色は純黒を避けた `#222222`、キャプションは `#727272` の細ゴシックで軽くする
- 面色は白を基本に、特集・サイドを淡ブルー `#f1f4fa` でゾーニングする
- 明朝本文は line-height 1.8 前後まで広げて誌面感を出す
- セクション見出しには左の縦罫を添える
- タグ・ボタンは角丸ゼロ・白地＋淡い罫（`#e8e8e8`）

### Don't（禁止）

- 本文に角ゴシックを使わない（明朝主体の格を崩す）
- 純黒 `#000000` を本文に多用しない（`#222222` を使う）
- タグ・カードに角丸や強い影を付けない（角丸ゼロ・フラット基調）
- 彩度の高い色を多用しない（差し色は藍ブルー `#3564a2` に絞る）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。サイドバーは下部に回す |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 本文＋サイドバーの 2〜3 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは大見出し（42px）を 28–32px 程度に、本文は 16px を維持
- 明朝の line-height 1.8 はモバイルでも保ち、読みやすさを優先する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:   #ffffff
Surface Blue: #f1f4fa
Text Primary: #222222
Text Muted:   #727272 / #8a8a8a
Link Blue:    #3564a2
Border:       #e8e8e8
Font(本文):   "游明朝体", "Yu Mincho", "Hiragino Mincho ProN", serif
Font(英見出): cormorantSC, serif
Font(補足):   "Hiragino Sans", Meiryo, sans-serif
Body Size:    16px
Line Height:  1.8（明朝本文）
palt:         off
Tag:          #fff bg / 1px solid #e8e8e8 / radius 0
Label:        左縦罫 + Cormorant SC（英字）+ 和文サブ
```

### プロンプト例

```
Discover Japan のデザインシステムに従って、旅記事の一覧セクションを作成してください。
- 下地: #ffffff、特集面: #f1f4fa、文字: #222222、補足: #727272
- 本文・和文見出しは游明朝（代替: Shippori Mincho）、英字大見出しは Cormorant SC
- 本文 16px / line-height 1.8、キャプションはヒラギノ角ゴ w300
- セクション見出しは左に縦罫（border-left 2–4px #222）＋ Cormorant SC の英字ラベル＋和文サブ
- ハッシュタグは白地＋1px罫（#e8e8e8）、border-radius: 0
- リンク・アクションは藍ブルー #3564a2、写真は大判で主役に
```

### 代替フォント指針

- 和文 游明朝 → **Shippori Mincho** / Noto Serif JP
- 英字 Cormorant SC → **Cormorant SC**（Google Fonts で同一）
- 補足 ヒラギノ角ゴ → **Noto Sans JP**
- 代替でも「明朝主体・#222 の文字・淡ブルーのゾーニング・左縦罫の見出し・角丸ゼロのタグ・広めの行間」を守れば世界観は再現できる
