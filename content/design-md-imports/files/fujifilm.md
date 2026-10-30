# DESIGN.md — FUJIFILM

> FUJIFILM（https://www.fujifilm.com/jp/ja ）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。
> **UD（ユニバーサルデザイン）フォントを Web フォントとして全面採用** している点が最大の特徴。Clarimo UD PE（欧文）+ UD Shin Go（和文）の組み合わせにより、アクセシビリティと視認性を両立。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 精密光学メーカーとしての信頼感と先進性を、抑制的な配色とユニバーサルデザインフォントで表現。装飾を極力排し、コンテンツ（製品写真・技術情報）を主役にする企業サイト。色のアクセントは FUJIFILM レッド（`#fb0020`）1色のみに絞り、リンクと注意喚起で一貫して使用
- **密度**: 適度な情報密度のコーポレートサイト。セクションごとに十分な余白を確保しつつ、製品カテゴリ・技術情報・ニュースを効率的に配置
- **キーワード**: ユニバーサルデザイン、精密、信頼、コーポレート、FUJIFILM レッド、Condensed 見出し、palt 全面適用
- **特徴**: **UD フォント（Clarimo UD PE + UD Shin Go）** を Web フォントとして全面採用。モリサワの UD（ユニバーサルデザイン）書体は、画数の多い漢字でも潰れにくく、高齢者や弱視者にも読みやすい設計。見出しには **Condensed（Narrow）バリアント** を使い、限られたスペースに長いテキストを収めつつ視覚的階層を構成。`font-feature-settings: "palt"` を**全要素にグローバル適用**し、和文のプロポーショナル字詰めを徹底。`letter-spacing: 0.06em` もグローバルに適用。ボタンは `border-radius: 2px` の極めて控えめな角丸で、シャープさを保ちつつ完全な直角は避ける

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

FUJIFILM のカラーパレットは白地に黒テキスト、ブランドレッドをアクセントに配した極めて抑制的な構成。

- **FUJIFILM Red** (`#fb0020`): リンク・注意喚起・ブランドアクセント。FUJIFILM ロゴの赤に対応する唯一のアクセントカラー（`--color-link`, `--color-attention`）

### Text

- **Text Primary** (`#000000`): 本文・見出しテキスト（`--color-text`）
- **Text Secondary** (`#515151`): 補足テキスト・キャプション・ラベル（`--color-text-secondary`）
- **Text White** (`#ffffff`): 暗色背景上のテキスト（`--color-text-white`）
- **Text Green** (`#018463`): 環境・サステナビリティ関連のアクセント（`--color-text-green`）
- **Text Blue** (`#124f72`): 技術・専門情報のアクセント（`--color-text-blue`）
- **Text Red** (`#990000`): エラー・警告テキスト（`--color-text-red`）

### Surface & Background

- **Background** (`#ffffff`): ページ背景（`--color-bg`）
- **Background Secondary** (`#f6f7f6`): セクション背景・交互ストライプ（`--color-bg-secondary`）— わずかに緑がかったライトグレー
- **Footer Background** (`#f1f2f1`): フッター領域の背景

### Functional

- **Button Default** (`#e0e0e0`): デフォルトボタン背景（`--color-btn`）
- **Border** (`#adadad`): 区切り線・入力欄・ボタン枠（`--color-border`）

---

## 3. Typography Rules

### 3.1 和文フォント

FUJIFILM は **UD Shin Go（モリサワ UD 新ゴ）** を Web フォントとして採用。ユニバーサルデザイン書体で、画数の多い漢字でも潰れにくく、高齢者・弱視者にも読みやすい。

- **ゴシック体（本文）**: UD Shin Go Light JIS2004（`--font-normal` の和文部分）
- **ゴシック体（中太）**: UD Shin Go Regular JIS2004（`--font-medium`）
- **ゴシック体（太字）**: UD Shin Go Medium JIS2004（`--font-bold`）
- **コンデンス（見出し用）**: UD Shin Go Conde90 L/R/M JIS2004（見出し・ナビゲーション用。90% 幅の Condensed バリアント）

> **preview.html でのフォント代替**: Clarimo UD PE / UD Shin Go はモリサワの商用 Web フォントのため、ローカルプレビューでは表示されない。Google Fonts の **Noto Sans JP** を代替として使用する。Noto Sans JP は同じくユニバーサルデザイン思想のフォントであり、ウェイトバリエーション（Light 300 / Regular 400 / Medium 500）が UD Shin Go の Light / Regular / Medium に対応する

### 3.2 欧文フォント

- **サンセリフ（本文）**: Clarimo UD PE Light（`--font-normal` の欧文部分）
- **サンセリフ（中太）**: Clarimo UD PE Regular（`--font-medium`）
- **サンセリフ（太字）**: Clarimo UD PE Medium（`--font-bold`）
- **コンデンス（見出し用）**: Clarimo UD PE Narrow Light/Regular/Medium（見出し・ナビゲーション用）

Clarimo UD PE は UD Shin Go の欧文コンパニオンで、同じ UD 設計思想で作られたサンセリフ。

### 3.3 font-family 指定

```css
/* 本文（--font-normal） */
font-family: "Clarimo UD PE Light", "UD Shin Go Light JIS2004", sans-serif;

/* 中太テキスト（--font-medium） */
font-family: "Clarimo UD PE Regular", "UD Shin Go Regular JIS2004", sans-serif;

/* 太字テキスト（--font-bold） */
font-family: "Clarimo UD PE Medium", "UD Shin Go Medium JIS2004", sans-serif;

/* 見出し・ナビゲーション（Condensed / Narrow） */
/* Light */
font-family: "Clarimo UD PE Narrow Light", "UD Shin Go Conde90 L JIS2004", sans-serif;
/* Regular */
font-family: "Clarimo UD PE Narrow Regular", "UD Shin Go Conde90 R JIS2004", sans-serif;
/* Medium */
font-family: "Clarimo UD PE Narrow Medium", "UD Shin Go Conde90 M JIS2004", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Clarimo UD PE）を先に指定し、和文（UD Shin Go）をフォールバックに配置。欧文グリフは Clarimo UD PE、和文グリフは UD Shin Go でレンダリングされる
- ウェイト制御は `font-weight` ではなく **font-family の切り替え** で行う設計。Light / Regular / Medium の各ウェイトが別のフォントファミリーとして定義されている
- 最後の `sans-serif` は Web フォントが読み込めない場合のフォールバック

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1（ヒーロー見出し） | Narrow Medium | 36px | 700 | 54px (1.5) | 0.06em | ページタイトル・ヒーロー |
| H2（セクション見出し・大） | Narrow Light | 45px | 400 | normal | 0.06em | ヒーロー領域の大見出し |
| H2（セクション見出し） | Narrow Light | 32px | 400 | 48px (1.5) | 0.06em | セクション見出し |
| H3（サブ見出し・大） | Narrow Light | 28px | 400 | 42px (1.5) | 0.06em | カテゴリ見出し |
| H3（サブ見出し・小） | Narrow Regular | 18px | 500 | 27px (1.5) | 0.06em | カード見出し |
| H4（小見出し） | Narrow Medium | 18px | 700 | 27px (1.5) | 0.06em | リスト項目見出し |
| Body | Normal (Light) | 16px | 400 | 32px (2.0) | 0.06em | 本文 |
| Nav | Regular | 14px | 500 | — | 0.06em | ナビゲーションリンク |
| Footer | Regular | 14px | 500 | — | 0.06em | フッターリンク |
| Caption | Normal (Light) | 12px | 400 | 24px (2.0) | 0.06em | 補足・注釈 |
| Small（フッター注記） | Regular | 12px | 500 | — | 0.06em | 最小テキスト |

### 3.5 行間・字間

- **本文の行間**: `line-height: 2.0`（32px / 16px）— 日本語コーポレートサイトとして広め。UD フォントの可読性をさらに高める設定
- **見出しの行間**: `line-height: 1.5`（H1〜H3 共通）— Condensed フォントでも読みやすいゆとりのある行間
- **キャプションの行間**: `line-height: 2.0`（24px / 12px）— 小さいテキストでも本文と同じ比率で広い行間を確保
- **全要素の字間**: `letter-spacing: 0.06em`（0.96px @ 16px）— グローバルに適用。要素ごとの変動なし

**ガイドライン**:
- letter-spacing は **0.06em を全要素に一貫してグローバル適用**。見出し・本文・キャプション・ナビすべて同一値
- 行間は本文・キャプション 2.0 / 見出し 1.5 の **二段階構成**
- UD フォント + 広い行間 + 均一な字間の組み合わせにより、あらゆるユーザーにとって読みやすい組版を実現

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word;     /* 長いURLや英単語の折り返し */
```

- 日本語コーポレートサイトの標準的な設定に準拠
- 技術用語・製品名が長いため、`overflow-wrap: break-word` による折り返しが重要

### 3.7 OpenType 機能

```css
/* FUJIFILM はグローバルに palt を適用 */
font-feature-settings: "palt";
```

- **palt（プロポーショナル字詰め）**: **全要素にグローバル適用**。これは日本語サイトとしては積極的な設定。本文を含むすべてのテキストで和文のプロポーショナル字詰めが効いている
- UD Shin Go は palt テーブルを内蔵しており、palt 適用時に最適な字間になるよう設計されている
- `letter-spacing: 0.06em` との組み合わせにより、palt で詰まった字間を再度広げ、読みやすさを確保する設計

### 3.8 縦書き

- 該当なし。FUJIFILM は横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（塗りつぶし）**

FUJIFILM のボタンは **グレー塗りつぶし + 極小角丸** が基本。ブランドレッドはボタンには使わない。

- Background: `#e0e0e0`（`--color-btn`）
- Text: `#000000`
- Border Radius: **2px**（極めて控えめな角丸。pill でもシャープエッジでもない）
- Padding: `16px 32px 16px 24px`（左右非対称 — 右矢印アイコン分の余白）
- Font Family: Regular（`--font-medium`）
- Font Size: 16px
- Font Weight: 500

**Secondary（アウトライン / ゴースト）**

- Background: `rgba(255, 255, 255, 0.3)`（半透明白）
- Text: コンテキストに応じた前景色
- Border: `1px solid #adadad`（`--color-border`）
- Border Radius: **2px**
- Padding: `14px 28px 14px 21px`
- Font Family: Regular（`--font-medium`）
- Font Size: 14px
- Font Weight: 500

**ボタンの考え方**:
- すべてのボタンが **border-radius: 2px** — 極めて控えめな角丸。精密機器メーカーらしいシャープさを保ちつつ、完全な直角は避ける
- プライマリは **グレー #e0e0e0 塗りつぶし + 黒テキスト**。ブランドレッド `#fb0020` はリンク・注意喚起に限定し、ボタンには使用しない
- Padding は左右非対称（右が大きい）。右矢印アイコン（`→`）を伴うリンクボタンの設計
- ホバー時のスタイルは実装側で定義（推奨: 背景色をやや暗く）

### Inputs

- Background: `#ffffff`
- Border: `1px solid #adadad`（`--color-border`）
- Border (focus): 推定 `1px solid #000000` または `2px solid #fb0020`
- Border Radius: **2px**
- Padding: `12px 16px`
- Font Size: 16px
- Font Family: Normal（`--font-normal`）

### Cards

- Background: `#ffffff`
- Border: なし、または `1px solid #adadad`
- Border Radius: **2px**
- Padding: コンテキストにより `20px`〜`40px`
- Shadow: なし（フラット。Depth & Elevation 参照）

### Navigation

- Link Size: 14px
- Weight: 500（Regular フォント）
- Letter Spacing: 0.06em
- Color: `#000000`
- ヘッダーは白背景に黒テキスト

### Footer

- Background: `#f1f2f1`
- Text Color: `#000000`
- Link Size: 14px / 12px
- Weight: 500（Regular フォント）

---

## 5. Layout Principles

### Spacing Scale

CSS Custom Properties に基づく実測値:

| Token | Value | 用途 |
|-------|-------|------|
| Gutter | 20px (`--gutter`) | グリッドの溝幅 |
| Gap | 40px (`--gap`) | セクション間・要素間の標準間隔 |
| Col Width | 60px (`--col-width`) | グリッドの1カラム幅 |
| Container Padding | 64px (`--container-padding`) | コンテナ左右の余白 |

### Container

- Standard Width: **1160px**（`--container-width`）— 標準コンテンツ領域
- Wide Width: **1400px**（`--container-wide-width`）— ワイドレイアウト用
- Padding (horizontal): **64px**（`--container-padding`）

### Grid

- Column Width: 60px（`--col-width`）
- Gutter: 20px（`--gutter`）
- 12カラムグリッドの場合: 60px x 12 + 20px x 11 = 940px（+ padding 64px x 2 = 1068px。1160px コンテナ内に収まる）

---

## 6. Depth & Elevation

FUJIFILM は基本的にフラットデザイン。面の階層は背景色の差で構成する。

| Level | Shadow / BG | 用途 |
|-------|-------------|------|
| 0 | `background: #ffffff` | 通常要素（カード・本文エリア） |
| 1 | `background: #f6f7f6` | 交互セクション・サブ面（`--color-bg-secondary`） |
| 2 | `background: #f1f2f1` | フッター領域 |
| 3 | `background: #e0e0e0` | ボタン・アクション要素（`--color-btn`） |

- シャドウは使用しない（企業サイトの堅牢さ・信頼性を表現）
- 面の区別は **背景色のグラデーション**（白 → ライトグレー → グレー）で段階的に行う
- モーダル・ドロワー使用時はオーバーレイ（推定 `rgba(0, 0, 0, 0.5)` 程度）

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **UD フォントのフルスタック**（Clarimo UD PE + UD Shin Go + sans-serif）を指定する
- ウェイト制御は **font-family の切り替え**（Light / Regular / Medium）で行う
- `font-feature-settings: "palt"` を**全要素にグローバル適用**する（FUJIFILM の UD フォントは palt 前提の字間設計）
- `letter-spacing: 0.06em` を**全要素に均一適用**する
- 本文・キャプションの line-height は **2.0** を使う（UD フォントの可読性を最大化）
- 見出しの line-height は **1.5** を使う
- 見出しには **Condensed（Narrow）バリアント** を使う
- ボタンは `border-radius: 2px` の極小角丸にする
- 背景色は `#ffffff` / `#f6f7f6` / `#f1f2f1` のニュートラルなグレー系で構成する
- アクセントカラーは **#fb0020（FUJIFILM レッド）のみ**。リンクと注意喚起に限定して使用する
- コントラスト比は WCAG AA 以上を確保する（UD フォント採用の思想に一致）

### Don't（禁止）

- `font-weight` プロパティでウェイトを制御しない（font-family 切り替え方式のため、`font-weight: bold` は意図しないフォントになる）
- `palt` を外さない（`font-feature-settings: normal` にすると字間バランスが崩れる）
- `letter-spacing` を要素ごとに変えない（0.06em のグローバル適用が前提）
- ボタンに FUJIFILM レッド `#fb0020` を使わない（赤はリンク・注意喚起専用）
- `border-radius` に大きな値（8px 以上、pill 等）を使わない（2px が上限）
- シャドウ（`box-shadow`）を使わない
- 装飾的なフォント・スクリプト系フォントを混ぜない
- セクション間の余白を詰めすぎない（`--gap: 40px` が最小基準）
- テキスト色に `#000000` 以外の色をプライマリテキストに使わない（FUJIFILM は純黒を採用）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト。ハンバーガーナビ |
| Tablet | 768〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト |

### モバイル時の調整

- H1（36px）→ 24〜28px 程度に縮小
- H2（32〜45px）→ 24〜32px に縮小
- Container Padding（64px）→ 16〜24px に縮小
- Condensed フォントはモバイルでも維持（限られた幅で長いテキストを収めるため、むしろモバイルで効果的）
- `palt` と `letter-spacing: 0.06em` はモバイルでも変更なし
- `line-height: 2.0`（本文）はモバイルでも維持

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準 — UD フォント採用と同じアクセシビリティ方針）
- ボタンの Padding（16px 上下）により、最小タッチターゲットを確保

### フォントサイズの調整

- モバイルでは本文 14〜16px、見出しはデスクトップの 70〜80% 程度に縮小
- 12px（Caption / Small）はモバイルでも維持（UD フォントは小サイズでも可読性が高い）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: FUJIFILM（富士フイルム）
Origin: 精密光学・ヘルスケア・マテリアルズの総合メーカー
FUJIFILM Red: #fb0020
Text Primary: #000000
Text Secondary: #515151
Background: #ffffff
Background Secondary: #f6f7f6
Button Default: #e0e0e0
Border: #adadad
Font (Normal): "Clarimo UD PE Light", "UD Shin Go Light JIS2004", sans-serif
Font (Medium): "Clarimo UD PE Regular", "UD Shin Go Regular JIS2004", sans-serif
Font (Bold): "Clarimo UD PE Medium", "UD Shin Go Medium JIS2004", sans-serif
Font (Heading): "Clarimo UD PE Narrow Light/Regular/Medium", "UD Shin Go Conde90 L/R/M JIS2004", sans-serif
palt: グローバル適用（font-feature-settings: "palt"）
Letter Spacing: 0.06em（全要素共通）
Body: 16px / 400 / line-height 2.0 / letter-spacing 0.06em / Normal font
H1: 36px / 700 / line-height 1.5 / Narrow Medium font
H2: 32px / 400 / line-height 1.5 / Narrow Light font
H3: 28px / 400 / line-height 1.5 / Narrow Light font
H4: 18px / 700 / line-height 1.5 / Narrow Medium font
Nav: 14px / 500 / Regular font
Caption: 12px / 400 / line-height 2.0 / Normal font
Button: bg #e0e0e0 / text #000 / radius 2px / padding 16px 32px 16px 24px
Container: 1160px (standard) / 1400px (wide) / padding 64px
```

### プロンプト例

```
FUJIFILM のデザインシステムに従って、製品カテゴリページを作成してください。
- フォント（本文）: "Clarimo UD PE Light", "UD Shin Go Light JIS2004", sans-serif
- フォント（見出し）: "Clarimo UD PE Narrow Light", "UD Shin Go Conde90 L JIS2004", sans-serif
- font-feature-settings: "palt"（全要素にグローバル適用）
- letter-spacing: 0.06em（全要素共通）
- 本文: 16px / line-height: 2.0 / color: #000000
- H2: 32px / line-height: 1.5 / Narrow Light font
- H3: 28px / line-height: 1.5 / Narrow Light font
- リンク色: #fb0020（FUJIFILM レッド）
- ボタン: bg #e0e0e0 / text #000 / border-radius: 2px / padding: 16px 32px 16px 24px
- border-radius はすべての要素で 2px
- 背景: #ffffff。交互セクションは #f6f7f6
- コンテナ幅: max-width 1160px / padding 64px
- シャドウは一切使わない
```

### 字詰め・組版の重要ポイント

1. **UD フォントの全面採用**: Clarimo UD PE（欧文）+ UD Shin Go（和文）はモリサワのユニバーサルデザイン書体。画数の多い漢字でも潰れにくく、ふところ（字面内の空間）が広い設計。FUJIFILM のアクセシビリティへのコミットメントを象徴するフォント選択
2. **font-family によるウェイト制御**: `font-weight` ではなく、Light / Regular / Medium という異なる font-family を切り替えてウェイトを制御する。`font-weight: bold` を指定するとフォールバックの sans-serif が適用されてしまうため、必ず font-family で切り替える
3. **Condensed（Narrow）バリアントの見出し使用**: 見出しに Narrow バリアントを使うことで、長い日本語見出しでも行数を抑えつつ視覚的階層を構成。特に製品名やカテゴリ名が長い企業サイトでは効果的
4. **palt グローバル適用 + letter-spacing 0.06em**: palt で和文をプロポーショナル字詰めしつつ、`letter-spacing: 0.06em` で全体に均一な字間を追加。palt で詰まった分を letter-spacing で戻す設計で、結果として自然な読みやすさを実現
5. **line-height 2.0 の本文**: 日本語本文で `line-height: 2.0` は広めだが、UD フォントのふところの広さと組み合わせることで、行間と字面のバランスが取れた読みやすい組版になる
6. **FUJIFILM レッド #fb0020 の用途限定**: ブランドカラーの赤はリンクと注意喚起のみに使用し、ボタン背景やセクション背景には使わない。コーポレートサイトの落ち着いたトーンを維持するための制約
7. **preview.html でのフォント代替**: Clarimo UD PE / UD Shin Go は商用 Web フォントのため、ローカルプレビューでは Google Fonts の **Noto Sans JP**（Light 300 / Regular 400 / Medium 500）を代替として使用する

---

**取得日**: 2026-05-09
**出典**: https://www.fujifilm.com/jp/ja
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
