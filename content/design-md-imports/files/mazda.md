# DESIGN.md — Mazda（マツダ）

> マツダ株式会社 コーポレートサイト（https://www.mazda.com/ja/）のデザイン仕様書。
> 1920年創業、広島に本社を置く日本の自動車メーカー。「魂動（こどう）デザイン」哲学で知られる。
> 実サイトの computed style 実測（2026-05-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 純白背景 `#ffffff` × 濃墨紺 `#040b13` のハイコントラスト。Mazda 専有書体「MazdaType」を全面採用し、**タイポグラフィ自体をブランド表現の主軸**に据えたコーポレート構成
- **密度**: 余白を大きくとり、見出しを大きく組む。`letter-spacing` を `0.07〜0.1em` まで広げて間延びさせ、**プレミアム自動車ブランドの落ち着き**を演出する
- **キーワード**: MazdaType 専有書体、palt グローバル ON、letter-spacing 広め、ピル型 CTA（border-radius 900px）、銅色 `#8d7057` のリンク、エコグリーン `#468254` のサステナアクセント
- **特徴**:
  - **専有書体 MazdaType を 3 ウェイト運用** — Regular（本文）/ Medium（見出し）/ Bold（強調・タグ）。フォールバックは Noto Sans JP → ヒラギノ → メイリオ → 游ゴシック
  - **font-feature-settings: "palt" を全要素グローバル適用** — 和文プロポーショナル詰めを ON。詰めの効いた骨太な体裁
  - **本文 19px / line-height 1.68 / letter-spacing 0.07em** — 通常のコーポレートより 1〜2px 大きい本文。読み物として読める設計
  - **見出しは weight 500 (Medium)、letter-spacing 0.1em** — 太く詰めるのではなく、中肉でゆったり広げる Mazda 特有の見出し組
  - **CTA はピル型 + 透明 bg + 1px border** — `border-radius: 900px` で完全な楕円。塗りつぶさず線で構成する控えめなアクション
  - **リンク色は銅色 `#8d7057`** — 青ではなく暖色の金属系アクセント。クルマの塗装を想起させるブランド独自色
  - **サステナビリティ用に緑 `#468254`** — ESG 関連セクションで使い分けるセマンティックカラー
  - **ナビは矩形 `#e6e6e6`** — グローバルナビは角丸ゼロのベタ面ボタン。CTA との形状コントラスト
  - **CSS Custom Properties は最小限** — `--color-txt-pri` `--color-txt-link` `--color-overlay` `--color-pdf` の 4〜6 個のみ。トークンに頼らず CSS 直書きで運用

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Mazda Ink** (`#040b13`): ブランド基調色。本文・見出し全般に使用される濃墨紺（rgb(4, 11, 19)）。純黒ではなく僅かに青みを含む
- **Mazda Copper** (`#8d7057`): リンク色（`--color-txt-link`）。Mazda の塗装を想起させる銅・ブロンズ系の暖色アクセント
- **Page White** (`#ffffff`): ページ背景の純白。コンテンツの主役

### Surface（背景）

- **Page Background** (`#ffffff`): 純白
- **Nav Surface** (`#e6e6e6`): グローバルナビのベタ面（rgb(230, 230, 230)）
- **Soft Gray Surface** (`#f5f5f5`): セクション間の薄い背景区切り
- **Footer Navy** (`#27455c`): フッター・暗色セクションの濃いグレーブルー（rgb(39, 69, 92)）
- **Footer Slate** (`#535b69`): 二次フッター・サイトマップ等の中濃グレー（rgb(83, 91, 105)）
- **Cookie Banner** (`#041428`): クッキー同意ダイアログの濃紺（rgb(4, 20, 40)）

### Text / Foreground

- **Text Primary** (`#040b13`): 本文・見出しの基本色
- **Text on Dark** (`#ffffff`): 暗色背景上のテキスト
- **Text Link** (`#8d7057`): 本文中のリンク
- **Text Overlay** (`rgba(4, 11, 19, 0.4)`): モーダルオーバーレイ（`--color-overlay`）
- **Text on Footer** (`rgba(4, 11, 19, 0.7)`): "ページの TOP に戻る" 等の補助テキスト

### Border / Divider

- 罫線色は基本的に `#040b13` を `1px solid` で出すか、面色の差で区切る。専用の divider 色は持たない

### Accent / Semantic

- **Sustainability Green** (`#468254`): ESG・環境関連セクション。緑のセマンティックタグ
- **PDF Red** (`#ff2115`): PDF アイコン専用色（`--color-pdf`）。リンク横の PDF バッジ
- **Filter Blue** (`#3860be`): フィルターアイコン用（rgb(56, 96, 190)）
- **Cookie Apply Bg** (`#041428`): 同意アクションの濃色 CTA

---

## 3. Typography Rules

### 3.1 和文フォント

Mazda は **専有書体「MazdaType」を Web フォントとして配信**している。Noto Sans JP 以下のフォールバックを必ず指定する。

- **第1候補**: MazdaType（MazdaTypeRegular / MazdaTypeMedium / MazdaTypeBold）
- **第2候補**: Noto Sans JP
- **第3候補**: Hiragino Kaku Gothic ProN（Mac）
- **第4候補**: HiraKakuProN-W3
- **第5候補**: Meiryo（Windows）
- **第6候補**: Yu Gothic Medium
- **最終フォールバック**: sans-serif

### 3.2 欧文フォント

- 上記和文チェーン先頭の MazdaType の欧文グリフを使用する。**欧文専用書体は別途指定しない**
- ロゴ部分は別系統の SVG ロゴを使用

### 3.3 font-family 指定

実サイトの実測値。**ウェイトごとにファミリ名が分岐**する点が Mazda の特徴：

```css
/* body / 本文 */
font-family: MazdaTypeRegular, "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  HiraKakuProN-W3, Meiryo, "Yu Gothic Medium", sans-serif;

/* h1 / h2 / 大見出し（中肉） */
font-family: MazdaTypeMedium, "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  HiraKakuProN-W3, Meiryo, "Yu Gothic Medium", sans-serif;

/* h4 / CTA / タグ（強調） */
font-family: MazdaTypeBold, "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  HiraKakuProN-W3, Meiryo, "Yu Gothic Medium", sans-serif;
```

**フォールバックの考え方**:
- MazdaType がない環境では Noto Sans JP に落とす（Web フォント未読込時の安全弁）
- ProN（拡張新字体）を優先 — `あ` `か` 等の字形が新 JIS 準拠
- 古い Windows 環境は メイリオ → 游ゴシック の順で受け止める

### 3.4 font-size

実測のサイズスケール（PC 1440px ビュー）：

| 用途 | サイズ | 用例 |
|------|--------|------|
| H1（ヒーロー） | `46px` | "「走る歓び」そして、「生きる歓び」の創造" |
| H2（セクション） | `34px` | "HIGHLIGHTS" / "MAZDA MIRAI BASE" |
| H4（カード見出し） | `22px` | "CREATING THE JOY OF LIVING WITH A JOY OF DRIVING" |
| Body / Lead | `19px` | 本文・リード |
| Nav / CTA | `19px` | "メニューを開く" |
| Sub Nav | `16px` | "マツダについて" "ひとを想う価値創造" |
| Footer・補助 | `14px` | "ページの TOP に戻る" |
| 注釈 | `12〜13px` | 規約・著作表記 |

### 3.5 line-height

実測値（比率に換算）：

- **Body**: `1.68`（32px / 19px）— 19px 本文に対して 32px 行送り、和文として標準的
- **H1**: `1.30`（60px / 46px）— 大見出しは詰める
- **H2**: `1.29`（44px / 34px）
- **H4**: `1.45`（32px / 22px）
- **Nav リンク**: `1.50`（24px / 16px）

### 3.6 letter-spacing

Mazda の最大の特徴は **letter-spacing を広く取る**こと。詰めではなく、ゆったり広げて間を作る組版方針。

- **Body / Lead**: `0.07em`（1.33px / 19px）
- **H1**: `0.10em`（4.6px / 46px）
- **H2**: `0.10em`（3.4px / 34px）
- **H4**: `0.10em`（2.2px / 22px）
- **Nav リンク**: `0.07em`（1.12px / 16px）
- **CTA（ピルボタン）**: `0.07em`（1.33px / 19px）

### 3.7 font-feature-settings

```css
font-feature-settings: "palt";
```

**全要素にグローバル適用**。和文プロポーショナル詰めを ON。`palt` で句読点・括弧の余分な空きを詰める一方、`letter-spacing` で全体に間を空ける、という組み合わせは Mazda 特有。

### 3.8 ウェイト戦略

Mazda は **3 ウェイトで完結**する。色と同じく、ウェイトもミニマル設計。

| 用途 | ウェイト | ファミリ |
|------|----------|----------|
| 本文 | `400` | MazdaTypeRegular |
| 大見出し（H1〜H3） | `500` | MazdaTypeMedium |
| 強調・CTA・タグ・H4 | `700` | MazdaTypeBold |

**注意**: H1/H2 で Bold ではなく Medium を使うのは Mazda 独特。太く主張するのではなく、**サイズと字間で重みを出す**設計。

---

## 4. Component Stylings

### 4.1 ボタン（Primary CTA）

```css
/* ピル型ボーダーボタン */
font-family: MazdaTypeBold, "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  HiraKakuProN-W3, Meiryo, "Yu Gothic Medium", sans-serif;
font-size: 19px;
font-weight: 700;
line-height: 21.983px;
letter-spacing: 1.33px; /* 0.07em */
color: #040b13;
background-color: transparent;
border: 1px solid #040b13;
border-radius: 900px;
padding: 8px 25px;
font-feature-settings: "palt";
```

- **完全なピル型**（`border-radius: 900px`）
- **塗りつぶしではなく 1px の border**で構成
- 暗色背景上では `color: #ffffff` + `border: 1px solid #ffffff` に反転

### 4.2 ナビゲーションリンク

```css
font-family: MazdaTypeBold, "Noto Sans JP", "Hiragino Kaku Gothic ProN", ...;
font-size: 16px;
font-weight: 700;
letter-spacing: 1.12px; /* 0.07em */
color: #040b13;
background-color: #e6e6e6;
border-radius: 0px;
padding: 24px 64px 19px 20px;
```

- **角丸ゼロのベタ面ボタン**（CTA のピル型と対比）
- 右パディングを大きく取り（64px）右端に矢印アイコンを配置

### 4.3 タグ・バッジ

- 専用バッジ色は持たない。テキストリンクに `font-weight: 700` + `color: #8d7057` の銅色を当てて区別する
- カテゴリラベルが必要な場合は背景 `#040b13` + 白文字、または `#468254` のグリーンタグ

### 4.4 カード

- 背景: `#ffffff` または `#f5f5f5`
- 罫線: なし or `1px solid #040b13`
- 影: なし（`box-shadow: none`）
- 角丸: `0px`（直角矩形）

### 4.5 フォーム

- 入力欄は `1px solid #040b13` 矩形、`border-radius: 0px`
- フォーカス時は border を太くするか、内側に同色の影
- 専用のエラー色は確認できず、状況に応じて Mazda Copper `#8d7057` または PDF Red `#ff2115` を補完

---

## 5. Layout Principles

- **コンテナ最大幅**: `1440px`（`--w-window: 1440`）
- **グリッド**: 12 カラムベース、ヒーローは全幅 16:9 動画 + テキストオーバーレイ
- **セクション間余白**: 大きく取る（80〜120px）
- **横線で区切らず、面色（白 / 灰 / 紺）の切り替え**でセクションを分節する
- 見出しは**左揃え**が基本。中央揃えはヒーロー・キービジュアルのみ
- 画像は16:9 を基本比率とし、商品写真は引いて構図に余白を残す

---

## 6. Depth & Elevation

- **影は使わない**（`box-shadow: none`）
- カードや UI 要素のレベル差は **面色の違い**（白 / `#f5f5f5` / `#27455c`）で表現
- ヒーロー部のテキストオーバーレイには `rgba(4, 11, 19, 0.4)` の半透明黒を敷く（`--color-overlay`）
- モーダルダイアログ背景は `rgba(4, 11, 19, 0.7)` の濃い半透明

---

## 7. Do's and Don'ts

### ✅ Do
- **MazdaType を最優先**で指定し、Noto Sans JP をフォールバックに置く
- **letter-spacing を広く** 取る（本文 0.07em / 見出し 0.1em）
- 見出しは **Medium (500)** を基本とし、太字で押し出さない
- CTA は **ピル型 + 透明背景 + 1px border** で線的に表現する
- リンクは **銅色 `#8d7057`** で示し、青系を避ける
- `font-feature-settings: "palt"` を **グローバル ON**

### ❌ Don't
- **見出しに weight 700 (Bold) を当てない** — Medium (500) が基本。Bold は CTA・タグ・H4 のみ
- 本文の line-height を 1.5 以下に詰めない（1.68 が基準）
- リンクを青 `#0066ff` 系で表現しない（Mazda Copper を使う）
- カード・ボタンに角丸を付けない（CTA のピル以外はすべて角丸ゼロ）
- 影で立体感を出さない（面色で階層を表現する）

---

## 8. Responsive Behavior

- **PC 1440px** をベース幅とする（`--w-window: 1440`）
- **タブレット（〜1024px）**: ナビをハンバーガー化、H1 を 38px に縮小、コンテナを 90% 幅に
- **モバイル（〜768px）**: H1 を 28〜32px、本文を 17〜18px、ピル CTA は幅 100% でフルワイドに
- letter-spacing はモバイルでも維持（`0.07em` を保つ）
- font-feature-settings の `palt` は全ブレークポイントで維持

---

## 9. Agent Prompt Guide

> AI エージェントに Mazda 風 UI を生成させる際のプロンプト。

```
Generate a Japanese corporate UI in the Mazda visual style.

Visual:
- Pure white background (#ffffff) with deep ink-navy text (#040b13)
- Wide letter-spacing (body 0.07em / headings 0.1em) for premium spacious feel
- font-feature-settings: "palt" enabled globally
- No shadows; depth via surface color (white / #f5f5f5 / #27455c footer)
- Pill-shaped CTAs with transparent fill and 1px border-radius 900px

Typography:
- Primary: MazdaTypeRegular / Medium / Bold proprietary font with Noto Sans JP fallback
- Body: 19px / line-height 1.68 / letter-spacing 0.07em / weight 400
- H1: 46px / weight 500 (Medium, NOT bold) / letter-spacing 0.1em
- H2: 34px / weight 500 / letter-spacing 0.1em
- H4: 22px / weight 700 (Bold)
- Links: copper #8d7057 (NOT blue)

Components:
- Pill CTA: border-radius 900px, transparent bg, 1px solid #040b13, padding 8px 25px
- Nav link: 16px Bold on #e6e6e6 surface, no radius
- Cards: white surface, no shadow, no radius, optional 1px border

Color Strategy:
- Brand ink #040b13 / Page #ffffff / Nav #e6e6e6 / Footer #27455c
- Copper accent #8d7057 for links and brand-specific highlights
- Sustainability green #468254 for ESG sections
- PDF red #ff2115 for download icons

Avoid:
- Bold (700) on H1/H2 — use Medium (500)
- Blue links (use copper #8d7057)
- Rounded cards or buttons (only the CTA is pill-shaped)
- Box shadows for depth
```
