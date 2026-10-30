# DESIGN.md — OSAJI（オサジ）

> OSAJI（https://osaji.net/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 2017年に皮膚科学者・茂田正和が立ち上げたスキンケアブランド。「日本の四季と暮らしの中の機嫌」をテーマに、**深い森を思わせるダークグリーン #1b281d** とベージュの **#ddd9cf** を基調にした、内省的で自然主義的なエディトリアル。グラフィックは抑制的で、文字組と余白で空気を作る
- **密度**: 本文は 12.6px と小さめで密度高く、letter-spacing 0.06em の間合いで「読ませる組版」を作る。商品ページや読み物コンテンツ（OSAJI ジャーナル）が中心
- **キーワード**: スキンケア、ダークグリーン、Noto Sans Japanese、Zen Old Mincho、矩形 CTA（radius 0）、四季、内省、エシカル
- **特徴**: 和文は **Noto Sans Japanese**（ゴシック）と **Zen Old Mincho**（明朝）を併用。CTA はすべて **border-radius: 0** の完全矩形で潔い。font-weight は本文 400 / ボタン 700 と明確に切り替える。色は「森の暗緑 + 砂のベージュ + 灰みのある中間色」のアースパレット

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

OSAJI の世界観の中心は **深い森の緑 #1b281d**。漆黒に近いがわずかに緑をふくむ、植物と土を想起させる色。

- **Forest Dark** (`#1b281d`): Primary CTA・見出し色・ロゴ（rgb 27, 40, 29）
- **Beige Sand** (`#ddd9cf`): セカンダリ面・ナチュラルな砂色（rgb 221, 217, 207）— 出現回数 16 と多い
- **Misty Sage** (`#868f8f`): スワッシュ的にも使われる灰緑（rgb 134, 143, 143）— 出現回数 17 で最多
- **Stone Gray** (`#dcdde0`): 区切り・控えめなセクション地（rgb 220, 221, 222）

### Text & Neutral

- **Text Primary** (`rgba(27, 40, 29, 0.92)`): 本文の色（Forest Dark の 92% 透明度）
- **Text Heading** (`#1b281d`): 見出しの濃い緑黒
- **Text Sub** (`#595757`): 副見出し・"New Items" 等のサブセクション（rgb 89, 87, 87）
- **Text Mute** (`#868f8f`): 補助テキスト・パンくず等（rgb 134, 143, 143）
- **Text Caption** (`#a7a2a9`): 商品フッターのキャプション（rgb 167, 162, 169）

### Surface

- **Surface White** (`#ffffff`): 標準背景
- **Surface Light** (`#f5f5f5`): 極淡セクション
- **Surface Beige** (`#ddd9cf`): ベージュのナチュラル面
- **Surface Dark** (`#1b281d`): ダーク反転のセクション
- **Overlay Dark** (`rgba(27, 40, 29, 0.5)`): 画像オーバーレイ

### Functional

- **Action Gray** (`#444444`): 二次的な機能ボタン（"もっと見る" "絞り込み" のレビュー UI）
- **Cream White** (`#f3f3f3`): 反転背景上のテキスト色

---

## 3. Typography Rules

### 3.1 和文フォント

OSAJI は **Noto Sans Japanese** を本文・見出しの基本とし、文学的な引用や読み物用途で **Zen Old Mincho** を併走させる二刀流。

- **Noto Sans Japanese**: 本文・見出し・ボタンの基本。Google Fonts の Noto Sans JP と同系
- **Zen Old Mincho**: 引用・コラム・ジャーナル系の明朝表現
- **ヒラギノ角ゴ ProN W3 / Hiragino Kaku Gothic ProN**: macOS フォールバック
- **游ゴシック / YuGothic**: Windows フォールバック

### 3.2 欧文フォント

- 欧文専用の指定はなく、Noto Sans Japanese / Zen Old Mincho が欧文も担当
- 「View all」「PRODUCTS」等の英文ラベルも和文同居の Noto Sans Japanese で組まれる

### 3.3 font-family 指定

```css
/* 本文・見出し（ゴシック） */
font-family: "Noto Sans Japanese", "Zen Old Mincho", "Noto Sans JP",
             "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
             游ゴシック, YuGothic, sans-serif;

/* 一覧 CTA 等の補助系（macOS 標準ゴシック優先） */
font-family: "Noto Sans JP", "ヒラギノ角ゴ ProN W3",
             "Hiragino Kaku Gothic ProN", 游ゴシック, YuGothic, sans-serif;

/* レビュー UI 等の組み込みウィジェット */
font-family: Arial, sans-serif;
```

**フォールバックの考え方**:
- Noto Sans Japanese を Web フォントで読み込み、未到達なら OS の標準ゴシック
- Zen Old Mincho は Google Fonts でも提供されるが、引用箇所のみで使用
- 一部の埋め込みコンポーネント（レビュー）は Arial fallback

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Title (h1/h2) | 25.5px | 400 | 1.5 (38.25px) | 1.53px (0.06em) | "Ranking 人気商品ランキング" 等 |
| Banner Label (h2) | 11.7px | 400 | 1.6 (18.72px) | 0.702px (0.06em) | "PRODUCTS" 等の見出し小文字 |
| Card Title (h3) | 12.6px | 400 | 1.5 (18.9px) | 0.756px (0.06em) | "a rose for you ギフトセット" |
| Body | 12.6px | 400 | 1.89 (23.8px) | normal | 本文 |
| Lead (p) | 11.05px | 400 | 1.5 (16.575px) | 0.663px (0.06em) | "サイトリニューアル..." 等の通知 |
| Button Primary | 12.6px | 700 | 1.0 | 0.9px (0.07em) | "コンテンツに進む" |
| Button Small | 10.8px | 700 | normal | normal | "View all" |
| Button Outline | 14px | 400 | normal | normal | "一覧を見る" |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.89`（23.8px / 12.6px）— 12.6px の小ささに対して大きく開いた行間で、密度の高さと読みやすさを両立
- **見出しの行間**: 1.5 を基本に、英文大文字ラベル（"PRODUCTS"）のみ 1.6
- **見出し・ラベルの字間**: `letter-spacing: 0.06em`（≈1.53px@25.5px、0.702px@11.7px、0.756px@12.6px）— 一貫して 0.06em の比率
- **本文の字間**: `letter-spacing: normal`（0）
- **ボタンの字間**: 0.07em（0.9px @ 12.6px）— 見出しよりわずかに広い

### 3.6 OpenType 機能

- 抽出データ上で明示的な `font-feature-settings` 指定はなし（normal）
- Noto Sans Japanese / Zen Old Mincho の備える既定のカーニング・約物処理
- **`palt` は使用しない**: 字詰めは行わず、`letter-spacing: 0.06em` の均等な間合いで組む

### 3.7 改行・禁則

- 本文は word-break: normal の自然な折り返し
- 商品名（"a rose for you ギフトセット" のような英日混在）は改行を許容
- 通知バナー等は letter-spacing 0.06em で1行に収める前提

---

## 4. Component Stylings

### Buttons

**Primary CTA（Forest Dark）**（"コンテンツに進む" 等）

- Background: `#1b281d`
- Text: `#ffffff`
- Border: なし
- Border Radius: **0px**（完全矩形）
- Padding: 10.8px 32.4px
- Font Family: Noto Sans Japanese stack
- Font Size: 12.6px
- Font Weight: **700**
- Letter Spacing: 0.9px (0.07em)

**Small Primary（"View all"）**

- Background: `#1b281d`
- Text: `#ffffff`
- Border Radius: **0px**
- Padding: 7.2px 21.6px
- Font Size: 10.8px / Weight 700

**Small Sub Variant**

- Background: `#595757`（グレーバージョン）
- Text: `#f3f3f3`
- 上記と同サイズ・形

**Small Reverse Variant**

- Background: `#ffffff`
- Text: `#1b281d`
- Border Radius: 0px
- 反転表示

**Outline CTA（"一覧を見る"）**

- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Border Radius: **4px**（ごくわずかな角丸 — 例外的）
- Padding: 14px 60px
- Font Size: 14px / Weight 400
- 注: メインの矩形 CTA とは異なる、補助的な「一覧へ」誘導

**Embedded Action（"もっと見る" レビュー UI）**

- Background: `#444444`
- Text: `#ffffff`
- Border Radius: 2px
- Padding: 10px 0px / 8px 0 6px
- Font Family: Arial
- Font Size: 14〜16px
- 注: サードパーティのレビューウィジェット由来。OSAJI 固有 UI ではない

**ボタンの考え方**:
- メインは **radius 0px の完全矩形**。`#1b281d` の塗りつぶしが OSAJI の象徴
- font-weight は **700** で強く立てる（本文 400 とのコントラスト）
- "一覧を見る" のような補助 CTA は Outline + radius 4px と書き分け

### Inputs

- Font Family: Noto Sans Japanese stack
- Font Size: 12.6〜14px
- Border: 1px solid `#dcdde0`
- Border Radius: 0px（矩形）
- Background: `#ffffff`

### Cards（商品カード）

- Background: `#ffffff` または `#ddd9cf`（ベージュ）
- Border Radius: 0px
- Shadow: なし（フラット）
- 製品写真 + h3（12.6px / 0.06em） + 価格テキスト の構成

### Section Backgrounds

- Hero: `#ffffff` または `#ddd9cf`（ベージュ）
- Editorial: `#1b281d`（ダーク反転）+ `#f3f3f3` テキスト
- Footer: `#1b281d` 反転

---

## 5. Layout Principles

### Container

- ヘッダー・フッターは max-width 全幅
- メインコンテンツは固定 max-width（実測ベースで 1200〜1280px 想定）の中央寄せ
- ジャーナル等の読み物は max-width 720px 前後の単段組み

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 7.2px | Small CTA 縦 padding |
| S | 10.8px | CTA 縦 padding |
| M | 14px | Outline CTA 縦 padding |
| L | 21.6px | Small CTA 横 padding |
| XL | 32.4px | CTA 横 padding |
| XXL | 60px | Outline CTA 横 padding |

### Grid

- 商品グリッドは 3〜4 カラム
- ランキング・新商品はカルーセル（Swiper.js）
- ジャーナル一覧は 2 カラム

---

## 6. Depth & Elevation

OSAJI はシャドウを基本使わない。色面の濃淡（ダーク反転と白・ベージュ）で空間を作る。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準 |
| 1 | `1px solid #dcdde0` border | カード境界 |
| 2 | `rgba(27, 40, 29, 0.5)` overlay | 画像上のキャプションレイヤー |
| Modal | bg `#1b281d` の濃緑面 | フッター・モーダル |

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しに **`color: #1b281d`**（Forest Dark）を使う
- 本文 color は **`rgba(27, 40, 29, 0.92)`**（92% 透明度の Forest Dark）
- フォントは **Noto Sans Japanese** を基本、引用は **Zen Old Mincho**
- **`letter-spacing: 0.06em`** を見出し・ラベル・カードタイトルに一貫適用
- 本文の `line-height: 1.89` で密度の高さと読みやすさを両立
- ボタンは **`border-radius: 0px`** の完全矩形（補助 CTA だけ 4px 許容）
- Primary CTA は **`#1b281d`** + `#ffffff` + **font-weight: 700**
- セカンダリ面に **`#ddd9cf`** のベージュを大胆に使う
- 反転セクションは **`#1b281d` + `#f3f3f3`** の組み合わせ

### Don't（禁止）

- 純黒 `#000000` を本文や見出しに使わない（Forest Dark の方がブランド整合）
- 鮮やかな色（赤・青）を使わない。アースパレットを保つ
- 本文を太字（700）にしない。Primary CTA だけ 700
- pill（border-radius 50%）を使わない
- 大きな角丸（8px〜）を CTA に使わない
- 見出しの letter-spacing を 0 にしない（0.06em が固有）
- セリフ系のラテン書体を使わない（Zen Old Mincho が明朝担当）
- Adobe Fonts のような商用フォントに依存しない（Noto / Zen Old Mincho は Google Fonts で代替可能）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Section Title h2 25.5px → 22px 程度
- 商品グリッドは 2 カラムに折り返す
- ヘッダーはハンバーガー化
- 反転セクションのフッターは縦並びに

### タッチターゲット

- Primary CTA は最小 32.4px 高（10.8 + 10.8 + 12.6 = 34.2px）— やや小さめなので、モバイル時は padding 拡張推奨
- Outline CTA は 14 + 14 + 14 = 42px で十分

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: OSAJI（オサジ）
Primary Color: #1b281d (Forest Dark)
Secondary Beige: #ddd9cf
Misty Sage: #868f8f
Stone Gray: #dcdde0
Text Primary: rgba(27, 40, 29, 0.92)
Text Sub: #595757
Text Mute: #868f8f
Surface: #ffffff / #ddd9cf
Body Font: "Noto Sans Japanese", "Zen Old Mincho", "Noto Sans JP", ヒラギノ角ゴ ProN W3, sans-serif
Body Size: 12.6px / 400 / line-height 1.89
Heading Letter Spacing: 0.06em (1.53px @ 25.5px)
Heading Weight: 400
CTA Border Radius: 0px (主) / 4px (補助 Outline)
CTA Font Weight: 700
CTA Padding: 10.8px 32.4px (大) / 7.2px 21.6px (小)
palt: 使用しない
```

### プロンプト例

```
OSAJI（オサジ）のデザインシステムに従って、新作スキンケアの紹介ページを作成してください。
- フォント: "Noto Sans Japanese", "Zen Old Mincho", "Noto Sans JP", "ヒラギノ角ゴ ProN W3", sans-serif
- 本文 color は rgba(27, 40, 29, 0.92)、line-height: 1.89、letter-spacing: normal
- 見出し color は #1b281d、letter-spacing: 0.06em、font-weight 400
- ヒーロー h2「四季と肌」は 25.5px / 400 / line-height 1.5 / letter-spacing 0.06em
- リード（p 12.6px）で商品コンセプトを紹介
- 引用や叙情的な文章は Zen Old Mincho の明朝で組む
- Primary CTA「View all」は #1b281d bg + #ffffff text + radius 0px + padding 7.2px 21.6px + font-weight 700
- セカンダリ面は #ddd9cf のベージュ、反転セクションは #1b281d + #f3f3f3
- 商品カードは radius 0 + 写真 + h3 12.6px / 0.06em
- 全体としてアースパレット（森の緑・砂のベージュ・霧のセージ）で構成
```

### 字詰め・組版の重要ポイント

1. **letter-spacing 0.06em の徹底**: 見出し・ラベル・カードタイトルすべてに 0.06em。OSAJI の組版の核心
2. **本文 line-height 1.89**: 12.6px の小ささに対して大きく開けた行間。密度の高さと可読性を両立
3. **CTA radius は 0px**: pill ではなく完全矩形。スキンケアブランドにありがちな丸い CTA を避けることでアートディレクション色が出る
4. **Forest Dark #1b281d**: 純黒ではない。森と土を含んだダークグリーン
5. **ゴシック + 明朝の併走**: Noto Sans Japanese で読ませ、Zen Old Mincho で文学性を加える
6. **font-weight は 400 と 700 のみ**: 中間ウェイトを使わない潔さ

---

**取得日**: 2026-05-08
**出典**: https://osaji.net/, https://osaji.net/products/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
