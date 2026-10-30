# DESIGN.md — Goldwin（ゴールドウイン）

> Goldwin（https://www.goldwin.co.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本発のアウトドア・スポーツアパレルブランド。THE NORTH FACE、Helly Hansen、DANSKIN 等の親会社。**デュアルフォントシステム**が最大の特徴 — オンラインストアは **Untitled Sans + 游ゴシック Medium**、ブランドページは **GoldwinGrotesk + Noto Sans CJK JP** と、文脈で書体を使い分ける。大胆な大文字キャッチコピーと、精密なスペーシングで「技術と美意識の融合」を表現する
- **密度**: ゆったりとしたビジュアル主導のECサイト。ヒーロービジュアルと製品写真が主役で、テキストは最小限。フッターのみダーク背景（#2a292f）で締める構成
- **キーワード**: アウトドア、テクニカル、デュアルフォント、palt グローバル適用、ライトウェイト 300、ダークチャコール
- **特徴**: **欧文先頭のフォールバック**（Untitled Sans が先頭で、和文が後続）が特徴的。font-weight 300（Light）を本文に使用するサイトは珍しく、細い線と広い letter-spacing（0.08em 固定）で洗練された印象を作る。`font-feature-settings: "palt"` と `"lnum"`（ライニング数字）がグローバルに適用される

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

Goldwin のカラーは極めてモノトーン。**ダークチャコール #2a292f** がブランドを象徴する色で、CTA とフッターに使われる。ビビッドなアクセントカラーは一切使用しない。

- **Dark Charcoal** (`#2a292f`): CTA 背景・フッター背景・ナビオーバーレイ（rgb 42, 41, 47 — 純黒ではなく、わずかに青みのあるチャコール）
- **Dark Charcoal 60%** (`rgba(42, 41, 47, 0.6)`): オーバーレイ・半透明背景

### Text & Neutral

- **Text Primary** (`#1a1a1a`): メインテキスト（rgb 26, 26, 26）— 純黒を避けたソフトブラック
- **Text on Dark** (`#ffffff`): ダーク背景上の白テキスト（ナビ・フッター・CTA）
- **Text Date** (`#b8b8b8`): 日付・補足テキスト（ブランドページ、rgb 184, 184, 184）

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Light** (`#f5f5f5`): セカンダリ背景面（rgb 245, 245, 245 — 最多出現、104件）
- **Surface Brand Light** (`#f7f7f7`): ブランドページのフッター背景（rgb 247, 247, 247）
- **Surface Dark** (`#2a292f`): フッター・ナビ・CTA の背景
- **Surface Divider** (`#e9e9e9`): セパレーター・ボーダー

### Border

- **Border Default** (`#d9d9d9`): カテゴリメニュー・セカンダリボタンの枠線（rgb 217, 217, 217）
- **Border Light** (`#e9e9e9`): 区切り線（rgb 233, 233, 233）

---

## 3. Typography Rules

### 3.1 和文フォント

Goldwin は**2つのフォントシステム**を持つ：

**オンラインストア（goldwin.co.jp）**:
- **游ゴシック Medium** / Yu Gothic Medium / 游ゴシック体: 和文メイン
- **ヒラギノ角ゴ ProN**: macOS フォールバック
- **Noto Sans JP**: クロスプラットフォームフォールバック
- **Meiryo**: Windows フォールバック

**ブランドページ（goldwin.co.jp/goldwin/）**:
- **Noto Sans CJK JP**: Adobe Fonts 版 Noto Sans（noto-sans-cjk-jp）— Web フォントとして読み込み
- **游ゴシック** / Yu Gothic: システムフォールバック

### 3.2 欧文フォント

**オンラインストア**:
- **Untitled Sans**: メイン欧文（フォールバック先頭に配置）— グロテスク系のクリーンなサンセリフ
- **EuclidCircularB**: フッター専用の幾何学的サンセリフ

**ブランドページ**:
- **GoldwinGrotesk**: カスタムブランドフォント — Goldwin 専用にデザインされた独自書体

### 3.3 font-family 指定

```css
/* オンラインストア — 本文（欧文先頭） */
font-family: "Untitled Sans", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, hiragino-kaku-gothic-pron, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", "Noto Sans JP", Meiryo, sans-serif;

/* オンラインストア — フッター */
font-family: EuclidCircularB, 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", hiragino-kaku-gothic-pron, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", "Noto Sans JP", Meiryo, sans-serif;

/* ブランドページ */
font-family: GoldwinGrotesk, noto-sans-cjk-jp, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭型**: Untitled Sans / GoldwinGrotesk を先頭に置き、欧文の表示品質を最優先
- 和文は游ゴシック → ヒラギノ → Noto Sans JP → Meiryo の順でカバー
- ブランドページは noto-sans-cjk-jp（Adobe Fonts）を和文メインに使用

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (hero) | Untitled Sans + 游ゴシック | 68px | 400 | 1.0 (68px) | 0.08em (5.44px) | ヒーローキャッチ / color #1a1a1a |
| Heading 2 (section) | Untitled Sans + 游ゴシック | 26px | 400 | 1.5 (39px) | 0.08em (2.08px) | セクション見出し |
| Heading 3 (ranking) | Untitled Sans + 游ゴシック | 24px | 300 | 1.0–1.5 | 0.08em (1.92px) | サブ見出し / Light ウェイト |
| Heading 2 (brand) | GoldwinGrotesk | 26px | 400 | 1.4 (36.4px) | normal | ブランドページ見出し |
| Body (store) | Untitled Sans + 游ゴシック | 12px | 300 | 1.5 (18px) | 0.08em (0.96px) | ストア本文 / **Light** |
| Body (brand) | GoldwinGrotesk | 16px | 400 | 1.6 (25.6px) | normal | ブランドページ本文 |
| Body Description | GoldwinGrotesk | 13px | 400 | 1.6 (20.8px) | normal | 記事説明文 |
| Nav Menu | Untitled Sans | 20px | 300–400 | 1.2–1.6 | 0.08em (1.6px) | メニュー項目 / 白テキスト |
| Nav Title | Untitled Sans | 14px | 700 | 1.2 (16.8px) | 0.08em (1.12px) | フッターナビ見出し / 白テキスト |
| Price | Untitled Sans + 游ゴシック | 14px | 300 | 1.4 (19.6px) | 0.08em (1.12px) | 価格表示 / Light |
| Footer Link | EuclidCircularB | 14px | 500 | normal | 0.08em (1.12px) | フッターリンク / 白テキスト / radius 6px |
| Menu Item | Untitled Sans | 14px | 700 | 1.4 (19.6px) | 0.08em (1.12px) | トップメニュー / border #d9d9d9 |
| Caption (date) | GoldwinGrotesk | 11px | 400 | 1.4 (15.4px) | normal | 日付 / color #b8b8b8 |

### 3.5 行間・字間

- **本文の行間（ストア）**: `line-height: 1.5`（18px / 12px）
- **本文の行間（ブランド）**: `line-height: 1.6`（25.6px / 16px）
- **Display の行間**: `line-height: 1.0`（68px / 68px）— 大きな見出しは行間を詰める
- **本文の字間（ストア）**: `letter-spacing: 0.08em`（0.96px @ 12px）— **すべての要素に統一的に 0.08em を適用**
- **本文の字間（ブランド）**: `letter-spacing: normal`（ブランドページは字間なし）

**ガイドライン**:
- オンラインストアは **letter-spacing: 0.08em を全要素に統一適用**するのが最大の特徴。フォントサイズに関係なく 0.08em
- ブランドページでは letter-spacing: normal に戻る。GoldwinGrotesk のメトリクスが十分なため
- **font-weight: 300**（Light）を本文に使うのは珍しく、Goldwin の軽やかさ・技術感を表現

### 3.6 OpenType 機能

```css
/* オンラインストア — グローバル適用 */
font-feature-settings: "palt";         /* プロポーショナル字詰め */
font-feature-settings: "lnum", "palt"; /* ライニング数字 + palt（ナビ等） */
```

- **`palt`**: 和文のプロポーショナル字詰め。ストア全体にグローバル適用
- **`lnum`**: ライニング数字（オールドスタイルではなく等高数字）。価格表示やナビに適用
- ブランドページでは font-feature-settings 未指定（GoldwinGrotesk のデフォルトメトリクスを使用）

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）

---

## 4. Component Stylings

### Buttons

**Primary CTA（"注文手続きへ"）**

Goldwin の CTA は**ダークチャコール塗りつぶし + 角丸なし**。

- Background: `#2a292f`
- Text: `#ffffff`
- Border: 1px solid `#2a292f`
- Border Radius: **0px**（シャープコーナー — pill でも角丸でもない）
- Line Height: 56px（高さを line-height で確保）
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: 0.08em (1.6px)

**Secondary CTA（"お買い物を続ける"）**

- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#d9d9d9`
- Border Radius: **0px**
- Line Height: 56px
- Font Size: 16px
- Font Weight: 400

**Category Menu Item（"メンズ" "レディース"）**

- Background: transparent
- Text: `#1a1a1a`
- Border: 1px solid `#d9d9d9`
- Border Radius: 0px
- Padding: 18px 18px 18px 16px
- Font Size: 14px
- Font Weight: 700

**Footer Link（radius あり）**

- Border Radius: **6px**（フッターリンクのみ角丸）
- Font Size: 14px
- Font Weight: 500
- Text: `#ffffff`

**ボタンの考え方**:
- メインは**ダークチャコール #2a292f の塗りつぶし + 角丸なし（0px）**
- radius 0px のシャープコーナーがストアの基本。フッターリンクのみ例外的に 6px
- CTA の高さは padding ではなく **line-height: 56px** で確保する独自の手法

### Inputs

- 検索バーはオーバーレイメニュー内
- 詳細な input スタイルは抽出外

### Cards（製品カード）

- Background: `#ffffff` / `#f5f5f5`
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 製品名（14px / 300）+ 価格（14px / 300）の構成

### View More ボタン（ブランドページ）

- Background: `rgba(255, 255, 255, 0.8)`（半透明白）
- Border Radius: 0px
- Text: `#000000`

---

## 5. Layout Principles

### Container

- ストアは全幅レイアウトを基本
- ブランドページはセクション単位でコンテンツを中央寄せ

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 16px | テキスト水平パディング |
| S | 18px | メニューアイテムパディング |
| M | 20px | ナビリンクパディング |
| L | 23px | ナビアイテムパディング |
| XL | 40px | メニュー上部パディング |

### Grid

- 製品カードはグリッドレイアウト
- カテゴリメニューはフルワイドのリスト形式

---

## 6. Depth & Elevation

Goldwin はシャドウを一切使わない。白（#fff）/ ライトグレー（#f5f5f5）/ ダーク（#2a292f）の面の切り替えで空間を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |
| 1 | background `#ffffff` | 通常面 |
| 2 | background `#f5f5f5` | セカンダリ面 |
| 3 | background `#2a292f` | ダーク面（フッター・ナビ） |
| 4 | `rgba(42, 41, 47, 0.6)` overlay | オーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- オンラインストアでは **Untitled Sans** を font-family 先頭に置く（欧文先頭型）
- ブランドページでは **GoldwinGrotesk** を使用する
- ストアの letter-spacing は **全要素に 0.08em** を統一適用する
- `font-feature-settings: "palt"` をストアでグローバルに適用する
- CTA は **#2a292f 塗りつぶし + radius 0px**（シャープコーナー）にする
- 本文の font-weight は **300（Light）** を使う（ストア）
- 色は `#1a1a1a`（テキスト）、`#2a292f`（アクセント）、`#f5f5f5`（面）の3色を軸にする
- CTA の高さは **line-height: 56px** で確保する
- ライニング数字が必要な場面では `"lnum"` を追加する

### Don't（禁止）

- 純黒 `#000000` をテキストに使わない（ストアは `#1a1a1a` が標準）
- pill ボタン（radius 9999px）を使わない（Goldwin は radius 0px が基本）
- ストアで letter-spacing: normal を使わない（すべて 0.08em）
- 鮮やかなアクセントカラーを使わない（モノトーンを保つ）
- 本文に font-weight: 400 以上を使わない（ストアは 300 が標準）
- ブランドページで letter-spacing: 0.08em を使わない（normal が正しい）
- シャドウ（box-shadow）を使わない
- フッターリンク以外に radius 6px を使わない

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Display（68px）→ 大幅に縮小
- ナビゲーションはハンバーガー化
- letter-spacing 0.08em は維持（Goldwin のアイデンティティ）
- 製品グリッドは 1〜2 カラムに折り返し

### タッチターゲット

- CTA は line-height 56px で十分なタップ領域を確保
- カテゴリメニューは padding 18px で確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: Goldwin（ゴールドウイン）
Origin: 日本発アウトドア・スポーツアパレル
Dark Charcoal: #2a292f
Text Primary: #1a1a1a
Surface Light: #f5f5f5
Background: #ffffff

Store Font: "Untitled Sans", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, hiragino-kaku-gothic-pron, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", "Noto Sans JP", Meiryo, sans-serif
Brand Font: GoldwinGrotesk, noto-sans-cjk-jp, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif

palt: グローバル適用（ストア）/ 未適用（ブランド）
lnum: ナビ・価格で使用
Body (store): 12px / 300 / line-height 1.5 / letter-spacing 0.08em
Body (brand): 16px / 400 / line-height 1.6 / letter-spacing normal
Display: 68px / 400 / line-height 1.0 / letter-spacing 0.08em
CTA Style: filled (bg #2a292f, text #fff, radius 0px, line-height 56px)
Shadow: 使用しない
```

### プロンプト例

```
Goldwin のオンラインストアデザインに従って、製品一覧ページを作成してください。
- フォントは "Untitled Sans", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, sans-serif
- font-feature-settings: "palt" をグローバルに適用
- letter-spacing は全要素に 0.08em
- 本文は 12px / 300 / line-height 1.5 / color #1a1a1a
- セクション見出しは 26px / 400 / line-height 1.5
- CTA は bg #2a292f, text #fff, radius 0px, line-height 56px
- 背景は白 #ffffff、セカンダリ面は #f5f5f5
- シャドウは一切使わない
- font-weight は 300（Light）を本文に使用
```

### デザインの重要ポイント

1. **デュアルフォントシステム**: ストア（Untitled Sans + 游ゴシック）とブランド（GoldwinGrotesk + Noto Sans CJK JP）で完全に書体を分ける。ページの文脈に応じて正しいシステムを選択すること
2. **欧文先頭のフォールバック**: 和文ではなく Untitled Sans を先頭に置くのは、アウトドア・テクニカルブランドとしての国際性を重視するため
3. **letter-spacing 0.08em の統一**: ストアではフォントサイズに関係なく 0.08em を適用。この統一感が Goldwin のクリーンな印象を支える
4. **font-weight 300（Light）**: 本文を Light ウェイトにすることで、重厚感ではなく軽やかさ・技術感を演出
5. **radius 0px**: CTA もカードもシャープコーナー。唯一フッターリンクだけ 6px の角丸を持つ
6. **ダークチャコール #2a292f**: 純黒でも純グレーでもなく、わずかに青みを帯びたチャコール。アウトドアウェアの「コンクリートジャングルにも自然にも溶け込む」カラー
7. **palt + lnum**: プロポーショナル字詰め（palt）とライニング数字（lnum）の両方をグローバルに適用

---

**取得日**: 2026-05-09
**出典**: https://www.goldwin.co.jp/ , https://www.goldwin.co.jp/goldwin/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
