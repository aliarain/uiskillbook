# DESIGN.md — IKEUCHI ORGANIC（イケウチオーガニック）

> IKEUCHI ORGANIC（https://www.ikeuchi.org/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 今治発のオーガニックタオルブランド。「最大限の安全と最小限の環境負荷」を掲げ、オーガニックコットン100%のタオル・テキスタイルを展開する。**ダーク #262626** と **オフホワイト #f7f7f7** を基調に、**アースオリーブ #aca279** のアクセントで自然素材の温かみを表現。余白をたっぷり取った、素材の良さを感じさせるクリーンなデザイン
- **密度**: ゆったりとしたブランドショーケース型。大きな写真と余白で「空気」と「手触り」を感じさせる構成。テキストは必要最小限
- **キーワード**: オーガニック、アースカラー、Gidole ジオメトリックサンセリフ、3フォントシステム、pill CTA、ミニマル、今治タオル
- **特徴**: **3フォントシステム**が特徴。英文ディスプレイに **Gidole**（thin ジオメトリックサンセリフ）、日本語に **游ゴシック（Medium 500）**、特殊見出しに **AXIS Round Condensed**（Adobe Font）。CTA は**pill（radius 60px）**が主要アクション。アースオリーブ #aca279 のイベント日付バッジと、鮮やかなイエロー #face26 の NEW バッジが視覚的なアクセント。影なし・palt なし。line-height 1.8 の広い行間で、オーガニックな「呼吸感」を演出

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

IKEUCHI ORGANIC のカラーパレットはダークニュートラル + アースアクセント。ブランドの中核は **#262626** のダークと **#aca279** のオリーブゴールド。自然素材・オーガニックの世界観をアースカラーで表現する。

- **Dark** (`#262626`): 本文テキスト・CTA 背景・ヘッダー（rgb 38, 38, 38）— 純黒を避けた柔らかいダーク
- **Accent Olive** (`#aca279`): イベント日付バッジ・アクセント（rgb 172, 162, 121）— 6回出現。オーガニック・アースの核心色

### Text & Neutral

- **Text Primary** (`#262626`): 本文テキスト（rgb 38, 38, 38）
- **Notification Dark** (`#1c1c1c`): 通知バー背景（rgb 28, 28, 28）— "母の日キャンペーン開催中" 等
- **Filter Dark** (`#3b3b3b`): フィルター要素（rgb 59, 59, 59）
- **Sold Out Olive** (`#6c6755`): 売り切れ表示（rgb 108, 103, 85）— アクセントオリーブの暗色バリエーション

### Surface

- **Surface White** (`#ffffff`): 標準背景・ダーク上のテキスト
- **Surface Off-white** (`#f7f7f7`): セクション背景（rgb 247, 247, 247）
- **Overlay Dark** (`rgba(0, 0, 0, 0.6)`): イベントカード上の CLICK ボタンオーバーレイ

### Accent & Badge

- **NEW Badge Yellow** (`#face26`): 新商品バッジ（rgb 250, 206, 38）— 4回出現。ダーク背景上で強いコントラスト
- **Event Olive** (`#aca279`): イベント日付バッジ（rgb 172, 162, 121）— 温かみのあるアースカラー
- **Sold Out** (`#6c6755`): 売り切れイベント（rgb 108, 103, 85）— オリーブの暗色

### Functional

- **Border Default** (`#cccccc`): 検索フォーム枠

---

## 3. Typography Rules

### 3.1 和文フォント

IKEUCHI ORGANIC は日本語テキストに **游ゴシック** を使用。本文・ナビ・ボタン等すべての日本語要素に適用。weight 500（Medium）指定が特徴で、通常の 400 より一段しっかりした印象。

- **游ゴシック体 / YuGothic / 游ゴシック Medium / Yu Gothic Medium**: 本文・ナビ・ラベル・ボタン全般
- **AXIS Round 50 Condensed L**（Adobe Font — `A+mfCv-AXISラウンド 50 コンデンス L`）: 特殊見出し（"法人の方へ" 等）に使用。丸みのあるコンデンス書体でブランドの柔らかさを表現

> **preview.html での代替**: 游ゴシックは Google Fonts に存在しないため、**Noto Sans JP**（weight 500）で代替。AXIS Round Condensed は Adobe Font のためプレビュー不可 — **Zen Maru Gothic**（Google Fonts、丸ゴシック）で雰囲気を近似

### 3.2 欧文フォント

英文ディスプレイには **Gidole** を使用。フリーのジオメトリックサンセリフで、thin（300）ウェイトのクリーンな字形がオーガニック・ナチュラルな世界観と調和する。

- **Gidole**（ジオメトリックサンセリフ）: 英文セクションタイトル、ナビゲーション。"ABOUT US", "PRODUCT", "MAGAZINE" 等すべての英文に使用
- フォールバック: sans-serif

> **preview.html での代替**: Gidole は Google Fonts に存在しないため、**Inter**（weight 300）で代替。同系統の thin ジオメトリックサンセリフで印象が近い

### 3.3 font-family 指定

```css
/* 英文ディスプレイ・ナビ（Gidole ジオメトリックサンセリフ） */
font-family: Gidole, sans-serif;

/* 日本語本文・ナビ・ボタン（游ゴシック Medium） */
font-family: 游ゴシック体, YuGothic, "游ゴシック Medium",
             "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif;

/* 特殊見出し（AXIS Round Condensed — Adobe Font） */
font-family: "A+mfCv-AXISラウンド 50 コンデンス L", sans-serif;
```

**フォールバックの考え方**:
- Gidole はローカルフォントまたは Web フォントとして読み込み、generic sans-serif でフォールバック
- 游ゴシックは **Medium 指定を明示**（"游ゴシック Medium" / "Yu Gothic Medium"）。Windows で Regular（400）がかすれる問題を回避
- AXIS Round Condensed は Adobe Font のドメインライセンス。プレビューでは Zen Maru Gothic で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display EN (Gidole) | Gidole | 49px | 300 | 1.0 (49px) | 0.025em (1.225px) | "ABOUT US" 等セクション大見出し |
| Section EN (Gidole) | Gidole | 22px | 300 | 1.0 (22px) | 0.065em (1.43px) | "EVENT" 等サブセクション（白抜き） |
| Category EN (Gidole) | Gidole | 22px | 300 | 1.0 (22px) | 0.025em (0.55px) | "CATEGORY" |
| Special JP (AXIS Round) | AXIS Round | 20px | 500 | 1.0 (20px) | 0.07em (1.4px) | "法人の方へ" |
| Body JP | YuGothic | 15px | 500 | 1.8 (27px) | 0.075em (1.125px) | 本文 |
| Nav EN (Gidole) | Gidole | 15px | 300 | 1.0 (15px) | 0.05em (0.75px) | "ABOUT US", "ONLINE STORE" |
| Banner JP | YuGothic | 14px | 400 | 2.4 (33.6px) | normal | バナー日本語テキスト（白抜き） |
| Button JP | YuGothic | 14px | 400 | 1.9 (26.6px) | normal | カテゴリボタン |
| Input | YuGothic | 14px | 400 | 2.1 (29.4px) | normal | 検索フォーム |
| Span Label (Gidole) | Gidole | 14px | 400 | 1.0 (14px) | 0.08em (1.125px) | "MAGAZINE" |
| CLICK Label (Gidole) | Gidole | 16px | 400 | 1.0 (16px) | 0.05em (0.8px) | イベントカード上の "CLICK" |
| Menu EN (Gidole) | Gidole | 13px | 300 | 1.0 (13px) | 0.025em (0.325px) | "MENU" |
| Logo / Site Name | YuGothic | 15px | 500 | 1.8 (27px) | 0.075em (1.125px) | ヘッダーサイト名 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（27px / 15px）— 日本語サイトでもかなり広め。オーガニックブランドらしい余裕のある読み心地
- **バナーJPの行間**: `line-height: 2.4`（33.6px / 14px）— 極めて広い。ゆったりとした呼吸感
- **英文ディスプレイの行間**: `line-height: 1.0`（49px / 49px）— Gidole 大文字をタイトに詰める
- **本文の字間**: `letter-spacing: 0.075em`（1.125px @ 15px）— 和文に適度なゆとりを持たせる
- **英文ディスプレイの字間**: `letter-spacing: 0.025em`（1.225px @ 49px）— Gidole のジオメトリック字形を活かす微調整
- **英文サブセクションの字間**: `letter-spacing: 0.065em`（1.43px @ 22px）— "EVENT" 等

**ガイドライン**:
- Gidole ディスプレイは thin（300）の字形を活かすため line-height 1.0 でタイトに
- 日本語本文は 0.075em の字間で統一。標準的な 0.04em より広めで、ゆったりした印象
- バナー・注釈系は line-height 2.0 超えの極めて広い行間を許容

### 3.6 OpenType 機能

- `font-feature-settings` は指定なし（normal）
- **`palt` は使用しない**: 日本語の字詰めは行わず、letter-spacing 0.075em の均等配置
- Gidole のカーニングはフォント内蔵のデフォルトに委ねる

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）
- 游ゴシック Medium（500）の統一ウェイトで、改行位置を問わず均一な見た目

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill — "ONLINE STORE"）**

IKEUCHI ORGANIC の主要 CTA は **pill スタイル**。ダーク背景 + Gidole 英文で、ブランドらしいクリーンさを表現。

- Background: `#262626`
- Text: `#ffffff`
- Border Radius: **60px**（pill）
- Font Family: Gidole, sans-serif
- Font Size: 15px
- Font Weight: 300
- Letter Spacing: 0.05em (0.75px)

**Standard CTA（角型 — "商品を探す" / "法人の方へ" / "ご注文ページはこちら"）**

- Background: `#262626`
- Text: `#ffffff`
- Border Radius: **0px**（完全な角）
- Font Family: 游ゴシック体, YuGothic, sans-serif
- Font Size: 14px
- Font Weight: 400

**Filter Tab（"特集キャンペーン" / "名入れ・刺繍"）**

- Background: `#ffffff`
- Text: `#262626`
- Border Radius: 0px
- Font Family: 游ゴシック体, YuGothic, sans-serif
- Font Size: 14px
- Font Weight: 400

**CLICK Overlay（イベントカード上）**

- Background: `rgba(0, 0, 0, 0.6)`
- Text: `#ffffff`
- Font Family: Gidole, sans-serif
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: 0.05em

**NEW Badge（ピル型）**

- Background: `#face26`（鮮やかなイエロー）
- Text: `#262626`
- Border Radius: pill
- Font Size: 小（バッジサイズ）
- Font Weight: 400

**Event Date Badge**

- Background: `#aca279`（アースオリーブ）
- Text: `#ffffff`

**Sold Out Badge**

- Background: `#6c6755`（暗色オリーブ）
- Text: `#ffffff`

**ボタンの考え方**:
- 主要アクション（"ONLINE STORE"）は **pill（radius 60px）** + Gidole 英文。ブランドの国際性を表現
- 日本語 CTA（"商品を探す" 等）は **角型（radius 0px）** + 游ゴシック。シャープでミニマル
- フィルターは白背景 + ダークテキストの反転パターン
- pill と角型の使い分けが IKEUCHI ORGANIC のデザイン言語の特徴

### Inputs

**検索フォーム**

- Font Family: 游ゴシック体, YuGothic, sans-serif
- Font Size: 14px
- Font Weight: 400
- Line Height: 2.1 (29.4px)
- Border: 1px solid `#cccccc`
- Background: `#ffffff`

### Cards（イベントカード）

- Background: 写真ベース
- Border Radius: 0px（フラット）
- Shadow: なし
- オーバーレイ: `rgba(0, 0, 0, 0.6)` の "CLICK" ボタン
- イベント日付バッジ: `#aca279` のアースオリーブ
- 売り切れ時: `#6c6755` に切り替え

### Section Backgrounds

- Notification Bar: `#1c1c1c`（ダーク）+ `#ffffff` テキスト
- Default: `#ffffff`
- Light Section: `#f7f7f7`（オフホワイト）
- CTA Background: `#262626`

---

## 5. Layout Principles

### Container

- ヒーロー・通知バーは全幅
- コンテンツエリアは max-width 制限 + 中央寄せ
- イベントカード・商品グリッドはグリッドレイアウト

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内パディング |
| S | 8px | 小余白 |
| M | 16px | ボタン内パディング |
| L | 24px | セクション内余白 |
| XL | 40px | セクション間余白 |
| XXL | 64px | 大セクション余白 |

### Grid

- 商品カテゴリは 2〜4 カラム
- イベントカードは 2〜3 カラムグリッド
- フッターはリンクリスト型

---

## 6. Depth & Elevation

IKEUCHI ORGANIC はシャドウを使わない。面色の切り替え（#ffffff / #f7f7f7 / #262626）と写真オーバーレイで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | `1px solid #ccc` border | フォーム境界 |
| 2 | background `#f7f7f7` | セクション区分 |
| 3 | background `#262626` | CTA・通知バー |
| 4 | `rgba(0, 0, 0, 0.6)` overlay | イベントカード写真上 |

---

## 7. Do's and Don'ts

### Do（推奨）

- 英文テキストすべてに **Gidole** thin（300）を使う（"ABOUT US", "ONLINE STORE", "CATEGORY" 等）
- 日本語テキストには **游ゴシック** weight **500**（Medium）を使う
- 本文の行間は **`line-height: 1.8`** を設定（オーガニックブランドのゆったり感）
- 本文の字間は **`letter-spacing: 0.075em`** を統一
- 主要 CTA（英文）は **pill（radius 60px）** + ダーク背景
- 日本語 CTA は **角型（radius 0px）** + ダーク背景
- アースアクセントには **`#aca279`** を使う（イベント日付・装飾等）
- NEW バッジには **`#face26`** の鮮やかなイエローを使う
- オフホワイト面には **`#f7f7f7`** を使う
- テキストのダーク色は **`#262626`** を使う（純黒ではない）

### Don't（禁止）

- 純黒 `#000000` をテキストや背景に使わない（`#262626` が IKEUCHI ORGANIC のトーン）
- Gidole を日本語テキストに使わない（和文は游ゴシック / Noto Sans JP）
- 游ゴシックの weight を 400 にしない（**500 = Medium** が IKEUCHI ORGANIC の標準）
- CTA に大きな角丸（8〜16px）を使わない（**pill 60px** か **角型 0px** の二択）
- 鮮やかな原色をブランドカラーとして使わない（アクセントは `#aca279` のアースオリーブのみ）
- `palt` を使わない（letter-spacing 0.075em の均等配置が正）
- シャドウ（box-shadow）を使わない（面色の切り替えで空間を作る）
- Gidole を太字（700）で使わない（**300 = thin** がブランドの特徴）
- 日本語テキストの line-height を 1.5 未満にしない（1.8 以上が IKEUCHI ORGANIC の読み心地）
- letter-spacing を 0 にしない（英文・和文ともに必ず字間を設ける）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Gidole ディスプレイ 49px → 28〜32px 程度に縮小
- 商品・イベントグリッドは 1〜2 カラムに折り返す
- ナビゲーションはハンバーガー化（"MENU" 13px / Gidole）
- 通知バーのパディング縮小

### タッチターゲット

- pill CTA はタップしやすい形状（横幅広め）
- 角型 CTA は高さ十分（line-height 1.9 + padding）
- フィルタータブはタップ領域の確保が必要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: IKEUCHI ORGANIC（イケウチオーガニック）
Industry: オーガニックタオル・テキスタイル（今治）
Text Primary: #262626
Accent Olive: #aca279
NEW Badge: #face26
Surface Off-white: #f7f7f7
Background: #ffffff
Notification Dark: #1c1c1c
Display Font: Gidole, sans-serif
  preview代替: "Inter" weight 300 (Gidole は Google Fonts 不可)
JP Font: 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", sans-serif
  preview代替: "Noto Sans JP" weight 500 (游ゴシックは Google Fonts 不可)
Special JP Font: "A+mfCv-AXISラウンド 50 コンデンス L", sans-serif
  preview代替: "Zen Maru Gothic" (Adobe Font のため代替)
Display Size: 49px / 300 / line-height 1.0 / letter-spacing 0.025em
Body Size: 15px / 500 / line-height 1.8 / letter-spacing 0.075em
Nav EN: 15px / 300 / line-height 1.0 / letter-spacing 0.05em
Primary CTA: pill (bg #262626, text #fff, radius 60px, Gidole)
Standard CTA: square (bg #262626, text #fff, radius 0px, YuGothic)
Badge Olive: bg #aca279, text #fff
Badge NEW: bg #face26, text #262626
palt: 使用しない
Shadow: 使用しない
```

### プロンプト例

```
IKEUCHI ORGANIC（イケウチオーガニック）のデザインシステムに従って、
オーガニックタオルの商品一覧ページを作成してください。
- セクションタイトル "PRODUCT" は Gidole 49px / 300 / line-height 1.0 / letter-spacing 0.025em / color #262626
- カテゴリラベル "CATEGORY" は Gidole 22px / 300 / line-height 1.0 / letter-spacing 0.025em
- 本文は 游ゴシック 15px / 500 / line-height 1.8 / letter-spacing 0.075em / color #262626
- CTA「ONLINE STORE」は pill: bg #262626, text #fff, radius 60px, Gidole 15px / 300
- CTA「商品を探す」は square: bg #262626, text #fff, radius 0px, 游ゴシック 14px
- セクション背景は #f7f7f7（オフホワイト）
- NEW バッジは bg #face26 / text #262626
- イベント日付バッジは bg #aca279 / text #fff
- シャドウは一切使わない。面色（#262626 / #f7f7f7 / #fff）の切り替えで空間を作る
```

### 字詰め・組版の重要ポイント

1. **3フォントシステムの使い分け**: Gidole（英文すべて）/ 游ゴシック Medium（日本語すべて）/ AXIS Round Condensed（特殊見出し "法人の方へ" 等）。英文と和文でフォントが完全に分離
2. **Gidole thin（300）の一貫性**: セクションタイトル（49px）からナビ（15px）まで、すべての英文テキストが Gidole weight 300。太字バリエーションは使わない
3. **游ゴシック Medium（500）の固定**: 通常の 400 ではなく 500 を標準指定。Windows での表示品質を確保しつつ、一段しっかりした印象を与える
4. **line-height 1.8 の広い本文行間**: 日本語サイトの標準（1.5〜1.7）より広い。オーガニック・ナチュラルブランドらしい余裕のある読み心地
5. **letter-spacing 0.075em の本文字間**: 0.04em が一般的な中、0.075em と広め。Gidole の薄い字形と相まって「空気感」を生む
6. **pill と角型の二択 CTA**: 英文主要アクション = pill 60px、日本語アクション = 角型 0px。中間の角丸（8px 等）は使わない
7. **アースカラーのアクセント**: #aca279（オリーブゴールド）がブランドの個性。鮮やかな色は NEW バッジの #face26 のみに限定

---

**取得日**: 2026-05-09
**出典**: https://www.ikeuchi.org/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
