# DESIGN.md — AURALEE（オーラリー）

> AURALEE 公式サイト（https://auralee.jp/）のデザイン仕様書。
> デザイナー・岩井良太による 2015 年設立の日本のコンテンポラリーファッションブランド。
> 上質な素材と独自の風合いで国内外から高く評価される。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極端に小さい本文（10〜12px）+ 広い余白 + 限りなく無彩色のグレー（#6c6c6c）+ ほぼ白の背景（#fbfbfb）。**「素材の質感を邪魔しないために、UI を可能な限り消す」** ミニマルな設計
- **密度**: 情報密度は極めて低く、画像中心のレイアウト。テキスト要素は控えめで、商品写真・ルックブックを主役に
- **キーワード**: ペールグレー、極小タイポグラフィ、Marcellus セリフ、gill-sans-nova、ブラウンがかった黒、letter-spacing 0.7px、breathy、minimal、無彩色、breathy（息遣いのある余白）
- **特徴**:
  - **3 系統フォント運用** — 本体 UI に「gill-sans-nova」（Adobe Fonts）、見出し・ナビに「Marcellus」（Google Fonts のセリフ）、英文のお知らせに「Times New Roman」
  - **本文 10px / line-height 15px** という極端に小さいタイポ — UI を画像の引き立て役に徹底させる
  - **テキスト色は #6c6c6c（ソフトグレー）が支配的** — 純黒は使わず、見出しでも `#222222`（漆黒に近いが純黒ではない）
  - **背景色 #fbfbfb** — 純白ではなく、わずかに暖かみのある薄白（251, 251, 251）
  - **letter-spacing 0.7px** がほぼ全要素に均一適用（10〜18px サイズで 0.04〜0.07em に相当）— これがブランド独特の「呼吸感」を生む
  - **ナビゲーションは Marcellus** — MEN / WOMEN / "View all" 等は Google Fonts の Marcellus（細いセリフ体）で、上品なファッション誌の雰囲気
  - **CTA は控えめ** — `border-radius: 14〜16px` の小さなピル（カート数表示など）、塗り CTA は灰色 `#6c6c6c`
  - **font-weight 300（Light）** が本文の標準。weight 400 は補助的に使用
  - **Webフォント中心** — Adobe Fonts (gill-sans-nova) と Google Fonts (Marcellus) を組み合わせ。和文は OS フォントフォールバック

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **AURALEE Gray** (`#6c6c6c`): UI の支配色（rgb(108, 108, 108)）。**本文・ナビ・キャプションのほぼすべて**で使われるソフトグレー
- **AURALEE Charcoal** (`#222222`): h1 の濃いグレー（rgb(34, 34, 34)）。ロゴ・最重要見出しに限定
- **Soft Black** (`#000000`): リンクのデフォルト色（控えめに使用）
- **Footer Caption** (`#5c5c5c`): フッター内の極小注釈（rgb(92, 92, 92)）

### Surface（背景）

- **Off-White** (`#fbfbfb`): ページ背景（rgb(251, 251, 251)）。**純白ではない**
- **Pure White** (`#ffffff`): モーダルやフッター内の面色
- **Cookie Veil** (`rgba(255, 255, 255, 0.95)`): クッキーバナーの半透過白
- **CTA Gray** (`#6c6c6c`): カート数バッジの塗り色（白文字 + ソフトグレー背景）

### Text on Dark

- **Inverse Text** (`#ffffff`): カート数バッジ等、暗色面上の文字色

### Border

- **Soft Border** (`rgba(0, 0, 0, 0.1)`): セクション区切り、入力欄
- **Cookie Border** (`rgba(0, 0, 0, 0)`): cc-btn の透過罫線

> **Note**: AURALEE のパレットは **「ほぼ無彩色」**。`#6c6c6c` の単一グレーで本文と UI を構成し、画像（商品の質感）が誌面を彩る。**コンテンツに干渉しない、引き算のデザイン**。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（フォールバックスタック）**:
- Yu Gothic Std（macOS の游ゴシック標準）
- Yu Gothic Medium（macOS / Windows 10+）
- 游ゴシック Medium（カナ表記）
- YuGothic（旧表記）
- 游ゴシック体（カナ表記、Windows 向け代替）
- フッター注釈は **Yu Gothic Pr6** が先頭

### 3.2 欧文フォント

- **gill-sans-nova**（Adobe Fonts、本文・UI のメイン）
- **Marcellus**（Google Fonts、セリフ。ナビゲーション・h2/h3 見出し）
- **Times New Roman / Times**（英文の国際送料案内など、ニュートラルな英文）
- ボタン要素のみ `Helvetica Neue, Helvetica, Roboto, Arial, sans-serif`

### 3.3 font-family 指定

```css
/* 本文・UI（最も多用） */
font-family: gill-sans-nova, "Yu Gothic Std", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, sans-serif;

/* ナビゲーション・h2/h3 見出し（Marcellus セリフ） */
font-family: Marcellus, "Yu Gothic Std", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, serif;

/* 英文の国際お知らせ */
font-family: "Times New Roman", Times, "Yu Gothic Std", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, serif;

/* フッター極小注釈 */
font-family: "Yu Gothic Pr6", "Yu Gothic Std", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, sans-serif;

/* ボタン */
font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭スタック**（gill-sans-nova / Marcellus / Times New Roman / Yu Gothic Pr6 のいずれかで始まる）
- 和文は Yu Gothic 系のチェーンで OS にフォールバック
- **Webフォント前提** — gill-sans-nova と Marcellus は Adobe Fonts / Google Fonts の読み込みが必要
- **Pr6 を一部で使う** — フッターの極小英字に Yu Gothic Pr6（拡張字形）を指定する徹底ぶり

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| h1 (ロゴ) | gill-sans-nova | 27.5px | 400 | 38.5px (1.4) | 0.7px | サイトロゴ・最重要見出し |
| h1 (記事ページ) | Marcellus | 18px | 400 | 18px (1.0) | 0.7px | 「INFO」等の記事見出し |
| h2 (セクション) | Marcellus | 18px | 400 | 23px (1.28) | 0.7px | 「SS 2026 COLLECTION」等 |
| h2 (記事タイトル) | Yu Gothic Std | 14px | 400 | 19.6px (1.4) | 0.7px | 記事ページ内サブ見出し |
| h3 (ナビ) | Marcellus | 20px | 400 | 20px (1.0) | 0.7px | ナビゲーションの「MEN」等 |
| h4 (フッター) | gill-sans-nova | 12px | 400 | 16.8px (1.4) | 0.7px | 「Newsletter」等 |
| Body | gill-sans-nova | 10px | 400 | 15px (1.5) | 0.7px | 本文・お知らせ |
| Body Light | gill-sans-nova | 10px | 300 | 15px (1.5) | 0.7px | フッター・ナビ補足 |
| Article Body | gill-sans-nova | 12px | 400 | 18px (1.5) | 0.7px | 記事本文 |
| Caption (極小) | gill-sans-nova | 9px | 400 | 14px (1.56) | 0.7px | 「© Auralee」等 |
| Footer Note (Pr6) | Yu Gothic Pr6 | 8px | 400 | 12px (1.5) | 0.7px | 極小注釈 |
| English Notice | Times New Roman | 10px | 400 | 14px (1.4) | 0.7px | 国際送料案内 |
| Nav Link (sub) | Marcellus | 14px | 400 | 21px (1.5) | 0.7px | サブナビの「MEN」 |
| Nav (View all) | Marcellus | 12px | 400 | 18px (1.5) | 0.7px | 「View all」 |

### 3.5 行間・字間

- **本文 line-height**: `1.5`（15px / 10px、18px / 12px）
- **見出し line-height**: `1.0` 〜 `1.4`（h2 1.28、h3/h1 セリフ系は 1.0）
- **letter-spacing 0.7px**: 全要素ほぼ均一に 0.7px の物理字間。10px 本文では 0.07em、20px 見出しでは 0.035em に相当
- **入力欄の letter-spacing**: 1.2px（プレースホルダーのみ広め）
- **意図**: テキストを「画像の余白の一部」として扱うため、line-height を詰めすぎず、字間で「呼吸」させる

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — `word-break: keep-all` 等は指定しない
- 英文中心のレイアウトなので、和文の禁則は記事本文ページで暗黙のブラウザ挙動に任せる

### 3.7 OpenType機能

- **`font-feature-settings: normal`** — palt や kern を強制しない
- **letter-spacing 0.7px による物理的字間調整** で代替

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Cart Count Badge (Pill)
- 背景: `#6c6c6c`
- 文字色: `#ffffff`
- font-size: 16.5px (sp) / 15px (pc)
- font-weight: 300 (sp) / 400 (pc)
- line-height: 31px / 28px
- letter-spacing: 0.7px
- border-radius: **16px (sp) / 14px (pc)**（円〜小ピル）
- padding: 0 / 0 0 0 1px

#### Cookie Accept Button
- 背景: 透過 `rgba(0, 0, 0, 0)`
- 罫線: 2px solid 透過（実質テキストリンク）
- 文字色: `#6c6c6c`
- font-size: 14px / weight 300
- letter-spacing: 0.7px
- padding: 5.6px 11.2px
- border-radius: 0px

### Navigation

- font-family: Marcellus（セリフ体）
- font-size: 14〜20px
- font-weight: 400
- color: `#6c6c6c`
- letter-spacing: 0.7px
- 装飾なし（罫線・背景なしのテキストリンク）

### Inputs

- 背景: 透過
- 罫線: 1px solid `rgba(0, 0, 0, 0.1)`（細罫線）
- 文字色: `#6c6c6c`
- font-size: 10〜12px
- font-weight: 300
- letter-spacing: 1.2px（プレースホルダー）/ 0.7px（入力時）
- padding: 控えめ
- border-radius: 0px〜2px

### Cards

- 背景: `#ffffff` または透過
- 罫線: なし
- 影: なし（フラット）
- 角丸: 0px
- 商品画像が主役。下にキャプション（10〜12px / 0.7px ls）

### Modal / Cookie Banner

- 背景: `rgba(255, 255, 255, 0.95)`（半透過白）
- ボーダー: なし
- 文字色: `#6c6c6c`

---

## 5. Layout Principles

- **コンテンツ幅**: 制約は緩く、画像をフルブリードで配置することも多い
- **ヒーロー**: 大判のルックブック画像 + 極小タイポ（h2 18px / weight 400 / Marcellus）
- **余白**: 画像と画像の間に大きな余白を取り、テキスト要素は最小限
- **2 列または 1 列**: 商品グリッドはシンプルに 2 列が基本
- **テキスト要素の極小化**: 本文 10〜12px、補助 8〜9px と極めて小さく、画像の引き立て役に徹底
- **フッター**: Yu Gothic Pr6 の 8px 極小注釈（letter-spacing 0.7px）

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**フラットデザインを徹底**
- **段階表現**: 影や罫線ではなく**余白の量**で奥行きを作る
- **罫線も極めて控えめ** — `rgba(0, 0, 0, 0.1)` の薄い細罫線をフォーム周りに使う程度

---

## 7. Do's and Don'ts

### Do's

- **gill-sans-nova（Adobe Fonts）+ Yu Gothic Std/Medium のチェーン** を本文・UI で使う
- **Marcellus（Google Fonts セリフ）** をナビゲーション・h2/h3 で使い、上品さを演出
- **テキストカラーは #6c6c6c**（純黒・濃グレーは使わない）
- **背景は #fbfbfb**（純白ではない、わずかに暖かい白）
- **letter-spacing 0.7px** を全要素に適用（呼吸感）
- **本文 10〜12px** の極小タイポ（画像を主役にする）
- **font-weight 300 / 400** のみ使用（太字は避ける）
- **影なし・フラットデザイン**

### Don'ts

- **濃い影や強いコントラスト**を使わない
- **letter-spacing を 0 にしない** — 0.7px の呼吸感が AURALEE らしさ
- **本文を 14〜16px に大きくしない** — 画像を引き立てる極小タイポを保つ
- **純黒 #000000 を本文に多用しない** — `#6c6c6c` のソフトグレーが基本
- **彩度の高い色を UI に持ち込まない** — 商品画像のみが彩りを担う
- **太字（weight 700）を使わない** — 400 までで構成
- **CTA を pill 型の派手な塗りボタンにしない** — テキストリンクが基本

---

## 8. Responsive Behavior

- デスクトップ: マルチカラム（2 列の商品グリッド + 余白多め）
- モバイル (`sp_only`): h1 27.5px / weight 400、ヘッダーは縦積み
- ブレイクポイントは「sp_only」「pc_only」のクラスで切り替え
- ナビゲーションは Marcellus 14〜20px
- フォントサイズはモバイルでも 10px / 12px 中心（拡大しない）

---

## 9. Agent Prompt Guide

AURALEE らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: gill-sans-nova, "Yu Gothic Std", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, 游ゴシック体, sans-serif
- ナビ/見出し font-family: Marcellus, "Yu Gothic Std", "Yu Gothic Medium", ..., serif
- 本文 line-height: 1.5（15px / 10px、18px / 12px）
- letter-spacing: 0.7px を全要素に適用（10px 本文では 0.07em）
- ブランドカラー: #6c6c6c（AURALEE Gray）が支配色
- ヘッダー文字色: #222222（純黒は使わない）
- 背景: #fbfbfb（純白ではないオフホワイト）
- 文字サイズ: 本文 10px、見出し 18〜20px、ロゴ 27.5px と極小気味
- 影なし・罫線も極薄（フラット + ミニマル）
- font-weight: 300 (Light) と 400 (Regular) のみ。太字は使わない
- CTA は控えめなテキストリンク or 小ピル（border-radius 14〜16px）
- 商品画像を主役に、UI は背景に徹する「引き算のデザイン」
- Adobe Fonts (gill-sans-nova) と Google Fonts (Marcellus) の読み込みが前提
- Yu Gothic Pr6 をフッター極小英字に使う徹底ぶり
```
