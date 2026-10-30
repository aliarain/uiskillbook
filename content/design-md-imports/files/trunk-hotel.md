# DESIGN.md — TRUNK(HOTEL)

> TRUNK(HOTEL) 公式サイト（https://trunk-hotel.com/）のデザイン仕様書。
> 渋谷キャットストリートに位置するブティックホテル。"SOCIALIZING" をコンセプトに掲げ、ホテル・レストラン・ウェディング・イベントを展開。
> 実サイトの computed style に基づいて記述（2026-05-08 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ギャラリーのような静謐さと、エディトリアル誌面を思わせる小さなタイポグラフィ。写真と余白でホテルの空気を伝える「空間体験型」デザイン
- **密度**: 情報密度は極めて低い。大きなビジュアルブロックに、最小限のテキストが添えられる構成
- **キーワード**: モノクローム、エディトリアル、ギャラリー、静謐、ミニマル
- **特徴**:
  - **完全モノクロームパレット** — ブランドカラーを持たず、純黒 `#000000` と純白 `#ffffff` の二値で構成。中間のグレーは `#363636`（ヘッダー）と `#999999`（ミュートテキスト）のみ
  - **二書体システム** — 本文はゴシック体（Roboto + 游ゴシック）、コンセプトテキストは明朝体（游明朝 + ヒラギノ明朝）。ゴシックが「情報」、明朝が「世界観」を担う
  - **極小ベースフォント 12px** — 一般的なWebサイト（14–16px）より2段階小さい。雑誌のキャプションのような静かな佇まい
  - **CTA は全て矩形（radius 0）** — 角丸やpillを一切使わない。黒塗りの直線的なボタンがホテルの直線的な建築と呼応する
  - **高い行高比** — 12px に対して line-height 23px（×1.92）。小さな文字でも余裕のある呼吸感を生む

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- ブランドカラーなし。TRUNK(HOTEL) は **モノクロームのみ** でブランドを表現する

### Neutral（ニュートラル）

- **Black** (`#000000`): 本文テキスト、CTA ボタン背景、ボーダー。サイト全体の基調色
- **Dark Gray** (`#363636`): ヘッダーバー背景、ナビゲーションバー
- **Mid Gray** (`#999999`): コンセプトテキスト（明朝体）、ミュートテキスト、補足情報
- **Light Gray** (`#ececec`): セクション背景、区切り面。コンテンツエリアの切り替えに使用
- **White** (`#ffffff`): ページ背景、ボタン上のテキスト、白抜きテキスト

### Text

- **Text Primary** (`#000000`): 本文、見出し、ナビゲーションテキスト
- **Text Inverted** (`#ffffff`): 黒背景・ダークグレー背景上のテキスト。CTA ボタンラベル、記事カード上テキスト
- **Text Concept** (`#999999`): 明朝体で組むコンセプト文、英文サブタイトル。ヒーローエリアの "SOCIALIZING" 概念テキスト

### Surface

- **Background** (`#ffffff`): ページ標準背景
- **Surface Section** (`#ececec`): セクション背景。ホテル写真ギャラリーや情報ブロックの区切りに使用
- **Surface Header** (`#363636`): グローバルナビゲーションバー
- **Surface CTA** (`#000000`): CTA ボタン、予約バー

### Border

- **Border Default** (`#000000`): ボタン枠線（1px solid）、フィルターバッジ枠線
- **Border Light** (`#ececec`): セクション区切り

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・UI）**:
- 游ゴシック体 / Yu Gothic / YuGothic（macOS / Windows）
- ヒラギノ角ゴ Pro（macOS フォールバック）
- メイリオ（Windows フォールバック）

**明朝体（コンセプトテキスト）**:
- 游明朝 / YuMincho（macOS / Windows）
- ヒラギノ明朝 ProN W3（macOS フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Roboto, Arial
- **セリフ**: 明朝体フォールバック内で対応（和文明朝体の欧文グリフを使用）

### 3.3 font-family 指定

```css
/* ゴシック体（本文・UI 全般） */
font-family: Roboto, Arial, 游ゴシック体, "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  メイリオ, Meiryo, sans-serif;

/* 明朝体（コンセプト・ヒーローテキスト） */
font-family: 游明朝, YuMincho,
  "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", serif;
```

**フォールバックの考え方**:
- 欧文フォント（Roboto）を先に指定し、欧文字形の統一感を優先
- 和文はゴシック体スタックで macOS → Windows の順にカバー
- 明朝体はコンセプトテキスト専用の別スタックとして独立
- 明朝体スタックでは欧文フォントを指定せず、和文フォント内蔵の欧文グリフをそのまま使用（文学的な一体感を意図）

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-08 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Body | Gothic | 12px | 400 | 23px (×1.92) | 0.48px (0.04em) | 本文テキスト。極小サイズ |
| Label / H1 | Gothic | 12px | 400 | 12px (×1.0) | 0.24px (0.02em) | "SOCIALIZING" 等のラベル見出し |
| Blog Heading / H2 | Gothic | 30px | 700 | 42px (×1.4) | 0.48px (0.016em) | 記事ページの見出し |
| Section Label / H2 | Gothic | 12px | 400 | — | 0.48px (0.04em) | "SHARE THIS SOCIALIZING" 等 |
| Concept Text | Mincho | 20px | 400 | 23px (×1.15) | — | ヒーローエリアのコンセプト文 |
| Concept Sub | Mincho | 9px | 400 | — | — | 英文コンセプトサブテキスト |
| Article Body | Gothic | 14px | 700 | — | — | ダーク背景上の記事テキスト |
| CTA Button | Gothic | 15px | 700 | 58px (×3.87) | — | "宿泊" "ROOM" 等の主要CTA |
| Reservation | Gothic | 15px | 400 | — | — | "座席予約 / Reservation" |
| Nav | Gothic | 20px | 400 | — | — | ヘッダーナビゲーション |
| Small | Gothic | 10px | 400 | — | — | モーダル閉じる、フッター等 |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `23px` (12px × **1.92**) — 極小フォントを広い行間で呼吸させる
- ブログ見出し (h2): `42px` (30px × 1.4)
- コンセプト明朝: `23px` (20px × 1.15) — 明朝体はゴシックより詰めて文学的な密度感
- CTA ボタン: `58px` (15px × 3.87) — ボタンの高さを行高で確保。padding ではなく line-height でセンタリング
- ラベル h1: `12px` (12px × 1.0) — 行間なし。ラベルとしての機能に徹する

**字間 (letter-spacing)** — 実測値:
- 本文 (body): `0.48px` (= **0.04em**) — **グローバルに適用**。note 等の「見出し専用」とは異なり、本文にも全面適用
- ラベル h1: `0.24px` (= 0.02em) — 本文より狭い。キャプション的な締まった字詰め
- ブログ見出し: `0.48px` (= 0.016em) — フォントサイズが大きいため em 換算では小さくなる

**ガイドライン**:
- `letter-spacing: 0.04em` は本文を含めグローバルに適用する（見出し専用ではない）
- 12px の極小本文に 0.04em の字間を加えることで、小さくても窮屈にならない読み心地を実現
- 明朝体コンセプトテキストの line-height は 1.15 と詰め気味。ゴシック本文の 1.92 との対比がデザイン上の緊張感を生む

### 3.6 禁則処理・改行ルール

```css
/* 実サイトでは特別な禁則設定は確認されなかった */
/* ブラウザデフォルトの禁則処理に依存 */
```

- テキスト量が極めて少なく、1行に収まるラベル・キャプションが中心のため、禁則処理が問題になるケースは限定的
- 長文はブログ記事のみ。ブラウザデフォルトの禁則で運用

### 3.7 OpenType 機能

```css
/* 全要素 — 実測確認済 */
font-feature-settings: normal;
```

- **palt 不使用**: サイト全体で OpenType 機能を一切使用しない
- 字間は `letter-spacing: 0.04em` で均一に制御し、フォント内蔵のプロポーショナル字詰めには頼らない
- ミニマルなデザイン方針の一貫として、フォントの「素のまま」の字形を尊重する設計

### 3.8 縦書き

- 該当なし。TRUNK(HOTEL) は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（黒塗り CTA）**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Border Radius: `0`（完全な矩形）
- Font Size: `15px`
- Font Weight: `700`
- Line Height: `58px`（ボタンの高さを行高で確保）
- 用途: "宿泊" "ROOM" "公式サイト" 等の主要アクション

**Secondary（白抜きアウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Border Radius: `0`
- Font Size: `15px`
- Font Weight: `700`
- 用途: プラン詳細、セカンダリアクション

**Filter Badge**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Border Radius: `0`
- Font Size: `12px`
- Font Weight: `400`
- 用途: ルームタイプ・プランのフィルタリング

**Page Top（トップへ戻る）**
- Background: `#ffffff`
- Text: `#000000`
- Font Size: `12px`
- Font Weight: `400`

### Navigation

- Background: `#363636`
- Text: `#ffffff`
- Font Size: `20px`
- Font Weight: `400`
- 全幅バー。ホテル名 "TRUNK（HOTEL）" を含むメインナビゲーション

### Cards（記事カード）

- 写真を全面に使用し、テキストはオーバーレイ
- テキスト色: `#ffffff`（写真上の白抜き）
- フォントサイズ: `14px`、ウェイト: `700`
- ボーダーなし、影なし。写真の上に直接テキストを載せる

### Modal

- 閉じるボタン: Background `#000000`, Text `#ffffff`, Font Size `10px`

---

## 5. Layout Principles

### Spacing

- サイト全体がフルブリード（全幅）の写真ブロックとテキストブロックの交互配置
- 写真ブロックは viewport 幅いっぱいに展開
- テキストは小さく、中央寄せまたは左寄せで写真に添えられる

### Container

- フルブリード基調のため固定幅コンテナは限定的
- テキストコンテンツは写真ブロック内に配置される

### Grid

- 単カラムレイアウトが基本
- 宿泊ページのルーム一覧でカード型グリッドを使用

### Spacing Scale（推定）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の最小余白 |
| S | 16px | ラベルとコンテンツの間 |
| M | 24px | セクション内要素間 |
| L | 40px | セクション間 |
| XL | 80px | 大セクション間の余白 |
| XXL | 120px+ | ヒーローセクションの上下余白 |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素。TRUNK(HOTEL) はシャドウを使用しない |

- **完全フラットデザイン**: box-shadow は一切使用しない
- 奥行きは **写真のぼかし・明暗** と **背景色の切り替え**（`#ffffff` ↔ `#ececec`）のみで表現
- モノクロームの二値的世界観に影を持ち込まない設計思想

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#000000`（純黒）を使う。TRUNK(HOTEL) は「柔らかい黒」ではなく、コントラストの強い純黒を意図的に選択している
- 本文は 12px で組み、`line-height: 1.92` + `letter-spacing: 0.04em` で呼吸感を確保する
- CTA ボタンは必ず `border-radius: 0` の完全な矩形にする
- コンセプトテキストには明朝体を使い、ゴシック体の情報テキストと書体で役割を分ける
- 明朝体のコンセプトテキストは `#999999` で淡く表示する。主張しすぎず、空気のように添える
- 写真は大きく、テキストは小さく。常にビジュアルファーストの比率を保つ
- ボタンの高さは `line-height` で確保し、padding ではなく行高でテキストを中央揃えにする
- `font-feature-settings: normal` を維持する。palt は使わない

### Don't（禁止）

- ブランドカラーを追加しない。TRUNK(HOTEL) の世界観は黒・白・グレーの三色で完結する
- ボタンに `border-radius` を設定しない（pill ボタン、角丸ボタンは一切不可）
- テキストを `#333333` や `#222222` 等の「ほぼ黒」にしない。このサイトは意図的に `#000000` 純黒を使用する
- 本文フォントサイズを 14px 以上に上げない。12px の極小サイズがエディトリアルの緊張感をつくる
- ゴシック体と明朝体を同じ文中で混ぜない。書体の切り替えは段落・セクション単位で行う
- box-shadow を使わない。TRUNK(HOTEL) は完全フラットデザイン
- テキストに装飾（下線、太字の乱用、色付き強調）を加えない。ミニマルな抑制を崩さない
- ゴシック体コンセプトテキストに `#999999` を使わない。グレーテキストは明朝体専用

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。フルブリード写真 + 縦積み |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- CTA ボタンは `line-height: 58px` で十分な高さを確保
- ナビゲーションバーもタッチ対応サイズ

### フォントサイズの調整

- モバイルでも本文 12px を維持する可能性が高い（エディトリアルの一貫性）
- ブログ見出しは縮小（30px → 20px 程度）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: なし（モノクローム）
CTA Background: #000000
Text Primary: #000000
Text Concept (Mincho): #999999
Text Inverted: #ffffff
Background: #ffffff
Surface Section: #ececec
Header Bar: #363636
Border: #000000 (1px solid)

Gothic Font: Roboto, Arial, 游ゴシック体, "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  メイリオ, Meiryo, sans-serif
Mincho Font: 游明朝, YuMincho,
  "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", serif

Body Size: 12px / line-height: 1.92 / letter-spacing: 0.04em
Blog Heading: 30px / weight: 700 / line-height: 1.4
Concept Text: 20px (Mincho) / color: #999999
CTA Button: 15px / weight: 700 / line-height: 58px / radius: 0
OpenType: font-feature-settings: normal (palt 不使用)
```

### プロンプト例

```
TRUNK(HOTEL) のデザインに従って、宿泊プラン一覧ページを作成してください。
- フォント（本文）: Roboto, Arial, 游ゴシック体, "Yu Gothic", YuGothic,
    "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    メイリオ, Meiryo, sans-serif
- フォント（コンセプト）: 游明朝, YuMincho,
    "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", serif
- テキスト色: #000000（純黒）
- コンセプトテキスト: #999999、明朝体
- 背景: #ffffff、セクション区切り: #ececec
- ヘッダー: #363636 背景に白文字
- CTA ボタン: #000000 背景、#ffffff テキスト、border-radius: 0（完全矩形）
- 本文: 12px, line-height: 1.92, letter-spacing: 0.04em
- ブログ見出し: 30px, weight: 700, line-height: 1.4
- ボタン高さ: line-height: 58px で確保（padding ではなく行高）
- shadow なし（完全フラット）
- font-feature-settings: normal（palt 不使用）
- 写真を大きく、テキストは小さく抑えたエディトリアルレイアウト
```
