# DESIGN.md — ポスタルコ (POSTALCO)

> ポスタルコ（https://www.postalco.net/）のデザイン仕様書。
> 2026-05-08 取得の computed style と CSS Custom Properties に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 2000年に Mike Abelson と古内ヨシエが創業した東京の革・紙製品ブランド。スイス的なグリッドと、和紙を思わせる **暖かみのあるオフホワイト #fffffb** を基調にした静謐なエディトリアル。色も装飾も最小限で、製品写真と素材感そのものを主役にする
- **密度**: 余白がたっぷりで、本文は 14px / 行間 1.6 と一般的、ただし極めて少ない情報量で構成。`letter-spacing: 2px` の広い字間が見出しに適用され、文字が呼吸するような組版
- **キーワード**: 革製品、文房具、暖色オフホワイト、Jost、極淡グレー、矩形に近い角丸 3px、控えめなティール、ストア兼アーカイブ
- **特徴**: 欧文は **Jost**（幾何学サンセリフ）一本で、和文は OS のサンセリフフォールバックに任せる。本文の色は黒ではなく **#7d7d7d** のミディアムグレー。アクセントに **ティール #1e596c** が稀に登場する。ボタンは `border-radius: 3px` のごく控えめな角丸の矩形

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

POSTALCO はブランドカラーを「色」ではなく「素材の白さ」で表現する。**#fffffb** の暖かみのあるオフホワイトが面の基準。

- **Warm Off-white** (`#fffffb`): メイン背景・カード面（rgb 255, 255, 251）。`--payment-terms-background-color` に同値が定義されている
- **Pure White** (`#ffffff`): 純白。一部の透過レイヤーで使用

### Text & Gray Scale

POSTALCO の文字は黒ではない。すべてグレースケールで階調をつくる。

- **Body Gray** (`#7d7d7d`): 本文の標準色（rgb 125, 125, 125）。本文・キャプション
- **Heading Gray** (`#636363`): 見出しの色（rgb 99, 99, 99）。h1〜h3
- **Deep Gray** (`#171717`): 一部の濃いテキスト（rgb 23, 23, 23）。プロモ等
- **Mid Gray** (`#afafaf`): More ボタン等の Outline CTA 背景（rgb 175, 175, 175）
- **Promo Cream** (`#f7f6eb`): プロモバナー文字色（rgb 247, 246, 235）に使われる薄黄白

### Surface（面）

- **Surface Subtle** (`#f0f0f0`): セクション地・カード地（rgb 240, 240, 240）— 出現回数最多
- **Surface Muted** (`#e9e9e9`): 区切りや更に薄いカード（rgb 233, 233, 233）
- **Surface Cool** (`#eff3f3`): 涼しげな淡いセクション（rgb 239, 243, 243）
- **Surface Coolest** (`#f7f7f8`): 最も淡い面（rgb 247, 247, 248）
- **Overlay Dark** (`rgba(0, 0, 0, 0.3)`): 画像オーバーレイ

### Accent

- **Postal Teal** (`#1e596c`): プロモ・ロゴ周辺で稀に登場するアクセント（rgb 30, 89, 108）。深い青緑

---

## 3. Typography Rules

### 3.1 和文フォント

POSTALCO は明示的な和文 Web フォントを指定しない。`Jost, sans-serif` の `sans-serif` フォールバックで OS のシステム和文ゴシック（macOS なら Hiragino Sans、Windows なら游ゴシック）に委ねる方針。

- **Hiragino Sans**: macOS デフォルト
- **Yu Gothic**: Windows デフォルト
- **Noto Sans CJK JP**: Linux 等の代替

### 3.2 欧文フォント

- **Jost**: indestructible Software 制作のオープンソース幾何学サンセリフ（Futura のリバイバル）。すべての要素で唯一指定される

### 3.3 font-family 指定

```css
/* すべての要素 */
font-family: Jost, sans-serif;
```

**フォールバックの考え方**:
- Jost が読み込めない場合は OS の標準サンセリフ
- 日本語環境では sans-serif → Hiragino Sans / Yu Gothic にフォールバック
- セリフ・明朝は **使用しない**

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Major Title (h2/h1) | 22px | 400 | 1.2 (26.4px) | 2px | "オールレザースナップパッドの先行予約" 等 |
| Section Title (h2) | 20px | 400 | 1.2〜1.5 (24px) | normal〜2px | "ウェア" "霧の中の展望台" 等 |
| Sub Title (h1 in-content) | 18px | 400 | 1.0 (18px) | 2px | "ニュースレター登録" |
| Card Title (h3) | 19px | 400 | 1.2 (22.8px) | normal | "Tシャツ" 等のカテゴリ |
| Body | 14px | 400 | 1.6 (22.4px) | normal | 本文。`body` の基準 |
| Caption | 12px | 400 | 1.3 (15.6px) | normal | "¥11,000以上のご購入で日本国内送料無料" |
| Form Label | 14px | 400 | 1.6 | normal | フォーム本体 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.6`（22.4px / 14px）— 一般的なサンセリフ本文の値
- **見出しの行間**: 1.0〜1.5。Major Title は 1.2 と詰めて重さを出す
- **見出しの字間**: `letter-spacing: 2px`（≈0.09em）— 大きく開けた字間がブランドの上品さの源
- **本文の字間**: `letter-spacing: normal`（0）— 見出しと本文で意図的にコントラストを作る
- **見出しは widely-tracked、本文は normal**: POSTALCO の組版の二面性

### 3.6 OpenType 機能

- 抽出データ上で明示的な `font-feature-settings` 指定はなし（normal）
- Jost の備える既定のカーニングに依存
- **`palt` は使用しない**: 和文に対する詰め指示はなし。OS フォールバックでの自然な字間

### 3.7 改行・禁則

- 本文は word-break: normal の自然な折り返し
- 商品名（"オールレザースナップパッド" 等）は改行を許容
- 数字 + 通貨記号（"¥11,000" など）は半角扱い

---

## 4. Component Stylings

### Buttons

**Outline CTA / More Button**（"More" "GOOGLE MAP" のリンク的アクション）

- Background: `#afafaf`（ミドルグレー）
- Text: `#fffffb`（暖オフホワイト）
- Border: なし
- Border Radius: **3px**（極小の角丸）
- Padding: `14.4px 25px`
- Font Family: `Jost, sans-serif`
- Font Size: 14px
- Font Weight: 400
- Letter Spacing: normal

**Form Submit（登録ボタン）**

- Background: `#7d7d7d`（ボディグレー、More より濃い）
- Text: `#fffffb`
- Border Radius: **3px**
- Padding: `14.4px 25px`
- Font Family: `Jost, sans-serif`

**Language Toggle / Select**（"日本語" 等の言語切替）

- Background: `#fffffb`
- Text: `#7d7d7d`
- Border Radius: **3px**
- Padding: `10.5px 42px 10.5px 14px`（右に大きい余白で矢印アイコン用）

**ボタンの考え方**:
- 強い色は使わず、グレー濃度の階調で階層を作る
- More（薄）→ Submit（濃）→ Disabled（最薄）
- Border Radius はすべて 3px。ピル（pill）も完全矩形も使わない。控えめな角丸が POSTALCO らしさ

### Inputs

- Font Family: `Jost, sans-serif`
- Font Size: 14px
- Border: 1px solid `#e9e9e9` 想定
- Border Radius: 3px
- Background: `#fffffb`

### Cards

- Background: `#fffffb` または `#f0f0f0`
- Border Radius: 0px（カード自体は矩形）
- Shadow: なし（フラット）
- 製品写真 + h3 カテゴリ + 短いキャプションの構成

### Section Backgrounds

- Hero: `#fffffb`（暖オフホワイト）
- Listing: `#f0f0f0` の薄グレー
- Newsletter: `#e9e9e9`
- Promo Bar: `#1e596c`（ティール）に `#f7f6eb` の文字

---

## 5. Layout Principles

### Container

- ヘッダーは max-width 全幅、内側で中央寄せ
- メインコンテンツは固定 max-width（実測ベースで 1200px 前後想定）の中央寄せ
- フッターは max-width 全幅で薄グレー地

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10.5px | Select の縦 padding |
| S | 14px | CTA 横 padding 最小 |
| M | 14.4px | CTA 縦 padding |
| L | 25px | CTA 横 padding |
| XL | 42px | Select の右 padding（矢印スペース） |

### Grid

- ヒーローは 1 カラム全幅（製品写真または記事サムネイル）
- 商品グリッドは 2〜3 カラム（少数精鋭の表示）
- フッターは 3〜4 カラム

---

## 6. Depth & Elevation

POSTALCO はシャドウを基本使わない。グレー濃度の階調と細い境界線で空間を作る。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準 |
| 1 | `1px solid #e9e9e9` border | カード・セクション境界 |
| 2 | `rgba(0, 0, 0, 0.3)` overlay | 画像上のテキストレイヤー |

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文 color は **`#7d7d7d`**、見出しは **`#636363`** のグレースケール
- フォントは **Jost** 一本。和文は `sans-serif` で OS フォールバック
- 見出しに **`letter-spacing: 2px`** を必ず適用する。POSTALCO の上品さの核
- 本文 letter-spacing は **`normal`**（見出しと本文でコントラストをつくる）
- 本文の `line-height: 1.6` を確保
- ボタンは **`border-radius: 3px`** の控えめな角丸
- font-weight は **400** のみ
- 背景は `#fffffb` の暖オフホワイトを基準にする
- プロモにのみアクセントとして **`#1e596c`** のティールを稀に使う

### Don't（禁止）

- 純白 `#ffffff` を背景に使わない（POSTALCO の暖かみが失われる）
- 純黒 `#000000` を本文色に使わない
- 太字（700）を使わない。Jost 400 の細さを保つ
- pill（border-radius 50%）を使わない
- 完全矩形（border-radius 0px）にもしない（3px の角丸が個性）
- セリフ・明朝を使わない
- 鮮やかな色（赤・緑・オレンジ）を使わない
- 見出しの letter-spacing を 0 にしない（広い字間が POSTALCO の特徴）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Major Title h2 22px → 20px
- 商品グリッドは 1〜2 カラムに折り返す
- ナビゲーションはハンバーガーメニュー化

### タッチターゲット

- CTA は最小 40px 高（14.4 + 14.4 + 14 = 42.8px）を確保
- リンクのタッチエリアは padding を含めて十分確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: ポスタルコ (POSTALCO)
Surface (Warm Off-white): #fffffb
Surface Subtle: #f0f0f0
Surface Muted: #e9e9e9
Body Gray: #7d7d7d
Heading Gray: #636363
Deep Gray: #171717
Mid Gray (Outline CTA bg): #afafaf
Accent Teal: #1e596c
Body Font: Jost, sans-serif
Body Size: 14px / 400 / line-height 1.6
Heading Letter Spacing: 2px
Body Letter Spacing: normal
Heading Weight: 400 (太字禁止)
CTA Border Radius: 3px
CTA Padding: 14.4px 25px
palt: 使用しない
```

### プロンプト例

```
ポスタルコ(POSTALCO)のデザインシステムに従って、新作レザー製品の紹介ページを作成してください。
- フォント: Jost, sans-serif（和文は OS フォールバック）
- 背景: #fffffb の暖オフホワイト
- 本文 color は #7d7d7d、line-height: 1.6、letter-spacing: normal
- 見出し color は #636363、letter-spacing: 2px、font-weight 400
- ヒーローは製品の大判写真 + h2 22px / 400 / letter-spacing 2px
- 本文は p 14px の控えめな短文
- CTA「詳しく見る」は #afafaf bg + #fffffb text + radius 3px + padding 14.4px 25px
- フォーム送信は #7d7d7d bg で More より一段濃く
- セクション地は #f0f0f0 の薄グレーで分節
- プロモバナーには稀に #1e596c のティールを差し色として使う
- 装飾は最小限。グレースケールと暖オフホワイトのみで構成する
```

### 字詰め・組版の重要ポイント

1. **見出しに letter-spacing 2px**: POSTALCO の組版の核心。Jost の幾何学的な字面を解放する
2. **本文は letter-spacing normal**: 見出しと本文で意図的なコントラストを作る
3. **本文色は #7d7d7d**: 黒ではなくミディアムグレー。柔らかさの源
4. **背景は #fffffb の暖オフホワイト**: 純白を避け、和紙のような温度を持たせる
5. **CTA は radius 3px**: pill でも矩形でもない、ごく控えめな角丸
6. **font-weight 400 縛り**: Jost の細さを保つ。太字にしない

---

**取得日**: 2026-05-08
**出典**: https://www.postalco.net/, https://www.postalco.net/jp/products/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
