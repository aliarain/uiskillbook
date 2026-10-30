# DESIGN.md — ARTS&SCIENCE

> ARTS&SCIENCE（https://arts-science.com/）のデザイン仕様書。
> 2026-06-07 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 2003年にソニア・パークが東京で創設したファッション/ライフスタイルブランド。コンセプト "the perfect 6 and the beautiful 4" — 機能と美、アートとサイエンスの均衡を体現する。オリジナルコレクションとキュレーションアイテムを扱う、ギャラリーのような空間設計
- **密度**: ヒーローは全幅の大判写真スライダーが画面を占め、テキストは最小限。プロダクト情報はプルダウン内に格納し、ファーストビューのノイズを極限まで削る。情報は「開示させる」設計
- **キーワード**: ギャラリー的、静謐、タイムレス、セリフ体、ミニマル、控えめな贅沢、クラフト
- **特徴**: ブランドの文字組みは **SabonNext（セリフ体）** を主軸に据え、欧文の見出し・ナビゲーションにギャモン系の格調を与える。和文は **ヒラギノ角ゴ ProN** で支え、本文補助には **Avenir55Roman** のヒューマニストサンセリフを使う。背景は `#f9f9f9` の温かみのあるオフホワイト、テキストは `#1e1e1e` の柔らかい墨色。ボタンらしいボタンは存在せず、テキストリンクと pill 型のカテゴリフィルターだけで動線を構成する**ほぼボタンレスの UI**。装飾色を持たず、写真の色彩がページの彩度を担う

---

## 2. Color Palette & Roles

ARTS&SCIENCE は彩度を完全に排除し、無彩色のみで UI を構成する。ブランドカラーは「色がないこと」そのもの。プロダクト写真と素材の質感が画面の色を担い、UI はそれを邪魔しない。

### Primary（ブランドカラー）

- ブランドカラーとして特定の有彩色は持たない。`#1e1e1e`（墨色）と `#f9f9f9`（温白）の二極で完結する

### Neutral

- **Text Primary** (`#1e1e1e`): 本文・見出し・ナビゲーション。純黒ではなく温かみのある墨色（rgb 30, 30, 30）
- **Text Light** (`#efefef`): 暗い写真上のオーバーレイテキスト。ヒーローキャプション、PICKUP ラベル等
- **Background** (`#f9f9f9`): ページ背景。純白ではなく微かに暖色寄りのオフホワイト
- **Surface Hero** (`#ecebeb`): ヒーロースライダー・セクション背景。温かみのあるライトグレー
- **Footer** (`#1e1e1e`): フッター背景。Text Primary と同色で反転レイアウト

### Accent

- 有彩色のアクセントは使用しない
- Swiper.js のデフォルト `#007aff` はライブラリ由来であり、ブランドカラーではない

---

## 3. Typography Rules

### 3.1 和文フォント

ARTS&SCIENCE は **ヒラギノ角ゴ ProN** を和文の基盤とする。本文テキストでは yakuhanjp（約物半角）と游ゴシックを間に挟み、約物の字間を調整する。Webフォントは使用しない。

- **Hiragino Kaku Gothic ProN**: 主要和文フォント
- **yakuhanjp**: 約物半角化（括弧・読点の詰め用）
- **YuGothic**: macOS/Windows フォールバック
- **serif**: 最終フォールバック（本文スタックのジェネリック）

### 3.2 欧文フォント

欧文は2つの書体を使い分ける。見出し・ナビゲーションにはガラモン系セリフの **SabonNext**、本文・UIテキストにはヒューマニストサンセリフの **Avenir55Roman** を使う。

- **SabonNextRegular**: 見出し、ナビゲーション、ヒーローキャプション。格調と静謐さを担う
- **SabonNextDemi**: ショップラベル等の強調用。Regular より少し太いが weight 値は 400 のまま
- **Avenir55Roman**: 本文、カテゴリラベル、プルダウン内テキスト

> **フォント代替の注記**: SabonNext は Linotype のライセンスフォント。preview.html では Google Fonts の **EB Garamond** で代替する（同じガラモン系セリフ）。Avenir は Frutiger のライセンスフォント。Google Fonts の **Nunito Sans** で代替する（同じヒューマニストサンセリフ系統）

### 3.3 font-family 指定

```css
/* 見出し・ナビゲーション（セリフ） */
font-family: SabonNextRegular, serif;

/* 見出し強調・ショップラベル */
font-family: SabonNextDemi, serif;

/* 本文・UI テキスト（サンセリフ） */
font-family: Avenir55Roman, yakuhanjp, yugothic,
             "Hiragino Kaku Gothic ProN", serif;

/* body（ベースリセット） */
font-family: "Hiragino Kaku Gothic ProN", sans-serif;

/* ---- preview.html 用 代替フォント ---- */
/* SabonNext → EB Garamond（Google Fonts） */
/* Avenir55Roman → Nunito Sans（Google Fonts） */
```

**フォールバックの考え方**:
- SabonNext 系は @font-face でローカル埋め込みされているため、フォールバックは `serif` のみ
- 本文スタックは Avenir55Roman → yakuhanjp（約物詰め）→ yugothic → ヒラギノ角ゴ ProN → serif の順。欧文は Avenir で表示し、和文はヒラギノに自動的に継がれる
- 最終ジェネリックが `serif`（`sans-serif` ではない）である点に注意。ブランドのセリフ寄りの姿勢を反映

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Caption | SabonNextRegular | 26px | 400 | 1.3 | 0.03em | "Products" 等。写真上のオーバーレイ |
| Section Title | SabonNextRegular | 21px | 400 | 1.5 | 0.063em | "PICKUP" 等。letter-spacing 広め |
| Nav Link | SabonNextRegular | 17px | 400 | 1.3 | 0.03em | ヘッダーナビゲーション |
| Shop Column Link | SabonNextRegular | 15px | 400 | 1.3 | 0.03em | 店舗名リンク |
| Shop Label | SabonNextDemi | 14px | 400 | 1.3 | 0.15em | "TOKYO" 等。letter-spacing 極広 |
| Pickup Item Title | Avenir55Roman + 和文 | 15px | 500 | 1.8 | 0.05em | 商品名。weight 500 で少し太め |
| Pulldown Item | Avenir55Roman + 和文 | 14px | 400 | 1.8 | 0.05em | プルダウン内テキスト |
| Category Label | Avenir55Roman + 和文 | 13px | 400 | 1.3 | 0.05em | "Collection" 等 |
| Filter Link | Avenir55Roman | 14px | 400 | 1.3 | 0.042em | "All" pill リンク |
| Body Base | Hiragino Kaku Gothic ProN | 10px | 400 | — | — | body リセット値（実際の本文は上位で上書き） |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.8`（25.2px / 14px）。Avenir + 和文の組み合わせで広めに取り、余白のある読み心地
- **見出しの行間**: `line-height: 1.3`。SabonNext の見出しは詰めて組み、写真に添えるキャプション的な佇まい
- **セクションタイトルの行間**: `line-height: 1.5`。"PICKUP" 等のラベル的見出しはやや広め
- **本文の字間**: `letter-spacing: 0.05em`。Avenir + 和文スタックでは軽い字間を入れて通気性を出す
- **見出しの字間**: `letter-spacing: 0.03em`。SabonNext は素のメトリクスが美しいため最小限
- **ラベルの字間**: `letter-spacing: 0.15em`。"TOKYO" 等のショップラベルは大きく開けてキャプション的に見せる

### 3.6 OpenType 機能

- `font-feature-settings` の明示的な指定なし（`normal`）
- `palt` は使用しない
- `kern` も指定なし — SabonNext はフォント内蔵のカーニングテーブルに委ねる

### 3.7 改行・禁則

- コンテンツテキストが極端に少ないため、長文の折り返しが問題になる場面はほぼない
- 商品名は欧文のみ or 短い和文のため、禁則処理の影響は限定的

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

ARTS&SCIENCE は従来のボタンUIをほぼ持たない。動線はテキストリンクで構成され、唯一のボタン的要素はカテゴリフィルターの pill リンクのみ。

**Pill Filter（"All" カテゴリリンク）**

- Background: `transparent`
- Text: `#1e1e1e`
- Border: なし（実測では枠線なし）
- Border Radius: **60px**（pill 形状）
- Font Family: Avenir55Roman, sans-serif
- Font Size: 14px
- Font Weight: 400
- Letter Spacing: 0.042em
- Line Height: 1.3

**テキストリンク（ナビゲーション）**

- Text: `#efefef`（暗い背景上）/ `#1e1e1e`（明るい背景上）
- Font Family: SabonNextRegular, serif
- Font Size: 17px（ヘッダー）/ 15px（本文内）
- Font Weight: 400
- Letter Spacing: 0.03em
- Underline: なし（hover 時のみ）

### Inputs

- 実測で目立つフォーム入力要素は確認されず（EC 機能は別ドメインに分離している可能性あり）

### Cards

ARTS&SCIENCE の「カード」は明示的なカードUIではなく、写真 + テキストの組み合わせで構成される。

- Background: `transparent`（写真の上にテキストをオーバーレイ）
- Border: なし
- Border Radius: 0px
- Shadow: なし
- 構成: 大判写真 + カテゴリラベル（13px Avenir） + アイテム名（15px Avenir weight 500）

### Section Backgrounds

- **Page**: `#f9f9f9`（温白）
- **Hero / Pickup**: `#ecebeb`（温グレー。写真のマット感を引き出す）
- **Footer**: `#1e1e1e`（Text Primary と同色で反転）
- **Pulldown**: `#f9f9f9` / `#ecebeb` の交互パターン

---

## 5. Layout Principles

### Container

- ヒーロースライダーは **全幅**（viewport 100%）。写真のインパクトを最大化
- ナビゲーションはオーバーレイでヒーロー上に重ねて表示
- プロダクトグリッドとショップ情報は中央寄せのコンテナ内

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 8px | カテゴリラベルとアイテム名の間 |
| S | 16px | プルダウン内の項目間 |
| M | 24px | セクション内パディング |
| L | 40px | セクション間余白 |
| XL | 80px | ヒーローとコンテンツの間 |

### Grid

- ヒーロー: 1 カラム全幅スライダー（Swiper.js）
- PICKUP: 大判写真グリッド
- SHOP: マルチカラム（都市別のリンクリスト）
- フッター: コンパクトなリンク群

---

## 6. Depth & Elevation

ARTS&SCIENCE はシャドウを一切使わない。奥行きは写真のトーンとテキストオーバーレイの透過で表現する。ギャラリーの壁面に作品を掛けるように、すべてがフラットに並ぶ。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素。例外なし |

背景色の切り替え（`#f9f9f9` → `#ecebeb` → `#1e1e1e`）だけで空間を区切る。

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出し・ナビゲーションは **SabonNext（セリフ体）** で組む。EB Garamond で代替可
- 本文・UIテキストは **Avenir55Roman + yakuhanjp + ヒラギノ角ゴ ProN** で組む。Nunito Sans で代替可
- テキスト色は **`#1e1e1e`**（墨色）を使う。純黒 `#000000` にしない
- 背景は **`#f9f9f9`**（温白）を使う。純白 `#ffffff` にしない
- 写真上のテキストは **`#efefef`** を使う
- 見出しの `letter-spacing` は **0.03em** を基本とし、ラベルでは **0.15em** まで広げる
- 本文の `line-height` は **1.8** を維持する
- 写真を大きく使い、テキストは最小限にする
- 動線はテキストリンクで構成し、ボタンUIを避ける

### Don't（禁止）

- 有彩色のアクセントカラーを追加しない（ブランドは無彩色で完結する）
- ゴシック体（サンセリフ）で見出しを組まない（見出しはセリフ体）
- 太い `font-weight`（700 以上）を使わない（最大でも 500）
- ドロップシャドウを使わない
- カードに枠線や背景色をつけない（写真 + テキストオーバーレイが基本）
- 派手な CTA ボタン（塗りつぶし + 白文字）を作らない
- `palt` を適用しない
- テキストを密に詰めない（余白と通気性がブランドの核）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- ヒーローは全幅スライダーを維持（タッチスワイプ対応）
- ナビゲーションはハンバーガーメニュー化
- Hero Caption 26px → 20px 程度に縮小
- PICKUP グリッドは 1 カラム積みに変更
- フッターは 1 カラム積み

### タッチターゲット

- ナビゲーションリンクは line-height 1.3 × 17px ≈ 22px と小さいため、padding で 44px 以上を確保
- Pill フィルターは border-radius 60px の十分な hit area を確保

### フォントサイズの調整

- 見出し SabonNext は PC 比 70〜80% に縮小
- 本文 Avenir 14〜15px はモバイルでもそのまま維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: ARTS&SCIENCE
Text Primary: #1e1e1e (墨色)
Text Light: #efefef (写真上テキスト)
Background: #f9f9f9 (温白)
Surface Hero: #ecebeb (温グレー)
Footer: #1e1e1e
Heading Font: SabonNextRegular, serif (代替: EB Garamond)
Body Font: Avenir55Roman, yakuhanjp, yugothic,
           "Hiragino Kaku Gothic ProN", serif (代替: Nunito Sans)
Label Font: SabonNextDemi, serif
Body Size: 14–15px / 400–500 / line-height 1.8
Heading Size: 17–26px / 400 / line-height 1.3
Letter Spacing (heading): 0.03em
Letter Spacing (body): 0.05em
Letter Spacing (label): 0.15em
CTA Style: テキストリンク（ボタン UI なし）
Pill Filter: radius 60px / transparent bg
OpenType: palt 不使用
```

### プロンプト例

```
ARTS&SCIENCE のデザインシステムに従って、新作コレクションページを作成してください。
- ヒーローは全幅写真。キャプション "Products" は SabonNextRegular 26px / 400 / #efefef / letter-spacing 0.03em で写真上にオーバーレイ
- セクションタイトル "PICKUP" は SabonNextRegular 21px / 400 / letter-spacing 0.063em
- 商品名は Avenir55Roman + Hiragino Kaku Gothic ProN 15px / 500 / line-height 1.8 / letter-spacing 0.05em
- カテゴリラベル "Collection" は Avenir55Roman 13px / 400 / letter-spacing 0.05em
- 背景は #f9f9f9（温白）、セクション面は #ecebeb（温グレー）
- テキスト色は #1e1e1e（墨色）、写真上は #efefef
- CTA ボタンは使わない。テキストリンクのみ
- palt は使わない、font-weight は最大 500
- 全体的に余白を広く取り、ギャラリーのような静謐さを保つ
```

### 字詰め・組版の重要ポイント

1. **セリフ体が主役**: 見出し・ナビにはガラモン系セリフ（SabonNext）を使い、サンセリフは本文補助に留める
2. **font-weight は 500 が上限**: 700 以上の太字は使わない。ブランドの控えめさの核
3. **letter-spacing の3段階**: 見出し 0.03em → 本文 0.05em → ラベル 0.15em の階層がある
4. **line-height の2段階**: セリフ見出し 1.3（詰め）、サンセリフ本文 1.8（広め）
5. **純黒・純白を避ける**: テキストは `#1e1e1e`、背景は `#f9f9f9`。柔らかいコントラスト
6. **ボタンレス UI**: CTA を塗りつぶしボタンで表現しない。テキストリンクと pill フィルターのみ
7. **写真が主役**: UI の色彩は無彩色に徹し、プロダクト写真の色と質感を邪魔しない

---

**取得日**: 2026-06-07
**出典**: https://arts-science.com/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測 + CSS Custom Properties 抽出
