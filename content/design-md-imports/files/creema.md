# DESIGN.md — Creema

> Creema（https://www.creema.jp/）のデザイン仕様書。
> 日本最大のハンドメイド・クラフト作品マーケットプレイス。
> Puppeteer による computed style 実測値（2026-06-12 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのあるクラフト志向のマーケットプレイス。作り手の作品を主役にし、テキストやUIは控えめに退く設計。ゴシック体（本文・UI）と明朝体（見出し）を混植する珍しいタイポグラフィが特徴
- **密度**: 密度の高い商品グリッド。サイドバーに明朝体のカテゴリナビゲーション、メインエリアに商品カードが並ぶ。11px という非常に小さなベースフォントで繊細・上品な印象を作る
- **キーワード**: 温かい、クラフト感、繊細、混植、パステル、商品ファースト
- **特徴**: ゴシック体と明朝体の混植により、一般的なECサイトにはない工芸品らしい品格を演出。パステルカラーをカテゴリ識別に使い、強いブランドカラーを持たない。CSS Custom Properties は不使用で、伝統的なCSS設計

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- Creema は単一の強いブランドカラーを持たない。代わりにパステル調の淡い色をカテゴリ別アクセントとして使い分ける
- ロゴやブランドアイデンティティはテキストベースで、ニュートラルカラーに寄っている

### Accent（カテゴリアクセント）

- **Pastel Blue** (`#dfeff5`): カテゴリアクセント（一覧ページ。出現 40 件）
- **Pastel Green** (`#e3f1e0`): カテゴリアクセント（一覧ページ。出現 26 件）
- **Pastel Pink** (`#f5dcdc`): カテゴリアクセント（一覧ページ。出現 4 件）
- **Pastel Warm** (`#f3f1f1`): 暖色系サーフェス

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 見出し、重要テキスト
- **Text Secondary** (`#666666`): 商品説明、タグテキスト
- **Text Muted** (`#868686`): 補足テキスト、ヘッダー要素
- **Text Light** (`#999999`): 価格、注釈
- **Text Button** (`#555555`): 検索ボタン等のUIテキスト
- **Text Favorite** (`#888888`): お気に入りボタンテキスト
- **Gray** (`#b8b8b8`): 無効状態

### Surface & Borders

- **Background** (`#ffffff`): ページ背景
- **Surface Tag** (`#f7f7f7`): タグ・キーワードボタンの背景
- **Surface Alt** (`#f5f5f5`): セカンダリサーフェス
- **Surface Card** (`#fdfdfd`): カード・お気に入りボタンの背景
- **Border** (`#cccccc`): メインの区切り線
- **Border Light** (`#e1e1e1`): 薄いボーダー

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・UIテキスト）**:
- ヒラギノ角ゴ Pro W3（macOS）
- メイリオ（Windows）

**明朝体（セクション見出し）**:
- ヒラギノ明朝 ProN W6（macOS）
- HG明朝E（Windows）
- MS P明朝（レガシー Windows）

### 3.2 欧文フォント

- **セリフ**: Times New Roman — 英語ラベル（"SEARCH", "CATEGORY"）専用
- **サンセリフ**: Osaka — ゴシック体フォールバック内で使用

### 3.3 font-family 指定

```css
/* 本文・UIテキスト（ゴシック体） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
  メイリオ, Meiryo, sans-serif;

/* セクション見出し（明朝体） */
font-family: "ヒラギノ明朝 ProN W6", HiraMinProN-W6, HG明朝E,
  "ＭＳ Ｐ明朝", "MS PMincho", serif;

/* 英語ラベル */
font-family: "Times New Roman", serif;
```

**フォールバックの考え方**:
- 和文優先の指定。欧文フォントを先頭に置かない構成
- ゴシック体は macOS 向けヒラギノ角ゴ → Osaka → Windows 向けメイリオの順
- 明朝体は macOS 向けヒラギノ明朝 ProN W6 → Windows 向け HG明朝E → MS P明朝
- 英語ラベル専用に Times New Roman を別スタックで指定
- 注意: ヒラギノ角ゴは「Pro」指定（「ProN」ではない）。明朝は「ProN」指定

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-06-12 取得）

| Role | Font | Size | Weight | Line Height | 備考 |
|------|------|------|--------|-------------|------|
| Tagline (h1) | Gothic | 11px | 400 | 30px (2.73) | サイト説明文 |
| Listing Title (h1) | Gothic | 11px | 400 | normal | 検索結果ページ見出し |
| Section Heading (h2) | Mincho | 12px | 700 | normal | "最近の売り切れ作品" 等 |
| Section Heading (h3) | Mincho | 12px | 400 | 20px (1.67) | "カテゴリーから絞る", "ランキング" |
| Body | Gothic | 11px | 400 | normal | 商品説明テキスト |
| Price | Gothic | 11px | 400 | normal | 価格表示（color: `#999`) |
| Label EN | Times New Roman | 11px | 400 | 10px | "SEARCH" |
| Label EN small | Times New Roman | 10px | 400 | normal | "CATEGORY" |
| Button | Gothic | 12px | 400 | 12–18px | 検索ボタン、フィルター |
| Input | Gothic | 11–12px | 400 | 18–20px | フォーム入力欄 |
| Header link | Gothic | 11px | 400 | 30px | ナビゲーションリンク |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文・商品説明: `normal`（ブラウザデフォルト。11px に対して約 1.2）
- ヘッダーリンク・タグライン: `30px`（11px × 2.73）— クリック領域確保のため
- 明朝体見出し (h3): `20px`（12px × 1.67）
- 入力欄: `18–20px`（11–12px × 1.5–1.67）

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal` — letter-spacing の明示的な指定は確認されなかった

**ガイドライン**:
- ベースフォント 11px は現代的なサイトとしては非常に小さい。再現時はこの値を正確に守ること
- 行間に `normal` を多用するのが特徴。ゆったりした行間設計ではなく、密度重視
- ヘッダーリンクの `line-height: 30px` はテキストサイズに対して大きいが、タッチ/クリック領域の確保が目的

### 3.6 禁則処理・改行ルール

```css
/* 特別な禁則設定は確認されなかった */
/* ブラウザデフォルトの禁則処理に依存 */
```

- 伝統的なCSS設計のため、禁則処理はブラウザのデフォルト動作に委ねている

### 3.7 OpenType 機能

```css
/* palt・kern の明示的な設定は確認されなかった */
font-feature-settings: normal;
```

- 11px という小さなサイズのため、`palt`（プロポーショナル字詰め）は適用していない
- 明朝体見出しにも `palt` は確認されなかった

### 3.8 縦書き

- 該当なし。Creema は横書きのみ

---

## 4. Component Stylings

### Buttons

**Tag Button（タグ・キーワード）**
- Background: `#f7f7f7`
- Text: `#666666`
- Border Radius: 3px
- Font Size: 11px
- Font Weight: 400

**Search Button（検索）**
- Background: 透明（テキストリンク型）
- Text: `#555555`
- Font Size: 12px
- Font Weight: 400
- Font: Gothic

**Favorite Button（Myお気に入り）**
- Background: `#fdfdfd`
- Text: `#888888`
- Border Radius: 3px
- Font Size: 11px
- Font Weight: 400

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border Radius: 3px
- Font Size: 11–12px
- Font: Gothic
- Line Height: 18–20px

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（画像で区切る）
- Shadow: ホバー時に微かなシャドウ
- 商品画像が主体で、テキスト情報は画像下に最小限

---

## 5. Layout Principles

### Container

- サイドバー付き2カラムレイアウト（デスクトップ）
- サイドバー: カテゴリナビゲーション（明朝体見出し）
- メインエリア: 商品グリッド

### Grid

- 商品グリッド: 4–5列（デスクトップ）
- サイドバー幅: 約 200px
- ガター: 狭め（密な商品表示）

### Spacing

- 全体的にコンパクトなスペーシング
- 商品カード間: 狭い間隔（作品を多く見せる設計）
- セクション間: 明朝体見出しで視覚的に区切る

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 通常状態（フラットデザイン基調） |
| 1 | 微かなシャドウ（ホバー時） | 商品カードホバー |

- Creema はほぼフラットなデザイン。影は最小限
- 区切りはボーダー（`#cccccc`, `#e1e1e1`）で表現
- パステルカラーの背景色でセクションを分離

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文・UIテキストにはゴシック体、セクション見出しには明朝体を使い分ける（混植がブランドの核心）
- ベースフォント 11px を守り、繊細で上品な印象を維持する
- テキスト色は `#333333`（ほぼ黒）を使い、純粋な `#000000` を避ける
- カテゴリ識別にはパステルカラー（`#dfeff5`, `#e3f1e0`, `#f5dcdc`）を使う
- 商品画像を主役にし、テキストは控えめに退く
- 価格表示は `#999999` で控えめに表示する
- タグ・キーワードボタンは `#f7f7f7` 背景 + `#666666` テキスト + `3px` 角丸で統一する
- ヒラギノ角ゴは「Pro」、ヒラギノ明朝は「ProN」の指定を正確に守る

### Don't（禁止）

- ゴシック体と明朝体の使い分けを逆転させない（見出しにゴシック、本文に明朝は NG）
- 強い単色のブランドカラーを追加しない（パステル調の淡い色使いがアイデンティティ）
- フォントサイズを大きくしすぎない（11–12px の繊細さがブランド感）
- 商品画像を小さくしてテキストを増やさない（作品ファースト）
- `letter-spacing` や `palt` を追加しない（実サイトでは使用していない）
- 影を強くしない（フラット基調のデザイン）
- Times New Roman を日本語テキストに使わない（英語ラベル専用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト（1–2列グリッド） |
| Tablet | ≤ 1024px | タブレットレイアウト（2–3列グリッド） |
| Desktop | > 1024px | デスクトップレイアウト（サイドバー + 4–5列グリッド） |

### タッチターゲット

- ヘッダーリンクは `line-height: 30px` でタッチ領域を確保
- タグボタンの最小サイズ: padding でタップ可能領域を確保

### フォントサイズの調整

- ベースフォント 11px はモバイルでもほぼ変更なし（全体的に小さいまま維持）
- モバイルではサイドバーが非表示になり、商品グリッドが1–2列に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Identity: パステル調パレット（単一ブランドカラーなし）
Text Primary: #333333
Text Secondary: #666666
Text Muted: #868686
Text Light: #999999
Background: #ffffff
Surface Tag: #f7f7f7
Border: #cccccc
Accent Blue: #dfeff5
Accent Green: #e3f1e0
Accent Pink: #f5dcdc

Gothic Font: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
  メイリオ, Meiryo, sans-serif
Mincho Font: "ヒラギノ明朝 ProN W6", HiraMinProN-W6, HG明朝E,
  "ＭＳ Ｐ明朝", "MS PMincho", serif
Label Font: "Times New Roman", serif

Body Size: 11px / line-height: normal / letter-spacing: normal
Heading (Mincho): 12px / weight: 400–700
Button Radius: 3px
palt: なし
```

### プロンプト例

```
Creema のデザインに従って、ハンドメイド作品の一覧ページを作成してください。
- 本文フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
    メイリオ, Meiryo, sans-serif（11px）
- 見出しフォント: "ヒラギノ明朝 ProN W6", HiraMinProN-W6, HG明朝E,
    "ＭＳ Ｐ明朝", "MS PMincho", serif（12px）
- 英語ラベル: "Times New Roman", serif（10–11px）
- テキスト色: #333333（純粋な黒は使わない）
- 補足テキスト: #666666、価格: #999999
- 背景: #ffffff、タグ背景: #f7f7f7
- ボーダー: #cccccc
- タグボタン: 3px 角丸、#f7f7f7 背景、#666666 テキスト
- 商品画像を大きく、テキストは控えめに
- カテゴリはパステルカラーで識別（青 #dfeff5、緑 #e3f1e0、ピンク #f5dcdc）
- palt・letter-spacing は使わない
```
