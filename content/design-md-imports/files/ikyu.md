# DESIGN.md — 一休.com (ikyu.com)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 株式会社一休の運営する高級ホテル・旅館・レストランの予約サイト。

---

## 1. Visual Theme & Atmosphere

一休.com は **「カテゴリ別サブドメイン × 統一UIグラマー」** という二段構成のデザインシステム。
共通の Tailwind/Panda CSS ベースのコンポーネントセット（同じ radius・同じパディング・同じ Apple system フォント）の上に、サブドメインごとに **異なるブランドカラーレイヤー**を載せて宿泊・レストラン・スパなど複数の商品を展開している。

### サブドメインの役割分担

| サブドメイン | プロダクト | 主役カラー | 副カラー |
|------------|----------|----------|---------|
| `www.ikyu.com` | 国内宿泊 | `#1a4473` (deep navy) | `#008dde` (sky blue) |
| `restaurant.ikyu.com` | レストラン予約 | `#af9b65` (champagne gold) | `#ff7171` (coral) |
| (spa) | スパ・温泉日帰り | `#82a9da` | `#ff7171` |
| (outbound) | 海外宿泊 | `#a0634a` | `#4495ae` |
| (otoriyose) | お取り寄せ | `#b8593d` | `#ccaa89` |
| (furusato) | ふるさと納税 | `#861212` | `#222` |

CSS カスタムプロパティ（`--color-stay-main` / `--color-res-main` / …）として定義されており、共通CSSベースに対して**カテゴリの色だけが切り替わる**設計。

### 共通の雰囲気

- **密度**: 情報密度はやや高め（楽天・Booking.com 系の「予約サイト」グラマー）
- **キーワード**: Premium, Trusted, Editorial-Promo, Multi-vertical, iOS-native feel
- **写真主導**: ヒーローは大判写真、白〜薄グレーの面の上にカード状の検索フォーム
- **プロモ連打**: 上部に黄色帯・タイムセール帯・割引クーポン帯などの**重ね順高いプロモバナー**を頻繁に出す（伝統的な日本の予約サイト的アプローチ）

### キーワード

Premium, Hospitality, Multi-vertical, Reservation Engine, iOS Native, Mincho Serif Promo, Yellow Hazard Banner

---

## 2. Color Palette & Roles

### Neutrals（共通）

| Role | Hex | 備考 |
|------|-----|------|
| Page Background | `#FFFFFF` | ページ全体の地 |
| Surface (light) | `#F7F7F7` | カード/セクション背景。**最頻出（37回）** |
| Surface (subtle) | `#EEEEEE` | 薄い区切り |
| Border (light) | `#EEEEEE` | 弱い罫線 |
| Border (medium) | `#DDDDDD` | 標準罫線 |
| Border (deep) | `#CCCCCC` | 強調罫線 |
| Text Primary | `#333333` | 本文。`--color-neutral-800` |
| Text Secondary | `#696969` | 補足。`--color-gray-700` |
| Text Tertiary | `#888888` | キャプション |
| White | `#FFFFFF` | カード内地、CTA文字 |

### Stay（宿泊 / www.ikyu.com）

| Role | Hex | 備考 |
|------|-----|------|
| Brand Main | `#1A4473` | 深い紺。ヘッダー帯・ロゴ |
| Brand Sub | `#008DDE` | 明るい青。リンク・アクセント |
| Primary CTA | `linear-gradient(45deg, #1a4473, #008dde)` | 「検索する」ボタン (`bg-brand-gradient-p`) |
| Promo Banner Bg | `#FFC100` 系 | 黄色のセールハザード帯（"5%OFF"等） |

### Restaurant（restaurant.ikyu.com）

| Role | Hex | 備考 |
|------|-----|------|
| Brand Main | `#AF9B65` (CSS変数) / `#9F8C5B` (実測) | シャンパンゴールド。ロゴ・見出しアクセント |
| Brand Sub / CTA | `#FF7171` | コーラル。「検索する」ボタン |
| Hero Overlay | `rgba(0, 0, 0, 0.4)` / `rgba(0, 0, 0, 0.6)` | 写真ヒーローのテキスト可読性確保用 |
| Surface (warm) | `#F8F5EE` | レストラン側の暖色系サーフェス |

### Loyalty Tier Gradients（一休ステージ）

一休の会員ランク制度を表す**専用カラートークン**。バッジやスコアリング表示に使う。

| Tier | Gradient | 備考 |
|------|----------|------|
| Diamond | `linear-gradient(45deg, #0c7b8e, #54acb9)` | ティール系 |
| Platinum | `linear-gradient(45deg, #777, #c4c4c4)` | グレー系 |
| Gold | `linear-gradient(45deg, #a88304, #d6b604)` | 黄金 |
| Bronze | `linear-gradient(45deg, #844c00, #ac7318)` | ブロンズ |
| Regular (会員) | `linear-gradient(45deg, #d27d07, #ffb44d)` | オレンジ |
| Coupon | `linear-gradient(45deg, #907600, #a89300)` | くすんだゴールド |

### Functional Colors

| Role | Hex | 備考 |
|------|-----|------|
| Login (LINE) | `#00B900` | LINE ログイン緑 |
| Error | `#DE180D` | エラーメッセージ |
| Review Orange | `#FF6600` | 評価★ |
| Review Amber | `#FF9900` | 評価★ |
| Review Yellow | `#FFCC00` | 評価★ |
| Overlay (modal) | `rgba(0, 0, 0, 0.6)` | `--color-overlay: #0009` |

---

## 3. Typography Rules

### 3.1 和文フォント

```css
/* --font-family-sans / --font-family-regular */
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Helvetica Neue",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  sans-serif;
```

- **iOS / macOS ファースト**な指定。Apple system → Helvetica Neue → ヒラギノ角ゴ ProN の順
- Android / Windows 用の独自フォールバックは指定なし（OSデフォルトの Roboto / 游ゴシック等にフォールスルー）
- `Noto Sans JP` などの Web フォントは**読み込んでいない**（軽量化重視）

### 3.2 Mincho Serif（プロモ・ヒーロー専用）

```css
/* --font-family-serif / --font-family-title */
font-family:
  "游明朝",
  "Yu Mincho",
  "游明朝体",
  Times,
  "Times New Roman",
  "ヒラギノ明朝 ProN W3",
  HiraMinProN-W3,
  HGS明朝E,
  serif;
```

**最も特徴的な仕様**。ヒーローのプロモコピー（"割引クーポン配布中"等）に **游明朝 28px / 400** で使われ、高級感・編集デザイン感を演出する。
ボタンやナビなどのUI要素には**絶対に使わない**。あくまで「特集タイトル」「プロモ訴求文」用。

### 3.3 文字サイズスケール

CSS変数で 0.625rem 〜 1.75rem の**10段階スケール**を持つ:

```css
--font-size-xs:  0.625rem; /* 10px */
--font-size-sm:  0.75rem;  /* 12px */
--font-size-md:  0.875rem; /* 14px ← base */
--font-size-lg:  1rem;     /* 16px */
--font-size-xl:  1.125rem; /* 18px */
--font-size-2xl: 1.25rem;  /* 20px */
--font-size-3xl: 1.375rem; /* 22px */
--font-size-4xl: 1.5rem;   /* 24px */
--font-size-5xl: 1.625rem; /* 26px */
--font-size-6xl: 1.75rem;  /* 28px */
```

base font-size は **14px (md)**。一般的なWebの 16px ベースより小さく、情報密度を確保する。

### 3.4 文字サイズ・ウェイト階層（実測）

| Role | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|--------|-------------|----------------|-------|------|
| Body | 14px | 400 | 22.4px (×1.6) | normal | `#333` | 本文標準 |
| Promo Lead (Mincho) | 28px | 400 | 44.8px (×1.6) | normal | `#fff` | 游明朝。"割引クーポン配布中" |
| H2 (Section) | 24px | 700 | 38.4px (×1.6) | normal | `#333` | "いま最も売れている宿" |
| H2 (Restaurant Subtitle) | 14px | 400 | 21px (×1.5) | normal | `#9f8c5b` | レストランの見出し（ゴールド） |
| H2 (Restaurant Section) | 20px | 700 | 30px (×1.5) | normal | `#333` | "おすすめレストラン" |
| H3 (Sidebar Heading) | 12px | 700 | 19.2px (×1.6) | normal | `#696969` | "人気のキーワード" |
| Area Card Label | 18px | 700 | 28.8px (×1.6) | 0.45px (≈0.025em) | `#333` | エリア名 "伊豆"等 |
| CTA Primary | 18px | 700 | 28.8px (×1.6) | normal | `#fff` | "検索する" |
| CTA Restaurant | 16px | 700 | 16px (×1.0) | normal | `#fff` | レストラン側「検索する」 |
| Tag Pill | 12px | 400 | 19.2px (×1.6) | normal | `#333` | エリアタグ |

### 3.5 行間・字間

- **行間（line-height）**: 基本 **×1.6**（22.4/14, 28.8/18, 38.4/24, 44.8/28 すべて 1.6）
  - レストラン側は ×1.5 (21/14, 30/20) でやや詰め気味
- **字間（letter-spacing）**: ほぼ全要素で `normal`。例外的にエリアカードラベルだけ `0.45px (≈0.025em)` の軽いトラッキング

### 3.6 禁則処理・改行ルール

明示的な `word-break` / `overflow-wrap` 指定なし（ブラウザデフォルト）。

### 3.7 OpenType / 特殊機能

- `font-feature-settings: normal` （`palt` 不使用）
- 数字・通貨に特化したタブ配置等の指定もなし

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

#### Primary CTA "検索する"

| サブドメイン | bg | color | size | padding | radius | weight |
|------------|----|----|------|---------|--------|--------|
| Stay | `linear-gradient(45deg, #1a4473, #008dde)` | `#fff` | 18px | 16px 20px | 6px | 700 |
| Restaurant | `#FF7171` (coral) | `#fff` | 16px | 0 20px | 6px | 700 |

サブドメインで bg だけ切り替え、形・余白・タイポは共通。

#### Tag Pill（地名・キーワード）

```css
background: #F7F7F7;
color: #333333;
font-size: 12px;
font-weight: 400;
padding: 8px 12px;
border-radius: 6px;
```

灰色の薄い「タグピル」。地名・キーワード一覧で多用される。

#### Card Link（エリア・宿カード）

```css
background: #FFFFFF;
color: #333333;
font-size: 18px;
font-weight: 700;
border-radius: 6px;
/* hover: opacity: 0.7 (.hover-opacity ユーティリティ) */
```

### Cards

- **container**: bg `#fff` / radius `6px` / 影なしor極弱
- **背景**: 多くのリストセクションは `#F7F7F7` のページ地の上に**白カード**を並べる
- **画像比率**: 4:3 または 16:9。`object-fit: cover` で中央クロップ
- **ホバー**: `opacity: 0.7` のフェード（影の変化ではない）

### Search Form

トップページの心臓部。検索フォームは**白カード（radius 6px）+ タブ式の宿/ビジネス/特集切り替え**で構成。

```
┌─────────────────────────────────────────────┐
│ [宿] [ビジネス] [特集]  ←タブ                │
├─────────────────────────────────────────────┤
│ エリア・キーワード入力                          │
│ チェックイン日 | 泊数 | 大人数 子供数            │
│                       [   検索する  (gradient) ]│
└─────────────────────────────────────────────┘
```

### Promo Banners

ヒーロー上部に重ねる**ハザード帯**:
- 黄色 `#FFC100` 系の帯 + 黒文字 + 「OFF」「セール」「特集」のキャッチ
- 高さ 32〜40px ほどでヘッダーに密着
- これらは **Mincho serif ではなく Apple system + bold** で組まれる（情報の即時性を優先）

### Loyalty Badge

会員ランク表示は対応するグラデーションで塗られる小さなチップ:
```css
background: linear-gradient(45deg, #a88304, #d6b604); /* Gold */
color: #fff;
font-size: 12px;
font-weight: 700;
padding: 2px 8px;
border-radius: 4px;
```

---

## 5. Layout Principles

- **コンテナ幅**: 最大 1200〜1280px 程度。中央寄せ
- **モバイル優先**: base font-size 14px / iOS system フォントの選択は明確にスマホ閲覧を主軸にしている設計
- **セクション縦余白**: セクション間は 40〜64px
- **グリッド**: 宿カードは PC 4〜5 列、SP 2 列スクロール
- **カラム比**: 検索結果ページはサイドバー（フィルタ）+ メイン（カード一覧）の左右 2 カラム

---

## 6. Depth & Elevation

- **基本フラット**。box-shadow はほぼ使わない
- 区別は **背景色の濃淡**（白 vs `#F7F7F7`）と **罫線**（`#EEE` / `#DDD`）で行う
- ホバーは `opacity: 0.7` のフェード（`.hover-opacity` ユーティリティ）

---

## 7. Do's and Don'ts

### Do（推奨）

- 宿泊（Stay）系は **`#1a4473` 紺 + `#008dde` 青のグラデーション CTA** を主役にする
- レストラン系は **`#9f8c5b`〜`#af9b65` シャンパンゴールド + `#ff7171` コーラル CTA** に切り替える
- ヒーローのプロモコピーは **游明朝 28px / 400** で「高級・特別感」を出す
- UI要素（ボタン・ナビ・本文）は **Apple system / Hiragino Kaku Gothic ProN 14px** ベースで統一
- 行間は **×1.6** をデフォルトとする
- カードは **白 / radius 6px / 影なし**。区切りは背景色の濃淡で
- 会員ランクのバッジには**専用グラデーション**を使う（Diamond / Gold / Bronze の使い分け）

### Don't（禁止）

- ボタン・ナビ・本文に **游明朝を使わない**（あくまで Mincho はプロモ訴求文専用）
- サブドメインの色を**混ぜない**（宿泊画面に restaurant のゴールドを持ち込まない、逆もしかり）
- radius を `0` または `9999px (pill)` にしない（一休は **6px の角丸**で統一）
- box-shadow を派手に使わない（フラット基調を崩す）
- 本文の base size を 16px にしない（14px が標準。情報密度設計を崩す）
- Noto Sans JP を読み込まない（一休は Web フォント未使用、軽量・OS ネイティブ）

---

## 8. Responsive Behavior

明示的なブレークポイント値は抽出データに含まれず。Tailwind / Panda CSS の `pc:` プレフィックスから推定:

| Breakpoint | 用途 |
|------------|------|
| 〜767px | モバイル（標準） |
| 768〜1024px | タブレット |
| 1025px〜 | PC (`pc:` prefix が有効化) |

- モバイル: 1カラム + 横スクロールカード + ハンバーガー
- PC: 検索フォーム横長 + 2カラム結果 + ステッキーフィルタ

---

## 9. Agent Prompt Guide

### クイックリファレンス（Stay = www.ikyu.com）

```
Background:        #FFFFFF (page) / #F7F7F7 (surface)
Brand Main:        #1A4473 (deep navy)
Brand Sub:         #008DDE (sky blue)
CTA gradient:      linear-gradient(45deg, #1a4473, #008dde)
Text Primary:      #333333
Text Secondary:    #696969

Body Font:         -apple-system, "Hiragino Kaku Gothic ProN", sans-serif
Promo Font:        "游明朝", "Yu Mincho", "ヒラギノ明朝 ProN W3", serif
Body:              14px / 400 / lh 22.4px (×1.6) / ls normal / #333
H2:                24px / 700 / lh 38.4px (×1.6)
Promo Lead:        28px / 400 / lh 44.8px (×1.6) / 游明朝 / #fff over photo
CTA:               18px / 700 / lh 28.8px / radius 6px / padding 16px 20px
Tag Pill:          12px / 400 / bg #F7F7F7 / radius 6px / padding 8px 12px
Radius standard:   6px
LH ratio:          ×1.6 が基本
```

### クイックリファレンス（Restaurant = restaurant.ikyu.com）

```
Brand Main:        #9F8C5B (champagne gold, 実測) / #AF9B65 (CSS変数)
Brand Sub / CTA:   #FF7171 (coral)
Surface (warm):    #F8F5EE
H2 (subtitle):     14px / 400 / #9F8C5B / lh 21px (×1.5)
H2 (section):     20px / 700 / #333 / lh 30px (×1.5)
CTA:               16px / 700 / bg #FF7171 / radius 6px / padding 0 20px
LH ratio:          ×1.5（宿泊側より詰め気味）
```

### プロンプト例（宿泊）

```
一休.com（宿泊）のデザインに従って、温泉旅館の検索結果ページを作成してください。

- ページ背景: #FFFFFF。リストセクションは #F7F7F7 を背景色に使う
- 本文: -apple-system, "Hiragino Kaku Gothic ProN", sans-serif / 14px / 400 / line-height 22.4px (×1.6) / color #333
- 見出し: 24px / 700 / line-height 38.4px / color #333
- ヒーローのプロモ訴求文: "游明朝", "Yu Mincho", serif / 28px / 400 / line-height 44.8px / color #fff
- 「予約する」CTA: linear-gradient(45deg, #1a4473, #008dde) / color #fff / 18px / 700 / radius 6px / padding 16px 20px
- カード: bg #fff / radius 6px / box-shadow なし / hover で opacity 0.7
- 地名タグ: bg #F7F7F7 / 12px / 400 / radius 6px / padding 8px 12px
- 会員ランクバッジ: linear-gradient(45deg, #a88304, #d6b604) / 12px / 700 / radius 4px
- letter-spacing は normal を基本。行間は一律 ×1.6
- box-shadow はほぼ使わず、背景色と罫線で階層を作る
```

### プロンプト例（レストラン）

```
一休.com レストランのデザインに従って、銀座フレンチのレストラン詳細ページを作成してください。

- ページ背景: #FFFFFF。暖色系セクション地に #F8F5EE を併用
- 本文: -apple-system, "Hiragino Kaku Gothic ProN", sans-serif / 14px / 400 / line-height 21px (×1.5) / color #333
- セクション小見出し: 14px / 400 / color #9F8C5B（シャンパンゴールド）
- セクション見出し: 20px / 700 / color #333 / line-height 30px
- 「予約する」CTA: bg #FF7171 / color #fff / 16px / 700 / radius 6px / padding 0 20px
- 写真ヒーローのオーバーレイは rgba(0, 0, 0, 0.4) 〜 rgba(0, 0, 0, 0.6)
- ロゴ・装飾アクセントは #9F8C5B のシャンパンゴールド
- 評価★: #FF6600 / #FF9900 / #FFCC00 を順に使う
```

### マルチ・バーティカル戦略について

一休のデザインは **「同じ UI を着替えさせて複数のプロダクトを動かす」** 思想。
- **共通**: Apple system フォント / radius 6px / 14px ベース / フラット / カード
- **可変**: メインブランドカラー（CSS変数 `--color-{stay|res|spa|outbound|otoriyose|furusato}-main` で切替）

つまり 1 サイトの DESIGN.md ではなく、**1 つの UI システム + 6 つのカラーレイヤー**として捉えると AI に正しく作らせやすい。新しい縦軸（例: ふるさと納税）を追加するときも、共通 UI はそのままに、その縦軸専用の `main` / `sub` カラーペアを定義するのが一休のやり方。
