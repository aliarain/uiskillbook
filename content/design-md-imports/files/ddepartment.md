# DESIGN.md — D&DEPARTMENT

> D&DEPARTMENT 公式オンラインショップ（https://www.d-department.com/）のデザイン仕様書。
> ナガオカケンメイが 2000 年に立ち上げたデザイン会社／ストア／観光ブランド。「LONG LIFE DESIGN（ロングライフデザイン）」をコンセプトに、長く使われる日本の名品とその土地の文化を扱う。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「ロングライフデザイン」のコンセプトに沿った、エディトリアル × カタログ × 民藝。教科書のような端正なグリッドと、文化雑誌のような書体運びを両立
- **密度**: 中〜高密度の情報。商品 + 産地 + ストーリーを 1 ページに同居させる、d design travel 由来のレイアウト感
- **キーワード**: ロングライフ、エディトリアル、ヒラギノ UD、明朝、土の色、民藝、47 都道府県、Amiri
- **特徴**: **ヒラギノ UD 角ゴ（ユニバーサルデザイン書体）** を本文に採用（読みやすさ重視）。商品見出し・特集タイトルは **Amiri（Latin Serif）+ ヒラギノ明朝** の混植で、洋書のような格調を出す。**font-feature-settings: "halt" 1**（半角 Latin の詰め）で和欧混植を整える。アクセントカラーは **#993c2e（土の赤 / terracotta）** と **#2e5799（藍）**、面色は **#faf8f8（生成り白）**

---

## 2. Color Palette & Roles

### Primary（ブランドアクセント — 土と藍の運用）

- **D Terracotta** (`#993c2e`): 「開催中」バッジ・特集ハイライトに使われるブランド赤（土・赤土・民藝の朱）
- **D Indigo** (`#2e5799`): 「受付中」バッジ・予約系ステータスに使われる藍。日本の伝統色を意識
- **D Deep Red** (`#800000`): カテゴリページのヘッダー強アクセント。シックに引き締める

### Surface（面色 — 生成り）

- **Background** (`#ffffff`): ページ背景
- **Surface Cream** (`#faf8f8`): 最頻出のカード・特集面色（出現 91 回）。和紙や生成りの紙のような暖色寄りオフホワイト
- **Surface Veil Cream** (`rgba(244, 242, 239, 0.8)`): お知らせバナー等の半透明クリーム

### Status / Tag

- **USED Tag** (`#808080`): 「USED」（中古品）バッジ用ニュートラルグレー
- **Veil Black** (`rgba(0, 0, 0, 0.6)`): 画像オーバーレイ
- **Veil White** (`rgba(255, 255, 255, 0.8)`): 画像上テキスト用半透明白

### Text

- **Text Primary** (`#000000`): 本文・見出しすべて純黒
- **Text Inverse** (`#ffffff`): 黒地・赤地のテキスト
- **Text Accent Red** (`#993c2e`): リンク強調・現在のページ識別
- **Text Sub Gray** (`#808080`): キャプション・補助テキスト

> **Note**: D&DEPARTMENT の配色は **#993c2e（terracotta）/ #2e5799（藍）/ #800000（深紅）/ #faf8f8（生成り）/ #000 / #fff** を中核とする。原色のような派手な色は使わず、土・藍・墨のような**伝統色のニュアンス**で構成される。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・UI 全般）**:
- ヒラギノ UD 角ゴ W5 JIS2004 / "ヒラギノUD角ゴ W5 JIS2004"
- ヒラギノ UD 角ゴ ProN / "ヒラギノUD角ゴ ProN"
- ヒラギノ UD 角ゴ StdN / "ヒラギノUD角ゴ StdN"

**明朝体（h2 大見出し・特集タイトル）**:
- ヒラギノ明朝 W2 JIS2004 / "ヒラギノ明朝 W2 JIS2004"（Light）
- ヒラギノ明朝 ProN / "ヒラギノ明朝 ProN"
- ヒラギノ明朝 StdN / "ヒラギノ明朝 StdN"
- ヒラギノ UD 明朝 W4 JIS2004（補助）

> **UD（ユニバーサルデザイン）書体採用**: D&DEPARTMENT は本文に **ヒラギノ UD 角ゴ** を採用。一般のヒラギノ角ゴ ProN ではなく UD 系を選んでいるのは、誰にでも読みやすい本を作る出版的な姿勢の表れ。

### 3.2 欧文フォント

- **セリフ（Amiri）**: 商品見出し・特集タイトル用の Latin セリフ。アラビア書体の名作 Amiri を採用し、洋書的な格調を出す
- **カスタムフォント (dMotels)**: 数字・小ラベル用のカスタムフォント。10px Bold で英数字キャプションに使用
- 本文の欧文はヒラギノ UD 角ゴ内蔵欧文を使用

### 3.3 font-family 指定

```css
/* 本文・UI 全般（ゴシック） */
font-family:
  "ヒラギノUD角ゴ W5 JIS2004",
  "ヒラギノUD角ゴ ProN",
  "ヒラギノUD角ゴ StdN",
  sans-serif;
font-feature-settings: "halt" 1;

/* h2 大見出し・特集タイトル（Latin Serif + 和文 Mincho） */
font-family:
  Amiri,
  "ヒラギノ明朝 W2 JIS2004",
  "ヒラギノ明朝 ProN",
  "ヒラギノ明朝 StdN",
  serif;

/* 数字・小ラベル */
font-family: dMotels, sans-serif;
```

**フォールバックの考え方**:
- 本文は **ヒラギノ UD 角ゴ W5 JIS2004 を最優先**（W5 = Medium 相当の太さ）
- ヒラギノ ProN（JIS2004 字形）→ StdN（Standard 字形）の順でフォールバック
- 大見出しは **Amiri を最優先**にして洋書的な印象を作り、和文は **ヒラギノ明朝 W2（Light）** を使う
- W2 という非常に細い明朝を選ぶのが特徴で、エディトリアル感を出す

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display Mincho (h2) | Amiri / ヒラギノ明朝 W2 | 36px | 400 | 45px (1.25) | normal | 「LONG LIFE DESIGN」等のメジャー見出し（明朝） |
| H1 Compact | ヒラギノ UD 角ゴ | 16px | 700 | 16px (1.0) | normal | グローバルヘッダー内の構造的 h1 |
| Heading (h3) | ヒラギノ UD 角ゴ | 16px | 700 | 24px (1.5) | normal | カード見出し |
| Sub Heading (h4) | ヒラギノ UD 角ゴ | 14px | 700 | 21px (1.5) | normal | サブ見出し |
| Body | ヒラギノ UD 角ゴ | 16px | 400 | 24px (1.5) | normal | サイト全般の本文 |
| Body Strong | ヒラギノ UD 角ゴ | 17px | 700 | 25.5px (1.5) | normal | ヘッダー強調本文 |
| Caption | ヒラギノ UD 角ゴ | 14px | 400 | 21px (1.5) | normal | キャプション |
| Mini Mincho | Amiri / ヒラギノ UD 明朝 W4 | 10px | 700 | 10px (1.0) | normal | ヘッダー欧文ラベル |
| Mini Custom | dMotels | 10px | 700 | 10px (1.0) | normal | 数字・小ラベル（color #993c2e or #808080） |

### 3.5 行間・字間

- **本文の行間**: **1.5**（16px / 24px）。ヒラギノ UD は字面が大きいので 1.5 でちょうどよい
- **見出しの行間**: 1.0–1.5。Amiri 36px の h2 は line-height 1.25 でゆとり
- **letter-spacing**: 全要素で `normal`（D&DEPARTMENT は字間を開けない）
- **本文の字間**: `letter-spacing: normal`（halt が効いているので和欧混植は自然に詰まる）

**ガイドライン**:
- 本文は 16px / line-height 1.5 / letter-spacing normal がベース
- 大見出しは Amiri + ヒラギノ明朝 W2 で洋書的に組む
- 数字・短い英字ラベルには dMotels や Amiri 10px Bold を使い、エディトリアル感を出す

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
word-break: normal;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: "halt" 1;
```

- **halt は本文 / nav / footer / a / span / button などほぼ全要素に適用**
- `halt` は **半角 Latin（数字・記号・アルファベット）の詰め** を行う機能。`palt` ほど詰まらず、和文は等幅のまま
- 結果として、和欧混植・価格表示・URL 等が自然に詰まり、編集物のような端正さを得られる
- h2（Amiri 大見出し）には **`halt` を適用しない**（明朝の Latin はそのままの幅で読ませる）

### 3.8 縦書き

- 該当なし（横書き運用）

---

## 4. Component Stylings

### Buttons

**Card Button（最頻出のクリーム系カード）**
- Background: `#faf8f8`
- Text: `#000000`
- Border: 2px solid `#ffffff`（白い枠を内側に作って和紙のような重なりを表現）
- Border Radius: `2px`（ごくわずかな丸み）
- Padding: 16–24px
- Font Size: 16px / Weight 400 / line-height 1.5

**Veil Button（画像オーバーレイ）**
- Background: `rgba(255, 255, 255, 0.8)`
- Text: `#000000`
- Border: 2px solid `#ffffff`
- Border Radius: `2px`
- Padding: `22px`

**Status Tag — 開催中（赤）**
- Background: `#993c2e`
- Text: `#ffffff`
- Padding: 4–8px 12px
- Border Radius: 2px

**Status Tag — 受付中（藍）**
- Background: `#2e5799`
- Text: `#ffffff`
- Padding: 4–8px 12px
- Border Radius: 2px

**USED Tag（中古品ラベル）**
- Background: `#808080`
- Text: `#ffffff`
- Font Size: 10–12px / Weight 700

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Border Radius: 2px
- Padding: 8–12px
- Font Size: 16px / Weight 400 / line-height 1.5
- font-feature-settings: `"halt" 1`

### Cards

- Background: `#faf8f8`（生成りクリーム）
- Border: なし or 2px solid `#ffffff`
- Border Radius: 2px
- Padding: 16–24px
- Shadow: ごく薄い（基本フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | カード内の細かい間 |
| M | 16px | 段落間 |
| L | 24px | セクション内ブロック間 |
| XL | 40px | セクション間 |
| XXL | 60–80px | フッター余白等のメジャー余白 |

### Container

- Max Width: 約 1200px
- Padding (horizontal): 16〜40px
- セクション内 padding: `0 2.593%`（h3 で実測。ゆるやかな % 指定）
- フッター上下: padding `40px 0`

### Grid

- 商品サムネ: 4 カラム（PC）/ 2 カラム（SP）
- 特集カード: 2〜3 カラム
- ガッターは 16–24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 大半の要素（フラット運用が原則） |
| 1 | `0 1px 3px rgba(0, 0, 0, 0.06)` | スティッキーヘッダーのみ |

> D&DEPARTMENT はシャドウをほぼ使わない。階層は **面色（`#fff` / `#faf8f8` / `#993c2e` / `#2e5799` / `#800000`）の差** と **2px の白枠** で表現。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文は `"ヒラギノUD角ゴ W5 JIS2004", "ヒラギノUD角ゴ ProN", "ヒラギノUD角ゴ StdN", sans-serif` の **UD（ユニバーサルデザイン）書体** で組む（D&DEPARTMENT の最重要特徴）
- 大見出しは `Amiri, "ヒラギノ明朝 W2 JIS2004", "ヒラギノ明朝 ProN", "ヒラギノ明朝 StdN", serif` で**洋書的な明朝混植**にする
- 数字・小ラベルは `dMotels` または `Amiri` の 10px Bold を使う
- **font-feature-settings: "halt" 1** を本文・UI 要素に適用（半角 Latin の詰め）
- 配色のアクセントは **`#993c2e`（土の赤）/ `#2e5799`（藍）/ `#800000`（深紅）** の伝統色ニュアンス
- 面色は **`#faf8f8`（生成り）** を最頻出で使う
- カード・CTA の border-radius は 2px とごくわずかな丸み（角張りすぎず、丸すぎず）
- 「開催中」「受付中」のような**ステータスバッジ**で赤・藍を使い分ける
- W5（本文）と W2（明朝見出し）のように **ウェイトを大胆に使い分ける**

### Don't（禁止）

- 一般のヒラギノ角ゴ ProN を使わない（D&DEPARTMENT は **UD 系**）
- 大見出しに Noto Serif JP を使わない（D&DEPARTMENT は **ヒラギノ明朝 W2** + Amiri）
- 鮮やかな原色（純赤 #ff0000、純青 #0000ff）を使わない（伝統色のニュアンスから外れる）
- 大きな box-shadow / drop-shadow を使わない（フラット原則）
- 角丸を 8px 以上にしない（pill ボタンは使わない）
- 本文の line-height を 1.3 以下にしない
- 「halt」を h2 大見出し（Amiri）には適用しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル（1〜2 カラム） |
| Tablet | 768–1023px | 2〜3 カラム |
| Desktop | ≥ 1024px | 3〜4 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイル本文は 14–16px を維持
- h2 Amiri 36px はモバイルで 24–28px に縮小
- 特集レイアウトは PC では 2–3 カラム、SP では 1 カラム縦積み

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red (土の赤): #993c2e
Brand Indigo (藍): #2e5799
Brand Deep Red: #800000
Surface Cream (生成り): #faf8f8
Background: #ffffff
Text Primary: #000000
Text Sub: #808080
Tag USED: #808080
Font (Body): "ヒラギノUD角ゴ W5 JIS2004", "ヒラギノUD角ゴ ProN", "ヒラギノUD角ゴ StdN", sans-serif
Font (Display Mincho): Amiri, "ヒラギノ明朝 W2 JIS2004", "ヒラギノ明朝 ProN", "ヒラギノ明朝 StdN", serif
Font (Mini): dMotels, sans-serif (10px Bold) / Amiri 10px Bold
Body Size: 16px / Weight 400 / line-height 24px (1.5)
Display H2: Amiri 36px / Weight 400 / line-height 45px (1.25)
font-feature-settings: "halt" 1 (本文・UI に適用、Amiri 大見出しには適用しない)
Border Radius: 2px (基本)
Card BG: #faf8f8 with 2px solid #fff border
Status Tag: 開催中 = #993c2e / 受付中 = #2e5799 (text white)
Shadow: ほぼ使わない
```

### プロンプト例

```
D&DEPARTMENT のデザインシステムに従って、ロングライフデザインの商品紹介ページを作成してください。
- 背景: #ffffff、カード面色: #faf8f8（生成りクリーム、最頻出）
- テキスト: #000000、サブ: #808080
- 本文フォント: "ヒラギノUD角ゴ W5 JIS2004", "ヒラギノUD角ゴ ProN", "ヒラギノUD角ゴ StdN", sans-serif（UD 書体を採用するのが D&DEPARTMENT の特徴）
- 大見出し（h2）は Amiri, "ヒラギノ明朝 W2 JIS2004", "ヒラギノ明朝 ProN", serif で 36px / Weight 400 / line-height 45px (1.25)（洋書的な明朝混植）
- 数字・小ラベルは dMotels または Amiri の 10px Bold（color #993c2e or #808080）
- 本文は 16px / Weight 400 / line-height 24px (1.5) / letter-spacing normal
- 全体に font-feature-settings: "halt" 1 を適用（半角 Latin を詰める）。ただし Amiri 大見出しには適用しない
- アクセントカラーは #993c2e（土の赤 / terracotta）と #2e5799（藍）の伝統色ニュアンス
- 「開催中」バッジ: bg #993c2e / text #ffffff / radius 2px
- 「受付中」バッジ: bg #2e5799 / text #ffffff / radius 2px
- 「USED」バッジ: bg #808080 / text #ffffff
- カード: bg #faf8f8 / border 2px solid #ffffff / radius 2px / padding 16–24px
- 鮮やかな原色は使わない（伝統色のニュアンスを保つ）
- 角丸は 2px（角張りすぎず、丸すぎず）。pill ボタンは使わない
- box-shadow はほぼ使わず、面色（#fff / #faf8f8 / #993c2e / #2e5799）の差で階層を作る
```
