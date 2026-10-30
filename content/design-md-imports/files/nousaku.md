# DESIGN.md — 能作（NOUSAKU）

> 能作 公式サイト（https://www.nousaku.co.jp/）のデザイン仕様書。
> 1916年創業、富山県高岡市の鋳物メーカー。錫（すず）100%の曲がる器で知られる。
> 伝統的な鋳造技術と現代の暮らしを結ぶ「用の美」を体現するブランド。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「明朝体 + 超広字間 + 極細ウェイト + 金色アクセント」で構成された、日本の伝統工芸としての品格を持つブランドサイト**。和文の見出し・装飾テキストに Kozuka Mincho Pro L（小塚明朝）、本文・UI に Noto Sans Japanese を使い分ける二重書体システム。全体を weight 200（極細）で統一し、純白背景 `#ffffff` に純黒テキスト `#000000` という高コントラストで、金属の鋭さと清廉さを表現
- **密度**: ゆったりとしたエディトリアル型。大判の製品・工房写真と十分な余白を配し、テキストは最小限。鋳物の質感と高岡の風土を主役に据える
- **キーワード**: 明朝体、超広字間、Weight 200、Gold Accent、鋳物、錫、伝統工芸、静謐、用の美
- **特徴**:
  - **和欧二重書体システム** — 和文見出し・装飾テキストは Kozuka Mincho Pro L（Adobe / 小塚明朝）の明朝体、本文・UIテキストは Noto Sans Japanese ゴシック。用途に応じて明確に使い分ける
  - **weight 200 で全体を統一** — body から見出しまで ultra-light で統一。繊細な錫の質感を文字組みで表現する。Vermicular の 300 よりもさらに細い
  - **超広い letter-spacing** — 見出しは `0.2em〜0.5em`、本文明朝は `0.2em`。他サイトの 2〜5 倍の字間。日本の伝統的な組版・書道の空間感覚を体現する最大の特徴
  - **金色アクセント `#b48c0f`** — CTA・リンクの色。錫・真鍮・金属の輝きを直接的に表現するブランドカラー
  - **純黒 + 純白のハイコントラスト** — 背景 `#ffffff`、テキスト `#000000` のピュアな組み合わせ。金属の鋭さ・清廉さを反映
  - **font-feature-settings は未使用** — `palt` なし。超広い letter-spacing がスペーシングの基本方針で、字詰めに依存しない
  - **影なし・角丸なし** — CTA を含め完全にフラット。唯一の例外はナビゲーション内の pill 型ボタン（radius 30px）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Nousaku Gold** (`#b48c0f`): ブランドアクセントカラー。CTA ボタン、リンクの色。錫・真鍮の輝きを直接的に表現する暗めのゴールド。出現回数 8（トップ）+ 3（直営店）= 全ページで一貫使用
- **Pure Black** (`#000000`): テキスト色・ナビゲーション CTA の背景・フッター背景。高岡鋳物の漆黒を想起させる

### Neutral

- **Text Primary** (`#000000`): 本文テキスト。純黒。明朝体の ultra-light ウェイトとの組み合わせで、コントラストを確保しつつ繊細さを保つ
- **Background** (`#ffffff`): ページ背景。純白
- **Light Gray** (`#e6e6e6`): バナー背景・ボーダー色。コンテンツセクションの区切り。出現回数 6
- **Section Gray** (`#f0f0f0`): イベントセクション背景。出現回数 2
- **NS Blue Gray** (`#c2d5db`): NS by NOUSAKU サブブランドのバッジ色。淡い青灰色
- **Badge Gray** (`#888888`): 「錫回収実施」等のバッジ背景。出現回数 3

### Semantic

- **Link Gold** (`#b48c0f`): リンクテキスト色。`<a>` タグの既定色が Gold に設定されている（実測: header 内の `<a>` が `rgb(180, 140, 15)`）

> **Note**: 能作のパレットは **「純黒 + 純白 + 金色」の3色が軸**。Vermicular のウォームトーン（`#faf7f5` / `#46413c`）とは対照的に、ピュアな白黒にゴールドを差すストイックな配色。金色は CTA・リンクに限定使用し、装飾的には使わない。金属の鋳肌を彷彿とさせるシンプルな色彩設計。

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体（見出し・装飾用）**:
- Kozuka Mincho Pro L（Adobe / 小塚明朝 Pro L — Adobe Fonts）
- 游明朝, YuMincho（OS フォールバック）
- ヒラギノ明朝 ProN W3, Hiragino Mincho ProN（macOS フォールバック）
- HG明朝E（Windows フォールバック）
- MS P明朝, MS 明朝（最終フォールバック）

**ゴシック体（本文・UI 用）**:
- Noto Sans Japanese（Google Fonts — 旧名称。現行の "Noto Sans JP" とは異なる古い指定）

### 3.2 欧文フォント

- 和文フォント内蔵の欧文グリフを使用。独立した欧文フォントの指定なし
- 明朝スタック側: 小塚明朝内蔵の欧文グリフ
- ゴシック側: Noto Sans Japanese 内蔵の欧文グリフ

### 3.3 font-family 指定

```css
/* 和文見出し・装飾テキスト（明朝体） */
font-family: "Kozuka Mincho Pro L", 游明朝, YuMincho,
             "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN",
             HG明朝E, "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

/* 本文・UI（ゴシック体） */
font-family: "Noto Sans Japanese", sans-serif;
```

**フォールバックの考え方**:
- **明朝スタックは Adobe → OS フォントの順** — Kozuka Mincho Pro L が最優先。Adobe Fonts がロードされない環境では游明朝 → ヒラギノ明朝にフォールバック
- **ゴシックは Noto Sans Japanese 単独** — フォールバックチェーンが短い。Noto Sans Japanese がロードされない場合は generic sans-serif のみ
- **"Noto Sans Japanese" は旧名称** — 現在の Google Fonts では "Noto Sans JP" が正式名。実装時は `"Noto Sans JP"` への読み替えを推奨

### 3.4 文字サイズ・ウェイト階層

実サイトの computed style に基づく。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Hero Display | 小塚明朝 | 30px | 500 | 1.15 | 0.5em (15px) | ヒーローセクション大見出し「錫婚式」 |
| H1 Page Title | 小塚明朝 | 20px | 300 | 1.0 | 0.5em (10px) | 下層ページタイトル「直営店」 |
| H2 Section | 小塚明朝 | 20px | 500 | 1.0 | 0.4em (8px) | セクション見出し「お知らせ」 |
| H2 Section Alt | 小塚明朝 | 20px | 200 | 1.0 | 0.4em (8px) | セクション見出し「本社イベント」 |
| H3 Copy | 小塚明朝 | 20px | 200 | 1.75 | 0.25em (5px) | 和文キャッチコピー |
| H3 Shop Title | Noto Serif JP | 18px | 600 | 1.0 | 0.2em (3.6px) | 店舗一覧見出し「北海道」 |
| P Body Mincho | 小塚明朝 | 14px | 200 | 2.0 | 0.2em (2.8px) | 明朝体の本文段落 |
| P Body Large | 小塚明朝 | 20px | 200 | 1.75 | 0.4em (8px) | 装飾的な大文字本文 |
| P Body Gothic | Noto Sans JP | 14px | 200 | 2.0 | normal | ゴシック体の本文段落 |
| P Body Gothic SM | Noto Sans JP | 13px | 200 | 2.0 | normal | やや小さいゴシック本文 |
| Span Nav Mincho | 小塚明朝 | 15px | 200 | 2.0 | 0.2em (3px) | ナビゲーション内の明朝テキスト |
| Span Anniversary | 小塚明朝 | 10px | 500 | 1.15 | 0.4em (4px) | 欧文ラベル「10TH ANNIVERSARY」 |
| Span Caption | Noto Sans JP | 11px | 200 | 1.75 | 0.24em (2.64px) | キャプション・補足テキスト |
| Span Date | Noto Sans JP | 11px | 200 | 1.5 | 0.2em (2.2px) | 日付表示「2026.04.28」 |
| A Nav | Noto Sans JP | 13px | 200 | 2.0 | normal | ナビゲーションリンク |
| A Lang | 小塚明朝 | 10px | 400 | 1.0 | normal | 言語切り替え「JP / EN / TW」 |
| Badge Label | Noto Sans JP | 11px | 400 | 1.5 | normal | バッジ「店舗限定品」「錫回収実施」 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `2.0`（14px × 2.0 = 28px）。日本語本文としては最大級のゆとり。長文の可読性を最優先にした設計
- **見出しの行間**: `1.0〜1.75`。セクション見出しは `1.0`（文字サイズと同じ）、コピーは `1.75`
- **本文明朝の字間 (letter-spacing)**: `0.2em`（2.8px / 14px）。ゴシック本文は `normal`
- **見出しの字間**: `0.25em〜0.5em`。**能作の最大の特徴**。通常のサイトの 5〜10 倍の字間

**ガイドライン**:
- 能作の超広い letter-spacing は **ブランドアイデンティティの核心**。絶対に狭めない
- 明朝体テキストには必ず `letter-spacing` を指定する。`0.2em` が最小値
- ゴシック本文は `normal` で素朴に組む。ゴシックに広い字間を適用しない
- ヒーロー見出しの `0.5em` は「1文字おき半角分の空き」に相当。書道の散らし書きに通じる空間感覚

### 3.6 禁則処理・改行ルール

- 特別な CSS 指定は確認されていない。ブラウザのデフォルト挙動を尊重
- 和文コピーは短文で構成されるため、禁則処理が問題になる場面は少ない

### 3.7 OpenType 機能

```css
/* font-feature-settings: normal（未指定） */
```

- **palt 未使用** — body にも見出しにも `font-feature-settings` の指定なし
- 超広い `letter-spacing` が文字間制御の基本方針。プロポーショナル字詰めには依存しない
- Vermicular（palt グローバル適用）とは対照的なアプローチ

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA（Gold ボタン）

実例: 「オンラインショップ」「お問い合わせ」ナビゲーション内

- 背景: `#b48c0f`（Nousaku Gold）
- 文字色: `#ffffff`
- 罫線: なし
- font-family: "Noto Sans Japanese", sans-serif
- font-size: 13px / weight 200
- line-height: 26px
- border-radius: `0px`（**角丸なし**）
- padding: 10px 0px 10px 35px（左パディング大きめ — アイコン分）

#### Secondary CTA（Gold 小ボタン）

実例: 「すべて見る」「ページを見る」セクション内

- 背景: `#b48c0f`（Nousaku Gold）
- 文字色: `#ffffff`
- font-size: 12px / weight 200
- line-height: 24px
- border-radius: `0px`
- padding: 3px 0px

#### Dark CTA（黒ボタン）

実例: 「能作の商品を買う・贈る」「能作のお店へ行く」

- 背景: `#000000`
- 文字色: `#ffffff`
- font-size: 14px / weight 200
- line-height: 28px
- border-radius: `0px`
- padding: 11px 0px 11px 45px

#### Nav Pill（ナビゲーション内丸ボタン）

実例: ナビゲーション内の黒丸ボタン

- 背景: `#000000`
- 文字色: `#ffffff`
- font-size: 13px / weight 400
- letter-spacing: 0.2em (2.6px)
- border-radius: `30px`（**pill 型** — サイト内で唯一の角丸）
- line-height: 26px

#### Outline Button（アウトラインボタン）

実例: 「ENGLISH」言語切り替え

- 背景: `transparent`
- 文字色: `#000000`
- font-size: 12px / weight 200
- letter-spacing: 0.08em (0.96px)
- border: 1px solid `#e6e6e6`
- border-radius: `0px`
- padding: 3px 0px 4px

### Inputs

- 背景: `#ffffff`
- 文字色: `#000000`
- font-family: Arial
- font-size: 13.3px / weight 400
- border: 1px solid `#000000`
- border-radius: `0px`
- padding: 10px
- フォーカスリング: 未確認

### Cards / Banners

- 背景: `#e6e6e6`（バナー型カード）
- 罫線: なし
- 影: なし
- 角丸: なし
- テキスト色: `#000000`
- font-size: 14px / weight 200

### Badges

| バッジ | 背景 | 文字色 | 用途 |
|--------|------|--------|------|
| 店舗限定品 | `#000000` | `#ffffff` | 限定品ラベル |
| 錫回収実施 | `#888888` | `#ffffff` | リサイクル対応店 |
| NS by NOUSAKU | `#c2d5db` | `#000000` | サブブランド取扱店 |

- 共通: font-size 11px / weight 400 / padding 5px 10px / border-radius 0px

### Navigation

- 背景: `transparent`（固定ヘッダー）
- 文字色: `#000000`
- リンク色: `#b48c0f`（Gold）
- font-family: Noto Sans Japanese
- font-size: 13px / weight 200
- 言語切り替え: Kozuka Mincho / 10px / weight 400

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 10px | バッジ内パディング、テキスト間 |
| S | 20px | セクション内の要素間余白 |
| M | 35px | CTA の左パディング（アイコン分） |
| L | 64px | セクション見出しの右パディング |
| XL | 96px | セクション間余白（推定） |
| XXL | 128px | ヒーローセクション上下（推定） |

### Container

- Max Width: 推定 1200px
- Padding (horizontal): 推定 20–40px

### Grid

- バナー一覧: フレックスボックスによる横並び
- 店舗一覧: 地域別リスト構造
- 写真とテキストのエディトリアルレイアウト

### Layout 原則

- **大判の製品・工房写真** — 鋳物の質感を伝えるフルブリード画像が主役
- **テキストは中央寄せ + 超広字間** — 明朝体の見出しを `0.2em〜0.5em` の字間で配置
- **セクション間はグレー面で区切り** — `#f0f0f0` / `#e6e6e6` の薄いグレーセクションを挟む
- **ナビゲーションは明朝体とゴシック体の混在** — カテゴリ名は明朝体、メニュー項目はゴシック体

---

## 6. Depth & Elevation

- **影**: 使用しない。**完全にフラット**
- **段階表現**: 背景色の切り替え（`#ffffff` → `#f0f0f0` → `#e6e6e6` → `#000000`）で奥行きを表現
- **角丸**: Nav Pill（30px）以外はすべて `0px`。CTA・カード・バッジ・入力欄すべて角丸なし
- **ボーダー**: `#e6e6e6` の細い罫線で区切りを表現

| Level | Expression | 用途 |
|-------|-----------|------|
| 0 | `#ffffff`（純白） | 通常セクション・本文背景 |
| 1 | `#f0f0f0`（極薄グレー） | イベントセクション背景 |
| 2 | `#e6e6e6`（薄グレー） | バナーカード背景・ボーダー |
| 3 | `#000000`（純黒） | フッター・ダーク CTA・ナビ pill |

---

## 7. Do's and Don'ts

### Do's

- **和文見出し・装飾テキストは小塚明朝 + weight 200 + letter-spacing 0.2–0.5em** で組む。超広い字間が能作のブランドアイデンティティの核心
- **本文ゴシックは Noto Sans Japanese（Noto Sans JP）** を使う
- **全テキストのウェイトを 200 で統一** する。繊細さと清廉さを表現する最も重要な要素
- **CTA ボタンは `#b48c0f`（Gold）+ 角丸なし** で。金属の直線的なフォルムを反映
- **背景は `#ffffff`（純白）** を基調とする
- **テキスト色は `#000000`（純黒）** を使う。ultra-light ウェイトとの組み合わせで可読性を確保
- **明朝体テキストには必ず `letter-spacing` を指定** する。`0.2em` が最小値
- **ゴシック本文の `letter-spacing` は `normal`** のまま。ゴシックに広い字間を適用しない
- **line-height は `2.0`** を本文の標準とする。日本語の読書体験を最優先
- **バッジは角丸なし + 小さいフォント（11px / weight 400）** で控えめに
- **フラットなデザイン** — 影を使わず、背景色の段階で奥行きを表現

### Don'ts

- **見出しの letter-spacing を 0.2em 未満にしない** — 狭い字間は能作の世界観を根本から壊す
- **weight 300 以上を本文に使わない** — weight 200 の ultra-light が能作の全体方針。Vermicular の 300 よりさらに細い
- **ゴシック体で見出しを組まない** — 見出し・装飾テキストは必ず明朝体
- **`palt` を追加しない** — 能作は `font-feature-settings` を意図的に使っていない。字間は `letter-spacing` で制御する
- **角丸を CTA に適用しない** — Gold CTA は `border-radius: 0px`。唯一の例外はナビ内 pill（30px）
- **box-shadow を使わない** — 完全にフラットな深度表現がルール
- **Gold `#b48c0f` を装飾的に広範囲に使わない** — CTA とリンクに限定。面色には使わない
- **ウォームトーンの背景を使わない** — 能作は純白 `#ffffff`。オフホワイト（`#faf7f5` 等）は使わない
- **明朝体テキストの `letter-spacing` を `normal` にしない** — 明朝には必ず `0.2em` 以上の字間を指定

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | スマホ縦。1列レイアウト |
| Tablet | 768–1024px | タブレット。2列に切り替え |
| Desktop | > 1024px | デスクトップ。フルレイアウト |

### タッチターゲット

- CTA の line-height 26px + padding 10px で推定 46px。**モバイルでも 44px 以上を確保**

### フォントサイズの調整

- ヒーロー見出し: デスクトップ 30px → モバイル推定 20–24px（65–80% に縮小）
- セクション見出し: デスクトップ 20px → モバイル推定 16–18px
- 本文: 14px はモバイルでも維持（縮小しない）
- letter-spacing: モバイルでは見出しの字間を 0.2–0.3em に縮小（画面幅に収まるよう調整）

### レイアウトの変化

- デスクトップの横並びバナー → モバイルで縦積み
- 店舗一覧: 地域別のリスト構造はモバイルでも維持
- 大判の製品写真はモバイルでもフルブリードで維持

---

## 9. Agent Prompt Guide

能作らしい UI を生成するときは以下を伝えるとよい：

```
- 和文見出し font-family: "Shippori Mincho", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", 游明朝, YuMincho, serif
  （※ 小塚明朝 Pro L の代替として Shippori Mincho を使用）
- 本文 font-family: "Noto Sans JP", sans-serif
- 全要素 font-weight: 200（ultra-light で統一）
- 和文見出し letter-spacing: 0.2–0.5em（超広字間が最大の特徴）
- 明朝本文 letter-spacing: 0.2em
- ゴシック本文 letter-spacing: normal
- 本文 font-size: 14px / line-height: 2.0
- font-feature-settings: 指定なし（palt 不使用）
- 背景色 #ffffff（純白）
- テキスト色 #000000（純黒）
- CTA 背景 #b48c0f（Gold — 錫・真鍮の輝き）/ 文字白 / 角丸なし
- Dark CTA 背景 #000000 / 文字白 / 角丸なし
- バナー背景 #e6e6e6 / セクション背景 #f0f0f0
- 影を使わない（box-shadow: none）
- 角丸はナビ pill（30px）のみ。CTA・カード・バッジはすべて角丸なし
- バッジ: 11px / weight 400 / padding 5px 10px / 角丸なし
- 写真を大判フルブリードで配置し、余白を贅沢に取る
- 明朝体の超広字間でブランドの静謐さと品格を表現
```

### フォント代替ガイド

| 実サイト | Google Fonts 代替 | 選定理由 |
|----------|-------------------|----------|
| Kozuka Mincho Pro L（Adobe / 小塚明朝） | Shippori Mincho | 伝統的な日本語明朝体。小塚明朝の端正な字形に近い印象 |
| Noto Sans Japanese | Noto Sans JP | 同一フォントの現行名称。完全互換 |
| Noto Serif JP（直営店ページ） | Noto Serif JP | Google Fonts で直接利用可能 |
