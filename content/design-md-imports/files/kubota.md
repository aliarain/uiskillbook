# DESIGN.md — KUBOTA

> クボタ（https://www.kubota.co.jp/）のデザイン仕様書。
> 実サイトの computed style に基づく（2026-05-23 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 信頼感と堅実さを伝えるコーポレートサイト。グローバル農業・水環境インフラ企業として、テクノロジーと自然の調和を表現するデザイン
- **密度**: 画像主体のゆったりしたレイアウト。ヒーロー領域に大きなビジュアルと半透明ティールオーバーレイを重ねるのが特徴的
- **キーワード**: 信頼、堅実、グローバル、テクノロジー、サステナブル
- **特徴**: ブランドカラーのティール（`#008486`）がリンク・フッター・CTA・アイコンに一貫して使われ、強いブランド認知を形成。ヒーロー画像にティールの半透明オーバーレイ（`rgba(0,132,134,0.86)`）を重ねるのがクボタの視覚的シグネチャー

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Kubota Teal** (`#008486`): ブランドアイデンティティカラー。CTA ボタン、リンク、フッター背景、メニューテキスト、アイコンに使用
- **Kubota Teal Light** (`#339d9e`): ティールの明るいバリエーション。微妙なアクセントに使用

### Accent（アクセント）

- **Light Blue** (`#cddcf2`): 淡いブルーアクセント。セクション背景やハイライトに使用

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Secondary** (`#666666`): 補足テキスト、ユーティリティテキスト
- **Text on Teal** (`#ffffff`): ティール背景上のテキスト
- **Background** (`#ffffff`): ページ背景
- **Surface Light** (`#f1f1f1`): ナビゲーションサブパネルの背景
- **Surface Alt** (`#f5f5f5`): 代替セクション背景
- **Surface Medium** (`#dedede`): 戻るボタンの背景
- **Border Cookie** (`#d1d1d1`): Cookie フィルターのボーダー

### Overlay（オーバーレイ）

- **Teal Overlay** (`rgba(0,132,134,0.86)`): ヒーロー画像上の半透明ティール。「イノベーション」「サステナビリティ」等のフォーカスエリアに使用

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴシック（macOS / iOS）
- ヒラギノ角ゴ Pro（macOS レガシー）
- メイリオ（Windows）

### 3.2 欧文フォント

- **サンセリフ（メイン）**: Arial
- **サンセリフ（アクセント）**: Helvetica Neue, Helvetica — 「Japan」ラベルやメニューボタン等、欧文のみの要素に使用

### 3.3 font-family 指定

```css
/* メイン（和欧混植） */
font-family: "Hiragino Sans", "Hiragino Kaku Gothic Pro", Meiryo, Arial, sans-serif;

/* 欧文アクセント（メニューボタン、ラベル等） */
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- 和文フォント（ヒラギノ）を先頭に指定し、日本語の表示品質を優先
- macOS 向けに Hiragino Sans（新名称）→ Hiragino Kaku Gothic Pro（旧名称）の順
- Windows フォールバックとしてメイリオ
- 欧文のみの UI 要素（メニューボタン等）には Helvetica Neue スタックを別途使用
- ヒラギノの指定は **Pro**（ProN ではない）

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値（2026-05-23 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 | Hiragino Sans | 20px | 400 | 34px (×1.7) | 0.03em | ページ見出し |
| H2 Section | Hiragino Sans | 15px | 400 | 25.5px (×1.7) | 0.03em | セクション見出し（"Highlight Topics"） |
| H2 Focus | Hiragino Sans | 34px | 400 | 47.6px (×1.4) | — | ヒーロー上の大見出し（白文字） |
| H3 Card | Hiragino Sans | 18px | 400 | 25.2px (×1.4) | 0.03em | 事業カード見出し（"農業ソリューション"） |
| Nav Heading | Hiragino Sans | 18px | 400 | 25.2px (×1.4) | 0.03em | ナビ見出し（色: `#008486`） |
| Nav Sub | Hiragino Sans | 14px | 400 | 19.6px (×1.4) | 0.03em | ナビサブ見出し |
| Nav Bold | Hiragino Sans | 14px | 700 | 19.6px (×1.4) | 0.03em | ナビ内 span 見出し |
| Body | Hiragino Sans | 10px (base) | 400 | 17px (×1.7) | — | body 基準サイズ（rem でスケール） |
| Utility | Hiragino Sans | 14px | 400 | — | — | 補足テキスト（色: `#666666`） |
| Menu Button | Helvetica Neue | 14px | 700 | — | — | ハンバーガーメニュー（色: `#008486`） |
| Cookie Button | Hiragino Sans | 14.4px | 700 | — | — | Cookie 同意ボタン |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- body: `1.7`（17px / 10px base）
- H1: `1.7`（34px / 20px）
- H2 セクション: `1.7`（25.5px / 15px）
- H2 フォーカス: `1.4`（47.6px / 34px）
- H3 カード: `1.4`（25.2px / 18px）
- ナビゲーション: `1.4`（19.6px / 14px, 25.2px / 18px）

**字間 (letter-spacing)** — 実測値:
- 多くの要素: `0.03em`（0.42〜0.54px）— **グローバルに近い適用**
- H2 フォーカス（ヒーロー上）: なし

**ガイドライン**:
- `letter-spacing: 0.03em` はクボタ全体で一貫して使用される。note の見出し専用 `0.04em` とは異なり、**ほぼグローバル適用**
- line-height は用途で使い分け: 本文系は `1.7`、見出し・カード系は `1.4`
- ウェイトは全体的に `400`（regular）が基調。太字は限定的（ナビ内 span、メニューボタン、Cookie ボタンのみ）

### 3.6 禁則処理・改行ルール

```css
/* 標準的な日本語禁則処理 */
word-break: break-all;
overflow-wrap: break-word;
```

- コーポレートサイトとして標準的な禁則処理を適用

### 3.7 OpenType 機能

```css
/* palt は使用していない */
font-feature-settings: normal;
```

- **palt 不使用**: プロポーショナル字詰めは適用されていない
- 日本語組版は等幅ベースで、`letter-spacing: 0.03em` のみで字間を調整

### 3.8 縦書き

- 該当なし。クボタは横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（Cookie 同意等の主要 CTA）**
- Background: `#008486`
- Text: `#ffffff`
- Border: `1px solid #008486`
- Border Radius: `2px`
- Font Size: 14.4px
- Font Weight: 700

**Secondary（Cookie 拒否等のアウトラインボタン）**
- Background: `transparent`
- Text: `#008486`
- Border: `1px solid #008486`
- Border Radius: `2px`

**Back Button（戻るボタン）**
- Background: `#dedede`
- Text: `#008486`
- Border Radius: `0px`

**Navigation Dropdown（ナビドロップダウン）**
- Background: `transparent`
- Border: `1px solid transparent`
- Border Radius: `0px`
- Padding: 11px 14px

**Hamburger Menu**
- Font Family: `"Helvetica Neue", Helvetica, Arial, sans-serif`
- Font Weight: 700
- Color: `#008486`
- ティールのアイコンバーを使用

### Inputs

**Search（検索）**
- Font Size: 26px
- Background: `transparent`
- Border: none
- Border Radius: `0px`
- Padding: 0px 14px

**Cookie Filter**
- Border Radius: `50px`（ピル型）
- Border: `1px solid #d1d1d1`

### Cards（事業カード）

- ヒーロー画像にティールオーバーレイ（`rgba(0,132,134,0.86)`）を重ねる構成
- テキストは白（`#ffffff`）
- 見出し: 18px / weight 400 / line-height 1.4

### Navigation

- Background: `#ffffff`
- サブパネル Background: `#f1f1f1`
- 見出し色: `#008486`（ティール）
- テキスト色: `#333333`

### Footer

- Background: `#008486`（Kubota Teal）
- Text: `#ffffff`

---

## 5. Layout Principles

### Spacing Scale

- コーポレートサイトとして標準的な余白設計
- ナビゲーションアイテムの padding: 11px 14px

### Container

- フルワイドのヒーローセクションとコンテンツ幅の組み合わせ

### Grid

- 事業カードは複数カラムのグリッドレイアウト
- レスポンシブに応じてカラム数を調整

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 基本的にフラットなデザイン |
| Overlay | `rgba(0,132,134,0.86)` の面 | ヒーロー画像上のティールオーバーレイ |

- クボタのサイトはシャドウよりも**色面のオーバーレイ**で奥行きを表現する
- ドロップシャドウの使用は最小限。ナビゲーションドロップダウンにわずかなシャドウがある程度
- ヒーロー領域のティールオーバーレイ（opacity 0.86）がデザイン上の最大の深度表現

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラー `#008486` をリンク、CTA、フッター、アイコンに一貫して使う
- ヒーロー画像には `rgba(0,132,134,0.86)` のティールオーバーレイを重ね、ブランドらしさを出す
- テキスト色は `#333333` を使い、純粋な `#000000` を避ける
- `letter-spacing: 0.03em` をグローバルに適用する（クボタの字間の特徴）
- line-height は本文系 `1.7`、見出し・カード系 `1.4` で使い分ける
- ボタンの角丸は `2px` の微角丸を基調とする（ピル型ではない）
- フォントウェイトは `400` を基調とし、太字は限定的に使う
- フッターはティールベタ塗りに白文字で統一する

### Don't（禁止）

- `font-feature-settings: "palt"` を適用しない（クボタは palt 不使用）
- ブランドティール `#008486` の代わりに一般的な青系色を使わない（ティールとブルーは異なる）
- ボタンに大きな角丸（8px 以上）やピル型（999px）を使わない（クボタは `0〜2px` の直線的なデザイン）
- 見出しに太字（700）を多用しない（クボタは `400` regular が基調）
- ヒーローのティールオーバーレイを省略しない（ブランドの視覚的シグネチャー）
- `letter-spacing: 0.04em` 以上にしない（クボタは `0.03em` で統一）
- 和文フォントに Noto Sans JP を先頭指定しない（クボタはヒラギノ優先）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト。ハンバーガーメニュー表示 |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト。フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）
- ナビゲーションアイテム: padding 11px 14px で十分なタップ領域を確保

### フォントサイズの調整

- body base は `10px` で rem スケールを使用
- モバイルでは見出しサイズをデスクトップの 70〜80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #008486（Kubota Teal）
Brand Color Light: #339d9e
Accent Blue: #cddcf2
Text Primary: #333333
Text Secondary: #666666
Background: #ffffff
Surface Light: #f1f1f1
Surface Medium: #dedede
Footer Background: #008486
Hero Overlay: rgba(0,132,134,0.86)

Main Font: "Hiragino Sans", "Hiragino Kaku Gothic Pro", Meiryo, Arial, sans-serif
Accent Font: "Helvetica Neue", Helvetica, Arial, sans-serif

Body Line Height: 1.7
Heading Line Height: 1.4
Letter Spacing: 0.03em（グローバル）
Font Feature: palt なし
Button Radius: 2px
Font Weight: 400 基調
```

### プロンプト例

```
クボタのデザインに従って、事業紹介カードのセクションを作成してください。
- フォント: "Hiragino Sans", "Hiragino Kaku Gothic Pro", Meiryo, Arial, sans-serif
- テキスト色: #333333（純粋な黒は使わない）
- ブランドカラー: #008486（リンク、CTA、フッター）
- 背景: #ffffff
- カード: ヒーロー画像に rgba(0,132,134,0.86) のティールオーバーレイを重ねる
- カード見出し: 18px, weight 400, line-height 1.4, letter-spacing 0.03em, 白文字
- ボタン: bg #008486, text white, border-radius 2px, weight 700
- letter-spacing: 0.03em をグローバルに適用
- palt は使用しない
```
