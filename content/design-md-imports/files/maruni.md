# DESIGN.md — マルニ木工 (MARUNI)

> マルニ木工（https://www.maruni.com/jp）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1928年創業の広島の家具メーカーらしい、温かみと品格のある工芸品ブランドサイト。深澤直人・ジャスパー・モリソンらのデザイン家具を主役にした美術書のようなレイアウト
- **密度**: 大判の家具写真と豊かな余白。本文は読み物のように line-height 1.8 でゆったり組む
- **キーワード**: クラフト、温かい、上質、控えめ、永続、木の質感、和の品格
- **特徴**: 純黒・純白を避け、本文は **#414141（暖かみのあるダークグレー）**、フッターには **#b4afaf（木材を思わせる暖灰色）** を採用。CTA は完全 pill 型（border-radius: 50px）で柔らかさを持たせ、地域タグは淡いベージュ `#eeebea` で工芸品の質感を表現

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

マルニ木工は彩度を意図的に抑え、木の温度感を持つ無彩色 + 暖灰色で構成。

- **Charcoal** (`#414141`): 本文テキスト、CTA 背景、見出し基調色（rgb 65, 65, 65）
- **Warm Gray** (`#b4afaf`): フッター背景、控えめな面色（rgb 180, 175, 175）

### Neutral

- **Text Primary** (`#414141`): 本文テキスト、見出し
- **Text Heading** (`#363636`): h1 のみさらに濃い。`rgb(54, 54, 54)`
- **Text Inverse** (`#ffffff`): 写真上のテキスト
- **Surface** (`#ffffff`): ヘッダー・標準背景
- **Footer Surface** (`#b4afaf`): フッター背景（暖灰）
- **Tag Surface** (`#eeebea`): 都市タグ・カテゴリタグの背景（オフホワイト寄りベージュ）
- **Overlay** (`rgba(255, 255, 255, 0.85)`): 写真上に重ねる半透明白タグ
- **Bullet** (`#414141` / `#000000`): スワイパーのドット（active = #414141, inactive = #000000）

### Accent

- 単色の彩色アクセントは使わない。木の素材感と写真の色を主役にする

---

## 3. Typography Rules

### 3.1 和文フォント

完全に **游ゴシック** 中心の構成。Hiragino Sans を Mac 環境のフォールバックに、Meiryo を Windows のフォールバックに置く。Webフォントは使用しない。

- **YuGothic / Yu Gothic medium**: macOS / Windows の游ゴシック
- **Hiragino Sans**: macOS フォールバック（Hiragino Kaku Gothic ProN ではなく Hiragino Sans）
- **Meiryo**: Windows フォールバック
- **sans-serif**: 最終フォールバック

### 3.2 欧文フォント

- 専用の欧文フォントは指定せず、和文フォント内蔵の欧文グリフを使用
- 数字・英字も游ゴシック内蔵の欧文で組む（半角数字含む）

### 3.3 font-family 指定

```css
font-family: YuGothic, "Yu Gothic medium", "Hiragino Sans", Meiryo, "sans-serif";
```

**フォールバックの考え方**:
- macOS の YuGothic を最優先（macOS では `YuGothic` 単独で游ゴシック Medium を呼び出す）
- Windows の `Yu Gothic medium` を 2 番目に置き、Windows でも游ゴシックを優先
- Hiragino Sans → Meiryo の順にフォールバック
- Mac/Windows 双方で游ゴシックを安定して呼び出す古典的なスタックパターン

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Page Title (h1) | 32px | 700 | 1.125 (36px) | 0.15px | サイト名 / 章タイトル。`#363636` |
| Hero Subtitle (h3 white) | 19.2px | 700 | 1.8 (34.56px) | 0.15px | "広島から世界へ" |
| Section Title (h2) | 18.4px | 700 | 1.8 (33.12px) | 1px | "納入事例" 等。字間 1px と広めに |
| Body Section Title (h2) | 16px | 700 | 1.25 (20px) | 0.15px | "商品を探す" |
| Footer Heading (h2) | 13.6px | 700 | 1.8 (24.48px) | 0.15px | "マルニ木工について" |
| Subsection (h3) | 15.2px | 400 | 1.8 (27.36px) | normal | "ショップ" |
| Tag Heading (h3) | 14.4px | 700 | 1.8 (25.92px) | normal | "採用情報" |
| Card Title (h4) | 16px | 700 | 1.8 (28.8px) | 0.15px | "MARUNI60" |
| Body | 16px | 400 | 1.8 (28.8px) | 0.15px | 本文。日本語向けに line-height 1.8 |
| Body Small | 14.4px | 400 | 1.8 (25.92px) | 0.15px | 日付、補足 |
| Pill Tag | 16px | 600 | 1.8 (28.8px) | 0.15px | 都市名タグ "東京" "大阪" |
| Caption | 12px | 700 | 1.8 (21.6px) | 0.15px | カード上の小タイトル |
| Copyright | 11.2px | 400 | 1.8 (20.16px) | 0.15px | フッター © 表記 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（28.8px / 16px）。日本語の長文ブロックで読みやすさを最大化
- **見出しの行間**: 大見出しは 1.125（h1）と詰める一方、中見出しは 1.8 と本文と同じく開く。見出しと本文の段落が均質に見える
- **本文の字間**: `letter-spacing: 0.15px`（≈0.009em）。微小な字間を全テキストに均一適用。游ゴシックの素朴な字面を整える効果
- **特殊な字間**: "納入事例" 等の中見出しのみ `letter-spacing: 1px` と広めに開けて、章扉のような格調を出す

### 3.6 OpenType 機能

```css
font-feature-settings: "calt", "clig", "kern", "liga";
```

- **calt** (Contextual Alternates): 文脈依存の字形置換
- **clig** (Contextual Ligatures): 文脈依存の合字
- **kern**: カーニング
- **liga** (Standard Ligatures): 標準合字
- **palt は使用しない**: マルニは和文の字詰めを行わず、游ゴシックの本来の字面（デフォルトメトリクス）を尊重する。これは「素材本来の質感を生かす」家具づくりの思想と通底する選択

### 3.7 改行・禁則

- WordPress ベースのため `--wp--preset--font-size--normal: 16px`, `--wp--preset--font-size--huge: 42px` のプリセットを定義
- 本文ブロックでは `word-break` を強制せず、ブラウザのデフォルト禁則処理に委ねる

---

## 4. Component Stylings

### Buttons

**Primary CTA**（"すべての納入事例を見る" "全国から各シリーズ別の展示店を探す"）

- Background: `#414141`
- Text: `#ffffff`
- Font Family: 游ゴシックスタック
- Font Size: 16px
- Font Weight: 400（太字にしない。pill 型の柔らかさを保つ）
- Line Height: 28.8px (1.8)
- Padding: **5px 30px 3px 35px**（左右非対称。アイコン＋テキストの構成のため、左に余裕を持たせる）
- Border Radius: **50px**（完全 pill 型）
- Border: none
- Letter Spacing: 0.15px

**Tag / Pill Selector**（"東京" "大阪" "広島（LECT）" "福岡"）

- Background: `#eeebea`
- Text: `#414141`
- Font Size: 16px
- Font Weight: 600
- Line Height: 28.8px
- Padding: 5px 15px
- Border Radius: 50px

**Overlay Tag**（写真の上に重なる "詳しく見る"）

- Background: `rgba(255, 255, 255, 0.85)`（半透明白）
- Text: `#414141`
- Font Size: 12.8px
- Font Weight: 400
- Padding: 5px 20px 3px 25px（左右非対称）
- Border Radius: 50px

**Tab Corner CTA**（"公式オンラインショップはこちら" — フッター上部）

- Background: `#b4afaf`
- Text: `#414141`
- Padding: 10px 20px
- Border Radius: **0px 28.8px 0px 0px**（右上のみ角丸。タブのような造形）

### Inputs

抽出データに input 要素は出現しなかったが、CTA pill との整合を取ると以下が想定値:

- Border Radius: 50px（完全 pill）または 0px（フラット長方形）
- Border: 1px solid `#b4afaf`
- Padding: 12px 20px
- Background: `#ffffff`
- Font Size: 16px

### Cards

- Background: `#ffffff`
- Border Radius: 0px（家具写真は矩形のままトリミング）
- Padding: 内側 0、外側にゆとり
- Shadow: なし（フラット）
- 写真 + キャプション + タグの 3 要素構成

### Swiper（スライダー）

- Bullet (inactive): `background: #000000; border-radius: 100%;`
- Bullet (active): `background: #414141; border-radius: 100%;`

---

## 5. Layout Principles

### Container

- 最大幅は `--wp--preset--font-size` 経由で WordPress 標準のコンテナを使用
- ヘッダー padding: 20px 上下（`padding: 20px 0px;`）
- フッター padding: 40px 上下

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 3px | h1 padding-bottom |
| S | 5px | CTA 上下 padding |
| M | 10px | カードカテゴリ余白 |
| L | 20px | ヘッダー/フッター padding |
| XL | 36px | リスト padding-left |
| XXL | 40px | フッター上下余白 |

### Grid

- ヒーローは 1 カラム全幅
- 商品グリッドは 2〜3 カラム（タブレット〜PC）
- スワイパーで 1 アイテムずつ視差スクロール

---

## 6. Depth & Elevation

マルニはシャドウを使わずフラットに構成する。家具写真自体が立体感を持つため、UI からシャドウを削いでも空間は十分にある。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。すべての要素 |
| 1 | `0 2px 6px rgba(65,65,65,0.06)` | （想定値）モバイル時のフローティングナビ |
| 2 | `0 8px 16px rgba(65,65,65,0.10)` | （想定値）モーダル時のみ |

実際にはフラット (Level 0) のまま運用されている。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文・見出しすべてに **`color: #414141`** を採用（純黒は使わない）
- 本文の `line-height: 1.8` を必ず確保。読み物として組む
- 全要素に `letter-spacing: 0.15px` を一律適用して游ゴシックの字面を整える
- CTA は **完全 pill (border-radius: 50px)** で柔らかさを表現
- カテゴリ・地域タグは **`#eeebea`（淡いベージュ）+ #414141 文字** の pill で組む
- 写真の上に重ねるラベルは **半透明白 (rgba(255,255,255,0.85))** で写真を透かす
- font-feature-settings は `"calt", "clig", "kern", "liga"` を使い、palt は **使わない**
- 数字は游ゴシック内蔵欧文で組み、欧文専用フォントを別指定しない

### Don't（禁止）

- 純黒 `#000000` を本文や見出しに使わない（マルニの暖かみが失われる）
- 純白 `#ffffff` 一色のフッターを使わない（フッターは `#b4afaf` 等の暖灰で締める）
- 鋭い直角の CTA（`border-radius: 0`）を使わない。pill が基本
- `palt` を使って文字を詰めない。游ゴシックの素のメトリクスを尊重
- 鮮やかな彩度のアクセントカラー（赤・青・緑）を入れない
- 装飾的なドロップシャドウを多用しない。家具写真の立体感を主役に
- 行間 1.5 以下で本文を組まない。1.8 が標準

---

## 8. Responsive Behavior

### Breakpoints（一般的な WordPress テーマの慣例ベース）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- h1 32px はそのまま、または 28px 程度
- ヘッダーはハンバーガーメニュー化（`menu-show` クラスがその制御）
- 商品グリッドは 1 カラムに折り返し
- フッター「公式オンラインショップ」CTA は画面下部固定で表示される設計

### タッチターゲット

- pill CTA は最小 44px の高さ（5+25+5+18.8 = 53.8px）を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: マルニ木工 (MARUNI)
Primary Text: #414141 (純黒は不可)
Surface: #ffffff
Footer Surface: #b4afaf (暖灰)
Tag Surface: #eeebea (淡ベージュ)
Overlay Tag: rgba(255, 255, 255, 0.85)
Font: YuGothic, "Yu Gothic medium", "Hiragino Sans", Meiryo, "sans-serif"
Body Size: 16px
Body Line Height: 1.8 (28.8px)
Letter Spacing: 0.15px (全要素)
font-feature-settings: "calt", "clig", "kern", "liga"
palt: 使用しない
CTA Border Radius: 50px (完全 pill)
CTA Padding: 5px 30px 3px 35px (左右非対称)
Heading Color: #414141 (h1 のみ #363636)
```

### プロンプト例

```
マルニ木工のデザインシステムに従って、新作チェアの紹介ページを作成してください。
- フォント: YuGothic, "Yu Gothic medium", "Hiragino Sans", Meiryo, "sans-serif"
- 本文の color は #414141、line-height: 1.8、letter-spacing: 0.15px
- font-feature-settings: "calt", "clig", "kern", "liga" (palt は使わない)
- ヒーローは大判の椅子の写真 + 半透明白 (rgba(255,255,255,0.85)) のキャプション pill
- CTA「商品を見る」は #414141 bg + #ffffff text + border-radius: 50px + padding: 5px 30px 3px 35px
- 地域タグは #eeebea bg + #414141 text + border-radius: 50px + padding: 5px 15px
- フッターは #b4afaf 背景、コピーライトは 11.2px / 400
```

### 字詰め・組版の重要ポイント

1. **palt を使わない**: 游ゴシックの素のメトリクスを尊重する。これがマルニの「素材主義」の表現
2. **letter-spacing: 0.15px を全要素に**: 微小な字間を均一に置くことで游ゴシックを締める
3. **line-height は 1.8 で本文を組む**: 工芸品ブランドにふさわしい読み物リズム
4. **#414141 の徹底**: 本文・見出し・CTA まで一律でこの色を使う。純黒は禁止
5. **CTA の左右非対称 padding**: `5px 30px 3px 35px` の左右非対称は、左にアイコン余白を残す造形思想

---

**取得日**: 2026-05-08
**出典**: https://www.maruni.com/jp, https://www.maruni.com/jp/products
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
