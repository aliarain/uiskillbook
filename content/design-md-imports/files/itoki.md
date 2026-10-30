# DESIGN.md — ITOKI (イトーキ)

> ITOKI（https://www.itoki.jp/）コーポレートサイトのデザイン仕様書。
> 「明日の『働く』を、デザインする。」を掲げるオフィス家具メーカー。
> 創業130年以上の歴史を持ち、チェア・デスク・ロッカーなどのオフィス製品から、ワークプレイスソリューションまでを手がける。
> 白を基調に、コーポレートネイビー `#003349` と暖かみのあるコーラルレッド `#ea6359` を要所で効かせるクリーンで信頼感のあるデザイン。
> Noto Sans JP を主書体とし、ゆったりとした line-height 1.8 で日本語本文の可読性を最大化する設計。
> 実サイトの computed style 実測（2026-06-15 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白 `#ffffff` を基調に、コーポレートネイビー `#003349` とブルーグレー `#d3dee4` / `#f0f4f6` の階層で構成するクリーンでプロフェッショナルな企業サイト。余白を広くとり、製品写真と空間ソリューションを大きく見せるレイアウト
- **密度**: 本文 16px / line-height 1.8（28.8px）で非常にゆったりしたプロポーション。情報は階層的に整理され、セクションごとに十分な余白を確保
- **キーワード**: Noto Sans JP、コーポレートネイビー、ブルーグレーグラデーション、pill CTA（100px radius）、line-height 1.8、クリーン・信頼・誠実
- **特徴**:
  - **CSS Custom Properties は未使用** — 値はすべて直書き
  - **コーポレートネイビー `#003349`** がブランドの核。見出し・アイコン・ユーティリティバーのテキストに使用
  - **暖色のアクセント**: コーラルレッド `#ea6359`（NEW バッジ）と `#e63d30`（カルーセル Active インジケーター）
  - **ブルーグレーの面色**: `#d3dee4` → `#f0f4f6` → `#fafcfd` と明度を段階的に変えた3段階で空気感を演出
  - **pill 型 CTA（radius 100px）** が主要アクション。白背景 + 細いグレーボーダーで控えめに
  - **`font-feature-settings: normal`** — palt は使用していない
  - フッター背景は `#333333` のチャコール
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。

### Brand（ブランドカラー）

- **Corporate Navy** (`#003349`): コーポレートカラー。セクション見出し（h3）、ユーティリティバー文字、検索ボタンアイコンに使用。深い青緑で信頼感を表現
- **Accent Coral** (`#ea6359`): 暖かみのあるコーラル。NEW バッジの背景色として使用
- **Accent Red** (`#e63d30`): カルーセルのアクティブインジケーター。コーラルよりやや彩度が高い

### Surface（面色）

- **Background White** (`#ffffff`): ページ基本背景
- **Surface Blue-Grey Light** (`#f0f4f6`): セクション背景（お知らせ、プレスリリース等）
- **Surface Blue-Grey** (`#d3dee4`): ユーティリティバー背景、カルーセルインジケーター非アクティブ
- **Surface Blue-Grey Medium** (`#c5d3db`): カテゴリ分野ナビの背景（オフィス、教育等）
- **Surface Near-White** (`#fafcfd`): セミナー・ダウンロード・コラムセクションの極薄面
- **Surface Alert** (`#fff6f5`): 重要なお知らせセクションの薄い赤背景

### Text

- **Text Primary** (`#333333`): 本文テキスト
- **Text Label** (`#48606a`): セクションラベル「トピックス」「セミナー」等のティールグレー。letter-spacing 0.06em
- **Text Muted** (`#c0c0c0`): フッターのコピーライト
- **Text Inverse** (`#ffffff`): ヒーロー上の白テキスト

### Border

- **Border Default** (`#cbd5da`): CTA ボタン、カードの標準ボーダー
- **Border Card** (`#b7c9d3`): 分野別ソリューションカードのボーダー（やや青みが強い）

### Semantic（補完）

- エラー: `#e63d30`（Accent Red を流用）
- 警告: 未定義（実測値なし）
- 成功: 未定義（実測値なし）

### Footer

- **Footer Background** (`#333333`): フッター背景のチャコール
- **Footer Dark** (`#0f1b41`): 最下部のダークネイビー

---

## 3. Typography Rules

### 3.1 和文フォント

- **メイン**: **Noto Sans JP**（Google Fonts） — 第一指定。サイト全体で統一
- **フォールバック**: ヒラギノ角ゴ → 游ゴシック → メイリオ → sans-serif

### 3.2 欧文フォント

- **メイン**: Helvetica → Arial（Noto Sans JP の後にフォールバックとして指定）
- Noto Sans JP の欧文グリフが優先される構成

### 3.3 font-family 指定

実サイトの実測値:

```css
font-family: "Noto Sans JP", Helvetica, Arial, ヒラギノ角ゴ, 游ゴシック, メイリオ, sans-serif;
```

**フォールバックの考え方**:
- **Noto Sans JP を先頭**に置く — 和文・欧文ともに Noto Sans JP のグリフで組まれる
- ヒラギノ角ゴは `ProN` 指定ではなく短縮名。環境差に注意
- Noto Sans JP は Google Fonts から配信されるため、preview.html でもそのまま使用可能
- `font-feature-settings: normal` — **palt は使用していない**

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ + 製品ページ、2026-06-15 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Hero Display | **60px** | **500** | 66px (x1.1) | **0.08em** | `#ffffff` | ヒーロー「つながるを、つくる。」 |
| Hero Catch | **19px** | 400 | 19px (x1.0) | **0.04em** | `#ffffff` | 英語サブコピー "Create a place to connect." |
| Page Title (h1) | **42px** | **700** | 50.4px (x1.2) | normal | `#ffffff` | 製品ページ「PRODUCT」 |
| Section Heading (h3) | **24px** | **700** | 43.2px (x1.8) | normal | `#003349` | 「分野別ソリューション」 |
| Sub Heading (h2) | **28px** | **700** | 42px (x1.5) | normal | `#333333` | 製品ページ「製品一覧」 |
| Section Label | **16px** | 400 | 28.8px (x1.8) | normal | `#333333` | 「[ イトーキの製品 ]」 |
| Section Label (SM) | **14px** | 400 | 24.5px (x1.75) | **0.06em** | `#48606a` | 「[ トピックス ]」ラベル |
| Body | **16px** | 400 | 28.8px (x1.8) | normal | `#333333` | 本文 |
| Body (article) | **16px** | 400 | 28px (x1.75) | normal | `#333333` | 製品説明本文 |
| Small / Caption | **14px** | 400 | 24.5px (x1.75) | normal | `#333333` | 補足テキスト |
| Nav Link | **14px** | **700** | 25.2px (x1.8) | normal | `#333333` | ヘッダーナビ |
| Utility Link | **11px** | **700** | 16.5px (x1.5) | normal | `#003349` | 「個人のお客さまはこちら」 |
| Search | **12px** | 400 | 21.6px (x1.8) | normal | `#333333` | 「検 索」 |
| Copyright | **14px** | 400 | 24.5px (x1.75) | normal | `#c0c0c0` | フッター |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.8**（28.8px / 16px）— 日本語としてかなりゆったり。可読性重視
- **見出しの行間**: **1.1〜1.8** — ヒーロー Display は締まった 1.1、セクション見出しは本文と同じ 1.8
- **本文の字間 (letter-spacing)**: **normal** — 字間は付けない
- **ラベルの字間**: **0.06em**（0.84px / 14px）— セクションラベル「トピックス」等
- **ヒーロー見出しの字間**: **0.08em**（4.8px / 60px）— 大型見出しのみ少し開く
- **ヒーローサブコピーの字間**: **0.04em**（0.76px / 19px）

**ガイドライン**:
- 本文は `line-height: 1.8` を基準とする。日本語のオフィス家具サイトとして、ゆとりを持たせた組版
- `letter-spacing` は基本的に `normal`。ラベル系のみ `0.04〜0.08em` で少し開く
- ヒーロー系の大型文字は `weight 500`（Bold ではない）で上品さを維持

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使用していない**（実測で確認）
- Noto Sans JP はプロポーショナルメトリクスを持つが、ITOKI サイトでは有効化されていない

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Pill CTA（主要アクション）** — `c-btn` クラス
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #cbd5da`
- Padding: `0 40px`
- Height: 推定 48px（line-height 19.6px + padding）
- Border Radius: **100px**（pill 型）
- Font: 14px / weight 700
- ホバー: 背景色が微かに変化

**Hero Button（角丸型）** — `top-mv__btn`
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #cbd5da`
- Padding: `0 40px`
- Border Radius: **4px**
- Font: 16px / weight 700

**Category Tag（分野別ソリューション）**
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #b7c9d3`
- Padding: `12px 8px`
- Border Radius: **4px**
- Font: 14px / weight 400

**Utility Button（ヘッダー）**
- Background: `#d3dee4`
- Text: `#003349`
- Border Radius: `0px`
- Font: 11px / weight 700

### Inputs

- Background: `#ffffff`
- Border: `0px none`（ボーダーレス）
- Border Radius: **8px**
- Padding: `8px 20px`
- Font: 16px / weight 500
- フォーカス: 未実測（推奨: `2px solid #003349`）

### Cards

**Topics Card（トピックスカード）**
- Background: `#ffffff`
- Border: `1px solid #cbd5da`
- Border Radius: `0px`
- Padding: カード内は画像 + テキスト構成
- Shadow: `none`（フラット）

### Header / Nav

- Background: `#ffffff`
- 上部ユーティリティバー: `#d3dee4` 背景
- ロゴ左寄せ、ナビ中央、ユーティリティ右寄せ
- 区切り線: なし（影または色面で分離）

### Footer

- Background: `#333333`（チャコール）
- 最下部: `#0f1b41`（ダークネイビー）
- Text: `#ffffff`
- Copyright: `#c0c0c0`
- Padding: `0 48px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコンとテキストの間隔、pill 内 padding |
| S | 16px | リスト項目間 |
| M | 24px | カード内パディング |
| L | 32px | セクション内余白 |
| XL | 48px | フッター左右パディング |
| XXL | 64px | セクション間余白 |
| XXXL | 80px | 大セクション間 |

### Container

- Max Width: 推奨 `1200〜1440px`
- ヘッダー: 全幅
- コンテンツ領域: 中央寄せ、左右に十分な余白

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | カード、ユーティリティボタン |
| Small | 4px | ヒーローボタン、カテゴリタグ |
| Medium | 8px | 検索入力 |
| Pill | 100px | 主要 CTA ボタン |
| Circle | 100% | カルーセルインジケーター |

### Grid

- トピックスカード: 3〜4カラム横並び（横スクロール）
- 分野別ソリューション: 3カラムグリッド
- 納入事例: 2カラムグリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素のデフォルト（フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時のリフトアップ（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.08)` | モーダル・ドロップダウン（推奨） |

- ITOKI はボーダーと面色で階層を表現するフラットデザイン
- 影はほぼ使わない。ホバーフィードバック程度

---

## 7. Do's and Don'ts

### Do（推奨）

- **Noto Sans JP** を先頭に置き、フォールバックチェーン全体を指定する
- 本文 line-height は **1.8** に統一（ITOKI サイト全体の基調）
- コーポレートネイビー `#003349` は**見出し・ラベル**に、`#333333` は**本文**に使い分ける
- CTA ボタンは **pill 型（radius 100px）** + 白背景 + 細いグレーボーダー
- ブルーグレーの面色を段階的に使い、セクション間にコントラストをつける（`#f0f4f6` → `#d3dee4` → `#c5d3db`）
- letter-spacing はラベル系でのみ `0.04〜0.08em` を付け、本文は `normal`
- ヒーロー見出しは **weight 500**（Bold ではなく Medium）
- カードはフラット（影なし・ボーダーのみ）

### Don't（禁止）

- 純黒 `#000000` を本文に使わない（`#333333` を使う）
- palt を有効化しない（ITOKI サイトでは使用していない）
- pill ボタンに派手な背景色を使わない（白 + ボーダーが基本）
- コーラルレッド `#ea6359` を CTA ボタン色に転用しない（NEW バッジ専用）
- 影を多用しない（ボーダーと面色で階層を作る）
- line-height を 1.5 以下に詰めない（ITOKI の組版は 1.75〜1.8 が基調）
- ユーティリティバー（`#d3dee4`）をコンテンツ面色として広く使わない（ナビ・ヘッダー専用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ |
| Tablet | ≤ 1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- ヒーロー見出し: 60px → 32〜36px
- セクション見出し: 24px → 20px
- カード: 3〜4カラム → 1カラム積み
- ナビ: ハンバーガーメニューに切り替え
- pill ボタン padding: `0 40px` → `0 24px`

### タッチターゲット

- 最小 44px x 44px（WCAG 基準）

### ダークモード

- 該当なし。常時ライトモード

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff
Text Primary: #333333
Text Label: #48606a
Corporate Navy: #003349（見出し・ラベル）
Accent Coral: #ea6359（NEW バッジ）
Accent Red: #e63d30（アクティブインジケーター）
Surface Light: #f0f4f6（セクション背景）
Surface Blue-Grey: #d3dee4（ユーティリティバー）
Border: #cbd5da（CTA・カード）

Font: "Noto Sans JP", Helvetica, Arial, ヒラギノ角ゴ, 游ゴシック, メイリオ, sans-serif
Body: 16px / weight 400 / line-height 1.8 / letter-spacing normal
Section Heading: 24px / weight 700 / line-height 1.8 / color #003349
Hero Display: 60px / weight 500 / line-height 1.1 / letter-spacing 0.08em / color #ffffff

CTA: pill radius 100px / bg #ffffff / border 1px solid #cbd5da / 14px weight 700
Hero Button: radius 4px / bg #ffffff / border 1px solid #cbd5da / 16px weight 700
Category Tag: radius 4px / bg #ffffff / border 1px solid #b7c9d3 / 14px weight 400

Shadow: none（フラット基調）
palt: 使用しない
```

### プロンプト例

```
ITOKI のデザインに従って、ワークプレイスソリューション一覧ページを作成してください。
- 背景: #ffffff
- フォント: "Noto Sans JP", Helvetica, Arial, ヒラギノ角ゴ, 游ゴシック, メイリオ, sans-serif
- palt は使用しない（font-feature-settings: normal）
- 本文: 16px / weight 400 / line-height 1.8 / color #333333 / letter-spacing normal
- セクション見出し: 24px / weight 700 / line-height 1.8 / color #003349
- セクションラベル: 14px / weight 400 / letter-spacing 0.06em / color #48606a
- セクション背景: 交互に #ffffff と #f0f4f6 を使い分ける
- CTA ボタン: bg #ffffff / border 1px solid #cbd5da / radius 100px / padding 0 40px / 14px / weight 700
- カード: bg #ffffff / border 1px solid #cbd5da / radius 0px / shadow none
- ユーティリティバー: bg #d3dee4 / text #003349 / 11px / weight 700
- Spacing は 8px ベース（8/16/24/32/48/64/80）
- 影は使わず、ボーダーと面色で階層を作る
- NEW バッジ: bg #ea6359 / text #ffffff / radius 4px
```
