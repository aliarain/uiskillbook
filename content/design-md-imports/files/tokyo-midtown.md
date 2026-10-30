# DESIGN.md — Tokyo Midtown（東京ミッドタウン）

> 東京ミッドタウン公式サイト（https://www.tokyo-midtown.com/jp/）のデザイン仕様書。
> 「JAPAN VALUE」をブランドメッセージに掲げる、六本木に位置する複合都市施設。
> 21_21 DESIGN SIGHT、サントリー美術館などデザイン文化の発信拠点を擁する。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **Morisawa Web フォント（中ゴシック BBB / 太ゴ B101 / 秀英丸ゴ L）の三和文体を組み合わせた**、編集デザイン的アプローチ。**ミッドタウン・グリーン**（深緑）を主役にしながら、丸ゴシックで温かみを、太ゴで力強さを、中ゴシックで本文を担うコンビネーション
- **密度**: 情報密度は高め — イベント、店舗、施設情報を並列に配置するハブサイト
- **キーワード**: グリーン、編集、複数フォントの混植、JAPAN VALUE、複合施設、文化発信
- **特徴**: **3 種類の Morisawa 和文フォントを使い分ける**点が最大の特徴。本文は中ゴシック BBB、CTA や強調は太ゴ B101、装飾的な見出し（左右ナビなど）は秀英丸ゴ L。**英数字・キービジュアルには HelveticaNeue Thin / gidoleregular** を使用しモダンサンセリフを担当。テキスト色は黒（`#101211`）とミッドタウン・グリーン（`#009842`）を主軸に、補助に dark green / mint を配する

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Midtown Green** (`#009842`): **メインのブランドグリーン**。ヘッダーロゴ、タイプスクエア・タグ、施設名ボタン背景に使う深いグリーン
- **CTA Green** (`#1b9532`): 「もっと見る」「動画特設サイトへ」などの CTA。Midtown Green とは微妙に違う鮮やかなグリーン（Solid radius 56px の pill ボタンと border-radius 0px の utility ボタンの双方で使用）
- **Pager Green Dark** (`#288068`): スライダーのページャーボタン非アクティブ
- **Mint** (`#4abb9d`): スライダーアクティブ時のミントグリーン

### Accent

- **Warm Sand** (`#b8b081`): 別施設「ミッドタウン八重洲・日比谷」サイトリンクの淡いサンドカラー
- **Pale Blue** (`#dce7eb`): ホール&カンファレンス・イベントスペース等の utility CTA 背景
- **Pale Mist** (`#eff3f5`): 言語スイッチャー背景

### Text

- **Text Primary** (`#101211`): **ほぼ純黒の本文・見出し基本色**（ミッドタウン特有のニアブラック）
- **Text Secondary** (`#333333`): 一部本文（line-height 50px の特殊な大コピー）
- **Text Muted** (`#51606e`)（標準的な dark gray の補助）
- **Text on Dark** (`#ffffff`): フッター・グリーン帯の上の白文字

### Surface（面色）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface Mist** (`#eff3f5`): 言語スイッチャーや薄い背景帯
- **Surface Pale Blue** (`#dce7eb`): utility CTA セクション背景
- **Surface Black** (`#101211`): ナビ・ダーク帯
- **Surface Black Translucent** (`rgba(16, 18, 17, 0.8)`): モーダル等のオーバーレイ

### CTA / Button

- **CTA Pill Solid Green** (`#1b9532`, radius 56px): 「もっと見る」など主要 CTA（pill 型）
- **CTA Pill Outline Green** (radius 9999px, border 2px solid `#1b9532`): 「イベント一覧」など補助 CTA（白地 + 緑枠 pill）
- **CTA Square Green** (`#1b9532`, radius 0px): 「東京ミッドタウンまでのアクセス」「タウンマップ」「ショップ&レストラン」など utility CTA（角丸なしの矩形）
- **CTA Square Pale** (`#dce7eb`, radius 0px): 「ホール&カンファレンス」「イベントスペース&メディア」等（淡い水色矩形）

> **Note**: Tokyo Midtown は **「Midtown Green を中心に、 dark/mint/sand/pale blue の中間色トーン」** で複合施設の多様性を表現する。**原色は使わない**が、グリーン系統の階調を 4〜5 段階使い分ける。

---

## 3. Typography Rules

### 3.1 和文フォント

**3 種類の Morisawa Web フォントを混植**:
- **中ゴシック BBB**（`Gothic Medium BBB`、TypeSquare 配信）: 本文・ナビ・カードタイトル
- **太ゴ B101**（`Futo Go B101`、TypeSquare 配信）: 強調見出し・utility CTA・ヒーローコピー
- **秀英丸ゴ L**（`Shuei MaruGo L`、TypeSquare 配信）: 装飾見出し・グランドナビの一部・ロゴ周り

**フォールバック和文**:
- 游ゴシック / Yu Gothic
- ヒラギノ角ゴ Pro W3 / Hiragino Kaku Gothic Pro
- Meiryo UI / メイリオ
- ＭＳ Ｐゴシック

### 3.2 欧文フォント

- **gidoleregular**: 大型欧文見出し（Section Title 28px）。Gidole は GitHub 由来の幾何学的サンセリフ
- **HelveticaNeue-Thin / Helvetica Neue Thin**: 大型キービジュアル（72px のヒーロー数字など）
- **Arial**: ボタン・スライダーのデフォルト

### 3.3 font-family 指定

```css
/* 本文・ナビ・カードタイトル */
font-family: "Gothic Medium BBB", 游ゴシック, "Yu Gothic", 游ゴシック体, YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Meiryo UI", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic";

/* 強調見出し・utility CTA・ヒーロー */
font-family: "Futo Go B101";

/* 装飾見出し・サブナビ */
font-family: "Shuei MaruGo L";

/* 大型欧文見出し */
font-family: gidoleregular;

/* ヒーロー数字・キービジュアル */
font-family: HelveticaNeue-Thin, "Helvetica Neue Thin";
```

**フォールバックの考え方**:
- Morisawa Web フォントは **TypeSquare** 経由で配信されており、**ローカル環境では再現不可**
- ローカル代替: 中ゴシック BBB → Noto Sans JP、太ゴ B101 → Zen Kaku Gothic New Bold、秀英丸ゴ L → Zen Maru Gothic
- 欧文 gidoleregular → Inter、HelveticaNeue-Thin → Helvetica Neue Light or Inter Thin

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | 用途 |
|------|------|------|--------|-------------|------|
| Hero Number | HelveticaNeue-Thin | 72px | 400 | 72px (1.0) | キービジュアル数字 |
| Section Title (gidole) | gidoleregular | 28px | 400 | 28px (1.0) | 大型欧文見出し（letter-spacing 2px） |
| h3 | 中ゴシック BBB | 18px | 700 | 27px (1.5) | 各セクション見出し |
| h2 (decorative) | 秀英丸ゴ L | 18px | 400 | 18px (1.0) | 装飾的小見出し（letter-spacing 2px） |
| h2 (futo) | 太ゴ B101 | 16px | 400 | 16px (1.0) | utility 見出し |
| Body | 中ゴシック BBB | 14px | 400–500 | 21px (1.5) | 本文・ナビ |
| Body Wide | 中ゴシック BBB | 14px | 400 | 50px (3.57!) | ヒーロー隣接の特殊な広い行間（メニュー的役割） |
| Caption | 中ゴシック BBB | 13px | 400 | 19.5px (1.5) | カード補足 |
| CTA (futo) | 太ゴ B101 | 12–16px | 400 | 18–24px (1.5) | utility CTA（letter-spacing 0.5–2px） |
| Tag / Mini | 中ゴシック BBB | 11–12px | 400 | 16.5–18px (1.5) | タグ・ヘッダー上の施設リンク |

### 3.5 行間・字間

- **本文 line-height: 1.5**（21px / 14px）。日本語サイトの標準値
- **大コピーは line-height 1.0** で密に組む（72px 数字、28px gidole 見出し）
- **メニュー的なリストは line-height 50px** という極端なルーズ設定が散見される（コンテンツ間の余白を line-height で吸収）
- **letter-spacing 1〜2px**: 大型見出しに広めの字間（gidole 28px は 2px、Futo 12px は 0.5–1px）
- **本文の letter-spacing は normal**

### 3.6 禁則処理・改行ルール

- **`<br>` を多用**して改行位置を制御するのが Morisawa 系日本語サイトの定石
- 本文は短く、句読点を意識した配置

### 3.7 OpenType機能

- **TypeSquare 経由のため OpenType 機能は明示しない**（`font-feature-settings: normal`）
- **letter-spacing 1〜2px の物理字間**で組版を整える

### 3.8 縦書き

- 通常コンテンツでは未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA (Solid Pill)
- 背景: `#1b9532`
- 文字色: `#ffffff`
- font-family: 太ゴ B101 or 中ゴシック BBB
- font-size: 16px / line-height 24px
- letter-spacing: 2px
- border-radius: **56px (pill)**
- padding: 16px 〜
- 用途: 「もっと見る」のヒーロー CTA

#### Outline Pill
- 背景: 透過
- 文字色: `#1b9532`
- 罫線: `2px solid #1b9532`
- font-size: 12px / line-height 29px
- border-radius: **9999px (full pill)**
- padding: `0 7px 0 0` ほど（細身）
- 用途: 「イベント一覧」「動画特設サイトへ」

#### Utility Square CTA (Solid)
- 背景: `#1b9532`
- 文字色: `#ffffff`
- font-family: 太ゴ B101
- font-size: 12px / line-height 18px
- letter-spacing: 0.5px
- border-radius: **0px**
- padding: `0 0 0 55px`（左にアイコン用余白）
- 用途: 「東京ミッドタウンまでのアクセス」「タウンマップ」「ショップ&レストランフロアガイド」

#### Utility Square CTA (Pale)
- 背景: `#dce7eb`
- 文字色: `#101211`
- 罫線: `2px solid #dce7eb`
- font-family: 太ゴ B101
- border-radius: **0px**
- 用途: 「ホール&カンファレンス」「イベントスペース&メディア」

#### Header Link (Sister Sites)
- 背景: `#009842`（ミッドタウン日比谷・八重洲は `#b8b081` のサンドカラー）
- 文字色: `#ffffff`
- font-size: 11px / line-height 16.5px
- border-radius: **0px**
- padding: `0 10px 0 0`
- 用途: ヘッダーの「東京ミッドタウン日比谷・八重洲」リンク

### Tags / Badges

- 背景: `#101211`
- 文字色: `#ffffff`
- font-size: 12px / line-height 18px
- letter-spacing: 1px
- border-radius: **3px**（わずかに角丸）
- 用途: 「イベントカレンダー」など分類タグ

### Cards

- 背景: `#ffffff`
- 罫線: なし or 極薄
- 影: なし
- 角丸: 0px（フラット矩形）

### Slider Pager

- アクティブ: `#4abb9d`（mint）
- 非アクティブ: `#288068`（dark green）
- 背景: `rgba(0, 0, 0, 0.8)`（前後ボタン）
- border-radius: 5px or 50%（pager dot）

---

## 5. Layout Principles

- **コンテンツ幅**: 1280px のメインコンテンツ
- **グリッド**: イベント・店舗・施設カードを 3〜4 列
- **ヒーロー**: 大型画像 + Helvetica Neue Thin の 72px 数字でキービジュアル
- **フッター**: 緑帯のサイドバー的 utility CTA 群（縦積みの矩形ボタン）
- **アサイドナビ**: 右下固定の utility CTA（「アクセス」「タウンマップ」「フロアガイド」「ホール&カンファレンス」「イベントスペース&メディア」）
- **複数ブランドの併存**: 親施設（東京ミッドタウン）+ 兄弟施設（日比谷・八重洲）への色分けされた誘導

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト
- **段階表現**: 影ではなく**面色（黒帯・緑帯・水色帯）**で奥行きを作る
- **罫線**: 2px の太い border を CTA に使用（pill outline）

---

## 7. Do's and Don'ts

### Do's

- **Midtown Green `#009842` をブランドの中心**に置く（ロゴ・施設名）
- **CTA は緑系で 3 種類使い分ける**: solid pill (radius 56px) / outline pill (radius 9999px) / square (radius 0px)
- **3 種類の Morisawa 和文フォント（中ゴシック BBB / 太ゴ B101 / 秀英丸ゴ L）を混植**する
- **大型キービジュアルは HelveticaNeue Thin の 72px 数字**でモダンに
- **本文 line-height 1.5、大型コピー line-height 1.0** を区別する
- **テキスト色はニアブラック `#101211`**（純黒 #000000 ではない）
- **影なし・フラットデザイン**を徹底する

### Don'ts

- **緑系以外の原色を使わない**（赤・青・黄は不可）
- **CTA を一種類に統一しない** — solid pill / outline pill / square の 3 系統が共存するのが特徴
- **和文を 1 フォントに統一しない** — Morisawa の 3 種混植が Midtown らしさ
- **letter-spacing を 0 にしない** — 大見出しは 1〜2px の物理字間
- **行間を詰めすぎない** — 本文は line-height 1.5 を確保

---

## 8. Responsive Behavior

- デスクトップ: 1280px、3〜4 列カード
- タブレット (768〜1024px): 2 列に折り畳み
- モバイル (〜767px): 1 列、`sp_hide` クラスでヘッダーやフッター要素を切替
- グローバルナビは hamburger menu

---

## 9. Agent Prompt Guide

東京ミッドタウンらしい UI を生成するときは以下を伝えるとよい：

```
- font-family（本文）: "Gothic Medium BBB", 游ゴシック, "Yu Gothic", "ヒラギノ角ゴ Pro W3", メイリオ, sans-serif（ローカル代替: Noto Sans JP）
- font-family（強調）: "Futo Go B101"（ローカル代替: Zen Kaku Gothic New Bold）
- font-family（装飾）: "Shuei MaruGo L"（ローカル代替: Zen Maru Gothic）
- font-family（欧文大型）: gidoleregular / HelveticaNeue-Thin（代替: Inter / Helvetica Neue Light）
- 本文 line-height: 1.5、大型キービジュアル line-height 1.0
- ブランドカラー: #009842（Midtown Green）、CTA グリーン: #1b9532
- アクセント: #4abb9d（mint）、#dce7eb（pale blue）、#b8b081（sand）
- テキスト: #101211（ニアブラック）
- CTA は 3 系統使い分け:
  - Solid Pill #1b9532 / radius 56px / 「もっと見る」
  - Outline Pill border 2px / radius 9999px / 「イベント一覧」
  - Square Green #1b9532 / radius 0px / 「アクセス」「タウンマップ」
- 影なし（フラットデザイン）
- 「JAPAN VALUE」のブランド精神 — 編集的、複数フォントの混植、複合施設の多様性
```
