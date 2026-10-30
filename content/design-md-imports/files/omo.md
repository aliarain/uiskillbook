# DESIGN.md — OMO by 星野リゾート（おも）

> OMO（おも）by 星野リゾート（https://omo-hotels.com/）のデザイン仕様書。
> 星野リゾートが展開する「街ナカ」シティホテルブランド。
> コンセプトは「テンションあがる、街遊び。」。観光やビジネスの拠点として街を遊び尽くすための都市型ホテル。
> 最大の特徴は **黒地 × ネオンイエロー（#fff778）** の大胆でポップなビジュアル。遊び心のあるトーン。
> 実サイトの computed style 実測（2026-06-27 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **黒地（#000000）× ネオンイエロー（#fff778）** を主役にした、大胆・ポップ・遊び心のあるダークデザイン。本文も見出しもリストも黄色テキストで、黒キャンバスに発光するように浮かぶ。「テンションあがる、街遊び。」のコンセプトを色で体現する
- **OMO について**: 星野リゾートの都市型ホテルブランド。「街ナカ」に立地し、近隣の魅力をスタッフ（OMOレンジャー）が案内する。OMO1〜OMO7 のグレード体系を持ち、施設ごとに独自のアクセントカラーを纏う。ただし**ブランドの基本フレームは黒×黄**で統一されている
- **密度**: 中〜高密度。黄色テキストの面が多く、黒地とのコントラストが強い。本文 line-height は 1.75 と日本語向けにゆったり。読み物・特集・街の遊び方コンテンツが多い editorial 寄り
- **キーワード**: 黒地、ネオンイエロー #fff778、ポップ、遊び心、街遊び、ダークモード、Zen Kaku Gothic Antique、施設別アクセント
- **特徴**:
  - 基調は **黒 #000000 × ネオンイエロー #fff778**。黄色が OMO のアイデンティティそのもの
  - 見出しは **Zen Kaku Gothic Antique（weight 600）**。懐が広く親しみのある角ゴシックで OMO の個性を出す
  - 本文・和文は **Noto Sans JP**（実チェーンは `HEmoji, "Noto Sans JP", sans-serif`。HEmoji/HNumber は星野リゾートの社内フォント別名）
  - **OMO 固有 CTA は黄色アウトライン**（黒地 / border 1px #fff778 / radius 4px）。黒地に黄色の縁取りボタン
  - **予約ボタンはシアン #00a0cb**（星野リゾート共通の chrome。OMO 固有ではない）
  - 施設別アクセント（例: 緑 #5d9364 = OMO3浅草）。各施設が独自カラーを持つが、フレームは黒×黄で共通
  - 白地サーフェス（ドロワー・フッタータイル）ではテキストは黒 #000 に反転する
  - **ダークモードがデフォルト**（黒地がブランドの基本状態）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値＋星野リゾート系 CSS Custom Properties。すべて hex 表記。基調は黒地×ネオンイエロー。

### Brand / Core

- **Background (Black)** (`#000000`): ページ背景・メインキャンバス（上部 viewport の支配色 `section.my-section` も黒）
- **Signature Neon Yellow** (`#fff778`): 本文・見出し・リスト・CTA アウトラインの主要テキスト色。**OMO のアイデンティティ**（黒地に黄色）
- **Background (Invert)** (`#1a1a1a`): ダークなチューム面・反転サーフェス（`--color-bg-invert`）

### CSS Custom Properties（星野リゾート系トークン・実測）

> 実サイトに定義されている設計トークン。引用して使う。

| Token | hex | 役割 |
|-------|-----|------|
| `--color-bg-base` | `#ffffff` | 白地サーフェスの背景（ドロワー・フッタータイル） |
| `--color-bg-invert` | `#1a1a1a` | 反転（ダーク）面の背景 |
| `--color-text-base` | `#000000` | 白地サーフェス上の本文 |
| `--color-text-sub` | `#555555` | サブテキスト（白地） |
| `--color-text-muted` | `#999999` | 注釈・控えめテキスト（白地） |
| `--color-text-invert` | `#ffffff` | ダーク面上のテキスト（白） |
| `--color-text-strong` | `#d50000` | 強調赤 |
| `--color-text-link` | `#006a86` | リンク（ティール系・白地） |
| `--color-primary` | `#00a0cb` | プライマリ（予約ボタン・シアン） |
| `--color-button-reservation` | `#00a0cb` | 予約 CTA の背景（シアン） |
| `--color-button-border` | `#7a7a7a` | ボタン枠線（グレー） |
| `--color-button-darken` | `#4d4d4d` | ボタン押下・ダーク面 |
| `--color-button-plain` | `#e6e6e6` | プレーンボタンの地（淡グレー） |

### Accent / Semantic

- **Cyan / Reservation** (`#00a0cb`): 予約ボタン（星野リゾート共通の chrome。OMO 固有色ではない）
- **Strong Red** (`#d50000`): 強調・警告・エラー（`--color-text-strong`）
- **Teal / Link** (`#006a86`): リンク（白地サーフェス）。ダーク面では白 #fff
- **Facility Green**（例）(`#5d9364`): OMO3浅草の施設別アクセント。施設ごとに固有色を持つ

### Neutral / Grey

| Token | hex | 役割 |
|-------|-----|------|
| Text Base (on white) | `#000000` | 白地サーフェス上の本文 |
| Text Sub | `#555555` | サブテキスト |
| Text Muted | `#999999` | 注釈・控えめ |
| Tile Grey | `#cccccc` | グローバル chrome のタイル |
| Plain Grey | `#e6e6e6` | プレーンボタンの地 |
| Button Border | `#7a7a7a` | ボタン枠線 |

---

## 3. Typography Rules

### 3.1 和文フォント

- **本文（ゴシック体）**: **Noto Sans JP**（`"Noto Sans JP", sans-serif`）。実チェーンは `HEmoji, "Noto Sans JP", sans-serif` で、**HEmoji / HNumber は星野リゾートの社内フォント別名**（絵文字・タブラー数字用のエイリアス）。実用上は Noto Sans JP として扱う
- **見出し（角ゴシック）**: **Zen Kaku Gothic Antique**（`"Zen Kaku Gothic Antique", sans-serif`）weight **600**。懐の広い親しみある字形で OMO の個性を担う。Google Fonts にあるため preview でも実フォントで描画可能
- **明朝体**: 使用しない（全面ゴシック）
- weight は 400（本文）/ 600（見出し）が中心

### 3.2 欧文フォント

- 欧文・数字も上記の和文フォント（Noto Sans JP / Zen Kaku Gothic Antique）でそのまま描画する
- **数字は HNumber**（タブラー数字のエイリアス）。価格・日付・グレード番号（OMO5 / OMO7）等を揃える
- 等幅が必要な箇所のみ `SFMono-Regular, Consolas, Menlo, monospace`

### 3.3 font-family 指定

```css
/* 本文（和文） */
font-family: HEmoji, "Noto Sans JP", sans-serif;
/* ※ HEmoji / HNumber は星野リゾートの社内フォント別名。
   一般環境では "Noto Sans JP", sans-serif で代替する */

/* 見出し */
font-family: "Zen Kaku Gothic Antique", sans-serif; /* weight 600 */

/* 等幅 */
font-family: SFMono-Regular, Consolas, Menlo, monospace;
```

**フォールバックの考え方**:
- 本文は **Noto Sans JP** 単独運用（Web フォント主体）。HEmoji/HNumber は社内エイリアスなので外部では効かず、Noto Sans JP に落ちる
- 見出しは **Zen Kaku Gothic Antique 600** を Web フォントで読み込む
- 数字は HNumber エイリアス（タブラー）。グレード番号や価格の桁を揃える

> **preview.html での注記**: Zen Kaku Gothic Antique・Noto Sans JP はいずれも Google Fonts にあるため、preview でも実フォントで描画できる。HEmoji / HNumber は星野リゾート社内フォントの別名で外部では再現できないため、本文は Noto Sans JP で代替する。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-27 取得）。**黒地に #fff778 の黄色テキスト**が基本。白地サーフェスでは #000。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H2（大見出し） | Zen Kaku Gothic Antique | 32px | 600 | 1.0〜1.5 (32〜48px) | normal〜0.04em (1.3px) | `#fff778` | セクション大見出し |
| H3（中見出し） | Zen Kaku Gothic Antique | 21px | 600 | 1.4 | -0.02em (-0.42px) | `#fff778` | ブロック見出し（やや詰め） |
| H1（ロゴ系） | Noto Sans JP | 12px | 300 | 1.4 | normal | `#fff778` | 実装はロゴ画像主体・テキストは小 |
| P（本文） | Noto Sans JP | 16px | 400 | 1.75 (28px) | normal | `#fff778` | 標準本文（ゆったり） |
| Body / Small | Noto Sans JP | 14px | 400 | 1.5 (21px) | normal | `#fff778` | 補助テキスト・キャプション |
| List Item | Noto Sans JP | 14px | 400 | 1.7 (23.9px) | normal | `#fff778` / `#000` | リスト（白地ドロワーでは黒） |
| Link (on dark) | Noto Sans JP | 14〜16px | 400 | 1.5 | normal | `#ffffff` | 暗い面のリンク（白） |
| Link (on white) | Noto Sans JP | 14〜16px | 400 | 1.5 | normal | `#006a86` | 白地サーフェスのリンク（ティール） |
| Reservation CTA | Noto Sans JP | 14px | 500 | 1.4 | normal | `#ffffff`（`#00a0cb` 地） | 予約ボタン |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 P (16px)**: `1.75`（28px。日本語向けにゆったり）
- **補助テキスト・Body (14px)**: `1.5`（21px）
- **リスト (14px)**: `1.7`（23.9px）
- **大見出し H2 (32px)**: `1.0〜1.5`（32〜48px。タイトに詰める場面も）

**字間 (letter-spacing)** — 実測:
- **本文・リスト**: `normal`
- **H2 大見出し**: `normal〜0.04em`（1.3px。場面により軽くトラッキング）
- **H3 中見出し**: `-0.02em`（-0.42px。やや詰めて締める）

**ガイドライン**:
- 本文は **16px / line-height 1.75** とゆったり組み、黒地で黄色テキストを読みやすくする
- 見出しは Zen Kaku Gothic Antique 600 で、H2 はやや開けるか締めるかを場面で使い分け、H3 は軽く詰める
- 本文の letter-spacing は触らず normal

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 施設名（"OMO5東京大塚" "OMO3浅草" 等）はグレード番号と地名が一体。折り返さず `white-space: nowrap` を基本とする
- グレード番号（OMO5 / OMO7）の数字は HNumber（タブラー）で桁を揃える

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt`（プロポーショナルメトリクス）等は**未採用**。Noto Sans JP / Zen Kaku Gothic Antique のメトリクスをそのまま使う
- 数字のタブラー揃えは HNumber エイリアスで担保（OpenType feature ではなくフォント別名で実現）

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

> 実測値。**OMO 固有のコンポーネント**と**星野リゾート共通の chrome**を区別して記述する。

### Buttons / CTA

**OMO Signature CTA（実測・OMO 固有）** — "特集一覧へ" 等
- Background: `#000000`（黒）
- Text: `#fff778`（ネオンイエロー）
- Border: `1px solid #fff778`（黄色アウトライン）
- Border Radius: `4px`
- Padding: `20px`
- 黒地に黄色の縁取りボタン。**OMO らしさの中核**。hover で地を黄色 → 文字を黒に反転すると映える

**Reservation Button（実測・星野リゾート共通）** — 予約 CTA
- Background: `#00a0cb`（シアン）
- Text: `#ffffff`
- Border: `1px solid #00a0cb`
- Border Radius: `2px`
- Font: 14px / weight 500
- 星野リゾート全ブランド共通の予約ボタン。OMO 固有色ではない

**Plain Button（実測・星野リゾート共通）**
- Background: `#e6e6e6`（`--color-button-plain`）
- Text: `#000000`
- Border: `1px solid #7a7a7a`（`--color-button-border`）
- 押下・ダーク化は `#4d4d4d`（`--color-button-darken`）
- グローバル chrome の汎用ボタン

### Badge

**Facility Badge（推奨）**
- Background: 施設別アクセント（例 `#5d9364`）または `#fff778`
- Text: `#000000`（黄/緑地）
- Border Radius: `4px`
- Padding: `4px 12px`
- グレード番号・施設タグを示す。施設ごとの色を纏う

### Inputs

**Text Input（推奨・ダーク面）**
- Background: `#1a1a1a`（`--color-bg-invert`）または `#000`
- Text: `#fff778`
- Border: `1px solid #7a7a7a`
- Border Radius: `4px`
- Padding: `12px 14px`
- Focus: border `#fff778`（黄色に発光）。リングは付けず枠線色で示す
- Error: border `#d50000`（強調赤）

### Cards / Surfaces

**Facility Card（推奨・ダーク）** — OMO5東京大塚 / OMO3浅草 / OMO7旭川 等
- Background: `#1a1a1a`（ダーク）または `#000`
- Text: `#fff778`（黄）
- Border: `1px solid #fff778` または施設別アクセント
- Border Radius: `4px`
- 施設別アクセントを左端のストライプや見出し色に使い、フレームは黒×黄で統一
- 影は控えめ（基本は黒×黄のコントラストで魅せる）

**White Surface（実測）** — ドロワー・フッタータイル
- Background: `#ffffff`（`--color-bg-base`）
- Text: `#000000`（`--color-text-base`）/ サブ `#555` / 注釈 `#999`
- リンク: `#006a86`（ティール）
- 白地に反転するサーフェス。テキストは黒系で組む

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内側・アイコン間 |
| S | 8px | 小要素間 |
| M | 16px | 要素間・グリッドのガター |
| L | 24px | カード内余白 |
| XL | 40px | ブロック間・セクション内余白 |
| XXL | 80px | セクション間の大きな縦余白 |

### Container

- Max Width: `1080〜1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`
- 黒地キャンバスに黄色テキストのブロックを並べる。コントラストが強いので余白を十分にとる

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| S | 2px | 予約ボタン（星野リゾート共通） |
| M | 4px | **OMO 固有 CTA・カード・入力・バッジ** |

- OMO 固有要素は **radius 4px** を基本とする。pill（9999px）は使わない

### Grid

- Columns: 推奨 12 カラム
- Gutter: 16〜24px
- 施設カード: 3列（desktop）→ 2列（tablet）→ 1列（mobile）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 基本（黒地×黄のコントラストで魅せる） |
| 1 | `0 2px 8px rgba(0,0,0,0.3)` | カード・ポップオーバー（`--color-button-shadow` 系・控えめ） |

- OMO は**影を控えめ**にし、立体感は**黒 ↔ 黄のコントラスト**と**枠線（黄色アウトライン）**で表現する
- 影が必要な場面でも `rgba(0,0,0,0.3)` 程度に抑える（黒地では影が見えにくいため、黄色の枠線で輪郭を立てる方が効く）

---

## 7. Do's and Don'ts

### Do（推奨）

- 基調は **黒 #000000 × ネオンイエロー #fff778**。本文・見出し・リストを黄色テキストで黒地に乗せる
- 見出しは **Zen Kaku Gothic Antique（weight 600）**、本文は **Noto Sans JP**（実チェーン `HEmoji, "Noto Sans JP", sans-serif`）
- 本文は **16px / line-height 1.75** とゆったり組み、黒地で読みやすくする
- **OMO 固有 CTA は黄色アウトライン**（黒地 / border 1px #fff778 / radius 4px）。OMO らしさの中核
- 予約ボタンは**シアン #00a0cb / radius 2px**（星野リゾート共通）として OMO 固有 CTA と区別する
- 施設別アクセント（例 緑 #5d9364）は**ストライプや見出し色に少量**使い、フレームは黒×黄で統一する
- 白地サーフェス（ドロワー・フッタータイル）では**テキストを黒 #000 / リンク #006a86** に反転する
- 補助色は強調赤 #d50000・リンクティール #006a86。CSS Custom Properties（`--color-*`）を引用する
- radius は OMO 固有要素 4px / 予約ボタン 2px。影は控えめに

### Don't（禁止）

- **黄色 #fff778 を別の黄色に置き換えない**（OMO のアイデンティティ。彩度・色相を変えない）
- **黒地以外をデフォルト背景にしない**（白地はドロワー・フッター等の反転サーフェスに限定）
- OMO 固有 CTA を**シアンで塗らない**（シアンは予約専用。CTA は黄色アウトライン）
- 見出しに **Noto Sans JP を使わない**（見出しは Zen Kaku Gothic Antique 600）
- 本文を **line-height 1.5 未満に詰めない**（黒地・黄テキストは余白を確保しないと読みにくい）
- 施設別アクセントを**全面に塗らない**（フレームは黒×黄。アクセントはストライプ・見出し等に限定）
- pill（radius 9999px）を使わない（OMO は radius 4px）
- 影を**多用しない**（黒地では効かない。黄色の枠線で輪郭を立てる）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム |
| Tablet | 768px〜1023px | タブレット。2カラムグリッド |
| Desktop | ≥ 1024px | デスクトップ。3カラムグリッド |

### モバイル時の調整

- H2 大見出し: 32px → 24〜26px
- 本文 16px / line-height 1.75 は維持（黒地で読みやすさを保つ）
- 施設カード: 3列 → 2列 → 1列
- 黄色アウトライン CTA は横幅いっぱいに伸ばしてもよい（radius 4px は維持）
- 予約ボタン（シアン）はフッターに固定配置されることが多い

### タッチターゲット

- CTA・予約ボタン: 高さ 44px 以上
- リスト項目: 高さ 44px 以上（line-height 1.7 で確保済み）
- 施設カード: カード全体をタップ可能に

### ダークモード

- **ダークモードがデフォルト**（黒地がブランドの基本状態）。ライト（白地）はドロワー・フッター等の反転サーフェスに限定される

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background (Black): #000000
Signature Neon Yellow: #fff778（本文・見出し・CTA アウトライン）
Background (Invert): #1a1a1a

--color-bg-base: #ffffff（白地サーフェス）
--color-text-base: #000000 / --color-text-sub: #555 / --color-text-muted: #999
--color-text-invert: #ffffff（ダーク面の白テキスト）
--color-text-strong: #d50000（強調赤）
--color-text-link: #006a86（ティールリンク・白地）
--color-primary / --color-button-reservation: #00a0cb（予約・シアン）
--color-button-border: #7a7a7a / --color-button-darken: #4d4d4d / --color-button-plain: #e6e6e6
Facility Accent（例 OMO3浅草）: #5d9364

Font (本文): HEmoji, "Noto Sans JP", sans-serif（HEmoji/HNumber は社内別名→Noto Sans JP で代替）
Font (見出し): "Zen Kaku Gothic Antique", sans-serif / weight 600
数字: HNumber（タブラー）/ 等幅: SFMono-Regular, Consolas, Menlo, monospace

H2 大見出し: Zen Kaku Gothic Antique 32px / 600 / line-height 1.0-1.5 / #fff778
H3 中見出し: Zen Kaku Gothic Antique 21px / 600 / letter-spacing -0.02em / #fff778
P 本文: Noto Sans JP 16px / 400 / line-height 1.75 / #fff778
Body / Small: 14px / 400 / line-height 1.5 / #fff778
List: 14px / 400 / line-height 1.7 / #fff778（白地ドロワーでは #000）
Link (dark): #fff / Link (white): #006a86
letter-spacing: 本文 normal / H3 -0.02em

OMO Signature CTA: bg #000 / text #fff778 / border 1px #fff778 / radius 4px / padding 20px
Reservation Button（共通）: bg #00a0cb / text #fff / border 1px #00a0cb / radius 2px / 14px 500
Plain Button（共通）: bg #e6e6e6 / text #000 / border 1px #7a7a7a
Input (dark): bg #1a1a1a / text #fff778 / border 1px #7a7a7a / radius 4px / focus #fff778 / error #d50000
Facility Card: bg #1a1a1a or #000 / text #fff778 / border 1px #fff778 or 施設色 / radius 4px
Radius: OMO 4px / 予約 2px（pill 禁止）
Shadow: none〜0 2px 8px rgba(0,0,0,0.3)（控えめ）
Default mode: DARK（黒地）
```

### プロンプト例

```
OMO by 星野リゾート（おも）のデザインシステムに従って、施設紹介セクションを作成してください。
- 背景はダーク（黒 #000000）がデフォルト。本文・見出し・リストはネオンイエロー #fff778 で黒地に乗せる
- フォント: 見出しは "Zen Kaku Gothic Antique", sans-serif（weight 600）、
  本文は HEmoji, "Noto Sans JP", sans-serif（HEmoji/HNumber は星野リゾート社内別名なので一般環境では Noto Sans JP で代替）
- H2 大見出し: Zen Kaku Gothic Antique 32px / 600 / line-height 1.0-1.5 / #fff778
- H3 中見出し: Zen Kaku Gothic Antique 21px / 600 / letter-spacing -0.02em / #fff778
- 本文: Noto Sans JP 16px / 400 / line-height 1.75 / letter-spacing normal / color #fff778（黒地でゆったり）
- OMO 固有 CTA は黄色アウトライン: 背景 #000 / 文字 #fff778 / border 1px solid #fff778 / radius 4px / padding 20px
- 予約ボタンはシアン #00a0cb / 文字 #fff / radius 2px / 14px weight 500（星野リゾート共通。CTA とは区別する）
- 施設別アクセント（例 OMO3浅草 = 緑 #5d9364）はストライプや見出し色に少量使い、フレームは黒×黄で統一
- 白地サーフェス（ドロワー・フッター）ではテキストを黒 #000 / リンク #006a86（ティール）に反転する
- 補助色: 強調赤 #d50000、リンクティール #006a86
- radius は OMO 固有要素 4px・予約 2px（pill は使わない）。影は控えめ、立体感は黒×黄のコントラストと黄色枠線で出す
- font-feature-settings: normal（palt なし）。「テンションあがる、街遊び。」のポップで遊び心あるトーンで
```
