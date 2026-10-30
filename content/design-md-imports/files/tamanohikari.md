# DESIGN.md — 玉乃光酒造（Tamanohikari Sake Brewing）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-15 / 対象: `https://tamanohikari.co.jp/`, `/article/596.html`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 濃紺（`#001328`）の地に写真を全面で敷き、**A1明朝 StdN の縦組みを右端に立てる**。1673年創業の京都の酒蔵を、黒地・白文字・明朝・縦組みの4点だけで表現する
- **密度**: 低い。角丸も影もほぼ無く（`border-radius` 2 種・`box-shadow` **0 種**）、余白と縦組みのリズムで構成する
- **キーワード**: A1明朝、縦組み、字空け0.2em、Morisawa Fonts Web、濃紺

**このサイトの核心は4つある。**

1. **既定の和文書体が明朝である。** `body` のスタック先頭が `MFW-PA1MinchoStdN-Regular`（A1明朝 StdN）で、`body` / `p` / `h1` / `h2` / `a` / `li` がすべてこれを継承する（実測 60 要素＋37 要素）。ゴシックが要る箇所だけ `MFW-YuGoPr6N-*`（游ゴシック Pr6N）のスタックに**差し替える**（実測 46＋25＋22 要素）。**多くの企業サイトと逆で、ゴシックが例外側**
2. **和文と欧文を別のベンダーから配信している。** 和文は **Morisawa Fonts Web**（`morisawafonts.net`）、欧文は **FontPlus**（`webfont.fontplus.jp` / `HelveticaNeueLTPro-Md` / `-Lt`）。フォント要求は 2 ホスト合わせて **69 件**、`@font-face` 宣言は **498 件**（サブセット分割）
3. **縦組みは本物で、字送りは常に `0.2em`。** `writing-mode: vertical-rl` が実測 **80 要素**（トップ）/ **50 要素**（記事）。ヒーローの「いい酒で、いい時間を、造る。」は画像ではなく `h2.copy` のテキスト（50px・`letter-spacing: 10px` ＝ 0.2em・`line-height: 85px` ＝ 1.7）
4. **OpenType 機能が横組みと縦組みで取り違えられている。** `"palt"` は **horizontal-tb に 47 要素**（正しい）だが、`"halt"` は **vertical-rl に 39 要素**、`"vkrn","vpal"` は **horizontal-tb に 4 要素**。**`halt` は横組み専用、`vpal`/`vkrn` は縦組み専用**なので、後者2つはどちらも効いていない（→ 3.7 節）

**CSS Custom Properties は 47 個すべて WordPress / Gutenberg 由来**（`own: 0`）。**自社の設計トークンは存在しない。** 色もサイズも実値で書かれている。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Navy**（基調） | **`#001328`** | **`body` の地色**。ナビの面（1440×900 相当）、`お知らせ記事一覧` / `玉乃光の商品一覧` の面、記事ページのヘッダ。**可視 10 要素**（トップ）/ 7 要素（記事） |
| **Deep Navy**（段差） | **`#040c16`** | 試飲・販売会情報などの**より暗いセクション地**。**可視 29 要素**。`#001328` との差は数値上わずかだが、セクションの切れ目として機能する |

> **赤・金といった「酒」の記号色を一切使わない。** 差し色は無く、白文字と写真だけで彩度を作る。

### Neutral（ニュートラル）

- **Page Background（トップ）** (`#001328`): `pageBackground.resolved` = `rgb(0,19,40)` / 根拠 `body`
  - **注意**: トップは `heroCovered: true`（`figure.figure_1` が 1496×935 の `background-image` で覆う）。**ヒーロー写真の茶色はページの地色ではない**
- **Page Background（記事）** (`#ebebed`): 記事ページは**地色が変わる**。`pageBackground.resolved` = `rgb(235,235,237)` / 根拠 `body`。**トップの濃紺を下層にも適用しない**
- **Surface（記事内）** (`#f5f5f5`): 記事一覧カードの面（可視 2 要素）
- **Text on Dark** (`#ffffff`): 本文・見出しの既定（**可視 156 要素**）
- **Text Muted on Dark** (`#dddddd` / `rgba(255,255,255,0.85)`): 補足テキスト（22 要素 / 14 要素）
- **Text on Light（記事）** (`#001328`): 記事本文（可視 38 要素）。**黒ではなくブランドの濃紺で組む**
- **Overlay**: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0))` — 記事ページの写真キャプション下敷き（**31 要素**）

---

## 3. Typography Rules

### 3.1 和文フォント

- **既定（見出し・ナビ・本文）**: **A1明朝 StdN Regular**（`MFW-PA1MinchoStdN-Regular`）。Morisawa Fonts Web 配信・`loaded` 済
- **ゴシックに落とす箇所**: **游ゴシック Pr6N Medium**（`MFW-YuGoPr6N-Medium`）/ **Demi**（`MFW-YuGoPr6N-Demi`）。どちらも `loaded` 済。お知らせ一覧・小見出し・キャプションに使う
- **宣言はあるが使われていない**: `mfw-pa1gothicstd-light` / `-regular` / `-medium`（A1ゴシック）、`mfw-pa1minchostdn-medium` は **4 つとも `unloaded`**。A1ゴシックは1要素も描画されない
- **フォールバック**: 游ゴシック → ヒラギノ角ゴ Pro → メイリオ の順。スタック途中に generic family は無く、末尾の `sans-serif` だけ

### 3.2 欧文フォント

- **Helvetica Neue LT Pro Medium**（`HelveticaNeueLTPro-Md`）: 見出し・ラベル。FontPlus 配信。実測 46＋25 要素
- **Helvetica Neue LT Pro Light**（`HelveticaNeueLTPro-Lt`）: 日付・キャプションなどの小さい欧文。実測 22 要素
- **Roboto**: `body` スタックの3番目に書かれているが、A1明朝 StdN が ASCII を持つため**到達しない**（実測 0 要素）

### 3.3 font-family 指定

```css
/* 既定（明朝）: body / p / h1 / h2 / a / li が継承 */
font-family:
  MFW-PA1MinchoStdN-Regular,       /* A1明朝 StdN R（Morisawa Fonts Web） */
  MFW-YuGoPr6N-Medium,             /* 明朝に無い字の受け皿 */
  Roboto,                          /* 実際には到達しない */
  "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体,
  "Noto Sans Japanese", "Source Sans Pro",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  メイリオ, Meiryo, sans-serif;

/* ゴシックに差し替えるとき（欧文 Medium ＋ 和文 Demi） */
font-family:
  HelveticaNeueLTPro-Md,           /* 欧文（FontPlus） */
  MFW-YuGoPr6N-Demi,               /* 和文（Morisawa Fonts Web） */
  "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体,
  "Source Sans Pro",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
  メイリオ, Meiryo, sans-serif;
```

> **太さはファミリー名で切り替える。** Morisawa Fonts Web の `@font-face` は**すべて `font-weight: 1 1000`** で宣言されているため、`font-weight` を 400→700 に上げても**同じファイルが返る**。実サイトが `font-weight: 500` / `600` を書いている箇所があるが、太さを作っているのは `-Medium` / `-Demi` というファミリー名の方。**`font-weight` を上げて太らせようとしないこと。**

### 3.4 文字サイズ・ウェイト階層

ルートは **`html: 14px` / `body: 14px` で 6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）すべて固定**。流体ではない。
大きい見出しだけが個別に `vw` と `clamp()` を持つ（CSS 全文で `font-size: *vw` が 132 箇所、`clamp()` が 23 箇所）。

| 用途 | 1440px | 1200px | 834px | 375px | ウェイト | 書体 |
|------|--------|--------|-------|-------|---------|------|
| **ヒーロー縦組み** `h2.copy` | **50px** | 45.6px | 40px | 31.875px | 400 | A1明朝 StdN |
| **セクション縦見出し** `h2.v` | **38.88px**（2.7vw） | 32.4px | 30px | 24.375px | 400 | A1明朝 StdN |
| 記事カード見出し | 30px | — | — | — | 600 | A1明朝 StdN |
| 中見出し | 16px | — | — | — | 600 | Helvetica Neue LT Pro Md |
| 本文 | 15〜18px | — | — | — | 400 | 継承（明朝） |
| 日付・ラベル | 11〜13px | — | — | — | 400〜500 | Helvetica Neue LT Pro Lt |

- **ウェイトは 400 / 500 / 600 の3段**（実測 400×175・600×11・500×8）。**700 以上は1要素も無い**

### 3.5 行間・字間

- **`line-height` は無単位の比率**。`body` は `25.2px / 14px` = **1.8**。各要素が自分のサイズで再計算する（実測比 1.70×60・1.80×48・1.00×38・2.40×26・1.50×20）
- **`letter-spacing` は各要素が `em` で持つ**（`body` 継承ではない）。サイズに比例して px が変わるのが根拠:

| 要素 | font-size | letter-spacing | em 換算 |
|------|-----------|----------------|---------|
| ヒーロー縦組み | 50px | 10px | **0.2em** |
| セクション縦見出し | 38.88px | 7.776px | **0.2em** |
| ナビ縦組み（大） | 17.28px | 3.456px | **0.2em** |
| ナビ縦組み（小） | 14px | 2.8px | **0.2em** |
| 記事カード見出し | 30px | 3.6px | 0.12em |
| 本文 | 18px | 2.16px | 0.12em |
| 中見出し | 16px | 1.6px | 0.1em |

> **縦組みは例外なく `0.2em`。** 幅を 1440 → 375px まで変えても `letter-spacing / font-size` は 0.2 のまま。横組みは 0.1〜0.12em。
> **行間はヒーローだけモバイルで変わる**（1.7 → **1.5** at 375px）。他は 1.7 のまま。

### 3.6 禁則処理・改行ルール

- `word-break` の宣言は無い。ブラウザ既定（日本語の禁則はブラウザ任せ）
- 縦組みの見出しは `<br>` ではなく**改行位置を文として与える**（「いい酒で、いい時間を、造る。」は1要素1行で、列の折り返しは `height` で決まる）

### 3.7 OpenType 機能

**実サイトは横組み用と縦組み用の機能を取り違えている。正しくはこう書く。**

| 宣言 | 実サイトでの適用先 | 効くか | 正しい使い方 |
|------|------------------|--------|-------------|
| `font-feature-settings: "palt"` | **horizontal-tb に 47 要素** | ✅ 効く | そのまま |
| `font-feature-settings: "halt"` | **vertical-rl に 39 要素** | ❌ **効かない** | 縦組みの約物半角詰めは **`"vhal"`** |
| `font-feature-settings: "vkrn","vpal"` | **horizontal-tb に 4 要素** | ❌ **効かない** | `vkrn`/`vpal` は**縦組み専用**。縦組み要素に移す |

- `halt` が効かない代わりに、**句読点を `<span class="short">` で包んで `letter-spacing: -0.4em` を当てて**詰めている（実測 `span.short` が 38.88px で `-15.552px`、41.76px で `-16.704px`、いずれも `、` `。` `」。` の1〜2文字）。**これは `vhal` を1行書けば不要になる手当て**
- **再現するときは `"vpal"` または `"vhal"` を縦組み要素に、`"palt"` を横組み要素に書く**。負の `letter-spacing` による約物詰めは真似しない

### 3.8 縦書き

- `writing-mode: vertical-rl`。実測 **80 要素**（トップ）/ **50 要素**（記事）
- **ナビは「横に並べる」構成**。同じ `top`（377px）で `left` が 991px / 953px と**右から左へ**並ぶ（DOM 順＝ `酒造りの礎` → `伝統と技`）。再現するときは **`flex-direction: row-reverse`** を使う（素の `display: flex` だと読む向きが逆になる）
- 縦組みの `line-height` は**列の間隔**になる。ナビは `line-height: 17.28px`（＝1.0・列を詰める）、ヒーローは `85px`（＝1.7・列を空ける）
- 縦組みの `letter-spacing` は**字と字の間**（縦方向）に効く。常に 0.2em

---

## 4. Component Stylings

### Buttons

**面色のボタンは2種類しかない。角丸・影ともに使わない。**

| 種別 | 面 | 文字 | 枠 | radius | padding | サイズ/ウェイト |
|------|----|------|----|--------|---------|----------------|
| **Solid（ナビ下の導線）** | `#001328` | `#ffffff` | なし | **0px** | `40px 20px` | 14px / 400 |
| **Ghost on Photo** | `rgba(0,0,0,0.2)` | `#ffffff` | `1px solid rgba(255,255,255,0.4)` | **0px** | `20px` | 15.12px / 400 |
| **小さい Ghost**（`記事を読む`） | なし | `#ffffff` | `1px solid rgba(255,255,255,0.4)` | **0px** | `10px 12px` | 12px / 600・`letter-spacing: 1.2px` |

```css
.btn-solid {
  background: #001328;
  color: #ffffff;
  border: 0;
  border-radius: 0;        /* 角丸を付けない */
  padding: 40px 20px;      /* 縦に大きく取る */
  font-size: 14px;
  font-weight: 400;
}
.btn-ghost {
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 0;
  padding: 20px;
}
```

> **実サイトの誤り**: カルーセルの `Previous` / `Next` ボタンが**ブラウザ既定のまま**（`font-family: Arial`・`background: #efefef`・`border: 2px outset #000000`）で残っている。実測 4 要素。**再現しない。** 必ず自前のスタイルを当てる。

### Cards

- 記事カードは**写真の上に文字を直接置く**。カード面は持たない
- 記事ページのみ `border-radius: 10px` が 2 要素。トップは `100%`（丸）が 1 要素のみ（ロゴ枠）

---

## 5. Layout Principles

- **`box-shadow` は 0 種**（両ページ）。奥行きは影ではなく**写真の上のグラデーション**で作る
- **`border-radius` は原則 0**。例外はロゴの円（`100%`）と記事カードの `10px` だけ
- ヒーローは **`background-image` で全画面**（1496×935）。縦組みの見出しを**右上**に、補足情報を**左下・右下の縦組み**に置く三点構成

---

## 6. Depth & Elevation

| レベル | 実装 |
|--------|------|
| 0 | 地色（`#001328`）そのまま |
| 1 | `#040c16`（より暗い面）でセクションを切る |
| 2 | `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0))` を写真の下端に敷いて文字を読ませる |

**影は使わない。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **和文の既定を明朝にする**（`MFW-PA1MinchoStdN-Regular` 相当）。ゴシックは差し替えとして扱う
- **縦組みの字送りは `0.2em`**、行送り（＝列間）は見出し 1.7・ナビ 1.0
- **縦組みを横に並べるときは `flex-direction: row-reverse`**
- **`border-radius: 0` / `box-shadow: none`** を既定にする
- 下層ページは**地色を `#ebebed` に替える**（濃紺はトップとヘッダだけ）
- 本文の文字色は**黒ではなく `#001328`**

### Don't（禁止）

- **`font-weight` で太らせない。** Morisawa Fonts Web の書体は `font-weight: 1 1000` 宣言で、太さはファミリー名（`-Medium` / `-Demi`）で切り替える
- **縦組みに `"halt"` を書かない**（効かない）。`"vhal"` / `"vpal"` を使う
- **横組みに `"vkrn","vpal"` を書かない**（効かない）
- **約物を `<span>` で包んで負の `letter-spacing` で詰めない。** OpenType 機能で解決する
- **A1ゴシック（`mfw-pa1gothicstd-*`）を足さない。** 宣言はあるが4つとも `unloaded` で、1要素も描画されていない
- **`Roboto` を欧文として当てにしない**（スタック上到達しない）
- **カルーセルの矢印をブラウザ既定のまま出さない**
- **ルートを流体にしない**（`html: 14px` 固定）。流体にするのは見出しの `font-size` だけ

---

## 8. Responsive Behavior

### Breakpoints

ルートは全幅で `14px` 固定。見出しだけがブレークポイントで式を変える。

| 幅 | `html` | ヒーロー `h2.copy` | 縦見出し `h2.v` |
|----|--------|-------------------|----------------|
| 1440px | 14px | 50px（上限） | 38.88px（2.7vw） |
| 1200px | 14px | 45.6px（3.8vw） | 32.4px（2.7vw） |
| 834px | 14px | 40px | 30px |
| 768px | 14px | — | — |
| 767px | 14px | — | — |
| 375px | 14px | 31.875px | 24.375px |

### フォントサイズの調整

- **`letter-spacing` は全幅で 0.2em のまま**（px 値だけがサイズに追従する）
- **ヒーローの `line-height` だけ 375px で 1.7 → 1.5 に落ちる**

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
地色: #001328（トップ）/ #ebebed（下層）
段差: #040c16
文字: #ffffff（濃紺地）/ #001328（明地）/ #dddddd（補足）
和文: A1明朝 StdN Regular（既定）→ 代替 Shippori Mincho / Zen Old Mincho
      游ゴシック Pr6N Medium・Demi（差し替え）→ 代替 Zen Kaku Gothic New
欧文: Helvetica Neue LT Pro Md / Lt → 代替 Inter / Roboto
ルート: html 14px 固定（流体にしない）
行間: 1.8（body）/ 1.7（縦組み見出し）/ 1.0（縦組みナビ）
字間: 縦組み 0.2em / 横見出し 0.1〜0.12em
ウェイト: 400・500・600 の3段（700 以上を使わない）
角丸: 0 / 影: なし
OpenType: 横組み "palt" / 縦組み "vpal"（"halt" は縦組みでは効かない）
```

### プロンプト例

> 玉乃光酒造のトーンで酒蔵のトップページを作って。地色は `#001328`、文字は白。和文の既定は明朝（Shippori Mincho で代替）で、ゴシックは小見出しと日付だけに使う。ヒーローは写真を全画面に敷いて、右上に `writing-mode: vertical-rl` の縦組み見出しを 50px・`letter-spacing: 0.2em`・`line-height: 1.7` で置く。縦組みのナビを横に並べるときは `flex-direction: row-reverse` にして、読む向きを右から左にする。角丸と影は使わない。`font-weight` は 400〜600 の3段まで。縦組みの約物詰めは `font-feature-settings: "vpal"` で行い、`"halt"` や負の `letter-spacing` は使わない。
