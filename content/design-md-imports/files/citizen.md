# DESIGN.md — シチズンウオッチ (CITIZEN Watch)

> シチズンウオッチ（https://citizen.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1918年創業の日本を代表する時計メーカーによる、製品中心のECサイト。ゴシック体ベースのモダンで清潔な構成で、Poppins（幾何学的サンセリフ）と Noto Sans JP のデュアルフォントで欧文・和文を使い分ける。グランドセイコーのような装飾性はなく、実用と正確さを重視した設計
- **密度**: 商品カード・フィルター・カテゴリナビが密に並ぶEC型レイアウト。余白は適度だが情報量は多い
- **キーワード**: プロダクト・ファースト、ダークネイビー、モダンゴシック、精密、実用美、グローバル palt
- **特徴**: font-feature-settings `"palt"` を **body レベルでグローバル適用**している点が最大の特徴。プロポーショナル字詰めが全テキストに効いており、約物の不自然な空きが解消されている。CTA は `border-radius: 2px` のほぼ矩形で、pill は検索バーのみ。ブランドアクセントのダークネイビー `#27455c` が随所に配され、精密機器メーカーとしての信頼感を演出。フッターは純黒 `#000000` でラグジュアリー感を加える

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

シチズンは **ダークネイビー #27455c** をブランドの基軸色とする。紺碧に近い青みのある暗色で、精密さ・信頼性・クラフツマンシップを想起させる。CTA には `#222222` のニアブラックを採用し、製品写真を邪魔しない抑制的なトーン。

- **Dark Navy** (`#27455c`): ブランドアクセント。セクション背景・ヘッダー等に 8 箇所以上出現（rgb 39, 69, 92）
- **Deep Navy** (`#041e41`): 最も深いネイビー。限定的なアクセント使用（rgb 4, 30, 65）
- **CTA Black** (`#222222`): Primary CTA ボタンの bg + border（rgb 34, 34, 34）
- **Filter Blue** (`#3860be`): トグルスイッチ・フィルター要素のアクセント（rgb 56, 96, 190）

### Neutral

- **Text Primary** (`#000000`): 見出し・強調テキスト
- **Text Body** (`#444444`): 本文・コンテンツテキスト（rgb 68, 68, 68）
- **Text Nav** (`#292c2d`): ヘッダーナビ・インタラクティブ要素（rgb 41, 44, 45）
- **Text Price** (`#a6acb1`): 価格表示・ミュートテキスト（rgb 166, 172, 177）
- **Text Cookie** (`#91999f`): クッキーバナー内テキスト（rgb 145, 153, 159）
- **Text Footer Muted** (`#d2d2d2`): フッター内の薄いテキスト（rgb 210, 210, 210）
- **Border** (`#707070`): セカンダリボタン・入力欄の枠線
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f9f9f9`): セクション背景・カード面（rgb 249, 249, 249）
- **Divider** (`#e5e5e5`): セクション区切り・境界線（rgb 229, 229, 229）
- **Footer** (`#000000`): フッター背景（純黒）

### Accent

- **Light Pink** (`#fbebee`): プロモーション・キャンペーン系のアクセント面（rgb 251, 235, 238）
- 全体として装飾色は極めて控えめ。ダークネイビーとニュートラルグレーで構成する

---

## 3. Typography Rules

### 3.1 和文フォント

- **Noto Sans JP**: Google Fonts。本文・見出し・UI すべてに使用
- sans-serif: 最終フォールバック

### 3.2 欧文フォント

- **Poppins**: Google Fonts の幾何学的サンセリフ。ラテン文字に優先適用
- **Arial**: 一部のボタン・クッキー UI でのフォールバック
- sans-serif: 最終フォールバック

### 3.3 font-family 指定

```css
/* メイン（全要素共通） */
font-family: Poppins, "Noto Sans JP", sans-serif;

/* 一部ボタン・クッキー UI */
font-family: Arial, sans-serif;
```

**フォールバックの考え方**:
- 欧文 Poppins を先頭に置き、ラテン文字は Poppins で描画。日本語グリフは Noto Sans JP に自動フォールバック
- Poppins の幾何学的な直線と Noto Sans JP のニュートラルなゴシックが、精密機器ブランドらしいクリーンさを作る
- 両方とも Google Fonts のため、ライセンス制約なくどの環境でも再現可能

### 3.4 文字サイズ・ウェイト階層

| Role | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|--------|-------------|----------------|------|
| Section Heading (h2) | 26px | 700 | 1.5 | normal | "注目のモデル" 等のメインセクション |
| Secondary Heading (h2) | 20px | 700 | 1.3 | normal | "最近見た商品" 等の補助セクション |
| Sub Heading (h3) | 18px | 700 | 1.2 | normal | "時計の使いかた" 等 |
| Body | 16px | 400 | 1.5 | normal | 標準本文 |
| Body Detail | 16px | 400 | 1.6 | normal | 説明文（やや広い行間） |
| Article | 14px | 400 | 1.5 | normal | 記事・詳細テキスト |
| Nav | 14px | 500 | 1.5 | normal | ヘッダーナビゲーション |
| Nav Expanded | 18px | 500 | 1.5 | normal | 展開メニュー内リンク |
| Brand Label | 14px | 600 | — | normal | "シリーズエイト" 等のブランド名 |
| Price | 12px | 600 | 1.5 | normal | "¥159,500" 等の価格表示 |
| Info Bar | 12px | 600 | 1.5 | normal | 告知バー |
| Badge | 11px | 600 | — | normal | "NEW" バッジ |
| Tax Note | 9px | 600 | 1.5 | normal | "（税込）" 等の注記 |
| Footer Link | 14px | 500 | 1.5 | normal | フッターナビ |
| Footer Small | 10–12px | 400 | — | normal | コピーライト・法的表記 |

### 3.5 行間・字間

- **本文の行間**: `line-height: 1.5`（24px / 16px）。ゴシック体の標準的な行送り
- **詳細文の行間**: `line-height: 1.6`（25.6px / 16px）。長文の説明にやや広めの行送り
- **見出しの行間**: h2 は 1.3〜1.5、h3 は 1.2。見出しは詰め気味
- **字間**: `letter-spacing: normal`。**palt のグローバル適用に委ね、明示的な letter-spacing は設定しない**のがシチズンの特徴

**ガイドライン**:
- 字間の調整は OpenType の `palt` が担う。手動で `letter-spacing` を追加すると palt との二重効果で詰まりすぎる
- ナビゲーション要素は weight 500（semi-bold 的）で、本文 400 との差を出す
- 価格・バッジ・ラベル系は weight 600 で情報の重要度を示す

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》」】、。，．・：；？！`
- 行末禁止: `（「『【〔〈《「【`
- 価格表記（"¥159,500（税込）"）は途中改行を避ける

### 3.7 OpenType 機能

```css
/* body レベルでグローバル適用 */
font-feature-settings: "palt" 1;
```

- **palt をグローバル適用**: シチズンの最大の組版特徴。body 要素に `font-feature-settings: "palt"` を設定し、**すべてのテキスト**にプロポーショナル字詰めを適用している
- 見出しだけでなく本文・ナビ・ボタン・価格表示のすべてで palt が効いている
- これにより、括弧・句読点の不自然な全角空きが解消され、和欧混植時の文字間バランスが均一になる
- **注意**: palt 適用済みのため、追加の `letter-spacing` は原則不要。指定する場合は palt との複合効果を考慮すること

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA**（"カートに入れる" "購入する" 等の主要動作）

- Background: `#222222`
- Text: `#ffffff`
- Border: 1px solid `#222222`
- Border Radius: **2px**（ほぼ矩形だがわずかに角を丸める）
- Padding: 12px 30px
- Font Family: `Poppins, "Noto Sans JP", sans-serif`
- Font Size: 14–16px
- Font Weight: 500–600

**Secondary Outline**（補助動作）

- Background: transparent
- Text: `#444444`
- Border: 1px solid `#707070`
- Border Radius: **3px**
- Padding: 12px 30px
- Font Size: 14–16px

**Cookie Settings**（クッキー設定パネル）

- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#222222`
- Border Radius: **2px**
- Padding: 12px 10px

### Inputs

**Search（検索バー）**

- Background: `#ffffff`
- Border: 1px solid `#707070`
- Border Radius: **50px**（pill 形状 — 唯一の大きな角丸）
- Padding: 6px 35px 6px 15px（右側に検索アイコン領域）
- Font Size: 14–16px

**Standard Input**

- Background: `#ffffff`
- Border: 1px solid `#707070`
- Border Radius: 2–3px
- Padding: 8px 12px

### Cards

- Background: `#ffffff`
- Border: なし（写真ベースのカード）
- Border Radius: 0px
- Shadow: なし
- 構成: 商品写真 + ブランドラベル（14px/600）+ 商品名 + 価格（12px/600）+ "NEW" バッジ（11px/600）

### Toggle Switch

- Background (ON): `#3860be`（Filter Blue）
- Background (OFF): `#e5e5e5`
- Border Radius: 17px
- サイズ: 34px × 20px 程度

---

## 5. Layout Principles

### Spacing Scale（実測ベース）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 6px | 検索バー縦 padding、バッジ内余白 |
| S | 10px | クッキーボタン横 padding |
| M | 12px | CTA 縦 padding |
| L | 15px | 検索バー左 padding |
| XL | 30px | CTA 横 padding |
| XXL | 35px | 検索バー右 padding（アイコン込み） |

### Container

- Max Width: 1200–1440px（推定）
- Padding (horizontal): 16–24px

### Grid

- 商品一覧: 3〜4 カラム（デスクトップ）
- ブランドカテゴリ: 2〜3 カラム
- フッター: 4〜5 カラム（リンク群）
- ヒーロー: 全幅 1 カラム

---

## 6. Depth & Elevation

シチズンはフラットデザインを基調とし、シャドウの使用は最小限。面の差異は背景色の切り替え（`#ffffff` → `#f9f9f9` → `#e5e5e5`）で表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準。商品カード、本文領域 |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | ヘッダー固定時のドロップシャドウ（想定） |
| 2 | `#e5e5e5` の border / bg 切替 | セクション区切り |
| Footer | bg `#000000` | フッター（純黒で空間を断つ） |
| Brand Section | bg `#27455c` | ブランドストーリー等のダークセクション |

---

## 7. Do's and Don'ts

### Do（推奨）

- `font-feature-settings: "palt" 1` を body に必ず指定する。シチズンの組版の核心
- フォントは Poppins（欧文先頭）+ Noto Sans JP の順で指定する
- 本文の `line-height` は 1.5 以上を確保する
- CTA は `border-radius: 2px` のほぼ矩形にする。pill にしない（検索バーのみ例外）
- Primary CTA は `#222222` のニアブラックで、ブランドカラー `#27455c` と使い分ける
- ナビゲーション要素は weight 500、ラベル・価格は weight 600 で情報階層を作る
- フッターは `#000000` 背景 + 白・薄グレーテキストのラグジュアリー構成にする
- 色のコントラスト比は WCAG AA 以上を確保する

### Don't（禁止）

- `letter-spacing` を大きく指定しない。palt が字詰めを担うため、追加すると二重効果になる
- 明朝体・セリフフォントを使わない。シチズンはゴシック/サンセリフのみ
- CTA に大きな角丸（radius 8px 以上）を使わない。pill は検索バーのみ
- 鮮やかな装飾色を多用しない。ダークネイビー + ニュートラルグレーの世界を保つ
- フッターに白背景を使わない。純黒 `#000000` がシチズンのフッターの特徴
- ブランドアクセント `#27455c` を CTA ボタンに使わない。CTA は `#222222`、アクセント面に `#27455c` と役割を分ける
- 見出しの font-weight を 400 にしない。シチズンの見出しは 700（グランドセイコーとの明確な差異）

---

## 8. Responsive Behavior

### Breakpoints（想定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン |
| Tablet | 768〜1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### モバイル時の調整

- h2 26px → 20px 程度に縮小
- 商品グリッドは 1〜2 カラムに折り返す
- 検索バー（pill）は全幅に拡大
- ハンバーガーメニュー化（展開時 18px/500 のリンク）
- CTA の padding 12px 30px → 12px 20px

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- Primary CTA は padding 12px により最小 40px 高を確保
- ナビリンクは padding で十分なタップ領域を確保

### フォントサイズの調整

- モバイルでは本文 14–16px を維持
- 見出しはデスクトップの 70–80% 程度に縮小
- 価格表示の 12px は変更しない（情報密度の維持）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand: シチズンウオッチ (CITIZEN Watch)
Brand Accent: #27455c (Dark Navy)
CTA Color: #222222 (Near Black)
Filter Accent: #3860be (Blue)
Text Primary: #000000
Text Body: #444444
Background: #ffffff
Surface: #f9f9f9
Divider: #e5e5e5
Footer: #000000
Font: Poppins, "Noto Sans JP", sans-serif
Body Size: 16px / 400 / line-height 1.5
Heading Weight: 700
Nav Weight: 500
Label/Price Weight: 600
CTA Border Radius: 2px
Search Radius: 50px (pill)
palt: グローバル適用（body レベル）
Letter Spacing: normal（palt に委任）
```

### プロンプト例

```
シチズンウオッチのデザインシステムに従って、新作時計の商品一覧ページを作成してください。
- フォント: Poppins, "Noto Sans JP", sans-serif
- body に font-feature-settings: "palt" 1 を必ず指定
- 本文 color は #444444、line-height: 1.5
- セクション見出し h2 は 26px / 700 / line-height 1.5 / color #000000
- ブランドラベル "シリーズエイト" は 14px / 600
- 価格 "¥159,500（税込）" は 12px / 600 / color #a6acb1
- "NEW" バッジは 11px / 600
- Primary CTA「カートに入れる」は #222222 bg + #ffffff text + 1px solid #222222 + radius 2px + padding 12px 30px
- Secondary CTA「お気に入り」は transparent bg + #444444 text + 1px solid #707070 + radius 3px
- 検索バーは border-radius: 50px の pill 形状 + border 1px solid #707070
- セクション背景は #ffffff と #f9f9f9 を交互に
- フッターは #000000 背景
- ブランドストーリーセクションは #27455c 背景 + #ffffff テキスト
```

### 字詰め・組版の重要ポイント

1. **palt グローバル適用**: `font-feature-settings: "palt" 1` を body に指定。シチズン最大の組版特徴。括弧・句読点の不自然な全角空きが解消される
2. **letter-spacing は normal**: palt が字詰めを担うため、追加の letter-spacing は不要
3. **Poppins + Noto Sans JP のデュアルフォント**: 欧文を先頭に置き、ラテン文字は幾何学的サンセリフで描画
4. **weight の 3 段階使い分け**: 本文 400 / ナビ 500 / ラベル・価格・見出し 600–700
5. **CTA は radius 2px**: pill ではなくほぼ矩形。検索バーだけが radius 50px の例外
6. **#222222 と #27455c の使い分け**: CTA はニアブラック、ブランドセクションはダークネイビー

---

**取得日**: 2026-05-09
**出典**: https://citizen.jp/
**抽出方法**: Headless Chrome (Puppeteer) による computed style 実測
