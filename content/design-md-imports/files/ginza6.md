# DESIGN.md — GINZA SIX（銀座シックス）

> GINZA SIX 公式サイト（https://ginza6.tokyo/）のデザイン仕様書。
> 銀座エリア最大の商業施設、原研哉率いる日本デザインセンターのアートディレクションを擁するラグジュアリー・コマーシャル・コンプレックス。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 「銀座のラグジュアリー」を象徴する**ゴールド × ホワイトの 2 色基調**。装飾を排した直線的なグリッドと、鋭角の矩形（角丸 0px）で構成される、紙面を思わせる静謐な編集デザイン
- **密度**: 情報密度は中程度。各セクションが大きな画像 + 短いコピーで構成され、ホワイトスペースを贅沢に取る
- **キーワード**: ゴールド、銀座、ラグジュアリー、矩形、Univers、編集、洗練
- **特徴**: **CTA も含めて全要素 border-radius: 0px**（角丸なしの鋭い矩形）。**欧文に Univers Next W01 Medium**（Linotype/Adobe）を本文・見出し共通で使用。和文フォールバックは Morisawa の **中ゴシック BBB**。文字色は純黒ではなく `#555555` のソフトグレーが標準

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **GINZA SIX Gold** (`#a9894a`): **唯一無二のブランドアクセント**。ロゴ、CTA 塗り、メインタイトル、フッター背景、言語スイッチャー、タグなど、ゴールド一色でブランディングされる
- **Gold Dark** (`#987b42`): 「Info」バッジなど、わずかに濃い陰影色

### Text

- **Text Primary** (`#555555`): **本文・見出しの基本色**（**純黒 `#000000` は使わない**）。柔らかいグレーで紙面のような落ち着き
- **Text Gold** (`#a9894a`): h1 / h2 のメインタイトル
- **Text Dark** (`#333333`): info ページの記事本文
- **Text on Dark** (`#ffffff`): フッター・ゴールド帯の上の白文字

### Surface（面色）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface Cream** (`#fbf8f0`): フロアガイド等の薄いクリーム面（フェードに使う）
- **Surface Gold** (`#a9894a`): フッター背景・ゴールドボタン背景
- **Surface Dark Gray** (`#555555`): セクションヘッダーやアクセント面

### CTA / Button

- **CTA Gold Solid**: 背景 `#a9894a` / 文字 `#ffffff` / **border 2px solid #a9894a** / **radius 0px**
- **CTA Gold Inverse**: 背景 `#ffffff` / 文字 `#a9894a` / **下線アンダーライン** / **radius 0px**

> **Note**: GINZA SIX の UI は **「ゴールド（#a9894a）と純白の対比」だけでブランディング**を成立させる。**第二・第三のアクセント色を使わない**ストイックなパレットで、銀座らしい「品格」を演出する。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（フォールバック）**:
- **中ゴシック BBB**（Morisawa、和文の最終フォールバック先）
- macOS / Windows のシステム和文フォントは指定されず、**`中ゴシックBBB` がそのまま機能**

**TypeSquare 経由で Web フォント配信**: GINZA SIX は Morisawa の `typesquare_tags` 系クラス指定でフォントを呼び出す

### 3.2 欧文フォント

- **Univers Next W01 Medium**（Linotype Univers Next の中字 — モダニズムを代表する Adrian Frutiger の sans-serif）
- 和文より先に指定し、英数字グリフを Univers が担当
- フォールバック: Roboto

### 3.3 font-family 指定

```css
/* 全 UI 共通（body から CTA まで一貫） */
font-family: "Univers Next W01 Medium", Roboto, 中ゴシックBBB, sans-serif;
```

**フォールバックの考え方**:
- **欧文 Univers Next W01 Medium が先頭**（英数字を担当）
- 続けて Roboto（Universがない場合の代替欧文）
- 和文は **中ゴシックBBB** にフォールバック（OS 内蔵フォントを経由しない）
- Univers Next W01 Medium は Linotype/Adobe ライセンスのため**ローカル環境では表示されない**。フォールバックの 中ゴシックBBB or Roboto に直接落ちるので、**ローカルでの再現には Google Fonts の Inter / Roboto などで代替**する

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | 用途 |
|------|------|------|--------|-------------|------|
| Section Title XL | Univers Next W01 Medium | 45px | 400 | 72px (1.6) | ヒーロー大見出し（`#ffffff` or `#a9894a`、letter-spacing 2.25px） |
| Section Title L | Univers Next W01 Medium | 40px | 400 | 64px (1.6) | コーナーヘッド（`#a9894a`） |
| Logo / h1 | Univers Next W01 Medium | 36px | 400 | 57.6px (1.6) | サイトロゴ（`#a9894a`） |
| h1 (header) | Univers Next W01 Medium | 30px | 400 | 48px (1.6) | ヘッダー内ロゴ |
| h3 / Hero Sub | Univers Next W01 Medium | 30px | 400 | 48px (1.6) | ヒーローサブタイトル |
| h2 (footer) | Univers Next W01 Medium | 22px | 400 | 35.2px (1.6) | フッター見出し（letter-spacing 0.08px） |
| h4 | Univers Next W01 Medium | 16px | 400 | 25.6px (1.6) | カードタイトル |
| Body / a | Univers Next W01 Medium | 14px | 400 | 22.4px (1.6) / 25.2px (1.8) | 本文・ナビ |
| Sub Caption | Univers Next W01 Medium | 13px | 400 | 20.8px (1.6) | カード補足 |
| Mini | Univers Next W01 Medium | 12px | 400 | 19.2–21.6px (1.6–1.8) | 注釈 |
| Accent (gold p) | Univers Next W01 Medium | 11px | 400 | 19.8px (1.8) | 日付・ゴールドアクセント |

### 3.5 行間・字間

- **本文 line-height は一律 1.6** — 紙面のように均質
- **大見出しの letter-spacing 2.25px**（45px 見出しで約 0.05em）— ラグジュアリー感を演出
- **本文の letter-spacing は normal** か **0.08px**（極小）

### 3.6 禁則処理・改行ルール

- デフォルト挙動を尊重
- 短いコピーで構成され、本文段落は最小限

### 3.7 OpenType機能

- **`font-feature-settings: normal`**: TypeSquare 経由のため OpenType 機能は明示しない
- **letter-spacing による物理字間**で組版を整える

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA (Gold Solid Square)
- 背景: `#a9894a`
- 罫線: `2px solid #a9894a`
- 文字色: `#ffffff`
- font-weight: 400
- font-size: 14px / line-height 16.8px
- letter-spacing: normal
- border-radius: **0px（角丸なし）**
- padding: `7px 60px 7px 40px`（右側に矢印用余白）
- 用途: 「View All」「Floor Map」など

#### Inverse CTA (Gold Underline)
- 背景: `#ffffff`
- 文字色: `#a9894a`
- font-weight: 400
- font-size: 14px / line-height 22.4px
- text-decoration: underline（または bottom border）
- border-radius: **0px**
- 用途: 「全て」など補助 CTA

### Cards

- 背景: `#ffffff`
- 罫線: なし
- 影: なし（フラット）
- 角丸: **0px（矩形）**
- 画像 + h4 タイトル + 13px サブテキストの編集レイアウト

### Tags / Date Stamps

- 背景: `#a9894a` または `#fbf8f0`
- 文字色: `#ffffff` または `#a9894a`
- font-size: 11–12px
- border-radius: 0px

### Navigation

- 言語スイッチャー (`日本語 / English / 简体中文 / 繁體中文`): `#a9894a` 塗り背景にホバーで反転
- グローバルナビ: ホワイト背景、テキストリンクは `#555555`

### Footer

- 背景: `#a9894a`（ゴールド）
- 文字色: `#ffffff`
- font-weight: 700（強調テキスト）
- letter-spacing: 0.08px

---

## 5. Layout Principles

- **コンテンツ幅**: 1280px のフルワイドレイアウト
- **グリッド**: 縦長カードを 2〜3 列で配置（フロアガイド・店舗カード）
- **ホワイトスペース**: 大きく取る（紙の編集デザインを踏襲）
- **画像**: 高解像度のフルブリードを多用、トリミングはセンター揃え
- **ヒーロー**: ハイクオリティな写真 + ゴールド or 白の大型タイポ
- **セクション間余白**: 縦に大きく取り、圧迫感を回避

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` を徹底（フラットデザイン）
- **段階表現**: 影ではなく**面色とゴールド罫線**で奥行きを作る
- **ボーダー**: ゴールドの **2px ボーダー**で要素を区切る（CTA・カード）

---

## 7. Do's and Don'ts

### Do's

- **角丸 0px の鋭い矩形**ですべての UI を構成する
- **ゴールド `#a9894a` を主役**にして、白とゴールド 2 色のコントラストを作る
- **本文色は #555555** のソフトグレー（純黒は使わない）
- **letter-spacing 2.25px** を大見出しに適用してラグジュアリー感を出す
- **Univers Next（または近似 sans-serif）と中ゴシックBBBの組合せ**を使う
- **フッターはゴールド塗り**で締める

### Don'ts

- **角丸（border-radius）を入れない** — pill 型 CTA は GINZA SIX の文脈に合わない
- **影や強いグラデーションを使わない**（フラット主義）
- **第二アクセント色を増やさない** — ゴールドのみで完結させる
- **本文色を純黒（#000000）にしない** — 灰みの #555555 で柔らかく
- **行間を詰めない** — line-height 1.6 を全要素で確保

---

## 8. Responsive Behavior

- デスクトップ: 2〜3 列カードグリッド、1280px 幅
- タブレット (768〜1024px): 2 列に折り畳み
- モバイル (〜767px): 1 列、ヒーローは縦長クロップ
- ナビは `sp_hide` クラス制御でハンバーガーメニューに切替
- フォントサイズは固定 px

---

## 9. Agent Prompt Guide

GINZA SIX らしい UI を生成するときは以下を伝えるとよい：

```
- font-family: "Univers Next W01 Medium", Roboto, 中ゴシックBBB, sans-serif（ローカル代替: Inter / Roboto）
- 本文 line-height: 1.6（全要素一律）
- 大見出しの letter-spacing: 2.25px（約 0.05em）
- ブランドカラー: #a9894a（GINZA SIX Gold）— ゴールド一色のシングルアクセント
- ベース: #ffffff、サブ面: #fbf8f0（薄いクリーム）
- テキスト: #555555 のソフトグレー（純黒禁止）
- CTA: 角丸 0px の矩形 — Gold Solid（背景 #a9894a / 文字 #ffffff）または Gold Underline（背景 #ffffff / 文字 #a9894a）
- 影なし（フラットデザイン）
- フッター: ゴールド背景（#a9894a）+ 白文字
- 銀座のラグジュアリー — 紙面のような編集レイアウト、ホワイトスペース、鋭角矩形
```
