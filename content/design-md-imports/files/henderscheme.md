# DESIGN.md — Hender Scheme（エンダースキーマ）

> Hender Scheme 公式サイト（https://www.henderscheme.com/）のデザイン仕様書。
> 柏崎亮が 2010 年に設立した日本のハンドクラフトレザーブランド。ブランド名は "gender" に由来し、
> 社会的・文化的な差異を超えるものづくりを志向する。ヌメ革（植物タンニンなめし）を中心素材とし、
> 経年変化（エイジング）を楽しむプロダクト哲学で知られる。
> 実サイトの computed style 実測（2026-06-07 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: Futura 一書体 + 純白背景 + weight 100（Ultralight）という極限的な引き算のデザイン。**テキスト自体が「素材の風合い」のように薄く繊細で、革製品の手触りを視覚化**したかのようなウルトラライトタイポグラフィ
- **密度**: 情報密度は極めて低い。大きな余白の中にプロダクト写真と極小テキストが点在するギャラリー型レイアウト
- **キーワード**: ウルトラライト、Futura モノフォント、純白、モノクローム、weight 100、手仕事、経年変化
- **特徴**:
  - **Futura 一書体のみ** — 和文・欧文の区別なく、サイト全体を Futura, sans-serif のみで構成。日本語テキストはブラウザの sans-serif フォールバックに委ねる
  - **weight 100（Ultralight）が見出しの標準** — 通常のサイトでは使わない極端に細いウェイト。h1, h2, h3 すべてが 100。手仕事の繊細さ・控えめさを体現
  - **本文 weight 400 も控えめなサイズ** — body 16px / weight 400 だが、実際に表示される本文テキストは 10〜13px が中心
  - **テキスト色は #000000 と #808080 の二色構成** — プライマリテキストに純黒、キャプション・補足に中間グレー
  - **CTA は枠なし・角丸なし・背景白** — "ONLINE SHOP" リンクが典型で、12px / #5a5a5a / border-radius 0 / 枠線なし。ボタンというよりテキストリンク
  - **letter-spacing が広い** — 見出し 0.1〜0.2em、リンク 0.15〜0.2em。Futura のジオメトリック骨格に呼吸する余白を加え、レザーの自然な質感を暗示
  - **CSS Custom Properties なし** — デザイントークンやCSS変数を一切使わない、手書き感のある極小 CSS 設計
  - **font-feature-settings なし** — palt, kern ともに不使用。Futura のデフォルトメトリクスをそのまま活かす
  - **装飾的スクロールリンク** — "TOP" テキストが 56px / weight 700 / #dcdcdc で淡く表示される。UI としての機能は最小限で、タイポグラフィそのものがオーナメントになる

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Foreground（テキスト）

- **Pure Black** (`#000000`): プライマリテキスト。見出し・ブランド哲学テキスト・ナビゲーションリンクに使用
- **Mid Gray** (`#808080`): セカンダリテキスト。キャプション、ニュース説明文、日付等の補足情報（10px）
- **CTA Gray** (`#5a5a5a`): "ONLINE SHOP" 等のアクションリンク。黒と中間グレーの間の控えめなトーン
- **Decorative Light** (`#dcdcdc`): "TOP" スクロールリンク等の装飾的テキスト。背景に溶け込む淡さ

### Surface（背景）

- **Pure White** (`#ffffff`): ページ背景。全面にわたり純白。カード・セクション分けの面色も白で、面の分離は余白のみで行う

### Border / Input

- **Input Border** (`#bbbbbb`): テキスト入力欄の枠線（1px solid）。プレースホルダーテキストも同色

> **Note**: Hender Scheme のパレットは **完全な無彩色**。ブランドカラーと呼べる有彩色は存在しない。純白の背景に純黒のテキスト、#808080 のキャプション、#5a5a5a のリンクという 4 段階のグレースケールだけで構成される。色彩ではなく**タイポグラフィのウェイトと letter-spacing** でニュアンスを作るアプローチ。

---

## 3. Typography Rules

### 3.1 和文フォント

Hender Scheme は和文専用フォントを指定していない。日本語テキスト（ブランド哲学文、ニュース説明文等）はブラウザのデフォルト sans-serif にフォールバックする。

> **Note**: サイト上の日本語テキストは限定的で、ブランド哲学の和文パート・ニュース説明・アトリエ情報程度。メインコンテンツは英文。

### 3.2 欧文フォント

- **Futura**（ライセンスフォント、Paul Renner 設計のジオメトリック・サンセリフ）
- サイト全体で Futura のみを使用。セリフ体・等幅体は一切なし

> **preview.html での代替**: Futura はライセンスフォントのため、Google Fonts の **Jost** を代替として使用する。Jost は Futura にインスパイアされたジオメトリック・サンセリフで、ウェイト 100（Thin）から 900 まで対応しており、Hender Scheme の ultralight タイポグラフィを再現できる。

### 3.3 font-family 指定

```css
/* サイト全体 */
font-family: Futura, sans-serif;

/* フォーム要素（input, textarea） */
font-family: sans-serif;
```

**フォールバックの考え方**:
- **超シンプルなスタック** — Futura + sans-serif のみ。ヒラギノ・游ゴシック等への細かいフォールバックチェーンは持たない
- **フォーム要素はシステムフォント** — input, textarea は sans-serif のみを指定し、OSデフォルトに委ねる
- **和文フォントの指定なし** — 日本語表示はブラウザのフォールバックに依存する割り切った設計

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|------|--------|-------------|----------------|------|
| Display (装飾) | Futura | 56px | 700 | — | 0.15em | "TOP" スクロールリンク（色 #dcdcdc） |
| Display (見出し) | Futura | 64px | 100 | — | 0.2em | "ABOUT" 等のページタイトル |
| Season Link | Futura | 20.8px | 400 | — | 0.2em | "2026 S/A" 等のコレクションリンク |
| Body Link | Futura | 16px | 400 | — | 0.2em | "More News" 等のナビゲーションリンク |
| Section Title | Futura | 13px | 100 | 1.7 | 0.123em | "Sales Contact" "Atelier" 等の小見出し |
| Philosophy Text | Futura | 12.8px | 100 | 2.0 | 0.1em | ブランド哲学の英文本文（h2, h3） |
| CTA | Futura | 12px | 400 | — | 0.15em | "ONLINE SHOP" ボタン（色 #5a5a5a） |
| Input | sans-serif | 12px | 400 | — | — | フォーム入力欄 |
| Caption | Futura | 10px | 400 | — | — | ニュース説明、日付（色 #808080） |

### 3.5 行間・字間

- **本文（哲学テキスト）の行間**: `2.0`（12.8px / 25.6px）。日本語本文と同等の広い行間で、ゆったりした読書体験
- **小見出しの行間**: `1.7`（13px / 22.1px）
- **見出し（Display）の行間**: 明示指定なし（ブラウザデフォルト）
- **見出しの字間**: `0.1em`〜`0.2em` と非常に広い。Futura のジオメトリック骨格に呼吸感を与える
- **CTA の字間**: `0.15em`。テキストリンクとしてのCTAに品のある広がり
- **キャプションの字間**: 明示指定なし

**ガイドライン**:
- Hender Scheme のタイポグラフィは **letter-spacing の広さ** が最大の特徴。見出し 0.2em、リンク 0.15em、本文 0.1em と全階層で広い字間を取る
- weight 100 + 広い letter-spacing の組み合わせが「手仕事の繊細さ、ヌメ革の素朴さ」を視覚化している
- 本文の line-height 2.0 は欧文サイトとしては異例に広く、日本語的な行間感覚に近い

### 3.6 禁則処理・改行ルール

- **特別な指定なし** — ブラウザのデフォルト挙動に委ねる
- 日本語テキストが限定的なため、禁則処理の明示設定は不要

### 3.7 OpenType 機能

- **font-feature-settings の指定なし** — palt, kern ともに不使用
- Futura のデフォルトメトリクスをそのまま活かす設計

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### CTA Link ("ONLINE SHOP")
- 背景: `#ffffff`（白）
- 文字色: `#5a5a5a`
- font-size: 12px / weight 400
- letter-spacing: 0.15em（1.8px）
- border: なし
- border-radius: **0px**（角丸なし）
- hover: 特別な変化なし
- **ボタンというよりスタイル付きテキストリンク**。装飾を極限まで排除

#### Navigation Link ("More News" / "2026 S/A")
- 背景: 透過
- 文字色: `#000000`
- font-size: 16〜20.8px / weight 400
- letter-spacing: 0.2em
- border: なし
- テキストリンク。ボタンの形状を持たない

#### Decorative Scroll ("TOP")
- 文字色: `#dcdcdc`
- font-size: 56px / weight 700
- letter-spacing: 0.15em
- UI 機能ではなく**タイポグラフィの装飾要素**

### Navigation

- font-family: Futura, sans-serif
- 極小テキスト（12〜13px）で控えめに構成
- 文字色: `#000000`
- 装飾なし（テキストリンク）

### Inputs

- 背景: 透過
- 罫線: `1px solid #bbbbbb`
- 文字色: `#bbbbbb`（プレースホルダー）
- font-family: sans-serif
- font-size: 12px
- border-radius: 0px
- スタイル最小限。フォーム要素もミニマルに統一

### Cards

- Hender Scheme は明示的なカードコンポーネントを使わない
- プロダクト画像 + 下部キャプション（10px / #808080）というフラットな構成
- 背景・枠線・影なし。余白のみでエリアを区切る

---

## 5. Layout Principles

### Spacing

- **大きな余白で要素を分離** — 罫線やカード枠ではなく、空間の広さで情報を区切る
- 特定のスペーシングスケールやトークンは定義されていない（CSS 変数なし）

### Container

- コンテンツはセンタリングされ、左右に十分な余白を取る
- 画像はフルブリードではなく、余白に囲まれた配置

### Grid

- シンプルな 1〜2 カラム構成
- ニュースセクションは日付 + タイトル + 説明の水平レイアウト
- プロダクト写真は大きめの単独配置が基本

---

## 6. Depth & Elevation

- **影なし** — box-shadow は一切使用しない
- **罫線も最小限** — input の `1px solid #bbbbbb` のみ
- **段階表現は余白とウェイトで行う** — weight 100 の見出しと weight 400 の本文、#000000 と #808080 の濃淡で階層を作る
- **完全にフラットなデザイン**。奥行きや立体感を一切排除し、紙や革の平面性に通じる

---

## 7. Do's and Don'ts

### Do's（推奨）

- **font-family は Futura, sans-serif** のみを使う（preview.html では Jost で代替）
- **見出しは weight 100（Ultralight）** を必ず使う。Hender Scheme のデザイン言語の根幹
- **letter-spacing を広く取る** — 見出し 0.2em、リンク 0.15em、本文 0.1em
- **背景は純白 #ffffff** を全面に使う
- **テキスト色は #000000（純黒）を使う** — Aesop (#333333) や visvim (#222222) とは異なり、Hender Scheme は純黒
- **キャプション・補足は #808080** で控えめに
- **CTA は装飾なし（枠線なし・角丸なし）のテキストリンク** として表現する
- **大きな余白**でセクションを区切る。罫線やカード枠は使わない
- **影なし・フラット**を徹底する
- **本文の line-height は 2.0** で日本語的なゆったり感を出す

### Don'ts（禁止）

- **weight 100 以外のウェイトを見出しに使わない** — 300, 400 でも太すぎる。Ultralight が Hender Scheme の視覚的アイデンティティ
- **letter-spacing を normal（0）にしない** — 広い字間が必須。0.1em 未満はブランドの雰囲気を壊す
- **pill 型ボタン（border-radius 9999px）や角丸ボタンを使わない** — CTA はフラットなテキストリンク
- **有彩色を追加しない** — パレットは完全な無彩色。ブランドカラー的な色は存在しない
- **影やグラデーションを使わない** — フラットで平面的な質感が革の素材感に通じる
- **装飾的な要素（アイコン、バッジ、ラベル）を多用しない** — 極限まで引き算されたデザイン
- **フォントサイズを大きくしすぎない** — Display 以外は 13px 以下が基本。テキストは控えめに
- **palt や kern を適用しない** — font-feature-settings の指定なし
- **CSS 変数やデザイントークンを導入しない** — 手書き的な CSS 設計がブランドの質感に合う

---

## 8. Responsive Behavior

- デスクトップ: 余白たっぷりのセンタリングレイアウト。プロダクト画像が主役
- モバイル: 1 カラムに切り替え。フォントサイズは極小のまま維持
- Display 見出し（64px）はモバイルでスケールダウンする可能性あり
- ナビゲーションはコンパクトに折りたたみ
- letter-spacing はモバイルでも維持（ブランドアイデンティティの核心）
- タッチターゲット: テキストリンク型 CTA のため、十分なパディングを確保する必要あり

---

## 9. Agent Prompt Guide

Hender Scheme らしい UI を生成するときは以下を伝えるとよい：

```
- font-family: Futura, sans-serif（preview.html では Jost, sans-serif）
- 見出し: weight 100（Ultralight）/ letter-spacing 0.2em — これが最重要
- 本文: weight 400 / 10〜13px / letter-spacing 0.1em
- line-height: 本文 2.0、小見出し 1.7
- テキスト色: #000000（純黒）
- セカンダリ: #808080（キャプション・補足）
- CTA: #5a5a5a / 12px / letter-spacing 0.15em / 枠線なし / 角丸なし
- 装飾テキスト: #dcdcdc（淡いグレー、背景に溶け込む）
- 入力欄枠: #bbbbbb（1px solid）
- 背景: #ffffff（純白、全面）
- 影なし・罫線最小限・フラットデザイン
- CSSカスタムプロパティなし
- font-feature-settings なし（palt/kern 不使用）
- 完全無彩色パレット（有彩色ゼロ）
- 大きな余白でセクションを区切る。カード枠・区切り線は使わない
- 画像主導のギャラリー型レイアウト。テキストは最小限の引き立て役
```

### プロンプト例

```
Hender Scheme のデザインシステムに従って、プロダクト一覧ページを作成してください。
- フォント: Futura, sans-serif
- 見出し "COLLECTION" は 64px / weight 100 / letter-spacing 0.2em / color #000000
- プロダクト名は 13px / weight 100 / letter-spacing 0.1em
- 価格は 10px / weight 400 / color #808080
- "VIEW DETAIL" リンクは 12px / weight 400 / letter-spacing 0.15em / color #5a5a5a / 枠線なし
- 背景は #ffffff、影なし、罫線なし
- 大きな余白でプロダクトカードを区切る
```
