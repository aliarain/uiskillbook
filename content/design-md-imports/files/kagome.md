# DESIGN.md — カゴメ（Kagome）

> カゴメ（https://www.kagome.co.jp/）のデザイン仕様書。
> 日本を代表する食品・飲料メーカー。トマト製品・野菜ジュースを軸に「自然を、おいしく、楽しく。」を掲げる。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: カゴメレッド `#ee1d23` を主軸に、白地＋角丸カードで親しみやすいコーポレートサイトを構築。ミッション・ビジョン系のエモーショナルなセクションでは **Zen Maru Gothic（丸ゴシック）** を採用し、やわらかさ・温かみを演出
- **密度**: 本文の line-height は 1.6 とやや広め。見出しは 1.4〜2.0 とセクションの性格に応じて使い分ける。情報カードは白＋ドロップシャドウで軽快に並べる
- **キーワード**: カゴメレッド、自然・野菜、丸ゴシックのぬくもり、Inter のモダンさ、ピル CTA、白カードタイル
- **特徴**:
  - **ブランドカラーは `#ee1d23`（カゴメレッド）**。セクション見出しのキッカーテキスト（"私達の使命"）、スライダードットのアクティブ状態、検索ボタンに使用
  - コンテンツフォントに **Inter**（Google Fonts）を採用。和文には欧文 Inter の後に `sans-serif` を指定し、ブラウザのデフォルトゴシック体にフォールバック
  - フッターは別のフォントスタック: **Helvetica Neue → ヒラギノ角ゴ Pro W3 → Meiryo → 游ゴシック**
  - ミッション・ビジョン系のセクションで **Zen Maru Gothic（丸ゴシック）** を使い分け。"カゴメが目指すこれからの姿" 等に使用
  - CTA は**白地＋カゴメレッドのテキスト色＋ `border-radius: 100px` の完全ピル**が基本パターン
  - カードタイルは `border-radius: 10px` + 軽いドロップシャドウ `2px 2px 5px #cccccc`
  - 英語キッカー（"Mission"）には `letter-spacing: 0.12em` の広いトラッキングを適用
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Kagome Red** (`#ee1d23`): メインのブランドカラー。セクション見出しのキッカー（"私達の使命"）、英語キッカー（"Mission"）、スライダードットのアクティブ状態、検索ボタンの背景、ピル CTA のテキスト色
- **Category Purple** (`#a768bd`): カテゴリバッジ "商品" の背景色（rgb(167, 104, 189)）
- **Sustainability Gold** (`#e6b710`): カテゴリバッジ "サステナビリティ" の背景色（rgb(230, 183, 16)）
- **Campaign Crimson** (`#cd2245`): カテゴリバッジ "CM・キャンペーン" の背景色（rgb(205, 34, 69)）

### CTA / Buttons

- **Primary CTA（ピル）**: 背景 `#ffffff` / 文字 `#ee1d23` / radius `100px`（pill）/ padding `10px 45px` / 18px / weight 700
- **Search Button**: 背景 `#ee1d23` / radius `0px 50px 50px 0px`（右側のみ丸）
- **Card Tile**: 背景 `#ffffff` / radius `10px` / padding `5px` / shadow `2px 2px 5px #cccccc`
- **Cookie Consent**: 背景 `#666666` / 文字 `#ffffff` / radius `24px` / padding `12px`

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#333333` | (51, 51, 51) | 本文テキスト・見出し（コンテンツ系） |
| Text Black | `#000000` | (0, 0, 0) | ナビゲーションのドロップダウン項目、商品ページ見出し |
| Text Secondary | `#909090` | (144, 144, 144) | 補助テキスト（"ENGLISH PAGE"）、ナビの言語リンクボーダー |
| Text Muted | `#646464` | (100, 100, 100) | ナビのサブテキスト（"を知りたい方へ"） |
| Date Gray | `#858584` | (133, 133, 132) | ニュースの日付テキスト |
| Slider Inactive | `#cccccc` | (204, 204, 204) | スライダードットの非アクティブ状態 |
| Search Field BG | `#e7e7e7` | (231, 231, 231) | 検索入力欄の背景 |
| Section BG | `#f6f6f6` | (246, 246, 246) | セクション背景（"企業情報" 等） |
| White | `#ffffff` | (255, 255, 255) | カード背景・ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。コーポレートサイト向け推奨値:

- **Danger**: `#d32f2f` 程度のレッド
- **Success**: `#388e3c` 程度のグリーン
- **Warning**: `#f57c00` 程度のオレンジ

### Header / Overlay

- **Cookie Overlay BG**: `rgba(255, 255, 255, 0.78)`（半透明白）
- **Modal Overlay**: `rgba(0, 0, 0, 0.6)`（半透明黒）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メインコンテンツ）**: ブラウザの `sans-serif` にフォールバック（Inter の和文グリフなし → OS デフォルトのゴシック体が適用される）
- **丸ゴシック（アクセント）**: **Zen Maru Gothic** を MVV（ミッション・ビジョン・バリューズ）セクションで使用
- **フッター用ゴシック**: Helvetica Neue → ヒラギノ角ゴ Pro W3 → Meiryo → 游ゴシック
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **メインコンテンツ**: **Inter**（Google Fonts）。見出し・本文・CTA に統一使用
- **フッター**: **Helvetica Neue** を最優先

### 3.3 font-family 指定

```css
/* メインコンテンツ（ヘッダー・本文・CTA） */
font-family: Inter, sans-serif;

/* MVV セクション（丸ゴシック） */
font-family: "Zen Maru Gothic", "Hiragino Maru Gothic ProN", "Hiragino Sans", sans-serif;

/* フッター */
font-family: "Helvetica Neue", "Helvetica Arial", "ヒラギノ角ゴ Pro W3", Meiryo, 游ゴシック, sans-serif;
```

**フォールバックの考え方**:
- メインコンテンツは Inter を最優先。和文は `sans-serif` の OS デフォルトにフォールバック（macOS ではヒラギノ角ゴ、Windows ではメイリオ／游ゴシック）
- MVV セクションは Zen Maru Gothic を最優先し、Hiragino Maru Gothic ProN → Hiragino Sans と丸ゴシック系でフォールバック
- フッターは旧来の和文フォントスタック。Helvetica Neue が先頭に来る欧文優先パターン

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ + 商品ページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display（ミッション） | Inter | 40px | 700 | 80px (×2.0) | normal | `#333333` | "カゴメグループは、人が自然を…" |
| H1（商品ページ） | Helvetica Neue 系 | 40px | 700 | 64px (×1.6) | normal | `#000000` | "商品" |
| H2 Kicker (Red) | Inter | 30px | 700 | 48px (×1.6) | normal | `#ee1d23` | "私達の使命" |
| H2 Kicker (Red, Small) | Inter | 24px | 700 | 38.4px (×1.6) | normal | `#ee1d23` | "2035年にカゴメグループが目指す姿" |
| H2 MVV (Rounded) | Zen Maru Gothic | 30px | 700 | 42px (×1.4) | normal | `#333333` | "カゴメが目指すこれからの姿" |
| H2 Section | Inter | 30px | 700 | 48px (×1.6) | normal | `#333333` | "カゴメの取り組み" |
| H2（商品ページ） | Helvetica Neue 系 | 32px | 700 | 51.2px (×1.6) | normal | `#000000` | "商品に関するリリース" |
| H3（商品ページ） | Helvetica Neue 系 | 24px | 700 | 38.4px (×1.6) | normal | `#000000` | "飲料" |
| English Kicker | Inter | 22px | 700 | 35.2px (×1.6) | 2.64px (0.12em) | `#ee1d23` | "Mission" |
| Nav Headline | Inter | 18px | 700 | 28.8px (×1.6) | normal | `#333333` | "商品・レシピ" |
| Nav Label (Bold) | Inter | 15px | 700 | 18px (×1.2) | normal | `#000000` | "商品・レシピを知りたい方へ" |
| Body | Inter | 18px | 400 | 28.8px (×1.6) | normal | `#333333` | 本文テキスト |
| Nav Item | Inter | 16px | 400 | 16px (×1.0) | normal | `#333333` | "飲料"・"IR情報" 等 |
| Caption | Inter | 14px | 700 | 22.4px (×1.6) | normal | `#333333` | ドロップダウンの閉じるボタン |
| Secondary Link | Inter | 12px | 700 | 19.2px (×1.6) | normal | `#909090` | "ENGLISH PAGE" |
| Sub Label | Inter | 10px | 700 | 12px (×1.2) | normal | `#646464` | "を知りたい方へ" |
| Footer Body | Helvetica Neue 系 | 14px | 400 | 22.4px (×1.6) | normal | `#333333` | フッターリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **Display（ミッション文）**: `2.0`（80px / 40px）— 大きな文字に十分な余白を取る
- **本文 (18px)**: `1.6`（28.8px / 18px）
- **見出し (24〜32px)**: `1.6`（統一されている）
- **MVV 見出し (30px)**: `1.4`（42px / 30px）— 丸ゴシックの見出しはやや詰める
- **ナビアイテム (16px)**: `1.0`（16px / 16px）— 一行高さ

**字間 (letter-spacing)** — 実測:
- **本文・見出し**: `normal`（0）— ほぼ全要素で letter-spacing は normal
- **英語キッカー**: `0.12em`（2.64px / 22px）— "Mission" 等の英語ラベルのみ広いトラッキング

**ガイドライン**:
- カゴメは letter-spacing をほぼ使わないシンプルな設計。Inter フォント自体のメトリクスに任せている
- 唯一の例外が英語キッカーの `0.12em`。欧文の大文字ラベルにスペーシングを入れるクラシカルな手法
- 行間は全体的に `1.6` で統一感がある

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ミッション文は `<br>` で改行位置を手動指定（"カゴメグループは、<br>人が自然を、<br>…"）
- ピル CTA は `white-space: nowrap`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Inter のデフォルトメトリクスをそのまま使用する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（白ピル＋レッド文字）** — "ミッション・ビジョン・バリューズはこちら"
- Background: `#ffffff`
- Text: `#ee1d23`
- Padding: `10px 45px`
- Border Radius: `100px`（完全ピル）
- Font: Inter, 18px, weight 700
- Border: none
- 内部 `<span class="top-round-button__text">` にテキストを配置

**Round Button（透明ピル）** — "栄養と健康情報はこちら"・"ブランドサイト一覧はこちら" 等
- Background: transparent
- Text: `#333333`
- Padding: `5px`
- Border Radius: `100px`
- Font: Inter, 18px, weight 400
- 注: 外側の `<a>` が transparent で、内側の `<span>` が白背景のピルを形成するパターン

**Search Button（右丸角）**
- Background: `#ee1d23`
- Text: （アイコン）
- Padding: `20px 0px`
- Border Radius: `0px 50px 50px 0px`（右側のみ丸）
- Border: none

**Cookie Consent**
- Background: `#666666`
- Text: `#ffffff`
- Padding: `12px`
- Border Radius: `24px`
- Font: Arial, weight 600

**Slider Pagination Dot（アクティブ）**
- Background: `#ee1d23`
- Border Radius: `50%`（完全円形）

**Slider Pagination Dot（非アクティブ）**
- Background: `#cccccc`
- Border Radius: `50%`

### Inputs

**Search Field（左丸角）**
- Background: `#e7e7e7`
- Border: none
- Border Radius: `50px 0px 0px 50px`（左側のみ丸）
- Padding: `20px 0px 20px 20px`
- Font: Arial

**Header Search（通常）**
- Background: `#ffffff`
- Border: `2px inset #767676`（ブラウザデフォルト）
- Border Radius: `0px`

### Cards / Surfaces

**Attempt Tile（取り組みカード）** — "みんなと作るコミュニティ" 等
- Background: `#ffffff`
- Border: none
- Border Radius: `10px`
- Padding: `5px`
- Shadow: none

**Product / Recipe Card** — "飲料"・"食品"・"今月のおすすめ" 等
- Background: `#ffffff`
- Border: none
- Border Radius: `10px`
- Padding: `5px`
- Shadow: `2px 2px 5px #cccccc`

**Company Card** — "会社案内"・"IR"・"採用" 等
- Background: `#ffffff`
- Border: none
- Border Radius: `10px`
- Padding: `5px`
- Shadow: `2px 2px 5px #cccccc`

### Footer

- Background: transparent
- Font: Helvetica Neue 系フォントスタック
- Font Size: 14px, weight 400
- Color: `#333333`
- Padding Top: `5px`

### English Pill Badge（言語切替）

- Border: `2px solid #909090`
- Border Radius: `50px`
- Padding: `2px 6px`
- Font: Inter, 18px, weight 400
- Color: `#909090`（ナビの "ENGLISH PAGE" と連動）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | カードの内側余白（実測値） |
| S | 10px | ピル CTA の縦余白 |
| M | 15px | ナビ項目の下余白 |
| L | 20px | 検索欄の余白・セクション内 |
| XL | 45px | ピル CTA の横余白 |
| XXL | 80px | ヒーロー上下のゆとり（推奨） |

### Container

- Max Width: `1200px` 程度（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Small | 0px | 通常入力欄・テーブル |
| Medium | 10px | カードタイル |
| Large | 24px | Cookie consent ボタン |
| Pill | 50px / 100px | 検索欄・ピル CTA |
| Circle | 50% | スライダードット |

### Grid

- CSS Grid または Flexbox
- カードタイルは 2〜4 カラムのグリッド配置

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ヒーロー・セクション見出し・ピル CTA（基本フラット） |
| 1 | `2px 2px 5px #cccccc` | 商品カード・レシピカード・企業情報カード（**実測値**） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.10)` | ホバー時の浮き上がり（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.15)` | モーダル・ダイアログ（推奨） |

- 取り組みカード（Attempt Tile）は影なし、商品・レシピ・企業カードは軽い影つき
- 影の方向は**右下** (`2px 2px`) で、さりげない立体感を出す
- overlay は `rgba(0, 0, 0, 0.6)` の半透明黒

---

## 7. Do's and Don'ts

### Do（推奨）

- メインコンテンツのフォントは **Inter** を使い、モダンで読みやすいゴシック体を基本にする
- MVV（ミッション・ビジョン・バリューズ）系のエモーショナルなセクションには **Zen Maru Gothic** を使う
- ブランドカラー `#ee1d23` はセクション見出しのキッカーや検索ボタンに使い、**CTA のテキスト色**として活用する
- ピル CTA は `border-radius: 100px` の完全ピル、カードタイルは `border-radius: 10px`
- 英語キッカー（"Mission"）には `letter-spacing: 0.12em` を適用する
- 本文の line-height は **1.6** を基本にする
- カードの影は `2px 2px 5px #cccccc` で右下方向に軽くつける
- フッターでは Helvetica Neue 系の別フォントスタックに切り替える

### Don't（禁止）

- カゴメレッド `#ee1d23` を**大面積の背景色**として多用しない（キッカー・ドット・検索ボタン等のアクセントに限定する）
- **Inter 以外の欧文サンセリフ**（Helvetica Neue 等）をメインコンテンツに使わない（フッターのみ別スタック）
- 本文に **letter-spacing を入れない**（カゴメは normal が基本、0.12em は英語キッカー専用）
- Zen Maru Gothic を**本文や一般的な見出し**に使わない（MVV 系の特別なセクション専用）
- カードタイルに**角張った直角**（border-radius 0）を使わない — `10px` の角丸が基本
- ピル CTA を `border-radius: 8px` 等の小角丸にしない — 完全ピル `100px` が基本
- 商品カードの影を**強い影**（blur 20px 以上）にしない — `2px 2px 5px` の控えめな影が正解

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

- Display（ミッション文）: 40px → 24〜28px
- H2 Kicker: 30px → 20〜24px
- H2 Section: 30px → 22〜24px
- 本文サイズは 18px → 16px
- カードグリッドは 1 カラム配置に変更
- 検索欄は全幅表示

### タッチターゲット

- ピル CTA: padding `10px 45px` で十分なタッチ領域
- カードタイル: 全面がリンク領域（padding `5px`）
- Cookie consent ボタン: padding `12px` で 44px 以上を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Kagome Red (Brand): #ee1d23
Text Primary: #333333
Text Black: #000000
Text Secondary: #909090
Search Field BG: #e7e7e7
Section BG: #f6f6f6
Card Shadow: 2px 2px 5px #cccccc
White: #ffffff
Cookie Overlay: rgba(255, 255, 255, 0.78)
Modal Overlay: rgba(0, 0, 0, 0.6)
Category Purple: #a768bd
Sustainability Gold: #e6b710
Campaign Crimson: #cd2245

Font (Main): Inter, sans-serif
Font (MVV): "Zen Maru Gothic", "Hiragino Maru Gothic ProN", "Hiragino Sans", sans-serif
Font (Footer): "Helvetica Neue", "Helvetica Arial", "ヒラギノ角ゴ Pro W3", Meiryo, 游ゴシック, sans-serif

Body Size: 18px / line-height 1.6 / weight 400 / letter-spacing normal
Display: 40px / line-height 2.0 / weight 700
H2 Kicker: 30px / line-height 1.6 / weight 700 / color #ee1d23
H2 Section: 30px / line-height 1.6 / weight 700 / color #333333
H2 MVV: 30px / line-height 1.4 / weight 700 / font Zen Maru Gothic
English Kicker: 22px / weight 700 / letter-spacing 0.12em / color #ee1d23
Caption: 14px / line-height 1.6

Border Radius: 10px（カード）/ 100px（ピル CTA）/ 50px（検索欄）
Shadow: 2px 2px 5px #cccccc（カード）/ none（ピル CTA）
```

### プロンプト例

```
カゴメのデザインに従って、野菜ジュースの商品紹介セクションを作成してください。
- フォント: Inter, sans-serif（メインコンテンツ）
- セクション見出しキッカー: 30px / weight 700 / color #ee1d23 / font Inter
- 英語キッカー: 22px / weight 700 / letter-spacing 0.12em / color #ee1d23
- セクション見出し: 30px / weight 700 / color #333333
- 本文: 18px / weight 400 / line-height 1.6 / color #333333
- 商品カード: 背景 #ffffff / radius 10px / shadow 2px 2px 5px #cccccc / padding 5px
- ピル CTA: 背景 #ffffff / 文字 #ee1d23 / radius 100px / padding 10px 45px / 18px / weight 700
- エモーショナルなセクション: Zen Maru Gothic, "Hiragino Maru Gothic ProN", sans-serif
- letter-spacing は基本 normal。英語キッカーのみ 0.12em
- カゴメレッド #ee1d23 は背景に多用しない（キッカー・ドット・検索ボタンのアクセント用）
```
