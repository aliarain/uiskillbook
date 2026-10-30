# DESIGN.md — ZOZO（ゾゾ）

> ZOZO（https://corp.zozo.com/）のデザイン仕様書。
> 日本最大級のファッション EC「ZOZOTOWN」を運営するテクノロジー企業。
> 実サイトの computed style 実測（2026-05-15 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調に、**Morisawa Gothic MB101 のウェイト使い分け**（Light / Medium / DemiBold）で情報の階層を表現。英文見出しには自社書体 **zozogothic bold** を使い、ファッション企業としてのブランド資産を前面に出す
- **密度**: 本文 20px・line-height 1.25 とやや詰めた組み。コーポレートサイトとして余白を大きく取り、セクションごとにフルブリード画像で区切るエディトリアル構成
- **キーワード**: ファッション、クリーン、エディトリアル、Gothic MB101、zozogothic、白基調
- **特徴**:
  - 和文フォントに **Gothic MB101**（Morisawa Adobe Fonts）のウェイトファミリーを採用。Light（本文）/ Medium（ナビ・小見出し）/ DemiBold（日付ラベル・CTA）を使い分ける
  - 英文見出し "NEWS", "RECRUIT" 等には自社ブランド書体 **zozogothic bold** を 50px で使用
  - ブランドカラーは **レッド `#c7161d`**（プレスリリースバッジ）と **ネイビー `#0f367a`**（社会貢献セクション背景）の2色アクセント
  - サーフェスに**ベージュ `#efece5`**（ウォーム）を使い、白 `#ffffff` との階層をつくる
  - ボタンは **pill（radius 50px）** で白ボーダー or ネイビー背景。ゴースト寄りの控えめな CTA
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Red** (`#c7161d`): プレスリリースのカテゴリバッジ背景、NEW ラベルの文字色。ZOZO のコーポレートレッド
- **Brand Navy** (`#0f367a`): 社会貢献活動セクションの pill ラベル背景（「社会貢献活動」テキスト）

### CTA / Buttons

- **Pill Ghost (White)**: 背景 `transparent` / 文字 `#ffffff` / border `1px solid #ffffff` / radius `50px` / 13px / weight 700（zozogothic bold）
- **Pill Filled (Navy)**: 背景 `#0f367a` / 文字 `#efece5` / radius `20px` / padding `10px 62px` / 21px / weight 600（Gothic MB101 DemiBold）
- **Language Selector**: 背景 `transparent` / 文字 `#1e1e1e` / radius `15px` / 11px / weight 500

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#1e1e1e` | (30, 30, 30) | 見出し・本文テキスト |
| Black | `#000000` | (0, 0, 0) | ハンバーガーメニューテキスト |
| Gray | `#808080` | (128, 128, 128) | 日付テキスト |
| Surface Warm | `#efece5` | (239, 236, 229) | 社会貢献セクション背景（ウォームベージュ） |
| Surface Light | `#f0f0f0` | (240, 240, 240) | RECRUIT セクション背景 |
| Surface Neutral | `#f8f6f5` | (248, 246, 245) | サステナビリティセクション背景 |
| Background | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

- **Danger**: `#c7161d`（Brand Red を流用）
- **Success**: `#16a34a`
- **Warning**: `#d97706`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Gothic MB101**（Morisawa Adobe Fonts）をウェイト違いで使い分け
  - **Light** (weight 400): 本文・フッター
  - **Medium** (weight 500): ナビゲーション・小見出し・ニュースタイトル
  - **DemiBold** (weight 600): 日付ラベル・カテゴリバッジ・セクション見出し
- **フォールバック**: `ヒラギノ角ゴ ProN W3` → `Hiragino Kaku Gothic ProN` → `メイリオ` → `Meiryo` → `Verdana` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **zozogothic bold**: 自社ブランド書体。セクション英文見出し（"NEWS", "RECRUIT", "ZOZO MEASUREMENT TECHNOLOGY" 等）に使用。weight 700、50px、line-height 1.0
- 欧文本文は Gothic MB101 の欧文グリフを使用（専用欧文書体なし）

### 3.3 font-family 指定

```css
/* 本文（Light） */
font-family: "Gothic MB101 Light", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, sans-serif;

/* ナビ・小見出し（Medium） */
font-family: "Gothic MB101 Medium", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, sans-serif;

/* ラベル・バッジ（DemiBold） */
font-family: "Gothic MB101 DemiBold", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, sans-serif;

/* 英文見出し */
font-family: "zozogothic bold";
```

**フォールバックの考え方**:
- Gothic MB101 は Adobe Fonts のため環境依存。フォールバックにヒラギノ角ゴ → メイリオ → Verdana の順
- ウェイトごとに font-family を切り替えるのが ZOZO の特徴（CSS font-weight ではなく font-family でウェイトを制御）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | zozogothic bold | 50px | 700 | 1.0 | normal | セクション英文見出し |
| Heading 1 | Gothic MB101 Medium | 35px | 500 | — | 0.02em | 会社名等 |
| Heading 2 | Gothic MB101 Medium | 30px | 500 | 1.24 | normal | 企業理念キャッチ |
| Heading 3 | Gothic MB101 Medium | 25px | 500 | — | normal | サブセクション見出し |
| Nav Title | Gothic MB101 Medium | 23px | 500 | 1.61 | 0.05em | ナビゲーション大項目 |
| Body | Gothic MB101 Light | 20px | 400 | 1.8 | 0.02em | 本文（About ページ） |
| Body Default | Gothic MB101 Light | 20px | 400 | 1.25 | normal | 本文（トップページ） |
| News Title | Gothic MB101 Medium | 14px | 500 | 1.7 | normal | ニュース記事タイトル |
| Date | Gothic MB101 DemiBold | 12px | 600 | 1.0 | normal | 日付ラベル |
| Caption | Gothic MB101 Medium | 12px | 500 | 1.25 | normal | キャプション |
| Small | Gothic MB101 Medium | 11px | 500 | 1.0 | 0.05em | 言語セレクタ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.25（トップページ）〜 1.8（About ページ）。ページの性格に応じて使い分け
- **見出しの行間**: 1.0（英文 Display）〜 1.24（和文見出し）
- **本文の字間 (letter-spacing)**: 0〜0.02em 程度。ZOZO は字間を控えめに設定
- **見出しの字間**: 0.02em〜0.075em。section heading は `1.575px / 21px = 0.075em` のゆったりとしたトラッキング

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` は使用していない（実測値）。Gothic MB101 のデフォルトメトリクスで組む方針

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（Pill Ghost White）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Padding: 1px 6px
- Border Radius: 50px
- Font: zozogothic bold / 13px / weight 700

**Secondary（Pill Filled Navy）**
- Background: `#0f367a`
- Text: `#efece5`
- Padding: 10px 62px 9px
- Border Radius: 20px
- Font: Gothic MB101 DemiBold / 21px / weight 600
- Letter Spacing: 0.075em

**Badge（Category Label）**
- Background: `#c7161d`
- Text: `#ffffff`
- Padding: 小
- Border Radius: なし
- Font: Gothic MB101 DemiBold / 12px / weight 600

### Cards

- Background: `#ffffff`
- Border: なし
- Shadow: なし（フラットデザイン）
- ニュースカードはボーダーレスのリスト形式

### Navigation

- Background: `#ffffff`（メイン）/ `#f5f5f5`（ドロワー）
- Logo: 画像ベース
- Menu button: テキスト「メニューを開く」/ Gothic MB101 Light / 20px
- Nav items: Gothic MB101 Medium / 14px / `#1e1e1e`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 5px |
| S | 10px |
| M | 15px |
| L | 25px |
| XL | 62px |

### Container

- Max Width: 1440px（推定・フルブリードセクション基準）
- Content Width: 記事エリアは中央寄せ

### Grid

- セクションごとにフルブリード画像 + テキストオーバーレイの構成
- ニュースリストは単カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素（フラットデザイン） |

- ZOZO コーポレートサイトはシャドウをほぼ使用しない。セクション間の区切りは背景色の切り替えと余白で表現

---

## 7. Do's and Don'ts

### Do（推奨）

- Gothic MB101 のウェイト使い分け（Light / Medium / DemiBold）で階層を表現する
- 英文見出しは zozogothic bold を使い、ブランドらしさを出す
- 背景色のウォーム（ベージュ）とクール（ライトグレー）を使い分けてセクションの性格を表現する
- ボタンは pill 形状で控えめに。ゴースト（ボーダーのみ）を基本とする
- フォントサイズは 20px 基準で、情報の重要度に応じて上下させる

### Don't（禁止）

- `font-weight` で太さを制御しない。ZOZO は `font-family` でウェイトを切り替える設計
- 彩度の高いアクセントカラーを多用しない。アクセントは Red `#c7161d` と Navy `#0f367a` の2色のみ
- シャドウを使わない。セクション区切りは背景色で表現する
- 英文見出しに Gothic MB101 を使わない。英文は zozogothic bold で統一
- 本文の line-height を 1.6 以上に広げない（ZOZO は詰めた組みが基本）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（推奨）

### フォントサイズの調整

- モバイルでは本文 16px 程度に縮小。見出しはデスクトップの 70% 程度に

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color (Red): #c7161d
Secondary Color (Navy): #0f367a
Text Color: #1e1e1e
Background: #ffffff
Surface Warm: #efece5
Font (Body): "Gothic MB101 Light", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Verdana, sans-serif
Font (Heading JP): "Gothic MB101 Medium" (or DemiBold)
Font (Heading EN): "zozogothic bold"
Body Size: 20px
Line Height: 1.25
```

### プロンプト例

```
ZOZOのデザインシステムに従って、ニュース一覧ページを作成してください。
- 英文セクション見出しは "zozogothic bold" 50px で
- ニュースタイトルは Gothic MB101 Medium 14px
- 日付は Gothic MB101 DemiBold 12px / #808080
- カテゴリバッジは背景 #c7161d / 白文字
- ボタンは pill 形状（border-radius: 50px）でゴースト or ネイビー塗り
```
