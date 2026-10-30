# DESIGN.md — PILOT（パイロット）

> PILOT（https://www.pilot.co.jp/）のデザイン仕様書。
> 万年筆・ボールペン・文房具を中心とする老舗筆記具ブランドのコーポレート＆製品サイト。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **ライトテーマ基調**（白〜淡いライトブルーグレーの面 + ブランドブルー `#002f9e` のアクセント）で、筆記具ブランドとしての誠実さ・品格・伝統を表現。「かく、がスキ」というタグラインが示す通り、書くことへの愛着を中心に据えた、清潔感のある上質なコーポレートデザイン
- **密度**: ヒーローセクションはフルワイドのビジュアル。製品グリッドは余白を十分に確保したゆったりした構成で、紙のような清澄感を演出
- **キーワード**: 清潔・品格・ブランドブルー・シャープなエッジ・広い字間・和文 medium ウェイト
- **特徴**:
  - ブランドカラーは **PILOT ブルー `#002f9e`**（ヘッダーナビ、見出し、CTA、フッター背景に一貫適用）
  - **ボタンの角丸は一切なし（radius 0px）** — シャープな正方形コーナーがブランドの特徴的な意匠
  - 見出しの letter-spacing は **0.15〜0.175em** と広め — 和文 medium ウェイト（500）と組み合わせて品格ある佇まいを実現
  - フォントは **Noto Sans JP** を中心に、製品カタログページではヒラギノ・メイリオのフォールバックを追加
  - 面の背景色は Surface Light Blue `#e9edf1` と Surface Lightest `#f6f7f9` の2階調を使い分け、紙のような柔らかい奥行きを演出
  - フッターはブランドブルー背景に白テキストで、ブランドの存在感を締める

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **PILOT ブルー** (`#002f9e`): ブランドの核心。セクション見出し、ナビリンク（アクティブ）、CTA ボタン背景、フッター背景に使用
- **PILOT ブルー alt** (`#002f9c`): 製品カタログページでのわずかに異なる実測値（RGB 0, 47, 156）。実用上は同色として扱う
- **Dark Navy** (`#001e5a`): フッター・ナビの一部に現れる深みのあるネイビー（RGB 0, 30, 90）

### CTA / Buttons

- **Primary CTA**: 背景 `#002f9e` / 文字 `#ffffff` / radius `0px` / 例: "かく、がスキ"
- **Language Toggle**: 背景 `#858585` / 文字 `#ffffff` / radius `0px`
- **Category Button**: 背景 `#ffffff` または `#f2f2f2` / 文字 `#000000` / radius `0px`
- **Search リンク**: 文字 `#002f9c`（青テキスト、背景なし）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#000000` | (0, 0, 0) | 本文・ボディテキスト |
| Text Dark Gray | `#333333` | (51, 51, 51) | 大きなナビテキスト |
| Secondary Gray | `#858585` | (133, 133, 133) | 言語トグルボタン |
| Disabled Light | `#cccccc` | (204, 204, 204) | 無効状態テキスト |
| Disabled | `#999999` | (153, 153, 153) | 無効状態補助テキスト |
| Border Gray | `#d7d7d7` | (215, 215, 215) | 区切り線・ボーダー |
| Category BG | `#f2f2f2` | (242, 242, 242) | カタログカテゴリボタン背景 |

### Surface

| Token | hex | RGB | 出現回数 | 役割 |
|-------|-----|-----|----------|------|
| Surface Light Blue | `#e9edf1` | (233, 237, 241) | 7 | メインセクション背景 |
| Surface Lightest | `#f6f7f9` | (246, 247, 249) | 3 | サブセクション背景 |
| Catalog Light Blue | `#d7e8f2` | (215, 232, 242) | — | カタログページのセクション背景 |
| White | `#ffffff` | (255, 255, 255) | — | ページ基本背景、カード面 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（トップページ）**: **Noto Sans JP** を単独使用（シンプルなスタック）
- **ゴシック体（製品カタログ）**: Noto Sans JP → ヒラギノ角ゴ ProN → メイリオ → MS PGothic の順

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP の欧文グリフを使用（専用欧文フォントの指定なし）
- フォールバック末尾は `sans-serif` のみ

### 3.3 font-family 指定

```css
/* トップページ */
font-family: "Noto Sans JP", sans-serif;

/* 製品カタログページ */
font-family: "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
```

**フォールバックの考え方**:
- トップページはモダンブラウザを前提に Noto Sans JP 単独
- 製品カタログは幅広い環境に対応するため、macOS 系（ヒラギノ）→ Windows 系（メイリオ → MS PGothic）の順でフォールバック

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ／製品カタログページ、2026-05-09 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Logo / H1 | 32px | 700 | — | — | `#000000` | ロゴ周辺エリア |
| Section H2 | 24.375px | **500** | 24.375px (×1.0) | 4.27px (0.175em) | `#002f9e` | "製品情報"、"スペシャルサイト"、"ブランド" |
| Nav H3 | 18.75px | **500** | 18.75px (×1.0) | 2.81px (0.15em) | `#002f9e` | ナビゲーション見出し |
| Body Medium | 16.875px | **500** | 22.5px (×1.33) | 1.27px (0.075em) | `#000000` | 製品カテゴリラベル |
| Body Standard | 16px | 400 | 24px (×1.5) | — | `#000000` | 製品カタログ本文 |
| Nav Link | 15px | **500** | 24.375px | — | `#002f9e` / `#000000` | アクティブ: `#002f9e`、通常: `#000000` |
| Body Small | 15px | 400 | 15px (×1.0) | 1.125px (0.075em) | `#000000` | ユーティリティリンク |
| Description | 13.125px | 400 | 20.625px (×1.57) | — | `#000000` | ボディコピー・説明文 |
| Submit Button | 25.6px | — | 48px (×1.875) | — | `#ffffff` | カタログ送信ボタン（大きめのサイズ） |
| Footer | — | 400 | — | — | `#ffffff` | ブランドブルー背景上の白テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（`24px` / `16px`、製品カタログ）〜 1.57（`20.625px` / `13.125px`、説明文）
- **見出しの行間**: 1.0（H2・H3 は tight — `24.375px` / `24.375px`）
- **本文の字間 (letter-spacing)**: 0〜0.075em（ボディ）
- **見出しの字間**: **0.15〜0.175em**（H2: 0.175em、H3: 0.15em）— 広い字間が品格を演出

**ガイドライン**:
- H2・H3 の line-height は 1.0（tight）のため、複数行になる見出しは避ける
- 見出しの letter-spacing は大きめ（0.15em 以上）に保つこと — これがブランドの特徴
- 見出し weight は **500（Medium）** を使う。700（Bold）は使わない

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

- 特定の `font-feature-settings` 指定は確認されていない（Noto Sans JP のデフォルト動作に委ねる）
- palt 適用なし（広い letter-spacing との組み合わせでバランスを取っている）

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（"かく、がスキ"）**
- Background: `#002f9e`
- Text: `#ffffff`
- Border Radius: **0px**（シャープなエッジ — ブランドの特徴）
- Font: Noto Sans JP

**Language Toggle**
- Background: `#858585`
- Text: `#ffffff`
- Border Radius: 0px

**Category Button**
- Background: `#ffffff` または `#f2f2f2`
- Text: `#000000`
- Border Radius: 0px

**Submit Button（製品カタログ）**
- Background: `#002f9e`（推定）
- Text: `#ffffff`
- Font Size: 25.6px
- Line Height: 48px

> **重要**: 全ボタン・全 CTA に `border-radius: 0px` を適用する。角丸は使用しない。

### Cards

- Background: `#ffffff`
- Border Radius: 0px（角丸なし）
- 製品カード境界線: `#d7d7d7`

### Navigation

- **デスクトップ**: ブランドブルー `#002f9e` またはダークネイビー `#001e5a` を背景に白テキスト
- **アクティブリンク**: `#002f9e`
- **通常リンク**: `#000000`
- **ナビゲーション文字色（大）**: `#333333`

### Footer

- Background: `#002f9e`（PILOT ブルー）
- Text: `#ffffff`
- ブランドカラーで締めくくる構造

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 備考 |
|-------|-------|------|
| XS | 4px | アイコン周辺の最小余白 |
| S | 8px | ラベルと要素間 |
| M | 16px | コンポーネント内パディング |
| L | 24px | セクション内ブロック間 |
| XL | 48px | セクション間 |
| XXL | 80px | ページ上下パディング |

### Container

- Max Width: 1440px 程度（実測ベース）
- Content Width: 1200px 程度
- Padding（horizontal）: デスクトップ 40〜80px / モバイル 16px

### Grid

- 製品グリッド: 3〜4 カラム（デスクトップ）/ 2 カラム（タブレット）/ 1 カラム（モバイル）
- カテゴリナビ: 水平スクロール対応のフレックスレイアウト

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラットデザイン） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | カードホバー時の軽い浮き上がり（推定） |

フラットデザインが基本。陰影ではなく **面の背景色の差** (`#ffffff` / `#f6f7f9` / `#e9edf1`) で奥行きを表現する。ボタンの角丸もなく、装飾的な shadow も使わない清潔なビジュアルが特徴。

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドブルー `#002f9e` をアクセント・CTA・見出しに一貫して使う
- **全ボタンの `border-radius` は 0px** に設定する（シャープなエッジを保つ）
- 見出し（H2・H3）には weight **500（Medium）** を使う — 700（Bold）は避ける
- 見出しの letter-spacing は **0.15em 以上** を確保して品格を演出する
- 面の背景色は `#e9edf1` と `#f6f7f9` の2階調でセクションの奥行きを表現する
- フッターはブランドブルー `#002f9e` を背景に白テキストで締める
- フォントは Noto Sans JP を基本に、必要に応じてヒラギノ・メイリオのフォールバックを追加する

### Don't（禁止）

- ボタンに `border-radius` を設定しない（pill 型や角丸ボタンはブランドイメージに反する）
- 見出しに weight 700（Bold）を使わない（Medium 500 がブランドのトーン）
- 見出しの letter-spacing を 0.1em 以下に縮めない（品格が損なわれる）
- アクセントカラーにブランドブルー以外の有彩色を使わない
- ページ背景に濃い色やダークテーマを適用しない（ライトテーマが前提）
- H2・H3 を複数行にならないよう文字量を管理する（line-height 1.0 のため詰まって見える）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 375px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは H2（24.375px）を 18〜20px 程度に縮小
- 製品グリッドはデスクトップ 3〜4 列 → モバイル 1〜2 列に変更
- ナビゲーションはハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (PILOT Blue): #002f9e
Text Primary: #000000
Surface Light Blue: #e9edf1
Surface Lightest: #f6f7f9
Footer BG: #002f9e
Font (top): "Noto Sans JP", sans-serif
Font (catalog): "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Body Size: 16px / Weight 400
Body Line Height: 1.5
H2 Size: 24.375px / Weight 500 / Letter Spacing 0.175em
H3 Size: 18.75px / Weight 500 / Letter Spacing 0.15em
Button Border Radius: 0px (all buttons)
```

### プロンプト例

```
PILOT のコーポレートサイトのデザインシステムに従って、製品カテゴリセクションを作成してください。
- 背景: #e9edf1（Surface Light Blue）
- セクション見出し: #002f9e / 24.375px / weight 500 / letter-spacing 0.175em
- フォント: "Noto Sans JP", sans-serif
- ボタン: 背景 #002f9e / 文字 #ffffff / border-radius 0px（角丸なし）
- 製品カード: 白背景 / border-radius 0px / border 1px solid #d7d7d7
- フッター: 背景 #002f9e / 文字 #ffffff
```
