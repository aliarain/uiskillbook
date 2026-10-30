# DESIGN.md — カキモリ (Kakimori)

> カキモリ（https://kakimori.com/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 蔵前のセミオーダー文具店らしい、紙とインクの手仕事感を伝えるクラフトECサイト。商品写真の風合いと余白を主役に、UI は黒・グレー・白のモノトーンで控えめに支える
- **密度**: 1.8 行間でゆったり組む和文本文と、商品グリッドの大判写真。情報密度は意図的に低く、書く道具を選ぶ静けさを再現
- **キーワード**: 文具、紙、インク、書く、蔵前、セミオーダー、職人、静謐、品格、モノトーン
- **特徴**: 見出しは英文セリフ **eb-garamond** + 和文明朝 **zen-old-mincho** の合わせ技。本文 UI は **Morisawa Gothic Medium BBB** のしっとりしたゴシック。ブランドアクセントは **オレンジ #f6921e**（ロゴ・タグでわずかに使用）。CTA は radius 4px の控えめな矩形で、Web 文具店としての真面目な手触りを保つ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

カキモリは無彩色を基調に、**オレンジ**を僅かなアクセントとして点で使う。

- **Brand Orange** (`#f6921e`): ロゴ、新着タグ、強調点（rgb 246, 146, 30）— 1 ページに 1〜2 箇所のみ
- **Ink Black** (`#1f1f1f`): ボタン枠線、最濃のテキスト（rgb 31, 31, 31）

### Neutral

- **Text Primary** (`#333333`): 本文・見出し基調色（rgb 51, 51, 51）。純黒は使わない
- **Text Inverse** (`#ffffff`): 反転テキスト
- **Surface** (`#ffffff`): 標準背景
- **Surface Subtle** (`#ededed`): View more ボタン背景、軽いコンテナ
- **Surface Muted** (`#969696`): 反転 CTA の背景（rgb 150, 150, 150）
- **Border Light** (`#c8c8c8`): 標準ボーダー（rgb 200, 200, 200）
- **Border Solid** (`#000000`): OK ボタン等の強い枠
- **Overlay**: `rgba(0, 0, 0, 0.5)` — 写真上のテキスト下地

### Product Swatch（商品色見本）

カキモリの「オーダーインク」では商品色そのものが面色になる。代表的な実測値:

- **Natural** `#fcdba6` — 紙のような淡いベージュ
- **Blue** `#3d74e5` — オーダーインクの青
- **Frost / Glass nib** などのプロダクト名がそのまま色のラベルになる

### Accent

- 強い差し色は使わない。プロダクト写真のインクの色が画面のアクセントを担う

---

## 3. Typography Rules

### 3.1 和文フォント

カキモリはモリサワの **見出しゴ MB31 系統に近い "Gothic Medium BBB"**（Adobe Fonts）を本文・UI に採用。見出しと一部の文章には **Zen Old Mincho**（Google Fonts、和文明朝）を組み合わせる。

- **Gothic Medium BBB**（Morisawa）: 本文・ボタン・ナビ。しっとりしたモダンゴシック
- **Zen Old Mincho**: 一部の見出し・引用。静謐な明朝体
- **Zen Kaku Gothic New**: 一部のリード文（蔵前への思いを語る箇所など）に部分的に使用
- **sans-serif / serif**: 最終フォールバック

### 3.2 欧文フォント

- **EB Garamond**: 英文見出し（h1〜h4 すべて）。古典的な書籍体セリフ
- **Times New Roman / serif**: フォールバック

### 3.3 font-family 指定

```css
/* Body / UI（本文・ボタン・ナビ） */
font-family: "Gothic Medium BBB", sans-serif;

/* Headings（h1〜h4 + 多くの h2 / h3） */
font-family: eb-garamond, zen-old-mincho, serif;

/* 一部リード文 */
font-family: "Zen Kaku Gothic New", sans-serif;
```

**フォールバックの考え方**:
- 本文は Adobe Fonts の Gothic Medium BBB を最優先。読まれて Adobe Fonts が失敗した場合は OS 標準ゴシックに戻す
- 見出しは英数字（eb-garamond）と和文（zen-old-mincho）を一つのスタックに同居させ、欧文部分は Garamond、和文部分は明朝で組む二段構え

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Font | 備考 |
|------|------|--------|-------------|------|------|
| Brand Logo (h1) | 34px | 400 | 1.25 (42.5px) | eb-garamond + zen-old-mincho | "Kakimori" ロゴ |
| Lang Switch (h2) | 28px | 400 | 1.25 (35px) | eb-garamond + zen-old-mincho | "言語" 等 |
| Section Title (h2) | 24px | 400 | 1.25 (30px) | eb-garamond + zen-old-mincho | "お知らせ" |
| Card Title (h3) | 24px | 400 | 1.25 (30px) | eb-garamond + zen-old-mincho | "オーダーインク" |
| Pen Title (h3) | 18〜20px | 400 | 1.25 | eb-garamond + zen-old-mincho | "ペン" "Frost" |
| Search Heading (h4) | 18px | 400 | 1.25 (22.5px) | eb-garamond + zen-old-mincho | "最も検索された商品" |
| Cookie Title (h2) | 19.2px | 700 | 1.25 (24px) | Gothic Medium BBB | クッキーポリシー本文 |
| Footer Heading (h3) | 16px | 600 | 1.25 (20px) | eb-garamond + zen-old-mincho | "カキモリからのお便り" |
| Lead | 16px | 600 | 1.8 (28.8px) | Zen Kaku Gothic New | "たのしく、書く人。が集う町は" |
| Body | 16px | 400 | 1.3〜1.8 | Gothic Medium BBB | 本文。Cookie 文章は 1.3、コンテンツ系 1.8 |
| Body Small | 14px | 400 | 1.5 (21px) | Gothic Medium BBB | 商品名 |
| Description | 14px | 400 | 1.8 (25.2px) | Gothic Medium BBB | "内部の機構もデザインの一部に…" |
| Footer Item | 13px | 400 | 1.8 (23.4px) | Gothic Medium BBB | フッター登録案内 |
| Caption | 12px | 400 | 1.33 (16px) | Gothic Medium BBB | カート個数、補足 |
| Price Unit | 11.9px | 400 | 1.2 | Gothic Medium BBB | "単価" 等の補助情報 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8` を中心に、1.5（商品名）と 1.3（注意書き・規約）を場面で使い分ける。読み物として読ませる箇所はすべて 1.8
- **見出しの行間**: 大半の見出しは `line-height: 1.25`。EB Garamond / Zen Old Mincho の縦の伸びやかさを尊重し、英文書籍のように詰める
- **本文の字間**: `letter-spacing: normal`。和文の字面はそのままに、欧文セリフ側のメトリクスで自然に空ける
- **特殊な字間**: なし。カキモリは詰めも空けも入れない素のメトリクスで組む

### 3.6 OpenType 機能

- 抽出データ上に明示的な `font-feature-settings` 指定はなし（normal）
- Adobe Fonts の Gothic Medium BBB が持つデフォルトのカーニング・約物処理に委ねる
- **`palt` は使用しない**: 紙とインクの素朴な質感を文字でも保つため、和文の字詰めは行わない

### 3.7 改行・禁則

- 本文ブロックでは `word-break` を強制せず、ブラウザ標準の禁則に従う
- 商品名（「ラウシャガラスペン - Leaf green」のようにハイフンで色名を区切る命名）はカード内で 2 行に折り返してよい

---

## 4. Component Stylings

### Buttons

**Primary CTA（白地・黒枠）**（"受け入れる" "拒否する" などのモーダル・主要動作）

- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#1f1f1f`（インク色のシャープな黒）
- Border Radius: **2px**（ほぼ矩形に近い、控えめな角丸）
- Padding: 10px 25px
- Font Size: 16px
- Font Weight: 400
- Font Family: `"Gothic Medium BBB", sans-serif`

**Secondary CTA（薄グレー）**（"View more" の標準形）

- Background: `#ededed`
- Text: `#333333`
- Border: 1px solid `#ededed`
- Border Radius: **4px**
- Padding: 0 32px（縦は親要素の line-height で確保）
- Font Size: 14px
- Font Weight: 400

**Inverted CTA（濃グレー反転）**（"View more / 詳しく見る" の強い形・"ログイン"）

- Background: `#969696`
- Text: `#ffffff`
- Border: 1px solid `#969696`
- Border Radius: **4px**（ログイン等は 0px の矩形バリエーションあり）
- Padding: 0 32px
- Font Size: 14px

**Outline CTA**（"コンテンツにスキップ" のような a タグ）

- Background: transparent (`rgba(0,0,0,0)`)
- Text: `#333333`
- Border: 1px solid `#c8c8c8`
- Border Radius: 4px
- Padding: 0 32px

**Confirm CTA（黒）**（モーダル "OK"）

- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#c8c8c8`
- Border Radius: 4px
- Padding: 5px 10px
- Font Size: 14px

**Color Swatch CTA（円形）**（オーダーインクの色見本）

- Background: 商品色（例 `#fcdba6` Natural / `#3d74e5` Blue）
- Border: 1px solid `#c8c8c8`
- Border Radius: **50%**（完全な円）
- Padding: 0
- ラベル文字は `font-size: 0` で視覚的に隠す（aria-label で読み上げ）

### Inputs

実測の input 要素から:

- Font Size: 14px
- Font Family: `"Gothic Medium BBB", sans-serif`
- Line Height: 24〜32px
- 装飾は最小限（border は薄いグレー想定）
- メールアドレス入力欄など、フッターのニュースレター登録に多い

### Cards（商品カード）

- Background: `#ffffff`
- Border Radius: 0px（矩形）
- 内側 padding: 0、外側にゆとり（grid gap で表現）
- Shadow: なし（フラット）
- 商品画像 + h3（英文 + 和文混在のタイトル）+ p（小サイズの色名）+ 単価の構成

### Color Swatch List

オーダーインクのカラーセレクターは円形 50% radius のチップを横並びにする。チップの bg = 商品色、border = `#c8c8c8`、ラベルは隣接する小さな文字で。

---

## 5. Layout Principles

### Container

- ヘッダー: ロゴ中央寄せ + 言語切替 + カート（最小限の要素）
- メインコンテンツ: 商品グリッドが中央で 1〜3 カラム

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 5px | OK ボタン縦 padding |
| S | 10px | モーダル CTA 縦 padding |
| M | 25px | モーダル CTA 横 padding |
| L | 32px | View more 横 padding |
| XL | 多めの余白 | グリッド gap |

### Grid

- 商品グリッドは PC で 3 カラム、タブレット 2、モバイル 1 に折り返す
- カラースウォッチは横一列のスクロール

---

## 6. Depth & Elevation

カキモリはシャドウを基本使わずフラットに構成する。商品写真自体が立体感を持つため、UI からシャドウを抜いても十分に空間が出る。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。ほとんどの要素 |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.06)` | （想定値）モバイルの固定 CTA |
| Modal | `rgba(0, 0, 0, 0.5)` overlay | モーダル時の背景 |

`rgba(0, 0, 0, 0.5)` のオーバーレイのみ実測で確認できた（モーダル時の暗幕）。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文・見出しに `color: #333333` を使う（純黒は強い箇所のみ）
- 見出しは **eb-garamond + zen-old-mincho** の合成スタックで組む（英数字 = Garamond、和文 = 明朝）
- 本文・UI は **Gothic Medium BBB** で組む。OS 標準ゴシックは最終手段
- 見出しの `line-height` は 1.25 と詰めて欧文書籍のリズムにする
- 本文の `line-height` は 1.8 を基本にする
- ボタン radius は **2px〜4px** の控えめな角丸。0px の矩形バリエーションも許容
- カラースウォッチは **border-radius: 50%** の円で、`border: 1px solid #c8c8c8` を必ず付ける
- ブランドオレンジ `#f6921e` は 1 ページに 1〜2 箇所のみ。ロゴ・新着タグなど

### Don't（禁止）

- 見出しに游ゴシック・Hiragino Sans を使わない（明朝・Garamond の品格が失われる）
- ボタンを完全 pill (radius: 50px) にしない。文具店としての真面目さが消える
- 鮮やかな色（赤・緑・青）を多用しない。プロダクトのインク色を主役に
- ドロップシャドウを多用しない。フラットを基本に
- 本文の line-height を 1.5 未満にしない
- `palt` で字詰めをしない。素のメトリクスで組む
- オレンジを面色（背景）として広く使わない。点で使う

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- ヘッダーはハンバーガーメニュー化
- 商品グリッドは 1 カラムに折り返す
- 見出しは 24px → 20px 程度に縮小
- カラースウォッチは横スクロールのまま維持

### タッチターゲット

- Primary CTA は最低 40px 高（10+10+20 = 40px 程度）を確保
- Color swatch（円）は 44×44px 以上を推奨

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: カキモリ (Kakimori)
Primary Text: #333333
Brand Orange: #f6921e (1ページ1〜2箇所)
Surface: #ffffff
Surface Subtle: #ededed
Surface Muted: #969696
Border Light: #c8c8c8
Body Font: "Gothic Medium BBB", sans-serif
Heading Font: eb-garamond, zen-old-mincho, serif
Lead Font: "Zen Kaku Gothic New", sans-serif (一部)
Body Size: 16px / 400 / line-height 1.8
Heading line-height: 1.25
Letter Spacing: normal (palt 不使用)
CTA Border Radius: 2px〜4px
Color Swatch Radius: 50%
```

### プロンプト例

```
カキモリのデザインシステムに従って、新作インクの紹介ページを作成してください。
- 本文フォント: "Gothic Medium BBB", sans-serif
- 見出しフォント: eb-garamond, zen-old-mincho, serif
- 本文 color は #333333、line-height: 1.8
- 見出しは line-height: 1.25 で英数字を Garamond、和文を明朝で組む
- CTA「商品を見る」は #ffffff bg + #333333 text + 1px solid #1f1f1f + radius 2px + padding 10px 25px
- カラースウォッチは商品色 bg + 1px solid #c8c8c8 + border-radius 50%
- ブランドオレンジ #f6921e はロゴと NEW タグのみに点使い
- palt は使わない。素のメトリクスで組む
```

### 字詰め・組版の重要ポイント

1. **見出しはセリフ二段構え**: `eb-garamond, zen-old-mincho, serif` で英数字と和文を別フォントに振り分けるのがカキモリの肝
2. **本文は Morisawa Gothic Medium BBB**: Adobe Fonts のしっとりしたゴシックで OS 標準ではない
3. **角丸は控えめに**: 2px〜4px。pill にせず、矩形に寄せる
4. **オレンジは点使い**: 面色にせず、ロゴ・新着・強調の小さな単位で
5. **palt なし、letter-spacing normal**: 紙とインクの素朴な質感を尊重

---

**取得日**: 2026-05-08
**出典**: https://kakimori.com/, https://kakimori.com/products/inkstand
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
