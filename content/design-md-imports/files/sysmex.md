# DESIGN.md — シスメックス（Sysmex）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-29 / 対象: `https://www.sysmex.co.jp/`, `/corporate/philosophy_brand/brand.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **自社専用の欧文書体を持ち、和文は Noto Sans JP に任せる和欧二層。** 色は青 1 色と無彩色だけ。写真の上に白い大見出しを置き、本文は `#efefef` の淡いグレー地に黒で組む
- **密度**: 中程度。本文 16px / 行間 1.6、カードの見出しは 12〜14px と小さめで、余白よりも整列で読ませる
- **キーワード**: 自社書体、Sysmex ブルー、字間ゼロ、淡いグレー地、一角だけ 60px の角丸

**このサイトの核心は4つある。**

1. **`Sysmex` という自社専用の欧文書体を 4 ウェイト自社配信している。** `Sysmex-Light.woff2` / `-Regular` / `-Medium` / `-Bold` の 4 本が `document.fonts` で**すべて `loaded`**。隠し div の幅実測で `300 → 529.56px` / `400 → 540px` / `500 → 546.17px` / `700 → 557.28px` / **`800 → 557.28px`（700 と同じ）** と出るので、**実在するのは 4 本だけ**
2. **`Sysmex` は欧文専用で、和文は 2 番目の Noto Sans JP が受ける。** font-family スタックは**サイト全体で 1 本だけ**（トップ 216 要素 / 下層 142 要素）。Noto Sans JP は Google Fonts の**可変フォント**（`wght@300..700`）
3. **`letter-spacing: normal` が可視要素の 100%**（トップ 216/216、下層 148/148）。**字間をいじる要素が 1 つも無い**
4. **`font-feature-settings` の宣言が 0 件。** ただし実測では効く（40px の `「東京」、（映画）。・` が `normal` 360px → `palt` 300px）。**詰められるのに詰めない**のがこのサイトの選択

CSS Custom Properties は **52 個すべて自社トークン**（プラットフォーム由来 0）。命名は `--color__base__main` のような**二重アンダースコアの BEM 風**で、**書体そのものも `--font__font-family--2: "Sysmex"` とトークン化されている**。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Sysmex Blue** | **`#005bac`** | **文字 99 要素 / 罫線 109 要素 / 面 8 要素**（2 ページ合計）。リンク、アイコン、見出し、枠線、CTA の枠。このサイトで唯一の有彩色 |
| Accent Red | `#bc1a2a` | **2 ページとも可視 0 要素。** `--color__base__accent` / `--color__font__red` / `--color__badge__high` の 3 トークンが同じ値を指すが、描画されている要素が無い |

> **`--color__news__category--1` 〜 `--5` の 5 つは全部 `#005bac` で同じ色。** ニュース区分ごとに色を変える枠が用意されているが、**現状はすべて同じ青**。また **`--color__sub__5` は値が空文字**。トークンの枠と実装が一致していない箇所として扱う。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し。**可視 262 要素（2 ページ合計）で最多**。このサイトは本文に純黒を使う
- **Text Secondary** (`#666666`): `--color__font__TX2`。**可視 0 要素**（宣言のみ）
- **Text on Dark** (`#ffffff`): 写真の上の見出し・ヒーロー CTA（可視 31 要素）
- **Secondary Surface** (`#e3e7eb`): サイドナビ・メガメニューの項目の面（**可視 43 要素**）
- **Pagination Inactive** (`#bfd1e0`): スライダーの非選択ドット（可視 4 要素）
- **Border** (`#d8d9d9`): 区切り線（罫線 9 要素）。`#9e9e9e` / `#787878` も宣言されているが**可視 0**
- **Background** (`#efefef`): ページ背景（`pageBackground.resolved` = `rgb(239, 239, 239)` / 根拠 `body`）

> **ページの地色は白ではなく `#efefef`。** トップの `heroCover` は `heroCovered: true`（`div.home-mv__shape` が 1440×720 の `<img>` で覆う）だが、**コンテンツ領域の地色は `body` の `#efefef`**。下層ページでも同じ値が `body` から取れる。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **Noto Sans JP**（Google Fonts の可変フォント `wght@300..700`）。**和文はこれ 1 本**
- 明朝体は使わない。`@font-face` にも明朝の宣言は無い
- スタック末尾に `"Hiragino Sans"` / `Meiryo` が保険として並ぶが、Noto Sans JP が `loaded` している環境では到達しない

### 3.2 欧文フォント

- **サンセリフ（自社書体）**: **`Sysmex`**。自社ドメインから `Sysmex-Light.woff2` / `Sysmex-Regular.woff2` / `Sysmex-Medium.woff2` / `Sysmex-Bold.woff2` の 4 本を配信。**300 / 400 / 500 / 700 の 4 ウェイトのみ**
- 欧文（英数字・ラテン文字）は**すべてこの `Sysmex` で描画される**。和文は `Sysmex` にグリフが無いため Noto Sans JP に落ちる
- `Arial` がスタック末尾にあるが、`Sysmex` が `loaded` している以上到達しない

> **`font-weight: 800` や `900` を指定しても 700（Bold）で出る。** 実測で `700` と `800` の幅が一致した（557.28px）。**欧文のウェイトは 300 / 400 / 500 / 700 の 4 段から選ぶこと。**

### 3.3 font-family 指定

```css
/* 本文・UI（サイト全体でこれ 1 本） */
font-family: Sysmex, "Noto Sans JP", "Hiragino Sans", Meiryo, Arial, sans-serif;

/* 下層ページに 6 要素だけ存在する変種（欧文を Arial に落とす） */
font-family: Sysmex, Arial, "Hiragino Sans", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文専用の自社書体を先頭に置き、和文は 2 番目の Noto Sans JP に受けさせる**。和欧で書体を分ける典型的な構成
- `Sysmex` が読めない環境では欧文も Noto Sans JP が受ける（Noto Sans JP はラテン文字を持つ）ので、レイアウトは崩れない
- `@font-face` にトークンが用意されている: `--font__font-family: "Noto Sans JP"` / `--font__font-family--2: "Sysmex"`

### 3.4 文字サイズ・ウェイト階層

`html { font-size: 10px }` 固定なので `1rem = 10px`。トークンは `--font__font-size--XS` 〜 `--XL`（1.2rem 〜 2rem）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero (MV) | Sysmex / Noto Sans JP | 46px | 700 | 64.4px (1.40) | normal | 白文字。行ごとに `<span>` を分けてクリップアニメーション |
| Heading 1 | Sysmex / Noto Sans JP | 32px | 700 | 1.40 | normal | セクション見出し |
| Heading 2 | Sysmex / Noto Sans JP | 22px | 500 | 1.40 | normal | サブ見出し |
| Heading 3 | Sysmex / Noto Sans JP | 20px | 500 | 1.35 | normal | `--font__font-size--XL` |
| Lead | Sysmex / Noto Sans JP | 18px | 400 | 1.70 | normal | `--font__font-size--L` |
| Body | Sysmex / Noto Sans JP | 16px | 400 | 25.6px (1.60) | normal | `--font__font-size--M`。body の既定 |
| Caption | Sysmex / Noto Sans JP | 14px | 500 | 1.70 | normal | `--font__font-size--S`。ナビ・リンクラベル |
| Small | Sysmex / Noto Sans JP | 12px | 400 | 1.70 | normal | `--font__font-size--XS`。**可視 177 要素で最多サイズ** |

- **ウェイトは 400（131 要素）と 500（72 要素）の 2 段で大半を占める。** 700 は 12 要素（ヒーローと大見出しのみ）、300 は 1 要素
- **12px が最も多い**（トップ 93 / 下層 84 要素）。カードの補助情報とナビが 12px で組まれる

### 3.5 行間・字間

- **本文の行間**: **1.70**（可視 99 / 98 要素で最多）。`body` は `line-height: 25.6px`（16px × 1.6）
- **見出しの行間**: **1.40**（ヒーロー 46px → 64.4px、見出し 32px → 44.8px）
- **UI・ナビの行間**: 1.60
- **字間**: **`normal` 一択。可視要素の 100%**（216/216・148/148）

**ガイドライン**:
- **`letter-spacing` を 1 箇所も足さない。** 見出しにも本文にもバッジにも入っていない
- `line-height` は**無単位の比率**で指定する（`body` の 25.6px は 16 × 1.6 の計算結果であって、px を子へ降ろしている設計ではない。各要素が自分のサイズで 1.4 / 1.6 / 1.7 を再計算している）
- 本文 1.7、見出し 1.4 の**落差で階層を作る**

### 3.6 禁則処理・改行ルール

```css
/* body に 1 行だけ */
word-break: break-word;
```

- **`word-break: break-word`** を `body` に当てている（全 7 幅で確認）。長い英数字やURLが枠を割らないようにする指定で、和文の禁則処理は既定のまま
- `line-break` / `overflow-wrap` の明示指定は無い
- 行頭禁止: `）」』】〕〉》、。，．・：；？！` ／ 行末禁止: `（「『【〔〈《`（ブラウザ既定に任せる）

### 3.7 OpenType 機能

```css
/* 実サイトは一切指定していない */
/* font-feature-settings: 宣言 0 件 */
```

- **`font-feature-settings` の宣言が CSS 全文で 0 件。** `palt` も `halt` も `tnum` も使っていない
- **ただし書体側は機能を持っている。** 隠し div で実測すると 40px の `「東京」、（映画）。・` が `normal` 360px → `"palt"` 300px → `"halt"` 300px と**16.7% 縮む**
- **これは「使えないから使っていない」のではなく「使わないと決めている」**。約物を詰めない素直な組み方が、字間 `normal` 100% と揃っている

### 3.8 縦書き

```css
/* 該当なし */
```

- **`writing-mode: vertical-rl` は 2 ページとも 0 要素。** 縦組みはこのサイトの語彙に無い

---

## 4. Component Stylings

### Buttons

**Primary（枠線ボタン・このサイトの主役）**
- Background: `#ffffff`
- Text: `#005bac`
- Border: 1px solid `#005bac`
- Padding: 10px 38px 8px
- Border Radius: 20px
- Font Size: 14px
- Font Weight: 500

> **下の padding が上より 2px 小さい**（`10px 38px 8px`）。和文の見た目の重心を合わせるための調整なので、**上下を揃えない**こと。

**Secondary（写真の上・白抜き）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 9px 38px 6px
- Border Radius: 30px
- Font Size: 14px
- Font Weight: 500

**Tag（ハッシュタグ）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#005bac`
- Padding: 4px 11px 2px
- Border Radius: 13px
- Font Size: 16px / Weight 400

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#005bac`
- Border Radius: 5px
- Padding: 1px 6px
- Font Size: 16px
- 検索ボタンは `#005bac` の塗り面 / radius 5px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#d8d9d9`
- Border Radius: **10px**（可視 26 要素でこのサイト最多の角丸）
- Shadow: `none`（Depth & Elevation 参照）
- ナビ項目の面は `#e3e7eb` / 角丸なし / padding `13px 50px 14px 30px`

### Navigation

- サイドナビ・メガメニューの項目: 背景 `#e3e7eb` / 14px / weight 400 / 角丸 0
- ページ上部へ戻るボタン: `#005bac` の円（`border-radius: 50%`）/ 白 1px 枠
- スライダーのドット: 選択 `#005bac` / 非選択 `#bfd1e0` / `border-radius: 50%`

---

## 5. Layout Principles

### Spacing Scale

`html { font-size: 10px }` なので `rem` がそのまま 10 倍の px になる。

| Token | Value | 実装値 |
|-------|-------|--------|
| Link Gap | `--gap__link-gap` | 1rem = **10px** |
| Column Gap | `--gap__col-gap` | 2.4rem = **24px** |

### Container

- **Content Width**: `--format__content-W` = 113.2rem = **1132px**
- **Viewport Width（設計上限）**: `--format__viewport-W` = 192rem = **1920px**
- Header Height: `--header-height-base` = **110px**

### Grid

カラム幅がトークンとして固定で用意されている（流体グリッドではなく**決め打ちの幅**）。

| Token | Value | 実装値 |
|-------|-------|--------|
| `--col__2col` | 55.4rem | **554px** |
| `--col__3col` | 36rem | **360px** |
| `--col__4col` | 26.5rem | **265px** |
| `--col__5col` | 20.8rem | **208px** |
| `--col__6col` | 16.7rem | **167px** |

- Gutter: 24px（`--gap__col-gap`）
- 1132 = 360×3 + 24×2 + 4 の関係になっており、**3 カラムが基準**

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。カード・ボタン・ナビはすべてフラット** |

> **影を使わないサイト。** `box-shadow` の分布は 2 ページとも空。階層は `1px solid #d8d9d9` の罫線と、`#ffffff` / `#efefef` / `#e3e7eb` の 3 段の面色で作る。

**角丸だけは特徴がある。** 10px（26 要素）/ 13px（8）/ 20px（5）/ 30px（1）/ 50%（7）に加えて、**`border-radius: 0px 60px 0px 0px` と `60px 0px 0px` という「一角だけ 60px」の面**が存在する（各 1 要素）。コーポレートブランドのページで使われる大きな切り欠きで、**四隅を均等にしない**のがこのサイトの癖。

---

## 7. Do's and Don'ts

### Do（推奨）

- **font-family は `Sysmex, "Noto Sans JP", "Hiragino Sans", Meiryo, Arial, sans-serif` の 1 本で通す**。ページや役割で切り替えない
- **欧文のウェイトは 300 / 400 / 500 / 700 の 4 段から選ぶ**
- **`letter-spacing: normal` を貫く**
- **`line-height` は無単位の比率で書く**。本文 1.7 / UI 1.6 / 見出し 1.4
- **`html { font-size: 10px }` を前提に `rem` を使う**（`1.6rem` = 16px）
- 有彩色は `#005bac` 1 色。罫線・文字・面のすべてをこの青でまかなう
- 本文色は**純黒 `#000000`**
- カードの角丸は **10px**、ボタンは **20px**、タグは **13px**
- ボタンの padding は**下を上より 2px 小さく**する（`10px 38px 8px`）
- ページの地色は **`#efefef`**。カードだけ白に抜く

### Don't（禁止）

- **`font-weight: 800` / `900` を欧文に当てない**（実在するのは 700 まで。指定しても 700 で出る）
- **`font-feature-settings: "palt"` を足さない**（実サイトは宣言 0 件。足すと約物が 16.7% 詰まって別物になる）
- **`letter-spacing` を足さない**（可視要素の 100% が `normal`）
- **`box-shadow` を足さない**（実サイトは 0 件）
- **明朝体を混ぜない**（和文は Noto Sans JP のみ）
- **`#bc1a2a`（アクセントレッド）を使わない。** トークンは 3 つあるが 2 ページとも可視 0 要素
- **ニュース区分を色分けしない。** `--color__news__category--1` 〜 `--5` は全部同じ `#005bac`
- **`line-height` を px で固定しない**（各要素が自分のサイズで再計算する設計）
- ページ背景を `#ffffff` にしない（`body` は `#efefef`）

---

## 8. Responsive Behavior

### Breakpoints

7 幅（1440 / 1200 / 1024 / 834 / 768 / 767 / 375px）で実測した結果、**ルートは完全固定、`body` だけがモバイルで 1 段落ちる**。

| Width | `html` | `body` | `body` line-height | h1 | p |
|-------|--------|--------|--------------------|----|----|
| 1440 / 1200 / 1024 / 834 / 768 / 767px | **10px** | **16px** | 25.6px | 46px | 18px |
| 375px | **10px** | **14px** | 22.4px | **28px** | 14px |

- **`html` は全幅 `10px` で 1 度も動かない。** 流体（`vw`）も `clamp()` も使っていない
- **`body` は 767px でもまだ 16px。** 落ちるのは 375px 側で、**崖は 767px より下にある**
- ヒーロー見出しは **46px → 28px**（0.61 倍）と大きく落とす
- 行間比（1.6）と字間（`normal`）は幅をまたいで変わらない

### タッチターゲット

- Primary ボタン: 14px / padding `10px 38px 8px` → 高さ約 42px。**44px をわずかに下回るのでモバイルでは高さを確保すること**
- ナビ項目: padding `13px 50px 14px 30px` → 高さ約 47px（満たす）
- タグ: padding `4px 11px 2px` → 高さ約 29px。**モバイルでは不足**

### フォントサイズの調整

- 12px / 14px / 16px / 18px の本文系は 767px まで固定、375px で 1 段ずつ落ちる
- **`rem` はルートが固定なので幅に追従しない。** モバイル調整はメディアクエリで明示的に行う

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue:   #005bac
Text Color:   #000000
Text on Dark: #ffffff
Surface Nav:  #e3e7eb
Border:       #d8d9d9
Background:   #efefef
Card:         #ffffff

Font: Sysmex, "Noto Sans JP", "Hiragino Sans", Meiryo, Arial, sans-serif
  （Sysmex = 欧文専用の自社書体 300/400/500/700。和文は Noto Sans JP）
Root: html 10px 固定 / body 16px（375px のみ 14px）
Body Size: 16px
Line Height: 1.70（本文） / 1.60（UI） / 1.40（見出し）
Letter Spacing: normal（例外なし）
font-feature-settings: なし
Border Radius: 10px（カード） / 20px（ボタン） / 13px（タグ） / 50%（丸）
Box Shadow: none
Container: 1132px / Gutter 24px
```

### プロンプト例

```
シスメックスのデザインシステムに従って、コーポレートサイトの事業紹介ページを作成してください。
- html { font-size: 10px } を前提に rem で書く（1.6rem = 16px）
- font-family は Sysmex, "Noto Sans JP", "Hiragino Sans", Meiryo, Arial, sans-serif の 1 本だけ
- 欧文のウェイトは 300/400/500/700 の 4 段のみ（800 以上は指定しない）
- letter-spacing は全要素 normal、font-feature-settings は書かない
- 本文 16px / line-height 1.7、見出し 32px / weight 700 / line-height 1.4
- ページ地色は #efefef、カードは #ffffff + 1px solid #d8d9d9 + border-radius 10px
- 有彩色は #005bac だけ。リンク・アイコン・罫線・CTA の枠をすべてこの青で
- CTA は 白地 / #005bac 1px 枠 / border-radius 20px / 14px weight 500 / padding 10px 38px 8px
- box-shadow は使わない
- コンテナ幅 1132px、カラム間 24px、3 カラム基準（1 カラム 360px）
```
