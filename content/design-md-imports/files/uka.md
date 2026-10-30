# DESIGN.md — uka（ウカ）

> uka（https://www.uka.co.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 東京・恵比寿発のトータルビューティーブランド。ヘアケア、ネイルケア、スカルプケア、フレグランスを展開し、サロン事業も運営。**デュアルフォントシステム（Zen Kaku Gothic New + Instrument Sans）** で、和文の柔らかさと欧文のモダンさを共存させる。白とチャコールグレー（#333）を基調とした、静かで洗練された世界観。大きなステートメントテキストとゆったりした余白が「うれしくって、うつくしいほうへ」というブランド哲学を体現する
- **密度**: ゆったりとしたブランドサイト型。ステートメント、製品カルーセル、ニュースが縦に並ぶシンプルな構成。テキスト量は最小限で、余白が多い
- **キーワード**: ビューティー、Zen Kaku Gothic New、Instrument Sans、チャコールグレー #333、palt グローバル、サロン、東京
- **特徴**: **Zen Kaku Gothic New**（Google Fonts）を和文メインに採用する珍しい選択。ゴシック体だが「Zen」の名の通り角が柔らかく、ビューティーブランドに合う温かみがある。英語見出しには **Instrument Sans** を使い、欧文だけモダン・幾何学的な印象に切り替える。CSS Custom Properties で `--primary-color: #333333` が定義され、テーマカラーとして一貫使用される

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

uka のカラーパレットは**チャコールグレーと白の二色構成**。ブランドカラーは `--primary-color: #333333`。

- **Charcoal** (`#333333`): ブランドカラー。通知バー背景・フッター・テキスト（`--primary-color`, `--color-black`, `--theme-color`）
- **Charcoal Heavy** (`#414c55`): より深いチャコール（`--primaryHeavy-color`）— 限定的に使用

### Sub Colors

- **Slate** (`#5d6d7a`): サブカラー・ペール（`--primaryPale-color`）
- **Light Slate** (`#92a7b6`): ライトアクセント（`--primaryLight-color`）
- **Navy** (`#2a3650`): ダークアクセント（rgb 42, 54, 80 — 非常に限定的）

### Text & Neutral

- **Text Primary** (`#333333`): メインテキスト（rgb 51, 51, 51）— `--color-black` と同じ
- **Text Body** (`#454545`): 本文・リンクテキスト（rgb 69, 69, 69）
- **Text Secondary** (`#7b7b7b`): 補足テキスト・サブタイトル（`--color-gray`）
- **Text Dark** (`#676a71`): ダークグレー（`--color-gray-dark`）— プロダクトナビ背景にも使用
- **Text on Dark** (`#ffffff`): ダーク背景上の白テキスト

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Light** (`#f1f2f4`): セカンダリ背景面（rgb 241, 242, 244 — わずかに青みがかったグレー）
- **Surface Gray Light** (`#ededf1`): カード背景等（`--color-gray-light`）
- **Surface Dark** (`#333333`): 通知バー・フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **Zen Kaku Gothic New**: メイン和文フォント（Google Fonts）。角ゴシックだが字形が柔らかく、ビューティーブランドの温かみに適合。すべての本文・ナビ・ボタン・カードに使用

> **補足**: Zen Kaku Gothic New は Morisawa 系のフォントで、Noto Sans JP より字形に丸みがある。uka が「うれしくって、うつくしいほうへ」というブランドメッセージに合わせて選んだと考えられる

### 3.2 欧文フォント

- **Instrument Sans**: 英語見出し・セクションタイトル専用（Google Fonts）。幾何学的でモダンなサンセリフ。h1「Lineup」、h2「Products」、h3「Our Philosophy」等に使用

> **補足**: Instrument Sans は小さなサイズでも高い可読性を持つ Variable Font。uka では見出しの英語テキスト専用に使い、和文とは明確にフォントを分ける

### 3.3 font-family 指定

```css
/* 本文・ナビ・ボタン（和文 + 汎用） */
font-family: "Zen Kaku Gothic New", sans-serif;

/* 英語見出し・セクションタイトル */
font-family: "Instrument Sans", sans-serif;
```

**フォールバックの考え方**:
- 和文（Zen Kaku Gothic New）と欧文見出し（Instrument Sans）を **完全に分離**
- フォールバックは sans-serif のみでシンプル。Google Fonts の Web フォントを前提とした設計
- Instrument Sans は英語テキスト専用。和文テキストには適用しない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h1) | Instrument Sans | 50px | 400 | 1.28 (64px) | 0.1em (5px) | "Lineup" 等の英語セクション見出し / #333 |
| Heading 2 | Instrument Sans | 28px | 400 | 1.5 (42px) | 0.1em (2.8px) | "Products" 等の英語サブ見出し / #333 |
| Heading 3 EN | Instrument Sans | 30px | 400 | 1.0 (30px) | 0.04em (1.2px) | "Our Philosophy" カード見出し / #333 |
| Heading 3 Service | Instrument Sans | 19.2px | 400 | 1.1 (21.1px) | 0.18em (3.46px) | "Salon" サービスカード / 白テキスト |
| Heading 3 JP | Zen Kaku Gothic New | 16px | 500 | 1.45 (23.2px) | 0.025em (0.4px) | 製品名（スカルプブラシ ケンザン）/ #333 |
| Heading 3 News | Zen Kaku Gothic New | 16px | 400 | 1.65 (26.4px) | 0.025em (0.4px) | ニュース記事タイトル / #333 |
| Link Card Title | Zen Kaku Gothic New | 20px | 500 | 1.6 (32px) | 0.025em (0.4px) | "Global Presence" 等 / #333 |
| Body | Zen Kaku Gothic New | 16px | 400 | 1.6 (25.6px) | 0.025em (0.4px) | 標準本文 / #333 |
| Statement | Zen Kaku Gothic New | 18px | 400 | 2.0 (36px) | normal | ブランドステートメント / #333（広い行間） |
| Card Description | Zen Kaku Gothic New | 16px | 400 | 2.4 (38.4px) | normal | 哲学セクション説明文（最も広い行間） |
| Subtitle | Zen Kaku Gothic New | 14px | 500 | 1.5 (21px) | 0.025em (0.4px) | 製品サブタイトル / #7b7b7b |
| Subtitle Small | Zen Kaku Gothic New | 14px | 400 | 1.5 (21px) | 0.025em (0.4px) | カードサブタイトル / #333 |
| Banner EN | Instrument Sans | 20px | 400 | 1.5 (30px) | 0.18em (3.6px) | "Gift" 等のバナーテキスト / 白テキスト |
| Notification | Zen Kaku Gothic New | 16px | 400 | 1.65 (26.4px) | 0.025em (0.4px) | 通知バー / 白テキスト on #333 |

### 3.5 行間・字間

- **標準本文の行間**: `line-height: 1.6`（25.6px / 16px）
- **ステートメントの行間**: `line-height: 2.0`（36px / 18px）— ブランド哲学のための広い行間
- **哲学セクションの行間**: `line-height: 2.4`（38.4px / 16px）— 最も広い。静寂と余韻を表現
- **英語見出しの行間**: `line-height: 1.0–1.28`（Display 系は詰める）
- **和文の字間**: `letter-spacing: 0.025em`（0.4px @ 16px）— 控えめだが確実に設定
- **英語見出しの字間**: `letter-spacing: 0.1em`（5px @ 50px）— ワイドスペーシング
- **ステートメント・説明文の字間**: `letter-spacing: normal`（長文は字間なし）

**ガイドライン**:
- 和文テキストは letter-spacing: 0.025em が基本。長文（ステートメント・説明文）のみ normal に戻す
- 英語見出しは letter-spacing 0.04–0.18em と広め
- line-height が **1.6 → 2.0 → 2.4** と段階的に広がるのが uka の特徴。ブランド哲学に近いテキストほど行間が広い

### 3.6 OpenType 機能

```css
font-feature-settings: "palt"; /* プロポーショナル字詰め — グローバル適用 */
```

- **`palt`**: body レベルでグローバルに適用。Zen Kaku Gothic New のメトリクスと組み合わせて使用
- letter-spacing 0.025em との併用で、文字ごとに微調整された字間を実現

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）
- Nuxt.js ベースの SPA サイト

---

## 4. Component Stylings

### Buttons

**Category Card（"ヘアケア" "ネイルカラー" 等）**

uka のカテゴリカードは**ボタン風のカード**。

- Background: transparent
- Text: `#454545`
- Border: 0px（ボーダーなし）
- Border Radius: **8px**（角丸カード）
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: 0.025em (0.4px)

**News Card**

- Background: `#ffffff`
- Text: `#454545`
- Border Radius: 0px
- Font Size: 16px

**Header Icon Button**

- Background: transparent
- Text: `#333333`
- Font Size: 16px
- Font Weight: 400

**ボタンの考え方**:
- uka は明示的な「CTA ボタン」が控えめ。カテゴリカード（radius 8px）とニュースカード（radius 0px）でナビゲーションを構成
- ボタンよりも**カード型のクリッカブル要素**が主体
- ダーク背景上の CTA は限定的

### Cards

**Category Card**

- Border Radius: **8px**（uka の中で最も角丸が大きい要素）
- Background: transparent（写真の上に配置）
- Text: `#454545`

**News Card**

- Background: `#ffffff`
- Border Radius: 0px
- Shadow: なし
- 日付 + カテゴリ + タイトルの構成

**Product Card**

- 製品名（16px / 500）+ サブタイトル（14px / 500 / #7b7b7b）
- 写真主導のレイアウト

**Philosophy Card**

- タイトル（30px / Instrument Sans）+ サブタイトル（14px / Zen Kaku Gothic New）+ 説明文（16px / lh 2.4）

### Section Backgrounds

- Default: `#ffffff`
- Lineup / Philosophy / Credibility: `#f1f2f4`（ライトブルーグレー）
- Notification bar: `#333333`
- Footer: `#333333`（白テキスト）
- Product nav: `#676a71`

---

## 5. Layout Principles

### Container

- 白背景にコンテンツを中央寄せ
- セクション単位で背景色を切り替え（白 ↔ #f1f2f4）
- 通知バーとフッターがダーク（#333）で挟む構成

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 0.4px | 標準 letter-spacing |
| S | 8px | カテゴリカード radius |
| M | 16px | 基本テキストサイズ |
| L | 24px | 基本 line-height |
| XL | 64px | Display line-height |

### Grid

- カテゴリカードは横スクロールカルーセル
- ニュースカードはグリッドレイアウト

---

## 6. Depth & Elevation

uka はシャドウを使用しない。白（#fff）/ ライトブルーグレー（#f1f2f4）/ チャコール（#333）の面切り替えで空間を構成。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |
| 1 | background `#ffffff` | 通常面 |
| 2 | background `#f1f2f4` | セカンダリ面（ライトブルーグレー） |
| 3 | background `#676a71` | プロダクトナビ面 |
| 4 | background `#333333` | ダーク面（通知バー・フッター） |

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文は **Zen Kaku Gothic New** を使用する
- 英語見出しは **Instrument Sans** を使用する（和文には適用しない）
- `font-feature-settings: "palt"` をグローバルに適用する
- 和文テキストの letter-spacing は **0.025em** にする
- 長文（ステートメント・説明文）は letter-spacing を **normal** に戻す
- ブランドステートメントは **18px / line-height 2.0** で広い行間にする
- 哲学セクションの説明文は **line-height 2.4** でさらに広げる
- テキストの色は **#333333** をベースにする（`--primary-color`）
- カテゴリカードは **radius 8px** にする
- セカンダリ背景は **#f1f2f4**（ライトブルーグレー）を使う

### Don't（禁止）

- 和文テキストに Instrument Sans を使わない（英語見出し専用）
- 純黒 `#000000` をテキストに使わない（`#333333` が標準）
- pill ボタン（radius 9999px）を使わない
- 鮮やかなアクセントカラーを使わない（チャコールグレーのモノトーンを保つ）
- シャドウ（box-shadow）を使わない
- ステートメントや説明文で line-height を 1.6 未満にしない
- palt を無効にしない（グローバル適用が前提）
- 本文テキストを太く（700）しない（400–500 が標準）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Display（50px）→ 縮小
- カテゴリカードカルーセルはスワイプ対応
- ニュースカードは 1 カラムに
- ステートメントの line-height 2.0 は維持

### タッチターゲット

- カテゴリカードは radius 8px で十分なタップ領域
- ヘッダーアイコンボタンはタップ領域の追加が必要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: uka（ウカ）
Origin: 東京・恵比寿発トータルビューティーブランド
Charcoal: #333333 (--primary-color)
Text Primary: #333333
Text Body: #454545
Text Secondary: #7b7b7b
Surface Light: #f1f2f4
Background: #ffffff
Footer/Notification: #333333

JP Font: "Zen Kaku Gothic New", sans-serif
EN Font: "Instrument Sans", sans-serif

palt: グローバル適用（font-feature-settings: "palt"）
Body: 16px / 400 / line-height 1.6 / letter-spacing 0.025em / color #333
Statement: 18px / 400 / line-height 2.0 / letter-spacing normal / color #333
Display (EN): 50px / 400 / line-height 1.28 / letter-spacing 0.1em / Instrument Sans
H2 (EN): 28px / 400 / line-height 1.5 / letter-spacing 0.1em / Instrument Sans
Category Card: radius 8px
Shadow: 使用しない
```

### プロンプト例

```
uka のデザインシステムに従って、製品紹介ページを作成してください。
- 和文は "Zen Kaku Gothic New", sans-serif
- 英語見出しは "Instrument Sans", sans-serif
- font-feature-settings: "palt" をグローバルに適用
- セクション見出し（英語）は 50px / 400 / line-height 1.28 / letter-spacing 0.1em / Instrument Sans
- 本文は 16px / 400 / line-height 1.6 / letter-spacing 0.025em / color #333
- ブランドステートメントは 18px / line-height 2.0（広い行間）
- 背景は白 #ffffff、セカンダリ面は #f1f2f4
- カテゴリカードは radius 8px
- テーマカラーは #333333（チャコールグレー）
- シャドウは一切使わない
```

### デザインの重要ポイント

1. **Zen Kaku Gothic New**: Morisawa 系の角ゴシックだが字形が柔らかい。ビューティーブランドの温かみに最適。Noto Sans JP では得られない「品のある丸み」がある
2. **Instrument Sans**: 英語見出し専用の幾何学的サンセリフ。和文と欧文でフォントを完全に分離することで、バイリンガルなブランドイメージを構築
3. **line-height の段階的拡張**: 1.6（本文）→ 2.0（ステートメント）→ 2.4（哲学説明）。ブランド哲学に近いテキストほど行間を広く取り、静寂と余韻を演出
4. **チャコールグレー #333**: CSS Custom Properties で `--primary-color`, `--color-black`, `--theme-color` すべてが `#333333`。純黒を避け、温かみのあるグレーでビューティーブランドの品格を保つ
5. **palt + 0.025em の繊細な字間**: palt をグローバルに適用した上で、0.025em という極めて控えめな letter-spacing を追加。長文では normal に戻すことで、見出しの引き締めと本文の読みやすさを両立
6. **#f1f2f4 ライトブルーグレー**: 一般的な #f5f5f5（ニュートラルグレー）ではなく、わずかに青みがかったグレーを採用。清潔感とクールさを加えるビューティーブランドらしい選択
7. **カテゴリカード radius 8px**: uka で最も角丸が大きい要素。柔らかさ・親しみやすさを表現

---

**取得日**: 2026-05-09
**出典**: https://www.uka.co.jp/ , https://www.uka.co.jp/products/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
