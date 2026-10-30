# DESIGN.md — ALBION (albion.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本の高級化粧品ブランドとしての上品さと洗練。広い余白と軽やかなフォントウェイト（300〜500）を基調に、控えめで品のある世界観を構築。装飾よりも空間で語るデザイン
- **密度**: 低〜中密度。ゆったりとした余白を活かしたブティック型の情報設計。商品カードは最小限の情報に留め、余白が呼吸感を生む
- **キーワード**: 洗練、上品、軽やか、静謐、モダンラグジュアリー

**設計上のポイント**:
- テキストカラーが純黒ではなくダークネイビーパープル（`#1e1a34`）。紺味がかった深い色で、ラグジュアリーブランドらしい気品を演出
- 本文の font-weight が `300`（Light）で統一。極めて軽やかな文字組みが特徴
- CTAボタンは pill 型（border-radius: 15〜20px）で、角丸なしの直線的サイトとは対照的
- セクション見出しの英字には Adobe Fonts の `lunchtype22`（丸みのあるサンセリフ）を使用し、柔らかさとモダン感を演出
- アクセントカラーのピンク（`#db477e`）はバッジや限定商品のラベルに控えめに使用
- フッター背景はミディアムグレー（`#999999`）で、重すぎない印象

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Dark Navy** (`#1e1a34`): ブランドの基準色。CTA ボタン背景、本文テキスト、カート関連のボタンに使用。`rgb(30, 26, 52)` — 紺味のある深みで、一般的な黒よりも品格がある
- **Accent Pink** (`#db477e`): アクセントカラー。バッジ、限定アイコン、新商品ラベル等にピンポイントで使用。`rgb(219, 71, 126)`

### Neutral（ニュートラル）

- **Text Primary** (`#1e1a34`): 本文テキスト。ブランド色と同一
- **Text Secondary** (`#606060`): 補足テキスト、カテゴリラベル、ナビゲーションリンク。`rgb(96, 96, 96)`
- **Text Disabled** (`rgba(30, 26, 52, 0.3)`): 無効状態のテキスト・ボタン
- **Text Inverse** (`#ffffff`): 暗い背景上のテキスト（Primary ボタン、フッター）
- **Border** (`#9a98a7`): ボタンの枠線（Secondary ボタン）。`rgb(154, 152, 167)` — わずかに紫がかったグレー
- **Border Subtle** (`#dddddd`): お気に入りボタンの枠、控えめな区切り線
- **Border Section** (`#c1c1c1`): セクションの「一覧を見る」ボタン枠。`rgb(193, 193, 193)`
- **Background** (`#ffffff`): ページ全体の基本背景
- **Surface** (`#f3f6f8`): フォーム入力欄、セレクトボックス、disabled ボタンの背景。`rgb(243, 246, 248)` — わずかに青みのあるライトグレー
- **Surface Alt** (`#f2f2f2`): ピックアップセクション等の帯背景。`rgb(242, 242, 242)`
- **Footer Background** (`#999999`): フッター背景。`rgb(153, 153, 153)` — ミディアムグレー

### Semantic（意味的な色）

- **Danger** (`#db477e`): エラー表示。アクセントピンクを流用（推定）
- **Warning**: 未定義（実測なし）
- **Success**: 未定義（実測なし）

### Quick Swatch

| Token | Value | 役割 |
|-------|-------|------|
| Dark Navy | `#1e1a34` | テキスト・CTA 背景・ブランド基準色 |
| Accent Pink | `#db477e` | バッジ・限定ラベル・アクセント |
| Text Secondary | `#606060` | 補足テキスト・ナビゲーション |
| Surface | `#f3f6f8` | 入力欄・セレクトの背景 |
| Surface Alt | `#f2f2f2` | セクション帯背景 |
| Border | `#9a98a7` | Secondary ボタン枠 |
| Footer BG | `#999999` | フッター背景 |
| White | `#ffffff` | ページ背景・反転テキスト |

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴシック（Hiragino Sans）、游ゴシック（Yu Gothic）、メイリオ（Meiryo）
- **明朝体**: 使用なし（ゴシック体で統一）

### 3.2 欧文フォント

- **ディスプレイ**: lunchtype22（Adobe Fonts）— セクション見出しの英字に使用。丸みのあるサンセリフ
- **サンセリフ**: YakuHanJPs と組み合わせで暗黙的に含まれる
- **セリフ**: 使用なし
- **等幅**: 未定義

> **Web配信に関する注記**:
> - `lunchtype22` は Adobe Fonts のドメインライセンスフォント。ローカル環境やプレビューでは表示されない
> - **Google Fonts 代替**: `Josefin Sans`（丸みのあるクリーンなサンセリフ、wght@300;400 を推奨）を使用する。lunchtype22 の柔らかく軽やかなトーンに近い
> - `YakuHanJPs` は約物半角化ライブラリ（CDN 配信可）。なくても表示は崩れないが、括弧や句読点の詰まりが変わる
> - `游ゴシック` / `Hiragino Sans` は OS インストール済みフォントにフォールバック
> - 環境を問わず和文を確実に表示するには `Noto Sans JP`（Google Fonts）をフォールバック末尾に追加するのが安全

### 3.3 font-family 指定

```css
/* ナビゲーション・見出し（YakuHanJPs 系） */
font-family: YakuHanJPs, YuGothic, "Yu Gothic", "Hiragino Kaku Gothic", "Hiragino Sans", sans-serif;

/* 本文・ボタン */
font-family: "Hiragino Kaku Gothic", "Hiragino Sans", "Meiryo", sans-serif;

/* セクション見出し（英字ディスプレイ） */
font-family: lunchtype22, sans-serif;
/* プレビュー用代替 */
font-family: "Josefin Sans", sans-serif;
```

**フォールバックの考え方**:
- ナビゲーション・見出し系は `YakuHanJPs` を先頭に置き、約物の半角化を確保
- 本文は `ヒラギノ角ゴシック` を先頭に、`メイリオ` で Windows をカバー
- 英字ディスプレイは `lunchtype22` 単独。非対応環境では `Josefin Sans` → `sans-serif` にフォールバック
- 両系統とも末尾は `sans-serif`

### 3.4 文字サイズ・ウェイト階層

実測値に基づく主要階層:

| Role | Selector / Context | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|--------------------|------|--------|-------------|----------------|------|
| Display (EN) | `h2.c-heading__main` | 36px | 400 | 1.2 (43.2/36) | 0.05em (1.8/36) | lunchtype22。「News」等のセクション英字 |
| Heading 2 (modal) | `h2.modal__title` | 20px | 600 | 1.8 (36/20) | 0.04em (0.8/20) | モーダルタイトル。カウンセリング系 |
| Heading 2 (announce) | `h2.c-announcement__title` | 16px | 500 | 2.0 (32/16) | normal | 「重要なお知らせ」。YakuHanJPs 系 |
| Heading 3 | `h3.c-subheading__main` | 18px | 500 | 1.0 (18/18) | normal | 「カテゴリーから選ぶ」等 |
| Nav Link | `a.l-header__navItemLink` | 16px | 500 | 1.0 (16/16) | normal | ヘッダーナビの英語リンク |
| Nav Small | `a.l-header__mypage` | 14px | 500 | 1.0 (14/14) | normal | マイページ等のサブリンク |
| Body | `body` | 14px | 300 | 1.8 (25.2/14) | normal | 全体の基準。weight 300 が特徴 |
| Button Primary | `button.--primary` | 14px | 300 | 1.8 (25.2/14) | 0.04em (0.56/14) | CTA ボタン |
| Button Secondary (small) | `a.--secondary.--middle` | 12px | 400 | 1.8 (21.6/12) | 0.04em (0.48/12) | 「商品詳細を見る」小ボタン |
| Button Primary (small) | `a.--primary.--middle` | 12px | 400 | 1.8 (21.6/12) | 0.04em (0.48/12) | 「カートに追加する」小ボタン |
| Section Button | `a.c-button__link` | 14px | 500 | 1.8 (25.2/14) | normal | 「一覧を見る」矩形ボタン |
| Select | `select.form__select` | 14px | 300 | 1.8 (25.2/14) | normal | セレクトボックス |

> 算出: `line-height` は `行送り px / フォントサイズ px`。ALBION は本文・ボタン系がほぼ **1.8** で統一。見出し系は **1.0〜2.0** の範囲。

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.8（14px / 25.2px）。日本語サイトとしてゆったりした行間で、ラグジュアリーブランドらしい余裕のある組版
- **見出しの行間**: ディスプレイ英字は 1.2、ナビゲーションは 1.0、モーダルタイトルは 1.8
- **本文の字間 (letter-spacing)**: `normal`
- **ボタンの字間**: `0.04em`（0.56px / 14px）。ボタンテキストにわずかな字間を確保し、読みやすさと品のバランスを取る
- **ディスプレイ英字の字間**: `0.05em`（1.8px / 36px）

**ガイドライン**:
- 本文は `line-height: 1.8` を維持。これは ALBION のブランドトーンに直結する余白感
- ボタンの letter-spacing `0.04em` は全般的に適用（Primary / Secondary 共通）
- ナビゲーション・見出しの letter-spacing は `normal` のまま
- 商品詳細ページ等の長文には line-height 2.0 を検討してもよい

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実測ではグローバルな指定なし、ブラウザデフォルト） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 等の指定なし */
```

- **palt**: 使用していない（実測値はすべて `normal`）
- **kern**: ブラウザの自動カーニングのみ
- YakuHanJPs ライブラリが約物の半角化を担っているため、palt は不要という設計判断

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（ダークネイビー塗り・pill）**
- Background: `#1e1a34`
- Text: `#ffffff`
- Padding: 0px 16px（高さは line-height + 内部余白で確保）
- Border: `1px solid #1e1a34`
- Border Radius: `20px`（pill）
- Font Size: 14px
- Font Weight: 300
- Letter Spacing: 0.04em
- 用途: 「カートを見る」「確認してカートに追加」等の主要 CTA

**Primary Small（ダークネイビー塗り・小 pill）**
- Background: `#1e1a34`
- Text: `#ffffff`
- Padding: 5px 9.6px 4px
- Border: `1px solid #1e1a34`
- Border Radius: `15px`（小 pill）
- Font Size: 12px
- Font Weight: 400
- Letter Spacing: 0.04em
- 用途: 「カートに追加する」「サイズを選ぶ」

**Secondary（白地・pill 枠線）**
- Background: `#ffffff`
- Text: `#1e1a34`
- Padding: 5px 9.6px 4px（small） / 5px 11.2px 4px（standard）
- Border: `1px solid #9a98a7`
- Border Radius: `15px`
- Font Size: 12px（small） / 14px（standard）
- Font Weight: 400 / 300
- Letter Spacing: 0.04em
- 用途: 「商品詳細を見る」「もっと見る」

**Section（矩形・枠線）**
- Background: `#ffffff`
- Text: `#606060`
- Padding: 20px 25px
- Border: `1px solid #c1c1c1`
- Border Radius: `0px`
- Font Size: 14px
- Font Weight: 500
- 用途: 「一覧を見る」「商品情報一覧を見る」

**Disabled（Primary の無効状態）**
- Background: `#f3f6f8`
- Text: `rgba(30, 26, 52, 0.3)`
- Border: `1px solid #f3f6f8`
- Border Radius: `20px`

### Inputs / Select

- Background: `#f3f6f8`（Surface）
- Border: `0px none`（セレクトボックスの実測値。入力欄は未実測）
- Border Radius: `10px`
- Padding: 12.4px 36px 12.4px 16px（select）
- Font Size: 14px
- Font Weight: 300

### Cards / Panels（推定）

- Background: `#ffffff`
- Border: なし、または `1px solid #dddddd`
- Border Radius: `0px`〜`8px`
- Padding: 16px〜24px
- Shadow: なし（フラットが基本）

### Footer

- Background: `#999999`
- Text: `#ffffff`
- Font Family: YakuHanJPs 系
- Font Weight: 500

---

## 5. Layout Principles

### Spacing Scale（推定・8px ベース）

| Token | Value | 用途例 |
|-------|-------|--------|
| XS | 4px | アイコンとテキストの間隔 |
| S | 8px | 要素間の最小余白 |
| M | 16px | ボタン水平パディング、カード内余白 |
| L | 24px | セクション間の小余白 |
| XL | 40px | セクション上下パディング |
| XXL | 80px | ヒーロー・大セクションの上下余白 |

### Container

- Max Width: 1280px（推定）
- Padding (horizontal): 16px（モバイル）〜 40px（デスクトップ）

### Grid

- Columns: 可変（商品カード 2〜4 分割、ニュース 1〜2 分割）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

実測値はすべて `box-shadow: none`。ALBION はフラットなデザインを基本とする。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素のデフォルト |
| 1 | `0 2px 8px rgba(30, 26, 52, 0.06)` | （推奨）ホバー時のカード |
| 2 | `0 4px 16px rgba(30, 26, 52, 0.1)` | （推奨）モーダル・ドロップダウン |
| 3 | `0 8px 32px rgba(30, 26, 52, 0.15)` | （推奨）フローティング要素 |

> モーダルのオーバーレイ背景は `rgba(30, 26, 52, 0.8)`（ブランドカラーの 80% 透過）を使用。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#1e1a34` を使い、純黒 `#000000` を避ける。紺味のダークカラーがブランドの気品
- 本文の font-weight は `300`（Light）を基本にする。これが ALBION の軽やかさの核心
- CTA ボタンは pill 型（`border-radius: 15〜20px`）で統一する
- ボタンの letter-spacing は `0.04em` を適用し、読みやすさと品のバランスを取る
- 行間は `line-height: 1.8` を本文の基準にする
- アクセントピンク `#db477e` は限定ラベル・バッジ等にピンポイントで使う
- Surface 色 `#f3f6f8` は入力欄・セレクトの背景に使い、白地とのコントラストを柔らかく作る
- セクション見出し英字は `lunchtype22`（代替: Josefin Sans）を使い、和文と欧文のトーン差を演出

### Don't（禁止）

- 本文に `font-weight: 400` 以上を使わない（ALBION の空気感が重くなる）
- CTA ボタンに `border-radius: 0px` を使わない（pill がブランドアイデンティティ）
- テキストに純黒 `#000000` を使わない（コントラストが強すぎ、ブランドのニュアンスが消える）
- アクセントピンクを広い面積に使わない（バッジ・ラベル程度に留める）
- 重いドロップシャドウや太いボーダーを多用しない（フラットで軽やかな印象を維持）
- `font-feature-settings: "palt" 1` を適用しない（YakuHanJPs が約物処理を担当）
- 明朝体を使わない（ゴシック体で統一）
- フッターに真っ黒（`#000000` / `#1e1a34`）を使わない（ミディアムグレー `#999999` が正）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1カラム） |
| Tablet | 768px – 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 14px をそのまま維持
- ディスプレイ英字はデスクトップの 70% 程度に縮小（36px → 24px 程度）
- 見出しはデスクトップの 80% 程度に縮小
- ボタンの pill 形状はレスポンシブで維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #1e1a34 (dark navy-purple, NOT pure black)
Accent:      #db477e (pink, badge/label only)
Text Color:  #1e1a34 (primary) / #606060 (secondary)
Background:  #ffffff
Surface:     #f3f6f8 (input/select bg, subtle blue-grey)
Border:      #9a98a7 (secondary btn) / #c1c1c1 (section btn) / #dddddd (subtle)
Footer BG:   #999999
Font (nav):  YakuHanJPs, YuGothic, "Yu Gothic", "Hiragino Kaku Gothic", "Hiragino Sans", sans-serif
Font (body): "Hiragino Kaku Gothic", "Hiragino Sans", "Meiryo", sans-serif
Font (display EN): lunchtype22, sans-serif (alt: "Josefin Sans", sans-serif)
Body Size:   14px
Body Weight: 300 (Light)
Body Line Height: 1.8
Letter Spacing: normal (body) / 0.04em (buttons)
CTA Radius:  15-20px (pill)
Shadow:      none (flat)
font-feature-settings: normal (no palt)
```

### プロンプト例

```
ALBION（albion.co.jp）のデザインシステムに従って、商品一覧ページを作成してください。

- ベースカラー: テキスト #1e1a34（純黒は使わない。紺味のダークネイビー）、背景 #ffffff
- アクセント #db477e はバッジ・限定ラベルだけに使用（広い面には使わない）
- フォント（本文）: "Hiragino Kaku Gothic", "Hiragino Sans", "Meiryo", sans-serif
- フォント（見出し英字）: "Josefin Sans", sans-serif（lunchtype22 の代替）
- 本文: 14px / weight 300 / line-height 1.8 / letter-spacing normal
- ボタン Primary: bg #1e1a34, color #ffffff, border-radius 20px (pill), letter-spacing 0.04em
- ボタン Secondary: bg #ffffff, border 1px solid #9a98a7, border-radius 15px
- 入力欄: bg #f3f6f8, border-radius 10px
- セクション英字見出し: 36px / weight 400 / letter-spacing 0.05em
- box-shadow: none（フラット）
- font-feature-settings: normal（palt は使わない）
- フッター: bg #999999, color #ffffff
```
