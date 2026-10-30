# DESIGN.md — BALMUDA（バルミューダ）

> BALMUDA 公式サイト（https://www.balmuda.com/jp/）のデザイン仕様書。
> 「The Toaster」「The GreenFan」など、家電を超えたプロダクトデザインで知られるバルミューダのコーポレート / EC サイト。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 製品写真を主役にした、徹底した余白と静けさのプロダクト・ジャーナリズム。テキストは脇役、画像が空気をつくる
- **密度**: 情報密度は低め。1 セクション 1 製品で大きなビジュアルを切り替える「展示型」レイアウト
- **キーワード**: ミニマル、写真主役、余白、英語タイトル、湿度のあるグレー
- **特徴**: **英語の章タイトルに Adobe Fonts の `bodoni-pt-variable`（細身のモダン Bodoni）を使用**。和文には游ゴシックを最優先する珍しい構成（`YuGothic_Family` というカスタム名で macOS 内蔵フォントを呼び出す）。CTA はすべて **角丸 60–100px の pill / outline ボタン**で、塗り CTA は使わず、ガラスのような `rgba(255,255,255,0.8)` の半透明白で写真の上に浮かべる。文字色は純黒ではなく `#333333`、補助テキストは `#999999` / `#bbbbbb` と灰色階調を多用

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **BALMUDA Green** (`#4ba53a`): CSS Custom Property `--color-brand` として定義された唯一のブランドアクセント。製品ロゴ「The GreenFan」のグリーン。実サイト UI ではほぼ使わず、写真の中の製品色（ファンの羽根）として現れる

### Text

- **Text Primary** (`#333333`): 本文・見出しの基本色。**純黒は使わない**
- **Text Header** (`#222222`): a タグのナビゲーション・タイトルなど一段濃い表現
- **Text Muted Strong** (`#999999`): 製品キャプション・サブテキスト
- **Text Muted Light** (`#bbbbbb`): タグライン・引用に使う薄いグレー（59.625px の大きなコピー文字「私たちがプロダクトを作る理由は…」もこの色）
- **Text Sub Caption** (`#9a9a9a`): SNS 紹介文など最小キャプション
- **Text on Dark** (`#cccccc`): フッターのナビ・コピーライト

### Surface（面色 — 微妙なグレー階調が特徴）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface 1** (`#fbfbfb`): 製品カードカルーセルの薄い背景。**最頻出の面色**
- **Surface 2** (`#f8f8f8`): News セクション背景
- **Surface 3** (`#f3f3f3`): About セクション背景。3 段階の灰色で奥行きをつくる
- **Glass White** (`rgba(255, 255, 255, 0.8)`): 写真の上に浮かべる pill ボタンの背景
- **Surface Header** (`#383838`): ヘッダー上部のダーク帯
- **Surface Nav** (`#202020`): グローバルナビゲーション本体
- **Surface Cart** (`#3a3a3a`): カート / メニューの引き出し背景
- **Surface Footer** (`#333333`): フッター背景
- **Surface Cookie** (`rgba(34, 34, 34, 0.8)`): Cookie バナーの半透明オーバーレイ

### CTA / Button

- **CTA Outline Border** (`#333333`): outline 型 CTA の枠線（pill 60px）
- **CTA Glass Background** (`rgba(255, 255, 255, 0.8)`): hero 写真の上に重ねる白磨りガラス pill
- **News CTA Background** (`#999999`): News セクションの「最新情報とご案内」CTA（pill 100px）
- **Newsletter Field** (`#ffffff`): メール購読欄（角丸 0px / 白背景）

> **Note**: BALMUDA の UI は **3 段階の極薄グレー（#fbfbfb / #f8f8f8 / #f3f3f3）** を使い分けることで、純白の中に「層」を表現する。**純黒・原色は使わない**（製品グリーンの `#4ba53a` だけが例外）。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- 游ゴシック / YuGothic（macOS 内蔵、最優先。`YuGothic_Family` という独自名でフォントスタックに登場）
- ヒラギノ角ゴ ProN（macOS フォールバック）
- メイリオ（Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ（本文用）**: **Open Sans**（Google Fonts、和文より先に指定して欧文・数字グリフを担当）
- **モダン・セリフ（章タイトル）**: **bodoni-pt-variable**（Adobe Fonts、Variable Bodoni）。「about BALMUDA」「our products」「we make it because we want it.」などの英語見出しで使用

### 3.3 font-family 指定

```css
/* 本文・UI 全般 */
font-family: "Open Sans", YuGothic_Family, YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

/* 英語の章タイトル（h2.column_title.__en-text、p.about__copy__text_en など） */
font-family: bodoni-pt-variable, sans-serif;
```

**フォールバックの考え方**:
- **欧文 (Open Sans) を先頭**に置き、数字・アルファベットを Open Sans で表示
- 続けて **游ゴシック → ヒラギノ → メイリオ** の順で和文を優先
- bodoni-pt-variable は Adobe Fonts ライセンスのため**ローカル環境では表示されない**。フォールバックの `sans-serif` に直接落ちるので、**ローカルでの再現には Google Fonts の Bodoni Moda などで代替**する

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | 用途 |
|------|------|------|--------|-------------|------|
| Hero Copy | Open Sans + 游ゴシック | 59.625px | 500 | 83.475px (1.4) | 大きなタグライン（`#bbbbbb`） |
| Hero Copy EN | bodoni-pt-variable | 24.75px | 400 | 39.6px (1.6) | 英語タグライン（`#bbbbbb`） |
| Section Title EN | bodoni-pt-variable | 36px〜58.5px | 600 | normal | "our products" / "about BALMUDA" 等 |
| Section Title JP | Open Sans + 游ゴシック | 29.25px | 600 | normal | "Topics" 等 |
| Section Subtitle | Open Sans + 游ゴシック | 54px | 500 | normal | hero のサブタイトル（白文字） |
| Headline (h4) | Open Sans + 游ゴシック | 22.5px | 400 | 33.75px (1.5) | 「扇風機 買い替えキャンペーン」等 |
| Body (p / a) | Open Sans + 游ゴシック | 18px | 400–500 | 32.4px–36px (1.8–2.0) | 本文テキスト |
| Description | Open Sans + 游ゴシック | 15.75px | 400 | 23.625px (1.5) | 製品キャプション |
| Caption | Open Sans + 游ゴシック | 14.175px | 500 | 19.845px (1.4) | サムネキャプション（`#999999`） |
| Footer Sub | Open Sans + 游ゴシック | 12.8px | 400 | 19.2px (1.5) | SNS 説明文等 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.8（18px ÷ 32.4px）が標準**。読み物としてのゆとりがある
- **見出しの行間**: `normal`（おおよそ 1.0–1.2）
- **letter-spacing**: **`normal`（0）を維持**。BALMUDA は palt や letter-spacing をほぼ使わず、フォントメトリクスのデフォルトに任せる
- **font-feature-settings**: `normal`。**palt は不使用**

> **特徴**: BALMUDA は欧文サイトに近い行間設計（1.8）を採用しつつ、日本語のレイアウトには字詰めを入れない。**純粋なフォントの素の組版**を活かしてミニマルな空気を保っている。

### 3.6 禁則処理・改行ルール

```css
/* 標準のブラウザ任せ。特別な指定は最小限 */
word-wrap: break-word;
```

ヒーロー大コピーは `<br>` を意図的に挿入し、**改行位置を手動でコントロール**している。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

BALMUDA は palt / kern を使わず、フォントの素のメトリクスで組む。**和文のプロポーショナル詰めは適用しない**。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — すべて pill / outline で塗り CTA を使わない

**Primary Outline (角丸 60px)**
- Background: `transparent`
- Text: `#333333`
- Border: `1px solid #333333`
- Border Radius: `60px`
- Font Size: `15.75px`
- Font Weight: `400`
- Line Height: `28.35px`
- 例: 「すべての製品をみる」「詳しく見る」

**Glass Pill (角丸 60px、写真の上)**
- Background: `rgba(255, 255, 255, 0.8)`
- Text: `#333333`
- Border: `none`
- Border Radius: `60px`
- 例: hero スライドの「製品を見る」「ストアを見る」

**News CTA (角丸 100px、塗り)**
- Background: `#999999`
- Text: `#ffffff`
- Border: `1px solid #999999`
- Border Radius: `100px`
- 例: 「最新情報とご案内」

**Newsletter Submit (フラット白)**
- Background: `#ffffff`
- Text: `#333333`
- Border: `none`
- Border Radius: `0px`
- Padding: `0px 25.6px`

> **Don't**: BALMUDA に**塗りのカラー CTA は存在しない**。緑（`#4ba53a`）はロゴ専用。CTA は常に outline か glass pill。

### Inputs

- Background: `#ffffff`
- Border: 必要最小限（実装は薄いライン）
- Border Radius: `0px`（newsletter フォーム）
- Padding: `0px 25.6px`
- Font Size: `14px`

### Cards / Sections

- 背景: `#fbfbfb` / `#f8f8f8` / `#f3f3f3` の 3 段階
- Border: なし（陰影のみで層を作る）
- Border Radius: `0px`（カード自体は四角）
- Padding: 大きめ（製品写真が主役）

---

## 5. Layout Principles

### Spacing Scale

実測ベースのスペーシングスケール（推定）:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | アイコン余白 |
| S | 16px | テキスト間 |
| M | 24px | キャプション・本文間 |
| L | 32px | カード内パディング |
| XL | 64px | セクション間（小） |
| XXL | 120px+ | セクション間（大） |

### Container

- ページ全幅レイアウトが基本（製品写真は viewport ぎりぎりまで使用）
- 本文セクションのみ中央寄せ（max-width: ≈ 940px〜1200px）

### Grid

- ヒーロー: 1 カラム（フルブリード写真）
- 製品ナビ: カルーセル（横スクロール）
- News: 4 カラム（デスクトップ）/ 1 カラム（モバイル）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（影は基本使わない） |
| 1 | 微小な背景階調差（#fbfbfb / #f8f8f8 / #f3f3f3） | セクション分割 |
| 2 | `0 1px 2px rgba(0,0,0,0.08)` | カート / モーダル |

> **特徴**: BALMUDA は**ドロップシャドウをほぼ使わず**、グレースケールの微妙な背景差で奥行きを表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- 製品写真をフルブリードで配置し、テキストは最小限にする
- CTA は **outline pill (60px)** または **glass pill (rgba(255,255,255,0.8))** を使う
- 本文の line-height は **1.8** を守る
- 英語の章タイトルには Bodoni 系のセリフ書体を充てる
- グレー階調（`#fbfbfb` / `#f8f8f8` / `#f3f3f3`）でセクションを区切る

### Don't（禁止）

- **純黒 `#000000` をテキストに使わない**（`#333333` を使う）
- **塗りのカラー CTA を作らない**（緑はロゴ専用）
- letter-spacing / palt を強制しない（フォント素のままで組む）
- ドロップシャドウで強い陰影を作らない
- 章タイトルに装飾フォントを乱用しない（Bodoni は英語章タイトルのみ）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1 カラム、ナビは収納 |
| Tablet | ≤ 1024px | 製品グリッドが 2 カラム |
| Desktop | > 1024px | フルブリード写真 + 4 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px（pill ボタン高さは 28〜44px、padding を含めて確保）

### フォントサイズの調整

- モバイルでは Hero コピー 59.625px → 32〜36px 程度に縮小
- 本文 18px は据え置き（line-height は維持）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color (Logo):  #4ba53a (BALMUDA Green / --color-brand)
Text Primary:        #333333
Text Muted:          #999999 / #bbbbbb
Background:          #ffffff
Surface (3-tone):    #fbfbfb / #f8f8f8 / #f3f3f3
Header / Nav:        #383838 / #202020
Body Font:           "Open Sans", YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Display EN Font:     bodoni-pt-variable, sans-serif
Body Size:           18px
Line Height:         1.8 (32.4px / 18px)
CTA Style:           pill 60px outline + glass pill 60px (rgba(255,255,255,0.8))
```

### プロンプト例

```
このサービスのデザインシステム（バルミューダ風）に従って、
製品紹介ページのヒーローセクションを作成してください。

- 背景: 製品写真をフルブリードで配置（白背景でも可）
- メインコピー: 18px / line-height 1.8 / color #333333
- CTA: 角丸 60px の outline pill（border 1px solid #333、背景 transparent）
- もしくは写真の上に重ねる glass pill（背景 rgba(255,255,255,0.8)）
- 英語サブタイトル: bodoni-pt-variable（フォールバック: serif）/ 24.75px / 色 #bbbbbb
- 本文: "Open Sans", "YuGothic" のスタックで letter-spacing は normal
- 純黒・塗りのカラーボタンは使わない
```
