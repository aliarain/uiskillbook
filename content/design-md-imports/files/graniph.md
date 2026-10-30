# DESIGN.md — graniph (グラニフ)

> graniph（https://www.graniph.com/）のデザイン仕様書。
> 実サイトの computed style に基づく。CSS Custom Properties は最小限の使用。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: アート・イラスト・キャラクターとのコラボレーションを前面に出した、遊び心のある EC サイト。商品ビジュアルが主役のギャラリー型レイアウト
- **密度**: 商品画像が密に並ぶグリッドレイアウト。ヘッダーはナビゲーション情報量が多い
- **キーワード**: カラフル、ポップ、アートフル、カジュアル、親しみやすい
- **特徴**: ブランドカラーの赤 `#dc0816` をアクセントに、`#282828` ダークグレーをベースとした配色。システムフォント（ヒラギノ角ゴ）のみで構成

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Red** (`#dc0816`): CTA、プロモーションバナー、アプリ訴求。rgba(220, 8, 22)
- **Brand Red Overlay** (`rgba(220, 8, 22, 0.8)`): 半透明オーバーレイ（バッジ等）

### Neutral（ニュートラル）

- **Text Primary** (`#282828`): 本文テキスト、ロゴ
- **Text Secondary** (`#505050`): 補足テキスト、カテゴリラベル
- **Text Tertiary** (`#b4b4b4`): メタ情報、ラベル
- **Text Disabled** (`#c8c8c8`): 無効状態
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f8f8f8`): セクション背景
- **Border** (`#e8e8e8`): 区切り線
- **Dark Surface** (`#282828`): ログインボタン、フッター
- **Mid Surface** (`#505050`): アクティブタブ（性別切替等）
- **Light Border** (`#a0a0a0`): 細い区切り

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴシック（macOS / iOS）
- ヒラギノ角ゴ Pro W3（macOS レガシー）

システムフォントのみ使用。Web フォントは未使用。

### 3.2 欧文フォント

- font-family にはヒラギノ系のみ指定。欧文専用フォントの明示的指定なし
- ヒラギノ角ゴシック内蔵の欧文グリフを使用

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: "Hiragino Sans", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif;
```

**フォールバックの考え方**:
- macOS / iOS のシステムフォントのみに依存するシンプルな構成
- Windows ではブラウザの sans-serif デフォルト（メイリオ等）にフォールバック

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 2 | Hiragino Sans | 18px | 600 | normal | 0.01em | セクション見出し |
| Body | Hiragino Sans | 16px | 400 | 1.15 | 0.01em | 本文 |
| Nav Label | Hiragino Sans | 15px | 700 | 1.15 | 0.01em | カテゴリナビ |
| Sub Label | Hiragino Sans | 14px | 400 | 1.15 | 0.01em | 性別ラベル等 |
| Meta | Hiragino Sans | 12px | 700 | 1.15 | 0.01em | 補助ラベル |
| Badge | Hiragino Sans | 12px | 600 | 1.5 | 0.01em | アプリ訴求バナー |
| Small | Hiragino Sans | 11px | 700 | 35px | 0.01em | ログイン / 会員登録ボタン |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.15（16px → 18.4px）。EC サイトとして密な行間
- **見出しの行間**: normal
- **全要素の字間 (letter-spacing)**: 0.01em（0.16px / 16px）。グローバルに統一

**ガイドライン**:
- 行間が 1.15 と非常に狭いのは、EC のコンパクトな UI に最適化した設計
- letter-spacing: 0.01em はほぼゼロに近いがわずかに開けている
- 商品説明等の長文では別途行間を広げる可能性あり

### 3.6 禁則処理・改行ルール

明示的な指定なし（ブラウザデフォルトに依存）

### 3.7 OpenType 機能

- font-feature-settings は全要素 `normal`
- palt / kern は未使用

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（ログイン）**
- Background: `#282828`
- Text: `#ffffff`
- Border: 1px solid `#282828`
- Padding: 推定 8px 16px
- Border Radius: 18px
- Font Size: 11px
- Font Weight: 700

**Secondary（会員登録）**
- Background: `#ffffff`
- Text: `#282828`
- Border: 1px solid `#282828`
- Padding: 推定 8px 16px
- Border Radius: 18px
- Font Size: 11px
- Font Weight: 700

**Promo Banner CTA**
- Background: `#dc0816`
- Text: `#ffffff`
- Border: none
- Border Radius: 0px
- Font Size: 12px
- Font Weight: 600

**Tab（性別切替）**
- Active Background: `#505050`
- Active Text: `#ffffff`
- Inactive Background: transparent
- Inactive Text: `#282828`
- Border Radius: 4px
- Font Size: 推定 14px

### Cards

**Product Card**
- Background: transparent
- Border: none
- Border Radius: 0px（商品画像はシャープエッジ）
- Padding: 0
- Shadow: none

### Inputs

明示的な input 要素の実測データなし（検索バーはヘッダー内に存在）

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

- Max Width: 推定 1200px
- ヘッダー: 全幅固定

### Grid

- 商品一覧: 4カラムグリッド（デスクトップ）
- カテゴリ: 横スクロール

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 商品カード、ほとんどの要素 |
| 1 (Overlay) | `rgba(0,0,0,0.2)` background | ドロップダウン背景 |
| 2 (Modal) | `rgba(40,40,40,0.8)` background | ナビモーダルオーバーレイ |
| 3 (Promo) | `rgba(220,8,22,0.8)` background | セール / プロモバッジ |

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドレッド `#dc0816` はプロモーションと CTA アクセントに限定して使用する
- 商品画像を主役にし、UI はモノトーン（`#282828` / `#505050` / `#ffffff`）で控えめに
- ボタンは角丸 18px のコンパクトなサイズで統一する
- システムフォント（ヒラギノ角ゴ）のみで構成する
- 行間は EC コンテンツでは 1.15 のコンパクトさを維持する

### Don't（禁止）

- ブランドレッドを広い面積に使わない（バナー・バッジのアクセントのみ）
- Web フォントを追加しない（システムフォント統一の設計）
- 商品カードにシャドウや太いボーダーを加えない（フラットでクリーン）
- 本文テキストに `#000000` 純黒を使わない（`#282828` ダークグレーを使用）
- 複数のアクセントカラーを混在させない（赤 + モノトーンで統一）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 2カラム商品グリッド |
| Tablet | ≤ 1024px | 3カラム商品グリッド |
| Desktop | > 1024px | 4カラム商品グリッド |

### タッチターゲット

- ボタン: 高さ 35px（line-height 35px）
- タブ: 推定 44px 以上

### フォントサイズの調整

- モバイルでも本文 16px を維持（可読性確保）
- ナビゲーションはハンバーガーメニューに切替

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #dc0816 (red)
Text Color: #282828
Background: #ffffff
Font: "Hiragino Sans", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif
Body Size: 16px
Line Height: 1.15
Letter Spacing: 0.01em
Button Radius: 18px
```

### プロンプト例

```
graniph のデザインシステムに従って、商品一覧ページを作成してください。
- 背景色: #ffffff
- テキスト: #282828
- フォント: "Hiragino Sans" 系システムフォント
- 商品カード: フラット、シャドウなし、4カラムグリッド
- CTA: #dc0816 の赤、ログイン系は #282828 + 角丸 18px
- 行間: line-height 1.15（コンパクト EC スタイル）
```
