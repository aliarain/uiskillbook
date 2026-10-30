# DESIGN.md — SEKISUI HOUSE（積水ハウス）

> SEKISUI HOUSE（https://www.sekisuihouse.co.jp/）のデザイン仕様書。
> 日本最大級のハウスメーカー。注文住宅・分譲住宅・賃貸住宅・リフォームを展開。
> 実サイトの computed style 実測（2026-05-26 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ほぼモノクロームの抑制されたカラーパレットに、ダークチャコール `#3b3b41` を唯一のアクセントとして使う**静謐で上質な住宅ブランド**の佇まい。派手なブランドカラーを持たず、タイポグラフィと余白で品格を表現する
- **密度**: 本文の line-height は 1.6、見出しは 1.3 とタイト。ゆとりのある余白とセクション分割でコンテンツを呼吸させる
- **キーワード**: 静謐、上質、モノクローム、游ゴシック体 Pr6N、住宅ブランドの品格
- **特徴**:
  - 和文フォントに **TypeSquare（モリサワ）ホスティングの游ゴシック体 Pr6N**（Medium / Bold）を採用。標準の游ゴシックとは異なる Pr6N バリアントで、収録グリフ数が多くプレミアム感がある
  - **ブランドカラーと呼べる彩度の高い色を持たない**。ダークチャコール `#3b3b41` が CTA・フッター・バッジに使われ、事実上のブランドカラーとして機能する
  - テキストカラーは `#242424`（ウォームブラック）。`#000000` 純黒は使わない
  - サブテキストに `#747480`（クールグレー）を使用。R=G < B のクール寄りで、住宅ブランドの落ち着きを演出
  - セクション背景に `#f7f7f7` / `#f4f4f4` の微差グレーを使い分け、面の階層を作る
  - 見出しの letter-spacing `0.05em`（42px ディスプレイ時）が上品な字間を生む
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Accent

- **Dark Charcoal** (`#3b3b41`): 事実上のブランドカラー。主要 CTA "注文住宅について知る" の背景、フッター背景、NEW バッジ背景。RGB(59, 59, 65) — 純黒ではなく青みを帯びたチャコール
- **Group Companies Dark** (`#3c3b40`): グループ企業セクション背景。RGB(60, 59, 64) — Dark Charcoal とほぼ同一だが微差あり

### Neutral — Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#242424` | (36, 36, 36) | 本文テキスト（ウォームブラック） |
| Text Secondary | `#747480` | (116, 116, 128) | 補助テキスト・見出しアクセント（**クール傾向**: B>R=G） |
| Surface Light | `#f7f7f7` | (247, 247, 247) | セクション背景（メイン） |
| Surface Card | `#f4f4f4` | (244, 244, 244) | カード背景（企業ページ） |
| Separator | `#ebedef` | (235, 237, 239) | タブボタン背景 "建てる" "買う" "借りる" |
| Border | `#dddddd` | (221, 221, 221) | ページネーション、入力欄ボーダー |
| Badge Light | `#eeeeee` | (238, 238, 238) | English リンクバッジ背景 |
| Background | `#ffffff` | (255, 255, 255) | ページ背景 |

### CTA / Buttons

- **Primary CTA**: 背景 `#3b3b41` / 文字 `#ffffff` / radius `4px` / border `1px solid #3b3b41` / padding `15px 58px 15px 32px` / 15px / weight 400。右矢印アイコン付きの非対称パディングが特徴
- **Tag Pill**: 背景 transparent / 文字 `#ffffff` / border `1px solid #ffffff` / radius `50px` / padding `3px 20px` / 15px / weight 700。"土地活用" "まちづくり" 等のカテゴリタグ
- **NEW Badge**: 背景 `#3b3b41` / 文字 `#ffffff` / padding `4px 18px` / 12px / weight 700 / font-family Helvetica Neue

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。住宅系サイト向けに推奨する補完値:

- **Danger**: `#c62828` — 抑えたレッド
- **Success**: `#2e7d32` — 落ち着いたグリーン
- **Warning**: `#e65100` — 控えめなオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **游ゴシック体 Pr6N**（TypeSquare / モリサワ ホスティング）を最優先。M（Medium）と B（Bold）の 2 ウェイト使用
- **フォールバック**: `游ゴシック体` → `YuGothic` → `游ゴシック` → `Yu Gothic` → `Hiragino Kaku Gothic ProN` → `Hiragino Sans` → `Meiryo` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- フォールバックチェーンの末尾に `Helvetica Neue` → `Arial` を含む
- NEW バッジ等のラベル要素で `Helvetica Neue` を単独指定するケースあり
- 欧文は游ゴシック体 Pr6N の欧文グリフが優先される

### 3.3 font-family 指定

```css
/* 本文・見出し共通 */
font-family: "游ゴシック体 Pr6N M", 游ゴシック体, YuGothic, 游ゴシック,
  "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  Meiryo, "Helvetica Neue", Arial, sans-serif;

/* 見出し（Bold ウェイト使用時） */
font-family: "游ゴシック体 Pr6N B", 游ゴシック体, YuGothic, 游ゴシック,
  "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans",
  Meiryo, "Helvetica Neue", Arial, sans-serif;

/* ラベル・バッジ（欧文専用） */
font-family: "Helvetica Neue", Arial, sans-serif;
```

**フォールバックの考え方**:
- TypeSquare の游ゴシック体 Pr6N を最優先。M（Medium, 400相当）と B（Bold, 700相当）を font-family 自体で切り替える方式
- Pr6N 不在時はシステムの游ゴシック → ヒラギノ → メイリオの順でフォールバック
- 欧文フォントはチェーン末尾。游ゴシック体の欧文グリフが先に適用される設計

> **代替フォント注記**: 游ゴシック体 Pr6N は TypeSquare のドメインライセンスのため、preview.html やローカル環境では表示されない。標準の**游ゴシック / YuGothic**（macOS / Windows にプリインストール）が最も近い代替となる。Google Fonts の Noto Sans JP でも代用可能だが、游ゴシックの方が字面の雰囲気が近い。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・企業ページ、2026-05-26 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero Display | 游ゴシック体 Pr6N B | 42px | 700 | 54.6px (x1.3) | 2.1px (0.05em) | `#242424` | ヒーロー見出し |
| Section H2 | 游ゴシック体 Pr6N B | 28px | 700 | — | 0.59px (0.02em) | `#242424` | セクション見出し |
| Sub H2 | 游ゴシック体 Pr6N B | 22px | 700 | — | — | `#242424` | サブ見出し |
| H3 Main | 游ゴシック体 Pr6N B | 28px | 700 | — | — | `#242424` | カード・記事内見出し |
| H3 Medium | 游ゴシック体 Pr6N B | 22px | 700 | — | — | `#242424` | 中見出し |
| H3 Small | 游ゴシック体 Pr6N B | 18px | 700 | — | — | `#242424` | 小見出し |
| Heading Accent | 游ゴシック体 Pr6N B | 18px | 700 | — | 2.1px (0.05em) | `#747480` | セクションラベル |
| Sub Heading Span | 游ゴシック体 Pr6N B | 31px | 700 | — | 0.62px (0.02em) | `#ffffff` | ダーク面上の見出し |
| Body | 游ゴシック体 Pr6N M | 15px | 400 | 24px (x1.6) | — | `#242424` | 本文 |
| Nav | 游ゴシック体 Pr6N B | 15px | 700 | 30px (x2.0) | — | `#242424` | グローバルナビゲーション |
| Footer Link | 游ゴシック体 Pr6N B | 12px | 700 | — | — | `#ffffff` | フッターリンク |
| Company H1 | 游ゴシック体 | 24px | 700 | — | 1.42px (0.06em) | `#ffffff` | 企業ページ見出し（ダーク面上） |
| NEW Badge | Helvetica Neue | 12px | 700 | — | — | `#ffffff` | NEW バッジラベル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.6`（15px 本文で 24px）。日本語として標準的
- **見出しの行間**: `1.3`（42px ヒーローで 54.6px）。タイトに詰めて力強さを出す
- **ナビの行間**: `2.0`（15px で 30px）。タッチターゲット確保のため広め
- **本文の字間 (letter-spacing)**: なし（normal）。本文は字間を加えない
- **見出しの字間**: `0.05em`（ディスプレイ 42px 時）/ `0.02em`（セクション見出し 28px 時）。見出しのみ上品に字間を開ける

**ガイドライン**:
- 見出しの letter-spacing はサイズに応じて段階的に（大きいほど広く）。`0.05em` → `0.02em`
- 本文には letter-spacing を適用しない（游ゴシック体 Pr6N 自体のデフォルトメトリクスで十分）
- ナビは line-height: 2.0 でタッチ操作に対応

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
/* 游ゴシック体 Pr6N はデフォルトで palt 非適用 */
font-feature-settings: normal;
```

- **palt**: 実測では適用されていない。游ゴシック体 Pr6N のデフォルトメトリクスをそのまま使用
- 見出しに `palt` を適用する場合はデザイン判断で

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#3b3b41`
- Text: `#ffffff`
- Padding: `15px 58px 15px 32px`（右矢印アイコン分の非対称パディング）
- Border: `1px solid #3b3b41`
- Border Radius: `4px`
- Font Size: `15px`
- Font Weight: `400`

**Tag Pill**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Border Radius: `50px`（pill 形状）
- Padding: `3px 20px`
- Font Size: `15px`
- Font Weight: `700`

**Search Suggest**
- Background: `#ffffff`
- Text: `#242424`
- Padding: `8px 15px`
- Border Radius: `0`
- Font Size: `15px`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Border Radius: `3px`
- Padding: `8px`
- Font Size: `13px`

### Cards

**Feature Card**
- Background: `#ffffff`
- Border: `4px solid #ffffff`
- Border Radius: `6px`
- Padding: `30px 32px`

**Surface Card**
- Background: `#f4f4f4`
- Border: none
- Border Radius: `6px`
- Padding: `30px 32px`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 32px |
| XL | 48px |
| XXL | 80px |

### Container

- Max Width: `1200px`（推定）
- Padding (horizontal): `32px`

### Grid

- Columns: `3`（デスクトップ、カードレイアウト）
- Gutter: `24px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（基本状態） |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | カード、ドロップダウン |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | ホバー状態のカード |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル、フローティング要素 |

> 積水ハウスのサイトはフラットデザインが基調。影の使用は控えめで、面の色差（白 vs `#f7f7f7`）で階層を表現することが多い。

---

## 7. Do's and Don'ts

### Do（推奨）

- ダークチャコール `#3b3b41` は CTA・フッター・バッジに限定して使用する。面のアクセントとして品よく配置する
- テキストカラーは `#242424`（ウォームブラック）を使う。`#000000` は使わない
- 見出しの letter-spacing はサイズに応じて段階的に設定する（大きいほど広く）
- セクション背景に `#f7f7f7` を使い、白との交互配置でリズムを作る
- CTA の右矢印パターン（右パディング広め）で次のアクションへの導線を示す
- font-family は游ゴシック体 Pr6N の M / B 切り替えで太さを制御する

### Don't（禁止）

- 彩度の高いブランドカラー（ブルー、レッド等）を追加しない。モノクロームの品格が崩れる
- 本文に letter-spacing を加えない。游ゴシック体のデフォルトメトリクスで十分
- `#000000`（純黒）をテキストに使わない。`#242424` を使う
- 見出しの line-height を 1.5 以上にしない。1.3 のタイトな行間が積水ハウスのトーン
- カードに強い box-shadow を使わない。面色の差（白 / `#f7f7f7` / `#f4f4f4`）で階層を表現する
- ボタンの radius を `8px` 以上にしない。`4px` の控えめな角丸が正解

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- ナビの line-height: 2.0（30px）はタッチ操作を考慮

### フォントサイズの調整

- モバイルでは Hero Display を 42px → 28px 程度に縮小
- 本文 15px はモバイルでも維持
- Section H2 は 28px → 22px 程度に

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color (CTA): #3b3b41
Text Color: #242424
Text Secondary: #747480
Background: #ffffff
Surface: #f7f7f7
Border: #dddddd
Font (Body): "游ゴシック体 Pr6N M", 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, "Helvetica Neue", Arial, sans-serif
Font (Heading): "游ゴシック体 Pr6N B", 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, "Helvetica Neue", Arial, sans-serif
Body Size: 15px / line-height: 1.6
Heading letter-spacing: 0.05em (display) / 0.02em (section)
CTA Radius: 4px
Card Radius: 6px
```

### プロンプト例

```
積水ハウスのデザインシステムに従って、住宅プラン一覧ページを作成してください。
- テキストカラー: #242424（ウォームブラック、純黒 #000000 は不可）
- CTA: 背景 #3b3b41、白文字、radius 4px、右矢印付き
- フォント: 游ゴシック体 Pr6N M / B（フォールバック: 游ゴシック, YuGothic, Hiragino Sans）
- 見出し: letter-spacing 0.05em、line-height 1.3、weight 700
- 本文: 15px、line-height 1.6、letter-spacing なし
- セクション背景: 白 #ffffff と #f7f7f7 の交互配置
- カード: radius 6px、影は控えめまたはなし
- 全体のトーン: モノクローム、彩度の高い色は使わない
```
