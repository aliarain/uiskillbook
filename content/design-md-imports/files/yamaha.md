# DESIGN.md — Yamaha（ヤマハ株式会社）

> ヤマハ株式会社コーポレートサイト（https://www.yamaha.com/ja/）のデザイン仕様書。
> 1887 年創業、楽器・音響機器・半導体まで手がける総合企業のコーポレート顔。
> 実サイトの computed style 実測（2026-05-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 創業 135 年超の老舗メーカーが「楽器ブランド」のロイヤリティを抑えめに、コーポレート格を保ちつつ品の良いプロダクトカタログ的トーンに着地させた構成。**ヤマハパープル `#4b1e78`** を主役に据え、他はほぼ無彩色 + 淡いラベンダー帯で組む
- **密度**: 本文 16px / line-height 1.75（28px）はコーポレートサイトとしては緩めで、**長文の理念・ニュースリリース読み物**に振った組版
- **キーワード**: ヤマハパープル、ピル CTA、ニュートラル、長文読み物、ヒラギノ角ゴ、混植系
- **特徴**:
  - **ブランドカラーは `#4b1e78`（ヤマハパープル／ロイヤルバイオレット）**。CTA・ヘッダーリンクのみで使い、面に広げず点で効かせる
  - **ヒーロー CTA は完全ピル**（`border-radius: 60px`）。コーポレートサイトとしては珍しくモダンな当て方
  - **見出しは Bold（700）一択**。Light / Medium ウェイトを混ぜず、太さで階層を切る潔さ
  - **letter-spacing は normal**。ヒラギノ角ゴ Pro の固有メトリクスをそのまま信用する設計
  - サブの淡色帯に **`rgba(214, 164, 234, 0.4)` ≒ 薄ラベンダー** を使い、楽器系の柔らかい温度感を保つ
  - パンくず・ニュース日付は **`#4b1e78`** で着色して、無彩色ボディの中で道筋を強調
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Yamaha Purple** (`#4b1e78`): メインのブランドカラー。CTA・主要リンク・キャプション
- **Pale Lavender** (`#d6a4ea` / α 0.4 ≒ `#f0e2f7`): セクション内のラベル帯・ホバー領域

### CTA / Buttons

- **Primary Pill**: 背景 `#4b1e78` / 文字 `#ffffff` / radius `60px` / padding `16px 45px 16px 20px` / 16px / weight 700 — "ニュースリリースを見る"
- **Outline Pill (on Hero)**: 背景 `rgba(0, 0, 0, 0.5)` / 文字 `#ffffff` / border `1px solid #ffffff` / radius `60px` / padding `15px 44px 15px 20px` / 16px / weight 700 — "ブランドプロミスを見る"
- **Header Tab**: 背景 `#4b1e78` / 文字 `#ffffff` / radius `0px` / padding `0 20px 0 0` / 14px / weight 700 — "製品・サービスサイト"

### Neutral

- **Text Primary** (`#333333`): 本文・見出し
- **Text on Dark** (`#ffffff`): ヒーロー帯のテキスト
- **Border** (`#a3a3a3`): スライドコントロール・薄い区切り線
- **Background** (`#ffffff`): ページ背景
- **Surface 1** (`#f6f6f6`): メガメニュー・カードグループの面
- **Surface 2** (`#e8e8e8`): 関連サイト導線セクション
- **Surface 3** (`#383838`): フッター帯（推定）
- **Slide Indicator** (`#bababa`): 非選択スライドドット
- **Overlay Dim** (`rgba(0, 0, 0, 0.5)`): ヒーロー上の半透明オーバーレイ

### Semantic（推奨補完）

実サイトに表面化した状態色は確認できないため、コーポレート向け補完値:

- **Danger**: `#d83933`（重要なお知らせ枠線想定）
- **Warning**: `#f1a824`
- **Success**: `#1f7a4d`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（メイン）**: **ヒラギノ角ゴ Pro**（ProN ではなく Pro を採用 — Apple JP と同じ系統）
- **Web フォント補強**: **Noto Sans JP**（フォールバック 2 番手）
- **Windows フォールバック**: **メイリオ / Meiryo**

### 3.2 欧文フォント

- 専用欧文フォントは持たず、和文フォント内の欧文グリフをそのまま使用
- 最終手段として **Droid Sans → sans-serif**

### 3.3 font-family 指定

実サイトの実測値（全ページ統一）:

```css
font-family: "Hiragino Kaku Gothic Pro", "Noto Sans JP",
  "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic ProN",
  メイリオ, Meiryo, "Droid Sans", sans-serif;
```

**フォールバックの考え方**:
- **和文（ヒラギノ）を最優先**。コーポレート文書は和文の表情を最重要視する設計
- Apple は ProN ではなく **Pro** を採用（古めのフォント指定だが、字形差はわずか）
- Windows でも Noto Sans JP（Web フォント） → メイリオの順で読みやすさを担保

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ・企業情報ページ、2026-05-06 取得）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Page Title (h1) | **32px** | 700 | 48px (×1.5) | normal | `#333333` | "企業情報" 等の下層ページ見出し |
| Section H2 | **28px** | 700 | 49px (×1.75) | normal | `#333333` | "ヤマハについて" 等 |
| Section H2 (on Dark) | 28px | 700 | 49px (×1.75) | normal | `#ffffff` | ヒーロー帯の見出し |
| H3 | 24px | 700 | 42px (×1.75) | normal | `#333333` | "ニュースリリース" 等 |
| H3 Center | 24px | 700 | 33.6px (×1.4) | normal | `#333333` | "創業" 等の中央寄せ大数字見出し |
| H4 | 18px | 700 | 31.5px (×1.75) | normal | `#333333` | フッター見出し |
| H5 | 16px | 700 | 28px (×1.75) | normal | `#333333` | カード内見出し |
| Body | **16px** | 400 | 28px (×**1.75**) | normal | `#333333` | 本文 |
| Body Bold | 16px | 700 | 28px (×1.75) | normal | `#333333` | リンク見出し |
| Lead | 18px | 700 | 25.2px (×1.4) | normal | `#333333` | "重要なお知らせ" 等 |
| Caption | 14px | 400 | 24.5px (×1.75) | normal | `#333333` | 補足文 |
| Note (Brand) | 12px | 400 | 21px (×1.75) | normal | `#4b1e78` | "（2025年3月期）" 等の年度表記 |
| Footer / Mini | 10px | 400 | 17.5px (×1.75) | normal | `#333333` | コピーライト・ナビ |
| Nav Link | 13px | 400 | 22.75px (×1.75) | normal | `#333333` | グローバルナビ |

### 3.5 行間・字間

- **本文の行間**: `1.75`（28px / 16px）— 日本語読み物に最適化された緩めの値
- **大見出し (h1, h3 数字)**: `1.4〜1.5`
- **letter-spacing**: 全階層で **`normal`**（明示指定なし）— ヒラギノ角ゴ Pro の固有メトリクスを尊重

**ガイドライン**:
- 日本語本文は **line-height: 1.75** を維持。ヤマハの長文ニュース／理念ページの読みやすさの肝
- 字間に手を加えない。トラッキングを乗せると老舗コーポレートの落ち着きが崩れる
- 見出しは **すべて Bold（700）** で揃え、ウェイト差ではなくサイズ差で階層を切る

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- ニュースタイトルや製品ロングテール名で意図的な改行は避け、自動禁則に任せる
- パンくず（"ホーム > 企業情報"）は **`white-space: nowrap`** で折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上 **`palt` も `kern` も明示有効化されていない**
- ヒラギノ角ゴ Pro の標準字詰めをそのまま使用 — コーポレート文書としての読みやすさを優先
- 見出しを詰める場合のみ `palt` を補助的に追加するのは可

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（パープルピル）** — メインの行動喚起
- Background: `#4b1e78`
- Text: `#ffffff`
- Padding: `16px 45px 16px 20px`（右側に矢印アイコン分の余白）
- Border Radius: `60px`（完全ピル）
- Font: Hiragino Kaku Gothic Pro, 16px, weight 700
- Border: none
- Box Shadow: なし（フラット）

**Outline Pill on Hero** — ヒーロー画像上の透過 CTA
- Background: `rgba(0, 0, 0, 0.5)`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Padding: `15px 44px 15px 20px`
- Border Radius: `60px`
- Font: 16px / weight 700

**Header Tab Link** — グローバルナビの強調項目
- Background: `#4b1e78`
- Text: `#ffffff`
- Padding: `0 20px 0 0`
- Border Radius: `0px`（角直、ナビ内のタブ的扱い）
- Font: 14px / weight 700

**Slide Control** — カルーセル操作
- Background: `#ffffff`
- Border: `1px solid #a3a3a3`
- Border Radius: `50%`（円）
- Size: 約 32×32px

### Inputs（推奨値、実測ではフォーム項目が表面化していないため補完）

- Background: `#ffffff`
- Border: `1px solid #a3a3a3`
- Border (focus): `1px solid #4b1e78`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font: Hiragino Kaku Gothic Pro, 16px, weight 400
- Color: `#333333`
- Height: 48px

### Cards

- Background: `#ffffff` または `#f6f6f6`
- Border: なし
- Border Radius: `0px`〜`8px`（コーポレートではほぼ角直、製品系では `8px` を推奨）
- Padding: `24px〜32px`
- Shadow: 基本フラット、必要に応じて Level 1 を使う

### Header / Nav

- Background: `#ffffff`
- Box Shadow: `rgba(0, 0, 0, 0.2) 0 5px 10px -7px`（薄い下方シャドウで境界を作る）
- Padding: 上下 0
- Height: 推奨 64〜72px

### Footer

- Background: `#383838`（推定）または `#f6f6f6` の帯
- Color: `#333333` または `#ffffff`（暗背景時）
- Padding: `64px 32px 32px`

### Mega Menu Panel

- Background: `#f6f6f6`
- Hover Tag Background: `rgba(214, 164, 234, 0.4)` ≒ 薄ラベンダー
- 製品・楽器カテゴリの一覧表示。フォントは本文と同じ 16px

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | 小カードの内余白 |
| M | 16px | カード内の段落間／ボタンの横余白 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション内の見出しと本文の余白 |
| XXL | 80px | セクション間の縦余白 |

### Container

- Max Width: `1200px` 程度（推奨）
- Padding (horizontal): mobile `16px` / desktop `32〜48px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | ヘッダータブ・コーポレート見出し背景 |
| Small | 4px | 入力欄 |
| Medium | 8px | カード（推奨） |
| Pill | 60px | 主要 CTA（ヤマハの押しはこの値） |
| Circle | 50% | スライドコントロールアイコン |

### Grid

- 12 カラムグリッドが推奨
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード基本・面（ほぼフラット） |
| 1 | `rgba(0, 0, 0, 0.2) 0 5px 10px -7px` | ヘッダー（実測） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.08)` | ホバーカード（推奨） |
| 3 | `0 12px 32px rgba(0, 0, 0, 0.16)` | モーダル・ドロップダウン（推奨） |

- ヤマハは **影をほぼ使わない**設計。サーフェス階層（白 → `#f6f6f6` → `#e8e8e8`）で奥行きを作る
- ヘッダーだけが薄い境界用シャドウ（実測値）を持つ

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラーは **`#4b1e78`（ヤマハパープル）** を CTA・主要リンクに集中投下する
- 主要 CTA は **完全ピル（`border-radius: 60px`）** にする
- 見出しは **すべて Bold（700）** で揃え、サイズ差で階層を切る
- 本文の line-height は **1.75** を維持（長文ニュース・理念ページの読みやすさが核）
- 和文フォントは **ヒラギノ角ゴ Pro → Noto Sans JP → メイリオ** の順でフォールバック
- letter-spacing は **`normal`** を基本とし、ヒラギノの固有メトリクスを信用する
- 補助情報（年度表記等）に **`#4b1e78`** を点で使うとブランドのトーンが立つ

### Don't（禁止）

- ブランドカラーを面に広げない（CTA・点アクセントのみ）
- 見出しに **Light / Regular ウェイト** を使わない（コーポレートのカチッと感が崩れる）
- 本文の line-height を **1.5 以下**にしない（漢字が詰まりすぎる）
- ピル CTA を **角丸 8px や直角** に置き換えない（ヤマハのモダンさはピルが担う）
- letter-spacing をかけすぎない（古めの ProN/Pro フォントは詰めるとザラつく）
- 楽器ブランドだからといって **派手な彩度の紫** を使わない（`#4b1e78` は深く落ち着いた紫）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| `sm` | 640px | 大きめモバイル |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 広いデスクトップ |

### モバイル時の調整

- Page Title (h1): 32px → 24〜26px
- Section H2: 28px → 22〜24px
- H3: 24px → 20px
- 本文: 16px は維持（読みやすさ優先）
- グローバルナビはハンバーガーへ切り替え

### タッチターゲット

- 主要 CTA: padding `16px 20〜45px` で 50〜52px の高さ（44px 以上を確保）
- スライドコントロール: 32×32px は推奨では不足、モバイルでは 44×44px に拡張する

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Yamaha Purple: #4b1e78
Pale Lavender: #d6a4ea (α 0.4)
Text Primary: #333333
Background: #ffffff
Surface 1: #f6f6f6
Surface 2: #e8e8e8
Border: #a3a3a3
Overlay: rgba(0, 0, 0, 0.5)

Font: "Hiragino Kaku Gothic Pro", "Noto Sans JP", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, "Droid Sans", sans-serif

Body: 16px / line-height 1.75 / weight 400 / letter-spacing normal
H1: 32px / line-height 1.5 / weight 700
Section H2: 28px / line-height 1.75 / weight 700
H3: 24px / line-height 1.75 / weight 700
Caption: 14px / line-height 1.75 / weight 400

Button (Pill): bg #4b1e78 / 白文字 / padding 16px 45px 16px 20px / radius 60px / 16px weight 700
Header Tab: bg #4b1e78 / 白文字 / padding 0 20px 0 0 / radius 0 / 14px weight 700
```

### プロンプト例

```
ヤマハのコーポレートデザインに従って、ニュースリリース一覧ページを作成してください。
- フォント: "Hiragino Kaku Gothic Pro", "Noto Sans JP", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
- ページ見出し (h1): 32px / weight 700 / line-height 1.5 / color #333333
- セクション見出し (h2): 28px / weight 700 / line-height 1.75
- 本文: 16px / weight 400 / line-height 1.75 / color #333333 / letter-spacing normal
- 日付・年度表記: 12px / color #4b1e78（ブランド色を点で）
- 主要 CTA "詳細を見る": 背景 #4b1e78 / 白文字 / radius 60px / padding 16px 45px 16px 20px / weight 700
- カード背景: #ffffff、メガメニュー帯は #f6f6f6
- ホバー強調: rgba(214, 164, 234, 0.4) の薄ラベンダー帯
- 影は基本使わず、サーフェス階層（白 → #f6f6f6 → #e8e8e8）で奥行きを作る
- ボタンは完全ピル、本文は line-height 1.75 を維持
- letter-spacing は normal、ヒラギノ角ゴ Pro の固有メトリクスを尊重
```
