# DESIGN.md — BAKE INC.（ベイク）

> BAKE INC.（https://bake-jp.com/）コーポレートサイトのデザイン仕様書。
> 「お菓子から世の中をたのしくする」を掲げる、菓子ブランド企画製造企業のコーポレート顔。
> 実サイトの computed style 実測（2026-05-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 紙に近いクリーム背景 `#f0f0e9` × 純黒 `#000000` × **游明朝（Yu Mincho Pr6N）本文** × **Gill Sans Nova の特大ディスプレイ欧文**で構成された、独立系出版／ブランディングスタジオ的な"読み物コーポレート"
- **密度**: 本文 line-height **2.67**（約 53.98px / 20.24px）+ letter-spacing **0.1em** という異常に空気の多い組版。情報密度ではなく**読書速度のコントロール**を目的にした設計
- **キーワード**: 紙の余韻、明朝体本文、Gill Sans の特大欧文、`palt` 全面適用、letter-spacing 0.1em、印刷物的階調
- **特徴**:
  - **本文は游明朝（セリフ）** という選択。Web の SaaS／IT 系では稀で、菓子ブランドの工芸性・手仕事の温度感を映す
  - **欧文ディスプレイは Gill Sans Nova** — Eric Gill 設計のヒューマニスト・サンセリフを 90〜112px のスケールで配置し、和文セリフと真逆のキャラクターを響かせる**書体二重奏**
  - **`font-feature-settings: "palt"` を全要素に適用**。和文プロポーショナル詰めを徹底し、印刷物的な版面を作る
  - **letter-spacing 0.1em** を本文に乗せる珍しい設定。空気感を最大化する代わりに行が短くなる
  - **背景は `#f0f0e9`**（紙のクリーム）。純白を避け、印刷紙のような温度を保つ
  - 装飾的な色面・カラー CTA を**意図的に持たない**。色数は 2〜3 色で、写真と余白がブランドを伝える役を担う
  - Adobe Fonts ドメインライセンスのため、**ローカルプレビューでは代替フォント**（Google Fonts の Shippori Mincho / Noto Serif JP + Gill Sans 風代替）を使用
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> Bake のパレットは極端にミニマル（実質 4 色）で、写真と余白で世界観を構築する。

### Brand / Surfaces

- **Paper Cream** (`#f0f0e9`): ページ背景。紙のような温かい無彩色
- **Pure Black** (`#000000`): 本文・見出しの基本色
- **Charcoal** (`#424242`): リード文（text-lead）・補助テキスト
- **Pure White** (`#ffffff`): メニュー展開時の文字色（暗色オーバーレイ上で使用）

### CTA / Buttons

- **専用色 CTA は実装上ほぼ存在しない**。リンクと写真ホバーが主な誘導
- ナビゲーションリンク: 白文字 `#ffffff` / Gill Sans Nova 18〜40px / 暗色オーバーレイ上
- ロゴリンク "BAKE INC.": 黒文字 `#000000` / serif（Yu Mincho）

### Neutral

- **Text Primary** (`#000000`): 見出し・本文
- **Text Secondary** (`#424242`): リード・モーダル説明
- **Background** (`#f0f0e9`): ページ背景（クリーム）
- **Surface Inverted** (`#000000` / α でオーバーレイ): メニュー展開時の暗背景

### Semantic（推奨補完）

実サイトに表面化したエラー・警告色は確認できないため、ブランド整合性を保った補完値:

- **Danger**: `#a83232`（クラフト調の落ち着いた赤）
- **Warning**: `#c08a30`（焼き菓子に寄せた琥珀）
- **Success**: `#3d6b3d`（深いグリーン）

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（メイン）**: **Yu Mincho Pr6N**（Adobe Fonts、`yu-mincho-pr6n`）
- **フォールバック 1**: **游明朝（YuMincho）**（システム標準）
- **フォールバック 2**: **YuMincho** ローマ字エイリアス
- **最終フォールバック**: `serif`

### 3.2 欧文フォント

- **ディスプレイ／ナビ**: **Gill Sans Nova**（Adobe Fonts、`gill-sans-nova`） — ヒューマニスト・サンセリフ
- **フォールバック**: `sans-serif`

### 3.3 font-family 指定

実サイトの実測値（明確に **2 系統**に分かれる）:

```css
/* 本文・段落・ロゴテキスト */
font-family: yu-mincho-pr6n, 游明朝, YuMincho, serif;
font-feature-settings: "palt";

/* 見出し・ナビ・コピーライト・装飾的英字 */
font-family: gill-sans-nova, sans-serif;
font-feature-settings: "palt";
```

**フォールバックの考え方**:
- **役割で書体を完全に分離**（和文は明朝、欧文は Gill Sans Nova）
- 和文 → 欧文の系列内フォールバックは置かず、**和文系・欧文系それぞれ独立したスタックを持つ**設計
- Adobe Fonts のドメインライセンスのため、Adobe Fonts キット未読込環境では **`游明朝` → `YuMincho` → `serif`** に落ちる
- AI で再現する場合、Web フォントは **Shippori Mincho / Noto Serif JP**（Google Fonts）が代替候補。**Gill Sans Nova の代替は Public Sans / Lato では雰囲気が出ず、Cormorant Garamond / Marcellus 寄りより、本来は商用ライセンスで Gill Sans Nova を取得することが望ましい**

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・brands ページ、2026-05-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display H2 (Brands) | Gill Sans Nova | **112.5px** | 500 | 112.5px (×1.0) | 2.25px (≒0.02em) | `#000000` | "BRANDS" |
| Display H2 (Sustain) | Gill Sans Nova | **90px** | 500 | 90px (×1.0) | 1.80px (≒0.02em) | `#000000` | "SUSTAINABILITY" |
| Lead Paragraph | Yu Mincho | **20.25px** | 400 | 53.98px (×**2.67**) | 2.02px (≒**0.1em**) | `#000000` | "今日一日をがんばった〜" |
| Brand Name (Display) | Gill Sans Nova | 40px | 400 | 40px (×1.0) | normal | `#ffffff` | メニュー内ブランドリンク |
| Section Title (Modal) | Yu Mincho | 24px | 700 | 36px (×1.5) | normal | `#424242` | "動作保証対象外〜" |
| Body | Yu Mincho | **15.75px** | 400 | 23.62px (×1.5) | normal | `#000000` | デフォルト本文 |
| Body Modal Lead | Yu Mincho | 15px | 400 | 30px (×2.0) | normal | `#424242` | モーダル内説明 |
| Footer Brand Heading | Gill Sans Nova | 22.5px | 400 | 22.5px (×1.0) | normal | `#000000` | "COMPANY" |
| Footer Item | Gill Sans Nova | 22.5px | 400 | 33.74px (×1.5) | normal | `#000000` | フッターリスト |
| Nav Item (Header Open) | Gill Sans Nova | 18〜40px | 400 | 18〜40px (×1.0) | normal | `#ffffff` | メニュー展開時 |
| Copyright | Gill Sans Nova | 13.5px | 400 | 20.24px (×1.5) | normal | `#000000` | フッター |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (Yu Mincho 15.75px)**: `1.5`（23.62px / 15.75px）
- **リードパラグラフ (Yu Mincho 20.25px)**: `2.67`（53.98px / 20.25px）— **異常に広い**設計
- **ディスプレイ見出し (Gill Sans Nova 90〜112px)**: `1.0`（同寸 line-height で版面を引き締める）
- **モーダル本文 (Yu Mincho 15px)**: `2.0`

**字間 (letter-spacing)** — 実測:
- **本文・リード (Yu Mincho 20.25px)**: `2.02px` ≒ **`0.1em`** — 印刷物的な余韻を作る
- **ディスプレイ見出し**: 約 `0.02em`（Gill Sans Nova のジオメトリにわずかなトラッキング）
- **その他 Gill Sans Nova ナビ・フッター**: `normal`
- **本文 Yu Mincho 15.75px**: `normal`

**ガイドライン**:
- **リードパラグラフは `line-height: 2.67` + `letter-spacing: 0.1em`** で空気を最大化
- 通常本文は `line-height: 1.5` + `letter-spacing: normal` に戻し、可読性を確保
- Gill Sans Nova ディスプレイは **`line-height: 1.0`**（タイトに）+ 微トラッキングで版面を引き締める
- 同じ Yu Mincho でも、**本文と見せ場リードでまったく違うスタイル**になる点に注意

### 3.6 禁則処理・改行ルール

```css
/* Bake のスタイル */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
font-feature-settings: "palt";
```

- **`palt`** が全要素に適用されており、和文プロポーショナル詰めが版面の前提
- 印刷物のような版面なので、**手動改行で行末を揃える**演出が想定される

### 3.7 OpenType 機能

```css
font-feature-settings: "palt";
```

- 実測上、**全要素に `palt` を有効化**している
- 本文セリフ（游明朝）+ palt の組み合わせは珍しい（通常 palt は見出し用）
- Gill Sans Nova は palt の影響を受けないが、和欧混植時の和文側に効く

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

Bake は専用ボタンスタイルをほぼ持たない。代わりに**テキストリンク + 写真ホバー**で誘導する。

**Text Link (Footer / Body)**
- Background: transparent
- Text: `#000000`
- Font: Yu Mincho 15.75px / weight 400 / letter-spacing normal
- Decoration: なし（ホバー時 underline 推奨）

**Nav Link (Open Menu)**
- Background: `#000000`（暗背景オーバーレイ）
- Text: `#ffffff`
- Padding: `8px 14px`
- Font: Gill Sans Nova 18〜40px / weight 400 / letter-spacing normal
- Border Radius: なし

**Hamburger Toggle**
- Background: transparent
- Color: `#ffffff`
- Font: Gill Sans Nova 13.33px / weight 400
- アイコン主体、テキストは hidden

### Inputs（推奨値、実測ではフォーム項目が表面化していないため補完）

- Background: `#ffffff`
- Border: `1px solid #424242`
- Border (focus): `1px solid #000000`
- Border Radius: `0px`（角直、印刷物的）
- Padding: `12px 16px`
- Font: Yu Mincho 16px / weight 400
- Color: `#000000`

### Cards

- Background: `#ffffff` または `#f0f0e9`
- Border: なしまたは `1px solid #000000`（印刷物的な細枠が雰囲気に合う）
- Border Radius: `0px`（角直）
- Padding: `32〜48px`
- Shadow: 基本フラット

### Header / Nav

- 通常状態: トップに固定の透明バー、ロゴと "MENU" のみ
- 展開状態: `#000000` のフルスクリーンオーバーレイ、Gill Sans Nova の特大ナビが並ぶ

### Footer

- Background: `#f0f0e9`（本文と同じ紙クリーム）
- Color: `#000000`
- Padding: `64px 32px 32px`
- Layout: ロゴ／ブランド／アクセスの 3 カラム

---

## 5. Layout Principles

### Spacing Scale（推奨）

紙面組版に近い、ゆったりした空間設計:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | 文字間の小さな調整 |
| S | 16px | フッターリスト内 |
| M | 32px | カード内余白 |
| L | 64px | セクション内見出し下 |
| XL | 96px | セクション間 |
| XXL | 160px | 大セクション間（紙面の余白感） |

### Container

- Max Width: `1200px`（推奨）
- Padding (horizontal): mobile `24px` / desktop `48〜80px`
- 紙の余白を意識して、密に詰めず広めに取る

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | すべて（印刷物的） |

- Bake は角丸を**ほぼ使わない**。ピル・カードもすべて直角

### Grid

- 12 カラムまたは 8 カラムグリッド
- Gutter: 32〜48px（広めに）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素（基本フラット） |
| 1 | `0 0 0 1px #000000` | 印刷物的な細枠（推奨） |
| 2 | `0 8px 32px rgba(0, 0, 0, 0.08)` | モーダル（推奨） |

- Bake は **box-shadow をほぼ使わない**。版面の品位は色面と余白で作る
- 浮き上がりを表現する場合は枠線（`#000000` 1px）で代用するのが整合的

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文は **游明朝（Yu Mincho Pr6N → 游明朝 → YuMincho → serif）** を使う
- 欧文ディスプレイは **Gill Sans Nova** で、サイズは大胆に 90〜112px
- 背景は **`#f0f0e9`**（紙のクリーム）。純白は避ける
- **`font-feature-settings: "palt"`** を全要素に適用
- リード文は **line-height: 2.67 + letter-spacing: 0.1em** で空気を最大化
- ディスプレイ見出しは **line-height: 1.0** で版面を引き締める
- 角丸は **0px**（直角）に統一する
- 色数は **2〜3 色**に絞り、写真と余白でブランドを伝える

### Don't（禁止）

- 本文に **ゴシック体** を使わない（Bake の核は明朝体本文）
- 背景に **純白 `#ffffff`** を使わない（紙の温度が失われる）
- 角丸を **8〜12px** にしない（印刷物的な堅さが緩む）
- カラフルな CTA・派手なアクセント色を入れない（写真と余白の主役性が崩れる）
- リード文の line-height を **2.0 以下**にしない（空気感が消える）
- letter-spacing を **負値**にしない（`0.1em` の生成する余韻が逆になる）
- box-shadow を多用しない（紙面の平面性を保つ）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- Display H2 (Brands): 112.5px → 56〜72px
- Display H2 (Sustain): 90px → 48〜56px
- Lead Paragraph: 20.25px → 17〜18px、line-height 2.67 → 2.0、letter-spacing 0.1em は維持
- 本文 15.75px は維持
- グローバルナビはハンバーガーへ切り替え

### タッチターゲット

- 主要リンク: padding 上下を 12px 以上確保し、44px の高さに揃える
- ハンバーガー: 48×48px

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Paper Cream: #f0f0e9
Pure Black: #000000
Charcoal: #424242
Pure White: #ffffff

Body Font: yu-mincho-pr6n, 游明朝, YuMincho, serif
Display Font: gill-sans-nova, sans-serif
Font Feature: "palt"

Body: 15.75px / line-height 1.5 / weight 400 / letter-spacing normal / Yu Mincho
Lead: 20.25px / line-height 2.67 / letter-spacing 0.1em / weight 400 / Yu Mincho
Display H2: 112.5px / line-height 1.0 / letter-spacing 0.02em / weight 500 / Gill Sans Nova
Footer Item: 22.5px / line-height 1.5 / Gill Sans Nova

Border Radius: 0px（すべて直角）
Shadow: none（基本フラット、必要時は 1px 枠線）
```

### プロンプト例

```
Bake のコーポレートデザインに従って、ブランド紹介ページを作成してください。
- 背景: #f0f0e9（紙のクリーム）
- 本文フォント: yu-mincho-pr6n, 游明朝, YuMincho, serif
- ディスプレイフォント: gill-sans-nova, sans-serif（代替: Gill Sans 系）
- font-feature-settings: "palt" を全要素に適用
- セクション見出し "BRANDS": Gill Sans Nova / 112px / weight 500 / line-height 1.0 / letter-spacing 0.02em
- リード本文: 游明朝 / 20px / weight 400 / line-height 2.67 / letter-spacing 0.1em
- 通常本文: 游明朝 / 16px / weight 400 / line-height 1.5 / letter-spacing normal
- フッター項目: Gill Sans Nova / 22px / line-height 1.5
- テキスト色: #000000、補助は #424242、リンクは #000000 + ホバー underline
- 角丸: 0px（すべて直角）
- box-shadow: 使わない（必要時は 1px 黒枠で代用）
- セクション間の余白は 96〜160px と広めに取り、紙面の余韻を作る
- 装飾色は使わず、写真と余白でブランドを表現する
- ハンバーガー展開時のみ #000000 オーバーレイ + Gill Sans Nova の特大ナビ
```
