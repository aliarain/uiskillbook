# DESIGN.md — Snow Peak（スノーピーク）

> Snow Peak（https://www.snowpeak.co.jp/）のデザイン仕様書。
> 新潟・燕三条発、自然と人をつなぐ高品質アウトドアブランド。
> 実サイトの computed style 実測（2026-05-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **游明朝 + EB Garamond の和欧混植**で「自然との対話」「文化的なアウトドア」を表現する編集寄りのブランドサイト。明朝体の縦線と、英大文字＋日本語小書きの2段ラベル（"PARTNERSHIP / パートナーシップ"）が象徴
- **密度**: 本文 14px / line-height 1.57 / letter-spacing 0.5px。情報は詰めず、**写真とタイポの呼吸**で構成。見出しは 36〜55px と大きく取る
- **キーワード**: 游明朝、EB Garamond、和欧混植、深い赤 #820000、低彩度、落ち着いた余白、カタログ的、文化的
- **特徴**:
  - **`palt:on` をグローバル適用**。すべての要素に `font-feature-settings: "palt"` が掛かっており、見出し・本文ともプロポーショナル詰め前提
  - **本文の和文は OS の system sans-serif**（独自 Web フォント無し）。代わりに見出しに **游明朝 / YuMincho** を明示指定
  - **見出しは明朝体**。"私たちはキャンプの力を信じています。"・"遊/ CAMP" など、思想や文化を語る場面に明朝体を当てる
  - **欧文見出しに EB Garamond**（Garamond 系セリフ）。"PARTNERSHIP" "NEWS" "CONTACT" 等の英ラベルで使用
  - **ブランドアクセントは深紅 `#820000`**（オンラインストアの帯）と **黒に近いグレー `#3e3e3e`**（宿泊申込）。控えめで重厚
  - **ボタンは基本 直角（border-radius 0）**。タグやステータスバッジのみ 3px の角丸
  - 文字の `letter-spacing` が **重要**。本文 0.5px から見出し 2.56px までスケールに応じて広く取る

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Deep Red** (`#820000`): "オンラインストア" のメイン CTA 帯背景。Snow Peak の象徴的な濃紅
- **Brand Charcoal** (`#3e3e3e`): "宿泊申込・イベント申込" の濃いグレー帯背景。深紅と並ぶ二本柱の CTA 色
- **Brand Black** (`#000000`): 本文・見出しの基本色。バナーリンクの面色

### CTA / Buttons

- **Primary CTA**（深紅帯）: 背景 `#820000` / 文字 `#ffffff` / **radius `0`** / padding `21px 0` / 17px / weight 700 / letter-spacing 1.7px
- **Secondary CTA**（チャコール帯）: 背景 `#3e3e3e` / 文字 `#ffffff` / radius `0` / padding `21px 0` / 17px / weight 700
- **Tertiary CTA**（グレー枠）: 背景 `#e6e6e6` / 文字 `#000000` / border `1px solid #e6e6e6` / radius `0` / padding `14px 28px` / 14px / weight 700
- **Footer Outline CTA**（白枠抜き）: 背景 transparent / 文字 `#ffffff` / border `1px solid #ffffff` / radius `0` / padding `12px 24px` / 12px / weight 700
- **Tag / Status Badge**（小ピル）: 背景 `#888888` / 文字 `#ffffff` / **radius `3px`** / padding `1.2px 9.6px` / 12px / 游明朝 / letter-spacing 0.6px

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 本文・見出し基本色 |
| Charcoal | `#3e3e3e` | (62, 62, 62) | セカンダリ CTA・濃グレー文字 |
| Mid Gray | `#888888` | (136, 136, 136) | タグ・ステータス背景 |
| Light Border | `#e6e6e6` | (230, 230, 230) | テリシャリ CTA 背景・ボーダー |
| Surface 1 | `#eeeeee` | (238, 238, 238) | 検索 input 背景 |
| Surface 2 | `#f5f5f5` | (245, 245, 245) | カードリンク面（最頻出） |
| Surface 3 | `#f7f7f7` | (247, 247, 247) | パートナーシップ背景 |
| White | `#ffffff` | (255, 255, 255) | ページ・カード本体 |
| Header Overlay | `rgba(0, 0, 0, 0.75)` | — | ヘッダー透過オーバーレイ |

### Semantic（推奨値）

実サイトには明確なエラー／成功色は表面化していない。アウトドア／EC 向けの推奨補完値:

- **Danger**: `#a40000`（深紅と調和する濃い赤）
- **Warning**: `#b07a00`（黄土）
- **Success**: `#3f6b3f`（深いオリーブグリーン）

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（見出し主体）**: **游明朝 / YuMincho → ヒラギノ明朝 ProN W3 / Hiragino Mincho ProN → Sawarabi Mincho → HG明朝E → ＭＳ Ｐ明朝 → ＭＳ 明朝 → serif**
- **ゴシック体（本文）**: 専用フォント指定なし。**system sans-serif** を使用（OS の和文ゴシックにフォールバック）
- 明朝とゴシックを **役割で使い分ける** のが核心。情緒的な見出しは明朝、機能的な本文はゴシック

### 3.2 欧文フォント

- **欧文セリフ**: **EB Garamond（Google Fonts）** — "PARTNERSHIP" "NEWS" "CONTACT" の英ラベル
- **欧文サンセリフ**: **Lato** — STORE 等のヘッダーリンク
- 欧文セリフは **ブランドの古典的・編集的な印象** を担保

### 3.3 font-family 指定

実サイトの実測値（5 バリエーション）:

```css
/* 本文・ナビ・カード（system sans-serif） */
font-family: sans-serif;

/* 見出し・思想語り（游明朝） */
font-family: 游明朝, YuMincho, "ヒラギノ明朝 ProN W3",
  "Hiragino Mincho ProN", "Sawarabi Mincho", HG明朝E,
  "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

/* 英語ラベル（EB Garamond） */
font-family: "EB Garamond", serif;

/* ヘッダー欧文（STORE 等） */
font-family: Lato, sans-serif;
```

**フォールバックの考え方**:
- **役割で書体を切り替え**、フォールバックチェーンは短く明確に
- 本文 `sans-serif` は **OS の和文ゴシック** に任せる戦略（Apple: ヒラギノ角ゴシック、Windows: 游ゴシック / メイリオ）
- 明朝のチェーンは **游明朝 → ヒラギノ明朝** の Apple/Windows 系を最優先

> **代替フォント注記**: 游明朝は Mac / Windows の OS バンドル。Web プレビューで再現する場合は **Google Fonts の "Shippori Mincho" または "Sawarabi Mincho"** が近い印象。EB Garamond は Google Fonts で直接利用可能。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／ニュースページ、2026-05-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Headline (Mincho) | 游明朝 | 36px | 400 | 64.8px (×1.8) | 1.8px (0.05em) | `#000000` | "私たちはキャンプの力を信じています。" |
| Card Large Title (Mincho) | 游明朝 | 55px | 400 | 55px (×1.0) | 0.5px (0.009em) | `#ffffff` | "遊/ CAMP"（カード上のタイトル） |
| Section EN Title (Garamond) | EB Garamond | 32px | 400 | 41.6px (×1.3) | 1.6px (0.05em) | `#000000` | "NEWS新着情報" |
| Footer EN Title | EB Garamond | 32px | 400 | 32px (×1.0) | 2.56px (0.08em) | `#ffffff` | "CONTACTお問い合わせ" |
| Partnership EN Title | EB Garamond | 24px | 400 | 24px (×1.0) | 1.92px (0.08em) | `#000000` | "PARTNERSHIPパートナーシップ" |
| H1 (News) | 游明朝 | 26px | 400 | 41.6px (×1.6) | 1.3px (0.05em) | `#000000` | "新着情報"（記事タイトル） |
| H2 Region | sans-serif | 15px | **700** | 27px (×1.8) | 1.2px (0.08em) | `#ffffff` | "JAPAN"（地域ラベル） |
| H2 Modal Title (Mincho) | 游明朝 | 40px | 400 | 22px (×0.55) | 0.5px (0.013em) | `#ffffff` | "ご予約・お申し込みポータル"（モーダル） |
| Body | sans-serif | 14px | 400 | 22px (×1.57) | 0.5px (0.036em) | `#000000` | 本文・カード説明 |
| Header Link (Mixed) | sans-serif | 13〜14px | 400〜700 | 22px (×1.57〜1.69) | 0.5px (0.036em) | varies | ヘッダーナビ |
| Lato Caption | Lato | 10px | 400 | 22px | 0.5px (0.05em) | `#000000` | "STORE" |
| Tag (Mincho) | 游明朝 | 12px | 400 | 18px (×1.5) | 0.6px (0.05em) | `#ffffff` | "お知らせ" "イベント" |
| Footer Experience | EB Garamond | 16px | 400 | 40px (×2.5) | 0.8px (0.05em) | `#000000` | "Experience" |
| Outline CTA | sans-serif | 12px | 700 | 22px | 0.5px | `#ffffff` | "よくあるご質問"（白枠抜き） |
| Primary Banner CTA | sans-serif | 17px | 700 | 17px (×1.0) | 1.7px (0.10em) | `#ffffff` | "オンラインストア" |
| News H4 (Mincho Large) | 游明朝 | 55px | 400 | 55px | 0.5px | `#ffffff` | カードラージタイトル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.57`（22px / 14px）— 詰めすぎず広めすぎない実用値
- **見出し小 (26〜32px)**: `1.3〜1.6`
- **ヒーロー見出し (36px Mincho)**: **`1.8`**（64.8px / 36px）— 明朝の縦伸びを生かす広めの行間
- **EN 見出し (24〜32px Garamond)**: `1.0〜1.3`（タイト）
- **タグ (12px)**: `1.5`

**字間 (letter-spacing)** — 実測:
- **本文 (14px)**: **`0.5px` ≒ `0.036em`**（全要素にグローバル適用）
- **見出し (Mincho 26〜36px)**: `0.05em`（1.3〜1.8px）
- **EN ラベル (Garamond 24〜32px)**: `0.05〜0.08em`（**英大文字に広めのトラッキング**）
- **小タグ (12px Mincho)**: `0.6px ≒ 0.05em`
- **Primary CTA (17px sans-serif)**: **`1.7px ≒ 0.10em`**（CTA に強いトラッキング）
- **JAPAN 等の見出し**: `1.2px ≒ 0.08em`

**ガイドライン**:
- 日本語見出しは **letter-spacing 0.05em** を基本に。明朝の文字が広がりすぎず、適度な気品が出る
- 欧文ラベル（EB Garamond）は **大文字＋ワイドトラッキング 0.05〜0.08em** で「カタログ／編集」の表情
- 本文 14px / 行間 22px は欧米系より広め。和文の明朝・ゴシック混植にも耐える
- CTA テキストは **1.7px (0.10em)** の強いトラッキング — Snow Peak 独自のリズム

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
font-feature-settings: "palt";
```

- 全要素 `palt` が適用されるため、句読点・括弧の詰めはブラウザに任せる
- 見出しは `<br>` で手動改行制御することが多い（カード "遊/ CAMP" のような短句リズム）

### 3.7 OpenType 機能

```css
/* グローバルに palt 適用 */
font-feature-settings: "palt";
```

- **`palt: 1` がほぼ全要素に適用** されている — Snow Peak の最大の特徴
- これにより和文プロポーショナル詰めが効き、見出し・本文ともに字面が引き締まる
- `kern` は明示なし（palt が優先）

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（深紅バナー）** — "オンラインストア"
- Background: `#820000`
- Text: `#ffffff`
- Padding: `21px 0`（フル幅バナー、高さ約 60px）
- Border Radius: `0`（直角）
- Font: sans-serif, 17px, weight 700, letter-spacing 1.7px
- Border: none

**Secondary CTA（チャコールバナー）** — "宿泊申込・イベント申込"
- Background: `#3e3e3e`
- Text: `#ffffff`
- Padding: `21px 0`
- Border Radius: `0`
- Font: sans-serif, 17px, weight 700, letter-spacing 1.7px

**Tertiary CTA（薄グレーボックス）** — "詳しく見る"
- Background: `#e6e6e6`
- Text: `#000000`
- Border: `1px solid #e6e6e6`
- Padding: `14px 28px`
- Border Radius: `0`
- Font: sans-serif, 14px, weight 700, letter-spacing 0.5px

**Outline CTA（白枠）** — "よくあるご質問"（フッター用）
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Padding: `12px 24px`
- Border Radius: `0`
- Font: sans-serif, 12px, weight 700, letter-spacing 0.5px

**Tag / Status Badge** — "お知らせ" "イベント" "プレスリリース"
- Background: `#888888`
- Text: `#ffffff`
- Padding: `1.2px 9.6px`（実測。実質 4px 12px 程度の見え方）
- Border Radius: `3px`（**全 CTA 中で唯一の角丸**）
- Font: 游明朝, 12px, weight 400, letter-spacing 0.6px

### Inputs（実測準拠）

- Background: `#eeeeee`
- Border: なし
- Border Radius: `4px`
- Padding: `12.8px 9.6px 12.8px 48px`（左に検索アイコン余白）
- Font: sans-serif, 16px, weight 400
- Color: `#000000`

### Cards / Surfaces

- Card Link Background: `#f5f5f5`（カードリンクの主面）
- Partnership Background: `#f7f7f7`
- Border: なしが基本
- Border Radius: `0`（直角）
- Padding: 内容に応じて 24〜36px

### Header

- Background: `transparent` または `rgba(0, 0, 0, 0.75)`（スクロール時オーバーレイ）
- Border Bottom: なし
- Position: `fixed top: 0` / `z-index: 100`

### Footer

- Background: 黒（`#000000` 系）
- Padding: 大きめ（推奨 80〜120px 上下）
- Color: `#ffffff` 主体、`EB Garamond` の英ラベルが点在

---

## 5. Layout Principles

### Spacing Scale（推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコンと文字の間 |
| S | 16px | カード内の段落間 |
| M | 24px | カードの内側余白 |
| L | 36px | セクション内の見出しと本文の余白 |
| XL | 60px | 主要 CTA バナーの内側余白 |
| XXL | 120px | セクション間の縦余白（ゆったり） |

### Container

- Max Width: `1280px` 程度
- Padding (horizontal): mobile `16px` / desktop `40〜80px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0 | **基本**。全 CTA・カード・バナー |
| Tag | 3px | "お知らせ" 等の小タグのみ |
| Input | 4px | 検索入力 |

### Grid

- 4〜6 カラムグリッド（カードレイアウト：遊/CAMP, 衣/WEAR, 食/FOOD, 住/LIFE, 働/WORK の **5 カードグリッド**）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **基本**。ほぼすべての要素 |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | モーダル・ドロップダウン（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **明朝体の縦線**・**深紅 #820000 のバナー**・**黒透過オーバーレイ** で表現
- 影に頼らない、**写真とタイポと色面**で構築するブランドサイト

---

## 7. Do's and Don'ts

### Do（推奨）

- **見出しは明朝（游明朝）、本文はゴシック（system sans-serif）** で役割を分ける
- **欧文ラベルは EB Garamond + 大文字 + letter-spacing 0.05〜0.08em** で組む（"PARTNERSHIP / NEWS / CONTACT"）
- **`font-feature-settings: "palt"` をグローバル適用**（Snow Peak の核心）
- 本文の line-height は **1.57**、letter-spacing は **0.5px** を基本にする
- 主要 CTA は **深紅 #820000** または **チャコール #3e3e3e** のフル幅バナー
- ボタンは **直角（border-radius 0）**。タグだけ 3px の角丸
- 写真とタイポの **呼吸（余白）** を大切にする — 情報密度より雰囲気優先

### Don't（禁止）

- 見出しに **明朝以外（特にゴシック太字）を使わない** — Snow Peak の文化的な印象が消える
- 欧文に **Helvetica や Inter 系のジオメトリック書体を使わない** — EB Garamond の編集感が崩れる
- ボタンに **角丸ピル（radius 100px / 9999px）を使わない** — Snow Peak は直角
- **彩度の高い赤（#ff0000、#dc2626 等）を使わない** — 深紅 #820000 がブランドの色
- `palt` を **無効化しない** — 全要素に効いている前提
- 本文の letter-spacing を **0 にしない** — 0.5px (0.036em) が基本リズム
- CTA テキストの letter-spacing を **詰めすぎない** — 1.7px の広めのトラッキングがブランドの表情

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト（5 カードグリッド有効化） |

### モバイル時の調整

- ヒーロー Mincho: 36px → 24〜28px
- カードラージ Mincho: 55px → 32〜40px
- EN Garamond: 32px → 24px（letter-spacing は維持）
- 本文サイズは 14px を維持
- 5 カードグリッドは **横スクロール** または 1〜2 カラムに変更

### タッチターゲット

- 主要 CTA: padding `21px 0` でフル幅、高さ約 60px（十分な領域）
- タグ: 高さ約 21px（装飾用、タップ非想定）
- ヘッダーリンク: padding を増やしてタップ領域確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Deep Red (Primary CTA): #820000
Brand Charcoal (Secondary CTA): #3e3e3e
Tag Gray: #888888
Border / Tertiary BG: #e6e6e6
Surface (Card Link): #f5f5f5
Surface (Partnership): #f7f7f7
Input BG: #eeeeee
Black: #000000
White: #ffffff
Header Overlay: rgba(0, 0, 0, 0.75)

Heading Font (Mincho): 游明朝, YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "Sawarabi Mincho", serif
EN Label Font: "EB Garamond", serif
Body Font: sans-serif（OS の和文ゴシック）
Header Caption Font: Lato, sans-serif

Body: 14px / line-height 1.57 / letter-spacing 0.5px (0.036em) / weight 400
Hero Mincho: 36px / line-height 1.8 / letter-spacing 1.8px (0.05em) / weight 400
EN Garamond: 24〜32px / line-height 1.0〜1.3 / letter-spacing 0.05〜0.08em / weight 400
Primary CTA Text: 17px / weight 700 / letter-spacing 1.7px (0.10em)

Border Radius: 0（基本）／ 3px（タグ）／ 4px（input）
Shadow: 基本 none
font-feature-settings: "palt"（グローバル適用）
```

### プロンプト例

```
Snow Peak のデザインに従って、商品紹介セクションを作成してください。
- 見出しフォント: 游明朝, YuMincho, "ヒラギノ明朝 ProN W3", serif
- 英ラベルフォント: "EB Garamond", serif
- 本文フォント: sans-serif（system 和文ゴシック）
- ヒーロー見出し: 游明朝 36px / weight 400 / line-height 1.8 / letter-spacing 0.05em / color #000000
- 英セクションラベル: EB Garamond 24〜32px / 大文字 / letter-spacing 0.08em / weight 400
- 本文: 14px / weight 400 / line-height 1.57 / letter-spacing 0.5px / color #000000
- 主要 CTA: 背景 #820000（深紅）/ 白文字 / radius 0 / padding 21px 0 / 17px / weight 700 / letter-spacing 1.7px（フル幅バナー）
- セカンダリ CTA: 背景 #3e3e3e / 白文字 / radius 0 / 同 padding
- タグ: 背景 #888888 / 白文字 / radius 3px / 游明朝 12px / letter-spacing 0.6px
- カード背景: #f5f5f5 / 直角 / border なし
- font-feature-settings: "palt" を全要素に適用
- 角丸ピル CTA は使わない（直角バナー）
- Helvetica や Inter 系の欧文書体は使わない（EB Garamond で統一）
- 純粋な #ff0000 系の赤は使わない（深紅 #820000 のみ）
```
