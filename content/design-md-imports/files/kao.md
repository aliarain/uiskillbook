# DESIGN.md --- KAO

> KAO（https://www.kao.com/jp/）のデザイン仕様書。
> 2026-05-21 取得の computed style に基づく。
> 花王グループのコーポレートサイト。日用品・化粧品・ヘルスケアを展開する日本最大級の FMCG メーカー。Biore・Attack・Merit 等のブランドを擁する。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 日本を代表する日用品メーカーのコーポレートサイト。**Kao Teal（#00806d）** を軸に、自然・清潔感・サステナビリティを表現。UD（ユニバーサルデザイン）フォントの採用が象徴するように、アクセシビリティと親しみやすさを重視した設計
- **密度**: コーポレート型ポータル。ブランド情報・サステナビリティ・IR・ニュースを多層的に配置。セクション背景（白 / ウォームグレー #f6f6f4）の切り替えでリズムを作る
- **キーワード**: Teal ブランドカラー、UD フォント、ウォームグレー、ナチュラル、アクセシビリティ、サステナビリティ
- **特徴**: **FP-HiraginoUDSansStdN（Fontplus）** を全面採用した UD（ユニバーサルデザイン）フォント設計。W3（本文）と W6（見出し）の2ウェイトで階層を構成。テキストカラーは純黒を避けた `#3c3c3c` / `#4e4d4e` のソフトグレー。ボタン・カードは **border-radius 10〜16px の角丸** で統一。palt 非適用、letter-spacing は 0.01〜0.02em の極めて控えめな設定。Kao Green（#6cc04a）をアクセントに配し、自然と清潔感を両立

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

花王のカラーパレットは Teal（ティール）を軸にした、自然を想起させる清潔感のある構成。

- **Kao Teal** (`#00806d`): メインのブランドカラー。フッター背景・ブランドアクセントに使用（rgb 0, 128, 109）。深みのある青緑で信頼感と自然を表現
- **Kao Teal Dark** (`#005856`): ダークバリアント。ホバー・プレス時のアクセント（rgb 0, 88, 86）
- **Kao Green** (`#6cc04a`): ビビッドグリーンのアクセントカラー（rgb 108, 192, 74）。サステナビリティ・ESG 関連コンテンツのアクセント

### Text

- **Text Primary** (`#3c3c3c`): 本文テキスト・見出し（rgb 60, 60, 60）。純黒を避けたソフトなグレーブラック
- **Text Secondary** (`#4e4d4e`): ナビゲーション・補足テキスト・フッター見出し（rgb 78, 77, 78）。本文より僅かに明るいダークグレー
- **Text Muted** (`#767676`): パンくず・メタ情報（rgb 118, 118, 118）
- **Text on Teal** (`#ffffff`): Teal 背景上の白テキスト

### Accent

- **Search Button Surface** (`#ebf7f5`): 検索ボタン背景（rgb 235, 247, 245）。Teal の極薄バリアント
- **Light Teal** (`#b5e2dd`): 装飾・タグ背景（rgb 181, 226, 221）

### Surface

- **Background** (`#ffffff`): ページ背景
- **Surface Warm** (`#f6f6f4`): セクション背景のウォームグレー（rgb 246, 246, 244）。純白との微妙な温度差でセクション分離。count 10 で頻出
- **Footer** (`#00806d`): フッター背景。Kao Teal ベタ塗り

### Border

- **Border** (`#d7d7cf`): 区切り線・入力欄の枠（rgb 215, 215, 207）。僅かにウォームなグレーボーダー

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（プライマリ）**: FP-HiraginoUDSansStdN --- Fontplus 経由の Web フォント。ヒラギノ UD 角ゴシックの StdN 版。UD（ユニバーサルデザイン）フォントとして設計され、文字の判別性・可読性を重視
- **W6（見出し用）**: "FP-ヒラギノUD角ゴ StdN W6", FP-HiraginoUDSansStdN-W6 --- セクション見出し・フッター見出し
- **W3（本文用）**: "FP-ヒラギノUD角ゴ StdN W3", FP-HiraginoUDSansStdN-W3 --- 本文・ナビゲーション・パンくず

### 3.2 欧文フォント

- **サンセリフ**: sans-serif（ジェネリック指定のみ）。FP-HiraginoUDSansStdN 内蔵の欧文グリフで欧文もカバーする設計
- **セリフ・等幅**: 使用なし

### 3.3 font-family 指定

```css
/* 見出し（W6） */
font-family: "FP-ヒラギノUD角ゴ StdN W6", FP-HiraginoUDSansStdN-W6, sans-serif;

/* 本文（W3） */
font-family: "FP-ヒラギノUD角ゴ StdN W3", FP-HiraginoUDSansStdN-W3, sans-serif;
```

**フォールバックの考え方**:
- Fontplus の Web フォントが読み込めれば FP-HiraginoUDSansStdN が適用される
- 読み込めない場合は OS のデフォルト sans-serif にフォールバック（フォールバックチェーンが短い）
- **preview.html では Noto Sans JP（Google Fonts）を代替使用**。Noto Sans JP は同じゴシック体で UD フォント的な可読性を持つ

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style 実測値（2026-05-21 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1（ロゴ） | W3 | 32px | 700 | normal | normal | ロゴ・サイトタイトル |
| H2（セクション） | W6 | 32px | 700 | 1.25 (40px) | 0.01em (0.32px) | セクション見出し。color: #3c3c3c |
| H2（白抜き） | W6 | 32px | 700 | 1.25 (40px) | 0.01em (0.32px) | Teal 背景上。color: #ffffff |
| H2（トピック） | W3 | 24px | 700 | 1.5 (36px) | 0.013em (0.32px) | トピック見出し。color: #3c3c3c |
| H2（サブ見出し） | W6 | 24px | 400 | 1.5 (36px) | 0.02em (0.48px) | カテゴリ見出し。color: #4e4d4e |
| H2（フッター） | W6 | 20px | 700 | 1.1 (22px) | normal | フッターセクション。color: #4e4d4e |
| Body | sans-serif | 16px | 400 | normal | normal | デフォルト本文 |
| Body（コンテンツ） | W3 | 16px | 400 | 1.75 (28px) | 0.02em (0.32px) | 記事本文。color: #3c3c3c |
| Nav | W3 | 14px | 400 | 1.5 (21px) | normal | ナビゲーション。color: #4e4d4e |
| Breadcrumb | — | 14px | 400 | — | normal | パンくず。color: #767676 |

**ウェイトの特徴**:
- **W6（Bold 相当）** と **W3（Regular 相当）** の二段構成
- 見出しは W6（700）、本文・ナビは W3（400）で明確に分離
- H2 サブ見出しは W6 フォントだが weight: 400 という組み合わせ（フォント自体のウェイトで重さを確保）

### 3.5 行間・字間

- **本文（コンテンツ）の行間**: `line-height: 1.75`（28px / 16px）--- 日本語として広めで読みやすい行間
- **本文（デフォルト）の行間**: `line-height: normal`（ブラウザデフォルト）
- **見出しの行間**: `line-height: 1.25`（H2 セクション 32px → 40px）--- コンパクトな見出し間隔
- **トピック見出しの行間**: `line-height: 1.5`（H2 トピック 24px → 36px）--- 中間サイズは広めの行間
- **本文の字間**: `letter-spacing: 0.02em`（0.32px / 16px）--- 極めて控えめな字詰め
- **見出しの字間**: `letter-spacing: 0.01em`（0.32px / 32px）--- サイズに応じて比率が小さくなる

**ガイドライン**:
- letter-spacing は `0.32px` が頻出値。フォントサイズによって em 換算値が変わる（32px → 0.01em / 24px → 0.013em / 16px → 0.02em）
- line-height はコンテンツ本文で 1.75 と日本語サイトとして広め。UD フォントの設計思想（可読性重視）と一致
- ナビゲーション・パンくず等の UI テキストは letter-spacing: normal

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
overflow-wrap: break-word; /* 長いURL・商品コードの折り返し */
```

- 日本語固有の禁則処理は特別な設定なし。ブラウザデフォルトに従う
- 商品名・ブランド名には日本語と英語（Biore, Attack, Merit 等）が混在するため、overflow-wrap の設定が重要

### 3.7 OpenType 機能

```css
font-feature-settings: normal; /* palt は非適用 */
```

- **palt（プロポーショナル字詰め）**: 非適用。FP-HiraginoUDSansStdN のデフォルト字間をそのまま使用
- UD フォントは字間の均一性が設計に織り込まれているため、palt を適用しない方が UD フォントの設計意図に沿う
- letter-spacing の 0.32px（0.01〜0.02em）は CSS 側での微調整であり、OpenType 機能とは独立

### 3.8 縦書き

- 該当なし。花王コーポレートサイトは横書きのみ

---

## 4. Component Stylings

### Buttons

**Search Button（角丸）**

- Background: `#ebf7f5`（Teal 極薄）
- Text: `#3c3c3c`
- Border Radius: `0px 8px 8px 0px`（右側のみ角丸）
- 備考: 検索バーの右端に配置される非対称角丸

**Nav Pill（ナビゲーション）**

- Background: `rgba(255, 255, 255, 0.8)`（半透明白）
- Text: `#4e4d4e`
- Border Radius: **16px**（pill 型）
- 備考: ヘッダー内のカテゴリナビ

**Card Link（グリッド内）**

- Background: `#ffffff`
- Text: `#4e4d4e`
- Border Radius: **10px**
- 備考: ブランド一覧・コンテンツカードのリンク

**Carousel Button（円形）**

- Border Radius: **50%**（完全な円形）
- 備考: 前後ナビゲーション

**ボタンの考え方**:
- カードとリンクは **border-radius 10px** で統一。pill 型（16px）はナビ内のみ
- 花王のデザインにはシャープエッジ（0px）のボタンは存在しない（検索ボタンの左辺 0px は入力欄との接合面）
- 半透明白（rgba 0.8）のナビ pill は、背景画像上でも視認性を保つ設計
- CTA に強い原色ボタンを使わない --- コーポレートの落ち着いた印象を維持

### Inputs

**検索入力**:
- Background: `#ffffff`
- Border: 1px solid `#d7d7cf`
- Border Radius: `8px 0px 0px 8px`（左側のみ角丸）
- Font Size: 16px
- 備考: 検索ボタンと一体化した非対称デザイン

### Cards

- Background: `#ffffff`
- Border Radius: **10px**
- Padding: 適度な内部余白
- Shadow: 最小限（フラットに近い）
- 構成: サムネイル + タイトル + 補足テキスト

### Navigation

- Link Size: 14px
- Weight: 400（W3）
- Line Height: 1.5 (21px)
- Color: `#4e4d4e`
- Style: pill 型ナビ（radius 16px）と通常テキストナビの併用

### Footer

- Background: `#00806d`（Kao Teal）
- Heading Weight: 700（W6）
- Heading Size: 20px
- Link Color: `#ffffff`（白テキスト）
- Link Size: 14px

---

## 5. Layout Principles

### Spacing Scale

実測値に基づく推定:

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | 微小余白・アイコンと文字の間隔 |
| S | 8px | コンパクトな内部余白 |
| M | 16px | 標準余白・要素間 |
| L | 24px | セクション内余白 |
| XL | 48px | ヘッダー横 padding |
| XXL | 64px | セクション間余白 |

### Container

- Max Width: 推定 1200px
- Header Padding (horizontal): `48px`
- セクション間の区切り: 背景色の切り替え（白 #ffffff → ウォームグレー #f6f6f4）で視覚的に分離

### Grid

- ブランドカード: デスクトップで 3〜4 カラムグリッド
- ニュース一覧: 縦積みリスト
- セクションは全幅背景 + コンテンツ幅制約の二層構造

---

## 6. Depth & Elevation

花王は背景色の切り替えとソフトなシャドウで控えめに階層を構成する。

| Level | 表現 | 用途 |
|-------|------|------|
| 0 | `background: #ffffff` | 通常コンテンツ・カード |
| 1 | `background: #f6f6f4` | ウォームグレーセクション |
| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` | カードホバー |
| 2 | `background: #00806d` | フッター |
| 2 | `box-shadow: 0 2px 8px rgba(0,0,0,0.12)` | モーダル・ドロップダウン |

- 背景色の2段（白 → ウォームグレー）でセクションの温度差を表現
- シャドウは最小限。フラットに近い上品な階層設計
- フッターの Teal べた塗り（#00806d）が最も強い面の存在感

---

## 7. Do's and Don'ts

### Do（推奨）

- フォントは **FP-HiraginoUDSansStdN** を指定する（利用できない環境では Noto Sans JP を代替）
- 見出しは **W6**、本文は **W3** の二段構成を守る
- テキストカラーは **#3c3c3c**（本文）/ **#4e4d4e**（ナビ・補足）を使う
- ブランドカラーは **#00806d（Kao Teal）** を使う
- セクション背景は `#ffffff` と `#f6f6f4`（ウォームグレー）を交互に使い、リズムを作る
- カード・リンクの角丸は **border-radius: 10px** で統一する
- 本文（コンテンツ）の line-height は **1.75** を使う
- letter-spacing は `0.32px`（0.01〜0.02em）の控えめな値を使う
- アクセントカラーは **#6cc04a（Kao Green）** をサステナビリティ文脈で使う
- フッター背景は **#00806d（Kao Teal）** にする

### Don't（禁止）

- テキストに `#000000`（純黒）を使わない（`#3c3c3c` / `#4e4d4e` がデザインの正値）
- ボタンにシャープエッジ（border-radius: 0px）を使わない
- `palt`（font-feature-settings: "palt"）を適用しない（UD フォントのデフォルト字間を尊重）
- letter-spacing に `0.05em` 以上の大きな値を設定しない（0.01〜0.02em が正値）
- Teal（#00806d）と Green（#6cc04a）を同じ文脈で混ぜない（Teal はブランド、Green はサステナビリティ/アクセント用）
- 派手な box-shadow や強い elevation を使わない（フラットに近い上品な階層が基本）
- フォントウェイトに W3/W6 以外（W1, W4, W9 等）を使わない
- ウォームグレー `#f6f6f4` を純白 `#ffffff` の代わりにページ全体の背景にしない（セクション分離のための限定使用）
- ナビゲーション pill の半透明白（rgba 0.8）を不透明白（#ffffff）に変えない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。ハンバーガーナビ化 |
| Tablet | 768〜1023px | タブレット |
| Desktop | ≥ 1024px | デスクトップ |

### モバイル時の調整

- H2（32px）→ 24〜28px 程度に縮小
- ヘッダー横 padding（48px）→ 16px に縮小
- ブランドカードグリッドは 1〜2 カラムに折り返し
- カードの border-radius 10px はモバイルでも維持
- フッターの Teal 背景 #00806d はモバイルでも変更なし

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- UD フォント採用に象徴されるアクセシビリティ重視の設計。タッチターゲットも十分なサイズを確保
- カルーセルの円形ボタン（radius: 50%）は直径 48px 以上を推奨

### フォントサイズの調整

- モバイルでは本文 14〜16px、見出しはデスクトップの 70〜80% 程度に縮小
- FP-HiraginoUDSansStdN は Web フォントのため、デバイス間で表示が安定

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: KAO（花王）
Origin: 花王グループ --- 日用品・化粧品・ヘルスケアの日本最大級 FMCG メーカー
Kao Teal: #00806d（ブランドカラー・フッター）
Kao Teal Dark: #005856（ダークバリアント）
Kao Green: #6cc04a（アクセント・サステナビリティ）
Search Surface: #ebf7f5（Teal 極薄）
Light Teal: #b5e2dd（装飾）
Text Primary: #3c3c3c
Text Secondary: #4e4d4e
Text Muted: #767676
Background: #ffffff
Surface Warm: #f6f6f4
Border: #d7d7cf
Footer: #00806d
Font Heading: "FP-ヒラギノUD角ゴ StdN W6", FP-HiraginoUDSansStdN-W6, sans-serif
Font Body: "FP-ヒラギノUD角ゴ StdN W3", FP-HiraginoUDSansStdN-W3, sans-serif
Font Substitute: "Noto Sans JP", sans-serif（preview.html 用）
palt: 非適用（font-feature-settings: normal）
letter-spacing: 0.01-0.02em（0.32px 基準）
Body: 16px / 400 / line-height 1.75 / letter-spacing 0.02em
H2 Section: 32px / 700 / line-height 1.25 / letter-spacing 0.01em
H2 Topic: 24px / 700 / line-height 1.5 / letter-spacing 0.013em
Nav: 14px / 400 / line-height 1.5
Card Radius: 10px
Nav Pill Radius: 16px
Shadow: 最小限（フラットに近い）
```

### プロンプト例

```
花王のデザインシステムに従って、ブランド一覧ページを作成してください。
- フォント: "Noto Sans JP", sans-serif（UD フォント代替）
- font-feature-settings: normal（palt は非適用）
- letter-spacing: 0.02em（本文）/ 0.01em（見出し）
- 本文: 16px / line-height: 1.75 / color: #3c3c3c
- H2: 32px / font-weight: 700 / line-height: 1.25
- カード: bg #ffffff / border-radius: 10px
- 背景: セクションごとに #ffffff / #f6f6f4 を交互に使用
- フッター: bg #00806d / text #fff
- アクセント: #6cc04a（サステナビリティ関連のみ）
- テキストリンク: #4e4d4e（本文色に近い控えめなリンク）
- シャドウは最小限に。背景色の切り替えで面の階層を作る
```

### 字詰め・組版の重要ポイント

1. **UD フォントの設計思想**: FP-HiraginoUDSansStdN はユニバーサルデザインフォントとして、文字の判別性（濁点と半濁点の区別等）を重視した設計。palt を適用しない・letter-spacing を控えめにする設計は、UD フォントのデフォルト字間を尊重する意図がある
2. **W3 / W6 の二段構成**: 一般的な 400 / 700 ではなく、フォント自体に W3（Light〜Regular）と W6（Bold）が組み込まれている。CSS の font-weight と合わせて正しいウェイトが選択される
3. **0.32px の letter-spacing**: 全体を通じて 0.32px が頻出するが、em 換算値はフォントサイズによって異なる（32px → 0.01em / 16px → 0.02em）。px 値ではなく em 値で指定すると、サイズ変更時の比率が維持される
4. **ウォームグレー（#f6f6f4）**: 純白に対して黄み寄りの微妙な差（R: 246, G: 246, B: 244 --- B のみ 2pt 低い）。日用品メーカーらしい温もりと清潔感の両立
5. **Teal / Green の使い分け**: Kao Teal（#00806d）はブランドカラーとして構造的に使用（フッター・アクセント）。Kao Green（#6cc04a）はサステナビリティ・環境関連のアクセントカラー。両方を同じ文脈で使うとブランドの色体系が崩れる
6. **Fontplus の Web フォント依存**: FP-HiraginoUDSansStdN は Fontplus 経由の Web フォントのため、ローカル環境や preview.html では表示されない。Noto Sans JP（Google Fonts）が最も近い代替。Noto Sans JP は同じゴシック体で、可読性重視の設計思想が共通する

---

**取得日**: 2026-05-21
**出典**: https://www.kao.com/jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
