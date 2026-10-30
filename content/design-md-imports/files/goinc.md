# DESIGN.md — GO株式会社（GO Inc.）

> GO株式会社（https://goinc.jp/）のデザイン仕様書。
> タクシーアプリ「GO」などを展開する日本のモビリティテック企業（旧 Mobility Technologies）。
> タグライン「移動で人を幸せに。」。クリーンで信頼感のあるコーポレート／プロダクトデザイン。
> 実サイトの computed style 実測（2026-06-27 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白基調のクリーンで信頼感のあるコーポレート／プロダクトデザイン**。ページ背景は純白 `#ffffff`、セクション地に off-white `#fbfbfb` / `#f9f9f9` を敷き、テキストは `#222222`。フォントは **Noto Sans JP のみに統一**（明朝・欧文専用フォントを使わない）。アクセントは **GO ブルー `#2d68ae`** とディープネイビー `#01034f`。装飾を抑え、堂々とした大見出しと整った数字組みで「移動インフラを担う企業」の信頼感を出す
- **GO について**: タクシーアプリ「GO」を中核に、AI 配車・脱炭素・交通 DX を手がけるモビリティテック企業。サイトはニュース／プレスリリース／事業紹介が中心の**コーポレート型**。プロダクト写真と数字（KPI・実績）を端正に見せる構成
- **密度**: 中密度。セクション大見出し `h2` を **48px / 700** と大きく堂々と置き、本文は **16px / line-height 1.7** とゆったり読ませる。アイブロウ（小見出しラベル）は **0.16em** の広いトラッキングで端正に
- **キーワード**: クリーン、信頼感、白基調、GO ブルー、堂々とした大見出し、ピル型 CTA、数字組み（lnum/pnum）
- **特徴**:
  - フォントは **`"Noto Sans JP", sans-serif` のみ**。明朝も欧文専用フォントも使わず、和欧すべて Noto Sans JP で組む
  - **`font-feature-settings: "lnum", "pnum"` がサイト全域に適用**（ライニング数字＋プロポーショナル数字）。日付・KPI・年号などの数字を美しく見せる、GO の実装上の大きな特徴
  - **CTA はピル型（border-radius 26px）のアウトラインボタン**。透明地＋`1px solid #222`、左右に丸い矢印アイコンを持つため padding が非対称
  - アクセントは **GO ブルー `#2d68ae`**（リンク・主要アクセント）、プレス系タグ地 `#265893`、ディープネイビー `#01034f`（濃色の面・フッター）
  - 本文・補足はグレースケール（`#222222` / 補足 `#888b8c`）で端正に。色数を絞り信頼感を出す
  - ダークモード非対応（実測時点。濃紺 `#01034f` の面が部分的に存在）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値（rgb → hex 変換済み）。基調は白＋グレースケール、アクセントに GO ブルーとディープネイビー。

### Brand / Accent

- **GO Blue** (`#2d68ae`／rgb 45,104,174): リンク・主要アクセント。最も使われるブランド色
- **Press Tag Blue** (`#265893`／rgb 38,88,147): プレスリリースのタグ地（濃いめのブルー）
- **Deep Navy** (`#01034f`／rgb 1,3,79): 濃紺の面・フッター・強調ブロック等のダークサーフェス

### Neutral / Text

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#222222` | (34, 34, 34) | 見出し・本文・ナビの主要テキスト |
| Text Secondary | `#888b8c` | (136, 139, 140) | 補足・メタ・日付・キャプション |
| Background (Main) | `#ffffff` | (255, 255, 255) | ページ背景・メインキャンバス |
| Surface (off-white) | `#fbfbfb` | (251, 251, 251) | セクション地・カードの薄い面 |
| Surface (off-white 2) | `#f9f9f9` | (249, 249, 249) | 交互セクション地・入力欄の薄い面 |
| White (on dark) | `#ffffff` | (255, 255, 255) | 濃紺面上のテキスト |

### Semantic（推奨値）

実サイトに明確なエラー／成功色は確認されなかった（アクセントは GO ブルー系のみ）。クリーンなトーンを崩さない範囲で推奨する補完値:

- **Danger**: `#c0392b`（落ち着いた赤。エラー枠・バリデーション）
- **Success**: `#2d68ae`（GO ブルーで完了を示す）／チェックアイコンで表現
- **Link / Link Hover**: `#2d68ae` → ホバーは `#265893`（プレスタグの濃いブルーへ寄せる）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **Noto Sans JP** のみ（`"Noto Sans JP", sans-serif`）。和文はすべて Noto Sans JP で描画する
- **明朝体**: 使用しない（全面ゴシック）
- weight は **400（本文・リンク）／ 600〜700（見出し・ラベル・強調）／ 900（必要に応じた極太見出し）** を使い分ける

### 3.2 欧文フォント

- **欧文専用フォントは使わない**。英字・数字も **Noto Sans JP** の欧文グリフで組む（Helvetica 等を先頭に置かない）
- 数字は後述の **lnum / pnum**（ライニング＋プロポーショナル）で美しく見せる
- **等幅**: `SFMono-Regular, Consolas, Menlo, monospace`（コード／トークン表記用）

### 3.3 font-family 指定

```css
/* 全テキスト共通 */
font-family: "Noto Sans JP", sans-serif;

/* 数字を美しく組む（サイト全域に適用） */
font-feature-settings: "lnum", "pnum";

/* 等幅（コード等） */
font-family: SFMono-Regular, Consolas, Menlo, monospace;
```

**フォールバックの考え方**:
- 和文・欧文・数字をすべて **Noto Sans JP** に統一する（フォント切替による字面のばらつきを避ける）
- 最後に `sans-serif` を generic family として置く
- Noto Sans JP は Google Fonts で配信されるため、**400 / 700 / 900**（必要なら 600）を読み込む。`300` は不要

> **preview.html での注記**: 実サイトと同じく Noto Sans JP を Google Fonts から読み込む。`font-feature-settings: "lnum", "pnum"` を `body` に適用して数字組みを再現する。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-27 取得）。**h2 48px / 700**（大きく堂々と）と **本文 16px / line-height 1.7 / letter-spacing 0.04em** が核。letter-spacing は px → em 換算（例: 1.92px / 48px = 0.04em）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page Title (h1) | Noto Sans JP | 32px | 700 | 1.4（推奨） | normal | `#222222` | ページタイトル |
| Section Heading (h2) | Noto Sans JP | 48px | 700 | 1.4〜1.5（67〜72px） | 0.04em（1.92px） | `#222222` | セクション大見出し（堂々と） |
| Body (p) | Noto Sans JP | 16px | 400 | 1.7（27.2px） | 0.04em（0.64px） | `#222222` | 標準本文 |
| Body / Nav (a) | Noto Sans JP | 16px | 400〜700 | 2.0（32px） | normal〜0.04em | `#2d68ae` | リンク・ナビ（GO ブルー） |
| Eyebrow / Label (span) | Noto Sans JP | 14px | 700 | 1.4（推奨） | 0.16em（2.24px） | `#222222` | アイブロウ（広いトラッキング） |
| Tag on Dark (span) | Noto Sans JP | 11px | 600 | 1.4（推奨） | 0.15em（1.65px） | `#ffffff`（`#265893` 地） | 濃色地のタグラベル |
| List Item (li) | Noto Sans JP | 16px | 400 | 1.4（22.4px） | 0.04em（0.64px） | `#222222` | リスト本文 |
| Meta / Caption (p) | Noto Sans JP | 12px | 700 | 1.4（推奨） | normal | `#888b8c` | 小・メタ・日付・補足 |
| List Meta (li) | Noto Sans JP | 12px | 700 | 1.4（推奨） | normal | `#888b8c` | リスト内のメタ |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (16px)**: `1.7`（27.2px。ゆったり読ませる日本語本文）
- **リンク・ナビ (16px)**: `2.0`（32px。クリックしやすく行間を確保）
- **大見出し h2 (48px)**: `1.4〜1.5`（67〜72px）
- **リスト (16px)**: `1.4`（22.4px）

**字間 (letter-spacing)** — 実測:
- **本文・見出し・リスト**: `0.04em`（本文 0.64px / 48px 見出し 1.92px）。やや開けて端正に
- **アイブロウ／ラベル (14px)**: `0.16em`（2.24px）。広いトラッキングでラベルらしく
- **濃色地タグ (11px)**: `0.15em`（1.65px）

**ガイドライン**:
- 本文は **16px / line-height 1.7 / letter-spacing 0.04em** が基準。日本語をゆったり読ませる
- 大見出しは **48px / 700 / letter-spacing 0.04em** で堂々と。詰めすぎない
- アイブロウ（"NEWS" "ABOUT" 等の小見出しラベル）は **0.16em** の広いトラッキングで他要素と差をつける

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`
- 長い英数字（URL・型番）は `overflow-wrap: break-word` で折り返す
- サービス名「GO」は欧文 2 文字。途中で折り返さない（`white-space: nowrap` 推奨）

### 3.7 OpenType 機能

```css
/* サイト全域に適用（GO の特徴） */
font-feature-settings: "lnum", "pnum";
```

- **lnum（ライニング数字）**: 数字をベースラインに揃った大文字高さで組む。日付・年号・KPI が整列して見える
- **pnum（プロポーショナル数字）**: 数字を等幅ではなく字幅に応じて詰める。本文中の数字が自然に流れる
- GO は **このペアをサイト全域に適用**しており、数字組みの美しさがブランドの実装的特徴。**必ず明記・再現する**
- `palt` は未採用（letter-spacing で字間を制御）

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

> 実測値。CTA は**ピル型（border-radius 26px）のアウトライン**が基調。

### Buttons / CTA

**Primary Pill Outline Button（実測）** — "GOについて知る" 等（左にアイコン）
- Background: `transparent`
- Text: `#222222`（Noto Sans JP 16px / weight 400）
- Border: `1px solid #222222`
- Border Radius: `26px`（ピル型）
- Padding: `6.5px 24px 6.5px 68px`（**左に丸い矢印アイコン**を持つため左 padding が大きい非対称）
- Hover（推奨）: 塗り反転 — background `#222222` / text `#ffffff`

**Primary Pill Outline Button（実測・右アイコン）** — "ニュース一覧" 等
- Background: `transparent`
- Text: `#222222`（16px / weight 400）
- Border: `1px solid #222222`
- Border Radius: `26px`
- Padding: `6.5px 84px 6.5px 24px`（**右に丸い矢印アイコン**を持つため右 padding が大きい非対称）
- Hover（推奨）: 塗り反転 — background `#222222` / text `#ffffff`

**Accent / Navy Solid Button（推奨）** — 強調 CTA
- Background: `#01034f`（ディープネイビー）または `#2d68ae`（GO ブルー）
- Text: `#ffffff`（16px / weight 700）
- Border: なし
- Border Radius: `26px`（ピルを維持）
- Padding: `12px 32px`（アイコンなしなら左右対称）
- Hover（推奨）: わずかに暗く（opacity 0.9）

### Tag / Badge

**Press Tag（実測）** — プレスリリースの分類タグ
- Background: `#265893`（または `#2d68ae`）
- Text: `#ffffff`（11px / weight 600 / letter-spacing 0.15em）
- Padding: `4px 12px`（推奨）
- Border Radius: `4px`（角を少しだけ。CTA のピルとは区別）

### Inputs

**Text Input（推奨）**
- Background: `#ffffff`（または `#f9f9f9`）
- Border: `1px solid #d9d9d9`
- Border Radius: `8px`（フォームは控えめな角丸。CTA のピルは使わない）
- Padding: `12px 14px`
- Font: 16px / weight 400 / `#222222`
- Focus: border `#2d68ae`（GO ブルー）＋薄いリング `0 0 0 3px rgba(45,104,174,0.15)`
- Error: border `#c0392b`

### Cards / Surfaces

**News / Service Card（推奨）**
- Background: `#ffffff`（off-white `#fbfbfb` の地に置く）
- Border: `1px solid #eeeeee`（または影 Level 1）
- Border Radius: `8px`
- Padding: `24px`
- 構成: アイブロウ（"NEWS" など 14px / 700 / 0.16em）→ 見出し → 本文 → 日付（12px / 700 / `#888b8c`）。プレスカードには `#265893` のタグを添える

**Dark Surface（実測・濃紺面）**
- Background: `#01034f`（ディープネイビー）
- 見出し・本文: `#ffffff`
- タグ: `#265893` 地に白文字（11px / 600 / 0.15em）

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ラベル内側・アイコン間 |
| S | 8px | 小要素間 |
| M | 16px | 要素間・本文段落間 |
| L | 24px | カード内余白 |
| XL | 48px | ブロック間 |
| XXL | 96px | セクション間の大きな縦余白 |

### Container

- Max Width: `1120〜1200px`（推奨）
- Padding (horizontal): mobile `20px` / desktop `40px`
- セクションごとに白 `#ffffff` と off-white `#fbfbfb` / `#f9f9f9` を交互に敷いてリズムを作る

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Pill | 26px | **CTA ボタン（ピル型）** |
| Card | 8px | カード・入力欄 |
| Tag | 4px | タグ・バッジ |
| None | 0px | フルブリードの面・区切り |

### Grid

- Columns: 推奨 12 カラム
- Gutter: 24px
- ニュース／サービスカード: 3列（desktop）→ 2列（tablet）→ 1列（mobile）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 基本（白／off-white の面差で表現） |
| 1 | `0 1px 3px rgba(0,0,0,0.06)` | カード・ニュース項目 |
| 2 | `0 4px 16px rgba(0,0,0,0.08)` | ホバー時のカード・ドロップダウン |
| 3 | `0 12px 32px rgba(0,0,0,0.12)` | モーダル・ダイアログ |

- 基調は**フラット寄り**。立体感は主に **白 `#ffffff` と off-white `#fbfbfb` / `#f9f9f9` の面差**と、濃紺 `#01034f` のダークサーフェスで表現する
- 影を使う場合もごく薄く（クリーンさを保つ）。GO ブルーの強い影は使わない

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **`"Noto Sans JP", sans-serif`** に統一する（和文・欧文・数字すべて）
- **`font-feature-settings: "lnum", "pnum"` を全域に適用**し、数字（日付・年号・KPI）を美しく組む
- 本文は **16px / line-height 1.7 / letter-spacing 0.04em / color #222222** で組む
- セクション大見出し h2 は **48px / 700 / letter-spacing 0.04em** と大きく堂々と置く
- アイブロウ（小見出しラベル）は **14px / 700 / letter-spacing 0.16em** の広いトラッキングにする
- ページ背景は白 `#ffffff`、セクション地に off-white `#fbfbfb` / `#f9f9f9` を交互に敷く
- CTA は**ピル型（border-radius 26px）のアウトライン**（透明地＋`1px solid #222`、矢印アイコンで非対称 padding）。ホバーで塗り反転
- アクセントは **GO ブルー `#2d68ae`**（リンク）、`#265893`（タグ）、`#01034f`（濃紺面）に限定する
- 補足・メタは `#888b8c`（12px / 700）で控えめに

### Don't（禁止）

- **明朝体や欧文専用フォント（Helvetica 等）を先頭に置かない**（Noto Sans JP に統一する）
- **`lnum` / `pnum` を外さない**（GO の数字組みの特徴。数字が等幅になると印象が崩れる）
- 本文を **line-height 1.5 未満に詰めない**（日本語本文は 1.7 が基準）
- 大見出しを小さく組まない（h2 は 48px / 700 で堂々と）
- **CTA を直角や強い塗りの長方形にしない**（ピル型 radius 26px のアウトラインが基調）
- アクセント色を増やさない（GO ブルー系＋濃紺のみ。多色化しない）
- テキストに純黒 `#000000` を使わない（`#222222` を使う）
- アイブロウのトラッキングを詰めない（0.16em を保つ）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム、ナビ折りたたみ |
| Tablet | 768px〜1023px | タブレット。2カラムグリッド |
| Desktop | ≥ 1024px | デスクトップ。3カラムグリッド |

### モバイル時の調整

- Section Heading h2: 48px → 28〜32px（堂々さは保ちつつ収める）
- 本文 16px / line-height 1.7 は維持
- カード: 3列 → 2列 → 1列
- ピル CTA は横幅いっぱいに伸ばしてもよい（radius 26px・非対称 padding は維持）
- アイブロウ 14px / 0.16em は維持

### タッチターゲット

- ピル CTA: 高さ 44px 以上
- ナビ項目・リンク: 高さ 44px 以上（line-height 2.0 で確保済み）
- カード: カード全体をタップ可能に

### ダークモード

- 該当なし（実測時点で未対応。濃紺 `#01034f` のダークサーフェスが部分的に存在する）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #222222
Text Secondary: #888b8c
Background (Main): #ffffff
Surface (off-white): #fbfbfb / #f9f9f9

GO Blue (accent / link): #2d68ae
Press Tag Blue: #265893
Deep Navy (dark surface): #01034f

Font: "Noto Sans JP", sans-serif（和文・欧文・数字すべて統一）
font-feature-settings: "lnum", "pnum"（全域・GO の特徴）
Mono: SFMono-Regular, Consolas, Menlo, monospace

Page Title (h1): 32px / weight 700 / #222
Section Heading (h2): 48px / weight 700 / line-height 1.4-1.5 / letter-spacing 0.04em / #222
Body (p): 16px / weight 400 / line-height 1.7 / letter-spacing 0.04em / #222
Link / Nav (a): 16px / weight 400-700 / line-height 2.0 / #2d68ae
Eyebrow / Label: 14px / weight 700 / letter-spacing 0.16em / #222
Tag on Dark: 11px / weight 600 / letter-spacing 0.15em / #fff on #265893
List (li): 16px / weight 400 / line-height 1.4 / letter-spacing 0.04em
Meta / Caption: 12px / weight 700 / #888b8c

Primary Pill Outline CTA: transparent / text #222 / border 1px #222 / radius 26px
  ・左アイコン: padding 6.5px 24px 6.5px 68px
  ・右アイコン: padding 6.5px 84px 6.5px 24px
  ・hover: 塗り反転（bg #222 / text #fff）
Navy Solid CTA: bg #01034f or #2d68ae / text #fff / weight 700 / radius 26px
Tag: bg #265893 / text #fff / radius 4px
Input: bg #fff / border 1px #d9d9d9 / radius 8px / focus border #2d68ae
Card: bg #fff on #fbfbfb / radius 8px / 影は薄く
Radius: pill 26px / card 8px / tag 4px
Shadow: ごく薄く（フラット寄り。面差と濃紺サーフェスで奥行きを出す）
```

### プロンプト例

```
GO株式会社（GO Inc.）のデザインシステムに従って、ニュース一覧セクションを作成してください。
- フォント: "Noto Sans JP", sans-serif（和文・欧文・数字すべて統一。明朝・欧文専用フォントは使わない）
- font-feature-settings: "lnum", "pnum" を body に適用（数字を美しく組む。GO の特徴）
- ページ背景は白 #ffffff、セクション地に off-white #fbfbfb を敷く
- 本文: 16px / weight 400 / line-height 1.7 / letter-spacing 0.04em / color #222222
- セクション大見出し: 48px / weight 700 / letter-spacing 0.04em / #222222（堂々と）
- 各カード上部のアイブロウ "NEWS": 14px / weight 700 / letter-spacing 0.16em / #222222
- 日付・メタ: 12px / weight 700 / color #888b8c
- リンクは GO ブルー #2d68ae、line-height 2.0
- 「ニュース一覧」CTA はピル型アウトライン: transparent / 1px solid #222 / border-radius 26px /
  右に矢印アイコン（padding 6.5px 84px 6.5px 24px）。ホバーで塗り反転（bg #222 / text #fff）
- プレス分類タグは #265893 地に白文字（11px / weight 600 / letter-spacing 0.15em / radius 4px）
- カードは白地・radius 8px・影はごく薄く。アクセントは GO ブルー系＋濃紺 #01034f のみ
```
