# DESIGN.md — CAPCOM (カプコン)

> CAPCOM（https://www.capcom.co.jp/）のデザイン仕様書。
> 1983年設立の大手ゲームメーカー。ストリートファイター、バイオハザード、モンスターハンター、デビルメイクライ等を擁する。
> コーポレートサイトはゲーム情報・IR・プレスリリースのポータル。
> 実サイトの computed style 実測（2026-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白基調のクリーンなコーポレートポータル。各コンテンツ領域を **色分けされたセクションカラー** で識別する情報設計が特徴。ゲーム企業らしい彩度の高いカテゴリカラーと、堅実な企業サイトとしての構造が共存
- **密度**: 本文 line-height 1.0〜1.5 と密度が高い。14px / 13px の小さめテキストが中心で、ニュースポータルに近い情報密度
- **キーワード**: コーポレートポータル、セクションカラー色分け、コンパクト組版、レガシーCSS、ヒラギノ角ゴ
- **特徴**:
  - **カテゴリカラーシステム**: ゲーム情報=ブルー `#0063a2`、プレスリリース=ティール `#3a6565`、IR・会社情報=パープル `#6a458d`、イベント=シアン `#008fa1` と、セクションごとにブランドカラーを割り当てる大胆な配色
  - CSS Custom Properties は使用していない（レガシーなインライン寄りの CSS 設計）
  - フォントは **ヒラギノ角ゴ Pro W3** を筆頭とするシステムフォントスタック。Webフォントは不使用
  - OpenType 機能（palt / kern）は未使用
  - コーポレートトップと各ゲームページでテンプレートが異なり、h1 サイズが 14px〜32px まで変動する
  - ナビゲーションに **負の letter-spacing (-2px)** を使うコンパクト設計
  - ダークモード非対応

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Section Colors（セクション識別カラー）

CAPCOMの最大の特徴である、コンテンツ領域ごとの色分けシステム:

| Section | hex | 用途 |
|---------|-----|------|
| **Game Blue** | `#0063a2` | 「ゲーム情報」セクション。最多使用のブランドカラー（22件） |
| **Press Teal** | `#3a6565` | 「プレスリリース」セクション（18件） |
| **IR Purple** | `#6a458d` | 「IR・会社情報」セクション（3件） |
| **Event Cyan** | `#008fa1` | 「イベント」セクション（2件） |

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Sub** (`#555555`): 補足テキスト
- **Link Blue** (`#0044ab`): ニュースリンクの文字色
- **Dark BG** (`#141414`): ダークセクション背景（フッター付近等）
- **Light Gray BG** (`#f4f4f4`): テーブル・詳細ページの面背景
- **Border** (`#d8d8d8`): 標準ボーダー
- **Border Sub** (`#888888`): ニュースリンクのボーダー
- **Copyright Gray** (`#cccccc`): コピーライト文字色
- **Footer BG** (`#f2f2f2`): フッターボタン背景
- **Background** (`#ffffff`): ページ背景

### Semantic（推奨補完値）

実サイトにはエラー/成功/警告色が表面化していないため、セクションカラーとの整合性を考慮した補完値:

- **Danger**: `#cc3333` — セクションカラーと彩度を揃えたレッド
- **Success**: `#2e8b57` — ティールに近い落ち着いたグリーン
- **Warning**: `#d4920a` — ゲーム情報ブルーと対比するオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: ヒラギノ角ゴ Pro W3 を最優先。トップページとゲームページで微妙にスタック構成が異なる
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、和文フォントの欧文グリフを使用
- フォールバックに Osaka、MS PGothic を含むレガシー構成

### 3.3 font-family 指定

```css
/* トップページ（コーポレート） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* ゲーム個別ページ */
font-family: "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- トップページは **ヒラギノ角ゴ Pro W3**（日本語名指定 + 英語名のダブル指定）を筆頭に、Windows 向けメイリオ、古い Mac 向け Osaka、さらに古い Windows 向け MS PGothic まで幅広くカバーするレガシー構成
- ゲーム個別ページは **Hiragino Kaku Gothic ProN**（Pro**N** 版）を使用。トップページの Pro W3 とは別バリアント
- Webフォントは一切使用しない完全システムフォント運用

> **Pro と ProN の違い**: Pro（Apple 従来版）は JIS X 0208 の文字セットに従い、一部の漢字が旧字体。ProN（JIS X 0213 準拠）は新字体に更新されている。ページテンプレートごとに使い分けがある

> **代替フォント注記**: ヒラギノ角ゴは macOS / iOS のシステムフォントのため、Windows や Linux では表示されない。プレビューや社外環境では **Noto Sans JP** を代替として使用すると、ニュートラルなゴシック体の印象が近い（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ + ゲーム情報ページ、2026-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Page Title (game) | Hiragino Kaku Gothic ProN | 32px | 700 | normal | normal | `#333333` | ゲーム個別ページの h1 |
| Page Title (top) | ヒラギノ角ゴ Pro W3 | 14px | 700 | 1.0 | normal | `#333333` | コーポレートトップの h1（小さい） |
| Section Title | ヒラギノ角ゴ Pro W3 | 14px | 700 | 1.5 (21px) | normal | `#ffffff` | 「ゲーム情報」等のセクション見出し。色付き背景の上に白文字 |
| Nav Text | ヒラギノ角ゴ Pro W3 | 13px | 700 | 1.5 (19.5px) | -2px | `#333333` | 「モバイル・アプリゲーム」等。**負の letter-spacing** |
| Body | ヒラギノ角ゴ Pro W3 | 14px | 400 | 1.0 | normal | `#333333` | 一般テキスト |
| Body Sub | ヒラギノ角ゴ Pro W3 | 14px | 700 | normal | normal | `#555555` | 「企業・投資家情報」等の太字サブテキスト |
| Banner Caption | ヒラギノ角ゴ Pro W3 | 13px | 400 | 1.0 | normal | `#ffffff` | ヒーロースライダー上の白文字キャプション |
| News Link | ヒラギノ角ゴ Pro W3 | 12px | 700 | normal | normal | `#0044ab` | ニュースリンク |
| Footer | ヒラギノ角ゴ Pro W3 | 14px | 400 | normal | normal | `#cccccc` | コピーライト |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `1.0`（14px / 14px）— 一般的な日本語サイトより非常にタイト
- **セクション見出し (14px)**: `1.5`（21px / 14px）
- **ナビ (13px)**: `1.5`（19.5px / 13px）
- **ゲームページ h1 (32px)**: `normal`（ブラウザ既定、約 1.2）

**字間 (letter-spacing)** — 実測:
- **ナビ**: `-2px`（-0.15em 相当）。日本語ナビとしては極端に詰める。タブ状のコンパクトレイアウトのため
- **その他の要素**: `normal`（letter-spacing の明示指定なし）

**ガイドライン**:
- CAPCOM のコーポレートサイトは **line-height 1.0〜1.5** の密度の高い組版。記事ページではなくポータルサイト向けの設計
- ナビの **-2px letter-spacing** は特殊。再現時はカテゴリタブ幅の制約に注意
- 一般的な日本語サイトの推奨（line-height 1.7〜2.0）とは異なる方針であることを認識した上で運用する

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: auto;
```

- レガシーなテーブルレイアウトに近い構成のため、禁則処理の明示設定は少ない
- ニュースリスト等は固定幅のカラム内に収めるスタイル

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- `palt` / `kern` 等の OpenType 機能は一切使用していない
- システムフォントの既定メトリクスに依存する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**News Link Button** — ニュースカテゴリリンク
- Background: transparent
- Text: `#0044ab`
- Border: `2px solid #888888`
- Padding: `15px 20px`
- Border Radius: `4px`
- Font: 12px, weight 700

**Footer Button** — フッターアクション
- Background: `#f2f2f2`
- Text: `#333333`
- Border: `1px solid #d8d8d8`
- Padding: 内部 line-height `48px` で高さ確保
- Border Radius: `4px`
- Font: 14px, weight 400

**Section Header Button** — カテゴリセクション見出し
- Background: セクションカラー（`#0063a2` / `#3a6565` / `#6a458d` / `#008fa1`）
- Text: `#ffffff`
- Padding: セクション全幅
- Border Radius: `0`（角型）
- Font: 14px, weight 700

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #d8d8d8`
- Border (focus): `2px solid #0063a2`（Game Blue をフォーカス色に）
- Border Radius: `4px`
- Padding: `8px 12px`
- Font: 14px, weight 400
- Height: `36px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f4f4f4`（テーブル・詳細背景）
- Border: `1px solid #d8d8d8`
- Border Radius: `0`〜`4px`（基本的に角型〜微小角丸）
- Shadow: 基本なし（フラットデザイン）

### Header

- Background: `#ffffff` または各セクションカラー
- Border Bottom: セクションカラーに依存
- Position: static（スクロール追従なし）

### Footer

- Background: `#141414`（ダーク）
- Text: `#cccccc`
- Padding: `20px 0`

---

## 5. Layout Principles

### Spacing Scale（実測ベースの 4px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | インライン要素間 |
| S | 8px | リストアイテム間 |
| M | 15px | ボタン内余白（15px 20px） |
| L | 20px | セクション内余白 |
| XL | 40px | セクション間 |
| XXL | 60px | 主要セクション間 |

### Container

- Max Width: `960px` 程度（コーポレートトップ）
- Padding (horizontal): `15px`〜`20px`

### Grid

- テーブルレイアウトに近い CSS 構成が残る
- ニュースリストは 1 カラム、ゲーム一覧は 3〜4 カラムグリッド
- Gutter: `10px`〜`20px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | ほぼ全要素（フラット基調） |
| 1 | `0 2px 4px rgba(0, 0, 0, 0.1)` | ホバー時の軽い浮き（推奨） |
| 2 | `0 4px 12px rgba(0, 0, 0, 0.15)` | ドロップダウン・ポップオーバー（推奨） |
| 3 | `0 8px 24px rgba(0, 0, 0, 0.2)` | モーダル（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 階層の表現は **セクションカラーの帯** と **背景色の切り替え**（白 / `#f4f4f4` / `#141414`）で行う
- 影を使うより **ボーダー** `#d8d8d8` で区切る方がサイトのトーンに合う

---

## 7. Do's and Don'ts

### Do（推奨）

- セクションごとに **カテゴリカラー**（Blue / Teal / Purple / Cyan）を一貫して使う。色でコンテンツ領域を識別する CAPCOM のナビゲーション設計を踏襲する
- 和文フォントは **ヒラギノ角ゴ Pro W3** を最優先に、メイリオ → Osaka → MS PGothic のレガシーフォールバックを維持する
- テキストサイズは **13px〜14px** を中心に、情報密度の高いポータルレイアウトを保つ
- セクション見出しは **色付き帯の上に白文字**（14px / 700）で統一する
- ボーダーには **`#d8d8d8`** を使い、サイト全体のグリッドを明示する
- ダーク背景（`#141414`）はフッター等の限定領域にとどめる
- ニュースリンクは **`#0044ab`** を使い、セクションカラーの `#0063a2` とは区別する

### Don't（禁止）

- カテゴリカラーを **セクション以外でランダムに使わない** — 色の識別機能が壊れる
- ヒラギノ角ゴのフォールバックに **Noto Sans JP や游ゴシックを混ぜない** — CAPCOM のレガシースタックはシステムフォント完結
- 本文に `line-height: 2.0` 以上を使わない — ポータルの密度が崩れる
- セクション見出しの **白文字をグレーにしない** — 背景色とのコントラストが弱まる
- **border-radius を 8px 以上にしない** — CAPCOM は 0〜4px の角型デザイン。丸み過剰はブランドに合わない
- ナビの letter-spacing `-2px` を **本文にまで適用しない** — ナビのコンパクトタブ専用の処理

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 640px | モバイルレイアウト。1カラム化 |
| Tablet | ≤ 960px | タブレット。グリッド 2カラム化 |
| Desktop | > 960px | デスクトップ。フルレイアウト |

### モバイル時の調整

- ゲームページ h1: 32px → 24px
- ナビの letter-spacing -2px は解除し、メニューをドロワー化
- ニュースリスト: 固定幅テーブル → 1カラムリスト
- セクションカラー帯は維持（色による識別をモバイルでも保つ）

### タッチターゲット

- ニュースリンクボタン: padding `15px 20px` で高さ 44px 以上を確保
- フッターボタン: line-height `48px` で WCAG 基準クリア

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Section Colors:
  Game Blue:    #0063a2
  Press Teal:   #3a6565
  IR Purple:    #6a458d
  Event Cyan:   #008fa1

Text Primary:   #333333
Text Sub:       #555555
Link Blue:      #0044ab
Dark BG:        #141414
Light Gray BG:  #f4f4f4
Border:         #d8d8d8
Copyright:      #cccccc
Background:     #ffffff

Font (top): "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Font (game): "Hiragino Kaku Gothic ProN", sans-serif
（環境非依存の代替: Noto Sans JP）

Body Size: 14px / line-height 1.0〜1.5 / weight 400 / letter-spacing normal
Section Title: 14px / weight 700 / line-height 1.5 / white on section color
Nav: 13px / weight 700 / letter-spacing -2px
Game Page H1: 32px / weight 700 / line-height normal
News Link: 12px / weight 700 / color #0044ab / border 2px solid #888

Border Radius: 0〜4px（角型基調）
Shadow: 基本 none。階層はセクションカラー帯と背景色切り替えで表現
```

### プロンプト例

```
CAPCOMのデザインに従って、ゲーム情報ポータルのニュース一覧セクションを作成してください。
- フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
- セクション見出し: 背景 #0063a2（Game Blue）に白文字 14px / weight 700 / line-height 1.5
- ニュースリンク: #0044ab / 12px / weight 700 / border 2px solid #888 / radius 4px
- 本文: 14px / weight 400 / line-height 1.0 / color #333333
- 補足テキスト: 14px / weight 700 / color #555555
- ボーダー: #d8d8d8
- 背景: #ffffff（メイン）/ #f4f4f4（テーブル行）
- border-radius は 0〜4px（角型）
- セクションカラーで領域を色分け: ゲーム=#0063a2, プレスリリース=#3a6565, IR=#6a458d, イベント=#008fa1
- 影は使わない。ボーダーと背景色で階層を表現
```
