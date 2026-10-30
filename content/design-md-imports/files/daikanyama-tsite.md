# DESIGN.md — 代官山 蔦屋書店 (Daikanyama T-SITE)

> 代官山 蔦屋書店（https://store.tsite.jp/daikanyama/）のデザイン仕様書。
> 2026-05-08 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 2011年開業、クライン ダイサム アーキテクツ設計の代官山 T-SITE 内にある旗艦書店。「大人のための文化複合施設」をコンセプトに、書籍・雑貨・カフェ・イベントを一体化させた施設の公式サイト。**極小フォント（10〜12px）と大きな写真の対比**、彩度を抑えた**クラフト紙のような #f6f6f3 背景**が特徴
- **密度**: 情報量が極めて多い。営業時間・カレンダー・カテゴリ・新刊情報・イベント情報が縦に積層する。書店としての網羅性を優先
- **キーワード**: 書店、文化複合、和洋折衷、クラフト紙、極小フォント、Noto Sans Japanese、square corners、編集の密度
- **特徴**: **すべての要素で `border-radius: 0px`** の徹底した直角主義。ベース背景は純白ではなく **#f6f6f3（クラフト紙のような淡いベージュ）**。NEW バッジには **#c4002e（蔦屋ブランドレッド）**、カテゴリ面色には **#93928b（暖灰）**。曜日テーブルは土曜 #4f9eef・日曜 #ee6a6a と古典的なカラーリング

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Tsutaya Red** (`#c4002e`): 「NEW」バッジ等、新着情報の強調色のみに使用（rgb 196, 0, 46）
- **Cream** (`#f6f6f3`): 主背景。クラフト紙のような淡いベージュ（rgb 246, 246, 243）。出現回数 20 とサイト内で最頻出
- **Warm Gray** (`#93928b`): カテゴリラベル背景（rgb 147, 146, 139）。書棚のジャンル札のような色

### Surface

- **White** (`#ffffff`): カード本体、検索バー
- **Card Surface** (`#e5e5e1`): イベント・お知らせカード背景。Cream より一段濃い
- **Light Gray Surface** (`#f7f7f7`): 「TODAY'S EVENT」セクション背景
- **Border Gray** (`#dadada`): 区切り線、入力フィールド枠
- **Mid Gray** (`#c0c0c0`): 検索フィールドの placeholder 背景
- **Overlay** (`rgba(0, 0, 0, 0.5)`): モーダル等の半透明黒

### Text

- **Black** (`#000000`): 本文・見出し（純黒を採用する数少ないサイト）
- **Charcoal** (`#333333`): 価格表示
- **White** (`#ffffff`): バッジ・反転テキスト

### Calendar Accent

- **Saturday** (`#4f9eef`): 土曜列の数字（rgb 79, 158, 239）
- **Sunday** (`#ee6a6a`): 日曜列の数字（rgb 238, 106, 106）

---

## 3. Typography Rules

### 3.1 和文フォント

- **Noto Sans Japanese**: 唯一の和文フォント。書体への装飾は加えず、Google Fonts の "Noto Sans Japanese" を素朴に使う

```css
font-family: "Noto Sans Japanese", sans-serif;
```

蔦屋書店は**徹底的に Noto Sans 一択**で構成され、明朝体や游ゴシックのバリエーションは持たない。

### 3.2 欧文フォント

- **Muli**: NEW バッジなど英字バッジの専用フォント（Google Fonts）。`Muli, sans-serif`
- **Arial**: 検索フィールドの入力用フォント

### 3.3 font-family 指定

```css
/* 本文・見出し（メインスタック） */
font-family: "Noto Sans Japanese", sans-serif;

/* バッジ用（NEW、SOLD OUT 等） */
font-family: Muli, sans-serif;

/* 検索フィールド */
font-family: Arial;
```

### 3.4 文字サイズ・ウェイト階層

蔦屋書店は**極小フォントを多用**する。情報量を優先するため、PC ビューでも 10px が標準サイズ。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Body | 10px | 300 | normal | 0.1em (1px) | サイト全体の基本サイズ。極小 |
| H1 / H2 / Section Title | 28px | 700 | normal | 0.1em (1px) | "RECOMMEND" "TODAY'S EVENT" |
| Sub Banner Title | 24px | 300 | normal | 0.1em (1px) | 検索バー周辺の大型テキスト |
| Calendar Date Cell | 16px | 700 | 50px (3.125) | 0.1em (1px) | 営業時間カレンダー |
| Search Label (sp) | 14.4px | 300 | normal | 0.1em (1px) | スマートフォン用ラベル |
| Nav Item | 14px | 300 | 64px (4.57) | normal | グローバルナビ。lh 64px はヘッダー高 64px に揃える |
| Skip Link | 12px | 300 | normal | 0.1em (1px) | "メインコンテンツへ移動" |
| Product Title | 12px | 300 | 18px (1.5) | 0.1em (1px) | 商品名 |
| Price | 12px | 300 | normal | 0.1em (1px) | "￥5,500" 価格表示 |
| Product Code | 10px | 300 | normal | 0.1em (1px) | 商品 ID |
| NEW Badge | 11px | 700 | 22px (2.0) | 0.18em (2px) | Muli フォント。バッジ専用 |

### 3.5 行間・字間

- **本文の line-height: normal**（ブラウザデフォルト ≒ 1.2）。日本語サイトとしては詰めた行間
- **テーブルセル lh 50px**: カレンダーの曜日マスは 50px の行高で正方形を意識
- **ナビ lh 64px**: ヘッダー領域の高さ 64px に行高を一致させ、垂直方向中央揃えを実現
- **letter-spacing: 1px (0.1em)**: ほぼすべてのテキストに均一に適用。極小フォントを読みやすく
- **NEW バッジは letter-spacing: 2px**: より広く開けて、英大文字バッジとしての視認性を確保

### 3.6 OpenType 機能 / palt

- **palt は使用しない**。Noto Sans Japanese のデフォルトメトリクスを尊重
- font-feature-settings は明示指定なし

### 3.7 数値・記号の組み方

- **半角数字優先**: "￥5,500"、"2026.05.07(水)" など、価格・日付は半角数字で組む
- **括弧は全角**: 日付の "(水)" は全角括弧で組まれる
- **ナンバリング**: 商品 ID "53407" は半角数字 10px / 300 で表示

---

## 4. Component Stylings

### Buttons / Links

蔦屋書店は CTA に明示的な「ボタン枠」を持たない。すべてテキストリンクか、テキストの前後に下線を付ける程度。

**Skip Link（左上の隠しリンク）**

- Background: `#000000`
- Text: `#ffffff`
- Font: Noto Sans Japanese 12px / 300
- Padding: 8px
- Border Radius: 0px
- Letter Spacing: 0.1em

**MORE / 一覧へ**

- Background: `#ffffff`
- Text: `#000000`
- Font: Noto Sans Japanese 10px / 300
- Padding: 0px（テキストのみ）
- Border Radius: 0px
- Underline: hover 時のみ

**Nav Item**

- Background: transparent
- Text: `#000000`
- Font: Noto Sans Japanese 14px / 300
- Line Height: 64px（ヘッダー高に一致）
- Padding: 0 12px

### Badge

**NEW Badge（赤）**

- Background: `#c4002e`
- Text: `#ffffff`
- Font Family: **Muli**, sans-serif
- Font Size: 11px
- Font Weight: 700
- Line Height: 22px
- Padding: 0 0 0 3px（左に微小オフセット）
- Border Radius: 0px
- Letter Spacing: 0.18em (2px)

**Category Tag（暖灰）**

- Background: `#93928b`
- Text: `#ffffff`
- Font: Noto Sans Japanese 10px / 300
- Padding: 4px 12px
- Border Radius: 0px

### Cards

**Event Card（クリーム）**

- Background: `#e5e5e1`
- Border: なし
- Border Radius: 0px
- Padding: 内側にゆとり
- Shadow: なし

**Product Card**

- Background: `#ffffff`（または #f6f6f3 シリーズ背景に置く）
- Border: なし
- Border Radius: 0px
- Image: 矩形のままトリミング
- Title 12px + Price 12px + Code 10px の3 段構成

### Inputs

**Search Field**

- Background: `#ffffff`
- Border: 1px solid `#dadada`
- Border Radius: 0px（完全直角）
- Padding: 12px
- Font Family: Arial
- Font Size: 16px
- Line Height: 46px

**Search Submit Button**

- Background: `#c0c0c0`
- Border: なし
- Border Radius: 0px
- Padding: 12px

### Calendar Table（営業時間）

- Border: 1px solid `#dadada`（セル境界）
- Cell padding: 0
- Cell line-height: 50px
- Saturday color: `#4f9eef`
- Sunday color: `#ee6a6a`
- Weekday color: `#000000`
- Header (曜日名) weight: 700

---

## 5. Layout Principles

### Container

- 最大幅は 1200〜1400px 想定
- ヘッダー高さ: 64px（ナビ lh と一致）
- フッター padding: 上下 40px

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 2px | バッジ内余白、小細工 |
| S | 8px | Skip Link padding |
| M | 12px | ナビ左右、フォーム padding |
| L | 20px | セクションラベル左右 padding |
| XL | 40px | フッター上下 |
| XXL | 64px | ヘッダー高 |

### Grid

- ヒーローはフル幅（書影スライド）
- 商品グリッドは 4〜5 カラム（PC）→ 2 カラム（タブレット）→ 1 カラム（モバイル）
- カレンダーは 7 カラム固定（曜日）

---

## 6. Depth & Elevation

蔦屋書店は**完全フラット**。ドロップシャドウや角丸を一切使わず、紙面のような平面性を保つ。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

書店の店内が「本棚と本」で立体的に構成されているため、**画面内では平面に徹する**——というインテリア設計の延長としての UI。

---

## 7. Do's and Don'ts

### Do（推奨）

- **すべての面要素で `border-radius: 0px`** を徹底（pill や角丸は禁止）
- 主背景は **`#f6f6f3`（クラフト紙のクリーム色）**。純白は使わない
- 本文・見出しは **Noto Sans Japanese** に統一。明朝・游ゴシックは使わない
- 本文は **`color: #000000`（純黒可）**、価格のみ `#333333`
- 全テキストに **`letter-spacing: 0.1em (1px)`** を適用。極小フォントの可読性を担保
- 本文は **10px** が標準。情報量を優先する
- 「NEW」バッジは **#c4002e + Muli フォント + letter-spacing 0.18em**
- カテゴリ面色は **#93928b（暖灰）+ #ffffff 文字**
- ナビゲーションの line-height はヘッダー高（64px）に合わせる
- カレンダーの土曜は **#4f9eef**、日曜は **#ee6a6a**（古典的な配色）
- ドロップシャドウ・角丸を使わず、紙面的な平面に徹する

### Don't（禁止）

- 角丸 CTA・pill ボタン（`border-radius > 0`）を作らない
- ドロップシャドウ（`box-shadow`）を使わない
- ベース背景を純白 `#ffffff` にしない（`#f6f6f3` が標準）
- 明朝体や游ゴシックを使わない（Noto Sans Japanese 一択）
- 大型タイトル（28px）以外で **font-weight: 700** を多用しない（300 が標準）
- 本文を `letter-spacing: normal` で組まない（1px 開ける）
- ヒーローに大型 CTA ボタンを置かない（書影とテキストリンクで構成）
- 鮮やかなアクセントカラー（青・緑・黄）をブランド色として導入しない（#c4002e の赤のみ）
- 行間 1.5 以上で本文を組まない（`normal` ≒ 1.2 が標準）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン（`hide_pc` クラス） |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ（`hide_sp` クラス） |

### モバイル時の調整

- ヘッダー: PC のグローバルナビ → ハンバーガーメニュー
- 検索バー: ヘッダー上から専用バナー化（24px / 300 / `#dadada` 背景）
- 商品グリッド: 4 カラム → 2 カラム
- カレンダー: 7 カラムのまま、セルサイズが縮小
- "ENGLISH / 中文 / 法人のお客様" などの言語切替は SP では別レイアウト

### タッチターゲット

- ナビ link は line-height 64px で確保
- 商品カードは画像領域 + 18px 行間タイトルで最低 200px 高を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: 代官山 蔦屋書店 (Daikanyama T-SITE)
Surface: #f6f6f3 (クラフト紙クリーム、純白不可)
Card: #ffffff
Card Alt: #e5e5e1 (イベント・お知らせ)
Light Surface: #f7f7f7 (TODAY'S EVENT 等)
Category Tag: #93928b + #ffffff text
Tsutaya Red: #c4002e (NEW バッジのみ)
Body Color: #000000 (純黒可)
Price Color: #333333
Saturday: #4f9eef
Sunday: #ee6a6a
Border: #dadada
Font: "Noto Sans Japanese", sans-serif
Badge Font: Muli, sans-serif
Search Font: Arial
Body Size: 10px (極小)
H2 Size: 28px / 700
Letter Spacing: 1px (0.1em) — 全要素
Badge Letter Spacing: 2px (0.18em)
Border Radius: 0px (全要素)
Shadow: none (フラット)
Nav Line Height: 64px (ヘッダー高)
```

### プロンプト例

```
代官山 蔦屋書店のデザインシステムに従って、新刊フェアの紹介ページを作成してください。
- フォント: "Noto Sans Japanese", sans-serif（明朝・游ゴシック禁止）
- ベース背景: #f6f6f3 (クリーム、純白禁止)
- 本文 10px / 300 / letter-spacing 1px / color #000000
- セクションタイトル 28px / 700 / letter-spacing 1px (RECOMMEND, NEW BOOKS 等は英大文字)
- NEW バッジ: bg #c4002e + #ffffff text + Muli 11px/700 + letter-spacing 2px
- カテゴリラベル: bg #93928b + #ffffff text + Noto Sans 10px/300 + padding 4px 12px
- すべて border-radius: 0px (角丸・pill 禁止)
- box-shadow: none (フラット)
- 商品カード: 画像 + 12px タイトル + 12px 価格 + 10px 商品ID の 3 段構成
- カレンダー: 土曜 #4f9eef、日曜 #ee6a6a、平日 #000000、line-height 50px
- 検索フィールドは Arial 16px / border 1px solid #dadada / radius 0
```

### 字詰め・組版の重要ポイント

1. **極小フォント主義**: 本文 10px が標準。情報量を優先する書店の網羅性を表現
2. **letter-spacing 0.1em の徹底**: すべてのテキストに均一適用。極小フォントを読ませるための処置
3. **完全直角**: border-radius 0px をすべての要素で守る。書棚と本の矩形性を UI に反映
4. **完全フラット**: box-shadow 不使用。紙面のような平面性
5. **Noto Sans 一択**: 明朝も游ゴシックも使わない徹底ぶり。書店なのに書体は装飾せず、書籍の装丁を主役にする思想
6. **クラフト紙クリーム #f6f6f3**: 純白を避け、本のページのような暖かみを基調に
7. **NEW バッジは英字 Muli フォント**: 和文サイトながら、英字バッジだけ専用フォントを当てる
8. **カレンダーの土日色**: 4f9eef / ee6a6a の古典的配色を採用。ベタな日本のカレンダー慣習を尊重

---

**取得日**: 2026-05-08
**出典**: https://store.tsite.jp/daikanyama/, https://store.tsite.jp/daikanyama/event/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + ユニーク背景色集計
