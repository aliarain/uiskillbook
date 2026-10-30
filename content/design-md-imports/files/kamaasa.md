# DESIGN.md — 釜浅商店 (Kama-asa)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://www.kama-asa.co.jp/
> 釜浅商店は東京・合羽橋の料理道具専門店（創業1908年）。「良理道具（りょうりどうぐ）」を掲げ、
> 包丁・鉄鍋・せいろ等を扱う。実測は EC トップおよび理念ページに基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 老舗の道具店らしい落ち着きと、モダンな EC の使いやすさを両立。料理道具の質感が伝わる写真主体
- **密度**: 中密度。カテゴリカードとコンテンツ（読みもの）を整然と並べる編集型 EC
- **キーワード**: 実直 / 温かい / 手仕事 / 落ち着き / 端正
- **形状言語**: 角丸を積極的に使う。ボタン・カードは `border-radius 8〜16px`、タグ・切替は `15〜30px` の丸みやピル形
- **書体の性格**: 見出しは Noto Sans JP を **字間広め（最大 0.2em）** で organ的に組み、本文は游ゴシックで柔らかく読ませる。英字ラベルは大文字＋トラッキングで店構えの品位を出す

---

## 2. Color Palette & Roles

<!-- 実サイトの computed style / customProperties / interactive 実測に基づく -->

### Primary（ブランドカラー）

- **Charcoal** (`#383838`): ブランドの基調色（rgb(56,56,56)）。文字色・プライマリボタン背景・フッター面に使う、墨のような濃グレー
- **Warm Taupe** (`#a28f74`): ブランドアクセント。レビュー星・「レビューを書く」ボタン等に使う、鉄と木を思わせる温かいトープ

### Category Accent（カテゴリ識別色）

読みもの・カテゴリのラベルに使う低彩度の識別色。写真に馴染むよう彩度を抑えている。

- **Sage** (`#dfe3e3`): 包丁カテゴリ（rgb(223,227,227)）
- **Cream** (`#eae4d2`): 料理道具カテゴリ（rgb(234,228,210)）
- **Sand** (`#f0e6d9`): 特集・読みもの（rgb(240,230,217)）
- **Slate Blue** (`#6c88ba`): コンテンツ識別（rgb(108,136,186)）
- **Navy** (`#2e4877`): コンテンツ識別・見出し帯（rgb(46,72,119)）
- **Copper** (`#c49166`): コンテンツ識別（rgb(196,145,102)）

### Neutral（ニュートラル）

- **Text Primary** (`#383838`): 見出し・本文（純黒ではない墨色）
- **Text on Dark** (`#ffffff`): 濃色面・写真上の文字
- **Border** (`#e1e1e1`): 区切り線・入力枠（rgb(225,225,225)）
- **Border Darker** (`#afafaf`): 強調したい区切り
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#efefef`): カード・セカンダリボタン・パネルの面色（rgb(239,239,239)）

### Semantic（意味的な色）

- **Success** (`#2e9e7b`): 在庫あり・完了（rgb(46,158,123)）
- **In Stock** (`#3370bf`): 在庫ステータス（rgb(51,112,191)）
- **Danger / Sale** (`#e85f5f`): エラー・セール・残りわずか（rgb(232,95,95)）

### 色に関する設計思想

- 基調は墨色 `#383838` と白 `#ffffff`。純黒は使わず、道具の"用の美"に合う柔らかいコントラストにする
- 差し色はブランドの `#a28f74`（トープ）に集約し、その他はカテゴリ識別の低彩度色として控えめに使う

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（見出し）**: Noto Sans JP（実サイトでは `"Noto Sans Japanese"` 指定）。ウェイト 700 を字間広めで使う
- **ゴシック体（本文）**: 游ゴシック（YuGothic）→ ヒラギノ角ゴ ProN → ヒラギノ角ゴシック の順
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ**: Helvetica Neue → Helvetica → Arial（和文フォント内の欧文で組まれる場合も多い）
- **等幅 / セリフ**: 使用しない

> **代替フォントの注記**: Noto Sans JP・游ゴシックはいずれも一般的に入手可能（Noto Sans JP は Google Fonts、游ゴシックは Mac/Windows 標準）。Adobe Fonts 依存はなく、preview.html でもほぼ忠実に再現できる。

### 3.3 font-family 指定

```css
/* 見出し（Noto Sans JP） */
font-family: "Noto Sans JP", "Noto Sans Japanese", sans-serif;

/* 本文（游ゴシック優先の和文スタック） */
font-family: YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Sans",
             "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- **和文優先**。見出しは Noto Sans JP、本文は游ゴシックを先頭に置く
- 本文スタックは Mac（游ゴシック / ヒラギノ）と Windows（游ゴシック）双方をカバー
- 欧文は末尾の Helvetica Neue 系が拾う

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading L | Noto Sans JP | 21px | 700 | 1.0 | 0.2em | 大見出し。字間を大きく開く |
| Heading M | Noto Sans JP | 15px | 400 | 1.23 | 0.075em | セクション見出し (`#383838`) |
| Label | Noto Sans JP | 12px | 700 | 1.23 | 0.083em | カテゴリタグ・白文字 |
| Body | 游ゴシック | 16px (base 15px) | 400 | 1.8 | normal | 本文 (`#383838`) |
| Link | Noto Sans JP | 15px | 700 | 1.9 | normal | テキストリンク |
| Caption | 游ゴシック | 11px | 400 | 1.9 | normal | 注釈・白抜き小テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.8`（16px 本文 / 29px）。読みものが多いため広めに取る
- **見出しの行間**: `1.0〜1.23`
- **本文の字間 (letter-spacing)**: `normal`
- **見出しの字間**: 大見出しは **`0.2em`** と大きく開き、店の品格を出す。中見出し・ラベルは `0.075〜0.083em`

**ガイドライン**:
- 日本語見出しの `letter-spacing` を積極的に広げるのが釜浅らしさ（最大 0.2em）
- 本文は字間を詰めず、行間 1.8 でゆったり読ませる

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
font-feature-settings: normal;   /* 実測では palt 不使用 */
```

- 実測では `font-feature-settings: normal`。字詰めは `letter-spacing` で明示的に制御している
- 見出しの間延びは `letter-spacing` で意図的に作っているため、`palt` で詰め直さないこと

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

角丸を積極的に使うのが特徴。プライマリは墨色の塗り、セカンダリは淡グレー面。

**Primary**
- Background: `#383838`（charcoal）
- Text: `#ffffff`
- Padding: `2px 10px`〜（サイズ可変）
- Border Radius: `15〜16px`
- Font: Noto Sans JP

**Secondary**
- Background: `#efefef`
- Text: `#383838`
- Border: なし
- Border Radius: `8px`

**Pill（誘導リンク・タグ）**
- Background: `#ffffff` / `transparent`
- Text: `#383838` または `#000000`
- Border Radius: `30px`（完全なピル）／ タグは `15px`
- Padding: `0 35px` 等、横に余裕を持たせる

**Accent（レビュー系）**
- Background: `#a28f74`（warm taupe）
- Text: `#ffffff`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e1e1e1`
- Border (focus): `1px solid #383838`
- Border Radius: `8px`
- Padding: `10px 14px`
- Font Size: 15px

### Cards

- Background: `#ffffff` / `#efefef`
- Border: なし（`border-radius` と余白で区切る）／必要時 `1px solid #e1e1e1`
- Border Radius: `8px`（`--block-border-radius-reduced`）／ 大ブロックは `15px`（`--block-border-radius`）
- Padding: 16–24px
- カテゴリカードは識別色の帯＋写真＋見出しで構成

---

## 5. Layout Principles

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 64px |
| XXL | 96px |

### Container

- Max Width: 1280px
- Padding (horizontal): 16–24px

### Grid

- Columns: 12（カテゴリカードは 2〜4 カラム）
- Gutter: 16–24px
- トップは「大判ビジュアル → カテゴリカード群 → 読みもの一覧」の縦積み構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。多くの面はフラット |
| 1 | `0 1px 3px rgba(56,56,56,0.10)` | カード・ドロップダウン |
| 2 | `0 6px 16px rgba(56,56,56,0.12)` | モーダル・カートドロワー |

- 影は控えめ。奥行きは `border-radius` と `#efefef` の面色で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 基調色は墨色 `#383838` と白 `#ffffff`、アクセントは `#a28f74`（トープ）に集約する
- 大見出しは Noto Sans JP を `letter-spacing: 0.2em` まで開いて組む
- 本文は游ゴシックで `line-height: 1.8`、字間はニュートラル
- ボタン・カードは `border-radius 8〜16px`、誘導リンクはピル（30px）にする
- カテゴリは低彩度の識別色で色分けする

### Don't（禁止）

- 純黒 `#000000`・彩度の高い原色をベタで使わない
- 大見出しに `palt` を掛けて字間を詰め直さない（意図した間延びを壊す）
- 本文の line-height を 1.5 未満にしない
- 角丸を全て 0 にしない（釜浅の柔らかさが失われる）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1〜2 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2〜3 カラム |
| Desktop | > 1024px | 3〜4 カラムのカテゴリカード |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは大見出しの `letter-spacing` を 0.1em 程度に緩め、本文は 15–16px を維持
- カテゴリカードは 2 カラム → 1 カラムへ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary (charcoal): #383838
Accent (taupe):     #a28f74
Text:               #383838
Background:         #ffffff
Surface:            #efefef
Border:             #e1e1e1
Heading Font:       "Noto Sans JP", sans-serif
Body Font:          YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Body Size:          16px
Line Height:        1.8
Heading tracking:   letter-spacing 0.2em
Button radius:      8–16px（誘導リンクは 30px ピル）
```

### プロンプト例

```
釜浅商店のデザインシステムに従って、料理道具のカテゴリ一覧を作成してください。
- 基調色: #383838（墨）と #ffffff、アクセント: #a28f74（トープ）
- 見出しは Noto Sans JP、letter-spacing 0.2em で大きく開く
- 本文は游ゴシック（YuGothic優先）、line-height 1.8
- カテゴリカードは border-radius 8px、識別色（sage #dfe3e3 / cream #eae4d2 等）の帯
- プライマリボタンは #383838 塗り・radius 16px、誘導リンクは 30px のピル
```
