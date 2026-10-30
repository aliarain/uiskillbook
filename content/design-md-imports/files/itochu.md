# DESIGN.md — ITOCHU Corporation (itochu.co.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 取得日: 2026-05-22 / 出典: https://www.itochu.co.jp/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 伝統的コーポレートサイト。白背景に濃紺ブルーのブランドカラーを配し、セリフ書体（PT Serif）の見出しで格調と信頼感を演出する
- **密度**: 情報密度は中程度。ニュース・IR・事業紹介が整然と並ぶグリッドレイアウト
- **キーワード**: 格調、信頼、クラシカル、セリフコントラスト、濃紺ブルー

特徴:
- 見出しに **PT Serif**（欧文セリフ）を使用し、ゴシック体のボディとの書体コントラストで重厚感を出す
- CTAボタンは黒背景（`#000000`）で角丸なし（radius: 0px） — 日本の大手企業サイトとしては珍しい
- `palt` や `letter-spacing` によるプロポーショナル字詰めは使用していない
- CSS Custom Properties は使用されていない（クラシックなCSS設計）

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **ITOCHU Blue** (`#003da5`): コーポレートブルー。ナビゲーション、フッターリンク、ラベル見出しに使用
- **ITOCHU Blue Dark** (`#17448a`): Cookie同意ボタン、Corporate Brandingバッジ
- **Search Blue** (`#003391`): 検索ボタン背景

### Accent（アクセント）

- **Link Blue** (`#0a5fbe`): テキストリンク色
- **New Badge Red** (`#f75e5e`): NEWバッジ・注目表示
- **Accent Cyan** (`#7dd7e3`): 「適時開示」等の特殊ラベル

### Neutral（ニュートラル）

- **Text Primary** (`#444444`): 本文テキスト
- **Text Secondary** (`#555555`): 補足テキスト
- **Background** (`#ffffff`): ページ背景（白）
- **Section Gray** (`#eeeeee`): NEWS・Topicsセクション背景
- **Utility Gray** (`#f0f2f5`): ユーティリティボタン背景
- **Divider Gray** (`#6b7789`): 事業セクション分割線・カテゴリラベル背景
- **Dark Navy** (`#07112c`): フッター背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: メイリオ（Meiryo）、ヒラギノ角ゴ Pro W3（Hiragino Kaku Gothic Pro）
- Windows環境ではメイリオが優先、macOSではヒラギノ角ゴが使用される
- 明朝体は使用していない

> **preview.html の注記**: メイリオはシステムフォントのためWebでの表示確認時に環境差が出る。preview.html では Google Fonts の **Noto Sans JP** をフォールバック先頭に追加して表示を安定させている

### 3.2 欧文フォント

- **セリフ（見出し専用）**: **PT Serif** (Google Fonts) — セクション見出し（h2）に使用。ゴシック体ボディとの書体コントラストが最大の特徴
- **サンセリフ（ラベル専用）**: **Roboto** (Google Fonts) — 「CONTENTS」等の英字ラベルに使用
- **サンセリフ（本文内）**: Myriad Pro, Myriad, Arial — font-family チェーン内で和文フォントの後に指定
- **サンセリフ（言語切替）**: Verdana — EN/CN 切替リンク用

### 3.3 font-family 指定

```css
/* 本文（グローバル） */
font-family: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Myriad Pro", Myriad, Arial, sans-serif;

/* セクション見出し（h2 メイン） */
font-family: "PT Serif", serif;

/* 英字ラベル（CONTENTS 等） */
font-family: Roboto, sans-serif;

/* 言語切替 */
font-family: Verdana, sans-serif;
```

**フォールバックの考え方**:
- 和文フォント（メイリオ / ヒラギノ角ゴ）を先頭に配置。日本語表示品質を最優先
- 欧文は Myriad Pro → Arial のフォールバック。Myriad Pro は Adobe 系環境向け
- 見出しのみ PT Serif でセリフ書体に切替。英数字の見出しに格調を与える

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Page Title | Body stack | 40px | 400 | 1.2 | normal | h1 ページタイトル |
| Section Heading | PT Serif | 26px | 700 | 1.34 | 0.1em | h2 セクション見出し |
| Sub Heading | Body stack | 28px | 400 | 1.2 | normal | h2 サブページ見出し |
| Content Heading | Body stack | 25px | 700 | 1.34 | 0.1em | h2 コンテンツ内見出し |
| Label (EN) | Roboto | 16px | 600 | 1.67 | 0.1em | CONTENTS等の英字ラベル。色は `#003da5` |
| Nav Mega Title | Body stack | 30px | 700 | 1.2 | 0.1em | メガメニュー内タイトル（白文字） |
| Body | Body stack | 15px | 400 | 1.67 | normal | 本文テキスト |
| Date | Body stack | 14px | 400 | 1.43 | normal | 日付・タイムスタンプ |
| Small/Label | Body stack | 12px | 700 | 1.67 | normal | バッジ・小ラベル |
| Nav Small | Body stack | 15px | 400 | 1.33 | normal | ナビゲーションリンク |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.67（15px本文に対して25.05px）
- **見出しの行間**: 1.2〜1.34（セリフ見出しは1.34とやや広め）
- **本文の字間 (letter-spacing)**: normal（字詰めなし）
- **見出しの字間**: 0.1em（PT Serif見出し・Robotラベルで使用。`2.6px / 26px = 0.1em`）

**ガイドライン**:
- 本文は letter-spacing: normal で、字詰めを行っていない
- 見出し（特にセリフ体）には 0.1em の広めの字間を設定し、格調と可読性を確保
- line-height 1.67 は日本語本文として適切な行間

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

クラシックなコーポレートサイトのため、禁則処理は標準的な設定。

### 3.7 OpenType 機能

```css
/* font-feature-settings は使用されていない */
/* palt: なし — プロポーショナル字詰めは適用していない */
```

- `palt` は見出し・本文ともに使用していない
- メイリオ自体がプロポーショナルメトリクスを内包しているため、追加の字詰めは不要という設計方針

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（黒背景）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 18px 8.8px 16px
- Border Radius: 0px（角丸なし — シャープな印象）
- Font Size: 15px
- Font Weight: 400
- 用途: 「一覧を見る」「事業紹介トップ」等の主要遷移

**Outline（ブランドカラー）**
- Background: `transparent`
- Text: `#003da5`
- Border: 1px solid `#003da5`
- Padding: 10px 28px 10px 58px（左にアイコンスペース）
- Border Radius: 0px
- 用途: 「公式facebookページ」等の外部リンク

**Cookie同意**
- Background: `#17448a`
- Text: `#ffffff`
- Padding: 8px 16px
- Border Radius: 4px
- Font Size: 14px
- Font Weight: 600
- 用途: Cookie同意バー内ボタン

**Utility（グレー）**
- Background: `#f0f2f5`
- Text: `#555555`
- Border: 1px solid `#f0f2f5`
- Padding: 8px 16px
- Border Radius: 0px
- 用途: 「ページ印刷」等のユーティリティ操作

### Badge

**Corporate Branding**
- Background: `#17448a`
- Text: `#ffffff`
- Padding: 4.5px 7.5px
- Font Size: 15px
- Font Weight: 700

**NEW バッジ**
- Background: `#f75e5e`
- Text: `#ffffff`
- Font Size: 12px
- Font Weight: 700

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#003da5`
- Border Radius: 0px
- Padding: 8px 12px
- Font Size: 15px
- Height: 40px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Border Radius: 0px（角丸なし）
- Padding: 20px
- Shadow: なし（フラットデザイン。ホバー時に軽い影を追加する場合あり）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 1120px
- Padding (horizontal): 20px

### Grid

- Columns: 可変（ニュースは2列、事業紹介は3列等）
- Gutter: 20px〜30px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 大多数の要素。フラットデザインが基本 |
| 1 | `0 2px 4px rgba(0,0,0,0.1)` | カードホバー |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | ドロップダウン・メガメニュー |
| 3 | `0 8px 24px rgba(0,0,0,0.2)` | モーダル・ダイアログ |

伊藤忠のサイトは**フラットデザインが基本**。影の使用は控えめで、区切りはボーダーや背景色の切り替えで表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- セクション見出しには **PT Serif** を使い、本文ゴシック体との書体コントラストを維持する
- CTAボタンは **角丸なし（radius: 0px）** の黒背景で統一する
- ブランドカラー `#003da5` はリンク・ラベル・アウトラインボタンに限定し、背景面には `#17448a` を使う
- 見出しの letter-spacing は **0.1em** を確保して格調を出す
- 本文の line-height は **1.67** を維持する
- ニュースリストの日付は 14px / 400 で控えめに表示する

### Don't（禁止）

- 見出しに丸ゴシック（Rounded Gothic）や手書き風フォントを使わない
- CTAボタンに角丸（border-radius > 0）を適用しない（Cookie同意ボタンの4pxは例外）
- ブランドブルー `#003da5` をページ背景色として使わない（背景は白が原則）
- `palt`（font-feature-settings）を適用しない — メイリオの標準字幅を維持する
- テキスト色に純粋な `#000000` を使わない — 本文は `#444444`、補足は `#555555`
- PT Serif を本文テキストに使わない — 見出し専用

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ハンバーガーメニューに切替 |
| Tablet | ≤ 1024px | タブレットレイアウト。2列に縮小 |
| Desktop | > 1024px | デスクトップレイアウト。フルナビゲーション表示 |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 14〜15px、見出しはデスクトップの 70〜80% 程度に縮小
- PT Serif の見出しはモバイルで 20〜22px に調整

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #003da5
CTA Background: #000000
Text Color: #444444
Background: #ffffff
Section Background: #eeeeee
Body Font: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Myriad Pro", Myriad, Arial, sans-serif
Heading Font: "PT Serif", serif
Label Font: Roboto, sans-serif
Body Size: 15px
Line Height: 1.67
Heading Letter Spacing: 0.1em
Button Radius: 0px
```

### プロンプト例

```
伊藤忠商事のデザインシステムに従って、事業紹介一覧ページを作成してください。
- ブランドカラー: #003da5
- 本文フォント: メイリオ, Meiryo, "ヒラギノ角ゴ Pro W3", sans-serif
- 見出しフォント: "PT Serif", serif（太字 700、letter-spacing: 0.1em）
- 英字ラベル: Roboto, sans-serif（600、0.1em、色 #003da5）
- 本文: 15px / line-height: 1.67 / 色 #444444
- CTAボタン: 黒背景 #000、白文字、角丸なし
- カード: 白背景、ボーダー #eee、影なし
- セクション背景: #eeeeee
```
