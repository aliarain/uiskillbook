# DESIGN.md — Calbee（カルビー）

> Calbee 公式サイト（https://www.calbee.co.jp/）のデザイン仕様書。
> 「かっぱえびせん」「ポテトチップス」「じゃがりこ」など日本を代表するスナック菓子メーカー。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 親しみやすく明るい「食」のコーポレートサイト。強いブランドレッド (`#eb0100`) を軸に、温かみのあるベージュ面 (`#f1eee9`) と柔らかいダークグレー文字 (`#3c3c3c`) で構成。楽しさとクリーンさのバランスが取れた FMCG らしいデザイン
- **密度**: 中程度。製品情報・ニュース・企業情報が整理されたコーポレートサイト型。ヒーローは画像カルーセル、各セクションはカード型で整列
- **キーワード**: 元気、親しみやすい、カルビーレッド、温かベージュ、食品コーポレート
- **特徴**: **見出しに Google Fonts の「Sawarabi Gothic（さわらびゴシック）」を採用**。やや丸みを帯びた柔らかいゴシック体で、食品ブランドらしい親しみやすさを演出。本文は游ゴシック体で Windows Medium 対応のフォールバックチェーンを含む。カテゴリ見出し (h3) にブランドレッドを直接適用するのが特徴的。CTA は **角丸 6.4px の標準ボタン**と **角丸 48px の pill ボタン**を使い分け、いずれも `#eb0100` の塗り。テキスト色に純黒は使わず `#3c3c3c` / `#2f2f2f` のダークグレーで柔らかさを保つ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Calbee Red** (`#eb0100`): カルビーのコーポレートカラー。CTA ボタン背景、カテゴリ見出し (h3)、アクティブナビリンクに使用。サイト全体で最も視認性の高い色。背景色として 11 箇所以上で確認
- **White on Red** (`#ffffff`): ブランドレッド背景の上のテキスト色

### Neutral（ニュートラル）

- **Text Primary** (`#3c3c3c`): 本文テキスト、リード文。**純黒は使わない**（rgb(60,60,60)）
- **Text Strong** (`#2f2f2f`): 見出し (h1, h2)、製品名。本文より一段濃いが純黒ではない（rgb(47,47,47)）
- **Text on Red** (`#ffffff`): ブランドレッド背景上の白テキスト
- **Background White** (`#ffffff`): ページ標準背景
- **Surface Warm** (`#f1eee9`): 温かみのあるベージュ / オートミール色の面。セクション背景として 7 箇所以上で使用。カルビーらしい「食品の温もり」を演出する面色

### CTA / Button

- **CTA Red** (`#eb0100`): Primary CTA・Pill CTA の背景色
- **CTA Text** (`#ffffff`): CTA 上のテキスト
- **Outline White** (`#ffffff`): ダーク / レッド背景上のアウトラインボタンの枠線・テキスト

> **Note**: カルビーのカラーパレットは**非常にシンプル**。ブランドレッド (`#eb0100`) + 温かベージュ (`#f1eee9`) + ダークグレー (`#3c3c3c` / `#2f2f2f`) の 3 トーンで構成され、純黒・寒色系グレーは使わない。食品メーカーらしい暖色トーンに統一されている。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（2 系統）**:
- **Sawarabi Gothic（さわらびゴシック）**: Google Fonts のフリーゴシック体。見出し・ナビゲーション・CTA に使用。やや丸みのある字形で親しみやすい印象
- **游ゴシック体 / YuGothic**: 本文用。Windows の游ゴシック問題に対応するため「游ゴシック Medium」「Yu Gothic Medium」を含むフォールバックチェーンを採用

### 3.2 欧文フォント

- **サンセリフ**: Sawarabi Gothic および游ゴシック内蔵の欧文グリフをそのまま使用。**専用の欧文フォントは指定されていない**

### 3.3 font-family 指定

```css
/* 見出し・ナビゲーション・CTA */
font-family: "Sawarabi Gothic", sans-serif;

/* 本文・製品名・一般テキスト */
font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- **見出し系は Sawarabi Gothic 単独指定**。Google Fonts で配信されるため環境差が少ない
- **本文の游ゴシックは Windows Medium 問題に対応**。macOS では「游ゴシック体」(YuGothic) が Medium ウェイト相当で表示されるが、Windows では「游ゴシック」のデフォルトが Regular（細い）ため、「游ゴシック Medium」を先に指定して太さを揃える
- 最後に `sans-serif` で generic family を指定

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | 備考 |
|------|------|------|--------|-------------|------|
| Page Title (h1) | Sawarabi Gothic | 36px | 400 | normal | ページ最上位の見出し。色は `#2f2f2f` |
| Section Title (h2) | Sawarabi Gothic | 30px | 400 | normal | セクション見出し。色は `#2f2f2f` |
| Sub Section (h2) | Sawarabi Gothic | 26px | 400 | normal | 小さめのセクション見出し |
| Category Title (h3) | Sawarabi Gothic | 22px | 400 | normal | **ブランドレッド `#eb0100`** で表示 |
| Article Lead (p) | Sawarabi Gothic | 18px | 400 | normal | リード文・導入テキスト |
| Product Name (p) | 游ゴシック | 18px | **700** | normal | 製品名は太字。色は `#2f2f2f` |
| Body (p) | 游ゴシック | 16px | 400 | normal | 本文テキスト。色は `#3c3c3c` |
| Nav Link | Sawarabi Gothic | 16px | 400 | normal | ナビゲーション。通常 `#3c3c3c`、アクティブ `#eb0100` |
| White on Red | Sawarabi Gothic | 16px | 400 | normal | レッド背景上の白テキスト |
| Sub Nav | Sawarabi Gothic | 14px | 400 | normal | サブナビゲーション |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `normal`（ブラウザデフォルト、おおよそ 1.2）。游ゴシックのメトリクスに委ねる
- **見出しの行間**: `normal`
- **letter-spacing**: `normal`（0）。**Sawarabi Gothic・游ゴシックともに字間の追加指定なし**
- **font-feature-settings**: 特段の指定なし。**palt は不使用**

> **特徴**: カルビーは line-height も letter-spacing もフォントのデフォルト値に任せるシンプルな組版。意図的な字詰め・行間調整を行わず、フォントの素のメトリクスで組んでいる。

### 3.6 禁則処理・改行ルール

```css
/* 特別な指定は最小限。ブラウザデフォルトに準拠 */
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

Sawarabi Gothic は OpenType 機能が限定的なフリーフォントのため、palt / kern の適用はない。游ゴシックも素のメトリクスで使用。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

**Primary CTA（角丸 6.4px、ブランドレッド塗り）**
- Background: `#eb0100`
- Text: `#ffffff`
- Border: `none`
- Border Radius: `6.4px`
- Font: Sawarabi Gothic
- Font Weight: `400`
- 例: 「一覧」「もっと見る」「詳しく見る」

**Pill CTA（角丸 48px、ブランドレッド塗り）**
- Background: `#eb0100`
- Text: `#ffffff`
- Border: `none`
- Border Radius: `48px`
- Font: Sawarabi Gothic
- 例: 「アレルゲン検索」など重要なアクション。pill 形状で視認性を高める

**Outline Button（透明背景、白枠）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Border Radius: `5px`
- 例: ダーク背景・レッド背景上のフィルター操作ボタン

**Play / Pause（ユーティリティ）**
- Background: `transparent`
- Border Radius: `5px`
- 例: カルーセルのメディアコントロール

> **使い分け**: 標準的なページ内遷移 CTA は **角丸 6.4px の塗りボタン**、特に目立たせたい機能ボタン（検索等）は **角丸 48px の pill**、ダーク / レッド背景上では **白アウトライン**。3 段階の radius 戦略で情報の優先度を表現する。

### Cards

**News / Article Card**
- Background: `transparent` または `#ffffff`
- Border: なし
- Border Radius: `13px`
- 例: ニュース記事リンク、お知らせカード

**Section Card（温かベージュ面）**
- Background: `#f1eee9`
- Border: なし
- Border Radius: 0px（セクション単位のフルブリード背景として使用）

### Inputs

- サイト上のフォーム要素は限定的（アレルゲン検索等）
- Border Radius: 標準的な角丸（CTA と揃える `5px`〜`6.4px`）
- Font: Sawarabi Gothic（フォーム UI 統一）

---

## 5. Layout Principles

### Spacing Scale

実測ベースのスペーシングスケール（推定）:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコン余白、最小の隙間 |
| S | 16px | テキスト間、カード内の小余白 |
| M | 24px | カード間、本文ブロック間 |
| L | 32px | セクション内パディング |
| XL | 48px | セクション間 |
| XXL | 80px+ | ヒーローとコンテンツ間 |

### Container

- Max Width: ≈ 1200px（コンテンツエリア）
- ヒーローはフルブリード
- 本文セクションは中央寄せ

### Grid

- ヒーロー: 1 カラム（フルブリード画像カルーセル）
- 製品一覧: 3〜4 カラム（デスクトップ）
- ニュース: カード型グリッド
- セクション: 温かベージュ (`#f1eee9`) 面で区切る

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準要素（フラットデザイン基調） |
| 1 | 微小な影またはなし | カード（主に border-radius と背景色で分離） |
| 2 | `0 2px 8px rgba(0,0,0,0.1)` | ホバー時のカード、ドロップダウン |

> **特徴**: カルビーはフラットデザイン基調。影ではなく**背景色の切り替え**（白 `#ffffff` ↔ ベージュ `#f1eee9`）と**ブランドレッドのアクセント**でセクション間の奥行きを表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドレッド `#eb0100` を CTA・カテゴリ見出し・アクティブ状態に一貫して使う
- 見出しには **Sawarabi Gothic** を使い、本文は**游ゴシック**で書き分ける
- テキスト色はダークグレー (`#3c3c3c` / `#2f2f2f`) を使い、柔らかい印象を保つ
- セクション背景に温かベージュ `#f1eee9` を活用し、白一色にしない
- CTA の角丸は用途で使い分ける（標準 6.4px / pill 48px / アウトライン 5px）
- 游ゴシックの font-family は Windows Medium 対応のフルチェーンで指定する

### Don't（禁止）

- **純黒 `#000000` をテキストに使わない**（`#3c3c3c` を使う）
- **ブランドレッドを本文テキスト色に使わない**（カテゴリ見出し・アクティブリンクのみ）
- **letter-spacing / palt を追加しない**（フォントメトリクスのまま組む）
- **寒色系グレー（青みがかったグレー）を面色に使わない**（ベージュ `#f1eee9` を使う）
- **游ゴシックのフォールバックで「游ゴシック Medium」を省略しない**（Windows で細くなる）
- **Sawarabi Gothic を本文に使わない**（見出し・ナビ・CTA 専用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ハンバーガーナビ |
| Tablet | ≤ 1024px | 2 カラムグリッド |
| Desktop | > 1024px | 3〜4 カラム、フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- Pill CTA は十分な padding で確保

### フォントサイズの調整

- モバイルでは h1 (36px) → 24〜28px 程度に縮小
- 本文 16px は据え置き
- Sub Nav (14px) はモバイルで非表示またはドロワー内に格納

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color:         #eb0100 (Calbee Red)
Text Primary:        #3c3c3c
Text Strong:         #2f2f2f
Background:          #ffffff
Surface Warm:        #f1eee9 (oatmeal beige)
Heading Font:        "Sawarabi Gothic", sans-serif
Body Font:           "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif
Body Size:           16px
Line Height:         normal
Letter Spacing:      normal (no palt)
CTA Style:           #eb0100 fill — radius 6.4px (standard) / 48px (pill)
Category Heading:    h3 in #eb0100 (brand red text)
```

### プロンプト例

```
カルビーのデザインシステムに従って、製品一覧ページを作成してください。

- ブランドカラー: #eb0100 (Calbee Red)
- 見出しフォント: "Sawarabi Gothic", sans-serif / weight 400
- 本文フォント: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif
- 本文サイズ: 16px / color #3c3c3c
- 製品名: 18px / weight 700 / color #2f2f2f
- カテゴリ見出し (h3): 22px / color #eb0100 (ブランドレッド)
- セクション背景: 白 #ffffff と温かベージュ #f1eee9 を交互に
- CTA ボタン: bg #eb0100, text #ffffff, border-radius 6.4px
- 重要な検索 CTA: 同色で border-radius 48px (pill)
- 純黒は使わない。テキストは #3c3c3c / #2f2f2f
- letter-spacing / palt は使わない（フォントの素のメトリクスで組む）
```
