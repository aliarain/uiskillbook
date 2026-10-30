# DESIGN.md — ミナ ペルホネン (mina perhonen)

> ミナ ペルホネン（https://www.mina-perhonen.jp/）のデザイン仕様書。
> 2026-05-08 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1995年にデザイナー皆川明が立ち上げたテキスタイル/ファッションブランドの公式サイト。「100年続くデザイン」「特別な日常」を体現する、絵本やテキスタイル画集のように余白が広く、文字と写真の関係に語りがある編集型サイト
- **密度**: テキスタイルとプロダクト写真が主役。ナビゲーションと本文は游明朝で抑制的に組み、欧文には Adobe Garamond Pro を当てて手仕事の温度感を出す
- **キーワード**: 手仕事、明朝体、テキスタイル、編集的、静謐、文学的、二言語混植
- **特徴**: **見出しから本文まですべてが明朝体（游明朝）**。欧文セクション名（FASHION / TEXTILE / Season）にだけ Helvetica Neue や Adobe Garamond Pro を入れて空気を変える。彩度は抑え、警告のみ純赤（#ff0000）で目立たせる。CTA ボタンは存在せず、リンクテキストとカテゴリラベルだけで動線を構成する**ボタンレス UI**

---

## 2. Color Palette & Roles

ミナ ペルホネンは色数を極端に絞る。コンテンツ（テキスタイルや製品写真）が彩度を持つため、UI は無彩色に徹している。

### Primary（ブランドカラー）

- **Ink** (`#212121`): 本文・見出しの基調色。純黒ではなく深い墨色（rgb 33, 33, 33）。明朝の縦画を上品に見せる
- **Paper** (`#ffffff`): 背景。白い紙のような素地
- **Mute Gray** (`#999999`): 日付、補足、二次情報

### Accent / Warning

- **Alert Red** (`#ff0000`): "＊かごには何も入っていません。" のメッセージのみ純赤を使用。装飾的な彩色には使わない

### Surface

- **Header** (`#ffffff`): ヘッダー背景
- **Pill / Badge** (`#333333`): ナビゲーションのオン状態などで使われるダーク pill 背景

---

## 3. Typography Rules

### 3.1 和文フォント

- **Yu Mincho 系**: 「游明朝」「Yu Mincho」「YuMincho」を順に試行
- **Noto Serif JP**: Webフォントフォールバック
- **serif**: 最終フォールバック
- **副: Yu Gothic 系**: 「サインイン・登録」など限定的にサンセリフを当てる箇所のみ

明朝体を全面採用しているサイトは少数派。ミナ ペルホネンは「ブランド = 紙の本（書籍）」というメタファーを徹底している。

### 3.2 欧文フォント

- **Adobe Garamond Pro**: ナビゲーションの "Season" など格調を要する英語タイトルに使用
- **Helvetica Neue → arial → sans-serif**: 横組み英字、ロゴテキスト、セクション英語ラベル（FASHION, TEXTILE 等）、コピーライト、日付
- **adobe-garamond-pro**: 大型 h3（コレクションタイトル "つぐ minä perhonen"）に使用

> Adobe Garamond Pro は Adobe Fonts のドメインライセンスのため、preview.html では表示されない。代替として **EB Garamond** を Google Fonts から読み込んで雰囲気を再現する。

### 3.3 font-family 指定

```css
/* 本文・見出し（和文） */
font-family: 游明朝, "Yu Mincho", YuMincho, "Noto Serif JP", serif;

/* 欧文セクションラベル */
font-family: "Helvetica Neue", arial, sans-serif;

/* 欧文タイトル（コレクション名等） */
font-family: adobe-garamond-pro, serif;

/* サインイン等の和文サンセリフ */
font-family: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", "Noto Sans JP", sans-serif;
```

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | フォント |
|------|------|--------|-------------|----------------|----------|
| Page Title (h1) | 36px | 400 | 1.2 (43.2px) | normal | 游明朝 |
| Section Title (h2) | 24px | 400 | 1.2 (28.8px) | normal | 游明朝 |
| Collection Title (h3 en) | 24px | 400 | 1.2 (28.8px) | normal | adobe-garamond-pro |
| Article Heading (h3 ja) | 20px | 500 | 1.2 (24px) | normal | 游明朝 |
| Section Heading (h3) | 16px | 500 | 1.5 (24px) | normal | 游明朝 |
| Body | 16px | 400 | 1.8 (28.8px) | normal | 游明朝 |
| Strong / Cart Note | 16px | 600 | 1.5 (24px) | normal | 游明朝 |
| Nav (en, FASHION) | 14px | 500 | 1.21 (17px) | 0.1em (1.4px) | Helvetica Neue |
| Nav (en, Season) | 18px | 400 | 1.22 (22px) | normal | adobe-garamond-pro |
| Nav (ja, サインイン) | 14px | 700 | 1.21 (17px) | 0.2em (2.8px) | 游ゴシック |
| Date Label | 10px | 400 | 1.2 (12px) | 0.15em (1.5px) | Helvetica Neue |
| Copyright | 12px | 400 | 1.6 (19.2px) | 0.05em (0.6px) | Helvetica Neue |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（28.8px / 16px）。明朝の長文を読み物として組む。日本語編集物の標準
- **見出しの行間**: `line-height: 1.2`。明朝の縦画を活かすため、見出しは詰め気味
- **本文の字間**: `letter-spacing: normal`。明朝のメトリクスをそのまま使う
- **欧文ラベルの字間**: `letter-spacing: 0.1em〜0.2em`。FASHION / TEXTILE などの大文字英語ラベルは、和文との視覚的バランスのため広めに開ける
- **日付ラベルの字間**: `letter-spacing: 0.15em`。10px の小さな英数字日付は字間を広げて読みやすく

### 3.6 OpenType 機能 / palt

- **palt は使用しない**。明朝体の素のメトリクスを尊重する
- font-feature-settings に明示指定はなし。ブラウザデフォルトのカーニングのみ

### 3.7 二言語混植

ミナ ペルホネンの大きな特徴は**和文と欧文をシームレスに混植する**こと。

- ナビゲーション: "FASHION" (Helvetica Neue) + "ファッション" (游明朝) のような対比を画面内で同居させる
- コレクション名: "つぐ minä perhonen" のように和文 + Adobe Garamond Pro の欧文を 1 行に並べる
- 数字・日付は基本的に Helvetica Neue で組む

---

## 4. Component Stylings

### Buttons

ミナ ペルホネンには**明示的なボタン要素はほぼ存在しない**。CTA はテキストリンクとカテゴリラベルで構成する。

**Text Link**

- Color: `#212121`
- Background: transparent
- Font Size: 16px
- Font Weight: 400
- Border Radius: 0px
- Underline: ホバー時のみ表示（または常時非表示）

**Category Label（FASHION / TEXTILE 等）**

- Color: `#212121`
- Background: transparent
- Font Family: "Helvetica Neue", arial, sans-serif
- Font Size: 14px
- Font Weight: 500
- Letter Spacing: 0.1em
- Text Transform: uppercase 想定

**Sign-in Pill（ヘッダー右上）**

- Background: `#333333`
- Color: `#ffffff`
- Font: 游ゴシック 14px / 700, letter-spacing 0.2em

### Inputs

抽出データに input 要素は出現しなかったが、想定値:

- Border Radius: 0px（明朝の世界観に角丸は馴染まない）
- Border-bottom のみ: 1px solid `#212121`（横線下線のみ）
- Background: `#ffffff`
- Padding: 8px 0
- Font Size: 16px

### Cards / Lists

- Background: `#ffffff`
- Border: 0px（境界線なし、余白で区切る）
- Border Radius: 0px
- Shadow: なし
- 写真 + 日付（Helvetica Neue 10px）+ タイトル（游明朝 16px）の 3 段構成

### Header

- Padding: 0px（中身に余白を持たせる）
- Background: `#ffffff`
- Border-bottom: なし、または 1px の細いラインのみ

---

## 5. Layout Principles

### Container

- 最大幅は固定せず、ブラウザ幅に応じて余白で吸収する
- ヘッダーはセンターロゴ型。左右に均等に余白を取る
- 本文ブロックは画面幅に対して相対的に幅を取り、長文ページでも 720〜960px 程度に収める

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | テキスト要素間 |
| M | 15px | リスト項目間 |
| L | 24px | 段落間 |
| XL | 35px | フッター上下 padding |
| XXL | 60px | セクション間 |

### Grid

- ヒーローは大きな 1 カラム
- 商品グリッドは 2〜3 カラム（ブラウザ幅依存）
- ナビゲーションは横一列（PC）→ アコーディオン（スマートフォン）

---

## 6. Depth & Elevation

ミナ ペルホネンはシャドウを使わない**完全フラット**。テキスタイルや写真自体が質感を持つため、UI で立体感を加える必要がない。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

---

## 7. Do's and Don'ts

### Do（推奨）

- **本文・見出しすべてに游明朝**を採用。サンセリフは欧文ラベルや限定的な機能ラベルだけに留める
- 本文の `color: #212121`（純黒は避ける）
- **欧文と和文を 1 行に混植する**（"つぐ minä perhonen"）。和文 = 游明朝、欧文 = Adobe Garamond Pro / Helvetica Neue
- 欧文セクションラベルは `letter-spacing: 0.1em` で広めに開ける
- 日付・コピーライトは Helvetica Neue で組み、和文と区別する
- CTA はテキストリンク。**ボタン枠を作らない**
- 本文の `line-height: 1.8` を必ず確保
- 見出しの `line-height: 1.2`（詰める）
- アクセントカラーは使わず、写真・テキスタイルの色を主役にする

### Don't（禁止）

- 純黒 `#000000` を本文に使わない（#212121 が基準）
- ゴシック体を本文に使わない（明朝体の世界観が崩れる）
- 角丸 CTA や pill ボタンを多用しない（フラット長方形 or テキストリンク）
- ドロップシャドウ・グラデーションを使わない
- 鮮やかな彩度（純赤以外）を UI に持ち込まない
- 欧文ラベルを `letter-spacing: 0` で組まない（0.1em 以上が標準）
- 日本語と欧文で同じフォントを使わない（明確に書体を分ける）
- 行間 1.5 以下で本文を組まない（1.8 が標準）

---

## 8. Responsive Behavior

### Breakpoints（一般的な慣例ベース）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | iPad |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- h1 36px はそのまま、または 28px 程度に縮小
- ヘッダーはハンバーガーメニュー化
- 商品グリッドは 1〜2 カラムに折り返し
- 欧文と和文の混植 1 行は、モバイルでは行を分けることがある

### タッチターゲット

- テキストリンクの周辺に 12px 以上の padding を取り、タップ領域を確保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: ミナ ペルホネン (mina perhonen)
Body Color: #212121 (純黒不可)
Surface: #ffffff
Mute: #999999
Alert: #ff0000 (警告のみ)
JP Font: 游明朝, "Yu Mincho", YuMincho, "Noto Serif JP", serif
EN Font (label): "Helvetica Neue", arial, sans-serif
EN Font (title): adobe-garamond-pro, serif
Body Size: 16px
Body Line Height: 1.8 (28.8px)
Heading Line Height: 1.2
Body Letter Spacing: normal
Label Letter Spacing: 0.1em〜0.2em
palt: 使用しない
CTA: テキストリンク優先（ボタン枠を作らない）
Border Radius: 0px (角丸なし)
Shadow: none (フラット)
```

### プロンプト例

```
ミナ ペルホネンのデザインシステムに従って、新作テキスタイルの紹介ページを作成してください。
- 本文・見出しは 游明朝, "Yu Mincho", "Noto Serif JP", serif
- 欧文タイトル "Spring 2026 Collection" は adobe-garamond-pro, serif
- 欧文セクションラベル "FASHION" は Helvetica Neue 14px / 500 / letter-spacing 0.1em
- 本文は 16px / 400 / line-height 1.8 / color #212121
- 見出しは line-height 1.2 で詰める
- CTA はテキストリンクのみ。ボタン枠は使わない
- 写真の下に日付ラベル "2026.05.08" を Helvetica Neue 10px / 400 / letter-spacing 0.15em で配置
- 角丸とドロップシャドウは使用しない（完全フラット）
- 警告メッセージのみ #ff0000 を使用
```

### 字詰め・組版の重要ポイント

1. **明朝中心の世界観を壊さない**: 本文・見出しすべて游明朝。欧文だけ Helvetica Neue / Adobe Garamond Pro に切り替える
2. **palt を使わない**: 明朝体のデフォルトメトリクスを尊重する
3. **欧文ラベルの字間を広げる**: FASHION 等の大文字英語は letter-spacing 0.1em 以上で組む
4. **二言語混植**: 和文と欧文を 1 行に同居させても違和感がないよう、フォントの切替で空気を変える
5. **ボタン枠を作らない**: CTA はテキストリンク。pill や角丸長方形は使わない
6. **#212121 の徹底**: 本文・見出しすべてこの色。純黒禁止

---

**取得日**: 2026-05-08
**出典**: https://www.mina-perhonen.jp/, https://www.mina-perhonen.jp/news/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測
