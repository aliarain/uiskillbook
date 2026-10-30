# DESIGN.md — SHIRO（シロ）

> SHIRO（https://shiro-shiro.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 北海道発のナチュラルコスメティクスブランド。自然素材の誠実さを伝えるため、装飾を極限まで削ぎ落としたミニマルデザイン。**単一フォントシステム（Noto Sans JP のみ）** と **ダークネイビー #000030** の組み合わせで、清潔感と静謐さを両立。余白と letter-spacing で「間」を演出し、プロダクトの世界観に没入させる構成
- **密度**: ゆったりとしたプロダクトショーケース型。大きな余白と控えめなテキストで「素材の力」を前面に出す。情報量を最小限に絞り、ひとつひとつの要素に呼吸を持たせるレイアウト
- **キーワード**: ナチュラルコスメ、ダークネイビー、単一フォント、palt グローバル適用、ワイドスペーシング、ミニマル、北海道
- **特徴**: **単一フォントシステム**が最大の特徴。すべてのテキストに **Noto Sans JP** のみを使用し、letter-spacing の変化だけで階層を表現する。セクションタイトルは **0.25em** の極端なワイドスペーシング、本文は **0.1em**。`font-feature-settings: "palt"` がグローバルに適用され、日本語のプロポーショナル字詰めが全体を貫く。ウェイトは 400（本文・見出し）と 700（ナビ・ラベル）の二段階のみ。影なし・ブランドカラーは純黒ではなくダークネイビー #000030

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

SHIRO のカラーパレットは極めて抑制的。ブランドを象徴する色は **ダークネイビー #000030**（純黒ではない）。白背景とのコントラストで、素材感のある静かな世界観を構築する。

- **Brand Navy** (`#000030`): CTA 背景・見出しテキスト・フッター等のキーエレメント（rgb 0, 0, 48）
- **Brand Navy Dark** (`#000021`): Cookie consent バー・オーバーレイ要素（rgb 0, 0, 33）— ブランドネイビーのさらに深い変種

### Text & Neutral

- **Text Primary** (`#393c41`): 本文テキスト（rgb 57, 60, 65）— 純黒を避けたソフトブラック
- **Text Secondary** (`#949494`): ナビゲーション見出し・LIMITED バッジ背景（rgb 148, 148, 148）
- **Text Tertiary** (`#888888`): h5 ラベル・補足テキスト（rgb 136, 136, 136）
- **Text on Dark** (`#ffffff`): ダークネイビー背景上の白テキスト

### Surface

- **Surface White** (`#ffffff`): 標準背景
- **Surface Dark** (`#000030`): CTA・フッター・キーエレメントの背景
- **Surface Cookie Bar** (`#000021`): Cookie consent バー背景
- **Overlay** (`rgba(0, 16, 14, 0.12)`): モーダル・オーバーレイの半透明背景

### Functional

- **Badge Gray** (`#949494`): LIMITED バッジの背景色

---

## 3. Typography Rules

### 3.1 和文フォント

SHIRO は**すべてのテキストに Noto Sans JP のみ**を使用する、完全な単一フォントシステム。欧文・和文の区別なく、同一フォントで統一されている。

- **Noto Sans JP**: 全テキスト共通。見出し・本文・ナビ・ボタン・ラベルすべてに適用
- Google Fonts で Web フォントとして読み込み

> **補足**: 欧文専用フォントを使用しないため、英文テキスト（"SHIRO BEAUTY" 等）も Noto Sans JP の欧文グリフで表示される。このシンプルさが SHIRO のデザインの核心

### 3.2 欧文フォント

- 欧文専用フォントは使用しない。Noto Sans JP の欧文グリフがすべてをカバー

### 3.3 font-family 指定

```css
/* 全テキスト共通（見出し・本文・ナビ・ボタン・ラベルすべて） */
font-family: "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- Noto Sans JP を Google Fonts で読み込み、sans-serif のみをフォールバックに指定
- フォールバックチェーンを最小限にすることで、どの環境でも表示が均一になる設計

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 (c-title02) | Noto Sans JP | 26px | 400 | 1.4 (36.4px) | 1.4px | ページ見出し / color #000030 |
| Section Title JP (c-title01) | Noto Sans JP | 14px | 400 | 1.5 (21px) | 0.25em (3.5px) | "新製品" 等のセクションタイトル。極端なワイドスペーシング |
| Heading 3 (brand info) | Noto Sans JP | 22px | 400 | 1.5 (33px) | 0.05em (1.1px) | "SHOP" 等のブランド情報見出し |
| Heading 3 EN (brand info) | Noto Sans JP | 14px | 400 | 1.5 (21px) | 0.05em (0.7px) | "SHIRO BEAUTY" 等の英文見出し |
| Nav Heading | Noto Sans JP | 14px | 700 | 1.5 (21px) | 1.4px (0.1em) | ナビゲーション見出し / color #949494 |
| Nav Title | Noto Sans JP | 12px | 700 | 1.5 (18px) | 1.4px | ナビタイトル / color #393c41 |
| Body | Noto Sans JP | 14px | 400 | 1.5 (21px) | 0.1em (1.4px) | 本文の標準スタイル |
| Product Name | Noto Sans JP | 14px | 400 | 1.4 (19.6px) | 1.4px | 製品名 |
| Brand Banner | Noto Sans JP | 12px | 400 | 1.5 (18px) | 1.4px | バナー・告知テキスト |
| Search Modal | Noto Sans JP | 16px | 500 | 1.5 (24px) | 1.4px | 検索モーダル内テキスト |
| Label (h5) | Noto Sans JP | 12px | 700 | 1.5 (18px) | 1.4px | ラベル / color #888888 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（21px / 14px）— SHIRO 全体で統一された行間
- **見出し（h1）の行間**: `line-height: 1.4`（36.4px / 26px）— 本文よりわずかに詰める
- **本文の字間**: `letter-spacing: 0.1em`（1.4px @ 14px）— 日本語本文にも広めの字間
- **セクションタイトルの字間**: `letter-spacing: 0.25em`（3.5px @ 14px）— 極端なワイドスペーシング
- **ブランド情報見出しの字間**: `letter-spacing: 0.05em`（1.1px @ 22px）— 控えめな字間

**ガイドライン**:
- SHIRO の letter-spacing は **3段階**: セクションタイトル 0.25em（ワイド）/ 本文 0.1em（標準）/ ブランド見出し 0.05em（控えめ）
- すべてのテキストに letter-spacing が設定されており、letter-spacing: normal（0）の要素はほぼ存在しない
- セクションタイトルの 0.25em は日本語サイトとしては極端に広く、SHIRO の静謐さを表現する重要な要素

### 3.6 OpenType 機能

```css
font-feature-settings: "palt" 1; /* プロポーショナル字詰め — グローバル適用 */
```

- **`palt` はグローバルに適用**: body レベルで指定され、見出し・本文・ナビ・ボタンすべてに効く
- letter-spacing 0.1em との併用で、「均等配置ではなく、文字ごとに最適化された字間」を実現
- palt + ワイドスペーシングの組み合わせが SHIRO のタイポグラフィの核心

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）
- 製品名は日本語で簡潔に1行に収める前提

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし）**

SHIRO の CTA は**ダークネイビー塗りつぶし**が基本。

- Background: `#000030`
- Text: `#ffffff`
- Border Radius: **3px**（micro-rounded — pill ではない）
- Padding: 可変（コンテキストに応じる）
- Font Family: "Noto Sans JP", sans-serif
- Font Size: 14px
- Font Weight: 400

**Secondary CTA（白抜き — "条件クリア"）**

- Background: `#ffffff`
- Text: `#000030`
- Border Radius: **3px**
- Padding: 可変
- Font Size: 14px
- Font Weight: 400

**Text Link（"もっと見る"）**

- Text: `#000030`
- Font Size: 14px
- Font Weight: 400
- Background: `#ffffff`
- Border Radius: 0px（テキストリンクスタイル）
- Padding: 16px 0px

**Cookie Consent Button**

- Background: `#000021`
- Text: `#ffffff`
- Border Radius: **4px**
- Padding: 4px 12px

**Pagination Button**

- Background: `#ffffff`
- Text: `#000030`
- Border Radius: **3px**

**LIMITED Badge**

- Background: `#949494`
- Text: `#ffffff`
- Font Size: 12px
- Font Weight: 700

**ボタンの考え方**:
- メインは**ダークネイビー #000030 の塗りつぶし**。白テキストとのコントラストで目立たせる
- radius は **3px** の micro-rounded。pill でも角丸でもなく、ごく控えめな丸み
- font-weight は **400** が標準（cta テキストを太くしない — SHIRO のミニマリズム）
- 白抜きバリアントは反転（白背景 + #000030 テキスト）

### Inputs

**検索モーダル**

- Font Family: "Noto Sans JP", sans-serif
- Font Size: 16px
- Font Weight: 500
- Line Height: 1.5

### Cards（製品カード）

- Background: `#ffffff`
- Border Radius: 0px（写真はフラット）
- Shadow: なし
- 製品写真 + 製品名（14px / 400 / ls 1.4px）の構成
- LIMITED バッジ付きの場合は bg #949494 のラベルが付く

### Section Backgrounds

- Default: `#ffffff`（白背景が基本）
- CTA / Footer: `#000030`（ダークネイビー）
- Cookie Bar: `#000021`（より深いネイビー）

---

## 5. Layout Principles

### Container

- 全体として白背景にコンテンツを中央寄せ
- 製品グリッドとバナーで構成
- ヘッダー・フッターは全幅

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | Cookie consent ボタン縦 padding |
| S | 12px | Cookie consent ボタン横 padding |
| M | 16px | テキストリンク縦 padding |
| L | 24px | セクション余白（推定） |
| XL | 32px | セクション間余白（推定） |

### Grid

- 製品カードはグリッドレイアウト
- モバイルでは 1〜2 カラムに折り返し

---

## 6. Depth & Elevation

SHIRO はシャドウを一切使わない。白背景（#fff）とダークネイビー面（#000030）のコントラストだけで空間を構成する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#ffffff` | 通常コンテンツ面 |
| 2 | background `#000030` | CTA・フッター・アクセント面 |
| 3 | `rgba(0, 16, 14, 0.12)` overlay | モーダルオーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- すべてのテキストに **Noto Sans JP** のみを使う（単一フォントシステムを守る）
- `font-feature-settings: "palt" 1` を**グローバルに**適用する
- 本文の letter-spacing は **0.1em** に設定する
- セクションタイトルの letter-spacing は **0.25em** の極端なワイドスペーシングにする
- ブランドカラーは **#000030**（ダークネイビー）を使う
- CTA は **#000030 塗りつぶし + 白テキスト + radius 3px** にする
- line-height は全体で **1.5** を基本とする
- 本文テキストの色は **#393c41** を使う（純黒を避ける）
- 余白を多くとり、要素に呼吸を持たせる
- ウェイトは **400** と **700** の二段階のみ使う

### Don't（禁止）

- Noto Sans JP 以外のフォントを使わない（欧文フォントの追加も不可）
- 純黒 `#000000` をテキストや背景に使わない（`#000030` / `#393c41` が SHIRO のトーン）
- pill ボタン（radius 9999px）を使わない（3px の micro-rounded が標準）
- letter-spacing を 0（normal）にしない（すべてのテキストに字間が設定されている）
- セクションタイトル以外に 0.25em の letter-spacing を使わない（セクションタイトル専用）
- font-weight 300 や 600 等の中間ウェイトを使わない（400 と 700 のみ）
- `palt` を無効にしない（グローバル適用が前提）
- シャドウ（box-shadow）を使わない
- 鮮やかなアクセントカラーを使わない（ダークネイビー + グレーのモノトーンを保つ）
- テキストを詰め込まない（SHIRO は余白と静けさが命）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- h1（26px）→ 20px 程度に縮小
- 製品グリッドは 1〜2 カラムに折り返す
- ナビゲーションはハンバーガー化
- セクションタイトルの letter-spacing 0.25em は維持（SHIRO のアイデンティティ）

### タッチターゲット

- CTA ボタンは radius 3px の micro-rounded — モバイル時はパディング拡張推奨
- ナビ項目は 12〜14px のため、タップ領域の追加が必要

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: SHIRO（シロ）
Origin: 北海道発ナチュラルコスメティクス
Brand Navy: #000030
Brand Navy Dark: #000021
Text Primary: #393c41
Text Secondary: #949494
Text Tertiary: #888888
Background: #ffffff
Font: "Noto Sans JP", sans-serif（全テキスト共通・単一フォント）
palt: グローバル適用（font-feature-settings: "palt" 1）
Body: 14px / 400 / line-height 1.5 / letter-spacing 0.1em
Section Title: 14px / 400 / line-height 1.5 / letter-spacing 0.25em（ワイド）
Heading 1: 26px / 400 / line-height 1.4 / letter-spacing 1.4px / color #000030
CTA Style: filled (bg #000030, text #fff, radius 3px)
CTA Font: 14px / 400
Badge: bg #949494, text #fff (LIMITED)
Shadow: 使用しない
```

### プロンプト例

```
SHIRO（シロ）のデザインシステムに従って、新製品の紹介ページを作成してください。
- フォントは "Noto Sans JP", sans-serif のみ（他のフォントは一切使わない）
- font-feature-settings: "palt" 1 をグローバルに適用
- セクションタイトル "新製品" は 14px / 400 / line-height 1.5 / letter-spacing 0.25em
- h1 タイトルは 26px / 400 / line-height 1.4 / color #000030
- 本文は 14px / 400 / line-height 1.5 / letter-spacing 0.1em / color #393c41
- CTA「購入する」は bg #000030, text #fff, radius 3px
- 背景は白 #ffffff。ダークセクションは #000030
- 余白を多く取り、テキストは最小限に抑える
- シャドウは一切使わない
```

### 字詰め・組版の重要ポイント

1. **単一フォントシステム**: Noto Sans JP のみですべてのテキストを構成する。欧文専用フォントの追加は SHIRO のデザイン原則に反する
2. **palt のグローバル適用**: `font-feature-settings: "palt" 1` が body レベルで指定され、全テキストに効く。letter-spacing との併用で、文字ごとに最適化された字間を実現
3. **letter-spacing の三段階**: セクションタイトル 0.25em（極端にワイド）/ 本文 0.1em（標準）/ ブランド見出し 0.05em（控えめ）。この使い分けがフォント1種類でも視覚的階層を生む鍵
4. **ダークネイビー #000030**: 純黒ではない。RGB (0, 0, 48) のわずかな青みが、ナチュラルコスメブランドとしての品格と温かみを加える
5. **ウェイト 400 と 700 のみ**: CTA テキストすら 400 で、太字は nav ラベルと h5 ラベルのみ。引き算のデザイン
6. **radius 3px**: pill でも sharp でもない micro-rounded。SHIRO の控えめでありながら柔らかい印象を作る

---

**取得日**: 2026-05-09
**出典**: https://shiro-shiro.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
