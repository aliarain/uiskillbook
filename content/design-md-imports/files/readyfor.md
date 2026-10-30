# DESIGN.md — READYFOR（レディーフォー）

> READYFOR（https://readyfor.jp/）のデザイン仕様書。
> 日本初・日本最大級のクラウドファンディングプラットフォーム。社会課題の解決や文化・地域活性化を支援するプロジェクトが中心。
> 実サイトの computed style 実測（2026-06-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調としたクリーンなレイアウトに、**情熱のレッド `#e73650` の角丸 CTA** でクラウドファンディングの「行動喚起」と「温かさ」を両立。プロジェクトカードを主役にした UI で、支援者とプロジェクトの出会いを演出
- **密度**: 本文の line-height は 1.5。見出しも 1.2〜1.5 で比較的広め。カード UI を中心に情報を整理しつつ、読みやすさを確保
- **キーワード**: クリーンホワイト、パッションレッド、クールグレーサーフェス、Roboto + Noto Sans JP のモダンな混植、社会貢献プラットフォームの信頼感
- **特徴**:
  - フォントスタックは **Roboto（欧文優先）→ Noto Sans JP（和文）→ sans-serif** のシンプルな構成。Google Fonts で完結するためプレビュー再現性が高い
  - **ブランドカラーは `#e73650`（コーラルレッド）**。主要 CTA「ログイン・新規登録」「プロジェクトをはじめる」の背景とボーダーに使用。border-radius は `4px` の角丸
  - **アクセントカラーに `#fcb92c`（ゴールドイエロー）**。「NEXT GOAL挑戦中」バッジに使われ、プロジェクトの勢いや達成感を表現
  - サーフェスに `#f2f5f8`（クールグレー）を使用。ウォーム系ではなく**寒色寄りの明るいグレー**で、白との微妙なコントラストで階層を作る
  - テキスト色は `#383d43`（ダークグレー）が主体。純黒 `#000000` は限定的で、`#787f87`（ミディアムグレー）を補助テキストに使用
  - フッターは `#383d43`（ダークグレー）の反転配色で、白文字のナビゲーションを配置
  - `font-feature-settings: normal` — palt / kern の明示的有効化なし
  - Tailwind CSS ベースの実装（`rf:` プレフィックス付きユーティリティクラス）
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Red** (`#e73650`): メインのブランドカラー。主要 CTA「ログイン・新規登録」「プロジェクトをはじめる」の背景、ヘッダーのアクションボタン、CTA セクション（`uniqueBackgrounds` で 33 件、最多出現色）
- **Brand Gold** (`#fcb92c`): 「NEXT GOAL挑戦中」バッジの背景。プロジェクトの達成度や勢いを示すアクセント色（8 件出現）
- **Brand Blue** (`#3c82eb`): 「常設寄付のプロジェクトをはじめる」ボタン背景。寄付セクション専用のセカンダリブランド色（2 件出現）

### CTA / Buttons

- **Primary CTA**: 背景 `#e73650` / 文字 `#ffffff` / radius `4px` / padding `8px 12〜20px` / border `1px solid #e73650` / box-shadow `rgba(33, 35, 37, 0.12) 0px 4px 8px 0px`
- **Secondary CTA**: 背景 `#f2f5f8` / 文字 `#383d43` / border `1px solid #d8dce1` / radius `4px` / padding `8px 20〜40px`
- **Card Link**: 背景 `#ffffff` / radius `4px` / border なし / パディングなし — プロジェクトカード全体がリンク

### Neutral — Cool Gray Scale

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | body デフォルトテキスト・一部見出し |
| Dark Gray | `#383d43` | (56, 61, 67) | セクション見出し・主要テキスト・フッター背景 |
| Medium Gray | `#787f87` | (120, 127, 135) | 補助テキスト・キャッチコピー（display h2） |
| Border | `#d8dce1` | (216, 220, 225) | ボタンボーダー・プログレスバー背景・区切り線 |
| Surface | `#f2f5f8` | (242, 245, 248) | セカンダリボタン背景・カード面・セクション背景 |
| Light Surface | `#f8f9f9` | (248, 249, 249) | 地域検索セクション等のより薄いサーフェス |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード背景 |

### Semantic / Status

- **達成 (Orange)**: `#f88629` — 「達成」バッジの背景色
- **挑戦中 (Gold)**: `#fcb92c` — 「NEXT GOAL挑戦中」バッジの背景
- **進行中 (Orange Gradient)**: `#ffa45a` — プログレスバーのアクセント（8 件出現）
- **Green (Success)**: `#06c755` — 達成率 100% 超えのインジケータ等
- **Tag Active (Teal)**: `#308e85` — ハッシュタグ文字色（`#地域文化` 等）
- **Donation Blue Surface**: `#edf4ff` — 寄付セクションの薄いブルー面

### Footer

- **Footer BG**: `#383d43` — ダークグレー背景
- **Footer Text**: `#ffffff` — 白文字
- **Footer Link**: `#ffffff` — 白文字リンク

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** を使用。Google Fonts の標準的な日本語ゴシック体
- **フォールバック**: `sans-serif`（最小構成）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **Roboto** を最優先。Google のヒューマニストサンセリフで、Noto Sans JP と相性がよい
- font-family チェーンで Roboto が先頭に来るため、英数字は Roboto、日本語は Noto Sans JP で描画される

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1〜h4, p, a, span, button, input, nav, header, footer） */
font-family: Roboto, "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- 欧文は Roboto を最優先。英数字・記号類は Roboto の字形で統一
- 和文は Noto Sans JP にフォールバック。Roboto が持たない日本語グリフをカバー
- 最終フォールバックは `sans-serif` のみ。OS 固有のフォント（Hiragino Sans, Yu Gothic 等）は font-family に含まれない
- Google Fonts で両方提供されるため、**Web 環境でほぼ確実にブランド書体で表示される**

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 (Logo/Brand) | Roboto | 32px | 700 | normal | normal | `#000000` | "READYFOR" ブランドロゴ |
| Display H2 | Noto Sans JP | 48px | **400** | 70px (×1.46) | normal | `#787f87` | "いまより一歩、好きなほうの未来へ。" キャッチコピー |
| Section H2 | Noto Sans JP | 20px | 700 | 24px (×1.2) | normal | `#383d43` | "注目されているタグ"・"注目のプロジェクト" |
| Feature H2 | Noto Sans JP | 28px | 700 | 42px (×1.5) | normal | `#383d43` / `#ffffff` | "クラウドファンディングとは？"・"常設寄付をはじめよう" |
| H3 (Card Title) | Noto Sans JP | 18px | 700 | 27px (×1.5) | normal | `#383d43` | "９億円を集めた国立科学博物館が語る、舞台裏とその後。" |
| H4 (Project Title) | Noto Sans JP | 14px | 700 | 21px (×1.5) | normal | `#383d43` | "女人高野室生寺｜国宝 五重塔..." カード内プロジェクト名 |
| H4 (Footer) | Noto Sans JP | 16px | 700 | 24px (×1.5) | normal | `#ffffff` | "人気のカテゴリ" フッターセクション見出し |
| Body | Noto Sans JP | 14px | 400 | 21px (×1.5) | normal | `#383d43` | 本文テキスト |
| Body (Large) | Noto Sans JP | 16px | 400 | normal | normal | `#000000` | 説明文・フォーム |
| Tag / Hashtag | Noto Sans JP | 12px | 700 | 18px (×1.5) | normal | `#308e85` | "#地域文化" 等のハッシュタグ |
| Caption | Noto Sans JP | 12px | 400 | 18px (×1.5) | normal | `#787f87` | 補足テキスト・カード付帯情報 |
| Nav Link | Noto Sans JP | 12px | 400 | 18px (×1.5) | normal | default | "注目のプロジェクト" 等サブナビ |
| Nav Active | Noto Sans JP | 12px | 700 | 18px (×1.5) | normal | `#2969c9` | アクティブなナビリンク |
| Header Span | Noto Sans JP | 14px | 700 | 21px (×1.5) | normal | `#383d43` | "プロジェクトをさがす" ヘッダーナビ |
| Header CTA | Noto Sans JP | 12px | 700 | 18px (×1.5) | normal | `#ffffff` | "ログイン・新規登録" ヘッダーボタン内テキスト |
| Progress % | Roboto | 14px | 600 | 21px (×1.5) | normal | `#787f87` | "71%" 等の達成率 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **Display (48px)**: `1.46`（70px / 48px）— キャッチコピー用の広い行間
- **Feature (28px)**: `1.5`（42px / 28px）
- **Section H2 (20px)**: `1.2`（24px / 20px）— やや狭め
- **本文 (14px)**: `1.5`（21px / 14px）
- **Caption (12px)**: `1.5`（18px / 12px）
- **H1 / Body Large**: `normal`（ブラウザデフォルト）

**字間 (letter-spacing)** — 実測:
- **全階層で `normal`**（0em）。ネガティブ / ポジティブいずれのトラッキングも適用されていない

**ガイドライン**:
- READYFOR のタイポグラフィは **letter-spacing をいじらないシンプルな方針**。フォント本来のメトリクスに任せる
- line-height は全体的に `1.5` で統一感がある。Display のみ `1.46` とわずかに広め
- キャッチコピー（Display H2）は weight **400** の軽い見出し。セクション見出しは weight **700** の太い見出し

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;            /* 既定の日本語禁則 */
overflow-wrap: break-word;     /* 長い英単語の折り返し */
```

- Tailwind の `rf:break-all` クラスが一部の見出しに適用されている（長いプロジェクト名の折り返し対策）
- ヘッダーのボタン内テキストは `rf:whitespace-nowrap` で改行防止
- プロジェクトタイトルは `rf:h-[54px]` + `rf:overflow-hidden` で2行以上を非表示（2行制限）

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- Roboto + Noto Sans JP の組合せでは、フォントのデフォルトメトリクスに依存する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（レッド角丸）** — "ログイン・新規登録"・"プロジェクトをはじめる"
- Background: `#e73650`
- Text: `#ffffff`
- Padding: `8px 12〜20px`
- Border: `1px solid #e73650`
- Border Radius: `4px`
- Box Shadow: `rgba(33, 35, 37, 0.12) 0px 4px 8px 0px`
- Font: Roboto / Noto Sans JP, 12〜16px, weight 700

**Secondary CTA（グレー面＋ボーダー）** — "プロジェクトをさがす"・"もっと詳しく"
- Background: `#f2f5f8`
- Text: `#383d43`
- Padding: `8px 20〜40px`
- Border: `1px solid #d8dce1`
- Border Radius: `4px`
- Box Shadow: none
- Font: Roboto / Noto Sans JP, 14〜16px, weight 400

**Donation CTA（ブルー）** — "常設寄付のプロジェクトをはじめる"
- Background: `#3c82eb`
- Text: `#ffffff`
- Padding: 標準
- Border Radius: `4px`
- Font: Roboto / Noto Sans JP, 16px

**Text Link**
- Background: transparent
- Text: `#0000ee`（ブラウザデフォルトリンク色）
- Text Decoration: none（`rf:no-underline`）
- Font: Roboto / Noto Sans JP, 12〜16px, weight 400

### Badges / Tags

**NEXT GOAL挑戦中（ゴールドバッジ）**
- Background: `#fcb92c`
- Text: `#ffffff`
- Font: 12px, weight 700
- 位置: プロジェクトカード画像の上に重ねて表示

**NEW（新着バッジ）**
- プロジェクトカードに付与される新着マーク

**達成（オレンジバッジ）**
- Background: `#f88629`
- Text: `#ffffff`

**ハッシュタグ**
- Background: transparent
- Text: `#308e85`（ティールグリーン）
- Font: 12px, weight 700

### Progress Bar（達成率バー）

- **背景トラック**: `#d8dce1`
- **進捗バー**: `#ffa45a`（オレンジグラデーション）/ `#06c755`（100% 超え）
- **パーセント表示**: `#787f87`, 14px, weight 600

### Inputs

- Background: `#ffffff`
- Border: `0px none`（ボーダーレス。親要素に含まれる検索バー）
- Border Radius: `4px`
- Padding: `7px 8px`
- Font: Roboto / Noto Sans JP, 12〜16px, weight 400
- Text: `#383d43`

### Cards / Surfaces

**プロジェクトカード**
- Background: `#ffffff`
- Border: なし
- Border Radius: `4px`
- Shadow: none（フラット）
- カード全体が `<a>` タグで包まれたクリッカブルカード

**サーフェス**
- `#f2f5f8` — セカンダリ背景・ボタン面
- `#f8f9f9` — 地域検索セクション等
- `#edf4ff` — 寄付セクションの薄いブルー面

### Header

- Background: `#ffffff`（白）
- Border Bottom: なし
- Position: sticky / fixed
- 右端に `#e73650` の CTA ボタン
- 検索バー内蔵

### Footer

- Background: `#383d43`（ダークグレー）
- Text: `#ffffff`
- カテゴリリンク一覧をグリッド配置
- Padding: 大きめ

---

## 5. Layout Principles

### Spacing Scale（8px グリッド推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白・カード内要素間 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白・セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1120px` 程度（プロジェクトカードグリッドの最大幅）
- Padding (horizontal): mobile `16px` / desktop `20〜32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Action | 4px | ボタン・カード・入力欄・プロジェクトカード（Tailwind トークン `rounded-action`） |

READYFOR は **`4px` の統一 radius** が特徴。ピル形状（`9999px`）は使用しない。

### Grid

- プロジェクトカードは **CSS Grid / Flexbox** で並ぶ
- Desktop: 4 カラム（注目プロジェクト）/ 3 カラム（一般プロジェクト）
- Tablet: 2 カラム
- Mobile: 1 カラム
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | プロジェクトカード・セカンダリボタン（基本フラット） |
| 1 | `rgba(33, 35, 37, 0.12) 0px 4px 8px 0px` | Primary CTA ボタン |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.08)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 16px 40px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではプロジェクトカードは `box-shadow: none`。**フラットカードデザイン**が基本
- Primary CTA のみ控えめな影 `rgba(33, 35, 37, 0.12)` を持つ
- 階層は白 `#ffffff` / クールサーフェス `#f2f5f8` / ダークフッター `#383d43` の3層で表現
- モーダルオーバーレイは `rgba(0, 0, 0, 0.7)` のダークスクリム（viewport 最大面積要素）

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントスタックは **Roboto → "Noto Sans JP" → sans-serif** の順で指定する
- 本文の line-height は **1.5** を基本にする
- letter-spacing は **normal**（0em）のまま。フォント本来のメトリクスを活かす
- 主要 CTA は **`#e73650` のレッド角丸**（`4px`）。セカンダリは **`#f2f5f8` 面 + `#d8dce1` ボーダー**
- プロジェクト達成系バッジは **`#fcb92c` のゴールド**、新着系は別色
- テキスト色は **`#383d43`** を主体に、補助テキストは **`#787f87`** で控えめに
- サーフェスは **クールグレー `#f2f5f8`** を使い、色温度を統一する
- プロジェクトカードは **フラット（shadow: none）+ radius 4px** のクリーンなスタイル
- フッターは **`#383d43` のダーク背景 + 白文字**で、カテゴリナビゲーションを配置
- キャッチコピー（Display）は **weight 400** の軽い表現、セクション見出しは **weight 700**

### Don't（禁止）

- 主要 CTA に **ピル形状（border-radius: 9999px）を使わない** — READYFOR は一貫して `4px` の角丸
- 主要 CTA に **黒や青を使わない** — CTA は `#e73650` のレッドが基本（ブルー `#3c82eb` は寄付セクション専用）
- **ウォームグレー**（`#f2f2f0`, `#737368` 等）を使わない — READYFOR のグレースケールはクール寄り
- 本文に **正の letter-spacing** を使わない（normal のまま維持）
- 見出しに **負の letter-spacing** を使わない（normal のまま維持）
- プロジェクトカードに **影を付けない** — フラットデザインが基本
- **palt / kern** を `font-feature-settings` で有効にしない
- 本文テキスト色に **純黒 `#000000`** を多用しない — `#383d43` が基本（純黒は限定的）

---

## 8. Responsive Behavior

### Breakpoints（Tailwind 互換・実測値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `md` | 768px | タブレット。ナビ表示切替・カードグリッド変更 |
| `lg` | 1024px | デスクトップ。ヘッダーナビ全展開 |

実装上、`rf:hidden` と `rf:lg:flex` の対比から **lg=1024px** がモバイル／デスクトップの主な閾値。

### モバイル時の調整

- Display H2: 48px → 32px 程度
- Section H2: 20px 維持（もともと小さめ）
- 本文サイズは 14px を維持
- ヘッダー CTA は省略、ハンバーガーメニューに格納
- プロジェクトカードは 1 カラム表示
- 検索バーは全幅展開

### タッチターゲット

- Primary CTA: 高さ `36〜44px`（padding `8px` + font size + line-height）
- プロジェクトカード: カード全体がタップ領域（`<a>` タグ）
- 検索入力: padding `7px 8px` + font 16px で 38px 程度

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red (CTA): #e73650
Brand Gold (Badge): #fcb92c
Brand Blue (Donation): #3c82eb
Dark Gray (Text/Footer): #383d43
Medium Gray (Sub Text): #787f87
Tag Teal: #308e85
Border: #d8dce1
Surface: #f2f5f8
White: #ffffff
Footer BG: #383d43

Font: Roboto, "Noto Sans JP", sans-serif

Display Size: 48px / line-height 1.46 / weight 400 / color #787f87
Section Heading: 20px / line-height 1.2 / weight 700 / color #383d43
Feature Heading: 28px / line-height 1.5 / weight 700 / color #383d43
Card Title: 14px / line-height 1.5 / weight 700 / color #383d43
Body: 14px / line-height 1.5 / weight 400 / color #383d43
Caption: 12px / line-height 1.5 / weight 400〜700 / color #787f87

Border Radius: 4px（全要素統一。ピルは使わない）
Shadow: Primary CTA のみ rgba(33,35,37,0.12) 0 4px 8px。他は none
letter-spacing: 全階層 normal
font-feature-settings: normal
```

### プロンプト例

```
READYFOR のデザインに従って、クラウドファンディングのプロジェクト一覧ページを作成してください。
- フォント: Roboto, "Noto Sans JP", sans-serif
- セクション見出し: 20px / weight 700 / line-height 1.2 / color #383d43
- プロジェクトタイトル: 14px / weight 700 / line-height 1.5 / color #383d43
- 本文: 14px / weight 400 / line-height 1.5 / color #383d43
- 補助テキスト: 12px / weight 400 / color #787f87
- 主要 CTA: 背景 #e73650 / 白文字 / border-radius 4px / padding 8px 20px / border 1px solid #e73650 / shadow rgba(33,35,37,0.12) 0 4px 8px
- セカンダリ CTA: 背景 #f2f5f8 / 文字 #383d43 / border 1px solid #d8dce1 / radius 4px
- NEXT GOAL バッジ: 背景 #fcb92c / 白文字 / 12px bold
- 達成率バー: トラック #d8dce1 / バー #ffa45a / パーセント #787f87
- プロジェクトカード: 白背景 / radius 4px / shadow none（フラット）
- タグ: #308e85（ティール） / 12px bold
- フッター: 背景 #383d43 / 白文字
- letter-spacing, font-feature-settings はすべて normal
```
