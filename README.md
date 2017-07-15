# PostCSS

## 環境構成

| 設定ファイル | 概要 |
| --- | --- |
| .stylelintignore | stylelintに無視させるファイル・ディレクトリを指定するファイル |
| postcss-sorting.json | @ルールやプロパティの順番を指定するファイル |
| postcss.config.js | PostCSSの設定ファイル |
| stylelint.config.js | stylelintの設定ファイル |

## パッケージの分類

* 必須（開発案件）
  * ベンダープレフィックス追加・削除
    * autoprefixer
  * ファイル圧縮
    * cssnano
  * CLI操作
    * postcss-cli
  * ノーマライズ
    * postcss-normalize
  * 構文チェック
    * postcss-reporter
    * stylelint
    * stylelint-order
  * @ルール、プロパティの順番の整列
    * postcss-sorting
* AltCSS
  * postcss-import
  * postcss-mixins
* cssnext
  * postcss-custom-media
  * postcss-custom-properties
  * postcss-nesting
* ユーティリティ
  * postcss-utilities


## パッケージ

### autoprefixer
ベンダープレフィックスを自動で追加・削除する。

### cssnano
CSSファイルを圧縮する。

### postcss-cli
CLIで扱えるようにする。

### cssnext
#### postcss-custom-media
メディアクエリの定義に名前をつけることができるようにする。

```
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
  /* styles for small viewport */
}
```

#### postcss-custom-properties
変数を使用できるようにする。

```
:root {
  --color: red;
}

div {
  color: var(--color);
}
```

### postcss-import
インポート機能を実現する。<br>
postcss.config.jsで最初にrequireしないとエラーになる可能性あり。

### postcss-mixins
ミックスイン機能を実現する。

```
@define-mixin new {
    …
}
.use {
  @add-mixin new;
}
```

### postcss-nesting
ネスト機能を実現する。

### postcss-normalize
ノーマライズ。

postcss.config.jsに追加

```
module.exports = (ctx) => ({
  plugins: [
    require('postcss-normalize')({
      forceImport: true,
      browsers: 'last 2 versions'
    }),
  ]
});
```

| オプション | 内容 |
| --- | --- |
| forceImport | 未指定の場合、先頭にnormarizeを挿入 |
| browsers | 対応ブラウザの指定 |

[リセット用CSSはもういらない、ブラウザのバージョンに適したスタイルを適用して標準化 -PostCSS Normalize](http://coliss.com/articles/build-websites/operation/css/use-the-parts-of-normalize-css-you-need.html)

### postcss-reporter
stylelintログを見やすくして表示。

### postcss-sorting
@ルールやプロパティの記述順を整理

[PostCSS SortingでCSSの@ルールやプロパティの記述順を整理](http://qiita.com/buchiya4th/items/e31443de593e48686c5c)

ATOM, VSCodeは`postcss-sorting`パッケージを入れる。

* Atom:Ctrl+Shift+S
* VSCode:F1でコマンドパレットを開きPostCSS Sorting: Runを選択

### postcss-utilities
便利なスタイルセットを `@util **` で使用できる。

[PostCSS Utility Libraryが物凄く使える](http://qiita.com/buchiya4th/items/793ed6bac462c2d262c0)

### stylelint
CSSの構文チェックツール。

[PostCSSとstylelintの環境構築](http://qiita.com/buchiya4th/items/01b4ad050b7c59b48539)
