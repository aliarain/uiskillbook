# DESIGN.md — Vermicular（バーミキュラ）

> Vermicular 公式サイト（https://www.vermicular.jp/）のデザイン仕様書。
> 愛知ドビー株式会社が手がける名古屋発の精密鋳造ホーロー鍋ブランド。
> 町工場の職人技術と日本の美意識を融合させた「暮らしの道具」を提案する。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「明朝体 + ウォームトーン + 極細ウェイト」で構成された、日本の工芸品としての佇まいを持つブランドサイト**。和文見出しに Morisawa A1 明朝（MFW-A1MinchoStd-Bold）、欧文に Crimson Pro セリフ、本文に游ゴシック Medium を使い分ける二重書体システム。全体を weight 300（極細）で統一し、温かみのあるオフホワイト `#faf7f5` を背景に敷くことで、鍋の鋳物肌のような素朴な質感を表現
- **密度**: ゆったりとしたエディトリアル型。大判の製品写真と余白を贅沢に使い、テキストは最小限。料理・暮らしのシーンを主役に据える
- **キーワード**: 明朝体、Warm Off-white、Charcoal Brown、Weight 300、palt、広い字間、職人、鋳物、温もり、余白、静謐
- **特徴**:
  - **和欧二重書体システム** — 和文見出しは A1 明朝（Morisawa Web Font）の明朝体、欧文は Crimson Pro セリフ。本文ゴシックは游ゴシック Medium。用途に応じて書体を使い分ける
  - **weight 300 で全体を統一** — 見出しも本文もすべて ultralight。力強さではなく繊細さで世界観を作る
  - **palt をグローバル適用** — body に `font-feature-settings: "palt"` を指定し、全テキストにプロポーショナル字詰めを適用
  - **和文見出しの広い字間** — `letter-spacing: 0.1em〜0.2em` で文字を大きく開ける。日本の伝統的な組版に通じる品格
  - **ウォームカラーパレット** — 背景 `#faf7f5`（温かいオフホワイト）、ダーク面 `#46413c`（チャコールブラウン）。純黒・純白を使わない
  - **CTA は pill 型** — `border-radius: 27px` の丸ボタン。クラフトブランドとしては珍しいが、柔らかさを演出
  - **欧文キャプションはミュートカラー** — Crimson Pro 12.6px / `#beb9b4` で控えめに英語サブタイトルを添える

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Warm Off-white** (`#faf7f5`): メイン背景色。鋳物のホーロー釉薬を思わせる温かいオフホワイト。**ブランドを象徴する色**。出現回数 11（最多）
- **Charcoal Brown** (`#46413c`): セクション背景・ダークモード面。鉄鋳物の素地を連想させるチャコールブラウン。出現回数 7
- **Dark Brown** (`#413c37`): フッター背景。Charcoal Brown よりわずかに深い

### Accent

- **Vermicular Red** (`#c11920`): 極めて限定的に使用（出現回数 1）。ブランドロゴやハイライトの赤。鋳物の炎を想起させる

### Neutral

- **Text Primary** (`#222426`): 本文テキスト。純黒ではなく、わずかに青みを含む深いチャコール
- **Text Heading** (`#46413c`): 見出しテキスト。背景のダーク色と同じ値
- **Text Heading Light** (`#faf7f5`): ダークセクション上の見出し。背景のオフホワイトと同値で反転使用
- **Muted Caption** (`#beb9b4`): 欧文キャプション・補助テキスト。温かみのあるソフトグレー
- **Surface Alt** (`#ecebe7`): 代替面色。カード・セパレータに使用

> **Note**: Vermicular のパレットは **「温かいオフホワイト」と「チャコールブラウン」の2色が軸**。純黒 `#000000` も純白 `#ffffff` も使わず、すべての色に茶系の温度感を持たせることで、鋳物の素材感と料理の温もりを表現する。赤はロゴに限定し、UIでは使わない。

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体（見出し用）**:
- MFW-A1MinchoStd-Bold（Morisawa A1 明朝 — Morisawa Web Font）
- ヒラギノ明朝 ProN / HGS明朝B / MS P明朝（OS フォールバック）
- YuMincho, 游明朝（Windows フォールバック）

**ゴシック体（本文用）**:
- Yu Gothic Medium, 游ゴシック Medium（本文の基本書体）
- YuGothic, 游ゴシック体（バリエーション指定）
- ヒラギノ角ゴ Pro W3（macOS フォールバック）
- メイリオ（Windows フォールバック）

### 3.2 欧文フォント

- **Crimson Pro**（Google Fonts。セリフ体。見出し・欧文キャプション用）
- **sans-serif**（generic family。ゴシック本文のフォールバック末尾）
- **serif**（明朝見出しのフォールバック末尾）

### 3.3 font-family 指定

```css
/* 和文見出し（明朝体） */
font-family: "MFW-A1MinchoStd-Bold", "ヒラギノ明朝 ProN", "HGS明朝B",
             "MS P明朝", serif, "YuMincho", "游明朝", "Meiryo";

/* 欧文見出し・キャプション */
font-family: "Crimson Pro", serif;

/* 本文（ゴシック体） */
font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic,
             "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
```

**フォールバックの考え方**:
- **和文見出しは明朝体スタック** — Morisawa Web Font を最優先とし、各 OS の明朝体にフォールバック。スタック末尾に Meiryo（ゴシック）が混在しているのは Windows での最低限の表示保証
- **欧文は Crimson Pro 単独指定** — serif のみでフォールバック。本文ゴシックの欧文グリフは游ゴシック内蔵のものを使用
- **本文は游ゴシック Medium を最先頭** — Medium ウェイト指定で Windows の游ゴシック細字問題を回避。`font-weight: 300` との組み合わせで繊細な表現を実現

### 3.4 文字サイズ・ウェイト階層

実サイトの computed style に基づく。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Hero Display | A1 明朝 | 37.8px | 300 | 1.67 | 0.1–0.2em | ヒーローセクション大見出し |
| H2 Section | A1 明朝 | 25.2px | 300 | 1.67–1.78 | 0.1–0.2em | セクションタイトル |
| H2 Concept | A1 明朝 | 12.6px | 300 | — | 0.1em | コンセプトラベル（小さな分類名） |
| H3 JP Copy | A1 明朝 | 37.8px | 300 | — | 0.2em | 和文キャッチコピー |
| H3 EN Product | Crimson Pro | 19.8–21.6px | 300 | 1.37–1.41 | 0–0.03em | 欧文製品名 |
| H3 Spec | A1 明朝 | 21.6px | 300 | — | 0.17em | ダーク面上のスペック見出し |
| H1 Header | 游ゴシック | 26px | 300 | 1.67 | normal | ヘッダーの "VERMICULAR" ロゴ |
| Body JP | A1 明朝 | 13.5px | 300 | 1.67 | 0.04em | 和文本文 |
| Body Gothic | 游ゴシック | 13px | 300 | 1.67 | normal | ゴシック本文 |
| EN Caption | Crimson Pro | 12.6px | 300 | — | — | 欧文サブタイトル（ミュートカラー） |
| CTA Button | Crimson Pro | 10.8px | 300 | — | — | pill ボタンのラベル |
| Filter Button | 游ゴシック | 11.7px | 400 | — | — | 製品フィルター |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.67`（13.5px × 1.67 = 22.5px / 13px × 1.67 = 21.7px）。日本語本文としては標準〜やや詰まった範囲
- **見出しの行間**: `1.67〜1.78`。本文と近い値で統一感を持たせる
- **本文の字間 (letter-spacing)**: `0.04em`（0.54px / 13.5px）。和文のプロポーショナル字詰めと合わせて読みやすさを確保
- **見出しの字間**: `0.1em〜0.2em`。和文見出しは非常に広い字間を取る。日本の伝統的な組版や書道の空間感覚に通じる
- **欧文キャプションの字間**: `normal` または `0〜0.03em`。欧文は控えめな字間

**ガイドライン**:
- 和文見出しの `letter-spacing: 0.2em` は Vermicular の世界観の核心。安易に詰めない
- 本文の `0.04em` は `palt` との併用を前提とした値。`palt` なしで `0.04em` を使うと開きすぎる
- 欧文見出し（Crimson Pro）は `0〜0.03em` で控えめに。明朝の広い字間とのコントラストを作る

### 3.6 禁則処理・改行ルール

- 特別な CSS 指定は確認されていない。ブラウザのデフォルト挙動を尊重
- 和文コピーは短文で構成されるため、禁則処理が問題になる場面は少ない

### 3.7 OpenType 機能

```css
/* body に指定（グローバル適用） */
font-feature-settings: "palt";
```

- **palt（プロポーショナル字詰め）がグローバル適用** — body 要素に指定されており、見出しから本文まですべてのテキストに効く
- 見出しの広い `letter-spacing: 0.1–0.2em` と `palt` の組み合わせにより、文字間の微調整が自動で入る
- 游ゴシック Medium の本文にも `palt` が効いている（note は見出し専用だったが、Vermicular は全域）

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA（pill 型）

実例: 「ONLINE SHOP」ヘッダーボタン

- 背景: `#faf7f5`（ブランドオフホワイト）
- 文字色: `#222426`
- 罫線: なし
- font-family: "Crimson Pro", serif
- font-size: 10.8px / weight 300
- border-radius: `27px`（**pill 型**）
- padding: 推定 8px 24px
- text-transform: uppercase

#### Filter Button（テキストボタン）

実例: 製品フィルター "Shallow" / "Deep"

- 背景: `transparent`
- 文字色: `#222426`
- font-size: 11.7px / weight 400
- border-radius: なし
- 装飾: 選択時にアンダーラインまたはウェイト変更

### Cards

- 背景: `transparent` または `#faf7f5`
- 罫線: なし
- 影: なし（フラット）
- 角丸: なし
- 製品写真が主役。テキストは下部に Crimson Pro + A1 明朝で製品名・コピー

### Navigation

- 背景: `transparent` → スクロール時 `#faf7f5`
- 文字色: `#222426`
- font-family: 游ゴシック / Crimson Pro（混在）
- font-size: 13px / weight 300
- ロゴ "VERMICULAR" は 26px / weight 300 / 游ゴシック

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | テキスト間の微小余白 |
| S | 16px | カード内パディング |
| M | 32px | セクション内要素間 |
| L | 64px | セクション間余白 |
| XL | 96px | ヒーローセクション上下 |
| XXL | 128px | ページ上部の大きな余白 |

### Container

- Max Width: 推定 1200–1440px
- Padding (horizontal): 推定 24–48px

### Grid

- 製品一覧: 2–3 列グリッド
- 写真と余白を贅沢に使うエディトリアルレイアウト
- 左右交互に画像とテキストを配置するジグザグ構成

### Layout 原則

- **余白が主役** — テキストと画像の間に大きな余白を取り、呼吸感を持たせる
- **ダークセクションとライトセクションの交互配置** — `#faf7f5` と `#46413c` を交互に使い、ページにリズムを作る
- **画像はフルブリード** — 製品写真・シーン写真は画面幅いっぱいに配置
- **テキストは中央寄せ + 短文** — 和文コピーは 1〜2 行、letter-spacing 0.2em で品格を持たせる

---

## 6. Depth & Elevation

- **影**: 使用しない。**完全にフラット**
- **段階表現**: `#faf7f5`（ライト面）と `#46413c`（ダーク面）の背景色切り替えで奥行きを表現
- **角丸**: CTA の pill（27px）以外はなし。カードや画像は角丸を持たない
- **透過**: ヘッダーナビゲーションがスクロール時に透過 → 背景色に遷移

| Level | Expression | 用途 |
|-------|-----------|------|
| 0 | `#faf7f5`（ライト面） | 通常セクション |
| 1 | `#ecebe7`（代替面） | カード・区切り |
| 2 | `#46413c`（ダーク面） | 強調セクション・フッター |
| 3 | `#413c37`（最深面） | フッター |

---

## 7. Do's and Don'ts

### Do's

- **和文見出しは A1 明朝 + weight 300 + letter-spacing 0.1–0.2em** で組む。広い字間が Vermicular の品格
- **欧文は Crimson Pro** を使う。セリフ体で A1 明朝との調和を図る
- **本文ゴシックは游ゴシック Medium** を font-family の先頭に指定する（Windows 細字問題回避）
- **背景は `#faf7f5`**（温かいオフホワイト）を基調とする。純白 `#ffffff` は使わない
- **ダークセクションは `#46413c`**（チャコールブラウン）で。純黒 `#000000` は使わない
- **テキスト色は `#222426`** を使う。純黒ではなく、わずかに柔らかい深いチャコール
- **`font-feature-settings: "palt"` を body に指定** し、全テキストにプロポーショナル字詰めを適用
- **CTA は pill 型（radius 27px）** で柔らかさを表現する
- **写真は大判でフルブリード** に配置し、余白を十分に取る
- **weight 300 を全体で統一** する。Bold や 700 は使わない

### Don'ts

- **純黒 `#000000` を使わない** — テキストは `#222426`、ダーク面は `#46413c` を使う
- **純白 `#ffffff` を使わない** — 背景は `#faf7f5`、代替面は `#ecebe7`
- **ゴシック体で見出しを組まない** — 見出しは必ず明朝体（A1 明朝）
- **weight 400 以上を見出しに使わない** — 全体を weight 300 で統一する繊細さがブランドの核心
- **和文見出しの letter-spacing を 0.1em 未満にしない** — 狭い字間は Vermicular の世界観を壊す
- **角丸を多用しない** — pill CTA（27px）以外に角丸をつけない。カード・画像は角丸なし
- **box-shadow を使わない** — 深度は背景色の切り替えで表現する
- **欧文にサンセリフ体を使わない** — Crimson Pro（セリフ）を使い、和文明朝との調和を保つ
- **彩度の高いアクセントカラーを安易に使わない** — 赤 `#c11920` はロゴ限定。UI には使わない
- **palt を外さない** — body のグローバル適用が前提。palt なしだと字間バランスが崩れる

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ縦。1列レイアウト |
| Tablet | 768–1024px | タブレット。2列に切り替え |
| Desktop | > 1024px | デスクトップ。フルレイアウト |

### タッチターゲット

- pill CTA のサイズは 10.8px テキスト + padding で推定 40px 程度。**モバイルでは padding を拡大し 44px 以上を確保すること**

### フォントサイズの調整

- 和文ヒーロー見出し: デスクトップ 37.8px → モバイル推定 24–28px（60–75% に縮小）
- セクション見出し: デスクトップ 25.2px → モバイル推定 20–22px
- 本文: 13–13.5px はモバイルでも維持（縮小しない）
- 欧文キャプション: 12.6px 固定

### レイアウトの変化

- デスクトップのジグザグ（画像 + テキスト横並び）→ モバイルで縦積みに
- 製品グリッド: デスクトップ 3 列 → タブレット 2 列 → モバイル 1 列
- ダークセクションとライトセクションの交互配置はモバイルでも維持

---

## 9. Agent Prompt Guide

Vermicular らしい UI を生成するときは以下を伝えるとよい：

```
- 和文見出し font-family: "Shippori Mincho", "ヒラギノ明朝 ProN", "YuMincho", "游明朝", serif
  （※ A1 明朝の代替として Shippori Mincho を使用）
- 欧文見出し・キャプション font-family: "Crimson Pro", serif
- 本文 font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "ヒラギノ角ゴ Pro W3", sans-serif
- 全要素 font-weight: 300（極細で統一）
- 和文見出し letter-spacing: 0.1–0.2em（広い字間が品格の源泉）
- 本文 font-size: 13.5px / line-height: 1.67 / letter-spacing: 0.04em
- body に font-feature-settings: "palt"（グローバル適用）
- 背景色 #faf7f5（温かいオフホワイト。純白 #ffffff は使わない）
- ダーク面 #46413c（チャコールブラウン。純黒 #000000 は使わない）
- テキスト色 #222426（深いチャコール）
- 欧文キャプション色 #beb9b4（ミュートグレー）
- CTA は pill 型: border-radius: 27px / bg: #faf7f5 / font: Crimson Pro 10.8px
- 影を使わない（box-shadow: none）
- 角丸は CTA の pill のみ。カード・画像は角丸なし
- ダークセクション（#46413c）とライトセクション（#faf7f5）を交互配置
- 写真を大判フルブリードで配置し、余白を贅沢に取る
- 彩色アクセントは使わない。温もりは色温度（ウォームグレー系）で表現
```

### フォント代替ガイド

| 実サイト | Google Fonts 代替 | 選定理由 |
|----------|-------------------|----------|
| MFW-A1MinchoStd-Bold（Morisawa） | Shippori Mincho | 同じく伝統的な明朝体の字形。墨だまり表現が A1 明朝に近い |
| Crimson Pro | Crimson Pro | Google Fonts で直接利用可能 |
| Yu Gothic Medium | — | OS システムフォント。代替不要 |
