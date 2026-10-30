# DESIGN.md — KEYUCA（ケユカ）

> KEYUCA（https://www.keyuca.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本発のライフスタイル・インテリアブランド。カーテン、家具、キッチン用品、生活雑貨を展開し、「シンプルで、永く使える」を掲げる。**Gothic Medium BBB（森澤ゴシック）+ Gill Sans Nova** のバイリンガルフォントシステムが特徴 — 日本語に繊細なゴシック体、英文に人文主義サンセリフを組み合わせ、上質だが控えめな世界観を表現する。色彩はウォームグレーとコッパーのニュートラルトーンに徹し、派手な色を排除している
- **密度**: ゆったりとした余白を持つ EC サイト。本文 13px に対して line-height 2.0 の非常に広い行間が特徴的で、空間の呼吸を大切にする。フォントウェイトは全体を通して 500（Medium）で統一
- **キーワード**: ナチュラル、静謐、ウォームグレー、line-height 2.0、Medium 500 統一、バイリンガル階層
- **特徴**: **13px / weight 500 / line-height 2.0 / letter-spacing 0.05em** が全体を貫く基本トーン。本コレクション中で最も広い行間（2.0）を持ち、見出しから本文まで同じ余裕のあるリズムを維持する。ボタンは **#878787 グレー**（ブランドカラーでも黒でもない中間的なグレー）を主体に、pill（20px）と角丸（6px）を併用する。font-feature-settings は normal（palt 未適用）で、等幅の整った印象を保つ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

KEYUCA のカラーは**ウォームグレーとアースカラー**が中心。鮮やかなプライマリカラーを持たず、控えめなグレーと温かみのあるゴールド / コッパーで構成される。

- **Brand Gold** (`#aa9977`): ウォームゴールド / タンカラー。ブランドのシンボリックな暖色
- **Brand Copper** (`#c28358`): コッパー / テラコッタ。カルーセルのアクティブインジケーター等のアクセントに使用

### Interactive（インタラクティブ要素）

- **Button Grey** (`#878787`): ログイン、CTA、ユーティリティボタンの背景色。ブランドの「主張しすぎない」哲学を反映した中間グレー
- **Button Grey on White** (`#ffffff`): ボタン上のテキスト

### Semantic（意味的な色）

- **Error / Danger** (`#ee2200`): エラー、必須マーク、警告

### Text & Neutral

- **Text Primary** (`#323333`): メインテキスト（rgb 50, 51, 51）— 純黒を避けた暖みのあるチャコール
- **Text Secondary** (`#878787`): 補足テキスト、英文セクションラベル
- **Text Muted** (`#707070`): ダークグレーの補助テキスト
- **Text Disabled** (`#c6c6c6`): 無効状態、ライトグレーテキスト

### Surface & Border

- **Background Primary** (`#f3f3f3`): ページ背景（最多出現、65件）
- **Background Secondary** (`#f9f9f9`): セカンダリ背景面（40件）
- **Surface White** (`#ffffff`): カード、ボタン背景
- **Border Light** (`#e2e2e2`): 区切り線、入力欄の枠
- **Overlay Dark** (`rgba(0, 0, 0, 0.5)`): モーダルオーバーレイ

---

## 3. Typography Rules

### 3.1 和文フォント

- **Gothic Medium BBB**: 森澤（Morisawa）のゴシック体。Adobe Fonts 経由で配信。ウェイト 500（Medium）のみ使用。繊細だが安定感のある字形が KEYUCA の「静かな上質さ」を体現する

### 3.2 欧文フォント

- **Gill Sans Nova**: Adobe Fonts 経由のヒューマニストサンセリフ。英文セクションラベル（"Information" "New Arrival" 等）に使用。古典的な人文主義の骨格が、KEYUCA のクラフト感を補強する

**Google Fonts 代替**（preview.html 用）:
- Gothic Medium BBB → **Zen Kaku Gothic New**（同じ森澤系で字形が近い）
- Gill Sans Nova → **Lato**（ヒューマニストサンセリフとして字幅・骨格が近似）

### 3.3 font-family 指定

```css
/* 本文（和文メイン） */
font-family: "Gothic Medium BBB", sans-serif;

/* 英文ラベル・見出し */
font-family: gill-sans-nova, sans-serif;

/* 検索入力欄 */
font-family: "Hiragino Sans", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- 和文は Gothic Medium BBB を単独指定（Adobe Fonts で確実に読み込まれる前提）。フォールバックは sans-serif のみ
- 英文ラベルは gill-sans-nova（Adobe Fonts の CSS 名）を使用
- 検索入力欄のみヒラギノ角ゴ + 游ゴシックを使用（システムフォント）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading (JP) | Gothic Medium BBB | 28px | 500 | 2.0 (56px) | 0.05em (0.65px) | 日本語セクション見出し「新商品」等 |
| Heading (EN label) | gill-sans-nova | 16px | 500 | 1.375 (22px) | 0.05em (0.65px) | 英文セクションラベル "Information" / color #878787 |
| Body | Gothic Medium BBB | 13px | 500 | 2.0 (26px) | 0.05em (0.65px) | 本文テキスト |
| Product Name | Gothic Medium BBB | 13px | 500 | 1.7 (22.1px) | 0.05em (0.65px) | 商品名 |
| News | Gothic Medium BBB | 13px | 500 | 2.0 (26px) | 0.05em (0.65px) | お知らせテキスト |
| Nav Small | Gothic Medium BBB | 11px | 500 | 2.0 (22px) | 0.05em | フッターナビ等の小テキスト |
| Button (pill) | Gothic Medium BBB | 14px | 500 | — | — | ログイン / 新規登録ボタン |
| Button (utility) | Gothic Medium BBB | 13px | 500 | — | — | ご利用ガイド等 |
| Button (CTA) | Gothic Medium BBB | 16px | 500 | — | — | トップページへ等の大きなCTA |
| Input (search) | Hiragino Sans | 12px | 400 | normal | 0.1em (1.2px) | 検索フォーム |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `2.0`（26px / 13px）— 本コレクション中で最も広い。日本語テキストに「余白の呼吸」を持たせる
- **見出し（JP）の行間**: `2.0`（56px / 28px）— 見出しも本文と同じ 2.0 を維持
- **見出し（EN label）の行間**: `1.375`（22px / 16px）— 英文ラベルのみ詰める
- **商品名の行間**: `1.7`（22.1px / 13px）— 商品カード内は少し詰める
- **本文の字間 (letter-spacing)**: `0.05em`（0.65px @ 13px）— グローバルに適用
- **検索フォームの字間**: `0.1em`（1.2px @ 12px）— 入力欄は広め

**ガイドライン**:
- KEYUCA は **line-height 2.0 を本文・見出し両方に適用**する。英文ラベルと商品名のみ例外
- letter-spacing 0.05em は控えめだが、13px の小さなフォントサイズでの可読性を確保する重要な設定
- font-weight は **全要素 500（Medium）で統一**。太字も細字も使わない均質なトーン

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt 未適用 */
```

- **palt 未適用**: KEYUCA は font-feature-settings: normal。プロポーショナル字詰めを行わず、等幅のまま整った印象を保つ
- Gothic Medium BBB のデフォルトメトリクスをそのまま活かすアプローチ

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

KEYUCA のボタンは **#878787 グレー背景**が基本。ブランドカラーでも黒でもない「主張しない」グレーが特徴的。pill（20px）と角丸（6px）を用途で使い分ける。

**Primary Pill（ログイン・新規登録）**
- Background: `#878787`
- Text: `#ffffff`
- Border Radius: **20px**（pill）
- Padding: 15px 10px 15px 62px
- Font Size: 14px
- Font Weight: 500

**Utility（ご利用ガイド、ショップリスト）**
- Background: `#878787`
- Text: `#ffffff`
- Border Radius: **6px**
- Font Size: 13px
- Font Weight: 500

**CTA（トップページへ）**
- Background: `#878787`
- Text: `#ffffff`
- Border Radius: **6px**
- Font Size: 16px
- Font Weight: 500

**Secondary / Outline（戻るボタン）**
- Background: `#ffffff`
- Text: `#323333`
- Border Radius: **6px**
- Font Size: 16px
- Font Weight: 500

**ボタンの考え方**:
- 塗りつぶしボタンは **すべて #878787 グレー**。ブランドゴールド `#aa9977` やコッパー `#c28358` はボタンに使わない
- ログイン等の認証系は **pill（20px）**、ユーティリティ・CTA は **角丸（6px）** で区別
- outline ボタンは白背景 + テキスト色（#323333）

### Carousel Indicators

- Active: `#c28358`（コッパー）
- Inactive: `#f3f3f3`（背景色と同化）

### Inputs（検索フォーム）

- Font: "Hiragino Sans", "Yu Gothic", sans-serif
- Font Size: 12px
- Font Weight: 400
- Letter Spacing: 0.1em (1.2px)

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（推定）
- Border Radius: なし（推定）
- 商品名（13px / 500 / line-height 1.7）+ 価格表示の構成

---

## 5. Layout Principles

### Container

- ページ全体の背景: `#f3f3f3`
- コンテンツエリアは白背景のカード / セクション単位

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10px | ボタン内パディング（最小） |
| S | 15px | ボタンパディング（pill 縦） |
| M | 20px | セクション間余白（推定） |
| L | 40px | セクション間余白（推定） |
| XL | 62px | pill ボタン左パディング（アイコン分） |

### Grid

- 商品カードグリッドレイアウト
- カルーセル形式の商品表示が主体

---

## 6. Depth & Elevation

KEYUCA はシャドウをほぼ使わない。`#f3f3f3` の面と `#ffffff` の面の切り替え、および微細なシャドウで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 大半の要素 |
| 1 | `rgb(0 0 0 / 10%)` | ドロップダウン、ポップオーバー等（shadow-primary） |
| 2 | background `#ffffff` | カード、コンテンツ面 |
| 3 | background `#f3f3f3` | ページ背景面 |
| 4 | `rgba(0, 0, 0, 0.5)` overlay | モーダルオーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **Gothic Medium BBB** を使用し、欧文ラベルは **gill-sans-nova** を使う
- font-weight は **全要素 500（Medium）** で統一する
- 本文・日本語見出しの line-height は **2.0** を維持する
- letter-spacing は **0.05em** をグローバルに適用する
- ボタンの背景色は **#878787 グレー** を使う
- テキスト色は `#323333` を使う（純黒を避ける）
- ページ背景は `#f3f3f3`、コンテンツ面は `#ffffff` の2面構成にする
- pill ボタン（20px）は認証系、角丸（6px）はユーティリティ・CTA に使い分ける
- カルーセルのアクティブインジケーターには `#c28358` コッパーを使う

### Don't（禁止）

- 純黒 `#000000` をテキストに使わない（`#323333` が標準）
- font-weight を 500 以外に変えない（太字 700 も細字 300 も使わない）
- line-height を 2.0 以下にしない（本文・日本語見出し）
- ボタンにブランドゴールド `#aa9977` やコッパー `#c28358` を使わない（ボタンは #878787）
- `font-feature-settings: "palt"` を適用しない（KEYUCA は等幅）
- 鮮やかなアクセントカラーを使わない（ウォームグレー・アースカラーの範囲内に抑える）
- フォントサイズを大きくしすぎない（13px ベースの静謐なスケール感を保つ）
- ボタンに角丸 9999px を使わない（pill は 20px まで）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- 見出し（28px）→ 縮小
- 商品グリッドは 1〜2 カラムに折り返し
- ナビゲーションはハンバーガー化
- line-height 2.0 と letter-spacing 0.05em は維持（KEYUCA のアイデンティティ）

### タッチターゲット

- pill ボタンは padding 15px で十分なタップ領域を確保
- 最小タッチターゲット: 44px x 44px（WCAG 基準）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: KEYUCA（ケユカ）
Origin: 日本発ライフスタイル・インテリアブランド
Brand Gold: #aa9977
Brand Copper: #c28358
Button Grey: #878787
Text Primary: #323333
Background: #f3f3f3
Surface White: #ffffff
Error: #ee2200

JP Font: "Gothic Medium BBB", sans-serif
EN Font: gill-sans-nova, sans-serif
Search Font: "Hiragino Sans", "Yu Gothic", sans-serif

Google Fonts 代替: Zen Kaku Gothic New (JP) / Lato (EN)

palt: 未適用（font-feature-settings: normal）
Body: 13px / 500 / line-height 2.0 / letter-spacing 0.05em
Heading (JP): 28px / 500 / line-height 2.0 / letter-spacing 0.05em
Heading (EN label): 16px / 500 / line-height 1.375 / color #878787
Button Style: filled (bg #878787, text #fff, radius 6px or 20px pill)
Shadow: rgb(0 0 0 / 10%) — ほぼ使わない
```

### プロンプト例

```
KEYUCA のデザインシステムに従って、商品一覧ページを作成してください。
- 和文フォントは "Gothic Medium BBB", sans-serif（Google Fonts 代替: Zen Kaku Gothic New）
- 英文ラベルは gill-sans-nova, sans-serif（Google Fonts 代替: Lato）
- font-feature-settings: normal（palt 未適用）
- letter-spacing は全要素に 0.05em
- 本文は 13px / 500 / line-height 2.0 / color #323333
- 日本語見出しは 28px / 500 / line-height 2.0
- 英文セクションラベルは 16px / 500 / line-height 1.375 / color #878787
- ボタンは bg #878787, text #fff, radius 6px（認証系は pill 20px）
- ページ背景は #f3f3f3、コンテンツ面は #ffffff
- シャドウは最小限（rgb(0 0 0 / 10%)）
- font-weight は全要素 500 で統一
```

### デザインの重要ポイント

1. **Gothic Medium BBB + Gill Sans Nova**: 森澤ゴシック（Adobe Fonts）と Gill Sans Nova のバイリンガルシステム。日本語は繊細なゴシック体、英語はヒューマニストサンセリフで、「クラフト感のある上質さ」を二言語で表現
2. **line-height 2.0 の広い行間**: 本コレクション中で最大の行間。日本語本文も見出しも 2.0 で統一し、ゆったりとした「空間の呼吸」を生む。KEYUCA の実店舗が持つ余白感をデジタルに翻訳した設定
3. **font-weight 500 統一**: 太字も細字も使わず、すべて Medium で通す。強調には色やサイズの変化を使い、ウェイトの変化を排除することで均質なトーンを維持
4. **#878787 グレーのボタン**: ブランドカラーでも黒でもない中間グレーをボタンに使うのは珍しい。「主張しすぎない」KEYUCA の姿勢がインタラクティブ要素にまで徹底されている
5. **13px の小さなベースサイズ**: 本文 13px は一般的な 14-16px よりも小さい。line-height 2.0 と letter-spacing 0.05em で可読性を補い、静謐で品のある印象を作る
6. **palt 未適用**: font-feature-settings: normal。プロポーショナル字詰めをせず、等幅のまま整った印象を保つ。Gothic Medium BBB のデフォルトメトリクスへの信頼
7. **アースカラーのアクセント**: 鮮やかな色を一切使わず、ゴールド `#aa9977` とコッパー `#c28358` だけが暖色。カルーセルインジケーターのコッパーが唯一の色彩的アクセント

---

**取得日**: 2026-05-09
**出典**: https://www.keyuca.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
