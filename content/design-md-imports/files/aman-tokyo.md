# DESIGN.md — Aman Tokyo (aman.com/ja-jp/resorts/aman-tokyo)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 抽出日: 2026-05-08 / 出典: https://www.aman.com/ja-jp/resorts/aman-tokyo

---

## 1. Visual Theme & Atmosphere

アマン東京は、ラグジュアリーホテルブランド「Aman」の東京プロパティ。日本の伝統的な美意識 ── 静寂、余白、自然素材 ── をデジタル上でも徹底して表現している。サイト全体が **温かみのあるクリーム色 `#f3eee7`** に包まれ、純白を一切使わない。太字も存在せず、すべて weight 400。声を低くして語りかけるような、控えめな権威がデザインの核心。

- **デザイン方針**: 静謐なミニマリズム。写真と余白が主役であり、UIは存在を消す
- **密度**: 極めてゆったり。情報を間引き、一つひとつの要素に十分な余白を与える
- **キーワード**: Serene, Warm Minimal, Understated Luxury, Japanese Silence, No-Bold

---

## 2. Color Palette & Roles

Aman のカラーパレットは **クリーム + チャコール** の2色で構成される極限的に抑制された配色。純白も純黒も使わない。すべてが温かみを帯びた中間色。

### Brand（ブランドカラー）

| Role | Hex | 備考 |
|------|-----|------|
| Aman Cream | `#f3eee7` | **ページ背景**。ブランド最大の特徴色。和紙や漆喰を想起させる温かいクリーム |
| Warm Dark | `#313131` | 本文テキスト兼 CTA 背景。純黒ではなく温かみのあるチャコール |

### Surface（面の色）

| Role | Hex | 備考 |
|------|-----|------|
| Light Cream | `#fdf9f5` | カード面。Aman Cream よりわずかに明るい |
| Near Cream | `#fdfaf6` | Light Cream の微妙な差異。交互セクションに使用 |
| Cookie Banner | `#404040` | クッキーバナー背景。ダークUIとしてやや明るめのチャコール |

### Accent（アクセント）

| Role | Hex | 備考 |
|------|-----|------|
| Ghost White | `rgba(255,255,255,0.25)` | ゴーストボタン背景。半透明の白 |
| Pagination Gray | `#efefef` | ページネーション矢印 |
| Map Blue | `#3860be` | 地図・フィルターアイコン。唯一の有彩色（UIアクセント） |

### Semantic（意味的な色）

Aman のサイトには明示的なエラー・警告・成功色の定義が見られない。ラグジュアリーホテルサイトの性質上、フォームバリデーション等は最小限。必要な場合は以下を推奨:

| Role | Hex | 備考 |
|------|-----|------|
| Danger | `#a33` | エラー（Aman Cream との調和を保つ暗い赤） |
| Success | `#3a6a3a` | 成功（温かみのある深緑） |

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体がメイン**。ゴシック体はオーバーラインのカテゴリラベルにのみ使用。

- **明朝体**: yu-mincho-pr6（Adobe Fonts / Morisawa 游明朝 Pr6）── 本文に使用
- **ゴシック体**: Meiryo, メイリオ, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", Osaka, "ＭＳ Ｐゴシック" ── **オーバーラインラベル専用**（10px / letter-spacing 2px）

### 3.2 欧文フォント

- **セリフ（見出し）**: Lyon Text Web, Lyon Display Web（Commercial Type 社のプレミアムセリフ）
- **セリフ（フォールバック）**: "Times New Roman", serif

Lyon Text Web / Lyon Display Web は Commercial Type 社のライセンスフォント。preview.html では Google Fonts の **Cormorant Garamond** が代替候補（エレガントで温かみのあるセリフ体として印象が近い）。

### 3.3 font-family 指定

```css
/* 本文（和文明朝） */
font-family: yu-mincho-pr6, "Times New Roman", serif;

/* 見出し（欧文セリフ） */
font-family: "Lyon Text Web", "Lyon Display Web", "Times New Roman", serif;

/* オーバーラインラベル（和文ゴシック） */
font-family: Meiryo, メイリオ, 游ゴシック体, "Yu Gothic", YuGothic,
  "ヒラギノ角ゴ Pro W3", Osaka, "ＭＳ Ｐゴシック",
  yu-mincho-pr6, "Times New Roman", serif;

/* CTA・ボタン（和文ゴシック） */
font-family: Meiryo, メイリオ, 游ゴシック体, "Yu Gothic", YuGothic,
  "ヒラギノ角ゴ Pro W3", Osaka, "ＭＳ Ｐゴシック",
  yu-mincho-pr6, "Times New Roman", serif;
```

**フォールバックの考え方**:
- 欧文見出しは Lyon Text/Display Web を先頭に、和文が含まれない前提
- 和文本文は yu-mincho-pr6 を先頭に、明朝体の品格を優先
- オーバーラインラベルは Meiryo（ゴシック）を先頭に、最終フォールバックで明朝に落ちる構成
- CTA ボタンもゴシック体。明朝体のサイトだが、アクション要素は可読性を優先してゴシック

**フォント代替（preview.html 用）**:
- yu-mincho-pr6（Adobe Fonts）→ **Shippori Mincho**（Google Fonts / 日本語明朝）
- Lyon Text Web（Commercial Type）→ **Cormorant Garamond**（Google Fonts / 欧文セリフ）

### 3.4 文字サイズ・ウェイト階層

**全レベルで weight 400（Regular）のみ使用** ── Aman のデザインに太字は存在しない。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display / H1 | Lyon Text Web | 31.08px | 400 | 45.07px (×1.45) | 0.5px (0.016em) | "アマン東京" ページタイトル |
| Section Heading (H2 large) | Lyon Text Web | 31.08px | 400 | 45.07px (×1.45) | 0.5px (0.016em) | H1 と同サイズ。セクション見出し |
| Subsection Heading (H2 medium) | Lyon Text Web | 24.11px | 400 | 34.96px (×1.45) | 0.5px (0.021em) | 中見出し |
| Small Heading (H2 small / H3) | Lyon Text Web | 19.6px | 400 | 28.42px (×1.45) | 0.98px (0.05em) | 小見出し |
| Footer Heading (H3) | Lyon Text Web | 16.8px | 400 | — | 4px (0.238em) | "アマン東京"（フッター。極端に広い字間） |
| Overline Label (H2/H3 subtitle) | Meiryo stack | 10.11px | 400 | — | 2px (0.198em) | "日本 東京" "客室" カテゴリラベル |
| Body | yu-mincho-pr6 | 14px | 400 | 20.3px (×1.45) | 0.8px (0.057em) | 本文 |

### 3.5 行間・字間

- **行間 (line-height)**: **全レベル ×1.45** で統一。見出しも本文も同じ比率。日本語としてはやや狭めだが、明朝体の縦のリズムを生かす設定
- **本文の字間 (letter-spacing)**: 0.8px (≈0.057em)。明朝体に控えめなプラストラッキングを加え、一文字一文字に呼吸を持たせる
- **見出しの字間**: 0.5px〜0.98px（サイズに応じて変動）
- **オーバーラインの字間**: 2px (≈0.198em)。小さなゴシック体に極めて広い字間を取り、**スモールキャップス的な格式感**を出す
- **フッター見出しの字間**: 4px (≈0.238em)。最も広い。ブランド名を一文字ずつ離して配置する

**ガイドライン**:
- Aman の字間は全体的に広め。「詰める」方向の操作は行わない
- オーバーラインラベルの広い字間は Aman のアイデンティティ。省略しない
- line-height ×1.45 は Aman 独自の値。一般的な日本語サイト（1.7〜2.0）より狭い

### 3.6 禁則処理・改行ルール

特殊な指定なし（ブラウザデフォルト）。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt 不使用**。明朝体にプロポーショナル字詰めを適用しない
- **kern 不使用**。欧文カーニングも明示的に無効
- 明朝体の等幅感を維持し、文字が均等に並ぶ静謐なリズムを保つ

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

**Primary CTA（宿泊予約）**

```css
background: #313131;
color: #f3eee7;
font-family: Meiryo, メイリオ, 游ゴシック体, "Yu Gothic", YuGothic,
  "ヒラギノ角ゴ Pro W3", Osaka, "ＭＳ Ｐゴシック",
  yu-mincho-pr6, "Times New Roman", serif;
font-size: 14px;
font-weight: 400;
padding: 10px 15px;
border: 1px solid #313131;
border-radius: 0;
```

- **Aman Cream on Dark**（`#f3eee7` on `#313131`）── ブランド背景色をボタン文字色に使う。白文字ではない
- 角丸なし。完全な矩形
- ボタンもゴシック体。明朝体のサイトで唯一ゴシックが主張する場所

**Ghost Button（地域フィルター等）**

```css
background: rgba(255, 255, 255, 0.25);
color: #000000;
font-family: Meiryo, メイリオ, 游ゴシック体, "Yu Gothic", YuGothic,
  "ヒラギノ角ゴ Pro W3", Osaka, "ＭＳ Ｐゴシック",
  yu-mincho-pr6, "Times New Roman", serif;
font-size: 14px;
font-weight: 400;
padding: 14px;
border: 1px solid #000000;
border-radius: 0;
```

- 半透明の白背景。写真の上に置かれることを想定
- 枠線は `#000`。背景が透けるため純黒のボーダーで視認性を確保

### Cards

```css
background: #fdf9f5;
border: none;
border-radius: 0;
box-shadow: none;
```

- 背景は Light Cream `#fdf9f5`（Aman Cream `#f3eee7` よりわずかに明るい）
- 枠線なし、影なし、角丸なし。面の色の差だけで分離する
- カード上の写真がコンテンツの主役

### Navigation

- **ヘッダー高さ**: 88px（`--header-menu-height-lg`）
- **スクロール時ヘッダー**: 60px（`--header-menu-scrolled`）
- **予約バー高さ**: 70px（`--booking-bar-height-lg`）
- ナビゲーションテキストはゴシック体。ヘッダーは透過背景が基本

### Inputs

抽出データに明示的なフォーム入力のスタイルは含まれない。予約フォームはサードパーティ（予約エンジン）に委譲されている可能性が高い。AI エージェントがフォームを生成する場合は以下を推奨:

```css
background: #fdf9f5;
border: 1px solid #c8c3bc;
border-radius: 0;
padding: 10px 14px;
font-family: yu-mincho-pr6, "Times New Roman", serif;
font-size: 14px;
color: #313131;
```

- フォーカス時: `border-color: #313131`（テキスト色と同じダークチャコール）
- Aman の矩形・角丸なしの原則を維持

---

## 5. Layout Principles

### Spacing

Aman のサイトは **写真と余白の比率で空間を構成** する。明確なスペーシングトークンの体系は見られないが、全体的に贅沢な余白を取る方針。

| 用途 | 推奨値 | 備考 |
|------|--------|------|
| セクション間 | 80–120px | セクション間の呼吸。写真ブロック間は特に広く |
| コンテンツ内パディング | 40–60px | カード・テキストブロック内部 |
| テキスト間 | 20–30px | 段落間・リスト間 |
| 要素内 | 10–15px | ボタン内パディング等 |

### Container

- 最大幅の明示指定はなく、写真はフルブリード（viewport 幅いっぱい）に配置される
- テキストコンテンツは中央寄せで、十分なサイドマージンを持つ

### Grid

- 写真グリッドは 2〜3 カラム
- テキストは基本的に 1 カラムで中央配置
- カード型コンテンツは水平スクロールまたは 3 カラムグリッド

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | **すべての要素**。Aman はフラットデザインを徹底 |

- **box-shadow は一切使用しない**。奥行きは写真の明暗とクリーム色の面差で表現する
- カードもモーダルもドロップダウンも影なし
- 背景色の微妙な差（`#f3eee7` vs `#fdf9f5` vs `#fdfaf6`）だけで階層を示す

---

## 7. Do's and Don'ts

### Do（推奨）

- 背景には必ず **Aman Cream `#f3eee7`** を使用する。白背景 `#fff` は Aman の世界観を壊す
- テキスト色には **`#313131`（Warm Dark）** を使う。純黒 `#000` は使わない
- フォントウェイトは **すべて 400（Regular）** にする。Bold は存在しない
- 本文は **明朝体（yu-mincho-pr6）** を使用する。ゴシックは補助的な要素のみ
- オーバーラインラベルには **ゴシック体 10px + letter-spacing 2px** でスモールキャップス的な格式感を出す
- ボタンは **角丸なし（radius 0）** の矩形にする
- CTA ボタンの文字色は **`#f3eee7`（Aman Cream）** にする。白 `#fff` ではない
- line-height は **×1.45** で統一する
- 余白は贅沢に取る。要素を詰め込まない
- 色の差異は微細に保つ（`#f3eee7` と `#fdf9f5` は差 Delta E ≈ 2 程度）

### Don't（禁止）

- **純白 `#ffffff` を背景に使わない** ── Aman の温かみが失われる
- **純黒 `#000000` をテキストに使わない** ── コントラストが強すぎて静寂感が崩れる
- **太字 (font-weight ≥ 500) を使わない** ── 声を上げない、主張しないのが Aman の美学
- **border-radius を使わない** ── pill ボタンも丸角カードも Aman には存在しない
- **box-shadow を使わない** ── 影は Aman のフラットな世界観に反する
- **鮮やかな有彩色を使わない** ── クリーム＋チャコールの2色に留める
- **ゴシック体を本文に使わない** ── 明朝体が Aman のトーン・オブ・ボイス
- **palt（プロポーショナル字詰め）を適用しない** ── 等幅の静かなリズムを保つ
- **letter-spacing を詰めない** ── Aman は常に文字を離す方向。負のトラッキングは禁止

---

## 8. Responsive Behavior

### Breakpoints

明示的なブレークポイント定義は抽出データに含まれない。CSS 変数から推測されるヘッダー挙動:

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | ヘッダー縮小、ハンバーガーメニュー |
| Tablet | 768–1024px | 中間レイアウト |
| Desktop | > 1024px | ヘッダー 88px、予約バー 70px |

### スクロール時の挙動

- ヘッダーがスクロールで 88px → 60px に縮小（`--header-menu-scrolled: 60px`）
- 予約バーは固定表示

### タッチターゲット

- CTA ボタン: padding 10px 15px（タッチターゲットとしてはやや小さめ。モバイルでは 44px 以上を確保）
- Ghost ボタン: padding 14px（十分なタッチ領域）

### フォントサイズの調整

- モバイルでは H1/H2 の 31px を 22–24px 程度に縮小
- 本文 14px はモバイルでも維持（これ以上小さくしない）
- オーバーライン 10px は据え置き（letter-spacing 2px も維持）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Background:  #f3eee7 (Aman Cream — NOT white)
Surface:           #fdf9f5 (Light Cream — cards)
Text Color:        #313131 (Warm Dark — NOT black)
CTA Bg:            #313131 (same as text)
CTA Text:          #f3eee7 (same as background)
Ghost Button:      rgba(255,255,255,0.25) / border 1px solid #000
Map Accent:        #3860be (only chromatic color, UI only)

Body Font:         yu-mincho-pr6, "Times New Roman", serif
Heading Font:      "Lyon Text Web", "Lyon Display Web", "Times New Roman", serif
Label Font:        Meiryo, メイリオ, 游ゴシック体, "Yu Gothic", YuGothic, sans-serif
Button Font:       (same as Label Font)

Font Weight:       400 ONLY — no bold anywhere
Body:              14px / 400 / lh 20.3px (×1.45) / ls 0.8px (0.057em)
Display/H1:        31.08px / 400 / lh 45.07px (×1.45) / ls 0.5px (0.016em)
H2 medium:         24.11px / 400 / lh ×1.45 / ls 0.5px
H3:                19.6px / 400 / lh 28.42px (×1.45) / ls 0.98px (0.05em)
Overline:          10.11px / 400 / ls 2px (0.198em) / Gothic
Footer heading:    16.8px / 400 / ls 4px (0.238em) / Lyon

Border Radius:     0 — everywhere
Box Shadow:        none — everywhere
palt:              off (font-feature-settings: normal)
LH ratio:          ×1.45 — everywhere
```

### プロンプト例

```
アマン東京のデザインシステムに従って、客室紹介ページを作成してください。

- 背景: Aman Cream #f3eee7（純白は使わない）
- テキスト: #313131（純黒は使わない）
- 本文: yu-mincho-pr6, "Times New Roman", serif / 14px / 400 / line-height ×1.45 / letter-spacing 0.8px
- 見出し: "Lyon Text Web", "Lyon Display Web", "Times New Roman", serif / 31px / 400 / letter-spacing 0.5px
- カテゴリラベル: Meiryo 10px / 400 / letter-spacing 2px（ゴシック体のオーバーライン）
- CTA「宿泊予約」: bg #313131 / color #f3eee7 / padding 10px 15px / radius 0 / border 1px solid #313131
- カード: bg #fdf9f5 / border なし / shadow なし / radius 0
- font-weight は全要素 400。太字は一切使わない
- border-radius は全要素 0。角丸は一切使わない
- box-shadow は全要素 none。影は一切使わない
- 写真を主役にし、余白を贅沢に取る
```

### 二重セリフ体系について

Aman のサイトは **和文明朝（yu-mincho-pr6）+ 欧文セリフ（Lyon Text Web）** の二重セリフ構成。これはラグジュアリーホテルブランドに特有の戦略で、和文と欧文それぞれに最高品質のセリフ体を選んでいる。ゴシック体は「オーバーラインラベル」と「CTA ボタン」のみに限定され、機能的に声を上げる必要がある最小限の場所だけに使用される。AI がこのブランドの UI を生成するときは、ゴシック体の出現頻度を極めて低く保つことが重要。
