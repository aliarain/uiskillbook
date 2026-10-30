# DESIGN.md — Toshiba

> 東芝グローバルサイト（https://www.global.toshiba/jp.html）のデザイン仕様書。
> 実サイトの computed style に基づく。CSS Custom Properties は未使用。
> AEM（Adobe Experience Manager）ベースの静的コーポレートサイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: グローバル企業の信頼感を表現する、極めてシンプルで機能的なコーポレートサイト。装飾を排し、情報を整然と並べる
- **密度**: 標準的な情報密度。カード型レイアウトで事業領域を俯瞰できる構成
- **キーワード**: クリーン、テクノロジー、グローバル、フラット、コーポレート
- **特徴**: 純粋な黒 `#000000` をテキスト色に使用（多くの日本語サイトが `#333` 等の柔らかい黒を使う中、硬質な印象を出している）。影・角丸をほぼ使わないフラットデザイン。フッターにブランドブルーを大面積で使用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Toshiba Blue** (`#0064d2`): ブランドカラー。CTA ボタン、リンク色、フッター背景に使用。rgb(0, 100, 210)

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト。純粋な黒
- **Text on Blue** (`#eeeeee`): ブルー背景上のテキスト。rgb(238, 238, 238)
- **Text on Blue (white)** (`#ffffff`): ブルー背景上の見出しテキスト
- **Link** (`#0064d2`): テキストリンク。ブランドブルーと同色
- **Border** (`#cccccc`): フォーム要素のボーダー。rgb(204, 204, 204)
- **Border Light** (`#dddddd`): 検索入力欄のボーダー。rgb(221, 221, 221)

### Surface（面の色）

- **Background** (`#ffffff`): ページ背景。白
- **Surface Gray** (`#e7e7e8`): セクション背景。グループ企業一覧等に使用。rgb(231, 231, 232)
- **Surface Dark** (`#505054`): ダークセクション背景。事業セグメントカードに使用。rgb(80, 80, 84)
- **Surface Blue** (`#0064d2`): フッター背景、CTAセクション。ブランドブルー

### Accent

- **Light Blue** (`#0092ef`): 一部のインタラクティブ要素。rgb(0, 146, 239)

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- メイリオ（Windows 優先）
- ヒラギノ角ゴ ProN（macOS）
- ヒラギノ角ゴシック（macOS 新名称）

**明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: Arial（先頭）、Helvetica Neue、Helvetica
- **セリフ**: 使用なし
- **等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 全体（body / 見出し / 本文共通） */
font-family: Arial, "Helvetica Neue", Helvetica, Meiryo,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Arial）を先頭に配置。グローバル企業として英語圏の表示品質を優先
- Helvetica Neue → Helvetica と macOS 欧文フォントを続ける
- 和文フォントはメイリオ（Windows）→ ヒラギノ角ゴ ProN（macOS）の順
- Hiragino Sans（macOS 10.11+）をフォールバック末尾に追加

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Heading 1 | 48px | 700 | 72px (×1.5) | normal | ページタイトル「製品・サービス」等 |
| Heading 2 | 30px | 700 | 45px (×1.5) | normal | セクション見出し「スポットライト」等 |
| Heading 3 | 24px | 700 | 36px (×1.5) | normal | サブセクション見出し |
| Body | 16px | 400 | 24px (×1.5) | normal | 本文テキスト |
| Nav Link | 16px | 400 | 24px (×1.5) | normal | グローバルナビゲーション |
| Small / Nav Sub | 14px | 400 | 21px (×1.5) | normal | ナビサブメニュー、ラベル |
| Breadcrumb | 12px | 400 | 18px (×1.5) | normal | パンくずリスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- すべての階層で一貫して **×1.5**
- h1: 72px (48px × 1.5)
- h2: 45px (30px × 1.5)
- h3: 36px (24px × 1.5)
- body/p: 24px (16px × 1.5)
- small: 21px (14px × 1.5)
- breadcrumb: 18px (12px × 1.5)

**字間 (letter-spacing)** — 実測値:
- すべての要素で `normal`。letter-spacing の明示的な指定なし

**ガイドライン**:
- line-height は全階層で統一的に 1.5。日本語サイトとしてはやや控えめだが、コーポレートサイトとして情報密度を維持
- letter-spacing はどの要素にも適用されていない。字詰め不要のシンプルな方針

### 3.6 禁則処理・改行ルール

```css
/* 実測値に基づく — 特別な禁則設定なし */
word-break: normal;
overflow-wrap: normal;
```

- 特別な禁則処理やワードラップの設定は確認されなかった
- AEM のデフォルト設定に依存している

### 3.7 OpenType 機能

```css
/* 全要素 */
font-feature-settings: normal;
```

- palt、kern ともに適用されていない
- 全要素で `font-feature-settings: normal`。プロポーショナル字詰めは使用しない方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Search Button（検索）**
- Background: `#0064d2`
- Text: `#eeeeee`
- Padding: 0px 12px
- Border Radius: 3px
- Border: none
- Font Size: 16px
- Font Family: Arial（単独指定）

**Accordion Button（製品カテゴリ）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: 15px 9px 15px 0px
- Border Radius: 0px
- Border: none
- Font Size: 13.3px（ブラウザデフォルト）

### Inputs

**Search Input（ヘッダー内）**
- Background: `#ffffff`
- Border: none
- Font Size: 14px
- Font Family: Arial（単独指定）

**Search Input（ページ内）**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Padding: 8px
- Font Size: 16px

### Select

**Document Type Select**
- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border Radius: 3px 0px 0px 3px（左側のみ角丸、検索ボタンと連結）
- Padding: 8px 24px 8px 8px

### Cards

- Background: `#ffffff` または `#e7e7e8`（グレー面）
- Border: なし（ボーダーレス）
- Border Radius: 0px（角丸なし）
- Shadow: なし（フラットデザイン）

### Navigation

- Background: `#ffffff`
- Text: `#000000`（16px）
- Sub Text: `#000000`（14px）

### Footer

- Background: `#0064d2`（ブランドブルー）
- Text: `#000000`
- 全幅表示（`tgw-width-full`）

---

## 5. Layout Principles

### Spacing

- 本文段落の下余白: 15px（`padding: 0px 0px 15px`）
- ナビゲーション項目のパディング: 0px 10px
- アコーディオンボタンのパディング: 15px 9px

### Container

- コンテンツは中央揃え
- AEM のグリッドシステムに基づく

### Grid

- カード型レイアウトで事業領域を表示
- 2〜3カラムのフレキシブルグリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

- **完全なフラットデザイン**。box-shadow はどの要素にも適用されていない
- カード、ボタン、ナビゲーションすべてが影なし
- 深度の表現は色の違い（白/グレー/ダークグレー/ブルー）のみで行う

---

## 7. Do's and Don'ts

### Do（推奨）

- font-family は Arial を先頭に置く（グローバルサイトの方針）
- テキスト色には純粋な `#000000` を使用する（東芝のコーポレートサイトはこの方針）
- すべての line-height を 1.5 で統一する
- フラットデザインを徹底する（影・角丸を極力使わない）
- フッターにはブランドブルー `#0064d2` の背景を使用する
- ブルー背景上のテキストは `#eeeeee` または `#ffffff` を使用する
- ダークセクションには `#505054` を使用し、見出しは白テキスト

### Don't（禁止）

- ブランドブルー `#0064d2` をテキスト色にしない（リンク以外）
- 和文フォントを font-family の先頭に置かない（グローバルサイトでは Arial が先頭）
- 大きな角丸（8px 以上）を使わない（最大 3px、検索ボタンのみ）
- box-shadow でカードに影を付けない（フラットデザインの方針に反する）
- letter-spacing や palt を適用しない（実サイトで一切使われていない）
- グレー面の背景色を `#e7e7e8` 以外にしない
- font-feature-settings を変更しない（normal のまま）

---

## 8. Responsive Behavior

### Breakpoints

- モバイルナビゲーション（`navigation-sp`）とデスクトップナビゲーション（`global-navigation-pc`）の切り替えあり
- 詳細なブレークポイント値は AEM テーマに依存

### タッチターゲット

- ハンバーガーメニューボタンあり（モバイル向け）
- アコーディオンボタン: パディング 15px で十分なタッチ領域確保

### フォントサイズの調整

- モバイルとデスクトップでフォントサイズの大きな変更は確認されなかった
- 同一のフォントスタックを使用

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #0064d2 (Toshiba Blue)
Text Color: #000000 (純粋な黒)
Text on Blue: #eeeeee
Background: #ffffff
Surface Gray: #e7e7e8
Surface Dark: #505054
Footer Background: #0064d2
Link Color: #0064d2
Border: #cccccc
Font: Arial, "Helvetica Neue", Helvetica, Meiryo,
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
Body Size: 16px / line-height: 1.5 / letter-spacing: normal
H1: 48px / 700, H2: 30px / 700, H3: 24px / 700
palt: なし / letter-spacing: なし（全要素 normal）
Border Radius: 最大 3px（検索ボタンのみ）
Shadow: なし（完全フラット）
```

### プロンプト例

```
東芝のデザインに従って、製品一覧ページを作成してください。
- フォント: Arial, "Helvetica Neue", Helvetica, Meiryo,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif
- テキスト色: #000000（純粋な黒）
- ブランドブルー: #0064d2（CTA、リンク、フッター背景）
- 背景: #ffffff、グレーセクション: #e7e7e8
- ダークセクション: #505054（白テキスト）
- フッター: #0064d2 背景
- 全 line-height: 1.5、letter-spacing: normal
- フラットデザイン: 影なし、角丸なし（検索ボタンのみ 3px）
- palt なし、font-feature-settings: normal
```
