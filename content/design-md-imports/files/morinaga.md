# DESIGN.md --- MORINAGA

> MORINAGA（https://www.morinaga.co.jp/）のデザイン仕様書。
> 2026-05-21 取得の computed style に基づく。
> 森永製菓のコーポレートサイト。チョコボール、ハイチュウ、ダース、森永ミルクキャラメル等の菓子ブランドを展開する日本の総合製菓メーカー。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表する製菓メーカーのコーポレートサイト。**森永レッド（#b6002a）** を全面に展開し、pill 型ボタンと白背景で清潔感と信頼感を表現。菓子メーカーらしい親しみやすさと、老舗企業としての堅実さを両立するデザイン
- **密度**: コンテンツ重視の情報ポータル型。商品情報・キャンペーン・企業情報等を多層的に配置。白と #f7f7f7 の交互背景でセクションを視覚的に分離
- **キーワード**: 森永レッド、pill CTA、游ゴシック Medium、白基調、製菓ブランド、信頼感
- **特徴**: **デフォルト font-weight が 500（Medium）** という珍しい設計。通常の 400（Regular）より一段太く、日本語テキスト全体にやや力強い印象を与える。H2 は 42px / weight 500 で、太字（700）を使わない上品で軽やかな見出し。palt 非適用、letter-spacing も normal で、游ゴシックのデフォルト字間をそのまま活かすシンプルな組版。Verdana・Arial がフォールバックに入る（日本語サイトとしてはやや珍しい）

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

森永のカラーパレットは深い赤（#b6002a）を軸にした、力強くも落ち着いた構成。

- **Morinaga Red** (`#b6002a`): メインのブランドカラー。CTA ボタン背景・アクセント・ヘッダー等に使用（rgb 182, 0, 42）。キリンの鮮明な赤（#f00000）と比較すると深みと落ち着きがあり、老舗製菓メーカーの品格を表現
- **Allergy Blue** (`#003f9a`): アレルギー情報ボタンに使用（rgb 0, 63, 154）。安全・安心を伝えるセマンティックカラー

### Text

- **Text Primary** (`#000000`): 本文テキスト。純黒を使用（通常の日本語サイトは #333 が多いが、森永は #000）
- **Text Secondary** (`#666666`): 補足テキスト、タイムスタンプ、ラベル（rgb 102, 102, 102）
- **Text Tertiary** (`#707070`): 本文バリアント、グレーテキスト（rgb 112, 112, 112）
- **Text Heading Sub** (`#696969`): クッキーバナー見出し・H3（rgb 105, 105, 105）
- **Text on Red** (`#ffffff`): 赤背景上の白テキスト

### Semantic

- **Link Blue** (`#3860be`): 標準リンクカラー（rgb 56, 96, 190）
- **Green** (`#468254`): アクセント・サステナビリティ関連（rgb 70, 130, 84）

### Surface

- **Background** (`#ffffff`): ページ背景
- **Background Section** (`#f7f7f7`): セクション背景のライトグレー（rgb 247, 247, 247）
- **Footer** (`#b6002a`): フッター背景。ブランドレッドで統一

### Border & UI

- **Navy** (`#27455c`): クッキーバナー背景（rgb 39, 69, 92）。OneTrust 等の同意バナー用
- **Filter Blue** (`#3860be`): フィルターアイコン背景（rgb 56, 96, 190）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック（Yu Gothic / YuGothic）--- フォールバックチェーンの先頭に配置。macOS / Windows 標準搭載のため環境非依存
- **レガシーフォールバック**: メイリオ（Windows）、ヒラギノ角ゴ ProN W3（macOS）

### 3.2 欧文フォント

- **サンセリフ**: Verdana、Arial --- フォールバックチェーンの後方に配置。日本語サイトでは珍しいが、Verdana の広い字面と游ゴシックの相性を考慮した選択と推測
- **セリフ・等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 全テキスト共通 --- 游ゴシックファーストの和文優先スタック */
font-family: 游ゴシック, "Yu Gothic", YuGothic, メイリオ, Meiryo,
  "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
  Verdana, Arial, sans-serif;
```

**フォールバックの考え方**:
- 先頭の游ゴシックで和文の表示品質を確保（OS 標準フォント）
- `"Yu Gothic"` はダブルクオート指定（Windows での英語名参照用）
- `YuGothic` はクオートなしの旧形式指定（互換性）
- メイリオ → ヒラギノ角ゴ ProN は Windows → macOS のフォールバック
- Verdana → Arial は最終的な欧文フォールバック（日本語サイトとしては珍しい）
- **preview.html では Noto Sans JP（Google Fonts）を代替使用**（游ゴシックはローカルフォントのためブラウザ環境依存）

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-21 取得）。**デフォルト weight が 500** である点に特に注意。

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| H2（セクションタイトル） | 42px | 500 | 1.4 (58.8px) | normal | メインセクション見出し。500 weight で上品な印象 |
| H2（サブセクション） | 32px | 700 | 1.8 (57.6px) | normal | サブセクション見出し。こちらは太字 |
| P（サブタイトル） | 20px | 700 | 1.4 (28px) | normal | フッター CTA スタイルの強調テキスト |
| H3 | 18px | 700 | 1.2 (21.6px) | normal | 小見出し。color: #696969 |
| Body | 16px | 500 | 1.8 (28.8px) | normal | 本文。**500 weight がデフォルト**。color: #000 |
| A（ナビ） | 16px | 700 | 1.2 (19.2px) | normal | ヘッダーナビゲーション。color: #000 |
| A（コンテンツ） | 16px | 500 | --- | normal | コンテンツ内リンク。color: #000 or #333 |
| Span（メタ） | 14px | 500 | --- | normal | タイムスタンプ、ラベル。color: #666 |
| H4（カテゴリ） | 14.08px | 600 | 1.5 (21.12px) | normal | クッキーカテゴリ。color: #696969 |

**ウェイトの特徴**:
- 本文・ナビリンク・メタ情報がすべて **weight: 500（Medium）** --- 通常の 400 より一段太い
- 見出し（H2 sub・H3）とナビゲーションは **weight: 700** で差別化
- **H2 メインセクション（42px）は weight: 500** --- 太字を使わずサイズだけで階層を表現する上品なアプローチ
- H4 のみ **weight: 600** というバリエーションが存在

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（28.8px / 16px）--- 日本語サイトとしてはゆったりめ。weight 500 の太めの文字でも可読性を確保
- **H2 メインの行間**: `line-height: 1.4`（58.8px / 42px）--- 大きな見出しにはやや詰めた行間
- **H2 サブの行間**: `line-height: 1.8`（57.6px / 32px）--- 本文と同じ比率
- **H3 の行間**: `line-height: 1.2`（21.6px / 18px）--- コンパクトな小見出し
- **本文の字間**: `letter-spacing: normal`（0）--- カスタム字間なし
- **見出しの字間**: `letter-spacing: normal`（0）--- こちらもカスタム字間なし

**ガイドライン**:
- letter-spacing は**全要素 normal**。palt も非適用で、游ゴシックのデフォルト字間をそのまま使う設計
- line-height は本文 1.8 / 見出し 1.2〜1.4 の**多段階構成**
- weight 500 + line-height 1.8 の組み合わせが森永の本文スタイルの核心。やや太めの文字をゆったりした行間で読ませる

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長いURL・商品コードの折り返し */
```

- 日本語固有の禁則処理は特別な設定なし。ブラウザデフォルトに従う
- 商品名（チョコボール、ハイチュウ等）にカタカナと英語が混在するため、overflow-wrap の設定が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。游ゴシックのデフォルト字間をそのまま使用
- **kern**: ブラウザデフォルトに委ねる
- weight 500 のやや太い文字に対して字詰めを行わないことで、ゆったりとした可読性の高い組版を実現

### 3.8 縦書き

- 該当なし。森永製菓コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill 型・赤塗りつぶし）**

森永の CTA は **Morinaga Red 塗りつぶし + pill 型** が基本。

- Background: `#b6002a`
- Text: `#ffffff`
- Border Radius: **100px**（pill 型）
- Font Size: 16px
- Font Weight: 500

**Secondary CTA（pill 型・アウトライン）**

- Background: `#ffffff`
- Text: `#b6002a`
- Border: 1px solid `#b6002a`
- Border Radius: **100px**（pill 型）

**Allergy Button（pill 型・青塗りつぶし）**

- Background: `#003f9a`
- Text: `#ffffff`
- Border Radius: **100px**（pill 型）

**Cookie OK Button（角型）**

- Background: `#b6002a`
- Text: `#ffffff`
- Border Radius: **2px**（角丸ではなくほぼ角型）

**Cookie Settings Button（角型・アウトライン）**

- Background: `#ffffff`
- Text: `#b6002a`
- Border Radius: **2px**

**ボタンの考え方**:
- メインの CTA は **pill 型（border-radius 100px）** で統一
- クッキーバナーの同意系ボタンのみ **border-radius 2px** の角型（OneTrust の標準デザイン準拠）
- Primary CTA は **#b6002a 塗りつぶし**、Secondary は **#b6002a アウトライン**
- アレルギー情報ボタンのみ **#003f9a（ブルー）** で安全情報としての視覚的差別化

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border Radius: 4px
- Font Size: 16px
- Font Weight: 500
- Focus Border: 2px solid `#b6002a`

### Cards

- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Border Radius: 8px
- Padding: 20px
- Shadow: なし（フラット基調）

### Navigation

- Link Size: 16px
- Weight: 700
- Line Height: 1.2
- Color: `#000000`
- Header Background: `#ffffff`

### Footer

- Background: `#b6002a`（Morinaga Red）
- Text Color: `#ffffff`

---

## 5. Layout Principles

### Spacing Scale

実測値に基づく推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間隔 |
| S | 8px | ボタン内のミニマム余白 |
| M | 16px | 本文段落間の余白 |
| L | 32px | セクション内のブロック間隔 |
| XL | 64px | セクション間余白 |
| XXL | 80px | ヒーロー上下余白 |

### Container

- Max Width: 1200px（推定）
- Section Padding (horizontal): `48px`（デスクトップ）
- セクション間の区切り: 背景色の切り替え（白 → #f7f7f7）で視覚的に分離

### Grid

- 商品グリッド: デスクトップで 4 カラム
- カードグリッド: デスクトップで 3 カラム
- セクションは全幅背景 + コンテンツ幅制約の二層構造

---

## 6. Depth & Elevation

森永は背景色の切り替えで階層を構成する。box-shadow は最小限のフラットなデザイン。

| Level | 表現 | 用途 |
|-------|------|------|
| 0 | `background: #ffffff` | 通常コンテンツ・カード |
| 1 | `background: #f7f7f7` | セクション背景・商品一覧エリア |
| 2 | `background: #b6002a` | フッター・CTA エリア |
| 3 | `background: #27455c` | クッキーバナー |

- 背景色の 3 段（白 → ライトグレー → ブランドレッド）で面の階層を構成
- シャドウよりも**背景色のコントラスト**でセクションの性格を表現
- hover 時に微細な box-shadow を加える程度

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **游ゴシック → Yu Gothic → YuGothic → メイリオ → ヒラギノ角ゴ ProN → Verdana → Arial → sans-serif** の完全なスタックを指定する
- CTA ボタンは **pill 型（border-radius 100px）** にする
- Primary CTA は **#b6002a 塗りつぶし + 白テキスト** にする
- **本文の font-weight は 500（Medium）** を使う。400 ではなく 500 がデフォルト
- H2 メインセクション（42px）は **weight: 500** を使う。700 にしない
- 本文の line-height は **1.8** を使う
- セクション背景は `#ffffff` と `#f7f7f7` を交互に使う
- フッター背景は **#b6002a（Morinaga Red）** にする
- テキストリンクは **#3860be** にする
- 補足テキスト・メタ情報は **#666666** を使う
- アレルギー情報には **#003f9a（ブルー）** を使い、安全情報として視覚的に差別化する
- letter-spacing は **normal** にする（カスタム字間は使わない）

### Don't（禁止）

- 本文の font-weight を 400（Regular）にしない（500 がブランドのデフォルト）
- H2 メインセクション（42px）を weight: 700 にしない（500 で上品に見せる設計）
- 明朝体・セリフ系フォントを追加しない（ゴシック体サンセリフ構成がブランドの基本）
- メイン CTA に角丸（border-radius 8px 等）を使わない（pill 型 100px で統一）
- CTA に **#003f9a（ブルー）** を使わない（ブルーはアレルギー情報専用。CTA は #b6002a）
- `palt`（font-feature-settings: "palt"）を適用しない（normal がデフォルト設計）
- letter-spacing にカスタム値を設定しない（全要素 normal）
- 本文の line-height を 1.5 以下にしない（weight 500 + 1.8 が森永の可読性設計）
- フォント指定で「游ゴシック」の3つの表記（游ゴシック / "Yu Gothic" / YuGothic）を省略しない（Windows 互換に直結する）
- フッターの赤背景 #b6002a を #f00000 等の鮮明な赤に変えない（深みのある赤が森永の品格）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。ハンバーガーナビ化 |
| Tablet | 768〜1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |

### モバイル時の調整

- H2（42px）→ 28〜32px 程度に縮小
- セクション横 padding（48px）→ 16〜20px に縮小
- 商品グリッドは 2 カラムに折り返し
- pill 型ボタンの形状はモバイルでも維持
- フッターの赤背景 #b6002a はモバイルでも変更なし

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- pill 型ボタンは十分なタッチ領域を確保

### フォントサイズの調整

- モバイルでは本文 14〜16px、見出しはデスクトップの 70〜80% 程度に縮小
- font-weight 500 はモバイルでも維持（ブランドの基本設計）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: MORINAGA（森永製菓）
Origin: 森永製菓 --- チョコボール・ハイチュウ・ダース・森永ミルクキャラメル等の日本の総合製菓メーカー
Morinaga Red: #b6002a（CTA・フッター・ブランドアクセント）
Allergy Blue: #003f9a（アレルギー情報ボタン）
Link Blue: #3860be
Green: #468254（サステナビリティ）
Text Primary: #000000
Text Secondary: #666666
Text Tertiary: #707070
Background: #ffffff
Background Section: #f7f7f7
Footer: #b6002a
Font: 游ゴシック, "Yu Gothic", YuGothic, メイリオ, Meiryo,
      "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
      Verdana, Arial, sans-serif
Preview Font: "Noto Sans JP"（Google Fonts 代替）
palt: 非適用（font-feature-settings: normal）
letter-spacing: normal（全要素）
Body: 16px / 500 / line-height 1.8 / color #000
H2 Main: 42px / 500 / line-height 1.4
H2 Sub: 32px / 700 / line-height 1.8
H3: 18px / 700 / line-height 1.2
P Subtitle: 20px / 700 / line-height 1.4
Caption: 14px / 500 / color #666666
CTA Style: bg #b6002a / text #fff / radius 100px (pill)
Secondary CTA: bg #fff / text #b6002a / border 1px solid #b6002a / radius 100px (pill)
Button Shape: pill 型（100px radius）
Default Weight: 500（Medium --- 通常の 400 より一段太い）
Shadow: 背景色の切替で面の階層を表現（フラット基調）
```

### プロンプト例

```
森永製菓のデザインシステムに従って、商品一覧ページを作成してください。
- フォント: 游ゴシック, "Yu Gothic", YuGothic, メイリオ, Meiryo,
    "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
    Verdana, Arial, sans-serif
- font-feature-settings: normal（palt は非適用）
- letter-spacing: normal（カスタム字間なし）
- 本文: 16px / font-weight: 500 / line-height: 1.8 / color: #000000
- H2: 42px / font-weight: 500 / line-height: 1.4（太字ではなく Medium）
- H3: 18px / font-weight: 700 / line-height: 1.2
- CTA「商品を見る」: bg #b6002a / text #fff / border-radius: 100px (pill)
- Secondary CTA: bg #fff / text #b6002a / border: 1px solid #b6002a / border-radius: 100px (pill)
- 背景: セクションごとに #ffffff / #f7f7f7 を交互に使用
- フッター: bg #b6002a / text #fff
- リンクテキスト: #3860be
- シャドウは使わず背景色の切り替えで面の階層を作る
```

### 字詰め・組版の重要ポイント

1. **font-weight 500 がデフォルト**: 本文・メタ情報・ナビリンクすべてが 500（Medium）。400（Regular）を使うと森永らしさが失われる。H2 メイン（42px）も 500 で、太字を使わずサイズだけで階層を表現する上品なアプローチ
2. **游ゴシックの3表記**: `游ゴシック`（日本語名）、`"Yu Gothic"`（Windows 英語名）、`YuGothic`（旧形式）の3つをすべて指定する。省略すると特定の Windows 環境でフォールバックが発生する
3. **深い赤 #b6002a**: #f00000 のような鮮明な赤ではなく、ダークチェリーに近い深い赤。老舗製菓メーカーの品格を表現する重要なブランドカラー
4. **line-height 1.8**: weight 500 の太めの文字に対してゆったりした行間を設定。文字の太さと行間の広さのバランスが森永の可読性設計の核心
5. **pill 型ボタン（100px radius）**: メイン CTA は pill 型で統一。クッキーバナーのみ 2px radius の角型（OneTrust 準拠）
6. **preview.html のフォント代替**: 游ゴシックはローカルフォントのため、preview.html では Noto Sans JP（Google Fonts、weight 500 / 700）を代替として使用

---

**取得日**: 2026-05-21
**出典**: https://www.morinaga.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
