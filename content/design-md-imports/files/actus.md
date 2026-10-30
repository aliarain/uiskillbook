# DESIGN.md — ACTUS（アクタス）

> 株式会社アクタス（ACTUS）コーポレートサイト（https://www.actus-interior.com/）のデザイン仕様書。
> 1969 年創業、輸入家具・インテリアのライフスタイル提案型セレクトショップ。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白 `#ffffff` × 純黒 `#000000` の極限ミニマル。**家具と空間写真を主役とし、UI は徹底的に黒子に徹する**インテリアブランド特有のスタイル
- **密度**: 余白を大きく取り、写真と少ない文字情報で構成。**情報密度は低く、余白そのものがブランド表現**
- **キーワード**: 純白・純黒のモノトーン、Source Sans 3 + Noto Sans JP の細身欧文混植、letter-spacing 1px (≈0.07em) でゆったり字送り、角丸ゼロ、ボタンも「VIEW ALL」のテキストリンクのみ、ライトグレー面 `#e8eaea` で写真の影に
- **特徴**:
  - **font-family は2系統のみ** — 欧文「Source Sans 3」を先頭、和文フォールバックは「Noto Sans JP」のみ。ヒラギノや游ゴシックには落とさない**Webフォント前提**の設計
  - **全要素 weight 400 が基本** — 太字でヒエラルキーを作らず、サイズと位置だけで階層を組む
  - **letter-spacing 1px（≈0.07em）をほぼ全要素に適用** — 詰めではなく広げる。ノイズの少ない上品な字送り
  - **本文 14px** — 一般的な日本語サイト（16〜18px）より明確に小さい。家具と写真の中で UI を引っ込ませる狙い
  - **CTA は "VIEW ALL" のテキストリンクのみ** — `bg: transparent / radius: 0 / border: なし / color: #000`。塗り潰しや枠を持つボタンが存在しない極限まで削ぎ落とした UI
  - **palt は使わない**（letter-spacing 1px が代わりに字間を制御）
  - **ライトグレーの面 `#e8eaea` を多用**（出現回数37回） — 写真の周囲・カードの背景として、純白の中の柔らかい影
  - **アクセント色は赤 `#de4c51`** — セールやキャンペーンでのみ使う。普段は表面化しない
  - **カスタムプロパティはサードパーティ（Swiper / Hacobune）由来のみ** — `--vc-clr-primary: #000` `--vc-clr-secondary: #090f207f` でブランド主色は黒。デザイン用変数は持たない
  - **フッター `#4c4948`** — 純黒ではなく、暖色寄りの濃いグレー（rgb(76, 73, 72)）。商品の背景色に合わせた絶妙な選択

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Actus Black** (`#000000`): すべてのテキスト・ロゴ・主要 UI（`--vc-clr-primary: #000`）
- **Page White** (`#ffffff`): ページ背景の純白（`--vc-clr-white: #fff`）

### Surface（背景）

- **Page Background** (`#ffffff`): 純白
- **Light Surface** (`#e8eaea`): 写真背景・カード面（rgb(232, 234, 234)）。最頻出の補助面
- **Soft Surface 2** (`#eef0f0`): セクション切り替えの薄い面（rgb(238, 240, 240)）
- **Soft Surface 3** (`#efefef`): 「Pick Up Items」等の面（rgb(239, 239, 239)）
- **Border / Divider** (`#dcdcdc`): SNS アイコン枠等の薄い罫線（rgb(220, 220, 220)）
- **Footer Warm Gray** (`#4c4948`): フッターの暖色寄り濃グレー（rgb(76, 73, 72)）

### Text / Foreground

- **Text Primary** (`#000000`): 本文・見出し・リンクのすべて
- **Text Inverse** (`#ffffff`): 暗色帯上のテキスト
- **Text Muted** (`#8b9191`): 補助テキスト・"全て" 等のフィルター（rgb(139, 145, 145)）
- **Text Secondary** (`rgba(9, 15, 32, 0.5)`): スライダー間隔のドット等（`--vc-clr-secondary`）

### Accent / Semantic

- **Accent Red** (`#de4c51`): セール・限定キャンペーンにのみ使用（rgb(222, 76, 81)）
- **Swiper Theme** (`#007aff`): サードパーティ Swiper の標準色（普段表面化しない）

---

## 3. Typography Rules

### 3.1 和文フォント

ACTUS は **Noto Sans JP のみをフォールバック**として使用。ヒラギノ・游ゴシックを置かない潔いシングルフォール構成。

- **第1候補**: Source Sans 3（Adobe / Google Fonts、欧文）
- **第2候補**: Noto Sans JP（和文）
- **最終フォールバック**: sans-serif

### 3.2 欧文フォント

- **Source Sans 3**: 全要素の欧文を担当する。Source Sans Pro の後継、Adobe 開発のオープンソース欧文サンセリフ
- 数字・英字（"VIEW ALL" "PRODUCT" 等）すべてこれで組まれる
- ウェイトは **400 一択**

### 3.3 font-family 指定

実サイトの実測値（**body / h1 / h2 / a / p / button 共通**）:

```css
font-family: "Source Sans 3", "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- 欧文を Source Sans 3 で先頭指定し、和文は Noto Sans JP に落とす混植順
- WebFont 未読込時はそのまま OS の sans-serif に落とす（ヒラギノ等の OS フォントを意図的に使わない）
- 「家具と空間が主役で書体は控えめ」という思想を、フォール戦略にまで貫いている

### 3.4 font-size

実測のサイズスケール（PC 1440px ビュー）：

| 用途 | サイズ | 用例 |
|------|--------|------|
| H3（暗色帯上の英字大見出し） | `20px` | "PRODUCT" |
| H1 / H2 / Body / リンク | `14px` | ナビ・本文・リンク |
| H1（小） / H2（小） | `12〜13px` | 補助見出し |
| 注釈・キャプション | `12px` | フッター・小さい説明文 |

**注意**: 一般的なコーポレートサイトより 1〜4px 小さい設定。家具写真のコンポジションを邪魔しないよう、UI を意図的に引っ込ませる。

### 3.5 line-height

要素ごとに大きく変わる。**改行を伴う本文では 1.4〜1.8**、**1 行で完結するナビ・リンクでは 1.0**：

- **Body 14px（複数行 p）**: `1.40`（19.6px / 14px）
- **Body 12px（複数行 p）**: `1.80`（21.6px / 12px）— 小さい文字ほど行送りを広げる
- **Nav リンク 14px（1 行）**: `1.0`（14px / 14px）
- **アンダーライン付きリンク 14px**: `5.36`（75px / 14px）— 大きな縦のクリック領域を確保
- **H3 20px（暗色帯）**: `1.0`（20px / 20px）

### 3.6 letter-spacing

**ほぼ全要素に `1px`（≈0.07em）を適用**。Mazda と同じ「広げる」方針だが、ACTUS のほうが用途を絞らず一律。

- **Body / Nav / リンク**: `1px`（≈0.07em on 14px）
- **小さい h2**: `0.65px`（0.05em on 13px）
- **大きい "PRODUCT" h3**: `0.7px`（0.035em on 20px）— 大きい文字ほど比率を抑える

### 3.7 font-feature-settings

**palt は使わない**。letter-spacing 1px で字間を制御し、約物の自然な空きを保つ。

### 3.8 ウェイト戦略

ACTUS は **ほぼ全要素 weight 400** で運用する。階層を太字で作らない。

| 用途 | ウェイト |
|------|----------|
| すべての本文・見出し・ナビ | `400` |
| 例外: h2 の一部 | `500` |

**これは ACTUS 独特の方針**。weight 700 や 800 を使わず、サイズ・位置・余白で視覚的階層を作る。インテリアの「家具を主役にする空間」と同じ哲学を UI に適用。

---

## 4. Component Stylings

### 4.1 ボタン（ほぼ唯一の CTA）

```css
/* "VIEW ALL" のテキストリンク */
font-family: "Source Sans 3", "Noto Sans JP", sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 14px;
letter-spacing: 1px;
color: #000000;
background-color: transparent;
border-radius: 0px;
border: none;
padding: 25px 50px;
text-transform: uppercase;
```

- **塗りつぶしも枠もない**、テキストのみの CTA
- 大きな padding（25px 50px）でクリック領域を確保
- ホバー時は色を `#8b9191` のグレーに変化

### 4.2 ナビゲーションリンク

```css
font-family: "Source Sans 3", "Noto Sans JP", sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 14px;
letter-spacing: 1px;
color: #000000;
text-decoration: none;
```

- 装飾なしのテキストリンク
- ホバー時に下線または `#8b9191` グレーへ

### 4.3 カード（商品サムネイル）

- 写真 + 商品名 + 価格の縦配置
- 背景: `#ffffff` または `#e8eaea`
- 罫線: なし
- 影: なし（`box-shadow: none`）
- 角丸: `0px`
- 写真自体が主役で、UI は周囲の余白でしか存在を主張しない

### 4.4 タグ・バッジ

- 通常は使わない（カテゴリ表示はテキストのみ）
- セール時に **赤面 `#de4c51` + 白文字** のミニマムバッジ

### 4.5 フォーム

- 入力欄: `1px solid #dcdcdc` 矩形、`border-radius: 0`
- フォーカス時は border 色を `#000` に変える
- ラベル: 14px / 400 / letter-spacing 1px

### 4.6 暗色帯セクション

- 背景: `#4c4948`（暖色寄り濃グレー）
- テキスト: 白
- "PRODUCT プロダクト" のように **英字 20px + 和文小さく** の対訳組み

---

## 5. Layout Principles

- **コンテナ最大幅**: 1440〜1600px（家具写真を大きく見せるためワイド）
- **グリッド**: 12 カラム。商品サムネイルは 4 列が主流
- **セクション間余白**: 大きく取る（80〜160px）
- **写真周囲には常に余白を確保** — 写真の縁ギリギリまで他要素を寄せない
- 見出しは**左揃え**または**中央揃え**を場面に応じて使い分け
- 商品写真は正方形 1:1 が多い

---

## 6. Depth & Elevation

- **影は使わない**（box-shadow: none）
- 階層は **面色 `#ffffff` → `#e8eaea` → `#eef0f0`** の薄いグラデーションで表現
- ホバー状態は色の微変化のみ（透明度 0.7、または グレー寄せ）
- モーダルがあれば `rgba(0, 0, 0, 0.5)` の半透明オーバーレイ

---

## 7. Do's and Don'ts

### ✅ Do
- **Source Sans 3 + Noto Sans JP の二系統** で組む
- 全要素を **weight 400** に統一する（太字を使わない）
- letter-spacing は **1px (≈0.07em)** をほぼ全要素に適用
- CTA は **テキストリンクのみ** — "VIEW ALL" 形式で大きなパディング
- ライトグレー面 `#e8eaea` を**多用**して写真の影として機能させる
- 文字サイズは **14px 基準**で、UI を引っ込ませる

### ❌ Don't
- ヒラギノ・游ゴシック・メイリオをフォールバックに置かない（Noto Sans JP のみ）
- weight 700 や 800 を使わない（階層は位置と余白で）
- ボタンに塗り・枠・角丸・影を付けない
- 本文を 16px 以上にしない（写真より UI が主張してしまう）
- アクセント色を常用しない（赤 `#de4c51` は限定的に）
- palt を使わない（letter-spacing 1px で十分）

---

## 8. Responsive Behavior

- **PC 1440px** をベース幅とする
- **タブレット（〜1024px）**: 4 列 → 2 列、ナビをハンバーガー化
- **モバイル（〜768px）**: 1 列、本文を 13px に微縮小、CTA を幅 100%
- letter-spacing 1px は全ブレークポイントで維持
- weight 400 統一はモバイルでも維持

---

## 9. Agent Prompt Guide

> AI エージェントに ACTUS 風 UI を生成させる際のプロンプト。

```
Generate a Japanese furniture/interior brand UI in the ACTUS visual style.

Visual:
- Pure white background (#ffffff) with pure black text (#000000)
- Photography-first design — UI is intentionally subdued
- Generous whitespace; large padding around hero/section content
- Light gray surfaces (#e8eaea, #eef0f0) as soft photo backgrounds
- Footer in warm dark gray (#4c4948), not pure black

Typography:
- font-family: "Source Sans 3", "Noto Sans JP", sans-serif (NO Hiragino/Yu Gothic fallback)
- ALL elements weight 400 — never use bold (700/800) for hierarchy
- letter-spacing: 1px (≈0.07em) on nearly every element
- Body: 14px / line-height 1.4 / letter-spacing 1px
- Captions/notes: 12px / line-height 1.8 (smaller text gets MORE line-height)
- Section header: 20px in dark band, "PRODUCT プロダクト" English+Japanese pairing
- letter-spacing scales: 14px → 1px (0.07em), 20px → 0.7px (0.035em)

Components:
- CTA: text-only "VIEW ALL" link, transparent bg, no border, no radius, padding 25px 50px
- Cards: photo + minimal text, no shadow, no border, no radius
- Navigation: plain text links, weight 400, ls 1px
- Forms: 1px solid #dcdcdc / radius 0 / focus → border-color #000

Color Strategy:
- Brand: black #000 + white #fff (only)
- Surfaces: #e8eaea / #eef0f0 / #efefef as soft photo grounds
- Footer: warm gray #4c4948 (not pure black)
- Accent red #de4c51 — sale/promotion only, very rare

Avoid:
- Bold weights (use 400 everywhere)
- Hiragino / Yu Gothic in font fallback
- Filled buttons or rounded corners (text-only CTAs)
- Body size > 16px (UI should not compete with photography)
- Box shadows or visible borders on cards
- palt feature (use letter-spacing 1px instead)
```
