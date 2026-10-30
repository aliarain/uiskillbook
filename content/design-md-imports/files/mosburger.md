# DESIGN.md — MOS BURGER (mos.jp)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 温かみのある、親しみやすい、ナチュラル。日本発のプレミアムハンバーガーチェーンとして、素材感と安心感を表現
- **密度**: ゆったりとしたプロモーション型。商品写真を大きく配置し、情報量は絞り込む
- **キーワード**: 温かい、親しみやすい、ナチュラル、グリーン、フレンドリー
- **特徴**: グリーン + オレンジの暖色系デュアルブランドパレット。ピル型ボタン（radius 24px）がデザイン全体の統一要素。ライトピンクやクリームの背景で温かみを演出

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **MOS Green** (`#00a728`): メインのブランドカラー。Primary CTA（ネット注文、今すぐ注文する）に使用
- **MOS Green Dark** (`#006436`): 強調見出し、グリーン面上のテキスト
- **MOS Green Deeper** (`#004924`): より深いグリーン、ダークセクション
- **MOS Green Darkest** (`#002614`): フッター背景等の最も暗いグリーン
- **MOS Green Pale** (`#d9f2df`): 薄いグリーン背景。カテゴリ表示やアクセント面

### Secondary（セカンダリカラー）

- **MOS Orange** (`#ff7e47`): セカンダリCTA。ダウンロードボタン、会員登録ボタンに使用

### Semantic（意味的な色）

- **Danger / Warning** (`#e90000`): エラーテキスト、警告バッジ、注意喚起

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト（純黒使用）
- **Text on Green** (`#ffffff`): グリーン背景上のテキスト
- **Border** (`#dddddd`): 区切り線、入力欄の枠
- **Background** (`#ffffff`): ページ背景
- **Surface Gray** (`#f5f5f5`): セクション背景、カード面
- **Surface Pink** (`#ffebeb`): ライトピンクの温かみ背景（メニューページのフレーム等）
- **Surface Cream** (`#fffbf0`): クリーム色の温かみ背景（メニュー詳細等）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ ProN W3（macOS）、メイリオ（Windows）
- 明朝体は使用しない

### 3.2 欧文フォント

- 和文フォント内蔵の欧文グリフをそのまま使用。欧文専用フォントの指定なし

### 3.3 font-family 指定

```css
/* 全体共通 — システムフォントのみ */
font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 和文フォント名を英語表記・日本語表記の両方で指定（ブラウザ互換性確保）
- macOS はヒラギノ角ゴ ProN、Windows はメイリオにフォールバック
- Webフォントは使用しない。完全にシステムフォント依存

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | system | 36px | 400 | 1.33 | normal | セクションタイトル「おすすめ」等。ウェイト400で大きく軽やかに |
| Heading 2 (green) | system | 22px | 700 | 1.6 | normal | アプリ訴求の見出し。色 `#006436` |
| Heading 2 (standard) | system | 22px | 700 | 1.54 | normal | 会員セクション見出し |
| Heading 2 (on green) | system | 30px | 700 | 1.3 | normal | フッターヒーロー。白文字 on グリーン |
| Heading 3 (nav) | system | 14px | 700 | 1.6 | normal | ナビゲーション項目 |
| Heading 3 (section) | system | 20px | 700 | 1.65 | normal | セクション内小見出し。白文字 on グリーン |
| Body | system | 14px | 400 | 1.6 | normal | 本文テキスト |
| Body (product) | system | 14px | 700 | 1.6 | normal | 商品名。太字で区別 |
| CTA text | system | 16px | 700 | 3.0 | normal | ピルボタン内テキスト。lh 3.0 は高さ揃えのため |
| Tag / Badge | system | 13px | 400-700 | 2.15 | normal | カテゴリタグ。白文字 on グリーンピル |
| Small accent | system | 15px | 700 | 1.6 | normal | グリーンアクセントテキスト `#00a728` |
| Warning | system | 16px | 700 | 1.6 | normal | 警告テキスト `#e90000` |
| Menu tab | system | 13px | 400 | 1.38 | normal | メニューカテゴリタブ |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（14px / 22.4px）。日本語として標準的な値
- **見出しの行間**: 1.3〜1.65。見出しサイズにより変動
- **本文の字間 (letter-spacing)**: normal（0）。字間調整なし
- **見出しの字間**: normal（0）。字間調整なし

**ガイドライン**:
- letter-spacing は全階層で normal。プロポーショナル字詰めなし
- 行間は本文 1.6、見出しは 1.3〜1.65 の範囲
- ディスプレイ見出し（36px）は weight 400 で軽やかな印象

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

特別な禁則設定は検出されない。標準的なブラウザデフォルトに依存

### 3.7 OpenType 機能

```css
/* palt, kern ともに未使用 */
font-feature-settings: normal;
```

- **palt**: 未使用。本文・見出しとも字詰めなし
- **kern**: 未使用
- システムフォントのデフォルトカーニングのみ

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

全ボタンが **radius 24px のピル型**。モスバーガーのデザインを特徴づける統一要素

**Primary CTA（注文系）**
- Background: `#00a728` (MOS Green)
- Text: `#ffffff`
- Padding: 12px 24px
- Border Radius: 24px（ピル型）
- Font Size: 16px
- Font Weight: 700

**Secondary CTA（ダウンロード・登録系）**
- Background: `#ff7e47` (MOS Orange)
- Text: `#ffffff`
- Padding: 12px 24px
- Border Radius: 24px（ピル型）
- Font Size: 16px
- Font Weight: 700

**Outline（誘導系）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#dddddd`
- Padding: 12px 24px
- Border Radius: 24px（ピル型）
- Font Size: 16px
- Font Weight: 700

**Category Pill（メニューカテゴリ）**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#dddddd`
- Padding: 6px 16px
- Border Radius: 10px
- Font Size: 13px
- Font Weight: 400

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Border (focus): 1px solid `#00a728`
- Border Radius: 8px
- Padding: 10px 14px
- Font Size: 14px
- Height: 44px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Border Radius: 12px
- Padding: 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`

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
| XXL | 64px |

### Container

- Max Width: 1040px
- Padding (horizontal): 20px

### Grid

- Columns: 可変（商品カードは 2〜4 列の auto-fit）
- Gutter: 16px〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素、基本状態 |
| 1 | `0 2px 8px rgba(0,0,0,0.08)` | カード、商品タイル |
| 2 | `0 4px 16px rgba(0,0,0,0.12)` | ホバー時のカード、ドロップダウン |
| 3 | `0 8px 24px rgba(0,0,0,0.16)` | モーダル、オーバーレイ |

サイト全体としてフラットな印象。影は控えめで、色面とボーダーで区切りをつける

---

## 7. Do's and Don'ts

### Do（推奨）

- ボタンは必ず radius 24px のピル型にする。モスバーガーのデザインアイデンティティの核
- グリーン (`#00a728`) を注文系アクション、オレンジ (`#ff7e47`) を登録・促進系アクションに使い分ける
- 温かみのある背景色（`#ffebeb` ピンク、`#fffbf0` クリーム）をセクション背景に活用する
- ディスプレイ見出しは weight 400 で大きく軽やかに。bold にしない
- font-family は英語名・日本語名の両方を指定する（`"Hiragino Kaku Gothic ProN"` と `"ヒラギノ角ゴ ProN W3"` の併記）
- 本文テキストは 14px / line-height 1.6 を維持する

### Don't（禁止）

- カテゴリピル以外のボタンに radius 24px 以外の角丸を使わない
- グリーンとオレンジを同じ用途で混在させない（注文＝グリーン、促進＝オレンジで統一）
- letter-spacing や palt を追加しない（サイト全体で normal を徹底している）
- 本文テキストの line-height を 1.4 以下にしない
- グリーン背景上のテキストに黒を使わない（必ず白 `#ffffff` を使用）
- Webフォントを追加しない（システムフォントのみの方針）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 768px | モバイルレイアウト。カードは1列 |
| Tablet | <= 1024px | タブレットレイアウト。カードは2列 |
| Desktop | > 1024px | デスクトップレイアウト。カードは3〜4列 |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG基準）
- ピルボタンは高さ 48px を確保

### フォントサイズの調整

- モバイルではディスプレイ見出しを 24px 程度に縮小
- 本文 14px はモバイルでもそのまま維持
- ナビゲーションはハンバーガーメニューに切り替え

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #00a728 (MOS Green)
Secondary Color: #ff7e47 (MOS Orange)
Text Color: #000000
Background: #ffffff
Warm BG Pink: #ffebeb
Warm BG Cream: #fffbf0
Font: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, sans-serif
Body Size: 14px
Line Height: 1.6
Button Radius: 24px (pill)
```

### プロンプト例

```
モスバーガーのデザインシステムに従って、メニュー一覧ページを作成してください。
- プライマリカラー: #00a728（注文ボタンに使用）
- セカンダリカラー: #ff7e47（登録・促進ボタンに使用）
- フォント: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", メイリオ, Meiryo, sans-serif
- 行間: 本文は line-height: 1.6
- ボタン: すべて border-radius: 24px（ピル型）
- カード背景: #ffffff, border: 1px solid #dddddd, radius: 12px
- セクション背景: #fffbf0（クリーム）または #ffebeb（ピンク）で温かみを演出
```
