# DESIGN.md — SUQQU (スック)

> SUQQU（https://www.suqqu.com/ja/）のデザイン仕様書。
> 花王グループ（旧カネボウ化粧品）のラグジュアリーコスメティクスブランド。「洗練」と「凛」を掲げ、日本の美意識を現代に昇華した商品で知られる。
> ブランド哲学: 「顔立ちからつくる」。骨格に沿ったメイクアップ理論で日本人女性の美を引き出す。
> 実サイトの computed style 実測（2026-06-04 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ラグジュアリーミニマル。**白 `#ffffff`** の広い余白に、**黒 `#000000`** のヘッダーと CTAボタンが鋭いコントラストを生む。装飾を極限まで排し、黒と白だけで高級感を表現する
- **密度**: ゆったり。大きなビジュアルと控えめなテキストサイズで余白を活かす構成
- **キーワード**: ラグジュアリー、凛、シャープ、モノクローム、日本の美意識
- **特徴**:
  - **3書体構成** — 他のブランドにはない非常に特徴的なタイポグラフィシステム:
    1. **IwaNMNewsPro-Th**（岩田ニュース明朝 Thin）: セクション見出しのディスプレイ書体。細い明朝体が洗練を表現
    2. **FOT-ロダン Pro B / M**（Fontworks Rodin）: ナビゲーション、商品名、本文のゴシック体。幾何学的な字形が現代性を表現
    3. **Noto Sans JP**: ベースフォント、UIラベル、クッキー同意等のフォールバック
  - CTA ボタンは **完全に角張った矩形（radius 0px）**。ラグジュアリーブランドに特徴的なシャープな選択
  - アクセントカラーに **オレンジ `#ec7205`** を使用（検索アイコン、ハンバーガーメニュー）。モノクロームの中にわずかに暖色を差す
  - テキスト色は `#19212b`（極濃紺黒）。純黒 `#000` とわずかに異なるダークトーン
  - letter-spacing は実測値で全要素 normal。字間調整をしない

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — Monochrome Palette

- **Black** (`#000000`): ヘッダー背景、CTA ボタン背景。ブランドの中核色
- **Orange Accent** (`#ec7205`): 検索アイコン、ハンバーガーメニューバー。モノクロームの中の唯一の差し色

### Text

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#19212b` | (25, 33, 43) | 本文テキスト。極濃紺黒 |
| Text Heading | `#333333` | (51, 51, 51) | 白背景上のセクション見出し |
| Text on Black | `#ffffff` | (255, 255, 255) | ヘッダーナビ、CTA ボタン上 |
| Text Muted | `#696969` | (105, 105, 105) | クッキー同意テキスト、補足 |

### Surface

| Token | hex | 役割 |
|-------|-----|------|
| Background | `#ffffff` | ページ背景 |
| Header / CTA | `#000000` | ヘッダーバー、CTA ボタン |
| Card | `#ffffff` | 商品カード面 |
| Cookie Consent | `#696969` | クッキー同意バー |

### Border

- **Border Default** (`#cccccc`): 汎用ボーダー（推定）
- **Border Button** (`#696969`): セカンダリボタン枠線（クッキー設定ボタン）

---

## 3. Typography Rules

### 3.1 和文フォント

- **IwaNMNewsPro-Th**: 岩田ニュース明朝 Thin。Adobe Fonts。セクション見出し（TOPICS、STAFF REVIEW 等）のディスプレイ書体として使用。Thin ウェイトの繊細な明朝体が SUQQU のブランドトーンを定義する
- **FOT-ロダン Pro B / M**: Fontworks Rodin。Adobe Fonts。ナビゲーション、商品名、本文、CTA ボタンのゴシック体。B（Bold）と M（Medium）の2ウェイトを使い分ける
- **Noto Sans JP**: Google Fonts。ベースフォント、カルーセル、クッキー同意等の UI 要素に使用

### 3.2 欧文フォント

- IwaNMNewsPro-Th および FOT-ロダン Pro の内蔵欧文グリフに依存
- Noto Sans JP の内蔵欧文グリフに依存
- 独立した欧文フォントスタックは未使用

### 3.3 font-family 指定

```css
/* ディスプレイ見出し（明朝体）*/
font-family: "IwaNMNewsPro-Th", "Shippori Mincho", "Hiragino Mincho ProN", serif;

/* ナビゲーション・商品名・本文（ゴシック体 Bold）*/
font-family: "FOT-ロダン Pro B", "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;

/* 本文・キャプション（ゴシック体 Medium）*/
font-family: "FOT-ロダン Pro M", "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;

/* UI ベース（フォールバック）*/
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- ディスプレイ見出しは明朝体（IwaNMNewsPro-Th）。Adobe Fonts が使えない環境では Shippori Mincho → ヒラギノ明朝
- ナビ・本文はゴシック体（FOT-ロダン Pro）。フォールバックは Zen Kaku Gothic New → Noto Sans JP
- ウェイトの切り替えはフォントファミリー名（B / M）で行う

> **preview.html での代替**: IwaNMNewsPro-Th と FOT-ロダン Pro はドメインライセンスの Adobe Fonts のため、プレビューでは以下の Google Fonts で代替:
> - IwaNMNewsPro-Th → **Shippori Mincho**（日本語明朝体で最も近い印象）
> - FOT-ロダン Pro B / M → **Zen Kaku Gothic New**（Fontworks 系の幾何学的ゴシック。Noto Sans JP より字形が近い）
> - Noto Sans JP → そのまま使用

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Display | IwaNMNewsPro-Th | 34px | 400 | 1.4 | normal | "TOPICS" 等の大見出し |
| Section Sub | IwaNMNewsPro-Th | 18px | 400 | 1.0 | normal | "STAFF REVIEW" 等 |
| Sub Heading | Noto Sans JP | 18px | 400 | 1.4 | normal | "人気ランキング" 等 |
| Product Title | FOT-ロダン Pro B | 13–14px | 400 | 1.7 | normal | 商品名 |
| Body | FOT-ロダン Pro M | 12–14px | 400 | 1.7–1.8 | normal | 本文テキスト |
| Base | Noto Sans JP | 16px | 400 | 1.5 | normal | ベーステキスト |
| Nav | FOT-ロダン Pro B | 13px | 400 | 1.7 | normal | ヘッダーナビゲーション |
| CTA | FOT-ロダン Pro M | 16px | 400 | 1.5 | normal | ボタンテキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- ディスプレイ見出し: `1.4`（34px → 47.6px）
- サブ見出し: `1.0`（18px → 18px）— 非常にタイトな行間
- 本文: `1.7–1.8`（12–14px → 21.6–23.8px）
- ベーステキスト: `1.5`（16px → 24px）
- CTA ボタン: `1.5`

**字間 (letter-spacing)** — 実測値:
- **全要素が `normal`**。SUQQU は字間調整をまったく行わない
- 書体自体のメトリクスに完全に依存する設計

### 3.6 禁則処理・改行ルール

- ブラウザデフォルトの禁則処理に依存
- 特殊な word-break / line-break 設定は未確認

### 3.7 OpenType 機能

- **palt**: 不使用。字間をプロポーショナルにしない
- **kern**: ブラウザデフォルトに依存
- 特別な `font-feature-settings` の明示的指定は未確認

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（"詳細はこちら"、"新規会員登録はこちら"、"店舗一覧"）**
- Background: `#000000`
- Text: `#ffffff`
- Border Radius: **0px（完全な矩形）** — SUQQU の最も特徴的なコンポーネントスタイル
- Padding: 8px / 15px 0
- Font Family: FOT-ロダン Pro M
- Font Size: 16px
- Font Weight: 400

**Cookie OK Button**
- Background: `#696969`
- Text: `#ffffff`
- Border: 1px solid `#696969`
- Border Radius: 2px
- Font Size: 14px

**Cookie Settings Button（Secondary）**
- Background: `#ffffff`
- Text: `#696969`
- Border: 1px solid `#696969`
- Border Radius: 2px
- Font Size: 14px

**Carousel Dot (Active)**
- Background: `#000000`
- Border: 1px solid `#000000`
- Border Radius: 50%

**Carousel Dot (Inactive)**
- Background: transparent
- Border: 1px solid `#000000`
- Border Radius: 50%

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`（推定）
- Border (focus): 1px solid `#000000`（推定）
- Border Radius: 0px（ブランドトーンに準拠）
- Padding: 8px 12px
- Font Size: 14px

### Cards

- Background: `#ffffff`
- Border: なし（影なし、ボーダーなし）
- Border Radius: 0px
- Padding: 10px 0 16px
- Shadow: なし（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 16px–32px

### Grid

- 商品カルーセル: 横スクロール
- サービスリンク: 4–5 カラム
- コンテンツ: 1 カラム中央寄せ

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットが基本） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ドロップダウン・ポップオーバー |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | モーダル |

- **基本方針は完全フラット**。SUQQU は影をほぼ使わない
- 黒と白のコントラストだけで階層を表現する
- ホバーエフェクトも控えめ

---

## 7. Do's and Don'ts

### Do（推奨）

- CTA ボタンは `border-radius: 0px` の完全な矩形にする
- テキスト色は `#19212b`（極濃紺黒）を使う
- ヘッダーと CTA の背景色は `#000000` を使う
- ディスプレイ見出しには明朝体（IwaNMNewsPro-Th）を使う
- ナビゲーション・本文にはゴシック体（FOT-ロダン Pro）を使う
- 3書体（明朝 + ゴシック + サンセリフ）の使い分けを厳守する
- 余白を大きく取り、装飾を排除する
- letter-spacing は全要素 `normal` のまま
- ページ背景は `#ffffff` の純白を使う

### Don't（禁止）

- ピル型ボタン（`border-radius: 9999px`）を使わない。SUQQU は 0px radius が鉄則
- 角丸ボタン（`border-radius: 4px` 以上）も使わない
- テキストに `#000000` を使わない。本文は `#19212b` を使う（ヘッダー/CTA背景の黒とは別）
- ディスプレイ見出しにゴシック体を使わない。明朝体専用
- 影やグラデーションで装飾しない。SUQQU はフラットデザイン
- letter-spacing を追加しない
- palt を使わない
- アクセントカラー `#ec7205` を CTA に使わない。オレンジはアイコン等のサブ要素専用

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 480px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- CTA ボタンは padding 8px だが、タッチ領域は 44px を確保

### フォントサイズの調整

- モバイルではディスプレイ見出しを 24–28px 程度に縮小
- 本文 12–14px はモバイルでも維持
- ナビゲーションはハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Black: #000000
Text Primary: #19212b
Text Heading: #333333
Text on Black: #ffffff
Text Muted: #696969
Background: #ffffff
Orange Accent: #ec7205

Display Font: "IwaNMNewsPro-Th", serif     → 代替: "Shippori Mincho"
Body Font: "FOT-ロダン Pro M", sans-serif  → 代替: "Zen Kaku Gothic New"
Nav Font: "FOT-ロダン Pro B", sans-serif   → 代替: "Zen Kaku Gothic New" weight 700
Base Font: "Noto Sans JP", sans-serif

Display Size: 34px / weight 400 / line-height 1.4
Body Size: 12–14px / weight 400 / line-height 1.7
Base Size: 16px / weight 400 / line-height 1.5
CTA Size: 16px / weight 400

Button Radius: 0px（完全矩形）
Letter Spacing: normal（全要素）
```

### プロンプト例

```
SUQQU のデザインシステムに従って、商品一覧ページを作成してください。
- ヘッダー: bg #000000、テキスト #ffffff
- セクション見出し: 明朝体（Shippori Mincho）34px / weight 400
- 商品名: ゴシック体（Zen Kaku Gothic New）13px
- 本文: ゴシック体（Zen Kaku Gothic New）14px / line-height 1.7
- CTA ボタン: bg #000000、text #ffffff、radius 0px（完全矩形）
- カード: 背景 #ffffff、ボーダーなし、影なし
- ページ背景: #ffffff
- letter-spacing: normal（全要素）
- palt: 不使用
```
