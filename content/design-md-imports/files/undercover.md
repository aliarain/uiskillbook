# DESIGN.md — UNDERCOVER（アンダーカバー）

> UNDERCOVER 公式サイト（https://undercoverism.com/）のデザイン仕様書。
> 高橋盾（Jun Takahashi）が 1990 年に設立した日本のアヴァンギャルドファッションブランド。
> パンク、ストリート、実験的なアートを融合し「We Make Noise, Not Clothes」を掲げる。
> 実サイトの computed style 実測（2026-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純黒と純白だけの厳格なモノクロームに、極端に小さいタイポグラフィ（10px ベース）を載せる**反装飾のウルトラミニマル**。画像が全面を支配し、UI は限界まで消える
- **密度**: 情報密度は低い。フルワイドのヒーロー画像とコレクション写真が主役で、テキストはキャプション的存在
- **キーワード**: ウルトラミニマル、モノクローム、反装飾、10px ベース、palt グローバル、HelveticaNeueLTPro、editorial、brutalist typography
- **特徴**:
  - **完全二値のカラーパレット** — `#000000` と `#ffffff` のみ。アクセント色は一切存在しない
  - **HelveticaNeueLTPro-Md / Bd** — Helvetica Neue LT Pro の Medium / Bold をライセンス使用
  - **和文は FP-ヒラギノ角ゴ ProN** — FontPlus（SB テクノロジー）の Webフォントサービス経由でヒラギノ角ゴ ProN W4 / W6 を配信
  - **本文 10px ベース** — 意図的に極小。ファッション業界のエディトリアル文法
  - **font-feature-settings: "palt" をグローバル適用** — body レベルで全要素にプロポーショナル字詰め
  - **letter-spacing は実質 0** — -0.01px（≈ 0）で、字間調整をしない設計
  - **CTA は角丸なし〜最大 2px** — ピル型は使わない。直線的で硬質
  - **装飾要素ゼロ** — アイコン、イラスト、グラデーション、影は一切使わない

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **Pure Black** (`#000000`): CTA ボタン背景、ナビゲーションメニュー背景、テキスト主色。ブランドの唯一の色
- **Near Black** (`#222222`): 一部の見出し・リンクテキスト（rgb(34, 34, 34)）

### Surface（背景）

- **Pure White** (`#ffffff`): ページ背景。例外なし
- **Black Surface** (`#000000`): ナビゲーションメニュー面、CTA ボタン面

### Overlay

- **Search Overlay** (`rgba(0, 0, 0, 0.5)`): 検索オーバーレイの半透明黒

### Text

- **Text Primary** (`#000000`): 本文テキスト
- **Text Secondary** (`#222222`): 見出し・一部リンク
- **Text on Dark** (`#ffffff`): 黒面上のテキスト（ナビ、CTA ボタン内）

### Border

- **Border** (`#000000`): ボタン罫線（1px solid）

> **Note**: UNDERCOVER のパレットは**純粋な二値**。#000000 と #ffffff 以外は #222222 のみで、これも限定的。visvim のようなチャコール（#222）主体ではなく、純黒 #000000 が支配色。有彩色は一切存在しない。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体**:
- FP-ヒラギノ角ゴ ProN W4（FontPlus Webフォント、レギュラー）
- FP-ヒラギノ角ゴ ProN W6（FontPlus Webフォント、ボールド）

> **Note**: FontPlus はソフトバンクグループの SB テクノロジーが運営する日本語 Webフォント配信サービス。`FP-` 接頭辞はそのサービス用のフォント名。ヒラギノ角ゴ ProN（大日本スクリーン＝SCREENグラフィックス）の W4 / W6 ウェイトを使用。

### 3.2 欧文フォント

- **HelveticaNeueLTPro-Md**（Helvetica Neue LT Pro Medium、ライセンスフォント）
- **HelveticaNeueLTPro-Bd**（Helvetica Neue LT Pro Bold、ライセンスフォント）

> **Note**: Linotype の Helvetica Neue LT Pro（Pro はOpenType版を示す）。Medium (Md) が本文、Bold (Bd) が見出し・CTA。一般的な Helvetica Neue とは異なるメトリクスを持つ。

### 3.3 font-family 指定

```css
/* 本文（Medium） */
font-family: HelveticaNeueLTPro-Md, "FP-ヒラギノ角ゴ ProN W4", sans-serif;

/* 見出し・CTA（Bold） */
font-family: HelveticaNeueLTPro-Bd, "FP-ヒラギノ角ゴ ProN W6", sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭スタック** — HelveticaNeueLTPro を先頭に置き、和文は FP-ヒラギノ角ゴにフォールバック
- **Webフォント前提** — FontPlus の読み込みが必要。読み込み失敗時は OS の sans-serif
- **OS フォールバックは最小限** — 游ゴシック等への詳細チェーンは指定しない潔い設計

**preview.html での代替フォント**:
- HelveticaNeueLTPro-Md / Bd → **"Helvetica Neue", Helvetica, Arial, sans-serif**
- FP-ヒラギノ角ゴ ProN → **"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", sans-serif**（macOS ローカルフォント）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Logo / H1 | HelveticaNeueLTPro-Md | 16px | 400 | 22.4px (1.4) | -0.01px (≈ 0) | サイトロゴ "UNDERCOVER" |
| H2 (Feature) | HelveticaNeueLTPro-Bd | 36px | 600 | 37px (1.03) | -0.01px (≈ 0) | "NEW ARRIVAL" 等、ヒーロー上の大見出し。白文字 on 黒 |
| Shop Item | HelveticaNeueLTPro-Bd | 16px | 600 | 19px (1.19) | -0.01px (≈ 0) | ショップカテゴリ名。白文字 |
| Nav Item | HelveticaNeueLTPro-Md | 20px | 400 | normal | -0.01px (≈ 0) | メニューアイテム。白文字 on 黒面 |
| Nav Link (Header) | HelveticaNeueLTPro-Bd | 11–12px | 500–600 | 12px (1.0–1.09) | -0.01px (≈ 0) | ヘッダーナビ・ログインリンク |
| Language Toggle | HelveticaNeueLTPro-Md | 11px | 500 | 16.5px (1.5) | -0.01px (≈ 0) | "JP / EN" 切替 |
| Subscribe Button | HelveticaNeueLTPro-Bd | 12px | 600 | normal | -0.01px (≈ 0) | メール購読ボタン |
| Footer | HelveticaNeueLTPro-Md | 10–11px | 400 | normal | -0.01px (≈ 0) | フッターリンク・コピーライト |
| Base (body) | HelveticaNeueLTPro-Md | 10px | 400 | normal | -0.01px (≈ 0) | ベースサイズ。**極端に小さい** |

### 3.5 行間・字間

- **本文 line-height**: `normal`（ブラウザデフォルト ≈ 1.2）。10px ベースに対して明示的な行間指定は控えめ
- **見出し line-height**: H2 で `1.03`（36px/37px）と**極端にタイト**。文字が行送りいっぱいに詰まる
- **ショップアイテム line-height**: `1.19`（16px/19px）。やや詰め
- **ロゴ line-height**: `1.4`（16px/22.4px）。サイト内で最もゆとりがある
- **letter-spacing**: 全要素で `-0.01px`（≈ 0）。**字間調整をしない設計**
- **意図**: Helvetica Neue LT Pro のメトリクスをそのまま活かし、余計な加工を排除する

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — 特別な禁則処理指定なし
- 欧文中心（ブランド名・商品名）のサイトであり、長文テキストがほぼ存在しない
- 日本語テキストはフッターの最小限のみで、ブラウザ標準の禁則に委ねる

### 3.7 OpenType 機能

```css
/* body レベルでグローバル適用 */
font-feature-settings: "palt";
```

- **palt（プロポーショナル字詰め）**: **body に宣言し、全要素に継承**。UNDERCOVER は見出し・本文・ナビ・フッターのすべてで palt を適用する
- visvim（palt 不使用）や note（見出し限定）とは異なり、**グローバル適用**が特徴
- ヒラギノ角ゴ ProN は palt グリフを備えており、約物・かな混じりテキストの詰め組みに効果がある

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Subscribe CTA
- 背景: `#000000`
- 文字色: `#ffffff`
- font-family: HelveticaNeueLTPro-Bd
- font-size: 12px / weight 600
- border: `1px solid #000000`
- border-radius: **2px**（ほぼ直角。サイト内で唯一角丸がある要素）
- padding: `10px 0px 7px`（上下非対称 — 活版印刷的なベースライン調整）

#### Navigation Item (Menu)
- 背景: `#000000`
- 文字色: `#ffffff`
- font-family: HelveticaNeueLTPro-Md
- font-size: 20px / weight 400
- border: none
- border-radius: **0px**
- padding: `5px 38px`

#### "TOP PAGE" Link
- 背景: `#000000`
- 文字色: `#ffffff`
- font-size: 12px / weight 600
- border: `1px solid #000000`
- border-radius: **0px**
- padding: `17px 0px`

> **Note**: ボタンは例外なく**黒地に白文字**。色のバリエーション・ホバーの色変化は存在しない。角丸は Subscribe CTA の 2px が最大で、他はすべて 0px。ピル型（radius 18px+）は一切使わない。

### Navigation

- ヘッダー: 白背景、テキストリンク。11–12px / weight 500–600
- メニュー展開時: 黒背景フルスクリーン、白文字 20px / weight 400
- ロゴ "UNDERCOVER": 16px / weight 400、黒文字

### Inputs

- 背景: 透過
- 罫線: 下線のみ（推定）
- 文字色: `#000000`
- font-size: 10–12px
- font-weight: 400
- border-radius: 0px
- スタイルは最小限 — フォーム要素の装飾を排除

### Cards

- 背景: 透過
- 罫線: なし
- 影: なし
- 角丸: 0px
- 商品画像が主役。下にプロダクト名（12–16px / weight 600）

---

## 5. Layout Principles

### Spacing

- **ベースユニット**: 明示的なトークンシステムではなく、画像とテキストの関係性で余白を決定
- **画像間の余白**: 最小限。グリッドの gutter で制御
- **テキストの余白**: コンパクト。ボタン padding も上下非対称（10px 0px 7px 等）

### Container

- **幅**: フルワイド基調。ヒーロー画像はブラウザ幅いっぱい
- **コンテンツ**: コレクション写真・プロダクト画像がエッジ to エッジで配置

### Grid

- **コレクション**: 2–3 列のグリッド。画像比率は統一
- **ショップ**: カテゴリ別のグリッド表示
- **余白の考え方**: テキストではなく画像のスケールとグリッドのリズムで構成する

---

## 6. Depth & Elevation

- **影**: 一切使わない。`box-shadow: none` が全要素のデフォルト
- **罫線**: ボタンの `1px solid #000000` のみ。区切り線やカード罫線は存在しない
- **奥行き表現**: 影・罫線・グラデーションではなく、**黒面と白面のコントラスト**で表現
- **オーバーレイ**: 検索時の `rgba(0, 0, 0, 0.5)` のみ

> **Note**: visvim（1px solid #707070）や COMME des GARCONS と同様にフラットデザインを徹底するが、UNDERCOVER は罫線すらほぼ使わない。純黒ベタ面と純白の対比だけで UI を構成する点がより極端。

---

## 7. Do's and Don'ts

### Do's

- **HelveticaNeueLTPro-Md / Bd + FP-ヒラギノ角ゴ ProN のスタック**を使う
- **テキストカラーは #000000（純黒）** を基本とする（#222222 ではない）
- **背景は #ffffff（純白）** のみ
- **font-feature-settings: "palt" を body でグローバル適用**する
- **letter-spacing は -0.01px（≈ 0）** で字間調整しない
- **本文 10px ベース**を維持する。ファッションブランドの editorial 文法
- **CTA は黒ベタ + 白文字 + radius 0〜2px**。直線的で硬質
- **ボタンは黒一色**。色のバリエーションを作らない
- **影なし・罫線なし・装飾なし** を徹底する

### Don'ts

- **アクセント色を追加しない** — 赤、青、グレーを含め、黒白以外の色は一切使わない
- **ピル型ボタン（radius 18px+）にしない** — 最大 2px。UNDERCOVER に丸みは不要
- **テキストを大きくしすぎない** — H2 の 36px が最大。本文を 14px 以上にしない
- **影やグラデーションをつけない** — フラットかつ硬質
- **アイコンやイラストを入れない** — テキストと写真のみ
- **letter-spacing を広げない** — 0.04em 等の字送りは使わない
- **line-height を広げすぎない** — 見出しは 1.03 と極端にタイト
- **テキスト色に #333333 や #666666 等のグレーを使わない** — 純黒 #000000 か、最も濃い #222222 のみ
- **palt を外さない** — グローバル適用がブランドの設計意図

---

## 8. Responsive Behavior

- **デスクトップ**: フルワイド画像 + 黒ナビゲーション。テキストは極小のまま
- **モバイル**: 画像は 1 列フルワイド。ハンバーガーメニューからフルスクリーン黒メニュー展開
- **フォントサイズ**: モバイルでも拡大しない。10px ベースを維持
- **ボタン**: 幅 100% に拡張されるが、スタイル（黒ベタ + 0px radius）は変わらない
- **タッチターゲット**: ボタン padding で確保（17px 上下等）。サイズ自体は小さいが、タップ領域は確保

---

## 9. Agent Prompt Guide

UNDERCOVER らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: HelveticaNeueLTPro-Md, "FP-ヒラギノ角ゴ ProN W4", sans-serif
- 見出し font-family: HelveticaNeueLTPro-Bd, "FP-ヒラギノ角ゴ ProN W6", sans-serif
- preview 代替: "Helvetica Neue", Helvetica, Arial, sans-serif / "Hiragino Kaku Gothic ProN"
- テキストカラー: #000000（純黒が支配色）
- セカンダリ: #222222（一部の見出し・リンク）
- 背景: #ffffff（純白のみ）
- アクセント色: なし（完全モノクローム）
- 文字サイズ: 本文 10px ベース、見出し最大 36px
- font-weight: 400（Medium 本文）/ 600（Bold 見出し・CTA）
- line-height: 見出し 1.03（極タイト）、本文 normal（≈ 1.2）
- letter-spacing: -0.01px（≈ 0、字間調整なし）
- font-feature-settings: "palt"（body でグローバル適用）
- CTA: bg #000000 + color #ffffff + border-radius 0〜2px
- 影なし・罫線最小限・装飾ゼロ
- フルワイド画像主導のレイアウト
```
