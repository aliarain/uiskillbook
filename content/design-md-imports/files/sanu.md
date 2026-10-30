# DESIGN.md — SANU 2nd Home

> SANU 2nd Home（https://sa-nu.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 自然の中にセカンドホームを持つ共同オーナーシップサービス。「自然がもうひとつの家になる。」をタグラインに掲げ、**アースカラーの温もり**と**ラグジュアリーなタイポグラフィ**でブランドの世界観を構築する。純黒を一切使わず、テキスト色にも `#322e21`（ウォームダークブラウン）を採用する徹底した暖色トーン
- **密度**: ゆったりとしたビジュアル主導のブランドサイト。キャビンの写真と自然の風景が主役で、テキストは最小限。ベージュ系の面の切り替えで空間を分ける
- **キーワード**: ネイチャーラグジュアリー、アースカラー、ウォームブラウン、オールピル、トリプルフォントシステム
- **特徴**: **3種類のフォントを使い分けるトリプルフォントシステム**が最大の特徴。日本語は **DNP秀英ゴシック銀 Std**（Adobe Fonts）、英語セクションラベルは **Stahlkl**（装飾的セリフ）、英語本文は **Univers LT Pro**（スイススタイルのサンセリフ）。すべてのボタンが **radius 500px の pill 形状**で統一され、`font-feature-settings: "palt"` がグローバルに適用される

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

SANU のカラーは**アースカラー**で構成される。**ウォームダークブラウン #322e21** がブランドを象徴する色で、テキストとダーク背景に使用。CTA には **ビビッドオレンジレッド #ec572e** を採用する。

- **Warm Dark Brown** (`#322e21`): ブランドの基調色。テキスト・ダーク背景・ナビゲーション（rgb 50, 46, 33 — 純黒ではなく、緑みを帯びたウォームブラウン）
- **Vivid Orange-Red** (`#ec572e`): CTA のメインカラー（rgb 236, 87, 46 — 自然の中の炎・夕陽を想起させるアクセント）

### Semantic（意味的な色）

- **Error** (`#fa4616`): エラー・バリデーション表示
- **Success** (`#6ea80b`): 成功・完了

### Neutral（ニュートラル）

- **Text Primary** (`#322e21`): メインテキスト（--color-black。純黒ではなくウォームブラウン）
- **Text Secondary** (`#605d55`): 補足テキスト・ラベル（rgb 96, 93, 85 — グレーブラウン）
- **Text on Dark** (`#ffffff`): ダーク背景上の白テキスト
- **Border** (`#eaeaea`): 区切り線・入力欄の枠（rgb 234, 234, 234）
- **Secondary Button Border** (`#85827a`): ダーク背景上のアウトラインボタン枠線

### Surface

- **Surface White** (`#ffffff`): 標準ページ背景
- **Surface Light Beige** (`#f2eee4`): ライトベージュ背景面（--color-beige-lights）
- **Surface Beige** (`#e9e3d1`): ベージュ背景面（--color-beige）
- **Surface Beige Deep** (`#d1c8a6`): ディープベージュ（--color-beige-deep）
- **Surface Beige Deep 2** (`#d9c9a1`): ディープベージュ2（--color-beige-deep2）
- **Surface Light Grey** (`#f3f3f3`): ライトグレー背景
- **Surface Dark** (`#322e21`): ダーク面（フッター・ヒーロー・ナビ）

---

## 3. Typography Rules

### 3.1 和文フォント

- **DNP秀英ゴシック銀 Std**（dnp-shuei-gothic-gin-std）: Adobe Fonts の Web フォント。サイト全体の和文メイン書体。秀英体の流れを汲む格調高いゴシック体で、「自然 + ラグジュアリー」の世界観を支える
- Adobe Fonts のドメインライセンスのため、preview.html では **Zen Kaku Gothic New**（Google Fonts）で代替する。同じく Morisawa 系で字形の印象が近い

### 3.2 欧文フォント

- **Stahlkl**（stahlkl）: セクションラベル専用の装飾的セリフ書体。「More Plans」「About」等の英語見出しに使用。クラシカルな印象を加える
- **Univers LT Pro**: スイススタイルのサンセリフ。3ウェイト展開:
  - Light（UniversLTPro-45Light）: 細い見出し・キャプション
  - Roman（UniversLTPro-55Roman）: 英語本文
  - Bold（UniversLTPro-65Bold）: 強調

### 3.3 font-family 指定

```css
/* 日本語（サイト全体のデフォルト） */
font-family: "dnp-shuei-gothic-gin-std", sans-serif;

/* 英語セクションラベル（"More Plans", "About" 等） */
font-family: "stahlkl", sans-serif;

/* 英語本文・UI — Light */
font-family: "UniversLTPro-45Light", sans-serif;

/* 英語本文・UI — Roman */
font-family: "UniversLTPro-55Roman", sans-serif;

/* 英語本文・UI — Bold */
font-family: "UniversLTPro-65Bold", sans-serif;

/* preview.html 用フォールバック（Google Fonts 代替） */
font-family: "Zen Kaku Gothic New", sans-serif;
```

**フォールバックの考え方**:
- **和文は DNP秀英ゴシック銀 単独指定** + sans-serif フォールバック。Adobe Fonts 経由で配信するため、システムフォントへの細かいフォールバックチェーンは不要
- **欧文はウェイト別に font-family を切り替える**設計。Univers LT Pro の Light / Roman / Bold を CSS 変数（--font-universlt / --font-universlt-m / --font-universlt-b）で管理
- **セクションラベル用の Stahlkl は完全に独立**。装飾的セリフのため他のフォントとは混ぜない

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero (h1) | DNP秀英ゴシック銀 | 30px | 600 | 1.4 (42px) | 0.01em (0.3px) | ヒーローキャッチ / color #322e21 |
| Section Title (h2) | DNP秀英ゴシック銀 | 34px | 600 | 1.4 (47.6px) | 0.01em (0.34px) | セクション見出し |
| Section Label (h2) | Stahlkl | 30px | 400 | 1.0 | normal | 英語セクションラベル（"More Plans" 等） |
| Sub Title (h2 small) | DNP秀英ゴシック銀 | 24px | 600 | 1.4 (33.6px) | 0.01em (0.24px) | 小さめセクション見出し |
| Heading 3 | DNP秀英ゴシック銀 | 24px | 600 | 1.4 (33.6px) | 0.01em (0.24px) | サブ見出し |
| Body | DNP秀英ゴシック銀 | 18px | 400 | 1.5 (27px) | normal | 本文 |
| Lead | DNP秀英ゴシック銀 | 16px | 400 | 1.5 (24px) | normal | リード文・導入テキスト |
| CTA Text | DNP秀英ゴシック銀 | 16px | 700 | — | normal | ボタンラベル |
| Caption | DNP秀英ゴシック銀 | 12px | 400 | 1.5 (18px) | normal | キャプション・注釈 |
| List Item | DNP秀英ゴシック銀 | 12px | 400 | 1.5 (18px) | 0.03em (0.36px) | リスト項目 / 字間やや広め |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（27px / 18px）
- **見出しの行間**: `line-height: 1.4`（47.6px / 34px）— 見出しは本文よりやや詰める
- **英語ラベルの行間**: `line-height: 1.0`（Stahlkl は行間なし）
- **見出しの字間**: `letter-spacing: 0.01em`（0.3px @ 30px）— ごくわずかに広げる
- **本文の字間**: `letter-spacing: normal`（本文は字間指定なし）
- **リスト項目の字間**: `letter-spacing: 0.03em`（0.36px @ 12px）— 小さい文字は少し広げて可読性確保

**ガイドライン**:
- 見出しの letter-spacing は **0.01em** とごく控えめ。DNP秀英ゴシック銀のメトリクスが優秀なため、大きく字間を開ける必要がない
- 本文は letter-spacing: normal で、フォント自体のデフォルトスペーシングを活かす
- **palt がグローバルに適用される**ため、実質的なプロポーショナル字詰めが全体にかかっている

### 3.6 OpenType 機能

```css
/* グローバル適用（body） */
font-feature-settings: "palt";  /* プロポーショナル字詰め */
```

- **`palt`**: 和文のプロポーショナル字詰め。body にグローバル適用され、サイト全体に効く
- DNP秀英ゴシック銀 は palt 対応フォントのため、見出し・本文ともに自然な字詰めが実現される

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（"無料 Co-Ownersの資料を見る"）**

SANU のボタンは**すべて pill 形状（radius 500px）**で統一。Primary CTA は鮮やかなオレンジレッドで目を引く。

- Background: `#ec572e`
- Text: `#ffffff`
- Border Radius: **500px**（pill）
- Padding: 0 14px 0 63px（左に大きめの余白 — アイコンスペース）
- Font Size: 16px
- Font Weight: 700

**Secondary CTA（"予約はこちら" "物件一覧を見る" "仕組みをもっと知る"）**

- Background: `transparent`
- Text: `#322e21`
- Border: 1px solid `#322e21`
- Border Radius: **500px**（pill outline）
- Font Size: 16px
- Font Weight: 600

**Outline Button（"エリア一覧" "記事一覧"）**

- Background: `transparent`
- Text: `#322e21`
- Border: 1px solid `#322e21`
- Border Radius: **500px**
- Padding: 12px 28px 12px 33px

**Dark Background Variant（"詳細を見る"）**

- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#85827a`
- Border Radius: **500px**

**LINE Button（"LINEで最新情報を受け取る"）**

- Background: `#ffffff`
- Text: `#4cc764`（LINE グリーン）
- Border Radius: **500px**
- Padding: 12px 28px

**ボタンの考え方**:
- **すべて pill 形状（radius 500px）** で統一。角丸やシャープコーナーは存在しない
- Primary は `#ec572e` の塗りつぶし、それ以外はすべてアウトライン
- ダーク背景上では border を `#85827a` に変え、テキストを白に反転

### Inputs

- キャビン予約ページに入力フォームあり
- Border: 1px solid（推定）
- Focus Ring: ブランド色系（詳細は抽出外）

### Cards

- Background: `#ffffff` / `#f2eee4`（ベージュ背景面上）
- Border: なし
- Border Radius: 小さめの角丸（推定）
- Shadow: なし — ベージュの面の切り替えで空間を表現

---

## 5. Layout Principles

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 12px | キャプション余白 |
| S | 14px | ボタン水平パディング（Primary） |
| M | 28px | ボタン水平パディング（Outline） |
| L | 33px | ボタン左パディング（Outline） |
| XL | 63px | Primary CTA 左パディング（アイコン余白） |

### Container

- フルスクリーンのヒーロービジュアルを基本とした構成
- コンテンツ領域はセクション単位で中央寄せ

### Grid

- キャビン・物件カードはグリッドレイアウト
- 記事・ストーリーはカード型のグリッド配置

---

## 6. Depth & Elevation

SANU はシャドウを使わない。ベージュ系の面の切り替え（白 → ライトベージュ → ベージュ → ダークブラウン）で奥行きを表現する、自然素材的なアプローチ。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |
| 1 | background `#ffffff` | 通常面 |
| 2 | background `#f2eee4` | ライトベージュ面 |
| 3 | background `#e9e3d1` | ベージュ面 |
| 4 | background `#322e21` | ダーク面（フッター・ヒーロー） |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は **#322e21（ウォームダークブラウン）** を使う。純黒は絶対に使わない
- CTA は **#ec572e（オレンジレッド）+ radius 500px（pill）** にする
- `font-feature-settings: "palt"` をグローバルに適用する
- 日本語は **DNP秀英ゴシック銀**（または代替の Zen Kaku Gothic New）を使う
- 英語セクションラベルには **Stahlkl** セリフ体を使う
- 英語本文には **Univers LT Pro** のウェイト別ファミリーを使う
- 背景はベージュ系のグラデーション（#fff → #f2eee4 → #e9e3d1 → #322e21）で面を分ける
- 見出しの letter-spacing は **0.01em** に留める
- ボタンは**すべて pill 形状**にする

### Don't（禁止）

- 純黒 `#000000` をテキストに使わない（#322e21 が標準）
- 純グレー `#808080` 等のクールグレーを使わない（グレーブラウン #605d55 が正しい）
- 角丸ボタン（radius 8px 等）やシャープコーナー（radius 0px）を使わない（すべて pill）
- 寒色系の背景（ブルーグレー、クールグレー）を使わない（ベージュ系のみ）
- シャドウ（box-shadow）を使わない
- 見出しに letter-spacing: 0.08em 以上の広い字間を入れない
- Stahlkl を日本語テキストに使わない（英語ラベル専用）
- DNP秀英ゴシック銀を英語本文に使わない（英語は Univers LT Pro）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Section Title（34px）→ 縮小
- Hero（30px）→ モバイルではさらに縮小
- pill ボタンの形状は維持（SANU のアイデンティティ）
- ベージュの面の切り替えは維持
- キャビンカードは 1 カラムに折り返し

### タッチターゲット

- CTA は pill 形状のため十分な横幅を確保
- Outline Button は padding 12px で最小タップ領域を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: SANU 2nd Home
Origin: 自然の中のセカンドホーム共同オーナーシップ
Tagline: 自然がもうひとつの家になる。

CTA Color: #ec572e (vivid orange-red)
Text Primary: #322e21 (warm dark brown)
Text Secondary: #605d55 (grey-brown)
Background White: #ffffff
Surface Light Beige: #f2eee4
Surface Beige: #e9e3d1
Surface Dark: #322e21

Japanese Font: "dnp-shuei-gothic-gin-std", sans-serif
English Label Font: "stahlkl", sans-serif
English Body Font (Light): "UniversLTPro-45Light", sans-serif
English Body Font (Roman): "UniversLTPro-55Roman", sans-serif
English Body Font (Bold): "UniversLTPro-65Bold", sans-serif
Preview Fallback: "Zen Kaku Gothic New", sans-serif

palt: グローバル適用（body）
Body: 18px / 400 / line-height 1.5 / letter-spacing normal
Heading: 34px / 600 / line-height 1.4 / letter-spacing 0.01em
CTA Style: filled (bg #ec572e, text #fff, radius 500px, font-weight 700)
Secondary: outline (bg transparent, border #322e21, radius 500px)
Shadow: 使用しない
```

### プロンプト例

```
SANU 2nd Home のデザインに従って、キャビン一覧ページを作成してください。
- 日本語フォントは "dnp-shuei-gothic-gin-std", sans-serif（代替: "Zen Kaku Gothic New"）
- 英語セクションラベルは "stahlkl", sans-serif
- font-feature-settings: "palt" をグローバルに適用
- テキスト色は #322e21（ウォームダークブラウン）、純黒は使わない
- 本文は 18px / 400 / line-height 1.5
- セクション見出しは 34px / 600 / line-height 1.4 / letter-spacing 0.01em
- CTA は bg #ec572e, text #fff, radius 500px（pill）
- Secondary ボタンは bg transparent, border #322e21, radius 500px
- 背景は白 #ffffff とライトベージュ #f2eee4 を交互に使う
- シャドウは一切使わない。ベージュの面の切り替えで空間を表現する
```

### デザインの重要ポイント

1. **トリプルフォントシステム**: 日本語（DNP秀英ゴシック銀）、英語ラベル（Stahlkl セリフ）、英語本文（Univers LT Pro サンセリフ）の3書体を使い分ける。それぞれの役割は厳密に分かれており、混用しない
2. **ウォームダークブラウン #322e21**: 純黒を一切使わず、テキストも背景も `#322e21` を基調にする。自然素材（木、土、石）を想起させる色設計
3. **ビビッドオレンジレッド #ec572e**: 自然の中の「炎」「夕陽」を象徴する CTA カラー。アースカラーの中で唯一の鮮やかな色で、行動喚起に使う
4. **オールピル（radius 500px）**: ボタンはすべて pill 形状。角丸もシャープコーナーも存在しない。柔らかさと自然の曲線を表現する
5. **ベージュのグラデーション**: 白 → ライトベージュ #f2eee4 → ベージュ #e9e3d1 → ダークブラウン #322e21 の面の切り替えで空間を分ける。シャドウは使わない
6. **palt グローバル適用**: `font-feature-settings: "palt"` が body に適用され、サイト全体でプロポーショナル字詰めが効く
7. **DNP秀英ゴシック銀の格調**: Adobe Fonts の Web フォント。秀英体の伝統を受け継ぐ洗練されたゴシック体で、「自然の中の上質な暮らし」という SANU のブランド価値を書体で表現する

---

**取得日**: 2026-05-09
**出典**: https://sa-nu.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
