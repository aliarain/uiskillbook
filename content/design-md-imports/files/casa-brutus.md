# DESIGN.md — Casa BRUTUS（カーサ ブルータス）

> マガジンハウス『Casa BRUTUS』Web 版（https://casabrutus.com/）のデザイン仕様書。
> 1998年創刊、建築・デザイン・暮らし・カルチャーを扱う日本を代表する建築・デザイン誌の Web 版。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景 `#ffffff` × 純黒文字 `#000000` のシャープなコントラスト。**Helvetica Neue + ヒラギノ角ゴ ProN** の欧文先頭スタックで、雑誌特有のニュートラルでフラットな世界観を構築
- **密度**: 情報密度は高め。建築・デザイン・暮らしの記事サムネイルを大胆な大判画像で並べる**雑誌グリッド型レイアウト**
- **キーワード**: 純白 + 漆黒、ノーマル字間（letter-spacing normal）、square CTA（border-radius 0px）、Helvetica Neue 欧文先頭、ヒラギノ ProN（Pro ではない点に注意）、line-height 1.5、雑誌的タイポグラフィ
- **特徴**:
  - **欧文先頭フォントスタック** — 和文サイトとしては珍しく `"Helvetica Neue", helvetica, "Hiragino Kaku Gothic ProN", "Yu Gothic", ui-sans-serif, system-ui, sans-serif` の順。欧文グリフは Helvetica Neue で出し、和文は ProN（ProN は ProN：JIS2004 字形対応）
  - **CTA は完全な角型（border-radius: 0px）** — Read More / 自分の星座をみる / 会員登録 / 登録する いずれも「白地 + 黒 1px 細罫線」で、`min-width: 256px` 、padding 8px、font-size 20px の outline ボタン。Suntory が pill 型なのに対し Casa BRUTUS は**完全な square**で雑誌らしさを出す
  - **palt 不使用 / letter-spacing normal** — 字間は normal、Web フォント前提機能を使わず素のシステムフォントで構成
  - **line-height 1.5** — 本文 16px / 24px、見出し 24px / 36px と統一比率
  - **見出しは 700 weight の太字** — h2 24px / h3 20px / h4 16px すべて weight 700。本文（400）との明確なコントラスト
  - **大型 h2（48px / 72px line-height）** が「Topics 注目コンテンツ」など雑誌的な大判タイトルに使用される
  - **PR バッジ** — `#000000` 背景に `#ffffff` 文字、letter-spacing 0.3px の小さな PR ピル（12px / 18px / weight 700）
  - **記事カテゴリラベル** — DESIGN / FASHION / ARCHITECTURE などを 24px / weight 400 で大きく表示するのが雑誌らしい

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **Casa Black** (`#000000`): 本文・見出し・CTA 罫線・PR バッジ背景。**純黒を使う**点が雑誌らしい
- **Casa White** (`#ffffff`): ページ背景・CTA 背景・暗色帯上の文字色
- **Inverse Text** (`#ffffff`): 黒帯セクション・PR バッジ上のテキスト

### Surface（背景）

- **Page White** (`#ffffff`): ページ標準背景
- **Soft Cream** (`#f9e0cc`): 連載・特集系のフィーチャーカード背景（淡いベージュ）
- **Soft Sky** (`#e7f4f9`): 占い・お告げコーナー等のアクセント面（淡い水色）
- **Modal Veil** (`rgba(0, 0, 0, 0.5)`): モーダル・動画オーバーレイの暗幕

### Accent / Promotional（誌面アクセント）

雑誌らしく特集や提携モジュールごとに**鮮やかなアクセント色**を散りばめる：

- **Promo Pink** (`#dc3b89`): キャンペーン・プロモアクセント
- **Promo Red** (`#ff3434`): 緊急告知・新着強調
- **Social Blue** (`#1877f2`): SNS シェアボタン（Facebook 系）

### Border / CTA

- **CTA Border** (`#000000`): outline CTA の 1px 細罫線
- **Hairline** (`rgba(0, 0, 0, 0.1)`): セクション区切り

> **Note**: Casa BRUTUS の本体は **「純白 + 純黒 + わずかなアクセント面色」** の極めて抑制された配色。彩度の高い色は記事カバー画像と特集ロゴに任せ、UI は黒白で構成する**ハイコントラスト・ミニマル**の戦略。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（システムスタック / 欧文先頭）**:
- ヒラギノ角ゴ **ProN**（macOS。**Pro ではなく ProN**：JIS2004 対応の最新字形）
- Yu Gothic（macOS / Windows 10+）
- ui-sans-serif（OS の UI フォント）
- system-ui（ブラウザの UI フォント）

### 3.2 欧文フォント

- **Helvetica Neue**（最優先。macOS 内蔵）
- **helvetica**（小文字。一般的な Helvetica）
- ui-sans-serif / system-ui / sans-serif（フォールバック）
- 絵文字: Apple Color Emoji / Segoe UI Emoji / Segoe UI Symbol / Noto Color Emoji

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: "Helvetica Neue", helvetica, "Hiragino Kaku Gothic ProN", "Yu Gothic",
             ui-sans-serif, system-ui, sans-serif,
             "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

**フォールバックの考え方**:
- **欧文先頭スタック** — 欧文グリフは Helvetica Neue で出力、和文部分は自動的にヒラギノ ProN にフォールバック
- **ProN を使う点に注意** — Pro（旧字形）ではなく ProN（JIS2004 新字形）。BRUTUS（同じマガジンハウス）と異なり ProN を選択
- **Webフォント不使用** — Adobe Fonts や Google Fonts は読み込まず、OS フォントのみで構成。ページが軽い

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|--------|-------------|----------------|------|
| Hero h2 (Topics) | 48px | 700 | 72px (1.5) | normal | 「Topics 注目コンテンツ」等の大判セクション見出し |
| h2 (記事タイトル) | 24px | 700 | 36px (1.5) | normal | フィーチャー記事タイトル・「About Casa BRUTUS」 |
| h3 (カード) | 20px | 700 | 30px (1.5) | normal | カード見出し（〈SHOKKI〉等） |
| h3 (small card) | 16px | 700 | 24px (1.5) | normal | 関連記事の小カード見出し |
| h4 (連載タイトル) | 16px | 700 | 40px (2.5) | normal | 『LISTENING ROOM 音のいい部屋。』等の連載名（暗色帯上） |
| Body (大) | 16px | 400 | 24px (1.5) | normal | 本文・登録案内 |
| Body (小) | 14px | 400 | 21px (1.5) | normal | 記事リード・補足本文 |
| Note | 12px | 300 | 18px (1.5) | normal | プライバシー注記等の薄字 |
| Tag (DESIGN) | 24px | 400 | 36px (1.5) | normal | 雑誌的に大きめのカテゴリタグ |
| Caption / Tag | 16px | 400 | 24px (1.5) | normal | カードのキャプション |
| PR Badge | 12px | 700 | 18px (1.5) | 0.3px | 「PR」バッジ（黒地 + 白文字） |

### 3.5 行間・字間

- **本文 line-height**: `1.5` で統一（24px / 16px = 1.5）
- **大見出し line-height**: 同じく `1.5`（72px / 48px = 1.5、36px / 24px = 1.5）
- **連載タイトル line-height**: `2.5`（40px / 16px、暗色帯上で余白を取る）
- **letter-spacing**: ほぼすべて `normal`。例外は PR バッジの `0.3px` のみ
- **本文の字間調整は基本しない** — 雑誌らしい素のタイポグラフィ

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — `word-break: keep-all` 等は指定しない
- 大判画像と組み合わせるため、テキストブロックは比較的短い

### 3.7 OpenType機能

- **`font-feature-settings: normal`** — palt や kern を使わない。OS フォントのデフォルト組版そのまま
- 欧文先頭スタックなので、欧文部分は Helvetica Neue の自然な字組

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA (Outline Square)
- 背景: `#ffffff`
- 罫線: `1px solid #000000`
- 文字色: `#000000`
- font-weight: 400
- font-size: 20px（モバイルは 16px）
- min-width: 256px
- text-align: center
- border-radius: **0px（完全な角型）**
- padding: `8px`（縦横とも 0.5rem = 8px、Tailwind p-2.5 の md:text-xl 設定）
- 用途: 「Read More」「自分の星座をみる」「会員登録」「登録する」など全 CTA

#### Disabled
- `disabled:opacity-20 disabled:cursor-not-allowed` — 透過 20% でグレーアウト

### Tags / Category Labels

- font-size: 24px
- font-weight: 400
- line-height: 36px (1.5)
- color: `#000000`
- 背景: 透過
- 装飾なし、テキストのみで大きく表示する雑誌スタイル
- 用途: 「DESIGN」「ARCHITECTURE」「FASHION」「FOOD」等のジャンル

### PR Badge

- 背景: `#000000`
- 文字色: `#ffffff`
- font-size: 12px
- font-weight: 700
- line-height: 18px (1.5)
- letter-spacing: 0.3px
- padding: 2px 8px 程度の小さなピル
- 用途: 提携記事・広告タイアップを示す「PR」バッジ

### Cards

- 背景: `#ffffff`
- 罫線: なし、または極薄 `rgba(0, 0, 0, 0.1)`
- 影: なし（フラット）
- 角丸: 0px
- 大判画像が中心。テキストは下に配置
- 用途: 記事カード、特集カード

### Article (記事ページ)

- 本文 font-size: 16px / weight 400 / line-height 24px (1.5)
- 段落間余白: 大きめ（16〜24px）
- 行間 1.5 で雑誌的なタイトな組み

---

## 5. Layout Principles

- **コンテンツ幅**: 1200px〜1280px のラージコンテナ
- **ヒーロー**: 全幅画像 + 大型タイポ（h2 48px）「Topics 注目コンテンツ」のような雑誌見出し
- **大判サムネイル**: 各記事カードに大きなビジュアルを使い、写真が主役の雑誌的構成
- **3 列グリッド**: 「特集」「連載」「Topics」を 3 列カードで並べる
- **暗色帯セクション**: 動画連載モジュールなどに `#000000` の暗幕を使い、白文字で重厚感を出す
- **CTA は中央寄せ・大型**: min-width 256px の堂々とした配置

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**フラットデザインを徹底**
- **段階表現**: 影ではなく**面色の差（#ffffff vs #f9e0cc / #e7f4f9）** や**1px 罫線（#000000 細罫線）** で奥行きを作る
- **画像は段差なし** — 写真の枠も罫線も使わず、ベタッと面で並べる雑誌的レイアウト

---

## 7. Do's and Don'ts

### Do's

- **CTA は完全な角型（border-radius: 0px）** + 白地 + 黒 1px 細罫線
- **欧文先頭フォントスタック** — `"Helvetica Neue", helvetica, "Hiragino Kaku Gothic ProN"...`
- **letter-spacing は normal** — 字間調整しない雑誌的素組み
- **line-height 1.5** に統一する
- **ProN を使う**（Pro ではない）— JIS2004 新字形
- **見出しは 700 weight、本文は 400 weight** で太さの階段を作る
- **写真を主役にする** — UI は黒白で抑え、コンテンツの色は画像に委ねる
- **PR バッジには黒地 + 白文字 + 0.3px letter-spacing**

### Don'ts

- **CTA を pill 型（border-radius 30px+）にしない** — Casa BRUTUS は完全角型
- **letter-spacing を強く効かせない** — 雑誌は素組みが基本
- **濃い影や強いグラデーションを使わない**（フラット主義）
- **和文先頭スタックにしない** — Casa BRUTUS は欧文先頭が特徴
- **ProN ではなく Pro を指定しない** — 新字形の ProN を使う
- **彩度の高いブランドカラーを UI に多用しない** — 色は記事画像に任せる

---

## 8. Responsive Behavior

- デスクトップ: マルチカラム（3 列のカードグリッド）、CTA は 20px / md:text-xl
- タブレット (768〜1024px): 2 列に折り畳み、CTA は 16〜20px
- モバイル (〜767px): 1 列、CTA は 16px（`md:` プレフィックス前のデフォルト）
- min-width: 256px の CTA は画面幅が狭い場合は中央配置のままサイズを保つ
- ハンバーガー OPEN ボタン（半透過白 `oklab(0.999994 0.0000455678 0.0000200868 / 0.9)` ＝ ほぼ #ffffff）でメニューを開く

---

## 9. Agent Prompt Guide

Casa BRUTUS らしい UI を生成するときは以下を伝えるとよい：

```
- font-family: "Helvetica Neue", helvetica, "Hiragino Kaku Gothic ProN", "Yu Gothic", ui-sans-serif, system-ui, sans-serif
- 本文 line-height: 1.5（24px / 16px）、見出しも 1.5（36px / 24px）
- letter-spacing: normal（PR バッジのみ 0.3px）
- ブランドカラー: #000000 (Casa Black) と #ffffff (Casa White) のみ
- アクセント面色: #f9e0cc (cream) / #e7f4f9 (sky) を必要に応じて
- CTA: 白地 + 黒 1px 細罫線、border-radius 0px（完全角型）、min-width 256px、padding 8px、font-size 20px、weight 400
- PR バッジ: 黒地 + 白文字、12px / weight 700 / letter-spacing 0.3px
- 影なし（フラットデザイン）
- カテゴリタグは 24px / weight 400 で大きく表示する雑誌スタイル
- Webフォント不使用（OS の Helvetica Neue + ヒラギノ ProN で構成）
- 写真を主役に — UI 色は抑え、画像で誌面を彩る
```
