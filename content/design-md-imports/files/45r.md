# DESIGN.md — 45R（フォーティーファイブアール）

> 45R（https://www.45r.jp/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1977年に井上保美が立ち上げた、藍とインディゴ染めを軸にした日本のアパレルブランド。**A1 ゴシック**（Morisawa）一本でブランド全体を組み、ブランドカラー **#1c2940（インディゴ／藍）** を CTA・テキストすべてに使う。藍染めの工房が持つ、誠実で柔らかい現代和風の世界観
- **密度**: ヒーロー見出しは 50〜60px と非常に大きく、letter-spacing -1.5〜-1.8px のタイトな字詰めで重心を作る。本文は 14〜20px、行間 1.6 で読みやすさを保つ
- **キーワード**: 藍染め、インディゴ #1c2940、A1 Gothic、Morisawa、レール（線）色 #e5e7e9、矩形 + 6px 角丸、ヘリテージ、藍の白、現代和風
- **特徴**: フォントは **A1 Gothic** の Light / Regular / Medium のみ。font-weight は全て 400 のままで、ファミリーバリアントで太さを切り替える Morisawa ならではの組版。CTA は **インディゴ塗りつぶし + radius 6px** とライトグレー塗り + radius 0px の二系統

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

45R の世界観の中心は **藍 / インディゴ #1c2940**。CSS 変数 `--wp--preset--color--indigo: #1C2940` として明示的に定義されている、ブランドの主軸色。

- **45R Indigo** (`#1c2940`): 文字・ロゴ・Primary CTA の主軸色（rgb 28, 41, 64）— 藍染めの色そのもの
- **Pale Pink** (`#f78da7`): 季節キャンペーン用アクセント（WordPress プリセット）— 桜・春のフィーチャー時のみ

### Functional / Status

WordPress 側のデザイントークンとして以下が定義されている。在庫状態のラベル等で使う。

- **Restock** (`#e1e0d7`): 再入荷バッジの背景（rgb 225, 224, 215）— 砂色
- **Soldout** (`#f17676`): 完売バッジの背景（rgb 241, 118, 118）— 柔らかな赤

### Surface & Line

- **White** (`#ffffff`): 標準背景
- **Line** (`#e5e7e9`): 区切り線・薄面・"WOMEN" "MEN" 等のセカンダリ CTA の背景（rgb 229, 231, 233）
- **Thin** (`#cced3`): さらに細い区切り（rgb 204, 206, 211）
- **Light Gray** (`#c1c1c1`): 補助境界色（rgb 193, 193, 193）

### Text

- **Text Primary** (`#1c2940`): 本文・見出しの主要色（インディゴ）— **黒は使わず、すべて藍で組む**
- **Text Secondary** (`#838994`): サブテキスト（rgb 131, 137, 148）
- **White Text** (`#ffffff`): Primary CTA 上のテキスト

---

## 3. Typography Rules

### 3.1 和文フォント

45R は **A1 Gothic**（Morisawa）を Light / Regular / Medium の3バリアントで使い分ける。Adobe Fonts で配信されている。

- **A1 Gothic L**: 大ヒーロー見出し（50〜60px の超大型タイトル）
- **A1 Gothic R**: 本文・標準的な見出し・CTA
- **A1 Gothic M**: 日付・小キャプション・補助情報

### 3.2 欧文フォント

- 欧文専用の指定はなく、A1 Gothic が欧文も担当（"NEW" "WOMEN" "MEN" "MAY COLLECTION 2026" 等）
- A1 Gothic は欧文も整った字面を持つため、日英混植でも違和感がない

### 3.3 font-family 指定

```css
/* 本文・標準 */
font-family: "A1 Gothic R", sans-serif;

/* 大ヒーロー見出し */
font-family: "A1 Gothic L";

/* 日付・小キャプション */
font-family: "A1 Gothic M";
```

**フォールバックの考え方**:
- Adobe Fonts の A1 Gothic が読み込めなかった場合 sans-serif（OS の標準ゴシック）
- 日本語環境では Hiragino Sans / Yu Gothic にフォールバック
- font-weight は **常に 400**。太さはファミリーバリアントで切り替える（A1 Gothic L / R / M）
- preview など Adobe Fonts が使えない環境では **Zen Kaku Gothic New**（Google Fonts、Morisawa 系で字形が近い）で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font Family | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|-------------|------|--------|-------------|----------------|------|
| Hero Title (h2) | A1 Gothic L | 60px | 400 | 1.23 (74px) | -1.8px (-0.03em) | "MAY COLLECTION 2026" |
| Section Title (h2) | A1 Gothic L | 50px | 400 | 2.0 (100px) | -1.5px (-0.03em) | "New arrivals" |
| Block Title (h2) | A1 Gothic R | 32px | 400 | 1.3 (41.6px) | normal | "花処　江戸桜" 等 |
| Lead (p) | A1 Gothic R | 20px | 400 | 1.6 (32px) | normal | "45Rで初めて、本物の…" |
| Body (p) | A1 Gothic R | 14〜16px | 400 | 1.6 (22.4px) | normal | 本文 |
| Sub Link (a) | A1 Gothic R | 18px | 400 | 1.5 (27px) | -0.54px (-0.03em) | "商品一覧を見る" |
| Date / Caption (a) | A1 Gothic M | 12〜13.3px | 400 | 1.67 (20〜22px) | -0.24〜-0.27px (-0.02em) | "2026.5.7 New arrivalsを更新しました" |
| Tiny Date (span) | A1 Gothic M | 10〜11px | 400 | 1.2 (12〜13.3px) | -0.24〜-0.27px (-0.02em) | "2026.5.7" |
| Small Note (span) | A1 Gothic R | 12px | 400 | 2.0 (24px) | -0.36px (-0.03em) | "Online store outside of Japan" |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.6`（22.4px / 14px、32px / 20px）— 自然な可読性
- **巨大見出しの行間**: 1.23〜2.0。Hero（60px）は 1.23 と詰めて重さを出し、Section（50px）は 2.0 と大きく開けてリズムを作る
- **大見出しの字間**: `letter-spacing: -0.03em`（-1.5px @ 50px、-1.8px @ 60px）— **マイナスの字詰め**で重心を作る
- **本文の字間**: `letter-spacing: normal`（0）
- **日付・キャプションの字間**: `-0.02em`（-0.24px @ 12px）— わずかなマイナス字詰め
- **ボタン・リンクの字間**: `-0.03em`（-0.54px @ 18px）

### 3.6 OpenType 機能

- 抽出データ上で明示的な `font-feature-settings` 指定はなし（normal）
- A1 Gothic（Morisawa）の備える既定のカーニング・約物処理に依存
- **`palt` は使用しない**: 和文の字詰めは Morisawa A1 Gothic のメトリクスに任せる

### 3.7 改行・禁則

- 本文は word-break: normal の自然な折り返し
- 商品名・特集タイトル（"花処　江戸桜" など、全角スペースで意図的に区切るタイトル）は1単語として扱い、改行を避ける
- 大ヒーロー（"MAY COLLECTION 2026"）は1行に収める前提

---

## 4. Component Stylings

### Buttons

**Primary CTA（45R Indigo + 角丸 6px）**（"コーディネートを見る" "くわしく見る" "もっと見る" 等）

- Background: `#1c2940`
- Text: `#ffffff`
- Border: なし
- Border Radius: **6px**
- Padding: 0px 28px〜64px（ボタン高は line-height で確保）
- Font Family: `"A1 Gothic R", sans-serif`
- Font Size: 14〜16px
- Font Weight: 400

**Secondary CTA（ライトグレー塗り + 矩形）**（"WOMEN" "MEN" のカテゴリー導線）

- Background: `#e5e7e9`（line color）
- Text: `#1c2940`（インディゴ）
- Border: なし
- Border Radius: **0px**（完全矩形）
- Padding: 15px
- Font Family: `"A1 Gothic R", sans-serif`
- Font Size: 16px
- Font Weight: 400

**Tertiary（透明 + 緩い角丸）**（特集記事カード等の透明領域リンク）

- Background: transparent
- Text: `#1c2940`
- Border Radius: 10px（カード状のリンクのみ）
- Padding: 80px（巨大なカード状）

**ボタンの考え方**:
- Primary は **インディゴ塗り + radius 6px**。"45R らしさ" の象徴
- Secondary は **ライトグレー塗り + radius 0px**。CTA より地味で、ナビ的役割
- 2つの形（角丸 6px と矩形 0px）を**意図的に書き分け**、Primary と Secondary を視覚的に分離

### Inputs

- Font Family: A1 Gothic R, sans-serif
- Font Size: 14〜16px
- Border: 1px solid `#cced3`
- Border Radius: 6px（Primary CTA に揃える想定）
- Background: `#ffffff`

### Cards（商品カード）

- Background: `#ffffff`
- Border Radius: 0px〜10px（用途による）
- Shadow: なし（フラット）
- 製品写真 + 商品名 (A1 Gothic R) + 価格 + バッジ（restock #e1e0d7 / soldout #f17676）

### Section Backgrounds

- Hero: `#ffffff` または商品写真フル
- Listing: `#ffffff` の白基調
- Footer: `#1c2940`（インディゴ反転）+ `#ffffff` テキスト

### Status Badges

- **再入荷**: bg `#e1e0d7`（restock）+ text `#1c2940`
- **完売**: bg `#f17676`（soldout）+ text `#ffffff`
- **NEW**: bg `#1c2940` + text `#ffffff`

---

## 5. Layout Principles

### Container

- ヘッダーは max-width 全幅
- メインコンテンツは固定 max-width（実測ベースで 1200〜1400px 想定）の中央寄せ
- グローバルナビは画面幅いっぱいで、横スクロール対応

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 15px | Secondary CTA padding |
| S | 28px | CTA 横 padding |
| M | 64px | Primary CTA 横 padding（"くわしく見る"） |
| L | 80px | カード状リンクの padding（特集タイトル） |

### WordPress Preset Sizes

CSS Custom Properties に以下のフォントサイズプリセットが定義されている。記事 UI 等で使用される。

| Token | Value |
|-------|-------|
| `--wp--preset--font-size--small` | 13px |
| `--wp--preset--font-size--medium` | 20px |
| `--wp--preset--font-size--large` | 36px |
| `--wp--preset--font-size--x-large` | 42px |

### Grid

- 商品グリッドは 3〜4 カラム
- 特集記事は 2 カラム
- ヒーローは 1 カラム全幅

---

## 6. Depth & Elevation

45R はシャドウを基本使わない。インディゴと白の対比で空間を作る。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準 |
| 1 | `1px solid #e5e7e9` border | カード境界 |
| 2 | `1px solid #cced3` border | より細い境界 |
| Reverse | bg `#1c2940` + text `#ffffff` | フッター・モーダル |

---

## 7. Do's and Don'ts

### Do（推奨）

- **すべての文字を `color: #1c2940`**（45R Indigo）で組む。**黒は使わない**
- フォントは **A1 Gothic** の L / R / M バリアントで切り替える。font-weight は **400 固定**
- 大ヒーロー見出し（50〜60px）には **A1 Gothic L** を使い、`letter-spacing: -0.03em` のタイトな詰め
- 本文・標準見出しは **A1 Gothic R** + letter-spacing: normal
- 日付・キャプションは **A1 Gothic M** + letter-spacing: -0.02em
- Primary CTA は **`#1c2940` + radius 6px** の組み合わせ
- Secondary CTA は **`#e5e7e9` + radius 0px** の矩形
- Status バッジは `#e1e0d7`（restock）/ `#f17676`（soldout）/ `#1c2940`（NEW）のプリセット色を使う
- 反転セクション（フッター等）は `#1c2940` + `#ffffff`

### Don't（禁止）

- 純黒 `#000000` を文字色や見出しに使わない
- font-weight を変える代わりに A1 Gothic L / R / M のバリアントを切り替える
- A1 Gothic 以外のフォント（Hiragino・YuGothic 等）を直接指定しない（fallback としてのみ）
- Primary と Secondary の **radius を統一しない**。6px と 0px を意図的に使い分ける
- 鮮やかな色（vivid-red, vivid-orange 等の WordPress プリセット）を本文や CTA に使わない
- 大見出しの letter-spacing を 0 にしない（-0.03em のタイト詰めが必須）
- 太字（700）を使わない。すべて 400 のまま、ファミリーで太さを表現
- バッジの色を勝手に変えない（restock / soldout / NEW のプリセットは保つ）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Hero h2 60px → 36〜42px（`--wp--preset--font-size--x-large` 相当）
- Section h2 50px → 32px
- 商品グリッドは 2 カラムに折り返す
- Secondary CTA "WOMEN" / "MEN" は縦並び

### タッチターゲット

- Primary CTA は line-height で 40px 以上を確保
- Secondary CTA は padding 15px で 46px 以上

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: 45R（フォーティーファイブアール）
Primary Color (Indigo): #1c2940
Line Color: #e5e7e9
Thin Border: #cced3
Light Gray: #838994
Restock Badge: #e1e0d7
Soldout Badge: #f17676
Surface: #ffffff
Body Font: "A1 Gothic R", sans-serif
Hero Font: "A1 Gothic L"
Caption Font: "A1 Gothic M"
Body Size: 14〜16px / 400 / line-height 1.6
Hero Size: 50〜60px / 400 / line-height 1.23〜2.0 / letter-spacing -0.03em
Body Letter Spacing: normal
Caption Letter Spacing: -0.02em
Primary CTA: bg #1c2940, color #fff, radius 6px
Secondary CTA: bg #e5e7e9, color #1c2940, radius 0px
Font Weight: 400 fixed (A1 Gothic L/R/M で太さ切り替え)
palt: 使用しない
```

### プロンプト例

```
45R（フォーティーファイブアール）のデザインシステムに従って、新コレクションの紹介ページを作成してください。
- フォント: "A1 Gothic R", sans-serif（大見出しは "A1 Gothic L"、日付は "A1 Gothic M"）
- 全文字 color は #1c2940 のインディゴ（黒は使わない）
- ヒーロー h2「MAY COLLECTION 2026」は A1 Gothic L / 60px / 400 / line-height 1.23 / letter-spacing -1.8px (-0.03em)
- セクションタイトル「New arrivals」は A1 Gothic L / 50px / line-height 2.0 / letter-spacing -1.5px
- リード（p 20px）で素材や染めの背景を語る、line-height 1.6
- 本文は p 14〜16px / line-height 1.6 / letter-spacing normal
- 日付ラベルは A1 Gothic M / 12px / letter-spacing -0.24px
- Primary CTA「くわしく見る」は #1c2940 bg + #fff text + radius 6px + padding 0 28px〜64px
- Secondary CTA「WOMEN」「MEN」は #e5e7e9 bg + #1c2940 text + radius 0px + padding 15px
- 在庫バッジは #e1e0d7（再入荷）/ #f17676（完売）/ #1c2940（NEW）
- フッターは #1c2940 + #ffffff の反転
- font-weight は **常に 400**。太さは A1 Gothic L / R / M のファミリー切替で表現
```

### 字詰め・組版の重要ポイント

1. **A1 Gothic を Light / Regular / Medium で切り替える**: font-weight ではなくファミリーで太さを変える Morisawa 流の組版。45R の固有の流儀
2. **すべての文字を #1c2940 で組む**: 黒は使わない。藍染めの色がブランドカラーであり、テキスト色そのもの
3. **大見出しは letter-spacing -0.03em**: タイトな字詰めで重心を作る。50〜60px の巨大見出しに必須
4. **Primary radius 6px / Secondary radius 0px**: 形を意図的に書き分け、CTA の階層を視覚的に明示
5. **font-weight は 400 固定**: 700 や 600 を使わない。Morisawa A1 Gothic のメトリクスに従う
6. **WordPress プリセット色**: restock / soldout / NEW などのバッジは固定プリセットを使う

---

**取得日**: 2026-05-08
**出典**: https://www.45r.jp/, https://www.45r.jp/about/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
