# DESIGN.md — DEAN & DELUCA（ディーン・アンド・デルーカ）

> DEAN & DELUCA Japan 公式オンラインストア（https://www.deandeluca.co.jp/）のデザイン仕様書。
> ニューヨーク発のプレミアムフード＆ライフスタイルブランド。厳選された食材、美しいギフトパッケージ、アイコニックなトートバッグで知られる。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景に**黒 `#000000`** を基調色に据え、見出しに**游明朝 serif**、本文に**游ゴシック sans** を使う**二書体構成**。食の美しさを全幅写真で見せ、テキストは最小限に抑えるプレミアムフード EC
- **密度**: ヒーローカルーセルと大判食材写真が支配する**低密度・ビジュアルファースト**。商品情報は写真の下に控えめに配置
- **キーワード**: 純白背景、黒基調、游明朝見出し、游ゴシック本文、全幅ヒーロー、円形CTA、ウォームブラウン、バイリンガルラベル、フードフォトグラフィー
- **特徴**:
  - **見出しは游明朝（Mincho）serif**: h1 ロゴ・h2 セクションタイトル・h3 カテゴリ名・CTA テキストすべてに游明朝を使用 — プレミアム感と端正さを表現
  - **本文・ナビは游ゴシック（Gothic）sans**: body / nav / ユーティリティに欧文先行（Helvetica Neue, Arial）+ 游ゴシックのフォールバックチェーン
  - **font-weight 500 がデフォルト**: 通常の 400 より一段重い。游ゴシックの "Medium" に相当し、可読性と存在感を両立
  - **letter-spacing 0.04em（0.56px at 14px）を body に一律適用**: 日本語本文の字間をわずかに開けて上品な空気感を演出
  - **font-feature-settings: normal**（palt は無効）
  - **円形黒 CTA**（"一覧を見る"）: border-radius 100% の完全な円形。黒塗り + 白文字の游明朝 14px / weight 600 — DEAN & DELUCA を象徴する独自のインタラクション
  - **バイリンガルラベル**: "今月のおすすめ MONTHLY SPECIAL" のように日本語タイトル + 英語サブタイトルを組み合わせる
  - **ウォームブラウン `#b78051`**: コーヒーやチョコレートを連想させる季節・テーマのアクセントカラー
  - **検索入力は pill 形状**（border-radius 900px）
  - **角丸は基本 0px**（pill 検索とサークル CTA のみ例外）
  - ライトモード前提（ダーク切替なし）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> DEAN & DELUCA は**黒と白の二極構成**に**グレースケール**と**ウォームブラウン**を添えるミニマルなパレット。

### Brand

- **Brand Black** (`#000000`): ロゴ・見出し・本文・CTA 背景。ブランドの基調色
- **Brand White** (`#ffffff`): ページ背景・CTA テキスト（黒面上）・ヒーローテキストボックス

### Accent

- **Warm Brown** (`#b78051`): 季節・テーマセクションのアクセント（rgb(183, 128, 81)）。"お店でたのしむ" セクション等。コーヒー・チョコレート・キャラメルを連想させるブランドらしい暖色

### Surface（背景）

- **Page Background** (`#ffffff`): ページ全体の純白
- **Section Light** (`#f8f8f8`): セクション背景の微灰（rgb(248, 248, 248)）
- **About Surface** (`#eeeeee`): アバウトセクション・補助面（rgb(238, 238, 238)）
- **Anchor Tab** (`#f0f0f0`): アンカーナビゲーションタブの背景（rgb(240, 240, 240)）
- **Footer** (`#000000`): フッタ背景（黒）

### Text / Foreground

- **Text Primary** (`#000000`): 見出し・本文・ナビ
- **Text Dark Gray** (`#444444`): 補助テキスト・フッタ内リンク（rgb(68, 68, 68)）
- **Text Inverse** (`#ffffff`): 黒背景上の白文字（CTA・フッタ）

### Border / Divider

- **Search Border** (`#707070`): 検索入力の枠線（rgb(112, 112, 112)）
- **Anchor Tab Border** (`#e6e6e6`): アンカーナビの 2px 枠（rgb(230, 230, 230)）
- **Divider** (`#8b8b8b`): 区切り線・サブテキスト（rgb(139, 139, 139)）
- **Carousel Dot** (`#cccccc`): カルーセルのドットインジケーター非活性状態

### Semantic（補完）

- 実 UI にエラー・成功色は表面化していない（EC カート・フォームでは内部使用）
- アラートを追加する場合は赤 `#c0392b` / 緑 `#27ae60` / 黄 `#d4a726` を**落ち着いたトーン**で

---

## 3. Typography Rules

### 3.1 和文フォント

DEAN & DELUCA は**2 系統のフォント**を明確に使い分ける:

#### 見出し・CTA — 游明朝 serif

- **第1候補**: `游明朝体` / `"Yu Mincho"` / `YuMincho`
- **第2候補**: `"ヒラギノ明朝 Pro"` / `"Hiragino Mincho Pro"`
- **第3候補**: `"MS P明朝"` / `"MS PMincho"`
- **最終フォールバック**: `serif`
- **役割**: セクション見出し・カテゴリ名・CTA テキストに使用。プレミアム EC の格式を表現

#### 本文・ナビ・ユーティリティ — 游ゴシック sans

- **第1候補**: `游ゴシック体` / `"Yu Gothic"` / `YuGothic`
- **第2候補**: `"ヒラギノ角ゴ Pro"` / `"Hiragino Kaku Gothic Pro"`
- **第3候補**: `メイリオ` / `Meiryo`
- **第4候補**: `"MS Pゴシック"` / `"MS PGothic"`
- **最終フォールバック**: `sans-serif`

### 3.2 欧文フォント

- **サンセリフ**: `"Helvetica Neue"`, `Arial` — 和文ゴシック系チェーンの先頭に配置。欧文グリフを Helvetica で表示する欧文優先構成
- セリフ（欧文専用）: 該当なし（明朝チェーンは游明朝の欧文グリフで対応）
- 等幅: 該当なし

### 3.3 font-family 指定

実サイトの実測値:

```css
/* 本文・ナビ・ユーティリティ（欧文先行 + 游ゴシック） */
font-family: "Helvetica Neue", Arial, 游ゴシック体, "Yu Gothic", YuGothic,
  "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
  "MS Pゴシック", "MS PGothic", sans-serif;

/* 見出し・CTA・h1-h3（游明朝） */
font-family: 游明朝体, "Yu Mincho", YuMincho,
  "ヒラギノ明朝 Pro", "Hiragino Mincho Pro",
  "MS P明朝", "MS PMincho", serif;

/* ボタン（カルーセルコントロール等、短縮版） */
font-family: "Helvetica Neue", Arial, 游ゴシック体, "Yu Gothic", YuGothic, sans-serif;
```

**フォールバックの考え方**:
- 本文は **Helvetica Neue を先頭に置く欧文優先構成** — "DEAN & DELUCA" のブランド名や英語ラベルを Helvetica で美しく表示
- 見出しは游明朝を最優先 — プレミアム感を明朝で担保
- ゴシック系は `"ヒラギノ角ゴ Pro"` を使用（`ProN` ではなく `Pro`）
- AI で再現する場合:
  - 本文: `"Helvetica Neue", Arial, "Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif` に簡略化
  - 見出し: `"Yu Mincho", "Hiragino Mincho Pro", serif` に簡略化

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-08 取得）

| Role | Family | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|--------|------|--------|-------------|----------------|-------|------|
| Display (h2) | **游明朝** | **32px** | 600 | 50.88px (×1.59) | normal | `#000000` | "今月のおすすめ" 等の最大見出し |
| Heading Lv1 (h2) | **游明朝** | **28px** | 600 | 36px (×1.29) | 0.56px | `#000000` | "重要なお知らせ" 等のセクション見出し |
| Heading Lv2 (h2) | **游明朝** | 28px | 600 | 39.76px (×1.42) | normal | `#000000` | "オンラインストアのおすすめ特集" |
| Heading Lv3 (h2) | **游明朝** | 24px | 600 | 30.84px (×1.29) | normal | `#000000` | "カテゴリーから選ぶ" |
| Category (h3) | **游明朝** | 16px | 600 | 21px (×1.31) | -0.5px | `#000000` | カテゴリ名 |
| Nav Section (h2) | 游ゴシック | 16–18px | 600–900 | 1.5 | 0.56px | `#000000` | ナビゲーション見出し |
| Logo (h1) | **游明朝** | 14px | 600 | 18.5px (×1.32) | 0.56px | `#000000` | サイトロゴテキスト |
| Body | 游ゴシック | 14px | 500 | 22.4px (×1.6) | 0.56px | `#000000` | 本文・商品説明 |
| Nav Link | 游ゴシック | 14px | 500 | 21px (×1.5) | 0.56px | `#000000` | ナビゲーションリンク |
| Utility / Small | 游ゴシック | 12px | 500 | 19.2px (×1.6) | 0.56px | `#000000` | ユーティリティバー |
| CTA Circle | **游明朝** | 14px | 600 | — | — | `#ffffff` | "一覧を見る" 円形ボタン |

### 3.5 行間・字間

- **本文の行間**: **1.6**（22.4 / 14）— 日本語本文の標準。14px のコンパクトな本文サイズを補う十分な行間
- **大見出し（Display）の行間**: **1.59**（50.88 / 32）— 明朝にしてはゆったりで、写真の余韻を引き継ぐ
- **セクション見出しの行間**: **1.29**（36 / 28）— 明朝タイトルをコンパクトに
- **カテゴリ名の行間**: **1.31**（21 / 16）
- **本文の字間 (letter-spacing)**: **0.56px（0.04em at 14px）** — body に一律適用。日本語に適度な空気を入れて上品な間を作る
- **カテゴリ名の字間**: **-0.5px（-0.03em at 16px）** — タイトなレタースペーシングで密度感を出す

**ガイドライン**:
- DEAN & DELUCA の本文は 14px と小さめ。**line-height 1.6 と letter-spacing 0.04em** が可読性の生命線
- 明朝見出しは weight 600 で明朝の繊細さとプレミアム EC の存在感を両立
- letter-spacing 0.56px は body からの継承値。見出しの一部では normal に戻る

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 商品名（"マスカットオブアレキサンドリアの白ワインゼリーとクリームチーズのサンドウィッチ" 等）は長くなりがちなので改行位置に注意
- バイリンガルラベルは日本語行 + 英語行で改行する

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt / kern を有効化していない** — 游明朝・游ゴシックともに詰めない素朴な組
- 0.56px の letter-spacing で字間を開く方向に調整（palt による詰めとは逆のアプローチ）

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

DEAN & DELUCA は**3 種類のボタン**を使い分ける。

**Primary CTA（円形・"一覧を見る"）**
- Background: `#000000`（黒）
- Text: `#ffffff`（白）
- Border Radius: **`100%`**（完全な円形）
- Padding: `37px 0px 0px`（円形の中央に text-align: center で配置）
- Font: 游明朝 / 14px / weight 600
- 用途: セクション末尾の誘導 CTA。写真の脇に浮かぶ円形が DEAN & DELUCA の特徴的な UI 要素

**Secondary CTA（矩形アウトライン・"TOPページ"）**
- Background: `#ffffff`（白）
- Text: `#000000`（黒）
- Border: `1px solid #000000`
- Border Radius: `0px`（直角）
- Padding: `12px 0px 11px`
- Font: 游明朝 / 16px / weight 600
- 用途: エラーページの戻り導線等

**Anchor Navigation Tab**
- Background: `#f0f0f0`
- Text: `#000000`
- Border: `2px solid #e6e6e6`
- Border Radius: `0px`
- Padding: `3px`
- Font: 游ゴシック / 14px / weight 500
- 用途: ページ内アンカーナビゲーション

### Inputs

**Search Input（ヘッダー検索）**
- Background: `#ffffff`
- Border: `1px solid #707070`
- Border Radius: **`900px`**（pill 形状）
- Padding: `4.5px 10px 4.5px 40px`（左に検索アイコン用余白）
- Font: 游ゴシック / 13px / weight 500
- Color: `#000000`

その他のフォーム入力（カート・ログイン等）:
- Background: `#ffffff`
- Border: `1px solid #707070`
- Border (focus): `1px solid #000000`（推奨）
- Border Radius: `0px`
- Padding: `12px 16px`
- Font: 游ゴシック / 14px / weight 500

### Cards / Product Cards

商品一覧・特集カード:

- Background: `#ffffff`
- Border: なし（影もなし）
- Border Radius: `0px`
- Padding: 16px（推奨）
- Shadow: なし（フラット）
- 構造:
  - 商品写真（正方形に近い高品質フードフォトグラフィー）
  - 商品名（游明朝 or 游ゴシック / 14–16px / weight 500–600）
  - 価格（游ゴシック / 14px / weight 500）
  - カテゴリタグ（12px / weight 500）

### Header / Nav

3 層構成のスティッキーヘッダー:

1. **ユーティリティバー**: 游ゴシック 12px / weight 500 / ログイン・会員登録等
2. **ロゴ行**: 中央に "DEAN & DELUCA"（游明朝 14px / weight 600）/ 右に pill 検索 + マイページ・カートアイコン
3. **ナビバー**: 商品を選ぶ / ギフトを贈る / 季節の特集 / コラム（左）、ケータリング / 店舗情報（右）/ 游ゴシック 14px / weight 500

- Background: `#ffffff`
- Border Bottom: `1px solid #e6e6e6`（推奨）

### Footer

- Background: `#000000`（黒）
- Color: `#ffffff`（白テキスト）
- ロゴ・リンク: 游ゴシック 12–14px
- コピーライト: 12px

### Hero Carousel

- 全幅のフードフォトグラフィー
- テキストオーバーレイ: 白ボックス上に游明朝の日本語タイトル + 英語サブタイトル
- ドットインジケーター: `#cccccc`（非活性）/ `#000000`（活性・推奨）
- 前後ボタン: 游ゴシック（短縮チェーン）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内余白・pill 内 |
| S | 8px | リスト項目間 |
| M | 16px | カード内段落間 |
| L | 24px | カード間 |
| XL | 48px | セクション内余白 |
| XXL | 80–96px | セクション間 |

### Container

- Max Width: 1200px（推奨）
- Padding (horizontal): mobile 16px / desktop 24–32px

### Grid

- 商品カード: 2 カラム（mobile）→ 3 カラム（tablet）→ 4 カラム（desktop）
- 特集カード: 1–2 カラム（大判写真を活かす）
- Gutter: 16–24px
- カテゴリグリッド: 3–6 カラム（desktop）

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | カード・画像・Secondary CTA・入力欄 |
| Circle CTA | **100%** | Primary CTA（"一覧を見る"） |
| Pill Search | **900px** | 検索入力 |

- 原則 0px の直角。**円形 CTA と pill 検索だけが例外**

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・写真・パネル（基本フラット） |
| 1 | `0 1px 0 0 #e6e6e6` | ヘッダーの下罫線（推奨） |

- DEAN & DELUCA は**影を使わない**。フラットな純白面の上に黒テキストと高品質写真だけで構成する
- 視覚階層は**写真のサイズ**・**游明朝見出しの大小**・**グレースケール面色の濃淡**で表現
- ホバー演出: opacity 変化のみ（推奨）

---

## 7. Do's and Don'ts

### Do（推奨）

- **背景は純白 `#ffffff`**、テキストは純黒 `#000000`（グレーに逃げない強いコントラスト）
- **見出し・CTA テキストは游明朝 serif** / weight 600。セクションタイトルからカテゴリ名まで一貫して明朝
- **本文・ナビは游ゴシック sans** / weight 500（Medium 相当）。Helvetica Neue を先頭に置く欧文優先チェーン
- **Display 見出し: 32px / 游明朝 / weight 600 / line-height 1.59**
- **セクション見出し: 24–28px / 游明朝 / weight 600 / line-height 1.29–1.42**
- **本文: 14px / 游ゴシック / weight 500 / line-height 1.6 / letter-spacing 0.04em**
- **letter-spacing 0.04em を body に適用** — DEAN & DELUCA のテキストに通底する上品な空気感
- **Primary CTA は黒円形**（border-radius 100% / 黒塗り / 白文字 游明朝 14px weight 600）
- **Secondary CTA は白矩形アウトライン**（border 1px solid #000000 / border-radius 0px）
- **検索入力は pill 形状**（border-radius 900px / border 1px solid #707070）
- **バイリンガルラベルを使う**: 日本語タイトル + 英語サブタイトル（例: "今月のおすすめ MONTHLY SPECIAL"）
- **フッタは黒 `#000000` 面 + 白文字**
- **ウォームブラウン `#b78051` はアクセントとして控えめに** — セクション背景やテーマカラーに使用
- **食材・商品写真は大きく、高品質に**。ビジュアルが主役

### Don't（禁止）

- 本文の weight を 400 にしない（500 が DEAN & DELUCA のデフォルト）
- 本文に明朝を使わない（明朝は見出し・CTA 専用）
- 見出しにゴシックを使わない（ナビのセクション見出しは例外だが、メインコンテンツの見出しは明朝）
- letter-spacing を normal（0）にしない（0.04em が DEAN & DELUCA の組）
- font-feature-settings: "palt" を適用しない（normal が選択）
- CTA を角丸矩形にしない（Primary は完全な円形 100%、Secondary は直角 0px）
- 鮮やかな原色やパステルを多用しない（黒白グレーとウォームブラウンの抑制されたパレット）
- 影・elevation を使わない（フラット原則）
- 商品写真を小さく扱わない（フードフォトグラフィーが最大の訴求力）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | 769–1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Display 見出し: 32px → 24px（游明朝 weight 600 は維持）
- セクション見出し: 28px → 20–22px
- Body: 14px 維持（縮小しない）
- ヒーローカルーセル: 全幅維持、テキストオーバーレイのサイズを縮小
- ヘッダー: 3 層 → ロゴ + ハンバーガー + 検索アイコンに集約
- カードグリッド: 4 → 2 → 1 カラム
- 円形 CTA: サイズを縮小するが円形は維持

### タッチターゲット

- 最小 44×44px。円形 CTA は直径 74px 以上を確保（padding 37px × 2 基準）
- ナビリンクの行間・パディングでタッチ領域を担保

### ダークモード

- **対応なし**。ライトモード固定
- フッタの黒面が「ダーク的役割」を担う

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff（純白）
Text Primary: #000000（純黒）
Text Dark Gray: #444444（補助テキスト）
Warm Brown: #b78051（アクセント）
Section Light: #f8f8f8（セクション背景）
About Surface: #eeeeee
Anchor Tab: #f0f0f0
Footer: #000000（黒）
Search Border: #707070
Anchor Border: #e6e6e6
Carousel Dot: #cccccc

Heading Font (游明朝): 游明朝体, "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif
Heading Web Fallback: "Yu Mincho", "Hiragino Mincho Pro", serif

Body Font (游ゴシック): "Helvetica Neue", Arial, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "MS Pゴシック", "MS PGothic", sans-serif
Body Web Fallback (簡略): "Helvetica Neue", Arial, "Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif

Display: 32px / 游明朝 / weight 600 / line-height 1.59 / letter-spacing normal
Heading Lv1: 28px / 游明朝 / weight 600 / line-height 1.29 / letter-spacing 0.56px
Heading Lv2: 24px / 游明朝 / weight 600 / line-height 1.29
Category: 16px / 游明朝 / weight 600 / line-height 1.31 / letter-spacing -0.5px
Body: 14px / 游ゴシック / weight 500 / line-height 1.6 / letter-spacing 0.56px (0.04em)
Utility: 12px / 游ゴシック / weight 500 / line-height 1.6 / letter-spacing 0.56px

Primary CTA (Circle): black bg #000000 / white text #ffffff / border-radius 100% / 游明朝 14px / weight 600
Secondary CTA (Outline): white bg / 1px solid #000000 / border-radius 0px / 游明朝 16px / weight 600
Search Input: pill / border-radius 900px / 1px solid #707070 / 游ゴシック 13px

font-feature-settings: normal（palt 適用なし）
Border Radius: 0px（Circle CTA のみ 100%、Search のみ 900px）
Shadow: none（フラット）
```

### プロンプト例

```
DEAN & DELUCA のデザインに従って、季節の特集商品ページを作成してください。
- 背景: #ffffff（純白）
- 見出しフォント: "Yu Mincho", "Hiragino Mincho Pro", serif
- 本文フォント: "Helvetica Neue", Arial, "Yu Gothic", "Hiragino Kaku Gothic Pro", sans-serif
- font-feature-settings: normal（palt は適用しない）
- letter-spacing: 0.04em を本文に適用（見出しは normal）
- ページタイトル "今月のおすすめ": 32px / 游明朝 / weight 600 / line-height 1.59 / color #000000
- 英語サブタイトル "MONTHLY SPECIAL": 游ゴシック / 12px / weight 500 / letter-spacing 0.1em / color #444444
- セクション見出し "カテゴリーから選ぶ": 24px / 游明朝 / weight 600 / line-height 1.29 / color #000000
- 商品カード: 背景 #ffffff / border-radius 0 / padding 16px / 影なし
- 商品写真: 正方形・高品質フードフォトグラフィー
- 商品名: 游ゴシック 14px / weight 500 / color #000000
- 価格: 游ゴシック 14px / weight 500
- "一覧を見る" CTA: 黒円形 / border-radius 100% / bg #000000 / 白文字 游明朝 14px weight 600
- "TOPページ" CTA: 白矩形 / border 1px solid #000000 / border-radius 0px / 黒文字 游明朝 16px weight 600
- 検索バー: pill 形状 / border-radius 900px / border 1px solid #707070 / 游ゴシック 13px
- フッタ: 背景 #000000（黒）+ 白文字
- ウォームブラウン #b78051 は季節テーマセクションのアクセントに
- 影・グラデーションは一切使わない
- 角丸はすべて 0px（円形 CTA のみ 100%、検索のみ pill）
- 本文 weight は 500（400 にしない）
```
