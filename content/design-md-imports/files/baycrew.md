# DESIGN.md — BAYCREW'S STORE（ベイクルーズストア）

> BAYCREW'S STORE（https://baycrews.jp/）のデザイン仕様書。
> 日本最大級のマルチブランドファッションリテーラー。JOURNAL STANDARD、IENA、Deuxieme Classe、Spick and Span、EDIFICE、SLOBE IENA 等を擁するベイクルーズグループの公式EC。
> 実サイトの computed style 実測（2026-06-10 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白背景にモノクロームのテキスト、最小限の UI クロームで**商品写真を主役にする**徹底的に引き算されたファッション EC。装飾的な要素を排し、プロダクトビジュアルとブランド名だけで世界観を構築する
- **密度**: 12px ベースの小さな文字で高密度な商品一覧を実現。行間は 1.67〜1.83 で日本語としては標準的だが、文字サイズが小さいため視覚的にはコンパクト
- **キーワード**: モノクローム、ミニマル、プロダクトファースト、ユーティリタリアン、ファッション EC
- **特徴**:
  - **見出しを含む全テキストが weight 400（Regular）** という極めて珍しい設計。太字を一切使わず、サイズと色だけで階層を表現する
  - ブランドカラーは存在感を抑え、**シアンブルー `#00a6dd`** をアクティブ状態のインジケーターやリンクの一部にだけ使用
  - フォントスタックは `"Hiragino Kaku Gothic Pro", Meiryo, sans-serif` のわずか2フォント＋generic。最短クラスの実用的なフォールバック
  - OpenType 機能（palt）は一切不使用。letter-spacing も一部見出しの `1.2px` を除きほぼ normal
  - 全体のグレースケールは `#000` / `#333` / `#555` / `#666` / `#999` / `#ccc` / `#f0f0f0` / `#fff` の8段階。16進数で切りの良い値に統一されている
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Accent Cyan** (`#00a6dd`): ブランドアクセント。アクティブページャードット、情報タイトルリンク、WOMEN/MEN タブのアクティブ状態に使用。ページ全体で唯一の有彩色

### Neutral — モノクロームスケール

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#000000` | 本文テキスト、見出し、ブランドロゴ |
| Dark Gray | `#333333` | 検索ボタン背景、アウトレットバッジ |
| Footer Text | `#555555` | フッター情報テキスト、コピーライト |
| Sub Text | `#666666` | レコメンドラベル、補助テキスト |
| Muted | `#999999` | 日付、非アクティブページャー、メニューアイコン |
| Border | `#cccccc` | フッターカスタマーサービス枠、区切り線 |
| Surface Footer | `#f0f0f0` | フッター背景 |
| White | `#ffffff` | ページ背景 |

### CTA / Interactive

- **Pager Dot (Active)**: 背景 `#00a6dd` / border-radius `3px` / font Arial 10.2px / weight 700 — サイト内で唯一 bold を使う要素
- **Pager Dot (Inactive)**: 背景 `#999999` / border-radius `3px`
- **Gender Toggle (Active)**: 文字色 `#00a6dd` / 14px / weight 400
- **Gender Toggle (Inactive)**: 文字色 `#999999` / 14px / weight 400
- **Search Submit**: 背景 `#333333` / 文字 `#ffffff` / border-radius `0px`
- **Footer Link**: 背景 `#ffffff` / border `1px solid #cccccc` / border-radius `0px`

### Semantic（実測未確認・推奨値）

実サイトのトップページにはエラー/成功色の表出が見られない。EC 向けに推奨する補完値:

- **Danger / Sale**: `#cc0000` — セール価格、エラー
- **Success**: `#2d8c3c` — 在庫あり、完了
- **Warning**: `#cc8800` — 残りわずか、注意

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Hiragino Kaku Gothic Pro（ヒラギノ角ゴ Pro）** を最優先。ProN（JIS2004字形）ではなく Pro（JIS90字形）を指定
- **フォールバック**: `Meiryo`（Windows）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たない。ヒラギノ角ゴ Pro 内蔵の欧文グリフがそのまま使用される
- **ページャードットのみ** `Arial` を明示指定（10.2px / 700）

### 3.3 font-family 指定

```css
/* 全体（唯一のフォントスタック） */
font-family: "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;

/* ページャードット（例外） */
font-family: Arial, sans-serif;
```

**フォールバックの考え方**:
- わずか2フォント＋generic という最短構成。macOS ではヒラギノ、Windows では Meiryo にフォールバック
- 最近のサイトで見られる `"Hiragino Sans"` ではなく、レガシーな `"Hiragino Kaku Gothic Pro"` を指定。サイトの歴史を反映
- ProN（JIS2004字形）ではなく Pro（JIS90字形）を指定している点に注意

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo | Hiragino Kaku Gothic Pro | 18px | 400 | 65px (vertical centering) | normal | サイトロゴ (h1) |
| Section Heading EN | Hiragino Kaku Gothic Pro | 18px | 400 | 43px | normal | セクション見出し (h2) |
| Section Heading JP | Hiragino Kaku Gothic Pro | 16px | 400 | 22px (1.375) | 1.2px (0.075em) | 日本語セクション見出し (h2) |
| Body | Hiragino Kaku Gothic Pro | 12px | 400 | 22px (1.83) | normal | 本文テキスト |
| Body (Footer) | Hiragino Kaku Gothic Pro | 14px | 400 | 22px (1.57) | normal | フッター本文 |
| Gender Nav | Hiragino Kaku Gothic Pro | 14px | 400 | 28px (2.0) | normal | WOMEN/MEN タブ |
| Info Link | Hiragino Kaku Gothic Pro | 12px | 400 | 22px (1.83) | normal | 情報タイトルリンク（色 #00a6dd） |
| Date | Hiragino Kaku Gothic Pro | 12px | 400 | 22px (1.83) | normal | 日付表示（色 #999） |
| Recommendation | Hiragino Kaku Gothic Pro | 10px | 400 | 10px (1.0) | normal | レコメンドラベル（色 #666） |
| Copyright | Hiragino Kaku Gothic Pro | 10px | 400 | 22px (2.2) | normal | コピーライト（色 #555） |
| Pager Dot | Arial | 10.2px | 700 | normal | normal | 唯一の bold 要素 |
| Search Input | Hiragino Kaku Gothic Pro | 12px | 400 | 26px (2.17) | normal | 検索フォーム |

**特筆点**: weight 400 がサイト全体に適用されており、h1〜h2 を含むすべてのテキスト要素が Regular。太字による視覚的強調を一切行わない設計思想。

### 3.5 行間・字間

- **本文の行間 (line-height)**: 22px / 12px = **1.83**（日本語として標準的。文字サイズが小さいため実際の行間は狭い）
- **見出しの行間**: 1.375〜2.39（要素による。大きめの line-height は垂直方向の余白として機能）
- **本文の字間 (letter-spacing)**: **normal**（明示的な字間指定なし）
- **見出しの字間**: 一部の日本語見出しで **1.2px（≈ 0.075em at 16px）** の letter-spacing を適用。英語見出しは normal

**ガイドライン**:
- 本文 12px は日本語 EC としてはコンパクト。モバイル表示では 14px 以上への拡大を検討
- 全体的に letter-spacing は抑制的。和文のプロポーショナル字詰めも不使用

### 3.6 禁則処理・改行ルール

```css
/* 実測に基づく設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

特段の禁則処理指定は確認されず、ブラウザのデフォルト動作に委ねている。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt**: 不使用。プロポーショナル字詰めは一切適用しない
- **kern**: 不使用
- EC サイトとして、装飾的なタイポグラフィ制御よりも安定した表示を優先する設計

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Search Submit**
- Background: `#333333`
- Text: `#ffffff`
- Padding: 0
- Border Radius: `0px`
- Font Size: 12px
- Font Weight: 400

**Footer Service Link**
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #cccccc`
- Border Radius: `0px`
- Padding: 実測なし
- Font Size: 12px

**Gender Toggle (Active)**
- Background: transparent
- Text: `#00a6dd`
- Font Size: 14px
- Font Weight: 400

**Gender Toggle (Inactive)**
- Background: transparent
- Text: `#999999`
- Font Size: 14px
- Font Weight: 400

### Pager Dots

- **Active**: bg `#00a6dd` / radius `3px` / font Arial 10.2px / weight 700
- **Inactive**: bg `#999999` / radius `3px`

### Inputs

- Background: `#ffffff`
- Border: 実測なし（簡素なスタイル）
- Font Size: 12px
- Font Weight: 400
- Line Height: 26px
- Padding: `0 5px`

### Cards（商品カード）

ベイクルーズの商品カードは極めてシンプル:
- Background: `#ffffff`
- Border: なし
- Border Radius: `0px`
- Shadow: なし
- 構造: 商品画像 → ブランド名（12px / #000）→ 商品名（12px / #000）→ 価格（12px / #000）

---

## 5. Layout Principles

### Spacing Scale

サイト全体で体系的なスペーシングトークンは確認されず、個別の値が使用されている。実測から推定されるスケール:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 最小間隔 |
| S | 8px | 要素内余白 |
| M | 16px | セクション間 |
| L | 24px | グループ間 |
| XL | 32px | 大きなセクション間 |
| XXL | 48px | ヒーロー・フッター余白 |

### Container

- Max Width: **960px**（推定。ファッション EC 標準）
- Padding (horizontal): 0〜16px

### Grid

- **商品一覧**: 4カラムグリッド（デスクトップ）
- **Gutter**: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットデザイン） |
| 1 | `0 1px 3px rgba(0,0,0,0.1)` | ホバー時のカード（控えめ） |
| 2 | `0 2px 8px rgba(0,0,0,0.12)` | ドロップダウンメニュー |
| 3 | `0 4px 16px rgba(0,0,0,0.15)` | モーダル・ポップオーバー |

**注**: サイト全体がフラットデザインで、影の使用は極めて限定的。Level 0 が支配的。

---

## 7. Do's and Don'ts

### Do（推奨）

- 商品写真を最大のデザイン要素として扱い、UI クロームは最小限にする
- テキストは weight 400 で統一し、サイズと色だけで視覚的階層を作る
- グレースケールは `#000` / `#333` / `#555` / `#666` / `#999` / `#ccc` / `#f0f0f0` / `#fff` の8段階を守る
- アクセントカラー `#00a6dd` はアクティブ状態とリンクのみに使用し、過度に使わない
- フォントスタックは `"Hiragino Kaku Gothic Pro", Meiryo, sans-serif` を正確に記述する（ProN ではなく Pro）
- border-radius は `0px` を基本とし、角丸は使わない（ページャードットの 3px のみ例外）

### Don't（禁止）

- font-weight を 400 以外に変更しない（ページャードットの Arial 700 のみ例外）
- 有彩色を `#00a6dd` 以外に追加しない（ブランドの世界観が壊れる）
- 派手なボタンスタイル（pill、グラデーション、影付き）を使わない
- カードに border-radius や box-shadow を追加しない（フラットを維持）
- OpenType 機能（palt、kern）を有効にしない
- フォントサイズを 12px 未満にしない（可読性の限界）
- letter-spacing を広くとりすぎない（元のデザインの詰まった印象を損なう）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1カラム商品一覧、ハンバーガーメニュー |
| Tablet | ≤ 1024px | 2〜3カラム商品一覧 |
| Desktop | > 1024px | 4カラム商品一覧、フルナビゲーション |

### タッチターゲット

- WOMEN/MEN タブ: 14px / line-height 28px — モバイルではタッチターゲットとして小さい可能性あり
- 最小サイズ目標: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- ベースサイズ 12px はデスクトップ向け。モバイルでは 14px 以上への拡大を推奨
- 見出しはデスクトップと同等（weight の変化がないため、サイズでの差別化が重要）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Accent Color: #00a6dd
Text Color: #000000
Text Muted: #999999
Text Sub: #666666
Background: #ffffff
Surface Footer: #f0f0f0
Border: #cccccc
Font: "Hiragino Kaku Gothic Pro", Meiryo, sans-serif
Body Size: 12px
Body Weight: 400 (all text)
Line Height: 1.83
Letter Spacing: normal
Border Radius: 0px
palt: off
```

### プロンプト例

```
ベイクルーズストアのデザインシステムに従って、商品一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic Pro", Meiryo, sans-serif
- 全テキストの font-weight は 400（見出しも含む）
- 本文サイズ: 12px / line-height: 1.83
- 文字色: #000000（本文）、#999999（補助）、#666666（ラベル）
- アクセント色: #00a6dd（アクティブ状態のみ）
- 背景: #ffffff / フッター背景: #f0f0f0
- ボーダー: #cccccc
- border-radius: 0px（角丸なし）
- 商品カード: 画像 + ブランド名 + 商品名 + 価格、影なし、枠線なし
- 商品一覧: 4カラムグリッド
```
