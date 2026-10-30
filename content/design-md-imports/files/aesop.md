# DESIGN.md — Aesop（イソップ）

> Aesop 日本公式サイト（https://www.aesop.com/jp/）のデザイン仕様書。
> 1987年メルボルン創業のスキンケアブランド。調剤薬局を思わせる文学的な世界観と、抑制されたタイポグラフィで知られる。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 調剤薬局（アポセカリー）を原型とした、文学的で禁欲的なミニマリズム。装飾を極限まで削ぎ落とし、プロダクトと言葉の力だけで構成する
- **密度**: 情報密度は低め。余白を贅沢に使い、1セクションに1つのメッセージを置く「ギャラリー型」レイアウト
- **キーワード**: アポセカリー、文学的、クリーム色、スイス・モダニズム、禁欲的
- **特徴**: **シグネチャーのクリーム背景 `#fffef2`** が全体を支配する。純白を使わず、温かみのあるオフホワイトで薬瓶のラベルのような上品さを演出。本文には **SuisseIntl**（スイス・モダニズム系サンセリフ）を一貫して使用し、セクションタイトルにのみ **Zapf-Humanist**（ヒューマニスト・セリフ）を充てることで文学的なアクセントを加える。CTA は **すべて角丸 0px の直角ボタン**で、pill も角丸も使わない。フッターは `#333333` のダーク面でクリーム背景と対比させる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Signature Cream** (`#fffef2`): Aesop のシグネチャーカラー。ページ背景、ダーク面上のテキスト色として二役を担う。純白 `#ffffff` は使わない
- **Surface Dark** (`#333333`): フッター背景、プライマリ CTA の塗り色。サイト内で最も頻出する面色（49要素）

### Accent（アクセント — 控えめに使用）

- **Teal** (`#006680`): 青緑のアクセント。リンクやホバー等に控えめに使用（6要素）
- **Deep Blue** (`#27455c`): 深い紺。カテゴリーやセクションの差し色（8要素）
- **Forest Green** (`#346e4a`): フォレストグリーン。自然由来のブランド哲学を暗示（4要素）
- **Link Blue** (`#3860be`): プライバシーポリシー等の法的リンク色

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文・見出しの基本色。**純黒 `#000000` は使わない**
- **Text Secondary** (`#666666`): 補足テキスト、ラベル、セレクトボックスのテキスト
- **Text Disabled** (`#9b9b95`): カートアイコン、無効状態のテキスト
- **Border** (`#ced4da`): 区切り線、入力欄の枠
- **Background** (`#fffef2`): ページ背景（シグネチャークリーム）
- **Surface Warm** (`#f7ecdd`): 温かみのあるベージュ面。プロモーションカード等（3要素）
- **Surface Cream Alt** (`#f6f5e8`): クリームの微妙なバリエーション
- **Text on Dark** (`#fffef2`): ダーク面上のテキスト（フッター、ダークヒーロー等）

### Overlay

- **Cookie Overlay** (`#93928d`): Cookie バナーのオーバーレイ
- **Dark Surface Alt** (`#252525`): より暗いバリエーション
- **Skip Link** (`#666666`): スキップリンクの背景

> **Note**: Aesop のカラーパレットは **クリーム `#fffef2` とダークグレー `#333333` の二極構造**が根幹。アクセントカラー（ティール、ネイビー、グリーン）は控えめに使い、ブランドの禁欲的な世界観を守る。原色・蛍光色は一切使わない。

---

## 3. Typography Rules

### 3.1 和文フォント

Aesop は日本語専用の和文フォントを指定していない。**SuisseIntl のグリフセットに含まれる日本語**、またはブラウザのフォールバック sans-serif に依存する構成。

### 3.2 欧文フォント

- **サンセリフ（本文・UI 全般）**: **SuisseIntl**（Swiss Typefaces 社のカスタム Web フォント）。Regular (400) を基本とし、Medium ウェイトは **SuisseIntl-Medium** として別ファミリー名で読み込む
- **ヒューマニスト・セリフ（セクションタイトル）**: **Zapf-Humanist**（Hermann Zapf デザインのヒューマニスト書体）。「カテゴリー別に探す」等のセクション見出しに使用
- **サンセリフ（ビデオオーバーレイ）**: **Work Sans**（Google Fonts）+ Avenir。動画上のテキストに限定使用

### 3.3 font-family 指定

```css
/* 本文・UI 全般 */
font-family: SuisseIntl, sans-serif;

/* CTA・商品タイトル・フッター見出し */
font-family: SuisseIntl-Medium, sans-serif;

/* セクションタイトル（h2） */
font-family: Zapf-Humanist, serif;

/* ビデオオーバーレイ（限定使用） */
font-family: "work sans", avenir, sans-serif;
```

**フォールバックの考え方**:
- SuisseIntl はカスタム Web フォントのため、ローカル環境では表示されない。**再現には Google Fonts の Inter や Suisse-like な Neue Haas Grotesk 系を代替**する
- Zapf-Humanist のローカル代替には **Palatino** または **Book Antiqua** が字形の近い選択肢
- SuisseIntl-Medium は別ファミリー名で管理されているため、`font-weight: 500` ではなく **ファミリー名の切り替え**で Medium を呼び出す

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title | SuisseIntl | 30px | 400 | 1.33 (39.9px) | normal | ヒーロー見出し。色は `#fffef2` (ライト面) / `#333333` (ダーク面) |
| Section Title | Zapf-Humanist | 31px | 400 | 1.33 (41.23px) | normal | 「カテゴリー別に探す」等。唯一のセリフ書体 |
| Footer Title | SuisseIntl | 18px | 700 | 1.5 (27px) | normal | フッターのセクション見出し。サイト内で数少ない bold 使用 |
| Product Tile Title | SuisseIntl-Medium | 16px | 400 | 1.7 (27.2px) | normal | 商品一覧のタイル名 |
| Product Name | SuisseIntl-Medium | 16px | 400 | 1.5-1.7 (24-27.2px) | normal | 商品詳細の商品名 |
| Body | SuisseIntl | 14-16px | 400 | 1.5-1.6 (21-25.6px) | normal | 本文テキスト |
| Description | SuisseIntl | 14px | 400 | 1.5 (21px) | normal | 商品説明。色は `#666666` |
| Nav Link | SuisseIntl / SuisseIntl-Medium | 13px | 400 | 1.2 (15.6px) | normal | グローバルナビゲーション |
| Nav Highlight | SuisseIntl | 14px | 700 | 1.5 (21px) | normal | アクティブなナビ項目 |
| Search Input | SuisseIntl | 24px | 400 | normal | normal | 検索フィールド（大きめの入力欄） |
| Newsletter Input | SuisseIntl | 14px | 400 | normal | normal | メールマガジン登録欄 |
| Footer Link | SuisseIntl | 12px | 400 | 1.6 (19.2px) | normal | フッターのナビリンク。色は `#fffef2` |
| Body Small | SuisseIntl | 12px | 400 | 1.5 (18px) | normal | 最小本文テキスト。色は `#333333` |
| Cart / Muted | SuisseIntl | 12px | 400 | 1.2 (14.4px) | normal | カートアイコン周辺。色は `#9b9b95` |
| Video Overlay Large | Work Sans | 32px | 400 | — | normal | 動画上の大テキスト。色は `#fffef2` |
| Video Overlay Small | Work Sans | 16px | 400 | — | normal | 動画上の小テキスト。色は `#fffef2` |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.5 が標準**。商品タイル名は 1.7 とやや広め
- **見出しの行間**: **1.33**（Hero / Section Title 共通）
- **フッターリンクの行間**: **1.6**
- **ナビゲーションの行間**: **1.2**（コンパクト）
- **letter-spacing**: **`normal` を全体で維持**。字詰めは一切行わない
- **font-feature-settings**: `normal`。**palt / kern は不使用**

> **特徴**: Aesop はフォントの素のメトリクスに完全に委ねる設計。letter-spacing も font-feature-settings も一切カスタマイズせず、SuisseIntl の持つスイス・モダニズムの均整をそのまま活かしている。

### 3.6 禁則処理・改行ルール

```css
/* ブラウザデフォルトに委ねる。特別な指定は最小限 */
word-wrap: break-word;
overflow-wrap: break-word;
```

Aesop はテキスト量を最小限に抑える方針のため、長文の禁則処理が問題になるケースは少ない。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

Aesop は palt / kern を使わず、SuisseIntl のデフォルトメトリクスで組む。**プロポーショナル字詰めは適用しない**。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — すべて角丸 0px の直角ボタン

**Primary（カートに入れる）**
- Background: `#333333`
- Text: `#fffef2`
- Border: `1px solid transparent`
- Border Radius: `0px`
- Padding: `13px 24px 12px`
- Font Family: `SuisseIntl-Medium`
- Font Size: `14px`
- Font Weight: `400`
- 例: 「カートに入れる」「今すぐ購入」

**Secondary Outline（ダーク面上）**
- Background: `transparent`
- Text: `#fffef2`
- Border: `1px solid #fffef2`
- Border Radius: `0px`
- Padding: `13px 24px 12px`
- Font Family: `SuisseIntl-Medium`
- Font Size: `14px`
- Font Weight: `400`
- 例: 「ソラスを詳しく見る」「もっと見る」

**Skip Link**
- Background: `#666666`
- Text: `#fffef2`
- Border Radius: `0px`
- Padding: `4px 12px 3px`

> **Don't**: Aesop に **pill ボタン（角丸の大きいボタン）は存在しない**。すべてのボタンが `border-radius: 0px` の直角。これは薬瓶のラベルや活版印刷を想起させるブランドの根幹的な特徴。

### Inputs

**Search Input（検索）**
- Background: `transparent`（クリーム背景上）
- Border: 最小限のライン
- Border Radius: `0px`
- Font Family: `SuisseIntl`
- Font Size: `24px`
- Font Weight: `400`

**Newsletter Input（メルマガ登録）**
- Background: クリーム背景上
- Border: `1px solid #ced4da`
- Border Radius: `0px`
- Font Family: `SuisseIntl`
- Font Size: `14px`
- Font Weight: `400`

### Cards（商品カード）

- Background: `#fffef2`（ページ背景と同一）
- Border: なし（陰影も不使用）
- Border Radius: `0px`
- 商品画像 + テキストのシンプルな縦積み構成
- 商品名: SuisseIntl-Medium 16px / `#333333`
- 説明文: SuisseIntl 14px / `#666666`

---

## 5. Layout Principles

### Spacing Scale

実測ベースのスペーシングスケール（推定）:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | スキップリンクの上下パディング |
| S | 12px | ボタン内の横パディング（小）、テキスト間 |
| M | 24px | CTA ボタンの横パディング |
| L | 32px | セクション内の要素間 |
| XL | 64px | セクション間（小） |
| XXL | 120px+ | セクション間（大）、ヒーローの上下余白 |

### Container

- ページ全幅レイアウトが基本（ヒーロー画像は viewport いっぱいに使用）
- 商品グリッドや本文は中央寄せ（max-width: 約 1200px）
- フッターもフルブリード（`#333333` 背景）

### Grid

- ヒーロー: 1 カラム（フルブリード画像 + テキストオーバーレイ）
- カテゴリーナビ: カード横並び（3-4 カラム）
- 商品一覧: 3-4 カラムグリッド（デスクトップ）
- フッター: 4 カラム（ナビリンクグループ）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。Aesop は影をほとんど使わない |
| 1 | なし（色の切り替えで区切る） | クリーム背景 (`#fffef2`) とダーク面 (`#333333`) の対比でセクション分割 |
| 2 | 最小限のオーバーレイ | Cookie バナー (`#93928d`) |

> **特徴**: Aesop は**ドロップシャドウを使わない**。深度の表現はクリーム / ダークの二極的な面色切り替えと、温かみのあるベージュ面 (`#f7ecdd`) によるレイヤリングで行う。

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景は必ず **`#fffef2`（シグネチャークリーム）** を使う。純白 `#ffffff` は使わない
- CTA は **角丸 0px の直角ボタン** で統一する。塗り CTA は `#333333` 背景 + `#fffef2` テキスト
- 本文は **SuisseIntl 14-16px / line-height 1.5** で組む
- セクションタイトルには **Zapf-Humanist（セリフ系）** を使い、文学的なアクセントを入れる
- テキスト色は **`#333333`** を基本とし、純黒 `#000000` は使わない
- ダーク面（フッター等）では背景 `#333333` + テキスト `#fffef2` の反転パターンを使う
- アクセントカラーは控えめに。ティール (`#006680`)、ネイビー (`#27455c`)、グリーン (`#346e4a`) を少量差す

### Don't（禁止）

- **純白 `#ffffff` を背景に使わない**（`#fffef2` を使う）
- **純黒 `#000000` をテキストに使わない**（`#333333` を使う）
- **pill ボタン（角丸の大きいボタン）を作らない**（すべて `border-radius: 0px`）
- **原色・蛍光色・派手なアクセントカラーを使わない**
- **letter-spacing / palt を強制しない**（フォント素のままで組む）
- **bold (700) を本文に使わない**（700 はフッター見出しとナビハイライトのみ）
- **ドロップシャドウで強い陰影を作らない**（面色の切り替えで深度を表現）
- **装飾的な罫線や角丸を多用しない**（直線と直角が Aesop の言語）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ハンバーガーナビ |
| Tablet | ≤ 1024px | 商品グリッド 2 カラム |
| Desktop | > 1024px | フルブリード写真 + 3-4 カラムグリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px（CTA ボタン高さは padding 含めて約 44px を確保）

### フォントサイズの調整

- モバイルでは Hero Title 30px → 22-24px 程度に縮小
- Section Title 31px → 24-26px 程度に縮小
- 本文 14-16px は据え置き（line-height は維持）
- 検索入力の 24px も据え置き

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Signature Cream:     #fffef2 (背景 & ダーク面上テキスト)
Surface Dark:        #333333 (フッター背景 & プライマリ CTA)
Text Primary:        #333333
Text Secondary:      #666666
Text Disabled:       #9b9b95
Accent Teal:         #006680
Accent Navy:         #27455c
Accent Green:        #346e4a
Border:              #ced4da
Body Font:           SuisseIntl, sans-serif
Medium Font:         SuisseIntl-Medium, sans-serif
Section Title Font:  Zapf-Humanist, serif
Body Size:           14-16px
Line Height:         1.5
CTA Style:           border-radius 0px, bg #333333, text #fffef2
Letter Spacing:      normal (一切の字詰めなし)
```

### プロンプト例

```
Aesop のデザインシステムに従って、商品一覧ページを作成してください。

- 背景: #fffef2（シグネチャークリーム。純白は使わない）
- 本文: SuisseIntl, sans-serif / 14px / line-height 1.5 / color #333333
- 商品名: SuisseIntl-Medium, sans-serif / 16px / line-height 1.7 / color #333333
- 説明文: SuisseIntl, sans-serif / 14px / color #666666
- セクションタイトル: Zapf-Humanist, serif / 31px / weight 400 / color #333333
- CTA ボタン: border-radius 0px / bg #333333 / text #fffef2 / padding 13px 24px 12px
- アウトラインボタン: border-radius 0px / border 1px solid #fffef2 / 背景 transparent
- フッター: bg #333333 / text #fffef2 / リンク 12px line-height 1.6
- 純黒・pill ボタン・ドロップシャドウは使わない
- letter-spacing は normal のまま
```
