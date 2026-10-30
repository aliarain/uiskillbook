# DESIGN.md — TRUCK FURNITURE（トラックファニチャー）

> TRUCK FURNITURE（https://www.truck-furniture.co.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 大阪発のハンドクラフト家具ブランド。無垢材と手仕事を軸にした「暮らしに寄り添う家具」を展開する。**ダーク背景 #1a1a1a** にウォームオフホワイト **#f7f6f2** を重ねた重厚かつ温かみのある世界観で、家具の素材感・空気感を写真で伝える。テキストは最小限に抑え、イメージと雰囲気で語らせる構成
- **密度**: 非常にゆったりとしたギャラリー型。大判の写真・ダーク背景・少ないテキストで、実店舗に入ったときの空気感をそのまま Web に移植している
- **キーワード**: ハンドクラフト、ダーク＆ウォーム、Anton ディスプレイ、3フォントシステム、テキストリンク CTA、イメージ・フォワード、ミニマル
- **特徴**: **3フォントシステム**が特徴。英文ディスプレイに **Anton**（Google Fonts のボールドサンセリフ）、英文本文に **Open Sans**（800 weight + 負の letter-spacing）、日本語に **Noto Sans JP**（500 weight）。従来のボタン CTA を排し、テキストリンクとナビゲーションだけで回遊させる潔い設計。エントリーページ（"ENTER"）を設けるクラシックなサイト構造。影なし・palt なし・アクセントカラーなし。ウォームオフホワイト #f7f6f2 が純白の代わりを務め、クラフト感を色調にも反映させている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

TRUCK FURNITURE のカラーパレットは**ダーク＆ウォーム**の二極。ブランド固有のアクセントカラーはなく、**ダーク #1a1a1a** と **ウォームオフホワイト #f7f6f2** のコントラストがブランドの色そのもの。木の家具と革の質感を引き立てるための、意図的に彩度ゼロの設計。

- **Dark Primary** (`#1a1a1a`): メイン背景・テキスト・ハンバーガーアイコン（rgb 26, 26, 26）— サイト全体の基調色
- **Darker** (`#171717`): ダーク面のわずかなバリエーション（rgb 23, 23, 23）— 微妙な奥行き表現

### Text & Neutral

- **Text on Dark** (`#f7f6f2`): ダーク背景上のテキスト。見出し・本文・ナビすべてに使用（rgb 247, 246, 242）— 純白 #fff を避けたウォームトーン
- **Text on Dark (90%)** (`rgba(247, 246, 242, 0.9)`): フッターラベル等の補助テキスト。わずかに透過させて階層を表現
- **Text Primary** (`#1a1a1a`): ライト面でのテキスト色（rgb 26, 26, 26）

### Surface

- **Surface Dark** (`#1a1a1a`): 主要な背景色。トップ・カテゴリ・フッターすべてがダーク
- **Surface Darker** (`#171717`): ダーク面のセクション区分
- **Surface White** (`#ffffff`): 一部のコンテンツエリア・商品詳細ページ
- **Surface Warm** (`#f7f6f2`): ウォームオフホワイトの面色。純白セクションの代替

---

## 3. Typography Rules

### 3.1 和文フォント

TRUCK FURNITURE は日本語テキストに **Noto Sans JP** を 500 weight（Medium）で使用。Regular（400）ではなく Medium を選ぶことで、ダーク背景上でもしっかりとした可読性を確保している。

- **Noto Sans JP**: メインの和文フォント（Google Fonts）
- **ヒラギノ角ゴシック Pro W3 / Hiragino Kaku Gothic Pro**: macOS フォールバック
- **メイリオ / Meiryo**: Windows フォールバック
- **MS Pゴシック / MS PGothic**: レガシー Windows フォールバック

### 3.2 欧文フォント

3つの欧文フォントを用途で使い分ける、TRUCK 固有のフォントシステム。

- **Anton**（Google Fonts）: 英文ディスプレイ見出し。"SOFAS", "TABLES", "ENTER" 等のセクションタイトル・ナビゲーション。ボールドで力強いサンセリフ
- **Open Sans**（Google Fonts）: 英文本文・フッターラベル。800 weight の太字に負の letter-spacing（-0.4px）を組み合わせた独特のタイトな組版
- **aktiv-grotesk**（Adobe Fonts）: カートカウントバッジのみに使用。限定的な用途

> **preview.html での代替**: aktiv-grotesk は Adobe Fonts（ドメインライセンス）のため、preview.html では **Open Sans** で代替

### 3.3 font-family 指定

```css
/* 英文ディスプレイ見出し（Anton） */
font-family: "Anton", sans-serif;

/* 英文本文・フッターラベル（Open Sans） */
font-family: "Open Sans", "Noto Sans JP", sans-serif;

/* 日本語本文（Noto Sans JP） */
font-family: "Noto Sans JP", "ヒラギノ角ゴシック Pro W3",
             "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
             "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* カートバッジ（aktiv-grotesk — Adobe Fonts） */
font-family: aktiv-grotesk, sans-serif;
```

**フォールバックの考え方**:
- Anton は Google Fonts で Web フォントとして読み込み。フォールバックは generic sans-serif のみ（代替不能な個性的書体）
- Open Sans は Google Fonts。Noto Sans JP を含むフォールバックチェーンで和欧混植に対応
- 日本語は Noto Sans JP 優先、OS 標準ゴシックでフォールバック。レガシー環境まで網羅
- aktiv-grotesk はバッジのみの限定使用。preview では Open Sans で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display Section (Anton) | Anton | 47px | 400 | 1.4 (65.8px) | normal | "SOFAS", "TABLES" 等 |
| Entry Title (Anton) | Anton | 37px | 400 | 1.44 (53.5px) | 3px (0.081em) | エントリーページ "ENTER" |
| Nav Link (Anton) | Anton | 30px | 400 | 1.0 (30px) | 0.9px (0.03em) | "NEWS", "ABOUT" 等 |
| Body EN (Open Sans) | Open Sans | 20px | 700 | 1.5 (30px) | **-0.4px** (-0.02em) | 英文本文。負の字間が特徴 |
| Nav Item | Noto Sans JP | 18px | 400 | 1.44 (26px) | normal | ナビゲーション項目 |
| Body (base) | Noto Sans JP | 16px | 400 | 1.44 (23.1px) | normal | body 要素のベース |
| Footer Label (Open Sans) | Open Sans | 16px | 800 | 1.4 (22.4px) | 0.48px (0.03em) | フッター見出し |
| Footer Sub-label (Open Sans) | Open Sans | 15px | 800 | 1.4 (21px) | 0.45px (0.03em) | フッターサブラベル |
| Body JP | Noto Sans JP | 13px | 500 | 1.55 (20.15px) | 0.65px (0.05em) | 日本語本文 |
| Cart Badge (aktiv-grotesk) | aktiv-grotesk | 12px | 700 | 1.0 (12px) | normal | カートカウント |

### 3.5 行間・字間

- **body ベースの行間**: `line-height: 1.44`（23.1px / 16px）— やや広めの標準設定
- **日本語本文の行間**: `line-height: 1.55`（20.15px / 13px）— 小さい文字に対して十分な行間
- **英文本文の行間**: `line-height: 1.5`（30px / 20px）— 標準的
- **Anton ディスプレイの行間**: `line-height: 1.4`（65.8px / 47px）— ディスプレイとしてはゆったりめ
- **Anton ナビの行間**: `line-height: 1.0`（30px / 30px）— タイトに詰めたナビ
- **英文本文の字間**: `letter-spacing: -0.4px`（-0.02em @ 20px）— **負の letter-spacing** が TRUCK の英文の個性
- **日本語本文の字間**: `letter-spacing: 0.65px`（0.05em @ 13px）— わずかに字間を開けて可読性を確保
- **フッターラベルの字間**: `letter-spacing: 0.48px`（0.03em @ 16px）— Open Sans 800 weight の密度に対するバランス

**ガイドライン**:
- Anton はそのまま使う。letter-spacing は normal またはごくわずか（0.03em 以下）
- Open Sans 英文本文は **-0.4px の負の tracking** が最大の特徴。タイトで力強い印象を作る
- 日本語本文は 0.05em のわずかな字間で読みやすさを確保
- Open Sans フッターは weight 800 + 0.03em。太く密度の高い英文

### 3.6 OpenType 機能

- `font-feature-settings` は指定なし（normal）
- **`palt` は使用しない**: 日本語の字詰めは行わず、letter-spacing 0.05em の均等配置
- Anton はカーニングなし（モノリニアなディスプレイ書体）

### 3.7 改行・禁則

- 特別な禁則設定なし（ブラウザデフォルト）
- セクションタイトルは英単語1語（"SOFAS", "TABLES"）のため改行は発生しない

---

## 4. Component Stylings

### Buttons

TRUCK FURNITURE は**従来のボタン CTA を持たない**。サイト全体がテキストリンクとナビゲーションで構成されており、塗りつぶしボタンもアウトラインボタンも使用しない。これはブランドの「押し付けない」姿勢をインターフェースにも反映した設計。

**ナビゲーションリンク（Anton）**

- Text: `#f7f6f2`（ダーク背景上）
- Font Family: "Anton", sans-serif
- Font Size: 30px
- Font Weight: 400
- Line Height: 1.0
- Letter Spacing: 0.9px
- Text Decoration: none
- Background: transparent

**テキストリンク（Noto Sans JP / Open Sans）**

- Text: `#f7f6f2`（ダーク背景上）/ `#1a1a1a`（ライト面上）
- Font Size: 13–16px
- Font Weight: 400–500
- Text Decoration: none（ホバーで underline と推定）

**カートカウントバッジ**

- Background: `#f7f6f2`
- Text: `#1a1a1a`
- Font Family: aktiv-grotesk, sans-serif
- Font Size: 12px
- Font Weight: 700
- Border Radius: **50%**（円形）
- 表示: カートアイコン横に小さな数字

### Inputs

サイト上にフォーム要素は最小限。検索やお問い合わせは専用ページへ遷移する設計と推定。

### Cards（カテゴリカード）

- Background: transparent（ダーク背景上に直接配置）
- カテゴリ写真 + Anton 英文タイトル（"SOFAS", "TABLES"）の構成
- Border: なし
- Border Radius: 0px（写真はフラット）
- Shadow: なし
- テキストは写真の上または下に白文字で配置

### Section Backgrounds

- Entry Page: `#1a1a1a`（ダーク）+ "ENTER" in Anton
- Main Top: `#1a1a1a`（ダーク）+ ウォームオフホワイトテキスト
- Category Grid: `#1a1a1a`（ダーク）+ 家具写真
- Content: `#ffffff` または `#f7f6f2`（ウォーム面）
- Footer: `#1a1a1a`（ダーク）+ Open Sans 800 weight ラベル

---

## 5. Layout Principles

### Container

- サイト全体がダーク背景で全幅
- コンテンツエリアは max-width 1200px 中央寄せ（推定）
- カテゴリは大判写真のグリッドレイアウト

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | バッジ内パディング |
| S | 8px | テキスト間の小余白 |
| M | 16px | セクション内の要素間 |
| L | 24px | カテゴリカード間 |
| XL | 48px | セクション間 |
| XXL | 80px | ヒーロー・フッター余白 |

### Grid

- カテゴリグリッドは 2〜3 カラム（大判写真）
- フッターは 2〜3 カラム
- 全体的にグリッドの隙間を狭くし、写真の没入感を重視

---

## 6. Depth & Elevation

TRUCK FURNITURE はシャドウを一切使わない。ダーク面（#1a1a1a）とウォーム面（#f7f6f2 / #fff）の切り替えだけで空間を構成する。影ではなく「色面の温度差」で奥行きを表現するアプローチ。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（すべての要素） |
| 1 | background `#171717` | ダーク面内の微妙な区分 |
| 2 | background `#f7f6f2` | ウォームオフホワイト面 |
| 3 | background `#1a1a1a` | 主要ダーク背景 |

---

## 7. Do's and Don'ts

### Do（推奨）

- セクションタイトルに **Anton** を使う（"SOFAS", "TABLES" 等の英文大文字1語）
- 英文本文には **Open Sans 700** + **letter-spacing: -0.4px** の負のトラッキングを使う
- 日本語本文には **Noto Sans JP 500**（Medium weight）を使う
- ダーク背景には **`#1a1a1a`** を使う（純黒 #000 ではない）
- テキストには **`#f7f6f2`** ウォームオフホワイトを使う（純白 #fff ではない）
- フッターラベルは **Open Sans 800** + letter-spacing 0.03em で太く密度高く
- 大判の写真をダーク背景上に配置し、テキストは最小限に抑える
- インタラクションはテキストリンクで構成する（ボタンではなく）
- 家具・空間の写真を主役にし、UI は控えめに

### Don't（禁止）

- 純黒 `#000000` を背景やテキストに使わない（`#1a1a1a` が TRUCK のトーン）
- 純白 `#ffffff` をテキスト色に使わない（`#f7f6f2` ウォームオフホワイトが基本）
- 塗りつぶしボタンやアウトラインボタンを CTA に使わない（テキストリンクが TRUCK の流儀）
- 鮮やかなアクセントカラーを使わない（無彩色パレットを保つ）
- Anton を本文や小さいテキストに使わない（ディスプレイ・ナビ専用）
- Open Sans の英文本文で letter-spacing を 0 や正の値にしない（-0.4px の負のトラッキングが個性）
- 日本語テキストに Anton を使わない（和文は Noto Sans JP）
- Noto Sans JP を Regular（400）で使わない（Medium 500 が TRUCK のウェイト）
- `palt` を使わない
- シャドウ（box-shadow）を使わない（色面の温度差で空間を作る）
- 装飾的な UI 要素（グラデーション、アニメーション、カラフルなアイコン）を追加しない

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- Anton セクションタイトル 47px → 28–32px 程度
- Anton ナビリンク 30px → 22–24px 程度
- カテゴリグリッドは 1 カラムに折り返す
- 英文本文 Open Sans 20px → 16–18px
- ナビゲーションはハンバーガー化
- ダークセクションのパディング縮小

### タッチターゲット

- ナビゲーションリンクは Anton 30px / line-height 1.0 のため、タップ領域の padding 追加が必要
- テキストリンクベースの UI のため、モバイルでは十分なヒットエリア（最小 44px × 44px）を確保する

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: TRUCK FURNITURE（トラックファニチャー）
Origin: 大阪発のハンドクラフト家具ブランド
Dark Primary: #1a1a1a
Dark Variant: #171717
Warm Off-White: #f7f6f2
Warm Off-White 90%: rgba(247, 246, 242, 0.9)
Surface White: #ffffff
Display Font: "Anton", sans-serif (Google Fonts)
Body EN Font: "Open Sans", "Noto Sans JP", sans-serif (Google Fonts)
Body JP Font: "Noto Sans JP", "ヒラギノ角ゴシック Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif
Badge Font: aktiv-grotesk, sans-serif (Adobe Fonts — preview では Open Sans で代替)
Display Size: 47px / 400 / line-height 1.4 / letter-spacing normal
Entry Title: 37px / 400 / line-height 1.44 / letter-spacing 3px
Nav Link: 30px / 400 / line-height 1.0 / letter-spacing 0.9px
Body EN: 20px / 700 / line-height 1.5 / letter-spacing -0.4px
Body JP: 13px / 500 / line-height 1.55 / letter-spacing 0.65px
Footer Label: 16px / 800 / line-height 1.4 / letter-spacing 0.48px
CTA Style: テキストリンクのみ（ボタンなし）
palt: 使用しない
Shadow: 使用しない
```

### プロンプト例

```
TRUCK FURNITURE（トラックファニチャー）のデザインシステムに従って、ソファカテゴリの一覧ページを作成してください。
- 全体の背景は #1a1a1a ダーク
- セクションタイトル "SOFAS" は Anton 47px / 400 / line-height 1.4 / color #f7f6f2
- 英文説明文は Open Sans 20px / 700 / line-height 1.5 / letter-spacing -0.4px / color #f7f6f2
- 日本語説明文は Noto Sans JP 13px / 500 / line-height 1.55 / letter-spacing 0.65px / color #f7f6f2
- フッターラベル "INFORMATION" は Open Sans 16px / 800 / letter-spacing 0.48px / color rgba(247,246,242,0.9)
- テキスト色はすべて #f7f6f2（ウォームオフホワイト）。純白 #fff は使わない
- CTA はテキストリンクのみ。ボタンは使わない
- カテゴリ写真は大判でフラット（角丸なし・影なし）
- シャドウは一切使わない。色面（#1a1a1a / #171717 / #f7f6f2）の切り替えで空間を作る
```

### 字詰め・組版の重要ポイント

1. **3フォントシステムの使い分け**: Anton（英文ディスプレイ・ナビ）/ Open Sans（英文本文・フッター）/ Noto Sans JP（日本語全般）。用途ごとにフォントが完全に分離している
2. **Open Sans の負のトラッキング**: 英文本文で `letter-spacing: -0.4px` は一般的ではないが、TRUCK の個性。タイトで凝縮された印象を作る。この値を 0 に変えるとブランドのトーンが崩れる
3. **Noto Sans JP 500（Medium）**: Regular 400 ではなく Medium を選ぶことで、ダーク背景上での可読性と存在感を確保。フォント指定時に `font-weight: 500` を忘れない
4. **ウォームオフホワイト #f7f6f2**: 純白 #ffffff ではなく、わずかに黄みがかったオフホワイト。木の家具と革の質感に通じる温もりを画面全体に与える。テキスト・面色ともにこの色を基調とする
5. **ボタンレスの UI**: CTA ボタンが存在しない。すべてのインタラクションをテキストリンクとナビゲーションで構成する。「押し付けない」ブランド姿勢のインターフェース表現
6. **ダーク #1a1a1a**: cado の #333333 より深い、ほぼ黒に近いダーク。家具の撮影スタジオのような暗さで、写真と文字だけが浮かび上がる

---

**取得日**: 2026-05-09
**出典**: https://www.truck-furniture.co.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
