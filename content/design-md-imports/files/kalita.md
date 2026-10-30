# DESIGN.md -- Kalita (カリタ)

> Kalita 公式サイト (https://www.kalita.co.jp/) のデザイン仕様書。
> 1958年創業、横浜発のコーヒー機器総合メーカー。三つ穴ドリッパーに代表される「カリタ式」で知られる。
> グレー `#999999` のページ背景、シャープな直角コンポーネント、ゴーストボタンが特徴的な工業的デザイン。実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: インダストリアル・クラフツマンシップ。コーヒー器具メーカーとしての精密さ・道具感を、ミニマルなグレートーンと直線的なレイアウトで表現。派手さを排し、製品写真を主役にする設計
- **密度**: 大判の製品写真を全幅で展開するショーケース型。テキスト情報は控えめで、余白と写真で語る構成
- **キーワード**: インダストリアル、グレートーン、シャープ、ミニマル、道具的精密さ
- **特徴**: **ページ背景がグレー `#999999`** という日本のブランドサイトとしては極めて珍しい配色。オリーブ/カーキ `#a49e86` をアクセントに、`border-radius: 0px` を全コンポーネントに徹底。CTA はゴーストボタン（アウトラインのみ）で、塗りつぶしのプライマリ CTA を持たない。欧文には Questrial（ジオメトリック・サンセリフ）を使用し、道具としての精密さを演出

---

## 2. Color Palette & Roles

### Primary (ブランドカラー)

- **Olive / Khaki** (`#a49e86`): ヘッダーユーティリティバー、サポートセクションの背景。唯一の有彩色アクセント。コーヒー豆・木材を連想させるアースカラー
- **Page Gray** (`#999999`): body 背景。工業製品のような無機質さを演出するブランドの基調色

### Semantic (意味的な色)

- **Error** (`#cc0000`): フォームエラー（推定値。実サイトにフォームが少ないため標準値を採用）
- **Warning** (`#cc8800`): 警告・注意喚起（推定値）
- **Success** (`#339933`): 成功・完了（推定値）

### Neutral (ニュートラル)

- **Text Primary** (`#333333`): 本文テキスト。純黒を避けたソフトな黒
- **Text Secondary** (`#666666`): 補足テキスト、説明文
- **Text Tertiary** (`#888888`): セクション見出し（トップページ）、ボーダー色と同系
- **Text Light** (`#aaaaaa`): フッターテキスト、コピーライト
- **Text on Dark** (`#ffffff`): ヒーロー・製品セクション上の白テキスト
- **Border** (`#888888`): "Read More" ボタンの枠線、区切り線
- **Background Primary** (`#999999`): ページ背景（body）
- **Background Light** (`#eeeeee`): ニュースセクション、ハンドドリップ案内の面色
- **Background White** (`#ffffff`): フッター、カードの背景
- **Surface Warm** (`#eeece3`): 検索入力欄の背景。わずかにクリーム寄りのウォームグレー
- **Dark Overlay** (`rgba(0,0,0,0.2)`): 製品写真オーバーレイ

> **Note**: Kalita の配色は**グレーのモノトーン + オリーブ**の2軸。鮮やかな原色は使わない。`#a49e86` のオリーブ/カーキだけが有彩色のアクセントとして存在し、コーヒーの温もりを最小限に添える。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: ヒラギノ角ゴ Pro W3 → メイリオ → ＭＳ Ｐゴシック。**ヒラギノは "Pro"（ProN ではない）**
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **Questrial**: Google Font のジオメトリック・サンセリフ。ヘッダーユーティリティ（"Go to Global site", "Online Shop"）、"Read More" CTA、フッター copyright に使用。道具的な精密さを表現
- **フォールバック欧文**: ヒラギノ角ゴ Pro W3 内蔵の欧文グリフ（明示的な欧文フォント指定なし）

### 3.3 font-family 指定

```css
/* 本文・見出し共通 — 和文ファースト */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;

/* 欧文 CTA・ユーティリティ — Questrial を先頭に追加 */
font-family: Questrial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif;
```

**フォールバックの考え方**:
- 和文フォントを先に指定する和文ファースト構成。ヒラギノ角ゴ Pro W3 の日本語名・英語名を両方記述して環境差を吸収
- Questrial は欧文テキスト（CTA、ユーティリティ、コピーライト）にのみ使用。和文本文には適用しない
- generic family は `sans-serif` で統一

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Title | ヒラギノ角ゴ | 35px | 700 | 1.0 | normal | ヒーロー白テキスト |
| Product Title (H2) | ヒラギノ角ゴ | 32px | 700 | 1.0 | normal | 製品名（KEDP-X1 等） |
| Section Title (H1) | ヒラギノ角ゴ | 35px | 700 | 1.0 | 2px | 製品一覧ページのタイトル |
| Section Heading (H2) | ヒラギノ角ゴ | 20px | 700 | 1.0 | normal | セクション見出し |
| Content Heading | ヒラギノ角ゴ | 35px | 700 | 1.0 | normal | コンテンツ見出し（カリタ式） |
| Body | ヒラギノ角ゴ | 16px | 400 | 1.8 | normal | 本文テキスト |
| Body Small | ヒラギノ角ゴ | 14px | 400 | 1.5 | normal | 説明文、CTA テキスト |
| Caption | ヒラギノ角ゴ | 12px | 400 | 1.8 | normal | ニュース日付、注釈 |
| Nav Item | ヒラギノ角ゴ | 14px | 200-400 | 1.1 | normal | ナビゲーションリンク |
| Utility | Questrial | 12px | 400 | 2.8 | normal | ヘッダーユーティリティ |
| CTA (Read More) | Questrial | 16px | 400 | 3.875 | normal | ゴーストボタン |
| Footer | Questrial | 12px | 400 | 1.5 | normal | コピーライト |

> **Note**: 見出しは weight 700、本文以下は weight 400 の2段階。ナビゲーション一部に weight 200（ライト）が使われている点が特徴的。

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（28.8px / 16px）。日本語として標準的なゆとり
- **見出しの行間**: 1.0（line-height = font-size と同値）。見出しはタイトに詰める
- **本文の字間 (letter-spacing)**: normal（0）。字間調整なし
- **見出しの字間**: 製品一覧ページの H1 のみ `2px`（0.057em 相当）。それ以外は normal

**ガイドライン**:
- 見出しの line-height: 1.0 はかなりタイト。短い1行テキストを前提とした設計
- 字間は基本的に normal で、過度なトラッキングを避けるミニマルな方針
- "Read More" CTA の line-height: 3.875（62px / 16px）は、padding の代わりにテキストを垂直中央配置するためのテクニック

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

明示的な `word-break` や `line-break` の指定なし。ブラウザデフォルトに依存。

### 3.7 OpenType 機能

明示的な `font-feature-settings` の指定なし。

- **palt**: 未使用。字詰めなしでベタ組み
- **kern**: ブラウザデフォルトの `auto` に依存

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

**Ghost CTA (Read More)**
- Background: `transparent`
- Text: `#878787`
- Border: 2px solid `#888888`
- Padding: 0（line-height: 62px で垂直中央配置）
- Border Radius: 0px
- Font: Questrial, 16px
- Font Weight: 400
- Hover: opacity 0.7（推定）

**Outline (Footer / Dark BG)**
- Background: `transparent`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Padding: 0（line-height: 87px で垂直中央配置）
- Border Radius: 0px
- Font Size: 14px
- Font Weight: 400

**Utility (Header)**
- Background: `#a49e86`
- Text: `#ffffff`
- Padding: 0px 12px
- Border Radius: 0px
- Font: Questrial, 12px
- Font Weight: 400
- Line Height: 34px（高さの代替指定）

**Wave Series Label**
- Background: `transparent`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Border Radius: 0px
- Font Size: 14px
- Font Weight: 400
- Line Height: 69px

> **Note**: Kalita には**塗りつぶしのプライマリ CTA がない**。すべて ghost（アウトライン）ボタン。唯一の塗りつぶし要素はヘッダーのユーティリティリンク（`#a49e86`）で、これは CTA というよりナビゲーション要素。

### Inputs

- Background: `#eeece3`（ウォームクリーム）
- Border: none（0px）
- Border Radius: 0px
- Font: Arial, 16px
- Line Height: 34px
- Focus Border: 推定 1px solid `#a49e86`

### Cards

- Background: `#ffffff` または `rgba(0,0,0,0.2)` オーバーレイ
- Border: none
- Border Radius: 0px
- Padding: 可変
- Shadow: none（フラット）

### Badges

明確なバッジコンポーネントなし。ラベルは `<p>` にボーダーで構成。

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

- Max Width: 960px（コンテンツ領域。製品写真は全幅可）
- Padding (horizontal): 20px

### Grid

- 製品グリッド: フルスクリーン写真を中心とした1カラムメインビジュアル
- ニュース: 1カラムリスト
- フッター: 2カラム（ナビ + コーポレート情報）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | **すべての要素**。完全フラットデザイン |

> **Note**: Kalita のデザインは**完全フラット**。box-shadow を一切使わない。深度の表現は背景色の切り替え（`#999999` → `#eeeeee` → `#ffffff`）と、写真オーバーレイ（`rgba(0,0,0,0.2)`）のみで行う。`border-radius: 0px` と合わせて、金属製のコーヒー器具のようなシャープで硬質な世界観を徹底。

---

## 7. Do's and Don'ts

### Do (推奨)

- ページ背景は `#999999` を維持する — Kalita のアイデンティティそのもの
- `border-radius: 0px` を徹底する — 角丸は一切使わない
- CTA はゴーストボタン（アウトライン）で統成する — 塗りつぶしボタンは避ける
- オリーブ `#a49e86` はユーティリティ要素にのみ使う — 大面積やメイン CTA には使わない
- 欧文テキスト（CTA、ユーティリティ、コピーライト）には Questrial を適用する
- 製品写真を大きく使い、テキストは最小限にする
- 見出し line-height は 1.0 でタイトに詰める

### Don't (禁止)

- ページ背景を白や淡色にしない — グレー `#999999` が失われると世界観が崩壊する
- `border-radius` を 1px 以上にしない — 角丸はブランドの硬質さを壊す
- 塗りつぶしの CTA ボタンを作らない — Kalita は ghost button のみ
- 鮮やかな原色を使わない — モノトーン + オリーブの2軸を守る
- `font-weight: 600` を使わない — 200, 400, 700 の3段階のみ
- 過度な影（box-shadow）を使わない — 完全フラットが原則
- Questrial を日本語テキストに適用しない — 和文はヒラギノ角ゴ Pro W3 を使う
- `palt` や `letter-spacing` を安易に追加しない — ベタ組みが基本

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 768px | 1カラム、ハンバーガーメニュー |
| Tablet | <= 1024px | レイアウト調整 |
| Desktop | > 1024px | フルレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px (WCAG 基準)
- ゴーストボタンは line-height でタップ領域を確保（62px〜87px）

### フォントサイズの調整

- モバイルでは見出し 35px → 24px 程度に縮小
- 本文 16px は維持
- "Read More" の line-height を 62px → 48px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Page Background: #999999
Olive Accent: #a49e86
Text Color: #333333
Text on Dark: #ffffff
Background Light: #eeeeee
Background White: #ffffff
Border: #888888
Body Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif
English Font: Questrial, sans-serif
Body Size: 16px
Body Line Height: 1.8
Heading Weight: 700
Body Weight: 400
Border Radius: 0px (all elements)
CTA Style: ghost button (outline only, no fill)
Elevation: none (completely flat)
```

### プロンプト例

```
Kalita のデザインシステムに従って、製品詳細ページを作成してください。
- ページ背景: #999999
- フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif
- 欧文 CTA: Questrial
- テキスト色: #333333（通常）, #ffffff（暗い背景上）
- border-radius: 0px を徹底（角丸なし）
- CTA は ghost button（border: 2px solid #888, 背景透明）
- ユーティリティ要素のアクセント: #a49e86
- 影は使わない（完全フラット）
- 製品写真を大きく使い、テキストは最小限に
```
