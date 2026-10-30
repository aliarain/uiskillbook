# DESIGN.md — visvim（ビズビム）

> visvim 公式サイト（https://www.visvim.tv/）のデザイン仕様書。
> 中村ヒロキが 2000 年に設立した日本のプレミアムファッション／ライフスタイルブランド。
> 伝統的な技法と現代的なデザインの融合、素材への徹底したこだわりで知られる。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 極端に小さい本文（10〜12px）+ 広い余白 + ほぼ白の背景 + 画像主導のギャラリー型レイアウト。**「写真を邪魔しないために、UI を可能な限り消す」** ウルトラミニマルな設計
- **密度**: 情報密度は極めて低く、ルックブック・プロダクト写真を全面に押し出す。テキストは控えめなキャプション的役割
- **キーワード**: ウルトラミニマル、ギャラリー型、weight 300 Light、pill CTA、モノクローム、acumin-pro、small type、breathy（呼吸する余白）
- **特徴**:
  - **Adobe Fonts 2 書体** — 本体に「acumin-pro」（幾何学的サンセリフ）、和文に「heisei-kaku-gothic-std」（平成角ゴシック）
  - **本文 10〜12px / weight 300** という極端に小さく軽いタイポ — テキストを画像の引き立て役に徹底
  - **テキスト色は #222222（チャコール）が基本** — 純黒は使わず、やわらかいダークグレー
  - **背景色 #ffffff** — 純白。コンテンツの邪魔を一切しない
  - **letter-spacing は基本 normal** — AURALEE のように均一適用はせず、モーダル見出しなど一部で 0.42px（0.03em）を使う程度
  - **weight 300（Light）が本文の標準** — 繊細で呼吸感のある質感を演出。見出しは 500〜700
  - **pill 型 CTA** — `border-radius: 18px` + thin border（1px solid #707070）で上品・非主張的
  - **タグボタンは極小** — 8〜10px / border-radius 13〜17px / #fafafa 背景の微細なチップ
  - **ダークフッター CTA** — Subscribe ボタンは bg #222222 + white border で唯一の暗色面
  - **アクセント色は #d2e3ea** — subsequence.tv リンクにのみ使う淡いブルーグレー。極めて控えめ
  - **font-feature-settings: normal** — palt や kern は一切使わない

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **Charcoal** (`#222222`): テキストの基本色（rgb(34, 34, 34)）。**本文・見出し・ボタン文字のほぼすべて**で使われる
- **Pure Black** (`#000000`): リンクのデフォルト色・ナビゲーション文字（控えめに使用）
- **Muted Gray** (`#b7b7b7`): カテゴリラベル・セカンダリテキスト（rgb(183, 183, 183)）
- **Button Gray** (`#707070`): ボタン罫線・タグ文字色（rgb(112, 112, 112)）

### Surface（背景）

- **White** (`#ffffff`): ページ背景・CTA ボタン背景・ヘッダー背景
- **Tag Background** (`#fafafa`): タグ・フィルターボタンの面色（rgb(250, 250, 250)）
- **Footer Dark** (`#222222`): フッター Subscribe ボタンの塗り面
- **Overlay Gray** (`#8b8b8b`): ドロワー・モーダル背景（rgb(139, 139, 139)）
- **Overlay Semi** (`rgba(139, 139, 139, 0.5)`): モーダルベール

### Accent

- **Subsequence Blue** (`#d2e3ea`): subsequence.tv リンクボタンのみに使用（rgb(210, 227, 234)）。サイト内で唯一の有彩色

### Border

- **Thin Border** (`#707070`): CTA ボタン罫線（1px solid）
- **Tag Border** (`#e5e5e5`): タグボタン罫線（rgb(229, 229, 229)）
- **Pagination Inactive** (`#e5e5e5`): ページネーションドットの非活性状態

### Text on Dark

- **Inverse Text** (`#ffffff`): ドロワー内テキスト・Subscribe ボタン文字

> **Note**: visvim のパレットは **「ほぼ無彩色」**。#222222 のチャコールと #707070 のグレーだけで UI を構成し、写真（プロダクト・ルックブック）が画面を支配する。有彩色は #d2e3ea の 1 色のみで、外部リンクに限定して使用。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体**:
- heisei-kaku-gothic-std（Adobe Fonts、平成角ゴシック Std）
- sans-serif（フォールバック）

> **Note**: 和文フォントは heisei-kaku-gothic-std 1 書体のみ。OS フォントへのフォールバックチェーンは指定していない。タグボタンの一部では `heisei-kaku-gothic-std, sans-serif` のみ（acumin-pro なし）。

### 3.2 欧文フォント

- **acumin-pro**（Adobe Fonts、幾何学的サンセリフ。Futura / Avenir 系の現代版）
- ボタン要素のみ `"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif`（Adobe Fonts 非依存のフォールバック）

### 3.3 font-family 指定

```css
/* 本文・見出し・UI（最も多用） */
font-family: acumin-pro, heisei-kaku-gothic-std, sans-serif;

/* タグボタン（和文のみ） */
font-family: heisei-kaku-gothic-std, sans-serif;

/* ボタン（Adobe Fonts 非依存フォールバック） */
font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭スタック** — acumin-pro が先頭で、和文は heisei-kaku-gothic-std にフォールバック
- **Webフォント前提** — acumin-pro と heisei-kaku-gothic-std は Adobe Fonts の読み込みが必要
- **OS フォールバックは最小限** — Yu Gothic 等への細かいチェーンは持たない、潔い設計
- **ボタンだけ別スタック** — Adobe Fonts が読み込まれない環境でも CTA が崩れないための安全策

**preview.html での代替フォント**:
- acumin-pro → **Inter**（Google Fonts、幾何学的サンセリフで最も近い）
- heisei-kaku-gothic-std → **Noto Sans JP**（Google Fonts、標準的な日本語ゴシック）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| h1 (メインタイトル) | acumin-pro | 14px | 600 | normal | normal | サイトタイトル "The thoughts we have at visvim" |
| h2 (セクション) | acumin-pro | 16px | 500 | normal | normal | "Recent Release" 等 |
| h2 (プロダクト名) | acumin-pro | 16px | 700 | 16px (1.0) | normal | プロダクトリスト内のタイトル |
| Modal Heading | acumin-pro | 14px | 600 | 21px (1.5) | 0.42px (0.03em) | "Delivery Location/ Web Store" |
| Product Title | acumin-pro | 14px | 600 | 14px (1.0) | normal | "WMV VISVIM SANTA FE" 等 |
| Category Label | acumin-pro | 12px | 500 | 12px (1.0) | normal | "Dissertation" 等（色 #b7b7b7） |
| Body (Medium) | acumin-pro | 12px | 500 | normal | normal | ドロワー内テキスト・太字パラグラフ |
| Body (Light) | acumin-pro | 11〜12px | 300 | normal | normal | 本文・フッター・メニュー |
| Nav Item | acumin-pro | 11px | 700 | normal | normal | "About visvim" "Web Store" |
| Read Button | acumin-pro | 11px | 500 | 11px (1.0) | normal | "Read" "Look" のボタン内文字 |
| Tag (Large) | acumin-pro | 10px | 400 | normal | normal | フィルタータグ "#SS26" 等 |
| Tag (Small) | heisei-kaku-gothic-std | 8px | 500 | normal | normal | ハッシュタグ "#シルクに戻す" 等 |
| Region Pill | acumin-pro | 12px | 500 | 15.6px (1.3) | 0.36px (0.03em) | "JAPAN" "EUROPE" 等 |
| Caption | acumin-pro | 11px | 300〜400 | normal | normal | フッター "visvim Official:" 等 |
| Input | acumin-pro | 14px | 300 | normal | normal | フォーム入力欄 |

### 3.5 行間・字間

- **本文 line-height**: `normal`（ブラウザデフォルト ≈ 1.2）。意図的にタイトに設計
- **見出し line-height**: `1.0`（h2 プロダクト名: 16px/16px、カテゴリ: 12px/12px）
- **モーダル line-height**: `1.5`（14px/21px）
- **letter-spacing**: 基本は `normal`（0）。モーダル見出しと Region Pill のみ `0.03em`（0.36〜0.42px）
- **意図**: 欧文中心のタイポグラフィで、余計な字間調整をせず書体の自然なメトリクスに委ねる

### 3.6 禁則処理・改行ルール

- **デフォルト挙動を尊重** — 特別な指定なし
- 英文中心のサイトなので、和文の禁則はブラウザ標準に任せる

### 3.7 OpenType機能

- **`font-feature-settings: normal`** — palt・kern ともに明示的に使わない
- 欧文中心のサイトであり、日本語のプロポーショナル字詰めは不要

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA (Read / Look / Web Store)
- 背景: `#ffffff`（白）
- 文字色: `#222222`
- font-size: 11px（ボタン内テキスト）/ weight 500
- border: `1px solid #707070`
- border-radius: **18px**（大きめの角丸ピル）
- padding: `18px 55px`
- line-height: 0px（テキストを padding で中央配置）
- hover: 特別な変化なし（ミニマル）

#### Subscribe CTA (フッター)
- 背景: `#222222`（チャコール）
- 文字色: `#222222`（テキスト自体は面に埋没、border が白）
- font-size: 16px / weight 500
- border: `1px solid #ffffff`
- border-radius: **18px**
- padding: `18px 55px`

#### Region Pill (JAPAN / EUROPE 等)
- 背景: `#ffffff`
- 文字色: `#000000`
- font-size: 12px / weight 500
- letter-spacing: 0.36px (0.03em)
- line-height: 15.6px (1.3)
- border: `1px solid #707070`
- border-radius: **9999px**（完全なピル）

#### Tag Button (Large)
- 背景: `#fafafa`
- 文字色: `#707070`
- font-size: 10px / weight 400
- border: `1px solid #e5e5e5`
- border-radius: **17px**
- padding: `0 20px`

#### Tag Button (Small / Hash)
- 背景: `#ffffff`
- 文字色: `#707070`
- font-family: `heisei-kaku-gothic-std, sans-serif`（和文のみ）
- font-size: 8px / weight 500
- border: none
- border-radius: **13px**
- padding: `0 15px`

#### Subsequence Link
- 背景: `#d2e3ea`（唯一の有彩色）
- 文字色: `#222222`
- border: none
- border-radius: **18px**
- padding: `18px 55px`

#### Pagination Dot (Active)
- 背景: `#000000`
- border-radius: **50%**（完全な円）

#### Pagination Dot (Inactive)
- 背景: `#e5e5e5`
- border-radius: **50%**

### Navigation

- font-family: acumin-pro
- font-size: 11px
- font-weight: 700
- color: `#000000` / `#222222`
- letter-spacing: normal
- 装飾なし（テキストリンク）
- ヘッダー背景: `#ffffff`

### Inputs

- 背景: 透過
- 罫線: なし（border: 0px none）
- 文字色: `#222222`
- font-size: 14px（検索） / 11px（ニュースレター）
- font-weight: 300
- letter-spacing: normal
- border-radius: 0px
- padding: 0px

### Cards

- 背景: 透過
- 罫線: なし
- 影: なし（フラット）
- 角丸: 0px
- 商品画像が主役。下にキャプション（12px / weight 500 カテゴリ + 14px / weight 600 タイトル）

### Drawer / Modal

- 背景: `#8b8b8b`（rgb(139, 139, 139)）
- ベール: `rgba(139, 139, 139, 0.5)`
- 文字色: `#ffffff`（ドロワー内）/ `#222222`（モーダル見出し）
- フォント: 12px / weight 300〜500

---

## 5. Layout Principles

- **コンテンツ幅**: 制約は緩く、画像をフルブリードで配置。ギャラリー型レイアウト
- **ヒーロー**: フルスクリーンのプロダクト画像 + 極小テキスト（12px カテゴリ + 14px タイトル）
- **余白**: 画像間に大きな余白。テキスト要素は最小限の面積
- **グリッド**: プロダクトはカード型で横スクロール（カルーセル）またはグリッド配置
- **テキスト要素の極小化**: 本文 10〜12px、タグ 8px と極めて小さい
- **フッター**: Newsletter Subscribe（dark pill）+ Instagram embed + 極小の著作権表示

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**フラットデザインを徹底**
- **段階表現**: 影や罫線ではなく**余白と画像のスケール**で奥行きを作る
- **罫線も最小限** — CTA の `1px solid #707070`、タグの `1px solid #e5e5e5` のみ

---

## 7. Do's and Don'ts

### Do's

- **acumin-pro + heisei-kaku-gothic-std のスタック** を本文・UI で使う
- **テキストカラーは #222222**（チャコール。純黒ではないが、AURALEE よりは濃い）
- **背景は #ffffff**（純白。visvim は純白を使う）
- **letter-spacing は normal（0）** が基本（一部の Region Pill / Modal のみ 0.03em）
- **本文 10〜12px / weight 300（Light）** で極小・極軽のタイポを維持
- **CTA は border-radius 18px のピル型** + thin border #707070
- **font-weight 300〜600 の範囲** で構成（700 はナビゲーションのみ）
- **影なし・フラットデザイン**
- **タグは 8〜10px の極小チップ** で控えめに

### Don'ts

- **濃い影やドロップシャドウ**を使わない
- **letter-spacing を広く取らない** — visvim は字間 normal が基本。AURALEE と異なり 0.7px 等は不要
- **本文を 14px 以上にしない** — 画像主導のギャラリーを維持
- **彩度の高いアクセント色を増やさない** — #d2e3ea の 1 色を超えない
- **太字（weight 700）を多用しない** — ナビの 11px のみ。見出しは 500〜600
- **CTA を角丸四角（radius 4〜8px）にしない** — 必ず 18px 以上のピル形状
- **palt や kern を適用しない** — font-feature-settings: normal を維持
- **背景にグレーやベージュを敷かない** — 純白 #ffffff のみ

---

## 8. Responsive Behavior

- デスクトップ: フルブリード画像 + テキストオーバーレイ or カード配置
- モバイル: 画像は 1 列フルワイド、テキストは同サイズ（10〜12px を維持）
- ナビゲーションはハンバーガーメニューからドロワー展開（背景 #8b8b8b）
- フォントサイズはモバイルでも極小のまま（拡大しない）
- Region Pill やタグは横スクロールで対応

---

## 9. Agent Prompt Guide

visvim らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: acumin-pro, heisei-kaku-gothic-std, sans-serif
- 本文 line-height: normal（ブラウザデフォルト ≈ 1.2）
- letter-spacing: normal（0）が基本。一部のみ 0.03em
- ブランドカラー: #222222（チャコール）がテキスト支配色
- セカンダリ: #b7b7b7（カテゴリ）、#707070（ボタン罫線・タグ文字）
- 背景: #ffffff（純白）
- アクセント: #d2e3ea（淡いブルーグレー、外部リンク限定）
- 文字サイズ: 本文 10〜12px、見出し 14〜16px と極小
- font-weight: 300（Light）が本文標準。見出し 500〜600。ナビのみ 700
- CTA: border-radius 18px のピル型 + 1px solid #707070
- タグ: 8〜10px の極小チップ、radius 13〜17px、bg #fafafa
- 影なし・フラット
- font-feature-settings: normal（palt/kern 不使用）
- 画像主導のギャラリー型レイアウト。テキストは引き立て役
- Adobe Fonts (acumin-pro + heisei-kaku-gothic-std) の読み込みが前提
```
