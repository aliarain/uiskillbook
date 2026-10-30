# DESIGN.md — KAPITAL（キャピタル）

> KAPITAL（https://www.kapital.jp/）のデザイン仕様書。
> 岡山・児島発、デニムとヴィンテージ・フォークロアを融合したクラフト志向ファッションブランド。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ダークブラウン `#261107` を基調にした重厚な革・デニムの世界観**。黒ではなく「焦げ茶」を全面に使い、泥染め・藍染め・パッチワークといった手仕事の温度感を伝える。欧文はセリフの **Kameron** とモノスペースの **Courier New** で「古い活版印刷」の印象を出し、和文は **游ゴシック** で控えめに支える
- **密度**: 本文 13px / line-height 1.23。テキスト量は少なく、写真主体。ヒーロースライドの白文字オーバーレイ（42〜94px Bold）で大胆に空間を使う
- **キーワード**: ダークブラウン、Kameron セリフ、Courier New モノスペース、ボーダーCTA、直角、クラフト、ヴィンテージ、フォークロア
- **特徴**:
  - **ブランドカラーは `#261107`（焦げ茶）**。テキスト色・背景色の両方に使用。純黒 `#000000` は使わない
  - **欧文見出しに Kameron（Google Fonts セリフ）**。"WHAT'S NEW"、"Online Shopping" 等の英セクションタイトルで使用
  - **CTA に Courier New モノスペース**。"Read more" ボタンやフッターソーシャルリンクに採用。タイプライター的な無骨さが世界観に合致
  - **ボタンはボーダーのみ（塗りなし）**。3px solid の太い枠線＋ホバー時のスイープアニメーション（`hvr-sweep-to-right`）
  - **border-radius はすべて 0**。ピルもラウンドも一切なし。直角のみ
  - **palt / kern は不使用**。OpenType 機能なし
  - **letter-spacing は `normal`**。全要素で文字間調整をしていない
  - **アクセントカラーは暖色系のタン `#d2ac91`**。ページネーションのアクティブ状態に使用

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Dark Brown** (`#261107`): ブランドの根幹色。テキスト色・ページ背景・ヘッダー・フッターすべてに使用。革やデニムの焦げ茶を表現
- **Brand Tan** (`#d2ac91`): 暖かみのあるキャメル。ページネーションのアクティブ状態背景。なめし革・生成りの印象
- **Brand Deep Brown** (`#401c0c`): ローディング画面の背景。Brand Dark Brown のさらに濃い変種

### CTA / Buttons

- **Primary CTA**（ボーダー枠）: 背景 `transparent` / 文字 `#261107` / **border `3px solid #261107`** / **radius `0`** / padding `8.4px 28px` / Courier New monospace, 14px, weight 700
- **Pagination Default**: 背景 `#ffffff` / 文字 `#261107` / radius `0` / 游ゴシック, 17.6px, weight 700
- **Pagination Active**: 背景 `#d2ac91` / 文字 `#261107` / radius `0` / 游ゴシック, 17.6px, weight 700

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Brown | `#261107` | (38, 17, 7) | テキスト色・背景・ボーダー（万能色） |
| Deep Brown | `#401c0c` | (64, 28, 12) | ローディング画面背景 |
| Tan | `#d2ac91` | (210, 172, 145) | アクティブ状態・アクセント面 |
| Gray | `#adadad` | (173, 173, 173) | セパレータ・補助テキスト（推定） |
| White | `#ffffff` | (255, 255, 255) | ヒーロー文字・ページネーションデフォルト面 |

### Semantic（推奨値）

実サイトにはエラー／成功色は表面化していない。ブランドの暖色系に合わせた推奨補完値:

- **Danger**: `#8b2500`（レンガ色。焦げ茶と調和する深い赤茶）
- **Warning**: `#a67c00`（アンティークゴールド）
- **Success**: `#4a6741`（深いモスグリーン。アースカラー圏内）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・ナビ全般）**: **游ゴシック / YuGothic → ヒラギノ角ゴ ProN W3 / Hiragino Kaku Gothic ProN → メイリオ / Meiryo → ＭＳ Ｐゴシック / MS PGothic → sans-serif**
- 和文は見出し・本文ともにゴシック体一本。明朝体の使用なし

### 3.2 欧文フォント

- **セリフ見出し**: **Kameron**（Google Fonts）— "WHAT'S NEW"、"Online Shopping" の英セクションタイトル
- **モノスペース CTA**: **Courier New, monospace** — "Read more" ボタン、フッターソーシャルリンク
- **ヒーローオーバーレイ**: **"Hiragino Kaku Gothic Pro", "San Francisco", "Open Sans", "Yu Gothic UI", sans-serif** — ヒーロースライドの大見出し（"FARM"、"SEA" 等）

### 3.3 font-family 指定

実サイトの実測値（4 バリエーション）:

```css
/* 本文・ナビ・カード（游ゴシックスタック） */
font-family: 游ゴシック, YuGothic,
  "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 英セクション見出し（Kameron セリフ） */
font-family: Kameron, sans-serif;

/* CTA・フッターソーシャル（Courier New モノスペース） */
font-family: "Courier New", monospace;

/* ヒーロースライドオーバーレイ */
font-family: "Hiragino Kaku Gothic Pro", "San Francisco",
  "Open Sans", "Yu Gothic UI", sans-serif;
```

**フォールバックの考え方**:
- **和文は游ゴシック先頭**。Windows の游ゴシック問題（細い Regular が当たる）は未対策。SmartHR のような `@font-face` Medium マッピングはしていない
- **Kameron は Google Fonts のスラブセリフ**。太いセリフの筆致がクラフト・ヴィンテージ感を出す
- **Courier New のモノスペースは意図的**。CTA テキストにタイプライター感を付与する独特な選択

> **代替フォント注記**: Kameron は Google Fonts で直接利用可能。Courier New も OS バンドル。preview.html ではそのまま使用できる。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Overlay | Hiragino Kaku Gothic Pro stack | 42〜94px | 700 | — | normal | `#ffffff` | "FARM", "SEA" 等のスライド |
| H1 EN Section | Kameron | 32.4px | 700 | 39.9px (×1.23) | normal | `#261107` | "WHAT'S NEW" |
| H2 EN Section | Kameron | 41px | 700 | — | normal | `#261107` | "Online Shopping" |
| H2 JP Label | 游ゴシック | 19.5px | 700 | — | normal | `#261107` | "KOUNTRY EXCLUSIVE!!" |
| Hero Caption JP | 游ゴシック | 25.6px | 400 | — | normal | `#261107` | ヒーローキャプション |
| Body | 游ゴシック | 13px | 400 | 16px (×1.23) | normal | `#261107` | 本文テキスト |
| Nav Link | 游ゴシック | 14px | 400 | — | normal | `#261107` | ヘッダーナビリンク |
| Body Sub | 游ゴシック | 14px | 400 | — | normal | `#261107` | 説明テキスト |
| CTA "Read more" | Courier New | 14px | 700 | — | normal | `#261107` | ボーダーボタン |
| Pagination | 游ゴシック | 17.6px | 700 | — | normal | `#261107` | ページ番号 |
| Date / Meta | 游ゴシック | 12px | 400 | — | normal | `#261107` | 日付・メタ情報 |
| Footer Link | Kameron | 14px | 400 | — | normal | `#ffffff` | フッターナビ |
| Footer Social | Courier New | 21.6px | 400 | — | normal | `#ffffff` | SNS リンク |
| Nav Submenu | 游ゴシック | 13px | 400 | 16px | normal | `#261107` | サブメニュー |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (13px)**: **`1.23`**（16px / 13px）— 非常にタイト。クラフト系ブランドらしいストイックな詰め
- **H1 EN (32.4px Kameron)**: `1.23`（39.9px / 32.4px）— 本文と同じ比率
- **ヒーローオーバーレイ**: 単行が多く、line-height は実質不問

**字間 (letter-spacing)** — 実測:
- **全要素**: **`normal`**（letter-spacing の指定なし）
- KAPITAL は文字間を一切調整しない。フォント本来の字間をそのまま使う

**ガイドライン**:
- 本文 line-height `1.23` は日本語としてはかなりタイト（通常 1.5〜2.0 推奨）。KAPITAL の詰まった、密度感のあるレイアウトを意図的に表現している
- letter-spacing は `normal` で統一。`palt` も使わない。素の活字をそのまま並べるクラフト的な姿勢
- ヒーローの 42〜94px Bold は写真上の白抜きで使うため、可読性よりインパクト優先

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 特別な禁則処理の設定は見られない。ブラウザのデフォルト動作に依存

### 3.7 OpenType 機能

```css
/* 明示的な OpenType 機能指定なし */
font-feature-settings: normal;
```

- **`palt` 不使用** — 和文プロポーショナル詰めを行わない
- **`kern` 不使用** — カーニング指定なし
- フォント本来の字面をそのまま表示する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ボーダー枠）** — "Read more"
- Background: `transparent`
- Text: `#261107`
- Border: **`3px solid #261107`**（太い枠線が特徴）
- Padding: `8.4px 28px`
- Border Radius: `0`（直角）
- Font: "Courier New", monospace, 14px, weight 700, letter-spacing normal
- Hover: `hvr-sweep-to-right`（背景が左から右へスイープ塗り）

**Pagination Default**
- Background: `#ffffff`
- Text: `#261107`
- Border: なし（推定）
- Border Radius: `0`
- Font: 游ゴシック, 17.6px, weight 700

**Pagination Active**
- Background: `#d2ac91`（タン）
- Text: `#261107`
- Border Radius: `0`
- Font: 游ゴシック, 17.6px, weight 700

### Inputs（推定値）

サイト上で目立った入力フォームは未確認。ブランドの色調に基づく推奨値:

- Background: `#ffffff`
- Border: `1px solid #261107`
- Border (focus): `2px solid #261107`
- Border Radius: `0`（直角。全コンポーネント共通）
- Padding: `10px 12px`
- Font: 游ゴシック, 13px, weight 400
- Color: `#261107`

### Cards / Surfaces

- Card Background: `#ffffff`（写真カードの下地）
- Border: なしが基本。写真の枠で区切る
- Border Radius: `0`（直角）
- 日付・テキストは写真の下に配置

### Header

- Background: `#261107`（ダークブラウン、ページ背景と一体化）
- Position: 固定ヘッダー
- Nav Text: 游ゴシック, 14px, weight 400, color `#261107`

### Footer

- Background: `#261107`（ダークブラウン）
- Text: `#ffffff`
- Link Font: Kameron, 14px, weight 400（英語ナビ）
- Social Font: "Courier New", monospace, 21.6px（SNS リンク）

---

## 5. Layout Principles

### Spacing Scale（推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の最小余白 |
| S | 16px | カード内の段落間 |
| M | 24px | セクション内の見出し周り |
| L | 40px | セクション間の区切り |
| XL | 60px | ヒーローと次セクションの間 |
| XXL | 80px | フッター上部の余白 |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `40〜60px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0 | **唯一の値。全要素に適用** |

KAPITAL は border-radius を一切使わない。ピルもラウンドコーナーもなし。

### Grid

- ニュースカードは 3〜4 カラムグリッド
- Gutter: 16〜24px
- 写真とテキストのシンプルな2段構成

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **唯一の値。すべての要素** |

- 実測ではすべての要素 `box-shadow: none`
- 立体感は **ダークブラウンの濃淡**（`#261107` / `#401c0c`）と **白文字のコントラスト** で表現
- シャドウではなく、**色の明暗と写真の質感**で奥行きを出すブランド
- ローディング画面の `#401c0c` → 本体の `#261107` の遷移が唯一の「層」の表現

---

## 7. Do's and Don'ts

### Do（推奨）

- **ブランドカラーは `#261107`（焦げ茶）を使う** — 黒（`#000000`）ではなく必ず焦げ茶を基調にする
- **英セクション見出しは Kameron（スラブセリフ）** で Bold 700 にする
- **CTA は Courier New モノスペース + 3px solid ボーダー**。塗りではなく枠で表現する
- **border-radius は全要素 0（直角）** を貫く
- **写真を大きく使い、テキストは最小限** にする — ビジュアルドリブン
- **ヒーローの欧文は白抜き Bold 42〜94px** で大胆に載せる
- **letter-spacing は `normal`**。文字間を詰めも広げもしない
- **アクセント面には `#d2ac91`（タン）** を使う。暖色系のアースカラーを守る

### Don't（禁止）

- **テキスト色に純黒 `#000000` を使わない** — 必ず `#261107` を使う。KAPITAL の世界観は「茶」であって「黒」ではない
- **ボタンを塗りつぶさない** — CTA はボーダー枠のみ。filled button は世界観を壊す
- **border-radius を付けない** — ピル（9999px）も角丸（8px）も一切不可
- **`palt` や `kern` を適用しない** — フォント本来の字間をそのまま使う
- **寒色系のブルーやグリーンをアクセントに使わない** — ブランドは暖色系（ブラウン・タン・レンガ色）のアースカラーのみ
- **モダン系サンセリフ（Inter, Helvetica, SF Pro）を見出しに使わない** — 英文は Kameron セリフ + Courier New モノスペース
- **本文の line-height を 1.5 以上に広げすぎない** — KAPITAL は 1.23 のタイトな詰めが特徴
- **白背景を安易にメインにしない** — ページ背景はダークブラウン `#261107` が基本。白は写真カードの下地やページネーション等の限定的な使用

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト（3〜4 カラムグリッド有効化） |

### モバイル時の調整

- ヒーローオーバーレイ: 42〜94px → 24〜48px に縮小
- H1 Kameron: 32.4px → 24px
- H2 Kameron: 41px → 28px
- 本文サイズ 13px は維持
- カードグリッドは 1〜2 カラムに変更

### タッチターゲット

- "Read more" CTA: padding `8.4px 28px` でタップ領域は十分
- ページネーション: 17.6px Bold で十分なサイズ
- ヘッダーナビ: モバイル時はハンバーガーメニューに切り替え

### ダークモード

- 該当なし。ただし **デフォルトがダークブラウン背景のため、実質ダークテーマ**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Dark Brown (万能色): #261107
Brand Tan (アクセント): #d2ac91
Brand Deep Brown (ローディング): #401c0c
Gray (補助): #adadad
White: #ffffff

JP Body Font: 游ゴシック, YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
EN Heading Font: Kameron, sans-serif
CTA / Accent Font: "Courier New", monospace
Hero Overlay Font: "Hiragino Kaku Gothic Pro", "San Francisco", "Open Sans", "Yu Gothic UI", sans-serif

Body: 13px / line-height 1.23 / letter-spacing normal / weight 400 / color #261107
H1 EN: Kameron 32.4px / weight 700 / line-height 1.23 / color #261107
H2 EN: Kameron 41px / weight 700 / color #261107
H2 JP: 游ゴシック 19.5px / weight 700 / color #261107
Hero: 42-94px / weight 700 / color #ffffff
CTA: Courier New 14px / weight 700 / border 3px solid #261107 / radius 0

Border Radius: 0（全要素。例外なし）
Shadow: none（全要素）
font-feature-settings: normal（palt / kern 不使用）
letter-spacing: normal（全要素）
```

### プロンプト例

```
KAPITAL のデザインに従って、新着ニュースセクションを作成してください。
- ページ背景: #261107（焦げ茶。黒ではない）
- 英見出しフォント: Kameron, sans-serif（Google Fonts スラブセリフ）
- 本文フォント: 游ゴシック, YuGothic, "ヒラギノ角ゴ ProN W3", sans-serif
- セクション見出し: Kameron 32.4px / weight 700 / color #261107
- 本文: 游ゴシック 13px / weight 400 / line-height 1.23 / color #261107
- CTA "Read more": Courier New monospace 14px / weight 700 / border 3px solid #261107 / padding 8.4px 28px / radius 0 / hover sweep-to-right
- ページネーション: 游ゴシック 17.6px / weight 700 / デフォルト白背景 / アクティブ #d2ac91 背景 / radius 0
- カード: 写真 + 日付 + テキストのシンプルな構成 / border-radius 0
- テキスト色は全て #261107（純黒 #000000 は使わない）
- ボタンは塗りつぶさずボーダー枠のみ
- border-radius は全要素 0（ピル・角丸は不可）
- letter-spacing / palt / kern は一切不使用
```
