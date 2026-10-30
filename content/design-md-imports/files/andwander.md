# DESIGN.md — and wander（アンドワンダー）

> and wander（https://www.andwander.com/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本発のアウトドアファッションブランド。山と街をシームレスにつなぐテクニカルウェアを展開。**ダークモードがデフォルト** — トグルではなく、ブランドそのものが暗い。ニアブラック `#161616` を全面に敷き、白文字を載せる反転カラースキームで、ハイファッションとアウトドアの融合を視覚的に表現する
- **密度**: 極めて低密度。ヒーロービジュアルと大判の製品写真が主役。テキストは最小限で、10px というサイトの平均より小さいベースサイズが、広い余白と相まって高級感のある静謐な空間を作る
- **キーワード**: ダークモードデフォルト、ミニマル、ハイファッションアウトドア、欧文先頭、小さなベースサイズ、タイポグラフィ駆動
- **特徴**: **Helvetica Neue が font-family 先頭**（欧文先頭型）。日本のアウトドアブランドでありながら、国際的なラグジュアリーポジショニングを意識した書体選択。60px の大きなディスプレイタイプとの対比で、本文は 10px と極小。`letter-spacing: 0.6px` を大半の要素に一貫して適用し、静かな緊張感を生んでいる。ボタンは背景も枠線も持たない**テキストのみ CTA** で、UIクロームを徹底的に排除する

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

and wander のカラーパレットは極端にモノクロ。**ダークが標準**であり、白はダーク面上のテキスト色として機能する。ビビッドなアクセントカラーは一切使用しない。

- **Near Black** (`#161616`): ブランドの基調色。ページ背景・テキスト色の両方で使用（rgb 22, 22, 22 — 純黒ではなく、ごくわずかに柔らかい黒）
- **Dark Charcoal** (`#222222`): セカンダリダーク面（rgb 34, 34, 34）

### Text & Neutral

- **Text on Dark** (`#ffffff`): ダーク背景上のメインテキスト（ナビ・本文・見出し）
- **Text Primary** (`#161616`): ライト面上のテキスト（存在する場合）

### Surface

- **Surface Dark** (`#161616`): 標準ページ背景（**サイト全体のデフォルト背景**。白ではない）
- **Surface Dark Alt** (`#222222`): セカンダリダーク面
- **Surface Light** (`#eeeeee`): ライトセクション背景（rgb 238, 238, 238 — 限定的に使用）
- **Surface White** (`#ffffff`): 製品詳細等の限定的な白面

### Overlay

- **Overlay Dark** (`rgba(0, 0, 0, 0.75)`): モーダル・オーバーレイ背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **游ゴシック**: YuGothic — システムフォントのフォールバック
- **ヒラギノ角ゴ ProN W3**: macOS フォールバック（「ProN」ではなく「pron w3」指定 — ウェイト指定付き）
- **ヒラギノ角ゴシック**: Hiragino Sans — 新しい名称でのフォールバック
- **メイリオ**: Windows フォールバック

### 3.2 欧文フォント

- **Helvetica Neue**: メイン欧文（font-family 先頭に配置）— ネオグロテスク系の定番。国際的なファッションブランドの標準
- **Arial**: Helvetica のフォールバック

### 3.3 font-family 指定

```css
/* サイト共通 — 欧文先頭 */
font-family: "helvetica neue", Arial, -apple-system, "system-ui", YuGothic, "ヒラギノ角ゴ pron w3", "ヒラギノ角ゴシック", "hiragino sans", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文先頭型**: Helvetica Neue を先頭に配置し、欧文の表示品質を最優先。日本のアウトドアブランドでありながら、国際的なラグジュアリーポジショニングを強く意識
- `-apple-system` と `system-ui` を挟むことで、macOS / iOS のシステムフォント（SF Pro）にもフォールバック
- 和文は YuGothic → ヒラギノ角ゴ → Meiryo の順でプラットフォームをカバー
- **特殊な指定**: `"ヒラギノ角ゴ pron w3"` — ウェイト名（W3）をフォント名に含める旧式の指定

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Helvetica Neue | 60px | 700 | normal | — | ヒーロー見出し / 白テキスト on ダーク |
| Heading 2 (hero) | Helvetica Neue | 34px | 700 | 1.0 (34px) | — | サブヒーロー見出し |
| Heading 3 (nav) | Helvetica Neue | 14px | 700 | normal | 0.04em (0.6px) | ナビゲーション見出し |
| Heading 3 (section) | Helvetica Neue | 36px | 700 | normal | — | セクション見出し / 白テキスト |
| Body | Helvetica Neue | 15px | 400 | normal | — | 本文テキスト |
| Body (article) | Helvetica Neue | 22px | 400 | 1.8 (39.6px) | — | 記事・読み物本文 |
| Body (secondary) | Helvetica Neue | 13px | 400 | 1.0 (13px) | — | 補助テキスト |
| Nav Link | Helvetica Neue | 13–15px | 700 | normal | 0.04em (0.6px) | ナビリンク / 白テキスト |
| Caption | Helvetica Neue | 10px | 400 | normal | 0.06em (0.6px) | ベーステキスト / 最小サイズ |
| Footer | Helvetica Neue | 11px | 400 | 1.6 (17.6px) | 0.09em (1px) | フッターテキスト |
| H1 (meta) | Helvetica Neue | 10.9375px | 700 | normal | 0.05em (0.6px) | メタ見出し（10px 系） |

### 3.5 行間・字間

- **本文の行間（通常）**: `line-height: normal`（ブラウザデフォルト ≈ 1.2）— 欧文的なタイトセッティング
- **本文の行間（記事）**: `line-height: 1.8`（39.6px / 22px）— 日本語長文向けの広い行間
- **フッターの行間**: `line-height: 1.6`（17.6px / 11px）
- **Display の行間**: `line-height: normal` — 大見出しも行間を詰めたまま
- **一般テキストの字間**: `letter-spacing: 0.6px`（ベースサイズ 10px 比で 0.06em）— **大半の要素に固定値で適用**
- **フッターの字間**: `letter-spacing: 1px`（11px 比で 0.09em）— フッターのみやや広く

**ガイドライン**:
- `letter-spacing` は `0.6px` の固定値が大半の要素に適用される。フォントサイズに応じた em 値ではなく px 固定
- `line-height: normal` が多用される点は、日本語サイトとしては異例。本文が短い文（製品名・キャッチコピー）中心のため成立
- 記事・読み物ページのみ `line-height: 1.8` と日本語に適した設定になる
- 本文 10px は一般的なサイトより小さい。これにより広い余白が際立ち、ラグジュアリー感を演出

### 3.6 禁則処理・改行ルール

- 特別な禁則設定なし（ブラウザデフォルト）
- テキスト量が少ないため、禁則処理の影響が表面化しにくいデザイン

### 3.7 OpenType 機能

- `font-feature-settings` 未指定
- Helvetica Neue のデフォルトメトリクスをそのまま使用
- **palt 未使用** — 欧文先頭のスタックで和文の字詰めより欧文の美しさを優先

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**Text-only CTA**

and wander のCTAは**背景も枠線も持たないテキストリンク**。UIクロームの徹底的な排除がブランドの特徴。

- Background: `transparent`
- Text: `#ffffff`（ダーク面上）
- Border: なし
- Border Radius: **0px**
- Padding: 13px 0px 0px
- Font Size: 16px
- Font Weight: 400
- Letter Spacing: 0.6px

**ボタンの考え方**:
- and wander にはいわゆる「ボタン」が存在しない。CTAはすべてテキストリンクとして表現
- 背景色・枠線・角丸のいずれも使わない。テキストの色と配置だけでインタラクティブ要素を示す
- ホバー時にアンダーラインやopacity変化で操作可能であることを暗示する（推定）

### Inputs

- EC サイトの検索・フォームは別レイヤー
- ダーク背景上の白テキスト入力を基本とする（推定）

### Cards（製品カード）

- Background: `#161616` / `#222222`
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 製品画像がカード全体を占め、テキスト（製品名・価格）は最小限

---

## 5. Layout Principles

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 13px | CTA 上パディング |
| S | 16px | テキスト水平パディング |
| M | 20px | セクション間パディング |
| L | 40px | ヒーロー領域パディング（推定） |
| XL | 80px | セクション間大余白（推定） |

### Container

- 全幅レイアウトが基本
- 製品画像はエッジ・トゥ・エッジで配置
- テキストコンテンツは画像の上にオーバーレイ、または下部に最小限配置

### Grid

- 製品カードはグリッドレイアウト（2〜4カラム）
- ヒーローセクションはフル幅の単一ビジュアル

---

## 6. Depth & Elevation

and wander はシャドウを一切使わない。ダーク面の濃淡（`#161616` / `#222222`）と白テキストのコントラストだけで空間を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |
| 1 | background `#161616` | 標準ダーク面 |
| 2 | background `#222222` | セカンダリダーク面 |
| 3 | background `#eeeeee` | ライト面（限定使用） |
| 4 | `rgba(0, 0, 0, 0.75)` overlay | オーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- ページ背景は **`#161616`（ニアブラック）** をデフォルトにする — and wander にとって白背景は例外
- テキストは **白 `#ffffff`** をデフォルトにする（ダーク背景上）
- font-family は **Helvetica Neue** を先頭に置く（欧文先頭型）
- `letter-spacing` は **0.6px** を大半の要素に適用する
- CTAは**テキストリンクのみ**で表現する（背景色・枠線を使わない）
- ヒーロー見出しは **60px / 700** の大きなディスプレイタイプを使う
- 記事本文は **22px / 400 / line-height 1.8** と日本語に適した設定にする
- 製品写真を主役にし、テキストは最小限にする
- radius は **0px**（シャープコーナー）を徹底する

### Don't（禁止）

- 白背景 `#ffffff` をページ全体のデフォルトにしない（and wander のブランドカラーはダーク）
- 塗りつぶしボタンや pill ボタンを使わない（テキストリンク CTA が原則）
- 鮮やかなアクセントカラーを使わない（モノクロームを保つ）
- 日本語本文に `line-height: 1.2` 以下を使わない（記事ページでは 1.8 を使用）
- テキストの色に純粋な `#000000` を使わない（`#161616` が標準）
- シャドウ（box-shadow）を使わない
- ベーステキストを 10px より大きくして「見やすく」しようとしない（小さなテキストサイズがラグジュアリー感の要素）
- `palt` を適用しない（Helvetica Neue 中心のスタックで和文字詰めは不要）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- Display（60px）→ 大幅に縮小（30–36px 程度）
- ナビゲーションはハンバーガー化
- ダーク背景 `#161616` は維持（ブランドのアイデンティティ）
- letter-spacing 0.6px は維持
- 製品グリッドは 1〜2 カラムに折り返し
- 本文 10px はモバイルでもそのまま（or 最小限の拡大）

### タッチターゲット

- テキストリンク CTA は padding で十分なタップ領域を確保する必要がある
- 最小タッチターゲット: 44px x 44px（WCAG 基準）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: and wander（アンドワンダー）
Origin: 日本発アウトドアファッション・テクニカルウェア
Near Black: #161616
Dark Charcoal: #222222
Text on Dark: #ffffff
Surface Light: #eeeeee
Default Background: #161616（ダーク）

Font: "helvetica neue", Arial, -apple-system, "system-ui", YuGothic, "ヒラギノ角ゴ pron w3", "ヒラギノ角ゴシック", "hiragino sans", Meiryo, sans-serif

palt: 未使用
Body: 10px / 400 / line-height normal / letter-spacing 0.6px / color #ffffff on #161616
Article Body: 22px / 400 / line-height 1.8 / color #ffffff
Display: 60px / 700 / line-height normal / color #ffffff
CTA Style: text-only (transparent bg, no border, color #fff)
Shadow: 使用しない
```

### プロンプト例

```
and wander のデザインシステムに従って、製品一覧ページを作成してください。
- 背景は #161616（ニアブラック）をデフォルトにする
- テキストは白 #ffffff
- フォントは "helvetica neue", Arial, -apple-system, "system-ui", YuGothic, "ヒラギノ角ゴ pron w3", "ヒラギノ角ゴシック", "hiragino sans", Meiryo, sans-serif
- ベーステキストは 10px / 400 / line-height normal / letter-spacing 0.6px
- 見出しは 60px / 700 で大きく
- CTA はテキストリンクのみ（背景色・枠線なし）
- シャドウは一切使わない
- 製品画像を大きく、テキストは最小限
- radius は全要素 0px
```

### デザインの重要ポイント

1. **ダークモードがデフォルト**: and wander の `#161616` 背景は「ダークモード設定」ではなく、ブランドそのもの。白背景への切り替えは意図しない
2. **欧文先頭のフォールバック**: Helvetica Neue を先頭に置くことで、日本のアウトドアブランドでありながら国際的なファッションブランドのポジショニングを表現
3. **10px ベースサイズ**: 一般的なサイト（14-16px）より大幅に小さい。これにより余白が相対的に広がり、ラグジュアリーな空気感を生む。情報量を減らし「見せない美学」を体現
4. **テキストリンク CTA**: 背景色も枠線も角丸もない純粋なテキストリンク。UIクロームの徹底的な排除で、製品写真だけが視覚的アクセントになる
5. **letter-spacing 0.6px 固定**: em 値ではなく px 固定。フォントサイズに関わらず一定のトラッキングを維持することで、静かな統一感を保つ
6. **line-height: normal の多用**: 日本語サイトとしては異例だが、短いテキスト（製品名・キャッチコピー）中心のため成立。記事ページのみ 1.8 と日本語向けの設定に切り替わる
7. **徹底的なフラットデザイン**: シャドウなし、ボーダーなし、グラデーションなし。`#161616` と `#222222` の濃淡だけで空間を区切る

---

**取得日**: 2026-05-09
**出典**: https://www.andwander.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
