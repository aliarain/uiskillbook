# DESIGN.md — グッドデザイン賞 / GOOD DESIGN AWARD（Gマーク）

> グッドデザイン賞（https://www.g-mark.org/）公式サイトのデザイン仕様書。
> 公益財団法人日本デザイン振興会が運営する、日本で唯一の総合的なデザイン評価制度。1957年から続く「Gマーク」を冠した、日本を代表するデザインアワード。
> 鮮烈な **Gマーク赤 #c00014** をブランドの中心に置き、Roboto Condensed + Gothic MB101 Bold（Morisawa）の縦に締まった見出し書体と、Noto Sans JP の安定した本文を組み合わせる。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` の上に、**鮮烈な Gマーク赤 `#c00014`** をピル状の CTA・タグ・見出しのアクセントとして散らす。本文は柔らかいダークグレー `rgba(0,0,0,0.84)` で、メリハリは色（赤）と書体コントラスト（Condensed 見出し vs. ノーマル本文）で作る
- **密度**: h1 が **48px / weight 700 / line-height 1.5 / letter-spacing 2px**（Roboto Condensed + Gothic MB101 Bold）の堂々とした構え。本文は **Noto Sans JP 16px / line-height 1.75（28px）** とゆったり
- **キーワード**: Gマーク赤、Roboto Condensed、Gothic MB101 Bold（Morisawa）、Noto Sans JP、ピル CTA（radius 999px）、letter-spacing プラス、84% 透過テキスト、淡クリーム背景
- **特徴**:
  - **ブランド赤 `#c00014`** は **Gマーク（1957年デザイン）** のロゴ赤そのもの。CTA / アクセント見出し / リンクの強調すべてに使う
  - **CTA は完全な pill（radius 999px）** — 主に2スタイル: ① 白背景＋赤テキスト＋赤2px 枠 / ② 赤背景＋白テキスト
  - 見出しは **Roboto Condensed + Gothic MB101 Bold** の混植 — 縦に締まった condensed フェイスで、英文・数字・和文ともに**新聞・展覧会的なエディトリアルトーン**
  - 本文は **Noto Sans JP / weight 400 / line-height 1.75（28px）** — Web 標準の安定した日本語組版
  - テキストカラーが **`rgba(0, 0, 0, 0.84)`** — 純黒ではなく 84% 不透明の柔らかい黒
  - **letter-spacing がプラス方向**（h1: +2px = 0.04em、本文 16px h2: +0.32px = 0.02em）— 日本語見出しのゆとりを意識
  - ヒーロー写真や受賞作スライダーが多用され、**色付き面は Gマーク赤と暖かい cream（`#eeeae5`）以外ほぼ登場しない**
  - 言語切替（JP/EN/CN/KR）あり、**JA ボタンだけ Arial 13.33px とシステムフォント**
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> Gマーク赤と無彩色で構成される、極めて潔いパレット。

### Brand

- **G-Mark Red** (`#c00014`): メインブランドカラー（rgb(192, 0, 20)）。CTA・タグ・見出しアクセント・タイトル数字すべて
- **G-Mark Red Light**（推奨 `#e6233a`）: ホバー時のリフトアップ（実測なし、デザインバランスから推奨）

### Surface / Background

- **Background White** (`#ffffff`): ページ背景
- **Surface Light** (`#f7f7f7`): セクション境界の薄面（"PICK UP NEWS" / "WHY GOOD DESIGN AWARD?" 帯）
- **Surface Cream** (`#eeeae5`): 暖かいクリーム面（記事カード・特集枠）
- **Surface Dark** (`#292929`): フッター背景（rgb(41, 41, 41)）
- **Cookie Banner** (`#3d3d3d`): クッキー同意バナーの帯（rgb(61, 61, 61)）

### Text

- **Text Primary** (`rgba(0, 0, 0, 0.84)` ≈ **`#292929`**): 本文・見出しの基本色
- **Text Secondary** (`rgba(0, 0, 0, 0.56)` ≈ **`#707070`**): 副ナビ・補助テキスト
- **Text Muted** (`#999999`): 日付・タイムスタンプ
- **Text White** (`#ffffff`): 暗色面・赤面の上のテキスト

### Overlay

- **White Overlay** (`rgba(255, 255, 255, 0.32)`): 暗い写真上のテキスト背面用

### Semantic（補完）

- ブランド赤を CTA・アクセントに専有しているため、**エラー色には濃いオレンジ `#d04a3a` か紫味の赤 `#a8001f`** で重ならないように区別
- 警告: `#e8a943`、成功: `#3eb088`（Noto Sans JP に合うトーンで）

---

## 3. Typography Rules

### 3.1 和文フォント

- **メイン（本文）**: **Noto Sans JP（Google Fonts）** — Web 標準の安定した日本語ゴシック
- **見出し（条件付き）**: **Gothic MB101 Bold（Morisawa）** — 新聞・雑誌の見出しでよく使われる Morisawa の condensed gothic。weight 700 で堂々とした構え
- **フォールバック**: システム sans-serif

### 3.2 欧文フォント

- **見出し / アクセント**: **Roboto Condensed（Google Fonts）** — 縦に締まった condensed sans。数字・英字を編集的に見せる
- **本文**: Noto Sans JP の欧文グリフを使用（混植せず）
- **JA/EN ボタン**: Arial（言語切替のみ別フォント）

### 3.3 font-family 指定

実サイトの実測値（**3 系統に明確に分かれる**）:

```css
/* 本文: Noto Sans JP */
font-family: "Noto Sans JP", sans-serif;

/* 見出し・アクセント: Roboto Condensed + Gothic MB101 Bold */
font-family: "Roboto Condensed", "Gothic MB101 Bold", sans-serif;

/* 言語切替ボタン: Arial */
font-family: Arial;
```

**フォールバックの考え方**:
- 本文は **Noto Sans JP 単独**（Google Fonts のみで完結）— `sans-serif` のみフォールバック
- 見出しは **Roboto Condensed が先頭、Gothic MB101 Bold が和文を担当** — Web フォントが届かない環境では `sans-serif` へフォールバック
- AI で再現する場合:
  - **Noto Sans JP / Roboto Condensed は Google Fonts で取得可能**
  - **Gothic MB101 Bold は Morisawa 商用ライセンスのため、代替: "Zen Kaku Gothic New" / "Noto Sans JP" weight 700 / "Hiragino Kaku Gothic ProN" W7**

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・記事ページ、2026-05-07 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero h1 | Roboto Condensed + Gothic MB101 Bold | **48px** | **700** | 72px (×1.5) | 2px (+0.042em) | `rgba(0,0,0,0.84)` | "グッドデザイン賞ってなに？" |
| Section h1 / h2 | Roboto Condensed + Gothic MB101 Bold | 28px | 700 | 48px (×1.71) | 0.56px (+0.02em) | `rgba(0,0,0,0.84)` | 段落見出し |
| Card Title | Roboto Condensed + Gothic MB101 Bold | 16px | **700** | 24px (×1.5) | 0.32px (+0.02em) | `rgba(0,0,0,0.84)` | 記事カードのタイトル |
| Nav Link | Roboto Condensed + Gothic MB101 Bold | 16px | 600 | 24px (×1.5) | 0.32px (+0.02em) | `rgba(0,0,0,0.84)` | グローバルナビ |
| Sub Nav | Roboto Condensed + Gothic MB101 Bold | 16px | 600 | 24px (×1.5) | 0.32px (+0.02em) | `rgba(0,0,0,0.56)` | サブナビ（薄め） |
| Body | Noto Sans JP | 16px | 400 | 28px (×1.75) | normal | `rgba(0,0,0,0.84)` | 通常本文 |
| Body Strong | Noto Sans JP | 16px | 700 | 28px (×1.75) | normal | `#c00014` | 強調された赤本文 |
| Body on Dark | Noto Sans JP | 16px | 400 | 28px (×1.75) | normal | `#ffffff` | クッキーバナー等 |
| Pill Number | Roboto Condensed + Gothic MB101 Bold | 20px | **700** | 28px (×1.4) | 0.4px (+0.02em) | `#c00014` | "全てのお知らせを見る" 等 |
| Small Pill | Roboto Condensed + Gothic MB101 Bold | 14px | 600 | 20px (×1.43) | normal | `#c00014` / `#ffffff` | "もっとくわしく" |
| Date Caption | Roboto Condensed | 14px | 700 | 20px (×1.43) | 0.28px (+0.02em) | `#999999` | 日付・タグ |
| Lang Switch | Arial | 13.33px | 400 | normal | normal | `rgba(0,0,0,0.84)` | "JA" のみ |

### 3.5 行間・字間

- **本文の line-height**: **1.75**（28px / 16px）— Noto Sans JP の標準的な日本語行間
- **見出しの line-height**: **1.5 〜 1.71**（72/48、48/28）— ゆったりとした見出し用行間
- **letter-spacing**: **基本プラス方向**（+0.02 〜 +0.042em）— 日本語見出し・数字のゆとり感
  - h1: +0.042em (大きめ)
  - h2 / Card Title: +0.02em
  - Body: normal

**ガイドライン**:
- 大型見出しほど letter-spacing をプラス方向に強く（h1: 2px = 0.042em）
- 本文は normal、欧文混じりの場合 Noto Sans JP の自然な詰めに任せる
- Gothic MB101 Bold は単独で重く見えるため、letter-spacing でゆとりを足すのが鉄則

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 受賞作タイトル・社名は折り返しを避けるため `white-space: nowrap` を推奨

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **`palt` 等の追加 feature は使わない** — Noto Sans JP は固定幅で、letter-spacing による調整に統一

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary Pill (Filled)** — メイン CTA
- Background: `#c00014`
- Text: `#ffffff`
- Padding: `16px 32px`（推奨。実測 padding 16px 0px）
- Border Radius: `999px`（pill）
- Border: `0`
- Font: Roboto Condensed + Gothic MB101 Bold, 20px, weight 700, letter-spacing 0.4px
- Box Shadow: なし

**Outline Pill (Large)** — セカンダリ CTA
- Background: `#ffffff`
- Text: `#c00014`
- Border: `2px solid #c00014`
- Padding: `16px 32px`
- Border Radius: `999px`
- Font: Roboto Condensed + Gothic MB101 Bold, 20px, weight 700, letter-spacing 0.4px

**Outline Pill (Small)** — 補助 CTA
- Background: `#ffffff`
- Text: `#c00014`
- Border: `2px solid #c00014`
- Padding: `12px 24px`
- Border Radius: `999px`
- Font: Roboto Condensed + Gothic MB101 Bold, 14px, weight 600

**Dark Pill** — クッキー拒否ボタン等
- Background: `#3d3d3d`
- Text: `#ffffff`
- Border: `2px solid #3d3d3d`
- Padding: `12px 24px`
- Border Radius: `999px`
- Font: Roboto Condensed + Gothic MB101 Bold, 14px, weight 600

**Circular Icon Button** — フローティングアイコン
- Background: `#c00014`
- Color: `#ffffff`
- Border Radius: `50%`（円）
- Size: 推奨 56〜64px

### Inputs

実 UI に大きく表面化していないが、Gマークトーンに合わせる場合:

- Background: `#ffffff`
- Border: `1px solid rgba(0, 0, 0, 0.14)`
- Border (focus): `2px solid #c00014`
- Border Radius: `999px`（pill）または `8px`
- Padding: `12px 24px`
- Font: Noto Sans JP 16px

### Cards

- Background: `#ffffff` / `#eeeae5`（cream）/ `#f7f7f7`（gray）
- Border: なし
- Border Radius: `0px` 〜 `8px`
- Padding: `24px`
- Shadow: フラット（基本影なし）

### Header / Nav

- Background: `#ffffff`
- Color: `rgba(0, 0, 0, 0.84)`
- Padding: `16px 32px`
- ロゴ Gマーク（赤）左、ナビ右
- Sub Nav は不透明度 0.56 で薄く

### Footer

- Background: `#292929`（rgb(41, 41, 41)）
- Color: `#ffffff`
- Padding: `64px 32px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコン文字間 |
| S | 8px | リスト項目間 |
| M | 16px | カード内段落間 |
| L | 24px | カード間 |
| XL | 32px | カードパディング |
| XXL | 48px | セクション内余白 |
| XXXL | 64px | フッター padding |
| Hero | 96px | ヒーローと次セクションの間 |

### Container

- Max Width: 推奨 `1200〜1280px`
- Padding (horizontal): mobile 16px / desktop 32〜48px

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | カード（基本） |
| Small | 8px | 入力フィールド・小カード |
| Pill | 999px | CTA・タグすべて |
| Circle | 50% | 円形アイコンボタン |

### Grid

- 受賞作グリッド: 3〜4 カラム / Gutter 24〜32px
- お知らせ: 1〜2 カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・パネル（基本フラット） |
| 1 | `0 2px 8px rgba(192, 0, 20, 0.10)` | 赤系 CTA のホバーリフト（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | モーダル（推奨） |

- グッドデザイン賞は**影をほぼ使わない**。色（赤）と書体（Condensed）でメリハリを作る
- 必要時のみ赤系シャドウで一貫性を保つ

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラーは **`#c00014`** を厳守（Gマーク赤、1957年から続く由緒）
- CTA は **pill 形（radius 999px）** に統一
- 見出しは **Roboto Condensed + Gothic MB101 Bold**、本文は **Noto Sans JP** で書体を明確に分ける
- 大型見出しの letter-spacing は **+0.04em**、中見出しは **+0.02em** とプラス方向に
- 本文 line-height は **1.75（28/16）** に保つ（Noto Sans JP の標準）
- テキストカラーは **`rgba(0, 0, 0, 0.84)`** を使う（純黒は避ける）
- 暗色面・写真上では **`#ffffff`** または **半透明白 `rgba(255,255,255,0.32)`** をオーバーレイに
- セクション境界には **`#f7f7f7` / `#eeeae5`（cream）** の薄面を使う

### Don't（禁止）

- 赤を Gマーク赤以外の色に変えない（`#c00014` 厳守）
- CTA を矩形（角丸 0〜8px）に変えない（pill が標準）
- 本文に Roboto Condensed を使わない（見出し専用）
- 見出しに Noto Sans JP を使わない（編集トーンが消える）
- 純黒 `#000000` を本文に使わない（柔らかい `rgba(0,0,0,0.84)` を）
- letter-spacing をマイナスにしない（日本語見出しのゆとりが消える）
- 影を多用しない（Gマークは色と書体でメリハリを作る）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | ≤ 1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Hero h1: 48px → 28〜32px
- Section h2: 28px → 22〜24px
- Body: 16px は維持
- 受賞作グリッド: 3〜4 → 2 → 1 カラム
- ナビは drawer ハンバーガーへ切り替え
- Pill ボタン padding は維持（`16px 32px` は最低でも `12px 24px` に）

### タッチターゲット

- pill CTA は最小 `padding: 12px 24px` で 44px 高さ確保

### ダークモード

- 該当なし。常時ライトモード

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff
Text: rgba(0, 0, 0, 0.84) ≈ #292929
Text Secondary: rgba(0, 0, 0, 0.56) ≈ #707070
Surface Light: #f7f7f7
Surface Cream: #eeeae5
Surface Dark (footer): #292929

Brand Red: #c00014（Gマーク赤）

Body Font: "Noto Sans JP", sans-serif
Heading Font: "Roboto Condensed", "Gothic MB101 Bold", sans-serif
  Web Fallback: "Roboto Condensed", "Zen Kaku Gothic New", "Noto Sans JP", sans-serif

Hero h1: 48px / weight 700 / line-height 1.5 / letter-spacing +0.042em / Roboto Condensed + Gothic MB101 Bold
Section h2: 28px / weight 700 / line-height 1.71 / letter-spacing +0.02em / 同上
Card Title: 16px / weight 700 / line-height 1.5 / letter-spacing +0.02em / 同上
Nav Link: 16px / weight 600 / line-height 1.5 / letter-spacing +0.02em / 同上
Body: 16px / weight 400 / line-height 1.75 (28px) / letter-spacing normal / Noto Sans JP

Pill CTA (Primary): bg #c00014 / text white / radius 999px / padding 16px 32px / 20px / weight 700 / Roboto Condensed
Pill CTA (Outline): bg white / text #c00014 / 2px border #c00014 / radius 999px / padding 16px 32px

Border Radius: 0px (card) / 8px (input) / 999px (pill) / 50% (icon button)
Shadow: none（基本フラット）
```

### プロンプト例

```
グッドデザイン賞のデザインに従って、受賞作一覧ページを作成してください。
- 背景: #ffffff
- 本文フォント: "Noto Sans JP", sans-serif
- 見出しフォント: "Roboto Condensed", "Gothic MB101 Bold", sans-serif
  （Web 代替: "Roboto Condensed", "Zen Kaku Gothic New", "Noto Sans JP", sans-serif）
- ページタイトル h1: 48px / weight 700 / line-height 1.5 / letter-spacing +0.042em (2px) / color rgba(0,0,0,0.84)
- セクション h2: 28px / weight 700 / line-height 1.71 / letter-spacing +0.02em
- 受賞作カードタイトル: 16px / weight 700 / line-height 1.5 / letter-spacing +0.02em / Roboto Condensed
- 本文: Noto Sans JP / 16px / weight 400 / line-height 1.75 (28px) / letter-spacing normal
- 日付・キャプション: Roboto Condensed / 14px / weight 700 / letter-spacing +0.02em / color #999999
- 詳細ボタン (pill): bg white / text #c00014 / 2px border #c00014 / radius 999px / padding 16px 32px / Roboto Condensed 20px weight 700
- 応募ボタン (filled pill): bg #c00014 / text white / radius 999px / padding 16px 32px / 20px weight 700
- カード: bg #ffffff or #eeeae5 (cream) / 角丸 0px or 8px / 影なし
- セクション境界: #f7f7f7 (light) or #eeeae5 (cream)
- フッター: bg #292929 / text white / padding 64px 32px
- テキスト色は純黒 #000000 を使わず、rgba(0, 0, 0, 0.84) を基本に
- ブランド赤 #c00014 は Gマーク由来の色のため、CTA・タグ・強調以外には使わない
- pill (radius 999px) を CTA の標準形に
```
