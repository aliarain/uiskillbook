# DESIGN.md — cotogoto（コトゴト）

> cotogoto 公式オンラインストア（https://www.cotogoto.jp/）のデザイン仕様書。
> 東京・高円寺の日本の手仕事の暮らし道具店。「暮らしのなかの、ひとつひとつ。」をコンセプトに、せいろ・おろし金・花ふきん等のキッチン雑貨・生活道具を厳選して扱う。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 明朝体ベースの文芸的・エディトリアルな佇まい。手仕事の温度感を Shippori Mincho（しっぽり明朝）と生成り色で表現する
- **密度**: ゆったり。商品ひとつひとつを丁寧に見せる工芸カタログ型。余白で呼吸を取る
- **キーワード**: 明朝体、生成り、手仕事、文芸、端正、高円寺
- **特徴**: **サイト全体が明朝体（Shippori Mincho）で組まれている**——日本の Web サービスとしてきわめて珍しい。ゴシック体は一切使わず、本文・見出し・ナビすべてが serif。ウェイト 500-600 の中肉が主体で、細すぎず太すぎない、筆圧を感じる組版。配色は白 `#ffffff` と生成り `#f8f6ed` の 2 面に `#333333` のテキストだけ——ほぼモノクロームで、唯一の色彩は星評価の `#ffbf00`（山吹色）のみ。ボタンは `border-radius: 3px` の控えめな角丸と 1px の細い罫線で、手仕事の繊細さを UI に写している

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — 無彩色＋生成りの 2 色構成）

- **Text Black** (`#333333`): 本文・見出し・ボタン枠の主役色。純黒ではなくやや柔らかい墨色
- **Background White** (`#ffffff`): ページ背景
- **Kinari / 生成り** (`#f8f6ed`): ブランドの面色。フッター、特集エリア、注目セクションの背景に多用。天然素材の未晒し布を想起させる

### Surface（面色）

- **Surface Kinari** (`#f8f6ed`): 最頻出の面色（出現 10 回）。特集・おすすめ・フッター背景
- **Surface Kinari Deep** (`#ede9db`): フッター下部・濃い生成り面
- **Surface Modal** (`#999999`): モーダル確認ボタン背景

### Text

- **Text Primary** (`#333333`): 本文・見出し
- **Text Secondary** (`#777777`): 補足テキスト・商品サブ情報
- **Star Yellow** (`#ffbf00`): レビュー星の山吹色。サイト内で唯一の色相を持つ要素

### Semantic（推奨——実サイトには明示的な定義なし）

- **Danger** (`#c0392b`): エラー・削除（推奨値）
- **Warning** (`#d97a00`): 警告（推奨値）
- **Success** (`#2e7d4f`): 成功（推奨値）

### Border

- **Border** (`#333333`): 入力欄・ボタン枠の主要ボーダー（テキスト色と同一）
- **Border Light** (`#cccccc`): 区切り線、薄い罫

> **Note**: cotogoto の配色は「白・生成り・墨色」の 3 色だけで完結する。ブランドカラーとしての色相は存在せず、唯一の彩色は星評価の山吹色 `#ffbf00` のみ。

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体（サイト全体の基本書体）**:
- Shippori Mincho（Google Fonts、しっぽり明朝）——最優先。築地体系に倣ったオールドスタイル明朝
- フォールバックは generic serif

> **特筆**: cotogoto は本文・見出し・ナビゲーション・ボタンすべてを明朝体で統一している。日本の EC サイトでは極めて稀な設計。手仕事の道具を扱う店にふさわしい、書物のような品格を生んでいる

**ゴシック体**: 使用していない

### 3.2 欧文フォント

Shippori Mincho 内蔵の欧文グリフをそのまま使用。独立した欧文フォント指定はなし。

> font-family 先頭の `exclamation` はアイコンフォント（カート・検索アイコン等）用で、テキスト描画には影響しない

### 3.3 font-family 指定

```css
/* サイト全体（本文・見出し・ナビ・ボタンすべて） */
font-family: exclamation, "Shippori Mincho", serif;
```

**フォールバックの考え方**:
- `exclamation` はアイコンフォント。テキストには Shippori Mincho が適用される
- Shippori Mincho は Google Fonts で提供される無料の明朝体。築地体系のクラシックな字形
- 最終フォールバックは generic `serif`（游明朝やヒラギノ明朝が適用される）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo H1 | Shippori Mincho | 28px | 600 | normal | 0.04em | ロゴ・店名 |
| Display H2 | Shippori Mincho | 28px | 600 | normal | 0.08em | 「新入荷＆注目商品！」等のメジャー見出し |
| Section H2 | Shippori Mincho | 22px | 600 | normal | 0.04em | 「ランキング」等のセクション見出し |
| Sub H2 | Shippori Mincho | 21px | 600 | normal | 0.04em | 「おすすめ」等 |
| Footer H2 | Shippori Mincho | 24px | 600 | normal | 0.04em | フッター見出し |
| H3 Large | Shippori Mincho | 20px | 600 | 1.3 | 0.04em | 特集タイトル |
| H3 Medium | Shippori Mincho | 18px | 600 | 1.5 | 0.04em | 商品カテゴリ見出し |
| H3 Small | Shippori Mincho | 16px | 600 | 1.5 | 0.04em | 小見出し |
| H3 Card | Shippori Mincho | 14px | 600 | 1.5 | 0.04em | カード内見出し |
| Body | Shippori Mincho | 14px | 500 | 1.4 | 0.04em | 本文 |
| Nav Main | Shippori Mincho | 16px | 500 | normal | 0.04em | グローバルナビ |
| Nav Sub | Shippori Mincho | 11px | 500 | normal | 0.04em | サブナビ・パンくず |
| Link Box | Shippori Mincho | 16px | 500 | 48px | 0.04em | 「新商品一覧へ」等のボックスリンク |
| CTA Dark | Shippori Mincho | 12px | 400 | normal | 0.04em | 「詳しく見る」ボタン |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.4**。明朝体は字面が小さめなので 1.4 でも可読性を確保できる
- **見出しの行間**: normal 〜 1.3。Display H2 は normal（ブラウザデフォルト ≈ 1.2）、H3 Large は 1.3
- **小見出し・カード見出しの行間**: 1.5
- **本文の字間 (letter-spacing)**: `0.04em`（0.56px / 14px）。サイト全体でグローバルに適用
- **Display H2 の字間**: `0.08em`（2.24px / 28px）。メジャー見出しだけ字間を広く取る

**ガイドライン**:
- 全体的に `letter-spacing: 0.04em` がベース（body に適用）
- 見出しの中でも Display H2 だけ `0.08em` に広げ、堂々とした佇まいを作る
- line-height は明朝体の字面の小ささを考慮し、1.4 で十分な可読性

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
word-break: normal;
line-break: strict;
```

- 商品名（例: 「中村銅器製作所のおろし金」「工房アイザワのせいろ」）は意味の切れ目で折り返す
- 価格表記は折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使わない**。Shippori Mincho のベタ組みで通す
- 明朝体の等幅リズムを崩さないことが、書物のような品格につながる

### 3.8 縦書き

- 該当なし（横書き運用）

---

## 4. Component Stylings

### Buttons

**Link Box CTA（主要 CTA）**
- Background: `transparent`
- Text: `#333333`
- Border: `1px solid #333333`
- Border Radius: `3px`
- Font Size: 16px / Weight 500
- Line Height: `48px`（高さ固定）
- Letter Spacing: `0.04em`
- 例: 「新商品一覧へ」「もっと見る」

**Dark CTA（強調 CTA）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `10px`
- Border Radius: `3px`
- Font Size: 12px / Weight 400
- 例: 「詳しく見る」

**Modal Confirm（モーダル確認）**
- Background: `#999999`
- Text: `#ffffff`
- Padding: `6px 0`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #333333`
- Border Radius: `3px`
- Padding: `10px`
- Font Size: 14px / Weight 500 / line-height 1.4 / letter-spacing 0.04em

### Cards

- Background: `#ffffff` or `#f8f6ed`（生成り面上のカード）
- Border: なし（枠線を使わず、面色の差で区切る）
- Border Radius: `0px`（カード自体は角丸なし）
- Padding: 商品画像 + テキストの密な構成
- Shadow: なし

### Review Stars

- Color: `#ffbf00`（山吹色）
- サイト内で唯一の彩色要素

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | 細かい要素間 |
| M | 16px | カード内余白 |
| L | 24px | セクション内ブロック間、H3 の padding-bottom |
| XL | 40px | セクション間 |
| XXL | 80px | フッター上下等のメジャー余白 |

### Container

- Max Width: 約 960–1200px（商品グリッド領域）
- Padding (horizontal): 16〜24px

### Grid

- 商品グリッド: 4 カラム（PC）/ 2 カラム（SP）
- ガッターは 16–24px
- 余白を多めに取り、商品写真の間に呼吸を確保

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラット運用が原則） |
| 1 | `0 1px 3px rgba(0, 0, 0, 0.06)` | スティッキーヘッダーのみ |

> cotogoto は box-shadow をほぼ使わない。階層は面色の差（`#ffffff` と `#f8f6ed` の 2 面）で表現する。影を使わないことで、紙の本や手書きのカタログのような質感を保つ。

---

## 7. Do's and Don'ts

### Do（推奨）

- サイト全体を **Shippori Mincho（明朝体）** で統一する。ゴシック体は使わない
- font-family は `exclamation, "Shippori Mincho", serif` を指定する（exclamation はアイコンフォント）
- テキスト色は `#333333`（墨色）。純黒 `#000000` ではなく、やや柔らかい黒
- 面色は `#ffffff`（白）と `#f8f6ed`（生成り）の 2 色で構成する
- ウェイトは本文 500、見出し 600 の **中肉** を基本とする
- `letter-spacing: 0.04em` をサイト全体のベースとし、Display H2 だけ `0.08em` に広げる
- ボタン・入力欄は `border-radius: 3px` の **控えめな角丸** で統一する
- CTA は 1px solid `#333333` の細い罫線で囲む「ボックスリンク」スタイル（line-height: 48px）
- `font-feature-settings: normal`（palt 不使用）——明朝体のベタ組みリズムを保つ
- 唯一の彩色は星評価 `#ffbf00` のみ。それ以外に色相を持たせない
- 商品名・特集タイトルは明朝体 600 で、工芸品の品格を演出する

### Don't（禁止）

- ゴシック体（Noto Sans JP、游ゴシック等）を使わない（cotogoto は明朝体オンリー）
- カラフルな色（赤・青・緑等）を使わない（白・生成り・墨色の 3 色構成）
- 大きな border-radius（pill 等）を使わない（最大 3px）
- 大きな box-shadow / drop-shadow を使わない（フラット原則）
- テキスト色に純黒 `#000000` を本文に使わない（`#333333` がブランドの墨色）
- font-weight 700 以上のボールド体を本文に使わない（500–600 の中肉が基本）
- `palt` 等の字詰め機能を使わない（明朝体のベタ組みが品格の源泉）
- letter-spacing を 0 にしない（0.04em のベースを維持する）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1〜2 カラム） |
| Tablet | 768–1023px | 2〜3 カラム |
| Desktop | ≥ 1024px | 3〜4 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px（ボックスリンク CTA は line-height 48px で確保）

### フォントサイズの調整

- モバイル本文は 14px を維持
- Display H2 28px はモバイルで 22–24px に縮小
- Shippori Mincho は小サイズでも可読性が高い書体

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color: #333333 (墨色)
Text Sub: #777777
Background: #ffffff
Surface Kinari: #f8f6ed (生成り)
Surface Kinari Deep: #ede9db
Star Yellow: #ffbf00
Border: #333333
Font: exclamation, "Shippori Mincho", serif
Body: 14px / Weight 500 / line-height 1.4 / letter-spacing 0.04em
Heading: Weight 600
Display H2: 28px / letter-spacing 0.08em
Border Radius: 3px
Shadow: なし
font-feature-settings: normal (palt 不使用)
```

### プロンプト例

```
cotogoto のデザインシステムに従って、キッチン雑貨の商品一覧ページを作成してください。
- フォント: exclamation, "Shippori Mincho", serif（サイト全体が明朝体）
- テキスト色: #333333（墨色）、サブ: #777777
- 背景: #ffffff、面色: #f8f6ed（生成り）
- 本文は 14px / weight 500 / line-height 1.4 / letter-spacing 0.04em
- 見出しは weight 600、Display H2 は 28px / letter-spacing 0.08em
- CTA ボタンは border 1px solid #333333 / radius 3px / line-height 48px のボックスリンクスタイル
- 強調 CTA は bg #000000 / text #ffffff / radius 3px / padding 10px / 12px
- 入力欄は border 1px solid #333333 / radius 3px / padding 10px
- 星評価は #ffbf00（サイト唯一の彩色）
- ゴシック体は使わない。ボールド（700+）も使わない
- box-shadow は使わず、白と生成りの面色差で階層を作る
- font-feature-settings: normal（palt 不使用、明朝体のベタ組み）
```
