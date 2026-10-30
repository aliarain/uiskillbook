# DESIGN.md — niko and...（ニコアンド）

> niko and...（https://www.nikoand.jp/）のデザイン仕様書。
> BAYCREWS グループのファッション・ライフスタイルブランド。衣食住遊をテーマにしたカルチャーメディア兼 EC サイト。
> 実サイトの computed style 実測（2026-05-29 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: モノクロ（黒×白）を基調にした**エディトリアル・マガジン**スタイル。季節のキャンペーンカラー（コーラル `#dc5c5b`、ティール `#5ec6c5` 等）をヒーローやセクション背景にスプラッシュさせ、ファッション誌のような鮮度を演出
- **密度**: ベースフォントサイズが **10px** と極端に小さく、ナビや日付も 12px 前後。コンパクトで密度の高い誌面レイアウト。日本語本文（記事内）は 12〜14px で line-height 1.71〜1.75 と日本語としては標準的な行間
- **キーワード**: エディトリアル、マガジン、プレイフル、モノクロ＋季節色、絵文字ナビゲーション、ryo-gothic-plusn
- **特徴**:
  - 和文フォントに **ryo-gothic-plusn（リョウゴシック プラスN、Morisawa Adobe Fonts）** を採用。日本語テキストには `.jp` クラスで `font-feature-settings: "palt"` を適用
  - 欧文は **Helvetica Neue** を font-family の先頭に置く欧文優先の設計（note と同様の方針）
  - **ナビゲーションに絵文字を活用**（clothes, food, live, play 等のカテゴリに絵文字アイコン）。Noto Color Emoji をフォントスタックに含む
  - **CTA ボタンは黒アウトラインのピル**（`border: 1px solid #000`, `border-radius: 15px`）。ブランドカラーの塗りボタンは持たない
  - **CSS Custom Properties で季節・セクション色を管理**: `--hilight-color`（ティール）、`--hilight-color2`（コーラル）、`--nikoblog-color`（ブルー）、`--marumaru-color`（ピンク）、`--music-color1/2`（ネイビー/オレンジレッド）
  - セクション背景にウォームベージュ `#eee9e2`、ソフトピンク `#e9ccd8`、ウォームイエロー `#ffd570` 等の暖色系面を使う
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Seasonal

- **Hilight Color 1** (`#5ec6c5`): ティールアクセント。`--hilight-color` CSS 変数。セクション背景やアクセントに使用
- **Hilight Color 2** (`#dc5c5b`): コーラル / ウォームレッド。`--hilight-color2`。季節のヒーロー背景
- **Niko Blog Color** (`#4b77d0`): ブログセクション用ブルー。`--nikoblog-color`
- **Marumaru Color** (`#ffa0c8`): ピンクアクセント。`--marumaru-color`
- **Music Color 1** (`#183870`): ダークネイビー。`--music-color1`。音楽セクション
- **Music Color 2** (`#d65731`): オレンジレッド。`--music-color2`。音楽セクション

### Section Backgrounds

- **Warm Beige** (`#eee9e2`): セクション背景。ライフスタイル感のある暖色面
- **Soft Pink** (`#e9ccd8`): セクション背景。フェミニンなアクセント面
- **Warm Yellow** (`#ffd570`): セクション背景。ポップで明るいアクセント面

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 全テキスト・ボタンボーダー |
| Near White | `#fefefe` | (254, 254, 254) | カード面 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・ボタン背景 |

### Semantic（実測未確認・推奨値）

実サイトではエラー／成功色は表面化していない。EC・フォーム向けに推奨する補完値:

- **Danger**: `#dc2626` 程度のレッド
- **Success**: `#16a34a` 程度のグリーン
- **Warning**: `#d97706` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ryo-gothic-plusn（リョウゴシック プラスN）** を最優先。Morisawa 製、Adobe Fonts で配信
- **フォールバック**: `"Hiragino Kaku Gothic ProN"` → `"ヒラギノ角ゴ ProN"` → `"Hiragino Kaku Gothic Pro"` → `"ヒラギノ角ゴ Pro"` → `"Hiragino Sans"` → `ヒラギノ角ゴシック` → `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Helvetica Neue** を font-family の先頭に配置（欧文優先）
- Helvetica Neue Bold（weight 700）: 英語見出し「INFORMATION」「FEATURE」等
- Helvetica Neue Light（weight 300 相当）: 英語サブラベル

### 3.3 font-family 指定

```css
/* 全体（デフォルト） */
font-family: "Helvetica Neue", ryo-gothic-plusn,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
  "Hiragino Sans", ヒラギノ角ゴシック, sans-serif;

/* 日本語テキスト（.jp クラス） */
font-family: ryo-gothic-plusn,
  "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
  "Hiragino Sans", ヒラギノ角ゴシック, sans-serif;
font-feature-settings: "palt";

/* 絵文字対応コンテンツ */
font-family: "Noto Color Emoji", /* 上記チェーンに追加 */;
```

**フォールバックの考え方**:
- 欧文表示を Helvetica Neue で揃えたいためデフォルトでは先頭に配置
- 日本語テキスト（`.jp` クラス）では Helvetica Neue を外し、ryo-gothic-plusn の欧文グリフを優先
- ヒラギノは **ProN と Pro の両方を併記**（環境差を吸収）
- 最後に `"Hiragino Sans"` → `ヒラギノ角ゴシック` で macOS の新旧ヒラギノをカバー

> **代替フォント注記**: ryo-gothic-plusn は Adobe Fonts のドメインライセンスのため、preview.html やローカル環境では表示されない。代替として **Zen Kaku Gothic New**（Google Fonts、Morisawa 系で字形が近い）を使用すると、ryo-gothic-plusn の丸みと柔らかさに近い印象が出る。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ / 記事ページ、2026-05-29 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Features | 備考 |
|------|------|------|--------|-------------|----------------|----------|------|
| Body (default) | Helvetica Neue + ryo-gothic | 10px | 400 | 1.15 | normal | none | 非常に小さいベースサイズ |
| H2 Section (en) | Helvetica Neue | 24px | 400 | 1.15 | normal | none | 英語セクションタイトル「INFORMATION」等 |
| H2 Article (jp) | ryo-gothic-plusn | 12px | 400 | 1.75 (21px) | normal | `"palt"` | 記事タイトル（日本語） |
| H2 Article Title (jp) | ryo-gothic-plusn | 14px | 400 | 1.71 (24px) | normal | `"palt"` | 記事本文タイトル |
| H3 Feature (en) | Helvetica Neue Bold | 14px | 700 | 1.15 | normal | none | 英語フィーチャータイトル |
| Span Headline (jp) | ryo-gothic-plusn | 16px | 700 | 1.5 (24px) | normal | `"palt"` | 太字日本語見出し |
| P Head | default | 14px | 400 | 1.15 | normal | none | セクションラベル |
| P Marquee | default | 13px | 400 | 1.15 | normal | none | マーキーコンテンツ |
| P Date | default | 12px | 400 | 1.15 | normal | none | 日付テキスト |
| Nav Link | default | 12px | 500 | 1.15 | normal | none | ナビゲーション項目 |

### 3.5 行間・字間

**行間 (line-height)** -- 実測:
- **デフォルト (10px base)**: `1.15` -- サイト全体の密な組み
- **日本語記事本文 (12〜14px)**: `1.71〜1.75` -- 日本語として標準的な読みやすさ
- **日本語太字見出し (16px)**: `1.5` -- 見出しとしてやや広め
- **英語セクションタイトル (24px)**: `1.15` -- タイト

**字間 (letter-spacing)** -- 実測:
- **全要素**: `normal`（明示的な letter-spacing 指定なし）
- **日本語テキスト**: `font-feature-settings: "palt"` で字詰めを行い、letter-spacing では調整しない方針

**ガイドライン**:
- niko and... は **letter-spacing を使わず `palt` で字詰め**する設計。letter-spacing と palt を併用しない
- デフォルトの line-height `1.15` は欧文・UI要素向け。日本語本文は `.jp` クラスで `1.71〜1.75` に拡張
- 英語の見出しは weight で強弱をつける（Bold vs Light）。日本語は palt の有無で質感を変える

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- マーキーテキストは `white-space: nowrap`
- ピルナビは `white-space: nowrap`

### 3.7 OpenType 機能

```css
/* 日本語テキスト（.jp クラス） */
font-feature-settings: "palt";

/* デフォルト（欧文・UI） */
font-feature-settings: normal;
```

- **palt**: 日本語テキストにのみ適用。`.jp` クラスで切り替える設計
- 欧文やナビゲーション要素には palt を適用しない
- letter-spacing は使わず、字詰めは palt に一任する方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Navigation Pill（黒アウトライン）** -- メインのナビゲーションボタン
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `0px 15px`
- Border Radius: `15px`（ピル）
- Font: 12px, weight 500

**Emoji Pill（小さめ）** -- 絵文字付きカテゴリナビ
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `0px 8px`
- Border Radius: `12.5px`（ピル）
- Font: 12px, weight 400

**Text Link** -- 記事リンク等
- Background: transparent
- Text: `#000000`
- Font: 12〜14px, weight 400
- Decoration: none / underline on hover

> **注**: niko and... には塗りつぶし型の CTA ボタンがない。すべてのボタンは**黒アウトラインのピル**か**テキストリンク**。ブランドの控えめでエディトリアルな姿勢を反映した設計

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #000000`
- Border (focus): `2px solid #000000`
- Border Radius: `0px`（角張ったデザイン）
- Padding: `8px 12px`
- Font: ryo-gothic-plusn, 14px, weight 400
- Height: `40px`

### Cards / Surfaces

- Background: `#fefefe`（Near White）/ `#ffffff`（White）
- Border: `1px solid #000000` または border なし
- Border Radius: `0px`（基本的にシャープエッジ）
- Shadow: なし（フラットデザイン）

### Header

- Background: `#ffffff`（白）
- Position: fixed top
- ロゴ + ナビリンク + 絵文字ピルのコンパクトな構成

### Footer

- Background: `#000000`（黒）
- Text: `#ffffff`（白）
- コントラストの強いモノクロ反転

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 絵文字とテキストの間 |
| S | 8px | ピル内の縦余白・カード間 |
| M | 16px | セクション内の段落間 |
| L | 24px | セクション間の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `24px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | カード・入力欄・画像（シャープエッジ基調） |
| Small | 12.5px | 小ピル（絵文字ナビ） |
| Medium | 15px | ナビゲーションピル |
| Large | 20px | 大きめピル（必要に応じて） |

### Grid

- マガジン型グリッド（不規則なサイズのカードが並ぶ）
- 商品・記事カードは 2〜4 カラムで構成
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 全要素（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.06)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 8px 24px rgba(0, 0, 0, 0.10)` | モーダル・ポップオーバー（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は**セクション背景色の切り替え**（白 → ベージュ → ピンク → イエロー）で表現
- ボタンの立体感は**黒ボーダー**のみで作る。影は使わない
- マガジン型のフラットデザインが基本方針

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **ryo-gothic-plusn を最優先**、フォールバックはヒラギノ角ゴ ProN → ヒラギノ角ゴ Pro → Hiragino Sans → sans-serif
- 欧文は **Helvetica Neue** を先頭に置く（デフォルト）。日本語テキストでは `.jp` クラスで外す
- 日本語テキストには `font-feature-settings: "palt"` を適用する（`.jp` クラス）
- ボタンは **黒アウトラインのピル**（`border: 1px solid #000`, `border-radius: 15px`）を基本にする
- セクション背景には **季節色やブランドカラー**（`#eee9e2`, `#e9ccd8`, `#ffd570`, `#dc5c5b`, `#5ec6c5`）を大胆に使う
- テキスト色は **純黒 `#000000`** で統一する（niko and... はコントラストを恐れない）
- カード・画像は **シャープエッジ**（border-radius: 0）を基本にする
- ナビゲーションに **絵文字**を積極的に使い、プレイフルさを出す

### Don't（禁止）

- **塗りつぶしの CTA ボタン**を作らない -- niko and... はアウトラインピルが基本。ブランドカラーで塗ったボタンはデザイン方針に反する
- **大きなフォントサイズ**（24px 超）を日本語本文に使わない -- 英語セクションタイトルの 24px が最大級。全体がコンパクト
- **letter-spacing を明示的に指定しない** -- palt に字詰めを任せる設計。letter-spacing と palt の併用は避ける
- **角丸の大きなカード**（border-radius 12px〜）を使わない -- エッジはシャープが基本
- **冷たいグレー**（`#f3f4f6`, `#6b7280` 等）をセクション背景に使わない -- niko and... は暖色系（ベージュ、ピンク、イエロー）が基本
- **影（box-shadow）で立体感を出さない** -- フラットデザイン。立体感は背景色の切り替えとボーダーで表現
- ナビゲーションから **絵文字を省略しない** -- プレイフルさはブランドの核

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | 1カラム・ハンバーガーナビ |
| Tablet | ≤ 1023px | 2カラム |
| Desktop | > 1024px | 3〜4カラムのマガジンレイアウト |

### モバイル時の調整

- 英語セクションタイトル: 24px → 18〜20px
- 日本語記事タイトル: 14px → 12px
- ナビゲーションはハンバーガーメニューに格納
- 絵文字ピルは横スクロール対応

### タッチターゲット

- ピルナビ: 高さ 30px 程度（padding `0 15px` + 12px font + line-height 1.15）
- 最小タッチターゲット 44px 未満のため、モバイルでは padding を拡張推奨

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Hilight Teal: #5ec6c5
Hilight Coral: #dc5c5b
Blog Blue: #4b77d0
Marumaru Pink: #ffa0c8
Music Navy: #183870
Music Orange: #d65731
Warm Beige BG: #eee9e2
Soft Pink BG: #e9ccd8
Warm Yellow BG: #ffd570
Text: #000000
Card Surface: #fefefe
White: #ffffff

Font (default): "Helvetica Neue", ryo-gothic-plusn, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "Hiragino Sans", ヒラギノ角ゴシック, sans-serif
Font (jp): ryo-gothic-plusn, "Hiragino Kaku Gothic ProN", ... sans-serif + font-feature-settings: "palt"
（ryo-gothic-plusn 不在時の代替: Zen Kaku Gothic New）

Body Size: 10px / line-height 1.15 / weight 400
JP Article Title: 14px / line-height 1.71 / weight 400 / palt
JP Headline Bold: 16px / line-height 1.5 / weight 700 / palt
EN Section Title: 24px / line-height 1.15 / weight 400
Nav: 12px / weight 500

Button: bg #fff / text #000 / border 1px solid #000 / radius 15px / padding 0 15px
Shadow: none（フラットデザイン）
Card radius: 0px（シャープエッジ）
```

### プロンプト例

```
niko and... のデザインに従って、ライフスタイルメディアのトップページを作成してください。
- フォント: "Helvetica Neue", ryo-gothic-plusn, "Hiragino Kaku Gothic ProN", ... sans-serif
- 日本語テキスト: ryo-gothic-plusn + font-feature-settings: "palt" / letter-spacing は指定しない
- 英語セクションタイトル: 24px / weight 400 / Helvetica Neue / color #000000
- 日本語記事タイトル: 14px / weight 400 / line-height 1.71 / palt
- 日本語太字見出し: 16px / weight 700 / line-height 1.5 / palt
- ナビゲーション: 12px / weight 500 / 黒アウトラインピル（border 1px solid #000, radius 15px）に絵文字付き
- テキスト色: 純黒 #000000 で統一
- セクション背景: 白 → ウォームベージュ #eee9e2 → ソフトピンク #e9ccd8 → ウォームイエロー #ffd570 でリズムを作る
- ヒーロー: 季節色 #dc5c5b（コーラル）または #5ec6c5（ティール）の全面塗り
- カード: 背景 #fefefe / border-radius 0 / shadow なし / フラット
- ボタン: bg #fff / text #000 / border 1px solid #000 / radius 15px（アウトラインピル）
- 塗りつぶしボタンは使わない
- 影（box-shadow）は使わない。立体感は背景色の切り替えで
- 全体がコンパクト。ベースフォント 10px、最大でもセクションタイトル 24px
```
