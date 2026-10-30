# DESIGN.md — クラシル（kurashiru）

> クラシル（https://www.kurashiru.com/）のデザイン仕様書。
> dely株式会社が運営する日本最大級のレシピ動画プラットフォーム。「料理レシピ動画サービス」として月間利用者数は国内トップクラス。
> 実サイトの computed style 実測（2026-05-24 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: システムフォントスタックとニュートラルグレーを基調にした**高速表示・実用重視の UI**。装飾を排し、レシピ動画サムネイルと写真がコンテンツの主役
- **密度**: カード型グリッドでレシピを高密度に配置。テキストはコンパクト（11–17px）で情報密度は高め
- **キーワード**: システムフォント、ニュートラルグレー、コーラルアクセント、動画サムネイル主体、実用的 UI
- **特徴**:
  - **ブランドカラーはコーラル `#f3765e`**。検索ボタンやアプリアイコンで使用されるが、Web では控えめ
  - **テキストカラーは純黒 `#000000`**（多くの日本語サービスが避ける純黒を採用）
  - **システムフォントスタック**を採用: `-apple-system, system-ui, Segoe UI, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif`。Web フォントを読み込まないことでパフォーマンスを最優先
  - タグボタン（「時短」「簡単」等）は `border-radius: 3px` の角丸タグスタイル
  - ログインボタンは `border-radius: 30px` のピル型、黒背景
  - ダークモード非対応
  - CSS Custom Properties なし（静的にスタイル定義）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Coral** (`#f3765e`): ブランドカラー。検索ボタン、アプリアイコン、一部のアクセント要素。Web では控えめに使用

### CTA / Buttons

- **Login Button**: 背景 `#000000` / テキスト `#000000`（推定 `#ffffff`）/ radius `30px`（pill）
- **Tag Button**: 背景 `#ededed` / テキスト `#000000` / radius `3px` / padding `8px`
- **Recipe Card**: 背景 transparent / radius `8px` / 画像サムネイル主体

### Neutral

| Token | hex | 役割 |
|-------|-----|------|
| Black | `#000000` | 本文テキスト・見出し |
| Dark Gray | `#b2b2b2` | フッターラベル・無効テキスト |
| Medium Gray | `#cccccc` | 画像プレースホルダー |
| Tag Gray | `#ededed` | タグボタン背景 |
| Light Gray | `#eeeeee` | ヒーローエリア背景・区切り線 |
| Pale Gray | `#efefef` | セクション背景 |
| White | `#ffffff` | ページ背景・カード面 |
| Overlay | `rgba(0, 0, 0, 0.07)` | 半透明オーバーレイ |

### Semantic（実測未確認・推奨値）

- **Danger**: `#dc2626`
- **Success**: `#16a34a`
- **Warning**: `#d97706`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **システムフォント**を使用。ヒラギノ角ゴ ProN / Hiragino Sans を優先
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: システムフォント（`-apple-system`, `system-ui`, `Segoe UI`）を最優先
- 専用の欧文 Web フォントは不使用

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: -apple-system, "system-ui", "Segoe UI",
  "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文システムフォントを先頭に配置**: Apple / Windows のシステム UI フォントで欧文部分を描画し、和文はヒラギノ / メイリオにフォールバックする設計
- Web フォントを一切読み込まないことで、初回描画を高速化
- パフォーマンス重視の設計思想がフォント選定にも表れている

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 (Logo) | System | 16px | 700 | 1.0 | normal | ロゴ部分 |
| H2 Section | System | 24px | 700 | 1.3 | normal | 「人気キーワードのレシピリスト」等 |
| H2 Video Title | System | 17px | 700 | 1.3 | 0.15px | 動画タイトル |
| H2 Aside | System | 20px | 700 | 1.3 | 0.15px | サイドバー見出し |
| H3 Card Title | System | 14px | 700 | 1.4 | 0.1px | レシピカードタイトル |
| Body | System | 14px | 400 | 1.5 | normal | 本文 |
| Caption | System | 11px | 700 | 1.0–1.45 | normal | ロゴ脇・フッター |
| Small | System | 10px | 400 | 1.3 | normal | 注釈 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5（16px ベース）
- **見出しの行間**: 1.3（H2: 31.2px / 24px）
- **本文の字間 (letter-spacing)**: normal
- **見出しの字間**: 0.15px（約 0.006–0.009em）— ほぼ normal と同等

### 3.6 禁則処理・改行ルール

```css
word-break: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt`・`kern` ともに不使用
- システムフォントの既定レンダリングに任せる方針

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Login Button（ピル型）**
- Background: `#000000`
- Text: `#ffffff`（推定）
- Padding: `1px 6px`
- Border Radius: `30px`
- Font Size: 14px
- Font Weight: 600

**Tag Button（タグ型）**
- Background: `#ededed`
- Text: `#000000`
- Padding: `8px`
- Border Radius: `3px`
- Font Size: 14px
- Font Weight: 400

### Recipe Cards

- Background: transparent
- Border Radius: `8px`（サムネイル画像）
- Shadow: なし
- サムネイル画像 + タイトル + 調理時間の構成

### Inputs

- 実測データなし（トップページの検索はヘッダー埋め込み）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 16px

### Grid

- レシピカード: 3〜4 カラムグリッド
- サイドバー: 右寄せ固定幅

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード — フラットデザイン |

クラシルはシャドウをほぼ使用せず、グレーの濃度差とボーダーで階層を表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- システムフォントスタックを使い、Web フォントの読み込みを避ける
- テキストカラーは `#000000`（純黒）を基本とする
- レシピカードのサムネイル画像を角丸（`8px`）にする
- タグボタンは `#ededed` 背景 + `3px` 角丸で統一する
- コンテンツ密度を高く保ち、ユーザーが素早くレシピを探せるようにする

### Don't（禁止）

- Web フォントを追加で読み込まない（パフォーマンス最優先の設計）
- コーラル `#f3765e` を広い面の背景に使わない（アクセントポイントのみ）
- 装飾的なシャドウやグラデーションを多用しない
- テキストに中間色のグレーを使いすぎない（コントラスト確保）
- 見出しに letter-spacing を広く取らない（ほぼ normal が基本）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | シングルカラム、下部タブナビ |
| Desktop | > 768px | マルチカラム + サイドバー |

### タッチターゲット

- 最小サイズ: 44px × 44px
- タグボタンの padding 8px で十分なタップ領域

### フォントサイズの調整

- モバイルでは H2 を 18–20px に縮小
- 本文 14px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #f3765e
Text Color: #000000
Background: #ffffff
Font: -apple-system, "system-ui", "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
Body Size: 14px
Line Height: 1.5
Heading Weight: 700
```

### プロンプト例

```
クラシルのデザインシステムに従って、レシピ検索結果ページを作成してください。
- テキスト色: #000000
- 背景: #ffffff
- フォント: -apple-system, "system-ui", "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif
- 見出し: 24px / weight 700 / line-height 1.3
- 本文: 14px / weight 400 / line-height 1.5
- レシピカードサムネイル: border-radius 8px
- タグボタン: 背景 #ededed / テキスト #000000 / border-radius 3px
```
