# DESIGN.md — アーティゾン美術館 (Artizon Museum)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://www.artizon.museum/
> アーティゾン美術館（旧・ブリヂストン美術館）は東京・京橋の美術館。
> 印象派から現代美術まで幅広いコレクションを持つ。実測はトップおよび展覧会ページに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: タイポグラフィ主導のミュージアム UI。巨大な黒の見出しと白の余白で、展覧会ビジュアルを額装のように見せる
- **密度**: 低〜中密度。ヒーローは全画面ビジュアル＋超大型の展覧会タイトル。情報は整然としたグリッドに整理する
- **キーワード**: タイポグラフィ / 端正 / 力強い / モダン / 額装
- **形状言語**: 角丸を使わない（`border-radius: 0`）。ボタンは細い黒罫のアウトライン。区切りは罫線と余白で行う
- **書体の性格**: **AXIS Font（Type Project）** を全面採用。R / M / B のウェイトを使い分け、見出しは超大型・ネガティブトラッキングで力強く、本文は広い行間でゆったり組む

---

## 2. Color Palette & Roles

<!-- computed style / interactive / uniqueBackgrounds の実測に基づく。無彩色で額装のように展覧会写真を見せる -->

### Base（下地）

- **Background** (`#ffffff`): ページ全体の下地。純白
- **Surface** (`#f5f5f5`): カード・セクションパネルの面色（rgb(245,245,245)）
- **Surface Cool** (`#ebeff1`): Instagram 等の補助ブロックのわずかに青みを含む面色（rgb(235,239,241)）

### Dark（暗色面）

- **Top Bar / Dark Panel** (`#111111`): 最上部の開館情報バー・暗色パネル（rgb(17,17,17)）。文字は白で乗る
- **Dark Button** (`#333333`): 「オンラインショップ」等の塗りボタン下地（rgb(51,51,51)）

### Text（文字色）

- **Text Primary** (`#000000`): 見出し・本文。純黒。巨大な展覧会タイトルもこの黒
- **Text on Dark** (`#ffffff`): 暗色バー・暗色ボタン上の文字

### Line（罫）

- **Border** (`#cccccc`): 区切り線・入力欄の枠（rgb(204,204,204)）

### 色に関する設計思想

- UI は無彩色（白・黒・グレー）で統一し、展覧会のビジュアルに色を委ねる
- 暗色は `#111111`（バー）と `#333333`（ボタン）の 2 段階で使い分ける
- ブランドカラーとしての彩度色は持たず、黒の面積と余白のコントラストで力強さを作る

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: AXIS Font ベーシック ProN（`"A+mfCv-AXIS Font ベーシック R/M/B ProN"`, Type Project）。鈴木功デザインの端正なヒューマニスト・サンセリフ。**R（Regular）/ M（Medium）/ B（Bold）** の 3 ウェイトを使い分ける
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ**: AXIS Font 内蔵の欧文グリフをそのまま使う。フォールバックは `NoChattering`（字幅維持用のダミー）
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: AXIS Font は Type Project の商用フォントで、ローカル環境・preview.html では表示できない。
> - AXIS Font → **Noto Sans JP**（ヒューマニストな骨格が比較的近い）または **IBM Plex Sans JP** で代替
> - 欧文見出しの力強さは **Inter** / **Helvetica Neue** で近づけられる
> - ウェイトは AXIS の R→400、M→500、B→700 に対応させる

### 3.3 font-family 指定

```css
/* 本文（AXIS R） */
font-family: "A+mfCv-AXIS Font ベーシック R ProN", NoChattering, sans-serif;

/* 中見出し・ナビ強調（AXIS M） */
font-family: "A+mfCv-AXIS Font ベーシック M ProN", NoChattering, sans-serif;

/* 大見出し・強調（AXIS B） */
font-family: "A+mfCv-AXIS Font ベーシック B ProN", NoChattering, sans-serif;
```

**フォールバックの考え方**:
- AXIS Font を先頭に置き、和欧混植をこの単一書体で組む
- ウェイトは **font-weight ではなく書体名（R/M/B）で切り替える**点に注意（computed 上は weight 400 のまま）
- 代替に置き換える場合は R/M/B を font-weight 400/500/700 にマッピングする

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h2) | AXIS B | 36px | Bold | 1.0 | -0.019em | 展覧会タイトル等の超大型見出し（ネガティブ字間） |
| Heading 3 | AXIS B/R | 26px | Bold | 1.2 | 0.05em | セクション見出し |
| Lead | AXIS R | 18px | Regular | 2.0 | 0 | リード段落（広い行間） |
| Body | AXIS R | 15px | Regular | 2.0 | 0 | 本文 |
| Body (small) | AXIS R | 14px | Regular | 1.8 | 0 | 補助本文・ナビ |
| Nav (emphasis) | AXIS M | 15–20px | Medium | 1.25–2.0 | 0 | メニュー項目 |
| Caption | AXIS R | 12–13px | Regular | 1.8 | 0 | 注釈・リンク |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `2.0`（15–18px 本文）。ミュージアムらしいゆったりした組み。小さい補助本文は `1.8`
- **大見出しの行間**: `1.0`（36px display）。ぎゅっと締める
- **本文の字間 (letter-spacing)**: 基本 `normal`（0）
- **大見出しの字間**: **ネガティブ**（`-0.019em` 前後）。巨大タイトルを密に組んで塊感を出す。小見出しは `0.05em` とわずかに開く

**ガイドライン**:
- 見出しは大きく・字間タイト、本文は行間広めというコントラストが AXIS Font 運用の要
- ウェイトは R/M/B の書体切り替えで表現する

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
font-feature-settings: normal;          /* 本文は palt を使わない */
/* 一部の見出し（h3）でのみ palt を適用 */
font-feature-settings: "palt";
```

- 本文は基本 `normal`。一部の見出しでのみ `palt` を効かせて字面を締める
- 大見出しは `letter-spacing` のネガティブ値で字詰めをコントロールしている

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

角丸ゼロ。黒罫のアウトライン（明色下地）と暗色塗り（`#333`）を使い分ける。

**Primary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `0 20px`（行高 50px で高さを確保）
- Border Radius: `0`
- Font: AXIS R 15px / line-height 50px
- 例: 「美術館について」「建築・デザインについて」

**Secondary（暗色塗り）**
- Background: `#333333`
- Text: `#ffffff`
- Border: なし
- Padding: `0 32px`
- Border Radius: `0`
- Font: AXIS R 14px
- 例: 「オンラインショップ」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #000000`
- Border Radius: `0`
- Padding: `12px 16px`
- Font Size: 15px

### Cards

- Background: `#ffffff` または `#f5f5f5`
- Border: なし（罫 `1px solid #cccccc` で区切る場合あり）
- Border Radius: `0`
- Shadow: なし（フラット）
- 展覧会カードは大判ビジュアル＋会期＋タイトルの構成

---

## 5. Layout Principles

### Spacing Philosophy

余白を大きく取り、超大型タイポグラフィと展覧会ビジュアルを額装のように見せる。

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

- Max Width: 1280px（ヒーロー・展覧会ビジュアルはフルブリード）
- Padding (horizontal): 24–40px

### Grid

- Columns: 12（展覧会・お知らせ一覧は 2〜3 カラム）
- Gutter: 24–40px
- WordPress ベース（`--wp--preset--font-size--normal: 16px`, `--huge: 42px`）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。全面フラット |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・スライダーナビ |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・メニューパネル |

- 影は極力使わない。奥行きは余白と黒面のコントラストで表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- UI は白・黒・グレーの無彩色で統一し、展覧会ビジュアルに色を委ねる
- 見出しは超大型・字間タイト（ネガティブ）、本文は行間広め（1.8〜2.0）というコントラストを作る
- ウェイトは AXIS R/M/B（代替なら font-weight 400/500/700）で切り替える
- ボタン・入力・カードは `border-radius: 0` の直角にする
- 暗色は `#111`（バー）と `#333`（ボタン）で使い分ける

### Don't（禁止）

- 彩度の高いブランドカラーを UI に持ち込まない（色はビジュアルのみ）
- `border-radius` を付けない
- 本文の行間を詰めない（1.8〜2.0 を保つ）
- 大見出しに正の大きな字間を付けない（大型タイトルはタイトに組む）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2 カラム |
| Desktop | > 1024px | 2〜3 カラム＋フルブリードヒーロー |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは大見出し（36px）を 24–28px に縮小、本文は 14–15px を維持
- 行間 1.8〜2.0 の"ゆったり感"はモバイルでも保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:    #ffffff
Surface:       #f5f5f5
Dark Bar:      #111111（文字 #ffffff）
Dark Button:   #333333（文字 #ffffff）
Text Primary:  #000000
Border:        #cccccc
Font:          "A+mfCv-AXIS Font ベーシック R ProN", NoChattering, sans-serif
Body Size:     15px
Line Height:   2.0
Display:       36px / Bold / letter-spacing -0.019em / line-height 1.0
Button:        transparent + 1px solid #000 / radius 0（または #333 塗り）
```

### プロンプト例

```
アーティゾン美術館のデザインシステムに従って、展覧会一覧セクションを作成してください。
- 下地: #ffffff、面色: #f5f5f5、文字: #000000、罫線: #cccccc
- フォント: AXIS Font（代替: Noto Sans JP / IBM Plex Sans JP）。ウェイトは R/M/B を font-weight 400/500/700 に対応
- 展覧会タイトルは超大型（36px 以上）・Bold・letter-spacing はネガティブ（-0.02em 前後）でタイトに
- 本文は 15px / line-height 2.0 でゆったり
- ボタンは黒罫アウトライン（border-radius: 0）または #333 の暗色塗り
- UI は無彩色のみ。色は展覧会ビジュアルに委ねる
```

### 商用フォントが使えない環境での代替指針

- 和文 AXIS Font → **Noto Sans JP** ／ **IBM Plex Sans JP**
- 欧文の力強さ → **Inter** / **Helvetica Neue**
- どの代替でも「超大型見出し・字間タイト・広い本文行間・無彩色・角丸ゼロ」を守れば世界観は再現できる
