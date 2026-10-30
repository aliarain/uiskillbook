# DESIGN.md — Bridgestone (ブリヂストン)

> Bridgestone（https://www.bridgestone.co.jp/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。
> 自社カスタム書体 BridgestoneTypeTP-Regular を全面採用し、游ゴシック体ファーストのフォールバック、統一的な 1.64 行間比率、フラットで構造的なグレーパレットで「信頼・堅実なグローバル製造業」の印象を表現している。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: コーポレート・ソリッド。世界最大のタイヤメーカーとしての信頼感と堅実さを、シンプルな構造と抑制的な色使いで表現
- **密度**: ゆったりとした余白と大きなヒーロービジュアル。タイヤ・モビリティ製品の存在感を引き立てるレイアウト
- **キーワード**: 堅実、構造的、フラット、グレースケール、信頼
- **特徴**:
  - **カスタム Web フォント BridgestoneTypeTP-Regular** を全面使用。コーポレートアイデンティティを書体レベルで統一
  - **游ゴシック体（YuGothic）をフォールバック最優先**に配置 — メイリオではなく游ゴシックを選んでいる点が、モダンで上品な印象を意図している
  - **line-height 1.64 を見出し・本文で一貫使用** — サイト全体で統一された行間比率が、視覚的なリズムの安定感を生む
  - **見出しも weight 400** — カスタム書体自体が視覚的なウェイトを持つため、CSS の font-weight に頼らない設計
  - **ナビゲーション・インタラクティブ要素のみ weight 600** で明確に差別化
  - `font-feature-settings: "normal"`（palt なし）— プロポーショナル字詰めを使わない、ベタ組みの設計
  - **構造的なグレーパレット**: `#333333` → `#3c3c3c` → `#757575` → `#999999` の 4 段階で情報の優先度を表現

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Bridgestone Red**: ロゴマークに使用。サイト上の UI 要素にはほとんど展開されず、ロゴ専用のブランドカラーとして厳格に管理されている

> **注意**: Bridgestone のコーポレートサイトはブランドカラーの赤を UI に多用しない設計方針。アクセントカラーの役割は構造的なグレー濃淡とタイポグラフィのウェイト差が担っている

### Accent

- **RSS Orange** (`#f08a34`): RSS フィード等の機能アイコンに限定使用

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト、見出し。サイト全体の基調色
- **Text Body** (`#000000`): 段落テキスト（本文内の強調的な文脈で使用）
- **Text Secondary** (`#3c3c3c`): 日付、補足テキスト
- **Text Sub** (`#999999`): 製品サブタイトル等の薄いグレーテキスト
- **Badge Gray** (`#757575`): カテゴリバッジの背景
- **Nav Label** (`#000000`): ナビゲーション見出し、メガメニューヘッダー

### Surface & Background

- **Background** (`#ffffff`): メインページ背景
- **Hero BG** (`#ececec`): ヒーローエリアの背景
- **Section BG** (`#f5f5f5`): TOPICS 等のセクション背景
- **Mega Menu BG** (`#eeeeee`): メガメニュー・検索ボタン領域の背景
- **Footer Dark** (`#222222`): フッター背景
- **Nav Overlay** (`rgba(255, 255, 255, 0.95)`): ナビゲーションオーバーレイ（フロストガラス効果）

### Border

- **Border Default** (`#d1d1d1`): ドロップダウン、入力欄の枠線
- **Border Outline** (`#808080`): アウトラインボタンの枠線
- **Input Border** (`#707070`): 検索入力欄の枠線

---

## 3. Typography Rules

### 3.1 和文フォント

**カスタム Web フォント — BridgestoneTypeTP-Regular**:
- Bridgestone コーポレート専用書体。ドメインライセンスで配信されている
- weight 400 のみの単一ウェイト構成。太さのバリエーションは CSS font-weight で制御

> **注意**: BridgestoneTypeTP-Regular は公式サイト以外では表示されない。プレビューやプロトタイプでは **BIZ UDPGothic**（Google Fonts）を推奨。游ゴシック系のニュートラルな印象に近く、UDフォントとしてのクリアな字形がコーポレート感に合う。Noto Sans JP も代替候補。

**システムフォールバック**:
- 游ゴシック体 / YuGothic（クロスプラットフォーム、最優先フォールバック）
- 游ゴシック / "Yu Gothic"（Windows 向け別名）
- Hiragino Sans（macOS）
- sans-serif（最終フォールバック）

### 3.2 欧文フォント

- BridgestoneTypeTP-Regular に欧文グリフが含まれているため、通常は別途指定なし
- **検索入力欄のみ** Arial をフォールバックに指定

### 3.3 font-family 指定

```css
/* 本文・見出し */
font-family: BridgestoneTypeTP-Regular, 游ゴシック体, YuGothic,
  游ゴシック, "Yu Gothic", "Hiragino Sans", sans-serif;

/* 検索入力欄 */
font-family: Arial, sans-serif;

/* プレビュー代替 */
font-family: "BIZ UDPGothic", 游ゴシック体, YuGothic,
  游ゴシック, "Yu Gothic", "Hiragino Sans", sans-serif;
```

**フォールバックの考え方**:
- カスタム Web フォントを最優先
- 游ゴシック体（YuGothic）を最初のフォールバックに配置 — メイリオではなく游ゴシック系を選んでいる点がモダン
- macOS は Hiragino Sans でカバー
- メイリオ（Meiryo）はフォールバックチェーンに含まれていない（意図的な省略と思われる）

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Heading | BridgestoneTypeTP-Regular | 42px | 400 | 68.88px (x1.64) | normal | "TOPICS" 等 |
| Sub Heading | BridgestoneTypeTP-Regular | 30px | 400 | 60px (x2.0) | normal | "ニュースリリース" 等 |
| Mega Menu Heading | BridgestoneTypeTP-Regular | 20px | 600 | 32.8px (x1.64) | normal | pill 型カテゴリ見出し |
| Product Title | BridgestoneTypeTP-Regular | 18px | 600 | 27px (x1.5) | -0.6px (-0.03em) | ダーク背景上の製品名 |
| Body | BridgestoneTypeTP-Regular | 15px | 400 | 24.6px (x1.64) | normal | 本文テキスト |
| Body (base) | BridgestoneTypeTP-Regular | 14px | 400 | 22.96px (x1.64) | normal | body 基本サイズ |
| Body (tight) | BridgestoneTypeTP-Regular | 14px | 400 | 22.96px (x1.64) | -0.28px (-0.02em) | 一部の詰め組み本文 |
| Nav Primary | BridgestoneTypeTP-Regular | 14px | 600 | 18.2px (x1.3) | normal | 主要ナビリンク |
| Nav Secondary | BridgestoneTypeTP-Regular | 13px | 600 | — | normal | サブナビリンク |
| Category Badge | BridgestoneTypeTP-Regular | 12px | 400 | 15.6px (x1.3) | normal | #757575 背景のバッジ |
| Product Sub | BridgestoneTypeTP-Regular | 12px | 400 | 20px (x1.67) | normal | 製品サブタイトル |
| Utility Link | BridgestoneTypeTP-Regular | 11px | 400 | — | normal | ユーティリティナビ |
| Date | BridgestoneTypeTP-Regular | 10px | 400 | 16.4px (x1.64) | normal | 日付表示 |
| Global Link | BridgestoneTypeTP-Regular | 10px | 400 | — | normal | グローバルリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- **サイト共通の比率 1.64**: 42px 見出し（x1.64）、15px 本文（x1.64）、14px body（x1.64）、10px 日付（x1.64）と、サイズが変わっても同一比率を維持。Bridgestone の最も特徴的なタイポグラフィ設定
- サブ見出し: `60px` (30px x **2.0**) — 例外的に広い行間
- ナビゲーション: `18.2px` (14px x 1.3) — UI 要素はタイトめ
- バッジ・小テキスト: `15.6px` (12px x 1.3)

**字間 (letter-spacing)** — 実測値:
- **ほぼ全要素が `normal`** — Bridgestone は字間調整を最小限に留めている
- 一部の本文テキスト: `-0.28px` (14px ベースで **-0.02em**) — ネガティブスペーシングで引き締め
- 製品タイトル: `-0.6px` (18px ベースで **-0.03em**) — ダーク背景上の製品名でネガティブスペーシング

**ガイドライン**:
- 基本は `letter-spacing: normal` を維持する。字間を広げる方向の調整は行わない
- ネガティブスペーシング（`-0.02em` 〜 `-0.03em`）は特定のコンテキスト（製品名、一部本文）に限定使用
- `line-height: 1.64` を全サイズ共通の基本比率として適用する

### 3.6 禁則処理・改行ルール

```css
/* Bridgestone サイトのデフォルト設定 */
word-break: normal;
overflow-wrap: break-word;
```

- 日本語テキストの禁則処理はブラウザデフォルトに委ねている
- 長い URL や英単語は `overflow-wrap: break-word` で折り返し

### 3.7 OpenType 機能

```css
/* Bridgestone: palt なし */
font-feature-settings: normal;
```

- **palt を使用しない** — ベタ組み（等幅字詰め）のまま。Honda（palt グローバル適用）とは対照的なアプローチ
- カスタム書体 BridgestoneTypeTP のデフォルトメトリクスをそのまま活かす設計

### 3.8 縦書き

- 該当なし。Bridgestone は横書きのみ

---

## 4. Component Stylings

### Buttons

**Outline Button（"TOPICS一覧を見る" 等）** — 実測値:
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #808080`
- Border Radius: **`0px`**
- Padding: `3px 15px 0px`
- Font Size: `14px`
- Font Weight: `600`

**Mega Menu Heading（pill 型カテゴリ見出し）** — 実測値:
- Background: `transparent`
- Text: `#000000`
- Border: なし
- Border Radius: **`40px`**（pill 形状）
- Font Size: `20px`
- Font Weight: `600`
- Line Height: `32.8px` (x1.64)

**Dropdown Item** — 実測値:
- Background: `#ffffff`
- Text: デフォルト
- Border: `1px solid #d1d1d1`
- Border Radius: `0px`
- Font Size: `14px`
- Font Weight: `400`

**Category Badge（ニュースカテゴリ）** — 実測値:
- Background: `#757575`
- Text: `#ffffff`
- Border Radius: `0px`
- Padding: `3px 5px`
- Font Size: `12px`
- Font Weight: `400`

**Search Button Area** — 実測値:
- Background: `#eeeeee`
- Font Size: `12px`
- Font Weight: `600`

> **ボタンデザインの二面性**: Bridgestone はアウトラインボタン・ドロップダウン・バッジは **radius 0px の角形**、メガメニューのカテゴリ見出しのみ **radius 40px の pill 形状**を使う。一般的な CTA は角形、ナビゲーションの大カテゴリのみ丸い、という明確な使い分け

### Cards

**ニュースカード**
- Background: `#ffffff` / `#f5f5f5`（セクション背景に依存）
- Border: なし
- Border Radius: `0px`
- Shadow: なし

**製品カード（ダーク背景上）**
- テキスト: `#ffffff`（タイトル）、`#999999`（サブタイトル）
- 画像フル幅
- テキストオーバーレイ構造

### Navigation

- **Desktop Header**: 白背景 (`#ffffff`)、weight 600 のナビリンク
- **Mega Menu**: `#eeeeee` 背景、pill 型カテゴリ見出し（radius 40px）
- **Nav Overlay**: `rgba(255, 255, 255, 0.95)` — フロストガラス効果の白ベースオーバーレイ
- **Global Nav**: 10px の小さなグローバルリンク

### Inputs

**検索入力欄** — 実測値:
- Background: `#ffffff`
- Border: `1px solid #707070`
- Border Radius: `0px`（推定）
- Padding: `10px`
- Font Size: `16px`
- Font Family: Arial, sans-serif（入力欄のみ別フォント）

---

## 5. Layout Principles

### Spacing Scale

Bridgestone は明確なデザイントークンよりも、コンテンツに応じた余白設計を採用。製品ビジュアルを大きく見せるヒーロー型レイアウトが基本。

| Token | Value | 用途 |
|-------|-------|------|
| XS | 3–5px | バッジ内パディング、微調整 |
| S | 10px | 入力欄パディング、小要素の間隔 |
| M | 15px | ボタンの水平パディング |
| L | 24px | セクション内余白 |
| XL | 40px | セクション間余白 |
| XXL | 80px | ヒーロー・大セクション間 |

### Container

- Max Width: 全幅レイアウト（コンテンツ部分は約 1200px 内に収まる）
- Padding (horizontal): `20px`〜`40px`

### Grid

- ニュースリスト: 1 カラム（日付 + バッジ + タイトルの横並び構造）
- 製品ギャラリー: 2〜4 カラムのグリッド
- コンテンツエリア: 1 カラム中央揃え

---

## 6. Depth & Elevation

Bridgestone のデザインは徹底的にフラット。影の使用を最小限に抑え、色の濃淡とボーダーで構造を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | デフォルト。ほぼすべての要素 |
| 1 | `0 2px 4px rgba(0,0,0,0.08)` | ホバー時のカード（控えめ） |
| 2 | `0 4px 12px rgba(0,0,0,0.12)` | ドロップダウンメニュー |
| Overlay | `rgba(255,255,255,0.95)` | ナビゲーションオーバーレイ（フロストガラス） |

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#333333` を基調に使い、グレーの濃淡（`#3c3c3c` / `#757575` / `#999999`）で情報の優先度を表現する
- `line-height: 1.64` をサイト共通の行間比率として一貫適用する
- 見出しは `font-weight: 400` で、カスタム書体の持つ自然なウェイトを活かす
- ナビゲーション・インタラクティブ要素のみ `font-weight: 600` で差別化する
- メガメニューのカテゴリ見出しは `border-radius: 40px` の pill 形状にする
- 一般的なボタン・バッジ・ドロップダウンは `border-radius: 0px` の角形にする
- 背景色はホワイト (`#ffffff`) と極薄グレー (`#f5f5f5` / `#ececec`) の交互でセクションを区切る
- フォントフォールバックは游ゴシック体（YuGothic）を最優先にする

### Don't（禁止）

- ブランドカラー（赤）を UI 要素に多用しない — ロゴ以外での赤の使用は Bridgestone の設計方針に反する
- `font-feature-settings: "palt"` を適用しない — Bridgestone はベタ組みを採用している
- `letter-spacing` をプラス方向に広げない — Bridgestone は `normal` または微量のネガティブスペーシングのみ
- フォールバックチェーンにメイリオ（Meiryo）を含めない — Bridgestone は意図的に省略している
- 装飾的な影やグラデーションを使わない — フラットで構造的な印象を維持する
- pill 形状（radius 40px）を CTA ボタンに使わない — pill はメガメニューのカテゴリ見出し専用
- ダーク背景のテキストに `#999999` より暗い色を使わない — 可読性の確保

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- ナビゲーションリンクは padding で十分なタッチ領域を確保

### フォントサイズの調整

- モバイルでは本文 14px
- 見出し（42px → 28–32px 程度）はデスクトップの 70% 程度に縮小
- BridgestoneTypeTP-Regular はモバイルでも同一フォントファミリーを使用
- `line-height: 1.64` の比率はレスポンシブでも維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: Bridgestone Red（ロゴ専用、UIには展開しない）
Text Primary: #333333
Text Body: #000000
Text Secondary: #3c3c3c
Text Sub: #999999
Badge Gray: #757575
Background: #ffffff
Section BG: #f5f5f5
Hero BG: #ececec
Mega Menu BG: #eeeeee
Footer Dark: #222222

Font (All): BridgestoneTypeTP-Regular, 游ゴシック体, YuGothic,
  游ゴシック, "Yu Gothic", "Hiragino Sans", sans-serif
Font (Preview): "BIZ UDPGothic", 游ゴシック体, YuGothic,
  游ゴシック, "Yu Gothic", "Hiragino Sans", sans-serif

Body Size: 14–15px / line-height: 1.64 / letter-spacing: normal
Heading: 42px / weight: 400 / line-height: 1.64
Nav: weight: 600 / line-height: 1.3
OpenType: font-feature-settings: normal（palt なし）
Button Radius: 0px（角形）
Mega Menu Heading Radius: 40px（pill）
```

### プロンプト例

```
Bridgestone のデザインに従って、ニュースリリース一覧ページを作成してください。
- フォント: BridgestoneTypeTP-Regular（代替: BIZ UDPGothic）
  フォールバック: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic",
    "Hiragino Sans", sans-serif
- テキスト色: #333333（メイン）、#3c3c3c（日付）、#999999（サブ）
- 背景: #ffffff、セクション背景: #f5f5f5
- フッター: #222222
- font-feature-settings: normal（palt を使わない）
- 行間: line-height: 1.64（サイト共通比率）
- 見出し: 42px, weight 400（書体のウェイトを活かす）
- ナビ: weight 600
- CTA ボタン: border: 1px solid #808080, border-radius: 0px
- カテゴリバッジ: bg #757575, text #ffffff, radius 0px
- メガメニュー見出し: radius 40px（pill — ナビ専用）
- letter-spacing: normal（ネガティブスペーシングは製品名等に限定）
```
