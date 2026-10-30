# DESIGN.md — KASHIYAMA（カシヤマ）

> KASHIYAMA（https://kashiyama1927.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1927年創業のカスタムオーダースーツブランドにふさわしい、洗練と抑制のミニマルデザイン。大判フォトグラフィーと余白で上質さを演出し、テキストは最小限に絞る
- **密度**: 余白を大きく取ったエディトリアル型。ヒーローは全画面写真、セクション間の余白も広い。¥33,000〜のオーダースーツをカジュアルに感じさせる親しみやすさと、100年の歴史に裏打ちされた品格を両立
- **キーワード**: プレミアムミニマル、ダークチャコール、ミュートカラー、大判フォト、テーラリング
- **特徴**:
  - **2フォントシステム**: 英字見出し・ナビ・価格に **TT Commons Pro**（ジオメトリックサンセリフ）、和文に **Source Han Sans Japanese（源ノ角ゴシック）** を使い分ける
  - 両フォントとも **Adobe Fonts**（ドメインライセンス）。ローカルプレビューには Google Fonts 代替が必要
  - `font-feature-settings: "palt"` が **body にグローバル適用**。すべてのテキストがプロポーショナル字詰め
  - **CSS Custom Properties 不使用**。色・スペーシングはすべてハードコード
  - カラーパレットは **ダークチャコール `#222222`** を軸に、**ミュートブルー `#618aba`** と **ローズ `#d67984`** をアクセントに添える抑制的な配色
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand Accent

- **Accent Blue** (`#618aba`): もっとも多く使われる背景色（97件出現）。プロモーションセクション、シーズン訴求に使用。テーラリングブランドらしい落ち着いたブルー
- **Accent Rose** (`#d67984`): 2番目に多い背景色（72件出現）。キャンペーンセクション、ウィメンズ訴求に使用
- **Gold / Beige** (`#997e5d`): プレミアムラインのアクセント。上質感・伝統を示す

### CTA / Dark

- **Dark Primary** (`#222222`): 主要テキスト色、ナビゲーション、CTA ボタン背景。ブランドの基調色
- **Dark Deep** (`#111111`): 最も深いダークサーフェス。フッター等

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Primary | `#222222` | (34, 34, 34) | テキスト・ナビ・CTA 背景 |
| Dark Deep | `#111111` | (17, 17, 17) | 最深ダークサーフェス |
| Text Secondary | `#999999` | (153, 153, 153) | フッターナビ・パンくず・補助テキスト |
| Light Gray | `#f0f0f0` | (240, 240, 240) | セクション背景 |
| Medium Gray | `#efefef` | (239, 239, 239) | セクション背景（バリエーション） |
| Border | `#dddddd` | (221, 221, 221) | 区切り線・入力欄ボーダー |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトにはエラー／成功色の表出なし。フォーム等で必要な場合の推奨値:

- **Danger**: `#c53030` 程度の落ち着いたレッド（ブランドのミュートトーンに合わせる）
- **Success**: `#2f855a` 程度のグリーン
- **Warning**: `#c05621` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Source Han Sans Japanese（源ノ角ゴシック）** を最優先。Adobe Fonts のフォント（Adobe 版 Noto Sans CJK）
- **フォールバック**: `sans-serif`（サイト実装のフォールバック指定は最小限）
- **明朝体**: 使用しない（サイト全体ゴシック統一）
- **フォーム入力**: `NotoSans-JP-Regular` が個別指定されている箇所あり

### 3.2 欧文フォント

- **サンセリフ**: **TT Commons Pro**（TypeType 社のジオメトリックサンセリフ、Adobe Fonts 提供）。英字ナビ "MEN" / "WOMEN" / "PREMIUM" / "SHOP"、セクションラベル "CAMPAIGN" / "ABOUT"、価格表記に使用
- **特徴**: ジオメトリックでありながら温かみがある字形。Futura よりソフト、Inter より個性的。テーラリングブランドの品格に合う
- **フォールバック**: `sans-serif`

### 3.3 font-family 指定

```css
/* 和文（本文・見出し・CTA） */
font-family: "source-han-sans-japanese", sans-serif;

/* 欧文（ナビ・セクションラベル・価格） */
font-family: "tt-commons-pro", sans-serif;

/* フォーム入力 */
font-family: "NotoSans-JP-Regular", sans-serif;
```

**フォールバックの考え方**:
- 和文と欧文で明確に font-family を使い分ける 2 フォントシステム
- Source Han Sans Japanese は Adobe 版 Noto Sans CJK。Google Fonts 代替は **Noto Sans JP**（同一グリフ源）
- TT Commons Pro のジオメトリックサンセリフ感は **Inter**（Google Fonts）で近似可能
- フォールバックは最小限（`sans-serif` のみ）。Adobe Fonts が読み込めない環境ではシステムフォントに依存

**Adobe Fonts 代替（ローカルプレビュー用）**:
- TT Commons Pro → **Inter**（ジオメトリックサンセリフ。字幅・ウェイト展開が近い）
- Source Han Sans Japanese → **Noto Sans JP**（同一グリフ源。Adobe 版と Google 版の違いはライセンスのみ）

### 3.4 文字サイズ・ウェイト階層

> 以下は Headless Chrome (Puppeteer) の computed style による実測値（2026-05-09 取得）

**英字テキスト（TT Commons Pro）**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Label (h2 EN) | 30px | 500 | 1.0–1.3 | 0.03em | "CAMPAIGN", "ABOUT" |
| Nav Label | 14px | 500 | 1.0 | 0.04em | "MEN", "WOMEN", "PREMIUM" |
| Price / Spec | 12px | 500 | 1.0 | 0.08em | "¥33,000〜", スペック値 |

**和文テキスト（Source Han Sans Japanese）**

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Heading (h2 JA) | 18–26px | 700 | 1.25–1.3 | 0.03–0.04em | "MENメンズ", "安心保証" |
| Feature Heading (h3) | 16–26px | 700 | 1.3 | 0.04–0.05em | 機能見出し |
| Body Text | 15px | 400 | 1.53 | 0.04em | 説明文 |
| Body Small | 12px | 400 | 1.6 | 0.02em | ショップ情報 |
| Caption | 11px | 400 | 1.45 | 0.05em | Cookie 通知、注意書き |
| CTA Text | 13px | 700 | 1.46 | 0.054em | "オンラインオーダー", "来店予約はこちら" |
| Footer Nav | 12px | 400 | 1.0 | 0.08em | "クラシック" 等 |
| Base Body | 12px | 400 | 1.0 | normal | body 要素のデフォルト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `12px` (12px × 1.0) — 実質的には各要素で個別指定
- 本文 (15px): `23px` (×**1.53**) — 日本語としては標準的な行間
- 見出し (h2 JA): `1.25–1.3` — タイトにまとめる
- 英字セクションラベル (30px): `1.0–1.3` — 英字見出しはさらにタイト
- キャプション (11px): `16px` (×1.45)
- CTA (13px): `19px` (×1.46)

**字間 (letter-spacing)** — 実測値:
- **ほぼすべてのテキストに明示的な letter-spacing が設定されている**。これは `palt` グローバル適用と合わせて、全体的に字詰めを意識したタイポグラフィ
- 本文 (15px): `0.6px` (= 0.04em)
- 見出し (h2 JA): `0.03–0.04em`
- 英字セクションラベル: `0.03em`
- CTA: `0.7px` (= 0.054em) — やや広め
- 価格・フッターナビ: `0.08em` — もっとも広い
- キャプション: `0.05em`

**ガイドライン**:
- note のように「見出し専用」ではなく、**全テキストに letter-spacing を適用する**のが KASHIYAMA のスタイル
- 値は `0.02em`（最小）〜 `0.08em`（最大）の範囲で、要素の役割に応じて調整
- 英字の価格・スペックは広め (0.08em) でゆったりと見せ、本文は 0.04em で読みやすさを確保

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイトの明示的な宣言は最小限） */
word-break: break-all;
overflow-wrap: break-word;
```

- サイトの実装はシンプルで、特別な禁則処理の宣言は確認されなかった
- カスタムオーダーの仕様説明等、長い和文テキストは少なく、主にキャッチコピーと短い説明文で構成

### 3.7 OpenType 機能

```css
/* body にグローバル適用 — 全テキストに影響 */
font-feature-settings: "palt";
```

- **palt**: 和文のプロポーショナル字詰め。**body 要素に直接指定されており、全テキストに適用**
- note（見出し専用）や STORES（見出し専用）とは異なり、KASHIYAMA は本文含めグローバルに palt を適用している
- これは全体的に letter-spacing を細かく設定するスタイルと一貫しており、テーラリングブランドらしい「きちんと詰めた」印象を与える

### 3.8 縦書き

- 該当なし。KASHIYAMA は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（来店予約はこちら）**
- Background: `#222222`
- Text: `#ffffff`
- Font: source-han-sans-japanese, 13px, weight 700
- Letter Spacing: 0.054em
- Line Height: 1.46
- Border Radius: 小さい角丸（pill ではない）
- 用途: ヘッダー固定の「来店予約」、フッター固定バー

**Secondary CTA（オンラインオーダー）**
- Background: `transparent`
- Text: `#222222`
- Border: 1px solid `#222222`
- Font: source-han-sans-japanese, 13px, weight 700
- Letter Spacing: 0.054em
- Line Height: 1.46
- Border Radius: 小さい角丸
- 用途: フッター固定バーの左側ボタン

**注意**: サイトの CTA は `<button>` ではなく `<a>` タグ + `<span>` ラッパーで実装されている。extractInteractive が 0 件を返した原因

### Links

- **Body Link**: `#222222`, underline なし
- **Footer Nav Link**: `#999999`, 12px / 400 / letter-spacing 0.08em
- **Breadcrumb Link**: `#999999`, 12px / 400

### Navigation

- Background: `#ffffff`（透過なし）
- "KASHIYAMA" ワードマーク: TT Commons Pro, ダーク
- ナビ項目 "MEN" / "WOMEN" / "PREMIUM" / "SHOP": TT Commons Pro, 14px / 500 / 0.04em
- 「来店予約」ボタン: 右端に固定、`#222222` 背景

### Inputs（フォーム）

- Font: `NotoSans-JP-Regular`, sans-serif
- Border: 1px solid `#dddddd`
- Background: `#ffffff`
- Padding: 標準的な余白
- Font Size: 推定 14–16px

### Cards

- サイトはカード型コンポーネントよりも、フルブリード画像 + テキストオーバーレイを多用
- 商品セクション等で使われるカードは: Background `#ffffff`, Border なし, Shadow なし（フラット）
- プロモーションカードは背景色で区別（`#618aba` / `#d67984`）

---

## 5. Layout Principles

### Container

- Max Width: 推定 1200–1440px（フルブリード画像は 100vw）
- ヒーローは全画面幅の写真を使用

### Spacing

- セクション間の余白は大きめ（プレミアムブランドらしいゆったりした構成）
- テキストは短く抑え、写真とコピーのバランスで見せるエディトリアル型レイアウト
- CTA ボタン間の余白も十分に取り、窮屈さを避ける

### Grid

- モバイルファースト設計
- デスクトップでは 2–3 カラムのグリッドを使用（商品セクション等）
- ヒーロー・キャンペーンセクションは 1 カラム全幅

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインが基調 |
| 1 | 軽い影（実測値未確認） | ヘッダー固定時のみ |

- KASHIYAMA のデザインは**徹底的にフラット**。カードにもボタンにも影を使わない
- 深度の表現は影ではなく、**背景色の切り替え**（白 → `#f0f0f0` → `#222222` → `#111111`）で行う
- これはミニマルなテーラリングブランドらしい表現

---

## 7. Do's and Don'ts

### Do（推奨）

- 英字見出し・ナビ・価格には TT Commons Pro（またはInter）を使い、和文テキストには Source Han Sans Japanese（またはNoto Sans JP）を使う。**2フォントを明確に使い分ける**
- `font-feature-settings: "palt"` を body にグローバル適用する（KASHIYAMA の全テキストは palt が前提）
- letter-spacing は全テキストに設定する。本文 `0.04em`、見出し `0.03–0.05em`、価格・フッター `0.08em` の範囲で調整
- 色数を最小限に抑える。基本は `#222222`（ダーク）+ `#ffffff`（白）+ `#f0f0f0`（ライトグレー）の 3 色で構成し、アクセントは控えめに添える
- CTA は `#222222` ダーク背景が基本。ブランドカラーの `#618aba` や `#d67984` は CTA には使わない
- 写真を主役にする。テキストは短く、余白は大きく取る
- 英字セクションラベル（"CAMPAIGN", "ABOUT" 等）は TT Commons Pro / 30px / 500 / 0.03em で統一する
- プロモーションセクションの背景にアクセントカラーを使う場合、テキストは白 `#ffffff` にする

### Don't（禁止）

- `#618aba` や `#d67984` を CTA ボタンの背景に使わない。アクセントカラーはセクション背景・プロモ専用
- `palt` を見出しだけに限定しない。KASHIYAMA では body グローバル適用が正しい（note とは逆のアプローチ）
- letter-spacing を `normal` のままにしない。KASHIYAMA のテキストはほぼすべて明示的な letter-spacing を持つ
- 英字テキストに Source Han Sans Japanese を使わない。TT Commons Pro（Inter）で表示する
- 和文テキストに TT Commons Pro を使わない。必ず Source Han Sans Japanese（Noto Sans JP）で表示する
- 影（box-shadow）をカードやボタンに付けない。KASHIYAMA はフラットデザイン
- テキスト量を増やしすぎない。コピーは短く、写真で語らせるブランドスタイル
- 純粋な `#000000` をテキストに使わない。`#222222` を使用する
- ゴールド `#997e5d` を広範囲に使わない。プレミアムラインの限定的なアクセントにとどめる

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。1カラム、フッター固定バー表示 |
| Tablet | 768–1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト。ヘッダーナビ展開 |

### タッチターゲット

- 最小サイズ: 44px × 44px
- フッター固定バーの CTA ボタンは十分な高さを確保

### フォントサイズの調整

- モバイルでは英字セクションラベルを 20–24px 程度に縮小
- 和文見出しは 16–20px 程度に縮小
- 本文は 14–15px を維持（モバイルでも可読性を保つ）
- フッター固定バーが常時表示され、「来店予約」「オンラインオーダー」への導線を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Accent Blue: #618aba（プロモセクション背景）
Accent Rose: #d67984（キャンペーン・ウィメンズ背景）
Gold: #997e5d（プレミアムアクセント）
Dark Primary: #222222（テキスト・CTA背景）
Dark Deep: #111111（最深ダークサーフェス）
Text Secondary: #999999（フッター・パンくず）
Light Gray: #f0f0f0（セクション背景）
Border: #dddddd
Background: #ffffff

EN Font: "tt-commons-pro", sans-serif
JA Font: "source-han-sans-japanese", sans-serif
Preview EN: "Inter", sans-serif
Preview JA: "Noto Sans JP", sans-serif

Body: 15px / weight 400 / line-height: 1.53 / letter-spacing: 0.04em
EN Section Label: 30px / weight 500 / line-height: 1.0-1.3 / letter-spacing: 0.03em
JA Heading: 18-26px / weight 700 / line-height: 1.25-1.3 / letter-spacing: 0.03-0.04em
CTA: 13px / weight 700 / letter-spacing: 0.054em

Global: font-feature-settings: "palt" (body)
Elevation: flat（影なし）
```

### プロンプト例

```
KASHIYAMA のデザインに従って、商品紹介ページを作成してください。
- 英字フォント: "tt-commons-pro", sans-serif（ナビ・見出し・価格）
- 和文フォント: "source-han-sans-japanese", sans-serif（本文・CTA）
- テキスト色: #222222（純粋な黒は使わない）
- 補助テキスト: #999999
- 背景: #ffffff、セクション背景: #f0f0f0
- ボーダー: #dddddd
- CTA: 背景 #222222 / 文字 #ffffff / 13px / 700 / letter-spacing: 0.054em
- セカンダリ CTA: 背景 transparent / border #222222 / 文字 #222222
- 英字セクションラベル: 30px / 500 / letter-spacing: 0.03em
- 全テキストに font-feature-settings: "palt" を適用
- 全テキストに letter-spacing を設定（0.02em〜0.08em）
- 影は使わない（フラットデザイン）
- 写真を主役に、テキストは短く
```

---

**取得日**: 2026-05-09
**出典**: https://kashiyama1927.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
