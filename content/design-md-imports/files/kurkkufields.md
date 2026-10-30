# DESIGN.md — KURKKU FIELDS（クルックフィールズ）

> KURKKU FIELDS（https://kurkkufields.jp/）のデザイン仕様書。
> 千葉県木更津市の、農業・食・アート・自然体験が一体となったサステナブルファーム＆パーク。音楽プロデューサー小林武史が手がける「いのちのてざわり」をテーマにした複合施設。
> 実サイトの computed style 実測（2026-05-09 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **カテゴリ別カラーコーディング**が最大の特徴。INFORMATION / EAT / ART / EXPERIENCE / EVENT / FARM / STAY 等のコンテンツ領域ごとに固有の背景色を割り当て、**色そのものがナビゲーション**として機能する。自然由来のアースカラーパレットで「大地・食・芸術」を視覚的に統合
- **密度**: 本文 12〜13px / line-height 2.0 / letter-spacing 0.1em。小さな文字サイズと広い行間・字間で**静かで丁寧な印象**を構築。農園の余白感をタイポグラフィに反映
- **キーワード**: カテゴリカラーコーディング、Noto Sans JP、アースカラー、オリーブグリーン、直角（radius 0）、広い字間、サステナブル、静謐
- **特徴**:
  - **10 色以上のカテゴリカラーシステム** — オリーブグリーン（INFORMATION）、アンバー（EAT）、テラコッタ（ART）、スカイブルー（EXPERIENCE）、ディープブルー（EVENT）等、各カテゴリが固有の色を持つ
  - **Noto Sans JP が唯一の和文フォント**。明朝体は使わず、ゴシック一本で統一
  - **英語 UI ラベルに Helvetica / Roboto スタック**。"ONLINE SHOP" 等の欧文ラベルは和文と異なるフォントファミリーを使用
  - **letter-spacing 0.1em がグローバル適用**。本文・見出し問わず広めのトラッキングで呼吸感を出す
  - **weight 500（Medium）を多用**。400（Regular）と 700（Bold）の間をメインに使い、穏やかな強調を実現
  - **border-radius は一切なし（全要素 0px）**。シャープな直線で自然素材の「素朴さ」とのコントラストを演出
  - **OpenType 機能なし**。`palt` / `kern` は未使用。0.1em の広い字間で自然な余白を確保

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。
> KURKKU FIELDS 最大の特徴である**カテゴリカラーコーディング**を中心に構成。

### Category Colors（カテゴリ色 — ブランドの核心）

各コンテンツカテゴリに固有の背景色が割り当てられ、色そのものがナビゲーションとして機能する。

| Category | hex | RGB | 出現数 | 色の印象 |
|----------|-----|-----|--------|----------|
| INFORMATION | `#829a2a` | (130, 152, 42) | 20 | オリーブグリーン — **最頻出。実質的なブランドカラー** |
| EAT / DINING | `#eeb200` | (238, 178, 0) | 14 | ウォームアンバー — レストラン・食 |
| PEOPLE | `#949490` | (148, 148, 144) | 14 | ウォームグレー — 人・スタッフ紹介 |
| EXPERIENCE | `#89b2c9` | (137, 178, 201) | 4 | スカイブルー — 自然体験プログラム |
| ART | `#dc8f74` | (220, 143, 116) | 4 | テラコッタ — アート・インスタレーション |
| EVENT | `#4082ab` | (64, 130, 171) | 4 | ディープブルー — イベント告知 |
| SUSTAINABILITY | `#5f9133` | (95, 145, 51) | 2 | ディープグリーン — サステナビリティ |
| FARM | `#9eaf19` | (158, 175, 25) | 2 | ライムグリーン — 農園・収穫 |
| STAY | `#a8aaa9` | (168, 170, 169) | 2 | ミディアムグレー — 宿泊 |

### Brand

- **Primary（オリーブグリーン）** (`#829a2a`): INFORMATION カテゴリの背景色として最も頻出。サイト全体の基調色
- **Highlight Yellow** (`#ffff00`): 強調表示・アテンション用

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 本文テキスト・見出し |
| Warm Gray (PEOPLE) | `#949490` | (148, 148, 144) | PEOPLE カテゴリ・サブテキスト |
| Medium Gray (STAY) | `#a8aaa9` | (168, 170, 169) | STAY カテゴリ |
| Light Gray | `#dcdedd` | (220, 222, 221) | その他カテゴリ・区切り・ボーダー |
| Nav Background | `#eff4f8` | (239, 244, 248) | ナビゲーション背景 |
| White | `#ffffff` | (255, 255, 255) | ページ背景・カード面 |

### Semantic（推奨値）

実サイトには明確なエラー／成功色は表面化していない。アースカラーに調和する推奨補完値:

- **Danger**: `#c04040`（テラコッタに寄せた赤）
- **Warning**: `#d4960a`（アンバー系の黄土）
- **Success**: `#5f9133`（SUSTAINABILITY のディープグリーンと兼用可）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP** — 唯一の和文フォント。明朝体は一切使用しない
- フォールバックは generic `sans-serif` のみ。OS のシステムフォントに任せる構成

### 3.2 欧文フォント

- **サンセリフ（UI ラベル）**: **Helvetica, "Helvetica Neue", Roboto** — "ONLINE SHOP" 等の英語 UI ラベル専用。和文とは明確にフォントスタックを分離
- 欧文セリフ: なし
- 等幅: なし

### 3.3 font-family 指定

実サイトの実測値（2 バリエーション）:

```css
/* 本文・見出し・ナビ・カード（和文全般） */
font-family: "Noto Sans JP", sans-serif;

/* 英語 UI ラベル（"ONLINE SHOP" 等） */
font-family: Helvetica, "Helvetica Neue", Roboto, sans-serif;
```

**フォールバックの考え方**:
- 和文は **Noto Sans JP 単独 + generic sans-serif** のみ。ヒラギノ等のシステムフォントへのフォールバックは設定されていない
- 欧文 UI ラベルは **Helvetica 優先** で、Windows/Android 向けに Roboto でフォールバック
- 和文と欧文の **フォントスタックが明確に分離** されている点が特徴

> **代替フォント注記**: Noto Sans JP は Google Fonts で直接利用可能。preview.html でもそのまま使用できる。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-09 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| H1 Logo | Noto Sans JP | 13px | 700 | 16px (×1.23) | 1.3px (0.1em) | `#000000` | "KURKKUFIELDS クルックフィールズ" |
| H1 Content | Noto Sans JP | 14px | 700 | 24px (×1.71) | 1.4px (0.1em) | `#000000` | コンテンツ見出し |
| Info Tag | Noto Sans JP | 15px | 500 | — | 1.3px (0.087em) | `#000000` | 案内タグ "*入場料金に関しては..." |
| Nav Label | Noto Sans JP | 15px | 700 | — | — | `#000000` | "ナビゲーション"（bg `#eff4f8`） |
| Nav Category | Noto Sans JP | 13px | 500 | — | 1.5px (0.115em) | `#000000` | "［レストラン］" |
| Info Detail | Noto Sans JP | 14px | 500 | — | 1.3px (0.093em) | `#000000` | 施設情報 |
| Body | Noto Sans JP | 12px | 400 | 24px (×2.0) | 1.2px (0.1em) | `#000000` | 記事・説明文 |
| Body (Default) | Noto Sans JP | 13px | 400 | 16px (×1.23) | 1.3px (0.1em) | `#000000` | ページ全体のデフォルト |
| EN Label | Helvetica stack | 10px | 700 | — | 0.65px (0.065em) | `#000000` | "ONLINE SHOP" |
| Nav Link (Bold) | Noto Sans JP | 13px | 700 | — | 1.3px (0.1em) | `#000000` | メインナビリンク |
| Nav Link (Regular) | Noto Sans JP | 13px | 400 | — | 1.3px (0.1em) | `#000000` | サブナビリンク |
| Footer | Noto Sans JP | 11px | 400 | — | 0.5px (0.045em) | `#000000` | フッターリンク |
| Location | Noto Sans JP | 13px | 400 | — | 1.3px (0.1em) | `#000000` | "千葉県木更津市" |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (12px 記事)**: **`2.0`**（24px / 12px）— 日本語サイトの中でもかなり広い。農園の余白感を反映
- **デフォルト (13px)**: `1.23`（16px / 13px）— UI テキストはタイトに詰める
- **コンテンツ見出し (14px)**: `1.71`（24px / 14px）

**字間 (letter-spacing)** — 実測:
- **グローバル**: **`0.1em`**（1.3px / 13px）— 全体に均一に広い字間を適用
- **本文 (12px)**: `1.2px ≒ 0.1em`
- **ナビカテゴリ (13px)**: `1.5px ≒ 0.115em`（やや広め）
- **英語 UI ラベル (10px)**: `0.65px ≒ 0.065em`（欧文は和文より狭め）
- **フッター (11px)**: `0.5px ≒ 0.045em`（小サイズは字間を控えめに）

**ガイドライン**:
- 日本語テキストは一律 **letter-spacing 0.1em** が基本。例外はフッター等の小文字
- 英語ラベルは和文より字間を狭く（0.065em 程度）
- 本文 12px に line-height 2.0 は、**和文としても最大級に広い行間**。コンテンツが呼吸する余白感を出す
- weight 500（Medium）を多用することで、400 と 700 の間の**穏やかな強調**を実現

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

- 特別な改行制御の指定なし。標準的な和文禁則処理に準拠
- letter-spacing 0.1em の広い字間が、自然な改行位置の調整を助ける

### 3.7 OpenType 機能

```css
/* OpenType 機能なし */
font-feature-settings: normal;
```

- **`palt` / `kern` ともに未使用**
- 広い letter-spacing（0.1em）がプロポーショナル字詰めの代わりを担っている
- Noto Sans JP はデフォルトで一定の字詰め品質を持つため、`palt` なしでも自然な組版になる

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Category Color Badges / Labels

KURKKU FIELDS のコンポーネント設計の核心。各カテゴリは背景色で即座に識別可能。

| Category | Background | Text | 用途 |
|----------|------------|------|------|
| INFORMATION | `#829a2a` | `#ffffff` | お知らせ・ニュース |
| EAT | `#eeb200` | `#ffffff` | レストラン・食堂 |
| PEOPLE | `#949490` | `#ffffff` | スタッフ・人物紹介 |
| EXPERIENCE | `#89b2c9` | `#ffffff` | 体験プログラム |
| ART | `#dc8f74` | `#ffffff` | アート・展示 |
| EVENT | `#4082ab` | `#ffffff` | イベント告知 |
| SUSTAINABILITY | `#5f9133` | `#ffffff` | サステナビリティ |
| FARM | `#9eaf19` | `#ffffff` | 農園・収穫 |
| STAY | `#a8aaa9` | `#ffffff` | 宿泊 |

- Font: Noto Sans JP, 13px, weight 500〜700
- Letter Spacing: 0.1em
- Border Radius: `0`（直角）
- パディング: カテゴリに応じて可変

### Buttons

KURKKU FIELDS は明示的なボタンコンポーネントが少なく、**カテゴリカラーのリンクカード**がCTAの役割を担う。

**テキストリンク（インライン）**
- Color: `#000000`
- Font: Noto Sans JP, 13〜15px, weight 500
- Letter Spacing: 0.1em
- Text Decoration: underline（ホバー時）
- Border Radius: N/A

### Cards / Topic Cards

- Background: `#ffffff`
- Shadow: **`2px 4px 5px 0px rgba(4, 0, 0, 0.3)`** — 影ベースのエレベーション。ボーダーではなくシャドウでカードを浮かせる
- Border: なし
- Border Radius: `0`（直角）
- カテゴリ色のタグ/帯がカードの識別子として機能

### Navigation

- Background: `#eff4f8`（薄い青灰色）
- Font: Noto Sans JP, 13〜15px
- Label Weight: 700（"ナビゲーション"）
- Link Weight: 500〜700
- Letter Spacing: 0.1em〜0.115em
- カテゴリ名が括弧付きで表示: "［レストラン］" "［アート・自然］"

### Header

- Background: white / transparent
- Position: fixed / sticky
- Logo: 13px, weight 700, letter-spacing 0.1em
- 英語ラベル: Helvetica stack, 10px, weight 700

### Footer

- Background: 白系
- Font: Noto Sans JP, 11px, weight 400
- Letter Spacing: 0.5px (0.045em) — サイト全体より狭い
- Color: `#000000`

---

## 5. Layout Principles

### Spacing Scale（推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとテキストの間 |
| S | 8px | カード内の要素間 |
| M | 16px | カード内パディング |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の余白 |
| XXL | 80px | 大セクション間の縦余白 |

### Container

- Max Width: 推定 `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `40px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Sharp | 0 | **全要素**。カード・ボタン・バッジ・入力すべて直角 |

- KURKKU FIELDS は border-radius を一切使用しない。唯一のエッジスタイルは**直角**

### Grid

- カテゴリカードのグリッドレイアウト
- 2〜3 カラム（デスクトップ）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | テキスト要素・ナビゲーション |
| 1 | `2px 4px 5px 0px rgba(4, 0, 0, 0.3)` | **トピックカード** — 全カード共通の影 |

- **影がカードの主要な立体表現**。ボーダーを使わず、シャドウのみで浮遊感を出す
- シャドウの色は `rgba(4, 0, 0, 0.3)` — 純黒ではなくわずかに暖色寄り。アースカラーパレットとの調和
- シャドウの **X オフセット 2px** が特徴的 — 真下ではなく右下方向の光源を意識
- ナビゲーション・ヘッダー・フッターには影なし

---

## 7. Do's and Don'ts

### Do（推奨）

- **カテゴリごとに固有の背景色を使い分ける** — KURKKU FIELDS の核心。INFORMATION=#829a2a / EAT=#eeb200 / ART=#dc8f74 等
- **Noto Sans JP 一本で和文を統一**。明朝体は使わない
- **英語 UI ラベルは Helvetica / Roboto スタック** で和文と分離する（"ONLINE SHOP" 等）
- **letter-spacing を全体に 0.1em** 適用する。農園の呼吸感をタイポグラフィで表現
- **本文の line-height は 2.0**。広い行間で読みやすく穏やかな印象を保つ
- **weight 500（Medium）を積極的に使う**。400 と 700 の中間で穏やかな強調
- **border-radius は一律 0**。全要素を直角で統一する
- カードの立体感は **シャドウ（2px 4px 5px）** で表現する
- 色面に白文字を乗せる際は、**各カテゴリ色に対して十分なコントラストを確保**する

### Don't（禁止）

- **明朝体を使わない** — KURKKU FIELDS は Noto Sans JP ゴシック一本。明朝を混ぜるとブランドの静謐な均一感が壊れる
- **角丸（border-radius > 0）を使わない** — ピルボタン、丸角カード、丸アバター等すべて禁止。直角がブランドの線
- **カテゴリ色を入れ替えない** — INFORMATION にアンバー、EAT にグリーン等の色の入れ替えは混乱を招く。色＝カテゴリの対応は固定
- **彩度の高い純色（#ff0000, #0000ff 等）を使わない** — アースカラーの調和が崩れる
- **letter-spacing を 0 にしない** — 0.1em の広い字間がブランドの呼吸感。詰めると別のサイトに見える
- **本文の line-height を 1.5 以下にしない** — 2.0 が基本。詰めると農園の余白感が失われる
- **`palt` を適用しない** — 意図的に未使用。0.1em のトラッキングとの二重適用は字間が広がりすぎる
- **影のない平面的なカードにしない** — シャドウがカードの唯一の立体表現

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768〜1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト |

### モバイル時の調整

- 本文サイズ 12〜13px を維持（元から小さいため縮小不要）
- 見出し 14〜15px も維持
- カテゴリカラーカードは 1 カラムにスタック
- letter-spacing 0.1em は全画面サイズで維持
- ナビゲーションはハンバーガーメニュー化

### タッチターゲット

- カテゴリカードがリンク全体をラップ — カード面全体がタップ領域
- ナビリンク: 十分なパディングで 44px 以上のタップ領域確保
- フッターリンク: 11px と小さいが、行間と余白で最低限のタップ領域を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
=== Category Color System（最重要） ===
INFORMATION:   #829a2a (olive green)
EAT / DINING:  #eeb200 (warm amber)
PEOPLE:        #949490 (warm gray)
EXPERIENCE:    #89b2c9 (sky blue)
ART:           #dc8f74 (terracotta)
EVENT:         #4082ab (deep blue)
SUSTAINABILITY:#5f9133 (deep green)
FARM:          #9eaf19 (lime green)
STAY:          #a8aaa9 (medium gray)
OTHER:         #dcdedd (light gray)

=== Neutral ===
Text:          #000000
Nav BG:        #eff4f8
Highlight:     #ffff00
White:         #ffffff

=== Typography ===
JP Font:       "Noto Sans JP", sans-serif
EN Label Font: Helvetica, "Helvetica Neue", Roboto, sans-serif

Body:          12px / weight 400 / line-height 2.0 / letter-spacing 0.1em
Default:       13px / weight 400 / line-height 1.23 / letter-spacing 0.1em
Info Tag:      15px / weight 500 / letter-spacing 0.1em
Heading:       14px / weight 700 / line-height 1.71 / letter-spacing 0.1em
Nav Label:     15px / weight 700
EN Label:      10px / weight 700 / letter-spacing 0.065em (Helvetica)
Footer:        11px / weight 400 / letter-spacing 0.045em

=== Shape ===
Border Radius: 0（全要素）
Card Shadow:   2px 4px 5px 0px rgba(4, 0, 0, 0.3)
OpenType:      なし（palt / kern 未使用）
```

### プロンプト例

```
KURKKU FIELDS のデザインに従って、イベント一覧ページを作成してください。

カテゴリカラーシステム（最重要）:
- 各カテゴリには固有の背景色を使う:
  INFORMATION=#829a2a / EAT=#eeb200 / ART=#dc8f74 / EXPERIENCE=#89b2c9 /
  EVENT=#4082ab / FARM=#9eaf19 / SUSTAINABILITY=#5f9133 / STAY=#a8aaa9
- カテゴリ色の上の文字は白 #ffffff

フォント:
- 和文: "Noto Sans JP", sans-serif（明朝体は使わない）
- 英語ラベル: Helvetica, "Helvetica Neue", Roboto, sans-serif
- 本文: 12px / weight 400 / line-height 2.0 / letter-spacing 0.1em
- 見出し: 14px / weight 700 / line-height 1.71 / letter-spacing 0.1em
- weight 500（Medium）を補足テキストに使う

カード:
- Background 白 / border-radius 0（直角）/ border なし
- Shadow: 2px 4px 5px 0px rgba(4,0,0,0.3) で浮遊感を出す
- カテゴリ色の帯やタグでカードを分類

禁止事項:
- 角丸（border-radius > 0）は一切使わない
- 明朝体は使わない
- palt は適用しない
- letter-spacing を 0 にしない（0.1em が基本）
- カテゴリ色の入れ替えをしない
```
