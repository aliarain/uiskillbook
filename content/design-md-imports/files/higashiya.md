# DESIGN.md — HIGASHIYA

> HIGASHIYA（https://www.higashiya.com/）のデザイン仕様書。
> Puppeteer による computed style 実測値（2026-05-08 取得）に基づく。
> SIMPLICITY の緒方慎一郎が手がける和菓子ブランド。銀座・南青山に店舗を持つ。
> 伝統的な和菓子を現代のライフスタイルに合わせて再解釈したブランドで、
> サイトデザインはギャラリーの展示空間を思わせる極度にミニマルな佇まい。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ギャラリーの展示キャプションのような極度のミニマリズム。色彩・装飾・UIコンポーネントをほぼ完全に排除し、タイポグラフィと余白だけで空間を構成する。商業的な Web サイトというより、和菓子という文化を静かに展示する空間
- **密度**: 極めて低い。body の基本 font-size が 10px という展示キャプション的サイズ設定。情報を最小限まで削ぎ落とし、余白が主役
- **キーワード**: 静謐、余白、ギャラリー、和紙、書、引き算の美学
- **特徴的なデザイン判断**:
  - 全ウェイト 400（Regular）のみ。ボールドを一切使わない
  - CTA ボタン・角丸・シャドウがゼロ。すべてのインタラクションはテキストリンク
  - 色彩は純黒 `#000` × 純白 `#fff` のモノクローム。アクセントカラー（朱色・和紙テクスチャ）は CSS ではなく画像として配置
  - 16 世紀フランス活字 Granjon と日本の教科書体の混植という、西洋のクラシシズムと日本の書道精神の融合

---

## 2. Color Palette & Roles

> HIGASHIYA のカラーパレットは意図的に色彩を排除したモノクロームである。
> 朱色や和紙のテクスチャはサイト上に見えるが、CSS の背景色ではなく画像として配置されている。

### Primary（ブランドカラー）

- **Black** (`#000000`): テキスト、ロゴ、ナビゲーション。サイト上のほぼすべてのテキスト要素
- **White** (`#ffffff`): ページ背景。純白

### Accent（画像ベース）

- **朱色**: 和菓子のパッケージや暖簾に見られるブランドの朱色。CSS カラーではなく、写真・イラスト画像として配置
- **和紙テクスチャ**: グレーがかった和紙の質感。背景画像として使用されるケースあり

### Neutral

- **Text Primary** (`#000000`): 本文・見出し・ナビゲーション。純粋な黒をそのまま使用
- **Background** (`#ffffff`): ページ背景
- **Border**: CSS ボーダーの使用は最小限。区切りは余白で表現

### 色に関する設計思想

HIGASHIYA は一般的な Web デザインの常識（「純粋な `#000` は避けてソフトブラックを使う」等）を意図的に無視している。純黒 × 純白のコントラストは、墨と和紙の関係性を表現するデザイン判断であり、ブランドの美意識に直結している。

---

## 3. Typography Rules

> HIGASHIYA のタイポグラフィは、このサイト最大の特徴であり設計の核心である。
> 欧文セリフ体 Granjon と和文教科書体の混植は、
> 西洋の古典活字と日本の書写文化を接続する極めて洗練された選択。

### 3.1 和文フォント

- **HGKyokashotai（HG教科書体）**: 最優先の和文フォント。筆跡を残した書写教育用書体で、毛筆の風合いを現代的に整理した書体。和菓子ブランドに品格ある筆の気配を与える
- **DF-KyouKaShoR-W3**: DynaFont の教科書体。HGKyokashotai がない環境でのフォールバック
- **游明朝 / Yu Mincho / YuMincho**: 教科書体がない環境での明朝体フォールバック。macOS / Windows 共通
- **Hiragino Mincho ProN**: macOS 向けヒラギノ明朝 ProN。最終フォールバック
- **serif**: ジェネリックファミリー

**フォールバックの設計思想**: 教科書体 → 明朝体 → serif と、すべて筆の気配を残す書体で統一。ゴシック体は一切使用しない。

### 3.2 欧文フォント

- **Granjon LT W01 Roman**: メインの欧文フォント（Web font）。16 世紀フランスの活字師 Robert Granjon に由来するオールドスタイル・セリフ体。クラシカルで格調が高く、小さなサイズでも優雅さを保つ
- **Garamond W01**: Granjon のフォールバック。同じく 16 世紀フランスの古典活字
- **Helvetica W01 Light Cn**: 日付・ラベル専用の欧文フォント。Condensed Light で数字を品よく狭めて表示する。本文の Granjon とは明確に使い分けられている

### 3.3 font-family 指定

```css
/* 本文・見出し（Granjon + 教科書体スタック） */
font-family: "Granjon LT W01 Roman", "Garamond W01", "Garamond W01",
  HGKyokashotai, DF-KyouKaShoR-W3, 游明朝, "Yu Mincho", YuMincho,
  "Hiragino Mincho ProN", serif;

/* 日付・ラベル・キャプション（Helvetica Cn + 教科書体スタック） */
font-family: "Helvetica W01 Light Cn", HGKyokashotai, DF-KyouKaShoR-W3,
  游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN", serif;
```

**フォールバックの考え方**:
- 欧文フォント（Granjon / Helvetica Cn）を先に指定し、欧文の表示品質を優先
- 和文は教科書体を最優先。教科書体がない環境では明朝体にフォールバック
- ゴシック体・サンセリフ体は一切含まない。ジェネリックファミリーも `serif`
- Garamond W01 が 2 回重複記述されているが、これは実サイトのまま記録

### 3.4 文字サイズ・ウェイト階層

> 全要素が weight 400（Regular）。ボールドは一切使用されていない。
> サイズの階層だけで情報の重要度を表現する。

| Role | Font Stack | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|-----------|------|--------|-------------|----------------|------|
| Logo (h1) | Granjon + 教科書体 | 36px | 400 | 50.4px (×1.4) | normal | サイトロゴ |
| Page Title (h2) | Granjon + 教科書体 | 22px | 400 | 30.8px (×1.4) | 1.76px (0.08em) | ページタイトル |
| Section Title (h3) | Granjon + 教科書体 | 20px | 400 | 28px (×1.4) | normal | セクション見出し |
| Nav Main (a) | Granjon + 教科書体 | 18px | 400 | 18px (×1.0) | normal | "はじめに" "果子" 等 |
| Nav Item (span) | Granjon + 教科書体 | 16px | 400 | — | normal | ナビゲーション項目 |
| Address (li) | Granjon + 教科書体 | 14px | 400 | 35px (×2.5) | normal | 店舗住所 |
| Subnav (a) | Granjon + 教科書体 | 13.5px | 400 | 9.45px | normal | サブナビゲーション |
| Body (p) | Granjon + 教科書体 | 13px | 400 | 22.75px (×1.75) | normal | 本文テキスト |
| Date Label (p) | Helvetica Cn + 教科書体 | 12px | 400 | 21px (×1.75) | 0.72px (0.06em) | 日付表示 |
| Nav Label (a) | Helvetica Cn + 教科書体 | 12px | 400 | — | 1.6px (0.133em) | "オンラインショップ" 等 |
| Footer (a) | Granjon + 教科書体 | 12px | 400 | normal | normal | "Privacy policy" 等 |
| Nav Small (li) | Helvetica Cn + 教科書体 | 10px | 400 | — | 1.6px (0.133em) | フッターナビ |
| Base (body) | Granjon + 教科書体 | 10px | 400 | 11.5px (×1.15) | normal | body の基本サイズ |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body グローバル: `11.5px` (10px × 1.15) — 非常にタイト。展示キャプション的
- 本文 (p): `22.75px` (13px × **1.75**) — 読み物テキストは相応の行間を確保
- 見出し (h1/h2/h3): `×1.4` で統一
- メインナビ (a 18px): `18px` (×1.0) — 行間ゼロ。一行テキスト前提
- 住所 (li 14px): `35px` (×**2.5**) — 非常に広い。住所の各行を独立した情報として見せる

**字間 (letter-spacing)** — 実測値:
- 本文 (p, body): `normal` — 字詰めなし
- ページタイトル (h2): `1.76px` (= 0.08em) — 穏やかに開く
- 日付ラベル (p 12px): `0.72px` (= 0.06em) — Helvetica Cn との組み合わせ
- ナビラベル (a/li): `1.6px` (= 0.133em) — 最も広い。Helvetica Cn の大文字・カタカナを大きく開く

**ガイドライン**:
- letter-spacing は要素の役割とフォントスタックごとに細かく分岐している
- Helvetica Cn を使うラベル要素ほど letter-spacing が広い（0.06em〜0.133em）
- Granjon 本文は letter-spacing: normal のまま。Granjon 自体のカーニングに任せる
- 全体に weight 400 しかないため、サイズと letter-spacing の微差が唯一の階層表現

### 3.6 禁則処理・改行ルール

```css
/* 実測された設定 */
word-break: normal;
overflow-wrap: normal;
```

- 特別な禁則処理設定は確認されなかった。ブラウザのデフォルト挙動に委ねている
- テキスト量自体が極めて少ないため、複雑な改行制御は不要という設計判断

### 3.7 OpenType 機能

```css
/* 全要素 */
font-feature-settings: normal;
```

- **palt（プロポーショナル字詰め）は未使用**。教科書体の自然な文字幅をそのまま活かす
- kern も明示的には設定されていない
- Granjon は Web font のため、ブラウザの font-kerning: auto によるカーニングが適用される

### 3.8 縦書き

- 該当なし。横書きのみ
- ただし和菓子の商品名や包装デザインには縦書きが使われるため、関連コンテンツを生成する場合は縦書きオプションを検討してよい

---

## 4. Component Stylings

> HIGASHIYA は一般的な Web UI コンポーネント（ボタン、カード、フォーム）を意図的に排除している。
> すべてのインタラクションはテキストリンクで実現されており、
> これはギャラリー空間における「展示物に触れないでください」的な抑制されたUXである。

### Links（唯一のインタラクション要素）

**Main Navigation**
- Font: Granjon + 教科書体スタック
- Size: 18px
- Weight: 400
- Color: `#000000`
- Text Decoration: none
- Hover: 控えめな変化（下線等）

**Label Navigation**
- Font: Helvetica W01 Light Cn + 教科書体スタック
- Size: 12px
- Weight: 400
- Color: `#000000`
- Letter Spacing: 1.6px (0.133em)

**Footer Links**
- Font: Granjon + 教科書体スタック
- Size: 12px
- Weight: 400
- Color: `#000000`

### Buttons

- **該当なし**: CSS 背景色を持つボタン要素は検出されなかった。ボタン UI は存在しない
- オンラインショップへの遷移もテキストリンクとして実装されている
- これは商業的な CTA を排除し、ギャラリー的な佇まいを保つための意図的な設計

### Cards

- **該当なし**: カードコンポーネントは使用されていない
- コンテンツは余白と最小限のテキストで区切られる

### Forms / Inputs

- **該当なし**: サイト上にフォーム要素は確認されなかった
- 問い合わせ・予約等はオンラインショップ側（別ドメイン）で処理される可能性が高い

---

## 5. Layout Principles

### Spacing Philosophy

HIGASHIYA のレイアウトは固定のスペーシングスケールではなく、コンテンツに応じた大胆な余白で構成される。ギャラリーの壁面に作品を配置するように、空間（余白）そのものがデザインの主要素。

### Container

- Max Width: コンテンツ幅は狭め（推定 800px 前後）。画面の大部分は余白
- Padding: 左右に十分な余白を確保し、テキストが画面中央に浮かぶ配置

### Grid

- 明確なグリッドシステムは使用していない
- コンテンツは縦方向のシングルカラムを基本とし、必要に応じて 2〜3 カラムに展開
- 商品写真ギャラリーはタイル状に配置されるが、CSS Grid/Flexbox ではなくシンプルな配置

### Navigation Layout

- メインナビゲーション: "はじめに" "果子" "折弁" "店" という和名メニュー（18px）
- サブナビゲーション: "オンラインショップ" 等の補足リンク（12px, Helvetica Cn）
- フッター: 住所・営業時間・Privacy policy 等

### Spacing Scale（推定）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の最小余白 |
| S | 16px | 同一グループ内の余白 |
| M | 32px | セクション内の余白 |
| L | 64px | セクション間の余白 |
| XL | 120px+ | ページセクション間の大きな余白 |

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | **すべての要素** |

- **シャドウは一切使用されていない**。フラットなデザインですらなく、要素間の階層自体が存在しない
- 奥行きの表現は写真の明暗とページ余白のみで行われる
- モーダル、ドロップダウン、ツールチップ等のオーバーレイ UI は存在しない
- `border-radius` もすべて `0`。角丸は一切使われていない

---

## 7. Do's and Don'ts

### Do（推奨）

- **フォントは Granjon + 教科書体の完全なフォールバックチェーンを指定する**。欧文優先の順序を守る
- **全テキストを weight 400 で統一する**。ボールドの誘惑に負けない。サイズと letter-spacing の微差だけで階層を表現する
- **純粋な `#000000` を使う**。HIGASHIYA は意図的に純黒を採用している。ソフトブラック（`#333` 等）は世界観を壊す
- **余白を主役にする**。テキスト量を極限まで減らし、空間の方が多いレイアウトにする
- **Helvetica Cn と Granjon を明確に使い分ける**。日付・ラベルは Helvetica Cn、本文・見出しは Granjon
- **ナビゲーションは和名を使う**。"果子" "折弁" "店" のような日本語メニュー
- **写真の余白処理にこだわる**。写真はトリミングせず、十分な余白で囲む
- **letter-spacing は要素ごとに実測値に従う**。特に Helvetica Cn ラベルの 0.133em は必ず再現する

### Don't（禁止）

- **ボールドウェイト（500以上）を使わない**。このデザインシステムに太字は存在しない
- **CTA ボタンを作らない**。背景色付きのボタン、pill ボタン、角丸ボタンはすべて世界観を破壊する。リンクはテキストリンクのみ
- **角丸（border-radius）を使わない**。すべてのエッジは直角
- **box-shadow を使わない**。奥行きの表現は余白と写真の明暗のみ
- **アクセントカラーを CSS で指定しない**。朱色等のブランドカラーは画像として配置する。CSS の `background-color` に色を持たせない
- **body の font-size を大きくしない**。10px は意図的な設計。展示キャプションの控えめさを体現している
- **ゴシック体・サンセリフ体をフォールバックに含めない**。フォールバック先も明朝体・教科書体で統一する
- **情報を詰め込まない**。1 画面に多くの情報を表示しようとしない。余白を削る衝動を抑える
- **`font-feature-settings: "palt"` を追加しない**。教科書体の自然な字幅が意図されている
- **グリッドシステムを強制しない**。コンテンツに応じた有機的な配置を優先する

---

## 8. Responsive Behavior

### 設計思想

HIGASHIYA のサイトは情報量が極めて少ないため、レスポンシブ対応はシンプルになる。余白の割合を保ちつつ、テキストサイズは大きく変更しない。

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | シングルカラム。余白を縮小 |
| Desktop | > 768px | フルレイアウト。大きな余白 |

### フォントサイズの調整

- body の 10px はモバイルでもデスクトップでもほぼ同一（元々極小のため変更不要）
- 本文 13px、見出し 20〜22px はモバイルでも可読性を保てるサイズ
- ロゴ（36px）はモバイルで若干縮小される可能性がある

### タッチターゲット

- メインナビ（18px テキストリンク）は十分なタッチ領域を持つ
- ただし 10px〜12px のフッターリンクはモバイルでのタッチ操作に注意が必要

### 余白の扱い

- モバイルでも余白を極端に詰めない。画面の 30% 以上は余白を維持する意識
- 写真ギャラリーはシングルカラムに切り替え、各写真の上下に十分な余白を確保する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Philosophy: 引き算の美学。ギャラリーの展示空間。
Text Color: #000000（純黒。ソフトブラックは使わない）
Background: #ffffff（純白）
Accent: 画像のみ（CSSカラーなし）
Border Radius: 0（角丸なし）
Box Shadow: none（シャドウなし）
Buttons: なし（テキストリンクのみ）

Main Font: "Granjon LT W01 Roman", "Garamond W01", "Garamond W01",
  HGKyokashotai, DF-KyouKaShoR-W3, 游明朝, "Yu Mincho", YuMincho,
  "Hiragino Mincho ProN", serif
Label Font: "Helvetica W01 Light Cn", HGKyokashotai, DF-KyouKaShoR-W3,
  游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN", serif

Body Size: 13px / weight: 400 / line-height: 1.75 / letter-spacing: normal
Page Title: 22px / weight: 400 / line-height: 1.4 / letter-spacing: 0.08em
Date Label: 12px (Helvetica Cn) / weight: 400 / letter-spacing: 0.06em
Nav Label: 12px (Helvetica Cn) / weight: 400 / letter-spacing: 0.133em

font-feature-settings: normal（palt なし）
font-weight: 400 only（ボールドなし）
```

### プロンプト例

```
HIGASHIYA のデザインに従って、和菓子の商品一覧ページを作成してください。

重要な原則:
- このデザインは一般的な Web サイトとは根本的に異なります
- ボタン UI は一切不要。すべてテキストリンクで構成してください
- font-weight は 400 のみ。ボールドは使いません
- 角丸・シャドウ・背景色付きコンポーネントは禁止です
- 画面の大部分を余白にしてください（コンテンツより余白の方が多い状態）

フォント:
- 本文: "Granjon LT W01 Roman", "Garamond W01", HGKyokashotai,
    DF-KyouKaShoR-W3, 游明朝, "Yu Mincho", YuMincho,
    "Hiragino Mincho ProN", serif
- ラベル・日付: "Helvetica W01 Light Cn" + 同上の和文スタック
- Granjon が読み込めない環境では Garamond → 教科書体 → 明朝体の順にフォールバック

色:
- テキスト: #000000（純黒）
- 背景: #ffffff（純白）
- アクセントカラーは CSS で指定しない（画像で表現）

タイポグラフィ:
- 商品名: 22px, weight 400, line-height 1.4, letter-spacing 0.08em
- 商品説明: 13px, weight 400, line-height 1.75, letter-spacing normal
- 価格ラベル: 12px, Helvetica Cn, weight 400, letter-spacing 0.06em
- font-feature-settings: normal（palt は使わない）

レイアウト:
- コンテンツ幅は狭め。左右に大きな余白
- 商品写真はトリミングせず、十分な余白で囲む
- 商品間の余白を大きく取る（64px 以上）
```

### Granjon が使えない環境での代替指針

Granjon LT W01 Roman は Web font（ライセンス制限あり）のため、preview.html や外部プロジェクトでは使用できない場合がある。

**推奨代替フォント（Google Fonts）**:
- **EB Garamond**: 同じく Garamond 系のオールドスタイル・セリフ体。Granjon に最も近い印象
- **Cormorant Garamond**: よりコントラストの強い Garamond 系。エレガントな印象が強い

**和文代替フォント（Google Fonts）**:
- 教科書体の Google Fonts 代替は存在しない
- **Noto Serif JP**: 明朝体フォールバックとして最も安定。教科書体の筆跡感は失われるが、セリフ体の格調は維持できる
- **Shippori Mincho**: 築地体系の明朝体。Noto Serif JP より筆の気配が残る

```css
/* Granjon が使えない環境での代替 font-family */
font-family: "EB Garamond", "Shippori Mincho", "Noto Serif JP", serif;
```
