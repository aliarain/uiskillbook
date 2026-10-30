# DESIGN.md — 森美術館 / Mori Art Museum（モリ美術館）

> 森美術館（Mori Art Museum）公式サイト 日本語版（https://www.mori.art.museum/jp/）のデザイン仕様書。
> 1997 年構想・2003 年開館の現代アート専門館。六本木ヒルズ森タワー 53 階に位置する東京の代表的なコンテンポラリーアート美術館。
> 国際性・実験性・教育普及を 3 つの柱とする。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「クリムゾン #bf0d3e」を全要素のアクセントとして使い、ヒラギノサンス + 軽量カスタム英字ロゴ「MoriLogoB」で構成された美術館サイトの王道デザイン**。色の禁欲性が強く、白と灰色のキャンバスにブランド色が点在する構成
- **密度**: 展覧会情報・チケット情報・教育プログラム・関連イベントが並列で並ぶ密度の高いインデックス。情報量を整理するためにラベル状の小バッジ（11px / weight 700）を多用
- **キーワード**: クリムゾン、現代アート、ヒラギノサンス、白と濃灰、整然、ラベル、強い赤、館内案内、六本木、誌面組版
- **特徴**:
  - **クリムゾン `#bf0d3e`** が全アクセント — 見出し色・リンク色・バッジ・CTA・アンダーラインまで、ブランド色をラベリングのために徹底使用
  - **本文は Hiragino Sans + Hiragino Kaku Gothic ProN + メイリオ** — Apple の標準和文 + Windows フォールバックの教科書的なチェーン
  - **専用ロゴフォント `MoriLogoB`** — 48px / weight 400 で「M」のロゴマークに使われる独自書体
  - **本文サイズ 15px / weight 400 / line-height 1.75** — 美術館らしい長文向けの読みやすい比率
  - **タグ/バッジは 11px / weight 700 / クリムゾン** — 「ロン・ミュエク」「展覧会関連」「シンポジウム」等の分類ラベル
  - **CTA は白背景 + クリムゾン文字 + 罫線 + radius 5px** — 「来館のご案内」「チケット・料金」など、控えめだが識別しやすい
  - **ヘッダーは濃灰 `#333333`、ベースは `#f8f8f8` / `#f5f5f5` の中間グレー** — 写真の発色を妨げない無彩色ベース
  - **黒は #252525** — 純黒は使わず、わずかに引いた濃グレーが本文色

---

## 2. Color Palette & Roles

> 実サイトの uniqueBackgrounds と computed style 実測値に基づく。

### Brand

- **Mori Crimson** (`#bf0d3e`): ブランドカラー（`rgb(191, 13, 62)`、出現回数 6）。**見出し・リンク・バッジ・CTA 文字色**で広範に使用。深紅と朱の中間の鮮やかなクリムゾン
- **Inverse on Crimson** (`#ffffff`): クリムゾン背景上の白文字（バッジ等）

### Foreground

- **Body Black** (`#252525`): 本文・h1 / h2 / h3 のテキスト色（`rgb(37, 37, 37)`）。**純黒ではない濃グレー**
- **Mid Gray** (`#4c4c4c`): 補助リンク・ナビ補助（`rgb(76, 76, 76)`）
- **Soft Gray** (`#7f7f7f`): キャプション・date 表記（`rgb(127, 127, 127)`）
- **Strong Black BG** (`#333333`): ヘッダー・暗色帯の背景（`rgb(51, 51, 51)`、出現回数 1）

### Surface

- **Pure White** (`#ffffff`): モーダル・カード・本体面
- **Page Surface** (`#f8f8f8`): セカンダリナビ背景（`rgb(248, 248, 248)`）
- **Section Surface** (`#f5f5f5`): セクション帯（`rgb(245, 245, 245)`、出現回数 3）
- **Tag Surface** (`#ebebeb`): タグ・バッジ背景（`rgb(235, 235, 235)`、出現回数 12 — **タグの密度を象徴する**）

### Custom Logo Font

- **MoriLogoB** — 48px / weight 400 / クリムゾン文字色のカスタムロゴフォント。M の意匠は SVG ではなくフォントで実装

> **Note**: Mori Art Museum のパレットは **「ほぼ無彩色のキャンバス + 唯一のブランド色クリムゾンを徹底使用」**。アート作品の色を際立たせるため、UI が彩度を持たない設計。タグ背景 `#ebebeb` の出現回数 12 は、**情報をラベリングする美術館サイトらしい設計の証拠**。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（メイン・本文）**:
- **Hiragino Sans**（macOS Big Sur 以降の標準和文）
- **Hiragino Kaku Gothic ProN**（macOS の標準和文、ヒラギノ角ゴ ProN）
- **メイリオ**（Windows 標準）
- **sans-serif**（generic）

このチェーンは **Apple のヒラギノを最優先**にしつつ、Windows ではメイリオへ自然に落とすという、現在の日本語 Web デザインの教科書的な実装。

### 3.2 欧文フォント

- **MoriLogoB**（独自カスタムフォント、ロゴ専用）
- **Arial**（一部の汎用 span 等で使用）
- 和文フォント内蔵の欧文グリフ — `Hiragino Sans` には欧文も含まれているのでそのまま使う

### 3.3 font-family 指定

```css
/* 本文・見出し（ヒラギノ + メイリオ） */
font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", メイリオ, sans-serif;

/* ロゴ（カスタム） */
font-family: MoriLogoB;

/* 一部 span（Arial） */
font-family: Arial;
```

**フォールバックの考え方**:
- **Hiragino Sans を最優先** — Big Sur 以降の Apple 環境で表示品質が最も高い
- **Hiragino Kaku Gothic ProN** で旧 macOS にフォールバック
- **メイリオ** で Windows をカバー
- 最後に generic `sans-serif`
- **MoriLogoB は @font-face で読み込み** — Web フォントとして配信

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 用途 |
|------|------|------|--------|-------------|----------------|-------|------|
| Logo (M) | MoriLogoB | 48px | 400 | 48px (1.0) | normal | `#bf0d3e` | サイトロゴ |
| H1 (Hero) | Hiragino Sans | 27px | 700 | 40.5px (1.5) | normal | `#ffffff` | ヒーロータイトル |
| H1 (Inline) | Hiragino Sans | 15px | 700 | 26.25px (1.75) | normal | `#252525` | 記事タイトル |
| H2 (Section) | Hiragino Sans | 15px | 700 | 22.5px (1.5) | normal | `#252525` | セクション見出し |
| H3 | Hiragino Sans | 15px | 700 | 22.5px (1.5) | normal | `#252525` | サブ見出し |
| Body | Hiragino Sans | 15px | 400 | 26.25px (1.75) | normal | `#252525` | 本文 |
| Body Bold | Hiragino Sans | 15px | 700 | 26.25px (1.75) | normal | `#252525` | 強調本文 |
| Body on Dark | Hiragino Sans | 15px | 400 | 26.25px (1.75) | normal | `#ffffff` | 暗色背景上の本文 |
| Strong Crimson | Hiragino Sans | 18px | 700 | 18px (1.0) | normal | `#bf0d3e` | 強調表示・展覧会名 |
| Crimson Anchor | Hiragino Sans | 15px | 700 | 26.25px (1.75) | normal | `#bf0d3e` | 強リンク |
| Tag / Badge | Hiragino Sans | 11px | 700 | 22.75px (2.07) | normal | `#bf0d3e` / `#252525` | カテゴリーラベル |
| Date Label | Hiragino Sans | 13px | 700 | 22.75px (1.75) | normal | `#bf0d3e` | 日付・期間 |
| Caption | Hiragino Sans | 10px | 400 | 20px (2.0) | normal | `#4c4c4c` | パンくず・脚注 |
| Footer Note | Hiragino Sans | 11px | 400 | 19.25px (1.75) | normal | `#7f7f7f` | フッター注釈 |
| Inline Date | Hiragino Sans | 13px | 400 | 13px (1.0) | normal | `#4c4c4c` | 数字単独表記 |

### 3.5 行間・字間

- **本文 line-height**: `1.75`（26.25px / 15px）。**美術館サイト/長文向けの広め行送り**
- **見出し line-height**: `1.5`（22.5px / 15px）
- **ヒーロー line-height**: `1.5`（40.5px / 27px）
- **タグ line-height**: `2.0` (`20px / 10px`) — **ラベル状の余白感**を作るためにあえて広く
- **letter-spacing**: 全要素 `normal`（指定なし）。**字間ではなく行送りで読みやすさを作る**
- **意図**: 展覧会・作品キャプション・解説文の長文を読みやすくするための広い line-height。letter-spacing を使わないのはヒラギノのメトリクスをそのまま信頼

### 3.6 禁則処理・改行ルール

- 特別な指定なし。ブラウザのデフォルト挙動を尊重
- 美術館サイトに多い「アーティスト名・キャプション・脚注」は短いラベル単位で改行を避ける設計

### 3.7 OpenType機能

- 特別な指定なし
- ヒラギノのデフォルトメトリクスをそのまま使う（palt も kern も強制しない）

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons / Primary CTA

#### Standard CTA（白塗り + クリムゾン文字 + 罫線）
実例: 「来館のご案内」「チケット・料金」

- 背景: `#ffffff`
- 文字色: `#bf0d3e`（クリムゾン）
- 罫線: `1px solid #bf0d3e`（推定）
- font-family: Hiragino Sans
- font-size: 16px / weight 700
- line-height: 約 1.5
- padding: `13px 11px`
- border-radius: `5px`
- text-transform: なし

### Tags / Badges

#### Crimson Tag（カテゴリーラベル）
- 背景: 透明（`rgba(0,0,0,0)`）または `#ebebeb`
- 文字色: `#bf0d3e`
- font-size: 11px / weight 700
- line-height: 22.75px (2.07)
- padding: `5px 10px`
- border-radius: `0px`
- 表記例: 「ロン・ミュエク」「展覧会関連」「スクール」「シンポジウム」

#### Filled Crimson Badge（強調バッジ）
- 背景: `#bf0d3e`
- 文字色: `#ffffff`
- font-size: 13px / weight 700
- line-height: 13px (1.0)
- padding: 控えめ
- 表記例: 「参加受付中」

### Header / Navigation

- **Top Header（暗）**: 背景 `#333333` / 白文字 / Hiragino Sans 15px / weight 400
- **Sub Nav（明）**: 背景 `#f8f8f8` / 文字 `#252525` / Hiragino Sans 15px / weight 400
- ナビは中央揃えで、ロゴ M（MoriLogoB / 48px / クリムゾン）が中心

### Inputs

- 背景: `#ffffff`
- 罫線: 1px の薄グレー
- 文字色: `#252525`
- font-family: Hiragino Sans
- font-size: 15px / weight 400
- border-radius: 推定 `5px`（CTA と統一）

### Cards

- 背景: `#ffffff` または `#ebebeb`
- 罫線: なし
- 影: なし（フラット）
- 角丸: `0px`
- 展覧会画像 + クリムゾンの日付ラベル + 黒の作品タイトル + 補助タグ

### Section Banner

- 背景: `#f5f5f5`（セクション帯）
- 「展覧会スケジュール」「MORE PICK-UPS」等のセクション開始を示す

---

## 5. Layout Principles

### Spacing Scale

実測値ベースの暗黙的なスケール：

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- コンテンツ最大幅は 1200px 前後
- 左右パディングは 24–40px
- セクション間は背景色（`#f5f5f5` ↔ `#ffffff`）で区切る

### Grid

- 展覧会一覧は 3 列（PC）／ 2 列（タブレット）／ 1 列（モバイル）
- カードのアスペクトレシオは 4:3〜16:9 の写真主体

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**フラット**
- **段階表現**:
  - サーフェス色（白 → `#f8f8f8` → `#f5f5f5` → `#ebebeb` → `#333333`）の濃淡で領域を区別
  - クリムゾンのアクセントだけが目線を集める
- **角丸**: CTA `5px`、タグ・カード `0px`

---

## 7. Do's and Don'ts

### Do's

- **見出し・リンク・バッジに `#bf0d3e`（Mori Crimson）** を使う — ブランドの軸
- **本文 font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", メイリオ, sans-serif** で OS 横断
- **本文 15px / weight 400 / line-height 1.75** を標準にする
- **見出し line-height 1.5** で読みやすさを確保
- **タグは 11px / weight 700 / クリムゾン文字** で識別しやすく
- **CTA は白塗り + クリムゾン文字 + radius 5px**
- **影なし、フラット、サーフェス色の階層で奥行きを作る**
- **タグの line-height を 2.0** にしてラベル状の余白を作る
- **数値・日付はクリムゾン**（13px / weight 700）で強調

### Don'ts

- **クリムゾン以外の彩色を増やさない** — 作品の色を妨げないため
- **本文を 14px 以下に縮めない** — 15px が美術館サイトの読みやすさの基準
- **letter-spacing を持たせない** — ヒラギノのデフォルトを信頼
- **見出しを `uppercase` にしない** — 日本語の美術館サイトは大文字化を避ける
- **角丸を大きくしない** — CTA は 5px、タグ・カードは 0px
- **影で深さを作らない** — サーフェス色階層で表現
- **純黒 `#000000` を本文に使わない** — `#252525` の濃グレーを基本に

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ縦 |
| Tablet | 769–1024px | タブレット |
| Desktop | > 1024px | PC |

### タッチターゲット

- CTA padding `13px 11px` → 高さ約 47px。WCAG 44px を満たす

### フォントサイズの調整

- 本文 15px はモバイルでも保持
- ヒーロー 27px はモバイルで 22–24px に縮小
- タグ 11px はモバイルでも保持（情報密度を維持）

---

## 9. Agent Prompt Guide

森美術館らしい UI を生成するときは以下を伝えるとよい：

```
- 本文 font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", メイリオ, sans-serif
- ロゴ font-family: MoriLogoB（カスタムフォント、48px / クリムゾン）
- ブランドカラー: #bf0d3e（Mori Crimson）— 見出し・リンク・バッジ・CTA 文字色
- 本文 15px / font-weight: 400 / line-height: 1.75（広め行送り）
- 見出し 15–27px / font-weight: 700 / line-height: 1.5
- 強調カラーテキスト 18px / weight 700 / クリムゾン
- タグ・バッジ: 11px / weight 700 / line-height: 2.0 / 文字色クリムゾン
- 日付ラベル: 13px / weight 700 / クリムゾン
- 本文色 #252525（純黒ではない濃グレー）
- 補助色 #4c4c4c（中グレー）/ #7f7f7f（キャプション）
- サーフェス階層: #ffffff / #f8f8f8 / #f5f5f5 / #ebebeb / #333333（暗）
- 標準 CTA: 白背景 + クリムゾン文字 + 1px クリムゾン罫線 + radius 5px
- 影なし / 影で奥行きを作らずサーフェス色階層で区切る
- 美術館サイトらしい誌面組版・分類ラベルの密度
- letter-spacing: normal（字間調整は行わない）
```
