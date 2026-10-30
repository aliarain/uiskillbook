# DESIGN.md — 美術手帖（びじゅつてちょう / BT）

> 美術手帖（https://bijutsutecho.com/）のデザイン仕様書。
> 1948 年創刊、日本を代表する現代アート専門誌のウェブ版（美術出版社 / CCC アートラボ）。展覧会・ニュース・レビュー・雑誌アーカイブを束ねる情報量の多いアートメディア。
> 最大の特徴は **ヒラギノ明朝 W6 のディスプレイ見出し × Roboto＋Noto Sans JP の本文ゴシック** という和欧・明朝/ゴシックの使い分けと、**ニアブラック #2c2e31 を地に、プレミアム導線だけを金 #c2a47e で象徴する**設計。CTA は **ピル（radius 9999px）** が基本で、ナビのラベルには 0.15em の広いトラッキングをあてる。
> 実サイトの computed style / CSS Custom Properties 実測（2026-06-30 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **明朝のディスプレイ見出し**で文化・編集の格を出し、**ゴシック本文**で情報量をさばく、アートメディアらしい二層構造。白地・ニアブラック・グレースケールを基調に、**有料会員（PREMIUM）導線だけを金 #c2a47e** で象徴する
- **美術手帖について**: 現代アートの展覧会・ニュース・批評を扱う専門メディア。雑誌『美術手帖』のアーカイブも擁し、紙の編集文化を Web の高密度なグリッドに翻訳している
- **密度**: 中〜高密度。展覧会・記事・ランキングのカードを多段グリッドで並べる。UI 行間は 1.2 とタイト、読み物本文は 1.5 でゆったり
- **キーワード**: アートメディア、ヒラギノ明朝 W6（ディスプレイ）、Roboto＋Noto Sans JP（本文）、ニアブラック #2c2e31、金 #c2a47e（プレミアム）、ピル CTA、広いトラッキング（0.15em）、高密度グリッド
- **特徴**:
  - **大きな英字ディスプレイ見出し**（Popular Exhibition / vol.79 等）は **ヒラギノ明朝 W6**、本文・UI・和文見出しは **Roboto, Noto Sans JP, Hiragino Sans** のゴシック
  - テキストは **純黒ではなく #2c2e31（ニアブラック）**（`--color-text` / `--color-dark-grey`）。補助に #707980（グレー）
  - **会員導線（INVITATION / PREMIUM / 有料記事）だけを金 #c2a47e** で塗り、それ以外は無彩色に保つことでアクセントが効く
  - CTA は **ピル（radius 9999px）が基本**。金地・ニアブラック地・アウトラインの 3 系統
  - ナビのカテゴリラベル（PREMIUM / ニュース…）は **letter-spacing 0.15em（2.1px）** と広く開けて編集的に見せる

---

## 2. Color Palette & Roles

> computed style / CSS Custom Properties 実測値。すべて hex 表記。無彩色基調＋プレミアムの金が骨格。

### Core（背景・面）

- **White** (`#ffffff`): ページ・カード・ヘッダーの基本地
- **Section Tint** (`#f4f4f4`): セクション面・検索フィルタ等の薄いグレー地
- **Image Overlay** (`rgba(0,0,0,0.4)`): 記事サムネイル上のテキスト可読性を支える暗幕

### Text

- **Text Primary** (`#2c2e31`): 本文・見出し・ナビの基本テキスト（`--color-text` / `--color-dark-grey`）。ニアブラック
- **Text Muted** (`#707980`): メタ情報・キャプション・第 2 階層ラベル
- **Text Subtle** (`#979797`): フッターのコピーライト等、最も淡いテキスト
- **White** (`#ffffff`): 暗幕・金地・ニアブラック地に乗る反転テキスト

### Brand / Accent

- **Premium Gold** (`#c2a47e`): **唯一のブランドアクセント**（`--color-premium` 相当）。INVITATION 見出し、PREMIUM バッジ、有料会員 CTA・価格表示に使う。これ以外の場所では使わない
- **Premium Navy** (`#16264a`): 「プレミアム会員」ラベルの濃紺。金とともに会員プランの格を示す補助色

### Semantic / その他

- **Ad Link Blue** (`#4a90e2`): 広告・スポンサー枠のリンク（例: GMO クリック証券）。**ブランドの意図色ではない**ため、デザイン再現では踏襲しない
- 専用の Danger / Success カラーは定義が薄い。エラー表示が必要なら控えめな赤を最小限あて、金 #c2a47e は会員導線専用に保つ

---

## 3. Typography Rules

> ディスプレイ見出しは **ヒラギノ明朝 W6**、本文・UI・和文見出しは **Roboto → Noto Sans JP → Hiragino Sans** のゴシック。明朝とゴシックの役割が明確に分かれる。
> ヒラギノ明朝はシステムフォント（macOS）。preview.html では **Noto Serif JP** で近似する。

### 3.1 和文フォント

- **明朝体（ディスプレイ見出し用途）**: `"ヒラギノ明朝 W6 JIS2004", "Noto Serif JP", "ヒラギノ明朝", serif`。英字の大見出し（Popular Exhibition）や雑誌の号数（vol.79）など、編集的なディスプレイに限定
- **ゴシック体（本文・UI・和文見出し）**: `Roboto, "Noto Sans JP", "Hiragino Sans", sans-serif`。本文・ナビ・カード見出し・メタ情報すべてこのチェーン

### 3.2 欧文フォント

- **サンセリフ（本文・UI 欧文）**: `Roboto`（フォールバックに Noto Sans JP / Hiragino Sans）。本文・ラベルの欧文を受け持つ
- **セリフ（ディスプレイ欧文）**: ヒラギノ明朝 W6 の欧文グリフ。大きな英字見出しに格を与える
- アイコン: `icomoon`（アイコンフォント）

### 3.3 font-family 指定

```css
/* 本文・UI・和文見出し（ゴシック） */
font-family: Roboto, "Noto Sans JP", "Hiragino Sans", sans-serif;

/* ディスプレイ見出し（明朝） */
font-family: "ヒラギノ明朝 W6 JIS2004", "Noto Serif JP", "ヒラギノ明朝", serif;
```

- **CSS 変数**: `--color-text: #2c2e31` ／ `--color-dark-grey: #2c2e31`（テキスト色トークン）
- **フォールバックの考え方**: ゴシックは Roboto（ラテン）→ Noto Sans JP（和文）→ Hiragino Sans の順。明朝はヒラギノ明朝 W6 → Noto Serif JP → serif

**preview.html での代替フォント**:
- ヒラギノ明朝 W6（macOS システム明朝、太め）→ **Noto Serif JP**（weight 600/700。すでにフォールバックに含まれる）
- Roboto → **Roboto**（Google Fonts でそのまま利用可。weight 400/500/700）
- Noto Sans JP → **Noto Sans JP**（Google Fonts。weight 400/500/600/700）

### 3.4 文字サイズ・ウェイト階層

> デスクトップ（1440px）実測 px。ディスプレイ見出し（明朝）と本文・UI（ゴシック）で書体・行間が切り替わる。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (en) | 明朝 W6 | 32px | 700 | 1.0 (32px) | 0.96px (0.03em) | 「Popular Exhibition」等。色 #2c2e31 |
| 号数 (en) | ゴシック | 32px | 700 | 1.75 (56px) | normal | 「vol.79 No.1110」雑誌号数 |
| H1（ページ） | ゴシック | 24px | 500 | 1.5 (36px) | 3.6px (0.15em) | 「MAGAZINE」等、ページ見出し |
| Eyebrow（金） | ゴシック | 16px | 600 | 1.2 (19.2px) | 0.48px (0.03em) | 「INVITATION」金 #c2a47e |
| H2（記事 L） | ゴシック | 20px | 600 | 1.5 (30px) | normal | おすすめ記事タイトル。色 #2c2e31 |
| H3（記事） | ゴシック | 17px | 600 | 1.5 (25.5px) | normal | 記事カードのタイトル |
| Nav Item | ゴシック | 13–14px | 500 | 1.0 | 2.1px (0.15em) | ナビ（PREMIUM / ニュース…）。広いトラッキング |
| Body | ゴシック | 16px | 400 | 1.2–1.5 | normal | UI は lh 1.2、読み物本文は lh 1.5 |
| Meta / Caption | ゴシック | 12px | 400 | 1.67 (20px) | normal | 日時・出典など。色 #707980 |
| Copyright | ゴシック | 10px | 400 | 2.0 (20px) | 0.7px (0.07em) | フッター。色 #979797 |

- **ウェイト**: 見出し・ラベルに 600/700、ナビ・強調に 500、本文に 400。ディスプレイ明朝は 700（W6）
- 文字色は #2c2e31 が基本。金 #c2a47e は会員系の eyebrow・バッジ・価格に限定

### 3.5 行間・字間

- **UI / カード見出しの行間**: 1.2（16px→19.2px）とタイト。高密度グリッドを詰めて並べる
- **読み物本文の行間**: 1.5（記事詳細・雑誌本文）。長文をゆったり読ませる
- **ディスプレイ見出しの字間**: 0.03em（英字大見出し）
- **ページ見出し・ナビの字間**: **0.15em（2.1〜3.6px）** と広い。「MAGAZINE」「PREMIUM」等のラベルを編集的に開ける
- **本文の字間**: normal

**ガイドライン**:
- カード・UI は line-height 1.2 で詰め、情報密度を保つ
- 読み物本文は line-height 1.5 に切り替える
- 英字ラベル・カテゴリ名は letter-spacing 0.15em で開け、明朝ディスプレイは 0.03em にとどめる

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！` ／ 行末禁止: `（「『【`
- 記事タイトルは 2〜3 行で省略（`-webkit-line-clamp`）し、カードの高さを揃える

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測では `font-feature-settings: normal`。**palt は使わない**。Roboto / Noto Sans JP のメトリクスをそのまま使い、ラベルの間隔は letter-spacing で開ける
- 明朝ディスプレイもベタ組みのまま、字間 0.03em の微調整にとどめる

### 3.8 縦書き

該当なし。横書きのみ（紙の誌面アーカイブ内は別途）。

---

## 4. Component Stylings

### Buttons

> **ピル（radius 9999px）が基本**。金地・ニアブラック地・アウトラインの 3 系統。会員導線は金で塗る。

**Premium（金地ピル）** — 「プレミアムプラスで読む」等
- Background: `#c2a47e`（Premium Gold）
- Text: `#ffffff`（ゴシック / 16px / 700）
- Border: なし
- Border Radius: `9999px`（ピル）
- Padding: 約 12px 24px

**Primary（ニアブラック地）** — 「→ プレミアム記事一覧へ」等
- Background: `#2c2e31`
- Text: `#ffffff`（ゴシック / 14px / 700）
- Border Radius: `22px`（角丸〜ピル寄り）
- Padding: 約 10px 22px

**Outline（アウトラインピル）** — 「目次を見る」等
- Background: `transparent`
- Text: `#2c2e31`（ゴシック / 16px / 700）
- Border: 1px solid `#2c2e31`
- Border Radius: `9999px`（ピル）

**Link（テキストリンク）**
- Text: `#2c2e31`（ゴシック）。ナビ・記事内リンク
- カテゴリラベルは letter-spacing 0.15em で開ける

### Inputs

> 検索・絞り込みフォーム中心。下記は実測＋基調からの推定。

- Background: `#ffffff`
- Border: 1px solid `#dddddd` 前後、または下線
- Border (focus): 1px solid `#2c2e31` ＋ ごく薄いリング
- Border Radius: 角丸（フィルタは 4〜8px、検索フィールドはピル寄りのこともある）
- Padding: 約 12px 14px
- Font: ゴシック / 16〜18px
- Label: ゴシック / 14px / 600（例: 「エリア」）

### Cards

- Background: `#ffffff`
- Border: なし、または淡いグレーの区切り
- Border Radius: 小さめ（0〜8px）。画像は角を立てるか軽く丸める
- 展覧会・記事サムネイルを大きく置き、その上に暗幕 `rgba(0,0,0,0.4)` を敷いて白文字を乗せる構成と、画像下にゴシック見出し（17〜20px / 600）＋メタ情報（12px / #707980）を添える構成の 2 パターン
- ランキング・特集は番号や金ラベルで階層を示す

---

## 5. Layout Principles

### Spacing

- 高密度の多段グリッド（展覧会・記事・ランキング）。カード間は中程度の gutter で詰め、情報量を担保する
- セクション見出し（明朝ディスプレイ＋金 eyebrow）の前後にはやや広い余白を取り、塊を分ける

### Container

- 中央寄せのワイドカラム＋右サイド（ランキング・会員導線）の 2 カラム構成が基本
- 左右にページ余白を取りつつ、本文・カードグリッドを広く使う

### Grid

- 記事・展覧会一覧はカードグリッド（2〜4 カラム、ビューポートで可変）
- スライダー（slick）でおすすめ・特集を横送り表示
- Gutter: 16〜24px 程度

---

## 6. Depth & Elevation

> 美術手帖は影を控えめに使う。白地・薄グレー面・区切りと、画像上の暗幕で階層をつくる。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード・面の基本。白地と #f4f4f4 で分ける |
| 1 | `0 1px 4px rgba(44,46,49,0.08)` | ヘッダー固定・ドロップダウン・浮くカード |
| 2 | `0 8px 24px rgba(44,46,49,0.14)` | モーダル（INVITATION 等の会員案内ポップアップ） |

- 画像上のテキスト可読性は影ではなく **暗幕 rgba(0,0,0,0.4)** で確保する
- 影を使う場合も純黒ではなく #2c2e31 ベースにして地に馴染ませる

---

## 7. Do's and Don'ts

### Do（推奨）

- 大きな英字ディスプレイ見出しは明朝（ヒラギノ明朝 W6 → Noto Serif JP）で格を出す
- 本文・UI・和文見出しはゴシック（Roboto → Noto Sans JP → Hiragino Sans）でさばく
- テキストは純黒ではなく #2c2e31（ニアブラック）を基本に、補助 #707980 / #979797
- 会員導線（INVITATION / PREMIUM / 有料記事）だけを金 #c2a47e で象徴する
- CTA はピル（radius 9999px）を基本に、金地・ニアブラック地・アウトラインを使い分ける
- ナビ・ページ見出しのラベルは letter-spacing 0.15em で広く開ける
- UI・カードは line-height 1.2 で詰め、読み物本文は 1.5 に切り替える
- 画像上の白文字は暗幕 rgba(0,0,0,0.4) で支える

### Don't（禁止）

- 金 #c2a47e を会員導線以外に乱用しない（限定するからアクセントが効く）
- 本文・UI を明朝で組まない（明朝は英字ディスプレイ見出しの限定用途）
- 広告リンクの青 #4a90e2 をブランド色として扱わない
- `palt` を有効にしない（実測は normal。ラベルは letter-spacing で開ける）
- 本文に純黒 #000 を使わない（#2c2e31 を基本に）
- 読み物本文の行間を詰めすぎない（1.5 を確保）
- ナビ・カテゴリラベルのトラッキングを 0 にしない（0.15em で編集的に開ける）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1 カラム、ナビはハンバーガー。サイド導線は下部へ回す |
| Tablet | 768–1023px | 2 カラムのカードグリッド |
| Desktop | ≥ 1024px | 本文＋右サイド（ランキング・会員）の 2 カラム、カードは 3〜4 列 |

- ディスプレイ見出し（明朝 32px）はモバイルで比例縮小するが、字間 0.03em は維持
- ナビラベルの letter-spacing 0.15em はブレークポイントを越えて保つ

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）。ピル CTA は高さ・padding で自然に満たす

### フォントサイズの調整

- 本文は 16px（モバイルでも 15〜16px を確保）、メタは 12px
- カード見出しはモバイルで 16〜17px 程度に収め、行間 1.2〜1.4 で詰める

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background: #ffffff / セクション面 #f4f4f4 / 画像暗幕 rgba(0,0,0,0.4)
Text: #2c2e31（基本・ニアブラック）/ #707980（メタ）/ #979797（最淡）
Accent: #c2a47e（プレミアム金・会員導線専用）/ #16264a（プレミアム紺・補助）
ディスプレイ見出し Font（明朝）: "ヒラギノ明朝 W6 JIS2004", "Noto Serif JP", serif
本文・UI Font（ゴシック）: Roboto, "Noto Sans JP", "Hiragino Sans", sans-serif
Body: 16px / UI lh 1.2・読み物 lh 1.5 / letter-spacing normal
ナビ・ページ見出し ls: 0.15em（2.1〜3.6px）／ 明朝ディスプレイ ls 0.03em
OpenType: font-feature-settings: normal（palt は使わない）
Button: ピル radius 9999px 基本。金地 #c2a47e／ニアブラック地 #2c2e31／アウトライン #2c2e31
```

### プロンプト例

```
美術手帖のデザインシステムに従って、現代アートメディアのトップ＋記事一覧を作成してください。
- 大きな英字ディスプレイ見出し（Popular Exhibition / vol.79 等）は明朝: "ヒラギノ明朝 W6 JIS2004", "Noto Serif JP", serif
- 本文・UI・和文見出しはゴシック: Roboto, "Noto Sans JP", "Hiragino Sans", sans-serif
- テキストは #2c2e31（ニアブラック）を基本、メタ #707980、最淡 #979797。背景は白 #ffffff／セクション面 #f4f4f4
- 会員導線（INVITATION / PREMIUM / 有料記事 CTA・価格）だけを金 #c2a47e で象徴する。それ以外に金は使わない
- CTA はピル（radius 9999px）: 金地 #c2a47e・ニアブラック地 #2c2e31・アウトライン #2c2e31 の 3 系統
- ナビ・ページ見出しのラベルは letter-spacing 0.15em で広く開ける。明朝ディスプレイは 0.03em
- UI・カードは line-height 1.2 で詰め、記事本文は 1.5 に切り替える
- 展覧会・記事は高密度のカードグリッドで並べ、画像上の白文字は暗幕 rgba(0,0,0,0.4) で支える
- font-feature-settings は normal（palt を使わない）
```
